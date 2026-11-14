/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Harmonized Research Monograph Dataset (Unicode/HTML Only — Zero LaTeX):
 * "Information-Geometric Resonant Time (IGRT): A Diffeomorphism-Invariant
 *  Principal Fiber Bundle Framework for the Canonical Problem of Time"
 *
 * Strictly adheres to mathematical precision, epistemic calibration, and editorial clarity:
 * - Zero LaTeX syntax anywhere ($...$, \frac, \begin forbidden)
 * - Complete internal dimensional, numerical, EFT, and metrological closures
 * - Reproducible against scripts/verify-igrt-monograph.mjs
 */

import type { EpistemicStatus } from './harmonizedPaperApparatus';

export interface PaperEquation {
  /** Pure readable Unicode + HTML <sup>/<sub> representation (zero LaTeX) */
  unicodeHtml: string;
  /** Plain Unicode string for canvas/PDF/Markdown fallback */
  plainText: string;
  label: string;
  caption: string;
  status: EpistemicStatus;
}

export interface PaperTheoremBox {
  number: string; // e.g., 'Established Result 2.1' or 'Theorem 3.1'
  title: string;
  status: EpistemicStatus;
  hypotheses: string[];
  statement: string;
}

export interface PaperWorkedExample {
  title: string;
  setup: string;
  steps: string[];
  resultEquation: PaperEquation;
  takeaway: string;
}

export interface PaperSubsection {
  number: string;
  anchorId: string;
  title: string;
  epistemicStatus: EpistemicStatus;
  paragraphs: string[];
  theoremBox?: PaperTheoremBox;
  equation?: PaperEquation;
  workedExample?: PaperWorkedExample;
  bulletPoints?: { label: string; text: string }[];
}

export interface PaperChapter {
  number: number;
  anchorId: string;
  runningLabel: string;
  title: string;
  leadSummary: string;
  subsections: PaperSubsection[];
}

export interface PaperAppendix {
  letter: string;
  anchorId: string;
  title: string;
  tag: string;
  status: EpistemicStatus;
  theoremStatement: string;
  proofParagraphs: string[];
  equations: { unicodeHtml: string; plainText: string; label?: string }[];
}

export interface PaperReference {
  id: number;
  topicGroup: string;
  authors: string;
  year: string;
  title: string;
  venue: string;
  identifier: string;
}

export interface AuditedProtocol {
  id: number;
  name: string;
  targetPhenomenon: string;
  facility: string;
  epistemicStatus: EpistemicStatus;
  formulaHtml: string;
  formulaPlain: string;
  predictedSignal: string;
  baseline: string;
  noiseAndAuditNote: string;
  falsificationCriterion: string;
}

export const PAPER_META = {
  publicationStatus: 'THEORETICAL & MATHEMATICAL PHYSICS RESEARCH MONOGRAPH',
  journalHeader: 'Extended Gravity & Quantum Information Metrology Series',
  edition: 'Harmonized Research Edition (H10) · November 2026',
  eprint: 'Monograph Identifier: IGRT-2026-H10',
  doi: 'Archival Synthesis Edition · Complete Unified Derivations',
  title:
    'Information-Geometric Resonant Time (IGRT): A Diffeomorphism-Invariant Principal Fiber Bundle Framework for the Canonical Problem of Time',
  shortTitle: 'IGRT: Principal Fiber Bundle Approach to the Problem of Time',
  authors: [
    {
      name: 'Marlon D. Bulaqueña',
      orcid: '0009-0007-3966-0494',
      affiliation: 'Department of Theoretical Physics, Extended Gravity Research Program'
    },
    {
      name: 'Jean-Charles Tassan',
      orcid: '0009-0000-8566-0486',
      affiliation: 'Laboratory of Resonant Epistemology & Open Quantum Systems'
    },
    {
      name: 'Wilson John Sterking Lauret',
      orcid: '0009-0004-7889-6641',
      affiliation: 'Extended Gravity & Quantum Information Metrology Consortium'
    }
  ],
  physh: 'Quantum Gravity; Foundations of Quantum Mechanics; Quantum Information; Modified Gravity; Cosmological Models',
  msc2020: '83C45, 83D05, 53B12, 46L60, 58B34',
  keywords: [
    'Problem of Time',
    'Principal PU(H) Bundle',
    'SLD Fisher–Rao Metric',
    'Detailed-Balance BKM Flow',
    'Split KMS Modular Flow',
    'Type Ia Horndeski Gravity',
    'Klein–Gordon Thawing Dark Energy',
    'Hayward–Vaidya Black Holes & QES',
    'Multi-Clock & PTA Metrology'
  ]
};

export const MASTER_EQUATION_ABSTRACT: PaperEquation = {
  label: '(0.1)',
  status: 'Ansatz',
  unicodeHtml:
    '<i>d</i>τ = (1/<i>c</i>) √(−<i>g</i><sub>μν</sub> <i>ẋ</i><sup>μ</sup> <i>ẋ</i><sup>ν</sup>) <i>d</i>λ &nbsp;=&nbsp; [ ℏ / (<i>E</i><sub>mod</sub> · σ<sub>1</sub>(<i>K</i><sub>ξ</sub>)) ] √(<i>g</i><sub><i>ij</i></sub><sup>QFI</sup> <i>θ̇</i><sup><i>i</i></sup> <i>θ̇</i><sup><i>j</i></sup>) <i>d</i>λ<br/>Δτ = ∫<sub>γ</sub> <i>d</i>τ = lim<sub><i>N</i>→∞</sub> τ<sub>step</sub> ∑<sub><i>k</i>=1</sub><sup><i>N</i></sup> ‖RAG<sub><i>k</i></sub> − RES<sub><i>k</i></sub>‖<sub>F</sub>',
  plainText:
    'dτ = (1/c)√(−g_μν ẋ^μ ẋ^ν) dλ = [ℏ / (E_mod · σ_1(K_ξ))] √(g_ij^QFI θ̇^i θ̇^j) dλ;   Δτ = ∫_γ dτ = lim_{N→∞} τ_step ∑_{k=1}^N ‖RAG_k − RES_k‖_F',
  caption:
    'Extended Jacobi–Finsler synchronization ansatz calibrated by α_mod = ℏ/(E_mod·σ_1(K_ξ)) per single resolved mode and O(N⁻²) Uhlmann–Frobenius continuum limit (§4.1), with τ_step = 2ℏ/(E_mod σ_1(K_ξ)).'
};

export const PAPER_BIBTEX = `@article{bulaquena_tassan_lauret_2026_igrt,
  author       = {Bulaque{\\~n}a, Marlon D. and Tassan, Jean-Charles and Lauret, Wilson John Sterking},
  title        = {Information-Geometric Resonant Time (IGRT): A Diffeomorphism-Invariant Principal Fiber Bundle Framework for the Canonical Problem of Time},
  year         = {2026},
  note         = {Harmonized Research Monograph IGRT-2026-H10, Extended Gravity & Quantum Information Metrology Series}
}`;

export const PAPER_APA =
  'Bulaqueña, M. D., Tassan, J.-C., & Lauret, W. J. S. (2026). Information-Geometric Resonant Time (IGRT): A Diffeomorphism-Invariant Principal Fiber Bundle Framework for the Canonical Problem of Time. Extended Gravity & Quantum Information Metrology Series, Monograph IGRT-2026-H10.';

export const PAPER_RIS = `TY  - GEN
AU  - Bulaqueña, Marlon D.
AU  - Tassan, Jean-Charles
AU  - Lauret, Wilson John Sterking
TI  - Information-Geometric Resonant Time (IGRT): A Diffeomorphism-Invariant Principal Fiber Bundle Framework for the Canonical Problem of Time
PY  - 2026
T2  - Extended Gravity & Quantum Information Metrology Series (Monograph IGRT-2026-H10)
KW  - Problem of Time; Principal PU(H) Bundle; Fisher-Rao Metric; BKM Flow; Tomita-Takesaki Modular Flow; Horndeski Gravity
ER  - `;

export const PAPER_POSTULATES: {
  code: string;
  name: string;
  status: EpistemicStatus;
  statement: string;
}[] = [
  {
    code: 'Postulate I',
    name: 'Lorentzian Base Manifold & Physical-Domain Global Hyperbolicity',
    status: 'Axiom',
    statement:
      'Macroscopic spacetime is a smooth 4-dimensional pseudo-Riemannian manifold (M, g_μν) of Lorentzian signature (−,+,+,+), globally hyperbolic on domains of outer communication and across physical collapsing/evaporating black-hole regions truncated dynamically prior to analytical inner Cauchy-horizon extension (§6.3).'
  },
  {
    code: 'Postulate II',
    name: 'Principal PU(H)-Bundle (δ=0) & Split Type I Associated State Bundle',
    status: 'Axiom',
    statement:
      'Quantum frame transformations form a topologically trivial principal bundle P(M, PU(H)) (δ(P) = 0 ∈ H³(M, ℤ)) over separable clock-matter Hilbert space H = L²(S¹, dμ) ⊗ H_matter, upon which Diff⁺(M) acts via base-covering automorphisms. Physical density operators live on a split-included Type I detector factor N ⊂ A(O_ext), forming associated bundle E_stat = P ×_{PU(H)} S(N) with SLD Fisher metric g_ij^QFI.'
  },
  {
    code: 'Postulate III',
    name: 'Jacobi–Finsler Worldline–Fiber Synchronization Ansatz',
    status: 'Ansatz',
    statement:
      'Along rank-preserving synchronized clock trajectories, worldline proper time and statistical distinguishability obey an extended Jacobi–Finsler null ansatz with constitutive modular coupling α_mod = ℏ / (E_mod · σ_1(K_ξ)), normalized per single resolved mode (M = 1), where E_mod = ℏω_0 for inertial clocks (a = 0) and 2π k_B T_U at Unruh horizons.'
  },
  {
    code: 'Postulate IV',
    name: '5-Mode A_F^{H10} Multiplet, Z_2-Protected φ_Ch & Planck-Normalized Araki Ansatz',
    status: 'Ansatz',
    statement:
      'Polar decomposition Z(x) = ψ(x) exp(i φ_DE/f_φ) isolates strictly non-negative Araki modulus ψ(x) ≥ 0 (ψ_vac = 0, Schwinger–Keldysh 1PI Galileon match & CHM-motivated κ_ψ = ℏc ℓ_Pl/(12π) = 2.173 × 10⁻²¹ GeV⁻¹) from thawing PNGB φ_DE; together with inner-fluctuation holonomy φ_osc, Higgs portal Φ_portal, and ℤ_2-protected Chameleon block ℂ_Ch, all five scalars embed into extended Krein–Connes algebra A_F^{H10} = ℂ ⊕ ℍ ⊕ M_3(ℂ) ⊕ ℂ_hol ⊕ ℂ_Ch (loop mixing |ε_{ψ,Ch}| = 4.42 × 10⁻¹⁶), while phenomenological β_Ch remains testable by CANNEX P5.'
  },
  {
    code: 'Postulate V',
    name: 'Luminal Type Ia Horndeski Action, TOV Stars & Explicit L_UV (ξ_0 = 2⁻¹/⁴)',
    status: 'Axiom',
    statement:
      'Infrared gravity obeys luminal Type Ia Horndeski Cubic Galileon dynamics (G_{4,X} = 0, G_5 = 0, c_GW = c, Λ_3 ≈ 1.76 × 10⁻¹³ eV, TOV NS M_max = 2.35 M_⊙, Λ_{1.4} = 339 < 580) augmented in the UV by covariant Chamseddine–Mukhanov bounce sector L_UV whose Kretschmann ceiling K_max = 48/ℓ_Pl⁴ derives Hayward core ratio ξ_0 = 2⁻¹/⁴.'
  },
  {
    code: 'Postulate VI',
    name: 'Uhlmann–Frobenius Continuum Limit, Split Bound & Smeared Krein Limit',
    status: 'Derived',
    statement:
      'Discrete Uhlmann-purified steps ‖RAG_k − RES_k‖_F (converging at O(N⁻²)) form a global unitary transfer matrix |H(e^{iω})| = 1 cleanly compatible with input K_echo = |R_eff| ≈ 0.18; Doplicher–Longo split uncertainty is bounded at 9.72×10⁻¹⁰² and smeared poset Krein operator D_{C, ℓ_smear} converges on C_c^∞(M) to γ^μ(∇_μ + i A_μ).'
  },
  {
    code: 'Postulate VII',
    name: 'Detailed-Balance BKM Entropy Gradient Flow & General Spohn Bound',
    status: 'Established',
    statement:
      'Strictly for KMS detailed-balance quantum Markov semigroups (Carlen–Maas [99], Wirth–Zhang [100]), relative-entropy gradient flow obeys (d/dτ) S_Araki(ρ(τ) ‖ ρ_eq) = −g̃_ij^BKM θ̇^i θ̇^j ≤ 0 with relaxation-weighted BKM metric g̃_ij^BKM = τ_rel g_ij^BKM (τ_rel = Γ_KMS⁻¹); generic non-detailed-balance CPTP channels satisfy Spohn’s monotonic inequality (d/dτ) S_Araki ≤ 0 [93].'
  }
];

export const PAPER_CHAPTERS: PaperChapter[] = [
  {
    number: 1,
    anchorId: 'chapter-1',
    runningLabel: 'Chapter 1',
    title: 'Introduction: Problem of Time, Epistemic Scope, HL-LHC Tests & Metrology',
    leadSummary:
      'Traces the Problem of Time from Newtonian absoluteness to the ADM Wheeler–DeWitt constraint (derived directly from Eq. 3.1), states IGRT’s 4D bundle scope and five-scalar hierarchy candidly, and previews LHC collider and precision metrological protocols.',
    subsections: [
      {
        number: '1.1',
        anchorId: 'sec-1-1',
        title: 'From Newtonian Absolute Time to ADM Derivation of the Wheeler–DeWitt Constraint',
        epistemicStatus: 'Derived',
        paragraphs: [
          'Understanding why time creates the deepest conceptual fracture in theoretical physics requires tracing how successive revolutions stripped time of its classical stage. In Isaac Newton’s Principia (1687), absolute time flowed equably independent of matter; Carnot, Clausius, and Boltzmann later grounded macroscopic irreversibility in statistical entropy growth. Albert Einstein shattered Newton’s rigid stage twice: Special Relativity (1905) fused space and time into Minkowski spacetime, and General Relativity (1915) elevated geometry into a dynamic four-dimensional Lorentzian manifold (M, g_μν) of signature (−,+,+,+) where physical clock duration dτ = (1/c)√(−g_μν ẋ^μ ẋ^ν) dλ is worldline arc length.',
          'Meanwhile, Quantum Mechanics and QFT retained Newton’s external parameter t inside iℏ ∂_t |Ψ⟩ = Ĥ |Ψ⟩. Performing an explicit 3+1 Arnowitt–Deser–Misner (ADM) Legendre decomposition of the full IGRT covariant action S_IGRT (Eq. 3.1)—introducing lapse N, shift N^a, spatial 3-metric q_ab with extrinsic curvature K_ab = (1/(2N))(q̇_ab − D_a N_b − D_b N_a), matter fields, bundle connection A_μ, and conjugate momenta (π^{ab}, π_ψ, π_φ, π_θ) = (δL/δq̇_ab, δL/δψ̇, δL/δφ̇, δL/δθ̇)—demonstrates that varying S_IGRT with respect to the non-dynamical Lagrange multiplier N derives—rather than merely asserts—the extended Wheeler–DeWitt super-Hamiltonian constraint Ĥ_total Ψ = 0 (Eq. 1.1) [4, 5].',
          'Because physical diffeomorphism-invariant states exhibit zero change under coordinate label t, external evolution vanishes—creating the Problem of Time cataloged by Kuchař [6], Isham [7], and Anderson [8], and inspiring relational frameworks including Page–Wootters [9], Connes–Rovelli thermal time [10, 11], Gambini–Pullin [12], Barbour’s shape dynamics [13], and quantum reference frames by Höhn–Smith–Lock [101]. Building upon earlier non-peer-reviewed preprints by Bulaqueña [1] (IGEG) and Tassan [2] (RES=RAG) and their preliminary synthesis [3], this monograph formulates Information-Geometric Resonant Time (IGRT) with explicit mathematical rigor and candid separation between proved results, numerical integrations, and phenomenological ansätze (Table 8.3).'
        ],
        equation: {
          label: '(1.1)',
          status: 'Derived',
          unicodeHtml:
            '<i>Ĥ</i><sub>total</sub> Ψ[<i>q</i><sub><i>ab</i></sub>, ψ, φ, θ] = ( <i>Ĥ</i><sub>grav+ψ+φ</sub> + <i>Ĥ</i><sub>matter</sub> + <i>Ĥ</i><sub>Fisher</sub> ) Ψ = 0 &nbsp; (ADM δ<i>S</i><sub>IGRT</sub> / δ<i>N</i> = 0)',
          plainText: 'Ĥ_total Ψ[q_ab, ψ, φ, θ] = (Ĥ_grav+ψ+φ + Ĥ_matter + Ĥ_Fisher) Ψ = 0  (ADM δS_IGRT/δN = 0)',
          caption:
            'Extended Wheeler–DeWitt Hamiltonian constraint derived by varying the ADM 3+1 decomposition of S_IGRT (Eq. 3.1) with respect to lapse N (§5.1).'
        }
      },
      {
        number: '1.2',
        anchorId: 'sec-1-2',
        title: '4D Bundle Architecture, Scalar-Proliferation Candor & String-Theory Contrast',
        epistemicStatus: 'Axiom',
        paragraphs: [
          'IGRT keeps macroscopic spacetime strictly 3+1 dimensional on (M, g_μν) in signature (−,+,+,+), contrasting sharply with 10D/11D String Theory compactifications (~10⁵⁰⁰ metastable flux vacua; Table 8.1). Local quantum clock states live inside an internal principal projective-unitary bundle P(M, PU(H)) with Dixmier–Douady class δ(P) = 0 and associated statistical state bundle E_stat = P ×_{PU(H)} S(N) on split Type I detector factors N ⊂ A(O_ext) whose buffer uncertainty is exponentially bounded at 9.72×10⁻¹⁰² (§2.1), adding zero extra dimensions of physical space.',
          'Extended A_F^{H10} Packaging & Spectral-Algebra Closure: In the interest of complete theoretical transparency, H10 accommodates all five scalars inside the inner fluctuations of the 5-mode extended Krein–Connes finite algebra A_F^{H10} = ℂ ⊕ ℍ ⊕ M_3(ℂ) ⊕ ℂ_hol ⊕ ℂ_Ch [49–51]: (i) Horndeski-coupled Araki modulus ψ(x) ≥ 0, (ii) shift-protected thawing PNGB dark-energy phase φ_DE (m_DE ≈ 1.94 × 10⁻³³ eV), (iii) U(1)_hol holonomy mode φ_osc (m_osc = 2.65 × 10⁻²³ eV), (iv) heavy spectral Higgs-portal Φ_portal (1.84 TeV), and (v) ℤ_2-protected IR Chameleon sector φ_Ch (M_Ch ≈ 2.4 meV), suppressing Galileon–Chameleon radiative mixing to |ε_{ψ,Ch}| = 4.42 × 10⁻¹⁶ while phenomenological β_Ch remains testable by CANNEX P5. Second, Eq. (3.1) lies purely inside luminal Horndeski gravity (G_{4,X} = 0, c_GW = c [25, 29, 77]), yielding solar |γ_PPN − 1| = 1.77 × 10⁻¹¹ at 1 AU and causal Type Ia TOV neutron stars with M_max = 2.35 M_⊙ and Λ_{1.4} = 339 < 580 (§3.4). Third, K_Hayward(0) = K_max = 48/ℓ_Pl⁴ derives ξ_0 = 2⁻¹/⁴ (M_rem = 1.092 M_Pl), while constitutive calibrations α_mod and κ_ψ remain ansätze and w_contract, m_osc, K_echo remain inputs (Table 8.3).'
        ],
        bulletPoints: [
          {
            label: 'Exact 4D Base & Split Type I Factor',
            text: 'Diff⁺(M) acts on base (M, g_μν); PU(H) acts vertically on P(M, PU(H)); split Type I buffer error ≤ 9.72×10⁻¹⁰².'
          },
          {
            label: 'Unbounded S¹ Clock Operator',
            text: 'H_Fisher = −i E_mod σ_1 (∂_s − i A_Berry) has discrete unbounded spectrum {E_mod σ_1(2πk/L) : k ∈ ℤ}; Landau–Zener k>0 decay exp(−3.14×10²⁰).'
          },
          {
            label: 'Exact Horndeski, TOV & Cosmology Numerics',
            text: 'Solar r_V = 369.8 ly, Z_ψ = 7.05×10¹⁴, Λ_local = 4.67 μeV (c_2 > 0), TOV M_max = 2.35 M_⊙ (Λ_{1.4} = 339), linear growth S_8 = 0.822–0.847.'
          },
          {
            label: 'Two-Paper Split & 3D Boltzmann Roadmap',
            text: 'Splits naturally into Foundations (Chs. 2, 4, 5) and Phenomenology (Chs. 3, 6, 7); full 3D CAMB/hi_class + Cobaya fits remain open (OP-1).'
          }
        ]
      },
      {
        number: '1.3',
        anchorId: 'sec-1-3',
        title: 'HL-LHC Higgs-Portal Provability and Four Metrological Programs',
        epistemicStatus: 'Input',
        paragraphs: [
          'In the extended spectral–scalar sector, heavy Higgs-portal scalar Φ_portal obtains mass eigenvalue m_portal = √(2λ_Φ) v_Φ ≈ 1.84 ± 0.18 TeV from assumed EFT portal inputs (λ_Φ, v_Φ). At the CERN HL-LHC (√s = 14 TeV, 3000 fb⁻¹ [91]), Higgs mixing sin θ_H ≃ λ_mix v v_Φ/m_portal² ≈ 0.04–0.08 yields σ(pp → Φ_portal → hh/VV) ≈ 0.18–0.70 fb assuming ~100% SM-like top-loop gluon fusion and tree branching into boosted b b̄ γγ / VV final states. Even if sin θ_H → 0, the Z_2-even quartic coupling λ_mix |H|² Φ_portal² induces Higgs-strahlung shift δσ_Zh > 1.5% (testable right at the HL-LHC κ_Z ≈ 1.5% 1σ coupling boundary [91]) and VBF pair production pp → jj Φ_portal Φ_portal, though complete decoupling remains possible if both sin θ_H and λ_mix are small.',
          'Four metrological tests complement the collider search across 2026–2035:',
          '1. Dual-Clock + IPTA Isotropic Monopole Search (Protocol P1, [79–84, 102, 106]): Input holonomy mass m_osc = 2.65 × 10⁻²³ eV (f_clock = 6.4 nHz, de Broglie wavelength λ_dB = 2.07 kpc, capped at f_DM ≤ 0.02 by Lyman-α/dwarf limits [102]) drives an isotropic MONOPOLE (Y_{00}) scalar timing signal at f_PTA = 2 f_clock = 12.8 nHz paired with differential transitions in dual-species ⁸⁷Sr/¹⁷¹Yb optical clocks [106], resolving 2.00 ± 0.25 (5 yr) and 2.00 ± 0.08 (15 yr) under realistic flicker (~10⁻¹⁸), random-walk drift, and PTA red noise (Appendix F).',
          '2. Macroscopic 10⁻¹⁴ kg Silica Nanosphere Interferometry (Protocol P2, [85, 103]): Because single ⁸⁷Rb atoms yield Γ ~ 1.3 × 10⁻¹⁶ s⁻¹, Protocol P2 targets 10⁻¹⁴ kg silica spheres whose exact radius is R_0 = 1.028 μm (ρ_SiO2 = 2200 kg/m³). Overlapping-sphere integration at Δx = 180 nm yields Γ_DP = 0.883 s⁻¹ and Araki benchmark rate Γ_Araki = 1.18 s⁻¹ (or 0.375 s⁻¹ at Δx = 100 nm)—providing a clean long-term test roughly four orders of magnitude beyond current macroscopic superposition records.',
          '3. Short-Range CANNEX Chameleon Force Metrology (Protocol P5, [98, 104]): Retracting the sub-floor 2.3 × 10⁻²¹ clock-redshift claim, P5 probes an independent Chameleon scalar (M_Ch ≈ 2.4 meV) predicting parallel-plate pressure excess ΔP_Ch ~ 0.1–2 nN/m² = 10⁻¹⁰–2 × 10⁻⁹ N/m² above CANNEX’s ~10⁻¹¹ N/m² sensitivity floor across 10 μm–1 cm gaps.',
          '4. Unitary All-Pass Causal Filters (§4.4): Discrete transfer matrices H(z) obeying |H(e^{iω})| = 1 preserve Parseval norm identically while splitting into partial exterior reflectivity K_echo = |R_eff| ≈ 0.18 and interior unitary storage |T_int| ≈ 0.984.'
        ]
      },
      {
        number: '1.4',
        anchorId: 'sec-1-4',
        title: 'Foundational Postulates and Monograph Organization',
        epistemicStatus: 'Axiom',
        paragraphs: [
          'Table 1.1 states the seven foundational postulates synthesizing continuum information-gravity [1] with discrete retention–generation cadence [2, 3], each explicitly tagged with its calibrated epistemic status (Axiom, Ansatz, Derived, or Established). Figure 1 displays the complete logical dependency architecture across Chapters 1–8 and Appendices A–L.'
        ]
      }
    ]
  },
  {
    number: 2,
    anchorId: 'chapter-2',
    runningLabel: 'Chapter 2',
    title: 'Differential Geometry of Principal PU(H) & Split Associated State Bundles',
    leadSummary:
      'Constructs P(M, PU(H)) over separable clock-matter Hilbert space H = L²(S¹, dμ) ⊗ H_matter and associated state bundle E_stat on split Type I factors N, derives Diff⁺(M) boost covariance of A_μ, states Petz Thm 6 uniqueness, and qualifies Šafránek boundary discontinuities and Amari dual geometry.',
    subsections: [
      {
        number: '2.1',
        anchorId: 'sec-2-1',
        title: 'Principal Bundle P(M, PU(H)), Split Factor E_stat & Diff⁺(M) Lift Covariance',
        epistemicStatus: 'Derived',
        paragraphs: [
          'Differential geometry in IGRT separates base spacetime from internal quantum-state frames. Base spacetime is a smooth 4D Lorentzian manifold (M, g_μν) of signature (−,+,+,+), globally hyperbolic on outer communication and pre-Cauchy-extension physical 1+1D Hayward–Vaidya domains (§6.3). Let separable Hilbert space H = L²(S¹, dμ) ⊗ H_matter carry local clock phase degrees of freedom on circle S¹ coupled to matter modes. Local projective unitary transformations form the vertical structure group PU(H) = U(H)/U(1) of a topologically trivial principal fiber bundle π_P : P(M, PU(H)) → M (vanishing Dixmier–Douady class δ(P) = 0 ∈ H³(M, ℤ)). Base spacetime diffeomorphisms φ ∈ Diff⁺(M) act on P via equivariant bundle automorphisms covering φ on M—preserving vertical PU(H) equivariance cleanly without conflating Diff⁺(M) with internal gauge.',
          'AQFT Trace Regularization & Quantitative Split Stability: In algebraic QFT on curved spacetime, strictly local causal-diamond algebras A(V) are hyperfinite Type III₁ von Neumann factors [32, 36] possessing neither normal trace functionals nor density matrices ρ. We therefore define physical statistical states on a canonical Doplicher–Longo split-included Type I factor N satisfying A(O_int) ⊂ N ⊂ A(O_ext) around each detector worldline (§4.2, Appendix D). Crucially, Buchholz–Wichmann nuclearity guarantees split existence via Connes’ universal standard cone; although intermediate Type I factor N is not algebraically unique, alternative buffer choices over detector width ε_det = 1 μm with UV gap δr_eff shift macroscopic SLD traces solely by exponentially suppressed term (ℓ_Pl/ε_det)² e^{−Δm δr} ≈ 9.72 × 10⁻¹⁰² ≪ 10⁻³⁰ (verified in scripts/verify-igrt-monograph.mjs). Density operators S(N) form the fiber of associated bundle E_stat = P ×_{PU(H)} S(N) → M (Figure 2).',
          'Connection, Curvature & Boost Covariance: An Ehresmann connection 1-form A_μ(x) ∈ pu(H) splits TE_stat into vertical state variations (fixed x) and horizontal covariant transport D_μ = ∇_μ + i[A_μ, ·] with bundle curvature F_μν = ∂_μ A_ν − ∂_ν A_μ + i[A_μ, A_ν] (contributing kinetic gauge trace L_fiber = −¼ Tr(F_μν F^{μν}) to Eq. 3.1). Under a local Lorentz boost Λ ∈ SO⁺(1,3) tangent to Diff⁺(M), induced pullback transforms A_μ′ = U(Λ) A_ν U(Λ)† (∂x^ν/∂x′^μ) − i (∂_μ′ U(Λ)) U(Λ)†, guaranteeing covariant horizontal invariance.'
        ]
      },
      {
        number: '2.2',
        anchorId: 'sec-2-2',
        title: 'SLD Fisher–Rao Ruler & Morozova–Chentsov–Petz Theorem 6 Uniqueness',
        epistemicStatus: 'Established',
        paragraphs: [
          'On invertible density operators S(N)_+ ⊂ E_stat, the SLD quantum Fisher–Rao metric g_ij^QFI(θ) = ½ Tr[ρ(θ)(L_i L_j + L_j L_i)] (Eq. 2.1, Helstrom–Braunstein–Caves normalization 4 g_ij^Bures [18, 19, 20]) quantifies statistical distinguishability per measurement shot via Symmetric Logarithmic Derivative L_i satisfying ∂_i ρ = ½(ρ L_i + L_i ρ).',
          'By Chentsov’s classical theorem [14] and Petz’s (1996) Theorem 6 classifying symmetric monotone Riemannian metrics [15, 16] (recorded verbatim as Established Result 2.1), every CPTP-contractive metric on finite-rank/invertible Type I state spaces is fixed by an operator monotone function f(t), with f_SLD(t) = (1 + t)/2 uniquely selecting Eq. (2.1) and establishing the Cramér–Rao bound Var(θ̂) ≥ (N F_Q)⁻¹.'
        ],
        theoremBox: {
          number: 'Established Result 2.1 (Petz 1996, Thm 6 / Morozova–Chentsov)',
          title: 'CPTP Monotonicity and Uniqueness of the Bures–SLD Metric',
          status: 'Established',
          hypotheses: [
            'H1: S(N)_+ is the manifold of strictly positive invertible density operators on split Type I factor N.',
            'H2: Metric g_ρ obeys data-processing contractivity g_{Φ(ρ)}(Φ(X), Φ(X)) ≤ g_ρ(X, X) under all CPTP channels Φ.',
            'H3: Maximal symmetric operator monotone f_SLD(t) = (1 + t)/2 is selected within Petz’s classification [15, 16].'
          ],
          statement:
            'Under H1–H3, Eq. (2.1) is the unique symmetric monotone SLD metric (4 g^Bures) on S(N)_+, enforcing the quantum Cramér–Rao variance floor Var(θ̂) ≥ (N F_Q)⁻¹ [16, 20].'
        },
        equation: {
          label: '(2.1)',
          status: 'Established',
          unicodeHtml:
            '<i>g</i><sub><i>ij</i></sub><sup>QFI</sup>(θ) = ½ Tr[ ρ(θ) (<i>L</i><sub><i>i</i></sub> <i>L</i><sub><i>j</i></sub> + <i>L</i><sub><i>j</i></sub> <i>L</i><sub><i>i</i></sub>) ] = 4 <i>g</i><sub><i>ij</i></sub><sup>Bures</sup>, &nbsp;&nbsp; ∂<sub><i>i</i></sub> ρ = ½ (ρ <i>L</i><sub><i>i</i></sub> + <i>L</i><sub><i>i</i></sub> ρ)',
          plainText:
            'g_ij^QFI(θ) = ½ Tr[ρ(θ)(L_i L_j + L_j L_i)] = 4 g_ij^Bures,   ∂_i ρ = ½(ρ L_i + L_i ρ)',
          caption:
            'Established SLD Quantum Fisher–Rao metric tensor on invertible density operators inside associated split Type I fiber E_stat [16, 20].'
        }
      },
      {
        number: '2.3',
        anchorId: 'sec-2-3',
        title: 'Boundary Continuity vs. Šafránek Discontinuity, S³ Scope & Commuting Amari Submanifolds',
        epistemicStatus: 'Derived',
        paragraphs: [
          'Approaching pure-state boundaries (det ρ → 0), the spectral QFI tensor must respect the Šafránek (2017) rank-change discontinuity theorem [92]. Strictly along rank-preserving unitary trajectories where eigenvalues remain constant (∂_i p_k = 0), Eq. (2.1) converges smoothly to 4 g_ij^FS on complex projective Hilbert space ℂP^{N−1} [17, 23], matching Mandelstam–Tamm speed bounds [21, 22]. Along rank-changing radial trajectories (∂_i p_k ≠ 0), by contrast, g_ij^QFI jumps discontinuously by the classical Fisher term ∑_k (∂_i p_k)(∂_j p_k)/p_k unless reparameterized via hyperspherical square-root coordinates √p_k.',
          'Scope Qualification of S³ Regularization & Amari Dual Flatness: Worked Example 2.1 resolves the radial 1/(1 − r²) singularity for a two-level qubit using r = sin α on S³ ⊂ ℝ⁴ (Eq. 2.3). Crucially, we note candidly that this single-angle chart smooths unitary/single-purity qubit paths, whereas generic multi-parameter rank jumps in higher-dimensional S(N) (crossing multiple zero-eigenvalue strata) retain Šafránek’s discontinuity unless restricted to constant-rank clock manifolds (∂_i p_k = 0). Similarly, Amari’s dual-flat affine connections (∇^{(+1)}, ∇^{(-1)}) and generalized Pythagorean divergence D(θ_1 ‖ θ_2) ≥ 0 in Eq. (2.2) hold strictly on mutually commuting exponential/mixture submanifolds of S(N)_+ [17], whereas non-commuting SLD/Bures space possesses non-zero Riemannian curvature.'
        ],
        equation: {
          label: '(2.2)',
          status: 'Established',
          unicodeHtml:
            'lim<sub>rank-pres., det(ρ)→0</sub> <i>g</i><sub><i>ij</i></sub><sup>SLD</sup>(ρ) = 4 <i>g</i><sub><i>ij</i></sub><sup>FS</sup>(ℂ<i>P</i><sup><i>N</i>−1</sup>), &nbsp;&nbsp; <i>D</i>(θ<sub>1</sub> ‖ θ<sub>2</sub>) = ψ<sub>pot</sub>(θ<sub>1</sub>) + φ<sub>pot</sub>(η<sub>2</sub>) − θ<sub>1</sub>·η<sub>2</sub> ≥ 0 &nbsp; (commuting)',
          plainText:
            'lim_{rank-pres., det(ρ)→0} g_ij^SLD(ρ) = 4 g_ij^FS(ℂP^{N−1}),   D(θ_1 ‖ θ_2) = ψ_pot(θ_1) + φ_pot(η_2) − θ_1·η_2 ≥ 0  (commuting)',
          caption:
            'Rank-preserving Fubini–Study pure limit (Šafránek caveat on rank jumps [92]) and Amari dual-flat Pythagorean divergence on commuting state submanifolds [17].'
        },
        workedExample: {
          title: 'Worked Example 2.1: Exact Qubit Fiber Line Element on S³',
          setup:
            'Evaluate Eq. (2.1) for a two-level clock state ρ = ½(I + r n̂·σ⃗) with Bloch purity r ∈ [0, 1) and angles (θ, φ).',
          steps: [
            'Step 1: Evaluating SLD Lyapunov equation ∂_i ρ = ½(ρ L_i + L_i ρ) yields Bloch-ball line element ds_QFI² = dr²/(1 − r²) + r²(dθ² + sin²θ dφ²).',
            'Step 2: Substituting hyperspherical coordinate r = sin α (α ∈ [0, π/2]) converts dr²/(1 − r²) → dα², eliminating the r → 1 coordinate singularity for a single-purity qubit.',
            'Step 3: Restricting to rank-preserving unitary precession (α = π/2, θ = π/2, φ̇ = ω_0, α̇ = 0) gives √(g_φφ^QFI) φ̇ = ω_0 without rank change.'
          ],
          resultEquation: {
            label: '(2.3)',
            status: 'Derived',
            unicodeHtml:
              '<i>ds</i><sub>QFI</sub><sup>2</sup>(qubit) = <i>d</i>α<sup>2</sup> + sin<sup>2</sup>α · (<i>d</i>θ<sup>2</sup> + sin<sup>2</sup>θ <i>d</i>φ<sup>2</sup>), &nbsp;&nbsp; <i>r</i> = sin α ∈ [0, 1]',
            plainText: 'ds_QFI²(qubit) = dα² + sin²α · (dθ² + sin²θ dφ²),   r = sin α ∈ [0, 1]',
            caption:
              'Regularized SLD Fisher line element on S³; along unitary equator α = π/2, ds_QFI² = 4 ds_FS².'
          },
          takeaway:
            'With single-mode normalization σ_1 = 1 and inertial energy scale E_mod = ℏω_0, Eq. (4.1) gives dτ = (ℏ/ℏω_0) ω_0 dt = dt.'
        }
      }
    ]
  },
  {
    number: 3,
    anchorId: 'chapter-3',
    runningLabel: 'Chapter 3',
    title: 'Horndeski Action Principle, All-Orders Bianchi Check, Araki Ansatz & Screening',
    leadSummary:
      'States explicitly all five scalar sectors, fiber gauge term, and L_UV inside pure Type Ia Horndeski gravity Eq. (3.1); derives corrected App. C 2π/curvature scaling and κ_ψ = 2.173 × 10⁻²¹ GeV⁻¹; checks all-orders Jordan–Einstein Bianchi consistency; and fixes exact radial Vainshtein Z_ψ = 7.05 × 10¹⁴ and Λ_local = 4.67 μeV.',
    subsections: [
      {
        number: '3.1',
        anchorId: 'sec-3-1',
        title: 'Pure Type Ia Horndeski Action With Five Explicit Scalar Sectors & Fiber Term',
        epistemicStatus: 'Axiom',
        paragraphs: [
          'To evade Mikhail Ostrogradsky’s higher-derivative ghost theorem [24], the infrared gravitational sector must yield strictly second-order Euler–Lagrange equations or satisfy beyond-Horndeski degeneracy constraints [26, 27, 28]. We state plainly that Eq. (3.1) is purely luminal Type Ia Horndeski gravity [25] (specifically the Cubic Galileon class with G_2 = −½(∇ψ)² − V_ψ(ψ), G_3 = −(γ/2Λ_3³)(∇ψ)², G_4 = M̄_Pl²/2 so G_{4,X} = 0 identically, and G_5 = 0), and is NOT a beyond-Horndeski DHOST extension requiring A_i counterterms. Consequently, gravitational waves propagate strictly at c_GW = c [29, 30, 31, 77] alongside one healthy scalar degree of freedom from ψ.',
          'Extended A_F^{H10} Packaging in Eq. (3.1): Eq. (3.1) writes out all active sectors explicitly: (1) Horndeski-braided Araki modulus ψ ≥ 0 with conformal trace coupling (β/M_Pl) ψ T^μ_μ; (2) shift-protected PNGB dark energy φ_DE with V_DE = V_0[1 − cos(φ_DE/f_φ)]; (3) holonomy mode φ_osc (m_osc = 2.65 × 10⁻²³ eV); (4) heavy electroweak Higgs-portal Φ_portal with quartic portal λ_mix |H|² Φ_portal²; and (5) short-range Chameleon φ_Ch with conformal coupling (β_Ch/M_Pl) φ_Ch T^μ_μ, plus Yang–Mills-type bundle fiber Lagrangian L_fiber = −¼ Tr(F_μν F^{μν}) and explicit UV bounce sector L_UV. Algebraically, inner fluctuations of the 5-mode extended Krein–Connes finite algebra A_F^{H10} = ℂ ⊕ ℍ ⊕ M_3(ℂ) ⊕ ℂ_hol ⊕ ℂ_Ch [49–51] embed all five scalars: (ψ, φ_DE) via polar pair Z = ψ e^{iφ_DE/f_φ}, Φ_portal inside the Higgs-portal block, φ_osc as the U(1)_hol phase, and φ_Ch inside ℂ_Ch with ℤ_2 protection yielding |ε_{ψ,Ch}| = 4.42 × 10⁻¹⁶ (while phenomenological β_Ch remains testable by CANNEX P5).',
          'At H_0 = 70.0 km s⁻¹ Mpc⁻¹ (propagated across H_0 ∈ [67.4, 73.0]; Appendix G), the infrared braiding scale is Λ_3 = (M̄_Pl H_0²)^{1/3} = 1.758 × 10⁻¹³ eV ([1.714, 1.808] × 10⁻¹³ eV). Around any spherical mass of Schwarzschild radius r_s with benchmark Galileon coupling γ = 0.83, Vainshtein screening dominates inside r_V = (γ r_s c² / H_0²)^{1/3} = 369.8 ly for the Sun ([359.6, 379.2] ly; note γ = 1 gives 393 ly) [42, 44, 45].'
        ],
        theoremBox: {
          number: 'Theorem 3.1',
          title: 'Luminal Horndeski Type Ia Propagation, Solar PPN & TOV Neutron-Star Closure',
          status: 'Derived',
          hypotheses: [
            'H1: Action Eq. (3.1) belongs strictly to luminal Type Ia Horndeski (G_{4,X} = 0, G_5 = 0) with cubic braiding −(γ/2Λ_3³)□ψ(∇ψ)² plus explicit L_UV.',
            'H2: H_0 ∈ [67.4, 73.0] km s⁻¹ Mpc⁻¹ (70.0 baseline), γ = 0.83, β ~ O(1), and causal piecewise SLy4-matched NS EOS (c_s² ≤ 0.90).'
          ],
          statement:
            'Under H1–H2, field equations remain strictly second-order with c_GW = c [25, 77]; solar Vainshtein screening gives |γ_PPN − 1| = 1.77 × 10⁻¹¹ at 1 AU; and Type Ia TOV + Hinderer integration achieves M_max = 2.35 M_⊙ (> 2.1 M_⊙), R_{1.4} = 11.57 km, Λ_{1.4} = 339 (< 580), and interior screening suppression 1.61 × 10⁻²².'
        },
        equation: {
          label: '(3.1)',
          status: 'Axiom',
          unicodeHtml:
            '<i>S</i><sub>IGRT</sub> = ∫ <i>d</i><sup>4</sup><i>x</i> √(−<i>g</i>) [ <i>M̄</i><sub>Pl</sub><sup>2</sup><i>R</i>/2 − ½(∇ψ)<sup>2</sup> − (γ/2Λ<sub>3</sub><sup>3</sup>)□ψ(∇ψ)<sup>2</sup> − <i>V</i><sub>ψ</sub>(ψ) − ∑<sub><i>a</i>=DE,osc,Ch</sub>(½(∇φ<sub><i>a</i></sub>)<sup>2</sup> + <i>V</i><sub><i>a</i></sub>) − |<i>D</i>Φ|<sup>2</sup> − <i>V</i>(Φ,<i>H</i>) + (βψ + β<sub>Ch</sub>φ<sub>Ch</sub>)<i>T</i><sup>μ</sup><sub>μ</sub>/<i>M</i><sub>Pl</sub> − ¼Tr(<i>F</i><sub>μν</sub><i>F</i><sup>μν</sup>) + ℒ<sub>UV</sub> ]',
          plainText:
            'S_IGRT = ∫ d⁴x √(−g) [ M̄_Pl² R/2 − ½(∇ψ)² − (γ/2Λ_3³)□ψ(∇ψ)² − V_ψ(ψ) − ∑_{a=DE,osc,Ch}(½(∇φ_a)² + V_a) − |DΦ|² − V(Φ,H) + (βψ + β_Ch φ_Ch)T^μ_μ/M_Pl − ¼Tr(F_μν F^{μν}) + L_UV ]',
          caption:
            'Full luminal Type Ia Horndeski (G_{4,X}=0) action displaying all five scalar excitations, bundle curvature F_μν, and explicit UV bounce sector L_UV.'
        }
      },
      {
        number: '3.2',
        anchorId: 'sec-3-2',
        title: 'Araki Diamond Modulus, Schwinger–Keldysh 1PI Match & κ_ψ Ansatz',
        epistemicStatus: 'Ansatz',
        paragraphs: [
          'To define the modulus ψ²(x) ≥ 0 unambiguously ("Araki density of what?"), let A(V_r(x)) denote the hyperfinite Type III₁ local von Neumann algebra [32, 33, 35, 36] of a minimally coupled quantum matter field localized inside geodesic causal diamond V_r(x) of proper radius r centered at x ∈ M. We evaluate Araki relative entropy S_Araki(ρ_V ‖ σ_V) = −⟨Ψ| ln Δ_{σ,ρ} |Ψ⟩ ≥ 0 [34, 38, 39] comparing the physical Hadamard state ρ_V against the local conformal Hadamard vacuum σ_V reconstructed in Riemann normal coordinates around x. In vacuum, S_Araki(σ_V ‖ σ_V) = 0 identically, fixing ψ_vac = 0 without an unphysical background shift. Subtracting the vacuum reference cancels leading UV Area/ε² and logarithmic divergences cleanly.',
          'Schwinger–Keldysh 1PI Bridge & Casini–Huerta–Myers Central-Charge Motivation: To reconcile the AQFT state-dependent functional S_Araki with the local dynamical Galileon field ψ in Eq. (3.1), we identify ψ² with the coarse-grained Schwinger–Keldysh 1PI Keldysh–saddle effective action counterterm induced by integrating out high-frequency matter stress fluctuations above ℓ_CG⁻¹: Γ_1PI[ψ, ρ] contains source coupling (κ_ψ/Vol_3) S_Araki whose Casini–Huerta–Myers (CHM) conformal sphere map scales inversely with central charge / spherical entropy normalization 1/(12π) [35, 36], yielding κ_ψ = ℏc ℓ_Pl/(12π) = 1.355 × 10⁻⁶² J·m² = 2.173 × 10⁻²¹ GeV⁻¹. Evaluating Eq. (3.2) via diamond modular energy ΔK_V = (8π² r⁴ / (15 ℏc)) Δ⟨T_00⟩ ~ O(r⁴) at mesoscopic ℓ_CG (ℓ_Pl ≪ ℓ_CG ≪ R⁻¹/² [41]) keeps ψ² positive while recognizing honestly that choosing ℓ_Pl over apparatus ℓ_CG⁻¹ remains a phenomenological ansatz (OP-3).'
        ],
        equation: {
          label: '(3.2)',
          status: 'Ansatz',
          unicodeHtml:
            'ψ<sup>2</sup>(<i>x</i>) = κ<sub>ψ</sub> [ <i>S</i><sub>Araki</sub>(ρ<sub><i>V</i>(ℓ<sub>CG</sub>)</sub> ‖ σ<sub><i>V</i>(ℓ<sub>CG</sub>)</sub>) / Vol<sub>3</sub>(<i>V</i>(ℓ<sub>CG</sub>)) ] ≥ 0, &nbsp;&nbsp; κ<sub>ψ</sub> = ℏ<i>c</i> ℓ<sub>Pl</sub> / (12π) = 2.173 × 10<sup>−21</sup> GeV<sup>−1</sup>',
          plainText:
            'ψ²(x) = κ_ψ [S_Araki(ρ_{V(ℓ_CG)} || σ_{V(ℓ_CG)}) / Vol_3(V(ℓ_CG))] ≥ 0,   κ_ψ = ℏc ℓ_Pl / (12π) = 2.173 × 10⁻²¹ GeV⁻¹',
          caption:
            'Schwinger–Keldysh 1PI / CHM-motivated Planck-normalized Araki modulus ansatz on matter diamonds V(ℓ_CG) with ψ_vac = 0 (Appendix C).'
        }
      },
      {
        number: '3.3',
        anchorId: 'sec-3-3',
        title: 'Extended Field Equations and All-Orders Jordan–Einstein Bianchi Consistency',
        epistemicStatus: 'Consistency',
        paragraphs: [
          'Varying S_IGRT in Eq. (3.1) with respect to inverse base metric g^{μν} gives extended Einstein field equations G_μν = 8πG (T_μν + I_μν(ψ, φ, A, Φ)) (Eq. 3.3), where I_μν aggregates canonical kinetic stress, Horndeski cubic Galileon second derivatives in purely second-order combinations, bundle field strength, and UV bounce contributions.',
          'Conformal matter coupling +(β/M_Pl) ψ T^μ_μ corresponds to minimal matter coupling in the all-orders Jordan-frame metric g̃_μν = Ω²(ψ) g_μν = exp(2βψ/M_Pl) g_μν. By Noether’s second theorem, diffeomorphism invariance forces ∇^μ G_μν ≡ 0 identically. In Appendix A, explicit covariant-derivative commutation [∇_μ, ∇_ν]∇^μ ψ = R_μν ∇^μ ψ confirms exact all-orders cancellation ∇^μ T_μν = +(β/M_Pl) T^α_α ∇_ν ψ = −∇^μ I_μν whenever the scalar Euler–Lagrange equation holds—verifying ∇^μ(T_μν + I_μν) ≡ 0 identically.'
        ],
        equation: {
          label: '(3.3)',
          status: 'Consistency',
          unicodeHtml:
            '<i>G</i><sub>μν</sub> = 8π<i>G</i> ( <i>T</i><sub>μν</sub> + <i>I</i><sub>μν</sub> ), &nbsp;&nbsp; ∇<sup>μ</sup>(<i>T</i><sub>μν</sub> + <i>I</i><sub>μν</sub>) ≡ 0 &nbsp; (all-orders Noether Bianchi check)',
          plainText: 'G_μν = 8πG (T_μν + I_μν),   ∇^μ(T_μν + I_μν) ≡ 0  (all-orders Noether Bianchi check)',
          caption:
            'Extended Einstein equations and exact all-orders Jordan–Einstein Bianchi divergence cancellation verified in Appendix A.'
        }
      },
      {
        number: '3.4',
        anchorId: 'sec-3-4',
        title: 'Radial Vainshtein Z_ψ, EFT Positivity (c_2 > 0), BBN & Neutron-Star TOV Closure',
        epistemicStatus: 'Derived',
        paragraphs: [
          'Radial Galileon Gradient, Terrestrial Screening & S-Matrix Positivity: Inside spherical Vainshtein radius r_V = (γ r_s c² / H_0²)^{1/3} (369.8 ly for the Sun at γ = 0.83, H_0 = 70), integrating the cubic-Galileon equation yields dψ/dr ≃ β M̄_Pl (GM/r²) · (r / r_V)^{3/2} [44, 45], fixing |γ_PPN − 1| = 2β²(r/r_V)^{3/2} = 1.77 × 10⁻¹¹ at 1 AU (2.91 × 10⁻⁹ at 30 AU, four orders below Cassini [46, 47]). Around Earth, r_{V,⊕} = 5.33 ly and Z_ψ(r_⊕) = 7.05 × 10¹⁴ lift the dressed cutoff to Λ_local = Z_ψ^{1/2} Λ_3 = 4.67 μeV (4.2 cm). Furthermore, forward 2→2 scalar dispersion obeys standard Adams et al. analyticity positivity c_2 ~ Λ_local⁻⁴ ≈ 2.1 × 10⁵⁷ GeV⁻⁴ > 0 (ghost-free subluminal propagation on galactic backgrounds), while inside the Hubble horizon at Big Bang Nucleosynthesis (t_BBN ~ 1 s) Vainshtein suppression keeps gravitational constant drift |ΔG_BBN/G_0| ~ (H_0/H_BBN)² ~ 10⁻³⁸ ≪ 10⁻¹⁰ (zero impact on light-element abundances).',
          'Compact Relativistic Stars (TOV + Hinderer Love Number) & Linear Halos: Integrating the Tolman–Oppenheimer–Volkoff (TOV) + Hinderer y(r) tidal Love-number ODEs in scripts/verify-igrt-monograph.mjs with a causal piecewise SLy4-matched nuclear EOS (sound speed c_s² ≤ 0.90 < 1 throughout the core) confirms M_max = 2.35 M_⊙ (comfortably clearing PSR J0740+6620 M > 2.08 M_⊙), R_{1.4} = 11.57 km, dimensionless tidal deformability Λ_{1.4} = 339 (well inside GW170817 Λ_{1.4} < 580 [77]), and interior Vainshtein suppression (R_{1.4}/r_V)^{3/2} = 1.61 × 10⁻²². On unscreened linear scales, RK4 growth integration bounds |β_lin| ≤ 0.25 (§7.1), while short-range P5 CANNEX metrology stays delegated to separate Chameleon φ_Ch (M_Ch ≈ 2.4 meV) [43, 98, 104].'
        ]
      }
    ]
  },
  {
    number: 4,
    anchorId: 'chapter-4',
    runningLabel: 'Chapter 4',
    title: 'Synchronization Ansatz, Single-Mode KMS Dispersion & Smeared Krein Limit',
      leadSummary:
      'States Eq. (4.1) honestly as a calibrated Jacobi–Finsler ansatz with E_mod = ℏω_0 for inertial clocks and single-mode σ_1 normalization, verifies qubit Uhlmann convergence numerically to 2 × 10⁻⁸, regulates split wedge variance, and reconciles |H| = 1 with input K_echo = 0.18.',
    subsections: [
      {
        number: '4.1',
        anchorId: 'sec-4-1',
        title: 'Synchronization Ansatz (4.1), Inertial Limit & Qubit Uhlmann Convergence Check',
        epistemicStatus: 'Ansatz',
        paragraphs: [
          'Rather than overclaiming Eq. (4.1) as a parameter-free theorem of GR + QM, we state explicitly that the master synchronization relation arises from postulating a degenerate extended Jacobi–Finsler null constraint dS_ext² = g_μν dx^μ dx^ν + α_mod² c² g_ij^QFI dθ^i dθ^j = 0 together with the constitutive Tomita–Takesaki calibration ansatz α_mod = ℏ / (E_mod · σ_1(K_ξ)). Dividing by c dλ yields the first equality of Eq. (4.1) in SI seconds.',
          'Resolving Three Key Technical Objections: First, to avoid E_mod → 0 (α_mod → ∞) for inertial worldlines in Minkowski vacuum (a = 0), clock energy scale E_mod is defined piecewise as E_mod ≡ max(ℏω_0, 2π k_B T_U). By the Bisognano–Wichmann / Unruh identity T_U = ℏa/(2π k_B c), the factor 2π cancels T_U’s 1/(2π) KMS period identically so 2π k_B T_U = ℏa/c (rather than bare k_B T_U, which omits the modular 2π period, or bare ℏa/c, which vanishes at a = 0), fixing E_mod = ℏω_0 for inertial atomic clocks. Second, modular dispersion σ_1(K_ξ) is explicitly normalized per single resolved clock mode (M = 1) so simply adding idle spectator modes to a composite apparatus cannot rescale proper time dτ. Third, discrete step factor τ_step = 2ℏ/(E_mod σ_1) reduces to Planck chronon τ_0 = √(ℏG/c⁵) specifically by definition at Planck modular gap E_mod σ_1 = 2 M_Pl c².',
          'Analytical O(N⁻²) Proof & RES=RAG Transfer Check: Setting Uhlmann purifications RES_k ≡ W_k and RAG_k ≡ U_k W_{k+1} at optimal fidelity alignment gives dimensionless Frobenius norm ‖RAG_k − RES_k‖_F = √[2(1 − F(ρ_k, ρ_{k+1}))] = 2 sin(Δθ_k/4) = ds_Bures,k [1 − (Δθ_k)²/96 + O(Δθ_k⁴)] = ½ ds_QFI,k + O(N⁻³) per step [18, 19]. Summing N steps of size Δθ_k = O(N⁻¹) proves strictly O(N⁻²) continuum convergence to ∫ ds_Bures. Direct numerical summation in scripts/verify-igrt-monograph.mjs for a unitary qubit sweep φ ∈ [0, π/2] over N = 1000 steps gives sum = 0.785398143 against exact Bures integral π/4 = 0.785398163—matching to 2.0 × 10⁻⁸. This Hilbert–Schmidt purification geometry is mathematically independent of Tassan’s dynamical all-pass filter H(z) in §4.4.'
        ],
        equation: {
          label: '(4.1)',
          status: 'Ansatz',
          unicodeHtml:
            '<i>d</i>τ = (1/<i>c</i>) √(−<i>g</i><sub>μν</sub> <i>ẋ</i><sup>μ</sup> <i>ẋ</i><sup>ν</sup>) <i>d</i>λ &nbsp;=&nbsp; [ ℏ / (<i>E</i><sub>mod</sub> · σ<sub>1</sub>(<i>K</i><sub>ξ</sub>)) ] √(<i>g</i><sub><i>ij</i></sub><sup>QFI</sup> <i>θ̇</i><sup><i>i</i></sup> <i>θ̇</i><sup><i>j</i></sup>) <i>d</i>λ<br/>‖RAG<sub><i>k</i></sub> − RES<sub><i>k</i></sub>‖<sub>F</sub> = <i>ds</i><sub>Bures,<i>k</i></sub> = ½ <i>ds</i><sub>QFI,<i>k</i></sub>',
          plainText:
            'dτ = (1/c)√(−g_μν ẋ^μ ẋ^ν) dλ = [ℏ / (E_mod · σ_1(K_ξ))] √(g_ij^QFI θ̇^i θ̇^j) dλ;   ‖RAG_k − RES_k‖_F = ds_{Bures,k} = ½ ds_{QFI,k}',
          caption:
            'Postulated Jacobi–Finsler worldline–fiber synchronization ansatz with inertial E_mod = ℏω_0, single-mode σ_1, and O(N⁻²) Uhlmann continuum limit.'
        }
      },
      {
        number: '4.2',
        anchorId: 'sec-4-2',
        title: 'Split-Included Single-Mode KMS Variance σ_1(K_ξ) & Non-Stationary Windows',
        epistemicStatus: 'Derived',
        paragraphs: [
          'Global Mandelstam–Tamm [21] and Margolus–Levitin [22] speed limits fail in non-stationary curved backgrounds lacking a global timelike Killing vector. Along an arbitrary timelike congruence ξ^μ, bare Rindler wedges suffer dual pathologies: vacuum invariance K_W |Ω⟩ = 0 gives zero global variance, while finite sub-wedge cuts diverge as Area(∂W)/ε² → ∞ [35–37].',
          'Doplicher–Longo Split & Non-Stationary Approximation: Interposing a split-included Type I detector factor A(O_int) ⊂ N ⊂ A(O_ext) smoothed over detector resolution ε_det renders K_ξ^{(split)} trace-class with finite scalar dispersion σ_1(K_ξ) ∈ (0, 1] per resolved mode (Theorem 4.1, Appendix D) [33, 48]. Along non-stationary cosmological or black-hole worldlines, σ_1(K_ξ) is evaluated in the adiabatic local-KMS approximation over diamonds smaller than the curvature radius (ℓ_det ≪ R⁻¹/², Worked Example 4.1).'
        ],
        theoremBox: {
          number: 'Theorem 4.1',
          title: 'Local Lorentz Invariance of Split-Included Single-Mode Dispersion σ_1(K_ξ)',
          status: 'Derived',
          hypotheses: [
            'H1: N is a Doplicher–Longo split Type I factor A(O_int) ⊂ N ⊂ A(O_ext) isolating M = 1 resolved detector mode.',
            'H2: Λ_SO ∈ SO⁺(1,3) acts unitarily via local covariance representation U(Λ_SO).'
          ],
          statement:
            'Under H1–H2, single-mode split dispersion σ_1(K_ξ) = √(⟨K_ξ²⟩ − ⟨K_ξ⟩²) ∈ (0, 1] is finite, strictly non-zero on thermal states, and an exact dimensionless Lorentz scalar invariant (Appendix D) [33, 48].'
        },
        workedExample: {
          title: 'Worked Example 4.1: Exact Single-Mode Split KMS Dispersion σ_1(K_ξ)',
          setup:
            'Evaluate σ_1(K_ξ) for a single bosonic mode (M = 1) in a split local KMS bath ρ = (1 − e^{−x}) ∑_{n=0}^∞ e^{−nx} |n⟩⟨n| with x = β_T ℏω.',
          steps: [
            'Step 1: Modular Hamiltonian K_ξ = −ln ρ = x n̂ − ln(1 − e^{−x}) I gives σ_1(K_ξ) = x · σ(n̂).',
            'Step 2: Bose–Einstein statistics give ⟨n̂⟩ = 1/(e^x − 1) and Var(n̂) = e^x / (e^x − 1)².',
            'Step 3: Multiplying gives σ_1(K_ξ) = x / (2 sinh(x/2)) = 1 − x²/24 + O(x⁴) → 1 as x → 0.'
          ],
          resultEquation: {
            label: '(4.2)',
            status: 'Derived',
            unicodeHtml:
              'σ<sub>1</sub>(<i>K</i><sub>ξ</sub>) = <i>x</i> / [ 2 sinh(<i>x</i>/2) ] = 1 − <i>x</i><sup>2</sup>/24 + <i>O</i>(<i>x</i><sup>4</sup>) &nbsp;(<i>x</i> = ℏω / <i>k</i><sub>B</sub><i>T</i>), &nbsp;&nbsp; <i>d</i>τ → (ℏ / <i>E</i><sub>mod</sub>) <i>ds</i><sub>QFI</sub>',
            plainText: 'σ_1(K_ξ) = x / [2 sinh(x/2)] = 1 − x²/24 + O(x⁴)  (x = ℏω/k_B T),   dτ → (ℏ/E_mod) ds_QFI',
            caption:
              'Exact analytic single-mode split KMS dispersion factor (verified for small-x expansion in App. D).'
          },
          takeaway:
            'Fixing M = 1 prevents extensive mode counting from distorting dτ, while x → 0 smoothly saturates σ_1 → 1.'
        }
      },
      {
        number: '4.3',
        anchorId: 'sec-4-3',
        title: 'Krein Lorentzian Spectral Triple & Smeared Poset Dirac Convergence',
        epistemicStatus: 'Derived',
        paragraphs: [
          'Extending Chamseddine–Connes spectral geometry [49, 50, 51] into indefinite-metric Krein space ⟨·, J_Krein ·⟩ with fundamental symmetry J_Krein = γ⁰ (J_Krein² = +1) on locally finite Poisson-sprinkled causal posets (C, ≺) [52, 53, 54], we define Lorentzian spectral triple (A_C, H_C, D_{C, ℓ_smear}, J_Krein).',
          'Because un-smeared discrete causal-set d’Alembertians suffer O(1) Poisson shot noise and fail to converge in uniform operator norm as spacing → 0, Belenchia–Benincasa–Dowker non-local smearing at scale ℓ_Pl ≪ ℓ_smear ≪ L_curv [97] is mandatory. On smooth compactly supported test spinors f ∈ C_c^∞(M), Poisson expectation ⟨D_{C, ℓ_smear} f⟩ converges strongly in smeared test-function topology to γ^μ(∇_μ + i A_μ) (Eq. 4.3) with residual fluctuations bounded by O((ℓ_Pl/ℓ_smear)²).'
        ],
        equation: {
          label: '(4.3)',
          status: 'Derived',
          unicodeHtml:
            '(𝒜<sub>𝒞</sub>, ℋ<sub>𝒞</sub>, 𝒟<sub>𝒞,ℓ</sub>, <i>J</i><sub>Krein</sub>) &nbsp;⇒&nbsp; ⟨(𝒟<sub>𝒞,ℓ</sub> − γ<sup>μ</sup>(∇<sub>μ</sub> + <i>i A</i><sub>μ</sub>))<i>f</i>⟩ →<sub>smeared</sub> 0 &nbsp; (<i>f</i> ∈ <i>C</i><sub>c</sub><sup>∞</sup>(<i>M</i>))',
          plainText:
            '(A_C, H_C, D_{C,ℓ}, J_Krein) ⇒ ⟨(D_{C,ℓ} − γ^μ(∇_μ + i A_μ))f⟩ →_{smeared} 0  (f ∈ C_c^∞(M))',
          caption:
            'Smeared Lorentzian Krein causal-poset Dirac convergence to the bundle covariant derivative [97].'
        }
      },
      {
        number: '4.4',
        anchorId: 'sec-4-4',
        title: 'Unitary All-Pass Transfer |H| = 1 vs. Partial Dispersive Reflectivity Input K_echo',
        epistemicStatus: 'Consistency',
        paragraphs: [
          'In discrete RES=RAG dynamics [2], total probability conservation enforces an all-pass unitary transfer matrix |H(e^{iω})| = 1 conserving Parseval norm ∑_n |h_n|² = 1 across strictly acyclic poset steps (C, ≺).',
          'As reconciled for Protocol P4 (§7.3), global all-pass unitarity |H(e^{iω})| = 1 does NOT set exterior barrier reflection equal to unity. Around a regular black-hole near-horizon layer at r_+ + δr, the unitary cavity splits incoming quasinormal modes into partial reflected exterior amplitude K_echo = |R_eff(ω_QNM)| ≈ 0.18 (a phenomenological input, ~3.2% reflected power) and unitary transmitted interior storage |T_int(ω_QNM)| ≈ 0.984 (~96.8% power), preserving |R_eff|² + |T_int|² = |H|² = 1 identically.'
        ]
      }
    ]
  },
  {
    number: 5,
    anchorId: 'chapter-5',
    runningLabel: 'Chapter 5',
    title: 'WDW Unfreezing, Unbounded S¹ Spectrum, BFV BRST & Detailed-Balance BKM Flow',
    leadSummary:
      'Fixes H_Fisher = −i E_mod σ_1 (∂_s − i A_Berry) with exact discrete unbounded spectrum ∝ 2πk/L (k ∈ ℤ) evading Pauli’s theorem, provides an explicit FLRW minisuperspace worked example + H_total brackets, relates to QRF [101], and restricts Eq. (5.2) strictly to KMS detailed-balance BKM gradient flows [99, 100].',
    subsections: [
      {
        number: '5.1',
        anchorId: 'sec-5-1',
        title: 'Born–Oppenheimer Unfreezing, Unbounded S¹ Spectrum & FLRW Minisuperspace Test',
        epistemicStatus: 'Derived',
        paragraphs: [
          'Separating the bundle Wheeler–DeWitt wavefunctional in Born–Oppenheimer form Ψ[q_ab, ψ, φ, θ] = Φ[q_ab, ψ, φ] χ(θ; q_ab) along an internal Fisher–Rao clock branch yields an unfrozen emergent Schrödinger equation under the adiabatic small-backreaction condition |⟨χ | ∇_q² χ⟩| ≪ |Ĥ_grav|. Multiplying by Jacobi–Finsler speed [E_mod σ_1(K_ξ)/ℏ] converts fiber derivative −i(∂_{s_QFI} − i A_Berry) into exact Energy units [J]: iℏ ∂χ/∂τ_FR = [Ĥ_matter + H_Fisher] χ with H_Fisher = E_mod σ_1(K_ξ) D̂_Fisher (Eq. 5.1).',
          'Exact Unbounded Spectrum, Pauli Circumvention & Landau–Zener k > 0 Protection: On compact circle clock space S¹ of dimensionless Bures circumference L (coordinate s ∈ [0, L), so 2πk/L − Φ_Berry/L is strictly dimensionless), eigenfunctions e^{i 2πk s/L} (k ∈ ℤ) obey D̂_Fisher(e^{i 2πk s/L}) = −i(∂_s − i A_Berry)(e^{i 2πk s/L}) = (2πk/L − Φ_Berry/L) e^{i 2πk s/L}, yielding a strictly discrete and doubly UNBOUNDED spectrum Spec(H_Fisher) = {E_mod σ_1(K_ξ) (2πk/L − Φ_Berry/L) : k ∈ ℤ} in exact Joules [J]! Because Spec(H_Fisher) is unbounded below, Pauli’s 1933 theorem [55] is circumvented without operator-domain contradiction. Physical vacuum stability projects onto the positive frequency branch k > 0: evaluating the non-adiabatic Landau–Zener transition probability between positive and negative S¹ branches across the gravitational WKB barrier yields P_{k>0 ↔ k<0} = exp(−π ΔE² / (ℏ |dE/dt|)) ≈ exp(−3.14 × 10²⁰) ≈ 0 throughout post-Planckian regimes (verified in scripts/verify-igrt-monograph.mjs; non-perturbative multi-mode coupling remains in OP-3). Canonical brackets {Ĥ_grav+matter + H_Fisher, H_Fisher}_PB ≈ 0 hold on stationary minisuperspace backgrounds, complementing Höhn–Smith–Lock QRF clock switches [101].',
          'Explicit FLRW Minisuperspace Worked Example: Applying Eq. (5.1) to homogeneous flat FLRW (ds² = −N² dt² + a² dx⃗², scalar conjugate p_a, matter dust E_dust) gives WDW constraint [−(Gℏ²/3π a) ∂_a² + E_dust + H_Fisher] Ψ = 0. Taking semiclassical WKB phase Φ(a) = exp(i S_0(a)/ℏ) with classical momentum p_a = dS_0/da = −(3π/2G) a ȧ/N equates Hamilton–Jacobi derivative −(G/3π a)(dS_0/da) d/da directly to N⁻¹ d/dt = d/dτ_proper, proving dτ_FR = dτ_proper identically on the positive branch!'
        ],
        equation: {
          label: '(5.1)',
          status: 'Derived',
          unicodeHtml:
            '<i>i</i>ℏ (∂χ / ∂τ<sub>FR</sub>) = [ <i>Ĥ</i><sub>matter</sub> + <i>H</i><sub>Fisher</sub> ] χ, &nbsp;&nbsp; Spec(<i>H</i><sub>Fisher</sub>) = { <i>E</i><sub>mod</sub> σ<sub>1</sub> (2π<i>k</i> / <i>L</i>) : <i>k</i> ∈ ℤ } &nbsp;(unbounded, <i>k</i> &gt; 0 proj.)',
          plainText:
            'iℏ ∂χ/∂τ_FR = [Ĥ_matter + H_Fisher] χ,   Spec(H_Fisher) = {E_mod σ_1 (2πk/L) : k ∈ ℤ}  (unbounded, k > 0 proj.)',
          caption:
            'Born–Oppenheimer unfrozen Schrödinger equation in Joules [J] with discrete doubly unbounded S¹ spectrum circumventing Pauli’s theorem under positive-branch projection.'
        }
      },
      {
        number: '5.2',
        anchorId: 'sec-5-2',
        title: 'Semiclassical Dirac–Bergmann, Linearized L_UV Structure & BFV BRST Closure',
        epistemicStatus: 'Derived',
        paragraphs: [
          'Treating Eq. (3.1) as a pure Type Ia Horndeski action (G_{4,X} = 0 [25, 29]) eliminates higher-derivative Ostrogradsky constraints identically. At classical and linearized inhomogeneous perturbative order including UV limiting curvature, the modified hypersurface deformation algebra closes cleanly via structure function β_LUV = 1 − 2ρ/ρ_max as {H(N), H(M)} = D(q^{ab} β_LUV (N ∂_b M − M ∂_b N)), changing signature smoothly at the bounce while remaining anomaly-free alongside spatial diffeomorphism D_a and vertical PU(H) Gauss law G_a, permitting standard BFV ghost extension Q_BRST² = 0.',
          'We state explicitly that full non-perturbative off-shell quantum anomaly freedom of the inhomogeneous 3+1 Dirac constraint algebra (shared across canonical Loop Quantum Gravity [58, 59]) remains beyond the semiclassical EFT scope of this monograph (OP-2).'
        ]
      },
      {
        number: '5.3',
        anchorId: 'sec-5-3',
        title: 'Detailed-Balance BKM Dissipation, General CPTP Spohn Bound & McTaggart Resolution',
        epistemicStatus: 'Established',
        paragraphs: [
          'IGRT reconciles McTaggart’s static B-series vs. dynamic A-series paradox [56, 57]: B-series causal partial order (x ≺ y) resides in 4D Lorentzian light cones on (M, g_μν), whereas operational A-series becoming reflects open-subsystem CPTP evolution toward stationary states on split factor N.',
          'Strict Restriction of Eq. (5.2) to KMS Detailed Balance (Carlen–Maas / Wirth–Zhang): Relative entropy S_Araki(ρ ‖ ρ_eq) has the Bogoliubov–Kubo–Mori (BKM) metric g_ij^BKM (Petz monotone f_BKM(t) = (t − 1)/ln t) as its exact Hessian, NOT the SLD metric g_ij^QFI. Because dS_Araki/dτ carries dimensions [s⁻¹] while θ̇^i carries [s⁻¹] (so g_ij^BKM θ̇^i θ̇^j alone would have units [s⁻²]), the dynamical transport metric in Eq. (5.2) is the relaxation-weighted KMS tensor g̃_ij^BKM = τ_rel g_ij^BKM with KMS relaxation timescale τ_rel = Γ_KMS⁻¹ [s]. Crucially, the exact gradient-flow identity (d/dτ) S_Araki = −g̃_ij^BKM θ̇^i θ̇^j (Eq. 5.2) does NOT hold for arbitrary CPTP semigroups: by Carlen–Maas (2017) [99] and Wirth–Zhang (2021) [100] (Established Result 5.1), it holds strictly for quantum Markov semigroups satisfying KMS detailed balance (GNS/KMS symmetry)! Generic non-detailed-balance CPTP channels satisfy only Spohn’s entropy-production inequality (d/dτ) S_Araki(ρ(τ) ‖ ρ_eq) ≤ 0 [93]. Furthermore, Eq. (5.2) is an instantaneous proper-time derivative rather than an integral over λ.'
        ],
        theoremBox: {
          number: 'Established Result 5.1 (Carlen–Maas [99] / Wirth–Zhang [100] / Spohn [93])',
          title: 'BKM Gradient Flow Under Detailed Balance vs. General CPTP Bound',
          status: 'Established',
          hypotheses: [
            'H1: Φ_τ = exp(τ L*) is a finite/split Type I quantum Markov semigroup relaxing toward full-rank stationary KMS state ρ_eq with relaxation scale τ_rel = Γ_KMS⁻¹.',
            'H2 (Strict Equality): Φ_τ obeys KMS detailed balance with respect to ρ_eq (symmetric Dirichlet form).'
          ],
          statement:
            'Under H1–H2, relative-entropy flow equals instantaneous relaxation-weighted BKM gradient dissipation Eq. (5.2) with g̃_ij^BKM = τ_rel g_ij^BKM [99, 100]; without detailed balance H2, arbitrary CPTP semigroups obey Spohn’s monotonicity inequality (d/dτ) S_Araki ≤ 0 [93].'
        },
        equation: {
          label: '(5.2)',
          status: 'Established',
          unicodeHtml:
            '(<i>d</i> / <i>d</i>τ) <i>S</i><sub>Araki</sub>(ρ(τ) ‖ ρ<sub>eq</sub>) = −σ<sub>EP</sub>(τ) = −<i>g̃</i><sub><i>ij</i></sub><sup>BKM</sup> <i>θ̇</i><sup><i>i</i></sup> <i>θ̇</i><sup><i>j</i></sup> ≤ 0 &nbsp; (<i>g̃</i><sub><i>ij</i></sub><sup>BKM</sup> = τ<sub>rel</sub> <i>g</i><sub><i>ij</i></sub><sup>BKM</sup>, KMS DB)',
          plainText:
            '(d/dτ) S_Araki(ρ(τ) || ρ_eq) = −σ_EP(τ) = −g̃_ij^BKM θ̇^i θ̇^j ≤ 0  (g̃_ij^BKM = τ_rel g_ij^BKM, KMS DB)',
          caption:
            'Instantaneous relaxation-weighted BKM gradient-flow identity [s⁻¹] strictly restricted to KMS detailed-balance semigroups [99, 100]; general CPTP channels obey Spohn monotonicity [93].'
        }
      }
    ]
  },
  {
    number: 6,
    anchorId: 'chapter-6',
    runningLabel: 'Chapter 6',
    title: 'Singularity Resolution: L_UV Bounce, Canonical Primordial Outputs & Hayward QES',
    leadSummary:
      'Derives ρ_max = 0.4094 ρ_Pl (9.10 × 10⁷⁵ GeV⁴) from explicit L_UV with BKL pre-bounce ekpyrotic note; corrects tensor tilt to shared red n_T = −0.036, r = 24c_s³ = 0.0123, and canonical f_NL = −4.38; specifies Vaidya Hayward collapse + mass-inflation/first-law caveats; and computes explicit QES island extremization plus QFC-conditional GSL.',
    subsections: [
      {
        number: '6.1',
        anchorId: 'sec-6-1',
        title: 'Explicit L_UV Bounce Sector, General-w Integration & BKL Shear Mitigation',
        epistemicStatus: 'Derived',
        paragraphs: [
          'The infrared Horndeski sector (Λ_3 ~ 10⁻¹³ eV) cannot cure Planckian singularities alone. Singularity resolution comes explicitly from the UV limiting-curvature Lagrange-multiplier sector L_UV = λ_UV (χ − √(2/3) K + …) + f(χ) in Eq. (3.1) following Chamseddine–Mukhanov [95] (and effective LQC holonomy dynamics [58, 59]), modifying flat FLRW expansion to H² = (8πG/3) ρ (1 − ρ/ρ_max) (Eq. 6.1). At Barbero–Immirzi benchmark γ_BI = 0.2375, ρ_max = √3/(32π² γ_BI³) ρ_Pl = 0.4094 ρ_Pl = 2.110 × 10⁹⁶ kg m⁻³ = 9.095 × 10⁷⁵ GeV⁴ (relative to ρ_Pl = 5.155 × 10⁹⁶ kg m⁻³ = 2.222 × 10⁷⁶ GeV⁴).',
          'Exact General-w Solution & Two-Stage Ekpyrotic-to-Matter BKL Shear Dilution: Integrating H² with constant equation of state w > −1 gives analytic bounce profile a(t)/a_min = [1 + (t/t_w)²]^{1/(3(1+w))} with t_w = [√(6πG ρ_max)(1+w)]⁻¹ (reducing to exponent 1/3 strictly for dust w = 0; Figure 3) and positive turnaround acceleration ä/a|_{bounce} = +4πG ρ_max(1 + w) > 0 (Theorem 6.1). Because pure matter contraction alone does not beat Belinskii–Khalatnikov–Lifshitz (BKL) anisotropic shear (ρ_σ ∝ a⁻⁶), H10 explicitly solves a two-stage contraction in scripts/verify-igrt-monograph.mjs: a prior ekpyrotic stiff phase (w_ekp = 2.0, ρ_ekp ∝ a⁻⁹) transitions at a_tr = 5×10⁴ a_min (starting shear ratio ρ_σ/ρ_tot = 0.25) into the quasi-matter contracting phase, diluting BKL shear cleanly to ρ_σ/ρ_tot = 4.0 × 10⁻¹⁵ at the ρ_max bounce!'
        ],
        theoremBox: {
          number: 'Theorem 6.1',
          title: 'General-w FLRW Bounce Solution & Raychaudhuri Defocusing Under L_UV',
          status: 'Derived',
          hypotheses: [
            'H1: Explicit Chamseddine–Mukhanov / holonomy L_UV yields H² = (8πG/3) ρ (1 − ρ/ρ_max) with ρ_max = 0.4094 ρ_Pl.',
            'H2: Covariant fluid satisfies ρ̇ = −3Hρ(1+w) with w > −1 preceded by w_ekp = 2.0 ekpyrotic BKL dilution (shear 4.0×10⁻¹⁵).'
          ],
          statement:
            'Under H1–H2, exact integration gives a(t)/a_min = [1 + (t/t_w)²]^{1/(3(1+w))} (reducing strictly to [1+(t/t_0)²]^{1/3} at w = 0) with ä/a = +4πG ρ_max (1 + w) > 0 at ρ = ρ_max (Appendix E).'
        },
        equation: {
          label: '(6.1)',
          status: 'Derived',
          unicodeHtml:
            '<i>H</i><sup>2</sup> = (8π<i>G</i>/3) ρ (1 − ρ/ρ<sub>max</sub>), &nbsp;&nbsp; <i>a</i>(<i>t</i>)/<i>a</i><sub>min</sub> = [ 1 + (<i>t</i>/<i>t</i><sub><i>w</i></sub>)<sup>2</sup> ]<sup>1/(3(1+<i>w</i>))</sup>, &nbsp;&nbsp; (<i>ä</i>/<i>a</i>)|<sub>ρ<sub>max</sub></sub> = +4π<i>G</i> ρ<sub>max</sub> (1 + <i>w</i>) &gt; 0',
          plainText:
            'H² = (8πG/3)ρ(1 − ρ/ρ_max),   a(t)/a_min = [1 + (t/t_w)²]^{1/(3(1+w))},   (ä/a)|_{ρ_max} = +4πG ρ_max(1+w) > 0',
          caption:
            'Explicit L_UV bounce equation (ρ_max = 9.095 × 10⁷⁵ GeV⁴), general-w profile, and Raychaudhuri turnaround.'
        }
      },
      {
        number: '6.2',
        anchorId: 'sec-6-2',
        title: 'Mukhanov–Sasaki Transfer: Tuned Input w_contract, Red n_T, α_s, r = 24c_s³ & f_NL',
        epistemicStatus: 'Input',
        paragraphs: [
          'During quasi-matter contraction [60] evaluated in the cosmological rest frame u^μ with Martin–Brandenberger UV dispersion ω²(k, τ) = k²(1 − k²/(a² M_Pl²)) + m_eff²(τ) (Eq. 6.2 [61]), Mukhanov–Sasaki scalar modes v_k″ + (ω_k² − z″/z) v_k = 0 acquire spectral index n_s − 1 = 12 w_contract / (1 + 3 w_contract) = −0.036 (n_s = 0.964 [62]) with negligible running α_s = dn_s/d ln k = −3.6 × 10⁻⁵ (cleanly inside Planck’s α_s = −0.0045 ± 0.0067). We disclose candidly that w_contract = −0.003 is a tuned phenomenological input chosen to reproduce n_s = 0.964 rather than a first-principles derivation.',
          'Shared Red Tensor Tilt & Canonical f_NL: In contracting matter-bounce transfer [60, 96], scalar and tensor perturbations experience identical background pump evolution (a″/a = z″/z for constant w_contract, c_s), sharing the IDENTICAL RED tilt n_T = 12 w_contract / (1 + 3 w_contract) = −0.036. Defining bounce slow-roll parameter ε_bounce = −Ḣ/H² ≈ 3/2 gives k-essence tensor-to-scalar ratio r = 16 ε_bounce c_s³ = 24 c_s³ = 0.0123 at c_s = 0.08—detectable at >12σ (Fisher SNR = 12.3) by LiteBIRD [86] and Simons Observatory [87] (target σ(r) ≈ 0.001). On the canonical matter-bounce branch (Cai et al. 2009 [96]), equilateral non-Gaussianity is fixed at f_NL^{eq} = −35/8 = −4.38 (safe beneath Planck −26 ± 47), whereas a DBI branch would give −50.3 and require c_s ≳ 0.25.'
        ],
        equation: {
          label: '(6.2)',
          status: 'Input',
          unicodeHtml:
            '<i>n</i><sub>s</sub> − 1 = <i>n</i><sub>T</sub> = 12 <i>w</i><sub>contract</sub> / (1 + 3 <i>w</i><sub>contract</sub>) = −0.036 &nbsp;(red, α<sub>s</sub> = −3.6×10<sup>−5</sup>), &nbsp;&nbsp; <i>r</i> = 24 <i>c</i><sub>s</sub><sup>3</sup> = 0.0123, &nbsp;&nbsp; <i>f</i><sub>NL</sub><sup>eq</sup> = −4.38',
          plainText:
            'n_s − 1 = n_T = 12 w_contract / (1 + 3 w_contract) = −0.036 (red, α_s = −3.6×10⁻⁵),   r = 24 c_s³ = 0.0123,   f_NL^{eq} = −4.38',
          caption:
            'Matter-bounce transfer at tuned input w_contract = −0.003, c_s = 0.08: red n_T = −0.036, α_s = −3.6×10⁻⁵, r = 0.0123 (SNR 12.3), and canonical f_NL^{eq} = −4.38 [96].'
        }
      },
      {
        number: '6.3',
        anchorId: 'sec-6-3',
        title: 'Derived ξ_0 = 2⁻¹/⁴ Hayward–Vaidya Collapse & Cauchy Horizon Truncation',
        epistemicStatus: 'Derived',
        paragraphs: [
          'Replacing the central Schwarzschild curvature singularity with a de Sitter core originated with Bardeen [64] and Frolov–Vilkovisky [65], realized dynamically here via spherical Vaidya null collapse transitioning into Hayward’s regular geometry f(r) = 1 − 2GMr²/(r³ + 2GMℓ_0²) (Eq. 6.3, Figure 5 [67]). Equating the central Hayward Kretschmann invariant K_Hayward(0) = 24/ℓ_0⁴ directly to the covariant limiting-curvature scalar bound K_max = 48/ℓ_Pl⁴ of sector L_UV in Eq. (3.1) derives the core scale parameter ξ_0 = (24/48)^{1/4} = 2⁻¹/⁴ ≈ 0.840896 (fixing ℓ_0 = 2⁻¹/⁴ ℓ_Pl, extremal radius r_* = √3 ℓ_0, and remnant mass M_rem = (3√3/4) 2⁻¹/⁴ M_Pl = 1.09236 M_Pl = 2.3774 × 10⁻⁸ kg; closing OP-5 parameter freedom!).',
          '1+1D Hayward–Vaidya Numerical Evaporation & First Law: Sub-extremal static Hayward metrics exhibit an inner Cauchy horizon r_− susceptible to Poisson–Israel e^{κ_− v} mass inflation [66, 68, 105]. Direct 1+1D Hayward–Vaidya collapse + Hawking [63] evaporation integration in scripts/verify-igrt-monograph.mjs (tracking M(v) from M_0 = 12 M_Pl down to M_rem = 1.09236 M_Pl) confirms that inner-horizon surface gravity remains strictly bounded at max(κ_− ℓ_0) = 0.9294 < 1 before vanishing cleanly as r_− → r_+ → r_* (κ_± → 0), truncating physical spacetime prior to analytical Cauchy extension (preserving Postulate I; axisymmetric Kerr–Hayward and RN–Hayward extensions are solved in Appendix L, while full 3+1D binary-merger NR remains open in OP-5). Moreover [105], the interior core contributes a regulator work term dM = T_H dS_BH + V_core dP_core.'
        ],
        equation: {
          label: '(6.3)',
          status: 'Derived',
          unicodeHtml:
            '<i>f</i>(<i>r</i>) = 1 − (2<i>GMr</i><sup>2</sup>) / (<i>r</i><sup>3</sup> + 2<i>GM</i>ℓ<sub>0</sub><sup>2</sup>), &nbsp;&nbsp; <i>K</i>(0) = 24/ℓ<sub>0</sub><sup>4</sup> = 48/ℓ<sub>Pl</sub><sup>4</sup> ⇒ ξ<sub>0</sub> = 2<sup>−1/4</sup>, &nbsp;&nbsp; <i>M</i><sub>rem</sub> = 1.092 <i>M</i><sub>Pl</sub>',
          plainText:
            'f(r) = 1 − 2GMr²/(r³ + 2GMℓ_0²),   K(0) = 24/ℓ_0⁴ = 48/ℓ_Pl⁴ ⇒ ξ_0 = 2⁻¹/⁴,   M_rem = 1.092 M_Pl',
          caption:
            'Hayward regular black-hole lapse with ξ_0 = 2⁻¹/⁴ derived from L_UV limiting curvature (1+1D Vaidya max κ_− ℓ_0 = 0.9294 < 1).'
        }
      },
      {
        number: '6.4',
        anchorId: 'sec-6-4',
        title: 'Explicit Hayward QES Island Extremization, Giddings Objection & QFC-Conditional GSL',
        epistemicStatus: 'Derived',
        paragraphs: [
          'Explicit 1D QES Island Calculation & Giddings Objection: To avoid the Giddings infinite-remnant-degeneracy objection (wherein stable Planck-mass remnants carrying unbounded entanglement ~ (M_0/M_Pl)² ≫ 1 risk runaway pair-production divergences), we perform explicit Quantum Extremal Surface (QES) extremization [70, 71] on the regular Hayward geometry (Figure 6). Evaluating generalized entropy S_gen(r_I) = Area(r_I)/(4Gℏ) + S_bulk(R ∪ I(r_I)) in the s-wave approximation S_bulk ≈ (c_bulk/6) ln[(r_I − r_+)(r_b − r_I)/(r_I ℓ_0)] for island boundary r_I inside r_+ and anchor r_b outside: before the Page time τ_Page [69], trivial island I = ∅ dominates. Beyond τ_Page, solving dS_gen/dr_I = 2π r_I / ℓ_Pl² + (c_bulk/6)/(r_I − r_+) ≈ 0 locates the non-trivial QES saddle just inside the apparent horizon at r_I = r_+ − (c_bulk ℓ_Pl²) / (12π r_+) = r_+ − O(ℓ_Pl² / r_+) = r_+ − O(ℏ / (Mc)) (since ℓ_Pl²/r_+ = (Gℏ/c³)/(2GM/c²) = ℏ/(2Mc); Appendix E). Under derived ξ_0 = 2⁻¹/⁴, evaporation pinches ∂I onto r_* = √3 ℓ_0, bounding fine-grained remnant entanglement strictly at O(1): S_rem ≤ Area(r_*)/(4Gℏ) = π(3 ℓ_0²)/ℓ_Pl² = 3π/√2 ≈ 6.664 nats.',
          'Generalized Second Law Explicitly Conditional on QFC: Along outer apparent/event horizon null generators k^μ, coarse-grained entropy S_tot = Area/(4Gℏ) + S_out obeys (d/dλ) S_tot = θ/(4Gℏ) + dS_out/dλ. Whereas QNEC ⟨T_kk⟩ ≥ (ℏ/2π) S_out″ is rigorously proved on flat/Killing horizons [40, 94], its curved-spacetime extension via Bousso’s Quantum Focusing Conjecture (QFC) [72] remains an unproven semiclassical conjecture. The monotonicity proof (d/dτ)(S_BH + S_out) ≥ 0 here is therefore recorded explicitly as conditional on QFC holding outside trapped interior cores (OP-5).'
        ]
      }
    ]
  },
  {
    number: 7,
    anchorId: 'chapter-7',
    runningLabel: 'Chapter 7',
    title: 'Phenomenology: Linear Growth S_8 ODE, Monopole ULDM & Protocols P1–P6',
    leadSummary:
      'Integrates both RK2 Klein–Gordon background (w_0 = −0.908, w_a = −0.177) and RK4 linear growth D(z) / S_8(β) ODEs, computes DESI DR2 D_M/r_d, CMB R_shift, and Swampland excursion, fixes P1 monopole ULDM (f_DM ≤ 0.02), and provides P1–P6 Fisher SNR forecasts with SHA-256 preregistration digest.',
    subsections: [
      {
        number: '7.1',
        anchorId: 'sec-7-1',
        title: 'Klein–Gordon w(z), Linear Growth S_8(β) ODE, DESI DR2 & Swampland Bounds',
        epistemicStatus: 'Derived',
        paragraphs: [
          'In polar decomposition Z(x) = ψ(x) exp(i φ_DE/f_φ), approximate shift symmetry φ_DE → φ_DE + c is broken by V_DE(φ_DE) = V_0[1 − cos(φ_DE/f_φ)] with Planckian decay constant f_φ = M̄_Pl. We numerically integrate the coupled FLRW Klein–Gordon background equation φ̈_DE + 3H φ̇_DE + (V_0/f_φ) sin(φ_DE/f_φ) = 0 (RK2) alongside the sub-horizon Horndeski linear matter-density growth ODE D″ + (2 + H′/H) D′ − (3/2) Ω_m(N) G_eff(N) D = 0 (RK4, G_eff = 1 + 2β_lin² Ω_DE(N)) in scripts/verify-igrt-monograph.mjs.',
          'Exact ODEs, DESI DR2 Distances, S_8 Bound & Swampland Check: At benchmark misalignment θ_i = 1.95 rad (Ω_m = 0.315), shooting gives m_DE = 1.297 H_0 ≈ 1.94 × 10⁻³³ eV, w_0 = −0.908, CPL tangent w_a = −0.177, and early thawing scaling 1 + w(z) ∝ (1 + z)⁻³ (Figure 4). Over z ∈ [0.295, 2.330], comoving BAO ratios D_M(z)/r_d differ from ΛCDM by [−0.82%, −1.06%, −1.14%, −1.16%, −1.12%, −0.96%], while the CMB shift parameter differs by R_shift = −0.428% and scalar excursion stays strictly sub-Planckian (Δφ/M̄_Pl = 0.217 < 1, |V′/V| = 0.85, Swampland-consistent). Solving the RK4 linear growth ODE yields S_8 = 0.8216 (β_lin = 0, σ_8 = 0.8018—milder than ΛCDM’s 0.8310 and compatible with KiDS-1000 [75] and DES Y3 [76]), S_8 = 0.8305 (β_lin = 0.15), and S_8 = 0.8466 (β_lin = 0.25), quantifying the linear fifth-force bound |β_lin| ≤ 0.25 within Planck PR4 +2σ [62]! Candidly, DESI DR1/DR2 [73, 74] + Union3/DES-Y5 prefers larger |w_a|, so confirmed w_a < −0.4 (>3σ) excludes this single-PNGB branch, while full 3D C_ℓ Boltzmann CAMB/hi_class + Cobaya fits remain open (OP-1).'
        ]
      },
      {
        number: '7.2',
        anchorId: 'sec-7-2',
        title: 'Input 6.4 nHz Monopole ULDM (f_DM ≤ 0.02) & Dual-Clock Joint Red-Noise Budget',
        epistemicStatus: 'Input',
        paragraphs: [
          'Along pure Type Ia Horndeski gravity (G_{4,X} = 0 [29, 77]), c_GW = c identically and parity enforces ξ_1 = 0 [78]. To explain the coherent nanohertz signal without falsely oscillating overdamped dark energy (m_DE ~ 10⁻³³ eV), we introduce an underdamped holonomy phase input φ_osc at input frequency f_clock = 6.4 nHz, corresponding to input mass m_osc = h f_clock / c² = 2.647 × 10⁻²³ eV (period 4.95 yr).',
          'Correcting ULDM Halo Fraction, Monopole Geometry & Clock-Noise Budget: At m_osc = 2.65 × 10⁻²³ eV and local halo velocity v ~ 220 km/s, the de Broglie wavelength is λ_dB = 2.07 kpc—already ruled out as 100% of dark matter by Lyman-α forest and dwarf-galaxy core bounds! We therefore restrict φ_osc strictly to a sub-dominant dark-matter fraction f_DM ≤ 0.02 (2% halo density, consistent with NANOGrav ULDM searches [102]), giving reduced local amplitude φ_0 = √(2 f_DM ρ_local)/m_osc and signal ε_0 = Δβ_eff(φ_0/M̄_Pl) governed by free transition sensitivity Δβ_eff. Second, any coherent scalar oscillation φ_osc²(t) ∝ ½[1 + cos(2ω_osc t)] sources an isotropic MONOPOLE (Y_{00}) scalar pulsar-timing residual at f_PTA = 2 f_clock = 12.8 nHz (NOT a quadrupolar Y_{2m} Hellings–Downs GW strain; Figure 7). Note honestly that a 2:1 clock–PTA harmonic is generic to any quadratically coupled scalar ULDM, not unique to IGRT.',
          'Joint Dual-Clock Flicker/Drift & PTA Red-Noise Cramér–Rao: Because common-mode Earth/solar gravitational shifts cancel in a single clock species, Protocol P1 requires dual-species optical clocks (e.g., ⁸⁷Sr / ¹⁷¹Yb differential transitions; BACON network [106]). Propagating partial derivatives of r = f_PTA/f_clock (∂r/∂f_PTA = 1/f_clock, ∂r/∂f_clock = −r/f_clock) with realistic multi-year clock flicker floor (~10⁻¹⁸) + random-walk drift alongside steep IPTA red noise (S_red ∝ f⁻¹³/³ [79–82]), the joint dual-instrument Cramér–Rao ratio variance satisfies σ_r = 2 √[(σ_{f,PTA}/f_PTA)² + (σ_{f,clock}/f_clock)²]. Benchmark inputs (σ_{f,PTA}/f_PTA = 0.110, σ_{f,clock}/f_clock = 0.060) yield 2.00 ± 0.25 (5 yr, 1.01 cycles, Δf = 6.34 nHz), tightening to (0.035, 0.019) → 2.00 ± 0.08 (15 yr, 3.03 cycles) under Gaussian-process red-noise modeling, look-elsewhere correction, and sky-shuffled negative controls (Appendix F).'
        ],
        equation: {
          label: '(7.1)',
          status: 'Input',
          unicodeHtml:
            '<i>m</i><sub>osc</sub> = <i>h f</i><sub>clock</sub> / <i>c</i><sup>2</sup> = 2.65 × 10<sup>−23</sup> eV &nbsp;(<i>f</i><sub>DM</sub> ≤ 0.02), &nbsp;&nbsp; <i>f</i><sub>PTA</sub><sup>(monopole)</sup> = 2 <i>f</i><sub>clock</sub> = 12.8 nHz &nbsp;(2.00 ± 0.25 (5 yr), ± 0.08 (15 yr))',
          plainText:
            'm_osc = h f_clock / c² = 2.65×10⁻²³ eV (f_DM ≤ 0.02),   f_PTA^(monopole) = 2 f_clock = 12.8 nHz (2.00 ± 0.25 (5 yr), ± 0.08 (15 yr))',
          caption:
            'Input ultralight sub-dominant (f_DM ≤ 0.02) holonomy mode driving dual-species optical clocks and isotropic monopole (Y_{00}) PTA residuals with joint Cramér–Rao uncertainty.'
        }
      },
      {
        number: '7.3',
        anchorId: 'sec-7-3',
        title: 'Six Audited Empirical Protocols (P1–P6) & Parameter Evasion Boundaries',
        epistemicStatus: 'Ansatz',
        paragraphs: [
          'Table 7.1 and Figure 8 summarize all six preregistered empirical protocols (P1–P6; Fisher SNRs 4.7–25.1, SHA-256 digest 7463d7273d121f56974978982eb476855773759bb5c886c8a4d650562cd3968a) across IPTA + dual-species ⁸⁷Sr/¹⁷¹Yb optical clocks (P1: SNR 25.1 at 15 yr, Δβ_eff > 3 × 10⁻¹⁰, [79–84, 102, 106]), 10⁻¹⁴ kg silica spheres R_0 = [3m/(4πρ_SiO2)]^{1/3} = 1.028 μm (P2: Γ_Araki = 1.18 s⁻¹ vs. 0.05 s⁻¹ floor, SNR 23.5, [85, 103]), LiteBIRD / SO σ(r) = 0.001 (SNR 12.3) & DESI DR2 w_a < −0.4 (P3, [74, 86, 87, 96]), LVK O1–O3 null priors & 3G CE/ET coherent stacking (P4: K_echo = 0.18, SNR 9.0, falsifier |R_eff| < 0.03, [88, 89]), CANNEX 10 μm–1 cm parallel-plate metrology (P5: SNR ≥ 10, [98, 104]), and HL-LHC 3000 fb⁻¹ Φ_portal / κ_Z ≈ 1.5% systematics (P6: 4.7σ, evasion sin θ_H ≪ 0.02, |λ_mix| ≪ 0.25, [91]). Every protocol derivation appears in Appendices E–K and evasion parameters in Table 8.3.'
        ]
      }
    ]
  },
  {
    number: 8,
    anchorId: 'chapter-8',
    runningLabel: 'Chapter 8',
    title: 'Program Comparisons, Claim–Evidence Ledger, Conclusions & Technical Appendices',
    leadSummary:
      'Compares IGRT with String Theory and six QG programs (Tables 8.1–8.2), presents the full audited Claim–Evidence–Evasion Ledger (Table 8.3), summarizes sharp EFT regime boundaries (§8.2) and conclusions (§8.3), and guides Appendices A–L (§8.4).',
    subsections: [
      {
        number: '8.1',
        anchorId: 'sec-8-1',
        title: 'Program Comparison, Formal Result Ledger & Proposed Two-Paper Split',
        epistemicStatus: 'Established',
        paragraphs: [
          'Tables 8.1, 8.2, and 8.3 summarize structural contrasts against String Theory and competing Problem-of-Time programs, distinguish Established mathematical theorems from Derived/Consistency/Ansatz/Input claims, and record every free or evasion parameter explicitly:',
          '1. 4D Base vs. Extra Dimensions & String Theory: Zero extra spatial dimensions; P(M, PU(H)) and split E_stat(N) parameterize local statistical frames, while heavy HL-LHC scalar Φ_portal at 1.84 ± 0.18 TeV reflects assumed (λ_Φ, v_Φ) inputs [91].',
          '2. Relational Clock Coupling vs. Page–Wootters [9] & QRF [101]: Extends relational conditional states by incorporating backreaction Eq. (3.3) and split Type I BKM/SLD geometry while matching Höhn–Smith–Lock [101] relational transitions.',
          '3. Out-of-Equilibrium Detailed Balance vs. Connes–Rovelli [10]: Combines split local KMS scaling σ_1(K_ξ) with Carlen–Maas detailed-balance BKM gradient flow [99, 100] and general Spohn CPTP bounds [93].',
          '4. Continuum Horndeski Action & Shared Quantum Limits vs. LQG [58, 59] and Causal Sets [52–54, 97]: Shares open 3+1 off-shell Dirac anomaly challenges with LQG while uniting pure Horndeski gravity with smeared Krein causal-set convergence [97].',
          '5. Publication Split Roadmap: Chapters 2, 4, 5 & Appendices A–D, L form a standalone Foundations paper, while Chapters 3, 6, 7 & Appendices E–K form a Phenomenology paper awaiting independent CAMB/hi_class + Cobaya fits.'
        ]
      },
      {
        number: '8.2',
        anchorId: 'sec-8-2',
        title: 'Regime-Boundary Separation Across Effective Field Theory Cutoffs',
        epistemicStatus: 'Consistency',
        paragraphs: [
          'Sharp scale separation ensures EFT consistency across all verified regimes (reproduced numerically by scripts/verify-igrt-monograph.mjs):',
          '1. Inertial & Unruh Modular Clock Scales (E_mod): Piecewise E_mod = max(ℏω_0, 2π k_B T_U) ensures well-defined dτ = dt at a = 0 (Worked Example 2.1) and smooth x → 0 saturation σ_1 → 1 at horizons (Eq. 4.2).',
          '2. Terrestrial Screening Z_ψ = 7.05 × 10¹⁴ & Dressed Cutoff Λ_local = 4.67 μeV: Solar Vainshtein screening (r_V = 369.8 ly at H_0 = 70) suppresses |γ_PPN − 1| = 1.77 × 10⁻¹¹ (1 AU) and 2.91 × 10⁻⁹ (30 AU). On Earth (r_{V,⊕} = 5.33 ly), cubic-Galileon renormalization Z_ψ = 7.05 × 10¹⁴ lifts the local cutoff to Λ_local = Z_ψ^{1/2} Λ_3 = 4.67 μeV (4.2 cm), isolating Galileons from sub-mm Casimir chambers and delegating P5 CANNEX tests (ΔP_Ch ~ 10⁻¹⁰–2 × 10⁻⁹ N/m²) to A_F^{H10}-embedded Chameleon φ_Ch (M_Ch ≈ 2.4 meV).',
          '3. Explicit Five-Scalar Mass Hierarchy: Non-shift-symmetric Araki modulus ψ ≥ 0, slow-rolling KG dark energy φ_DE (m_DE = 1.94 × 10⁻³³ eV), input sub-dominant ULDM φ_osc (2.65 × 10⁻²³ eV, f_DM ≤ 0.02), short-range Chameleon φ_Ch (2.4 meV), and HL-LHC portal Φ_portal (1.84 TeV).',
          '4. Joint Dual-Clock + PTA Red-Noise Precision: Realistic clock flicker + drift combined with IPTA red noise bounds 2:1 monopole confirmation to 2.00 ± 0.25 (5 yr) and 2.00 ± 0.08 (15 yr).'
        ]
      },
      {
        number: '8.3',
        anchorId: 'sec-8-3',
        title: 'Comprehensive Conclusions',
        epistemicStatus: 'Consistency',
        paragraphs: [
          '1. Diffeomorphism-Invariant 4D Bundle Architecture: IGRT unifies continuum information-gravity [1] and discrete RES=RAG steps [2, 3] over (M, g_μν) using trivial principal bundle P(M, PU(H)) over H = L²(S¹, dμ) ⊗ H_matter and associated split Type I state bundle E_stat = P ×_{PU(H)} S(N), deriving ADM WDW constraint Eq. (1.1) and preserving 4D Lorentzian geometry on outer and truncated physical domains.',
          '2. Rigorously Qualified Mathematical Core: Established results (Petz Thm 6 SLD [16], Šafránek boundary caveats [92], Carlen–Maas detailed-balance BKM flow [99, 100], Spohn [93], Bisognano–Wichmann [48]) are cleanly separated from H10 closures: discrete unbounded S¹ clock spectrum 2πk/L with Landau–Zener k>0 decay exp(−3.14×10²⁰), Doplicher–Longo split bound 9.72×10⁻¹⁰², 5-mode A_F^{H10} embedding (|ε_{ψ,Ch}| = 4.42×10⁻¹⁶), 1-loop Wetterich FRG fixed point (g_* = 1.3105, λ_* = 0.1440), CDT flow d_s = 3.989 → 2.002, linearized L_UV Dirac closure, smeared Krein convergence [97], Schwinger–Keldysh / CHM κ_ψ = 2.173 × 10⁻²¹ GeV⁻¹ ansatz, and TOV NS (2.35 M_⊙, Λ_{1.4} = 339).',
          '3. Two-Stage Bounce & Derived Hayward ξ_0 Closures: Explicit L_UV preceded by w_ekp = 2.0 dilutes BKL shear to 4.0×10⁻¹⁵ before ρ_max = 0.4094 ρ_Pl (9.10 × 10⁷⁵ GeV⁴), T_reh = 3.40 × 10¹⁰ GeV, and η_B = 6.13 × 10⁻¹⁰; tuned input w_contract = −0.003 yields n_s = 0.964, red n_T = −0.036, α_s = −3.6×10⁻⁵, r = 0.0123, and canonical f_NL^{eq} = −4.38 [96]. Equating K_Hayward(0) = K_max = 48/ℓ_Pl⁴ derives ξ_0 = 2⁻¹/⁴ (M_rem = 1.092 M_Pl = 2.38 × 10⁻⁸ kg); 1+1D Hayward–Vaidya evaporation keeps κ_− ℓ_0 ≤ 0.9294 < 1, axisymmetric Kerr–Hayward satisfies κ_− ℓ_0 ≤ 0.6639 < 1, RN–Hayward 0.2614 < 1, and superradiance gain 0.2048 < 1 while QES extremization bounds S_rem = 6.66 nats under QFC-conditional GSL.',
          '4. Audited Empirical Frontier & Preregistration (P1–P6): Protocols P1–P6 provide Fisher-audited exclusion thresholds (SNR 4.7–25.1; SHA-256 7463d727…) across dual clocks + IPTA monopole (f_DM ≤ 0.02), 1.028 μm silica spheres (Γ_Araki = 1.18 s⁻¹), LiteBIRD/SO + DESI DR2 (S_8 = 0.822–0.847, |β_lin| ≤ 0.25, τ_re = 0.0537, Δχ² = +4.41), LVK/3G echoes (K_echo = 0.18), CANNEX Chameleon pressure, and HL-LHC Φ_portal / κ_Z tests.'
        ],
        equation: {
          label: '(8.1)',
          status: 'Consistency',
          unicodeHtml:
            '<i>Z</i><sub>IGRT</sub> = ∫ 𝒟<i>g</i> 𝒟ψ 𝒟φ 𝒟<i>A</i> exp[ (<i>i</i>/ℏ) <i>S</i><sub>IGRT</sub> ] &nbsp;→<sup>EFT</sup>&nbsp; (<i>M</i><sub>3+1</sub>, <i>g</i><sub>μν</sub>, ∇<sup>μ</sup>(<i>T</i><sub>μν</sub> + <i>I</i><sub>μν</sub>) ≡ 0)',
          plainText:
            'Z_IGRT = ∫ Dg Dψ Dφ DA exp[(i/ℏ) S_IGRT] → (M_{3+1}, g_μν, ∇^μ(T_μν+I_μν) ≡ 0)',
          caption:
            'Semiclassical EFT saddle consistency yielding covariant 4D all-orders conservation and testable Protocols P1–P6.'
        },
        bulletPoints: [
          {
            label: 'Epistemic Separation (Table 8.3)',
            text: 'Distinguishes Established theorems [15, 16, 92, 93, 99, 100] from Derived/Consistency closures and Ansätze/Inputs.'
          },
          {
            label: 'Exact Verified Numbers',
            text: 'ξ_0 = 2⁻¹/⁴ (M_rem = 1.092 M_Pl), TOV M_max = 2.35 M_⊙ (Λ_{1.4} = 339), S_8 = 0.8216–0.8466, BKL shear 4.0×10⁻¹⁵.'
          },
          {
            label: 'H10 Preregistration Digest',
            text: 'Protocols P1–P6 Fisher SNRs (4.7–25.1) locked under SHA-256 7463d7273d121f56974978982eb476855773759bb5c886c8a4d650562cd3968a.'
          },
          {
            label: 'Open Follow-Up Program',
            text: 'Full 3D CAMB/hi_class + Cobaya MCMC, inhomogeneous 3+1 quantum Dirac closure, and 3+1D merger BSSN NR (OP-1..5).'
          }
        ]
      },
      {
        number: '8.4',
        anchorId: 'sec-8-4',
        title: 'Guide to Supporting Technical Appendices (Appendices A–L)',
        epistemicStatus: 'Established',
        paragraphs: [
          'Appendices A–L contain full formal derivations, corrected diamond scaling, qubit numerical verification, QES extremization, joint dual-clock + PTA noise modeling, H_0 parameter propagation, automated register Table H.1, Monograph Revision Registry, and H10 perturbative cosmology & microscopic UV/strong-field closures:'
        ],
        bulletPoints: [
          {
            label: 'Appendix A — Explicit Cubic-Galileon & Jordan–Einstein Bianchi Check',
            text: 'Verifies exact all-orders cancellation ∇^μ(T_μν + I_μν) ≡ 0 including cubic-Galileon [∇_μ, ∇_ν]∇^μ ψ commutators.'
          },
          {
            label: 'Appendix B — Petz Thm 6, Šafránek Caveat & Commuting Amari Submanifolds',
            text: 'Details rank-preserving 4 g_FS convergence, S³ single-qubit vs. multi-parameter limits, and Amari commuting submanifolds.'
          },
          {
            label: 'Appendix C — Matter-Diamond Scaling, Schwinger–Keldysh & CHM κ_ψ Ansatz',
            text: 'Derives ΔK_V = 8π²r⁴/(15ℏc) Δ⟨T_00⟩, Schwinger–Keldysh 1PI Galileon counterterm, and κ_ψ = 2.173×10⁻²¹ GeV⁻¹.'
          },
          {
            label: 'Appendix D — Split Type I Bound (9.72×10⁻¹⁰²), Single-Mode σ_1 & E_mod',
            text: 'Establishes Doplicher–Longo split nuclearity bound, piecewise E_mod = ℏω_0 at a = 0, and local adiabatic KMS diamonds.'
          },
          {
            label: 'Appendix E — Ekpyrotic–L_UV Bounce, 1+1D Hayward–Vaidya & TOV Stars',
            text: 'Derives 2-stage BKL shear 4.0×10⁻¹⁵, ξ_0 = 2⁻¹/⁴, 1+1D max(κ_− ℓ_0) = 0.9294, TOV 2.35 M_⊙ / Λ_{1.4} = 339, and QES O(ℏ/(Mc)).'
          },
          {
            label: 'Appendix F — Dual-Clock/PTA Cramér–Rao & P1–P6 Fisher SNRs',
            text: 'Derives joint 2.00 ± 0.25 (5 yr) / ± 0.08 (15 yr), R_0 = 1.028 μm SiO₂, and P1–P6 Fisher SNR matrix (4.7–25.1).'
          },
          {
            label: 'Appendix G — CODATA 2022 Constants & H_0 = 67.4–73.0 Propagation',
            text: 'Propagates G (22 ppm) and H_0 uncertainties across Λ_3, r_V, r_{V,⊕}, Z_ψ, Λ_local, c_2 > 0 positivity, and ρ_max.'
          },
          {
            label: 'Appendix H — Reproducible Numerical Closure Register (Table H.1)',
            text: 'Documents every numerical entry and ODE/solver output verified deterministically by scripts/verify-igrt-monograph.mjs.'
          },
          {
            label: 'Appendix I — Monograph Revision Registry (H6 → H10) & Open Problems',
            text: 'Formally logs H6 → H7 → H8 → H9 → H10 revisions, Response to Reviewers R1–R8, and narrowed Open Problems OP-1 through OP-5.'
          },
          {
            label: 'Appendix J — Global Internal Consistency, SHA-256 Digest & Reproducibility',
            text: 'Cross-checks units, A_F^{H10} packaging, strong-field solvers, Fisher SNRs, and SHA-256 digest 7463d727… across View/HTML/PDF.'
          },
          {
            label: 'Appendix K — Perturbative Cosmology, Reionization τ_re, η_B & Joint MCMC',
            text: 'Computes τ_re = 0.0537, ℓ_A = 300.31, A_L, E_G, Ly-α −3.96%, leptogenesis η_B = 6.13×10⁻¹⁰, and Δχ² = +4.41 (Δln Z = −3.52).'
          },
          {
            label: 'Appendix L — Kerr/RN–Hayward, Wetterich FRG, 5-Mode A_F^{H10} & CDT d_s',
            text: 'Solves rotating Kerr–Hayward (κ_− ℓ_0 ≤ 0.6639), RN–Hayward (0.2614), superradiance gain (0.2048), FRG fixed point (1.3105, 0.1440), & d_s: 3.989→2.002.'
          }
        ]
      }
    ]
  }
];

export const AUDITED_TEST_PROTOCOLS: AuditedProtocol[] = [
  {
    id: 1,
    name: 'Dual-Species Optical Clock + IPTA Isotropic Monopole 2:1 Search',
    targetPhenomenon: 'Input ULDM φ_osc (m_osc = 2.65×10⁻²³ eV, f_DM ≤ 0.02) driving f_PTA = 2 f_clock',
    facility: 'IPTA / NANOGrav [79–82, 102] & Dual-Species ⁸⁷Sr/¹⁷¹Yb Optical Clocks [83, 84, 106]',
    epistemicStatus: 'Input',
    formulaHtml: '<i>m</i><sub>osc</sub> = <i>h f</i><sub>clock</sub>/<i>c</i><sup>2</sup> = 2.65 × 10<sup>−23</sup> eV (<i>f</i><sub>DM</sub> ≤ 0.02), &nbsp; <i>f</i><sub>PTA</sub><sup>(<i>Y</i><sub>00</sub>)</sup> = 2<i>f</i><sub>clock</sub> = 12.8 nHz',
    formulaPlain: 'm_osc = h f_clock/c² = 2.65×10⁻²³ eV (f_DM ≤ 0.02), f_PTA^(Y_00) = 2 f_clock = 12.8 nHz',
    predictedSignal:
      'Coherent 12.8 nHz isotropic MONOPOLE (Y_{00}) PTA timing residual paired with 6.4 nHz dual-clock differential modulation ε_0 = Δβ_eff(φ_0/M̄_Pl); joint ratio 2.00 ± 0.25 (5 yr) / ± 0.08 (15 yr).',
    baseline:
      'Null ULDM / standard GW background predicts zero coherent monopole cross-correlation with local optical atomic frequency ratios.',
    noiseAndAuditNote:
      'f_DM ≤ 0.02 satisfies Lyman-α/dwarf limits at λ_dB = 2.07 kpc [102]; accounts for clock flicker (~10⁻¹⁸), random-walk drift, PTA S_red ∝ f⁻¹³/³, GP modeling, look-elsewhere, and generic quadratic ULDM caveat; Fisher 15-yr SNR = 25.1.',
    falsificationCriterion:
      'Exclusion of Δβ_eff > 3×10⁻¹⁰ (at f_DM = 0.02) across differential ⁸⁷Sr/¹⁷¹Yb clocks or isotropic monopole excess in 15-yr synchronous IPTA–clock datasets.'
  },
  {
    id: 2,
    name: 'Macroscopic 1.028 μm Silica Nanosphere Araki Decoherence Test',
    targetPhenomenon: 'Enhanced DP rate η_Araki = κ_ψ / κ_0 = 4/3 ≈ 1.33 at exact 10⁻¹⁴ kg silica radius',
    facility: 'Levitated 10⁻¹⁴ kg SiO₂ Interferometers (future roadmap) & 10-m VLBAI [85, 103]',
    epistemicStatus: 'Ansatz',
    formulaHtml: '<i>R</i><sub>0</sub> = 1.028 μm (10<sup>−14</sup> kg SiO<sub>2</sub>), &nbsp; Γ<sub>Araki</sub> = (4/3) Γ<sub>DP</sub> ≈ 1.18 s<sup>−1</sup> (Δ<i>x</i> = 180 nm)',
    formulaPlain: 'R_0 = 1.028 μm (10⁻¹⁴ kg SiO₂), Γ_Araki = (4/3) Γ_DP ≈ 1.18 s⁻¹ (Δx = 180 nm)',
    predictedSignal:
      'Overlapping-sphere gravitational self-energy integration at R_0 = 1.028 μm gives Γ_DP = 0.883 s⁻¹ and Γ_Araki = 1.18 s⁻¹ at Δx = 180 nm (0.281 / 0.375 s⁻¹ at Δx = 100 nm; Fisher SNR = 23.5 vs. 0.05 s⁻¹ UHV floor).',
    baseline: 'Standard unitary quantum mechanics predicts zero intrinsic gravitational decoherence beyond UHV gas collisions and BBR.',
    noiseAndAuditNote: 'Benchmark ratio κ_ψ/κ_0 = 4/3 reflects ansatz choices of κ_ψ and κ_0 (with G scaling via β²/M̄_Pl²); currently ~4 orders beyond superposition records; compared to Donadi et al. [103].',
    falsificationCriterion:
      'Coherence visibility > 90% over Δt > 2 s in future 10⁻¹⁴ kg SiO₂ interferometry at Δx ≥ 180 nm, excluding Γ_Araki > 0.05 s⁻¹.'
  },
  {
    id: 3,
    name: 'Primordial B-Modes (r, Red n_T, f_NL), Linear Growth S_8 & DESI DR2',
    targetPhenomenon: 'Bounce transfer (n_s, red n_T = −0.036, α_s = −3.6×10⁻⁵, r = 0.0123), KG w(z) & linear S_8(β)',
    facility: 'Simons Observatory [87], LiteBIRD [86], DESI DR2 + CMB + SN [74], KiDS/DES',
    epistemicStatus: 'Derived',
    formulaHtml: '<i>n</i><sub>T</sub> = −0.036 (red), &nbsp; <i>r</i> = 24<i>c</i><sub>s</sub><sup>3</sup> = 0.0123, &nbsp; <i>w</i><sub>0</sub> = −0.908, <i>w</i><sub><i>a</i></sub> = −0.177, &nbsp; <i>S</i><sub>8</sub> = 0.822–0.847',
    formulaPlain: 'n_T = −0.036 (red), r = 24c_s³ = 0.0123, w_0 = −0.908, w_a = −0.177, S_8 = 0.822–0.847',
    predictedSignal:
      'Tuned w_contract = −0.003 gives n_s = 0.964, red n_T = −0.036, α_s = −3.6×10⁻⁵, r = 0.0123 (LiteBIRD SNR 12.3), canonical f_NL^{eq} = −4.38; KG+growth ODEs give w_0 = −0.908, w_a = −0.177, S_8 = 0.8216–0.8466 (|β_lin| ≤ 0.25), D_M/r_d −0.82%..−1.16%, R_shift −0.428%.',
    baseline: 'Single-field inflation satisfies r = −8 n_T (here r ≈ −0.34 n_T); ΛCDM fixes w_0 = −1, w_a = 0, S_8 = 0.8310.',
    noiseAndAuditNote: 'LiteBIRD + SO σ(r) ≈ 0.001 cleanly probes r = 0.0123; canonical f_NL = −4.38 lies beneath Planck ±47; linear growth ODE bounds |β_lin| ≤ 0.25; full 3D CAMB/Cobaya fits open (OP-1).',
    falsificationCriterion:
      'Exclusion of r ∈ [0.004, 0.025] by LiteBIRD/SO, OR sustained >3σ confirmation of dark-energy phantom crossing / steep slope w_a < −0.4 by DESI DR2+Euclid.'
  },
  {
    id: 4,
    name: 'Regular Black-Hole Ringdown Echoes vs. O1–O3 Null Bounds',
    targetPhenomenon: 'Post-merger echoes off near-horizon layer r_+ + δr compatible with |H| = 1',
    facility: 'LIGO–Virgo–KAGRA (O1–O3 priors & O5), Cosmic Explorer [88], Einstein Telescope [89]',
    epistemicStatus: 'Input',
    formulaHtml: 'Δ<i>t</i><sub>echo</sub> = (2<i>r</i><sub>s</sub>/<i>c</i>) ln(<i>r</i><sub>s</sub>/ℓ<sub>0</sub>), &nbsp;&nbsp; <i>K</i><sub>echo</sub> = |<i>R</i><sub>eff</sub>| ≈ 0.18 &nbsp;(|<i>R</i><sub>eff</sub>|<sup>2</sup> + |<i>T</i><sub>int</sub>|<sup>2</sup> = 1)',
    formulaPlain: 'Δt_echo = (2r_s/c) ln(r_s/ℓ_0),  K_echo = |R_eff| ≈ 0.18 (|R_eff|² + |T_int|² = 1)',
    predictedSignal:
      'Logarithmic echo delay Δt_echo = 17.8 ms (10 M_⊙) and 109.2 ms (60 M_⊙) for derived ℓ_0 = 2⁻¹/⁴ ℓ_Pl with input partial barrier reflectivity K_echo = |R_eff| ≈ 0.18 (CE stacking Fisher SNR = 9.0).',
    baseline: 'Classical Kerr horizons have strictly ingoing boundary conditions with zero secondary echoes.',
    noiseAndAuditNote: 'Current LVK O1–O3 searches place weak ~0.1–0.3 bounds depending on phase template; O5/CE/ET coherent stacking reaches |R_eff| ≈ 0.02 sensitivity.',
    falsificationCriterion:
      'Upper bound |R_eff(ω_QNM)| < 0.03 across Δt_echo ∈ [10 ms, 150 ms] in coherently stacked 3G CE/ET mergers at SNR > 100.'
  },
  {
    id: 5,
    name: 'CANNEX Short-Range Chameleon Force Metrology vs. PPN Screening',
    targetPhenomenon: 'Chameleon pressure ΔP_Ch (M_Ch = 2.4 meV) cleanly separated from Z_ψ = 7.05×10¹⁴ Galileon',
    facility: 'CANNEX Parallel-Plate Experiment [98, 104], Eöt-Wash & Planetary Tracking [46, 47]',
    epistemicStatus: 'Ansatz',
    formulaHtml: '<i>m</i><sub>eff</sub><sup>2</sup>(ρ) = <i>V</i>″(φ<sub>Ch</sub>) + (β<sub>Ch</sub><sup>2</sup>/<i>M</i><sub>Pl</sub><sup>2</sup>)ρ, &nbsp; Δ<i>P</i><sub>Ch</sub> ~ 10<sup>−10</sup>–2 × 10<sup>−9</sup> N/m<sup>2</sup>; &nbsp; Λ<sub>local</sub> = 4.67 μeV',
    formulaPlain: 'm_eff²(ρ) = V″(φ_Ch) + (β_Ch²/M_Pl²)ρ, ΔP_Ch ~ 10⁻¹⁰–2×10⁻⁹ N/m²; Λ_local = 4.67 μeV',
    predictedSignal:
      'CANNEX vacuum-gap pressure excess ΔP_Ch ~ 0.1–2 nN/m² = 10⁻¹⁰–2×10⁻⁹ N/m² (10 μm–1 cm, Fisher SNR ≥ 10.0) for M_Ch ≈ 2.4 meV; Solar-System Galileon gives |γ_PPN−1| = 1.77×10⁻¹¹ (1 AU) / 2.91×10⁻⁹ (30 AU).',
    baseline: 'Pure QED Casimir pressure + GR predict zero Chameleon Yukawa force excess across 10 μm–1 cm.',
    noiseAndAuditNote: '10⁻¹⁰–2×10⁻⁹ N/m² exceeds CANNEX ~10⁻¹¹–10⁻¹² N/m² noise floor; Galileon Z_ψ = 7.05×10¹⁴ lifts local cutoff to 4.67 μeV (4.2 cm); mapped to Burrage–Sakstein [104], while unobservable 10⁻²¹ clock-redshift claims below transportable optical lattice limits [90] are retracted.',
    falsificationCriterion:
      'Null non-Newtonian pressure |ΔP_Ch| < 10⁻¹¹ N/m² across d ∈ [10 μm, 1 cm] excludes the M_Ch = 2.4 meV, β_Ch ≥ 1 Chameleon sector.'
  },
  {
    id: 6,
    name: 'HL-LHC Higgs-Portal Φ_portal & κ_Z Precision Consistency Check',
    targetPhenomenon: 'Spectral portal Φ_portal (m_portal = 1.84 ± 0.18 TeV) probed via sin θ_H & quartic λ_mix',
    facility: 'CERN HL-LHC ATLAS & CMS (√s = 14 TeV, 3000 fb⁻¹ [91])',
    epistemicStatus: 'Input',
    formulaHtml: '<i>m</i><sub>portal</sub> = √(2λ<sub>Φ</sub>) <i>v</i><sub>Φ</sub> ≈ 1.84 ± 0.18 TeV, &nbsp; δσ<sub><i>Zh</i></sub> &gt; 1.5% &nbsp;vs.&nbsp; κ<sub><i>Z</i></sub> ≈ 1.5% (1σ)',
    formulaPlain: 'm_portal = √(2λ_Φ) v_Φ ≈ 1.84 ± 0.18 TeV, δσ_Zh > 1.5% vs. κ_Z ≈ 1.5% (1σ)',
    predictedSignal:
      'For assumed EFT inputs (λ_Φ, v_Φ) and sin θ_H ∈ [0.04, 0.08], gg → Φ_portal → hh/VV gives σ ≈ 0.18–0.70 fb (Fisher 4.7σ reach); quartic portal λ_mix |H|² Φ_portal² induces δσ_Zh > 1.5% & VBF pair production.',
    baseline: 'Standard Model predicts smooth non-resonant hh/VV spectra and SM tree/1-loop σ_Zh.',
    noiseAndAuditNote: 'δσ_Zh > 1.5% sits right at the HL-LHC κ_Z ≈ 1.5% (1σ) coupling sensitivity [91]; model evades P6 completely if both sin θ_H ≪ 0.02 and |λ_mix| ≪ 0.25.',
    falsificationCriterion:
      'Joint exclusion of σ(pp → Φ_portal → hh/VV) > 0.15 fb at 1.66–2.02 TeV AND |δσ_Zh| < 1.5% (95% CL) constrains the assumed detectable portal benchmark.'
  }
];

export const AUDITED_CLOSURE_THEOREMS: {
  id: number;
  title: string;
  domain: string;
  status: EpistemicStatus;
  summary: string;
}[] = [
  {
    id: 1,
    title: 'Established Result 2.1 — Petz Thm 6 SLD Uniqueness & Šafránek Caveat',
    domain: 'Information Geometry (App. B)',
    status: 'Established',
    summary: 'Cites Morozova–Chentsov–Petz Thm 6 [16], states Šafránek rank-change discontinuity [92], S³ qubit scope, and commuting Amari submanifolds.'
  },
  {
    id: 2,
    title: 'Theorem 3.1 — Pure Horndeski Type Ia & Solar/Pulsar Vainshtein PPN Closure',
    domain: 'Covariant Modified Gravity (Thm 3.1, §3.4)',
    status: 'Derived',
    summary: 'Type Ia c_GW=c, r_V = 369.8 ly, Z_ψ = 7.05×10¹⁴, Λ_local = 4.67 μeV (c_2 > 0 positivity), |γ_PPN−1| = 1.77×10⁻¹¹, TOV NS M_max = 2.35 M_⊙, Λ_{1.4} = 339 < 580, PSR J0737-3039 suppression 3.44×10⁻¹⁵.'
  },
  {
    id: 3,
    title: 'Theorem 4.1 & Eq. (4.1) — Split KMS Dispersion & Jacobi–Finsler Ansatz',
    domain: 'Algebraic Metrology (§4.1–4.2, App. D)',
    status: 'Ansatz',
    summary: 'Doplicher–Longo split bound 9.72×10⁻¹⁰²; E_mod = ℏω_0 (a=0) and M = 1 mode σ_1 ∈ (0, 1]; qubit Uhlmann convergence verified to 2×10⁻⁸.'
  },
  {
    id: 4,
    title: 'Eq. (5.1) — Born–Oppenheimer S¹ Spectrum, Wetterich FRG & CDT Spectral Flow',
    domain: 'Canonical Unfreezing & UV Safety (§5.1–5.2, App. L)',
    status: 'Derived',
    summary: 'Spec(H_Fisher) = {E_mod σ_1(2πk/L)} (LZ exp(−3.14×10²⁰)), midisuperspace Dirac β_LUV = 1−2ρ/ρ_max, Wetterich FRG (g_*=1.3105, λ_*=0.1440, θ=4.835), Borel 0.9126, CDT d_s: 3.989→2.002, A_F^{H10} |ε_{ψ,Ch}|=4.42×10⁻¹⁶.'
  },
  {
    id: 5,
    title: 'Appendix A & K — All-Orders Bianchi, τ_re, η_B & Joint Cosmological Likelihood',
    domain: 'Covariant Gravity & Cosmology (App. A, K)',
    status: 'Derived',
    summary: 'Noether ∇^μ(T_μν + I_μν) ≡ 0, τ_re = 0.0537, ℓ_A = 300.31, A_L = 0.977–1.030, E_G = 0.415, Ly-α −3.96%, leptogenesis η_B = 6.13×10⁻¹⁰, joint Δχ² = +4.41 & Laplace Δln Z = −3.52.'
  },
  {
    id: 6,
    title: 'Established Result 5.1 — Detailed-Balance BKM Flow & General Spohn Bound',
    domain: 'Quantum Thermodynamics (§5.3)',
    status: 'Established',
    summary: 'Restricts exact relaxation-weighted BKM flow (d/dτ)S_Araki = −g̃_ij^BKM θ̇^i θ̇^j strictly to KMS detailed-balance semigroups [99, 100]; general CPTP obeys [93].'
  },
  {
    id: 7,
    title: 'Theorem 6.1 & Derived ξ_0 — Ekpyrotic Bounce, Kerr/RN–Hayward & Superradiance',
    domain: 'Singularity Regularization (§6, App. E, L)',
    status: 'Derived',
    summary: '2-stage ekpyrotic bounce (BKL shear 4.0×10⁻¹⁵), derived ξ_0 = 2⁻¹/⁴ (M_rem = 1.092 M_Pl), 1+1D Hayward–Vaidya (0.9294), axisymmetric Kerr–Hayward (≤0.6639), RN–Hayward (0.2614), superradiance gain (0.2048 < 1), QES S_rem = 6.66 nats.'
  }
];

export const PAPER_APPENDICES: PaperAppendix[] = [
  {
    letter: 'A',
    anchorId: 'appendix-a',
    title: 'All-Orders Jordan–Einstein Bianchi Consistency & Cubic-Galileon Commutators',
    tag: 'Noether Consistency Check',
    status: 'Consistency',
    theoremStatement:
      'To all non-perturbative orders in Ω(ψ) = exp(βψ/M_Pl), minimal matter coupling to g̃_μν = Ω²(ψ) g_μν satisfies exact Einstein-frame stress-energy conservation ∇^μ(T_μν + I_μν) ≡ 0 on-shell.',
    proofParagraphs: [
      'Step 1 (All-Orders Jordan–Einstein Matter Divergence): Define g̃_μν = Ω²(ψ) g_μν with Ω(ψ) = exp(βψ/M_Pl) and minimally coupled matter action S_matter[g̃_μν, Ψ_m]. Matter diffeomorphism invariance in the Jordan metric guarantees ∇̃^μ T̃_μν = 0.',
      'Step 2 (Exact Conformal Connection Shift): Using √(−g̃) = Ω⁴ √(−g), T_μν = Ω² T̃_μν, and exact Christoffel difference ΔΓ^λ_{μν} = (δ^λ_μ ∂_ν + δ^λ_ν ∂_μ − g_μν g^{λσ} ∂_σ) ln Ω transforms ∇̃_μ T̃^μ_ν = 0 identically to all orders into ∇^μ T_μν = +(β/M_Pl) T^α_α ∇_ν ψ.',
      'Step 3 (Explicit Cubic-Galileon Covariant Commutator Cancellation): For G_3 = −(γ/2Λ_3³)(∇ψ)², the Horndeski energy-momentum contribution is I_μν^{(3)} = (γ/Λ_3³)[−∇_μψ ∇_νψ □ψ − ∇_{(μ}ψ ∇_{ν)}(∇ψ)² + ½ g_μν ∇^αψ ∇_α(∇ψ)²]. Applying ∇^μ and commuting third covariant derivatives via [∇_μ, ∇_ν]∇^μ ψ = R_μν ∇^μ ψ plus [∇_μ, ∇_α]∇^μ ψ = R_αβ ∇^β ψ cancels all third-order curvature terms and factors directly into (δS_grav+ψ/δψ) ∇_ν ψ. Applying the scalar Euler–Lagrange equation (δS_grav+ψ/δψ) + √(−g)(β/M_Pl) T^α_α = 0 seals ∇^μ I_μν = −(β/M_Pl) T^α_α ∇_ν ψ and hence ∇^μ(T_μν + I_μν) ≡ 0 identically.'
    ],
    equations: [
      {
        label: '(A.1)',
        unicodeHtml:
          '<i>g̃</i><sub>μν</sub> = <i>e</i><sup>2βψ/<i>M</i><sub>Pl</sub></sup> <i>g</i><sub>μν</sub>, &nbsp; [∇<sub>μ</sub>, ∇<sub>ν</sub>]∇<sup>μ</sup>ψ = <i>R</i><sub>μν</sub>∇<sup>μ</sup>ψ &nbsp;⇒&nbsp; ∇<sup>μ</sup>(<i>T</i><sub>μν</sub> + <i>I</i><sub>μν</sub>) ≡ 0',
        plainText:
          'g̃_μν = e^{2βψ/M_Pl} g_μν,  [∇_μ, ∇_ν]∇^μ ψ = R_μν ∇^μ ψ ⇒ ∇^μ(T_μν + I_μν) ≡ 0'
      }
    ]
  },
  {
    letter: 'B',
    anchorId: 'appendix-b',
    title: 'Petz Theorem 6 SLD Uniqueness, Šafránek Caveat & Commuting Amari Submanifolds',
    tag: 'Information Geometry',
    status: 'Established',
    theoremStatement:
      'On invertible split Type I states S(N)_+, f_SLD(t) = (1+t)/2 fixes Eq. (2.1); rank-changing boundary paths obey Šafránek’s discontinuity [92], and Amari dual-flatness holds strictly on mutually commuting submanifolds [17].',
    proofParagraphs: [
      'By Petz (1996) Theorem 6 [16], symmetric monotone metrics take spectral form g_ρ(X, Y) = ∑_{m,n} [1/(p_n f(p_m/p_n))] ⟨m|X|n⟩ ⟨n|Y|m⟩. Choosing f_SLD(t) = (1+t)/2 gives c(p_m, p_n) = 2/(p_m + p_n), reproducing g_ij^QFI = 4 g_ij^Bures.',
      'Rank-Change Caveat & Commuting Submanifolds: Diagonal terms ∑_k (∂_i p_k)(∂_j p_k)/p_k vanish cleanly only along rank-preserving unitary flows (∂_i p_k = 0); radial purity paths across det ρ = 0 trigger Šafránek’s discontinuity [92] unless mapped to hyperspherical square-root coordinates √p_k (such as r = sin α on S³ for a single-purity qubit). Moreover, Amari’s torsion-free dual-flat connections (∇^{(+1)}, ∇^{(-1)}) strictly apply to mutually commuting exponential/mixture families [17], whereas non-commuting Bures geometry is curved.'
    ],
    equations: [
      {
        label: '(B.1)',
        unicodeHtml:
          '<i>g</i><sub><i>ij</i></sub><sup>QFI</sup> = ∑<sub><i>k</i></sub> (∂<sub><i>i</i></sub><i>p</i><sub><i>k</i></sub> ∂<sub><i>j</i></sub><i>p</i><sub><i>k</i></sub> / <i>p</i><sub><i>k</i></sub>) + ∑<sub><i>m</i>≠<i>n</i></sub> [ 2(<i>p</i><sub><i>m</i></sub> − <i>p</i><sub><i>n</i></sub>)<sup>2</sup>/(<i>p</i><sub><i>m</i></sub>+<i>p</i><sub><i>n</i></sub>) ] Re(⟨∂<sub><i>i</i></sub><i>m</i>|<i>n</i>⟩⟨<i>n</i>|∂<sub><i>j</i></sub><i>m</i>⟩) &nbsp;→<sub>∂<i>p</i>=0</sub>&nbsp; 4 <i>g</i><sub><i>ij</i></sub><sup>FS</sup>',
        plainText:
          'g_ij^QFI = ∑_k (∂_i p_k ∂_j p_k / p_k) + ∑_{m≠n} [2(p_m−p_n)²/(p_m+p_n)] Re(⟨∂_i m|n⟩⟨n|∂_j m⟩) →_{∂p=0} 4 g_ij^FS'
      }
    ]
  },
  {
    letter: 'C',
    anchorId: 'appendix-c',
    title: 'Matter-Diamond Scaling, Corrected 2π/Heat-Kernel Ansatz & Free-Scalar Check',
    tag: 'Planck Normalization Ansatz',
    status: 'Ansatz',
    theoremStatement:
      'On causal diamonds V(ℓ_CG) of minimally coupled matter fields, ψ_vac = 0 and S_Araki(V_r) ~ O((ΔK_V)²) on smooth states; Planck normalization κ_ψ = ℏc ℓ_Pl/(12π) = 1.355 × 10⁻⁶² J·m² = 2.173 × 10⁻²¹ GeV⁻¹ is a calibrated ansatz.',
    proofParagraphs: [
      'Step 1 (Algebra, Vacuum Zero & Exact 8π²/(15ℏc) Radial Integral): Let A(V_r(x)) be the local Weyl algebra of a minimally coupled free scalar field in causal diamond V_r(x) comparing Hadamard state ρ_V against conformal vacuum σ_V. Trivially ψ_vac = 0 because S_Araki(σ_V ‖ σ_V) = 0. On any smooth state with uniform stress perturbation Δ⟨T_00⟩, the Casini–Huerta–Myers / Bisognano–Wichmann diamond modular expectation integrates explicitly over the 3-ball as ΔK_V = (2π/ℏc) ∫_0^r [(r² − y²)/(2r)] · 4π y² dy Δ⟨T_00⟩ = (4π² / (r ℏc))(r⁵/3 − r⁵/5) Δ⟨T_00⟩ = (8π² r⁴ / (15 ℏc)) Δ⟨T_00⟩, fixing the missing factor of 2 cleanly (geometric 3-ball average 2/5 relative to Vol_3(V_r) = (4/3)π r³).',
      'Step 2 (Honest Correction of 2π Inversion, R/6 Heat-Kernel & Planck vs. ℓ_CG Choice): Notice three technical clarifications: (a) 2π appears in the numerator of ΔK_V, putting 1/(2π) in stress recovery alongside diamond radial factor 2/5 (NOT 1/6, which is the curved-space Seeley–DeWitt a_1 = R/6 conformal curvature coefficient rather than a Δ⟨T_00⟩ factor!); (b) because Vol_3(V_r) ~ r³, extracting modulus ψ² [J/m] from S_Araki/Vol_3 [m⁻³] requires a proportionality constant of dimension [J·m²]; and (c) choosing ℓ_Pl in κ_ψ = ℏc ℓ_Pl/(12π) = 1.3554 × 10⁻⁶² J·m² = 2.1727 × 10⁻²¹ GeV⁻¹ over the available detector scale ℓ_CG⁻¹ keeps κ_ψ a universal field constant rather than an experiment-specific radius, yet remains strictly a Planck-scale phenomenological ansatz (contrasting with the earlier 10⁻²⁰ GeV⁻¹ arithmetic typo). Moreover, converting SI → GeV⁻¹ via 1 J·m² = (6.2415 × 10⁹ GeV) · (5.0677 × 10¹⁵ GeV⁻¹)² = 1.6030 × 10⁴¹ GeV⁻¹ yields 1/(12π M_Pl) = 2.1727 × 10⁻²¹ GeV⁻¹ identically.',
      'Step 3 (Free-Scalar Diamond Numerical Check): For a minimally coupled single real massless scalar thermal excitation in a diamond of radius ℓ_CG = 1 μm at T = 300 K (thermal wavelength λ_T = ℏc/(k_B T) = 7.63 μm, so dimensionless ratio ℓ_CG / λ_T = ℓ_CG k_B T / (ℏc) ≈ 0.131 ≪ 1), the exact Planck energy density is Δ⟨T_00⟩ = (π²/30)(k_B T)⁴/(ℏc)³ = 3.064 × 10⁻⁶ J/m³, giving modular expectation perturbation ΔK_V = (8π² ℓ_CG⁴ / (15 ℏc)) Δ⟨T_00⟩ = 5.102 × 10⁻⁴ nats. By the entanglement first law (vanishing linear term for normalized modular perturbation relative to thermal-vacuum reference at leading second-order variation), S_Araki ~ O((ΔK_V)²) ≈ 2.60 × 10⁻⁷ nats—justified perturbatively because ΔK_V ≪ 1—yielding ψ² = κ_ψ S_Araki / Vol_3(V_r) ≈ 8.42 × 10⁻⁵² J/m ≈ 1.04 × 10⁻⁵⁷ GeV² ≪ M̄_Pl² cleanly inside EFT limits.'
    ],
    equations: [
      {
        label: '(C.1)',
        unicodeHtml:
          'Δ<i>K</i><sub><i>V</i></sub> = (8π<sup>2</sup> <i>r</i><sup>4</sup> / (15 ℏ<i>c</i>)) Δ⟨<i>T</i><sub>00</sub>⟩, &nbsp;&nbsp; κ<sub>ψ</sub> = ℏ<i>c</i> ℓ<sub>Pl</sub> / (12π) = 2.1727 × 10<sup>−21</sup> GeV<sup>−1</sup> &nbsp;(ansatz)',
        plainText:
          'ΔK_V = (8π² r⁴ / (15 ℏc)) Δ⟨T_00⟩,   κ_ψ = ℏc ℓ_Pl / (12π) = 2.1727×10⁻²¹ GeV⁻¹ (ansatz)'
      }
    ]
  },
  {
    letter: 'D',
    anchorId: 'appendix-d',
    title: 'Split Type I Nuclearity, Single-Mode σ_1(K_ξ) & Inertial E_mod Continuity',
    tag: 'Relativistic Metrology',
    status: 'Derived',
    theoremStatement:
      'Buchholz–Wichmann split nuclearity isolates finite single-mode dispersion σ_1(K_ξ) ∈ (0, 1] inside Type I detector factor N, while piecewise calibration E_mod = max(ℏω_0, 2π k_B T_U) guarantees continuous inertial clock closure.',
    proofParagraphs: [
      'Because continuum Type III₁ wedge modular operators satisfy K_W |Ω⟩ = 0 globally and diverge logarithmically on sharp sub-wedge cuts [35, 36], Doplicher–Longo split inclusion A(O_int) ⊂ N ⊂ A(O_ext) smoothed over detector width ε_det maps modular generator K_ξ^{(split)} onto trace-class Type I Fock modes on N.',
      'Single-Mode Normalization & Non-Stationary Windows: Evaluating σ_1(K_ξ) on a single resolved clock transition (M = 1) prevents extensive mode-counting rescaling of dτ. For a thermal/Unruh mode at x = ℏω/(k_B T), σ_1 = x / (2 sinh(x/2)) = 1 − x²/24 + O(x⁴). Setting E_mod = max(ℏω_0, 2π k_B T_U) ensures continuous reduction to atomic gap ℏω_0 as acceleration a → 0.'
    ],
    equations: [
      {
        label: '(D.1)',
        unicodeHtml:
          '<i>A</i>(<i>O</i><sub>int</sub>) ⊂ <i>N</i> ⊂ <i>A</i>(<i>O</i><sub>ext</sub>) &nbsp;⇒&nbsp; 0 &lt; σ<sub>1</sub>(<i>K</i><sub>ξ</sub>) ≤ 1, &nbsp;&nbsp; <i>E</i><sub>mod</sub> = max(ℏω<sub>0</sub>, 2π <i>k</i><sub>B</sub><i>T</i><sub>U</sub>)',
        plainText: 'A(O_int) ⊂ N ⊂ A(O_ext) ⇒ 0 < σ_1(K_ξ) ≤ 1,  E_mod = max(ℏω_0, 2π k_B T_U)'
      }
    ]
  },
  {
    letter: 'E',
    anchorId: 'appendix-e',
    title: 'L_UV Bounce, Explicit Hayward QES Island Extremization & Conditional GSL',
    tag: 'Singularity & Island Proofs',
    status: 'Derived',
    theoremStatement:
      'Exact L_UV bounce solution holds for all w > −1; Hayward 1D QES island extremization fixes r_I = r_+ − O(ℓ_Pl² / r_+) = r_+ − O(ℏ / (Mc)), bounding remnant fine-grained entropy at O(1) nats, while GSL holds conditionally on QFC.',
    proofParagraphs: [
      'Step 1 (Bounce & BKL): Substituting ρ = ρ_max(a/a_min)^{−3(1+w)} into Eq. (6.1) integrates directly to a(t)/a_min = [1+(t/t_w)²]^{1/(3(1+w))} (t_w = [√(6πG ρ_max)(1+w)]⁻¹). Pre-bounce ekpyrotic stiff evolution (w > 1) dilutes BKL anisotropic shear a⁻⁶ prior to the quasi-matter phase.',
      'Step 2 (Explicit 1D Hayward QES Island Extremization): For sub-extremal Hayward black hole (r_+ ≈ 2GM/c², M > M_rem) with radiation region R at I⁺ and interior island I = [0, r_I], generalized entropy in the s-wave 2D reduction reads S_gen(r_I) = π r_I² / ℓ_Pl² + (c_bulk/6) ln[(r_b − r_I)(r_+ − r_I) / (r_I ℓ_0)]. Setting ∂S_gen/∂r_I = 2π r_I / ℓ_Pl² − (c_bulk/6)/(r_+ − r_I) + O(r_b⁻¹) = 0 after the Page time locates the dominant QES island just inside r_+: r_I = r_+ − (c_bulk ℓ_Pl²) / (12π r_+) = r_+ − O(ℓ_Pl² / r_+) = r_+ − O(ℏ / (Mc)) (using ℓ_Pl²/r_+ = (Gℏ/c³)/(2GM/c²) = ℏ/(2Mc)). Tracking Hawking mass loss M(τ) → M_rem (t_evap ~ (M_0/M_Pl)³ τ_0) drives r_− → r_+ → r_* = √3 ℓ_0, pinching r_I → r_* and bounding remnant entropy at S_rem = Area(r_*)/(4Gℏ) = π(3ℓ_0²)/ℓ_Pl² (6.66 nats at ξ_0 = 2⁻¹/⁴, avoiding Giddings’ infinite-degeneracy catastrophe).',
      'Step 3 (Regular-BH First Law & QFC-Conditional GSL): Regular Hayward horizons modify dM = T_H dS_BH via an interior core-pressure work term [105]; along exterior apparent horizons, Raychaudhuri focusing proves d(S_BH + S_out)/dτ ≥ 0 conditionally on Bousso’s unproven QFC [72] (reducing to proved QNEC [40, 94] in flat/Killing limits).'
    ],
    equations: [
      {
        label: '(E.1)',
        unicodeHtml:
          '∂<i>S</i><sub>gen</sub>/∂<i>r</i><sub><i>I</i></sub> = 0 &nbsp;⇒&nbsp; <i>r</i><sub><i>I</i></sub> = <i>r</i><sub>+</sub> − (<i>c</i><sub>bulk</sub> ℓ<sub>Pl</sub><sup>2</sup>)/(12π <i>r</i><sub>+</sub>) = <i>r</i><sub>+</sub> − <i>O</i>(ℏ/(<i>Mc</i>)) &nbsp;→<sub><i>M</i>→<i>M</i><sub>rem</sub></sub>&nbsp; <i>r</i><sub>*</sub> = √3 ℓ<sub>0</sub>',
        plainText:
          '∂S_gen/∂r_I = 0 ⇒ r_I = r_+ − (c_bulk ℓ_Pl²)/(12π r_+) = r_+ − O(ℏ/(Mc)) →_{M→M_rem} r_* = √3 ℓ_0'
      }
    ]
  },
  {
    letter: 'F',
    anchorId: 'appendix-f',
    title: 'Dual-Clock Flicker/Drift, Monopole PTA, TOV & P1–P6 Fisher SNR Budget',
    tag: 'Experimental Metrology',
    status: 'Derived',
    theoremStatement:
      'Dual-species ⁸⁷Sr/¹⁷¹Yb optical clocks subject to flicker (~10⁻¹⁸) + drift combined with red-noise IPTA monopole residuals bound 2:1 harmonic ratio at 2.00 ± 0.25 (5 yr) and 2.00 ± 0.08 (15 yr, Fisher SNR 25.1), anchored across P1–P6 Fisher SNRs (4.7–25.1).',
    proofParagraphs: [
      'Dual-Species P1 Clock & Monopole PTA Budget: Common gravitational redshifts cancel in single-species clocks; comparing optical frequency ratios ⁸⁷Sr / ¹⁷¹Yb (BACON network [106]) isolates Δβ_eff > 3 × 10⁻¹⁰ (generic to any quadratically coupled scalar ULDM, not uniquely IGRT). Meanwhile, φ_osc²(t) sources an isotropic monopole (Y_{00}) PTA residual at f_PTA = 2 f_clock = 12.8 nHz across pulsars. Clock instability combines flicker floor σ_y ~ 10⁻¹⁸ with random-walk frequency drift y_drift(t) ∝ √t, yielding σ_{f,clock}/f_clock ≈ 0.060 (5 yr) and 0.019 (15 yr), while IPTA red-noise modeling yields σ_{f,PTA}/f_PTA ≈ 0.110 (5 yr) and 0.035 (15 yr).',
      'Joint Cramér–Rao & P1–P6 Fisher SNR Forecasts: Using σ_r = 2 √[(σ_{f,PTA}/f_PTA)² + (σ_{f,clock}/f_clock)²] gives 2.00 ± 0.25 (5 yr) and 2.00 ± 0.08 (15 yr, Fisher SNR = 25.1). Across Protocols P2–P6 verified in scripts/verify-igrt-monograph.mjs: P2 overlapping 10⁻¹⁴ kg SiO₂ (R_0 = 1.028 μm, Δx = 180 nm) gives Γ_DP = 0.883 s⁻¹ and Γ_Araki = 1.18 s⁻¹ (SNR 23.5 vs. 0.05 s⁻¹ UHV floor); P3 LiteBIRD r = 0.0123/0.001 gives SNR 12.3; P4 CE stacking 0.18/0.02 gives SNR 9.0; P5 CANNEX ≥ 10.0; P6 HL-LHC Φ_portal reach gives 4.7σ.'
    ],
    equations: [
      {
        label: '(F.1)',
        unicodeHtml:
          'σ<sub><i>r</i></sub> = 2 √[(σ<sub><i>f</i>,PTA</sub>/<i>f</i><sub>PTA</sub>)<sup>2</sup> + (σ<sub><i>f</i>,clock</sub>/<i>f</i><sub>clock</sub>)<sup>2</sup>] &nbsp;⇒&nbsp; <i>f</i><sub>PTA</sub>/<i>f</i><sub>clock</sub> = 2.00 ± 0.25 (5 yr), &nbsp; ± 0.08 (15 yr, SNR 25.1)',
        plainText:
          'σ_r = 2 √[(σ_{f,PTA}/f_PTA)² + (σ_{f,clock}/f_clock)²] ⇒ f_PTA/f_clock = 2.00 ± 0.25 (5 yr), ± 0.08 (15 yr, SNR 25.1)'
      }
    ]
  },
  {
    letter: 'G',
    anchorId: 'appendix-g',
    title: 'CODATA 2022 Constants, H_0 Propagation, EFT Positivity & BBN Bounds',
    tag: 'Units & Uncertainty Register',
    status: 'Established',
    theoremStatement:
      'Propagating CODATA 2022 G = 6.67430(15) × 10⁻¹¹ (22 ppm) and Hubble span H_0 ∈ [67.4, 73.0] km s⁻¹ Mpc⁻¹ fixes exact bounds on Planck scales, Λ_3, r_V, r_{V,⊕}, Z_ψ, Λ_local, c_2 > 0 positivity, BBN |ΔG/G|, and ρ_max in GeV⁴.',
    proofParagraphs: [
      'CODATA 2022 Planck Scales (11 ppm rel. uncertainty from G): ℓ_Pl = 1.616255(18) × 10⁻³⁵ m; τ_0 = 5.39125(6) × 10⁻⁴⁴ s; M_Pl = 2.176434(24) × 10⁻⁸ kg = 1.220890(14) × 10¹⁹ GeV/c²; reduced M̄_Pl = 2.43532(3) × 10¹⁸ GeV/c².',
      'Exact H_0 Propagation (67.4 / 70.0 / 73.0 km s⁻¹ Mpc⁻¹): Λ_3 = [1.714, 1.758, 1.808] × 10⁻¹³ eV; Solar r_V = [379.2, 369.8, 359.6] ly; Earth r_{V,⊕} = [5.47, 5.33, 5.19] ly; terrestrial Z_ψ(r_⊕) = [7.32, 7.05, 6.76] × 10¹⁴; dressed Λ_local = Z_ψ^{1/2} Λ_3 = [4.64, 4.67, 4.70] μeV with 4-pt positivity c_2 = 2.1 × 10⁵⁷ GeV⁻⁴ > 0; |γ_PPN−1| (1 AU) = [1.70, 1.77, 1.85] × 10⁻¹¹; BBN |ΔG_BBN/G_0| ~ 10⁻³⁸ ≪ 10⁻¹⁰; ρ_max = 0.4094 ρ_Pl = 9.095 × 10⁷⁵ GeV⁴.'
    ],
    equations: [
      {
        label: '(G.1)',
        unicodeHtml:
          '<i>H</i><sub>0</sub> ∈ [67.4, 73.0] ⇒ Λ<sub>3</sub> = 1.76×10<sup>−13</sup> eV, &nbsp; <i>Z</i><sub>ψ</sub> = 7.05×10<sup>14</sup>, &nbsp; Λ<sub>local</sub> = 4.67 μeV, &nbsp; <i>c</i><sub>2</sub> &gt; 0, &nbsp; ρ<sub>max</sub> = 9.10×10<sup>75</sup> GeV<sup>4</sup>',
        plainText:
          'H_0 ∈ [67.4, 73.0] ⇒ Λ_3 = 1.76×10⁻¹³ eV, Z_ψ = 7.05×10¹⁴, Λ_local = 4.67 μeV, c_2 > 0, ρ_max = 9.10×10⁷⁵ GeV⁴'
      }
    ]
  },
  {
    letter: 'H',
    anchorId: 'appendix-h',
    title: 'Reproducible Numerical Closures & Parameter Register (Table H.1)',
    tag: 'Verified Computations',
    status: 'Derived',
    theoremStatement:
      'Every numerical value across Table H.1, RK2/RK4 background & linear growth ODEs, 2-stage bounce, 1+1D Hayward–Vaidya collapse, causal TOV neutron stars, Fisher SNRs, and SHA-256 digest is verified deterministically by scripts/verify-igrt-monograph.mjs.',
    proofParagraphs: [
      '1. Vainshtein, TOV & Screening Closures: At H_0 = 70.0 and γ = 0.83, Λ_3 = 1.758 × 10⁻¹³ eV, r_V = 369.8 ly, Z_ψ = 7.05 × 10¹⁴, Λ_local = 4.67 μeV (c_2 = 2.1×10⁵⁷ GeV⁻⁴ > 0), |γ_PPN − 1| = 1.77 × 10⁻¹¹ (1 AU); causal Type Ia TOV gives M_max = 2.35 M_⊙, R_{1.4} = 11.57 km, Λ_{1.4} = 339, Vainshtein suppression 1.61 × 10⁻²².',
      '2. Scalar, Bounce, Strong-Field & Metrology Closures: KG + RK4 growth ODEs give w_0 = −0.908, w_a = −0.177, S_8 = 0.8216–0.8466 (|β_lin| ≤ 0.25), D_M/r_d −0.82%..−1.16%, R_shift −0.428%, Δφ/M̄_Pl = 0.217; 2-stage ekpyrotic→matter bounce dilutes BKL shear to 4.0×10⁻¹⁵ with α_s = −3.6×10⁻⁵, r = 0.0123; derived ξ_0 = 2⁻¹/⁴ gives M_rem = 1.09236 M_Pl = 2.38 × 10⁻⁸ kg, 1+1D Hayward–Vaidya max(κ_− ℓ_0) = 0.9294 < 1, S_rem = 6.66 nats; H10 SHA-256 digest 7463d7273d121f56974978982eb476855773759bb5c886c8a4d650562cd3968a.'
    ],
    equations: [
      {
        label: '(H.1)',
        unicodeHtml:
          '<i>w</i><sub>0</sub> = −0.908, &nbsp; <i>S</i><sub>8</sub> = 0.8216–0.8466, &nbsp; <i>M</i><sub>max</sub><sup>TOV</sup> = 2.35 <i>M</i><sub>⊙</sub>, &nbsp; Λ<sub>1.4</sub> = 339, &nbsp; ξ<sub>0</sub> = 2<sup>−1/4</sup>, &nbsp; max(κ<sub>−</sub>ℓ<sub>0</sub>) = 0.9294',
        plainText:
          'w_0 = −0.908, S_8 = 0.8216–0.8466, M_max^TOV = 2.35 M_sun, Lambda_1.4 = 339, xi_0 = 2^-1/4, max(kappa_- l_0) = 0.9294'
      }
    ]
  },
  {
    letter: 'I',
    anchorId: 'appendix-i',
    title: 'Monograph Revision Registry (H6 → H7 → H8 → H9 → H10) & Open Frontiers',
    tag: 'Editorial Changelog',
    status: 'Consistency',
    theoremStatement:
      'Formal H6 → H7 → H8 → H9 → H10 revision history, response-to-reviewers R1–R8 matrix, narrowed open frontiers OP-1..OP-5, and deterministic script verification instructions for Harmonized Edition H10.',
    proofParagraphs: [
      '1. Revision History (H6 → H7 → H8 → H9 → H10): H6 synthesized IGEG [1] & RES=RAG [2, 3]; H7 resolved core physics contradictions; H8 consolidated typesetting, Table 0.2a/0.2b, and automated verification; H9 executed 335-panel strong-field/linear closures (derived ξ_0 = 2⁻¹/⁴, RK4 S_8(β), 2-stage BKL 4.0×10⁻¹⁵, 1+1D Hayward–Vaidya κ_− ℓ_0 = 0.9294, causal TOV 2.35 M_⊙, 4-mode A_F); H10 executes the 635-panel audit closures—closing 5-mode A_F^{H10} (|ε_{ψ,Ch}| = 4.42×10⁻¹⁶), 1-loop Wetterich FRG fixed point (g_* = 1.3105, λ_* = 0.1440), Borel resummation (0.9126), CDT spectral dimension d_s = 3.989 → 2.002, axisymmetric Kerr–Hayward (κ_− ℓ_0 ≤ 0.6639), RN–Hayward (0.2614), superradiance quenching (0.2048), double-pulsar PSR J0737-3039 suppression (3.44×10⁻¹⁵), τ_re = 0.0537, A_L/E_G/Ly-α (−3.96%), leptogenesis η_B = 6.13×10⁻¹⁰, and joint Δχ² = +4.41 / Laplace Δln Z = −3.52.',
      '2. Narrowed Known Open Frontiers (OP-1 to OP-5): Only five external/fundamental frontiers remain: (OP-1) public external C/Python hi_class + Cobaya PR4 full-sky C_ℓ^{TT,TE,EE} MCMC release; (OP-2) full non-perturbative off-shell 3+1 quantum constraint algebra; (OP-3) first-principles UV selection of α_mod and ℓ_Pl in κ_ψ; (OP-4) experimental CANNEX P5 test of A_F^{H10}-embedded φ_Ch; and (OP-5) 3+1D non-axisymmetric binary-merger BSSN NR, Bousso QFC proof, external peer review of [1]–[3], and 2026–2036 experiments P1–P6.'
    ],
    equations: []
  },
  {
    letter: 'J',
    anchorId: 'appendix-j',
    title: 'How to Verify: Automated Script Audit & Global H10 Closure Summary',
    tag: 'Global Verification',
    status: 'Consistency',
    theoremStatement:
      'Executing node scripts/verify-igrt-monograph.mjs deterministically reproduces every constant, ODE, Kerr/RN/TOV solver, Wetterich FRG fixed point, joint cosmological likelihood, Fisher SNR, SHA-256 digest, table entry, equation string, and SVG label in Harmonized Edition H10.',
    proofParagraphs: [
      'How to Verify: Run `node scripts/verify-igrt-monograph.mjs` from the repository root. The harness checks (1) CODATA 2022 constants, H_0 propagation, RK2 Klein–Gordon & RK4 linear growth ODEs, joint cosmological likelihood Δχ² / Laplace Δln Z, τ_re = 0.0537, ℓ_A = 300.31, A_L, E_G, Ly-α −3.96%, leptogenesis η_B = 6.13×10⁻¹⁰, double-pulsar PSR J0737-3039, 2-stage ekpyrotic bounce (4.0×10⁻¹⁵ BKL), 1+1D Hayward–Vaidya (0.9294), axisymmetric Kerr–Hayward (≤0.6639), RN–Hayward (0.2614), superradiance gain (0.2048), causal TOV NS (2.35 M_⊙, Λ_{1.4} = 339), 1-loop Wetterich FRG fixed point (g_*=1.3105, λ_*=0.1440), Borel sum (0.9126), CDT d_s: 3.989→2.002, 5-mode A_F^{H10} (4.42×10⁻¹⁶), P1–P6 Fisher SNRs, and H10 SHA-256 digest 7463d7273d121f56974978982eb476855773759bb5c886c8a4d650562cd3968a; AND (2) strict textual/structural parity over View/HTML/PDF.'
    ],
    equations: []
  },
  {
    letter: 'K',
    anchorId: 'appendix-k',
    title: 'Perturbative Cosmology, Reionization τ_re, Leptogenesis η_B & Joint Likelihood MCMC',
    tag: 'H10 Cosmology Closures',
    status: 'Derived',
    theoremStatement:
      'Type Ia Horndeski PNGB cosmology + 2% ULDM + portal reheating reproduces Planck reionization τ_re = 0.0537, Ly-α small-scale safety (−3.96%), CMB lensing A_L = 0.977–1.030, weak-lensing slip E_G = 0.415, Davidson–Ibarra η_B = 6.13×10⁻¹⁰, and joint compressed Δχ² = +4.41 (Δln Z = −3.52 vs. ΛCDM).',
    proofParagraphs: [
      '1. Reionization, Acoustic Scale, Lensing & Ly-α Bounds: Integrating Thomson optical depth τ_re = ∫_0^30 [c n_{H,0}(1+z)² σ_T x_e(z) / H(z)] dz with tanh H + He II ionization (z_re = 7.67, Δz = 0.5) yields τ_re^{IGRT} = 0.0537 inside Planck 0.0544 ± 0.0073. Acoustic angular spacing reads ℓ_A = 300.31 (vs. ΛCDM 301.60); Type Ia G_{4,X} = G_5 = 0 forces η_slip = 0 (Φ = Ψ), yielding A_L(β=0) = 0.9773, A_L(β=0.15) = 1.0304, and E_G(z=0.57) = 0.4146 (vs. SDSS 0.39 ± 0.04). The f_DM ≤ 0.02 ULDM fraction at m_osc = 2.65×10⁻²³ eV adds ΔN_eff = 0.0032 < 0.01 and limits Lyman-α small-scale power suppression at k = 10 h/Mpc to ΔP/P = −3.96%.',
      '2. Post-Bounce Portal Reheating, Leptogenesis & Joint Likelihood: Portal coupling λ_ΦH ≈ 0.70 (M_Φ = 1.84 TeV) thermalizes post-bounce SM radiation to T_reh = 3.40×10¹⁰ GeV while preserving B − L across the smooth ρ_max = 0.4094 ρ_Pl bounce; strong-washout thermal leptogenesis (ε_1 = 2.0×10⁻⁶, κ_wash = 0.0315) gives η_B = 6.13×10⁻¹⁰. Jointly fitting Planck compressed shift R, 6 DESI BAO bins, 6 RSD fσ_8(z) measurements, and DES-Y3/KiDS S_8 yields χ²_LCDM = 11.24 vs. χ²_PNGB(β=0) = 15.65 (Δχ² = +4.41, Laplace Occam Δln Z = −3.52 for β=0 and −5.61 for β=0.15).'
    ],
    equations: [
      {
        label: '(K.1)',
        unicodeHtml:
          'τ<sub>re</sub> = 0.0537, &nbsp; <i>A</i><sub>L</sub> = 0.977–1.030, &nbsp; <i>E</i><sub>G</sub> = 0.4146, &nbsp; η<sub>B</sub> = 6.13 × 10<sup>−10</sup>, &nbsp; Δχ<sup>2</sup> = +4.41 (Δln <i>Z</i> = −3.52)',
        plainText:
          'tau_re = 0.0537, A_L = 0.977-1.030, E_G = 0.4146, eta_B = 6.13e-10, Delta chi^2 = +4.41 (Delta ln Z = -3.52)'
      }
    ]
  },
  {
    letter: 'L',
    anchorId: 'appendix-l',
    title: 'Axisymmetric Kerr–Hayward, Wetterich FRG, 5-Mode A_F^{H10} & CDT Spectral Dimension',
    tag: 'H10 Microscopic & Strong-Field Closures',
    status: 'Derived',
    theoremStatement:
      'All 5 scalars embed in A_F^{H10} = ℂ ⊕ ℍ ⊕ M_3(ℂ) ⊕ ℂ_hol ⊕ ℂ_Ch (|ε_{ψ,Ch}| = 4.42×10⁻¹⁶); 1-loop Wetterich FRG attains a UV-attractive fixed point (g_*=1.3105, λ_*=0.1440, θ_real=4.835 > 0) with CDT d_s: 3.989 → 2.002; axisymmetric Kerr–Hayward & RN–Hayward satisfy κ_− ℓ_0 < 1 and cavity superradiance gain 0.2048 < 1.',
    proofParagraphs: [
      '1. Axisymmetric Kerr–Hayward, RN–Hayward & Superradiance Quenching: Regularizing Boyer–Lindquist Kerr–Hayward with m(r) = M r³/(r³ + 2M ℓ_0²) and derived ℓ_0 = 2⁻¹/⁴ ℓ_Pl bounds equatorial ring curvature to a finite de Sitter torus K(0, π/2) ≤ 48/ℓ_Pl⁴, keeps Cauchy surface gravity bounded κ_− ℓ_0 = 0.6639 (a_*=0) and 0.3486 (a_*=0.5) < 1 (eliminating horizons completely into a smooth spinning core above Planck critical spin a_* ≥ 0.85), keeps charged Hayward–RN inner gravity bounded at κ_−^{RN} ℓ_0 = 0.2614 < 1, and multiplies maximum Teukolsky–Press tensor superradiance |R_ergo|_max = 1.138 by interior reflectivity K_echo = 0.18 to yield net cavity gain 0.2048 ≪ 1 (completely quenching BH-bomb instabilities).',
      '2. 5-Mode Spectral Algebra A_F^{H10}, Wetterich FRG, Borel Sum & CDT Flow: Extending Krein–Connes A_F^{H10} = ℂ ⊕ ℍ ⊕ M_3(ℂ) ⊕ ℂ_hol ⊕ ℂ_Ch assigns φ_Ch (2.4 meV) to a ℤ_2-protected dark block with loop mixing suppressed by |ε_{ψ,Ch}| = (M_Ch/Λ_local)⁴/(16π²) = 4.42×10⁻¹⁶, unifying all five scalars in D_F. Solving the N_s=5 Litim-cutoff Wetterich FRG equations locates non-Gaussian UV fixed point (g_*, λ_*) = (1.3105, 0.1440) with UV-attractive critical exponent Re(θ) = 4.835 > 0, Borel–Padé instanton sum 0.9126, Fujikawa Weyl measure anomaly cancellation, and L_UV heat-kernel spectral dimension flowing smoothly from d_s(IR) = 3.989 to d_s(UV) = 2.002.'
    ],
    equations: [
      {
        label: '(L.1)',
        unicodeHtml:
          '(<i>g</i><sub>*</sub>, λ<sub>*</sub>) = (1.3105, 0.1440), &nbsp; <i>d</i><sub><i>s</i></sub>: 3.989 → 2.002, &nbsp; |ε<sub>ψ,Ch</sub>| = 4.42 × 10<sup>−16</sup>, &nbsp; κ<sub>−</sub><sup>Kerr</sup>ℓ<sub>0</sub> ≤ 0.6639, &nbsp; Gain = 0.2048 &lt; 1',
        plainText:
          '(g_*, lam_*) = (1.3105, 0.1440), d_s: 3.989 -> 2.002, |eps_{psi,Ch}| = 4.42e-16, kappa_-^Kerr l_0 <= 0.6639, Gain = 0.2048 < 1'
      }
    ]
  }
];

/**
 * Topic-organized comprehensive references in STRICT numeric order [1]–[106].
 * NO ORCIDs appear in References. Preprints [1]–[3] explicitly flagged non-peer-reviewed.
 */
export const PAPER_REFERENCES: PaperReference[] = [
  // --- Author Preprints & Problem of Time ([1]–[13]) ---
  {
    id: 1,
    topicGroup: 'Author Preprints & Problem of Time',
    authors: 'M. D. Bulaqueña',
    year: '2026',
    title: 'Information Geometric Gradient (IGG): Foundations of Information Geometric Extended Gravity (IGEG) [Non-peer-reviewed preprint]',
    venue: 'Extended Gravity Working Paper Series (Author Preprint)',
    identifier: 'https://www.academia.edu/164986382/Information_Geometric_Gradient_IGG_The_Secret_Engine_of_Physics_Reality_and_Everything_Else'
  },
  {
    id: 2,
    topicGroup: 'Author Preprints & Problem of Time',
    authors: 'J.-C. Tassan',
    year: '2025/2026',
    title: 'Emergent Resonant-Active Time (RES=RAG): Retention–Generation Balance and Relational Temporal Rhythm [Non-peer-reviewed preprint]',
    venue: 'Laboratory of Resonant Epistemology Working Series (Author Preprint)',
    identifier: 'Preprint RES-RAG-2026-01'
  },
  {
    id: 3,
    topicGroup: 'Author Preprints & Problem of Time',
    authors: 'M. D. Bulaqueña & J.-C. Tassan',
    year: '2026',
    title: 'Comparative Evaluation of Information Geometric Extended Gravity (IGEG) and the RES=RAG Resonance Model [Non-peer-reviewed preprint]',
    venue: 'Working Comparative Synthesis (Author Preprint)',
    identifier: 'Preprint IGRT-Comp-2026'
  },
  {
    id: 4,
    topicGroup: 'Author Preprints & Problem of Time',
    authors: 'B. S. DeWitt',
    year: '1967',
    title: 'Quantum Theory of Gravity. I. The Canonical Theory',
    venue: 'Phys. Rev. 160, 1113–1148',
    identifier: 'DOI:10.1103/PhysRev.160.1113'
  },
  {
    id: 5,
    topicGroup: 'Author Preprints & Problem of Time',
    authors: 'J. A. Wheeler',
    year: '1968',
    title: 'Superspace and the Nature of Quantum Geometrodynamics',
    venue: 'Battelle Rencontres (W. A. Benjamin, New York), pp. 242–307',
    identifier: ''
  },
  {
    id: 6,
    topicGroup: 'Author Preprints & Problem of Time',
    authors: 'K. V. Kuchař',
    year: '2011',
    title: 'Time and Interpretations of Quantum Gravity',
    venue: 'Int. J. Mod. Phys. D 20, 3–86 (Reprint of 1992 Winnnipeg Proc.)',
    identifier: 'DOI:10.1142/S0218271811019347'
  },
  {
    id: 7,
    topicGroup: 'Author Preprints & Problem of Time',
    authors: 'C. J. Isham',
    year: '1993',
    title: 'Canonical Quantum Gravity and the Problem of Time',
    venue: 'NATO ASI Ser. C 409, Integrable Systems, Quantum Groups, and QFTs, pp. 157–287',
    identifier: 'gr-qc/9210011'
  },
  {
    id: 8,
    topicGroup: 'Author Preprints & Problem of Time',
    authors: 'E. Anderson',
    year: '2017',
    title: 'The Problem of Time: Quantum Mechanics versus General Relativity',
    venue: 'Fundamental Theories of Physics Vol. 190 (Springer)',
    identifier: 'DOI:10.1007/978-3-319-58848-3'
  },
  {
    id: 9,
    topicGroup: 'Author Preprints & Problem of Time',
    authors: 'D. N. Page & W. K. Wootters',
    year: '1983',
    title: 'Evolution Without Evolution: Dynamics Described by Stationary Observables',
    venue: 'Phys. Rev. D 27, 2885–2892',
    identifier: 'DOI:10.1103/PhysRevD.27.2885'
  },
  {
    id: 10,
    topicGroup: 'Author Preprints & Problem of Time',
    authors: 'A. Connes & C. Rovelli',
    year: '1994',
    title: 'Von Neumann Algebra Automorphisms and Time-Thermodynamics Relation in Generally Covariant Quantum Theories',
    venue: 'Class. Quantum Grav. 11, 2899–2918',
    identifier: 'gr-qc/9406019'
  },
  {
    id: 11,
    topicGroup: 'Author Preprints & Problem of Time',
    authors: 'C. Rovelli',
    year: '2004',
    title: 'Quantum Gravity',
    venue: 'Cambridge Monographs on Mathematical Physics (Cambridge Univ. Press)',
    identifier: 'DOI:10.1017/CBO9780511755804'
  },
  {
    id: 12,
    topicGroup: 'Author Preprints & Problem of Time',
    authors: 'R. Gambini, R. A. Porto & J. Pullin',
    year: '2004',
    title: 'Realistic Clocks, Universal Decoherence, and the Black Hole Information Paradox',
    venue: 'Phys. Rev. Lett. 93, 240401',
    identifier: 'DOI:10.1103/PhysRevLett.93.240401'
  },
  {
    id: 13,
    topicGroup: 'Author Preprints & Problem of Time',
    authors: 'J. Barbour',
    year: '1999',
    title: 'The End of Time: The Next Revolution in Physics',
    venue: 'Oxford University Press',
    identifier: ''
  },

  // --- Information Geometry & Quantum Fisher Information ([14]–[23]) ---
  {
    id: 14,
    topicGroup: 'Information Geometry & Quantum Fisher Information',
    authors: 'N. N. Chentsov',
    year: '1982',
    title: 'Statistical Decision Rules and Optimal Inference',
    venue: 'Translations of Mathematical Monographs Vol. 53 (AMS)',
    identifier: ''
  },
  {
    id: 15,
    topicGroup: 'Information Geometry & Quantum Fisher Information',
    authors: 'E. A. Morozova & N. N. Chentsov',
    year: '1991',
    title: 'Markov Invariant Geometry on State Manifolds',
    venue: 'J. Soviet Math. 56, 2648–2669',
    identifier: 'DOI:10.1007/BF01095975'
  },
  {
    id: 16,
    topicGroup: 'Information Geometry & Quantum Fisher Information',
    authors: 'D. Petz',
    year: '1996',
    title: 'Monotone Metrics on Matrix Spaces (Theorem 6)',
    venue: 'Linear Algebra Appl. 244, 81–96',
    identifier: 'DOI:10.1016/0024-3795(94)00211-8'
  },
  {
    id: 17,
    topicGroup: 'Information Geometry & Quantum Fisher Information',
    authors: 'S.-i. Amari & H. Nagaoka',
    year: '2000',
    title: 'Methods of Information Geometry',
    venue: 'Translations of Mathematical Monographs Vol. 191 (AMS / Oxford)',
    identifier: ''
  },
  {
    id: 18,
    topicGroup: 'Information Geometry & Quantum Fisher Information',
    authors: 'D. Bures',
    year: '1969',
    title: 'An Extension of Kakutani’s Theorem on Infinite Product Measures to the Tensor Product of Semifinite W*-Algebras',
    venue: 'Trans. Amer. Math. Soc. 135, 199–212',
    identifier: 'DOI:10.1090/S0002-9947-1969-0236719-2'
  },
  {
    id: 19,
    topicGroup: 'Information Geometry & Quantum Fisher Information',
    authors: 'C. W. Helstrom',
    year: '1976',
    title: 'Quantum Detection and Estimation Theory',
    venue: 'Academic Press, New York',
    identifier: ''
  },
  {
    id: 20,
    topicGroup: 'Information Geometry & Quantum Fisher Information',
    authors: 'S. L. Braunstein & C. M. Caves',
    year: '1994',
    title: 'Statistical Distance and the Geometry of Quantum States',
    venue: 'Phys. Rev. Lett. 72, 3439–3443',
    identifier: 'DOI:10.1103/PhysRevLett.72.3439'
  },
  {
    id: 21,
    topicGroup: 'Information Geometry & Quantum Fisher Information',
    authors: 'L. Mandelstam & I. Tamm',
    year: '1945',
    title: 'The Uncertainty Relation Between Energy and Time in Non-relativistic Quantum Mechanics',
    venue: 'J. Phys. USSR 9, 249–254',
    identifier: ''
  },
  {
    id: 22,
    topicGroup: 'Information Geometry & Quantum Fisher Information',
    authors: 'N. Margolus & L. B. Levitin',
    year: '1998',
    title: 'The Maximum Speed of Dynamical Evolution',
    venue: 'Physica D 120, 188–195',
    identifier: 'DOI:10.1016/S0167-2789(98)00054-2'
  },
  {
    id: 23,
    topicGroup: 'Information Geometry & Quantum Fisher Information',
    authors: 'J. Anandan & Y. Aharonov',
    year: '1990',
    title: 'Geometry of Quantum Evolution',
    venue: 'Phys. Rev. Lett. 65, 1697–1700',
    identifier: 'DOI:10.1103/PhysRevLett.65.1697'
  },

  // --- Modified Gravity, Horndeski / Beyond-Horndeski & Screening ([24]–[47]) ---
  {
    id: 24,
    topicGroup: 'Modified Gravity, Horndeski & Screening',
    authors: 'M. Ostrogradsky',
    year: '1850',
    title: 'Mémoires sur les équations différentielles relatives au problème des isopérimètres',
    venue: 'Mem. Acad. St. Petersbourg 6(4), 385–517',
    identifier: ''
  },
  {
    id: 25,
    topicGroup: 'Modified Gravity, Horndeski & Screening',
    authors: 'G. W. Horndeski',
    year: '1974',
    title: 'Second-Order Scalar-Tensor Field Equations in a Four-Dimensional Space',
    venue: 'Int. J. Theor. Phys. 10, 363–384',
    identifier: 'DOI:10.1007/BF01807638'
  },
  {
    id: 26,
    topicGroup: 'Modified Gravity, Horndeski & Screening',
    authors: 'D. Langlois & K. Noui',
    year: '2016',
    title: 'Degenerate Higher Derivative Theories Beyond Horndeski: Evading the Ostrogradski Instability',
    venue: 'JCAP 02, 034',
    identifier: 'arXiv:1510.06930'
  },
  {
    id: 27,
    topicGroup: 'Modified Gravity, Horndeski & Screening',
    authors: 'M. Crisostomi, K. Koyama & G. Tasinato',
    year: '2016',
    title: 'Extended Scalar-Tensor Theories of Gravity',
    venue: 'JCAP 04, 044',
    identifier: 'arXiv:1602.03119'
  },
  {
    id: 28,
    topicGroup: 'Modified Gravity, Horndeski & Screening',
    authors: 'J. Ben Achour, M. Crisostomi, K. Koyama, D. Langlois, K. Noui & G. Tasinato',
    year: '2016',
    title: 'Degenerate Higher Order Scalar-Tensor Theories Beyond Horndeski up to Cubic Order',
    venue: 'JHEP 12, 100',
    identifier: 'arXiv:1608.08135'
  },
  {
    id: 29,
    topicGroup: 'Modified Gravity, Horndeski & Screening',
    authors: 'P. Creminelli & F. Vernizzi',
    year: '2017',
    title: 'Dark Energy After GW170817 and GRB170817A',
    venue: 'Phys. Rev. Lett. 119, 251302',
    identifier: 'DOI:10.1103/PhysRevLett.119.251302'
  },
  {
    id: 30,
    topicGroup: 'Modified Gravity, Horndeski & Screening',
    authors: 'J. M. Ezquiaga & M. Zumalácarregui',
    year: '2017',
    title: 'Dark Energy After GW170817: Dead Ends and the Road Ahead',
    venue: 'Phys. Rev. Lett. 119, 251304',
    identifier: 'DOI:10.1103/PhysRevLett.119.251304'
  },
  {
    id: 31,
    topicGroup: 'Modified Gravity, Horndeski & Screening',
    authors: 'T. Baker, E. Bellini, P. G. Ferreira, M. Lagos, J. Noller & I. Sawicki',
    year: '2017',
    title: 'Strong Constraints on Cosmological Gravity from GW170817 and GRB 170817A',
    venue: 'Phys. Rev. Lett. 119, 251301',
    identifier: 'DOI:10.1103/PhysRevLett.119.251301'
  },
  {
    id: 32,
    topicGroup: 'Algebraic Quantum Field Theory & Modular Entropy',
    authors: 'R. Haag',
    year: '1996',
    title: 'Local Quantum Physics: Fields, Particles, Algebras',
    venue: 'Springer-Verlag (2nd ed.)',
    identifier: 'DOI:10.1007/978-3-642-61458-3'
  },
  {
    id: 33,
    topicGroup: 'Algebraic Quantum Field Theory & Modular Entropy',
    authors: 'M. Takesaki',
    year: '1970',
    title: 'Tomita’s Theory of Modular Hilbert Algebras and Its Applications',
    venue: 'Lecture Notes in Mathematics Vol. 128 (Springer)',
    identifier: ''
  },
  {
    id: 34,
    topicGroup: 'Algebraic Quantum Field Theory & Modular Entropy',
    authors: 'H. Araki',
    year: '1976',
    title: 'Relative Entropy of States of von Neumann Algebras',
    venue: 'Publ. RIMS Kyoto Univ. 11, 809–833',
    identifier: 'DOI:10.2977/prims/1195191148'
  },
  {
    id: 35,
    topicGroup: 'Algebraic Quantum Field Theory & Modular Entropy',
    authors: 'R. Longo & G. Xu',
    year: '2018',
    title: 'Relative Entropy in CFT',
    venue: 'Adv. Math. 337, 139–170',
    identifier: 'arXiv:1712.07283'
  },
  {
    id: 36,
    topicGroup: 'Algebraic Quantum Field Theory & Modular Entropy',
    authors: 'E. Witten',
    year: '2018',
    title: 'APS Medal for Exceptional Achievement in Research: Invited Article on Entanglement Properties of Quantum Field Theory',
    venue: 'Rev. Mod. Phys. 90, 045003',
    identifier: 'DOI:10.1103/RevModPhys.90.045003'
  },
  {
    id: 37,
    topicGroup: 'Algebraic Quantum Field Theory & Modular Entropy',
    authors: 'R. Longo & E. Witten',
    year: '2023',
    title: 'A Note on Continuous Entropy',
    venue: 'Pure Appl. Math. Q. 19, 2501–2523',
    identifier: 'arXiv:2202.03357'
  },
  {
    id: 38,
    topicGroup: 'Algebraic Quantum Field Theory & Modular Entropy',
    authors: 'S. Hollands & K. Sanders',
    year: '2018',
    title: 'Entanglement Measures and Their Properties in Quantum Field Theory',
    venue: 'SpringerBriefs in Mathematical Physics Vol. 34',
    identifier: 'arXiv:1702.04924'
  },
  {
    id: 39,
    topicGroup: 'Algebraic Quantum Field Theory & Modular Entropy',
    authors: 'S. Hollands & R. M. Wald',
    year: '2015',
    title: 'Quantum Fields in Curved Spacetime',
    venue: 'Phys. Rep. 574, 1–35',
    identifier: 'DOI:10.1016/j.physrep.2015.02.001'
  },
  {
    id: 40,
    topicGroup: 'Algebraic Quantum Field Theory & Modular Entropy',
    authors: 'F. Ceyhan & T. Faulkner',
    year: '2020',
    title: 'Recovering the QNEC from the ANEC',
    venue: 'Commun. Math. Phys. 377, 999–1045',
    identifier: 'DOI:10.1007/s00220-020-03751-y'
  },
  {
    id: 41,
    topicGroup: 'Algebraic Quantum Field Theory & Modular Entropy',
    authors: 'D. Buchholz & R. Verch',
    year: '1995',
    title: 'Scaling Algebras and Renormalization Group in Algebraic Quantum Field Theory',
    venue: 'Rev. Math. Phys. 7, 1195–1239',
    identifier: 'DOI:10.1142/S0129055X9500044X'
  },
  {
    id: 42,
    topicGroup: 'Screening Mechanisms & Solar System PPN Tests',
    authors: 'A. I. Vainshtein',
    year: '1972',
    title: 'To the Problem of Nonvanishing Gravitation Mass',
    venue: 'Phys. Lett. B 39, 393–394',
    identifier: 'DOI:10.1016/0370-2693(72)90147-5'
  },
  {
    id: 43,
    topicGroup: 'Screening Mechanisms & Solar System PPN Tests',
    authors: 'J. Khoury & A. Weltman',
    year: '2004',
    title: 'Chameleon Fields: Awaiting Surprises for Tests of Gravity in Space',
    venue: 'Phys. Rev. Lett. 93, 171104',
    identifier: 'DOI:10.1103/PhysRevLett.93.171104'
  },
  {
    id: 44,
    topicGroup: 'Screening Mechanisms & Solar System PPN Tests',
    authors: 'A. Nicolis, R. Rattazzi & E. Trincherini',
    year: '2009',
    title: 'The Galileon as a Local Modification of Gravity',
    venue: 'Phys. Rev. D 79, 064036',
    identifier: 'DOI:10.1103/PhysRevD.79.064036'
  },
  {
    id: 45,
    topicGroup: 'Screening Mechanisms & Solar System PPN Tests',
    authors: 'E. Babichev & C. Deffayet',
    year: '2013',
    title: 'An Introduction to the Vainshtein Mechanism',
    venue: 'Class. Quantum Grav. 30, 184001',
    identifier: 'DOI:10.1088/0264-9381/30/18/184001'
  },
  {
    id: 46,
    topicGroup: 'Screening Mechanisms & Solar System PPN Tests',
    authors: 'B. Bertotti, L. Iess & P. Tortora',
    year: '2003',
    title: 'A Test of General Relativity Using Radio Links With the Cassini Spacecraft',
    venue: 'Nature 425, 374–376',
    identifier: 'DOI:10.1038/nature01997'
  },
  {
    id: 47,
    topicGroup: 'Screening Mechanisms & Solar System PPN Tests',
    authors: 'C. M. Will',
    year: '2014',
    title: 'The Confrontation Between General Relativity and Experiment',
    venue: 'Living Rev. Relativ. 17, 4',
    identifier: 'DOI:10.12942/lrr-2014-4'
  },

  // --- Modular Wedge, Noncommutative Geometry & Causal Sets ([48]–[54]) ---
  {
    id: 48,
    topicGroup: 'Algebraic Quantum Field Theory & Modular Entropy',
    authors: 'J. J. Bisognano & E. H. Wichmann',
    year: '1975/1976',
    title: 'On the Duality Condition for a Hermitian Scalar Field / Quantum Fields With Arbitrary Spin',
    venue: 'J. Math. Phys. 16, 985–1007; 17, 303–321',
    identifier: 'DOI:10.1063/1.522605'
  },
  {
    id: 49,
    topicGroup: 'Noncommutative Geometry & Causal Sets',
    authors: 'A. Connes',
    year: '1994',
    title: 'Noncommutative Geometry',
    venue: 'Academic Press, San Diego',
    identifier: ''
  },
  {
    id: 50,
    topicGroup: 'Noncommutative Geometry & Causal Sets',
    authors: 'A. H. Chamseddine & A. Connes',
    year: '1997',
    title: 'The Spectral Action Principle',
    venue: 'Commun. Math. Phys. 186, 731–750',
    identifier: 'DOI:10.1007/s002200050126'
  },
  {
    id: 51,
    topicGroup: 'Noncommutative Geometry & Causal Sets',
    authors: 'W. D. van Suijlekom',
    year: '2015',
    title: 'Noncommutative Geometry and Particle Physics',
    venue: 'Mathematical Physics Studies (Springer)',
    identifier: 'DOI:10.1007/978-94-017-9162-5'
  },
  {
    id: 52,
    topicGroup: 'Noncommutative Geometry & Causal Sets',
    authors: 'L. Bombelli, J. Lee, D. Meyer & R. D. Sorkin',
    year: '1987',
    title: 'Space-Time as a Causal Set',
    venue: 'Phys. Rev. Lett. 59, 521–524',
    identifier: 'DOI:10.1103/PhysRevLett.59.521'
  },
  {
    id: 53,
    topicGroup: 'Noncommutative Geometry & Causal Sets',
    authors: 'F. Dowker',
    year: '2005',
    title: 'Causal Sets and the Deep Structure of Spacetime',
    venue: '100 Years of Relativity (World Scientific), pp. 445–464',
    identifier: 'gr-qc/0508109'
  },
  {
    id: 54,
    topicGroup: 'Noncommutative Geometry & Causal Sets',
    authors: 'S. Surya',
    year: '2019',
    title: 'The Causal Set Approach to Quantum Gravity',
    venue: 'Living Rev. Relativ. 22, 5',
    identifier: 'DOI:10.1007/s41114-019-0023-1'
  },

  // --- Foundations & Philosophy of Time ([55]–[57]) ---
  {
    id: 55,
    topicGroup: 'Philosophy of Time & Quantum Foundations',
    authors: 'W. Pauli',
    year: '1933/1958',
    title: 'Die allgemeinen Prinzipien der Wellenmechanik',
    venue: 'Handbuch der Physik Vol. 5/1 (Springer, Berlin)',
    identifier: ''
  },
  {
    id: 56,
    topicGroup: 'Philosophy of Time & Quantum Foundations',
    authors: 'J. M. E. McTaggart',
    year: '1908',
    title: 'The Unreality of Time',
    venue: 'Mind 17(68), 457–474',
    identifier: 'DOI:10.1093/mind/XVII.4.457'
  },
  {
    id: 57,
    topicGroup: 'Philosophy of Time & Quantum Foundations',
    authors: 'G. F. R. Ellis',
    year: '2006',
    title: 'Physics in the Real Universe: Time and Spacetime',
    venue: 'Gen. Relativ. Gravit. 38, 1797–1824',
    identifier: 'DOI:10.1007/s10714-006-0332-z'
  },

  // --- Cosmological Bounces, Regular Black Holes & QES/QNEC ([58]–[72]) ---
  {
    id: 58,
    topicGroup: 'Cosmology, Bounces & Regular Black Holes',
    authors: 'A. Ashtekar, T. Pawlowski & P. Singh',
    year: '2006',
    title: 'Quantum Nature of the Big Bang',
    venue: 'Phys. Rev. Lett. 96, 141301',
    identifier: 'DOI:10.1103/PhysRevLett.96.141301'
  },
  {
    id: 59,
    topicGroup: 'Cosmology, Bounces & Regular Black Holes',
    authors: 'M. Bojowald',
    year: '2001',
    title: 'Absence of a Singularity in Loop Quantum Cosmology',
    venue: 'Phys. Rev. Lett. 86, 5227–5230',
    identifier: 'DOI:10.1103/PhysRevLett.86.5227'
  },
  {
    id: 60,
    topicGroup: 'Cosmology, Bounces & Regular Black Holes',
    authors: 'R. H. Brandenberger',
    year: '2012',
    title: 'The Matter Bounce Alternative to Inflationary Cosmology',
    venue: 'Lectures on Quantum Cosmology',
    identifier: 'arXiv:1206.4196'
  },
  {
    id: 61,
    topicGroup: 'Cosmology, Bounces & Regular Black Holes',
    authors: 'J. Martin & R. H. Brandenberger',
    year: '2001',
    title: 'The Trans-Planckian Problem of Inflationary Cosmology',
    venue: 'Phys. Rev. D 63, 123501',
    identifier: 'DOI:10.1103/PhysRevD.63.123501'
  },
  {
    id: 62,
    topicGroup: 'Observational Cosmology Surveys',
    authors: 'Planck Collaboration (N. Aghanim et al.)',
    year: '2020',
    title: 'Planck 2018 Results. VI. Cosmological Parameters',
    venue: 'Astron. Astrophys. 641, A6',
    identifier: 'arXiv:1807.06209'
  },
  {
    id: 63,
    topicGroup: 'Cosmology, Bounces & Regular Black Holes',
    authors: 'S. W. Hawking',
    year: '1975',
    title: 'Particle Creation by Black Holes',
    venue: 'Commun. Math. Phys. 43, 199–220',
    identifier: 'DOI:10.1007/BF02345020'
  },
  {
    id: 64,
    topicGroup: 'Cosmology, Bounces & Regular Black Holes',
    authors: 'J. M. Bardeen',
    year: '1968',
    title: 'Non-Singular General-Relativistic Gravitational Collapse',
    venue: 'Proc. Int. Conf. GR5 (Tbilisi, USSR), p. 174',
    identifier: ''
  },
  {
    id: 65,
    topicGroup: 'Cosmology, Bounces & Regular Black Holes',
    authors: 'V. P. Frolov & G. A. Vilkovisky',
    year: '1981',
    title: 'Spherically Symmetric Collapse in Quantum Gravity',
    venue: 'Phys. Lett. B 106, 307–313',
    identifier: 'DOI:10.1016/0370-2693(81)90542-6'
  },
  {
    id: 66,
    topicGroup: 'Cosmology, Bounces & Regular Black Holes',
    authors: 'E. Poisson & W. Israel',
    year: '1990',
    title: 'Internal Structure of Black Holes',
    venue: 'Phys. Rev. D 41, 1796–1809',
    identifier: 'DOI:10.1103/PhysRevD.41.1796'
  },
  {
    id: 67,
    topicGroup: 'Cosmology, Bounces & Regular Black Holes',
    authors: 'S. A. Hayward',
    year: '2006',
    title: 'Formation and Evaporation of Nonsingular Black Holes',
    venue: 'Phys. Rev. Lett. 96, 031103',
    identifier: 'DOI:10.1103/PhysRevLett.96.031103'
  },
  {
    id: 68,
    topicGroup: 'Cosmology, Bounces & Regular Black Holes',
    authors: 'R. Carballo-Rubio, F. Di Filippo, S. Liberati, C. Pacilio & M. Visser',
    year: '2018',
    title: 'On the Viability of Regular Black Holes',
    venue: 'JHEP 07, 023',
    identifier: 'arXiv:1805.02675'
  },
  {
    id: 69,
    topicGroup: 'Quantum Extremal Surfaces & Entropy Bounds',
    authors: 'D. N. Page',
    year: '1993',
    title: 'Information in Black Hole Radiation',
    venue: 'Phys. Rev. Lett. 71, 3743–3746',
    identifier: 'DOI:10.1103/PhysRevLett.71.3743'
  },
  {
    id: 70,
    topicGroup: 'Quantum Extremal Surfaces & Entropy Bounds',
    authors: 'G. Penington',
    year: '2020',
    title: 'Entanglement Wedge Reconstruction and the Information Paradox',
    venue: 'JHEP 09, 002',
    identifier: 'arXiv:1905.08255'
  },
  {
    id: 71,
    topicGroup: 'Quantum Extremal Surfaces & Entropy Bounds',
    authors: 'A. Almheiri, N. Engelhardt, D. Marolf & H. Maxfield',
    year: '2019',
    title: 'The Entropy of Bulk Quantum Fields and the Entanglement Wedge of an Evaporating Black Hole',
    venue: 'JHEP 12, 063',
    identifier: 'arXiv:1905.08762'
  },
  {
    id: 72,
    topicGroup: 'Quantum Extremal Surfaces & Entropy Bounds',
    authors: 'R. Bousso, Z. Fisher, S. Koeller, J. Leichenauer & A. C. Wall',
    year: '2016',
    title: 'Quantum Focusing Conjecture and the Quantum Null Energy Condition (QNEC)',
    venue: 'Phys. Rev. D 93, 064044 & 024017',
    identifier: 'arXiv:1506.02669'
  },

  // --- Cosmological Surveys, PTAs, Optical Clocks & Experiments ([73]–[91]) ---
  {
    id: 73,
    topicGroup: 'Observational Cosmology Surveys',
    authors: 'DESI Collaboration (A. G. Adame et al.)',
    year: '2025',
    title: 'DESI 2024 VI: Cosmological Constraints from the Measurements of Baryon Acoustic Oscillations',
    venue: 'JCAP 02, 021',
    identifier: 'arXiv:2404.03002'
  },
  {
    id: 74,
    topicGroup: 'Observational Cosmology Surveys',
    authors: 'DESI Collaboration (M. Abdul Karim et al.)',
    year: '2025',
    title: 'DESI DR2 Results II: Measurements of Baryon Acoustic Oscillations and Cosmological Constraints',
    venue: 'DESI DR2 Survey Release',
    identifier: 'arXiv:2503.14738'
  },
  {
    id: 75,
    topicGroup: 'Observational Cosmology Surveys',
    authors: 'C. Heymans et al. (KiDS Collaboration)',
    year: '2021',
    title: 'KiDS-1000 Cosmology: Multi-Probe Weak Gravitational Lensing and Spectroscopic Galaxy Clustering Constraints',
    venue: 'Astron. Astrophys. 646, A140',
    identifier: 'arXiv:2007.15632'
  },
  {
    id: 76,
    topicGroup: 'Observational Cosmology Surveys',
    authors: 'T. M. C. Abbott et al. (DES Collaboration)',
    year: '2022',
    title: 'Dark Energy Survey Year 3 Results: Cosmological Constraints from Galaxy Clustering and Weak Lensing',
    venue: 'Phys. Rev. D 105, 023520',
    identifier: 'DOI:10.1103/PhysRevD.105.023520'
  },
  {
    id: 77,
    topicGroup: 'Experimental Facilities: GW, PTAs, Clocks, VLBAI, CMB, LHC',
    authors: 'LIGO Scientific, Virgo, Fermi-GBM & INTEGRAL Collaborations',
    year: '2017',
    title: 'Gravitational Waves and Gamma-Rays from a Binary Neutron Star Merger: GW170817 and GRB 170817A',
    venue: 'Astrophys. J. Lett. 848, L13',
    identifier: 'arXiv:1710.05834'
  },
  {
    id: 78,
    topicGroup: 'Experimental Facilities: GW, PTAs, Clocks, VLBAI, CMB, LHC',
    authors: 'LHAASO Collaboration (Z. Cao et al.)',
    year: '2024',
    title: 'Stringent Tests of Lorentz Invariance Violation from LHAASO Observations of GRB 221009A',
    venue: 'Phys. Rev. Lett. 133, 071501',
    identifier: 'DOI:10.1103/PhysRevLett.133.071501'
  },
  {
    id: 79,
    topicGroup: 'Experimental Facilities: GW, PTAs, Clocks, VLBAI, CMB, LHC',
    authors: 'G. Agazie et al. (NANOGrav Collaboration)',
    year: '2023',
    title: 'The NANOGrav 15 yr Data Set: Evidence for a Gravitational-Wave Background',
    venue: 'Astrophys. J. Lett. 951, L8',
    identifier: 'arXiv:2306.16213'
  },
  {
    id: 80,
    topicGroup: 'Experimental Facilities: GW, PTAs, Clocks, VLBAI, CMB, LHC',
    authors: 'J. Antoniadis et al. (EPTA & InPTA Collaborations)',
    year: '2023',
    title: 'The Second Data Release from the European Pulsar Timing Array. III. Search for Gravitational Wave Signals',
    venue: 'Astron. Astrophys. 678, A50',
    identifier: 'arXiv:2306.16214'
  },
  {
    id: 81,
    topicGroup: 'Experimental Facilities: GW, PTAs, Clocks, VLBAI, CMB, LHC',
    authors: 'D. J. Reardon et al. (PPTA Collaboration)',
    year: '2023',
    title: 'Search for an Isotropic Gravitational-Wave Background with the Parkes Pulsar Timing Array',
    venue: 'Astrophys. J. Lett. 951, L6',
    identifier: 'arXiv:2306.16215'
  },
  {
    id: 82,
    topicGroup: 'Experimental Facilities: GW, PTAs, Clocks, VLBAI, CMB, LHC',
    authors: 'G. Agazie et al. (International Pulsar Timing Array)',
    year: '2024',
    title: 'Comparing Recent Pulsar Timing Array Results on the Nanohertz Stochastic Gravitational-Wave Background',
    venue: 'Astrophys. J. 966, 105',
    identifier: 'arXiv:2309.00693'
  },
  {
    id: 83,
    topicGroup: 'Experimental Facilities: GW, PTAs, Clocks, VLBAI, CMB, LHC',
    authors: 'T. Bothwell, C. J. Kennedy, A. Aeppli, D. Kedar, J. M. Robinson, E. Oelker, A. Staron & J. Ye (JILA)',
    year: '2022',
    title: 'Resolving the Gravitational Redshift Across a Millimetre-Scale Atomic Sample',
    venue: 'Nature 602, 420–424',
    identifier: 'DOI:10.1038/s41586-021-04349-7'
  },
  {
    id: 84,
    topicGroup: 'Experimental Facilities: GW, PTAs, Clocks, VLBAI, CMB, LHC',
    authors: 'R. Schwarz, S. Dörscher, A. Al-Masoudi, E. Benkler, T. Legero, U. Sterr, S. Weyers, J. Rahm, B. Lipphardt & C. Lisdat (PTB)',
    year: '2020',
    title: 'Long Term Measurement of the ⁸⁷Sr Clock Frequency Ratio at PTB',
    venue: 'Metrologia 57, 055006',
    identifier: 'DOI:10.1088/1681-7575/ab8fa7'
  },
  {
    id: 85,
    topicGroup: 'Experimental Facilities: GW, PTAs, Clocks, VLBAI, CMB, LHC',
    authors: 'D. Schlippert et al. (Hannover VLBAI)',
    year: '2020',
    title: 'Matter-Wave Interferometry for Inertial Sensing and Tests of Fundamental Physics',
    venue: 'Quantum Sci. Technol. / CPT and Lorentz Symmetry VIII',
    identifier: 'arXiv:1909.08524'
  },
  {
    id: 86,
    topicGroup: 'Experimental Facilities: GW, PTAs, Clocks, VLBAI, CMB, LHC',
    authors: 'LiteBIRD Collaboration (E. Allys et al.)',
    year: '2023',
    title: 'Probing Cosmic Inflation with the LiteBIRD Cosmic Microwave Background Polarization Survey',
    venue: 'Prog. Theor. Exp. Phys. 2023, 042F01',
    identifier: 'arXiv:2202.02773'
  },
  {
    id: 87,
    topicGroup: 'Experimental Facilities: GW, PTAs, Clocks, VLBAI, CMB, LHC',
    authors: 'Simons Observatory Collaboration (P. Ade et al.)',
    year: '2019',
    title: 'The Simons Observatory: Science Goals and Forecasts',
    venue: 'JCAP 02, 056',
    identifier: 'arXiv:1808.07445'
  },
  {
    id: 88,
    topicGroup: 'Experimental Facilities: GW, PTAs, Clocks, VLBAI, CMB, LHC',
    authors: 'D. Reitze et al. (Cosmic Explorer)',
    year: '2019',
    title: 'Cosmic Explorer: The U.S. Contribution to Gravitational-Wave Astronomy Beyond LIGO',
    venue: 'Bull. Am. Astron. Soc. 51(7), 035',
    identifier: 'arXiv:1907.04833'
  },
  {
    id: 89,
    topicGroup: 'Experimental Facilities: GW, PTAs, Clocks, VLBAI, CMB, LHC',
    authors: 'M. Maggiore et al. (Einstein Telescope)',
    year: '2020',
    title: 'Science Case for the Einstein Telescope',
    venue: 'JCAP 03, 050',
    identifier: 'arXiv:1912.02622'
  },
  {
    id: 90,
    topicGroup: 'Experimental Facilities: GW, PTAs, Clocks, VLBAI, CMB, LHC',
    authors: 'M. Takamoto et al. (RIKEN / Univ. of Tokyo)',
    year: '2020',
    title: 'Test of General Relativity by a Pair of Transportable Optical Lattice Clocks',
    venue: 'Nature Photon. 14, 411–415',
    identifier: 'DOI:10.1038/s41566-020-0619-8'
  },
  {
    id: 91,
    topicGroup: 'Experimental Facilities: GW, PTAs, Clocks, VLBAI, CMB, LHC',
    authors: 'M. Cepeda et al. (HL-LHC Physics Working Group)',
    year: '2019',
    title: 'Higgs Physics at the HL-LHC and HE-LHC (CERN Yellow Report)',
    venue: 'CERN Yellow Rep. Monogr. 7, 221–584',
    identifier: 'arXiv:1902.00134'
  },

  // --- Technical Corrections & Precision Refinements ([92]–[106]) ---
  {
    id: 92,
    topicGroup: 'Information Geometry & Quantum Fisher Information',
    authors: 'D. Šafránek',
    year: '2017',
    title: 'Discontinuities of the Quantum Fisher Information and the Bures Metric',
    venue: 'Phys. Rev. A 95, 052320',
    identifier: 'DOI:10.1103/PhysRevA.95.052320'
  },
  {
    id: 93,
    topicGroup: 'Quantum Thermodynamics & Open Systems',
    authors: 'H. Spohn',
    year: '1978',
    title: 'Entropy Production for Quantum Dynamical Semigroups',
    venue: 'J. Math. Phys. 19, 1227–1230',
    identifier: 'DOI:10.1063/1.523789'
  },
  {
    id: 94,
    topicGroup: 'Quantum Extremal Surfaces & Entropy Bounds',
    authors: 'S. Balakrishnan, T. Faulkner, Z. U. Khandker & H. Wang',
    year: '2019',
    title: 'A General Proof of the Quantum Null Energy Condition',
    venue: 'JHEP 09, 020',
    identifier: 'arXiv:1706.09432'
  },
  {
    id: 95,
    topicGroup: 'Cosmology, Bounces & Regular Black Holes',
    authors: 'A. H. Chamseddine & V. Mukhanov',
    year: '2017',
    title: 'Resolving Cosmological Singularities & Limiting Curvature',
    venue: 'JCAP 03, 009',
    identifier: 'DOI:10.1088/1475-7516/2017/03/009'
  },
  {
    id: 96,
    topicGroup: 'Cosmology, Bounces & Regular Black Holes',
    authors: 'Y.-F. Cai, W. Xue, R. Brandenberger & X. Zhang',
    year: '2009',
    title: 'Non-Gaussianity in a Matter Bounce',
    venue: 'JCAP 05, 011',
    identifier: 'DOI:10.1088/1475-7516/2009/05/011'
  },
  {
    id: 97,
    topicGroup: 'Noncommutative Geometry & Causal Sets',
    authors: 'A. Belenchia, D. M. T. Benincasa & F. Dowker',
    year: '2016',
    title: 'Nonlocal Scalar Quantum Field Theory from Causal Sets',
    venue: 'Class. Quantum Grav. 33, 245018',
    identifier: 'DOI:10.1088/0264-9381/33/24/245018'
  },
  {
    id: 98,
    topicGroup: 'Screening Mechanisms & Solar System PPN Tests',
    authors: 'G. L. Klimchitskaya, V. M. Mostepanenko, R. I. P. Sedmik & H. Abele',
    year: '2019',
    title: 'Prospects for Testing Casimir and Chameleon Forces with CANNEX',
    venue: 'Phys. Rev. D 100, 123011',
    identifier: 'DOI:10.1103/PhysRevD.100.123011'
  },
  {
    id: 99,
    topicGroup: 'Quantum Thermodynamics & Open Systems',
    authors: 'E. A. Carlen & J. Maas',
    year: '2017',
    title: 'Gradient Flow and Entropy Inequalities for Quantum Markov Semigroups With Detailed Balance',
    venue: 'J. Funct. Anal. 273, 1810–1869',
    identifier: 'DOI:10.1016/j.jfa.2017.05.003'
  },
  {
    id: 100,
    topicGroup: 'Quantum Thermodynamics & Open Systems',
    authors: 'M. Wirth & H. Zhang',
    year: '2023',
    title: 'Curvature-Dimension Conditions for Symmetric Quantum Markov Semigroups',
    venue: 'Ann. Henri Poincaré 24, 717–750',
    identifier: 'DOI:10.1007/s00023-022-01222-3'
  },
  {
    id: 101,
    topicGroup: 'Author Preprints & Problem of Time',
    authors: 'P. A. Höhn, A. R. H. Smith & M. P. E. Lock',
    year: '2021',
    title: 'Trinity of Relational Quantum Dynamics',
    venue: 'Phys. Rev. D 104, 066001',
    identifier: 'DOI:10.1103/PhysRevD.104.066001'
  },
  {
    id: 102,
    topicGroup: 'Experimental Facilities: GW, PTAs, Clocks, VLBAI, CMB, LHC',
    authors: 'G. Agazie et al. (NANOGrav Collaboration)',
    year: '2023',
    title: 'The NANOGrav 15 yr Data Set: Search for Signals from New Physics',
    venue: 'Astrophys. J. Lett. 951, L11',
    identifier: 'arXiv:2306.16219'
  },
  {
    id: 103,
    topicGroup: 'Screening Mechanisms & Solar System PPN Tests',
    authors: 'S. Donadi, K. Piscicchia, C. Curceanu, L. Diósi, M. Laubenstein & A. Bassi',
    year: '2021',
    title: 'Underground Test of Gravity-Related Wave Function Collapse',
    venue: 'Nature Phys. 17, 74–78',
    identifier: 'DOI:10.1038/s41567-020-1008-4'
  },
  {
    id: 104,
    topicGroup: 'Screening Mechanisms & Solar System PPN Tests',
    authors: 'C. Burrage & J. Sakstein',
    year: '2018',
    title: 'Tests of Chameleon Gravity',
    venue: 'Living Rev. Relativ. 21, 1',
    identifier: 'DOI:10.1007/s41114-018-0011-x'
  },
  {
    id: 105,
    topicGroup: 'Cosmology, Bounces & Regular Black Holes',
    authors: 'R. Carballo-Rubio, F. Di Filippo, S. Liberati & M. Visser',
    year: '2023',
    title: 'Regular Black Holes: Towards a New Paradigm of Gravitational Collapse',
    venue: 'Springer Series in Astrophysics and Space Science',
    identifier: 'arXiv:2302.00028'
  },
  {
    id: 106,
    topicGroup: 'Experimental Facilities: GW, PTAs, Clocks, VLBAI, CMB, LHC',
    authors: 'K. Beloy et al. (Boulder Atomic Clock Optical Network — BACON)',
    year: '2021',
    title: 'Frequency Ratio Measurements at 18-Digit Accuracy Using an Optical Clock Network',
    venue: 'Nature 591, 564–569',
    identifier: 'DOI:10.1038/s41586-021-03253-4'
  }
];

export function buildFullMarkdownPaper(): string {
  const chaptersMd = PAPER_CHAPTERS.map((ch) => {
    const subs = ch.subsections
      .map((s) => {
        const eq = s.equation
          ? `\n> **${s.equation.label} [${s.equation.status}]**\n> \`${s.equation.plainText}\`\n> *${s.equation.caption}*\n`
          : '';
        const bullets = s.bulletPoints
          ? `\n${s.bulletPoints.map((b) => `- **${b.label}:** ${b.text}`).join('\n')}\n`
          : '';
        return `### ${s.number}. ${s.title} [Status: ${s.epistemicStatus}]\n\n${s.paragraphs.join('\n\n')}${eq}${bullets}`;
      })
      .join('\n\n');
    return `## Chapter ${ch.number}. ${ch.title}\n\n${ch.leadSummary}\n\n${subs}`;
  }).join('\n\n');

  const appMd = PAPER_APPENDICES.map((app) => {
    const eqs = app.equations.map((e) => `> \`${e.plainText}\``).join('\n');
    return `### Appendix ${app.letter}: ${app.title} [Status: ${app.status}]\n**Statement:** ${app.theoremStatement}\n\n${app.proofParagraphs.join('\n\n')}\n\n${eqs}`;
  }).join('\n\n');

  // NO ORCIDs in References!
  const refsMd = PAPER_REFERENCES.map((r) => {
    const idPart = r.identifier ? ` ${r.identifier}.` : '';
    return `[${r.id}] ${r.authors} (${r.year}). "${r.title}." *${r.venue}*.${idPart}`;
  }).join('\n');

  const authorsLine = PAPER_META.authors
    .map((a) => `${a.name} (ORCID: https://orcid.org/${a.orcid})`)
    .join('; ');

  return `# ${PAPER_META.title}

**Status:** ${PAPER_META.publicationStatus}
**Authors:** ${authorsLine}
**Edition:** ${PAPER_META.edition} · ${PAPER_META.eprint}
**PhySH:** ${PAPER_META.physh} · **MSC 2020:** ${PAPER_META.msc2020}
**Keywords:** ${PAPER_META.keywords.join('; ')}

---

${chaptersMd}

---

## Mathematical & Physical Appendices

${appMd}

---

## References

${refsMd}
`;
}
