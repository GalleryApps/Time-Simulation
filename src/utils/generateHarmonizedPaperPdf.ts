/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Monograph Direct PDF Exporter (A4 Portrait, 25mm margins)
 * - Zero LaTeX: pure Unicode / HTML-to-Canvas equation typesetting
 * - Body prose: 30px CSS equivalent (22.5pt) at 1.5 line spacing
 * - Headlines: Playfair Display Regular (weight 400, strictly never bold) at 54px (chapters/title) & 38px (subsections)
 * - Rasterizes all 8 inline SVG diagrams cleanly into embedded PNGs
 * - Includes running headers/footers and complete technical apparatus
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
  ETHICS_AND_GOVERNANCE,
  VERSION_CHANGE_LOG
} from '../types/harmonizedPaperApparatus';
import { PAPER_FIGURES } from '../components/HarmonizedPaperFigures';

// Convert Unicode math/accents that Helvetica/Times standard jsPDF core fonts lack into clean ASCII fallback
function pdfTextSafe(input: string): string {
  return input
    .replace(/ñ/g, 'n')
    .replace(/Ñ/g, 'N')
    .replace(/ä/g, 'a_ddot')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/é/g, 'e')
    .replace(/–|—/g, '-')
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/·/g, ' * ')
    .replace(/×/g, 'x')
    .replace(/±/g, '+/-')
    .replace(/≤/g, '<=')
    .replace(/≥/g, '>=')
    .replace(/≪/g, '<<')
    .replace(/≫/g, '>>')
    .replace(/≡/g, '=')
    .replace(/≈/g, '~=')
    .replace(/≠/g, '!=')
    .replace(/→/g, '->')
    .replace(/⟹|⇒/g, '=>')
    .replace(/⟺/g, '<=>')
    .replace(/∈/g, ' in ')
    .replace(/∀/g, ' for all ')
    .replace(/≺/g, '<')
    .replace(/∇/g, 'nabla')
    .replace(/∂/g, 'd')
    .replace(/□/g, 'Box')
    .replace(/√/g, 'sqrt')
    .replace(/∞/g, 'infty')
    .replace(/∑/g, 'Sum')
    .replace(/∫/g, 'Int')
    .replace(/⟨/g, '<')
    .replace(/⟩/g, '>')
    .replace(/‖/g, '||')
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
    .replace(/ρ/g, 'rho')
    .replace(/ξ/g, 'xi')
    .replace(/η/g, 'eta')
    .replace(/φ/g, 'phi')
    .replace(/Φ/g, 'Phi')
    .replace(/π/g, 'pi')
    .replace(/Ĥ/g, 'H_hat')
    .replace(/∇̂/g, 'nabla_hat')
    .replace(/g̃/g, 'g_tilde')
    .replace(/𝒜/g, 'A_C')
    .replace(/ℋ/g, 'H_C')
    .replace(/𝒟/g, 'D')
    .replace(/𝒞/g, 'C')
    .replace(/ℱ/g, 'F')
    .replace(/ℒ/g, 'L')
    .replace(/ℳ/g, 'M')
    .replace(/𝒱/g, 'V')
    .replace(/ℂ/g, 'C')
    .replace(/⊙/g, 'sun')
    .replace(/[^\x20-\x7E\n\r\t]/g, '');
}

function renderUnicodeEquationPng(
  plainEquation: string,
  maxWidthInches: number
): { dataUrl: string; widthIn: number; heightIn: number } | null {
  if (typeof document === 'undefined') return null;

  const DPI = 240;
  const maxWidthPx = maxWidthInches * DPI;
  const fontPx = 28;
  const lineH = Math.round(fontPx * 1.45);

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  ctx.font = `400 ${fontPx}px Georgia, "Times New Roman", serif`;

  // Word wrap long equations gracefully onto multiple centered lines
  const tokens = plainEquation.split(/\s+/);
  const lines: string[] = [];
  let cur = '';
  for (const tok of tokens) {
    const test = cur ? `${cur} ${tok}` : tok;
    if (ctx.measureText(test).width > maxWidthPx - 28 && cur) {
      lines.push(cur);
      cur = tok;
    } else {
      cur = test;
    }
  }
  if (cur) lines.push(cur);

  const measuredW = Math.min(
    maxWidthPx,
    Math.max(160, Math.max(...lines.map((l) => ctx.measureText(l).width)) + 32)
  );
  const canvasW = Math.ceil(measuredW);
  const canvasH = Math.max(lineH + 16, lines.length * lineH + 20);
  canvas.width = canvasW;
  canvas.height = canvasH;

  const drawCtx = canvas.getContext('2d');
  if (!drawCtx) return null;
  drawCtx.font = `400 ${fontPx}px Georgia, "Times New Roman", serif`;
  drawCtx.fillStyle = '#0F172A';
  drawCtx.textBaseline = 'middle';
  drawCtx.textAlign = 'center';

  lines.forEach((line, idx) => {
    drawCtx.fillText(line, canvasW / 2, 10 + (idx + 0.5) * lineH);
  });

  return {
    dataUrl: canvas.toDataURL('image/png'),
    widthIn: canvasW / DPI,
    heightIn: canvasH / DPI
  };
}

function renderPlayfairRegularHeadlinePng(
  text: string,
  fontPx: number,
  maxWidthInches: number,
  color = '#0F172A'
): { dataUrl: string; widthIn: number; heightIn: number } | null {
  if (typeof document === 'undefined') return null;

  const SUPERSAMPLE = 2.5;
  const CSS_DPI = 96;
  const pxScale = fontPx * SUPERSAMPLE;
  const lineH = Math.round(pxScale * 1.24);
  const maxWidthPx = maxWidthInches * CSS_DPI * SUPERSAMPLE;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const fontSpec = `400 ${pxScale}px "Playfair Display", Georgia, serif`;
  ctx.font = fontSpec;

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
  const canvasH = Math.max(lineH + 10, lines.length * lineH + 12);
  canvas.width = canvasW;
  canvas.height = canvasH;

  const drawCtx = canvas.getContext('2d');
  if (!drawCtx) return null;
  drawCtx.font = fontSpec;
  drawCtx.fillStyle = color;
  drawCtx.textBaseline = 'top';

  lines.forEach((line, idx) => {
    drawCtx.fillText(line, 0, idx * lineH + 3);
  });

  return {
    dataUrl: canvas.toDataURL('image/png'),
    widthIn: canvasW / (CSS_DPI * SUPERSAMPLE),
    heightIn: canvasH / (CSS_DPI * SUPERSAMPLE)
  };
}

async function rasterizeSvgToPng(
  svgMarkup: string,
  targetWidthInches: number
): Promise<{ dataUrl: string; widthIn: number; heightIn: number } | null> {
  if (typeof document === 'undefined') return null;
  return new Promise((resolve) => {
    try {
      const vbMatch = svgMarkup.match(/viewBox="0 0 (\d+) (\d+)"/);
      const vbW = vbMatch ? Number(vbMatch[1]) : 860;
      const vbH = vbMatch ? Number(vbMatch[2]) : 340;
      const aspect = vbH / vbW;

      const svgBlob = new Blob([svgMarkup], { type: 'image/svg+xml;charset=utf-8' });
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

export async function generateHarmonizedPaperPdf(): Promise<void> {
  if (typeof document !== 'undefined' && 'fonts' in document) {
    try {
      await Promise.all([
        document.fonts.load('400 54px "Playfair Display"'),
        document.fonts.load('400 38px "Playfair Display"'),
        document.fonts.ready
      ]);
    } catch {
      // Proceed gracefully
    }
  }

  // A4 portrait (210mm x 297mm) = 8.2677 in x 11.6929 in; margins 25mm = 0.984 in
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'in',
    format: 'a4',
    compress: true
  });

  const PAGE_W = 8.268;
  const PAGE_H = 11.693;
  const MARGIN = 0.984; // 25mm
  const CONTENT_W = PAGE_W - 2 * MARGIN;
  const MAX_Y = PAGE_H - MARGIN;

  // Scaled typography consistent with HTML monograph (+16px scale on A4: readable 14.5pt core or proportional)
  // Using 13.5pt (~18px readable archival PDF scale) ensures clean pagination without mid-word breaks while headlines scale cleanly.
  const BODY_PT = 13.5;
  const BODY_LINE_IN = (BODY_PT * 1.5) / 72;

  let y = MARGIN;

  doc.setProperties({
    title: pdfTextSafe(PAPER_META.title),
    subject: 'Information-Geometric Resonant Time (IGRT) — Harmonized Research Monograph',
    author: 'Marlon D. Bulaquena, Jean-Charles Tassan, Wilson John Sterking Lauret',
    keywords: pdfTextSafe(PAPER_META.keywords.join(', ')),
    creator: 'IGRT Research Group'
  });

  const addPage = () => {
    doc.addPage('a4', 'portrait');
    y = MARGIN;
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
      style?: 'normal' | 'italic';
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
    const afterSpace = opts.afterSpace ?? 0.12;

    doc.setFont(font, style);
    doc.setFontSize(size);
    doc.setTextColor(color[0], color[1], color[2]);

    const safe = pdfTextSafe(text);
    const lines = doc.splitTextToSize(safe, CONTENT_W - indent) as string[];

    for (let i = 0; i < lines.length; i++) {
      ensureSpace(lineHeight + 0.04);
      doc.text(lines[i], MARGIN + indent, y);
      y += lineHeight;
    }
    y += afterSpace;
  };

  const drawPlayfairHeadline = (text: string, fontPx: number, afterSpace = 0.14) => {
    const rendered = renderPlayfairRegularHeadlinePng(text, fontPx, CONTENT_W, '#0F172A');
    if (rendered) {
      ensureSpace(rendered.heightIn + 0.25); // Prevent orphan headline at bottom of page
      doc.addImage(rendered.dataUrl, 'PNG', MARGIN, y - 0.04, rendered.widthIn, rendered.heightIn);
      y += rendered.heightIn + afterSpace;
    } else {
      ensureSpace(0.5);
      writeWrappedText(text, {
        font: 'times',
        style: 'normal',
        size: (fontPx * 72) / 96,
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

  const drawEquationBox = (plainText: string, label?: string, caption?: string) => {
    const labelReserve = label ? 0.55 : 0.16;
    const eqImg = renderUnicodeEquationPng(plainText, CONTENT_W - labelReserve - 0.28);

    let capLines: string[] = [];
    if (caption) {
      doc.setFont('times', 'italic');
      doc.setFontSize(10.5);
      capLines = doc.splitTextToSize(pdfTextSafe(caption), CONTENT_W - 0.4) as string[];
    }
    const capH = capLines.length > 0 ? capLines.length * ((10.5 * 1.45) / 72) + 0.14 : 0;

    if (eqImg) {
      const eqH = eqImg.heightIn;
      const boxH = eqH + 0.34 + capH;
      ensureSpace(boxH + 0.35);

      y += 0.16; // Generous top separation
      doc.setFillColor(250, 246, 238);
      doc.setDrawColor(214, 202, 190);
      doc.setLineWidth(0.01);
      doc.rect(MARGIN, y, CONTENT_W, boxH, 'FD');

      const eqX = MARGIN + Math.max(0.14, (CONTENT_W - labelReserve - eqImg.widthIn) / 2);
      doc.addImage(eqImg.dataUrl, 'PNG', eqX, y + 0.14, eqImg.widthIn, eqImg.heightIn);

      if (label) {
        doc.setFont('courier', 'normal');
        doc.setFontSize(10);
        doc.setTextColor(139, 69, 19);
        doc.text(pdfTextSafe(label), PAGE_W - MARGIN - 0.16, y + 0.14 + eqImg.heightIn / 2 + 0.04, {
          align: 'right'
        });
      }

      if (capLines.length > 0) {
        const divY = y + eqH + 0.22;
        doc.setDrawColor(229, 221, 208);
        doc.line(MARGIN + 0.14, divY, PAGE_W - MARGIN - 0.14, divY);
        let cy = divY + 0.18;
        doc.setFont('times', 'italic');
        doc.setFontSize(10.5);
        doc.setTextColor(71, 85, 105);
        for (const cl of capLines) {
          doc.text(cl, MARGIN + 0.18, cy);
          cy += (10.5 * 1.45) / 72;
        }
      }

      y += boxH + 0.24;
    } else {
      writeWrappedText(`[${label || 'Eq'}] ${plainText}`, { size: 11.5, style: 'italic' });
    }
  };

  // Pre-rasterize all 8 SVG diagrams
  const figureImages = new Map<number, { dataUrl: string; widthIn: number; heightIn: number }>();
  for (const fig of PAPER_FIGURES) {
    const png = await rasterizeSvgToPng(fig.svgMarkup, CONTENT_W - 0.1);
    if (png) figureImages.set(fig.id, png);
  }

  // =========================================================
  // PAGE 1: MASTHEAD, TITLE, RESEARCH TEAM & SHORT ABSTRACT
  // =========================================================
  writeWrappedText(`${PAPER_META.publicationStatus}  |  ${PAPER_META.edition}`, {
    font: 'helvetica',
    size: 8.5,
    color: [139, 69, 19],
    afterSpace: 0.06
  });

  drawRule([15, 23, 42], 0.015);
  drawPlayfairHeadline(PAPER_META.title, 44, 0.14);

  writeWrappedText(
    `${PAPER_META.eprint}   |   ${PAPER_META.doi}\nPhySH: ${PAPER_META.physh}\nMSC 2020: ${PAPER_META.msc2020}`,
    { font: 'courier', size: 8.5, color: [100, 116, 139], afterSpace: 0.14 }
  );

  for (const a of PAPER_META.authors) {
    writeWrappedText(`${a.name}  (ORCID: https://orcid.org/${a.orcid})  -  ${a.affiliation}`, {
      font: 'times',
      size: 10.5,
      color: [15, 23, 42],
      afterSpace: 0.05
    });
  }

  drawRule([214, 202, 190], 0.01);

  writeWrappedText(`ABSTRACT (${SHORTENED_ABSTRACT.wordCountNote})`, {
    font: 'helvetica',
    size: 10,
    color: [139, 69, 19],
    afterSpace: 0.08
  });

  for (const p of SHORTENED_ABSTRACT.paragraphs) {
    writeWrappedText(p, { size: 11.5, lineHeight: (11.5 * 1.45) / 72, afterSpace: 0.1 });
  }
  drawEquationBox(MASTER_EQUATION_ABSTRACT.plainText, MASTER_EQUATION_ABSTRACT.label, MASTER_EQUATION_ABSTRACT.caption);

  writeWrappedText(`Keywords: ${PAPER_META.keywords.join('; ')}`, {
    style: 'italic',
    size: 10,
    color: [71, 85, 105],
    afterSpace: 0.08
  });

  // =========================================================
  // PAGE 2: DEDICATED TABLE OF CONTENTS
  // =========================================================
  addPage();
  drawPlayfairHeadline('Table of Contents', 42, 0.18);
  writeWrappedText('Frontmatter: Plain-Language Summary · Scope & Closures · Symbols · Acronyms · Dimensional Table · Equation Index', {
    size: 11.5,
    afterSpace: 0.08
  });
  for (const ch of PAPER_CHAPTERS) {
    writeWrappedText(`Chapter ${ch.number}: ${ch.title}`, { size: 12, color: [15, 23, 42], afterSpace: 0.04 });
    for (const sub of ch.subsections) {
      writeWrappedText(`${sub.number}  ${sub.title}`, {
        size: 10.5,
        indent: 0.25,
        color: [71, 85, 105],
        afterSpace: 0.03
      });
    }
  }
  writeWrappedText('Appendices A–J: Formal Theorems, CODATA Units, Derivations & Technical FAQ', {
    size: 11.5,
    afterSpace: 0.06
  });
  writeWrappedText(`Governance · Version Change Log · References [1]–[${PAPER_REFERENCES.length}]`, {
    size: 11.5,
    afterSpace: 0.06
  });

  // =========================================================
  // FRONTMATTER APPARATUS
  // =========================================================
  addPage();
  drawPlayfairHeadline('Plain-Language Summary & Editorial Apparatus', 40, 0.16);
  writeWrappedText(PLAIN_LANGUAGE_SUMMARY, { size: BODY_PT, lineHeight: BODY_LINE_IN });

  writeWrappedText('SCOPE & ARCHITECTURAL CLOSURES', { font: 'helvetica', size: 10, color: [139, 69, 19], afterSpace: 0.06 });
  for (const sc of SCOPE_AND_NON_CLAIMS) {
    writeWrappedText(`${sc.title}: ${sc.detail}`, { size: 11.5, afterSpace: 0.07 });
  }

  writeWrappedText('TABLE 0.1: LIST OF SYMBOLS', { font: 'helvetica', size: 10, color: [139, 69, 19], afterSpace: 0.06 });
  for (const sym of LIST_OF_SYMBOLS) {
    writeWrappedText(`${sym.symbol} [${sym.units}]: ${sym.name}. (${sym.collisionNote})`, { size: 10.5, afterSpace: 0.05 });
  }

  writeWrappedText('ACRONYMS GLOSSARY', { font: 'helvetica', size: 10, color: [139, 69, 19], afterSpace: 0.06 });
  for (const acr of ACRONYMS_GLOSSARY) {
    writeWrappedText(`${acr.term} (${acr.expansion}): ${acr.definition}`, { size: 10.5, afterSpace: 0.04 });
  }

  writeWrappedText('TABLE 0.2: DIMENSIONAL ANALYSIS CLOSURE', { font: 'helvetica', size: 10, color: [139, 69, 19], afterSpace: 0.06 });
  for (const dim of DIMENSIONAL_ANALYSIS_TABLE) {
    writeWrappedText(`${dim.quantity} = ${dim.expression} | SI: ${dim.siUnits} | Note: ${dim.auditNote}`, {
      size: 10.5,
      afterSpace: 0.05
    });
  }

  writeWrappedText('LIST OF FIGURES & TABLES & EQUATION INDEX', { font: 'helvetica', size: 10, color: [139, 69, 19], afterSpace: 0.06 });
  for (const f of PAPER_FIGURES) {
    writeWrappedText(`Figure ${f.id}: ${f.title}`, { size: 10.5, afterSpace: 0.03 });
  }
  for (const t of LIST_OF_TABLES) {
    writeWrappedText(`${t.number}: ${t.title} (${t.location})`, { size: 10.5, afterSpace: 0.03 });
  }
  for (const e of EQUATION_INDEX) {
    writeWrappedText(`${e.label} ${e.title} (${e.section})`, { size: 10.5, afterSpace: 0.03 });
  }

  // =========================================================
  // CHAPTERS 1 TO 8 (NEW PAGE PER CHAPTER + INLINE SVG PNGS)
  // =========================================================
  for (const chapter of PAPER_CHAPTERS) {
    addPage();
    writeWrappedText(`CHAPTER ${chapter.number}`, {
      font: 'helvetica',
      size: 9.5,
      color: [139, 69, 19],
      afterSpace: 0.04
    });
    drawPlayfairHeadline(chapter.title, 44, 0.12);
    writeWrappedText(chapter.leadSummary, {
      style: 'italic',
      size: BODY_PT,
      lineHeight: BODY_LINE_IN,
      color: [71, 85, 105],
      afterSpace: 0.14
    });

    for (const sub of chapter.subsections) {
      ensureSpace(0.95);
      drawPlayfairHeadline(`${sub.number}  ${sub.title}`, 30, 0.1);

      for (const p of sub.paragraphs) {
        writeWrappedText(p, { size: BODY_PT, lineHeight: BODY_LINE_IN });
      }

      if (sub.theoremBox) {
        writeWrappedText(
          `${sub.theoremBox.number}: ${sub.theoremBox.title}\nHypotheses: ${sub.theoremBox.hypotheses.join(' ')}\nStatement: ${sub.theoremBox.statement}`,
          { size: 11.5, indent: 0.15, color: [15, 23, 42], afterSpace: 0.12 }
        );
      }

      if (sub.equation) {
        drawEquationBox(sub.equation.plainText, sub.equation.label, sub.equation.caption);
      }

      if (sub.workedExample) {
        writeWrappedText(`WORKED EXAMPLE — ${sub.workedExample.title}`, {
          font: 'helvetica',
          size: 9.5,
          color: [139, 69, 19],
          afterSpace: 0.05
        });
        writeWrappedText(sub.workedExample.setup, { size: 11.5, indent: 0.15, afterSpace: 0.05 });
        for (const st of sub.workedExample.steps) {
          writeWrappedText(st, { size: 11.5, indent: 0.25, afterSpace: 0.05 });
        }
        drawEquationBox(
          sub.workedExample.resultEquation.plainText,
          sub.workedExample.resultEquation.label,
          sub.workedExample.resultEquation.caption
        );
        writeWrappedText(`Takeaway: ${sub.workedExample.takeaway}`, { size: 11.5, indent: 0.15, afterSpace: 0.1 });
      }

      if (sub.bulletPoints) {
        for (const bp of sub.bulletPoints) {
          writeWrappedText(`- ${bp.label}: ${bp.text}`, { size: 12, indent: 0.18, afterSpace: 0.06 });
        }
      }

      if (sub.anchorId === 'sec-1-3') {
        writeWrappedText('TABLE 1.1: FOUNDATIONAL PRINCIPLES (I–VII)', {
          font: 'helvetica',
          size: 9.5,
          color: [139, 69, 19],
          afterSpace: 0.06
        });
        for (const p of PAPER_POSTULATES) {
          writeWrappedText(`${p.code} (${p.name}): ${p.statement}`, {
            size: 11.5,
            indent: 0.15,
            afterSpace: 0.06
          });
        }
      }

      if (sub.anchorId === 'sec-7-3') {
        writeWrappedText('TABLE 7.1: EXPERIMENTAL PROTOCOLS (P1–P6)', {
          font: 'helvetica',
          size: 9.5,
          color: [139, 69, 19],
          afterSpace: 0.06
        });
        for (const pr of AUDITED_TEST_PROTOCOLS) {
          writeWrappedText(
            `P${pr.id}. ${pr.name} (${pr.facility})\nFormula: ${pr.formulaPlain}\nSignal: ${pr.predictedSignal}\nNote: ${pr.noiseAndAuditNote}\nFalsification: ${pr.falsificationCriterion}`,
            { size: 11, indent: 0.15, afterSpace: 0.1 }
          );
        }
      }

      if (sub.anchorId === 'sec-8-1') {
        writeWrappedText('TABLE 8.1: COMPETING FRAMEWORKS COMPARISON', {
          font: 'helvetica',
          size: 9.5,
          color: [139, 69, 19],
          afterSpace: 0.06
        });
        for (const row of FRAMEWORKS_COMPARISON_TABLE) {
          writeWrappedText(
            `${row.framework}: Mechanism: ${row.keyMechanism} | 4D: ${row.preserves4DLorentzian} | Limits: ${row.openLimitations}`,
            { size: 11, indent: 0.15, afterSpace: 0.06 }
          );
        }
        writeWrappedText('TABLE 8.2: CORE CLOSURE RESULTS SUMMARY', {
          font: 'helvetica',
          size: 9.5,
          color: [139, 69, 19],
          afterSpace: 0.06
        });
        for (const t of AUDITED_CLOSURE_THEOREMS) {
          writeWrappedText(`${t.title} (${t.domain}): ${t.summary}`, {
            size: 11,
            indent: 0.15,
            afterSpace: 0.06
          });
        }
      }

      // Embed rasterized inline SVG figures belonging after this subsection
      const matchedFigs = PAPER_FIGURES.filter((f) => f.afterSubsectionAnchor === sub.anchorId);
      for (const fig of matchedFigs) {
        const img = figureImages.get(fig.id);
        if (img) {
          ensureSpace(img.heightIn + 0.8);
          doc.addImage(img.dataUrl, 'PNG', MARGIN, y, img.widthIn, img.heightIn);
          y += img.heightIn + 0.12;
        }
        writeWrappedText(fig.caption, {
          style: 'italic',
          size: 10.5,
          color: [71, 85, 105],
          afterSpace: 0.16
        });
      }
    }
  }

  // =========================================================
  // APPENDICES A–J
  // =========================================================
  addPage();
  drawPlayfairHeadline('Appendices A–J: Derivations, Units & Technical FAQ', 42, 0.16);
  for (const app of PAPER_APPENDICES) {
    ensureSpace(0.9);
    drawPlayfairHeadline(`Appendix ${app.letter}. ${app.title}`, 28, 0.08);
    writeWrappedText(`Statement (${app.tag}): ${app.theoremStatement}`, { style: 'italic', size: 12 });
    for (const para of app.proofParagraphs) {
      writeWrappedText(para, { size: 12 });
    }
    for (const eq of app.equations) {
      drawEquationBox(eq.plainText, eq.label);
    }
  }

  // =========================================================
  // GOVERNANCE & VERSION CHANGE LOG
  // =========================================================
  addPage();
  drawPlayfairHeadline('Governance Disclosures & Version Change Log', 40, 0.16);
  for (const c of ETHICS_AND_GOVERNANCE.creditRoles) {
    writeWrappedText(`${c.author}: ${c.roles}`, { size: 11.5, afterSpace: 0.05 });
  }
  writeWrappedText(`Conflicts of Interest: ${ETHICS_AND_GOVERNANCE.conflictsOfInterest}`, { size: 11.5 });
  writeWrappedText(`Funding: ${ETHICS_AND_GOVERNANCE.fundingStatement}`, { size: 11.5 });
  writeWrappedText(`Data & Code Availability: ${ETHICS_AND_GOVERNANCE.dataAndCodeAvailability}`, { size: 11.5 });
  writeWrappedText(`AI-Assistance Disclosure: ${ETHICS_AND_GOVERNANCE.aiAssistanceDisclosure}`, { size: 11.5 });

  drawRule();
  writeWrappedText('VERSION CHANGE LOG', { font: 'helvetica', size: 10, color: [139, 69, 19], afterSpace: 0.06 });
  for (const v of VERSION_CHANGE_LOG) {
    writeWrappedText(`${v.version} (${v.date}): ${v.summary}`, { size: 11.5, afterSpace: 0.07 });
  }

  // =========================================================
  // CITED VERSION & REFERENCES [1]–[91] (SLIGHTLY SMALLER 9PT FONT, NO ORCIDs IN REFERENCES)
  // =========================================================
  addPage();
  drawPlayfairHeadline('Cited Version & References (Numeric Order)', 42, 0.14);

  writeWrappedText('HOW TO CITE (CITED VERSION — APA & BIBTEX)', {
    font: 'helvetica',
    size: 8.5,
    color: [139, 69, 19],
    afterSpace: 0.05
  });
  writeWrappedText(`APA: ${PAPER_APA}`, {
    size: 9,
    lineHeight: (9 * 1.45) / 72,
    color: [30, 41, 59],
    afterSpace: 0.06
  });
  writeWrappedText(PAPER_BIBTEX, {
    font: 'courier',
    size: 8.5,
    lineHeight: (8.5 * 1.4) / 72,
    color: [51, 65, 85],
    afterSpace: 0.12
  });
  drawRule();

  for (const r of PAPER_REFERENCES) {
    const idPart = r.identifier ? ` ${r.identifier}.` : '';
    writeWrappedText(
      `[${r.id}] ${r.authors} (${r.year}). "${r.title}." ${r.venue}.${idPart}`,
      { size: 9, lineHeight: (9 * 1.45) / 72, afterSpace: 0.045 }
    );
  }

  // =========================================================
  // RUNNING HEADERS & FOOTERS
  // =========================================================
  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    if (p > 1) {
      doc.setFont('times', 'italic');
      doc.setFontSize(8.5);
      doc.setTextColor(110, 120, 138);
      doc.text('Information-Geometric Resonant Time (IGRT) — Harmonized Research Monograph', PAGE_W / 2, 0.5, {
        align: 'center'
      });
    }
    doc.setFont('courier', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(110, 120, 138);
    doc.text(`Page ${p} of ${totalPages}`, PAGE_W / 2, PAGE_H - 0.5, { align: 'center' });
  }

  doc.save('IGRT_Harmonized_Monograph_Bulaquena_Tassan_Lauret.pdf');
}
