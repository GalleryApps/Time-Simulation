/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Math & Unicode Typesetting Utilities for the IGRT Research Monograph
 * - Resolves any remaining underscore/caret subscript/superscript notation (_, ^, {...})
 *   into structured typographic segments (<sub>, <sup>, <i>, Unicode symbols)
 * - Parses controlled equation HTML (<i>, <sub>, <sup>) for Canvas/PDF rendering
 * - Transforms SVG <text> content into <tspan baseline-shift="sub|super">
 */

export type MathSegment =
  | { type: 'text'; text: string }
  | { type: 'sub'; children: MathSegment[] }
  | { type: 'sup'; children: MathSegment[] }
  | { type: 'italic'; children: MathSegment[] };

const URL_OR_NON_MATH_RE = /(https?:\/\/[^\s)]+|arXiv:[^\s)]+|DOI:[^\s)]+|\bhi_class\b|@article\{[\s\S]*?\})/g;

// Subscript/superscript unbraced token pattern
// Matches: "4,X", "x₁", "x₂", alphanumeric + Greek tokens, or single symbol (*, +, −, ±, ⊙, ∞)
const UNBRACED_SUB_RE = /^(4,X|x[₁₂]|[A-Za-z0-9α-ωΑ-Ωμνξψτσρκγδϵεηθλφχϖ∞ℓℏ𝒞☉⊙⊕𝒱𝒜𝒟𝒢ℋ𝒦]+|[*+−±☉⊙⊕∞])/;
const UNBRACED_SUP_RE = /^(\([+\-−]?\d+\)|[A-Za-z0-9α-ωΑ-Ωμνξψτσρκγδϵεηθλφχϖ∞ℓℏ𝒞☉⊙⊕𝒱𝒜𝒟𝒢ℋ𝒦]+|[*+−±∞])/;

function findMatchingBrace(str: string, openIdx: number): number {
  let depth = 0;
  for (let i = openIdx; i < str.length; i++) {
    if (str[i] === '{') depth++;
    else if (str[i] === '}') {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

const SUP_DIGIT_MAP: Record<string, string> = {
  '⁰': '0',
  '¹': '1',
  '²': '2',
  '³': '3',
  '⁴': '4',
  '⁵': '5',
  '⁶': '6',
  '⁷': '7',
  '⁸': '8',
  '⁹': '9',
  '⁺': '+',
  '⁻': '−'
};

const SUB_DIGIT_MAP: Record<string, string> = {
  '₀': '0',
  '₁': '1',
  '₂': '2',
  '₃': '3',
  '₄': '4',
  '₅': '5',
  '₆': '6',
  '₇': '7',
  '₈': '8',
  '₉': '9',
  '₊': '+',
  '₋': '−'
};

const UNICODE_SUP_RUN_RE = /^[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]+/;
const UNICODE_SUB_RUN_RE = /^[₀₁₂₃₄₅₆₇₈₉₊₋]+/;
const ANY_UNICODE_SCRIPT_RE = /[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻₀₁₂₃₄₅₆₇₈₉₊₋]/;

function mapSupDigits(raw: string): string {
  return [...raw].map((ch) => SUP_DIGIT_MAP[ch] ?? ch).join('');
}

function mapSubDigits(raw: string): string {
  return [...raw].map((ch) => SUB_DIGIT_MAP[ch] ?? ch).join('');
}

function mapAllScriptDigitsToAscii(raw: string): string {
  return [...raw].map((ch) => SUP_DIGIT_MAP[ch] ?? SUB_DIGIT_MAP[ch] ?? ch).join('');
}

function splitPlainTextUnicodeScripts(txt: string): MathSegment[] {
  if (!ANY_UNICODE_SCRIPT_RE.test(txt)) {
    return txt ? [{ type: 'text', text: txt }] : [];
  }
  const normalized = txt.replace(
    /([⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]+)\/([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g,
    (_m, num: string, den: string) => `${mapSupDigits(num)}/${mapSupDigits(den)}`
  );
  // First split rational superscript fractions (e.g. 2⁻¹/⁴) directly
  const fracSplit = normalized.split(/([⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]+\/[⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g);
  const out: MathSegment[] = [];
  for (let fi = 0; fi < fracSplit.length; fi++) {
    const chunk = fracSplit[fi];
    if (!chunk) continue;
    if (fi % 2 === 1) {
      const [num, den] = chunk.split('/');
      out.push({ type: 'sup', children: [{ type: 'text', text: `${mapSupDigits(num)}/${mapSupDigits(den)}` }] });
      continue;
    }
    let idx = 0;
    let buf = '';
    const flushBuf = () => {
      if (buf) {
        out.push({ type: 'text', text: buf });
        buf = '';
      }
    };
    while (idx < chunk.length) {
      const slice = chunk.slice(idx);
      const supM = slice.match(UNICODE_SUP_RUN_RE);
      if (supM) {
        flushBuf();
        out.push({ type: 'sup', children: [{ type: 'text', text: mapSupDigits(supM[0]) }] });
        idx += supM[0].length;
        continue;
      }
      const subM = slice.match(UNICODE_SUB_RUN_RE);
      if (subM) {
        flushBuf();
        out.push({ type: 'sub', children: [{ type: 'text', text: mapSubDigits(subM[0]) }] });
        idx += subM[0].length;
        continue;
      }
      buf += chunk[idx];
      idx++;
    }
    flushBuf();
  }
  return out;
}

function normalizeMathOperators(s: string, insideScript = false): string {
  const base = s
    .replace(/ \|\| /g, ' ‖ ')
    .replace(/''/g, '″')
    .replace(/([fPVS])'/g, '$1′');
  if (insideScript) {
    return mapAllScriptDigitsToAscii(base);
  }
  return base.replace(/([⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]+)\/([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (_m, num: string, den: string) => {
    return `^{${mapSupDigits(num)}/${mapSupDigits(den)}}`;
  });
}

function parseMathChunk(input: string, insideScript = false): MathSegment[] {
  const s = normalizeMathOperators(input, insideScript);
  const out: MathSegment[] = [];
  let buf = '';
  let i = 0;

  const flush = () => {
    if (buf) {
      out.push({ type: 'text', text: buf });
      buf = '';
    }
  };

  while (i < s.length) {
    const ch = s[i];
    if ((ch === '_' || ch === '^') && i + 1 < s.length) {
      const next = s[i + 1];
      if (next === '{') {
        const closeIdx = findMatchingBrace(s, i + 1);
        if (closeIdx !== -1) {
          flush();
          const inner = s.slice(i + 2, closeIdx);
          out.push({
            type: ch === '_' ? 'sub' : 'sup',
            children: parseMathChunk(inner, true)
          });
          i = closeIdx + 1;
          continue;
        }
      } else {
        const rest = s.slice(i + 1);
        const re = ch === '_' ? UNBRACED_SUB_RE : UNBRACED_SUP_RE;
        const m = rest.match(re);
        if (m) {
          flush();
          out.push({
            type: ch === '_' ? 'sub' : 'sup',
            children: [{ type: 'text', text: mapAllScriptDigitsToAscii(m[1]) }]
          });
          i += 1 + m[1].length;
          continue;
        }
      }
    }

    if (!insideScript) {
      const slice = s.slice(i);
      const supM = slice.match(UNICODE_SUP_RUN_RE);
      if (supM) {
        flush();
        out.push({ type: 'sup', children: [{ type: 'text', text: mapSupDigits(supM[0]) }] });
        i += supM[0].length;
        continue;
      }
      const subM = slice.match(UNICODE_SUB_RUN_RE);
      if (subM) {
        flush();
        out.push({ type: 'sub', children: [{ type: 'text', text: mapSubDigits(subM[0]) }] });
        i += subM[0].length;
        continue;
      }
    }

    buf += ch;
    i++;
  }

  flush();
  return out;
}

export function parseMathSegments(input: string): MathSegment[] {
  if (!input) return [];
  if (
    !/[_^{}\\|']/.test(input) &&
    !ANY_UNICODE_SCRIPT_RE.test(input) &&
    !input.includes(' || ')
  ) {
    return [{ type: 'text', text: input }];
  }

  const parts = input.split(URL_OR_NON_MATH_RE);
  const result: MathSegment[] = [];
  for (let idx = 0; idx < parts.length; idx++) {
    const part = parts[idx];
    if (!part) continue;
    if (idx % 2 === 1) {
      // Matched URL / arXiv / DOI / BibTeX block — keep verbatim
      result.push({ type: 'text', text: part });
    } else {
      result.push(...parseMathChunk(part));
    }
  }
  return result;
}

function decodeHtmlEntities(s: string): string {
  return s
    .replace(/&nbsp;/g, ' ')
    .replace(/&approx;/g, '≈')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

/**
 * Parses controlled static equation HTML (`<i>`, `<sub>`, `<sup>`) into nested MathSegments
 * so Canvas/PDF equation boxes render exact subscripts, superscripts, and italics.
 */
export function parseHtmlMathSegments(html: string): MathSegment[] {
  const tokens = html.split(/(<\/?(?:i|sub|sup)>|<br\s*\/?>)/gi).filter(Boolean);
  const root: MathSegment[] = [];
  const stack: { tag: 'i' | 'sub' | 'sup'; children: MathSegment[] }[] = [];

  const target = () => (stack.length > 0 ? stack[stack.length - 1].children : root);
  const isInsideScript = () => stack.some((s) => s.tag === 'sub' || s.tag === 'sup');

  for (const tok of tokens) {
    const lower = tok.toLowerCase();
    if (/^<br\s*\/?>$/i.test(tok)) {
      target().push({ type: 'text', text: '\n' });
    } else if (lower === '<i>' || lower === '<sub>' || lower === '<sup>') {
      const tag = lower.slice(1, -1) as 'i' | 'sub' | 'sup';
      stack.push({ tag, children: [] });
    } else if (lower === '</i>' || lower === '</sub>' || lower === '</sup>') {
      const top = stack.pop();
      if (top) {
        const node: MathSegment =
          top.tag === 'i'
            ? { type: 'italic', children: top.children }
            : top.tag === 'sub'
              ? { type: 'sub', children: top.children }
              : { type: 'sup', children: top.children };
        target().push(node);
      }
    } else {
      const decoded = decodeHtmlEntities(tok);
      if (decoded) {
        if (isInsideScript()) {
          target().push({ type: 'text', text: mapAllScriptDigitsToAscii(decoded) });
        } else {
          target().push(...splitPlainTextUnicodeScripts(decoded));
        }
      }
    }
  }

  while (stack.length > 0) {
    const top = stack.pop()!;
    const node: MathSegment =
      top.tag === 'i'
        ? { type: 'italic', children: top.children }
        : top.tag === 'sub'
          ? { type: 'sub', children: top.children }
          : { type: 'sup', children: top.children };
    target().push(node);
  }

  return root;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function segmentsToHtml(segs: MathSegment[]): string {
  return segs
    .map((seg) => {
      if (seg.type === 'text') return escapeHtml(seg.text).replace(/\n/g, '<br/>');
      if (seg.type === 'sub') return `<sub>${segmentsToHtml(seg.children)}</sub>`;
      if (seg.type === 'sup') return `<sup>${segmentsToHtml(seg.children)}</sup>`;
      return `<i>${segmentsToHtml(seg.children)}</i>`;
    })
    .join('');
}

export function formatMathToHtml(input: string): string {
  return segmentsToHtml(parseMathSegments(input));
}

function segmentsToSvgTspans(segs: MathSegment[], baseFontSize: number): string {
  return segs
    .map((seg) => {
      if (seg.type === 'text') return escapeHtml(seg.text);
      const smallSize = (baseFontSize * 0.78).toFixed(1);
      if (seg.type === 'sub') {
        return `<tspan baseline-shift="sub" font-size="${smallSize}">${segmentsToSvgTspans(seg.children, baseFontSize * 0.78)}</tspan>`;
      }
      if (seg.type === 'sup') {
        return `<tspan baseline-shift="super" font-size="${smallSize}">${segmentsToSvgTspans(seg.children, baseFontSize * 0.78)}</tspan>`;
      }
      return `<tspan font-style="italic">${segmentsToSvgTspans(seg.children, baseFontSize)}</tspan>`;
    })
    .join('');
}

/**
 * Resolves `_` and `^` notation inside SVG `<text ...>...</text>` tags into `<tspan>` sub/superscripts
 * so both inline browser SVGs and PDF rasterized diagrams show clean mathematical typography.
 */
export function formatSvgMathMarkup(svgMarkup: string): string {
  return svgMarkup.replace(
    /<text([^>]*)>([\s\S]*?)<\/text>/g,
    (_full, attrs: string, inner: string) => {
      const sizeMatch = attrs.match(/font-size="([0-9.]+)"/);
      const baseSize = sizeMatch ? Number(sizeMatch[1]) : 12;
      const unescaped = decodeHtmlEntities(inner);
      const segs = parseMathSegments(unescaped);
      return `<text${attrs}>${segmentsToSvgTspans(segs, baseSize)}</text>`;
    }
  );
}

/**
 * Replaces astral-plane Unicode script symbols (> U+FFFF) that exceed 16-bit UCS-2 TTF cmaps
 * with crisp BMP equivalents so embedded DejaVuSerif/DejaVuSans PDF fonts never render missing boxes.
 */
export function pdfBmpSafeUnicode(input: string): string {
  return input
    .replace(/𝒜/g, 'A')
    .replace(/𝒞/g, 'C')
    .replace(/𝒟/g, 'D')
    .replace(/𝒢/g, 'G')
    .replace(/𝒦/g, 'K')
    .replace(/𝒩/g, 'N')
    .replace(/𝒪/g, 'O')
    .replace(/𝒱/g, 'V')
    .replace(/𝐱/g, 'x');
}
