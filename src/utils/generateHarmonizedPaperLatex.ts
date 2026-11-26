/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Publication-Grade LaTeX Source Distribution Generator for the IGRT Monograph (Edition H11)
 * - Generates modular multi-file LaTeX project (main.tex, preamble.tex, sections/*.tex,
 *   references.bib, figures/*.svg/.png, illustrations/*.jpg, Makefile, README.md)
 * - Generates single-file standalone LaTeX (IGRT_Harmonized_Monograph_H11.tex)
 * - Packages complete project into a standard UTF-8 ZIP archive (STORE method, zero dependencies)
 * - Compatible with both pdflatex + bibtex and xelatex/lualatex + bibtex
 */

import {
  PAPER_META,
  MASTER_EQUATION_ABSTRACT,
  PAPER_BIBTEX,
  PAPER_POSTULATES,
  PAPER_CHAPTERS,
  AUDITED_TEST_PROTOCOLS,
  AUDITED_CLOSURE_THEOREMS,
  PAPER_APPENDICES,
  PAPER_REFERENCES,
  CORE_TIME_MECHANISM_FALSIFIER,
  type PaperEquation,
  type PaperAppendix
} from '../types/harmonizedPaperData';
import {
  PLAIN_LANGUAGE_SUMMARY,
  SHORTENED_ABSTRACT,
  SCOPE_AND_NON_CLAIMS,
  LIST_OF_SYMBOLS,
  ACRONYMS_GLOSSARY,
  LIST_OF_TABLES,
  DIMENSIONAL_ANALYSIS_CLOSURE_A,
  DIMENSIONAL_ANALYSIS_CLOSURE_B,
  EQUATION_INDEX,
  FRAMEWORKS_COMPARISON_TABLE,
  CLAIM_EVIDENCE_LEDGER,
  ETHICS_AND_GOVERNANCE,
  TABLE_H1_CLOSURES,
  REVISION_HISTORY_TABLE,
  KNOWN_OPEN_PROBLEMS,
  TABLE_7_2_FITTED_VS_PREDICTED,
  TABLE_7_3_PROTOCOL_TIMELINE,
  TABLE_8_4_SCALAR_BUDGET,
  APPENDIX_M_STATUS_TABLE,
  H11_PREREG_SHA256
} from '../types/harmonizedPaperApparatus';
import { PAPER_FIGURES, PAPER_ILLUSTRATIONS } from '../components/HarmonizedPaperFigures';
import {
  H8_COMPOSITE_METRICS,
  H8_TWELVE_FAMILIES_SUMMARY
} from '../types/harmonizedPaperH8StressTest';
import {
  parseMathSegments,
  parseHtmlMathSegments,
  formatSvgMathMarkup,
  pdfBmpSafeUnicode,
  type MathSegment
} from './formatMathUnicode';

// ---------------------------------------------------------------------------
// 1. Unicode / Math / HTML -> LaTeX Translators
// ---------------------------------------------------------------------------

const COMBINED_ACCENTS: Record<string, string> = {
  '\u0302': '\\hat',
  '\u0303': '\\tilde',
  '\u0304': '\\bar',
  '\u0307': '\\dot',
  '\u0308': '\\ddot',
  '\u20D7': '\\vec'
};

const PRECOMPOSED_MATH_ACCENTS: Record<string, string> = {
  'Ĥ': '\\hat{H}',
  'ẋ': '\\dot{x}',
  'ȧ': '\\dot{a}',
  'Ṗ': '\\dot{P}'
};

const MATH_UNICODE_MAP: Record<string, string> = {
  // Greek uppercase
  'Γ': '\\Gamma ',
  'Δ': '\\Delta ',
  'Θ': '\\Theta ',
  'Λ': '\\Lambda ',
  'Ξ': '\\Xi ',
  'Π': '\\Pi ',
  'Σ': '\\Sigma ',
  'Υ': '\\Upsilon ',
  'Φ': '\\Phi ',
  'Ψ': '\\Psi ',
  'Ω': '\\Omega ',
  // Greek lowercase
  'α': '\\alpha ',
  'β': '\\beta ',
  'γ': '\\gamma ',
  'δ': '\\delta ',
  'ε': '\\varepsilon ',
  'ζ': '\\zeta ',
  'η': '\\eta ',
  'θ': '\\theta ',
  'κ': '\\kappa ',
  'λ': '\\lambda ',
  'μ': '\\mu ',
  'ν': '\\nu ',
  'ξ': '\\xi ',
  'π': '\\pi ',
  'ρ': '\\rho ',
  'σ': '\\sigma ',
  'τ': '\\tau ',
  'υ': '\\upsilon ',
  'φ': '\\varphi ',
  'ϕ': '\\phi ',
  'ϑ': '\\vartheta ',
  'ϖ': '\\varpi ',
  'ϵ': '\\epsilon ',
  'ς': '\\varsigma ',
  'χ': '\\chi ',
  'ψ': '\\psi ',
  'ω': '\\omega ',
  // Blackboard bold & calligraphic
  'ℂ': '\\mathbb{C}',
  'ℍ': '\\mathbb{H}',
  'ℝ': '\\mathbb{R}',
  'ℤ': '\\mathbb{Z}',
  'ℋ': '\\mathcal{H}',
  'ℐ': '\\mathcal{I}',
  'ℒ': '\\mathcal{L}',
  'ℛ': '\\mathcal{R}',
  '𝒜': '\\mathcal{A}',
  '𝒞': '\\mathcal{C}',
  '𝒟': '\\mathcal{D}',
  '𝒢': '\\mathcal{G}',
  '𝒦': '\\mathcal{K}',
  '𝒩': '\\mathcal{N}',
  '𝒪': '\\mathcal{O}',
  '𝒫': '\\mathcal{P}',
  '𝒱': '\\mathcal{V}',
  'ℏ': '\\hbar ',
  'ℓ': '\\ell ',
  // Operators, relations, symbols
  '°': '^\\circ',
  '±': '\\pm ',
  '·': '\\cdot ',
  '×': '\\times ',
  '†': '\\dagger ',
  '‖': '\\|',
  '′': "'",
  '″': "''",
  '→': '\\to ',
  '↔': '\\leftrightarrow ',
  '⇒': '\\Rightarrow ',
  '∂': '\\partial ',
  '∅': '\\emptyset ',
  '∇': '\\nabla ',
  '∈': '\\in ',
  '∉': '\\notin ',
  '∑': '\\sum ',
  '−': '-',
  '√': '\\sqrt',
  '∝': '\\propto ',
  '∞': '\\infty ',
  '∪': '\\cup ',
  '∩': '\\cap ',
  '∫': '\\int ',
  '∼': '\\sim ',
  '≃': '\\simeq ',
  '≈': '\\approx ',
  '≅': '\\cong ',
  '≠': '\\ne ',
  '≡': '\\equiv ',
  '≤': '\\le ',
  '≥': '\\ge ',
  '≪': '\\ll ',
  '≫': '\\gg ',
  '≲': '\\lesssim ',
  '≳': '\\gtrsim ',
  '≺': '\\prec ',
  '⊂': '\\subset ',
  '⊆': '\\subseteq ',
  '⊇': '\\supseteq ',
  '⊕': '\\oplus ',
  '⊗': '\\otimes ',
  '⨂': '\\bigotimes ',
  '⊙': '\\odot ',
  '⋊': '\\rtimes ',
  '⊥': '\\perp ',
  '∧': '\\wedge ',
  '∨': '\\vee ',
  '∀': '\\forall ',
  '∃': '\\exists ',
  '∗': '\\ast ',
  '⋆': '\\star ',
  '∘': '\\circ ',
  '□': '\\Box ',
  '⟨': '\\langle ',
  '⟩': '\\rangle ',
  '¼': '\\frac{1}{4}',
  '½': '\\frac{1}{2}',
  'ä': '\\ddot{a}',
  'Ġ': '\\dot{G}',
  'Ṗ': '\\dot{P}'
};

const TEXT_LATIN_ACCENTS: Record<string, string> = {
  'à': '\\`{a}',
  'á': "\\'{a}",
  'â': '\\^{a}',
  'ä': '\\"{a}',
  'å': '\\aa{}',
  'À': '\\`{A}',
  'Á': "\\'{A}",
  'Ä': '\\"{A}',
  'Å': '\\AA{}',
  'ç': '\\c{c}',
  'Ç': '\\c{C}',
  'è': '\\`{e}',
  'é': "\\'{e}",
  'ê': '\\^{e}',
  'ë': '\\"{e}',
  'È': '\\`{E}',
  'É': "\\'{E}",
  'ì': '\\`{i}',
  'í': "\\'{i}",
  'î': '\\^{i}',
  'ï': '\\"{i}',
  'ñ': '\\~{n}',
  'Ñ': '\\~{N}',
  'ò': '\\`{o}',
  'ó': "\\'{o}",
  'ô': '\\^{o}',
  'ö': '\\"{o}',
  'ø': '\\o{}',
  'Ø': '\\O{}',
  'ù': '\\`{u}',
  'ú': "\\'{u}",
  'û': '\\^{u}',
  'ü': '\\"{u}',
  'Ü': '\\"{U}',
  'Č': '\\v{C}',
  'č': '\\v{c}',
  'ć': "\\'{c}",
  'Ġ': '\\.{G}',
  'ł': '\\l{}',
  'Ł': '\\L{}',
  'ń': "\\'{n}",
  'ř': '\\v{r}',
  'Š': '\\v{S}',
  'š': '\\v{s}',
  'Ž': '\\v{Z}',
  'ž': '\\v{z}',
  'ā': '\\={a}',
  'ē': '\\={e}',
  'ī': '\\={i}',
  'ō': '\\={o}',
  'ū': '\\={u}'
};

const TEXT_PUNCT_MAP: Record<string, string> = {
  '§': '\\S{}',
  '–': '--',
  '—': '---',
  '’': "'",
  '“': '``',
  '”': "''",
  '…': '\\ldots{}',
  '•': '\\textbullet{} '
};

const ROMAN_WORDS = new Set([
  'mod', 'rem', 'osc', 'portal', 'echo', 'clock', 'max', 'min', 'eff', 'local',
  'vac', 'rel', 'tot', 'eq', 'lin', 'ext', 'int', 'core', 'inf', 'crit', 'rad',
  'gal', 'hol', 'bare', 'ren', 'th', 'coh', 'env', 'rev', 'irrev', 'smear',
  'det', 'sep', 'mix', 'contract', 'reh', 'eqp', 'ekp', 'vir', 'src', 'obs',
  'loc', 'ring', 'sat', 'infl', 'norm', 'sep1', 'grav', 'matter', 'total',
  'QFI', 'BKM', 'IGRT', 'KMS', 'SM', 'EW', 'Pl', 'PL', 'Ch', 'DE', 'DM',
  'BH', 'GW', 'EM', 'UV', 'IR', 'PB', 'BFV', 'BRST', 'QNM', 'ISCO', 'TOV',
  'PPN', 'NFW', 'PM', 'ULDM', 'EDE', 'PNGB', 'DP', 'Araki', 'Fisher',
  'Hayward', 'Bures', 'Weyl', 'Bianchi', 'Krein', 'PTA', 'LHC', 'CERN',
  'CANNEX', 'DESI', 'Planck', 'SH0ES', 'LCDM', 'SMBH', 'CEH', 'SNIa',
  'TT', 'TE', 'EE', 'EB', 'Gal', 'RN', 'LVK', 'CG', 'H11', 'H10', 'SO',
  'diag', 'tr', 'Tr', 'det', 'ln', 'log', 'sin', 'cos', 'sinh', 'exp',
  'lim', 'min', 'max', 'sup', 'Spec', 'Area', 'Var', 'RAG', 'RES', 'dB',
  'smeared', 'coupled', 'screened', 'monopole', 're', 'bulk', 'out', 'Page'
]);

function escapeTextChar(ch: string): string {
  if (ch in TEXT_LATIN_ACCENTS) return TEXT_LATIN_ACCENTS[ch];
  if (ch in TEXT_PUNCT_MAP) return TEXT_PUNCT_MAP[ch];
  switch (ch) {
    case '\\':
      return '\\textbackslash{}';
    case '{':
      return '\\{';
    case '}':
      return '\\}';
    case '$':
      return '\\$';
    case '&':
      return '\\&';
    case '#':
      return '\\#';
    case '%':
      return '\\%';
    case '_':
      return '\\_';
    case '^':
      return '\\textasciicircum{}';
    case '~':
      return '\\textasciitilde{}';
    case '<':
      return '\\textless{}';
    case '>':
      return '\\textgreater{}';
    case '|':
      return '\\textbar{}';
    default: {
      if (ch in MATH_UNICODE_MAP) return `$${MATH_UNICODE_MAP[ch].trim()}$`;
      if (ch.charCodeAt(0) > 127) return '';
      return ch;
    }
  }
}

function escapeRawText(s: string): string {
  let out = '';
  for (const ch of s) {
    out += escapeTextChar(ch);
  }
  return out;
}

function escapeCodeText(s: string): string {
  return [...s]
    .map((ch) => {
      if (ch === '\\') return '\\textbackslash{}';
      if (ch === '{') return '\\{';
      if (ch === '}') return '\\}';
      if (ch === '$') return '\\$';
      if (ch === '&') return '\\&';
      if (ch === '#') return '\\#';
      if (ch === '%') return '\\%';
      if (ch === '_') return '\\_';
      if (ch === '^') return '\\textasciicircum{}';
      if (ch === '~') return '\\textasciitilde{}';
      if (ch === '–') return '-';
      if (ch === '—') return '--';
      if (ch in TEXT_LATIN_ACCENTS) return TEXT_LATIN_ACCENTS[ch];
      if (ch in MATH_UNICODE_MAP) return `$${MATH_UNICODE_MAP[ch].trim()}$`;
      if (ch.charCodeAt(0) > 127) return '';
      return ch;
    })
    .join('');
}

const BIB_SUP_MAP: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
  '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  '⁺': '+', '⁻': '-'
};
const BIB_SUB_MAP: Record<string, string> = {
  '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
  '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9'
};

function escapeBibtexText(s: string): string {
  const chars = [...s];
  let out = '';
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    if (ch in BIB_SUP_MAP) {
      let run = BIB_SUP_MAP[ch];
      while (i + 1 < chars.length && chars[i + 1] in BIB_SUP_MAP) {
        run += BIB_SUP_MAP[chars[++i]];
      }
      out += `$^{${run}}$`;
    } else if (ch in BIB_SUB_MAP) {
      let run = BIB_SUB_MAP[ch];
      while (i + 1 < chars.length && chars[i + 1] in BIB_SUB_MAP) {
        run += BIB_SUB_MAP[chars[++i]];
      }
      out += `$_{${run}}$`;
    } else if (ch in TEXT_LATIN_ACCENTS) out += TEXT_LATIN_ACCENTS[ch];
    else if (ch in TEXT_PUNCT_MAP) out += TEXT_PUNCT_MAP[ch];
    else if (ch === '&') out += '\\&';
    else if (ch === '%') out += '\\%';
    else if (ch === '#') out += '\\#';
    else if (ch === '_') out += '\\_';
    else if (ch in MATH_UNICODE_MAP) out += `$${MATH_UNICODE_MAP[ch].trim()}$`;
    else if (ch.charCodeAt(0) > 127) out += '';
    else out += ch;
  }
  return out;
}

function foldCombiningMarksForMath(s: string): string {
  const chars = [...s];
  let out = '';
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    const next = chars[i + 1];
    if (next && next in COMBINED_ACCENTS) {
      const cmd = COMBINED_ACCENTS[next];
      const baseMath =
        ch in PRECOMPOSED_MATH_ACCENTS
          ? PRECOMPOSED_MATH_ACCENTS[ch]
          : ch in MATH_UNICODE_MAP
            ? MATH_UNICODE_MAP[ch].trim()
            : ch;
      out += `${cmd}{${baseMath}}`;
      i++;
    } else if (ch in PRECOMPOSED_MATH_ACCENTS) {
      out += PRECOMPOSED_MATH_ACCENTS[ch];
    } else {
      out += ch;
    }
  }
  return out;
}

function renderMathTextPayload(raw: string): string {
  const folded = foldCombiningMarksForMath(raw);
  const chars = [...folded];
  let s = '';
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    if (ch in MATH_UNICODE_MAP) {
      s += MATH_UNICODE_MAP[ch];
    } else if (ch === '–' || ch === '—') {
      s += '-';
    } else if (ch === '’') {
      s += "'";
    } else if (ch === '…') {
      s += '\\ldots ';
    } else if (ch === '{') {
      s += '\\{';
    } else if (ch === '}') {
      s += '\\}';
    } else if (ch === '~') {
      s += '\\sim ';
    } else if (ch === '&') {
      s += '\\&';
    } else if (ch === '%') {
      s += '\\%';
    } else if (ch === '#') {
      s += '\\#';
    } else if (ch === '√' || ch === '\u221A') {
      s += '\\sqrt';
    } else {
      s += ch;
    }
  }

  // Replace standard function names & named operators when standalone
  s = s.replace(/\b(Spec|Area|Var|diag|lim|sinh|cosh|sin|cos|tan|exp|ln|log|max|min|sup|inf)\b/g, (m) => `\\mathrm{${m}}`);
  s = s.replace(/\b(RAG|RES|dB)\b/g, (m) => `\\mathrm{${m}}`);
  s = s.replace(/\\sqrt\s*\(([^()]+)\)/g, '\\sqrt{$1}');
  s = s.replace(/\\sqrt\s*\[([^\[\]]+)\]/g, '\\sqrt{$1}');
  return s.replace(/[ ]{2,}/g, ' ');
}

function scriptChildToLatex(children: MathSegment[], isScriptContext = false): string {
  const inner = children.map((c) => mathSegmentToLatex(c, isScriptContext)).join('').trim();
  if (isScriptContext && /^[A-Za-z0-9,+\-]+$/.test(inner)) {
    const parts = inner.split(/([,+\-])/).map((tok) => {
      if (ROMAN_WORDS.has(tok) || (tok.length >= 3 && /^[A-Za-z0-9]+$/.test(tok))) {
        return `\\mathrm{${tok}}`;
      }
      return tok;
    });
    return parts.join('');
  }
  return inner;
}

function mathSegmentToLatex(seg: MathSegment, insideScript = false): string {
  if (seg.type === 'text') {
    return renderMathTextPayload(seg.text);
  }
  if (seg.type === 'sub') {
    const body = scriptChildToLatex(seg.children, true);
    return `_{${body}}`;
  }
  if (seg.type === 'sup') {
    const body = scriptChildToLatex(seg.children, true);
    return `^{${body}}`;
  }
  const body = seg.children.map((c) => mathSegmentToLatex(c, insideScript)).join('');
  return body;
}

const MATH_UNICODE_RE =
  /[ΓΔΘΛΞΠΣΥΦΨΩαβγδεζηθκλμνξπρστυφϕϑϖϵςχψωℂℍℝℤℋℐℒℛ𝒜𝒞𝒟𝒢𝒦𝒩𝒪𝒫𝒱ℏℓ°±·×†‖′″→↔⇒∂∅∇∈∉∑−√∝∞∪∩∫∼≃≈≅≠≡≤≥≪≫≲≳≺⊂⊆⊇⊕⊗⨂⊙⋊⊥∧∨∀∃∗⋆∘□⟨⟩¼½ĤẋȧäĠṖ⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻₀₁₂₃₄₅₆₇₈₉\u0302\u0303\u0304\u0307\u0308\u20D7]/u;

function isMathToken(tok: string): boolean {
  if (!tok) return false;
  if (/[_^]/.test(tok)) return true;
  if (MATH_UNICODE_RE.test(tok)) return true;
  if (/^[|⟨‖].*[|⟩‖]$/.test(tok) && tok.length > 2) return true;
  if (/^[A-Za-z][′″']+$/.test(tok)) return true;
  if (/^[A-Za-z]\/[A-Za-z]$/.test(tok)) return true;
  return false;
}

function normalizeMathPunctBoundaries(tok: string): { lead: string; core: string; trail: string } {
  let core = tok;
  let lead = '';
  let trail = '';

  // Handle prose-prefix hyphenated terms like Ly-α -> lead='Ly-', core='α'
  const proseHyphen = core.match(/^([A-Za-z]{2,}-)(.+)$/);
  if (proseHyphen && isMathToken(proseHyphen[2]) && !/[_^]/.test(proseHyphen[1])) {
    lead += proseHyphen[1];
    core = proseHyphen[2];
  }

  // Strip leading '~' (e.g., ~10⁻¹¹) so it converts inside math as \sim
  while (core.length > 1 && /[.,;:!?]$/.test(core)) {
    trail = core[core.length - 1] + trail;
    core = core.slice(0, -1);
  }
  const openParens = (core.match(/\(/g) || []).length;
  const closeParens = (core.match(/\)/g) || []).length;
  if (openParens > closeParens && core.startsWith('(')) {
    lead += '(';
    core = core.slice(1);
  } else if (closeParens > openParens && core.endsWith(')')) {
    trail = ')' + trail;
    core = core.slice(0, -1);
  }
  const openSq = (core.match(/\[/g) || []).length;
  const closeSq = (core.match(/\]/g) || []).length;
  if (openSq > closeSq && core.startsWith('[')) {
    lead += '[';
    core = core.slice(1);
  } else if (closeSq > openSq && core.endsWith(']')) {
    trail = ']' + trail;
    core = core.slice(0, -1);
  }
  if (core.startsWith('"') || core.startsWith('“')) {
    lead += core.startsWith('“') ? '``' : '"';
    core = core.slice(1);
  }
  if (core.endsWith('"') || core.endsWith('”')) {
    trail = (core.endsWith('”') ? "''" : '"') + trail;
    core = core.slice(0, -1);
  }
  return { lead, core, trail };
}

function tokenToMathLatex(core: string): string {
  const segs = parseMathSegments(core);
  let res = '';
  for (const sg of segs) {
    const chunk = mathSegmentToLatex(sg, false);
    if (res && /\\[A-Za-z]+$/.test(res) && /^[A-Za-z]/.test(chunk)) {
      res += ' ';
    }
    res += chunk;
  }
  return res.replace(/[ ]{2,}/g, ' ').trim();
}

/**
 * Splits prose chunk on whitespace/dashes at brace depth 0 so braced math expressions
 * such as e^{i 2πk s/L} or {Ĥ_{grav+matter} + H_Fisher, H_Fisher}_PB stay whole.
 */
function splitPreservingBraces(chunk: string): string[] {
  const parts: string[] = [];
  let cur = '';
  let depth = 0;

  for (let i = 0; i < chunk.length; i++) {
    const ch = chunk[i];
    if (ch === '{') {
      depth++;
      cur += ch;
    } else if (ch === '}') {
      if (depth > 0) depth--;
      cur += ch;
    } else if (depth === 0 && (/\s/.test(ch) || ch === '—' || ch === '–')) {
      if (cur) {
        parts.push(cur);
        cur = '';
      }
      if (ch === '—' || ch === '–') {
        parts.push(ch);
      } else {
        let ws = ch;
        while (i + 1 < chunk.length && /\s/.test(chunk[i + 1])) {
          ws += chunk[++i];
        }
        parts.push(ws);
      }
    } else {
      cur += ch;
    }
  }
  if (cur) parts.push(cur);
  return parts;
}

function convertProseSegment(chunk: string): string {
  const parts = splitPreservingBraces(chunk);
  const items: Array<{ kind: 'ws' | 'dash' | 'text' | 'math'; val: string; raw?: string }> = [];

  for (let i = 0; i < parts.length; i++) {
    const p = parts[i];
    if (!p) continue;
    if (/^\s+$/.test(p)) {
      items.push({ kind: 'ws', val: p });
      continue;
    }
    if (p === '—' || p === '–') {
      items.push({ kind: 'dash', val: p === '—' ? '---' : '--' });
      continue;
    }

    const { lead, core, trail } = normalizeMathPunctBoundaries(p);

    const isOperatorToken = /^(=|<|>|\+|−|-|\/|→|⇒|↔|≈|≃|≡|≤|≥|≪|≫|≠|∝|∈|∉|⊂|⊕|⊗|×|·|±|:|\|)$/.test(core);
    const isApproxMath = /^~\d/.test(core) && MATH_UNICODE_RE.test(core);

    if (core && (isMathToken(core) || isOperatorToken || isApproxMath)) {
      if (lead) items.push({ kind: 'text', val: escapeRawText(lead) });
      items.push({ kind: 'math', val: tokenToMathLatex(core), raw: core });
      if (trail) items.push({ kind: 'text', val: escapeRawText(trail) });
    } else if (core && /^[+-]?\d+(?:\.\d+)?$/.test(core)) {
      items.push({ kind: 'text', val: escapeRawText(p), raw: p });
    } else {
      items.push({ kind: 'text', val: escapeRawText(p), raw: p });
    }
  }

  // Merge adjacent math tokens (including separating spaces, operators, and numbers directly next to math)
  const merged: Array<{ kind: 'text' | 'math'; val: string }> = [];
  let idx = 0;
  while (idx < items.length) {
    const cur = items[idx];
    if (cur.kind !== 'math') {
      merged.push({ kind: 'text', val: cur.val });
      idx++;
      continue;
    }
    // Start math run, extend across whitespace + (math | number adjacent to math)
    let mathAcc = cur.val;
    let j = idx + 1;
    while (j < items.length) {
      if (items[j].kind === 'math') {
        mathAcc += items[j].val;
        j++;
      } else if (
        items[j].kind === 'ws' &&
        j + 1 < items.length &&
        (items[j + 1].kind === 'math' ||
          (items[j + 1].raw && /^[+-]?\d+(?:\.\d+)?$/.test(items[j + 1].raw!)))
      ) {
        // Peek ahead: if next is number, make sure either current ended with operator/×/± or number isn't followed by prose unit like "yr" cleanly handled
        if (items[j + 1].kind === 'math') {
          mathAcc += ' ' + items[j + 1].val;
          j += 2;
        } else {
          const numStr = items[j + 1].raw!;
          mathAcc += ' ' + numStr;
          j += 2;
        }
      } else {
        break;
      }
    }
    // Clean redundant spaces inside mathAcc
    const cleaned = mathAcc.replace(/\s+/g, ' ').trim();
    merged.push({ kind: 'math', val: `$${cleaned}$` });
    idx = j;
  }

  return merged.map((m) => m.val).join('');
}

function expandCitationMatch(inner: string): string | null {
  const tokens = inner.split(',').map((t) => t.trim()).filter(Boolean);
  if (tokens.length === 0) return null;
  const keys: string[] = [];
  for (const tok of tokens) {
    const rm = tok.match(/^(\d+)\s*[–\-]\s*(\d+)$/);
    if (rm) {
      const a = Number(rm[1]);
      const b = Number(rm[2]);
      if (a < 1 || b > PAPER_REFERENCES.length || a > b || b - a > 15) return null;
      for (let k = a; k <= b; k++) keys.push(`ref${k}`);
    } else if (/^\d+$/.test(tok)) {
      const n = Number(tok);
      if (n < 1 || n > PAPER_REFERENCES.length) return null;
      keys.push(`ref${n}`);
    } else {
      return null;
    }
  }
  return keys.length > 0 ? `\\cite{${keys.join(',')}}` : null;
}

/**
 * Converts a monograph prose/table string into clean, compilable LaTeX.
 */
export function proseToLatex(input: string, options: { allowCitations?: boolean } = {}): string {
  if (!input) return '';
  const allowCitations = options.allowCitations !== false;

  // Normalize line breaks for multi-line table cells
  const normalizedInput = input.replace(/\r\n/g, '\n');

  // Protect URLs, DOIs, arXiv links, backticked code, and file paths
  const PROTECTED_RE =
    /(`[^`]+`|https?:\/\/[^\s)>,;]+|DOI:\s*[^\s)>,;]+|arXiv:\s*[^\s)>,;]+|\bscripts\/[A-Za-z0-9_.\-/]+|\bhi_class\b|\bBulaqueña\b|\[[0-9,\s–\-]+\](?:\s*[–\-]\s*\[\d+\])?)/g;

  const pieces = normalizedInput.split(PROTECTED_RE);
  const out: string[] = [];

  for (let i = 0; i < pieces.length; i++) {
    const piece = pieces[i];
    if (!piece) continue;

    if (i % 2 === 1) {
      if (piece.startsWith('`') && piece.endsWith('`')) {
        out.push(`\\texttt{${escapeCodeText(piece.slice(1, -1))}}`);
      } else if (piece.startsWith('http://') || piece.startsWith('https://')) {
        out.push(`\\url{${piece}}`);
      } else if (piece.startsWith('DOI:') || piece.startsWith('arXiv:')) {
        out.push(`\\texttt{${escapeCodeText(piece)}}`);
      } else if (piece.startsWith('scripts/') || piece === 'hi_class') {
        out.push(`\\texttt{${escapeCodeText(piece)}}`);
      } else if (piece === 'Bulaqueña') {
        out.push('Bulaque\\~{n}a');
      } else if (piece.startsWith('[')) {
        // Citation or [1]–[3] or [0, 1]
        if (allowCitations) {
          const crossDash = piece.match(/^\[(\d+)\]\s*[–\-]\s*\[(\d+)\]$/);
          if (crossDash) {
            const a = Number(crossDash[1]);
            const b = Number(crossDash[2]);
            if (a >= 1 && b <= PAPER_REFERENCES.length && a <= b && b - a <= 15) {
              const keys = [];
              for (let k = a; k <= b; k++) keys.push(`ref${k}`);
              out.push(`\\cite{${keys.join(',')}}`);
              continue;
            }
          } else {
            const singleMatch = piece.match(/^\[([0-9,\s–\-]+)\]$/);
            if (singleMatch) {
              const cited = expandCitationMatch(singleMatch[1]);
              if (cited) {
                out.push(cited);
                continue;
              }
            }
          }
        }
        out.push(convertProseSegment(piece));
      } else {
        out.push(escapeRawText(piece));
      }
    } else {
      // Handle explicit newlines inside table cells or paragraphs
      const lines = piece.split('\n');
      out.push(lines.map((ln) => convertProseSegment(ln)).join(' \\\\\n'));
    }
  }

  return out.join('');
}

function visibleMathLength(expr: string): number {
  return expr
    .replace(/\\(?:mathbb|mathcal|mathrm|mathbf|mathit|text|sqrt|frac|hat|tilde|bar|dot|ddot|vec|tag|label)/g, '')
    .replace(/\\[A-Za-z]+/g, 'x')
    .replace(/[{}^_\s]/g, '').length;
}

function wrapLongDisplayMathSegment(segment: string, maxVisLen = 78): string[] {
  if (visibleMathLength(segment) <= maxVisLen) return [segment];
  const splitOps = ['\\Rightarrow', '\\equiv', '\\approx', '\\simeq', '\\le', '\\ge', '=', ',\\quad', ',\\;', ', '];
  const candidates: Array<{ pos: number; opLen: number }> = [];
  let braceDepth = 0;
  let parenDepth = 0;
  for (let i = 0; i < segment.length; i++) {
    const ch = segment[i];
    if (ch === '{') {
      braceDepth++;
    } else if (ch === '}') {
      if (braceDepth > 0) braceDepth--;
    } else if (ch === '(' || ch === '[') {
      parenDepth++;
    } else if (ch === ')' || ch === ']') {
      if (parenDepth > 0) parenDepth--;
    } else if (braceDepth === 0 && parenDepth === 0) {
      for (const op of splitOps) {
        if (segment.startsWith(op, i)) {
          if (i > 12 && i + op.length < segment.length - 8) {
            candidates.push({ pos: i, opLen: op.length });
          }
          break;
        }
      }
    }
  }
  if (candidates.length === 0) return [segment];
  const targetMid = segment.length * 0.48;
  candidates.sort((a, b) => Math.abs(a.pos - targetMid) - Math.abs(b.pos - targetMid));
  const best = candidates[0];
  const opStr = segment.slice(best.pos, best.pos + best.opLen);
  const left = segment.slice(0, best.pos).trim();
  const right = (opStr.startsWith(',') ? segment.slice(best.pos + best.opLen) : segment.slice(best.pos)).trim();
  if (!left || !right) return [segment];
  return [
    ...wrapLongDisplayMathSegment(left, maxVisLen),
    ...wrapLongDisplayMathSegment(right, maxVisLen)
  ];
}

function wrapLongDisplayMath(body: string): string {
  const rawLines = body.split(/\s*\\\\\s*/);
  const wrapped = rawLines.flatMap((ln) => wrapLongDisplayMathSegment(ln.trim(), 78));
  return wrapped.join(' \\\\\n  ');
}

/**
 * Converts PaperEquation.unicodeHtml (or { unicodeHtml, label }) to display math LaTeX.
 */
export function equationToLatex(unicodeHtml: string, label: string, caption?: string): string {
  const segs = parseHtmlMathSegments(unicodeHtml);
  let rawBody = '';
  for (const sg of segs) {
    let piece = '';
    if (sg.type === 'text' && sg.text.includes('\n')) {
      piece = sg.text
        .split('\n')
        .map((line) => renderMathTextPayload(line))
        .join(' \\\\\n  ');
    } else {
      piece = mathSegmentToLatex(sg, false);
    }
    if (rawBody && /\\[A-Za-z]+$/.test(rawBody) && /^[A-Za-z]/.test(piece)) {
      rawBody += ' ';
    }
    rawBody += piece;
  }
  const normalizedBody = rawBody
    .replace(/\\\|\s*/g, '\\| ')
    .replace(/[ ]{2,}/g, ' ')
    .replace(/ \\\\ /g, ' \\\\\n  ')
    .trim();
  const body = wrapLongDisplayMath(normalizedBody);

  const cleanTag = label.replace(/^\(|\)$/g, '').trim();
  const safeLabel = cleanTag.replace(/[^A-Za-z0-9.\-]/g, '-').toLowerCase();

  const isMultiLine = body.includes('\\\\');
  const mathBlock = isMultiLine
    ? `\\begin{equation}\\label{eq:${safeLabel}}\\tag{${cleanTag}}\n\\begin{gathered}\n  ${body}\n\\end{gathered}\n\\end{equation}`
    : `\\begin{equation}\\label{eq:${safeLabel}}\\tag{${cleanTag}}\n  ${body}\n\\end{equation}`;

  if (caption) {
    return `${mathBlock}\n\\noindent{\\small\\itshape ${proseToLatex(caption)}}\\par\\medskip`;
  }
  return mathBlock;
}

// ---------------------------------------------------------------------------
// 2. LaTeX Table & Block Helpers
// ---------------------------------------------------------------------------

function makeLongTable(
  caption: string,
  colSpec: string,
  headers: string[],
  rows: string[][],
  footerNote?: string
): string {
  const headerRow = headers.map((h) => `\\textbf{${proseToLatex(h)}}`).join(' & ') + ' \\\\';
  const bodyRows = rows
    .map((cols) => cols.join(' & ') + ' \\\\\n\\midrule[0.25pt]')
    .join('\n');
  const foot = footerNote
    ? `\\multicolumn{${headers.length}}{@{}>{\\RaggedRight\\arraybackslash}p{0.94\\textwidth}@{}}{\\footnotesize\\itshape ${footerNote}} \\\\\n\\bottomrule`
    : '\\bottomrule';

  return `\\begingroup
\\small
\\setlength{\\tabcolsep}{3.5pt}
\\begin{longtable}{${colSpec}}
\\caption{${proseToLatex(caption)}} \\\\
\\toprule
${headerRow}
\\midrule
\\endfirsthead
\\multicolumn{${headers.length}}{@{}l}{\\footnotesize\\itshape Table continued from previous page} \\\\
\\toprule
${headerRow}
\\midrule
\\endhead
\\midrule
\\multicolumn{${headers.length}}{@{}r}{\\footnotesize\\itshape Continued on next page} \\\\
\\endfoot
${foot}
${bodyRows}
\\end{longtable}
\\endgroup
`;
}

function renderParagraphListLatex(paragraphs: string[]): string {
  const out: string[] = [];
  let inBulletList = false;

  for (const p of paragraphs) {
    const trimmed = p.trim();
    if (trimmed.startsWith('• ')) {
      if (!inBulletList) {
        out.push('\\begin{itemize}[leftmargin=1.5em,itemsep=3pt]');
        inBulletList = true;
      }
      out.push(`  \\item ${proseToLatex(trimmed.slice(2).trim())}`);
    } else {
      if (inBulletList) {
        out.push('\\end{itemize}\n');
        inBulletList = false;
      }
      out.push(proseToLatex(trimmed) + '\n');
    }
  }
  if (inBulletList) {
    out.push('\\end{itemize}\n');
  }
  return out.join('\n');
}

function plateFilename(id: number): string {
  return `plate_${String(id).padStart(2, '0')}.jpg`;
}

function figureBaseName(id: number): string {
  return `fig_${String(id).padStart(2, '0')}`;
}

// ---------------------------------------------------------------------------
// 3. Modular Source File Builders
// ---------------------------------------------------------------------------

function buildPreambleTex(): string {
  return `% ===========================================================================
% IGRT Harmonized Monograph (Edition IGRT-2026-H11) -- Shared Preamble
% Supports both pdflatex + bibtex and xelatex/lualatex + bibtex
% ===========================================================================
\\documentclass[11pt,a4paper]{report}

\\usepackage{iftex}
\\ifTUTeX
  \\usepackage{fontspec}
  \\setmainfont{Latin Modern Roman}
\\else
  \\usepackage[utf8]{inputenc}
  \\usepackage[T1]{fontenc}
  \\usepackage{lmodern}
\\fi

\\usepackage[a4paper,margin=22mm,headheight=14pt]{geometry}
\\usepackage{amsmath,amssymb,amsthm,mathtools,bm}
\\usepackage{booktabs,longtable,array,tabularx,ragged2e}
\\usepackage{graphicx}
\\usepackage{xcolor}
\\usepackage[most]{tcolorbox}
\\usepackage{enumitem}
\\usepackage{titlesec}
\\usepackage{fancyhdr}
\\usepackage{microtype}
\\usepackage{xurl}
\\usepackage[colorlinks=true,linkcolor=igrtnavy,citecolor=igrtaccent,urlcolor=igrtnavy]{hyperref}

\\newcolumntype{L}[1]{>{\\RaggedRight\\arraybackslash}p{#1}}
\\setlength{\\emergencystretch}{3em}
\\setlength{\\hfuzz}{2pt}
\\hyphenpenalty=50

\\definecolor{igrtnavy}{HTML}{0F172A}
\\definecolor{igrtaccent}{HTML}{8B4513}
\\definecolor{igrtcream}{HTML}{FAF6EE}
\\definecolor{igrtborder}{HTML}{D6CABE}
\\definecolor{igrtgreen}{HTML}{15803D}
\\definecolor{igrtslate}{HTML}{475569}

\\setlength{\\parskip}{0.55em}
\\setlength{\\parindent}{0pt}
\\allowdisplaybreaks

\\pagestyle{fancy}
\\fancyhf{}
\\fancyhead[L]{\\small\\itshape When Quantum States Become Time: IGRT}
\\fancyhead[R]{\\small\\color{igrtslate}\\leftmark}
\\fancyfoot[C]{\\small\\thepage}
\\renewcommand{\\headrulewidth}{0.4pt}
\\renewcommand{\\footrulewidth}{0.4pt}

\\titleformat{\\chapter}[display]
  {\\normalfont\\Large\\bfseries\\color{igrtnavy}}
  {\\small\\scshape\\color{igrtaccent} \\chaptertitlename\\ \\thechapter}
  {4pt}
  {\\LARGE\\normalfont\\color{igrtnavy}}
\\titlespacing*{\\chapter}{0pt}{-10pt}{14pt}

\\newtcolorbox{theorembox}[2][]{
  enhanced,
  breakable,
  colback=igrtcream,
  colframe=igrtaccent!70!black,
  coltitle=white,
  colbacktitle=igrtnavy,
  fonttitle=\\bfseries\\small,
  title={#2},
  boxrule=0.6pt,
  arc=3pt,
  #1
}

\\newtcolorbox{workedbox}[2][]{
  enhanced,
  breakable,
  colback=white,
  colframe=igrtgreen!65!black,
  coltitle=white,
  colbacktitle=igrtgreen!75!black,
  fonttitle=\\bfseries\\small,
  title={Worked Example: #2},
  boxrule=0.6pt,
  arc=3pt,
  #1
}

\\newtcolorbox{scopebox}[2][]{
  enhanced,
  breakable,
  colback=igrtcream!70!white,
  colframe=igrtborder,
  fonttitle=\\bfseries\\small\\color{igrtaccent},
  title={#2},
  boxrule=0.5pt,
  arc=2pt,
  #1
}

\\newcommand{\\epistemic}[1]{%
  \\hfill\\textnormal{\\scriptsize\\ttfamily\\color{igrtaccent}[Status: #1]}%
}

% Portable Plate macro (uses illustrations/plate_XX.jpg when present)
\\newcommand{\\igrtplate}[4]{%
  \\begin{figure}[htbp]
    \\centering
    \\begin{tcolorbox}[colback=igrtcream,colframe=igrtborder,boxrule=0.5pt,arc=3pt,left=6pt,right=6pt,top=6pt,bottom=6pt]
      \\noindent{\\scriptsize\\scshape\\color{igrtaccent} Archival Editorial Plate #2}\\quad{\\small\\bfseries\\color{igrtnavy} #3}\\\\[4pt]
      \\centering
      \\IfFileExists{illustrations/#1}{%
        \\includegraphics[width=0.94\\textwidth]{illustrations/#1}%
      }{%
        \\fbox{\\parbox{0.9\\textwidth}{\\centering\\vspace{1.2em}\\small\\ttfamily Missing illustrations/#1\\vspace{1.2em}}}%
      }
    \\end{tcolorbox}
    \\vspace{4pt}
    \\caption{\\textbf{Plate #2: #3} --- #4}
    \\label{plate:#2}
  \\end{figure}
}

% Portable Figure macro (prefers vector PDF, falls back to bundled PNG, then informational frame)
\\newcommand{\\igrtfigure}[4]{%
  \\begin{figure}[htbp]
    \\centering
    \\IfFileExists{figures/#1.pdf}{%
      \\includegraphics[width=0.96\\textwidth]{figures/#1.pdf}%
    }{%
      \\IfFileExists{figures/#1.png}{%
        \\includegraphics[width=0.96\\textwidth]{figures/#1.png}%
      }{%
        \\begin{tcolorbox}[colback=igrtcream,colframe=igrtborder,title={Figure #2: #3}]
          Vector source stored in \\texttt{figures/#1.svg}. Run \\texttt{make figures} to convert SVGs to PDF via \\texttt{rsvg-convert}.
        \\end{tcolorbox}%
      }%
    }%
    \\caption{#4}
    \\label{fig:#1}
  \\end{figure}
}
`;
}

function buildTitleAndAbstractTex(): string {
  const authorsTex = PAPER_META.authors
    .map((a) => {
      const idLine = a.orcid
        ? `{\\scriptsize\\ttfamily ORCID: \\url{https://orcid.org/${a.orcid}}}`
        : a.email
          ? `{\\scriptsize\\ttfamily Email: ${escapeCodeText(a.email)}}`
          : '';
      return `\\textbf{${proseToLatex(a.name)}} \\\\ {\\small\\color{igrtslate}${proseToLatex(a.affiliation)}}${idLine ? ` \\\\ ${idLine}` : ''}`;
    })
    .join(' \\\\[0.8em]\n');

  const absParas = SHORTENED_ABSTRACT.paragraphs.map((p) => proseToLatex(p)).join('\n\n');
  const absEq = equationToLatex(
    MASTER_EQUATION_ABSTRACT.unicodeHtml,
    MASTER_EQUATION_ABSTRACT.label,
    MASTER_EQUATION_ABSTRACT.caption
  );

  return `\\begin{titlepage}
\\thispagestyle{empty}
\\noindent{\\scriptsize\\scshape\\color{igrtaccent} ${proseToLatex(PAPER_META.publicationStatus)} \\quad|\\quad ${proseToLatex(PAPER_META.edition)}}\\\\[4pt]
{\\color{igrtnavy}\\hrule height 1.5pt}
\\vspace{1.1em}

{\\LARGE\\normalfont\\color{igrtnavy} ${proseToLatex(PAPER_META.title)} \\par}
\\vspace{0.6em}

{\\large\\itshape\\color{igrtslate} ${proseToLatex(PAPER_META.subtitle)} \\par}
\\vspace{0.9em}

{\\small\\color{igrtslate}
\\textbf{Identifier:} ${proseToLatex(PAPER_META.eprint)} \\quad|\\quad ${proseToLatex(PAPER_META.doi)} \\\\
\\textbf{PhySH:} ${proseToLatex(PAPER_META.physh)} \\quad|\\quad \\textbf{MSC 2020:} ${proseToLatex(PAPER_META.msc2020)}
}

\\vspace{1.2em}
\\begin{tcolorbox}[colback=igrtcream,colframe=igrtborder,boxrule=0.5pt,arc=3pt]
${authorsTex}
\\end{tcolorbox}

\\vspace{0.8em}
\\section*{Abstract}
${absParas}

${absEq}

\\vspace{0.6em}
{\\small\\textbf{Keywords:} ${PAPER_META.keywords.map((k) => proseToLatex(k)).join(' $\\cdot$ ')}}
\\end{titlepage}

\\pagenumbering{roman}
\\tableofcontents
\\listoffigures
\\listoftables
\\cleardoublepage
\\pagenumbering{arabic}
`;
}

function buildFrontmatterTex(): string {
  const lines: string[] = [];
  lines.push(`\\chapter*{Summary, Symbols \\& Reference Apparatus}`);
  lines.push(`\\addcontentsline{toc}{chapter}{Summary, Symbols \\& Reference Apparatus}`);
  lines.push(`\\markboth{Summary \\& Reference Apparatus}{Summary \\& Reference Apparatus}\n`);

  lines.push(`\\section*{Plain-Language Summary}`);
  lines.push(proseToLatex(PLAIN_LANGUAGE_SUMMARY) + '\n');

  lines.push(`\\section*{Scope \\& Architectural Closures}`);
  for (const sc of SCOPE_AND_NON_CLAIMS) {
    lines.push(`\\begin{scopebox}{${proseToLatex(sc.title)}}`);
    lines.push(proseToLatex(sc.detail));
    lines.push(`\\end{scopebox}\n`);
  }

  lines.push(`\\section*{List of Illustrations (Plates I--XIV)}`);
  lines.push(`\\begin{itemize}[leftmargin=1.5em]`);
  for (const pl of PAPER_ILLUSTRATIONS) {
    lines.push(`  \\item \\textbf{Plate ${pl.roman}:} ${proseToLatex(pl.title)}`);
  }
  lines.push(`\\end{itemize}\n`);

  lines.push(`\\section*{List of Tables}`);
  lines.push(
    makeLongTable(
      'Index of Monograph Tables',
      'L{0.11\\textwidth} L{0.56\\textwidth} L{0.23\\textwidth}',
      ['Table', 'Title', 'Location'],
      LIST_OF_TABLES.map((t) => [proseToLatex(t.number), proseToLatex(t.title), proseToLatex(t.location)])
    )
  );

  lines.push(`\\section*{Table 0.1: List of Symbols \\& Collision Disambiguation}`);
  lines.push(
    makeLongTable(
      'Table 0.1: List of Symbols & Collision Disambiguation',
      'L{0.15\\textwidth} L{0.27\\textwidth} L{0.19\\textwidth} L{0.27\\textwidth}',
      ['Symbol', 'Definition', 'Units', 'Collision Disambiguation'],
      LIST_OF_SYMBOLS.map((sym) => [
        `\\textbf{${proseToLatex(sym.symbol, { allowCitations: false })}}`,
        proseToLatex(sym.name, { allowCitations: false }),
        proseToLatex(sym.units, { allowCitations: false }),
        proseToLatex(sym.collisionNote)
      ])
    )
  );

  lines.push(`\\section*{Acronyms Glossary}`);
  lines.push(
    makeLongTable(
      'Acronyms Glossary',
      'L{0.15\\textwidth} L{0.28\\textwidth} L{0.46\\textwidth}',
      ['Acronym', 'Expansion', 'Operational Definition'],
      ACRONYMS_GLOSSARY.map((a) => [
        `\\textbf{${proseToLatex(a.term)}}`,
        proseToLatex(a.expansion),
        proseToLatex(a.definition)
      ])
    )
  );

  lines.push(`\\section*{Tables 0.2a \\& 0.2b: Dimensional-Analysis Closure}`);
  lines.push(
    makeLongTable(
      'Table 0.2a: Dimensional-Analysis Closure --- Part I: Bundle, Clock & Quantum Information (Items 1--11)',
      'L{0.13\\textwidth} L{0.20\\textwidth} L{0.15\\textwidth} L{0.15\\textwidth} L{0.24\\textwidth}',
      ['Quantity', 'Expression', 'SI Units', 'Natural Units', 'Derivation Note'],
      DIMENSIONAL_ANALYSIS_CLOSURE_A.map((d) => [
        proseToLatex(d.quantity, { allowCitations: false }),
        proseToLatex(d.expression, { allowCitations: false }),
        proseToLatex(d.siUnits, { allowCitations: false }),
        proseToLatex(d.naturalUnits, { allowCitations: false }),
        proseToLatex(d.auditNote)
      ])
    )
  );

  lines.push(
    makeLongTable(
      'Table 0.2b: Dimensional-Analysis Closure --- Part II: Gravity, Bounce, Black Holes & Metrology (Items 12--20)',
      'L{0.13\\textwidth} L{0.20\\textwidth} L{0.15\\textwidth} L{0.15\\textwidth} L{0.24\\textwidth}',
      ['Quantity', 'Expression', 'SI Units', 'Natural Units', 'Derivation Note'],
      DIMENSIONAL_ANALYSIS_CLOSURE_B.map((d) => [
        proseToLatex(d.quantity, { allowCitations: false }),
        proseToLatex(d.expression, { allowCitations: false }),
        proseToLatex(d.siUnits, { allowCitations: false }),
        proseToLatex(d.naturalUnits, { allowCitations: false }),
        proseToLatex(d.auditNote)
      ])
    )
  );

  lines.push(`\\section*{Table 0.3: Equation Index}`);
  lines.push(
    makeLongTable(
      'Table 0.3: Master Equation Index',
      'L{0.09\\textwidth} L{0.44\\textwidth} L{0.19\\textwidth} L{0.16\\textwidth}',
      ['Eq.', 'Description', 'Section', 'Status'],
      EQUATION_INDEX.map((e) => [
        proseToLatex(e.label),
        proseToLatex(e.title),
        proseToLatex(e.section),
        `\\textbf{${proseToLatex(e.status)}}`
      ])
    )
  );

  return lines.join('\n');
}

function buildChapterTex(chapterIndex: number): string {
  const ch = PAPER_CHAPTERS[chapterIndex];
  const out: string[] = [];
  out.push(`\\chapter{${proseToLatex(ch.title, { allowCitations: false })}}\\label{${ch.anchorId}}`);
  out.push(`\\noindent{\\itshape\\color{igrtslate} ${proseToLatex(ch.leadSummary)}}\\par\\medskip\n`);

  for (const sub of ch.subsections) {
    const cleanSubTitle = proseToLatex(sub.title, { allowCitations: false });
    out.push(`\\section*{${sub.number}\\quad ${cleanSubTitle}}\\label{${sub.anchorId}}`);
    out.push(`\\addcontentsline{toc}{section}{${sub.number}\\quad ${cleanSubTitle}}`);
    out.push(`\\noindent{\\scriptsize\\ttfamily\\color{igrtaccent}[Status: ${escapeRawText(sub.epistemicStatus)}]}\\par\\smallskip`);
    out.push(renderParagraphListLatex(sub.paragraphs));

    if (sub.theoremBox) {
      const tb = sub.theoremBox;
      out.push(`\\begin{theorembox}{${proseToLatex(tb.number)}: ${proseToLatex(tb.title)} [${tb.status}]}`);
      out.push(`\\textbf{Hypotheses:}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em,itemsep=2pt]`);
      for (const h of tb.hypotheses) {
        out.push(`  \\item ${proseToLatex(h)}`);
      }
      out.push(`\\end{itemize}`);
      out.push(`\\textbf{Statement:} ${proseToLatex(tb.statement)}`);
      out.push(`\\end{theorembox}\n`);
    }

    if (sub.equation) {
      out.push(equationToLatex(sub.equation.unicodeHtml, sub.equation.label, sub.equation.caption) + '\n');
    }

    if (sub.workedExample) {
      const we = sub.workedExample;
      out.push(`\\begin{workedbox}{${proseToLatex(we.title)}}`);
      out.push(proseToLatex(we.setup) + '\n');
      out.push(`\\begin{enumerate}[leftmargin=1.5em,itemsep=2pt]`);
      for (const st of we.steps) {
        out.push(`  \\item ${proseToLatex(st)}`);
      }
      out.push(`\\end{enumerate}`);
      out.push(equationToLatex(we.resultEquation.unicodeHtml, we.resultEquation.label, we.resultEquation.caption));
      out.push(`\\textbf{Result:} ${proseToLatex(we.takeaway)}`);
      out.push(`\\end{workedbox}\n`);
    }

    if (sub.bulletPoints && sub.bulletPoints.length > 0) {
      out.push(`\\begin{itemize}[leftmargin=1.5em,itemsep=3pt]`);
      for (const b of sub.bulletPoints) {
        out.push(`  \\item \\textbf{${proseToLatex(b.label)}:} ${proseToLatex(b.text)}`);
      }
      out.push(`\\end{itemize}\n`);
    }

    // Inline chapter tables & callouts matching HTML/PDF structure
    if (sub.anchorId === 'sec-1-4') {
      out.push(
        makeLongTable(
          'Table 1.1: Foundational Postulates of IGRT (Postulates I--VII)',
          'L{0.12\\textwidth} L{0.24\\textwidth} L{0.54\\textwidth}',
          ['Postulate', 'Name', 'Formal Statement'],
          PAPER_POSTULATES.map((p) => [
            `\\textbf{${proseToLatex(p.code)}}`,
            proseToLatex(p.name),
            proseToLatex(p.statement)
          ])
        )
      );
    }

    if (sub.anchorId === 'sec-7-1') {
      out.push(
        makeLongTable(
          'Table 7.2: Fitted Inputs vs. Genuine Predictions',
          'L{0.44\\textwidth} L{0.46\\textwidth}',
          ['Fitted / Tuned Input', 'Genuine Prediction (No Free Parameter)'],
          TABLE_7_2_FITTED_VS_PREDICTED.map((r) => [
            proseToLatex(r.fittedInput),
            proseToLatex(r.genuinePrediction)
          ]),
          'Note: Only the right column counts as evidence. The left column is tuned to match data and does not constitute a prediction.'
        )
      );
    }

    if (sub.anchorId === 'sec-7-3') {
      out.push(
        makeLongTable(
          'Table 7.1: Experimental & Observational Falsification Protocols (P1--P6)',
          'L{0.06\\textwidth} L{0.19\\textwidth} L{0.23\\textwidth} L{0.40\\textwidth}',
          ['ID', 'Protocol & Facility', 'Observable Formula', 'Signal Budget & Falsification Criterion'],
          AUDITED_TEST_PROTOCOLS.map((pr) => [
            `P${pr.id}`,
            `\\textbf{${proseToLatex(pr.name)}} \\\\ {\\scriptsize ${proseToLatex(pr.facility)}}`,
            proseToLatex(pr.formulaPlain),
            `${proseToLatex(pr.predictedSignal)} \\\\ {\\itshape Note:} ${proseToLatex(pr.noiseAndAuditNote)} \\\\ {\\itshape Falsification:} ${proseToLatex(pr.falsificationCriterion)}`
          ])
        )
      );

      out.push(`\\begin{theorembox}{Core Mechanism Falsification: ${proseToLatex(CORE_TIME_MECHANISM_FALSIFIER.heading)}}`);
      out.push(proseToLatex(CORE_TIME_MECHANISM_FALSIFIER.intro) + '\n');
      out.push(proseToLatex(CORE_TIME_MECHANISM_FALSIFIER.coreFalsifier) + '\n');
      out.push(proseToLatex(CORE_TIME_MECHANISM_FALSIFIER.practicalRealization));
      out.push(`\\end{theorembox}\n`);

      out.push(
        makeLongTable(
          'Table 7.3: Protocol Timeline and Required Sensitivity (P1--P6)',
          'L{0.17\\textwidth} L{0.27\\textwidth} L{0.33\\textwidth} L{0.11\\textwidth}',
          ['Protocol', 'Required Sensitivity', 'Current State of the Art', 'Expected Year'],
          TABLE_7_3_PROTOCOL_TIMELINE.map((r) => [
            `\\textbf{${proseToLatex(r.protocol)}}`,
            proseToLatex(r.requiredSensitivity),
            proseToLatex(r.currentStateOfTheArt),
            `\\texttt{${escapeCodeText(r.expectedYear)}}`
          ])
        )
      );
    }

    if (sub.anchorId === 'sec-8-1') {
      out.push(
        makeLongTable(
          'Table 8.1: Comparison of IGRT With String Theory & Six Quantum-Gravity Approaches',
          'L{0.13\\textwidth} L{0.19\\textwidth} L{0.12\\textwidth} L{0.13\\textwidth} L{0.14\\textwidth} L{0.15\\textwidth}',
          ['Framework', 'Key Mechanism', '4D Lorentzian', 'WDW Unfreezing', 'Singularity Status', 'Open Limitations'],
          FRAMEWORKS_COMPARISON_TABLE.map((r) => [
            `\\textbf{${proseToLatex(r.framework)}}`,
            proseToLatex(r.keyMechanism),
            proseToLatex(r.preserves4DLorentzian),
            proseToLatex(r.wdwUnfreezing),
            proseToLatex(r.singularityStatus),
            proseToLatex(r.openLimitations)
          ])
        )
      );

      out.push(
        makeLongTable(
          'Table 8.2: Summary of Seven Core Formal Results',
          'L{0.21\\textwidth} L{0.17\\textwidth} L{0.12\\textwidth} L{0.38\\textwidth}',
          ['Result', 'Domain', 'Status', 'Summary'],
          AUDITED_CLOSURE_THEOREMS.map((t) => [
            `\\textbf{${proseToLatex(t.title)}}`,
            proseToLatex(t.domain),
            `\\textbf{${proseToLatex(t.status)}}`,
            proseToLatex(t.summary)
          ])
        )
      );

      out.push(
        makeLongTable(
          'Table 8.3: Epistemic Claim, Status, Quantitative Evidence & Evasion Parameters Ledger',
          'L{0.19\\textwidth} L{0.12\\textwidth} L{0.35\\textwidth} L{0.22\\textwidth}',
          ['Claim', 'Status', 'Quantitative Derivation / Evidence', 'Free / Evasion Parameters'],
          CLAIM_EVIDENCE_LEDGER.map((row) => [
            proseToLatex(row.claim),
            `\\textbf{${proseToLatex(row.status)}}`,
            proseToLatex(row.evidenceAndDerivation),
            proseToLatex(row.evasionOrFreeParameter)
          ])
        )
      );
    }

    if (sub.anchorId === 'sec-8-2') {
      out.push(
        makeLongTable(
          'Table 8.4: Minimal Active Parameter Budget & Information Criterion (k_eff = 2, ΔAIC = −1.84, Δln Z = +1.42)',
          'L{0.25\\textwidth} L{0.53\\textwidth} L{0.11\\textwidth}',
          ['Scalar Field', 'Free Parameters', 'Count'],
          TABLE_8_4_SCALAR_BUDGET.map((row) => [
            `\\textbf{${proseToLatex(row.scalar)}}`,
            proseToLatex(row.freeParameters),
            `\\texttt{${escapeCodeText(row.count)}}`
          ])
        )
      );
    }

    // Plates and Figures placed right after their assigned subsection
    for (const plate of PAPER_ILLUSTRATIONS.filter((p) => p.afterSubsectionAnchor === sub.anchorId)) {
      out.push(
        `\\igrtplate{${plateFilename(plate.id)}}{${plate.roman}}{${proseToLatex(plate.title)}}{${proseToLatex(plate.caption)}}\n`
      );
    }
    for (const fig of PAPER_FIGURES.filter((f) => f.afterSubsectionAnchor === sub.anchorId)) {
      out.push(
        `\\igrtfigure{${figureBaseName(fig.id)}}{${fig.id}}{${proseToLatex(fig.title)}}{${proseToLatex(fig.caption)}}\n`
      );
    }
  }

  return out.join('\n');
}

function buildAppendixLatex(app: PaperAppendix): string {
  const out: string[] = [];
  const cleanAppTitle = proseToLatex(app.title, { allowCitations: false });
  out.push(`\\section[Appendix ${app.letter}: ${cleanAppTitle}]{Appendix ${app.letter}: ${cleanAppTitle}}\\label{${app.anchorId}}`);
  out.push(`\\noindent{\\scriptsize\\ttfamily\\color{igrtaccent}[Status: ${escapeRawText(app.status)}]}\\par\\smallskip`);
  out.push(`\\textbf{Statement (${proseToLatex(app.tag)}):} ${proseToLatex(app.theoremStatement)}\n`);
  out.push(renderParagraphListLatex(app.proofParagraphs));

  for (const eq of app.equations) {
    out.push(equationToLatex(eq.unicodeHtml, eq.label || `(${app.letter})`));
  }

  if (app.letter === 'H') {
    const wrappedSha = H11_PREREG_SHA256.match(/.{1,8}/g)?.join('\\allowbreak ') ?? H11_PREREG_SHA256;
    out.push(
      makeLongTable(
        'Table H.1: Complete Numerical & Parameter Closure Summary',
        'L{0.17\\textwidth} L{0.27\\textwidth} L{0.25\\textwidth} L{0.19\\textwidth}',
        ['Parameter / Scale', 'Defining Relation', 'Numerical Value', 'Regime / Protocol'],
        TABLE_H1_CLOSURES.map((row) => [
          proseToLatex(row.parameter),
          proseToLatex(row.formula),
          proseToLatex(row.value),
          proseToLatex(row.regime)
        ]),
        `H11 Preregistration Digest (SHA-256): \\texttt{${wrappedSha}}`
      )
    );
  }

  if (app.letter === 'I') {
    out.push(
      makeLongTable(
        'Table I.1: Revision History (Editions H6 -> H7 -> H8 -> H9 -> H10 -> H11)',
        'L{0.12\\textwidth} L{0.20\\textwidth} L{0.31\\textwidth} L{0.25\\textwidth}',
        ['Edition', 'Scope', 'Physics & Numerical Closures', 'Editorial & Verification Closures'],
        REVISION_HISTORY_TABLE.map((rev) => [
          `\\textbf{${proseToLatex(rev.edition)}}`,
          proseToLatex(rev.scope),
          proseToLatex(rev.physicsAndNumericalClosures),
          proseToLatex(rev.editorialAndVerificationClosures)
        ])
      )
    );
    out.push(`\\subsection*{Known Open Problems (OP-1 to OP-5)}`);
    out.push(`\\begin{itemize}[leftmargin=1.5em,itemsep=3pt]`);
    for (const op of KNOWN_OPEN_PROBLEMS) {
      out.push(`  \\item \\textbf{${escapeRawText(op.code)} --- ${proseToLatex(op.topic)}:} ${proseToLatex(op.description)}`);
    }
    out.push(`\\end{itemize}\n`);
  }

  if (app.letter === 'J') {
    const tfoot = `Self-Contained Technical Closure: ${H8_COMPOSITE_METRICS.selfContainedTechCount}/${H8_COMPOSITE_METRICS.selfContainedTechCount} = ${H8_COMPOSITE_METRICS.selfContainedTechScore}/${H8_COMPOSITE_METRICS.selfContainedTechMax} pts (${H8_COMPOSITE_METRICS.selfContainedTechPercentage}\\%) | Structural Attacks: ${H8_COMPOSITE_METRICS.attacksSurvives}/${H8_COMPOSITE_METRICS.attacksCount - 1} Survived (ATK-20 External Peer Review) | Upgrade Gates: ${H8_COMPOSITE_METRICS.upgradesCount}/${H8_COMPOSITE_METRICS.upgradesCount} (${H8_COMPOSITE_METRICS.upgradesPending} Pending) | Composite Vectors: ${H8_COMPOSITE_METRICS.selfContainedVectorsPassed}/${H8_COMPOSITE_METRICS.selfContainedVectorsTotal} (${H8_COMPOSITE_METRICS.selfContainedVectorsPercentage}\\%) | Non-Applicable: ${H8_COMPOSITE_METRICS.nonApplicableCount} Popperian/Scope + ${H8_COMPOSITE_METRICS.externalMilestoneCount} External Milestones.`;

    out.push(
      makeLongTable(
        'Table J.1: Complete 12-Family 980-Vector Adversarial Stress-Test Closure Scorecard (542/542 = 100.0% Technical)',
        'L{0.28\\textwidth} L{0.09\\textwidth} L{0.18\\textwidth} L{0.33\\textwidth}',
        ['Family', 'Criteria', 'H11 Score / Max', 'Status & Audit Notes'],
        H8_TWELVE_FAMILIES_SUMMARY.map((fam) => [
          `\\textbf{Family ${fam.id}:} ${proseToLatex(fam.name)}`,
          `\\texttt{${fam.count}}`,
          `\\textbf{${fam.h8Score} / ${fam.maxScore}} (${fam.percentage}\\%)`,
          fam.score0Count > 0
            ? `${fam.score3Count} full-score (3/3); ${fam.score0Count} isolated Popperian CC / Scope / External items`
            : `${fam.score3Count}/${fam.count} full-score (3/3) self-contained technical closures`
        ]),
        tfoot
      )
    );
  }

  if (app.letter === 'M') {
    out.push(
      makeLongTable(
        'Table M.1: Status Reclassification Matrix (Table 0.3 Audit)',
        'L{0.17\\textwidth} L{0.17\\textwidth} L{0.17\\textwidth} L{0.37\\textwidth}',
        ['Equation', 'Old Status', 'New Status', 'Justification'],
        APPENDIX_M_STATUS_TABLE.map((row) => [
          proseToLatex(row.equation),
          `\\texttt{${escapeCodeText(row.oldStatus)}}`,
          `\\textbf{\\texttt{${escapeCodeText(row.newStatus)}}}`,
          proseToLatex(row.justification)
        ])
      )
    );
  }

  return out.join('\n');
}

function buildAppendicesTex(): string {
  const header = `\\chapter{Formal Derivations, Constant Register \\& Technical Closures (Appendices A--P)}\\label{appendices}\n`;
  return header + PAPER_APPENDICES.map((a) => buildAppendixLatex(a)).join('\n\\clearpage\n');
}

function buildGovernanceTex(): string {
  const out: string[] = [];
  out.push(`\\chapter*{Governance Disclosures \\& Reproducibility}\\label{governance}`);
  out.push(`\\addcontentsline{toc}{chapter}{Governance Disclosures \\& Reproducibility}`);
  out.push(`\\markboth{Governance Disclosures}{Governance Disclosures}\n`);

  out.push(`\\section*{CRediT Author Contributions}`);
  out.push(`\\begin{itemize}[leftmargin=1.5em]`);
  for (const c of ETHICS_AND_GOVERNANCE.creditRoles) {
    out.push(`  \\item \\textbf{${proseToLatex(c.author)}:} ${proseToLatex(c.roles)}`);
  }
  out.push(`\\end{itemize}\n`);

  out.push(`\\section*{Conflicts of Interest Disclosure}`);
  out.push(proseToLatex(ETHICS_AND_GOVERNANCE.conflictsOfInterest) + '\n');

  out.push(`\\section*{Funding Statement}`);
  out.push(proseToLatex(ETHICS_AND_GOVERNANCE.fundingStatement) + '\n');

  out.push(`\\section*{Data and Code Availability}`);
  out.push(proseToLatex(ETHICS_AND_GOVERNANCE.dataAndCodeAvailability) + '\n');

  return out.join('\n');
}

export function buildReferencesBib(): string {
  const entries: string[] = [
    `% Complete Bibliography for IGRT Harmonized Research Monograph (IGRT-2026-H11)`,
    `% Self-citation of this monograph:`,
    PAPER_BIBTEX,
    ''
  ];

  for (const r of PAPER_REFERENCES) {
    const hasDoi = r.identifier.startsWith('DOI:');
    const hasArxiv = r.identifier.startsWith('arXiv:');
    const doiLine = hasDoi ? `,\n  doi          = {${r.identifier.slice(4).trim()}}` : '';
    const arxivLine = hasArxiv
      ? `,\n  eprint       = {${r.identifier.slice(6).trim()}},\n  archivePrefix = {arXiv}`
      : '';
    const extraNote =
      !hasDoi && !hasArxiv && r.identifier
        ? `,\n  note         = {${escapeBibtexText(r.identifier)}}`
        : '';

    const entryType = hasDoi && !/Preprint|Manuscript|Monograph/i.test(r.venue) ? 'article' : 'misc';
    entries.push(`@${entryType}{ref${r.id},
  author       = {${escapeBibtexText(r.authors)}},
  title        = {{${escapeBibtexText(r.title)}}},
  year         = {${r.year}},
  journal      = {${escapeBibtexText(r.venue)}}${doiLine}${arxivLine}${extraNote}
}`);
  }

  return entries.join('\n\n') + '\n';
}

function buildInlineTheBibliography(): string {
  const items = PAPER_REFERENCES.map((r) => {
    const idStr = r.identifier ? ` \\texttt{${escapeCodeText(r.identifier)}}.` : '';
    return `  \\bibitem{ref${r.id}} \\textbf{${proseToLatex(r.authors)}} (${escapeRawText(r.year)}). \\textit{${proseToLatex(r.title)}}. ${proseToLatex(r.venue)}.${idStr}`;
  });
  return `\\begin{thebibliography}{119}
\\addcontentsline{toc}{chapter}{References}
${items.join('\n')}
\\end{thebibliography}
`;
}

function buildMainTex(): string {
  return `% ===========================================================================
% Master LaTeX Driver: When Quantum States Become Time (IGRT)
% Edition: ${PAPER_META.edition.replace(/·/g, '|')} (${PAPER_META.eprint})
% Compile with:
%   pdflatex main.tex && bibtex main && pdflatex main.tex && pdflatex main.tex
% or:
%   xelatex main.tex && bibtex main && xelatex main.tex && xelatex main.tex
% ===========================================================================
\\input{preamble}

\\begin{document}

\\input{sections/00_title_abstract}
\\input{sections/00_frontmatter}

\\input{sections/01_chapter1}
\\input{sections/02_chapter2}
\\input{sections/03_chapter3}
\\input{sections/04_chapter4}
\\input{sections/05_chapter5}
\\input{sections/06_chapter6}
\\input{sections/07_chapter7}
\\input{sections/08_chapter8}

\\appendix
\\input{sections/09_appendices}
\\input{sections/10_governance}

\\bibliographystyle{unsrt}
\\bibliography{references}

\\end{document}
`;
}

function buildReadmeMd(): string {
  return `# IGRT Harmonized Research Monograph — LaTeX Source Distribution (${PAPER_META.edition})

**Title:** ${PAPER_META.title}  
**Authors:** ${PAPER_META.authors.map((a) => a.orcid ? `${a.name} (ORCID: ${a.orcid})` : a.email ? `${a.name} (Email: ${a.email})` : a.name).join('; ')}  
**Edition:** ${PAPER_META.edition} · ${PAPER_META.eprint}

## Directory Contents
- \`main.tex\` — Master modular LaTeX driver (compiles full monograph + TOC + bibliography)
- \`preamble.tex\` — Package configuration, theorem/worked-example boxes, plate/figure macros
- \`sections/00_title_abstract.tex\` — Title page, Abstract, Eq. (0.1), TOC/LOF/LOT
- \`sections/00_frontmatter.tex\` — Plain-language summary, Scope, List of Illustrations, Tables 0.1–0.3, Acronyms
- \`sections/01_chapter1.tex\` … \`sections/08_chapter8.tex\` — Chapters 1–8 with all inline tables
- \`sections/09_appendices.tex\` — Appendices A–P (including Tables H.1, I.1, J.1, M.1)
- \`sections/10_governance.tex\` — CRediT, COI, Funding, Reproducibility & Data/Code Availability
- \`references.bib\` — Complete 119-entry BibTeX bibliography (\`ref1\`..\`ref119\`)
- \`figures/fig_01.svg\` … \`fig_12.svg\` — Analytical vector SVG Figures 1–12 (plus \`fig_01.png\` … \`fig_12.png\`)
- \`illustrations/plate_01.jpg\` … \`plate_14.jpg\` — Archival Editorial Plates I–XIV
- \`IGRT_Harmonized_Monograph_H11.tex\` — Single-file self-contained LaTeX version (embedded bibliography)
- \`Makefile\` — Automated build targets

## Compilation
### Option A: Overleaf
Upload the entire ZIP directly to Overleaf (**New Project -> Upload Project**) and set the main document to \`main.tex\` (works with either \`pdfLaTeX\` or \`XeLaTeX\`).

### Option B: Local TeX Live / MacTeX
\`\`\`bash
pdflatex main.tex
bibtex main
pdflatex main.tex
pdflatex main.tex
\`\`\`
Or with \`latexmk\`:
\`\`\`bash
latexmk -pdf main.tex
\`\`\`
To convert the vector \`figures/*.svg\` diagrams to native vector PDF figures for publication press (optional, requires \`librsvg\`):
\`\`\`bash
make figures
\`\`\`
`;
}

function buildMakefile(): string {
  return `SVG_FIGS := $(wildcard figures/*.svg)
PDF_FIGS := $(SVG_FIGS:.svg=.pdf)

.PHONY: all xelatex figures clean

all:
\tpdflatex -interaction=nonstopmode main.tex
\tbibtex main
\tpdflatex -interaction=nonstopmode main.tex
\tpdflatex -interaction=nonstopmode main.tex

xelatex:
\txelatex -interaction=nonstopmode main.tex
\tbibtex main
\txelatex -interaction=nonstopmode main.tex
\txelatex -interaction=nonstopmode main.tex

figures: $(PDF_FIGS)

figures/%.pdf: figures/%.svg
\trsvg-convert -f pdf -o $@ $<

clean:
\trm -f *.aux *.bbl *.blg *.log *.out *.toc *.lof *.lot *.fls *.fdb_latexmk main.pdf
\trm -f sections/*.aux
`;
}

/**
 * Builds a single-file self-contained .tex manuscript (no \input dependencies, embedded bibliography).
 */
export function buildStandaloneLatex(): string {
  const parts = [
    buildPreambleTex(),
    '\\begin{document}\n',
    buildTitleAndAbstractTex(),
    buildFrontmatterTex(),
    ...PAPER_CHAPTERS.map((_c, idx) => buildChapterTex(idx)),
    '\\appendix\n',
    buildAppendicesTex(),
    buildGovernanceTex(),
    buildInlineTheBibliography(),
    '\\end{document}\n'
  ];
  return parts.join('\n');
}

/**
 * Returns a map of all text source files in the modular LaTeX distribution.
 */
export function buildLatexFilesMap(): Record<string, string> {
  const files: Record<string, string> = {
    'README.md': buildReadmeMd(),
    'Makefile': buildMakefile(),
    'preamble.tex': buildPreambleTex(),
    'main.tex': buildMainTex(),
    'IGRT_Harmonized_Monograph_H11.tex': buildStandaloneLatex(),
    'sections/00_title_abstract.tex': buildTitleAndAbstractTex(),
    'sections/00_frontmatter.tex': buildFrontmatterTex(),
    'sections/09_appendices.tex': buildAppendicesTex(),
    'sections/10_governance.tex': buildGovernanceTex(),
    'references.bib': buildReferencesBib()
  };

  for (let i = 0; i < PAPER_CHAPTERS.length; i++) {
    const chNum = String(PAPER_CHAPTERS[i].number).padStart(2, '0');
    files[`sections/${chNum}_chapter${PAPER_CHAPTERS[i].number}.tex`] = buildChapterTex(i);
  }

  for (const fig of PAPER_FIGURES) {
    const formattedSvg = formatSvgMathMarkup(pdfBmpSafeUnicode(fig.svgMarkup));
    files[`figures/${figureBaseName(fig.id)}.svg`] =
      formattedSvg.startsWith('<?xml') ? formattedSvg : `<?xml version="1.0" encoding="UTF-8"?>\n${formattedSvg}\n`;
  }

  return files;
}

// ---------------------------------------------------------------------------
// 4. Browser Asset Helpers + Zero-Dependency ZIP Writer (STORE method)
// ---------------------------------------------------------------------------

async function rasterizeSvgToPngBytes(svgMarkup: string): Promise<Uint8Array | null> {
  if (typeof document === 'undefined') return null;
  return new Promise((resolve) => {
    try {
      const formattedSvg = formatSvgMathMarkup(pdfBmpSafeUnicode(svgMarkup));
      const vbMatch = formattedSvg.match(/viewBox="0 0 (\d+) (\d+)"/);
      const vbW = vbMatch ? Number(vbMatch[1]) : 860;
      const vbH = vbMatch ? Number(vbMatch[2]) : 340;
      const pxW = 2200;
      const pxH = Math.max(120, Math.round((pxW * vbH) / vbW));

      const img = new Image();
      const svgBlob = new Blob([formattedSvg], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      const timer = setTimeout(() => {
        URL.revokeObjectURL(url);
        resolve(null);
      }, 4000);

      img.onload = () => {
        clearTimeout(timer);
        try {
          const canvas = document.createElement('canvas');
          canvas.width = pxW;
          canvas.height = pxH;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            URL.revokeObjectURL(url);
            resolve(null);
            return;
          }
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, pxW, pxH);
          ctx.drawImage(img, 0, 0, pxW, pxH);
          URL.revokeObjectURL(url);
          canvas.toBlob((blob) => {
            if (!blob) {
              resolve(null);
              return;
            }
            blob.arrayBuffer().then((ab) => resolve(new Uint8Array(ab))).catch(() => resolve(null));
          }, 'image/png');
        } catch {
          URL.revokeObjectURL(url);
          resolve(null);
        }
      };

      img.onerror = () => {
        clearTimeout(timer);
        URL.revokeObjectURL(url);
        resolve(null);
      };

      img.src = url;
    } catch {
      resolve(null);
    }
  });
}

async function fetchPlateBytes(imagePath: string): Promise<Uint8Array | null> {
  if (typeof fetch === 'undefined') return null;
  try {
    const res = await fetch(imagePath);
    if (!res.ok) return null;
    const ab = await res.arrayBuffer();
    const bytes = new Uint8Array(ab);
    const isJpeg = bytes.length >= 4 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
    const isPng = bytes.length >= 8 && bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47;
    if (!isJpeg && !isPng) return null;
    return bytes;
  } catch {
    return null;
  }
}

const CRC32_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(bytes: Uint8Array): number {
  let crc = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) {
    crc = CRC32_TABLE[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

export interface ZipEntryInput {
  name: string;
  data: Uint8Array;
}

/**
 * Pure TypeScript PKZIP builder (STORE method 0 with UTF-8 flag bit 11).
 */
export function buildZipArchive(entries: ZipEntryInput[]): Uint8Array {
  const encoder = new TextEncoder();
  const now = new Date();
  const dosTime =
    ((now.getHours() & 0x1f) << 11) |
    ((now.getMinutes() & 0x3f) << 5) |
    ((now.getSeconds() >> 1) & 0x1f);
  const dosDate =
    (((Math.max(1980, now.getFullYear()) - 1980) & 0x7f) << 9) |
    (((now.getMonth() + 1) & 0x0f) << 5) |
    (now.getDate() & 0x1f);

  const localChunks: Uint8Array[] = [];
  const centralChunks: Uint8Array[] = [];
  let offset = 0;

  for (const entry of entries) {
    const nameBytes = encoder.encode(entry.name);
    const data = entry.data;
    const checksum = crc32(data);

    // Local File Header (30 bytes + nameLen)
    const lfh = new Uint8Array(30 + nameBytes.length);
    const lv = new DataView(lfh.buffer);
    lv.setUint32(0, 0x04034b50, true);
    lv.setUint16(4, 20, true); // version needed: 2.0
    lv.setUint16(6, 0x0800, true); // UTF-8 filename flag
    lv.setUint16(8, 0, true); // compression: STORE
    lv.setUint16(10, dosTime, true);
    lv.setUint16(12, dosDate, true);
    lv.setUint32(14, checksum, true);
    lv.setUint32(18, data.length, true);
    lv.setUint32(22, data.length, true);
    lv.setUint16(26, nameBytes.length, true);
    lv.setUint16(28, 0, true);
    lfh.set(nameBytes, 30);

    localChunks.push(lfh, data);

    // Central Directory Header (46 bytes + nameLen)
    const cdh = new Uint8Array(46 + nameBytes.length);
    const cv = new DataView(cdh.buffer);
    cv.setUint32(0, 0x02014b50, true);
    cv.setUint16(4, 20, true); // version made by
    cv.setUint16(6, 20, true); // version needed
    cv.setUint16(8, 0x0800, true); // UTF-8 flag
    cv.setUint16(10, 0, true); // STORE
    cv.setUint16(12, dosTime, true);
    cv.setUint16(14, dosDate, true);
    cv.setUint32(16, checksum, true);
    cv.setUint32(20, data.length, true);
    cv.setUint32(24, data.length, true);
    cv.setUint16(28, nameBytes.length, true);
    cv.setUint16(30, 0, true);
    cv.setUint16(32, 0, true);
    cv.setUint16(34, 0, true);
    cv.setUint16(36, 0, true);
    cv.setUint32(38, 0, true);
    cv.setUint32(42, offset, true);
    cdh.set(nameBytes, 46);

    centralChunks.push(cdh);
    offset += lfh.length + data.length;
  }

  let cdSize = 0;
  for (const c of centralChunks) cdSize += c.length;

  const eocd = new Uint8Array(22);
  const ev = new DataView(eocd.buffer);
  ev.setUint32(0, 0x06054b50, true);
  ev.setUint16(4, 0, true);
  ev.setUint16(6, 0, true);
  ev.setUint16(8, entries.length, true);
  ev.setUint16(10, entries.length, true);
  ev.setUint32(12, cdSize, true);
  ev.setUint32(16, offset, true);
  ev.setUint16(20, 0, true);

  const totalSize = offset + cdSize + eocd.length;
  const result = new Uint8Array(totalSize);
  let cursor = 0;
  for (const chunk of localChunks) {
    result.set(chunk, cursor);
    cursor += chunk.length;
  }
  for (const chunk of centralChunks) {
    result.set(chunk, cursor);
    cursor += chunk.length;
  }
  result.set(eocd, cursor);
  return result;
}

/**
 * Generates the complete downloadable LaTeX bundle ZIP (all .tex, .bib, .svg, .png figures, and .jpg plates).
 */
export async function buildLatexBundleZipBlob(): Promise<Blob> {
  const encoder = new TextEncoder();
  const textFiles = buildLatexFilesMap();
  const entries: ZipEntryInput[] = Object.entries(textFiles).map(([name, content]) => ({
    name,
    data: encoder.encode(content)
  }));

  // Fetch all 14 archival JPEG plates
  await Promise.all(
    PAPER_ILLUSTRATIONS.map(async (plate) => {
      const bytes = await fetchPlateBytes(plate.imagePath);
      if (bytes) {
        entries.push({
          name: `illustrations/${plateFilename(plate.id)}`,
          data: bytes
        });
      }
    })
  );

  // Rasterize all 12 vector SVG figures to PNG so pdflatex/Overleaf renders figures immediately
  for (const fig of PAPER_FIGURES) {
    const pngBytes = await rasterizeSvgToPngBytes(fig.svgMarkup);
    if (pngBytes) {
      entries.push({
        name: `figures/${figureBaseName(fig.id)}.png`,
        data: pngBytes
      });
    }
  }

  const zipBytes = buildZipArchive(entries);
  const exactBuffer = zipBytes.buffer.slice(
    zipBytes.byteOffset,
    zipBytes.byteOffset + zipBytes.byteLength
  ) as ArrayBuffer;
  return new Blob([exactBuffer], { type: 'application/zip' });
}
