/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * IGRT-H13 Exporters:
 * - Self-Contained Archival HTML (IGRT_H13_Monograph.html)
 * - Standalone Pure-ASCII, pdflatex-Verified LaTeX Monograph (IGRT_H13_Monograph.tex)
 */

import {
  H13_META,
  H13_METRIC_SIGNATURE_BOX,
  H13_FOUNDATIONAL_NOTE,
  H13_READING_GUIDE,
  H13_MASTER_EQUATIONS,
  H13_ABSTRACT_PARAGRAPHS,
  H13_SCOPE_AND_NON_CLAIMS,
  H13_TWELVE_PRINCIPLES_MATRIX,
  H13_SYMBOL_DECODER,
  H13_DIMENSIONAL_AUDIT,
  H13_BLACK_HOLE_TO_PORTAL_TAXONOMY,
  H13_WHITE_HOLE_BOUNCE_TABLE,
  H13_PROTOCOLS_P14_TO_P18,
  H13_FALSIFICATION_CHECKLIST,
  H13_CONFIRMATION_CHECKLIST,
  H13_EPISTEMIC_LEDGER,
  H13_PROOF_DEVICES_AND_RECOMMENDATIONS,
  H13_LAYMAN_FAQ,
  H13_APPENDICES,
  H13_ACTION_FIELD_TABLE,
  H13_KK_CONSTRAINTS_TABLE,
  H13_GJW_PROOF_STEPS,
  H13_WH_PIPELINE_SPEC,
  H13_DEFINITIONS_LIST,
  H13_THEOREMS_LIST,
  H13_REFERENCES,
  type H13Equation
} from '../types/igrtH13Apparatus';
import {
  H13_CHAPTERS,
  H13_FRONTMATTER_TABLES_LIST,
  H13_FRONTMATTER_EQUATIONS_LIST
} from '../types/igrtH13Data';
import { H13_ARCHIVAL_PLATES, H13_FIGURES } from '../components/IgrtH13Figures';
import { proseToLatex } from './generateHarmonizedPaperLatex';
import {
  formatMathToHtml,
  formatSvgMathMarkup,
  parseHtmlMathSegments,
  pdfBmpSafeUnicode,
  type MathSegment
} from './formatMathUnicode';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderHtmlMath(raw: string): string {
  return formatMathToHtml(pdfBmpSafeUnicode(raw));
}

// ---------------------------------------------------------------------------
// Dedicated Pure-ASCII, Balanced-Brace LaTeX Equation & Prose Compiler (H13)
// ---------------------------------------------------------------------------

const H13_MATH_SYMBOLS: Record<string, string> = {
  'Γ': '\\Gamma ',
  'Δ': '\\Delta ',
  'Θ': '\\Theta ',
  'Λ': '\\Lambda ',
  'Π': '\\Pi ',
  'Σ': '\\Sigma ',
  'Φ': '\\Phi ',
  'Ψ': '\\Psi ',
  'Ω': '\\Omega ',
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
  'µ': '\\mu ',
  'ν': '\\nu ',
  'ξ': '\\xi ',
  'π': '\\pi ',
  'ρ': '\\rho ',
  'σ': '\\sigma ',
  'τ': '\\tau ',
  'φ': '\\varphi ',
  'χ': '\\chi ',
  'ψ': '\\psi ',
  'ω': '\\omega ',
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
  '𝒫': '\\mathcal{P}',
  '𝒪': '\\mathcal{O}',
  'ℏ': '\\hbar ',
  'ħ': '\\hbar ',
  'ℓ': '\\ell ',
  '°': '^{\\circ}',
  '±': '\\pm ',
  '·': '\\cdot ',
  '⋅': '\\cdot ',
  '×': '\\times ',
  '†': '\\dagger ',
  '‖': '\\|',
  '′': "'",
  '″': "''",
  '→': '\\to ',
  '←': '\\leftarrow ',
  '↔': '\\leftrightarrow ',
  '⇒': '\\Rightarrow ',
  '∂': '\\partial ',
  '∅': '\\emptyset ',
  '∇': '\\nabla ',
  '∈': '\\in ',
  '∉': '\\notin ',
  '∑': '\\sum ',
  '−': '-',
  '∝': '\\propto ',
  '∞': '\\infty ',
  '∪': '\\cup ',
  '∫': '\\int ',
  '∮': '\\oint ',
  '∼': '\\sim ',
  '≃': '\\simeq ',
  '≈': '\\approx ',
  '≠': '\\neq ',
  '≡': '\\equiv ',
  '≤': '\\le ',
  '≥': '\\ge ',
  '≪': '\\ll ',
  '≫': '\\gg ',
  '≲': '\\lesssim ',
  '≳': '\\gtrsim ',
  '≺': '\\prec ',
  '⊂': '\\subset ',
  '⊕': '\\oplus ',
  '⊗': '\\otimes ',
  '⊙': '\\odot ',
  '⊥': '\\perp ',
  '□': '\\Box ',
  '⟨': '\\langle ',
  '⟩': '\\rangle ',
  '¼': '\\frac{1}{4}',
  '½': '\\frac{1}{2}',
  'Ĥ': '\\hat{H}',
  '–': '-',
  '—': '-',
  '’': "'",
  '…': '\\ldots '
};

const H13_ROMAN_TOKENS = new Set([
  'QFI', 'BKM', 'IGRT', 'KMS', 'GJW', 'UV', 'EM', 'Pl', 'RG', 'WH', 'BH',
  'SM', 'GH', 'GW', 'KK', '5D', '4D', 'H13', 'TFD', 'vac', 'brane', 'bulk',
  'near', 'final', 'bounce', 'peak', 'info', 'red', 'crit',
  'Araki', 'Hay', 'Horndeski', 'Compile', 'Type', 'Ia', 'Pure', 'States',
  'Double', 'Trace', 'Portal', 'Pulse', 'obs', 'mod', 'step', 'sync', 'ent',
  'rad', 'port', 'fold', 'core', 'max', 'min', 'rem', 'int', 'ext', 'throttle',
  'local', 'cache', 'coarse', 'env', 'neuro', 'ticks', 'update',
  'cubic', 'quad', 'outcome', 'write', 'coh', 'loc', 'holo', 'saved', 'eff',
  'net', 'Cs', 'flip', 'at', 'bits', 'updates', 'Gyr', 'meV', 'GeV', 'TeV'
]);

const SUP_CHAR_MAP: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
  '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  '⁺': '+', '⁻': '-'
};
const SUB_CHAR_MAP: Record<string, string> = {
  '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
  '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9'
};

function convertUnicodeMathTextToLatex(raw: string): string {
  const norm = raw.replace(/\u00A0/g, ' ');
  const chars = [...norm];
  let out = '';

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    const next = chars[i + 1];

    // Fold combining accents safely into clean LaTeX braces without corrupting braces
    if (next === '\u0307' || next === '\u0302' || next === '\u0303' || next === '\u0304' || next === '\u0308' || next === '\u20D7') {
      const cmd =
        next === '\u0307' ? '\\dot'
          : next === '\u0302' ? '\\hat'
            : next === '\u0303' ? '\\tilde'
              : next === '\u0304' ? '\\bar'
                : next === '\u0308' ? '\\ddot'
                  : '\\vec';
      const base = (ch in H13_MATH_SYMBOLS ? H13_MATH_SYMBOLS[ch] : ch).trim();
      out += `${cmd}{${base}}`;
      i++;
      continue;
    }

    if (ch in SUP_CHAR_MAP) {
      let run = SUP_CHAR_MAP[ch];
      while (i + 1 < chars.length && chars[i + 1] in SUP_CHAR_MAP) run += SUP_CHAR_MAP[chars[++i]];
      out += `^{${run}}`;
      continue;
    }
    if (ch in SUB_CHAR_MAP) {
      let run = SUB_CHAR_MAP[ch];
      while (i + 1 < chars.length && chars[i + 1] in SUB_CHAR_MAP) run += SUB_CHAR_MAP[chars[++i]];
      out += `_{${run}}`;
      continue;
    }

    if (ch === '√' || ch === '\u221A') {
      out += '\\sqrt';
    } else if (ch in H13_MATH_SYMBOLS) {
      out += H13_MATH_SYMBOLS[ch];
    } else {
      out += ch;
    }
  }
  return out;
}

function balanceSqrtParentheses(latex: string): string {
  let res = latex;
  let searchFrom = 0;
  while (true) {
    const idx = res.indexOf('\\sqrt', searchFrom);
    if (idx === -1) break;
    let p = idx + 5;
    while (p < res.length && res[p] === ' ') p++;
    if (res[p] === '(') {
      let depth = 1;
      let q = p + 1;
      while (q < res.length && depth > 0) {
        if (res[q] === '(') depth++;
        else if (res[q] === ')') depth--;
        q++;
      }
      if (depth === 0) {
        const inner = res.slice(p + 1, q - 1);
        res = res.slice(0, idx) + `\\sqrt{${inner}}` + res.slice(q);
        searchFrom = idx + 6;
        continue;
      }
    }
    searchFrom = idx + 5;
  }
  return res;
}

function renderH13SegmentToLatex(seg: MathSegment, inScript = false): string {
  if (seg.type === 'text') {
    let s = convertUnicodeMathTextToLatex(seg.text);
    if (inScript) {
      const trimmed = s.trim();
      if (trimmed === 'Type Ia') return '\\mathrm{Type\\,Ia}';
      if (trimmed === 'Cs-flip') return '\\mathrm{Cs\\text{-}flip}';
      if (H13_ROMAN_TOKENS.has(trimmed) || (/^[A-Za-z0-9\- ]{3,}$/.test(trimmed) && !/[+\-/*=]/.test(trimmed))) {
        return `\\mathrm{${trimmed.replace(/ /g, '\\,')}}`;
      }
      if (trimmed.includes(',')) {
        return trimmed
          .split(',')
          .map((part) => {
            const tp = part.trim();
            return H13_ROMAN_TOKENS.has(tp) || tp.length >= 3 ? `\\mathrm{${tp}}` : tp;
          })
          .join(',');
      }
      return trimmed;
    }
    return s;
  }
  if (seg.type === 'sub') {
    const inner = seg.children.map((c) => renderH13SegmentToLatex(c, true)).join('').trim();
    return `_{${inner}}`;
  }
  if (seg.type === 'sup') {
    const inner = seg.children.map((c) => renderH13SegmentToLatex(c, true)).join('').trim();
    return `^{${inner}}`;
  }
  // Italic tag <i>...</i> inside math mode is default math italic
  return seg.children.map((c) => renderH13SegmentToLatex(c, inScript)).join('');
}

export function h13EquationToLatex(eq: H13Equation): string {
  const segs = parseHtmlMathSegments(eq.unicodeHtml);
  let body = '';
  for (const sg of segs) {
    const piece = renderH13SegmentToLatex(sg, false);
    if (body && /\\[A-Za-z]+$/.test(body) && /^[A-Za-z0-9]/.test(piece)) {
      body += ' ';
    }
    body += piece;
  }

  // Group \sqrt(...) cleanly across arbitrary nested parentheses
  body = balanceSqrtParentheses(body);

  // Format standard mathematical operators & common prose/unit tags cleanly inside math mode
  body = body
    .replace(/\bsech\b/g, '\\operatorname{sech}')
    .replace(/(?<![A-Za-z])Tr(?=_|\s|\[|\()/g, '\\operatorname{Tr}')
    .replace(/(?<![A-Za-z])(sin|cos|tan|exp|ln|log|lim)(?=_|\s|\(|\[)/g, '\\$1')
    .replace(/\\Delta([A-Za-z])/g, '\\Delta $1')
    .replace(/\bCompile\[/g, '\\mathrm{Compile}[')
    .replace(/GPS\/day/g, '\\mathrm{GPS/day}')
    .replace(/\\mu\s*s\/day/g, '\\,\\mu\\mathrm{s}/\\mathrm{day}')
    .replace(/\\mu\s*m\b/g, '\\,\\mu\\mathrm{m}')
    .replace(/\(Pure States:/g, '(\\text{Pure States: }')
    .replace(/\(at\s+([^()]+)\)/g, '(\\text{at } $1)')
    .replace(/\(15\.85% saved at/g, '(15.85\\%\\text{ saved at }')
    .replace(/\(36\.34% max\)/g, '(36.34\\%\\text{ max})')
    .replace(/\(\s*13\.8\s+Gyr\s*\)/g, '(13.8\\,\\mathrm{Gyr})')
    .replace(/\(\s*<i>R<\/i><sub>5<\/sub>\s*=\s*44\s*\\mu\s*m\s*\)/g, '(R_5 = 44\\,\\mu\\mathrm{m})')
    .replace(/(?<=\d|\})\s+(meV|GeV|TeV|MeV|eV)\b/g, '\\,\\mathrm{$1}')
    .replace(/\bupdates\s+s\^\{-1\}/g, '\\,\\mathrm{updates}\\,\\mathrm{s}^{-1}')
    .replace(/\bs\^\{-1\}\s*J\^\{-1\}/g, '\\,\\mathrm{s}^{-1}\\,\\mathrm{J}^{-1}')
    .replace(/\bm\^\{-1\}/g, '\\,\\mathrm{m}^{-1}')
    .replace(/(?<=\d|\})\s+([sgJ])\b(?![A-Za-z_])/g, '\\,\\mathrm{$1}')
    .replace(/,\s{3,}/g, ',\\qquad ')
    .replace(/;\s{2,}/g, ';\\qquad ')
    .replace(/\s+(_|\^)\{/g, '$1{')
    .replace(/[ ]{2,}/g, ' ')
    .trim();

  // Escape raw '%' inside math if any unescaped % exists
  body = body.replace(/(?<!\\)%/g, '\\%');

  const cleanTag = eq.label.replace(/^\(|\)$/g, '').trim();
  const safeLabel = cleanTag.replace(/[^A-Za-z0-9.\-]/g, '-').toLowerCase();

  const blocks = [
    `\\begin{equation}\\label{eq:${safeLabel}}\\tag{${cleanTag}}`,
    `  ${body}`,
    `\\end{equation}`,
    `\\noindent{\\small\\itshape ${toLatex(eq.caption)}}\\par\\smallskip`
  ];
  if (eq.plainEnglishMeaning) {
    blocks.push(
      `\\noindent{\\small\\textbf{In Plain English:} ${toLatex(eq.plainEnglishMeaning)}}\\par\\smallskip`
    );
  }
  return blocks.join('\n');
}

function toLatex(raw: string): string {
  // Replace non-standard Latin/Unicode symbols cleanly before & after proseToLatex
  const normalized = raw
    .replace(/ħ/g, 'ℏ')
    .replace(/µ/g, 'μ')
    .replace(/𝒪/g, 'O')
    .replace(/𝒜/g, 'A');

  let tex = proseToLatex(normalized, { allowCitations: false })
    .replace(/ℏ/g, '\\hbar ')
    .replace(/ℓ/g, '\\ell ')
    .replace(/×/g, '\\times ')
    .replace(/±/g, '\\pm ')
    .replace(/≤/g, '\\le ')
    .replace(/≥/g, '\\ge ')
    .replace(/≪/g, '\\ll ')
    .replace(/≫/g, '\\gg ')
    .replace(/≠/g, '\\neq ')
    .replace(/≈/g, '\\approx ')
    .replace(/≡/g, '\\equiv ')
    .replace(/⇒/g, '\\Rightarrow ')
    .replace(/→/g, '\\to ')
    .replace(/∈/g, '\\in ')
    .replace(/⋅/g, '\\cdot ')
    .replace(/−/g, '-')
    .replace(/—/g, '---')
    .replace(/–/g, '--');

  // Fix any combining accent braces that proseToLatex might have escaped in prose like \dot\{\theta\}
  tex = tex.replace(/\\(dot|hat|tilde|bar|ddot|vec)\\\{([^}]+)\\\}/g, '$1{$2}');
  // Fix broken \sqrt(...) inside inline math chunks
  tex = balanceSqrtParentheses(tex);

  // Sweep any leftover non-ASCII codepoints into strict pdflatex ASCII equivalents,
  // preserving math-mode parity so commands never leak outside $...$
  const textFallbackMap: Record<string, string> = {
    'ñ': '\\~{n}', 'á': "\\'{a}", 'é': "\\'{e}", 'ö': '\\"{o}',
    '’': "'", '‘': '`', '“': '``', '”': "''", '·': ' ', '§': '\\S{}', '°': '$^\\circ$',
    'ℝ': '\\mathbb{R}', 'ℤ': '\\mathbb{Z}', 'ℂ': '\\mathbb{C}', 'ℍ': '\\mathbb{H}',
    'ℒ': '\\mathcal{L}', 'ℋ': '\\mathcal{H}', '𝒜': '\\mathcal{A}', '𝒞': '\\mathcal{C}',
    '𝒟': '\\mathcal{D}', '𝒫': '\\mathcal{P}', 'ℐ': '\\mathcal{I}', 'ℛ': '\\mathcal{R}',
    '∮': '\\oint ', '□': '\\Box ', '≲': '\\lesssim ', '≳': '\\gtrsim ', '∝': '\\propto ',
    '∼': '\\sim ', '∇': '\\nabla ', '∂': '\\partial ', '⟨': '\\langle ', '⟩': '\\rangle ',
    '∑': '\\sum ', '∫': '\\int ', '∞': '\\infty ', 'Π': '\\Pi ', '′': "'", '″': "''",
    '☉': '\\odot ', '⊙': '\\odot ', '⊗': '\\otimes ', '⊕': '\\oplus ',
    '∩': '\\cap ', '∪': '\\cup ', '⊂': '\\subset ', '‖': '\\|', '†': '\\dagger ',
    '←': '\\leftarrow ', '↔': '\\leftrightarrow ', '∉': '\\notin ', '∅': '\\emptyset ',
    '≃': '\\simeq ', '⊥': '\\perp ', '…': '\\ldots '
  };
  const mathOnlyKeys = new Set([
    'ℝ', 'ℤ', 'ℂ', 'ℍ', 'ℒ', 'ℋ', '𝒜', '𝒞', '𝒟', '𝒫', 'ℐ', 'ℛ',
    '∮', '□', '≲', '≳', '∝', '∼', '∇', '∂', '⟨', '⟩', '∑', '∫', '∞', 'Π',
    '☉', '⊙', '⊗', '⊕', '∩', '∪', '⊂', '‖', '†', '←', '↔', '∉', '∅', '≃', '⊥'
  ]);
  let asciiOut = '';
  let inMath = false;
  const texChars = [...tex];
  for (let i = 0; i < texChars.length; i++) {
    const ch = texChars[i];
    if (ch === '\\' && i + 1 < texChars.length) {
      asciiOut += ch + texChars[++i];
      continue;
    }
    if (ch === '$') {
      inMath = !inMath;
      asciiOut += ch;
      continue;
    }
    if ((ch.codePointAt(0) ?? 0) <= 127) {
      asciiOut += ch;
    } else if (ch in textFallbackMap) {
      const rep = textFallbackMap[ch];
      if (mathOnlyKeys.has(ch) && !inMath) asciiOut += `$${rep.trim()}$`;
      else asciiOut += rep;
    }
  }
  return asciiOut;
}

export function buildH13SelfContainedHtml(): string {
  const parts: string[] = [];
  parts.push(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(H13_META.title)}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400&display=swap" rel="stylesheet">
  <style>
    body { background: #FAF8F3; color: #3A2E26; font-family: "Book Antiqua", "Palatino Linotype", Georgia, serif; font-size: 16px; line-height: 1.72; margin: 0; padding: 0; }
    main { max-width: 920px; margin: 0 auto; padding: 48px 32px; background: #FFFFFF; box-shadow: 0 2px 18px rgba(58,46,38,0.06); }
    h1, h2 { font-family: "Playfair Display", Georgia, serif; font-weight: 400; color: #0F172A; }
    h1 { font-size: 32px; line-height: 1.25; margin-bottom: 12px; }
    h2 { font-size: 26px; margin-top: 44px; padding-bottom: 8px; border-bottom: 1px solid #EAE2D2; }
    h3 { font-size: 19px; color: #8F5B4A; margin-top: 26px; }
    .meta { font-family: ui-monospace, SFMono-Regular, monospace; font-size: 12px; color: #8F5B4A; text-transform: uppercase; letter-spacing: 0.08em; }
    .eq-box { margin: 22px 0; padding: 18px 22px; background: #FAF8F3; border: 1px solid #D6CABE; border-radius: 8px; text-align: center; }
    .eq-cap { margin-top: 10px; padding-top: 8px; border-top: 1px solid #EAE2D2; font-size: 13px; color: #475569; font-style: italic; }
    .eq-plain { margin-top: 6px; font-size: 12.5px; color: #64705B; }
    .callout { margin: 18px 0; padding: 16px 20px; background: #FAF8F3; border: 1px solid #D6CABE; border-radius: 8px; }
    table { width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 13.5px; }
    th, td { border: 1px solid #D6CABE; padding: 8px 10px; text-align: left; vertical-align: top; }
    th { background: #EFE8DA; color: #3A2E26; }
    figure { margin: 28px 0; padding: 16px; border: 1px solid #D6CABE; border-radius: 8px; background: #FFFFFF; }
    figcaption { font-size: 13px; color: #64748B; font-style: italic; margin-top: 8px; }
    p { text-align: justify; }
  </style>
</head>
<body>
<main>
  <div class="meta">${escapeHtml(H13_META.monographId)} · ${escapeHtml(H13_META.date)}</div>
  <h1>${escapeHtml(H13_META.title)}</h1>
  <p style="font-style:italic;color:#64748B;">${escapeHtml(H13_META.subtitle)}</p>
  <div class="callout">
    <strong>Authors:</strong><br/>
    ${H13_META.authorRoster
      .map(
        (a) =>
          `${escapeHtml(a.name)} — ${escapeHtml(a.affiliation)}${
            a.orcidUrl ? ` (<a href="${escapeHtml(a.orcidUrl)}">ORCID: ${escapeHtml(a.orcid || '')}</a>)` : a.email ? ` (${escapeHtml(a.email)})` : ''
          }`
      )
      .join('<br/>')}
  </div>

  <h2>Reader Navigation Guide</h2>
  <ul>${H13_READING_GUIDE.map((r) => `<li><strong>${escapeHtml(r.audience)}:</strong> ${renderHtmlMath(r.howToRead)}</li>`).join('\n')}</ul>

  <h2>Abstract</h2>
  ${H13_ABSTRACT_PARAGRAPHS.map((p) => `<p>${renderHtmlMath(p)}</p>`).join('\n')}

  <h2>Foundations, Master Equations &amp; Symbol Guide</h2>
  <div class="callout">${renderHtmlMath(H13_FOUNDATIONAL_NOTE)}<br/><br/><strong>Convention:</strong> ${renderHtmlMath(H13_METRIC_SIGNATURE_BOX)}</div>
  ${H13_MASTER_EQUATIONS.map(
    (eq) =>
      `<div class="eq-box"><div>${eq.unicodeHtml} &nbsp; <code>${escapeHtml(eq.label)}</code></div><div class="eq-cap">[${escapeHtml(eq.category)}] ${renderHtmlMath(eq.caption)}</div>${
        eq.plainEnglishMeaning ? `<div class="eq-plain"><strong>In Plain English:</strong> ${renderHtmlMath(eq.plainEnglishMeaning)}</div>` : ''
      }</div>`
  ).join('\n')}

  <h3>Epistemic Scope &amp; Explicit Non-Claims</h3>
  <ul>${H13_SCOPE_AND_NON_CLAIMS.points.map((pt) => `<li>${renderHtmlMath(pt)}</li>`).join('\n')}</ul>

  <h3>Table 0.1 · Twelve Principles of Reality as Running Code</h3>
  <table>
    <thead><tr><th># &amp; Principle</th><th>Plain-Language Thesis</th><th>IGRT Formula &amp; Anchor</th><th>Category</th></tr></thead>
    <tbody>
      ${H13_TWELVE_PRINCIPLES_MATRIX.map(
        (r) =>
          `<tr><td><strong>${r.id}. ${escapeHtml(r.shortTitle)}</strong></td><td>"${renderHtmlMath(r.userStatement)}"</td><td><code>${renderHtmlMath(r.governingFormula)}</code><br/>${renderHtmlMath(r.quantitativeAnchor)}</td><td>${escapeHtml(r.epistemicCategory)}</td></tr>`
      ).join('\n')}
    </tbody>
  </table>

  <h3>Table 0.2 · Plain-English Symbol &amp; Units Decoder</h3>
  <table>
    <thead><tr><th>Symbol</th><th>Spoken Name</th><th>Plain-English Meaning</th><th>Formal Role &amp; Units</th></tr></thead>
    <tbody>
      ${H13_SYMBOL_DECODER.map(
        (sy) =>
          `<tr><td><code>${renderHtmlMath(sy.symbol)}</code></td><td>${escapeHtml(sy.spokenName)}</td><td>${renderHtmlMath(sy.plainEnglishMeaning)}</td><td>${renderHtmlMath(sy.formalMathematicalRole)} (${renderHtmlMath(sy.units)})</td></tr>`
      ).join('\n')}
    </tbody>
  </table>

  <h3>Table 0.3 · SI Units &amp; Dimensional Consistency Audit</h3>
  <table>
    <thead><tr><th>Equation</th><th>Formula</th><th>LHS = RHS Dimensions</th><th>Physical Verification</th></tr></thead>
    <tbody>
      ${H13_DIMENSIONAL_AUDIT.map(
        (da) =>
          `<tr><td><strong>${escapeHtml(da.equationLabel)}</strong></td><td><code>${renderHtmlMath(da.formulaSummary)}</code></td><td>${renderHtmlMath(da.lhsDimensions)} = ${renderHtmlMath(da.rhsDimensions)}</td><td>${renderHtmlMath(da.physicalCheck)}</td></tr>`
      ).join('\n')}
    </tbody>
  </table>

  <h3>Front-Matter Index &amp; List of 26 Illustrations</h3>
  <ul>${H13_FRONTMATTER_TABLES_LIST.map((t) => `<li><strong>${escapeHtml(t.id)}</strong> (${escapeHtml(t.location)}): ${escapeHtml(t.title)}</li>`).join('\n')}</ul>
  <ul>${H13_FRONTMATTER_EQUATIONS_LIST.map((e) => `<li><strong>${escapeHtml(e.label)}</strong> (${escapeHtml(e.location)}): ${renderHtmlMath(e.title)}</li>`).join('\n')}</ul>
  <ul>${H13_THEOREMS_LIST.map((th) => `<li><strong>${escapeHtml(th.id)}</strong> (${escapeHtml(th.location)}): ${renderHtmlMath(th.title)}</li>`).join('\n')}</ul>
  <ul>${H13_DEFINITIONS_LIST.map((d) => `<li><strong>${escapeHtml(d.id)} — ${renderHtmlMath(d.term)}:</strong> ${renderHtmlMath(d.formalDefinition)}</li>`).join('\n')}</ul>
  <ul>${H13_ARCHIVAL_PLATES.map((pl) => `<li><strong>${escapeHtml(pl.figureNumber)}</strong> (Ch. ${pl.anchorChapter}, ${escapeHtml(pl.category)}): ${renderHtmlMath(pl.title)}</li>`).join('\n')}</ul>
  <ul>${H13_FIGURES.map((fg) => `<li><strong>${escapeHtml(fg.figureNumber)}</strong> (Ch. ${fg.anchorChapter}, ${escapeHtml(fg.category)}): ${renderHtmlMath(fg.title)}</li>`).join('\n')}</ul>
`);

  for (const ch of H13_CHAPTERS) {
    parts.push(`  <h2>Chapter ${ch.number}. ${renderHtmlMath(ch.title)}</h2>`);
    parts.push(`  <p class="meta">Provenance: ${renderHtmlMath(ch.provenance)}</p>`);
    parts.push(`  <div class="callout"><strong>Core Principle ${ch.number}:</strong> "${renderHtmlMath(ch.principleQuote)}"<br/><em>${escapeHtml(ch.epistemicCategory)}</em><br/><br/><strong>In Plain English:</strong> ${renderHtmlMath(ch.plainEnglishBridge)}<br/><strong>Everyday Analogy:</strong> ${renderHtmlMath(ch.everydayAnalogy)}</div>`);
    parts.push(`  <p style="font-style:italic;color:#64748B;">${renderHtmlMath(ch.leadSummary)}</p>`);

    for (const sub of ch.subsections) {
      parts.push(`  <h3>${escapeHtml(sub.number)} ${renderHtmlMath(sub.title)} <small>[${escapeHtml(sub.category)}]</small></h3>`);
      for (const p of sub.paragraphs) parts.push(`  <p>${renderHtmlMath(p)}</p>`);
      if (sub.equation) {
        parts.push(`<div class="eq-box"><div>${sub.equation.unicodeHtml} &nbsp; <code>${escapeHtml(sub.equation.label)}</code></div><div class="eq-cap">${renderHtmlMath(sub.equation.caption)}</div>${sub.equation.plainEnglishMeaning ? `<div class="eq-plain"><strong>In Plain English:</strong> ${renderHtmlMath(sub.equation.plainEnglishMeaning)}</div>` : ''}</div>`);
      }
      if (sub.theoremBox) {
        parts.push(
          `<div class="callout"><strong>${escapeHtml(sub.theoremBox.number)}: ${renderHtmlMath(sub.theoremBox.title)}</strong> [${escapeHtml(sub.theoremBox.category)}]<ul>${sub.theoremBox.hypotheses.map((h) => `<li>${renderHtmlMath(h)}</li>`).join('')}</ul><p><strong>Statement:</strong> ${renderHtmlMath(sub.theoremBox.statement)}</p><p><strong>Formal Multi-Step Proof:</strong></p><ol>${sub.theoremBox.proofSteps.map((st) => `<li>${renderHtmlMath(st)}</li>`).join('')}</ol><p><small><strong>Provenance:</strong> ${renderHtmlMath(sub.theoremBox.provenance)}</small></p>${sub.theoremBox.plainEnglishSummary ? `<em>Plain-English Meaning:</em> ${renderHtmlMath(sub.theoremBox.plainEnglishSummary)}` : ''}</div>`
        );
      }
      if (sub.workedExample) {
        parts.push(`<div class="callout"><strong>${escapeHtml(sub.workedExample.title)}</strong><br/>${renderHtmlMath(sub.workedExample.setup)}<ol>${sub.workedExample.steps.map((s) => `<li>${renderHtmlMath(s)}</li>`).join('')}</ol><div class="eq-box"><div>${sub.workedExample.resultEquation.unicodeHtml} &nbsp; <code>${escapeHtml(sub.workedExample.resultEquation.label)}</code></div><div class="eq-cap">${renderHtmlMath(sub.workedExample.resultEquation.caption)}</div></div><em>Takeaway:</em> ${renderHtmlMath(sub.workedExample.takeaway)}</div>`);
      }
    }
    parts.push(`<div class="callout"><strong>Chapter ${ch.number} Key Takeaways:</strong><ul>${ch.keyTakeaways.map((kt) => `<li>${renderHtmlMath(kt)}</li>`).join('')}</ul></div>`);

    if (ch.number === 8) {
      parts.push(`<table><thead><tr><th>Black-Hole Node Class</th><th>Geometry</th><th>NEC / Causal Status</th><th>Portal Benchmark</th></tr></thead><tbody>${H13_BLACK_HOLE_TO_PORTAL_TAXONOMY.map((b) => `<tr><td>${renderHtmlMath(b.nodeClass)}</td><td>${renderHtmlMath(b.geometryAndAction)}</td><td>${renderHtmlMath(b.necAndCausalStatus)}</td><td>${renderHtmlMath(b.isPortalOrWhiteHole)} — ${renderHtmlMath(b.foldingOrBounceMetric)}</td></tr>`).join('')}</tbody></table>`);
    }
    if (ch.number === 9) {
      parts.push(`<table><thead><tr><th>Progenitor Regime</th><th>Mass</th><th>Interior / Exterior Bounce</th><th>Observable</th></tr></thead><tbody>${H13_WHITE_HOLE_BOUNCE_TABLE.map((w) => `<tr><td>${renderHtmlMath(w.progenitorRegime)}</td><td>${renderHtmlMath(w.massScale)}</td><td>${renderHtmlMath(w.interiorBounceTime)} / ${renderHtmlMath(w.exteriorBounceDelay)}</td><td>${renderHtmlMath(w.astrophysicalObservable)}</td></tr>`).join('')}</tbody></table>`);
    }
    if (ch.number === 12) {
      parts.push(`<table><thead><tr><th>Protocol</th><th>Target Thesis</th><th>Quantitative Threshold &amp; Systematics</th><th>Falsifier</th></tr></thead><tbody>${H13_PROTOCOLS_P14_TO_P18.map((pr) => `<tr><td><strong>${pr.id}</strong> · ${escapeHtml(pr.name)}</td><td>${renderHtmlMath(pr.targetThesis)}</td><td>${renderHtmlMath(pr.quantitativeThreshold)}<br/><em>Systematics:</em> ${renderHtmlMath(pr.systematicsControl)}</td><td>${renderHtmlMath(pr.falsificationCriterion)}</td></tr>`).join('')}</tbody></table>`);
      parts.push(`<ul>${H13_FALSIFICATION_CHECKLIST.map((f) => `<li>[Falsify] ${renderHtmlMath(f)}</li>`).join('')}</ul>`);
      parts.push(`<ul>${H13_CONFIRMATION_CHECKLIST.map((c) => `<li>[Confirm] ${renderHtmlMath(c)}</li>`).join('')}</ul>`);
      parts.push(`<h4>Table 12.2 · Epistemic Claim–Provenance–Proof Ledger (16 Claims C1–C16)</h4>`);
      parts.push(`<table><thead><tr><th>ID &amp; Claim</th><th>Category</th><th>Proof Anchor &amp; Primary Provenance</th><th>Verification &amp; Limit</th></tr></thead><tbody>${H13_EPISTEMIC_LEDGER.map((e) => `<tr><td><strong>${escapeHtml(e.claimId)}</strong> · ${renderHtmlMath(e.claim)}</td><td>${escapeHtml(e.category)}</td><td><strong>Proof:</strong> ${renderHtmlMath(e.mathematicalSupport)}<br/><strong>Provenance:</strong> ${renderHtmlMath(e.primaryProvenance)}</td><td><code>${renderHtmlMath(e.computationalCheck)}</code><br/><strong>Limit:</strong> ${renderHtmlMath(e.explicitLimitOrNonClaim)}</td></tr>`).join('')}</tbody></table>`);
      parts.push(`<h4>Table 12.3 · Proof Apparatus, Readiness Levels (TRL) &amp; Priority Recommendations</h4>`);
      parts.push(`<table><thead><tr><th>Device &amp; Plate</th><th>TRL &amp; Target Proof</th><th>Engineering Recommendation</th><th>Statistical &amp; Open-Science Gate</th></tr></thead><tbody>${H13_PROOF_DEVICES_AND_RECOMMENDATIONS.map((dev) => `<tr><td><strong>${escapeHtml(dev.deviceId)}</strong> · ${escapeHtml(dev.linkedPlateOrFigure)}<br/>${renderHtmlMath(dev.deviceName)}<br/><small>${escapeHtml(dev.linkedProtocol)}</small></td><td><strong>${escapeHtml(dev.trl)}</strong><br/>${renderHtmlMath(dev.provesOrTests)}</td><td>${renderHtmlMath(dev.engineeringRecommendation)}</td><td>${renderHtmlMath(dev.statisticalAndOpenScienceGate)}</td></tr>`).join('')}</tbody></table>`);
    }

    for (const pl of H13_ARCHIVAL_PLATES.filter((p) => p.anchorChapter === ch.number)) {
      parts.push(`<div class="callout"><strong>${escapeHtml(pl.figureNumber)} · ARCHIVAL / PROOF PLATE [${escapeHtml(pl.category)}]:</strong> ${renderHtmlMath(pl.title)}<br/><em>${renderHtmlMath(pl.description)}</em></div>`);
    }
    for (const fg of H13_FIGURES.filter((f) => f.anchorChapter === ch.number)) {
      parts.push(`<figure><div>${formatSvgMathMarkup(fg.svgMarkup)}</div><figcaption><strong>${escapeHtml(fg.figureNumber)}:</strong> ${renderHtmlMath(fg.title)} — ${renderHtmlMath(fg.caption)}</figcaption></figure>`);
    }
  }

  parts.push(`  <h2>Common Questions &amp; Misconceptions Clarified</h2>`);
  for (const faq of H13_LAYMAN_FAQ) {
    parts.push(`<div class="callout"><strong>${escapeHtml(faq.id)}: ${renderHtmlMath(faq.question)}</strong> <small>[${escapeHtml(faq.category)}]</small><br/><strong>Short Answer:</strong> ${renderHtmlMath(faq.shortAnswer)}<br/><p>${renderHtmlMath(faq.detailedExplanation)}</p></div>`);
  }

  parts.push(`  <h2>Consolidated Appendices (A–J)</h2>`);
  for (const app of H13_APPENDICES) {
    parts.push(`  <h3>Appendix ${escapeHtml(app.letter)}: ${renderHtmlMath(app.title)} [${escapeHtml(app.category)}]</h3>`);
    parts.push(`  <p><em>${renderHtmlMath(app.summary)}</em></p>`);
    for (const eq of app.equations) {
      parts.push(`<div class="eq-box"><div>${eq.unicodeHtml} &nbsp; <code>${escapeHtml(eq.label)}</code></div><div class="eq-cap">${renderHtmlMath(eq.caption)}</div>${
        eq.plainEnglishMeaning ? `<div class="eq-plain"><strong>In Plain English:</strong> ${renderHtmlMath(eq.plainEnglishMeaning)}</div>` : ''
      }</div>`);
    }
    for (const p of app.bodyParagraphs) parts.push(`  <p>${renderHtmlMath(p)}</p>`);

    if (app.letter === 'G') {
      parts.push(`  <h4>Table G.1 · Unified 5D + 4D Action Sectors &amp; Field Equations</h4>`);
      parts.push(`  <table><thead><tr><th>Action Sector</th><th>Lagrangian Term</th><th>Euler–Lagrange Equation</th><th>Symmetry &amp; Bounds</th></tr></thead><tbody>${H13_ACTION_FIELD_TABLE.map((r) => `<tr><td><strong>${renderHtmlMath(r.sector)}</strong><br/><small>${escapeHtml(r.category)}</small></td><td><code>${renderHtmlMath(r.lagrangianTerm)}</code></td><td><code>${renderHtmlMath(r.eulerLagrangeEquation)}</code></td><td>${renderHtmlMath(r.symmetryOrConstraint)}</td></tr>`).join('')}</tbody></table>`);
    }
    if (app.letter === 'H') {
      parts.push(`  <h4>Table H.1 · Multi-Experiment Extra-Dimension &amp; Kaluza–Klein Bounds</h4>`);
      parts.push(`  <table><thead><tr><th>Experiment / Domain</th><th>Scale &amp; Bound</th><th>H13 Match</th><th>Status</th></tr></thead><tbody>${H13_KK_CONSTRAINTS_TABLE.map((r) => `<tr><td><strong>${renderHtmlMath(r.experimentOrDomain)}</strong></td><td>${renderHtmlMath(r.scaleProbed)}<br/>${renderHtmlMath(r.observationalBound)}</td><td>${renderHtmlMath(r.h13ParameterMatch)}</td><td>${renderHtmlMath(r.status)}</td></tr>`).join('')}</tbody></table>`);
    }
    if (app.letter === 'I') {
      parts.push(`  <h4>Table I.1 · Five-Step Non-AdS GJW Traversable Portal Proof</h4>`);
      parts.push(`  <table><thead><tr><th>Proof Step</th><th>AdS Assumption Replaced</th><th>Boundary-Free Mechanism &amp; Identity</th></tr></thead><tbody>${H13_GJW_PROOF_STEPS.map((st) => `<tr><td><strong>${escapeHtml(st.stepNumber)} · ${renderHtmlMath(st.stageTitle)}</strong></td><td>${renderHtmlMath(st.adsOriginalAssumption)}</td><td>${renderHtmlMath(st.h13NonAdsProofMechanism)}<br/><code>${renderHtmlMath(st.keyInequalityOrIdentity)}</code></td></tr>`).join('')}</tbody></table>`);
    }
    if (app.letter === 'J') {
      parts.push(`  <h4>Table J.1 · Reproducible RK4 White-Hole Bounce Numerical Benchmarks</h4>`);
      parts.push(`  <table><thead><tr><th>Benchmark</th><th>Mass</th><th>Bounce Radius / Accel</th><th>Int / Ext Delay &amp; Observable</th></tr></thead><tbody>${H13_WH_PIPELINE_SPEC.map((b) => `<tr><td><strong>${renderHtmlMath(b.benchmarkId)}</strong></td><td>${renderHtmlMath(b.massGrams)}</td><td>${renderHtmlMath(b.bounceRadiusM)}<br/>${renderHtmlMath(b.bounceAccelMs2)}</td><td>Int: ${renderHtmlMath(b.interiorProperSec)} | Ext: ${renderHtmlMath(b.exteriorDelayBranch)}<br/>${renderHtmlMath(b.observableOrRk4Check)}</td></tr>`).join('')}</tbody></table>`);
    }
  }

  parts.push(`  <h2>References</h2><ol>${H13_REFERENCES.map((r) => `<li>${escapeHtml(r.citation)}</li>`).join('\n')}</ol>`);
  parts.push(`</main></body></html>`);
  return parts.join('\n');
}

export function buildH13StandaloneLatex(): string {
  const lines: string[] = [];
  lines.push('\\documentclass[11pt,a4paper]{article}');
  lines.push('\\usepackage[T1]{fontenc}');
  lines.push('\\usepackage[utf8]{inputenc}');
  lines.push('\\usepackage[a4paper,margin=22mm]{geometry}');
  lines.push('\\usepackage{amsmath,amssymb,amsthm,booktabs,longtable,array,enumitem,hyperref}');
  lines.push(`\\title{${toLatex(H13_META.title)} \\\\ {\\large ${toLatex(H13_META.subtitle)}}}`);
  lines.push(`\\author{${H13_META.authorRoster.map((a) => `${toLatex(a.name)}`).join(' \\and ')}}`);
  lines.push(`\\date{${toLatex(H13_META.date)}}`);
  lines.push('\\begin{document}');
  lines.push('\\maketitle');

  lines.push('\\begin{abstract}');
  for (const p of H13_ABSTRACT_PARAGRAPHS) lines.push(toLatex(p) + '\n');
  lines.push('\\end{abstract}');

  lines.push('\\section*{Reader Navigation Guide}');
  lines.push('\\begin{itemize}');
  for (const rg of H13_READING_GUIDE) {
    lines.push(`  \\item \\textbf{${toLatex(rg.audience)}:} ${toLatex(rg.howToRead)}`);
  }
  lines.push('\\end{itemize}');

  lines.push('\\section*{List of Archival Plates \\& Vector Figures (26 Exhibits)}');
  lines.push('\\begin{itemize}');
  for (const pl of H13_ARCHIVAL_PLATES) {
    lines.push(`  \\item \\textbf{${toLatex(pl.figureNumber)}} (Ch.~${pl.anchorChapter}): ${toLatex(pl.title)} --- ${toLatex(pl.description)}`);
  }
  for (const fg of H13_FIGURES) {
    lines.push(`  \\item \\textbf{${toLatex(fg.figureNumber)}} (Ch.~${fg.anchorChapter}): ${toLatex(fg.title)} --- ${toLatex(fg.caption)}`);
  }
  lines.push('\\end{itemize}');

  lines.push('\\section*{Foundations, Master Equations \\& Epistemic Scope}');
  lines.push(toLatex(H13_FOUNDATIONAL_NOTE) + '\n');
  lines.push('\\noindent\\textbf{Convention:} ' + toLatex(H13_METRIC_SIGNATURE_BOX) + '\n');
  for (const eq of H13_MASTER_EQUATIONS) {
    lines.push(h13EquationToLatex(eq));
  }

  lines.push(`\\subsection*{${toLatex(H13_SCOPE_AND_NON_CLAIMS.title)}}`);
  lines.push('\\begin{itemize}');
  for (const pt of H13_SCOPE_AND_NON_CLAIMS.points) lines.push(`  \\item ${toLatex(pt)}`);
  lines.push('\\end{itemize}');

  lines.push('\\subsection*{Table 0.1: Twelve Principles of Reality as Running Code}');
  lines.push('\\begin{small}\\begin{longtable}{@{}p{0.18\\textwidth}p{0.34\\textwidth}p{0.30\\textwidth}p{0.14\\textwidth}@{}}');
  lines.push('\\toprule \\textbf{Principle} & \\textbf{Plain-Language Thesis} & \\textbf{IGRT Formula} & \\textbf{Category} \\\\ \\midrule');
  for (const pr of H13_TWELVE_PRINCIPLES_MATRIX) {
    lines.push(`${pr.id}. ${toLatex(pr.shortTitle)} & "${toLatex(pr.userStatement)}" & ${toLatex(pr.governingFormula)} & ${toLatex(pr.epistemicCategory)} \\\\`);
  }
  lines.push('\\bottomrule\\end{longtable}\\end{small}');

  lines.push('\\subsection*{Table 0.2: Plain-English Symbol \\& Units Decoder}');
  lines.push('\\begin{small}\\begin{longtable}{@{}p{0.16\\textwidth}p{0.14\\textwidth}p{0.38\\textwidth}p{0.26\\textwidth}@{}}');
  lines.push('\\toprule \\textbf{Symbol} & \\textbf{Name} & \\textbf{Plain-English Meaning} & \\textbf{Units} \\\\ \\midrule');
  for (const sy of H13_SYMBOL_DECODER) {
    lines.push(`${toLatex(sy.symbol)} & ${toLatex(sy.spokenName)} & ${toLatex(sy.plainEnglishMeaning)} & ${toLatex(sy.units)} \\\\`);
  }
  lines.push('\\bottomrule\\end{longtable}\\end{small}');

  lines.push('\\subsection*{Table 0.3: SI Units \\& Dimensional Consistency Audit}');
  lines.push('\\begin{small}\\begin{longtable}{@{}p{0.15\\textwidth}p{0.32\\textwidth}p{0.26\\textwidth}p{0.23\\textwidth}@{}}');
  lines.push('\\toprule \\textbf{Equation} & \\textbf{Formula} & \\textbf{LHS = RHS} & \\textbf{Check} \\\\ \\midrule');
  for (const da of H13_DIMENSIONAL_AUDIT) {
    lines.push(`${toLatex(da.equationLabel)} & ${toLatex(da.formulaSummary)} & ${toLatex(da.lhsDimensions)} = ${toLatex(da.rhsDimensions)} & ${toLatex(da.physicalCheck)} \\\\`);
  }
  lines.push('\\bottomrule\\end{longtable}\\end{small}');

  for (const ch of H13_CHAPTERS) {
    lines.push(`\\section{${toLatex(ch.title)}}`);
    lines.push(`\\noindent{\\small\\textbf{Provenance:} ${toLatex(ch.provenance)}}\\par\\smallskip`);
    lines.push(`\\begin{quote}\\emph{"${toLatex(ch.principleQuote)}"}\\end{quote}`);
    lines.push(`\\noindent\\textbf{In Plain English:} ${toLatex(ch.plainEnglishBridge)}\n`);
    lines.push(`\\noindent\\textbf{Everyday Analogy:} ${toLatex(ch.everydayAnalogy)}\n`);
    lines.push(`\\noindent\\emph{${toLatex(ch.leadSummary)}}\n`);

    for (const sub of ch.subsections) {
      lines.push(`\\subsection{${toLatex(sub.title)}}`);
      for (const p of sub.paragraphs) lines.push(toLatex(p) + '\n');
      if (sub.equation) {
        lines.push(h13EquationToLatex(sub.equation));
      }
      if (sub.theoremBox) {
        lines.push(`\\begin{quote}\\textbf{${toLatex(sub.theoremBox.number)} (${toLatex(sub.theoremBox.title)})} [${toLatex(sub.theoremBox.category)}]:`);
        lines.push('\\begin{itemize}');
        for (const h of sub.theoremBox.hypotheses) lines.push(`  \\item ${toLatex(h)}`);
        lines.push('\\end{itemize}');
        lines.push(`${toLatex(sub.theoremBox.statement)}\\end{quote}`);
        lines.push('\\begin{proof}');
        lines.push('\\begin{enumerate}');
        for (const st of sub.theoremBox.proofSteps) lines.push(`  \\item ${toLatex(st)}`);
        lines.push('\\end{enumerate}');
        lines.push(`\\noindent\\emph{Provenance:} ${toLatex(sub.theoremBox.provenance)}`);
        lines.push('\\end{proof}');
        if (sub.theoremBox.plainEnglishSummary) {
          lines.push(`\\noindent{\\small\\emph{Plain English:} ${toLatex(sub.theoremBox.plainEnglishSummary)}}\\par\\smallskip`);
        }
      }
      if (sub.workedExample) {
        lines.push(`\\noindent\\textbf{${toLatex(sub.workedExample.title)}:} ${toLatex(sub.workedExample.setup)}`);
        lines.push('\\begin{enumerate}');
        for (const st of sub.workedExample.steps) lines.push(`  \\item ${toLatex(st)}`);
        lines.push('\\end{enumerate}');
        lines.push(h13EquationToLatex(sub.workedExample.resultEquation));
        lines.push(`\\noindent\\emph{Takeaway:} ${toLatex(sub.workedExample.takeaway)}\n`);
      }
    }
    lines.push('\\noindent\\textbf{Key Takeaways:}\\begin{itemize}');
    for (const kt of ch.keyTakeaways) lines.push(`  \\item ${toLatex(kt)}`);
    lines.push('\\end{itemize}');

    if (ch.number === 8) {
      lines.push('\\subsubsection*{Table 8.1: Compression Vaults vs. Class P Portal Nodes}');
      lines.push('\\begin{small}\\begin{longtable}{@{}p{0.24\\textwidth}p{0.26\\textwidth}p{0.22\\textwidth}p{0.24\\textwidth}@{}}');
      lines.push('\\toprule \\textbf{Class} & \\textbf{Geometry} & \\textbf{NEC Status} & \\textbf{Benchmark} \\\\ \\midrule');
      for (const r of H13_BLACK_HOLE_TO_PORTAL_TAXONOMY) {
        lines.push(`${toLatex(r.nodeClass)} & ${toLatex(r.geometryAndAction)} & ${toLatex(r.necAndCausalStatus)} & ${toLatex(r.isPortalOrWhiteHole)} (${toLatex(r.foldingOrBounceMetric)}) \\\\`);
      }
      lines.push('\\bottomrule\\end{longtable}\\end{small}');
    }
    if (ch.number === 9) {
      lines.push('\\subsubsection*{Table 9.1: White-Hole Bounce Timescales Across Mass Regimes}');
      lines.push('\\begin{small}\\begin{longtable}{@{}p{0.26\\textwidth}p{0.18\\textwidth}p{0.24\\textwidth}p{0.28\\textwidth}@{}}');
      lines.push('\\toprule \\textbf{Regime} & \\textbf{Mass} & \\textbf{Int / Ext Delay} & \\textbf{Observable} \\\\ \\midrule');
      for (const w of H13_WHITE_HOLE_BOUNCE_TABLE) {
        lines.push(`${toLatex(w.progenitorRegime)} & ${toLatex(w.massScale)} & ${toLatex(w.interiorBounceTime)} / ${toLatex(w.exteriorBounceDelay)} & ${toLatex(w.astrophysicalObservable)} \\\\`);
      }
      lines.push('\\bottomrule\\end{longtable}\\end{small}');
    }
    if (ch.number === 12) {
      lines.push('\\subsubsection*{Table 12.1: Falsification Protocols P14--P18}');
      lines.push('\\begin{small}\\begin{longtable}{@{}p{0.22\\textwidth}p{0.26\\textwidth}p{0.26\\textwidth}p{0.22\\textwidth}@{}}');
      lines.push('\\toprule \\textbf{Protocol} & \\textbf{Threshold} & \\textbf{Systematics Control} & \\textbf{Falsifier} \\\\ \\midrule');
      for (const pr of H13_PROTOCOLS_P14_TO_P18) {
        lines.push(`${pr.id}: ${toLatex(pr.name)} & ${toLatex(pr.quantitativeThreshold)} & ${toLatex(pr.systematicsControl)} & ${toLatex(pr.falsificationCriterion)} \\\\`);
      }
      lines.push('\\bottomrule\\end{longtable}\\end{small}');

      lines.push('\\subsubsection*{Falsification \\& Confirmation Checklists}');
      lines.push('\\begin{itemize}');
      for (const f of H13_FALSIFICATION_CHECKLIST) lines.push(`  \\item \\textbf{[Falsify]} ${toLatex(f)}`);
      for (const c of H13_CONFIRMATION_CHECKLIST) lines.push(`  \\item \\textbf{[Confirm]} ${toLatex(c)}`);
      lines.push('\\end{itemize}');

      lines.push('\\subsubsection*{Table 12.2: Epistemic Claim--Provenance--Proof Ledger (Claims C1--C16)}');
      lines.push('\\begin{small}\\begin{longtable}{@{}p{0.23\\textwidth}p{0.13\\textwidth}p{0.34\\textwidth}p{0.26\\textwidth}@{}}');
      lines.push('\\toprule \\textbf{ID \\& Claim} & \\textbf{Category} & \\textbf{Proof \\& Primary Provenance} & \\textbf{Check \\& Explicit Limit} \\\\ \\midrule');
      for (const row of H13_EPISTEMIC_LEDGER) {
        lines.push(`\\textbf{${toLatex(row.claimId)}:} ${toLatex(row.claim)} & ${toLatex(row.category)} & ${toLatex(row.mathematicalSupport)} \\newline \\emph{Ref:} ${toLatex(row.primaryProvenance)} & ${toLatex(row.computationalCheck)} \\newline \\emph{Limit:} ${toLatex(row.explicitLimitOrNonClaim)} \\\\`);
      }
      lines.push('\\bottomrule\\end{longtable}\\end{small}');

      lines.push('\\subsubsection*{Table 12.3: Experimental Proof Apparatus, Readiness Levels (TRL) \\& Priority Recommendations}');
      lines.push('\\begin{small}\\begin{longtable}{@{}p{0.22\\textwidth}p{0.24\\textwidth}p{0.30\\textwidth}p{0.20\\textwidth}@{}}');
      lines.push('\\toprule \\textbf{Device \\& Plate} & \\textbf{TRL \\& Target Proof} & \\textbf{Engineering Recommendation} & \\textbf{Statistical Gate} \\\\ \\midrule');
      for (const dev of H13_PROOF_DEVICES_AND_RECOMMENDATIONS) {
        lines.push(`\\textbf{${toLatex(dev.deviceId)}} (${toLatex(dev.linkedPlateOrFigure)}): ${toLatex(dev.deviceName)} & ${toLatex(dev.trl)} --- ${toLatex(dev.provesOrTests)} & ${toLatex(dev.engineeringRecommendation)} & ${toLatex(dev.statisticalAndOpenScienceGate)} \\\\`);
      }
      lines.push('\\bottomrule\\end{longtable}\\end{small}');
    }
  }

  lines.push('\\section{Common Questions \\& Misconceptions Clarified}');
  for (const faq of H13_LAYMAN_FAQ) {
    lines.push(`\\subsection*{${toLatex(faq.id)}: ${toLatex(faq.question)}}`);
    lines.push(`\\noindent\\textbf{Short Answer:} ${toLatex(faq.shortAnswer)}\n`);
    lines.push(toLatex(faq.detailedExplanation) + '\n');
  }

  lines.push('\\appendix');
  for (const app of H13_APPENDICES) {
    lines.push(`\\section{Appendix ${app.letter}: ${toLatex(app.title)}}`);
    lines.push(`\\noindent\\emph{${toLatex(app.summary)}}\n`);
    for (const eq of app.equations) {
      lines.push(h13EquationToLatex(eq));
    }
    for (const p of app.bodyParagraphs) lines.push(toLatex(p) + '\n');

    if (app.letter === 'G') {
      lines.push('\\subsubsection*{Table G.1: Unified 5D + 4D Action Sectors \\& Field Equations}');
      lines.push('\\begin{small}\\begin{longtable}{@{}p{0.20\\textwidth}p{0.26\\textwidth}p{0.28\\textwidth}p{0.22\\textwidth}@{}}');
      lines.push('\\toprule \\textbf{Sector} & \\textbf{Lagrangian Term} & \\textbf{Field Equation} & \\textbf{Constraint} \\\\ \\midrule');
      for (const r of H13_ACTION_FIELD_TABLE) {
        lines.push(`${toLatex(r.sector)} & ${toLatex(r.lagrangianTerm)} & ${toLatex(r.eulerLagrangeEquation)} & ${toLatex(r.symmetryOrConstraint)} \\\\`);
      }
      lines.push('\\bottomrule\\end{longtable}\\end{small}');
    }
    if (app.letter === 'H') {
      lines.push('\\subsubsection*{Table H.1: Multi-Experiment Kaluza--Klein \\& Extra-Dimension Bounds}');
      lines.push('\\begin{small}\\begin{longtable}{@{}p{0.22\\textwidth}p{0.26\\textwidth}p{0.30\\textwidth}p{0.18\\textwidth}@{}}');
      lines.push('\\toprule \\textbf{Experiment} & \\textbf{Scale \\& Bound} & \\textbf{H13 Match} & \\textbf{Status} \\\\ \\midrule');
      for (const r of H13_KK_CONSTRAINTS_TABLE) {
        lines.push(`${toLatex(r.experimentOrDomain)} & ${toLatex(r.scaleProbed)} (${toLatex(r.observationalBound)}) & ${toLatex(r.h13ParameterMatch)} & ${toLatex(r.status)} \\\\`);
      }
      lines.push('\\bottomrule\\end{longtable}\\end{small}');
    }
    if (app.letter === 'I') {
      lines.push('\\subsubsection*{Table I.1: Five-Step Proof of Boundary-Free GJW Traversable Portals}');
      lines.push('\\begin{small}\\begin{longtable}{@{}p{0.22\\textwidth}p{0.24\\textwidth}p{0.50\\textwidth}@{}}');
      lines.push('\\toprule \\textbf{Proof Step} & \\textbf{AdS Convention} & \\textbf{H13 Mechanism \\& Key Identity} \\\\ \\midrule');
      for (const st of H13_GJW_PROOF_STEPS) {
        lines.push(`${toLatex(st.stepNumber)}: ${toLatex(st.stageTitle)} & ${toLatex(st.adsOriginalAssumption)} & ${toLatex(st.h13NonAdsProofMechanism)} (${toLatex(st.keyInequalityOrIdentity)}) \\\\`);
      }
      lines.push('\\bottomrule\\end{longtable}\\end{small}');
    }
    if (app.letter === 'J') {
      lines.push('\\subsubsection*{Table J.1: Reproducible RK4 White-Hole Bounce Numerical Benchmarks}');
      lines.push('\\begin{small}\\begin{longtable}{@{}p{0.22\\textwidth}p{0.18\\textwidth}p{0.26\\textwidth}p{0.30\\textwidth}@{}}');
      lines.push('\\toprule \\textbf{Benchmark} & \\textbf{Mass} & \\textbf{Radius / Accel} & \\textbf{Delay \\& RK4 Check} \\\\ \\midrule');
      for (const b of H13_WH_PIPELINE_SPEC) {
        lines.push(`${toLatex(b.benchmarkId)} & ${toLatex(b.massGrams)} & ${toLatex(b.bounceRadiusM)} / ${toLatex(b.bounceAccelMs2)} & ${toLatex(b.interiorProperSec)} / ${toLatex(b.exteriorDelayBranch)} (${toLatex(b.observableOrRk4Check)}) \\\\`);
      }
      lines.push('\\bottomrule\\end{longtable}\\end{small}');
    }
  }

  lines.push('\\begin{thebibliography}{99}');
  for (const r of H13_REFERENCES) lines.push(`\\bibitem{ref${r.id}} ${toLatex(r.citation)}`);
  lines.push('\\end{thebibliography}');
  lines.push('\\end{document}');
  return lines.join('\n');
}
