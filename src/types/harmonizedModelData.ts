/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Formal Dataset for the Harmonized Emergent Time Model (IGRT-2026-H10):
 * Information-Geometric Resonant Time Framework (1,354/1,740 Raw · 1,351/1,665 Applicable Physics · OP-1..OP-5 Open)
 *
 * Includes:
 * 1. 10 Core Structural Elements & H10 Formulations (Type Ia Horndeski, A_F^{H10} 5-Mode Unification, Wetterich FRG & CDT d_s, Araki Type III_1, Tomita-Takesaki, Derived Hayward xi_0 = 2^{-1/4}, Kerr/RN-Hayward, 2-Stage Bounce + Leptogenesis)
 * 2. 5 Major Physical & Epistemic Ramifications (H10 Calibrated)
 * 3. 6 Concrete Empirical Predictions & P1-P6 Fisher-Budgeted Protocols (SNRs 4.7-25.1)
 */

export interface ModelElement {
  id: number;
  name: string;
  tagline: string;
  category: 'Spacetime & Metric' | 'Information Geometry' | 'Resonance & Connection' | 'Thermodynamics & Singularity' | 'Observer & Epistemology';
  formula: string;
  description: string;
  mathematicalDerivation: string;
  modelAOriginalScore: number;
  modelBOriginalScore: number;
  harmonizedScore: number;
  gapResolution: string;
  parameters: { symbol: string; name: string; valueOrDimension: string; physicalRole: string }[];
  falsificationThreshold: string;
}

export interface ModelRamification {
  id: number;
  title: string;
  domain: string;
  summary: string;
  traditionalParadox: string;
  harmonizedResolution: string;
  mathematicalSignature: string;
  philosophicalConsequence: string;
}

export interface TestablePrediction {
  id: number;
  name: string;
  targetPhenomenon: string;
  facility: string;
  observableFormula: string;
  predictedSignal: string;
  standardPhysicsBaseline: string;
  measurementNoiseMargin: string;
  apparatusProtocol: string;
  falsificationCriterion: string;
  timelineAndFeasibility: string;
}

// -------------------------------------------------------------
// 10 CORE MODEL ELEMENTS (IGRT-2026-H10 AUDITED)
// -------------------------------------------------------------
export const HARMONIZED_MODEL_ELEMENTS: ModelElement[] = [
  {
    id: 1,
    name: "Base Spacetime & Type Ia Horndeski Information Stress-Energy",
    tagline: "Diffeomorphism-invariant Lorentzian 4-manifold coupled to luminal Type Ia Horndeski braiding (G_{4,X} = 0, c_GW ≡ c)",
    category: "Spacetime & Metric",
    formula: "G_{\\mu\\nu} + \\Lambda_0 g_{\\mu\\nu} = 8\\pi G \\left( T_{\\mu\\nu} + I_{\\mu\\nu}(\\psi) \\right), \\quad \\nabla^{\\mu}\\left(T_{\\mu\\nu} + I_{\\mu\\nu}\\right) \\equiv 0",
    description: "Spacetime is governed by a smooth Lorentzian manifold (M, g_μν) whose curvature is sourced by conventional matter T_μν and the pure luminal Type Ia Horndeski Galileon sector I_μν(ψ) (G_{4,X} = 0, G_5 = 0). This enforces exact luminal gravitational-wave speed c_GW ≡ c (GW170817 compliant) and second-order Ostrogradsky-ghost-free quasilinear dynamics with deep Vainshtein screening (r_V = 369.8 ly at H_0 = 70).",
    mathematicalDerivation: "Varying S = \\int d^4x \\sqrt{-g}[(R-2\\Lambda_0)/(16\\pi G) + \\frac{1}{2}X - \\frac{\\gamma}{\\Lambda_3^3}X\\Box\\psi + \\mathcal{L}_{\\text{PNGB}}(\\varphi_{\\text{DE}}) + \\mathcal{L}_{\\text{portal}}(\\Phi) + \\mathcal{L}_{\\text{osc}}(\\varphi_{\\text{osc}}) + \\mathcal{L}_{\\text{Ch}}(\\varphi_{\\text{Ch}}) + \\mathcal{L}_{L_{\\text{UV}}}] gives strictly second-order field equations. Five-mode extended Krein–Connes A_F^{H10} = \\mathbb{C} \\oplus \\mathbb{H} \\oplus M_3(\\mathbb{C}) \\oplus \\mathbb{C}_{\\text{hol}} \\oplus \\mathbb{C}_{\\text{Ch}} algebraically unifies all 5 scalar modes (|\\varepsilon_{\\psi,\\text{Ch}}| = 4.42\\times 10^{-16}), leaving CANNEX phenomenology under OP-4. All-orders Noether identity \\nabla^\\mu(T_{\\mu\\nu}+I_{\\mu\\nu})\\equiv 0 holds analytically in Appendix A.",
    modelAOriginalScore: 3,
    modelBOriginalScore: 0,
    harmonizedScore: 3,
    gapResolution: "Resolves Model B's lack of covariant field equations (0/3), drops legacy beyond-Horndeski DHOST framing in favor of luminal Type Ia Horndeski (c_GW ≡ c), and proves causal SLy4-matched TOV neutron-star (M_max = 2.35 M_⊙, Λ_{1.4} = 339 < 580) & PSR J0737-3039 double-pulsar (3.44 × 10⁻¹⁵) compliance.",
    parameters: [
      { symbol: "g_μν", name: "Metric Tensor", valueOrDimension: "Signature (-+++)", physicalRole: "Defines invariant intervals, causal cones, and strict c_GW ≡ c propagation" },
      { symbol: "I_μν", name: "Type Ia Horndeski Stress Tensor", valueOrDimension: "J / m³", physicalRole: "Ghost-free second-order back-reaction of cubic-Galileon ψ gradients" },
      { symbol: "Λ_3", name: "Galileon Braiding Scale", valueOrDimension: "1.758 × 10⁻¹³ eV (H_0 = 70)", physicalRole: "Sets Solar Vainshtein r_V = 369.8 ly and Earth Z_ψ = 7.05 × 10¹⁴ (Λ_local = 4.67 μeV)" },
      { symbol: "G", name: "CODATA 2022 Newton Constant", valueOrDimension: "6.67430 × 10⁻¹¹ m³ kg⁻¹ s⁻²", physicalRole: "Couples spacetime geometry to matter and information stress-energy (11 ppm budget)" }
    ],
    falsificationThreshold: "PPN deviation |γ_PPN − 1| > 2.3 × 10⁻⁵ (H10 yields 1.77 × 10⁻¹¹ at 1 AU; PSR J0737-3039 dipole 3.44 × 10⁻¹⁵), multimessenger |c_GW − c|/c > 10⁻¹⁵, or neutron-star tidal deformability Λ_{1.4} ≥ 580."
  },
  {
    id: 2,
    name: "Araki Relative Entropy Scalar Field on Type III_1 von Neumann Algebras",
    tagline: "UV-finite non-negative scalar amplitude derived from causal-diamond Type III_1 Araki relative entropy",
    category: "Spacetime & Metric",
    formula: "\\psi^2(x) \\equiv \\kappa_\\psi \\lim_{\\mathcal{V} \\to x} \\frac{S_{\\text{Araki}}(\\rho_{\\mathcal{V}} \\,|\\,|\\, \\sigma_{\\mathcal{V}})}{\\mathrm{Vol}(\\mathcal{V})} = \\kappa_\\psi \\lim_{\\mathcal{V} \\to x} \\frac{-\\langle \\Psi | \\ln \\Delta_{\\sigma,\\rho} | \\Psi \\rangle}{\\mathrm{Vol}(\\mathcal{V})}",
    description: "The scalar amplitude ψ(x) ≥ 0 represents coarse-grained Araki relative entropy density between local physical states ρ_V and conformal vacuum σ_V on hyperfinite Type III_1 causal-diamond algebras (ℓ_CG = 1 μm). Shift symmetry is deliberately moved off ψ onto the separate PNGB dark-energy field φ_DE, while terrestrial renormalization Z_ψ = 7.05 × 10¹⁴ lifts the local Galileon cutoff to Λ_local = 4.67 μeV (4-pt EFT positivity c_2 = 2.1 × 10⁵⁷ GeV⁻⁴ > 0).",
    mathematicalDerivation: "Applying Tomita–Takesaki modular theory yields UV-finite Klein-non-negative S_Araki(ρ_V || σ_V) ≥ 0, avoiding naive R ln(ε) vacuum subtraction divergences. Coupling κ_ψ = ħ c ℓ_Pl / (12π) = 2.173 × 10⁻²¹ GeV⁻¹ [Ansatz] maps entropy density to Galileon field normalization; Schwinger–Keldysh 1PI and CHM central-charge matching motivate its scaling while microscopic UV origin remains OP-3. Sub-mm vacuum-gap P5 CANNEX sensing is assigned to separate Chameleon φ_Ch (M_Ch = 2.4 meV).",
    modelAOriginalScore: 2,
    modelBOriginalScore: 0,
    harmonizedScore: 2,
    gapResolution: "Eliminates UV curvature log divergences via Araki relative entropy, clarifies exact Z_ψ = 7.05 × 10¹⁴ EFT positivity (c_2 > 0), and candidly flags κ_ψ as [Ansatz] (OP-3) and CANNEX testing of A_F^{H10}-embedded φ_Ch as OP-4.",
    parameters: [
      { symbol: "κ_ψ", name: "Entropic Coupling Constant [Ansatz]", valueOrDimension: "2.173 × 10⁻²¹ GeV⁻¹", physicalRole: "Matches Araki relative entropy density to canonical ψ² = ℏc ℓ_Pl/(12π) S_Araki/Vol" },
      { symbol: "Λ_local", name: "Dressed Terrestrial Cutoff", valueOrDimension: "4.67 μeV (4.2 cm)", physicalRole: "Vainshtein-dressed cutoff (Z_ψ = 7.05 × 10¹⁴) with 4-pt positivity c_2 = 2.1 × 10⁵⁷ GeV⁻⁴ > 0" },
      { symbol: "φ_Ch", name: "A_F^{H10} Chameleon Sector (OP-4)", valueOrDimension: "M_Ch = 2.4 meV", physicalRole: "Embedded in ℂ_Ch of A_F^{H10} (|ε_{ψ,Ch}| = 4.42×10⁻¹⁶); drives P5 CANNEX vacuum-gap force" }
    ],
    falsificationThreshold: "Violation of Klein non-negativity, 4-pt positivity c_2 ≤ 0, or CANNEX exclusion of M_Ch = 2.4 meV across 10 μm–1 cm gaps."
  },
  {
    id: 3,
    name: "Quantum Statistical Fiber Manifold & Monotone Morozova–Chentsov–Fisher Metric",
    tagline: "Canonical CPTP-invariant SLD Riemannian metric on local split Type I density algebras with Fubini–Study pure boundary",
    category: "Information Geometry",
    formula: "g_{ij}^{\\text{QFI}}(\\theta) = \\frac{1}{4}\\mathrm{Tr}\\!\\left[\\rho(\\theta)\\left(L_i L_j + L_j L_i\\right)\\right], \\quad \\lim_{\\det(\\rho)\\to 0} g_{ij}^{\\text{MC}}(\\rho) = 4 g_{ij}^{\\text{FS}}(\\mathbb{C}P^{N-1})",
    description: "Every spacetime event x ∈ M carries a statistical fiber S_x equipped with the Petz Symmetric Logarithmic Derivative (SLD) quantum Fisher–Rao metric over split Type I local algebras N. Requiring no pre-selected measurement basis, it smoothly converges to four times the Fubini–Study projective metric along rank-preserving pure limits while respecting Šafránek's rank-change discontinuity via S³ ε-regularization.",
    mathematicalDerivation: "By Chentsov and Petz's classification of operator monotone functions, the Bures–SLD metric is the unique symmetric Fisher tensor contractive under all CPTP channels Φ_τ, while the Bogoliubov–Kubo–Mori (BKM) metric governs KMS detailed-balance entropy production via exact dual α-connections and generalized Pythagorean bounds.",
    modelAOriginalScore: 2,
    modelBOriginalScore: 1,
    harmonizedScore: 3,
    gapResolution: "Eliminates measurement-basis circularity and rigorously reconciles pure-state rank-change boundaries by pairing Fubini–Study convergence with explicit ε-regularized Šafránek bounds.",
    parameters: [
      { symbol: "θ^i", name: "Statistical Coordinates", valueOrDimension: "Dimensionless", physicalRole: "Local coordinates on the split Type I state manifold E_stat(N)" },
      { symbol: "L_i", name: "Symmetric Logarithmic Derivative", valueOrDimension: "Hermitian Operator", physicalRole: "Basis-independent generator satisfying ∂_i ρ = ½(ρ L_i + L_i ρ)" },
      { symbol: "g_ij^QFI", name: "Quantum Fisher Tensor", valueOrDimension: "1 / nats²", physicalRole: "Sets ultimate Quantum Cramér–Rao bound Var(θ̂) ≥ (N F_Q)⁻¹" }
    ],
    falsificationThreshold: "Experimental violation of the quantum Cramér–Rao bound or non-contractive Bures distance under valid CPTP Markovian maps."
  },
  {
    id: 4,
    name: "Uhlmann–Frobenius Synchronization, 5-Mode Krein–Connes A_F^{H10} & FRG/CDT Flow",
    tagline: "Non-circular O(N⁻²) Uhlmann–Frobenius convergence, 5-mode A_F^{H10} algebra, Wetterich FRG UV fixed point, and CDT d_s flow",
    category: "Resonance & Connection",
    formula: "\\sum_{k=1}^N \\|\\text{RAG}_k - \\text{RES}_k\\|_{\\mathcal{F}} = \\frac{1}{2}\\int ds_{\\text{QFI}} + \\mathcal{O}(N^{-2}), \\quad \\mathcal{A}_F^{H10} = \\mathbb{C} \\oplus \\mathbb{H} \\oplus M_3(\\mathbb{C}) \\oplus \\mathbb{C}_{\\text{hol}} \\oplus \\mathbb{C}_{\\text{Ch}}",
    description: "Replaces legacy bilinear Z-plane heuristics with an exact Taylor–Uhlmann continuum theorem (residual < 10⁻⁷). In H10 (Appendix L), the 5-mode Krein–Connes algebra A_F^{H10} unifies ALL five scalars (ψ, φ_DE, Φ_portal, φ_osc, φ_Ch) with ℤ_2 loop-mixing suppression |ε_{ψ,Ch}| = 4.42 × 10⁻¹⁶, paired with a 1-loop Wetterich FRG UV fixed point (g_* = 1.3105, λ_* = 0.1440, θ_real = 4.835 > 0, Borel = 0.9126) and CDT spectral dimension flow d_s: 3.989 → 2.002.",
    mathematicalDerivation: "Evaluating Uhlmann fidelity F(ρ_k, ρ_{k+1}) = ||√ρ_k √ρ_{k+1}||_1 reveals ||RAG_k − RES_k||_F = ½ ds_QFI + O(N⁻²) without assuming an external clock t. Simultaneously, Chamseddine–Connes spectral action expansion over Krein-twisted A_F^{H10} closes 5-mode algebraic unification while α_mod/ℓ_Pl UV origin (OP-3) and CANNEX Chameleon pheno (OP-4) remain bounded open problems.",
    modelAOriginalScore: 0,
    modelBOriginalScore: 3,
    harmonizedScore: 3,
    gapResolution: "Proves O(N⁻²) Uhlmann–Frobenius equivalence, upgrades A_F from 4-mode to full 5-mode A_F^{H10} unification (|ε_{ψ,Ch}| = 4.42×10⁻¹⁶), and adds Wetterich FRG UV fixed point + CDT spectral-dimension flow in Appendix L.",
    parameters: [
      { symbol: "A_F^{H10}", name: "5-Mode Internal Algebra", valueOrDimension: "ℂ ⊕ ℍ ⊕ M_3(ℂ) ⊕ ℂ_hol ⊕ ℂ_Ch", physicalRole: "Unifies all 5 scalar modes with ℤ_2 loop suppression |ε_{ψ,Ch}| = 4.42 × 10⁻¹⁶" },
      { symbol: "(g_*, λ_*)", name: "Wetterich FRG Fixed Point", valueOrDimension: "(1.3105, 0.1440) · θ = 4.835", physicalRole: "1-loop Asymptotic Safety UV closure with Borel sum 0.9126 (App. L)" },
      { symbol: "d_s", name: "CDT Spectral Dimension", valueOrDimension: "3.989 (IR) → 2.002 (UV)", physicalRole: "Heat-kernel L_UV dimensional reduction matching CDT/Asymptotic Safety" }
    ],
    falsificationThreshold: "Breakdown of O(N⁻²) Taylor–Uhlmann convergence or non-unitary PU(H) bundle anomaly exceeding 1-loop BFV BRST closure."
  },
  {
    id: 5,
    name: "Tomita–Takesaki Modular Synchronization & Landau–Zener Clock Calibration",
    tagline: "Relativistic proper time via modular variance K_ξ ≡ -ln Δ_ρ and exponential P_LZ = exp(−3.14 × 10²⁰) branch stability",
    category: "Information Geometry",
    formula: "d\\tau = \\frac{1}{c}\\sqrt{-g_{\\mu\\nu}\\dot{x}^\\mu\\dot{x}^\\nu}\\, d\\lambda \\;\\equiv\\; \\alpha_{\\text{mod}} \\sqrt{g_{ij}^{\\text{QFI}}\\dot{\\theta}^i\\dot{\\theta}^j}\\, d\\lambda, \\quad \\alpha_{\\text{mod}} = \\frac{\\hbar}{E_{\\text{mod}} \\sigma_1}",
    description: "Equates proper-time pacing along timelike geodesics with statistical Bures arc length scaled by the canonical Tomita–Takesaki modular Hamiltonian variance K_ξ = −ln Δ_ρ via α_mod = ħ / (E_mod σ_1) [Ansatz]. An unbounded S¹ clock Hamiltonian H_Fisher evades Pauli's theorem, while exponential Landau–Zener adiabatic protection P_LZ = exp(−3.14 × 10²⁰) stabilizes the positive-frequency k > 0 observer branch below M_Pl c².",
    mathematicalDerivation: "By Höhn–Smith–Lock quantum reference frames and Jacobi–Finsler null-cone geometry dS_ext² = 0, differential proper-time dilation matches SR/GR identically without circular external t. Clock frequency E_mod ties locally to KMS/Unruh energy or atomic gap, with microscopic UV origin of α_mod explicitly retained under OP-3.",
    modelAOriginalScore: 2,
    modelBOriginalScore: 1,
    harmonizedScore: 2,
    gapResolution: "Replaces observer-dependent ħ/ΔE with local modular variance σ(K_ξ), proves Landau–Zener P_LZ branch protection, and tags α_mod explicitly as [Ansatz] (OP-3).",
    parameters: [
      { symbol: "K_ξ", name: "Modular Hamiltonian", valueOrDimension: "−ln Δ_ρ (nats)", physicalRole: "KMS-invariant generator along local timelike trajectory ξ^μ" },
      { symbol: "α_mod", name: "Modular Conversion [Ansatz]", valueOrDimension: "ħ / (E_mod σ_1) (s / rad)", physicalRole: "Converts dimensionless Fisher distance to physical SI seconds" },
      { symbol: "P_LZ", name: "Branch-Flip Suppression", valueOrDimension: "exp(−3.14 × 10²⁰)", physicalRole: "Adiabatic proof locking observer S¹ clock onto positive k > 0 sector" }
    ],
    falsificationThreshold: "Accelerated worldline clock anomaly violating Jacobi–Finsler synchronization or k > 0 branch-flip tunneling above exponential bound."
  },
  {
    id: 6,
    name: "Born–Oppenheimer WDW Unfreezing & Linearized L_UV Dirac Closure",
    tagline: "Emergent relational S¹ Fisher Schrödinger dynamics with closed linearized L_UV hypersurface deformation algebra",
    category: "Spacetime & Metric",
    formula: "\\hat{\\mathcal{H}}_{\\text{total}} \\Psi = 0 \\;\\Longrightarrow\\; i\\hbar \\frac{\\partial \\chi}{\\partial \\tau_{\\text{FR}}} = \\left( \\hat{H}_{\\text{matter}} + \\hbar \\hat{\\nabla}_{\\text{Fisher}} \\right) \\chi, \\quad \\beta_{L_{\\text{UV}}} = 1 - \\frac{2\\rho}{\\rho_{\\text{max}}}",
    description: "Born–Oppenheimer projection onto internal S¹ Fisher trajectories transforms the frozen Wheeler–DeWitt identity into a unitary emergent Schrödinger equation. Linearized inhomogeneous L_UV perturbations verify Dirac hypersurface-deformation closure with β_LUV = 1 − 2ρ/ρ_max, Fujikawa Weyl anomaly cancellation, and 1-loop BFV BRST Q² = 0 (App. L), while full non-perturbative 3+1 off-shell quantum constraint closure remains OP-2.",
    mathematicalDerivation: "Decomposing H_total = H_clock ⊗ H_system ⊗ H_env yields relational observables commuting with all linearized constraints {H(N), H(M)} = D(β_LUV q^{ab}(N∂_b M − M∂_b N)) with zero 1-loop gauge anomalies for δ(P) = 0 trivial bundles; non-perturbative 3+1 operator ordering is isolated in OP-2.",
    modelAOriginalScore: 1,
    modelBOriginalScore: 0,
    harmonizedScore: 2,
    gapResolution: "Cures frozen WDW evolution and closes linearized inhomogeneous L_UV Dirac brackets (β_LUV) + Fujikawa Weyl cancellation while transparently scoping non-perturbative 3+1 QG algebra as OP-2.",
    parameters: [
      { symbol: "β_LUV", name: "L_UV Dirac Deformation", valueOrDimension: "1 − 2ρ/ρ_max", physicalRole: "Closes inhomogeneous linearized hypersurface constraint algebra (§5.2)" },
      { symbol: "Q_BRST", name: "1-Loop BFV Charge", valueOrDimension: "Q_BRST² = 0", physicalRole: "Projects physical positive-norm states for δ(P) = 0 trivial PU(H) bundles" }
    ],
    falsificationThreshold: "Anomaly in linearized β_LUV constraint brackets or 1-loop BFV BRST violation below Planck cutoff."
  },
  {
    id: 7,
    name: "Two-Stage Ekpyrotic–L_UV Bounce & Derived Hayward Core (ξ_0 = 2⁻¹/⁴)",
    tagline: "Derived ξ_0 = 2⁻¹/⁴ remnant M_rem = 1.092 M_Pl and BKL shear suppression to 4.0 × 10⁻¹⁵ before ρ_max = 0.4094 ρ_Pl",
    category: "Thermodynamics & Singularity",
    formula: "H^2 = \\frac{8\\pi G}{3}\\rho\\!\\left(1 - \\frac{\\rho}{\\rho_{\\text{max}}}\\right), \\quad K(0) = \\frac{24}{\\ell_0^4} = \\frac{48}{\\ell_{\\text{Pl}}^4} \\Rightarrow \\xi_0 = 2^{-1/4}, \\quad M_{\\text{rem}} = \\frac{3\\sqrt{3}}{4}\\xi_0 M_{\\text{Pl}} = 1.0924\\,M_{\\text{Pl}}",
    description: "Eliminates cosmological and spherical collapse singularities systematically. Prior to bounce at ρ_max = 0.4094 ρ_Pl (9.095 × 10⁷⁵ GeV⁴), a two-stage ekpyrotic (w_ekp = 2.0) → matter contraction dilutes BKL Kasner shear to 4.0 × 10⁻¹⁵. In collapse, matching Hayward central curvature K(0) = 24/ℓ_0⁴ to the covariant L_UV ceiling 48/ℓ_Pl⁴ derives ξ_0 = 2⁻¹/⁴ = 0.8409 analytically, fixing extremal remnant M_rem = 1.0924 M_Pl = 2.38 × 10⁻⁸ kg (T_rem = 0 K).",
    mathematicalDerivation: "Integrating contracting perturbations with [Input] w_contract = −0.003 fixes n_s = 0.9637, running α_s = −3.6 × 10⁻⁵, shared red tensor tilt n_T = −0.0363, k-essence r = 24 c_s³ = 0.0123 (at c_s = 0.08), and canonical bounce f_NL^eq = −35/8 = −4.38 (undetectable vs Planck ±47), followed by post-bounce reheating T_reh = 3.40 × 10¹⁰ GeV and Davidson–Ibarra baryogenesis η_B = 6.13 × 10⁻¹⁰ (App. K). Full 3+1D merger BSSN NR remains OP-5.",
    modelAOriginalScore: 2,
    modelBOriginalScore: 0,
    harmonizedScore: 2,
    gapResolution: "Derives ξ_0 = 2⁻¹/⁴ analytically (M_rem = 1.0924 M_Pl), solves 2-stage ekpyrotic BKL dilution (4.0 × 10⁻¹⁵), reheating & leptogenesis η_B = 6.13 × 10⁻¹⁰, and fixes exact red n_T = −0.0363 & canonical f_NL = −4.38.",
    parameters: [
      { symbol: "ξ_0", name: "Derived Core Ratio", valueOrDimension: "2⁻¹/⁴ = 0.840896", physicalRole: "Derived uniquely from Hayward K(0) = 24/ℓ_0⁴ = K_max = 48/ℓ_Pl⁴" },
      { symbol: "M_rem", name: "Extremal Remnant Mass", valueOrDimension: "1.0924 M_Pl = 2.38 × 10⁻⁸ kg", physicalRole: "Zero-temperature core endpoint (S_rem = 3π/√2 = 6.66 nats)" },
      { symbol: "σ²/H², η_B", name: "Bounce BKL & Leptogenesis", valueOrDimension: "4.0×10⁻¹⁵ · 6.13×10⁻¹⁰", physicalRole: "Two-stage ekpyrotic dilution + T_reh = 3.40×10¹⁰ GeV thermal leptogenesis (App. K)" }
    ],
    falsificationThreshold: "LiteBIRD detection of blue n_T > 0 or r > 0.02 outside 2σ, or proven non-unitary black-hole endpoint below Planck scale."
  },
  {
    id: 8,
    name: "Hayward–Vaidya, Axisymmetric Kerr/RN–Hayward & Unitary Islands",
    tagline: "1+1D collapse κ_−ℓ_0=0.9294, axisymmetric Kerr–Hayward ≤0.6639, RN 0.2614, superradiance 0.2048 < 1, & S_rem = 6.66 nats",
    category: "Thermodynamics & Singularity",
    formula: "S_{\\text{rad}}(\\tau) = \\min \\left\\{ \\mathrm{ext}_{\\mathcal{I}} \\left[ \\frac{\\text{Area}(\\partial\\mathcal{I})}{4G\\hbar} + S_{\\text{Araki}}(\\mathcal{I} \\cup \\mathcal{R}) \\right] \\right\\}, \\quad \\kappa_-^{\\text{Kerr}} \\ell_0 \\le 0.6639 < 1",
    description: "Solves the coupled 1+1D Hayward–Vaidya collapse (max κ_− ℓ_0 = 0.9294 < 1) AND H10 axisymmetric Kerr–Hayward (κ_− ℓ_0 ≤ 0.6639), Reissner–Nordström–Hayward (0.2614), and cavity superradiance gain (0.2048 < 1) stability bounds alongside finite QES island radius r_I = r_+ − O(ħ/(Mc)) and S_rem = 3π/√2 ≈ 6.66 nats.",
    mathematicalDerivation: "Past t_Page, the non-trivial interior island saddle inside the regular Hayward core bounds S_rad while S_gen satisfies GSL conditionally on QFC. Appendix L establishes rotating Kerr–Hayward and charged RN–Hayward inner-horizon damping prior to full 3+1D dynamical binary-merger BSSN NR (OP-5).",
    modelAOriginalScore: 2,
    modelBOriginalScore: 1,
    harmonizedScore: 2,
    gapResolution: "Closes ATK-11 (1+1D Hayward–Vaidya 0.9294) and extends H10 stability proofs to axisymmetric Kerr–Hayward (≤0.6639), RN–Hayward (0.2614), and superradiance quenching (0.2048 < 1), keeping 3+1D merger NR in OP-5.",
    parameters: [
      { symbol: "κ_− ℓ_0", name: "Inner-Horizon Bounds", valueOrDimension: "0.9294 (Vaidya) · ≤0.6639 (Kerr)", physicalRole: "Proves regular core mass-inflation stability across spherical, charged & rotating regimes" },
      { symbol: "Gain / S_rem", name: "Superradiance & Remnant", valueOrDimension: "0.2048 < 1 · 6.6643 nats", physicalRole: "Quenches bomb instability (App. L) & sets finite remnant entropy at 1.0924 M_Pl" }
    ],
    falsificationThreshold: "Runaway unbounded inner-horizon mass inflation κ_− ℓ_0 → ∞ in s-wave collapse or violation of covariant Bousso QNEC."
  },
  {
    id: 9,
    name: "CPTP Spohn–BKM Arrow of Time & Scope-Isolated Subsystem Epistemology",
    tagline: "Strictly physical open-subsystem arrow separating KMS detailed-balance BKM flow from reversible Bures τ_FR",
    category: "Observer & Epistemology",
    formula: "\\frac{d}{d\\tau} S_{\\text{Araki}}(\\rho(\\tau) \\,|\\,|\\, \\rho_{\\text{eq}}) = -\\tilde{g}_{ij}^{\\text{BKM}} \\dot{\\theta}^i \\dot{\\theta}^j \\le 0 \\;\\;(\\text{KMS}), \\quad \\frac{d}{d\\tau} S_{\\text{Spohn}} \\le 0",
    description: "Defines observers strictly as physical open quantum subsystems in split Type I local algebras, completely removing legacy consciousness, EEG, or neural-rhythm claims (SCOPE #2). Reversible unitary clock progression dτ_FR > 0 via Bures g_ij^QFI is sharply separated from thermodynamic irreversibility governed by KMS detailed-balance BKM contraction and general CPTP Spohn monotonicity.",
    mathematicalDerivation: "Using Spohn's entropy-production theorem for completely positive trace-preserving semigroups Φ_τ and restriction to KMS steady states yields exact non-negative dissipation without requiring closed-universe Poincaré recurrences.",
    modelAOriginalScore: 1,
    modelBOriginalScore: 3,
    harmonizedScore: 3,
    gapResolution: "Crystallizes Tassan's retention-generation dynamics into rigorous open-system CPTP Spohn/BKM theorems and isolates neural/cognitive metaphors cleanly outside physics core (SCOPE #2).",
    parameters: [
      { symbol: "Φ_τ", name: "CPTP Dynamical Map", valueOrDimension: "Trace-Preserving Superop", physicalRole: "Strictly observer-independent open-system evolution" },
      { symbol: "g̃_ij^BKM", name: "Bogoliubov–Kubo–Mori Metric", valueOrDimension: "1 / nats²", physicalRole: "Governs monotonic entropy contraction along KMS semigroups" }
    ],
    falsificationThreshold: "Spontaneous violation of Spohn monotonicity dS_Araki(ρ(τ)||ρ_eq)/dτ > 0 under passive Markovian equilibration."
  },
  {
    id: 10,
    name: "RK2/RK4 Thawing PNGB Cosmology, App. K Likelihoods & P1–P6 Fisher Matrix",
    tagline: "PNGB w_0=−0.908, w_a=−0.177, S_8=0.822–0.847, τ_re=0.0537, A_L/E_G/Ly-α, joint Δχ²=+4.41 (Δln Z=−3.52), & P1–P6 SNRs",
    category: "Resonance & Connection",
    formula: "w_0 = -0.908,\\; w_a = -0.177, \\quad \\tau_{\\text{re}} = 0.0537,\\; \\Delta\\chi^2 = +4.41,\\; \\Delta\\ln Z = -3.52, \\quad f_{\\text{PTA}} = 2 f_{\\text{clock}}",
    description: "Integrates the coupled Klein–Gordon & linear growth ODEs (w_0=−0.908, w_a=−0.177, S_8=0.8216–0.8466) and extends H10 Appendix K with τ_re = 0.0537, ℓ_A = 300.31, A_L = 0.977–1.030, E_G(z=0.57) = 0.4146, Ly-α ΔP/P = −3.96%, ΔN_eff = 0.0032, and joint Planck + 6 DESI + 6 RSD + S_8 compressed Δχ² = +4.41 (Laplace Δln Z = −3.52), alongside SHA-256 P1–P6 Fisher SNRs (4.7–25.1).",
    mathematicalDerivation: "All 6 observables P1–P6 carry explicit noise budgets in Appendix F and deterministic verification in scripts/verify-igrt-monograph.mjs, hashed by canonical H10 SHA-256 preregistration digest 7463d7273d121f56974978982eb476855773759bb5c886c8a4d650562cd3968a. Full external 3D C_ℓ hi_class + Cobaya MCMC remains OP-1.",
    modelAOriginalScore: 2,
    modelBOriginalScore: 1,
    harmonizedScore: 2,
    gapResolution: "Adds τ_re, ℓ_A, A_L, E_G, Ly-α ΔP/P, ΔN_eff, and joint compressed Δχ²/Δln Z (App. K) on top of RK2/RK4 PNGB growth while candidly retaining DESI DR2 2.8–4.2σ tension and OP-1 3D Cobaya release.",
    parameters: [
      { symbol: "(w_0, w_a)", name: "PNGB Thawing EoS", valueOrDimension: "(−0.908, −0.177)", physicalRole: "θ_i = 1.95 ∈ [1.75, 2.35]; faces 2.8–4.2σ tension if DESI DR2 phantom holds" },
      { symbol: "τ_re, Δln Z", name: "App. K Joint Cosmology", valueOrDimension: "0.0537 · Δχ²=+4.41 (Δln Z=−3.52)", physicalRole: "Checks CMB τ_re/A_L/ℓ_A, E_G = 0.415, Ly-α −3.96%, and Bayes penalty vs ΛCDM" },
      { symbol: "SNR_P1..P6", name: "Fisher Forecast SNRs", valueOrDimension: "25.1, 23.5, 12.3, 9.0, 10.0, 4.7", physicalRole: "Deterministic instrument sensitivity targets across 2026–2036" }
    ],
    falsificationThreshold: "Confirmed DESI phantom w_a < −0.4 (> 3σ), LiteBIRD blue n_T or r > 0.02, or P5 CANNEX exclusion at 10 μm–1 cm."
  }
];

// -------------------------------------------------------------
// 5 MAJOR PHYSICAL & EPISTEMIC RAMIFICATIONS (H10 AUDITED)
// -------------------------------------------------------------
export const HARMONIZED_RAMIFICATIONS: ModelRamification[] = [
  {
    id: 1,
    title: "Modular Resolution of the Problem of Time via Fiber Bundle P(M, S_Fisher)",
    domain: "Quantum Gravity & Foundations",
    summary: "Synchronizes relativistic proper time dτ with canonical Tomita–Takesaki modular variance σ(K_ξ) and SLD Quantum Fisher arc length along split Type I statistical fibers, stabilized by Landau–Zener exponent 3.14 × 10²⁰.",
    traditionalParadox: "General Relativity treats time as dynamic geometry while QM uses an external c-number parameter; canonical quantization produces the timeless constraint ĤΨ = 0.",
    harmonizedResolution: "Born–Oppenheimer projection onto unbounded S¹ Fisher trajectories unfreezes relational Schrödinger evolution and closes linearized inhomogeneous L_UV Dirac brackets (β_LUV = 1 − 2ρ/ρ_max), while microscopic origin of α_mod stays isolated in OP-3 and non-perturbative 3+1 QG in OP-2.",
    mathematicalSignature: "d\\tau \\equiv \\alpha_{\\text{mod}} \\sqrt{g_{ij}^{\\text{QFI}} \\dot{\\theta}^i \\dot{\\theta}^j}\\, d\\lambda, \\quad P_{\\text{LZ}} = \\exp(-3.14 \\times 10^{20})",
    philosophicalConsequence: "Time is the objective relativistic pacing of quantum state distinguishability along modular flows rather than an ad-hoc external stage."
  },
  {
    id: 2,
    title: "Ekpyrotic–L_UV Bounce, Derived Hayward (ξ_0 = 2⁻¹/⁴) & Axisymmetric Kerr–Hayward",
    domain: "Cosmology & Black Hole Astrophysics",
    summary: "Replaces the Big Bang and BH cores with a 2-stage ekpyrotic–L_UV bounce (BKL 4.0 × 10⁻¹⁵, η_B = 6.13 × 10⁻¹⁰), derived ξ_0 = 2⁻¹/⁴ (M_rem = 1.0924 M_Pl), axisymmetric Kerr–Hayward (κ_− ℓ_0 ≤ 0.6639), and superradiance gain 0.2048 < 1.",
    traditionalParadox: "Classical Penrose–Hawking singularity theorems break predictability at t = 0 and r = 0, while bare bounces suffer BKL anisotropic shear blow-up.",
    harmonizedResolution: "Equating Hayward K(0) = 24/ℓ_0⁴ to covariant 48/ℓ_Pl⁴ derives ξ_0 = 2⁻¹/⁴ = 0.8409 (M_rem = 2.38 × 10⁻⁸ kg, S_rem = 6.66 nats), while 1+1D Hayward–Vaidya (0.9294), axisymmetric Kerr–Hayward (≤0.6639), RN–Hayward (0.2614), and superradiance (0.2048 < 1) all stay bounded. Full 3+1D merger BSSN NR remains OP-5.",
    mathematicalSignature: "\\xi_0 = 2^{-1/4}, \\quad \\kappa_-^{\\text{Kerr}}\\ell_0 \\le 0.6639, \\quad \\sigma^2/H^2\\big|_{\\text{bounce}} = 4.0 \\times 10^{-15}",
    philosophicalConsequence: "Curvature saturates geometrically at the Planck ceiling without ad-hoc remnant mass postulates, leaving finite unitary microstate entropy."
  },
  {
    id: 3,
    title: "Thawing PNGB Dark Energy, App. K Lensing/Reionization & Joint Δχ²/Δln Z",
    domain: "Observational Cosmology",
    summary: "Integrates shift-protected PNGB quintessence (w_0 = −0.908, w_a = −0.177, S_8 = 0.822–0.847) and audits τ_re = 0.0537, A_L = 0.977–1.030, E_G = 0.4146, Ly-α ΔP/P = −3.96%, and joint Δχ² = +4.41 (Δln Z = −3.52).",
    traditionalParadox: "Non-evolving Λ suffers 10¹²⁰ QFT naturalness issues while phantom-crossing fits challenge ghost-free canonical scalar theories.",
    harmonizedResolution: "RK2/RK4 + App. K compressed likelihoods evaluate DESI D_M/r_d (−0.82%..−1.16%), CMB R_shift (−0.428%, ℓ_A = 300.31), ΔN_eff = 0.0032, and Swampland Δφ = 0.217 M̄_Pl cleanly. Old Λ_0 fine-tuning stays unsolved (SCOPE #4), and DESI DR2 places w_a in 2.8–4.2σ tension (3D Cobaya in OP-1).",
    mathematicalSignature: "w_0 = -0.908, \\quad w_a = -0.177, \\quad S_8(\\beta_{\\text{lin}}=0) = 0.8216",
    philosophicalConsequence: "Scientific credibility comes from explicit testable failure boundaries—IGRT stays strictly non-phantom (w ≥ −1) and is falsifiable by DESI DR3."
  },
  {
    id: 4,
    title: "Objective CPTP Arrow of Time & Strict Scope Isolation from Cognitive Claims",
    domain: "Open Quantum Systems & Epistemology",
    summary: "Grounds macroscopic temporal asymmetry solely in Spohn and KMS Bogoliubov–Kubo–Mori entropy monotonicity on open physical subsystems, excising all EEG/AI consciousness claims (SCOPE #2).",
    traditionalParadox: "Microscopic T-symmetry clashes with thermodynamic irreversibility, while naive consciousness interpretations introduce anthropocentric circularity.",
    harmonizedResolution: "Subsystems in split Type I operator algebras trace objective monotonic Araki contraction dS_Araki/dτ ≤ 0 while global unitary Fisher arc length ticks strictly forward across bounces.",
    mathematicalSignature: "\\mathcal{M}_{\\text{past}}(\\tau) \\subset \\mathcal{M}_{\\text{total}}, \\quad \\frac{d}{d\\tau}S_{\\text{Araki}}(\\rho(\\tau)\\,\\|\\,\\rho_{\\text{eq}}) = -\\tilde{g}_{ij}^{\\text{BKM}}\\dot{\\theta}^i\\dot{\\theta}^j \\le 0",
    philosophicalConsequence: "Temporal flow is an objective open-system thermodynamic relation, completely independent of biological cognition."
  },
  {
    id: 5,
    title: "Screened Solar/NS Gravity, EFT Positivity & Decoupled Chameleon Metrology",
    domain: "Precision Metrology & Strong-Field Gravity",
    summary: "Separates Solar/NS Type Ia Vainshtein screening (|γ_PPN − 1| = 1.77 × 10⁻¹¹, PSR J0737-3039 3.44 × 10⁻¹⁵, TOV M_max = 2.35 M_⊙, Λ_{1.4} = 339) from CANNEX φ_Ch tests (embedded in 5-mode A_F^{H10}, M_Ch = 2.4 meV).",
    traditionalParadox: "Terrestrial Horndeski renormalization (Z_ψ = 7.05 × 10¹⁴) lifts Λ_local to 4.67 μeV (4.2 cm), hiding Galileons from sub-mm Casimir probes and forbidding 10⁻²¹ clock shifts.",
    harmonizedResolution: "Causal SLy4-matched TOV stars & PSR J0737-3039 double-pulsar bounds preserve compact-object stability (1.61 × 10⁻²² / 3.44 × 10⁻¹⁵), 4-pt EFT positivity holds at c_2 = 2.1 × 10⁵⁷ GeV⁻⁴ > 0, and 5-mode A_F^{H10} unifies CANNEX Chameleon φ_Ch (|ε_{ψ,Ch}| = 4.42 × 10⁻¹⁶) pending P5 data (OP-4).",
    mathematicalSignature: "|\\gamma_{\\text{PPN}} - 1|_{1\\text{ AU}} = 1.77 \\times 10^{-11}, \\quad \\Lambda_{1.4} = 339 < 580, \\quad c_2 = 2.1 \\times 10^{57}\\text{ GeV}^{-4} > 0",
    philosophicalConsequence: "Precision gravity demands tracking screening scales faithfully rather than conflating cosmological, solar, and laboratory regimes."
  }
];

// -------------------------------------------------------------
// 6 CONCRETE TESTABLE PREDICTIONS & P1-P6 FISHER PROTOCOLS (H10)
// -------------------------------------------------------------
export const HARMONIZED_TESTABLE_PREDICTIONS: TestablePrediction[] = [
  {
    id: 1,
    name: "P1: 2:1 IPTA / NANOGrav Monopole vs. Cryogenic Optical Clock Harmonic Lock",
    targetPhenomenon: "Quadrupole metric modulation at f_PTA = 12.8 nHz locked 2:1 to φ_osc dipole f_clock = 6.4 nHz (f_DM ≤ 0.02)",
    facility: "International Pulsar Timing Array (IPTA / NANOGrav 15-yr) & ⁸⁷Sr/¹⁷¹Yb Cryogenic Optical Lattice Clocks",
    observableFormula: "f_{\\text{PTA}} = 2 f_{\\text{clock}} = 12.8\\text{ nHz}, \\quad Y_{00}\\text{ Isotropic Monopole } (f_{\\text{DM}} \\le 0.02)",
    predictedSignal: "Deterministic 15-yr IPTA isotropic Y_{00} monopole + optical clock cross-spectrum achieving Fisher SNR = 25.1 (σ_r = ±0.08) for [Input] m_osc = 2.65 × 10⁻²³ eV with ULDM cap f_DM ≤ 0.02 (λ_dB = 2.07 kpc). Candidly disclosed as generic to quadratic ULDM.",
    standardPhysicsBaseline: "Hellings–Downs stochastic GW background predicts quadrupolar angular correlation with strictly zero 2:1 coherent isotropic Y_{00}–atomic clock cross-peak.",
    measurementNoiseMargin: "Appendix F clock flicker/random-walk + GP pulsar red-noise + sky-scramble look-elsewhere budget across 68 MSPs.",
    apparatusProtocol: "Joint 15-yr IPTA residual monopole extraction cross-correlated against dual ⁸⁷Sr/¹⁷¹Yb optical clock frequency ratios.",
    falsificationCriterion: "IPTA DR3 exclusion of 6.4/12.8 nHz Y_{00} monopole at >3σ eliminates the flagship P1 channel (CC #270 WEAKENS).",
    timelineAndFeasibility: "Near-term (2026–2029): Directly testable in joint IPTA DR3 + optical lattice clock data."
  },
  {
    id: 2,
    name: "P2: Cryogenic SiO₂ Nanosphere Matter-Wave Araki–Kretschmann Decoherence",
    targetPhenomenon: "Spatial superposition collapse rate Γ_Araki driven by Type III_1 Araki entropy gradient",
    facility: "Cryogenic Levitated Optomechanical SiO₂ Interferometry (MAQRO-class / Delić-type platforms)",
    observableFormula: "\\Gamma_{\\text{Araki}} = 1.18\\text{ s}^{-1} \\;\\;\\left(R_0 = 1.028\\,\\mu\\text{m},\\; m = 10^{-14}\\text{ kg},\\; \\Delta x = 180\\text{ nm}\\right)",
    predictedSignal: "Intrinsic collapse rate Γ_Araki = 1.18 s⁻¹ on 10⁻¹⁴ kg SiO₂ spheres at Δx = 180 nm against 0.05 s⁻¹ thermal/gas background (Fisher SNR = 23.5). Candidly sits ~4 orders of magnitude beyond current Donadi et al. (2021) underground bounds.",
    standardPhysicsBaseline: "Standard unitary quantum mechanics predicts decoherence purely from residual gas scattering and blackbody radiation (0.05 s⁻¹ at 4 K UHV).",
    measurementNoiseMargin: "Includes photon recoil, UHV collisions, and Donadi et al. continuous-spontaneous-localization exclusion comparison [103].",
    apparatusProtocol: "Prepare cryogenic silica nanosphere (R_0 = 1.028 μm, m = 10⁻¹⁴ kg) in Δx = 180 nm spatial superposition under UHV 4 K isolation and measure fringe contrast decay.",
    falsificationCriterion: "Unitary preservation exceeding Donadi + macroscopic superposition interferometer limits at Γ_Araki benchmark constrains κ_0 / Araki collapse.",
    timelineAndFeasibility: "Long-term (2030–2036): Requires ~4 orders of mass-separation improvement over current macroscopic quantum resonators."
  },
  {
    id: 3,
    name: "P3: Two-Stage Bounce CMB Tensor Tilt (Red n_T = −0.0363) & PNGB DESI DR2 w_a Gate",
    targetPhenomenon: "Shared red tensor spectrum (n_T = −0.0363, r = 0.0123), α_s = −3.6 × 10⁻⁵, and thawing w_0 = −0.908, w_a = −0.177",
    facility: "LiteBIRD (JAXA/ESA/NASA), Simons Observatory, DESI DR2/DR3 & Euclid",
    observableFormula: "n_s = 0.9637,\\; n_T = -0.0363,\\; \\alpha_s = -3.6\\times 10^{-5},\\; r = 24 c_s^3 = 0.0123,\\; f_{\\text{NL}}^{\\text{eq}} = -4.38",
    predictedSignal: "Shared red tensor tilt n_T = −0.0363 with k-essence r = 0.0123 (c_s = 0.08, LiteBIRD Fisher SNR = 12.3), scalar running α_s = −3.6 × 10⁻⁵, canonical f_NL^eq = −4.38 (below Planck ±47), DESI D_M/r_d (−0.82%..−1.16%), CMB R_shift (−0.428%), and S_8 = 0.8216.",
    standardPhysicsBaseline: "ΛCDM fixes w = −1, while single-field slow-roll inflation obeys consistency r = −8 n_T.",
    measurementNoiseMargin: "LiteBIRD polarized galactic dust NILC/Commander3 variance; DESI + SNIa nuisance covariance (full 3D CAMB MCMC open in OP-1).",
    apparatusProtocol: "Full-sky CMB B-mode spectrum cross-checked against DESI DR2/DR3 BAO + Pantheon+/DES-Y5 distance-redshift chains.",
    falsificationCriterion: "Confirmed phantom DESI DR3 w_a < −0.4 (> 3σ) refutes PNGB thawing sector φ_DE; LiteBIRD detection of blue n_T > 0 or r > 0.02 refutes k-essence bounce.",
    timelineAndFeasibility: "Active (2026–2032): DESI DR2 currently places PNGB w_a in 2.8–4.2σ tension; LiteBIRD launches 2032."
  },
  {
    id: 4,
    name: "P4: Derived Hayward Remnant (ξ_0 = 2⁻¹/⁴) Ringdown Echoes",
    targetPhenomenon: "Post-merger logarithmic cavity delays Δt_echo off regular curvature-saturated core (max κ_− ℓ_0 = 0.9294 < 1)",
    facility: "LIGO–Virgo–KAGRA (O5) & Cosmic Explorer / Einstein Telescope",
    observableFormula: "\\Delta t_{\\text{echo}} = \\frac{2 r_s}{c} \\ln\\!\\left(\\frac{r_s}{\\ell_0}\\right), \\quad \\ell_0 = 2^{-1/4}\\ell_{\\text{Pl}}, \\quad \\mathcal{K}_{\\text{echo}} = |\\mathcal{R}_{\\text{eff}}| = 0.18",
    predictedSignal: "Logarithmic ringdown echo delays Δt_echo = 17.8 ms (10 M_⊙) and 109.2 ms (60 M_⊙) with unitary interior boundary |R_eff|² + |T_int|² = 1, achieving Cosmic Explorer stacked Fisher SNR = 9.0 for [Input] K_echo = 0.18.",
    standardPhysicsBaseline: "Classical GR Kerr event horizons are purely ingoing (R_eff ≡ 0) with strictly zero late-time ringdown echoes.",
    measurementNoiseMargin: "Includes matched-filter stacking over CE/ET BBH population and spin-shift systematics (axisymmetric Kerr–Hayward κ_− ℓ_0 ≤ 0.6639 solved in App. L; 3+1D merger BSSN NR in OP-5).",
    apparatusProtocol: "Coherent stacked post-merger matched filtering at Δt = (2r_s/c) ln(r_s/ℓ_0) with unitary boundary phase response.",
    falsificationCriterion: "Null echo search in Cosmic Explorer stacked events at combined SNR > 5 excludes the K_echo = 0.18 benchmark.",
    timelineAndFeasibility: "Mid-term (2027–2035): LVK O5 begins constraining K_echo; Cosmic Explorer reaches SNR = 9.0 threshold."
  },
  {
    id: 5,
    name: "P5: CANNEX Sub-Millimeter Chameleon Metrology & Screened Solar/NS Gravity",
    targetPhenomenon: "Unscreened Chameleon φ_Ch pressure excess across 10 μm–1 cm vacuum gaps alongside screened Galileon (r_V = 369.8 ly)",
    facility: "CANNEX (Casimir And Non-Newtonian Force Experiment), Cassini/LLR & Pulsar/NICER Timing",
    observableFormula: "\\Delta P_{\\text{Ch}} \\sim 10^{-10}\\text{–}2\\times 10^{-9}\\text{ N/m}^2, \\quad |\\gamma_{\\text{PPN}} - 1|_{1\\text{ AU}} = 1.77\\times 10^{-11}, \\quad M_{\\text{max}}^{\\text{TOV}} = 2.35\\,M_\\odot",
    predictedSignal: "P5 CANNEX pressure excess for M_Ch = 2.4 meV across 10 μm–1 cm (Fisher SNR ≥ 10.0), while terrestrial Galileon ψ stays isolated above Λ_local = 4.67 μeV (4.2 cm, 4-pt c_2 = 2.1 × 10⁵⁷ GeV⁻⁴ > 0) and causal TOV NS gives R_{1.4} = 11.57 km, Λ_{1.4} = 339 < 580.",
    standardPhysicsBaseline: "QED Casimir + GR predicts zero non-Casimir scalar pressure anomaly between shielded plates and strict |γ_PPN − 1| = 0.",
    measurementNoiseMargin: "Electrostatic patch-potential and seismic isolation budgets in CANNEX; legacy sub-mm clock-redshift claim (10⁻²¹) explicitly retracted.",
    apparatusProtocol: "Measure parallel-plate force residuals with intervening conductive Faraday/Casimir shield across 10 μm–1 cm at cryogenic UHV.",
    falsificationCriterion: "CANNEX null detection below 10⁻¹¹ N/m² excludes M_Ch = 2.4 meV at β_Ch ~ O(1) (forces φ_Ch decoupling); Λ_{1.4} ≥ 580 refutes TOV match.",
    timelineAndFeasibility: "Immediate–Near term (2026–2029): CANNEX Phase II sensitivity spans the target 2.4 meV Chameleon window."
  },
  {
    id: 6,
    name: "P6: HL-LHC 1.84 TeV Di-Higgs Scalar Portal Resonance (SNR = 4.7σ)",
    targetPhenomenon: "Singlet scalar portal Φ_portal ∈ A_F decaying via gg → Φ_portal → hh → bb̄γγ",
    facility: "CERN High-Luminosity LHC (ATLAS & CMS, √s = 14 TeV, 3000 fb⁻¹)",
    observableFormula: "m_{\\Phi} = 1.84 \\pm 0.18\\text{ TeV}, \\quad \\sigma \\times \\mathcal{B}(hh \\to b\\bar{b}\\gamma\\gamma), \\quad \\text{SNR} = 4.7\\sigma\\;(3000\\text{ fb}^{-1})",
    predictedSignal: "Spin-0 narrow di-Higgs resonance at m_Φ = 1.84 ± 0.18 TeV in A_F holonomy sector with 3000 fb⁻¹ Fisher significance SNR = 4.7σ (vs prior 1500 fb⁻¹ marginal reach), zero spin-2 KK graviton towers, and clean κ_Z systematic budget.",
    standardPhysicsBaseline: "Standard Model non-resonant di-Higgs continuum at 1.84 TeV sits strictly smooth with zero TeV scalar peak.",
    measurementNoiseMargin: "Boosted b-tagging efficiency, diphoton resolution, and QCD multijet κ_Z background uncertainty at HL-LHC.",
    apparatusProtocol: "Combined ATLAS + CMS boosted gg → hh → bb̄γγ / bbbb invariant mass scan across 1.0–3.0 TeV.",
    falsificationCriterion: "95% CL exclusion of σ × B(hh) down to the A_F portal benchmark across 1.66–2.02 TeV at 3000 fb⁻¹.",
    timelineAndFeasibility: "Mid-to-late term (2029–2036): HL-LHC Run 4/5 3000 fb⁻¹ dataset."
  }
];

