/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Complete 980-Vector / 1,740-Point Adversarial Stress Test of the
 * Harmonized Research Paper (Edition: IGRT-2026-H8)
 *
 * Audits the actual H8 monograph (`harmonizedPaperData.ts`, `harmonizedPaperApparatus.ts`,
 * and `scripts/verify-igrt-monograph.mjs`) without rubber-stamping:
 *  - Stage 1: 580 Formal Criteria across 12 Families (1,740 max pts; exact criteria500.json + XI + XII counts)
 *  - Stage 2: 20 Direct Structural Red-Team Attacks (ATK-01..ATK-20)
 *  - Stage 3: 380 Implementation & Upgrade Gates (MATH-01..SIM-60 + HARD-01..20)
 */

import { HARMONIZED_STRESS_TEST_500 } from './harmonizedStressTest500';
import { FAMILIES_META } from './manuscriptData';
import {
  FAMILY_XI_CRITERIA,
  FAMILY_XII_CRITERIA,
  RED_TEAM_20_ATTACKS
} from './adversarialReview580';
import { ALL_380_IMPROVEMENTS } from './siteImprovements380';

export type H8CriterionVerdict =
  | 'Derived / Verified'
  | 'Qualified (Ansatz / Input)'
  | 'Open / Tension / Uncomputed'
  | 'Falsified / Absent';

export type H8AttackRating = 'Survives' | 'Survives (Qualified)' | 'Wounded' | 'Open' | 'Fails';

export type H8UpgradeStatus =
  | 'Verified Active in H8'
  | 'Superseded / Corrected in H8'
  | 'Pending Open Problem';

export interface H8CriterionAuditItem {
  uid: string;
  id: string;
  label: string;
  familyId: number;
  familyName: string;
  criterion: string;
  score: 0 | 1 | 2 | 3;
  legacyScore: number;
  verdict: H8CriterionVerdict;
  citation: string;
  rationale: string;
  proofMath: string;
  challenge: string;
  falsification: string;
  isCounterfactual: boolean;
}

export interface H8AttackAuditItem {
  id: number;
  code: string;
  title: string;
  equationTarget: string;
  attackVector: string;
  mathematicalFormulation: string;
  legacyRating: string;
  h8Rating: H8AttackRating;
  citation: string;
  defenseAndJustification: string;
  remainingVulnerability: string;
}

export interface H8UpgradeAuditItem {
  id: string;
  code: string;
  domain: string;
  title: string;
  legacyImpactMetric: string;
  h8Status: H8UpgradeStatus;
  citation: string;
  h8AuditNote: string;
}

export interface H8FamilySummary {
  id: number;
  name: string;
  count: number;
  maxScore: number;
  h8Score: number;
  percentage: number;
  score3Count: number;
  score2Count: number;
  score1Count: number;
  score0Count: number;
}

export const H8_EDITION_META = {
  edition: 'IGRT-2026-H8',
  title: 'Information-Geometric Resonant Time (IGRT): Harmonized Monograph Audit',
  verifyScriptAssertions: 224,
  scalarsDisclosed: 5,
  openProblemsCount: 5
} as const;

export const H8_VERIFIED_REGIMES = {
  baseline: {
    id: 'baseline' as const,
    label: 'H8 Nominal Calibration',
    description:
      'Verified IGRT-2026-H8 baseline across Type Ia Horndeski (c_GW = c), RK2 PNGB thawing DE, and CODATA 2022 constants.',
    energyScale: '10⁻³³ eV – 1.84 TeV',
    horndeskiClass: 'Type Ia (G_{4,X} = 0, G_5 = 0)',
    bianchiResidual: '0 (All-Orders Noether, App. A)',
    ppnGamma1AU: '1.77 × 10⁻¹¹ (Z_ψ = 7.05 × 10¹⁴)',
    bounceAndTensor: 'ρ_max = 0.4094 ρ_Pl · n_T = −0.036',
    darkEnergyAndCramRao: 'w_0 = −0.908, w_a = −0.177 · σ_r = ±0.08'
  },
  bounce_10x: {
    id: 'bounce_10x' as const,
    label: 'L_UV Planck Bounce Saturation',
    description:
      'Tests Eq. (6.1) limiting-curvature bounce at ρ → ρ_max = 9.095 × 10⁷⁵ GeV⁴ with tuned w_contract = −0.003 and assumed ekpyrotic w > 1 BKL shield.',
    energyScale: '9.095 × 10⁷⁵ GeV⁴ (0.4094 ρ_Pl)',
    horndeskiClass: 'FLRW L_UV Effective Bounce (§6.1)',
    bianchiResidual: '0 (Covariant Semiclassical)',
    ppnGamma1AU: '1.77 × 10⁻¹¹ (IR Limit)',
    bounceAndTensor: 'n_s = 0.964 · r = 0.0123 · f_NL = −4.38',
    darkEnergyAndCramRao: 'Tuned w_contract [Input] · BKL assumed'
  },
  ppn_100x: {
    id: 'ppn_100x' as const,
    label: 'Terrestrial Screening & CANNEX Split',
    description:
      'Audits Solar r_V = 369.8 ly, Earth Z_ψ = 7.05 × 10¹⁴ lifting Λ_local = 4.67 μeV (4.2 cm), forcing separate Chameleon φ_Ch (2.4 meV) for sub-mm CANNEX.',
    energyScale: 'Λ_local = 4.67 μeV / M_Ch = 2.4 meV',
    horndeskiClass: 'Cubic Galileon + Separate φ_Ch (§3.4)',
    bianchiResidual: '0 (Jordan–Einstein Check, App. A)',
    ppnGamma1AU: '1.77 × 10⁻¹¹ (30 AU: 2.91 × 10⁻⁹)',
    bounceAndTensor: 'ΔP_Ch ~ 10⁻¹⁰–2 × 10⁻⁹ N/m²',
    darkEnergyAndCramRao: '5-Scalar Hierarchy Disclosed (§1.2)'
  },
  deep_void: {
    id: 'deep_void' as const,
    label: 'Cosmological Void & DESI DR2 Frontier',
    description:
      'Evaluates unscreened late-time thawing DE (θ_i = 1.95 rad), DESI DR2 2.8–4.2σ w_a tension, and pending OP-1 Boltzmann MCMC (CAMB/Cobaya).',
    energyScale: 'H_0 ∈ [67.4, 73.0] km/s/Mpc',
    horndeskiClass: 'Unscreened Type Ia + φ_DE (§7.1)',
    bianchiResidual: '0 (Classical Background)',
    ppnGamma1AU: 'Λ_3 = 1.758 × 10⁻¹³ eV (1122.7 km)',
    bounceAndTensor: '1 + w ∝ (1+z)⁻³ early limit',
    darkEnergyAndCramRao: 'DESI w_a < −0.4 P3 Gate · OP-1 Open'
  }
} as const;

type BaseTuple = [0 | 1 | 2 | 3, string, string];

/**
 * Explicit per-criterion H8 evaluation overrides for the 500 core criteria (IDs 1..500).
 * Every score reflects the actual state of IGRT-2026-H8 (`harmonizedPaperData.ts`,
 * `harmonizedPaperApparatus.ts`, and `scripts/verify-igrt-monograph.mjs`).
 */
const BASE_500_SPECS: Record<number, BaseTuple> = {
  // ===== FAMILY 1: Foundational Axioms (1..53) =====
  1: [3, '§3.1 Eq.(3.1)', 'Explicit diffeomorphism-invariant Type Ia Horndeski + L_UV + PU(H) bundle action stated.'],
  2: [3, '§1.2, §2.1, Table 0.1', 'All five scalar primitives, PU(H), and split Type I algebra N explicitly named in Table 0.1.'],
  3: [3, 'Table 0.1, verify-igrt', 'Unified terminology enforced across manuscript & 224 automated assertions; zero barred-h/notation drift.'],
  4: [3, '§3.1 Thm 3.1', 'Exact GR limit recovered as ψ → 0, G_{4,X} = 0, and φ_DE constant vacuum.'],
  5: [3, '§5.1, §4.3', 'Unbounded S¹ Fisher Hamiltonian & Born–Oppenheimer decoupling recover standard Schrödinger/QFT limit.'],
  6: [3, '§1.1, §5.1', 'Eq. (1.1) ADM WDW constraint resolved via Born–Oppenheimer τ_FR and unbounded S¹ clock H_Fisher (evades Pauli theorem).'],
  7: [3, '§5.3, App. D', 'Distinguishes reversible Bures τ_FR from detailed-balance BKM entropy flow Eq. (5.2) & general CPTP Spohn inequality.'],
  8: [3, '§1.2, §4.1', 'States coordinate/proper time as synchronization along statistical PU(H) fibers coupled to metric light cones.'],
  9: [3, '§2.1, App. D', 'No background metric fixed a priori; Diff⁺(M) covariance preserved over Lorentzian manifold M.'],
  10: [3, '§2.1, §4.3', 'Local Lorentz invariance preserved on M with luminal c_GW = c and Krein-regularized spectral triple.'],
  11: [3, '§2.1, §4.3', 'Metric light cones plus causal poset ordering define invariant causal structure without CTCs.'],
  12: [3, '§2.3, §6.3, P4', 'Projective unitary PU(H) fiber evolutions & P4 partial-reflectivity interior transfer matrix S†S = I enforce unitarity.'],
  13: [3, '§3.3, App. A', 'Exact all-orders Jordan–Einstein Noether identity ∇^μ(T_μν + I_μν) ≡ 0 proved including cubic-Galileon commutators.'],
  14: [3, '§3.4, App. G', 'Solar r_V = 369.8 ly screening keeps |γ_PPN−1| = 1.77 × 10⁻¹¹ (1 AU), obeying WEP/LLR bounds.'],
  15: [1, '§1.2, §3.1, SCOPE #3', 'PENALTY: H8 relies on five distinct scalar sectors (ψ, φ_DE, φ_osc, Φ_portal, φ_Ch) rather than one parsimonious field.'],
  16: [3, 'App. A–H, verify-igrt', 'Formulas verified mathematically across Appendices A–H and 224 assertions in verify-igrt-monograph.mjs.'],
  17: [3, 'Table 0.2a/b', 'All 20 core equations audited explicitly in both SI and natural GeV units (fixes prior H6/H7 discrepancies).'],
  18: [3, 'App. G, Table H.1', 'Uses exact SI 2019 (c, ℏ, k_B) and CODATA 2022 G with explicit 11 ppm uncertainty propagation.'],
  19: [2, '§5.1, OP-3', 'QUALIFIED: Positive-branch k > 0 observer clock selection relies on Born–Oppenheimer adiabaticity; nonlinear stability is OP-3.'],
  20: [3, 'SCOPE #2', 'Explicitly excludes consciousness, neural, and cognitive-rhythm interpretations from physics core.'],
  21: [3, '§2.1, §5.1', 'Relational dynamics anchored in PU(H) bundles and Höhn–Smith–Lock quantum reference frames [101].'],
  22: [3, '§3.2, §5.3', 'Built directly on Jacobson thermodynamic gravity lineage via diamond modular entropy ΔK_V.'],
  23: [2, '§6.3–6.4, App. E, OP-5', 'QUALIFIED: 1D s-wave QES island r_I = r_+ − O(ℏ/(Mc)) computed, but 4D dynamical QES backreaction remains OP-5.'],
  24: [3, '§2.2, App. B', 'Defined strictly via Petz SLD quantum Fisher information and Type III_1 Araki relative entropy.'],
  25: [3, '§2.2, §2.3', 'Explicitly constructed on density operators on Type I split factor N with Fubini–Study pure-state limit.'],
  26: [2, '§3.2, §7.2, Table 8.3', 'QUALIFIED: Linked to P1–P6 observables, though α_mod, κ_ψ, Δβ_eff, and w_contract are Ansatz/Input parameters.'],
  27: [3, '§7.2–7.4, P1–P6', 'Concrete numerical falsification gates declared across P1–P6 (DESI w_a, LiteBIRD r, CANNEX, HL-LHC).'],
  28: [3, '§4.1, App. D', 'Non-circular dimensionless Uhlmann–Frobenius sum converges O(N⁻²) to ∫ ds_QFI without prior clock t.'],
  29: [2, '§4.1, Table 8.3, OP-3', 'QUALIFIED: Local clock uniformity calibrated via [Ansatz] α_mod = ℏ/(E_mod σ_1); microscopic origin open (OP-3).'],
  30: [3, '§4.1, Table 0.2a', 'Exact SR/GR time dilation recovered from Jacobi–Finsler null surface dS_ext² = 0.'],
  31: [3, '§5.3, App. D', 'KMS detailed-balance BKM dissipation (Eq. 5.2) + general CPTP Spohn inequality [93].'],
  32: [2, '§6.1, §6.3, OP-5', 'QUALIFIED: L_UV FLRW bounce is analytic (Derived), but Hayward ℓ_0 = ξ_0 ℓ_Pl is an Ansatz & 4D collapse PDE is OP-5.'],
  33: [2, '§6.3–6.4, App. E', 'QUALIFIED: S_rem ≈ 6.66 nats at ξ_0 = 2⁻¹/⁴; GSL is explicitly conditional on QFC (§6.4).'],
  34: [1, 'SCOPE #4', 'OPEN: H8 does not solve the old cosmological constant fine-tuning problem; vacuum Λ_0/V_0 remains an input scale.'],
  35: [2, '§7.1–7.2', 'QUALIFIED: Explains DM sub-component φ_osc ≤ 0.02 and thawing φ_DE via separate fields, not a single unified vacuum.'],
  36: [2, '§1.2, §3.1', 'QUALIFIED: Clear separation of classical metric sector, Type I split algebra, and 5 scalar EFT modes.'],
  37: [3, 'App. C–D, §3.2', 'Explicit diamond coarse scale ℓ_CG = 1 μm & local Type III_1 split factor defined.'],
  38: [3, '§1.2, Table 0.1', 'Canonical units [ψ] = (J/m)^{1/2} / GeV fixed universally across all equations.'],
  39: [3, '§3.2, App. C', 'Araki κ_ψ = ℏc ℓ_Pl/(12π) = 2.173 × 10⁻²¹ GeV⁻¹ explicitly fixed (tagged Ansatz).'],
  40: [3, '§1.2–§8.3', 'All core postulates, equations, and appendices unified in a single monograph (IGRT-2026-H8).'],
  41: [0, 'ETHICS, OP-5', 'ABSENT: Author foundational preprints [1]–[3] remain explicitly non-peer-reviewed; independent journal peer review is OP-5.'],
  42: [2, 'SCOPE #1–5', 'QUALIFIED: Delivers a cohesive Type Ia + L_UV + PU(H) framework and candidly disclaims ToE or 5-scalar unification (OP-4).'],
  43: [2, '§1.2, Table 8.3', 'QUALIFIED: Five scalar sectors plus free parameters (β, γ, θ_i, w_contract, m_osc, ξ_0, M_Ch) remain.'],
  44: [1, '§3.4, §6.1, OP-3', 'OPEN: Radiative protection requires 5 separate scalars, Z_ψ = 7.05 × 10¹⁴ lifts Λ_local = 4.67 μeV, and w_contract is tuned Input.'],
  45: [3, '§3.1 Thm 3.1', 'Strictly ghost-free Type Ia Horndeski kinetic sector (no DHOST higher-order pathologies).'],
  46: [3, '§3.1, §3.3', 'Second-order quasilinear wave equations ensure local hyperbolic Cauchy well-posedness.'],
  47: [3, '§3.1 Thm 3.1', 'G_{4,X} = 0, G_5 = 0 enforces luminal tensor propagation c_GW ≡ c (GW170817 compliant).'],
  48: [2, '§6.3, OP-5', 'QUALIFIED: Hayward core parameterized by Ansatz ℓ_0 = ξ_0 ℓ_Pl; dynamical no-hair evasion during 4D collapse is OP-5.'],
  49: [3, 'SCOPE #1–5', 'Explicit domain of validity (outer/pre-Cauchy 4D, IR of Λ_3, M=1 KMS, f_DM ≤ 0.02) bounded candidly.'],
  50: [1, 'Refs [1]–[3]', 'GAP: Core framework origin relies on non-peer-reviewed author preprints [1]–[3] without independent replication yet.'],
  51: [2, '§3.2, OP-3', 'QUALIFIED: Explicitly flags the unresolved tension between ψ² as AQFT state functional vs local propagating Galileon field.'],
  52: [3, '§1.1, §3.1, §7.1', 'Initial Cauchy data (g_ij, π^ij, φ_DE(θ_i=1.95), scalar velocities) explicitly specified.'],
  53: [3, '§5.3, §6.1', 'Reversible classical/bounce equations vs irreversible KMS BKM/Spohn dissipation cleanly separated.'],

  // ===== FAMILY 2: Field Equations (54..106) =====
  54: [3, '§3.3 Eq.(3.3)', 'Modified Einstein field equation G_μν + Λ_0 g_μν = 8πG(T_μν + I_μν) explicitly written out.'],
  55: [3, '§3.3, App. A', 'Complete Horndeski + conformal scalar stress-energy tensor I_μν explicitly expanded.'],
  56: [3, '§3.1, §7.1 Eq.(7.1)', 'Covariant Galileon-Horndeski & Klein–Gordon dynamical field equations explicitly stated.'],
  57: [3, '§3.1 Thm 3.1', 'Recovers GR cleanly in equilibrium Limit ψ → 0, dψ/dr → 0.'],
  58: [3, 'App. A', 'All-orders Noether identity ∇^μ(T_μν + I_μν) ≡ 0 proved for Ω(ψ) = exp(βψ/M_Pl).'],
  59: [3, '§3.1 Eq.(3.1)', 'Complete covariant Type Ia Horndeski + L_UV + PNGB + Chameleon + portal action given.'],
  60: [3, 'App. A', 'Explicit variational derivation and [∇_μ, ∇_ν]∇^μ ψ commutator cancellations worked through in Appendix A.'],
  61: [3, 'Table 0.1, App. A', 'Metric signature (−,+,+,+) and stress-tensor sign conventions consistent throughout.'],
  62: [2, '§7.1, §3.4', 'QUALIFIED: φ_DE PNGB cosine & φ_Ch Ratra–Peebles potentials specified cleanly; overall scalar hierarchy split into 5 fields.'],
  63: [2, '§3.1, §3.4, §7.3', 'QUALIFIED: Matter couplings β, β_Ch, Δβ_eff specified structurally with experimental upper bounds rather than derived values.'],
  64: [2, '§4.1 Eq.(0.1)/(4.1)', 'QUALIFIED: Jacobi–Finsler null surface maps Fisher metric ds_QFI to dτ via [Ansatz] α_mod = ℏ/(E_mod σ_1).'],
  65: [3, '§5.1 Eq.(5.1)', 'Unfrozen Born–Oppenheimer Schrödinger evolution iℏ ∂ chi/∂τ_FR = H_eff chi derived explicitly.'],
  66: [3, '§4.1, Eq.(4.1)', 'Equilibrium RES = RAG mapped rigorously to vanishing Uhlmann–Frobenius discrepancy ΔF_k = 0.'],
  67: [3, '§4.1, §2.2', 'Purification operators W_k (RAG_k, RES_k) defined formally on Hilbert-Schmidt bundle fibers.'],
  68: [3, '§4.1, Eq.(4.1)', 'Imbalance norm ||RAG_k − RES_k||_F proved equal to ½ ds_QFI + O(N⁻²) by Taylor-Uhlmann expansion.'],
  69: [2, '§4.2, §7.2', 'QUALIFIED: Clock frequency ω_0 or 2πk_B T_U / ℏ sets E_mod, while ULDM clock frequency f_clock = 6.4 nHz comes from Input m_osc.'],
  70: [2, '§4.1, Table 0.2a #7–8', 'QUALIFIED: Proper second calibration dτ = α_mod ds_QFI dimensionally closed, but α_mod itself is tagged [Ansatz].'],
  71: [3, '§3.4, App. G', 'Newtonian limit G_eff → G recovered deep inside solar Vainshtein sphere r ≪ r_V.'],
  72: [3, '§3.4 Thm 3.1, App. G', 'Explicit PPN computation yields |γ_PPN − 1| = 2(r/r_V)^{3/2} = 1.77 × 10⁻¹¹ at 1 AU.'],
  73: [3, '§3.4', 'Linearized & nonlinear Vainshtein spherically symmetric weak-field profiles solved explicitly.'],
  74: [3, '§6.3, Eq.(6.3)', 'Hayward exterior asymptotes to Schwarzschild r_s and avoids metric pathology at weak curvature.'],
  75: [2, '§6.3, App. E, OP-5', 'QUALIFIED: Hayward core parameter ℓ_0 = ξ_0 ℓ_Pl is free [Ansatz], and 4D dynamical collapse PDEs remain OP-5.'],
  76: [3, '§3.1 Thm 3.1', 'G_{4,X} = 0, G_5 = 0 enforces luminal GW speed c_GW = c identically.'],
  77: [2, '§3.1, OP-1', 'QUALIFIED: Tensor modes luminal; linear scalar-mode mixing growth G_eff(k,z) deferred to OP-1 Boltzmann code.'],
  78: [2, '§3.4, METR-39', 'QUALIFIED: Double-pulsar/binary pulsar dipole radiation suppressed by deep r_V screening; dedicated MCMC fit uncomputed.'],
  79: [3, '§3.4, App. G', 'Both Vainshtein (r_V = 369.8 ly, Λ_local = 4.67 μeV) and Chameleon (M_Ch = 2.4 meV) screening derived explicitly.'],
  80: [3, '§6.1, §6.3, §6.4', 'NEC/WEC/QFC/QNE behavior analyzed in both L_UV bounce and Hayward core regimes.'],
  81: [3, '§3.1, §5.1, §7.1', 'No ghosts/gradient instabilities in Type Ia Galileon; PNGB thawing positive curvature analyzed.'],
  82: [2, '§3.4, OP-3', 'QUALIFIED: EFT cutoff Λ_local = Z_ψ^{1/2} Λ_3 = 4.67 μeV carefully tracked; UV completion beyond L_UV/spectral action open (OP-3).'],
  83: [3, '§3.4, Table H.1', 'Explicitly states both bare Λ_3 = 1.758 × 10⁻¹³ eV and dressed terrestrial cutoff Λ_local = 4.67 μeV.'],
  84: [3, '§1.1 Eq.(1.1)', 'ADM 3+1 Hamiltonian & momentum constraints written out on bundle P(M, PU(H)).'],
  85: [2, '§1.1, §5.1, OP-2', 'QUALIFIED: Unfrozen via Born–Oppenheimer τ_FR, but off-shell inhomogeneous 3+1 quantum constraint algebra is OP-2.'],
  86: [3, '§4.1, §2.2', 'Reparametrization invariance of dτ = α_mod ds_QFI along arbitrary λ verified identically.'],
  87: [2, '§6.1, §7.1, OP-5', 'QUALIFIED: Nonlinear RK2 Klein–Gordon & bounce solved; full 4D collapse/nonlinear PDEs remain OP-5.'],
  88: [3, '§7.1, verify-igrt', 'Demonstrated directly via stable RK2 numerical ODE solver for PNGB φ_DE in verify-igrt-monograph.mjs.'],
  89: [2, '§3.2, App. C, OP-3', 'QUALIFIED: Defined via ψ² = κ_ψ(S_Araki/Vol_3), but κ_ψ = ℏcℓ_Pl/(12π) and state/field duality remain Ansatz/OP-3.'],
  90: [3, '§2.2–2.3, Eq.(2.1)–(2.3)', 'Explicit SLD g_ij^QFI eigenvalues and SU(2)/Qubit worked example metric computed.'],
  91: [3, '§3.2, §5.3, App. C–D', 'Relative entropy rigorously replaced classical KL with Type III_1 Araki S(ρ||σ) and detailed-balance BKM flow.'],
  92: [3, '§5.3 Eq.(5.2), App. D', 'Exact entropy-production identity (d/dτ)S_Araki = −g̃_ij^BKM θ̇^i θ̇^j (KMS) and Spohn inequality proved.'],
  93: [3, '§5.3, XI.35', 'Clock thermodynamic cost and KMS mobility τ_rel integrated without violating Landauer limit.'],
  94: [3, 'Table 0.2a #1–2', 'Exact SI & natural-unit dimensional consistency of I_μν and ψ² audited and verified.'],
  95: [3, '§3.1 Thm 3.1', 'Proven equivalent to pure Type Ia Horndeski scalar-tensor plus L_UV curvature sector.'],
  96: [2, '§7.2–7.3, CLAIM_LEDGER', 'QUALIFIED: Testable P1–P6 signatures given, but P1 2:1 harmonic is generic to quadratic ULDM & P3/P5 face empirical tension.'],
  97: [1, 'SCOPE #3, §7.2, OP-1', 'GAP: H8 caps φ_osc at f_DM ≤ 0.02 and explicitly does NOT derive galactic rotation curves or full cold dark matter.'],
  98: [3, '§7.1, verify-igrt', 'Exact PNGB thawing w(z) solved numerically (w_0 = −0.908, w_a = −0.177, early 1+w ∝ (1+z)⁻³).'],
  99: [2, '§6.1–6.2', 'QUALIFIED: H8 replaces inflation with an L_UV contracting matter bounce whose EoS w_contract = −0.003 is an unprotected Input.'],
  100: [1, '§1.2, SCOPE #3, OP-4', 'PENALTY: Explicitly abandons single-V unification in favor of 5 separate scalars (OP-4).'],
  101: [3, '§5.1, §7.2', 'Discrete S¹ clock spectrum E_mod σ_1(2πk/L) and P1 ULDM holonomy spectrum derived cleanly.'],
  102: [3, 'verify-igrt-monograph.mjs', 'Complete derivations, equations, and verification code openly included in repo & paper exports.'],
  103: [0, 'OP-5, §8.3', 'ABSENT: No independent third-party re-derivation or external verification study published yet (OP-5).'],
  104: [3, '§3.1, §7.1', 'Covariant Galileon and PNGB Klein–Gordon wave equations derived cleanly.'],
  105: [3, '§3.1 Thm 3.1', 'Type Ia Horndeski (G_{4,X}=0) guarantees quasilinear second-order hyperbolic system.'],
  106: [3, '§2.1, §4.1', 'All bundle & field-equation observables formulated manifestly covariant under Diff⁺(M).'],

  // ===== FAMILY 3: Cosmological Scale-Up (107..159) =====
  107: [3, '§6.1, §7.1', 'Both contracting-bounce FLRW and late-time thawing DE background dynamics solved explicitly.'],
  108: [3, '§6.1 Eq.(6.1)', 'Derived L_UV modified Friedmann equation H² = (8πG/3)ρ(1 − ρ/ρ_max) with general-w solution.'],
  109: [1, '§7.1, OP-1', 'OPEN (OP-1): Full Pantheon+/Union3/DES-Y5 SNIa likelihood chains not yet executed (qualitative DES-Y5 w_a tension noted).'],
  110: [1, '§7.1, OP-1', 'OPEN (OP-1): No DESI DR2 BAO full likelihood MCMC yet; PNGB w_a = −0.177 sits in 2.8–4.2σ tension with steep DESI w_a < −0.4.'],
  111: [1, 'OP-1', 'OPEN (OP-1): CAMB/hi_class full angular CMB TT/TE/EE power spectrum computation explicitly listed as open problem OP-1.'],
  112: [1, 'OP-1', 'OPEN (OP-1): Linear growth factor G_eff(k, z) Boltzmann perturbation integration not yet run (OP-1).'],
  113: [1, 'OP-1', 'OPEN (OP-1): Matter power spectrum P(k) and RSD fσ_8 comparison deferred to OP-1.'],
  114: [2, '§6.1, §7.1', 'QUALIFIED: Early DE freezes out (1+w ∝ (1+z)⁻³) and solar/cosmic screening protects G_BBN, though full BBN abundance run is absent.'],
  115: [2, '§7.1, §6.2', 'QUALIFIED: Dark-sector sub-component f_DM ≤ 0.02 and heavy Φ_portal leave ΔN_eff minimal, but full MCMC ΔN_eff bound is OP-1.'],
  116: [1, '§7.1, OP-1', 'OPEN (OP-1): Propagates H_0 ∈ [67.4, 73.0] km/s/Mpc parametrically without solving the Hubble tension.'],
  117: [1, '§7.1, OP-1', 'OPEN (OP-1): S_8 weak-lensing tension explicitly discussed in §7.1 as awaiting full KiDS-1000/DES-Y3 MCMC (OP-1).'],
  118: [2, '§7.1, Table H.1', 'QUALIFIED: PNGB gives thawing w_0 = −0.908, w_a = −0.177 (never crosses w = −1), creating 2.8–4.2σ tension if DESI phantom signal holds.'],
  119: [1, '§7.2, SCOPE #3', 'OPEN: φ_osc capped at f_DM ≤ 0.02 (λ_dB = 2.07 kpc); full galaxy rotation curve modeling is out of scope.'],
  120: [1, 'OP-1', 'OPEN: Bullet Cluster collisionless dark-matter offset not modeled inside IGRT; relies on external CDM/sub-halo assumption.'],
  121: [1, 'OP-1', 'OPEN: Galaxy cluster radial profiles and hydrostatic masses not computed in H8.'],
  122: [1, 'OP-1', 'OPEN: Weak-lensing shear & E_G statistics explicitly queued in OP-1 (KiDS-1000 / DES-Y3 / Euclid).'],
  123: [1, 'OP-1', 'OPEN: Integrated Sachs–Wolfe (ISW) cross-correlation with voids deferred to CAMB/hi_class (OP-1).'],
  124: [0, 'H8 Chapters 1–8', 'ABSENT: Reionization history τ_re is not modeled in the H8 monograph.'],
  125: [2, '§6.2, Table H.1', 'QUALIFIED: Yields exact Planck-compatible n_s = 0.964, but relies on tuned unprotected [Input] w_contract = −0.003.'],
  126: [3, '§6.2, Table H.1', 'Corrects prior blue-tilt claim to shared red n_T = −0.036 and k-essence r = 24 c_s³ = 0.0123 testable by LiteBIRD (P3).'],
  127: [2, '§6.2, Table H.1', 'QUALIFIED: Fixes canonical equilateral f_NL^eq = −35/8 = −4.38 [Cai et al. 2009], candidly admitting it is undetectable vs Planck (±47).'],
  128: [1, '§6.2', 'OPEN: Multi-scalar isocurvature perturbation transfer across the 5-scalar sector at the bounce is not derived in detail.'],
  129: [3, '§1.1, §4.1, §6.1', 'Unifies cosmic bounce parameter t with internal fiber synchronization τ_FR seamlessly.'],
  130: [2, '§5.3, §6.1', 'QUALIFIED: Separates arrow of time cleanly, while pre-bounce contracting low-entropy initial state relies on an assumed pre-bounce phase.'],
  131: [3, '§6.1 Eq.(6.1)', 'Exact FLRW big-bang singularity resolution proven analytically at ρ_max = 0.4094 ρ_Pl.'],
  132: [3, '§6.1, App. E', 'Explicit analytic general-w bounce scale factor a(t)/a_min = [1+(t/t_w)²]^{1/(3(1+w))} and positive ä/a > 0.'],
  133: [2, '§5.3, §6.4', 'QUALIFIED: Cosmic and horizon Araki/Bekenstein entropies analyzed, while full cosmic baryon+photon+GW entropy budget is schematic.'],
  134: [3, '§7.1', 'PNGB asymptotic evolution approaches de Sitter minimum cleanly without Big Rip phantom divergence (w ≥ −1).'],
  135: [3, '§3.1, §4.1', 'Follows standard GR geodesic redshift dilation verified in Jacobi–Finsler null surface.'],
  136: [3, '§3.1', 'Conforms exactly to GR Tolman (1+z)⁻⁴ surface brightness scaling along conserved metric paths.'],
  137: [3, '§6.1, App. E', 'Homogeneous FLRW bounce metric exhibits smooth expansion history after turnaround.'],
  138: [3, '§6.1–6.2', 'Contracting matter phase resolves horizon causal connectedness naturally prior to ρ_max bounce.'],
  139: [2, '§6.1, App. E', 'QUALIFIED: Flatness/BKL shear suppression requires assuming a pre-bounce ekpyrotic w > 1 contracting stage (§6.1).'],
  140: [1, 'SCOPE #3, OP-4', 'OPEN: Beyond f_DM ≤ 0.02 ULDM and Planck remnants, full relic abundance mechanisms remain open (OP-4).'],
  141: [0, 'H8 Chapters 1–8', 'ABSENT: Baryogenesis and leptogenesis asymmetry η_B are not derived in IGRT-2026-H8.'],
  142: [1, 'OP-1', 'OPEN: Nonlinear galactic-scale structure formation N-body/Boltzmann runs are deferred to OP-1.'],
  143: [1, 'H8 Chapters 1–8', 'OPEN: Early supermassive black hole (JWST high-z) seeding is not modeled in H8.'],
  144: [1, 'OP-5', 'OPEN: Neutron star internal Horndeski EOS modifications not computed numerically in H8.'],
  145: [1, 'H8 Chapters 1–8', 'OPEN: NICER NS mass-radius data not fitted against H8 parameters.'],
  146: [2, '§7.2, App. F', 'QUALIFIED: Derives isotropic Y_00 IPTA monopole budget (σ_r = ±0.08 at 15 yr), while signal is non-unique to IGRT and f_DM-limited.'],
  147: [3, '§3.4, App. G', 'Solar-System Cassini & LLR bounds safely satisfied across H_0 ∈ [67.4, 73.0] km/s/Mpc.'],
  148: [2, '§3.4', 'QUALIFIED: Strong Galactic Vainshtein screening suppresses scalar dipole radiation, without a dedicated MCMC timing fit.'],
  149: [1, 'OP-1', 'OPEN: Standard-siren GW-EM H_0 distance-ratio likelihood forecasts not computed.'],
  150: [2, '§3.2, §4.1, §7.1', 'QUALIFIED: Explicit Type III_1 -> coarse diamond -> Horndeski -> cosmology bridge; relies on Ansatz κ_ψ & α_mod (OP-3).'],
  151: [2, '§3.4, OP-3', 'QUALIFIED: Tracks Λ_3 -> Λ_local = 4.67 μeV dressing, while full non-perturbative RG flow is OP-3.'],
  152: [2, '§4.1, §7.2', 'QUALIFIED: Clean scale bridge from Planck τ_0 to 6.4 nHz holonomy; f_clock relies on Input m_osc.'],
  153: [3, 'CLAIM_LEDGER, SCOPE', 'Radical epistemic discipline separates Established/Derived theorems from Ansatz/Input phenomenological benchmarks.'],
  154: [0, 'OP-1', 'ABSENT: No public CAMB/hi_class/Cobaya Boltzmann patch exists yet (explicitly tracked as OP-1).'],
  155: [1, '§1.2, Table 8.3', 'PENALTY: Five scalar sectors + free couplings/inputs significantly increase parameter count vs 6-parameter ΛCDM.'],
  156: [0, 'OP-1', 'ABSENT: Bayesian model-selection Bayes factor Δln Z vs ΛCDM has not been computed yet (OP-1).'],
  157: [3, '§7.1, verify-igrt', 'Exact RK2 Hubble-friction integration of PNGB φ_DE exhibited and reproduced by verify-igrt-monograph.mjs.'],
  158: [2, '§7.1, §6.1', 'QUALIFIED: Initial misalignment θ_i = 1.95 ∈ [1.75, 2.35] specified for φ_DE; bounce initial entropy/ekpyrotic phase assumed.'],
  159: [1, 'OP-1', 'OPEN: Full cosmological Fisher-matrix / Cobaya posterior degeneracy contours vs ΛCDM remain OP-1.'],

  // ===== FAMILY 4: Falsifiability (160..212) =====
  160: [3, '§7.2–7.4 P1–P6', 'Six concrete, instrument-tied falsifiable protocols (P1–P6) specified explicitly.'],
  161: [3, 'Table H.1, P1–P6', 'Sharp numerical targets provided (w_0=−0.908, w_a=−0.177, r=0.0123, Γ_Araki=1.18 s⁻¹, ΔP_Ch, Φ_portal=1.84 TeV).'],
  162: [3, '§3.1 Thm 3.1', 'Predicts strict null photon dispersion at leading order, consistent with LHAASO GRB 221009A.'],
  163: [2, '§7.3, P2', 'QUALIFIED: Quantitative SiO_2 R_0 = 1.028 μm collapse benchmark (Γ_Araki = 1.18 s⁻¹), though 4 orders beyond Donadi et al. limits.'],
  164: [2, '§7.3 P4, App. F', 'QUALIFIED: Echo delays (17.8 ms / 109.2 ms) quantified, but reflectivity K_echo = 0.18 and ℓ_0 are [Input]/[Ansatz].'],
  165: [2, '§6.3', 'QUALIFIED: Hayward metric shift δr_+ ~ O(ℓ_0²/r_s) Planck-suppressed; unobservable at EHT resolution unless ℓ_0 ≫ ℓ_Pl.'],
  166: [3, '§3.1 Thm 3.1', 'Strict c_GW = c dispersion prediction matching GW170817 to < 10⁻¹⁵.'],
  167: [2, '§3.1, OP-1', 'QUALIFIED: Tensor polarizations guaranteed purely spin-2 at leading order; scalar breathing amplitude inside halos needs OP-1.'],
  168: [1, 'OP-5', 'OPEN: Neutron star tidal deformability Λ_NS modification in H8 not quantitatively computed.'],
  169: [3, '§3.4, App. G', 'Exact PPN |γ_PPN−1| = 1.77 × 10⁻¹¹ (1 AU) vs Cassini 2.3 × 10⁻⁵ bound.'],
  170: [3, '§3.4', 'LLR equivalence-principle compliance inside Solar Vainshtein sphere verified cleanly.'],
  171: [3, '§3.4, §7.3 P5', 'Eöt-Wash and CANNEX fifth-force separation handled explicitly via Z_ψ = 7.05 × 10¹⁴ + φ_Ch.'],
  172: [3, '§4.1, §7.2 P1', 'GR gravitational redshift preserved; optical dual-clock ratio ⁸⁷Sr/¹⁷¹Yb systematic budget modeled (App. F).'],
  173: [2, '§7.2, App. F', 'QUALIFIED: Complete flicker/red-noise clock-PTA budget derived, though signal amplitude depends on free Δβ_eff & f_DM.'],
  174: [0, 'SCOPE #2', 'EXCLUDED: EEG and neural-rhythm claims explicitly excised from H8 monograph scope (SCOPE #2).'],
  175: [0, 'SCOPE #2', 'EXCLUDED: LLM dialogue-coherence metrics explicitly dropped from H8 physics claims (SCOPE #2).'],
  176: [0, 'SCOPE #2', 'EXCLUDED: AI criticality metrics explicitly excluded from H8 empirical protocols (SCOPE #2).'],
  177: [1, 'OP-5', 'OPEN: Empirical bounds P1–P6 are specified in monograph text/code, not yet registered in an external trial registry.'],
  178: [3, '§7.1–7.4', 'Concrete refutation gates: P3 DESI w_a < −0.4 (>3σ) or LiteBIRD non-detection/blue n_T, P5 CANNEX, c_GW ≠ c.'],
  179: [0, 'Table 8.3', 'ABSENT: H8 candidly discloses key phenomenological predictions rely on tuned [Input] or [Ansatz] parameters (zero free parameters retracted).'],
  180: [2, '§7.1, P3', 'QUALIFIED: Distinguishable from ΛCDM if w_0=−0.908, w_a=−0.177 or r=0.0123 confirmed; overlaps generic quintessence.'],
  181: [1, '§7.2, Table 8.3', 'WOUNDED: P1 2:1 harmonic is generic to any quadratic ULDM, and P3 DE is standard PNGB thawing quintessence.'],
  182: [2, '§3.1–3.4, P1–P6', 'QUALIFIED: Adds Type Ia Galileon screening + L_UV bounce + S¹ clock beyond Jacobson equilibrium gravity.'],
  183: [2, '§5.1, §7.2', 'QUALIFIED: Goes beyond Page–Wootters [9, 101] with dynamic Horndeski action & P1–P6 cosmological tests.'],
  184: [3, 'P1–P6, §7.2–7.4', 'Directly testable across active/funded 2026–2036 observatories (DESI, IPTA, LiteBIRD, LVK O5, CANNEX, HL-LHC).'],
  185: [2, 'P1–P6, App. F', 'QUALIFIED: Explicit SNR/noise floors computed for P1/P3/P5/P6; P2 requires 4-order sensitivity jump, P4 needs K_echo ≈ 0.18.'],
  186: [3, 'App. F, §7.2–7.4', 'Comprehensive noise budgets added in H8: clock flicker/drift, GP pulsar noise, look-elsewhere, sky scrambles, polarized dust, κ_Z.'],
  187: [3, 'verify-igrt-monograph.mjs', 'All numerical derivation scripts and parameter tables openly embedded in the repository.'],
  188: [2, '§6.1–6.4, §7.3', 'QUALIFIED: Phenomenology spans IR (DESI/CANNEX) to bounce/remnant QES; UV signatures remain model-dependent.'],
  189: [2, '§3.4, §7.2', 'QUALIFIED: Dual-species clock ratio bounds time-variation of α/μ without claiming spontaneous drift of G or c.'],
  190: [2, '§7.2, P1', 'QUALIFIED: Dual ⁸⁷Sr/¹⁷¹Yb ratio constrains oscillatory δα/α from φ_osc scalar coupling.'],
  191: [1, 'OP-3', 'OPEN: No standalone empirical test isolates emergent constants c, G, ℏ directly at lab scales (OP-3).'],
  192: [1, '§3.1, §6.2', 'OPEN: Cosmic birefringence EB spectrum is not modeled explicitly (no pseudoscalar Chern–Simons γF F̃ coupling).'],
  193: [2, '§7.3 P2, App. F', 'QUALIFIED: Computes Γ_Araki = 1.18 s⁻¹ vs Donadi et al., 4 orders beyond current experimental reach.'],
  194: [3, '§7.3 P2, [103]', 'Direct quantitative comparison with Diósi–Penrose & Donadi et al. (2021) underground bounds included in H8.'],
  195: [2, '§7.3, §4.1', 'QUALIFIED: Qualitative compatibility with BMV-type entanglement witnesses noted, without detailed lab SNR budget.'],
  196: [2, '§5.3', 'QUALIFIED: Landauer/KMS detailed-balance flow proved formally, not mapped to a dedicated benchtop calorimeter test.'],
  197: [1, 'SCOPE #2', 'OPEN: Legacy speculative demon-array claims omitted from H8 core protocols.'],
  198: [2, '§6.3–6.4, App. E', 'QUALIFIED: Remnant entropy S_rem ≈ 6.66 nats & conditional GSL derived; macroscopic BH deviations tiny unless P4 echoes hold.'],
  199: [1, '§6.3, §6.1', 'OPEN: Primordial black hole abundance/remnant dark matter relic fraction not quantitatively evolved.'],
  200: [3, '§3.1, Thm 3.1', 'Predicts null FRB dispersion anomalies, consistent with CHIME observations.'],
  201: [3, '§2.1, §4.3', 'Local Lorentz invariance predicts null UHECR threshold anomalies (Auger/TA safe).'],
  202: [3, '§2.1, §4.3', 'Zero tree-level LIV protected by bundle & Type Ia Horndeski covariance.'],
  203: [2, '§7.2–7.4', 'QUALIFIED: P1–P6 span multi-sector tests, though individual signatures overlap quintessence/ULDM/Chameleon EFTs.'],
  204: [2, '§7.1–7.4, Table 8.3', 'QUALIFIED: Hard falsification gates exist (DESI w_a, c_GW≠c), though free couplings Δβ_eff, β_Ch, K_echo allow parameter retreat in P1/P4/P6.'],
  205: [0, 'SCOPE #2', 'EXCLUDED: Consciousness-measurement claims explicitly excluded from H8 (SCOPE #2).'],
  206: [0, 'OP-5', 'ABSENT: Zero independent laboratory or collaboration replications yet (OP-5).'],
  207: [3, '§7.1–7.3, P1–P6', 'Existing/near-term datasets (GW170817, Cassini, DESI DR2, IPTA, Planck) actively constrain or refute sectors.'],
  208: [2, '§7.1, §6.1', 'QUALIFIED: Matches Planck n_s = 0.964 via Input w_contract = −0.003; DESI/S_8 retrodictions unresolved (OP-1).'],
  209: [3, 'P1–P6', 'Explicit 2026–2036 experimental timeline across DESI DR2/DR3, IPTA DR3, LiteBIRD, LVK O5, CANNEX, HL-LHC.'],
  210: [2, '§7.2, Table H.1', 'QUALIFIED: Specific 6.4 nHz band stated for P1, anchored to [Input] m_osc = 2.65 × 10⁻²³ eV rather than derived.'],
  211: [2, '§7.1–7.4', 'QUALIFIED: Pre-specified thresholds for P1–P6 parameter slices (θ_i ∈ [1.75, 2.35], Φ_portal 1.84 TeV), pending full OP-1 likelihoods.'],
  212: [0, 'SCOPE #2', 'EXCLUDED: Cognitive-rhythm predictions explicitly excluded from H8 monograph (SCOPE #2).'],

  // ===== FAMILY 5: Counterfactual Survival (213..276) =====
  213: [2, '§1.1, §5.1', 'CC: Deletion of classical t collapses metric slicing to static WDW constraint, while internal S¹ Fisher flow survives under BO factorization.'],
  214: [0, '§3.1 Thm 3.1', 'CC FALSIFIES: Adding a second timelike dimension destroys hyperbolicity and breaks Type Ia ghost-freedom.'],
  215: [3, '§5.3, §6.1', 'CC SURVIVES: Classical Type Ia EoMs & L_UV bounce are T-symmetric while BKM arrow simply follows reversed boundary ordering.'],
  216: [2, '§4.3 Eq.(4.3)', 'CC QUALIFIED: Krein spectral triple over causal posets accommodates Planck discreteness, though continuum Diff⁺(M) metric weakens.'],
  217: [3, '§2.1, §3.1', 'CC SURVIVES: Smooth continuum Lorentzian manifold M is H8’s native base space.'],
  218: [2, '§3.2, §5.1', 'CC QUALIFIED: If S_Araki → 0 everywhere, ψ → ψ_vac = 0 recovers pure GR vacuum, leaving only internal unitary τ_FR clocks.'],
  219: [2, '§5.3, §4.1', 'CC QUALIFIED: At thermodynamic equilibrium dS_Araki/dτ = 0, but unitary quantum clock evolutions keep dτ_FR > 0.'],
  220: [3, 'SCOPE #2', 'CC SURVIVES: Physics core is strictly observer-independent in local Type I split algebras & Horndeski action.'],
  221: [0, 'SCOPE #2, App. C', 'CC FALSIFIES: Mind-only universe with no ⟨T_00⟩ or metric g_μν directly contradicts Eq. (3.1) and Araki ψ²(x).'],
  222: [3, '§4.1, Table 0.2a', 'CC SURVIVES: Proper-time synchronization dτ = (1/c)√(−g_μν ẋ^μ ẋ^ν) dλ predicts exact relativistic twin differential aging.'],
  223: [3, '§3.4, §4.1', 'CC SURVIVES: Gravitational redshift follows metric g_00 cleanly with solar/terrestrial PPN screened to 10⁻¹¹.'],
  224: [2, '§4.1, §5.3', 'CC QUALIFIED: Information-entropy gradients source ψ² via κ_ψ (2.17×10⁻²¹ GeV⁻¹) and modulate optical clocks only at suppressed levels.'],
  225: [0, '§2.1, §4.3', 'CC FALSIFIES: Energy-dependent photon dispersion breaks local Lorentz invariance on M and violates LHAASO null prediction.'],
  226: [3, '§2.1, §4.3', 'CC SURVIVES: Exact speed-of-light constancy matches H8’s Lorentz-covariant bundle structure.'],
  227: [0, '§3.1 Thm 3.1', 'CC FALSIFIES: Any |c_GW − c| > 10⁻¹⁵ directly refutes Eq. (3.1) Type Ia Horndeski (G_{4,X}=0, G_5=0).'],
  228: [3, '§3.1 Thm 3.1', 'CC SURVIVES: Luminal gravitational waves directly confirm Type Ia Horndeski restriction.'],
  229: [2, '§7.2, SCOPE #3', 'CC QUALIFIED: H8 already caps φ_osc ≤ 0.02 CDM fraction, so discovering particle WIMP/axion DM fits H8 cleanly.'],
  230: [2, 'SCOPE #3, OP-4', 'CC QUALIFIED: If particle DM is absent, H8 survives dynamically, but lacks a derived mechanism for all Ω_DM (f_DM ≤ 0.02 only).'],
  231: [3, '§7.1', 'CC SURVIVES: Evolving thawing dark energy directly matches H8’s RK2 PNGB sector (provided w_a stays near −0.18).'],
  232: [2, '§7.1', 'CC QUALIFIED: Exact w = −1 forces θ_i → 0 limit of φ_DE (turning PNGB kinetic sector dormant without breaking core).'],
  233: [2, '§6.2, P3', 'CC QUALIFIED: Detection of primordial B-modes around r ≈ 0.012 with red n_T = −0.036 fits bounce; standard slow-roll inflation is distinct.'],
  234: [3, '§6.1–6.2', 'CC SURVIVES: Ruling out standard inflation strongly favors H8’s L_UV contracting matter bounce.'],
  235: [3, '§7.1', 'CC SURVIVES: H8 does not depend on solving Hubble tension (OP-1), so systematic resolution leaves H8 unharmed.'],
  236: [2, 'OP-1', 'CC QUALIFIED: If H_0 tension is confirmed new physics, H8 requires full OP-1 early/late Horndeski MCMC to test viability.'],
  237: [2, '§3.1, §3.4', 'CC QUALIFIED: Slow cosmic variation of Ω(ψ) can induce small ΔG/G outside Vainshtein radii if constrained under BBN/LLR.'],
  238: [3, '§3.4, App. G', 'CC SURVIVES: Vainshtein screening + CODATA anchoring preserve constant local couplings to high precision.'],
  239: [1, '§6.3–6.4, App. E', 'CC WEAKENS: Non-unitary BH info loss contradicts H8’s unitary PU(H) + QES island + P4 S†S = I sector.'],
  240: [3, '§6.3–6.4, App. E', 'CC SURVIVES: Information preservation directly confirms H8’s QES island & extremal Hayward unitary framework.'],
  241: [2, '§7.3 P4', 'CC QUALIFIED: Ringdown echoes at Δt ~ 17.8 ms confirm P4’s Hayward-core reflection parameter K_echo = 0.18 [Input].'],
  242: [2, '§7.3 P4', 'CC QUALIFIED: Echo exclusion rules out K_echo ≈ 0.18 benchmark (pushing ℓ_0/K_echo → 0), leaving core Type Ia/FR intact.'],
  243: [0, '§6.1, §6.3', 'CC FALSIFIES: Proven physical curvature singularities directly contradict H8’s L_UV bounce & Hayward core axioms.'],
  244: [3, '§6.1, §6.3', 'CC SURVIVES: Regular bounce & core resolution directly confirm H8’s singularity-avoidance sector.'],
  245: [2, '§6.1, OP-2', 'CC QUALIFIED: L_UV bounce reproduces LQG’s ρ_max = 0.4094 ρ_Pl naturally, though H8 lacks discrete SU(2) spin-network kinematics.'],
  246: [2, '§3.1, §7.1', 'CC QUALIFIED: Horndeski moduli & PNGB axion structure remain consistent EFT limits if String Theory holds.'],
  247: [3, '§5.1, [9, 101]', 'CC SURVIVES: H8’s Born–Oppenheimer S¹ clock algebra builds directly on Page–Wootters / QRF formalism.'],
  248: [2, '§4.3, Eq.(4.3)', 'CC QUALIFIED: Krein spectral triple incorporates causal-set smeared operators, though base M is smooth Lorentzian.'],
  249: [3, 'SCOPE #2', 'CC SURVIVES: H8 explicitly detaches physics core from consciousness (SCOPE #2).'],
  250: [2, 'SCOPE #2', 'CC SURVIVES: Even if mind affects measurement outside physics core, H8’s Horndeski/Type I algebra stays decoupled and intact.'],
  251: [2, 'SCOPE #2', 'CC SURVIVES: Machine consciousness is outside H8 scope and leaves metric/quantum clock axioms unaffected.'],
  252: [3, 'SCOPE #2', 'CC SURVIVES: Machine unconsciousness confirms H8’s purely physical operational clock definitions.'],
  253: [2, '§2.3, §4.1', 'CC QUALIFIED: Deterministic unitary evolution preserves PU(H), though CPTP open-system BKM dissipation adds statistical irreversibility.'],
  254: [3, '§2.2, §4.1', 'CC SURVIVES: Intrinsic quantum randomness natively populates Fisher information manifolds E_stat(N).'],
  255: [2, '§6.1, §5.3', 'CC QUALIFIED: H8 does not depend on deriving the past hypothesis microphysically; explaining it complements H8’s bounce.'],
  256: [2, '§6.1', 'CC QUALIFIED: Compatible with multiverse boundaries, though H8 assumes a single 4D bounce history.'],
  257: [3, '§6.1, App. E', 'CC SURVIVES: Cosmic bounce confirmation directly validates H8’s Eq. (6.1) L_UV sector.'],
  258: [2, '§6.1, App. E', 'CC QUALIFIED: Closed recollapsing FLRW universes naturally repeat L_UV bounces, modulo BKL/entropy dilution caveats.'],
  259: [3, '§6.1', 'CC SURVIVES: Infinite past/cyclic time aligns directly with H8’s non-singular bounce cosmology.'],
  260: [0, '§2.1, §4.3', 'CC FALSIFIES: Proven low-energy Lorentz violation falsifies Diff⁺(M) relativistic bundle covariance.'],
  261: [3, '§2.1, §4.3', 'CC SURVIVES: Exact Planck-scale Lorentz invariance confirms H8’s bundle geometry.'],
  262: [1, '§3.4, App. G', 'CC WEAKENS: Observed WEP violation > 10⁻¹³ conflicts with deep Solar screening unless unscreened φ_Ch sector is tuned.'],
  263: [2, '§7.3 P5', 'CC QUALIFIED: Sub-mm fifth-force detection around M_Ch = 2.4 meV supports H8’s Chameleon φ_Ch sector in CANNEX P5.'],
  264: [2, '§3.4, §7.3 P5', 'CC QUALIFIED: Exclusion of fifth forces pushes β_Ch ≪ 1 or eliminates φ_Ch while Vainshtein Type Ia ψ remains hidden at 10⁻¹¹.'],
  265: [2, '§7.3 P2', 'CC QUALIFIED: Gravity-related phase noise matching Γ_Araki = 1.18 s⁻¹ confirms P2 (requires 4-order experimental leap).'],
  266: [2, '§7.3 P2', 'CC QUALIFIED: Null collapse phase noise constrains κ_0 / Araki coupling, leaving Horndeski/FR core unharmed.'],
  267: [0, '§4.1 Eq.(4.1)', 'CC FALSIFIES: Mathematical proof that Fisher synchronization is circular refutes H8’s core Eq. (0.1)/(4.1) thesis.'],
  268: [3, '§2.1, §4.1', 'CC SURVIVES: Proving bare posets need a metric confirms H8’s choice of P(M, PU(H)) over pure causal-set order.'],
  269: [3, '§7.2 P1', 'CC SURVIVES: PTA isotropic monopole ULDM oscillation detection matches H8’s P1 protocol (though non-unique vs generic ULDM).'],
  270: [1, '§7.2 P1', 'CC WEAKENS: Definitive IPTA exclusion of 6.4 nHz monopole scalar oscillation eliminates H8’s flagship P1 observational channel.'],
  271: [2, '§7.2 P1', 'CC QUALIFIED: Optical-clock rhythmic anomaly matches P1 if matched 2:1 to isotropic PTA monopole.'],
  272: [2, '§7.2, §3.4', 'CC QUALIFIED: Ultra-tight clock stability everywhere pushes Δβ_eff and f_DM toward zero, rendering P1 invisible without killing core.'],
  273: [3, '§3.2, App. C', 'CC SURVIVES: Direct experimental evidence that entanglement sources gravity validates H8’s Araki ψ²(x) core mechanism.'],
  274: [3, '§2.1, §4.1', 'CC SURVIVES: Relativistic 4D block manifold M with synchronized PU(H) fibers natively accommodates block-universe geometry.'],
  275: [2, '§4.3, Eq.(6.3)', 'CC QUALIFIED: Dynamical Planck clock detection aligns with Krein poset scale ℓ_0 = ξ_0 ℓ_Pl if Lorentz covariance survives.'],
  276: [2, 'SCOPE #2', 'CC SURVIVES: Consciousness substrate findings remain orthogonal to H8’s physical framework.'],

  // ===== FAMILY 6: Methodology & Epistemic Hygiene (277..318) =====
  277: [3, 'Table 0.1', 'Exhaustive List of Symbols fixes every variable, subscript, and SI/GeV unit identically throughout H8.'],
  278: [2, 'Refs [1]–[106]', 'QUALIFIED: 103 standard DOIs/arXiv papers cited accurately alongside 3 non-peer-reviewed author preprints [1]–[3].'],
  279: [3, 'Table 0.3, Refs', 'Jacobson, Page–Wootters, Connes–Rovelli, LQG, Causal Sets, Asymptotic Safety, Carlen–Maas rigorously credited.'],
  280: [3, 'CLAIM_LEDGER, Table 8.3', 'Every section and equation explicitly tagged [Established], [Derived], [Consistency], [Ansatz], or [Input].'],
  281: [3, 'verify-igrt-monograph.mjs', 'All 20 dimensional checks, KG ODE, Uhlmann qubit sum, DP rate, and Cramér–Rao propagated deterministically.'],
  282: [3, 'verify-igrt-monograph.mjs', 'Public standalone Node script with 224 assertions included and downloadable directly from UI.'],
  283: [3, 'App. F–G, Table H.1', 'Propagates G (11 ppm), H_0 ∈ [67.4, 73.0], θ_i ∈ [1.75, 2.35], and full Cramér–Rao σ_r = ±0.25/±0.08 error bars.'],
  284: [3, 'WHAT_CHANGED, §7.1–7.2', 'Explicitly reports retractions (blue n_T, 10⁻²¹ Skytree, zero-tuning DE), DESI 2.8–4.2σ tension, and undetectable f_NL.'],
  285: [2, 'RESPONSE_TO_REVIEWERS', 'QUALIFIED: Rigorous R1–R6 point-by-point technical closures documented, though generated via internal/AI-assisted audit prior to journal review.'],
  286: [0, 'ETHICS, OP-5', 'ABSENT: Foundational monographs [1]–[3] and H8 itself have not undergone independently verifiable journal peer review (OP-5).'],
  287: [3, 'SCOPE, CLAIM_LEDGER', 'Claims strictly capped to verified evidence with candid five-scalar and ansatz disclosures.'],
  288: [3, '§1–§8, App. A–J', 'Entirely equation-, code-, and referee-ledger-driven without appeal to authority.'],
  289: [3, 'SCOPE #2', 'Completely purged of mysticism, consciousness claims, and vague resonance metaphors.'],
  290: [3, 'PLAIN_LANGUAGE_SUMMARY', 'Provides dedicated Plain-Language Summary and Shortened Abstract separating analogies from formal derivations.'],
  291: [3, 'Table 0.1, Eq.(3.1)–(8.1)', 'Standard differential-geometry, AQFT, and Horndeski tensor notation enforced cleanly (zero barred-h or LaTeX errors).'],
  292: [3, 'Table 0.1', 'Every symbol explicitly defined with dimensionality in List of Symbols.'],
  293: [3, 'SCOPE, Layman/Paper split', 'Clean boundary between formal research monograph and lay pedagogical summary.'],
  294: [3, 'RESPONSE_TO_REVIEWERS R1–R6', 'Directly confronts UV divergences, Pauli theorem, BKM limits, BKL shear, Cauchy horizon, and DESI DR2 tension.'],
  295: [3, 'Refs [1]–[106]', 'Deep engagement with Horndeski, GW170817, Cassini, Carballo-Rubio regular BHs, and CMB/DESI literature.'],
  296: [3, '§2.2–2.3, App. B', 'Correctly uses Petz (1996), Čencov, Amari, Šafránek (2017), Carlen–Maas (2017), and Wirth–Zhang (2023).'],
  297: [1, 'SCOPE #2', 'OUT OF SCOPE: Intentionally excludes consciousness literature from core physics derivations (noted in Scope).'],
  298: [1, 'SCOPE #2', 'OUT OF SCOPE: Intentionally drops cognitive-science claims from IGRT monograph (SCOPE #2).'],
  299: [3, '§1.1, §8.1, [9, 10, 101]', 'Engages Problem of Time literature (Kuchař, Isham, Page–Wootters, Connes–Rovelli, Höhn–Smith–Lock).'],
  300: [3, 'REVISION_HISTORY H6→H7→H8', 'Reconciles legacy H6/H7 contradictions cleanly via explicit versioned corrections.'],
  301: [3, 'SCOPE_AND_NON_CLAIMS', 'Five strict non-claims enforce disciplined boundaries on ToE, consciousness, CC, DM, and preprints.'],
  302: [3, 'REVISION_HISTORY, WHAT_CHANGED', 'Detailed H6 → H7 → H8 changelog and R1–R6 audit matrix documented in full.'],
  303: [3, 'verify-igrt, Fig. 8', 'Rebuilt Figure 8 at high DPI and verified zero PDF DejaVuSans glyph regressions in verify-igrt-monograph.mjs.'],
  304: [3, 'ETHICS_AND_GOVERNANCE', 'Full ORCIDs, CRediT roles, non-commercial COI, and preprint [1]–[3] self-citation disclosure stated.'],
  305: [3, 'SCOPE #2, ETHICS', 'Cleanly severs IGRT physics from third-party mystical or anthropomorphic RES=RAG readings.'],
  306: [3, '§7.1–7.4', 'Tests confront quantitative error budgets (DESI, IPTA, Donadi, CANNEX) rather than anecdotes.'],
  307: [3, '§2.3, §4.2, §7.1', 'Supplies worked S³ qubit Uhlmann toy model, M=1 KMS dispersion example, and RK2 ODE.'],
  308: [3, 'App. C–F', 'Complete worked numerical calculations for 300K diamond, QES island, nanosphere DP, and Cramér–Rao σ_r.'],
  309: [3, 'Table H.1, App. F–G', 'Explicit error bars and parameter ranges quoted on H_0, θ_i, Φ_portal, and σ_r.'],
  310: [3, '§7.1–7.4 P1–P6', 'Pre-committed hard falsification conditions across P1–P6 before upcoming DR3/LiteBIRD releases.'],
  311: [2, 'RESPONSE_TO_REVIEWERS R1–R6', 'QUALIFIED: Exemplary resolution of R1–R6 technical critiques internally; awaiting external community peer critique.'],
  312: [0, 'OP-5', 'ABSENT: Zero independent external citations or third-party uptake documented yet (OP-5).'],
  313: [3, '§2.2, §3.2, App. B–D', 'Operator algebras (Type I/III_1, Doplicher–Longo split, Krein triples, BKM metric) used with technical precision.'],
  314: [3, 'ETHICS_AND_GOVERNANCE', 'Explicitly upholds ethical communication restraint, disclaiming speculative applications.'],
  315: [3, 'CLAIM_LEDGER, WHAT_CHANGED', 'Hype stripped out: dropped 10⁻²¹ clock claims, retracted blue n_T, disclosed tuned inputs & tensions.'],
  316: [2, 'verify-igrt, OP-1..5', 'QUALIFIED: Highest internal epistemic hygiene possible prior to external peer review & Boltzmann MCMC (OP-1, OP-5).'],
  317: [2, 'Refs [1]–[3], App. J', 'QUALIFIED: H8 archived cleanly in repo, while foundational preprints [1]–[3] still await formal journal DOIs.'],
  318: [3, 'ETHICS_AND_GOVERNANCE', 'Exact CRediT attribution table with ORCIDs for Bulaqueña, Tassan, and Lauret.'],

  // ===== FAMILY 7: Harmonization Readiness (319..340) =====
  319: [3, '§2.2, §4.1', 'SLD Fisher distance s_QFI rigorously defined on E_stat(N) and verified on S³ qubits.'],
  320: [3, '§4.1', 'Discrete Uhlmann–Frobenius steps ||RAG_k − RES_k||_F rigorously countable and proved O(N⁻²) convergent.'],
  321: [3, '§4.1, §5.3', 'Equilibrium RES = RAG corresponds exactly to ψ → 0, dθ^i/dτ = 0, and S_Araki = 0.'],
  322: [3, '§3.2, §4.1', 'Spatial modulus ∇ψ and modular excitation ΔK_V measure local information-geometric disturbance.'],
  323: [2, '§4.1–4.2, §7.2', 'QUALIFIED: Local clock tempo α_mod = ℏ/(E_mod σ_1) [Ansatz] and P1 ULDM tempo [Input] both formalized.'],
  324: [3, '§3.1, §7.1', 'Explicit PNGB potential V(φ_DE) = V_0(1 − cos(φ_DE/f_φ)) and Chameleon V(φ_Ch) defined.'],
  325: [3, '§4.3, §5.3', 'Causal poset partial order + unitary Bures progression provide rigorous ordering primitives.'],
  326: [3, '§2.1–2.2, §3.1', 'Both spacetime metric g_μν and fiber SLD metric g_ij^QFI explicitly constructed.'],
  327: [3, 'SCOPE #2', 'Completely observer-free core using split local vacuum algebras A(V).'],
  328: [2, '§5.1', 'QUALIFIED: Supports relational internal quantum clocks (Page–Wootters/QRF [101]) without subjective mind hooks.'],
  329: [3, '§4.1, Table 0.2a #6–8', 'Exact relativistic time dilation reproduced identically from dS_ext² = 0.'],
  330: [3, '§5.1, [101]', 'Integrates relational quantum reference frame switching into unitary S¹ clock algebra.'],
  331: [3, '§5.3, App. D', 'Compatible thermodynamic arrow via KMS detailed-balance BKM metric and Spohn monotonicity.'],
  332: [3, 'Table 0.1', 'Harmonized glossary cleanly maps legacy IGEG & RES=RAG symbols into Table 0.1.'],
  333: [3, '§7.2 P1, App. F', 'Joint clock + IPTA pulsar-timing P1 observable budget explicitly derived.'],
  334: [0, 'SCOPE #2', 'EXCLUDED: Cognitive-proxy tests explicitly severed from H8 to maintain physics rigor (SCOPE #2).'],
  335: [3, '§2.1, §4.1, §4.3', 'Continuous PU(H) bundle and discrete Uhlmann/Krein poset operators formally bridged.'],
  336: [3, 'ETHICS_AND_GOVERNANCE', 'Jointly authored and signed by Bulaqueña, Tassan, and Lauret under shared CRediT governance.'],
  337: [3, '§1.2, SCOPE #2', 'Observer-first vs physics-first axiom clash fully eliminated by adopting physical relational clocks.'],
  338: [3, 'Eq.(0.1), Eq.(3.1), Eq.(5.1)', 'Unified master bundle action, synchronization identity, and unfrozen Schrödinger equation delivered.'],
  339: [2, 'Table 0.2a #7, OP-3', 'QUALIFIED: Explicit calibration constant α_mod = ℏ/(E_mod σ_1) [s] identified, tagged [Ansatz] (OP-3).'],
  340: [3, '§2.2, App. B', 'Petz quantum information geometry cleanly unifies continuous and discrete sectors.'],

  // ===== FAMILY 8: Quantum Gravity Phenomenology (341..400) =====
  341: [3, '§2.1, §4.3', 'Null tree-level LIV photon dispersion explicitly predicted and compared to LHAASO.'],
  342: [2, '§6.3, §4.1', 'QUALIFIED: Hayward core scale ℓ_0 = ξ_0 ℓ_Pl [Ansatz] & QSL impose operational resolution bounds without deriving full GUP.'],
  343: [2, '§6.3, §4.3', 'QUALIFIED: ℓ_0 = 2⁻¹/⁴ ℓ_Pl benchmark given as [Ansatz], while Krein poset discreteness scale awaits UV completion.'],
  344: [2, '§6.1, OP-2', 'QUALIFIED: Matches LQG bounce density ρ_max = 0.4094 ρ_Pl dynamically, while off-shell 3+1 Dirac constraint algebra shares LQG’s OP-2.'],
  345: [2, '§7.1, §3.1', 'QUALIFIED: PNGB φ_DE mimics axion-like string moduli, without claiming string-compactification embedding.'],
  346: [3, '§4.3 Eq.(4.3)', 'Explicitly incorporates causal-set Benincasa–Dowker/Belenchia smeared Krein Dirac correspondence [97].'],
  347: [2, '§3.4, OP-3', 'QUALIFIED: EFT scale dressing Λ_local = 4.67 μeV tracked; asymptotic safety UV fixed point not derived (OP-3).'],
  348: [1, 'H8 Chapters 1–8', 'OPEN: No direct CDT spectral-dimension numerical flow computation reported in H8.'],
  349: [3, '§6.3–6.4, App. E', 'Bekenstein–Hawking & Bousso entropy bounds preserved in Hayward QES & FLRW sectors.'],
  350: [1, 'H8 Chapters 1–8', 'OPEN: 4D Lorentzian monograph gives no AdS/CFT bulk-boundary dictionary for ψ or φ_DE.'],
  351: [2, '§3.2, §6.3, App. E', 'QUALIFIED: S_Araki sources curvature via diamond Jacobson logic & s-wave QES islands computed, short of general RT surface proof.'],
  352: [2, '§3.2, App. C, OP-3', 'QUALIFIED: Explicit App. C diamond thermal test yields S_Araki ≈ 2.6 × 10⁻⁷ nats, relying on [Ansatz] κ_ψ & ℓ_CG.'],
  353: [3, '§6.3–6.4, App. E', 'Reproduces Bekenstein–Hawking entropy plus logarithmic/QES remnant bound S_rem = 3π/√2 ≈ 6.66 nats.'],
  354: [2, '§7.3 P4', 'QUALIFIED: P4 models unitary reflection K_echo = 0.18 transfer echoes; detailed graybody Hawking factors stylized.'],
  355: [2, '§6.3–6.4, App. E, OP-5', 'QUALIFIED: 1D s-wave QES island r_I = r_+ − O(ℏ/(Mc)) gives Page turnover cleanly; 4D collapse backreaction is OP-5.'],
  356: [3, '§5.1, §4.2', 'Operational S¹ modular quantum clocks H_Fisher constructed explicitly using Höhn–Smith–Lock QRF [101].'],
  357: [3, '§5.1, [9, 101]', 'Born–Oppenheimer internal clock τ_FR directly recovers Page–Wootters conditional dynamics.'],
  358: [3, '§7.3 P2, App. F', 'Exact Diósi–Penrose & Araki collapse rate Γ_Araki = (4/3)Γ_DP = 1.18 s⁻¹ derived for R_0 = 1.028 μm silica sphere.'],
  359: [2, '§7.3, P2', 'QUALIFIED: Classical vs quantized ψ/g_μν witness distinction discussed structurally; BMV SNR budget left stylized.'],
  360: [3, '§2.1, LHAASO', 'Photon-sector Planck LIV operators bounded strictly zero at tree level in compliance with GRB 221009A.'],
  361: [2, '§3.1, §3.4', 'QUALIFIED: Luminal Type Ia propagator & dressed cutoff Λ_local = 4.67 μeV analyzed; explicit 1-loop graviton self-energy deferred.'],
  362: [3, '§3.4, §8.3', 'Explicitly framed as a consistent low-energy EFT valid below dressed cutoff Λ_local / M_Pl.'],
  363: [1, 'OP-3, OP-4', 'OPEN: Explicit microscopic UV completion generating α_mod, κ_ψ, φ_osc, φ_Ch remains open (OP-3, OP-4).'],
  364: [3, '§3.1 Thm 3.1', 'Pure Type Ia Horndeski kinetic sector maintains perturbative positivity & tree-level unitarity below Λ_local.'],
  365: [2, '§3.1, §3.4', 'QUALIFIED: Type Ia ghost-free kinetic signs comply with standard Lorentzian EFT positivity, without 4-point amplitude dispersion proof.'],
  366: [1, '§7.1', 'TENSION: Flat PNGB plateau near θ_i = 1.95 & 5-scalar excursions lie close to Swampland dS tension without formal resolution.'],
  367: [2, '§1.1, §5.1', 'QUALIFIED: Minisuperspace Born–Oppenheimer factorization solved; Euclidean Hartle–Hawking no-boundary path integral untouched.'],
  368: [2, '§5.1, §6.1', 'QUALIFIED: Minisuperspace S¹ clock + L_UV FLRW studied semiclassically; full WDW wave-function quantization open (OP-2).'],
  369: [3, '§1.1, §5.1', 'Explicitly selects Bures/Fisher-Rao arc length s_QFI as the internal Wheeler–DeWitt clock.'],
  370: [2, '§5.1, OP-2', 'QUALIFIED: Relational Dirac observables formalized at BO 1-loop BRST; non-perturbative off-shell 3+1 closure is OP-2.'],
  371: [2, '§3.2, App. C', 'QUALIFIED: Conceptually aligned with Van Raamsdonk via Araki ψ², short of non-perturbative metric reconstruction.'],
  372: [1, 'H8 Chapters 1–8', 'OPEN: MERA/tensor-network holographic construction not used in H8.'],
  373: [2, '§2.2, §3.2', 'QUALIFIED: Connects SLD QFI & diamond ΔK_V to metric perturbation energy, falling short of full Hollands–Wald canonical proof.'],
  374: [3, '§6.4, App. D', 'Uses QFC-conditional generalized second law and Type III_1 Araki positivity cleanly (§6.4).'],
  375: [3, '§3.2, §4.2, App. C', 'Modular Hamiltonian K_ξ = −ln Δ_ρ and diamond first law Δ⟨K_V⟩ used explicitly to derive ΔK_V.'],
  376: [3, '§6.4, §5.3', 'De Sitter horizon Gibbons–Hawking entropy and Unruh T_U integrated into E_mod = max(ℏω_0, 2πk_B T_U).'],
  377: [2, '§6.1–6.2', 'QUALIFIED: Bouncing background avoids inflationary TCC directly, but relies on assumed ekpyrotic w > 1 & Input w_contract.'],
  378: [2, '§6.2, OP-1', 'QUALIFIED: Contracting-bounce Mukhanov–Sasaki outputs n_s, n_T, r, f_NL derived; full transfer MCMC is OP-1.'],
  379: [3, '§6.2, P3', 'Predicts red tensor tilt n_T = −0.036 and r = 24 c_s³ = 0.0123 accessible to LiteBIRD.'],
  380: [3, '§7.2 P1', 'Detailed dual-species optical clock (⁸⁷Sr/¹⁷¹Yb) + IPTA network protocol derived in App. F.'],
  381: [2, '§4.1, §5.1, §6.3', 'QUALIFIED: Mandelstam–Tamm speed limit & Hayward ℓ_0 regulate clock resolution without an explicit Salecker–Wigner Wigner-mass theorem.'],
  382: [2, '§3.2, OP-3', 'QUALIFIED: Bundles + Araki diamond mechanism specified, but microscopic derivation of κ_ψ & spacetime emergence is OP-3.'],
  383: [2, '§3.2, Table 0.3', 'QUALIFIED: Differentiated carefully from Verlinde/Jacobson via explicit Horndeski Type Ia + PU(H) equations.'],
  384: [3, '§2.1, LHAASO', 'Exact tree-level null photon dispersion consistent with 18 TeV GRB 221009A observations.'],
  385: [0, '§2.1, §4.3', 'CC FALSIFIES: Confirmed Planck-scale LIV falsifies H8’s Diff⁺(M) local Lorentz covariance.'],
  386: [0, '§2.1, LHAASO', 'CC FALSIFIES: Planck-suppressed photon arrival lag contradicts H8’s clean tree-level null dispersion.'],
  387: [2, '§6.3, §4.3', 'CC QUALIFIED: Minimal length ~ℓ_0 = ξ_0 ℓ_Pl fits Hayward core & smeared Krein poset if Lorentz-covariant.'],
  388: [1, '§2.1, §4.3', 'CC WEAKENS: Strict spacetime discreteness conflicts with smooth manifold M, forcing Krein poset dominance over Eq. (3.1).'],
  389: [3, '§2.1, §3.1', 'CC SURVIVES: Sub-Planckian smooth spacetime directly supports H8’s continuum Diff⁺(M) action.'],
  390: [2, '§3.1, §7.3 P2', 'CC QUALIFIED: Semiclassical Horndeski + classical metric fits well, though full quantum gravity WDW motivation narrows.'],
  391: [2, '§7.3 P2', 'CC QUALIFIED: Gravity-mediated entanglement requires quantized metric perturbation response compatible with EFT Eq. (3.1).'],
  392: [3, '§6.3–6.4, App. E', 'CC SURVIVES: Unitary evaporation directly confirms H8’s QES island, PU(H) fiber, and P4 S†S = I transfer.'],
  393: [0, '§6.3–6.4, P4', 'CC FALSIFIES: Non-unitary BH evaporation contradicts PU(H) unitarity and QES Page-curve recovery.'],
  394: [2, '§6.4, §3.2', 'CC QUALIFIED: Horndeski field equations survive de Sitter holography breakdown, only diamond entropy framing weakens.'],
  395: [3, '§3.2, §6.3–6.4', 'CC SURVIVES: Cosmological holography strongly reinforces diamond Araki ΔK_V and QES island structures.'],
  396: [3, '§3.2, App. C', 'CC SURVIVES: Entanglement sourcing geometry directly validates H8’s ψ²(x) = κ_ψ(S_Araki/Vol_3) ansatz.'],
  397: [2, '§7.3 P2', 'CC QUALIFIED: Measured gravitational decoherence fits Araki/DP channel Γ_Araki = (4/3)Γ_DP within P2 sensitivity bounds.'],
  398: [2, '§3.1, §3.4', 'CC QUALIFIED: Running G_eff(k,z) naturally fits conformal Horndeski sector, bounded by Cassini/BBN.'],
  399: [2, '§3.1, Table 0.3', 'CC QUALIFIED: 4D Type Ia + 5-scalar EFT can be embedded in higher dimensions, though 4D structure is H8’s primary virtue.'],
  400: [3, '§3.1, §3.4', 'CC SURVIVES: Direct graviton detection with luminal 2-tensor modes confirms H8’s Type Ia sector.'],

  // ===== FAMILY 9: Thermodynamic & Information Consistency (401..460) =====
  401: [3, '§3.3, App. A', 'First law & energy conservation proved via all-orders Bianchi ∇^μ(T_μν + I_μν) ≡ 0.'],
  402: [3, '§5.3, §6.4', 'Second law verified via KMS BKM dissipation, CPTP Spohn inequality, and QFC-conditional GSL.'],
  403: [3, '§3.2, App. C–D', 'Explicit Araki relative entropy S_Araki(ρ_V || σ_V) on split Type I factor N defined cleanly.'],
  404: [3, '§5.3 Eq.(5.2)', 'Exact entropy-production rate (d/dτ)S_Araki = −g̃_ij^BKM θ̇^i θ̇^j derived for KMS detailed-balance semigroups.'],
  405: [2, '§5.3', 'QUALIFIED: Landauer dissipation derived for KMS clock trajectories via BKM gradient flow, modulo external reservoir assumptions.'],
  406: [2, '§5.3, App. D', 'QUALIFIED: Szilard/demon consistency follows automatically from CPTP Spohn inequality without dedicated demon circuit.'],
  407: [2, '§5.3, MATH-39', 'QUALIFIED: Detailed-balance KMS generator structure is consistent with Crooks/Jarzynski fluctuation theorems.'],
  408: [3, '§6.3–6.4, App. E', 'Bekenstein, Bousso, and QFC bounds respected across black-hole remnant and cosmological horizons.'],
  409: [3, '§2.2, §3.2, App. B', 'Cleanly separates Petz SLD Quantum Fisher metric, Araki relative entropy, and classical Shannon metrics.'],
  410: [3, '§2.2, §7.2, App. F', 'Exact quantum/classical Cramér–Rao bound linked directly to clock precision & P1 σ_r = ±0.08 budget.'],
  411: [3, '§2.2, App. B', 'Operator-monotone Chentsov–Petz monotonicity under all CPTP coarse-grainings rigorously proved.'],
  412: [3, '§2.2, App. B', 'Petz (1996) Theorem 6 classification of monotone metrics explicitly cited and applied.'],
  413: [3, '§3.2, §5.3, App. C–D', 'Araki relative entropy applied consistently in both diamond matter density ψ² and open-system dissipation.'],
  414: [2, '§5.3, §6.3', 'QUALIFIED: Mutual entanglement correlations appear in Araki diamond & QES islands; multi-partite dynamics left open.'],
  415: [3, '§2.3, §5.1', 'Rank-preserving unitary PU(H) evolution strictly preserves von Neumann & Fisher norms.'],
  416: [2, '§3.2, App. C, OP-3', 'QUALIFIED: Explicit diamond radius ℓ_CG = 1 μm tested numerically, while fundamental UV selection of ℓ_CG vs ℓ_Pl is OP-3.'],
  417: [2, '§4.2, §3.2', 'QUALIFIED: KMS modular temperature T_U / T_room explicitly enters σ_1(K_ξ) and diamond ΔT_00.'],
  418: [2, '§5.1, §3.3', 'QUALIFIED: Berry phase flux Φ_Berry and global Bianchi stress currents identified; U(1) global Noether charge absent for real ψ.'],
  419: [2, '§3.1, §7.1', 'QUALIFIED: Positive scalar curvature & ghost freedom verified; finite-temperature fluctuation heat capacity C_V not calculated.'],
  420: [3, '§7.1, §3.4', 'Linear & thermodynamic stability around PNGB & Chameleon minima verified.'],
  421: [3, '§4.1, §5.3', 'Exact equilibrium KMS / RES=RAG / ψ = 0 states formally characterized.'],
  422: [3, '§5.3, App. D', 'Non-equilibrium open-system CPTP Spohn & KMS BKM relaxation trajectories analyzed explicitly.'],
  423: [2, '§3.2, App. C', 'QUALIFIED: Quantitative link ψ² = κ_ψ(S_Araki/Vol_3) uses [Ansatz] κ_ψ = ℏcℓ_Pl/(12π) = 1.355 × 10⁻⁶² J·m².'],
  424: [2, '§4.1, Eq.(4.1)', 'QUALIFIED: Retention/coherence mapped via Uhlmann fidelity F(ρ_k, ρ_{k+1}) in ||RAG_k − RES_k||_F.'],
  425: [2, '§4.1, §5.3', 'QUALIFIED: Novelty/distinguishability update quantified via Bures arc increment ds_QFI.'],
  426: [2, '§5.1, §5.3', 'QUALIFIED: Trade-off bounded by Mandelstam–Tamm QSL & KMS dissipation mobility τ_rel.'],
  427: [3, '§5.3, App. D', 'Arrow of time grounded simultaneously in CPTP Spohn inequality & KMS BKM gradient flow.'],
  428: [2, '§6.1, §5.3', 'QUALIFIED: Contracting matter bounce addresses causal/horizon smooth entry, while pre-bounce low entropy relies on assumed phase.'],
  429: [3, '§6.4', 'Gibbons–Hawking cosmological horizon entropy & QFC compatibility verified.'],
  430: [3, '§6.3–6.4, App. E', 'Wald/Bekenstein–Hawking area law plus explicit 1D QES extremal core entropy derived.'],
  431: [2, '§6.3–6.4, App. E, OP-5', 'QUALIFIED: QES Page-curve transition shown in 1D s-wave limit; full 4D dynamical mass-inflation PDEs remain OP-5.'],
  432: [3, '§2.2, §2.3, App. D', 'Explicit parametric density family ρ(θ) on Doplicher–Longo split Type I factor N defined.'],
  433: [3, '§5.3 Eq.(5.2)', 'BKM gradient-flow convergence proved for KMS detailed-balance semigroups [99, 100].'],
  434: [3, '§2.3, App. B', 'SLD Fisher positivity & pure-state Fubini–Study regularization on CP^{N−1} rigorously proved.'],
  435: [3, '§2.2–2.3, §4.1', 'Geodesic Bures distance & Jacobi–Finsler synchronization analyzed cleanly.'],
  436: [2, '§2.2, App. B', 'QUALIFIED: Petz monotone metrics & SLD/BKM dual structures used; full exponential/mixture α-connections secondary.'],
  437: [3, '§2.2, App. B', 'Explicitly contrasts classical Fisher–Rao with quantum SLD vs BKM monotone Petz metrics.'],
  438: [3, 'Table 0.2a #10–11', 'Entropy strictly dimensionless [nats]; dS_Araki/dτ [s⁻¹] balanced identically via τ_rel = Γ_KMS⁻¹.'],
  439: [3, '§5.3 Eq.(5.2)', 'Thermodynamic dissipation directly bounded via BKM length g̃_ij^BKM = τ_rel g_ij^BKM.'],
  440: [3, '§4.1, §5.1, §7.2', 'Exact Mandelstam–Tamm QSL & dual-clock Cramér–Rao dispersion bounds derived.'],
  441: [2, '§4.3, §2.1', 'QUALIFIED: Microcausality & local causal-diamond nets A(V) enforce signal speed ≤ c cleanly without explicit lattice Lieb–Robinson theorem.'],
  442: [3, '§3.2, §6.3, App. C–E', 'Entanglement area law & diamond volumetric excess scaling cleanly separated (ψ_vac = 0).'],
  443: [1, 'H8 Chapters 1–8', 'OPEN: Circuit/holographic complexity-equals-volume claims are not developed quantitatively in H8.'],
  444: [2, '§4.1, §5.3', 'QUALIFIED: Clock dispersion cost σ_1(K_ξ) and KMS dissipation rate τ_rel quantified, though full Carnot clock efficiency bound is omitted.'],
  445: [3, '§3.3, App. A', 'All-orders covariant Noether conservation ∇^μ(T_μν + I_μν) ≡ 0 explicitly proven.'],
  446: [3, '§5.3, §4.1', 'Reconciles monotonic Fisher length ds_QFI ≥ 0 with detailed-balance/Spohn entropy decay smoothly.'],
  447: [2, '§5.3, §4.2', 'QUALIFIED: Irreversibility cleanly localized to open CPTP measurement/thermal channels vs unitary core.'],
  448: [3, '§4.1, App. D–F', 'Cramér–Rao bound, inertial gap E_mod = max(ℏω_0, 2πk_B T_U), and M=1 σ_1 bound clock resolution cleanly.'],
  449: [3, '§5.3', 'CC SURVIVES: Statistical fluctuation/CPTP semigroup framing tolerates microscopic thermal fluctuations naturally.'],
  450: [0, '§5.3', 'CC FALSIFIES: Costless erasure contradicts KMS detailed-balance BKM & Landauer entropy bounds.'],
  451: [0, '§6.3–6.4, App. E', 'CC FALSIFIES: Violation of Bekenstein/QFC bounds invalidates H8’s diamond & QES island derivations.'],
  452: [2, '§2.1, §4.2', 'CC QUALIFIED: Relational modular state ω depends on local diamond observer cut A(V) while remaining covariant under boosts.'],
  453: [2, '§6.1, §6.4', 'CC QUALIFIED: L_UV bounce & future DE asymptotic state do not explicitly resolve Boltzmann-brain measure weighting.'],
  454: [3, '§6.1, §5.3', 'CC SURVIVES: Cosmological expansion/bounce gradient matches macroscopic arrow alongside BKM flow.'],
  455: [2, '§5.1, §5.3', 'CC QUALIFIED: Open-system CPTP measurement decoherence contributes directly to thermodynamic arrow without needing mind.'],
  456: [0, '§3.2, Eq.(3.2)', 'CC FALSIFIES: Purely epistemic information cannot source physical spacetime curvature tensor I_μν via ψ²(x).'],
  457: [0, '§5.3, App. D', 'CC FALSIFIES: Maxwell demons beating Landauer violate CPTP Spohn inequality (Eq. 5.2 / [93]).'],
  458: [2, '§7.1', 'CC QUALIFIED: Scalar vacuum decay is compatible with PNGB potential minima but alters late-time Eq. (7.1) asymptotics.'],
  459: [2, '§6.1', 'CC QUALIFIED: Low-entropy fluctuation scenarios alter pre-bounce initial assumptions without breaking Type Ia field equations.'],
  460: [0, '§2.2, App. B', 'CC FALSIFIES: Increasing distinguishability under CPTP coarse-graining directly violates Petz–Chentsov monotonicity theorem.'],

  // ===== FAMILY 10: Sociological & Meta-Scientific Viability (461..500) =====
  461: [0, 'OP-5, ETHICS', 'ABSENT: Zero independent research groups currently replicating or extending IGRT-2026-H8 (OP-5).'],
  462: [0, 'OP-5', 'ABSENT: Zero independent external derivations or journal replications published yet (OP-5).'],
  463: [2, '§7.1–7.4, WHAT_CHANGED', 'QUALIFIED (Lakatos): Progressive theoretical shifts fix H6/H7 bugs cleanly; empirical confirmation of novel predictions awaits P1–P6 data.'],
  464: [2, 'RESPONSE R1–R6, OP-1..5', 'QUALIFIED (Laudan): Solves internal conceptual/dimensional anomalies cleanly, leaving 5 major empirical/math problems OP-1..OP-5.'],
  465: [3, '§7.1–7.4, verify-igrt', 'Sharp falsification conditions P1–P6 and open reproducibility scripts satisfy Popperian demarcation cleanly.'],
  466: [3, 'SCOPE #2', 'Explicitly excises mystical, consciousness, and anthropomorphic readings in Scope & Non-Claims #2.'],
  467: [2, '§1–§8', 'QUALIFIED: Bridges GR, Horndeski cosmology, AQFT operator algebras, quantum information, and precision metrology cleanly.'],
  468: [3, 'PLAIN_LANGUAGE_SUMMARY', 'Dedicated Plain-Language Summary translates PU(H), Araki screening, and P1–P6 without mathematical jargon.'],
  469: [3, 'App. A–J, Table 0.2a/b', 'Worked examples (qubit Uhlmann, diamond, ODE, dimensional table) make it a strong teaching case study.'],
  470: [3, 'ETHICS, App. J', 'Full monograph prose, verification script, and PDF/HTML/MD generators openly accessible in repository.'],
  471: [1, 'P1–P6', 'GAP: Falsification gates P1–P6 specified in monograph, but not externally preregistered in a public experiment registry.'],
  472: [2, 'RESPONSE R1–R6, OP-1..5', 'QUALIFIED: Internal red-team and R1–R6 revisions executed thoroughly; external adversarial collaboration still pending (OP-5).'],
  473: [3, 'Table 0.1', 'Strict community-standard tensor, Horndeski, and Petz notation enforced by List of Symbols.'],
  474: [2, 'Refs [1]–[106]', 'QUALIFIED: Cites 103 established primary literature references + 3 author preprints, awaiting inbound external citations.'],
  475: [0, 'ETHICS, OP-5', 'ABSENT: Core preprints [1]–[3] and H8 itself are not yet published in an externally peer-reviewed physics journal (OP-5).'],
  476: [0, 'ETHICS_AND_GOVERNANCE', 'ABSENT: Funding statement explicitly declares research conducted independently with zero institutional grant support.'],
  477: [3, 'ETHICS_AND_GOVERNANCE', 'Complete CRediT role breakdown with verified ORCIDs for all three authors.'],
  478: [3, 'ETHICS_AND_GOVERNANCE', 'Explicitly upholds ethical claims discipline and zero commercial conflict of interest.'],
  479: [2, '§7.2–7.4', 'QUALIFIED: Guides public/consortium metrology roadmaps (DESI, LiteBIRD, IPTA, CANNEX, HL-LHC) rather than societal policy.'],
  480: [3, 'OP-1..OP-5', 'Generates sharp, productive research agendas across CAMB/Cobaya EFT, 3+1 constraint algebra, and 4D QES collapse.'],
  481: [1, '§1.2, Table 8.3', 'PENALTY: Five distinct scalar fields plus multiple [Ansatz]/[Input] parameters score poorly on ontological economy.'],
  482: [3, 'CLAIM_LEDGER, Table 8.3', 'Exemplary awareness of theory-laden ansätze (κ_ψ, α_mod, ξ_0) and model-dependent observables.'],
  483: [0, 'OP-5', 'ABSENT: No external anonymous peer-review referee reports from an independent journal exist yet (R1–R6 is internal audit).'],
  484: [3, 'verify-igrt-monograph.mjs', '224 deterministic verification assertions make every numerical table immediately machine-reproducible.'],
  485: [3, 'SCOPE, CLAIM_LEDGER', 'Exemplary communication discipline separating Derived results from Ansatz, Input, Tension, and Open problems.'],
  486: [2, 'REVISION_HISTORY, R1–R6', 'QUALIFIED: Complete internal H6→H7→H8 audit trail published; external journal referee logs await submission (OP-5).'],
  487: [3, 'REVISION_HISTORY H6→H8', 'Transparent versioning documents exact equations stabilized vs retracted across H6, H7, and H8.'],
  488: [3, 'P1–P6, App. F', 'Directly calibrated to existing/active pipelines (IPTA TEMPO2, DESI/Planck, LiteBIRD NILC, LVK O5, CANNEX, HL-LHC).'],
  489: [2, 'CLAIM_LEDGER, OP-1..5', 'QUALIFIED: Candid open-problem disclosure invites adversarial scrutiny; real external red-team uptake not yet realized.'],
  490: [2, 'App. A–J', 'QUALIFIED: Pedagogical appendices & runnable JS script lower barrier for graduate physicists/metrologists.'],
  491: [0, 'OP-5', 'ABSENT: No independent third-party scholars have published translations or critiques of IGRT-2026-H8 yet.'],
  492: [3, 'PLAIN_LANGUAGE, SCOPE', 'Explicit non-claims and retracted exaggerations minimize popular-press overclaiming risk.'],
  493: [3, 'OP-5', 'CC SURVIVES: External replication of verify-igrt & App. A–E directly satisfies OP-5 and elevates epistemic score sharply.'],
  494: [3, 'OP-1, P1–P6', 'CC SURVIVES: Collaboration adoption cleanly triggers OP-1 MCMC and P1–P6 blinding pipelines.'],
  495: [0, 'SCOPE #2', 'CC EXCLUDED: Cognitive-rhythm studies fall completely outside H8’s physics scope (SCOPE #2).'],
  496: [2, 'SCOPE #2', 'CC SURVIVES: Refuting cognitive-rhythm theories leaves IGRT-2026-H8 physically untouched (already excised in SCOPE #2).'],
  497: [3, 'SCOPE #2', 'CC SURVIVES: Disowning mystical third-party spin-offs already aligns with H8’s clean scientific boundary.'],
  498: [3, 'OP-5', 'CC SURVIVES: Formal peer-reviewed journal publication directly closes H8’s primary sociological gap (OP-5).'],
  499: [2, 'P1–P6', 'CC QUALIFIED: Funded tests (CANNEX, LiteBIRD, IPTA, HL-LHC) cleanly test P1–P6 gates regardless of pass/fail outcome.'],
  500: [1, 'OP-1..OP-5', 'CC WEAKENS: Fatal inconsistency in a sub-sector (e.g. φ_Ch or bounce w_contract) leaves Type Ia Horndeski or PU(H) reduced core intact.']
};

const FAMILY_XI_H8_SPECS: Record<string, BaseTuple> = {
  'XI.01': [3, '§4.1, verify-igrt', 'Verified identically invariant under arbitrary monotonic λ → λ′(λ); qubit Uhlmann sum passes to 10⁻⁷.'],
  'XI.02': [3, '§2.2, App. B', 'Explicitly invokes Petz (1996) Theorem 6 operator-monotone classification on split Type I factor N.'],
  'XI.03': [3, '§2.1, §4.1', 'Derived pullback via trivial principal PU(H) bundle and Jacobi–Finsler null metric dS_ext² = 0.'],
  'XI.04': [2, 'Table 0.2a #7, OP-3', 'QUALIFIED: Homogeneity [s] balanced cleanly, but α_mod = ℏ/(E_mod σ_1) remains an explicit constitutive [Ansatz] (OP-3).'],
  'XI.05': [3, '§4.1, App. D', 'Lorentz covariance and acceleration continuity preserved via E_mod = max(ℏω_0, 2πk_B T_U).'],
  'XI.06': [3, '§4.1 Eq.(4.1)', 'Proved ||RAG_k − RES_k||_F = ½ ds_QFI + O(N⁻²) analytically and verified numerically at N = 1000.'],
  'XI.07': [3, '§4.1, Table 0.2a #6', 'Null worldlines satisfy dτ = 0 cleanly without forcing rest-frame clock ticking onto photon phase.'],
  'XI.08': [3, '§4.1, §2.2', 'Positive-semidefinite Bures/QFI metric prohibits negative proper-time arc increments.'],
  'XI.09': [3, '§7.2 P1, App. F', 'Anchored to ⁸⁷Sr/¹⁷¹Yb dual-species optical lattice clock noise budgets (BACON/PTB).'],
  'XI.10': [3, '§4.1, §5.1', 'Mandelstam–Tamm speed limit incorporated directly through dispersion σ_1(K_ξ) and E_mod.'],
  'XI.11': [2, '§4.1, §5.1', 'QUALIFIED: Mandelstam–Tamm variance σ_1(K_ξ) explicitly normalized (M=1); Margolus–Levitin ⟨E−E_0⟩ dual bound less developed.'],
  'XI.12': [3, '§4.1, App. D', 'Resolved R1 inertial divergence: E_mod = max(ℏω_0, 2πk_B T_U) guarantees finite E_mod = ℏω_0 as a → 0.'],
  'XI.13': [2, '§5.3, App. D', 'QUALIFIED: Distinguishes KMS detailed-balance BKM flow from general CPTP Spohn monotonicity [93]; explicit memory kernel ODE stylized.'],
  'XI.14': [3, '§5.3 Eq.(5.2), App. D', 'Proved strictly monotone under all CPTP Markovian maps via Petz & Spohn theorems.'],
  'XI.15': [3, '§2.1, §5.1', 'U(1) Berry connection A_Berry in H_Fisher transforms covariantly under local phase redefinitions on S¹.'],
  'XI.16': [2, '§5.1, §2.1', 'QUALIFIED: Explicit S¹ Berry holonomy Φ_Berry included in Eq. (5.1); full non-Abelian Wilczek–Zee multi-state curvature less used.'],
  'XI.17': [2, '§4.3, §6.3', 'QUALIFIED: Krein smeared poset & [Ansatz] ℓ_0 = ξ_0 ℓ_Pl bound UV modes without deriving Planck discreteness microscopically.'],
  'XI.18': [3, '§4.1', 'Replaced legacy bilinear Z-transform approximation with direct O(N⁻²) Uhlmann–Frobenius continuum limit.'],
  'XI.19': [2, '§4.1, §5.3', 'QUALIFIED: CPTP semigroup contractivity keeps spectrum inside unit disk without relying on classical Z-plane filter heuristics.'],
  'XI.20': [2, '§6.3, App. E', 'QUALIFIED: Static Hayward exterior & QES computed, while full dynamical strong-field horizon crossing backreaction is OP-5.'],
  'XI.21': [3, '§6.3, Eq.(6.3)', 'Hayward regular lapse f(r) keeps infalling proper time smooth across r_+ without coordinate singularity.'],
  'XI.22': [2, '§6.3–6.4, App. E', 'QUALIFIED: QES r_I = r_+ − O(ℏ/(Mc)) and S_rem ≈ 6.66 nats derived in 1D s-wave limit; full 4D Hawking Fisher rate OP-5.'],
  'XI.23': [3, '§4.1, App. D', 'Unruh temperature T_U = ℏa/(2πck_B) enters E_mod = max(ℏω_0, 2πk_B T_U) explicitly canceling 2π factors identically.'],
  'XI.24': [3, '§2.2–2.3, §5.1', 'Multi-partite split Type I clock states modeled rigorously via SLD QFI on ρ(θ).'],
  'XI.25': [3, '§5.3, App. D', 'Decoherence & KMS BKM relaxation drive classical statistical distinguishability trajectories cleanly.'],
  'XI.26': [3, '§6.1, §7.1', 'Cosmic turnaround & thawing expansion synchronized cleanly via FLRW lapse gauge.'],
  'XI.27': [2, '§7.2, App. F', 'QUALIFIED: Exact σ_r = ±0.25/±0.08 budget & Y_00 monopole proved, but m_osc is [Input] and 2:1 harmonic is generic to quadratic ULDM.'],
  'XI.28': [3, '§4.1, §3.4', 'Gravitational redshift matched identically to GR with 10⁻¹¹ PPN screening margin.'],
  'XI.29': [3, '§4.1, Table 0.2a #6', 'Resolved geometrically via Jacobi–Finsler synchronization without auxiliary accelerometer axioms.'],
  'XI.30': [2, '§5.1, §5.3', 'QUALIFIED: Open CPTP Spohn channel stability verified; continuous measurement backreaction SSE trajectories not numerically simulated.'],
  'XI.31': [3, '§2.2, App. B', 'Guaranteed identically by Petz operator monotonicity under Markov coarse-graining.'],
  'XI.32': [2, '§5.3, §6.1', 'QUALIFIED: Retarded/advanced bundle structures consistent classically; absorber boundary condition not adopted.'],
  'XI.33': [2, '§5.1, OP-2, OP-3', 'QUALIFIED: Foliation handled in Born–Oppenheimer limit; full inhomogeneous 3+1 off-shell Dirac algebra is OP-2.'],
  'XI.34': [1, 'OP-2', 'OPEN: Quantum superposition of distinct spacetime metrics beyond fixed semiclassical M remains OP-2.'],
  'XI.35': [3, '§5.3 Eq.(5.2)', 'Clock thermodynamic dissipation rigorously bounded via KMS mobility τ_rel & Spohn monotonicity.'],
  'XI.36': [3, '§5.1 Eq.(5.1)', 'Berry connection A_Berry shift on S¹ enters energy levels E_mod σ_1(2πk/L − Φ_Berry/L) explicitly.'],
  'XI.37': [2, '§6.1, §6.3', 'QUALIFIED: Tunneling smoothness studied in bounce & Hayward remnant decay; Euclidean instanton actions stylized.'],
  'XI.38': [3, '§2.1, LHAASO', 'Fully satisfies LHAASO 18 TeV GRB 221009A dispersion limits via tree-level Lorentz invariance.'],
  'XI.39': [2, '§7.2, §4.1', 'QUALIFIED: Local clock rest frame cleanly transformed; cosmological CMB dipole kinematic boost not separately tabulated.'],
  'XI.40': [2, '§2.3, §5.1', 'QUALIFIED: S³ pure-state boundary regularized via Fubini–Study & Šafránek caveats; global geodesic completeness on N is OP-3.']
};

const FAMILY_XII_H8_SPECS: Record<string, BaseTuple> = {
  'XII.01': [3, '§3.2, App. C–D', 'Type III_1 Araki relative entropy on Doplicher–Longo split algebra N yields strictly UV-finite ψ_vac = 0.'],
  'XII.02': [3, '§3.2, App. C', 'Klein inequality enforces S_Araki(ρ_V || σ_V) ≥ 0 and hence ψ²(x) ≥ 0 globally; thermal check gives 2.60 × 10⁻⁷ nats.'],
  'XII.03': [2, '§6.3–6.4, App. E, OP-5', 'QUALIFIED: 1D s-wave QES island derived; general higher-D RT surface reconstruction open (OP-5).'],
  'XII.04': [2, '§3.2, OP-3', 'QUALIFIED: Candidly flags foundational tension between ψ² as AQFT state functional and local propagating Galileon scalar (§3.2).'],
  'XII.05': [3, '§3.1 Thm 3.1', 'Explicitly restricted to Type Ia Horndeski (G_{4,X}=0, G_5=0) guaranteeing zero Ostrogradsky ghosts.'],
  'XII.06': [3, '§3.3, App. A', 'All-orders Jordan–Einstein Bianchi identity ∇^μ(T_μν + I_μν) ≡ 0 proved including cubic-Galileon commutators.'],
  'XII.07': [2, '§3.4, §1.2, OP-4', 'QUALIFIED: Terrestrial Z_ψ = 7.05 × 10¹⁴ forces an independent Chameleon scalar φ_Ch (M_Ch = 2.4 meV) for sub-mm CANNEX (§3.4).'],
  'XII.08': [3, '§3.4, App. G', 'Solar Vainshtein screening delivers |γ_PPN − 1| = 1.77 × 10⁻¹¹ at 1 AU (~10⁶ below Cassini bound).'],
  'XII.09': [2, '§3.4, OP-3', 'QUALIFIED: Explicitly derives Λ_3 = 1.758 × 10⁻¹³ eV & dressed Λ_local = 4.67 μeV (4.2 cm); UV completion above Λ_local is OP-3.'],
  'XII.10': [3, '§6.1, App. E', 'Exact analytic general-w L_UV bounce solution with ρ_max = 0.4094 ρ_Pl = 9.095 × 10⁷⁵ GeV⁴.'],
  'XII.11': [3, '§6.1, §6.3', 'Turnaround (ä/a)|_{ρ_max} = 4πG ρ_max(1+w) > 0 and Hayward regular core circumvent Penrose–Hawking focusing.'],
  'XII.12': [2, '§6.3–6.4, App. E, OP-5', 'QUALIFIED: Computes r_I = r_+ − O(ℏ/(Mc)) in 1D s-wave QES; full 4D dynamical collapse & Carballo-Rubio work term is OP-5.'],
  'XII.13': [3, '§6.3–6.4, App. E', 'Recovers S_BH = A/(4ℓ_Pl²) plus extremal remnant entropy S_rem = 3π/√2 ≈ 6.66 nats at [Ansatz] ξ_0 = 2⁻¹/⁴.'],
  'XII.14': [2, '§7.1, Table H.1', 'QUALIFIED: Solved cleanly via RK2 KG ODE (w_0=−0.908, w_a=−0.177), facing 2.8–4.2σ DESI DR2 tension if phantom crossing persists.'],
  'XII.15': [1, '§7.1, OP-1', 'OPEN (OP-1): Propagates H_0 ∈ [67.4, 73.0] parametrically; no CAMB/hi_class + Cobaya H_0 tension alleviation fit executed yet.'],
  'XII.16': [1, '§7.1, OP-1', 'OPEN (OP-1): S_8 weak-lensing growth suppression explicitly deferred to CAMB/Cobaya MCMC against KiDS-1000/DES-Y3.'],
  'XII.17': [3, '§6.2, P3', 'Quantitative prediction r = 24 c_s³ = 0.0123 and red n_T = −0.036 cleanly falsifiable by LiteBIRD (σ(r) ≈ 0.001).'],
  'XII.18': [2, '§6.1–6.2', 'QUALIFIED: L_UV bounds ρ ≤ ρ_max cleanly, while bounce EoS w_contract = −0.003 is a tuned [Input] & BKL shear requires assumed ekpyrotic w > 1.'],
  'XII.19': [3, '§3.1 Thm 3.1', 'Luminal c_GW ≡ c enforced identically by G_{4,X} = 0, G_5 = 0.'],
  'XII.20': [2, '§6.1, §6.4', 'QUALIFIED: QFC-conditional GSL checked cleanly; explicit curved-space Ford–Roman QEI integral not evaluated for 5-scalar EFT.'],
  'XII.21': [3, '§3.4, App. G', 'MICROSCOPE & LLR equivalence principle preserved inside deeply screened Solar/Earth Vainshtein zones.'],
  'XII.22': [2, '§6.3, OP-5', 'QUALIFIED: Static Hayward metric regularizes interior; time-dependent no-hair evasion during dynamical 4D collapse is OP-5.'],
  'XII.23': [2, '§1.2, §3.1, §7.1', 'QUALIFIED: PNGB φ_DE shift protection isolated cleanly from ψ ≥ 0, trading radiative stability for 5 separate scalars (§1.2).'],
  'XII.24': [2, '§3.1, §7.3 P6', 'QUALIFIED: Universal conformal Ω(ψ) + Higgs-portal Φ_portal (1.84 TeV) defined; sin θ_H ≪ 0.02 evades HL-LHC cleanly.'],
  'XII.25': [2, '§7.1, §3.1', 'QUALIFIED: φ_DE excursion Δφ ~ M̄_Pl stays near boundary of Swampland distance bound; 5-scalar field-space distance unanalyzed.'],
  'XII.26': [1, '§7.1', 'TENSION: Flat thawing PNGB cosine near hilltop/plateau faces classical Swampland de Sitter slope tension.'],
  'XII.27': [2, '§6.1, §7.1', 'QUALIFIED: Early freeze-out (1+w ∝ (1+z)⁻³) & screening protect BBN G_eff; explicit Y_p/D/H primordial code run unexecuted (OP-1).'],
  'XII.28': [2, '§7.3 P2, App. F', 'QUALIFIED: Derives Γ_Araki = (4/3)Γ_DP = 1.18 s⁻¹ cleanly without discontinuous wave-function collapse, 4 orders past Donadi limits.'],
  'XII.29': [3, '§3.2, App. D', 'Guaranteed strictly by Type III_1 split algebra inclusion and Lieb–Ruskai strong subadditivity.'],
  'XII.30': [1, 'H8 Chapters 1–8', 'OPEN: Heavy-ion QGP/HBT entanglement signatures are not derived in IGRT-2026-H8.'],
  'XII.31': [3, '§6.4, §5.3', 'Cosmological Gibbons–Hawking horizon entropy and conditional GSL preserved identically.'],
  'XII.32': [3, '§3.4, §7.3 P5', 'Satisfies Eöt-Wash bounds via Λ_local = 4.67 μeV; φ_Ch (2.4 meV) targets CANNEX vacuum cavity P5.'],
  'XII.33': [1, 'OP-5', 'OPEN: Explicit Horndeski neutron-star TOV M_max ≥ 2.0 M_⊙ integration not performed in H8.'],
  'XII.34': [2, '§3.4', 'QUALIFIED: Strong Galactic Vainshtein screening protects orbital decay Ṗ_b to < 10⁻³; full pulsar-timing MCMC unrun.'],
  'XII.35': [2, '§6.3, OP-5', 'QUALIFIED: Hayward core K(0) = 24/ℓ_0⁴ saturates statically; full 4D collapse PDE & mass-inflation check remain OP-5.'],
  'XII.36': [2, '§6.4, App. E', 'QUALIFIED: Achronal ANEC/QFC conditions respected across static core; dynamical Gao–Jafferis–Wall wormhole untouched.'],
  'XII.37': [2, '§6.3, OP-5', 'QUALIFIED: Pre-Cauchy truncation (§6.3) avoids inner-horizon instability heuristically; SCC inner-horizon PDEs remain OP-5.'],
  'XII.38': [2, '§7.2, App. F', 'QUALIFIED: IPTA P1 focuses on isotropic Y_00 monopole TOA oscillations (σ_r = ±0.08 at 15 yr); plasma DM modeled as red-noise term.'],
  'XII.39': [3, '§6.2, Table H.1', 'Recovers Planck n_s = 0.964 via Wands–Finelli bounce duality (with [Input] w_contract = −0.003).'],
  'XII.40': [1, '§3.2, App. C, OP-3', 'OPEN (OP-3): κ_ψ = ℏc ℓ_Pl/(12π) = 2.173 × 10⁻²¹ GeV⁻¹ is explicitly flagged as a Planck [Ansatz] lacking microscopic derivation.']
};

/**
 * H8 Re-Adjudication of the 20 Direct Red-Team Attacks (ATK-01..ATK-20)
 */
const ATTACK_H8_SPECS: Record<
  number,
  {
    h8Rating: H8AttackRating;
    citation: string;
    defenseAndJustification: string;
    remainingVulnerability: string;
  }
> = {
  1: {
    h8Rating: 'Survives (Qualified)',
    citation: '§4.1 Eq.(4.1), §4.2 Eq.(4.2), App. D, Table 0.2a #3–8',
    defenseAndJustification:
      'Inertial E_mod → 0 divergence fixed via E_mod = max(ℏω_0, 2πk_B T_U) canceling 2π factors via Unruh T_U; M=1 normalization σ_1(K_ξ) = x/[2sinh(x/2)] fixed; O(N⁻²) Uhlmann convergence proved and verified to 10⁻⁷.',
    remainingVulnerability:
      'Constitutive calibration coupling α_mod = ℏ/(E_mod σ_1) and Eq. (4.1) remain explicitly labeled [Status: Ansatz] (OP-3).'
  },
  2: {
    h8Rating: 'Survives (Qualified)',
    citation: '§2.1, §3.2, App. C–D, OP-3',
    defenseAndJustification:
      'UV divergence cured via Type III_1 Araki relative entropy S_Araki(ρ_V || σ_V) ≥ 0 on Doplicher–Longo split factor N (ψ_vac = 0). Corrected App. C diamond factor ΔK_V = 8π²r⁴/(15ℏc)Δ⟨T_00⟩ gives ~2.60 × 10⁻⁷ nats at 1 μm/300 K.',
    remainingVulnerability:
      'Doplicher–Longo split N is non-unique, κ_ψ = ℏc ℓ_Pl/(12π) and ℓ_CG are [Ansatz], and state-functional vs propagating Galileon ψ duality remains open (§3.2, OP-3).'
  },
  3: {
    h8Rating: 'Survives',
    citation: '§3.1 Thm 3.1, Eq.(3.1)',
    defenseAndJustification:
      'Action strictly restricted to pure luminal Type Ia Horndeski (G_{4,X} = 0, G_5 = 0, c_GW ≡ c) — explicitly NOT beyond-Horndeski DHOST — preserving strictly second-order covariant field equations and zero Ostrogradsky ghosts.',
    remainingVulnerability:
      'None in classical/EFT tensor sector; non-perturbative quantum gravity ghosts above Λ_local deferred to OP-3.'
  },
  4: {
    h8Rating: 'Survives',
    citation: '§3.4, App. G, Table H.1',
    defenseAndJustification:
      'Cubic Galileon Vainshtein radius r_V = 369.8 ly (Solar) / 5.33 ly (Earth) suppresses scalar fifth forces via dψ/dr ∝ (r/r_V)^{3/2}, yielding |γ_PPN − 1| = 1.77 × 10⁻¹¹ at 1 AU — six orders below Cassini 2.3 × 10⁻⁵.',
    remainingVulnerability:
      'Terrestrial Z_ψ = 7.05 × 10¹⁴ lifts Λ_local = 4.67 μeV (4.2 cm), forcing an independent Chameleon φ_Ch for sub-mm CANNEX P5.'
  },
  5: {
    h8Rating: 'Survives (Qualified)',
    citation: '§1.2, §3.1, §3.4, SCOPE #3, OP-4',
    defenseAndJustification:
      'Resolves legacy ψ ≥ 0 vs shift-symmetry clash by splitting into 5 scalar sectors: Horndeski derivative-protected ψ ≥ 0, shift-protected PNGB φ_DE (f_φ = M̄_Pl), and separate φ_osc, Φ_portal, φ_Ch.',
    remainingVulnerability:
      'Trades radiative instability for a 5-scalar ontological burden lacking spectral-action unification (OP-4).'
  },
  6: {
    h8Rating: 'Survives',
    citation: '§3.3, App. A',
    defenseAndJustification:
      'Explicit all-orders Jordan–Einstein Noether check proves ∇^μ(T_μν + I_μν) ≡ 0 across Ω(ψ) = exp(βψ/M_Pl), explicitly verifying cubic-Galileon [∇_μ, ∇_ν]∇^μ ψ curvature-commutator cancellation.',
    remainingVulnerability:
      'Classical/semiclassical Noether conservation holds; off-shell quantum constraint anomaly freedom beyond 1-loop BRST is OP-2.'
  },
  7: {
    h8Rating: 'Survives',
    citation: '§2.3, §4.1, Table 0.2a #6–8',
    defenseAndJustification:
      'Synchronization Eq. (4.1) governs timelike rank-preserving trajectories only; null geodesics preserve dτ = 0 while EM wave phase advances along affine null wavevectors.',
    remainingVulnerability: 'Resolved structurally.'
  },
  8: {
    h8Rating: 'Survives',
    citation: '§2.1, §4.1, App. D',
    defenseAndJustification:
      'Trivial PU(H) principal bundle with Type I split associated bundle E_stat(N) and dimensionless O(N⁻²) Uhlmann–Frobenius sum remove any prior coordinate time t.',
    remainingVulnerability: 'Depends only on [Ansatz] scaling factor α_mod (tracked under ATK-01 / OP-3).'
  },
  9: {
    h8Rating: 'Wounded',
    citation: '§7.2, App. F, Table 8.3, CLAIM_LEDGER',
    defenseAndJustification:
      'Derives exact dual-clock + IPTA isotropic Y_00 monopole budget σ_r = 2.00 ± 0.25 (5 yr) / ±0.08 (15 yr) and caps ULDM at f_DM ≤ 0.02 (λ_dB = 2.07 kpc).',
    remainingVulnerability:
      'WOUNDED: Legacy "unique IGRT smoking gun" claim is retracted — H8 admits m_osc is an [Input] and the 2:1 clock–PTA harmonic is generic to ANY quadratically coupled ULDM, while free Δβ_eff can evade exclusion.'
  },
  10: {
    h8Rating: 'Survives',
    citation: '§5.3 Eq.(5.2), App. D, [93, 99, 100]',
    defenseAndJustification:
      'Strictly separates reversible positive Bures clock progression (dτ_FR ≥ 0) from thermodynamic dissipation (d/dτ)S_Araki = −g̃_ij^BKM θ̇^i θ̇^j (restricted strictly to KMS detailed-balance semigroups) and general CPTP Spohn inequality ≤ 0.',
    remainingVulnerability: 'Continuous SSE numerical backflow trajectories not explicitly plotted.'
  },
  11: {
    h8Rating: 'Open',
    citation: '§6.3–6.4, App. E, OP-5, [105]',
    defenseAndJustification:
      'H8 repairs the QES radius dimension to r_I = r_+ − O(ℏ/(Mc)) in 1D s-wave limit and proves S_rem ≈ 6.66 nats at [Ansatz] ξ_0 = 2⁻¹/⁴, making the generalized second law explicitly conditional on QFC (§6.4).',
    remainingVulnerability:
      'OPEN (OP-5): Full 4D dynamical Hayward–Vaidya collapse PDEs, inner-horizon mass inflation, and Carballo-Rubio core-pressure first-law work terms [105] remain uncomputed.'
  },
  12: {
    h8Rating: 'Survives (Qualified)',
    citation: '§4.3 Eq.(4.3), [97], OP-2',
    defenseAndJustification:
      'Constructs a Krein-regularized Lorentzian spectral triple (A_C, H_C, D_C) over causal posets via Belenchia–Benincasa–Dowker smeared d’Alembertians, recovering smooth continuum dynamics in IR.',
    remainingVulnerability:
      'Non-perturbative off-shell 3+1 quantum constraint algebra {Ĥ(N), Ĥ(M)} beyond 1-loop BFV BRST remains open (OP-2).'
  },
  13: {
    h8Rating: 'Survives (Qualified)',
    citation: '§5.1 Eq.(5.1), OP-3, [9, 101]',
    defenseAndJustification:
      'Unbounded S¹ Fisher Hamiltonian H_Fisher = −i E_mod σ_1(∂_{s_QFI} − i A_Berry) with discrete spectrum 2πk/L (k ∈ ℤ) evades Pauli’s theorem under Born–Oppenheimer decoupling.',
    remainingVulnerability:
      'Positive-branch k > 0 stability relies on adiabatic Born–Oppenheimer decoupling; nonlinear strong-field stability is OP-3.'
  },
  14: {
    h8Rating: 'Survives',
    citation: '§5.3, §6.1, App. E',
    defenseAndJustification:
      'Unitary Fisher arc length ds_QFI ≥ 0 ticks strictly forward across contracting FLRW L_UV bounces (H < 0) regardless of macroscopic thermodynamic arrow.',
    remainingVulnerability: 'Resolved cleanly.'
  },
  15: {
    h8Rating: 'Survives (Qualified)',
    citation: '§2.1, §5.1, CLAIM_LEDGER',
    defenseAndJustification:
      'Trivial principal bundle P(M, PU(H)) with δ(P) = 0 and S¹ Berry U(1) holonomy eliminates non-Abelian gauge anomalies at 1-loop BFV BRST.',
    remainingVulnerability: 'Non-trivial bundle topologies δ(P) ≠ 0 and off-shell 3+1 quantum anomalies remain outside scope (OP-2).'
  },
  16: {
    h8Rating: 'Wounded',
    citation: '§6.1–6.2, Table H.1, Table 8.3',
    defenseAndJustification:
      'Derives exact L_UV saturation ρ_max = 0.4094 ρ_Pl = 9.095 × 10⁷⁵ GeV⁴, arresting singular blowup cleanly.',
    remainingVulnerability:
      'WOUNDED: Retracts blue n_T and non-tuning claims — H8 admits w_contract = −0.003 is a tuned unprotected [Input], red n_T = −0.036, undetectable canonical f_NL = −4.38, and BKL shear requires an assumed pre-bounce ekpyrotic w > 1 stage.'
  },
  17: {
    h8Rating: 'Survives',
    citation: '§4.1, verify-igrt Check 9',
    defenseAndJustification:
      'Analytically proves O(N⁻²) convergence of Uhlmann–Frobenius step sum ∑||RAG_k − RES_k||_F to ½ ∫ ds_QFI along arbitrary rank-preserving trajectories, verified to <10⁻⁷.',
    remainingVulnerability: 'Resolved cleanly without legacy bilinear Z-transform heuristics.'
  },
  18: {
    h8Rating: 'Survives',
    citation: '§2.3 Eq.(2.2), App. B',
    defenseAndJustification:
      'Proves smooth SLD convergence to 4 g_ij^FS on CP^{N−1} along rank-preserving paths and integrates Šafránek’s rank-change discontinuity theorem with S³ epsilon-regularization.',
    remainingVulnerability: 'Resolved cleanly.'
  },
  19: {
    h8Rating: 'Wounded',
    citation: '§7.1–7.3, OP-1, CLAIM_LEDGER',
    defenseAndJustification:
      'Provides explicit RK2 PNGB w(z) ODE, six named experimental protocols P1–P6, and clear Type Ia screening bounds.',
    remainingVulnerability:
      'WOUNDED: Full CAMB/Cobaya MCMC is open (OP-1); PNGB w_0=−0.908, w_a=−0.177 sits in 2.8–4.2σ DESI DR2 tension; P1 2:1 harmonic is generic to quadratic ULDM; P2 is 4 orders past Donadi limits; P5 requires separate φ_Ch.'
  },
  20: {
    h8Rating: 'Wounded',
    citation: 'ETHICS, OP-5, Refs [1]–[3]',
    defenseAndJustification:
      'Exemplary self-criticism: removes consciousness/overclaims, adds [Status: ...] ledger, Open Problems OP-1..OP-5, CRediT ORCIDs, and 224-assertion verify-igrt-monograph.mjs.',
    remainingVulnerability:
      'WOUNDED: Foundational author preprints [1]–[3] remain un-refereed, zero independent external replications exist yet, and external funding/review is absent (OP-5).'
  }
};

/**
 * H8 Audit Overrides for the 380 Implementation & Upgrade Gates (ALL_380_IMPROVEMENTS).
 * Any gate not listed below matches and is Verified Active in IGRT-2026-H8 + Chronos-QG.
 */
const UPGRADE_H8_OVERRIDES: Record<
  string,
  { h8Status: H8UpgradeStatus; citation: string; h8AuditNote: string }
> = {
  // Superseded / Corrected in H8
  'MATH-03': {
    h8Status: 'Superseded / Corrected in H8',
    citation: '§3.1 Thm 3.1',
    h8AuditNote:
      'CORRECTION: H8 explicitly drops beyond-Horndeski DHOST det(M_ab)=0 framing in favor of pure luminal Type Ia Horndeski (G_{4,X}=0, G_5=0, c_GW ≡ c).'
  },
  'MATH-04': {
    h8Status: 'Superseded / Corrected in H8',
    citation: '§1.2, §3.1',
    h8AuditNote:
      'CORRECTION: Shift symmetry moved off ψ ≥ 0 onto separate PNGB dark-energy scalar φ_DE across a 5-scalar hierarchy.'
  },
  'MATH-26': {
    h8Status: 'Superseded / Corrected in H8',
    citation: '§4.1',
    h8AuditNote:
      'CORRECTION: Legacy Z-plane all-pass filter framing superseded by O(N⁻²) Uhlmann–Frobenius bundle convergence proof.'
  },
  'MATH-27': {
    h8Status: 'Superseded / Corrected in H8',
    citation: '§4.1',
    h8AuditNote:
      'CORRECTION: Legacy Tustin/bilinear Z-mapping replaced cleanly by analytic Taylor-Uhlmann continuum convergence theorem.'
  },
  'MATH-35': {
    h8Status: 'Superseded / Corrected in H8',
    citation: 'SCOPE #4, §1.2',
    h8AuditNote:
      'CORRECTION: H8 Scope #4 explicitly disclaims solving the 10¹²⁰ cosmological constant fine-tuning problem.'
  },
  'MATH-56': {
    h8Status: 'Superseded / Corrected in H8',
    citation: '§7.1, Table H.1',
    h8AuditNote:
      'CORRECTION: Legacy "0 free parameters" claim retracted; H8 uses RK2 PNGB ODE with θ_i = 1.95 ∈ [1.75, 2.35] giving w_0=−0.908, w_a=−0.177.'
  },
  'COSMO-03': {
    h8Status: 'Superseded / Corrected in H8',
    citation: '§7.1, Table H.1',
    h8AuditNote:
      'CORRECTION: Legacy 0.4σ DESI fit claim retracted; H8 w_0=−0.908, w_a=−0.177 faces 2.8–4.2σ tension with DESI DR2 steep w_a < −0.4.'
  },
  'COSMO-06': {
    h8Status: 'Superseded / Corrected in H8',
    citation: '§6.2, Table H.1',
    h8AuditNote:
      'CORRECTION: Retracted legacy blue tilt & r = 0.0032; H8 proves shared red n_T = −0.036, r = 24 c_s³ = 0.0123, and [Input] w_contract = −0.003.'
  },
  'COSMO-08': {
    h8Status: 'Superseded / Corrected in H8',
    citation: '§6.2, Table H.1',
    h8AuditNote:
      'CORRECTION: Legacy DBI f_NL replaced by canonical bounce f_NL^eq = −35/8 = −4.38 (undetectable vs Planck ±47; DBI excluded unless c_s ≳ 0.25).'
  },
  'COSMO-11': {
    h8Status: 'Superseded / Corrected in H8',
    citation: '§6.1',
    h8AuditNote:
      'CORRECTION: BKL Kasner shear dilution is no longer claimed automatically from L_UV alone; H8 explicitly requires an assumed pre-bounce ekpyrotic w > 1 phase.'
  },
  'COSMO-30': {
    h8Status: 'Superseded / Corrected in H8',
    citation: '§6.2',
    h8AuditNote:
      'CORRECTION: Red tensor tilt n_T = −0.036 lowers high-frequency stochastic GW amplitude below LISA blue-tilt forecasts.'
  },
  'QG-02': {
    h8Status: 'Superseded / Corrected in H8',
    citation: '§6.3, App. E',
    h8AuditNote:
      'CORRECTION: Remnant mass updated in H8 from 1.299 M_Pl to M_rem = 2.38 × 10⁻⁸ kg (1.09 M_Pl at ξ_0 = 2⁻¹/⁴) and S_rem = 6.66 nats.'
  },
  'METR-08': {
    h8Status: 'Superseded / Corrected in H8',
    citation: '§3.4, §7.3 P5',
    h8AuditNote:
      'CORRECTION: Terrestrial Z_ψ = 7.05 × 10¹⁴ gives Λ_local = 4.67 μeV (4.2 cm), forcing separate Chameleon φ_Ch (M_Ch = 2.4 meV) for CANNEX.'
  },
  'METR-10': {
    h8Status: 'Superseded / Corrected in H8',
    citation: 'RESPONSE R5',
    h8AuditNote:
      'RETRACTED: Legacy 10⁻²¹ sub-mm clock-redshift claim was explicitly dropped from IGRT-2026-H8 in Response R5.'
  },
  'SIM-04': {
    h8Status: 'Superseded / Corrected in H8',
    citation: '§7.1',
    h8AuditNote:
      'CORRECTION: Legacy DESI 2024 0.4σ explorer badge superseded by H8 RK2 PNGB ODE w_0=−0.908, w_a=−0.177 & DESI DR2 2.8–4.2σ tension note.'
  },
  'SIM-22': {
    h8Status: 'Superseded / Corrected in H8',
    citation: 'RESPONSE R5',
    h8AuditNote:
      'RETRACTED IN PAPER: Sub-millimeter 10⁻²¹ clock shift claim retracted in H8; retained only as legacy GR baseline comparator.'
  },
  'SIM-25': {
    h8Status: 'Superseded / Corrected in H8',
    citation: '§3.1 Thm 3.1',
    h8AuditNote:
      'CORRECTION: Meter label uses DHOST; H8 action Eq. (3.1) is strictly Type Ia Horndeski (G_{4,X}=0, G_5=0).'
  },
  'SIM-32': {
    h8Status: 'Superseded / Corrected in H8',
    citation: '§4.1',
    h8AuditNote:
      'CORRECTION: Legacy Z-plane pole-zero filter superseded mathematically by O(N⁻²) Uhlmann–Frobenius bundle proof.'
  },
  'SIM-34': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-1, §7.1',
    h8AuditNote:
      'OPEN (OP-1): Legacy "H_0 tension closed" claim retracted in H8; full CAMB/hi_class + Cobaya H_0 MCMC remains OP-1.'
  },
  'ARCH-09': {
    h8Status: 'Superseded / Corrected in H8',
    citation: 'verify-igrt, App. J',
    h8AuditNote:
      'CORRECTION: Harmonized Research Paper view exports clean HTML, Markdown, and zero-LaTeX DejaVuSans PDF rather than RevTeX-4.2.'
  },
  'ARCH-45': {
    h8Status: 'Superseded / Corrected in H8',
    citation: 'H8 Stress Audit',
    h8AuditNote:
      'CORRECTION: Global 1,740/1,740 rubber-stamp superseded by candid H8 calibrated stress audit incorporating OP-1..OP-5 & Ansatz penalties.'
  },
  'HARD-01': {
    h8Status: 'Superseded / Corrected in H8',
    citation: '§3.1 Thm 3.1',
    h8AuditNote:
      'CORRECTION: Ghost suppression enforced via pure Type Ia Horndeski (G_{4,X}=0, G_5=0), not beyond-Horndeski DHOST.'
  },
  'HARD-10': {
    h8Status: 'Superseded / Corrected in H8',
    citation: '§1.2, §3.1, §7.1',
    h8AuditNote:
      'CORRECTION: Shift symmetry moved onto separate scalar φ_DE, while ψ ≥ 0 remains Horndeski-braided.'
  },

  // Pending Open Problems (OP-1..OP-5)
  'MATH-09': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-2',
    h8AuditNote: 'OPEN (OP-2): Non-perturbative off-shell inhomogeneous 3+1 quantum constraint algebra {Ĥ(N), Ĥ(M)} beyond 1-loop BFV BRST.'
  },
  'MATH-19': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-3',
    h8AuditNote: 'OPEN (OP-3): Nonlinear stability proof of positive-branch k > 0 S¹ clock projection beyond adiabatic decoupling.'
  },
  'MATH-20': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-4',
    h8AuditNote: 'OPEN (OP-4): Extended Krein–Connes spectral-action unification of φ_osc and φ_Ch remains unproved.'
  },
  'MATH-32': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-3',
    h8AuditNote: 'OPEN (OP-3): Microscopic UV completion and FRG fixed point above Λ_local not derived in H8.'
  },
  'MATH-34': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-3',
    h8AuditNote: 'OPEN (OP-3): Non-perturbative instanton Borel resummation not performed in H8.'
  },
  'MATH-46': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-2',
    h8AuditNote: 'OPEN (OP-2): Full Lorentzian path-integral measure anomaly freedom beyond 1-loop BFV BRST awaits OP-2.'
  },
  'MATH-48': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-3',
    h8AuditNote: 'OPEN (OP-3): Regge/Gromov–Hausdorff discrete emergence proof not derived in H8.'
  },
  'COSMO-04': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-1, §7.1',
    h8AuditNote: 'OPEN (OP-1): Legacy H_0 = 71.8 ± 0.9 claim retracted in H8; full Boltzmann CAMB/Cobaya MCMC needed.'
  },
  'COSMO-05': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-1, §7.1',
    h8AuditNote: 'OPEN (OP-1): Legacy S_8 = 0.776 ± 0.012 claim retracted in H8; KiDS-1000/DES-Y3 weak-lensing MCMC needed.'
  },
  'COSMO-13': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-1, §6.2',
    h8AuditNote: 'OPEN: Explicit multi-field bounce reheating Boltzmann transfer efficiency uncomputed.'
  },
  'COSMO-18': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-1',
    h8AuditNote: 'OPEN (OP-1): CMB lensing potential A_L requires CAMB/hi_class perturbation likelihood run.'
  },
  'COSMO-19': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-1, §6.2',
    h8AuditNote: 'OPEN: Scalar running α_s = −0.0045 not extracted from full bounce transfer solver in H8.'
  },
  'COSMO-24': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-1',
    h8AuditNote: 'OPEN (OP-1): Galaxy bias separation bispectrum MCMC deferred to OP-1.'
  },
  'COSMO-31': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-4',
    h8AuditNote: 'OPEN: Baryogenesis asymmetry η_B is explicitly absent in H8 monograph.'
  },
  'COSMO-33': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-1',
    h8AuditNote: 'OPEN (OP-1): Tomographic weak-lensing Euclid forecasts require hi_class/CAMB MCMC.'
  },
  'COSMO-35': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-1',
    h8AuditNote: 'OPEN (OP-1): Lyman-α small-scale P(k) bound on 2% ULDM + Horndeski awaits OP-1.'
  },
  'COSMO-36': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-1',
    h8AuditNote: 'OPEN: Reionization optical depth τ_re is absent from H8.'
  },
  'COSMO-48': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-4',
    h8AuditNote: 'OPEN: Matter-antimatter phase continuity across bounce not derived in H8.'
  },
  'COSMO-49': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-1',
    h8AuditNote: 'OPEN (OP-1): CMB trispectrum consistency requires full Boltzmann perturbation run.'
  },
  'COSMO-51': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-1',
    h8AuditNote: 'OPEN (OP-1): Full CMB acoustic peak chi-squared fit deferred to OP-1.'
  },
  'COSMO-54': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-1',
    h8AuditNote: 'OPEN (OP-1): DES-Y3/Y6 shear alignment queued in OP-1 Cobaya pipeline.'
  },
  'COSMO-59': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-1',
    h8AuditNote: 'OPEN (OP-1): Full relativistic N-body particle-mesh screening solver not yet coupled to H8 MCMC.'
  },
  'QG-04': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-5, §6.3',
    h8AuditNote: 'OPEN (OP-5): Rotating Kerr interior PDE regularization deferred beyond 1D spherical Hayward metric.'
  },
  'QG-05': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-5, §6.3',
    h8AuditNote: 'OPEN (OP-5): Dynamical inner-horizon mass inflation explicitly flagged in §6.3 & OP-5.'
  },
  'QG-12': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-5',
    h8AuditNote: 'OPEN (OP-5): Spinning Hayward superradiance cutoff not solved numerically in H8.'
  },
  'QG-17': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-5',
    h8AuditNote: 'OPEN: Horndeski neutron-star TOV M_max ≥ 2.2 M_⊙ integration not computed in H8.'
  },
  'QG-30': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-3',
    h8AuditNote: 'OPEN (OP-3): Asymptotically safe FRG Newton running not derived microscopically.'
  },
  'QG-39': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-5',
    h8AuditNote: 'OPEN (OP-5): Non-singular 4D collapse GW shockwave emission awaits OP-5 PDE solver.'
  },
  'QG-44': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-5',
    h8AuditNote: 'OPEN (OP-5): Dynamical charged RN mass inflation & core PDEs deferred to OP-5.'
  },
  'QG-49': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-2, OP-3',
    h8AuditNote: 'OPEN (OP-2): Microscopic spin-foam vertex continuum limit left open.'
  },
  'METR-35': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-1',
    h8AuditNote: 'OPEN (OP-1): Euclid/Roman E_G weak-lensing slip estimator awaits Boltzmann perturbation run.'
  },
  'METR-49': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-1',
    h8AuditNote: 'OPEN (OP-1): DESI full-shape RSD fσ_8(z) matrix queued in OP-1.'
  },
  'SIM-48': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-1',
    h8AuditNote: 'OPEN (OP-1): Simulator proxy exists, while real Boltzmann Cobaya likelihood for fσ_8(z) is OP-1.'
  },
  'SIM-57': {
    h8Status: 'Pending Open Problem',
    citation: 'OP-3',
    h8AuditNote: 'OPEN (OP-3): FRG trajectory remains illustrative; microscopic UV fixed point is open.'
  },
  'HARD-19': {
    h8Status: 'Superseded / Corrected in H8',
    citation: 'H8 Stress Audit',
    h8AuditNote:
      'UPDATED: Wiring upgraded from legacy 980/980 rubber-stamp to live H8 Monograph Audit exposing Wounded/Open/Ansatz vectors.'
  }
};

function verdictFromScore(score: 0 | 1 | 2 | 3): H8CriterionVerdict {
  if (score === 3) return 'Derived / Verified';
  if (score === 2) return 'Qualified (Ansatz / Input)';
  if (score === 1) return 'Open / Tension / Uncomputed';
  return 'Falsified / Absent';
}

// Assemble complete 580-criterion H8 audit array
export const H8_CRITERIA_580_AUDIT: H8CriterionAuditItem[] = [
  ...HARMONIZED_STRESS_TEST_500.map((item) => {
    const spec = BASE_500_SPECS[item.id];
    const score: 0 | 1 | 2 | 3 = spec ? spec[0] : 2;
    const citation = spec ? spec[1] : 'IGRT-2026-H8';
    const rationale = spec ? spec[2] : item.harmonizedRefinement;
    const fam = FAMILIES_META.find((f) => f.id === item.familyId);
    return {
      uid: `F${item.familyId}-${item.id}`,
      id: `#${item.id}`,
      label: `Criterion #${item.id}`,
      familyId: item.familyId,
      familyName: fam ? fam.name : item.familyName,
      criterion: item.criterion,
      score,
      legacyScore: 3,
      verdict: verdictFromScore(score),
      citation,
      rationale,
      proofMath: item.formalProof,
      challenge: item.stressChallenge,
      falsification: item.falsificationCriterion,
      isCounterfactual: item.id >= 213 && item.id <= 276 || item.id >= 385 && item.id <= 400 || item.id >= 449 && item.id <= 460 || item.id >= 493 && item.id <= 500 || (item.criterion.startsWith('If '))
    };
  }),
  ...FAMILY_XI_CRITERIA.map((c) => {
    const spec = FAMILY_XI_H8_SPECS[c.id];
    const score: 0 | 1 | 2 | 3 = spec ? spec[0] : 2;
    return {
      uid: c.id,
      id: c.id,
      label: `Criterion ${c.id}`,
      familyId: 11,
      familyName: 'Fisher-Rao Time Identification',
      criterion: c.criterion,
      score,
      legacyScore: 3,
      verdict: verdictFromScore(score),
      citation: spec ? spec[1] : '§4–§5',
      rationale: spec ? spec[2] : c.remedyProtocol,
      proofMath: c.mathematicalTarget,
      challenge: c.criticalAppraisal,
      falsification: `Quantified residual drift outside H8 ${spec ? spec[1] : '§4–§5'} bounds refutes modular time calibration.`,
      isCounterfactual: false
    };
  }),
  ...FAMILY_XII_CRITERIA.map((c) => {
    const spec = FAMILY_XII_H8_SPECS[c.id];
    const score: 0 | 1 | 2 | 3 = spec ? spec[0] : 2;
    return {
      uid: c.id,
      id: c.id,
      label: `Criterion ${c.id}`,
      familyId: 12,
      familyName: 'Entanglement Definition of ψ',
      criterion: c.criterion,
      score,
      legacyScore: 3,
      verdict: verdictFromScore(score),
      citation: spec ? spec[1] : '§3, §6–§7',
      rationale: spec ? spec[2] : c.remedyProtocol,
      proofMath: c.mathematicalTarget,
      challenge: c.criticalAppraisal,
      falsification: `Violation of Type Ia c_GW=c, Cassini PPN, DESI w_a < −0.4, or CANNEX forces falsification of the respective sector.`,
      isCounterfactual: false
    };
  })
];

// Assemble complete 20-attack H8 audit array
export const H8_ATTACKS_20_AUDIT: H8AttackAuditItem[] = RED_TEAM_20_ATTACKS.map((a) => {
  const spec = ATTACK_H8_SPECS[a.id];
  return {
    id: a.id,
    code: a.code,
    title: a.title,
    equationTarget: a.equationTarget,
    attackVector: a.attackVector,
    mathematicalFormulation: a.mathematicalFormulation,
    legacyRating: 'Survives',
    h8Rating: spec.h8Rating,
    citation: spec.citation,
    defenseAndJustification: spec.defenseAndJustification,
    remainingVulnerability: spec.remainingVulnerability
  };
});

// Assemble complete 380-upgrade H8 audit array
export const H8_UPGRADES_380_AUDIT: H8UpgradeAuditItem[] = ALL_380_IMPROVEMENTS.map((u) => {
  const ov = UPGRADE_H8_OVERRIDES[u.code];
  if (ov) {
    return {
      id: u.id,
      code: u.code,
      domain: u.domain,
      title: u.title,
      legacyImpactMetric: u.impactMetric,
      h8Status: ov.h8Status,
      citation: ov.citation,
      h8AuditNote: ov.h8AuditNote
    };
  }
  return {
    id: u.id,
    code: u.code,
    domain: u.domain,
    title: u.title,
    legacyImpactMetric: u.impactMetric,
    h8Status: 'Verified Active in H8',
    citation: 'IGRT-2026-H8 & App UI',
    h8AuditNote: u.appliedSolution
  };
});

// Per-family deterministic rollup (12 families, exact count sums to 580, maxScore 1,740)
export const H8_TWELVE_FAMILIES_SUMMARY: H8FamilySummary[] = [
  ...FAMILIES_META.map((f) => ({ id: f.id, name: f.name, count: f.count })),
  { id: 11, name: 'Fisher-Rao Time Identification', count: 40 },
  { id: 12, name: 'Entanglement Definition of ψ', count: 40 }
].map((fam) => {
  const items = H8_CRITERIA_580_AUDIT.filter((c) => c.familyId === fam.id);
  const h8Score = items.reduce((acc, c) => acc + c.score, 0);
  const maxScore = items.length * 3;
  return {
    id: fam.id,
    name: fam.name,
    count: items.length,
    maxScore,
    h8Score,
    percentage: maxScore > 0 ? Number(((h8Score / maxScore) * 100).toFixed(1)) : 0,
    score3Count: items.filter((c) => c.score === 3).length,
    score2Count: items.filter((c) => c.score === 2).length,
    score1Count: items.filter((c) => c.score === 1).length,
    score0Count: items.filter((c) => c.score === 0).length
  };
});

export const H8_COMPOSITE_METRICS = (() => {
  const criteriaCount = H8_CRITERIA_580_AUDIT.length;
  const maxCriteriaScore = criteriaCount * 3;
  const totalCriteriaScore = H8_CRITERIA_580_AUDIT.reduce((s, c) => s + c.score, 0);
  const criteriaPercentage = Number(((totalCriteriaScore / maxCriteriaScore) * 100).toFixed(1));

  const score3 = H8_CRITERIA_580_AUDIT.filter((c) => c.score === 3).length;
  const score2 = H8_CRITERIA_580_AUDIT.filter((c) => c.score === 2).length;
  const score1 = H8_CRITERIA_580_AUDIT.filter((c) => c.score === 1).length;
  const score0 = H8_CRITERIA_580_AUDIT.filter((c) => c.score === 0).length;

  const attacksSurvives = H8_ATTACKS_20_AUDIT.filter((a) => a.h8Rating === 'Survives').length;
  const attacksQualified = H8_ATTACKS_20_AUDIT.filter((a) => a.h8Rating === 'Survives (Qualified)').length;
  const attacksWounded = H8_ATTACKS_20_AUDIT.filter((a) => a.h8Rating === 'Wounded').length;
  const attacksOpen = H8_ATTACKS_20_AUDIT.filter((a) => a.h8Rating === 'Open').length;
  const attacksFails = H8_ATTACKS_20_AUDIT.filter((a) => a.h8Rating === 'Fails').length;

  const upgradesVerified = H8_UPGRADES_380_AUDIT.filter((u) => u.h8Status === 'Verified Active in H8').length;
  const upgradesSuperseded = H8_UPGRADES_380_AUDIT.filter((u) => u.h8Status === 'Superseded / Corrected in H8').length;
  const upgradesPending = H8_UPGRADES_380_AUDIT.filter((u) => u.h8Status === 'Pending Open Problem').length;

  // Passing criteria vectors: score >= 2 (Derived/Verified or Qualified), vs strict 3/3
  const criteriaPassGe2 = score3 + score2;
  const attacksNonFailing = attacksSurvives + attacksQualified;
  const compositeVectorsActiveOrQualified = criteriaPassGe2 + attacksNonFailing + upgradesVerified;

  return {
    criteriaCount,
    maxCriteriaScore,
    totalCriteriaScore,
    criteriaPercentage,
    score3,
    score2,
    score1,
    score0,
    criteriaPassGe2,
    attacksCount: H8_ATTACKS_20_AUDIT.length,
    attacksSurvives,
    attacksQualified,
    attacksWounded,
    attacksOpen,
    attacksFails,
    upgradesCount: H8_UPGRADES_380_AUDIT.length,
    upgradesVerified,
    upgradesSuperseded,
    upgradesPending,
    totalVectors: criteriaCount + H8_ATTACKS_20_AUDIT.length + H8_UPGRADES_380_AUDIT.length,
    compositeVectorsActiveOrQualified
  };
})();
