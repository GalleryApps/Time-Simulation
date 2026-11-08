/**
 * MODEL B: The Emergent Causal-Set Time Framework
 * 
 * Formalism:
 * - Fundamental substrate is timeless partial order C = (X, \prec)
 * - Number of elements corresponds to spacetime volume: N \sim \rho V
 * - Spacetime coordinates and macroscopic time emerge via node counting and modular thermal flow
 * - Modular operator: \Delta^{it} = e^{it K} generates Tomita-Takesaki flow
 * - Clock drift variance across sub-algebra partitions: \sigma^2(t) \propto (l_p^2 / A) t
 * - Lorentz Invariance Violation (LIV): \Delta t_LIV = \xi (E / E_p)^n (D / c)
 * - Gravitational collapse singularity resolved by kinematic anti-trapping (discreteness floor)
 */

import { CausalSetNode } from '../types/physics';

/**
 * Deterministic pseudo-random number generator for reproducible causal sprinkling
 */
function seededRandom(seed: number): () => number {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/**
 * Sprinkles discrete nodes into a 2+1D causal diamond with coordinates (t, x, y)
 * and builds the causal partial ordering matrix.
 */
export function generateCausalSet(
  count: number = 40,
  seed: number = 42
): { nodes: CausalSetNode[]; linkFluctuation: number } {
  const rand = seededRandom(seed);
  const nodes: CausalSetNode[] = [];
  
  // Diamond boundaries: |x| + |y| <= 1 - |t|, for t in [-1, 1]
  let generated = 0;
  let attempts = 0;
  
  while (generated < count && attempts < count * 20) {
    attempts++;
    const t = rand() * 2 - 1; // [-1, 1]
    const rMax = 1 - Math.abs(t);
    const x = (rand() * 2 - 1) * rMax;
    const y = (rand() * 2 - 1) * rMax;
    
    if (Math.hypot(x, y) <= rMax) {
      nodes.push({
        id: generated,
        t: Number(t.toFixed(4)),
        x: Number(x.toFixed(4)),
        y: Number(y.toFixed(4)),
        layer: 0,
        ancestors: [],
        links: []
      });
      generated++;
    }
  }
  
  // Sort temporally
  nodes.sort((a, b) => a.t - b.t);
  nodes.forEach((node, idx) => (node.id = idx));
  
  // Determine causal relations: e_i \prec e_j iff t_j - t_i > \sqrt{(x_j-x_i)^2 + (y_j-y_i)^2}
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dt = nodes[j].t - nodes[i].t;
      const dr = Math.hypot(nodes[j].x - nodes[i].x, nodes[j].y - nodes[i].y);
      if (dt > dr) {
        nodes[j].ancestors.push(nodes[i].id);
      }
    }
  }
  
  // Find nearest links (irreducible relations: no k between i and j)
  let totalLinks = 0;
  for (let j = 0; j < nodes.length; j++) {
    const directAncestors: number[] = [];
    for (const ancId of nodes[j].ancestors) {
      // Check if ancId is an ancestor of any other ancestor of j
      let isMediated = false;
      for (const otherAncId of nodes[j].ancestors) {
        if (otherAncId !== ancId && nodes[j].ancestors.includes(otherAncId)) {
          if (nodes[otherAncId].ancestors.includes(ancId)) {
            isMediated = true;
            break;
          }
        }
      }
      if (!isMediated) {
        directAncestors.push(ancId);
      }
    }
    nodes[j].links = directAncestors;
    totalLinks += directAncestors.length;
    nodes[j].layer = directAncestors.length > 0 
      ? Math.max(...directAncestors.map(id => nodes[id].layer)) + 1 
      : 0;
  }
  
  // Poisson link fluctuation \delta N / \sqrt{N}
  const expectedFluctuation = 1 / Math.sqrt(Math.max(1, count));
  
  return {
    nodes,
    linkFluctuation: Number(expectedFluctuation.toFixed(4))
  };
}

/**
 * Computes modular clock drift \sigma^2(t) = \frac{k_B T}{\hbar} \frac{l_p^2}{A} t
 * as a function of time and subsystem boundary area.
 */
export function computeModularClockDrift(
  t: number,
  boundaryArea: number = 10.0,
  planckLengthUnits: number = 1.0
): { variance: number; driftStdDev: number } {
  // Dimensionless factor
  const lp2 = planckLengthUnits * planckLengthUnits;
  const variance = (lp2 / Math.max(0.1, boundaryArea)) * Math.abs(t) * 0.15;
  const driftStdDev = Math.sqrt(variance);
  return { variance, driftStdDev };
}

/**
 * Computes Lorentz Invariance Violation (LIV) time delay in picoseconds:
 * \Delta t_{LIV} = \xi \cdot (E / E_p)^n \cdot (D / c)
 * For linear LIV (n=1) and quadratic LIV (n=2).
 */
export function computeLIVDelay(
  photonEnergyGeV: number,
  distanceMpc: number,
  order: 1 | 2 = 1,
  xi: number = 1.0
): number {
  // Planck Energy in GeV \approx 1.22 \times 10^{19} GeV
  const E_Planck_GeV = 1.22e19;
  // 1 Mpc = 3.0857 \times 10^{22} m
  // c = 3.0 \times 10^8 m/s
  // D/c in seconds:
  const D_over_c_seconds = (distanceMpc * 3.0857e22) / 3e8;
  
  const ratio = photonEnergyGeV / E_Planck_GeV;
  const factor = order === 1 ? ratio : Math.pow(ratio, 2);
  
  const delaySeconds = xi * factor * D_over_c_seconds;
  // Convert to picoseconds (1 s = 10^12 ps)
  return delaySeconds * 1e12;
}

/**
 * Computes cosmological scale factor under Causal Set discreteness kinematics
 * Minimum 4-volume V_min = l_p^4 creates an anti-trapping core
 */
export function computeCausalSetScaleFactor(
  t: number,
  aMin: number = 0.12
): { a: number; H: number; kretschmann: number } {
  // Discrete kinematic bounce: a(t) = \sqrt{a_{min}^2 + t^2}
  const a2 = aMin * aMin + t * t;
  const a = Math.sqrt(a2);
  
  const da_dt = t / a;
  const H = da_dt / a;
  
  // Kretschmann scalar
  const d2a_dt2 = (1 / a) - (t * t / Math.pow(a, 3));
  const kretschmann = 12 * (Math.pow(H, 4) + Math.pow(d2a_dt2 / a, 2) + 1e-6);
  
  return { a, H, kretschmann };
}
