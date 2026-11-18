/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * IGRT-H12 Full 13-Chapter Research Monograph Dataset (Unicode/HTML Only):
 * "Folding Time Across Hidden Dimensions: Fifth-Dimensional Resonant Geometry,
 *  Quantum Portals, and the Limits of Spacetime Shortcuts"
 *
 * Structure after Comprehensive Epistemic & Structural Reorganization:
 * - Main Body: Chapters 1–13 (Ch. 9 Negative Results Summary; Ch. 10 What Is Unique to 5D?;
 *   Ch. 11 What Is Not Derived; Ch. 12 Protocols P7–P12; Ch. 13 Extrapolations, Open Problems & Prior Audits)
 * - Main Monograph Extended Appendices: Appendix L (Portal Mechanisms), Appendix M (Devices A–F),
 *   Appendix N (Adversarial Stress-Test Scorecard 500 Criteria + 16 Red-Team Attacks)
 * - Supplementary Volume II: Technical Appendices A–K (mathematical derivations & numerical suites)
 *
 * Strictly adheres to:
 * - Zero LaTeX syntax anywhere in UI/HTML strings
 * - Four-tier Epistemic Discipline (Category A / B / C / D) on every claim
 * - Exact benchmark alignment with scripts/verify-igrt-h12.mjs
 */

import {
  H12_META,
  H12_MASTER_EQUATIONS,
  H12_ABSTRACT_PARAGRAPHS,
  H12_NON_SPECIALIST_SUMMARY,
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
  WHAT_IS_NOT_DERIVED_LEDGER,
  H12_ALL_PROTOCOLS,
  P7_TO_P10_TIMELINE_TABLE,
  P7_TO_P10_FALSIFICATION_TABLE,
  P7_TO_P10_CONFIRMATION_TABLE,
  P7_TO_P10_DECISION_MATRIX,
  H11_VS_H12_PROTOCOLS_COMPARISON,
  H12_PROTOCOL_ANALYSIS_SECTIONS,
  H12_FALSIFICATION_CHECKLIST,
  H12_CONFIRMATION_CHECKLIST,
  H12_FUNDING_AGENCY_SUMMARY,
  ELEVEN_PORTAL_MECHANISMS,
  SIX_PROPOSED_DEVICES,
  TWELVE_EXTRAPOLATIONS,
  H12_DEFINITIONS_LIST,
  H12_THEOREMS_LIST,
  H12_OPEN_PROBLEMS_LIST,
  H12_PRIOR_AUDIT_RESPONSES,
  EPISTEMIC_BC_GREY_AREA_RUBRIC,
  H11_665_ASSERTIONS_CATALOG,
  REGULATOR_SENSITIVITY_TABLE,
  MODEL2B_CONVERGENCE_AND_MICROCAUSALITY_TABLE,
  P7_TO_P10_NOISE_BUDGET_TABLE,
  H12_APPENDICES,
  H12_REFERENCES,
  type H12EpistemicCategory,
  type H12Equation
} from './igrtH12Apparatus';
import {
  H12_TEN_DOMAIN_AUDITS,
  H12_SIXTEEN_REDTEAM_ATTACKS,
  H12_STRESS_TEST_SUMMARY
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
      'Establishes a Reader’s Guide, reconstructs all 12 core mathematical pillars of IGRT-2026-H11, codifies metric signature (−,+,+,+,+) and Category B/C grey-area rules, proves perturbation preservation of all 12 axioms, and states 17 binding epistemic safeguards verbatim.',
    subsections: [
      {
        number: '1.0',
        anchorId: 'h12-sec-1-0',
        title: 'Reader’s Guide, Metric Signature Convention & Category B/C Boundary Discipline',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'This follow-up monograph is intentionally organized to separate established negative proofs from conjectural five-dimensional possibilities and laboratory analog engineering. Readers seeking non-technical orientation should begin with the Summary for Non-Specialists at the close of the Abstract, Table 1.2 (4D vs. 5D Comparison), and the Glossary of 5D Terms at the end of Chapter 1. Readers auditing technical physics should examine Chapter 2 (5D action variation, regulators, and Eöt-Wash bounds), Chapter 4 (Beltrami geodesic proofs and Category B no-shortcut theorems), Chapters 5–6 (exact Hayward NEC satisfaction and Morris–Thorne Casimir deficit), Chapter 7 (2×2 SLD Fisher complementarity), and Chapter 9 (Negative Results Summary).',
          'Standardized Metric Signature & Grey-Area Discipline: Throughout IGRT-H12, four-dimensional spacetime M_4 carries strict mostly-plus Lorentzian signature (−, +, +, +), and its five-dimensional extension M_5 = M_4 × K_1 carries (−, +, +, +, +) where the fifth coordinate y is spacelike (+dy²); mixed or Euclidean (−,+,+,+,−) bulk signatures are excluded to prevent ghost instabilities and chart confusion. To resolve grey-area edge cases between Derived (Category B) and Conjectural (Category C), H12 enforces the Boundary Premise Rule audited in Table 1.3: any exact mathematical theorem proven unconditionally from Category A or H11 premises (such as negative obstruction theorems) receives Category B, whereas any variational calculation whose physical background metric or radion potential is postulated rather than derived from a ghost-free 5D action is quarantined strictly in Category C.'
        ]
      },
      {
        number: '1.1',
        anchorId: 'h12-sec-1-1',
        title: 'Audit & Reconstruction of IGRT-H11 Core Architecture (665 Assertions Preserved)',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'IGRT-2026-H11 formulates physical time inside strictly four-dimensional Lorentzian spacetime (M_4, g_μν) equipped with a principal projective-Hilbert fiber bundle π: P → M_4 whose fiber PU(ℋ) encodes unitarily inequivalent local quantum states. Along any timelike curve γ(λ), proper clock duration dτ is identified identically with the Symmetric Logarithmic Derivative (SLD) Quantum Fisher Information arc length scaled by the modular Hamiltonian spectral gap σ_1(K_ξ) and modular energy scale E_mod.',
          'All 12 foundational H11 components—verified deterministically by 665 programmatic assertions and 6 source-hygiene checks in scripts/verify-igrt-monograph.mjs—are audited in Table 1.1 and itemized across Groups A–F in Table 2.1. In Table 1.1, postulated 5D extensions (Rows 1, 4, 5, 8, 9, 10) carry Category C — Conjectural status wherever full 5D dynamical derivations are absent, whereas 5D Lorentzian microcausality (Row 12) follows directly from signature (−,+,+,+,+) as Category A.'
        ],
        equation: {
          label: '(1.1)',
          category: 'CATEGORY B — DERIVED',
          unicodeHtml:
            'κ<sub>ψ</sub> = ℏ<i>c</i> ℓ<sub>Pl</sub> / (12π) = 1.3554 × 10<sup>−62</sup> J·m<sup>2</sup> = 2.1727 × 10<sup>−21</sup> GeV<sup>−1</sup>, &nbsp;&nbsp; ξ<sub>0</sub> = 2<sup>−1/4</sup> ≈ 0.840896',
          plainText:
            'kappa_psi = hbar * c * l_Pl / (12 pi) = 2.1727e-21 GeV^-1, xi_0 = 2^(-1/4) = 0.840896',
          caption: 'Canonical H11 Araki modular-coupling constant and Hayward core regularity ratio preserved identically on the 4D brane.'
        }
      },
      {
        number: '1.2',
        anchorId: 'h12-sec-1-2',
        title: 'EFT Transition Thresholds, Perturbative Axiom Preservation Proof & SHA-256 Locking',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'H11 excludes extra spatial dimensions from its scope and carries a preregistration SHA-256 digest (57cf3f1cef74a45cd936663f1b017212e2f64b1bee05f55cdff9068a2b05048d) locked prior to 2026–2036 empirical runs P1–P6. To guarantee permanent immutability against software updates, scripts/verify-igrt-h12.mjs automatically reads src/types/harmonizedPaperApparatus.ts on every execution and asserts verbatim match with that 64-character hex digest. Formally, the operational boundary between H11 4D effective field theory and active 5D Kaluza–Klein propagation sits at Lorentz-invariant center-of-mass / transfer scale √|q²| = m_KK^(1) ≡ ℏc/R_5 ≥ 4.485 meV: below E ≪ m_KK^(1), bulk KK modes stay virtual; above m_KK^(1), real KK gravitons propagate until perturbative 5D gravity reaches UV cutoff M_5 (≥ 2.985 × 10⁸ GeV flat S¹ / 3.761 × 10⁸ GeV S¹/ℤ_2 / 1.8101 × 10¹⁸ GeV warped AdS_5).',
          'Non-Perturbative Resolvent & Perturbative Axiom Stability Proof: Beyond weak-coupling expansions, spectral decomposition of the positive self-adjoint bulk Laplacian on M_4 × K_1 under Dirichlet/Neumann orbifold boundary conditions separates the exact 5D Green resolvent into zero-mode plus Sturm–Liouville gapped KK spectrum (−□_5 + iε)⁻¹ = (−□_4 + iε)⁻¹ + ∑_{n ≥ 1} |ψ_n(0)|² (−□_4 + m_n² + iε)⁻¹. For any bounded H11 state space below energy E < m_KK^(1), the massive resolvent operator norm is bounded strictly by ‖(−□_4 + m_1²)⁻¹‖ ≤ (m_KK^(1)² − E²)⁻¹, guaranteeing Banach contraction convergence for coupled Einstein–Araki solutions and preserving all 12 H11 core axioms non-perturbatively. Evaluating δ_KK(1 neV) across non-perturbative FRG Litim cutoff (3.149 × 10⁻¹⁶), Heat-Kernel exponential (4.972 × 10⁻¹⁴), Pauli–Villars (4.972 × 10⁻¹⁴), MS-bar (9.645 × 10⁻¹⁵), and full KK ζ(2) summation (8.179 × 10⁻¹⁴) leaves all 665 H11 assertions strictly invariant (Table 2.2).'
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
        title: 'Seventeen Explicit Epistemic Boundaries & Foundational Non-Claims',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'To eliminate any ambiguity regarding 5D bulk observability—distinguishing invariant physical temporal folding from coordinate gauge choices—the following seventeen binding declarations govern every theorem, protocol, and appendix in IGRT-2026-H12:',
          ...H12_CHAPTER1_EXPLICIT_STATEMENTS.map((stmt, idx) => `(${idx + 1}) ${stmt}`)
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
      'Traces the historical timeline of 5D physics (1921–2026), constructs M_5 = M_4 × K_1, proves bundle orthogonality G_{Ai} = 0, executes the explicit variation of the 5D Einstein–Araki action, and derives Eöt-Wash Planck-scale bounds.',
    subsections: [
      {
        number: '2.1',
        anchorId: 'h12-sec-2-1',
        title: 'Four Physical Realizations of y & Bundle Orthogonality Proof (G_{Ai} = 0)',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'In lifting M_4 → M_5 with local coordinates X^A = (x⁰, x¹, x², x³, y), four mathematically distinct interpretations of the fifth coordinate y must be cleanly separated before writing field equations: (i) Flat compact Kaluza–Klein circle y ∈ S¹ of radius R_5; (ii) Warped S¹/ℤ_2 Randall–Sundrum bulk coordinate y ∈ [0, π R_5] with warp scale k; (iii) Dynamically accessible bulk embedding coordinate coupled to 5D Weyl projection E_μν; and (iv) Modular-state resonance parameter θ ∈ PU(ℋ)—which MUST NOT be confused with a spatial coordinate.',
          'Variational Derivation of P_5 & Bundle Orthogonality Proof (G_{Ai} = 0): Rather than postulating principal bundle P_5(M_5, PU(ℋ)) purely by analogy, consider the gauge-invariant 5D Einstein–Hilbert–Araki–Yang–Mills action S_{5,bundle} = ∫ d⁵X √(−G) [ (⁵R − 2Λ_5)/(16π G_5) − ¼ Tr(ℱ_{AB}^PU ℱ^{AB,PU}) + ℒ_ψ^(5) ], where Ehresmann gauge connection A_A^i(X) takes values in Lie algebra u(ℋ) on local section σ: U ⊂ M_5 → P_5. Requiring gauge invariance under local vertical PU(ℋ) transformations fixes unique torsionless Kaluza–Klein bundle metric dS_total² = G_AB(X) dX^A dX^B + α_QFI² g_ij^QFI(θ) Dθ^i Dθ^j with Dθ^i = dθ^i + A^i_A(X) dX^A; on pure brane/bulk backgrounds satisfying Gauss–Morse orthogonality A^i_y = 0, cross-terms vanish identically (G_{Ai} = 0 ⇒ ∂/∂y ⊥ PU(ℋ)). Importantly, while the mathematical bundle orthogonality is action-derived once M_5 is given, whether a physical spacetime fifth coordinate y exists in nature remains strictly Category C pending empirical detection under Protocols P7 and P10.'
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
          'Complete 5D Semiclassical Action, Quantum Backreaction & Gauss–Codazzi Projection: On the ℤ_2 orbifold bulk M_5 with brane boundary ∂M_5 = {y = 0}, the full semiclassical action S_total = ∫ d⁵X √(−G) [ (⁵R − 2Λ_5)/(16π G_5) + ℒ_ψ^(5) + ℒ_EM ] + (8π G_5)⁻¹ ∫_{∂M_5} d⁴x √(−g) [K] + Γ_1-loop[g, Φ_rad] − ∫_{y=0} d⁴x √(−g) σ_brane pairs the Gibbons–Hawking–York surface term S_GHY with 1-loop brane vacuum effective action Γ_1-loop. Varying δS_total cancels all normal derivatives δG_{AB,y} on y = 0 while retaining 1-loop quantum backreaction ⟨τ_{μν}^vac(y=0)⟩ = −(2/√−g) δΓ_1-loop/δg^{μν}. In Gaussian normal gauge (G_{yy} = Φ_rad², non-vanishing Christoffels Γ^y_{00} = α_t k e^{2α_t k|y|} Φ_rad⁻² c², Γ^y_{ij} = α_x k e^{−2α_x k|y|} Φ_rad⁻² g_{ij}^(3), Γ^0_{y0} = α_t k, Γ^i_{yj} = −α_x k δ^i_j), expanding ⁵R = ⁴R − K² + K_{μν}K^{μν} + 2 ∇_A(n^A K) and enforcing semiclassical Israel junction [K_{μν} − g_{μν} K]⁺_− = −8π G_5 (σ_brane g_{μν} + τ_{μν} + ⟨τ_{μν}^vac⟩) recovers exact Shiromizu–Maeda–Sasaki brane gravity.',
          'Exact Tensor Evaluation & Ghost-Free Einstein–Maxwell Toy Lagrangian for Model 2B (Category C): Evaluating metric Eq. (H12.0.1) with Φ_rad = 1 yields scalar curvature ⁵R = −(2 α_t² − 6 α_t α_x + 12 α_x²) k² and exact mixed diagonal Einstein components G^0_0 = 6 α_x² k², G^i_i = (α_t² − 2 α_t α_x + 3 α_x²) k², and G^y_y = 3(α_x² − α_t α_x) k². While isotropic RS warping (α_t = −1, α_x = +1) recovers pure vacuum AdS_5 (⁵G^A_B = 6 k² δ^A_B, ⁵R = −20 k²), asymmetric Model 2B warping (α_t + α_x > 0) produces G^0_0 ≠ G^i_i ≠ G^y_y. Crucially, asymmetric shortcuts admit an exact, strictly ghost-free, NEC-satisfying canonical 5D Einstein–Maxwell–Λ_5 realization: choosing ℒ_EM = −¼ F_{AB} F^{AB} with bulk electric field F_{0y} = E_0 e^{k|y|} obeying ∂_y(√−G F^{0y}) = 0 gives T^0_0 = −½ E_0², T^i_i = +½ E_0², T^y_y = −½ E_0²; setting α_t = 1, α_x = 0, Λ_5 = −½ k², and 8π G_5 E_0² = k² satisfies G^A_B + Λ_5 δ^A_B = 8π G_5 T^A_B identically (residual < 10⁻¹⁴ in verify-igrt-h12.mjs)! Because no macroscopic bulk Maxwell flux F_{0y} has been observed on our brane, asymmetric Model 2B remains strictly Category C.',
          'Dynamic Radion Planck Matching, Orbifold S¹/ℤ_2, ±2 μm Propagation & Thermal/Regulator Sweeps: Integrating dynamic radion fluctuations Φ_rad(x, y) = 1 + φ_rad(x) across mixed compact-warped geometry yields M̄_Pl²(φ_rad) = (M_5³/k) ∫_{−π R_5}^{π R_5} k e^{−2k|y|} Φ_rad(x,y) dy = (M_5³/k)(1 − e^{−2kπR_5})(1 + φ_rad) plus canonical 4D Brans–Dicke kinetic term −(3 M̄_Pl² / 2)(∂φ_rad)²/(1 + φ_rad). Using CODATA M̄_Pl = 2.4353 × 10¹⁸ GeV and Eöt-Wash R_5 = 44 ± 2 μm yields KK ladder m_KK^(1,2,3) = 4.485 / 8.969 / 13.454 meV (n=1 error +0.214/−0.195 meV), flat S¹ floor M_5(S¹) = 2.985 (±0.045) × 10⁸ GeV, S¹/ℤ_2 orbifold floor M_5(S¹/ℤ_2) = 2^{1/3} M_5(S¹) = 3.761 × 10⁸ GeV, and warped AdS_5 scale M_5 = 1.8101 × 10¹⁸ GeV (k = 10¹⁸ GeV, kπR_5 = 35). At 1 neV, non-perturbative Heat-Kernel (4.972 × 10⁻¹⁴) and FRG Litim (3.149 × 10⁻¹⁶) cutoffs confirm full stability, while thermal background sweeps show cryogenic 4 K (δ = 5.873 × 10⁻³) lies safely inside the 44 μm EFT whereas 77 K and 300 K exceed m_KK^(1) by factors 1.48 and 5.76 (Table 2.2).'
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
      'Contrasts seven orthogonal temporal notions against Connes–Rovelli, ADM, and Braunstein–Caves literature, defines component-wise ℱ_AB, proves invariance of η_fold under arbitrary 5D gauge maps, and verifies full Model 3 conversions.',
    subsections: [
      {
        number: '3.1',
        anchorId: 'h12-sec-3-1',
        title: 'Taxonomy of Seven Temporal Notions, Component-Wise ℱ_AB & Tomita–Takesaki Modular Link',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Discussions of "temporal folding" frequently collapse distinct mathematical quantities—confusing coordinate-chart reparametrizations of t with invariant proper-time intervals Δτ, Tomita–Takesaki modular flow s_mod, or Bures information distance s_QFI. Table 3.1 codifies seven mutually orthogonal temporal notions alongside their exact correspondences with ADM slicing, Borchers–Haag modular theory, Connes–Rovelli thermal time, and Braunstein–Caves statistical length.',
          'Tomita–Takesaki Eigenstates, KMS Analyticity & Full ADM-Shift Tensor ℱ_AB: Along causal diamond algebra 𝒜(𝒪) with modular operator Δ_ξ = e^{−K_ξ} generated by grand-canonical local Hamiltonian K_ξ = β(H_loc − μ N), unitary automorphism σ_s(A) = Δ_ξ^{is} A Δ_ξ^{−is} acts analytically across the KMS strip 0 < Im(s) < 1, imposing periodicity β = (k_B T)⁻¹ and thermal time t_th = −ℏ β s_mod. Expanding local clock states |θ(λ)⟩ in eigenvectors |n⟩ of K_ξ fixes clock rate dτ_5 / dλ = α_mod √(g_ij^QFI θ̇^i θ̇^j), where s_QFI has dimensionless units rad and α_mod ≡ ℏ / (E_mod σ_1(K_ξ)) has units s. Retaining general ADM shift vector N_μ(X) ≠ 0 in the 4+1 split G_{00} = −e^{2α_t k|y|} c² + N_μ N^μ, G_{0i} = N_i, G_{μy} = N_μ Φ_rad, Temporal Folding Tensor ℱ_AB ≡ e^{2α_t k|y|} G_AB − g_AB^(4) yields exact components ℱ_00 = e^{2α_t k|y|}(N_μ N^μ + c²(1 − e^{2α_t k|y|})), ℱ_0i = e^{2α_t k|y|} N_i, ℱ_ij = (e^{2(α_t−α_x)k|y|} − 1) g_ij^(3), ℱ_yy = e^{2α_t k|y|} Φ_rad², and off-diagonal frame-dragging bulk mixing ℱ_{μy} = e^{2α_t k|y|} N_μ Φ_rad.'
        ],
        equation: {
          label: '(3.1)',
          category: 'CATEGORY B — DERIVED',
          unicodeHtml:
            '<i>d</i>τ<sub>5</sub> = α<sub>mod</sub> <i>ds</i><sub>QFI</sub> [s], &nbsp; ℱ<sub>0<i>i</i></sub> = <i>e</i><sup>2α<sub><i>t</i></sub><i>k</i>|<i>y</i>|</sup> <i>N</i><sub><i>i</i></sub>, &nbsp; ℱ<sub>μ<i>y</i></sub> = <i>e</i><sup>2α<sub><i>t</i></sub><i>k</i>|<i>y</i>|</sup> <i>N</i><sub>μ</sub> Φ<sub>rad</sub>, &nbsp; ℱ<sub><i>ij</i></sub> = (<i>e</i><sup>2(α<sub><i>t</i></sub>−α<sub><i>x</i></sub>)<i>k</i>|<i>y</i>|</sup> − 1) <i>g</i><sub><i>ij</i></sub><sup>(3)</sup>',
          plainText:
            'd tau_5 = alpha_mod ds_QFI [s], F_0i = e^{2 alpha_t k |y|} N_i, F_{mu y} = e^{2 alpha_t k |y|} N_mu Phi_rad, F_ij = (e^{2(alpha_t-alpha_x)k|y|} - 1) g_{ij}^{(3)}',
          caption: 'Modular QFI proper-time law alongside general non-diagonal ADM-shift Temporal Folding Tensor F_{AB}.'
        }
      },
      {
        number: '3.2',
        anchorId: 'h12-sec-3-2',
        title: 'Formal Diffeomorphism Proof of Invariant Clock Folding & Reconnection Homotopy Criteria',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'Jacobian Proof & Reconnection Junction Criteria at {y = 0}: Consider any smooth diffeomorphism X^A → X̃^A(X) connecting charts on M_5 with Jacobian J^A_B = ∂X̃^A / ∂X^B. Under tensor pullback, G̃_CD = (J⁻¹)^A_C (J⁻¹)^B_D G_AB and Ẋ̃^C = J^C_A Ẋ^A, so the quadratic integrand transforms identically as G̃_CD Ẋ̃^C Ẋ̃^D = G_AB Ẋ^A Ẋ^B at every point λ, eliminating coordinate time shifts t → t\'(t, y) identically. Comparing clocks requires fixed topological homotopy classes γ_4, γ_5 sharing invariant departure and reconnection coincidence events A, B ∈ {y = 0} with finite exit/re-entry momentum transfer |δP_y| ≤ m_KK^(1) c⁻¹, ensuring unambiguous scalar comparison η_fold ≡ Δτ_5 / Δτ_4 without orbifold self-intersection ambiguities.',
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
        number: '4.1',
        anchorId: 'h12-sec-4-1',
        title: 'Negative Theorems: Multi-Baseline M_4 × S¹ & Generalized Conformal Horizon Theorem',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'Flat Compact M_4 × S¹ Multi-Baseline Proof (Category B — Derived): On flat ds_5² = −c² dt² + dx² + dy², null condition ds_5² = 0 fixes c dt = √(dx² + dy²). By the Euclidean triangle inequality, any smooth or bent null trajectory with net bulk winding/excursion Δy = 50 m between brane endpoints separated by Δx has L_5 = √(Δx² + Δy²) > Δx = L_4 strictly: at Δx = 1 m, L_5/L_4 = 50.01×; at Δx = 1,000 m, L_5/L_4 = 1.001249×; at Δx = 10,000 km (10⁷ m), L_5/L_4 = 1 + 1.25 × 10⁻¹¹ > 1; and across an astrophysical 1 Mpc baseline (3.0857 × 10²² m), L_5/L_4 = 1 + 1.31 × 10⁻⁴² > 1. Thus flat compactification NEVER produces arrival shortcuts across any laboratory or extragalactic distance.',
          'RS Poincaré Jacobian & Generalized Curved Horizon Theorem (Category B — Derived): On conformal Randall–Sundrum AdS_5, ds_5² = e^{−2k|y|}(−c² dt² + dx²) + dy², applying z(y) = k⁻¹ e^{k|y|} yields Jacobian dz/dy = sgn(y) e^{k|y|} = sgn(y) kz, whose invariance dz² = (kz)² dy² transforms the line element into ds_5² = (kz)⁻²(−c² dt² + dx² + dz²). Because dt² and dx² share equal conformal prefactor (kz)⁻², c_eff(y) = c identically everywhere; symmetric excursions with midpoint height Δz = 0.25/k give numerical delay Δt_5 / Δt_4 = 1.010321 > 1. More generally, on ANY 5D bulk of conformal type ds_5² = w²(y) g_μν^(4)(x) dx^μ dx^ν + dy² over an arbitrary curved 4D metric g_μν^(4), setting ds_5² = 0 yields −g_μν^(4) dx^μ dx^ν = w⁻²(y) dy² ≥ 0, proving every bulk path projected back to M_4 is causal (timelike or null) inside the 4D lightcone of g_μν^(4) and strictly satisfies Δt_5 ≥ Δt_4.'
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
            'Every piecewise-C² 5D null curve connecting events A and B on the y = 0 brane projects onto a causal (non-spacelike) trajectory in (M_4, g_μν^(4)) and satisfies Δt_5 ≥ Δt_4 identically. Bulk super-brane shortcuts are strictly forbidden unless either w_t(y) ≠ w_x(y) (asymmetric warping) or extrinsic brane embedding breaks Gauss–Codazzi flatness.'
        }
      },
      {
        number: '4.2',
        anchorId: 'h12-sec-4-2',
        title: 'Model 2B Asymmetrically Warped Beltrami Geodesics, Convergence & P11–P12 Link (Category C)',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'Variational Equations & Beltrami First Integral (Category C): Evaluating metric determinant and nonzero Ricci-flatness obstructions for asymmetric metric Eq. (H12.0.1) (G_00 = −e^{2α_t k|y|} c², G_11 = e^{−2α_x k|y|}, G_yy = 1, √−G = e^{(α_t − 3α_x)k|y|}) demonstrates that asymmetric shortcuts require either the exact ghost-free 5D Einstein–Maxwell bulk (α_t = 1, α_x = 0) derived in §2.2 or phenomenological anisotropic bulk stress-energy (α_x > 0). Along 5D null trajectories ds_5² = 0, c dt/dx = L(y, y\') = √(e^{−2βky} + e^{−2α_t ky}(y\')²) where β ≡ α_t + α_x. Because L is autonomous in x, Euler–Lagrange equation d/dx(∂L/∂y\') = ∂L/∂y integrates to Beltrami invariant H_Beltrami = L − y\'(∂L/∂y\') = e^{−2βky}/L = C_const = e^{−β k y_peak}.',
          'Exact Closed-Form Ghost-Free Einstein–Maxwell Theorem & Finite-Span Horizon Ceiling (k Δx < π): Setting the ghost-free Einstein–Maxwell parameters (α_t = 1.0, α_x = 0.0) reduces the Beltrami slope equation to y\'(y) = √(e^{2k(y_peak − y)} − 1), which integrates in closed form to k Δx / 2 = arccos(e^{−k y_peak}) < π/2. Consequently, the ghost-free EM bulk exhibits an exact finite-span horizon ceiling k Δx < π (3.141593): above k Δx ≥ π no symmetric turning arch exists without α_x > 0. Strictly inside 0 < k Δx < π, turning depth y_peak = −k⁻¹ ln cos(k Δx / 2) and folding ratio η_fold^EM = sin(k Δx / 2) / (k Δx / 2) are exact (at k Δx = 2: y_peak = 0.61563 / k, η_fold = sin(1) = 0.84147, c_eff/c = 1.1884×, verified against N_u = 800 vs 1,600 quadrature to 1.39 × 10⁻⁷, EL residual 1.64 × 10⁻⁹, ds_5² = 4.45 × 10⁻¹⁶; horizon limit lim_{kΔx→π⁻} η_fold^EM = 2/π = 0.63662).',
          'Unbounded-Span Phenomenological Model 2B Convergence (Table 4.2): Extending arches to unbounded spans k Δx ∈ {10, 50} requires α_x > 0 (such as phenomenological α_t = α_x = 0.5). Removing the turning-point singularity via y = y_peak(1 − u²), dy = −2 y_peak u du over u ∈ [0, 1] and bisecting across N_u = 800 vs 1,600 yields η_fold = 0.86634 (k Δx = 2: Δ = 6.55 × 10⁻⁸, EL = 1.93 × 10⁻⁹, ds_5² = 4.91 × 10⁻¹⁶), η_fold = 0.34279 (k Δx = 10: Δ = 2.18 × 10⁻⁷, EL = 4.40 × 10⁻¹⁰, ds_5² = 5.24 × 10⁻¹⁶), and η_fold = 0.07770 (k Δx = 50: Δ = 1.68 × 10⁻⁷, EL = 2.57 × 10⁻⁹, ds_5² = 6.11 × 10⁻¹⁶). Testing this Category C channel motivates Protocol P11 (currently hardware-infeasible) and Protocol P12 (bulk gauge birefringence |Δc/c| < 10⁻¹⁸).'
        ],
        equation: {
          label: '(4.1)',
          category: 'CATEGORY C — CONJECTURAL',
          unicodeHtml:
            '<i>H</i><sub>Beltrami</sub> = <i>e</i><sup>−2(α<sub><i>t</i></sub>+α<sub><i>x</i></sub>)<i>ky</i></sup> / <i>L</i> = <i>e</i><sup>−(α<sub><i>t</i></sub>+α<sub><i>x</i></sub>)<i>k</i><i>y</i><sub>peak</sub></sup> &nbsp;⇒&nbsp; η<sub>fold</sub><sup>EM</sup> = sin(<i>k</i>Δ<i>x</i>/2)/(<i>k</i>Δ<i>x</i>/2) (<i>k</i>Δ<i>x</i> &lt; π), &nbsp; η<sub>fold</sub><sup>2B</sup> ∈ {0.86634, 0.34279, 0.07770}',
          plainText: 'H_Beltrami = e^{-2(alpha_t+alpha_x)ky}/L = e^{-(alpha_t+alpha_x) k y_peak} => eta_fold^EM = sin(k dx/2)/(k dx/2) (k dx < pi), eta_fold^2B in {0.86634, 0.34279, 0.07770}',
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
        number: '5.1',
        anchorId: 'h12-sec-5-1',
        title: 'Explicit Proof That 4D H11 Hayward Black Holes Are NOT Portals',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'A persistent misconception conflates non-singular regular black holes (such as the H11 Hayward metric f(r) = 1 − 2GMr² / (r³ + 2GMℓ_0²) with derived UV ratio ξ_0 ≡ ℓ_0 / ℓ_Pl = 2⁻¹/⁴ ≈ 0.840896, denoted σ_0 in pre-harmonized drafts) with traversable wormholes. Exact Einstein-tensor evaluation proves this mathematically false — establishing unconditionally that 4D Hayward regular black holes are NOT traversable portals.',
          'Explicit NEC Derivation & Core Arithmetic: For static metric ds² = −f(r) c² dt² + f(r)⁻¹ dr² + r² dΩ², exact Christoffel contraction gives G^t_t = (r f\' + f − 1)/r² and G^r_r = (r f\' + f − 1)/r², forcing p_r = −ρ c² ⇒ ρ c² + p_r = 0 identically everywhere for any f(r) (zero radial flare-out). Differentiating f(r) = 1 − r_s r²/(r³ + a³) with a³ ≡ r_s ℓ_0² gives f\'(r) = r_s r(r³ − 2a³)/(r³ + a³)² and exact closed-form angular Einstein component G^θ_θ = (r f\'\' + 2f\')/(2r) = 3 r_s a³ (2 r³ − a³)/(r³ + a³)³, yielding transverse null sum 8πG(ρ + p_⊥)/c² = G^θ_θ − G^t_t = 9 r_s a³ r³ / (r³ + a³)³ > 0 strictly for every r > 0. For a M = 30 M_⊙ solar-mass remnant (r_s = 8.8599 × 10⁴ m, ℓ_0 = 1.3591 × 10⁻³⁵ m), r_core = (r_s ℓ_0²)^{1/3} = 2.5389 × 10⁻²² m; verify-igrt-h12.mjs confirms G^r_r − G^t_t = 0, exact G^θ_θ formula, and positive transverse NEC across r ∈ [0.25 r_core, 5.0 r_core] within < 10⁻⁴ finite-difference error, leaving the WKB tortoise barrier reflection amplitude K_echo = 0.184 cleanly tied to exterior ringdown echoes without interior wormhole transit.'
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
          'Lifting a Hayward core onto a 5D brane via Shiromizu–Maeda–Sasaki projection E_{μν} = ⁵C^y_{μyν} adds a Category C bulk Weyl tidal-charge term q_tidal into f_5D(r) = 1 − (2GMr² + q_tidal R_AdS r)/(r³ + 2GMℓ_0²) with effective Weyl density ρ_Weyl = q_tidal R_AdS / (8π G r⁴). Note carefully: the Gregory–Laflamme stability threshold r_+/R_AdS = 0.876 is an established instability criterion for linearized 5D vacuum Schwarzschild–AdS black strings (Gregory & Laflamme 1993); applying it to coupled Hayward–Araki strings with nonzero q_tidal stays Category C because full 5D non-linear string-pinching PDEs remain unsolved.',
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
        number: '6.1',
        anchorId: 'h12-sec-6-1',
        title: 'Orthonormal Tetrad Derivation & Complete 10-Point Morris–Thorne Theorem',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'Working in the static orthonormal frame e^t̂ = c dt, e^r̂ = (1 − b(r)/r)⁻¹/² dr, e^θ̂ = r dθ, e^φ̂ = r sinθ dφ for zero-tidal-force metric with Ellis–Bronnikov shape b(r) = r_0² / r, Einstein equations yield (8πG/c⁴)(ρ c²) = b\'/r² = −r_0²/r⁴, (8πG/c⁴) p_r = −b/r³ = −r_0²/r⁴, and (8πG/c⁴) p_⊥ = ½(b/r³ − b\'/r²) = +r_0²/r⁴. Summing radial stress gives strict NEC violation everywhere: ρ c² + p_r = (c⁴/8πG)(r b\' − b)/r³ = −(c⁴/4πG)(r_0²/r⁴) < 0.',
          'Executing all 10 Morris–Thorne conditions (linked directly to the throat embedding in Figure H12-6): (1) Horizonless zero redshift (Φ = 0); (2) Minimal-radius flare-out b(r_0) = r_0, b\'(r_0) = −1 < 1; (3) Smooth proper radial coordinate l(r) = ±√(r² − r_0²); (4) Throat NEC deficit (ρc² + p_r)|_{r_0} = −c⁴/(4πG r_0²); (5) Radial tension τ(r) = −p_r = ρc²; (6) Exact spatial exotic-energy integral via trigonometric substitution r = r_0 sec(u), √(1 − r_0²/r²) = sin(u), dr = r_0 (sin u / cos²u) du: substituting (ρc² + p_r) = −(c⁴/4πG) cos⁴(u)/r_0², proper spherical shell factor 4π r² / √(1 − b/r) = 4π r_0² / (cos²u sin u), and dr multiplies to integrand (−c⁴ r_0 / G) du identically across u ∈ [0, π/2], integrating cleanly to E_exotic(r_0) = −(π/2)(c⁴/G) r_0 (verified to < 10⁻⁴ by 1,000-step trapezoidal quadrature in verify-igrt-h12.mjs). Conditions (7)–(10) fix stiffness ∂p_r/∂ρ > 1, zero radial tide, transverse traveler tide Δa_⊥ = γ² v² Δξ / (2 r_0²), and traversal duration τ_trav = 20 r_0 / (γ v).'
        ],
        equation: {
          label: '(6.1)',
          category: 'CATEGORY B — DERIVED',
          unicodeHtml:
            '<i>E</i><sub>exotic</sub>(<i>r</i><sub>0</sub>) = −(π/2) (<i>c</i><sup>4</sup> / <i>G</i>) <i>r</i><sub>0</sub>, &nbsp;&nbsp; Δ<i>a</i><sub>⊥</sub> = γ<sup>2</sup> <i>v</i><sup>2</sup> Δξ / (2 <i>r</i><sub>0</sub><sup>2</sup>)',
          plainText: 'E_exotic = -(pi/2)(c^4/G) r_0, Delta a_perp = gamma^2 v^2 Delta xi / (2 r_0^2)',
          caption: 'Exact Morris–Thorne exotic negative-energy budget and transverse traveler tidal stress.'
        }
      },
      {
        number: '6.2',
        anchorId: 'h12-sec-6-2',
        title: 'Casimir–Quantum Inequality Deficit Across 35 Orders of Magnitude',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'Note explicitly: The Casimir deficit bound below is a correct quantitative application of the established Morris–Thorne Null Energy Condition integral, not a novel mechanism. Evaluating solveMorrisThorneWormhole in verify-igrt-h12.mjs exposes the insurmountable physical barrier at human scales: at r_0 = 1 m, throat NEC demands −9.6309 × 10⁴² J/m³ and integrated exotic mass −1.0637 × 10⁻³ M_⊙ (−1.9011 × 10⁴⁴ J), while transverse tidal acceleration on a 2 m traveler at 0.1c reaches a fatal 9.0783 × 10¹⁴ m/s² (traversal 663.784 ns). At r_0 = 3 km, exotic mass escalates to −3.1912 M_⊙ (tide 1.0087 × 10⁸ m/s², traversal 1.9914 ms).',
          'Casimir Zeta-Regularized Mode Sum & 10⁷¹ Deficit: Summing transverse electromagnetic zero-point frequencies ω_n(k_⊥) = c √(k_⊥² + (nπ/d)²) between conducting plates separated by d yields bare mode sum E_0/A = ∑_{n=1}^∞ ∫ d²k_⊥/(2π)² (½ ℏ ω_n) whose Riemann zeta analytic continuation ζ(−3) = 1/120 yields finite energy density ρ_Casimir(d) = −π² ℏ c / (720 d⁴) < 0. Comparing directly against Morris–Thorne throat NEC gives |ρ_Casimir / NEC| = (π³ G ℏ) / (180 c³ r_0²) = 4.50 × 10⁻⁷¹ at r_0 = 1 m and 4.50 × 10⁻⁵⁹ at r_0 = 1 μm. Only at the H11 quantum-gravity core length r_0 = ℓ_0 = 1.3591 × 10⁻³⁵ m does Casimir density reach O(1) parity (ratio 0.2436, exotic mass −2.8748 × 10⁻⁸ kg)—proving macroscopic traversable portals are blocked by > 70 orders of magnitude in energy density.'
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
            plainText: '|rho_Casimir / (rho c^2 + p_r)| = 4.50e-71 (1 m), 0.2436 (l_0)',
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
        number: '7.1',
        anchorId: 'h12-sec-7-1',
        title: 'Explicit 2×2 SLD Operator Matrix Derivation & Complementarity Identity',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'Consider a coherent particle passing two slits coupled to a which-path detector: |Ψ(φ)⟩ = 2⁻¹/² (|1⟩|d_1⟩ + e^{iφ}|2⟩|d_2⟩) with detector overlap γ_coh = ⟨d_1 | d_2⟩ ∈ [0, 1]. Tracing out detector states |d_k⟩ produces reduced 2×2 path density matrix ρ(φ) = ½ [[1, γ_coh e^{−iφ}], [γ_coh e^{iφ}, 1]] inside projective Hilbert fiber PU(ℋ), with derivative ∂_φ ρ = ½ [[0, −i γ_coh e^{−iφ}], [i γ_coh e^{iφ}, 0]] and eigenvalues λ_± = ½(1 ± γ_coh) corresponding to orthonormal eigenstates |λ_±(φ)⟩ = 2⁻¹/² (|1⟩ ± e^{iφ}|2⟩).',
          'Step-by-Step Eigenbasis Matrix Derivation & Residual Verification: Evaluating transition matrix elements ⟨λ_±|∂_φ ρ|λ_±⟩ = 0 (diagonal) and ⟨λ_+|∂_φ ρ|λ_−⟩ = −⟨λ_−|∂_φ ρ|λ_+⟩ = ½ i γ_coh, dividing by λ_+ + λ_− = 1 gives SLD eigenbasis matrix elements (L_φ)_{+−} = 2(½ i γ_coh)/1 = i γ_coh and (L_φ)_{−+} = −i γ_coh. Transforming back to path basis {|1⟩, |2⟩} yields exact Hermitian matrix L_φ = [[0, −i γ_coh e^{−iφ}], [i γ_coh e^{iφ}, 0]]. Direct multiplication verifies ½(L_φ ρ + ρ L_φ) = ∂_φ ρ identically (Frobenius residual 0.000 × 10⁰ across all γ_coh ∈ [0, 1] in verify-igrt-h12.mjs). Taking Tr(ρ L_φ²) yields SLD Quantum Fisher Information F_Q(φ) = γ_coh². Since screen intensity obeys P(φ) = ½(1 + γ_coh cos φ) ⇒ V = γ_coh and Helstrom minimum-error path distinguishability equals D_QFI = √(1 − γ_coh²), V² + D_QFI² = 1 and F_Q = V² hold unconditionally inside PU(ℋ).'
        ],
        equation: {
          label: '(7.1)',
          category: 'CATEGORY B — DERIVED',
          unicodeHtml:
            '<i>L</i><sub>φ</sub> = [[0, −<i>i</i>γ<sub>coh</sub><i>e</i><sup>−<i>i</i>φ</sup>], [<i>i</i>γ<sub>coh</sub><i>e</i><sup><i>i</i>φ</sup>, 0]], &nbsp; <i>F</i><sub><i>Q</i></sub> = Tr(ρ <i>L</i><sub>φ</sub><sup>2</sup>) = γ<sub>coh</sub><sup>2</sup> = <i>V</i><sup>2</sup> &nbsp;⇒&nbsp; <i>V</i><sup>2</sup> + <i>D</i><sub>QFI</sub><sup>2</sup> = 1',
          plainText: 'L_phi = [[0, -i gamma_coh e^{-i phi}], [i gamma_coh e^{i phi}, 0]], F_Q = gamma_coh^2 = V^2 => V^2 + D_QFI^2 = 1',
          caption: 'Exact 2×2 SLD operator matrix and Fisher–Englert duality identity inside the projective Hilbert fiber PU(ℋ).'
        }
      },
      {
        number: '7.2',
        anchorId: 'h12-sec-7-2',
        title: 'Epistemic Safeguards: Born Rule Status & Independence from 5D',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Two binding safeguards isolate Chapter 7 from five-dimensional overclaiming. First, The Born rule is Category A (postulate), not derived from 5D; probability extraction P(x) = Tr(ρ Π_x) = |ψ_1(x) + ψ_2(x)|² is an established quantum axiom imported identically from 4D quantum mechanics.',
          'Second, The double-slit complementarity identity is independent of the 5D extension; it is a property of the Fisher–Rao metric on the fiber PU(ℋ), orthogonal to spatial 5D displacement (PU(ℋ) ⊥ ∂/∂y, Eq. 2.1). Particles do NOT travel through a spatial fifth dimension y between slits. Protocol P9 solely bounds whether speculative fiber–bulk coupling causes anomalous decoherence |δV_5D| < 10⁻⁶.'
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
        number: '8.1',
        anchorId: 'h12-sec-8-1',
        title: 'Haag–Kastler Axioms, Buchholz–Wichmann Nuclearity & No-Communication Preservation',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Let net 𝒪 ↦ 𝒜(𝒪) assign von Neumann observable algebras to open bounded diamonds 𝒪 ⊂ M_5 satisfying all four Haag–Kastler axioms on globally hyperbolic 5D spacetime (signature −,+,+,+,+): (i) Isotony (𝒪_1 ⊂ 𝒪_2 ⇒ 𝒜(𝒪_1) ⊂ 𝒜(𝒪_2)); (ii) Microcausality ([O_A, O_B] = 0 for all 5D-spacelike 𝒪_A, 𝒪_B); (iii) Isometric Poincaré/diffeomorphism covariance; and (iv) Primitive causality (𝒜(𝒪) = 𝒜(D(𝒪)) on domain of dependence). Preserving H11’s Buchholz–Wichmann (1986) nuclearity condition Tr(e^{−β H}) < ∞ enforces the split property 𝒜(𝒪_A ∪ 𝒪_B) ≅ 𝒜(𝒪_A) ⊗̄ 𝒜(𝒪_B) across buffered spacelike wedges.',
          'Marginal Unitary Invariance Proof & Gao–Jafferis–Wall Boundary Rule: Applying any local unitary U_B ∈ 𝒜(𝒪_B) at Bob’s location transforms global state ρ_AB → ρ_AB\' = (I ⊗ U_B) ρ_AB (I ⊗ U_B†). Computing Alice’s expectation value ⟨O_A⟩\' = Tr[(O_A ⊗ I) (I ⊗ U_B) ρ_AB (I ⊗ U_B†)] and invoking cyclic invariance of the partial trace Tr_B[(I ⊗ U_B† U_B)(O_A ⊗ I) ρ_AB] = Tr_B[(O_A ⊗ I) ρ_AB] proves ρ_A\' = Tr_B(ρ_AB\') = ρ_A identically. The no-communication theorem is preserved by 5D microcausality, but this is not a new result. Even in holographic Gao–Jafferis–Wall double-trace protocols (e^{i g O_L O_R}) in AdS_5/CFT_4, quantum teleportation across the bulk bridge strictly requires sending classical information along the conformal boundary at speed v ≤ c — distinguishing information-assisted teleportation from macroscopic traversable wormhole transit.'
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
          'In asymptotically AdS_5/CFT_4 holography, Ryu–Takayanagi extremal bulk surfaces γ_A equate boundary entanglement entropy S(ρ_A) = Area(γ_A)/(4 G_5) to bulk geometric connectivity, and Araki modular density ψ²(x) motivates a Category C geometric bridge analogy. However, the "portal" is a mathematical connection, not a traversable wormhole: non-traversable Einstein–Rosen throats collapse inside horizons unless aided by boundary classical communication or negative-energy shocks, and whether 5D Δσ⁻⁵ vacuum backreaction ⟨T_AB⟩_ren enforces Hawking chronology protection in general FRW/brane bulks remains an open Category C conjecture.',
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
        number: '9.1',
        anchorId: 'h12-sec-9-1',
        title: 'Why the Negative Theorems Constitute the Strongest Core of H12',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'The negative theorems are the strongest part of H12. Rather than chasing speculative science-fiction claims, Chapters 4–8 deploy exact variational calculus, Poincaré coordinate conformal invariants, Einstein-tensor algebraic identities, and quantum-inequality bounds to rule out five widely repeated higher-dimensional myths with zero ambiguity.',
          'Specifically: (1) Flat M_4 × S¹ strictly delays bulk paths (L_5/L_4 = 1.001249 > 1); (2) Conformally flat Randall–Sundrum AdS_5 fixes c_eff(y) = c everywhere (Horizon Theorem excursion 1.010321); (3) 4D H11 Hayward regular black holes obey ρ + p_r = 0 and ρ + p_⊥ > 0 at r_core = 2.5389 × 10⁻²² m (NOT portals); (4) Zero-tidal Morris–Thorne wormholes require −1.0637 × 10⁻³ M_⊙ at 1 m (−3.1912 M_⊙ at 3 km), outstripping physical Casimir vacuum energy by 10⁷¹ at 1 m and achieving 0.2436 parity only at Planck length ℓ_0; (5) AQFT microcausality [O_A, O_B] = 0 enforces zero FTL signaling across ER=EPR bridges; and (6) Double-slit complementarity V² + D_QFI² = 1 lives strictly inside internal fiber PU(ℋ) ⊥ ∂/∂y.'
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
        number: '10.1',
        anchorId: 'h12-sec-10-1',
        title: 'Isolating Genuinely Five-Dimensional Signatures from 4D H11 Physics',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'A vital epistemic discipline of H12 is asking which phenomena genuinely require five spacetime dimensions versus which phenomena are already complete inside 4D IGRT-H11. As cataloged in Table 10.1, double-slit QFI complementarity (V² + D_QFI² = 1), quantum no-signaling, Araki coupling κ_ψ = 2.1727 × 10⁻²¹ GeV⁻¹, Hayward core regularity (ξ_0 = 2⁻¹/⁴, K_echo = 0.184), and the Hubble closure H_0 = 70.77 ± 0.72 km s⁻¹ Mpc⁻¹ require ZERO fifth dimension and reproduce identically to 4.972 × 10⁻¹⁴ at 1 neV.',
          'Only three empirical channels are genuinely unique to a 5D bulk hypothesis: (i) exponential short-range Yukawa KK gravity α_KK e^{−d/R_5} below 44 μm (Protocol P7, distinct from H11 Chameleon power laws in P5); (ii) 3G gravitational-wave scalar/KK polarization leakage |h_scalar/h_tensor| ≤ 10⁻³ or luminosity-distance dimming d_L^GW ≠ d_L^EM (Protocol P10); and (iii) Model 2B asymmetric bulk arrival shortcuts / gauge birefringence (Protocols P11–P12, Category C).'
        ]
      },
      {
        number: '10.2',
        anchorId: 'h12-sec-10-2',
        title: 'Multi-Probe Observational Consistency Audit (Eöt-Wash, BBN, GW170817, Cassini, LHC, DE & CMB)',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'Every higher-dimensional theory must survive existing precision experiments across 40 orders of magnitude in energy. Table 10.2 audits H12 against six observational pillars, explicitly distinguishing derived from assumed compatibility:',
          'Eöt-Wash (44 μm ⇒ m_KK^(1) ≥ 4.485 meV, M_5 ≥ 2.985 × 10⁸ GeV flat / 1.8101 × 10¹⁸ GeV warped) and CMB thermal decoupling (T_CMB = 0.235 meV ≪ 4.485 meV) are directly derived. By contrast, BBN relativistic species (ΔN_eff < 0.28), GW170817 gravitational wave speed (|c_GW/c − 1| ≤ 10⁻¹⁵), Cassini Shapiro PPN constraint (|γ_PPN − 1| < 2.3 × 10⁻⁵ via assumed Goldberger–Wise / Vainshtein radion mass), LHC monojet exclusions, and late-time Dark Energy dominance (w_0 = −0.831, w_a = −0.542 with bulk Weyl projection < 1%) rely on explicit low-energy localization and stabilization assumptions detailed in Chapter 11.'
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
        number: '11.1',
        anchorId: 'h12-sec-11-1',
        title: 'Exhaustive Ledger of Category C/D Assumptions & Unproven Lifts',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'Transparent science demands stating plainly what a paper does NOT derive. Table 11.1 lists every non-derived claim across IGRT-2026-H12 together with the exact mathematical or physical reason it remains outside the derived Category B core.',
          'In particular: (1) Neither the existence of a physical 5th coordinate y nor the phenomenological ansatz Eq. (H12.0.1) is derived; asymmetric α_t + α_x > 0 requires unconstructed anisotropic bulk matter; (2) Eq. (H12.0.2) defines η_fold ≡ Δτ_5 / Δτ_4 as a ratio on the assumed 5D lift; (3) Bundle lift P_5, 5D radion Vainshtein screening, Goldberger–Wise stabilization, 5D BFV–BRST constraint closure, and UV completion above M_5 (10⁸–10¹⁸ GeV) are postulated rather than solved; (4) Hayward black-string Gregory–Laflamme instability (r_+/R_AdS = 0.876) is imported from vacuum AdS_5 literature; (5) 5D orbifold ekpyrotic bounce embedding, BBN dark-radiation quenching, and chronology protection Δσ⁻⁵ backreaction remain conjectural; (6) The Born rule P = |ψ|² is explicitly Category A (postulate); and (7) Devices C & F and Protocols P11–P12 are optical analogs or currently unachievable conceptual designs.'
        ]
      }
    ]
  },
  {
    number: 12,
    anchorId: 'h12-chapter-12',
    runningLabel: 'Chapter 12 · Empirical Protocols P7–P12',
    title: 'Experimental Protocols and Falsification',
    leadSummary:
      'Distinguishes 4D H11 tests (P1–P6) from 5D bulk/KK probes (P7–P10) and newly formalized folding/birefringence tests (P11–P12), and supplies timeline, falsification, confirmation, decision-matrix, systematics, Bayesian Occam, checklist, and funding-impact modules.',
    subsections: [
      {
        number: '12.1',
        anchorId: 'h12-sec-12-1',
        title: 'Scope Distinction: H11 (P1–P6), Bulk Probes (P7–P10) & Folding Probes (P11–P12)',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'The H11 protocols P1–P6 test 4D physics only; they do not confirm 5D. Even a decisive 5σ detection across P1 (2:1 ULDM dual-clock lock), P2 (1.028 μm silica DP collapse), P3 (LiteBIRD B-modes), P4 (K_echo = 0.184 echoes), P5 (CANNEX Chameleon), or P6 (HL-LHC Φ_portal) verifies four-dimensional IGRT-H11 without establishing an extra spacetime dimension.',
          'Crucially, the H12 protocols P7–P10 test the 5D bulk hypothesis, not the folding mechanism specifically: P7 searches for exponential short-range Yukawa deviations down to R_5 = 10 μm (m_KK = 19.733 meV); P8 bounds fractional optical/nuclear clock KK/QFI drift |δν/ν| ≤ 10⁻¹⁹; P9 tests 5D decoherence in double-slit interferometry below |δV_5D| < 10⁻⁶; and P10 probes 3G gravitational-wave scalar/KK bulk leakage |h_scalar/h_tensor| ≤ 10⁻³ at ET/CE. To close the empirical gap cleanly, Table 12.1 also defines Protocol P11 (Direct Bulk Temporal Folding Trajectory Test targeting η_fold < 1 — explicitly flagged as NOT achievable with today’s technology) and Protocol P12 (Asymmetric Bulk Gauge-Field Birefringence Search testing α_t + α_x > 0).'
        ]
      },
      {
        number: '12.2',
        anchorId: 'h12-sec-12-2',
        title: 'Systematics, Statistical Thresholds, Multi-Messenger Joint Likelihood, Null Baseline & Bayesian Evidence',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          ...H12_PROTOCOL_ANALYSIS_SECTIONS.map((s) => `${s.title}: ${s.content}`)
        ],
        equation: {
          label: '(12.1)',
          category: 'CATEGORY B — DERIVED',
          unicodeHtml:
            'ln ℒ<sub>joint</sub> = ∑<sub><i>k</i>∈{7,8,9,10}</sub> ln ℒ<sub>P<i>k</i></sub>(Θ<sub>5D</sub>), &nbsp;&nbsp; Δ ln <i>B</i><sub>12/11</sub> = ½ Δχ<sup>2</sup> + Δ ln 𝒪 = +6.90 (at 5σ, Δ ln 𝒪 = −5.60)',
          plainText: 'ln L_joint = sum_{k=7..10} ln L_Pk(Theta_5D), Delta ln B_{12/11} = 1/2 Delta chi^2 + Delta ln O = +6.90 (at 5 sigma, Delta ln O = -5.60)',
          caption: 'Multi-messenger joint log-likelihood and Jeffreys-scale Bayes factor incorporating the 4-parameter Occam penalty.'
        }
      }
    ]
  },
  {
    number: 13,
    anchorId: 'h12-chapter-13',
    runningLabel: 'Chapter 13 · Extrapolations, Open Problems & Final Synthesis',
    title: 'Mind-Blowing Extrapolations, Frontiers, and Final Synthesis',
    leadSummary:
      'Explores all twelve disciplined extrapolations beyond baseline H12, issues the final Category A–D verdict, catalogs Open Problems OP-1 to OP-6, and responds candidly to all four critiques from the Prior Adversarial Audits.',
    subsections: [
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
          'Extrapolation 9 (Holographic Complexity = Bulk Volume / Action Duality) compares QFI geodesic arc s_QFI on PU(ℋ) with AdS_5 CV/CA complexity.'
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
        title: 'Unified Scientific Verdict, Open Problems & Response to Prior Audits',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'Unified Verdict: IGRT-2026-H12 extends IGRT-2026-H11 to five dimensions without altering a single 4D prediction (4.972 × 10⁻¹⁴ low-energy shift at 1 neV; 665/665 H11 assertions intact). Its strongest pillars are closed Category A/B negative proofs: zero shortcuts in flat S¹ (1.001249) and conformal RS AdS_5 (1.010321), exact Hayward NEC satisfaction proving regular black holes are not portals, a 10⁷¹ macroscopic Casimir wormhole deficit at 1 m, and strict 5D AQFT no-signaling.',
          'Positive Beltrami shortcuts—both the exact finite-span ghost-free Einstein–Maxwell branch (η_fold = 0.84147 at k Δx = 2 < π, limit 2/π = 0.63662) and phenomenological unbounded Model 2B (η_fold down to 0.07770)—remain explicitly quarantined as Category C mathematical possibilities contingent on unverified asymmetric bulk matter, awaiting future experimental discrimination across Protocols P7–P12. All open theoretical challenges (OP-1 to OP-6) and point-by-point resolutions to both the 200-expert and 40-expert panel audits are audited at the close of this chapter, followed by Appendices L, M, and N.'
        ]
      }
    ]
  }
];

export interface H12ExtendedAppendix {
  letter: 'L' | 'M' | 'N';
  anchorId: string;
  title: string;
  category: H12EpistemicCategory;
  leadSummary: string;
  paragraphs: string[];
}

export const H12_MAIN_APPENDICES_LMN: H12ExtendedAppendix[] = [
  {
    letter: 'L',
    anchorId: 'h12-app-l',
    title: 'Portal Formation Mechanisms and Theoretical Engineering (Moved from Ch. 9)',
    category: 'CATEGORY D — SPECULATIVE ENGINEERING',
    leadSummary:
      'Relocated from the core narrative so speculative engineering never obscures negative proofs; evaluates 11 candidate mechanisms across five quantitative feasibility tiers.',
    paragraphs: [
      'Table L.1 systematically classifies eleven frequently proposed mechanisms—ranging from classical gravitational focusing and intense electromagnetic fields to Casimir cavities, squeezed quantum states, superconductors, colliders, entanglement, optical cavities, modular clocks, and 5D KK excitations.',
      'Three mechanisms belong to Tier 1 (Zero Portal: classical gravity focuses via Raychaudhuri; Maxwell EM satisfies NEC even at Schwinger limit 1.32 × 10¹⁸ V/m). Four belong to Tier 2 (Benchtop Metric Analogs: optical cavities, GRIN slabs, superconducting circuits, and optical-lattice clocks probe effective metrics cleanly without curving G_μν). Mechanisms 3 and 5 sit in Tier 3 (marginal perturbative effects constrained by Ford–Roman quantum inequalities or terrestrial Vainshtein Z_ψ = 7.05 × 10¹⁴). Casimir engineering (Mechanism 4) and HL-LHC collisions (Mechanism 7) are Planck/micro-scale only (Tier 4), while direct macro KK beaming (Mechanism 11) sits in Tier 5 (~10⁻⁶⁰ suppression).'
    ]
  },
  {
    letter: 'M',
    anchorId: 'h12-app-m',
    title: 'Proposed Devices and Laboratory Analog Systems A–F (Moved from Ch. 10)',
    category: 'CATEGORY B — DERIVED',
    leadSummary:
      'Ten-field engineering, sensitivity, non-claim, and falsification specifications for laboratory sensors (Devices A, B, D) and analog simulators (Devices C, E, F).',
    paragraphs: [
      'Table M.1 specifies six concrete experimental and analog systems using a mandatory 10-field protocol: physical principle, governing equations, architecture, operating regime, predicted signal, noise floor, feasibility tier, what it actually tests, what it explicitly does NOT do, and strict failure criteria.',
      'Near-term precision hardware includes Device A (Sr-87/Yb-171 optical lattice QFI clock, 10⁻¹⁹ precision), Device B (CANNEX-class 10 μm Casimir–Yukawa plate), Device D (Double-slit SLD Fisher interferometer at 10⁻⁶ sensitivity), and Device F (Rb-87 BEC sonic horizon simulator). Device C (GRIN photonic temporal folding slab) demonstrates Model 2B geodesics optically without claiming vacuum superluminality or spacetime warping.'
    ]
  },
  {
    letter: 'N',
    anchorId: 'h12-app-n',
    title: 'Adversarial Stress-Test Scorecard (500 Criteria & 16 Red-Team Attacks)',
    category: 'CATEGORY A — ESTABLISHED',
    leadSummary:
      'Consolidates the automated 500-criterion 10-domain audit and 16 red-team stress-test challenges (node scripts/stress-test-h12.mjs) inside Appendix N.',
    paragraphs: [
      `Composite Adversarial Verification Score: ${H12_STRESS_TEST_SUMMARY.grandSelfContainedPoints}/${H12_STRESS_TEST_SUMMARY.grandMaxPoints} (${H12_STRESS_TEST_SUMMARY.selfContainedScorePct}% Self-Contained Closure; ${H12_STRESS_TEST_SUMMARY.mathematicalClosurePct.toFixed(1)}% Mathematical/Negative-Theorem Closure across ${H12_STRESS_TEST_SUMMARY.totalCriteria} Criteria; Epistemic Applicable Score ${H12_STRESS_TEST_SUMMARY.grandApplicablePoints}/${H12_STRESS_TEST_SUMMARY.grandMaxPoints} = ${H12_STRESS_TEST_SUMMARY.overallEpistemicScorePct}% explicitly bounding unresolved Category C/D frontiers).`,
      'Tables N.1 and N.2 itemize all ten domain scores and all sixteen red-team attacks (H12-ATK-01 through H12-ATK-16) together with exact resolutions.'
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
  { id: 'Table 1.3', title: 'Category B vs. Category C Grey-Area Boundary Rubric', location: 'Ch. 1 (§1.0)' },
  { id: 'Table 2.1', title: 'Catalog of 665 Verified IGRT-H11 Monograph Assertions', location: 'Ch. 2 (§2.2)' },
  { id: 'Table 2.2', title: 'Eöt-Wash Uncertainty, UV Regulators & Clock Energy Sweep', location: 'Ch. 2 (§2.2)' },
  { id: 'Table 3.1', title: 'Taxonomy of Seven Orthogonal Temporal Notions & Literature', location: 'Ch. 3 (§3.1)' },
  { id: 'Table 4.1', title: 'Positive Conjectures Summary Table (Category C)', location: 'Ch. 4 (§4.2)' },
  { id: 'Table 4.2', title: 'Model 2B Beltrami Quadrature Convergence & ds_5² = 0 Verification', location: 'Ch. 4 (§4.2)' },
  { id: 'Table 5.1', title: 'Six-Class Black-Hole & Portal Geometry Taxonomy (Classes A–F)', location: 'Ch. 5 (§5.2)' },
  { id: 'Table 6.1', title: 'Summary of Closed Negative Results (Wormholes & Horizons)', location: 'Ch. 6 (§6.2)' },
  { id: 'Table 9.1', title: 'Consolidated Negative Results Summary Table', location: 'Ch. 9 (§9.2)' },
  { id: 'Table 10.1', title: 'What Is Unique to 5D vs. Reproduced in 4D H11', location: 'Ch. 10 (§10.1)' },
  { id: 'Table 10.2', title: 'Observational Bounds Audit (Eöt-Wash, BBN, GW170817, Cassini, LHC, DE & CMB)', location: 'Ch. 10 (§10.2)' },
  { id: 'Table 11.1', title: 'What Is Not Derived — Exhaustive Epistemic Honesty Ledger', location: 'Ch. 11 (§11.1)' },
  { id: 'Table 12.1', title: 'Empirical Falsification & Conceptual Protocols (P7–P12)', location: 'Ch. 12 (§12.1)' },
  { id: 'Table 12.2', title: 'Experimental Timeline Table (P7–P10)', location: 'Ch. 12 (§12.2)' },
  { id: 'Table 12.3', title: 'Protocol Falsification Threshold Table (P7–P10)', location: 'Ch. 12 (§12.2)' },
  { id: 'Table 12.4', title: 'Protocol Confirmation Threshold Table (P7–P10)', location: 'Ch. 12 (§12.2)' },
  { id: 'Table 12.5', title: 'Multi-Outcome Scientific Decision Matrix', location: 'Ch. 12 (§12.2)' },
  { id: 'Table 12.6', title: 'Comparison Table: H11 (P1–P6) vs. H12 (P7–P12) Protocols', location: 'Ch. 12 (§12.2)' },
  { id: 'Table 12.7', title: 'Quantitative Noise Budget & Systematic Controls (P7–P10)', location: 'Ch. 12 (§12.2)' },
  { id: 'Table 13.1', title: 'Twelve Research Extrapolations & Open Obstacles', location: 'Ch. 13 (§13.5)' },
  { id: 'Table L.1', title: 'Five-Tier Assessment of Eleven Candidate Portal Mechanisms', location: 'Appendix L' },
  { id: 'Table M.1', title: 'Devices A–F Ten-Field Technical Specifications', location: 'Appendix M' },
  { id: 'Table N.1–N.2', title: 'Adversarial Stress-Test Scorecard (10 Domains + 16 Attacks)', location: 'Appendix N' }
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
  { label: 'Eq. (2.1)', title: '5D Principal Bundle Orthogonality G_{Ai} = 0 (PU(ℋ) ⊥ ∂/∂y)', category: 'CATEGORY B — DERIVED', location: 'Ch. 2 (§2.1)' },
  { label: 'Eq. (2.2)', title: 'Low-Energy KK Form-Factor Shift δ_KK(1 neV) = 4.972 × 10⁻¹⁴', category: 'CATEGORY B — DERIVED', location: 'Ch. 2 (§2.2)' },
  { label: 'Eq. (3.1)', title: '5D Modular Proper-Time Law & Temporal Folding Tensor ℱ_AB', category: 'CATEGORY B — DERIVED', location: 'Ch. 3 (§3.1)' },
  { label: 'Eq. (4.1)', title: 'Conserved Beltrami Integral & Category C Shortcut Ratios', category: 'CATEGORY C — CONJECTURAL', location: 'Ch. 4 (§4.2)' },
  { label: 'Eq. (5.1)', title: 'Exact Hayward Radial (ρ+p_r = 0) & Transverse NEC Satisfaction', category: 'CATEGORY B — DERIVED', location: 'Ch. 5 (§5.1)' },
  { label: 'Eq. (6.1)', title: 'Morris–Thorne Exotic Negative-Energy Integral E_exotic(r_0)', category: 'CATEGORY B — DERIVED', location: 'Ch. 6 (§6.1)' },
  { label: 'Eq. (6.2)', title: 'Casimir-to-Wormhole Energy Ratio (4.50 × 10⁻⁷¹ at 1 m vs 0.2436 at ℓ_0)', category: 'CATEGORY B — DERIVED', location: 'Ch. 6 (§6.2)' },
  { label: 'Eq. (7.1)', title: 'Double-Slit SLD Fisher Identity F_Q = V² ⇒ V² + D_QFI² = 1', category: 'CATEGORY B — DERIVED', location: 'Ch. 7 (§7.1)' },
  { label: 'Eq. (12.1)', title: 'Multi-Messenger Joint Likelihood ln ℒ_joint & Bayes Occam Δ ln B_{12/11}', category: 'CATEGORY B — DERIVED', location: 'Ch. 12 (§12.2)' }
];

export function buildH12FullMarkdown(): string {
  const lines: string[] = [];
  lines.push(`# ${H12_META.title}`);
  lines.push(`**${H12_META.subtitle}**`);
  lines.push(`*${H12_META.edition} · ${H12_META.date} · Predecessor: ${H12_META.predecessor}*`);
  lines.push('');
  H12_META.authorRoster.forEach((au) => {
    lines.push(`- **${au.name}** — ${au.affiliation} ([ORCID: ${au.orcid}](${au.orcidUrl}))`);
  });
  lines.push('');
  lines.push('## Abstract');
  H12_ABSTRACT_PARAGRAPHS.forEach((p) => {
    lines.push(p);
    lines.push('');
  });
  lines.push(`> ${H12_NON_SPECIALIST_SUMMARY}`);
  lines.push('');
  lines.push('## Foundational Five-Dimensional Equations (Category C) & Epistemic Boundaries');
  H12_MASTER_EQUATIONS.forEach((eq) => {
    lines.push(`> **${eq.label} [${eq.category}]** \`${eq.plainText}\``);
    lines.push(`> *${eq.caption}*`);
    lines.push('');
  });
  lines.push(`### ${H12_SCOPE_AND_NON_CLAIMS.title}`);
  H12_SCOPE_AND_NON_CLAIMS.points.forEach((pt) => lines.push(`- ${pt}`));
  lines.push('');

    lines.push('### Front-Matter Reference Lists');
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
      if (ch.number === 2) {
        lines.push('### Timeline of 5D Physics');
        TIMELINE_5D_PHYSICS.forEach((t) => lines.push(`- **${t.year} (${t.milestone})**: ${t.contributionToH12}`));
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
        H11_TWELVE_COMPONENTS_AUDIT.forEach((r) => lines.push(`- **${r.component}** [${r.h12Status} | ${r.category}]: ${r.h12Modification}`));
        lines.push('');
        lines.push('#### Table 1.2 · Comparison: 4D IGRT-H11 vs. 5D IGRT-H12');
        COMPARISON_4D_VS_5D_IGRT.forEach((c) => lines.push(`- **${c.dimension}**: 4D=${c.h11FourD} | 5D=${c.h12FiveD} (${c.epistemicDelta})`));
        lines.push('');
        lines.push('#### Table 1.3 · Category B vs. Category C Grey-Area Rubric');
        EPISTEMIC_BC_GREY_AREA_RUBRIC.forEach((r) => lines.push(`- **${r.boundaryCase}** [${r.assignedCategory}]: ${r.ruleApplied}`));
        lines.push('');
        lines.push('#### Glossary of 5D Terms');
        GLOSSARY_5D_TERMS.forEach((g) => lines.push(`- **${g.term}**: ${g.definition}`));
        lines.push('');
        lines.push(`> ${SUMMARY_FOR_PHYSICISTS}`);
        lines.push('');
      }
      if (ch.number === 2) {
        lines.push('#### Table 2.1 · Catalog of 665 Verified IGRT-H11 Assertions');
        H11_665_ASSERTIONS_CATALOG.forEach((c) => lines.push(`- **${c.moduleGroup}** (${c.assertionCount} assertions): ${c.verifiedPhysicalScope}`));
        lines.push('');
        lines.push('#### Table 2.2 · Eöt-Wash Uncertainty, UV Regulators & Clock Energy Sweep');
        REGULATOR_SENSITIVITY_TABLE.forEach((r) => lines.push(`- **${r.regimeOrRegulator}** (${r.energyOrRadius}): ${r.computedOutput} — ${r.physicalInterpretation}`));
        lines.push('');
      }
      if (ch.number === 3) {
        lines.push('#### Table 3.1 · Seven Orthogonal Temporal Notions & Literature Correspondence');
        SEVEN_TEMPORAL_NOTIONS.forEach((t) => lines.push(`- **${t.notion}** (${t.symbol}): ${t.mathematicalDefinition} — ${t.foldsInH12} (${t.literatureComparison})`));
        lines.push('');
      }
      if (ch.number === 4) {
        lines.push('#### Table 4.1 · Positive Conjectures Summary Table');
        POSITIVE_CONJECTURES_SUMMARY.forEach((p) => lines.push(`- **${p.conjecture}** [${p.category}]: ${p.statement} (Test: ${p.test})`));
        lines.push('');
        lines.push('#### Table 4.2 · Model 2B Quadrature Convergence & ds_5² = 0 Verification');
        MODEL2B_CONVERGENCE_AND_MICROCAUSALITY_TABLE.forEach((m) => lines.push(`- **${m.benchmarkSpan}** (${m.turningPeak}): ${m.etaFoldAndSpeed} | ${m.elAndNullResidual}`));
        lines.push('');
      }
      if (ch.number === 5) {
        lines.push('#### Table 5.1 · Six-Class Black-Hole & Portal Taxonomy');
        SIX_BLACK_HOLE_CLASSES.forEach((b) => lines.push(`- **${b.classId} (${b.label})** [${b.category}]: ${b.portalViability}`));
        lines.push('');
      }
      if (ch.number === 6 || ch.number === 9) {
        lines.push(`#### Table ${ch.number}.1 · Negative Results Summary`);
        NEGATIVE_RESULTS_SUMMARY.forEach((n) => lines.push(`- **${n.theorem}** [${n.category}]: ${n.statement} -> ${n.implication}`));
        lines.push('');
        lines.push('#### Glossary of Negative Theorems');
        GLOSSARY_NEGATIVE_THEOREMS.forEach((g) => lines.push(`- **${g.term}**: ${g.definition}`));
        lines.push('');
      }
      if (ch.number === 10) {
        lines.push('#### Table 10.1 · What Is Unique to 5D?');
        WHAT_IS_UNIQUE_TO_5D.forEach((u) => lines.push(`- **${u.observable}**: 4D=${u.reproducedIn4DH11} | 5D=${u.uniqueTo5DH12} [${u.empiricalStatus}]`));
        lines.push('');
        lines.push('#### Table 10.2 · 5D Observational Consistency Bounds');
        FIVE_D_OBSERVATIONAL_BOUNDS.forEach((b) => lines.push(`- **${b.probe}** (${b.bound}): ${b.h12Status} — ${b.derivationOrAssumption}`));
        lines.push('');
      }
      if (ch.number === 11) {
        lines.push('#### Table 11.1 · What Is Not Derived Ledger');
        WHAT_IS_NOT_DERIVED_LEDGER.forEach((w) => lines.push(`- **${w.claim}** [${w.category}]: ${w.whyNotDerived}`));
        lines.push('');
      }
      if (ch.number === 12) {
        lines.push('#### Table 12.1 · Empirical Protocols P7–P12');
        H12_ALL_PROTOCOLS.forEach((p) => lines.push(`- **${p.id} (${p.name})** [${p.category}]: ${p.numericalSensitivity} | Falsification: ${p.falsificationCriterion}`));
        lines.push('');
        lines.push('#### Table 12.2 · Timeline Table (P7–P10)');
        P7_TO_P10_TIMELINE_TABLE.forEach((t) => lines.push(`- **${t.protocol}**: ${t.currentState} -> ${t.requiredSensitivity} (${t.expectedYear})`));
        lines.push('');
        lines.push('#### Table 12.3 & 12.4 · Falsification vs. Confirmation Thresholds');
        P7_TO_P10_FALSIFICATION_TABLE.forEach((f) => lines.push(`- **Falsify ${f.protocol}**: ${f.nullBound} => ${f.whatItRulesOut}`));
        P7_TO_P10_CONFIRMATION_TABLE.forEach((c) => lines.push(`- **Confirm ${c.protocol}**: ${c.signalSignature} (Control: ${c.requiredControl})`));
        lines.push('');
        lines.push('#### Table 12.5 & 12.6 · Decision Matrix & H11 vs. H12 Comparison');
        P7_TO_P10_DECISION_MATRIX.forEach((d) => lines.push(`- **${d.outcome}**: ${d.posteriorStatus} — Action: ${d.mandatoryAction}`));
        H11_VS_H12_PROTOCOLS_COMPARISON.forEach((cmp) => lines.push(`- **${cmp.aspect}**: H11=${cmp.h11Protocols} | H12=${cmp.h12Protocols}`));
        lines.push('');
        lines.push('#### Table 12.7 · Quantitative Noise Budget & Systematic Controls (P7–P10)');
        P7_TO_P10_NOISE_BUDGET_TABLE.forEach((nb) => lines.push(`- **${nb.protocol}**: ${nb.primaryNoiseSources} | ${nb.quantitativeBudget} — ${nb.mitigationArchitecture}`));
        lines.push('');
        lines.push('#### Protocol Statistical Framework & Bayesian Occam Penalty');
        H12_PROTOCOL_ANALYSIS_SECTIONS.forEach((sec) => lines.push(`- **${sec.title}**: ${sec.content}`));
        lines.push('');
        lines.push('#### Falsification & Confirmation Checklists');
        H12_FALSIFICATION_CHECKLIST.forEach((f) => lines.push(`- [Falsify] ${f}`));
        H12_CONFIRMATION_CHECKLIST.forEach((c) => lines.push(`- [Confirm] ${c}`));
        lines.push('');
        lines.push(`> ${H12_FUNDING_AGENCY_SUMMARY}`);
        lines.push('');
      }
    if (ch.number === 13) {
      lines.push('#### Table 13.1 · Twelve Research Extrapolations');
      TWELVE_EXTRAPOLATIONS.forEach((ex) => lines.push(`- **${ex.id}. ${ex.topic}** [${ex.category}]: ${ex.extension}`));
      lines.push('');
      lines.push('#### Open Problems (OP-1 .. OP-6)');
      H12_OPEN_PROBLEMS_LIST.forEach((o) => lines.push(`- **${o.id}: ${o.problem}** — ${o.statusNote}`));
      lines.push('');
      lines.push('#### Response to Prior Audits');
      H12_PRIOR_AUDIT_RESPONSES.forEach((r) => lines.push(`- **${r.auditScope}**: ${r.panelCritique} -> ${r.harmonizedResolution}`));
      lines.push('');
    }
  });

  // Main Appendices L, M, N
  lines.push('## Main Monograph Appendices (L–N)');
  H12_MAIN_APPENDICES_LMN.forEach((app) => {
    lines.push(`### Appendix ${app.letter}: ${app.title} [${app.category}]`);
    lines.push(`*${app.leadSummary}*`);
    app.paragraphs.forEach((p) => lines.push(p));
    lines.push('');
  });
  lines.push('#### Table L.1 · Eleven Portal Mechanisms');
  ELEVEN_PORTAL_MECHANISMS.forEach((m) => lines.push(`- **${m.mechanism}** [${m.tier}]: ${m.quantitativeObstacleOrLimit}`));
  lines.push('');
  lines.push('#### Table M.1 · Devices A–F Specifications');
  SIX_PROPOSED_DEVICES.forEach((d) => lines.push(`- **${d.deviceId}: ${d.name}** [${d.category}]: ${d.whatItActuallyTests} | Non-claim: ${d.whatItDoesNotDo}`));
  lines.push('');
  lines.push('#### Table N.1 & N.2 · Adversarial Stress-Test Scorecard');
  H12_TEN_DOMAIN_AUDITS.forEach((d) => lines.push(`- **${d.domainNumber} (${d.domainName})**: ${d.selfContainedPoints}/${d.maxPoints} [${d.verdict}]`));
  H12_SIXTEEN_REDTEAM_ATTACKS.forEach((a) => lines.push(`- **${a.id} (${a.pointsAwarded}/${a.maxPoints})**: ${a.attackTitle} — ${a.h12ResolutionAndCitation}`));
  lines.push('');

  lines.push('## References');
  H12_REFERENCES.forEach((r) => lines.push(`${r.id}. ${r.citation}`));
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Supplementary Volume II: Technical Appendices A–K');
  H12_APPENDICES.forEach((app) => {
    lines.push(`### Appendix ${app.letter}: ${app.title} [${app.category}]`);
    lines.push(app.summary);
    app.bodyParagraphs.forEach((p) => {
      lines.push(p);
      lines.push('');
    });
  });
  return lines.join('\n');
}
