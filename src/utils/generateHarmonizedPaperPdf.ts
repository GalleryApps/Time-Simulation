/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Monograph PDF Exporter (US Letter / 8.5 in x 11.0 in)
 * - Body prose: 14px CSS equivalent (10.5pt) at exact 1.5 line spacing
 * - Headlines: Playfair Display Regular (never bold) at 38px scale (28.5pt)
 * - Equations: Full recursive balanced-brace LaTeX AST -> 300 DPI Canvas typesetter
 * - Clean archival headers/footers and reference formatting (no ORCIDs in References)
 */

import { jsPDF } from 'jspdf';
import {
  PAPER_META,
  PAPER_POSTULATES,
  PAPER_CHAPTERS,
  PAPER_APPENDICES,
  PAPER_REFERENCES
} from '../types/harmonizedPaperData';
import {
  HARMONIZED_TESTABLE_PREDICTIONS,
  HARMONIZED_RAMIFICATIONS
} from '../types/harmonizedModelData';
import { MAJOR_6_AMENDMENTS } from '../types/panel30Refinements';

// =========================================================================
// 1. UNICODE & INLINE MATH NORMALIZER FOR CLEAN PROSE
// =========================================================================
function cleanInlineBraces(text: string): string {
  // Replace _{...} -> _... and ^{...} -> ^... recursively where safe for plain prose
  return text
    .replace(/_\{([^{}]+)\}/g, '_$1')
    .replace(/\^\{([^{}]+)\}/g, '^$1')
    .replace(/\\;/g, ' ')
    .replace(/\\,/g, ' ');
}

function pdfSafe(input: string): string {
  const debraced = cleanInlineBraces(input);
  return debraced
    .replace(/ñ/g, 'n')
    .replace(/Ñ/g, 'N')
    .replace(/ä/g, 'a_ddot')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ć/g, 'c')
    .replace(/č/g, 'c')
    .replace(/[–—]/g, '-')
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/·/g, ' * ')
    .replace(/•/g, '-')
    .replace(/×/g, 'x')
    .replace(/÷/g, '/')
    .replace(/±/g, '+/-')
    .replace(/≤/g, '<=')
    .replace(/≥/g, '>=')
    .replace(/≪/g, '<<')
    .replace(/≫/g, '>>')
    .replace(/≡/g, '=')
    .replace(/≈/g, '~=')
    .replace(/≠/g, '!=')
    .replace(/→/g, '->')
    .replace(/↔/g, '<->')
    .replace(/⟺/g, '<=>')
    .replace(/⇒/g, '=>')
    .replace(/∈/g, ' in ')
    .replace(/∀/g, ' for all ')
    .replace(/∃/g, ' exists ')
    .replace(/⊂/g, ' subset ')
    .replace(/⊗/g, ' x ')
    .replace(/∥/g, '||')
    .replace(/≺/g, '<')
    .replace(/∇/g, 'nabla')
    .replace(/∂/g, 'd')
    .replace(/□/g, 'Box')
    .replace(/√/g, 'sqrt')
    .replace(/∞/g, 'infty')
    .replace(/∑/g, 'Sum')
    .replace(/∮/g, 'ContourInt')
    .replace(/∫/g, 'Int')
    .replace(/⟨/g, '<')
    .replace(/⟩/g, '>')
    .replace(/ℏ/g, 'hbar')
    .replace(/ℓ/g, 'l')
    .replace(/½/g, '1/2')
    .replace(/⁰/g, '^0')
    .replace(/¹/g, '^1')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/⁴/g, '^4')
    .replace(/⁵/g, '^5')
    .replace(/⁶/g, '^6')
    .replace(/⁷/g, '^7')
    .replace(/⁸/g, '^8')
    .replace(/⁹/g, '^9')
    .replace(/⁻/g, '^-')
    .replace(/⁺/g, '^+')
    .replace(/₀/g, '_0')
    .replace(/₁/g, '_1')
    .replace(/₂/g, '_2')
    .replace(/₃/g, '_3')
    .replace(/μ/g, 'mu')
    .replace(/ν/g, 'nu')
    .replace(/τ/g, 'tau')
    .replace(/ψ/g, 'psi')
    .replace(/Ψ/g, 'Psi')
    .replace(/θ/g, 'theta')
    .replace(/λ/g, 'lambda')
    .replace(/Λ/g, 'Lambda')
    .replace(/σ/g, 'sigma')
    .replace(/Σ/g, 'Sigma')
    .replace(/ω/g, 'omega')
    .replace(/Ω/g, 'Omega')
    .replace(/κ/g, 'kappa')
    .replace(/β/g, 'beta')
    .replace(/γ/g, 'gamma')
    .replace(/α/g, 'alpha')
    .replace(/δ/g, 'delta')
    .replace(/Δ/g, 'Delta')
    .replace(/ε/g, 'eps')
    .replace(/ρ/g, 'rho')
    .replace(/ξ/g, 'xi')
    .replace(/η/g, 'eta')
    .replace(/φ/g, 'phi')
    .replace(/Φ/g, 'Phi')
    .replace(/π/g, 'pi')
    .replace(/Ĥ/g, 'H_hat')
    .replace(/∇̂/g, 'nabla_hat')
    .replace(/h̄/g, 'h_bar')
    .replace(/g̃/g, 'g_tilde')
    .replace(/[^\x20-\x7E\n\r\t]/g, '');
}

// =========================================================================
// 2. RECURSIVE BALANCED-BRACE LATEX PARSER -> HIGH-DPI CANVAS TYPESETTER
// =========================================================================

type MathNode =
  | { type: 'seq'; items: MathNode[] }
  | { type: 'text'; text: string; upright?: boolean; bold?: boolean }
  | { type: 'frac'; num: MathNode; den: MathNode }
  | { type: 'sqrt'; inner: MathNode }
  | { type: 'script'; base: MathNode; sub?: MathNode; sup?: MathNode }
  | { type: 'accent'; kind: 'hat' | 'dot' | 'ddot' | 'bar' | 'tilde'; base: MathNode }
  | { type: 'xrightarrow'; label: MathNode };

const LATEX_SYMBOLS: Record<string, string> = {
  alpha: 'α',
  beta: 'β',
  gamma: 'γ',
  delta: 'δ',
  epsilon: 'ε',
  varepsilon: 'ε',
  zeta: 'ζ',
  eta: 'η',
  theta: 'θ',
  kappa: 'κ',
  lambda: 'λ',
  mu: 'μ',
  nu: 'ν',
  xi: 'ξ',
  pi: 'π',
  rho: 'ρ',
  sigma: 'σ',
  tau: 'τ',
  phi: 'φ',
  varphi: 'φ',
  chi: 'χ',
  psi: 'ψ',
  omega: 'ω',
  Gamma: 'Γ',
  Delta: 'Δ',
  Theta: 'Θ',
  Lambda: 'Λ',
  Xi: 'Ξ',
  Pi: 'Π',
  Sigma: 'Σ',
  Phi: 'Φ',
  Psi: 'Ψ',
  Omega: 'Ω',
  hbar: 'ℏ',
  ell: 'ℓ',
  nabla: '∇',
  partial: '∂',
  Box: '□',
  infty: '∞',
  int: '∫',
  sum: '∑',
  prod: '∏',
  sqrt: '√',
  equiv: '≡',
  approx: '≈',
  le: '≤',
  leq: '≤',
  ge: '≥',
  geq: '≥',
  neq: '≠',
  times: '×',
  cdot: '·',
  pm: '±',
  mp: '∓',
  to: '→',
  rightarrow: '→',
  implies: '⟹',
  Longrightarrow: '⟹',
  Longleftrightarrow: '⟺',
  iff: '⟺',
  in: '∈',
  forall: '∀',
  exists: '∃',
  langle: '⟨',
  rangle: '⟩',
  '|': '‖',
  '{': '{',
  '}': '}',
  ',': ' ',
  ';': '  ',
  '!': '',
  quad: '   ',
  qquad: '     ',
  det: 'det',
  lim: 'lim',
  sup: 'sup',
  inf: 'inf',
  ln: 'ln',
  exp: 'exp',
  max: 'max',
  min: 'min',
  sin: 'sin',
  cos: 'cos',
  Re: 'Re'
};

const CALLIGRAPHIC: Record<string, string> = {
  A: '𝒜',
  C: '𝒞',
  D: '𝒟',
  F: 'ℱ',
  H: 'ℋ',
  L: 'ℒ',
  M: 'ℳ',
  O: '𝒪',
  S: '𝒮',
  V: '𝒱',
  Z: '𝒵'
};

function parseLatexToAst(src: string): MathNode {
  let i = 0;

  const skipSpaces = () => {
    while (i < src.length && (src[i] === ' ' || src[i] === '\t' || src[i] === '\n')) i++;
  };

  const readGroup = (): MathNode => {
    skipSpaces();
    if (i >= src.length) return { type: 'text', text: '' };
    if (src[i] === '{') {
      i++; // consume '{'
      const inner = parseSequence(true);
      if (i < src.length && src[i] === '}') i++;
      return inner;
    }
    return parseAtom();
  };

  const readRawGroupText = (): string => {
    skipSpaces();
    if (src[i] === '{') {
      i++;
      let depth = 1;
      let out = '';
      while (i < src.length && depth > 0) {
        if (src[i] === '{') depth++;
        else if (src[i] === '}') depth--;
        if (depth > 0) out += src[i];
        i++;
      }
      return out;
    }
    return src[i++] || '';
  };

  const parseAtom = (): MathNode => {
    skipSpaces();
    if (i >= src.length) return { type: 'text', text: '' };
    const ch = src[i];

    if (ch === '{') {
      return readGroup();
    }

    if (ch === '\\') {
      i++;
      if (i >= src.length) return { type: 'text', text: '' };

      // Single non-letter command like \|, \,, \;, \!, \{, \}
      if (!/[a-zA-Z]/.test(src[i])) {
        const sym = src[i++];
        if (sym === '|') return { type: 'text', text: '‖', upright: true };
        if (sym === '{' || sym === '}') return { type: 'text', text: sym, upright: true };
        if (sym === ';') return { type: 'text', text: ' ', upright: true };
        if (sym === ',' || sym === '!') return { type: 'text', text: '', upright: true };
        return { type: 'text', text: LATEX_SYMBOLS[sym] ?? sym, upright: true };
      }

      let cmd = '';
      while (i < src.length && /[a-zA-Z]/.test(src[i])) cmd += src[i++];

      if (cmd === 'left' || cmd === 'right') {
        skipSpaces();
        if (i < src.length) {
          if (src[i] === '.') {
            i++;
            return { type: 'text', text: '' };
          }
          if (src[i] === '\\' && src[i + 1] === '|') {
            i += 2;
            return { type: 'text', text: '‖', upright: true };
          }
          if (src[i] === '\\' && (src[i + 1] === '{' || src[i + 1] === '}')) {
            const b = src[i + 1];
            i += 2;
            return { type: 'text', text: b, upright: true };
          }
          return { type: 'text', text: src[i++], upright: true };
        }
        return { type: 'text', text: '' };
      }

      if (cmd === 'frac' || cmd === 'tfrac') {
        const num = readGroup();
        const den = readGroup();
        return { type: 'frac', num, den };
      }

      if (cmd === 'sqrt') {
        const inner = readGroup();
        return { type: 'sqrt', inner };
      }

      if (cmd === 'text' || cmd === 'mathrm') {
        const raw = readRawGroupText();
        return { type: 'text', text: raw.replace(/\\,/g, ' ').replace(/\\;/g, ' '), upright: true };
      }

      if (cmd === 'mathcal') {
        const raw = readRawGroupText().trim();
        const mapped = raw
          .split('')
          .map((c) => CALLIGRAPHIC[c] ?? c)
          .join('');
        return { type: 'text', text: mapped, upright: true };
      }

      if (cmd === 'mathbb') {
        const raw = readRawGroupText().trim();
        return { type: 'text', text: raw === 'C' ? 'ℂ' : raw, upright: true, bold: true };
      }

      if (cmd === 'hat' || cmd === 'dot' || cmd === 'ddot' || cmd === 'bar' || cmd === 'tilde') {
        const base = readGroup();
        return { type: 'accent', kind: cmd, base };
      }

      if (cmd === 'xrightarrow') {
        const label = readGroup();
        return { type: 'xrightarrow', label };
      }

      if (LATEX_SYMBOLS[cmd] !== undefined) {
        const mapped = LATEX_SYMBOLS[cmd];
        const upright =
          ['det', 'lim', 'sup', 'inf', 'ln', 'exp', 'max', 'min', 'sin', 'cos', 'Re'].includes(cmd) ||
          /[=≡≈≤≥≠×·±→⟹⟺∈∀∃⟨⟩‖∫∑∏∇∂□∞]/.test(mapped);
        return { type: 'text', text: mapped, upright };
      }

      return { type: 'text', text: cmd, upright: true };
    }

    // Standard single char or punctuation
    i++;
    const upright = /[0-9=+\-*/(),.[\]|<>]/.test(ch);
    return { type: 'text', text: ch === '-' ? '−' : ch, upright };
  };

  const parseFactor = (): MathNode => {
    const base = parseAtom();
    let sub: MathNode | undefined;
    let sup: MathNode | undefined;

    for (let k = 0; k < 2; k++) {
      skipSpaces();
      if (i < src.length && src[i] === '_' && !sub) {
        i++;
        sub = readGroup();
      } else if (i < src.length && src[i] === '^' && !sup) {
        i++;
        sup = readGroup();
      }
    }

    if (sub || sup) {
      return { type: 'script', base, sub, sup };
    }
    return base;
  };

  const parseSequence = (stopAtBrace: boolean): MathNode => {
    const items: MathNode[] = [];
    while (i < src.length) {
      if (stopAtBrace && src[i] === '}') break;
      if (src[i] === ' ' || src[i] === '\t' || src[i] === '\n') {
        i++;
        // Preserve single inter-token spacing after symbols/operators
        if (items.length > 0) {
          const prev = items[items.length - 1];
          if (prev.type !== 'text' || !prev.text.endsWith(' ')) {
            items.push({ type: 'text', text: ' ', upright: true });
          }
        }
        continue;
      }
      items.push(parseFactor());
    }
    return { type: 'seq', items };
  };

  return parseSequence(false);
}

/**
 * Fallback crisp Unicode single/multi-line converter for environments without Canvas2D.
 */
function astToReadableUnicode(node: MathNode): string {
  switch (node.type) {
    case 'text':
      return node.text;
    case 'seq':
      return node.items.map(astToReadableUnicode).join('').replace(/\s+/g, ' ').trim();
    case 'frac': {
      const n = astToReadableUnicode(node.num);
      const d = astToReadableUnicode(node.den);
      const nWrap = n.includes(' ') || n.includes('+') || n.includes('−') ? `(${n})` : n;
      const dWrap = d.includes(' ') || d.includes('+') || d.includes('−') ? `(${d})` : d;
      return `${nWrap}/${dWrap}`;
    }
    case 'sqrt':
      return `√(${astToReadableUnicode(node.inner)})`;
    case 'script': {
      const b = astToReadableUnicode(node.base);
      const sb = node.sub ? `_${astToReadableUnicode(node.sub)}` : '';
      const sp = node.sup ? `^${astToReadableUnicode(node.sup)}` : '';
      return `${b}${sb}${sp}`;
    }
    case 'accent': {
      const b = astToReadableUnicode(node.base);
      if (node.kind === 'hat') return `${b}\u0302`;
      if (node.kind === 'dot') return `${b}\u0307`;
      if (node.kind === 'ddot') return `${b}\u0308`;
      if (node.kind === 'bar') return `${b}\u0304`;
      return `${b}\u0303`;
    }
    case 'xrightarrow':
      return `—[${astToReadableUnicode(node.label)}]→`;
  }
}

interface MeasureBox {
  w: number;
  ascent: number;
  descent: number;
}

/**
 * Renders any parsed LaTeX equation AST onto an HTML5 2D Canvas (300 DPI PNG)
 * with true stacked fractions, square roots, superscripts/subscripts, and diacritics.
 */
function renderLatexEquationToPng(
  latex: string,
  maxWidthInches: number
): { dataUrl: string; widthIn: number; heightIn: number } | null {
  if (typeof document === 'undefined') return null;

  const ast = parseLatexToAst(latex);
  const DPI = 288; // 3x scale for razor-sharp PDF print equations
  const BASE_FONT_PX = 34; // ~11pt visually when placed in box

  const probeCanvas = document.createElement('canvas');
  const pCtx = probeCanvas.getContext('2d');
  if (!pCtx) return null;

  const setFont = (ctx: CanvasRenderingContext2D, fontSize: number, upright?: boolean, bold?: boolean) => {
    const style = upright ? 'normal' : 'italic';
    const weight = bold ? '600' : '400';
    ctx.font = `${style} ${weight} ${fontSize}px Georgia, "Times New Roman", "Cambria Math", serif`;
  };

  const measureNode = (ctx: CanvasRenderingContext2D, node: MathNode, fontSize: number): MeasureBox => {
    switch (node.type) {
      case 'text': {
        if (!node.text) return { w: 0, ascent: fontSize * 0.72, descent: fontSize * 0.24 };
        setFont(ctx, fontSize, node.upright, node.bold);
        const m = ctx.measureText(node.text);
        return {
          w: m.width,
          ascent: fontSize * 0.78,
          descent: fontSize * 0.28
        };
      }
      case 'seq': {
        let w = 0;
        let ascent = fontSize * 0.72;
        let descent = fontSize * 0.24;
        for (const it of node.items) {
          const b = measureNode(ctx, it, fontSize);
          w += b.w;
          ascent = Math.max(ascent, b.ascent);
          descent = Math.max(descent, b.descent);
        }
        return { w, ascent, descent };
      }
      case 'frac': {
        const subFont = Math.max(18, fontSize * 0.78);
        const nb = measureNode(ctx, node.num, subFont);
        const db = measureNode(ctx, node.den, subFont);
        const w = Math.max(nb.w, db.w) + fontSize * 0.35;
        const barOffset = fontSize * 0.25;
        const numH = nb.ascent + nb.descent;
        const denH = db.ascent + db.descent;
        return {
          w,
          ascent: barOffset + numH + fontSize * 0.22,
          descent: denH + fontSize * 0.14 - barOffset
        };
      }
      case 'sqrt': {
        const ib = measureNode(ctx, node.inner, fontSize);
        const hookW = fontSize * 0.55;
        return {
          w: hookW + ib.w + fontSize * 0.14,
          ascent: ib.ascent + fontSize * 0.24,
          descent: ib.descent + fontSize * 0.08
        };
      }
      case 'script': {
        const bb = measureNode(ctx, node.base, fontSize);
        const scFont = Math.max(16, fontSize * 0.66);
        const subB = node.sub ? measureNode(ctx, node.sub, scFont) : null;
        const supB = node.sup ? measureNode(ctx, node.sup, scFont) : null;
        const scriptW = Math.max(subB ? subB.w : 0, supB ? supB.w : 0);
        const ascent = Math.max(bb.ascent, supB ? fontSize * 0.42 + supB.ascent : bb.ascent);
        const descent = Math.max(bb.descent, subB ? fontSize * 0.25 + subB.descent : bb.descent);
        return { w: bb.w + scriptW + fontSize * 0.06, ascent, descent };
      }
      case 'accent': {
        const bb = measureNode(ctx, node.base, fontSize);
        return {
          w: Math.max(bb.w, fontSize * 0.52),
          ascent: bb.ascent + fontSize * 0.28,
          descent: bb.descent
        };
      }
      case 'xrightarrow': {
        const lblFont = Math.max(16, fontSize * 0.68);
        const lb = measureNode(ctx, node.label, lblFont);
        const arrowW = Math.max(lb.w + fontSize * 0.7, fontSize * 1.6);
        return {
          w: arrowW + fontSize * 0.25,
          ascent: fontSize * 0.45 + lb.ascent + lb.descent,
          descent: fontSize * 0.24
        };
      }
    }
  };

  const drawNode = (
    ctx: CanvasRenderingContext2D,
    node: MathNode,
    x: number,
    baselineY: number,
    fontSize: number
  ): number => {
    switch (node.type) {
      case 'text': {
        if (!node.text) return 0;
        setFont(ctx, fontSize, node.upright, node.bold);
        ctx.fillStyle = '#0C1836';
        ctx.fillText(node.text, x, baselineY);
        return ctx.measureText(node.text).width;
      }
      case 'seq': {
        let curX = x;
        for (const it of node.items) {
          curX += drawNode(ctx, it, curX, baselineY, fontSize);
        }
        return curX - x;
      }
      case 'frac': {
        const subFont = Math.max(18, fontSize * 0.78);
        const nb = measureNode(ctx, node.num, subFont);
        const db = measureNode(ctx, node.den, subFont);
        const w = Math.max(nb.w, db.w) + fontSize * 0.35;
        const barY = baselineY - fontSize * 0.27;

        const numX = x + (w - nb.w) / 2;
        const numBaseline = barY - fontSize * 0.16 - nb.descent;
        drawNode(ctx, node.num, numX, numBaseline, subFont);

        ctx.strokeStyle = '#0C1836';
        ctx.lineWidth = Math.max(1.8, fontSize * 0.055);
        ctx.beginPath();
        ctx.moveTo(x + 2, barY);
        ctx.lineTo(x + w - 2, barY);
        ctx.stroke();

        const denX = x + (w - db.w) / 2;
        const denBaseline = barY + fontSize * 0.16 + db.ascent;
        drawNode(ctx, node.den, denX, denBaseline, subFont);
        return w;
      }
      case 'sqrt': {
        const ib = measureNode(ctx, node.inner, fontSize);
        const hookW = fontSize * 0.55;
        const topY = baselineY - ib.ascent - fontSize * 0.12;
        const botY = baselineY + ib.descent + fontSize * 0.04;

        ctx.strokeStyle = '#0C1836';
        ctx.lineWidth = Math.max(1.8, fontSize * 0.055);
        ctx.beginPath();
        ctx.moveTo(x + hookW * 0.08, baselineY - ib.ascent * 0.25);
        ctx.lineTo(x + hookW * 0.38, botY);
        ctx.lineTo(x + hookW * 0.85, topY);
        ctx.lineTo(x + hookW + ib.w + fontSize * 0.08, topY);
        ctx.stroke();

        drawNode(ctx, node.inner, x + hookW, baselineY, fontSize);
        return hookW + ib.w + fontSize * 0.14;
      }
      case 'script': {
        const bw = drawNode(ctx, node.base, x, baselineY, fontSize);
        const scFont = Math.max(16, fontSize * 0.66);
        let maxW = 0;
        if (node.sub) {
          const sw = drawNode(ctx, node.sub, x + bw + 1, baselineY + fontSize * 0.25, scFont);
          maxW = Math.max(maxW, sw);
        }
        if (node.sup) {
          const pw = drawNode(ctx, node.sup, x + bw + 1, baselineY - fontSize * 0.42, scFont);
          maxW = Math.max(maxW, pw);
        }
        return bw + maxW + fontSize * 0.06;
      }
      case 'accent': {
        const bb = measureNode(ctx, node.base, fontSize);
        drawNode(ctx, node.base, x, baselineY, fontSize);
        const cx = x + bb.w / 2;
        const topY = baselineY - bb.ascent * 0.98;
        ctx.strokeStyle = '#0C1836';
        ctx.fillStyle = '#0C1836';
        ctx.lineWidth = Math.max(1.6, fontSize * 0.05);

        if (node.kind === 'hat') {
          ctx.beginPath();
          ctx.moveTo(cx - fontSize * 0.2, topY + fontSize * 0.05);
          ctx.lineTo(cx, topY - fontSize * 0.14);
          ctx.lineTo(cx + fontSize * 0.2, topY + fontSize * 0.05);
          ctx.stroke();
        } else if (node.kind === 'dot') {
          ctx.beginPath();
          ctx.arc(cx, topY - fontSize * 0.04, fontSize * 0.055, 0, Math.PI * 2);
          ctx.fill();
        } else if (node.kind === 'ddot') {
          ctx.beginPath();
          ctx.arc(cx - fontSize * 0.11, topY - fontSize * 0.04, fontSize * 0.05, 0, Math.PI * 2);
          ctx.arc(cx + fontSize * 0.11, topY - fontSize * 0.04, fontSize * 0.05, 0, Math.PI * 2);
          ctx.fill();
        } else if (node.kind === 'bar') {
          ctx.beginPath();
          ctx.moveTo(x + 2, topY - fontSize * 0.03);
          ctx.lineTo(x + bb.w - 2, topY - fontSize * 0.03);
          ctx.stroke();
        } else if (node.kind === 'tilde') {
          setFont(ctx, fontSize * 0.85, true);
          ctx.fillText('~', cx - fontSize * 0.22, topY + fontSize * 0.08);
        }
        return bb.w;
      }
      case 'xrightarrow': {
        const lblFont = Math.max(16, fontSize * 0.68);
        const lb = measureNode(ctx, node.label, lblFont);
        const arrowW = Math.max(lb.w + fontSize * 0.7, fontSize * 1.6);
        const midY = baselineY - fontSize * 0.26;
        const startX = x + fontSize * 0.12;
        const endX = startX + arrowW;

        drawNode(ctx, node.label, startX + (arrowW - lb.w) / 2, midY - fontSize * 0.14 - lb.descent, lblFont);

        ctx.strokeStyle = '#0C1836';
        ctx.lineWidth = Math.max(1.8, fontSize * 0.055);
        ctx.beginPath();
        ctx.moveTo(startX, midY);
        ctx.lineTo(endX, midY);
        ctx.lineTo(endX - fontSize * 0.2, midY - fontSize * 0.16);
        ctx.moveTo(endX, midY);
        ctx.lineTo(endX - fontSize * 0.2, midY + fontSize * 0.16);
        ctx.stroke();

        return arrowW + fontSize * 0.25;
      }
    }
  };

  // Measure at native size, scale down cleanly if wider than box width
  const natBox = measureNode(pCtx, ast, BASE_FONT_PX);
  const maxWidthPx = maxWidthInches * DPI;
  const scale = natBox.w > maxWidthPx ? Math.max(0.54, maxWidthPx / natBox.w) : 1.0;
  const fontSize = BASE_FONT_PX * scale;
  const box = measureNode(pCtx, ast, fontSize);

  const padX = 16;
  const padY = 14;
  const canvasW = Math.max(120, Math.ceil(box.w + padX * 2));
  const canvasH = Math.max(52, Math.ceil(box.ascent + box.descent + padY * 2));

  const canvas = document.createElement('canvas');
  canvas.width = canvasW;
  canvas.height = canvasH;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  ctx.clearRect(0, 0, canvasW, canvasH);
  drawNode(ctx, ast, padX, padY + box.ascent, fontSize);

  return {
    dataUrl: canvas.toDataURL('image/png'),
    widthIn: canvasW / DPI,
    heightIn: canvasH / DPI
  };
}

// =========================================================================
// 3. PLAYFAIR DISPLAY REGULAR (NEVER BOLD) AT 38PX HEADLINE CANVAS RENDERER
// =========================================================================
function renderPlayfairRegularHeadlinePng(
  text: string,
  fontPx: number,
  maxWidthInches: number,
  color = '#081026'
): { dataUrl: string; widthIn: number; heightIn: number } | null {
  if (typeof document === 'undefined') return null;

  // CSS 96px = 1in -> supersample 3x for razor-sharp PDF headline edges
  const SUPERSAMPLE = 3;
  const CSS_DPI = 96;
  const pxScale = fontPx * SUPERSAMPLE;
  const lineH = Math.round(pxScale * 1.24);
  const maxWidthPx = maxWidthInches * CSS_DPI * SUPERSAMPLE;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  // Strictly weight 400 (Regular), never bold
  const fontSpec = `400 ${pxScale}px "Playfair Display", Georgia, "Times New Roman", serif`;
  ctx.font = fontSpec;

  // Word wrap
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = '';
  for (const w of words) {
    const test = current ? `${current} ${w}` : w;
    if (ctx.measureText(test).width > maxWidthPx && current) {
      lines.push(current);
      current = w;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);

  const canvasW = Math.ceil(maxWidthPx);
  const canvasH = Math.max(lineH + 12, lines.length * lineH + 14);
  canvas.width = canvasW;
  canvas.height = canvasH;

  const drawCtx = canvas.getContext('2d');
  if (!drawCtx) return null;
  drawCtx.font = fontSpec;
  drawCtx.fillStyle = color;
  drawCtx.textBaseline = 'top';

  lines.forEach((line, idx) => {
    drawCtx.fillText(line, 0, idx * lineH + 4);
  });

  return {
    dataUrl: canvas.toDataURL('image/png'),
    widthIn: canvasW / (CSS_DPI * SUPERSAMPLE),
    heightIn: canvasH / (CSS_DPI * SUPERSAMPLE)
  };
}

// =========================================================================
// 4. MAIN ASYNC PDF BUILDER (8.5 in x 11.0 in / LETTER SIZE)
// =========================================================================
export async function generateHarmonizedPaperPdf(): Promise<void> {
  // Ensure web fonts (Playfair Display 400) are loaded before rasterizing headlines
  if (typeof document !== 'undefined' && 'fonts' in document) {
    try {
      await Promise.all([
        document.fonts.load('400 38px "Playfair Display"'),
        document.fonts.ready
      ]);
    } catch {
      // Proceed gracefully with fallback font
    }
  }

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'in',
    format: 'letter',
    compress: true
  });

  const PAGE_W = 8.5;
  const PAGE_H = 11.0;
  const MARGIN_X = 0.8;
  const MARGIN_TOP = 0.85;
  const MARGIN_BOTTOM = 0.85;
  const CONTENT_W = PAGE_W - 2 * MARGIN_X;
  const MAX_Y = PAGE_H - MARGIN_BOTTOM;

  // Body: 14px CSS equivalent (10.5pt) at exact 1.5 line spacing
  const BODY_PT = 10.5;
  const BODY_LINE_IN = (BODY_PT * 1.5) / 72; // 0.21875 in (exact 1.5 line spacing)

  let y = MARGIN_TOP;

  doc.setProperties({
    title: pdfSafe(PAPER_META.title),
    subject: 'Information-Geometric Resonant Time (IGRT) Research Monograph',
    author: 'Marlon D. Bulaquena, Jean-Charles Tassan, Wilson John Sterking Lauret',
    keywords: pdfSafe(PAPER_META.keywords.join(', ')),
    creator: 'IGRT Research Group'
  });

  const addPage = () => {
    doc.addPage('letter', 'portrait');
    y = MARGIN_TOP;
  };

  const ensureSpace = (neededInches: number) => {
    if (y + neededInches > MAX_Y) {
      addPage();
    }
  };

  const writeWrappedText = (
    text: string,
    opts: {
      font?: 'times' | 'helvetica' | 'courier';
      style?: 'normal' | 'italic'; // NEVER bold headlines
      size?: number;
      lineHeight?: number;
      color?: [number, number, number];
      indent?: number;
      afterSpace?: number;
    } = {}
  ) => {
    const font = opts.font ?? 'times';
    const style = opts.style ?? 'normal';
    const size = opts.size ?? BODY_PT;
    const lineHeight = opts.lineHeight ?? (size * 1.5) / 72;
    const color = opts.color ?? [24, 34, 56];
    const indent = opts.indent ?? 0;
    const afterSpace = opts.afterSpace ?? 0.09;

    doc.setFont(font, style);
    doc.setFontSize(size);
    doc.setTextColor(color[0], color[1], color[2]);

    const safe = pdfSafe(text);
    const lines = doc.splitTextToSize(safe, CONTENT_W - indent) as string[];

    for (let i = 0; i < lines.length; i++) {
      ensureSpace(lineHeight + 0.03);
      doc.text(lines[i], MARGIN_X + indent, y);
      y += lineHeight;
    }
    y += afterSpace;
  };

  const drawPlayfairHeadline = (text: string, fontPx = 38, afterSpace = 0.14) => {
    const rendered = renderPlayfairRegularHeadlinePng(text, fontPx, CONTENT_W, '#081026');
    if (rendered) {
      ensureSpace(rendered.heightIn + 0.08);
      doc.addImage(rendered.dataUrl, 'PNG', MARGIN_X, y - 0.06, rendered.widthIn, rendered.heightIn);
      y += rendered.heightIn + afterSpace;
    } else {
      const pt = (fontPx * 72) / 96;
      writeWrappedText(text, {
        font: 'times',
        style: 'normal', // NEVER bold
        size: pt,
        lineHeight: (pt * 1.25) / 72,
        color: [8, 16, 38],
        afterSpace
      });
    }
  };

  const drawRule = (color: [number, number, number] = [215, 205, 190], thickness = 0.008) => {
    ensureSpace(0.12);
    doc.setDrawColor(color[0], color[1], color[2]);
    doc.setLineWidth(thickness);
    doc.line(MARGIN_X, y, PAGE_W - MARGIN_X, y);
    y += 0.14;
  };

  const drawEquationBox = (latex: string, label?: string, caption?: string) => {
    const labelReserve = label ? 0.55 : 0.16;
    const eqImg = renderLatexEquationToPng(latex, CONTENT_W - labelReserve - 0.2);

    let capLines: string[] = [];
    if (caption) {
      doc.setFont('times', 'italic');
      doc.setFontSize(9.5);
      capLines = doc.splitTextToSize(pdfSafe(caption), CONTENT_W - 0.35) as string[];
    }
    const capH = capLines.length > 0 ? capLines.length * ((9.5 * 1.45) / 72) + 0.12 : 0;

    if (eqImg) {
      const eqH = eqImg.heightIn;
      const boxH = eqH + 0.18 + capH;
      ensureSpace(boxH + 0.14);

      doc.setFillColor(249, 246, 240);
      doc.setDrawColor(214, 202, 190);
      doc.setLineWidth(0.01);
      doc.rect(MARGIN_X, y, CONTENT_W, boxH, 'FD');

      const eqX = MARGIN_X + Math.max(0.12, (CONTENT_W - labelReserve - eqImg.widthIn) / 2);
      doc.addImage(eqImg.dataUrl, 'PNG', eqX, y + 0.09, eqImg.widthIn, eqImg.heightIn);

      if (label) {
        doc.setFont('courier', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(180, 83, 9);
        doc.text(pdfSafe(label), PAGE_W - MARGIN_X - 0.14, y + 0.09 + eqImg.heightIn / 2 + 0.04, {
          align: 'right'
        });
      }

      if (capLines.length > 0) {
        const divY = y + eqH + 0.12;
        doc.setDrawColor(230, 222, 210);
        doc.line(MARGIN_X + 0.12, divY, PAGE_W - MARGIN_X - 0.12, divY);
        let cy = divY + 0.17;
        doc.setFont('times', 'italic');
        doc.setFontSize(9.5);
        doc.setTextColor(71, 85, 105);
        for (const cl of capLines) {
          doc.text(cl, MARGIN_X + 0.18, cy);
          cy += (9.5 * 1.45) / 72;
        }
      }

      y += boxH + 0.14;
    } else {
      // Fallback readable Unicode string (non-HTML environment)
      const readable = astToReadableUnicode(parseLatexToAst(latex));
      doc.setFont('times', 'italic');
      doc.setFontSize(10.5);
      const eqLines = doc.splitTextToSize(pdfSafe(readable), CONTENT_W - 0.9) as string[];
      const eqH = eqLines.length * 0.21;
      const boxH = eqH + 0.2 + capH;
      ensureSpace(boxH + 0.14);

      doc.setFillColor(249, 246, 240);
      doc.setDrawColor(214, 202, 190);
      doc.setLineWidth(0.01);
      doc.rect(MARGIN_X, y, CONTENT_W, boxH, 'FD');

      let cy = y + 0.22;
      for (const l of eqLines) {
        doc.text(l, MARGIN_X + 0.18, cy);
        cy += 0.21;
      }
      if (label) {
        doc.setFont('courier', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(180, 83, 9);
        doc.text(pdfSafe(label), PAGE_W - MARGIN_X - 0.14, y + 0.22, { align: 'right' });
      }
      y += boxH + 0.14;
    }
  };

  // =========================================================
  // PAGE 1: JOURNAL MASTHEAD, 38PX PLAYFAIR TITLE, TEAM & ABSTRACT
  // =========================================================
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(180, 83, 9);
  doc.text(pdfSafe(PAPER_META.journalHeader).toUpperCase(), MARGIN_X, y);
  y += 0.19;

  doc.setFont('courier', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text(
    pdfSafe(`${PAPER_META.edition}  |  ${PAPER_META.eprint}  |  DOI: ${PAPER_META.doi}`),
    MARGIN_X,
    y
  );
  y += 0.12;
  drawRule([12, 24, 54], 0.015);

  // Full Paper Title in Playfair Display Regular (never bold) at 38px
  drawPlayfairHeadline(PAPER_META.title, 38, 0.16);

  // Authors / Research Team Section
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text('RESEARCH TEAM', MARGIN_X, y);
  y += 0.14;

  const colW = (CONTENT_W - 0.2) / 3;
  const authorBoxH = 0.92;
  ensureSpace(authorBoxH + 0.15);

  PAPER_META.authors.forEach((author, idx) => {
    const ax = MARGIN_X + idx * (colW + 0.1);
    doc.setFillColor(253, 251, 247);
    doc.setDrawColor(234, 226, 210);
    doc.setLineWidth(0.01);
    doc.rect(ax, y, colW, authorBoxH, 'FD');

    doc.setFont('times', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(8, 16, 38);
    const nameLines = doc.splitTextToSize(pdfSafe(author.name), colW - 0.16) as string[];
    doc.text(nameLines, ax + 0.08, y + 0.19);

    const orcidY = y + 0.19 + nameLines.length * 0.15 + 0.02;
    doc.setFont('courier', 'normal');
    doc.setFontSize(7.2);
    doc.setTextColor(21, 128, 61);
    doc.text(`ORCID: ${author.orcid}`, ax + 0.08, orcidY);

    doc.setFont('times', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    const affLines = doc.splitTextToSize(pdfSafe(author.affiliation), colW - 0.16) as string[];
    doc.text(affLines, ax + 0.08, orcidY + 0.14);
  });
  y += authorBoxH + 0.2;

  drawRule([214, 202, 190], 0.01);

  writeWrappedText('ABSTRACT', {
    font: 'helvetica',
    style: 'normal',
    size: 9.5,
    color: [180, 83, 9],
    afterSpace: 0.08
  });

  writeWrappedText(
    'The canonical unification of General Relativity and Quantum Mechanics remains obstructed by the Wheeler-DeWitt Problem of Time (H_total Psi = 0). In this monograph, we formulate the complete Information-Geometric Resonant Time (IGRT) framework as a diffeomorphism-invariant principal fiber bundle P(M, S_Fisher) over a four-dimensional pseudo-Riemannian Lorentzian base manifold (M, g_mu nu) with signature (-,+,+,+). While macroscopic spacetime retains all four relativistic dimensions, proper time d tau is identified identically with quantum Fisher-Rao state distinguishability calibrated by canonical Tomita-Takesaki modular Hamiltonian dispersion sigma(K_xi) and discrete causal updates.',
    { size: BODY_PT, lineHeight: BODY_LINE_IN, afterSpace: 0.1 }
  );

  drawEquationBox(
    'd\\tau = \\sqrt{-g_{\\mu\\nu}\\dot{x}^\\mu\\dot{x}^\\nu}\\,d\\lambda \\equiv \\frac{\\hbar}{\\sqrt{\\langle K_\\xi^2\\rangle_\\Omega - \\langle K_\\xi\\rangle_\\Omega^2}}\\sqrt{g_{ij}^{\\text{QFI}}\\dot{\\theta}^i\\dot{\\theta}^j}\\,d\\lambda \\equiv \\tau_0 \\sum_{k=1}^N \\|\\text{RAG}_k - \\text{RES}_k\\|_{\\mathcal{F}}',
    '(0.1)',
    'Core Equivalence Identity of Information-Geometric Resonant Time'
  );

  writeWrappedText(
    'Coupling metric geometry to the UV-finite Araki relative entropy scalar density psi^2(x) evaluated on hyperfinite Type III_1 local von Neumann algebras inside a shift-symmetric DHOST Galileon action eliminates Ostrogradsky ghosts (det M_ab = 0), guarantees contracted Bianchi conservation (nabla^mu (T_mu nu + I_mu nu) = 0), and satisfies Solar System parameterized post-Newtonian bounds (|gamma_PPN - 1| <= 2.8 x 10^-7). All cosmological and black-hole singularities are avoided via Martin-Brandenberger bounce dispersion (k_phys <= M_Pl) and Frolov-Hayward curvature saturation (R^2 <= 48/l_Pl^4, terminating evaporation at M_rem = (3 sqrt(3)/4) M_Pl with unitary Page radiation). Finally, the theory predicts thawing dark energy w(z) = -0.982 + 0.018z/(1+z) consistent with DESI 2024 observations and an exact 2:1 Lissajous harmonic lock between pulsar timing residuals (f_PTA = omega/pi) and cryogenic optical lattice clock frequency modulations (f_clock = omega/(2 pi)).',
    { size: BODY_PT, lineHeight: BODY_LINE_IN, afterSpace: 0.1 }
  );

  writeWrappedText(`Keywords: ${PAPER_META.keywords.join('; ')}`, {
    font: 'times',
    style: 'italic',
    size: 9.5,
    lineHeight: (9.5 * 1.5) / 72,
    color: [51, 65, 85],
    afterSpace: 0.06
  });

  writeWrappedText(`PACS: ${PAPER_META.pacs}   |   MSC 2020: ${PAPER_META.msc2020}`, {
    font: 'courier',
    style: 'normal',
    size: 8.5,
    lineHeight: (8.5 * 1.5) / 72,
    color: [100, 116, 139],
    afterSpace: 0.1
  });

  drawRule([12, 24, 54], 0.015);

  // =========================================================
  // CHAPTERS 1 TO 8 (38PX PLAYFAIR REGULAR HEADLINES, 14PX @ 1.5 PROSE)
  // =========================================================
  for (const chapter of PAPER_CHAPTERS) {
    ensureSpace(1.1);
    writeWrappedText(`CHAPTER ${chapter.number}`, {
      font: 'helvetica',
      style: 'normal',
      size: 9,
      color: [180, 83, 9],
      afterSpace: 0.04
    });

    drawPlayfairHeadline(chapter.title, 38, 0.1);

    writeWrappedText(chapter.leadSummary, {
      font: 'times',
      style: 'italic',
      size: BODY_PT,
      lineHeight: BODY_LINE_IN,
      color: [71, 85, 105],
      afterSpace: 0.12
    });

    for (const sub of chapter.subsections) {
      ensureSpace(0.75);
      writeWrappedText(`${sub.number}  ${sub.title}`, {
        font: 'times',
        style: 'normal', // never bold
        size: 14,
        lineHeight: (14 * 1.35) / 72,
        color: [12, 24, 54],
        afterSpace: 0.08
      });

      for (const para of sub.paragraphs) {
        writeWrappedText(para, {
          font: 'times',
          style: 'normal',
          size: BODY_PT,
          lineHeight: BODY_LINE_IN,
          color: [30, 41, 59],
          afterSpace: 0.09
        });
      }

      if (sub.equation) {
        drawEquationBox(sub.equation.latex, sub.equation.label, sub.equation.caption);
      }

      if (sub.bulletPoints && sub.bulletPoints.length > 0) {
        for (const bp of sub.bulletPoints) {
          writeWrappedText(`- ${bp.label}: ${bp.text}`, {
            font: 'times',
            style: 'normal',
            size: BODY_PT,
            lineHeight: BODY_LINE_IN,
            color: [30, 41, 59],
            indent: 0.18,
            afterSpace: 0.06
          });
        }
      }

      if (sub.anchorId === 'sec-1-3') {
        ensureSpace(0.45);
        writeWrappedText('Table 1.1: Axiomatic Postulates of Information-Geometric Resonant Time (Postulates I-VII)', {
          font: 'helvetica',
          style: 'normal',
          size: 9,
          color: [12, 24, 54],
          afterSpace: 0.06
        });
        for (const post of PAPER_POSTULATES) {
          writeWrappedText(`[${post.code} - ${post.name}] ${post.statement}`, {
            font: 'times',
            size: BODY_PT,
            lineHeight: BODY_LINE_IN,
            indent: 0.15,
            afterSpace: 0.06
          });
        }
      }

      if (sub.anchorId === 'sec-7-3') {
        ensureSpace(0.45);
        writeWrappedText('Table 7.1: Six Falsifiable Experimental Protocols (2026-2032 Window)', {
          font: 'helvetica',
          style: 'normal',
          size: 9,
          color: [12, 24, 54],
          afterSpace: 0.06
        });
        for (const pred of HARMONIZED_TESTABLE_PREDICTIONS) {
          writeWrappedText(
            `Protocol #${pred.id}: ${pred.name} (${pred.facility}) - Threshold: ${pred.falsificationCriterion}. Signal: ${pred.predictedSignal}`,
            {
              font: 'times',
              size: BODY_PT,
              lineHeight: BODY_LINE_IN,
              indent: 0.15,
              afterSpace: 0.06
            }
          );
        }
      }

      if (sub.anchorId === 'sec-8-1') {
        ensureSpace(0.45);
        writeWrappedText('Table 8.1: Six Core Closure Theorems Verified Across All Test Regimes', {
          font: 'helvetica',
          style: 'normal',
          size: 9,
          color: [12, 24, 54],
          afterSpace: 0.06
        });
        for (const am of MAJOR_6_AMENDMENTS) {
          writeWrappedText(`Theorem ${am.id} (${am.domain}) - ${am.title}: ${am.mathematicalProof}`, {
            font: 'times',
            size: BODY_PT,
            lineHeight: BODY_LINE_IN,
            indent: 0.15,
            afterSpace: 0.06
          });
        }
      }

      if (sub.anchorId === 'sec-8-2') {
        ensureSpace(0.45);
        writeWrappedText('Table 8.2: Five Primary Scientific & Metrological Consequences', {
          font: 'helvetica',
          style: 'normal',
          size: 9,
          color: [12, 24, 54],
          afterSpace: 0.06
        });
        for (const ram of HARMONIZED_RAMIFICATIONS) {
          writeWrappedText(`${ram.id}. ${ram.title} (${ram.domain}): ${ram.harmonizedResolution}`, {
            font: 'times',
            size: BODY_PT,
            lineHeight: BODY_LINE_IN,
            indent: 0.15,
            afterSpace: 0.06
          });
        }
      }
    }

    drawRule([225, 217, 204], 0.006);
  }

  // =========================================================
  // MATHEMATICAL APPENDICES (A - F)
  // =========================================================
  ensureSpace(1.0);
  drawPlayfairHeadline('Mathematical Physics Appendices (A-F)', 38, 0.14);

  for (const app of PAPER_APPENDICES) {
    ensureSpace(0.8);
    writeWrappedText(`Appendix ${app.letter}. ${app.title} [${app.tag}]`, {
      font: 'times',
      style: 'normal',
      size: 13.5,
      lineHeight: (13.5 * 1.35) / 72,
      color: [8, 16, 38],
      afterSpace: 0.06
    });

    writeWrappedText(`Theorem: ${app.theoremStatement}`, {
      font: 'times',
      style: 'italic',
      size: BODY_PT,
      lineHeight: BODY_LINE_IN,
      color: [15, 23, 42],
      afterSpace: 0.07
    });

    for (const para of app.proofParagraphs) {
      writeWrappedText(`Proof: ${para}`, {
        font: 'times',
        style: 'normal',
        size: BODY_PT,
        lineHeight: BODY_LINE_IN,
        color: [30, 41, 59],
        afterSpace: 0.06
      });
    }

    for (const eq of app.equations) {
      drawEquationBox(eq);
    }
  }

  // =========================================================
  // SCHOLARLY REFERENCES (NO ORCID ON REFERENCES)
  // =========================================================
  drawRule([12, 24, 54], 0.012);
  drawPlayfairHeadline('References', 38, 0.12);

  for (const ref of PAPER_REFERENCES) {
    writeWrappedText(
      `[${ref.id}] ${ref.authors} (${ref.year}). "${ref.title}." ${ref.venue}. ${ref.identifier}`,
      {
        font: 'times',
        style: 'normal',
        size: BODY_PT,
        lineHeight: BODY_LINE_IN,
        color: [30, 41, 59],
        indent: 0.14,
        afterSpace: 0.055
      }
    );
  }

  // =========================================================
  // RUNNING HEADERS & PAGINATION STAMP ON ALL PAGES
  // =========================================================
  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);

    if (p > 1) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(120, 132, 150);
      doc.text(pdfSafe(PAPER_META.shortTitle), MARGIN_X, 0.52);
      doc.text(pdfSafe(PAPER_META.eprint), PAGE_W - MARGIN_X, 0.52, { align: 'right' });
      doc.setDrawColor(220, 212, 200);
      doc.setLineWidth(0.005);
      doc.line(MARGIN_X, 0.58, PAGE_W - MARGIN_X, 0.58);
    }

    doc.setDrawColor(220, 212, 200);
    doc.setLineWidth(0.005);
    doc.line(MARGIN_X, PAGE_H - 0.58, PAGE_W - MARGIN_X, PAGE_H - 0.58);

    doc.setFont('courier', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    doc.text(
      `Bulaquena, Tassan & Lauret (2026) · DOI: ${PAPER_META.doi}`,
      MARGIN_X,
      PAGE_H - 0.42
    );
    doc.text(`Page ${p} of ${totalPages}`, PAGE_W - MARGIN_X, PAGE_H - 0.42, {
      align: 'right'
    });
  }

  doc.save('IGRT_Harmonized_Model_Research_Paper.pdf');
}
