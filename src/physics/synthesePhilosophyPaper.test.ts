/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Deterministic Verification Suite for Paper 15 (Synthese Journal):
 * - 40-Shade Color Palette integrity
 * - Formal epistemology / philosophy-of-physics calculators
 * - Pure ASCII plainMath verification on every equation
 * - Pure 7-bit ASCII LaTeX brace/environment/sqrt parity audit
 * - SVG text viewBox bounds check
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PALETTE_40_SHADES,
  SHADE_BY_ID,
  evaluateConventionalismSplit,
  evaluateMoritaEquivalence,
  computeBayesianEpistemicComparison,
  evaluateChentsovPetzFamily
} from './synthesePhilosophyPaper.ts';
import {
  SYNTHESE_META,
  SYNTHESE_ABSTRACT,
  SYNTHESE_CHAPTERS,
  SYNTHESE_APPENDICES,
  SYNTHESE_GLOSSARY,
  SYNTHESE_SYMBOL_GLOSSARY,
  SYNTHESE_REFERENCES
} from '../types/synthesePaperData.ts';
import { SYNTHESE_FIGURES } from '../types/synthesePaperFigures.ts';
import {
  buildSyntheseSelfContainedHtml,
  buildSyntheseMarkdown,
  buildSyntheseLatex
} from '../utils/generateSynthesePaperExports.ts';

test('40-Shade Palette contains 40 unique hex/RGB shades across all 6 families', () => {
  assert.equal(PALETTE_40_SHADES.length, 40);
  const hexes = new Set(PALETTE_40_SHADES.map((s) => s.hex.toUpperCase()));
  assert.equal(hexes.size, 40, 'All 40 hex codes must be distinct');
  for (const s of PALETTE_40_SHADES) {
    assert.match(s.hex, /^#[0-9A-F]{6}$/i);
    assert.equal(SHADE_BY_ID[s.id]?.hex, s.hex);
  }
  const families = new Set(PALETTE_40_SHADES.map((s) => s.family));
  for (const f of ['Ecru', 'Orange', 'Dark Magenta', 'Dark Teal', 'Pine Green', 'Complementary']) {
    assert.ok(families.has(f as typeof PALETTE_40_SHADES[number]['family']));
  }
});

test('Conventionalism, Morita, Petz, and Bayesian MDL calculators satisfy formal identities', () => {
  const scalar = evaluateConventionalismSplit(0.0);
  assert.ok(Math.abs(scalar.photonDeflectionArcsec - 0.87525) < 1e-4);
  assert.equal(scalar.differentialForceRequired, true);
  assert.equal(scalar.epistemicVerdict, 'Universal-Force Failure (Underdetermination Broken)');

  const covariant = evaluateConventionalismSplit(1.0);
  assert.ok(Math.abs(covariant.photonDeflectionArcsec - 1.7505) < 1e-4);
  assert.equal(covariant.differentialForceRequired, false);
  assert.equal(covariant.epistemicVerdict, 'Empirical Equivalence Holds');

  const moritaExt = evaluateMoritaEquivalence(2.5, 0.01);
  assert.ok(moritaExt.exteriorMetricOverlap > 0.999);
  assert.equal(moritaExt.categoricalStatus, 'Morita Equivalent Exterior');

  const moritaCore = evaluateMoritaEquivalence(0.1, 0.15);
  assert.equal(moritaCore.categoricalStatus, 'Strong-Field Structural Divergence');

  const bayesNull = computeBayesianEpistemicComparison(1200, 0.5, 0);
  const scalarModel = bayesNull.find((b) => b.modelId === 'scalar-luh')!;
  assert.ok(scalarModel.logEvidenceRelativeToGR < -1e8);
  const regNull = bayesNull.find((b) => b.modelId === 'dual-igrt-core')!;
  assert.ok(regNull.logEvidenceRelativeToGR < 0);

  const bayesEcho5 = computeBayesianEpistemicComparison(1200, 5.0, 0);
  const reg5 = bayesEcho5.find((b) => b.modelId === 'dual-igrt-core')!;
  assert.ok(reg5.logEvidenceRelativeToGR > 8.0, '5-sigma echo should decisively surpass Occam debt');

  const petz = evaluateChentsovPetzFamily(11);
  assert.equal(petz.length, 11);
  assert.ok(petz[5].bkmMetricWeight > 0.99 && petz[5].geodesicInvarianceDeviation < 1e-9);
});

test('Paper 15 structural completeness and pure ASCII plainMath on all equations', () => {
  assert.equal(SYNTHESE_META.authors.length, 6);
  assert.equal(SYNTHESE_ABSTRACT.length, 1);
  assert.equal(SYNTHESE_CHAPTERS.length, 9);
  assert.ok(SYNTHESE_GLOSSARY.length >= 10);
  assert.ok(SYNTHESE_SYMBOL_GLOSSARY.length >= 8);
  assert.equal(SYNTHESE_APPENDICES.length, 5);
  assert.ok(SYNTHESE_REFERENCES.length >= 40);

  const eqs: Array<{ label: string; plainMath: string }> = [];
  for (const ch of SYNTHESE_CHAPTERS) {
    for (const sub of ch.subsections) {
      if (sub.equation) eqs.push(sub.equation);
      if (sub.workedExample) eqs.push(sub.workedExample.resultEquation);
    }
  }
  for (const app of SYNTHESE_APPENDICES) {
    for (const eq of app.equations) eqs.push(eq);
  }
  assert.ok(eqs.length >= 10);
  for (const eq of eqs) {
    assert.ok(eq.plainMath.trim().length > 5, `Equation ${eq.label} missing plainMath`);
    assert.ok(!/[^\x20-\x7E]/.test(eq.plainMath), `Equation ${eq.label} plainMath has non-ASCII characters`);
  }
});

test('Paper 15 HTML, Markdown, and Pure 7-bit ASCII LaTeX exports compile cleanly', () => {
  const html = buildSyntheseSelfContainedHtml();
  assert.ok(html.includes('Plain Math Equation:'));
  assert.ok(html.includes('Bounded Exterior Morita Structuralism'));

  const md = buildSyntheseMarkdown();
  assert.ok(md.includes('## Chapter 1:'));
  assert.ok(md.includes('## Appendix E:'));

  const tex = buildSyntheseLatex();
  assert.ok(!/[^\x00-\x7F]/.test(tex), 'LaTeX export must remain strictly 7-bit ASCII');
  assert.ok(!/\\sqrt\s*\(/.test(tex), 'Zero unbraced \\sqrt(...) allowed in LaTeX');
  assert.ok(tex.includes('\\begin{document}') && tex.includes('\\end{document}'));
  assert.ok(tex.includes('\\textbf{Plain Math Equation:}'));

  // Brace balance check (ignoring escaped \{ and \})
  const stripped = tex.replace(/\\[{}$]/g, '');
  let braceDepth = 0;
  for (const ch of stripped) {
    if (ch === '{') braceDepth++;
    else if (ch === '}') braceDepth--;
    assert.ok(braceDepth >= 0, 'Unmatched closing brace in LaTeX');
  }
  assert.equal(braceDepth, 0, 'Unclosed opening brace in LaTeX');
});

test('Paper 15 SVG vector figures keep all text anchors inside safe viewBox margins', () => {
  for (const fig of SYNTHESE_FIGURES) {
    const vb = fig.svgMarkup.match(/viewBox="0 0 (\d+) (\d+)"/);
    assert.ok(vb, `Figure ${fig.figureNumber} missing viewBox`);
    const vbW = Number(vb[1]);
    const vbH = Number(vb[2]);
    const textMatches = [...fig.svgMarkup.matchAll(/<text\b([^>]*)>/g)];
    assert.ok(textMatches.length >= 3);
    for (const m of textMatches) {
      const attrs = m[1];
      const x = Number(attrs.match(/\bx="([0-9.]+)"/)?.[1] ?? '0');
      const y = Number(attrs.match(/\by="([0-9.]+)"/)?.[1] ?? '0');
      assert.ok(x >= 12 && x <= vbW - 12, `${fig.figureNumber} text x=${x} near edge of width ${vbW}`);
      assert.ok(y >= 16 && y <= vbH - 10, `${fig.figureNumber} text y=${y} near edge of height ${vbH}`);
    }
  }
});
