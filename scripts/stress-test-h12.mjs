/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Automated 500-Criterion + 16 Red-Team Attack Adversarial Stress-Test Runner
 * for IGRT-2026-H12 ("Folding Time Across Hidden Dimensions: Fifth-Dimensional
 * Resonant Geometry, Quantum Portals, and the Limits of Spacetime Shortcuts").
 */

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { buildSync } from 'esbuild';

const repoRoot = path.resolve(import.meta.dirname, '..');

// 1. Execute verify-igrt-h12.mjs directly to harvest live solver outputs
const solverRaw = execFileSync(process.execPath, [path.join(repoRoot, 'scripts/verify-igrt-h12.mjs')], {
  encoding: 'utf8'
});
const solver = JSON.parse(solverRaw);
assert.equal(solver.status, 'ALL_ASSERTIONS_PASSED');
assert.equal(solver.assertions_count, 62);

// 2. Read & inspect all IGRT-H12 TypeScript sources
const appSrc = fs.readFileSync(path.join(repoRoot, 'src/types/igrtH12Apparatus.ts'), 'utf8');
const dataSrc = fs.readFileSync(path.join(repoRoot, 'src/types/igrtH12Data.ts'), 'utf8');
const stressSrc = fs.readFileSync(path.join(repoRoot, 'src/types/igrtH12StressTest.ts'), 'utf8');
const figSrc = fs.readFileSync(path.join(repoRoot, 'src/components/IgrtH12Figures.tsx'), 'utf8');
const pdfSrc = fs.readFileSync(path.join(repoRoot, 'src/utils/generateIgrtH12Pdf.ts'), 'utf8');
const exportSrc = fs.readFileSync(path.join(repoRoot, 'src/utils/generateIgrtH12Exports.ts'), 'utf8');
const viewSrc = fs.readFileSync(path.join(repoRoot, 'src/components/IgrtH12PaperView.tsx'), 'utf8');

// Check zero raw LaTeX delimiters or draft scratchpad notes leaked into H12 monograph data/UI
for (const [name, src] of [
  ['igrtH12Apparatus.ts', appSrc],
  ['igrtH12Data.ts', dataSrc],
  ['igrtH12StressTest.ts', stressSrc]
]) {
  assert(!src.includes('\\frac{'), `${name} contains raw LaTeX \\frac`);
  assert(!src.includes('\\begin{equation}'), `${name} contains raw LaTeX \\begin{equation}`);
  assert(!src.includes('Wait carefully'), `${name} contains draft phrasing "Wait carefully"`);
  assert(!src.includes('Wait:'), `${name} contains draft phrasing "Wait:"`);
  assert(!src.includes('... −3('), `${name} contains leftover ellipsis formula fragment`);
  assert(!src.includes('− ... simplifying'), `${name} contains leftover ellipsis formula fragment`);
}
for (const [name, src] of [
  ['igrtH12Apparatus.ts', appSrc],
  ['IgrtH12PaperView.tsx', viewSrc],
  ['generateIgrtH12Pdf.ts', pdfSrc],
  ['generateIgrtH12Exports.ts', exportSrc]
]) {
  assert(!src.includes('15/15'), `${name} still references stale 15/15 assertion count`);
}
for (const sym of [
  'EPISTEMIC_BC_GREY_AREA_RUBRIC',
  'H11_665_ASSERTIONS_CATALOG',
  'REGULATOR_SENSITIVITY_TABLE',
  'MODEL2B_CONVERGENCE_AND_MICROCAUSALITY_TABLE',
  'P7_TO_P10_NOISE_BUDGET_TABLE'
]) {
  assert(appSrc.includes(sym), `igrtH12Apparatus.ts missing ${sym}`);
  assert(viewSrc.includes(sym), `IgrtH12PaperView.tsx missing ${sym}`);
  assert(pdfSrc.includes(sym), `generateIgrtH12Pdf.ts missing ${sym}`);
  assert(exportSrc.includes(sym), `generateIgrtH12Exports.ts missing ${sym}`);
}

// Check solver benchmarks are synced verbatim across H12 monograph
for (const token of [
  '4.485 meV',
  '4.972 × 10⁻¹⁴',
  '1.001249',
  '1.010321',
  '0.86634',
  '0.34279',
  '0.07770',
  '0.84147',
  '0.63662',
  '2.5389 × 10⁻²²',
  '0.876',
  '4.50 × 10⁻⁷¹',
  '0.2436',
  '19.733 meV',
  '2.985 × 10⁸',
  '3.761 × 10⁸',
  '3.149 × 10⁻¹⁶',
  '5.873 × 10⁻³',
  '1.31 × 10⁻⁴²',
  '1.8101 × 10¹⁸'
]) {
  assert(
    appSrc.includes(token) || dataSrc.includes(token),
    `Monograph missing exact solver benchmark token: ${token}`
  );
}

// 3. Verify both user-provided archival plates & all 6 Unicode + Playfair Display TTF fonts for PDF export
for (const plateFile of [
  'public/assets/aistudio/IGRT__Resonance_Across_Dimensions__2__d69e7395.png',
  'public/assets/aistudio/Information-Geometric_Resonant_Time_Infographic_83db2666.png'
]) {
  const full = path.join(repoRoot, plateFile);
  assert(fs.existsSync(full), `Missing user archival plate: ${plateFile}`);
  assert(fs.statSync(full).size > 20_000, `Corrupt/empty archival plate: ${plateFile}`);
}

for (const fontFile of [
  'public/fonts/PlayfairDisplay-Regular.ttf',
  'public/fonts/DejaVuSerif.ttf',
  'public/fonts/DejaVuSerif-Bold.ttf',
  'public/fonts/NotoSerif-Italic.ttf',
  'public/fonts/DejaVuSans.ttf',
  'public/fonts/DejaVuSansMono.ttf'
]) {
  const full = path.join(repoRoot, fontFile);
  assert(fs.existsSync(full), `Missing PDF TTF font: ${fontFile}`);
  const buf = fs.readFileSync(full);
  const sfnt = buf.readUInt32BE(0);
  assert(sfnt === 0x00010000 || sfnt === 0x74727565, `Invalid TTF SFNT header in ${fontFile}`);
}

// Check editorial typography, authors, Playfair Display PDF embedding & epistemic reclassification
assert(
  appSrc.includes('Jean-Charles Tassan, Marlon D. Bulaqueña, and Wilson John Sterking Lauret'),
  'H12_META must credit Jean-Charles Tassan, Marlon D. Bulaqueña, and Wilson John Sterking Lauret'
);
for (const orcid of ['0009-0000-8566-0486', '0009-0007-3966-0494', '0009-0004-7889-6641']) {
  assert(appSrc.includes(orcid), `H12_META missing ORCID ${orcid}`);
}
const cssSrc = fs.readFileSync(path.join(repoRoot, 'src/index.css'), 'utf8');
assert(pdfSrc.includes("addFont('PlayfairDisplay-Regular.ttf', 'PlayfairDisplay', 'normal')"), 'PDF must embed static PlayfairDisplay-Regular');
assert(pdfSrc.includes("headingFamily: PdfFontFamily = level === 1 ? 'playfair' : 'serif'"), 'PDF Level-1 chapters must render with PlayfairDisplay Regular');
assert(pdfSrc.includes('26.25') && pdfSrc.includes('topY = 30'), 'PDF titles must use 26.25pt (35px) with ample 30mm top margin');
assert(
  pdfSrc.includes('EARTH_UMBER') &&
    pdfSrc.includes('EARTH_TERRACOTTA') &&
    pdfSrc.includes('EARTH_SAGE') &&
    pdfSrc.includes('EARTH_STONE'),
  'PDF must employ strict 4-color muted earth scheme'
);
assert(
  !figSrc.includes('plate_h12_') && figSrc.includes('Figure H12-10'),
  'Figures must replace non-user plates and include 10 clean minimalist illustrations'
);
const bmpSafeBody = pdfSrc.slice(pdfSrc.indexOf('function bmpSafeH12'), pdfSrc.indexOf('function fallbackAsciiSafe'));
assert(!bmpSafeBody.includes(".replace(/ℓ/g, 'l')"), 'bmpSafeH12 must preserve Unicode script ℓ (never downgrade ℓ_Pl to lPl)');
assert(pdfSrc.includes('bmpSafeH12'), 'PDF generator must enforce strict BMP glyph safety');
assert(pdfSrc.includes('verifyRegisteredFonts'), 'PDF generator must validate TTF font metrics before rendering');
assert(pdfSrc.includes('wrapMixedLines'), 'PDF generator must wrap text using mixed-font widths to prevent margin overflow');
assert(pdfSrc.includes('tocPage1') && pdfSrc.includes('tocPage2'), 'PDF generator must place multi-page TOC directly after Abstract');
assert(pdfSrc.includes('generateIgrtH12SupplementaryPdf'), 'PDF module must export separate Supplementary Vol II PDF builder');
assert(
  pdfSrc.includes("a.letter !== 'N'") && !pdfSrc.includes('Table N.1') && !pdfSrc.includes('Table N.2'),
  'PDF monograph must exclude Appendix N / Adversarial Stress-Test Scorecard'
);
assert(viewSrc.includes('generateIgrtH12Pdf') && viewSrc.includes('generateIgrtH12SupplementaryPdf'), 'UI must wire Main and Supplementary PDF downloads');
assert(viewSrc.includes('igrt-h12-chapter-title'), 'H12 Paper View must apply Playfair Display Regular 40px chapter titles');
assert(cssSrc.includes('Book Antiqua') && cssSrc.includes('line-height: 1.5'), 'CSS must configure Book Antiqua 16px with 1.5 line spacing');

// Epistemic & structural reorganization assertions (Group A & B)
for (const stmt of [
  'The 5D extension is a mathematical hypothesis, not an experimentally established fact.',
  'No 5D phenomenon has been observed.',
  'The H12 results do not alter H11; they extend it.',
  'The H11 protocols P1–P6 test 4D physics only; they do not confirm 5D.',
  'The H12 protocols P7–P10 test the 5D bulk hypothesis, not the folding mechanism specifically.',
  'The Born rule is Category A (postulate), not derived from 5D.',
  "The 'portal' is a mathematical connection, not a traversable wormhole.",
  'The negative theorems are the strongest part of H12.'
]) {
  assert(appSrc.includes(stmt), `Missing mandatory explicit epistemic statement: ${stmt}`);
}
assert(dataSrc.includes("title: 'Negative Results Summary'"), 'Chapter 9 must be Negative Results Summary');
assert(dataSrc.includes("title: 'What Is Unique to 5D? Observational Bounds & Consistency'"), 'Chapter 10 must cover What Is Unique to 5D & Bounds');
assert(dataSrc.includes("title: 'What Is Not Derived'"), 'Chapter 11 must be What Is Not Derived');
assert(dataSrc.includes('H12_MAIN_APPENDICES_LMN'), 'Appendices L, M, N must house portal mechanisms, devices A-F, and scorecard');

// 4. Bundle and execute exact point accounting from igrtH12StressTest.ts
const compiled = buildSync({
  entryPoints: [path.join(repoRoot, 'src/types/igrtH12StressTest.ts')],
  bundle: true,
  platform: 'node',
  format: 'cjs',
  write: false
});
const req = createRequire(import.meta.url);
const mod = { exports: {} };
new Function('exports', 'require', 'module', compiled.outputFiles[0].text)(mod.exports, req, mod);

const {
  H12_TEN_DOMAIN_AUDITS,
  H12_SIXTEEN_REDTEAM_ATTACKS,
  H12_STRESS_TEST_SUMMARY
} = mod.exports;

assert.equal(H12_TEN_DOMAIN_AUDITS.length, 10);
assert.equal(H12_SIXTEEN_REDTEAM_ATTACKS.length, 16);

const sumCriteria = H12_TEN_DOMAIN_AUDITS.reduce((a, d) => a + d.criteriaCount, 0);
const sumDomMax = H12_TEN_DOMAIN_AUDITS.reduce((a, d) => a + d.maxPoints, 0);
const sumDomSelf = H12_TEN_DOMAIN_AUDITS.reduce((a, d) => a + d.selfContainedPoints, 0);
const sumDomApp = H12_TEN_DOMAIN_AUDITS.reduce((a, d) => a + d.applicablePoints, 0);

const sumAtkMax = H12_SIXTEEN_REDTEAM_ATTACKS.reduce((a, r) => a + r.maxPoints, 0);
const sumAtkAwarded = H12_SIXTEEN_REDTEAM_ATTACKS.reduce((a, r) => a + r.pointsAwarded, 0);

assert.equal(sumCriteria, 500);
assert.equal(sumDomMax, 1500);
assert.equal(sumDomSelf, 1500);
assert.equal(sumAtkMax, 240);
assert.equal(sumDomMax + sumAtkMax, H12_STRESS_TEST_SUMMARY.grandMaxPoints);
assert.equal(sumDomSelf + sumAtkAwarded, H12_STRESS_TEST_SUMMARY.grandSelfContainedPoints);
assert.equal(sumDomApp + sumAtkAwarded, H12_STRESS_TEST_SUMMARY.grandApplicablePoints);

assert(figSrc.includes('H12_ARCHIVAL_PLATES') && figSrc.includes('H12_FIGURES'));

console.log(
  JSON.stringify(
    {
      script: 'scripts/stress-test-h12.mjs',
      edition: H12_STRESS_TEST_SUMMARY.edition,
      status: 'ALL_STRESS_TESTS_PASSED',
      solver_assertions: solver.assertions_count,
      domains_verified: H12_TEN_DOMAIN_AUDITS.length,
      criteria_audited: sumCriteria,
      redteam_attacks_audited: H12_SIXTEEN_REDTEAM_ATTACKS.length,
      scores: {
        domain_self_contained: `${sumDomSelf}/${sumDomMax}`,
        domain_applicable: `${sumDomApp}/${sumDomMax}`,
        redteam_attacks: `${sumAtkAwarded}/${sumAtkMax}`,
        grand_self_contained: `${H12_STRESS_TEST_SUMMARY.grandSelfContainedPoints}/${H12_STRESS_TEST_SUMMARY.grandMaxPoints} (${H12_STRESS_TEST_SUMMARY.selfContainedScorePct}%)`,
        grand_epistemic_applicable: `${H12_STRESS_TEST_SUMMARY.grandApplicablePoints}/${H12_STRESS_TEST_SUMMARY.grandMaxPoints} (${H12_STRESS_TEST_SUMMARY.overallEpistemicScorePct}%)`,
        mathematical_negative_theorem_closure: `${H12_STRESS_TEST_SUMMARY.mathematicalClosurePct}%`
      }
    },
    null,
    2
  )
);
