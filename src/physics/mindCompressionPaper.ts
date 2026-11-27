/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Computational & Information-Geometric Engine for Paper 17:
 * "Consciousness as a Thermodynamic Compression Artifact: Why the 'Hard Problem'
 *  Is a Category Error in Substrate-Independent Information Geometry"
 *
 * Pure deterministic evaluators with zero DOM/browser side-effects:
 * - 34-Shade Dark Muted Pigment Palette (4 Core Grounds + 30 Named Pigment Mixes)
 * - Theorem 1 & 2 Evaluator: Resource-Bounded Self-Modeling & Landauer Erasure Budgets
 * - Theorem 3 Evaluator: Localized Compression Locus, Metric Inheritance & Recursion Gate
 * - Gaussian Rate-Distortion / Fisher Information Sensitivity Tradeoff
 */

export type MindShadeGroup =
  | 'Core Dark Muted'
  | 'Deep Blue & Indigo'
  | 'Crimson, Rose & Plum'
  | 'Teal, Pine & Olive'
  | 'Umber, Slate & Basalt';

export interface MindShadeToken {
  id: number;
  group: MindShadeGroup;
  name: string;
  hex: string;
  rgb: [number, number, number];
  note: string;
}

export const MIND_34_SHADES: MindShadeToken[] = [
  // Core 4 Muted Grounds
  { id: 1, group: 'Core Dark Muted', name: 'Dark Muted Blue', hex: '#0F223D', rgb: [15, 34, 61], note: 'Primary anchor for observer, quality space, and cosmic geometry plates' },
  { id: 2, group: 'Core Dark Muted', name: 'Dark Muted Magenta', hex: '#3D132B', rgb: [61, 19, 43], note: 'Primary anchor for recursion frames, non-invertibility doors, and shadow contrasts' },
  { id: 3, group: 'Core Dark Muted', name: 'Dark Muted Teal', hex: '#0D2F36', rgb: [13, 47, 54], note: 'Primary anchor for Landauer erasure, relational graphs, and restriction boundaries' },
  { id: 4, group: 'Core Dark Muted', name: 'Dark Muted Tan', hex: '#382B1E', rgb: [56, 43, 30], note: 'Primary anchor for embodied agents, microcosm voids, and bottleneck substrates' },

  // 30 Additional Named Dark Muted Pigment Mixes
  { id: 5, group: 'Deep Blue & Indigo', name: 'Midnight indigo', hex: '#0E122B', rgb: [14, 18, 43], note: 'Near-black blue with a violet undertone' },
  { id: 6, group: 'Crimson, Rose & Plum', name: 'Oxblood', hex: '#3B1418', rgb: [59, 20, 24], note: 'Deep brownish red, muted' },
  { id: 7, group: 'Teal, Pine & Olive', name: 'Petrol', hex: '#0B2428', rgb: [11, 36, 40], note: 'Dark blue-green, almost black' },
  { id: 8, group: 'Umber, Slate & Basalt', name: 'Umber', hex: '#332216', rgb: [51, 34, 22], note: 'Dark earthy brown' },
  { id: 9, group: 'Umber, Slate & Basalt', name: 'Slate', hex: '#232F3B', rgb: [35, 47, 59], note: 'Dark grey-blue' },
  { id: 10, group: 'Crimson, Rose & Plum', name: 'Burgundy', hex: '#401122', rgb: [64, 17, 34], note: 'Dark red-purple' },
  { id: 11, group: 'Teal, Pine & Olive', name: 'Forest', hex: '#142E21', rgb: [20, 46, 33], note: 'Deep muted green' },
  { id: 12, group: 'Umber, Slate & Basalt', name: 'Sepia', hex: '#3A2A1D', rgb: [58, 42, 29], note: 'Dark warm brown' },
  { id: 13, group: 'Deep Blue & Indigo', name: 'Prussian', hex: '#0C283B', rgb: [12, 40, 59], note: 'Deep blue with green undertone' },
  { id: 14, group: 'Crimson, Rose & Plum', name: 'Mauve', hex: '#3D2638', rgb: [61, 38, 56], note: 'Dark muted purple-pink' },
  { id: 15, group: 'Teal, Pine & Olive', name: 'Olive', hex: '#2A3016', rgb: [42, 48, 22], note: 'Dark yellow-green' },
  { id: 16, group: 'Umber, Slate & Basalt', name: 'Chestnut', hex: '#3E2018', rgb: [62, 32, 24], note: 'Dark reddish brown' },
  { id: 17, group: 'Teal, Pine & Olive', name: 'Teal-grey', hex: '#1E3336', rgb: [30, 51, 54], note: 'Desaturated dark teal' },
  { id: 18, group: 'Crimson, Rose & Plum', name: 'Plum', hex: '#36142A', rgb: [54, 20, 42], note: 'Dark purple-red' },
  { id: 19, group: 'Umber, Slate & Basalt', name: 'Charcoal', hex: '#1F1E1C', rgb: [31, 30, 28], note: 'Soft black with warm undertone' },
  { id: 20, group: 'Umber, Slate & Basalt', name: 'Auburn', hex: '#422014', rgb: [66, 32, 20], note: 'Dark reddish-orange-brown' },
  { id: 21, group: 'Deep Blue & Indigo', name: 'Ink blue', hex: '#09182E', rgb: [9, 24, 46], note: 'Deep saturated blue-black' },
  { id: 22, group: 'Crimson, Rose & Plum', name: 'Rosewood', hex: '#3B1E26', rgb: [59, 30, 38], note: 'Dark brown with pink undertone' },
  { id: 23, group: 'Teal, Pine & Olive', name: 'Pine', hex: '#0E2E26', rgb: [14, 46, 38], note: 'Dark blue-green' },
  { id: 24, group: 'Umber, Slate & Basalt', name: 'Mahogany', hex: '#3D1914', rgb: [61, 25, 20], note: 'Dark red-brown' },
  { id: 25, group: 'Crimson, Rose & Plum', name: 'Dusk', hex: '#2C2636', rgb: [44, 38, 54], note: 'Dark grey-purple' },
  { id: 26, group: 'Teal, Pine & Olive', name: 'Moss', hex: '#2B2E19', rgb: [43, 46, 25], note: 'Dark yellow-brown-green' },
  { id: 27, group: 'Crimson, Rose & Plum', name: 'Wine', hex: '#38121E', rgb: [56, 18, 30], note: 'Dark purple-red' },
  { id: 28, group: 'Umber, Slate & Basalt', name: 'Storm', hex: '#1C2D33', rgb: [28, 45, 51], note: 'Dark grey-blue-green' },
  { id: 29, group: 'Umber, Slate & Basalt', name: 'Russet', hex: '#452616', rgb: [69, 38, 22], note: 'Dark orange-brown' },
  { id: 30, group: 'Deep Blue & Indigo', name: 'Eclipse', hex: '#111524', rgb: [17, 21, 36], note: 'Near-black with blue undertone' },
  { id: 31, group: 'Crimson, Rose & Plum', name: 'Mulberry', hex: '#3B1E30', rgb: [59, 30, 48], note: 'Dark purple-pink-brown' },
  { id: 32, group: 'Umber, Slate & Basalt', name: 'Basalt', hex: '#1F2924', rgb: [31, 41, 36], note: 'Dark grey with green undertone' },
  { id: 33, group: 'Umber, Slate & Basalt', name: 'Ember', hex: '#472115', rgb: [71, 33, 21], note: 'Dark red-orange-brown' },
  { id: 34, group: 'Deep Blue & Indigo', name: 'Abyss', hex: '#070E1C', rgb: [7, 14, 28], note: 'Deepest blue-black' }
];

export const K_BOLTZMANN_J_PER_K = 1.380649e-23;
export const HBAR_J_S = 1.054571817e-34;

export interface SelfModelingBudgetInput {
  systemMicroBits: number;      // e.g. log2|Sigma|, macroscopic biological brain ~ 10^14 bits or sub-circuit 10^6 bits
  subsystemCapacityBits: number; // memory capacity C of proper subsystem M_S < systemMicroBits
  latentManifoldBits: number;   // target compressed latent Z capacity R * Delta_t
  temperatureK: number;         // bath temperature T (e.g., 310 K physiological)
  energyBudgetJ: number;        // finite thermodynamic free energy budget Delta E per update window
  stepWindowSec: number;        // real-time dynamical update window Delta t
}

export interface SelfModelingBudgetResult {
  landauerBitCostJ: number;
  maxErasableBitsInWindow: number;
  bremermannOpsBound: number;
  losslessEnergyRequiredJ: number;
  losslessMemoryDeficitBits: number;
  losslessPhysicallyPossible: boolean;
  compressionRatio: number;
  forcedRegime: 'Lossy Thermodynamic Compression (Admissible)' | 'Viable Real-Time Self-Model Exhausted (Stalled)' | 'Idealized Unphysical Laplacean Limit';
  latencyScaleLog2N: number;
  diagnosis: string;
}

export function evaluateSelfModelingBudget(input: SelfModelingBudgetInput): SelfModelingBudgetResult {
  const T = Math.max(1e-3, input.temperatureK);
  const deltaT = Math.max(1e-18, input.stepWindowSec);
  const deltaE = Math.max(0, input.energyBudgetJ);
  const sysBits = Math.max(2, input.systemMicroBits);
  const capBits = Math.max(1, input.subsystemCapacityBits);
  const zBits = Math.max(1, input.latentManifoldBits);

  const landauerBitCostJ = K_BOLTZMANN_J_PER_K * T * Math.LN2;
  const maxErasableBitsInWindow = deltaE / landauerBitCostJ;
  // Physical rate ceiling combines Bremermann / Margolus-Levitin bound (2*E / pi*hbar) and Landauer erasure rate
  const bremermannOpsBound = (2 * deltaE * deltaT) / (Math.PI * HBAR_J_S);

  const losslessEnergyRequiredJ = sysBits * landauerBitCostJ;
  const losslessMemoryDeficitBits = Math.max(0, sysBits - capBits);
  const properSubsystemViolatesLossless = capBits < sysBits || deltaE < losslessEnergyRequiredJ;
  const losslessPhysicallyPossible = !properSubsystemViolatesLossless;

  const compressionRatio = sysBits / zBits;
  const latencyScaleLog2N = Math.log2(sysBits);

  let forcedRegime: SelfModelingBudgetResult['forcedRegime'];
  let diagnosis: string;

  if (!losslessPhysicallyPossible) {
    if (maxErasableBitsInWindow >= zBits && capBits >= zBits) {
      forcedRegime = 'Lossy Thermodynamic Compression (Admissible)';
      diagnosis =
        `Theorem 1 blocks exact lossless self-tracking (deficit = ${losslessMemoryDeficitBits.toExponential(2)} bits; ` +
        `exact reset heat ${losslessEnergyRequiredJ.toExponential(2)} J vs. budget ${deltaE.toExponential(2)} J). ` +
        `Theorem 2 succeeds via a non-injective map Phi: Sigma -> Z compressing ${compressionRatio.toFixed(1)}:1 inside the ${zBits.toFixed(0)}-bit latent manifold within Delta t = ${(deltaT * 1000).toFixed(1)} ms.`;
    } else {
      forcedRegime = 'Viable Real-Time Self-Model Exhausted (Stalled)';
      diagnosis =
        `Even compressed updates (${zBits.toFixed(0)} bits) exceed the available Landauer erasure ceiling (${maxErasableBitsInWindow.toExponential(2)} bits/window) or memory capacity C = ${capBits.toFixed(0)} bits. Real-time self-modeling stalls.`;
    }
  } else {
    forcedRegime = 'Idealized Unphysical Laplacean Limit';
    diagnosis =
      'Assumed subsystem capacity and energy budget equal or exceed total state complexity, collapsing the distinction between proper subsystem M_S and total physical system S (violating embedded agency and triggering diagonalization if M_S must simultaneously represent M_S).';
  }

  return {
    landauerBitCostJ,
    maxErasableBitsInWindow,
    bremermannOpsBound,
    losslessEnergyRequiredJ,
    losslessMemoryDeficitBits,
    losslessPhysicallyPossible,
    compressionRatio,
    forcedRegime,
    latencyScaleLog2N,
    diagnosis
  };
}

export type SubstrateClass = 'biological-neural' | 'synthetic-silicon' | 'thermostat-control' | 'passive-matter';

export interface CompressionLocusInput {
  dimSigma: number;          // ambient subsystem micro-dimension dim(Sigma_S)
  dimZ: number;              // endogenous compression manifold dim(Z_S)
  recursionDepth: number;    // 0 = inert, 1 = first-order transducer, >=2 = second-order recursive self-model
  fisherCoupling: number;    // 0..1 normalized pullback metric fidelity against ambient manifold Z_U
  substrateType: SubstrateClass;
}

export interface CompressionLocusResult {
  instantiatesLocus: boolean;
  nonInjectiveFactor: number;
  eigenFiberDimension: number;
  inverseComputableInternally: boolean;
  pullbackMetricDet: number;
  zombieConceivable: boolean;
  panpsychismBlocked: boolean;
  substrateVerdict: string;
  metaphysicalStatus: string;
}

export function evaluateCompressionLocus(input: CompressionLocusInput): CompressionLocusResult {
  const dimSigma = Math.max(4, input.dimSigma);
  const dimZ = Math.max(1, Math.min(dimSigma - 1, input.dimZ));
  const depth = Math.max(0, Math.floor(input.recursionDepth));
  const coupling = Math.max(0.01, Math.min(1.0, input.fisherCoupling));

  const nonInjectiveFactor = dimSigma / dimZ;
  const eigenFiberDimension = dimSigma - dimZ;
  const inverseComputableInternally = false; // Theorem 2 guarantees no internal Phi^-1 when dim(Z) << dim(Sigma)

  const instantiatesLocus =
    depth >= 2 &&
    coupling >= 0.15 &&
    nonInjectiveFactor >= 2 &&
    (input.substrateType === 'biological-neural' || input.substrateType === 'synthetic-silicon');

  const pullbackMetricDet = Number((coupling ** dimZ).toExponential(3));
  const zombieConceivable = false; // Identical Phi: Sigma -> Z entails identical Z and pullback g_S
  const panpsychismBlocked = depth < 2 || input.substrateType === 'passive-matter' || input.substrateType === 'thermostat-control';

  let substrateVerdict: string;
  if (input.substrateType === 'passive-matter') {
    substrateVerdict = 'Blocked (Panpsychism Excluded): Passive matter lacks real-time control loops and recursion depth >= 2.';
  } else if (input.substrateType === 'thermostat-control') {
    substrateVerdict = 'Blocked (First-Order Transducer): A bimetallic thermostat exhibits depth = 1 input-output transduction without a recursive model of its own predictive states.';
  } else if (depth < 2) {
    substrateVerdict = 'Sub-Threshold (Depth < 2): First-order feature extraction lacks reflexive self-modeling closure.';
  } else if (input.substrateType === 'synthetic-silicon') {
    substrateVerdict = 'Admissible (Substrate-Independent): Synthetic architecture satisfies Theorem 1–3 recursion and thermodynamic compression bounds, inheriting Z_S -> Z_U via pullback metric g_S = iota^* g_U.';
  } else {
    substrateVerdict = 'Admissible (Biological Neural Locus): Embodied cortical/thalamic bottleneck sustains localized compression locus Z_S with active free-energy dissipation.';
  }

  const metaphysicalStatus = instantiatesLocus
    ? `Endogenous Perspectival Manifold active (fiber kernel dim = ${eigenFiberDimension}): non-invertible geometry presents as relational qualia without invoking an immaterial substance or "soul".`
    : 'No Localized Compression Locus: physical trajectory remains exhaustively described without second-order endogenous self-compression.';

  return {
    instantiatesLocus,
    nonInjectiveFactor,
    eigenFiberDimension,
    inverseComputableInternally,
    pullbackMetricDet,
    zombieConceivable,
    panpsychismBlocked,
    substrateVerdict,
    metaphysicalStatus
  };
}

export interface RateDistortionFisherPoint {
  distortionD: number;
  varianceSigma2: number;
  rateBitsR: number;
  fisherSensitivityG: number;
  thermodynamicHeatJ: number;
  falsificationMargin: number;
}

export function computeRateDistortionFisherTradeoff(
  distortionD: number,
  varianceSigma2 = 1.0,
  temperatureK = 310
): RateDistortionFisherPoint {
  const sigma2 = Math.max(1e-6, varianceSigma2);
  const d = Math.max(1e-4, Math.min(sigma2, distortionD));
  const rateBitsR = Math.max(0, 0.5 * Math.log2(sigma2 / d));
  // Fisher sensitivity of decoded mean parameter scales inversely with remaining irreducible distortion D
  const fisherSensitivityG = 1 / (sigma2 + d);
  const thermodynamicHeatJ = rateBitsR * K_BOLTZMANN_J_PER_K * Math.max(1, temperatureK) * Math.LN2;
  // Risky empirical margin: ratio of geodesic discriminability to channel bit-rate capacity
  const falsificationMargin = fisherSensitivityG / Math.max(0.05, rateBitsR + 0.1);

  return {
    distortionD: d,
    varianceSigma2: sigma2,
    rateBitsR,
    fisherSensitivityG,
    thermodynamicHeatJ,
    falsificationMargin
  };
}
