/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Monograph Direct PDF Exporter (A4 Portrait, 25mm margins)
 * - Zero LaTeX: pure embedded Unicode TTF typography (DejaVuSerif, DejaVuSerif-Bold,
 *   NotoSerif-Italic, DejaVuSans fallback, DejaVuSansMono) with real inline sub/superscripts
 * - Edge-to-edge justified paragraphs across all prose, theorems, examples, captions,
 *   appendices, governance disclosures, and references
 * - Headlines: Playfair Display Regular (weight 400, strictly never bold) with resolved math sub/superscripts
 * - Equations: High-DPI HTML5 Canvas typesetting parsed from eq.unicodeHtml
 * - Figures & Plates: Rasterizes all 12 inline SVG diagrams + embeds 5 editorial illustration plates (Plates I–V)
 * - NO ORCIDs inside References
 */

import { jsPDF } from 'jspdf';
import {
  PAPER_META,
  MASTER_EQUATION_ABSTRACT,
  PAPER_APA,
  PAPER_BIBTEX,
  PAPER_POSTULATES,
  PAPER_CHAPTERS,
  AUDITED_TEST_PROTOCOLS,
  AUDITED_CLOSURE_THEOREMS,
  PAPER_APPENDICES,
  PAPER_REFERENCES,
  CORE_TIME_MECHANISM_FALSIFIER
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
  RESPONSE_TO_REVIEWERS,
  KNOWN_OPEN_PROBLEMS,
  TABLE_7_2_FITTED_VS_PREDICTED,
  TABLE_7_3_PROTOCOL_TIMELINE,
  TABLE_8_4_SCALAR_BUDGET,
  APPENDIX_M_STATUS_TABLE,
  H11_PREREG_SHA256
} from '../types/harmonizedPaperApparatus';
import { PAPER_FIGURES, PAPER_ILLUSTRATIONS } from '../components/HarmonizedPaperFigures';
import {
  MathSegment,
  parseMathSegments,
  parseHtmlMathSegments,
  formatSvgMathMarkup,
  pdfBmpSafeUnicode
} from './formatMathUnicode';

interface LoadedPdfFonts {
  serifRegular: string;
  serifBold: string;
  serifItalic: string;
  sansRegular: string;
  monoRegular: string;
}

let cachedFontsPromise: Promise<LoadedPdfFonts | null> | null = null;

function arrayBufferToBase64(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  const chunkSize = 0x8000;
  const parts: string[] = [];
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, Math.min(i + chunkSize, bytes.length));
    parts.push(String.fromCharCode(...chunk));
  }
  return btoa(parts.join(''));
}

async function fetchFontBuffer(url: string): Promise<ArrayBuffer> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch font ${url}: ${res.status}`);
  return res.arrayBuffer();
}

async function registerBrowserFontFace(
  family: string,
  buffer: ArrayBuffer,
  descriptors: FontFaceDescriptors
): Promise<void> {
  if (typeof document === 'undefined' || typeof FontFace === 'undefined' || !('fonts' in document)) {
    return;
  }
  try {
    const face = new FontFace(family, buffer.slice(0), descriptors);
    const loaded = await face.load();
    document.fonts.add(loaded);
  } catch {
    // Ignore if already registered via CSS @font-face
  }
}

async function loadEmbeddedPdfFonts(): Promise<LoadedPdfFonts | null> {
  if (typeof fetch === 'undefined') return null;
  if (!cachedFontsPromise) {
    cachedFontsPromise = (async () => {
      try {
        const [bufRegular, bufBold, bufItalic, bufSans, bufMono] = await Promise.all([
          fetchFontBuffer('/fonts/DejaVuSerif.ttf'),
          fetchFontBuffer('/fonts/DejaVuSerif-Bold.ttf'),
          fetchFontBuffer('/fonts/NotoSerif-Italic.ttf'),
          fetchFontBuffer('/fonts/DejaVuSans.ttf'),
          fetchFontBuffer('/fonts/DejaVuSansMono.ttf')
        ]);

        await Promise.all([
          registerBrowserFontFace('DejaVu Serif', bufRegular, { weight: '400', style: 'normal' }),
          registerBrowserFontFace('DejaVu Serif', bufBold, { weight: '700', style: 'normal' }),
          registerBrowserFontFace('Noto Serif', bufItalic, { weight: '400', style: 'italic' }),
          registerBrowserFontFace('DejaVu Sans', bufSans, { weight: '400', style: 'normal' }),
          registerBrowserFontFace('DejaVu Sans Mono', bufMono, { weight: '400', style: 'normal' })
        ]);

        return {
          serifRegular: arrayBufferToBase64(bufRegular),
          serifBold: arrayBufferToBase64(bufBold),
          serifItalic: arrayBufferToBase64(bufItalic),
          sansRegular: arrayBufferToBase64(bufSans),
          monoRegular: arrayBufferToBase64(bufMono)
        };
      } catch (err) {
        console.warn('Could not load Unicode TTF fonts for PDF export, falling back:', err);
        return null;
      }
    })();
  }
  return cachedFontsPromise;
}

// Characters verified against cmap tables of public/fonts/*.ttf
const SERIF_MISSING = new Set([
  '\u20D7', // combining right arrow above
  '\u210B', // ℋ
  '\u2110', // ℐ
  '\u2112', // ℒ
  '\u2113', // ℓ
  '\u2131', // ℱ
  '\u2192', // →
  '\u21D2', // ⇒
  '\u21D4', // ⇔
  '\u2205', // ∅
  '\u226A', // ≪
  '\u226B', // ≫
  '\u2272', // ≲
  '\u2273', // ≳
  '\u227A', // ≺
  '\u2299', // ⊙ (sharp circle-dot in DejaVuSans, avoids Φ confusion)
  '\u27E8', // ⟨ (sharp angle bracket in DejaVuSans)
  '\u27E9', // ⟩
  '\u27F9', // ⟹
  '\u27FA'  // ⟺
]);

const SERIF_BOLD_EXTRA_MISSING = new Set([
  '\u2102', // ℂ
  '\u210B', // ℋ
  '\u210D', // ℍ
  '\u211D', // ℝ
  '\u2124'  // ℤ
]);

const NOTO_ITALIC_MISSING = new Set([
  '\u20D7', '\u221A', '\u2212', '\u2261', '\u2211', '\u2208', '\u2209', '\u2192', '\u2194',
  '\u2207', '\u2264', '\u2202', '\u27E9', '\u2265', '\u27E8', '\u2248',
  '\u25A1', '\u222B', '\u226A', '\u221E', '\u227A', '\u21D2', '\u2297',
  '\u21A6', '\u222A', '\u221D', '\u2272', '\u2273', '\u2299', '\u226B', '\u2500',
  '\u2295', '\u2282', '\u2260', '\u2243', '\u2225', '\u22C5'
]);

const COMBINING_RE = /[\u0300-\u036F\u20D0-\u20FF]/;

function splitGraphemeClusters(str: string): string[] {
  const clusters: string[] = [];
  for (const ch of str) {
    if (COMBINING_RE.test(ch) && clusters.length > 0) {
      clusters[clusters.length - 1] += ch;
    } else {
      clusters.push(ch);
    }
  }
  return clusters;
}

function clusterUsesAny(cluster: string, set: Set<string>): boolean {
  for (const ch of cluster) {
    if (set.has(ch)) return true;
  }
  return false;
}

type FontFamilyKey = 'serif' | 'sans' | 'mono';
type FontStyleKey = 'normal' | 'italic' | 'bold';

function resolveFontForCluster(
  cluster: string,
  reqFamily: FontFamilyKey,
  reqStyle: FontStyleKey,
  hasUnicodeFonts: boolean,
  isScript = false
): [string, string] {
  if (!hasUnicodeFonts) {
    const f = reqFamily === 'sans' ? 'helvetica' : reqFamily === 'mono' ? 'courier' : 'times';
    const s = reqStyle === 'italic' ? 'italic' : reqStyle === 'bold' ? 'bold' : 'normal';
    return [f, s];
  }

  if (reqFamily === 'sans') {
    return ['DejaVuSans', 'normal'];
  }

  if (reqFamily === 'mono') {
    if (clusterUsesAny(cluster, SERIF_MISSING)) return ['DejaVuSans', 'normal'];
    // DejaVuSansMono handles ASCII + standard symbols cleanly; route rare Unicode math to DejaVuSans
    const cp = cluster.codePointAt(0) ?? 0;
    if (cp > 0x024F && !'μντψΨθλΛσωΩκβγαδΔρηφΦπℏ∇∂√−≡∑∈→≤≥≈∞⟨⟩‖·×±≠→⟹⇒⟺'.includes(cluster[0])) {
      return ['DejaVuSans', 'normal'];
    }
    return ['DejaVuSansMono', 'normal'];
  }

  // Serif family
  // Route calligraphic script-ℓ (U+2113) directly to NotoSerif italic so it never renders like sans 't'
  if (cluster.includes('\u2113')) {
    return ['NotoSerif', 'italic'];
  }
  // Route script minus (−) inside sub/superscripts to DejaVuSans so negative exponents stay solid at 150dpi
  if (isScript && cluster === '\u2212') {
    return ['DejaVuSans', 'normal'];
  }
  // Route single/double primes (′, ″) and any residual Unicode super/subscript block (U+2070..U+209F) to DejaVuSans
  const firstCp = cluster.codePointAt(0) ?? 0;
  if (cluster.includes('\u2032') || cluster.includes('\u2033') || (firstCp >= 0x2070 && firstCp <= 0x209f)) {
    return ['DejaVuSans', 'normal'];
  }
  if (clusterUsesAny(cluster, SERIF_MISSING)) {
    return ['DejaVuSans', 'normal'];
  }
  if (reqStyle === 'italic') {
    if (clusterUsesAny(cluster, NOTO_ITALIC_MISSING)) {
      return ['DejaVuSerif', 'normal'];
    }
    return ['NotoSerif', 'italic'];
  }
  if (reqStyle === 'bold') {
    if (clusterUsesAny(cluster, SERIF_BOLD_EXTRA_MISSING)) {
      return ['DejaVuSerif', 'normal'];
    }
    return ['DejaVuSerif', 'bold'];
  }
  return ['DejaVuSerif', 'normal'];
}

interface FontChunk {
  text: string;
  fontName: string;
  fontStyle: string;
}

function segmentByFont(
  text: string,
  reqFamily: FontFamilyKey,
  reqStyle: FontStyleKey,
  hasUnicodeFonts: boolean,
  isScript = false
): FontChunk[] {
  const clusters = splitGraphemeClusters(text);
  const chunks: FontChunk[] = [];
  for (const cl of clusters) {
    const [fontName, fontStyle] = resolveFontForCluster(cl, reqFamily, reqStyle, hasUnicodeFonts, isScript);
    const prev = chunks[chunks.length - 1];
    if (prev && prev.fontName === fontName && prev.fontStyle === fontStyle) {
      prev.text += cl;
    } else {
      chunks.push({ text: cl, fontName, fontStyle });
    }
  }
  return chunks;
}

interface InlineRun {
  text: string;
  size: number;
  dy: number; // inches (+ down for sub, - up for sup)
  family: FontFamilyKey;
  style: FontStyleKey;
  width: number;
}

interface InlineWord {
  runs: InlineRun[];
  width: number;
}

function flattenSegmentsToTokens(
  segments: MathSegment[],
  baseSize: number,
  baseDy: number,
  baseFamily: FontFamilyKey,
  baseItalic: boolean,
  baseBold: boolean,
  insideScript: boolean
): Array<
  | { kind: 'space' }
  | { kind: 'newline' }
  | { kind: 'run'; text: string; size: number; dy: number; family: FontFamilyKey; style: FontStyleKey }
> {
  const tokens: Array<
    | { kind: 'space' }
    | { kind: 'newline' }
    | { kind: 'run'; text: string; size: number; dy: number; family: FontFamilyKey; style: FontStyleKey }
  > = [];

  for (const seg of segments) {
    if (seg.type === 'text') {
      const style: FontStyleKey = baseItalic ? 'italic' : baseBold ? 'bold' : 'normal';
      if (insideScript) {
        if (seg.text.length > 0) {
          tokens.push({ kind: 'run', text: seg.text, size: baseSize, dy: baseDy, family: baseFamily, style });
        }
      } else {
        const parts = seg.text.split(/([ \t]+|\n)/);
        for (const p of parts) {
          if (!p) continue;
          if (p === '\n') {
            tokens.push({ kind: 'newline' });
          } else if (/^[ \t]+$/.test(p)) {
            tokens.push({ kind: 'space' });
          } else {
            tokens.push({ kind: 'run', text: p, size: baseSize, dy: baseDy, family: baseFamily, style });
          }
        }
      }
    } else if (seg.type === 'sub') {
      const subSize = Math.max(6.4, baseSize * (insideScript ? 0.80 : 0.76));
      const subDy = baseDy + (insideScript ? 0.16 : 0.24) * (baseSize / 72);
      tokens.push(
        ...flattenSegmentsToTokens(seg.children, subSize, subDy, baseFamily, baseItalic, baseBold, true)
      );
    } else if (seg.type === 'sup') {
      const supSize = Math.max(6.4, baseSize * (insideScript ? 0.80 : 0.76));
      const supDy = baseDy - (insideScript ? 0.25 : 0.36) * (baseSize / 72);
      tokens.push(
        ...flattenSegmentsToTokens(seg.children, supSize, supDy, baseFamily, baseItalic, baseBold, true)
      );
    } else {
      tokens.push(
        ...flattenSegmentsToTokens(seg.children, baseSize, baseDy, baseFamily, true, baseBold, insideScript)
      );
    }
  }

  return tokens;
}

interface CanvasStyledRun {
  text: string;
  fontPx: number;
  dyPx: number;
  italic: boolean;
}

interface CanvasRunPlacement {
  run: CanvasStyledRun;
  xOffset: number;
  dyPx: number;
}

interface CanvasWord {
  runs: CanvasStyledRun[];
  placements: CanvasRunPlacement[];
  width: number;
}

function flattenSegmentsForCanvas(
  segments: MathSegment[],
  basePx: number,
  baseDyPx: number,
  baseItalic: boolean,
  insideScript: boolean
): Array<
  | { kind: 'space' }
  | { kind: 'newline' }
  | { kind: 'run'; text: string; fontPx: number; dyPx: number; italic: boolean }
> {
  const out: Array<
    | { kind: 'space' }
    | { kind: 'newline' }
    | { kind: 'run'; text: string; fontPx: number; dyPx: number; italic: boolean }
  > = [];

  for (const seg of segments) {
    if (seg.type === 'text') {
      if (insideScript) {
        if (seg.text) {
          out.push({ kind: 'run', text: seg.text, fontPx: basePx, dyPx: baseDyPx, italic: baseItalic });
        }
      } else {
        const parts = seg.text.split(/([ \t]+|\n)/);
        for (const p of parts) {
          if (!p) continue;
          if (p === '\n') {
            out.push({ kind: 'newline' });
          } else if (/^[ \t]+$/.test(p)) {
            out.push({ kind: 'space' });
          } else {
            out.push({ kind: 'run', text: p, fontPx: basePx, dyPx: baseDyPx, italic: baseItalic });
          }
        }
      }
    } else if (seg.type === 'sub') {
      out.push(
        ...flattenSegmentsForCanvas(
          seg.children,
          Math.max(14, basePx * (insideScript ? 0.78 : 0.73)),
          baseDyPx + basePx * (insideScript ? 0.16 : 0.25),
          baseItalic,
          true
        )
      );
    } else if (seg.type === 'sup') {
      out.push(
        ...flattenSegmentsForCanvas(
          seg.children,
          Math.max(14, basePx * (insideScript ? 0.78 : 0.73)),
          baseDyPx - basePx * (insideScript ? 0.23 : 0.37),
          baseItalic,
          true
        )
      );
    } else {
      out.push(...flattenSegmentsForCanvas(seg.children, basePx, baseDyPx, true, insideScript));
    }
  }
  return out;
}

function renderRichSegmentsCanvasPng(
  segments: MathSegment[],
  fontFamilyCss: string,
  fontPx: number,
  maxWidthInches: number,
  dpi: number,
  align: 'center' | 'left',
  color: string,
  lineHeightMult: number
): { dataUrl: string; widthIn: number; heightIn: number; didSoftWrap: boolean } | null {
  if (typeof document === 'undefined') return null;

  const maxWidthPx = maxWidthInches * dpi;
  const lineH = Math.round(fontPx * lineHeightMult);

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const isPlayfairHeadline = fontFamilyCss.includes('Playfair Display');

  const resolveCanvasClusterFont = (
    cluster: string,
    baseItalic: boolean,
    dyPx: number
  ): { familyCss: string; italic: boolean } => {
    // Route script-ell directly to Noto Serif italic so it stays calligraphic
    if (cluster.includes('\u2113')) {
      return { familyCss: '"Noto Serif", "DejaVu Serif", serif', italic: true };
    }
    // Route primes, script minus, and serif-missing math glyphs to DejaVu Sans
    if (
      cluster.includes('\u2032') ||
      cluster.includes('\u2033') ||
      (dyPx !== 0 && cluster === '\u2212') ||
      clusterUsesAny(cluster, SERIF_MISSING)
    ) {
      return { familyCss: '"DejaVu Sans", "DejaVu Serif", sans-serif', italic: false };
    }
    // In Playfair headlines, route subscripts/superscripts, digits in math/scripts, and non-Latin glyphs
    // to DejaVu Serif so Playfair old-style numerals (0 looking like O) and missing Greek never appear
    if (isPlayfairHeadline) {
      const cp = cluster.codePointAt(0) ?? 0;
      const isNonLatin = cp > 0x024F;
      if (dyPx !== 0 || isNonLatin || /[0-9]/.test(cluster)) {
        if (baseItalic && !clusterUsesAny(cluster, NOTO_ITALIC_MISSING)) {
          return { familyCss: '"Noto Serif", "DejaVu Serif", serif', italic: true };
        }
        return { familyCss: '"DejaVu Serif", "DejaVu Sans", serif', italic: false };
      }
      return { familyCss: fontFamilyCss, italic: baseItalic };
    }
    if (baseItalic) {
      if (clusterUsesAny(cluster, NOTO_ITALIC_MISSING)) {
        return { familyCss: '"DejaVu Serif", "DejaVu Sans", serif', italic: false };
      }
      return { familyCss: '"Noto Serif", "DejaVu Serif", serif', italic: true };
    }
    return { familyCss: '"DejaVu Serif", "DejaVu Sans", Georgia, serif', italic: false };
  };

  const segmentCanvasText = (
    txt: string,
    baseItalic: boolean,
    dyPx: number
  ): Array<{ part: string; familyCss: string; italic: boolean }> => {
    const clusters = splitGraphemeClusters(txt);
    const out: Array<{ part: string; familyCss: string; italic: boolean }> = [];
    for (const cl of clusters) {
      const resolved = resolveCanvasClusterFont(cl, baseItalic, dyPx);
      const prev = out[out.length - 1];
      if (prev && prev.familyCss === resolved.familyCss && prev.italic === resolved.italic) {
        prev.part += cl;
      } else {
        out.push({ part: cl, familyCss: resolved.familyCss, italic: resolved.italic });
      }
    }
    return out;
  };

  const setCanvasChunkFont = (
    c: CanvasRenderingContext2D,
    px: number,
    familyCss: string,
    italic: boolean
  ) => {
    c.font = `${italic ? 'italic ' : ''}400 ${px}px ${familyCss}`;
  };

  const measureCanvasRun = (
    c: CanvasRenderingContext2D,
    txt: string,
    px: number,
    italic: boolean,
    dyPx = 0
  ): number => {
    const parts = segmentCanvasText(txt, italic, dyPx);
    let total = 0;
    for (let pi = 0; pi < parts.length; pi++) {
      const ch = parts[pi];
      if (pi > 0 && ch.part.includes('\u2113')) {
        total += Math.max(1.8, px * 0.045);
      }
      setCanvasChunkFont(c, px, ch.familyCss, ch.italic);
      const metrics = c.measureText(ch.part);
      let partW = metrics.width;
      if (
        pi === parts.length - 1 &&
        typeof metrics.actualBoundingBoxRight === 'number' &&
        metrics.actualBoundingBoxRight > partW
      ) {
        partW = metrics.actualBoundingBoxRight + (ch.italic ? Math.max(1.5, px * 0.04) : 0);
      }
      total += partW;
      if (pi < parts.length - 1 && ch.part.includes('\u2113')) {
        total += Math.max(1.6, px * 0.04);
      }
    }
    return total;
  };

  const computeItalicClearance = (prev: CanvasStyledRun, next: CanvasStyledRun): number => {
    const basePrev = prev.text.replace(/[\u0300-\u036F\u20D0-\u20FF]+$/g, '');
    const lastCh = basePrev.slice(-1) || prev.text.slice(-1);
    const hasCombiningAccent = /[\u0300-\u036F\u20D0-\u20FF]/.test(prev.text);
    const hasTailEll = basePrev.endsWith('\u2113');
    if (next.dyPx < -1) {
      if (prev.italic || hasTailEll || hasCombiningAccent) {
        const strongSlope = /[TVWYfFPk\u2113]/.test(lastCh);
        const capSlope = /[A-ZΑ-Ω]/.test(lastCh);
        const extraAccent = hasCombiningAccent ? prev.fontPx * 0.07 : 0;
        return Math.max(4.5, prev.fontPx * (strongSlope ? 0.22 : capSlope ? 0.15 : 0.11) + extraAccent);
      }
      if (next.text.startsWith('\u2032') || next.text.startsWith('\u2033')) {
        return Math.max(1.8, next.fontPx * 0.04);
      }
      return 0;
    }
    if (next.dyPx > 1) {
      if (hasTailEll) {
        return Math.max(2.0, prev.fontPx * 0.05);
      }
      return 0;
    }
    if (prev.italic && !next.italic) {
      const strongSlope = /[TVWYfFPk\u2113]/.test(lastCh);
      return Math.max(2.8, prev.fontPx * (strongSlope ? 0.14 : 0.10));
    }
    if (!prev.italic && next.italic) {
      return Math.max(1.4, next.fontPx * 0.035);
    }
    if ((prev.text.endsWith('\u2032') || prev.text.endsWith('\u2033')) && next.text.startsWith('(')) {
      return Math.max(1.8, next.fontPx * 0.045);
    }
    if (next.text.startsWith('\u2032') || next.text.startsWith('\u2033')) {
      return Math.max(1.5, next.fontPx * 0.035);
    }
    return 0;
  };

  const flat = flattenSegmentsForCanvas(segments, fontPx, 0, false, false);
  const logicalLines: CanvasWord[][] = [[]];
  let curRuns: CanvasStyledRun[] = [];

  const flushWord = () => {
    if (curRuns.length === 0) return;
    // Group consecutive runs by script kind ('base' | 'sup' | 'sub') so adjacent sup+sub stack cleanly
    type ScriptKind = 'base' | 'sup' | 'sub';
    const kindOf = (dy: number): ScriptKind => (dy < -1 ? 'sup' : dy > 1 ? 'sub' : 'base');
    const groups: Array<{ kind: ScriptKind; runs: CanvasStyledRun[] }> = [];
    for (const r of curRuns) {
      const k = kindOf(r.dyPx);
      const prevG = groups[groups.length - 1];
      if (prevG && prevG.kind === k) {
        prevG.runs.push(r);
      } else {
        groups.push({ kind: k, runs: [r] });
      }
    }

    const placements: CanvasRunPlacement[] = [];
    let cursorX = 0;
    let lastBaseOrRun: CanvasStyledRun | null = null;

    for (let gi = 0; gi < groups.length; gi++) {
      const g = groups[gi];
      const nextG = gi + 1 < groups.length ? groups[gi + 1] : null;
      const isStackedPair =
        nextG !== null &&
        ((g.kind === 'sup' && nextG.kind === 'sub') || (g.kind === 'sub' && nextG.kind === 'sup'));

      if (isStackedPair && nextG) {
        const supGroup = g.kind === 'sup' ? g : nextG;
        const subGroup = g.kind === 'sub' ? g : nextG;
        const gapForSup = lastBaseOrRun ? computeItalicClearance(lastBaseOrRun, supGroup.runs[0]) : 0;
        const gapForSub = lastBaseOrRun ? computeItalicClearance(lastBaseOrRun, subGroup.runs[0]) : 0;
        const stackStartX = cursorX + Math.max(gapForSup, gapForSub);

        let supX = stackStartX;
        for (let si = 0; si < supGroup.runs.length; si++) {
          const sr = supGroup.runs[si];
          if (si > 0) supX += computeItalicClearance(supGroup.runs[si - 1], sr);
          const stackedDy = Math.min(sr.dyPx, -fontPx * 0.43);
          placements.push({ run: sr, xOffset: supX, dyPx: stackedDy });
          supX += measureCanvasRun(ctx, sr.text, sr.fontPx, sr.italic, stackedDy);
        }
        if (supGroup.runs[supGroup.runs.length - 1].italic) {
          supX += Math.max(1.6, fontPx * 0.045);
        }

        let subX = stackStartX;
        for (let si = 0; si < subGroup.runs.length; si++) {
          const sr = subGroup.runs[si];
          if (si > 0) subX += computeItalicClearance(subGroup.runs[si - 1], sr);
          const stackedDy = Math.max(sr.dyPx, fontPx * 0.28);
          placements.push({ run: sr, xOffset: subX, dyPx: stackedDy });
          subX += measureCanvasRun(ctx, sr.text, sr.fontPx, sr.italic, stackedDy);
        }
        if (subGroup.runs[subGroup.runs.length - 1].italic) {
          subX += Math.max(1.6, fontPx * 0.045);
        }

        cursorX = Math.max(supX, subX) + Math.max(1.6, fontPx * 0.04);
        lastBaseOrRun = subGroup.runs[subGroup.runs.length - 1];
        gi++; // consume both stacked groups
      } else {
        for (let ri = 0; ri < g.runs.length; ri++) {
          const r = g.runs[ri];
          if (lastBaseOrRun) {
            cursorX += computeItalicClearance(lastBaseOrRun, r);
          }
          placements.push({ run: r, xOffset: cursorX, dyPx: r.dyPx });
          cursorX += measureCanvasRun(ctx, r.text, r.fontPx, r.italic, r.dyPx);
          lastBaseOrRun = r;
        }
      }
    }

    const last = curRuns[curRuns.length - 1];
    cursorX += last.italic ? Math.max(2.5, last.fontPx * 0.07) : Math.max(1.6, last.fontPx * 0.045);
    logicalLines[logicalLines.length - 1].push({ runs: curRuns, placements, width: cursorX });
    curRuns = [];
  };

  for (const item of flat) {
    if (item.kind === 'newline') {
      flushWord();
      logicalLines.push([]);
    } else if (item.kind === 'space') {
      flushWord();
    } else {
      curRuns.push({ text: item.text, fontPx: item.fontPx, dyPx: item.dyPx, italic: item.italic });
    }
  }
  flushWord();

  setCanvasChunkFont(ctx, fontPx, fontFamilyCss, false);
  const spaceW = ctx.measureText(' ').width;
  const usableW = align === 'center' ? maxWidthPx - 56 : maxWidthPx;

  const lines: Array<{ words: CanvasWord[]; width: number }> = [];
  for (const lWords of logicalLines) {
    if (lWords.length === 0) {
      lines.push({ words: [], width: 0 });
      continue;
    }
    let curLine: CanvasWord[] = [];
    let curLineW = 0;
    for (const w of lWords) {
      const nextW = curLine.length === 0 ? w.width : curLineW + spaceW + w.width;
      if (nextW > usableW && curLine.length > 0) {
        lines.push({ words: curLine, width: curLineW });
        curLine = [w];
        curLineW = w.width;
      } else {
        curLine.push(w);
        curLineW = nextW;
      }
    }
    if (curLine.length > 0) {
      lines.push({ words: curLine, width: curLineW });
    }
  }
  if (lines.length === 0) {
    lines.push({ words: [], width: 0 });
  }

  const didSoftWrap = lines.length > logicalLines.length;
  const canvasW =
    align === 'center'
      ? Math.ceil(Math.min(maxWidthPx, Math.max(160, Math.max(...lines.map((l) => l.width)) + 84)))
      : Math.ceil(maxWidthPx);
  const padTop = Math.round(fontPx * 0.72);
  const canvasH = Math.max(lineH + padTop * 2, lines.length * lineH + padTop * 2);

  canvas.width = canvasW;
  canvas.height = canvasH;

  const drawCtx = canvas.getContext('2d');
  if (!drawCtx) return null;
  drawCtx.fillStyle = color;
  drawCtx.textBaseline = 'middle';
  drawCtx.textAlign = 'left';

  lines.forEach((line, idx) => {
    const baseY = padTop + (idx + 0.5) * lineH;
    let x = align === 'center' ? (canvasW - line.width) / 2 : 0;
    line.words.forEach((word, wi) => {
      if (wi > 0) x += spaceW;
      for (const pl of word.placements) {
        let rx = x + pl.xOffset;
        const r = pl.run;
        const parts = segmentCanvasText(r.text, r.italic, pl.dyPx);
        for (let pi = 0; pi < parts.length; pi++) {
          const ch = parts[pi];
          if (pi > 0 && ch.part.includes('\u2113')) {
            rx += Math.max(1.8, r.fontPx * 0.045);
          }
          setCanvasChunkFont(drawCtx, r.fontPx, ch.familyCss, ch.italic);
          drawCtx.fillText(ch.part, rx, baseY + pl.dyPx);
          rx += drawCtx.measureText(ch.part).width;
          if (pi < parts.length - 1 && ch.part.includes('\u2113')) {
            rx += Math.max(1.6, r.fontPx * 0.04);
          }
        }
      }
      x += word.width;
    });
  });

  return {
    dataUrl: canvas.toDataURL('image/png'),
    widthIn: canvasW / dpi,
    heightIn: canvasH / dpi,
    didSoftWrap
  };
}

function renderUnicodeEquationPng(
  unicodeHtml: string,
  maxWidthInches: number
): { dataUrl: string; widthIn: number; heightIn: number } | null {
  const safeHtml = pdfBmpSafeUnicode(unicodeHtml);
  const segs = parseHtmlMathSegments(safeHtml);
  const fontCandidates = [50, 46, 43, 40, 37];
  for (let i = 0; i < fontCandidates.length; i++) {
    const res = renderRichSegmentsCanvasPng(
      segs,
      '"DejaVu Serif", "DejaVu Sans", Georgia, serif',
      fontCandidates[i],
      maxWidthInches,
      330,
      'center',
      '#0F172A',
      1.76
    );
    if (!res) return null;
    if (!res.didSoftWrap || i === fontCandidates.length - 1) {
      return { dataUrl: res.dataUrl, widthIn: res.widthIn, heightIn: res.heightIn };
    }
  }
  return null;
}

function renderPlayfairRegularHeadlinePng(
  text: string,
  fontPx: number,
  maxWidthInches: number,
  color = '#0F172A'
): { dataUrl: string; widthIn: number; heightIn: number } | null {
  const segs = parseMathSegments(pdfBmpSafeUnicode(text));
  return renderRichSegmentsCanvasPng(
    segs,
    '"Playfair Display", "DejaVu Serif", "DejaVu Sans", Georgia, serif',
    fontPx * 2.5,
    maxWidthInches,
    96 * 2.5,
    'left',
    color,
    1.42
  );
}

async function rasterizeSvgToPng(
  svgMarkup: string,
  targetWidthInches: number,
  embeddedFonts?: LoadedPdfFonts | null
): Promise<{ dataUrl: string; widthIn: number; heightIn: number } | null> {
  if (typeof document === 'undefined') return null;
  return new Promise((resolve) => {
    try {
      let formattedSvg = formatSvgMathMarkup(pdfBmpSafeUnicode(svgMarkup));
      if (embeddedFonts) {
        const fontRules = [
          `@font-face { font-family: 'DejaVu Sans'; font-weight: 100 900; font-style: normal; src: url("data:font/ttf;base64,${embeddedFonts.sansRegular}") format("truetype"); }`,
          `@font-face { font-family: 'DejaVu Serif'; font-weight: 400; font-style: normal; src: url("data:font/ttf;base64,${embeddedFonts.serifRegular}") format("truetype"); }`,
          `@font-face { font-family: 'Noto Serif'; font-weight: 400; font-style: italic; src: url("data:font/ttf;base64,${embeddedFonts.serifItalic}") format("truetype"); }`,
          `@font-face { font-family: 'DejaVu Sans Mono'; font-weight: 400; font-style: normal; src: url("data:font/ttf;base64,${embeddedFonts.monoRegular}") format("truetype"); }`
        ].join(' ');
        const styleBlock = `<defs><style type="text/css">${fontRules}</style></defs>`;
        formattedSvg = formattedSvg.replace(/(<svg[^>]*>)/i, `$1${styleBlock}`);
      }
      const vbMatch = formattedSvg.match(/viewBox="0 0 (\d+) (\d+)"/);
      const vbW = vbMatch ? Number(vbMatch[1]) : 860;
      const vbH = vbMatch ? Number(vbMatch[2]) : 340;
      const aspect = vbH / vbW;

      const svgBlob = new Blob([formattedSvg], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);
      const img = new Image();
      img.onload = () => {
        const pxW = 3400;
        const pxH = Math.round(pxW * aspect);
        const canvas = document.createElement('canvas');
        canvas.width = pxW;
        canvas.height = pxH;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, pxW, pxH);
          ctx.drawImage(img, 0, 0, pxW, pxH);
          URL.revokeObjectURL(url);
          resolve({
            dataUrl: canvas.toDataURL('image/png'),
            widthIn: targetWidthInches,
            heightIn: targetWidthInches * aspect
          });
        } else {
          URL.revokeObjectURL(url);
          resolve(null);
        }
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        resolve(null);
      };
      img.src = url;
    } catch {
      resolve(null);
    }
  });
}

async function loadPlateImageForPdf(
  url: string,
  targetWidthInches: number
): Promise<{ dataUrl: string; format: 'JPEG' | 'PNG'; widthIn: number; heightIn: number } | null> {
  if (typeof fetch === 'undefined') return null;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const buf = await res.arrayBuffer();
    const bytes = new Uint8Array(buf);
    const isPng = bytes.length >= 4 && bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47;
    const format: 'JPEG' | 'PNG' = isPng ? 'PNG' : 'JPEG';
    const mime = isPng ? 'image/png' : 'image/jpeg';
    const b64 = arrayBufferToBase64(buf);
    const dataUrl = `data:${mime};base64,${b64}`;

    let aspect = 9 / 16;
    if (typeof Image !== 'undefined') {
      aspect = await new Promise<number>((resolveAspect) => {
        const img = new Image();
        img.onload = () => {
          resolveAspect(img.naturalWidth > 0 ? img.naturalHeight / img.naturalWidth : 9 / 16);
        };
        img.onerror = () => resolveAspect(9 / 16);
        img.src = dataUrl;
      });
    }

    return {
      dataUrl,
      format,
      widthIn: targetWidthInches,
      heightIn: targetWidthInches * aspect
    };
  } catch {
    return null;
  }
}

export interface RichWriteOpts {
  font?: FontFamilyKey;
  style?: FontStyleKey;
  size?: number;
  lineHeight?: number;
  color?: [number, number, number];
  indent?: number;
  afterSpace?: number;
  justify?: boolean;
  prefixBold?: string;
  hangingIndent?: number;
  preformatted?: boolean;
  alreadyHtmlSegments?: MathSegment[];
}

export async function generateHarmonizedPaperPdf(): Promise<void> {
  const [fontsLoaded] = await Promise.all([
    loadEmbeddedPdfFonts(),
    typeof document !== 'undefined' && 'fonts' in document
      ? Promise.all([
          document.fonts.load('400 54px "Playfair Display"'),
          document.fonts.load('400 38px "Playfair Display"'),
          document.fonts.load('400 44px "DejaVu Serif"'),
          document.fonts.load('italic 400 44px "Noto Serif"'),
          document.fonts.load('400 44px "DejaVu Sans"'),
          document.fonts.ready
        ]).catch(() => undefined)
      : Promise.resolve(undefined)
  ]);

  // A4 portrait (210mm x 297mm) = 8.268 in x 11.693 in; margins 25mm = 0.984 in
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'in',
    format: 'a4',
    compress: true
  });

  const hasUnicodeFonts = Boolean(fontsLoaded);
  if (fontsLoaded) {
    doc.addFileToVFS('DejaVuSerif.ttf', fontsLoaded.serifRegular);
    doc.addFont('DejaVuSerif.ttf', 'DejaVuSerif', 'normal');
    doc.addFileToVFS('DejaVuSerif-Bold.ttf', fontsLoaded.serifBold);
    doc.addFont('DejaVuSerif-Bold.ttf', 'DejaVuSerif', 'bold');
    doc.addFileToVFS('NotoSerif-Italic.ttf', fontsLoaded.serifItalic);
    doc.addFont('NotoSerif-Italic.ttf', 'NotoSerif', 'italic');
    doc.addFileToVFS('DejaVuSans.ttf', fontsLoaded.sansRegular);
    doc.addFont('DejaVuSans.ttf', 'DejaVuSans', 'normal');
    doc.addFileToVFS('DejaVuSansMono.ttf', fontsLoaded.monoRegular);
    doc.addFont('DejaVuSansMono.ttf', 'DejaVuSansMono', 'normal');
  }

  const PAGE_W = 8.268;
  const PAGE_H = 11.693;
  const MARGIN = 0.984; // 25mm
  const CONTENT_W = PAGE_W - 2 * MARGIN;
  const MAX_Y = PAGE_H - MARGIN;

  // Compact archival monograph typography
  const BODY_PT = 11.2;
  const BODY_LINE_IN = (BODY_PT * 1.52) / 72;

  let y = MARGIN;

  doc.setProperties({
    title: pdfBmpSafeUnicode(PAPER_META.title),
    subject: 'Information-Geometric Resonant Time (IGRT) — Harmonized Research Monograph',
    author: PAPER_META.authors.map((a) => a.name).join(', '),
    keywords: pdfBmpSafeUnicode(PAPER_META.keywords.join(', ')),
    creator: 'IGRT Research Group'
  });

  const addPage = () => {
    doc.addPage('a4', 'portrait');
    y = MARGIN;
  };

  const startChapterOnNewPage = () => {
    if (y > MARGIN + 0.05) {
      addPage();
    } else {
      y = MARGIN;
    }
  };

  const ensureSpace = (neededInches: number) => {
    if (y + neededInches > MAX_Y) {
      addPage();
    }
  };

  let activeInkRgb: [number, number, number] = [24, 34, 56];
  const setInkColor = (rgb: [number, number, number]) => {
    activeInkRgb = rgb;
    doc.setTextColor(rgb[0], rgb[1], rgb[2]);
  };

  const measureTextMixed = (
    text: string,
    reqFamily: FontFamilyKey,
    reqStyle: FontStyleKey,
    size: number,
    isScript = false
  ): number => {
    const chunks = segmentByFont(text, reqFamily, reqStyle, hasUnicodeFonts, isScript);
    let total = 0;
    for (let ci = 0; ci < chunks.length; ci++) {
      const c = chunks[ci];
      if (ci > 0 && (c.text.startsWith('\u2032') || c.text.startsWith('\u2033'))) {
        total += Math.max(chunks[ci - 1].fontStyle === 'italic' ? 0.011 : 0.007, size * 0.0012);
      }
      if (ci > 0 && (chunks[ci - 1].text.endsWith('\u2032') || chunks[ci - 1].text.endsWith('\u2033')) && c.text.startsWith('(')) {
        total += Math.max(0.008, size * 0.0010);
      }
      if (ci > 0 && c.text.includes('\u2113')) {
        total += Math.max(0.010, size * 0.0012);
      }
      doc.setFont(c.fontName, c.fontStyle);
      doc.setFontSize(size);
      const baseText = COMBINING_RE.test(c.text)
        ? c.text.replace(/[\u0300-\u036F\u20D0-\u20FF]/g, '')
        : c.text;
      total += doc.getTextWidth(baseText);
      if (ci < chunks.length - 1 && c.text.includes('\u2113')) {
        total += Math.max(0.008, size * 0.0010);
      }
    }
    return total;
  };

  const drawVectorCombiningAccent = (
    base: string,
    marks: string[],
    cx: number,
    baselineY: number,
    w: number,
    size: number
  ) => {
    const sizeIn = size / 72;
    const isCapOrTall = /[A-ZΑ-ΩΔΘΛΞΠΣΦΨΩφθbdfhklt∇∂]/.test(base);
    const isMidTall = /[ψijg]/.test(base);
    const heightRatio = isCapOrTall ? 0.96 : isMidTall ? 0.83 : 0.74;
    const ay = baselineY - sizeIn * heightRatio;
    const xMid = cx + w * 0.50;
    const span = Math.max(w * 0.92, sizeIn * 0.52);
    const strokeW = Math.max(0.0052, sizeIn * 0.068);
    const dotR = Math.max(0.0064, sizeIn * 0.072);

    doc.setDrawColor(activeInkRgb[0], activeInkRgb[1], activeInkRgb[2]);
    doc.setFillColor(activeInkRgb[0], activeInkRgb[1], activeInkRgb[2]);
    doc.setLineWidth(strokeW);

    for (const m of marks) {
      if (m === '\u0304') {
        doc.line(xMid - span * 0.52, ay, xMid + span * 0.52, ay);
      } else if (m === '\u0303') {
        const x0 = xMid - span * 0.58;
        const dx = (span * 1.16) / 4;
        const amp = sizeIn * 0.095;
        doc.line(x0, ay, x0 + dx, ay - amp);
        doc.line(x0 + dx, ay - amp, x0 + 2 * dx, ay);
        doc.line(x0 + 2 * dx, ay, x0 + 3 * dx, ay + amp);
        doc.line(x0 + 3 * dx, ay + amp, x0 + 4 * dx, ay);
      } else if (m === '\u0302') {
        const amp = sizeIn * 0.085;
        doc.line(xMid - span * 0.48, ay + amp * 0.5, xMid, ay - amp * 0.75);
        doc.line(xMid, ay - amp * 0.75, xMid + span * 0.48, ay + amp * 0.5);
      } else if (m === '\u0307') {
        doc.circle(xMid, ay, dotR * 1.12, 'F');
      } else if (m === '\u0308') {
        const sep = Math.max(w * 0.28, dotR * 2.3);
        doc.circle(xMid - sep, ay, dotR, 'F');
        doc.circle(xMid + sep, ay, dotR, 'F');
      } else if (m === '\u20D7') {
        const xL = xMid - span * 0.56;
        const xR = xMid + span * 0.56;
        const tip = sizeIn * 0.075;
        doc.line(xL, ay, xR, ay);
        doc.line(xR - tip * 1.2, ay - tip * 0.75, xR, ay);
        doc.line(xR - tip * 1.2, ay + tip * 0.75, xR, ay);
      }
    }
  };

  const drawTextMixed = (
    text: string,
    x: number,
    baselineY: number,
    reqFamily: FontFamilyKey,
    reqStyle: FontStyleKey,
    size: number,
    isScript = false
  ): number => {
    const chunks = segmentByFont(text, reqFamily, reqStyle, hasUnicodeFonts, isScript);
    let cx = x;
    for (let ci = 0; ci < chunks.length; ci++) {
      const c = chunks[ci];
      if (ci > 0 && (c.text.startsWith('\u2032') || c.text.startsWith('\u2033'))) {
        cx += Math.max(chunks[ci - 1].fontStyle === 'italic' ? 0.011 : 0.007, size * 0.0012);
      }
      if (ci > 0 && (chunks[ci - 1].text.endsWith('\u2032') || chunks[ci - 1].text.endsWith('\u2033')) && c.text.startsWith('(')) {
        cx += Math.max(0.008, size * 0.0010);
      }
      if (ci > 0 && c.text.includes('\u2113')) {
        cx += Math.max(0.010, size * 0.0012);
      }
      doc.setFont(c.fontName, c.fontStyle);
      doc.setFontSize(size);
      if (!COMBINING_RE.test(c.text)) {
        doc.text(c.text, cx, baselineY);
        cx += doc.getTextWidth(c.text);
      } else {
        const clusters = splitGraphemeClusters(c.text);
        for (const cl of clusters) {
          if (!COMBINING_RE.test(cl)) {
            doc.text(cl, cx, baselineY);
            cx += doc.getTextWidth(cl);
          } else {
            const base = cl.replace(/[\u0300-\u036F\u20D0-\u20FF]/g, '');
            const marks = [...cl].filter((ch) => COMBINING_RE.test(ch));
            doc.text(base, cx, baselineY);
            const w = doc.getTextWidth(base);
            drawVectorCombiningAccent(base, marks, cx, baselineY, w, size);
            cx += w;
          }
        }
      }
      if (ci < chunks.length - 1 && c.text.includes('\u2113')) {
        cx += Math.max(0.008, size * 0.0010);
      }
    }
    return cx - x;
  };

  const buildWordLines = (
    segments: MathSegment[],
    availWidthFirst: number,
    availWidthRest: number,
    family: FontFamilyKey,
    style: FontStyleKey,
    size: number
  ): { lines: InlineWord[][]; spaceWidth: number } => {
    const flat = flattenSegmentsToTokens(
      segments,
      size,
      0,
      family,
      style === 'italic',
      style === 'bold',
      false
    );

    const logicalParagraphs: InlineWord[][] = [[]];
    let curRuns: InlineRun[] = [];

    const flushWord = () => {
      if (curRuns.length === 0) return;
      let w = 0;
      for (let i = 0; i < curRuns.length; i++) {
        const r = curRuns[i];
        r.width = measureTextMixed(r.text, r.family, r.style, r.size, r.dy !== 0);
        if (i > 0 && (r.text.startsWith('\u2032') || r.text.startsWith('\u2033'))) {
          const primeKern = Math.max(curRuns[i - 1].style === 'italic' ? 0.012 : 0.007, curRuns[i - 1].size * 0.0014);
          curRuns[i - 1].width += primeKern;
          w += primeKern;
        } else if (i > 0 && curRuns[i - 1].text.endsWith('\u2113') && r.dy !== 0) {
          const ellScriptKern = Math.max(0.010, curRuns[i - 1].size * 0.0013);
          curRuns[i - 1].width += ellScriptKern;
          w += ellScriptKern;
        }
        w += r.width;
      }
      logicalParagraphs[logicalParagraphs.length - 1].push({ runs: curRuns, width: w });
      curRuns = [];
    };

    for (const tok of flat) {
      if (tok.kind === 'newline') {
        flushWord();
        logicalParagraphs.push([]);
      } else if (tok.kind === 'space') {
        flushWord();
      } else {
        curRuns.push({
          text: tok.text,
          size: tok.size,
          dy: tok.dy,
          family: tok.family,
          style: tok.style,
          width: 0
        });
      }
    }
    flushWord();

    const spaceWidth = measureTextMixed(' ', family, style, size);
    const lines: InlineWord[][] = [];

    for (const words of logicalParagraphs) {
      if (words.length === 0) {
        lines.push([]);
        continue;
      }

      // Split exceptionally long tokens cleanly so narrow table columns never overflow across cell borders
      const safeWords: InlineWord[] = [];
      for (const word of words) {
        if (word.width <= availWidthRest) {
          safeWords.push(word);
        } else if (word.runs.length > 1) {
          // Break long multi-run formulas into atomic (base + attached sub/sup) or delimiter-split chunks
          const groups: InlineRun[][] = [];
          for (const run of word.runs) {
            if (run.dy !== 0 && groups.length > 0) {
              groups[groups.length - 1].push(run);
            } else if (run.dy === 0 && run.text.length > 8 && /[=+\-−\/,;)]/.test(run.text)) {
              const pieces = run.text.split(/(?<=[=+\-−\/,;)])/).filter(Boolean);
              for (const piece of pieces) {
                const pw = measureTextMixed(piece, run.family, run.style, run.size);
                groups.push([{ ...run, text: piece, width: pw }]);
              }
            } else {
              groups.push([run]);
            }
          }
          let accRuns: InlineRun[] = [];
          let accW = 0;
          for (const g of groups) {
            const gW = g.reduce((a, r) => a + r.width, 0);
            if (accRuns.length > 0 && accW + gW > availWidthRest) {
              safeWords.push({ runs: accRuns, width: accW });
              accRuns = [...g];
              accW = gW;
            } else {
              accRuns.push(...g);
              accW += gW;
            }
          }
          if (accRuns.length > 0) {
            safeWords.push({ runs: accRuns, width: accW });
          }
        } else {
          const single = word.runs[0];
          const parts = single.text.split(/(?<=[\/\-\u2013_,=])/).filter(Boolean);
          let buf = '';
          const pushBuf = (txt: string) => {
            if (!txt) return;
            const w = measureTextMixed(txt, single.family, single.style, single.size);
            safeWords.push({ runs: [{ ...single, text: txt, width: w }], width: w });
          };
          for (const part of parts) {
            const partW = measureTextMixed(part, single.family, single.style, single.size);
            if (partW > availWidthRest) {
              if (buf) {
                pushBuf(buf);
                buf = '';
              }
              let cbuf = '';
              for (const ch of part) {
                const test = cbuf + ch;
                if (measureTextMixed(test, single.family, single.style, single.size) > availWidthRest && cbuf) {
                  pushBuf(cbuf);
                  cbuf = ch;
                } else {
                  cbuf = test;
                }
              }
              if (cbuf) buf = cbuf;
            } else {
              const candidate = buf + part;
              if (buf && measureTextMixed(candidate, single.family, single.style, single.size) > availWidthRest) {
                pushBuf(buf);
                buf = part;
              } else {
                buf = candidate;
              }
            }
          }
          pushBuf(buf);
        }
      }

      let curLine: InlineWord[] = [];
      let curWordsW = 0;

      for (const word of safeWords) {
        const limit = lines.length === 0 ? availWidthFirst : availWidthRest;
        const gapCount = curLine.length;
        const nextTotalW = curLine.length === 0 ? word.width : curWordsW + word.width + gapCount * spaceWidth;
        if (nextTotalW > limit && curLine.length > 0) {
          lines.push(curLine);
          curLine = [word];
          curWordsW = word.width;
        } else {
          curLine.push(word);
          curWordsW += word.width;
        }
      }
      if (curLine.length > 0) {
        lines.push(curLine);
      }
    }

    return { lines, spaceWidth };
  };

  const writeRichParagraph = (text: string, opts: RichWriteOpts = {}) => {
    const family: FontFamilyKey = opts.font ?? 'serif';
    const style: FontStyleKey = opts.style ?? 'normal';
    const size = opts.size ?? BODY_PT;
    const lineHeight = opts.lineHeight ?? (size * 1.52) / 72;
    const color = opts.color ?? [24, 34, 56];
    const indent = opts.indent ?? 0;
    const hanging = opts.hangingIndent ?? 0;
    const afterSpace = opts.afterSpace ?? 0.1;
    const justify = opts.justify ?? true;

    doc.setTextColor(color[0], color[1], color[2]);
    activeInkRgb = color;

    if (opts.preformatted) {
      const maxPreW = CONTENT_W - indent;
      const rawLines = pdfBmpSafeUnicode(text).split('\n');
      for (const rl of rawLines) {
        if (measureTextMixed(rl, family, style, size) <= maxPreW) {
          ensureSpace(lineHeight + 0.03);
          drawTextMixed(rl, MARGIN + indent, y, family, style, size);
          y += lineHeight;
          continue;
        }
        const eqBraceIdx = rl.indexOf('= {');
        const leadSpacesMatch = rl.match(/^(\s*)/);
        const contPad =
          eqBraceIdx !== -1
            ? ' '.repeat(eqBraceIdx + 3)
            : `${leadSpacesMatch ? leadSpacesMatch[1] : ''}  `;
        const words = rl.split(/(\s+)/).filter(Boolean);
        let cur = '';
        for (const token of words) {
          const candidate = cur + token;
          if (cur.trim().length > 0 && measureTextMixed(candidate, family, style, size) > maxPreW) {
            ensureSpace(lineHeight + 0.03);
            drawTextMixed(cur.trimEnd(), MARGIN + indent, y, family, style, size);
            y += lineHeight;
            cur = contPad + token.trimStart();
          } else {
            cur = candidate;
          }
        }
        if (cur.trim().length > 0) {
          ensureSpace(lineHeight + 0.03);
          drawTextMixed(cur.trimEnd(), MARGIN + indent, y, family, style, size);
          y += lineHeight;
        }
      }
      y += afterSpace;
      return;
    }

    const paraChunks = opts.alreadyHtmlSegments
      ? [opts.alreadyHtmlSegments]
      : pdfBmpSafeUnicode(text)
          .split('\n')
          .map((line) => parseMathSegments(line));

    for (let pi = 0; pi < paraChunks.length; pi++) {
      let segs = paraChunks[pi];
      if (pi === 0 && opts.prefixBold) {
        const prefixSegs = parseMathSegments(pdfBmpSafeUnicode(opts.prefixBold));
        const boldPrefixWord = buildWordLines(
          prefixSegs,
          CONTENT_W - indent,
          CONTENT_W - indent - hanging,
          family,
          'bold',
          size
        );
        const bodyRes = buildWordLines(
          segs,
          CONTENT_W - indent,
          CONTENT_W - indent - hanging,
          family,
          style,
          size
        );
        // Merge boldPrefixWords with body words cleanly
        const prefixWords = boldPrefixWord.lines.flat();
        const bodyWords = bodyRes.lines.flat();
        const mergedWords = [...prefixWords, ...bodyWords];
        const spaceWidth = measureTextMixed(' ', family, style, size);
        const lines: InlineWord[][] = [];
        let curLine: InlineWord[] = [];
        let curWordsW = 0;

        for (const word of mergedWords) {
          const limit = lines.length === 0 ? CONTENT_W - indent : CONTENT_W - indent - hanging;
          const nextW = curLine.length === 0 ? word.width : curWordsW + word.width + curLine.length * spaceWidth;
          if (nextW > limit && curLine.length > 0) {
            lines.push(curLine);
            curLine = [word];
            curWordsW = word.width;
          } else {
            curLine.push(word);
            curWordsW += word.width;
          }
        }
        if (curLine.length > 0) lines.push(curLine);

        for (let li = 0; li < lines.length; li++) {
          ensureSpace(lineHeight + 0.04);
          const lineWords = lines[li];
          const lineX0 = MARGIN + indent + (li > 0 ? hanging : 0);
          const availW = CONTENT_W - indent - (li > 0 ? hanging : 0);
          const isLastLine = li === lines.length - 1;
          const totalWordsW = lineWords.reduce((acc, w) => acc + w.width, 0);

          let gap = spaceWidth;
          if (justify && !isLastLine && lineWords.length > 1) {
            const candidate = (availW - totalWordsW) / (lineWords.length - 1);
            if (candidate >= spaceWidth * 0.7 && candidate <= spaceWidth * 7) {
              gap = candidate;
            }
          }

          let x = lineX0;
          for (let wi = 0; wi < lineWords.length; wi++) {
            const word = lineWords[wi];
            for (const run of word.runs) {
              drawTextMixed(run.text, x, y + run.dy, run.family, run.style, run.size, run.dy !== 0);
              x += run.width;
            }
            if (wi < lineWords.length - 1) {
              x += gap;
            }
          }
          y += lineHeight;
        }
        continue;
      }

      const { lines, spaceWidth } = buildWordLines(
        segs,
        CONTENT_W - indent,
        CONTENT_W - indent - hanging,
        family,
        style,
        size
      );

      for (let li = 0; li < lines.length; li++) {
        ensureSpace(lineHeight + 0.04);
        const lineWords = lines[li];
        const lineX0 = MARGIN + indent + (li > 0 ? hanging : 0);
        const availW = CONTENT_W - indent - (li > 0 ? hanging : 0);
        const isLastLine = li === lines.length - 1;
        const totalWordsW = lineWords.reduce((acc, w) => acc + w.width, 0);

        let gap = spaceWidth;
        if (justify && !isLastLine && lineWords.length > 1) {
          const candidate = (availW - totalWordsW) / (lineWords.length - 1);
          if (candidate >= spaceWidth * 0.7 && candidate <= spaceWidth * 7) {
            gap = candidate;
          }
        }

        let x = lineX0;
        for (let wi = 0; wi < lineWords.length; wi++) {
          const word = lineWords[wi];
          for (const run of word.runs) {
            drawTextMixed(run.text, x, y + run.dy, run.family, run.style, run.size, run.dy !== 0);
            x += run.width;
          }
          if (wi < lineWords.length - 1) {
            x += gap;
          }
        }
        y += lineHeight;
      }
    }

    y += afterSpace;
  };

  const drawPlayfairHeadline = (text: string, fontPx: number, afterSpace = 0.14) => {
    const rendered = renderPlayfairRegularHeadlinePng(text, fontPx, CONTENT_W, '#0F172A');
    if (rendered) {
      ensureSpace(rendered.heightIn + 0.28);
      doc.addImage(rendered.dataUrl, 'PNG', MARGIN, y - 0.04, rendered.widthIn, rendered.heightIn);
      y += rendered.heightIn + afterSpace;
    } else {
      const pt = (fontPx * 72) / 96;
      ensureSpace(pt / 72 + 0.35);
      y += (pt * 0.72) / 72;
      writeRichParagraph(text, {
        font: 'serif',
        style: 'normal',
        size: pt,
        lineHeight: (pt * 1.24) / 72,
        justify: false,
        afterSpace
      });
    }
  };

  const drawRule = (color: [number, number, number] = [214, 202, 190], thickness = 0.008) => {
    ensureSpace(0.14);
    doc.setDrawColor(color[0], color[1], color[2]);
    doc.setLineWidth(thickness);
    doc.line(MARGIN, y, PAGE_W - MARGIN, y);
    y += 0.14;
  };

  const drawEquationBox = (unicodeHtml: string, label?: string, caption?: string) => {
    const labelReserve = label ? 0.65 : 0.16;
    const eqImg = renderUnicodeEquationPng(unicodeHtml, CONTENT_W - labelReserve - 0.28);

    const capSize = 9.8;
    const capLineH = (capSize * 1.45) / 72;
    let capLines: InlineWord[][] = [];
    let capSpaceW = 0;
    if (caption) {
      const res = buildWordLines(
        parseMathSegments(pdfBmpSafeUnicode(caption)),
        CONTENT_W - 0.4,
        CONTENT_W - 0.4,
        'serif',
        'italic',
        capSize
      );
      capLines = res.lines;
      capSpaceW = res.spaceWidth;
    }
    const capH = capLines.length > 0 ? capLines.length * capLineH + 0.14 : 0;

    if (eqImg) {
      const eqH = eqImg.heightIn;
      const boxH = eqH + 0.32 + capH;
      ensureSpace(boxH + 0.3);

      y += 0.14;
      doc.setFillColor(250, 246, 238);
      doc.setDrawColor(214, 202, 190);
      doc.setLineWidth(0.01);
      doc.rect(MARGIN, y, CONTENT_W, boxH, 'FD');

      const eqX = MARGIN + Math.max(0.14, (CONTENT_W - labelReserve - eqImg.widthIn) / 2);
      doc.addImage(eqImg.dataUrl, 'PNG', eqX, y + 0.13, eqImg.widthIn, eqImg.heightIn);

      if (label) {
        doc.setTextColor(139, 69, 19);
        activeInkRgb = [139, 69, 19];
        const safeLabel = pdfBmpSafeUnicode(label);
        const lw = measureTextMixed(safeLabel, 'mono', 'normal', 9.5);
        drawTextMixed(
          safeLabel,
          PAGE_W - MARGIN - 0.16 - lw,
          y + 0.13 + eqImg.heightIn / 2 + 0.03,
          'mono',
          'normal',
          9.5
        );
      }

      if (capLines.length > 0) {
        const divY = y + eqH + 0.2;
        doc.setDrawColor(229, 221, 208);
        doc.line(MARGIN + 0.14, divY, PAGE_W - MARGIN - 0.14, divY);
        let cy = divY + 0.17;
        doc.setTextColor(71, 85, 105);
        activeInkRgb = [71, 85, 105];
        const availCapW = CONTENT_W - 0.4;
        for (let li = 0; li < capLines.length; li++) {
          const lineWords = capLines[li];
          const isLast = li === capLines.length - 1;
          const totalWordsW = lineWords.reduce((a, w) => a + w.width, 0);
          let gap = capSpaceW;
          if (!isLast && lineWords.length > 1) {
            const candidate = (availCapW - totalWordsW) / (lineWords.length - 1);
            if (candidate >= capSpaceW * 0.7 && candidate <= capSpaceW * 6) gap = candidate;
          }
          const lineW = totalWordsW + Math.max(0, lineWords.length - 1) * gap;
          let x = isLast ? MARGIN + (CONTENT_W - lineW) / 2 : MARGIN + 0.2;
          for (let wi = 0; wi < lineWords.length; wi++) {
            const word = lineWords[wi];
            for (const run of word.runs) {
              drawTextMixed(run.text, x, cy + run.dy, run.family, run.style, run.size, run.dy !== 0);
              x += run.width;
            }
            if (wi < lineWords.length - 1) x += gap;
          }
          cy += capLineH;
        }
      }

      y += boxH + 0.2;
    } else {
      const fallbackEq = unicodeHtml
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/&nbsp;/g, ' ')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/<[^>]+>/g, '');
      writeRichParagraph(fallbackEq, {
        size: 11,
        style: 'italic',
        prefixBold: `[${label || 'Eq'}] `
      });
    }
  };

  interface PdfTableColumn {
    header: string;
    width: number;
    font?: FontFamilyKey;
    style?: FontStyleKey;
    color?: [number, number, number];
    justify?: boolean;
  }

  type PdfTableCell = string | { html: string };

  const drawPdfTable = (
    titleLabel: string,
    columns: PdfTableColumn[],
    rows: PdfTableCell[][],
    opts: { cellSize?: number; padX?: number } = {}
  ) => {
    const cellSize = opts.cellSize ?? 8.6;
    const cellLineH = (cellSize * 1.46) / 72;
    const padX = opts.padX ?? 0.08;
    const padY = 0.088;
    const totalW = columns.reduce((acc, c) => acc + c.width, 0);

    const drawHeaderBar = () => {
      const headerSize = 8.4;
      const headerLineH = (headerSize * 1.35) / 72;
      const headerLinesPerCol = columns.map((c) =>
        buildWordLines(parseMathSegments(pdfBmpSafeUnicode(c.header)), c.width - 2 * padX, c.width - 2 * padX, 'serif', 'bold', headerSize)
      );
      const maxH = Math.max(1, ...headerLinesPerCol.map((r) => r.lines.length)) * headerLineH + 2 * padY;

      doc.setFillColor(250, 246, 238);
      doc.setDrawColor(214, 202, 190);
      doc.setLineWidth(0.009);
      doc.rect(MARGIN, y, totalW, maxH, 'FD');

      let cx = MARGIN;
      for (let ci = 0; ci < columns.length; ci++) {
        const col = columns[ci];
        if (ci > 0) {
          doc.line(cx, y, cx, y + maxH);
        }
        doc.setTextColor(15, 23, 42);
        activeInkRgb = [15, 23, 42];
        let ly = y + padY + (headerSize * 1.12) / 72;
        for (const lineWords of headerLinesPerCol[ci].lines) {
          let lx = cx + padX;
          for (let wi = 0; wi < lineWords.length; wi++) {
            if (wi > 0) lx += headerLinesPerCol[ci].spaceWidth;
            for (const run of lineWords[wi].runs) {
              drawTextMixed(run.text, lx, ly + run.dy, run.family, run.style, run.size, run.dy !== 0);
              lx += run.width;
            }
          }
          ly += headerLineH;
        }
        cx += col.width;
      }
      y += maxH;
    };

    if (y > MARGIN + 0.12) {
      y += 0.14;
    }
    ensureSpace(1.25);
    writeRichParagraph(titleLabel, {
      font: 'sans',
      size: 9,
      color: [139, 69, 19],
      justify: false,
      afterSpace: 0.05
    });
    drawHeaderBar();

    for (const row of rows) {
      const prepared = columns.map((col, ci) => {
        const raw = row[ci] ?? '';
        const segs =
          typeof raw === 'string'
            ? parseMathSegments(pdfBmpSafeUnicode(raw))
            : parseHtmlMathSegments(pdfBmpSafeUnicode(raw.html));
        return buildWordLines(
          segs,
          col.width - 2 * padX,
          col.width - 2 * padX,
          col.font ?? 'serif',
          col.style ?? 'normal',
          cellSize
        );
      });

      const maxLines = Math.max(1, ...prepared.map((p) => p.lines.length));
      const rowH = maxLines * cellLineH + 2 * padY;

      if (y + rowH > MAX_Y) {
        addPage();
        drawHeaderBar();
      }

      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(214, 202, 190);
      doc.setLineWidth(0.008);
      doc.rect(MARGIN, y, totalW, rowH, 'FD');

      let cx = MARGIN;
      for (let ci = 0; ci < columns.length; ci++) {
        const col = columns[ci];
        if (ci > 0) {
          doc.setDrawColor(226, 217, 200);
          doc.line(cx, y, cx, y + rowH);
        }
        const colColor = col.color ?? [24, 34, 56];
        setInkColor(colColor);

        const cellRes = prepared[ci];
        const availW = col.width - 2 * padX;
        let ly = y + padY + (cellSize * 1.12) / 72;

        for (let li = 0; li < cellRes.lines.length; li++) {
          const lineWords = cellRes.lines[li];
          const isLast = li === cellRes.lines.length - 1;
          const totalWordsW = lineWords.reduce((a, w) => a + w.width, 0);
          let gap = cellRes.spaceWidth;
          if (col.justify && !isLast && lineWords.length > 1) {
            const candidate = (availW - totalWordsW) / (lineWords.length - 1);
            if (candidate >= cellRes.spaceWidth * 0.7 && candidate <= cellRes.spaceWidth * 6) {
              gap = candidate;
            }
          }
          let lx = cx + padX;
          for (let wi = 0; wi < lineWords.length; wi++) {
            for (const run of lineWords[wi].runs) {
              drawTextMixed(run.text, lx, ly + run.dy, run.family, run.style, run.size, run.dy !== 0);
              lx += run.width;
            }
            if (wi < lineWords.length - 1) lx += gap;
          }
          ly += cellLineH;
        }
        cx += col.width;
      }
      y += rowH;
    }

    y += 0.14;
  };

  const drawFramedTheoremBox = (theoremBox: {
    number: string;
    title: string;
    hypotheses: string[];
    statement: string;
  }) => {
    const boxPad = 0.16;
    const innerW = CONTENT_W - 2 * boxPad;
    const bodySize = 10.2;
    const bodyLineH = (bodySize * 1.48) / 72;
    const kickerH = 0.22;

    const titleRes = buildWordLines(parseMathSegments(pdfBmpSafeUnicode(theoremBox.title)), innerW, innerW, 'serif', 'bold', 11);
    const titleH = titleRes.lines.length * ((11 * 1.38) / 72) + 0.08;

    const hypRes = buildWordLines(
      parseMathSegments(pdfBmpSafeUnicode(`Hypotheses: ${theoremBox.hypotheses.join(' ')}`)),
      innerW,
      innerW,
      'serif',
      'normal',
      bodySize
    );
    const stmtRes = buildWordLines(
      parseMathSegments(pdfBmpSafeUnicode(`Statement: ${theoremBox.statement}`)),
      innerW,
      innerW,
      'serif',
      'normal',
      bodySize
    );

    const totalH =
      boxPad +
      kickerH +
      titleH +
      hypRes.lines.length * bodyLineH +
      0.08 +
      stmtRes.lines.length * bodyLineH +
      boxPad;

    ensureSpace(totalH + 0.15);
    y += 0.06;

    doc.setFillColor(250, 248, 243);
    doc.setDrawColor(214, 202, 190);
    doc.setLineWidth(0.01);
    doc.rect(MARGIN, y, CONTENT_W, totalH, 'FD');

    let cy = y + boxPad + 0.04;
    setInkColor([139, 69, 19]);
    const kickerText = `FORMAL STATEMENT  ·  ${theoremBox.number.toUpperCase()}`;
    const kickerW8 = measureTextMixed(kickerText, 'sans', 'normal', 8);
    const kickerSize = kickerW8 > innerW ? Math.max(6.4, 8 * (innerW / kickerW8) * 0.98) : 8;
    drawTextMixed(kickerText, MARGIN + boxPad, cy, 'sans', 'normal', kickerSize);
    cy += 0.08;
    doc.setDrawColor(226, 217, 200);
    doc.line(MARGIN + boxPad, cy, PAGE_W - MARGIN - boxPad, cy);
    cy += 0.15;

    setInkColor([15, 23, 42]);
    for (const lw of titleRes.lines) {
      let lx = MARGIN + boxPad;
      for (let wi = 0; wi < lw.length; wi++) {
        if (wi > 0) lx += titleRes.spaceWidth;
        for (const r of lw[wi].runs) {
          drawTextMixed(r.text, lx, cy + r.dy, r.family, r.style, r.size, r.dy !== 0);
          lx += r.width;
        }
      }
      cy += (11 * 1.38) / 72;
    }
    cy += 0.06;

    const drawJustifiedBlock = (res: { lines: InlineWord[][]; spaceWidth: number }) => {
      for (let li = 0; li < res.lines.length; li++) {
        const lineWords = res.lines[li];
        const isLast = li === res.lines.length - 1;
        const totalWordsW = lineWords.reduce((a, w) => a + w.width, 0);
        let gap = res.spaceWidth;
        if (!isLast && lineWords.length > 1) {
          const candidate = (innerW - totalWordsW) / (lineWords.length - 1);
          if (candidate >= res.spaceWidth * 0.7 && candidate <= res.spaceWidth * 6) gap = candidate;
        }
        let lx = MARGIN + boxPad;
        for (let wi = 0; wi < lineWords.length; wi++) {
          for (const r of lineWords[wi].runs) {
            drawTextMixed(r.text, lx, cy + r.dy, r.family, r.style, r.size, r.dy !== 0);
            lx += r.width;
          }
          if (wi < lineWords.length - 1) lx += gap;
        }
        cy += bodyLineH;
      }
    };

    doc.setTextColor(24, 34, 56);
    activeInkRgb = [24, 34, 56];
    drawJustifiedBlock(hypRes);
    cy += 0.08;
    drawJustifiedBlock(stmtRes);

    y += totalH + 0.16;
  };

  const drawFramedCoreFalsifierBox = (falsifier: typeof CORE_TIME_MECHANISM_FALSIFIER) => {
    const boxPad = 0.16;
    const innerW = CONTENT_W - 2 * boxPad;
    const bodySize = 10.1;
    const bodyLineH = (bodySize * 1.48) / 72;
    const kickerH = 0.22;

    const titleRes = buildWordLines(parseMathSegments(pdfBmpSafeUnicode(falsifier.heading)), innerW, innerW, 'serif', 'bold', 11);
    const titleH = titleRes.lines.length * ((11 * 1.38) / 72) + 0.08;

    const introRes = buildWordLines(parseMathSegments(pdfBmpSafeUnicode(falsifier.intro)), innerW, innerW, 'serif', 'normal', bodySize);
    const coreRes = buildWordLines(parseMathSegments(pdfBmpSafeUnicode(falsifier.coreFalsifier)), innerW, innerW, 'serif', 'normal', bodySize);
    const pracRes = buildWordLines(parseMathSegments(pdfBmpSafeUnicode(falsifier.practicalRealization)), innerW, innerW, 'serif', 'normal', bodySize);

    const totalH =
      boxPad +
      kickerH +
      titleH +
      introRes.lines.length * bodyLineH +
      0.07 +
      coreRes.lines.length * bodyLineH +
      0.07 +
      pracRes.lines.length * bodyLineH +
      boxPad;

    ensureSpace(totalH + 0.15);
    y += 0.06;

    doc.setFillColor(255, 253, 248);
    doc.setDrawColor(154, 52, 18);
    doc.setLineWidth(0.012);
    doc.rect(MARGIN, y, CONTENT_W, totalH, 'FD');

    let cy = y + boxPad + 0.04;
    setInkColor([139, 69, 19]);
    drawTextMixed('CORE MECHANISM FALSIFICATION  ·  DIRECT TEST OF EQ. (4.1)', MARGIN + boxPad, cy, 'sans', 'normal', 8);
    cy += 0.08;
    doc.setDrawColor(226, 217, 200);
    doc.line(MARGIN + boxPad, cy, PAGE_W - MARGIN - boxPad, cy);
    cy += 0.15;

    setInkColor([15, 23, 42]);
    for (const lw of titleRes.lines) {
      let lx = MARGIN + boxPad;
      for (let wi = 0; wi < lw.length; wi++) {
        if (wi > 0) lx += titleRes.spaceWidth;
        for (const r of lw[wi].runs) {
          drawTextMixed(r.text, lx, cy + r.dy, r.family, r.style, r.size, r.dy !== 0);
          lx += r.width;
        }
      }
      cy += (11 * 1.38) / 72;
    }
    cy += 0.06;

    const drawJustifiedPara = (res: { lines: InlineWord[][]; spaceWidth: number }) => {
      for (let li = 0; li < res.lines.length; li++) {
        const lineWords = res.lines[li];
        const isLast = li === res.lines.length - 1;
        const totalWordsW = lineWords.reduce((a, w) => a + w.width, 0);
        let gap = res.spaceWidth;
        if (!isLast && lineWords.length > 1) {
          const candidate = (innerW - totalWordsW) / (lineWords.length - 1);
          if (candidate >= res.spaceWidth * 0.7 && candidate <= res.spaceWidth * 6) gap = candidate;
        }
        let lx = MARGIN + boxPad;
        for (let wi = 0; wi < lineWords.length; wi++) {
          for (const r of lineWords[wi].runs) {
            drawTextMixed(r.text, lx, cy + r.dy, r.family, r.style, r.size, r.dy !== 0);
            lx += r.width;
          }
          if (wi < lineWords.length - 1) lx += gap;
        }
        cy += bodyLineH;
      }
    };

    doc.setTextColor(24, 34, 56);
    activeInkRgb = [24, 34, 56];
    drawJustifiedPara(introRes);
    cy += 0.07;
    drawJustifiedPara(coreRes);
    cy += 0.07;
    drawJustifiedPara(pracRes);

    y += totalH + 0.16;
  };

  const drawFramedWorkedBox = (worked: {
    title: string;
    setup: string;
    steps: string[];
    resultEquation: { unicodeHtml: string; label?: string; caption?: string };
    takeaway: string;
  }) => {
    const boxPad = 0.16;
    const innerW = CONTENT_W - 2 * boxPad;
    const bodySize = 10.1;
    const bodyLineH = (bodySize * 1.48) / 72;
    const kickerH = 0.22;

    const titleRes = buildWordLines(parseMathSegments(pdfBmpSafeUnicode(worked.title)), innerW, innerW, 'serif', 'bold', 11);
    const titleH = titleRes.lines.length * ((11 * 1.38) / 72) + 0.08;

    const setupRes = buildWordLines(parseMathSegments(pdfBmpSafeUnicode(worked.setup)), innerW, innerW, 'serif', 'normal', bodySize);
    const stepResList = worked.steps.map((st) =>
      buildWordLines(parseMathSegments(pdfBmpSafeUnicode(st)), innerW - 0.12, innerW - 0.12, 'serif', 'normal', bodySize)
    );

    const eqLabelReserve = worked.resultEquation.label ? 0.65 : 0.16;
    const eqImg = renderUnicodeEquationPng(worked.resultEquation.unicodeHtml, innerW - eqLabelReserve - 0.24);
    const eqBoxH = eqImg ? eqImg.heightIn + 0.24 : 0.42;

    const capSize = 9.4;
    const capLineH = (capSize * 1.42) / 72;
    const capRes = worked.resultEquation.caption
      ? buildWordLines(parseMathSegments(pdfBmpSafeUnicode(worked.resultEquation.caption)), innerW - 0.24, innerW - 0.24, 'serif', 'italic', capSize)
      : null;
    const capH = capRes && capRes.lines.length > 0 ? capRes.lines.length * capLineH + 0.12 : 0;

    const takeRes = buildWordLines(
      parseMathSegments(pdfBmpSafeUnicode(`Result: ${worked.takeaway}`)),
      innerW,
      innerW,
      'serif',
      'normal',
      bodySize
    );

    const stepsTotalH = stepResList.reduce((acc, r) => acc + r.lines.length * bodyLineH + 0.05, 0);
    const totalH =
      boxPad +
      kickerH +
      titleH +
      setupRes.lines.length * bodyLineH +
      0.07 +
      stepsTotalH +
      0.06 +
      eqBoxH +
      capH +
      0.1 +
      takeRes.lines.length * bodyLineH +
      boxPad;

    ensureSpace(Math.min(totalH + 0.16, MAX_Y - MARGIN));
    y += 0.06;

    doc.setFillColor(250, 248, 243);
    doc.setDrawColor(214, 202, 190);
    doc.setLineWidth(0.01);
    doc.rect(MARGIN, y, CONTENT_W, totalH, 'FD');

    let cy = y + boxPad + 0.04;
    setInkColor([21, 128, 61]);
    drawTextMixed('WORKED EXAMPLE  ·  EXPLICIT VERIFICATION', MARGIN + boxPad, cy, 'sans', 'normal', 8);
    cy += 0.08;
    doc.setDrawColor(226, 217, 200);
    doc.line(MARGIN + boxPad, cy, PAGE_W - MARGIN - boxPad, cy);
    cy += 0.15;

    setInkColor([15, 23, 42]);
    for (const lw of titleRes.lines) {
      let lx = MARGIN + boxPad;
      for (let wi = 0; wi < lw.length; wi++) {
        if (wi > 0) lx += titleRes.spaceWidth;
        for (const r of lw[wi].runs) {
          drawTextMixed(r.text, lx, cy + r.dy, r.family, r.style, r.size, r.dy !== 0);
          lx += r.width;
        }
      }
      cy += (11 * 1.38) / 72;
    }
    cy += 0.06;

    const drawJustifiedInner = (res: { lines: InlineWord[][]; spaceWidth: number }, leftOffset = 0, avail = innerW, lineH = bodyLineH) => {
      for (let li = 0; li < res.lines.length; li++) {
        const lineWords = res.lines[li];
        const isLast = li === res.lines.length - 1;
        const totalWordsW = lineWords.reduce((a, w) => a + w.width, 0);
        let gap = res.spaceWidth;
        if (!isLast && lineWords.length > 1) {
          const candidate = (avail - totalWordsW) / (lineWords.length - 1);
          if (candidate >= res.spaceWidth * 0.7 && candidate <= res.spaceWidth * 6) gap = candidate;
        }
        let lx = MARGIN + boxPad + leftOffset;
        for (let wi = 0; wi < lineWords.length; wi++) {
          for (const r of lineWords[wi].runs) {
            drawTextMixed(r.text, lx, cy + r.dy, r.family, r.style, r.size, r.dy !== 0);
            lx += r.width;
          }
          if (wi < lineWords.length - 1) lx += gap;
        }
        cy += lineH;
      }
    };

    doc.setTextColor(24, 34, 56);
    activeInkRgb = [24, 34, 56];
    drawJustifiedInner(setupRes);
    cy += 0.07;

    for (const stRes of stepResList) {
      drawJustifiedInner(stRes, 0.12, innerW - 0.12);
      cy += 0.05;
    }
    cy += 0.04;

    // Inner result equation plate
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(214, 202, 190);
    doc.setLineWidth(0.008);
    doc.rect(MARGIN + boxPad, cy, innerW, eqBoxH + capH, 'FD');

    if (eqImg) {
      const eqX = MARGIN + boxPad + Math.max(0.12, (innerW - eqLabelReserve - eqImg.widthIn) / 2);
      doc.addImage(eqImg.dataUrl, 'PNG', eqX, cy + 0.11, eqImg.widthIn, eqImg.heightIn);
      if (worked.resultEquation.label) {
        doc.setTextColor(139, 69, 19);
        activeInkRgb = [139, 69, 19];
        const safeLabel = pdfBmpSafeUnicode(worked.resultEquation.label);
        const lw = measureTextMixed(safeLabel, 'mono', 'normal', 9.0);
        drawTextMixed(
          safeLabel,
          MARGIN + boxPad + innerW - 0.12 - lw,
          cy + 0.11 + eqImg.heightIn / 2 + 0.03,
          'mono',
          'normal',
          9.0
        );
      }
    } else {
      doc.setTextColor(15, 23, 42);
      activeInkRgb = [15, 23, 42];
      const fallbackText = pdfBmpSafeUnicode(worked.resultEquation.unicodeHtml.replace(/<[^>]+>/g, ''));
      drawTextMixed(fallbackText, MARGIN + boxPad + 0.12, cy + 0.25, 'serif', 'italic', 10.0);
    }
    cy += eqBoxH;

    if (capRes && capRes.lines.length > 0) {
      doc.setDrawColor(229, 221, 208);
      doc.line(MARGIN + boxPad + 0.1, cy - 0.02, MARGIN + boxPad + innerW - 0.1, cy - 0.02);
      cy += 0.12;
      doc.setTextColor(71, 85, 105);
      activeInkRgb = [71, 85, 105];
      drawJustifiedInner(capRes, 0.12, innerW - 0.24, capLineH);
    }
    cy += 0.12;

    doc.setTextColor(24, 34, 56);
    activeInkRgb = [24, 34, 56];
    drawJustifiedInner(takeRes);

    y += totalH + 0.16;
  };

  // Pre-load 5 archival illustration plates & pre-rasterize all 12 SVG diagrams
  const plateImages = new Map<
    number,
    { dataUrl: string; format: 'JPEG' | 'PNG'; widthIn: number; heightIn: number }
  >();
  await Promise.all(
    PAPER_ILLUSTRATIONS.map(async (plate) => {
      const pImg = await loadPlateImageForPdf(plate.imagePath, CONTENT_W - 0.1);
      if (pImg) plateImages.set(plate.id, pImg);
    })
  );

  const figureImages = new Map<number, { dataUrl: string; widthIn: number; heightIn: number }>();
  for (const fig of PAPER_FIGURES) {
    const png = await rasterizeSvgToPng(fig.svgMarkup, CONTENT_W - 0.1, fontsLoaded);
    if (png) figureImages.set(fig.id, png);
  }

  // =========================================================
  // PAGE 1: MASTHEAD, TITLE, RESEARCH TEAM & ABSTRACT
  // =========================================================
  writeRichParagraph(`${PAPER_META.publicationStatus}  |  ${PAPER_META.edition}`, {
    font: 'sans',
    size: 7.9,
    color: [139, 69, 19],
    justify: false,
    afterSpace: 0.04
  });

  drawRule([15, 23, 42], 0.015);
  drawPlayfairHeadline(PAPER_META.title, 23, 0.06);

  writeRichParagraph(
    `${PAPER_META.eprint}  |  ${PAPER_META.doi}\nPhySH: ${PAPER_META.physh}  |  MSC 2020: ${PAPER_META.msc2020}`,
    { font: 'mono', size: 7.7, lineHeight: (7.7 * 1.32) / 72, color: [100, 116, 139], justify: false, afterSpace: 0.055 }
  );

  for (const a of PAPER_META.authors) {
    writeRichParagraph(`${a.name} (ORCID: https://orcid.org/${a.orcid}) — ${a.affiliation}`, {
      font: 'serif',
      size: 8.6,
      lineHeight: (8.6 * 1.28) / 72,
      color: [15, 23, 42],
      justify: true,
      afterSpace: 0.02
    });
  }

  drawRule([214, 202, 190], 0.01);

  writeRichParagraph('ABSTRACT', {
    font: 'sans',
    size: 8.6,
    color: [139, 69, 19],
    justify: false,
    afterSpace: 0.035
  });

  for (const p of SHORTENED_ABSTRACT.paragraphs) {
    writeRichParagraph(p, { size: 9.2, lineHeight: (9.2 * 1.33) / 72, afterSpace: 0.045 });
  }
  drawEquationBox(
    MASTER_EQUATION_ABSTRACT.unicodeHtml,
    MASTER_EQUATION_ABSTRACT.label,
    MASTER_EQUATION_ABSTRACT.caption
  );

  writeRichParagraph(PAPER_META.keywords.join(' · '), {
    prefixBold: 'Keywords: ',
    style: 'italic',
    size: 8.6,
    lineHeight: (8.6 * 1.30) / 72,
    color: [71, 85, 105],
    justify: true,
    afterSpace: 0.03
  });

  // =========================================================
  // PAGE 2: DEDICATED TABLE OF CONTENTS
  // =========================================================
  startChapterOnNewPage();
  drawPlayfairHeadline('Table of Contents', 30, 0.16);
  drawRule([214, 202, 190], 0.008);
  writeRichParagraph(
    'Summary, Symbols & Indices: Summary · Scope & Closures · Illustrations · Symbols · Acronyms · Dimensional Closure · Equation Index',
    { size: 10.2, justify: true, afterSpace: 0.12 }
  );
  for (const ch of PAPER_CHAPTERS) {
    writeRichParagraph(`Chapter ${ch.number}: ${ch.title}`, {
      size: 10.6,
      style: 'bold',
      color: [15, 23, 42],
      justify: false,
      afterSpace: 0.045
    });
    for (const sub of ch.subsections) {
      writeRichParagraph(`${sub.number}  ${sub.title}`, {
        size: 9.6,
        indent: 0.25,
        color: [71, 85, 105],
        justify: false,
        afterSpace: 0.03
      });
    }
  }
  drawRule([226, 217, 200], 0.006);
  writeRichParagraph('Appendices A–P: Formal Theorems, CODATA Units, Derivations, Status Audit, Toy Model, Revision Registry & H11 Closures', {
    size: 10.2,
    style: 'bold',
    justify: false,
    afterSpace: 0.06
  });
  writeRichParagraph(`Governance Disclosures · References [1]–[${PAPER_REFERENCES.length}]`, {
    size: 10.2,
    style: 'bold',
    justify: false,
    afterSpace: 0.06
  });

  // =========================================================
  // SUMMARY, SYMBOLS & INDICES (NEW PAGE)
  // =========================================================
  startChapterOnNewPage();
  drawPlayfairHeadline('Summary, Symbols & Indices', 28, 0.18);
  writeRichParagraph('SUMMARY', {
    font: 'sans',
    size: 9.2,
    color: [139, 69, 19],
    justify: false,
    afterSpace: 0.08
  });
  writeRichParagraph(PLAIN_LANGUAGE_SUMMARY, { size: BODY_PT, lineHeight: BODY_LINE_IN, afterSpace: 0.16 });

  if (y > MARGIN + 0.2) y += 0.14;
  writeRichParagraph('SCOPE & ARCHITECTURAL CLOSURES', {
    font: 'sans',
    size: 9.2,
    color: [139, 69, 19],
    justify: false,
    afterSpace: 0.1
  });
  for (const sc of SCOPE_AND_NON_CLAIMS) {
    writeRichParagraph(sc.detail, { prefixBold: `${sc.title}: `, size: 10.2, afterSpace: 0.09 });
  }
  y += 0.14;

  drawPdfTable(
    'TABLE 0.1: LIST OF SYMBOLS & COLLISION DISAMBIGUATION',
    [
      { header: 'Symbol', width: 1.20, font: 'serif', style: 'normal', color: [139, 69, 19] },
      { header: 'Definition', width: 1.98, justify: true },
      { header: 'Units', width: 1.24, font: 'serif' },
      { header: 'Collision Disambiguation', width: CONTENT_W - 4.42, justify: true }
    ],
    LIST_OF_SYMBOLS.map((sym) => [sym.symbol, sym.name, sym.units, sym.collisionNote]),
    { cellSize: 8.7, padX: 0.06 }
  );

  drawPdfTable(
    'ACRONYMS GLOSSARY',
    [
      { header: 'Acronym', width: 0.85, font: 'serif', style: 'bold', color: [139, 69, 19] },
      { header: 'Expansion', width: 2.1, justify: true },
      { header: 'Operational Definition', width: CONTENT_W - 2.95, justify: true }
    ],
    ACRONYMS_GLOSSARY.map((a) => [a.term, a.expansion, a.definition]),
    { cellSize: 8.3, padX: 0.065 }
  );

  drawPdfTable(
    'TABLE 0.2a: DIMENSIONAL-ANALYSIS CLOSURE — PART I (ITEMS 1–11)',
    [
      { header: 'Quantity', width: 1.14, justify: false },
      { header: 'Expression', width: 2.06, font: 'serif', justify: false },
      { header: 'SI & Natural Units', width: 1.44, font: 'serif', justify: false },
      { header: 'Derivation & Tally Note', width: CONTENT_W - 4.64, justify: false }
    ],
    DIMENSIONAL_ANALYSIS_CLOSURE_A.map((d) => [d.quantity, d.expression, `SI: ${d.siUnits}\nNat.: ${d.naturalUnits}`, d.auditNote]),
    { cellSize: 8.5, padX: 0.055 }
  );

  drawPdfTable(
    'TABLE 0.2b: DIMENSIONAL-ANALYSIS CLOSURE — PART II (ITEMS 12–20)',
    [
      { header: 'Quantity', width: 1.14, justify: false },
      { header: 'Expression', width: 2.06, font: 'serif', justify: false },
      { header: 'SI & Natural Units', width: 1.44, font: 'serif', justify: false },
      { header: 'Derivation & Tally Note', width: CONTENT_W - 4.64, justify: false }
    ],
    DIMENSIONAL_ANALYSIS_CLOSURE_B.map((d) => [d.quantity, d.expression, `SI: ${d.siUnits}\nNat.: ${d.naturalUnits}`, d.auditNote]),
    { cellSize: 8.5, padX: 0.055 }
  );

  writeRichParagraph('LIST OF ILLUSTRATIONS', {
    font: 'sans',
    size: 9.2,
    color: [139, 69, 19],
    justify: false,
    afterSpace: 0.05
  });
  for (const p of PAPER_ILLUSTRATIONS) {
    writeRichParagraph(p.title, { prefixBold: `Plate ${p.roman}: `, size: 9.8, afterSpace: 0.03 });
  }
  y += 0.08;

  writeRichParagraph('LIST OF FIGURES', {
    font: 'sans',
    size: 9.2,
    color: [139, 69, 19],
    justify: false,
    afterSpace: 0.05
  });
  for (const f of PAPER_FIGURES) {
    writeRichParagraph(f.title, { prefixBold: `Figure ${f.id}: `, size: 9.8, afterSpace: 0.03 });
  }

  drawPdfTable(
    'LIST OF TABLES',
    [
      { header: 'Table', width: 0.9, font: 'serif', style: 'bold', color: [139, 69, 19] },
      { header: 'Title', width: 3.9, justify: true },
      { header: 'Location', width: CONTENT_W - 4.8 }
    ],
    LIST_OF_TABLES.map((t) => [t.number, t.title, t.location]),
    { cellSize: 8.5, padX: 0.065 }
  );

  drawPdfTable(
    'TABLE 0.3: EQUATION INDEX',
    [
      { header: 'Eq.', width: 0.58, font: 'serif', style: 'bold', color: [139, 69, 19] },
      { header: 'Description', width: 3.34, justify: true },
      { header: 'Section', width: 1.36 },
      { header: 'Status', width: CONTENT_W - 5.28, font: 'serif', style: 'bold', color: [139, 69, 19] }
    ],
    EQUATION_INDEX.map((e) => [e.label, e.title, e.section, e.status]),
    { cellSize: 8.1, padX: 0.06 }
  );

  // =========================================================
  // CHAPTERS 1 TO 8 (NEW PAGE PER CHAPTER + INLINE SVG PNGS)
  // =========================================================
  for (const chapter of PAPER_CHAPTERS) {
    startChapterOnNewPage();
    writeRichParagraph(`CHAPTER ${chapter.number}`, {
      font: 'sans',
      size: 9,
      color: [139, 69, 19],
      justify: false,
      afterSpace: 0.06
    });
    drawPlayfairHeadline(chapter.title, 29, 0.18);
    writeRichParagraph(chapter.leadSummary, {
      style: 'italic',
      size: BODY_PT,
      lineHeight: BODY_LINE_IN,
      color: [71, 85, 105],
      afterSpace: 0.24
    });

    for (const sub of chapter.subsections) {
      if (y > MARGIN + 0.25) {
        y += 0.22;
      }
      ensureSpace(1.75);
      writeRichParagraph(`[Status: ${sub.epistemicStatus}]`, {
        font: 'sans',
        size: 8.0,
        color: [139, 69, 19],
        justify: false,
        afterSpace: 0.03
      });
      drawPlayfairHeadline(`${sub.number}  ${sub.title}`, 21, 0.16);

      for (const p of sub.paragraphs) {
        writeRichParagraph(p, { size: BODY_PT, lineHeight: BODY_LINE_IN, afterSpace: 0.12 });
      }

      if (sub.theoremBox) {
        drawFramedTheoremBox(sub.theoremBox);
      }

      if (sub.equation) {
        drawEquationBox(sub.equation.unicodeHtml, sub.equation.label, sub.equation.caption);
      }

      if (sub.workedExample) {
        drawFramedWorkedBox(sub.workedExample);
      }

      if (sub.bulletPoints) {
        for (const bp of sub.bulletPoints) {
          writeRichParagraph(bp.text, {
            prefixBold: `• ${bp.label}: `,
            size: 10.6,
            indent: 0.16,
            hangingIndent: 0.12,
            afterSpace: 0.06
          });
        }
      }

      if (sub.anchorId === 'sec-1-4') {
        drawPdfTable(
          'TABLE 1.1: FOUNDATIONAL POSTULATES OF IGRT (POSTULATES I–VII)',
          [
            { header: 'Postulate', width: 0.95, font: 'serif', style: 'bold', color: [139, 69, 19] },
            { header: 'Name', width: 1.75 },
            { header: 'Formal Statement', width: CONTENT_W - 2.70, justify: true }
          ],
          PAPER_POSTULATES.map((p) => [p.code, p.name, p.statement]),
          { cellSize: 8.5, padX: 0.065 }
        );
      }

      if (sub.anchorId === 'sec-7-1') {
        drawPdfTable(
          'TABLE 7.2: FITTED INPUTS VS. GENUINE PREDICTIONS',
          [
            { header: 'Fitted / Tuned Input', width: 3.10, justify: true },
            { header: 'Genuine Prediction (No Free Parameter)', width: CONTENT_W - 3.10, color: [21, 128, 61], justify: true }
          ],
          TABLE_7_2_FITTED_VS_PREDICTED.map((row) => [row.fittedInput, row.genuinePrediction]),
          { cellSize: 8.5, padX: 0.065 }
        );
        writeRichParagraph(
          'Note: Only the right column counts as evidence. The left column is tuned to match data and does not constitute a prediction.',
          { style: 'italic', size: 8.6, color: [71, 85, 105], justify: true, afterSpace: 0.14 }
        );
      }

      if (sub.anchorId === 'sec-7-3') {
        drawPdfTable(
          'TABLE 7.1: EXPERIMENTAL & OBSERVATIONAL FALSIFICATION PROTOCOLS (P1–P6)',
          [
            { header: 'ID', width: 0.42, font: 'serif', style: 'bold', color: [139, 69, 19] },
            { header: 'Protocol & Facility', width: 1.50, justify: false },
            { header: 'Observable Formula', width: 1.96, font: 'serif', justify: false },
            { header: 'Signal Budget & Falsification', width: CONTENT_W - 3.88, justify: false }
          ],
          AUDITED_TEST_PROTOCOLS.map((pr) => [
            `P${pr.id}`,
            `${pr.name} — ${pr.facility}`,
            { html: pr.formulaHtml },
            `${pr.predictedSignal} (${pr.noiseAndAuditNote}) Falsification: ${pr.falsificationCriterion}`
          ]),
          { cellSize: 8.4, padX: 0.055 }
        );

        drawFramedCoreFalsifierBox(CORE_TIME_MECHANISM_FALSIFIER);

        drawPdfTable(
          'TABLE 7.3: PROTOCOL TIMELINE AND REQUIRED SENSITIVITY (P1–P6)',
          [
            { header: 'Protocol', width: 1.30, font: 'serif', style: 'bold', color: [139, 69, 19] },
            { header: 'Required Sensitivity', width: 1.85, justify: false },
            { header: 'Current State of the Art', width: 1.85, justify: false },
            { header: 'Expected Year', width: CONTENT_W - 5.00, font: 'mono' }
          ],
          TABLE_7_3_PROTOCOL_TIMELINE.map((r) => [
            r.protocol,
            r.requiredSensitivity,
            r.currentStateOfTheArt,
            r.expectedYear
          ]),
          { cellSize: 8.3, padX: 0.06 }
        );
      }

      if (sub.anchorId === 'sec-8-1') {
        drawPdfTable(
          'TABLE 8.1: COMPARISON OF IGRT WITH STRING THEORY & SIX QUANTUM-GRAVITY APPROACHES',
          [
            { header: 'Framework', width: 0.93, justify: false },
            { header: 'Key Mechanism', width: 1.12, justify: false },
            { header: '4D Lorentzian', width: 1.02, justify: false },
            { header: 'WDW Unfreezing', width: 1.20, justify: false },
            { header: 'Singularity Status', width: 1.00, justify: false },
            { header: 'Open Limitations', width: CONTENT_W - 5.27, justify: false }
          ],
          FRAMEWORKS_COMPARISON_TABLE.map((row) => [
            row.framework,
            row.keyMechanism,
            row.preserves4DLorentzian,
            row.wdwUnfreezing,
            row.singularityStatus,
            row.openLimitations
          ]),
          { cellSize: 7.5, padX: 0.05 }
        );

        drawPdfTable(
          'TABLE 8.2: SUMMARY OF SEVEN CORE FORMAL RESULTS',
          [
            { header: 'Result', width: 1.65 },
            { header: 'Domain', width: 1.15 },
            { header: 'Status', width: 0.95, font: 'sans', style: 'normal', color: [139, 69, 19] },
            { header: 'Summary', width: CONTENT_W - 3.75, justify: true }
          ],
          AUDITED_CLOSURE_THEOREMS.map((t) => [t.title, t.domain, t.status, t.summary]),
          { cellSize: 8.3, padX: 0.06 }
        );

        drawPdfTable(
          'TABLE 8.3: EPISTEMIC CLAIM, STATUS, QUANTITATIVE EVIDENCE & EVASION LEDGER',
          [
            { header: 'Claim', width: 1.45, justify: false },
            { header: 'Status', width: 0.95, font: 'sans', style: 'normal', color: [139, 69, 19] },
            { header: 'Quantitative Derivation / Evidence', width: 2.05, justify: false },
            { header: 'Free / Evasion Parameters', width: CONTENT_W - 4.45, justify: false }
          ],
          CLAIM_EVIDENCE_LEDGER.map((row) => [
            row.claim,
            row.status,
            row.evidenceAndDerivation,
            row.evasionOrFreeParameter
          ]),
          { cellSize: 8.4, padX: 0.055 }
        );
      }

      if (sub.anchorId === 'sec-8-2') {
        drawPdfTable(
          'TABLE 8.4: MINIMAL ACTIVE PARAMETER BUDGET & INFORMATION CRITERION (k_eff = 2, ΔAIC = −1.84, Δln Z = +1.42)',
          [
            { header: 'Scalar Field', width: 1.95, justify: false },
            { header: 'Free Parameters', width: CONTENT_W - 2.65, justify: false },
            { header: 'Count', width: 0.70, font: 'mono', color: [139, 69, 19] }
          ],
          TABLE_8_4_SCALAR_BUDGET.map((row) => [row.scalar, row.freeParameters, row.count]),
          { cellSize: 8.5, padX: 0.06 }
        );
      }

      // Embed archival illustration plates positioned after this subsection (with space above descriptions)
      const matchedPlates = PAPER_ILLUSTRATIONS.filter((p) => p.afterSubsectionAnchor === sub.anchorId);
      for (const plate of matchedPlates) {
        const pImg = plateImages.get(plate.id);
        if (pImg) {
          ensureSpace(pImg.heightIn + 1.25);
          const imgX = MARGIN + (CONTENT_W - pImg.widthIn) / 2;
          doc.addImage(pImg.dataUrl, pImg.format, imgX, y, pImg.widthIn, pImg.heightIn);
          doc.setDrawColor(214, 202, 190);
          doc.setLineWidth(0.01);
          doc.rect(imgX, y, pImg.widthIn, pImg.heightIn);
          y += pImg.heightIn + 0.30;
          doc.setDrawColor(226, 217, 200);
          doc.setLineWidth(0.006);
          doc.line(MARGIN, y - 0.14, PAGE_W - MARGIN, y - 0.14);
        }
        writeRichParagraph(plate.caption, {
          prefixBold: `Plate ${plate.roman}: ${plate.title} — `,
          style: 'normal',
          size: 9.8,
          color: [71, 85, 105],
          justify: true,
          afterSpace: 0.22
        });
      }

      // Embed rasterized inline SVG figures belonging after this subsection
      const matchedFigs = PAPER_FIGURES.filter((f) => f.afterSubsectionAnchor === sub.anchorId);
      for (const fig of matchedFigs) {
        const img = figureImages.get(fig.id);
        if (img) {
          ensureSpace(img.heightIn + 1.15);
          const imgX = MARGIN + (CONTENT_W - img.widthIn) / 2;
          doc.addImage(img.dataUrl, 'PNG', imgX, y, img.widthIn, img.heightIn);
          doc.setDrawColor(214, 202, 190);
          doc.setLineWidth(0.008);
          doc.rect(imgX, y, img.widthIn, img.heightIn);
          y += img.heightIn + 0.30;
          doc.setDrawColor(226, 217, 200);
          doc.setLineWidth(0.006);
          doc.line(MARGIN, y - 0.14, PAGE_W - MARGIN, y - 0.14);
        }
        writeRichParagraph(fig.caption, {
          style: 'normal',
          size: 9.8,
          color: [71, 85, 105],
          justify: true,
          afterSpace: 0.20
        });
      }

      if (y > MARGIN + 0.15) {
        y += 0.14;
      }
    }
  }

  // =========================================================
  // APPENDICES A–P
  // =========================================================
  startChapterOnNewPage();
  drawPlayfairHeadline('Appendices A–P: Derivations, Units & Technical FAQ', 28, 0.18);
  for (const app of PAPER_APPENDICES) {
    if (y > MARGIN + 0.25) {
      y += 0.18;
    }
    ensureSpace(1.5);
    writeRichParagraph(`[Status: ${app.status}]`, {
      font: 'sans',
      size: 8.0,
      color: [139, 69, 19],
      justify: false,
      afterSpace: 0.03
    });
    drawPlayfairHeadline(`Appendix ${app.letter}. ${app.title}`, 20, 0.12);
    writeRichParagraph(app.theoremStatement, {
      prefixBold: `Statement (${app.tag}): `,
      style: 'italic',
      size: 10.6,
      afterSpace: 0.1
    });
    for (const para of app.proofParagraphs) {
      writeRichParagraph(para, { size: 10.6, afterSpace: 0.1 });
    }
    for (const eq of app.equations) {
      drawEquationBox(eq.unicodeHtml, eq.label);
    }
    if (app.letter === 'H') {
      drawPdfTable(
        'TABLE H.1: COMPLETE NUMERICAL & PARAMETER CLOSURE SUMMARY',
        [
          { header: 'Parameter / Scale', width: 1.22, justify: false },
          { header: 'Defining Relation', width: 2.00, font: 'serif', justify: false },
          { header: 'Numerical Value (Units Shown)', width: 1.56, font: 'serif', justify: false },
          { header: 'Regime / Protocol', width: CONTENT_W - 4.78, justify: false }
        ],
        TABLE_H1_CLOSURES.map((row) => [row.parameter, row.formula, row.value, row.regime]),
        { cellSize: 8.4, padX: 0.055 }
      );
      ensureSpace(0.45);
      doc.setFillColor(250, 246, 238);
      doc.setDrawColor(214, 202, 190);
      doc.setLineWidth(0.009);
      doc.rect(MARGIN, y, CONTENT_W, 0.36, 'FD');
      doc.setTextColor(139, 69, 19);
      activeInkRgb = [139, 69, 19];
      drawTextMixed('H11 PREREGISTRATION DIGEST (SHA-256):', MARGIN + 0.08, y + 0.145, 'sans', 'normal', 7.4);
      doc.setTextColor(15, 23, 42);
      activeInkRgb = [15, 23, 42];
      drawTextMixed(H11_PREREG_SHA256, MARGIN + 0.08, y + 0.285, 'mono', 'normal', 8.1);
      y += 0.50;
    }
    if (app.letter === 'I') {
      drawPdfTable(
        'TABLE I.1: REVISION HISTORY (EDITIONS H6 → H7 → H8 → H9 → H10 → H11)',
        [
          { header: 'Edition', width: 1.12, font: 'serif', style: 'bold', color: [139, 69, 19] },
          { header: 'Scope', width: 1.13, justify: true },
          { header: 'Physics & Numerical Closures', width: 2.25, justify: true },
          { header: 'Editorial & Verification Closures', width: CONTENT_W - 4.50, justify: true }
        ],
        REVISION_HISTORY_TABLE.map((rev) => [
          rev.edition,
          rev.scope,
          rev.physicsAndNumericalClosures,
          rev.editorialAndVerificationClosures
        ]),
        { cellSize: 7.9, padX: 0.055 }
      );
      drawPdfTable(
        'TABLE I.2: FORMAL RESPONSE TO REVIEWERS MATRIX',
        [
          { header: 'Topic / ID', width: 1.05, font: 'serif', style: 'bold', color: [139, 69, 19] },
          { header: 'Referee Concern Summary', width: 1.50, justify: true },
          { header: 'Resolution & Exact Monograph Location', width: CONTENT_W - 3.50, justify: true },
          { header: 'Status', width: 0.95, font: 'serif', style: 'normal', color: [21, 128, 61] }
        ],
        RESPONSE_TO_REVIEWERS.map((resp) => [
          resp.issueId,
          resp.concernSummary,
          resp.resolutionAndLocation,
          resp.status
        ]),
        { cellSize: 7.9, padX: 0.055 }
      );
      writeRichParagraph('KNOWN OPEN PROBLEMS (OP-1 TO OP-5)', {
        font: 'sans',
        size: 9.0,
        color: [139, 69, 19],
        justify: false,
        afterSpace: 0.08
      });
      for (const op of KNOWN_OPEN_PROBLEMS) {
        writeRichParagraph(op.description, {
          prefixBold: `• ${op.code} — ${op.topic}: `,
          size: 10.1,
          indent: 0.14,
          hangingIndent: 0.12,
          afterSpace: 0.06
        });
      }
    }
    if (app.letter === 'M') {
      drawPdfTable(
        'TABLE M.1: STATUS RECLASSIFICATION MATRIX (TABLE 0.3 AUDIT)',
        [
          { header: 'Equation', width: 1.55, justify: false },
          { header: 'Old Status', width: 0.95, font: 'mono', color: [71, 85, 105] },
          { header: 'New Status', width: 1.35, font: 'mono', color: [139, 69, 19] },
          { header: 'Justification', width: CONTENT_W - 3.85, justify: true }
        ],
        APPENDIX_M_STATUS_TABLE.map((row) => [
          row.equation,
          row.oldStatus,
          row.newStatus,
          row.justification
        ]),
        { cellSize: 8.2, padX: 0.055 }
      );
    }
    y += 0.12;
  }

  // =========================================================
  // GOVERNANCE DISCLOSURES
  // =========================================================
  startChapterOnNewPage();
  drawPlayfairHeadline('Governance Disclosures', 28, 0.18);
  for (const c of ETHICS_AND_GOVERNANCE.creditRoles) {
    writeRichParagraph(c.roles, { prefixBold: `${c.author}: `, size: 10.4, afterSpace: 0.06 });
  }
  writeRichParagraph(ETHICS_AND_GOVERNANCE.conflictsOfInterest, {
    prefixBold: 'Conflicts of Interest: ',
    size: 10.4
  });
  writeRichParagraph(ETHICS_AND_GOVERNANCE.fundingStatement, {
    prefixBold: 'Funding: ',
    size: 10.4
  });
  writeRichParagraph(ETHICS_AND_GOVERNANCE.dataAndCodeAvailability, {
    prefixBold: 'Data & Code Availability: ',
    size: 10.4,
    afterSpace: 0.16
  });

  // =========================================================
  // CITED VERSION & REFERENCES [1]–[109] (NO ORCIDs IN REFERENCES)
  // =========================================================
  startChapterOnNewPage();
  drawPlayfairHeadline('References', 28, 0.16);

  writeRichParagraph('HOW TO CITE (CITED VERSION — APA & BIBTEX)', {
    font: 'sans',
    size: 8.5,
    color: [139, 69, 19],
    justify: false,
    afterSpace: 0.05
  });
  writeRichParagraph(PAPER_APA, {
    prefixBold: 'APA: ',
    size: 9,
    lineHeight: (9 * 1.45) / 72,
    color: [30, 41, 59],
    afterSpace: 0.06
  });
  writeRichParagraph(PAPER_BIBTEX, {
    font: 'mono',
    size: 8.0,
    lineHeight: (8.0 * 1.4) / 72,
    color: [51, 65, 85],
    justify: false,
    preformatted: true,
    afterSpace: 0.12
  });
  drawRule();

  for (const r of PAPER_REFERENCES) {
    const idPart = r.identifier ? ` ${r.identifier}.` : '';
    writeRichParagraph(`${r.authors} (${r.year}). "${r.title}." ${r.venue}.${idPart}`, {
      prefixBold: `[${r.id}] `,
      size: 8.9,
      lineHeight: (8.9 * 1.44) / 72,
      hangingIndent: 0.24,
      afterSpace: 0.045
    });
  }

  // =========================================================
  // RUNNING HEADERS & FOOTERS WITH ARCHIVAL HAIRLINE RULES
  // =========================================================
  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    doc.setDrawColor(214, 202, 190);
    doc.setLineWidth(0.006);
    doc.setTextColor(110, 120, 138);
    activeInkRgb = [110, 120, 138];
    if (p > 1) {
      const headerTxt = 'Information-Geometric Resonant Time (IGRT) — Harmonized Research Monograph';
      const hw = measureTextMixed(headerTxt, 'serif', 'italic', 8.4);
      drawTextMixed(headerTxt, (PAGE_W - hw) / 2, 0.48, 'serif', 'italic', 8.4);
      doc.line(MARGIN, 0.58, PAGE_W - MARGIN, 0.58);
    }
    doc.line(MARGIN, PAGE_H - 0.58, PAGE_W - MARGIN, PAGE_H - 0.58);
    const footerTxt = `Page ${p} of ${totalPages}`;
    const fw = measureTextMixed(footerTxt, 'mono', 'normal', 8.4);
    drawTextMixed(footerTxt, (PAGE_W - fw) / 2, PAGE_H - 0.42, 'mono', 'normal', 8.4);
  }

  doc.save('IGRT_Harmonized_Monograph_Bulaquena_Tassan_Lauret.pdf');
}

