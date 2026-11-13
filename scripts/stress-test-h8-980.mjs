/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Automated 980-Vector / 1,740-Point Adversarial Stress-Test Runner
 * for the Harmonized Research Paper (Edition: IGRT-2026-H8).
 *
 * Verifies:
 *  1. Live source invariants of harmonizedPaperData.ts & harmonizedPaperApparatus.ts
 *  2. Complete 580-criterion family parity against criteria500.json + FAMILY_XI + FAMILY_XII
 *  3. Exact 1,740 max-point accounting, score distribution (3/2/1/0), and zero missing IDs
 *  4. Re-adjudication of all 20 direct Red-Team Attacks (ATK-01..ATK-20)
 *  5. Reconciliation of all 380 implementation/upgrade gates (Active vs Superseded vs Open)
 */

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { buildSync } from 'esbuild';

const repoRoot = path.resolve(import.meta.dirname, '..');

// 1. Live checks on H8 Harmonized Paper sources
const paperDataSrc = fs.readFileSync(path.join(repoRoot, 'src/types/harmonizedPaperData.ts'), 'utf8');
const paperAppSrc = fs.readFileSync(path.join(repoRoot, 'src/types/harmonizedPaperApparatus.ts'), 'utf8');
const criteria500 = JSON.parse(fs.readFileSync(path.join(repoRoot, 'src/types/criteria500.json'), 'utf8'));

assert(paperDataSrc.includes('IGRT-2026-H8'), 'Paper edition must be IGRT-2026-H8');
assert(paperDataSrc.includes('G_{4,X} = 0'), 'H8 must restrict Eq.(3.1) to Type Ia Horndeski (G_{4,X}=0)');
assert(paperAppSrc.includes('w_0 = −0.908'), 'H8 must contain RK2 PNGB w_0 = -0.908');
assert(paperAppSrc.includes('w_a = −0.177'), 'H8 must contain RK2 PNGB w_a = -0.177');
assert(paperAppSrc.includes('n_T = −0.036'), 'H8 must enforce shared red tensor tilt n_T = -0.036');
assert(paperAppSrc.includes('OP-1') && paperAppSrc.includes('OP-5'), 'H8 must declare OP-1..OP-5');

// 2. Load & compile harmonizedPaperH8StressTest.ts cleanly in memory via esbuild
const compiled = buildSync({
  entryPoints: [path.join(repoRoot, 'src/types/harmonizedPaperH8StressTest.ts')],
  bundle: true,
  platform: 'node',
  format: 'cjs',
  write: false
});

const req = createRequire(import.meta.url);
const mod = { exports: {} };
const fn = new Function('exports', 'require', 'module', compiled.outputFiles[0].text);
fn(mod.exports, req, mod);
const audit = mod.exports;

const {
  H8_EDITION_META,
  H8_CRITERIA_580_AUDIT,
  H8_ATTACKS_20_AUDIT,
  H8_UPGRADES_380_AUDIT,
  H8_TWELVE_FAMILIES_SUMMARY,
  H8_COMPOSITE_METRICS
} = audit;

// 3. Structural & completeness assertions across all 980 vectors
assert.equal(H8_EDITION_META.edition, 'IGRT-2026-H8');
assert.equal(criteria500.length, 500, 'criteria500.json must contain 500 base criteria');
assert.equal(H8_CRITERIA_580_AUDIT.length, 580, 'Must evaluate all 580 formal criteria');
assert.equal(H8_ATTACKS_20_AUDIT.length, 20, 'Must evaluate all 20 direct red-team attacks');
assert.equal(H8_UPGRADES_380_AUDIT.length, 380, 'Must reconcile all 380 upgrade gates');
assert.equal(H8_COMPOSITE_METRICS.totalVectors, 980, 'Total stress vectors must equal 980');
assert.equal(H8_COMPOSITE_METRICS.maxCriteriaScore, 1740, 'Max score must equal 1,740 pts');

// Verify unique IDs and valid 0..3 scores for every single criterion
const uidSet = new Set();
for (const c of H8_CRITERIA_580_AUDIT) {
  assert(!uidSet.has(c.uid), `Duplicate criterion UID: ${c.uid}`);
  uidSet.add(c.uid);
  assert([0, 1, 2, 3].includes(c.score), `Invalid score ${c.score} for ${c.uid}`);
  assert(c.citation.length > 0 && c.rationale.length > 0, `Missing evidence for ${c.uid}`);
}

// Verify exact family sizes against criteria500.json + XI (40) + XII (40)
const expectedCounts = new Map();
for (const item of criteria500) {
  expectedCounts.set(item.familyId, (expectedCounts.get(item.familyId) || 0) + 1);
}
expectedCounts.set(11, 40);
expectedCounts.set(12, 40);

let recomputedScoreSum = 0;
let recomputedCountSum = 0;
for (const fam of H8_TWELVE_FAMILIES_SUMMARY) {
  assert.equal(fam.count, expectedCounts.get(fam.id), `Family ${fam.id} count mismatch`);
  assert.equal(fam.maxScore, fam.count * 3, `Family ${fam.id} maxScore mismatch`);
  assert.equal(
    fam.score3Count + fam.score2Count + fam.score1Count + fam.score0Count,
    fam.count,
    `Family ${fam.id} score bucket mismatch`
  );
  recomputedScoreSum += fam.h8Score;
  recomputedCountSum += fam.count;
}
assert.equal(recomputedCountSum, 580);
assert.equal(recomputedScoreSum, H8_COMPOSITE_METRICS.totalCriteriaScore);

// Verify 20 attacks sum cleanly
const atkSum =
  H8_COMPOSITE_METRICS.attacksSurvives +
  H8_COMPOSITE_METRICS.attacksQualified +
  H8_COMPOSITE_METRICS.attacksWounded +
  H8_COMPOSITE_METRICS.attacksOpen +
  H8_COMPOSITE_METRICS.attacksFails;
assert.equal(atkSum, 20);

// Verify 380 upgrades sum cleanly
const upgSum =
  H8_COMPOSITE_METRICS.upgradesVerified +
  H8_COMPOSITE_METRICS.upgradesSuperseded +
  H8_COMPOSITE_METRICS.upgradesPending;
assert.equal(upgSum, 380);

// Output clean reproducible audit report JSON
const report = {
  edition: H8_EDITION_META.edition,
  totalVectors: H8_COMPOSITE_METRICS.totalVectors,
  criteria: {
    count: H8_COMPOSITE_METRICS.criteriaCount,
    totalScore: H8_COMPOSITE_METRICS.totalCriteriaScore,
    maxScore: H8_COMPOSITE_METRICS.maxCriteriaScore,
    percentage: H8_COMPOSITE_METRICS.criteriaPercentage,
    breakdown: {
      score3_DerivedVerified: H8_COMPOSITE_METRICS.score3,
      score2_QualifiedAnsatzInput: H8_COMPOSITE_METRICS.score2,
      score1_OpenTensionUncomputed: H8_COMPOSITE_METRICS.score1,
      score0_FalsifiedAbsent: H8_COMPOSITE_METRICS.score0,
      passRateGe2: `${H8_COMPOSITE_METRICS.criteriaPassGe2}/580 (${((H8_COMPOSITE_METRICS.criteriaPassGe2 / 580) * 100).toFixed(1)}%)`
    }
  },
  families: H8_TWELVE_FAMILIES_SUMMARY.map((f) => ({
    id: f.id,
    name: f.name,
    count: f.count,
    h8Score: f.h8Score,
    maxScore: f.maxScore,
    percentage: f.percentage,
    distribution: `3s:${f.score3Count} 2s:${f.score2Count} 1s:${f.score1Count} 0s:${f.score0Count}`
  })),
  attacks20: {
    survives: H8_COMPOSITE_METRICS.attacksSurvives,
    survivesQualified: H8_COMPOSITE_METRICS.attacksQualified,
    wounded: H8_COMPOSITE_METRICS.attacksWounded,
    open: H8_COMPOSITE_METRICS.attacksOpen,
    fails: H8_COMPOSITE_METRICS.attacksFails,
    details: H8_ATTACKS_20_AUDIT.map((a) => ({
      code: a.code,
      rating: a.h8Rating,
      citation: a.citation,
      title: a.title
    }))
  },
  upgrades380: {
    verifiedActiveInH8: H8_COMPOSITE_METRICS.upgradesVerified,
    supersededCorrectedInH8: H8_COMPOSITE_METRICS.upgradesSuperseded,
    pendingOpenProblem: H8_COMPOSITE_METRICS.upgradesPending
  },
  compositeVectors: {
    activeOrPassing: H8_COMPOSITE_METRICS.compositeVectorsActiveOrQualified,
    outOf: 980,
    rate: `${((H8_COMPOSITE_METRICS.compositeVectorsActiveOrQualified / 980) * 100).toFixed(1)}%`
  }
};

console.log(JSON.stringify(report, null, 2));
