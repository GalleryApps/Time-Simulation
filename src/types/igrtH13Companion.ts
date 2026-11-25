/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * IGRT-2026-H13 Companion Document (Non-Manuscript Material):
 * Houses the interpretive Part II philosophical/comparative essays ("Code-First" Ontology,
 * Compiler Problem, Category E comparisons across quantum foundations and quantum gravity)
 * and the Executive / Policy Resource Brief.
 *
 * Strictly excluded from the peer-reviewed Paper 13 manuscript exports (.tex / .pdf / .md / .html)
 * so that Paper 13 remains a disciplined theoretical and experimental physics paper.
 */

export interface H13ExecutiveSummarySpec {
  title: string;
  audienceNote: string;
  pillars: string[];
  budgetAndTimeline: string;
  policyVerdict: string;
}

export interface H13FrameworkSummarySpec {
  title: string;
  coreAxiomsLine: string;
  masterEquationsLine: string;
  frontierHypothesesLine: string;
}

export interface H13ComparisonRow {
  framework: string;
  primaryOntology: string;
  statusOfTime: string;
  relationToIgrt: string;
  keyDistinction: string;
}

export interface H13QuantumGravityComparisonRow {
  approach: string;
  foundationalPrimitive: string;
  timeResolution: string;
  singularityAndPortals: string;
  igrtOverlapAndDifference: string;
}

export const H13_COMPANION_FRAMEWORK_SUMMARY: H13FrameworkSummarySpec = {
  title: 'Companion Summary: Two-Layer Research Architecture',
  coreAxiomsLine:
    'Mathematical Core (Cat A–B2): Axioms A1–A5 reparametrize unitary time onto the projective quantum Fisher metric PU(H), link proper clock rates to modular Hamiltonians and redshift, and enforce Petz–Uhlmann BKM monotonicity without introducing low-energy deviations from QM or GR.',
  masterEquationsLine:
    'Testable Phenomenology (P14–P17, Cat C): Sub-millimeter Yukawa fifth forces below 38.6 μm (CANNEX), LVK O5 / Einstein Telescope post-merger ringdown echoes at Δt_echo = 2 r_*/c = 0.454 ms (for 10 M_☉, λ_port = 0.1), and multi-messenger PBH bounce bursts.',
  frontierHypothesesLine:
    'Interpretive Part II Layer (Cat E, separated here): Computational-ontology metaphors ("operating software", "frame-rate throttling", "cached logs", "compiler problem") kept external to the empirical physics manuscript.'
};

export const H13_COMPANION_EXECUTIVE_SUMMARY: H13ExecutiveSummarySpec = {
  title: 'Companion Policy & Programmatic Brief (Non-Manuscript Supplement)',
  audienceNote:
    'Programmatic triage note for metrology panels and funding reviewers, separated from the scholarly physics manuscript.',
  pillars: [
    '1. Immediate Metrology Priority (P14 CANNEX): Cryogenic planar force-balance runs across 10–38.6 μm directly constrain Goldberger–Wise / Kaluza–Klein Yukawa fifth forces (m_1 ≥ 5.112 meV at |α_1|=1) using existing Faraday-shielded hardware.',
    '2. Zero-Cost Archival Discovery Gates (P16–P17): Pre-registered matched-filter searches for black-hole echoes in LVK O4/O5 public strain data and FRB–TeV prompt coincidences (CHIME/CTAO) deliver decisive Bayesian odds ratios without new collider infrastructure.',
    '3. Strict Separation of Bench Analogs from Bulk Portals (P18): Superconducting transmon GJW circuits validate unitary teleportation dynamics in an engineered Hamiltonian, whereas physical 5D bulk traversability remains an open conjectural problem (Appendix I) and macroscopic transit portals are physically unachievable (femtosecond-scale shifts over μm gaps).'
  ],
  budgetAndTimeline:
    'Phase I–II (2026–2030): archival GW/FRB analyses and cryogenic sub-50 μm force-balance campaigns on existing laboratory baselines.',
  policyVerdict:
    'Approve open-data archival echo/FRB pipelines and precision short-range gravity metrology; withhold any applied "portal engineering" claims pending rigorous mathematical closure of Appendix I and empirical signals above 5σ.'
};

export const H13_COMPANION_PHILOSOPHICAL_ESSAY: string[] = [
  'Part II Interpretive Essay (Category E — Non-Empirical Lens): Throughout earlier drafts of the IGRT program, physical equations in Chapters 1–12 were paired with computational analogies: proper time as software clock ticks, gravitational redshift as local frame-rate throttling, spatial distance as synchronization latency, renormalization-group attractors as settled subroutines, decoherent records as append-only log files, and energy as processing budget.',
  'Under epistemic audit, none of these metaphors alter a single measurable scattering amplitude, clock comparison, or field equation. Axiom A1 is a pure reparametrization onto projective Hilbert space PU(H) via dτ_obs := [ℏ/(2ΔH_loc)] ds_QFI, not a derivation of external time; gravitational frame throttling describes measured GR redshift α_mod = √(−g_00); and biological self-organization (Markov blankets and metabolic free-energy budgets) operates wholly within standard classical stochastic thermodynamics and requires zero extra-dimensional or Planck-scale couplings.',
  'Accordingly, the "compiler problem" (asking why relational state geometry yields unified phenomenal experience, LIM-5) is treated strictly as an open philosophical boundary question external to experimental physics. Keeping this Part II companion separate protects the testability of Part I protocols (P14–P17) and prevents speculative ontological vocabulary from obscuring concrete empirical predictions.'
];

export const H13_COMPANION_INTERPRETATIONS_COMPARISON: H13ComparisonRow[] = [
  {
    framework: 'IGRT-H13 Interpretive Lens (Cat E)',
    primaryOntology: 'Projective quantum Fisher manifold PU(H) + local KMS modular algebras',
    statusOfTime: 'Reparametrized via local Hamiltonian variance ΔH_loc (no external time derived)',
    relationToIgrt: 'Internal computational-ontology framing paired with Part I EFT and bounce models',
    keyDistinction: 'Explicitly separates interpretive vocabulary (Cat E) from mathematical/empirical physics (Cat A–C).'
  },
  {
    framework: 'Relational Quantum Mechanics (Rovelli)',
    primaryOntology: 'Observer-relative interaction events on quantum systems',
    statusOfTime: 'Thermal time hypothesis via KMS modular flow (Connes–Rovelli)',
    relationToIgrt: 'Shares split Type I local algebra kinematics in Section 5',
    keyDistinction: 'RQM omits the 5D Einstein–Maxwell bulk portal sector and LQG bounce phenomenology.'
  },
  {
    framework: 'QBism (Fuchs, Mermin, Schack)',
    primaryOntology: 'Single-agent subjective Born-rule betting assignments',
    statusOfTime: 'Agent experiential sequence; non-dynamical in spacetime metric',
    relationToIgrt: 'Agrees on the formal epistemic status of unmeasured quantum states',
    keyDistinction: 'IGRT anchors observer records in objective Quantum Darwinism pointer states rather than subjective beliefs.'
  },
  {
    framework: 'Constructor Theory (Deutsch & Marletto)',
    primaryOntology: 'Counterfactual possible vs. impossible physical transformations',
    statusOfTime: 'Subsidiary to task feasibility and substrate-independent laws',
    relationToIgrt: 'Parallel to append-only BKM irreversibility and energy-budget speed limits',
    keyDistinction: 'Constructor theory does not specify a 5D Horndeski EFT or white-hole bounce ODE.'
  },
  {
    framework: 'Digital Physics / Cellular Automata (Fredkin, ’t Hooft)',
    primaryOntology: 'Deterministic discrete lattice on fundamental Planck cells',
    statusOfTime: 'Global discrete update counter violating manifest Lorentz covariance at lattice scale',
    relationToIgrt: 'Superficially similar terminology ("tick"), fundamentally distinct kinematics',
    keyDistinction: 'IGRT uses continuous unitary projective manifolds (PU(H)) and preserves Lorentz/diffeomorphism symmetry.'
  }
];

export const H13_COMPANION_QG_APPROACHES_COMPARISON: H13QuantumGravityComparisonRow[] = [
  {
    approach: 'AdS/CFT & Holographic GJW (Maldacena, Gao–Jafferis–Wall)',
    foundationalPrimitive: 'Asymptotically AdS bulk dual to boundary CFT',
    timeResolution: 'Boundary CFT time tracks bulk causal wedge evolution',
    singularityAndPortals: 'Two-sided traversable wormholes proven via boundary double-trace coupling',
    igrtOverlapAndDifference: 'Paper 13 Appendix I poses a boundary-free Brown–York linear-response ansatz; rigorous closure remains open.'
  },
  {
    approach: 'Loop Quantum Gravity / Planck Stars (Rovelli–Vidotto)',
    foundationalPrimitive: 'Spin-network area/volume gaps at Barbero–Immirzi γ = 0.2375',
    timeResolution: 'Relational internal clocks; spinfoam transition amplitudes',
    singularityAndPortals: 'Curvature ceiling ρ_max ≈ 0.409374 ρ_Pl drives BH-to-WH core bounce',
    igrtOverlapAndDifference: 'Paper 13 Chapter 10 adopts the LQG density bound and computes exact RK4 bounce benchmarks.'
  },
  {
    approach: 'Causal Dynamical Triangulations (Ambjørn, Jurkiewicz, Loll)',
    foundationalPrimitive: 'Piecewise-flat Lorentzian simplices with causal foliation',
    timeResolution: 'Global proper-time slicing yielding emergent 4D de Sitter phase',
    singularityAndPortals: 'Smooth IR spacetime geometry; no 5D traversable portal branch',
    igrtOverlapAndDifference: 'Agrees on RG emergence of IR Einstein dynamics (Section 6), differs on local vs. global foliation.'
  },
  {
    approach: 'Causal Set Theory (Bombelli, Lee, Meyer, Sorkin)',
    foundationalPrimitive: 'Discrete locally finite partial order (order + volume)',
    timeResolution: 'Causal precedence order is primitive; continuum metric approximate',
    singularityAndPortals: 'Fundamental spacetime discreteness; suppresses Lorentz-violating UV cutoff',
    igrtOverlapAndDifference: 'Shares append-only causal ordering intuition (Section 12) while keeping continuum QFT.'
  }
];
