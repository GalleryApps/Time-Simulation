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
 * - Figures: Rasterizes all 8 inline SVG diagrams with resolved <tspan> sub/superscripts
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
  PAPER_REFERENCES
} from '../types/harmonizedPaperData';
import {
  PLAIN_LANGUAGE_SUMMARY,
  SHORTENED_ABSTRACT,
  SCOPE_AND_NON_CLAIMS,
  LIST_OF_SYMBOLS,
  ACRONYMS_GLOSSARY,
  LIST_OF_TABLES,
  DIMENSIONAL_ANALYSIS_TABLE,
  EQUATION_INDEX,
  FRAMEWORKS_COMPARISON_TABLE,
  ETHICS_AND_GOVERNANCE
} from '../types/harmonizedPaperApparatus';
import { PAPER_FIGURES } from '../components/HarmonizedPaperFigures';
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

async function fetchFontBase64(url: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch font ${url}: ${res.status}`);
  const buf = await res.arrayBuffer();
  return arrayBufferToBase64(buf);
}

async function loadEmbeddedPdfFonts(): Promise<LoadedPdfFonts | null> {
  if (typeof fetch === 'undefined') return null;
  if (!cachedFontsPromise) {
    cachedFontsPromise = (async () => {
      try {
        const [serifRegular, serifBold, serifItalic, sansRegular, monoRegular] = await Promise.all([
          fetchFontBase64('/fonts/DejaVuSerif.ttf'),
          fetchFontBase64('/fonts/DejaVuSerif-Bold.ttf'),
          fetchFontBase64('/fonts/NotoSerif-Italic.ttf'),
          fetchFontBase64('/fonts/DejaVuSans.ttf'),
          fetchFontBase64('/fonts/DejaVuSansMono.ttf')
        ]);
        return { serifRegular, serifBold, serifItalic, sansRegular, monoRegular };
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
  '\u226A', // ≪
  '\u226B', // ≫
  '\u2272', // ≲
  '\u227A'  // ≺
]);

const SERIF_BOLD_EXTRA_MISSING = new Set([
  '\u2102' // ℂ
]);

const NOTO_ITALIC_MISSING = new Set([
  '\u20D7', '\u221A', '\u2212', '\u2261', '\u2211', '\u2208', '\u2192',
  '\u2207', '\u2264', '\u2202', '\u27E9', '\u2265', '\u27E8', '\u2248',
  '\u25A1', '\u222B', '\u226A', '\u221E', '\u227A', '\u21D2', '\u2297',
  '\u21A6', '\u222A', '\u221D', '\u2272', '\u2299', '\u226B', '\u2500'
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
  hasUnicodeFonts: boolean
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
  hasUnicodeFonts: boolean
): FontChunk[] {
  const clusters = splitGraphemeClusters(text);
  const chunks: FontChunk[] = [];
  for (const cl of clusters) {
    const [fontName, fontStyle] = resolveFontForCluster(cl, reqFamily, reqStyle, hasUnicodeFonts);
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
): Array<{ kind: 'space' } | { kind: 'run'; text: string; size: number; dy: number; family: FontFamilyKey; style: FontStyleKey }> {
  const tokens: Array<
    | { kind: 'space' }
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
        const parts = seg.text.split(/([ \t]+)/);
        for (const p of parts) {
          if (!p) continue;
          if (/^[ \t]+$/.test(p)) {
            tokens.push({ kind: 'space' });
          } else {
            tokens.push({ kind: 'run', text: p, size: baseSize, dy: baseDy, family: baseFamily, style });
          }
        }
      }
    } else if (seg.type === 'sub') {
      const subSize = Math.max(5.5, baseSize * 0.72);
      const subDy = baseDy + 0.21 * (baseSize / 72);
      tokens.push(
        ...flattenSegmentsToTokens(seg.children, subSize, subDy, baseFamily, baseItalic, baseBold, true)
      );
    } else if (seg.type === 'sup') {
      const supSize = Math.max(5.5, baseSize * 0.72);
      const supDy = baseDy - 0.30 * (baseSize / 72);
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

interface CanvasWord {
  runs: CanvasStyledRun[];
  width: number;
}

function flattenSegmentsForCanvas(
  segments: MathSegment[],
  basePx: number,
  baseDyPx: number,
  baseItalic: boolean,
  insideScript: boolean
): Array<{ kind: 'space' } | { kind: 'run'; text: string; fontPx: number; dyPx: number; italic: boolean }> {
  const out: Array<
    | { kind: 'space' }
    | { kind: 'run'; text: string; fontPx: number; dyPx: number; italic: boolean }
  > = [];

  for (const seg of segments) {
    if (seg.type === 'text') {
      if (insideScript) {
        if (seg.text) {
          out.push({ kind: 'run', text: seg.text, fontPx: basePx, dyPx: baseDyPx, italic: baseItalic });
        }
      } else {
        const parts = seg.text.split(/([ \t\n]+)/);
        for (const p of parts) {
          if (!p) continue;
          if (/^[ \t\n]+$/.test(p)) {
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
          Math.max(9, basePx * 0.72),
          baseDyPx + basePx * 0.24,
          baseItalic,
          true
        )
      );
    } else if (seg.type === 'sup') {
      out.push(
        ...flattenSegmentsForCanvas(
          seg.children,
          Math.max(9, basePx * 0.72),
          baseDyPx - basePx * 0.34,
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
): { dataUrl: string; widthIn: number; heightIn: number } | null {
  if (typeof document === 'undefined') return null;

  const maxWidthPx = maxWidthInches * dpi;
  const lineH = Math.round(fontPx * lineHeightMult);

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const setCanvasFont = (c: CanvasRenderingContext2D, px: number, italic: boolean) => {
    c.font = `${italic ? 'italic ' : ''}400 ${px}px ${fontFamilyCss}`;
  };

  const flat = flattenSegmentsForCanvas(segments, fontPx, 0, false, false);
  const words: CanvasWord[] = [];
  let curRuns: CanvasStyledRun[] = [];

  for (const item of flat) {
    if (item.kind === 'space') {
      if (curRuns.length > 0) {
        let w = 0;
        for (const r of curRuns) {
          setCanvasFont(ctx, r.fontPx, r.italic);
          w += ctx.measureText(r.text).width;
        }
        words.push({ runs: curRuns, width: w });
        curRuns = [];
      }
    } else {
      curRuns.push({ text: item.text, fontPx: item.fontPx, dyPx: item.dyPx, italic: item.italic });
    }
  }
  if (curRuns.length > 0) {
    let w = 0;
    for (const r of curRuns) {
      setCanvasFont(ctx, r.fontPx, r.italic);
      w += ctx.measureText(r.text).width;
    }
    words.push({ runs: curRuns, width: w });
  }

  setCanvasFont(ctx, fontPx, false);
  const spaceW = ctx.measureText(' ').width;
  const usableW = align === 'center' ? maxWidthPx - 28 : maxWidthPx;

  const lines: Array<{ words: CanvasWord[]; width: number }> = [];
  let curLine: CanvasWord[] = [];
  let curLineW = 0;

  for (const w of words) {
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
  if (lines.length === 0) {
    lines.push({ words: [], width: 0 });
  }

  const canvasW =
    align === 'center'
      ? Math.ceil(Math.min(maxWidthPx, Math.max(160, Math.max(...lines.map((l) => l.width)) + 32)))
      : Math.ceil(maxWidthPx);
  const padTop = Math.round(fontPx * 0.25);
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
      for (const r of word.runs) {
        setCanvasFont(drawCtx, r.fontPx, r.italic);
        drawCtx.fillText(r.text, x, baseY + r.dyPx);
        x += drawCtx.measureText(r.text).width;
      }
    });
  });

  return {
    dataUrl: canvas.toDataURL('image/png'),
    widthIn: canvasW / dpi,
    heightIn: canvasH / dpi
  };
}

function renderUnicodeEquationPng(
  unicodeHtml: string,
  maxWidthInches: number
): { dataUrl: string; widthIn: number; heightIn: number } | null {
  const safeHtml = pdfBmpSafeUnicode(unicodeHtml);
  const segs = parseHtmlMathSegments(safeHtml);
  return renderRichSegmentsCanvasPng(
    segs,
    'Georgia, "DejaVu Serif", "Times New Roman", serif',
    28,
    maxWidthInches,
    260,
    'center',
    '#0F172A',
    1.52
  );
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
    '"Playfair Display", Georgia, serif',
    fontPx * 2.5,
    maxWidthInches,
    96 * 2.5,
    'left',
    color,
    1.28
  );
}

async function rasterizeSvgToPng(
  svgMarkup: string,
  targetWidthInches: number
): Promise<{ dataUrl: string; widthIn: number; heightIn: number } | null> {
  if (typeof document === 'undefined') return null;
  return new Promise((resolve) => {
    try {
      const formattedSvg = formatSvgMathMarkup(pdfBmpSafeUnicode(svgMarkup));
      const vbMatch = formattedSvg.match(/viewBox="0 0 (\d+) (\d+)"/);
      const vbW = vbMatch ? Number(vbMatch[1]) : 860;
      const vbH = vbMatch ? Number(vbMatch[2]) : 340;
      const aspect = vbH / vbW;

      const svgBlob = new Blob([formattedSvg], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);
      const img = new Image();
      img.onload = () => {
        const pxW = 1400;
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

  const measureTextMixed = (
    text: string,
    reqFamily: FontFamilyKey,
    reqStyle: FontStyleKey,
    size: number
  ): number => {
    const chunks = segmentByFont(text, reqFamily, reqStyle, hasUnicodeFonts);
    let total = 0;
    for (const c of chunks) {
      doc.setFont(c.fontName, c.fontStyle);
      doc.setFontSize(size);
      total += doc.getTextWidth(c.text);
    }
    return total;
  };

  const drawTextMixed = (
    text: string,
    x: number,
    baselineY: number,
    reqFamily: FontFamilyKey,
    reqStyle: FontStyleKey,
    size: number
  ): number => {
    const chunks = segmentByFont(text, reqFamily, reqStyle, hasUnicodeFonts);
    let cx = x;
    for (const c of chunks) {
      doc.setFont(c.fontName, c.fontStyle);
      doc.setFontSize(size);
      doc.text(c.text, cx, baselineY);
      cx += doc.getTextWidth(c.text);
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

    const words: InlineWord[] = [];
    let curRuns: InlineRun[] = [];

    const flushWord = () => {
      if (curRuns.length === 0) return;
      let w = 0;
      for (const r of curRuns) {
        r.width = measureTextMixed(r.text, r.family, r.style, r.size);
        w += r.width;
      }
      words.push({ runs: curRuns, width: w });
      curRuns = [];
    };

    for (const tok of flat) {
      if (tok.kind === 'space') {
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

    // Split any exceptionally long single token (e.g. URL/identifier) that exceeds availWidthRest
    const safeWords: InlineWord[] = [];
    for (const word of words) {
      if (word.width <= availWidthRest || word.runs.length > 1) {
        safeWords.push(word);
      } else {
        const single = word.runs[0];
        let buf = '';
        for (const ch of single.text) {
          const test = buf + ch;
          if (measureTextMixed(test, single.family, single.style, single.size) > availWidthRest && buf) {
            const w = measureTextMixed(buf, single.family, single.style, single.size);
            safeWords.push({ runs: [{ ...single, text: buf, width: w }], width: w });
            buf = ch;
          } else {
            buf = test;
          }
        }
        if (buf) {
          const w = measureTextMixed(buf, single.family, single.style, single.size);
          safeWords.push({ runs: [{ ...single, text: buf, width: w }], width: w });
        }
      }
    }

    const lines: InlineWord[][] = [];
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

    if (opts.preformatted) {
      const rawLines = pdfBmpSafeUnicode(text).split('\n');
      for (const rl of rawLines) {
        ensureSpace(lineHeight + 0.03);
        drawTextMixed(rl, MARGIN + indent, y, family, style, size);
        y += lineHeight;
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
        // Wrap prefix segments in an italic-or-bold marker? Render prefixBold explicitly via bold runs
        const flatPrefix = flattenSegmentsToTokens(prefixSegs, size, 0, family, false, true, false);
        const flatBody = flattenSegmentsToTokens(segs, size, 0, family, style === 'italic', style === 'bold', false);
        void flatPrefix;
        void flatBody;
        // Easier & exact: build tokens with prefixBold bolded inline
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
              drawTextMixed(run.text, x, y + run.dy, run.family, run.style, run.size);
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
            drawTextMixed(run.text, x, y + run.dy, run.family, run.style, run.size);
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
      ensureSpace(0.5);
      writeRichParagraph(text, {
        font: 'serif',
        style: 'normal',
        size: (fontPx * 72) / 96,
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
              drawTextMixed(run.text, x, cy + run.dy, run.family, run.style, run.size);
              x += run.width;
            }
            if (wi < lineWords.length - 1) x += gap;
          }
          cy += capLineH;
        }
      }

      y += boxH + 0.2;
    } else {
      writeRichParagraph(unicodeHtml.replace(/<[^>]+>/g, ''), {
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
    color?: [number, number, number];
    justify?: boolean;
  }

  type PdfTableCell = string | { html: string };

  const drawPdfTable = (
    titleLabel: string,
    columns: PdfTableColumn[],
    rows: PdfTableCell[][],
    opts: { cellSize?: number } = {}
  ) => {
    const cellSize = opts.cellSize ?? 8.6;
    const cellLineH = (cellSize * 1.42) / 72;
    const padX = 0.08;
    const padY = 0.065;
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
        let ly = y + padY + headerSize / 72;
        for (const lineWords of headerLinesPerCol[ci].lines) {
          let lx = cx + padX;
          for (let wi = 0; wi < lineWords.length; wi++) {
            if (wi > 0) lx += headerLinesPerCol[ci].spaceWidth;
            for (const run of lineWords[wi].runs) {
              drawTextMixed(run.text, lx, ly + run.dy, run.family, run.style, run.size);
              lx += run.width;
            }
          }
          ly += headerLineH;
        }
        cx += col.width;
      }
      y += maxH;
    };

    ensureSpace(0.9);
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
        return buildWordLines(segs, col.width - 2 * padX, col.width - 2 * padX, col.font ?? 'serif', 'normal', cellSize);
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
        doc.setTextColor(colColor[0], colColor[1], colColor[2]);

        const cellRes = prepared[ci];
        const availW = col.width - 2 * padX;
        let ly = y + padY + cellSize / 72;

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
              drawTextMixed(run.text, lx, ly + run.dy, run.family, run.style, run.size);
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
    doc.setTextColor(139, 69, 19);
    drawTextMixed(`FORMAL STATEMENT  ·  ${theoremBox.number.toUpperCase()}`, MARGIN + boxPad, cy, 'sans', 'normal', 8);
    cy += 0.08;
    doc.setDrawColor(226, 217, 200);
    doc.line(MARGIN + boxPad, cy, PAGE_W - MARGIN - boxPad, cy);
    cy += 0.15;

    doc.setTextColor(15, 23, 42);
    for (const lw of titleRes.lines) {
      let lx = MARGIN + boxPad;
      for (let wi = 0; wi < lw.length; wi++) {
        if (wi > 0) lx += titleRes.spaceWidth;
        for (const r of lw[wi].runs) {
          drawTextMixed(r.text, lx, cy + r.dy, r.family, r.style, r.size);
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
            drawTextMixed(r.text, lx, cy + r.dy, r.family, r.style, r.size);
            lx += r.width;
          }
          if (wi < lineWords.length - 1) lx += gap;
        }
        cy += bodyLineH;
      }
    };

    doc.setTextColor(24, 34, 56);
    drawJustifiedBlock(hypRes);
    cy += 0.08;
    drawJustifiedBlock(stmtRes);

    y += totalH + 0.16;
  };

  // Pre-rasterize all 8 SVG diagrams
  const figureImages = new Map<number, { dataUrl: string; widthIn: number; heightIn: number }>();
  for (const fig of PAPER_FIGURES) {
    const png = await rasterizeSvgToPng(fig.svgMarkup, CONTENT_W - 0.1);
    if (png) figureImages.set(fig.id, png);
  }

  // =========================================================
  // PAGE 1: MASTHEAD, TITLE, RESEARCH TEAM & ABSTRACT
  // =========================================================
  writeRichParagraph(`${PAPER_META.publicationStatus}  |  ${PAPER_META.edition}`, {
    font: 'sans',
    size: 8.5,
    color: [139, 69, 19],
    justify: false,
    afterSpace: 0.06
  });

  drawRule([15, 23, 42], 0.015);
  drawPlayfairHeadline(PAPER_META.title, 32, 0.14);

  writeRichParagraph(
    `${PAPER_META.eprint}   |   ${PAPER_META.doi}\nPhySH: ${PAPER_META.physh}\nMSC 2020: ${PAPER_META.msc2020}`,
    { font: 'mono', size: 8.4, color: [100, 116, 139], justify: false, afterSpace: 0.14 }
  );

  for (const a of PAPER_META.authors) {
    writeRichParagraph(`${a.name} (ORCID: https://orcid.org/${a.orcid}) — ${a.affiliation}`, {
      font: 'serif',
      size: 9.8,
      color: [15, 23, 42],
      justify: true,
      afterSpace: 0.05
    });
  }

  drawRule([214, 202, 190], 0.01);

  writeRichParagraph('ABSTRACT', {
    font: 'sans',
    size: 9.5,
    color: [139, 69, 19],
    justify: false,
    afterSpace: 0.08
  });

  for (const p of SHORTENED_ABSTRACT.paragraphs) {
    writeRichParagraph(p, { size: 10.6, lineHeight: (10.6 * 1.48) / 72, afterSpace: 0.09 });
  }
  drawEquationBox(
    MASTER_EQUATION_ABSTRACT.unicodeHtml,
    MASTER_EQUATION_ABSTRACT.label,
    MASTER_EQUATION_ABSTRACT.caption
  );

  writeRichParagraph(PAPER_META.keywords.join(' · '), {
    prefixBold: 'Keywords: ',
    style: 'italic',
    size: 9.4,
    color: [71, 85, 105],
    justify: true,
    afterSpace: 0.08
  });

  // =========================================================
  // PAGE 2: DEDICATED TABLE OF CONTENTS
  // =========================================================
  startChapterOnNewPage();
  drawPlayfairHeadline('Table of Contents', 30, 0.16);
  drawRule([214, 202, 190], 0.008);
  writeRichParagraph(
    'Summary, Symbols & Indices: Summary · Scope & Closures · Symbols · Acronyms · Dimensional Closure · Equation Index',
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
  writeRichParagraph('Appendices A–J: Formal Theorems, CODATA Units, Derivations & Technical FAQ', {
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
      { header: 'Symbol', width: 1.05, font: 'mono', color: [139, 69, 19] },
      { header: 'Definition', width: 2.15, justify: true },
      { header: 'Units', width: 1.05, font: 'mono' },
      { header: 'Disambiguation Rule', width: CONTENT_W - 4.25, justify: true }
    ],
    LIST_OF_SYMBOLS.map((sym) => [sym.symbol, sym.name, sym.units, sym.collisionNote]),
    { cellSize: 8.2 }
  );

  drawPdfTable(
    'ACRONYMS GLOSSARY',
    [
      { header: 'Acronym', width: 0.85, font: 'mono', color: [139, 69, 19] },
      { header: 'Expansion', width: 2.1, justify: true },
      { header: 'Operational Definition', width: CONTENT_W - 2.95, justify: true }
    ],
    ACRONYMS_GLOSSARY.map((a) => [a.term, a.expansion, a.definition]),
    { cellSize: 8.3 }
  );

  drawPdfTable(
    'TABLE 0.2: DIMENSIONAL-ANALYSIS CLOSURE',
    [
      { header: 'Quantity', width: 1.35, justify: false },
      { header: 'Expression', width: 1.7, font: 'mono' },
      { header: 'SI / Natural Units', width: 1.25 },
      { header: 'Derivation & Tally Note', width: CONTENT_W - 4.3, justify: true }
    ],
    DIMENSIONAL_ANALYSIS_TABLE.map((d) => [d.quantity, d.expression, `${d.siUnits} / ${d.naturalUnits}`, d.auditNote]),
    { cellSize: 8.0 }
  );

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
      { header: 'Table', width: 0.9, font: 'mono', color: [139, 69, 19] },
      { header: 'Title', width: 3.9, justify: true },
      { header: 'Location', width: CONTENT_W - 4.8 }
    ],
    LIST_OF_TABLES.map((t) => [t.number, t.title, t.location]),
    { cellSize: 8.5 }
  );

  drawPdfTable(
    'TABLE 0.3: COMPLETE EQUATION INDEX',
    [
      { header: 'Eq.', width: 0.75, font: 'mono', color: [139, 69, 19] },
      { header: 'Description', width: 4.15, justify: true },
      { header: 'Section', width: CONTENT_W - 4.9 }
    ],
    EQUATION_INDEX.map((e) => [e.label, e.title, e.section]),
    { cellSize: 8.3 }
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
    drawPlayfairHeadline(chapter.title, 29, 0.14);
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
      ensureSpace(1.1);
      drawPlayfairHeadline(`${sub.number}  ${sub.title}`, 21, 0.14);

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
        ensureSpace(0.9);
        drawRule([214, 202, 190], 0.008);
        writeRichParagraph(`WORKED EXAMPLE — ${sub.workedExample.title}`, {
          font: 'sans',
          size: 8.8,
          color: [21, 128, 61],
          justify: false,
          afterSpace: 0.05
        });
        writeRichParagraph(sub.workedExample.setup, { size: 10.3, indent: 0.12, afterSpace: 0.05 });
        for (const st of sub.workedExample.steps) {
          writeRichParagraph(st, { size: 10.2, indent: 0.2, afterSpace: 0.05 });
        }
        drawEquationBox(
          sub.workedExample.resultEquation.unicodeHtml,
          sub.workedExample.resultEquation.label,
          sub.workedExample.resultEquation.caption
        );
        writeRichParagraph(sub.workedExample.takeaway, {
          prefixBold: 'Result: ',
          size: 10.3,
          indent: 0.12,
          afterSpace: 0.08
        });
        drawRule([214, 202, 190], 0.008);
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
          'TABLE 1.1: FOUNDATIONAL PRINCIPLES (AXIOMS I–VII)',
          [
            { header: 'Axiom', width: 0.85, font: 'mono', color: [139, 69, 19] },
            { header: 'Name', width: 1.8 },
            { header: 'Formal Statement', width: CONTENT_W - 2.65, justify: true }
          ],
          PAPER_POSTULATES.map((p) => [p.code, p.name, p.statement]),
          { cellSize: 8.5 }
        );
      }

      if (sub.anchorId === 'sec-7-3') {
        drawPdfTable(
          'TABLE 7.1: EXPERIMENTAL & OBSERVATIONAL FALSIFICATION PROTOCOLS (P1–P6)',
          [
            { header: 'ID', width: 0.42, font: 'mono', color: [139, 69, 19] },
            { header: 'Protocol & Facility', width: 1.55 },
            { header: 'Observable Formula', width: 1.9, font: 'mono' },
            { header: 'Signal Budget & Falsification', width: CONTENT_W - 3.87, justify: true }
          ],
          AUDITED_TEST_PROTOCOLS.map((pr) => [
            `P${pr.id}`,
            `${pr.name} — ${pr.facility}`,
            { html: pr.formulaHtml },
            `${pr.predictedSignal} (${pr.noiseAndAuditNote}) Falsification: ${pr.falsificationCriterion}`
          ]),
          { cellSize: 8.1 }
        );
      }

      if (sub.anchorId === 'sec-8-1') {
        drawPdfTable(
          'TABLE 8.1: COMPARISON OF IGRT WITH STRING THEORY & SIX QUANTUM-GRAVITY APPROACHES',
          [
            { header: 'Framework', width: 1.3 },
            { header: 'Mechanism', width: 1.55, justify: true },
            { header: '4D Lorentzian', width: 1.05 },
            { header: 'WDW Unfreezing', width: 1.05 },
            { header: 'Open Limitations', width: CONTENT_W - 4.95, justify: true }
          ],
          FRAMEWORKS_COMPARISON_TABLE.map((row) => [
            row.framework,
            row.keyMechanism,
            row.preserves4DLorentzian,
            row.wdwUnfreezing,
            row.openLimitations
          ]),
          { cellSize: 7.9 }
        );

        drawPdfTable(
          'TABLE 8.2: SUMMARY OF CORE FORMAL RESULTS',
          [
            { header: 'Result', width: 1.95 },
            { header: 'Domain', width: 1.45 },
            { header: 'Summary', width: CONTENT_W - 3.4, justify: true }
          ],
          AUDITED_CLOSURE_THEOREMS.map((t) => [t.title, t.domain, t.summary]),
          { cellSize: 8.3 }
        );
      }

      // Embed rasterized inline SVG figures belonging after this subsection
      const matchedFigs = PAPER_FIGURES.filter((f) => f.afterSubsectionAnchor === sub.anchorId);
      for (const fig of matchedFigs) {
        const img = figureImages.get(fig.id);
        if (img) {
          ensureSpace(img.heightIn + 0.85);
          doc.addImage(img.dataUrl, 'PNG', MARGIN, y, img.widthIn, img.heightIn);
          y += img.heightIn + 0.1;
        }
        writeRichParagraph(fig.caption, {
          style: 'italic',
          size: 9.6,
          color: [71, 85, 105],
          justify: true,
          afterSpace: 0.18
        });
      }

      if (y > MARGIN + 0.15) {
        y += 0.14;
      }
    }
  }

  // =========================================================
  // APPENDICES A–J
  // =========================================================
  startChapterOnNewPage();
  drawPlayfairHeadline('Appendices A–J: Derivations, Units & Technical FAQ', 28, 0.18);
  for (const app of PAPER_APPENDICES) {
    if (y > MARGIN + 0.25) {
      y += 0.18;
    }
    ensureSpace(1.0);
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
  // CITED VERSION & REFERENCES [1]–[91] (NO ORCIDs IN REFERENCES)
  // =========================================================
  startChapterOnNewPage();
  drawPlayfairHeadline('Cited Version & References (Numeric Order)', 28, 0.16);

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

