/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * IGRT-2026-H13 Structured Manuscript Sections 1–13 & Markdown Compiler
 *
 * Refactored structure:
 * - Section 1: Concise Scholarly Introduction (~900 words, zero hype, zero non-technical clichés)
 * - Section 2: Standalone Empirical Falsification Program Upfront (P14, P16, P17 vs. P15/P18 baselines)
 * - Section 3: Unified 5D+4D Action & Horndeski Type Ia Lock (c_GW = c)
 * - Section 4: Kinematic Reparametrization onto PU(H) (Prop H13.1, non-circular Axiom A1)
 * - Section 5: Gravitational Redshift, Light-Cone Distance & Split Type I Algebras
 * - Section 6: RG Fixed Points & Petz Monotone Fisher Family
 * - Section 7: Detector Coarse-Graining & Quantum Darwinism
 * - Section 8: Quantum Speed Limits
 * - Section 9: Isotropic 5D Bulk Closure (F_{0y}), Lee et al. (2020) 38.6 μm Bound & GJW Sketch (Prop H13.8)
 * - Section 10: Regular White-Hole Bounce & Echo Benchmarks (Prop H13.9, 1.426e27 yr, 0.454 ms, 5.076e3 s^-1)
 * - Section 11: Pure-State Complementarity Bounds
 * - Section 12: BKM Dissipation & Landauer Bounds
 * - Section 13: Decoupled Biothermodynamics & Synthesis (Part II ontology kept in igrtH13Companion.ts)
 */

import {
  H13_META,
  H13_ABSTRACT_PARAGRAPHS,
  H13_FOUNDATIONAL_NOTE,
  H13_METRIC_SIGNATURE_BOX,
  H13_AXIOMS,
  H13_MASTER_EQUATIONS,
  H13_SCOPE_AND_NON_CLAIMS,
  H13_CORE_FALSIFICATION_CRITERIA,
  H13_TWELVE_PRINCIPLES_MATRIX,
  H13_SYMBOL_DECODER,
  H13_DIMENSIONAL_AUDIT,
  H13_BLACK_HOLE_TO_PORTAL_TAXONOMY,
  H13_PORTAL_BUILD_RECOMMENDATIONS,
  H13_WHITE_HOLE_BOUNCE_TABLE,
  H13_PROTOCOLS_P14_TO_P18,
  H13_PROTOCOL_SIGNAL_VS_SENSITIVITY,
  H13_PROTOCOL_CROSSCHECKS,
  H13_FALSIFICATION_CHECKLIST,
  H13_CONFIRMATION_CHECKLIST,
  H13_EPISTEMIC_LEDGER,
  H13_PROOF_DEVICES_AND_RECOMMENDATIONS,
  H13_SCOPE_LIMITATIONS,
  H13_RESEARCH_ROADMAP_2026_2035,
  H13_GLOSSARY,
  H13_FAQ,
  H13_APPENDICES,
  H13_ACTION_FIELD_TABLE,
  H13_KK_CONSTRAINTS_TABLE,
  H13_GJW_ASSUMPTION_MATRIX,
  H13_GJW_PROOF_STEPS,
  H13_WH_PIPELINE_SPEC,
  H13_RK4_SENSITIVITY_TABLE,
  H13_JOURNAL_DECLARATIONS,
  H13_REFERENCES,
  type H13EpistemicCategory,
  type H13ProgramTier,
  type H13Equation
} from './igrtH13Apparatus';

export interface H13TheoremBlock {
  boxKind: 'theorem' | 'proposition';
  number: string;
  title: string;
  category: H13EpistemicCategory;
  hypotheses: string[];
  statement: string;
  proofType: 'proof' | 'sketch';
  proofSteps: string[];
  provenance: string;
}

export interface H13WorkedExample {
  title: string;
  setup: string;
  steps: string[];
  resultEquation: H13Equation;
  takeaway: string;
}

export interface H13Subsection {
  number: string;
  title: string;
  category: H13EpistemicCategory;
  paragraphs: string[];
  equation?: H13Equation;
  theoremBox?: H13TheoremBlock;
  workedExample?: H13WorkedExample;
}

export interface H13Chapter {
  id: string;
  number: number;
  part: string;
  programTier: H13ProgramTier;
  title: string;
  epistemicCategory: H13EpistemicCategory;
  provenance: string;
  principleQuote: string;
  leadSummary: string;
  subsections: H13Subsection[];
}

export interface H13FrontMatterTableEntry {
  id: string;
  title: string;
  location: string;
}

export interface H13FrontMatterEquationEntry {
  label: string;
  title: string;
  location: string;
  category: H13EpistemicCategory;
}

export const H13_FRONTMATTER_TABLES_LIST: H13FrontMatterTableEntry[] = [
  { id: 'Table 0.1', title: 'Twelve Principles Mapped to Formal IGRT Tiers', location: 'Front Matter' },
  { id: 'Table 0.2', title: 'Symbol & SI Units Decoder', location: 'Front Matter' },
  { id: 'Table 0.3', title: 'SI Units & Dimensional Consistency Audit', location: 'Front Matter' },
  { id: 'Table 0.4', title: 'QM/GR Consistency Checks vs. Standalone Frontier Falsifiers', location: 'Front Matter' },
  { id: 'Table 9.1', title: 'Sealed Collapse Traps vs. Coupled Portal Nodes', location: 'Section 9' },
  { id: 'Table 9.2', title: 'Laboratory Analogs, Metrology Benchmarks & No-Go Audit (PR-1–PR-8)', location: 'Section 9' },
  { id: 'Table 10.1', title: 'White-Hole Bounce Timescales Across Mass Regimes', location: 'Section 10' },
  { id: 'Table 13.1 / 13.1b / 13.1c', title: 'Protocols P14–P18, Sensitivity & Cross-Checks', location: 'Section 13' },
  { id: 'Table 13.2 / 13.3', title: 'Epistemic Ledger & Experimental Apparatus Readiness', location: 'Section 13' },
  { id: 'Table G.1 / H.1 / I.0 / I.1 / J.1 / J.2', title: '5D Action, KK Bounds, GJW Steps & RK4 Sensitivity', location: 'Appendices G–J' }
];

export const H13_FRONTMATTER_EQUATIONS_LIST: H13FrontMatterEquationEntry[] = [
  { label: '(H13.0.1)', title: 'QFI Reparametrization & Redshift', location: 'Front Matter', category: 'CATEGORY B2 — AXIOMATIC / DERIVED WITHIN IGRT' },
  { label: '(H13.0.2)', title: 'Isotropic 5D Einstein–Maxwell Closure (F_{0y})', location: 'Front Matter', category: 'CATEGORY C — CONJECTURAL' },
  { label: '(H13.0.3)', title: 'Bulk Null Geodesic Folding Ratio η_fold', location: 'Front Matter', category: 'CATEGORY C — CONJECTURAL' },
  { label: '(H13.0.4)', title: 'White-Hole Core Bounce ODE & ρ_max = 0.409374 ρ_Pl', location: 'Front Matter', category: 'CATEGORY C — CONJECTURAL' },
  { label: '(H13.0.5)', title: 'BKM Dissipation & Pure Complementarity', location: 'Front Matter', category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)' }
];

export const H13_CHAPTERS: H13Chapter[] = [
  {
    id: 'ch-1',
    number: 1,
    part: 'PART I · EMPIRICAL ARCHITECTURE & MATHEMATICAL PHYSICS',
    programTier: 'CORE PROTECTED PROGRAM',
    title: 'Introduction: Reparametrization, 5D Closure, and Testable Horizons',
    epistemicCategory: 'CATEGORY B2 — AXIOMATIC / DERIVED WITHIN IGRT',
    provenance: 'Synthesized & refactored from IGRT-H11 [50] and IGRT-H12 [51]',
    principleQuote: 'Physical geometry distinguishes kinematic clock conventions from empirically falsifiable field extensions.',
    leadSummary:
      'Frames the empirical scope of IGRT-H13: cleanly separating standard QM+GR kinematic notation from falsifiable sub-millimeter 5D gravity, ringdown echoes, and primordial bounce signatures.',
    subsections: [
      {
        number: '1.1',
        title: 'Motivation and Strict Epistemic Partition',
        category: 'CATEGORY B2 — AXIOMATIC / DERIVED WITHIN IGRT',
        paragraphs: [
          'Modern attempts to unify quantum information geometry with semiclassical gravity frequently blur three logically distinct layers: (a) established quantum mechanics, algebraic field theory, and general relativity; (b) coordinate or geometric reparametrizations of standard dynamics; and (c) genuinely new beyond-Standard-Model field sectors that alter experimental observables. When these layers are conflated, standard textbook predictions such as gravitational redshift or interferometric complementarity are misattributed as novel confirmations of a new theory, while conjectural extra-dimensional or bounce hypotheses inherit undue theorem-level authority.',
          'IGRT-2026-H13 resolves this ambiguity by enforcing a strict six-tier classification (Categories A, B1, B2, C, D, E). Within the kinematic core (Axioms A1–A4), proper clock time is parametrized along the projective Hilbert-space quantum Fisher manifold PU(H) via dτ_obs := [ℏ/(2ΔH_loc)] ds_QFI, local clock rates track static Killing redshift α_mod = √(−g_00), spacelike regions obey algebraic microcausality [𝒜(O_A), 𝒜(O_B)] = 0, and open-system relaxation obeys Araki–Spohn Bogoliubov–Kubo–Mori (BKM) monotonicity [1, 3, 4, 8, 10, 17]. Because Anandan–Aharonov evolution ds_FS/dτ = ΔH_loc/ℏ already presupposes unitary time τ, Axiom A1 evaluates identically to dτ_obs ≡ dt: it neither derives time from timelessness nor produces any low-energy empirical deviation from standard QM or GR.',
          'Accordingly, any experimental test of optical-clock redshift (Protocol P15), two-path complementarity V² + D_QFI² = 1, or Landauer erasure heat ≥ k_B T ln 2 (Protocol P18) functions strictly as an internal consistency and metrology baseline rather than a discriminator against QM+GR. Genuine beyond-Standard-Model falsifiability rests entirely on the Category C sector: (i) a compactified 5D Einstein–Maxwell–Horndeski Type Ia brane model below the Lee et al. (2020) [28] bound λ < 38.6 μm, and (ii) a loop-quantum-gravity (LQG) density-bounded white-hole core bounce at ρ_max = 0.409374 ρ_Pl [20, 32, 33].',
          'Three technical corrections distinguish this refactored monograph from earlier drafts [50, 51]. First, the 5D bulk Einstein equations are closed across all five diagonal components using an SO(3)-isotropic bulk radial electric flux F_{0y} = E_5 e^{ky} Φ_0 (Section 9, Appendix B), eliminating the transverse-pressure inconsistency of anisotropic magnetic ansätze. Second, all white-hole bounce timescales, echo delays, Schwarzschild surface gravities, and Page evaporation masses are recomputed in SI units (Section 10, Appendix J): for a 10 M_☉ remnant, quadratic bounce delay is τ_WH^(2) = 4.500 × 10³⁴ s = 1.426 × 10²⁷ yr, surface gravity is κ = c/(2r_+) = 5.076 × 10³ s⁻¹, and the λ_port = 0.1 ringdown echo delay is Δt_echo = 2 r_*/c = 0.454 ms. Third, boundary-free traversable wormhole transfer (Appendix I) is demoted from a claimed theorem to a conditional linear-response ansatz (Proposition H13.8), and computational-ontology metaphors (Category E) are moved cleanly to a separate companion module.'
        ]
      }
    ]
  },
  {
    id: 'ch-2',
    number: 2,
    part: 'PART I · EMPIRICAL ARCHITECTURE & MATHEMATICAL PHYSICS',
    programTier: 'CORE PROTECTED PROGRAM',
    title: 'Independent Experimental Program: Protocols P14–P18',
    epistemicCategory: 'CATEGORY C — CONJECTURAL',
    provenance: 'CANNEX [43], Lee et al. [28], Bothwell et al. [12], LVK/Cardoso [35], CHIME/CTAO [45, 46]',
    principleQuote: 'Testability precedes interpretation: independent empirical gates stand prior to ontological framing.',
    leadSummary:
      'Presents the standalone frontier falsifiers (P14 sub-50 μm Yukawa, P16 GW echoes, P17 PBH white-hole bursts) upfront ahead of formal axioms, clearly separated from QM/GR baseline checks (P15, P18).',
    subsections: [
      {
        number: '2.1',
        title: 'Standalone Frontier Falsifiers (P14, P16, P17)',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'Three near-term observational and laboratory campaigns probe Category C predictions that directly distinguish IGRT-H13 extra-dimensional and core-bounce branches from pure 4D general relativity:',
          'Protocol P14 (Cryogenic CANNEX Yukawa Probe): Lee et al. (2020) [28] tested the 1/r² law down to 52 μm separation, establishing a 95% CL exclusion of Yukawa mediators above λ = 38.6 μm at |α_1| = 1 (m_1 ≥ 5.112 meV). Cryogenic Faraday-shielded planar force balances (CANNEX [43]) probe the surviving 10–38.6 μm band; 5σ exclusion of |α_1| < 0.5 rules out the accessible Goldberger–Wise radion branch.',
          'Protocol P16 (Stacked Ringdown Echo Search): For a 10 M_☉ compact remnant with effective surface cutoff λ_port = 0.1 (r_* = r_+ |ln 0.1| = 68.00 km), trapped quasinormal modes produce post-merger gravitational-wave echoes separated by Δt_echo = 2 r_*/c = 0.454 ms (~0.45 ms) [35, 44]. Coherent matched-filter stacking across ≥ 30 high-SNR LVK O5 / Einstein Telescope binary black-hole mergers yielding Bayes factor Δ ln Z < −5 excludes λ_port ≥ 0.1.',
          'Protocol P17 (Multi-Messenger PBH Bounce Trigger): Real-time CHIME/DSA-2000 radio dispersion alerts (< 200 ms latency) linked to CTAO TeV gamma-ray follow-up [45, 46] test whether primordial black holes near the Page evaporation boundary (4.30 × 10¹⁴ g at f = 15.35, or 5.00 × 10¹⁴ g at f ≈ 24.14 [34]) or sub-lunar quadratic progenitors (~6.19 × 10²⁵ g at c_HR = 1) terminate in bounce bursts with inverse-mass spectral lag.'
        ]
      },
      {
        number: '2.2',
        title: 'Standard QM/GR Consistency & Analog Metrology Baselines (P15, P18)',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'By explicit contrast, Protocols P15 and P18 verify consistency with standard relativity, quantum mechanics, and circuit-QED analogs without providing standalone discrimination against QM+GR. Protocol P15 compares cryogenic ⁸⁷Sr/¹⁷¹Yb optical-lattice clocks across Δh ≥ 100 m against Δν/ν = gΔh/c² = 1.0911 × 10⁻¹⁶ m⁻¹ [12]. Protocol P18 combines a dual-rail superconducting transmon GJW teleportation bench (fidelity F > 0.72, causal delay Δt_ext ≥ d_ext/c, sign-flip control g_int → −g_int [47]) with weak-QND pure-state complementarity V² + D_QFI² = 1 and nanoscale Landauer calorimetry ≥ 2.871 × 10⁻²¹ J/bit [16, 40].'
        ]
      }
    ]
  },
  {
    id: 'ch-3',
    number: 3,
    part: 'PART I · EMPIRICAL ARCHITECTURE & MATHEMATICAL PHYSICS',
    programTier: 'CORE PROTECTED PROGRAM',
    title: 'Unified 5D + 4D Effective Action and Horndeski Type Ia Lock',
    epistemicCategory: 'CATEGORY C — CONJECTURAL',
    provenance: 'Randall–Sundrum [22, 23], Goldberger–Wise [24], Kobayashi [19], GW170817 [18]',
    principleQuote: 'Every scalar-tensor and 5D bulk sector must satisfy GW170817 tensor speed and contracted Bianchi conservation.',
    leadSummary:
      'Specifies the unified action S_H13 across five variational sectors, locking gravitational-wave speed c_GW = c via Type Ia Horndeski conditions.',
    subsections: [
      {
        number: '3.1',
        title: 'Action Sectors and c_GW = c Selection',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'Combining 5D bulk gravity, Goldberger–Wise radion stabilization [24], bulk electromagnetic flux, and a 4D brane scalar-tensor sector yields the effective action summarized in Table G.1. Following GW170817 / GRB 170817A (|c_GW/c − 1| < 10⁻¹⁵ [18]), Kobayashi’s Horndeski classification [19] restricts viable luminal models to Type Ia: G_4,X = G_5 = 0, leaving G_2(φ,X) = K(φ,X), cubic braiding G_3(φ,X) □φ, and conformal coupling G_4(φ) R^(4) free of ghost and gradient instabilities (kinetic coefficient 1 + 2 G_4,X / M_Pl² ≡ 1).',
          'Projection onto the 4D brane via Gauss–Codazzi junction conditions [48] produces effective Einstein equations G_μν^(4) = 8πG (T_μν^SM + T_μν^φ) − E_μν^(5), where Bianchi identity ∇^μ G_μν^(4) = 0 enforces covariant brane-bulk stress conservation.'
        ],
        equation: {
          label: '(H13.3.1)',
          unicodeHtml: '<i>c</i><sub>GW</sub>² / <i>c</i>² = <i>G</i><sub>4</sub>(<i>φ</i>) / [<i>G</i><sub>4</sub>(<i>φ</i>) − 2<i>X G</i><sub>4,<i>X</i></sub>] ≡ 1 &nbsp;&nbsp;(<i>G</i><sub>4,<i>X</i></sub> = <i>G</i><sub>5</sub> = 0)',
          caption: 'Exact luminal gravitational-wave lock across cosmological epochs [18, 19].',
          category: 'CATEGORY C — CONJECTURAL'
        }
      }
    ]
  },
  {
    id: 'ch-4',
    number: 4,
    part: 'PART I · EMPIRICAL ARCHITECTURE & MATHEMATICAL PHYSICS',
    programTier: 'CORE PROTECTED PROGRAM',
    title: 'Kinematic Reparametrization of Proper Time onto PU(H)',
    epistemicCategory: 'CATEGORY B2 — AXIOMATIC / DERIVED WITHIN IGRT',
    provenance: 'Braunstein & Caves [3]; Anandan & Aharonov [4]; Page & Wootters [49]',
    principleQuote: 'Axiom A1 reparametrizes unitary evolution geometrically along PU(H) without deriving time externally.',
    leadSummary:
      'Establishes Definition H13.1 and Proposition H13.1 cleanly, demonstrating that dτ_obs := [ℏ/(2ΔH_loc)] ds_QFI is empirically equivalent to standard Schrödinger time.',
    subsections: [
      {
        number: '4.1',
        title: 'Projective Quantum Fisher Metric and Non-Circular Audit',
        category: 'CATEGORY B2 — AXIOMATIC / DERIVED WITHIN IGRT',
        paragraphs: [
          'On projective Hilbert space PU(H), the Fubini–Study distance ds_FS between adjacent pure states obeys the Anandan–Aharonov kinematic relation ds_FS / dt = ΔH_loc / ℏ [4] under unitary evolution iℏ ∂_t |ψ⟩ = H_loc |ψ⟩. Because the symmetric logarithmic derivative quantum Fisher metric satisfies I_SLD = 4 g_FS on pure states [3, 14], ds_QFI = 2 ds_FS.',
          'In earlier IGRT expositions [50], substituting ds_FS/dτ = ΔH_loc/ℏ into dτ_obs := [ℏ/(2ΔH_loc)] ds_QFI was presented as a derivation of time. That inference is circular because Anandan–Aharonov already assumes Schrödinger parameter τ = t. Properly stated, Axiom A1 is a pure geometric reparametrization onto PU(H): for stationary states ΔH_loc = 0, ds_QFI = 0, while for non-stationary states dτ_obs ≡ dt identically, predicting zero empirical deviations from standard QM.'
        ],
        equation: {
          label: '(H13.4.1)',
          unicodeHtml: 'd<i>τ</i><sub>obs</sub> := [<i>ℏ</i> / (2 Δ<i>H</i><sub>loc</sub>)] d<i>s</i><sub>QFI</sub> ≡ d<i>t</i>, &nbsp;&nbsp; <i>τ</i><sub>step</sub> = <i>πℏ</i> / (2 Δ<i>H</i><sub>loc</sub>)',
          caption: 'Exact identity on PU(H) together with the Mandelstam–Tamm orthogonalization step.',
          category: 'CATEGORY B2 — AXIOMATIC / DERIVED WITHIN IGRT'
        },
        theoremBox: {
          boxKind: 'proposition',
          number: 'Proposition H13.1',
          title: 'Geometric Reparametrization of Proper Time on PU(H)',
          category: 'CATEGORY B2 — AXIOMATIC / DERIVED WITHIN IGRT',
          hypotheses: [
            '|ψ(t)⟩ evolves unitarily under H_loc with ΔH_loc > 0 and I_SLD = 4 g_FS.'
          ],
          statement:
            'The parameter dτ_obs := [ℏ/(2ΔH_loc)] ds_QFI defines a reparametrization-invariant arc-length coordinate identically equal to unitary coordinate time dt, adding no new low-energy physical predictions beyond QM.',
          proofType: 'sketch',
          proofSteps: [
            'From Anandan–Aharonov [4], unitary Schrödinger evolution fixes ds_FS = (ΔH_loc/ℏ) dt along the projective ray trajectory.',
            'Pure-state SLD Fisher line element satisfies ds_QFI = 2 ds_FS [3], giving ds_QFI = (2 ΔH_loc / ℏ) dt.',
            'Substituting into Axiom A1 returns dτ_obs = [ℏ/(2ΔH_loc)] · (2ΔH_loc/ℏ) dt ≡ dt identically.'
          ],
          provenance: 'Braunstein & Caves [3]; Anandan & Aharonov [4]; Appendix A'
        }
      }
    ]
  },
  {
    id: 'ch-5',
    number: 5,
    part: 'PART I · EMPIRICAL ARCHITECTURE & MATHEMATICAL PHYSICS',
    programTier: 'CORE PROTECTED PROGRAM',
    title: 'Gravitational Redshift, Light-Cone Distance, and Split Type I Algebras',
    epistemicCategory: 'CATEGORY A — ESTABLISHED',
    provenance: 'Bisognano–Wichmann [1]; Haag [8]; Doplicher–Longo [9]; Bothwell et al. [12]',
    principleQuote: 'Measured gravitational redshift and spacelike local-algebra independence belong strictly to established relativity and AQFT.',
    leadSummary:
      'Recovers optical-clock redshift α_mod = √(−g_00), metric properties of operational ping distance, and split Type I microcausality without interpretive overclaims.',
    subsections: [
      {
        number: '5.1',
        title: 'Killing Redshift and Modular Clock Scaling',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Along any static spacetime Killing vector ξ^μ, the proper clock lapse α_mod(x) = √(−g_00(x)) relates local proper time to asymptotic coordinate time t_∞. Across vertical elevation Δh in weak Earth gravity, Δν/ν = gΔh/c² = 1.0911 × 10⁻¹⁶ m⁻¹, verified down to millimeter scales by optical-lattice clocks [12] and GNSS +38.64 μs/day synchronization [11]. Local Rindler wedges carry Bisognano–Wichmann modular Hamiltonian K_ξ = 2π H_boost / (ℏκ) [1].'
        ],
        theoremBox: {
          boxKind: 'theorem',
          number: 'Theorem H13.2',
          title: 'Static Gravitational Redshift Ratio',
          category: 'CATEGORY A — ESTABLISHED',
          hypotheses: [
            'a static metric g_μν with Killing timelike field ξ = ∂_t and weak-field potential Φ_N(r) = −GM/r.'
          ],
          statement:
            'Relative frequency shift between elevations r_1 and r_2 equals Δν/ν = α_mod(r_2)/α_mod(r_1) − 1 ≈ gΔh/c² = 1.0911 × 10⁻¹⁶ m⁻¹.',
          proofType: 'proof',
          proofSteps: [
            'Proper time along a static worldline satisfies dτ = √(−g_00) dt_∞ = √(1 − 2GM/(c²r)) dt_∞.',
            'Comparing radial separations r_2 − r_1 = Δh ≪ R_⊕ expands √(1 + 2ΔΦ_N/c²) − 1 ≈ gΔh/c².'
          ],
          provenance: 'Standard GR; Bothwell et al. [12]'
        }
      },
      {
        number: '5.2',
        title: 'Operational Light-Cone Distance & Split Local Algebras',
        category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)',
        paragraphs: [
          'Operational radar/ping distance d_sync(A, B) = (c/2)(t_rx − t_tx) satisfies non-negativity, symmetry, and the causal triangle inequality along static Riemannian spatial slices, recovering standard 3-geometry without requiring unverified entanglement-to-metric inversions. When mutual information decays exponentially with correlation length ℓ_ent, I(A:B) ≤ I_0 e^{−d/ℓ_ent} provides an upper correlation envelope [8].',
          'For spacelike-separated diamonds O_A ⊥ O_B, microcausality [𝒜(O_A), 𝒜(O_B)] = 0 and the Buchholz–Doplicher–Longo split property [9] guarantee a Type I tensor product 𝒩_A ⊗ 𝒩_B isolating independent local measurement algebras. Note that this theorem holds strictly for spacelike algebras and does not by itself establish coupled-wormhole backreaction in Appendix I.'
        ],
        theoremBox: {
          boxKind: 'theorem',
          number: 'Theorem H13.3',
          title: 'Metric Consistency of Operational Ping Distance & Split Microcausality',
          category: 'CATEGORY A — ESTABLISHED',
          hypotheses: [
            'a globally hyperbolic static region with causal diamonds O_A ⊥ O_B satisfying Haag microcausality and nuclearity.'
          ],
          statement:
            'Operational radar distance d_sync defines a Riemannian metric on constant-t slices, while spacelike observables commute [𝒜(O_A), 𝒜(O_B)] = 0 and factor across a split Type I algebra.',
          proofType: 'proof',
          proofSteps: [
            'In static coordinates ds² = −α² dt² + γ_ij dx^i dx^j, null rays obey dt = √γ_ij dx^i dx^j / α, making d_sync a Riemannian optical-metric geodesic distance.',
            'Buchholz–Doplicher–Longo nuclearity ensures intermediate Type I factor 𝒩_A with 𝒩_A ∨ 𝒩_B ≃ 𝒩_A ⊗ 𝒩_B [9].'
          ],
          provenance: 'Haag [8]; Buchholz, Doplicher & Longo [9]'
        }
      }
    ]
  },
  {
    id: 'ch-6',
    number: 6,
    part: 'PART I · EMPIRICAL ARCHITECTURE & MATHEMATICAL PHYSICS',
    programTier: 'CORE PROTECTED PROGRAM',
    title: 'Renormalization-Group Attractors and the Petz Fisher Family',
    epistemicCategory: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)',
    provenance: 'Petz [13]; Tóth & Petz [14]; Petz & Sudár [15]; Bera et al. [16]',
    principleQuote: 'Mixed-state quantum information geometry admits an operator-monotone Petz continuum, collapsing to 4 g_FS on pure states.',
    leadSummary:
      'Corrects the uniqueness claim for quantum Fisher metrics via Petz classification and frames macroscopic Einstein–Horndeski dynamics as RG infrared attractors.',
    subsections: [
      {
        number: '6.1',
        title: 'Petz Monotone Metrics and Pure-State SLD Reduction',
        category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)',
        paragraphs: [
          'Unlike classical probability distributions, where Chentsov’s theorem singles out a unique Fisher–Rao metric, non-commuting density matrices admit an infinite continuum of contractive Riemannian metrics characterized by Petz’s theorem [13, 15]. Each metric corresponds to an operator-monotone function f(t) satisfying f(t) = t f(1/t), bounded between the smallest SLD metric f_SLD(t) = (1+t)/2 and the largest harmonic-mean metric f_min(t) = 2t/(1+t), with the BKM metric f_BKM(t) = (t−1)/ln t governing thermal relative entropy [14, 16].',
          'For pure-state clock trajectories in Section 4, every symmetric Petz normalization collapses onto 4 g_FS, eliminating metric ambiguity on pure projective rays while preserving full Petz flexibility for mixed open-system dynamics.'
        ],
        theoremBox: {
          boxKind: 'theorem',
          number: 'Theorem H13.5',
          title: 'Petz Classification and Pure-State Reduction',
          category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)',
          hypotheses: [
            'a finite-dimensional Hilbert space with CPTP-contractive Riemannian metrics g^f on full-rank states ρ > 0.'
          ],
          statement:
            'Every contractive monotone metric corresponds bijectively to an operator-monotone Petz function f_min(t) ≤ f(t) ≤ f_SLD(t), reducing uniquely to 4 g_FS in the pure-state SLD limit.',
          proofType: 'proof',
          proofSteps: [
            'Petz (1996) [13] proves g^f_ρ(A,B) = Tr(A c_f(L_ρ, R_ρ) B) is CPTP-monotone iff c_f(x,y) = (y f(x/y))⁻¹ for operator-monotone f.',
            'Taking the pure-state limit ρ → |ψ⟩⟨ψ| fixes SLD Fisher information I_SLD = 4 (ΔH_loc/ℏ)² [3, 14].'
          ],
          provenance: 'Petz [13]; Tóth & Petz [14]; Petz & Sudár [15]'
        }
      }
    ]
  },
  {
    id: 'ch-7',
    number: 7,
    part: 'PART I · EMPIRICAL ARCHITECTURE & MATHEMATICAL PHYSICS',
    programTier: 'SUBORDINATE EXTENSION',
    title: 'Macroscopic Instrument Coarse-Graining and Pointer Redundancy',
    epistemicCategory: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)',
    provenance: 'Zurek [37]; Riedel & Zurek [38]',
    principleQuote: 'Macroscopic detectors sample ~10⁴² Planck intervals through environment-induced pointer redundancy.',
    leadSummary:
      'Explains temporal coarse-graining in laboratory instruments using Quantum Darwinism without invoking speculative neural quantum collapse.',
    subsections: [
      {
        number: '7.1',
        title: 'Decoherence Time Averaging Without Neural Speculation',
        category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)',
        paragraphs: [
          'A macroscopic detector integrating over τ_int = 80 ms averages over N_Pl = 0.080 s / t_Pl ≈ 1.48 × 10⁴² Planck timescales. Stability of classical measurement records follows directly from environment-induced superselection and Quantum Darwinism [37, 38], in which environmental fragments broadcast redundant copies of commuting pointer observables.',
          'Consistent with referee separation of empirical physics from unsupported biological speculation, no hypothesis of Planck-scale quantum coherence or gravitational collapse inside biological neurons is assumed.'
        ],
        theoremBox: {
          boxKind: 'theorem',
          number: 'Theorem H13.6',
          title: 'Pointer Redundancy in Macroscopic Record Formation',
          category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)',
          hypotheses: [
            'a system S coupled to an N-fragment environment E = ⊗_{k=1}^N E_k via a pointer-commuting interaction.'
          ],
          statement:
            'Off-diagonal coherences decay exponentially on the decoherence timescale τ_dec ≪ 80 ms while mutual information I(S : F) reaches a classical plateau H(S) across small environment fractions F.',
          proofType: 'proof',
          proofSteps: [
            'Orthogonality of fragment conditional states ⟨e_i^(k) | e_j^(k)⟩ = ε_{ij} suppresses cross terms by Π_k ε_{ij} ~ e^{−N Γ t}.',
            'Classical pointer records stabilize redundantly at ~1.48 × 10⁴² Planck durations per 80 ms macroscopic sampling window [37].'
          ],
          provenance: 'Zurek [37]; Riedel & Zurek [38]'
        }
      }
    ]
  },
  {
    id: 'ch-8',
    number: 8,
    part: 'PART I · EMPIRICAL ARCHITECTURE & MATHEMATICAL PHYSICS',
    programTier: 'CORE PROTECTED PROGRAM',
    title: 'Quantum Speed Limits as Dynamical Update Budgets',
    epistemicCategory: 'CATEGORY A — ESTABLISHED',
    provenance: 'Margolus & Levitin [5]; Mandelstam & Tamm [6]; Deffner & Campbell [7]',
    principleQuote: 'Available excitation energy bounds the rate of orthogonal state transitions.',
    leadSummary:
      'Establishes exact quantum speed-limit coefficients with ground-state offset E_0 = 0 explicitly normalized.',
    subsections: [
      {
        number: '8.1',
        title: 'Mandelstam–Tamm and Margolus–Levitin Bounds',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Assuming Hamiltonian ground state normalized to E_0 = 0 so ⟨E⟩ = ⟨H⟩ − E_0 ≥ 0, the maximum rate ν_max of orthogonal quantum state transitions is bounded jointly by the Mandelstam–Tamm variance limit 2ΔE/(πℏ) [6] and the Margolus–Levitin mean-energy limit 2⟨E⟩/(πℏ) [5]. At ⟨E⟩ = 1 J, ν_max = 2 / (π × 1.054571817 × 10⁻³⁴) = 6.040 × 10³³ updates s⁻¹ J⁻¹ [7].'
        ],
        theoremBox: {
          boxKind: 'theorem',
          number: 'Theorem H13.7',
          title: 'Unified Quantum Speed Limit',
          category: 'CATEGORY A — ESTABLISHED',
          hypotheses: [
            'a pure state evolving between orthogonal states under time-independent H ≥ E_0 = 0.'
          ],
          statement:
            'The minimum orthogonalization time satisfies τ_⊥ ≥ max(πℏ/(2ΔE), πℏ/(2⟨E⟩)), capping updates at 6.040 × 10³³ s⁻¹ J⁻¹.',
          proofType: 'proof',
          proofSteps: [
            'Mandelstam–Tamm follows from integrating ds_FS/dt = ΔE/ℏ over arc length π/2 [4, 6].',
            'Margolus–Levitin follows from Re Σ c_n² e^{−i E_n t/ℏ} = 0 and trigonometric bound cos x ≥ 1 − 2(x + sin x)/π [5].'
          ],
          provenance: 'Margolus & Levitin [5]; Mandelstam & Tamm [6]; Deffner & Campbell [7]'
        }
      }
    ]
  },
  {
    id: 'ch-9',
    number: 9,
    part: 'PART I · EMPIRICAL ARCHITECTURE & MATHEMATICAL PHYSICS',
    programTier: 'CORE PROTECTED PROGRAM',
    title: 'Isotropic 5D Bulk Shortcuts, Lee et al. (2020) Bounds, and Boundary-Free GJW',
    epistemicCategory: 'CATEGORY C — CONJECTURAL',
    provenance: 'Lee et al. [28]; Kapner et al. [29]; Gao–Jafferis–Wall [25]; Brown–York [27]',
    principleQuote: 'SO(3)-isotropic electric flux F_{0y} closes all five Einstein equations; macroscopic portals remain impossible below 38.6 μm.',
    leadSummary:
      'Solves all 5 Einstein equations identically via bulk electric flux F_{0y}, enforces Lee et al. (2020) 38.6 μm limits, states Proposition H13.8 as a conditional linear-response sketch, and presents laboratory analogs PR-1–PR-8.',
    subsections: [
      {
        number: '9.1',
        title: 'Isotropic 5D Bulk Closure with Radial Electric Flux F_{0y}',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'For the warped 5D bulk metric ds_5² = −e^{2ky} c² dt² + dx₁² + dx₂² + dx₃² + Φ_0² dy², the five diagonal Einstein tensor components are G^0_0 = G^y_y = 0 and G^1_1 = G^2_2 = G^3_3 = +k²/Φ_0². Previous magnetic ansätze using a single component F_{xy} produce anisotropic brane stress T^1_1 = +B²/2 vs. T^2_2 = T^3_3 = −B²/2, which violates 3D rotational symmetry and forces B = 0 ⇒ k = 0.',
          'To close all five diagonal Einstein equations identically while preserving exact SO(3) brane isotropy, we replace F_{xy} with a radial bulk electric flux F_{0y} = E_5 e^{ky} Φ_0 (Appendix B). This solves Maxwell’s equation ∂_y(√(−g_5) F^{0y}) = ∂_y(−E_5) = 0 identically and yields T^A_B^EM = diag(−1/2, +1/2, +1/2, +1/2, −1/2) E_5². Pairing this with bulk vacuum energy M_5³ Λ_5 + V_GW(φ_0) = −E_5²/2 closes every component identically: M_5³ G^0_0 = M_5³ G^y_y = 0 and M_5³ G^i_i = E_5² = M_5³ k²/Φ_0², while obeying 5D null energy G_{AB} k^A k^B ≥ 0.',
          'Null geodesics dipping into the bulk across brane span Δx obey η_fold = sin(kΔx/2)/(kΔx/2). At kΔx = 2 rad (turning angle θ = 1 rad), η_fold = sin(1)/1 = 0.841471; the extremal turnaround θ = π/2 gives 2/π = 0.636620, whereas kΔx → 0 yields 1. Under Lee et al. (2020) [28], torsion balances down to 52 μm restrict Yukawa extra dimensions at |α_1| = 1 to R_5 < 38.6 μm (m_1 = 5.112 meV, M_5 = 1.690 × 10⁸ GeV; updating Kapner et al. 2007 44 μm [29]). Consequently, even an extremal 36.3% shortcut across R_5 ≤ 38.6 μm shifts light arrival times by only ~21–47 femtoseconds, confirming that macroscopic transit portals are physically unachievable.'
        ],
        workedExample: {
          title: 'Worked Audit 9.1 · Five-Component Stress Balance & Femtosecond Ceiling',
          setup: 'Verify exact balance of G^A_B = (1/M_5³)(T^A_B^EM − (M_5³ Λ_5 + V_GW) δ^A_B) for F_{0y} = E_5 e^{ky} Φ_0.',
          steps: [
            'Evaluate F_{CD} F^{CD} = 2 F_{0y} g^{00} g^{yy} F_{0y} = −2 E_5².',
            'Compute T^0_0^EM = T^y_y^EM = −E_5² + E_5²/2 = −E_5²/2 and T^1_1^EM = T^2_2^EM = T^3_3^EM = +E_5²/2.',
            'Set M_5³ Λ_5 + V_GW = −E_5²/2 so −(M_5³ Λ_5 + V_GW) δ^A_B = +E_5²/2 δ^A_B.',
            'Sum: (0,0) & (y,y) give 0 = G^0_0 = G^y_y; (1,1), (2,2), (3,3) give +E_5²/M_5³ = k²/Φ_0² identically.'
          ],
          resultEquation: {
            label: '(H13.9.1)',
            unicodeHtml: '<i>M</i><sub>5</sub>³ <i>k</i>² / <i>Φ</i><sub>0</sub>² = <i>E</i><sub>5</sub>², &nbsp;&nbsp; Δ<i>t</i><sub>max</sub> = (1 − 2/<i>π</i>)(38.6 <i>μ</i>m / <i>c</i>) ≈ 46.8 fs',
            caption: 'Isotropic 5D bulk balance and femtosecond transit bound under Lee et al. (2020) [28].',
            category: 'CATEGORY C — CONJECTURAL'
          },
          takeaway: 'Isotropy is restored identically, while R_5 < 38.6 μm confines measurable 5D physics to sub-50 μm force-balance probes (P14).'
        }
      },
      {
        number: '9.2',
        title: 'Boundary-Free GJW Linear-Response Sketch (Conditional Conjecture)',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'Unlike AdS/CFT Gao–Jafferis–Wall (GJW) teleportation [25, 26], which relies on asymptotic AdS boundaries and CFT double-trace deformations, a boundary-free Brown–York quasilocal setup at r_c > r_+ [27] lacks a rigorous proof of backreacted negative ANEC. Here we formulate a conditional linear-response ansatz using a causal bosonic transducer H_int = g f(τ) Φ_L Φ_R (Table I.1, Appendix I). We explicitly avoid misapplying the spacelike Doplicher–Longo split theorem [9] to wormhole coupling; nonlinear backreaction remains an open problem queued for standalone Note I. All external causal links obey Δt_ext ≥ d_ext / c.'
        ],
        theoremBox: {
          boxKind: 'proposition',
          number: 'Prop H13.8',
          title: 'Conditional 5D Closure & Quasilocal GJW Linear-Response Sketch',
          category: 'CATEGORY C — CONJECTURAL',
          hypotheses: [
            'the isotropic 5D bulk ansatz F_{0y} = E_5 e^{ky} Φ_0 (App. B) together with a quasilocal Brown–York screen r_c > r_+ and assumed linear-response Hadamard ANEC shift (App. I).'
          ],
          statement:
            '(i) All 5 diagonal 5D Einstein components close identically with η_fold = 0.841471 at kΔx = 2 rad; (ii) assuming first-order Rindler commutator response yields ∫⟨T_UU⟩ dU < 0 under bosonic coupling g f(τ) Φ_L Φ_R, left-to-right signals shift by ΔU < 0 while preserving Δt_ext ≥ d_ext/c.',
          proofType: 'sketch',
          proofSteps: [
            '5D metric & F_{0y} close (0,0), (i,i), (y,y) identically as shown in Worked Audit 9.1 and Appendix B.',
            'Quasilocal Brown–York screen r_c > r_+ truncates the exterior Rindler wedge with causal bosonic transducer H_int = g f(τ) Φ_L Φ_R.',
            'Linear-response ansatz assumes ∫⟨T_UU⟩ dU = −|C| g < 0 for appropriate sign(g); rigorous nonlinear proof beyond this ansatz remains open (Note I).'
          ],
          provenance: 'Appendices B, G, H, I (Conditional Sketch; NO Q.E.D.)'
        }
      }
    ]
  },
  {
    id: 'ch-10',
    number: 10,
    part: 'PART I · EMPIRICAL ARCHITECTURE & MATHEMATICAL PHYSICS',
    programTier: 'CORE PROTECTED PROGRAM',
    title: 'Regular Black-Hole-to-White-Hole Bounce and Echo Phenomenology',
    epistemicCategory: 'CATEGORY C — CONJECTURAL',
    provenance: 'Ashtekar et al. [20]; Hayward [31]; Rovelli–Vidotto [32]; Haggard–Rovelli [33]; Page [34]',
    principleQuote: 'Plancks-density saturation replaces singularities with a finite rebound and verifiable echo lag.',
    leadSummary:
      'Derives the LQG-bounded bounce ODE, verifies ρ_max = 0.409374 ρ_Pl, corrects 10 M_☉ quadratic timescale (1.426 × 10²⁷ yr), echo lag (0.454 ms), surface gravity (5.076 × 10³ s⁻¹), and Page factors.',
    subsections: [
      {
        number: '10.1',
        title: 'ODE Rebound, Astrophysical Timescales & Page Factors',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'Incorporating the LQG density ceiling ρ_max = √3 / (32π² γ³) ρ_Pl = 0.409374 ρ_Pl at γ = 0.2375 [20, 21] regulates classical black-hole collapse at R_bounce = [3M/(4π ρ_max)]^{1/3} and Hayward remnant root M_rem = 1.09236 M_Pl [31]. In dimensionless variables u = R/R_bounce and s = τ/τ_0, effective interior shell motion obeys d²u/ds² = −1/(2u²) + 2/u⁵ (Appendix J), rebounding at exact turning point u_min = 1.000000 with acceleration +3/2 and RK4 Hamiltonian residual < 10⁻¹⁰.',
          'Correcting earlier scaling errors [51] yields exact SI timescales (Table 10.1): for a 10 M_☉ black hole (r_+ = 29.53 km), the interior bounce takes τ_int = 8GM/(3c³) = 1.310 × 10⁻⁴ s, while the Haggard–Rovelli quadratic exterior lifetime [33] is τ_WH^(2) = c_HR t_Pl (M/M_Pl)² = 4.500 × 10³⁴ s = 1.426 × 10²⁷ yr at c_HR = 1 (spanning [1.43×10²⁵, 1.43×10²⁸] yr for c_HR ∈ [10⁻², 10¹]), and the cubic lifetime is τ_WH^(3) = 2.095 × 10⁶⁷ yr. For a 10⁸ M_☉ AGN black hole, τ_WH^(2) = 1.426 × 10⁴¹ yr and τ_WH^(3) = 2.095 × 10⁹¹ yr.',
          'Near-horizon echo timing at λ_port = 0.1 gives tortoise span r_* = r_+ |ln 0.1| = 68.00 km, echo interval Δt_echo = 2 r_*/c = 0.454 ms (~0.45 ms), and Schwarzschild surface gravity κ = c/(2r_+) = 5.076 × 10³ s⁻¹ (Table 10.1; Protocol P16). For primordial black holes evaporating at t_0 = 13.8 Gyr under Page (1976) [34], single-photon f = 1 gives 1.730 × 10¹⁴ g, standard f = 15.35 yields 4.30 × 10¹⁴ g, and reaching 5.00 × 10¹⁴ g requires f ≈ 24.14.'
        ],
        theoremBox: {
          boxKind: 'proposition',
          number: 'Prop H13.9',
          title: 'White-Hole Bounce ODE & Corrected Astrophysical Benchmarks',
          category: 'CATEGORY C — CONJECTURAL',
          hypotheses: [
            'LQG density ceiling ρ_max = 0.409374 ρ_Pl (γ = 0.2375) and dimensionless rebound dynamics d²u/ds² = −1/(2u²) + 2/u⁵.'
          ],
          statement:
            'Radial collapse reverses at u_min = 1.000000 with acceleration +3/2, producing 10 M_☉ quadratic delay 1.426 × 10²⁷ yr (c_HR=1), κ = 5.076 × 10³ s⁻¹, and λ_port = 0.1 echo delay Δt_echo = 0.454 ms.',
          proofType: 'sketch',
          proofSteps: [
            'First integral (du/ds)² = 1/u − 1/u⁴ vanishes identically at u_min = 1, where d²u/ds² = −1/2 + 2 = +3/2.',
            'Direct SI evaluation for 10 M_☉ (M/M_Pl = 9.1361 × 10³⁸) gives t_Pl (M/M_Pl)² = 4.500 × 10³⁴ s = 1.426 × 10²⁷ yr.',
            'Schwarzschild κ = c/(2r_+) = 5.076 × 10³ s⁻¹ and r_* = r_+ |ln 0.1| = 68.00 km yield Δt_echo = 2 r_*/c = 0.454 ms.'
          ],
          provenance: 'Ashtekar et al. [20]; Haggard & Rovelli [33]; Page [34]; Appendix J (Numerical Sketch; NO Q.E.D.)'
        }
      }
    ]
  },
  {
    id: 'ch-11',
    number: 11,
    part: 'PART I · EMPIRICAL ARCHITECTURE & MATHEMATICAL PHYSICS',
    programTier: 'SUBORDINATE EXTENSION',
    title: 'Pure-State Quantum Complementarity Bounds',
    epistemicCategory: 'CATEGORY A — ESTABLISHED',
    provenance: 'Englert [36]; Bera et al. [16]',
    principleQuote: 'Strict duality V² + D_QFI² = 1 holds for pure two-way interferometry and relaxes to ≤ 1 for mixed or N-slit states.',
    leadSummary:
      'Proves Englert–QFI duality strictly under its valid pure N=2 conditions.',
    subsections: [
      {
        number: '11.1',
        title: 'Visibility vs. Which-Way Fisher Distinguishability',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'For a symmetric two-way interferometer coupled to pure detector states |d_1⟩, |d_2⟩, fringe visibility is V = |⟨d_1|d_2⟩| and pure-state which-way distinguishability satisfies D_QFI = √(1 − |⟨d_1|d_2⟩|²), yielding exact equality V² + D_QFI² = 1 [36]. For mixed detector states or N > 2 slits, convexity softens the relation to V² + D_QFI² ≤ 1 [16]. As noted in Table 0.4, this is a standard QM check rather than a new-physics falsifier.'
        ],
        theoremBox: {
          boxKind: 'theorem',
          number: 'Theorem H13.10',
          title: 'Two-Path Pure-State Complementarity Equality',
          category: 'CATEGORY A — ESTABLISHED',
          hypotheses: [
            'a balanced two-way interferometer coupled to pure detector states |d_1⟩, |d_2⟩.'
          ],
          statement: 'Interference visibility V and path distinguishability obey V² + D_QFI² = 1, relaxing to ≤ 1 for mixed or N-slit states.',
          proofType: 'proof',
          proofSteps: [
            'Off-diagonal interferometer coherence scales as ρ_12 = ½⟨d_2|d_1⟩, giving V = |⟨d_1|d_2⟩|.',
            'Pure-state Bures/QFI distinguishability D_QFI² = 1 − |⟨d_1|d_2⟩|² sums directly to V² + D_QFI² = 1 [16, 36].'
          ],
          provenance: 'Englert [36]; Bera et al. [16]; Appendix K'
        }
      }
    ]
  },
  {
    id: 'ch-12',
    number: 12,
    part: 'PART I · EMPIRICAL ARCHITECTURE & MATHEMATICAL PHYSICS',
    programTier: 'CORE PROTECTED PROGRAM',
    title: 'BKM Dissipation Theorem and Landauer Irreversibility',
    epistemicCategory: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)',
    provenance: 'Araki [10]; Spohn [17]; Landauer [39]; Bérut et al. [40]',
    principleQuote: 'CPTP semigroups dissipate Araki relative entropy monotonically along the BKM metric.',
    leadSummary:
      'Constructs the explicit Fréchet-derivative BKM dissipation proof and verifies Landauer calorimetry bounds.',
    subsections: [
      {
        number: '12.1',
        title: 'Constructive BKM Dissipation and Landauer Erasure',
        category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)',
        paragraphs: [
          'For any CPTP dynamical semigroup ρ_τ = e^{τℒ} ρ_0 admitting an invariant KMS reference state ω_ξ (ℒ ω_ξ = 0), Spohn’s theorem [17] expresses entropy production via the Fréchet derivative of ln ρ_τ: −d S_Araki(ρ_τ || ω_ξ)/dτ = −Tr[(ℒ ρ_τ)(ln ρ_τ − ln ω_ξ)] ≥ 0. Linearizing ρ_τ = ω_ξ + δρ_τ around equilibrium expresses the quadratic dissipation form directly in the Bogoliubov–Kubo–Mori metric: σ_BKM = g_ij^BKM θ̇^i θ̇^j ≥ 0 (Appendix K).',
          'Converting to thermal work on a single memory bit at T = 300 K enforces Landauer’s bound Q_erase ≥ k_B T ln 2 = 2.871 × 10⁻²¹ J/bit [39, 40].'
        ],
        theoremBox: {
          boxKind: 'theorem',
          number: 'Theorem H13.11',
          title: 'BKM Relative-Entropy Dissipation & Landauer Bound',
          category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)',
          hypotheses: [
            'a CPTP semigroup e^{τℒ} fixing KMS reference ω_ξ and thermal bath temperature T.'
          ],
          statement:
            'Araki relative entropy contracts monotonically as d S_Araki/dτ = −σ_BKM ≤ 0, enforcing erasure heat Q_erase ≥ k_B T ln 2.',
          proofType: 'proof',
          proofSteps: [
            'By Petz CPTP monotonicity [13], S_Araki(e^{(τ+δτ)ℒ} ρ_0 || ω_ξ) ≤ S_Araki(e^{τℒ} ρ_0 || ω_ξ).',
            'Differentiating and applying the integral representation of d(ln ρ)/dτ yields −σ_BKM = −g_ij^BKM θ̇^i θ̇^j ≤ 0 [17], fixing Q_erase ≥ 2.871 × 10⁻²¹ J/bit at 300 K [40].'
          ],
          provenance: 'Araki [10]; Spohn [17]; Bérut et al. [40]; Appendix K'
        }
      }
    ]
  },
  {
    id: 'ch-13',
    number: 13,
    part: 'PART I · EMPIRICAL SYNTHESIS & DECOUPLED BIOTHERMODYNAMICS',
    programTier: 'SEPARATED INTERPRETIVE LENS',
    title: 'Decoupled Biothermodynamics, Epistemic Ledger, and Roadmap',
    epistemicCategory: 'CATEGORY A — ESTABLISHED',
    provenance: 'Friston [41]; Seifert [42]; Companion Module igrtH13Companion.ts',
    principleQuote: 'Biological Markov blankets depend solely on classical stochastic thermodynamics, leaving Part I physics unencumbered.',
    leadSummary:
      'Isolates biological free-energy bounds from spacetime ontology, consolidates the claim ledger (C1–C10) and apparatus tables (13.1–13.3), and relegates Category E philosophy to the separate Companion module.',
    subsections: [
      {
        number: '13.1',
        title: 'Decoupled Classical Markov-Blanket Bound',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Living systems maintain non-equilibrium steady states across physical boundaries (Markov blankets) by minimizing variational free energy F_bio = E_KL[q(η) || p(η|s)] − ln p(s) ≥ 0 against classical metabolic dissipation [41, 42]. This stochastic-thermodynamic mechanism operates completely within standard chemistry and classical statistical mechanics; it introduces zero 5D bulk, Horndeski, or Planck-scale terms.',
          'Philosophical analogies ("compiler problem", computational ontology comparisons across RQM, QBism, Constructor Theory, and Digital Physics, and programmatic policy briefs) are intentionally excluded from this physics paper and maintained in a separate Companion view (`igrtH13Companion.ts`). Tables 13.1–13.3 below synthesize the empirical falsification gates (P14–P18), claim ledger, and proof apparatus.'
        ],
        theoremBox: {
          boxKind: 'theorem',
          number: 'Theorem H13.12',
          title: 'Classical Variational Free-Energy Bound (Decoupled from 5D)',
          category: 'CATEGORY A — ESTABLISHED',
          hypotheses: [
            'a stochastic sensory-internal partition (s, η) with variational recognition density q(η).'
          ],
          statement:
            'F_bio = E_KL[q(η) || p(η|s)] − ln p(s) ≥ −ln p(s) bounds biological self-organization purely within classical stochastic thermodynamics.',
          proofType: 'proof',
          proofSteps: [
            'By Gibbs’ inequality, Kullback–Leibler divergence E_KL[q(η) || p(η|s)] ≥ 0 vanishes iff q = p(·|s).',
            'All transition kernels remain purely classical with zero dependence on M_5, R_5, or G_4(φ) [41, 42].'
          ],
          provenance: 'Friston [41]; Seifert [42]'
        }
      }
    ]
  }
];

export function buildH13FullMarkdown(): string {
  const lines: string[] = [];
  lines.push(`# ${H13_META.title}`);
  lines.push(`*${H13_META.subtitle}*`);
  lines.push('');
  lines.push(`**Monograph ID:** ${H13_META.monographId} | **Date:** ${H13_META.date}`);
  lines.push(`**Authors:** ${H13_META.authorRoster.map((a) => a.name).join(', ')}`);
  lines.push('');
  lines.push('## Abstract');
  H13_ABSTRACT_PARAGRAPHS.forEach((p) => {
    lines.push(p);
    lines.push('');
  });
  lines.push(`**Keywords:** ${H13_META.keywords.join('; ')}.`);
  lines.push('');
  lines.push('## Conventions, Axioms & Scope');
  lines.push(H13_FOUNDATIONAL_NOTE);
  lines.push('');
  lines.push(`> ${H13_METRIC_SIGNATURE_BOX}`);
  lines.push('');
  H13_AXIOMS.forEach((ax) => {
    lines.push(`- **${ax.id} (${ax.title})** [${ax.epistemicCategory}]: ${ax.statement} (\`${ax.mathematicalForm}\`)`);
  });
  lines.push('');
  lines.push(`### ${H13_SCOPE_AND_NON_CLAIMS.title}`);
  H13_SCOPE_AND_NON_CLAIMS.points.forEach((pt) => lines.push(`- ${pt}`));
  lines.push('');
  lines.push(`### Table 0.4 · ${H13_CORE_FALSIFICATION_CRITERIA.title}`);
  H13_CORE_FALSIFICATION_CRITERIA.coreAxiomFalsifiers.forEach((c) => lines.push(`- **[QM/GR Consistency]** ${c}`));
  H13_CORE_FALSIFICATION_CRITERIA.frontierSubHypothesisFalsifiers.forEach((f) => lines.push(`- **[Standalone Frontier Falsifier]** ${f}`));
  lines.push('');
  H13_MASTER_EQUATIONS.forEach((eq) => {
    lines.push(`- **${eq.label}** [${eq.category}]: ${eq.caption}`);
  });
  lines.push('');
  lines.push('### Table 0.1 · Twelve Principles');
  H13_TWELVE_PRINCIPLES_MATRIX.forEach((r) => {
    lines.push(`- **${r.id}. ${r.shortTitle}** (${r.programTier} · ${r.epistemicCategory}): \`${r.governingFormula}\` — ${r.quantitativeAnchor}`);
  });
  lines.push('');
  lines.push('### Table 0.2 & 0.3 · Symbol Decoder & Dimensional Audit');
  H13_SYMBOL_DECODER.forEach((s) => lines.push(`- \`${s.symbol}\` (${s.spokenName}): ${s.intuitiveMeaning} [${s.units}]`));
  H13_DIMENSIONAL_AUDIT.forEach((d) => lines.push(`- **${d.equationLabel}**: ${d.formulaSummary} (${d.lhsDimensions} = ${d.rhsDimensions})`));
  lines.push('');

  H13_CHAPTERS.forEach((ch) => {
    lines.push(`## ${ch.number}. ${ch.title}`);
    lines.push(`*${ch.part} · ${ch.programTier} · ${ch.epistemicCategory}*`);
    lines.push('');
    lines.push(`> "${ch.principleQuote}"`);
    lines.push('');
    ch.subsections.forEach((sub) => {
      lines.push(`### ${sub.number} ${sub.title} [${sub.category}]`);
      sub.paragraphs.forEach((p) => {
        lines.push(p);
        lines.push('');
      });
      if (sub.equation) {
        lines.push(`**${sub.equation.label}:** ${sub.equation.caption}`);
        lines.push('');
      }
      if (sub.theoremBox) {
        lines.push(`**${sub.theoremBox.number} (${sub.theoremBox.title})** [${sub.theoremBox.category}]: ${sub.theoremBox.statement}`);
        lines.push(sub.theoremBox.proofType === 'proof' ? '*Proof.*' : '*Derivation / Proof Sketch.*');
        sub.theoremBox.proofSteps.forEach((s, i) => lines.push(`${i + 1}. ${s}`));
        lines.push(`*Sources:* ${sub.theoremBox.provenance}${sub.theoremBox.proofType === 'proof' ? ' [Q.E.D.]' : ''}`);
        lines.push('');
      }
      if (sub.workedExample) {
        lines.push(`**${sub.workedExample.title}:** ${sub.workedExample.setup}`);
        sub.workedExample.steps.forEach((s, i) => lines.push(`${i + 1}. ${s}`));
        lines.push(`*Result ${sub.workedExample.resultEquation.label}:* ${sub.workedExample.takeaway}`);
        lines.push('');
      }
    });
    if (ch.number === 9) {
      lines.push('#### Table 9.1 · Black Holes vs. Coupled Portals');
      H13_BLACK_HOLE_TO_PORTAL_TAXONOMY.forEach((b) => lines.push(`- **${b.nodeClass}:** ${b.isPortalOrWhiteHole} (${b.foldingOrBounceMetric})`));
      lines.push('#### Table 9.2 · Laboratory Analogs & Metrology Benchmarks');
      H13_PORTAL_BUILD_RECOMMENDATIONS.forEach((pr) => lines.push(`- **${pr.id} (${pr.trl}):** ${pr.title} — ${pr.verificationMetric} | ${pr.implications}`));
      lines.push('');
    }
    if (ch.number === 10) {
      lines.push('#### Table 10.1 · White-Hole Bounce Regimes');
      H13_WHITE_HOLE_BOUNCE_TABLE.forEach((w) => lines.push(`- **${w.progenitorRegime}:** ${w.massScale} | Ext: ${w.exteriorBounceDelay} | ${w.astrophysicalObservable}`));
      lines.push('');
    }
    if (ch.number === 13) {
      lines.push('#### Tables 13.1–13.3 · Protocols, Ledger & Apparatus');
      H13_PROTOCOLS_P14_TO_P18.forEach((p) => lines.push(`- **${p.id}:** ${p.name} — ${p.quantitativeThreshold} (${p.falsificationCriterion})`));
      H13_PROTOCOL_SIGNAL_VS_SENSITIVITY.forEach((s) => lines.push(`- **${s.protocolId} Sensitivity:** ${s.predictedSignal} vs. ${s.currentSensitivity}`));
      H13_PROTOCOL_CROSSCHECKS.forEach((c) => lines.push(`- **${c.jointOutcomePattern}:** ${c.physicalInterpretation}`));
      H13_FALSIFICATION_CHECKLIST.forEach((f) => lines.push(`- [Falsify] ${f}`));
      H13_CONFIRMATION_CHECKLIST.forEach((c) => lines.push(`- [Confirm] ${c}`));
      H13_EPISTEMIC_LEDGER.forEach((e) => lines.push(`- **${e.claimId} [${e.category}]:** ${e.claim} — *Limit:* ${e.explicitLimitOrNonClaim}`));
      H13_PROOF_DEVICES_AND_RECOMMENDATIONS.forEach((d) => lines.push(`- **${d.deviceId} (${d.trl}):** ${d.deviceName} — ${d.provesOrTests}`));
      H13_SCOPE_LIMITATIONS.forEach((l) => lines.push(`- **${l.id} (${l.domain}):** ${l.unsolvedProblem}`));
      H13_RESEARCH_ROADMAP_2026_2035.forEach((r) => lines.push(`- **${r.phase} (${r.horizon}):** ${r.milestone}`));
      lines.push('');
    }
  });

  lines.push('## Glossary & Methodological Clarifications');
  H13_GLOSSARY.forEach((g) => lines.push(`- **${g.term}** (${g.acronym ?? g.category}): ${g.definition}`));
  H13_FAQ.forEach((f) => lines.push(`- **${f.id} — ${f.question}:** ${f.shortAnswer} ${f.detailedExplanation}`));
  lines.push('');
  lines.push('## Consolidated Appendices (A–K)');
  H13_APPENDICES.forEach((app) => {
    lines.push(`### Appendix ${app.letter}: ${app.title} [${app.category}]`);
    lines.push(`*${app.summary}*`);
    app.bodyParagraphs.forEach((p) => lines.push(p));
    app.equations.forEach((eq) => {
      const plainEq = eq.unicodeHtml.replace(/<[^>]+>/g, '');
      lines.push(`- **${eq.label}:** \`${plainEq}\` — ${eq.caption}`);
    });
    if (app.letter === 'G') H13_ACTION_FIELD_TABLE.forEach((r) => lines.push(`- ${r.sector}: ${r.eulerLagrangeEquation}`));
    if (app.letter === 'H') H13_KK_CONSTRAINTS_TABLE.forEach((r) => lines.push(`- ${r.experimentOrDomain}: ${r.h13ParameterMatch}`));
    if (app.letter === 'I') {
      H13_GJW_ASSUMPTION_MATRIX.forEach((r) => lines.push(`- ${r.gjwAssumption} [${r.boundaryFreeStatus}]: ${r.quasiLocalReplacement}`));
      H13_GJW_PROOF_STEPS.forEach((s) => lines.push(`- ${s.stepNumber}: ${s.h13NonAdsProofMechanism} (${s.keyInequalityOrIdentity})`));
    }
    if (app.letter === 'J') {
      H13_WH_PIPELINE_SPEC.forEach((b) => lines.push(`- ${b.benchmarkId}: ${b.massGrams}, Ext: ${b.exteriorDelayBranch}`));
      H13_RK4_SENSITIVITY_TABLE.forEach((r) => lines.push(`- ${r.runCase}: u_min=${r.uMinObserved}, max|E_res|=${r.maxHamiltonianResidual}`));
    }
    lines.push('');
  });

  lines.push('## Journal Declarations');
  lines.push(`- **Acknowledgments:** ${H13_JOURNAL_DECLARATIONS.acknowledgments}`);
  lines.push(`- **Author Contributions:** ${H13_JOURNAL_DECLARATIONS.authorContributions}`);
  lines.push(`- **Data & Code Availability:** ${H13_JOURNAL_DECLARATIONS.dataAndCodeAvailability}`);
  lines.push(`- **Competing Interests:** ${H13_JOURNAL_DECLARATIONS.competingInterestsAndFunding}`);
  lines.push('');
  lines.push('## References');
  H13_REFERENCES.forEach((r) => lines.push(`${r.id}. ${r.citation}`));
  return lines.join('\n');
}
