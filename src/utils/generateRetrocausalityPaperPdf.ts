/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Scientific Magazine A4 Direct PDF Exporter for Paper 16:
 * "The Universe Remembers Its Future: Retrocausality, Temporal Boundary Conditions,
 *  and the Architecture of Causal Reality"
 *
 * Implements the identical 40-Shade Ecru, Orange, Dark Magenta, Dark Teal, Pine Green & Complementary Palette
 * and Typography as Paper 15:
 * - PlayfairDisplay-Regular (non-bold) headlines
 * - DejaVuSerif / NotoSerif-Italic / DejaVuSans / DejaVuSansMono for body, captions, math & tables
 * - Hardened pagination, dynamic TOC pruning, per-line rules, and strict A4 margin guards (22..188mm, <=270mm)
 */

import { jsPDF } from 'jspdf';
import {
  RETRO_META,
  RETRO_ABSTRACT,
  RETRO_CENTRAL_THESIS,
  RETRO_RESEARCH_QUESTIONS,
  RETRO_CONCEPTUAL_CONTRIBUTION,
  RETRO_IMPLICATION_AND_CONCLUSION,
  RETRO_PRINCIPLES_TABLE,
  TABLE_A1_INDEPENDENCE_RELATIONS,
  TABLE_A2_FORMAL_SYMBOLS_AND_CLAUSES,
  RETRO_ARGUMENT_MAP,
  RETRO_CHAPTERS,
  TABLE_1_1_FOURFOLD_TAXONOMY,
  TABLE_1_2_TAXONOMY_TO_PRINCIPLES,
  TABLE_2_1_SOLUTIONS,
  TABLE_2_2_PHILOSOPHY_TO_PHYSICS,
  TABLE_3_1_BOUNDARY,
  TABLE_5_1_INFLUENCE_VS_CONSISTENCY,
  TABLE_6_1_QUANTUM_RETRO,
  TABLE_7_1_THERMO_ARROWS,
  TABLE_8_1_FIVE_RELATIONS,
  TABLE_8_2_EMPIRICAL_PROTOCOLS,
  TABLE_8_3_CHAPTER_1_ANSWERS,
  RETRO_SYMBOL_GLOSSARY,
  RETRO_GLOSSARY,
  RETRO_APPENDICES,
  RETRO_REFERENCES,
  RETRO_INDEX_OF_NAMES,
  RETRO_INDEX_OF_CONCEPTS,
  type RetroEquation
} from '../types/retrocausalityPaperData';
import {
  RETRO_PLATES_META,
  RETRO_FIGURES,
  type RetroPlateMetaSpec
} from '../types/retrocausalityPaperFigures';
import { SHADE_BY_ID } from '../physics/retrocausalityPaper';
import {
  parseMathSegments,
  parseHtmlMathSegments,
  formatSvgMathMarkup,
  pdfBmpSafeUnicode,
  type MathSegment
} from './formatMathUnicode';

interface LoadedPdfFonts {
  playfairRegular: string;
  serifRegular: string;
  serifBold: string;
  serifItalic: string;
  sansRegular: string;
  monoRegular: string;
}

let cachedFonts: Promise<LoadedPdfFonts | null> | null = null;
const REQUIRED_TTF_TABLES = ['head', 'name', 'cmap', 'hhea', 'maxp', 'hmtx', 'loca', 'glyf'] as const;

function validateTrueTypeBuffer(buf: ArrayBuffer, label: string): void {
  if (buf.byteLength < 32768 || buf.byteLength > 15_000_000) {
    throw new Error(`Invalid TTF byte length (${buf.byteLength}) for ${label}`);
  }
  const view = new DataView(buf);
  const sfntVersion = view.getUint32(0, false);
  if (sfntVersion !== 0x00010000 && sfntVersion !== 0x74727565) {
    throw new Error(`Invalid SFNT signature for ${label}`);
  }
  const numTables = view.getUint16(4, false);
  if (numTables < 8 || numTables > 64) {
    throw new Error(`Invalid SFNT table count for ${label}`);
  }
  const dirEnd = 12 + numTables * 16;
  if (dirEnd > buf.byteLength) throw new Error(`Truncated TTF directory for ${label}`);
  const tables = new Set<string>();
  for (let i = 0; i < numTables; i++) {
    const rec = 12 + i * 16;
    const tag = String.fromCharCode(
      view.getUint8(rec),
      view.getUint8(rec + 1),
      view.getUint8(rec + 2),
      view.getUint8(rec + 3)
    );
    const offset = view.getUint32(rec + 8, false);
    const length = view.getUint32(rec + 12, false);
    if (length === 0 || offset < dirEnd || offset + length > buf.byteLength) {
      throw new Error(`Corrupt TTF table '${tag}' in ${label}`);
    }
    tables.add(tag);
  }
  for (const req of REQUIRED_TTF_TABLES) {
    if (!tables.has(req)) throw new Error(`Missing TTF table '${req}' in ${label}`);
  }
}

function arrayBufferToBase64(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  const chunkSize = 0x8000;
  const parts: string[] = [];
  for (let i = 0; i < bytes.length; i += chunkSize) {
    parts.push(String.fromCharCode(...bytes.subarray(i, Math.min(i + chunkSize, bytes.length))));
  }
  return btoa(parts.join(''));
}

async function fetchFontBuffer(url: string): Promise<ArrayBuffer> {
  const res = await fetch(url, { credentials: 'same-origin' });
  if (!res.ok) throw new Error(`Font fetch failed: ${url}`);
  const buf = await res.arrayBuffer();
  validateTrueTypeBuffer(buf, url);
  return buf;
}

async function loadFonts(): Promise<LoadedPdfFonts | null> {
  if (typeof fetch === 'undefined') return null;
  if (!cachedFonts) {
    cachedFonts = (async () => {
      try {
        const [pf, r, b, it, s, m] = await Promise.all([
          fetchFontBuffer('/fonts/PlayfairDisplay-Regular.ttf'),
          fetchFontBuffer('/fonts/DejaVuSerif.ttf'),
          fetchFontBuffer('/fonts/DejaVuSerif-Bold.ttf'),
          fetchFontBuffer('/fonts/NotoSerif-Italic.ttf'),
          fetchFontBuffer('/fonts/DejaVuSans.ttf'),
          fetchFontBuffer('/fonts/DejaVuSansMono.ttf')
        ]);
        return {
          playfairRegular: arrayBufferToBase64(pf),
          serifRegular: arrayBufferToBase64(r),
          serifBold: arrayBufferToBase64(b),
          serifItalic: arrayBufferToBase64(it),
          sansRegular: arrayBufferToBase64(s),
          monoRegular: arrayBufferToBase64(m)
        };
      } catch {
        cachedFonts = null;
        return null;
      }
    })();
  }
  return cachedFonts;
}

function verifyRegisteredFonts(doc: jsPDF): boolean {
  try {
    const req: Array<[string, string]> = [
      ['PlayfairDisplay', 'normal'],
      ['DejaVuSerif', 'normal'],
      ['DejaVuSerif', 'bold'],
      ['NotoSerif', 'italic'],
      ['DejaVuSans', 'normal'],
      ['DejaVuSansMono', 'normal']
    ];
    for (const [f, s] of req) {
      const fontObj = (doc as unknown as {
        getFont?: (fa: string, st: string) => { metadata?: { Unicode?: { widths?: unknown } } };
      }).getFont?.(f, s);
      if (!fontObj?.metadata?.Unicode?.widths) return false;
      doc.setFont(f, s);
      doc.setFontSize(10);
      if (!(doc.getTextWidth('A') > 0)) return false;
    }
    return true;
  } catch {
    return false;
  }
}

function bmpSafe(raw: string): string {
  const step1 = pdfBmpSafeUnicode(raw)
    .replace(/𝐱/g, 'x')
    .replace(/𝐲/g, 'y')
    .replace(/☉/g, '⊙')
    .replace(/ℒ/g, 'L')
    .replace(/ℬ/g, 'B')
    .replace(/𝒟/g, 'D')
    .replace(/𝒥/g, 'J');
  let out = '';
  for (const ch of step1) {
    const cp = ch.codePointAt(0) ?? 32;
    if (cp <= 0xffff) out += ch;
  }
  return out;
}

function stripPdfInlineMarkdown(raw: string): string {
  const noBold = raw.replace(/\*\*([^\n]+?)\*\*/g, '$1');
  return noBold
    .split(/(`[^`]+`)/g)
    .map((seg, i) => {
      if (!seg) return '';
      if (i % 2 === 1) return seg.slice(1, -1);
      return seg.replace(/\*(?!\s)([^*\n]+?)(?<!\s)\*/g, '$1');
    })
    .join('');
}

function fallbackAsciiSafe(raw: string): string {
  return bmpSafe(raw)
    .replace(/✓/g, 'yes')
    .replace(/✗/g, 'no')
    .replace(/∅/g, '{}')
    .replace(/∩/g, 'n')
    .replace(/∪/g, 'U')
    .replace(/⊆/g, '<=')
    .replace(/⊊/g, '<')
    .replace(/≺/g, '<')
    .replace(/≻/g, '>')
    .replace(/−|–|—/g, '-')
    .replace(/×/g, 'x')
    .replace(/≤/g, '<=')
    .replace(/≥/g, '>=')
    .replace(/≪/g, '<<')
    .replace(/≫/g, '>>')
    .replace(/≠/g, '!=')
    .replace(/≈/g, '~=')
    .replace(/≡/g, '===')
    .replace(/⇒|→|⇄|⇔/g, '->')
    .replace(/←/g, '<-')
    .replace(/⊢/g, '|-')
    .replace(/⊨/g, '|=')
    .replace(/⊥/g, '_|_')
    .replace(/¬/g, '~')
    .replace(/□/g, '[]')
    .replace(/◇/g, '<>')
    .replace(/″/g, '"')
    .replace(/[^\x20-\x7E\xA0-\xFF]/g, '');
}

const SERIF_USE_SANS = new Set([
  '\u00AC', '\u03D5', '\u03F5', '\u210B', '\u210F', '\u2112', '\u2113', '\u211D', '\u2124', '\u2131',
  '\u2190', '\u2192', '\u2194', '\u2197', '\u21A6', '\u21C4', '\u21D2', '\u21D4',
  '\u2200', '\u2202', '\u2203', '\u2204', '\u2205', '\u2207', '\u2208', '\u2209', '\u220A', '\u220F', '\u2211',
  '\u2212', '\u2216', '\u2218', '\u221A', '\u221D', '\u221E', '\u2225', '\u2227', '\u2228', '\u2229', '\u222A', '\u222B',
  '\u222E', '\u223C', '\u2243', '\u2245', '\u2248', '\u2260', '\u2261', '\u2264',
  '\u2265', '\u226A', '\u226B', '\u2272', '\u2273', '\u227A', '\u227B', '\u2282', '\u2284', '\u2286', '\u228A', '\u2294',
  '\u2295', '\u2297', '\u2299', '\u22A2', '\u22A3', '\u22A5', '\u22A8', '\u22AC', '\u22C5', '\u25A1', '\u25C7', '\u266E',
  '\u2713', '\u2717', '\u27E8', '\u27E9', '\u2308', '\u2309', '\u2016', '\u2032', '\u2033', '\u2020', '\u2609'
]);

const PT_TO_MM = 25.4 / 72;

interface PdfStyledSpan {
  text: string;
  size: number;
  yOffsetMm: number;
  italic: boolean;
}

interface PdfStyledLine {
  words: PdfStyledSpan[][];
  spans: PdfStyledSpan[];
  isHardEnd: boolean;
}

async function rasterizeSvgDataUrl(svgMarkup: string): Promise<{ dataUrl: string; aspect: number } | null> {
  if (typeof document === 'undefined') return null;
  return new Promise((resolve) => {
    try {
      const cleanSvg = formatSvgMathMarkup(bmpSafe(svgMarkup));
      const vb = cleanSvg.match(/viewBox="0 0 (\d+) (\d+)"/);
      const vbW = vb ? Number(vb[1]) : 760;
      const vbH = vb ? Number(vb[2]) : 280;
      const pxW = 2000;
      const pxH = Math.max(160, Math.round((pxW * vbH) / vbW));

      const img = new Image();
      const blob = new Blob([cleanSvg], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
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
          ctx.fillStyle = '#061838';
          ctx.fillRect(0, 0, pxW, pxH);
          ctx.drawImage(img, 0, 0, pxW, pxH);
          URL.revokeObjectURL(url);
          resolve({ dataUrl: canvas.toDataURL('image/png'), aspect: vbH / vbW });
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

async function fetchImageDataUrl(urlPath: string, bgHex = '#081B38'): Promise<{ dataUrl: string; aspect: number } | null> {
  if (typeof fetch === 'undefined' || typeof document === 'undefined') return null;
  try {
    const res = await fetch(urlPath, { credentials: 'same-origin' });
    if (!res.ok) return null;
    const blob = await res.blob();
    const objUrl = URL.createObjectURL(blob);
    const isSvg = urlPath.toLowerCase().endsWith('.svg') || blob.type.includes('svg');
    return await new Promise((resolve) => {
      const img = new Image();
      const timer = setTimeout(() => {
        URL.revokeObjectURL(objUrl);
        resolve(null);
      }, 5000);
      img.onload = () => {
        clearTimeout(timer);
        try {
          const rawW = img.width || 750;
          const rawH = img.height || 1000;
          const targetW = isSvg ? 1500 : Math.min(1800, rawW);
          const scale = targetW / rawW;
          const canvas = document.createElement('canvas');
          canvas.width = Math.max(1, Math.round(rawW * scale));
          canvas.height = Math.max(1, Math.round(rawH * scale));
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            URL.revokeObjectURL(objUrl);
            resolve(null);
            return;
          }
          ctx.fillStyle = bgHex;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          URL.revokeObjectURL(objUrl);
          resolve({ dataUrl: canvas.toDataURL('image/jpeg', 0.94), aspect: canvas.height / canvas.width });
        } catch {
          URL.revokeObjectURL(objUrl);
          resolve(null);
        }
      };
      img.onerror = () => {
        clearTimeout(timer);
        URL.revokeObjectURL(objUrl);
        resolve(null);
      };
      img.src = objUrl;
    });
  } catch {
    return null;
  }
}

type RgbTuple = [number, number, number];
const ECRU_PAPER: RgbTuple = SHADE_BY_ID[1].rgb;
const ECRU_FOLIO: RgbTuple = SHADE_BY_ID[2].rgb;
const ECRU_CREAM: RgbTuple = SHADE_BY_ID[3].rgb;
const ECRU_RULE: RgbTuple = SHADE_BY_ID[6].rgb;

const MAGENTA_WASH: RgbTuple = SHADE_BY_ID[14].rgb;
const MAGENTA_ROSE: RgbTuple = SHADE_BY_ID[15].rgb;
const MAGENTA_ACCENT: RgbTuple = SHADE_BY_ID[17].rgb;
const MAGENTA_RICH: RgbTuple = SHADE_BY_ID[18].rgb;
const MAGENTA_CORE: RgbTuple = SHADE_BY_ID[19].rgb;
const MAGENTA_DEEP: RgbTuple = SHADE_BY_ID[20].rgb;

const TEAL_TINT: RgbTuple = SHADE_BY_ID[21].rgb;
const TEAL_SLATE: RgbTuple = SHADE_BY_ID[23].rgb;
const TEAL_OCEAN: RgbTuple = SHADE_BY_ID[24].rgb;
const TEAL_PETROL: RgbTuple = SHADE_BY_ID[25].rgb;
const TEAL_CORE: RgbTuple = SHADE_BY_ID[26].rgb;
const TEAL_INK: RgbTuple = SHADE_BY_ID[27].rgb;

const PINE_CONIFER: RgbTuple = SHADE_BY_ID[31].rgb;
const PINE_CORE: RgbTuple = SHADE_BY_ID[32].rgb;
const PINE_DARK: RgbTuple = SHADE_BY_ID[33].rgb;
const CHARCOAL_INK: RgbTuple = SHADE_BY_ID[40].rgb;

type PdfFontFamily = 'playfair' | 'serif' | 'sans' | 'mono';
type PdfFontStyle = 'normal' | 'bold' | 'italic';

function createPdfContext(doc: jsPDF, hasUnicodeFonts: boolean) {
  const pageW = 210;
  const marginX = 22;
  const contentW = pageW - 2 * marginX;
  const topY = 30;
  const bottomLimit = 270;
  let y = topY;

  interface TocEntry {
    label: string;
    page: number;
    indent?: number;
  }
  const tocEntries: TocEntry[] = [];
  const darkIllustrationPages = new Set<number>();
  let currentPageUsed = false;

  const markPageUsed = () => {
    currentPageUsed = true;
  };

  const safeStr = (s: string) => (hasUnicodeFonts ? bmpSafe(s) : fallbackAsciiSafe(s));

  const setFontSafe = (family: PdfFontFamily, style: PdfFontStyle, size: number) => {
    doc.setFontSize(size);
    if (!hasUnicodeFonts) {
      doc.setFont(family === 'sans' ? 'helvetica' : family === 'mono' ? 'courier' : 'times', style);
      return;
    }
    if (family === 'playfair') doc.setFont('PlayfairDisplay', 'normal');
    else if (family === 'sans') doc.setFont('DejaVuSans', 'normal');
    else if (family === 'mono') doc.setFont('DejaVuSansMono', 'normal');
    else if (style === 'italic') doc.setFont('NotoSerif', 'italic');
    else if (style === 'bold') doc.setFont('DejaVuSerif', 'bold');
    else doc.setFont('DejaVuSerif', 'normal');
  };

  const paintEcruSpreadBackdrop = () => {
    doc.setFillColor(...ECRU_PAPER);
    doc.rect(0, 0, 210, 297, 'F');
  };

  const addEcruPage = () => {
    doc.addPage();
    paintEcruSpreadBackdrop();
    y = topY;
    currentPageUsed = false;
  };

  const startFreshEcruPage = () => {
    if (currentPageUsed || y > topY + 2 || darkIllustrationPages.has(doc.getNumberOfPages())) {
      addEcruPage();
    } else {
      y = topY;
    }
  };

  const ensureSpace = (neededMm: number) => {
    if (y + neededMm > bottomLimit && (currentPageUsed || y > topY + 2)) {
      addEcruPage();
    }
  };

  const resolveCharBucket = (
    ch: string,
    baseFamily: PdfFontFamily,
    resolvedStyle: PdfFontStyle = 'normal'
  ): PdfFontFamily => {
    if (!hasUnicodeFonts || baseFamily === 'sans') return baseFamily;
    const cp = ch.codePointAt(0) ?? 32;
    if (SERIF_USE_SANS.has(ch) || (cp >= 0x2070 && cp <= 0x209f)) return 'sans';
    if (resolvedStyle === 'italic' && cp >= 0x2100 && cp <= 0x27ff) return 'sans';
    if (baseFamily === 'mono') {
      if (cp >= 0x2100 || (cp >= 0x0370 && cp <= 0x03ff)) return 'sans';
      return 'mono';
    }
    if (baseFamily === 'playfair') {
      if ((cp >= 0x0370 && cp <= 0x03ff) || (cp >= 0x1e00 && cp <= 0x1eff) || cp >= 0x2100) return 'serif';
      return 'playfair';
    }
    return 'serif';
  };

  const measureTokenWidth = (
    chunk: string,
    boldBase: boolean,
    fontSize: number,
    baseFamily: PdfFontFamily = 'serif',
    baseStyle?: PdfFontStyle
  ): number => {
    const resolvedStyle: PdfFontStyle = baseStyle ?? (boldBase ? 'bold' : 'normal');
    if (!hasUnicodeFonts || baseFamily === 'sans') {
      setFontSafe(baseFamily, resolvedStyle, fontSize);
      return doc.getTextWidth(chunk);
    }
    let w = 0;
    let buf = '';
    let curFam: PdfFontFamily = baseFamily;
    const flushMeasure = () => {
      if (!buf) return;
      setFontSafe(curFam, curFam === 'playfair' ? 'normal' : resolvedStyle, fontSize);
      w += doc.getTextWidth(buf);
      buf = '';
    };
    for (const ch of chunk) {
      const cp = ch.codePointAt(0) ?? 32;
      const isCombining = (cp >= 0x0300 && cp <= 0x036f) || cp === 0x20d7;
      const fam: PdfFontFamily = isCombining && buf ? curFam : resolveCharBucket(ch, baseFamily, resolvedStyle);
      if (buf && fam !== curFam) flushMeasure();
      curFam = fam;
      buf += ch;
    }
    flushMeasure();
    return w;
  };

  const drawMixedRun = (
    chunk: string,
    startX: number,
    yPos: number,
    boldBase: boolean,
    fontSize: number,
    baseFamily: PdfFontFamily = 'serif',
    baseStyle?: PdfFontStyle
  ): void => {
    const resolvedStyle: PdfFontStyle = baseStyle ?? (boldBase ? 'bold' : 'normal');
    if (!hasUnicodeFonts || baseFamily === 'sans') {
      setFontSafe(baseFamily, resolvedStyle, fontSize);
      doc.text(chunk, startX, yPos);
      return;
    }
    let cursorX = startX;
    let buf = '';
    let curFam: PdfFontFamily = baseFamily;
    const flush = () => {
      if (!buf) return;
      setFontSafe(curFam, curFam === 'playfair' ? 'normal' : resolvedStyle, fontSize);
      doc.text(buf, cursorX, yPos);
      cursorX += doc.getTextWidth(buf);
      buf = '';
    };
    for (const ch of chunk) {
      const cp = ch.codePointAt(0) ?? 32;
      const isCombining = (cp >= 0x0300 && cp <= 0x036f) || cp === 0x20d7;
      const fam: PdfFontFamily = isCombining && buf ? curFam : resolveCharBucket(ch, baseFamily, resolvedStyle);
      if (buf && fam !== curFam) flush();
      curFam = fam;
      buf += ch;
    }
    flush();
  };

  const segmentsToSpans = (
    segs: MathSegment[],
    baseSize: number,
    curScale = 1,
    curYOffsetMm = 0,
    curItalic = false
  ): PdfStyledSpan[] => {
    const out: PdfStyledSpan[] = [];
    for (const seg of segs) {
      if (seg.type === 'text') {
        const cleaned = safeStr(seg.text);
        if (cleaned) out.push({ text: cleaned, size: baseSize * curScale, yOffsetMm: curYOffsetMm, italic: curItalic });
      } else if (seg.type === 'sub') {
        const childScale = curScale * 0.72;
        const deltaY = 0.24 * (baseSize * curScale) * PT_TO_MM;
        out.push(...segmentsToSpans(seg.children, baseSize, childScale, curYOffsetMm + deltaY, curItalic));
      } else if (seg.type === 'sup') {
        const childScale = curScale * 0.72;
        const deltaY = -0.34 * (baseSize * curScale) * PT_TO_MM;
        out.push(...segmentsToSpans(seg.children, baseSize, childScale, curYOffsetMm + deltaY, curItalic));
      } else {
        out.push(...segmentsToSpans(seg.children, baseSize, curScale, curYOffsetMm, true));
      }
    }
    return out;
  };

  const measureSpansWidth = (
    spans: PdfStyledSpan[],
    boldBase: boolean,
    baseFamily: PdfFontFamily = 'serif',
    baseStyle?: PdfFontStyle
  ): number => {
    let total = 0;
    for (const sp of spans) {
      const style: PdfFontStyle | undefined = sp.italic && baseFamily === 'serif' ? 'italic' : baseStyle;
      total += measureTokenWidth(sp.text, boldBase, sp.size, baseFamily, style);
    }
    return total;
  };

  const drawStyledSpans = (
    spans: PdfStyledSpan[],
    startX: number,
    yPos: number,
    boldBase: boolean,
    baseFamily: PdfFontFamily = 'serif',
    baseStyle?: PdfFontStyle
  ): void => {
    let cx = startX;
    for (const sp of spans) {
      const style: PdfFontStyle | undefined = sp.italic && baseFamily === 'serif' ? 'italic' : baseStyle;
      drawMixedRun(sp.text, cx, yPos + sp.yOffsetMm, boldBase, sp.size, baseFamily, style);
      cx += measureTokenWidth(sp.text, boldBase, sp.size, baseFamily, style);
    }
  };

  const splitSpansByNewlines = (spans: PdfStyledSpan[]): PdfStyledSpan[][] => {
    const lines: PdfStyledSpan[][] = [[]];
    for (const sp of spans) {
      if (!sp.text.includes('\n')) {
        lines[lines.length - 1].push(sp);
        continue;
      }
      const parts = sp.text.split(/\r?\n/);
      for (let i = 0; i < parts.length; i++) {
        if (parts[i]) lines[lines.length - 1].push({ ...sp, text: parts[i] });
        if (i < parts.length - 1) lines.push([]);
      }
    }
    return lines;
  };

  const tokenizeSpansIntoWords = (lineSpans: PdfStyledSpan[]): PdfStyledSpan[][] => {
    const words: PdfStyledSpan[][] = [];
    let currentWord: PdfStyledSpan[] = [];
    const pushCurrent = () => {
      if (currentWord.length > 0) {
        words.push(currentWord);
        currentWord = [];
      }
    };
    for (const sp of lineSpans) {
      if (sp.yOffsetMm !== 0) {
        currentWord.push(sp);
        continue;
      }
      const chunks = sp.text.split(/( +)/);
      for (const chunk of chunks) {
        if (!chunk) continue;
        if (/^ +$/.test(chunk)) pushCurrent();
        else currentWord.push({ ...sp, text: chunk });
      }
    }
    pushCurrent();
    return words;
  };

  const joinWordsToSpans = (words: PdfStyledSpan[][], spaceSize: number): PdfStyledSpan[] => {
    const out: PdfStyledSpan[] = [];
    for (let wi = 0; wi < words.length; wi++) {
      if (wi > 0) out.push({ text: ' ', size: spaceSize, yOffsetMm: 0, italic: false });
      out.push(...words[wi]);
    }
    return out;
  };

  const wrapMixedLines = (
    rawText: string,
    maxW: number,
    boldBase: boolean,
    fontSize: number,
    baseFamily: PdfFontFamily = 'serif',
    baseStyle?: PdfFontStyle,
    isHtml = false
  ): PdfStyledLine[] => {
    const safeMaxW = Math.max(12, maxW - 0.5);
    const spaceW = measureTokenWidth(' ', boldBase, fontSize, baseFamily, baseStyle);
    const parsedSegs = isHtml ? parseHtmlMathSegments(rawText) : parseMathSegments(rawText);
    const allSpans = segmentsToSpans(parsedSegs, fontSize);
    const hardLines = splitSpansByNewlines(allSpans);
    const outLines: PdfStyledLine[] = [];

    for (const hardLine of hardLines) {
      const rawWords = tokenizeSpansIntoWords(hardLine);
      if (rawWords.length === 0) {
        outLines.push({ words: [], spans: [], isHardEnd: true });
        continue;
      }
      const tokens: PdfStyledSpan[][] = [];
      for (const wd of rawWords) {
        if (measureSpansWidth(wd, boldBase, baseFamily, baseStyle) <= safeMaxW) {
          tokens.push(wd);
        } else {
          let piece: PdfStyledSpan[] = [];
          for (const sp of wd) {
            let charBuf = '';
            for (const ch of sp.text) {
              const testSpans = [
                ...piece,
                ...(charBuf ? [{ ...sp, text: charBuf }] : []),
                { ...sp, text: ch }
              ];
              if (
                (piece.length > 0 || charBuf) &&
                measureSpansWidth(testSpans, boldBase, baseFamily, baseStyle) > safeMaxW
              ) {
                if (charBuf) piece.push({ ...sp, text: charBuf });
                if (piece.length > 0) tokens.push(piece);
                piece = [];
                charBuf = ch;
              } else {
                charBuf += ch;
              }
            }
            if (charBuf) piece.push({ ...sp, text: charBuf });
          }
          if (piece.length > 0) tokens.push(piece);
        }
      }

      let currentWords: PdfStyledSpan[][] = [tokens[0]];
      let currentW = measureSpansWidth(tokens[0], boldBase, baseFamily, baseStyle);
      for (let i = 1; i < tokens.length; i++) {
        const tok = tokens[i];
        const tokW = measureSpansWidth(tok, boldBase, baseFamily, baseStyle);
        if (currentW + spaceW + tokW <= safeMaxW) {
          currentWords.push(tok);
          currentW += spaceW + tokW;
        } else {
          outLines.push({
            words: currentWords,
            spans: joinWordsToSpans(currentWords, fontSize),
            isHardEnd: false
          });
          currentWords = [tok];
          currentW = tokW;
        }
      }
      if (currentWords.length > 0) {
        outLines.push({
          words: currentWords,
          spans: joinWordsToSpans(currentWords, fontSize),
          isHardEnd: true
        });
      }
    }
    return outLines.length > 0 ? outLines : [{ words: [], spans: [], isHardEnd: true }];
  };

  const clipMixedLine = (
    cleanText: string,
    maxW: number,
    boldBase: boolean,
    fontSize: number,
    baseFamily: PdfFontFamily = 'serif',
    baseStyle?: PdfFontStyle
  ): string => {
    if (measureTokenWidth(cleanText, boldBase, fontSize, baseFamily, baseStyle) <= maxW) return cleanText;
    const ellipsis = '…';
    const ellipsisW = measureTokenWidth(ellipsis, boldBase, fontSize, baseFamily, baseStyle);
    let out = '';
    for (const ch of cleanText) {
      if (measureTokenWidth(out + ch, boldBase, fontSize, baseFamily, baseStyle) + ellipsisW > maxW) break;
      out += ch;
    }
    return out.trimEnd() + ellipsis;
  };

  const drawMathInlineText = (
    rawText: string,
    xStart: number,
    maxW: number,
    fontSize = 11.4,
    lineGap = 6.1,
    color: RgbTuple = TEAL_INK,
    boldBase = false,
    justify = false,
    baseFamily: PdfFontFamily = 'serif',
    baseStyle?: PdfFontStyle,
    leftRule?: { x: number; color: RgbTuple; width: number }
  ) => {
    const lines = wrapMixedLines(rawText, maxW, boldBase, fontSize, baseFamily, baseStyle);
    for (const line of lines) {
      ensureSpace(lineGap + 1);
      markPageUsed();
      if (leftRule) {
        doc.setDrawColor(...leftRule.color);
        doc.setLineWidth(leftRule.width);
        doc.line(leftRule.x, y - fontSize * 0.25, leftRule.x, y + lineGap * 0.58);
      }
      doc.setTextColor(...color);
      if (justify && !line.isHardEnd && line.words.length > 1) {
        let wordsWidth = 0;
        const wWidths = line.words.map((wd) => {
          const ww = measureSpansWidth(wd, boldBase, baseFamily, baseStyle);
          wordsWidth += ww;
          return ww;
        });
        const rawGap = (maxW - wordsWidth) / (line.words.length - 1);
        const spaceW = measureTokenWidth(' ', boldBase, fontSize, baseFamily, baseStyle);
        if (rawGap >= spaceW * 0.55 && rawGap <= spaceW * 4.0) {
          let cx = xStart;
          for (let wi = 0; wi < line.words.length; wi++) {
            drawStyledSpans(line.words[wi], cx, y, boldBase, baseFamily, baseStyle);
            cx += wWidths[wi] + rawGap;
          }
          y += lineGap;
          continue;
        }
      }
      drawStyledSpans(line.spans, xStart, y, boldBase, baseFamily, baseStyle);
      y += lineGap;
    }
  };

  const drawHeading = (
    text: string,
    level: 1 | 2 | 3,
    recordToc = false,
    tocIndent = 0,
    startOnNewPage = false,
    minFollowMm?: number
  ) => {
    if (level === 1 && startOnNewPage) {
      startFreshEcruPage();
    }
    const size = level === 1 ? 23.0 : level === 2 ? 13.0 : 11.0;
    const lineGap = level === 1 ? 10.2 : level === 2 ? 6.0 : 5.0;
    const boldHeading = level !== 1;
    const headingFamily: PdfFontFamily = level === 1 ? 'playfair' : 'serif';
    const headingStyle: PdfFontStyle | undefined = level === 1 ? 'normal' : undefined;
    const wrappedHeading = wrapMixedLines(text, contentW, boldHeading, size, headingFamily, headingStyle);
    const headingH = Math.max(1, wrappedHeading.length) * lineGap;
    const baseGapBefore = level === 1 ? 9 : level === 2 ? 8.5 : 6;
    const gapAfter = level === 1 ? 10 : level === 2 ? 4.5 : 3.5;
    const followMm = minFollowMm ?? (level === 1 ? 46 : level === 2 ? 32 : 24);

    const effBefore = y <= topY + 2 ? (level === 1 ? 3 : 2) : baseGapBefore;
    if (y + effBefore + headingH + gapAfter + followMm > bottomLimit && (currentPageUsed || y > topY + 2)) {
      addEcruPage();
    }

    const gapBefore = y <= topY + 2 ? (level === 1 ? 3 : 2) : baseGapBefore;
    y += gapBefore;
    markPageUsed();
    if (recordToc) {
      tocEntries.push({ label: text, page: doc.getNumberOfPages(), indent: tocIndent });
    }
    doc.setTextColor(...(level === 1 ? CHARCOAL_INK : TEAL_CORE));
    for (const hLine of wrappedHeading) {
      drawStyledSpans(hLine.spans, marginX, y, boldHeading, headingFamily, headingStyle);
      y += lineGap;
    }
    if (level === 1) {
      doc.setDrawColor(...TEAL_PETROL);
      doc.setLineWidth(0.45);
      doc.line(marginX, y + 1.5, marginX + 42, y + 1.5);
      doc.setDrawColor(...ECRU_RULE);
      doc.setLineWidth(0.25);
      doc.line(marginX + 44, y + 1.5, marginX + contentW, y + 1.5);
    }
    y += gapAfter;
  };

  const drawPullQuote = (quote: string) => {
    const qLines = wrapMixedLines(quote, contentW - 14, false, 10.6, 'serif', 'italic');
    const needed = qLines.length * 5.3 + 12;
    ensureSpace(needed);
    y += 2;
    doc.setDrawColor(...ECRU_RULE);
    doc.setLineWidth(0.32);
    doc.line(marginX, y, marginX + contentW, y);
    y += 5.5;
    doc.setTextColor(...MAGENTA_CORE);
    for (const l of qLines) {
      const lw = measureSpansWidth(l.spans, false, 'serif', 'italic');
      const cx = marginX + Math.max(4, Math.min(contentW - lw - 4, (contentW - lw) / 2));
      drawStyledSpans(l.spans, cx, y, false, 'serif', 'italic');
      y += 5.3;
    }
    y += 1.5;
    doc.setDrawColor(...ECRU_RULE);
    doc.setLineWidth(0.32);
    doc.line(marginX, y, marginX + contentW, y);
    y += 6.0;
  };

  const drawEquationBox = (eq: RetroEquation) => {
    const cap = `Logical Schema ${eq.label} — ${eq.caption}`;
    const eqInnerW = contentW - 14;
    const baseEqFont = hasUnicodeFonts ? 'serif' : 'sans';
    let eqFontSize = 10.0;
    let eqLines = wrapMixedLines(eq.unicodeHtml, eqInnerW, false, eqFontSize, baseEqFont, 'normal', true);
    if (eqLines.length > 3) {
      eqFontSize = 8.8;
      eqLines = wrapMixedLines(eq.unicodeHtml, eqInnerW, false, eqFontSize, baseEqFont, 'normal', true);
    }
    if (eqLines.length > 4) {
      eqFontSize = 8.0;
      eqLines = wrapMixedLines(eq.unicodeHtml, eqInnerW, false, eqFontSize, baseEqFont, 'normal', true);
    }
    const eqLineGap = eqFontSize <= 8.4 ? 4.8 : 5.5;
    const capLines = wrapMixedLines(cap, contentW - 14, false, 8.6, 'serif', 'italic');
    const plainEqText = `Plain Equation: ${eq.plainEquation}`;
    const plainEqLines = wrapMixedLines(plainEqText, contentW - 14, false, 7.6, 'mono', 'normal');
    const plainLines = wrapMixedLines(stripPdfInlineMarkdown(eq.plainMeaning), contentW - 14, false, 8.4, 'serif', 'normal');
    const boxH =
      7.0 +
      eqLines.length * eqLineGap +
      3.8 +
      plainEqLines.length * 3.7 +
      2.0 +
      capLines.length * 4.2 +
      2.0 +
      plainLines.length * 4.2 +
      3.5;

    ensureSpace(Math.min(boxH + 9, bottomLimit - topY - 4));
    markPageUsed();
    y += 1.5;
    doc.setFillColor(...ECRU_FOLIO);
    doc.setDrawColor(...ECRU_RULE);
    doc.setLineWidth(0.32);
    doc.roundedRect(marginX, y, contentW, boxH, 1.5, 1.5, 'FD');

    let cy = y + 7.0;
    doc.setTextColor(...CHARCOAL_INK);
    for (const l of eqLines) {
      const lw = measureSpansWidth(l.spans, false, baseEqFont, 'normal');
      const cx = marginX + Math.max(6, Math.min(contentW - lw - 6, (contentW - lw) / 2));
      drawStyledSpans(l.spans, cx, cy, false, baseEqFont, 'normal');
      cy += eqLineGap;
    }
    doc.setDrawColor(...ECRU_RULE);
    doc.setLineWidth(0.2);
    doc.line(marginX + 10, cy - 1.4, marginX + contentW - 10, cy - 1.4);
    cy += 2.8;
    doc.setTextColor(...TEAL_INK);
    for (const pel of plainEqLines) {
      const pelw = measureSpansWidth(pel.spans, false, 'mono', 'normal');
      const cx = marginX + Math.max(6, Math.min(contentW - pelw - 6, (contentW - pelw) / 2));
      drawStyledSpans(pel.spans, cx, cy, false, 'mono', 'normal');
      cy += 3.7;
    }
    cy += 1.4;
    doc.setTextColor(...TEAL_CORE);
    for (const cl of capLines) {
      const clw = measureSpansWidth(cl.spans, false, 'serif', 'italic');
      const cx = marginX + Math.max(6, Math.min(contentW - clw - 6, (contentW - clw) / 2));
      drawStyledSpans(cl.spans, cx, cy, false, 'serif', 'italic');
      cy += 4.2;
    }
    cy += 2.0;
    doc.setTextColor(...PINE_CORE);
    for (const pl of plainLines) {
      const plw = measureSpansWidth(pl.spans, false, 'serif', 'normal');
      const cx = marginX + Math.max(6, Math.min(contentW - plw - 6, (contentW - plw) / 2));
      drawStyledSpans(pl.spans, cx, cy, false, 'serif', 'normal');
      cy += 4.2;
    }
    y += boxH + 7.2;
  };

  const drawCalloutBox = (
    label: string | null,
    rawBody: string,
    fillColor: RgbTuple = MAGENTA_WASH,
    borderColor: RgbTuple = MAGENTA_ACCENT,
    fontSize = 10.0,
    lineGap = 5.1
  ) => {
    const bodyLines = wrapMixedLines(rawBody, contentW - 12, false, fontSize, 'serif');
    const hasLabel = Boolean(label && label.trim().length > 0);
    const padTop = 6.2;
    const padBottom = 5.0;
    const totalNeeded = (hasLabel ? 5.6 : 0) + bodyLines.length * lineGap + padTop + padBottom;

    if (y + totalNeeded + 6 > bottomLimit && totalNeeded + 6 <= bottomLimit - topY && (currentPageUsed || y > topY + 2)) {
      addEcruPage();
    }

    let lineIdx = 0;
    let isFirstSlice = true;
    while (lineIdx < bodyLines.length || isFirstSlice) {
      const labelH = isFirstSlice && hasLabel ? 5.6 : 0;
      const overhead = padTop + labelH + padBottom;
      if (y + overhead + lineGap * 2 > bottomLimit && (currentPageUsed || y > topY + 2)) {
        addEcruPage();
        continue;
      }
      markPageUsed();
      y += 1.2;
      const maxLinesFit = Math.max(1, Math.floor((bottomLimit - y - overhead - 1.5) / lineGap));
      const slice = bodyLines.slice(lineIdx, lineIdx + maxLinesFit);
      const sliceH = Math.max(14, padTop + labelH + slice.length * lineGap + padBottom - lineGap * 0.2);

      doc.setFillColor(...fillColor);
      doc.setDrawColor(...borderColor);
      doc.setLineWidth(0.32);
      doc.roundedRect(marginX, y, contentW, sliceH, 1.5, 1.5, 'FD');

      let cy = y + padTop;
      if (isFirstSlice && hasLabel && label) {
        setFontSafe('mono', 'normal', 8.0);
        doc.setTextColor(...MAGENTA_RICH);
        doc.text(clipMixedLine(safeStr(label), contentW - 12, false, 8.0, 'mono'), marginX + 6, cy);
        cy += 5.6;
      }
      doc.setTextColor(...TEAL_INK);
      for (const line of slice) {
        drawStyledSpans(line.spans, marginX + 6, cy, false, 'serif', 'normal');
        cy += lineGap;
      }
      y += sliceH + 5.2;
      lineIdx += slice.length;
      isFirstSlice = false;
      if (lineIdx < bodyLines.length) {
        addEcruPage();
      }
    }
    y += 2.0;
  };

  const drawTable = (
    tableTitle: string,
    headers: string[],
    rawColWidths: number[],
    rows: string[][],
    fontSize = 8.0,
    lineGap = 4.15
  ) => {
    const rawSum = rawColWidths.reduce((acc, v) => acc + v, 0) || contentW;
    const colWidths = rawColWidths.map((w) => (w / rawSum) * contentW);
    const padX = 2.0;
    const padY = 2.2;

    const capLines = wrapMixedLines(tableTitle, contentW - 6, true, 8.6, 'serif');
    const contLines = wrapMixedLines(`${tableTitle} (continued)`, contentW - 6, true, 8.6, 'serif');
    const capH = capLines.length * 4.3 + 4.0;
    const contH = contLines.length * 4.3 + 4.0;

    const wrappedHeaders = headers.map((h, ci) =>
      wrapMixedLines(h, Math.max(8, colWidths[ci] - 2 * padX), true, fontSize, 'serif')
    );
    const headerH = Math.max(1, ...wrappedHeaders.map((l) => l.length)) * lineGap + 2 * padY;

    const wrappedRows = rows.map((row) =>
      headers.map((_, ci) => wrapMixedLines(row[ci] ?? '', Math.max(8, colWidths[ci] - 2 * padX), false, fontSize, 'serif'))
    );
    const rowHeights = wrappedRows.map((cells) => Math.max(1, ...cells.map((l) => l.length)) * lineGap + 2 * padY);

    const drawBannerAndHeader = (isContinuation: boolean) => {
      markPageUsed();
      const bLines = isContinuation ? contLines : capLines;
      const bH = isContinuation ? contH : capH;
      doc.setFillColor(...ECRU_FOLIO);
      doc.setDrawColor(...ECRU_RULE);
      doc.setLineWidth(0.3);
      doc.rect(marginX, y, contentW, bH, 'FD');
      doc.setTextColor(...MAGENTA_CORE);
      let by = y + 4.2;
      for (const bl of bLines) {
        drawStyledSpans(bl.spans, marginX + 3.0, by, true, 'serif', 'bold');
        by += 4.3;
      }
      y += bH;

      doc.setFillColor(...TEAL_TINT);
      doc.setDrawColor(...TEAL_OCEAN);
      doc.setLineWidth(0.3);
      doc.rect(marginX, y, contentW, headerH, 'FD');
      let cx = marginX;
      doc.setTextColor(...TEAL_CORE);
      for (let ci = 0; ci < headers.length; ci++) {
        if (ci > 0) doc.line(cx, y, cx, y + headerH);
        let hy = y + padY + 2.8;
        for (const hl of wrappedHeaders[ci]) {
          drawStyledSpans(hl.spans, cx + padX, hy, true, 'serif', 'bold');
          hy += lineGap;
        }
        cx += colWidths[ci];
      }
      y += headerH;
    };

    y += 2.5;
    const firstRowH = rowHeights[0] ?? 8;
    if (y + capH + headerH + Math.min(firstRowH, 45) > bottomLimit && (currentPageUsed || y > topY + 2)) {
      addEcruPage();
    }
    drawBannerAndHeader(false);

    for (let ri = 0; ri < wrappedRows.length; ri++) {
      const rH = rowHeights[ri];
      if (y + rH > bottomLimit && (currentPageUsed || y > topY + 2)) {
        addEcruPage();
        drawBannerAndHeader(true);
      }
      markPageUsed();
      if (ri % 2 === 1) doc.setFillColor(...ECRU_CREAM);
      else doc.setFillColor(255, 255, 255);
      doc.setDrawColor(...ECRU_RULE);
      doc.setLineWidth(0.22);
      doc.rect(marginX, y, contentW, rH, 'FD');

      let cx = marginX;
      doc.setTextColor(...TEAL_INK);
      for (let ci = 0; ci < headers.length; ci++) {
        if (ci > 0) doc.line(cx, y, cx, y + rH);
        let cy = y + padY + 2.8;
        for (const line of wrappedRows[ri][ci]) {
          drawStyledSpans(line.spans, cx + padX, cy, false, 'serif', 'normal');
          cy += lineGap;
        }
        cx += colWidths[ci];
      }
      y += rH;
    }
    y += 8.5;
  };

  const drawFullPageIllustration = (opts: {
    tag: string;
    shadeTag?: string;
    title: string;
    caption: string;
    asset: { dataUrl: string; aspect: number };
    format: 'PNG' | 'JPEG';
    accentRgb: RgbTuple;
    bgRgb?: RgbTuple;
  }) => {
    doc.addPage();
    darkIllustrationPages.add(doc.getNumberOfPages());
    currentPageUsed = true;

    // Full-bleed A4 dark plate spread using the plate's exact shade and paired dark accent token
    const PLATE_BG: RgbTuple = opts.bgRgb ?? [8, 27, 56];
    const WHITE_INK: RgbTuple = [250, 248, 244];
    const SOFT_WHITE_INK: RgbTuple = [234, 240, 249];
    const PLATE_BORDER: RgbTuple = opts.accentRgb ?? [
      Math.min(255, PLATE_BG[0] + 34),
      Math.min(255, PLATE_BG[1] + 34),
      Math.min(255, PLATE_BG[2] + 34)
    ];

    doc.setFillColor(...PLATE_BG);
    doc.rect(0, 0, 210, 297, 'F');
    y = 22;

    setFontSafe('mono', 'normal', 8.0);
    doc.setTextColor(...WHITE_INK);
    const headerTag = opts.shadeTag ? `${opts.tag} · ${opts.shadeTag}` : `${opts.tag} · Full-Page A4 Scientific Plate`;
    doc.text(clipMixedLine(safeStr(headerTag), contentW, false, 8.0, 'mono'), marginX, y);
    y += 3.2;
    doc.setDrawColor(...WHITE_INK);
    doc.setLineWidth(0.28);
    doc.line(marginX, y, marginX + contentW, y);
    y += 5.8;

    const titleLines = wrapMixedLines(opts.title, contentW, false, 12.6, 'playfair', 'normal');
    doc.setTextColor(...WHITE_INK);
    for (const tl of titleLines) {
      drawStyledSpans(tl.spans, marginX, y, false, 'playfair', 'normal');
      y += 5.8;
    }
    y += 2.0;

    const capFontSize = 8.8;
    const capLineGap = 4.2;
    const capLines = wrapMixedLines(opts.caption, contentW - 4, false, capFontSize, 'serif');
    const capBlockH = 4.4 + capLines.length * capLineGap + 2.5;
    const plateBottomSafeY = 268; // keeps caption strictly inside dark A4 plate above Page footer

    // Maximize vertical A4 image presence while guaranteeing caption never spills onto an overflow page
    const fullBleedW = 178;
    const artX = (pageW - fullBleedW) / 2;
    const availArtH = Math.max(76, plateBottomSafeY - y - capBlockH - 5.0);
    let drawW = fullBleedW;
    let drawH = drawW * opts.asset.aspect;
    if (drawH > availArtH) {
      drawH = availArtH;
      drawW = drawH / Math.max(0.05, opts.asset.aspect);
    }
    const drawX = (pageW - drawW) / 2;
    const drawY = y + Math.max(0, (availArtH - drawH) / 2);

    doc.setFillColor(...PLATE_BG);
    doc.setDrawColor(...PLATE_BORDER);
    doc.setLineWidth(0.3);
    doc.rect(artX, y, fullBleedW, availArtH, 'FD');
    doc.addImage(opts.asset.dataUrl, opts.format, drawX, drawY, drawW, drawH);

    const capStartY = y + availArtH + 3.8;
    doc.setDrawColor(...WHITE_INK);
    doc.setLineWidth(0.22);
    doc.line(marginX, capStartY, marginX + contentW, capStartY);
    let cy = capStartY + 4.4;
    doc.setTextColor(...SOFT_WHITE_INK);
    for (const cl of capLines) {
      if (!cl.isHardEnd && cl.words.length > 1) {
        let wordsWidth = 0;
        const wWidths = cl.words.map((wd) => {
          const ww = measureSpansWidth(wd, false, 'serif', 'normal');
          wordsWidth += ww;
          return ww;
        });
        const rawGap = (contentW - 4 - wordsWidth) / (cl.words.length - 1);
        const spaceW = measureTokenWidth(' ', false, capFontSize, 'serif', 'normal');
        if (rawGap >= spaceW * 0.55 && rawGap <= spaceW * 4.0) {
          let cx = marginX + 2;
          for (let wi = 0; wi < cl.words.length; wi++) {
            drawStyledSpans(cl.words[wi], cx, cy, false, 'serif', 'normal');
            cx += wWidths[wi] + rawGap;
          }
          cy += capLineGap;
          continue;
        }
      }
      drawStyledSpans(cl.spans, marginX + 2, cy, false, 'serif', 'normal');
      cy += capLineGap;
    }
    y = bottomLimit;
  };

  const drawFormattedParagraph = (
    rawPara: string,
    xStart = marginX,
    maxW = contentW,
    fontSize = 11.2,
    lineGap = 6.0,
    color: RgbTuple = CHARCOAL_INK,
    justify = true
  ) => {
    const lines = rawPara.split('\n');
    for (let li = 0; li < lines.length; li++) {
      const line = lines[li];
      if (!line.trim()) continue;
      if (line.startsWith('### ')) {
        drawHeading(stripPdfInlineMarkdown(line.slice(4)), 3, false, 1, false, 24);
      } else {
        drawMathInlineText(stripPdfInlineMarkdown(line), xStart, maxW, fontSize, lineGap, color, false, justify);
        if (li < lines.length - 1) y += 2.0;
      }
    }
  };

  return {
    pageW,
    marginX,
    contentW,
    topY,
    bottomLimit,
    getY: () => y,
    setY: (val: number) => { y = val; },
    addY: (delta: number) => { y += delta; },
    tocEntries,
    darkIllustrationPages,
    markPageUsed,
    paintEcruSpreadBackdrop,
    addEcruPage,
    startFreshEcruPage,
    safeStr,
    setFontSafe,
    ensureSpace,
    measureTokenWidth,
    wrapMixedLines,
    drawStyledSpans,
    clipMixedLine,
    drawMathInlineText,
    drawFormattedParagraph,
    drawHeading,
    drawPullQuote,
    drawEquationBox,
    drawCalloutBox,
    drawTable,
    drawFullPageIllustration
  };
}

function registerAllFontsOnDoc(doc: jsPDF, fonts: LoadedPdfFonts | null): boolean {
  if (!fonts) return false;
  try {
    doc.addFileToVFS('PlayfairDisplay-Regular.ttf', fonts.playfairRegular);
    doc.addFont('PlayfairDisplay-Regular.ttf', 'PlayfairDisplay', 'normal');
    doc.addFileToVFS('DejaVuSerif.ttf', fonts.serifRegular);
    doc.addFont('DejaVuSerif.ttf', 'DejaVuSerif', 'normal');
    doc.addFileToVFS('DejaVuSerif-Bold.ttf', fonts.serifBold);
    doc.addFont('DejaVuSerif-Bold.ttf', 'DejaVuSerif', 'bold');
    doc.addFileToVFS('NotoSerif-Italic.ttf', fonts.serifItalic);
    doc.addFont('NotoSerif-Italic.ttf', 'NotoSerif', 'italic');
    doc.addFileToVFS('DejaVuSans.ttf', fonts.sansRegular);
    doc.addFont('DejaVuSans.ttf', 'DejaVuSans', 'normal');
    doc.addFileToVFS('DejaVuSansMono.ttf', fonts.monoRegular);
    doc.addFont('DejaVuSansMono.ttf', 'DejaVuSansMono', 'normal');
    return verifyRegisteredFonts(doc);
  } catch {
    return false;
  }
}

export interface RetroPlatePdfInput extends RetroPlateMetaSpec {
  imagePath: string;
  dataUrlOverride?: { dataUrl: string; aspect: number };
}

export async function buildRetrocausalityPdfDocument(
  existingDoc?: jsPDF,
  platesOverride?: RetroPlatePdfInput[]
): Promise<jsPDF> {
  const fonts = await loadFonts();
  const doc = existingDoc ?? new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait', compress: true });
  const hasUnicodeFonts = registerAllFontsOnDoc(doc, fonts);
  const ctx = createPdfContext(doc, hasUnicodeFonts);
  const { marginX, contentW, topY, bottomLimit, pageW, tocEntries } = ctx;

  const resolvedPlates: RetroPlatePdfInput[] =
    platesOverride ??
    (typeof document !== 'undefined'
      ? (await import('../components/RetrocausalityPaperFigures')).RETRO_PLATES
      : RETRO_PLATES_META.map((m) => ({ ...m, imagePath: '' })));

  const [svgAssets, plateAssets] = await Promise.all([
    Promise.all(RETRO_FIGURES.map(async (f) => ({ fig: f, raster: await rasterizeSvgDataUrl(f.svgMarkup) }))),
    Promise.all(
      resolvedPlates.map(async (p) => ({
        plate: p,
        raster: p.dataUrlOverride ?? (await fetchImageDataUrl(p.imagePath, p.bgHex))
      }))
    )
  ]);

  // Restrained Archival Cover Page (Page 1)
  ctx.paintEcruSpreadBackdrop();
  ctx.setY(22);
  doc.setDrawColor(...TEAL_PETROL);
  doc.setLineWidth(0.8);
  doc.line(marginX, ctx.getY(), marginX + contentW, ctx.getY());
  ctx.addY(1.5);
  doc.setDrawColor(...MAGENTA_RICH);
  doc.setLineWidth(0.28);
  doc.line(marginX, ctx.getY(), marginX + contentW, ctx.getY());
  ctx.addY(9.0);

  ctx.drawMathInlineText(RETRO_META.title, marginX, contentW, 22.0, 9.6, CHARCOAL_INK, false, false, 'playfair', 'normal');
  ctx.addY(3.5);

  doc.setDrawColor(...TEAL_PETROL);
  doc.setLineWidth(0.6);
  doc.line(marginX, ctx.getY(), marginX + 48, ctx.getY());
  ctx.addY(5.0);

  ctx.drawMathInlineText(RETRO_META.laymanDeck, marginX, contentW, 11.2, 5.1, MAGENTA_CORE, false, false, 'serif', 'italic');
  ctx.addY(6.5);

  for (const author of RETRO_META.authors) {
    ctx.drawMathInlineText(author.name, marginX, contentW, 9.0, 3.8, CHARCOAL_INK, true, false);
    ctx.drawMathInlineText(author.affiliation, marginX + 2, contentW - 2, 7.8, 3.3, TEAL_PETROL, false, false);
    if (author.orcidUrl) {
      const orcidText = `ORCID: ${author.orcidUrl}`;
      const orcidY = ctx.getY();
      ctx.drawMathInlineText(orcidText, marginX + 2, contentW - 2, 6.9, 3.0, PINE_CONIFER, false, false, 'mono');
      const linkW = Math.min(contentW - 2, ctx.measureTokenWidth(orcidText, false, 6.9, 'mono'));
      if (typeof (doc as unknown as { link?: unknown }).link === 'function') {
        doc.link(marginX + 2, orcidY - 2.4, linkW, 3.0, { url: author.orcidUrl });
      }
    }
    ctx.addY(1.5);
  }

  if (ctx.getY() < 235) ctx.setY(235);
  doc.setDrawColor(...ECRU_RULE);
  doc.setLineWidth(0.32);
  doc.line(marginX, ctx.getY(), marginX + contentW, ctx.getY());
  ctx.addY(3.2);
  ctx.drawMathInlineText(RETRO_META.institutionalDisclaimer, marginX, contentW, 7.3, 3.2, TEAL_PETROL, false, false);
  ctx.addY(1.2);
  ctx.drawMathInlineText(RETRO_META.venueFormatNote, marginX, contentW, 7.3, 3.2, MAGENTA_CORE, false, false, 'serif', 'italic');

  // Abstract & Central Thesis Page
  ctx.addEcruPage();
  ctx.drawHeading('Abstract', 1, true, 0, false);
  for (const p of RETRO_ABSTRACT) {
    ctx.drawMathInlineText(p, marginX, contentW, 10.6, 5.5, CHARCOAL_INK, false, true);
    ctx.addY(3.0);
  }
  ctx.addY(2.5);
  ctx.drawMathInlineText(`Keywords: ${RETRO_META.keywords.join('; ')}.`, marginX, contentW, 8.7, 4.4, TEAL_PETROL, false, true);
  ctx.addY(5.0);
  ctx.drawCalloutBox(
    RETRO_CENTRAL_THESIS.title,
    `${RETRO_CENTRAL_THESIS.lead}\n\n${RETRO_CENTRAL_THESIS.elaboration.join('\n\n')}`,
    ECRU_FOLIO,
    TEAL_PETROL,
    10.0,
    5.0
  );

  // Reserve 6 TOC Pages (excess trailing TOC pages are deleted cleanly after final layout)
  const tocPages: number[] = [];
  for (let tp = 0; tp < 6; tp++) {
    ctx.addEcruPage();
    tocPages.push(doc.getNumberOfPages());
  }
  tocEntries.push({ label: 'Table of Contents', page: tocPages[0], indent: 0 });
  ctx.addEcruPage();

  // Front-Matter Principles & Questions
  ctx.drawHeading('Temporal Boundary Principles (R1–R4) & Research Questions', 1, true, 0, false);
  ctx.drawTable(
    'Table A.0 · Canonical Conditions for Temporally Distributed Causal Determination',
    ['Principle', 'Canonical Formula', 'Physical / Epistemic Status', 'Failure on Denial', 'Empirical Signature'],
    [28, 42, 32, 32, 32],
    RETRO_PRINCIPLES_TABLE.map((r) => [
      `${r.code} · ${r.name}`,
      r.canonicalFormula,
      r.epistemicStatus,
      r.failureOnDenial,
      r.empiricalSignature
    ]),
    7.4,
    3.85
  );
  ctx.drawTable(
    'Table A.1 · Logical & Dynamical Independence Relations Among Principles R1–R4',
    ['Principle Pair', 'Logical Status', 'Formal Justification'],
    [40, 42, 84],
    TABLE_A1_INDEPENDENCE_RELATIONS.map((r) => [r.pair, r.status, r.justification]),
    7.4,
    3.85
  );
  ctx.drawTable(
    'Table A.2 · Formal Satisfaction Clauses (ℳ ⊨ R_i) & Mathematical Function Spaces',
    ['Symbol / Clause', 'Formal Definition', 'Underlying Space & Scope'],
    [36, 62, 68],
    TABLE_A2_FORMAL_SYMBOLS_AND_CLAUSES.map((r) => [r.symbol, r.formalDefinition, r.mathematicalSpace]),
    7.4,
    3.85
  );

  ctx.drawHeading('The Questions That Drive the Research', 2, true, 1, false, 92);
  RETRO_RESEARCH_QUESTIONS.forEach((q, idx) => {
    ctx.drawMathInlineText(`${idx + 1}. ${q}`, marginX + 2, contentW - 4, 10.0, 5.1, CHARCOAL_INK, false, true);
    ctx.addY(1.8);
  });

  // Front-Matter Illustrations Index
  ctx.drawHeading('List of Illustrations (Illustrations I–XXIX)', 1, true, 0, true);
  ctx.drawHeading(
    'Full-Page A4 Illustrations Across 40 Core Shades Plus Deep Crimson Red & Burnt Dark Orange',
    2,
    false,
    1
  );
  for (const pl of RETRO_PLATES_META) {
    const loc = pl.anchorChapter === 0 ? 'Graphical Abstract' : `Part ${pl.anchorChapter}`;
    ctx.drawMathInlineText(
      `${pl.plateNumber} (${loc} · ${pl.hueFamily}: ${pl.shadeName}): ${pl.title}`,
      marginX + 2,
      contentW - 2,
      7.6,
      3.45,
      TEAL_INK
    );
    ctx.addY(0.25);
  }
  if (RETRO_FIGURES.length > 0) {
    ctx.addY(2.0);
    ctx.drawHeading('Conceptual Schematics', 2, false, 1);
    for (const fg of RETRO_FIGURES) {
      ctx.drawMathInlineText(`${fg.figureNumber} (${fg.anchorChapter === 0 ? 'Abstract' : `Part ${fg.anchorChapter}`}): ${fg.title}`, marginX + 2, contentW - 2, 9.8, 5.0, TEAL_INK);
      ctx.addY(1.2);
    }
  }

  for (const { plate, raster } of plateAssets.filter((x) => x.plate.anchorChapter === 0)) {
    if (!raster) continue;
    ctx.drawFullPageIllustration({
      tag: `${plate.plateNumber} · Graphical Abstract`,
      shadeTag: `${plate.hueFamily}: ${plate.shadeName} (${plate.bgHex}) · Accent ${plate.accentHex}`,
      title: plate.title,
      caption: plate.caption,
      asset: raster,
      format: 'JPEG',
      accentRgb: plate.accentRgb,
      bgRgb: plate.bgRgb
    });
  }
  for (const { fig, raster } of svgAssets.filter((x) => x.fig.anchorChapter === 0)) {
    if (!raster) continue;
    ctx.drawFullPageIllustration({
      tag: `${fig.figureNumber}`,
      title: fig.title,
      caption: fig.caption,
      asset: raster,
      format: 'PNG',
      accentRgb: TEAL_PETROL
    });
  }

  // Parts 1–8
  for (const ch of RETRO_CHAPTERS) {
    ctx.startFreshEcruPage();
    ctx.drawHeading(`Part ${ch.number}: ${ch.title}`, 1, true, 0, false);
    ctx.drawMathInlineText(ch.epigraph, marginX + 4, contentW - 8, 10.4, 5.3, TEAL_PETROL, false, true, 'serif', 'italic');
    ctx.addY(2.5);
    ctx.drawPullQuote(ch.pullQuote);
    ctx.drawMathInlineText(ch.leadSummary, marginX, contentW, 10.9, 5.7, PINE_CORE, false, true, 'serif', 'italic');
    ctx.addY(4.5);

    if (ch.chapterIntro.length > 0) {
      ctx.ensureSpace(24);
      for (const introPara of ch.chapterIntro) {
        ctx.drawFormattedParagraph(introPara, marginX, contentW, 11.1, 6.0, CHARCOAL_INK, true);
        ctx.addY(3.2);
      }
      if (ctx.getY() + 2 <= bottomLimit) {
        doc.setDrawColor(...ECRU_RULE);
        doc.setLineWidth(0.2);
        doc.line(marginX, ctx.getY(), marginX + contentW, ctx.getY());
        ctx.addY(5.4);
      } else {
        ctx.ensureSpace(6);
      }
    }

    if (ch.number === 8) {
      ctx.drawHeading(RETRO_ARGUMENT_MAP.title, 2, false, 1, false, 40);
      ctx.drawMathInlineText(RETRO_ARGUMENT_MAP.summary, marginX, contentW, 10.2, 5.2, TEAL_PETROL, false, true);
      ctx.addY(2.5);
      ctx.drawTable(
        'Argument Map · Stratified Dependencies Among R1–R4 & TDCD',
        ['Stage', 'Formal Principle', 'Establishes'],
        [38, 66, 62],
        RETRO_ARGUMENT_MAP.nodes.map((n) => [n.step, n.rule, n.leadsTo]),
        7.8,
        4.0
      );
      ctx.drawCalloutBox(
        RETRO_CONCEPTUAL_CONTRIBUTION.title,
        RETRO_CONCEPTUAL_CONTRIBUTION.paragraphs.join('\n\n'),
        ECRU_FOLIO,
        TEAL_PETROL,
        10.0,
        5.0
      );
    }

    for (const sub of ch.subsections) {
      ctx.drawHeading(`§${sub.number}. ${sub.title}`, 2, true, 1, false, 32);
      for (const p of sub.paragraphs) {
        ctx.drawFormattedParagraph(p, marginX, contentW, 11.2, 6.0, CHARCOAL_INK, true);
        ctx.addY(3.5);
      }
      if (sub.equation) ctx.drawEquationBox(sub.equation);
      if (sub.theoremBox) {
        ctx.drawCalloutBox(
          `${sub.theoremBox.kind} ${sub.theoremBox.number} · ${sub.theoremBox.title}`,
          `${stripPdfInlineMarkdown(sub.theoremBox.statement)}\n\nDeductive Steps:\n${sub.theoremBox.proofSteps.map((s, i) => `${i + 1}. ${stripPdfInlineMarkdown(s)}`).join('\n')}\n\nSource: ${sub.theoremBox.sourceNote}`,
          MAGENTA_WASH,
          MAGENTA_RICH,
          9.8,
          4.9
        );
      }
      if (sub.secondaryTheoremBox) {
        ctx.drawCalloutBox(
          `${sub.secondaryTheoremBox.kind} ${sub.secondaryTheoremBox.number} · ${sub.secondaryTheoremBox.title}`,
          `${stripPdfInlineMarkdown(sub.secondaryTheoremBox.statement)}\n\nDeductive Steps:\n${sub.secondaryTheoremBox.proofSteps.map((s, i) => `${i + 1}. ${stripPdfInlineMarkdown(s)}`).join('\n')}\n\nSource: ${sub.secondaryTheoremBox.sourceNote}`,
          MAGENTA_WASH,
          MAGENTA_RICH,
          9.8,
          4.9
        );
      }
      if (sub.workedExample) {
        ctx.ensureSpace(36);
        ctx.addY(2.0);
        const headerY = ctx.getY();
        doc.setFillColor(...ECRU_FOLIO);
        doc.setDrawColor(...TEAL_PETROL);
        doc.setLineWidth(0.3);
        doc.roundedRect(marginX, headerY, contentW, 8.0, 1.2, 1.2, 'FD');
        ctx.setFontSafe('mono', 'normal', 7.6);
        doc.setTextColor(...TEAL_PETROL);
        doc.text(ctx.clipMixedLine(ctx.safeStr(sub.workedExample.title), contentW - 8, false, 7.6, 'mono'), marginX + 4, headerY + 5.2);
        ctx.setY(headerY + 11.2);

        const tealRule = { x: marginX + 1.5, color: TEAL_PETROL, width: 0.6 };
        ctx.drawMathInlineText(stripPdfInlineMarkdown(sub.workedExample.setup), marginX + 5, contentW - 7, 10.1, 5.2, TEAL_CORE, false, true, 'serif', 'normal', tealRule);
        ctx.addY(1.2);
        sub.workedExample.steps.forEach((st, idx) => {
          ctx.drawMathInlineText(`${idx + 1}. ${stripPdfInlineMarkdown(st)}`, marginX + 6, contentW - 8, 10.0, 5.2, CHARCOAL_INK, false, true, 'serif', 'normal', tealRule);
          ctx.addY(1.0);
        });
        ctx.drawEquationBox(sub.workedExample.resultEquation);
        ctx.drawMathInlineText(`Conclusion: ${stripPdfInlineMarkdown(sub.workedExample.takeaway)}`, marginX + 3, contentW - 5, 9.9, 5.1, PINE_CORE, false, true, 'serif', 'italic');
        ctx.addY(4.2);
      }
    }

    if (ch.number === 1) {
      ctx.drawTable(
        'Table 1.1 · Comprehensive Four-Domain Philosophical Taxonomy: Time, Causation, Explanation & Information',
        ['Domain', 'Taxonomic Sub-Classes', 'Symmetry & Boundary Profile', 'Category Mistake if Conflated'],
        [34, 42, 44, 46],
        TABLE_1_1_FOURFOLD_TAXONOMY.map((r) => [r.domain, r.subClass, r.symmetryProfile, r.explanatoryMisstep]),
        7.5,
        3.9
      );
      ctx.drawTable(
        'Table 1.2 · Structure-Preserving Conceptual Crosswalk: Four-Domain Taxonomy (T/C/E/I) to Principles R1–R4',
        ['Taxonomy Stratum', 'Primary Principle(s)', 'Functional Role in TDCD'],
        [44, 42, 80],
        TABLE_1_2_TAXONOMY_TO_PRINCIPLES.map((r) => [r.stratumGroup, r.primaryPrinciple, r.functionalRole]),
        7.5,
        3.9
      );
    }
    if (ch.number === 2) {
      ctx.drawTable(
        'Table 2.1 · Comparative Matrix of Retarded, Advanced, Symmetric, and QFT Propagator Solutions',
        ['Formulation', 'Green’s Kernel', 'Boundary Role', 'Physical Realizability'],
        [38, 42, 44, 42],
        TABLE_2_1_SOLUTIONS.map((r) => [r.framework, r.greenKernel, r.boundaryRole, r.realizabilityStatus])
      );
      ctx.drawTable(
        'Table 2.2 · Crosswalk Expanding Chapter 1’s Philosophical Taxonomy into Chapter 2 Physical Formalisms',
        ['Chapter 1 Node', 'Core Philosophical Question', 'Chapter 2 Physical Formalism', 'Key Result'],
        [36, 42, 46, 42],
        TABLE_2_2_PHILOSOPHY_TO_PHYSICS.map((r) => [
          r.philosophicalNode,
          r.chapter1Question,
          r.physicalFormalism,
          r.keyResult
        ]),
        7.5,
        3.9
      );
    }
    if (ch.number === 3) {
      ctx.drawTable(
        'Table 3.1 · Cauchy Unfolding vs. Two-Boundary Variational Formulations',
        ['Formulation', 'Boundary Data', 'Determination Mode', 'Conceptual Risk'],
        [38, 42, 44, 42],
        TABLE_3_1_BOUNDARY.map((r) => [r.formulation, r.boundaryData, r.determinationMode, r.conceptualRisk])
      );
    }
    if (ch.number === 5) {
      ctx.drawTable(
        'Table 5.1 · Backward Causal Influence vs. Global Two-Boundary Consistency',
        ['Dimension', 'Backward Influence (P1)', 'Global Consistency (P2)'],
        [32, 67, 67],
        TABLE_5_1_INFLUENCE_VS_CONSISTENCY.map((r) => [r.dimension, r.backwardInfluence, r.globalConsistency])
      );
    }
    if (ch.number === 6) {
      ctx.drawTable(
        'Table 6.1 · Quantum Measurement Frameworks Incorporating Final Boundary Conditions',
        ['Protocol', 'Boundary Structure', 'Observable Consequence', 'Signalling Status'],
        [38, 42, 44, 42],
        TABLE_6_1_QUANTUM_RETRO.map((r) => [r.protocol, r.boundaryStructure, r.observableConsequence, r.signallingStatus])
      );
    }
    if (ch.number === 7) {
      ctx.drawTable(
        'Table 7.1 · Four Arrows of Time and Their Roles in Temporally Distributed Causation',
        ['Arrow', 'Symmetry Status', 'Physical Source', 'Role in TDCD'],
        [36, 40, 46, 44],
        TABLE_7_1_THERMO_ARROWS.map((r) => [r.arrow, r.symmetryStatus, r.physicalSource, r.roleInTDCD])
      );
    }
    if (ch.number === 8) {
      ctx.drawTable(
        'Table 8.1 · Five-Fold Conceptual Taxonomy of Temporally Distributed Causation',
        ['Relation', 'Temporal Locus', 'Formal Signature', 'Explanatory Function'],
        [34, 34, 44, 54],
        TABLE_8_1_FIVE_RELATIONS.map((r) => [r.relation, r.temporalLocus, r.formalSignature, r.explanatoryFunction])
      );
      ctx.drawTable(
        'Table 8.2 · Empirical Discriminators Between Past-Only and Two-Boundary Models',
        ['Domain', 'Target Observable', 'Past-Only Account', 'Two-Boundary Account'],
        [34, 42, 45, 45],
        TABLE_8_2_EMPIRICAL_PROTOCOLS.map((r) => [r.domain, r.observable, r.pastOnlyModel, r.twoBoundaryModel])
      );
      ctx.drawTable(
        'Table 8.3 · Direct Answer Key: Chapter 1 Historical Puzzles & Taxonomic Strata Resolved by TDCD',
        ['Chapter 1 Lineage / Node', 'Foundational Puzzle', 'Physical & Formal Mechanism', 'TDCD Resolution'],
        [36, 42, 44, 44],
        TABLE_8_3_CHAPTER_1_ANSWERS.map((r) => [r.chapter1Node, r.legacyPuzzle, r.mechanism, r.tdcdResolution]),
        7.5,
        3.9
      );
      ctx.drawHeading(RETRO_IMPLICATION_AND_CONCLUSION.implicationTitle, 2, true, 1, false, 36);
      for (const p of RETRO_IMPLICATION_AND_CONCLUSION.implicationParagraphs) {
        ctx.drawFormattedParagraph(p, marginX, contentW, 11.2, 6.0, CHARCOAL_INK, true);
        ctx.addY(3.5);
      }
      ctx.drawHeading(RETRO_IMPLICATION_AND_CONCLUSION.concludingTitle, 2, true, 1, false, 36);
      const closingAll = RETRO_IMPLICATION_AND_CONCLUSION.concludingParagraphs;
      for (let ci = 0; ci < closingAll.length - 1; ci++) {
        ctx.drawFormattedParagraph(closingAll[ci], marginX, contentW, 11.2, 6.0, CHARCOAL_INK, true);
        ctx.addY(3.5);
      }
      ctx.drawCalloutBox(
        'Concluding Proposition',
        closingAll[closingAll.length - 1],
        MAGENTA_WASH,
        MAGENTA_RICH,
        10.2,
        5.2
      );
    }

    for (const { plate, raster } of plateAssets.filter((x) => x.plate.anchorChapter === ch.number)) {
      if (!raster) continue;
      ctx.drawFullPageIllustration({
        tag: `${plate.plateNumber} · Part ${ch.number}`,
        shadeTag: `${plate.hueFamily}: ${plate.shadeName} (${plate.bgHex}) · Accent ${plate.accentHex}`,
        title: plate.title,
        caption: plate.caption,
        asset: raster,
        format: 'JPEG',
        accentRgb: plate.accentRgb,
        bgRgb: plate.bgRgb
      });
    }

    for (const { fig, raster } of svgAssets.filter((x) => x.fig.anchorChapter === ch.number)) {
      if (!raster) continue;
      ctx.drawFullPageIllustration({
        tag: `${fig.figureNumber} · Part ${ch.number}`,
        title: fig.title,
        caption: fig.caption,
        asset: raster,
        format: 'PNG',
        accentRgb: TEAL_PETROL
      });
    }
  }

  // Glossary
  ctx.drawHeading('Glossary', 1, true, 0, true);
  ctx.drawTable(
    'Philosophical & Physical Lexicon',
    ['Term', 'Definition'],
    [48, 118],
    RETRO_GLOSSARY.map((g) => [g.acronym ? `${g.term} (${g.acronym})` : g.term, g.definition])
  );
  ctx.drawHeading('Formal Symbols & Operators', 2, true, 1, false, 44);
  ctx.drawTable(
    'Table G.1 · Formal Symbols & Conventions',
    ['Symbol', 'Concept', 'Domain', 'Definition'],
    [32, 34, 30, 70],
    RETRO_SYMBOL_GLOSSARY.map((s) => [s.symbol, s.name, s.domain, s.definition]),
    7.8,
    4.0
  );

  // Supplementary Appendices
  ctx.drawHeading('Supplementary Appendices', 1, true, 0, true, 54);
  for (const app of RETRO_APPENDICES) {
    ctx.drawHeading(`Appendix ${app.letter}: ${app.title}`, 2, true, 1, false, 40);
    ctx.drawMathInlineText(app.summary, marginX, contentW, 10.6, 5.5, TEAL_PETROL, false, true, 'serif', 'italic');
    ctx.addY(3.0);

    for (const p of app.paragraphs) {
      ctx.drawFormattedParagraph(p, marginX, contentW, 10.8, 5.8, CHARCOAL_INK, true);
      ctx.addY(3.0);
    }
    for (const eq of app.equations) {
      ctx.drawEquationBox(eq);
    }
    if (app.reproducibilityLedger?.length) {
      ctx.drawTable(
        'Table App.A · Verification Ledger for Two-Boundary Identities',
        ['Check', 'Formula', 'Reference Parameters', 'Outcome'],
        [38, 42, 42, 44],
        app.reproducibilityLedger.map((r) => [r.checkpoint, r.formula, r.referenceConstants, r.computedOutput]),
        7.8,
        4.0
      );
    }
    if (app.refereeObjections?.length) {
      for (const obj of app.refereeObjections) {
        ctx.drawCalloutBox(obj.objection, obj.reply, ECRU_FOLIO, ECRU_RULE, 9.7, 4.9);
      }
    }
  }

  // References
  ctx.drawHeading('References', 1, true, 0, true);
  for (const ref of RETRO_REFERENCES) {
    const refStr = `[${ref.id}] ${ref.citation}`;
    const refLines = ctx.wrapMixedLines(refStr, contentW, false, 9.9, 'serif');
    ctx.ensureSpace(refLines.length * 5.1 + 2);
    ctx.drawMathInlineText(refStr, marginX, contentW, 9.9, 5.1, TEAL_INK, false, true);
    ctx.addY(2.0);
  }

  // Back-Matter Indexes
  ctx.drawHeading('Index of Names', 1, true, 0, true);
  ctx.drawTable(
    'Index of Names (Physicists & Philosophers of Time)',
    ['Author / Thinker', 'Sections'],
    [114, 52],
    RETRO_INDEX_OF_NAMES.map((it) => [it.entry, it.sections]),
    7.6,
    3.65
  );

  ctx.drawHeading('Index of Concepts', 1, true, 0, true);
  ctx.drawTable(
    'Index of Concepts & Theorems',
    ['Concept / Theorem', 'Sections'],
    [114, 52],
    RETRO_INDEX_OF_CONCEPTS.map((it) => [it.entry, it.sections]),
    7.8,
    3.8
  );

  // Populate Reserved TOC and prune unused trailing TOC pages
  let simTocIdx = 0;
  let simY = topY + 15.5;
  for (const entry of tocEntries) {
    const indentPx = (entry.indent ?? 0) * 4.2;
    const fSize = entry.indent ? 8.1 : 9.3;
    const lineStep = entry.indent ? 3.55 : 4.2;
    const labelLines = ctx.wrapMixedLines(entry.label, contentW - indentPx - 16, false, fSize, 'serif');
    const entryH = Math.max(1, labelLines.length) * lineStep + (entry.indent ? 0.95 : 1.65);
    if (simY + entryH > bottomLimit) {
      simTocIdx++;
      if (simTocIdx >= tocPages.length) break;
      simY = topY + 13.0;
    }
    simY += entryH;
  }
  const usedTocPages = Math.min(tocPages.length, simTocIdx + 1);
  const lastReservedTocPage = tocPages[tocPages.length - 1];
  const removedTocPages = tocPages.length - usedTocPages;
  for (let k = tocPages.length - 1; k >= usedTocPages; k--) {
    doc.deletePage(tocPages[k]);
  }
  for (const entry of tocEntries) {
    if (entry.page > lastReservedTocPage) {
      entry.page = Math.max(1, entry.page - removedTocPages);
    }
  }
  const shiftedDarkPages = new Set<number>();
  for (const dp of ctx.darkIllustrationPages) {
    shiftedDarkPages.add(dp > lastReservedTocPage ? dp - removedTocPages : dp);
  }

  let tocIdx = 0;
  doc.setPage(tocPages[tocIdx]);
  let ty = topY;
  ctx.setFontSafe(hasUnicodeFonts ? 'playfair' : 'serif', 'normal', 23.0);
  doc.setTextColor(...CHARCOAL_INK);
  doc.text('Table of Contents', marginX, ty);
  ty += 5.5;
  doc.setDrawColor(...TEAL_PETROL);
  doc.setLineWidth(0.35);
  doc.line(marginX, ty, marginX + contentW, ty);
  ty += 10;

  for (const entry of tocEntries) {
    const indentPx = (entry.indent ?? 0) * 4.2;
    const fSize = entry.indent ? 8.1 : 9.3;
    const lineStep = entry.indent ? 3.55 : 4.2;
    const labelLines = ctx.wrapMixedLines(entry.label, contentW - indentPx - 16, false, fSize, 'serif');
    const entryH = Math.max(1, labelLines.length) * lineStep + (entry.indent ? 0.95 : 1.65);

    if (ty + entryH > bottomLimit) {
      tocIdx++;
      if (tocIdx >= usedTocPages) break;
      doc.setPage(tocPages[tocIdx]);
      ty = topY;
      ctx.setFontSafe(hasUnicodeFonts ? 'playfair' : 'serif', 'normal', 18);
      doc.setTextColor(...CHARCOAL_INK);
      doc.text('Table of Contents (continued)', marginX, ty);
      ty += 5;
      doc.setDrawColor(...MAGENTA_ROSE);
      doc.setLineWidth(0.3);
      doc.line(marginX, ty, marginX + contentW, ty);
      ty += 8;
    }

    ctx.setFontSafe('serif', 'normal', fSize);
    doc.setTextColor(...(entry.indent ? TEAL_PETROL : CHARCOAL_INK));
    for (let li = 0; li < labelLines.length; li++) {
      ctx.drawStyledSpans(labelLines[li].spans, marginX + indentPx, ty + li * lineStep, false, 'serif', 'normal');
    }
    ctx.setFontSafe('mono', 'normal', 8.5);
    doc.setTextColor(...MAGENTA_RICH);
    doc.text(String(entry.page), marginX + contentW, ty, { align: 'right' });
    if (typeof (doc as unknown as { link?: unknown }).link === 'function') {
      doc.link(marginX + indentPx, ty - 3.2, contentW - indentPx, entryH, { pageNumber: entry.page });
    }
    ty += entryH;
  }

  // Stamp Running Headers (p > 1) & Page Numbers on EVERY page (1..N, including cover & Table of Contents)
  const totalPages = doc.getNumberOfPages();
  const runningHeader = ctx.clipMixedLine(
    ctx.safeStr('The Universe Remembers Its Future'),
    contentW,
    false,
    7.6,
    'mono'
  );
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    const isDarkSpread = shiftedDarkPages.has(p);
    if (p > 1) {
      ctx.setFontSafe('mono', 'normal', 7.6);
      doc.setTextColor(...(isDarkSpread ? ([228, 238, 252] as RgbTuple) : TEAL_SLATE));
      doc.text(runningHeader, marginX, 13);
      doc.setDrawColor(...(isDarkSpread ? ([255, 255, 255] as RgbTuple) : PINE_DARK));
      doc.setLineWidth(0.2);
      doc.line(marginX, 16, marginX + contentW, 16);
    }
    ctx.setFontSafe('mono', 'normal', 8);
    doc.setTextColor(...(isDarkSpread ? ([255, 255, 255] as RgbTuple) : MAGENTA_CORE));
    doc.text(`Page ${p} of ${totalPages}`, pageW / 2, 286, { align: 'center' });
  }

  return doc;
}

export async function generateRetrocausalityPaperPdf(): Promise<void> {
  const doc = await buildRetrocausalityPdfDocument();
  doc.save('Paper_16_The_Universe_Remembers_Its_Future.pdf');
}
