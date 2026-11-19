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
 *   Computed TOC, 5 Front-Matter Lists, Foundational 5D Equations & Scope, Chapters 1–13,
 *   Extended Appendices L & M, References, and Technical Appendices A–K;
 *   excludes Adversarial Stress-Test Scorecard Appendix N).
 */

import { jsPDF } from 'jspdf';
import {
  H12_META,
  H12_MASTER_EQUATIONS,
  H12_PORTAL_DEFINITION_BOX,
  H12_METRIC_SIGNATURE_BOX,
  H12_FOUNDATIONAL_EQUATIONS_NOTE,
  H12_ABSTRACT_PARAGRAPHS,
  H12_SUMMARY_FOR_NON_SPECIALISTS,
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
  SIX_PROPOSED_DEVICES,
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
  type H12Equation
} from '../types/igrtH12Apparatus';
import {
  H12_CHAPTERS,
  H12_MAIN_APPENDICES_LMN,
  H12_FRONTMATTER_TABLES_LIST,
  H12_FRONTMATTER_EQUATIONS_LIST
} from '../types/igrtH12Data';
import { H12_ARCHIVAL_PLATES, H12_FIGURES } from '../components/IgrtH12Figures';
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
  '\u2124', // ℤ
  '\u2131', // ℱ
  '\u2192', // →
  '\u2194', // ↔
  '\u21A6', // ↦
  '\u21D2', // ⇒
  '\u2200', // ∀
  '\u2202', // ∂
  '\u2203', // ∃
  '\u2207', // ∇
  '\u2208', // ∈
  '\u2211', // ∑
  '\u2212', // −
  '\u221A', // √
  '\u221D', // ∝
  '\u221E', // ∞
  '\u222A', // ∪
  '\u222B', // ∫
  '\u222E', // ∮
  '\u2245', // ≅
  '\u2248', // ≈
  '\u2260', // ≠
  '\u2261', // ≡
  '\u2264', // ≤
  '\u2265', // ≥
  '\u226A', // ≪
  '\u226B', // ≫
  '\u2282', // ⊂
  '\u2297', // ⊗
  '\u2299', // ⊙
  '\u22A5', // ⊥
  '\u25A1', // □
  '\u27E8', // ⟨
  '\u27E9', // ⟩
  '\u2016', // ‖
  '\u2032'  // ′
]);

function flattenSegmentsToPlainText(segs: MathSegment[]): string {
  return segs
    .map((seg) => {
      if (seg.type === 'text') return seg.text;
      return flattenSegmentsToPlainText(seg.children);
    })
    .join('');
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
      const vbH = vb ? Number(vb[2]) : 310;
      const pxW = 1600;
      const pxH = Math.max(120, Math.round((pxW * vbH) / vbW));

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

  const wrapMixedLines = (
    cleanText: string,
    maxW: number,
    boldBase: boolean,
    fontSize: number,
    baseFamily: PdfFontFamily = 'serif',
    baseStyle?: PdfFontStyle
  ): string[] => {
    const safeMaxW = Math.max(12, maxW - 0.5);
    const spaceW = measureTokenWidth(' ', boldBase, fontSize, baseFamily, baseStyle);
    const outLines: string[] = [];

    const paragraphs = cleanText.split(/\r?\n/);
    for (const para of paragraphs) {
      const rawTokens = para.trim().split(/\s+/).filter(Boolean);
      if (rawTokens.length === 0) {
        outLines.push('');
        continue;
      }
      const tokens: string[] = [];
      for (const tok of rawTokens) {
        if (measureTokenWidth(tok, boldBase, fontSize, baseFamily, baseStyle) <= safeMaxW) {
          tokens.push(tok);
        } else {
          let cur = '';
          for (const ch of tok) {
            const candidate = cur + ch;
            if (cur && measureTokenWidth(candidate, boldBase, fontSize, baseFamily, baseStyle) > safeMaxW) {
              tokens.push(cur);
              cur = ch;
            } else {
              cur = candidate;
            }
          }
          if (cur) tokens.push(cur);
        }
      }
      let currentLine = tokens[0];
      let currentW = measureTokenWidth(currentLine, boldBase, fontSize, baseFamily, baseStyle);
      for (let i = 1; i < tokens.length; i++) {
        const tok = tokens[i];
        const tokW = measureTokenWidth(tok, boldBase, fontSize, baseFamily, baseStyle);
        if (currentW + spaceW + tokW <= safeMaxW) {
          currentLine += ' ' + tok;
          currentW += spaceW + tokW;
        } else {
          outLines.push(currentLine);
          currentLine = tok;
          currentW = tokW;
        }
      }
      if (currentLine) outLines.push(currentLine);
    }
    return outLines.length > 0 ? outLines : [''];
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
    fontSize = 12,
    lineGap = 6.35,
    color: EarthRgb = EARTH_UMBER,
    boldBase = false,
    justify = false,
    baseFamily: PdfFontFamily = 'serif',
    baseStyle?: PdfFontStyle
  ) => {
    const clean = safeStr(flattenSegmentsToPlainText(parseMathSegments(rawText)));
    doc.setTextColor(...color);
    const lines = wrapMixedLines(clean, maxW, boldBase, fontSize, baseFamily, baseStyle);
    for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
      const line = lines[lineIdx];
      ensureSpace(lineGap + 1);
      const isLastLine = lineIdx === lines.length - 1;
      const trimmed = line.trim();
      const words = justify && !isLastLine && trimmed.length > 0 ? trimmed.split(/\s+/) : null;
      if (words && words.length > 1) {
        let wordsWidth = 0;
        const wWidths = words.map((wd) => {
          const ww = measureTokenWidth(wd, boldBase, fontSize, baseFamily, baseStyle);
          wordsWidth += ww;
          return ww;
        });
        const rawGap = (maxW - wordsWidth) / (words.length - 1);
        const spaceW = measureTokenWidth(' ', boldBase, fontSize, baseFamily, baseStyle);
        if (rawGap >= spaceW * 0.55 && rawGap <= spaceW * 4.0) {
          let cx = xStart;
          for (let wi = 0; wi < words.length; wi++) {
            drawMixedRun(words[wi], cx, y, boldBase, fontSize, baseFamily, baseStyle);
            cx += wWidths[wi] + rawGap;
          }
          y += lineGap;
          continue;
        }
      }
      drawMixedRun(line, xStart, y, boldBase, fontSize, baseFamily, baseStyle);
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
    const lineGap = level === 1 ? 10.6 : level === 2 ? 5.8 : 4.9;
    const boldHeading = level !== 1;
    const headingFamily: PdfFontFamily = level === 1 ? 'playfair' : 'serif';
    const gapBefore = level === 1 ? (y <= topY + 2 ? 3 : 8) : level === 2 ? 5 : 3.5;
    const gapAfter = level === 1 ? 12 : level === 2 ? 3.5 : 2.5;
    ensureSpace(level === 1 ? 42 : 18);
    y += gapBefore;
    if (recordToc) {
      tocEntries.push({ label: safeStr(text), page: doc.getNumberOfPages(), indent: tocIndent });
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
      doc.line(marginX, y - 2, marginX + contentW, y - 2);
    }
    y += gapAfter;
  };

  const drawCategoryTag = (cat: string) => {
    ensureSpace(6);
    setFontSafe('mono', 'normal', 8);
    if (cat.includes('ESTABLISHED') || cat.includes('DERIVED')) doc.setTextColor(...EARTH_SAGE);
    else doc.setTextColor(...EARTH_TERRACOTTA);
    doc.text(clipMixedLine(`[${safeStr(cat)}]`, contentW, false, 8, 'mono'), marginX, y);
    y += 4.5;
  };

  const drawEquationBox = (eq: H12Equation) => {
    const plain = safeStr(flattenSegmentsToPlainText(parseHtmlMathSegments(eq.unicodeHtml)));
    const cap = safeStr(`${eq.label} [${eq.category}] — ${eq.caption}`);
    const eqLines = wrapMixedLines(plain, contentW - 14, false, 9.5, 'sans');
    const capLines = wrapMixedLines(cap, contentW - 12, false, 8.6, 'serif', 'italic');
    const boxH = eqLines.length * 4.8 + capLines.length * 4.1 + 10;

    ensureSpace(boxH + 5);
    doc.setFillColor(...EARTH_PARCHMENT);
    doc.setDrawColor(...EARTH_STONE);
    doc.setLineWidth(0.3);
    doc.roundedRect(marginX, y, contentW, boxH, 2, 2, 'FD');

    let cy = y + 6;
    doc.setTextColor(...EARTH_UMBER);
    for (const l of eqLines) {
      const lw = measureTokenWidth(l, false, 9.5, 'sans', 'normal');
      const cx = marginX + Math.max(4, (contentW - lw) / 2);
      drawMixedRun(l, cx, cy, false, 9.5, 'sans', 'normal');
      cy += 4.8;
    }
    cy += 1.2;
    doc.setTextColor(...EARTH_STONE);
    for (const cl of capLines) {
      const clw = measureTokenWidth(cl, false, 8.6, 'serif', 'italic');
      const cx = marginX + Math.max(4, (contentW - clw) / 2);
      drawMixedRun(cl, cx, cy, false, 8.6, 'serif', 'italic');
      cy += 4.1;
    }
    y += boxH + 5;
  };

  const drawCalloutBox = (label: string | null, rawBody: string, fontSize = 10.6, lineGap = 5.1) => {
    const cleanBody = safeStr(flattenSegmentsToPlainText(parseMathSegments(rawBody)));
    const bodyLines = wrapMixedLines(cleanBody, contentW - 10, false, fontSize, 'serif');
    const hasLabel = Boolean(label && label.trim().length > 0);
    const boxH = (hasLabel ? 5.2 : 0) + bodyLines.length * lineGap + 8.5;
    ensureSpace(boxH + 4);
    doc.setFillColor(...EARTH_PARCHMENT);
    doc.setDrawColor(...EARTH_STONE);
    doc.setLineWidth(0.35);
    doc.roundedRect(marginX, y, contentW, boxH, 2, 2, 'FD');

    let cy = y + 5.5;
    if (hasLabel && label) {
      setFontSafe('mono', 'normal', 8.2);
      doc.setTextColor(...EARTH_TERRACOTTA);
      doc.text(clipMixedLine(safeStr(label), contentW - 10, false, 8.2, 'mono'), marginX + 5, cy);
      cy += 5.2;
    }
    doc.setTextColor(...EARTH_UMBER);
    for (const line of bodyLines) {
      drawMixedRun(line, marginX + 5, cy, false, fontSize, 'serif', 'normal');
      cy += lineGap;
    }
    y += boxH + 4.5;
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
    clipMixedLine,
    drawMathInlineText,
    drawHeading,
    drawCategoryTag,
    drawEquationBox,
    drawCalloutBox
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

  const [svgAssets, plateAssets] = await Promise.all([
    Promise.all(H12_FIGURES.map(async (f) => ({ fig: f, raster: await rasterizeSvgDataUrl(f.svgMarkup) }))),
    Promise.all(H12_ARCHIVAL_PLATES.map(async (p) => ({ plate: p, raster: await fetchImageDataUrl(p.imagePath) })))
  ]);

  const cleanPdfText = (s: string): string =>
    s
      .replace(
        'Appendices L–N house portal mechanisms, laboratory devices A–F, and the adversarial stress-test scorecard',
        'Appendices L–M house portal mechanisms and laboratory devices A–F'
      )
      .replace('Extended Appendices L–N and Technical Appendices A–K.', 'Extended Appendices L–M and Technical Appendices A–K.')
      .replace('followed by Appendices L, M, and N.', 'followed by Appendices L–M and Technical Appendices A–K.')
      .replace('Scorecard to Appendix N, and ', 'and ');

  // -------------------------------------------------------------------------
  // Dedicated Cover Page (Page 1 Only — Muted 4-Color Earth Scheme)
  // -------------------------------------------------------------------------
  ctx.setY(38);
  doc.setDrawColor(...EARTH_STONE);
  doc.setLineWidth(0.35);
  doc.line(marginX, ctx.getY(), marginX + contentW, ctx.getY());
  ctx.addY(6);

  ctx.drawMathInlineText(
    `${H12_META.monographId} · Complete Research Monograph (Chapters 1–13 & Technical Appendices A–M) · ${H12_META.date}`,
    marginX,
    contentW,
    8.5,
    4.2,
    EARTH_TERRACOTTA,
    false,
    false,
    'mono'
  );
  ctx.addY(12);

  // Main Cover Title: Playfair Display Regular 26.25pt (= 35px), never bold
  ctx.drawMathInlineText(H12_META.title, marginX, contentW, 26.25, 11.2, EARTH_UMBER, false, false, 'playfair', 'normal');
  ctx.addY(4);

  doc.setDrawColor(...EARTH_TERRACOTTA);
  doc.setLineWidth(0.8);
  doc.line(marginX, ctx.getY(), marginX + 40, ctx.getY());
  ctx.addY(8);

  ctx.drawMathInlineText(H12_META.subtitle, marginX, contentW, 11.8, 5.8, EARTH_STONE, false, false, 'serif', 'italic');
  ctx.addY(14);

  ctx.drawMathInlineText('AUTHORS', marginX, contentW, 8.2, 4.0, EARTH_TERRACOTTA, false, false, 'mono');
  ctx.addY(2);
  for (const author of H12_META.authorRoster) {
    ctx.drawMathInlineText(author.name, marginX, contentW, 12.2, 5.4, EARTH_UMBER, true, false);
    ctx.drawMathInlineText(author.affiliation, marginX + 2, contentW - 2, 10.0, 4.6, EARTH_STONE, false, false);
    const orcidText = `ORCID: ${author.orcidUrl}`;
    const orcidY = ctx.getY();
    ctx.drawMathInlineText(orcidText, marginX + 2, contentW - 2, 8.2, 4.2, EARTH_SAGE, false, false, 'mono');
    const linkW = Math.min(contentW - 2, ctx.measureTokenWidth(orcidText, false, 8.2, 'mono'));
    if (typeof (doc as unknown as { link?: unknown }).link === 'function') {
      doc.link(marginX + 2, orcidY - 3.2, linkW, 4.2, { url: author.orcidUrl });
    }
    ctx.addY(3.2);
  }

  // Anchor archival metadata colophon at foot of Cover Page
  if (ctx.getY() < 224) ctx.setY(224);
  doc.setFillColor(...EARTH_PARCHMENT);
  doc.setDrawColor(...EARTH_STONE);
  doc.setLineWidth(0.3);
  doc.roundedRect(marginX, ctx.getY(), contentW, 34, 2, 2, 'FD');
  ctx.addY(7);
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

  // Page 2: Portal Definition Box + Unified Layman & Scholar Abstract (Strict Dedicated Page Start)
  doc.addPage();
  ctx.setY(topY);
  ctx.drawCalloutBox('PORTAL DEFINITION BOX', H12_PORTAL_DEFINITION_BOX, 10.6, 5.1);
  ctx.drawHeading('Abstract', 1, true, 0, false);
  for (const p of H12_ABSTRACT_PARAGRAPHS) {
    ctx.drawMathInlineText(p, marginX, contentW, 12, 6.35, EARTH_UMBER, false, true);
    ctx.addY(2.0);
  }
  ctx.drawCalloutBox('SUMMARY FOR NON-SPECIALISTS', H12_SUMMARY_FOR_NON_SPECIALISTS, 10.6, 5.1);
  ctx.drawMathInlineText(`Keywords: ${H12_META.keywords.join(' · ')}`, marginX, contentW, 9.6, 4.7, EARTH_STONE, false, true);

  // Reserve 2 pages right after Abstract for Computed Table of Contents
  doc.addPage();
  const tocPage1 = doc.getNumberOfPages();
  doc.addPage();
  const tocPage2 = doc.getNumberOfPages();
  doc.addPage();
  ctx.setY(topY);

  // Five Front-Matter Lists
  ctx.drawHeading('Lists of Figures, Tables, Equations, Theorems & Definitions', 1, true, 0, false);
  ctx.drawHeading('List of Figures & Archival Plates', 2, false, 1);
  for (const pl of H12_ARCHIVAL_PLATES) {
    ctx.drawMathInlineText(`${pl.figureNumber} (Ch.${pl.anchorChapter}): ${pl.title} [${pl.category}]`, marginX + 2, contentW - 2, 10, 4.9);
  }
  for (const fg of H12_FIGURES) {
    ctx.drawMathInlineText(`${fg.figureNumber} (Ch.${fg.anchorChapter}): ${fg.title} [${fg.category}]`, marginX + 2, contentW - 2, 10, 4.9);
  }
  ctx.drawHeading('List of Tables', 2, false, 1);
  for (const tb of H12_FRONTMATTER_TABLES_LIST.filter((t) => t.location !== 'Appendix N')) {
    ctx.drawMathInlineText(`${tb.id} (${tb.location}): ${tb.title}`, marginX + 2, contentW - 2, 10, 4.9);
  }
  ctx.drawHeading('List of Principal Equations', 2, false, 1);
  for (const eq of H12_FRONTMATTER_EQUATIONS_LIST) {
    ctx.drawMathInlineText(`${eq.label} (${eq.location}, ${eq.category}): ${eq.title}`, marginX + 2, contentW - 2, 10, 4.9);
  }
  ctx.drawHeading('List of Theorems', 2, false, 1);
  for (const th of H12_THEOREMS_LIST) {
    ctx.drawMathInlineText(`${th.id} (${th.location}, ${th.category}): ${th.title}`, marginX + 2, contentW - 2, 10, 4.9);
  }
  ctx.drawHeading('List of Formal Definitions', 2, false, 1);
  for (const df of H12_DEFINITIONS_LIST) {
    ctx.drawMathInlineText(`${df.id} (${df.term}): ${df.formalDefinition}`, marginX + 2, contentW - 2, 10, 4.9);
  }

  // Foundational Five-Dimensional Equations & Scope
  ctx.drawHeading('Foundational Five-Dimensional Equations (Category C) & Scope', 1, true, 0, true);
  ctx.drawMathInlineText(H12_FOUNDATIONAL_EQUATIONS_NOTE, marginX, contentW, 11.2, 5.8, EARTH_TERRACOTTA, true, true);
  ctx.addY(2.0);
  for (const eq of H12_MASTER_EQUATIONS) {
    ctx.drawEquationBox(eq);
  }
  ctx.drawHeading(H12_SCOPE_AND_NON_CLAIMS.title, 2, false, 1);
  for (const pt of H12_SCOPE_AND_NON_CLAIMS.points) {
    ctx.drawMathInlineText(`• ${pt}`, marginX + 2, contentW - 2, 11, 5.8, EARTH_UMBER, false, true);
    ctx.addY(1.6);
  }

  // Chapters 1 to 13
  for (const ch of H12_CHAPTERS) {
    ctx.drawHeading(`Chapter ${ch.number}. ${ch.title}`, 1, true, 0, true);
    ctx.drawMathInlineText(ch.leadSummary, marginX, contentW, 11.5, 6.05, EARTH_STONE, false, true, 'serif', 'italic');
    ctx.addY(4);

    if (ch.number === 1) {
      ctx.drawCalloutBox('METRIC SIGNATURE BOX', H12_METRIC_SIGNATURE_BOX, 10.4, 5.0);
      ctx.drawHeading('Table 1.3 · Category B/C Boundary Rubric Box', 3, false, 1);
      for (const g of EPISTEMIC_BC_GREY_AREA_RUBRIC) {
        ctx.drawMathInlineText(`${g.boundaryCase} [${g.assignedCategory}]: Derived: ${g.derivedAspect} Conjectural: ${g.conjecturalAspect} — ${g.ruleApplied}`, marginX + 2, contentW - 2, 10, 5.0);
        ctx.addY(1.1);
      }
      ctx.addY(2);
    }

    if (ch.number === 2) {
      ctx.drawHeading('Timeline of Five-Dimensional Physics (1921–2026)', 3, false, 1);
      for (const tm of TIMELINE_5D_PHYSICS) {
        ctx.drawMathInlineText(`${tm.year} · ${tm.milestone}: ${tm.contributionToH12}`, marginX + 2, contentW - 2, 10, 5.0);
        ctx.addY(1.0);
      }
    }

    for (const sub of ch.subsections) {
      ctx.drawHeading(`${sub.number} ${sub.title}`, 2, true, 1);
      ctx.drawCategoryTag(sub.category);
      for (const p of sub.paragraphs) {
        ctx.drawMathInlineText(cleanPdfText(p), marginX, contentW, 12, 6.35, EARTH_UMBER, false, true);
        ctx.addY(2.6);
      }
      if (sub.equation) ctx.drawEquationBox(sub.equation);
      if (sub.bulletPoints && sub.bulletPoints.length > 0) {
        for (const bp of sub.bulletPoints) {
          ctx.drawMathInlineText(`• ${bp.label}: ${bp.text}`, marginX + 2, contentW - 2, 11.2, 5.8, EARTH_UMBER, false, true);
          ctx.addY(1.2);
        }
        ctx.addY(1.2);
      }
      if (sub.theoremBox) {
        ctx.ensureSpace(26);
        ctx.drawCategoryTag(sub.theoremBox.category);
        ctx.drawMathInlineText(`${sub.theoremBox.number}: ${sub.theoremBox.title}`, marginX + 2, contentW - 4, 11.5, 5.8, EARTH_SAGE, true, false);
        for (const hyp of sub.theoremBox.hypotheses) {
          ctx.drawMathInlineText(`• ${hyp}`, marginX + 4, contentW - 6, 10.8, 5.5, EARTH_SAGE, false, true);
        }
        ctx.drawMathInlineText(sub.theoremBox.statement, marginX + 2, contentW - 4, 11.5, 6.05, EARTH_UMBER, false, true);
        ctx.addY(3);
      }
      if (sub.workedExample) {
        ctx.ensureSpace(28);
        ctx.drawMathInlineText(sub.workedExample.title, marginX + 2, contentW - 4, 11.5, 5.8, EARTH_TERRACOTTA, true, false);
        ctx.drawMathInlineText(sub.workedExample.setup, marginX + 2, contentW - 4, 11, 5.8, EARTH_STONE, false, true);
        sub.workedExample.steps.forEach((st, idx) => {
          ctx.drawMathInlineText(`${idx + 1}. ${st}`, marginX + 4, contentW - 6, 11, 5.8, EARTH_UMBER, false, true);
        });
        ctx.drawEquationBox(sub.workedExample.resultEquation);
        ctx.drawMathInlineText(`Takeaway: ${sub.workedExample.takeaway}`, marginX + 2, contentW - 4, 11, 5.8, EARTH_SAGE, true, true);
        ctx.addY(3);
      }
    }

    if (ch.number === 1) {
      ctx.drawHeading('Table 1.1 · Audit of Twelve Core H11 Components', 3, false, 1);
      for (const r of H11_TWELVE_COMPONENTS_AUDIT) {
        ctx.drawMathInlineText(`${r.component} [${r.h12Status} | ${r.category}]: ${r.h12Modification}`, marginX + 2, contentW - 2, 10, 5.0);
        ctx.addY(1.1);
      }
      ctx.drawHeading('Table 1.2 · Comparison: 4D IGRT-H11 vs. 5D IGRT-H12', 3, false, 1);
      for (const c of COMPARISON_4D_VS_5D_IGRT) {
        ctx.drawMathInlineText(`${c.dimension}: 4D=${c.h11FourD} | 5D=${c.h12FiveD} (${c.epistemicDelta}; Testable Now=${c.testableNow})`, marginX + 2, contentW - 2, 10, 5.0);
        ctx.addY(1.0);
      }
      ctx.drawHeading('Glossary of Five-Dimensional Terms', 3, false, 1);
      for (const g of GLOSSARY_5D_TERMS) {
        ctx.drawMathInlineText(`${g.term}: ${g.definition}`, marginX + 2, contentW - 2, 10, 5.0);
        ctx.addY(1.0);
      }
      ctx.drawMathInlineText(SUMMARY_FOR_PHYSICISTS, marginX, contentW, 11.5, 6.05, EARTH_SAGE, false, true);
      ctx.addY(2);
    }

    if (ch.number === 2) {
      ctx.drawHeading('Table 2.1 · Structured Catalog of All 665 Verified IGRT-H11 Assertions', 3, false, 1);
      for (const row of H11_665_ASSERTIONS_CATALOG) {
        ctx.drawMathInlineText(`${row.moduleGroup} (${row.assertionCount} assertions): ${row.verifiedPhysicalScope}`, marginX + 2, contentW - 2, 10, 5.0);
        ctx.addY(1.0);
      }
      ctx.drawHeading('Table 2.2 · Eöt-Wash ±2 μm Error Propagation, Multi-Regulator Stability & Clock Energy Sweep', 3, false, 1);
      for (const row of REGULATOR_SENSITIVITY_TABLE) {
        ctx.drawMathInlineText(`${row.regimeOrRegulator} (${row.energyOrRadius}): ${row.computedOutput} — ${row.physicalInterpretation}`, marginX + 2, contentW - 2, 10, 5.0);
        ctx.addY(1.0);
      }
    }

    if (ch.number === 3) {
      ctx.drawHeading('Table 3.1 · Seven Orthogonal Temporal Notions & Standard Literature Correspondence', 3, false, 1);
      for (const t of SEVEN_TEMPORAL_NOTIONS) {
        ctx.drawMathInlineText(`${t.notion} (${t.symbol}): ${t.mathematicalDefinition} — ${t.foldsInH12} | Literature: ${t.literatureComparison}`, marginX + 2, contentW - 2, 10, 5.0);
        ctx.addY(1.1);
      }
    }

    if (ch.number === 4) {
      ctx.drawHeading('Table 4.1 · Positive Conjectures Summary Table (Category C)', 3, false, 1);
      for (const p of POSITIVE_CONJECTURES_SUMMARY) {
        ctx.drawMathInlineText(`${p.conjecture} [${p.category}]: ${p.statement} (Test: ${p.test})`, marginX + 2, contentW - 2, 10, 5.0);
        ctx.addY(1.1);
      }
      ctx.drawHeading('Table 4.2 · Model 2B Quadrature Convergence, Euler–Lagrange & ds_5² ≡ 0 Audit', 3, false, 1);
      for (const row of MODEL2B_CONVERGENCE_AND_MICROCAUSALITY_TABLE) {
        ctx.drawMathInlineText(`${row.benchmarkSpan} (${row.turningPeak}): ${row.etaFoldAndSpeed} | ${row.elAndNullResidual}`, marginX + 2, contentW - 2, 10, 5.0);
        ctx.addY(1.1);
      }
    }

    if (ch.number === 5) {
      ctx.drawHeading('Table 5.1 · Six-Class Black-Hole & Portal Taxonomy', 3, false, 1);
      for (const b of SIX_BLACK_HOLE_CLASSES) {
        ctx.drawMathInlineText(`${b.classId} (${b.label}) [${b.category}]: ${b.portalViability} | ${b.necStatus}`, marginX + 2, contentW - 2, 10, 5.0);
        ctx.addY(1.1);
      }
    }

    if (ch.number === 6 || ch.number === 9) {
      ctx.drawHeading(`Table ${ch.number}.1 · Negative Results Summary`, 3, false, 1);
      for (const n of NEGATIVE_RESULTS_SUMMARY) {
        ctx.drawMathInlineText(`${n.theorem} [${n.category}]: ${n.statement} -> ${n.implication}`, marginX + 2, contentW - 2, 10, 5.0);
        ctx.addY(1.1);
      }
      ctx.drawHeading('Glossary of Negative Theorems', 3, false, 1);
      for (const g of GLOSSARY_NEGATIVE_THEOREMS) {
        ctx.drawMathInlineText(`${g.term}: ${g.definition}`, marginX + 2, contentW - 2, 10, 5.0);
        ctx.addY(1.0);
      }
    }

    if (ch.number === 10) {
      ctx.drawHeading('Table 10.1 · What Is Unique to 5D vs. Reproduced in 4D H11', 3, false, 1);
      for (const u of WHAT_IS_UNIQUE_TO_5D) {
        ctx.drawMathInlineText(`${u.observable} [${u.empiricalStatus}]: 4D=${u.reproducedIn4DH11} | 5D=${u.uniqueTo5DH12}`, marginX + 2, contentW - 2, 10, 5.0);
        ctx.addY(1.1);
      }
      ctx.drawHeading('Table 10.2 · Multi-Probe Observational Consistency Audit', 3, false, 1);
      for (const b of FIVE_D_OBSERVATIONAL_BOUNDS) {
        ctx.drawMathInlineText(`${b.probe} (${b.bound}) [${b.h12Status}]: ${b.derivationOrAssumption}`, marginX + 2, contentW - 2, 10, 5.0);
        ctx.addY(1.1);
      }
    }

    if (ch.number === 11) {
      ctx.drawHeading('Table 11.1 · Exhaustive Ledger of Non-Derived Claims', 3, false, 1);
      for (const w of WHAT_IS_NOT_DERIVED_LEDGER) {
        ctx.drawMathInlineText(`${w.claim} [${w.category}]: ${w.whyNotDerived}`, marginX + 2, contentW - 2, 10, 5.0);
        ctx.addY(1.1);
      }
    }

    if (ch.number === 12) {
      ctx.drawHeading('Table 12.1 · Empirical & Conceptual Protocols (P7–P13)', 3, false, 1);
      for (const p of H12_ALL_PROTOCOLS) {
        ctx.drawMathInlineText(`${p.id} · ${p.name} [${p.category} | ${p.timeline}]: ${p.numericalSensitivity} | Falsification: ${p.falsificationCriterion}`, marginX + 2, contentW - 2, 9.8, 4.9);
        ctx.addY(1.1);
      }
      ctx.drawHeading('Table 12.2 · Timeline Table (P7–P13)', 3, false, 1);
      for (const t of P7_TO_P13_TIMELINE_TABLE) {
        ctx.drawMathInlineText(`${t.protocol}: ${t.currentState} -> ${t.requiredSensitivity} (${t.expectedYear})`, marginX + 2, contentW - 2, 9.8, 4.9);
      }
      ctx.drawHeading('Table 12.3 · Falsification Thresholds (P7–P13)', 3, false, 1);
      for (const f of P7_TO_P13_FALSIFICATION_TABLE) {
        ctx.drawMathInlineText(`Falsify ${f.protocol}: ${f.nullBound} => ${f.whatItRulesOut}`, marginX + 2, contentW - 2, 9.8, 4.9);
      }
      ctx.drawHeading('Table 12.4 · Confirmation Thresholds (P7–P13)', 3, false, 1);
      for (const c of P7_TO_P13_CONFIRMATION_TABLE) {
        ctx.drawMathInlineText(`Confirm ${c.protocol}: ${c.signalSignature} (Control: ${c.requiredControl})`, marginX + 2, contentW - 2, 9.8, 4.9);
      }
      ctx.drawHeading('Table 12.5 · Empirical Decision Matrix (P7–P13)', 3, false, 1);
      for (const d of P7_TO_P13_DECISION_MATRIX) {
        ctx.drawMathInlineText(`Outcome [${d.outcome}] -> ${d.posteriorStatus}. Action: ${d.mandatoryAction}`, marginX + 2, contentW - 2, 9.8, 4.9);
      }
      ctx.drawHeading('Table 12.6 · H11 (P1–P6) vs. H12 (P7–P13) Protocols Comparison', 3, false, 1);
      for (const cmp of H11_VS_H12_PROTOCOLS_COMPARISON) {
        ctx.drawMathInlineText(`${cmp.aspect}: H11=${cmp.h11Protocols} | H12=${cmp.h12Protocols}`, marginX + 2, contentW - 2, 9.8, 4.9);
      }
      ctx.drawHeading('Table 12.7 · Quantitative Noise Budgets & Systematic Mitigation (P7–P13)', 3, false, 1);
      for (const nb of P7_TO_P13_NOISE_BUDGET_TABLE) {
        ctx.drawMathInlineText(`${nb.protocol}: Sources: ${nb.primaryNoiseSources} | Floor: ${nb.quantitativeBudget} | Mitigation: ${nb.mitigationArchitecture}`, marginX + 2, contentW - 2, 9.8, 4.9);
        ctx.addY(1.0);
      }
      ctx.drawHeading('Table 12.8 · P13 Systematic Error Budget', 3, false, 1);
      for (const s of P13_SYSTEMATIC_ERROR_BUDGET) {
        ctx.drawMathInlineText(`${s.source}: ${s.magnitudeOrUncertainty} | Impact: ${s.impactOnEtaFold} | Mitigation: ${s.mitigationStrategy}`, marginX + 2, contentW - 2, 9.8, 4.9);
        ctx.addY(1.0);
      }
      ctx.drawHeading('Table 12.9 · P13 Statistical Error Budget', 3, false, 1);
      for (const st of P13_STATISTICAL_ERROR_BUDGET) {
        ctx.drawMathInlineText(`${st.channel}: ${st.measurementPrecision} -> ${st.propagatedEtaFoldError} (${st.sampleScalingNote})`, marginX + 2, contentW - 2, 9.8, 4.9);
        ctx.addY(1.0);
      }
      ctx.drawHeading('Table 12.10 · Combined Protocol Bounds (P7–P13 Joint Likelihood)', 3, false, 1);
      for (const cb of P7_TO_P13_COMBINED_BOUNDS_TABLE) {
        ctx.drawMathInlineText(`${cb.protocolPairOrCluster} (${cb.constrainedParameters}): ${cb.combinedJointLikelihoodRole} — ${cb.orthogonalExclusionPower}`, marginX + 2, contentW - 2, 9.8, 4.9);
        ctx.addY(1.0);
      }
      ctx.drawHeading('Table 12.11 · Protocol Sensitivity Projections (2026–2035+)', 3, false, 1);
      for (const pr of P7_TO_P13_SENSITIVITY_PROJECTION_TABLE) {
        ctx.drawMathInlineText(`${pr.protocol}: 2026=${pr.currentBaseline2026} | 2027–2032=${pr.nearTerm2027_2032} | 2035+=${pr.longTerm3G2035Plus}`, marginX + 2, contentW - 2, 9.8, 4.9);
      }
      ctx.drawHeading('Table 12.12 · Summary of P13 Multi-Messenger Bounds', 3, false, 1);
      for (const pb of P13_SUMMARY_OF_BOUNDS_TABLE) {
        ctx.drawMathInlineText(`${pb.datasetOrRegime} (${pb.baselineDistance}): ${pb.arrivalBoundOrPrecision} => ${pb.etaFoldLimit} [${pb.epistemicNote}]`, marginX + 2, contentW - 2, 9.8, 4.9);
      }
      ctx.drawHeading('Protocol Statistical Framework, Joint Likelihood & Bayesian Occam Penalty', 3, false, 1);
      for (const sec of H12_PROTOCOL_ANALYSIS_SECTIONS) {
        ctx.drawMathInlineText(`${sec.title}: ${sec.content}`, marginX + 2, contentW - 2, 10, 5.0, EARTH_UMBER, false, true);
        ctx.addY(1.1);
      }
      ctx.drawHeading('Falsification Checklist', 3, false, 1);
      for (const f of H12_FALSIFICATION_CHECKLIST) ctx.drawMathInlineText(`• [Falsify] ${f}`, marginX + 2, contentW - 2, 10, 5.0);
      ctx.drawHeading('Confirmation Checklist', 3, false, 1);
      for (const c of H12_CONFIRMATION_CHECKLIST) ctx.drawMathInlineText(`• [Confirm] ${c}`, marginX + 2, contentW - 2, 10, 5.0);
      ctx.addY(1.5);
      ctx.drawMathInlineText(H12_FUNDING_AGENCY_SUMMARY, marginX, contentW, 11, 5.8, EARTH_UMBER, false, true);
    }

    if (ch.number === 13) {
      ctx.drawHeading('Table 13.1 · Twelve Research Extrapolations & Open Obstacles', 3, false, 1);
      for (const ex of TWELVE_EXTRAPOLATIONS) {
        ctx.drawMathInlineText(`${ex.id}. ${ex.topic} [${ex.category}]: ${ex.extension} Obstacle: ${ex.keyObstacleOrFalsifier}`, marginX + 2, contentW - 2, 10, 5.0);
        ctx.addY(1.1);
      }
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

    for (const { fig, raster } of svgAssets.filter((x) => x.fig.anchorChapter === ch.number)) {
      if (!raster) continue;
      const imgW = contentW;
      const imgH = Math.min(95, imgW * raster.aspect);
      ctx.ensureSpace(imgH + 38);
      ctx.drawMathInlineText(`${fig.figureNumber}: ${fig.title} [${fig.category}]`, marginX, contentW, 10.5, 4.8, EARTH_SAGE, true, false);
      doc.addImage(raster.dataUrl, 'PNG', marginX, ctx.getY(), imgW, imgH);
      ctx.addY(imgH + 7.5);
      ctx.drawMathInlineText(fig.caption, marginX, contentW, 9.5, 4.6, EARTH_STONE, false, true);
      ctx.addY(5);
    }

    for (const { plate, raster } of plateAssets.filter((x) => x.plate.anchorChapter === ch.number)) {
      if (!raster) continue;
      const imgW = contentW;
      const imgH = Math.min(108, imgW * raster.aspect);
      ctx.ensureSpace(imgH + 40);
      ctx.drawMathInlineText(`${plate.figureNumber}: ${plate.title} [${plate.category}]`, marginX, contentW, 10.5, 4.8, EARTH_TERRACOTTA, true, false);
      doc.addImage(raster.dataUrl, 'JPEG', marginX, ctx.getY(), imgW, imgH);
      ctx.addY(imgH + 8);
      ctx.drawMathInlineText(plate.description, marginX, contentW, 9.5, 4.6, EARTH_STONE, false, true);
      ctx.addY(5);
    }
  }

  // Main Monograph Appendices L & M (Appendix N Adversarial Stress-Test Scorecard excluded from PDF)
  for (const app of H12_MAIN_APPENDICES_LMN.filter((a) => a.letter !== 'N')) {
    ctx.drawHeading(`Appendix ${app.letter}: ${app.title}`, 1, true, 0, true);
    ctx.drawCategoryTag(app.category);
    ctx.drawMathInlineText(app.leadSummary, marginX, contentW, 11.5, 6.05, EARTH_STONE, false, true, 'serif', 'italic');
    ctx.addY(3);
    for (const p of app.paragraphs) {
      ctx.drawMathInlineText(p, marginX, contentW, 12, 6.35, EARTH_UMBER, false, true);
      ctx.addY(2.2);
    }
    if (app.letter === 'L') {
      ctx.drawHeading('Table L.1 · Eleven Portal & Analog Mechanisms', 3, false, 1);
      for (const m of ELEVEN_PORTAL_MECHANISMS) {
        ctx.drawMathInlineText(`${m.mechanism} [${m.tier} | ${m.category}]: ${m.quantitativeObstacleOrLimit}`, marginX + 2, contentW - 2, 10, 5.0);
        ctx.addY(1.1);
      }
    }
    if (app.letter === 'M') {
      ctx.drawHeading('Table M.1 · Devices A–F Ten-Field Technical Specifications', 3, false, 1);
      for (const d of SIX_PROPOSED_DEVICES) {
        ctx.drawMathInlineText(`${d.deviceId}: ${d.name} [${d.category}] — Principle: ${d.physicalPrinciple} Signal: ${d.predictedSignal} Tests: ${d.whatItActuallyTests} Non-Claim: ${d.whatItDoesNotDo}`, marginX + 2, contentW - 2, 9.8, 4.9);
        ctx.addY(1.4);
      }
    }
  }

  ctx.drawHeading('References', 1, true, 0, true);
  for (const ref of H12_REFERENCES) {
    ctx.drawMathInlineText(`[${ref.id}] ${ref.citation}`, marginX, contentW, 10.5, 5.2, EARTH_UMBER, false, true);
    ctx.addY(1.5);
  }

  // Unified Technical Appendices A–K (previously separate Supplementary Vol. II)
  ctx.drawHeading('Technical Appendices (A–K)', 1, true, 0, true);
  ctx.drawMathInlineText(
    `Detailed Mathematical Proofs, Variational Derivations & Numerical Solver Audits for "${H12_META.title}" — ${H12_META.authors}.`,
    marginX,
    contentW,
    11.4,
    5.6,
    EARTH_STONE,
    false,
    true,
    'serif',
    'italic'
  );
  ctx.addY(3);
  for (const app of H12_APPENDICES) {
    ctx.drawHeading(`Appendix ${app.letter}: ${app.title}`, 2, true, 1);
    ctx.drawCategoryTag(app.category);
    ctx.drawMathInlineText(app.summary, marginX, contentW, 11, 5.5, EARTH_STONE, false, true, 'serif', 'italic');
    ctx.addY(2);
    for (const eq of app.equations) ctx.drawEquationBox(eq);
    for (const p of app.bodyParagraphs) {
      ctx.drawMathInlineText(p, marginX, contentW, 11.5, 6.05, EARTH_UMBER, false, true);
      ctx.addY(2);
    }
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
    const step = entry.indent ? 4.35 : 5.35;
    if (ty + step > bottomLimit) {
      if (currentTocPage === tocPage1) {
        currentTocPage = tocPage2;
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
      } else {
        break;
      }
    }
    const indentPx = (entry.indent ?? 0) * 5.0;
    const fSize = entry.indent ? 9.0 : 10.1;
    ctx.setFontSafe('serif', 'normal', fSize);
    doc.setTextColor(...(entry.indent ? EARTH_STONE : EARTH_UMBER));
    const maxLabelW = contentW - indentPx - 16;
    const clipped = ctx.clipMixedLine(entry.label, maxLabelW, false, fSize, 'serif');
    ctx.drawMixedRun(clipped, marginX + indentPx, ty, false, fSize, 'serif', 'normal');
    ctx.setFontSafe('mono', 'normal', 9.0);
    doc.setTextColor(...EARTH_TERRACOTTA);
    doc.text(String(entry.page), marginX + contentW, ty, { align: 'right' });
    ty += step;
  }

  // Stamp Running Headers & Page Numbers (Page 1 Cover remains clean without running header/footer)
  const totalPages = doc.getNumberOfPages();
  const runningHeader = ctx.clipMixedLine(
    ctx.safeStr('IGRT-2026-H12 · Folding Time Across Hidden Dimensions · Tassan, Bulaqueña & Lauret'),
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
