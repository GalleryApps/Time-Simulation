import test from 'node:test';
import assert from 'node:assert/strict';
import { computeFisherMetric, computeIGGVector, computeProperTimeIncrement, simulateIGIGWavepacket, computeIGIGScaleFactor } from './igig';
import { generateCausalSet, computeModularClockDrift, computeLIVDelay, computeCausalSetScaleFactor } from './causalset';
import { runFullStressTest } from './adversarial';
import { evaluateResRag, computeDualLayerCoupling } from './tassan';

test('Tassan RES-RAG computes Z-transform poles, zeros and frequency response', () => {
  const params = {
    resMemoryDecay: 0.6,
    resCoupling: -0.25,
    ragActiveDrive: 1.0,
    ragPhaseLag: -0.4,
    ragHighFreqNoise: 0.1
  };
  const res = evaluateResRag(params, 32);
  assert.ok(res.poles.length > 0, 'Poles must be computed');
  assert.ok(res.zeros.length > 0, 'Zeros must be computed');
  assert.ok(res.frequencySpectrum.length === 33, 'Spectrum length must match samples');
  assert.ok(res.balanceGamma > 0, 'Balance gamma must be positive');
  assert.ok(res.emergentTimeStep > 0, 'Emergent time step must be positive');
});

test('Dual-Layer coupling links IGG software engine to RES-RAG frequency rhythm', () => {
  const g = computeFisherMetric(0.5, 1.0, 1e-4);
  const res = evaluateResRag({
    resMemoryDecay: 0.5,
    resCoupling: -0.2,
    ragActiveDrive: 1.0,
    ragPhaseLag: -0.3,
    ragHighFreqNoise: 0.05
  }, 32);
  const coupling = computeDualLayerCoupling(g.determinant, g.trace, res);
  assert.ok(coupling.layer0ClockRate > 0, 'Layer 0 clock rate must be positive');
  assert.ok(coupling.layer1ResonantFreq > 0, 'Layer 1 resonant freq must be positive');
  assert.ok(coupling.coherenceIndex >= 0 && coupling.coherenceIndex <= 1, 'Coherence index between 0 and 1');
  assert.ok(coupling.dualVerdict.length > 0, 'Dual verdict string must be non-empty');
});

test('Bulaqueña IGG engine computes natural gradient scaled by inverse Fisher metric', () => {
  const igg = computeIGGVector(0.5, 1.0, 1.0, 2.0, 1e-4);
  assert.ok(igg.iggMagnitude > 0, 'IGG magnitude must be strictly positive');
  assert.ok(igg.dtauRate > 0, 'Proper time rate must be strictly positive');
  assert.ok(Number.isFinite(igg.igg1) && Number.isFinite(igg.igg2), 'IGG components must be finite');
  assert.ok(igg.metricInverseDet > 0, 'Inverse determinant must be positive');
});

test('IGIG Fisher metric is positive definite with non-zero determinant', () => {
  const g = computeFisherMetric(0.5, 1.2, 1e-4);
  assert.ok(g.determinant > 0, 'Fisher metric determinant must be strictly positive');
  assert.ok(g.trace > 0, 'Fisher metric trace must be positive');
  assert.ok(g.g11 > 0, 'g11 must be positive');
  assert.ok(g.g22 > 0, 'g22 must be positive');
});

test('IGIG vacuum regularizer prevents metric collapse under zero variance', () => {
  const gCollapsed = computeFisherMetric(0, 0, 1e-4);
  assert.ok(gCollapsed.determinant > 0, 'Vacuum regularizer must prevent determinant from collapsing to 0 or NaN');
  assert.ok(!Number.isNaN(gCollapsed.trace), 'Trace must be a valid number');
});

test('IGIG wavepacket evolution preserves probability norm identically to 1.0', () => {
  const history = simulateIGIGWavepacket(30, 1e-4);
  assert.ok(history.length > 20, 'History should contain multiple time slices');
  for (const step of history) {
    assert.ok(
      Math.abs(step.prob - 1.0) < 1e-5,
      `Probability norm violated at tau=${step.tau}: got ${step.prob}`
    );
  }
});

test('IGIG cosmological scale factor bounces at tau=0 with finite curvature', () => {
  const bounce = computeIGIGScaleFactor(0, 0.2, 1.0);
  assert.equal(bounce.a, 0.2, 'Scale factor at bounce should equal minimum parameter');
  assert.equal(bounce.H, 0, 'Hubble parameter at turning point must vanish');
  assert.ok(Number.isFinite(bounce.kretschmann), 'Kretschmann scalar must be strictly finite at singularity');
});

test('Causal set generator establishes acyclic partial order and links', () => {
  const cs = generateCausalSet(25, 42);
  assert.equal(cs.nodes.length, 25, 'Should generate requested number of nodes');
  assert.ok(cs.linkFluctuation > 0, 'Link fluctuation must be positive');
  
  // Verify causal time ordering
  for (let i = 0; i < cs.nodes.length - 1; i++) {
    assert.ok(cs.nodes[i].t <= cs.nodes[i + 1].t, 'Nodes must be ordered by temporal coordinate');
  }
});

test('LIV time delay increases with photon energy and distance', () => {
  const delay10GeV = computeLIVDelay(10, 500, 1);
  const delay100GeV = computeLIVDelay(100, 500, 1);
  const delay1000Mpc = computeLIVDelay(100, 1000, 1);
  
  assert.ok(delay100GeV > delay10GeV, 'Higher energy photons must experience greater LIV delay');
  assert.ok(delay1000Mpc > delay100GeV, 'Greater propagation distance must increase LIV delay');
});

test('Full stress test suite produces all 4 technical phases and scores', () => {
  const params = {
    planckLength: 1.0,
    fisherCouplingAlpha: 1.2,
    sprinklingDensityRho: 1.0,
    photonEnergyGeV: 50.0,
    sourceDistanceMpc: 800.0,
    entanglementDim: 16,
    scalarCurvatureR: 100.0,
    vacuumFisherFloorEpsilon: 1e-4
  };
  
  const result = runFullStressTest(params);
  assert.ok(result.phase1, 'Phase 1 must exist');
  assert.ok(result.phase2, 'Phase 2 must exist');
  assert.ok(result.phase3, 'Phase 3 must exist');
  assert.equal(result.scores.length, 4, 'Must have 4 phase stress scores');
  assert.equal(result.phase1.igigProbabilityNorm, 1.0, 'IGIG probability norm conserved');
});
