/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Deterministic Verification Suite for Paper 17:
 * "Consciousness as a Thermodynamic Compression Artifact:
 *  Why the 'Hard Problem' Is a Category Error in Substrate-Independent Information Geometry"
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
  MIND_34_SHADES,
  evaluateSelfModelingBudget,
  evaluateCompressionLocus,
  computeRateDistortionFisherTradeoff
} from './mindCompressionPaper.ts';
import {
  MIND_META,
  MIND_ABSTRACT,
  MIND_CORE_THESIS,
  TABLE_M1_CATEGORY_COMPARISON,
  TABLE_M2_PUZZLE_DISSOLUTION,
  TABLE_M3_SOUL_VS_LOCUS,
  TABLE_M4_FALSIFICATION_MATRIX,
  MIND_CHAPTERS,
  MIND_APPENDICES,
  MIND_SYMBOL_GLOSSARY,
  MIND_GLOSSARY,
  MIND_REFERENCES,
  MIND_INDEX_OF_NAMES,
  MIND_INDEX_OF_CONCEPTS
} from '../types/mindCompressionPaperData.ts';
import { MIND_PLATES_META } from '../types/mindCompressionPaperFigures.ts';
import {
  buildMindCompressionSelfContainedHtml,
  buildMindCompressionMarkdown,
  buildMindCompressionLatex
} from '../utils/generateMindCompressionPaperExports.ts';
import { buildMindCompressionPdfDocument } from '../utils/generateMindCompressionPaperPdf.ts';

const BANNED_STYLE_PATTERN = /\b(symbolic|typographic|calligram|obsidian|pure white ink|white-ink)\b/i;

test('Paper 17 evaluators verify Theorem 1-3 thermodynamic budgets, substrate depth >= 2 gate, and Fisher-Rate-Distortion tradeoff', () => {
  const bioBudget = evaluateSelfModelingBudget({
    systemMicroBits: 1e9,
    subsystemCapacityBits: 1e6,
    latentManifoldBits: 64,
    temperatureK: 310,
    energyBudgetJ: 1e-12,
    stepWindowSec: 0.05
  });
  assert.equal(bioBudget.losslessPhysicallyPossible, false);
  assert.equal(bioBudget.forcedRegime, 'Lossy Thermodynamic Compression (Admissible)');
  assert.ok(bioBudget.compressionRatio > 1e6);

  const stalledBudget = evaluateSelfModelingBudget({
    systemMicroBits: 1e6,
    subsystemCapacityBits: 100,
    latentManifoldBits: 64,
    temperatureK: 310,
    energyBudgetJ: 1e-24,
    stepWindowSec: 0.05
  });
  assert.equal(stalledBudget.forcedRegime, 'Viable Real-Time Self-Model Exhausted (Stalled)');

  const bioLocus = evaluateCompressionLocus({
    dimSigma: 1e8,
    dimZ: 12,
    recursionDepth: 3,
    fisherCoupling: 0.85,
    substrateType: 'biological-neural'
  });
  assert.equal(bioLocus.instantiatesLocus, true);
  assert.equal(bioLocus.panpsychismBlocked, false);

  const siliconLocus = evaluateCompressionLocus({
    dimSigma: 5e6,
    dimZ: 16,
    recursionDepth: 2,
    fisherCoupling: 0.72,
    substrateType: 'synthetic-silicon'
  });
  assert.equal(siliconLocus.instantiatesLocus, true);

  const thermostat = evaluateCompressionLocus({
    dimSigma: 1000,
    dimZ: 2,
    recursionDepth: 1,
    fisherCoupling: 0.1,
    substrateType: 'thermostat-control'
  });
  assert.equal(thermostat.instantiatesLocus, false);
  assert.equal(thermostat.panpsychismBlocked, true);

  const passiveRock = evaluateCompressionLocus({
    dimSigma: 1e12,
    dimZ: 1,
    recursionDepth: 0,
    fisherCoupling: 0.0,
    substrateType: 'passive-matter'
  });
  assert.equal(passiveRock.instantiatesLocus, false);
  assert.equal(passiveRock.panpsychismBlocked, true);

  const rd = computeRateDistortionFisherTradeoff(0.25, 1.0, 310);
  assert.ok(rd.rateBitsR > 0);
  assert.ok(rd.fisherSensitivityG > 0);
  assert.ok(rd.falsificationMargin > 0);
});

test('Paper 17 monograph completeness: 7 authors, 34 dark muted shades, Chapters 1-8, Theorems 1-3, 21 references, and pure ASCII plainEquations', () => {
  assert.equal(MIND_META.authors.length, 7);
  assert.equal(MIND_34_SHADES.length, 34);
  const shadeHexes = new Set(MIND_34_SHADES.map((s) => s.hex.toUpperCase()));
  assert.equal(shadeHexes.size, 34, 'All 34 dark muted shades must have unique hex codes');

  assert.equal(MIND_ABSTRACT.length, 3);
  assert.equal(MIND_CORE_THESIS.elaboration.length, 3);
  assert.equal(TABLE_M1_CATEGORY_COMPARISON.length, 5);
  assert.equal(TABLE_M2_PUZZLE_DISSOLUTION.length, 5);
  assert.ok(TABLE_M3_SOUL_VS_LOCUS.length >= 4);
  assert.equal(TABLE_M4_FALSIFICATION_MATRIX.length, 4);

  assert.equal(MIND_CHAPTERS.length, 8);
  const expectedSubsectionsByChapter = [
    ['1.1', '1.2', '1.3', '1.4'],
    ['2.1', '2.2', '2.3'],
    ['3.1', '3.2', '3.3'],
    ['4.1', '4.2', '4.3'],
    ['5.1', '5.2', '5.3', '5.4'],
    ['6.1', '6.2', '6.3'],
    ['7.1', '7.2', '7.3', '7.4', '7.5'],
    ['8.1', '8.2', '8.3']
  ];
  MIND_CHAPTERS.forEach((ch, idx) => {
    assert.equal(ch.number, idx + 1);
    assert.deepEqual(
      ch.subsections.map((s) => s.number),
      expectedSubsectionsByChapter[idx],
      `Chapter ${ch.number} subsection numbers mismatch`
    );
  });

  assert.equal(MIND_APPENDICES.length, 5);
  assert.equal(MIND_REFERENCES.length, 21);
  assert.ok(MIND_SYMBOL_GLOSSARY.length >= 10);
  assert.ok(MIND_GLOSSARY.length >= 8);
  assert.ok(MIND_INDEX_OF_NAMES.length >= 20);
  assert.ok(MIND_INDEX_OF_CONCEPTS.length >= 20);

  const allEquations = [
    ...MIND_CHAPTERS.flatMap((ch) =>
      ch.subsections.flatMap((s) => [
        ...(s.equation ? [s.equation] : []),
        ...(s.workedExample ? [s.workedExample.resultEquation] : [])
      ])
    ),
    ...MIND_APPENDICES.flatMap((a) => a.equations)
  ];
  assert.ok(allEquations.length >= 12, `Expected >= 12 MindEquation objects, got ${allEquations.length}`);
  for (const eq of allEquations) {
    assert.ok(eq.plainEquation && eq.plainEquation.trim().length > 6, `Missing plainEquation on ${eq.label}`);
    assert.ok(!/[^\x00-\x7F]/.test(eq.plainEquation), `plainEquation on ${eq.label} must be pure ASCII: ${eq.plainEquation}`);
  }

  const fullText = [
    MIND_META.title,
    MIND_META.laymanDeck,
    MIND_META.methodologicalStance,
    ...MIND_ABSTRACT,
    ...MIND_CHAPTERS.flatMap((ch) => [
      ch.title,
      ch.epigraph,
      ch.pullQuote,
      ch.leadSummary,
      ...ch.chapterIntro,
      ...ch.subsections.flatMap((s) => [
        s.title,
        ...s.paragraphs,
        s.theoremBox?.statement ?? '',
        ...(s.theoremBox?.proofSteps ?? []),
        s.workedExample?.title ?? '',
        s.workedExample?.setup ?? '',
        ...(s.workedExample?.steps ?? []),
        s.workedExample?.takeaway ?? ''
      ])
    ]),
    ...MIND_APPENDICES.flatMap((a) => [a.title, a.summary, ...a.paragraphs]),
    ...MIND_GLOSSARY.map((g) => `${g.term} ${g.definition}`),
    ...MIND_REFERENCES.map((r) => r.citation)
  ].join(' ');

  assert.ok(fullText.includes('Theorem 1') || fullText.includes('Bounded Self-Modeling'), 'Missing Theorem 1');
  assert.ok(fullText.includes('Theorem 2') || fullText.includes('Forced Compression'), 'Missing Theorem 2');
  assert.ok(fullText.includes('Theorem 3') || fullText.includes('Metric Inheritance'), 'Missing Theorem 3');
  assert.ok(fullText.includes('Worked Calculation 3.1'), 'Missing Worked Calculation 3.1');
  assert.ok(fullText.includes('Worked Calculation 8.1'), 'Missing Worked Calculation 8.1');
  assert.ok(!/\b(20|twenty|200)[- ]?(expert|member)?\s*panel\b|\bpanel audit\b|\baudit score\b/i.test(fullText), 'Monograph must never mention an internal audit panel');
  assert.ok(!BANNED_STYLE_PATTERN.test(fullText), 'Monograph text contains banned stylistic label term');
});

test('Paper 17 has 30 full-page A4 plates (Plates I-XXX, >=2 per chapter) with valid .jpg or 896x1200 SVG assets and zero banned terms', () => {
  assert.equal(MIND_PLATES_META.length, 30);
  const plateIds = new Set(MIND_PLATES_META.map((p) => p.id));
  assert.equal(plateIds.size, 30);

  for (let ch = 1; ch <= 8; ch++) {
    const count = MIND_PLATES_META.filter((p) => p.anchorChapter === ch).length;
    assert.ok(count >= 2, `Expected Chapter ${ch} to have >= 2 plates, got ${count}`);
  }

  let jpgCount = 0;
  let svgCount = 0;
  for (const plate of MIND_PLATES_META) {
    assert.ok(/^#[0-9A-F]{6}$/i.test(plate.bgHex), `Invalid bgHex on ${plate.id}`);
    assert.ok(/^#[0-9A-F]{6}$/i.test(plate.accentHex), `Invalid accentHex on ${plate.id}`);
    assert.equal(plate.bgRgb.length, 3);
    assert.equal(plate.accentRgb.length, 3);
    assert.ok(plate.title.length > 8);
    assert.ok(plate.caption.length > 25);

    if (plate.imageFile) {
      jpgCount++;
      const assetPath = path.resolve('src/assets/images', plate.imageFile);
      assert.ok(fs.existsSync(assetPath), `Missing JPEG asset for ${plate.id}: ${assetPath}`);
    } else {
      svgCount++;
      assert.ok(plate.svgMarkup && plate.svgMarkup.includes('viewBox="0 0 896 1200"'), `Missing 896x1200 SVG for ${plate.id}`);
    }

    const plateText = `${plate.plateNumber} ${plate.hueGroup} ${plate.shadeName} ${plate.accentShadeName} ${plate.title} ${plate.caption}`;
    assert.ok(!BANNED_STYLE_PATTERN.test(plateText), `Banned label word in ${plate.id}: ${plateText}`);
  }

  assert.equal(jpgCount, 24);
  assert.equal(svgCount, 6);

  for (const shade of MIND_34_SHADES) {
    assert.ok(!BANNED_STYLE_PATTERN.test(`${shade.group} ${shade.name} ${shade.note}`), `Banned term in shade ${shade.name}`);
  }
});

test('Paper 17 HTML, Markdown, and pure 7-bit ASCII LaTeX exports compile cleanly with balanced braces and Plain Equations', () => {
  const html = buildMindCompressionSelfContainedHtml();
  assert.ok(html.includes(MIND_META.title));
  assert.ok(html.includes('Endogenous Perspectival Manifold'));
  assert.ok(html.includes('Plate XXX'));
  assert.ok(html.includes('Plain Equation:'));
  assert.ok(!BANNED_STYLE_PATTERN.test(html), 'Banned label word found in HTML export');

  const md = buildMindCompressionMarkdown();
  assert.ok(md.includes(`# ${MIND_META.title}`));
  assert.ok(md.includes('**Plain Equation:**'));
  assert.ok(md.includes('Plate XXX'));
  assert.ok(!BANNED_STYLE_PATTERN.test(md), 'Banned label word found in Markdown export');

  const tex = buildMindCompressionLatex();
  assert.ok(!/[^\x00-\x7F]/.test(tex), 'LaTeX export contains non-ASCII character');
  assert.ok(tex.includes('\\begin{document}') && tex.includes('\\end{document}'));
  assert.ok(tex.includes('\\textbf{Plain Equation:}'));
  assert.ok(tex.includes('Plate XXX'));
  assert.ok(!BANNED_STYLE_PATTERN.test(tex), 'Banned label word found in LaTeX export');

  const eqMatches = tex.match(/\\begin\{equation\}[\s\S]*?\\end\{equation\}/g) ?? [];
  assert.ok(eqMatches.length >= 12, `Expected >= 12 LaTeX equation blocks, got ${eqMatches.length}`);
  for (const eqBlock of eqMatches) {
    let depth = 0;
    for (let i = 0; i < eqBlock.length; i++) {
      if (eqBlock[i] === '\\' && (eqBlock[i + 1] === '{' || eqBlock[i + 1] === '}')) {
        i++;
        continue;
      }
      if (eqBlock[i] === '{') depth++;
      else if (eqBlock[i] === '}') depth--;
      assert.ok(depth >= 0, `Negative brace depth inside LaTeX equation: ${eqBlock}`);
    }
    assert.equal(depth, 0, `Unbalanced braces inside LaTeX equation: ${eqBlock}`);
  }
});

test('Paper 17 A4 PDF builds with zero blank pages, exact Page p of N footers, pruned TOC, and accurate TOC targets', async () => {
  const firstJpgPlate = MIND_PLATES_META.find((p) => p.imageFile);
  assert.ok(firstJpgPlate?.imageFile);
  const sampleJpg = fs.readFileSync(path.resolve('src/assets/images', firstJpgPlate.imageFile));
  const dataUrl = `data:image/jpeg;base64,${sampleJpg.toString('base64')}`;
  const plates = MIND_PLATES_META.map((m) => ({
    ...m,
    imagePath: '',
    dataUrlOverride: { dataUrl, aspect: 1.339, format: 'JPEG' as const }
  }));

  const doc = await buildMindCompressionPdfDocument(undefined, plates);
  const totalPages = doc.getNumberOfPages();
  assert.ok(totalPages >= 70, `Expected full Paper 17 monograph + 30 full-page plates >= 70 pages, got ${totalPages}`);

  const extractPageText = (pageNum: number): string => {
    const ops = (doc as unknown as { internal: { pages: Record<number, string[]> } }).internal.pages[pageNum];
    const joined = Array.isArray(ops) ? ops.join('\n') : String(ops ?? '');
    return (joined.match(/\(((?:\\.|[^\\)])*)\)\s*Tj/g) || [])
      .map((s) => s.replace(/^\(|\)\s*Tj$/g, '').replace(/\\([()\\])/g, '$1'))
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();
  };

  for (let p = 1; p <= totalPages; p++) {
    const ops = (doc as unknown as { internal: { pages: Record<number, string[]> } }).internal.pages[p];
    const joined = Array.isArray(ops) ? ops.join('\n') : String(ops ?? '');
    const tjCount = (joined.match(/\)\s*Tj|\]\s*TJ/g) || []).length;
    assert.ok(tjCount >= 14, `Blank or sparse overflow detected on page ${p} (tjCount=${tjCount})`);
    assert.ok(joined.includes(`Page ${p} of ${totalPages}`), `Missing footer page number on page ${p}`);
  }

  const coverText = extractPageText(1);
  assert.ok(coverText.includes('Thermodynamic Compression Artifact'));
  assert.ok(coverText.includes('Mirza Adnan Mohtashim'));
  assert.ok(extractPageText(2).includes('Abstract'), 'Abstract should appear on page 2');

  let tocStart = -1;
  for (let p = 3; p <= Math.min(6, totalPages); p++) {
    if (extractPageText(p).includes('Table of Contents')) {
      tocStart = p;
      break;
    }
  }
  assert.ok(tocStart >= 3 && tocStart <= 4, `Table of Contents should start on page 3 or 4, got ${tocStart}`);

  let tocPagesText = '';
  for (let p = tocStart; p <= Math.min(tocStart + 5, totalPages); p++) {
    const txt = extractPageText(p);
    if (!txt.includes('Table of Contents')) break;
    tocPagesText += ` ${txt}`;
  }
  tocPagesText = tocPagesText.trim();
  assert.ok(tocPagesText.includes('Table of Contents'), 'Missing Table of Contents heading');
  const tocBodyText = tocPagesText.replace(/^Table of Contents\s+/, '');

  const expectTocTarget = (labelSnippet: string, expectedHeading: string) => {
    const escaped = labelSnippet.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\-|–/g, '[–-]');
    const match = tocBodyText.match(new RegExp(`${escaped}\\s+(\\d+)`));
    assert.ok(match, `Missing TOC entry matching "${labelSnippet}" in TOC body: ${tocBodyText.slice(0, 300)}`);
    const targetPage = Number(match[1]);
    assert.ok(targetPage >= 2 && targetPage <= totalPages, `Invalid TOC target page ${targetPage} for ${labelSnippet}`);
    assert.ok(
      extractPageText(targetPage).includes(expectedHeading),
      `TOC pointer mismatch for "${labelSnippet}": pointed to page ${targetPage}, but page text was "${extractPageText(targetPage).slice(0, 140)}"`
    );
  };

  expectTocTarget('Abstract', 'Abstract');
  expectTocTarget('Table of Contents', 'Table of Contents');
  expectTocTarget('List of Full-Page Illustrations (Plates I-XXX)', 'List of Full-Page Illustrations');
  expectTocTarget(`Chapter 1: ${MIND_CHAPTERS[0].title}`, 'Chapter 1:');
  expectTocTarget(`Chapter 8: ${MIND_CHAPTERS[7].title}`, 'Chapter 8:');
  expectTocTarget('Appendix A: Formal Proofs and Mathematical Definitions', 'Appendix A:');
  expectTocTarget('Glossary', 'Glossary');
  expectTocTarget('References', 'References');
  expectTocTarget('Index of Names', 'Index of Names');
  expectTocTarget('Index of Concepts', 'Index of Concepts');
});
