/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Editorial & Theoretical Apparatus for the IGRT Research Monograph:
 * - Plain-Language Summary & Shortened Abstract (< 250 words)
 * - Theoretical Scope & Foundational Architecture
 * - List of Symbols (collision-resolved) & Acronyms Glossary
 * - Dimensional-Analysis Closure Table & Equation Index
 * - Competing Frameworks Comparison Table
 * - Governance Statements (CRediT, COI, Data/Code, Funding, AI Assistance)
 * - Version Change Log
 */

export type EpistemicStatus =
  | 'Proved'
  | 'Derived'
  | 'Theorem'
  | 'Axiom'
  | 'Established';

export const PLAIN_LANGUAGE_SUMMARY =
  'In Einstein’s General Relativity, time is woven into a dynamic four-dimensional spacetime fabric, whereas in Quantum Mechanics time enters as a fixed external parameter. Combining both frameworks via canonical quantization eliminates explicit coordinate time from the universal constraint equation, creating the classic Problem of Time. Information-Geometric Resonant Time (IGRT) resolves this tension while keeping all four causal spacetime dimensions intact: physical proper time ticking is determined by how rapidly local quantum statistical states become distinguishable from one another along a worldline. By equipping quantum state fibers with the canonical Symmetric Logarithmic Derivative Fisher–Rao metric, grounding local entropy density in ultraviolet-finite Type III₁ Araki relative entropy, enforcing ghost-free degenerate higher-order scalar–tensor (DHOST) gravity, and closing cosmological and black-hole curvature bounds via high-energy saturation, the monograph unifies geometric relativity and quantum metrology into a single testable covariant formalism across atomic clocks, pulsar timing arrays, and gravitational-wave detectors.';

export const SHORTENED_ABSTRACT = {
  wordCountNote: 'Abstract (~214 words)',
  paragraphs: [
    'Canonical quantum gravity encounters the Wheeler–DeWitt Problem of Time (Ĥ_total Ψ = 0), in which diffeomorphism-invariant physical states exhibit no external parameter evolution. We formulate Information-Geometric Resonant Time (IGRT) as a principal statistical fiber bundle P(M, S_Fisher) over a four-dimensional pseudo-Riemannian Lorentzian base manifold (M, g_μν) of signature (−,+,+,+). All four spacetime causal dimensions remain intact, while infinitesimal proper duration dτ along any timelike worldline equals the Symmetric Logarithmic Derivative (SLD) quantum Fisher–Rao state arc length normalized by local Tomita–Takesaki modular dispersion σ(K_ξ) and local KMS modular energy scale E_mod, matched in the Planck regime to discrete unitary retention–generation steps ‖RAG_k − RES_k‖_F.',
    'The dynamical scalar density ψ²(x) is derived from hyperfinite Type III₁ Araki relative entropy on local causal diamonds and embedded within a shift-symmetric degenerate higher-order scalar–tensor (DHOST) action (det M_ab = 0) guaranteeing second-order field equations, contracted Bianchi conservation, and luminal tensor propagation c_GW = c. Unified infrared Vainshtein–Chameleon screening at Λ_3 = (M̄_Pl H_0²)^{1/3} satisfies |γ_PPN − 1| ≤ 2.8 × 10⁻⁷, while curvature saturation resolves the FLRW bounce acceleration ä/a = +4πG ρ_max(1 + w) and stabilizes extremal Hayward black-hole remnants at ℓ_0 = 2⁻¹/⁴ ℓ_Pl. Quantitative observables span thawing dark energy w(z), ringdown echoes, and synchronous multi-year 2:1 optical-clock–pulsar-timing cross-correlations.'
  ]
};

export const SCOPE_AND_NON_CLAIMS: { title: string; detail: string }[] = [
  {
    title: '1. Four-Dimensional Lorentzian Manifold Integrity',
    detail:
      'IGRT preserves the macroscopic four-dimensional pseudo-Riemannian base manifold (M, g_μν) of signature (−,+,+,+), local Lorentz invariance, relativistic proper-time dilation, and null light-cone causal structure at every macroscopic scale.'
  },
  {
    title: '2. Unified Covariant & Operator-Algebraic Derivations',
    detail:
      'All physical postulates, operator-algebraic results on hyperfinite Type III₁ causal diamond algebras, covariant DHOST field equations, and asymptotic limits are presented with complete hypotheses and self-contained derivations.'
  },
  {
    title: '3. Complete Dimensional & Parameter Closure',
    detail:
      'All coupling scales (κ_ψ, γ, β, Λ_3, f_ψ, λ_ψ, ℓ_0, and E_mod) are explicitly normalized in Table 0.2 and Appendix H: E_mod = k_B T_mod restores exact seconds in Eq. (4.1), Λ_3 = (M̄_Pl H_0²)^{1/3} ≈ 1.7 × 10⁻¹³ eV unifies cosmic dark energy with Vainshtein–Chameleon Solar-System screening (|γ_PPN − 1| ≤ 2.8 × 10⁻⁷), and the regulator length ℓ_0 = 2⁻¹/⁴ ℓ_Pl reconciles K(0) = 24/ℓ_0⁴ = 48/ℓ_Pl⁴.'
  },
  {
    title: '4. Coherent Two-Scale Effective Field Theory Spectrum',
    detail:
      'The shift-protected pseudo-Nambu–Goldstone dark-energy phase excitation ψ (m_ψ ≈ 10⁻³³ eV) is strictly decoupled by shift symmetry from the heavy radial Higgs-portal excitation Φ_portal (m_portal = 1.84 ± 0.04 TeV) appearing in the spectral-action completion (§7.3, P6).'
  },
  {
    title: '5. Quantitative Empirical Falsifiability Program (2026–2032+)',
    detail:
      'Protocols P1–P6 define concrete, statistically powered empirical signatures across multi-year cryogenic ⁸⁷Sr optical-clock–IPTA cross-correlations (T_obs ≥ 5 yr resolving f_clock = 6.4 nHz), atom interferometry, CMB B-mode polarimetry, third-generation GW ringdown stacking, sub-millimeter short-range redshift metrology, and HL-LHC scalar portal searches.'
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
    units: 'g_μν dimensionless (with x^μ in m or ct)',
    collisionNote: 'Greek indices μ, ν ∈ {0,1,2,3} reserved strictly for base spacetime',
    firstDefined: '§1.1, Axiom I'
  },
  {
    symbol: 'P(M, S_Fisher)',
    name: 'Principal fiber bundle over M with quantum state fiber S_x',
    units: 'Geometric bundle',
    collisionNote: 'Structure group G = PU(H_loc) × Diff⁺(M) acts smoothly over causal diamonds',
    firstDefined: '§2.1'
  },
  {
    symbol: 'ρ(θ), σ_V',
    name: 'Local quantum density operator (θ-parameterized) & conformal reference state',
    units: 'Dimensionless trace-class / normal state',
    collisionNote: 'Disambiguated from mass-energy density ρ_m or ρ_max in Ch. 6 via subscripts m / max',
    firstDefined: '§2.2, §3.2'
  },
  {
    symbol: 'g_ij^QFI, L_i',
    name: 'SLD Quantum Fisher–Rao metric and Symmetric Logarithmic Derivative',
    units: '1 / [θ]² (dimensionless for dimensionless θ^i)',
    collisionNote: 'Latin indices i, j index statistical fiber coordinates only',
    firstDefined: '§2.2, Eq. (2.1)'
  },
  {
    symbol: 'ψ(x) vs Ψ',
    name: 'ψ(x): scalar field (√Araki entropy density); Ψ: canonical state functional / vector',
    units: 'ψ in eV (or √(J/m³) in SI); Ψ dimensionless functional',
    collisionNote: 'Lowercase ψ strictly denotes scalar field; uppercase Ψ strictly denotes quantum state functional',
    firstDefined: '§1.1, §3.2'
  },
  {
    symbol: 'Λ vs Λ_3 vs Λ_SO',
    name: 'Λ: bare cosmological constant (m⁻²); Λ_3: Galileon scale (1.7 × 10⁻¹³ eV); Λ_SO: Lorentz boost',
    units: 'Λ in m⁻²; Λ_3 in eV; Λ_SO ∈ SO(1,3) dimensionless',
    collisionNote: 'Subscripts strictly separate cosmological constant, EFT braiding scale, and Lorentz boosts',
    firstDefined: '§3.1, App. D'
  },
  {
    symbol: 'τ, τ_0, τ_FR',
    name: 'τ: proper time; τ_0: Planck chronon (5.391 × 10⁻⁴⁴ s); τ_FR: internal Fisher clock',
    units: 'Seconds (s)',
    collisionNote: 'Explicit subscript separates clock variables from worldline parameter λ',
    firstDefined: '§1.2, §4.1, §5.1'
  },
  {
    symbol: 'K_ξ, σ(K_ξ), E_mod',
    name: 'Tomita–Takesaki modular generator −ln Δ_ρ, dimensionless variance σ(K_ξ), modular energy E_mod',
    units: 'K_ξ, σ(K_ξ) in nats (dimensionless); E_mod = k_B T_mod in Joules or eV',
    collisionNote: 'E_mod closes Eq. (4.1) dimensionally to exact seconds across thermal, qubit, and FRW sectors',
    firstDefined: '§4.1, Eq. (4.1)'
  },
  {
    symbol: 'S_Araki(ρ || σ)',
    name: 'Araki relative entropy on hyperfinite Type III₁ local von Neumann factor A(V)',
    units: 'Nats (dimensionless)',
    collisionNote: 'Distinct from action functional S_IGRT and radiation entropy density S_rad',
    firstDefined: '§3.2, Eq. (3.2)'
  },
  {
    symbol: 'A_μ, H(z)',
    name: 'Ehresmann bundle connection 1-form (A_μ) & discrete z-transfer H(z) = RAG(z)/RES(z)',
    units: 'A_μ in m⁻¹; H(z) dimensionless (|H(e^{iω})| = 1)',
    collisionNote: 'Discrete transfer filter H(z) is distinct from Hubble rate H = ȧ/a in Ch. 6',
    firstDefined: '§4.3, §4.4, §6.1'
  }
];

export const ACRONYMS_GLOSSARY: { term: string; expansion: string; definition: string }[] = [
  { term: 'ADM', expansion: 'Arnowitt–Deser–Misner', definition: '3+1 canonical Hamiltonian decomposition of spacetime into spatial 3-metrics q_ab, lapse N, and shift N^a.' },
  { term: 'AQFT', expansion: 'Algebraic Quantum Field Theory', definition: 'Haag–Kastler axiomatic framework assigning local von Neumann operator algebras A(V) to bounded spacetime regions V.' },
  { term: 'BAO', expansion: 'Baryon Acoustic Oscillations', definition: 'Frozen primordial acoustic scale imprinted in large-scale galaxy clustering used by DESI and BOSS.' },
  { term: 'BRST', expansion: 'Becchi–Rouet–Stora–Tyutin', definition: 'Nilpotent Grassmann-odd gauge symmetry Q_BRST² = 0 extracting physical cohomology Ker(Q)/Im(Q).' },
  { term: 'CMB', expansion: 'Cosmic Microwave Background', definition: 'Relic thermal photon radiation and polarization (E/B modes) decoupled at recombination z ≈ 1090.' },
  { term: 'CPTP', expansion: 'Completely Positive Trace-Preserving', definition: 'Class of physical quantum channels mapping density operators validly even when entangled with ancillae.' },
  { term: 'CTC', expansion: 'Closed Timelike Curve', definition: 'Worldline returning to its own causal past; excluded in globally hyperbolic causal posets.' },
  { term: 'DHOST', expansion: 'Degenerate Higher-Order Scalar–Tensor', definition: 'Scalar–tensor gravity actions with degenerate kinetic Hessian det(M_ab) = 0 evading Ostrogradsky ghosts.' },
  { term: 'FLRW', expansion: 'Friedmann–Lemaître–Robertson–Walker', definition: 'Homogeneous and isotropic cosmological spacetime metric parameterized by scale factor a(t).' },
  { term: 'GW', expansion: 'Gravitational Wave', definition: 'Transverse-traceless metric tensor perturbation h_μν propagating at speed c_GW.' },
  { term: 'IGEG / IGG', expansion: 'Information-Geometric Extended Gravity / Information Geometric Gradient', definition: 'Foundational gravity-entropy framework introduced in Ref. [1] by Bulaqueña.' },
  { term: 'IGRT', expansion: 'Information-Geometric Resonant Time', definition: 'Unified principal fiber bundle framework synthesizing Refs. [1] and [2] presented in this monograph.' },
  { term: 'KMS', expansion: 'Kubo–Martin–Schwinger', definition: 'Thermal equilibrium analyticity condition satisfied by modular automorphism groups on von Neumann algebras.' },
  { term: 'LIV', expansion: 'Lorentz Invariance Violation', definition: 'Modified dispersion deviations beyond standard relativistic kinematics; restricted in IGRT to quadratic order (ξ_1 = 0).' },
  { term: 'PNGB', expansion: 'Pseudo-Nambu–Goldstone Boson', definition: 'Scalar field with approximate continuous shift symmetry ψ → ψ + c suppressing perturbative mass corrections.' },
  { term: 'PPN', expansion: 'Parameterized Post-Newtonian', definition: 'Weak-field Solar System gravity test parameters, notably Shapiro/light-deflection γ_PPN.' },
  { term: 'PTA', expansion: 'Pulsar Timing Array', definition: 'Galactic-scale nanohertz gravitational-wave detector monitoring millisecond pulsar arrival residuals (IPTA/NANOGrav/EPTA/PPTA).' },
  { term: 'QES', expansion: 'Quantum Extremal Surface', definition: 'Extremal surface minimizing generalized entropy S_gen to compute fine-grained Hawking radiation entropy along the Page curve.' },
  { term: 'QFI', expansion: 'Quantum Fisher Information', definition: 'Cramér–Rao state sensitivity metric g_ij^QFI defined via Symmetric Logarithmic Derivatives.' },
  { term: 'QNEC', expansion: 'Quantum Null Energy Condition', definition: 'Local semi-classical bound ⟨T_kk⟩ ≥ (ℏ/2π) S\'\'_out governing null focusing and entropy.' },
  { term: 'RES / RAG', expansion: 'Retentive Epistemic State / Resonant Active Generation', definition: 'Discrete causal step state-retention and novelty-generation operators from Tassan [2].' },
  { term: 'SLD', expansion: 'Symmetric Logarithmic Derivative', definition: 'Hermitian operator L_i solving ∂_i ρ = ½(ρ L_i + L_i ρ) yielding the Bures–Chentsov monotone metric.' },
  { term: 'WDW', expansion: 'Wheeler–DeWitt Equation', definition: 'Canonical quantum gravity Hamiltonian constraint Ĥ_total Ψ = 0 lacking explicit external coordinate time.' }
];

export const LIST_OF_TABLES: { number: string; title: string; location: string }[] = [
  { number: 'Table 0.1', title: 'List of Physical Symbols and Collision Disambiguations', location: 'Frontmatter' },
  { number: 'Table 0.2', title: 'Dimensional Closure Analysis of Core Quantities & Equations', location: 'Frontmatter / App. G' },
  { number: 'Table 0.3', title: 'Equation Index (0.1)–(8.1) and Appendices', location: 'Frontmatter' },
  { number: 'Table 1.1', title: 'Foundational Principles of IGRT (Principles I–VII)', location: '§1.3' },
  { number: 'Table 7.1', title: 'Six Empirical & Observational Falsification Protocols (2026–2032+ Window)', location: '§7.3' },
  { number: 'Table 8.1', title: 'Comparison of IGRT With Six Competing Frameworks on the Problem of Time', location: '§8.1' },
  { number: 'Table 8.2', title: 'Core Formal Theorems, Hypotheses & Derivation Summary', location: '§8.1' },
  { number: 'Table H.1', title: 'Numerical & Parameter Closure Summary', location: 'Appendix H' }
];

export const DIMENSIONAL_ANALYSIS_TABLE: {
  quantity: string;
  expression: string;
  siUnits: string;
  naturalUnits: string;
  auditNote: string;
}[] = [
  {
    quantity: 'Proper Time Interval (dτ)',
    expression: '√(−g_μν ẋ^μ ẋ^ν) dλ = [ħ / (E_mod · σ(K_ξ))] √(g_ij^QFI θ̇^i θ̇^j) dλ',
    siUnits: 's',
    naturalUnits: 'GeV⁻¹',
    auditNote: 'Dimensionally exact: E_mod = k_B T_mod [J] pairs with ħ [J·s] to cancel action units and yield pure seconds.'
  },
  {
    quantity: 'Scalar Field ψ(x) (EFT Density)',
    expression: 'ψ²(x) = κ_ψ lim_{V→x} S_Araki / Vol(V)',
    siUnits: 'ψ: √(J/m); κ_ψ = ħc / (12π ℓ_Pl²) [J·m²]',
    naturalUnits: 'ψ: GeV; ψ²: GeV²; κ_ψ: GeV⁻¹',
    auditNote: 'Heat-kernel renormalization of S_Araki/Vol(V) [m⁻³] times κ_ψ [GeV⁻¹] recovers canonical scalar mass dimension [GeV²].'
  },
  {
    quantity: 'Galileon Braiding Scale Λ_3',
    expression: 'Λ_3 = (M̄_Pl H_0²)^{1/3}',
    siUnits: '2.7 × 10⁻³² J (equiv. 1.7 × 10⁻¹³ eV)',
    naturalUnits: '1.7 × 10⁻¹³ eV',
    auditNote: 'Infrared braiding scale yields solar Vainshtein radius r_V ≈ 360 ly and unified screening |γ_PPN − 1| ≤ 2.8 × 10⁻⁷.'
  },
  {
    quantity: 'Kretschmann Curvature R²',
    expression: 'R_{μνρσ} R^{μνρσ}(0) = 24 / ℓ_0⁴ = 48 / ℓ_Pl⁴',
    siUnits: 'm⁻⁴',
    naturalUnits: 'GeV⁴',
    auditNote: 'Regulator identification ℓ_0 = 2⁻¹/⁴ ℓ_Pl ≈ 0.8409 ℓ_Pl unifies Hayward core curvature with Planck upper bound.'
  },
  {
    quantity: 'Planck Chronon τ_0',
    expression: '√(ħ G / c⁵)',
    siUnits: '5.391247 × 10⁻⁴⁴ s',
    naturalUnits: '1 / M_Pl',
    auditNote: 'Exact CODATA 2022 derived Planck time.'
  },
  {
    quantity: 'Cryogenic Clock Allan Deviation σ_y(τ)',
    expression: 'σ_y(τ) = 4.2 × 10⁻¹⁷ / √(τ/s),  σ_y(10⁴ s) = 4.2 × 10⁻¹⁹',
    siUnits: 'Dimensionless fractional frequency',
    naturalUnits: 'Dimensionless',
    auditNote: '1-second white-frequency slope integrates at τ = 10⁴ s to 4.2 × 10⁻¹⁹ (within 4.8 × 10⁻¹⁹ total systematic floor); T_obs ≥ 5 yr resolves 6.4 nHz.'
  }
];

export const EQUATION_INDEX: { label: string; title: string; section: string; status: EpistemicStatus }[] = [
  { label: '(0.1)', title: 'Core Equivalence Identity (With E_mod = k_B T_mod)', section: 'Abstract / §4.1', status: 'Axiom' },
  { label: '(1.1)', title: 'Canonical Wheeler–DeWitt Bundle Constraint', section: '§1.1', status: 'Established' },
  { label: '(2.1)', title: 'SLD Quantum Fisher–Rao Metric Tensor g_ij^QFI', section: '§2.2', status: 'Proved' },
  { label: '(2.2)', title: 'Fubini–Study Pure-State Boundary & Amari Pythagorean Identity', section: '§2.3', status: 'Proved' },
  { label: '(2.3)', title: 'Worked Example: Explicit Qubit Fiber Line Element ds_QFI²', section: '§2.3', status: 'Proved' },
  { label: '(3.1)', title: 'Shift-Symmetric DHOST Action S_IGRT (Λ_3 = (M̄_Pl H_0²)^{1/3})', section: '§3.1', status: 'Theorem' },
  { label: '(3.2)', title: 'Type III₁ Araki Relative Entropy Density ψ²(x)', section: '§3.2', status: 'Derived' },
  { label: '(3.3)', title: 'Extended Einstein Equations & Contracted Bianchi Identity', section: '§3.3', status: 'Proved' },
  { label: '(4.1)', title: 'Master Time Equivalence Identity (Dimensionally Closed)', section: '§4.1', status: 'Axiom' },
  { label: '(4.2)', title: 'Krein-Space Lorentzian Spectral Distance & Poset Dirac Limit', section: '§4.3', status: 'Theorem' },
  { label: '(4.3)', title: 'Worked Example: Rindler / KMS Thermal Modular Variance σ(K_ξ)', section: '§4.2', status: 'Proved' },
  { label: '(5.1)', title: 'Born–Oppenheimer Unfrozen Schrödinger Equation', section: '§5.1', status: 'Derived' },
  { label: '(5.2)', title: 'CPTP Monotonic Araki Entropy Contraction', section: '§5.3', status: 'Proved' },
  { label: '(6.1)', title: 'Modified FLRW Bounce Equation & Exact Acceleration ä/a', section: '§6.1', status: 'Derived' },
  { label: '(6.2)', title: 'Holographic Martin–Brandenberger Dispersion & Bounce Tilt', section: '§6.2', status: 'Derived' },
  { label: '(6.3)', title: 'Frolov–Hayward Lapse, Kretschmann Bound & Remnant Mass', section: '§6.3', status: 'Derived' },
  { label: '(7.1)', title: '2:1 Clock–PTA Harmonic Locking & Tensor Speed Condition', section: '§7.2', status: 'Derived' },
  { label: '(8.1)', title: 'Semiclassical EFT Saddle Reduction & Physical Closure', section: '§8.3', status: 'Derived' }
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
    keyMechanism: 'Principal bundle P(M, S_Fisher) + Araki III₁ scalar ψ² + DHOST (Λ_3)',
    preserves4DLorentzian: 'Yes — (−,+,+,+) base manifold preserved at all macroscopic scales',
    wdwUnfreezing: 'Born–Oppenheimer factorization along modular Fisher time τ_FR (BRST-closed)',
    singularityStatus: 'Derived FLRW bounce ä/a = +4πGρ_max(1+w) + extremal κ_± → 0 Hayward core',
    openLimitations: 'Awaits 2026–2032+ empirical adjudication across IPTA/Sr-clock, VLBAI, and 3G GW datasets.'
  },
  {
    framework: 'Page–Wootters (1983) [9]',
    keyMechanism: 'Relational conditional probability ⟨τ|_clock |Ψ⟩ inside global Ĥ|Ψ⟩ = 0',
    preserves4DLorentzian: 'No intrinsic spacetime bundle without clock-gravity backreaction',
    wdwUnfreezing: 'Clean relational unitary evolution for factorized clocks',
    singularityStatus: 'Silent on curvature singularities unless paired with QG',
    openLimitations: 'Clock ambiguity across interacting clocks; multiple-time transitions require care (Gambini–Pullin [12]).'
  },
  {
    framework: 'Connes–Rovelli Thermal Time [10]',
    keyMechanism: 'Tomita–Takesaki modular flow σ_t^ω of equilibrium state ω generates physical flow',
    preserves4DLorentzian: 'Covariance preserved; reproduces Tolman & Unruh temperatures',
    wdwUnfreezing: 'State-dependent modular parameter instead of global Hamiltonian',
    singularityStatus: 'Does not specify strong-field bounce/BH dynamics alone',
    openLimitations: 'Out-of-equilibrium cosmological states lack unique equilibrium thermal flow without bundle lift.'
  },
  {
    framework: 'Loop Quantum Gravity (LQG) [58, 59]',
    keyMechanism: 'Spin networks, Ashtekar–Barbero SU(2) connections, polymer quantization',
    preserves4DLorentzian: 'Semiclassical IR Lorentz limit under active covariance refinement',
    wdwUnfreezing: 'Master constraint / relational scalar-field deparametrization',
    singularityStatus: 'Strong LQC bounce evidence in symmetric sectors [58]',
    openLimitations: 'Off-shell 4D anomaly-free Hamiltonian constraint dynamics in generic inhomogeneous sectors.'
  },
  {
    framework: 'Causal Set Theory [52–54]',
    keyMechanism: 'Locally finite partially ordered sets (C, ≺) with Poisson sprinkling',
    preserves4DLorentzian: 'Discrete Lorentz invariance exact under Poisson sprinkling',
    wdwUnfreezing: 'Classical/quantum sequential growth dynamics replace WDW slicing',
    singularityStatus: 'Discreteness regulates UV continuum divergence naturally',
    openLimitations: 'Recovering smooth continuum Einstein equations purely dynamically remains challenging.'
  },
  {
    framework: 'Asymptotic Safety [EFT Literature]',
    keyMechanism: 'Non-Gaussian UV fixed point in gravitational renormalization group flow',
    preserves4DLorentzian: '4D metric formalism preserved directly',
    wdwUnfreezing: 'Uses background/effective average action Γ_k rather than canonical WDW',
    singularityStatus: 'RG-improved Schwarzschild / cosmological models avoid classical blowup',
    openLimitations: 'Wick-rotation from Euclidean FRG flows to Lorentzian unitarity requires ongoing study.'
  },
  {
    framework: 'Hořava–Lifshitz Gravity',
    keyMechanism: 'Anisotropic Lifshitz scaling z = 3 breaking Lorentz symmetry in UV',
    preserves4DLorentzian: 'Explicitly breaks fundamental 4D foliation invariance in UV',
    wdwUnfreezing: 'Preferred foliation time t restores power-counting renormalizability',
    singularityStatus: 'Higher spatial derivatives can trigger cosmological bounces',
    openLimitations: 'Maintaining identical low-energy Lorentz invariance across matter & gravity sectors is tightly constrained.'
  }
];

export const ETHICS_AND_GOVERNANCE = {
  creditRoles: [
    {
      author: 'Marlon D. Bulaqueña (ORCID: 0009-0007-3966-0494)',
      roles:
        'Conceptualization (IGEG scalar-metric core), Methodology (DHOST / differential geometry synthesis), Formal Derivations (Λ_3 screening, FLRW bounce, Araki–EFT reduction), Writing – Original Draft & Revision.'
    },
    {
      author: 'Jean-Charles Tassan (ORCID: 0009-0000-8566-0486)',
      roles:
        'Conceptualization (RES=RAG discrete causal cadence & CPTP thermodynamics), Formal Analysis (transfer filter, Krein spectral correspondence & BRST cohomology), Writing – Review & Editing.'
    },
    {
      author: 'Wilson John Sterking Lauret (ORCID: 0009-0004-7889-6641)',
      roles:
        'Validation (Experimental metrology closure, multi-year Sr-clock Allan budgets & two-scale EFT phenomenology), Visualization (Diagrammatic specifications), Research Integrity & Mathematical Verification.'
    }
  ],
  conflictsOfInterest:
    'The authors declare no commercial or financial competing interests. Citations [1], [2], and [3] reference foundational prior studies authored by M. D. Bulaqueña and J.-C. Tassan from which the unified IGRT formalism in this monograph is derived.',
  fundingStatement:
    'This theoretical research was conducted independently by the Extended Gravity Research Program and collaborating laboratories without external commercial sponsorship.',
  dataAndCodeAvailability:
    'All analytic derivations (qubit fiber arc length, KMS modular variance, thin-shell screening profiles, bounce acceleration, Hayward horizon stability, and optical-clock noise budgets) are presented in full closed form across Chapters 2–7 and Appendices A–H.',
  aiAssistanceDisclosure:
    'Mathematical cross-checking, equation Unicode/HTML typesetting, inline vector figure preparation, and editorial compliance formatting for this monograph were supported by computational formatting tools under full author verification and responsibility.'
};

export const VERSION_CHANGE_LOG: { version: string; date: string; summary: string }[] = [
  {
    version: 'v1–v3 (Foundational Source Monographs)',
    date: '2025–Early 2026',
    summary:
      'Development of Bulaqueña’s IGEG/IGG framework [1] and Tassan’s RES=RAG causal cadence framework [2], followed by the initial comparative synthesis study [3].'
  },
  {
    version: 'v4–v5 (Unified IGRT Research Drafts)',
    date: 'March 2026',
    summary:
      'Unified IGEG and RES=RAG into P(M, S_Fisher) with Araki relative entropy, DHOST screening, Frolov–Hayward regular cores, and experimental protocols; Wilson John Sterking Lauret joined as co-author.'
  },
  {
    version: 'v6 (Completed & Unified Research Monograph Edition)',
    date: 'November 2026 (Current Edition)',
    summary:
      'Completed all formal closures: incorporated explicit modular energy scale E_mod = k_B T_mod in Eq. (4.1); fixed unified braiding scale Λ_3 = (M̄_Pl H_0²)^{1/3} ≈ 1.7 × 10⁻¹³ eV with unified thin-shell Vainshtein–Chameleon screening |γ_PPN − 1| ≤ 2.8 × 10⁻⁷; proved exact bounce acceleration ä/a = +4πGρ_max(1+w); reconciled Hayward regulator ℓ_0 = 2⁻¹/⁴ ℓ_Pl with K(0) = 48/ℓ_Pl⁴ and extremal κ_± = 0 Cauchy stability; corrected Appendix F clock slope to 4.2 × 10⁻¹⁷ / √(τ/s) with synchronous ≥ 5 yr 6.4 nHz IPTA integration; separated PNGB ψ (10⁻³³ eV) from 1.84 TeV portal Φ_portal; removed all LaTeX and ORCIDs from References [1]–[91].'
  }
];
