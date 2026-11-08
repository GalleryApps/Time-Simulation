/**
 * Core mathematical types for Quantum Gravity Problem of Time Comparative Simulation
 */

export interface SimulationParams {
  planckLength: number; // in units of 10^-35 m
  fisherCouplingAlpha: number; // coupling alpha in S_IGIG
  sprinklingDensityRho: number; // causal set sprinkling density
  photonEnergyGeV: number; // photon energy in GeV
  sourceDistanceMpc: number; // distance to GRB source in Mpc
  entanglementDim: number; // Hilbert space subsystem dimension
  scalarCurvatureR: number; // Scalar curvature near singularity
  vacuumFisherFloorEpsilon: number; // Vacuum information regularizer
}

export interface IGGEngineMetrics {
  gradPhi1: number;
  gradPhi2: number;
  igg1: number;
  igg2: number;
  iggMagnitude: number;
  euclidMagnitude: number;
  metricInverseDet: number;
}

export interface Phase1State {
  wdwResidual: number; // ||H|Psi>||
  igigProbabilityNorm: number; // <Psi|Psi> under i\hbar \partial_\tau \Psi
  fisherMetricTrace: number; // Tr(g_ij)
  fisherFloorActive: boolean; // whether vacuum regularizer prevents collapse
  modularClockDriftSigma: number; // \sigma^2(t) in Causal Set thermal time
  observerDiscrepancy: number; // relative drift between two sub-algebras
  wavepacketHistory: Array<{ tau: number; psi_re: number; psi_im: number; prob: number; fisher_det: number }>;
  iggMetrics?: IGGEngineMetrics;
}

export interface CausalSetNode {
  id: number;
  t: number;
  x: number;
  y: number;
  layer: number;
  ancestors: number[];
  links: number[];
}

export interface Phase2State {
  causalNodes: CausalSetNode[];
  linkNumberFluctuation: number; // \delta N / \sqrt{N}
  livTimeDelayPs: number; // LIV delay in picoseconds
  commutatorSpacelikeResidual: number; // [phi(x), phi(y)] for spacelike intervals
  igigSignalingVelocity: number; // strictly c (no superluminal signaling)
  diffeomorphismLieDerivativeError: number; // L_xi g_munu error
}

export interface Phase3State {
  scaleFactorHistory: Array<{
    timeOrParam: number;
    a_igig: number;
    a_causal: number;
    a_classical_gr: number;
    kretschmann_igig: number;
    kretschmann_causal: number;
    kretschmann_gr: number;
  }>;
  tensorToScalarRatio_r_igig: number;
  tensorToScalarRatio_r_causal: number;
  tensorTilt_nt_igig: number;
  tensorTilt_nt_causal: number;
  grbDelayModelA: number; // 0 ns (exact Lorentz invariance)
  grbDelayModelB: number; // >0 ns (linear or quadratic LIV)
}

export interface StressTestScore {
  phase: number;
  title: string;
  modelAScore: number; // 0-100
  modelBScore: number; // 0-100
  keyMetric: string;
  verdict: 'Model A Superior' | 'Model B Superior' | 'Inconclusive / Dual';
  notes: string;
}
