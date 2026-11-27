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
 * - 9-Part architectural completeness (§§0.1–0.2, §§1–15, §15a, §§16–42 = 45 subsections)
 * - Master 32-Position Matrix (§§2–33 × A1–A4), Table of Axioms, How to Read, Argument Map, Indexes, 71+ References
 * - Removal of redundant Symbolic Form lines & pure 7-bit ASCII LaTeX brace/environment/sqrt parity audit
 * - Restrained SVG tonal discipline & text viewBox bounds check
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PALETTE_40_SHADES,
  SHADE_BY_ID,
  evaluatePhilosophicalConsistency,
  evaluateCrossTraditionBridge,
  type TraditionKey
} from './synthesePhilosophyPaper.ts';
import {
  SYNTHESE_META,
  SYNTHESE_ABSTRACT,
  SYNTHESE_AXIOM_TABLE,
  SYNTHESE_HOW_TO_READ,
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
  for (const f of ['Ecru', 'Orange', 'Dark Magenta', 'Dark Teal', 'Pine Green', 'Complementary']) {
    assert.ok(families.has(f as typeof PALETTE_40_SHADES[number]['family']));
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
  assert.ok(resolved.formalInferenceChain.length >= 4);

  const dropA1 = evaluatePhilosophicalConsistency({ ...full, perspectivalImmanence: false }, 'quantum-foundations');
  assert.equal(dropA1.consistentSynthesis, false);
  assert.equal(dropA1.paradoxStatus, 'Reductio: Archimedean Regress (Objectification Antinomy)');
  assert.ok(dropA1.formalInferenceChain.join(' ').includes('⊢') && dropA1.formalInferenceChain.join(' ').includes('⊥'));

  const dropA2 = evaluatePhilosophicalConsistency({ ...full, relationalParity: false }, 'phenomenology');
  assert.equal(dropA2.paradoxStatus, 'Reductio: Solipsistic Privilege (Intersubjective Collapse)');
  assert.ok(dropA2.formalInferenceChain.join(' ').includes('⊢') && dropA2.formalInferenceChain.join(' ').includes('⊥'));

  const dropA3 = evaluatePhilosophicalConsistency({ ...full, operationalBoundary: false }, 'systems-enaction');
  assert.equal(dropA3.paradoxStatus, 'Reductio: Unbounded Indistinction (Infinite Boundary Regress)');
  assert.ok(dropA3.formalInferenceChain.join(' ').includes('⊢') && dropA3.formalInferenceChain.join(' ').includes('⊥'));

  const dropA4 = evaluatePhilosophicalConsistency({ ...full, asymmetricSelfAffection: false }, 'deconstruction');
  assert.equal(dropA4.paradoxStatus, 'Reductio: Punctual Freeze (Absence of Living Present)');
  assert.ok(dropA4.formalInferenceChain.join(' ').includes('⊢') && dropA4.formalInferenceChain.join(' ').includes('⊥'));

  const traditions: TraditionKey[] = ['phenomenology', 'deconstruction', 'quantum-foundations', 'systems-enaction'];
  for (const t1 of traditions) {
    for (const t2 of traditions) {
      const bridge = evaluateCrossTraditionBridge(t1, t2);
      assert.ok(bridge.sharedProblem.length > 10);
      assert.ok(bridge.deductiveBridge.includes('⊢'));
      assert.ok(bridge.unifiedThesis.length > 20);
    }
  }
});

test('Paper 15 9-part treatise completeness (§§0.1-42), 32-position matrix, front/back apparatus, and unified schemas', () => {
  assert.equal(SYNTHESE_META.authors.length, 6);
  assert.equal(SYNTHESE_ABSTRACT.length, 2);
  assert.equal(SYNTHESE_CHAPTERS.length, 9);

  assert.equal(SYNTHESE_AXIOM_TABLE.length, 4);
  assert.deepEqual(
    SYNTHESE_AXIOM_TABLE.map((a) => a.code),
    ['A1', 'A2', 'A3', 'A4']
  );
  assert.equal(SYNTHESE_HOW_TO_READ.length, 3);
  assert.equal(SYNTHESE_ARGUMENT_MAP.nodes.length, 5);
  assert.equal(SYNTHESE_32_MATRIX.length, 32);
  for (let n = 2; n <= 33; n++) {
    const row = SYNTHESE_32_MATRIX[n - 2];
    assert.equal(row.section, `§${n}`);
    for (const v of [row.a1, row.a2, row.a3, row.a4]) {
      assert.ok(v === '✓' || v === '✗' || v === 'partial');
    }
  }

  const part1 = SYNTHESE_CHAPTERS[0];
  assert.equal(part1.subsections[0].number, '0.1');
  assert.equal(part1.subsections[1].number, '0.2');
  assert.equal(part1.subsections[2].number, '1');
  const introText = [...part1.chapterIntro, ...part1.subsections[2].paragraphs].join(' ');
  assert.ok(introText.includes('Aristotle') && introText.includes('Kant') && introText.includes('Bohr'));
  assert.ok(introText.includes('Epistemology') && introText.includes('Ethics') && introText.includes('Cognitive Science'));

  const expectedSections: string[] = ['0.1', '0.2'];
  for (let i = 1; i <= 15; i++) expectedSections.push(String(i));
  expectedSections.push('15a');
  for (let i = 16; i <= 42; i++) expectedSections.push(String(i));

  const actualSections: string[] = [];
  for (const ch of SYNTHESE_CHAPTERS) {
    for (const sub of ch.subsections) actualSections.push(sub.number);
  }
  assert.deepEqual(actualSections, expectedSections);

  assert.ok(SYNTHESE_GLOSSARY.length >= 12);
  assert.ok(SYNTHESE_SYMBOL_GLOSSARY.length >= 8);
  assert.equal(SYNTHESE_APPENDICES.length, 3);
  assert.ok(SYNTHESE_REFERENCES.length >= 70);
  assert.ok(SYNTHESE_INDEX_OF_NAMES.length >= 30);
  assert.ok(SYNTHESE_INDEX_OF_CONCEPTS.length >= 20);

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
  assert.ok(eqCount >= 14);
});

test('Paper 15 HTML, Markdown, and Pure 7-bit ASCII LaTeX exports omit redundant labels and compile cleanly', () => {
  const html = buildSyntheseSelfContainedHtml();
  assert.ok(!html.includes('Symbolic Form:'));
  assert.ok(!html.includes('Plain Math Equation:'));
  assert.ok(!html.includes('Editorial Opening'));
  assert.ok(!html.includes('Provenance:'));
  assert.ok(!html.includes('Paper 15 · Synthese Monograph'));
  assert.ok(!html.includes('Resolving the Constitutive-Absence Paradox Across Kant, Husserl, Derrida, Bohr'));
  assert.ok(html.includes('Logical Schema'));
  assert.ok(html.includes('Table of Axioms (A1–A4)'));
  assert.ok(html.includes('How to Read This Treatise'));
  assert.ok(html.includes('Table 8.1'));
  assert.ok(html.includes('Table 8.3'));
  assert.ok(html.includes('Index of Names'));
  assert.ok(html.includes('Index of Concepts'));

  const md = buildSyntheseMarkdown();
  assert.ok(!md.includes('Symbolic Form:'));
  assert.ok(md.includes('## Part 1:'));
  assert.ok(md.includes('## Part 9:'));
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
  assert.ok(tex.includes('\\checkmark'));
  assert.ok(tex.includes('Index of Names'));
  assert.ok(tex.includes('Index of Concepts'));

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

test('Paper 15 SVG figures keep restrained tonal palette and text inside safe viewBox margins', () => {
  for (const fig of SYNTHESE_FIGURES) {
    const vb = fig.svgMarkup.match(/viewBox="0 0 (\d+) (\d+)"/);
    assert.ok(vb, `Figure ${fig.figureNumber} missing viewBox`);
    const vbW = Number(vb[1]);
    const vbH = Number(vb[2]);

    const hexColors = new Set(
      [...fig.svgMarkup.matchAll(/#[0-9A-Fa-f]{6}/g)].map((m) => m[0].toUpperCase())
    );
    assert.ok(
      hexColors.size <= 7,
      `${fig.figureNumber} should use a restrained editorial palette (found ${hexColors.size} distinct hex colors)`
    );
    assert.ok(!hexColors.has('#EA580C'), `${fig.figureNumber} should not contain bright orange #EA580C`);

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
