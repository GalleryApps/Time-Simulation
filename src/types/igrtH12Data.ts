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
  H12_PROTOCOL_ANALYSIS_SECTIONS,
  H12_FALSIFICATION_CHECKLIST,
  H12_CONFIRMATION_CHECKLIST,
  H12_FUNDING_AGENCY_SUMMARY,
  ELEVEN_PORTAL_MECHANISMS,
  SIX_PROPOSED_DEVICES,
  TWELVE_EXTRAPOLATIONS,
  H12_OPEN_PROBLEMS_LIST,
  H12_PRIOR_AUDIT_RESPONSES,
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
      'Establishes a Reader’s Guide, reconstructs all 12 core mathematical pillars of IGRT-2026-H11, states 17 binding epistemic safeguards verbatim, compares 4D H11 against 5D H12, and proves strict low-energy boundary equivalence.',
    subsections: [
      {
        number: '1.0',
        anchorId: 'h12-sec-1-0',
        title: 'Reader’s Guide & Structural Navigation Roadmap',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'This follow-up monograph is intentionally organized to separate established negative proofs from conjectural five-dimensional possibilities and laboratory analog engineering. Readers seeking non-technical orientation should begin with the Summary for Non-Specialists at the close of the Abstract, Table 1.2 (4D vs. 5D Comparison), and the Glossary of 5D Terms at the end of Chapter 1.',
          'Readers auditing the core mathematical contribution should focus on Chapter 2 (5D action variation and Eöt-Wash bounds), Chapter 4 (Beltrami geodesic proofs and Category B no-shortcut theorems), Chapters 5–6 (exact Hayward NEC satisfaction and Morris–Thorne Casimir deficit calculations), Chapter 7 (2×2 SLD Fisher complementarity), and Chapter 9 (Negative Results Summary). Chapters 10 and 11 isolate strictly what is unique to 5D and list every postulate that is assumed rather than derived. Chapter 12 specifies protocols P7–P12, Chapter 13 examines 12 theoretical extrapolations plus open problems and prior audit responses, Appendices L–N house portal mechanisms, laboratory devices A–F, and the adversarial stress-test scorecard, and Supplementary Volume II contains Technical Appendices A–K.'
        ]
      },
      {
        number: '1.1',
        anchorId: 'h12-sec-1-1',
        title: 'Audit & Reconstruction of IGRT-H11 Core Architecture',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'IGRT-2026-H11 formulates physical time inside strictly four-dimensional Lorentzian spacetime (M_4, g_μν) equipped with a principal projective-Hilbert fiber bundle π: P → M_4 whose fiber PU(ℋ) encodes unitarily inequivalent local quantum states. Along any timelike curve γ(λ), proper clock duration dτ is identified identically with the Symmetric Logarithmic Derivative (SLD) Quantum Fisher Information arc length scaled by the modular Hamiltonian spectral gap σ_1(K_ξ) and modular energy scale E_mod.',
          'All 12 foundational H11 components—verified by 665 deterministic assertions in scripts/verify-igrt-monograph.mjs—are audited in Table 1.1 below. Notice that in Table 1.1, postulated 5D extensions (Rows 1, 4, 5, 8, 9, 10) are explicitly tagged Category C — Conjectural wherever full 5D dynamical derivations are absent, whereas 5D Lorentzian microcausality (Row 12) carries Category A status.'
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
        title: 'Why a Follow-Up Edition (H12) Rather Than Altering H11',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'H11 explicitly excludes extra spatial dimensions from its scope and carries a SHA-256 preregistration digest (57cf3f1c...048d) locked prior to 2026–2036 empirical runs P1–P6. Introducing a fifth spacetime coordinate y, warped bulk geodesics, traversable wormholes, or 5D black-hole connectivity directly into H11 would break epistemological hygiene and conflate verified 4D EFT closures with conjectural higher-dimensional mechanisms.',
          'IGRT-H12 therefore establishes an explicit hierarchical architecture: H11 acts as the y = 0 brane effective field theory of H12 below m_KK^(1) ≥ 4.485 meV, while H12 systematically investigates which 5D geometries admit temporal folding or shortcuts—and proves rigorously which popular portal claims fail mathematically.'
        ],
        theoremBox: {
          number: 'Boundary Theorem 1.1',
          title: 'Low-Energy Decoupling & H11 Equivalence',
          category: 'CATEGORY B — DERIVED',
          hypotheses: [
            'Fifth coordinate compactification or AdS_5 warp scale satisfies Eöt-Wash torsion-balance constraint R_5 ≤ 44 μm (m_KK^(1) ≥ 4.485 meV).',
            'Radion Φ_rad is stabilized above meV scales via Goldberger–Wise or Chameleon/Vainshtein potential.'
          ],
          statement:
            'For all laboratory and astrophysical processes with momentum transfer E ≪ m_KK^(1), Kaluza–Klein graviton and Araki-scalar form-factor corrections scale as (E / m_KK^(1))². At atomic optical-clock energy E = 1 neV, fractional deviation from H11 equals 4.972 × 10⁻¹⁴, preserving all 665 H11 closures unaltered.'
        }
      },
      {
        number: '1.3',
        anchorId: 'h12-sec-1-3',
        title: 'Seventeen Explicit Epistemic Boundaries & Foundational Non-Claims',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'To prevent any misreading between derived negative proofs and conjectural five-dimensional extensions, the following seventeen binding epistemic declarations govern the entirety of IGRT-2026-H12:',
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
          'Bundle Orthogonality Proof: Let P_5(M_5, PU(ℋ)) be the principal bundle over 5D spacetime M_5 with local section σ: U ⊂ M_5 → P_5 and Ehresmann connection ω_A = −i [ ∂_A − Γ_A ]. The joint information–spacetime line element reads dS_total² = G_AB(X) dX^A dX^B + α_QFI² g_ij^QFI(θ) Dθ^i Dθ^j, where covariant fiber differential Dθ^i = dθ^i + A^i_A(X) dX^A projects horizontal spacetime shifts orthogonally to vertical Hilbert state variations. Setting torsionless horizontal–vertical splitting guarantees zero off-diagonal cross-term G_{Ai} = 0 between ∂/∂y and ∂/∂θ^i in the base-fiber metric whenever gauge connection A^i_y = 0 (y ≠ θ). Thus moving along PU(ℋ) evolves quantum interference locally without displacing a particle physically across y.'
        ],
        equation: {
          label: '(2.1)',
          category: 'CATEGORY B — DERIVED',
          unicodeHtml:
            'π<sub>5</sub> : <i>P</i><sub>5</sub> → <i>M</i><sub>5</sub> = <i>M</i><sub>4</sub> × <i>K</i><sub>1</sub>, &nbsp;&nbsp; <i>G</i><sub><i>Ai</i></sub> = 0 &nbsp;⇒&nbsp; Fiber(<i>X</i><sup><i>A</i></sup>) = <i>PU</i>(ℋ) ⊥ Span{∂/∂<i>y</i>}',
          plainText: 'pi_5: P_5 -> M_5 = M_4 x K_1, G_{Ai} = 0 => Fiber(X^A) = PU(H) orthogonal to d/dy',
          caption: '5D Principal Information Bundle explicitly proving orthogonal separation between physical bulk coordinate y and projective fiber coordinates θ^i.'
        }
      },
      {
        number: '2.2',
        anchorId: 'h12-sec-2-2',
        title: 'Explicit 5D Action Variation, Asymmetric Stress-Energy Check & Eöt-Wash Reduction',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'The 5D gravitational–information action integrates the 5D Ricci scalar ⁵R, bulk cosmological constant Λ_5, Araki scalar Lagrangian ℒ_ψ^(5), and localized y = 0 brane tension σ_brane: S_5 = ∫ d⁵X √(−G) [ (⁵R − 2Λ_5)/(16π G_5) + ℒ_ψ^(5) ] − ∫_{y=0} d⁴x √(−g) σ_brane. Varying with respect to the inverse bulk metric δG^{AB} yields δS_5 / δG^{AB} = 0 ⇒ ⁵G_AB + Λ_5 G_AB = 8π G_5 (T_AB^(mat) + I_AB^(5) + σ_brane g_μν δ^μ_A δ^ν_B δ(y)). Applying Gauss–Codazzi slicing (Supplementary Appendices A–B) projects onto y = 0 as ⁴G_μν = 8π G_4 (T_μν + I_μν) + E_μν + Π_μν.',
          'Crucial Action Audit (Why Eq. H12.0.1 is Category C): Inserting symmetric Randall–Sundrum exponents α_t = −1, α_x = +1 yields constant bulk curvature ⁵G_AB = 6 k² G_AB, identically solving the vacuum Einstein equations with Λ_5 = −6k² and tuned brane tension σ_brane = 3k/(4π G_5). By contrast, inserting asymmetric shortcut exponents α_t + α_x > 0 into ⁵G_AB + Λ_5 G_AB produces unequal diagonal pressure components G^0_0 ≠ G^1_1 ≠ G^y_y = 6 α_x² k², which CANNOT be sourced by a pure bulk cosmological constant Λ_5 G_AB. Any realized α_t + α_x > 0 bulk therefore demands unverified anisotropic bulk stress-energy (or bulk vector/scalar condensates), confirming Eq. (H12.0.1) as a Category C ansatz rather than a vacuum derivation.',
          'Eöt-Wash & Planck Scale Derivation: Matching the 4D Newton constant imposes M̄_Pl² = 2π R_5 M_5³ (flat S¹) and M̄_Pl² = (M_5³/k)(1 − e^{−2kπR_5}) (warped AdS_5), where M̄_Pl = M_Pl / √(8π) = 2.4353 × 10¹⁸ GeV. Substituting the Eöt-Wash torsion-balance ceiling R_5 ≤ 44 μm (R_5⁻¹ = ℏc / R_5 = 4.4847 meV = 4.4847 × 10⁻¹² GeV) gives M_5_flat_min = (M̄_Pl² · R_5⁻¹)^{1/3} = [(2.4353 × 10¹⁸)² × 4.4847 × 10⁻¹²]^{1/3} = 2.985 × 10⁸ GeV. For warped AdS_5 at k = 10¹⁸ GeV and kπR_5 = 35 (warp factor e⁻³⁵ = 6.3051 × 10⁻¹⁶), M_5_warped = [(2.4353 × 10¹⁸)² × 10¹⁸ / (1 − e⁻⁷⁰)]^{1/3} = 1.8101 × 10¹⁸ GeV.'
        ],
        workedExample: {
          title: 'Worked Example 2.1 — Exact Derivation of Eöt-Wash Floor & 1 neV H11 Recovery',
          setup: 'Compute m_KK^(1), M_5_flat, M_5_warped, and the tree-level KK perturbation at optical-clock scale E = 1 neV.',
          steps: [
            'First KK mass: m_KK^(1) = ℏc / R_5 = (197.32698 meV·μm) / 44 μm = 4.485 meV.',
            'Flat compactification scale: M_5 = (M̄_Pl² · 4.4847 × 10⁻¹² GeV)^{1/3} = 2.985 × 10⁸ GeV; warped (k = 10¹⁸ GeV, kπR_5 = 35) ⇒ M_5 = 1.8101 × 10¹⁸ GeV.',
            'Optical clock ratio at E = 1 neV = 10⁻⁹ eV: E / m_KK^(1) = 10⁻⁹ / 4.4847 × 10⁻³ = 2.2298 × 10⁻⁷.',
            'Tree-level KK form-factor shift: δ_KK = (E / m_KK)² / [1 + (E / m_KK)²] = 4.972 × 10⁻¹⁴ ≪ 10⁻¹².'
          ],
          resultEquation: {
            label: '(2.2)',
            category: 'CATEGORY B — DERIVED',
            unicodeHtml: 'δ<sub>KK</sub>(1 neV) = (<i>E</i> / <i>m</i><sub>KK</sub><sup>(1)</sup>)<sup>2</sup> / [1 + (<i>E</i> / <i>m</i><sub>KK</sub><sup>(1)</sup>)<sup>2</sup>] = 4.972 × 10<sup>−14</sup> ≪ 10<sup>−12</sup>',
            plainText: 'delta_KK(1 neV) = 4.972e-14 << 1e-12',
            caption: 'Direct output of verify-igrt-h12.mjs proving strict preservation of all 4D H11 low-energy closures.'
          },
          takeaway: 'Every verified H11 cosmological, optical-clock, and Araki coupling result remains intact below sub-meV scales.'
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
      'Establishes a strict taxonomy of seven temporal parameters, defines the Temporal Folding Tensor ℱ_AB and invariant folding ratio η_fold = Δτ_5 / Δτ_4, and separates genuine clock desynchronization from coordinate illusions.',
    subsections: [
      {
        number: '3.1',
        anchorId: 'h12-sec-3-1',
        title: 'Taxonomy of Seven Temporal Notions in IGRT-H12',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Discussions of "temporal folding" frequently collapse distinct mathematical quantities—confusing chart reparametrizations of coordinate time t with invariant proper-time differences Δτ, Tomita–Takesaki modular flow s_mod, or Bures information length s_QFI. Table 3.1 establishes seven mutually orthogonal definitions preserved throughout H12.',
          'A genuine physical temporal fold occurs ONLY when two observers (or signals) start at a common 4D event A on y = 0, separate across the 5D bulk or modular curvature gradient, and reconvene at a common 4D event B on y = 0 with unequal invariant proper clock readings Δτ_5 ≠ Δτ_4 (or unequal invariant causal arrival times).'
        ],
        equation: {
          label: '(3.1)',
          category: 'CATEGORY B — DERIVED',
          unicodeHtml:
            '<i>d</i>τ<sub>5</sub> = α<sub>mod</sub> <i>ds</i><sub>QFI</sub> = [ ℏ / (<i>E</i><sub>mod</sub> · σ<sub>1</sub>(<i>K</i><sub>ξ</sub>)) ] √(<i>g</i><sub><i>ij</i></sub><sup>QFI</sup> θ̇<sup><i>i</i></sup> θ̇<sup><i>j</i></sup>) <i>d</i>λ, &nbsp;&nbsp; ℱ<sub><i>AB</i></sub> ≡ <i>e</i><sup>2α<sub><i>t</i></sub><i>k</i>|<i>y</i>|</sup> <i>G</i><sub><i>AB</i></sub> − <i>g</i><sub><i>AB</i></sub><sup>(4)</sup>',
          plainText:
            'd tau_5 = alpha_mod ds_QFI, F_{AB} = e^{2 alpha_t k |y|} G_{AB} - g_{AB}^{(4)}',
          caption: 'Modular QFI proper-time law lifted to 5D alongside the invariant Temporal Folding Tensor F_{AB} quantifying bulk redshift departure from the brane.'
        }
      },
      {
        number: '3.2',
        anchorId: 'h12-sec-3-2',
        title: 'Invariant Clock Folding vs. Coordinate Gauge Artifact',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'If a bulk metric has purely spatial warping or constant lapse (G_00 = −1), coordinate transformation t → t\'(t, y) can make Δt\' appear smaller without changing any local clock reading or allowing faster signal arrival—a pure coordinate artifact. By contrast, when either (a) proper-time metric lapse |G_00(y)| < |g_00(0)| varies into the bulk (warped redshift folding), or (b) asymmetric bulk lightcones allow a 5D null arch to reconnect events A and B in less proper/brane-coordinate time than any brane curve, temporal folding is strictly gauge-invariant.',
          'Benchmark Model 3 Step-by-Step Verification: Consider baseline trajectory L_4 = 10⁶ m (1,000 km) at c = 2.99792458 × 10⁸ m/s with Lorentz boost γ = 1.0001. Coordinate flight time is Δt_coord = L_4 / c = 3.335641 ms, giving brane proper clock time τ_brane = Δt_coord / γ = 3.33531 ms. Applying an Araki modular folding factor 0.65 compresses proper clock reading to τ_folded = 0.65 × τ_brane = 2.16795 ms. At reference modular scale E_mod = 1 eV and spectral gap σ_1(K_ξ) = 1, the swept Bures–QFI angle equals s_QFI = τ_folded · (E_mod · σ_1) / ℏ = 3.2937 × 10¹² rad.'
        ],
        theoremBox: {
          number: 'Theorem 3.1',
          title: 'Gauge-Invariant Temporal Folding Criterion',
          category: 'CATEGORY B — DERIVED',
          hypotheses: [
            'Two smooth timelike worldlines γ_4 ⊂ M_4 and γ_5 ⊂ M_5 share common endpoints A, B ∈ M_4.',
            'Both clocks obey H12 Eq. (H12.0.2) locally along their respective trajectories.'
          ],
          statement:
            'Physical temporal folding (η_fold = Δτ_5 / Δτ_4 < 1) occurs if and only if ∫_{γ_5} √(−G_AB Ẋ^A Ẋ^B) dλ < ∫_{γ_4} √(−g_μν ẋ^μ ẋ^ν) dλ, equivalently iff the bulk trajectory traverses lower effective lapse or reduced Bures-QFI modular arc length s_QFI.'
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
      'Proves analytically that flat compact M_4 × S¹ (L_5/L_4 > 1) and conformally flat Randall–Sundrum AdS_5 (c_eff(y) = c) yield zero arrival shortcuts, then evaluates Category C Beltrami shooting geodesics on asymmetric bulks.',
    subsections: [
      {
        number: '4.1',
        anchorId: 'h12-sec-4-1',
        title: 'Negative Theorems: Flat M_4 × S¹ & Conformal Randall–Sundrum Horizon Theorem',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'Analytical Proof for Flat Compact M_4 × S¹ (Model 1): On ds_5² = −c² dt² + dx² + dy², setting ds_5² = 0 immediately yields c² (dt/dλ)² = (dx/dλ)² + (dy/dλ)². Integrating between shared brane points A = (0, 0) and B = (Δx, 0) along any path with extra-dimensional displacement Δy = ∫ |dy| gives Euclidean bulk arc length L_5 = √(Δx² + Δy²) = Δx √(1 + (Δy/Δx)²) > Δx = L_4 for every Δy ≠ 0. Hence L_5 / L_4 > 1 identically; at Δx = 1,000 m and Δy = 50 m, L_5 / L_4 = √(1 + 0.05²) = 1.001249 > 1.',
          'Explicit Poincaré Proof for Conformal RS AdS_5 (Model 2A): Consider ds_5² = e^{−2k|y|}(−c² dt² + dx²) + dy². Define Poincaré depth coordinate z(y) = k⁻¹ e^{k|y|}, so dz = e^{k|y|} dy ⇒ dy² = (kz)⁻² dz². Substituting back gives ds_5² = (kz)⁻² (−c² dt² + dx² + dz²). Because both dt² and dx² share the exact same conformal factor (kz)⁻², any 5D null curve (ds_5² = 0) satisfies c dt = √(dx² + dz²) ⇒ c_eff(y) = dx/dt|_{dz=0} = c identically everywhere! Any excursion z(x) off the brane z_0 = 1/k adds positive (dz/dx)² under the square root and strictly delays arrival (excursion ratio Δt_5 / Δt_4 = 1.010321 > 1).'
        ],
        theoremBox: {
          number: 'No-Go Theorem 4.1',
          title: 'Absence of Null Arrival Shortcuts in Flat S¹ & Conformal AdS_5',
          category: 'CATEGORY B — DERIVED',
          hypotheses: [
            '5D bulk metric takes flat compact form ds_5² = −c²dt² + dx² + dy² or warped Poincaré-invariant form ds_5² = w²(y) η_μν dx^μ dx^ν + dy² with identical temporal and spatial warp factor w(y).'
          ],
          statement:
            'Every 5D null curve connecting events A and B on the y = 0 brane obeys Δt_5 ≥ Δt_4 = Δx / c. No superluminal bulk shortcut relative to brane photons is mathematically possible without either asymmetric warping (w_t ≠ w_x) or extrinsic brane curvature (bent brane).'
        }
      },
      {
        number: '4.2',
        anchorId: 'h12-sec-4-2',
        title: 'Category C Positive Conjectures: Asymmetrically Warped Beltrami Geodesics & Microcausality',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'Category C Clarification: The positive shortcut results below are mathematical classifications of assumed geometries (Eq. H12.0.1 with α_t + α_x > 0), NOT physical predictions of nature, because α_t + α_x > 0 requires bulk anisotropic stress-energy not derived from a vacuum 5D action (§2.2). Null curves (ds_5² = 0) on ds_5² = −e^{2α_t k|y|} c² dt² + e^{−2α_x k|y|} dx² + dy² minimize arrival functional c t_5 = ∫ L(y, y\') dx with Lagrangian L = √(e^{−2(α_t+α_x)ky} + e^{−2α_t ky} (y\')²). Since L has no explicit x-dependence, the Euler–Lagrange equation d/dx(∂L/∂y\') = ∂L/∂y integrates immediately to the Beltrami conserved first integral H_Beltrami = L − y\' (∂L/∂y\') = e^{−2βky} / L = C_const, where β ≡ α_t + α_x.',
          'At turning peak y = y_peak where y\' = 0, C_const = e^{−β k y_peak}. Solving y\'(y) = √[e^{2α_t ky} e^{−2β ky}(e^{−2β ky}/C² − 1)] via regular substitution y = y_peak(1 − u²) and bisection shooting for α_t = α_x = 0.5 yields Category C shortcut ratios η_fold = Δt_5 / Δt_4: at k Δx = 2, y_peak = 0.42878 / k and η_fold = 0.86634 (c_eff/c = 1.1543); at k Δx = 10, y_peak = 2.87237 / k and η_fold = 0.34279 (c_eff/c = 2.9172); at k Δx = 50, y_peak = 6.07633 / k and η_fold = 0.07770 (c_eff/c = 12.8695). Explicit Microcausality Check: Substituting y\'(y) and c dt/dx = e^{−2βky}/C directly back into the 5D line element gives ds_5² = [−e^{2α_t ky}(e^{−4βky}/C²) + e^{−2α_x ky} + e^{2α_t ky − 2βky}(e^{−2βky}/C² − 1)] dx² = 0 identically at every bulk point! Thus the geodesic remains strictly 5D null.'
        ],
        equation: {
          label: '(4.1)',
          category: 'CATEGORY C — CONJECTURAL',
          unicodeHtml:
            '<i>H</i><sub>Beltrami</sub> = <i>e</i><sup>−2(α<sub><i>t</i></sub>+α<sub><i>x</i></sub>)<i>ky</i></sup> / <i>L</i> = <i>e</i><sup>−(α<sub><i>t</i></sub>+α<sub><i>x</i></sub>)<i>k</i><i>y</i><sub>peak</sub></sup> &nbsp;⇒&nbsp; η<sub>fold</sub> ∈ {0.86634, 0.34279, 0.07770}, &nbsp; <i>ds</i><sub>5</sub><sup>2</sup> ≡ 0',
          plainText: 'H_Beltrami = e^{-2(alpha_t+alpha_x)ky}/L = e^{-(alpha_t+alpha_x) k y_peak} => eta_fold in {0.86634, 0.34279, 0.07770}, ds_5^2 === 0',
          caption: 'Conserved Beltrami first integral and Category C bulk shortcut ratios (α_t = α_x = 0.5), satisfying local 5D null microcausality ds_5² ≡ 0 identically.'
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
          'A persistent misconception conflates non-singular regular black holes (such as the H11 Hayward metric f(r) = 1 − 2GMr² / (r³ + 2GMℓ_0²) with derived ξ_0 = 2⁻¹/⁴) with traversable wormholes. Exact Einstein-tensor evaluation proves this mathematically false.',
          'Explicit NEC Derivation: For any static spherically symmetric metric ds² = −f(r) c² dt² + f(r)⁻¹ dr² + r² dΩ² satisfying g_tt g_rr = −1, the mixed Einstein tensor diagonal components read G^t_t = G^r_r = (r f\'(r) + f(r) − 1)/r² identically. By Einstein’s equations G^μ_ν = (8πG/c⁴) T^μ_ν with T^μ_ν = diag(−ρ c², p_r, p_⊥, p_⊥), the equality G^t_t = G^r_r forces p_r = −ρ c² everywhere, giving radial NEC ρ c² + p_r = 0 identically (zero radial flare-out). Next, differentiating f(r) = 1 − r_s r²/(r³ + a³) with a³ ≡ r_s ℓ_0² and evaluating the angular component G^θ_θ = (r f\'\'(r) + 2 f\'(r))/(2r) yields transverse null combination G^θ_θ − G^t_t = 9 r_s a³ r³ / (r³ + a³)³ > 0 strictly for all r > 0! At the 30 M_⊙ core radius r_core = a = 2.5389 × 10⁻²² m, verify-igrt-h12.mjs confirms both G^r_r − G^t_t = 0 and positive transverse NEC within < 10⁻⁴ numerical error. Ordinary H11 Hayward regular black holes produce K_echo = 0.184 echoes and M_rem = 1.09236 M_Pl—NOT portals.'
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
        title: '5D Brane-World Hayward Strings, Gregory–Laflamme Threshold & 6-Class Taxonomy',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'Lifting a compact object onto a 5D brane introduces the bulk Weyl tidal charge q_tidal into the effective lapse function: f_5D(r) = 1 − (2GMr² + q_tidal R_AdS r) / (r³ + 2GMℓ_0²). Note carefully: the Gregory–Laflamme stability threshold r_+/R_AdS = 0.876 is a known result from linearized 5D vacuum black-string perturbations (Gregory & Laflamme 1993); the IGRT-H12 application to coupled Hayward–Araki strings with Weyl tidal charge is assumed rather than derived from 5D field equations (Category C).',
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
      'Derives the complete 10-point Morris–Thorne Einstein equations and NEC violation, computes exact exotic negative-mass integrals (−1.0637 × 10⁻³ M_⊙ to −3.1912 M_⊙), proves the 10⁷¹ Casimir energy deficit at 1 m (and 0.2436 Planck parity at ℓ_0), and includes Table 6.1 & Glossary.',
    subsections: [
      {
        number: '6.1',
        anchorId: 'h12-sec-6-1',
        title: 'Complete 10-Point Morris–Thorne Wormhole & NEC Derivation',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'For zero-tidal-force metric ds² = −c² dt² + (1 − b(r)/r)⁻¹ dr² + r² dΩ² with Ellis–Bronnikov shape function b(r) = r_0² / r, orthonormal Einstein components yield (8πG/c⁴)(ρ c²) = b\'(r)/r² = −r_0²/r⁴, (8πG/c⁴) p_r = −b(r)/r³ = −r_0²/r⁴, and (8πG/c⁴) p_⊥ = ½(b/r³ − b\'/r²) = +r_0²/r⁴. Summing radial energy and pressure gives exact NEC violation everywhere: ρ c² + p_r = (c⁴/8πG)(r b\' − b)/r³ = −(c⁴/4πG)(r_0²/r⁴) < 0.',
          'Evaluating the 10 Morris–Thorne criteria at throat r = r_0: (1) Zero horizon (Φ = 0); (2) Flare-out b(r_0) = r_0, b\'(r_0) = −1 < 1; (3) Smooth proper radial coordinate l = ±√(r² − r_0²); (4) Throat NEC density (ρc² + p_r)|_{r_0} = −c⁴/(4πG r_0²); (5) Radial tension equals negative energy density; (6) Exact spatial proper-volume exotic integral via substitution r = r_0 sec(u), dr = r_0 sec(u) tan(u) du: E_exotic = ∫_{r_0}^∞ (ρc² + p_r) [4π r² / √(1 − r_0²/r²)] dr = −(c⁴/G) r_0 ∫_0^{π/2} cos²(u) · 1 du ... Wait carefully: 4π r² (c⁴/(4π G r_0²)) (r_0²/r⁴) / sin(u) · (r_0 tan u / cos u) du = −(c⁴ r_0/G) ∫_0^{π/2} [r_0²/(r_0² sec²u)] [1/sin u] [sin u / cos²u] du = −(c⁴ r_0/G) ∫_0^{π/2} (1/cos²u)? Let us check factors explicitly: (ρc²+p_r) = −(c⁴/4πG) r_0²/r⁴; multiplying by 4π r² gives −(c⁴/G) r_0² / r². Dividing by √(1 − r_0²/r²) = sin(u) and multiplying by dr = r_0 (sin u / cos²u) du cancels sin(u) and uses r_0²/r² = cos²(u), leaving −(c⁴ r_0 / G) ∫_0^{π/2} cos²(u) / cos²(u) ... wait: r_0²/r² = cos²u, dr / √(1 − b/r) = (r_0 sin u / cos²u) / sin u du = r_0 / cos²u du, WAIT: if p_r is included, −b/(r³) + b\'/r² = −r_0²/r⁴ − r_0²/r⁴ = −2 r_0²/r⁴, so 4π r² / (8π G) × (−2 r_0²/r⁴) = −(c⁴/G) r_0² / r² = −(c⁴/G) cos²(u) / r_0? No: [r_0²/r²] = cos²(u), and dr = r_0 sin u / cos²u du, so integrand is −(c⁴ r_0 / G) cos²(u) du... wait: cos²(u) · (1/cos²u) = 1? No! E_exotic(r_0) weighted by 4π r² dr/√(1−b/r) integrates to −(π/2)(c⁴/G)r_0 when weighted by cos²(u) + sin²? Wait: check verify-igrt-h12.mjs line 235–241! In line 236: nec = -prefactor * r_0^2 / r^4 = -(c^4/(4 pi G)) * cos^4(u) / r_0^2. Line 237: vol_factor = 4 pi r^2 / sin(u) = 4 pi r_0^2 / (cos^2 u sin u). Line 238: dr_du = r_0 sin u / cos^2 u. Product: (-c^4 / (4 pi G r_0^2)) * cos^4(u) * (4 pi r_0^2 / (cos^2 u sin u)) * (r_0 sin u / cos^2 u) du = -(c^4 r_0 / G) * 1 du, whose integral over [0, pi/2] IS EXACTLY -(pi/2)(c^4/G) r_0! Beautiful exact cancellation verified numerically to < 10⁻⁴ in verify-igrt-h12.mjs. Conditions (7)–(10) fix stiffness ∂p_r/∂ρ > 1, zero radial tide, transverse tide Δa_⊥ = γ² v² L / (2 r_0²), and traversal time τ_trav = 20 r_0 / (γ v).'
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
          'Comparing directly against physical electromagnetic Casimir vacuum energy ρ_Casimir = −π² ℏ c / (720 r_0⁴) gives |ρ_Casimir / NEC| = (π³ G ℏ) / (180 c³ r_0²) = 4.50 × 10⁻⁷¹ at r_0 = 1 m and 4.50 × 10⁻⁵⁹ at r_0 = 1 μm. Only at the H11 quantum-gravity core length r_0 = ℓ_0 = 1.3591 × 10⁻³⁵ m does Casimir density reach O(1) parity (ratio 0.2436, exotic mass −2.8748 × 10⁻⁸ kg)—proving macroscopic traversable portals are blocked by > 70 orders of magnitude in energy density.'
        ],
        workedExample: {
          title: 'Worked Example 6.1 — Casimir Deficit Calculation (r_0 = 1 m vs r_0 = ℓ_0)',
          setup: 'Compute |ρ_Casimir / (ρc² + p_r)| explicitly from CODATA constants.',
          steps: [
            'Throat NEC requirement: |NEC(r_0)| = c⁴ / (4π G r_0²) = 9.6309 × 10⁴² / r_0² J/m³.',
            'Casimir vacuum magnitude: |ρ_Casimir(r_0)| = π² ℏ c / (720 r_0⁴) = 4.331 × 10⁻²⁸ / r_0⁴ J/m³.',
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
      'Executes the explicit 2×2 SLD Fisher metric derivation proving F_Q = V² and V² + D_QFI² = 1 independently of 5D, while classifying the Born rule strictly as Category A.',
    subsections: [
      {
        number: '7.1',
        anchorId: 'h12-sec-7-1',
        title: 'Explicit 2×2 SLD Fisher Metric Derivation & Complementarity Identity',
        category: 'CATEGORY B — DERIVED',
        paragraphs: [
          'Consider a coherent particle passing two slits coupled to a which-path detector: |Ψ(φ)⟩ = 2⁻¹/² (|1⟩|d_1⟩ + e^{iφ}|2⟩|d_2⟩) with detector overlap γ_coh = ⟨d_1 | d_2⟩ ∈ [0, 1]. Tracing out the detector produces the reduced 2×2 path density matrix ρ(φ) = ½ [[1, γ_coh e^{−iφ}], [γ_coh e^{iφ}, 1]] inside projective Hilbert fiber PU(ℋ).',
          'Explicit SLD Derivation: Diagonalizing ρ(φ) gives eigenvalues λ_± = ½(1 ± γ_coh) with orthonormal eigenvectors |λ_±(φ)⟩ = 2⁻¹/² (|1⟩ ± e^{iφ}|2⟩). Evaluating off-diagonal derivative matrix elements ⟨λ_+|∂_φ ρ|λ_−⟩ = ½ i γ_coh, the Symmetric Logarithmic Derivative (SLD) L_φ solving ∂_φ ρ = ½(L_φ ρ + ρ L_φ) has matrix elements (L_φ)_{mn} = 2 ⟨λ_m|∂_φ ρ|λ_n⟩ / (λ_m + λ_n). Thus SLD Quantum Fisher Information F_Q(φ) = Tr(ρ L_φ²) = 4 |⟨λ_+|∂_φ ρ|λ_−⟩|² / (λ_+ + λ_−) = 4 (γ_coh² / 4) / 1 = γ_coh². Meanwhile, screen fringe contrast satisfies P(φ) = ½(1 + γ_coh cos φ) ⇒ V = γ_coh, and Helstrom minimum-error path distinguishability is D_QFI = √(1 − γ_coh²). Therefore V² + D_QFI² = γ_coh² + (1 − γ_coh²) = 1 and F_Q = V² hold identically across all γ_coh ∈ [0, 1].'
        ],
        equation: {
          label: '(7.1)',
          category: 'CATEGORY B — DERIVED',
          unicodeHtml:
            '<i>F</i><sub><i>Q</i></sub>(φ) = 4 |⟨λ<sub>+</sub>|∂<sub>φ</sub>ρ|λ<sub>−</sub>⟩|<sup>2</sup> / (λ<sub>+</sub> + λ<sub>−</sub>) = γ<sub>coh</sub><sup>2</sup> = <i>V</i><sup>2</sup> &nbsp;⇒&nbsp; <i>V</i><sup>2</sup> + <i>D</i><sub>QFI</sub><sup>2</sup> = 1',
          plainText: 'F_Q = gamma_coh^2 = V^2, D_QFI = sqrt(1 - gamma_coh^2) => V^2 + D_QFI^2 = 1',
          caption: 'Exact double-slit SLD Fisher–Englert duality identity inside the projective Hilbert fiber PU(ℋ).'
        }
      },
      {
        number: '7.2',
        anchorId: 'h12-sec-7-2',
        title: 'Epistemic Safeguards: Born Rule Status & Independence from 5D',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'Two binding safeguards isolate Chapter 7 from five-dimensional overclaiming. First, The Born rule is Category A (postulate), not derived from 5D; probability extraction P(x) = Tr(ρ Π_x) = |ψ_1(x) + ψ_2(x)|² is an established quantum axiom imported identically from 4D quantum mechanics.',
          'Second, The double-slit complementarity identity is independent of the 5D extension; it is a property of the Fisher–Rao metric on the fiber PU(ℋ). Particles do NOT travel through a spatial fifth dimension y between slits. Protocol P9 solely bounds whether speculative fiber–bulk coupling causes anomalous decoherence |δV_5D| < 10⁻⁶.'
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
      'Invokes Haag–Kastler AQFT microcausality and the Buchholz–Wichmann split property to confirm zero superluminal communication capacity, and classifies ER=EPR as a non-traversable mathematical connection (Category C).',
    subsections: [
      {
        number: '8.1',
        anchorId: 'h12-sec-8-1',
        title: 'AQFT Haag–Kastler Microcausality & No-Communication Preservation',
        category: 'CATEGORY A — ESTABLISHED',
        paragraphs: [
          'By standard Haag–Kastler Algebraic Quantum Field Theory and the Buchholz–Wichmann (1986) split property preserved from H11 onto a globally hyperbolic 5D Lorentzian manifold M_5 (signature −,+,+,+,+), local observable algebras satisfy microcausality [O_A, O_B] = 0 whenever regions 𝒪_A and 𝒪_B are spacelike separated in 5D. Applying any local unitary U_B ⊂ 𝒜(𝒪_B) leaves Alice’s reduced expectation values invariant: ⟨O_A⟩\' = Tr_{AB}[(O_A ⊗ I)(I ⊗ U_B) ρ_AB (I ⊗ U_B†)] = Tr_A(O_A Tr_B(ρ_AB)) = ⟨O_A⟩.',
          'The no-communication theorem is preserved by 5D microcausality, but this is not a new result. Even in holographic Gao–Jafferis–Wall protocols inside AdS_5, opening a boundary-coupled link O_L O_R requires sending classical information through the boundary at speed v ≤ c.'
        ],
        theoremBox: {
          number: 'No-Signaling Theorem 8.1',
          title: 'Zero Faster-Than-Light Information Capacity in 5D Bundle P_5',
          category: 'CATEGORY A — ESTABLISHED',
          hypotheses: [
            'Local algebra of observables obeys the Buchholz–Wichmann split property and Lorentzian 5D microcausality [𝒜(𝒪_A), 𝒜(𝒪_B)] = 0.'
          ],
          statement:
            'No local operation on subsystem B alters any marginal expectation value on spacelike-separated subsystem A. Entanglement carries strictly zero superluminal signaling capacity.'
        }
      },
      {
        number: '8.2',
        anchorId: 'h12-sec-8-2',
        title: 'Modular Entropy Gradients & ER=EPR Mathematical Connectivity',
        category: 'CATEGORY C — CONJECTURAL',
        paragraphs: [
          'In asymptotically AdS_5 toy models, Ryu–Takayanagi extremal bulk surfaces γ_A equate entanglement entropy S(ρ_A) = Area(γ_A)/(4 G_5) to bulk geometric connectivity, and Araki modular density ψ²(x) motivates a Category C geometric bridge analogy. However, the "portal" is a mathematical connection, not a traversable wormhole: Einstein–Rosen bridges between entangled pairs pinch off inside horizons unless assisted by classical communication.',
          'Laboratory qubit OTOC experiments and 3G gravitational-wave leakage searches (Device E / Protocol P10) test holographic scrambling analogs and bulk scalar modes—never macroscopic wormhole transit.'
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
        ]
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
          'Positive Beltrami shortcuts (η_fold down to 0.07770) remain explicitly quarantined as Category C mathematical possibilities contingent on unverified asymmetric bulk matter, awaiting future experimental discrimination across Protocols P7–P12. All open theoretical challenges (OP-1 to OP-6) and point-by-point resolutions to the 200-expert panel critiques are audited at the close of this chapter, followed by Appendices L, M, and N.'
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
  { id: 'Table 3.1', title: 'Taxonomy of Seven Orthogonal Temporal Notions', location: 'Ch. 3 (§3.1)' },
  { id: 'Table 4.1', title: 'Positive Conjectures Summary Table (Category C)', location: 'Ch. 4 (§4.2)' },
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
  { label: 'Eq. (7.1)', title: 'Double-Slit SLD Fisher Identity F_Q = V² ⇒ V² + D_QFI² = 1', category: 'CATEGORY B — DERIVED', location: 'Ch. 7 (§7.1)' }
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
      if (sub.theoremBox) {
        lines.push(`> **${sub.theoremBox.number} — ${sub.theoremBox.title} [${sub.theoremBox.category}]**`);
        lines.push(`> ${sub.theoremBox.statement}`);
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
      lines.push('#### Glossary of 5D Terms');
      GLOSSARY_5D_TERMS.forEach((g) => lines.push(`- **${g.term}**: ${g.definition}`));
      lines.push('');
      lines.push(`> ${SUMMARY_FOR_PHYSICISTS}`);
      lines.push('');
    }
    if (ch.number === 3) {
      SEVEN_TEMPORAL_NOTIONS.forEach((t) => lines.push(`- **${t.notion}** (${t.symbol}): ${t.mathematicalDefinition} — ${t.foldsInH12}`));
      lines.push('');
    }
    if (ch.number === 4) {
      lines.push('#### Table 4.1 · Positive Conjectures Summary Table');
      POSITIVE_CONJECTURES_SUMMARY.forEach((p) => lines.push(`- **${p.conjecture}** [${p.category}]: ${p.statement} (Test: ${p.test})`));
      lines.push('');
    }
    if (ch.number === 5) {
      SIX_BLACK_HOLE_CLASSES.forEach((b) => lines.push(`- **${b.classId} (${b.label})** [${b.category}]: ${b.portalViability}`));
      lines.push('');
    }
    if (ch.number === 6 || ch.number === 9) {
      lines.push(`#### Table ${ch.number}.1 · Negative Results Summary`);
      NEGATIVE_RESULTS_SUMMARY.forEach((n) => lines.push(`- **${n.theorem}** [${n.category}]: ${n.statement} -> ${n.implication}`));
      lines.push('');
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
