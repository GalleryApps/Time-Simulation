/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * IGRT-H12 Full 13-Chapter Research Monograph Dataset (Unicode/HTML Only):
 * "Folding Time Across Hidden Dimensions: Fifth-Dimensional Resonant Geometry,
 *  Mathematical Portals, and the Limits of Spacetime Shortcuts"
 *
 * Structure after Comprehensive Epistemic & Structural Reorganization:
 * - Main Body: Chapters 1–13 (Ch. 9 Negative Results Summary; Ch. 10 What Is Unique to 5D?;
 *   Ch. 11 What Is Not Derived; Ch. 12 Protocols P7–P13; Ch. 13 Extrapolations, Seven Open Problems Constraints & Comprehensive Conclusion)
 * - Consolidated Appendices (Strictly Alphabetical A–L after References):
 *   A–G (5D Differential Geometry, Field Equations, KK Reduction, Geodesics, Hayward/GL, Wormholes, SLD QFI),
 *   H (Executable Suite 102 Assertions, SI Dimensional Audits & Parameter Ledger),
 *   I (Claim–Evidence Ledger & Structural Verification Scorecard), J (Proposed Devices & Analog Systems A–K),
 *   K (Seven Open Problems and How H12 Constrains Them, Category C), L (Speculative Portal Concepts, Category D)
 *
 * Strictly adheres to:
 * - Zero LaTeX syntax anywhere in UI/HTML strings
 * - Four-tier Epistemic Discipline (Category A / B / C / D) on every claim
 * - Exact benchmark alignment with scripts/verify-igrt-h12.mjs (102/102 assertions)
 */

import {
  H12_THEORY_ILLUSTRATIONS_META,
  H12_SUPPLEMENTAL_PLATES_META
} from './igrtH12IllustrationsMeta';
import {
  H12_META,
  H12_MASTER_EQUATIONS,
  H12_METRIC_SIGNATURE_BOX,
  H12_FOUNDATIONAL_EQUATIONS_NOTE,
  H12_ABSTRACT_PARAGRAPHS,
  H12_SCOPE_AND_NON_CLAIMS,
  H12_CHAPTER1_EXPLICIT_STATEMENTS,
  H11_TWELVE_COMPONENTS_AUDIT,
  COMPARISON_4D_VS_5D_IGRT,
  GLOSSARY_5D_TERMS,
  SUMMARY_FOR_PHYSICISTS,
  TIMELINE_5D_PHYSICS,
  SEVEN_TEMPORAL_NOTIONS,
  POSITIVE_CONJECTURES_SUMMARY,
  SIX_BLACK_HOLE_CLASSES,
  NEGATIVE_RESULTS_SUMMARY,
  GLOSSARY_NEGATIVE_THEOREMS,
  WHAT_IS_UNIQUE_TO_5D,
  FIVE_D_OBSERVATIONAL_BOUNDS,
  FIVE_D_SIGNATURES_TEST_MATRIX,
  WHAT_IS_NOT_DERIVED_LEDGER,
  H12_ALL_PROTOCOLS,
  P7_TO_P13_TIMELINE_TABLE,
  P7_TO_P13_FALSIFICATION_TABLE,
  P7_TO_P13_CONFIRMATION_TABLE,
  P7_TO_P13_DECISION_MATRIX,
  H11_VS_H12_PROTOCOLS_COMPARISON,
  H12_PROTOCOL_ANALYSIS_SECTIONS,
  H12_FALSIFICATION_CHECKLIST,
  H12_CONFIRMATION_CHECKLIST,
  H12_FUNDING_AGENCY_SUMMARY,
  ELEVEN_PORTAL_MECHANISMS,
  H12_PROPOSED_DEVICES,
  TWELVE_EXTRAPOLATIONS,
  SEVEN_SOLVED_PHYSICS_PROBLEMS,
  H12_DEFINITIONS_LIST,
  H12_THEOREMS_LIST,
  H12_OPEN_PROBLEMS_LIST,
  H12_PRIOR_AUDIT_RESPONSES,
  EPISTEMIC_BC_GREY_AREA_RUBRIC,
  H11_665_ASSERTIONS_CATALOG,
  REGULATOR_SENSITIVITY_TABLE,
  MODEL2B_CONVERGENCE_AND_MICROCAUSALITY_TABLE,
  P7_TO_P13_NOISE_BUDGET_TABLE,
  P13_SYSTEMATIC_ERROR_BUDGET,
  P13_STATISTICAL_ERROR_BUDGET,
  P7_TO_P13_COMBINED_BOUNDS_TABLE,
  P7_TO_P13_SENSITIVITY_PROJECTION_TABLE,
  P13_SUMMARY_OF_BOUNDS_TABLE,
  P13_DEDICATED_PROTOCOLS_AND_CHECKS,
  APPENDIX_J_DEVICE_DOSSIERS,
  APPENDIX_J_SYNTHESIS_TABLE,
  APPENDIX_J_SYNERGY,
  APPENDIX_J_RISK_ASSESSMENT,
  APPENDIX_J_RESOURCE_REQUIREMENTS,
  H12_APPENDICES,
  H12_REFERENCES,
  type H12EpistemicCategory,
  type H12Equation
} from './igrtH12Apparatus';
import {
  H12_TEN_DOMAIN_AUDITS,
  H12_SIXTEEN_REDTEAM_ATTACKS
} from './igrtH12StressTest';

export interface H12TheoremBox {
  number: string;
  title: string;
  category: H12EpistemicCategory;
  hypotheses: string[];
  statement: string;
}

export interface H12WorkedExample {
  title: string;
  setup: string;
  steps: string[];
  resultEquation: H12Equation;
  takeaway: string;
}

export interface H12Subsection {
  number: string;
  anchorId: string;
  title: string;
  category: H12EpistemicCategory;
  paragraphs: string[];
  equation?: H12Equation;
  theoremBox?: H12TheoremBox;
  workedExample?: H12WorkedExample;
  bulletPoints?: { label: string; text: string }[];
}

export interface H12Chapter {
  number: number;
  anchorId: string;
  runningLabel: string;
  title: string;
  leadSummary: string;
  subsections: H12Subsection[];
}

export const H12_CHAPTERS: H12Chapter[] = [
  {
    number: 1,
    anchorId: 'h12-chapter-1',
    runningLabel: 'Chapter 1 · H11 → H12 Continuity & Epistemic Hygiene',
    title: 'From Four-Dimensional IGRT-H11 to Higher-Dimensional Geometry',
    leadSummary:
      'Introduces four-dimensional vs. five-dimensional geometry, reconstructs all 12 H11 pillars, codifies signature (−,+,+,+,+), compares 4D vs. 5D structure in Tables 1.1–1.3, and states 20 binding epistemic safeguards.',
    subsections: [
      {
        number: '1.0',
        anchorId: 'h12-sec-1-0',
        title: 'Introduction',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Imagine walking across a vast, flat sheet of paper. Everything you can see, measure, and touch—left–right, forward–backward, up–down, plus the ticking flow of time—lives on that four-dimensional sheet (known in physics as a 4D brane). Our companion monograph, IGRT-2026-H11, showed how physical time itself emerges smoothly on that four-dimensional sheet from quantum information geometry. This second work, IGRT-2026-H12, asks a simple, natural "what if": could our universe actually sit inside a five-dimensional room (an unseen bulk with one extra spatial direction y), and if so, could anything ever take a shortcut through it?',
          'Why Intellectual Honesty Matters First: Ideas about extra dimensions often inspire dramatic science-fiction claims about wormholes, instant travel, or faster-than-light quantum messaging. Before chasing such possibilities, Chapter 1 draws an unmistakable line between proven mathematics, unproven conjectures, and real experiments. Throughout this monograph, the word "portal" strictly denotes a mathematical geometric or state-space connection—never a sci-fi traversable tunnel—and Chapter 9 summarizes exact negative theorems showing why ordinary black holes, flat extra circles, and tabletop vacuum cavities cannot act as shortcuts.',
          'How This Monograph Is Organized: This follow-up work intentionally separates established negative proofs from conjectural five-dimensional possibilities and laboratory analog systems. Readers seeking the strongest scientific content should go directly to Chapter 9 (Negative Results Summary). Readers seeking the positive conjectures should go to Chapter 4 (Beltrami Geodesics, Category C). Readers seeking experimental tests should go to Chapter 12 (Protocols P7–P13). Readers seeking non-technical orientation alongside structured comparisons should consult this introduction together with Chapter 2’s opening overview, Tables 1.1–1.3, and the Glossary of 5D Terms at the end of Chapter 1, while technical auditors should inspect Chapter 2 (5D action variation δS_total/δG^{AB} = 0, regulators, and Eöt-Wash bounds), Chapters 4–6, and Chapter 7.',
          'Standardized Metric Signature & Grey-Area Discipline: Throughout IGRT-H12, four-dimensional spacetime M_4 carries strict mostly-plus Lorentzian signature (−, +, +, +) with perfect-fluid trace T^μ_μ = −ρc² + 3p, and its five-dimensional extension M_5 = M_4 × K_1 carries (−, +, +, +, +) where the fifth coordinate y is spacelike (+dy²). The metric signature is (−,+,+,+,+). Mixed signatures are excluded. Foundational equations declaration: Eqs. (H12.0.1) and (H12.0.2) are postulated, not derived. They define the 5D hypothesis. To resolve grey-area edge cases between Derived (Category B) and Conjectural (Category C), H12 enforces the Category B/C Boundary Rubric Box placed at the opening of Chapter 1 (Table 1.3): any exact mathematical theorem proven unconditionally from Category A or H11 premises (such as negative obstruction theorems) receives Category B, whereas any variational calculation whose physical background metric or radion potential is postulated rather than derived from a ghost-free 5D action is quarantined strictly in Category C.'
        ]
      },
      {
        number: '1.1',
        anchorId: 'h12-sec-1-1',
        title: 'Audit & Reconstruction of IGRT-H11 Core Architecture (665 Assertions Preserved)',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'IGRT-2026-H11 formulates physical time inside strictly four-dimensional Lorentzian spacetime (M_4, g_μν) equipped with a principal projective-Hilbert fiber bundle π: P → M_4 whose fiber PU(H) encodes unitarily inequivalent local quantum states. Along any timelike curve γ(λ), proper clock duration dτ is identified identically with the Symmetric Logarithmic Derivative (SLD) Quantum Fisher Information arc length scaled by the positive modular Hamiltonian spectral gap σ_1(K_ξ) > 0 and modular energy scale E_mod.',
          'All 12 foundational H11 components—verified deterministically by 665 programmatic assertions and 6 source-hygiene checks in scripts/verify-igrt-monograph.mjs—are audited in Table 1.1 and itemized across Groups A–F in Table 2.1. In Table 1.1, postulated 5D extensions (Rows 1, 4, 5, 8, 9, 10) carry Category C — Conjectural status wherever full 5D dynamical derivations are absent, whereas 5D Lorentzian microcausality (Row 12) follows directly from signature (−,+,+,+,+) as Category A. Across the H11 ↔ H12 Four-Tier Epistemic Crosswalk, Component 7 inherits H11 §8.2’s candid statistical caveat that Planck–DESI DR2 model comparison (ΔAIC = −1.84, Δln Z = +1.42; 4.8σ → 1.8σ SH0ES reduction vs. 2.6σ DESI baseline) represents weak-to-moderate input-driven evidence rather than a 5σ cosmological proof.'
        ],
        equation: {
          label: '(1.1)',
          category: 'CATEGORY B — DERIVED',
          unicodeHtml:
            'κ<sub>ψ</sub> = ℏ<i>c</i> ℓ<sub>Pl</sub> / (12π) = 1.3554 × 10<sup>−62</sup> J·m<sup>2</sup> = 2.1727 × 10<sup>−21</sup> GeV<sup>−1</sup>, &nbsp;&nbsp; ξ<sub>0</sub> = 2<sup>−1/4</sup> ≈ 0.840896',
          plainText:
            'kappa_psi = hbar * c * ℓ_Pl / (12 pi) = 2.1727e-21 GeV^-1, xi_0 = 2^(-1/4) = 0.840896',
          caption: 'Canonical H11 Araki modular-coupling constant and Hayward core regularity ratio preserved identically on the 4D brane.'
        }
      },
      {
        number: '1.2',
        anchorId: 'h12-sec-1-2',
        title: 'EFT Transition Thresholds, Perturbative Axiom Preservation Proof & SHA-256 Locking',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'Why Heavy Extra Dimensions Cannot Disturb Low-Energy Experiments: Before exploring five-dimensional geometry, a critical consistency check must succeed: adding a hypothetical fifth dimension cannot break any established four-dimensional triumph already proven in IGRT-2026-H11 [1]. Think of a massive bell requiring a sharp 4.485 millielectronvolt hammer strike to emit its lowest note; a gentle 1 nanoelectronvolt atomic-clock tap carries less than one-millionth of the energy needed to ring that bell. In quantum field theory, this intuitive barrier is formalized by the Appelquist–Carazzone decoupling theorem: any Kaluza–Klein excitation whose mass threshold m_KK^(1) = ℏc/R_5 lies above the experimental probe energy E freezes out of real production and leaves only tiny virtual corrections scaling as (E / m_KK^(1))².',
          'Exact Dimensional Reduction Scale Hierarchy & SHA-256 Preregistration Lock: H11 [1] excludes extra spatial dimensions from its scope and carries a preregistration SHA-256 digest (57cf3f1cef74a45cd936663f1b017212e2f64b1bee05f55cdff9068a2b05048d) locked prior to 2026–2036 empirical runs P1–P6. To guarantee permanent immutability against software updates, scripts/verify-igrt-h12.mjs automatically reads src/types/harmonizedPaperApparatus.ts on every execution and asserts verbatim match with that 64-character hex digest. Matching the 5D Einstein–Hilbert reduced Planck integral M̄_Pl² = R_5 M_5³ = 2π R_5 M_*³ (on flat S¹ with reduced 4D Planck scale M̄_Pl = M_Pl/√(8π) = 2.4353 × 10¹⁸ GeV, effective scale M_5 = (2π)^{1/3} M_* = 2.985 × 10⁸ GeV, and reduced-circumference scale M_* = 1.618 × 10⁸ GeV) or M̄_Pl² = (M_5³/k)(1 − e^{−2kπR_5}) (on warped AdS_5) sets the Lorentz-invariant effective-field-theory hierarchy: The H11 low-energy limit is exact at E ≪ m_KK^(1). Below E ≪ m_KK^(1) ≡ ℏc/R_5 ≥ 4.485 meV (Eöt-Wash limit R_5 ≤ 44 μm [5]), bulk KK modes stay strictly virtual; above m_KK^(1), discrete KK gravitons propagate until 5D gravity encounters its perturbative UV cutoff M_5 (≥ 2.985 × 10⁸ GeV flat S¹, 3.761 × 10⁸ GeV orbifold S¹/ℤ_2, or 1.8101 × 10¹⁸ GeV warped AdS_5 [2]), stabilized dynamically by a Goldberger–Wise radion mass [21].',
          'Non-Perturbative Resolvent, Explicit KK Correction Summation & Axiom Stability Proof: Spectral decomposition of the positive self-adjoint bulk Laplacian on M_4 × K_1 under Dirichlet/Neumann orbifold boundary conditions separates the exact 5D Green resolvent into zero-mode plus Sturm–Liouville gapped KK spectrum (−□_5 + iε)⁻¹ = (−□_4 + iε)⁻¹ + ∑_{n ≥ 1} |ψ_n(0)|² (−□_4 + m_n² + iε)⁻¹. At four-momentum transfer E ≪ m_KK^(1), expanding each massive propagator (−q² + m_n²)⁻¹ = m_n⁻² [1 + E²/m_n² + O((E/m_n)⁴)] yields exact dimensionless relative KK correction δ_KK(E) = ∑_{n=1}^∞ (E/m_n)² = (E/m_KK^(1))² ζ(2) = (π²/6)(E/m_KK^(1))² for flat S¹ (and single-mode form factor (E/m_KK^(1))² / [1 + (E/m_KK^(1))²]), bounded strictly in operator norm by ‖(−□_4 + m_1²)⁻¹‖ ≤ (m_KK^(1)² − E²)⁻¹.',
          'Regulator Invariance & Protocol-by-Protocol Suppression Audit: Evaluating δ_KK(1 neV) across five independent ultraviolet regularization schemes confirms that H11 preservation is not a renormalization artifact: Tree-level cutoff (4.972 × 10⁻¹⁴), Heat-Kernel exponential regulator (4.972 × 10⁻¹⁴), Pauli–Villars subtraction (4.972 × 10⁻¹⁴), Dimensional Regularization MS-bar (9.645 × 10⁻¹⁵), Functional Renormalization Group Litim cutoff (3.149 × 10⁻¹⁶), and full KK ζ(2) summation (8.179 × 10⁻¹⁴) all keep 1 neV corrections below 10⁻¹³ (Table 2.2). Consequently, across every H11 physical regime—from pulsar timing arrays (10⁻¹⁵ eV, suppression ~10⁻²⁵) and atomic clocks (1 neV, 4.972 × 10⁻¹⁴) to cosmic microwave background recombination (0.3 eV at decoupling, 10⁻¹¹ in warped AdS_5)—all 12 H11 axioms, canonical constants (κ_ψ, ξ_0, K_echo, M_rem, H_0), and 665 verified assertions remain completely invariant.'
        ],
        bulletPoints: [
          { label: 'Regime I — Nanohertz Cosmology & PTA (H11 P1/P3, E ~ 10⁻¹⁵ eV)', text: 'KK virtual ratio E / m_KK^(1) ~ 10⁻¹²; virtual 5D distortion < 10⁻²⁴, preserving H11 cosmological parameters H_0 = 70.77 ± 0.72 and n_s = 0.9637 verbatim.' },
          { label: 'Regime II — Laboratory Optical & Modular Clocks (E = 1 neV)', text: 'Suppression δ_KK = 4.972 × 10⁻¹⁴ (Tree/PV/HK) down to 3.149 × 10⁻¹⁶ (FRG Litim); verified stable across ±2 μm Eöt-Wash experimental uncertainty.' },
          { label: 'Regime III — Cryogenic vs. Ambient Thermal Threshold (4 K → 300 K)', text: 'Liquid helium at 4.2 K yields δ = 5.873 × 10⁻³ inside the 44 μm flat EFT, whereas 77 K (1.48× m_KK) and 300 K (5.76× m_KK) require warped TeV–Planck AdS_5 screening.' },
          { label: 'Regime IV — 5D Effective Gravity Breakdown (M_5 Cutoff)', text: 'Perturbative 5D graviton loops hit unitarity ceiling at M_5 = 2.985 × 10⁸ GeV (S¹), 3.761 × 10⁸ GeV (S¹/ℤ_2), or 1.8101 × 10¹⁸ GeV (warped AdS_5, k = 10¹⁸ GeV), bounded safely by SHA-256 lock.' }
        ],
        theoremBox: {
          number: 'Boundary Theorem 1.1',
          title: 'Low-Energy Decoupling, Non-Perturbative UV Regulators & H11 Equivalence',
          category: 'CATEGORY B — DERIVED',
          hypotheses: [
            'Fifth coordinate compactification or AdS_5 warp scale satisfies Eöt-Wash torsion-balance constraint R_5 ≤ 44 ± 2 μm (m_KK^(1) ≥ 4.485 meV).',
            'Radion Φ_rad is stabilized above meV scales via Goldberger–Wise or Chameleon/Vainshtein potential with spectral gap m_1 ≥ 4.485 meV.'
          ],
          statement:
            'By the exact Sturm–Liouville resolvent bound ‖(−□_4 + m_1²)⁻¹‖ ≤ (m_KK^(1)² − E²)⁻¹, all laboratory and astrophysical processes within H11 domain E ≪ m_KK^(1) suppress Kaluza–Klein graviton and Araki-scalar form-factor corrections uniformly below 8.179 × 10⁻¹⁴ at 1 neV across tree-level (4.972 × 10⁻¹⁴), Heat-Kernel (4.972 × 10⁻¹⁴), Pauli–Villars, MS-bar (9.645 × 10⁻¹⁵), and FRG Litim (3.149 × 10⁻¹⁶) UV regulators, preserving all 665 H11 assertions unaltered.'
        }
      },
      {
        number: '1.3',
        anchorId: 'h12-sec-1-3',
        title: 'Twenty Explicit Epistemic Boundaries & Foundational Non-Claims',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'To eliminate any ambiguity regarding 5D bulk observability—distinguishing invariant physical temporal folding from coordinate gauge choices—the following twenty numbered safeguards (Safeguard 1 through Safeguard 20) govern every theorem, protocol, and appendix in IGRT-2026-H12 and may be cited by safeguard number throughout Chapters 2–13:',
          ...H12_CHAPTER1_EXPLICIT_STATEMENTS.map((stmt, idx) => `Safeguard ${idx + 1}. ${stmt}`)
        ]
      }
    ]
  },
  {
    number: 2,
    anchorId: 'h12-chapter-2',
    runningLabel: 'Chapter 2 · 5D Bulk Geometry & Dimensional Reduction',
    title: 'Five-Dimensional Information-Geometric Architecture',
    leadSummary:
      'Introduces compact and warped extra-dimensional geometry, traces the 1921–2026 timeline, proves principal bundle orthogonality G_{Ai} = 0, executes explicit 5D action variation, and derives Eöt-Wash and regulator bounds.',
    subsections: [
      {
        number: '2.0',
        anchorId: 'h12-sec-2-0',
        title: 'Introduction',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Picture a garden hose stretched across a backyard. Seen from a second-story window, the hose looks like a thin one-dimensional line—an ant crawling along it appears restricted solely to moving forward or backward. Step closer with a magnifying glass, however, and you see that an ant tiny enough can also walk all the way around the tight circular thickness of the hose. Beginning with Theodor Kaluza in 1921 and Oskar Klein in 1926, theoretical physicists have used that intuitive geometry to ask a profound structural question: could our familiar four-dimensional universe hide an ultra-small circular fifth direction at every point, or sit as a suspended four-dimensional membrane inside a warped higher-dimensional space?',
          'As the 1921–2026 timeline below illustrates, modern physics explores two main geometric mechanisms by which an extra spatial dimension (y) could evade daily detection. In compactification (Kaluza–Klein theory), the extra direction loops back on itself with microscopic radius R_5: only wavelengths smaller than R_5 notice it. In warped braneworld geometry (Randall–Sundrum 1999), an exponential gravitational warp factor confines atoms, light, and electromagnetic forces strictly onto the four-dimensional sheet at y = 0, leaving only gravity free to sample the surrounding five-dimensional bulk.',
          'Why Does Everyday Physics Not Break?: Ultra-sensitive laboratory torsion pendulums built by the Washington Eöt-Wash group [5] measure inverse-square gravity down to 52 micrometers, proving that any flat circular fifth dimension must be thinner than R_5 ≤ 44 micrometers—smaller than half the width of a human hair. Translating that spatial wall into quantum energy via Heisenberg uncertainty sets a strict floor of 4.485 millielectronvolts for the lightest extra-dimensional graviton. Below that floor, Chapter 2 proves across six independent renormalization regulators that interference with optical atomic clocks drops below five parts in one hundred trillion (4.972 × 10⁻¹⁴), keeping all known four-dimensional chemistry, biology, and H11 predictions completely invariant.',
          'Why Geometry Must Never Be Confused With Quantum State Space: A subtle conceptual trap has misled many earlier discussions of higher-dimensional quantum gravity. In IGRT-2026-H11, every spacetime event already carries an attached internal space—the projective Hilbert fiber PU(H) parameterized by coordinates θ—whose Bures metric determines clock duration dτ. Extending base spacetime to include a fifth spatial direction y raises an urgent question: could moving along y accidentally tilt or contaminate quantum state space θ? Section 2.1 resolves that question directly from a gauge-invariant 5D Yang–Mills–Araki action, proving identically that G_{Ai} = 0: the internal Hilbert fiber remains mathematically perpendicular to the spatial bulk coordinate.',
          'Roadmap of Chapter 2: Following the historical timeline of five-dimensional physics (1921–2026), Section 2.1 separates four distinct physical interpretations of y and proves bundle orthogonality cleanly. Section 2.2 executes the full Palatini variation δS_total / δG^{AB} = 0 on the ℤ_2 orbifold bulk, derives Eqs. (H12.0.1)–(H12.0.2), isolates exactly which warp parameters satisfy ghost-free 5D Einstein–Maxwell equations versus which remain phenomenological Category C ansätze, and anchors Tables 2.1–2.2 verifying every H11 closure and regulator sensitivity bound.'
        ]
      },
      {
        number: '2.1',
        anchorId: 'h12-sec-2-1',
        title: 'Four Physical Realizations of y & Bundle Orthogonality Proof (G_{Ai} = 0)',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'In lifting M_4 → M_5 with local coordinates X^A = (x⁰, x¹, x², x³, y), four mathematically distinct interpretations of the fifth coordinate y must be cleanly separated before writing field equations: (i) Flat compact Kaluza–Klein circle y ∈ S¹ of radius R_5; (ii) Warped S¹/ℤ_2 Randall–Sundrum bulk coordinate y ∈ [0, π R_5] with warp scale k; (iii) Dynamically accessible bulk embedding coordinate coupled to 5D Weyl projection E_μν; and (iv) Modular-state resonance parameter θ ∈ PU(H)—which MUST NOT be confused with a spatial coordinate.',
          'Variational Derivation of P_5 & Bundle Orthogonality Proof (G_{Ai} = 0): Rather than postulating principal bundle P_5(M_5, PU(H)) purely by analogy, consider the gauge-invariant 5D Einstein–Hilbert–Araki–Yang–Mills action S_{5,bundle} = ∫ d⁵X √(−G) [ (⁵R − 2Λ_5)/(16π G_5) − ¼ Tr(ℱ_{AB}^PU ℱ^{AB,PU}) + ℒ_ψ^(5) ], where Ehresmann gauge connection A_A^i(X) takes values in Lie algebra u(ℋ) on local section σ: U ⊂ M_5 → P_5. Varying S_{5,bundle} under local vertical PU(H) transformations fixes unique torsionless Kaluza–Klein bundle metric dS_total² = G_AB(X) dX^A dX^B + α_QFI² g_ij^QFI(θ) Dθ^i Dθ^j with Dθ^i = dθ^i + A^i_A(X) dX^A and yields the 5D Yang–Mills equation δS_{5,bundle}/δA_A^i = 0 ⇒ ∇_B ℱ^{BA}_{PU} = J^A_{PU} obeying covariant current conservation ∇_A J^A_{PU} = 0. Because quantum state preparation is confined to 4D brane causal diamonds with zero bulk Hilbert source current (J^y_{PU} = 0 ⇒ ℱ_{yμ}^PU = 0 ⇒ flat-connection gauge A^i_y = 0), off-diagonal cross-terms between the fifth spatial coordinate y and fiber coordinates θ^i vanish identically (G_{yi} = α_QFI² g_{ij}^QFI A^j_y = 0 and G_{Ai} = 0 ⇒ ∂/∂y ⊥ PU(H)). Thus bundle separation y ≠ θ is strictly consistent with the 5D action, while whether a physical fifth spatial coordinate y exists in nature remains Category C.'
        ],
        equation: {
          label: '(2.1)',
          category: 'CATEGORY B — DERIVED',
          unicodeHtml:
            'π<sub>5</sub> : <i>P</i><sub>5</sub> → <i>M</i><sub>5</sub> = <i>M</i><sub>4</sub> × <i>K</i><sub>1</sub>, &nbsp;&nbsp; <i>G</i><sub><i>Ai</i></sub> = 0 &nbsp;⇒&nbsp; Fiber(<i>X</i><sup><i>A</i></sup>) = <i>PU</i>(ℋ) ⊥ Span{∂/∂<i>y</i>}',
          plainText: 'pi_5: P_5 -> M_5 = M_4 x K_1, G_{Ai} = 0 => Fiber(X^A) = PU(H) orthogonal to d/dy',
          caption: '5D Principal Information Bundle derived via PU(H)-gauge-invariant 5D Yang–Mills–Araki action, separating bulk coordinate y (Cat. C physically) from state fiber θ^i.'
        }
      },
      {
        number: '2.2',
        anchorId: 'h12-sec-2-2',
        title: '5D Semiclassical Action Variation, Ghost-Free Einstein–Maxwell Bulk & Eöt-Wash Reduction',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'Complete 5D Semiclassical Action Variation δS_total / δG^{AB} = 0, Explicit ODE System for Eq. (H12.0.1) & Worldline Variation for Eq. (H12.0.2): On the ℤ_2 orbifold bulk M_5 with brane boundary ∂M_5 = {y = 0}, the full semiclassical action S_total = ∫ d⁵X √(−G) [ (⁵R − 2Λ_5)/(16π G_5) + ℒ_ψ^(5) + ℒ_EM ] + (8π G_5)⁻¹ ∫_{∂M_5} d⁴x √(−g) [K] + Γ_1-loop[g, Φ_rad] − ∫_{y=0} d⁴x √(−g) σ_brane pairs the Gibbons–Hawking–York surface term S_GHY with 1-loop brane vacuum effective action Γ_1-loop. Executing explicit Palatini variation δS_total / δG^{AB} = 0 (with δ(√−G ⁵R) = √−G [⁵G_{AB} δG^{AB} + ∇_C W^C]) cancels normal derivatives δG_{AB,y} on y = 0 against δS_GHY and yields ⁵G^A_B + Λ_5 δ^A_B = 8π G_5 (T^A_B^(EM) + I^A_B^(5) + [σ_brane g_μν + ⟨τ_{μν}^vac⟩] δ^μ_A δ^ν_B δ(y)) plus Shiromizu–Maeda–Sasaki [4] brane gravity. For general static separable warped line element G_{00} = −A²(y) c², G_{ij} = B²(y) δ_{ij}, G_{yy} = 1 with logarithmic derivatives u_t ≡ A\'/A and u_x ≡ B\'/B, varying S_total produces three radial ODEs: G^0_0 = 3(u_x\' + 2u_x²) = −Λ_5 + 8π G_5 T^0_0, G^i_i = u_t\' + 2u_x\' + u_t² + 2u_t u_x + 3u_x² = −Λ_5 + 8π G_5 T^i_i, and G^y_y = 3(u_t u_x + u_x²) = −Λ_5 + 8π G_5 T^y_y. Integrating with constant rates u_t = α_t k sgn(y), u_x = −α_x k sgn(y) recovers Eq. (H12.0.1): it is uniquely solved in vacuum (T=0, Λ_5 = −6k²) by Randall–Sundrum (α_t = −1, α_x = +1) and in Einstein–Maxwell bulk flux by (1.0, 0.0), whereas phenomenological Model 2B (0.5, 0.5) has nonzero mismatch −G^0_0 + G^x_x = −k² < 0 and remains postulated rather than action-derived. For Eq. (H12.0.2), varying the 5D Polyakov/einbein clock worldline action S_e[X, e] = ½ ∫ (e⁻¹ G_AB Ẋ^A Ẋ^B − e m² c²) dλ with respect to e(λ) and X^A(λ) yields gauge constraint e² = −(m c)⁻² G_AB Ẋ^A Ẋ^B and the 5D geodesic equation d²X^A/dλ² + Γ^A_{BC} Ẋ^B Ẋ^C = 0, from which the invariant clock integral Δτ_5 = c⁻¹ ∫ √(−G_AB Ẋ^A Ẋ^B) dλ and folding ratio η_fold ≡ Δτ_5 / Δτ_4 follow directly.',
          'Exact Tensor Evaluation, Finite-Difference Bianchi Check & Ghost-Free Einstein–Maxwell Bulk: Substituting Eq. (H12.0.1) (A = e^{α_t k|y|}, B = e^{−α_x k|y|}, Φ_rad = 1) into the u_t, u_x ODEs gives scalar curvature ⁵R = −(2 α_t² − 6 α_t α_x + 12 α_x²) k² and mixed Einstein tensor G^0_0 = 6 α_x² k², G^i_i = (α_t² − 2 α_t α_x + 3 α_x²) k², G^y_y = 3(α_x² − α_t α_x) k²—independently verified via central finite-difference metric differentiation (Christoffel → Ricci → Einstein < 10⁻⁶, contracted Bianchi divergence ∇_A G^A_y < 10⁻⁷; Assertion 72). Thus δS_total / δG^{AB} = 0 recovers isotropic vacuum AdS_5 (⁵G^A_B = 6 k² δ^A_B = −Λ_5 δ^A_B in geometric units Λ_5 = −6k², ⁵R = −20 k²) alongside isotropic RS brane-tension tuning σ_brane = 6k/(8π G_5) canceling bulk vacuum density Λ_5/(8π G_5) in [K_{μν} − g_{μν} K]⁺_− = −8π G_5 σ_brane g_{μν} (with outward unit normal n^A = (0, +1)) only for conformal RS (α_t = −1, α_x = +1) [2]. By contrast, asymmetric Model 2B warping (α_t + α_x > 0) is NOT a vacuum solution of δS_total / δG^{AB} = 0: the phenomenological (α_t = 0.5, α_x = 0.5) parameters are assumed rather than derived from a physical field source and strictly violate the 5D Null Energy Condition along both x (−k²) and y (−1.5 k²). For the realizable asymmetric branch (α_t = 1.0, α_x = 0.0). The 5D action is ghost-free Einstein-Maxwell. Specifically, choosing canonical Maxwell term ℒ_EM = −¼ F_{AB} F^{AB} with electric flux F_{0y} = E_0 e^{k|y|} obeying ∂_y(√−G F^{0y}) = 0 gives NEC-satisfying stress tensor T^0_0 = −½ E_0², T^i_i = +½ E_0², T^y_y = −½ E_0², solving G^A_B + Λ_5 δ^A_B = 8π G_5 T^A_B identically at Λ_5 = −½ k² and 8π G_5 E_0² = k² (residual < 10⁻¹⁴); because no macroscopic bulk electric flux F_{0y} has been observed, even this branch remains Category C.',
          'Dynamic Radion Planck Matching [21], 4D Araki Matching, Orbifold S¹/ℤ_2, Eöt-Wash Bound & Thermal/Regulator Sweeps: Matching the 5D causal-diamond relative entropy trace across y gives ψ_4(x) = √(∫_{−π R_5}^{π R_5} Φ_rad(x,y) κ_ψ^(5) [S_Araki^(5)/Vol_4] dy) so H11’s κ_ψ = 2.1727 × 10⁻²¹ GeV⁻¹ stays exact on y = 0. Integrating dynamic radion fluctuations Φ_rad(x, y) = 1 + φ_rad(x) across compact/warped geometry yields M̄_Pl² = R_5 M_5³ = 2π R_5 M_*³ (flat S¹ circumference convention) and M̄_Pl²(φ_rad) = (M_5³/k) ∫_{−π R_5}^{π R_5} k e^{−2k|y|} Φ_rad(x,y) dy = (M_5³/k)(1 − e^{−2kπR_5})(1 + φ_rad) plus canonical 4D Brans–Dicke kinetic term −(3 M̄_Pl² / 2)(∂φ_rad)²/(1 + φ_rad)² (linearized at |φ_rad| ≪ 1). The Eöt-Wash bound is R_5 ≤ 44 μm. Specifically, Ref. [5] establishes a 95% CL single-Yukawa exclusion λ_EW(|α| = 1) = 38.6 μm (corresponding to m_KK^(1) ≥ 5.112 meV and δ_KK(1 neV) = 3.826 × 10⁻¹⁴; Assertion 84), while compactification on S¹ (α_KK = 2) yields R_5 = 44 ± 2 μm [5]. Using CODATA reduced Planck scale M̄_Pl = 2.4353 × 10¹⁸ GeV and R_5 = 44 ± 2 μm yields KK ladder m_KK^(1,2,3) = 4.485 / 8.969 / 13.454 meV (n=1 error +0.214/−0.195 meV), flat S¹ floor M_5(S¹) = 2.985 (±0.045) × 10⁸ GeV (M_* = 1.618 × 10⁸ GeV), S¹/ℤ_2 orbifold floor M_5(S¹/ℤ_2) = 2^{1/3} M_5(S¹) = 3.761 × 10⁸ GeV, and warped AdS_5 scale M_5 = 1.8101 × 10¹⁸ GeV (k = 10¹⁸ GeV, kπR_5 = 35). At 1 neV, non-perturbative Heat-Kernel (4.972 × 10⁻¹⁴) and FRG Litim (3.149 × 10⁻¹⁶) cutoffs confirm full stability, while thermal background sweeps show cryogenic 4 K (δ = 5.873 × 10⁻³) lies safely inside the 44 μm EFT whereas 77 K and 300 K exceed m_KK^(1) by factors 1.48 and 5.76 (Table 2.2).'
        ],
        workedExample: {
          title: 'Worked Example 2.1 — Exact Eöt-Wash Floor, S¹/ℤ_2 Orbifold, Non-Perturbative Regulators & Thermal Sweep',
          setup: 'Compute m_KK^(1..3), M_5(S¹) & M_5(S¹/ℤ_2), M_5_warped, and δ_KK across UV regulators and 4 K / 77 K / 300 K.',
          steps: [
            'KK ladder & ±2 μm propagation: m_KK^(1) = 4.485 (+0.214/−0.195) meV; m_KK^(2) = 8.969 meV; m_KK^(3) = 13.454 meV.',
            'Compactification & orbifold floors: M_5(S¹) = 2.985 (±0.045) × 10⁸ GeV; M_5(S¹/ℤ_2) = 2^{1/3} M_5(S¹) = 3.761 × 10⁸ GeV; warped (k = 10¹⁸ GeV, kπR_5 = 35) ⇒ 1.8101 × 10¹⁸ GeV.',
            'UV regulators at E = 1 neV: Tree (4.972 × 10⁻¹⁴), Pauli–Villars (4.972 × 10⁻¹⁴), Heat-Kernel (4.972 × 10⁻¹⁴), FRG Litim (3.149 × 10⁻¹⁶), MS-bar (9.645 × 10⁻¹⁵), KK ζ(2) sum (8.179 × 10⁻¹⁴).',
            'Thermal & clock sweep: δ(4 K LHe) = 5.873 × 10⁻³ (safe); 77 K (1.48×) & 300 K (5.76×) probe above m_KK^(1); warped 1 TeV suppresses 1 eV / Th-229 to 1.000 × 10⁻²⁴ / 6.981 × 10⁻²³.'
          ],
          resultEquation: {
            label: '(2.2)',
            category: 'CATEGORY B — DERIVED',
            unicodeHtml: 'δ<sub>KK</sub>(1 neV) = 4.972 × 10<sup>−14</sup>, &nbsp; δ<sub>FRG</sub> = 3.149 × 10<sup>−16</sup>, &nbsp; <i>M</i><sub>5</sub>(<i>S</i><sup>1</sup>/ℤ<sub>2</sub>) = 3.761 × 10<sup>8</sup> GeV',
            plainText: 'delta_KK(1 neV) = 4.972e-14, delta_FRG = 3.149e-16, M_5(S^1/Z_2) = 3.761e8 GeV',
            caption: 'Multi-regulator & orbifold verification output of verify-igrt-h12.mjs confirming complete invariance of H11 closures.'
          },
          takeaway: 'Every verified H11 cosmological, optical-clock, and Araki coupling closure remains invariant across perturbative and non-perturbative UV frameworks.'
        }
      }
    ]
  },
  {
    number: 3,
    anchorId: 'h12-chapter-3',
    runningLabel: 'Chapter 3 · Modular Time and Temporal Folding',
    title: 'Modular Time and Temporal Folding',
    leadSummary:
      'Introduces why "time" splits into seven distinct concepts, contrasts them against Connes–Rovelli, ADM, and Braunstein–Caves literature, defines component-wise ℱ_AB, proves gauge invariance of η_fold, and verifies full Model 3 conversions.',
    subsections: [
      {
        number: '3.0',
        anchorId: 'h12-sec-3-0',
        title: 'Introduction',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'In everyday conversation, the single word "time" feels completely unambiguous: it is the steady reading displayed by a wristwatch between sunrise and noon. Inside foundational theoretical physics, however, packing seven unrelated mathematical objects under that single four-letter noun generates pervasive conceptual error. Across quantum field theory, general relativity, and braneworld cosmology, investigators simultaneously manipulate coordinate chart labels (t), proper clock ticks accumulated on our four-dimensional brane (τ_4), hypothetical proper clock ticks accumulated along excursions into a fifth dimension (τ_5), operator-algebraic Tomita–Takesaki modular flow (s_mod), quantum statistical distinguishability distance (s_QFI), equilibrium thermal time (t_th), and cosmological Friedmann–Robertson–Walker expansion age (t_FRW). Chapter 3 untangles all seven quantities cleanly before a single shortcut theorem is stated.',
          'What "Temporal Folding" Does—and Does Not—Mean: Throughout IGRT-2026-H12, temporal folding is defined quantitatively by the dimensionless ratio η_fold ≡ Δτ_5 / Δτ_4 comparing proper duration along a bulk trajectory γ_5 against proper duration along a brane reference γ_4 between the exact same start and finish coincidence events on {y = 0}. Think of two identical airliners departing Paris simultaneously and landing together in New York: if one climbs into a high-altitude jet stream with stronger tailwinds while the other battles headwinds along sea level, their onboard flight-time clocks legitimately register different elapsed durations upon reunion without reversing causality or breaking chronometers. Analogously, η_fold < 1 never implies backward time travel, paradoxes, or magic clock interference; it simply asks whether warped five-dimensional geometry permits a bulk clock path to record less proper duration than a confined brane path.',
          'Why Relabeling a Map Never Changes a Real Clock: A notorious trap in curved-spacetime physics is coordinate-gauge illusion. Nothing stops a theorist from rewriting t → t\' = 0.5 t on a chalkboard so coordinate time appears twice as fast, yet not a single vibrating strontium atom accelerates because of a change of paper labels. To separate authentic geometric clock compression from empty bookkeeping tricks, Section 3.2 writes out the explicit Jacobian transformation law under arbitrary smooth 5D diffeomorphisms X^A → X̃^A(X), proving algebraically that η_fold is a strictly coordinate-invariant scalar provided both worldlines reconnect smoothly at fixed brane coincidence events A, B ∈ {y = 0} within bounded momentum transfer |δP_y| ≤ m_KK^(1) / c.',
          'Bridging Algebra, Geometry, and Real Laboratory Scales: Beyond clarifying relativity, Chapter 3 connects the operator-algebraic foundations of quantum statistical mechanics—Tomita–Takesaki KMS analyticity and Connes–Rovelli thermal time [20]—directly to Braunstein–Caves Quantum Fisher information distance [10] inside the projective Hilbert fiber PU(H). When generalized to include non-zero ADM shift vectors N_μ(X) in the 4+1 spacetime split, the Temporal Folding Tensor ℱ_AB ≡ e^{2α_t k|y|} G_AB − g_AB^(4) exposes every physical lapse and frame-dragging bulk mixing term (ℱ_{0i}, ℱ_{μy}, ℱ_{ij}) without coordinate ambiguity.',
          'Roadmap of Chapter 3: Section 3.1 assembles all seven orthogonal temporal notions in Table 3.1 alongside standard ADM, Borchers–Haag, Connes–Rovelli, and Page–Wootters literature, deriving component-wise Eq. (3.1) for ℱ_AB. Section 3.2 establishes Formal Diffeomorphism Invariance Theorem 3.1 and walks step by step through the verified Model 3 unit conversions translating a 3.335641 ms light baseline into boosted brane clock τ_brane = 3.33531 ms, folded interval τ_folded = 2.16795 ms, and swept Bures Hilbert rotation s_QFI = 3.2937 × 10¹² rad.'
        ]
      },
      {
        number: '3.1',
        anchorId: 'h12-sec-3-1',
        title: 'Taxonomy of Seven Temporal Notions, Component-Wise ℱ_AB & Tomita–Takesaki Modular Link',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Discussions of "temporal folding" frequently collapse distinct mathematical quantities—confusing coordinate-chart reparametrizations of t with invariant proper-time intervals Δτ, Tomita–Takesaki modular flow s_mod (Connes & Rovelli 1994 [20]), or Bures information distance s_QFI (Braunstein & Caves 1994 [10]). Table 3.1 codifies seven mutually orthogonal temporal notions alongside their exact correspondences with ADM slicing, Borchers–Haag modular theory, Connes–Rovelli thermal time [20], and Braunstein–Caves statistical length [10].',
          'Tomita–Takesaki Eigenstates, KMS Analyticity & Full ADM-Shift Tensor ℱ_AB: Along causal diamond algebra 𝒜(𝒪) with modular operator Δ_ξ = e^{−K_ξ} generated by grand-canonical local Hamiltonian K_ξ = β(H_loc − μ N), unitary automorphism σ_s(A) = Δ_ξ^{is} A Δ_ξ^{−is} acts analytically across the KMS strip 0 < Im(s) < 1, imposing periodicity β = (k_B T)⁻¹ and thermal time t_th = −ℏ β s_mod [20]. Expanding local clock states |θ(λ)⟩ in eigenvectors |n⟩ of K_ξ fixes clock rate dτ_5 / dλ = α_mod √(g_ij^QFI θ̇^i θ̇^j), where s_QFI has dimensionless units rad and α_mod ≡ ℏ / (E_mod σ_1(K_ξ)) has units s, obeying the quantum Cramér–Rao speed limit Δτ ≥ ℏ/(2 E_mod σ_1) verified for Model 3 in Assertion 79 [10]. Retaining general ADM shift vector N_i(X) ≠ 0 and bulk lapse-shift N_y(X) in the shifted 4+1 warped line element ds_5² = −e^{2α_t k|y|} c² dt² + e^{−2α_x k|y|} g_ij^(3)(dx^i + N^i dt)(dx^j + N^j dt) + 2 N_y Φ_rad dt dy + Φ_rad² dy² gives G_00 = −e^{2α_t k|y|} c² + e^{−2α_x k|y|} N_i N^i, G_0i = e^{−2α_x k|y|} N_i, G_ij = e^{−2α_x k|y|} g_ij^(3), G_0y = N_y Φ_rad, and G_yy = Φ_rad². Defining Temporal Folding Tensor ℱ_AB ≡ e^{2α_t k|y|} G_AB − g_AB^(4) yields exact brane-vanishing components ℱ_00 = c²(1 − e^{4α_t k|y|}) + (e^{2(α_t−α_x)k|y|} − 1) N_i N^i, ℱ_0i = (e^{2(α_t−α_x)k|y|} − 1) N_i, ℱ_ij = (e^{2(α_t−α_x)k|y|} − 1) g_ij^(3), ℱ_0y = e^{2α_t k|y|} N_y Φ_rad, and ℱ_yy = e^{2α_t k|y|} Φ_rad²—vanishing identically across all 4D brane indices ℱ_{μν}|_{y=0} ≡ 0 (verified in Assertion 82).'
        ],
        equation: {
          label: '(3.1)',
          category: 'CATEGORY B — DERIVED',
          unicodeHtml:
            '<i>d</i>τ<sub>5</sub> = α<sub>mod</sub> <i>ds</i><sub>QFI</sub> [s], &nbsp; ℱ<sub>0<i>i</i></sub> = (<i>e</i><sup>2(α<sub><i>t</i></sub>−α<sub><i>x</i></sub>)<i>k</i>|<i>y</i>|</sup> − 1) <i>N</i><sub><i>i</i></sub>, &nbsp; ℱ<sub><i>ij</i></sub> = (<i>e</i><sup>2(α<sub><i>t</i></sub>−α<sub><i>x</i></sub>)<i>k</i>|<i>y</i>|</sup> − 1) <i>g</i><sub><i>ij</i></sub><sup>(3)</sup>, &nbsp; ℱ<sub>0<i>y</i></sub> = <i>e</i><sup>2α<sub><i>t</i></sub><i>k</i>|<i>y</i>|</sup> <i>N</i><sub><i>y</i></sub> Φ<sub>rad</sub>',
          plainText:
            'd tau_5 = alpha_mod ds_QFI [s], F_0i = (e^{2(alpha_t-alpha_x)k|y|} - 1) N_i, F_ij = (e^{2(alpha_t-alpha_x)k|y|} - 1) g_{ij}^{(3)}, F_0y = e^{2 alpha_t k |y|} N_y Phi_rad',
          caption: 'Modular QFI proper-time law alongside general shifted 4+1 ADM Temporal Folding Tensor F_{AB} satisfying F_{mu nu}|_{y=0} = 0 identically.'
        }
      },
      {
        number: '3.2',
        anchorId: 'h12-sec-3-2',
        title: 'Formal Diffeomorphism Proof of Invariant Clock Folding & Reconnection Homotopy Criteria',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'Jacobian Proof & Reconnection Junction Criteria at {y = 0}: Consider any smooth diffeomorphism X^A → X̃^A(X) connecting charts on M_5 with Jacobian J^A_B = ∂X̃^A / ∂X^B. Under tensor pullback, G̃_CD = (J⁻¹)^A_C (J⁻¹)^B_D G_AB and Ẋ̃^C = J^C_A Ẋ^A, so the quadratic integrand transforms identically as G̃_CD Ẋ̃^C Ẋ̃^D = G_AB Ẋ^A Ẋ^B at every point λ, eliminating coordinate time shifts t → t\'(t, y) identically. Comparing clocks requires fixed topological homotopy classes γ_4, γ_5 sharing invariant departure and reconnection coincidence events A, B ∈ {y = 0} with finite exit/re-entry momentum transfer |δP_y| ≤ m_KK^(1) / c (converting KK rest energy m_KK^(1) = 4.485 meV to momentum units via /c), ensuring unambiguous scalar comparison η_fold ≡ Δτ_5 / Δτ_4 without orbifold self-intersection ambiguities.',
          'Step-by-Step Model 3 Unit Conversions: Take brane baseline L_4 = 1.0 × 10⁶ m, c = 2.99792458 × 10⁸ m/s, and kinematic boost γ = 1.0001. Coordinate interval Δt_coord = L_4 / c = 3.335641 × 10⁻³ s = 3.335641 ms reduces on a boosted brane clock to τ_brane = Δt_coord / γ = 3.33531 ms. Applying an Araki modular fold factor 0.65 yields τ_folded = 0.65 × 3.33531 ms = 2.16795 × 10⁻³ s (2.16795 ms). For E_mod = 1.0 eV = 1.602176634 × 10⁻¹⁹ J and σ_1(K_ξ) = 1.0, total swept Bures angle equals s_QFI = (τ_folded · E_mod · σ_1) / ℏ = (2.16795 × 10⁻³ × 1.6021766 × 10⁻¹⁹) / 1.0545718 × 10⁻³⁴ = 3.2937 × 10¹² rad.'
        ],
        theoremBox: {
          number: 'Theorem 3.1',
          title: 'Necessary & Sufficient Gauge-Invariant Temporal Folding Criterion',
          category: 'CATEGORY B — DERIVED',
          hypotheses: [
            'Two piecewise-C² timelike worldlines γ_4 ⊂ {y = 0} and γ_5 ⊂ M_5 share common fixed brane coincidence endpoints A = (t_A, x_A, 0) and B = (t_B, x_B, 0) with well-posed brane reconnection junctions.',
            'Both clocks obey H12 Eq. (H12.0.2) locally with diffeomorphism-invariant metric G_AB and signature (−,+,+,+,+).'
          ],
          statement:
            'Because Δτ_5 = c⁻¹ ∫_{γ_5} √(−G_AB Ẋ^A Ẋ^B) dλ and Δτ_4 = c⁻¹ ∫_{γ_4} √(−g_μν ẋ^μ ẋ^ν) dλ are strictly coordinate-invariant scalars, non-trivial physical temporal folding (η_fold ≡ Δτ_5 / Δτ_4 < 1) holds if and only if γ_5 accumulates strictly less modular-QFI arc length Δs_QFI^(5) < Δs_QFI^(4) due to physical bulk lapse reduction (w_t(y) < 1) or bulk spatial shortcutting—and is impossible via pure coordinate reparametrization.'
        }
      }
    ]
  },
  {
    number: 4,
    anchorId: 'h12-chapter-4',
    runningLabel: 'Chapter 4 · Geodesics & Shortcut Limits',
    title: 'Higher-Dimensional Geodesics and Spacetime Shortcuts',
    leadSummary:
      'Proves analytically across multi-baseline scales and arbitrary conformal warp functions w(y) that flat S¹ and conformal RS AdS_5 permit zero shortcuts (Category B), then details Category C Beltrami shooting geodesics with EL and ds_5² = 0 verification.',
    subsections: [
      {
        number: '4.0',
        anchorId: 'h12-sec-4-0',
        title: 'Introduction',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Every time popular science discusses a fifth dimension, the same seductive rumor quickly follows: if our three-dimensional universe is curved or tucked inside a higher space, perhaps a beam of light or a spacecraft could dive off our four-dimensional sheet, cut straight across the unseen interior like a chord across a bent ribbon, and beat an ordinary laser beam staying on the surface. Intuition from folded paper maps makes that shortcut sound effortless. Yet intuition built on static Euclidean paper routinely fails inside Einsteinian Lorentzian geometry, where both space distances and clock ticks warp simultaneously.',
          'To settle this question without guesswork, Chapter 4 puts higher-dimensional travel on trial across three progressively subtler geometries. Think first of an ordinary unwarped extra circle (flat Kaluza–Klein space M_4 × S¹): stepping sideways into y adds extra path length by the ordinary Pythagorean theorem without boosting light speed, so every detour—including complex corkscrew windings around the hidden circle—strictly arrives late (L_5 > L_4). Next, consider the celebrated Randall–Sundrum warped fifth dimension (conformal AdS_5 [2]): although gravity bends sharply along y, it shrinks rulers and slows clocks in exact tandem (α_t + α_x = 0), keeping the effective coordinate speed of light locked strictly at c_eff(y) = c everywhere.',
          'Why Equal Warping Blocks Every Shortcut: Section 4.1 establishes No-Go Theorem 4.1 across arbitrary baselines from one meter to cosmic megaparsecs and proves the Generalized Conformal Horizon Theorem: whenever time and space warp equally along the fifth coordinate, every five-dimensional light beam projects directly inside the ordinary four-dimensional lightcone, guaranteeing Δt_5 ≥ Δt_4 with mathematical certainty. Only by breaking that balance—making time and space warp asymmetrically (α_t + α_x > 0) so clocks run effectively faster deeper inside the bulk—can curved variational geodesics (known as Beltrami arches) beat surface signals along our brane.',
          'A Strict Boundary Between Geometry and Physical Matter: Does nature actually build asymmetric bulks, or do Einstein’s equations forbid them? Section 4.2 confronts that question head-on with an exact 5D Null Energy Condition factorization proof. Phenomenological Model 2B (α_t = α_x = 0.5) yields striking numerical Beltrami shortcuts (η_fold down to 0.07770 at span k Δx = 50), yet violates positive energy conditions along both brane (−k²) and bulk (−1.5 k²) null directions and remains unconstructed dynamically. By contrast, ghost-free 5D Einstein–Maxwell theory (α_t = 1.0, α_x = 0.0) satisfies all null energy conditions cleanly and solves closed-form Beltrami arches—yet enforces an inescapable horizon ceiling k Δx < π (η_fold^EM → 2/π = 0.63662) and relies on unobserved macroscopic bulk electric flux.',
          'Roadmap of Chapter 4: Section 4.1 derives the exact Cauchy–Schwarz compact-winding inequality and the Poincaré AdS_5 horizon bound (Category B). Section 4.2 then quarantines Beltrami shooting solutions strictly inside Category C (classification of possible geometries, not physical prediction), proves affine geodesic ODE closure (< 2.6 × 10⁻⁹ residual) alongside point-by-point null microcausality ds_5² = 0, and summarizes all results in Tables 4.1–4.2.'
        ]
      },
      {
        number: '4.1',
        anchorId: 'h12-sec-4-1',
        title: 'Negative Theorems: Multi-Baseline M_4 × S¹ & Generalized Conformal Horizon Theorem',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'Analytic Flat Compact M_4 × S¹ Multi-Baseline & Arbitrary-Winding Proof (Category B — Derived): On flat ds_5² = −c² dt² + dx² + dy², null condition ds_5² = 0 fixes c dt/dx = dL_5/dx = √(1 + (y\')²) ≥ 1 identically, with strictly greater inequality dL_5/dx > 1 wherever y\'(x) ≠ 0. For ANY piecewise-smooth excursion or non-monotonic compact winding returning to y = 0 (total variation Y_tot = ∫ |y\'(x)| dx > 0, including closed windings Y_tot ≥ 2π |n| R_5 for winding number n ≠ 0 under sub-44 μm compactification), applying the integral Minkowski/Cauchy–Schwarz triangle inequality in ℝ² gives L_5 = ∫_0^{Δx} √(1 + (y\'(x))²) dx ≥ √(Δx² + Y_tot²) > Δx = L_4 strictly! For illustrative net excursion Y_tot = Δy = 50 m across benchmark brane spans Δx: at Δx = 1 m, L_5/L_4 = 50.01×; at Δx = 1,000 m, L_5/L_4 = 1.001249×; at Δx = 10,000 km (10⁷ m), L_5/L_4 = 1 + 1.25 × 10⁻¹¹ > 1; and across an astrophysical 1 Mpc baseline (3.0857 × 10²² m), L_5/L_4 = 1 + 1.31 × 10⁻⁴² > 1. Thus flat compactification NEVER produces arrival shortcuts across any laboratory or extragalactic distance.',
          'RS Poincaré Jacobian & Analytic Conformal Horizon Proof (Category B — Derived): On conformal Randall–Sundrum AdS_5 [2], ds_5² = e^{−2k|y|}(−c² dt² + dx²) + dy², applying z(y) = k⁻¹ e^{k|y|} yields Jacobian dz/dy = sgn(y) e^{k|y|} = sgn(y) kz, transforming the line element into ds_5² = (kz)⁻²(−c² dt² + dx² + dz²). Equivalently, in Eq. (H12.0.1) α_t = −1, α_x = +1 enforces α_t + α_x = 0, so effective brane-projected speed c_eff(y) = c · e^{(α_t+α_x)k|y|} = c · e⁰ = c identically everywhere (Assertion 71). Symmetric excursions with midpoint height Δz = 0.25/k give numerical delay Δt_5 / Δt_4 = 1.010321 > 1. More generally, on ANY 5D bulk of conformal type ds_5² = w²(y) g_μν^(4)(x) dx^μ dx^ν + dy² over arbitrary curved 4D metric g_μν^(4), setting ds_5² = 0 yields −g_μν^(4) dx^μ dx^ν = w⁻²(y) dy² ≥ 0, proving every bulk path projected back to M_4 is causal inside the 4D lightcone of g_μν^(4) and strictly satisfies Δt_5 ≥ Δt_4 (generalizing Chung & Freese 2000 [3]).'
        ],
        theoremBox: {
          number: 'No-Go Theorem 4.1',
          title: 'CATEGORY B — DERIVED · Generalized Conformal & Flat Horizon No-Shortcut Theorem',
          category: 'CATEGORY B — DERIVED',
          hypotheses: [
            '5D bulk manifold is piecewise-C² with ℤ_2 orbifold symmetry and globally hyperbolic signature (−,+,+,+,+).',
            'Metric takes flat M_4 × S¹ form or generalized curved conformal form ds_5² = w²(y) g_μν^(4)(x) dx^μ dx^ν + dy² with shared temporal-spatial warp w(y).'
          ],
          statement:
            'Every piecewise-C² 5D null curve connecting events A and B on the y = 0 brane projects onto a causal (non-spacelike) trajectory in (M_4, g_μν^(4)) and satisfies Δt_5 ≥ Δt_4 identically. Bulk super-brane shortcuts are strictly forbidden unless either w_t(y) ≠ w_x(y) (asymmetric warping) or extrinsic brane embedding breaks Gauss–Codazzi flatness [3, 4].'
        }
      },
      {
        number: '4.2',
        anchorId: 'h12-sec-4-2',
        title: 'Model 2B Asymmetrically Warped Beltrami Geodesics, Exact 5D NEC Obstruction & P11–P13 Link (Category C)',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'Epistemic Classification & Exact 5D NEC Obstruction Theorem (Assertions 68, 72–73): The positive shortcut theorem is a classification of possible geometries, not a prediction of a physical one. Furthermore, the asymmetric warp required for shortcuts is not derived from a physical principle; no physical mechanism is currently known that could produce it. Contracting mixed 5D Einstein tensor G^A_B along x-null (k^0 = e^{−α_t ky}, k^x = e^{α_x ky}) and y-null (k^0 = e^{−α_t ky}, k^y = 1) bulk vectors proves the exact 5D NEC factorization identities −G^0_0 + G^x_x = (α_t − 3 α_x)(α_t + α_x) k² and −G^0_0 + G^y_y = −3 α_x(α_t + α_x) k². Consequently, phenomenological Model 2B (α_t = 0.5, α_x = 0.5) strictly violates the 5D Null Energy Condition in both the brane x-direction (−k²) and bulk y-direction (−1.5 k²) (Assertion 73), barring standard ghost-free matter support! Conversely, 5D Einstein–Maxwell (α_t = 1.0, α_x = 0.0) obeys the 5D NEC identically (+k² along x, 0 along y) while remaining physically unobserved. Along Beltrami curves [3], minimizing optical action c dt/dx = L(y, y\') = √(e^{−2βky} + e^{−2α_t ky}(y\')²) (β ≡ α_t + α_x) yields conserved first integral H_Beltrami = e^{−2βky}/L = e^{−β k y_peak}. Choosing affine parameter λ with Killing momenta e^{2α_t ky}(c ṫ) = 1 and e^{−2α_x ky} ẋ = C ≡ e^{−β k y_peak}, null constraint ẏ² = e^{−2α_t ky} − C² e^{2α_x ky} differentiates directly via ½ d(ẏ²)/dy = d²y/dλ² = −α_t k e^{−2α_t ky} − α_x k C² e^{2α_x ky} = −Γ^y_{00}(c ṫ)² − Γ^y_{xx} ẋ², proving identically that every Beltrami shooting arch solves the exact 5D affine geodesic ODE d²X^A/dλ² + Γ^A_{BC} Ẋ^B Ẋ^C = 0 (residual 5.56 × 10⁻¹² / 3.48 × 10⁻¹¹ in Assertion 68) while preserving 5D null microcausality ds_5² = [−e^{2α_t ky}(c ṫ)² + e^{−2α_x ky} ẋ² + ẏ²] dλ² = 0 ≤ 0 point-by-point (< 6.11 × 10⁻¹⁶ everywhere).',
          'Exact Closed-Form Ghost-Free Einstein–Maxwell Theorem & Finite-Span Horizon Ceiling (k Δx < π): Setting the ghost-free Einstein–Maxwell parameters (α_t = 1.0, α_x = 0.0) reduces the Beltrami slope equation to y\'(y) = √(e^{2k(y_peak − y)} − 1), which integrates in closed form to k Δx / 2 = arccos(e^{−k y_peak}) < π/2. Consequently, the ghost-free EM bulk exhibits an exact finite-span horizon ceiling k Δx < π (3.141593): above k Δx ≥ π no symmetric turning arch exists without α_x > 0 (whose activation violates 5D NEC). Strictly inside 0 < k Δx < π, turning depth y_peak = −k⁻¹ ln cos(k Δx / 2) and folding ratio η_fold^EM = sin(k Δx / 2) / (k Δx / 2) are exact (at k Δx = 2: y_peak = 0.61563 / k, η_fold = sin(1) = 0.84147, c_eff/c = 1.1884×, verified against N_u = 800 vs 1,600 quadrature to 1.39 × 10⁻⁷, EL residual 1.64 × 10⁻⁹, ds_5² = 4.45 × 10⁻¹⁶; horizon limit lim_{kΔx→π⁻} η_fold^EM = 2/π = 0.63662).',
          'Unbounded-Span Phenomenological Model 2B Convergence & Linearized Radion Ceiling (Table 4.2): Extending arches to unbounded spans k Δx ∈ {10, 50} requires α_x > 0 (such as NEC-violating Model 2B α_t = α_x = 0.5). Removing the turning-point singularity via y = y_peak(1 − u²), dy = −2 y_peak u du over u ∈ [0, 1] and bisecting across N_u = 800 vs 1,600 yields η_fold = 0.86634 (k Δx = 2: Δ = 6.55 × 10⁻⁸, EL = 1.93 × 10⁻⁹, ds_5² = 4.91 × 10⁻¹⁶), η_fold = 0.34279 (k Δx = 10: Δ = 2.18 × 10⁻⁷, EL = 4.40 × 10⁻¹⁰, ds_5² = 5.24 × 10⁻¹⁶), and η_fold = 0.07770 (k Δx = 50: y_peak = 6.07633/k, Δ = 1.68 × 10⁻⁷, EL = 2.57 × 10⁻⁹, ds_5² = 6.11 × 10⁻¹⁶). Linearized turning-point estimates stay perturbatively valid only inside the radion backreaction ceiling |δΦ_rad / Φ_rad| ≪ (k y_peak)⁻¹ (< 0.165 at k Δx = 50). Testing this Category C channel motivates Protocol P11 (not currently achievable), Protocol P12 (bulk gauge birefringence |Δc/c| < 10⁻¹⁸), and passive multi-messenger bound P13 (|η_fold^{GW−EM} − 1| ≤ 4.129 × 10⁻¹⁶).'
        ],
        equation: {
          label: '(4.1)',
          category: 'CATEGORY C — CONJECTURAL',
          unicodeHtml:
            '<i>H</i><sub>Beltrami</sub> = <i>e</i><sup>−2(α<sub><i>t</i></sub>+α<sub><i>x</i></sub>)<i>ky</i></sup> / <i>L</i> = <i>e</i><sup>−(α<sub><i>t</i></sub>+α<sub><i>x</i></sub>)<i>k</i><i>y</i><sub>peak</sub></sup> &nbsp;⇒&nbsp; η<sub>fold</sub><sup>EM</sup> = sin(<i>k</i>Δ<i>x</i>/2)/(<i>k</i>Δ<i>x</i>/2) (<i>k</i>Δ<i>x</i> &lt; π), &nbsp; η<sub>fold</sub><sup>2B</sup> ∈ {0.86634, 0.34279, 0.07770}',
          plainText: 'H_Beltrami = e^{-2(alpha_t+alpha_x)ky}/L = e^{-(alpha_t+alpha_x) k y_peak} => η_fold^EM = sin(k dx/2)/(k dx/2) (k dx < pi), η_fold^2B in {0.86634, 0.34279, 0.07770}',
          caption: 'Conserved Beltrami integral linking closed-form ghost-free Einstein–Maxwell shortcuts (0.84147 at k dx=2, ceiling k dx < pi, lim 2/pi = 0.63662) and phenomenological Model 2B ratios (alpha_t = alpha_x = 0.5, EL < 2.57e-9, ds_5^2 < 6.11e-16).'
        }
      }
    ]
  },
  {
    number: 5,
    anchorId: 'h12-chapter-5',
    runningLabel: 'Chapter 5 · Black-Hole Connectivity & Hayward NEC',
    title: 'Black-Hole Connectivity and Portal Geometry',
    leadSummary:
      'Proves analytically and numerically that H11 regular Hayward black holes satisfy both radial and transverse NEC and are NOT portals, embeds them into 5D brane-world black strings with assumed Gregory–Laflamme bounds, and presents a 6-class taxonomy.',
    subsections: [
      {
        number: '5.0',
        anchorId: 'h12-sec-5-0',
        title: 'Introduction',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Black holes occupy a paradoxical place in the public imagination. On one hand, astronomers now photograph supermassive shadow rings and listen routinely to colliding black-hole mergers with gravitational-wave interferometers. On the other hand, generations of speculative fiction and loose popular articles have blurred non-singular regular black holes—objects whose crushing central infinity is smoothed out by quantum-gravity effects—into traversable cosmic "portals" or secret gateways linking distant stars. Because IGRT-2026-H11 [1] derives a regular Hayward black-hole core characterized by universal length ratio ξ_0 = 2⁻¹/⁴ ≈ 0.840896 and crisp gravitational-wave ringdown echo reflectivity K_echo = 0.184, any serious follow-up study in five dimensions must answer an urgent question: is a regular Hayward black hole a doorway to anywhere else?',
          'Chapter 5 delivers an unambiguous mathematical verdict: no. To keep an open traversable throat from collapsing instantly under its own gravity, Einstein’s field equations demand exotic negative-pressure stress-energy that violates the Null Energy Condition (NEC), meaning light rays passing the throat must be pushed apart rather than focused inward. An ordinary Schwarzschild black hole destroys travelers at a central singularity; a regular Hayward black hole [6] replaces that central singularity with a smooth, high-density vacuum de Sitter core roughly r_core ~ 10⁻²² meters across. Yet replacing a sharp spike with a smooth cushion does NOT flip gravity into antigravity—the Hayward geometry still satisfies every standard energy condition without opening a second universe exit.',
          'Testing Null Rays Directly From the Metric: Rather than arguing qualitatively from diagrams, Section 5.1 contracts the exact Einstein tensor G_μν along both radial and transverse null light vectors k^μ across the full exterior and core of the H11 Hayward spacetime. For every radius r > 0, the radial null contraction vanishes identically (ρ + p_r = 0, meaning zero wormhole flare-out), while the transverse null contraction remains strictly positive (ρ + p_⊥ > 0). By the Raychaudhuri focusing theorem, nearby light rays still converge cleanly inward and any gravitational-wave echoes measured in Protocol P4 bounce off an exterior potential barrier—never arriving through an interior shortcut.',
          'Extending Regular Black Holes Into Five Dimensions: What happens when a four-dimensional Hayward remnant is embedded on a five-dimensional brane? Using the Shiromizu–Maeda–Sasaki projected Einstein equations [4], bulk tidal gravity injects an effective Weyl charge q_tidal that gently shifts horizon radius outward or inward. Moreover, extending a static black hole uniformly into a fifth coordinate produces a 5D "black string" susceptible to the famous Gregory–Laflamme pinching instability [7]. Because full non-linear 5D evolution of coupled Hayward–Araki strings has not yet been solved, Section 5.2 rigorously separates the Category B 4D non-portal proof from the Category C brane-world black-string extension.',
          'Roadmap of Chapter 5: Section 5.1 establishes Explicit Non-Portal NEC Theorem 5.1 and computes numerical horizon and core numbers for a 30 solar-mass remnant (r_core = 2.5389 × 10⁻²² m). Section 5.2 examines 5D Weyl tidal charges and the assumed Gregory–Laflamme stability ceiling r_+/R_AdS = 0.876, synthesizing all six black-hole and wormhole classes in Table 5.1.'
        ]
      },
      {
        number: '5.1',
        anchorId: 'h12-sec-5-1',
        title: 'Explicit Proof That 4D H11 Hayward Black Holes Are NOT Portals',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'A persistent misconception conflates non-singular regular black holes (such as the H11 Hayward (2006) [6] metric f(r) = 1 − 2GMr² / (r³ + 2GMℓ_0²) with derived UV ratio ξ_0 ≡ ℓ_0 / ℓ_Pl = 2⁻¹/⁴ ≈ 0.840896, denoted σ_0 in pre-harmonized drafts [1]) with traversable wormholes [8]. Exact null-vector Einstein-tensor contractions prove this mathematically false — establishing unconditionally that 4D Hayward regular black holes are NOT traversable portals, because the negative theorems rule out physical portals.',
          'Explicit Null Contraction k^μ k^ν G_μν & Core Arithmetic: For static metric ds² = −f(r) c² dt² + f(r)⁻¹ dr² + r² dΩ², contracting any radial null vector k^μ = (f⁻¹/², ±f¹/², 0, 0) yields k^μ k^ν G_μν = G^r_r − G^t_t = 0 identically for every f(r) (since G^t_t = G^r_r = (r f\' + f − 1)/r² ⇒ p_r = −ρ c² ⇒ ρ c² + p_r = 0, zero radial flare-out). Contracting a transverse null vector k^μ_⊥ = (f⁻¹/², 0, r⁻¹, 0) yields k^μ_⊥ k^ν_⊥ G_μν = G^θ_θ − G^t_t = 8πG(ρ + p_⊥)/c²; differentiating f(r) = 1 − r_s r²/(r³ + a³) (a³ ≡ r_s ℓ_0²) gives f\'(r) = r_s r(r³ − 2a³)/(r³ + a³)² and G^θ_θ = (r f\'\' + 2f\')/(2r) = 3 r_s a³ (2 r³ − a³)/(r³ + a³)³, producing strictly positive transverse null contraction G^θ_θ − G^t_t = 9 r_s a³ r³ / (r³ + a³)³ > 0 for every r > 0 (verified numerically in Assertion 69; Raychaudhuri null focusing dθ/dλ < 0 in Assertion 75), while the core Kretschmann invariant K_Hay(0) = 24 / ℓ_0⁴ = 7.0340 × 10¹⁴⁰ m⁻⁴ remains strictly finite (Assertion 87). Across mass M, the extremal horizon-merger critical mass M_crit = (3√3/4) c² ℓ_0 / G = 2.3774 × 10⁻⁸ kg (23.7744 μg, where f(r_+) = f\'(r_+) = 0; Assertion 85) separates horizonless de Sitter solitons (M < M_crit, min f(r) > 0) from regular two-horizon black holes (M > M_crit); both satisfy ρ + p_r = 0 without portal formation. For a M = 30 M_⊙ remnant (r_s = 8.8599 × 10⁴ m, ℓ_0 = 1.3591 × 10⁻³⁵ m, r_core = 2.5389 × 10⁻²² m), WKB echo amplitude K_echo = 0.184 remains strictly tied to exterior ringdown reflections without interior wormhole transit.'
        ],
        equation: {
          label: '(5.1)',
          category: 'CATEGORY B — DERIVED',
          unicodeHtml:
            '<i>G</i><sup><i>t</i></sup><sub><i>t</i></sub> = <i>G</i><sup><i>r</i></sup><sub><i>r</i></sub> &nbsp;⇒&nbsp; ρ + <i>p</i><sub><i>r</i></sub> = 0, &nbsp;&nbsp; 8π<i>G</i>(ρ + <i>p</i><sub>⊥</sub>) = 9 <i>r</i><sub><i>s</i></sub> <i>a</i><sup>3</sup> <i>r</i><sup>3</sup> / (<i>r</i><sup>3</sup> + <i>a</i><sup>3</sup>)<sup>3</sup> &gt; 0',
          plainText: 'G^t_t = G^r_r => rho + p_r = 0, 8 pi G (rho + p_perp) = 9 r_s a^3 r^3 / (r^3 + a^3)^3 > 0',
          caption: 'Exact Einstein-tensor NEC proof establishing that H11 Hayward regular black holes cannot support traversable throats.'
        }
      },
      {
        number: '5.2',
        anchorId: 'h12-sec-5-2',
        title: '5D Brane-World Hayward Weyl Charge, Gregory–Laflamme Threshold & 6-Class Taxonomy',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'Lifting a Hayward core [6] onto a 5D brane via Shiromizu–Maeda–Sasaki projection E_{μν} = ⁵C^y_{μyν} [4] adds a Category C bulk Weyl tidal-charge term q_tidal into f_5D(r) = 1 − (2GMr² + q_tidal R_AdS r)/(r³ + 2GMℓ_0²) with effective Weyl density ρ_Weyl = q_tidal R_AdS / (8π G r⁴). Assertion 76 verifies numerically that q_tidal > 0 monotonically expands the outer horizon (f_5D(r_s) < 0) while q_tidal < 0 contracts it (f_5D(r_s) > 0) without creating a free macroscopic portal. Note verbatim: The Gregory-Laflamme stability threshold is assumed, not derived. Specifically, The Gregory-Laflamme stability threshold is derived for linearized 5D Schwarzschild-AdS strings; its application to the coupled Hayward-Araki string is assumed. Thus importing r_+/R_AdS = 0.876 from linearized vacuum Schwarzschild–AdS_5 black strings (Gregory & Laflamme 1993 [7]) to coupled Hayward–Araki strings with nonzero q_tidal stays Category C because full 5D non-linear string-pinching PDEs remain unsolved.',
          'Table 5.1 classifies all six black-hole and portal-candidate geometries (Classes A through F) by exact metric, NEC violation status, traversability, and epistemic category.'
        ]
      }
    ]
  },
  {
    number: 6,
    anchorId: 'h12-chapter-6',
    runningLabel: 'Chapter 6 · Wormholes, NEC & Casimir Deficit',
    title: 'Traversable Wormholes, Energy Conditions and Stability',
    leadSummary:
      'Derives orthonormal-tetrad Morris–Thorne Einstein equations and the clean r = r_0 sec(u) exotic mass integral (−1.0637 × 10⁻³ M_⊙ to −3.1912 M_⊙), proves the 10⁷¹ Casimir energy deficit at 1 m (and 0.2436 Planck parity at ℓ_0), and includes Table 6.1 & Glossary.',
    subsections: [
      {
        number: '6.0',
        anchorId: 'h12-sec-6-0',
        title: 'Introduction',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'In 1988, Michael Morris and Kip Thorne [8] turned science-fiction wormhole lore into exact general relativity by asking a clean engineering question: what kind of spacetime curvature and matter would be required to build a smooth, horizonless tunnel through which a human traveler—or even a single light pulse—could pass safely and return? Their answer became one of the most famous results in gravitational physics: any open traversable throat flares outward rather than inward, which forces Einstein’s equations to demand "exotic" negative energy violating the Null Energy Condition (NEC). Ever since, hopeful proposals have pointed to quantum vacuum effects—such as the Casimir attraction measured between two closely spaced metal mirrors in a laboratory [22]—as a ready-made source of negative energy.',
          'Chapter 6 tests that hope quantitatively across thirty-five orders of magnitude in scale and shows exactly why macroscopic traversable wormholes remain physically out of reach. Think of trying to shore up an entire mountain tunnel using only the static cling of two sheets of foil: the physical sign (negative pressure vs. positive attraction) might tempt an analogy, yet the raw magnitude misses by an unimaginable chasm. Computing the exact spatial energy integral of an Ellis–Bronnikov zero-tidal wormhole throat shows that holding open a doorway just one meter wide requires roughly minus one-thousandth of the mass of our Sun—all in pure negative energy—while stretching the doorway to three kilometers escalates the debt past minus three full solar masses.',
          'A Seventy-One-Order-of-Magnitude Energy Deficit: How close does real laboratory quantum physics actually come to paying that bill? Section 6.2 computes both the zeta-regularized electromagnetic Casimir vacuum energy density between conducting plates [22] and the universal Ford–Roman curved-spacetime quantum inequality ceiling [9], which strictly limits how long and how intensely any squeezed quantum state can stay negative. At a one-meter throat, real Casimir vacuum energy falls short of the Morris–Thorne NEC requirement by a factor of 4.50 × 10⁻⁷¹ (and Ford–Roman bounds by 3.118 × 10⁻⁷¹)—seventy-one orders of magnitude too weak! Even at a micrometer gap, fifty-nine orders of magnitude still stand in the way.',
          'Where Quantum Gravity Actually Meets Exotic Geometry: Only when we shrink the throat radius all the way down by thirty-five factors of ten—to the fundamental IGRT-H11 core scale ℓ_0 = 1.3591 × 10⁻³⁵ meters—does quantum vacuum energy finally climb into order-unity parity (0.2436 Casimir ratio, 0.1688 Ford–Roman ratio). Macroscopic engineering portals are therefore ruled out unconditionally by Category B calculations, confining self-sustaining negative-energy tunnels strictly to sub-atomic Planckian quantum foam where continuous classical geometry itself breaks down. Meanwhile, any macroscopic traveler attempting a one-meter throat at ten percent light speed faces transverse tidal acceleration of 1.8157 × 10¹⁵ m/s².',
          'Roadmap of Chapter 6: Section 6.1 derives all ten Morris–Thorne throat, stiffness, tidal, and traversal-time equations from an orthonormal tetrad and evaluates the exotic mass integral cleanly via r = r_0 sec(u). Section 6.2 pairs Raychaudhuri defocusing with exact Casimir and Ford–Roman quantum inequalities, anchors Worked Example 6.1, and summarizes every closed negative boundary in Table 6.1 alongside the Glossary of Negative Theorems.'
        ]
      },
      {
        number: '6.1',
        anchorId: 'h12-sec-6-1',
        title: 'Orthonormal Tetrad Derivation & Complete 10-Point Morris–Thorne Theorem',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'Working in the static orthonormal frame e^t̂ = c dt, e^r̂ = (1 − b(r)/r)⁻¹/² dr, e^θ̂ = r dθ, e^φ̂ = r sinθ dφ for zero-tidal-force metric with Ellis–Bronnikov shape b(r) = r_0² / r, Einstein equations yield (8πG/c⁴)(ρ c²) = b\'/r² = −r_0²/r⁴, (8πG/c⁴) p_r = −b/r³ = −r_0²/r⁴, and (8πG/c⁴) p_⊥ = ½(b/r³ − b\'/r²) = +r_0²/r⁴. Summing radial stress gives strict NEC violation everywhere: ρ c² + p_r = (c⁴/8πG)(r b\' − b)/r³ = −(c⁴/4πG)(r_0²/r⁴) < 0.',
          'Executing all 10 Morris–Thorne conditions (linked directly to the throat embedding in Figure H12-6): (1) Horizonless zero redshift (Φ = 0); (2) Minimal-radius flare-out b(r_0) = r_0, b\'(r_0) = −1 < 1; (3) Smooth proper radial coordinate l(r) = ±√(r² − r_0²); (4) Throat NEC deficit (ρc² + p_r)|_{r_0} = −c⁴/(4πG r_0²); (5) Radial tension τ(r) = −p_r = ρc²; (6) Exact spatial exotic-energy integral via trigonometric substitution r = r_0 sec(u), √(1 − r_0²/r²) = sin(u), dr = r_0 (sin u / cos²u) du: substituting (ρc² + p_r) = −(c⁴/4πG) cos⁴(u)/r_0², proper spherical shell factor 4π r² / √(1 − b/r) = 4π r_0² / (cos²u sin u), and dr multiplies to integrand (−c⁴ r_0 / G) du identically across u ∈ [0, π/2], integrating cleanly to E_exotic(r_0) = −(π/2)(c⁴/G) r_0 (verified to < 10⁻⁴ by 1,000-step trapezoidal quadrature in verify-igrt-h12.mjs). Conditions (7)–(10) fix stiffness ∂p_r/∂ρ > 1, zero radial tide, transverse traveler tide Δa_⊥ = γ² v² |R_{θrθr}(r_0)| Δξ = γ² v² (1 − b\'(r_0)) Δξ / (2 r_0²) = γ² v² Δξ / r_0² in the orthonormal tetrad (where |R_{θrθr}| = |r b\' − b|/(2 r³) = 1/r_0² at b\'(r_0) = −1, Assertion 81 [8]), and traversal duration τ_trav = 2 l_max / (γ v) = 20 r_0 / (γ v) across symmetric station cutoffs l_max = ±10 r_0 (radial coordinate r = √(r_0² + l_max²) ≈ 10.05 r_0 [8]).'
        ],
        equation: {
          label: '(6.1)',
          category: 'CATEGORY B — DERIVED',
          unicodeHtml:
            '<i>E</i><sub>exotic</sub>(<i>r</i><sub>0</sub>) = −(π/2) (<i>c</i><sup>4</sup> / <i>G</i>) <i>r</i><sub>0</sub>, &nbsp;&nbsp;&nbsp; Δ<i>a</i><sub>⊥</sub> = γ<sup>2</sup> <i>v</i><sup>2</sup> (1 − <i>b</i>′(<i>r</i><sub>0</sub>)) Δξ / (2 <i>r</i><sub>0</sub><sup>2</sup>) = γ<sup>2</sup> <i>v</i><sup>2</sup> Δξ / <i>r</i><sub>0</sub><sup>2</sup>',
          plainText: 'E_exotic = -(pi/2)(c^4/G) r_0, Delta a_perp = gamma^2 v^2 (1 - b\'(r_0)) Delta xi / (2 r_0^2) = gamma^2 v^2 Delta xi / r_0^2',
          caption: 'Exact Morris–Thorne exotic negative-energy budget and orthonormal-Riemann transverse traveler tidal stress at b\'(r_0) = −1.'
        }
      },
      {
        number: '6.2',
        anchorId: 'h12-sec-6-2',
        title: 'Casimir–Quantum Inequality Deficit Across 35 Orders of Magnitude',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'Note explicitly: The Casimir deficit bound below is a correct quantitative application of the established Morris–Thorne (1988) [8] Null Energy Condition integral, and radial null-vector contraction k^μ k^ν G_μν = (8πG/c⁴)(ρ c² + p_r) = −2 r_0²/r⁴ < 0 (yielding Raychaudhuri null-ray defocusing dθ/dλ = −R_μν k^μ k^ν = +2/r_0² > 0 at r = r_0; Assertions 69 & 75) proves that zero-tidal Morris–Thorne wormholes [8] strictly require NEC violation. At r_0 = 1 m, throat NEC demands −9.6309 × 10⁴² J/m³ and integrated exotic mass −1.0637 × 10⁻³ M_⊙ (−1.9011 × 10⁴⁴ J), while transverse tidal acceleration on a 2 m traveler at 0.1c (with exact Morris–Thorne factor 1 − b\'(r_0) = 2) reaches a fatal 1.8157 × 10¹⁵ m/s² (traversal 663.784 ns). At r_0 = 3 km, exotic mass escalates to −3.1912 M_⊙ (tide 2.0174 × 10⁸ m/s², traversal 1.9914 ms).',
          'Casimir Zeta-Regularized Mode Sum & Ford–Roman 10⁷¹ Deficit [9, 22]: Summing transverse electromagnetic zero-point frequencies ω_n(k_⊥) = c √(k_⊥² + (nπ/d)²) between real conducting plates [22] separated by d yields bare mode sum E_0/A = ∑_{n=1}^∞ ∫ d²k_⊥/(2π)² (½ ℏ ω_n) whose Riemann zeta analytic continuation ζ(−3) = 1/120 yields finite energy density ρ_Casimir(d) = −π² ℏ c / (720 d⁴) < 0. Comparing directly against Morris–Thorne throat NEC gives |ρ_Casimir / NEC| = (π³ G ℏ) / (180 c³ r_0²) = 4.50 × 10⁻⁷¹ at r_0 = 1 m and 4.50 × 10⁻⁵⁹ at r_0 = 1 μm (curving planar plates into a spherical shell additionally incurs compressive structural strut/wall stress that strictly worsens net exotic-energy deficits). Independently, the Ford–Roman (1996) [9] Lorentzian-sampled (w(t) = τ_0/[π(t² + τ_0²)]) curved-spacetime quantum inequality ρ_FR(τ_0) ≥ −3 ℏ c / [32 π² (c τ_0)⁴] evaluated over throat transit duration τ_0 = r_0 / c caps squeezed-vacuum energy density at ρ_FR = −3.003 × 10⁻²⁸ J/m³ (ratio |ρ_FR / NEC| = 3.118 × 10⁻⁷¹ at r_0 = 1 m vs. 0.1688 at r_0 = ℓ_0; Assertion 74; compactly supported test functions rescale the O(1) constant only, leaving the 71-order gap intact). Only at the H11 quantum-gravity core length r_0 = ℓ_0 = 1.3591 × 10⁻³⁵ m does Casimir/FR density reach O(1) parity (0.2436 / 0.1688)—proving macroscopic traversable portals are blocked by > 70 orders of magnitude in energy density.'
        ],
        workedExample: {
          title: 'Worked Example 6.1 — Casimir Deficit Calculation (r_0 = 1 m vs r_0 = ℓ_0)',
          setup: 'Compute |ρ_Casimir / (ρc² + p_r)| explicitly from CODATA constants.',
          steps: [
            'Throat NEC requirement: |NEC(r_0)| = c⁴ / (4π G r_0²) = 9.6309 × 10⁴² / r_0² J/m³.',
            'Zeta-regulated Casimir vacuum magnitude: |ρ_Casimir(r_0)| = π² ℏ c / (720 r_0⁴) = 4.331 × 10⁻²⁸ / r_0⁴ J/m³.',
            'At r_0 = 1 m: ratio = 4.331 × 10⁻²⁸ / 9.6309 × 10⁴² = 4.50 × 10⁻⁷¹.',
            'At r_0 = ℓ_0 = 1.3591 × 10⁻³⁵ m: ratio = 4.50 × 10⁻⁷¹ / (1.3591 × 10⁻³⁵)² = 0.2436.'
          ],
          resultEquation: {
            label: '(6.2)',
            category: 'CATEGORY B — DERIVED',
            unicodeHtml:
              '|ρ<sub>Casimir</sub> / (ρ<i>c</i><sup>2</sup> + <i>p</i><sub><i>r</i></sub>)| = 4.50 × 10<sup>−71</sup> (<i>r</i><sub>0</sub>=1 m), &nbsp; 0.2436 (<i>r</i><sub>0</sub>=ℓ<sub>0</sub>)',
            plainText: '|rho_Casimir / (rho c^2 + p_r)| = 4.50e-71 (1 m), 0.2436 (ℓ_0)',
            caption: 'Exact Casimir-to-wormhole energy ratio across 35 orders of magnitude in throat radius.'
          },
          takeaway: 'Macroscopic Casimir cavities cannot stabilize traversable wormholes; Planck-scale throats reach O(1) vacuum parity.'
        }
      }
    ]
  },
  {
    number: 7,
    anchorId: 'h12-chapter-7',
    runningLabel: 'Chapter 7 · Wave–Particle QFI & Born Isolation',
    title: 'Quantum Wave–Particle Duality and Information Geometry',
    leadSummary:
      'Executes the explicit 2×2 Hermitian SLD operator matrix verification proving F_Q = V² and V² + D_QFI² = 1 independently of 5D, while classifying the Born rule strictly as Category A.',
    subsections: [
      {
        number: '7.0',
        anchorId: 'h12-sec-7-0',
        title: 'Introduction',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Thomas Young’s double-slit experiment—sending individual photons, electrons, or large molecules toward a barrier pierced by two narrow openings—remains the most iconic demonstration of quantum mystery. When no apparatus records which opening the particle took, bright and dark interference fringes bloom across the detector screen, betraying wavelike superposition. The instant a sensor distinguishes one slit from the other, those interference stripes vanish, restoring particle-like certainty. Across decades of speculative writing, commentators have occasionally suggested that interference vanishes because which-path information leaks sideways into a hidden fifth dimension, or conversely that wave–particle duality proves particles slip across unseen extra-dimensional routes between the slits.',
          'Chapter 7 replaces that folklore with sharp, transparent geometry—and proves unconditionally that double-slit wave–particle complementarity needs zero fifth spatial dimension whatsoever. Think of a camera lens whose aperture setting trades brightness for depth of field, or the North–East compass components of a single unit arrow resting on a sheet of graph paper. As the arrow rotates, moving farther North automatically leaves less component pointing East, yet North² + East² stays locked identically at 1. Inside quantum mechanics, the two complementary dials are interference fringe visibility V (how sharp the stripes shine) and Quantum Fisher path distinguishability D_QFI (how sharply an optimal quantum measurement can tell Slit 1 from Slit 2).',
          'Exact Complementarity Inside the Internal Quantum Fiber: Section 7.1 computes the exact 2 × 2 Hermitian Symmetric Logarithmic Derivative (SLD) operator matrix L_φ for a two-slit state entangled with an arbitrary path-marker overlap γ_coh = ⟨d_1 | d_2⟩. Diagonalizing the reduced path density matrix inside the projective Hilbert fiber PU(H) reveals an ironclad geometric conservation circle: F_Q(φ) = γ_coh² = V² and V² + D_QFI² = 1 identically, with zero numerical residual across the entire interval γ_coh ∈ [0, 1]. Because Chapter 2 already proved from the 5D Yang–Mills–Araki bundle action that internal state space PU(H) stands strictly perpendicular to spatial bulk coordinate y (G_{Ai} = 0), shifting or compactifying y leaves the unit quarter-circle untouched.',
          'Protecting the Born Rule From Circular Overclaiming: Honest foundational physics must also state clearly what its own equations do not derive. Quantum mechanics assigns screen probabilities through the Born rule, P(x) = Tr(ρ Π_x) = |ψ_1(x) + ψ_2(x)|². Rather than pretending to conjure Born’s squared-amplitude law out of five-dimensional geometry—a notorious circular pitfall in quantum gravity literature—Section 7.2 explicitly classifies the Born rule strictly as an established Category A quantum postulate. Meanwhile, Protocol P9 turns high-statistics double-slit interferometry (N = 10¹⁴ events) into a clean precision null test bounding any speculative anomalous 5D decoherence below one part in a million (|δV_5D| < 10⁻⁶).',
          'Roadmap of Chapter 7: Section 7.1 executes the complete eigenbasis SLD matrix derivation (Eq. 7.1) and connects Braunstein–Caves Quantum Fisher information [10] directly to Englert’s wave–particle duality relation [11]. Section 7.2 then states both binding epistemic safeguards separating quantum state-space geometry from spatial fifth dimensions and defines the empirical boundary tested by Device D.'
        ]
      },
      {
        number: '7.1',
        anchorId: 'h12-sec-7-1',
        title: 'Explicit 2×2 SLD Operator Matrix Derivation & Complementarity Identity',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'Consider a coherent particle passing two slits coupled to a which-path detector: |Ψ(φ)⟩ = 2⁻¹/² (|1⟩|d_1⟩ + e^{iφ}|2⟩|d_2⟩) with detector overlap γ_coh = ⟨d_1 | d_2⟩ ∈ [0, 1]. Tracing out detector states |d_k⟩ produces reduced 2×2 path density matrix ρ(φ) = ½ [[1, γ_coh e^{−iφ}], [γ_coh e^{iφ}, 1]] inside projective Hilbert fiber PU(H), with derivative ∂_φ ρ = ½ [[0, −i γ_coh e^{−iφ}], [i γ_coh e^{iφ}, 0]] and eigenvalues λ_± = ½(1 ± γ_coh) corresponding to orthonormal eigenstates |λ_±(φ)⟩ = 2⁻¹/² (|1⟩ ± e^{iφ}|2⟩).',
          'Step-by-Step Eigenbasis Matrix Derivation & Unbalanced Mixed-State Generalization: Evaluating transition matrix elements ⟨λ_±|∂_φ ρ|λ_±⟩ = 0 (diagonal) and ⟨λ_+|∂_φ ρ|λ_−⟩ = −⟨λ_−|∂_φ ρ|λ_+⟩ = ½ i γ_coh, dividing by λ_+ + λ_− = 1 gives SLD eigenbasis matrix elements (L_φ)_{+−} = 2(½ i γ_coh)/1 = i γ_coh and (L_φ)_{−+} = −i γ_coh. Transforming back to path basis {|1⟩, |2⟩} yields exact Hermitian matrix L_φ = [[0, −i γ_coh e^{−iφ}], [i γ_coh e^{iφ}, 0]]. Direct multiplication verifies ½(L_φ ρ + ρ L_φ) = ∂_φ ρ identically (Frobenius residual 0.000 × 10⁰ across all γ_coh ∈ [0, 1] in verify-igrt-h12.mjs). Taking Tr(ρ L_φ²) yields SLD Quantum Fisher Information F_Q(φ) = γ_coh² (Braunstein & Caves 1994 [10]). Since screen intensity obeys P(φ) = ½(1 + γ_coh cos φ) ⇒ V = γ_coh and Helstrom minimum-error path distinguishability equals D_QFI = √(1 − γ_coh²), V² + D_QFI² = 1 and F_Q = V² hold unconditionally inside PU(H). Extending directly to unbalanced/mixed slit weights |Ψ(φ)⟩ = √p_1 |1⟩|d_1⟩ + √p_2 e^{iφ}|2⟩|d_2⟩ (p_1 + p_2 = 1, predictability P = |p_1 − p_2|) yields Bloch vector r = (V cos φ, V sin φ, p_1 − p_2) with fringe visibility V = 2√(p_1 p_2) γ_coh and exact SLD L_φ = (∂_φ r)·σ inside the open mixed-state Bloch ball (1 − |r|² > 0, rank-2 strictly positive ρ(φ), where tangential orthogonality r · ∂_φ r = 0 avoids the pure-state Šafránek Bures discontinuity at |r| → 1), preserving F_Q = V² while connecting Englert’s mixed-state bound P² + V² = 1 − 4 p_1 p_2(1 − γ_coh²) ≤ 1 [11] to V² + D_QFI² = 1 via D_QFI = √(P² + 4 p_1 p_2(1 − γ_coh²)) (verified at p_1 = 0.7, γ_coh = 0.6 in Assertion 83: P = 0.4000, V = 0.54991, F_Q = 0.30240, P² + V² = 0.46240 < 1, V² + D_QFI² = 1).'
        ],
        equation: {
          label: '(7.1)',
          category: 'CATEGORY B — DERIVED',
          unicodeHtml:
            '<i>L</i><sub>φ</sub> = [[0, −<i>i</i>γ<sub>coh</sub><i>e</i><sup>−<i>i</i>φ</sup>], [<i>i</i>γ<sub>coh</sub><i>e</i><sup><i>i</i>φ</sup>, 0]], &nbsp; <i>F</i><sub><i>Q</i></sub> = Tr(ρ <i>L</i><sub>φ</sub><sup>2</sup>) = γ<sub>coh</sub><sup>2</sup> = <i>V</i><sup>2</sup> &nbsp;⇒&nbsp; <i>V</i><sup>2</sup> + <i>D</i><sub>QFI</sub><sup>2</sup> = 1',
          plainText: 'L_phi = [[0, -i gamma_coh e^{-i phi}], [i gamma_coh e^{i phi}, 0]], F_Q = gamma_coh^2 = V^2 => V^2 + D_QFI^2 = 1',
          caption: 'Exact 2×2 SLD operator matrix and Fisher–Englert duality identity inside the projective Hilbert fiber PU(H).'
        }
      },
      {
        number: '7.2',
        anchorId: 'h12-sec-7-2',
        title: 'Epistemic Safeguards: Born Rule Status & Independence from 5D',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Two binding safeguards isolate Chapter 7 from five-dimensional overclaiming. The Born rule is Category A (postulate), not derived from 5D. Probability extraction P(x) = Tr(ρ Π_x) = |ψ_1(x) + ψ_2(x)|² is an established quantum axiom imported identically from 4D quantum mechanics.',
          'Second: The double-slit complementarity identity is independent of the 5D extension. It is a property of the Fisher–Rao metric on the fiber PU(H), orthogonal to spatial 5D displacement (PU(H) ⊥ ∂/∂y, Eq. 2.1). Particles do NOT travel through a spatial fifth dimension y between slits. Protocol P9 solely bounds whether speculative fiber–bulk coupling causes anomalous decoherence |δV_5D| < 10⁻⁶.'
        ]
      }
    ]
  },
  {
    number: 8,
    anchorId: 'h12-chapter-8',
    runningLabel: 'Chapter 8 · AQFT Microcausality & ER=EPR',
    title: 'Quantum Entanglement, Nonlocality and Higher-Dimensional Connectivity',
    leadSummary:
      'Verifies all four Haag–Kastler AQFT axioms and Buchholz–Wichmann nuclearity on M_5, proves marginal unitary invariance [O_A, O_B] = 0, and isolates AdS_5 ER=EPR & Gao–Jafferis–Wall teleportation boundaries.',
    subsections: [
      {
        number: '8.0',
        anchorId: 'h12-sec-8-0',
        title: 'Introduction',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Quantum entanglement—Albert Einstein’s famous "spooky action at a distance"—inspires more misunderstandings about instant communication and spacetime tunnels than almost any other phenomenon in physics. When Alice and Bob share an entangled pair of qubits separated by light-years, measuring Alice’s particle appears to correlate instantaneously with the statistics of Bob’s particle. In modern holographic gravity, Juan Maldacena and Leonard Susskind deepened the geometric intrigue with their ER=EPR conjecture [12], proposing that maximally entangled quantum states in idealized anti-de Sitter space are dual to non-traversable Einstein–Rosen wormhole bridges connecting two horizons. Naturally, readers ask whether extending IGRT into five dimensions turns entanglement—or holographic ER=EPR—into a superluminal telephone.',
          'Chapter 8 proves mathematically that no entanglement link and no five-dimensional geometric bridge inside globally hyperbolic spacetime can ever transmit signals faster than light. Consider two sealed envelopes sent from a central printer to Alice in Tokyo and Bob in Paris, each holding half of a matching coded pair. Even if Bob opens his envelope and doodles across his sheet, swaps fonts, or tears it in half, the statistical distribution of ink inside Alice’s unopened envelope in Tokyo does not shift by a single molecule. Quantum theory generalizes that common-sense invariance through microcausality: observable operators located outside each other’s lightcones always commute identically ([O_A, O_B] = 0).',
          'Extending Algebraic Quantum Field Theory Cleanly to Five Dimensions: Section 8.1 verifies that lifting spacetime from four dimensions to five-dimensional Lorentzian signature (−,+,+,+,+) preserves every structural pillar of Haag–Kastler Algebraic Quantum Field Theory [18, 19] alongside IGRT-H11’s Buchholz–Wichmann nuclearity condition [17]. Applying any arbitrary local unitary gate U_B on Bob’s subsystem leaves Alice’s reduced density matrix ρ_A = Tr_B(ρ_AB) identically invariant by cyclic trace algebra. No-Communication Theorem 8.1 thus remains strictly intact in five dimensions—explicitly flagged as an established Category A consequence of Lorentzian locality rather than a novel five-dimensional discovery.',
          'Separating Holographic Teleportation From Macroscopic Wormholes: What about recent breakthroughs in "traversable wormhole teleportation" formulated by Gao, Jafferis, and Wall [13] and simulated on superconducting quantum processors (Device E, Track E2)? Section 8.2 resolves that nuance cleanly. In AdS_5/CFT_4 holography, quantum information only crosses a coupled boundary bridge after an ordinary classical radio or optical pulse travels between the two sides at or below speed c to couple the dual Hamiltonians via e^{i g O_L O_R}. Without that light-speed classical bridge, zero signal gets through—confirming why ER=EPR "portals" remain mathematical dualities rather than physical superluminal highways.',
          'Roadmap of Chapter 8: Section 8.1 sets out all four Haag–Kastler axioms, the nuclearity split property, and the marginal trace proof of No-Signaling Theorem 8.1. Section 8.2 audits Ryu–Takayanagi area connectivity, Gao–Jafferis–Wall classical channel constraints, and unresolved 5D Δσ⁻⁵ chronology-protection backreaction as strictly quarantined Category C frontiers.'
        ]
      },
      {
        number: '8.1',
        anchorId: 'h12-sec-8-1',
        title: 'Haag–Kastler Axioms, Buchholz–Wichmann Nuclearity & No-Communication Preservation',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Let net 𝒪 ↦ 𝒜(𝒪) assign von Neumann observable algebras to open bounded diamonds 𝒪 ⊂ M_5 satisfying all four Haag–Kastler axioms on globally hyperbolic 5D spacetime (Haag 1992 [18]; Brunetti, Fredenhagen & Verch 2003 [19], signature −,+,+,+,+): (i) Isotony (𝒪_1 ⊂ 𝒪_2 ⇒ 𝒜(𝒪_1) ⊂ 𝒜(𝒪_2)); (ii) Microcausality ([O_A, O_B] = 0 for all 5D-spacelike 𝒪_A, 𝒪_B); (iii) Isometric Poincaré/diffeomorphism covariance; and (iv) Primitive causality (𝒜(𝒪) = 𝒜(D(𝒪)) on domain of dependence). Preserving H11’s Buchholz–Wichmann (1986) [17] nuclearity condition Tr(e^{−β H}) < ∞ enforces the split property 𝒜(𝒪_A ∪ 𝒪_B) ≅ 𝒜(𝒪_A) ⊗̄ 𝒜(𝒪_B) across buffered spacelike wedges.',
          'Marginal Unitary Invariance Proof & Gao–Jafferis–Wall Boundary Rule: Applying any local unitary U_B ∈ 𝒜(𝒪_B) at Bob’s location transforms global state ρ_AB → ρ_AB\' = (I ⊗ U_B) ρ_AB (I ⊗ U_B†). Computing Alice’s expectation value ⟨O_A⟩\' = Tr[(O_A ⊗ I) (I ⊗ U_B) ρ_AB (I ⊗ U_B†)] and invoking cyclic invariance of the partial trace Tr_B[(I ⊗ U_B† U_B)(O_A ⊗ I) ρ_AB] = Tr_B[(O_A ⊗ I) ρ_AB] proves ρ_A\' = Tr_B(ρ_AB\') = ρ_A identically. The no-communication theorem is preserved by 5D microcausality, but this is not a new result. It follows directly from standard AQFT locality [17, 18, 19]. Even in holographic Gao–Jafferis–Wall (2017) [13] double-trace protocols (e^{i g O_L O_R}) in AdS_5/CFT_4, quantum teleportation across the bulk bridge strictly requires sending classical information along the conformal boundary at speed v ≤ c — distinguishing information-assisted teleportation from macroscopic traversable wormhole transit.'
        ],
        theoremBox: {
          number: 'No-Signaling Theorem 8.1',
          title: 'Zero Faster-Than-Light Information Capacity in 5D Bundle P_5',
          category: 'CATEGORY A — ESTABLISHED',
          hypotheses: [
            'Observable net satisfies Haag–Kastler axioms and Buchholz–Wichmann nuclearity Tr(e^{−β H}) < ∞ enforcing split factorization.',
            'Regions 𝒪_A and 𝒪_B are spacelike separated under 5D Lorentzian signature (−,+,+,+,+).'
          ],
          statement:
            'No local unitary operation U_B ∈ 𝒜(𝒪_B) alters any marginal expectation value ⟨O_A⟩ on spacelike-separated subsystem A. Neither quantum entanglement nor mathematical ER=EPR bridges carry superluminal signaling capacity.'
        }
      },
      {
        number: '8.2',
        anchorId: 'h12-sec-8-2',
        title: 'Ryu–Takayanagi Bulk Connectivity, ER=EPR Status & Chronology Protection',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'In asymptotically AdS_5/CFT_4 holography (Maldacena & Susskind 2013 ER=EPR [12]), Ryu–Takayanagi extremal bulk surfaces γ_A equate boundary entanglement entropy S(ρ_A) = Area(γ_A)/(4 G_5) to bulk geometric connectivity, and Araki modular density ψ²(x) motivates a Category C geometric bridge analogy. However, the "portal" is a mathematical connection, not a traversable wormhole: non-traversable Einstein–Rosen throats collapse inside horizons unless aided by boundary classical communication [13] or negative-energy shocks, and whether 5D Δσ⁻⁵ vacuum backreaction ⟨T_AB⟩_ren enforces Hawking chronology protection in general FRW/brane bulks remains an open Category C conjecture.',
          'Laboratory qubit OTOC experiments and 3G gravitational-wave leakage searches (Device E / Protocol P10) probe scrambling dynamics and bulk scalar modes—never macroscopic wormhole transit.'
        ]
      }
    ]
  },
  {
    number: 9,
    anchorId: 'h12-chapter-9',
    runningLabel: 'Chapter 9 · Consolidated Negative Theorems',
    title: 'Negative Results Summary',
    leadSummary:
      'Elevated to core narrative prominence: consolidates the six rigorous Category A/B negative proofs that rule out flat KK shortcuts, conformal AdS_5 shortcuts, Hayward portals, macroscopic Casimir wormholes, FTL entanglement signaling, and spatial-5D double-slit travel.',
    subsections: [
      {
        number: '9.0',
        anchorId: 'h12-sec-9-0',
        title: 'Introduction',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'In many speculative theoretical papers, negative results get buried quietly in footnotes as embarrassing failures, while unproven positive possibilities take center stage. Chapter 9 deliberately reverses that tradition. In mathematical physics, proving conclusively what nature forbids—from conservation laws to thermodynamic limits—often stands as the most durable and illuminating knowledge a research program can produce. When IGRT-2026-H12 asks whether a fifth spatial coordinate unlocks faster cosmic travel, traversable black-hole doorways, tabletop wormholes, or instant quantum signaling, our sharpest and most airtight mathematical theorems say no.',
          'For general readers and specialist auditors alike, Chapter 9 acts as the structural anchor of the entire monograph. Think of an explorer charting a rugged mountain range: knowing with mathematical certainty which six mountain passes are solid granite dead ends is far more valuable to future travelers than sketching speculative cloud bridges over mist. Across Chapters 4 through 8, six independent obstructions—each derived strictly from Category A quantum mechanics, Lorentzian causality, or established Einstein field equations without unverified exotic matter—close down nearly every popular claim associated with higher-dimensional spacetime shortcuts.',
          'The Six Closed Pillars Synthesized Here: First, ordinary compact Kaluza–Klein circles (M_4 × S¹) strictly lengthen every path dipping off our brane—even intricate closed corkscrew windings—forcing L_5 > L_4 across lab and cosmic spans alike. Second, symmetric conformal Randall–Sundrum warped spaces (AdS_5) enforce c_eff(y) = c everywhere, leaving bulk photons strictly behind brane signals. Third, our own regular Hayward black-hole core derived in IGRT-H11 satisfies both radial and transverse Null Energy Conditions everywhere (ρ + p_r = 0, ρ + p_⊥ > 0) and is a sealed object rather than a portal. Fourth, traversable Morris–Thorne throats require solar-scale negative mass (−1.06 × 10⁻³ to −3.19 M_⊙), outstripping real Casimir and Ford–Roman vacuum bounds by 10⁷¹ at one meter. Fifth, 5D microcausality preserves zero faster-than-light quantum signaling, and sixth, double-slit wave–particle complementarity lives inside internal fiber PU(H) completely independent of spatial y.',
          'Joining Theory With Immediate Astrophysical Reality: Alongside those six purely mathematical theorems, Table 9.1 integrates a seventh empirical pillar directly from observational astrophysics: Protocol P13’s passive multi-messenger timing bound from the neutron-star merger GW170817 and gamma-ray burst GRB 170817A [14]. Because gravitational waves (free to sample a bulk) arrived within 1.7 seconds of brane-bound photons after a 40-megaparsec journey, natural bulk tensor-vs-photon temporal folding is already constrained today within 4.129 parts in 10¹⁶.',
          'Roadmap of Chapter 9: Section 9.1 explains why these exact no-go obstructions form the strongest scientific core of IGRT-2026-H12, summarizing exact tensor and NEC identities cleanly. Section 9.2 then draws the exact boundary separating closed Category B negative proofs from the lone narrow conjectural loophole (unverified asymmetric warping α_t + α_x > 0), culminating in Table 9.1 and the Glossary of Negative Theorems.'
        ]
      },
      {
        number: '9.1',
        anchorId: 'h12-sec-9-1',
        title: 'Why the Negative Theorems Constitute the Strongest Core of H12',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'The negative theorems are the strongest part of H12. Rather than chasing speculative science-fiction claims, Chapters 4–8 deploy exact variational calculus, Poincaré coordinate conformal invariants, Einstein-tensor algebraic identities, and quantum-inequality bounds to rule out six widely repeated higher-dimensional myths with zero ambiguity.',
          'Specifically: (1) Flat M_4 × S¹ strictly delays bulk paths (L_5/L_4 = 1.001249 > 1); (2) Conformally flat Randall–Sundrum AdS_5 [2] fixes c_eff(y) = c everywhere (Horizon Theorem excursion 1.010321), while exact 5D NEC factorization −G^0_0 + G^x_x = (α_t − 3α_x)(α_t + α_x) k², −G^0_0 + G^y_y = −3α_x(α_t + α_x) k² proves that phenomenological Model 2B (0.5, 0.5) violates 5D NEC along both x (−k²) and y (−1.5 k²) (Assertion 73); (3) 4D H11 Hayward regular black holes [6] obey ρ + p_r = 0 and ρ + p_⊥ > 0 at r_core = 2.5389 × 10⁻²² m (NOT portals); (4) Zero-tidal Morris–Thorne wormholes [8] require −1.0637 × 10⁻³ M_⊙ at 1 m (−3.1912 M_⊙ at 3 km), outstripping physical Casimir [22] and Ford–Roman [9] vacuum energy bounds by 10⁷¹ (3.118 × 10⁻⁷¹) at 1 m and achieving 0.2436 / 0.1688 parity only at Planck length ℓ_0; (5) AQFT microcausality [O_A, O_B] = 0 [17, 18, 19] enforces zero FTL signaling across ER=EPR bridges [12, 13]; and (6) Double-slit complementarity V² + D_QFI² = 1 [10, 11] lives strictly inside internal fiber PU(H) ⊥ ∂/∂y.'
        ]
      },
      {
        number: '9.2',
        anchorId: 'h12-sec-9-2',
        title: 'Boundary Between Closed No-Go Proofs and Residual Parameter Windows',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'Table 9.1 and the Glossary of Negative Theorems below synthesize every closed negative theorem alongside the single narrow mathematical loophole—assumed asymmetric warping α_t + α_x > 0 (Model 2B, strictly Category C)—so future theorists and experimentalists cannot accidentally conflate established no-go boundaries with open speculative regimes.'
        ]
      }
    ]
  },
  {
    number: 10,
    anchorId: 'h12-chapter-10',
    runningLabel: 'Chapter 10 · 5D Uniqueness & Observational Bounds',
    title: 'What Is Unique to 5D? Observational Bounds & Consistency',
    leadSummary:
      'Rigorously separates observables already completely resolved inside 4D IGRT-H11 from genuinely five-dimensional signatures, and audits H12 against Eöt-Wash, BBN, GW170817, Cassini PPN, LHC, Dark Energy, and CMB data.',
    subsections: [
      {
        number: '10.0',
        anchorId: 'h12-sec-10-0',
        title: 'Introduction',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Whenever a theoretical framework adds a bold new ingredient—such as lifting four-dimensional IGRT-H11 into five spacetime dimensions—journal referees rightly demand a blunt reality check: which predictions genuinely depend on the extra dimension, and which effects are already explained completely without it? If every observable number remained indistinguishable from four-dimensional physics, Occam’s razor would slice the extra coordinate away as redundant baggage. Equally important, any five-dimensional hypothesis must pass smoothly through the dense gauntlet of precision experiments already completed on Earth, in our Solar System, inside high-energy particle colliders, and across the observable universe.',
          'Chapter 10 performs both audits systematically without double-counting or sleight of hand. Imagine comparing two blueprints for an electric car: if a second design merely bolts an unused decorative fin onto the same motor, battery, and drivetrain, attributing normal highway mileage to the new fin would be dishonest accounting. Similarly, Section 10.1 proves that double-slit complementarity (V² + D_QFI² = 1), quantum no-communication, Araki modular coupling κ_ψ = 2.1727 × 10⁻²¹ GeV⁻¹, Hayward core regularity, gravitational-wave echo reflectivity K_echo = 0.184, and our cosmological Hubble closure H_0 = 70.77 ± 0.72 are already 100% complete inside four-dimensional IGRT-H11 [1], shifting by less than 4.972 × 10⁻¹⁴ at atomic-clock energies.',
          'Isolating Genuinely Five-Dimensional Signatures: Once 4D physics is cleanly fenced off, only a crisp shortlist of empirical signatures actually distinguishes a five-dimensional universe from pure 4D H11 (cataloged in Tables 10.1 and 10.3). Those distinctive probes include exponential short-range Yukawa deviations in sub-50-micrometer gravity (contrasting sharply against H11’s screened inverse-power Chameleon force), extra scalar breathing gravitational-wave polarizations or luminosity-distance dimming (d_L^GW ≠ d_L^EM), discrete Kaluza–Klein collider or ringdown ladders, and Category C asymmetric bulk arrival shifts or broadband gauge birefringence.',
          'Passing Forty Orders of Magnitude in Experimental Constraints: Any higher-dimensional model that predicts spectacular shortcuts on paper while violating Big Bang nucleosynthesis, Cassini Solar System radio ranging, or neutron-star gravitational-wave speeds fails immediately at the starting line. Section 10.2 audits IGRT-H12 quantitatively across six observational arenas—Eöt-Wash torsion balances [5], Big Bang element abundances (ΔN_eff < 0.28), GW170817 tensor speed [14], Cassini Shapiro PPN bounds, LHC TeV collisions, and Planck/DESI dark-energy cosmology—explicitly flagging which consistencies are derived mathematically versus which depend on assumed radion stabilization or reheating cutoffs.',
          'Roadmap of Chapter 10: Section 10.1 separates 4D-complete observables from unique 5D predictions (Table 10.1). Section 10.2 executes the six-probe observational consistency audit (Table 10.2) and cross-indexes every candidate 5D physical signature directly against its testing experiment and current quantitative constraint in Table 10.3.'
        ]
      },
      {
        number: '10.1',
        anchorId: 'h12-sec-10-1',
        title: 'Isolating Genuinely Five-Dimensional Signatures from 4D H11 Physics',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'No 5D phenomenon has been observed. A vital epistemic discipline of H12 is asking which phenomena genuinely require five spacetime dimensions versus which phenomena are already complete inside 4D IGRT-H11. As cataloged in Table 10.1, double-slit QFI complementarity (V² + D_QFI² = 1), quantum no-signaling, Araki coupling κ_ψ = 2.1727 × 10⁻²¹ GeV⁻¹, Hayward core regularity (ξ_0 = 2⁻¹/⁴, K_echo = 0.184), and the Hubble closure H_0 = 70.77 ± 0.72 km s⁻¹ Mpc⁻¹ require ZERO fifth dimension and reproduce identically to 4.972 × 10⁻¹⁴ at 1 neV.',
          'Only three fundamental physical mechanisms distinguish a 5D bulk hypothesis from 4D H11 (projecting across the 11 experimental channels cataloged in Table 10.3): (i) short-range exponential Yukawa KK gravity α_KK e^{−d/R_5} and KK/radion tower thresholds below 44 μm (Protocol P7, distinct from H11 Chameleon power laws in P5); (ii) 3G gravitational-wave scalar/KK polarization leakage |h_scalar/h_tensor| ≤ 10⁻³, luminosity-distance dimming d_L^GW ≠ d_L^EM, and Weyl tidal/orbifold gravitational relics (Protocol P10); and (iii) Model 2B asymmetric bulk arrival shortcuts / gauge birefringence (Protocols P11–P13, Category C).'
        ]
      },
      {
        number: '10.2',
        anchorId: 'h12-sec-10-2',
        title: 'Multi-Probe Observational Consistency Audit (Eöt-Wash, BBN, GW170817, Cassini, LHC, DE & CMB)',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'Every higher-dimensional theory must survive existing precision experiments across 40 orders of magnitude in energy. Table 10.2 audits H12 against six observational pillars, explicitly distinguishing derived from assumed compatibility:',
          'Eöt-Wash (44 μm [5] ⇒ m_KK^(1) ≥ 4.485 meV, M_5 ≥ 2.985 × 10⁸ GeV flat / 1.8101 × 10¹⁸ GeV warped) and CMB thermal decoupling (T_CMB = 0.235 meV ≪ 4.485 meV) are directly derived. By contrast, BBN relativistic species (1% Weyl dark radiation ⇒ ΔN_eff = 0.0614 < 0.28; Assertion 77), GW170817 gravitational wave speed [14] (|c_GW/c − 1| ≤ 10⁻¹⁵), Cassini Shapiro PPN constraint (|γ_PPN − 1| < 2.3 × 10⁻⁵ via assumed Goldberger–Wise [21] / Vainshtein radion mass giving 10 μm Yukawa attenuation 0.7967 and 1 AU attenuation = 0.000), LHC monojet exclusions, and late-time Dark Energy dominance (w_0 = −0.831, w_a = −0.542 with bulk Weyl projection < 1%) rely on explicit low-energy localization and stabilization assumptions detailed in Chapter 11.'
        ]
      }
    ]
  },
  {
    number: 11,
    anchorId: 'h12-chapter-11',
    runningLabel: 'Chapter 11 · Epistemic Honesty Ledger',
    title: 'What Is Not Derived',
    leadSummary:
      'Provides an exhaustive, unvarnished ledger of every Equation, Lift, Mechanism, and Cosmological/Quantum Assumption in H12 that is postulated, imported, or unverified rather than derived from first principles.',
    subsections: [
      {
        number: '11.0',
        anchorId: 'h12-sec-11-0',
        title: 'Introduction',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Scientific credibility is forged as much by what a paper refuses to claim as by the theorems it proves. Across modern theoretical physics, ambiguity most often enters when a manuscript blends rigorous deductions smoothly alongside unproved assumptions, imported thresholds, or hoped-for stabilization mechanisms without marking where solid proof ends and conjecture begins. Chapter 11 exists to make that boundary impossible to miss: it collects every single postulate, ansatz, external mechanism, and conjectural bridge appearing anywhere in IGRT-2026-H12 and places them into one unvarnished ledger.',
          'Think of an architectural safety inspection before anyone steps inside a newly designed bridge. A trustworthy inspector does not merely admire the strength of the steel arches; they highlight every bolt whose load rating came from a manufacturer brochure rather than an in-house destructive test, and every foundation soil assumption awaiting deep core drilling. In the exact same spirit, Table 11.1 inspects fourteen distinct pillars of IGRT-H12—from the very existence of a physical fifth coordinate y and foundational equations Eqs. (H12.0.1)–(H12.0.2) to asymmetric warp parameters, Goldberger–Wise radion stabilization, black-string instability thresholds, ultraviolet gravity completion above M_5, and laboratory analog concepts.',
          'Separating Axioms, Analogies, and Missing Equations: Inspecting the fourteen items in Table 11.1 reveals four distinct reasons why a claim sits outside our derived Category B core. First, foundational hypotheses (like the existence of y itself or phenomenological ansatz Eq. H12.0.1) are mathematical definitions or starting postulates, not consequences of a simpler law. Second, phenomenological Model 2B shortcuts require anisotropic stress-energy (α_x > 0) that strictly violates the 5D Null Energy Condition, while even the ghost-free Einstein–Maxwell branch assumes unobserved macroscopic bulk electric fields. Third, several stabilizing mechanisms—such as 5D radion Vainshtein screening, Goldberger–Wise radion masses [21], and the Gregory–Laflamme string threshold r_+/R_AdS = 0.876 [7]—are imported from established literature or extended by analogy without integrating full non-linear 5D partial differential equations. Fourth, standard quantum measurement (Born’s rule P = |ψ|²) is intentionally preserved as an external Category A postulate.',
          'Why This Ledger Protects Future Research: Explicitly cataloging every un-derived element serves both newcomers and specialist referees. General readers see immediately why speculative headlines about wormhole machines or bulk highways do not carry the weight of established science. Specialist auditors can inspect each open gap—from 5D BFV–BRST constraint closure to high-temperature reheating bounds—and verify that none of our negative theorems in Chapter 9 or preserved 4D H11 results secretly depend on these unproved Category C/D assumptions.',
          'Roadmap of Chapter 11: Section 11.1 organizes all fourteen un-derived postulates, conjectures, and engineering concepts alongside one-sentence explanations of their exact non-derived status, anchored quantitatively by Table 11.1.'
        ]
      },
      {
        number: '11.1',
        anchorId: 'h12-sec-11-1',
        title: 'Exhaustive Ledger of Category C/D Assumptions & Unproven Lifts',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'This chapter catalogs every Category C/D claim that is not derived from first principles. Transparent science demands stating plainly what a paper does NOT derive; Table 11.1 lists every non-derived claim across IGRT-2026-H12 together with the exact mathematical or physical reason it remains outside the derived Category B core.',
          'In particular: (1) Neither the existence of a physical 5th coordinate y nor the phenomenological ansatz Eq. (H12.0.1) is derived; phenomenological Model 2B (0.5, 0.5) violates the 5D NEC (−k² along x, −1.5 k² along y) and requires unconstructed anisotropic exotic bulk matter, while exact ghost-free Einstein–Maxwell (1.0, 0.0) assumes unobserved macroscopic bulk electric flux; (2) Eq. (H12.0.2) defines η_fold ≡ Δτ_5 / Δτ_4 as a ratio on the assumed 5D lift; (3) Bundle lift P_5, 5D radion Vainshtein screening, Goldberger–Wise stabilization [21], 5D BFV–BRST constraint closure, and UV completion above M_5 (10⁸–10¹⁸ GeV) are postulated rather than solved; (4) Hayward black-string Gregory–Laflamme instability (r_+/R_AdS = 0.876) is imported from vacuum AdS_5 literature [7]; (5) 5D orbifold ekpyrotic bounce embedding, BBN dark-radiation quenching, and chronology protection Δσ⁻⁵ backreaction remain conjectural; (6) The Born rule P = |ψ|² is explicitly Category A (postulate); and (7) Devices C & F and Protocols P11–P12 are optical analogs or currently unachievable conceptual designs.'
        ]
      }
    ]
  },
  {
    number: 12,
    anchorId: 'h12-chapter-12',
    runningLabel: 'Chapter 12 · Empirical Protocols P7–P13',
    title: 'Experimental Protocols and Falsification',
    leadSummary:
      'Separates 4D H11 tests (P1–P6) from 5D bulk/KK/decoherence/leakage probes (P7–P10), unachievable active folding concepts (P11–P12), and the immediate passive multi-messenger arrival asymmetry test (P13), with full timeline, falsification, confirmation, decision-matrix, systematics, Bayesian Occam, and checklist modules.',
    subsections: [
      {
        number: '12.0',
        anchorId: 'h12-sec-12-0',
        title: 'Introduction',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'A theoretical proposal earns the right to sit in a physics journal only when it places clear, falsifiable stakes on the laboratory table. Extending four-dimensional IGRT-H11 [1] into five dimensions would be scientifically hollow if no real-world detector could distinguish the two theories—or worse, if supporters tried to claim credit for ordinary 4D detections as "proof" of an invisible extra spatial dimension. Chapter 12 shuts the door on that confusion by building a strict empirical firewall separating Paper 1 tests (P1–P6) from genuine fifth-dimensional probes (P7–P13).',
          'Think of testing an advanced hybrid aircraft wing: confirming that the jet engine burns fuel smoothly proves the engine design works, not that aerodynamic winglets generated extra lift. Likewise, Section 12.1 proves that every positive signature in Protocols P1–P6 verifies 4D IGRT-H11 alone. To look for a hidden spatial fifth dimension y, physicists must turn to four dedicated bulk and leakage tests—CANNEX-class micrometer force balances (P7, pushing past the 44 μm Eöt-Wash horizon [5] to 10 μm / 19.733 meV), optical/nuclear clock frequency ratios (P8), matter-wave and single-photon coherence floors (P9), and 3G gravitational-wave polarization and dimming searches (P10)—while recognizing honestly that active temporal-folding hardware (P11–P12) sits far beyond current sensitivity.',
          'An Immediate Sky Test & Quantitative Decision Rules: Rather than waiting passively until the 2030s for new colliders or 3G observatories, Section 12.1 and Section 12.3 deploy Protocol P13 directly against existing multi-messenger data from the binary neutron-star merger GW170817 and its gamma-ray flash GRB 170817A [14]. Because light stayed pinned to our 4D brane while gravitational waves traveled across the full spacetime geometry over forty megaparsecs, their 1.7-second arrival window immediately constrains any natural graviton-versus-photon temporal folding to |η_fold^{GW−EM} − 1| ≤ 4.129 × 10⁻¹⁶ today. Section 12.2 complements these tests with full noise budgets, systematic error tables, and a four-parameter Bayesian–Occam complexity bar (Δ ln B_{12/11} ≥ +5.0).',
          'Roadmap of Chapter 12: Section 12.1 separates P1–P6, P7–P10, P11–P12, and P13 cleanly (Tables 12.1–12.6). Section 12.2 evaluates noise budgets, joint Gaussian log-likelihoods, and Bayes factors (Tables 12.7–12.11). Section 12.3 isolates Protocol P13 systematics and 3G BNS stacking projections (Table 12.12), concluding with explicit falsification and confirmation checklists.'
        ]
      },
      {
        number: '12.1',
        anchorId: 'h12-sec-12-1',
        title: 'Scope Distinction: H11 (P1–P6), Bulk Probes (P7–P10), Active Folding (P11–P12) & Passive Bound P13',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'The H11 protocols P1–P6 test 4D physics only; they do not confirm 5D. Even a decisive 5σ detection across P1 (2:1 ULDM dual-clock lock), P2 (1.028 μm silica DP collapse), P3 (LiteBIRD B-modes), P4 (K_echo = 0.184 echoes), P5 (CANNEX Chameleon), or P6 (HL-LHC Φ_portal) verifies four-dimensional IGRT-H11 without establishing an extra spacetime dimension.',
          'P7–P10 test the 5D bulk; P11–P12 test the folding mechanism but are currently untestable; P13 is a passive bound. Specifically, P7 (10 μm / 19.733 meV exponential Yukawa extending Eöt-Wash [5] cleanly separated from H11 P5 power-law Chameleon templates on shared CANNEX hardware) tests the 5D bulk; P8 (10⁻¹⁹ optical/nuclear clocks) tests KK corrections; P9 (10⁻⁶ interferometric visibility) tests decoherence; and P10 (GW bulk leakage |h_scalar/h_tensor| ≤ 10⁻³ breathing polarization orthogonal to H11 P4 pure spin-2 K_echo = 0.184 echoes) tests 5D graviton leakage. By contrast, Protocols P11–P12 test the folding mechanism, but no current experiment can achieve the required sensitivity. The folding mechanism is not currently testable in controlled laboratory hardware.',
          'To provide an immediate passive empirical bridge without laboratory bulk emitters, Table 12.1 introduces Protocol P13 (Direct Passive Multi-Messenger Arrival Asymmetry Test): Protocol P13 is a passive bound from existing data, not an active test of the folding mechanism. Comparing brane-bound GRB 170817A photons against bulk-accessible GW170817 gravitational waves [14] across NGC 4993 luminosity distance D_L = 40 (+8/−14) Mpc (|Δt_{GW−EM}| ≤ 1.7 s, subject to a Category C astrophysical jet-breakout emission-lag prior Δt_intr ∈ [0, 1.74] s) directly bounds natural graviton-vs-photon bulk folding to |η_fold^{GW−EM} − 1| ≡ c |Δt_{GW−EM}| / D_L ≤ 4.129 × 10⁻¹⁶ today (1σ distance bracket 26–48 Mpc yields [3.441, 6.353] × 10⁻¹⁶, while z = 0.0098 comoving correction yields 4.170 × 10⁻¹⁶; statistical error only: 2.716 × 10⁻¹⁷; Assertions 70 & 86), with stacked 3G ET/CE + GRB catalogs (N = 150 BNS at 400 Mpc, 0.5 s lag dispersion) pushing sensitivity to 9.916 × 10⁻¹⁹ < 10⁻¹⁸ (Assertion 78).'
        ]
      },
      {
        number: '12.2',
        anchorId: 'h12-sec-12-2',
        title: 'Systematics, Statistical Thresholds, Multi-Messenger Joint Likelihood, Null Baseline & Bayesian Evidence',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          ...H12_PROTOCOL_ANALYSIS_SECTIONS.map((s) => `${s.title}: ${s.content}`),
          'Shared Preregistration, Blind Mock Injection & Relativistic-Species Firewall: Extending H11’s locked SHA-256 preregistration digest (57cf3f1c…048d) symmetrically to P7–P13, hardware campaigns mandate blinded mock-signal injections across Kelvin-probe electrostatic/Lifshitz baselines (§J.12) and global look-elsewhere trial-factor calibration (N_trials ≈ 200 ⇒ SNR_global ≥ 5.5–6.0) prior to unblinding. Cosmologically, H11’s Vainshtein BBN drift ceiling (|ΔG_BBN/G_0| ~ 10⁻³⁸) remains decoupled from H12’s Weyl dark-radiation bound (ΔN_eff^Weyl = 0.0614 < 0.28).',
          'Quantitative Joint Log-Likelihood Evaluation: Summing orthogonal Gaussian log-likelihood terms ln ℒ_joint(Θ_5D) = −½ ∑_{k ∈ {7,8,9,10,13}} ((x_k − μ_k(Θ_5D))/σ_k)² = −½ Δχ² evaluated at the 5σ discovery boundary (Δχ² = 25.00 across 1 effective bulk degree of freedom) yields ln ℒ_joint = −12.50 relative to the saturated signal fit. Subtracting the four-parameter Jeffreys–Occam complexity penalty Δ ln 𝒪 = −4 × 1.40 = −5.60 establishes net model-selection log-Bayes factor Δ ln B_{12/11} = ½ Δχ² + Δ ln 𝒪 = +12.50 − 5.60 = +6.90 (> +5.0 decisive Jeffreys threshold; Assertions 62 & 65).'
        ],
        equation: {
          label: '(12.1)',
          category: 'CATEGORY B — DERIVED',
          unicodeHtml:
            'ln ℒ<sub>joint</sub> = −½ ∑<sub><i>k</i>∈{7,8,9,10,13}</sub> ((<i>x</i><sub><i>k</i></sub> − μ<sub><i>k</i></sub>)/σ<sub><i>k</i></sub>)<sup>2</sup> = −12.50 (Δχ<sup>2</sup>=25), &nbsp;&nbsp; Δ ln <i>B</i><sub>12/11</sub> = +6.90 (Δ ln 𝒪 = −5.60)',
          plainText: 'ln L_joint = -1/2 sum ((x_k - mu_k)/sigma_k)^2 = -12.50 (at Delta chi^2 = 25), Delta ln B_{12/11} = +6.90 (Delta ln O = -5.60)',
          caption: 'Quantitative multi-messenger joint log-likelihood across P7–P10 & P13 and Jeffreys-scale Bayes factor incorporating the 4-parameter Occam penalty.'
        }
      },
      {
        number: '12.3',
        anchorId: 'h12-sec-12-3',
        title: 'Dedicated Protocol P13 Methodology: Falsification, Confirmation, Systematics & 3G Prospects',
        category: 'CATEGORY B — DERIVED',
        paragraphs: P13_DEDICATED_PROTOCOLS_AND_CHECKS.map((item) => `${item.title}: ${item.content}`)
      }
    ]
  },
  {
    number: 13,
    anchorId: 'h12-chapter-13',
    runningLabel: 'Chapter 13 · Extrapolations, Open Problems & Conclusion',
    title: 'Extrapolations, Frontiers, and Final Synthesis',
    leadSummary:
      'Explores twelve disciplined extrapolations beyond baseline H12, catalogs Open Problems OP-1 to OP-6, responds to Prior Audits, and delivers a comprehensive concluding synthesis.',
    subsections: [
      {
        number: '13.0',
        anchorId: 'h12-sec-13-0',
        title: 'Introduction',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Every comprehensive scientific monograph must know both how to close the books on what it has rigorously proved and how to map the unfinished shoreline beyond its final theorem. Having ruled out physical portals across Chapters 5–9 and quarantined all Category C/D assumptions in Chapter 11 and Chapter 12, Chapter 13 steps back to address the broader research landscape: where could fifth-dimensional IGRT extensions legitimately grow over the coming decades, how do Eqs. (H12.0.1)–(H12.0.2) constrain the solution space of seven open puzzles in modern physics (§13.5 & Appendix K), and what is the plain-language and scholarly bottom-line verdict of IGRT-2026-H12?',
          'For general readers, Sections 13.1 through 13.5 offer a guided tour along twelve carefully labeled research frontiers—from ultraviolet gravity above M_5 (10⁸–10¹⁸ GeV) and radion stabilization [21] to rotating Kerr–Hayward brane horizons and 100-meter quantum interferometers—followed by an analysis of how our coupled H11/H12 framework constrains seven open problems in physics without claiming to solve them (Table 13.2). Crucially, Table 13.1 pairs every frontier extrapolation directly beside the hard mathematical or experimental obstacle standing in its way.',
          'For specialist theorists, experimentalists, and curious non-specialists alike, Chapter 13 closes with six concrete Open Problems (OP-1 to OP-6), direct responses to external methodological audits, and Section 13.6—the Comprehensive Conclusion synthesizing our plain-language takeaways alongside our Category A–B negative theorems, preservation of 4D IGRT-H11, exact quarantine of Beltrami shortcut classifications, eleven laboratory Devices A–K (Appendix J), and near-term experimental roadmap (Protocols P7–P13).',
          'Roadmap of Chapter 13: Sections 13.1–13.4 catalog twelve disciplined research extrapolations (Table 13.1); Section 13.5 presents Seven Open Problems: How H12 Constrains the Solution Space (Table 13.2, Category C); and Section 13.6 delivers the unified lay-and-scholar Comprehensive Conclusion ahead of the References and alphabetically consolidated Appendices A–L.'
        ]
      },
      {
        number: '13.1',
        anchorId: 'h12-sec-13-1',
        title: 'UV Completion Above M_5, Goldberger–Wise Radion Stabilization & Chronology Protection (Extrapolations 1–3)',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'Extrapolation 1 (UV Completion of 5D Gravity) confronts the non-renormalizability of 5D gravity above M_5—bounded between M_5 ≥ 2.985 × 10⁸ GeV in flat M_4 × S¹ and M_5 = 1.8101 × 10¹⁸ GeV in warped AdS_5 (kπR_5 = 35)—framing H12 strictly as an effective field theory below M_5 pending 5D asymptotic safety (extending H11 g_* = 1.3105) or string/M-theory embedding.',
          'Extrapolation 2 (Goldberger–Wise Radion Stabilization) illustrates the required bulk scalar stabilization mechanism pinning Φ_rad above meV scales so solar-system PPN bounds (Cassini |γ_PPN − 1| < 2.3 × 10⁻⁵) and Eöt-Wash limits (R_5 ≤ 44 μm) remain intact.',
          'Extrapolation 3 (Chronology Protection in Asymmetric Bulks) examines whether boosted branes moving across an asymmetric bulk with η_fold = 0.07770 at k Δx = 50 trigger divergent Δσ⁻⁵ renormalized vacuum backreaction ⟨T_AB⟩_ren before closed null loops form.'
        ]
      },
      {
        number: '13.2',
        anchorId: 'h12-sec-13-2',
        title: 'Rotating 5D Kerr–Hayward Cores, Planck-Foam Wormholes & Horndeski Bridges (Extrapolations 4–6)',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'Extrapolation 4 (5D Kerr–Hayward Spinning Brane-World Horizons) generalizes H11’s non-singular spinning black hole (κ_− ℓ_0 ≤ 0.6639, M_rem = 1.09236 M_Pl) into axisymmetric 5D branes where static strings pinch below r_+/R_AdS = 0.876.',
          'Extrapolation 5 (Quantum-Inequality Wormhole Micro-Foams) highlights the verified 0.2436 Casimir-to-NEC parity reached strictly at the H11 core length r_0 = ℓ_0 = 1.3591 × 10⁻³⁵ m, confining self-sustaining wormhole fluctuations to Planckian quantum foam.',
          'Extrapolation 6 (Horndeski-Supported Brane Wormholes) tests transient NEC-violating Galileon branches against hyperbolicity c_s² > 0 and GW170817 tensor-speed bounds |c_GW/c − 1| ≤ 10⁻¹⁵.'
        ]
      },
      {
        number: '13.3',
        anchorId: 'h12-sec-13-3',
        title: 'Bulk GW Echo Dispersion, 50-Ion Modular Speed Limits & Holographic Complexity (Extrapolations 7–9)',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'Extrapolation 7 (Asymmetric Bulk GW Echo Dispersion) maps chirped KK echo trains alongside H11’s K_echo = 0.184, Δt_echo = 103.9 ms into Protocol P10 at ET/CE.',
          'Extrapolation 8 (Modular Speed Limits in Entangled Many-Body Systems) scales Device A optical-lattice clocks toward √N Heisenberg-limited Fisher trajectories tracking Model 3 (τ_brane = 3.33531 ms → τ_folded = 2.16795 ms at s_QFI = 3.2937 × 10¹² rad).',
          'Extrapolation 9 (Holographic Complexity = Bulk Volume / Action Duality) compares QFI geodesic arc s_QFI on PU(H) with AdS_5 CV/CA complexity.'
        ]
      },
      {
        number: '13.4',
        anchorId: 'h12-sec-13-4',
        title: 'Primordial 5D GW Relics, Sub-Micron Torsion Upgrades & 100-m Matter-Wave Interferometers (Extrapolations 10–12)',
        category: 'CATEGORY D — SPECULATIVE ENGINEERING',
        paragraphs: [
          'Extrapolation 10 (Primordial 5D GW Relics) bounds blue-tilted KK gravitational radiation from orbifold ekpyrotic bounces (n_s = 0.9637, r < 0.03) below ΔN_eff < 0.28.',
          'Extrapolation 11 (Sub-Micron Casimir–Torsion Upgrades) charts paths below R_5 = 1 μm (m_KK > 197 meV), while Extrapolation 12 targets |δV_5D| < 10⁻⁸ in 100-m atom interferometers.'
        ]
      },
      {
        number: '13.5',
        anchorId: 'h12-sec-13-5',
        title: 'Seven Open Problems: How H12 Constrains the Solution Space',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'No 5D phenomenon has been observed, and the 5D extension is a constrained hypothesis, not a solution to everything. Beyond ruling out impossible science-fiction shortcuts in Chapters 5–9, the coupled Eqs. (H12.0.1)–(H12.0.2) and the preserved four-dimensional IGRT-H11 core [1] narrow the viable solution space across seven major open problems spanning cosmology, black holes, quantum measurement, thermodynamics, and causality (Table 13.2 & Appendix K). Even for general readers without advanced tensor calculus, the epistemic discipline is transparent: these are not completed final solutions; rather, H12 places sharp quantitative bounds on admissible extensions while distinguishing preserved 4D mathematics (Category B) from conjectural 5D mechanisms (Category C).',
          'Specifically: (1) Cosmic expansion & dark-energy tension are constrained to H_0 = 70.77 ± 0.72 and evolving (w_0, w_a) = (−0.831, −0.542) protected to 4.972 × 10⁻¹⁴ beneath m_KK^(1) (retaining H11’s Planck–DESI DR2 ΔAIC = −1.84 input-driven caveat); (2) Black-hole core regularity is modeled via Hayward cores (ξ_0 = 2⁻¹/⁴, M_rem = 1.09236 M_Pl, K_echo = 0.184) that obey ρ + p_r = 0 and never open macroscopic portals; (3) If a warped 5D bulk exists, exponent kπR_5 = 35 parameterizes e⁻³⁵ = 6.3051 × 10⁻¹⁶ across the hierarchy gap (postulated, not derived); (4) Physical time flow links thermal KMS time and Quantum Fisher distinguishability inside Eq. (H12.0.2) plus V² + D_QFI² = 1; (5) Early-universe horizon mixing is constrained via non-singular bounce bounds and Weyl radiation (ΔN_eff = 0.0614 < 0.28); (6) Quantum nonlocality and Deutsch closed time loops are constrained by [O_A, O_B] = 0 and ρ_CTC = diag(0.5, 0.5) against FTL signaling; and (7) Macroscopic wormholes (10⁷¹ deficit) and perpetual "free energy" (ΔW_out ≤ ΔF_mod) are ruled out while framing micro-scale Casimir (13.001 Pa / 1.3001 mN) and Unruh (40.55 μK) benchtop transducers (Devices G–K).'
        ]
      },
      {
        number: '13.6',
        anchorId: 'h12-sec-13-6',
        title: 'Comprehensive Conclusion: Established Limits, Epistemic Verdict & Open Horizons',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'Plain-Language Bottom Line — What Did We Actually Discover? Imagine stepping onto a clear glass bridge spanning two cliffs: from afar people speculate wildly about teleportation doors, time-reversal machines, or endless free energy hidden in the fifth dimension. When you step out onto the verified equations and check every bolt by hand, the real story turns out to be both cleaner and far more exciting than science fiction. First, our familiar four-dimensional universe—space, time, gravity, and quantum rules mapped out in our companion monograph IGRT-2026-H11—stands completely unshaken. Any hidden fifth dimension, if it exists, must be curled smaller than 44 micrometers (about half a human hair) and cannot alter everyday atoms, clocks, or galaxies. Second, nature slams the door gently but firmly on magic shortcuts: ordinary black holes are smooth, sealed cosmic safes rather than tunnels; holding open a human-sized wormhole would demand 10⁷¹ times more negative energy than empty space holds; quantum entanglement shares instant bookkeeping patterns without ever leaking faster-than-light messages; and quantum vacuum harvesters pull real millinewton forces out of empty space (Device I: 1.3001 mN across 1 cm² at 100 nm) while obeying thermodynamic passivity so perpetual-motion free-energy schemes remain strictly impossible.',
          'What Then Can We Actually Build, Measure, and Test Today? Far from leaving physicists empty-handed, Appendix J transforms these exact limits into eleven tangible machines (Devices A–K) that anyone with modern laboratory equipment can study, simulate, and test. Optical-lattice atomic clocks (Device A) measure quantum-information timekeeping to one second in twice the age of the universe; sub-10-micrometer vacuum balances (Device B) weigh whether gravity leaks into a fifth dimension; layered photonic chips and Si₃N₄ twin-ring portal cavities (Devices C and G) make Beltrami curved geodesics and evanescent brane tunneling visible under infrared cameras; double-slit interferometers (Device D) check quantum mechanics’ unit circle to parts per million; cold-atom waterfalls and crystal interferometers (Devices F and K) replicate horizon echoes and ghost-free curved bulks; Pockels optical loops (Device H) verify paradox-free Deutsch fixed points; and cryogenic Casimir/Unruh transducers (Devices I and J) turn zero-point quantum fluctuations into precision micro-mechanical and thermal engines. Meanwhile, sky searches (Protocol P13 using GW170817 and upcoming Einstein Telescope mergers) audit whether gravitons ever beat light across millions of light-years. In plain words: you cannot cheat causality or energy conservation—but understanding exactly why lets you engineer quantum sensors, test hidden dimensions cleanly, and sharply constrain the solution space across seven long-standing open problems in physics (§13.5 & Appendix K).',
          'First — What This Monograph Conclusively Establishes (Scholarly Core): Starting from the core question of whether extending Information-Geometric Resonant Time into a fifth spatial coordinate y enables folded proper time, faster cosmic paths, or physical portals, our clearest scientific findings are closed Category A and Category B negative theorems. Ordinary flat extra dimensions (M_4 × S¹) strictly lengthen null trajectories (L_5/L_4 = 1.001249 at 1 km, proven for arbitrary oscillatory or closed compact windings by Cauchy–Schwarz); symmetric conformal Randall–Sundrum bulks (AdS_5 [2]) preserve c_eff(y) = c identically everywhere (Horizon Theorem excursion 1.010321 ≥ 1); regular 4D H11 Hayward black holes [6] satisfy both radial (ρ + p_r = 0) and transverse (ρ + p_⊥ > 0) Null Energy Conditions at r_core = 2.5389 × 10⁻²² m and are sealed objects rather than traversable portals; macroscopic Morris–Thorne wormholes [8] demand −1.0637 × 10⁻³ M_⊙ (at 1 m) to −3.1912 M_⊙ (at 3 km) of exotic energy, failing physical Casimir and Ford–Roman quantum-inequality ceilings [9, 22] by 10⁷¹ at 1 m and reaching O(1) parity (0.2436 / 0.1688) strictly at Planck length ℓ_0; double-slit wave–particle duality V² + D_QFI² = 1 resides completely inside the internal projective Hilbert fiber PU(H) ⊥ ∂/∂y without 5D particle transit [10, 11]; and 5D Lorentzian microcausality preserves the quantum no-communication theorem [O_A, O_B] = 0 without faster-than-light signaling [17, 18, 19].',
          'Second — Complete Preservation of IGRT-2026-H11: The H12 document is a follow-up, not a replacement for H11. The H11 SHA-256 preregistration digest is preserved. The H12 document is explicitly labeled as an extension. Every four-dimensional prediction of IGRT-2026-H11 [1]—including Araki coupling κ_ψ = 2.1727 × 10⁻²¹ GeV⁻¹, Hayward core regularity ratio ξ_0 = 2⁻¹/⁴, WKB ringdown reflectivity K_echo = 0.184, remnant mass M_rem = 1.09236 M_Pl, cosmological posterior H_0 = 70.77 ± 0.72 km s⁻¹ Mpc⁻¹, and empirical tests P1–P6—remains strictly invariant beneath the Eöt-Wash Kaluza–Klein threshold E ≪ m_KK^(1) ≥ 4.485 meV (R_5 ≤ 44 μm [5], suppressing 1 neV corrections to δ_KK = 4.972 × 10⁻¹⁴ across tree-level, Pauli–Villars, Heat-Kernel, MS-bar, and FRG Litim regulators).',
          'Third — Precise Quarantine of Category C Conjectures & Asymmetric Geometry: Positive Beltrami bulk shortcuts—across phenomenological unbounded Model 2B (η_fold = 0.86634, 0.34279, 0.07770 at k Δx = 2, 10, 50) as well as the exact finite-span ghost-free Einstein–Maxwell bulk (α_t = 1.0, α_x = 0.0 yielding closed-form η_fold^EM = sin(k Δx/2)/(k Δx/2) = 0.84147 at k Δx = 2 < π, horizon ceiling 2/π = 0.63662)—stand strictly as Category C geometric classifications rather than physical predictions. The exact 5D NEC factorization theorem proves that unbounded phenomenological Model 2B violates the 5D Null Energy Condition in both brane (−k²) and bulk (−1.5 k²) directions, whereas physically realizing even the ghost-free Einstein–Maxwell arch would require an unobserved macroscopic bulk electric flux F_{0y}. Equally candidly, Eqs. (H12.0.1)–(H12.0.2), 5D radion Vainshtein/Goldberger–Wise screening [21], the imported Gregory–Laflamme black-string threshold (r_+/R_AdS = 0.876 [7]), and UV completion above M_5 (10⁸–10¹⁸ GeV) remain explicitly listed in Chapter 11 among un-derived hypotheses.',
          'Fourth — Empirical Verdict & The Decisive Roadmap Ahead (P7–P13): As of November 2026, no fifth-dimensional phenomenon has been observed, and no active laboratory test of temporal folding (P11–P12) can achieve the required sensitivity. Instead, empirical accountability rests cleanly on three realistic fronts: near-term tabletop probes testing whether a 5D bulk or decoherence residual exists (P7 CANNEX sub-10 μm Casimir–Yukawa gravity reaching 19.733 meV, P8 10⁻¹⁹ optical/nuclear clocks, and P9 10⁻⁶ matter-wave interferometry), third-generation gravitational-wave observatories searching for scalar breathing modes and KK leakage (P10, ET/CE |h_scalar/h_tensor| ≤ 10⁻³), and passive multi-messenger timing P13—which already bounds gravitational-vs-electromagnetic bulk folding to |η_fold^{GW−EM} − 1| ≤ 4.129 × 10⁻¹⁶ from GW170817/GRB 170817A [14] and projects to 9.916 × 10⁻¹⁹ < 10⁻¹⁸ across stacked 3G binary neutron-star mergers. Alongside all eleven laboratory devices and analog systems Devices A–K (Appendix J), any confirmed ≥ 5σ joint detection clearing the Bayesian Occam threshold Δ ln B_{12/11} ≥ +5.0 would open a genuine observational window into higher-dimensional gravity; conversely, continued null results tighten experimental exclusion bounds cleanly while leaving four-dimensional IGRT-H11 completely intact.',
          'Final Statement: IGRT-2026-H12—verified end-to-end across 102 programmatic mathematical, dynamical, thermodynamic, and device-physics assertions in scripts/verify-igrt-h12.mjs, 665 preserved H11 assertions, and 500 structural criteria across ten audit domains in Consolidated Appendices A–L—closes the gap between geometric possibility and physical plausibility: higher-dimensional mathematics permits rich resonant structures on paper and inspiring laboratory analogs on optical and cryogenic benches, yet nature’s energy conditions, Second-Law passivity, and multi-messenger sky hold the door firmly shut against facile spacetime shortcuts or over-unity illusions unless future experiment reveals physics beyond our four-dimensional brane.'
        ]
      }
    ]
  }
];

export interface H12FrontMatterLists {
  tables: Array<{ id: string; title: string; location: string }>;
  equations: Array<{ label: string; title: string; category: H12EpistemicCategory; location: string }>;
}

export const H12_FRONTMATTER_TABLES_LIST: Array<{ id: string; title: string; location: string }> = [
  { id: 'Table 1.1', title: 'Audit of Twelve Core IGRT-H11 Components & 5D Status', location: 'Ch. 1 (§1.1)' },
  { id: 'Table 1.2', title: 'Direct Comparison: 4D IGRT-H11 vs. 5D IGRT-H12', location: 'Ch. 1 (§1.3)' },
  { id: 'Table 1.3', title: 'Category B vs. Category C Grey-Area Boundary Rubric', location: 'Ch. 1 (Opening Box)' },
  { id: 'Table 2.1', title: 'Catalog of 665 Verified IGRT-H11 Monograph Assertions', location: 'Ch. 2 (§2.2)' },
  { id: 'Table 2.2', title: 'Eöt-Wash Uncertainty, UV Regulators & Clock Energy Sweep', location: 'Ch. 2 (§2.2)' },
  { id: 'Table 3.1', title: 'Taxonomy of Seven Orthogonal Temporal Notions & Literature', location: 'Ch. 3 (§3.1)' },
  { id: 'Table 4.1', title: 'Positive Conjectures Summary Table (Category C)', location: 'Ch. 4 (§4.2)' },
  { id: 'Table 4.2', title: 'Model 2B Beltrami Quadrature Convergence & ds_5² = 0 Verification', location: 'Ch. 4 (§4.2)' },
  { id: 'Table 5.1', title: 'Six-Class Black-Hole & Portal Geometry Taxonomy (Classes A–F)', location: 'Ch. 5 (§5.2)' },
  { id: 'Table 6.1', title: 'Summary of Closed Negative Results (Wormholes & Horizons)', location: 'Ch. 6 (§6.2)' },
  { id: 'Table 9.1', title: 'Consolidated Negative Results Summary Table (with P13)', location: 'Ch. 9 (§9.2)' },
  { id: 'Table 10.1', title: 'What Is Unique to 5D vs. Reproduced in 4D H11', location: 'Ch. 10 (§10.1)' },
  { id: 'Table 10.2', title: 'Observational Bounds Audit (Eöt-Wash, BBN, GW170817, Cassini, LHC, DE & CMB)', location: 'Ch. 10 (§10.2)' },
  { id: 'Table 10.3', title: '5D Signatures, Experimental Tests & Current Observational Constraints', location: 'Ch. 10 (§10.2)' },
  { id: 'Table 11.1', title: 'What Is Not Derived — Exhaustive Epistemic Honesty Ledger', location: 'Ch. 11 (§11.1)' },
  { id: 'Table 12.1', title: 'Empirical Falsification & Conceptual Protocols (P7–P13)', location: 'Ch. 12 (§12.1)' },
  { id: 'Table 12.2', title: 'Experimental Timeline Table (P7–P13)', location: 'Ch. 12 (§12.2)' },
  { id: 'Table 12.3', title: 'Protocol Falsification Threshold Table (P7–P13)', location: 'Ch. 12 (§12.2)' },
  { id: 'Table 12.4', title: 'Protocol Confirmation Threshold Table (P7–P13)', location: 'Ch. 12 (§12.2)' },
  { id: 'Table 12.5', title: 'Multi-Outcome Scientific Decision Matrix', location: 'Ch. 12 (§12.2)' },
  { id: 'Table 12.6', title: 'Comparison Table: H11 (P1–P6) vs. H12 (P7–P13) Protocols', location: 'Ch. 12 (§12.2)' },
  { id: 'Table 12.7', title: 'Quantitative Noise Budget & Systematic Controls (P7–P13)', location: 'Ch. 12 (§12.2)' },
  { id: 'Table 12.8', title: 'Systematic Error Budget for Protocol P13 (GW170817 / GRB 170817A)', location: 'Ch. 12 (§12.3)' },
  { id: 'Table 12.9', title: 'Statistical Error Budget for Protocol P13 (Single Event vs. 3G Stack)', location: 'Ch. 12 (§12.3)' },
  { id: 'Table 12.10', title: 'Combined Orthogonal Bounds & Joint Likelihood Table (P7–P13)', location: 'Ch. 12 (§12.3)' },
  { id: 'Table 12.11', title: 'Multi-Epoch Sensitivity Projection Table (P7–P13)', location: 'Ch. 12 (§12.3)' },
  { id: 'Table 12.12', title: 'Summary of Passive Folding Bounds for Protocol P13', location: 'Ch. 12 (§12.3)' },
  { id: 'Table 13.1', title: 'Twelve Research Extrapolations & Open Obstacles', location: 'Ch. 13 (§13.4)' },
  { id: 'Table 13.2', title: 'Seven Open Problems: How H12 Constrains the Solution Space (Category C)', location: 'Ch. 13 (§13.5)' },
  { id: 'Table I.1–I.2', title: 'Structural Verification Scorecard (10 Domains + 16 Red-Team Attacks)', location: 'Appendix I' },
  { id: 'Table J.1', title: 'Devices A–K Master Specifications (Incl. DRL 1–9, Cost, Timeline, Thresholds & Systematics)', location: 'Appendix J' },
  { id: 'Table J.2', title: 'Cross-Device Sensitivity, Readiness & Discovery Horizon Matrix (Devices A–K)', location: 'Appendix J' },
  { id: 'Table K.1', title: 'Seven Open Problems and How H12 Constrains Them (Category C)', location: 'Appendix K' },
  { id: 'Table L.1', title: 'Five-Tier Assessment of Eleven Candidate Speculative Portal Concepts', location: 'Appendix L' }
];

export const H12_FRONTMATTER_EQUATIONS_LIST: Array<{
  label: string;
  title: string;
  category: H12EpistemicCategory;
  location: string;
}> = [
  { label: 'Eq. (H12.0.1)', title: 'Assumed Generalized 5D Warped Bulk Metric Ansatz', category: 'CATEGORY C — CONJECTURAL', location: 'Frontmatter' },
  { label: 'Eq. (H12.0.2)', title: '5D QFI Clock Lift & Folding Ratio Definition η_fold ≡ Δτ_5 / Δτ_4', category: 'CATEGORY C — CONJECTURAL', location: 'Frontmatter' },
  { label: 'Eq. (1.1)', title: 'Preserved H11 Araki Coupling κ_ψ & Hayward Ratio ξ_0 = 2⁻¹/⁴', category: 'CATEGORY B — DERIVED', location: 'Ch. 1 (§1.1)' },
  { label: 'Eq. (2.1)', title: '5D Principal Bundle Orthogonality G_{Ai} = 0 (PU(H) ⊥ ∂/∂y)', category: 'CATEGORY B — DERIVED', location: 'Ch. 2 (§2.1)' },
  { label: 'Eq. (2.2)', title: 'Low-Energy KK Form-Factor Shift δ_KK(1 neV) = 4.972 × 10⁻¹⁴', category: 'CATEGORY B — DERIVED', location: 'Ch. 2 (§2.2)' },
  { label: 'Eq. (3.1)', title: '5D Modular Proper-Time Law & Temporal Folding Tensor ℱ_AB', category: 'CATEGORY B — DERIVED', location: 'Ch. 3 (§3.1)' },
  { label: 'Eq. (4.1)', title: 'Conserved Beltrami Integral & Category C Shortcut Ratios', category: 'CATEGORY C — CONJECTURAL', location: 'Ch. 4 (§4.2)' },
  { label: 'Eq. (5.1)', title: 'Exact Hayward Radial (ρ+p_r = 0) & Transverse NEC Satisfaction', category: 'CATEGORY B — DERIVED', location: 'Ch. 5 (§5.1)' },
  { label: 'Eq. (6.1)', title: 'Morris–Thorne Exotic Negative-Energy Integral E_exotic(r_0)', category: 'CATEGORY B — DERIVED', location: 'Ch. 6 (§6.1)' },
  { label: 'Eq. (6.2)', title: 'Casimir-to-Wormhole Energy Ratio (4.50 × 10⁻⁷¹ at 1 m vs 0.2436 at ℓ_0)', category: 'CATEGORY B — DERIVED', location: 'Ch. 6 (§6.2)' },
  { label: 'Eq. (7.1)', title: 'Double-Slit SLD Fisher Identity F_Q = V² ⇒ V² + D_QFI² = 1', category: 'CATEGORY B — DERIVED', location: 'Ch. 7 (§7.1)' },
  { label: 'Eq. (12.1)', title: 'Multi-Messenger Joint Likelihood ln ℒ_joint & Bayes Occam Δ ln B_{12/11}', category: 'CATEGORY B — DERIVED', location: 'Ch. 12 (§12.2)' }
];

function mdCell(s: string): string {
  return String(s ?? '').replace(/\|/g, '\\|').replace(/\r?\n/g, ' ').trim();
}

function toMdTable(headers: string[], rows: string[][]): string {
  const out: string[] = [];
  out.push(`| ${headers.map(mdCell).join(' | ')} |`);
  out.push(`| ${headers.map(() => '---').join(' | ')} |`);
  for (const r of rows) {
    out.push(`| ${r.map(mdCell).join(' | ')} |`);
  }
  return out.join('\n');
}

export function buildH12FullMarkdown(): string {
  const lines: string[] = [];
  lines.push(`# ${H12_META.title}`);
  lines.push(`**${H12_META.subtitle}**`);
  lines.push(`*${H12_META.edition} · ${H12_META.date} · Predecessor: ${H12_META.predecessor}*`);
  lines.push('');
  H12_META.authorRoster.forEach((au) => {
    const idStr = au.orcidUrl ? `[ORCID: ${au.orcid}](${au.orcidUrl})` : `Email: ${au.email ?? 'N/A'}`;
    lines.push(`- **${au.name}** — ${au.affiliation} (${idStr})`);
  });
  lines.push('');
  lines.push('## Abstract');
  H12_ABSTRACT_PARAGRAPHS.forEach((p) => {
    lines.push(p);
    lines.push('');
  });
  lines.push('## Foundational Five-Dimensional Equations (Category C) & Epistemic Boundaries');
  lines.push(`*${H12_FOUNDATIONAL_EQUATIONS_NOTE}*`);
  lines.push('');
  H12_MASTER_EQUATIONS.forEach((eq) => {
    lines.push(`> **${eq.label} [${eq.category}]** \`${eq.plainText}\``);
    lines.push(`> *${eq.caption}*`);
    lines.push('');
  });
  lines.push(`### ${H12_SCOPE_AND_NON_CLAIMS.title}`);
  H12_SCOPE_AND_NON_CLAIMS.points.forEach((pt) => lines.push(`- ${pt}`));
  lines.push('');

  lines.push('### Front-Matter Reference Lists');
  lines.push('#### List of Illustrations');
  lines.push('- **Plate H12-I** (Ch.2): Conceptual Synthesis: Layered 4D Brane, Projective Hilbert Fiber & Resonant Coupling [CATEGORY C — CONJECTURAL]');
  lines.push('- **Plate H12-II** (Ch.5): Conceptual Atlas: Compactified Bulk M_5 = M_4 × K_1, Compact Fiber & Resonance Portals [CATEGORY D — SPECULATIVE ENGINEERING]');
  H12_THEORY_ILLUSTRATIONS_META.forEach((ill) =>
    lines.push(`- **${ill.illustrationNumber}** (Ch.${ill.anchorChapter}): ${ill.title} [${ill.category}]`)
  );
  H12_SUPPLEMENTAL_PLATES_META.forEach((ill) =>
    lines.push(`- **${ill.illustrationNumber}** (Ch.${ill.anchorChapter} · Supplemental Plate): ${ill.title} [${ill.category}]`)
  );
  H12_PROPOSED_DEVICES.forEach((d) =>
    lines.push(`- **Cutaway Plate (${d.deviceId})**: ${d.name} Hardware Cutaway Plate [${d.category}]`)
  );
  lines.push('');
  lines.push('#### List of Principal Equations');
  H12_FRONTMATTER_EQUATIONS_LIST.forEach((eq) => lines.push(`- **${eq.label}** (${eq.location}, ${eq.category}): ${eq.title}`));
  lines.push('');
  lines.push('#### List of Tables');
  H12_FRONTMATTER_TABLES_LIST.forEach((tb) => lines.push(`- **${tb.id}** (${tb.location}): ${tb.title}`));
  lines.push('');
  lines.push('#### List of Theorems & Definitions');
  H12_THEOREMS_LIST.forEach((th) => lines.push(`- **${th.id}** (${th.location}, ${th.category}): ${th.title}`));
  H12_DEFINITIONS_LIST.forEach((df) => lines.push(`- **${df.id} (${df.term})**: ${df.formalDefinition}`));
  lines.push('');

  H12_CHAPTERS.forEach((ch) => {
    lines.push(`## Chapter ${ch.number}. ${ch.title}`);
    lines.push(`*${ch.leadSummary}*`);
    lines.push('');
    if (ch.number === 1) {
      lines.push(`> **Metric Signature Box:** ${H12_METRIC_SIGNATURE_BOX}`);
      lines.push('');
      lines.push('#### Table 1.3 · Category B/C Boundary Rubric Box (Resolving Epistemic Grey Areas)');
      lines.push(
        toMdTable(
          ['Boundary Case', 'Derived Core', 'Conjectural Premise', 'Assigned Category & Boundary Rule'],
          EPISTEMIC_BC_GREY_AREA_RUBRIC.map((r) => [
            r.boundaryCase,
            r.derivedAspect,
            r.conjecturalAspect,
            `${r.assignedCategory} — ${r.ruleApplied}`
          ])
        )
      );
      lines.push('');
    }
    if (ch.number === 2) {
      lines.push('### Timeline of 5D Physics (1921–2026)');
      lines.push(
        toMdTable(
          ['Year', 'Milestone', 'Contribution to IGRT-H12'],
          TIMELINE_5D_PHYSICS.map((t) => [t.year, t.milestone, t.contributionToH12])
        )
      );
      lines.push('');
    }
    ch.subsections.forEach((sub) => {
      lines.push(`### ${sub.number} ${sub.title} [${sub.category}]`);
      sub.paragraphs.forEach((p) => {
        lines.push(p);
        lines.push('');
      });
      if (sub.equation) {
        lines.push(`> **${sub.equation.label} [${sub.equation.category}]** \`${sub.equation.plainText}\``);
        lines.push(`> *${sub.equation.caption}*`);
        lines.push('');
      }
      if (sub.bulletPoints && sub.bulletPoints.length > 0) {
        sub.bulletPoints.forEach((bp) => lines.push(`- **${bp.label}:** ${bp.text}`));
        lines.push('');
      }
      if (sub.theoremBox) {
        lines.push(`> **${sub.theoremBox.number} — ${sub.theoremBox.title} [${sub.theoremBox.category}]**`);
        sub.theoremBox.hypotheses.forEach((h) => lines.push(`> - ${h}`));
        lines.push(`> ${sub.theoremBox.statement}`);
        lines.push('');
      }
      if (sub.workedExample) {
        lines.push(`> **${sub.workedExample.title}**`);
        lines.push(`> ${sub.workedExample.setup}`);
        sub.workedExample.steps.forEach((st, idx) => lines.push(`> ${idx + 1}. ${st}`));
        lines.push(`> \`${sub.workedExample.resultEquation.plainText}\` — *${sub.workedExample.resultEquation.caption}*`);
        lines.push(`> **Takeaway:** ${sub.workedExample.takeaway}`);
        lines.push('');
      }
    });
    if (ch.number === 1) {
      lines.push('#### Table 1.1 · Audit of Twelve Core H11 Components');
      lines.push(
        toMdTable(
          ['Component', 'H11 Value / Role', 'H12 Status', 'Category & Modification'],
          H11_TWELVE_COMPONENTS_AUDIT.map((r) => [
            r.component,
            r.h11EquationOrValue,
            r.h12Status,
            `${r.category}: ${r.h12Modification}`
          ])
        )
      );
      lines.push('');
      lines.push('#### Table 1.2 · Comparison: 4D IGRT-H11 vs. 5D IGRT-H12');
      lines.push(
        toMdTable(
          ['Dimension', '4D IGRT-H11', '5D IGRT-H12', 'Epistemic Delta', 'Testable Now?'],
          COMPARISON_4D_VS_5D_IGRT.map((c) => [c.dimension, c.h11FourD, c.h12FiveD, c.epistemicDelta, c.testableNow])
        )
      );
      lines.push('');
      lines.push('#### Glossary of 5D Terms');
      GLOSSARY_5D_TERMS.forEach((g) => lines.push(`- **${g.term}**: ${g.definition}`));
      lines.push('');
      lines.push('#### Summary for Physicists');
      lines.push(`> ${SUMMARY_FOR_PHYSICISTS}`);
      lines.push('');
    }
    if (ch.number === 2) {
      lines.push('#### Table 2.1 · Catalog of 665 Verified IGRT-H11 Assertions');
      lines.push(
        toMdTable(
          ['Verification Group', 'Assertions', 'Verified Scope'],
          H11_665_ASSERTIONS_CATALOG.map((c) => [c.moduleGroup, String(c.assertionCount), c.verifiedPhysicalScope])
        )
      );
      lines.push('');
      lines.push('#### Table 2.2 · Eöt-Wash Uncertainty, UV Regulators & Clock Energy Sweep');
      lines.push(
        toMdTable(
          ['Regime / Regulator', 'Scale', 'Computed Output', 'Physical Interpretation'],
          REGULATOR_SENSITIVITY_TABLE.map((r) => [
            r.regimeOrRegulator,
            r.energyOrRadius,
            r.computedOutput,
            r.physicalInterpretation
          ])
        )
      );
      lines.push('');
    }
    if (ch.number === 3) {
      lines.push('#### Table 3.1 · Seven Orthogonal Temporal Notions & Literature Correspondence');
      lines.push(
        toMdTable(
          ['Notion', 'Symbol', 'Mathematical Definition', 'Folding & Literature'],
          SEVEN_TEMPORAL_NOTIONS.map((t) => [
            t.notion,
            t.symbol,
            t.mathematicalDefinition,
            `${t.foldsInH12} (${t.literatureComparison})`
          ])
        )
      );
      lines.push('');
    }
    if (ch.number === 4) {
      lines.push('#### Table 4.1 · Positive Conjectures Summary Table (Category C)');
      lines.push(
        toMdTable(
          ['Conjecture', 'Statement', 'Category', 'Target Protocol'],
          POSITIVE_CONJECTURES_SUMMARY.map((p) => [p.conjecture, p.statement, p.category, p.test])
        )
      );
      lines.push('');
      lines.push('#### Table 4.2 · Model 2B Quadrature Convergence & ds_5² = 0 Verification');
      lines.push(
        toMdTable(
          ['Span', 'Peak Bulk Depth', 'Folding & Speed', 'Residuals'],
          MODEL2B_CONVERGENCE_AND_MICROCAUSALITY_TABLE.map((m) => [
            m.benchmarkSpan,
            m.turningPeak,
            m.etaFoldAndSpeed,
            m.elAndNullResidual
          ])
        )
      );
      lines.push('');
    }
    if (ch.number === 5) {
      lines.push('#### Table 5.1 · Six-Class Black-Hole & Portal Taxonomy');
      lines.push(
        toMdTable(
          ['Class', 'Metric & NEC', 'Portal Viability', 'Category & Stability'],
          SIX_BLACK_HOLE_CLASSES.map((b) => [
            `${b.classId} (${b.label})`,
            `${b.metricSignatureAndForm} · ${b.necStatus}`,
            b.portalViability,
            `${b.category}: ${b.stabilityAndConstraints}`
          ])
        )
      );
      lines.push('');
    }
    if (ch.number === 6 || ch.number === 9) {
      lines.push(`#### Table ${ch.number}.1 · Negative Results Summary`);
      lines.push(
        toMdTable(
          ['Negative Theorem', 'Category', 'Derived Statement', 'Physical Implication'],
          NEGATIVE_RESULTS_SUMMARY.map((n) => [n.theorem, n.category, n.statement, n.implication])
        )
      );
      lines.push('');
      lines.push('#### Glossary of Negative Theorems');
      GLOSSARY_NEGATIVE_THEOREMS.forEach((g) => lines.push(`- **${g.term}**: ${g.definition}`));
      lines.push('');
    }
    if (ch.number === 10) {
      lines.push('#### Table 10.1 · What Is Unique to 5D?');
      lines.push(
        toMdTable(
          ['Observable', '4D IGRT-H11', 'Unique to 5D H12', 'Empirical Status'],
          WHAT_IS_UNIQUE_TO_5D.map((u) => [u.observable, u.reproducedIn4DH11, u.uniqueTo5DH12, u.empiricalStatus])
        )
      );
      lines.push('');
      lines.push('#### Table 10.2 · 5D Observational Consistency Bounds');
      lines.push(
        toMdTable(
          ['Probe', 'Bound', 'H12 Status', 'Derived vs. Assumed'],
          FIVE_D_OBSERVATIONAL_BOUNDS.map((b) => [b.probe, b.bound, b.h12Status, b.derivationOrAssumption])
        )
      );
      lines.push('');
      lines.push('#### Table 10.3 · 5D Signatures, Experimental Tests & Current Observational Constraints');
      lines.push(
        toMdTable(
          ['5D Signature', 'Experiment That Would Test It', 'Current Observational Constraint'],
          FIVE_D_SIGNATURES_TEST_MATRIX.map((s) => [s.signature, s.experimentToTestIt, s.currentConstraint])
        )
      );
      lines.push('');
    }
    if (ch.number === 11) {
      lines.push('#### Table 11.1 · What Is Not Derived Ledger');
      lines.push(
        toMdTable(
          ['Claim / Ansatz / Postulate', 'Category', 'Exact Reason Not Derived'],
          WHAT_IS_NOT_DERIVED_LEDGER.map((w) => [w.claim, w.category, w.whyNotDerived])
        )
      );
      lines.push('');
    }
    if (ch.number === 12) {
      lines.push('#### Table 12.1 · Empirical Protocols P7–P13');
      lines.push(
        toMdTable(
          ['Protocol', 'Relation to H11', 'Sensitivity', 'Falsification Criterion'],
          H12_ALL_PROTOCOLS.map((p) => [`${p.id} · ${p.name} [${p.category}]`, p.relationToH11, p.numericalSensitivity, p.falsificationCriterion])
        )
      );
      lines.push('');
      lines.push('#### Table 12.2 · Timeline Table (P7–P13)');
      lines.push(
        toMdTable(
          ['Protocol', 'Current State', 'Required Sensitivity', 'Expected Year'],
          P7_TO_P13_TIMELINE_TABLE.map((t) => [t.protocol, t.currentState, t.requiredSensitivity, t.expectedYear])
        )
      );
      lines.push('');
      lines.push('#### Table 12.3 & 12.4 · Falsification vs. Confirmation Thresholds (P7–P13)');
      lines.push(
        toMdTable(
          ['Protocol', 'Null Falsification Bound', 'What It Rules Out', 'Confirmation Signal & Control'],
          P7_TO_P13_FALSIFICATION_TABLE.map((f, idx) => {
            const c = P7_TO_P13_CONFIRMATION_TABLE[idx];
            return [f.protocol, f.nullBound, f.whatItRulesOut, c ? `${c.signalSignature} (Control: ${c.requiredControl})` : '—'];
          })
        )
      );
      lines.push('');
      lines.push('#### Table 12.5 · Empirical Decision Matrix (P7–P13)');
      lines.push(
        toMdTable(
          ['Outcome', 'Posterior Status', 'Mandatory Action'],
          P7_TO_P13_DECISION_MATRIX.map((d) => [d.outcome, d.posteriorStatus, d.mandatoryAction])
        )
      );
      lines.push('');
      lines.push('#### Table 12.6 · H11 vs. H12 Protocols Comparison');
      lines.push(
        toMdTable(
          ['Aspect', 'H11 (P1–P6)', 'H12 (P7–P13)'],
          H11_VS_H12_PROTOCOLS_COMPARISON.map((cmp) => [cmp.aspect, cmp.h11Protocols, cmp.h12Protocols])
        )
      );
      lines.push('');
      lines.push('#### Table 12.7 · Quantitative Noise Budget & Systematic Controls (P7–P13)');
      lines.push(
        toMdTable(
          ['Protocol', 'Primary Noise Sources', 'Quantitative Floor', 'Mitigation Architecture'],
          P7_TO_P13_NOISE_BUDGET_TABLE.map((nb) => [
            nb.protocol,
            nb.primaryNoiseSources,
            nb.quantitativeBudget,
            nb.mitigationArchitecture
          ])
        )
      );
      lines.push('');
      lines.push('#### Table 12.8 · Systematic Error Budget for Protocol P13');
      lines.push(
        toMdTable(
          ['Source', 'Magnitude', 'Impact on η_fold', 'Mitigation'],
          P13_SYSTEMATIC_ERROR_BUDGET.map((s) => [s.source, s.magnitudeOrUncertainty, s.impactOnEtaFold, s.mitigationStrategy])
        )
      );
      lines.push('');
      lines.push('#### Table 12.9 · Statistical Error Budget for Protocol P13');
      lines.push(
        toMdTable(
          ['Channel', 'Precision', 'Propagated η_fold Error', 'Scaling Note'],
          P13_STATISTICAL_ERROR_BUDGET.map((st) => [
            st.channel,
            st.measurementPrecision,
            st.propagatedEtaFoldError,
            st.sampleScalingNote
          ])
        )
      );
      lines.push('');
      lines.push('#### Table 12.10 · Combined Bound Table for P7–P13');
      lines.push(
        toMdTable(
          ['Cluster', 'Parameters', 'Joint Likelihood Role', 'Exclusion Power'],
          P7_TO_P13_COMBINED_BOUNDS_TABLE.map((cb) => [
            cb.protocolPairOrCluster,
            cb.constrainedParameters,
            cb.combinedJointLikelihoodRole,
            cb.orthogonalExclusionPower
          ])
        )
      );
      lines.push('');
      lines.push('#### Table 12.11 · Sensitivity Projection Table for P7–P13');
      lines.push(
        toMdTable(
          ['Protocol', '2026 Baseline', '2027–2032', '2035+ (3G)'],
          P7_TO_P13_SENSITIVITY_PROJECTION_TABLE.map((sp) => [
            sp.protocol,
            sp.currentBaseline2026,
            sp.nearTerm2027_2032,
            sp.longTerm3G2035Plus
          ])
        )
      );
      lines.push('');
      lines.push('#### Table 12.12 · Summary of Bounds Table for P13');
      lines.push(
        toMdTable(
          ['Dataset / Regime', 'Distance', 'Arrival Precision', 'η_fold Limit', 'Epistemic Status'],
          P13_SUMMARY_OF_BOUNDS_TABLE.map((sb) => [
            sb.datasetOrRegime,
            sb.baselineDistance,
            sb.arrivalBoundOrPrecision,
            sb.etaFoldLimit,
            sb.epistemicNote
          ])
        )
      );
      lines.push('');
      lines.push('#### Protocol Statistical Framework & Bayesian Occam Penalty');
      H12_PROTOCOL_ANALYSIS_SECTIONS.forEach((sec) => lines.push(`- **${sec.title}**: ${sec.content}`));
      lines.push('');
      lines.push('#### Falsification Checklist: What Would Prove H12 Wrong?');
      H12_FALSIFICATION_CHECKLIST.forEach((f) => lines.push(`- [Falsify] ${f}`));
      lines.push('');
      lines.push('#### Confirmation Checklist: What Would Confirm H12?');
      H12_CONFIRMATION_CHECKLIST.forEach((c) => lines.push(`- [Confirm] ${c}`));
      lines.push('');
      lines.push('#### Summary for Funding Agencies');
      lines.push(`> ${H12_FUNDING_AGENCY_SUMMARY}`);
      lines.push('');
    }
    if (ch.number === 13) {
      lines.push('#### Table 13.1 · Twelve Research Extrapolations');
      lines.push(
        toMdTable(
          ['# · Topic', 'Category', 'Extension', 'Key Obstacle / Falsifier'],
          TWELVE_EXTRAPOLATIONS.map((ex) => [`${ex.id}. ${ex.topic}`, ex.category, ex.extension, ex.keyObstacleOrFalsifier])
        )
      );
      lines.push('');
      lines.push('#### Table 13.2 · Seven Open Problems: How H12 Constrains the Solution Space (Category C)');
      lines.push(
        toMdTable(
          ['Open Problem', 'Governing Equations', 'Solution-Space Constraint & Category', 'Plain-Language Takeaway'],
          SEVEN_SOLVED_PHYSICS_PROBLEMS.map((sp) => [
            sp.openProblem,
            sp.governingH11H12Equations,
            `${sp.category}: ${sp.coreResolutionAndPrediction}`,
            sp.laymanTakeaway
          ])
        )
      );
      lines.push('');
      lines.push('#### Open Problems (OP-1 .. OP-6)');
      H12_OPEN_PROBLEMS_LIST.forEach((o) => lines.push(`- **${o.id}: ${o.problem}** — ${o.statusNote}`));
      lines.push('');
      lines.push('#### Response to Prior Methodological Audits');
      H12_PRIOR_AUDIT_RESPONSES.forEach((r) => lines.push(`- **${r.auditScope}**: ${r.panelCritique} -> ${r.harmonizedResolution}`));
      lines.push('');
    }
    const chIllustrations = [
      ...H12_THEORY_ILLUSTRATIONS_META.filter((ill) => ill.anchorChapter === ch.number),
      ...H12_SUPPLEMENTAL_PLATES_META.filter((ill) => ill.anchorChapter === ch.number)
    ];
    if (chIllustrations.length > 0) {
      lines.push(`#### Chapter ${ch.number} Scientific Theory & Dimension Illustrations`);
      chIllustrations.forEach((ill) => {
        lines.push(`- **${ill.illustrationNumber} [${ill.category}] — ${ill.title}:** ${ill.description} *(Asset: illustrations/${ill.bundleFilename})*`);
      });
      lines.push('');
    }
  });

  lines.push('## References');
  H12_REFERENCES.forEach((r) => lines.push(`${r.id}. ${r.citation}`));
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Consolidated Appendices (A–L)');
  H12_APPENDICES.forEach((app) => {
    lines.push(`### Appendix ${app.letter}: ${app.title} [${app.category}]`);
    lines.push(`*${app.summary}*`);
    lines.push('');
    app.equations.forEach((eq) => {
      lines.push(`> **${eq.label} [${eq.category}]** \`${eq.plainText}\``);
      lines.push(`> *${eq.caption}*`);
      lines.push('');
    });
    app.bodyParagraphs.forEach((p) => {
      lines.push(p);
      lines.push('');
    });
    if (app.letter === 'I') {
      lines.push('#### Table I.1 · Ten-Domain Structural Verification Audit');
      lines.push(
        toMdTable(
          ['Domain', 'Self-Contained', 'Applicable', 'Verdict'],
          H12_TEN_DOMAIN_AUDITS.map((d) => [
            `${d.domainNumber}: ${d.domainName}`,
            `${d.selfContainedPoints}/${d.maxPoints}`,
            `${d.applicablePoints}/${d.maxPoints}`,
            d.verdict
          ])
        )
      );
      lines.push('');
      lines.push('#### Table I.2 · Sixteen Stress-Test Evaluations');
      lines.push(
        toMdTable(
          ['ID', 'Challenge', 'Score', 'Resolution'],
          H12_SIXTEEN_REDTEAM_ATTACKS.map((a) => [
            a.id,
            a.attackTitle,
            `${a.pointsAwarded}/${a.maxPoints}`,
            a.h12ResolutionAndCitation
          ])
        )
      );
      lines.push('');
    }
    if (app.letter === 'J') {
      lines.push('#### Table J.1 · Devices A–K Master Technical & Programmatic Specifications');
      lines.push(
        toMdTable(
          [
            'Device',
            'Principle & Governing Eqs',
            'Predicted Signal & Floor',
            'Actually Tests vs. Non-Claim',
            'Device Readiness Level',
            'Cost Estimate',
            'Timeline',
            'Falsification Threshold',
            'Confirmation Threshold',
            'Systematics'
          ],
          H12_PROPOSED_DEVICES.map((d) => [
            `${d.deviceId}: ${d.name} [${d.category}]`,
            `${d.physicalPrinciple} (${d.governingEquations})`,
            `${d.predictedSignal} (Floor: ${d.noiseFloor})`,
            `Tests: ${d.whatItActuallyTests} | Non-claim: ${d.whatItDoesNotDo}`,
            d.deviceReadinessLevel,
            d.costEstimate,
            d.timeline,
            d.falsificationThreshold,
            d.confirmationThreshold,
            d.systematics
          ])
        )
      );
      lines.push('');
      APPENDIX_J_DEVICE_DOSSIERS.forEach((dos) => {
        const spec = H12_PROPOSED_DEVICES.find((s) => s.deviceId === dos.deviceId);
        lines.push(`#### ${dos.title} [${dos.category}]`);
        lines.push(`*${dos.tagline}* (${dos.figureNumber})`);
        lines.push('');
        dos.laymanParagraphs.forEach((p) => {
          lines.push(p);
          lines.push('');
        });
        dos.engineeringParagraphs.forEach((p) => {
          lines.push(p);
          lines.push('');
        });
        lines.push(dos.impactParagraph);
        lines.push('');
        if (spec) {
          lines.push(`- **Architecture & Operating Regime:** ${spec.architecture}; ${spec.operatingRegime}`);
          lines.push(`- **Feasibility & Failure Criterion:** ${spec.engineeringFeasibility}; ${spec.failureCriteria}`);
          lines.push(`- **Device Readiness Level (1–9):** ${spec.deviceReadinessLevel} | **Cost Estimate:** ${spec.costEstimate} | **Timeline:** ${spec.timeline}`);
          lines.push(`- **Falsification Threshold:** ${spec.falsificationThreshold} | **Confirmation Threshold:** ${spec.confirmationThreshold}`);
          lines.push(`- **Systematics:** ${spec.systematics}`);
          lines.push('');
        }
      });
      lines.push('#### Risk Assessment (Technical Risks Across Devices A–K)');
      lines.push(
        toMdTable(
          ['Device', 'Technical Risk', 'Severity', 'Mitigation'],
          APPENDIX_J_RISK_ASSESSMENT.map((r) => [r.deviceId, r.technicalRisk, r.severity, r.mitigation])
        )
      );
      lines.push('');
      lines.push('#### Resource Requirements (Personnel, Equipment & Funding Across Devices A–K)');
      lines.push(
        toMdTable(
          ['Device', 'Personnel', 'Equipment', 'Funding'],
          APPENDIX_J_RESOURCE_REQUIREMENTS.map((r) => [r.deviceId, r.personnel, r.equipment, r.funding])
        )
      );
      lines.push('');
      lines.push(`#### ${APPENDIX_J_SYNERGY.title}`);
      lines.push(APPENDIX_J_SYNERGY.overview);
      lines.push('');
      lines.push(
        toMdTable(
          ['Synergy Cluster', 'Devices Combined', 'Coupling Mechanism', 'Joint Likelihood / Validation Constraint'],
          APPENDIX_J_SYNERGY.clusters.map((c) => [c.cluster, c.devices, c.mechanism, c.jointConstraint])
        )
      );
      lines.push('');
      lines.push('#### Table J.2 · Cross-Device Sensitivity, Readiness & Discovery Horizon Matrix (Devices A–K)');
      lines.push(
        toMdTable(
          ['Device', 'Target Physics', 'Primary Observable', 'Readiness', 'Breakthrough vs. Non-Claim'],
          APPENDIX_J_SYNTHESIS_TABLE.map((row) => [
            row.device,
            row.targetPhysics,
            row.primaryObservable,
            row.readinessAndWindow,
            `${row.breakthroughIfDetected} | Non-claim: ${row.strictNonClaim}`
          ])
        )
      );
      lines.push('');
    }
    if (app.letter === 'K') {
      lines.push('#### Table K.1 · Seven Open Problems and How H12 Constrains Them (Category C)');
      lines.push(
        toMdTable(
          ['Open Problem', 'Governing H11/H12 Equations', 'Solution-Space Constraint & Category', 'Plain-Language Meaning'],
          SEVEN_SOLVED_PHYSICS_PROBLEMS.map((sp) => [
            sp.openProblem,
            sp.governingH11H12Equations,
            `${sp.category}: ${sp.coreResolutionAndPrediction}`,
            sp.laymanTakeaway
          ])
        )
      );
      lines.push('');
    }
    if (app.letter === 'L') {
      lines.push('#### Table L.1 · Eleven Speculative Portal Concepts');
      lines.push(
        toMdTable(
          ['Concept', 'Feasibility Tier', 'Physical Action', 'Category', 'Quantitative Obstacle / Limit'],
          ELEVEN_PORTAL_MECHANISMS.map((m) => [m.mechanism, m.tier, m.physicalAction, m.category, m.quantitativeObstacleOrLimit])
        )
      );
      lines.push('');
    }
  });
  return lines.join('\n');
}
