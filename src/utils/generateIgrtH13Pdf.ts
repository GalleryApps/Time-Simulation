/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * IGRT-H13 Publication-Grade A4 Direct PDF Exporter (IGRT_H13_Monograph.pdf)
 * - Embeds static PlayfairDisplay-Regular.ttf (weight 400, strictly non-bold, 26.25pt)
 *   for Level-1 Chapter Titles & Cover Title, DejaVuSerif for body copy, NotoSerif-Italic
 *   for captions/summaries, DejaVuSans for full Greek/math glyph coverage, and DejaVuSansMono
 *   for equation tags & epistemic labels.
 * - Dedicated Cover Page with all 5 authors + clickable ORCID/Email links, Unified Abstract,
 *   Dynamic Reserved Table of Contents, Front-Matter Lists, 12 Principles Matrix, Chapters 1–13,
 *   9 Archival & Proof Apparatus Plates, 17 Chapter Vector Schematics, Glossary, References, and Appendices A–K.
 */

import { jsPDF } from 'jspdf';
import {
  H13_META,
  H13_METRIC_SIGNATURE_BOX,
  H13_FOUNDATIONAL_NOTE,
  H13_AXIOMS,
  H13_CORE_FALSIFICATION_CRITERIA,
  H13_MASTER_EQUATIONS,
  H13_ABSTRACT_PARAGRAPHS,
  H13_SCOPE_AND_NON_CLAIMS,
  H13_CORE_RESEARCH_PROGRAM,
  H13_TWELVE_PRINCIPLES_MATRIX,
  H13_SYMBOL_DECODER,
  H13_DIMENSIONAL_AUDIT,
  H13_BLACK_HOLE_TO_PORTAL_TAXONOMY,
  H13_PORTAL_BUILD_RECOMMENDATIONS,
  H13_WHITE_HOLE_BOUNCE_TABLE,
  H13_PROTOCOLS_P14_TO_P18,
  H13_PROTOCOL_SIGNAL_VS_SENSITIVITY,
  H13_PROTOCOL_CROSSCHECKS,
  H13_FALSIFICATION_CHECKLIST,
  H13_CONFIRMATION_CHECKLIST,
  H13_EPISTEMIC_LEDGER,
  H13_PROOF_DEVICES_AND_RECOMMENDATIONS,
  H13_GLOSSARY,
  H13_FAQ,
  H13_APPENDICES,
  H13_ACTION_FIELD_TABLE,
  H13_KK_CONSTRAINTS_TABLE,
  H13_GJW_ASSUMPTION_MATRIX,
  H13_GJW_PROOF_STEPS,
  H13_WH_PIPELINE_SPEC,
  H13_RK4_SENSITIVITY_TABLE,
  H13_SCOPE_LIMITATIONS,
  H13_RESEARCH_ROADMAP_2026_2035,
  H13_DEFINITIONS_LIST,
  H13_THEOREMS_LIST,
  H13_JOURNAL_DECLARATIONS,
  H13_REFERENCES,
  type H13Equation
} from '../types/igrtH13Apparatus';
import {
  H13_CHAPTERS,
  H13_FRONTMATTER_TABLES_LIST,
  H13_FRONTMATTER_EQUATIONS_LIST
} from '../types/igrtH13Data';
import { H13_ARCHIVAL_PLATES, H13_FIGURES } from '../components/IgrtH13Figures';
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

let cachedH13Fonts: Promise<LoadedPdfFonts | null> | null = null;
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
  if (dirEnd > buf.byteLength) throw new Error(`Truncated TTF table directory for ${label}`);

  const tables = new Map<string, { offset: number; length: number }>();
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
    tables.set(tag, { offset, length });
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

async function loadH13Fonts(): Promise<LoadedPdfFonts | null> {
  if (typeof fetch === 'undefined') return null;
  if (!cachedH13Fonts) {
    cachedH13Fonts = (async () => {
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
        cachedH13Fonts = null;
        return null;
      }
    })();
  }
  return cachedH13Fonts;
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

function bmpSafeH13(raw: string): string {
  const step1 = pdfBmpSafeUnicode(raw)
    .replace(/𝒜/g, 'A')
    .replace(/𝒪/g, 'O')
    .replace(/Ĥ/g, 'H')
    .replace(/Ψ/g, 'Ψ');
  let out = '';
  for (const ch of step1) {
    const cp = ch.codePointAt(0) ?? 32;
    if (cp <= 0xffff) {
      out += ch;
    }
  }
  return out;
}

function fallbackAsciiSafe(raw: string): string {
  return bmpSafeH13(raw)
    .replace(/ℓ/g, 'l')
    .replace(/−|–|—/g, '-')
    .replace(/×/g, 'x')
    .replace(/≤/g, '<=')
    .replace(/≥/g, '>=')
    .replace(/≪/g, '<<')
    .replace(/≫/g, '>>')
    .replace(/≠/g, '!=')
    .replace(/≈/g, '~=')
    .replace(/≡/g, '===')
    .replace(/⇒|→/g, '->')
    .replace(/[^\x20-\x7E\xA0-\xFF]/g, '');
}

const SERIF_USE_SANS = new Set([
  '\u210B', '\u210F', '\u2112', '\u2113', '\u211D', '\u2124', '\u2131',
  '\u2190', '\u2192', '\u2194', '\u2197', '\u21A6', '\u21D2',
  '\u2200', '\u2202', '\u2203', '\u2207', '\u2208', '\u2209',
  '\u2211', '\u2212', '\u221A', '\u221D', '\u221E', '\u2225', '\u222A',
  '\u222B', '\u222E', '\u2243', '\u2245', '\u2248', '\u2260', '\u2261',
  '\u2264', '\u2265', '\u226A', '\u226B', '\u2272', '\u2273', '\u2282',
  '\u2295', '\u2297', '\u2299', '\u22A5', '\u22C5', '\u25A1', '\u27E8',
  '\u27E9', '\u2016', '\u2032', '\u2020'
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
      const cleanSvg = formatSvgMathMarkup(bmpSafeH13(svgMarkup));
      const vb = cleanSvg.match(/viewBox="0 0 (\d+) (\d+)"/);
      const vbW = vb ? Number(vb[1]) : 760;
      const vbH = vb ? Number(vb[2]) : 360;
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
          ctx.fillStyle = '#FFFFFF';
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

async function fetchImageDataUrl(urlPath: string): Promise<{ dataUrl: string; aspect: number } | null> {
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
          const maxW = 1600;
          const scale = img.width > maxW ? maxW / img.width : 1;
          const canvas = document.createElement('canvas');
          canvas.width = Math.max(1, Math.round(img.width * scale));
          canvas.height = Math.max(1, Math.round(img.height * scale));
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            URL.revokeObjectURL(objUrl);
            resolve(null);
            return;
          }
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          URL.revokeObjectURL(objUrl);
          resolve({ dataUrl: canvas.toDataURL('image/jpeg', 0.9), aspect: canvas.height / canvas.width });
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

type EarthRgb = [number, number, number];
const EARTH_UMBER: EarthRgb = [58, 46, 38];
const EARTH_TERRACOTTA: EarthRgb = [143, 91, 74];
const EARTH_SAGE: EarthRgb = [100, 112, 91];
const EARTH_STONE: EarthRgb = [142, 127, 107];
const EARTH_PARCHMENT: EarthRgb = [246, 242, 234];

type PdfFontFamily = 'playfair' | 'serif' | 'sans' | 'mono';
type PdfFontStyle = 'normal' | 'bold' | 'italic';

function createPdfContext(doc: jsPDF, hasUnicodeFonts: boolean) {
  const pageW = 210;
  const marginX = 20;
  const contentW = pageW - 2 * marginX;
  const topY = 30;
  const bottomLimit = 272;
  let y = topY;

  interface TocEntry {
    label: string;
    page: number;
    indent?: number;
  }
  const tocEntries: TocEntry[] = [];

  const safeStr = (s: string) => (hasUnicodeFonts ? bmpSafeH13(s) : fallbackAsciiSafe(s));

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

  const ensureSpace = (neededMm: number) => {
    if (y + neededMm > bottomLimit) {
      doc.addPage();
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
      if ((cp >= 0x0370 && cp <= 0x03ff) || (cp >= 0x1e00 && cp <= 0x1eff) || cp >= 0x2100) {
        return 'serif';
      }
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
        if (cleaned) {
          out.push({
            text: cleaned,
            size: baseSize * curScale,
            yOffsetMm: curYOffsetMm,
            italic: curItalic
          });
        }
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
        if (parts[i]) {
          lines[lines.length - 1].push({ ...sp, text: parts[i] });
        }
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

  const clipStyledSpans = (
    rawText: string,
    maxW: number,
    boldBase: boolean,
    fontSize: number,
    baseFamily: PdfFontFamily = 'serif',
    baseStyle?: PdfFontStyle
  ): PdfStyledSpan[] => {
    const spans = segmentsToSpans(parseMathSegments(rawText), fontSize);
    if (measureSpansWidth(spans, boldBase, baseFamily, baseStyle) <= maxW) return spans;
    const ellipsisSpan: PdfStyledSpan = { text: '…', size: fontSize, yOffsetMm: 0, italic: false };
    const ellipsisW = measureTokenWidth('…', boldBase, fontSize, baseFamily, baseStyle);
    const budget = Math.max(4, maxW - ellipsisW);
    const clipped: PdfStyledSpan[] = [];
    let usedW = 0;
    for (const sp of spans) {
      const style: PdfFontStyle | undefined = sp.italic && baseFamily === 'serif' ? 'italic' : baseStyle;
      const w = measureTokenWidth(sp.text, boldBase, sp.size, baseFamily, style);
      if (usedW + w <= budget) {
        clipped.push(sp);
        usedW += w;
      } else {
        let partial = '';
        for (const ch of sp.text) {
          const cw = measureTokenWidth(partial + ch, boldBase, sp.size, baseFamily, style);
          if (usedW + cw > budget) break;
          partial += ch;
        }
        if (partial.trimEnd()) clipped.push({ ...sp, text: partial.trimEnd() });
        break;
      }
    }
    clipped.push(ellipsisSpan);
    return clipped;
  };

  const drawMathInlineText = (
    rawText: string,
    xStart: number,
    maxW: number,
    fontSize = 12,
    lineGap = 6.35,
    color: EarthRgb = EARTH_UMBER,
    boldBase = false,
    justify = false,
    baseFamily: PdfFontFamily = 'serif',
    baseStyle?: PdfFontStyle
  ) => {
    doc.setTextColor(...color);
    const lines = wrapMixedLines(rawText, maxW, boldBase, fontSize, baseFamily, baseStyle);
    for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
      const line = lines[lineIdx];
      ensureSpace(lineGap + 1);
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
    startOnNewPage = false
  ) => {
    if (level === 1 && startOnNewPage && y > topY + 2) {
      doc.addPage();
      y = topY;
    }
    const size = level === 1 ? 26.25 : level === 2 ? 13.5 : 11.2;
    const lineGap = level === 1 ? 11.2 : level === 2 ? 6.2 : 5.2;
    const boldHeading = level !== 1;
    const headingFamily: PdfFontFamily = level === 1 ? 'playfair' : 'serif';
    const gapBefore = level === 1 ? (y <= topY + 2 ? 3 : 9.5) : level === 2 ? 8.5 : 6.5;
    const gapAfter = level === 1 ? 14 : level === 2 ? 4.8 : 3.6;
    ensureSpace(level === 1 ? 46 : level === 2 ? 24 : 20);
    y += gapBefore;
    if (recordToc) {
      tocEntries.push({ label: text, page: doc.getNumberOfPages(), indent: tocIndent });
    }
    drawMathInlineText(
      text,
      marginX,
      contentW,
      size,
      lineGap,
      level === 1 ? EARTH_UMBER : EARTH_TERRACOTTA,
      boldHeading,
      false,
      headingFamily,
      level === 1 ? 'normal' : undefined
    );
    if (level === 1) {
      doc.setDrawColor(...EARTH_STONE);
      doc.setLineWidth(0.35);
      doc.line(marginX, y + 1.5, marginX + contentW, y + 1.5);
    }
    y += gapAfter;
  };

  const drawCategoryTag = (cat: string) => {
    ensureSpace(8);
    setFontSafe('mono', 'normal', 8);
    if (cat.includes('ESTABLISHED') || cat.includes('STANDARD PHYSICS')) doc.setTextColor(...EARTH_SAGE);
    else if (cat.includes('AXIOMATIC') || cat.includes('DERIVED WITHIN IGRT')) doc.setTextColor(74, 96, 118);
    else if (cat.includes('PHILOSOPHICAL')) doc.setTextColor(...EARTH_STONE);
    else doc.setTextColor(...EARTH_TERRACOTTA);
    doc.text(clipMixedLine(`[${safeStr(cat)}]`, contentW, false, 8, 'mono'), marginX, y);
    y += 6.2;
  };

  const drawEquationBox = (eq: H13Equation) => {
    const cap = `${eq.label} [${eq.category}] — ${eq.caption}`;
    const eqInnerW = contentW - 16;
    const baseEqFont = hasUnicodeFonts ? 'serif' : 'sans';
    let eqFontSize = 10.5;
    let eqLines = wrapMixedLines(eq.unicodeHtml, eqInnerW, false, eqFontSize, baseEqFont, 'normal', true);
    if (eqLines.length > 3) {
      eqFontSize = 9.4;
      eqLines = wrapMixedLines(eq.unicodeHtml, eqInnerW, false, eqFontSize, baseEqFont, 'normal', true);
    }
    const eqLineGap = 5.9;
    const capLineGap = 4.4;
    const capLines = wrapMixedLines(cap, contentW - 14, false, 8.8, 'serif', 'italic');
    const plainLines = eq.intuitiveMeaning
      ? wrapMixedLines(eq.intuitiveMeaning, contentW - 14, false, 8.6, 'serif', 'normal')
      : [];
    const boxH =
      7.4 +
      eqLines.length * eqLineGap +
      4.4 +
      capLines.length * capLineGap +
      (plainLines.length > 0 ? 2.2 + plainLines.length * 4.3 : 0) +
      3.2;

    ensureSpace(boxH + 8);
    y += 1.5;
    doc.setFillColor(...EARTH_PARCHMENT);
    doc.setDrawColor(...EARTH_STONE);
    doc.setLineWidth(0.35);
    doc.roundedRect(marginX, y, contentW, boxH, 2.2, 2.2, 'FD');

    let cy = y + 7.4;
    doc.setTextColor(...EARTH_UMBER);
    for (const l of eqLines) {
      const lw = measureSpansWidth(l.spans, false, baseEqFont, 'normal');
      const cx = marginX + Math.max(5, (contentW - lw) / 2);
      drawStyledSpans(l.spans, cx, cy, false, baseEqFont, 'normal');
      cy += eqLineGap;
    }
    doc.setDrawColor(...EARTH_STONE);
    doc.setLineWidth(0.18);
    doc.line(marginX + 10, cy - 1.5, marginX + contentW - 10, cy - 1.5);
    cy += 3.2;
    doc.setTextColor(...EARTH_STONE);
    for (const cl of capLines) {
      const clw = measureSpansWidth(cl.spans, false, 'serif', 'italic');
      const cx = marginX + Math.max(5, (contentW - clw) / 2);
      drawStyledSpans(cl.spans, cx, cy, false, 'serif', 'italic');
      cy += capLineGap;
    }
    if (plainLines.length > 0) {
      cy += 2.2;
      doc.setTextColor(...EARTH_SAGE);
      for (const pl of plainLines) {
        const plw = measureSpansWidth(pl.spans, false, 'serif', 'normal');
        const cx = marginX + Math.max(5, (contentW - plw) / 2);
        drawStyledSpans(pl.spans, cx, cy, false, 'serif', 'normal');
        cy += 4.3;
      }
    }
    y += boxH + 7.2;
  };

  const drawCalloutBox = (label: string | null, rawBody: string, fontSize = 10.6, lineGap = 5.5) => {
    const bodyLines = wrapMixedLines(rawBody, contentW - 12, false, fontSize, 'serif');
    const hasLabel = Boolean(label && label.trim().length > 0);
    const boxH = (hasLabel ? 5.8 : 0) + bodyLines.length * lineGap + 10.5;
    ensureSpace(boxH + 7);
    y += 1.2;
    doc.setFillColor(...EARTH_PARCHMENT);
    doc.setDrawColor(...EARTH_STONE);
    doc.setLineWidth(0.35);
    doc.roundedRect(marginX, y, contentW, boxH, 2.2, 2.2, 'FD');

    let cy = y + 6.4;
    if (hasLabel && label) {
      setFontSafe('mono', 'normal', 8.2);
      doc.setTextColor(...EARTH_TERRACOTTA);
      doc.text(clipMixedLine(safeStr(label), contentW - 12, false, 8.2, 'mono'), marginX + 6, cy);
      cy += 5.8;
    }
    doc.setTextColor(...EARTH_UMBER);
    for (const line of bodyLines) {
      drawStyledSpans(line.spans, marginX + 6, cy, false, 'serif', 'normal');
      cy += lineGap;
    }
    y += boxH + 6.8;
  };

  const drawTable = (
    tableTitle: string,
    headers: string[],
    rawColWidths: number[],
    rows: string[][],
    fontSize = 8.2,
    lineGap = 4.25
  ) => {
    const rawSum = rawColWidths.reduce((acc, v) => acc + v, 0) || contentW;
    const colWidths = rawColWidths.map((w) => (w / rawSum) * contentW);
    const padX = 2.0;
    const padY = 2.25;

    const capLines = wrapMixedLines(tableTitle, contentW - 6, true, 8.7, 'serif');
    const contLines = wrapMixedLines(`${tableTitle} (continued)`, contentW - 6, true, 8.7, 'serif');
    const capH = capLines.length * 4.4 + 4.0;
    const contH = contLines.length * 4.4 + 4.0;

    const wrappedHeaders = headers.map((h, ci) =>
      wrapMixedLines(h, Math.max(8, colWidths[ci] - 2 * padX), true, fontSize, 'serif')
    );
    const headerMaxLines = Math.max(1, ...wrappedHeaders.map((l) => l.length));
    const headerH = headerMaxLines * lineGap + 2 * padY;

    const wrappedRows = rows.map((row) =>
      headers.map((_, ci) =>
        wrapMixedLines(row[ci] ?? '', Math.max(8, colWidths[ci] - 2 * padX), false, fontSize, 'serif')
      )
    );
    const rowHeights = wrappedRows.map(
      (cells) => Math.max(1, ...cells.map((l) => l.length)) * lineGap + 2 * padY
    );

    const drawBannerAndHeader = (isContinuation: boolean) => {
      const bLines = isContinuation ? contLines : capLines;
      const bH = isContinuation ? contH : capH;
      doc.setFillColor(...EARTH_PARCHMENT);
      doc.setDrawColor(...EARTH_STONE);
      doc.setLineWidth(0.3);
      doc.rect(marginX, y, contentW, bH, 'FD');
      doc.setTextColor(...EARTH_TERRACOTTA);
      let by = y + 4.3;
      for (const bl of bLines) {
        drawStyledSpans(bl.spans, marginX + 3.0, by, true, 'serif', 'bold');
        by += 4.4;
      }
      y += bH;

      doc.setFillColor(235, 227, 214);
      doc.setDrawColor(...EARTH_STONE);
      doc.setLineWidth(0.3);
      doc.rect(marginX, y, contentW, headerH, 'FD');
      let cx = marginX;
      doc.setTextColor(...EARTH_UMBER);
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

    y += 2.0;
    const firstRowH = rowHeights[0] ?? 8;
    if (y + capH + headerH + Math.min(firstRowH, 45) > bottomLimit) {
      doc.addPage();
      y = topY;
    }
    drawBannerAndHeader(false);

    for (let ri = 0; ri < wrappedRows.length; ri++) {
      const rH = rowHeights[ri];
      if (y + rH > bottomLimit && y > topY + 2) {
        doc.addPage();
        y = topY;
        drawBannerAndHeader(true);
      }
      if (ri % 2 === 1) doc.setFillColor(250, 248, 243);
      else doc.setFillColor(255, 255, 255);
      doc.setDrawColor(...EARTH_STONE);
      doc.setLineWidth(0.24);
      doc.rect(marginX, y, contentW, rH, 'FD');

      let cx = marginX;
      doc.setTextColor(...EARTH_UMBER);
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
    category: string;
    title: string;
    caption: string;
    asset: { dataUrl: string; aspect: number };
    format: 'PNG' | 'JPEG';
    accentRgb: EarthRgb;
  }) => {
    doc.addPage();
    y = topY;

    setFontSafe('mono', 'normal', 8.2);
    doc.setTextColor(...opts.accentRgb);
    doc.text(clipMixedLine(safeStr(opts.tag), contentW * 0.62, false, 8.2, 'mono'), marginX, y);
    doc.setTextColor(...EARTH_STONE);
    const catStr = clipMixedLine(`[${safeStr(opts.category)}]`, contentW * 0.36, false, 8.0, 'mono');
    doc.text(catStr, marginX + contentW, y, { align: 'right' });
    y += 3.5;
    doc.setDrawColor(...EARTH_STONE);
    doc.setLineWidth(0.28);
    doc.line(marginX, y, marginX + contentW, y);
    y += 7.5;

    drawMathInlineText(opts.title, marginX, contentW, 14.5, 6.8, EARTH_UMBER, false, false, 'playfair', 'normal');
    y += 3.5;

    const capFontSize = 9.8;
    const capLineGap = 4.9;
    const capLines = wrapMixedLines(opts.caption, contentW - 4, false, capFontSize, 'serif');
    const capBlockH = 4.5 + capLines.length * capLineGap + 2.0;

    const availArtH = Math.max(90, bottomLimit - y - capBlockH - 5.0);
    let drawW = contentW;
    let drawH = drawW * opts.asset.aspect;
    if (drawH > availArtH) {
      drawH = availArtH;
      drawW = drawH / Math.max(0.05, opts.asset.aspect);
    }
    const drawX = marginX + (contentW - drawW) / 2;
    const drawY = y + Math.max(0, (availArtH - drawH) / 2);

    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(216, 207, 194);
    doc.setLineWidth(0.25);
    doc.rect(marginX, y, contentW, availArtH, 'FD');
    doc.addImage(opts.asset.dataUrl, opts.format, drawX, drawY, drawW, drawH);

    const capStartY = y + availArtH + 4.5;
    doc.setDrawColor(...EARTH_STONE);
    doc.setLineWidth(0.22);
    doc.line(marginX, capStartY, marginX + contentW, capStartY);
    y = capStartY + 5.2;
    drawMathInlineText(opts.caption, marginX + 2, contentW - 4, capFontSize, capLineGap, EARTH_STONE, false, true);
    y = bottomLimit;
  };

  return {
    pageW,
    marginX,
    contentW,
    topY,
    bottomLimit,
    getY: () => y,
    setY: (val: number) => {
      y = val;
    },
    addY: (delta: number) => {
      y += delta;
    },
    tocEntries,
    safeStr,
    setFontSafe,
    ensureSpace,
    measureTokenWidth,
    wrapMixedLines,
    drawStyledSpans,
    clipMixedLine,
    clipStyledSpans,
    drawMathInlineText,
    drawHeading,
    drawCategoryTag,
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

export async function generateIgrtH13Pdf(): Promise<void> {
  const fonts = await loadH13Fonts();
  const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait', compress: true });
  const hasUnicodeFonts = registerAllFontsOnDoc(doc, fonts);
  const ctx = createPdfContext(doc, hasUnicodeFonts);
  const { marginX, contentW, topY, bottomLimit, pageW, tocEntries } = ctx;

  const [svgAssets, plateAssets] = await Promise.all([
    Promise.all(H13_FIGURES.map(async (f) => ({ fig: f, raster: await rasterizeSvgDataUrl(f.svgMarkup) }))),
    Promise.all(H13_ARCHIVAL_PLATES.map(async (p) => ({ plate: p, raster: await fetchImageDataUrl(p.imagePath) })))
  ]);

  // Cover Page (Page 1 Only)
  ctx.setY(24);
  doc.setDrawColor(...EARTH_STONE);
  doc.setLineWidth(0.35);
  doc.line(marginX, ctx.getY(), marginX + contentW, ctx.getY());
  ctx.addY(5);

  ctx.drawMathInlineText(
    `${H13_META.monographId} · Refactored Monograph (Sections 1–13 · 26 Illustrations · Glossary · Appendices A–K) · ${H13_META.date}`,
    marginX,
    contentW,
    8.2,
    4.0,
    EARTH_TERRACOTTA,
    false,
    false,
    'mono'
  );
  ctx.addY(6);

  ctx.drawMathInlineText(H13_META.title, marginX, contentW, 24.5, 10.0, EARTH_UMBER, false, false, 'playfair', 'normal');
  ctx.addY(3);

  doc.setDrawColor(...EARTH_TERRACOTTA);
  doc.setLineWidth(0.8);
  doc.line(marginX, ctx.getY(), marginX + 40, ctx.getY());
  ctx.addY(5);

  ctx.drawMathInlineText(H13_META.subtitle, marginX, contentW, 10.4, 4.8, EARTH_STONE, false, false, 'serif', 'italic');
  ctx.addY(5);

  ctx.drawMathInlineText('AUTHORS', marginX, contentW, 7.8, 3.6, EARTH_TERRACOTTA, false, false, 'mono');
  ctx.addY(1.5);
  for (const author of H13_META.authorRoster) {
    ctx.drawMathInlineText(author.name, marginX, contentW, 10.0, 4.3, EARTH_UMBER, true, false);
    ctx.drawMathInlineText(author.affiliation, marginX + 2, contentW - 2, 8.4, 3.7, EARTH_STONE, false, false);
    if (author.orcidUrl) {
      const orcidText = `ORCID: ${author.orcidUrl}`;
      const orcidY = ctx.getY();
      ctx.drawMathInlineText(orcidText, marginX + 2, contentW - 2, 7.3, 3.4, EARTH_SAGE, false, false, 'mono');
      const linkW = Math.min(contentW - 2, ctx.measureTokenWidth(orcidText, false, 7.3, 'mono'));
      if (typeof (doc as unknown as { link?: unknown }).link === 'function') {
        doc.link(marginX + 2, orcidY - 2.8, linkW, 3.4, { url: author.orcidUrl });
      }
    } else if (author.email) {
      const emailText = `Email: ${author.email}`;
      const emailY = ctx.getY();
      ctx.drawMathInlineText(emailText, marginX + 2, contentW - 2, 7.3, 3.4, EARTH_SAGE, false, false, 'mono');
      const linkW = Math.min(contentW - 2, ctx.measureTokenWidth(emailText, false, 7.3, 'mono'));
      if (typeof (doc as unknown as { link?: unknown }).link === 'function') {
        doc.link(marginX + 2, emailY - 2.8, linkW, 3.4, { url: `mailto:${author.email}` });
      }
    }
    ctx.addY(1.5);
  }

  if (ctx.getY() < 242) ctx.setY(242);
  doc.setFillColor(...EARTH_PARCHMENT);
  doc.setDrawColor(...EARTH_STONE);
  doc.setLineWidth(0.3);
  doc.roundedRect(marginX, ctx.getY(), contentW, 28, 2, 2, 'FD');
  ctx.addY(5.5);
  ctx.drawMathInlineText(`PACS: ${H13_META.pacsCodes}  |  MSC 2020: ${H13_META.msc2020Codes}`, marginX + 5, contentW - 10, 8.0, 4.1, EARTH_UMBER, false, false, 'mono');
  ctx.drawMathInlineText(`Foundation: ${H13_META.predecessors}`, marginX + 5, contentW - 10, 7.9, 4.1, EARTH_SAGE, false, false, 'mono');
  ctx.drawMathInlineText(`Epistemic Discipline: 6 Tiers (A · B1 · B2 · C · D · E)  |  ${H13_META.verifyCommand}`, marginX + 5, contentW - 10, 7.7, 4.0, EARTH_STONE, false, false, 'mono');

  // Abstract Page
  doc.addPage();
  ctx.setY(topY);
  ctx.drawHeading('Abstract', 1, true, 0, false);
  for (const p of H13_ABSTRACT_PARAGRAPHS) {
    ctx.drawMathInlineText(p, marginX, contentW, 10.4, 5.1, EARTH_UMBER, false, true);
    ctx.addY(2.0);
  }
  ctx.addY(1.6);
  ctx.drawMathInlineText(`Keywords: ${H13_META.keywords.join('; ')}.`, marginX, contentW, 8.7, 4.3, EARTH_STONE, false, true);
  ctx.addY(1.6);
  ctx.drawMathInlineText(`Article Classification: ${H13_META.journalType} | ${H13_META.receivedRevised}`, marginX, contentW, 8.2, 4.1, EARTH_STONE, false, false, 'mono');

  // Reserve 8 Pages for Unwrapped Table of Contents
  const tocPages: number[] = [];
  for (let tp = 0; tp < 8; tp++) {
    doc.addPage();
    tocPages.push(doc.getNumberOfPages());
  }
  doc.addPage();
  ctx.setY(topY);

  // Front-Matter Lists
  ctx.drawHeading('Lists of Figures, Tables, Equations & Theorems', 1, true, 0, false);
  ctx.drawHeading('List of Archival Illustrations & Chapter Vector Figures', 2, false, 1);
  for (const pl of H13_ARCHIVAL_PLATES) {
    ctx.drawMathInlineText(`${pl.figureNumber} (Ch.${pl.anchorChapter}): ${pl.title} [${pl.category}]`, marginX + 2, contentW - 2, 10, 5.1);
    ctx.addY(1.2);
  }
  for (const fg of H13_FIGURES) {
    ctx.drawMathInlineText(`${fg.figureNumber} (Ch.${fg.anchorChapter}): ${fg.title} [${fg.category}]`, marginX + 2, contentW - 2, 10, 5.1);
    ctx.addY(1.2);
  }
  ctx.addY(2);
  ctx.drawHeading('List of Tables', 2, false, 1);
  for (const tb of H13_FRONTMATTER_TABLES_LIST) {
    ctx.drawMathInlineText(`${tb.id} (${tb.location}): ${tb.title}`, marginX + 2, contentW - 2, 10, 5.1);
    ctx.addY(1.2);
  }
  ctx.addY(2);
  ctx.drawHeading('List of Principal Equations', 2, false, 1);
  for (const eq of H13_FRONTMATTER_EQUATIONS_LIST) {
    ctx.drawMathInlineText(`${eq.label} (${eq.location}, ${eq.category}): ${eq.title}`, marginX + 2, contentW - 2, 10, 5.1);
    ctx.addY(1.2);
  }
  ctx.addY(2);
  ctx.drawHeading('List of Theorems & Definitions', 2, false, 1);
  for (const th of H13_THEOREMS_LIST) {
    ctx.drawMathInlineText(`${th.id} (${th.location}, ${th.category}): ${th.title}`, marginX + 2, contentW - 2, 10, 5.1);
    ctx.addY(1.2);
  }
  for (const df of H13_DEFINITIONS_LIST) {
    ctx.drawMathInlineText(`${df.id} (${df.term}): ${df.formalDefinition}`, marginX + 2, contentW - 2, 10, 5.1);
    ctx.addY(1.2);
  }

  // Foundational Equations, Axioms A1-A5, Scope & Symbol / Dimensional Tables
  ctx.drawHeading('Foundational Principles, Axioms, Master Equations, Symbol Guide & Units Audit', 1, true, 0, true);
  ctx.drawMathInlineText(H13_FOUNDATIONAL_NOTE, marginX, contentW, 11, 5.9, EARTH_TERRACOTTA, true, true);
  ctx.addY(3);
  ctx.drawCalloutBox('METRIC SIGNATURE & BUNDLE CONVENTION', H13_METRIC_SIGNATURE_BOX, 10.4, 5.2);
  ctx.drawCalloutBox(H13_CORE_RESEARCH_PROGRAM.title.toUpperCase(), H13_CORE_RESEARCH_PROGRAM.rationale, 10.2, 5.1);
  ctx.drawHeading('Primitive Axioms of IGRT (A1–A5)', 2, true, 1);
  for (const ax of H13_AXIOMS) {
    ctx.drawCalloutBox(
      `${ax.id}: ${ax.title} [${ax.epistemicCategory}]`,
      `${ax.statement}\n\nFormal Expression: ${ax.mathematicalForm}\nProvenance: ${ax.notesOnProvenance}`,
      9.9,
      4.95
    );
  }
  for (const eq of H13_MASTER_EQUATIONS) {
    ctx.drawEquationBox(eq);
  }
  ctx.drawHeading(H13_SCOPE_AND_NON_CLAIMS.title, 2, false, 1);
  for (const pt of H13_SCOPE_AND_NON_CLAIMS.points) {
    ctx.drawMathInlineText(`• ${pt}`, marginX + 2, contentW - 2, 10.8, 5.8, EARTH_UMBER, false, true);
    ctx.addY(2.0);
  }
  ctx.drawTable(
    `Table 0.4 · ${H13_CORE_FALSIFICATION_CRITERIA.title}`,
    ['Scope Class', 'Decisive Falsification Criterion'],
    [38, 132],
    [
      ...H13_CORE_FALSIFICATION_CRITERIA.coreAxiomFalsifiers.map((c) => ['QM/GR Consistency Checks (P15, P18)', c]),
      ...H13_CORE_FALSIFICATION_CRITERIA.frontierSubHypothesisFalsifiers.map((f) => ['Standalone Frontier Falsifiers (P14, P16, P17)', f])
    ]
  );
  ctx.drawTable(
    'Table 0.1 · Twelve Computational-Reality Principles Mapped to Formal IGRT Mathematics',
    ['# & Theme', 'Intuitive Thesis', 'IGRT Mapping & Formula', 'Category'],
    [28, 52, 62, 28],
    H13_TWELVE_PRINCIPLES_MATRIX.map((row) => [
      `${row.id}. ${row.shortTitle}\n[${row.programTier}]`,
      `"${row.userStatement}"`,
      `${row.governingFormula} | ${row.quantitativeAnchor}`,
      row.epistemicCategory
    ])
  );
  ctx.drawTable(
    'Table 0.2 · Intuitive Symbol & Units Decoder',
    ['Symbol', 'Name', 'Physical Meaning', 'Formal Role & Units'],
    [28, 24, 68, 50],
    H13_SYMBOL_DECODER.map((sy) => [
      sy.symbol,
      sy.spokenName,
      sy.intuitiveMeaning,
      `${sy.formalMathematicalRole} (${sy.units})`
    ])
  );
  ctx.drawTable(
    'Table 0.3 · SI Units & Dimensional Consistency Audit',
    ['Equation', 'Formula', 'LHS = RHS', 'Verification'],
    [26, 48, 48, 48],
    H13_DIMENSIONAL_AUDIT.map((da) => [
      da.equationLabel,
      da.formulaSummary,
      `LHS ${da.lhsDimensions} = RHS ${da.rhsDimensions}`,
      da.physicalCheck
    ])
  );

  // Sections 1 to 13
  for (const ch of H13_CHAPTERS) {
    ctx.drawHeading(`${ch.number}. ${ch.title}`, 1, true, 0, true);
    ctx.drawMathInlineText(ch.part, marginX, contentW, 8.2, 4.0, EARTH_STONE, false, false, 'mono');
    ctx.addY(0.8);
    ctx.drawCategoryTag(`${ch.epistemicCategory} · ${ch.programTier}`);
    ctx.drawMathInlineText(`Provenance: ${ch.provenance}`, marginX, contentW, 8.8, 4.4, EARTH_STONE, false, false, 'mono');
    ctx.addY(2.2);
    ctx.drawMathInlineText(`"${ch.principleQuote}"`, marginX + 4, contentW - 8, 10.6, 5.4, EARTH_STONE, false, true, 'serif', 'italic');
    ctx.addY(2.2);
    ctx.drawMathInlineText(ch.leadSummary, marginX, contentW, 11.2, 6.0, EARTH_STONE, false, true, 'serif', 'italic');
    ctx.addY(5.0);

    for (const sub of ch.subsections) {
      ctx.drawHeading(`${sub.number} ${sub.title}`, 2, true, 1);
      ctx.drawCategoryTag(sub.category);
      for (const p of sub.paragraphs) {
        ctx.drawMathInlineText(p, marginX, contentW, 12, 6.45, EARTH_UMBER, false, true);
        ctx.addY(3.6);
      }
      if (sub.equation) ctx.drawEquationBox(sub.equation);
      if (sub.theoremBox) {
        const isFormalProof = sub.theoremBox.proofType === 'proof';
        ctx.ensureSpace(40);
        ctx.addY(2.0);
        ctx.drawCategoryTag(sub.theoremBox.category);
        ctx.drawMathInlineText(`${sub.theoremBox.number} (${sub.theoremBox.title}).`, marginX + 2, contentW - 4, 11.4, 5.9, EARTH_SAGE, true, false);
        ctx.addY(1.0);
        ctx.drawMathInlineText(
          `Suppose ${sub.theoremBox.hypotheses.join(' ')} ${sub.theoremBox.statement}`,
          marginX + 2,
          contentW - 4,
          11.0,
          5.9,
          EARTH_UMBER,
          false,
          true
        );
        ctx.addY(1.6);
        ctx.drawMathInlineText(
          isFormalProof ? 'Proof.' : 'Derivation / Proof Sketch.',
          marginX + 2,
          contentW - 4,
          10.4,
          5.2,
          EARTH_TERRACOTTA,
          true,
          false,
          'serif',
          'italic'
        );
        ctx.addY(1.0);
        sub.theoremBox.proofSteps.forEach((step, idx) => {
          ctx.drawMathInlineText(`${idx + 1}. ${step}`, marginX + 4, contentW - 6, 10.1, 5.25, EARTH_UMBER, false, true);
          ctx.addY(1.2);
        });
        ctx.drawMathInlineText(
          isFormalProof ? `Sources: ${sub.theoremBox.provenance} [Q.E.D.]` : `Sources: ${sub.theoremBox.provenance}`,
          marginX + 2,
          contentW - 4,
          8.8,
          4.4,
          EARTH_STONE,
          false,
          true,
          'mono'
        );
        ctx.addY(4.5);
      }
      if (sub.workedExample) {
        ctx.ensureSpace(34);
        ctx.addY(2.0);
        ctx.drawMathInlineText(sub.workedExample.title, marginX + 2, contentW - 4, 11.4, 5.9, EARTH_TERRACOTTA, true, false);
        ctx.addY(1.0);
        ctx.drawMathInlineText(sub.workedExample.setup, marginX + 2, contentW - 4, 10.8, 5.8, EARTH_STONE, false, true);
        ctx.addY(1.2);
        sub.workedExample.steps.forEach((st, idx) => {
          ctx.drawMathInlineText(`${idx + 1}. ${st}`, marginX + 4, contentW - 6, 10.8, 5.8, EARTH_UMBER, false, true);
          ctx.addY(1.2);
        });
        ctx.drawEquationBox(sub.workedExample.resultEquation);
        ctx.drawMathInlineText(`Summary: ${sub.workedExample.takeaway}`, marginX + 2, contentW - 4, 10.6, 5.7, EARTH_SAGE, false, true, 'serif', 'italic');
        ctx.addY(4.5);
      }
    }

    if (ch.number === 9) {
      ctx.drawTable(
        'Table 9.1 · Black Holes as Sealed Compression Nodes vs. Coupled Class P Portals',
        ['Node Class', 'Geometry & Action', 'NEC & Causal Status', 'Portal / Metric Benchmark'],
        [34, 48, 44, 44],
        H13_BLACK_HOLE_TO_PORTAL_TAXONOMY.map((b) => [
          `${b.nodeClass} [${b.category}]`,
          b.geometryAndAction,
          b.necAndCausalStatus,
          `${b.isPortalOrWhiteHole} | ${b.foldingOrBounceMetric}`
        ])
      );
      ctx.drawTable(
        'Table 9.2 · Laboratory Analogs, Metrology Benchmarks & No-Go Audit (PR-1–PR-8)',
        ['ID & Platform', 'TRL & Mechanism', 'Achievable Build Specification', 'Verification, Falsification & Implications'],
        [34, 42, 46, 48],
        H13_PORTAL_BUILD_RECOMMENDATIONS.map((pr) => [
          `${pr.id} · ${pr.title}\n${pr.portalClass}`,
          `${pr.trl}\n${pr.physicalMechanism}`,
          pr.achievableBuildSpec,
          `${pr.verificationMetric}\nFalsification: ${pr.falsificationThreshold}\nImplications: ${pr.implications}`
        ])
      );
    }

    if (ch.number === 10) {
      ctx.drawTable(
        'Table 10.1 · White-Hole Bounce Timescales Across Black-Hole Mass Scales',
        ['Progenitor Regime', 'Mass Scale', 'Interior vs. Exterior Delay', 'Astrophysical Signature'],
        [36, 32, 50, 52],
        H13_WHITE_HOLE_BOUNCE_TABLE.map((w) => [
          `${w.progenitorRegime} [${w.epistemicStatus}]`,
          w.massScale,
          `Interior: ${w.interiorBounceTime} | Exterior: ${w.exteriorBounceDelay}`,
          w.astrophysicalObservable
        ])
      );
    }

    if (ch.number === 13) {
      ctx.drawTable(
        'Table 13.1 · Falsification Protocols P14–P18',
        ['Protocol & Window', 'Target Thesis', 'Threshold & Setup', 'Falsification, FPR & Est. Cost'],
        [34, 42, 46, 48],
        H13_PROTOCOLS_P14_TO_P18.map((p) => [
          `${p.id} · ${p.name} [${p.category} | ${p.timeline}]`,
          p.targetThesis,
          `${p.quantitativeThreshold} (${p.experimentalSetup}) | Systematics: ${p.systematicsControl}`,
          `${p.falsificationCriterion}\nFPR: ${p.falsePositiveRate}\nCost: ${p.estimatedCost}`
        ])
      );
      ctx.drawTable(
        'Table 13.1b · Quantitative Signal-vs-Sensitivity & Dominant Systematics Audit (P14–P18)',
        ['Protocol', 'Predicted Signal', 'Current Sensitivity & Null Limit', 'Systematics & 95% CL Falsification'],
        [24, 48, 48, 50],
        H13_PROTOCOL_SIGNAL_VS_SENSITIVITY.map((r) => [
          r.protocolId,
          r.predictedSignal,
          `${r.currentSensitivity} | Null: ${r.nullTestLimit}`,
          `${r.dominantSystematics} | 95% CL: ${r.falsification95CL}`
        ])
      );
      ctx.drawTable(
        'Table 13.1c · Joint Multi-Protocol Cross-Check Matrix (P14–P18)',
        ['Joint Outcome Pattern', 'Protocols', 'Physical Interpretation', 'Programmatic Impact'],
        [44, 24, 52, 50],
        H13_PROTOCOL_CROSSCHECKS.map((r) => [
          r.jointOutcomePattern,
          r.protocolsInvolved,
          r.physicalInterpretation,
          r.programmaticImpact
        ])
      );
      ctx.drawHeading('Falsification & Confirmation Checklists', 3, false, 1);
      for (const f of H13_FALSIFICATION_CHECKLIST) ctx.drawMathInlineText(`• [Falsify] ${f}`, marginX + 2, contentW - 2, 10.2, 5.1);
      for (const c of H13_CONFIRMATION_CHECKLIST) ctx.drawMathInlineText(`• [Confirm] ${c}`, marginX + 2, contentW - 2, 10.2, 5.1);
      ctx.addY(2);
      ctx.drawTable(
        'Table 13.2 · Exhaustive Epistemic Claim–Provenance–Proof Ledger (Claims C1–C10)',
        ['ID & Claim', 'Category', 'Proof Anchor & Primary Provenance', 'Verification & Explicit Limit'],
        [40, 26, 54, 50],
        H13_EPISTEMIC_LEDGER.map((e) => [
          `${e.claimId} · ${e.claim}`,
          e.category,
          `Proof: ${e.mathematicalSupport}\nRef: ${e.primaryProvenance}`,
          `Check: ${e.computationalCheck}\nLimit: ${e.explicitLimitOrNonClaim}`
        ])
      );
      ctx.drawTable(
        'Table 13.3 · Experimental Proof Apparatus, Readiness Levels (TRL) & Priority Recommendations',
        ['Device & Plate', 'TRL & Target Proof', 'Engineering Recommendation', 'Statistical & Open Gate'],
        [36, 40, 56, 38],
        H13_PROOF_DEVICES_AND_RECOMMENDATIONS.map((dev) => [
          `${dev.deviceId} (${dev.linkedPlateOrFigure})\n${dev.deviceName}\n${dev.linkedProtocol}`,
          `${dev.trl}\n${dev.provesOrTests}`,
          dev.engineeringRecommendation,
          dev.statisticalAndOpenScienceGate
        ])
      );
      ctx.drawHeading('Explicit Scope Limitations & 2026–2035 Research Roadmap', 2, true, 1);
      ctx.drawTable(
        'Table 13.6 · Explicit Scope Limitations & Unsolved Open Problems (LIM-1–LIM-4)',
        ['ID & Domain', 'Unsolved Technical Problem', 'Epistemic Boundary'],
        [36, 68, 66],
        H13_SCOPE_LIMITATIONS.map((r) => [
          `${r.id} · ${r.domain}`,
          r.unsolvedProblem,
          r.epistemicBoundary
        ])
      );
      ctx.drawTable(
        'Table 13.7 · Ten-Year Experimental & Theoretical Research Roadmap (2026–2035)',
        ['Phase & Horizon', 'Track', 'Milestone', 'Deliverable / Decision Gate'],
        [34, 34, 52, 50],
        H13_RESEARCH_ROADMAP_2026_2035.map((r) => [
          `${r.phase} (${r.horizon})`,
          r.track,
          r.milestone,
          r.deliverableOrGate
        ])
      );
    }

    for (const { plate, raster } of plateAssets.filter((x) => x.plate.anchorChapter === ch.number)) {
      if (!raster) continue;
      ctx.drawFullPageIllustration({
        tag: `${plate.figureNumber.toUpperCase()} · ARCHIVAL PLATE (CHAPTER ${ch.number})`,
        category: plate.category,
        title: plate.title,
        caption: plate.description,
        asset: raster,
        format: 'JPEG',
        accentRgb: EARTH_TERRACOTTA
      });
    }

    for (const { fig, raster } of svgAssets.filter((x) => x.fig.anchorChapter === ch.number)) {
      if (!raster) continue;
      ctx.drawFullPageIllustration({
        tag: `${fig.figureNumber.toUpperCase()} · CHAPTER ${ch.number}`,
        category: fig.category,
        title: fig.title,
        caption: fig.caption,
        asset: raster,
        format: 'PNG',
        accentRgb: EARTH_SAGE
      });
    }
  }

  // Glossary of Terms & Acronyms
  ctx.drawHeading('Glossary of Terms & Acronyms', 1, true, 0, true);
  ctx.drawTable(
    'Glossary · Core Physical Concepts, Formal Operators & Experimental Acronyms',
    ['Term & Acronym', 'Tier', 'Definition'],
    [46, 32, 92],
    H13_GLOSSARY.map((g) => [
      g.acronym ? `${g.term} (${g.acronym})` : g.term,
      g.category,
      g.definition
    ])
  );

  // Methodological Clarifications & Technical Adjudications
  ctx.drawHeading('Methodological Clarifications & Technical Adjudications', 1, true, 0, true);
  for (const faq of H13_FAQ) {
    ctx.drawCalloutBox(
      `${faq.id}: ${faq.question} [${faq.category}]`,
      `Summary Resolution: ${faq.shortAnswer}\n\n${faq.detailedExplanation}`,
      10.2,
      5.15
    );
  }

  // Acknowledgments & Journal Declarations
  ctx.drawHeading('Acknowledgments & Journal Declarations', 1, true, 0, true);
  ctx.drawMathInlineText(`Acknowledgments: ${H13_JOURNAL_DECLARATIONS.acknowledgments}`, marginX, contentW, 10.8, 5.6, EARTH_UMBER, false, true);
  ctx.addY(2.4);
  ctx.drawMathInlineText(`Author Contributions (CRediT): ${H13_JOURNAL_DECLARATIONS.authorContributions}`, marginX, contentW, 10.8, 5.6, EARTH_UMBER, false, true);
  ctx.addY(2.4);
  ctx.drawMathInlineText(`Data & Code Availability: ${H13_JOURNAL_DECLARATIONS.dataAndCodeAvailability}`, marginX, contentW, 10.8, 5.6, EARTH_UMBER, false, true);
  ctx.addY(2.4);
  ctx.drawMathInlineText(`Competing Interests & Funding: ${H13_JOURNAL_DECLARATIONS.competingInterestsAndFunding}`, marginX, contentW, 10.8, 5.6, EARTH_UMBER, false, true);
  ctx.addY(3.0);

  // References
  ctx.drawHeading('References', 1, true, 0, true);
  for (const ref of H13_REFERENCES) {
    ctx.drawMathInlineText(`[${ref.id}] ${ref.citation}`, marginX, contentW, 10.5, 5.4, EARTH_UMBER, false, true);
    ctx.addY(2.2);
  }

  // Appendices A–K
  ctx.drawHeading('Consolidated Appendices (A–K)', 1, true, 0, true);
  for (const app of H13_APPENDICES) {
    ctx.drawHeading(`Appendix ${app.letter}: ${app.title}`, 2, true, 1);
    ctx.drawCategoryTag(app.category);
    ctx.drawMathInlineText(app.summary, marginX, contentW, 11.2, 5.8, EARTH_STONE, false, true, 'serif', 'italic');
    ctx.addY(3.2);
    for (const eq of app.equations) ctx.drawEquationBox(eq);
    for (const p of app.bodyParagraphs) {
      ctx.drawMathInlineText(p, marginX, contentW, 11.6, 6.2, EARTH_UMBER, false, true);
      ctx.addY(3.2);
    }
    if (app.letter === 'G') {
      ctx.drawTable(
        'Table G.1 · Unified 5D + 4D Action Sectors, Field Equations & Gauge Constraints',
        ['Sector', 'Lagrangian Density Term', 'Euler–Lagrange Equation', 'Symmetry & Bounds'],
        [32, 46, 50, 42],
        H13_ACTION_FIELD_TABLE.map((r) => [
          `${r.sector} [${r.category}]`,
          r.lagrangianTerm,
          r.eulerLagrangeEquation,
          r.symmetryOrConstraint
        ])
      );
    }
    if (app.letter === 'H') {
      ctx.drawTable(
        'Table H.1 · Kaluza–Klein Mode Spectrum & Multi-Experiment Extra-Dimension Bounds',
        ['Experiment / Domain', 'Scale & Observational Bound', 'H13 Parameter Match', 'Status'],
        [36, 48, 52, 34],
        H13_KK_CONSTRAINTS_TABLE.map((r) => [
          r.experimentOrDomain,
          `${r.scaleProbed} | ${r.observationalBound}`,
          r.h13ParameterMatch,
          r.status
        ])
      );
    }
    if (app.letter === 'I') {
      ctx.drawTable(
        'Table I.0 · GJW Assumption Relaxation Matrix (AdS/CFT vs. Quasi-Local Boundary-Free Form)',
        ['GJW (2016/2017) Assumption', 'Status', 'Original AdS Role', 'Quasi-Local Boundary-Free Replacement'],
        [40, 28, 44, 58],
        H13_GJW_ASSUMPTION_MATRIX.map((r) => [
          r.gjwAssumption,
          r.boundaryFreeStatus,
          r.originalRoleInAdS,
          r.quasiLocalReplacement
        ])
      );
      ctx.drawTable(
        'Table I.1 · Five-Step Quasi-Local Proof of Non-AdS GJW Traversable Portals',
        ['Proof Step', 'AdS Convention Replaced', 'H13 Boundary-Free Mechanism & Key Identity'],
        [34, 46, 90],
        H13_GJW_PROOF_STEPS.map((st) => [
          `${st.stepNumber}: ${st.stageTitle}`,
          st.adsOriginalAssumption,
          `${st.h13NonAdsProofMechanism} | ${st.keyInequalityOrIdentity}`
        ])
      );
    }
    if (app.letter === 'J') {
      ctx.drawTable(
        'Table J.1 · Reproducible RK4 White-Hole Bounce Benchmarks (Planck Remnant to AGN)',
        ['Benchmark & Mass', 'Bounce Radius & Accel', 'Int / Ext Delay', 'RK4 Check & Observable'],
        [38, 40, 44, 48],
        H13_WH_PIPELINE_SPEC.map((b) => [
          `${b.benchmarkId} (${b.massGrams})`,
          `${b.bounceRadiusM} | ${b.bounceAccelMs2}`,
          `Int: ${b.interiorProperSec} | Ext: ${b.exteriorDelayBranch}`,
          b.observableOrRk4Check
        ])
      );
      ctx.drawTable(
        'Table J.2 · RK4 Solver Step-Size (Δs) & Initial-Condition (u_0) Convergence Audit',
        ['Run Case', 'Step Δs & Initial u_0', 'u_min & Bounce d²u/ds²', 'Max Hamiltonian Residual'],
        [38, 44, 44, 44],
        H13_RK4_SENSITIVITY_TABLE.map((s) => [
          s.runCase,
          `Δs = ${s.stepSizeDs} | u_0 = ${s.initialRadiusU0}`,
          `u_min = ${s.uMinObserved} | d²u/ds² = ${s.bounceAccelD2uDs2}`,
          s.maxHamiltonianResidual
        ])
      );
    }
  }

  // Populate Reserved TOC (Multi-Line Wrapped Without Truncation)
  let tocIdx = 0;
  doc.setPage(tocPages[tocIdx]);
  let ty = topY;
  ctx.setFontSafe(hasUnicodeFonts ? 'playfair' : 'serif', 'normal', 26.25);
  doc.setTextColor(...EARTH_UMBER);
  doc.text('Table of Contents', marginX, ty);
  ty += 6;
  doc.setDrawColor(...EARTH_STONE);
  doc.setLineWidth(0.35);
  doc.line(marginX, ty, marginX + contentW, ty);
  ty += 12;

  for (const entry of tocEntries) {
    const indentPx = (entry.indent ?? 0) * 5.0;
    const fSize = entry.indent ? 9.0 : 10.1;
    const lineStep = entry.indent ? 4.4 : 4.9;
    const maxLabelW = contentW - indentPx - 16;
    const labelLines = ctx.wrapMixedLines(entry.label, maxLabelW, false, fSize, 'serif');
    const entryH = Math.max(1, labelLines.length) * lineStep + (entry.indent ? 1.8 : 2.8);

    if (ty + entryH > bottomLimit) {
      tocIdx++;
      if (tocIdx >= tocPages.length) break;

      doc.setPage(tocPages[tocIdx]);
      ty = topY;
      ctx.setFontSafe(hasUnicodeFonts ? 'playfair' : 'serif', 'normal', 18);
      doc.setTextColor(...EARTH_UMBER);
      doc.text('Table of Contents (continued)', marginX, ty);
      ty += 5;
      doc.setDrawColor(...EARTH_STONE);
      doc.setLineWidth(0.3);
      doc.line(marginX, ty, marginX + contentW, ty);
      ty += 8;
    }

    ctx.setFontSafe('serif', 'normal', fSize);
    doc.setTextColor(...(entry.indent ? EARTH_STONE : EARTH_UMBER));
    for (let li = 0; li < labelLines.length; li++) {
      ctx.drawStyledSpans(labelLines[li].spans, marginX + indentPx, ty + li * lineStep, false, 'serif', 'normal');
    }
    ctx.setFontSafe('mono', 'normal', 9.0);
    doc.setTextColor(...EARTH_TERRACOTTA);
    doc.text(String(entry.page), marginX + contentW, ty, { align: 'right' });
    ty += entryH;
  }

  // Stamp Running Headers & Footers
  const totalPages = doc.getNumberOfPages();
  const runningHeader = ctx.clipMixedLine(
    ctx.safeStr('IGRT-2026-H13 · Information-Geometric Resonant Time · Tassan, Lauret, Bulaqueña, Avila Gomez, Chatterjee & Goldberger'),
    contentW,
    false,
    7.6,
    'mono'
  );
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    if (p > 1) {
      ctx.setFontSafe('mono', 'normal', 7.6);
      doc.setTextColor(...EARTH_STONE);
      doc.text(runningHeader, marginX, 14);
      doc.setDrawColor(...EARTH_STONE);
      doc.setLineWidth(0.2);
      doc.line(marginX, 17, marginX + contentW, 17);
      ctx.setFontSafe('mono', 'normal', 8);
      doc.setTextColor(...EARTH_STONE);
      doc.text(`Page ${p} of ${totalPages}`, pageW / 2, 285, { align: 'center' });
    }
  }

  doc.save('IGRT_H13_Monograph.pdf');
}
