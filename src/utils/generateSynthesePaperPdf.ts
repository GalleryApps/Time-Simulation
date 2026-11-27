/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Scientific Magazine A4 Direct PDF Exporter for Paper 15 (Synthese Journal):
 * "Where or Who Is the Observer? The Observer in Phenomenology, Quantum Foundations, and Systems Theory"
 *
 * Implements the 40-Shade Dark Blue, Slate Blue, Slate Gray Blue, Deep Sea Blue-Green,
 * Muted Blue-Green & Frost/Mist Slate Palette:
 * - Mineral White & Ice Folio reading sheets with nocturnal #08182E full-page plate/figure backdrops
 * - PlayfairDisplay-Regular (non-bold) headlines
 * - DejaVuSerif / NotoSerif-Italic / DejaVuSans / DejaVuSansMono for body, captions, math & logic
 * - Hardened pagination, dynamic 5-page TOC pruning, per-line rules, and strict A4 margin guards (22..188mm, <=270mm)
 */

import { jsPDF } from 'jspdf';
import {
  SYNTHESE_META,
  SYNTHESE_ABSTRACT,
  SYNTHESE_AXIOM_TABLE,
  SYNTHESE_ROADMAP,
  SYNTHESE_NOTATION_TABLE,
  SYNTHESE_HOW_TO_READ,
  SYNTHESE_ARGUMENT_MAP,
  SYNTHESE_32_MATRIX,
  SYNTHESE_CHAPTERS,
  TABLE_2_1_PHENOMENOLOGY,
  TABLE_3_1_DECONSTRUCTION,
  TABLE_4_1_QUANTUM,
  TABLE_5_1_SYSTEMS,
  TABLE_6_1_RESOLUTION,
  TABLE_7_1_IDENTITY_SYNTHESIS,
  TABLE_8_1_TESTABLE_CORRELATION,
  TABLE_8_4_AUXILIARY_ASSUMPTIONS,
  SYNTHESE_INDEPENDENCE_MODELS,
  SYNTHESE_SYMBOL_GLOSSARY,
  SYNTHESE_GLOSSARY,
  SYNTHESE_APPENDICES,
  SYNTHESE_REFERENCES,
  SYNTHESE_INDEX_OF_NAMES,
  SYNTHESE_INDEX_OF_CONCEPTS,
  type SyntheseEquation
} from '../types/synthesePaperData';
import { SYNTHESE_PLATES, SYNTHESE_FIGURES } from '../components/SynthesePaperFigures';
import { SHADE_BY_ID } from '../physics/synthesePhilosophyPaper';
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
    .replace(/𝐋𝐨𝐫/g, 'Lor')
    .replace(/𝐈𝐧𝐟𝐨𝐆𝐞𝐨𝐦/g, 'InfoGeom')
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
    .replace(/⊈/g, '!/<=')
    .replace(/⊊/g, '<')
    .replace(/∖/g, '\\')
    .replace(/≺/g, '<')
    .replace(/≻/g, '>')
    .replace(/−|–|—|─/g, '-')
    .replace(/×/g, 'x')
    .replace(/≤/g, '<=')
    .replace(/≥/g, '>=')
    .replace(/≪/g, '<<')
    .replace(/≫/g, '>>')
    .replace(/≠/g, '!=')
    .replace(/≈/g, '~=')
    .replace(/≡/g, '===')
    .replace(/→|⇄|⇔|⇒/g, '->')
    .replace(/↛|⇏/g, '-/->')
    .replace(/←/g, '<-')
    .replace(/⊢/g, '|-')
    .replace(/⊨/g, '|=')
    .replace(/⊭/g, '|/=')
    .replace(/⊥/g, '_|_')
    .replace(/¬/g, '~')
    .replace(/□/g, '[]')
    .replace(/◇/g, '<>')
    .replace(/▶/g, '>')
    .replace(/″/g, '"')
    .replace(/[^\x20-\x7E\xA0-\xFF]/g, '');
}

const SERIF_USE_SANS = new Set([
  '\u00AC', '\u0101', '\u012B', '\u015A', '\u015B', '\u016B', '\u03D5', '\u03F5',
  '\u1E43', '\u1E47', '\u1E5B', '\u1E63',
  '\u210B', '\u210F', '\u2112', '\u2113', '\u211D', '\u2124', '\u2131',
  '\u2190', '\u2191', '\u2192', '\u2193', '\u2194', '\u2197', '\u219B', '\u21A6', '\u21C4', '\u21CF', '\u21D2', '\u21D4',
  '\u2200', '\u2202', '\u2203', '\u2204', '\u2205', '\u2207', '\u2208', '\u2209', '\u220A', '\u220F', '\u2211',
  '\u2212', '\u2216', '\u2218', '\u221A', '\u221D', '\u221E', '\u2225', '\u2227', '\u2228', '\u2229', '\u222A', '\u222B',
  '\u222E', '\u223C', '\u2243', '\u2245', '\u2248', '\u2260', '\u2261', '\u2262', '\u2264',
  '\u2265', '\u226A', '\u226B', '\u2272', '\u2273', '\u227A', '\u227B', '\u2282', '\u2284', '\u2286', '\u2288', '\u228A', '\u2294',
  '\u2295', '\u2297', '\u2299', '\u22A2', '\u22A3', '\u22A5', '\u22A8', '\u22AC', '\u22AD', '\u22C3', '\u22C5', '\u2500', '\u25A1', '\u25B6', '\u25C7', '\u266E',
  '\u2713', '\u2717', '\u27E8', '\u27E9', '\u2016', '\u2032', '\u2033', '\u2020', '\u2609'
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
          ctx.fillStyle = '#08182E';
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

async function fetchImageDataUrl(
  urlPath: string,
  cropDeckledEdge = false
): Promise<{ dataUrl: string; aspect: number } | null> {
  if (typeof fetch === 'undefined' || typeof document === 'undefined') return null;
  try {
    const res = await fetch(urlPath, { credentials: 'same-origin' });
    if (!res.ok) return null;
    const blob = await res.blob();
    const objUrl = URL.createObjectURL(blob);
    return await new Promise((resolve) => {
      const img = new Image();
      const timer = setTimeout(() => {
        URL.revokeObjectURL(objUrl);
        resolve(null);
      }, 5000);
      img.onload = () => {
        clearTimeout(timer);
        try {
          const sx = cropDeckledEdge ? Math.round(img.width * 0.03) : 0;
          const sy = cropDeckledEdge ? Math.round(img.height * 0.03) : 0;
          const sw = cropDeckledEdge ? Math.max(1, Math.round(img.width * 0.94)) : img.width;
          const sh = cropDeckledEdge ? Math.max(1, Math.round(img.height * 0.94)) : img.height;
          const maxW = 1600;
          const scale = sw > maxW ? maxW / sw : 1;
          const canvas = document.createElement('canvas');
          canvas.width = Math.max(1, Math.round(sw * scale));
          canvas.height = Math.max(1, Math.round(sh * scale));
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            URL.revokeObjectURL(objUrl);
            resolve(null);
            return;
          }
          ctx.fillStyle = '#08182E';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
          URL.revokeObjectURL(objUrl);
          resolve({ dataUrl: canvas.toDataURL('image/jpeg', 0.92), aspect: canvas.height / canvas.width });
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
// 40-Shade Dark Blue, Slate Gray Blue, Muted Blue-Green & Frost/Mist Slate Palette
const SHEET_WHITE: RgbTuple = SHADE_BY_ID[40].rgb; // #F7FAFC
const FOLIO_ICE: RgbTuple = SHADE_BY_ID[39].rgb; // #F0F6FA
const SLATE_WASH: RgbTuple = SHADE_BY_ID[38].rgb; // #E5EFF5
const CLOUD_MIST: RgbTuple = SHADE_BY_ID[37].rgb; // #D5E2EA
const PALE_RULE: RgbTuple = SHADE_BY_ID[36].rgb; // #BFD0DA
const FROST_BORDER: RgbTuple = SHADE_BY_ID[35].rgb; // #A6BCC8

const DARK_NAVY_BG: RgbTuple = SHADE_BY_ID[3].rgb; // #08182E
const PRUSSIAN_INK: RgbTuple = SHADE_BY_ID[4].rgb; // #0B203B
const INDIGO_INK: RgbTuple = SHADE_BY_ID[5].rgb; // #0F294A
const ROYAL_BLUE: RgbTuple = SHADE_BY_ID[6].rgb; // #14335A
const COBALT_ACCENT: RgbTuple = SHADE_BY_ID[7].rgb; // #1B3F6C
const SAPPHIRE_LINK: RgbTuple = SHADE_BY_ID[8].rgb; // #244D7E

const IRON_SLATE: RgbTuple = SHADE_BY_ID[16].rgb; // #35485B
const GLACIER_SLATE: RgbTuple = SHADE_BY_ID[18].rgb; // #51677B
const PELAGIC_BG: RgbTuple = SHADE_BY_ID[26].rgb; // #28676A
const LICHEN_BG: RgbTuple = SHADE_BY_ID[29].rgb; // #2D5E5D
const SEAMIST_BG: RgbTuple = SHADE_BY_ID[31].rgb; // #48827E

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

  const illustrationPages = new Set<number>();
  const NAVY_BG: RgbTuple = DARK_NAVY_BG;
  const WHITE_INK: RgbTuple = FOLIO_ICE;
  const SLATE_INK: RgbTuple = PALE_RULE;

  const paintSheetBackdrop = () => {
    doc.setFillColor(...SHEET_WHITE);
    doc.rect(0, 0, 210, 297, 'F');
  };

  const paintNavyIllustrationBackdrop = () => {
    doc.setFillColor(...NAVY_BG);
    doc.rect(0, 0, 210, 297, 'F');
    illustrationPages.add(doc.getNumberOfPages());
  };

  const ensureSpace = (neededMm: number) => {
    if (y + neededMm > bottomLimit) {
      doc.addPage();
      paintSheetBackdrop();
      y = topY;
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
      const fam = resolveCharBucket(ch, baseFamily, resolvedStyle);
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
      const fam = resolveCharBucket(ch, baseFamily, resolvedStyle);
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
    color: RgbTuple = PRUSSIAN_INK,
    boldBase = false,
    justify = false,
    baseFamily: PdfFontFamily = 'serif',
    baseStyle?: PdfFontStyle,
    leftRule?: { x: number; color: RgbTuple; width: number }
  ) => {
    const lines = wrapMixedLines(rawText, maxW, boldBase, fontSize, baseFamily, baseStyle);
    for (const line of lines) {
      ensureSpace(lineGap + 1);
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
    if (level === 1 && startOnNewPage && y > topY + 2) {
      doc.addPage();
      paintSheetBackdrop();
      y = topY;
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
    if (y + effBefore + headingH + gapAfter + followMm > bottomLimit && y > topY + 2) {
      doc.addPage();
      paintSheetBackdrop();
      y = topY;
    }

    const gapBefore = y <= topY + 2 ? (level === 1 ? 3 : 2) : baseGapBefore;
    y += gapBefore;
    if (recordToc) {
      tocEntries.push({ label: text, page: doc.getNumberOfPages(), indent: tocIndent });
    }
    doc.setTextColor(...(level === 1 ? PRUSSIAN_INK : ROYAL_BLUE));
    for (const hLine of wrappedHeading) {
      drawStyledSpans(hLine.spans, marginX, y, boldHeading, headingFamily, headingStyle);
      y += lineGap;
    }
    if (level === 1) {
      doc.setDrawColor(...PELAGIC_BG);
      doc.setLineWidth(0.45);
      doc.line(marginX, y + 1.5, marginX + 42, y + 1.5);
      doc.setDrawColor(...FROST_BORDER);
      doc.setLineWidth(0.25);
      doc.line(marginX + 44, y + 1.5, marginX + contentW, y + 1.5);
    }
    y += gapAfter;
  };

  const drawEquationBox = (eq: SyntheseEquation) => {
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
    const plainLines = wrapMixedLines(stripPdfInlineMarkdown(eq.plainMeaning), contentW - 14, false, 8.4, 'serif', 'normal');
    const boxH =
      7.0 +
      eqLines.length * eqLineGap +
      4.0 +
      capLines.length * 4.2 +
      2.2 +
      plainLines.length * 4.2 +
      3.5;

    ensureSpace(Math.min(boxH + 9, bottomLimit - topY - 4));
    y += 1.5;
    doc.setFillColor(...FOLIO_ICE);
    doc.setDrawColor(...FROST_BORDER);
    doc.setLineWidth(0.32);
    doc.roundedRect(marginX, y, contentW, boxH, 1.5, 1.5, 'FD');

    let cy = y + 7.0;
    doc.setTextColor(...PRUSSIAN_INK);
    for (const l of eqLines) {
      const lw = measureSpansWidth(l.spans, false, baseEqFont, 'normal');
      const cx = marginX + Math.max(6, Math.min(contentW - lw - 6, (contentW - lw) / 2));
      drawStyledSpans(l.spans, cx, cy, false, baseEqFont, 'normal');
      cy += eqLineGap;
    }
    doc.setDrawColor(...PALE_RULE);
    doc.setLineWidth(0.2);
    doc.line(marginX + 10, cy - 1.4, marginX + contentW - 10, cy - 1.4);
    cy += 3.0;
    doc.setTextColor(...INDIGO_INK);
    for (const cl of capLines) {
      const clw = measureSpansWidth(cl.spans, false, 'serif', 'italic');
      const cx = marginX + Math.max(6, Math.min(contentW - clw - 6, (contentW - clw) / 2));
      drawStyledSpans(cl.spans, cx, cy, false, 'serif', 'italic');
      cy += 4.2;
    }
    cy += 2.2;
    doc.setTextColor(...PELAGIC_BG);
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
    fillColor: RgbTuple = SLATE_WASH,
    borderColor: RgbTuple = COBALT_ACCENT,
    fontSize = 10.0,
    lineGap = 5.1
  ) => {
    const bodyLines = wrapMixedLines(rawBody, contentW - 12, false, fontSize, 'serif');
    const hasLabel = Boolean(label && label.trim().length > 0);
    const padTop = 6.2;
    const padBottom = 5.0;
    const totalNeeded = (hasLabel ? 5.6 : 0) + bodyLines.length * lineGap + padTop + padBottom;

    if (y + totalNeeded + 6 > bottomLimit && totalNeeded + 6 <= bottomLimit - topY && y > topY + 2) {
      doc.addPage();
      paintSheetBackdrop();
      y = topY;
    }

    let lineIdx = 0;
    let isFirstSlice = true;
    while (lineIdx < bodyLines.length || isFirstSlice) {
      const labelH = isFirstSlice && hasLabel ? 5.6 : 0;
      const overhead = padTop + labelH + padBottom;
      if (y + overhead + lineGap * 2 > bottomLimit && y > topY + 2) {
        doc.addPage();
        paintSheetBackdrop();
        y = topY;
        continue;
      }
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
        doc.setTextColor(...ROYAL_BLUE);
        doc.text(clipMixedLine(safeStr(label), contentW - 12, false, 8.0, 'mono'), marginX + 6, cy);
        cy += 5.6;
      }
      doc.setTextColor(...PRUSSIAN_INK);
      for (const line of slice) {
        drawStyledSpans(line.spans, marginX + 6, cy, false, 'serif', 'normal');
        cy += lineGap;
      }
      y += sliceH + 5.2;
      lineIdx += slice.length;
      isFirstSlice = false;
      if (lineIdx < bodyLines.length) {
        doc.addPage();
        paintSheetBackdrop();
        y = topY;
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
      const bLines = isContinuation ? contLines : capLines;
      const bH = isContinuation ? contH : capH;
      doc.setFillColor(...FOLIO_ICE);
      doc.setDrawColor(...FROST_BORDER);
      doc.setLineWidth(0.3);
      doc.rect(marginX, y, contentW, bH, 'FD');
      doc.setTextColor(...ROYAL_BLUE);
      let by = y + 4.2;
      for (const bl of bLines) {
        drawStyledSpans(bl.spans, marginX + 3.0, by, true, 'serif', 'bold');
        by += 4.3;
      }
      y += bH;

      doc.setFillColor(...SLATE_WASH);
      doc.setDrawColor(...GLACIER_SLATE);
      doc.setLineWidth(0.3);
      doc.rect(marginX, y, contentW, headerH, 'FD');
      let cx = marginX;
      doc.setTextColor(...INDIGO_INK);
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
    if (y + capH + headerH + Math.min(firstRowH, 45) > bottomLimit) {
      doc.addPage();
      paintSheetBackdrop();
      y = topY;
    }
    drawBannerAndHeader(false);

    for (let ri = 0; ri < wrappedRows.length; ri++) {
      const rH = rowHeights[ri];
      if (y + rH > bottomLimit && y > topY + 2) {
        doc.addPage();
        paintSheetBackdrop();
        y = topY;
        drawBannerAndHeader(true);
      }
      if (ri % 2 === 1) doc.setFillColor(...FOLIO_ICE);
      else doc.setFillColor(...SHEET_WHITE);
      doc.setDrawColor(...FROST_BORDER);
      doc.setLineWidth(0.22);
      doc.rect(marginX, y, contentW, rH, 'FD');

      let cx = marginX;
      doc.setTextColor(...PRUSSIAN_INK);
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
    title: string;
    caption: string;
    asset: { dataUrl: string; aspect: number };
    format: 'PNG' | 'JPEG';
  }) => {
    doc.addPage();
    paintNavyIllustrationBackdrop();
    y = 26;

    setFontSafe('mono', 'normal', 8.2);
    doc.setTextColor(...SLATE_INK);
    doc.text(clipMixedLine(safeStr(opts.tag), contentW, false, 8.2, 'mono'), marginX, y);
    y += 3.5;
    doc.setDrawColor(...WHITE_INK);
    doc.setLineWidth(0.28);
    doc.line(marginX, y, marginX + contentW, y);
    y += 6.5;

    drawMathInlineText(opts.title, marginX, contentW, 13.5, 6.2, WHITE_INK, false, false, 'playfair', 'normal');
    y += 3.2;

    const capFontSize = 9.2;
    const capLineGap = 4.6;
    const capLines = wrapMixedLines(opts.caption, contentW - 4, false, capFontSize, 'serif');
    const capBlockH = 4.5 + capLines.length * capLineGap + 2.0;

    const availArtH = Math.max(80, 274 - y - capBlockH - 8.0);
    let drawW = contentW + 10;
    let drawH = drawW * opts.asset.aspect;
    if (drawH > availArtH) {
      drawH = availArtH;
      drawW = drawH / Math.max(0.05, opts.asset.aspect);
    }
    const drawX = (pageW - drawW) / 2;
    const drawY = y + Math.max(0, (availArtH - drawH) / 2);

    doc.addImage(opts.asset.dataUrl, opts.format, drawX, drawY, drawW, drawH);

    const capStartY = y + availArtH + 4.5;
    doc.setDrawColor(...SLATE_INK);
    doc.setLineWidth(0.22);
    doc.line(marginX, capStartY, marginX + contentW, capStartY);
    y = capStartY + 4.8;
    drawMathInlineText(opts.caption, marginX + 2, contentW - 4, capFontSize, capLineGap, SLATE_INK, false, true);
    y = bottomLimit;
  };

  const drawFormattedParagraph = (
    rawPara: string,
    xStart = marginX,
    maxW = contentW,
    fontSize = 11.2,
    lineGap = 6.0,
    color: RgbTuple = PRUSSIAN_INK,
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
    paintSheetBackdrop,
    illustrationPages,
    NAVY_BG,
    WHITE_INK,
    SLATE_INK,
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

export async function buildSynthesePdfDocument(existingDoc?: jsPDF): Promise<jsPDF> {
  const fonts = await loadFonts();
  const doc = existingDoc ?? new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait', compress: true });
  const hasUnicodeFonts = registerAllFontsOnDoc(doc, fonts);
  const ctx = createPdfContext(doc, hasUnicodeFonts);
  const { marginX, contentW, topY, bottomLimit, pageW, tocEntries } = ctx;

  const [svgAssets, plateAssets] = await Promise.all([
    Promise.all(SYNTHESE_FIGURES.map(async (f) => ({ fig: f, raster: await rasterizeSvgDataUrl(f.svgMarkup) }))),
    Promise.all(
      SYNTHESE_PLATES.map(async (p) => ({
        plate: p,
        raster: await fetchImageDataUrl(p.imagePath, Boolean(p.cropDeckledEdge))
      }))
    )
  ]);

  // Restrained Archival Cover Page (Page 1)
  ctx.paintSheetBackdrop();
  ctx.setY(26);
  doc.setDrawColor(...ROYAL_BLUE);
  doc.setLineWidth(0.8);
  doc.line(marginX, ctx.getY(), marginX + contentW, ctx.getY());
  ctx.addY(1.6);
  doc.setDrawColor(...PELAGIC_BG);
  doc.setLineWidth(0.28);
  doc.line(marginX, ctx.getY(), marginX + contentW, ctx.getY());
  ctx.addY(12.0);

  ctx.drawMathInlineText(SYNTHESE_META.title, marginX, contentW, 23.0, 10.2, PRUSSIAN_INK, false, false, 'playfair', 'normal');
  ctx.addY(4.5);

  doc.setDrawColor(...PELAGIC_BG);
  doc.setLineWidth(0.6);
  doc.line(marginX, ctx.getY(), marginX + 48, ctx.getY());
  ctx.addY(6.5);

  ctx.drawMathInlineText(SYNTHESE_META.laymanDeck, marginX, contentW, 12.2, 5.8, ROYAL_BLUE, false, false, 'serif', 'italic');
  ctx.addY(10.0);

  for (const author of SYNTHESE_META.authors) {
    ctx.drawMathInlineText(author.name, marginX, contentW, 9.8, 4.2, PRUSSIAN_INK, true, false);
    ctx.drawMathInlineText(author.affiliation, marginX + 2, contentW - 2, 8.2, 3.7, IRON_SLATE, false, false);
    if (author.orcidUrl) {
      const orcidText = `ORCID: ${author.orcidUrl}`;
      const orcidY = ctx.getY();
      ctx.drawMathInlineText(orcidText, marginX + 2, contentW - 2, 7.2, 3.4, PELAGIC_BG, false, false, 'mono');
      const linkW = Math.min(contentW - 2, ctx.measureTokenWidth(orcidText, false, 7.2, 'mono'));
      if (typeof (doc as unknown as { link?: unknown }).link === 'function') {
        doc.link(marginX + 2, orcidY - 2.6, linkW, 3.3, { url: author.orcidUrl });
      }
    } else if (author.email) {
      const emailText = `Email: ${author.email}`;
      ctx.drawMathInlineText(emailText, marginX + 2, contentW - 2, 7.2, 3.4, PELAGIC_BG, false, false, 'mono');
    } else if (author.orcidNote) {
      ctx.drawMathInlineText(author.orcidNote, marginX + 2, contentW - 2, 7.0, 3.3, GLACIER_SLATE, false, false, 'mono');
    }
    ctx.addY(2.2);
  }

  if (ctx.getY() < 256) ctx.setY(256);
  doc.setDrawColor(...FROST_BORDER);
  doc.setLineWidth(0.32);
  doc.line(marginX, ctx.getY(), marginX + contentW, ctx.getY());

  // Abstract Page
  doc.addPage();
  ctx.paintSheetBackdrop();
  ctx.setY(topY);
  ctx.drawHeading('Abstract', 1, true, 0, false);
  for (const p of SYNTHESE_ABSTRACT) {
    ctx.drawMathInlineText(p, marginX, contentW, 10.6, 5.5, PRUSSIAN_INK, false, true);
    ctx.addY(3.0);
  }
  ctx.addY(2.5);
  ctx.drawMathInlineText(`Keywords: ${SYNTHESE_META.keywords.join('; ')}.`, marginX, contentW, 8.7, 4.4, PELAGIC_BG, false, true);

  // Reserve 5 TOC Pages (unused trailing pages pruned dynamically below)
  const tocPages: number[] = [];
  for (let tp = 0; tp < 5; tp++) {
    doc.addPage();
    ctx.paintSheetBackdrop();
    tocPages.push(doc.getNumberOfPages());
  }
  doc.addPage();
  ctx.paintSheetBackdrop();
  ctx.setY(topY);

  // Front-Matter Treatise Roadmap, Table of Axioms, Standardized Notation & Reading Guide
  ctx.drawHeading('Table of Axioms (A1–A4) & Treatise Apparatus', 1, true, 0, false);
  ctx.drawTable(
    'Treatise Roadmap Across Chapters 1–9 (§§0.1–43)',
    ['Chapter', 'Sections', 'Core Deductive & Genealogy Contribution', 'Visual Anchor'],
    [24, 24, 68, 50],
    SYNTHESE_ROADMAP.map((rm) => [rm.chapter, rm.sections, rm.centralMove, rm.visualAnchor]),
    7.6,
    3.9
  );
  ctx.drawTable(
    'Table A.0 · Canonical Statement, Modal Status, Reductio & Empirical Falsifier for Axioms A1–A4',
    ['Axiom', 'Canonical S4 Formula', 'Modal / Epistemic Status', 'Reductio on Denial', 'Empirical Falsifier'],
    [28, 42, 32, 32, 32],
    SYNTHESE_AXIOM_TABLE.map((ax) => [
      `${ax.code} · ${ax.name}`,
      ax.canonicalFormula,
      ax.modalAndEpistemicStatus,
      ax.reductioOnDenial,
      ax.falsificationTrigger
    ]),
    7.4,
    3.85
  );
  ctx.drawTable(
    'Standardized Logical Notation Across Chapters 1–9',
    ['Symbol', 'Formal Meaning', 'First Defined'],
    [36, 98, 32],
    SYNTHESE_NOTATION_TABLE.map((n) => [n.symbol, n.role, n.firstDefined]),
    7.6,
    3.9
  );

  ctx.drawHeading('How to Read This Treatise', 2, true, 1, false, 36);
  ctx.drawTable(
    'Recommended Disciplinary Entry Paths',
    ['Audience', 'Essential Reading Path', 'Primary Focus'],
    [36, 46, 84],
    SYNTHESE_HOW_TO_READ.map((tr) => [tr.audience, tr.essentialSections, tr.entryFocus]),
    7.8,
    4.0
  );

  // Front-Matter Illustrations Index
  ctx.drawHeading('List of Plates & Figures (29 Full-Page A4 Plates & Schematics)', 1, true, 0, true);
  ctx.drawHeading('Editorial Calligram Plates I–XVIII (18 Full-Page Plates)', 2, false, 1);
  for (const pl of SYNTHESE_PLATES) {
    ctx.drawMathInlineText(`${pl.plateNumber} (Chapter ${pl.anchorChapter}): ${pl.title}`, marginX + 2, contentW - 2, 9.6, 4.9, PRUSSIAN_INK);
    ctx.addY(1.0);
  }
  ctx.addY(2.0);
  ctx.drawHeading('Conceptual Calligram Schematics 0.1–9.1 (11 Full-Page Vector Figures)', 2, false, 1);
  for (const fg of SYNTHESE_FIGURES) {
    ctx.drawMathInlineText(`${fg.figureNumber} (${fg.anchorChapter === 0 ? 'Abstract' : `Chapter ${fg.anchorChapter}`}): ${fg.title}`, marginX + 2, contentW - 2, 9.6, 4.9, PRUSSIAN_INK);
    ctx.addY(1.0);
  }

  for (const { fig, raster } of svgAssets.filter((x) => x.fig.anchorChapter === 0)) {
    if (!raster) continue;
    ctx.drawFullPageIllustration({
      tag: `${fig.figureNumber}`,
      title: fig.title,
      caption: fig.caption,
      asset: raster,
      format: 'PNG'
    });
  }

  // Chapters 1–9
  for (const ch of SYNTHESE_CHAPTERS) {
    doc.addPage();
    ctx.paintSheetBackdrop();
    ctx.setY(topY);
    ctx.drawHeading(`Chapter ${ch.number}: ${ch.title}`, 1, true, 0, false);
    ctx.drawMathInlineText(ch.epigraph, marginX + 4, contentW - 8, 10.4, 5.3, PELAGIC_BG, false, true, 'serif', 'italic');
    ctx.addY(4.5);

    if (ch.chapterIntro.length > 0) {
      ctx.ensureSpace(24);
      for (const introPara of ch.chapterIntro) {
        ctx.drawFormattedParagraph(introPara, marginX, contentW, 11.1, 6.0, PRUSSIAN_INK, true);
        ctx.addY(3.2);
      }
      if (ctx.getY() + 2 <= bottomLimit) {
        doc.setDrawColor(...FROST_BORDER);
        doc.setLineWidth(0.2);
        doc.line(marginX, ctx.getY(), marginX + contentW, ctx.getY());
        ctx.addY(5.4);
      } else {
        ctx.ensureSpace(6);
      }
    }

    if (ch.number === 7) {
      ctx.drawHeading(SYNTHESE_ARGUMENT_MAP.title, 2, false, 1, false, 40);
      ctx.drawMathInlineText(SYNTHESE_ARGUMENT_MAP.summary, marginX, contentW, 10.2, 5.2, PELAGIC_BG, false, true);
      ctx.addY(2.5);
      ctx.drawTable(
        'Argument Map · Stratified Dependencies Among A1–A4 & SIT',
        ['Stage', 'Logical Rule', 'Establishes'],
        [38, 66, 62],
        SYNTHESE_ARGUMENT_MAP.nodes.map((n) => [n.step, n.rule, n.leadsTo]),
        7.8,
        4.0
      );
    }

    for (const sub of ch.subsections) {
      ctx.drawHeading(`§${sub.number}. ${sub.title}`, 2, true, 1, false, 32);
      for (const p of sub.paragraphs) {
        ctx.drawFormattedParagraph(p, marginX, contentW, 11.2, 6.0, PRUSSIAN_INK, true);
        ctx.addY(3.5);
      }
      if (sub.equation) ctx.drawEquationBox(sub.equation);
      if (sub.theoremBox) {
        ctx.drawCalloutBox(
          `${sub.theoremBox.kind} ${sub.theoremBox.number} · ${sub.theoremBox.title}`,
          `${stripPdfInlineMarkdown(sub.theoremBox.statement)}\n\nDeductive Steps:\n${sub.theoremBox.proofSteps.map((s, i) => `${i + 1}. ${stripPdfInlineMarkdown(s)}`).join('\n')}\n\nSource: ${sub.theoremBox.sourceNote}`,
          SLATE_WASH,
          COBALT_ACCENT,
          9.8,
          4.9
        );
      }
      if (sub.workedExample) {
        ctx.ensureSpace(36);
        ctx.addY(2.0);
        const headerY = ctx.getY();
        doc.setFillColor(...FOLIO_ICE);
        doc.setDrawColor(...PELAGIC_BG);
        doc.setLineWidth(0.3);
        doc.roundedRect(marginX, headerY, contentW, 8.0, 1.2, 1.2, 'FD');
        ctx.setFontSafe('mono', 'normal', 7.6);
        doc.setTextColor(...ROYAL_BLUE);
        doc.text(ctx.clipMixedLine(ctx.safeStr(sub.workedExample.title), contentW - 8, false, 7.6, 'mono'), marginX + 4, headerY + 5.2);
        ctx.setY(headerY + 11.2);

        const tealRule = { x: marginX + 1.5, color: PELAGIC_BG, width: 0.6 };
        ctx.drawMathInlineText(stripPdfInlineMarkdown(sub.workedExample.setup), marginX + 5, contentW - 7, 10.1, 5.2, INDIGO_INK, false, true, 'serif', 'normal', tealRule);
        ctx.addY(1.2);
        sub.workedExample.steps.forEach((st, idx) => {
          ctx.drawMathInlineText(`${idx + 1}. ${stripPdfInlineMarkdown(st)}`, marginX + 6, contentW - 8, 10.0, 5.2, PRUSSIAN_INK, false, true, 'serif', 'normal', tealRule);
          ctx.addY(1.0);
        });
        ctx.drawEquationBox(sub.workedExample.resultEquation);
        ctx.drawMathInlineText(`Conclusion: ${stripPdfInlineMarkdown(sub.workedExample.takeaway)}`, marginX + 3, contentW - 5, 9.9, 5.1, LICHEN_BG, false, true, 'serif', 'italic');
        ctx.addY(4.2);
      }
    }

    if (ch.number === 2) {
      ctx.drawTable(
        'Table 2.1 · Phenomenological & Transcendental Genealogy Matrix (§§2–9)',
        ['Theory', 'Core Structural Claim', 'Paradox Encountered', 'Logical Counterpart'],
        [38, 42, 44, 42],
        TABLE_2_1_PHENOMENOLOGY.map((r) => [r.theory, r.coreClaim, r.paradoxEncountered, r.bundleCounterpart])
      );
    }
    if (ch.number === 3) {
      ctx.drawTable(
        'Table 3.1 · Deconstructive & Post-Structuralist Matrix (§§10–15a)',
        ['Theory', 'Core Claim', 'Structural Dissolution', 'Logical Counterpart'],
        [38, 42, 44, 42],
        TABLE_3_1_DECONSTRUCTION.map((r) => [r.theory, r.coreClaim, r.structuralDissolution, r.bundleCounterpart])
      );
    }
    if (ch.number === 4) {
      ctx.drawTable(
        'Table 4.1 · Orthodox Quantum Foundations Observer Models (§§16–20)',
        ['Framework', 'Where Observer Sits', 'Cut Status', 'Philosophical Mapping'],
        [38, 40, 42, 46],
        TABLE_4_1_QUANTUM.slice(0, 5).map((r) => [r.theory, r.observerSeat, r.cutStatus, r.bundleMapping])
      );
    }
    if (ch.number === 5) {
      ctx.drawTable(
        'Table 5.1 · Relational, Epistemic, Decoherent & Dynamical Quantum Models (§§21–27)',
        ['Framework', 'Where Observer Sits', 'Cut / Decoherence Status', 'Philosophical Mapping'],
        [38, 40, 42, 46],
        TABLE_4_1_QUANTUM.slice(5).map((r) => [r.theory, r.observerSeat, r.cutStatus, r.bundleMapping])
      );
    }
    if (ch.number === 6) {
      ctx.drawTable(
        'Table 6.1 · Systems-Theoretical & Enactive Closure Matrix (§§28–33)',
        ['Theory', 'Core Claim', 'Closure Mechanism', 'Logical Counterpart'],
        [38, 42, 44, 42],
        TABLE_5_1_SYSTEMS.map((r) => [r.theory, r.coreClaim, r.closureMechanism, r.bundleCounterpart])
      );
    }
    if (ch.number === 7) {
      ctx.drawTable(
        'Table 7.1 · Axiomatic Resolution of the Constitutive-Absence Paradox (§§34–37)',
        ['Logical Principle', 'Structural Role', 'Phenomenological Correlate', 'Antinomy Dissolved'],
        [38, 42, 43, 43],
        TABLE_6_1_RESOLUTION.map((r) => [r.formalObject, r.mathematicalRole, r.phenomenologicalCorrelate, r.obstructionResolved])
      );
      ctx.drawTable(
        'Table 7.2 · Separating Countermodels & Axiom Independence Matrix (M_~A1..M_~A4, §37)',
        ['Model', 'Semantic Domain & Structure', 'A1', 'A2', 'A3', 'A4', 'Independence Proof'],
        [28, 46, 10, 10, 10, 10, 52],
        SYNTHESE_INDEPENDENCE_MODELS.map((m) => [m.model, m.domainAndStructure, m.a1, m.a2, m.a3, m.a4, m.diagnosticProof]),
        7.3,
        3.75
      );
    }
    if (ch.number === 8) {
      ctx.drawTable(
        'Table 8.1 · Master 32-Position Axiomatic Cross-Reference Matrix (§§2–33 × A1–A4)',
        ['§', 'Framework', 'A1', 'A2', 'A3', 'A4', 'Structural Synthesis & Anomaly Note'],
        [12, 42, 11, 11, 11, 11, 68],
        SYNTHESE_32_MATRIX.map((r) => [r.section, r.framework, r.a1, r.a2, r.a3, r.a4, r.statusNote]),
        7.3,
        3.75
      );
      ctx.drawTable(
        'Table 8.2 · Cross-Tradition Structural Identity Audit (§§38–39)',
        ['Criterion', 'Husserl', 'Rovelli RQM', 'Autopoiesis & Four-Axiom Logic'],
        [34, 42, 42, 48],
        TABLE_7_1_IDENTITY_SYNTHESIS.map((r) => [r.structuralCriterion, r.husserlPhenom, r.rovelliRqm, `${r.autopoiesisBio} · ${r.fiberBundleFormal}`])
      );
      ctx.drawTable(
        'Table 8.3 · Axiom-by-Axiom Empirical Falsification & Methodological Crucibles (§40)',
        ['Domain', 'Target Observable', 'Philosophical Prediction', 'Null Consequence'],
        [38, 44, 44, 40],
        TABLE_8_1_TESTABLE_CORRELATION.map((r) => [r.channel, r.targetObservable, r.predictedSignal, r.nullConsequence])
      );
      ctx.drawTable(
        'Table 8.4 · Auxiliary Assumptions Isolated Across Disjoint Experimental Crucibles (§40 · Duhem–Quine Defense)',
        ['Experimental Crucible', 'Target Axiom', 'Isolated Auxiliary Assumptions', 'Anti-Holism Decoupling Guard'],
        [38, 26, 52, 50],
        TABLE_8_4_AUXILIARY_ASSUMPTIONS.map((r) => [r.crucible, r.targetAxiom, r.isolatedAuxiliaries, r.decouplingGuard]),
        7.4,
        3.85
      );
    }

    for (const { plate, raster } of plateAssets.filter((x) => x.plate.anchorChapter === ch.number)) {
      if (!raster) continue;
      ctx.drawFullPageIllustration({
        tag: `${plate.plateNumber} · Chapter ${ch.number}`,
        title: plate.title,
        caption: plate.caption,
        asset: raster,
        format: 'JPEG'
      });
    }

    for (const { fig, raster } of svgAssets.filter((x) => x.fig.anchorChapter === ch.number)) {
      if (!raster) continue;
      ctx.drawFullPageIllustration({
        tag: `${fig.figureNumber} · Chapter ${ch.number}`,
        title: fig.title,
        caption: fig.caption,
        asset: raster,
        format: 'PNG'
      });
    }
  }

  // Glossary
  ctx.drawHeading('Glossary', 1, true, 0, true);
  ctx.drawTable(
    'Philosophical & Conceptual Lexicon',
    ['Term', 'Definition'],
    [48, 118],
    SYNTHESE_GLOSSARY.map((g) => [g.acronym ? `${g.term} (${g.acronym})` : g.term, g.definition])
  );
  ctx.drawHeading('Logical Symbols & Axioms', 2, true, 1, false, 44);
  ctx.drawTable(
    'Table G.1 · Logical Symbols & Conventions',
    ['Symbol', 'Concept', 'Domain', 'Logical Definition'],
    [28, 34, 32, 72],
    SYNTHESE_SYMBOL_GLOSSARY.map((s) => [s.symbol, s.name, s.domain, s.definition]),
    7.8,
    4.0
  );

  // Supplementary Appendices A–D
  ctx.drawHeading(
    `Supplementary Appendices A–${SYNTHESE_APPENDICES[SYNTHESE_APPENDICES.length - 1]?.letter ?? 'D'}`,
    1,
    true,
    0,
    true,
    54
  );
  for (const app of SYNTHESE_APPENDICES) {
    ctx.drawHeading(`Appendix ${app.letter}: ${app.title}`, 2, true, 1, false, 40);
    ctx.drawMathInlineText(app.summary, marginX, contentW, 10.6, 5.5, PELAGIC_BG, false, true, 'serif', 'italic');
    ctx.addY(3.0);

    for (const p of app.paragraphs) {
      ctx.drawFormattedParagraph(p, marginX, contentW, 10.8, 5.8, PRUSSIAN_INK, true);
      ctx.addY(3.0);
    }
    for (const eq of app.equations) {
      ctx.drawEquationBox(eq);
    }
    if (app.theoremBoxes?.length) {
      for (const tb of app.theoremBoxes) {
        ctx.drawCalloutBox(
          `${tb.kind} ${tb.number} · ${tb.title}`,
          `${stripPdfInlineMarkdown(tb.statement)}\n\nDeductive Steps:\n${tb.proofSteps.map((s, i) => `${i + 1}. ${stripPdfInlineMarkdown(s)}`).join('\n')}\n\nSource: ${tb.sourceNote}`,
          SLATE_WASH,
          COBALT_ACCENT,
          9.8,
          4.9
        );
      }
    }
    if (app.reproducibilityLedger?.length) {
      ctx.drawTable(
        `Table ${app.letter}.1 · Formal & Dialectical Reproducibility Ledger`,
        ['Condition', 'Logical Rule', 'Tradition Grounds', 'Deductive Outcome'],
        [36, 42, 46, 42],
        app.reproducibilityLedger.map((r) => [r.checkpoint, r.formula, r.referenceConstants, r.computedOutput]),
        7.8,
        4.0
      );
    }
    if (app.refereeObjections?.length) {
      for (const obj of app.refereeObjections) {
        ctx.drawCalloutBox(obj.objection, obj.reply, FOLIO_ICE, FROST_BORDER, 9.7, 4.9);
      }
    }
  }

  // References
  ctx.drawHeading('References', 1, true, 0, true);
  for (const ref of SYNTHESE_REFERENCES) {
    const refStr = `[${ref.id}] ${ref.citation}`;
    const refLines = ctx.wrapMixedLines(refStr, contentW, false, 9.9, 'serif');
    ctx.ensureSpace(refLines.length * 5.1 + 2);
    ctx.drawMathInlineText(refStr, marginX, contentW, 9.9, 5.1, PRUSSIAN_INK, false, true);
    ctx.addY(2.0);
  }

  // Back-Matter Indexes
  ctx.drawHeading('Index of Names', 1, true, 0, true);
  ctx.drawTable(
    'Index of Names (Philosophers, Physicists & Systems Theorists)',
    ['Author / Thinker', 'Sections'],
    [114, 52],
    SYNTHESE_INDEX_OF_NAMES.map((it) => [it.entry, it.sections]),
    8.2,
    4.1
  );

  ctx.drawHeading('Index of Concepts', 1, true, 0, true);
  ctx.drawTable(
    'Index of Concepts & Theorems',
    ['Concept / Theorem', 'Sections'],
    [114, 52],
    SYNTHESE_INDEX_OF_CONCEPTS.map((it) => [it.entry, it.sections]),
    8.2,
    4.1
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
  const removedTocPages = tocPages.length - usedTocPages;
  for (let k = tocPages.length - 1; k >= usedTocPages; k--) {
    doc.deletePage(tocPages[k]);
  }
  for (const entry of tocEntries) {
    entry.page = Math.max(1, entry.page - removedTocPages);
  }

  let tocIdx = 0;
  doc.setPage(tocPages[tocIdx]);
  let ty = topY;
  ctx.setFontSafe(hasUnicodeFonts ? 'playfair' : 'serif', 'normal', 23.0);
  doc.setTextColor(...PRUSSIAN_INK);
  doc.text('Table of Contents', marginX, ty);
  ty += 5.5;
  doc.setDrawColor(...PELAGIC_BG);
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
      doc.setTextColor(...PRUSSIAN_INK);
      doc.text('Table of Contents (continued)', marginX, ty);
      ty += 5;
      doc.setDrawColor(...SEAMIST_BG);
      doc.setLineWidth(0.3);
      doc.line(marginX, ty, marginX + contentW, ty);
      ty += 8;
    }

    ctx.setFontSafe('serif', 'normal', fSize);
    doc.setTextColor(...(entry.indent ? PELAGIC_BG : PRUSSIAN_INK));
    for (let li = 0; li < labelLines.length; li++) {
      ctx.drawStyledSpans(labelLines[li].spans, marginX + indentPx, ty + li * lineStep, false, 'serif', 'normal');
    }
    ctx.setFontSafe('mono', 'normal', 8.5);
    doc.setTextColor(...ROYAL_BLUE);
    doc.text(String(entry.page), marginX + contentW, ty, { align: 'right' });
    ty += entryH;
  }

  // Stamp Running Headers & Footers
  const totalPages = doc.getNumberOfPages();
  const runningHeader = ctx.clipMixedLine(
    ctx.safeStr('Where or Who Is the Observer?'),
    contentW,
    false,
    7.6,
    'mono'
  );
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    if (p > 1) {
      const isDarkPlate = ctx.illustrationPages.has(p);
      ctx.setFontSafe('mono', 'normal', 7.6);
      doc.setTextColor(...(isDarkPlate ? ctx.SLATE_INK : GLACIER_SLATE));
      doc.text(runningHeader, marginX, 14);
      doc.setDrawColor(...(isDarkPlate ? ctx.WHITE_INK : IRON_SLATE));
      doc.setLineWidth(0.2);
      doc.line(marginX, 17, marginX + contentW, 17);
      ctx.setFontSafe('mono', 'normal', 8);
      doc.setTextColor(...(isDarkPlate ? ctx.WHITE_INK : ROYAL_BLUE));
      doc.text(`Page ${p} of ${totalPages}`, pageW / 2, 285, { align: 'center' });
    }
  }

  return doc;
}

export async function generateSynthesePaperPdf(): Promise<void> {
  const doc = await buildSynthesePdfDocument();
  doc.save('Paper_15_Synthese_Where_Is_The_Observer.pdf');
}
