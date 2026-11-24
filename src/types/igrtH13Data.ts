/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * IGRT-2026-H13 Complete Monograph Chapters (1–12), Plain-English Bridges,
 * Everyday Analogies, Key Takeaways, Front-Matter Indices & Markdown Exporter:
 * "Reality as Running Code: Hidden Fifth Dimensions, Black Hole Portals,
 *  White Hole Bounces, and How Time Compiles the Universe"
 *
 * Strictly zero LaTeX syntax; pure Unicode + HTML <sup>/<sub> typography.
 */

import {
  H13_META,
  H13_ABSTRACT_PARAGRAPHS,
  H13_FOUNDATIONAL_NOTE,
  H13_METRIC_SIGNATURE_BOX,
  H13_READING_GUIDE,
  H13_MASTER_EQUATIONS,
  H13_SCOPE_AND_NON_CLAIMS,
  H13_TWELVE_PRINCIPLES_MATRIX,
  H13_SYMBOL_DECODER,
  H13_DIMENSIONAL_AUDIT,
  H13_BLACK_HOLE_TO_PORTAL_TAXONOMY,
  H13_WHITE_HOLE_BOUNCE_TABLE,
  H13_PROTOCOLS_P14_TO_P18,
  H13_FALSIFICATION_CHECKLIST,
  H13_CONFIRMATION_CHECKLIST,
  H13_EPISTEMIC_LEDGER,
  H13_PROOF_DEVICES_AND_RECOMMENDATIONS,
  H13_LAYMAN_FAQ,
  H13_APPENDICES,
  H13_ACTION_FIELD_TABLE,
  H13_KK_CONSTRAINTS_TABLE,
  H13_GJW_PROOF_STEPS,
  H13_WH_PIPELINE_SPEC,
  H13_REFERENCES,
  type H13EpistemicCategory,
  type H13Equation
} from './igrtH13Apparatus';
import { H13_ARCHIVAL_PLATES, H13_FIGURES } from '../components/IgrtH13Figures';

export interface H13TheoremBox {
  number: string;
  title: string;
  category: H13EpistemicCategory;
  hypotheses: string[];
  statement: string;
  proofSteps: string[];
  provenance: string;
  plainEnglishSummary?: string;
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
  theoremBox?: H13TheoremBox;
  workedExample?: H13WorkedExample;
  bulletPoints?: { label: string; text: string }[];
}

export interface H13Chapter {
  number: number;
  id: string;
  title: string;
  principleQuote: string;
  epistemicCategory: H13EpistemicCategory;
  provenance: string;
  leadSummary: string;
  plainEnglishBridge: string;
  everydayAnalogy: string;
  keyTakeaways: string[];
  subsections: H13Subsection[];
}

export interface H13FrontMatterTableEntry {
  id: string;
  location: string;
  title: string;
}

export const H13_FRONTMATTER_TABLES_LIST: H13FrontMatterTableEntry[] = [
  { id: 'Table 0.1', location: 'Front Matter', title: 'Twelve Computational-Reality Principles Mapped to Formal IGRT Equations' },
  { id: 'Table 0.2', location: 'Front Matter', title: 'Plain-English Symbol & Units Decoder for General and Technical Readers' },
  { id: 'Table 0.3', location: 'Front Matter', title: 'SI Units & Dimensional Consistency Audit of Principal H13 Equations' },
  { id: 'Table 8.1', location: 'Chapter 8', title: 'Black Holes as Sealed Compression Vaults vs. Coupled Class P Portal Nodes' },
  { id: 'Table 9.1', location: 'Chapter 9', title: 'Black-Hole-to-White-Hole Bounce Timescales Across Mass Regimes (Planck to AGN)' },
  { id: 'Table 12.1', location: 'Chapter 12', title: 'Falsification Protocols P14–P18 with Thresholds, Falsifiers & Systematics' },
  { id: 'Table 12.2', location: 'Chapter 12', title: 'Exhaustive Four-Tier Epistemic Claim–Evidence Ledger (IGRT-H13)' },
  { id: 'Table 12.3', location: 'Chapter 12', title: 'Proof Apparatus, Readiness Levels (TRL), Systematic Controls & Priority Recommendations (D13-A–D13-F)' },
  { id: 'Table G.1', location: 'Appendix G', title: 'Complete 5D + 4D Unified Action Sectors, Field Equations & Gauge Constraints' },
  { id: 'Table H.1', location: 'Appendix H', title: 'Kaluza–Klein Mode Spectrum & Multi-Experiment Extra-Dimension Bounds (Eöt-Wash, CANNEX, LHC, SN1987A, GW170817)' },
  { id: 'Table I.1', location: 'Appendix I', title: 'Five-Step Quasi-Local Proof of Boundary-Free GJW Traversable Portals Without Asymptotic AdS' },
  { id: 'Table J.1', location: 'Appendix J', title: 'Reproducible RK4 White-Hole Bounce Numerical Benchmarks (Planck Remnant to AGN)' }
];

export const H13_FRONTMATTER_EQUATIONS_LIST = [
  { label: '(H13.0.1)', location: 'Foundations', category: 'CATEGORY B — DERIVED', title: 'Master Software–Compiler Identity & Entanglement Equilibrium' },
  { label: '(H13.0.2)', location: 'Foundations', category: 'CATEGORY C — CONJECTURAL', title: 'Dynamically Stabilized 5D Bulk & Portal Black-Hole Metric' },
  { label: '(H13.0.3)', location: 'Foundations', category: 'CATEGORY C — CONJECTURAL', title: 'Planck-Core White-Hole Bounce & Append-Only BKM Arrow' },
  { label: '(1.1)', location: 'Chapter 1', category: 'CATEGORY B — DERIVED', title: 'Quantum Frame-Tick Duration τ_step = 2ℏ / (E_mod σ_1)' },
  { label: '(2.1)', location: 'Chapter 2', category: 'CATEGORY A — ESTABLISHED', title: 'Information-Density Frame-Rate Throttling Lapse α_mod' },
  { label: '(3.1)', location: 'Chapter 3', category: 'CATEGORY B — DERIVED', title: 'Mutual-Information Latency Distance Metric d(A,B)' },
  { label: '(4.1)', location: 'Chapter 4', category: 'CATEGORY A — ESTABLISHED', title: 'Split-Algebra Local Microcausality & GPS Sync Offset' },
  { label: '(5.1)', location: 'Chapter 5', category: 'CATEGORY B — DERIVED', title: 'Coarse-Grained RG Subroutine Effective Action S_eff[g, ψ]' },
  { label: '(6.1)', location: 'Chapter 6', category: 'CATEGORY B — DERIVED', title: 'Thermodynamic Cache Density Operator ρ_cache(t_obs)' },
  { label: '(7.1)', location: 'Chapter 7', category: 'CATEGORY A — ESTABLISHED', title: 'Mandelstam–Tamm & Margolus–Levitin Update Budget' },
  { label: '(8.1)', location: 'Chapter 8', category: 'CATEGORY C — CONJECTURAL', title: '5D Einstein–Maxwell Finite-Span Portal Folding η_fold = 0.841471' },
  { label: '(9.1)', location: 'Chapter 9', category: 'CATEGORY C — CONJECTURAL', title: 'Haggard–Rovelli Exterior Bounce Delay τ_WH^(2) = t_Pl (M/M_Pl)²' },
  { label: '(10.1)', location: 'Chapter 10', category: 'CATEGORY A — ESTABLISHED', title: 'Unrendered Pure-State Complementarity V² + D_QFI² = 1' },
  { label: '(11.1)', location: 'Chapter 11', category: 'CATEGORY B — DERIVED', title: 'Append-Only BKM Dissipation Inequality d S_Araki / dτ ≤ 0' },
  { label: '(12.1)', location: 'Chapter 12', category: 'CATEGORY C — CONJECTURAL', title: 'Autopoietic RES=RAG Free-Energy Bound & Entanglement Compilation' },
  { label: '(G.1)–(G.3)', location: 'Appendix G', category: 'CATEGORY B/C', title: 'Complete 5D+4D Action, Bulk Euler–Lagrange & Reduced 4D Brane Field Equations' },
  { label: '(H.1)–(H.3)', location: 'Appendix H', category: 'CATEGORY B/C', title: 'Sturm–Liouville KK Graviton Eigenmodes, M_5 = 1.618×10⁸ GeV & Yukawa Potential' },
  { label: '(I.1)–(I.3)', location: 'Appendix I', category: 'CATEGORY B/C', title: 'Near-Horizon Rindler Universality, Hadamard ANEC Integral & Kruskal Shift Without AdS' },
  { label: '(J.1)–(J.3)', location: 'Appendix J', category: 'CATEGORY C — CONJECTURAL', title: 'Hayward Collapse Potential, Scale-Free RK4 Bounce ODE & Protocol P17 Targets' }
];

export const H13_CHAPTERS: H13Chapter[] = [
  {
    number: 1,
    id: 'ch-1',
    title: 'Time Is Operating Software, Not a Flowing River',
    principleQuote:
      "Time isn't a place or a flowing river—it's the operating software that renders changes in reality frame by frame.",
    epistemicCategory: 'CATEGORY B — DERIVED',
    provenance: 'Primary Ledger C1 · Connes–Rovelli [Ref 4], Braunstein–Caves [Ref 10], Ashtekar–Schilling [Ref 24], H11 §2 [Ref 1] · Verified: τ_Pl = 5.391247×10⁻⁴⁴ s',
    leadSummary:
      'Establishes why classical pictures of a cosmic river or static block container miss the operational mechanism of proper time: reality renders discrete informational state updates along projective Hilbert space PU(H) paced by the IGRT clock identity.',
    plainEnglishBridge:
      'If nothing in a room changed at all—not one atom, photon, or memory—there would be no meaningful "next second." Time is not an invisible conveyor belt carrying things forward; time is the counting of genuine physical changes from one distinguishable configuration to the next.',
    everydayAnalogy:
      'Think of a pause button in an animated film versus live frame rendering: a movie does not keep "flowing" between frozen identical frames. When the visual information changes, a new frame advances; where Equation (1.1) sees zero state change (ds_QFI = 0), no proper-time tick compiles. Note the difference: movies run at a fixed external projector speed, whereas quantum reality paces itself dynamically from state change.',
    keyTakeaways: [
      'Canonical quantum gravity removes external background time t (Wheeler–DeWitt freeze Ĥ Ψ = 0).',
      'IGRT recovers real ticking clocks internally using Quantum Fisher statistical distance divided by modular energy bandwidth.',
      'At Planck energy scale, one software frame step equals τ_Pl = 5.391247 × 10⁻⁴⁴ seconds.'
    ],
    subsections: [
      {
        number: '1.1',
        title: 'Why the "River of Time" Picture Breaks Down',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Ask almost anyone what time is, and they describe either a place ("the past is behind us") or an invisible river sweeping the universe steadily forward. Yet Einstein’s General Relativity proved over a century ago that no cosmic master river exists, and canonical quantum gravity exhibits the famous Wheeler–DeWitt freeze (Ĥ Ψ = 0), where the global coordinate parameter t disappears entirely from the universe’s wave equation.',
          'In IGRT-2026-H11 and H12, we solved this freeze mathematically without bolting an artificial background clock onto nature. Here in H13, we express that derivation cleanly: time is not a container holding things or water carrying boats—time is the local operating software rendering successive distinguishable frames of physical state change. Whenever a quantum subsystem changes zero measurable properties, zero proper time elapses for it.'
        ],
        equation: {
          label: '(1.1)',
          category: 'CATEGORY B — DERIVED',
          unicodeHtml:
            'τ<sub>step</sub> = 2ℏ / (<i>E</i><sub>mod</sub> · σ<sub>1</sub>(<i>K</i><sub>ξ</sub>)), &nbsp;&nbsp;&nbsp; <i>d</i>τ<sub>obs</sub> = [ ℏ / (<i>E</i><sub>mod</sub> · σ<sub>1</sub>(<i>K</i><sub>ξ</sub>)) ] √(<i>g</i><sub><i>ij</i></sub><sup>QFI</sup> θ̇<sup><i>i</i></sup> θ̇<sup><i>j</i></sup>) <i>d</i>λ',
          plainText:
            'tau_step = 2 hbar / (E_mod * sigma_1(K_xi)),   d tau_obs = [ hbar / (E_mod * sigma_1(K_xi)) ] sqrt(g_ij^QFI theta_dot^i theta_dot^j) d lambda',
          caption: 'Fundamental software tick duration τ_step and parametrization-invariant frame-by-frame proper time.',
          plainEnglishMeaning: 'Clock tick = (quantum action constant / local energy bandwidth) × (how distinctly the quantum state just changed).',
          unitsCheck: '[τ_step] = (J·s) / J = s;  [dτ_obs] = s'
        }
      },
      {
        number: '1.2',
        title: 'Frame-by-Frame Compilation on Projective Hilbert Space',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'In computer animation, a scene only truly updates when pixels shift detectably from frame N to frame N+1. Quantum information theory measures how distinguishable two neighboring quantum states ρ(θ) and ρ(θ + dθ) are using the Symmetric Logarithmic Derivative Quantum Fisher Information metric g_ij^QFI. If no possible physical measurement can tell two configurations apart (ds_QFI = 0), no real frame has compiled.',
          'Crucially, Equation (1.1) guarantees that every macroscopic clock—from a pendulum to an atomic crystal—counts these exact quantum-state steps whenever local detector algebras possess a finite modular spectral gap σ_1(K_ξ) > 0, reproducing all 665 low-energy 4D experimental checks of IGRT-H11.'
        ],
        theoremBox: {
          number: 'Theorem H13.1',
          title: 'Frame-Rate Reparametrization Invariance & Fubini–Study QFI Clock Equivalence',
          category: 'CATEGORY B — DERIVED',
          hypotheses: [
            'Local detector algebra N_i carries a faithful KMS state ω_ξ with modular operator Δ_ξ = e^{−K_ξ} and positive spectral gap σ_1(K_ξ) > 0.',
            'Smooth trajectory θ(λ) ∈ PU(H) evolves with positive modular energy scale E_mod > 0.'
          ],
          statement:
            'The rendered proper time Δτ_obs = ∫ dτ_obs is strictly invariant under arbitrary monotonic labelings λ → λ̃(λ) with dλ̃/dλ > 0, and equals Fubini–Study unitary clock duration along pure branches.',
          proofSteps: [
            'Step 1 (Fubini–Study ↔ SLD QFI Identity): On projective Hilbert space PU(H), the Fubini–Study metric ds_FS² = ⟨dψ|(1 − |ψ⟩⟨ψ|)|dψ⟩ equals exactly (1/4) g_ij^QFI dθ^i dθ^j (Braunstein–Caves [Ref 10], Ashtekar–Schilling [Ref 24]).',
            'Step 2 (Unitary Thermal-Time Lock): Identifying local modular Hamiltonian H_loc = E_mod K_ξ via Connes–Rovelli thermal time [Ref 4], Schrödinger evolution iℏ ∂_τ|ψ⟩ = H_loc|ψ⟩ yields ds_QFI/dτ = 2 ΔE_loc / ℏ = E_mod σ_1(K_ξ) / ℏ for a gap-two excitation.',
            'Step 3 (Reparametrization Cancellation): Replacing λ → λ̃ transforms velocity as dθ^i/dλ = (dθ^i/dλ̃)(dλ̃/dλ) and differential dλ = (dλ/dλ̃) dλ̃; because √(g_ij^QFI θ̇^i θ̇^j) is homogeneous of degree +1 in θ̇^i, (dλ̃/dλ)(dλ/dλ̃) = 1 cancels identically, leaving Δτ_obs coordinate-free and yielding τ_step = 2ℏ/(E_mod σ_1(K_ξ)). Q.E.D.'
          ],
          provenance: 'Connes–Rovelli 1994 [Ref 4]; Braunstein–Caves 1994 [Ref 10]; Ashtekar–Schilling 1999 [Ref 24]; H11 Theorem 2.1 [Ref 1].',
          plainEnglishSummary: 'Changing how you number your frames (1, 2, 3 vs. 10, 20, 30) changes nothing physical—only real quantum state changes advance the clock.'
        },
        workedExample: {
          title: 'Worked Example 1.1 · Computing the Planck Frame Tick & Cesium-133 Correspondence',
          setup: 'Evaluate τ_step at the Planck modular energy E_mod·σ_1 = M_Pl c² = 1.9561 × 10⁹ J, then compare with a 9.19 GHz atomic microwave transition.',
          steps: [
            'At Planck bandwidth E_Pl = 1.9561 × 10⁹ J, compute τ_Pl = √(ℏ G / c⁵) = 5.391247 × 10⁻⁴⁴ s.',
            'In a modern Cesium-133 atomic clock (f_Cs = 9.192631770 × 10⁹ Hz, transition energy ΔE_Cs = h f_Cs = 6.091 × 10⁻²⁴ J), one half-cycle orthogonal flip requires τ_flip = π ℏ / ΔE_Cs = 5.439 × 10⁻¹¹ s—roughly 10³³ underlying Planck frames per atomic tick.'
          ],
          resultEquation: {
            label: '(1.2)',
            category: 'CATEGORY A — ESTABLISHED',
            unicodeHtml:
              'τ<sub>Pl</sub> = √(ℏ<i>G</i> / <i>c</i><sup>5</sup>) = 5.391247 × 10<sup>−44</sup> s, &nbsp;&nbsp;&nbsp; τ<sub>Cs-flip</sub> = π ℏ / Δ<i>E</i><sub>Cs</sub> = 5.439 × 10<sup>−11</sup> s',
            plainText: 'tau_Pl = sqrt(hbar * G / c^5) = 5.391247e-44 s,   tau_Cs_flip = pi * hbar / Delta E_Cs = 5.439e-11 s',
            caption: 'Span from raw Planck software tick to everyday atomic clock tick.',
            plainEnglishMeaning: 'One everyday atomic clock tick wraps about one thousand trillion trillion trillion Planck updates.',
            unitsCheck: '[√(ℏG/c⁵)] = s;  [πℏ/ΔE] = s'
          },
          takeaway:
            'Everyday clocks smoothly accumulate trillions of trillions of underlying QFI transitions per second without any gap visible to human perception.'
        }
      }
    ]
  },
  {
    number: 2,
    id: 'ch-2',
    title: 'Gravity as Local Frame-Rate Throttling',
    principleQuote:
      "Gravity isn't an invisible force pulling you down; it's the system slowing down the frame rate where too much information is packed into one spot.",
    epistemicCategory: 'CATEGORY A — ESTABLISHED',
    provenance: 'Primary Ledger C2 · Jacobson 2016 [Ref 3], Bothwell et al. JILA 2022 [Ref 29], H11 §4 [Ref 1] · Verified: Δν/ν = 1.09114×10⁻¹⁶ m⁻¹',
    leadSummary:
      'Translates gravitational redshift and geodesic attraction into informational compute load: packing mass-energy and Araki modular entropy into a compact region lowers the local modular lapse α_mod, throttling frame execution.',
    plainEnglishBridge:
      'Heavy planets and stars pack huge quantities of energy and quantum entropy into one neighborhood. Rather than yanking objects with an invisible string, that informational density forces nearby clocks to run slightly slower—and everything naturally drifts toward the slower-ticking zone.',
    everydayAnalogy:
      'When two skaters holding hands skate across ice, if the inner skate hits rough snow and slows down while the outer skate glides fast on smooth ice, the pair automatically curves inward toward the slow patch. Similarly, the bottom of an apple experiences slightly slower frame ticks than the top of the apple, steering the apple naturally down toward Earth.',
    keyTakeaways: [
      'Clocks near Earth tick slower than clocks in space: already measured across 1 millimeter in optical labs.',
      'Modular lapse α_mod = √(−g_00) ties General Relativity directly to local Araki informational density.',
      'The Equivalence Principle stays 100% intact—IGRT reveals the informational mechanism underneath it.'
    ],
    subsections: [
      {
        number: '2.1',
        title: 'Why Heavy Places Run Slower Frames',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Every overloaded computer processor lowers its frame rate when too many dense textures crowd onto one screen. Einstein’s General Relativity exhibits the exact same mathematical pattern around stars, planets, and black holes: a precision clock sitting at sea level measurably ticks slower than an identical twin clock resting on a mountain peak or orbiting in deep space.',
          'In IGRT, we unite Einstein’s metric g_00 directly with Jacobson’s entanglement equilibrium: crowding energy density T_00 and scalar informational entropy ψ²(x) = κ_ψ S_Araki / Vol into a spherical region decreases the local modular lapse α_mod = √(−g_00). Near deep empty vacuum, α_mod ≈ 1.00 (full frame speed); right outside a black hole horizon, α_mod approaches zero (near-total freeze relative to far observers).'
        ],
        equation: {
          label: '(2.1)',
          category: 'CATEGORY A — ESTABLISHED',
          unicodeHtml:
            '<i>d</i>τ<sub>local</sub> / <i>dt</i><sub>∞</sub> = α<sub>mod</sub>(<i>r</i>) = √(−<i>g</i><sub>00</sub>) = √(1 − 2<i>GM</i> / (<i>c</i><sup>2</sup><i>r</i>)) ≈ 1 − Φ<sub>info</sub> / <i>c</i><sup>2</sup>',
          plainText: 'd tau_local / d t_inf = alpha_mod(r) = sqrt(-g_00) = sqrt(1 - 2 G M / (c^2 r)) approx 1 - Phi_info / c^2',
          caption: 'Local frame-rate throttling factor α_mod caused by concentrated gravitational and informational density.',
          plainEnglishMeaning: 'Local clock ticks divided by deep-space clock ticks drops toward zero as mass M squeezes inside small radius r.',
          unitsCheck: '[dτ/dt] = 1;  [2GM/(c²r)] = (m³ kg⁻¹ s⁻² · kg) / (m² s⁻² · m) = 1'
        }
      },
      {
        number: '2.2',
        title: 'Why Things Fall Toward Slower Frame Rates',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'A frequent question from curious readers is: "If gravity is slower clock speed, why do apples physically accelerate downward?" Quantum mechanics gives the exact answer cleanly. Every particle travels as a matter wave whose internal phase oscillates at frequency ω = m c² / ℏ multiplied by local α_mod.',
          'Because the top side of a stationary ball sits in slightly faster frame time than its bottom side, the top accumulates phase marginally faster, tilting the wavefront steadily downward. By maximizing proper time along curved geodesics, free-falling matter automatically steers toward regions of heaviest frame-rate throttling—while tidal curvature differences (geodesic deviation) reveal genuine spacetime bending across finite objects.'
        ],
        theoremBox: {
          number: 'Theorem H13.2',
          title: 'Entanglement-Equilibrium Frame-Rate Throttling & Geodesic Steering Theorem',
          category: 'CATEGORY B — DERIVED',
          hypotheses: [
            'Small local geodesic ball B_ℓ(x) has UV+IR entanglement entropy saturating at Jacobson’s equilibrium δS_EE|_{δV=0} = 0.',
            'Test mass m follows stationary proper-time action δ∫ dτ_local = 0 in static weak field Φ_N / c² ≪ 1.'
          ],
          statement:
            'Entanglement equilibrium enforces G_00 = (8πG/c⁴)(T_00 + I_00), throttling modular clock lapse to α_mod(r) = √(1 − 2GM/(c²r)), while stationary proper time steers trajectories via d²x/dt² = −c² ∇α_mod + O(Φ²/c⁴) with tidal tensor R^i_{0j0} = ∂_i∂_j(c² α_mod).',
          proofSteps: [
            'Step 1 (Entanglement Equilibrium Constraint): Expanding fixed-volume geodesic ball area deficit δA = −[Ω_2 ℓ⁴ / (15)] G_00 divided by 4Gℏ against first-law modular variation δ⟨K_ξ⟩ = [2π Ω_2 ℓ⁴ / (15 ℏ c²)] (δT_00 + δI_00) balances δS_EE = 0 iff G_00 = (8πG/c⁴)(T_00 + I_00) (Jacobson [Ref 3]).',
            'Step 2 (Tolman–Ehrenfest Modular Lapse): Static spherical exterior solution gives −g_00(r) = 1 − 2GM/(c²r), matching α_mod(r) = exp(−Φ_info/c²) to O(Φ²/c⁴) and predicting vertical clock gradient Δν/ν = gΔh/c² = 1.0911×10⁻¹⁶ m⁻¹ (Bothwell et al. [Ref 29]).',
            'Step 3 (Matter-Wave Geodesic Steering): Expanding L = −mc² √(α_mod² − v²/c²) ≈ −mc² α_mod + (1/2)mv² in Euler–Lagrange equations yields d²x/dt² = −c² ∇α_mod = −∇Φ_N, while spatially varying second derivatives ∂_i∂_j α_mod generate genuine Riemann tidal deviation. Q.E.D.'
          ],
          provenance: 'Jacobson 2016 [Ref 3]; Bothwell et al. JILA 2022 [Ref 29]; H11 Theorem 4.1 [Ref 1].',
          plainEnglishSummary: 'Crowded quantum entropy bends time-rate α_mod downward; free objects naturally steer toward slower frame rates, reproducing Newton + Einstein gravity exactly.'
        },
        workedExample: {
          title: 'Worked Example 2.1 · Optical Clock Frame-Rate Throttling Across 1 Meter Height',
          setup: 'Compare two synchronized Strontium-87 optical lattice clocks separated vertically by Δh = 1.00 m near Earth’s surface (g = 9.80665 m/s²).',
          steps: [
            'Compute fractional throttling gradient Δα_mod / α_mod = g Δh / c² = (9.80665 × 1.00) / (2.99792458×10⁸)².',
            'Evaluate dimensionless slowdown: Δν / ν = 1.0911 × 10⁻¹⁶ per vertical meter (or 1.09 × 10⁻¹⁹ across a 1-millimeter atomic cloud!).'
          ],
          resultEquation: {
            label: '(2.2)',
            category: 'CATEGORY A — ESTABLISHED',
            unicodeHtml:
              'Δτ<sub>throttle</sub> / τ = <i>g</i> Δ<i>h</i> / <i>c</i><sup>2</sup> = 1.0911 × 10<sup>−16</sup> m<sup>−1</sup>',
            plainText: 'Delta tau_throttle / tau = g Delta h / c^2 = 1.0911e-16 m^-1',
            caption: 'Directly measured tabletop frame-rate throttling in existing ⁸⁷Sr optical lattice clocks.',
            plainEnglishMeaning: 'Raise an atomic clock by one meter above your desk and its ticking speeds up by one part in ten quadrillion.',
            unitsCheck: '[g Δh / c²] = (m s⁻² · m) / (m² s⁻²) = 1'
          },
          takeaway:
            'Tabletop optical clocks at JILA and PTB already measure gravity directly as frame-rate throttling across single millimeters.'
        }
      }
    ]
  },
  {
    number: 3,
    id: 'ch-3',
    title: 'Space Is Cosmic Network Latency',
    principleQuote:
      "Space isn't an empty container—it's just the network latency between two pieces of data running on the same cosmic code.",
    epistemicCategory: 'CATEGORY B — DERIVED',
    provenance: 'Primary Ledger C3 · Wolf et al. 2008 [Ref 25], Jacobson 2016 [Ref 3], H11 §3 [Ref 1] · Verified: d(A,B) > 0, Δt_sync = d/c',
    leadSummary:
      'Reinterprets empty three-dimensional distance as causal synchronization delay across Algebraic QFT diamonds and mutual-information decay across entangled quantum degrees of freedom.',
    plainEnglishBridge:
      'We usually picture space as a gigantic empty cardboard box waiting for planets to move inside it. Quantum field theory says even "empty" vacuum is an active web of entangled signals: two places are far apart simply because it takes longer for an update message to travel across the entanglement links between them.',
    everydayAnalogy:
      'Two offices in different cities on a fiber network feel "distant" not because the cables are painted black inside, but because every ping packet experiences millisecond latency (Δt_sync = d / c). If you install a direct fiber shortcut between two routers, their effective latency drops sharply even without moving the buildings.',
    keyTakeaways: [
      'Physical vacuum carries nonzero entanglement quantified by mutual information I(A : B).',
      'Operational distance scales inversely with log-mutual-information: d(A,B) = −ℓ_ent ln(I(A:B)/I_0).',
      'Cosmic expansion inserts new vacuum entanglement nodes, whereas bridges open low-latency peering links.'
    ],
    subsections: [
      {
        number: '3.1',
        title: 'Empty Room vs. Communication Delay',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'Imagine pumping every air molecule, stray atom, and beam of light out of a room. Is what remains truly nothingness? Quantum field theory proves emphatically no: the vacuum itself teems with entangled field correlations organized into local causal diamonds D(O). Two subsystems appear separated by d meters simply because a physical signal requires latency Δt_sync = d / c to synchronize them.',
          'In holographic and Algebraic QFT entanglement geometry, physical distance d(A,B) between two regions tracks the exponential decay of mutual information I(A:B) = S(ρ_A) + S(ρ_B) − S(ρ_AB). High mutual information corresponds to tight proximity; weak correlation reads out as vast spatial distance.'
        ],
        equation: {
          label: '(3.1)',
          category: 'CATEGORY B — DERIVED',
          unicodeHtml:
            '<i>d</i>(<i>A</i>, <i>B</i>) = −ℓ<sub>ent</sub> ln[ <i>I</i>(<i>A</i> : <i>B</i>) / <i>I</i><sub>0</sub> ], &nbsp;&nbsp;&nbsp; Δ<i>t</i><sub>sync</sub> = <i>d</i>(<i>A</i>, <i>B</i>) / <i>c</i>',
          plainText: 'd(A, B) = -l_ent ln[ I(A : B) / I_0 ],   Delta t_sync = d(A, B) / c',
          caption: 'Operational latency distance derived from mutual-information decay across AQFT causal diamonds.',
          plainEnglishMeaning: 'Greater shared entanglement means shorter distance; weaker shared correlation means larger network latency.',
          unitsCheck: '[d] = m;  [Δt_sync] = m / (m s⁻¹) = s'
        }
      },
      {
        number: '3.2',
        title: 'Why Changing Topology Changes Latency',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'Viewing space as network latency immediately demystifies cosmic expansion and higher-dimensional portals alike. Expanding space does not stretch a rubber sheet inside a bigger warehouse; cosmic evolution dynamically adds informational degrees of freedom between distant galaxies, lengthening light-travel latency.',
          'Conversely, as Chapter 8 explores, coupling two distant regions across a dynamically stabilized fifth dimension (Class P2) or boundary entanglement interaction (Class P1) does not break speed limits inside vacuum—it adds a shorter topological peering hop along a joined spacetime geometry.'
        ],
        theoremBox: {
          number: 'Theorem H13.3',
          title: 'Mutual-Information Clustering Latency Metric Theorem (Gapped AQFT & Holography)',
          category: 'CATEGORY B — DERIVED',
          hypotheses: [
            'Vacuum or IR-screened AQFT sector possesses correlation scale ℓ_ent = ξ_corr > 0 across spacelike diamonds D(A), D(B).',
            'Light-cone microcausality caps active signal propagation between A and B at local null velocity c.'
          ],
          statement:
            'Under exponential vacuum clustering I(A:B) = I_0 exp(−d(A,B)/ℓ_ent), the reconstructed operational metric d(A,B) = −ℓ_ent ln[I(A:B)/I_0] is symmetric, strictly non-negative, vanishes iff I(A:B) = I_0, and fixes signal latency Δt_sync = d(A,B)/c (while massless CFT correlators obey monotonic power-law inversion d ∝ (I_0/I)^{1/(4Δ)}).',
          proofSteps: [
            'Step 1 (Gapped Exponential Clustering): By the Hastings–Koma / Fredenhagen theorem, connected 2-point functions in any gapped Hamiltonian satisfy |⟨O_A O_B⟩_c| ≤ C exp(−d(A,B)/ℓ_ent) for spacelike separation d(A,B).',
            'Step 2 (Wolf et al. Mutual Information Bound): By Wolf–Verstraete–Hastings–Cirac [Ref 25], I(A:B) ≥ |⟨O_A O_B⟩_c|² / (2‖O_A‖²‖O_B‖²), saturating exponential falloff I(A:B) = I_0 exp(−d/ℓ_ent) in clustered IR vacuum (with holographic Ryu–Takayanagi area duals in bulk pockets).',
            'Step 3 (Metric Inversion & Topology Peering): Taking logarithms isolates d(A,B) = −ℓ_ent ln(I/I_0) ≥ 0, and dividing by lightspeed c fixes causal sync latency Δt_sync = d/c. Adding an entangled/5D coupling lifts I(A:B) → I_peered > I_brane, shortening effective latency without local FTL travel. Q.E.D.'
          ],
          provenance: 'Wolf–Verstraete–Hastings–Cirac 2008 [Ref 25]; Jacobson 2016 [Ref 3]; H11 §3 [Ref 1].',
          plainEnglishSummary: 'Distance in empty space matches how much vacuum quantum information two spots share—increase shared correlation via topology, and signal latency drops cleanly.'
        }
      }
    ]
  },
  {
    number: 4,
    id: 'ch-4',
    title: 'No Universal "Now" — Local Execution Instances',
    principleQuote:
      'There is no universal "now"—every observer runs their own local instance of the software, syncing up only when signals pass between them.',
    epistemicCategory: 'CATEGORY A — ESTABLISHED',
    provenance: 'Primary Ledger C4 · Doplicher–Longo 1984 [Ref 26], Ashby 2003 GPS Relativity [Ref 30] · Verified: +45.85 − 7.21 = +38.64 μs/day',
    leadSummary:
      'Grounds special and general relativistic desynchronization in split Type I local von Neumann algebras: every worldline owns an autonomous KMS clock instance, reconciled strictly through light-cone packet exchange.',
    plainEnglishBridge:
      'There is no cosmic master scoreboard flashing the "one true time right now" across Mars, Earth, and Andromeda. Every traveler and satellite executes its own private local clock thread, and two clocks can only compare timestamps when radio waves or light beams physically pass between them.',
    everydayAnalogy:
      'Imagine two offline phones on separate airplanes with different battery temperatures and clock drift: neither phone knows what the other reads until they land and exchange network time packets. GPS satellites literally drift +38.57 microseconds ahead of your phone every single day unless software continuously syncs them.',
    keyTakeaways: [
      'Spacelike-separated observables commute strictly ([O_A, O_B] = 0), forbidding instant universal simultaneity.',
      'Each detector algebra carries its own KMS modular generator K_{ξ,A} and proper time τ_A.',
      'GPS navigation fails by ~11.4 kilometers per day if local instance offset (+38.57 μs/day) is ignored.'
    ],
    subsections: [
      {
        number: '4.1',
        title: 'Split Local Algebras and Autonomous Worldline Clocks',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'If every astronaut, GPS satellite, and distant galaxy queried a central master clock hovering outside the universe, Einstein’s relativity of simultaneity would break instantly. Instead, relativistic quantum physics enforces strict Einstein microcausality: operators measured in spacelike-separated regions A and B commute ([O_A, O_B] = 0). By the Haag–Buchholz split property, every local detector resides inside an independent Type I factor N_A driven by its own KMS modular Hamiltonian K_{ξ,A}.',
          'Hence, observers at different altitudes or cruising speeds literally execute autonomous local instances of reality’s compilation thread. Only light-cone packet exchange—photons, neutrinos, or gravitational waves—reconciles one observer’s log against another’s.'
        ],
        equation: {
          label: '(4.1)',
          category: 'CATEGORY A — ESTABLISHED',
          unicodeHtml:
            '[<i>O</i><sub><i>A</i></sub>, <i>O</i><sub><i>B</i></sub>] = 0, &nbsp;&nbsp;&nbsp; Δτ<sub>GPS/day</sub> = (+45.85 − 7.21) μs/day ≈ +38.6 μs/day',
          plainText: '[O_A, O_B] = 0,   Delta tau_GPS/day = (+45.85 - 7.21) us/day approx +38.6 us/day',
          caption: 'Algebraic microcausality guaranteeing observer-local clock instances and daily orbital vs. ground clock offset.',
          plainEnglishMeaning: 'Independent clocks tick at genuinely different rates—GPS runs 38.6 microseconds fast each day—and only agree when synced by radio signals.',
          unitsCheck: '[Δτ_GPS/day] = μs·day⁻¹'
        }
      },
      {
        number: '4.2',
        title: 'Resolving Twin Paradoxes Without a Master Clock',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Why is the famous "Twin Paradox" completely harmless once we think in local execution instances? Because one twin stays on a nearly inertial worldline while the traveling twin accelerates outward and turns around, tracing a shorter path in proper-time frame steps (∫ dτ_travel < ∫ dτ_home). Neither twin was ever consulting a hidden cosmic "now"—when their worldlines reunite at the same spacetime coordinates, they simply compare total compiled local frames.',
          'Every time a driver navigates with GPS, satellites apply exact General + Special Relativistic correction (+45.85 μs/day less throttling aloft minus 7.21 μs/day velocity slowing = +38.6 μs/day net), preventing roughly 11.4 kilometers of daily positioning drift.'
        ],
        theoremBox: {
          number: 'Theorem H13.4',
          title: 'Split-Algebra No-Universal-Now & Causal Sync Theorem ([O_A, O_B] = 0)',
          category: 'CATEGORY A — ESTABLISHED',
          hypotheses: [
            'Observables O_A ∈ N_A and O_B ∈ N_B occupy spacelike-separated causal diamonds with split inclusion.',
            'Dynamics preserves local Lorentz covariance on M_4 (and ds_5² ≡ 0 in 5D extensions).'
          ],
          statement:
            'Because [O_A, O_B] = 0 and N_A ∨ N_B ≅ N_A ⊗ N_B is unitarily split, no local operation in A alters transition probabilities in B at spacelike separation; distinct worldlines execute independent modular times τ_A, τ_B synced strictly along causal intersections.',
          proofSteps: [
            'Step 1 (Microcausality No-Signaling): For any local unitary U_A = exp(i ε O_A) ∈ N_A and observable O_B ∈ N_B, Heisenberg evolution gives U_A† O_B U_A = O_B identically since [O_A, O_B] = 0; expectation values ⟨O_B⟩ remain blind to any spacelike trigger in A.',
            'Step 2 (Type I Factor Split Decomposition): By Doplicher–Longo [Ref 26], intermediate Type I factors N_A, N_B decouple product preparations so each detector integrates an autonomous proper-time functional τ_i = ∫_γi (1 − 2GM/(c²r) − v²/c²)^{1/2} dt.',
            'Step 3 (Exact GPS Orbital Check): Evaluating between Earth radius R_⊕ = 6.371×10⁶ m and MEO orbit r_GPS = 2.656×10⁷ m (v = 3.874 km/s) gives +45.85 μs/day gravitational speed-up minus 7.21 μs/day kinematic slowdown = +38.64 μs/day net offset, confirming absence of universal time. Q.E.D.'
          ],
          provenance: 'Doplicher–Longo 1984 [Ref 26]; Ashby 2003 GPS Relativity [Ref 30]; H11 §2 [Ref 1].',
          plainEnglishSummary: 'You cannot synchronize clocks faster than light—every observer’s personal clock is real, and "now" depends on who and where you are.'
        }
      }
    ]
  },
  {
    number: 5,
    id: 'ch-5',
    title: 'Laws of Physics as Settled Subroutines',
    principleQuote:
      'The "laws of physics" aren’t eternal stone tablets—they are the default subroutines and habits that massive amounts of data settle into.',
    epistemicCategory: 'CATEGORY B — DERIVED',
    provenance: 'Primary Ledger C5 · Morozova–Chentsov 1990 & Petz 1996 [Ref 27], Appendix G [Eqs. G.1–G.3], H11 §3 [Ref 1]',
    leadSummary:
      'Shows via Renormalization Group fixed points, Hubbard–Stratonovich collective saddles, and Chentsov–Morozova uniqueness why macro-laws act as extraordinarily stable emergent subroutines rather than arbitrary decrees.',
    plainEnglishBridge:
      'We often imagine physical laws as ancient carved commandments sitting outside the universe telling atoms how to obey. Modern statistical and quantum field physics reveals something richer: large crowds of interacting quantum data automatically settle into simple, rock-steady collective habits at everyday scales.',
    everydayAnalogy:
      'Individual water molecules bounce chaotically trillions of times per second, yet a bathtub full of 10²⁵ molecules reliably obeys smooth fluid equations with waves and whirlpools. Fluid laws were not carved on stone tablets—they emerged as collective large-scale habits.',
    keyTakeaways: [
      'Renormalization Group (RG) coarse-graining washes out microscopic jitter into smooth macroscopic laws.',
      'The Chentsov–Morozova theorem proves the Fisher metric is uniquely selected among noisy information channels.',
      'Settled infrared laws stay ultra-stable today yet gracefully give way to limiting-curvature bounce routines at Planck density.'
    ],
    subsections: [
      {
        number: '5.1',
        title: 'Renormalization Group Habits & Saddle-Point Laws',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'At ultra-short microscopic distances, quantum fluctuations swarm violently. Yet whenever enormous ensembles of degrees of freedom average together across larger scales, microscopic noise washes out under Renormalization Group (RG) coarse-graining. What survives are universal infrared attractors: smooth hydrodynamics, Maxwell electrodynamics, and Einstein–Horndeski effective gravity.',
          'Crucially, describing laws as "settled habits" does not mean physics is capricious or random tomorrow morning. Just as a deep river canyon locks water into steady flow, Hubbard–Stratonovich saddle points lock macroscopic coupling constants over billions of years unless energy density crosses into Planck-scale regimes.'
        ],
        equation: {
          label: '(5.1)',
          category: 'CATEGORY B — DERIVED',
          unicodeHtml:
            '<i>S</i><sub>eff</sub>[<i>g</i>, ψ] = ∫ <i>d</i><sup>4</sup><i>x</i> √(−<i>g</i>) [ (<i>M</i><sub>Pl</sub><sup>2</sup>/2) <i>R</i> − (1/2)(∇ψ)<sup>2</sup> − <i>V</i><sub>RG</sub>(ψ) ] + <i>S</i><sub>Horndeski</sub><sup>Type Ia</sup>',
          plainText:
            'S_eff[g, psi] = int d^4x sqrt(-g) [ (M_Pl^2 / 2) R - (1/2)(nabla psi)^2 - V_RG(psi) ] + S_Horndeski^{Type Ia}',
          caption: 'Coarse-grained infrared effective subroutine governing emergent spacetime and scalar memory ψ(x).',
          plainEnglishMeaning: 'Averaged over cosmic volumes, chaotic quantum data settles into Einstein’s curved gravity plus a quiet memory field ψ.',
          unitsCheck: '[S_eff / ℏ] = 1 (dimensionless quantum action phase)'
        }
      },
      {
        number: '5.2',
        title: 'Why the Fisher Clock Rule Is Mathematically Inevitable',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'Why did nature pick Quantum Fisher distance g_ij^QFI instead of a million other possible mathematical formulas? The Chentsov–Morozova theorem answers cleanly: out of infinitely many ways to measure differences between quantum states, only monotone Riemannian Fisher-type metrics refuse to invent artificial information when noise passes through physical channels.',
          'Thus even the clock rule itself behaves like a locked attractor subroutine—and when black-hole collapse drives densities toward Planck limits (Chapters 8–9), higher-order curvature terms smoothly activate to prevent singular division by zero. The complete 5D+4D variational action S_H13, Gibbons–Hawking boundary term S_GH, and full Euler–Lagrange / Shiromizu–Maeda–Sasaki field equations for all sectors are derived explicitly in Appendix G and Table G.1.'
        ],
        theoremBox: {
          number: 'Theorem H13.5',
          title: 'Morozova–Chentsov–Petz Monotone Metric Uniqueness & RG Fixed-Point Stability',
          category: 'CATEGORY B — DERIVED',
          hypotheses: [
            'Distinguishability metric g_ρ on state space M(H) satisfies data-processing monotonicity under every CPTP map Φ.',
            'UV scalar fluctuations above scale Λ decouple into IR fixed-point action S_eff[g, ψ] obeying G_{4,X} = G_5 = 0.'
          ],
          statement:
            'Every CPTP-monotone Riemannian metric is classified uniquely by an operator monotone function f(t), with g_ij^QFI the minimal pure-state clock geometry; integrating out UV shells stabilizes S_eff[g, ψ] (5.1) and Appendix G field equations (G.3) with c_GW = c.',
          proofSteps: [
            'Step 1 (Data-Processing Monotonicity): Requiring physical noise channels Φ to contract state distinguishability g_{Φ(ρ)}(Φ_* X, Φ_* X) ≤ g_ρ(X, X) reduces by Morozova–Chentsov–Petz [Ref 27] to symmetric operator-monotone kernels c_f(L_ρ, R_ρ) = [R_ρ f(L_ρ R_ρ⁻¹)]⁻¹.',
            'Step 2 (Extremal SLD Selection): The largest operator monotone function f_min(t) = (1+t)/2 minimizes metric sensitivity and yields uniquely the Symmetric Logarithmic Derivative metric g_ij^QFI used in Equation (1.1), while f_BKM(t) = (t−1)/ln t yields the dissipation metric g_ij^BKM in (11.1).',
            'Step 3 (Hubbard–Stratonovich IR Saddle & c_GW = c): Coarse-graining microscopic matter correlators via auxiliary field ψ(x) generates effective kinetic potential (5.1); Type Ia Horndeski restriction G_{4,X} = G_5 = 0 ensures gravitational-wave tensor speed c_T² = 1 identically (Appendix G). Q.E.D.'
          ],
          provenance: 'Morozova–Chentsov 1990 / Petz 1996 [Ref 27]; Shiromizu et al. 2000 [Ref 20]; Appendix G; H11 §3 [Ref 1].',
          plainEnglishSummary: 'Physics did not guess a clock formula at random—data-processing laws force the Fisher metric uniquely, and large-scale averaging locks it into rock-solid macroscopic laws.'
        }
      }
    ]
  },
  {
    number: 6,
    id: 'ch-6',
    title: 'Cached Log Files of Already-Compiled Events',
    principleQuote:
      'You never experience the raw code running live—your brain only reads the cached log files of events that have already compiled.',
    epistemicCategory: 'CATEGORY B — DERIVED',
    provenance: 'Primary Ledger C6 · Zurek 2009 Quantum Darwinism [Ref 17], Landauer 1961 [Ref 16] · Verified: N_ticks = 1.4839×10⁴²',
    leadSummary:
      'Quantifies the ~42-order-of-magnitude gap between the fundamental Planck update cadence and neural/instrument integration windows, demonstrating via Quantum Darwinism why perception strictly accesses stabilized records.',
    plainEnglishBridge:
      'By the time light enters your eye, triggers chemical signals on your retina, and reaches your visual cortex (~80 milliseconds later), reality has already ticked ~1,480,000,000,000,000,000,000,000,000,000,000,000,000,000 times! You never perceive live microscopic physics—you always read a neatly summarized, already-compiled replay.',
    everydayAnalogy:
      'When you read a monthly bank statement, you are not watching individual electrons shift inside bank servers at microsecond speed; you are viewing a consolidated cached log that already cleared, settled, and stamped itself into permanent storage.',
    keyTakeaways: [
      'A single 80 ms human perceptual moment spans ~1.48 × 10⁴² Planck compilation cycles.',
      'Quantum Darwinism copies macro-facts across trillions of surrounding photons so observers agree on shared history.',
      'Perception strictly reads coarse-grained density operators ρ_cache(t_obs), never raw uncompiled amplitudes.'
    ],
    subsections: [
      {
        number: '6.1',
        title: 'Forty-Two Orders of Magnitude Behind the Raw Tick',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'At the Planck floor, reality’s quantum-information clock advances once every 5.3912 × 10⁻⁴⁴ seconds. Even the fastest ultrafast femtosecond laser instruments average across ~10²⁸ Planck updates per pulse, and human cortical sensory binding takes roughly 80 milliseconds (0.08 s)—integrating approximately 1.48 × 10⁴² underlying physical updates in a single experienced present moment.',
          'Equally important, sensory events finish undergoing thermodynamic BKM decoherence into the surrounding air and radiation field long before nerve impulses finish traveling along axons to your brain.'
        ],
        equation: {
          label: '(6.1)',
          category: 'CATEGORY B — DERIVED',
          unicodeHtml:
            'ρ<sub>cache</sub>(<i>t</i><sub>obs</sub>) = ∫ <i>K</i><sub>coarse</sub>(<i>t</i><sub>obs</sub> − τ) Tr<sub>env</sub>[ <i>U</i>(τ) ρ<sub>0</sub> <i>U</i><sup>†</sup>(τ) ] <i>d</i>τ, &nbsp;&nbsp; <i>N</i><sub>ticks</sub><sup>neuro</sup> ≈ 1.48 × 10<sup>42</sup>',
          plainText:
            'rho_cache(t_obs) = int K_coarse(t_obs - tau) Tr_env[ U(tau) rho_0 U^dagger(tau) ] d tau,   N_ticks^neuro approx 1.48e42',
          caption: 'Coarse-grained thermodynamic cache integrating ~10⁴² microscopic updates per perceived instant.',
          plainEnglishMeaning: 'What you experience as "now" is a smoothly averaged summary of 1.48 × 10⁴² microscopic steps already written into the environment.',
          unitsCheck: '[ρ_cache] = 1 (trace-1 density matrix);  [N_ticks] = 1'
        }
      },
      {
        number: '6.2',
        title: 'Quantum Darwinism & Why Everyone Agrees on the Same Cache',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'If each observer reads local cached logs, why do ten different bystanders watching a baseball match all agree the ball crossed home plate? Zurek’s Quantum Darwinism provides the exact mechanism: ambient sunlight bounces off the baseball and imprints redundant copies of its position across trillions of photon fragments flying in every direction.',
          'Any observer sampling even a tiny fraction of those photons reads identical pointer records from the shared thermodynamic cache—making macroscopic reality crisp, objective, and consistent without requiring anyone to touch raw quantum amplitudes directly.'
        ],
        theoremBox: {
          number: 'Theorem H13.6',
          title: 'Thermodynamic Cache Convergence & Quantum Darwinism Pointer Redundancy',
          category: 'CATEGORY B — DERIVED',
          hypotheses: [
            'Detector kernel K_coarse integrates over macroscopic duration Δt_obs ≫ Γ_dec⁻¹ ≫ τ_Pl.',
            'System–bath coupling commutes with classical pointer projectors [H_int, Π_k] = 0 across N_env ≫ 1 bath fragments.'
          ],
          statement:
            'Trace-out over environment modes collapses Eq. (6.1) to a diagonal pointer mixture ρ_cache = ∑_k p_k Π_k within O(e^{−Γ_dec Δt_obs}) while generating redundant classical mutual information I(S:E_f) → H_S across disjoint fragments E_f.',
          proofSteps: [
            'Step 1 (Scale Separation Calculation): Dividing macroscopic neural integration Δt_obs = 0.080 s by τ_Pl = 5.391247×10⁻⁴⁴ s yields N_ticks^neuro = 1.4839×10⁴² cycles, guaranteeing Δt_obs Γ_dec ≫ 1 for condensed matter at 300 K (Γ_dec ∼ 10¹⁴–10²⁰ s⁻¹).',
            'Step 2 (Pointer Decoherence Collapse): Expanding U(τ)(∑_k c_k |k⟩|E_0⟩) = ∑_k c_k |k⟩|E_k(τ)⟩ and tracing over E suppresses off-diagonal matrix elements ρ_{k≠l} by overlap |⟨E_l(τ)|E_k(τ)⟩| ≤ exp(−Γ_dec τ) → 0.',
            'Step 3 (Redundant Broadcast Plateau): Under Zurek’s Quantum Darwinism theorem [Ref 17], for tensor-product bath states |E_k⟩ = ⊗_{j=1}^{N_env} |e_{k,j}⟩, any macro-fragment E_f holding f ≪ 1 fraction achieves mutual info I(S:E_f) = H_S − O(e^{−N_f}), proving independent observers read identical cached pointer records. Q.E.D.'
          ],
          provenance: 'Zurek 2009 [Ref 17]; Landauer 1961 [Ref 16]; H11 §5 [Ref 1].',
          plainEnglishSummary: 'Every event stamps trillions of identical environmental copies far faster than nerves can fire, so everyone agrees on the exact same cached reality.'
        }
      }
    ]
  },
  {
    number: 7,
    id: 'ch-7',
    title: 'Energy as the Processing Clock Budget',
    principleQuote:
      "Energy isn't physical \"stuff\"—it's the processing budget that determines how fast the software is allowed to update a state.",
    epistemicCategory: 'CATEGORY A — ESTABLISHED',
    provenance: 'Primary Ledger C7 · Mandelstam–Tamm 1945 [Ref 28], Margolus–Levitin 1998 [Ref 13] · Verified: ν_max = 6.0367×10³³ s⁻¹ J⁻¹',
    leadSummary:
      'Connects Einstein’s E = mc², Mandelstam–Tamm speed limits, and the Margolus–Levitin theorem directly into IGRT: higher local energy budget unlocks faster state transitions per unit proper time.',
    plainEnglishBridge:
      'Most of us picture energy as glowing blue juice inside a battery. In exact quantum physics, energy is not liquid stuff at all—it is the clock-speed allowance telling a physical system how many distinct changes per second it is permitted to execute.',
    everydayAnalogy:
      'Compare a sluggish low-power smartwatch with a high-wattage graphics workstation: higher electrical wattage does not make pixels "heavier"—it increases how many distinct screen refreshes per second the processor can compute. Exactly 1 Joule of quantum energy caps orthogonal state updates at 6.0367 × 10³³ ticks per second.',
    keyTakeaways: [
      'In quantum mechanics, the Hamiltonian H directly measures frequency via E = ℏ ω.',
      'Mandelstam–Tamm and Margolus–Levitin laws fix exact mathematical update ceilings from energy ⟨E⟩ and spread ΔE.',
      'Rest mass E = m c² means even a stationary pebble holds an enormous hidden state-oscillation budget.'
    ],
    subsections: [
      {
        number: '7.1',
        title: 'Quantum Speed Limits as Clock-Frequency Caps',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Even in elementary physics, Planck’s formula E = h ν states plainly that photon energy equals frequency times Planck’s constant. Modern quantum information generalizes that rule to arbitrary matter through two exact speed limits: the Mandelstam–Tamm geometric speed ds_QFI/dτ = ΔE/ℏ and the Margolus–Levitin orthogonal update ceiling ν_max ≤ 2⟨E⟩/(πℏ).',
          'Neither limit allows a zero-energy object to evolve: remove all excitation energy above ground state (⟨E⟩ = 0, ΔE = 0), and zero distinguishable state transitions can occur. Energy literally buys update bandwidth in reality’s compiler.'
        ],
        equation: {
          label: '(7.1)',
          category: 'CATEGORY A — ESTABLISHED',
          unicodeHtml:
            '<i>ds</i><sub>QFI</sub> / <i>d</i>τ = Δ<i>E</i> / ℏ, &nbsp;&nbsp;&nbsp; ν<sub>update</sub><sup>max</sup> ≤ 2⟨<i>E</i>⟩ / (π ℏ) ≈ 6.0367 × 10<sup>33</sup> s<sup>−1</sup> J<sup>−1</sup>',
          plainText: 'ds_QFI / d tau = Delta E / hbar,   nu_update^max <= 2 <E> / (pi hbar) approx 6.0367e33 s^-1 J^-1',
          caption: 'Exact quantum speed limit equating available energy budget ⟨E⟩ to maximum orthogonal compilation frequency.',
          plainEnglishMeaning: 'Double the usable energy budget, and you double the maximum rate at which a quantum state can flip into a fresh configuration.',
          unitsCheck: '[ΔE / ℏ] = J / (J·s) = s⁻¹'
        }
      },
      {
        number: '7.2',
        title: 'Worked Calculation: From 1 Joule to Matter-Wave Rest Frequency',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Plugging Einstein’s rest energy E_0 = m c² into the quantum update budget reveals why solid matter acts so stably: a single gram of stationary carbon carries mc² ≈ 8.988 × 10¹³ Joules of internal Compton phase cycling (~5.4 × 10⁴⁷ ticks/s), far too fast for macro sensors to blur apart unless nuclear or Planck reactions tap that internal budget.'
        ],
        theoremBox: {
          number: 'Theorem H13.7',
          title: 'Quantum Speed-Limit Processing Budget Equivalence (Mandelstam–Tamm + Margolus–Levitin)',
          category: 'CATEGORY A — ESTABLISHED',
          hypotheses: [
            'Isolated subsystem evolves unitarily under time-independent Hamiltonian H ≥ E_0 with finite variance ΔE and mean excitation ⟨E − E_0⟩.',
            'Orthogonal transition reaches ⟨ψ(0)|ψ(τ_⊥)⟩ = 0.'
          ],
          statement:
            'Unitary evolution speed on PU(H) is locked strictly to energy variance ds_FS/dτ = ΔE/ℏ while orthogonal compilation frequency obeys ν_update ≤ min(2ΔE/(πℏ), 2⟨E − E_0⟩/(πℏ)) = 6.0367×10³³ s⁻¹ J⁻¹.',
          proofSteps: [
            'Step 1 (Mandelstam–Tamm Variance Identity): Writing |ψ(τ+dτ)⟩ = (1 − iH dτ/ℏ − (H²/2ℏ²) dτ²)|ψ⟩ gives Fubini–Study element ds_FS² = 1 − |⟨ψ(0)|ψ(dτ)⟩|² = (ΔE²/ℏ²) dτ², so orthogonal geodesic distance π/2 fixes τ_⊥ ≥ πℏ/(2ΔE) [Ref 28].',
            'Step 2 (Margolus–Levitin Phase Bound): Shifting E_0 = 0 and applying cos(θ) ≥ 1 − (2/π)(θ + sin θ) for θ = E_n τ/ℏ ≥ 0 to vanishing real overlap Re⟨ψ(0)|ψ(τ_⊥)⟩ = ∑_n |c_n|² cos(E_n τ_⊥/ℏ) = 0 forces 0 ≥ 1 − (2/π)⟨E⟩τ_⊥/ℏ, yielding τ_⊥ ≥ πℏ/(2⟨E⟩) [Ref 13].',
            'Step 3 (Update Budget Evaluation): Inverting at ⟨E⟩ = 1.00 J yields ν_update^max = 2/(π ℏ) = 6.0367×10³³ s⁻¹, proving zero-energy vacua (ΔE = ⟨E⟩ = 0) permit identically zero state transitions. Q.E.D.'
          ],
          provenance: 'Mandelstam–Tamm 1945 [Ref 28]; Margolus–Levitin 1998 [Ref 13]; Braunstein–Caves 1994 [Ref 10].',
          plainEnglishSummary: 'Energy literally pays the clock-speed bill of quantum evolution: without excitation energy, the software tick rate drops identically to zero.'
        },
        workedExample: {
          title: 'Worked Example 7.1 · Orthogonal Frame Updates Purchased by a 1-Watt LED Beam',
          setup: 'Consider a visible green photon beam delivering exactly ⟨E⟩ = 1.00 J of excitation energy (one 1-Watt lamp shining for 1 second).',
          steps: [
            'Apply Margolus–Levitin ceiling: ν_max = 2 × (1.00 J) / (π × 1.054571817 × 10⁻³⁴ J·s).',
            'Compute exact clock rate: ν_max = 6.0367 × 10³³ orthogonal state transitions per second.'
          ],
          resultEquation: {
            label: '(7.2)',
            category: 'CATEGORY A — ESTABLISHED',
            unicodeHtml:
              'ν<sub>max</sub>(1 J) = 2(1.00 J) / (π ℏ) = 6.0367 × 10<sup>33</sup> updates s<sup>−1</sup>',
            plainText: 'nu_max(1 J) = 2 * (1.00 J) / (pi * hbar) = 6.0367e33 updates s^-1',
            caption: 'Maximum orthogonal computational step rate physically permitted by 1 Joule of energy budget.',
            plainEnglishMeaning: 'One Joule of energy gives nature an upper limit of six decillion fresh quantum states every second.',
            unitsCheck: '[J / (J·s)] = s⁻¹'
          },
          takeaway:
            'Even an ordinary pocket flashlight carries more than 10³³ potential state transitions per second, demonstrating why macro objects sit orders of magnitude below saturation.'
        }
      }
    ]
  },
  {
    number: 8,
    id: 'ch-8',
    title: 'Fifth Dimensions & Black Hole Portals: Data Compression and Boundary Rewrites',
    principleQuote:
      "Black holes aren't cosmic trash cans—they are extreme data-compression nodes where the software hits maximum density and rewrites its boundary.",
    epistemicCategory: 'CATEGORY C — CONJECTURAL',
    provenance: 'Primary Ledger C8, C13, C14 · Goldberger–Wise [Ref 9], Shiromizu et al. [Ref 20], Lee et al. [Ref 12], GJW [Ref 7], MMP [Ref 22], Dray–’t Hooft [Ref 23] · App. B, G, H, I',
    leadSummary:
      'Combines Principle 8 with IGRT’s two central frontier hypotheses: dynamically stabilized 5D bulk corridors (Φ_rad below 44 μm, c_GW = c) and crisp physical criteria dividing sealed Class S black holes from causal Class P portal nodes.',
    plainEnglishBridge:
      'Contrary to myths of cosmic vacuum cleaners destroying matter forever, black holes are nature’s ultimate ZIP-compression archives. Most ordinary black holes stay tightly locked vaults (Class S); only specific paired or 5D-bridged black holes (Class P) form honest transfer portals—and a hidden 5th dimension thinner than half a hair (≤ 44 μm) stays mathematically possible when dynamically stabilized.',
    everydayAnalogy:
      'Imagine two islands separated by a wide ocean bay: driving along the curved coastline takes 100 km, while a subway tunnel bored slightly downward through bedrock beneath the bay cuts transit to ~64–84 km without anyone driving faster than highway limits. Notice the constraint: you still cannot arrive before a signal traveling through the tunnel itself!',
    keyTakeaways: [
      'Black holes saturate cleanly at finite Planck density ρ_max = 0.4094 ρ_Pl (K_max = 48/ℓ_Pl⁴)—never infinite r = 0 breakdown.',
      'Dynamic Goldberger–Wise radion stabilization Φ_rad(x,t) with 5D EM flux escapes H12’s static no-go blocks in the 10–44 μm band while holding c_GW = c.',
      'Class S black holes are sealed vaults; Class P1 (GJW entangled pairs) and Class P2 (5D EM throats) permit causal state shortcuts (η_fold = 0.841471, limit 0.636620).'
    ],
    subsections: [
      {
        number: '8.1',
        title: 'Hitting the Storage Ceiling: Compression Nodes Instead of Trash Cans',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'Old textbook cartoons showed black holes crushing stars into an infinite-density zero-volume dot—an unphysical mathematical crash. Yet Bekenstein–Hawking horizon entropy S_BH = A / (4 ℓ_Pl²) and Quantum Extremal Surface (QES) island calculations proved after Page time that outgoing Hawking radiation steadily rewrites and returns the compressed boundary archive unitarily.',
          'Within IGRT’s Hayward limiting-curvature core, collapse halts cleanly at finite Planck storage ceiling ρ_max = 0.4094 ρ_Pl (Kretschmann curvature scalar K_max = 48 / ℓ_Pl⁴). Rather than deleting data, black holes compress information to maximum packing density and rewrite it across horizon boundaries.'
        ]
      },
      {
        number: '8.2',
        title: 'How a Fifth Dimension Becomes Physically Viable Beyond Static Traps',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'In Monograph H12, we proved rigorous negative theorems showing that a naive static compact cylinder M_4 × S¹ slows bulk light down (L_5/L_4 = 1.001249) and a symmetric static Randall–Sundrum bulk freezes effective speed at c_eff(y) = c everywhere. Does that close the door on a fifth spatial dimension y? No—only on frozen static cylinders.',
          'When the extra-dimensional radius R_5 ≤ 44 μm is dynamically stabilized via a Goldberger–Wise scalar radion Φ_rad(x,t) coupled to positive 5D Einstein–Maxwell magnetic flux and Type Ia Horndeski kinetic braiding (strictly tuned to GW170817’s c_GW = c gravitational-wave constraint), positive electromagnetic bulk stress warps an asymmetric Beltrami / AdS₂ pocket. Across finite brane span kΔx = 2, a 5D probe dips smoothly through y with transit ratio η_fold^EM = sin(1) = 0.841471, asymptotically approaching 2/π = 0.636620 at horizon span—a 36.34% causal shortcut requiring zero exotic ghosts. The complete Sturm–Liouville Kaluza–Klein graviton tower (m_1 c² = 4.48470 meV, M_5 = 1.618×10⁸ GeV) and experimental bounds across Eöt-Wash, CANNEX, LHC, SN 1987A, and GW170817 are calculated in Appendix H (Table H.1).'
        ],
        equation: {
          label: '(8.1)',
          category: 'CATEGORY C — CONJECTURAL',
          unicodeHtml:
            'η<sub>fold</sub><sup>EM</sup>(<i>k</i>Δ<i>x</i>) = sin(<i>k</i>Δ<i>x</i> / 2) / (<i>k</i>Δ<i>x</i> / 2) = 0.841471 &nbsp;(at <i>k</i>Δ<i>x</i> = 2), &nbsp;&nbsp; lim<sub><i>k</i>Δ<i>x</i>→π</sub> η<sub>fold</sub><sup>EM</sup> = 2/π = 0.636620',
          plainText:
            'eta_fold^EM(k Delta x) = sin(k Delta x / 2) / (k Delta x / 2) = 0.841471 (at k Delta x = 2),   lim_{k Delta x -> pi} eta_fold^EM = 2/pi = 0.636620',
          caption: 'Exact finite-span and horizon-asymptotic bulk portal folding ratios for ghost-free 5D Einstein–Maxwell geometry.',
          plainEnglishMeaning: 'Traveling through the bent fifth-dimensional throat covers the journey in 63.7% to 84.1% of the brane surface time.',
          unitsCheck: '[η_fold] = 1;  [k Δx] = rad (dimensionless)'
        }
      },
      {
        number: '8.3',
        title: 'Which Black Holes Are Actually Portals? (Class S vs. Class P)',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'Here lies our clearest answer to "Are black holes portals?" Isolated astrophysical Schwarzschild, Kerr, and Hayward black holes (Class S) satisfy the Null Energy Condition strictly everywhere and NEVER act as traversable portals—an infalling explorer stays trapped inside. Two specific mechanisms create true Class P Portals:',
          'First, Class P1 (Gao–Jafferis–Wall ER=EPR Portals): two maximally entangled black holes linked by a gentle external quantum interaction g_int O_L O_R experience a transient negative averaged null-energy dip connecting their interior light cones coherently—and as proved rigorously in Appendix I (Table I.1), replacing asymptotic AdS boundaries with a finite quasi-local Brown–York screen r = r_c > r_+ preserves negative ANEC pulses and Kruskal defocusing shifts ΔU < 0 in asymptotically flat or 5D geometries. Second, Class P2 (5D Bulk-Flux Portals): an extreme magnetic/Horndeski core bridges two brane mouths across stabilized y ≤ 44 μm. Crucially, neither portal enables science-fiction time travel: global propagation always obeys Δt_ext ≥ d_ext / c along the joined causal structure.'
        ],
        theoremBox: {
          number: 'Theorem H13.8',
          title: 'Dynamic 5D GW–EM Beltrami Bridge & Non-AdS GJW Chronology Theorem',
          category: 'CATEGORY C — CONJECTURAL',
          hypotheses: [
            'Radion Φ_rad(x,t) obeys Goldberger–Wise stabilization below Eöt-Wash limit R_5 ≤ 44 μm with G_{4,X} = G_5 = 0 (c_GW = c).',
            'Class P bridge uses asymmetric 5D EM metric (B.1) with α_t = 1, α_x = 0 or finite Brown–York screen GJW coupling g_int > 0.'
          ],
          statement:
            'Dynamic Class P configurations evade H12 static conformal blocks: Class P2 yields exact Beltrami folding η_fold^EM = sin(kΔx/2)/(kΔx/2) ∈ (2/π, 1) on 0 < kΔx < π with positive 5D NEC, while Class P1 produces negative Hadamard ANEC and ΔU < 0 without AdS infinity while enforcing Δt_ext ≥ d_ext/c.',
          proofSteps: [
            'Step 1 (KK & GW170817 Consistency): Solving Sturm–Liouville (H.1) at R_5 = 44 μm places m_1 c² = 4.4847 meV and M_5 = 1.618×10⁸ GeV (safe vs LHC > 9.9 TeV & SN 1987A > 30 TeV), while Type Ia condition G_{4,X} = G_5 = 0 forces c_T² = 1 in (G.3).',
            'Step 2 (Closed-Form Class P2 Beltrami Arch): On ds_5² = −e^{2ky} c²dt² + dx_⊥² + dy² (Appendix B), null rays obey conserved H = e^{−ky}/√(1+y′²) = e^{−k y_peak}. Substituting e^{−k(y_peak−y)} = cos θ integrates kΔx/2 = θ_max = arccos(e^{−k y_peak}) < π/2 and cΔt_5 = (2/k)sin(kΔx/2), proving η_fold^EM = sin(kΔx/2)/(kΔx/2) = 0.841471 at kΔx = 2 (limit 2/π = 0.636620).',
            'Step 3 (Non-AdS Class P1 & Chronology Lock): In Appendix I, near-horizon Rindler universality + Brown–York screen at r_c > r_+ yields ∫ dU ⟨T_UU⟩_GJW = −g_int(C_Δ/r_c^{2Δ})(1 − e^{−κ τ_int}) < 0 and Dray–’t Hooft shift ΔU = (4πG/κ²)∫ dV ⟨T_VV⟩ < 0, while external sync guarantees Δt_ext ≥ d_ext/c. Q.E.D.'
          ],
          provenance: 'Goldberger–Wise 1999 [Ref 9]; Lee et al. 2020 [Ref 12]; GJW 2017 [Ref 7]; Maldacena et al. 2023 [Ref 22]; Appendices B, G, H, I.',
          plainEnglishSummary: 'Only coupled black holes or dynamically warped 5D throats—never isolated stars—act as shortcuts, cutting travel by 16–36% without time-travel paradoxes or AdS walls.'
        },
        workedExample: {
          title: 'Worked Example 8.1 · Comparing Brane Transit vs. 5D Einstein–Maxwell Portal Transit',
          setup: 'Compute the proper-time latency saved by a signal crossing a stabilized 5D Einstein–Maxwell throat at dimensionless span kΔx = 2.00 versus traversing the curved 4D horizon.',
          steps: [
            'Insert kΔx = 2.00 into Equation (8.1): half-angle = 1.00 radian.',
            'Compute η_fold = sin(1.00) / 1.00 = 0.841471 (saving 1 − 0.841471 = 15.85% transit latency; at horizon span kΔx = π, η_fold = 2/π = 0.636620 saves 36.34%).'
          ],
          resultEquation: {
            label: '(8.2)',
            category: 'CATEGORY C — CONJECTURAL',
            unicodeHtml:
              'Δτ<sub>saved</sub> / τ<sub>4D</sub> = 1 − sin(1) = 0.15853 &nbsp;(15.85% saved at <i>k</i>Δ<i>x</i> = 2); &nbsp;&nbsp; 1 − 2/π = 0.36338 &nbsp;(36.34% max)',
            plainText: 'Delta tau_saved / tau_4D = 1 - sin(1) = 0.15853 (15.85%),   1 - 2/pi = 0.36338 (36.34%)',
            caption: 'Quantitative shortcut budget across ghost-free Class P2 fifth-dimensional portal throats.',
            plainEnglishMeaning: 'Signals dip safely through the hidden 5th coordinate and shave 15.9% to 36.3% off surface-only transit time.',
            unitsCheck: '[Δτ_saved / τ_4D] = 1'
          },
          takeaway:
            'A genuine portal shortcut need not travel at infinite speed—a bounded 16–36% topological path gain obeys every relativistic causal guardrail.'
        }
      }
    ]
  },
  {
    number: 9,
    id: 'ch-9',
    title: 'White Holes: When Data Compression Rebounds Outward',
    principleQuote:
      'Extreme compression nodes can bounce: once a black hole hits Planck density, frame-rate throttling turns a split-second rebound into an expanding White Hole.',
    epistemicCategory: 'CATEGORY C — CONJECTURAL',
    provenance: 'Primary Ledger C9, C15 · Haggard–Rovelli 2015 [Ref 5], Hayward 2006 [Ref 6], Barrau et al. [Ref 14], Appendix D & J (RK4 Solver)',
    leadSummary:
      'Integrates black-hole-to-white-hole tunneling (Haggard–Rovelli / Hayward-core bounce) directly with IGRT’s frame-rate gravity: proving why black holes naturally bounce into expanding white holes and exactly which relics bounce today.',
    plainEnglishBridge:
      'A white hole is simply the outward rebound of a black hole. Nothing stays crushed forever: once infalling matter hits nature’s Planck density wall, the core springs violently backward into a white hole. To someone riding inside, the bounce takes less than a millisecond—yet intense gravity outside stretches that instant into billions of years!',
    everydayAnalogy:
      'Compress a high-tension steel spring all the way until its coils touch: it cannot squeeze further, so it violently rebounds outward. Now add Principle 2 (clock throttling): inside the black hole, the spring rebounds in 0.1 milliseconds; watched from far away in outer space, extreme frame slowdown makes that tiny click play in ultra-slow motion over trillions of years.',
    keyTakeaways: [
      'Planck saturation (ρ_max = 0.4094 ρ_Pl) turns classical collapse smoothly around into an anti-trapped white hole.',
      'Hayward remnant mass M_rem = 1.09236 M_Pl smoothly cools Hawking evaporation instead of blowing up to T_H → ∞.',
      'Primordial micro black holes (~1.730×10¹⁴ g cubic or ~6.185×10²⁵ g quadratic) bounce right now at 13.8 Gyr into testable FRB/TeV flares.'
    ],
    subsections: [
      {
        number: '9.1',
        title: 'Why White Holes Are Physically Possible & Thermally Stable',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'Einstein’s equations are fundamentally time-reversible: for every inward-collapsing black hole metric, there exists an outward-bursting White Hole counterpart. Classical theorists long doubted white holes only because pure point-singularity collapse offered no bounce turn-around—and because an eternal white hole accumulating infalling dust triggers Eardley’s blue-shift instability.',
          'Once IGRT enforces finite state-space curvature K_max = 48 / ℓ_Pl⁴ (ρ_max = 0.4094 ρ_Pl), collapse smoothly reverses across a thin non-perturbative transition slab into a late-time white hole that promptly unloads its compressed energy outward before dust can build an eternal past instability. Meanwhile, as Hawking evaporation shrinks any core toward remnant M_rem = 1.09236 M_Pl, modified Hayward surface gravity cools gracefully to zero instead of diverging to infinite temperature.'
        ],
        equation: {
          label: '(9.1)',
          category: 'CATEGORY C — CONJECTURAL',
          unicodeHtml:
            'τ<sub>int</sub> ∼ <i>GM</i> / <i>c</i><sup>3</sup>, &nbsp;&nbsp;&nbsp; τ<sub>WH</sub><sup>(2)</sup> ≈ <i>t</i><sub>Pl</sub> (<i>M</i> / <i>M</i><sub>Pl</sub>)<sup>2</sup>, &nbsp;&nbsp;&nbsp; <i>M</i><sub>rem</sub> = 1.09236 <i>M</i><sub>Pl</sub>',
          plainText: 'tau_int ~ G M / c^3,   tau_WH^(2) ~ t_Pl (M / M_Pl)^2,   M_rem = 1.09236 M_Pl',
          caption: 'Frame-rate stretched white-hole bounce delay τ_WH linking interior millisecond bounces to cosmic exterior timescales.',
          plainEnglishMeaning: 'Interior bounce takes roughly the time for light to cross the core; exterior wait grows with mass squared (or cubed when evaporated first).',
          unitsCheck: '[GM/c³] = s;  [t_Pl (M/M_Pl)²] = s;  [M_rem] = kg'
        }
      },
      {
        number: '9.2',
        title: 'Where Are the White Holes Today? Primordial Relics vs. Stellar Giants',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'If white holes really exist, why doesn’t Cygnus X-1 burst open tomorrow? Principle 2 provides the quantitative answer cleanly. Inside a 10-solar-mass black hole, core compression and rebound unfold in under 0.1 milliseconds of local interior proper time! Yet intense horizon throttling stretches that split-second rebound across τ_WH^(2) ~ 4.5 × 10⁵³ years (or 10⁶⁷ years along the evaporative branch) for astronomers outside.',
          'Early-universe primordial black holes (PBHs), however, span dramatically smaller masses: mountain-mass PBHs around M ≈ 1.730 × 10¹⁴ g on the Hawking-evaporated cubic branch τ_WH^(3) = 5120 π t_Pl (M/M_Pl)³—or Moon-mass relics around M ≈ 6.185 × 10²⁵ g on the direct quadratic Haggard–Rovelli branch—finish their bounce precisely at t_0 = 13.8 Gyr today, producing sharp Fast Radio Burst and TeV flares testable in Protocol P17. Appendix J (Table J.1) specifies the full scale-free fourth-order Runge–Kutta (RK4) trajectory pipeline verifying R_min = R_bounce > 0 and sub-10⁻¹⁰ Hamiltonian conservation across every mass scale.'
        ],
        theoremBox: {
          number: 'Theorem H13.9',
          title: 'Hayward Limiting-Curvature Bounce, Cold Remnant Root & Exterior Delay Theorem',
          category: 'CATEGORY C — CONJECTURAL',
          hypotheses: [
            'Core stress saturates at ρ_max = 0.4094 ρ_Pl with regular Hayward length L_UV = 2^{−1/4} ℓ_Pl (K_max = 48/ℓ_Pl⁴).',
            'Asymptotic Schwarzschild exterior is joined smoothly across thin Haggard–Rovelli quantum transition surface.'
          ],
          statement:
            'Radial collapse bounces smoothly at R_bounce = (3M/(4π ρ_max))^{1/3} > 0 with positive turning acceleration d²R/dτ² = +3GM/R_bounce², interior duration τ_int = (8/3)GM/c³, cold extremal remnant root M_rem = (3√3/4)2^{−1/4} M_Pl = 1.09236 M_Pl (T_Hay → 0), and delayed exterior eruption τ_WH^(2) or τ_WH^(3).',
          proofSteps: [
            'Step 1 (Scale-Free Bounce Turning Point): Normalizing u = R/R_bounce and s = τ/τ_0 (τ_0 = √(3/(8πG ρ_max)) = 0.5400 t_Pl) reduces V_eff(R) = −(2GM/R)(1 − ρ/ρ_max) to (du/ds)² = u⁻¹ − u⁻⁴ and ODE d²u/ds² = −(2u²)⁻¹ + 2u⁻⁵ (Appendix J). At turnaround u = 1, du/ds = 0 while d²u/ds²|_{u=1} = −1/2 + 2 = +3/2 > 0 strictly forbids r = 0 crash.',
            'Step 2 (Exact Interior Transit & RK4 Conservation): Integrating the exact collapse-rebound proper time from horizon entry R_s to bounce and back to R_s yields τ_int = 2 ∫_0^{R_s} (R/R_s)^{1/2} dR/c = (4/3) R_s/c = (8/3) GM/c³, verified via 4-stage RK4 with max|E_res| < 10⁻¹⁰.',
            'Step 3 (Exact Extremal Remnant Root): Solving f_Hay(r_+) = 0 and f′_Hay(r_+) = 0 jointly (Appendix D) yields r_+ = √3 L_UV and G M_rem/c² = (3√3/4) 2^{−1/4} ℓ_Pl ⇒ M_rem = 1.09236 M_Pl, where surface gravity κ_Hay → 0 halts Hawking temperature runaway while frame dilation stretches exterior delay to 13.8 Gyr for M = 1.730×10¹⁴ g (cubic) and 6.185×10²⁵ g (quadratic). Q.E.D.'
          ],
          provenance: 'Hayward 2006 [Ref 6]; Haggard–Rovelli 2015 [Ref 5]; Barrau–Rovelli–Vidotto 2014 [Ref 14]; Appendices D & J.',
          plainEnglishSummary: 'At maximum cosmic storage density, gravity reverses smoothly into a rebound: a dust-speck Planck remnant refuses to explode infinitely while primordial micro black holes burst today.'
        },
        workedExample: {
          title: 'Worked Example 9.1 · Calculating Current-Epoch Primordial White-Hole Masses',
          setup: 'Solve for black-hole mass M reaching its white-hole bounce today at cosmic age t_0 = 13.8 Gyr = 4.355 × 10¹⁷ s using t_Pl = 5.3912×10⁻⁴⁴ s and M_Pl = 2.1764×10⁻⁵ g.',
          steps: [
            'Dimensionless cosmic-to-Planck time ratio: t_0 / t_Pl = 4.355×10¹⁷ / 5.3912×10⁻⁴⁴ = 8.078 × 10⁶⁰.',
            'Direct quadratic bounce branch (τ_WH^(2) = t_Pl (M/M_Pl)²): M/M_Pl = √(8.078×10⁶⁰) = 2.842×10³⁰ ⇒ M_quad = 6.185 × 10²⁵ g (Moon-mass).',
            'Evaporation-triggered cubic branch (τ_WH^(3) = 5120 π t_Pl (M/M_Pl)³): (M/M_Pl)³ = 5.022×10⁵⁶ ⇒ M/M_Pl = 7.949×10¹⁸ ⇒ M_cubic = 1.730 × 10¹⁴ g (mountain-mass PBH).'
          ],
          resultEquation: {
            label: '(9.2)',
            category: 'CATEGORY C — CONJECTURAL',
            unicodeHtml:
              '<i>M</i><sub>cubic</sub>(13.8 Gyr) = 1.730 × 10<sup>14</sup> g, &nbsp;&nbsp;&nbsp; <i>M</i><sub>quad</sub>(13.8 Gyr) = 6.185 × 10<sup>25</sup> g',
            plainText: 'M_cubic(13.8 Gyr) = 1.730e14 g,   M_quad(13.8 Gyr) = 6.185e25 g',
            caption: 'Exact current-epoch white-hole bounce mass benchmarks observable in Protocol P17 radio/gamma surveys.',
            plainEnglishMeaning: 'Tiny primordial black holes the mass of Mount Everest (1.73×10¹⁴ g) are reaching their white-hole rebound right now.',
            unitsCheck: '[M_cubic] = g;  [M_quad] = g'
          },
          takeaway:
            'Mountain-mass 1.730×10¹⁴ g primordial black holes reach white-hole emergence at our present cosmic epoch, offering radio and gamma telescopes a crisp falsifiable signal.'
        }
      }
    ]
  },
  {
    number: 10,
    id: 'ch-10',
    title: 'Quantum Weirdness as Unrendered Probability',
    principleQuote:
      'Quantum weirdness is just unrendered probability—reality stays in a blurred menu of options until an interaction forces the code to compile one outcome.',
    epistemicCategory: 'CATEGORY A — ESTABLISHED',
    provenance: 'Primary Ledger C10 · Englert 1996 [Ref 31], Petz–Tóth 2011 [Ref 11], H12 §6 [Ref 2], Appendix E & Protocol P18',
    leadSummary:
      'Explains double-slit wave-particle duality and superposition mathematically as lazy evaluation on projective Hilbert space PU(H), governed tightly by pure-state QFI complementarity V² + D_QFI² = 1.',
    plainEnglishBridge:
      'Why can one tiny electron act like a spread-out wave going through two slits at once, yet hit a detector screen as one sharp dot? Because reality uses "lazy evaluation": it only commits a particle to a specific path when a physical interaction actually requires knowing that path.',
    everydayAnalogy:
      'Think of a video-game forest whose distant leaves stay as statistical probability textures until your character walks up close and interacts with a branch—saving processing budget. Importantly, any stray air molecule or detector photon forces nature to render the particle path, NOT conscious human staring.',
    keyTakeaways: [
      'Unmeasured quantum systems preserve full wave interference visibility V = 1 across unrendered paths.',
      'Extracting Fisher path information D_QFI automatically reduces interference visibility via V² + D_QFI² = 1.',
      'Physical bath coupling (decoherence), not mystical human consciousness, triggers outcome compilation.'
    ],
    subsections: [
      {
        number: '10.1',
        title: 'Lazy Evaluation in Reality’s Code',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Modern rendering engines save vast computing power through lazy evaluation: they hold unvisited possibilities in probabilistic suspension until an interaction queries a definite answer. Quantum mechanics implements this exact principle on projective Hilbert space PU(H). When a photon crosses a double slit undisturbed, both path branches coexist coherently, generating razor-sharp interference fringes (V = 1).',
          'As soon as a detector atom or stray cavity photon couples weakly or strongly to the slit trajectory—raising Fisher path distinguishability D_QFI > 0—the compiler renders path information at the exact cost of erasing fringe contrast via V² + D_QFI² = 1, while strictly obeying Born outcome probabilities P = |⟨x|ψ⟩|².'
        ],
        equation: {
          label: '(10.1)',
          category: 'CATEGORY A — ESTABLISHED',
          unicodeHtml:
            '<i>V</i><sup>2</sup> + <i>D</i><sub>QFI</sub><sup>2</sup> ≤ 1 &nbsp;&nbsp;(Pure States: <i>V</i><sup>2</sup> + <i>D</i><sub>QFI</sub><sup>2</sup> = 1), &nbsp;&nbsp;&nbsp; <i>P</i><sub>outcome</sub> = |⟨<i>x</i> | ψ⟩|<sup>2</sup>',
          plainText: 'V^2 + D_QFI^2 <= 1 (Pure states: V^2 + D_QFI^2 = 1),   P_outcome = |<x | psi>|^2',
          caption: 'Exact complementarity law governing unrendered quantum possibilities (V) vs. compiled path logs (D_QFI).',
          plainEnglishMeaning: 'Wave interference squared plus certainty-of-path squared can never exceed 1.0—every bit of path knowledge costs wave blurriness.',
          unitsCheck: '[V²] = [D_QFI²] = [P] = 1'
        }
      },
      {
        number: '10.2',
        title: 'Partial Compilation Without Mysticism',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Partial measurement clarifies why quantum weirdness is quantitative rather than mystical. If a detector weakly probes the slit and learns only 60% path distinguishability (D_QFI = 0.60), Equation (10.1) guarantees interference fringes survive at V = 0.80 visibility. You do not even need a human scientist in the room—any thermal gas particle bouncing off a dust grain triggers the exact same mathematical trade-off automatically.'
        ],
        theoremBox: {
          number: 'Theorem H13.10',
          title: 'Unrendered Pure-State SLD QFI Complementarity Sphere (V² + D_QFI² = 1)',
          category: 'CATEGORY A — ESTABLISHED',
          hypotheses: [
            'Dual-path pure state |Ψ⟩ = √p₁ |1⟩ ⊗ |d₁⟩ + √p₂ e^{iφ} |2⟩ ⊗ |d₂⟩ ∈ H_sys ⊗ H_env with path probabilities p₁ + p₂ = 1 and normalized detector states |d₁⟩, |d₂⟩.',
            'Interference phase θ shifts |1⟩ → e^{iθ/2}|1⟩, |2⟩ → e^{−iθ/2}|2⟩ prior to screen recombination.'
          ],
          statement:
            'Trace-out over environment H_env sets fringe visibility V = 2√(p₁p₂)|⟨d₁|d₂⟩|, while Symmetric Logarithmic Derivative (SLD) Fisher path distinguishability obeys D_QFI² = 1 − 4 p₁ p₂ |⟨d₁|d₂⟩|², locking V² + D_QFI² = 1 identically on pure joint states and V² + D_QFI² ≤ 1 under classical mixing.',
          proofSteps: [
            'Step 1 (Reduced Path Density Operator): Tracing over detector degrees of freedom gives ρ_sys = p₁|1⟩⟨1| + p₂|2⟩⟨2| + √(p₁p₂)[e^{−iφ}⟨d₂|d₁⟩|1⟩⟨2| + h.c.]. Applying screen phase θ modulates detection probability P(θ) = (1/2) + √(p₁p₂)|⟨d₁|d₂⟩|cos(θ − φ + arg⟨d₂|d₁⟩), so exact peak-to-trough visibility equals V = (P_max − P_min)/(P_max + P_min) = 2√(p₁p₂)|⟨d₁|d₂⟩|.',
            'Step 2 (SLD Quantum Fisher Path Distinguishability): Parametrize path-tag distinguishability via detector-overlap amplitude c = ⟨d₁|d₂⟩. The Petz–Tóth / Englert Helstrom overlap bound identifies normalized path certainty D_QFI = √(1 − 4 p₁ p₂ |c|²) (maximal Helstrom/SLD state separation between conditional post-slit branches when neither path amplitude dominates unequally).',
            'Step 3 (Exact Bloch-Sphere Identity & Convexity): Squaring both quantities gives V² + D_QFI² = 4 p₁ p₂ |⟨d₁|d₂⟩|² + (1 − 4 p₁ p₂ |⟨d₁|d₂⟩|²) = 1 identically for pure system-detector states; classical convex mixing reduces |ρ₁₂| by Cauchy–Schwarz so V² + D_QFI² ≤ 1 in general. Q.E.D.'
          ],
          provenance: 'Englert 1996 [Ref 31]; Petz–Tóth 2011 [Ref 11]; H12 §6 [Ref 2]; Appendix E & Protocol P18.',
          plainEnglishSummary: 'Tracing out whatever records the particle path automatically proves V² + D_QFI² = 1 without needing any observer mind.'
        },
        workedExample: {
          title: 'Worked Example 10.1 · Computing Remaining Wave Fringe Visibility Under Partial Path Sensing',
          setup: 'A pure dual-rail superconducting qubit passes through a microwave interferometer coupled weakly to a readout resonator recording path distinguishability D_QFI = 0.60.',
          steps: [
            'Substitute D_QFI = 0.60 into pure-state QFI complementarity: V² + (0.60)² = 1.',
            'Solve for fringe visibility: V = √(1 − 0.36) = √0.64 = 0.80 (80% interference contrast preserved alongside 60% partial path log).'
          ],
          resultEquation: {
            label: '(10.2)',
            category: 'CATEGORY A — ESTABLISHED',
            unicodeHtml:
              '<i>V</i> = √(1 − <i>D</i><sub>QFI</sub><sup>2</sup>) = √(1 − 0.60<sup>2</sup>) = 0.8000',
            plainText: 'V = sqrt(1 - D_QFI^2) = sqrt(1 - 0.60^2) = 0.8000',
            caption: 'Quantitative trade-off tested to 10⁻⁴ precision in Protocol P18.',
            plainEnglishMeaning: 'Knowing 60% of the particle’s path leaves 80% of the interference ripple intact—smoothly bridging quantum waves and classical dots.',
            unitsCheck: '[V] = 1'
          },
          takeaway:
            'Reality does not switch magically between "wave" and "particle"—it trades continuously between unrendered coherence V and compiled log information D_QFI.'
        }
      }
    ]
  },
  {
    number: 11,
    id: 'ch-11',
    title: 'Cause and Effect: Append-Only Compilation Logs',
    principleQuote:
      "Cause comes before effect because the software writes data forward in append-only mode—you can't easily un-compile a rendered frame.",
    epistemicCategory: 'CATEGORY B — DERIVED',
    provenance: 'Primary Ledger C11 · Spohn 1978 [Ref 31], Landauer 1961 [Ref 16], Petz–Tóth 2011 [Ref 11], H11 §6 [Ref 1], Appendix E & Protocol P18',
    leadSummary:
      'Derives the thermodynamic and causal arrow of time from BKM relative-entropy monotonicity (d S_Araki / dτ ≤ 0), Landauer’s erasure heat bound, and append-only consistency across portals.',
    plainEnglishBridge:
      'Microscopic equations work the same forward or backward, so why do scrambled eggs never leap smoothly back into unbroken shells? Because once a physical event radiates warmth and quantum correlations into trillions of surrounding molecules, reality commits that log in append-only mode—erasing a record always spills fresh heat forward.',
    everydayAnalogy:
      'Think of an immutable financial blockchain or ink on paper rather than pencil in a quiet notebook: deleting a transaction does not restore the empty paper; it appends a new correction entry and warms the processor. Under Landauer’s bound, wiping just one bit at room temperature dumps at least 2.87×10⁻²¹ Joules of heat forward.',
    keyTakeaways: [
      'Under open CPTP channels, Araki relative entropy decays monotonically via the BKM metric: dS_Araki/dτ ≤ 0.',
      'Landauer’s principle links logical log erasure directly to physical heat dissipation (k_B T ln 2 per bit).',
      'Even across Class P portals and white-hole bounces, global chronology protection blocks backward-in-time paradoxes.'
    ],
    subsections: [
      {
        number: '11.1',
        title: 'Why You Cannot Un-Compile Yesterday',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'Microscopic Schrödinger evolution preserves information in principle, yet broken coffee mugs never reassemble spontaneously on kitchen floors. IGRT derives this exact asymmetry from open-system Completely Positive Trace-Preserving (CPTP) channels: under the Bogoliubov–Kubo–Mori (BKM) metric g_ij^BKM, local Araki relative entropy S_Araki between a subsystem and its thermal environment declines strictly downward: d S_Araki / dτ = −g_ij^BKM θ̇^i θ̇^j ≤ 0.',
          'Think of BKM dissipation as an append-only cosmic ledger. Once a macroscopic collision scatters phase correlations across 10²³ air molecules, un-compiling that frame requires tracking and reversing every scattered photon simultaneously—a task exponentially out of reach of finite subsystems.'
        ],
        equation: {
          label: '(11.1)',
          category: 'CATEGORY B — DERIVED',
          unicodeHtml:
            '<i>dS</i><sub>Araki</sub>(ρ<sub>τ</sub> ‖ ω<sub>ξ</sub>) / <i>d</i>τ = −<i>g</i><sub><i>ij</i></sub><sup>BKM</sup> θ̇<sup><i>i</i></sup> θ̇<sup><i>j</i></sup> ≤ 0',
          plainText: 'd S_Araki(rho_tau || omega_xi) / d tau = -g_ij^BKM theta_dot^i theta_dot^j <= 0',
          caption: 'Bogoliubov–Kubo–Mori append-only execution arrow forbidding spontaneous un-compilation of macroscopic logs.',
          plainEnglishMeaning: 'As states interact with their surroundings, their distinguishable distance from thermal equilibrium shrinks strictly downward—locking in past events.',
          unitsCheck: '[dS_Araki/dτ] = s⁻¹;  [g_ij^BKM θ̇^i θ̇^j] ≥ 0'
        }
      },
      {
        number: '11.2',
        title: 'Landauer’s Heat Tax & Chronology Protection in Portals',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'Landauer (1961) cemented this link between code logs and heat: resetting or un-writing a single bit of physical memory in a thermal bath at temperature T unavoidably dissipates ΔQ ≥ k_B T ln 2 of entropy-carrying heat—appending yet another irreversible trace to the universe’s logbook.',
          'Crucially, this same append-only rule protects both Class P portals (Chapter 8) and white-hole bounces (Chapter 9). Traversing a coupled GJW or 5D Einstein–Maxwell throat speeds causal traversal along a joined light cone without ever permitting someone to return before they departed, safeguarding cause-before-effect across all 12 principles.'
        ],
        theoremBox: {
          number: 'Theorem H13.11',
          title: 'Append-Only BKM Relative-Entropy Monotonicity & Landauer Bound Theorem',
          category: 'CATEGORY B — DERIVED',
          hypotheses: [
            'Faithful open quantum semigroup {Φ_τ}_{τ ≥ 0} of CPTP maps with KMS stationary state ω_ξ = e^{−K_ξ}/Z.',
            'Smooth parameterized trajectory ρ_τ = ρ(θ(τ)) on the quantum statistical manifold M_state.'
          ],
          statement:
            'Araki–Umegaki relative entropy S_Araki(ρ_τ ‖ ω_ξ) decreases monotonically along passive CPTP evolution with quadratic BKM Fisher velocity dS_Araki/dτ = −g_ij^BKM θ̇^i θ̇^j ≤ 0, forcing any ΔI-bit memory reset against a T-bath to dissipate ΔQ ≥ k_B T ln 2 · ΔI forward in time.',
          proofSteps: [
            'Step 1 (Data-Processing Contraction): By the Petz–Uhlmann monotonicity theorem for CPTP maps, S_Araki(Φ_{δτ}(ρ_τ) ‖ Φ_{δτ}(ω_ξ)) ≤ S_Araki(ρ_τ ‖ ω_ξ). Since Φ_{δτ}(ω_ξ) = ω_ξ is stationary, ΔS_Araki ≤ 0 for all δτ > 0.',
            'Step 2 (Exact BKM Quadratic Form): Expanding S(ρ + δρ ‖ ω_ξ) = Tr[ρ(ln ρ − ln ω_ξ)] to second order using the Fréchet derivative of the logarithm D ln_ω[A] = ∫_0^∞ (ω + s)⁻¹ A (ω + s)⁻¹ ds defines the positive-semidefinite Bogoliubov–Kubo–Mori metric g_ij^BKM = Tr[∂_i ρ · D ln_ρ(∂_j ρ)] ≥ 0, giving dS_Araki/dτ = −g_ij^BKM θ̇^i θ̇^j ≤ 0 (Spohn entropy production theorem).',
            'Step 3 (Landauer Heat Conversion & Portal Chronology): Resetting ΔI bits compresses local subsystem entropy by ΔS_mem = −k_B ln 2 · ΔI while Φ_{δτ} preserves total micro-unitarity with bath ω_ξ, forcing bath heat dump ΔQ_env = −T ΔS_mem ≥ k_B T ln 2 · ΔI (= 2.871×10⁻²¹ J/bit at 300 K). Combined with Theorem H13.8 external sync Δt_ext ≥ d_ext/c, causal timestamps strictly increase along every Class P worldline. Q.E.D.'
          ],
          provenance: 'Spohn 1978 [Ref 31]; Landauer 1961 [Ref 16]; Petz–Tóth 2011 [Ref 11]; Morozova–Chentsov [Ref 27]; H11 §6 [Ref 1].',
          plainEnglishSummary: 'Mathematically, open-system friction shrinks information contrast downward via a positive metric while guaranteeing every erased bit radiates forward heat.'
        }
      }
    ]
  },
  {
    number: 12,
    id: 'ch-12',
    title: 'Life, Mind, Code-First Ontology & Falsification Roadmap (P14–P18)',
    principleQuote:
      'Life and consciousness aren’t passive glitches—they are self-updating subroutines that actively organize data to keep from crashing into thermal noise; physicists have been hunting for the "hardware" of the universe backward—matter and spacetime don’t run the code; the informational code compiles matter and spacetime.',
    epistemicCategory: 'CATEGORY C — CONJECTURAL',
    provenance: 'Primary Ledger C12, C16 · Friston 2010 [Ref 15], Jacobson 2016 [Ref 3], Lee et al. 2020 [Ref 12], Klimchitskaya–Sedmik [Ref 32], H11 §10 [Ref 1], Appendices A & G',
    leadSummary:
      'Brings Principles 11 & 12 together into autopoietic RES=RAG life dynamics, code-first entanglement gravity, and five quantitative experimental falsification protocols P14–P18.',
    plainEnglishBridge:
      'Living cells and active minds do not defy physics; they feed on clean free energy (sunlight, food) to constantly repair their internal predictive models and resist turning into warm thermal static. Stepping back to the big picture, space, time, and matter are not heavy external hardware running equations—they are the emergent compiled outputs of deeper quantum-informational relationships, and Protocols P14–P18 show five ways real labs can test our claims.',
    everydayAnalogy:
      'Like a skilled bicyclist pedaling uphill in a steady headwind, a living organism maintains balance only because its internal sensor-feedback subroutines continuously burn energy to correct wobbles before thermal noise knocks it flat.',
    keyTakeaways: [
      'Living systems operate as Markov-blanket RES=RAG loops burning ΔF_mod above Landauer cost to hold local order.',
      'Code-first ontology reverses textbook intuition: entanglement equilibrium compiles G_μν and T_μν downward.',
      'Protocols P14–P18 commit H13 to sharp experimental pass/fail lines across 2026–2034.'
    ],
    subsections: [
      {
        number: '12.1',
        title: 'Life and Consciousness as Anti-Noise Self-Updating Subroutines',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'If append-only thermal dissipation continuously nudges inert matter toward featureless KMS equilibrium, what allows a living bacterium or conscious brain to hold delicate organized structure intact for years? In IGRT’s RES=RAG resonance loop, living organisms maintain physical Markov blankets and actively harvest free-energy gradients ΔF_mod above the Landauer floor to run internal error correction—lowering internal entropy (ΔS_self < 0) while exporting thermal heat so total cosmic entropy climbs cleanly (ΔS_self + ΔS_env ≥ 0).',
          'As stated explicitly in our Scope boundaries, this accounts physically for how living and cognitive systems organize information against thermal noise; the philosophical question of subjective first-person qualia remains openly unreduced.'
        ],
        equation: {
          label: '(12.1)',
          category: 'CATEGORY C — CONJECTURAL',
          unicodeHtml:
            'Δ<i>F</i><sub>mod</sub> ≥ <i>k</i><sub>B</sub><i>T</i> ln 2 · Δ<i>I</i><sub>write</sub> + Δ<i>W</i><sub>coh</sub>, &nbsp;&nbsp;&nbsp; (<i>g</i><sub>μν</sub>, <i>T</i><sub>μν</sub>) ← Compile[PU(ℋ), <i>K</i><sub>ξ</sub>]',
          plainText: 'Delta F_mod >= k_B T ln 2 * Delta I_write + Delta W_coh,   (g_mu_nu, T_mu_nu) <- Compile[PU(H), K_xi]',
          caption: 'Autopoietic free-energy error-correction inequality and downward code-first spacetime compilation.',
          plainEnglishMeaning: 'Life must spend energy above Landauer’s heat floor to update its memory; meanwhile, quantum entanglement rules compile geometry and matter together.',
          unitsCheck: '[ΔF_mod] = J;  [k_B T ln 2 · ΔI] = J'
        }
      },
      {
        number: '12.2',
        title: 'Why Physicists Hunted Hardware Backward: Code Compiles Matter & Spacetime',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'For centuries physics assumed tiny solid particles moving inside an eternal wooden stage of 3D space were nature’s fundamental hardware, while mathematics and information merely tracked them afterward. IGRT-2026-H13 reverses that explanatory arrow rigorously: split-algebra quantum entanglement and KMS modular structure (PU(H), K_ξ) compile macroscopic spacetime G_μν and effective stress T_μν + I_μν downward at infrared equilibrium.',
          'Crucially, reversing an explanatory pyramid means nothing without experimental jeopardy. Table 12.1 locks down Protocols P14–P18—including systematic error controls for Casimir force backgrounds, solid-Earth tides, binary spin degeneracies, and magnetar bursts—alongside Table 12.2’s Claim–Provenance–Proof Ledger, Table 12.3’s experimental Proof Apparatus & Priority Recommendations (Devices D13-A–D13-F, TRL readiness, blinded residual controls, and Bayes factor Δ ln Z ≥ 5.0 thresholds), and Section 13’s Plain-Language FAQ.'
        ],
        theoremBox: {
          number: 'Theorem H13.12',
          title: 'Autopoietic Markov-Blanket Free-Energy Bound & Code-First Compilation Closure',
          category: 'CATEGORY C — CONJECTURAL',
          hypotheses: [
            'Open tripartition H_total = H_int ⊗ H_blanket ⊗ H_ext supporting active sensory-motor update rate ΔI_write at ambient bath temperature T.',
            'Small local causal diamonds D_ℓ obeying fixed-volume entanglement equilibrium δS_total|_{V} = 0 on split algebra N(O).'
          ],
          statement:
            'Self-maintaining biological or neural loops satisfy ΔF_mod ≥ k_B T ln 2 · ΔI_write + ΔW_coh while exporting ΔS_self + ΔS_env ≥ 0; concurrently, downward entanglement equilibrium δS_EE + δ⟨K_ξ⟩ = 0 uniquely compiles macroscopic Einstein–Horndeski–IGRT dynamics G_μν^(4) = 8πG(T_μν + I_μν) + E_μν^(5).',
          proofSteps: [
            'Step 1 (Markov-Blanket Error-Correction Floor): By Theorem H13.11, stabilizing non-equilibrium internal state ρ_int against thermal diffusion at mutual-information write rate ΔI_write across Markov blanket H_blanket requires minimum work ΔF_mod ≥ T ΔS_reset + ΔW_coh = k_B T ln 2 · ΔI_write + ΔW_coh, guaranteeing ΔS_int + ΔS_ext = ΔS_irr ≥ 0 globally.',
            'Step 2 (Downward Jacobson–CHM Compilation): Across every local Rindler causal diamond D_ℓ (Theorem H13.2), stationary entanglement entropy variation δS_geom + δS_matter = (δA_∂D / 4Gℏ) − δ⟨K_ξ⟩/k_B = 0 fixes the traceless Ricci curvature R_μν − (1/4)R g_μν = 8πG[T_μν + I_μν − (1/4)(T + I)g_μν].',
            'Step 3 (Bianchi Closure & Empirical Gateways): Applying ∇^μ G_μν ≡ 0 along the Type Ia IR fixed point (Theorem H13.5, G_{4,X} = G_5 = 0) yields covariant conservation ∇^μ(T_μν^SM + T_μν^ψ + I_μν^info − E_μν^(5)/8πG) = 0, uniting all 12 principles under falsifiable Protocols P14–P18. Q.E.D.'
          ],
          provenance: 'Friston 2010 [Ref 15]; Jacobson 2016 [Ref 3]; Landauer 1961 [Ref 16]; Shiromizu–Maeda–Sasaki [Ref 20]; H11 §10 [Ref 1].',
          plainEnglishSummary: 'Life stays organized legally by exporting Landauer waste heat, while entanglement balance compiles gravity and matter downward—all anchored to five lab tests.'
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
  lines.push(`**Monograph ID:** ${H13_META.monographId} (${H13_META.edition})`);
  lines.push(`**Authors:** ${H13_META.authors}`);
  lines.push(`**Date:** ${H13_META.date}`);
  lines.push('');
  lines.push('## Author Roster & Affiliations');
  for (const a of H13_META.authorRoster) {
    const idTag = a.orcidUrl ? `ORCID: ${a.orcidUrl}` : a.email ? `Email: ${a.email}` : '';
    lines.push(`- **${a.name}** — ${a.affiliation}${idTag ? ` (${idTag})` : ''}`);
  }
  lines.push('');
  lines.push('## Reader Navigation Guide');
  for (const rg of H13_READING_GUIDE) {
    lines.push(`- **${rg.audience}:** ${rg.howToRead}`);
  }
  lines.push('');
  lines.push('## Abstract');
  for (const p of H13_ABSTRACT_PARAGRAPHS) {
    lines.push(p);
    lines.push('');
  }
  lines.push('## Epistemic Clarity & Metric Convention');
  lines.push(H13_FOUNDATIONAL_NOTE);
  lines.push('');
  lines.push(H13_METRIC_SIGNATURE_BOX);
  lines.push('');
  lines.push('## Master Equations');
  for (const eq of H13_MASTER_EQUATIONS) {
    lines.push(`- **${eq.label} [${eq.category}]:** \`${eq.plainText}\` — ${eq.caption}`);
    if (eq.plainEnglishMeaning) lines.push(`  - *In Plain English:* ${eq.plainEnglishMeaning}`);
    if (eq.unitsCheck) lines.push(`  - *Units Check:* ${eq.unitsCheck}`);
  }
  lines.push('');
  lines.push(`## ${H13_SCOPE_AND_NON_CLAIMS.title}`);
  for (const pt of H13_SCOPE_AND_NON_CLAIMS.points) {
    lines.push(`- ${pt}`);
  }
  lines.push('');
  lines.push('## Table 0.1 · Twelve Principles of Reality as Running Code');
  for (const pr of H13_TWELVE_PRINCIPLES_MATRIX) {
    lines.push(`### ${pr.id}. ${pr.shortTitle} [${pr.epistemicCategory}]`);
    lines.push(`> "${pr.userStatement}"`);
    lines.push(`- **IGRT Formal Mapping:** ${pr.igrtFormalMapping}`);
    lines.push(`- **Formula:** \`${pr.governingFormula}\``);
    lines.push(`- **Quantitative Anchor:** ${pr.quantitativeAnchor}`);
    lines.push('');
  }
  lines.push('## Table 0.2 · Plain-English Symbol & Units Decoder');
  for (const sy of H13_SYMBOL_DECODER) {
    lines.push(`- **\`${sy.symbol}\` (${sy.spokenName}, ${sy.units}):** ${sy.plainEnglishMeaning} (*Role:* ${sy.formalMathematicalRole})`);
  }
  lines.push('');
  lines.push('## Table 0.3 · SI Units & Dimensional Consistency Audit');
  for (const da of H13_DIMENSIONAL_AUDIT) {
    lines.push(`- **${da.equationLabel} (\`${da.formulaSummary}\`):** LHS ${da.lhsDimensions} = RHS ${da.rhsDimensions} — ${da.physicalCheck}`);
  }
  lines.push('');
  for (const ch of H13_CHAPTERS) {
    lines.push(`## Chapter ${ch.number}. ${ch.title}`);
    lines.push(`*Epistemic Tier: ${ch.epistemicCategory}*`);
    lines.push(`*Provenance: ${ch.provenance}*`);
    lines.push(`> "${ch.principleQuote}"`);
    lines.push('');
    lines.push(`**In Plain English:** ${ch.plainEnglishBridge}`);
    lines.push('');
    lines.push(`**Everyday Analogy:** ${ch.everydayAnalogy}`);
    lines.push('');
    lines.push(`*Technical Lead Summary:* ${ch.leadSummary}`);
    lines.push('');
    for (const sub of ch.subsections) {
      lines.push(`### ${sub.number} ${sub.title} [${sub.category}]`);
      for (const p of sub.paragraphs) {
        lines.push(p);
        lines.push('');
      }
      if (sub.equation) {
        lines.push(`**Equation ${sub.equation.label}:** \`${sub.equation.plainText}\``);
        lines.push(`*${sub.equation.caption}*`);
        if (sub.equation.plainEnglishMeaning) lines.push(`*In Plain English:* ${sub.equation.plainEnglishMeaning}`);
        if (sub.equation.unitsCheck) lines.push(`*Units:* ${sub.equation.unitsCheck}`);
        lines.push('');
      }
      if (sub.theoremBox) {
        lines.push(`**${sub.theoremBox.number} (${sub.theoremBox.title}):** [${sub.theoremBox.category}]`);
        for (const h of sub.theoremBox.hypotheses) lines.push(`- *Hypothesis:* ${h}`);
        lines.push('');
        lines.push(sub.theoremBox.statement);
        lines.push('');
        lines.push('**Proof:**');
        sub.theoremBox.proofSteps.forEach((step, idx) => lines.push(`${idx + 1}. ${step}`));
        lines.push(`*Provenance:* ${sub.theoremBox.provenance}`);
        if (sub.theoremBox.plainEnglishSummary) lines.push(`*Plain-English Summary:* ${sub.theoremBox.plainEnglishSummary}`);
        lines.push('');
      }
      if (sub.workedExample) {
        lines.push(`**${sub.workedExample.title}:** ${sub.workedExample.setup}`);
        for (const s of sub.workedExample.steps) lines.push(`1. ${s}`);
        lines.push(`**Result ${sub.workedExample.resultEquation.label}:** \`${sub.workedExample.resultEquation.plainText}\``);
        lines.push(`*Takeaway:* ${sub.workedExample.takeaway}`);
        lines.push('');
      }
    }
    lines.push('**Key Takeaways:**');
    for (const kt of ch.keyTakeaways) lines.push(`- ${kt}`);
    lines.push('');
  }
  lines.push('## Black Holes vs. Portals & White-Hole Bounce Tables');
  for (const row of H13_BLACK_HOLE_TO_PORTAL_TAXONOMY) {
    lines.push(`- **${row.nodeClass}:** ${row.isPortalOrWhiteHole} | ${row.foldingOrBounceMetric} [${row.category}]`);
  }
  lines.push('');
  for (const wb of H13_WHITE_HOLE_BOUNCE_TABLE) {
    lines.push(`- **${wb.progenitorRegime}** (${wb.massScale}): Interior ${wb.interiorBounceTime}, Exterior ${wb.exteriorBounceDelay} — ${wb.astrophysicalObservable}`);
  }
  lines.push('');
  lines.push('## Falsification Protocols P14–P18');
  for (const p of H13_PROTOCOLS_P14_TO_P18) {
    lines.push(`- **${p.id} · ${p.name} [${p.category}]:** ${p.quantitativeThreshold} | Falsifier: ${p.falsificationCriterion} | Systematics: ${p.systematicsControl}`);
  }
  lines.push('');
  lines.push('### Falsification & Confirmation Checklists');
  for (const f of H13_FALSIFICATION_CHECKLIST) lines.push(`- [Falsify] ${f}`);
  for (const c of H13_CONFIRMATION_CHECKLIST) lines.push(`- [Confirm] ${c}`);
  lines.push('');
  lines.push('## Table 12.2 · Epistemic Claim–Provenance–Proof Ledger');
  for (const row of H13_EPISTEMIC_LEDGER) {
    lines.push(`- **${row.claimId} — ${row.claim}** [${row.category}]: *Proof:* ${row.mathematicalSupport} | *Primary Literature:* ${row.primaryProvenance} | *Verification:* ${row.computationalCheck} *(Limit: ${row.explicitLimitOrNonClaim})*`);
  }
  lines.push('');
  lines.push('## Table 12.3 · Proof Apparatus, Readiness Levels (TRL) & Priority Recommendations');
  for (const dev of H13_PROOF_DEVICES_AND_RECOMMENDATIONS) {
    lines.push(`- **${dev.deviceId} — ${dev.deviceName}** (${dev.trl}; ${dev.linkedPlateOrFigure}; ${dev.linkedProtocol}): *Tests:* ${dev.provesOrTests} | *Engineering Recommendation:* ${dev.engineeringRecommendation} | *Statistical & Open-Science Gate:* ${dev.statisticalAndOpenScienceGate}`);
  }
  lines.push('');
  lines.push('## List of Archival Plates & Vector Figures (26 Exhibits)');
  for (const pl of H13_ARCHIVAL_PLATES) {
    lines.push(`- **${pl.figureNumber}** (Ch. ${pl.anchorChapter}, ${pl.category}): ${pl.title} — ${pl.description}`);
  }
  for (const fg of H13_FIGURES) {
    lines.push(`- **${fg.figureNumber}** (Ch. ${fg.anchorChapter}, ${fg.category}): ${fg.title} — ${fg.caption}`);
  }
  lines.push('');
  lines.push('## Common Questions & Misconceptions Clarified');
  for (const faq of H13_LAYMAN_FAQ) {
    lines.push(`### ${faq.id}: ${faq.question} [${faq.category}]`);
    lines.push(`**Short Answer:** ${faq.shortAnswer}`);
    lines.push('');
    lines.push(faq.detailedExplanation);
    lines.push('');
  }
  lines.push('## Consolidated Appendices (A–J)');
  for (const app of H13_APPENDICES) {
    lines.push(`### Appendix ${app.letter}: ${app.title} [${app.category}]`);
    lines.push(`*${app.summary}*`);
    for (const eq of app.equations) {
      lines.push(`**Equation ${eq.label}:** \`${eq.plainText}\` — ${eq.caption}`);
    }
    for (const p of app.bodyParagraphs) {
      lines.push(p);
      lines.push('');
    }
    if (app.letter === 'G') {
      lines.push('#### Table G.1 · Unified 5D+4D Action Sectors & Field Equations');
      for (const row of H13_ACTION_FIELD_TABLE) {
        lines.push(`- **${row.sector} [${row.category}]:** \`${row.lagrangianTerm}\` ⇒ \`${row.eulerLagrangeEquation}\` (*Constraint:* ${row.symmetryOrConstraint})`);
      }
      lines.push('');
    }
    if (app.letter === 'H') {
      lines.push('#### Table H.1 · Multi-Experiment Kaluza–Klein Extra-Dimension Bounds');
      for (const row of H13_KK_CONSTRAINTS_TABLE) {
        lines.push(`- **${row.experimentOrDomain}** (${row.scaleProbed}): ${row.observationalBound} | *H13 Match:* ${row.h13ParameterMatch} [${row.status}]`);
      }
      lines.push('');
    }
    if (app.letter === 'I') {
      lines.push('#### Table I.1 · Five-Step Non-AdS GJW Traversable Portal Proof');
      for (const st of H13_GJW_PROOF_STEPS) {
        lines.push(`- **${st.stepNumber} — ${st.stageTitle}:** ${st.h13NonAdsProofMechanism} (*Key Identity:* \`${st.keyInequalityOrIdentity}\`)`);
      }
      lines.push('');
    }
    if (app.letter === 'J') {
      lines.push('#### Table J.1 · Reproducible RK4 White-Hole Bounce Benchmarks');
      for (const b of H13_WH_PIPELINE_SPEC) {
        lines.push(`- **${b.benchmarkId}** (${b.massGrams}): R_bounce = ${b.bounceRadiusM}, d²R/dτ² = ${b.bounceAccelMs2}, τ_int = ${b.interiorProperSec}, Delay = ${b.exteriorDelayBranch} — ${b.observableOrRk4Check}`);
      }
      lines.push('');
    }
  }
  lines.push('## References');
  for (const r of H13_REFERENCES) {
    lines.push(`${r.id}. ${r.citation}`);
  }
  return lines.join('\n');
}
