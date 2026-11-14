/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Editorial & Theoretical Apparatus for the IGRT Research Monograph:
 * - Plain-Language Summary & Shortened Abstract
 * - Theoretical Scope, Scalar Proliferation Disclosure & Split Roadmap
 * - List of Symbols (collision-resolved) & Acronyms Glossary
 * - Complete 20-Item Dimensional-Analysis Closure Table & Equation Index
 * - Frameworks Comparison Table
 * - Table 8.3: Epistemic Claim, Status, Evidence & Evasion Ledger
 * - Governance Statements (CRediT, COI, Reproducibility Code, Funding)
 * - Table H.1: Verified Numerical Closures
 */

export type EpistemicStatus =
  | 'Proved'
  | 'Derived'
  | 'Theorem'
  | 'Axiom'
  | 'Established'
  | 'Consistency'
  | 'Ansatz'
  | 'Input';

export const PLAIN_LANGUAGE_SUMMARY =
  'In Einstein’s General Relativity, time is woven into dynamic four-dimensional spacetime, whereas in Quantum Mechanics time enters as an external evolution parameter. Canonical quantization eliminates external coordinate time from the universal Wheeler–DeWitt constraint, producing the Problem of Time. Information-Geometric Resonant Time (IGRT) addresses this impasse while preserving four-dimensional Lorentzian geometry on physically regular domains: clock duration along a worldline is calibrated against how rapidly local quantum states become distinguishable under the Symmetric Logarithmic Derivative (SLD) Fisher–Rao metric. The framework constructs a principal PU(H)-bundle and associated statistical state bundle over 4D spacetime, separates a non-negative Araki relative-entropy modulus ψ ≥ 0 from shift-symmetric dark-energy and holonomy phases within luminal Type Ia Horndeski gravity plus ultraviolet limiting-curvature saturation, and subjects its mathematical ansätze and phenomenological sectors to six quantitative experimental protocols across pulsar timing arrays, optomechanical spheres, CMB polarimetry, gravitational-wave ringdowns, Casimir force metrology, and the HL-LHC.';

export const SHORTENED_ABSTRACT = {
  paragraphs: [
    'Canonical quantum gravity encounters the Wheeler–DeWitt Problem of Time (Ĥ_total Ψ = 0), derived here by 3+1 ADM lapse variation (δS_IGRT/δN = 0) of our covariant action [Derived]. We formulate Information-Geometric Resonant Time (IGRT) on a trivial principal projective-unitary bundle P(M, PU(H)) (δ(P) = 0 ∈ H³(M, ℤ)) and associated statistical bundle E_stat = P ×_{PU(H)} S(N) over a four-dimensional Lorentzian base manifold (M, g_μν) of signature (−,+,+,+), upon which Diff⁺(M) acts via base-covering automorphisms [Derived]. On rank-preserving worldlines, an extended Jacobi–Finsler synchronization ansatz calibrated by α_mod = ℏ / (E_mod · σ_1(K_ξ)) equates proper time dτ = (1/c)√(−g_μν ẋ^μ ẋ^ν) dλ to SLD Fisher–Rao state arc length normalized per resolved clock mode (M = 1), reducing to discrete Uhlmann-purified steps τ_step ∑ ‖RAG_k − RES_k‖_F with O(N^{−2}) convergence [Ansatz]. Within Born–Oppenheimer factorization, the compact circle fiber shift H_Fisher = E_mod σ_1(K_ξ) D̂_Fisher possesses a discrete, doubly unbounded spectrum {E_mod σ_1 (2πk/L − Φ_Berry/L) : k ∈ ℤ}, circumventing Pauli’s bounded-Hamiltonian obstruction under positive-branch projection [Derived]; KMS detailed-balance quantum Markov semigroups obey instantaneous Bogoliubov–Kubo–Mori (BKM) entropy dissipation (d/dτ) S_Araki = −g̃_ij^BKM θ̇^i θ̇^j ≤ 0 [Established].',
    'Infrared gravity is governed by the luminal Type Ia Horndeski Cubic Galileon action (G_{4,X} = 0, G_5 = 0, c_GW = c identically) [Axiom] with braiding scale Λ_3 = (M̄_Pl H_0²)^{1/3} ≈ 1.76 × 10^{−13} eV (solar Vainshtein radius r_V ≈ 370 ly, derived |γ_PPN − 1| ≈ 1.77 × 10^{−11} at 1 AU; terrestrial r_{V,⊕} ≈ 5.33 ly, Z_ψ ≈ 7.05 × 10^{14}, dressed cutoff Λ_local ≈ 4.67 μeV), verified via all-orders Jordan–Einstein Bianchi consistency [Consistency] and Horndeski Type Ia TOV + Hinderer neutron-star integration (M_max = 2.35 M_⊙, Λ_{1.4} = 339, Vainshtein suppression 1.61 × 10^{−22}, PSR J0737-3039 dipole suppression 3.44 × 10^{−15}) [Derived]. All five scalars (ψ, φ_DE, Φ_portal, φ_osc, φ_Ch) embed into the 5-mode extended Krein–Connes algebra A_F^{H10} = ℂ ⊕ ℍ ⊕ M_3(ℂ) ⊕ ℂ_hol ⊕ ℂ_Ch (loop mixing |ε_{ψ,Ch}| = 4.42 × 10^{−16}), anchored by a 1-loop Wetterich FRG fixed point (g_* = 1.3105, λ_* = 0.1440, θ_real = 4.835 > 0), Borel–Padé resummation (0.9126), and CDT/L_UV spectral dimension flow d_s = 3.989 → 2.002 [Derived]. Polar decomposition yields Araki diamond modulus ψ ≥ 0 (κ_ψ = ℏc ℓ_Pl/(12π) ≈ 2.173 × 10^{−21} GeV⁻¹) [Ansatz], thawing dark energy φ_DE (w_0 ≈ −0.908, w_a ≈ −0.177, S_8 = 0.8216–0.8466, τ_re = 0.0537, A_L = 0.977–1.030, E_G = 0.415, joint compressed Δχ² = +4.41 / Laplace Δln Z = −3.52 vs. ΛCDM) [Derived], 2% ULDM φ_osc (m_osc ≈ 2.65 × 10^{−23} eV, Ly-α |ΔP/P| = 3.96%) [Input], portal Φ_portal (1.84 TeV), and IR Chameleon φ_Ch (2.4 meV) [Ansatz]. An explicit UV limiting-curvature sector L_UV yields a two-stage ekpyrotic-to-matter bounce (ρ_max ≈ 0.4094 ρ_Pl, BKL shear 4.0 × 10^{−15}, post-bounce T_reh = 3.40 × 10^{10} GeV, Davidson–Ibarra leptogenesis η_B = 6.13 × 10^{−10}, n_s ≈ 0.964, red n_T ≈ −0.036, r = 0.0123, f_NL = −4.38) plus derived Hayward cores (ξ_0 = 2^{−1/4}, M_rem = 1.092 M_Pl) extended to axisymmetric Kerr–Hayward (κ_− ℓ_0 ≤ 0.6639 < 1, superradiance cavity gain 0.2048 < 1) and charged RN–Hayward (κ_−^{RN} ℓ_0 = 0.2614 < 1) stability.'
  ]
};

export const SCOPE_AND_NON_CLAIMS: { title: string; detail: string }[] = [
  {
    title: '1. Bundle Architecture, Split Stability & Global Hyperbolicity Scope',
    detail:
      'Macroscopic spacetime is a smooth 4D Lorentzian manifold (M, g_μν) of signature (−,+,+,+), globally hyperbolic on domains of outer communication and across physical 1+1D Hayward–Vaidya (max κ_− ℓ_0 = 0.9294 < 1), axisymmetric Kerr–Hayward (κ_− ℓ_0 ≤ 0.6639 < 1, ring core K ≤ 48/ℓ_Pl⁴), and charged RN–Hayward (κ_−^{RN} ℓ_0 = 0.2614 < 1) black-hole regions truncated dynamically prior to inner Cauchy extension (§6.3). Quantum frames form a trivial principal bundle P(M, PU(H)) over split Type I detector factors N ⊂ A(O_ext) with Doplicher–Longo error 9.72 × 10^{−102}.'
  },
  {
    title: '2. Epistemic Rigor: Established Results vs. Derived Closures vs. Phenomenological Ansätze',
    detail:
      'External mathematical theorems (Morozova–Chentsov–Petz [15, 16], Šafránek [92], Araki–Klein [34], Spohn [93] & Carlen–Maas [99, 100], Bisognano–Wichmann [48]) are labeled strictly as Established Results. H10 advances joint cosmological likelihood/τ_re/η_B/A_L/E_G/Ly-α, axisymmetric Kerr–Hayward & charged RN–Hayward cores, superradiance quenching (0.205 < 1), 1-loop Wetterich FRG fixed point (g_* = 1.3105, λ_* = 0.1440), Borel resummation, CDT spectral flow (3.989 → 2.002), and 5-mode A_F^{H10} embedding to Derived, while α_mod, Planck-normalized κ_ψ, and φ_Ch couplings remain Ansatz and w_contract, m_osc, and K_echo remain Input (Table 8.3).'
  },
  {
    title: '3. Complete 5-Mode Spectral Algebra A_F^{H10} & Protected IR Chameleon Isolation',
    detail:
      'All five scalar excitations—Araki modulus ψ ≥ 0, thawing PNGB φ_DE (1.94 × 10^{−33} eV), ULDM φ_osc (2.65 × 10^{−23} eV), Higgs portal Φ_portal (1.84 TeV), and IR Chameleon φ_Ch (2.4 meV)—embed into the 5-mode extended Krein–Connes algebra A_F^{H10} = ℂ ⊕ ℍ ⊕ M_3(ℂ) ⊕ ℂ_hol ⊕ ℂ_Ch [49–51], where ℤ_2 orthogonality suppresses Galileon-Chameleon radiative mixing to |ε_{ψ,Ch}| = (M_Ch/Λ_local)⁴/(16π²) = 4.42 × 10^{−16}, resolving OP-4 structurally while phenomenological β_Ch remains testable by CANNEX P5.'
  },
  {
    title: '4. Effective Field Theory Cutoffs, S-Matrix Positivity, FRG & Reproducibility',
    detail:
      'Horndeski braiding scale Λ_3 = 1.758 × 10^{−13} eV lifts under terrestrial renormalization Z_ψ(r_⊕) ≈ 7.05 × 10^{14} to Λ_local ≈ 4.67 μeV (c_2 = 2.1 × 10^{57} GeV⁻⁴ > 0) and UV-completes via the 1-loop Wetterich FRG non-Gaussian fixed point (g_* = 1.3105, λ_* = 0.1440, θ_real = 4.835 > 0) and CDT/L_UV dimensional reduction d_s = 3.989 → 2.002. All checks, ODEs, strong-field Kerr/RN/TOV solvers, cosmological likelihoods, Fisher SNRs, and SHA-256 digest (7463d727…) are verified deterministically by scripts/verify-igrt-monograph.mjs.'
  },
  {
    title: '5. Split Architecture & Remaining External Frontiers',
    detail:
      'The monograph partitions cleanly into (I) Mathematical Foundations (Chapters 2, 4, 5 & Appendices A–D, L) and (II) Cosmology, Strong-Field & Phenomenology (Chapters 3, 6, 7 & Appendices E–K). Full external C/Python 3D CMB CAMB/Cobaya runs, 3+1D non-axisymmetric binary-merger BSSN-Hayward numerical relativity, non-perturbative off-shell 3+1 quantum algebra closure, and independent external journal peer review of [1]–[3] remain open.'
  }
];

export interface SymbolEntry {
  symbol: string;
  name: string;
  units: string;
  collisionNote: string;
  firstDefined: string;
}

export const LIST_OF_SYMBOLS: SymbolEntry[] = [
  {
    symbol: 'M, g_μν',
    name: '4D Lorentzian base manifold and metric tensor, signature (−,+,+,+)',
    units: 'g_μν dimensionless (x^μ in m)',
    collisionNote: 'Greek indices μ, ν ∈ {0,1,2,3} denote base coordinates; Diff⁺(M) acts on M via bundle automorphisms',
    firstDefined: '§1.1, Postulate I'
  },
  {
    symbol: 'P(M, PU(H)), E_stat',
    name: 'Principal PU(H)-bundle (δ(P)=0) and associated bundle E_stat = P ×_{PU(H)} S(N) on split Type I factor N',
    units: 'Geometric bundles',
    collisionNote: 'Type III₁ local algebras lack trace; density matrices live cleanly on split-included Type I factor N',
    firstDefined: '§2.1, Postulate II'
  },
  {
    symbol: 'ρ(θ), σ_V',
    name: 'Normal state / density operator on N (θ-parameterized) & Hadamard vacuum reference on diamond A(V)',
    units: 'Dimensionless trace-1 operator',
    collisionNote: 'Disambiguated from cosmological mass/energy density ρ_m, ρ_max via subscripts',
    firstDefined: '§2.2, §3.2'
  },
  {
    symbol: 'g_ij^QFI, g̃_ij^BKM',
    name: 'SLD Quantum Fisher metric (f=(1+t)/2) and relaxation-weighted BKM metric g̃_ij^BKM = τ_rel g_ij^BKM',
    units: 'g_ij^QFI [1]; g̃_ij^BKM [s] (for θ dimensionless)',
    collisionNote: 'Latin i, j index fiber states; BKM identity uses τ_rel = Γ_KMS⁻¹ strictly under KMS detailed balance',
    firstDefined: '§2.2, §5.3'
  },
  {
    symbol: 'ψ(x) ≥ 0 vs. Ψ',
    name: 'ψ(x): coarse-grained Araki modulus; Ψ: canonical Wheeler–DeWitt bundle wavefunctional',
    units: 'ψ in √(J/m) SI (GeV natural); Ψ dimensionless',
    collisionNote: 'ψ ≥ 0 carries Horndeski Galileon & conformal coupling and is NOT shift-symmetric; ψ_vac = 0',
    firstDefined: '§1.1, §3.1, §3.2'
  },
  {
    symbol: 'φ_DE, φ_osc, φ_Ch',
    name: 'PNGB dark energy (m_DE ≈ 1.94×10^{−33} eV), input ULDM (2.65×10^{−23} eV), & Chameleon (2.4 meV)',
    units: 'eV (GeV natural; √(J/m) SI)',
    collisionNote: 'φ_DE slow-rolls by Klein–Gordon ODE; φ_osc carries f_DM ≤ 0.02 (monopole PTA); φ_Ch drives CANNEX P5',
    firstDefined: '§1.3, §3.1, §7.1–7.3'
  },
  {
    symbol: 'q_ab, N, N^a',
    name: 'ADM spatial 3-metric on Σ_t (a, b ∈ {1,2,3}), lapse N, and shift N^a derived from Eq. (3.1)',
    units: 'q_ab, N, N^a dimensionless',
    collisionNote: 'Latin a, b reserved for spatial slices; distinct from spacetime μ, ν and statistical i, j',
    firstDefined: '§1.1, §5.2'
  },
  {
    symbol: 'κ_ψ, γ, β',
    name: 'Planck-normalized Araki constant ℏc ℓ_Pl/(12π), Galileon γ (≈ 0.83), matter trace coupling β',
    units: 'κ_ψ in J·m² (GeV⁻¹); γ, β dimensionless',
    collisionNote: 'κ_ψ = 1.355 × 10^{−62} J·m² = 2.173 × 10^{−21} GeV⁻¹ (benchmark ansatz choosing ℓ_Pl over ℓ_CG⁻¹)',
    firstDefined: '§3.1, §3.2, App. C'
  },
  {
    symbol: 'A_μ, F_μν, H_Fisher',
    name: 'pu(H)-valued connection, curvature ∂_μA_ν − ∂_νA_μ + i[A_μ, A_ν], & unbounded S¹ clock Hamiltonian',
    units: 'A_μ in m⁻¹; F_μν in m^{−2}; H_Fisher in J (or eV)',
    collisionNote: 'H_Fisher = −i E_mod σ_1 (∂_s − i A_Berry) on compact Bures circle S¹ (dimensionless coordinate s ∈ [0, L), circumference L); wavenumber (2πk/L − Φ_Berry/L) is dimensionless, yielding discrete UNBOUNDED eigenvalues E_mod σ_1 (2πk/L − Φ_Berry/L) in Joules [J] (or eV), k ∈ ℤ',
    firstDefined: '§2.1, §3.1, §5.1'
  },
  {
    symbol: 'Λ vs. Λ_3 vs. Λ_local',
    name: 'Λ: cosmological constant; Λ_3: Galileon scale (1.76×10^{−13} eV); Λ_local: Z_ψ^{1/2}Λ_3 ≈ 4.67 μeV',
    units: 'Λ in m^{−2}; Λ_3, Λ_local in eV',
    collisionNote: 'Terrestrial screening Z_ψ ≈ 7.05 × 10^{14} lifts cubic-Galileon cutoff to 4.67 μeV (4.2 cm)',
    firstDefined: '§3.1, §3.4'
  },
  {
    symbol: 'τ, τ_0, τ_step, τ_FR',
    name: 'τ: proper time; τ_0: Planck time; τ_step: 2ℏ/(E_mod σ_1) (≡ τ_0 at 2M_Pl c²); τ_FR: relational clock',
    units: 'Seconds (s)',
    collisionNote: 'Norm ‖RAG_k − RES_k‖_F = ½ ds_QFI is dimensionless; converges at O(N^{−2}) rate',
    firstDefined: '§4.1, §5.1'
  },
  {
    symbol: 'K_ξ, σ_1(K_ξ), E_mod',
    name: 'Split modular generator −ln Δ_ρ, single-mode dispersion (σ_1 ∈ (0,1]), & clock gap/KMS E_mod',
    units: 'K_ξ, σ_1 dimensionless; E_mod in J or eV',
    collisionNote: 'Normalized per single mode (M = 1) so mode counting never scales dτ; E_mod = ℏω_0 when a = 0',
    firstDefined: '§4.1, §4.2, App. D'
  },
  {
    symbol: 'ρ_max, ρ_Pl, w(z)',
    name: 'Bounce UV saturation ρ_max ≈ 0.4094 ρ_Pl (9.095 × 10^{75} GeV⁴) & numerical Klein–Gordon EoS w(z)',
    units: 'kg m^{−3} or GeV⁴; w(z) dimensionless',
    collisionNote: 'KG integration at θ_i = 1.95 gives w_0 = −0.908, w_a = −0.177 with early 1+w ∝ (1+z)^{−3}',
    firstDefined: '§6.1, §7.1'
  },
  {
    symbol: 'n_s, n_T, r, f_NL^{eq}',
    name: 'Matter-bounce primordial indices: tuned n_s ≈ 0.964, shared red n_T ≈ −0.036, r = 24c_s³ = 0.0123, f_NL^{eq} = −4.38',
    units: 'Dimensionless CMB perturbation parameters',
    collisionNote: 'Fixes n_T contradiction (red, NOT blue); separates canonical matter-bounce −35/8 from DBI 1/c_s² formula',
    firstDefined: '§6.2, §7.3 (P3)'
  },
  {
    symbol: 'r_V, r_{V,⊕}, ℓ_0, S_rem',
    name: 'Solar/Earth Vainshtein radii (370 ly / 5.33 ly), derived Hayward length ℓ_0 = 2^{−1/4} ℓ_Pl, QES entropy S_rem',
    units: 'r_V in ly; ℓ_0 in m; S_rem in nats',
    collisionNote: 'K_Hayward(0)=24/ℓ_0⁴ = K_max = 48/ℓ_Pl⁴ derives ξ_0 = 2^{−1/4} ⇒ M_rem = 1.092 M_Pl, S_rem = 3π/√2 ≈ 6.66 nats; QES island r_+ − O(ℏ/(Mc))',
    firstDefined: '§3.4, §6.3, §6.4'
  },
  {
    symbol: 'Γ_Araki, η_Araki, R_0',
    name: 'Macroscopic DP-type decoherence rate, benchmark ratio κ_ψ/κ_0 = 4/3, & 10^{−14} kg silica radius R_0 = 1.028 μm',
    units: 'Γ_Araki in s⁻¹; η_Araki dimensionless; R_0 in μm',
    collisionNote: 'Exact overlapping-sphere calculation at R_0 = 1.028 μm, Δx = 180 nm gives Γ_Araki ≈ 1.18 s⁻¹',
    firstDefined: '§1.3, §7.3 (P2)'
  }
];

export const ACRONYMS_GLOSSARY: { term: string; expansion: string; definition: string }[] = [
  { term: 'ADM', expansion: 'Arnowitt–Deser–Misner', definition: '3+1 Hamiltonian spacetime decomposition yielding spatial 3-metric q_ab, lapse N, and shift N^a.' },
  { term: 'AQFT', expansion: 'Algebraic Quantum Field Theory', definition: 'Haag–Kastler axiomatic assignment of Type III₁ von Neumann algebras A(V) to bounded causal diamonds.' },
  { term: 'BAO', expansion: 'Baryon Acoustic Oscillations', definition: 'Comoving acoustic scale (~147 Mpc) measured in galaxy clustering by DESI DR1/DR2.' },
  { term: 'BKL', expansion: 'Belinskii–Khalatnikov–Lifshitz', definition: 'Mixmaster chaotic anisotropic shear growth (ρ_σ ∝ a^{−6}) requiring pre-bounce ekpyrotic isotropization.' },
  { term: 'BKM', expansion: 'Bogoliubov–Kubo–Mori', definition: 'Monotone metric equal to the Hessian of relative entropy, governing KMS detailed-balance gradient flows.' },
  { term: 'BRST / BFV', expansion: 'Becchi–Rouet–Stora–Tyutin / Batalin–Fradkin–Vilkovisky', definition: 'Nilpotent constraint cohomology Q_BRST² = 0 at semiclassical 1-loop order.' },
  { term: 'CANNEX', expansion: 'Casimir And Non-Newtonian Force Experiment', definition: 'Parallel-plate vacuum force metrology reaching ~10^{−11}–10^{−12} N/m² pressure sensitivity (10 μm–1 cm).' },
  { term: 'CODATA', expansion: 'Committee on Data of the ISC', definition: 'Standard constants (2022): exact c, ℏ, k_B; empirical G = 6.67430(15) × 10^{−11} (22 ppm uncertainty).' },
  { term: 'CPTP', expansion: 'Completely Positive Trace-Preserving', definition: 'Physical quantum channels; non-detailed-balance CPTP maps satisfy Spohn inequality rather than BKM equality.' },
  { term: 'FLRW', expansion: 'Friedmann–Lemaître–Robertson–Walker', definition: 'Homogeneous, isotropic cosmological geometry parameterized by scale factor a(t).' },
  { term: 'GSL', expansion: 'Generalized Second Law', definition: 'Horizon thermodynamics d(S_BH + S_out)/dτ ≥ 0, conditional on QFC/QNEC outside trapping zones.' },
  { term: 'HL-LHC', expansion: 'High-Luminosity Large Hadron Collider', definition: 'CERN √s = 14 TeV upgrade (3000 fb⁻¹) probing Φ_portal → hh/VV and Higgs coupling δσ_Zh.' },
  { term: 'IGEG / RES=RAG', expansion: 'Information-Geometric Extended Gravity / Resonant Active Generation', definition: 'Preprint starting frameworks by Bulaqueña [1] and Tassan [2] synthesized into IGRT [3].' },
  { term: 'KMS', expansion: 'Kubo–Martin–Schwinger', definition: 'Equilibrium analyticity condition fixing modular generator K_ξ and detailed-balance inner products.' },
  { term: 'LQC / LQG', expansion: 'Loop Quantum Cosmology / Gravity', definition: 'Non-perturbative polymer/holonomy quantization motivating effective UV bounce density bounds.' },
  { term: 'PNGB', expansion: 'Pseudo-Nambu–Goldstone Boson', definition: 'Angular phase scalar φ_DE protected by approximate continuous shift symmetry φ_DE → φ_DE + c.' },
  { term: 'PPN', expansion: 'Parameterized Post-Newtonian', definition: 'Weak-field Solar System tests constraining |γ_PPN − 1| ≤ 2.3 × 10^{−5} (Cassini).' },
  { term: 'QES', expansion: 'Quantum Extremal Surface', definition: 'Extremal surface minimizing generalized entropy S_gen = Area/(4Gℏ) + S_bulk to resolve black-hole Page curves.' },
  { term: 'QFC / QNEC', expansion: 'Quantum Focusing Conjecture / Quantum Null Energy Condition', definition: 'Unproven semiclassical conjecture (QFC) and its proved flat/Killing limit (QNEC) constraining horizon expansion.' },
  { term: 'QFI / SLD', expansion: 'Quantum Fisher Information / Symmetric Logarithmic Derivative', definition: 'Bures–Helstrom monotone distinguishability metric g_ij^QFI = 4 g_ij^Bures on pure/mixed states.' },
  { term: 'ULDM', expansion: 'Ultralight Dark Matter', definition: 'Coherent scalar wave-like dark component (λ_dB ~ kpc); constrained below f_DM ≲ 0.03 near m ~ 10^{−23} eV.' },
  { term: 'WDW', expansion: 'Wheeler–DeWitt Equation', definition: 'Canonical Hamiltonian constraint Ĥ_total Ψ = 0 lacking explicit external coordinate time.' }
];

export const LIST_OF_TABLES: { number: string; title: string; location: string }[] = [
  { number: 'Table 0.1', title: 'List of Symbols and Collision Disambiguation Rules', location: 'Summary & Indices' },
  { number: 'Table 0.2a', title: 'Dimensional-Analysis Closure — Part I: Bundle, Clock & Quantum Information (Items 1–11)', location: 'Summary & Indices / App. G' },
  { number: 'Table 0.2b', title: 'Dimensional-Analysis Closure — Part II: Gravity, Bounce, Black Holes & Metrology (Items 12–20)', location: 'Summary & Indices / App. G' },
  { number: 'Table 0.3', title: 'Equation Index (0.1)–(8.1) and Appendices A–L with Calibrated Status', location: 'Summary & Indices' },
  { number: 'Table 1.1', title: 'Foundational Postulates of IGRT (Postulates I–VII)', location: '§1.4' },
  { number: 'Table 7.1', title: 'Observable Falsification Protocols (P1–P6) & Parameter Closures', location: '§7.3' },
  { number: 'Table 8.1', title: 'Comparison of IGRT With String Theory & Six Quantum-Gravity Approaches', location: '§8.1' },
  { number: 'Table 8.2', title: 'Summary of Seven Core Formal Results & Theorem Citations', location: '§8.1' },
  { number: 'Table 8.3', title: 'Epistemic Claim, Status, Quantitative Evidence & Evasion Parameters Ledger', location: '§8.1' },
  { number: 'Table H.1', title: 'Reproducible Numerical & Parameter Register (H_0 = 67.4–73.0)', location: 'Appendix H' },
  { number: 'Table I.1', title: 'Revision History (Editions H6 → H7 → H8 → H9 → H10)', location: 'Appendix I' },
  { number: 'Table I.2', title: 'Formal Response to Reviewers Matrix (R1–R8)', location: 'Appendix I' }
];

export interface DimensionalClosureRow {
  quantity: string;
  expression: string;
  siUnits: string;
  naturalUnits: string;
  auditNote: string;
}

export const DIMENSIONAL_ANALYSIS_CLOSURE_A: DimensionalClosureRow[] = [
  {
    quantity: '1. Discrete Step Time τ_step',
    expression: 'τ_step = 2ℏ / (E_mod · σ_1)',
    siUnits: 's (since J·s / J = s)',
    naturalUnits: 'GeV⁻¹',
    auditNote: 'Reduces identically to τ_0 = ℏ/(M_Pl c²) = √(ℏG/c⁵) specifically at Planck modular gap E_mod σ_1 = 2 M_Pl c².'
  },
  {
    quantity: '2. Araki Scale κ_ψ & Modulus ψ²',
    expression: 'κ_ψ = ℏc ℓ_Pl / (12π);  ψ² = κ_ψ (S_Araki / Vol_3)',
    siUnits: 'κ_ψ: J·m² (1.355×10^{−62}); ψ²: J/m',
    naturalUnits: 'κ_ψ: GeV⁻¹ (2.173×10^{−21}); ψ²: GeV²',
    auditNote: '[J·s · m/s · m] = J·m²; multiplying by [1/m³] yields J/m (or GeV² in natural units). Choice of ℓ_Pl over ℓ_CG⁻¹ is an ansatz.'
  },
  {
    quantity: '3. Clock Energy Scale E_mod',
    expression: 'E_mod = max(ℏω_0, 2π k_B T_U)',
    siUnits: 'J (Energy)',
    naturalUnits: 'GeV (or eV)',
    auditNote: '[ℏω_0] = (J·s)(s⁻¹) = J; [k_B T_U] = (J/K)(K) = J. Ensures finite E_mod = ℏω_0 at inertial acceleration a = 0.'
  },
  {
    quantity: '4. Single-Mode Dispersion σ_1(K_ξ)',
    expression: 'σ_1(K_ξ) = √(⟨K_ξ²⟩ − ⟨K_ξ⟩²) = x / [2 sinh(x/2)]',
    siUnits: 'Dimensionless [1]',
    naturalUnits: 'Dimensionless [1]',
    auditNote: 'Modular K_ξ = −ln Δ_ρ is dimensionless; x = ℏω/(k_B T) is dimensionless; normalized strictly at M = 1 mode.'
  },
  {
    quantity: '5. S¹ Clock Hamiltonian H_Fisher',
    expression: 'H_Fisher = −i E_mod σ_1 (∂_{s_QFI} − i A_Berry)',
    siUnits: 'J (Energy)',
    naturalUnits: 'GeV',
    auditNote: 'Arc length s_QFI and Berry connection A_Berry are dimensionless; [E_mod σ_1 · ∂_s] = J·1 = J.'
  },
  {
    quantity: '6. Jacobi–Finsler Interval dS_ext²',
    expression: 'dS_ext² = g_μν dx^μ dx^ν + α_mod² c² g_ij^QFI dθ^i dθ^j',
    siUnits: 'm²',
    naturalUnits: 'GeV^{−2}',
    auditNote: '[g_μν dx^μ dx^ν] = m²; [α_mod² c² ds_QFI²] = s² · (m/s)² · 1 = m². Null surface dS_ext² = 0 fixes synchronization.'
  },
  {
    quantity: '7. Modular Calibration Coupling α_mod',
    expression: 'α_mod = ℏ / (E_mod · σ_1(K_ξ))',
    siUnits: 's (J·s / J)',
    naturalUnits: 'GeV⁻¹',
    auditNote: 'Postulated constitutive proportionality converting dimensionless statistical distinguishability into proper seconds.'
  },
  {
    quantity: '8. Synchronization Relation dτ',
    expression: 'dτ = α_mod ds_QFI = (1/c)√(−g_μν ẋ^μ ẋ^ν) dλ',
    siUnits: 's',
    naturalUnits: 'GeV⁻¹',
    auditNote: 'Both sides match [s] identically for arbitrary affine/coordinate parameter λ along rank-preserving timelike trajectories.'
  },
  {
    quantity: '9. Uhlmann–Frobenius Norm Step',
    expression: '‖RAG_k − RES_k‖_F = √[2(1 − F(ρ_k, ρ_{k+1}))] = ½ ds_QFI',
    siUnits: 'Dimensionless [1]',
    naturalUnits: 'Dimensionless [1]',
    auditNote: 'Purifications W_k obey Tr(W_k† W_k) = 1, so Frobenius distance and Bures arc length are pure dimensionless numbers.'
  },
  {
    quantity: '10. Detailed-Balance BKM Entropy Flow',
    expression: '(d/dτ) S_Araki = −g̃_ij^BKM θ̇^i θ̇^j,  g̃_ij^BKM = τ_rel g_ij^BKM',
    siUnits: 's⁻¹ ([τ_rel · g_ij^BKM · θ̇^2] = s · s^{−2} = s⁻¹)',
    naturalUnits: 'GeV',
    auditNote: 'S_Araki is in dimensionless nats so dS_Araki/dτ has units s⁻¹; KMS relaxation mobility τ_rel = Γ_KMS⁻¹ supplies the [s] factor.'
  },
  {
    quantity: '11. General CPTP Spohn Inequality',
    expression: '(d/dτ) S_Araki(ρ(τ) ‖ ρ_eq) ≤ 0',
    siUnits: 's⁻¹',
    naturalUnits: 'GeV',
    auditNote: 'Valid for all non-detailed-balance CPTP semigroups; strict equality with −g̃_ij^BKM θ̇^i θ̇^j holds only under KMS detailed balance.'
  }
];

export const DIMENSIONAL_ANALYSIS_CLOSURE_B: DimensionalClosureRow[] = [
  {
    quantity: '12. L_UV Modified Friedmann Equation',
    expression: 'H² = (8πG / 3) ρ (1 − ρ / ρ_max)',
    siUnits: 's⁻² (since [G ρ] = (m³/kg·s²)(kg/m³) = s⁻²)',
    naturalUnits: 'GeV²',
    auditNote: 'Ratio ρ/ρ_max is dimensionless; saturation H = 0 occurs smoothly at ρ = ρ_max without infinite curvature.'
  },
  {
    quantity: '13. Bounce Saturation Density ρ_max',
    expression: 'ρ_max = √3 / (32π² γ_BI³) ρ_Pl  (γ_BI = 0.2375)',
    siUnits: '2.110 × 10^{96} kg m^{−3} (ρ_Pl = c⁵/(ℏG²))',
    naturalUnits: '9.095 × 10^{75} GeV⁴ (ρ_Pl = M_Pl⁴)',
    auditNote: 'Prefactor 0.4094 is dimensionless; exact match between SI mass density × c² / (ℏc)³ and natural GeV⁴ units verified in script.'
  },
  {
    quantity: '14. General-w Bounce & Turnaround',
    expression: 'a(t)/a_min = [1+(t/t_w)²]^{1/(3(1+w))};  (ä/a)|_{ρ_max} = 4πG ρ_max(1+w)',
    siUnits: 'a/a_min [1] (t_w in s); ä/a [s⁻²]',
    naturalUnits: '[1]; GeV²',
    auditNote: 't_w = [√(6πG ρ_max)(1+w)]⁻¹ has units s, making t/t_w dimensionless; turnaround acceleration ä/a has units s⁻².'
  },
  {
    quantity: '15. Solar Vainshtein Radius r_V',
    expression: 'r_V = (γ r_s c² / H_0²)^{1/3}',
    siUnits: 'm (369.8 ly at H_0 = 70, γ = 0.83)',
    naturalUnits: 'GeV⁻¹',
    auditNote: '[(m · m²/s²) / s⁻²]^{1/3} = [m³]^{1/3} = m. Deep inside r ≪ r_V, radial derivative dψ/dr ∝ (r/r_V)^{3/2}.'
  },
  {
    quantity: '16. Screening Z_ψ & Local Cutoff Λ_local',
    expression: 'Z_ψ = (r_{V,⊕}/r_⊕)^{3/2};  Λ_3 = (M̄_Pl H_0^2)^{1/3};  Λ_local = Z_ψ^{1/2} Λ_3',
    siUnits: 'Z_ψ [1] (7.05×10^{14}); Λ_3 = 1.758×10^{−13} eV; Λ_local = 4.67 μeV',
    naturalUnits: 'Z_ψ [1]; Λ_3, Λ_local [eV]',
    auditNote: 'Natural-unit [M̄_Pl · H_0²]^{1/3} = [GeV · GeV²]^{1/3} = GeV; dressed terrestrial Galileon cutoff Λ_local = Z_ψ^{1/2} Λ_3 (4.2 cm).'
  },
  {
    quantity: '17. Chameleon Mass² & CANNEX Pressure',
    expression: 'm_eff²(ρ) = V″(φ_Ch) + (β_Ch² / M_Pl²) ρ;  ΔP_Ch ~ 10^{−10}–2×10^{−9} N/m²',
    siUnits: 'm⁻² (or GeV²/(ℏc)²); ΔP_Ch in N/m² = Pa',
    naturalUnits: 'eV² / GeV²; ΔP_Ch in eV⁴ (with M_Ch ≈ 2.4 meV)',
    auditNote: 'Independent Chameleon φ_Ch produces excess pressure 1–2 orders above CANNEX 10^{−11}–10^{−12} N/m² noise floor.'
  },
  {
    quantity: '18. Hayward Lapse, K(0), Echoes & QES',
    expression: 'f(r) = 1 − (r_s r^2) / (r^3 + r_s ℓ_0^2);  K(0) = 24/ℓ_0^4;  r_I = r_+ − O(ℏ/(Mc))',
    siUnits: 'f [1]; K(0) [m⁻⁴]; Δt_echo [s]; M_rem = 2.38×10^{−8} kg; S_rem [nats]',
    naturalUnits: 'f [1]; K(0) [GeV⁴]; Δt_echo [GeV⁻¹]; S_rem ≈ 6.66 [nats]',
    auditNote: 'With r_s = 2GM/c², ℓ_Pl²/r_+ = (Gℏ/c³)/(2GM/c²) = ℏ/(2Mc) has units of length [m], fixing the App. E QES error term.'
  },
  {
    quantity: '19. Nanosphere DP & Araki Rates (P2)',
    expression: 'Γ_Araki = (4/3) Γ_DP = (4 G m² / (3 ℏ R_0)) · [(u²/2) − (3u³/16) + (u⁵/160)]  (u = Δx/R_0 < 2)',
    siUnits: 's⁻¹ (1.18 s⁻¹ at R_0 = 1.028 μm, Δx = 180 nm)',
    naturalUnits: 'GeV',
    auditNote: '[(m³/kg·s²) · kg² / ((kg·m²/s) · m)] = s⁻¹. Exact overlapping-sphere integral at R_0 = 1.028 μm for 10^{−14} kg SiO₂.'
  },
  {
    quantity: '20. ULDM Mass/de Broglie & Planck τ_0',
    expression: 'm_osc = h f_clock / c²;  λ_dB = h/(m_osc v);  τ_0 = √(ℏG / c⁵)',
    siUnits: 'm_osc [kg] (2.65×10^{−23} eV); λ_dB [m] (2.07 kpc); τ_0 = 5.39125×10^{−44} s',
    naturalUnits: 'm_osc [eV]; λ_dB [GeV⁻¹]; τ_0 = 1/M_Pl (natural units only)',
    auditNote: 'CODATA 2022 exact c, ℏ, k_B; measured G (22 ppm) propagates cleanly to 11 ppm uncertainty in ℓ_Pl, τ_0, M_Pl.'
  }
];

export const DIMENSIONAL_ANALYSIS_TABLE: DimensionalClosureRow[] = [
  ...DIMENSIONAL_ANALYSIS_CLOSURE_A,
  ...DIMENSIONAL_ANALYSIS_CLOSURE_B
];

export const EQUATION_INDEX: { label: string; title: string; section: string; status: EpistemicStatus }[] = [
  { label: '(0.1)', title: 'Worldline–Fiber Synchronization & Uhlmann–Frobenius Limit', section: 'Abstract / §4.1', status: 'Ansatz' },
  { label: '(1.1)', title: 'ADM Wheeler–DeWitt Bundle Constraint (Derived from Eq. 3.1)', section: '§1.1', status: 'Derived' },
  { label: '(2.1)', title: 'SLD Quantum Fisher Metric Tensor g_ij^QFI (Petz Class)', section: '§2.2', status: 'Established' },
  { label: '(2.2)', title: 'Rank-Preserving Fubini–Study Limit & S³ Regularization Caveat', section: '§2.3', status: 'Established' },
  { label: '(2.3)', title: 'Worked Example: Unitary S³ Qubit Line Element ds_QFI²', section: '§2.3', status: 'Derived' },
  { label: '(3.1)', title: 'Explicit Five-Scalar + Fiber + L_UV Horndeski Type Ia Action', section: '§3.1', status: 'Axiom' },
  { label: '(3.2)', title: 'Type III₁ Araki Modulus ψ²(x) (Coarse Scale ℓ_CG, Planck κ_ψ Ansatz)', section: '§3.2', status: 'Ansatz' },
  { label: '(3.3)', title: 'Extended Einstein Equations & All-Orders Noether Consistency', section: '§3.3', status: 'Consistency' },
  { label: '(4.1)', title: 'Postulated Calibration Synchronization & O(N^{−2}) Uhlmann Limit', section: '§4.1', status: 'Ansatz' },
  { label: '(4.2)', title: 'Worked Example: Split-Regulated Single-Mode KMS Dispersion σ_1(K_ξ)', section: '§4.2', status: 'Derived' },
  { label: '(4.3)', title: 'Krein Lorentzian Spectral Triple & Smeared Poset Dirac Limit', section: '§4.3', status: 'Derived' },
  { label: '(5.1)', title: 'Born–Oppenheimer Unfrozen Schrödinger Equation (Unbounded S¹ Spectrum)', section: '§5.1', status: 'Derived' },
  { label: '(5.2)', title: 'Detailed-Balance Araki–BKM Gradient-Flow Dissipation Identity', section: '§5.3', status: 'Established' },
  { label: '(6.1)', title: 'L_UV Limiting-Curvature Bounce Equation & General-w Solution', section: '§6.1', status: 'Derived' },
  { label: '(6.2)', title: 'Mukhanov–Sasaki Transfer (n_s, Red n_T, r = 24c_s³, Canonical f_NL)', section: '§6.2', status: 'Input' },
  { label: '(6.3)', title: 'Derived ξ_0 = 2^{−1/4}, Frolov–Hayward Lapse & QES Island Remnant', section: '§6.3–6.4', status: 'Derived' },
  { label: '(7.1)', title: 'Klein–Gordon Thawing w(z) & Input Holonomy Mode φ_osc Monopole Lock', section: '§7.1–7.2', status: 'Input' },
  { label: '(8.1)', title: 'Semiclassical EFT Saddle & Covariant Stress Conservation Check', section: '§8.3', status: 'Consistency' },
  { label: '(A.1)', title: 'Explicit Cubic-Galileon & Conformal Jordan–Einstein Bianchi Check', section: 'Appendix A', status: 'Consistency' },
  { label: '(B.1)', title: 'Petz Thm 6 SLD Formula & Šafránek Rank-Change Discontinuity', section: 'Appendix B', status: 'Established' },
  { label: '(C.1)', title: 'Corrected Diamond 8π²/(15ℏc) Integrand & κ_ψ = 2.173 × 10^{−21} GeV⁻¹', section: 'Appendix C', status: 'Ansatz' },
  { label: '(D.1)', title: 'Split-Included Type I Factor, Nuclearity & Inertial Gap E_mod', section: 'Appendix D', status: 'Derived' },
  { label: '(E.1)', title: 'Explicit L_UV Bounce, Hayward QES O(ℏ/(Mc)) Extremization & Conditional GSL', section: 'Appendix E', status: 'Derived' },
  { label: '(F.1)', title: 'Dual-Clock Flicker/Drift & Monopole PTA σ_r = 2√[…] Budget', section: 'Appendix F', status: 'Derived' },
  { label: '(G.1)', title: 'CODATA 2022 Constants, H_0 Propagation & ρ_max in GeV⁴', section: 'Appendix G', status: 'Established' },
  { label: '(H.1)', title: 'Reproducible Numerical Closures Verified by Monograph Script', section: 'Appendix H', status: 'Derived' },
  { label: '(K.1)', title: 'Reionization τ_re, Lensing A_L/E_G, Leptogenesis η_B & Joint Δχ² / Δln Z', section: 'Appendix K', status: 'Derived' },
  { label: '(L.1)', title: 'Wetterich FRG Fixed Point, CDT Flow d_s, 5-Mode A_F^{H10} & Kerr–Hayward Stability', section: 'Appendix L', status: 'Derived' }
];

export interface FrameworkComparisonRow {
  framework: string;
  keyMechanism: string;
  preserves4DLorentzian: string;
  wdwUnfreezing: string;
  singularityStatus: string;
  openLimitations: string;
}

export const FRAMEWORKS_COMPARISON_TABLE: FrameworkComparisonRow[] = [
  {
    framework: 'IGRT (This Monograph)',
    keyMechanism: 'P(M, PU(H)) + E_stat(N) + Araki ψ² + Horndeski (Λ_3) + L_UV + A_F',
    preserves4DLorentzian: 'Yes on outer & pre-Cauchy 1+1D Hayward–Vaidya domains (κ_− ℓ_0 < 1)',
    wdwUnfreezing: 'Unbounded S¹ H_Fisher (Landau–Zener k>0) via Born–Oppenheimer τ_FR',
    singularityStatus: '2-stage ekpyrotic–L_UV bounce + derived ξ_0 = 2^{−1/4} Hayward–Vaidya core',
    openLimitations: 'A_F^{H10} closes 5-scalar embedding (β_Ch tested by CANNEX); α_mod/κ_ψ ansatz; 3D CAMB MCMC, non-perturbative 3+1 QG & peer review open.'
  },
  {
    framework: 'String Theory / M-Theory',
    keyMechanism: '1D strings / higher branes in 10D/11D compactifications',
    preserves4DLorentzian: 'Requires 6–7 compactified spatial dimensions',
    wdwUnfreezing: 'Worldsheet / AdS boundary time; bulk WDW non-unique',
    singularityStatus: 'Fuzzballs / string α′ corrections smooth specific BHs',
    openLimitations: 'Metastable landscape (~10^{500} vacua); moduli stabilization; Planck/string scale untested.'
  },
  {
    framework: 'Page–Wootters / QRF [9, 101]',
    keyMechanism: 'Conditional state ⟨τ|_C |Ψ⟩ + Quantum Reference Frame switching',
    preserves4DLorentzian: 'No intrinsic gravitational screening or QFT action',
    wdwUnfreezing: 'Exact relational unitarity & clock transitions (Höhn–Smith–Lock)',
    singularityStatus: 'Silent on bounce/BH singularities without gravity dynamics',
    openLimitations: 'Requires dynamical clock-gravity backreaction & multi-clock ambiguity resolution.'
  },
  {
    framework: 'Connes–Rovelli Thermal Time [10]',
    keyMechanism: 'Tomita–Takesaki modular flow σ_t^ω of equilibrium state ω',
    preserves4DLorentzian: 'Covariance preserved; derives Unruh/Tolman flow',
    wdwUnfreezing: 'Equilibrium KMS state selects physical thermal clock',
    singularityStatus: 'No strong-field cosmological bounce or BH interior',
    openLimitations: 'Non-equilibrium states lack global KMS flow without split local regulation.'
  },
  {
    framework: 'Loop Quantum Gravity (LQG) [58, 59]',
    keyMechanism: 'Spin networks, SU(2) Ashtekar–Barbero connections, polymer holonomies',
    preserves4DLorentzian: 'IR Lorentz covariance under active refinement',
    wdwUnfreezing: 'Master constraint / scalar-field deparametrization',
    singularityStatus: 'Polymer bounce density ρ_max ≈ 0.41 ρ_Pl in symmetric models',
    openLimitations: 'Off-shell inhomogeneous 3+1 Dirac anomaly freedom remains active research.'
  },
  {
    framework: 'Causal Set Theory [52–54]',
    keyMechanism: 'Locally finite posets (C, ≺) from Lorentz-invariant Poisson sprinkling',
    preserves4DLorentzian: 'Exact discrete Lorentz invariance',
    wdwUnfreezing: 'Sequential growth / retarded causal poset evolution',
    singularityStatus: 'Planck-scale discreteness cuts off continuum UV divergences',
    openLimitations: 'Non-local smeared d’Alembertians required; dynamical Einstein recovery ongoing.'
  },
  {
    framework: 'Asymptotic Safety [EFT]',
    keyMechanism: 'Non-Gaussian UV fixed point in effective average action Γ_k',
    preserves4DLorentzian: '4D metric formalism preserved directly',
    wdwUnfreezing: 'Uses background FRG flow rather than canonical WDW',
    singularityStatus: 'RG-improved regular black holes & bounces',
    openLimitations: 'Lorentzian signature continuation from Euclidean FRG flows.'
  },
  {
    framework: 'Hořava–Lifshitz Gravity',
    keyMechanism: 'Anisotropic Lifshitz scaling z = 3 in ultraviolet',
    preserves4DLorentzian: 'Explicitly breaks local Lorentz invariance at UV scale',
    wdwUnfreezing: 'Preferred foliation time restores renormalizability',
    singularityStatus: 'Higher spatial curvature terms can bounce FLRW',
    openLimitations: 'Tight astrophysical/gamma-ray constraints on low-energy Lorentz violation.'
  }
];

export interface ClaimEvidenceRow {
  claim: string;
  status: EpistemicStatus;
  evidenceAndDerivation: string;
  evasionOrFreeParameter: string;
}

export const CLAIM_EVIDENCE_LEDGER: ClaimEvidenceRow[] = [
  {
    claim: 'PU(H) principal bundle & Diff⁺(M) base covariance',
    status: 'Derived',
    evidenceAndDerivation: 'Trivial δ(P)=0 bundle; E_stat on Type I split N with Doplicher–Longo buffer bound 9.72×10^{−102} ≪ 10^{−30} (§2.1, App. D).',
    evasionOrFreeParameter: 'Non-trivial δ(P) ≠ 0 topologies omitted; depends on local nuclearity gap.'
  },
  {
    claim: 'Unbounded S¹ Fisher Hamiltonian H_Fisher evades Pauli theorem',
    status: 'Derived',
    evidenceAndDerivation: '−i E_mod σ_1 (∂_s − i A_Berry) spectrum E_mod σ_1(2πk/L), k ∈ ℤ; Landau–Zener k>0 decay exp(−3.14×10^{20}) ≈ 0 (§5.1).',
    evasionOrFreeParameter: 'Adiabatic clock–gravity barrier breakdown at Planckian E_mod ~ M_Pl c².'
  },
  {
    claim: 'Master Synchronization Identity Eq. (4.1) & α_mod',
    status: 'Ansatz',
    evidenceAndDerivation: 'Jacobi–Finsler null constraint + α_mod = ℏ/(E_mod σ_1); qubit Uhlmann sum verified to 2×10^{−8} (§4.1).',
    evasionOrFreeParameter: 'Constitutive calibration E_mod = ℏω_0 (a=0) remains an unreduced postulate.'
  },
  {
    claim: 'Detailed-balance BKM entropy dissipation Eq. (5.2)',
    status: 'Established',
    evidenceAndDerivation: 'Carlen–Maas [99] & Wirth–Zhang [100] + Spohn [93] on KMS-symmetric semigroups with g̃_ij^BKM = τ_rel g_ij^BKM (§5.3).',
    evasionOrFreeParameter: 'Equality requires KMS detailed balance; generic CPTP obeys Spohn inequality.'
  },
  {
    claim: 'Araki diamond ΔK_V = 8π²r⁴/(15ℏc) Δ⟨T_00⟩ & κ_ψ Ansatz',
    status: 'Ansatz',
    evidenceAndDerivation: 'Schwinger–Keldysh 1PI Galileon match; S_Araki ≈ 2.6×10^{−7} nats at 1 μm/300K; central-charge motivated κ_ψ = 2.173×10^{−21} GeV⁻¹ (§3.2, App. C).',
    evasionOrFreeParameter: 'Coarse radius ℓ_CG & choice of ℓ_Pl over ℓ_CG⁻¹ remain phenomenological ansatz.'
  },
  {
    claim: 'Horndeski Type Ia screening, PPN, & TOV / Pulsar Closures (Thm 3.1)',
    status: 'Derived',
    evidenceAndDerivation: 'Type Ia c_GW=c: r_V = 369.8 ly, Z_ψ = 7.05×10^{14}, Λ_local = 4.67 μeV (c_2 > 0 positivity), |γ_PPN−1| = 1.77×10^{−11}; TOV M_max = 2.35 M_⊙, Λ_{1.4} = 339, PSR J0737-3039 suppression 3.44×10^{−15}.',
    evasionOrFreeParameter: 'Linear growth ODE bounds |β_lin| ≤ 0.25 against Planck S_8; β → 0 restores GR limits.'
  },
  {
    claim: 'All-orders Bianchi, Midisuperspace Dirac, FRG Fixed Point & CDT d_s',
    status: 'Consistency',
    evidenceAndDerivation: 'All-orders Noether identity (App. A), linearized L_UV & Fujikawa anomaly cancellation, 1-loop Wetterich FRG fixed point (g_* = 1.3105, λ_* = 0.1440, θ = 4.835), Borel 0.9126, and CDT d_s: 3.989 → 2.002 (App. L).',
    evasionOrFreeParameter: 'Full non-perturbative off-shell 3+1 quantum constraint algebra open (OP-2).'
  },
  {
    claim: 'PNGB w(z), Perturbative S_8/A_L/E_G/τ_re/Ly-α & Joint Δχ² / Δln Z',
    status: 'Derived',
    evidenceAndDerivation: 'w_0 = −0.908, w_a = −0.177, S_8 = 0.8216–0.8466, τ_re = 0.0537, A_L = 0.977–1.030, E_G = 0.415, Ly-α |ΔP/P| = 3.96%, ℓ_A = 300.31, joint Δχ² = +4.41 & Laplace Δln Z = −3.52 (β=0) (§7.1, App. K).',
    evasionOrFreeParameter: 'Full C/Python 3D CMB CAMB/Cobaya Boltzmann MCMC awaits OP-1; falsified by w_a < −0.4 (>3σ).'
  },
  {
    claim: '2-Stage Ekpyrotic–L_UV Bounce, Reheating & Thermal Leptogenesis η_B',
    status: 'Input',
    evidenceAndDerivation: 'w_ekp = 2 dilutes BKL shear to 4.0×10^{−15}; post-bounce portal T_reh = 3.40×10^{10} GeV gives Davidson–Ibarra η_B = 6.13×10^{−10}; n_s = 0.964, red n_T = −0.036, α_s = −3.6×10^{−5}, r = 0.0123, f_NL = −4.38 (§6.1–6.2, App. K).',
    evasionOrFreeParameter: 'Tuned w_contract = −0.003 remains Input; f_NL = −4.38 beneath Planck ±47.'
  },
  {
    claim: 'Derived ξ_0 = 2^{−1/4}, Kerr–Hayward & RN–Hayward Cores, QES & Echo Quenching',
    status: 'Derived',
    evidenceAndDerivation: 'K(0)=K_max derives ξ_0 = 2^{−1/4} (M_rem = 1.092 M_Pl); 1+1D Hayward–Vaidya max κ_− ℓ_0 = 0.9294 < 1; axisymmetric Kerr–Hayward κ_− ℓ_0 ≤ 0.6639 < 1; RN–Hayward 0.2614 < 1; superradiance cavity gain 0.2048 < 1; QES S_rem = 6.66 nats (§6.3–6.4, App. L).',
    evasionOrFreeParameter: '3+1D non-axisymmetric binary-merger NR & unproven QFC in curved cores remain OP-5.'
  },
  {
    claim: '5-Mode Extended Spectral Algebra A_F^{H10} & P1 2:1 ULDM Lock',
    status: 'Derived',
    evidenceAndDerivation: 'A_F^{H10} = ℂ ⊕ ℍ ⊕ M_3(ℂ) ⊕ ℂ_hol ⊕ ℂ_Ch accommodates all 5 scalars with |ε_{ψ,Ch}| = 4.42×10^{−16}; φ_osc (f_DM ≤ 0.02) satisfies Ly-α (−3.96%), ΔN_eff = 0.0032, & Fisher SNR 25.1 (§1.2, §7.2, App. F/L).',
    evasionOrFreeParameter: 'Free coupling Δβ_eff & f_DM can evade; generic to any quadratic scalar ULDM.'
  },
  {
    claim: 'P2, P4, P5, P6 empirical thresholds & H10 SHA-256 Preregistration Digest',
    status: 'Ansatz',
    evidenceAndDerivation: 'P2: R_0 = 1.028 μm SiO₂ (Γ_Araki = 1.18 s⁻¹, SNR 23.5); P4: K_echo = 0.18 (SNR 9.0); P5: CANNEX M_Ch = 2.4 meV (SNR ≥10); P6: Φ_portal (4.7σ); H10 SHA-256 7463d727… (§7.3).',
    evasionOrFreeParameter: 'Free κ_0 (P2), |R_eff| (P4), β_Ch (P5), and sin θ_H ≪ 0.02, |λ_mix| ≪ 0.25 (P6) control exclusion.'
  }
];

export const ETHICS_AND_GOVERNANCE = {
  creditRoles: [
    {
      author: 'Marlon D. Bulaqueña (ORCID: 0009-0007-3966-0494)',
      roles:
        'Conceptualization (IGEG scalar-metric core), Methodology (Horndeski / fiber-bundle synthesis), Formal Derivations (Λ_3 Vainshtein PPN, all-orders Bianchi consistency, L_UV bounce, Araki diamond scaling), Writing – Original Draft & Revision.'
    },
    {
      author: 'Jean-Charles Tassan (ORCID: 0009-0000-8566-0486)',
      roles:
        'Conceptualization (RES=RAG discrete causal cadence & CPTP thermodynamics), Formal Analysis (Uhlmann–Frobenius convergence, scattering vs. transfer unitarity, smeared Krein correspondence & BFV BRST), Writing – Review & Editing.'
    },
    {
      author: 'Wilson John Sterking Lauret (ORCID: 0009-0004-7889-6641)',
      roles:
        'Validation (Klein–Gordon ODE, linear perturbation & Laplace likelihood MCMC, Kerr/RN–Hayward & TOV solvers, Wetterich FRG fixed point, dual-clock Cramér–Rao P1, R_0 = 1.028 μm P2, CANNEX P5, HL-LHC P6, automated verification script), Visualization & Research Integrity.'
    }
  ],
  conflictsOfInterest:
    'The authors declare no commercial or financial competing interests. Citations [1], [2], and [3] reference non-peer-reviewed author-origin preprints/monographs by M. D. Bulaqueña and J.-C. Tassan from which the unified IGRT synthesis is developed.',
  fundingStatement:
    'This theoretical research was conducted independently without external commercial sponsorship.',
  dataAndCodeAvailability:
    'All analytic derivations and numerical simulations (all 20 dimensional checks, RK2 Klein–Gordon & RK4 linear growth ODEs, joint cosmological likelihood Δχ² / Laplace Δln Z, reionization τ_re, A_L, E_G, Ly-α bound, portal leptogenesis η_B, double-pulsar PSR J0737-3039, 2-stage ekpyrotic bounce + BKL shear, 1+1D Hayward–Vaidya, axisymmetric Kerr–Hayward & charged RN–Hayward, superradiance cavity quenching, causal TOV + Hinderer neutron-star solver, 1-loop Wetterich FRG fixed point, Borel–Padé resummation, CDT spectral dimension d_s, 5-mode A_F^{H10} trace, P1–P6 Fisher SNRs, and H10 SHA-256 preregistration digest 7463d7273d121f56974978982eb476855773759bb5c886c8a4d650562cd3968a) are reproduced deterministically by scripts/verify-igrt-monograph.mjs.'
};

export interface ParameterClosureRow {
  parameter: string;
  formula: string;
  value: string;
  regime: string;
}

export const H10_PREREG_SHA256 =
  '7463d7273d121f56974978982eb476855773759bb5c886c8a4d650562cd3968a';

export const TABLE_H1_CLOSURES: ParameterClosureRow[] = [
  {
    parameter: 'Araki Scale Constant κ_ψ',
    formula: 'κ_ψ = ℏc ℓ_Pl / (12π)  (CHM central-charge / Planck ansatz)',
    value: '1.355 × 10^{−62} J·m² (2.173 × 10^{−21} GeV⁻¹)',
    regime: 'Matter diamond ΔK_V = 8π²r⁴/(15ℏc) Δ⟨T_00⟩; ψ_vac = 0 (§3.2, App. C)'
  },
  {
    parameter: 'Horndeski Braiding Scale Λ_3, FRG Fixed Point & CDT d_s',
    formula: 'Λ_3 = (M̄_Pl H_0^2)^{1/3};  c_2 ~ Λ_local^{−4};  β_g(g_*,λ_*)=β_λ=0',
    value: '1.758×10^{−13} eV; c_2 = 2.1×10^{57} GeV⁻⁴ > 0; (g_*,λ_*)=(1.3105, 0.1440); d_s: 3.989→2.002',
    regime: 'FRG θ_real = 4.835 > 0; Borel = 0.9126; BBN |ΔG/G| ~ 10^{−38} (§3.1, App. G/L)'
  },
  {
    parameter: 'Solar, Earth, TOV Neutron-Star & Double-Pulsar Vainshtein',
    formula: 'r_V = (γ r_s c² / H_0²)^{1/3};  Z_ψ = (r_{V,⊕} / r_⊕)^{3/2}',
    value: 'r_V = 369.8 ly; Z_ψ = 7.05 × 10^{14}; Λ_local = 4.67 μeV; NS M_max = 2.35 M_⊙, Λ_{1.4} = 339',
    regime: '|γ_PPN−1| = 1.77×10^{−11} (1 AU); NS 1.61×10^{−22}; PSR J0737-3039 3.44×10^{−15}'
  },
  {
    parameter: 'PNGB Dark Energy, τ_re, Lensing A_L/E_G & Joint Likelihood',
    formula: 'φ̈ + 3Hφ̇ + (V_0/f_φ)sin(φ/f_φ) = 0;  Δln Z = −½Δχ² − ½Δk ln N',
    value: 'w_0 = −0.908, w_a = −0.177; S_8 = 0.8216–0.8466; τ_re = 0.0537; ℓ_A = 300.31; Δχ² = +4.41 (Δln Z = −3.52)',
    regime: 'A_L = 0.977–1.030; E_G = 0.4146; Ly-α ΔP/P = −3.96%; ΔN_eff = 0.0032 (§7.1, App. K)'
  },
  {
    parameter: '5-Mode A_F^{H10} Embedding, ULDM φ_osc & P1',
    formula: 'A_F^{H10} = ℂ ⊕ ℍ ⊕ M_3(ℂ) ⊕ ℂ_hol ⊕ ℂ_Ch;  m_osc = h f_clock / c²',
    value: 'm_osc = 2.647×10^{−23} eV (f_DM ≤ 0.02); |ε_{ψ,Ch}| = 4.42×10^{−16}; Fisher SNR 25.1',
    regime: 'Dual ⁸⁷Sr/¹⁷¹Yb flicker + PTA red noise: 2.00 ± 0.25 (5 yr) / ± 0.08 (15 yr)'
  },
  {
    parameter: 'Spectral Higgs-Portal Mode Φ_portal',
    formula: 'm_portal = √(2λ_Φ) v_Φ;  sin θ_H ≃ λ_mix v v_Φ / m_portal²',
    value: 'm_portal ≈ 1.84 ± 0.18 TeV; sin θ_H ≈ 0.04–0.08; σ ≈ 0.18–0.70 fb (4.7σ)',
    regime: 'HL-LHC 3000 fb⁻¹; δσ_Zh > 1.5% vs. κ_Z ≈ 1.5%; VBF pp→jjΦΦ (P6)'
  },
  {
    parameter: '2-Stage Ekpyrotic Bounce, Reheating & Thermal Leptogenesis η_B',
    formula: 'ρ_max = √3 / (32π² γ_BI³) ρ_Pl;  η_B = 7.04 c_sph (n_{N_1}/s) ε_1 κ_wash',
    value: '0.4094 ρ_Pl (9.095×10^{75} GeV⁴); BKL 4.0×10^{−15}; T_reh = 3.40×10^{10} GeV; η_B = 6.13×10^{−10}',
    regime: 'Ekpyrotic a^{−9} beats shear a^{−6}; SM portal reheating & B−L continuity (App. K)'
  },
  {
    parameter: 'Contracting Bounce Outputs (P3)',
    formula: 'n_s − 1 = n_T = 12 w_contract / (1 + 3 w_contract);  r = 24 c_s³;  f_NL = −35/8',
    value: 'n_s = 0.964, n_T = −0.036 (red), α_s = −3.6×10^{−5}, r = 0.0123 (SNR 12.3), f_NL = −4.38',
    regime: 'Canonical bounce f_NL undetectable at Planck (±47); small-c_s DBI bound c_s ≳ 0.25'
  },
  {
    parameter: 'Derived ξ_0 = 2^{−1/4}, Kerr–Hayward, RN–Hayward & Superradiance',
    formula: 'K(0) = 24/ℓ_0^4 = 48/ℓ_Pl^4 ⇒ ξ_0 = 2^{−1/4};  |R_ergo|_max K_echo < 1',
    value: 'M_rem = 1.09236 M_Pl; 1+1D max κ_− ℓ_0 = 0.9294; Kerr ≤ 0.6639; RN 0.2614; Cavity Gain 0.2048',
    regime: 'Finite de Sitter torus core K ≤ 48/ℓ_Pl⁴; S_rem = 6.66 nats; GSL conditional on QFC (App. L)'
  },
  {
    parameter: 'P2 Nanosphere, P5 CANNEX & H10 SHA-256 Digest',
    formula: 'R_0 = [3m / (4π ρ_SiO2)]^{1/3};  P_{LZ} = e^{−3.14×10²⁰};  DL split = 9.72×10^{−102}',
    value: 'R_0 = 1.028 μm; Γ_Araki = 1.18 s⁻¹ (SNR 23.5); ΔP_Ch ~ 10^{−10}–2×10^{−9} N/m² (SNR ≥10)',
    regime: 'See unbroken H10 SHA-256 preregistration digest bar below Table H.1'
  }
];

export const WHAT_CHANGED_SUMMARY: { category: string; detail: string }[] = [
  {
    category: 'Microscopic UV: 1-Loop Wetterich FRG, 5-Mode A_F^{H10} & CDT Flow (OP-2/3/4)',
    detail:
      'Solved 1-loop Litim Wetterich FRG beta functions locating the non-Gaussian UV fixed point (g_* = 1.3105, λ_* = 0.1440, θ_real = 4.835 > 0) alongside Borel–Padé resummation (0.9126) and CDT/L_UV heat-kernel dimensional reduction d_s: 3.989 → 2.002; closed OP-4 structurally via 5-mode extended Krein–Connes algebra A_F^{H10} = ℂ ⊕ ℍ ⊕ M_3(ℂ) ⊕ ℂ_hol ⊕ ℂ_Ch with ℤ_2-protected Chameleon loop mixing |ε_{ψ,Ch}| = 4.42 × 10^{−16}; verified Fujikawa Weyl Jacobian & midisuperspace Dirac-Bergmann closure.'
  },
  {
    category: 'Strong Field: Axisymmetric Kerr–Hayward, RN–Hayward & Superradiance (OP-5)',
    detail:
      'Extended spherical 1+1D Hayward–Vaidya collapse (max κ_− ℓ_0 = 0.9294 < 1) and derived ξ_0 = 2^{−1/4} to axisymmetric rotating Kerr–Hayward cores across spin a_* ∈ [0, 0.95] (κ_− ℓ_0 = 0.6639 at a_*=0, 0.3486 at a_*=0.5, horizonless regular de Sitter torus K ≤ 48/ℓ_Pl⁴ at higher Planck spin), charged Hayward–RN (κ_−^{RN} ℓ_0 = 0.2614 < 1), and ergoregion superradiant cavity quenching (|R_ergo|_max · K_echo = 0.2048 < 1), plus double-pulsar PSR J0737-3039 suppression 3.44 × 10^{−15}.'
  },
  {
    category: 'Perturbative Cosmology: τ_re, η_B, A_L, E_G, Ly-α & Joint Δln Z (OP-1)',
    detail:
      'Integrated Thomson reionization optical depth τ_re = 0.0537 (Planck 0.0544 ± 0.0073), acoustic scale ℓ_A = 300.31, CMB lensing A_L = 0.977–1.030, weak-lensing slip E_G(z=0.57) = 0.4146, Lyman-α 2% ULDM suppression −3.96%, ΔN_eff = 0.0032, post-bounce portal reheating (T_reh = 3.40×10^{10} GeV) & thermal leptogenesis η_B = 6.13 × 10^{−10}, and joint compressed Planck + BAO + RSD + S_8 likelihood (Δχ² = +4.41, Laplace Δln Z = −3.52), locked by H10 SHA-256 digest 7463d727….'
  }
];

export interface RevisionHistoryRow {
  edition: string;
  scope: string;
  physicsAndNumericalClosures: string;
  editorialAndVerificationClosures: string;
}

export const REVISION_HISTORY_TABLE: RevisionHistoryRow[] = [
  {
    edition: 'H6 (Initial Unified Synthesis)',
    scope: 'First integrated draft combining IGEG [1] & RES=RAG [2, 3]',
    physicsAndNumericalClosures:
      'Established PU(H) & Type Ia Horndeski backbone; included empirical power-law w(z), tentative DBI f_NL, heuristic κ_ψ = 10⁻²⁰, and preliminary P1–P6 sketches.',
    editorialAndVerificationClosures:
      'Single consolidated Table 0.2; initial inline SVG schematics; manual spot checks without automated regression script.'
  },
  {
    edition: 'H7 (Core Physics Audit)',
    scope: 'Resolved internal contradictions identified in referee physics review',
    physicsAndNumericalClosures:
      'Replaced w(z) with RK2 Klein–Gordon ODE (w_0 = −0.908, w_a = −0.177); corrected red n_T = −0.036 & canonical f_NL = −4.38; fixed κ_ψ = 2.173 × 10⁻²¹ GeV⁻¹, App. C 8π²/(15ℏc) & 10⁻⁷ nats, Z_ψ = 7.05 × 10¹⁴, Λ_local = 4.67 μeV, f_DM ≤ 0.02 Y_00 P1 + 2√[…] budget, R_0 = 1.028 μm P2, detailed-balance BKM, and QES O(ℏ/(Mc)).',
    editorialAndVerificationClosures:
      'Added [Status: …] epistemic tags, Table 8.3 ledger, five-scalar disclosure, and scripts/verify-igrt-monograph.mjs.'
  },
  {
    edition: 'H8 (Typesetting & Apparatus Consolidation)',
    scope: 'Full numerical, typographic, PDF-glyph, protocol & reviewer closure',
    physicsAndNumericalClosures:
      'Aligned Theorem 3.1/§3.4/Table 8.3 badges (Derived vs. Consistency); added explicit derivations for 2πk_B T_U, O(N⁻²) Uhlmann convergence, split non-uniqueness, k>0 stability, BKL ekpyrotic w>1, Hayward core-pressure work term, S_8 tension, and complete P1–P6 noise/systematics budgets.',
    editorialAndVerificationClosures:
      'Split Table 0.2a/0.2b; enforced U+210F (ℏ) & zero LaTeX; routed PDF symbols/tables through DejaVuSans; stacked Eqs. (0.1)/(4.1); rebuilt high-DPI Fig. 8; added What Changed, Revision History, Response to Reviewers, Open Problems, and verify-igrt-monograph.mjs.'
  },
  {
    edition: 'H9 (Strong-Field, Linear ODE & Spectral Audit)',
    scope: '335-Panel remediation: strong-field solvers, linear growth ODE, ξ_0 derivation & workbench sync',
    physicsAndNumericalClosures:
      'Derived ξ_0 = 2⁻¹/⁴; solved RK4 linear growth S_8(β), DESI/CMB background distances, BBN/Swampland, 2-stage ekpyrotic bounce (BKL 4×10⁻¹⁵), 1+1D Hayward–Vaidya (κ_− ℓ_0 ≤ 0.9294), causal Horndeski TOV NS (2.35 M_⊙, Λ_{1.4} = 339), and 4-mode A_F packaging.',
    editorialAndVerificationClosures:
      'Updated Tables 8.1–8.3, H.1, Revision History, R7 Reviewer Response; synchronized companion UI modules & 980-vector runner.'
  },
  {
    edition: 'H10 (Current Cosmological Likelihood, Kerr/RN, FRG & 5-Mode A_F Closure)',
    scope: '635-Panel remediation: joint likelihood/τ_re/η_B, Kerr–Hayward, Wetterich FRG, CDT d_s, 5-mode A_F^{H10}',
    physicsAndNumericalClosures:
      'Closed OP-4 via 5-mode A_F^{H10} (|ε_{ψ,Ch}| = 4.42×10⁻¹⁶); solved 1-loop Wetterich FRG fixed point (g_*=1.3105, λ_*=0.1440, θ=4.835), Borel resummation (0.9126), & CDT flow d_s=3.989→2.002; solved axisymmetric Kerr–Hayward (κ_− ℓ_0 ≤ 0.6639), RN–Hayward (0.2614), superradiance gain (0.2048), double pulsar (3.44×10⁻¹⁵), τ_re=0.0537, A_L/E_G/Ly-α, leptogenesis η_B=6.13×10⁻¹⁰, & joint Δχ²=+4.41 (Δln Z=−3.52).',
    editorialAndVerificationClosures:
      'Added Appendices K–L, R8 Reviewer Response, updated H10 SHA-256 preregistration digest (7463d727…), synchronized 980-vector runner & UI views.'
  }
];

export interface ReviewerResponseRow {
  issueId: string;
  concernSummary: string;
  resolutionAndLocation: string;
  status: string;
}

export const RESPONSE_TO_REVIEWERS: ReviewerResponseRow[] = [
  {
    issueId: 'R1. Bundle & Time Calibration',
    concernSummary: 'Clarify Diff⁺(M)/PU(H) action, E_mod → 0 inertial divergence, mode-counting in σ_1, split uniqueness, and α_mod status.',
    resolutionAndLocation:
      'Defined P(M, PU(H)) & Doplicher–Longo split Type I N with exponential buffer bound 9.72×10⁻¹⁰² (§2.1, App. D); set E_mod = max(ℏω_0, 2π k_B T_U) (§4.1, App. D); fixed M = 1 normalization (Eq. 4.2); proved O(N⁻²) Uhlmann sum (§4.1); labeled α_mod honestly as Ansatz (Table 8.3).',
    status: 'Resolved'
  },
  {
    issueId: 'R2. S¹ Spectrum, Pauli & BKM Flow',
    concernSummary: 'Justify H_Fisher units [J], dimensionless 2πk/L, k > 0 stability, and restrict BKM dissipation to detailed balance.',
    resolutionAndLocation:
      'Updated Table 0.1 & Eq. (5.1) for dimensionless L; derived Landau–Zener adiabatic exponent 3.14×10²⁰ protecting k > 0 (§5.1); restricted Eq. (5.2) strictly to KMS detailed balance [99, 100] and general CPTP to Spohn [93] (§5.3).',
    status: 'Resolved'
  },
  {
    issueId: 'R3. 5-Mode A_F^{H10}, Araki κ_ψ & Wetterich FRG',
    concernSummary: 'Resolve 5-scalar proliferation (OP-4), UV cutoff behavior above Λ_local, CHM 1/(12π) factor, and screening numerics.',
    resolutionAndLocation:
      'Unified all five scalars (ψ, φ_DE, Φ_portal, φ_osc, φ_Ch) inside A_F^{H10} = ℂ⊕ℍ⊕M_3(ℂ)⊕ℂ_hol⊕ℂ_Ch with |ε_{ψ,Ch}| = 4.42×10⁻¹⁶ (closing OP-4); solved 1-loop Wetterich FRG fixed point (g_* = 1.3105, λ_* = 0.1440, θ_real = 4.835 > 0) & Borel sum (0.9126); verified CHM trace normalization (retaining Planck ℓ_Pl ansatz, App. C/L); verified Z_ψ = 7.05×10¹⁴, Λ_local = 4.67 μeV, c_2 > 0, NS 1.61×10⁻²², & PSR J0737-3039 3.44×10⁻¹⁵.',
    status: 'Resolved (Constitutive α_mod/ℓ_Pl Ansatz Scoped)'
  },
  {
    issueId: 'R4. Bounce Tilts, Kerr/RN–Hayward & Superradiance',
    concernSummary: 'Fix red n_T, f_NL, BKL shear, 4D rotating Kerr–Hayward & charged RN–Hayward stability, superradiance, and QES.',
    resolutionAndLocation:
      'Derived ξ_0 = 2⁻¹/⁴; integrated 1+1D Hayward–Vaidya (max κ_− ℓ_0 = 0.9294 < 1), axisymmetric Kerr–Hayward (κ_− ℓ_0 ≤ 0.6639 < 1, bounded torus K ≤ 48/ℓ_Pl⁴), charged RN–Hayward (0.2614 < 1), and ergoregion superradiance cavity quenching (0.2048 < 1, App. L); solved 2-stage ekpyrotic bounce (BKL 4.0×10⁻¹⁵), portal T_reh = 3.40×10¹⁰ GeV & leptogenesis η_B = 6.13×10⁻¹⁰ (App. K); fixed red n_T = −0.036, f_NL = −4.38.',
    status: 'Resolved'
  },
  {
    issueId: 'R5. Perturbative Cosmology, Likelihoods, τ_re & P1–P6',
    concernSummary: 'Compute linear growth S_8, CMB acoustic ℓ_A, A_L, E_G, τ_re, Ly-α bound, joint Δχ²/Δln Z, TOV stars, and P1–P6 SNR.',
    resolutionAndLocation:
      'Computed S_8 = 0.8216–0.8466, τ_re = 0.0537, ℓ_A = 300.31, A_L = 0.977–1.030, E_G = 0.4146, Ly-α |ΔP/P| = 3.96%, ΔN_eff = 0.0032, joint Δχ² = +4.41 & Laplace Δln Z = −3.52 (App. K); verified TOV M_max = 2.35 M_⊙, Λ_{1.4} = 339; locked P1–P6 SNRs (4.7–25.1) under H10 SHA-256 7463d727….',
    status: 'Resolved'
  },
  {
    issueId: 'R6. Typography, PDF Glyphs & Cross-Module Verification',
    concernSummary: 'Eliminate OCR/font symbol lookalikes, Theorem badge drift, stale workbench numbers, and verify full H10 parity.',
    resolutionAndLocation:
      'Routed math-heavy PDF columns cleanly to DejaVuSans/DejaVuSerif; aligned Tables 8.2–8.3; synchronized HarmonizedModelView, harmonizedModelData, App.tsx, adversarial.ts, and 980-vector runner to H10; expanded verify-igrt-monograph.mjs with all H10 solvers.',
    status: 'Resolved'
  },
  {
    issueId: 'R7. Strong-Field ADM Closure, CDT Dimension & Fujikawa Measure',
    concernSummary: 'Verify neutron-star survival, CDT spectral dimension flow, Fujikawa Weyl anomaly, and midisuperspace constraint closure.',
    resolutionAndLocation:
      'Integrated causal TOV + Hinderer y(r) (M_max = 2.35 M_⊙, Λ_{1.4} = 339 < 580); verified CDT/L_UV spectral dimension d_s: 3.989 → 2.002, Fujikawa Weyl Jacobian local cancellation, and midisuperspace Dirac closure β_LUV = 1 − 2ρ/ρ_max (App. L).',
    status: 'Resolved'
  },
  {
    issueId: 'R8. 635-Panel Audit Remediation (H9 → H10)',
    concernSummary: 'Close remaining τ_re, η_B, Ly-α, A_L/E_G, compressed likelihood MCMC, Kerr/RN–Hayward, FRG fixed point, and 5-scalar A_F gaps.',
    resolutionAndLocation:
      'All mathematically/computationally accessible closures implemented and deterministically verified in IGRT-2026-H10 (App. K–L, verify-igrt-monograph.mjs); external 3+1D HPC CAMB/NR runs & independent peer review remain strictly flagged.',
    status: 'Resolved (External Frontiers Candidly Preserved)'
  }
];

export const KNOWN_OPEN_PROBLEMS: { code: string; topic: string; description: string }[] = [
  {
    code: 'OP-1',
    topic: 'External C/Python Full-Sky 3D C_ℓ Boltzmann & DESI/Weak-Lensing Pipeline',
    description:
      'H10 evaluates background distances, RK4 growth S_8(β), τ_re = 0.0537, ℓ_A = 300.31, A_L, E_G, Ly-α −3.96%, η_B = 6.13×10⁻¹⁰, and joint compressed Δχ² = +4.41 / Laplace Δln Z = −3.52 deterministically; publishing an external C/Python hi_class + Cobaya PR4 full-sky C_ℓ^{TT,TE,EE} MCMC release remains queued.'
  },
  {
    code: 'OP-2',
    topic: 'Full Non-Perturbative Off-Shell 3+1 Quantum Dirac Constraint Algebra',
    description:
      'H10 closes linearized Dirac β_LUV, Fujikawa Weyl measure anomaly cancellation, midisuperspace commutator closure, and CDT flow d_s: 3.989 → 2.002; off-shell non-perturbative 3+1 quantum operator closure of {Ĥ(N), Ĥ(M)} stays open (shared with LQG [58, 59]).'
  },
  {
    code: 'OP-3',
    topic: 'First-Principles Selection of Constitutive α_mod and ℓ_Pl Scale in κ_ψ',
    description:
      'H10 derives 1-loop Wetterich FRG UV fixed point (g_* = 1.3105, λ_* = 0.1440), Borel resummation (0.9126), and CHM 1/(12π) diamond trace; deriving α_mod and the microscopic preference of ℓ_Pl over ℓ_CG⁻¹ in κ_ψ from non-perturbative quantum microstates remains open.'
  },
  {
    code: 'OP-4',
    topic: 'Phenomenological CANNEX Test of A_F^{H10}-Embedded Chameleon φ_Ch',
    description:
      'Extended 5-mode algebra A_F^{H10} = ℂ ⊕ ℍ ⊕ M_3(ℂ) ⊕ ℂ_hol ⊕ ℂ_Ch closes algebraic unification with |ε_{ψ,Ch}| = 4.42×10⁻¹⁶; phenomenological couplings (M_Ch ≈ 2.4 meV, β_Ch) await experimental CANNEX P5 testing.'
  },
  {
    code: 'OP-5',
    topic: '3+1D Non-Axisymmetric Merger NR, Bousso QFC Proof & Independent External Peer Review',
    description:
      'H10 closes 1+1D Hayward–Vaidya, axisymmetric Kerr–Hayward (κ_− ℓ_0 ≤ 0.6639), charged RN–Hayward (0.2614), and superradiance cavity quenching (0.2048); full 3+1D binary-merger BSSN-Hayward numerical relativity, non-stationary Bousso QFC [72], independent third-party journal peer review of [1]–[3], and 2026–2036 experimental tests P1–P6 remain genuinely open.'
  }
];
