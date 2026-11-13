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
    'Infrared gravity is governed by the luminal Type Ia Horndeski Cubic Galileon action (G_{4,X} = 0, G_5 = 0, c_GW = c identically) [Axiom] with braiding scale Λ_3 = (M̄_Pl H_0²)^{1/3} ≈ 1.76 × 10^{−13} eV (solar Vainshtein radius r_V ≈ 370 ly, derived |γ_PPN − 1| ≈ 1.77 × 10^{−11} at 1 AU; terrestrial r_{V,⊕} ≈ 5.33 ly, Z_ψ ≈ 7.05 × 10^{14}, dressed cutoff Λ_local ≈ 4.67 μeV), verified via all-orders Jordan–Einstein Bianchi consistency [Consistency]. Polar decomposition separates the non-negative Araki diamond modulus ψ ≥ 0 (diamond integral ΔK_V = (8π² r⁴/(15ℏc)) Δ⟨T_00⟩ and Planck-normalized ansatz κ_ψ = ℏc ℓ_Pl/(12π) ≈ 2.173 × 10^{−21} GeV⁻¹) [Ansatz] from a numerically integrated thawing dark-energy phase φ_DE (m_DE ≈ 1.30 H_0 ≈ 1.94 × 10^{−33} eV, Klein–Gordon w_0 ≈ −0.908, w_a ≈ −0.177) [Derived], an underdamped ultralight scalar input φ_osc (m_osc ≈ 2.65 × 10^{−23} eV, sub-dominant f_DM ≤ 0.02 yielding isotropic monopole PTA modulation) [Input], a 1.84 TeV Higgs-portal scalar Φ_portal [Input], and a separate 2.4 meV Chameleon φ_Ch for short-range CANNEX metrology [Ansatz]. An explicit UV limiting-curvature sector L_UV yields a non-singular bounce (ρ_max ≈ 0.4094 ρ_Pl = 2.110 × 10^{96} kg m^{−3} = 9.095 × 10^{75} GeV⁴; tuned input w_contract = −0.003 giving n_s ≈ 0.964, red n_T ≈ −0.036, r = 24 c_s³ ≈ 0.0123, canonical f_NL^{eq} = −4.38) and Hayward cores with 1D QES island extremization r_I = r_+ − O(ℓ_Pl²/r_+) = r_+ − O(ℏ/(Mc)), bounding remnant entropy S_rem ≈ 6.66 nats under QFC-conditional GSL.'
  ]
};

export const SCOPE_AND_NON_CLAIMS: { title: string; detail: string }[] = [
  {
    title: '1. Bundle Architecture, Hilbert Space & Global Hyperbolicity Scope',
    detail:
      'Macroscopic spacetime is a smooth 4D Lorentzian manifold (M, g_μν) of signature (−,+,+,+), globally hyperbolic on domains of outer communication and across physical collapsing/evaporating black-hole regions truncated dynamically prior to analytical inner Cauchy extension (§6.3). Quantum frames form a topologically trivial principal bundle P(M, PU(H)) (Dixmier–Douady class δ(P) = 0 ∈ H³(M, ℤ)) over separable clock Hilbert space H = L²(S¹, dμ) ⊗ H_matter, with associated state bundle E_stat = P ×_{PU(H)} S(N) defined on split-included Type I detector factors N ⊂ A(O_ext) where normal density matrices and trace operations exist.'
  },
  {
    title: '2. Epistemic Rigor: Established Results vs. Derivations vs. Phenomenological Ansätze',
    detail:
      'External mathematical theorems (Morozova–Chentsov–Petz [15, 16], Šafránek rank-change discontinuity [92], Araki–Klein positivity [34], Spohn [93] & Carlen–Maas detailed-balance BKM flow [99, 100], Bisognano–Wichmann [48]) are labeled strictly as Established Results with exact theorem references. Novel IGRT calculations are classified cleanly as Derived, Consistency, Ansatz (such as α_mod calibration, Planck-normalized κ_ψ, and ξ_0 = 2^{−1/4}), or Input (such as w_contract = −0.003, m_osc = 2.65 × 10^{−23} eV, and K_echo = 0.18). Full itemization appears inline across subsections and in Table 8.3.'
  },
  {
    title: '3. Scalar Proliferation & Decoupled vs. Unified Sectors (Five-Scalar Candor)',
    detail:
      'We state transparently that full phenomenological coverage involves five scalar excitations across distinct scales: (i) the Horndeski-coupled Araki modulus ψ ≥ 0, (ii) the shift-symmetric thawing PNGB phase φ_DE (m_DE ~ 10^{−33} eV), (iii) the input oscillating holonomy mode φ_osc (2.65 × 10^{−23} eV), (iv) the heavy spectral Higgs-portal Φ_portal (1.84 TeV), and (v) an independent short-range Chameleon φ_Ch (M_Ch ≈ 2.4 meV) necessitated because Z_ψ-dressed Galileons cannot unscreen at sub-mm scales. While (i)–(iv) are packaged within an extended spectral/polar multiplet, φ_osc and φ_Ch are phenomenologically motivated additions whose independent couplings weaken naive single-field unification claims.'
  },
  {
    title: '4. Effective Field Theory Cutoffs, Screening & Reproducibility',
    detail:
      'Horndeski braiding scale Λ_3 = (M̄_Pl H_0²)^{1/3} ≈ 1.758 × 10^{−13} eV (spanning 1.714–1.808 × 10^{−13} eV for H_0 ∈ [67.4, 73.0] km s⁻¹ Mpc⁻¹) undergoes terrestrial kinetic renormalization Z_ψ(r_⊕) ≈ 7.05 × 10^{14} inside Earth’s 5.33 ly Vainshtein radius, raising the local cubic-Galileon cutoff to Λ_local = Z_ψ^{1/2} Λ_3 ≈ 4.67 μeV (4.2 cm). All numerical and dimensional entries in Tables 0.2a–b and H.1, the Klein–Gordon thawing ODE, QES island extremization, and qubit Uhlmann convergence are verified by scripts/verify-igrt-monograph.mjs.'
  },
  {
    title: '5. Proposed Split Architecture & Peer-Review Roadmap',
    detail:
      'Although unified here for complete cross-reference, the monograph separates cleanly into (I) a Mathematical Foundations paper (Chapters 2, 4, 5 & Appendices A–D: PU(H) bundle geometry, Jacobi–Finsler ansatz, unbounded S¹ clock Hamiltonian, and detailed-balance BKM flow) and (II) a Cosmology & Phenomenology paper (Chapters 3, 6, 7 & Appendices E–H: Type Ia Horndeski screening, explicit L_UV bounce, Hayward/QES evolution, and Protocols P1–P6). Independent Boltzmann (CAMB/hi_class + Cobaya) likelihood fits and peer review are required prior to archival validation.'
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
    collisionNote: 'H_Fisher = −i E_mod σ_1 (∂_s − i A_Berry) on dimensionless Bures circle S¹ (dimensionless s, circumference L ⇒ 2πk/L − Φ_Berry/L ∈ [1]) has discrete UNBOUNDED eigenvalues = E_mod σ_1 (2πk/L − Φ_Berry/L), k ∈ ℤ',
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
    name: 'Matter-bounce primordial indices: tuned n_s ≈ 0.964, shared red n_T ≈ −0.036, r = 24c_s³ ≈ 0.012, f_NL^{eq} = −4.38',
    units: 'Dimensionless CMB perturbation parameters',
    collisionNote: 'Fixes n_T contradiction (red, NOT blue); separates canonical matter-bounce −35/8 from DBI 1/c_s² formula',
    firstDefined: '§6.2, §7.3 (P3)'
  },
  {
    symbol: 'r_V, r_{V,⊕}, ℓ_0, S_rem',
    name: 'Solar/Earth Vainshtein radii (370 ly / 5.33 ly), free Hayward length ℓ_0 = ξ_0 ℓ_Pl, QES entropy S_rem',
    units: 'r_V in ly; ℓ_0 in m; S_rem in nats',
    collisionNote: 'ξ_0 = 2^{−1/4} is an illustrative ansatz giving S_rem = 3π/√2 ≈ 6.66 nats; QES island r_+ − O(ℏ/(Mc))',
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
  { number: 'Table 0.3', title: 'Equation Index (0.1)–(8.1) and Appendices with Calibrated Status', location: 'Summary & Indices' },
  { number: 'Table 1.1', title: 'Foundational Postulates of IGRT (Postulates I–VII)', location: '§1.4' },
  { number: 'Table 7.1', title: 'Observable Falsification Protocols (P1–P6) & Parameter Closures', location: '§7.3' },
  { number: 'Table 8.1', title: 'Comparison of IGRT With String Theory & Six Quantum-Gravity Approaches', location: '§8.1' },
  { number: 'Table 8.2', title: 'Summary of Core Formal Results & Theorem Citations', location: '§8.1' },
  { number: 'Table 8.3', title: 'Epistemic Claim, Status, Quantitative Evidence & Evasion Parameters Ledger', location: '§8.1' },
  { number: 'Table H.1', title: 'Reproducible Numerical & Parameter Register (H_0 = 67.4–73.0)', location: 'Appendix H' }
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
    expression: 'Z_ψ = (r_{V,⊕}/r_⊕)^{3/2};  Λ_3 = (M̄_Pl H_0²)^{1/3};  Λ_local = Z_ψ^{1/2} Λ_3',
    siUnits: 'Z_ψ [1] (7.05×10^{14}); Λ_3 = 1.758×10^{−13} eV; Λ_local = 4.67 μeV',
    naturalUnits: 'Z_ψ [1]; Λ_3, Λ_local [eV]',
    auditNote: 'Natural-unit [M̄_Pl H_0²]^{1/3} = [GeV · GeV²]^{1/3} = GeV; dressed terrestrial Galileon cutoff Λ_local = Z_ψ^{1/2} Λ_3 (4.2 cm).'
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
    expression: 'f(r) = 1 − r_s r²/(r³ + r_s ℓ_0²);  K(0)=24/ℓ_0⁴;  r_I = r_+ − O(ℏ/(Mc))',
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
  { label: '(6.3)', title: 'Frolov–Hayward Lapse, Free ℓ_0 = ξ_0 ℓ_Pl & QES Island Remnant', section: '§6.3–6.4', status: 'Ansatz' },
  { label: '(7.1)', title: 'Klein–Gordon Thawing w(z) & Input Holonomy Mode φ_osc Monopole Lock', section: '§7.1–7.2', status: 'Input' },
  { label: '(8.1)', title: 'Semiclassical EFT Saddle & Covariant Stress Conservation Check', section: '§8.3', status: 'Consistency' },
  { label: '(A.1)', title: 'Explicit Cubic-Galileon & Conformal Jordan–Einstein Bianchi Check', section: 'Appendix A', status: 'Consistency' },
  { label: '(B.1)', title: 'Petz Thm 6 SLD Formula & Šafránek Rank-Change Discontinuity', section: 'Appendix B', status: 'Established' },
  { label: '(C.1)', title: 'Corrected Diamond 8π²/(15ℏc) Integrand & κ_ψ = 2.173 × 10^{−21} GeV⁻¹', section: 'Appendix C', status: 'Ansatz' },
  { label: '(D.1)', title: 'Split-Included Type I Factor, Nuclearity & Inertial Gap E_mod', section: 'Appendix D', status: 'Derived' },
  { label: '(E.1)', title: 'Explicit L_UV Bounce, Hayward QES O(ℏ/(Mc)) Extremization & Conditional GSL', section: 'Appendix E', status: 'Derived' },
  { label: '(F.1)', title: 'Dual-Clock Flicker/Drift & Monopole PTA σ_r = 2√[…] Budget', section: 'Appendix F', status: 'Derived' },
  { label: '(G.1)', title: 'CODATA 2022 Constants, H_0 Propagation & ρ_max in GeV⁴', section: 'Appendix G', status: 'Established' },
  { label: '(H.1)', title: 'Reproducible Numerical Closures Verified by Monograph Script', section: 'Appendix H', status: 'Derived' }
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
    keyMechanism: 'P(M, PU(H)) + E_stat(N) + Araki ψ² + Horndeski (Λ_3) + L_UV',
    preserves4DLorentzian: 'Yes on outer & pre-Cauchy physical domains',
    wdwUnfreezing: 'Unbounded S¹ clock H_Fisher via Born–Oppenheimer τ_FR',
    singularityStatus: 'L_UV FLRW bounce + empirical Hayward core (free ℓ_0)',
    openLimitations: 'Five scalar sectors; α_mod, κ_ψ, w_contract, m_osc are ansätze or inputs; CAMB/Cobaya fit open.'
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
    evidenceAndDerivation: 'Trivial δ(P)=0 bundle over M; associated E_stat on Type I split factor N (§2.1, App. D).',
    evasionOrFreeParameter: 'Non-trivial δ(P) ≠ 0 topologies omitted; requires split nuclearity.'
  },
  {
    claim: 'Unbounded S¹ Fisher Hamiltonian H_Fisher evades Pauli theorem',
    status: 'Derived',
    evidenceAndDerivation: '−i E_mod σ_1 (∂_s − i A_Berry) has spectrum E_mod σ_1 (2πk/L), k ∈ ℤ (§5.1).',
    evasionOrFreeParameter: 'Negative-frequency Dirac sea requires Born–Oppenheimer positive-branch projection.'
  },
  {
    claim: 'Master Synchronization Identity Eq. (4.1) & α_mod',
    status: 'Ansatz',
    evidenceAndDerivation: 'Jacobi–Finsler null constraint + α_mod = ℏ/(E_mod σ_1) postulate; qubit Uhlmann sum verified to 2×10^{−8} (§4.1).',
    evasionOrFreeParameter: 'Calibration scale E_mod = ℏω_0 (when a=0) is a constitutive choice, not derived from GR+QM.'
  },
  {
    claim: 'Detailed-balance BKM entropy dissipation Eq. (5.2)',
    status: 'Established',
    evidenceAndDerivation: 'Carlen–Maas [99] & Wirth–Zhang [100] + Spohn [93] on KMS-symmetric semigroups with g̃_ij^BKM = τ_rel g_ij^BKM (§5.3).',
    evasionOrFreeParameter: 'Fails as equality for non-detailed-balance CPTP channels (which obey Spohn inequality only).'
  },
  {
    claim: 'Araki diamond ΔK_V = 8π²r⁴/(15ℏc) Δ⟨T_00⟩ & κ_ψ Ansatz',
    status: 'Ansatz',
    evidenceAndDerivation: 'Matter diamond A(V(ℓ_CG)) gives ψ_vac = 0, S_Araki ~ O((ΔK_V)²) ≈ 2.6×10^{−7} nats at 1 μm/300K, κ_ψ = 2.173×10^{−21} GeV⁻¹ (§3.2, App. C).',
    evasionOrFreeParameter: 'Free coarse scale ℓ_CG; Planck ℓ_Pl chosen over ℓ_CG⁻¹; state-functional ψ vs. Galileon tension noted.'
  },
  {
    claim: 'Horndeski Type Ia screening & PPN power law (Thm 3.1)',
    status: 'Derived',
    evidenceAndDerivation: 'Pure Type Ia (G_{4,X}=0, c_GW=c): r_V = 369.8 ly, r_{V,⊕} = 5.33 ly, dψ/dr ∝ (r/r_V)^{3/2}, Z_ψ = 7.05×10^{14}, Λ_local = 4.67 μeV, |γ_PPN−1| = 1.77×10^{−11} (1 AU).',
    evasionOrFreeParameter: 'Free β ~ O(1) & γ ≈ 0.83; Λ_local = 4.67 μeV constrains unscreened halos/LLR.'
  },
  {
    claim: 'All-orders Jordan–Einstein Bianchi identity (App. A)',
    status: 'Consistency',
    evidenceAndDerivation: 'Exact Noether cancellation ∇^μ(T_μν + I_μν) ≡ 0 verified to all orders in Ω(ψ)=exp(βψ/M_Pl) including cubic-Galileon [∇_μ,∇_ν]∇^μ ψ commutators.',
    evasionOrFreeParameter: 'Classical/semiclassical Noether identity; non-perturbative inhomogeneous 3+1 quantum constraint algebra open.'
  },
  {
    claim: 'Klein–Gordon PNGB thawing dark energy w(z)',
    status: 'Derived',
    evidenceAndDerivation: 'Numerical ODE at θ_i = 1.95, f_φ = M̄_Pl gives m_DE ≈ 1.30 H_0, w_0 = −0.908, w_a = −0.177, early 1+w ∝ (1+z)^{−3} (§7.1).',
    evasionOrFreeParameter: 'θ_i ∈ [1.75, 2.35]; falsified by P3 if DESI phantom crossing w_a < −0.4 persists >3σ.'
  },
  {
    claim: 'L_UV bounce & primordial n_s, red n_T, r, canonical f_NL',
    status: 'Input',
    evidenceAndDerivation: 'Explicit L_UV gives ρ_max = 0.4094 ρ_Pl = 9.095×10^{75} GeV⁴; n_s = 0.964, n_T = −0.036, r = 24c_s³ = 0.0123, f_NL = −4.38 (§6.1–6.2).',
    evasionOrFreeParameter: 'Tuned w_contract = −0.003; f_NL = −4.38 undetectable against Planck ±47; small-c_s DBI formula excluded unless c_s ≳ 0.25.'
  },
  {
    claim: 'Hayward core, QES O(ℏ/(Mc)) island & conditional GSL',
    status: 'Ansatz',
    evidenceAndDerivation: 'Explicit QES r_I = r_+ − (c_bulk ℓ_Pl²)/(12πr_+) = r_+ − O(ℏ/(Mc)); S_rem = 3π/√2 ≈ 6.66 nats (ξ_0 = 2^{−1/4}); QFC-conditional GSL (§6.3–6.4, App. E).',
    evasionOrFreeParameter: 'Free core scale ℓ_0 = ξ_0 ℓ_Pl; eternal mass-inflation dynamical PDE & Carballo-Rubio first-law work term noted.'
  },
  {
    claim: 'P1: Dual-clock + IPTA monopole 2:1 ULDM lock',
    status: 'Input',
    evidenceAndDerivation: 'Input m_osc = 2.65×10^{−23} eV, f_DM ≤ 0.02 (λ_dB = 2.07 kpc); isotropic Y_{00} monopole; exact σ_r = 2√[…] = 0.25 (5 yr) / 0.08 (15 yr) (§7.2, App. F).',
    evasionOrFreeParameter: 'Free coupling Δβ_eff & f_DM can evade; signal is generic to any quadratic ULDM, not uniquely IGRT.'
  },
  {
    claim: 'P2, P4, P5, P6 empirical thresholds',
    status: 'Ansatz',
    evidenceAndDerivation: 'P2: R_0 = 1.028 μm SiO₂ (Γ_Araki = 1.18 s⁻¹ at Δx = 180 nm); P4: K_echo = 0.18; P5: CANNEX M_Ch = 2.4 meV; P6: Φ_portal (1.84 TeV).',
    evasionOrFreeParameter: 'Free κ_0 benchmark (P2), |R_eff| (P4), β_Ch (P5), and sin θ_H ≪ 0.02, |λ_mix| ≪ 0.25 (P6) control exclusion.'
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
        'Validation (Klein–Gordon ODE integration, dual-clock flicker/red-noise Cramér–Rao P1, R_0 = 1.028 μm P2 calculation, CANNEX P5 bounds, HL-LHC mixing/portal bounds, automated verification script), Visualization & Research Integrity.'
    }
  ],
  conflictsOfInterest:
    'The authors declare no commercial or financial competing interests. Citations [1], [2], and [3] reference non-peer-reviewed author-origin preprints/monographs by M. D. Bulaqueña and J.-C. Tassan from which the unified IGRT synthesis is developed.',
  fundingStatement:
    'This theoretical research was conducted independently without external commercial sponsorship.',
  dataAndCodeAvailability:
    'All analytic derivations and numerical simulations (including all 20 dimensional checks, Appendix C thermal diamond check, Appendix E QES extremization, Appendix F error propagation, Klein–Gordon ODE solver, qubit Uhlmann convergence, CODATA 2022 + H_0 propagation, and silica nanosphere DP integration) are reproduced directly by scripts/verify-igrt-monograph.mjs included in the application repository.'
};

export interface ParameterClosureRow {
  parameter: string;
  formula: string;
  value: string;
  regime: string;
}

export const TABLE_H1_CLOSURES: ParameterClosureRow[] = [
  {
    parameter: 'Araki Scale Constant κ_ψ',
    formula: 'κ_ψ = ℏ c ℓ_Pl / (12π)  (Planck length ansatz)',
    value: '1.355 × 10^{−62} J·m² (2.173 × 10^{−21} GeV⁻¹)',
    regime: 'Matter diamond ΔK_V = 8π²r⁴/(15ℏc) Δ⟨T_00⟩; ψ_vac = 0 (§3.2, App. C)'
  },
  {
    parameter: 'Horndeski Braiding Scale Λ_3 (H_0 Spread)',
    formula: 'Λ_3 = (M̄_Pl H_0²)^{1/3}',
    value: '1.758 × 10^{−13} eV [1.714–1.808] (Λ_3⁻¹ = 1122.7 km at H_0=70)',
    regime: 'Propagated across H_0 ∈ [67.4, 73.0] km/s/Mpc (§3.1, App. G)'
  },
  {
    parameter: 'Solar & Terrestrial Screening (γ = 0.83)',
    formula: 'r_V = (γ r_s c² / H_0²)^{1/3};  Z_ψ = (r_{V,⊕} / r_⊕)^{3/2}',
    value: 'r_V = 369.8 ly; r_{V,⊕} = 5.33 ly; Z_ψ = 7.05 × 10^{14}; Λ_local = 4.67 μeV',
    regime: '|γ_PPN−1| = 1.77×10^{−11} (1 AU), 2.91×10^{−9} (30 AU); dψ/dr ∝ (r/r_V)^{3/2}'
  },
  {
    parameter: 'Klein–Gordon PNGB Dark Energy φ_DE',
    formula: 'φ̈ + 3Hφ̇ + (V_0 / f_φ) sin(φ / f_φ) = 0  (θ_i = 1.95 rad)',
    value: 'm_DE = 1.297 H_0 ≈ 1.94 × 10^{−33} eV; w_0 = −0.908, w_a = −0.177',
    regime: 'Range θ_i ∈ [1.75, 2.35]: w_0 ∈ [−0.968, −0.850]; early 1+w ∝ (1+z)^{−3} (§7.1)'
  },
  {
    parameter: 'Input Holonomy ULDM φ_osc & P1',
    formula: 'm_osc = h f_clock / c²;  σ_r = 2 √[(σ_{f,PTA}/f_PTA)² + (σ_{f,clock}/f_clock)²]',
    value: 'm_osc = 2.647 × 10^{−23} eV (λ_dB = 2.07 kpc); f_DM ≤ 0.02; Y_{00} monopole',
    regime: 'Dual ⁸⁷Sr/¹⁷¹Yb flicker + PTA red noise: 2.00 ± 0.25 (5 yr) / ± 0.08 (15 yr)'
  },
  {
    parameter: 'Spectral Higgs-Portal Mode Φ_portal',
    formula: 'm_portal = √(2λ_Φ) v_Φ;  sin θ_H ≃ λ_mix v v_Φ / m_portal²',
    value: 'm_portal ≈ 1.84 ± 0.18 TeV; sin θ_H ≈ 0.04–0.08; σ ≈ 0.18–0.70 fb',
    regime: 'HL-LHC 3000 fb⁻¹; δσ_Zh > 1.5% vs. κ_Z ≈ 1.5%; VBF pp→jjΦΦ (P6)'
  },
  {
    parameter: 'L_UV Bounce Density ρ_max & Planck ρ_Pl',
    formula: 'ρ_max = √3 / (32π² γ_BI³) ρ_Pl  (γ_BI = 0.2375)',
    value: '0.4094 ρ_Pl = 2.110 × 10^{96} kg m^{−3} = 9.095 × 10^{75} GeV⁴',
    regime: 'ρ_Pl = 5.155 × 10^{96} kg m^{−3} = 2.222 × 10^{76} GeV⁴ (§6.1, App. E)'
  },
  {
    parameter: 'Contracting Bounce Outputs (P3)',
    formula: 'n_s − 1 = n_T = 12 w_contract / (1 + 3 w_contract);  r = 24 c_s³;  f_NL = −35/8',
    value: 'n_s = 0.964 (input w_contract=−0.003), n_T = −0.036 (red), r = 0.0123, f_NL = −4.38',
    regime: 'Canonical bounce f_NL undetectable at Planck (±47); small-c_s DBI bound c_s ≳ 0.25'
  },
  {
    parameter: 'Hayward Core Scale ℓ_0, QES & Echoes',
    formula: 'ℓ_0 = ξ_0 ℓ_Pl (free);  r_I = r_+ − O(ℏ/(Mc));  Δt_echo = (2r_s/c) ln(r_s/ℓ_0)',
    value: 'ξ_0 = 2^{−1/4} ansatz ⇒ M_rem = 2.38 × 10^{−8} kg, S_rem = 6.66 nats; 17.8 / 109.2 ms',
    regime: 'K_echo = |R_eff| ≈ 0.18 input; QES island extremized; GSL conditional on QFC'
  },
  {
    parameter: 'P2 Nanosphere & P5 CANNEX Metrology',
    formula: 'R_0 = [3m / (4π ρ_SiO2)]^{1/3};  η_Araki = κ_ψ / κ_0 = 4/3;  ΔP_Ch (M_Ch = 2.4 meV)',
    value: 'R_0 = 1.028 μm (10^{−14} kg); Γ_Araki = 1.18 s⁻¹ (Δx = 180 nm); ΔP_Ch ~ 10^{−10}–2×10^{−9} N/m²',
    regime: 'P2 roadmap 4 orders beyond current records; P5 exceeds CANNEX ~10^{−11} N/m² noise'
  }
];

export const WHAT_CHANGED_SUMMARY: { category: string; detail: string }[] = [
  {
    category: 'Foundations, Clock Algebra & BKM Flow',
    detail:
      'Defined principal PU(H) + split Type I associated bundle E_stat(N) explicitly noting split non-uniqueness; proved O(N⁻²) Uhlmann–Frobenius convergence; justified E_mod = max(ℏω_0, 2π k_B T_U) = max(ℏω_0, ℏa/c); clarified unbounded S¹ spectrum 2πk/L [1] in H_Fisher [J] and k > 0 adiabatic stability; restricted BKM dissipation strictly to KMS detailed-balance semigroups.'
  },
  {
    category: 'Horndeski, Araki Modulus & Singularity Closures',
    detail:
      'Aligned Theorem 3.1 / §3.4 / Table 8.2/8.3 screening status (Derived) vs. Bianchi check (Consistency); fixed κ_ψ = 2.173 × 10⁻²¹ GeV⁻¹, ΔK_V = 8π²r⁴/(15ℏc), S_Araki ≈ 2.6 × 10⁻⁷ nats, Z_ψ = 7.05 × 10¹⁴, Λ_local = 4.67 μeV, ρ_max = √3/(32π²γ_BI³) ρ_Pl = 2.110 × 10⁹⁶ kg/m³ = 9.095 × 10⁷⁵ GeV⁴, canonical f_NL^eq = −35/8 = −4.38, shared red n_T = −0.036, and QES O(ℏ/(Mc)).'
  },
  {
    category: 'Numerical Cosmology, Protocols P1–P6 & Publishing Apparatus',
    detail:
      'Integrated numerical Klein–Gordon thawing ODE (w_0 = −0.908, w_a = −0.177) + S_8 comparison; added complete step-by-step P1–P6 budgets (flicker, drift, GP/look-elsewhere/sky-scrambles, Donadi et al. R_0 = 1.028 μm, LiteBIRD σ(r) = 0.001, 3G echoes, CANNEX floor, HL-LHC κ_Z); split Table 0.2a/0.2b; rebuilt Figure 8 at high DPI; added Revision History, Response to Reviewers, Open Problems, and downloadable verify-igrt-monograph.mjs.'
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
    edition: 'H8 (Current Harmonized Monograph)',
    scope: 'Full numerical, typographic, PDF-glyph, protocol & reviewer closure',
    physicsAndNumericalClosures:
      'Aligned Theorem 3.1/§3.4/Table 8.3 badges (Derived vs. Consistency); added explicit derivations for 2πk_B T_U, O(N⁻²) Uhlmann convergence, split non-uniqueness, k>0 stability, BKL ekpyrotic w>1, Hayward core-pressure work term, S_8 tension, and complete P1–P6 noise/systematics budgets.',
    editorialAndVerificationClosures:
      'Split Table 0.2a/0.2b; enforced U+210F (ℏ) & zero LaTeX; routed PDF symbols/tables through DejaVuSans; stacked Eqs. (0.1)/(4.1); rebuilt high-DPI Fig. 8; added What Changed, Revision History, Response to Reviewers, Open Problems, and downloadable verify-igrt-monograph.mjs with 100+ source assertions.'
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
      'Defined P(M, PU(H)) & non-unique Doplicher–Longo split Type I N (§2.1, App. D); set E_mod = max(ℏω_0, 2π k_B T_U) explicitly canceling 2π via Unruh T_U (§4.1, App. D); fixed M = 1 mode normalization (Eq. 4.2); proved O(N⁻²) Uhlmann sum (§4.1); labeled Eq. (4.1) & α_mod explicitly as Ansatz (Table 8.3).',
    status: 'Resolved'
  },
  {
    issueId: 'R2. S¹ Spectrum, Pauli & BKM Flow',
    concernSummary: 'Justify H_Fisher units [J], dimensionless 2πk/L, k > 0 stability, and restrict BKM dissipation to detailed balance.',
    resolutionAndLocation:
      'Updated Table 0.1 & Eq. (5.1) noting dimensionless S¹ coordinate L so (2πk/L − Φ_Berry/L) ∈ [1] and H_Fisher ∈ [J]; explained adiabatic k > 0 stability & open nonlinear problem (§5.1, App. I); restricted Eq. (5.2) with τ_rel g_ij^BKM strictly to KMS detailed balance [99, 100] and general CPTP to Spohn [93] (§5.3).',
    status: 'Resolved'
  },
  {
    issueId: 'R3. Scalar Hierarchy, Araki κ_ψ & Screening',
    concernSummary: 'Resolve ψ ≥ 0 vs. shift symmetry, state-functional vs. Galileon tension, App. C 2π/κ_ψ factors, and Z_ψ / Λ_local numerics.',
    resolutionAndLocation:
      'Separated non-negative Horndeski modulus ψ ≥ 0 from shift-protected φ_DE, φ_osc, Φ_portal, φ_Ch (§1.2, §3.1); fixed App. C ΔK_V = 8π²r⁴/(15ℏc), S_Araki ≈ 2.6 × 10⁻⁷ nats, and κ_ψ = 2.173 × 10⁻²¹ GeV⁻¹ (justified Planck choice vs. ℓ_CG⁻¹ as Ansatz); verified dψ/dr ∝ (r/r_V)^{3/2}, Z_ψ = 7.05 × 10¹⁴, Λ_local = 4.67 μeV (§3.4, App. G).',
    status: 'Resolved'
  },
  {
    issueId: 'R4. Bounce Tilts, Hayward Core & QES',
    concernSummary: 'Fix red n_T, canonical f_NL, w_contract tuning, BKL shear, Hayward Cauchy/first-law/GSL, and QES O(ℏ/(Mc)).',
    resolutionAndLocation:
      'Fixed shared red n_T = −0.036, r = 24c_s³ = 0.0123, canonical f_NL^eq = −35/8 = −4.38, and explicit pre-bounce ekpyrotic w > 1 mitigation (§6.1–6.2); marked w_contract = −0.003 as Input and ξ_0 = 2⁻¹/⁴ as Ansatz; documented Hayward first-law work term [105], pre-Cauchy truncation (§6.3), QES r_I = r_+ − O(ℏ/(Mc)) (App. E), and QFC-conditional GSL (§6.4).',
    status: 'Resolved'
  },
  {
    issueId: 'R5. Phenomenology P1–P6 & DESI/S₈',
    concernSummary: 'Replace heuristic w(z) with KG ODE, fix P1 monopole/ULDM/Cramér–Rao & P2 1.028 μm sphere, drop 10⁻²¹ clock claim.',
    resolutionAndLocation:
      'Solved RK2 KG ODE (w_0 = −0.908, w_a = −0.177, early (1+z)⁻³) and added DESI DR2 + S_8 discussion (§7.1); enforced f_DM ≤ 0.02 Y_00 P1 with full flicker/drift/GP/look-elsewhere/scramble budget (App. F); derived R_0 = 1.028 μm, Γ_DP = 0.883 s⁻¹, Γ_Araki = 1.18 s⁻¹ vs. Donadi et al. (App. F); documented P3–P6 budgets (§7.3, Table H.1).',
    status: 'Resolved'
  },
  {
    issueId: 'R6. Typography, PDF Glyphs & Verification',
    concernSummary: 'Eliminate OCR/font symbol lookalikes (π vs n, ℓ vs l/t/ℏ, γ_BI³ exponent, ℂP^{N−1}, r_I, V″, Appendix C 2π/κ_ψ factors), Theorem 3.1 badge drift, and expose public verification script.',
    resolutionAndLocation:
      'Routed math-heavy PDF columns & captions cleanly to DejaVuSans/DejaVuSerif (zero missing BMP glyphs); split Table 0.2a/0.2b; rebuilt Fig. 8; aligned Theorem 3.1/§3.4/Tables 8.2–8.3; embedded downloadable scripts/verify-igrt-monograph.mjs with full programmatic assertions in UI & App. J.',
    status: 'Resolved'
  }
];

export const KNOWN_OPEN_PROBLEMS: { code: string; topic: string; description: string }[] = [
  {
    code: 'OP-1',
    topic: 'Full Linear Perturbations (CAMB / hi_class + Cobaya Likelihoods)',
    description:
      'Execute joint MCMC chains against Planck PR4, DESI DR2 BAO, Pantheon+/Union3/DES-Y5 SNe, and KiDS-1000 / DES-Y3 weak-lensing S_8 observables using Horndeski G_eff(k, z) and Klein–Gordon background evolution.'
  },
  {
    code: 'OP-2',
    topic: 'Non-Perturbative Inhomogeneous 3+1 Quantum Dirac Constraint Algebra',
    description:
      'Establish off-shell anomaly freedom of {Ĥ(N), Ĥ(M)} beyond semiclassical BFV BRST 1-loop order (shared with canonical Loop Quantum Gravity [58, 59]).'
  },
  {
    code: 'OP-3',
    topic: 'Microscopic Derivation of α_mod, κ_ψ & Nonlinear S¹ Clock Stability',
    description:
      'Determine whether constitutive α_mod = ℏ/(E_mod σ_1) and Planck κ_ψ = ℏc ℓ_Pl/(12π) emerge from an underlying quantum-gravity microstate theory, and prove nonlinear stability of positive-branch k > 0 projection beyond adiabatic Born–Oppenheimer decoupling.'
  },
  {
    code: 'OP-4',
    topic: 'Extended Spectral-Action Unification of φ_osc & φ_Ch',
    description:
      'Investigate whether ultralight holonomy mode φ_osc (2.65 × 10⁻²³ eV) and Chameleon φ_Ch (2.4 meV) can be generated from inner fluctuations of an enlarged Krein–Connes spectral triple rather than entering as independent phenomenological sectors.'
  },
  {
    code: 'OP-5',
    topic: '4D QES Backreaction, Dynamical Mass-Inflation PDEs & Peer Review of [1]–[3]',
    description:
      'Upgrade 1D s-wave QES extremization to full 4D dynamical Hayward–Vaidya semiclassical collapse PDEs quantifying core-pressure first-law terms [105], alongside independent peer review of foundational preprints [1]–[3] and external replication of verify-igrt-monograph.mjs.'
  }
];
