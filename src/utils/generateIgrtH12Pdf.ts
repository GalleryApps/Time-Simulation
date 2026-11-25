/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * IGRT-H12 Publication-Grade A4 Direct PDF Exporter
 * - Real embedded static PlayfairDisplay-Regular.ttf (weight 400, strictly non-bold, 26.25pt = 35px)
 *   for ALL Level-1 Chapter Titles, Cover Title, TOC Heading & List Headings, with automatic
 *   Greek/math glyph routing to DejaVuSerif / DejaVuSans so zero .notdef glyphs appear.
 * - Body paragraphs in DejaVuSerif 12pt (16px) with 6.35mm (1.5x) line spacing, fully word-justified.
 * - Dedicated Title/Cover Page (Page 1), ample 30mm top margin, strict 4-color muted earth scheme.
 * - Preserves U+2113 (ℓ_Pl) cleanly (removed .replace(/ℓ/g, 'l') typo).
 * - Exports generateIgrtH12Pdf(): Complete Unified Monograph (Cover Page, Unified Abstract,
 *   Computed 4-Page TOC, 5 Front-Matter Lists, Foundational 5D Equations & Scope, Chapters 1–13
 *   incl. Ch. 13.5 Seven Open Problems Constraints & 13.6 Comprehensive Conclusion, References, and strictly
 *   alphabetical Consolidated Appendices A–L, with Appendix I rendering the Claim–Evidence Ledger
 *   cleanly without internal multi-domain or red-team scorecard tables).
 */

import { jsPDF } from 'jspdf';
import {
  H12_META,
  H12_MASTER_EQUATIONS,
  H12_METRIC_SIGNATURE_BOX,
  H12_FOUNDATIONAL_EQUATIONS_NOTE,
  H12_ABSTRACT_PARAGRAPHS,
  H12_SCOPE_AND_NON_CLAIMS,
  H11_TWELVE_COMPONENTS_AUDIT,
  COMPARISON_4D_VS_5D_IGRT,
  GLOSSARY_5D_TERMS,
  SUMMARY_FOR_PHYSICISTS,
  TIMELINE_5D_PHYSICS,
  SEVEN_TEMPORAL_NOTIONS,
  POSITIVE_CONJECTURES_SUMMARY,
  SIX_BLACK_HOLE_CLASSES,
  NEGATIVE_RESULTS_SUMMARY,
  GLOSSARY_NEGATIVE_THEOREMS,
  WHAT_IS_UNIQUE_TO_5D,
  FIVE_D_OBSERVATIONAL_BOUNDS,
  FIVE_D_SIGNATURES_TEST_MATRIX,
  WHAT_IS_NOT_DERIVED_LEDGER,
  H12_ALL_PROTOCOLS,
  P7_TO_P13_TIMELINE_TABLE,
  P7_TO_P13_FALSIFICATION_TABLE,
  P7_TO_P13_CONFIRMATION_TABLE,
  P7_TO_P13_DECISION_MATRIX,
  H11_VS_H12_PROTOCOLS_COMPARISON,
  H12_FALSIFICATION_CHECKLIST,
  H12_CONFIRMATION_CHECKLIST,
  H12_FUNDING_AGENCY_SUMMARY,
  ELEVEN_PORTAL_MECHANISMS,
  H12_PROPOSED_DEVICES,
  SEVEN_SOLVED_PHYSICS_PROBLEMS,
  TWELVE_EXTRAPOLATIONS,
  H12_DEFINITIONS_LIST,
  H12_THEOREMS_LIST,
  H12_OPEN_PROBLEMS_LIST,
  H12_PRIOR_AUDIT_RESPONSES,
  H12_APPENDICES,
  H12_REFERENCES,
  EPISTEMIC_BC_GREY_AREA_RUBRIC,
  H11_665_ASSERTIONS_CATALOG,
  REGULATOR_SENSITIVITY_TABLE,
  MODEL2B_CONVERGENCE_AND_MICROCAUSALITY_TABLE,
  P7_TO_P13_NOISE_BUDGET_TABLE,
  P13_SYSTEMATIC_ERROR_BUDGET,
  P13_STATISTICAL_ERROR_BUDGET,
  P7_TO_P13_COMBINED_BOUNDS_TABLE,
  P7_TO_P13_SENSITIVITY_PROJECTION_TABLE,
  P13_SUMMARY_OF_BOUNDS_TABLE,
  H12_PROTOCOL_ANALYSIS_SECTIONS,
  APPENDIX_J_DEVICE_DOSSIERS,
  APPENDIX_J_SYNTHESIS_TABLE,
  APPENDIX_J_SYNERGY,
  APPENDIX_J_RISK_ASSESSMENT,
  APPENDIX_J_RESOURCE_REQUIREMENTS,
  type H12Equation
} from '../types/igrtH12Apparatus';
import {
  H12_CHAPTERS,
  H12_FRONTMATTER_TABLES_LIST,
  H12_FRONTMATTER_EQUATIONS_LIST
} from '../types/igrtH12Data';
import {
  H12_ARCHIVAL_PLATES,
  H12_THEORY_ILLUSTRATIONS,
  H12_SUPPLEMENTAL_PLATES,
  H12_FIGURES,
  H12_DEVICE_FIGURES
} from '../components/IgrtH12Figures';
import {
  parseMathSegments,
  parseHtmlMathSegments,
  formatSvgMathMarkup,
  pdfBmpSafeUnicode,
  type MathSegment
} from './formatMathUnicode';

// ---------------------------------------------------------------------------
// 1. Safe Unicode Font Loading (Including PlayfairDisplay-Regular) & BMP Check
// ---------------------------------------------------------------------------

interface LoadedPdfFonts {
  playfairRegular: string;
  serifRegular: string;
  serifBold: string;
  serifItalic: string;
  sansRegular: string;
  monoRegular: string;
}

let cachedH12Fonts: Promise<LoadedPdfFonts | null> | null = null;
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

async function loadH12Fonts(): Promise<LoadedPdfFonts | null> {
  if (typeof fetch === 'undefined') return null;
  if (!cachedH12Fonts) {
    cachedH12Fonts = (async () => {
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
        cachedH12Fonts = null;
        return null;
      }
    })();
  }
  return cachedH12Fonts;
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

/**
 * Ensures 100% BMP-safe Unicode (no astral glyphs > U+FFFF) while preserving ℓ (U+2113).
 */
function bmpSafeH12(raw: string): string {
  const step1 = pdfBmpSafeUnicode(raw)
    .replace(/𝒜/g, 'A')
    .replace(/𝒪/g, 'O');
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
  return bmpSafeH12(raw)
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
  '\u210B', // ℋ
  '\u210F', // ℏ
  '\u2112', // ℒ
  '\u2113', // ℓ
  '\u211D', // ℝ
  '\u2124', // ℤ
  '\u2131', // ℱ
  '\u2190', // ←
  '\u2192', // →
  '\u2194', // ↔
  '\u2197', // ↗
  '\u21A6', // ↦
  '\u21D2', // ⇒
  '\u2200', // ∀
  '\u2202', // ∂
  '\u2203', // ∃
  '\u2207', // ∇
  '\u2208', // ∈
  '\u2209', // ∉
  '\u2211', // ∑
  '\u2212', // −
  '\u221A', // √
  '\u221D', // ∝
  '\u221E', // ∞
  '\u2225', // ∥
  '\u222A', // ∪
  '\u222B', // ∫
  '\u222E', // ∮
  '\u2243', // ≃
  '\u2245', // ≅
  '\u2248', // ≈
  '\u2260', // ≠
  '\u2261', // ≡
  '\u2264', // ≤
  '\u2265', // ≥
  '\u226A', // ≪
  '\u226B', // ≫
  '\u2272', // ≲
  '\u2273', // ≳
  '\u2282', // ⊂
  '\u2295', // ⊕
  '\u2297', // ⊗
  '\u2299', // ⊙
  '\u22A5', // ⊥
  '\u22C5', // ⋅
  '\u25A1', // □
  '\u27E8', // ⟨
  '\u27E9', // ⟩
  '\u2016', // ‖
  '\u2032'  // ′
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

// ---------------------------------------------------------------------------
// 2. Rasterizers for SVG Figures & PNG Plates
// ---------------------------------------------------------------------------

async function rasterizeSvgDataUrl(svgMarkup: string): Promise<{ dataUrl: string; aspect: number } | null> {
  if (typeof document === 'undefined') return null;
  return new Promise((resolve) => {
    try {
      const cleanSvg = formatSvgMathMarkup(bmpSafeH12(svgMarkup));
      const vb = cleanSvg.match(/viewBox="0 0 (\d+) (\d+)"/);
      const vbW = vb ? Number(vb[1]) : 760;
      const vbH = vb ? Number(vb[2]) : 440;
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

// ---------------------------------------------------------------------------
// 3. Shared PDF Typography Engine
// ---------------------------------------------------------------------------

type EarthRgb = [number, number, number];
// Strictly 4 Muted Earth Colors (+ soft #F6F2EA parchment ground tint of Warm Stone)
const EARTH_UMBER: EarthRgb = [58, 46, 38];         // #3A2E26 — deep umber ink, primary titles & body copy
const EARTH_TERRACOTTA: EarthRgb = [143, 91, 74];   // #8F5B4A — muted clay terracotta (subheadings, Cat C/D, page numbers)
const EARTH_SAGE: EarthRgb = [100, 112, 91];        // #64705B — muted sage moss (Cat A/B, ORCID links, takeaways)
const EARTH_STONE: EarthRgb = [142, 127, 107];      // #8E7F6B — muted warm stone (headers, dividers, captions, summaries)
const EARTH_PARCHMENT: EarthRgb = [246, 242, 234];  // #F6F2EA — soft warm-stone tint for callout boxes

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

  const safeStr = (s: string) => (hasUnicodeFonts ? bmpSafeH12(s) : fallbackAsciiSafe(s));

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
      // Playfair Display lacks Greek, extended dot-Latin (Ẋ/ẋ), and mathematical symbols; route cleanly
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
        if (i < parts.length - 1) {
          lines.push([]);
        }
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
        if (/^ +$/.test(chunk)) {
          pushCurrent();
        } else {
          currentWord.push({ ...sp, text: chunk });
        }
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
    // Level 1 uses Playfair Display Regular (26.25pt = 35px, strictly NEVER bold) with generous spacing
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
    if (cat.includes('ESTABLISHED') || cat.includes('DERIVED')) doc.setTextColor(...EARTH_SAGE);
    else doc.setTextColor(...EARTH_TERRACOTTA);
    doc.text(clipMixedLine(`[${safeStr(cat)}]`, contentW, false, 8, 'mono'), marginX, y);
    y += 6.2;
  };

  const drawEquationBox = (eq: H12Equation) => {
    const cap = `${eq.label} [${eq.category}] — ${eq.caption}`;
    const eqInnerW = contentW - 16;
    const baseEqFont = hasUnicodeFonts ? 'serif' : 'sans';
    let eqFontSize = 10.5;
    let eqLines = wrapMixedLines(eq.unicodeHtml, eqInnerW, false, eqFontSize, baseEqFont, 'normal', true);
    const lastLineWidth = (lines: typeof eqLines) =>
      lines.length > 0 ? measureSpansWidth(lines[lines.length - 1].spans, false, baseEqFont, 'normal') : 0;
    if (eqLines.length > 3 || (eqLines.length > 1 && lastLineWidth(eqLines) < 28)) {
      for (const candidateSize of [9.8, 9.4, 9.1]) {
        const altLines = wrapMixedLines(eq.unicodeHtml, eqInnerW, false, candidateSize, baseEqFont, 'normal', true);
        if (
          altLines.length < eqLines.length ||
          (altLines.length === eqLines.length && eqLines.length > 3 && candidateSize === 9.4)
        ) {
          eqFontSize = candidateSize;
          eqLines = altLines;
          if (eqLines.length <= 3 && lastLineWidth(eqLines) >= 28) break;
        }
      }
    }
    const eqLineGap = 5.9;
    const capLineGap = 4.5;
    const capLines = wrapMixedLines(cap, contentW - 14, false, 8.9, 'serif', 'italic');
    const boxH = 7.4 + eqLines.length * eqLineGap + 4.4 + capLines.length * capLineGap + 3.2;

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
        if (ci > 0) {
          doc.line(cx, y, cx, y + headerH);
        }
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
      if (ri % 2 === 1) {
        doc.setFillColor(250, 248, 243);
      } else {
        doc.setFillColor(255, 255, 255);
      }
      doc.setDrawColor(...EARTH_STONE);
      doc.setLineWidth(0.24);
      doc.rect(marginX, y, contentW, rH, 'FD');

      let cx = marginX;
      doc.setTextColor(...EARTH_UMBER);
      for (let ci = 0; ci < headers.length; ci++) {
        if (ci > 0) {
          doc.line(cx, y, cx, y + rH);
        }
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

    // Eyebrow Header + Category Tag
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

    // Full-Page Illustration Title
    drawMathInlineText(opts.title, marginX, contentW, 14.5, 6.8, EARTH_UMBER, false, false, 'playfair', 'normal');
    y += 3.5;

    // Pre-measure Caption Block to maximize dedicated artwork height cleanly above footer
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

    // Pure white illustration showcase frame
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(216, 207, 194);
    doc.setLineWidth(0.25);
    doc.rect(marginX, y, contentW, availArtH, 'FD');
    doc.addImage(opts.asset.dataUrl, opts.format, drawX, drawY, drawW, drawH);

    // Bottom Divider + Scientific Caption
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
    drawMixedRun,
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

// ---------------------------------------------------------------------------
// 4. Main Monograph A4 PDF Builder (IGRT_H12_Monograph.pdf)
// ---------------------------------------------------------------------------

export async function generateIgrtH12Pdf(): Promise<void> {
  const fonts = await loadH12Fonts();
  const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait', compress: true });
  const hasUnicodeFonts = registerAllFontsOnDoc(doc, fonts);
  const ctx = createPdfContext(doc, hasUnicodeFonts);
  const { marginX, contentW, topY, bottomLimit, pageW, tocEntries } = ctx;

  const [svgAssets, deviceAssets, plateAssets, theoryAssets, suppAssets] = await Promise.all([
    Promise.all(H12_FIGURES.map(async (f) => ({ fig: f, raster: await rasterizeSvgDataUrl(f.svgMarkup) }))),
    Promise.all(
      H12_DEVICE_FIGURES.map(async (f) => ({
        fig: f,
        raster: await rasterizeSvgDataUrl(f.svgMarkup),
        cutaway: f.illustrationPath ? await fetchImageDataUrl(f.illustrationPath) : null
      }))
    ),
    Promise.all(H12_ARCHIVAL_PLATES.map(async (p) => ({ plate: p, raster: await fetchImageDataUrl(p.imagePath) }))),
    Promise.all(H12_THEORY_ILLUSTRATIONS.map(async (ill) => ({ ill, raster: await fetchImageDataUrl(ill.imagePath) }))),
    Promise.all(H12_SUPPLEMENTAL_PLATES.map(async (ill) => ({ ill, raster: await fetchImageDataUrl(ill.imagePath) })))
  ]);

  const cleanPdfText = (s: string): string =>
    s.replace('Consolidated Appendices A–L', 'Consolidated Appendices A–L');

  // -------------------------------------------------------------------------
  // Dedicated Cover Page (Page 1 Only — Muted 4-Color Earth Scheme)
  // -------------------------------------------------------------------------
  ctx.setY(24);
  doc.setDrawColor(...EARTH_STONE);
  doc.setLineWidth(0.35);
  doc.line(marginX, ctx.getY(), marginX + contentW, ctx.getY());
  ctx.addY(5);

  ctx.drawMathInlineText(
    `${H12_META.monographId} · Complete Research Monograph (Chapters 1–13 & Consolidated Appendices A–L) · ${H12_META.date}`,
    marginX,
    contentW,
    8.2,
    4.0,
    EARTH_TERRACOTTA,
    false,
    false,
    'mono'
  );
  ctx.addY(7);

  // Main Cover Title: Playfair Display Regular 26.25pt (= 35px), never bold
  ctx.drawMathInlineText(H12_META.title, marginX, contentW, 26.25, 10.6, EARTH_UMBER, false, false, 'playfair', 'normal');
  ctx.addY(3);

  doc.setDrawColor(...EARTH_TERRACOTTA);
  doc.setLineWidth(0.8);
  doc.line(marginX, ctx.getY(), marginX + 40, ctx.getY());
  ctx.addY(5);

  ctx.drawMathInlineText(H12_META.subtitle, marginX, contentW, 10.8, 5.0, EARTH_STONE, false, false, 'serif', 'italic');
  ctx.addY(6);

  ctx.drawMathInlineText('AUTHORS', marginX, contentW, 7.8, 3.6, EARTH_TERRACOTTA, false, false, 'mono');
  ctx.addY(1.5);
  for (const author of H12_META.authorRoster) {
    ctx.drawMathInlineText(author.name, marginX, contentW, 10.2, 4.4, EARTH_UMBER, true, false);
    ctx.drawMathInlineText(author.affiliation, marginX + 2, contentW - 2, 8.6, 3.8, EARTH_STONE, false, false);
    if (author.orcidUrl) {
      const orcidText = `ORCID: ${author.orcidUrl}`;
      const orcidY = ctx.getY();
      ctx.drawMathInlineText(orcidText, marginX + 2, contentW - 2, 7.4, 3.5, EARTH_SAGE, false, false, 'mono');
      const linkW = Math.min(contentW - 2, ctx.measureTokenWidth(orcidText, false, 7.4, 'mono'));
      if (typeof (doc as unknown as { link?: unknown }).link === 'function') {
        doc.link(marginX + 2, orcidY - 2.8, linkW, 3.5, { url: author.orcidUrl });
      }
    } else if (author.email) {
      const emailText = `Email: ${author.email}`;
      const emailY = ctx.getY();
      ctx.drawMathInlineText(emailText, marginX + 2, contentW - 2, 7.4, 3.5, EARTH_SAGE, false, false, 'mono');
      const linkW = Math.min(contentW - 2, ctx.measureTokenWidth(emailText, false, 7.4, 'mono'));
      if (typeof (doc as unknown as { link?: unknown }).link === 'function') {
        doc.link(marginX + 2, emailY - 2.8, linkW, 3.5, { url: `mailto:${author.email}` });
      }
    }
    ctx.addY(1.8);
  }

  // Anchor archival metadata colophon at foot of Cover Page
  if (ctx.getY() < 240) ctx.setY(240);
  doc.setFillColor(...EARTH_PARCHMENT);
  doc.setDrawColor(...EARTH_STONE);
  doc.setLineWidth(0.3);
  doc.roundedRect(marginX, ctx.getY(), contentW, 30, 2, 2, 'FD');
  ctx.addY(6);
  ctx.drawMathInlineText(
    `Predecessor Preserved: ${H12_META.predecessor}`,
    marginX + 5,
    contentW - 10,
    8.5,
    4.4,
    EARTH_UMBER,
    false,
    false,
    'mono'
  );
  ctx.drawMathInlineText(
    `Verification Solver: ${H12_META.verifyCommand}`,
    marginX + 5,
    contentW - 10,
    8.5,
    4.4,
    EARTH_SAGE,
    false,
    false,
    'mono'
  );
  ctx.drawMathInlineText(
    'Epistemic Discipline: Category A (Established) · B (Derived) · C (Conjectural) · D (Speculative)',
    marginX + 5,
    contentW - 10,
    8.2,
    4.4,
    EARTH_STONE,
    false,
    false,
    'mono'
  );

  // Page 2: Short Unified Layman & Scholar Abstract + Keywords (Strict Single-Page Fit)
  doc.addPage();
  ctx.setY(topY);
  ctx.drawHeading('Abstract', 1, true, 0, false);
  for (const p of H12_ABSTRACT_PARAGRAPHS) {
    ctx.drawMathInlineText(cleanPdfText(p), marginX, contentW, 10.4, 5.15, EARTH_UMBER, false, true);
    ctx.addY(2.0);
  }
  ctx.addY(1.6);
  ctx.drawMathInlineText(`Keywords: ${H12_META.keywords.join(' · ')}`, marginX, contentW, 8.8, 4.2, EARTH_STONE, false, true);

  // Reserve 4 pages right after Abstract for Computed Table of Contents (Ch. 1–13 + References + App. A–L + Devices A–K)
  doc.addPage();
  const tocPage1 = doc.getNumberOfPages();
  doc.addPage();
  const tocPage2 = doc.getNumberOfPages();
  doc.addPage();
  const tocPage3 = doc.getNumberOfPages();
  doc.addPage();
  const tocPage4 = doc.getNumberOfPages();
  doc.addPage();
  ctx.setY(topY);

  // Five Front-Matter Lists
  ctx.drawHeading('Lists of Illustrations, Figures, Tables, Equations, Theorems & Definitions', 1, true, 0, false);
  ctx.drawHeading('List of Illustrations (Archival Plates, Theory & Dimension Cutaways & Devices A–K)', 2, false, 1);
  for (const pl of H12_ARCHIVAL_PLATES) {
    ctx.drawMathInlineText(`${pl.figureNumber} (Ch.${pl.anchorChapter}): ${pl.title} [${pl.category}]`, marginX + 2, contentW - 2, 10, 5.25);
    ctx.addY(1.4);
  }
  for (const ill of H12_THEORY_ILLUSTRATIONS) {
    ctx.drawMathInlineText(`${ill.illustrationNumber} (Ch.${ill.anchorChapter}): ${ill.title} [${ill.category}]`, marginX + 2, contentW - 2, 10, 5.25);
    ctx.addY(1.4);
  }
  for (const ill of H12_SUPPLEMENTAL_PLATES) {
    ctx.drawMathInlineText(`${ill.illustrationNumber} (Ch.${ill.anchorChapter} · Supplemental Plate): ${ill.title} [${ill.category}]`, marginX + 2, contentW - 2, 10, 5.25);
    ctx.addY(1.4);
  }
  for (const mfg of H12_DEVICE_FIGURES.filter((f) => f.illustrationTitle)) {
    ctx.drawMathInlineText(`Cutaway Plate (${mfg.deviceId} · Appendix J): ${mfg.illustrationTitle} [${mfg.category}]`, marginX + 2, contentW - 2, 10, 5.25);
    ctx.addY(1.4);
  }
  ctx.addY(2.5);
  ctx.drawHeading('List of Figures & Vector Schematics', 2, false, 1);
  for (const fg of H12_FIGURES) {
    ctx.drawMathInlineText(`${fg.figureNumber} (Ch.${fg.anchorChapter}): ${fg.title} [${fg.category}]`, marginX + 2, contentW - 2, 10, 5.25);
    ctx.addY(1.4);
  }
  for (const mfg of H12_DEVICE_FIGURES) {
    ctx.drawMathInlineText(`${mfg.figureNumber} (Appendix J · ${mfg.deviceId}): ${mfg.title} [${mfg.category}]`, marginX + 2, contentW - 2, 10, 5.25);
    ctx.addY(1.4);
  }
  ctx.addY(2.5);
  ctx.drawHeading('List of Tables', 2, false, 1);
  for (const tb of H12_FRONTMATTER_TABLES_LIST.filter((t) => t.location !== 'Appendix I')) {
    ctx.drawMathInlineText(`${tb.id} (${tb.location}): ${tb.title}`, marginX + 2, contentW - 2, 10, 5.25);
    ctx.addY(1.4);
  }
  ctx.addY(2.5);
  ctx.drawHeading('List of Principal Equations', 2, false, 1);
  for (const eq of H12_FRONTMATTER_EQUATIONS_LIST) {
    ctx.drawMathInlineText(`${eq.label} (${eq.location}, ${eq.category}): ${eq.title}`, marginX + 2, contentW - 2, 10, 5.25);
    ctx.addY(1.4);
  }
  ctx.addY(2.5);
  ctx.drawHeading('List of Theorems', 2, false, 1);
  for (const th of H12_THEOREMS_LIST) {
    ctx.drawMathInlineText(`${th.id} (${th.location}, ${th.category}): ${th.title}`, marginX + 2, contentW - 2, 10, 5.25);
    ctx.addY(1.4);
  }
  ctx.addY(2.5);
  ctx.drawHeading('List of Formal Definitions', 2, false, 1);
  for (const df of H12_DEFINITIONS_LIST) {
    ctx.drawMathInlineText(`${df.id} (${df.term}): ${df.formalDefinition}`, marginX + 2, contentW - 2, 10, 5.25);
    ctx.addY(1.4);
  }

  // Foundational Five-Dimensional Equations & Scope
  ctx.drawHeading('Foundational Five-Dimensional Equations (Category C) & Scope', 1, true, 0, true);
  ctx.drawMathInlineText(H12_FOUNDATIONAL_EQUATIONS_NOTE, marginX, contentW, 11.2, 6.0, EARTH_TERRACOTTA, true, true);
  ctx.addY(3.5);
  for (const eq of H12_MASTER_EQUATIONS) {
    ctx.drawEquationBox(eq);
  }
  ctx.drawHeading(H12_SCOPE_AND_NON_CLAIMS.title, 2, false, 1);
  for (const pt of H12_SCOPE_AND_NON_CLAIMS.points) {
    ctx.drawMathInlineText(`• ${pt}`, marginX + 2, contentW - 2, 11, 6.0, EARTH_UMBER, false, true);
    ctx.addY(2.4);
  }

  // Chapters 1 to 13
  for (const ch of H12_CHAPTERS) {
    ctx.drawHeading(`Chapter ${ch.number}. ${ch.title}`, 1, true, 0, true);
    ctx.drawMathInlineText(cleanPdfText(ch.leadSummary), marginX, contentW, 11.5, 6.25, EARTH_STONE, false, true, 'serif', 'italic');
    ctx.addY(6.0);

    if (ch.number === 1) {
      ctx.drawCalloutBox('METRIC SIGNATURE BOX', H12_METRIC_SIGNATURE_BOX, 10.6, 5.4);
      ctx.drawTable(
        'Table 1.3 · Category B/C Boundary Rubric Box (Resolving Epistemic Grey Areas)',
        ['Boundary Case', 'Derived Core (Cat. B)', 'Conjectural Premise (Cat. C)', 'Assigned Category & Boundary Rule'],
        [36, 48, 48, 38],
        EPISTEMIC_BC_GREY_AREA_RUBRIC.map((g) => [
          g.boundaryCase,
          g.derivedAspect,
          g.conjecturalAspect,
          `${g.assignedCategory} — ${g.ruleApplied}`
        ])
      );
    }

    if (ch.number === 2) {
      ctx.drawTable(
        'Timeline of 5D Physics (1921–2026)',
        ['Year & Milestone', 'Contribution to IGRT-H12'],
        [44, 126],
        TIMELINE_5D_PHYSICS.map((tm) => [`${tm.year} · ${tm.milestone}`, tm.contributionToH12])
      );
    }

    for (const sub of ch.subsections) {
      ctx.drawHeading(`${sub.number} ${sub.title}`, 2, true, 1);
      ctx.drawCategoryTag(sub.category);
      for (const p of sub.paragraphs) {
        ctx.drawMathInlineText(cleanPdfText(p), marginX, contentW, 12, 6.55, EARTH_UMBER, false, true);
        ctx.addY(3.8);
      }
      if (sub.equation) ctx.drawEquationBox(sub.equation);
      if (sub.bulletPoints && sub.bulletPoints.length > 0) {
        ctx.addY(1.2);
        for (const bp of sub.bulletPoints) {
          ctx.drawMathInlineText(`• ${bp.label}: ${bp.text}`, marginX + 2, contentW - 2, 11.2, 6.05, EARTH_UMBER, false, true);
          ctx.addY(2.0);
        }
        ctx.addY(2.5);
      }
      if (sub.theoremBox) {
        ctx.ensureSpace(32);
        ctx.addY(2.5);
        ctx.drawCategoryTag(sub.theoremBox.category);
        ctx.drawMathInlineText(`${sub.theoremBox.number}: ${sub.theoremBox.title}`, marginX + 2, contentW - 4, 11.5, 6.0, EARTH_SAGE, true, false);
        ctx.addY(1.2);
        for (const hyp of sub.theoremBox.hypotheses) {
          ctx.drawMathInlineText(`• ${hyp}`, marginX + 4, contentW - 6, 10.8, 5.75, EARTH_SAGE, false, true);
          ctx.addY(1.2);
        }
        ctx.addY(1.0);
        ctx.drawMathInlineText(sub.theoremBox.statement, marginX + 2, contentW - 4, 11.5, 6.3, EARTH_UMBER, false, true);
        ctx.addY(5.0);
      }
      if (sub.workedExample) {
        ctx.ensureSpace(34);
        ctx.addY(2.5);
        ctx.drawMathInlineText(sub.workedExample.title, marginX + 2, contentW - 4, 11.5, 6.0, EARTH_TERRACOTTA, true, false);
        ctx.addY(1.2);
        ctx.drawMathInlineText(sub.workedExample.setup, marginX + 2, contentW - 4, 11, 5.95, EARTH_STONE, false, true);
        ctx.addY(1.5);
        sub.workedExample.steps.forEach((st, idx) => {
          ctx.drawMathInlineText(`${idx + 1}. ${st}`, marginX + 4, contentW - 6, 11, 5.95, EARTH_UMBER, false, true);
          ctx.addY(1.4);
        });
        ctx.drawEquationBox(sub.workedExample.resultEquation);
        ctx.drawMathInlineText(`Takeaway: ${sub.workedExample.takeaway}`, marginX + 2, contentW - 4, 11, 5.95, EARTH_SAGE, true, true);
        ctx.addY(5.0);
      }
    }

    if (ch.number === 1) {
      ctx.drawTable(
        'Table 1.1 · Audit of Twelve Core H11 Components & H12 Embedding Status',
        ['Component', 'H11 Value / Role', 'H12 Status', 'Category & Modification'],
        [34, 34, 34, 68],
        H11_TWELVE_COMPONENTS_AUDIT.map((r) => [
          r.component,
          r.h11EquationOrValue,
          r.h12Status,
          `${r.category}: ${r.h12Modification}`
        ])
      );
      ctx.drawTable(
        'Table 1.2 · Direct Comparison: 4D IGRT-H11 vs. 5D IGRT-H12',
        ['Dimension', '4D IGRT-H11', '5D IGRT-H12', 'Epistemic Delta', 'Testable Now?'],
        [30, 38, 42, 36, 24],
        COMPARISON_4D_VS_5D_IGRT.map((c) => [
          c.dimension,
          c.h11FourD,
          c.h12FiveD,
          c.epistemicDelta,
          c.testableNow
        ])
      );
      ctx.drawTable(
        'Glossary of 5D Terms',
        ['Term', 'Formal Meaning in IGRT-H12'],
        [42, 128],
        GLOSSARY_5D_TERMS.map((g) => [g.term, g.definition])
      );
      ctx.drawHeading('Summary for Physicists', 3, false, 1);
      ctx.drawMathInlineText(SUMMARY_FOR_PHYSICISTS, marginX, contentW, 11.5, 6.05, EARTH_SAGE, false, true);
      ctx.addY(2);
    }

    if (ch.number === 2) {
      ctx.drawTable(
        'Table 2.1 · Structured Catalog of All 665 Verified IGRT-H11 Assertions',
        ['Verification Group', 'Count', 'Verified Physical & Mathematical Scope'],
        [48, 18, 104],
        H11_665_ASSERTIONS_CATALOG.map((row) => [
          row.moduleGroup,
          String(row.assertionCount),
          row.verifiedPhysicalScope
        ])
      );
      ctx.drawTable(
        'Table 2.2 · Eöt-Wash ±2 μm Error Propagation, Multi-Regulator Stability & Clock Energy Sweep',
        ['Regime / Regulator', 'Scale / Ratio', 'Computed Output', 'Physical Significance'],
        [40, 30, 40, 60],
        REGULATOR_SENSITIVITY_TABLE.map((row) => [
          row.regimeOrRegulator,
          row.energyOrRadius,
          row.computedOutput,
          row.physicalInterpretation
        ])
      );
    }

    if (ch.number === 3) {
      ctx.drawTable(
        'Table 3.1 · Seven Orthogonal Temporal Notions & Standard Literature Correspondence',
        ['Notion', 'Symbol', 'Mathematical Definition', 'Folding Role & Literature'],
        [30, 22, 56, 62],
        SEVEN_TEMPORAL_NOTIONS.map((t) => [
          t.notion,
          t.symbol,
          t.mathematicalDefinition,
          `${t.foldsInH12} | Lit.: ${t.literatureComparison}`
        ])
      );
    }

    if (ch.number === 4) {
      ctx.drawTable(
        'Table 4.1 · Positive Conjectures Summary Table (Strictly Category C)',
        ['Conjecture (Cat. C)', 'Conditional Statement', 'Target Protocol & Testability'],
        [40, 74, 56],
        POSITIVE_CONJECTURES_SUMMARY.map((p) => [
          p.conjecture,
          p.statement,
          `${p.category}: ${p.test}`
        ])
      );
      ctx.drawTable(
        'Table 4.2 · Model 2B Quadrature Convergence, Euler–Lagrange & ds_5² ≡ 0 Audit',
        ['Benchmark Span', 'Turning Peak', 'Folding Ratio & Speed', 'Convergence & Null Residual'],
        [36, 30, 48, 56],
        MODEL2B_CONVERGENCE_AND_MICROCAUSALITY_TABLE.map((row) => [
          row.benchmarkSpan,
          row.turningPeak,
          row.etaFoldAndSpeed,
          row.elAndNullResidual
        ])
      );
    }

    if (ch.number === 5) {
      ctx.drawTable(
        'Table 5.1 · Six-Class Black-Hole & Portal Taxonomy (Classes A–F)',
        ['Class', 'Metric / NEC Status', 'Portal Viability', 'Stability & Category'],
        [32, 48, 44, 46],
        SIX_BLACK_HOLE_CLASSES.map((b) => [
          `${b.classId} (${b.label})`,
          `${b.metricSignatureAndForm} | ${b.necStatus}`,
          b.portalViability,
          `${b.category}: ${b.stabilityAndConstraints}`
        ])
      );
    }

    if (ch.number === 6 || ch.number === 9) {
      ctx.drawTable(
        `Table ${ch.number}.1 · Negative Results Summary`,
        ['Theorem', 'Category', 'Derived Proof Statement', 'Physical Implication'],
        [36, 26, 56, 52],
        NEGATIVE_RESULTS_SUMMARY.map((n) => [
          n.theorem,
          n.category,
          n.statement,
          n.implication
        ])
      );
      ctx.drawTable(
        'Glossary of Negative Theorems',
        ['Term', 'Formal Definition'],
        [46, 124],
        GLOSSARY_NEGATIVE_THEOREMS.map((g) => [g.term, g.definition])
      );
    }

    if (ch.number === 10) {
      ctx.drawTable(
        'Table 10.1 · What Is Unique to 5D vs. Reproduced in 4D H11',
        ['Observable', 'Status in 4D H11', 'Unique to 5D H12', 'Empirical Status'],
        [34, 44, 52, 40],
        WHAT_IS_UNIQUE_TO_5D.map((u) => [
          u.observable,
          u.reproducedIn4DH11,
          u.uniqueTo5DH12,
          u.empiricalStatus
        ])
      );
      ctx.drawTable(
        'Table 10.2 · Multi-Probe Observational Consistency Audit',
        ['Probe', 'Quantitative Bound', 'H12 Status', 'Derived vs. Assumed'],
        [34, 42, 34, 60],
        FIVE_D_OBSERVATIONAL_BOUNDS.map((b) => [
          b.probe,
          b.bound,
          b.h12Status,
          b.derivationOrAssumption
        ])
      );
      ctx.drawTable(
        'Table 10.3 · Five-Dimensional Signatures, Experimental Tests & Current Observational Constraints',
        ['5D Signature', 'Experiment That Tests It', 'Current Observational Constraint'],
        [52, 58, 60],
        FIVE_D_SIGNATURES_TEST_MATRIX.map((sig) => [
          sig.signature,
          sig.experimentToTestIt,
          sig.currentConstraint
        ])
      );
    }

    if (ch.number === 11) {
      ctx.drawTable(
        'Table 11.1 · Exhaustive Ledger of Non-Derived Claims (Categories A, C & D)',
        ['Claim / Ansatz / Postulate', 'Category', 'Exact Reason Why Not Derived in H12'],
        [44, 34, 92],
        WHAT_IS_NOT_DERIVED_LEDGER.map((w) => [w.claim, w.category, w.whyNotDerived])
      );
    }

    if (ch.number === 12) {
      ctx.drawTable(
        'Table 12.1 · Dedicated IGRT-H12 Empirical & Conceptual Protocols (P7–P13)',
        ['Protocol & Category', 'Relation to H11', 'Numerical Sensitivity', 'Falsification Criterion'],
        [38, 44, 40, 48],
        H12_ALL_PROTOCOLS.map((p) => [
          `${p.id} · ${p.name} [${p.category} | ${p.timeline}]`,
          p.relationToH11,
          p.numericalSensitivity,
          p.falsificationCriterion
        ])
      );
      ctx.drawTable(
        'Table 12.2 · Timeline Table (P7–P13)',
        ['Protocol', 'Current State', 'Required Sensitivity', 'Expected Year'],
        [36, 46, 50, 38],
        P7_TO_P13_TIMELINE_TABLE.map((t) => [
          t.protocol,
          t.currentState,
          t.requiredSensitivity,
          t.expectedYear
        ])
      );
      ctx.drawTable(
        'Table 12.3 · Falsification Thresholds (P7–P13)',
        ['Protocol', 'Null Falsification Bound', 'What It Rules Out'],
        [28, 66, 76],
        P7_TO_P13_FALSIFICATION_TABLE.map((f) => [
          f.protocol,
          f.nullBound,
          f.whatItRulesOut
        ])
      );
      ctx.drawTable(
        'Table 12.4 · Confirmation Thresholds (P7–P13)',
        ['Protocol', 'Positive Signal Signature', 'Required Systematic Control'],
        [28, 72, 70],
        P7_TO_P13_CONFIRMATION_TABLE.map((c) => [
          c.protocol,
          c.signalSignature,
          c.requiredControl
        ])
      );
      ctx.drawTable(
        'Table 12.5 · Empirical Decision Matrix (P7–P13)',
        ['Experimental Outcome', 'Posterior Status', 'Mandatory Action'],
        [48, 52, 70],
        P7_TO_P13_DECISION_MATRIX.map((d) => [
          d.outcome,
          d.posteriorStatus,
          d.mandatoryAction
        ])
      );
      ctx.drawTable(
        'Table 12.6 · H11 (P1–P6) vs. H12 (P7–P13) Protocols Comparison',
        ['Comparison Aspect', 'H11 Protocols (P1–P6)', 'H12 Protocols (P7–P13)'],
        [38, 66, 66],
        H11_VS_H12_PROTOCOLS_COMPARISON.map((cmp) => [
          cmp.aspect,
          cmp.h11Protocols,
          cmp.h12Protocols
        ])
      );
      ctx.drawTable(
        'Table 12.7 · Quantitative Noise Budgets & Systematic Mitigation (P7–P13)',
        ['Protocol', 'Dominant Noise Sources', 'Quantitative Floor', 'Mitigation Architecture'],
        [30, 44, 44, 52],
        P7_TO_P13_NOISE_BUDGET_TABLE.map((nb) => [
          nb.protocol,
          nb.primaryNoiseSources,
          nb.quantitativeBudget,
          nb.mitigationArchitecture
        ])
      );
      ctx.drawTable(
        'Table 12.8 · P13 Systematic Error Budget',
        ['Systematic Source', 'Magnitude / Uncertainty', 'Impact on η_fold', 'Mitigation Strategy'],
        [36, 38, 42, 54],
        P13_SYSTEMATIC_ERROR_BUDGET.map((s) => [
          s.source,
          s.magnitudeOrUncertainty,
          s.impactOnEtaFold,
          s.mitigationStrategy
        ])
      );
      ctx.drawTable(
        'Table 12.9 · P13 Statistical Error Budget',
        ['Measurement Channel', 'Timing Precision', 'Propagated η_fold Error', 'Sample Scaling Note'],
        [38, 40, 44, 48],
        P13_STATISTICAL_ERROR_BUDGET.map((st) => [
          st.channel,
          st.measurementPrecision,
          st.propagatedEtaFoldError,
          st.sampleScalingNote
        ])
      );
      ctx.drawTable(
        'Table 12.10 · Combined Protocol Bounds (P7–P13 Joint Likelihood)',
        ['Protocol Cluster', 'Constrained Parameters', 'Joint Likelihood Role', 'Orthogonal Exclusion Power'],
        [36, 38, 46, 50],
        P7_TO_P13_COMBINED_BOUNDS_TABLE.map((cb) => [
          cb.protocolPairOrCluster,
          cb.constrainedParameters,
          cb.combinedJointLikelihoodRole,
          cb.orthogonalExclusionPower
        ])
      );
      ctx.drawTable(
        'Table 12.11 · Protocol Sensitivity Projections (2026–2035+)',
        ['Protocol', '2026 Baseline', '2027–2032 Window', '2035+ (3G Era)'],
        [32, 44, 46, 48],
        P7_TO_P13_SENSITIVITY_PROJECTION_TABLE.map((pr) => [
          pr.protocol,
          pr.currentBaseline2026,
          pr.nearTerm2027_2032,
          pr.longTerm3G2035Plus
        ])
      );
      ctx.drawTable(
        'Table 12.12 · Summary of P13 Multi-Messenger Bounds',
        ['Dataset / Regime', 'Distance', 'Arrival Precision', 'η_fold Limit', 'Epistemic Status'],
        [34, 26, 36, 38, 36],
        P13_SUMMARY_OF_BOUNDS_TABLE.map((pb) => [
          pb.datasetOrRegime,
          pb.baselineDistance,
          pb.arrivalBoundOrPrecision,
          pb.etaFoldLimit,
          pb.epistemicNote
        ])
      );
      ctx.drawHeading('Protocol Statistical Framework, Joint Likelihood & Bayesian Occam Penalty', 3, false, 1);
      for (const sec of H12_PROTOCOL_ANALYSIS_SECTIONS) {
        ctx.drawMathInlineText(`${sec.title}: ${sec.content}`, marginX + 2, contentW - 2, 10, 5.0, EARTH_UMBER, false, true);
        ctx.addY(1.1);
      }
      ctx.drawHeading('Falsification Checklist: What Would Prove H12 Wrong?', 3, false, 1);
      for (const f of H12_FALSIFICATION_CHECKLIST) ctx.drawMathInlineText(`• [Falsify] ${f}`, marginX + 2, contentW - 2, 10, 5.0);
      ctx.drawHeading('Confirmation Checklist: What Would Confirm H12?', 3, false, 1);
      for (const c of H12_CONFIRMATION_CHECKLIST) ctx.drawMathInlineText(`• [Confirm] ${c}`, marginX + 2, contentW - 2, 10, 5.0);
      ctx.addY(1.5);
      ctx.drawHeading('Summary for Funding Agencies', 3, false, 1);
      ctx.drawMathInlineText(H12_FUNDING_AGENCY_SUMMARY, marginX, contentW, 11, 5.8, EARTH_UMBER, false, true);
    }

    if (ch.number === 13) {
      ctx.drawTable(
        'Table 13.1 · Twelve Research Extrapolations & Open Obstacles',
        ['Topic', 'Category', 'Extension', 'Key Obstacle / Falsifier'],
        [36, 30, 56, 48],
        TWELVE_EXTRAPOLATIONS.map((ex) => [
          `${ex.id}. ${ex.topic}`,
          ex.category,
          ex.extension,
          ex.keyObstacleOrFalsifier
        ])
      );
      ctx.drawTable(
        'Table 13.2 · Seven Open Problems: How H12 Constrains the Solution Space (Category C)',
        ['Open Physics Problem', 'Governing Equations', 'Solution-Space Constraint & Category', 'Plain-Language Takeaway'],
        [38, 40, 52, 40],
        SEVEN_SOLVED_PHYSICS_PROBLEMS.map((sp) => [
          sp.openProblem,
          sp.governingH11H12Equations,
          `${sp.category}: ${sp.coreResolutionAndPrediction}`,
          sp.laymanTakeaway
        ])
      );
      ctx.drawHeading('List of Open Problems (OP-1 to OP-6)', 3, false, 1);
      for (const op of H12_OPEN_PROBLEMS_LIST) {
        ctx.drawMathInlineText(`${op.id}: ${op.problem} — ${op.statusNote}`, marginX + 2, contentW - 2, 10, 5.0);
      }
      ctx.drawHeading('Response to Prior Methodological Audits', 3, false, 1);
      for (const r of H12_PRIOR_AUDIT_RESPONSES) {
        ctx.drawMathInlineText(
          cleanPdfText(`${r.auditScope}: ${r.panelCritique} -> ${r.harmonizedResolution}`),
          marginX + 2,
          contentW - 2,
          10,
          5.0
        );
      }
    }

    for (const { ill, raster } of [...theoryAssets, ...suppAssets].filter((x) => x.ill.anchorChapter === ch.number)) {
      if (!raster) continue;
      ctx.drawFullPageIllustration({
        tag: `${ill.illustrationNumber.toUpperCase()} · THEORY & DIMENSION PLATE (CHAPTER ${ch.number})`,
        category: ill.category,
        title: ill.title,
        caption: ill.description,
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
  }

  ctx.drawHeading('References', 1, true, 0, true);
  for (const ref of H12_REFERENCES) {
    ctx.drawMathInlineText(`[${ref.id}] ${ref.citation}`, marginX, contentW, 10.5, 5.4, EARTH_UMBER, false, true);
    ctx.addY(2.2);
  }

  // Strictly Alphabetical Consolidated Appendices (A–L)
  ctx.drawHeading('Consolidated Appendices (A–L)', 1, true, 0, true);
  ctx.drawMathInlineText(
    `Complete Mathematical Proofs, Epistemic Claim–Evidence Ledger (App. I), Laboratory Devices A–K (App. J), Seven Open Problems Constraints (App. K) & Speculative Portal Concepts (App. L) for "${H12_META.title}" — ${H12_META.authors}.`,
    marginX,
    contentW,
    11.4,
    5.9,
    EARTH_STONE,
    false,
    true,
    'serif',
    'italic'
  );
  ctx.addY(5.0);

  for (const app of H12_APPENDICES) {
    ctx.drawHeading(`Appendix ${app.letter}: ${app.title}`, 2, true, 1);
    ctx.drawCategoryTag(app.category);
    ctx.drawMathInlineText(app.summary, marginX, contentW, 11.2, 5.8, EARTH_STONE, false, true, 'serif', 'italic');
    ctx.addY(3.5);
    for (const eq of app.equations) ctx.drawEquationBox(eq);
    for (const p of app.bodyParagraphs) {
      ctx.drawMathInlineText(p, marginX, contentW, 11.6, 6.25, EARTH_UMBER, false, true);
      ctx.addY(3.4);
    }

    if (app.letter === 'L') {
      ctx.drawTable(
        'Table L.1 · Eleven Speculative Portal Concepts',
        ['Candidate Concept', 'Feasibility Tier', 'Physical Action', 'Category', 'Quantitative Obstacle / Limit'],
        [30, 26, 44, 24, 46],
        ELEVEN_PORTAL_MECHANISMS.map((m) => [
          m.mechanism,
          m.tier,
          m.physicalAction,
          m.category,
          m.quantitativeObstacleOrLimit
        ])
      );
    }

    if (app.letter === 'J') {
      ctx.drawTable(
        'Table J.1 (Part I) · Devices A–K Master Core Physical Specifications',
        ['Device & Category', 'Principle & Governing Eqs', 'Predicted Signal & Floor', 'Actually Tests vs. Explicit Non-Claim'],
        [34, 48, 42, 46],
        H12_PROPOSED_DEVICES.map((d) => [
          `${d.deviceId}: ${d.name} [${d.category}]`,
          `${d.physicalPrinciple} (${d.governingEquations})`,
          `${d.predictedSignal} | Floor: ${d.noiseFloor}`,
          `Tests: ${d.whatItActuallyTests} | Does NOT do: ${d.whatItDoesNotDo}`
        ])
      );
      ctx.drawTable(
        'Table J.1 (Part II) · Device Readiness Level (1–9), Cost Estimate, Timeline, Thresholds & Systematics',
        ['Device', 'Device Readiness Level', 'Cost Estimate', 'Timeline', 'Falsification Threshold', 'Confirmation Threshold', 'Systematics'],
        [18, 22, 22, 20, 29, 29, 30],
        H12_PROPOSED_DEVICES.map((d) => [
          d.deviceId,
          d.deviceReadinessLevel,
          d.costEstimate,
          d.timeline,
          d.falsificationThreshold,
          d.confirmationThreshold,
          d.systematics
        ])
      );

      for (const dos of APPENDIX_J_DEVICE_DOSSIERS) {
        doc.addPage();
        ctx.setY(topY);
        ctx.drawHeading(dos.title, 2, true, 1);
        ctx.drawCategoryTag(dos.category);
        ctx.drawMathInlineText(dos.tagline, marginX, contentW, 11.2, 5.85, EARTH_STONE, false, true, 'serif', 'italic');
        ctx.addY(4.0);

        ctx.drawHeading('How It Works (Plain-Language Guide)', 3, false, 1);
        for (const lp of dos.laymanParagraphs) {
          ctx.drawMathInlineText(lp, marginX, contentW, 12, 6.55, EARTH_UMBER, false, true);
          ctx.addY(3.4);
        }

        const matchedAsset = deviceAssets.find((x) => x.fig.id === dos.figureId);
        if (matchedAsset?.cutaway) {
          ctx.drawFullPageIllustration({
            tag: `HARDWARE CUTAWAY PLATE · APPENDIX J (${matchedAsset.fig.deviceId.toUpperCase()})`,
            category: matchedAsset.fig.category,
            title: matchedAsset.fig.illustrationTitle || matchedAsset.fig.title,
            caption: `${matchedAsset.fig.deviceId} Hardware Engineering Cutaway: ${matchedAsset.fig.caption}`,
            asset: matchedAsset.cutaway,
            format: 'JPEG',
            accentRgb: EARTH_TERRACOTTA
          });
        }
        if (matchedAsset?.raster) {
          ctx.drawFullPageIllustration({
            tag: `${matchedAsset.fig.figureNumber.toUpperCase()} · APPENDIX J (${matchedAsset.fig.deviceId.toUpperCase()})`,
            category: matchedAsset.fig.category,
            title: matchedAsset.fig.title,
            caption: matchedAsset.fig.caption,
            asset: matchedAsset.raster,
            format: 'PNG',
            accentRgb: EARTH_SAGE
          });
        }
        if (matchedAsset?.cutaway || matchedAsset?.raster) {
          doc.addPage();
          ctx.setY(topY);
        }

        ctx.drawHeading('Laboratory Architecture, Governing Physics & Metrology', 3, false, 1);
        for (const ep of dos.engineeringParagraphs) {
          ctx.drawMathInlineText(ep, marginX, contentW, 12, 6.55, EARTH_UMBER, false, true);
          ctx.addY(3.4);
        }

        ctx.drawCalloutBox(`${dos.deviceId} SIGNIFICANCE & EPISTEMIC BOUNDARY`, dos.impactParagraph, 10.6, 5.5);

        const spec = H12_PROPOSED_DEVICES.find((d) => d.deviceId === dos.deviceId);
        if (spec) {
          ctx.drawTable(
            `${dos.deviceId} Complete Engineering & Programmatic Specification Sheet`,
            ['Specification Field', 'Quantitative Value & Boundary'],
            [46, 124],
            [
              ['1. Physical Principle', spec.physicalPrinciple],
              ['2. Governing Equations', spec.governingEquations],
              ['3. Laboratory Architecture', spec.architecture],
              ['4. Operating Regime', spec.operatingRegime],
              ['5. Predicted Signal', spec.predictedSignal],
              ['6. Noise Floor & Limits', spec.noiseFloor],
              ['7. Engineering Feasibility', `${spec.engineeringFeasibility} (${spec.category})`],
              ['8. What It Actually Tests', spec.whatItActuallyTests],
              ['9. Explicitly Does NOT Do', spec.whatItDoesNotDo],
              ['10. Falsification / Failure', spec.failureCriteria],
              ['11. Device Readiness Level (1–9)', spec.deviceReadinessLevel],
              ['12. Cost Estimate', spec.costEstimate],
              ['13. Timeline', spec.timeline],
              ['14. Falsification Threshold', spec.falsificationThreshold],
              ['15. Confirmation Threshold', spec.confirmationThreshold],
              ['16. Systematics', spec.systematics]
            ]
          );
        }
      }

      doc.addPage();
      ctx.setY(topY);
      ctx.drawHeading('Risk Assessment (Technical Risks Across Devices A–K)', 2, true, 1);
      ctx.drawTable(
        'Technical Risk Assessment Register (Devices A–K)',
        ['Device', 'Primary Technical Risk', 'Severity', 'Mitigation'],
        [24, 60, 22, 64],
        APPENDIX_J_RISK_ASSESSMENT.map((r) => [r.deviceId, r.technicalRisk, r.severity, r.mitigation])
      );
      ctx.drawHeading('Resource Requirements (Personnel, Equipment & Funding Across Devices A–K)', 2, true, 1);
      ctx.drawTable(
        'Resource Requirements Matrix (Devices A–K)',
        ['Device', 'Personnel', 'Major Equipment', 'Estimated Funding'],
        [24, 42, 64, 40],
        APPENDIX_J_RESOURCE_REQUIREMENTS.map((req) => [req.deviceId, req.personnel, req.equipment, req.funding])
      );
      ctx.drawHeading(APPENDIX_J_SYNERGY.title, 2, true, 1);
      ctx.drawMathInlineText(APPENDIX_J_SYNERGY.overview, marginX, contentW, 11.5, 6.0, EARTH_UMBER, false, true);
      ctx.addY(2.5);
      ctx.drawTable(
        'Cross-Device Synergy Clusters (Devices A–K)',
        ['Synergy Cluster', 'Devices Combined', 'Coupling Mechanism', 'Joint 5D Constraint'],
        [36, 36, 54, 44],
        APPENDIX_J_SYNERGY.clusters.map((c) => [c.cluster, c.devices, c.mechanism, c.jointConstraint])
      );
      ctx.drawHeading('J.13 Cross-Device Synthesis & Coordinated Discovery Roadmap (Devices A–K)', 2, true, 1);
      ctx.drawTable(
        'Table J.2 · Cross-Device Sensitivity, Readiness & Discovery Horizon Matrix (Devices A–K)',
        ['Device', 'Target Physics', 'Primary Observable', 'TRL & Window', 'Breakthrough vs. Non-Claim'],
        [28, 34, 34, 24, 50],
        APPENDIX_J_SYNTHESIS_TABLE.map((row) => [
          row.device,
          row.targetPhysics,
          row.primaryObservable,
          row.readinessAndWindow,
          `${row.breakthroughIfDetected} | Non-claim: ${row.strictNonClaim}`
        ])
      );
      ctx.drawMathInlineText(
        'Coordinated Portfolio Verdict (2026–2035+): Taken together, Devices A–K demonstrate how extra-dimensional, modular-time, vacuum-thermodynamic, and quantum-causal physics can be tested cleanly on optical, MEMS, ion-trap, photonic, and quantum-materials benches without science-fiction wormholes or perpetual-motion fallacies. Devices A, B, C, D, F, G, H, I, J, and K operate inside established cryogenic, interferometric, CMOS-foundry, and solid-state infrastructures while explicitly honoring the Second Law of Thermodynamics, microcausality, and Category A–D epistemic accountability.',
        marginX,
        contentW,
        12,
        6.35,
        EARTH_UMBER,
        false,
        true
      );
      ctx.addY(3);
    }

    if (app.letter === 'K') {
      ctx.drawTable(
        'Table K.1 · Seven Open Problems and How H12 Constrains Them (Category C)',
        ['Open Problem', 'Governing H11/H12 Equations', 'Solution-Space Constraint & Category', 'Plain-Language Meaning'],
        [38, 40, 52, 40],
        SEVEN_SOLVED_PHYSICS_PROBLEMS.map((sp) => [
          sp.openProblem,
          sp.governingH11H12Equations,
          `${sp.category}: ${sp.coreResolutionAndPrediction}`,
          sp.laymanTakeaway
        ])
      );
    }
    // Appendix I renders the Complete Epistemic Claim–Evidence Ledger prose cleanly (no internal scorecard tables in PDF).
  }

  // Populate Reserved TOC Pages (Playfair Display Regular 26.25pt = 35px heading)
  let currentTocPage = tocPage1;
  doc.setPage(currentTocPage);
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
    const step = entry.indent ? 7.65 : 9.2;
    if (ty + step > bottomLimit) {
      if (currentTocPage === tocPage1) currentTocPage = tocPage2;
      else if (currentTocPage === tocPage2) currentTocPage = tocPage3;
      else if (currentTocPage === tocPage3) currentTocPage = tocPage4;
      else break;

      doc.setPage(currentTocPage);
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
    const indentPx = (entry.indent ?? 0) * 5.0;
    const fSize = entry.indent ? 9.0 : 10.1;
    ctx.setFontSafe('serif', 'normal', fSize);
    doc.setTextColor(...(entry.indent ? EARTH_STONE : EARTH_UMBER));
    const maxLabelW = contentW - indentPx - 16;
    const clippedSpans = ctx.clipStyledSpans(entry.label, maxLabelW, false, fSize, 'serif');
    ctx.drawStyledSpans(clippedSpans, marginX + indentPx, ty, false, 'serif', 'normal');
    ctx.setFontSafe('mono', 'normal', 9.0);
    doc.setTextColor(...EARTH_TERRACOTTA);
    doc.text(String(entry.page), marginX + contentW, ty, { align: 'right' });
    ty += step;
  }

  // Stamp Running Headers & Page Numbers (Page 1 Cover remains clean without running header/footer)
  const totalPages = doc.getNumberOfPages();
  const runningHeader = ctx.clipMixedLine(
    ctx.safeStr('IGRT-2026-H12 · Folding Time Across Hidden Dimensions · Tassan, Lauret, Bulaqueña, Avila Gomez, Chatterjee & Goldberger'),
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

  doc.save('IGRT_H12_Monograph.pdf');
}
