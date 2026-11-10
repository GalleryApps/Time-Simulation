const fs = require('fs');

const raw = fs.readFileSync('public/assets/aistudio/IGEG_vs_RES-RAG_500-Criterion_Journal_Manuscript_3fd82f8c.txt', 'utf8');

// Load criteria parsed earlier
const criteria = JSON.parse(fs.readFileSync('src/types/criteria500.json', 'utf8'));

// Helper to extract table cells by \r
function extractCells(startHeader, endMarker) {
  const s = raw.indexOf(startHeader);
  if (s === -1) throw new Error('Start not found: ' + startHeader);
  const e = raw.indexOf(endMarker, s);
  if (e === -1) throw new Error('End not found: ' + endMarker);
  const block = raw.slice(s, e);
  return block.split(/\r/).map(c => c.replace(/\n/g, '').trim()).filter(c => c.length > 0);
}

// 1. Table 4: Red-team attacks
// Target\rAttack\rOutcome\rReasoning\r
const t4Cells = extractCells('Table 4. Red-team attacks and outcomes.', 'Outcome tally.');
console.log('T4 total cells:', t4Cells.length);
// Find index after 'Reasoning'
const t4ReasoningIdx = t4Cells.indexOf('Reasoning');
const t4Data = t4Cells.slice(t4ReasoningIdx + 1);
const redTeamAttacks = [];
for (let i = 0; i < t4Data.length; i += 4) {
  if (!t4Data[i]) break;
  redTeamAttacks.push({
    id: (i / 4) + 1,
    target: t4Data[i],
    attack: t4Data[i + 1],
    outcome: t4Data[i + 2],
    reasoning: t4Data[i + 3]
  });
}
console.log('Parsed Red Team attacks:', redTeamAttacks.length, '(expected 20)');

// 2. Table 5: Counterfactual worlds 3-14
// Imagined world\rIGEG's answer\rRES=RAG's answer\rEdge\r
const t5Cells = extractCells('Table 5. Counterfactual worlds 3-14.', 'Across the one hundred counterfactual tests');
const t5EdgeIdx = t5Cells.indexOf('Edge');
const t5Data = t5Cells.slice(t5EdgeIdx + 1);
const counterfactualWorlds = [
  {
    id: 1,
    world: 'World 1: Removal of the time dimension',
    igegAnswer: 'Deleting t leaves only the spatial parts of the information gradient. The engine reading has no ordering to step through and halts, exposing a circularity: update rule requires ordering parameter τ in Eq. (5). In covariant field equations, leaves a static spatial slice (Wheeler-DeWitt frozen picture): retains geometry, loses dynamics.',
    resragAnswer: 'Rhythm does not collapse to zero but becomes undefined (frequency requires time to be measured). Bare ordering survives (one rupture preceding another). Ontologically robust, but physically weak without a metric for time intervals or dilation.',
    edge: 'Level (IGEG retains geometry/reconnects to physics; RES=RAG robust ordering)'
  },
  {
    id: 2,
    world: 'World 2: The zero-entropy freeze',
    igegAnswer: 'If information gradients vanish, stress-energy reduces to pure cosmological-constant-like vacuum I_μν → -g_μν V(ψ₀). Spacetime (de Sitter) retains well-defined time; metric stagnation is not a time freeze. Zero-entropy renders Fisher metric degenerate rather than neatly zero.',
    resragAnswer: 'With generation switched off, RES alone remains: static memory lock. Disrupts rhythm. However, zero-entropy state has no distinguishable contents to retain, so RES should vanish as well.',
    edge: 'Level (Both encounter formal challenges in extreme zero-entropy)'
  }
];

for (let i = 0; i < t5Data.length; i += 4) {
  if (!t5Data[i]) break;
  counterfactualWorlds.push({
    id: (i / 4) + 3,
    world: t5Data[i],
    igegAnswer: t5Data[i + 1],
    resragAnswer: t5Data[i + 2],
    edge: t5Data[i + 3]
  });
}
console.log('Parsed Counterfactual worlds:', counterfactualWorlds.length, '(expected 14)');

// 3. Table 6: Observational discriminators
// Test\rIGEG\rRES=RAG\r
const t6Cells = extractCells('Table 6. Observational discriminators.', 'The discriminators favor IGEG only');
const t6ResRagIdx = t6Cells.indexOf('RES=RAG');
const t6Data = t6Cells.slice(t6ResRagIdx + 1);
const observationalDiscriminators = [];
for (let i = 0; i < t6Data.length; i += 3) {
  if (!t6Data[i]) break;
  observationalDiscriminators.push({
    id: (i / 3) + 1,
    test: t6Data[i],
    igeg: t6Data[i + 1],
    resrag: t6Data[i + 2]
  });
}
console.log('Parsed Observational discriminators:', observationalDiscriminators.length, '(expected 3)');

// 4. Table 7: Robustness checks
const t7Cells = extractCells('Table 7. Robustness and sensitivity analyses of the total scores.', 'The generosity, severity and combined');
const t7GapIdx = t7Cells.indexOf('Gap (IGEG − RES=RAG)');
const t7Data = t7Cells.slice(t7GapIdx + 1);
const robustnessScenarios = [];
for (let i = 0; i < t7Data.length; i += 4) {
  if (!t7Data[i]) break;
  robustnessScenarios.push({
    scenario: t7Data[i],
    igeg: t7Data[i + 1],
    resrag: t7Data[i + 2],
    gap: t7Data[i + 3]
  });
}
console.log('Parsed Robustness scenarios:', robustnessScenarios.length, '(expected 18)');

// 5. Table 8: Mapping between IGEG, RES=RAG, and IGRT
const t8Cells = extractCells('Table 8. Mapping between IGEG, RES=RAG and IGRT.', 'All entries in the IGRT column');
const t8IgrtIdx = t8Cells.indexOf('IGRT');
const t8Data = t8Cells.slice(t8IgrtIdx + 1);
const igrtMapping = [];
for (let i = 0; i < t8Data.length; i += 4) {
  if (!t8Data[i]) break;
  igrtMapping.push({
    concept: t8Data[i],
    igeg: t8Data[i + 1],
    resrag: t8Data[i + 2],
    igrt: t8Data[i + 3]
  });
}
console.log('Parsed IGRT Mapping dimensions:', igrtMapping.length, '(expected 9)');

// 6. Table B1: Glossary of technical terms
const tb1Cells = extractCells('Table B1. Glossary of technical terms.', 'Adversarial Evaluation of Emergent Time');
const tb1DefIdx = tb1Cells.indexOf('Definition');
const tb1Data = tb1Cells.slice(tb1DefIdx + 1);
const glossaryTerms = [];
for (let i = 0; i < tb1Data.length; i += 2) {
  if (!tb1Data[i]) break;
  glossaryTerms.push({
    term: tb1Data[i],
    definition: tb1Data[i + 1]
  });
}
console.log('Parsed Glossary terms:', glossaryTerms.length, '(expected 25)');

// Generate TypeScript module
const tsContent = `/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Complete 500-Criterion Adversarial Evaluation, Robustness Suite,
 * Red-Team Attacks, Counterfactual Worlds, and IGRT Synthesis Data
 * 
 * Sourced directly from peer-reviewed journal manuscript:
 * "Adversarial Evaluation of Emergent Time Frameworks: A 500-Criterion Stress Test
 * and Synthesis of Information Geometric Extended Gravity (IGEG) and the RES=RAG Resonance Model"
 * Authors: Marlon Bulaqueña (ORCID: 0009-0007-3966-0494) & Jean-Charles Tassan (ORCID: 0009-0000-8566-0486)
 */

export interface Criterion500Item {
  id: number;
  familyId: number;
  familyName: string;
  criterion: string;
  scoreA: number; // 0-3 ordinal Likert
  scoreB: number; // 0-3 ordinal Likert
  note: string;
  isConceptual: boolean; // 53-criterion subset marked with †
  isCounterfactual: boolean; // 100 counterfactual criteria
  winner: 'IGEG' | 'RES=RAG' | 'Tie';
}

export interface FamilyMeta {
  id: number;
  name: string;
  start: number;
  end: number;
  count: number;
  maxScore: number;
  scoreA: number;
  scoreB: number;
  gap: number;
  percentageA: number;
  percentageB: number;
  description: string;
}

export interface RedTeamAttack {
  id: number;
  target: string;
  attack: string;
  outcome: string;
  reasoning: string;
}

export interface CounterfactualWorld {
  id: number;
  world: string;
  igegAnswer: string;
  resragAnswer: string;
  edge: string;
}

export interface ObservationalDiscriminator {
  id: number;
  test: string;
  igeg: string;
  resrag: string;
}

export interface RobustnessScenario {
  scenario: string;
  igeg: string;
  resrag: string;
  gap: string;
}

export interface IGRTMappingItem {
  concept: string;
  igeg: string;
  resrag: string;
  igrt: string;
}

export interface GlossaryItem {
  term: string;
  definition: string;
}

export const FAMILIES_META: FamilyMeta[] = [
  { id: 1, name: 'Foundational Axioms', start: 1, end: 53, count: 53, maxScore: 159, scoreA: 90, scoreB: 31, gap: 59, percentageA: 56.6, percentageB: 19.5, description: 'Assumptions of each framework and their mutual consistency, action principles, and problem of time.' },
  { id: 2, name: 'Field Equations', start: 54, end: 106, count: 53, maxScore: 159, scoreA: 82, scoreB: 9, gap: 73, percentageA: 51.6, percentageB: 5.7, description: 'Existence, closure, variational derivation, and GR correspondence limits of mathematical equations.' },
  { id: 3, name: 'Cosmological Scale-Up', start: 107, end: 159, count: 53, maxScore: 159, scoreA: 63, scoreB: 9, gap: 54, percentageA: 39.6, percentageB: 5.7, description: 'Survival of each framework when applied at cosmological scales: FRW, CMB, SNIa, and Hubble tension.' },
  { id: 4, name: 'Falsifiability', start: 160, end: 212, count: 53, maxScore: 159, scoreA: 55, scoreB: 21, gap: 34, percentageA: 34.6, percentageB: 13.2, description: 'The practical possibility of refuting each framework with existing and near-future technology.' },
  { id: 5, name: 'Counterfactual Survival', start: 213, end: 276, count: 64, maxScore: 192, scoreA: 102, scoreB: 63, gap: 39, percentageA: 53.1, percentageB: 32.8, description: 'Behavior of each framework when the universe is imagined differently (removal of time, zero-entropy, discrete steps).' },
  { id: 6, name: 'Methodology and Epistemic Hygiene', start: 277, end: 318, count: 42, maxScore: 126, scoreA: 51, scoreB: 33, gap: 18, percentageA: 40.5, percentageB: 26.2, description: 'Care with which work is constructed, documented, peer-reviewed, and separated from promotional overreach.' },
  { id: 7, name: 'Harmonization Readiness', start: 319, end: 340, count: 22, maxScore: 66, scoreA: 42, scoreB: 23, gap: 19, percentageA: 63.6, percentageB: 34.8, description: 'Ease with which each framework could be joined to the other under a unified mathematical umbrella.' },
  { id: 8, name: 'Quantum Gravity Phenomenology', start: 341, end: 400, count: 60, maxScore: 180, scoreA: 86, scoreB: 10, gap: 76, percentageA: 47.8, percentageB: 5.6, description: 'Contact with quantum-gravity programmes, Planck-scale effects, Lorentz violation, and quantum clocks.' },
  { id: 9, name: 'Thermodynamic and Information Consistency', start: 401, end: 460, count: 60, maxScore: 180, scoreA: 88, scoreB: 21, gap: 67, percentageA: 48.9, percentageB: 11.7, description: 'Consistency with thermodynamics, Landauer and Bekenstein bounds, Fisher geometry, and relative entropy.' },
  { id: 10, name: 'Sociological and Meta-Scientific Viability', start: 461, end: 500, count: 40, maxScore: 120, scoreA: 53, scoreB: 44, gap: 9, percentageA: 44.2, percentageB: 36.7, description: 'Community uptake, research-programme health (Lakatos), interdisciplinary reach, and public clarity.' }
];

export const CRITERIA_500: Criterion500Item[] = ${JSON.stringify(criteria.map(c => ({
  ...c,
  winner: c.scoreA > c.scoreB ? 'IGEG' : c.scoreB > c.scoreA ? 'RES=RAG' : 'Tie'
})), null, 2)};

export const RED_TEAM_ATTACKS: RedTeamAttack[] = ${JSON.stringify(redTeamAttacks, null, 2)};

export const COUNTERFACTUAL_WORLDS: CounterfactualWorld[] = ${JSON.stringify(counterfactualWorlds, null, 2)};

export const OBSERVATIONAL_DISCRIMINATORS: ObservationalDiscriminator[] = ${JSON.stringify(observationalDiscriminators, null, 2)};

export const ROBUSTNESS_SCENARIOS: RobustnessScenario[] = ${JSON.stringify(robustnessScenarios, null, 2)};

export const IGRT_MAPPING: IGRTMappingItem[] = ${JSON.stringify(igrtMapping, null, 2)};

export const GLOSSARY_TERMS: GlossaryItem[] = ${JSON.stringify(glossaryTerms, null, 2)};
`;

fs.writeFileSync('src/types/manuscriptData.ts', tsContent);
console.log('Successfully wrote src/types/manuscriptData.ts with all 500 criteria and all metadata tables!');
