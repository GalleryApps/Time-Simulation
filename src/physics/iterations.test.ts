import test from 'node:test';
import assert from 'node:assert/strict';
import { runAdversarialIterations, COUNTERFACTUAL_BRANCHES } from './iterations';

test('runAdversarialIterations generates correct number of iteration steps', () => {
  const result = runAdversarialIterations(15);
  assert.equal(result.steps.length, 15, 'Must generate exactly 15 steps');
  assert.ok(result.averageSigmaExclusion > 0, 'Average sigma exclusion must be positive');
  assert.ok(result.modelAStabilityRate >= 99.0, 'Model A stability must be near 100%');
});

test('Model B LIV delay exceeds observed limits under linear dispersion', () => {
  const result = runAdversarialIterations(10);
  for (const step of result.steps) {
    assert.ok(
      step.modelBExclusionConfidenceSigma >= 3.0,
      `Exclusion sigma should exceed 3-sigma detection threshold: got ${step.modelBExclusionConfidenceSigma}`
    );
  }
});

test('Counterfactual branches contain all 4 rigorous scenarios', () => {
  assert.equal(COUNTERFACTUAL_BRANCHES.length, 4, 'Must have 4 counterfactual branches');
  const ids = COUNTERFACTUAL_BRANCHES.map(b => b.id);
  assert.deepEqual(ids, ['cf-1', 'cf-2', 'cf-3', 'cf-4']);
});
