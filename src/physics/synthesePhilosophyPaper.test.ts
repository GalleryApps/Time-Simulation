/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Deterministic Verification Suite for Paper 15 (Synthese Journal):
 * "Where or Who Is the Observer? The Observer in Phenomenology,
 *  Quantum Foundations, and Systems Theory"
 *
 * - 40-Shade Color Palette integrity
 * - Formal philosophical-logic & S4 reductio evaluators across A1-A4 and 4 traditions
 * - ISO 7064 Mod 11-2 ORCID verification across all author records
 * - 9-Chapter architectural completeness (§§0.1–0.2, §§1–15, §15a, §§16–43 = 46 subsections) and 4 Appendices (A–D)
 * - Master 32-Position Matrix (§§2–33 × A1–A4), Table of Axioms, Roadmap, Notation Table, Table 8.4, Argument Map, Indexes
 * - Single-epigraph chapter openings, 7-bit ASCII LaTeX parity audit, and 11 Full-Page A4 Dark Blue SVGs
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PALETTE_40_SHADES,
  SHADE_BY_ID,
  evaluatePhilosophicalConsistency,
  evaluateCrossTraditionBridge,
  evaluateAllenThickPresent,
  evaluateNoGoTheorem51,
  evaluateSitFunctor,
  computeMatrixSummary,
  type TraditionKey
} from './synthesePhilosophyPaper.ts';
import {
  SYNTHESE_META,
  SYNTHESE_ABSTRACT,
  SYNTHESE_AXIOM_TABLE,
  SYNTHESE_INDEPENDENCE_MODELS,
  SYNTHESE_HOW_TO_READ,
  SYNTHESE_ROADMAP,
  SYNTHESE_NOTATION_TABLE,
  TABLE_8_4_AUXILIARY_ASSUMPTIONS,
  SYNTHESE_ARGUMENT_MAP,
  SYNTHESE_32_MATRIX,
  SYNTHESE_CHAPTERS,
  SYNTHESE_APPENDICES,
  SYNTHESE_GLOSSARY,
  SYNTHESE_SYMBOL_GLOSSARY,
  SYNTHESE_REFERENCES,
  SYNTHESE_INDEX_OF_NAMES,
  SYNTHESE_INDEX_OF_CONCEPTS
} from '../types/synthesePaperData.ts';
import { SYNTHESE_FIGURES } from '../types/synthesePaperFigures.ts';
import {
  buildSyntheseSelfContainedHtml,
  buildSyntheseMarkdown,
  buildSyntheseLatex
} from '../utils/generateSynthesePaperExports.ts';
import {
  P15_EXPERT_60_PROFILES,
  P15_RECOMMENDATIONS_250,
  P15_SUBPANEL_60_SUMMARIES,
  P15_PANEL_60_TOTALS,
  buildPanel60P15MarkdownReport
} from '../types/panel60P15Review.ts';

function isValidOrcid(orcid: string): boolean {
  const digits = orcid.replace(/-/g, '');
  if (!/^0000000\d{8}[\dX]$/.test(digits)) return false;
  let total = 0;
  for (let i = 0; i < 15; i++) {
    total = (total + Number(digits[i])) * 2;
  }
  const rem = total % 11;
  const res = (12 - rem) % 11;
  const check = res === 10 ? 'X' : String(res);
  return digits[15] === check;
}

test('40-Shade Palette contains 40 unique hex/RGB shades across all 6 families', () => {
  assert.equal(PALETTE_40_SHADES.length, 40);
  const hexes = new Set(PALETTE_40_SHADES.map((s) => s.hex.toUpperCase()));
  assert.equal(hexes.size, 40, 'All 40 hex codes must be distinct');
  for (const s of PALETTE_40_SHADES) {
    assert.match(s.hex, /^#[0-9A-F]{6}$/i);
    assert.equal(SHADE_BY_ID[s.id]?.hex, s.hex);
  }
  const families = new Set(PALETTE_40_SHADES.map((s) => s.family));
  for (const f of [
    'Dark Blue Core',
    'Slate Blue',
    'Slate Gray Blue',
    'Deep Sea Blue-Green',
    'Muted Blue-Green',
    'Frost & Mist Slate'
  ]) {
    assert.ok(families.has(f as typeof PALETTE_40_SHADES[number]['family']), `Missing palette family: ${f}`);
  }
});

test('Author ORCIDs conform to standard 0000-000X prefix and ISO 7064 Mod 11-2 check digit', () => {
  let orcidCount = 0;
  for (const author of SYNTHESE_META.authors) {
    if (author.orcid) {
      orcidCount++;
      assert.ok(isValidOrcid(author.orcid), `Invalid ORCID check digit or prefix for ${author.name}: ${author.orcid}`);
      assert.equal(author.orcidUrl, `https://orcid.org/${author.orcid}`);
    }
  }
  assert.equal(orcidCount, 4);
});

test('Philosophical logic evaluator enforces A1-A4 necessity via Unicode S4 reductio and bridges all traditions', () => {
  const full = {
    perspectivalImmanence: true,
    relationalParity: true,
    operationalBoundary: true,
    asymmetricSelfAffection: true
  };

  const resolved = evaluatePhilosophicalConsistency(full, 'phenomenology');
  assert.equal(resolved.consistentSynthesis, true);
  assert.equal(resolved.axiomsSatisfiedCount, 4);
  assert.equal(resolved.paradoxStatus, 'Resolved: Situated Perspective Without Global Privilege');
  assert.equal(resolved.triggeredReductios.length, 0);
  assert.equal(resolved.violatesStratification, false);
  assert.ok(resolved.formalInferenceChain.length >= 4);

  const dropA1 = evaluatePhilosophicalConsistency({ ...full, perspectivalImmanence: false }, 'quantum-foundations');
  assert.equal(dropA1.consistentSynthesis, false);
  assert.equal(dropA1.paradoxStatus, 'Reductio: Archimedean Regress (Objectification Antinomy)');
  assert.equal(dropA1.triggeredReductios.length, 1);
  assert.ok(dropA1.matchingCountermodel.includes('M_~A1'));
  assert.ok(dropA1.formalInferenceChain.join(' ').includes('⊢') && dropA1.formalInferenceChain.join(' ').includes('⊥'));

  const dropA2 = evaluatePhilosophicalConsistency({ ...full, relationalParity: false }, 'phenomenology');
  assert.equal(dropA2.paradoxStatus, 'Reductio: Solipsistic Privilege (Intersubjective Collapse)');
  assert.ok(dropA2.matchingCountermodel.includes('M_~A2'));
  assert.ok(dropA2.formalInferenceChain.join(' ').includes('⊢') && dropA2.formalInferenceChain.join(' ').includes('⊥'));

  const dropA3 = evaluatePhilosophicalConsistency({ ...full, operationalBoundary: false }, 'systems-enaction');
  assert.equal(dropA3.paradoxStatus, 'Reductio: Unbounded Indistinction (Infinite Boundary Regress)');
  assert.equal(dropA3.violatesStratification, true);
  assert.ok(dropA3.matchingCountermodel.includes('M_~A3'));
  assert.ok(dropA3.formalInferenceChain.join(' ').includes('⊢') && dropA3.formalInferenceChain.join(' ').includes('⊥'));

  const modelNotA3 = evaluatePhilosophicalConsistency({ ...full, operationalBoundary: false, asymmetricSelfAffection: false }, 'systems-enaction');
  assert.equal(modelNotA3.violatesStratification, false);
  assert.equal(modelNotA3.matchingCountermodel, 'M_~A3 (Cut-Free Continuum Field · Table 7.2)');

  const dropA4 = evaluatePhilosophicalConsistency({ ...full, asymmetricSelfAffection: false }, 'deconstruction');
  assert.equal(dropA4.paradoxStatus, 'Reductio: Punctual Freeze (Absence of Living Present)');
  assert.equal(dropA4.violatesStratification, false);
  assert.ok(dropA4.matchingCountermodel.includes('M_~A4'));
  assert.ok(dropA4.formalInferenceChain.join(' ').includes('⊢') && dropA4.formalInferenceChain.join(' ').includes('⊥'));

  const dropCompound = evaluatePhilosophicalConsistency(
    { perspectivalImmanence: false, relationalParity: false, operationalBoundary: true, asymmetricSelfAffection: false },
    'phenomenology'
  );
  assert.equal(dropCompound.triggeredReductios.length, 3);

  const traditions: TraditionKey[] = ['phenomenology', 'deconstruction', 'quantum-foundations', 'systems-enaction'];
  for (const t1 of traditions) {
    for (const t2 of traditions) {
      const bridge = evaluateCrossTraditionBridge(t1, t2);
      assert.ok(bridge.sharedProblem.length > 10);
      assert.ok(bridge.deductiveBridge.includes('⊢'));
      assert.ok(bridge.unifiedThesis.length > 20);
    }
  }

  const varelaNow = evaluateAllenThickPresent(150, 420, 280);
  assert.equal(varelaNow.isCoherentTemporalObservation, true);
  assert.equal(varelaNow.overlapsHolds, true);
  assert.equal(varelaNow.meetsHolds, true);
  assert.ok(varelaNow.totalHorizonMs >= 700);
  assert.ok(varelaNow.bandClassification.includes('Varela–Pöppel'));

  const pointCollapse = evaluateAllenThickPresent(0, 0, 0);
  assert.equal(pointCollapse.isZeroWidthDegenerate, true);
  assert.equal(pointCollapse.isCoherentTemporalObservation, false);
  assert.ok(pointCollapse.bandClassification.includes('Temporal Freeze'));

  for (const src of ['Phen', 'Quant', 'Sys'] as const) {
    const sit = evaluateSitFunctor(src);
    assert.ok(sit.objectsDefinition.startsWith('Ob('));
    assert.ok(sit.morphismsDefinition.startsWith('Hom('));
    assert.equal(sit.axiomMappings.length, 4);
    assert.ok(sit.functorLaws.join(' ').includes('∘'));
  }

  const summary = computeMatrixSummary(SYNTHESE_32_MATRIX);
  assert.equal(summary.totalPositions, 32);
  assert.ok(summary.fullConvergenceCount > 0 && summary.fullConvergenceCount <= 32);
  for (const ax of ['a1', 'a2', 'a3', 'a4'] as const) {
    const c = summary.axiomCounts[ax];
    assert.equal(c.full + c.partial + c.anomaly, 32);
  }

  const statNoGo = evaluateNoGoTheorem51(0.85, 0.714);
  assert.equal(statNoGo.statisticalClauseTriggered, true);
  assert.equal(statNoGo.deterministicSatisfied, false);
  assert.ok(Math.abs(statNoGo.statisticalLowerBound - 0.7) < 1e-6);
  assert.equal(statNoGo.doplicherLongoSplitRequired, true);
  assert.ok(statNoGo.verdict.includes('Statistical Clause'));

  const detNoGo = evaluateNoGoTheorem51(1.0, 0.0);
  assert.equal(detNoGo.deterministicSatisfied, true);
  assert.equal(detNoGo.statisticalClauseTriggered, true);
  assert.equal(detNoGo.statisticalLowerBound, 1.0);
  assert.ok(detNoGo.verdict.includes('Deterministic Clause'));

  const nullNoGo = evaluateNoGoTheorem51(0.4, 0.0);
  assert.equal(nullNoGo.statisticalClauseTriggered, false);
  assert.equal(nullNoGo.deterministicSatisfied, false);
  assert.equal(nullNoGo.statisticalLowerBound, 0);
  assert.ok(nullNoGo.verdict.includes('Null Signalling Regime'));
});

test('Paper 15 9-chapter treatise completeness (§§0.1-43), 32-position matrix, front/back apparatus, and unified schemas', () => {
  assert.equal(SYNTHESE_META.authors.length, 6);
  assert.equal(SYNTHESE_ABSTRACT.length, 2);
  assert.equal(SYNTHESE_CHAPTERS.length, 9);
  for (let idx = 0; idx < SYNTHESE_CHAPTERS.length; idx++) {
    assert.equal(SYNTHESE_CHAPTERS[idx].id, `chapter-${idx + 1}`);
    assert.ok(SYNTHESE_CHAPTERS[idx].epigraph.trim().length > 10);
  }

  assert.equal(SYNTHESE_AXIOM_TABLE.length, 4);
  assert.deepEqual(
    SYNTHESE_AXIOM_TABLE.map((a) => a.code),
    ['A1', 'A2', 'A3', 'A4']
  );
  assert.equal(SYNTHESE_HOW_TO_READ.length, 3);
  assert.ok(SYNTHESE_ROADMAP.length >= 9);
  assert.ok(SYNTHESE_NOTATION_TABLE.length >= 8);
  assert.equal(TABLE_8_4_AUXILIARY_ASSUMPTIONS.length, 4);
  assert.equal(SYNTHESE_ARGUMENT_MAP.nodes.length, 5);
  assert.equal(SYNTHESE_32_MATRIX.length, 32);
  for (let n = 2; n <= 33; n++) {
    const row = SYNTHESE_32_MATRIX[n - 2];
    assert.equal(row.section, `§${n}`);
    for (const v of [row.a1, row.a2, row.a3, row.a4]) {
      assert.ok(v === '✓' || v === '✗' || v === 'partial');
    }
  }

  const chapter1 = SYNTHESE_CHAPTERS[0];
  assert.equal(chapter1.subsections[0].number, '0.1');
  assert.equal(chapter1.subsections[1].number, '0.2');
  assert.equal(chapter1.subsections[2].number, '1');
  const introText = [...chapter1.chapterIntro, ...chapter1.subsections[2].paragraphs].join(' ');
  assert.ok(introText.includes('Aristotle') && introText.includes('Kant') && introText.includes('Bohr'));
  assert.ok(introText.includes('Epistemology') && introText.includes('Ethics') && introText.includes('Cognitive Science'));

  const expectedSections: string[] = ['0.1', '0.2'];
  for (let i = 1; i <= 15; i++) expectedSections.push(String(i));
  expectedSections.push('15a');
  for (let i = 16; i <= 43; i++) expectedSections.push(String(i));

  const actualSections: string[] = [];
  for (const ch of SYNTHESE_CHAPTERS) {
    for (const sub of ch.subsections) actualSections.push(sub.number);
  }
  assert.deepEqual(actualSections, expectedSections);

  assert.ok(SYNTHESE_GLOSSARY.length >= 32);
  assert.ok(SYNTHESE_SYMBOL_GLOSSARY.length >= 16);
  assert.equal(SYNTHESE_INDEPENDENCE_MODELS.length, 4);
  assert.equal(SYNTHESE_APPENDICES.length, 4);
  assert.ok(SYNTHESE_APPENDICES[0].theoremBoxes && SYNTHESE_APPENDICES[0].theoremBoxes.length >= 1);
  assert.ok(SYNTHESE_REFERENCES.length >= 140);
  assert.ok(SYNTHESE_INDEX_OF_NAMES.length >= 30);
  assert.ok(SYNTHESE_INDEX_OF_CONCEPTS.length >= 20);
  assert.ok(SYNTHESE_META.authors.some((a) => a.email === 'walter.goldberger@yale.edu'));

  let eqCount = 0;
  for (const ch of SYNTHESE_CHAPTERS) {
    for (const sub of ch.subsections) {
      if (sub.equation) {
        eqCount++;
        assert.ok(sub.equation.unicodeHtml.trim().length > 5);
        assert.equal(sub.equation.plainMath, undefined, `Redundant plainMath must be omitted on ${sub.equation.label}`);
      }
      if (sub.workedExample) {
        eqCount++;
        assert.equal(sub.workedExample.resultEquation.plainMath, undefined);
      }
    }
  }
  for (const app of SYNTHESE_APPENDICES) {
    for (const eq of app.equations) {
      eqCount++;
      assert.equal(eq.plainMath, undefined);
    }
  }
  assert.ok(eqCount >= 16);
});

test('Paper 15 HTML, Markdown, and Pure 7-bit ASCII LaTeX exports include Chapters 1-9, Table 8.4, Prop A.1, Appendix D, and zero panel leakage', () => {
  const html = buildSyntheseSelfContainedHtml();
  assert.ok(!html.includes('Symbolic Form:'));
  assert.ok(!html.includes('Plain Math Equation:'));
  assert.ok(!html.includes('Editorial Opening'));
  assert.ok(!html.includes('Provenance:'));
  assert.ok(!html.includes('Paper 15 · Synthese Monograph'));
  assert.ok(!html.includes('Resolving the Constitutive-Absence Paradox Across Kant, Husserl, Derrida, Bohr'));
  assert.ok(!html.includes('class="pull-quote"'), 'Chapter header must contain only the single epigraph');
  assert.ok(!html.includes(SYNTHESE_CHAPTERS[0].pullQuote), 'Chapter header must omit pullQuote');
  assert.ok(!html.includes(SYNTHESE_CHAPTERS[0].leadSummary), 'Chapter header must omit leadSummary');
  assert.ok(html.includes(SYNTHESE_CHAPTERS[0].epigraph.slice(0, 40)), 'Chapter header must include single epigraph');
  assert.ok(!html.includes('<h2>Part 1:'), 'HTML must use Chapter 1 instead of Part 1');
  assert.ok(html.includes('Chapter 1:'));
  assert.ok(html.includes('Chapter 9:'));
  assert.ok(html.includes('Logical Schema'));
  assert.ok(html.includes('Table of Axioms (A1–A4)'));
  assert.ok(html.includes('How to Read This Treatise'));
  assert.ok(html.includes('Table 7.2'));
  assert.ok(html.includes('Table 8.4'));
  assert.ok(html.includes('Proposition A.1'));
  assert.ok(html.includes('Appendix D'));
  assert.ok(html.includes('No-Go Theorem 5.1'));
  assert.ok(html.includes('§43'));
  assert.ok(html.includes('walter.goldberger@yale.edu'));
  assert.ok(html.includes('Table 8.1'));
  assert.ok(html.includes('Table 8.3'));
  assert.ok(html.includes('Index of Names'));
  assert.ok(html.includes('Index of Concepts'));

  const md = buildSyntheseMarkdown();
  assert.ok(!md.includes('Symbolic Form:'));
  assert.ok(!md.includes('## Part 1:'));
  assert.ok(md.includes('## Chapter 1:'));
  assert.ok(md.includes('## Chapter 9:'));
  assert.ok(md.includes('Table 7.2'));
  assert.ok(md.includes('Table 8.3'));
  assert.ok(md.includes('Table 8.4'));
  assert.ok(md.includes('Logical Symbols & Axioms'));
  assert.ok(md.includes('Proposition A.1'));
  assert.ok(md.includes('Appendix D'));
  assert.ok(md.includes('No-Go Theorem 5.1'));
  assert.ok(md.includes('§43'));
  assert.ok(md.includes('## Index of Names'));
  assert.ok(md.includes('## Index of Concepts'));
  assert.ok(md.includes('**Logical Schema'));

  const tex = buildSyntheseLatex();
  assert.ok(!/[^\x00-\x7F]/.test(tex), 'LaTeX export must remain strictly 7-bit ASCII');
  assert.ok(!/\\sqrt\s*\(/.test(tex), 'Zero unbraced \\sqrt(...) allowed in LaTeX');
  assert.ok(tex.includes('\\begin{document}') && tex.includes('\\end{document}'));
  assert.ok(!tex.includes('\\textbf{Symbolic Form:}'));
  assert.ok(!tex.includes('\\textbf{Plain Math Equation:}'));
  assert.ok(!tex.includes('Editorial Opening'));
  assert.ok(!tex.includes('\\section{Part 1:'));
  assert.ok(tex.includes('\\section{Chapter 1:'));
  assert.ok(tex.includes('\\section{Chapter 9:'));
  assert.ok(tex.includes('\\checkmark'));
  assert.ok(tex.includes('Table 7.2'));
  assert.ok(tex.includes('Table 8.4'));
  assert.ok(tex.includes('Proposition A.1'));
  assert.ok(tex.includes('Appendix D'));
  assert.ok(tex.includes('29 Full-Page A4 Illustrations'));
  assert.ok(tex.includes('Index of Names'));
  assert.ok(tex.includes('Index of Concepts'));

  // Silent implementation check: Paper 15 exports must never mention review panels, stress tests, or REC15 IDs
  const forbiddenRe = /\b(60-expert|250 recommendations|100 recommendations|stress[- ]?test|rec15-\d+|sub-panel)\b/i;
  for (const [label, blob] of [
    ['HTML', html],
    ['Markdown', md],
    ['LaTeX', tex]
  ] as const) {
    assert.ok(!forbiddenRe.test(blob), `${label} export leaked forbidden review terminology`);
    assert.ok(!/\bpanel\b/i.test(blob), `${label} export must not contain the word "panel"`);
  }

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

test('Paper 15 11 SVG figures + 18 plates = 29 full-page A4 illustrations in Dark Blue / Slate / Blue-Green palette', () => {
  assert.equal(SYNTHESE_FIGURES.length, 11);
  const allowedPaletteHexes = new Set(['#08182E', '#F0F6FA', ...PALETTE_40_SHADES.map((s) => s.hex.toUpperCase())]);
  for (const fig of SYNTHESE_FIGURES) {
    const vb = fig.svgMarkup.match(/viewBox="0 0 (\d+) (\d+)"/);
    assert.ok(vb, `Figure ${fig.figureNumber} missing viewBox`);
    const vbW = Number(vb[1]);
    const vbH = Number(vb[2]);
    assert.ok(vbH > vbW, `${fig.figureNumber} must have portrait A4 dimensions`);
    const ratio = vbW / vbH;
    assert.ok(Math.abs(ratio - 210 / 297) < 0.02, `${fig.figureNumber} aspect ${ratio.toFixed(4)} must match A4 (0.7071)`);

    const hexColors = new Set(
      [...fig.svgMarkup.matchAll(/#[0-9A-Fa-f]{6}/g)].map((m) => m[0].toUpperCase())
    );
    assert.ok(hexColors.has('#08182E'), `${fig.figureNumber} must use Dark Blue core background #08182E`);
    assert.ok(hexColors.has('#F0F6FA'), `${fig.figureNumber} must use Frost ice white ink #F0F6FA`);
    for (const hex of hexColors) {
      assert.ok(allowedPaletteHexes.has(hex), `${fig.figureNumber} contains off-palette hex ${hex}`);
    }
    assert.ok(!hexColors.has('#EA580C'), `${fig.figureNumber} should not contain bright orange #EA580C`);
    assert.ok(!hexColors.has('#661447'), `${fig.figureNumber} should not contain dark plum #661447`);

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

test('Paper 15 60-expert / 250-recommendation panel integrity and 1-20 perfect remediation totals', () => {
  assert.equal(P15_EXPERT_60_PROFILES.length, 60);
  assert.equal(P15_RECOMMENDATIONS_250.length, 250);
  assert.equal(P15_SUBPANEL_60_SUMMARIES.length, 10);

  const expertIds = new Set(P15_EXPERT_60_PROFILES.map((e) => e.expertId));
  const recIds = new Set(P15_RECOMMENDATIONS_250.map((r) => r.recommendationId));
  assert.equal(expertIds.size, 60);
  assert.equal(recIds.size, 250);
  assert.equal(P15_EXPERT_60_PROFILES[0].expertId, 'E15-001');
  assert.equal(P15_EXPERT_60_PROFILES[59].expertId, 'E15-060');
  assert.equal(P15_RECOMMENDATIONS_250[0].recommendationId, 'REC15-001');
  assert.equal(P15_RECOMMENDATIONS_250[249].recommendationId, 'REC15-250');

  for (const ex of P15_EXPERT_60_PROFILES) {
    assert.equal(ex.maxScore, 20);
    assert.ok(ex.scoreBefore >= 1 && ex.scoreBefore < 20);
    assert.equal(ex.scoreAfter, 20.0);
    assert.ok(ex.recommendationIds.length === 4 || ex.recommendationIds.length === 5);
  }
  for (const sp of P15_SUBPANEL_60_SUMMARIES) {
    assert.equal(sp.expertCount, 6);
    assert.equal(sp.recCount, 25);
    assert.equal(sp.maxScore, 120);
    assert.equal(sp.scoreAfter, 120.0);
    assert.equal(sp.pctAfter, 100.0);
  }
  assert.equal(P15_PANEL_60_TOTALS.totalExperts, 60);
  assert.equal(P15_PANEL_60_TOTALS.totalRecommendations, 250);
  assert.equal(P15_PANEL_60_TOTALS.appliedCount, 250);
  assert.equal(P15_PANEL_60_TOTALS.maxScore, 1200);
  assert.equal(P15_PANEL_60_TOTALS.scoreAfter, 1200.0);
  assert.equal(P15_PANEL_60_TOTALS.pctAfter, 100.0);

  const mdReport = buildPanel60P15MarkdownReport();
  assert.ok(mdReport.includes('E15-060'));
  assert.ok(mdReport.includes('REC15-250'));
  assert.ok(mdReport.includes('1200.0 / 1200 (100.0%'));
});
