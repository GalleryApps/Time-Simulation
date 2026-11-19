/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * IGRT-H12 Structured Apparatus, Taxonomies, Device Specs, Protocols & Appendices (A-K):
 * "Folding Time Across Hidden Dimensions: Fifth-Dimensional Resonant Geometry,
 *  Mathematical Portals, and the Limits of Spacetime Shortcuts"
 *
 * Strictly zero LaTeX syntax; pure Unicode + HTML <sup>/<sub> typography.
 * Every numerical benchmark directly computed by scripts/verify-igrt-h12.mjs.
 */

export type H12EpistemicCategory =
  | 'CATEGORY A — ESTABLISHED'
  | 'CATEGORY B — DERIVED'
  | 'CATEGORY C — CONJECTURAL'
  | 'CATEGORY D — SPECULATIVE ENGINEERING';

export interface H12Equation {
  label: string;
  unicodeHtml: string;
  plainText: string;
  caption: string;
  category: H12EpistemicCategory;
}

export interface H12AuthorSpec {
  name: string;
  orcid: string;
  orcidUrl: string;
  role: string;
  affiliation: string;
}

export interface H12Meta {
  monographId: string;
  shortTitle: string;
  title: string;
  subtitle: string;
  edition: string;
  date: string;
  predecessor: string;
  authors: string;
  authorRoster: H12AuthorSpec[];
  affiliation: string;
  keywords: string[];
  verifyCommand: string;
}

export const H12_META: H12Meta = {
  monographId: 'IGRT-2026-H12',
  shortTitle: 'Folding Time Across Hidden Dimensions (IGRT-H12)',
  title:
    'Folding Time Across Hidden Dimensions: Fifth-Dimensional Resonant Geometry, Mathematical Portals, and the Limits of Spacetime Shortcuts',
  subtitle:
    'From Cosmic Wormholes and Black-Hole Cores to Everyday Double-Slit Interference — A Rigorous Follow-Up Monograph Extending Information-Geometric Resonant Time (IGRT-2026-H11)',
  edition: 'Research Monograph Edition H12 (13 Chapters · Technical Appendices A–K · Extended Appendices L–N)',
  date: 'November 2026',
  predecessor: 'IGRT-2026-H11 (Harmonized 4D Research Monograph)',
  authors: 'Jean-Charles Tassan, Marlon D. Bulaqueña, and Wilson John Sterking Lauret',
  authorRoster: [
    {
      name: 'Jean-Charles Tassan',
      orcid: '0009-0000-8566-0486',
      orcidUrl: 'https://orcid.org/0009-0000-8566-0486',
      role: 'Modular Time, SLD Fisher Geometry & Quantum Foundations',
      affiliation: 'Laboratory of Resonant Epistemology & Open Quantum Systems'
    },
    {
      name: 'Marlon D. Bulaqueña',
      orcid: '0009-0007-3966-0494',
      orcidUrl: 'https://orcid.org/0009-0007-3966-0494',
      role: 'Mathematical General Relativity & 5D Brane Geometry',
      affiliation: 'Department of Theoretical Physics, Extended Gravity Research Program'
    },
    {
      name: 'Wilson John Sterking Lauret',
      orcid: '0009-0004-7889-6641',
      orcidUrl: 'https://orcid.org/0009-0004-7889-6641',
      role: 'Black-Hole Thermodynamics, Optical Analogs & Falsification',
      affiliation: 'Extended Gravity & Quantum Information Metrology Consortium'
    }
  ],
  affiliation: 'Program on Information-Geometric Gravity, Higher-Dimensional Spacetime & Quantum Metrology',
  keywords: [
    'Information-Geometric Resonant Time (IGRT)',
    '5D Warped Kaluza–Klein & Brane Geometry',
    'Modular Time & Temporal Folding',
    'Beltrami Geodesic Shortcuts (Category C)',
    'Hayward Regular Black Holes & Gregory–Laflamme Instability',
    'Morris–Thorne Traversable Wormholes & Null Energy Condition',
    'SLD Quantum Fisher Information & Wave–Particle Duality',
    'Falsification Protocols P7–P13'
  ],
  verifyCommand: 'node scripts/verify-igrt-h12.mjs'
};

export const H12_MASTER_EQUATIONS: H12Equation[] = [
  {
    label: '(H12.0.1)',
    category: 'CATEGORY C — CONJECTURAL',
    unicodeHtml:
      '<i>d</i><i>s</i><sub>5</sub><sup>2</sup> = <i>e</i><sup>2α<sub><i>t</i></sub><i>k</i>|<i>y</i>|</sup> (−<i>c</i><sup>2</sup> <i>dt</i><sup>2</sup>) + <i>e</i><sup>−2α<sub><i>x</i></sub><i>k</i>|<i>y</i>|</sup> <i>g</i><sub><i>ij</i></sub><sup>(3)</sup> <i>dx</i><sup><i>i</i></sup> <i>dx</i><sup><i>j</i></sup> + Φ<sub>rad</sub><sup>2</sup>(<i>x</i>) <i>dy</i><sup>2</sup>, &nbsp;&nbsp; <i>c</i><sub>eff</sub>(<i>y</i>) = <i>c</i> · <i>e</i><sup>(α<sub><i>t</i></sub> + α<sub><i>x</i></sub>)<i>k</i>|<i>y</i>|</sup>',
    plainText:
      'ds_5^2 = e^{2 alpha_t k |y|} (-c^2 dt^2) + e^{-2 alpha_x k |y|} g_{ij}^{(3)} dx^i dx^j + Phi_rad^2(x) dy^2,  c_eff(y) = c e^{(alpha_t + alpha_x) k |y|}',
    caption:
      'Assumed generalized 5D warped bulk metric ansatz (Category C: postulated geometry, not unconditionally derived from a vacuum action) reducing smoothly to H11 4D geometry on y = 0; conformal RS case α_t = −1, α_x = +1 yields c_eff(y) = c identically, while asymmetric bulk α_t + α_x > 0 requires bulk anisotropic stress-energy.'
  },
  {
    label: '(H12.0.2)',
    category: 'CATEGORY C — CONJECTURAL',
    unicodeHtml:
      '<i>d</i>τ<sub>obs</sub> = [ ℏ / (<i>E</i><sub>mod</sub> · σ<sub>1</sub>(<i>K</i><sub>ξ</sub>)) ] √(<i>g</i><sub><i>ij</i></sub><sup>QFI</sup> θ̇<sup><i>i</i></sup> θ̇<sup><i>j</i></sup>) <i>d</i>λ &nbsp;=&nbsp; <i>c</i><sup>−1</sup> √(−<i>G</i><sub><i>AB</i></sub> <i>Ẋ</i><sup><i>A</i></sup> <i>Ẋ</i><sup><i>B</i></sup>) <i>d</i>λ, &nbsp;&nbsp; η<sub>fold</sub> ≡ Δτ<sub>5</sub> / Δτ<sub>4</sub>',
    plainText:
      'd tau_obs = [ hbar / (E_mod * sigma_1(K_xi)) ] sqrt(g_ij^QFI theta_dot^i theta_dot^j) d lambda = c^{-1} sqrt(-G_AB X_dot^A X_dot^B) d lambda,  eta_fold = Delta tau_5 / Delta tau_4',
    caption:
      'Five-dimensional lift of the H11 clock relation defining the folding ratio η_fold ≡ Δτ_5 / Δτ_4 (Category C: η_fold is a mathematical definition built on the postulated 5D bulk extension, not an unconditional derivation).'
  }
];

export const H12_PORTAL_DEFINITION_BOX =
  'Portal (in this monograph): A mathematical connection between brane and bulk, not a traversable wormhole. The negative theorems (Chapter 9) rule out physical portals.';

export const H12_METRIC_SIGNATURE_BOX =
  'Metric Signature Convention: Four-dimensional spacetime M_4 carries (−,+,+,+) and five-dimensional M_5 = M_4 × K_1 carries (−,+,+,+,+). The metric signature is (−,+,+,+,+). Mixed signatures are excluded.';

export const H12_FOUNDATIONAL_EQUATIONS_NOTE =
  'Eqs. (H12.0.1) and (H12.0.2) are postulated, not derived. They define the 5D hypothesis.';

export const H12_ABSTRACT_PARAGRAPHS: string[] = [
  'Our observable universe can be pictured as a four-dimensional sheet—three spatial directions plus time—governed with high empirical precision by Information-Geometric Resonant Time Edition H11 (IGRT-2026-H11). In H11, proper clock duration dτ along any worldline is fixed inside a strictly four-dimensional principal bundle P(M_4, PU(ℋ)) by the Symmetric Logarithmic Derivative Quantum Fisher Information metric g_ij^QFI and causal-diamond Araki coupling κ_ψ = ℏc ℓ_Pl / (12π) = 2.1727 × 10⁻²¹ GeV⁻¹. A central question left outside H11 is whether nature also hides a physical fifth spatial coordinate y, and if so, whether stepping into that bulk could fold proper time, shorten cosmic travel, or turn black holes and entangled states into "portals"—defined here strictly as mathematical connections, never macroscopic traversable wormholes.',
  'This follow-up monograph (IGRT-2026-H12) answers that question across 13 chapters, Extended Appendices L–N, and Technical Appendices A–K, while enforcing a four-tier epistemic standard separating Category A (Established), Category B (Derived), Category C (Conjectural), and Category D (Speculative Engineering). Crucially, no 5D phenomenon has been observed, and every low-energy 4D prediction of IGRT-H11—including ξ_0 = 2⁻¹/⁴, ringdown echo reflectivity K_echo = 0.184, remnant mass M_rem = 1.09236 M_Pl, and Hubble posterior H_0 = 70.77 ± 0.72 km s⁻¹ Mpc⁻¹—remains mathematically untouched below E ≪ m_KK^(1) ≥ 4.485 meV (where Eöt-Wash torsion balances limit any compact circle to R_5 ≤ 44 μm and suppress 1 neV corrections to δ_KK = 4.972 × 10⁻¹⁴).',
  'The strongest findings of H12 are decisive Category B negative proofs ruling out common higher-dimensional myths: (1) simple flat extra dimensions M_4 × S¹ strictly delay light (L_5/L_4 = 1.001249 > 1); (2) conformally flat Randall–Sundrum AdS_5 warped bulks preserve bulk light speed c_eff(y) = c everywhere (Horizon Theorem Δt_5/Δt_4 = 1.010321 ≥ 1); (3) ordinary 4D H11 Hayward regular black holes satisfy both radial (ρ + p_r = 0) and transverse (ρ + p_⊥ > 0) Null Energy Conditions at r_core = 2.5389 × 10⁻²² m and are sealed remnants rather than portals; and (4) macroscopic Morris–Thorne traversable wormholes demand −1.0637 × 10⁻³ M_⊙ (r_0 = 1 m) to −3.1912 M_⊙ (3 km) of exotic negative energy, outstripping laboratory Casimir vacuum density by 10⁷¹ at 1 m and reaching O(1) parity (0.2436) only at the Planck scale ℓ_0 = 1.3591 × 10⁻³⁵ m. Meanwhile, positive Beltrami geodesic shortcuts—both phenomenological Model 2B ratios η_fold = 0.86634 (k Δx = 2), 0.34279 (k Δx = 10), 0.07770 (k Δx = 50) and the exact finite-span Einstein–Maxwell solution η_fold = 0.84147 (k Δx = 2 < π, horizon limit 2/π = 0.63662)—are explicitly classified as Category C (Conjectural) geometric classifications built on assumed asymmetric warping, not predictions of a realized physical mechanism. No physical mechanism is currently known that could produce the asymmetric warp required for shortcuts.',
  'Finally, we prove that double-slit wave–particle duality V² + D_QFI² = 1 arises strictly inside the internal Hilbert fiber PU(ℋ) ⊥ ∂/∂y independently of any fifth dimension, prove an exact 5D Null Energy Condition obstruction theorem showing unbounded phenomenological Model 2B shortcuts strictly violate 5D NEC (−G^0_0 + G^x_x = −k², −G^0_0 + G^y_y = −1.5 k²) whereas ghost-free Einstein–Maxwell (1.0, 0.0) obeys 5D NEC inside horizon span k Δx < π, preserve the Born rule explicitly as a Category A postulate, show that 5D microcausality preserves the no-communication theorem without superluminal signaling, catalog every non-derived Category C/D claim, and separate tests of the 5D bulk (Protocols P7–P10) from currently untestable active folding designs (P11–P12) and a passive astrophysical multi-messenger arrival bound (Protocol P13, yielding |η_fold^{GW−EM} − 1| ≤ 4.129 × 10⁻¹⁶ from GW170817/GRB 170817A and < 10⁻¹⁸ in 3G BNS stacks), all verified deterministically by 80 programmatic assertions. Protocol P13 is a passive bound from existing data, not an active test of the folding mechanism. No active test of the folding mechanism is currently feasible.'
];

export const H12_SUMMARY_FOR_NON_SPECIALISTS =
  'Summary for Non-Specialists: Imagine our universe as a flat sheet of paper living inside a five-dimensional room. This follow-up study asks whether stepping off the sheet into an unseen fifth dimension could let light take faster shortcuts, turn black holes into sci-fi wormholes, or make quantum particles leap across hidden space. Using exact mathematics, our strongest discoveries are clear negative theorems: ordinary extra dimensions and standard warped bulks actually slow light down, regular black holes are sealed objects rather than portals, holding open a human-sized wormhole takes 10⁷¹ times more negative vacuum energy than physics can supply, and quantum entanglement still forbids faster-than-light messages. Shortcut geometries only appear on paper if one assumes an unobserved asymmetric warp (Category C conjecture)—and no physical mechanism is currently known to build it. Real experiments P7–P10 test whether a fifth dimension exists at all, active folding tests P11–P12 are not feasible today, and existing neutron-star merger data (P13) already box any gravitational shortcut down to four parts in ten quadrillion (4.129 × 10⁻¹⁶), leaving all everyday 4D physics untouched.';

export const H12_SCOPE_AND_NON_CLAIMS: { title: string; points: string[] } = {
  title: 'Epistemic Boundaries, Preserved H11 Foundations & Explicit Non-Claims',
  points: [
    'H11 Integrity Preserved: Nothing in H12 alters, retracts, or invalidates the 4D predictions of IGRT-2026-H11 (verified by 665 assertions in scripts/verify-igrt-monograph.mjs). H11 remains the exact effective 4D low-energy limit (E ≪ 4.485 meV) of H12.',
    'Fifth Dimension Status (Category C): H12 treats the physical fifth dimension y as a mathematically consistent, conditionally falsifiable theoretical extension—NOT an established experimental fact.',
    'No Free Wormholes or Warp Drives (Category B Negative Theorems): Ordinary 4D Hayward regular black holes do NOT violate NEC and are NOT portals. Macroscopic traversable wormholes remain blocked by >70 orders of magnitude relative to physical Casimir vacuum energy densities.',
    'Quantum Foundations Boundary (Category A): The Born rule P = |ψ|² is treated strictly as an established quantum postulate—it is NOT claimed to be derived from 5D geometry. Entanglement nonlocality strictly preserves no-signaling ([O_A, O_B] = 0).',
    'Analog vs. Gravitational Engineering (Category D vs. A): Laboratory optical, cold-atom, acoustic, and qubit analog devices (Devices A–F) probe information-geometric mathematics and effective curved metrics; they do NOT open physical astrophysical portals.'
  ]
};

export interface H11ToH12ComponentRow {
  component: string;
  h11Role: string;
  h11EquationOrValue: string;
  h12Status: 'Preserved Unchanged' | 'Extended to 5D' | 'Replaced / Generalized';
  h12Modification: string;
  category: H12EpistemicCategory;
}

export const H11_TWELVE_COMPONENTS_AUDIT: H11ToH12ComponentRow[] = [
  {
    component: '1. Principal Bundle P(M_4, PU(ℋ))',
    h11Role: 'Base 4D spacetime with projective Hilbert state fiber',
    h11EquationOrValue: 'π: P → M_4; fiber PU(ℋ)',
    h12Status: 'Extended to 5D',
    h12Modification: 'Postulated lift to 5D bulk bundle P_5(M_5, PU(ℋ)), where y ∈ K_1 is a physical spacetime coordinate strictly distinct from internal fiber θ ∈ PU(ℋ); lift is assumed rather than derived from a 5D action.',
    category: 'CATEGORY C — CONJECTURAL'
  },
  {
    component: '2. Master QFI Clock Identification',
    h11Role: 'Equalizes proper time to modular-normalized SLD Fisher line element',
    h11EquationOrValue: 'dτ = [ℏ/(E_mod σ_1(K_ξ))] √(g_ij^QFI θ̇^i θ̇^j) dλ',
    h12Status: 'Extended to 5D',
    h12Modification: 'Defined on 5D bulk arc length Eq. (H12.0.2); introduces coordinate-invariant temporal folding ratio η_fold ≡ Δτ_5 / Δτ_4 as a definition on the assumed 5D lift.',
    category: 'CATEGORY B — DERIVED'
  },
  {
    component: '3. Araki Coupling Constant κ_ψ',
    h11Role: 'Bridges causal-diamond relative entropy density to scalar field ψ²',
    h11EquationOrValue: 'κ_ψ = ℏc ℓ_Pl/(12π) = 1.3554 × 10⁻⁶² J·m² = 2.1727 × 10⁻²¹ GeV⁻¹',
    h12Status: 'Preserved Unchanged',
    h12Modification: 'Recovered identically on the y = 0 brane for E ≪ m_KK^(1); KK correction at 1 neV is 4.972 × 10⁻¹⁴.',
    category: 'CATEGORY B — DERIVED'
  },
  {
    component: '4. Horndeski / Vainshtein Screening',
    h11Role: 'Solar-system PPN recovery via Λ_3 = 1.758 × 10⁻¹³ eV & Z_ψ',
    h11EquationOrValue: 'Λ_local = 4.67 μeV; |γ_PPN − 1| ≪ 10⁻⁵',
    h12Status: 'Extended to 5D',
    h12Modification: '5D radion Φ_rad(x) is assumed to inherit Vainshtein/Goldberger–Wise screening so Eöt-Wash R_5 ≤ 44 μm (m_KK ≥ 4.485 meV) and Cassini PPN bounds remain satisfied (full 5D field-equation screening not explicitly derived).',
    category: 'CATEGORY C — CONJECTURAL'
  },
  {
    component: '5. Regular Black-Hole Hayward Core',
    h11Role: 'UV regular core parameter ξ_0 = 2⁻¹/⁴, ℓ_0 = 1.3591 × 10⁻³⁵ m',
    h11EquationOrValue: 'f(r) = 1 − 2GMr²/(r³ + 2GMℓ_0²)',
    h12Status: 'Extended to 5D',
    h12Modification: '4D Hayward NEC satisfaction (ρ + p_r = 0) is strictly Category B derived; however, 5D brane-world black-string embedding with Weyl tidal charge and Gregory–Laflamme threshold r_+/R_AdS = 0.876 is an assumed Category C extension.',
    category: 'CATEGORY C — CONJECTURAL'
  },
  {
    component: '6. WKB Echo Amplitude & QES Island',
    h11Role: 'Tortoise barrier reflectivity & Page-curve remnant M_rem',
    h11EquationOrValue: 'K_echo = 0.184; M_rem = 1.09236 M_Pl',
    h12Status: 'Preserved Unchanged',
    h12Modification: 'Preserved in 4D ringdown channel (P4); extended in P10 to search for scalar/KK leakage modes |h_s/h_t| < 10⁻³ at ET/CE.',
    category: 'CATEGORY B — DERIVED'
  },
  {
    component: '7. Early-Braiding Hubble Closure',
    h11Role: 'Acoustic shrinkage resolving Planck–SH0ES tension (4.8σ → 1.8σ)',
    h11EquationOrValue: 'H_0 = 70.77 ± 0.72; w_0 = −0.831, w_a = −0.542',
    h12Status: 'Preserved Unchanged',
    h12Modification: 'Untouched by heavy KK tower (m_KK ≥ 4.485 meV ≫ T_CMB); bulk radion drift constrained by BBN & GW170817.',
    category: 'CATEGORY B — DERIVED'
  },
  {
    component: '8. Spectral Compression A_F^{H11}',
    h11Role: 'Derives M_Ch, m_osc, and dark matter budget (k_eff = 2 moduli)',
    h11EquationOrValue: 'M_Ch = 2.44 meV; Ω_DM h² = 0.1194',
    h12Status: 'Extended to 5D',
    h12Modification: 'KK/radion excitations constrained to < 1% subdominant fraction alongside H11 remnant + ULDM budget.',
    category: 'CATEGORY C — CONJECTURAL'
  },
  {
    component: '9. Buchholz–Wichmann & BFV–BRST UV Closure',
    h11Role: 'Split property bound 2 × 10⁻¹¹⁰ & nilpotent {Ω_BFV, Ω_BFV} = 0',
    h11EquationOrValue: 'd_GH = 0.0142; Wetterich g_* = 1.3105',
    h12Status: 'Extended to 5D',
    h12Modification: '5D non-renormalizable EFT below M_5 (≥ 2.985 × 10⁸ GeV flat / 1.8101 × 10¹⁸ GeV warped); full 5D BFV–BRST constraint algebra {Ω_BFV^(5), Ω_BFV^(5)} is not explicitly computed in H12.',
    category: 'CATEGORY C — CONJECTURAL'
  },
  {
    component: '10. Ekpyrotic–L_UV Bounce Cosmology',
    h11Role: 'Non-singular scale-invariant spectrum n_s = 0.9637',
    h11EquationOrValue: 'r < 0.03; |f_NL^eq| < 5',
    h12Status: 'Extended to 5D',
    h12Modification: 'Brane-collision / orbifold S¹/ℤ_2 geometric realization of the ekpyrotic bounce (Category C).',
    category: 'CATEGORY C — CONJECTURAL'
  },
  {
    component: '11. H11 Protocols P1–P6',
    h11Role: 'Preregistered 4D empirical tests (PTA, SiO_2, LiteBIRD, GW, CANNEX, LHC)',
    h11EquationOrValue: 'SHA-256: 57cf3f1c...048d',
    h12Status: 'Preserved Unchanged',
    h12Modification: 'The H11 protocols P1–P6 test 4D physics only; they do not confirm 5D. H12 adds distinct 5D protocols P7–P13.',
    category: 'CATEGORY A — ESTABLISHED'
  },
  {
    component: '12. Diffeomorphism & Microcausality Discipline',
    h11Role: 'No superluminal signaling; invariant observables only',
    h11EquationOrValue: '[φ(x), φ(y)] = 0 for spacelike (x − y)² > 0',
    h12Status: 'Extended to 5D',
    h12Modification: 'Follows directly from standard Lorentzian (−,+,+,+,+) metric signature in globally hyperbolic charts; preserves 5D null lightcones ds_5² ≤ 0 and quantum no-communication [O_A, O_B] = 0.',
    category: 'CATEGORY A — ESTABLISHED'
  }
];

export interface TemporalNotionRow {
  notion: string;
  symbol: string;
  mathematicalDefinition: string;
  physicalRole: string;
  foldsInH12: string;
  literatureComparison: string;
  category: H12EpistemicCategory;
}

export const SEVEN_TEMPORAL_NOTIONS: TemporalNotionRow[] = [
  {
    notion: '1. Coordinate Time',
    symbol: 't (or x⁰/c)',
    mathematicalDefinition: 'Foliation parameter on 5D chart (t, x^i, y); gauge-dependent',
    physicalRole: 'Global bookkeeping label; not directly measurable by local clocks',
    foldsInH12: 'Shifts under chart reparametrization; arrival coordinate time Δt_5 < Δt_4 defines bulk shortcut only for invariant null worldlines between fixed brane events',
    literatureComparison: 'Corresponds to standard Arnowitt–Deser–Misner (ADM) coordinate slicing time N dt; gauge-removable unless anchored to shared brane coincidence events A, B ∈ {y = 0}.',
    category: 'CATEGORY A — ESTABLISHED'
  },
  {
    notion: '2. 4D Brane Proper Time',
    symbol: 'τ_4',
    mathematicalDefinition: '∫ c⁻¹ √(−g_μν^(4) ẋ^μ ẋ^ν) dλ at y = 0',
    physicalRole: 'Elapsed tick of an ideal atomic/optical clock confined to the 4D brane',
    foldsInH12: 'Reference baseline against which 5D bulk twin paths are compared',
    literatureComparison: 'Matches textbook Misner–Thorne–Wheeler / Einstein Lorentzian worldline proper time along hypersurface y = 0.',
    category: 'CATEGORY A — ESTABLISHED'
  },
  {
    notion: '3. 5D Bulk Proper Time',
    symbol: 'τ_5',
    mathematicalDefinition: '∫ c⁻¹ √(−G_AB Ẋ^A Ẋ^B) dλ along γ ⊂ M_5',
    physicalRole: 'Elapsed tick of a hypothetical bulk-traversing physical clock',
    foldsInH12: 'Folds invariantly: η_fold = Δτ_5 / Δτ_4 < 1 under warped redshift or asymmetric bulk excursions',
    literatureComparison: 'Extends braneworld induced proper time (Chung & Freese [3]; Shiromizu, Maeda & Sasaki [4]) into metric G_AB with controllable lapse w_t(y).',
    category: 'CATEGORY B — DERIVED'
  },
  {
    notion: '4. Tomita–Takesaki Modular Time',
    symbol: 's_mod',
    mathematicalDefinition: 'Δ_ξ^{i s_mod} A Δ_ξ^{−i s_mod}, where Δ_ξ = e^{−K_ξ}',
    physicalRole: 'Intrinsic operator-algebraic automorphism parameter on causal-diamond algebra 𝒜(𝒪)',
    foldsInH12: 'Drives local clock rate via modular Hamiltonian spectral gap σ_1(K_ξ)',
    literatureComparison: 'Matches Borchers/Haag AQFT modular flow [17, 18] and generalizes Rovelli’s background-free modular group evolution via explicit spectral gap σ_1(K_ξ) [1, 20].',
    category: 'CATEGORY A — ESTABLISHED'
  },
  {
    notion: '5. QFI / Bures Information Time',
    symbol: 's_QFI',
    mathematicalDefinition: '∫ √(g_ij^QFI θ̇^i θ̇^j) dλ = 2 ∫ √(g_ij^Bures θ̇^i θ̇^j) dλ',
    physicalRole: 'Dimensionless distinguishability distance swept in projective Hilbert space PU(ℋ)',
    foldsInH12: 'Proportional to τ_5 via α_mod = ℏ/(E_mod σ_1(K_ξ)); 3.2937 × 10¹² rad for 2.16795 ms benchmark',
    literatureComparison: 'Doubles the Braunstein–Caves (1994) [10] / Wootters Bures statistical angle into physical clock arc length, remaining orthogonal to Page–Wootters clock-system entanglement.',
    category: 'CATEGORY B — DERIVED'
  },
  {
    notion: '6. KMS Thermal Time',
    symbol: 't_th = −ℏ β s_mod',
    mathematicalDefinition: 'Analytic strip 0 < Im(s_mod) < 1 with periodicity β = (k_B T)⁻¹',
    physicalRole: 'Equilibrium Unruh/Hawking/Gibbons–Hawking thermodynamic time scale',
    foldsInH12: 'Maps bulk surface gravity κ_5 to effective brane temperature T_eff',
    literatureComparison: 'Recovers the Connes–Rovelli (1994) Thermal Time Hypothesis [20] t_th = −ℏ β s_mod as the equilibrium restriction of IGRT modular flow.',
    category: 'CATEGORY A — ESTABLISHED'
  },
  {
    notion: '7. Cosmological FRW / Conformal Time',
    symbol: 't_FRW, η_conf',
    mathematicalDefinition: 'ds² = −dt_FRW² + a²(t) dΣ² = a²(η)(−dη² + dΣ²)',
    physicalRole: 'Comoving synchronous cosmic clock measuring expansion H(z)',
    foldsInH12: 'Subject to apparent acceleration corrections if M_4 embeds dynamically in M_5 (Ch. 11)',
    literatureComparison: 'Identical to standard FLRW cosmic and conformal clocks used in Planck/DESI cosmological perturbation theory.',
    category: 'CATEGORY A — ESTABLISHED'
  }
];

export interface BlackHoleClassRow {
  classId: string;
  label: string;
  metricSignatureAndForm: string;
  necStatus: string;
  portalViability: string;
  stabilityAndConstraints: string;
  category: H12EpistemicCategory;
}

export const SIX_BLACK_HOLE_CLASSES: BlackHoleClassRow[] = [
  {
    classId: 'Class A',
    label: '4D Classical Schwarzschild / Kerr',
    metricSignatureAndForm: 'ds² = −(1 − r_s/r)dt² + (1 − r_s/r)⁻¹dr² + r²dΩ²',
    necStatus: 'Vacuum T_μν = 0; NEC trivially satisfied (ρ + p_r = 0)',
    portalViability: 'NON-TRAVERSABLE. Einstein–Rosen bridge pinches off faster than light; spacelike singularity at r = 0.',
    stabilityAndConstraints: 'Established GR solution; exact baseline for LVK ringdowns.',
    category: 'CATEGORY A — ESTABLISHED'
  },
  {
    classId: 'Class B',
    label: '4D H11 Regular Hayward Black Hole',
    metricSignatureAndForm: 'f(r) = 1 − 2GMr²/(r³ + 2GMℓ_0²), ξ_0 = 2⁻¹/⁴',
    necStatus: 'Radial NEC ρ + p_r = 0 identically; transverse ρ + p_⊥ > 0 (verified at r_core = 2.539 × 10⁻²² m)',
    portalViability: 'NON-TRAVERSABLE. Smooth de Sitter core prevents singularity and produces K_echo = 0.184 ringdown echoes, NOT a portal.',
    stabilityAndConstraints: 'Inner Cauchy horizon saturates mass inflation at ρ_infl/ρ_Pl = 0.4094 (H11 App. P).',
    category: 'CATEGORY B — DERIVED'
  },
  {
    classId: 'Class C',
    label: '5D Brane-World Hayward with Tidal Charge',
    metricSignatureAndForm: 'f_5D(r) = 1 − (2GMr² + q_tidal R_AdS r)/(r³ + 2GMℓ_0²)',
    necStatus: 'Effective bulk Weyl projection E_μν mimics negative stress-energy if q_tidal < 0',
    portalViability: 'NON-PORTAL (horizon persists), unless extreme q_tidal removes horizon (naked/horizonless compact object).',
    stabilityAndConstraints: 'Subject to Gregory–Laflamme instability if bulk black string extends across R_AdS with r_+/R_AdS < 0.876.',
    category: 'CATEGORY B — DERIVED'
  },
  {
    classId: 'Class D',
    label: 'Black-Bounce / Simpson–Visser Hybrid',
    metricSignatureAndForm: 'ds² = −f(r)dt² + f(r)⁻¹dr² + (r² + a_0²)dΩ²',
    necStatus: 'NEC VIOLATED at bounce throat r = 0 whenever a_0 > r_s (ρ + p_r < 0)',
    portalViability: 'CONDITIONAL ONE-WAY / TWO-WAY BOUNCE depending on a_0 vs r_s; transitions smoothly from regular BH to wormhole as a_0 crosses 2GM.',
    stabilityAndConstraints: 'Requires effective NEC-violating matter or Horndeski/quantum backreaction near a_0.',
    category: 'CATEGORY C — CONJECTURAL'
  },
  {
    classId: 'Class E',
    label: 'Morris–Thorne Traversable Wormhole',
    metricSignatureAndForm: 'ds² = −e^{2Φ(r)}c²dt² + (1 − b(r)/r)⁻¹dr² + r²dΩ², b(r_0)=r_0, b\'(r_0)<1',
    necStatus: 'NEC STRICTLY VIOLATED everywhere near throat: (ρc² + p_r)|_{r_0} = −9.6309 × 10⁴² J/m³ at r_0 = 1 m',
    portalViability: 'TRAVERSABLE IN PRINCIPLE if supported by −1.064 × 10⁻³ M_⊙ (r_0=1 m) or −3.191 M_⊙ (r_0=3 km) exotic stress-energy.',
    stabilityAndConstraints: 'Blocked by Casimir/quantum inequality deficit of 10⁷¹ at macroscopic scales; quantum foam regime only at r_0 ~ ℓ_0 (ratio 0.2436).',
    category: 'CATEGORY B — DERIVED'
  },
  {
    classId: 'Class F',
    label: 'Holographic ER=EPR Quantum-Connected Pair',
    metricSignatureAndForm: 'AdS_5 Kruskal double-sided geometry dual to thermofield double |TFD⟩',
    necStatus: 'Ordinary boundary/bulk NEC forbids traversal unless double-trace boundary coupling O_L O_R injects negative null energy (Gao–Jafferis–Wall)',
    portalViability: 'CONJECTURAL / QUANTUM TELEPORTATION ANALOG ONLY; macroscopic traversable causal shortcuts remain unestablished in asymptotically flat 4D.',
    stabilityAndConstraints: 'Strictly preserves no-communication theorem; cannot transmit FTL signals without classical channel.',
    category: 'CATEGORY C — CONJECTURAL'
  }
];

export interface PortalMechanismRow {
  id: number;
  mechanism: string;
  tier: 'Tier 1 (Established Physics / Zero Portal)' | 'Tier 2 (Benchtop Metric Analog Only)' | 'Tier 3 (Marginal Perturbative Effect)' | 'Tier 4 (Quantum-Scale Only)' | 'Tier 5 (Physically Unrealizable at Macro Scales)';
  physicalAction: string;
  quantitativeObstacleOrLimit: string;
  category: H12EpistemicCategory;
}

export const ELEVEN_PORTAL_MECHANISMS: PortalMechanismRow[] = [
  {
    id: 1,
    mechanism: '1. Controlled Classical Gravitational Focusing',
    tier: 'Tier 1 (Established Physics / Zero Portal)',
    physicalAction: 'Converges null rays via positive energy T_μν (Raychaudhuri focusing R_μν k^μ k^ν ≥ 0).',
    quantitativeObstacleOrLimit: 'Strictly increases focusing and forms horizons/singularities; CANNOT create flare-out (b\' < 1).',
    category: 'CATEGORY A — ESTABLISHED'
  },
  {
    id: 2,
    mechanism: '2. High-Intensity Electromagnetic Fields',
    tier: 'Tier 1 (Established Physics / Zero Portal)',
    physicalAction: 'Maxwell stress tensor satisfies ρ + p_r ≥ 0 and weak/dominant energy conditions everywhere.',
    quantitativeObstacleOrLimit: 'Even Schwinger limit E_S = 1.32 × 10¹⁸ V/m creates e⁺e⁻ pairs, not NEC violation.',
    category: 'CATEGORY A — ESTABLISHED'
  },
  {
    id: 3,
    mechanism: '3. Coherent Quantum States (Squeezed Light)',
    tier: 'Tier 3 (Marginal Perturbative Effect)',
    physicalAction: 'Locally dips ⟨:T_00:⟩ < 0 between positive-energy pulses via squeezed vacuum interference.',
    quantitativeObstacleOrLimit: 'Strictly constrained by Ford–Roman quantum inequalities (∫ ρ(t) w(t) dt ≥ −C ℏ / τ⁴); cannot sustain static macro throats.',
    category: 'CATEGORY A — ESTABLISHED'
  },
  {
    id: 4,
    mechanism: '4. Casimir Vacuum Engineering',
    tier: 'Tier 4 (Quantum-Scale Only)',
    physicalAction: 'Conducting boundaries exclude EM vacuum modes: ρ_Casimir = −π²ℏc / (720 d⁴) < 0.',
    quantitativeObstacleOrLimit: 'At r_0 = 1 m: Casimir density is 4.50 × 10⁻⁷¹ of wormhole NEC requirement; matches O(1) (0.2436) only at Planck gap d ~ ℓ_0.',
    category: 'CATEGORY B — DERIVED'
  },
  {
    id: 5,
    mechanism: '5. Bulk Vacuum / Radion–Horndeski Brane Engineering',
    tier: 'Tier 3 (Marginal Perturbative Effect)',
    physicalAction: 'Effective cubic Galileon / Araki scalar T_μν^(eff) can violate NEC transiently during bounce/phantom episodes.',
    quantitativeObstacleOrLimit: 'Local Vainshtein screening Z_ψ = 7.05 × 10¹⁴ suppresses terrestrial fifth forces and prevents unscreened macro metric jumps.',
    category: 'CATEGORY C — CONJECTURAL'
  },
  {
    id: 6,
    mechanism: '6. Superconducting Cavities & Metamaterials',
    tier: 'Tier 2 (Benchtop Metric Analog Only)',
    physicalAction: 'Modulates phase velocity, refractive index n(r), and effective dispersion metric for photons/phonons.',
    quantitativeObstacleOrLimit: 'Couples to electromagnetic permittivity, NOT spacetime Ricci curvature G_μν (no gravitational metric shortcut).',
    category: 'CATEGORY A — ESTABLISHED'
  },
  {
    id: 7,
    mechanism: '7. High-Energy Particle Collisions (HL-LHC / 100 TeV)',
    tier: 'Tier 4 (Quantum-Scale Only)',
    physicalAction: 'Probes virtual/real KK gravitons if M_5 ~ TeV; constrains Φ_portal in H11 Protocol P6.',
    quantitativeObstacleOrLimit: 'If TeV-scale micro black holes formed, Hawking evaporation occurs in ~10⁻²⁶ s (not stable traversable portals).',
    category: 'CATEGORY B — DERIVED'
  },
  {
    id: 8,
    mechanism: '8. Macroscopic Quantum Entanglement (ER=EPR)',
    tier: 'Tier 2 (Benchtop Metric Analog Only)',
    physicalAction: 'In AdS/CFT toy models, dualizes entangled states to non-traversable wormholes rendered marginally traversable via classical O_L O_R coupling.',
    quantitativeObstacleOrLimit: 'Requires external classical channel; 0 bits FTL capacity; untested in flat 4D spacetime.',
    category: 'CATEGORY C — CONJECTURAL'
  },
  {
    id: 9,
    mechanism: '9. Resonant Optical Cavities & Interferometers',
    tier: 'Tier 2 (Benchtop Metric Analog Only)',
    physicalAction: 'Accumulates extreme phase sensitivity (δφ < 10⁻⁶ rad) to test QFI metric corrections and modular phase shifts (P9).',
    quantitativeObstacleOrLimit: 'Precision measurement sensor, not an actuator of 5D bulk curvature.',
    category: 'CATEGORY A — ESTABLISHED'
  },
  {
    id: 10,
    mechanism: '10. Modular Clock Networks & Optical Lattices',
    tier: 'Tier 2 (Benchtop Metric Analog Only)',
    physicalAction: 'Realizes engineered modular Hamiltonians K_ξ and tests δν/ν ~ 10⁻¹⁹ gravitational redshift residuals (P8).',
    quantitativeObstacleOrLimit: 'Tests proper-time folding η_fold from potential gradients, does not transport matter across extra dimensions.',
    category: 'CATEGORY B — DERIVED'
  },
  {
    id: 11,
    mechanism: '11. Coherent 5D Kaluza–Klein Mode Excitation',
    tier: 'Tier 5 (Physically Unrealizable at Macro Scales)',
    physicalAction: 'Excites massive KK gravitons (m_KK ≥ 4.485 meV) into the bulk coordinate y.',
    quantitativeObstacleOrLimit: 'Gravitational cross-section σ ~ G² E² / c⁸ suppresses bulk graviton production rates by ~10⁻⁶⁰ in laboratory apparatus.',
    category: 'CATEGORY B — DERIVED'
  }
];

export interface DeviceTenFieldSpec {
  deviceId: string;
  name: string;
  category: H12EpistemicCategory;
  physicalPrinciple: string;
  governingEquations: string;
  architecture: string;
  operatingRegime: string;
  predictedSignal: string;
  noiseFloor: string;
  engineeringFeasibility: string;
  whatItActuallyTests: string;
  whatItDoesNotDo: string;
  failureCriteria: string;
}

export const SIX_PROPOSED_DEVICES: DeviceTenFieldSpec[] = [
  {
    deviceId: 'Device A',
    name: 'Modular Resonance Detector (Optical-Lattice & Trap QFI Probe)',
    category: 'CATEGORY B — DERIVED',
    physicalPrinciple: 'Measures SLD Quantum Fisher Information rate √(g_ij^QFI θ̇^i θ̇^j) vs. atomic proper time τ along driven Floquet-modular trajectories.',
    governingEquations: 'dτ = [ℏ/(E_mod σ_1(K_ξ))] √(g_ij^QFI θ̇^i θ̇^j) dλ',
    architecture: 'Dual Sr-87 / Yb-171 optical lattice clocks (10⁻¹⁹ stability) coupled to programmable Raman-driven synthetic gauge fields.',
    operatingRegime: 'Ultra-high vacuum 10⁻¹¹ Torr, T ~ 1 μK, modulation frequencies 1 Hz–100 kHz.',
    predictedSignal: 'Exact 1:1 scaling between accumulated Bures geodesic arc s_QFI and Ramsey phase uncertainty Δφ_CRB = 1/√(N F_Q); null 5D drift |δν/ν| < 10⁻¹⁹ (P8).',
    noiseFloor: 'Quantum projection noise 2 × 10⁻¹⁹ / √(τ/s); blackbody radiation shift < 10⁻¹⁹.',
    engineeringFeasibility: 'HIGH (Near-Term, 2026–2030): All subsystems exist at JILA / PTB / RIKEN.',
    whatItActuallyTests: 'Tests H11/H12 QFI clock law (Eq. H12.0.2) and bounds unshielded modular/5D drift.',
    whatItDoesNotDo: 'Does NOT alter spacetime metric G_AB or induce backward time travel.',
    failureCriteria: 'Falsifies modular scaling if measured Δτ deviates from QFI speed limit outside 3σ systematic envelope, or detects anomalous dispersion violating Lorentz invariance.'
  },
  {
    deviceId: 'Device B',
    name: '5D Geometric Resonator (CANNEX-Class Sub-10 μm Casimir–Yukawa Plate)',
    category: 'CATEGORY B — DERIVED',
    physicalPrinciple: 'Searches for non-Newtonian Yukawa deviations V_5D(r) = −(GMm/r)(1 + α_KK e^{−r/R_5}) arising from compact or warped fifth-dimension graviton modes.',
    governingEquations: 'ΔP_KK(d) = −2π G σ_1 σ_2 α_KK R_5 e^{−d/R_5}  (S¹: α_KK = 2)',
    architecture: 'Electrostatic-shielded cryogenic parallel-plate interferometer (gap d = 3–30 μm) suppressing Casimir background via thin gold-coated dielectric membrane.',
    operatingRegime: 'Cryogenic 4.2 K, seismic isolation < 10⁻¹² m/√Hz at 10 Hz, gap d = 5–20 μm.',
    predictedSignal: 'If R_5 ∈ [10, 44] μm exists, exponential force residual exceeds 10⁻¹⁰ N/m² threshold (P7 reach m_KK = 19.733 meV); simultaneously probes H11 Chameleon P5.',
    noiseFloor: 'Patch-potential electrostatic noise & thermal Brownian cantilever noise ~ 3 × 10⁻¹¹ N/m².',
    engineeringFeasibility: 'HIGH (Near-Term, 2026–2029): Direct upgrade of CANNEX & Washington Eöt-Wash apparatus.',
    whatItActuallyTests: 'Directly constrains compact extra dimension radius R_5 < 10 μm and 5D Yukawa coupling α_KK.',
    whatItDoesNotDo: 'Does NOT excite macroscopic portals or stabilize wormhole throats (Casimir deficit remains 10⁵⁹ at 1 μm).',
    failureCriteria: 'Null detection down to 10⁻¹¹ N/m² rules out compact flat S¹ extra dimensions down to R_5 < 10 μm (m_KK > 19.733 meV).'
  },
  {
    deviceId: 'Device C',
    name: 'Temporal Folding Simulator (Asymmetric Optical/Circuit Analog Metric)',
    category: 'CATEGORY D — SPECULATIVE ENGINEERING',
    physicalPrinciple: 'Realizes an effective 2+1D asymmetric Gordon optical metric ds_eff² = −c²/n(y)² dt² + dx² + dy² to demonstrate Beltrami geodesic shortcuts in a laboratory analog medium.',
    governingEquations: 'δ ∫ c n_eff(y)⁻¹ √(1 + y\'²) dx = 0  (analogous to Model 2B η_fold < 1)',
    architecture: 'Graded-index (GRIN) photonic crystal waveguide slab where index n(y) decreases away from the reference edge y = 0.',
    operatingRegime: '1550 nm pulsed femtosecond laser, index contrast Δn/n ≈ 0.35 over slab width W = 500 μm.',
    predictedSignal: 'Wavepackets plunging into low-index bulk layers arrive earlier than surface-guided wavepackets (η_fold_analog ≈ 0.74), visually reproducing Ch. 4 Model 2B geodesics.',
    noiseFloor: 'Chromatic waveguide dispersion ±15 fs; modal scattering loss < 0.2 dB/cm.',
    engineeringFeasibility: 'HIGH (Benchtop Photonics Analog): Immediate demonstration of curved-metric geodesic shortcuts.',
    whatItActuallyTests: 'Validates variational Beltrami solver dynamics and differential optical path folding.',
    whatItDoesNotDo: 'Does NOT exceed vacuum speed c (n ≥ 1 strictly) and does NOT warp real spacetime curvature.',
    failureCriteria: 'Signal loss or failure to match variational Euler–Lagrange arrival profile within ±2% of refractive index calibration.'
  },
  {
    deviceId: 'Device D',
    name: 'Quantum Interference Modulator (Double-Slit SLD Fisher Interferometer)',
    category: 'CATEGORY B — DERIVED',
    physicalPrinciple: 'Probes exact complementarity V² + D_QFI² = 1 across tunable which-path overlap γ_coh ∈ [0, 1] and bounds anomalous 5D decoherence/phase shifts |δV_5D| < 10⁻⁶.',
    governingEquations: 'F_Q(φ) = γ_coh²,  V = γ_coh,  D_QFI = √(1 − γ_coh²)  ⇒  V² + D_QFI² = 1',
    architecture: 'Mach–Zehnder / Talbot–Lau matter-wave interferometer with controllable polarization/ancilla path marker.',
    operatingRegime: 'Single-photon or Cs-133 atom beam, phase stabilization < 10⁻⁷ rad.',
    predictedSignal: 'Sweeping γ_coh traces unit circle V² + D_QFI² = 1 within shot noise; any 5D bulk-decoherence term ΔV_5D > 10⁻⁶ is excluded at >5σ (Protocol P9).',
    noiseFloor: 'Shot-noise floor 1/√N ≈ 10⁻⁷ for N = 10¹⁴ integrated counts.',
    engineeringFeasibility: 'HIGH (Immediate Laboratory Implementation): Standard quantum-optics testbed.',
    whatItActuallyTests: 'Tests SLD QFI complementarity identity and bounds anomalous bulk-coupling phase errors.',
    whatItDoesNotDo: 'Does NOT route particles through a spatial 5th dimension nor derive Born\'s rule from geometry.',
    failureCriteria: 'Violation of V² + D_QFI² ≤ 1 (impossible in standard QM) or reproducible unshielded phase anomaly violating Lorentz bounds.'
  },
  {
    deviceId: 'Device E',
    name: 'Higher-Dimensional Connectivity Detector (3G GW & Qubit ER=EPR Dual Probe)',
    category: 'CATEGORY C — CONJECTURAL',
    physicalPrinciple: 'Operates on two tracks: (E1) 3G gravitational-wave polarization decomposition for KK/bulk leakage |h_scalar/h_tensor|; (E2) superconducting qubit circuit simulation of Gao–Jafferis–Wall traversable teleportation.',
    governingEquations: 'h_AB = h_TT^(4D) + h_scalar^(rad) e_AB^(b) + ∑_n h_AB^(KK,n) e^{−m_n y}',
    architecture: 'Triangular Einstein Telescope + Cosmic Explorer network (E1); 50-qubit Sycamore/Willow-class processor running TFD scrambler (E2).',
    operatingRegime: '10 Hz–3 kHz GW band at SNR > 100 (E1); 20 mK dilution refrigerator (E2).',
    predictedSignal: '3G network bounds scalar/KK ringdown leakage below 10⁻³ alongside H11 K_echo = 0.184 (Protocol P10); qubit circuit reproduces SYK-like OTOC teleportation peak.',
    noiseFloor: 'Quantum radiation-pressure + Newtonian gravity-gradient noise at 10 Hz (~10⁻²⁴ / √Hz).',
    engineeringFeasibility: 'MEDIUM–LONG TERM: Qubit analog now; 3G GW network 2035+.',
    whatItActuallyTests: 'Constraints on extra-dimensional GW energy loss and holographic scrambling dynamics.',
    whatItDoesNotDo: 'Does NOT open macroscopic wormholes or allow superluminal communication.',
    failureCriteria: 'Absence of scalar/KK ringdown polarization above 10⁻³ excludes TeV-scale bulk leakage scenarios.'
  },
  {
    deviceId: 'Device F',
    name: 'Black-Hole Analog Portal Simulator (BEC Sonic Horizon & Hayward Echo Rig)',
    category: 'CATEGORY B — DERIVED',
    physicalPrinciple: 'Simulates acoustic Hawking radiation and Hayward-like subcritical core reflection (K_echo = 0.184 analog) in a transonic Bose–Einstein condensate.',
    governingEquations: 'ds_acoustic² = (ρ_0/c_s) [ −(c_s² − v²) dt² − 2 v_i dx^i dt + δ_ij dx^i dx^j ]',
    architecture: 'Quasi-1D Rb-87 BEC waterfall trap with dual Feshbach-tunable sound speed step mimicking regularized core barrier.',
    operatingRegime: 'T ≈ 50 nK, c_s ≈ 1.5 mm/s, condensate lifetime 500 ms.',
    predictedSignal: 'Correlated Hawking phonon pairs across sonic horizon plus quantized post-horizon acoustic reflection pulse matching tortoise-potential reflectivity.',
    noiseFloor: 'Thermal phonon background ~ 0.15 quanta per mode.',
    engineeringFeasibility: 'HIGH (Demonstrated Platform): Extends Steinhauer-type acoustic horizon experiments.',
    whatItActuallyTests: 'Verifies tortoise-barrier echo dynamics, QES entanglement entropy growth, and wave scattering.',
    whatItDoesNotDo: 'Does NOT test NEC violation in Einstein gravity or construct real spacetime horizons.',
    failureCriteria: 'Discrepancy between measured acoustic Bogoliubov spectrum and effective metric scattering matrix.'
  }
];

export interface ProtocolH12Row {
  id: string;
  name: string;
  targetObservable: string;
  relationToH11: string;
  numericalSensitivity: string;
  falsificationCriterion: string;
  timeline: string;
  category: H12EpistemicCategory;
}

export const H12_PROTOCOLS_P7_TO_P10: ProtocolH12Row[] = [
  {
    id: 'P7',
    name: 'Short-Range KK Gravity & Radion Screening (Tests 5D Bulk, NOT Folding)',
    targetObservable: 'Yukawa force residual α_KK e^{−d/R_5} across 5–44 μm',
    relationToH11: 'Tests the compact 5D bulk hypothesis rather than temporal folding; shares CANNEX hardware with H11 P5 via orthogonal exponential vs. power-law pressure template.',
    numericalSensitivity: 'Reach R_5 = 10 μm ⇒ m_KK^(1) = 19.733 meV (improving 44 μm / 4.485 meV baseline by 4.4×)',
    falsificationCriterion: 'Null detection down to 10⁻¹¹ N/m² excludes flat S¹ extra dimensions with R_5 ≥ 10 μm.',
    timeline: '2026–2030',
    category: 'CATEGORY B — DERIVED'
  },
  {
    id: 'P8',
    name: 'Optical & Nuclear Clock Residual (Tests KK Corrections, NOT Bulk Trajectory Folding)',
    targetObservable: 'Fractional frequency residual δν/ν vs. driven modular Fisher / KK drift',
    relationToH11: 'Tests local KK loop corrections and state-space QFI scaling (NOT macroscopic bulk trajectory shortcuts); extends H11 P1 from ULDM lock to local clock bounds.',
    numericalSensitivity: '|δν/ν| ≤ 10⁻¹⁹ across Sr-87 lattice & Th-229 transitions (4.972 × 10⁻¹⁴ KK ceiling at 1 neV easily compatible)',
    falsificationCriterion: 'Any reproducible discrepancy outside GR redshift + QFI scaling falsifies unshielded bulk-brane detuning.',
    timeline: '2027–2032',
    category: 'CATEGORY B — DERIVED'
  },
  {
    id: 'P9',
    name: 'Quantum Double-Slit Visibility Bound (Tests Decoherence, NOT 5D Spatial Transit)',
    targetObservable: 'Complementarity saturation V² + D_QFI² and 5D decoherence drift δV_5D',
    relationToH11: 'Tests anomalous decoherence against the SLD Fisher complementarity identity on PU(ℋ) (does NOT test physical travel through y or bulk folding).',
    numericalSensitivity: '|δV_5D| < 10⁻⁶ at N = 10¹⁴ events; verifies V² + D_QFI² = 1 to 10⁻⁷',
    falsificationCriterion: 'Null result bounds environmental/5D dephasing |δφ_5D| < 10⁻⁶; deviation above 10⁻⁶ falsifies strict fiber isolation unless environmental noise is identified.',
    timeline: '2026–2029',
    category: 'CATEGORY B — DERIVED'
  },
  {
    id: 'P10',
    name: '3G Gravitational-Wave KK Ringdown & Bulk Leakage (Tests Graviton Leakage, NOT Shortcuts)',
    targetObservable: 'Scalar/breathing polarization amplitude |h_scalar / h_tensor| & echo train',
    relationToH11: 'Tests 5D graviton leakage into extra dimensions (NOT Beltrami geodesic shortcuts); augments H11 P4 (K_echo = 0.184) with ET/CE tensor-scalar decomposition.',
    numericalSensitivity: 'Einstein Telescope / Cosmic Explorer limit |h_scalar / h_tensor| ≤ 10⁻³ at SNR ≥ 100',
    falsificationCriterion: 'Non-detection of scalar polarization or excess luminosity-distance dimming d_L^GW / d_L^EM ≠ 1 rules out large-volume 5D gravitational leakage.',
    timeline: '2035+',
    category: 'CATEGORY C — CONJECTURAL'
  }
];

export const H12_PROTOCOLS_P11_TO_P13: ProtocolH12Row[] = [
  {
    id: 'P11',
    name: 'Direct Bulk Temporal Folding Trajectory Test (η_fold ≡ Δτ_5 / Δτ_4)',
    targetObservable: 'Direct proper-time & arrival asymmetry between a 4D brane-confined clock and a physical bulk-detouring clock/pulse connecting fixed events A, B ∈ M_4',
    relationToH11: 'Targets Model 2B temporal folding directly rather than indirect KK Yukawa or GW leakage; requires leaving y = 0 and re-entering at y = 0.',
    numericalSensitivity: 'Target resolution |η_fold − 1| ~ 10⁻⁵ across baseline Δx (Category C theoretical threshold; hardware infeasible today)',
    falsificationCriterion: 'Directly tests Asymmetric Bulk Model 2B; protocols P11–P12 test the folding mechanism, but no current experiment can achieve the required sensitivity.',
    timeline: 'Far-Future / Conceptual (Not Currently Achievable)',
    category: 'CATEGORY D — SPECULATIVE ENGINEERING'
  },
  {
    id: 'P12',
    name: 'Asymmetric Warped Bulk Gauge-Field Birefringence & Dispersion Search (Tests Folding, Untestable Now)',
    targetObservable: 'Frequency- or polarization-dependent arrival offset δc/c induced by differential coupling of bulk-accessible gauge modes to w_t(y) ≠ w_x(y)',
    relationToH11: 'Tests the folding mechanism via bulk gauge dispersion rather than static 5D Yukawa bounds; however, controlled bulk-gauge penetration ϵ_bulk cannot currently be achieved.',
    numericalSensitivity: 'Requires bulk gauge penetration fraction ϵ_bulk and Lorentz-violation sensitivity |Δc/c| < 10⁻¹⁸ across astrophysical gamma/radio baselines or cavity tests',
    falsificationCriterion: 'Null dispersion rules out unshielded asymmetric gauge leakage proportional to ϵ_bulk (α_t + α_x); Protocols P11–P12 test the folding mechanism, but no current experiment can achieve the required sensitivity.',
    timeline: 'Long-Term / Not Currently Achievable',
    category: 'CATEGORY C — CONJECTURAL'
  },
  {
    id: 'P13',
    name: 'Direct Passive Multi-Messenger Arrival Asymmetry Test (Passive Bound, Not Active Folding Test)',
    targetObservable: 'Differential coordinate arrival ratio η_fold^{GW−EM} − 1 ≡ c (Δt_GW − Δt_EM) / D_L comparing brane-bound photons against bulk-accessible gravitons',
    relationToH11: 'Protocol P13 is a passive bound from existing multi-messenger data, not an active test of the folding mechanism; complements H11 tensor speed checks.',
    numericalSensitivity: 'GW170817 / GRB 170817A baseline (D_L = 40 Mpc, |Δt_{GW−EM}| ≤ 1.7 s) yields |η_fold^{GW−EM} − 1| ≤ 4.129 × 10⁻¹⁶ (conservative 26 Mpc: 6.353 × 10⁻¹⁶); 3G 150-BNS stack pushes to 9.916 × 10⁻¹⁹',
    falsificationCriterion: 'Passive null agreement |Δt_{GW−EM}| ≤ 1.7 s bounds natural tensor-vs-photon bulk folding to < 4.129 × 10⁻¹⁶; genuine non-zero arrival precedence (> 5σ after intrinsic source lag) would flag asymmetric bulk transit.',
    timeline: 'Active Now (GW170817 Archive) & 2026–2035+ Multi-Messenger',
    category: 'CATEGORY B — DERIVED'
  }
];

export const H12_ALL_PROTOCOLS: ProtocolH12Row[] = [...H12_PROTOCOLS_P7_TO_P10, ...H12_PROTOCOLS_P11_TO_P13];

export interface H12AppendixItem {
  letter: string;
  anchorId: string;
  title: string;
  category: H12EpistemicCategory;
  summary: string;
  equations: H12Equation[];
  bodyParagraphs: string[];
}

export const H12_APPENDICES: H12AppendixItem[] = [
  {
    letter: 'A',
    anchorId: 'h12-app-a',
    title: 'Complete 5D Tensor Derivations: Christoffel Symbols, Riemann & Extrinsic Curvature',
    category: 'CATEGORY B — DERIVED',
    summary: 'Explicit 4+1 ADM/Gauss–Codazzi decomposition of the 5D bulk metric G_AB into brane metric g_μν, radion Φ_rad, shift N_μ, and extrinsic curvature K_μν.',
    equations: [
      {
        label: '(A.1)',
        category: 'CATEGORY B — DERIVED',
        unicodeHtml: 'Γ<sup><i>A</i></sup><sub><i>BC</i></sub> = ½ <i>G</i><sup><i>AD</i></sup> (∂<sub><i>B</i></sub> <i>G</i><sub><i>DC</i></sub> + ∂<sub><i>C</i></sub> <i>G</i><sub><i>BD</i></sub> − ∂<sub><i>D</i></sub> <i>G</i><sub><i>BC</i></sub>), &nbsp;&nbsp; <i>K</i><sub>μν</sub> = (2 Φ<sub>rad</sub>)<sup>−1</sup> (∂<sub><i>y</i></sub> <i>g</i><sub>μν</sub> − ∇<sub>(μ</sub> <i>N</i><sub>ν)</sub>)',
        plainText: 'Gamma^A_{BC} = 1/2 G^{AD} (d_B G_{DC} + d_C G_{BD} - d_D G_{BC}), K_{mu nu} = (2 Phi_rad)^{-1} (d_y g_{mu nu} - nabla_{(mu} N_{nu)})',
        caption: '5D Levi-Civita connection and extrinsic curvature of constant-y hypersurfaces Σ_y.'
      },
      {
        label: '(A.2)',
        category: 'CATEGORY B — DERIVED',
        unicodeHtml: '<sup>(5)</sup><i>R</i><sub>μνρσ</sub> = <sup>(4)</sup><i>R</i><sub>μνρσ</sub> − <i>K</i><sub>μρ</sub><i>K</i><sub>νσ</sub> + <i>K</i><sub>μσ</sub><i>K</i><sub>νρ</sub>, &nbsp;&nbsp; <sup>(5)</sup><i>R</i> = <sup>(4)</sup><i>R</i> − <i>K</i><sup>2</sup> + <i>K</i><sub>μν</sub><i>K</i><sup>μν</sup> + 2 ∇<sub><i>A</i></sub>(<i>n</i><sup><i>A</i></sup> <i>K</i> − <i>a</i><sup><i>A</i></sup>)',
        plainText: '(5)R_{mu nu rho sigma} = (4)R_{mu nu rho sigma} - K_{mu rho}K_{nu sigma} + K_{mu sigma}K_{nu rho}',
        caption: 'Exact Gauss–Codazzi identity relating bulk 5D curvature to intrinsic 4D brane curvature and extrinsic bending.'
      }
    ],
    bodyParagraphs: [
      'In Gaussian normal coordinates X^A = (x^μ, y) with shift N_μ = 0 and unit spacelike normal n^A = (0, Φ_rad⁻¹) orthogonal to constant-y slices Σ_y, expanding the 5D Riemann contraction yields ⁵R = ⁵R^μ_{νμν} + 2 ⁵R^y_{μyν} G^{μν}, with non-vanishing bulk Christoffel components Γ^y_{00} = α_t k e^{2α_t k|y|} Φ_rad⁻² c², Γ^y_{ij} = α_x k e^{−2α_x k|y|} Φ_rad⁻² g_{ij}^(3), Γ^0_{y0} = α_t k, and Γ^i_{yj} = −α_x k δ^i_j.',
      'Substituting the asymmetric bulk metric Eq. (H12.0.1) with Φ_rad = 1 gives K^0_0 = α_t k, K^i_j = −α_x k δ^i_j, trace K = (α_t − 3 α_x) k, K_{μν}K^{μν} = (α_t² + 3 α_x²) k², ⁵R = ⁴R − (2 α_t² − 6 α_t α_x + 12 α_x²) k², and exact mixed Einstein tensor components G^0_0 = 6 α_x² k², G^i_i = (α_t² − 2 α_t α_x + 3 α_x²) k², G^y_y = 3(α_x² − α_t α_x) k², reducing cleanly in conformal RS (α_t = −1, α_x = +1) [2] to ⁵G^A_B = 6 k² δ^A_B and ⁵R = −20 k². Independent finite-difference differentiation of G_AB(y) → Γ^A_{BC}(y) → ⁵R^A_B → ⁵G^A_B in scripts/verify-igrt-h12.mjs (Assertion 72) matches these exact polynomials to < 10⁻⁶ and satisfies the contracted Bianchi identity ∇_A ⁵G^A_y = ∂_y ⁵G^y_y + Γ^0_{y0}(⁵G^y_y − ⁵G^0_0) + 3 Γ^x_{yx}(⁵G^y_y − ⁵G^x_x) = 0 to < 10⁻⁷.',
      'Exact 5D Null Energy Condition Obstruction Theorem (Assertion 73): Contracting the 5D field equation ⁵G^A_B + Λ_5 δ^A_B = 8π G_5 T^A_B with any bulk null vector k^A cancels the cosmological constant identically (Λ_5 k_A k^A = 0), giving directional NEC combinations −G^0_0 + G^x_x = (α_t − 3 α_x)(α_t + α_x) k² and −G^0_0 + G^y_y = −3 α_x (α_t + α_x) k². Consequently, every unbounded-span shortcut branch requiring α_x > 0 with α_t + α_x > 0 strictly violates the 5D Null Energy Condition along y (and phenomenological Model 2B α_t = α_x = 0.5 violates 5D NEC in BOTH x at −1.0 k² and y at −1.5 k²), whereas the ghost-free 5D Einstein–Maxwell bulk (α_t = 1.0, α_x = 0.0) satisfies 5D NEC (+k² along x and 0 along y) while bounding geodesic spans cleanly at k Δx < π.'
    ]
  },
  {
    letter: 'B',
    anchorId: 'h12-app-b',
    title: 'Five-Dimensional Einstein–Araki Field Equations, Quantum Backreaction & Ghost-Free Einstein–Maxwell Bulk',
    category: 'CATEGORY B — DERIVED',
    summary: 'Variational derivation of 5D bulk equations including 1-loop renormalized brane vacuum backreaction ⟨τ_μν^vac⟩ alongside GHY cancellation, Israel junction conditions, and exact ghost-free 5D Einstein–Maxwell–Λ_5 asymmetric solution.',
    equations: [
      {
        label: '(B.1)',
        category: 'CATEGORY B — DERIVED',
        unicodeHtml: '<sup>(5)</sup><i>G</i><sup><i>A</i></sup><sub><i>B</i></sub> + Λ<sub>5</sub> δ<sup><i>A</i></sup><sub><i>B</i></sub> = 8π <i>G</i><sub>5</sub> (<i>T</i><sup><i>A</i></sup><sub><i>B</i></sub><sup>(EM)</sup> + <i>I</i><sup><i>A</i></sup><sub><i>B</i></sub><sup>(5)</sup> + [σ<sub>brane</sub> <i>g</i><sub>μν</sub> + ⟨τ<sub>μν</sub><sup>vac</sup>⟩] δ<sup>μ</sup><sub><i>A</i></sub> δ<sup>ν</sup><sub><i>B</i></sub> δ(<i>y</i>))',
        plainText: '(5)G^A_B + Lambda_5 delta^A_B = 8 pi G_5 (T^A_B^(EM) + I^A_B^(5) + [sigma_brane g_{mu nu} + <tau_{mu nu}^{vac}>] delta^mu_A delta^nu_B delta(y))',
        caption: '5D Einstein–Maxwell–Araki field equations with localized brane tension and 1-loop quantum backreaction at y = 0.'
      },
      {
        label: '(B.2)',
        category: 'CATEGORY B — DERIVED',
        unicodeHtml: '[ <i>K</i><sub>μν</sub> − <i>g</i><sub>μν</sub> <i>K</i> ]<sub><i>y</i>=0<sup>−</sup></sub><sup><i>y</i>=0<sup>+</sup></sup> = −8π <i>G</i><sub>5</sub> (σ<sub>brane</sub> <i>g</i><sub>μν</sub> + τ<sub>μν</sub><sup>(4)</sup> + ⟨τ<sub>μν</sub><sup>vac</sup>⟩), &nbsp;&nbsp; <sup>(4)</sup><i>G</i><sub>μν</sub> = 8π <i>G</i><sub>4</sub> (<i>T</i><sub>μν</sub> + <i>I</i><sub>μν</sub>) + <i>E</i><sub>μν</sub> + Π<sub>μν</sub>',
        plainText: '[K_{mu nu} - g_{mu nu} K] = -8 pi G_5 (sigma_brane g_{mu nu} + tau_{mu nu} + <tau_{mu nu}^{vac}>), (4)G_{mu nu} = 8 pi G_4 (T_{mu nu} + I_{mu nu}) + E_{mu nu} + Pi_{mu nu}',
        caption: 'Semiclassical Israel–Darmois junction condition and Shiromizu–Maeda–Sasaki projected 4D brane Einstein equation.'
      }
    ],
    bodyParagraphs: [
      'A well-posed semiclassical variational principle on the ℤ_2 orbifold bulk M_5 with brane boundary ∂M_5 = {y = 0} supplements the bulk Einstein–Araki integral S_5 = ∫ d⁵X √(−G)[(⁵R − 2Λ_5)/(16π G_5) + ℒ_ψ^(5) + ℒ_EM] with the 5D Gibbons–Hawking–York surface term S_GHY = (8π G_5)⁻¹ ∫_{∂M_5} d⁴x √(−g) [K] and the 1-loop effective boundary action Γ_1-loop[g, Φ_rad]. Executing the Palatini identity δ(√−G ⁵R) = √−G (⁵G_{AB} δG^{AB} + ∇_C W^C) yields δS_total / δG^{AB} = 0 ⇒ ⁵G^A_B + Λ_5 δ^A_B = 8π G_5 (T^A_B^(EM) + I^A_B^(5) + [σ_brane g_μν + ⟨τ_μν^vac⟩] δ^μ_A δ^ν_B δ(y)), canceling all normal-derivative δG_{AB,y} terms on y = 0 via Israel junction [K_{μν} − g_{μν} K]⁺_− = −8π G_5 (σ_brane g_{μν} + τ_{μν} + ⟨τ_{μν}^vac⟩) and projecting Shiromizu–Maeda–Sasaki [4] brane gravity. In conformal RS (α_t = −1, α_x = +1, Λ_5 = −6k²/(8π G_5) equiv −6k² in ⁵G^A_B + Λ_5 δ^A_B = 0), this vacuum equation holds identically everywhere.',
      'Exact Ghost-Free Asymmetric Bulk Solution (5D Einstein–Maxwell–Λ_5) vs. NEC-Violating (0.5, 0.5) Ansatz: Setting canonical Maxwell kinetic term ℒ_EM = −¼ F_{AB} F^{AB} with electric flux F_{0y} = E_0 e^{k|y|} satisfying ∂_y(√−G F^{0y}) = 0 yields strictly NEC-satisfying stress tensor T^0_0 = −½ E_0², T^i_i = +½ E_0², T^y_y = −½ E_0². With α_t = 1, α_x = 0, Λ_5 = −½ k², and 8π G_5 E_0² = k², App. A gives G^0_0 + Λ_5 = −½ k² = 8π G_5 T^0_0, G^i_i + Λ_5 = +½ k² = 8π G_5 T^i_i, and G^y_y + Λ_5 = −½ k² = 8π G_5 T^y_y—proving an exact ghost-free asymmetric bulk solution (verified to 10⁻¹⁴ in verify-igrt-h12.mjs). Conversely, the phenomenological Model 2B parameters (α_t = 0.5, α_x = 0.5) fail both the vacuum condition and the 5D Null Energy Condition (−G^0_0 + G^x_x = −k², −G^0_0 + G^y_y = −1.5 k²), proving unbounded geodesic shortcuts require NEC-violating bulk stress.'
    ]
  },
  {
    letter: 'C',
    anchorId: 'h12-app-c',
    title: 'Dimensional Reduction: Flat M_4 × S¹, Orbifold S¹/ℤ_2 & Warped AdS_5 Effective Action',
    category: 'CATEGORY B — DERIVED',
    summary: 'Explicit integration over the fifth coordinate y incorporating dynamic radion fluctuations, orbifold matching, non-perturbative UV regulators, and thermal backgrounds.',
    equations: [
      {
        label: '(C.1)',
        category: 'CATEGORY B — DERIVED',
        unicodeHtml: '<i>M</i><sub>Pl</sub><sup>2</sup> = 2π <i>R</i><sub>5</sub> <i>M</i><sub>5</sub><sup>3</sup> (<i>S</i><sup>1</sup>), &nbsp; <i>M</i><sub>Pl</sub><sup>2</sup> = π <i>R</i><sub>5</sub> <i>M</i><sub>5</sub><sup>3</sup> (<i>S</i><sup>1</sup>/ℤ<sub>2</sub>), &nbsp; <i>M</i><sub>Pl</sub><sup>2</sup>(φ<sub>rad</sub>) = (<i>M</i><sub>5</sub><sup>3</sup>/<i>k</i>) ∫<sub>0</sub><sup>π<i>R</i><sub>5</sub></sup> 2<i>k</i> <i>e</i><sup>−2<i>k</i>|<i>y</i>|</sup> Φ<sub>rad</sub>(<i>x</i>,<i>y</i>) <i>dy</i>',
        plainText: 'M_Pl^2 = 2 pi R_5 M_5^3 (S^1), M_Pl^2 = pi R_5 M_5^3 (S^1/Z_2), M_Pl^2(phi_rad) = (M_5^3/k) int 2k e^{-2k|y|} Phi_rad(x,y) dy',
        caption: 'Matched 4D reduced Planck scale across S¹, S¹/ℤ_2 orbifold, and dynamic radion fluctuation backgrounds.'
      }
    ],
    bodyParagraphs: [
      'Integrating out heavy Kaluza–Klein graviton modes m_KK^(n) = n ℏc / R_5 leaves local dimension-6 and dimension-8 operators suppressed by (E / m_KK^(1))². With Eöt-Wash bounding R_5 = 44 ± 2 μm ⇒ m_KK^(1) = 4.485 (+0.214/−0.195) meV, m_KK^(2) = 8.969 meV, and m_KK^(3) = 13.454 meV, the flat S¹ 5D Planck scale floor is M_5(S¹) = 2.985 (±0.045) × 10⁸ GeV, while the S¹/ℤ_2 orbifold half-interval doubles the required bulk gravity scale cube to M_5(S¹/ℤ_2) = 2^{1/3} M_5(S¹) = 3.761 × 10⁸ GeV. Incorporating dynamic radion perturbations Φ_rad(x, y) = 1 + φ_rad(x) yields the 4D Brans–Dicke / kinetic scalar factor (3 M̄_Pl² / 2)(∂φ_rad)² alongside warped scale M_5 = 1.8101 × 10¹⁸ GeV at k = 10¹⁸ GeV, kπR_5 = 35.',
      'Evaluating the low-energy decoupling form-factor shift δ_KK(1 neV) across non-perturbative and perturbative UV regulators yields tree-level 4.972 × 10⁻¹⁴, Pauli–Villars 4.972 × 10⁻¹⁴, Heat-Kernel exponential 4.972 × 10⁻¹⁴, FRG Litim cutoff 3.149 × 10⁻¹⁶, MS-bar Dim-Reg 9.645 × 10⁻¹⁵, and full KK ζ(2) sum 8.179 × 10⁻¹⁴. Across thermal environments, 4 K LHe yields δ_KK = 5.873 × 10⁻³, whereas 77 K and 300 K exceed m_KK^(1) (ratios 1.48 and 5.76).'
    ]
  },
  {
    letter: 'D',
    anchorId: 'h12-app-d',
    title: 'Exact Geodesic & Beltrami Variational Integrals (Models 1, 2A, 2B, 3)',
    category: 'CATEGORY B — DERIVED',
    summary: 'Complete analytical proofs of negative shortcut results in flat S¹ and conformal AdS_5, plus exact Beltrami shooting for asymmetrically warped bulks.',
    equations: [
      {
        label: '(D.1)',
        category: 'CATEGORY B — DERIVED',
        unicodeHtml: '<i>H</i><sub>Beltrami</sub> = <i>e</i><sup>−2(α<sub><i>t</i></sub>+α<sub><i>x</i></sub>)<i>k</i><i>y</i></sup> / √(<i>e</i><sup>−2(α<sub><i>t</i></sub>+α<sub><i>x</i></sub>)<i>k</i><i>y</i></sup> + <i>e</i><sup>−2α<sub><i>t</i></sub><i>k</i><i>y</i></sup> (<i>y</i>′)<sup>2</sup>) = <i>e</i><sup>−(α<sub><i>t</i></sub>+α<sub><i>x</i></sub>)<i>k</i><i>y</i><sub>peak</sub></sup>',
        plainText: 'H_Beltrami = e^{-2(alpha_t+alpha_x)ky} / sqrt(e^{-2(alpha_t+alpha_x)ky} + e^{-2 alpha_t k y} (y\')^2) = e^{-(alpha_t+alpha_x) k y_peak}',
        caption: 'Conserved Beltrami first integral along symmetric bulk null geodesics connecting y(0)=0 and y(Δx)=0.'
      }
    ],
    bodyParagraphs: [
      'Varying the 5D relativistic worldline action S_particle = −mc ∫ √(−G_AB Ẋ^A Ẋ^B) dλ (and its affine null limit via einbein e(λ), δS_null = δ ∫ (2e)⁻¹ G_AB Ẋ^A Ẋ^B dλ = 0) yields the 5D affine geodesic equation d²X^A/dλ² + Γ^A_{BC} Ẋ^B Ẋ^C = 0 together with proper-time folding ratio η_fold = Δτ_5/Δτ_4 of Eq. (H12.0.2). Along Killing coordinates t and x of metric Eq. (H12.0.1), conserved momenta e^{2α_t ky}(c ṫ) = 1 and e^{−2α_x ky} ẋ = C = e^{−(α_t+α_x)k y_peak} enforce ds_5² = 0 identically; Assertion 68 in verify-igrt-h12.mjs directly confirms that both the phenomenological (0.5, 0.5) and Einstein–Maxwell (1.0, 0.0) Beltrami shooting curves solve d²y/dλ² + Γ^y_{00}(c ṫ)² + Γ^y_{xx} ẋ² = 0 to residuals 5.56 × 10⁻¹² and 3.48 × 10⁻¹¹ respectively.',
      'In Model 1 (flat M_4 × S¹), ds_5² = −c²dt² + dx² + dy² gives integrand dL_5/dx = √(1 + (y\')²) > 1 identically for any y\' ≠ 0 ⇒ Δt_5 = c⁻¹ √(Δx² + Δy²) ≥ Δx/c = Δt_4 (1.001249 ratio at Δy = 50 m, Δx = 1000 m). In Model 2A (conformal RS AdS_5, α_t = −1, α_x = +1), Poincaré substitution z = k⁻¹ e^{ky} puts ds_5² = (kz)⁻²(−c²dt² + dx² + dz²), proving c_eff(y) = c e^{(−1+1)k|y|} = c identically everywhere and forbidding early arrival (excursion ratio 1.010321 > 1).',
      'Only when α_t + α_x > 0 does the Beltrami arch lower total travel time. For the exact ghost-free 5D Einstein–Maxwell bulk (α_t = 1.0, α_x = 0.0, §2.2), y\'(y) = √(e^{2k(y_peak − y)} − 1) integrates analytically to k Δx / 2 = arccos(e^{−k y_peak}) < π/2, imposing an exact finite-span horizon ceiling k Δx < π (3.141593) with closed-form solution y_peak = −k⁻¹ ln cos(k Δx / 2) and η_fold^EM = sin(k Δx / 2) / (k Δx / 2) (yielding η_fold = 0.84147 at k Δx = 2 and horizon limit 2/π = 0.63662 as y_peak → ∞). Extending shortcuts to arbitrary spans k Δx ∈ {10, 50} requires α_x > 0: solving phenomenological Model 2B (α_t = α_x = 0.5) via singularity-free u-quadrature (y = y_peak(1 − u²)) gives η_fold = 0.86634 (k Δx = 2), 0.34279 (k Δx = 10), and 0.07770 (k Δx = 50).'
    ]
  },
  {
    letter: 'E',
    anchorId: 'h12-app-e',
    title: 'Black-Hole Interior, Exact Hayward NEC Theorem & Gregory–Laflamme Instability',
    category: 'CATEGORY B — DERIVED',
    summary: 'Proof that ordinary 4D H11 Hayward black holes satisfy both radial and transverse NEC, contrasted with 5D Gregory–Laflamme instability.',
    equations: [
      {
        label: '(E.1)',
        category: 'CATEGORY B — DERIVED',
        unicodeHtml: 'ρ + <i>p</i><sub><i>r</i></sub> = 0, &nbsp;&nbsp; 8π<i>G</i>(ρ + <i>p</i><sub>⊥</sub>) = 9 <i>r</i><sub><i>s</i></sub> <i>a</i><sup>3</sup> <i>r</i><sup>3</sup> / (<i>r</i><sup>3</sup> + <i>a</i><sup>3</sup>)<sup>3</sup> &gt; 0 &nbsp;&nbsp; (<i>a</i><sup>3</sup> ≡ <i>r</i><sub><i>s</i></sub> ℓ<sub>0</sub><sup>2</sup>)',
        plainText: 'rho + p_r = 0, 8 pi G (rho + p_perp) = 9 r_s a^3 r^3 / (r^3 + a^3)^3 > 0 (a^3 = r_s l_0^2)',
        caption: 'Exact analytical & finite-difference verified NEC satisfaction of the 4D H11 Hayward metric.'
      }
    ],
    bodyParagraphs: [
      'Because G^t_t = G^r_r identically for any static spherically symmetric metric with g_tt g_rr = −1, the Hayward effective stress-energy obeys p_r = −ρ everywhere, while angular component G^θ_θ = (r f\'\' + 2f\')/(2r) simplifies algebraically to exact closed form G^θ_θ = 3 r_s a³ (2 r³ − a³)/(r³ + a³)³. Evaluating both analytically and via central finite differences across r ∈ [0.25 r_core, 5.0 r_core] around the 30 M_⊙ core radius r_core = 2.5389 × 10⁻²² m confirms ρ + p_r = 0 and transverse NEC 8πG(ρ + p_⊥) = 9 r_s a³ r³/(r³ + a³)³ > 0 within < 10⁻⁴ error.',
      'Consequently, an ordinary H11 regular black hole [6] contains no NEC-violating throat and cannot function as a traversable portal. When uplifted to a 5D black string in AdS_5 with Weyl tidal charge q_tidal (yielding horizon expansion at q_tidal > 0 and contraction at q_tidal < 0; Assertion 76), horizons smaller than r_+/R_AdS < 0.876 undergo the Gregory–Laflamme instability [7] and fragment into localized 5D brane black holes.'
    ]
  },
  {
    letter: 'F',
    anchorId: 'h12-app-f',
    title: 'Morris–Thorne Wormhole Energy Conditions, Tidal Forces, Ford–Roman Bounds & Casimir Zeta Derivation',
    category: 'CATEGORY B — DERIVED',
    summary: 'Complete 10-point analytical and numerical evaluation of zero-tidal-force b(r) = r_0²/r wormholes across Planck to 3 km throats, including Ford–Roman quantum inequalities, Raychaudhuri defocusing, and explicit zeta-function Casimir derivation.',
    equations: [
      {
        label: '(F.1)',
        category: 'CATEGORY B — DERIVED',
        unicodeHtml: '<i>E</i><sub>exotic</sub> = ∫<sub><i>r</i><sub>0</sub></sub><sup>∞</sup> (ρ<i>c</i><sup>2</sup> + <i>p</i><sub><i>r</i></sub>) [4π<i>r</i><sup>2</sup> / √(1 − <i>b</i>/<i>r</i>)] <i>dr</i> = −(π/2) (<i>c</i><sup>4</sup> / <i>G</i>) <i>r</i><sub>0</sub>, &nbsp;&nbsp; ρ<sub>Casimir</sub> = −π<sup>2</sup>ℏ<i>c</i> / (720 <i>d</i><sup>4</sup>), &nbsp;&nbsp; ρ<sub>FR</sub>(τ<sub>0</sub>) ≥ −3ℏ<i>c</i> / (32π<sup>2</sup> (<i>c</i>τ<sub>0</sub>)<sup>4</sup>)',
        plainText: 'E_exotic = -(pi/2)(c^4/G)r_0, rho_Casimir = -pi^2 hbar c / (720 d^4), rho_FR(tau_0) >= -3 hbar c / (32 pi^2 (c tau_0)^4)',
        caption: 'Exact NEC throat deficit, exotic mass integral, zeta-regularized Casimir energy density, and Ford–Roman quantum inequality bound.'
      }
    ],
    bodyParagraphs: [
      'Trigonometric substitution r = r_0 sec(u) in the Morris–Thorne metric [8] yields exact analytic agreement (verified to < 10⁻⁴ by 1,000-step trapezoidal quadrature in verify-igrt-h12.mjs) for the total negative energy integral. For r_0 = 1 m, E_exotic = −1.9011 × 10⁴⁴ J (−1.0637 × 10⁻³ M_⊙); for r_0 = 3 km, −3.1912 M_⊙. Along radial null geodesics crossing r = r_0, Raychaudhuri expansion strictly defocuses at dθ/dλ = −R_{μν} k^μ k^ν = +2/r_0² > 0 (Assertion 75), directly opposite non-defocusing Hayward cores.',
      'Summing the electromagnetic zero-point modes between conducting plates separated by d [22], E_0/A = ∑_{n=1}^∞ ∫ d²k_⊥/(2π)² ½ ℏ c √(k_⊥² + (nπ/d)²) via Riemann zeta analytic continuation ζ(−3) = 1/120 removes the UV divergence cleanly to E_Casimir/A = −π²ℏc/(720 d³) and density ρ_Casimir = −π²ℏc/(720 d⁴). Comparing at r_0 = d yields ratio 4.50 × 10⁻⁷¹ at 1 m, 4.50 × 10⁻⁵⁹ at 1 μm, and 0.2436 only at Planck scale ℓ_0 = 1.3591 × 10⁻³⁵ m. Independently, the Ford–Roman Lorentzian quantum inequality [9] ρ_FR(τ_0) ≥ −3ℏc / (32π² (cτ_0)⁴) evaluated at crossing time τ_0 = r_0/c yields −3.003 × 10⁻²⁸ J/m³ at r_0 = 1 m (shortfall ratio 3.118 × 10⁻⁷¹) and reaches O(1) ratio 0.1688 only at Planck length ℓ_0 (Assertion 74).'
    ]
  },
  {
    letter: 'G',
    anchorId: 'h12-app-g',
    title: 'Double-Slit SLD Quantum Fisher Information & Wave–Particle Complementarity',
    category: 'CATEGORY B — DERIVED',
    summary: 'Explicit 2×2 density-matrix SLD calculation proving F_Q = V² and V² + D_QFI² = 1, plus strict epistemic isolation of Born’s rule.',
    equations: [
      {
        label: '(G.1)',
        category: 'CATEGORY B — DERIVED',
        unicodeHtml: 'ρ(φ) = ½ [ [1, γ<sub>coh</sub> <i>e</i><sup>−<i>i</i>φ</sup>], [γ<sub>coh</sub> <i>e</i><sup><i>i</i>φ</sup>, 1] ], &nbsp;&nbsp; <i>F</i><sub><i>Q</i></sub>(φ) = γ<sub>coh</sub><sup>2</sup> = <i>V</i><sup>2</sup>, &nbsp;&nbsp; <i>V</i><sup>2</sup> + <i>D</i><sub>QFI</sub><sup>2</sup> = 1',
        plainText: 'rho(phi) = 1/2 [[1, gamma_coh e^{-i phi}], [gamma_coh e^{i phi}, 1]], F_Q(phi) = gamma_coh^2 = V^2, V^2 + D_QFI^2 = 1',
        caption: 'Exact SLD Fisher information, fringe visibility V, and path distinguishability D_QFI = √(1 − γ_coh²).'
      }
    ],
    bodyParagraphs: [
      'Diagonalizing ρ(φ) yields eigenvalues λ_± = ½(1 ± γ_coh) and exact SLD Fisher Information F_Q(φ) = 4 (γ_coh²/4)/(λ_+ + λ_−) = γ_coh². Consequently, the Bures-QFI metric velocity ds_QFI/dφ = ½ γ_coh directly equals half the fringe visibility.',
      'Crucially, probability assignment P(x) = Tr(ρ Π_x) = ½(1 + γ_coh cos φ) relies on the Born rule (Category A independent quantum postulate). Projective Hilbert fiber coordinates θ ∈ PU(ℋ) describe quantum interference states—NOT physical particle traversal along the spatial fifth coordinate y.'
    ]
  },
  {
    letter: 'H',
    anchorId: 'h12-app-h',
    title: 'Executable Simulation Suite (scripts/verify-igrt-h12.mjs) Architecture',
    category: 'CATEGORY B — DERIVED',
    summary: 'Documentation of the deterministic Node.js physics suite verifying all 80 quantitative, symbolic, convergence, and invariance assertions in this monograph.',
    equations: [
      {
        label: '(H.1)',
        category: 'CATEGORY B — DERIVED',
        unicodeHtml: 'node scripts/verify-igrt-h12.mjs &nbsp;⇒&nbsp; status: ALL_ASSERTIONS_PASSED (80/80 assertions)',
        plainText: 'node scripts/verify-igrt-h12.mjs => ALL_ASSERTIONS_PASSED (80/80 assertions)',
        caption: 'Deterministic command verifying H11 SHA-256 invariance, Sturm–Liouville resolvent contraction, UV regulators, finite-difference 5D Einstein/Bianchi & NEC factorization, Beltrami 5D affine geodesic ODE, Ford–Roman & Raychaudhuri bounds, 2×2 SLD equality, Protocol P13 3G BNS reach, and [1]–[22] citation coverage.'
      }
    ],
    bodyParagraphs: [
      'Every numerical value cited across Chapters 1–13 and Appendices A–K is computed directly in double-precision IEEE-754 arithmetic from SI 2019 / CODATA 2022 constants by scripts/verify-igrt-h12.mjs, bundled inside the downloadable LaTeX archive.',
      'Core numerical and symbolic verifications (80 assertions) include: (i) pinned H11 SHA-256 invariance check, 665-assertion catalog sum check, and Sturm–Liouville resolvent contraction bounds ‖(−□_4 + m_1²)⁻¹‖ ≤ (m_KK^(1)² − E²)⁻¹; (ii) Eöt-Wash 44 ± 2 μm error propagation into n=1,2,3 KK modes, S¹/ℤ_2 orbifold Planck scale, Heat-Kernel, FRG Litim, Pauli–Villars, Dim-Reg, and Zeta regulators plus 4 K/77 K/300 K thermal sweeps; (iii) exact ghost-free 5D Einstein–Maxwell tensor check & closed-form finite-span geodesic (α_t=1, α_x=0 ⇒ η_fold = sin(kΔx/2)/(kΔx/2) = 0.84147 at kΔx = 2 < π), Beltrami N=800 vs N=1600 convergence (< 2.2 × 10⁻⁷ across kΔx=2,10,50), Euler–Lagrange & explicit 5D affine geodesic ODE d²X^A/dλ² + Γ^A_{BC} Ẋ^B Ẋ^C = 0 residuals (< 3.5 × 10⁻¹¹), and node-by-node ds_5² ≡ 0 (< 7 × 10⁻¹⁶); (iv) multi-radius Hayward core NEC, exact G^θ_θ, and null-vector contractions k^μ k^ν G_μν (Hayward 0 radially / > 0 transversely vs. Morris–Thorne −2/r_0² < 0); (v) Bernoulli B_4 = −1/30 ⇒ ζ(−3) = 1/120 Casimir mode-sum verification and 1,000-step Morris–Thorne quadrature; (vi) explicit 2×2 complex SLD matrix verification ∂_φ ρ = ½(L_φ ρ + ρ L_φ) (residual 0); (vii) Bayesian Occam penalty Δ ln O = −5.60; (viii) Protocol P13 GW170817/GRB 170817A passive multi-messenger bound |η_fold^{GW−EM} − 1| ≤ 4.129 × 10⁻¹⁶ and analytic S¹/RS identity checks (Assertions 68–71); and (ix) Assertions 72–80 verifying finite-difference 5D metric → Christoffel → Ricci → Einstein & Bianchi ∇_A G^A_y = 0 (< 10⁻⁷), exact Model 2B 5D NEC violation (−k² along x, −1.5 k² along y) vs. Einstein–Maxwell NEC satisfaction, Ford–Roman quantum inequality (−3.003 × 10⁻²⁸ J/m³ at 1 m, 3.118 × 10⁻⁷¹ ratio; 0.1688 at ℓ_0), Raychaudhuri throat defocusing (+2/r_0²), 5D Hayward Weyl tidal charge q_tidal horizon shift, Goldberger–Wise radion Yukawa attenuation & 1% Weyl ΔN_eff = 0.0614 < 0.28, P13 stacked 3G 150-BNS sensitivity (9.916 × 10⁻¹⁹ < 10⁻¹⁸), modular Cramér–Rao speed bound, and programmatic 22/22 bibliography citation coverage [1]–[22].'
    ]
  },
  {
    letter: 'I',
    anchorId: 'h12-app-i',
    title: 'Complete Dimensional Consistency Audits (SI & Natural Units ℏ = c = 1)',
    category: 'CATEGORY A — ESTABLISHED',
    summary: 'Verification that every 5D action, KK reduction, temporal folding factor, wormhole NEC integral, and QFI equation carries exact physical dimensions.',
    equations: [
      {
        label: '(I.1)',
        category: 'CATEGORY A — ESTABLISHED',
        unicodeHtml: '[<i>G</i><sub>5</sub>] = L<sup>4</sup> M<sup>−1</sup> T<sup>−2</sup> = [<i>G</i><sub>4</sub>]·L (M<sup>−3</sup> in natural units), &nbsp; [κ<sub>ψ</sub>] = GeV<sup>−1</sup>, &nbsp; [<i>E</i><sub>exotic</sub>] = J',
        plainText: '[G_5] = L^4 M^{-1} T^{-2} = [G_4]*L (M^{-3} in natural units), [kappa_psi] = GeV^{-1}, [E_exotic] = J',
        caption: 'Verified dimensional assignments spanning 5D gravity, H11 Araki coupling, and wormhole stress integrals.'
      }
    ],
    bodyParagraphs: [
      'In four dimensions, [c³ / G_4] = (L³ T⁻³)/(L³ M⁻¹ T⁻²) = M T⁻¹; multiplying by spacetime volume element [c dt d³x] = L⁴ and Ricci scalar [⁴R] = L⁻² returns action dimensions M L² T⁻¹ = [ℏ]. Extending the spatial measure by one physical bulk dimension d³x → d⁴x multiplies the volume element by L, so invariance of S_5 / ℏ requires [G_5] = [G_4] · L = L⁴ M⁻¹ T⁻². Equivalently in natural units (ℏ = c = 1), [G_5] = M_5⁻³ matches [M̄_Pl²] = [2π R_5 M_5³] = M².',
      'Every H12 equation passes strict dimensional closure: in Model 2B, warp parameter k carries dimensions L⁻¹ so k Δx and exponents α_t, α_x are strictly dimensionless; in Morris–Thorne Eq. (6.1), [c⁴/G] · [r_0] = (L⁴ T⁻⁴ / L³ M⁻¹ T⁻²) · L = M L² T⁻² = Joules; and in Eq. (H12.0.2), [ℏ / E_mod] · [s_QFI] = (J·s / J) · rad = seconds.'
    ]
  },
  {
    letter: 'J',
    anchorId: 'h12-app-j',
    title: 'Consolidated Parameter Tables (H11 Baseline, H12 Computed Benchmarks & P7–P13)',
    category: 'CATEGORY B — DERIVED',
    summary: 'Unified numerical reference table directly reproduced by node scripts/verify-igrt-h12.mjs.',
    equations: [],
    bodyParagraphs: [
      'H11 Baseline Constants: ℓ_Pl = 1.616255 × 10⁻³⁵ m; t_Pl = 5.391246 × 10⁻⁴⁴ s; M_Pl = 1.22089 × 10¹⁹ GeV; ξ_0 = 0.8408964; ℓ_0 = 1.359103 × 10⁻³⁵ m; κ_ψ = 2.1727 × 10⁻²¹ GeV⁻¹ (1.3554 × 10⁻⁶² J·m²); K_echo = 0.184.',
      '5D Reduction & Bounds: R_5 ≤ 44 μm ⇒ m_KK^(1) ≥ 4.485 meV; M_5 (flat floor) = 2.985 × 10⁸ GeV; M_5 (warped k = 10¹⁸ GeV, kπR_5 = 35) = 1.8101 × 10¹⁸ GeV; warp factor e⁻³⁵ = 6.3051 × 10⁻¹⁶; H11 error at 1 neV = 4.972 × 10⁻¹⁴; radion 10 μm Yukawa attenuation 0.7967 (zero at 1 AU); 1% Weyl ΔN_eff = 0.0614 < 0.28.',
      'Geodesic Benchmarks & 5D NEC: Model 1 (flat S¹ wind 50 m / 1000 m) L_5/L_4 = 1.001249; Model 2A (conformal RS excursion) Δt_5/Δt_4 = 1.010321; Ghost-Free Einstein–Maxwell (α_t = 1.0, α_x = 0.0, 5D NEC satisfied +k² / 0, finite-span horizon k Δx < π) η_fold = sin(1) = 0.84147 at k Δx = 2 (horizon limit 2/π = 0.63662); Phenomenological Model 2B (α_t = α_x = 0.5, 5D NEC violated −k² / −1.5 k²) η_fold = 0.86634 (k Δx = 2), 0.34279 (k Δx = 10), 0.07770 (k Δx = 50); Model 3 modular fold (0.65) τ_brane = 3.33531 ms → τ_folded = 2.16795 ms (s_QFI = 3.2937 × 10¹² rad).',
      'Black Holes & Wormholes: 30 M_⊙ Hayward core r_core = 2.5389 × 10⁻²² m (ρ + p_r = 0, ρ + p_⊥ > 0); GL threshold r_+/R_AdS = 0.876; Morris–Thorne r_0 = 1 m (E_exotic = −1.9011 × 10⁴⁴ J = −1.0637 × 10⁻³ M_⊙, Casimir ratio 4.50 × 10⁻⁷¹, Ford–Roman ratio 3.118 × 10⁻⁷¹); r_0 = ℓ_0 (Casimir ratio 0.2436, Ford–Roman ratio 0.1688); r_0 = 3 km (−3.1912 M_⊙, traversal 1.9914 ms).',
      'Protocols P7–P13: P7 target R_5 = 10 μm (m_KK = 19.733 meV); P8 δν/ν = 10⁻¹⁹; P9 |δV_5D| < 10⁻⁶; P10 3G GW leakage |h_s/h_t| < 10⁻³; P11 |η_fold − 1| ~ 10⁻⁵ (far-future); P12 |Δc/c| < 10⁻¹⁸; P13 GW170817/GRB 170817A |η_fold^{GW−EM} − 1| ≤ 4.129 × 10⁻¹⁶ and 3G stacked 150-BNS reach 9.916 × 10⁻¹⁹ < 10⁻¹⁸.'
    ]
  },
  {
    letter: 'K',
    anchorId: 'h12-app-k',
    title: 'Complete Epistemic Claim–Evidence Ledger (Categories A, B, C & D)',
    category: 'CATEGORY A — ESTABLISHED',
    summary: 'Transparent falsifiability and classification audit of every major claim across Chapters 1–13.',
    equations: [],
    bodyParagraphs: [
      'CATEGORY A — ESTABLISHED: 4D GR & Schwarzschild/Kerr causal structure; Tomita–Takesaki modular theory & SLD Fisher geometry; Born rule P = |ψ|²; quantum no-communication theorem; Eöt-Wash R_5 ≤ 44 μm and GW170817 |c_GW/c − 1| ≤ 10⁻¹⁵ bounds; negative Casimir plate energy.',
      'CATEGORY B — DERIVED (Conditional on IGRT-H11/H12 Postulates): Exact 4D H11 recovery to 4.972 × 10⁻¹⁴ at 1 neV; Model 1 & Model 2A no-shortcut Horizon Theorems; Model 2B Beltrami shortcut ratios η_fold; exact Hayward NEC satisfaction (ρ + p_r = 0) proving regular BHs are not wormholes; Morris–Thorne exotic energy & 10⁻⁷¹ Casimir shortfall at 1 m; exact double-slit identity V² + D_QFI² = 1; optical-lattice/CANNEX/interferometer P7–P9 bounds.',
      'CATEGORY C — CONJECTURAL: Existence of an actual physical fifth spacetime dimension y; asymmetric bulk warping α_t + α_x > 0 in nature; ER=EPR quantum connectivity in flat 4D; 5D ekpyrotic bounce geometry and bulk radion dark-sector fractions; 3G GW scalar/KK leakage (P10).',
      'CATEGORY D — SPECULATIVE ENGINEERING: Analog GRIN photonic temporal folding simulator (Device C) and macroscopic wormhole stabilization concepts—explicitly tagged as either benchtop metric analogs or physically obstructed by >70 orders of magnitude in exotic stress-energy.'
    ]
  }
];

export interface ExtrapolationRow {
  id: number;
  topic: string;
  extension: string;
  keyObstacleOrFalsifier: string;
  category: H12EpistemicCategory;
}

export const TWELVE_EXTRAPOLATIONS: ExtrapolationRow[] = [
  { id: 1, topic: 'UV Completion of 5D Gravity', extension: 'Embed 5D Einstein–Araki EFT into asymptotic safety or string/M-theory bulk above M_5.', keyObstacleOrFalsifier: 'Non-renormalizable 5D loops above 10⁸–10¹⁸ GeV.', category: 'CATEGORY C — CONJECTURAL' },
  { id: 2, topic: 'Radion Stabilization Dynamics', extension: 'Goldberger–Wise bulk scalar potential fixing R_5 without fine-tuning.', keyObstacleOrFalsifier: 'Must avoid fifth-force violation in CANNEX P5/P7.', category: 'CATEGORY B — DERIVED' },
  { id: 3, topic: 'Chronology Protection in Asymmetric Bulks', extension: 'Backreaction of 5D vacuum stress-energy ⟨T_AB⟩ near Cauchy horizons when multiple branes move relatively.', keyObstacleOrFalsifier: 'Divergent renormalized ⟨T_AB⟩ likely enforces Hawking chronology protection on closed null curves.', category: 'CATEGORY C — CONJECTURAL' },
  { id: 4, topic: '5D Kerr–Hayward Spinning Brane-World', extension: 'Extend 4D Kerr–Hayward (κ_− ℓ_0 ≤ 0.6639) to exact 5D rotating black-string metric.', keyObstacleOrFalsifier: 'No closed-form analytic 5D rotating localized brane black hole exists yet.', category: 'CATEGORY C — CONJECTURAL' },
  { id: 5, topic: 'Quantum-Inequality Wormhole Micro-Foams', extension: 'Explore Planck-scale r_0 ~ ℓ_0 wormhole amplitudes where Casimir ratio reaches 0.2436.', keyObstacleOrFalsifier: 'Cannot be scaled macroscopically without NEC violation.', category: 'CATEGORY B — DERIVED' },
  { id: 6, topic: 'Horndeski-Supported Brane Wormholes', extension: 'Test transient NEC violation in non-minimal Horndeski/Araki scalar sectors.', keyObstacleOrFalsifier: 'Ghost/gradient instability (c_s² > 0) tightly narrows parameter space.', category: 'CATEGORY C — CONJECTURAL' },
  { id: 7, topic: 'Asymmetric Bulk GW Echo Dispersion', extension: 'Compute frequency-dependent KK echo trains for Einstein Telescope (P10).', keyObstacleOrFalsifier: 'Distinguishing bulk leakage from astrophysical environmental dispersion.', category: 'CATEGORY C — CONJECTURAL' },
  { id: 8, topic: 'Modular Speed Limits in Many-Body Systems', extension: 'Scale Device A from single qubits to entangled 50-ion optical clocks.', keyObstacleOrFalsifier: 'Decoherence & correlated magnetic-field drift below 10⁻¹⁹.', category: 'CATEGORY B — DERIVED' },
  { id: 9, topic: 'Holographic Complexity = Bulk Volume', extension: 'Connect QFI distance s_QFI along modular orbits to CV/CA holographic complexity.', keyObstacleOrFalsifier: 'Formal duality established only in asymptotically AdS_5, not FRW.', category: 'CATEGORY C — CONJECTURAL' },
  { id: 10, topic: 'Primordial 5D Gravitational Wave Background', extension: 'Spectral tilt n_T and blue-tilted KK relic spectrum at LISA/DECIGO bands.', keyObstacleOrFalsifier: 'Nucleosynthesis N_eff bound limits high-frequency GW energy.', category: 'CATEGORY C — CONJECTURAL' },
  { id: 11, topic: 'Sub-Micron Casimir–Torsion Upgrades', extension: 'Push Protocol P7 below R_5 = 1 μm (m_KK > 197 meV).', keyObstacleOrFalsifier: 'Electrostatic patch potentials & surface roughness at sub-micron gaps.', category: 'CATEGORY D — SPECULATIVE ENGINEERING' },
  { id: 12, topic: 'Precision Matter-Wave QFI Complementarity', extension: 'Macromolecule / 100-m atom fountain interferometry for P9 at |δV_5D| < 10⁻⁸.', keyObstacleOrFalsifier: 'Vibrational gravity-gradient seismic noise.', category: 'CATEGORY D — SPECULATIVE ENGINEERING' }
];

export const H12_REFERENCES = [
  { id: 1, citation: 'Chronos-QG Consortium (2026). Information-Geometric Resonant Time (IGRT), Harmonized Research Monograph Edition H11. [Predecessor Baseline, SHA-256: 57cf3f1c...048d].' },
  { id: 2, citation: 'Randall, L., & Sundrum, R. (1999). A Large Mass Hierarchy from a Small Extra Dimension; An Alternative to Compactification. Phys. Rev. Lett. 83, 3370 & 4690.' },
  { id: 3, citation: 'Chung, D. J. H., & Freese, K. (2000). Can Geodesics in Extra Dimensions Solve the Horizon Problem? Phys. Rev. D 62, 063513.' },
  { id: 4, citation: 'Shiromizu, T., Maeda, K., & Sasaki, M. (2000). The Einstein Equations on the 3-Brane World. Phys. Rev. D 62, 024012.' },
  { id: 5, citation: 'Lee, J. G., Adelberger, E. G., Cook, T. S., Fleischer, S. M., & Heckel, B. R. (2020). New Test of the Gravitational 1/r² Law at Separations down to 52 μm. Phys. Rev. Lett. 124, 101101.' },
  { id: 6, citation: 'Hayward, S. A. (2006). Formation and Evaporation of Nonsingular Black Holes. Phys. Rev. Lett. 96, 031103.' },
  { id: 7, citation: 'Gregory, R., & Laflamme, R. (1993). Black Strings and p-Branes Are Unstable. Phys. Rev. Lett. 70, 2837.' },
  { id: 8, citation: 'Morris, M. S., & Thorne, K. S. (1988). Wormholes in Spacetime and Their Use for Interstellar Travel: A Tool for Teaching General Relativity. Am. J. Phys. 56, 395.' },
  { id: 9, citation: 'Ford, L. H., & Roman, T. A. (1996). Quantum Field Theory Constrains Traversable Wormhole Geometries. Phys. Rev. D 53, 5496.' },
  { id: 10, citation: 'Braunstein, S. L., & Caves, C. M. (1994). Statistical Distance and the Geometry of Quantum States. Phys. Rev. Lett. 72, 3439.' },
  { id: 11, citation: 'Englert, B.-G. (1996). Fringe Visibility and Which-Way Information: An Inequality. Phys. Rev. Lett. 77, 2154.' },
  { id: 12, citation: 'Maldacena, J., & Susskind, L. (2013). Cool Horizons for Entangled Black Holes (ER=EPR). Fortsch. Phys. 61, 781.' },
  { id: 13, citation: 'Gao, P., Jafferis, D. L., & Wall, A. C. (2017). Traversable Wormholes via a Double Trace Deformation. JHEP 12 (2017) 151.' },
  { id: 14, citation: 'Abbott, B. P. et al. (LIGO/Virgo/Fermi) (2017). Gravitational Waves and Gamma-Rays from a Binary Neutron Star Merger: GW170817 and GRB 170817A. ApJL 848, L13.' },
  { id: 15, citation: 'Kaluza, T. (1921). Zum Unitätsproblem der Physik. Sitzungsber. Preuss. Akad. Wiss. Berlin, 966–972.' },
  { id: 16, citation: 'Klein, O. (1926). Quantentheorie und fünfdimensionale Relativitätstheorie. Z. Phys. 37, 895–906.' },
  { id: 17, citation: 'Buchholz, D., & Wichmann, E. H. (1986). Causal Independence and the Energy-Level Density of States in Local Quantum Field Theory. Commun. Math. Phys. 106, 321–344.' },
  { id: 18, citation: 'Haag, R. (1992). Local Quantum Physics: Fields, Particles, Algebras. Springer-Verlag, Berlin.' },
  { id: 19, citation: 'Brunetti, R., Fredenhagen, K., & Verch, R. (2003). The Generally Covariant Locality Principle — A New Paradigm for Local Quantum Field Theory. Commun. Math. Phys. 237, 31–68.' },
  { id: 20, citation: 'Connes, A., & Rovelli, C. (1994). Von Neumann Algebra Automorphisms and Time-Thermodynamics Relation in Generally Covariant Quantum Theories. Class. Quant. Grav. 11, 2899–2917.' },
  { id: 21, citation: 'Goldberger, W. D., & Wise, M. B. (1999). Modulus Stabilization with Bulk Fields. Phys. Rev. Lett. 83, 4922–4925.' },
  { id: 22, citation: 'Klimchitskaya, G. L., Mohideen, U., & Mostepanenko, V. M. (2009). The Casimir Force Between Real Materials: Experiment and Theory. Rev. Mod. Phys. 81, 1827–1885.' }
];

// ---------------------------------------------------------------------------
// Reorganized Apparatus: Statements, Glossaries, Timelines, New Tables & Lists
// ---------------------------------------------------------------------------

export const H12_CHAPTER1_EXPLICIT_STATEMENTS: string[] = [
  'The 5D extension is a mathematical hypothesis, not an experimentally established fact.',
  'No 5D phenomenon has been observed.',
  'The H12 results do not alter H11; they extend it.',
  'The H11 protocols P1–P6 test 4D physics only; they do not confirm 5D.',
  'The H12 protocols P7–P10 test the 5D bulk hypothesis, not the folding mechanism specifically.',
  'Protocols P7–P10 test the existence of a 5D bulk, not the folding mechanism.',
  'Protocols P11–P12 test the folding mechanism, but no current experiment can achieve the required sensitivity.',
  'The folding mechanism is not currently testable.',
  'Eqs. (H12.0.1) and (H12.0.2) are postulated, not derived. They define the 5D hypothesis.',
  'The positive shortcut theorem is a classification of possible geometries, not a prediction of a physical one.',
  'The asymmetric warp required for shortcuts is not derived from a physical principle.',
  'The Born rule is Category A (postulate), not derived from 5D.',
  'The no-communication theorem is preserved by 5D microcausality, but this is not a new result.',
  'The double-slit complementarity identity is independent of the 5D extension; it is a property of the Fisher–Rao metric on the fiber.',
  "The 'portal' is a mathematical connection, not a traversable wormhole.",
  'The negative theorems rule out physical portals.',
  'The negative theorems are the strongest part of H12.',
  'The positive shortcut theorem is Category C; it is a classification of possible geometries, not a prediction of one.',
  'The Gregory-Laflamme stability threshold is assumed, not derived.',
  'The Gregory-Laflamme stability threshold is a known result; the IGRT-H12 application is assumed, not derived.',
  'The Casimir deficit bound is a correct application of the Morris-Thorne energy condition; it is not a new result.',
  'The four-tier epistemic categories (A/B/C/D) are the gold standard for speculative physics.',
  'The H12 document is a follow-up, not a replacement.',
  'The H11 SHA-256 preregistration digest is preserved.',
  'The H12 document is explicitly labeled as an extension.'
];

export const COMPARISON_4D_VS_5D_IGRT: Array<{
  dimension: string;
  h11FourD: string;
  h12FiveD: string;
  epistemicDelta: string;
  testableNow: 'Yes' | 'No' | 'Conceptual';
}> = [
  { dimension: 'Spacetime Base', h11FourD: '4D Lorentzian (M_4, g_μν)', h12FiveD: '5D Extended Bulk M_5 = M_4 × K_1', epistemicDelta: 'Category C assumed lift', testableNow: 'No' },
  { dimension: 'Quantum State Fiber', h11FourD: 'Projective Hilbert PU(ℋ)', h12FiveD: 'PU(ℋ) ⊥ ∂/∂y strictly separated', epistemicDelta: 'Fiber independent of y', testableNow: 'Yes' },
  { dimension: 'Araki Coupling κ_ψ', h11FourD: '2.1727 × 10⁻²¹ GeV⁻¹', h12FiveD: 'Unchanged on y = 0 (4.972 × 10⁻¹⁴ KK shift at 1 neV)', epistemicDelta: 'Category B exact recovery', testableNow: 'Yes' },
  { dimension: 'Black-Hole Core', h11FourD: '4D Hayward ξ_0 = 2⁻¹/⁴, K_echo = 0.184', h12FiveD: 'Proved NEC-satisfying (non-portal); optional q_tidal / GL', epistemicDelta: 'NEC Category B; 5D string Cat. C', testableNow: 'No' },
  { dimension: 'Double-Slit Identity', h11FourD: 'Fisher–Rao arc in PU(ℋ)', h12FiveD: 'Explicit V² + D_QFI² = 1 (independent of 5D)', epistemicDelta: 'Category B fiber property', testableNow: 'Yes' },
  { dimension: 'Empirical Tests', h11FourD: 'Protocols P1–P6 (SHA-256 locked)', h12FiveD: 'Adds P7–P10 (bulk), P11–P12 (folding), P13 (GW–EM)', epistemicDelta: 'P1–P6 test 4D only; P13 passive now', testableNow: 'Conceptual' }
];

export const GLOSSARY_5D_TERMS: Array<{ term: string; definition: string }> = [
  { term: 'Brane', definition: 'Our four-dimensional spacetime hypersurface M_4 located at fixed extra-dimensional coordinate y = 0 inside a five-dimensional ambient space.' },
  { term: 'Bulk', definition: 'The full five-dimensional spacetime manifold M_5 = M_4 × K_1 containing the 4D brane plus the extra coordinate y.' },
  { term: 'Warp Factor', definition: 'Exponential y-dependent metric coefficients e^{2α_t k |y|} and e^{−2α_x k |y|} scaling proper time and spatial lengths along the bulk coordinate.' },
  { term: 'KK Tower', definition: 'Discrete infinite ladder of massive Kaluza–Klein graviton excitations m_KK^(n) = n ℏc / R_5 generated by compactifying y on a finite circle/orbifold.' },
  { term: 'Radion', definition: 'Scalar degree of freedom Φ_rad(x) encoding local fluctuations in the proper size/distance across the fifth coordinate y.' },
  { term: 'Beltrami Geodesic', definition: 'Variational extremal bulk null curve dipping off the brane (y(x) > 0) and governed by the conserved Beltrami first integral along an assumed warped metric.' },
  { term: 'Portal', definition: 'In IGRT-H12, strictly a mathematical geometric or state-space connection—never a macroscopic traversable wormhole.' }
];

export const SUMMARY_FOR_PHYSICISTS =
  'Summary for Physicists: IGRT-2026-H12 isolates four exact mathematical boundary conditions separating 4D Information-Geometric Resonant Time from higher-dimensional speculation. First, Eöt-Wash bounds (R_5 ≤ 44 μm ⇒ m_KK^(1) ≥ 4.485 meV) quench 5D tree-level corrections on H11 couplings at 1 neV to δ_KK = 4.972 × 10⁻¹⁴, keeping every H11 4D closure (κ_ψ, K_echo = 0.184, M_rem = 1.09236 M_Pl, H_0 = 70.77, P1–P6) strictly intact. Second, negative theorems prove that flat M_4 × S¹ lengthens null paths (1.001249), conformal RS AdS_5 enforces c_eff(y) = c everywhere (Horizon Theorem 1.010321), 4D Hayward regular black holes obey ρ + p_r = 0 and ρ + p_⊥ > 0 identically at r_core = 2.5389 × 10⁻²² m (non-portals), and macroscopic Morris–Thorne throats suffer a 10⁷¹ Casimir deficit at 1 m (reaching 0.2436 parity only at ℓ_0). Third, Beltrami bulk shortcuts (η_fold = 0.86634..0.07770) and asymmetric bulk parameters (α_t + α_x > 0) are classified strictly as Category C mathematical conjectures requiring unestablished anisotropic bulk matter, while double-slit complementarity V² + D_QFI² = 1 and AQFT no-signaling [O_A, O_B] = 0 hold independently of y under Category A Born and Lorentzian postulates. Fourth, empirical discrimination beyond H11 rests cleanly on bulk/KK/leakage protocols P7–P10, active folding concepts P11–P12, and passive multi-messenger arrival bound P13.';

export const TIMELINE_5D_PHYSICS: Array<{ year: string; milestone: string; contributionToH12: string }> = [
  { year: '1921', milestone: 'Kaluza (1921) [15]', contributionToH12: 'Introduced a fifth metric coordinate extending 4D General Relativity to unify gravity and electromagnetism under the cylinder condition.' },
  { year: '1926', milestone: 'Klein (1926) [16]', contributionToH12: 'Compactified the fifth dimension onto a circle y ∈ S¹ of microscopic radius R_5, introducing the quantized Kaluza–Klein momentum ladder.' },
  { year: '1999', milestone: 'Randall–Sundrum (1999) [2]', contributionToH12: 'Introduced exponential AdS_5 warping e^{−2k|y|} across S¹/ℤ_2 orbifold branes, demonstrating hierarchy suppression and conformal horizon bounds.' },
  { year: '2026', milestone: 'IGRT-H12 (2026) [1]', contributionToH12: 'Synthesizes 5D warped/compact geometry with the H11 SLD-QFI bundle, isolates strict negative theorems vs. Category C conjectures, and defines protocols P7–P13.' }
];

export const POSITIVE_CONJECTURES_SUMMARY: Array<{
  conjecture: string;
  statement: string;
  test: string;
  category: H12EpistemicCategory;
}> = [
  {
    conjecture: '1. Model 2B Asymmetric Bulk Shortcut',
    statement: 'In an assumed bulk with α_t + α_x > 0, Beltrami geodesics achieve η_fold = 0.86634 (k Δx = 2), 0.34279 (10), and 0.07770 (50) while obeying ds_5² = 0.',
    test: 'Protocol P11 (direct folding) & P12 (bulk gauge birefringence); not yet achievable.',
    category: 'CATEGORY C — CONJECTURAL'
  },
  {
    conjecture: '2. Physical Compactification or AdS_5 Bulk y',
    statement: 'A real fifth spacetime coordinate y exists below current torsion-balance ceiling R_5 ≤ 44 μm (m_KK^(1) ≥ 4.485 meV).',
    test: 'Protocol P7 (CANNEX 10 μm Yukawa reach = 19.733 meV) & P10 (3G GW leakage).',
    category: 'CATEGORY C — CONJECTURAL'
  },
  {
    conjecture: '3. 5D Brane-World Hayward Tidal Charge & GL',
    statement: 'Projection of 5D Weyl curvature adds tidal charge q_tidal to Hayward cores with black strings unstable below r_+/R_AdS = 0.876.',
    test: 'Protocol P10 (ET/CE ringdown scalar/KK dispersion) vs. H11 P4.',
    category: 'CATEGORY C — CONJECTURAL'
  },
  {
    conjecture: '4. 5D Orbifold Ekpyrotic Bounce & Holographic Complexity',
    statement: 'H11 bounce maps onto S¹/ℤ_2 brane collision and modular Fisher distance s_QFI parallels bulk volume complexity in AdS_5.',
    test: 'Cosmological ΔN_eff < 0.28, LiteBIRD (H11 P3), & LISA/DECIGO stochastic bands.',
    category: 'CATEGORY C — CONJECTURAL'
  }
];

export const NEGATIVE_RESULTS_SUMMARY: Array<{
  theorem: string;
  statement: string;
  implication: string;
  category: H12EpistemicCategory;
}> = [
  {
    theorem: '1. Flat Compact M_4 × S¹ No-Shortcut Theorem',
    statement: 'Every null curve with nonzero Δy satisfies L_5 = √(Δx² + Δy²) > L_4 (benchmark ratio L_5/L_4 = 1.001249 at 50 m / 1 km).',
    implication: 'Simple Kaluza–Klein circles strictly delay arrival times and never yield spatial or temporal shortcuts.',
    category: 'CATEGORY B — DERIVED'
  },
  {
    theorem: '2. Conformal RS AdS_5 Horizon Theorem (No-Go 4.1)',
    statement: 'Under Poincaré coordinate z = k⁻¹ e^{ky}, ds_5² = (kz)⁻²(−c²dt² + dx² + dz²) ⇒ c_eff(y) = c everywhere (excursion ratio 1.010321).',
    implication: 'Standard symmetric Randall–Sundrum bulks strictly forbid super-brane photon arrival without asymmetric warping.',
    category: 'CATEGORY B — DERIVED'
  },
  {
    theorem: '3. 4D H11 Hayward Non-Portal NEC Theorem',
    statement: 'Static g_tt g_rr = −1 enforces G^t_t = G^r_r ⇒ ρ + p_r = 0 identically and 8πG(ρ + p_⊥) = 9r_s a³ r³/(r³+a³)³ > 0 at r_core = 2.5389 × 10⁻²² m.',
    implication: 'Ordinary non-singular Hayward regular black holes do NOT violate NEC and are NOT traversable wormholes. The negative theorems rule out physical portals.',
    category: 'CATEGORY B — DERIVED'
  },
  {
    theorem: '4. Morris–Thorne Exotic Mass & 10⁷¹ Casimir Deficit',
    statement: 'Zero-tidal throat requires E_exotic = −(π/2)(c⁴/G)r_0 (−1.0637 × 10⁻³ M_⊙ at 1 m; −3.1912 M_⊙ at 3 km); Casimir supplies 4.50 × 10⁻⁷¹ at 1 m (0.2436 at ℓ_0).',
    implication: 'The negative theorems rule out physical portals: macroscopic traversable wormholes cannot be stabilized by vacuum Casimir engineering and suffer lethal tidal acceleration (9.078 × 10¹⁴ m/s² at 1 m).',
    category: 'CATEGORY B — DERIVED'
  },
  {
    theorem: '5. AQFT 5D Microcausality & No-Communication Theorem',
    statement: 'Lorentzian signature implies [O_A, O_B] = 0 at spacelike separation; Tr_B(U_B ρ_AB U_B^†) leaves ρ_A strictly invariant.',
    implication: 'Entanglement and ER=EPR mathematical bridges carry strictly zero faster-than-light signaling capacity.',
    category: 'CATEGORY A — ESTABLISHED'
  },
  {
    theorem: '6. Hilbert Fiber PU(ℋ) Decoupling & Born Isolation',
    statement: 'SLD Fisher identity V² + D_QFI² = 1 holds inside internal PU(ℋ) ⊥ ∂/∂y without Born derivation or physical 5D transit.',
    implication: 'Double-slit interference does NOT probe spatial travel through the fifth dimension and does NOT derive Born’s postulate.',
    category: 'CATEGORY B — DERIVED'
  },
  {
    theorem: '7. Protocol P13 Passive GW170817/GRB 170817A Folding Null Bound',
    statement: 'Multi-messenger arrival window |Δt_{GW−EM}| ≤ 1.7 s across D_L = 40 Mpc bounds bulk tensor-vs-photon folding to |η_fold^{GW−EM} − 1| ≤ 4.129 × 10⁻¹⁶ (6.353 × 10⁻¹⁶ conservative at 26 Mpc).',
    implication: 'Eliminates unscreened macroscopic gravitational bulk shortcuts at the 10⁻¹⁶ level today; Protocol P13 is a passive bound from existing data, not an active test.',
    category: 'CATEGORY B — DERIVED'
  }
];

export const GLOSSARY_NEGATIVE_THEOREMS: Array<{ term: string; definition: string }> = [
  { term: 'Conformal Horizon Theorem', definition: 'Proof that equal temporal and spatial warp factors w_t(y) = w_x(y) keep bulk light speed equal to brane c everywhere.' },
  { term: 'NEC Satisfaction Blockade', definition: 'Exact Einstein-tensor cancellation ρ + p_r = 0 in static Hayward metrics prohibiting wormhole throat flare-out.' },
  { term: 'Casimir Deficit Bound', definition: 'The 71-order-of-magnitude shortfall between physical electromagnetic vacuum negative energy at r_0 = 1 m and Morris–Thorne NEC requirements.' },
  { term: 'AQFT No-Signaling Lock', definition: 'Locality postulate [O_A, O_B] = 0 forbidding local unitary operations at B from altering marginal statistics at A regardless of bulk connectivity.' }
];

export const WHAT_IS_UNIQUE_TO_5D: Array<{
  observable: string;
  reproducedIn4DH11: string;
  uniqueTo5DH12: string;
  empiricalStatus: string;
}> = [
  {
    observable: 'Short-Range 5–44 μm Yukawa Gravity Residual',
    reproducedIn4DH11: 'Chameleon P5 has distinct screened power-law profile, NOT fixed-range exponential KK tower.',
    uniqueTo5DH12: 'Exponential Yukawa α_KK e^{−r/R_5} with first KK mass m_KK^(1) = ℏc/R_5 ≥ 4.485 meV (P7 target 19.733 meV).',
    empiricalStatus: 'Unobserved (Eöt-Wash currently null to 44 μm)'
  },
  {
    observable: 'GW Scalar/Breathing Mode & Bulk Dimming (d_L^GW ≠ d_L^EM)',
    reproducedIn4DH11: 'H11 P4 predicts purely 4D TT polarizations plus WKB echo K_echo = 0.184 (no missing bulk flux).',
    uniqueTo5DH12: 'Massive KK ringdown dispersion and extra-dimensional graviton leakage |h_scalar/h_tensor| ≤ 10⁻³ (P10).',
    empiricalStatus: 'Unobserved (GW170817 constrains leakage; ET/CE 2035+)'
  },
  {
    observable: 'Beltrami Bulk Arrival Shortcut (η_fold < 1)',
    reproducedIn4DH11: 'Strictly forbidden in 4D M_4 without external bulk dimension.',
    uniqueTo5DH12: 'Model 2B asymmetric warping Δt_5 < Δt_4 (Category C mathematical possibility; Protocols P11–P13).',
    empiricalStatus: 'Unobserved; P11–P12 unachievable; P13 GW170817 bounds |η_fold − 1| ≤ 4.129 × 10⁻¹⁶'
  },
  {
    observable: 'Double-Slit V² + D_QFI² = 1, No-Signaling, κ_ψ, H_0 = 70.77, Hayward NEC',
    reproducedIn4DH11: '100% reproduced inside strictly 4D IGRT-H11 (or standard QM/GR).',
    uniqueTo5DH12: 'NOTHING unique to 5D—verified identical to 4.972 × 10⁻¹⁴ at 1 neV.',
    empiricalStatus: 'Preserved 4D baseline (H11 P1–P6)'
  }
];

export const FIVE_D_OBSERVATIONAL_BOUNDS: Array<{
  probe: string;
  bound: string;
  h12Status: string;
  derivationOrAssumption: string;
}> = [
  {
    probe: 'Eöt-Wash Torsion Balance [5]',
    bound: 'R_5 ≤ 44 μm ⇒ m_KK^(1) ≥ 4.485 meV; M_5 ≥ 2.985 × 10⁸ GeV (flat) / 1.8101 × 10¹⁸ GeV (warped)',
    h12Status: 'Derived Consistency',
    derivationOrAssumption: 'Derived directly in §2.2 & verify-igrt-h12.mjs from Yukawa inverse-square limit [5] and 4D Planck matching.'
  },
  {
    probe: 'BBN Relativistic Degrees of Freedom',
    bound: 'ΔN_eff < 0.28 at T_BBN ~ 1 MeV',
    h12Status: 'Assumed Satisfied (1% Weyl ΔN_eff = 0.0614)',
    derivationOrAssumption: 'Heavy KK tower (m_KK ≥ 4.485 meV) and subdominant bulk Weyl dark radiation (ρ_Weyl ≤ 1% ρ_rad ⇒ ΔN_eff = 0.0614 < 0.28; Assertion 77) are assumed rather than derived from 5D reheating.'
  },
  {
    probe: 'GW170817 / GRB 170817A Speed of Gravity [14]',
    bound: '|c_GW / c − 1| ≤ 10⁻¹⁵; |η_fold^{GW−EM} − 1| ≤ 4.129 × 10⁻¹⁶',
    h12Status: 'Brane-Locked / Assumed for Asymmetric Bulk',
    derivationOrAssumption: 'Preserved identically on the y = 0 brane; GW170817 arrival delay [14] sets Protocol P13 passive ceiling while asymmetric bulk mode mixing remains assumed away from brane tensors.'
  },
  {
    probe: 'Cassini Shapiro Time Delay',
    bound: '|γ_PPN − 1| < 2.3 × 10⁻⁵ (e^{−1 AU / 44 μm} = 0)',
    h12Status: 'Assumed via Radion Stabilization [21]',
    derivationOrAssumption: 'Inherited H11 Vainshtein Z_ψ = 7.05 × 10¹⁴ suppresses 4D scalar; 5D radion Φ_rad stabilized above 4.485 meV via Goldberger–Wise [21] gives 10 μm attenuation 0.7967 and zero Solar System PPN deviation (Assertion 77).'
  },
  {
    probe: 'LHC Missing-ET Monojets & Resonances',
    bound: 'σ(pp → G_KK + jet) excluded below ~few TeV',
    h12Status: 'Consistent / Scale Assumed',
    derivationOrAssumption: 'Automatically satisfied at flat M_5 ≥ 2.985 × 10⁸ GeV and warped k = 10¹⁸ GeV, though TeV warped IR realizations remain assumed parameter choices.'
  },
  {
    probe: 'Dark Energy (DESI / Pantheon+) & CMB (Planck)',
    bound: 'w_0 = −0.831, w_a = −0.542, H_0 = 70.77 ± 0.72, T_CMB = 0.235 meV ≪ m_KK^(1)',
    h12Status: 'H11 Preserved / Bulk Subdominant Assumed',
    derivationOrAssumption: '4D PNGB dark energy and recombination physics remain exact H11 predictions [1] assuming bulk Weyl projection E_μν stays subdominant (< 1%).'
  }
];

export const WHAT_IS_NOT_DERIVED_LEDGER: Array<{
  claim: string;
  category: H12EpistemicCategory;
  whyNotDerived: string;
}> = [
  { claim: 'Existence of a physical 5th dimension y', category: 'CATEGORY C — CONJECTURAL', whyNotDerived: 'Postulated as an ambient mathematical manifold hypothesis without prior experimental detection.' },
  { claim: 'Eq. (H12.0.1) 5D Warped Metric Ansatz', category: 'CATEGORY C — CONJECTURAL', whyNotDerived: 'Written as a phenomenological warped line element; asymmetric α_t + α_x > 0 is not a vacuum solution of ⁵G_AB + Λ_5 G_AB = 0.' },
  { claim: 'Eq. (H12.0.2) Temporal Folding Ratio η_fold', category: 'CATEGORY C — CONJECTURAL', whyNotDerived: 'Defined axiomatically as a ratio of bulk-to-brane proper times on the assumed 5D lift rather than derived from first principles.' },
  { claim: 'Positive Beltrami Shortcuts (η_fold = 0.86634..0.07770)', category: 'CATEGORY C — CONJECTURAL', whyNotDerived: 'While the exact ghost-free Einstein–Maxwell bulk (α_t = 1.0, α_x = 0.0) admits analytical shortcuts strictly inside finite horizon span k Δx < π (η_fold = 0.84147 at k Δx = 2, lim 2/π = 0.63662), unbounded-span shortcuts k Δx ≥ π (0.34279, 0.07770) require α_x > 0 from unverified phenomenological anisotropic bulk matter, and no macroscopic bulk Maxwell flux is observed.' },
  { claim: '5D Bundle Lift P_5 & Radion Vainshtein Screening', category: 'CATEGORY C — CONJECTURAL', whyNotDerived: 'Assumed by analogy with H11; full non-linear 5D Vainshtein field equations for Φ_rad(x, y) are not integrated.' },
  { claim: 'Goldberger–Wise Radion Stabilization', category: 'CATEGORY C — CONJECTURAL', whyNotDerived: 'Referenced as an external mechanism required to keep Φ_rad massive above meV scales without dynamical derivation.' },
  { claim: '5D Hayward Black-String & Gregory–Laflamme Threshold', category: 'CATEGORY C — CONJECTURAL', whyNotDerived: 'GL threshold r_+/R_AdS = 0.876 is imported from linearized vacuum string stability, not freshly derived for coupled Hayward–Araki matter.' },
  { claim: '5D BFV–BRST Algebra & UV Completion Above M_5', category: 'CATEGORY C — CONJECTURAL', whyNotDerived: '5D gravity is non-renormalizable above M_5 and neither the 5D constraint algebra nor string/asymptotic-safety UV fixed point is computed here.' },
  { claim: 'Holographic ER=EPR in Flat 4D & Chronology Protection', category: 'CATEGORY C — CONJECTURAL', whyNotDerived: 'Both AdS/CFT dual wormholes and Δσ⁻⁵ Cauchy-horizon vacuum backreaction remain unproven outside asymptotic AdS_5.' },
  { claim: 'Cosmological BBN / GW170817 / Dark Radiation Quenching', category: 'CATEGORY C — CONJECTURAL', whyNotDerived: 'Brane-localized tensor and thermal-relic bounds assume high reheating cutoff and negligible Weyl dark radiation.' },
  { claim: 'Born Rule P = |ψ|² Origin', category: 'CATEGORY A — ESTABLISHED', whyNotDerived: 'Explicitly retained as an established quantum mechanical postulate rather than falsely derived from 5D geometry.' },
  { claim: 'Asymmetric Warp Parameters (α_t + α_x > 0)', category: 'CATEGORY C — CONJECTURAL', whyNotDerived: 'The asymmetric warp required for shortcuts is not derived from a physical principle; while Einstein–Maxwell (1.0, 0.0) satisfies coupled field equations, no macroscopic bulk electric flux is observed.' },
  { claim: 'Analog Simulators (Devices C, F) & Protocols P11–P13', category: 'CATEGORY D — SPECULATIVE ENGINEERING', whyNotDerived: 'Effective refractive/acoustic analogs do not curve G_AB, controlled bulk emitters for P11–P12 lie beyond foreseeable technology, and P13 only yields passive astrophysical upper bounds.' }
];

export const P7_TO_P13_TIMELINE_TABLE: Array<{
  protocol: string;
  currentState: string;
  requiredSensitivity: string;
  expectedYear: string;
}> = [
  { protocol: 'P7 · Short-Range KK Gravity (Bulk Test)', currentState: '44 μm Eöt-Wash (4.485 meV)', requiredSensitivity: '10 μm / 10⁻¹¹ N/m² (19.733 meV)', expectedYear: '2026–2030 (CANNEX)' },
  { protocol: 'P8 · Optical/Nuclear Clocks (KK Test)', currentState: '10⁻¹⁸–10⁻¹⁹ Sr/Yb lab stability', requiredSensitivity: '|δν/ν| ≤ 10⁻¹⁹ controlled sweep', expectedYear: '2027–2032 (JILA/PTB)' },
  { protocol: 'P9 · Double-Slit Fisher (Decoherence Test)', currentState: '~10⁻⁴–10⁻⁵ visibility control', requiredSensitivity: '|δV_5D| < 10⁻⁶ at N = 10¹⁴', expectedYear: '2026–2029' },
  { protocol: 'P10 · 3G GW Bulk Leakage (Graviton Test)', currentState: 'LVK O4/O5 ~10⁻¹ scalar limit', requiredSensitivity: '|h_scalar / h_tensor| ≤ 10⁻³ (SNR ≥ 100)', expectedYear: '2035+ (ET / CE)' },
  { protocol: 'P11 · Direct Bulk Trajectory Folding Test', currentState: 'No controlled bulk emitter/actuator exists', requiredSensitivity: '|η_fold − 1| ~ 10⁻⁵ across Δx', expectedYear: 'Conceptual / Not Currently Achievable' },
  { protocol: 'P12 · Asymmetric Bulk Gauge Birefringence', currentState: 'Astrophysical |Δc/c| < 10⁻¹⁵–10⁻¹⁸ bounds', requiredSensitivity: '|Δc/c| < 10⁻¹⁸ across bulk-coupled modes', expectedYear: 'Long-Term / Contingent on ϵ_bulk' },
  { protocol: 'P13 · Passive Multi-Messenger GW–EM Folding', currentState: 'GW170817 |η_fold^{GW−EM} − 1| ≤ 4.129 × 10⁻¹⁶', requiredSensitivity: '|η_fold^{GW−EM} − 1| ≤ 10⁻¹⁸ (z < 1 BNS)', expectedYear: 'Active Now & 2026–2035+ (LVK / ET+GRB)' }
];

export const P7_TO_P13_FALSIFICATION_TABLE: Array<{
  protocol: string;
  nullBound: string;
  whatItRulesOut: string;
}> = [
  { protocol: 'P7', nullBound: '|ΔP_KK(10 μm)| < 10⁻¹¹ N/m²', whatItRulesOut: 'Excludes compact flat S¹ extra dimension down to R_5 < 10 μm (m_KK > 19.733 meV); tests 5D bulk, not folding.' },
  { protocol: 'P8', nullBound: '|δν/ν| < 10⁻¹⁹ null', whatItRulesOut: 'Rules out unscreened local radion/KK clock detuning above 10⁻¹⁹; anomaly ≠ QFI scaling falsifies Eq. (H12.0.2).' },
  { protocol: 'P9', nullBound: 'V² + D_QFI² = 1 to < 10⁻⁶', whatItRulesOut: 'Excludes 5D Hilbert-to-bulk decoherence coupling |δφ_5D| > 10⁻⁶; tests decoherence, not folding.' },
  { protocol: 'P10', nullBound: '|h_scalar / h_tensor| < 10⁻³ & d_L^GW = d_L^EM', whatItRulesOut: 'Excludes large-volume RS/ADD gravitational bulk energy leakage into non-tensor polarizations.' },
  { protocol: 'P11', nullBound: '|η_fold − 1| < 10⁻⁵ (when technologically feasible)', whatItRulesOut: 'Would rule out direct controlled Model 2B bulk trajectory shortcuts; currently unachievable.' },
  { protocol: 'P12', nullBound: '|Δc/c| < 10⁻¹⁸ across broadband EM baselines', whatItRulesOut: 'Rules out unshielded asymmetric gauge penetration ϵ_bulk (α_t + α_x) into asymmetrically warped bulk.' },
  { protocol: 'P13', nullBound: '|η_fold^{GW−EM} − 1| ≤ 4.129 × 10⁻¹⁶ (GW170817)', whatItRulesOut: 'Excludes unscreened natural graviton-vs-photon bulk arrival folding at 10⁻¹⁶ level across 40 Mpc.' }
];

export const P7_TO_P13_CONFIRMATION_TABLE: Array<{
  protocol: string;
  signalSignature: string;
  requiredControl: string;
}> = [
  { protocol: 'P7', signalSignature: 'Exponential α_KK e^{−d/R_5} deviation distinct from CANNEX Chameleon power law', requiredControl: '≥ 5σ fit after electrostatic patch & Casimir subtraction' },
  { protocol: 'P8', signalSignature: 'Repeatable |δν/ν| > 5 × 10⁻¹⁹ following modulated Φ_rad / KK dispersion template', requiredControl: '≥ 5σ orthogonal check against GR Shapiro, BBR, & Zeeman drifts' },
  { protocol: 'P9', signalSignature: 'Anomalous non-environmental visibility loss ΔV_5D > 5 × 10⁻⁶ with V² + D_QFI² < 1 tracking modulated baseline', requiredControl: 'Cryogenic vacuum & seismic cross-correlation > 5σ' },
  { protocol: 'P10', signalSignature: 'Coincident breathing mode h_b (≥ 5σ) + chirped KK echo train alongside H11 K_echo = 0.184', requiredControl: 'Triangular ET + CE null-stream separation from astrophysical plasma' },
  { protocol: 'P11', signalSignature: 'Controllable Δτ_5 < Δτ_4 asymmetry reproducing Beltrami η_fold < 1 between shared brane vertices', requiredControl: 'Not currently achievable; requires verified bulk emitter calibration' },
  { protocol: 'P12', signalSignature: 'Frequency-correlated vacuum birefringence scaling with bulk coupling ϵ_bulk (α_t + α_x)', requiredControl: 'Subtract interstellar plasma Faraday dispersion (ν⁻²)' },
  { protocol: 'P13', signalSignature: 'Systematic multi-messenger GW arrival precedence Δt_GW < Δt_EM exceeding astrophysical progenitor lag across multiple BNS mergers', requiredControl: '≥ 5σ population regression across host distances D_L after prompt-emission lag modeling' }
];

export const P7_TO_P13_DECISION_MATRIX: Array<{
  outcome: string;
  posteriorStatus: string;
  mandatoryAction: string;
}> = [
  { outcome: 'P1–P6 positive AND P7–P10 & P13 all null', posteriorStatus: '4D IGRT-H11 corroborated; low-scale 5D bulk & folding unsupported', mandatoryAction: 'Retain strictly 4D H11; push R_5 < 10 μm and P13 BNS stack < 10⁻¹⁸, or sunset 5D branch.' },
  { outcome: 'P7 or P10 positive (>5σ) consistent with (R_5, m_KK)', posteriorStatus: 'Direct empirical evidence for extra-dimensional bulk (not yet folding)', mandatoryAction: 'Advance P12/P13 multi-messenger folding dispersion constraints & update joint Bayes factor.' },
  { outcome: 'P13 detects systematic distance-linear GW precedence (>5σ)', posteriorStatus: 'Candidate astrophysical evidence for asymmetric bulk tensor folding', mandatoryAction: 'Cross-correlate against P10 scalar/KK echoes and test P12 photon dispersion.' },
  { outcome: 'Ambiguous 2σ–4σ single-probe excess or systematic tension', posteriorStatus: 'Inconclusive / Look-elsewhere trial-factor artifact candidate', mandatoryAction: 'Freeze global Bayes update; require blind cross-check on orthogonal probe (P7↔P10 or P8↔P9) reaching SNR_global ≥ 5.5.' },
  { outcome: 'P8 or P9 violates QFI identity outside environmental systematics', posteriorStatus: 'Falsifies strict fiber–bulk orthogonality Eq. (2.1)', mandatoryAction: 'Revise or reject H12 clock coupling law (H12.0.2).' },
  { outcome: 'P1–P13 all null across achievable sensitivity ceilings', posteriorStatus: 'Rules out observable low-scale 5D IGRT & macroscopic folding', mandatoryAction: 'Retire physical 5D extension to Planck-scale mathematical archive.' }
];

export const H11_VS_H12_PROTOCOLS_COMPARISON: Array<{
  aspect: string;
  h11Protocols: string;
  h12Protocols: string;
}> = [
  { aspect: 'Identifier Scope', h11Protocols: 'P1–P6 (Preregistered SHA-256)', h12Protocols: 'P7–P10 (5D Bulk/KK/Leakage), P11–P12 (Active Folding Concepts), P13 (Passive GW–EM)' },
  { aspect: 'Target Physics', h11Protocols: 'Strictly 4D (ULDM lock, DP collapse, CMB B-modes, GW echoes, Chameleon, Φ_portal)', h12Protocols: 'P7–P10 test 5D bulk/KK/decoherence/leakage (NOT folding); P11–P13 test folding (only P13 feasible now)' },
  { aspect: 'Can Results Confirm 5D?', h11Protocols: 'NO — Positive P1–P6 tests confirm 4D H11 only', h12Protocols: 'YES — P7/P10 confirm bulk existence; P11–P13 isolate asymmetric bulk folding' },
  { aspect: 'Epistemic Burden', h11Protocols: 'Tightly constrained Category B EFT predictions', h12Protocols: 'Conditional on Category C 5D hypothesis' }
];

export const H12_PROTOCOL_ANALYSIS_SECTIONS: Array<{ title: string; content: string }> = [
  {
    title: 'Systematics & Dominant Physical Backgrounds (P7–P13)',
    content: 'Each protocol faces distinct quantitative noise ceilings: P7 (tests 5D bulk, not folding) is limited below d ~ 15 μm by Kelvin-probe electrostatic patch potentials (~5 pN/m²) and Casimir zero-point pressure P_Casimir(10 μm) = −1.30 × 10⁻⁴ N/m²; P8 (tests KK corrections, not folding) Sr-87/Th-229 clocks are bounded by blackbody radiation shifts (Δν_BBR/ν ~ 5 × 10⁻¹⁹ at ΔT = 10 mK), quadratic Zeeman shifts (~2 × 10⁻¹⁹), seismic Doppler jitter (< 10⁻¹⁹), and geodetic gravitational redshift; P9 (tests decoherence, not folding) is limited by shot noise 1/√N = 1.0 × 10⁻⁷ at N = 10¹⁴ events plus residual gas dephasing (< 3 × 10⁻⁷ at 10⁻¹¹ mbar); P10 (tests 5D graviton leakage, not shortcuts) uses the triangular ET + CE null stream S_null = ∑ w_I h_I to bound breathing mode h_b ≤ 10⁻³; P11–P12 remain currently unachievable at hardware/bulk-coupling level; and P13 (passive GW–EM folding bound) is limited by intrinsic astrophysical GRB jet breakout lags (~0.5–1.7 s) and host-galaxy peculiar velocities (~10⁻³).'
  },
  {
    title: 'Statistical Significance & Required Signal-to-Noise Ratio (P7–P13)',
    content: 'Every H12 empirical channel (P7–P13) enforces a strict 5σ local-plus-global discovery standard p_global = N_trials · ∫_{Z_obs}^∞ (2π)⁻¹/² e^{−z²/2} dz ≤ 2.87 × 10⁻⁷ (SNR_global ≥ 5.5–6.0 after look-elsewhere correction across N_trials ~ 200 parameter scan points in R_5, α_KK, and f_KK for P7–P10, and N_trials ~ 50 BNS redshift/lag nuisance grid cells for P13), with 95% CL upper exclusions quoted when null residuals match the H11/GR baseline.'
  },
  {
    title: 'Multi-Messenger & Cross-Protocol Joint Likelihood (P7–P13)',
    content: 'Empirical protocols constrain orthogonal projections of Θ_5D = (R_5, k, α_t + α_x) via explicit joint log-likelihood ln ℒ_joint(Θ_5D) = ln ℒ_P7(R_5, α_KK) + ln ℒ_P8(m_KK^(1), δν/ν) + ln ℒ_P9(δV_5D) + ln ℒ_P10(|h_s/h_t|, d_L^GW/d_L^EM) + ln ℒ_P13(η_fold^{GW−EM}), eliminating sliding-scale degeneracy between bulk leakage and asymmetric metric dispersion.'
  },
  {
    title: 'Null Hypothesis Baseline',
    content: 'The null hypothesis H_0 for every H12 test is strictly 4D General Relativity + Standard Model + 4D IGRT-H11 effective field theory (E ≪ 4.485 meV), predicting ΔP_KK = 0, δν/ν = 4.972 × 10⁻¹⁴ (unresolvable below 10⁻¹⁹), V² + D_QFI² = 1 identically, h_scalar = 0, and η_fold^{GW−EM} = 1.'
  },
  {
    title: 'Bayesian Evidence & Quantitative Occam Penalty (H12 vs. H11)',
    content: 'Model selection evaluates the logarithmic Bayes factor Δ ln B_{12/11} = ½ Δχ² + Δ ln O ≈ ln[P(D | H12)/P(D | H11)] under the Jeffreys scale. Marginalizing k_extra = 4 extra bulk parameters (R_5, k, α_t, α_x) with prior-to-posterior contraction Δ ln(σ_post/σ_prior) = −1.4 per parameter imposes a deterministic Occam penalty Δ ln O = −4 × 1.4 = −5.60 (within [−7, −4]). Consequently, reaching strong evidence Δ ln B_{12/11} ≥ +5.0 requires Δχ² ≥ 21.2; at the 5σ benchmark Δχ² = 25, Δ ln B_{12/11} = 12.50 − 5.60 = +6.90 (verified in scripts/verify-igrt-h12.mjs).'
  }
];

export const H12_FALSIFICATION_CHECKLIST: string[] = [
  'P7 Null: CANNEX-class torsion/Casimir plates detect zero Yukawa residual (< 10⁻¹¹ N/m²) down to R_5 = 10 μm (ruling out flat extra dimensions above m_KK = 19.733 meV; tests 5D bulk, not folding).',
  'P8–P9 Inconsistency: Optical/nuclear clocks (|δν/ν| ≤ 10⁻¹⁹, P8) or double-slit visibility tests (P9) measure anomalous non-GR/non-QM deviations violating Eq. (H12.0.2) or V² + D_QFI² = 1.',
  'P10 Null: 3G gravitational-wave observatories (ET/CE) place |h_scalar / h_tensor| < 10⁻³ and d_L^GW / d_L^EM = 1 ± 10⁻⁴ across z < 2, eliminating large-volume bulk graviton leakage.',
  'P13 Passive Null: Stacked BNS multi-messenger arrivals tighten |η_fold^{GW−EM} − 1| from 4.129 × 10⁻¹⁶ (GW170817) below 10⁻¹⁸, falsifying unscreened asymmetric bulk tensor shortcuts (while P11–P12 active lab tests remain technologically unachievable).'
];

export const H12_CONFIRMATION_CHECKLIST: string[] = [
  'P7 Bulk Detection: Observation of a ≥ 5σ exponential short-range gravitational force residual α_KK e^{−d/R_5} distinct from 4D H11 Chameleon power laws (confirms 5D bulk, not yet folding).',
  'P10 Bulk Leakage Detection: Coincident detection of scalar/breathing GW polarization (h_b ≥ 10⁻³) accompanied by KK dispersion harmonics in ET/CE mergers.',
  'P13 Passive Multi-Messenger Precedence: Statistically significant (≥ 5σ) distance-linear GW arrival precedence Δt_GW < Δt_EM exceeding intrinsic GRB jet lags across multiple BNS mergers.',
  'P11–P12 Folding Verification: Independent detection of asymmetric bulk gauge birefringence (P12) or macroscopic bulk timing asymmetry (P11) matching Model 2B η_fold < 1 without Lorentz-signature violation.'
];

export const H12_FUNDING_AGENCY_SUMMARY =
  'Summary for Funding Agencies (Impact & Portfolio Risk Mitigation): Funding the near-term experimental tracks of IGRT-H12—specifically Protocol P7 (CANNEX sub-10 μm Casimir–Yukawa plate), P8 (10⁻¹⁹ optical/nuclear clock networks), P9 (10⁻⁶ matter-wave SLD Fisher interferometers), P13 multi-messenger GW/EM timing archives, and analog Devices C & F (photonic waveguides and Rb-87 BEC horizons)—delivers high dual-use metrology value regardless of whether a fifth dimension exists. A null result sets world-record inverse-square gravity bounds (19.733 meV), advances quantum-limited metrology and atomic timekeeping, and cleanly isolates negative bounds preventing wasted investment in physically infeasible macroscopic wormhole schemes. Conversely, any >5σ P7, P10, or P13 signal would constitute a foundational breakthrough in higher-dimensional gravitation.';

export const H12_DEFINITIONS_LIST: Array<{ id: string; term: string; formalDefinition: string }> = [
  { id: 'Def 1.1', term: '5D Principal Bundle P_5', formalDefinition: 'Bundle π_5: P_5 → M_5 = M_4 × K_1 with fiber PU(ℋ) orthogonal to ∂/∂y.' },
  { id: 'Def 3.1', term: 'Temporal Folding Ratio η_fold', formalDefinition: 'Coordinate-invariant comparison η_fold ≡ Δτ_5 / Δτ_4 between bulk trajectory τ_5 and brane reference τ_4 connecting shared events A, B ∈ M_4.' },
  { id: 'Def 3.2', term: 'Temporal Folding Tensor ℱ_AB', formalDefinition: 'Tensorial measure ℱ_AB ≡ e^{2α_t k |y|} G_AB − g_AB^(4) of warped proper-time departure from the brane.' },
  { id: 'Def 4.1', term: 'Effective Bulk Coordinate Speed c_eff(y)', formalDefinition: 'Coordinate propagation rate c_eff(y) = c · e^{(α_t + α_x) k |y|} preserving ds_5² = 0 locally.' },
  { id: 'Def 6.1', term: 'Morris–Thorne Flare-Out Condition', formalDefinition: 'Throat boundary b(r_0) = r_0, b\'(r_0) < 1 forcing negative radial null stress (ρc² + p_r)|_{r_0} < 0.' },
  { id: 'Def 7.1', term: 'Helstrom QFI Path Distinguishability', formalDefinition: 'Trace-distance path measure D_QFI = √(1 − |⟨d_1|d_2⟩|²) paired with visibility V = |⟨d_1|d_2⟩|.' },
  { id: 'Def 1.2', term: 'Four-Tier Epistemic Taxonomy (A–D)', formalDefinition: 'Classification separating Established (A), Derived (B), Conjectural (C), and Speculative Engineering (D) claims.' }
];

export const H12_THEOREMS_LIST: Array<{ id: string; title: string; category: H12EpistemicCategory; location: string }> = [
  { id: 'Boundary Theorem 1.1', title: 'Low-Energy Decoupling & H11 Equivalence (δ_KK = 4.972 × 10⁻¹⁴ at 1 neV)', category: 'CATEGORY B — DERIVED', location: 'Ch. 1 (§1.2)' },
  { id: 'Theorem 3.1', title: 'Gauge-Invariant Temporal Folding Criterion (η_fold < 1 vs Coordinate Gauge)', category: 'CATEGORY B — DERIVED', location: 'Ch. 3 (§3.2)' },
  { id: 'No-Go Theorem 4.1', title: 'Absence of Null Arrival Shortcuts in Flat S¹ & Conformal RS AdS_5', category: 'CATEGORY B — DERIVED', location: 'Ch. 4 (§4.1)' },
  { id: 'NEC Theorem 5.1', title: '4D Hayward Regular Black-Hole Non-Portal Proof (ρ + p_r = 0, ρ + p_⊥ > 0)', category: 'CATEGORY B — DERIVED', location: 'Ch. 5 (§5.1)' },
  { id: 'Theorem 6.1', title: 'Morris–Thorne Exotic Mass & 10⁷¹ Casimir Energy Deficit Theorem', category: 'CATEGORY B — DERIVED', location: 'Ch. 6 (§6.2)' },
  { id: 'Theorem 7.1', title: 'SLD Fisher–Englert Complementarity Identity (V² + D_QFI² = 1 Independent of y)', category: 'CATEGORY B — DERIVED', location: 'Ch. 7 (§7.1)' },
  { id: 'No-Signaling Theorem 8.1', title: 'AQFT 5D Microcausality Preservation of Quantum No-Communication', category: 'CATEGORY A — ESTABLISHED', location: 'Ch. 8 (§8.1)' }
];

export const H12_OPEN_PROBLEMS_LIST: Array<{ id: string; problem: string; statusNote: string }> = [
  { id: 'OP-1', problem: 'Dynamical Realization of Unbounded Asymmetric Bulks (α_x > 0) & Empirical Bulk Flux', statusNote: 'Ghost-free 5D Einstein–Maxwell (α_t = 1, α_x = 0) yields exact shortcuts only inside finite span k Δx < π (η_fold → 2/π); extending to unbounded spans k Δx ≥ π requires a ghost-free derivation with α_x > 0 plus empirical observation of bulk fields.' },
  { id: 'OP-2', problem: 'Full 5D BFV–BRST Constraint Algebra & UV Completion Above M_5', statusNote: 'Non-renormalizable above M_5 (10⁸–10¹⁸ GeV); demands explicit 5D functional renormalization group flow or string embedding.' },
  { id: 'OP-3', problem: 'Exact 5D Localized Rotating Kerr–Hayward Brane Black-Hole Solution', statusNote: 'Static black strings pinch below r_+/R_AdS = 0.876; analytic rotating localized 5D Hayward solutions remain unknown.' },
  { id: 'OP-4', problem: 'Self-Consistent 5D Chronology Protection Backreaction (⟨T_AB⟩_ren)', statusNote: 'Whether 5D Δσ⁻⁵ vacuum polarization generically enforces chronology protection between counter-moving branes remains open.' },
  { id: 'OP-5', problem: 'Nonlinear 5D Radion Vainshtein Screening Coupled to Goldberger–Wise Stabilization', statusNote: 'Currently assumed by extension from 4D H11; full coupled 5D PDE stability across cosmological history awaits solution.' },
  { id: 'OP-6', problem: 'Empirical Detection or Exclusion of KK Modes Below R_5 < 10 μm (P7 / P10 / P13)', statusNote: 'Requires 2026–2036+ experimental campaigns at CANNEX, 3G gravitational-wave observatories, and multi-messenger BNS stacks.' }
];

export const H12_PRIOR_AUDIT_RESPONSES: Array<{ auditScope: string; panelCritique: string; harmonizedResolution: string }> = [
  {
    auditScope: 'H11 Baseline Calibration (1): Eq. (0.1) Index, κ_0 Scope & Split Bound Phrasing',
    panelCritique: 'Predecessor review flagged Eq. (0.1) σ_1(K_ξ) vs K_ζ notation, κ_−ℓ_0 = 0.9294 vs κ_0, Table 0.1 tilde formatting, and ambiguous "bounded below 10⁻³⁰" split phrasing.',
    harmonizedResolution: 'All typographical items corrected verbatim in the locked H11 monograph (665 assertions + 6 hygiene checks passing; SHA-256 preserved untouched).'
  },
  {
    auditScope: 'H11 Baseline Calibration (2): Cosmology Input-Driven ΔAIC & Hubble Clarification',
    panelCritique: 'Requested candid distinction between Planck–SH0ES vs Planck–DESI tensions and explicit Jeffreys-scale / ΔAIC input-driven caveats.',
    harmonizedResolution: 'Preserved verbatim in H11 §7.1 and §8.2; never inflated or overwritten in H12 follow-up.'
  },
  {
    auditScope: 'H12 Epistemic Revision (3): Beltrami Shortcuts & Assumed Metrics Reclassified to Category C',
    panelCritique: 'Review warned that labeling Model 2B shortcuts, Eqs. (H12.0.1)–(H12.0.2), or 5D lifts as "Derived (Category B)" blurred assumed ansätze with vacuum proofs.',
    harmonizedResolution: 'Reclassified Eq. (H12.0.1), Eq. (H12.0.2), Beltrami shortcuts η_fold = 0.86634..0.07770, and Table 1.1 Rows 1, 4, 5, 9 strictly to Category C (Conjectural); Row 12 reclassified to Category A.'
  },
  {
    auditScope: 'H12 Structural Revision (4): Speculative Portal Chapters & Unified Monograph Integration',
    panelCritique: 'Technical review noted Chapter 9/10 engineering mechanisms obscured H12’s strongest contribution (exact negative theorems).',
    harmonizedResolution: 'Relocated Chapters 9–10 to Appendices L–M, Scorecard to Appendix N, and unified Technical Appendices A–K alongside Chapters 1–13; elevated Chapters 9–11 cleanly to Negative Results Summary, What Is Unique to 5D?, and What Is Not Derived.'
  }
];

export const EPISTEMIC_BC_GREY_AREA_RUBRIC: Array<{
  boundaryCase: string;
  derivedAspect: string;
  conjecturalAspect: string;
  assignedCategory: H12EpistemicCategory;
  ruleApplied: string;
}> = [
  {
    boundaryCase: '1. Beltrami Geodesic Shooting Ratios (η_fold = 0.86634..0.07770)',
    derivedAspect: 'Variational Euler–Lagrange integration, N800/N1600 convergence (< 2.2 × 10⁻⁷), and ds_5² ≡ 0 hold to < 10⁻¹⁴.',
    conjecturalAspect: 'Requires assumed anisotropic bulk ansatz (H12.0.1) with α_t + α_x > 0 not derived from vacuum Einstein equations.',
    assignedCategory: 'CATEGORY C — CONJECTURAL',
    ruleApplied: 'Boundary Rule: Any numerical output whose physical metric premises lack vacuum action derivation defaults strictly to Category C.'
  },
  {
    boundaryCase: '2. Eq. (H12.0.2) Temporal Folding Ratio η_fold ≡ Δτ_5 / Δτ_4',
    derivedAspect: 'Coordinate-invariant ratio of line-element arc lengths well defined on any Lorentzian manifold.',
    conjecturalAspect: 'Elevates the lift onto an unobserved fifth dimension into a candidate clock law without dynamical 5D action derivation.',
    assignedCategory: 'CATEGORY C — CONJECTURAL',
    ruleApplied: 'Boundary Rule: Axiomatic definitions referencing unproven extra coordinates carry Category C classification.'
  },
  {
    boundaryCase: '3. 5D Hayward Black Strings & Gregory–Laflamme Threshold (0.876)',
    derivedAspect: 'GL instability at r_+/R_AdS = 0.876 is rigorously derived for linearized 5D Schwarzschild–AdS strings.',
    conjecturalAspect: 'Direct transfer to coupled Hayward–Araki stress-energy with Weyl charge q_tidal is assumed without numerical 5D PDE evolution.',
    assignedCategory: 'CATEGORY C — CONJECTURAL',
    ruleApplied: 'Boundary Rule: External literature thresholds applied to coupled matter sectors without fresh variation remain Category C.'
  },
  {
    boundaryCase: '4. 5D Radion Vainshtein / Goldberger–Wise Screening',
    derivedAspect: '4D H11 Galileon Z_ψ = 7.05 × 10¹⁴ and Cassini bounds are derived cleanly inside 4D Horndeski EFT.',
    conjecturalAspect: '5D radion Φ_rad is assumed to acquire an analogous potential avoiding sub-44 μm fifth-force bounds.',
    assignedCategory: 'CATEGORY C — CONJECTURAL',
    ruleApplied: 'Boundary Rule: Screening mechanisms imported by analogy rather than integrated from 5D scalar–tensor equations stay Category C.'
  },
  {
    boundaryCase: '5. Negative Theorems (Flat S¹, Conformal AdS_5, 4D Hayward NEC, Casimir Deficit)',
    derivedAspect: 'Every premise lies strictly inside established GR, Poincaré geometry, or QFT inequalities with zero unverified exotic ansatz.',
    conjecturalAspect: 'None: negative obstructions remain valid even if no fifth dimension exists or even if bulk matter fails anisotropy.',
    assignedCategory: 'CATEGORY B — DERIVED',
    ruleApplied: 'Boundary Rule: Obstruction theorems proven unconditionally from Category A metrics receive full Category B status.'
  }
];

export const H11_665_ASSERTIONS_CATALOG: Array<{
  moduleGroup: string;
  assertionCount: number;
  verifiedPhysicalScope: string;
}> = [
  {
    moduleGroup: 'A. CODATA 2022 Constants, Araki Coupling κ_ψ & Vainshtein Screening',
    assertionCount: 18,
    verifiedPhysicalScope: 'ℓ_Pl, τ_0, M_Pl, κ_ψ = 2.1727 × 10⁻²¹ GeV⁻¹, and H_0 ∈ [67.4, 73.0] km s⁻¹ Mpc⁻¹ solar/terrestrial Z_ψ & PPN checks.'
  },
  {
    moduleGroup: 'B. Klein–Gordon PNGB Dark Energy, Bounce Cosmology & ULDM / Nano-Sphere DP',
    assertionCount: 24,
    verifiedPhysicalScope: 'RK4 integration of (w_0, w_a) = (−0.831, −0.542), n_s = 0.9637, r < 0.03, R_0 = 1.028 μm SiO_2 collapse, and ULDM λ_dB.'
  },
  {
    moduleGroup: 'C. Hayward Core ξ_0 = 2⁻¹/⁴, WKB Echoes K_echo = 0.184 & H9/H10 Linear/Strong Closures',
    assertionCount: 72,
    verifiedPhysicalScope: 'Page-curve remnant M_rem = 1.09236 M_Pl, Hawking evaporation integral, Hubble tension H_0 = 70.77 ± 0.72, Dirac commutators, and Fisher projections.'
  },
  {
    moduleGroup: 'D. H11 Core Cross-Module Mathematical Constants & Parity Guards',
    assertionCount: 162,
    verifiedPhysicalScope: 'Zero raw LaTeX checks across TS modules, SVG @font-face & balanced <text> structural audits (22 SVGs + 123 programmatic tokens).'
  },
  {
    moduleGroup: 'E. Exhaustive Monograph Bibliography Coverage (Citations [1]..[109])',
    assertionCount: 109,
    verifiedPhysicalScope: 'Programmatic verification that all 109 bibliographic entries [1]–[109] are actively cited inside monograph prose/apparatus.'
  },
  {
    moduleGroup: 'F. SHA-256 Preregistration Hash & 6-File Static Hygiene Suite',
    assertionCount: 280,
    verifiedPhysicalScope: 'Exact match of H11 preregistration SHA-256 (57cf3f1c...048d) plus 6 static source hygiene checks verifying full reproducibility (Total: 665 assertions + 6 hygiene checks).'
  }
];

export const REGULATOR_SENSITIVITY_TABLE: Array<{
  regimeOrRegulator: string;
  energyOrRadius: string;
  computedOutput: string;
  physicalInterpretation: string;
}> = [
  {
    regimeOrRegulator: 'Eöt-Wash Ceiling & n=1,2,3 KK Modes + S¹/ℤ_2 Orbifold',
    energyOrRadius: 'R_5 ≤ 44 ± 2 μm',
    computedOutput: 'm_KK^(1..3) = 4.485 / 8.969 / 13.454 meV; M_5(S¹) = 2.985 (±0.045) × 10⁸ GeV; M_5(S¹/ℤ_2) = 3.761 × 10⁸ GeV',
    physicalInterpretation: 'Propagates ±2 μm systematic and 22 ppm CODATA G uncertainties across S¹ and S¹/ℤ_2 topologies.'
  },
  {
    regimeOrRegulator: 'Tree-Level KK Form Factor (E = 1 neV)',
    energyOrRadius: 'E / m_KK^(1) = 2.2298 × 10⁻⁷',
    computedOutput: 'δ_KK = 4.972 × 10⁻¹⁴',
    physicalInterpretation: 'Canonical low-energy 4D H11 recovery well below 10⁻¹⁹ optical-clock precision.'
  },
  {
    regimeOrRegulator: 'Pauli–Villars & Heat-Kernel Exponential UV Cutoffs (Λ = M_5)',
    energyOrRadius: 'E = 1 neV, Λ = 2.985 × 10⁸ GeV',
    computedOutput: 'δ_PV = 4.972 × 10⁻¹⁴; δ_HK = 4.972 × 10⁻¹⁴',
    physicalInterpretation: 'Both Lorentz-covariant UV cutoffs agree with tree-level decoupling to > 20 decimal digits.'
  },
  {
    regimeOrRegulator: 'Dim-Reg (MS-bar) & Non-Perturbative FRG Litim Cutoff',
    energyOrRadius: 'μ = m_KK^(1) = 4.485 meV',
    computedOutput: 'δ_MS = 9.645 × 10⁻¹⁵; δ_FRG = 3.149 × 10⁻¹⁶',
    physicalInterpretation: 'Non-perturbative Wetterich Litim threshold and 1-loop MS-bar leave H11 untouched (< 10⁻¹⁴).'
  },
  {
    regimeOrRegulator: 'Zeta-Regularized Infinite KK Tower',
    energyOrRadius: '∑ n⁻² = ζ(2) = π²/6',
    computedOutput: 'δ_ζ(2) = 8.179 × 10⁻¹⁴',
    physicalInterpretation: 'Summing the full discrete KK ladder shifts tree level only by π²/6 = 1.6449× (< 10⁻¹³).'
  },
  {
    regimeOrRegulator: 'Thermal Clock Environment Sweep (4 K / 77 K / 300 K)',
    energyOrRadius: 'k_B T vs m_KK^(1) = 4.485 meV',
    computedOutput: 'δ(4 K) = 5.873 × 10⁻³; EFT breakdown ratio 1.48 (77 K) & 5.76 (300 K)',
    physicalInterpretation: 'Cryogenic 4 K cavities remain safely inside EFT; 77 K / 300 K thermal photons probe KK thresholds.'
  },
  {
    regimeOrRegulator: 'Flat 44 μm Perturbative Clock Sweep',
    energyOrRadius: '1 μeV / 1 meV / 1 eV / 8.355 eV (Th-229)',
    computedOutput: '4.972 × 10⁻⁸ (1 μeV) → 4.737 × 10⁻² (1 meV); EFT breaks > 4.485 meV (ratio 223 & 1863)',
    physicalInterpretation: 'Optical (1 eV) and Th-229 (8.355 eV) clocks leave 44 μm EFT, probing warped TeV bulks instead.'
  },
  {
    regimeOrRegulator: 'Warped TeV Bulk Optical & Nuclear Sweep',
    energyOrRadius: 'm_KK^(1) = 1.0 TeV (RS IR brane)',
    computedOutput: 'δ(1 eV) = 1.000 × 10⁻²⁴; δ(Th-229, 8.355 eV) = 6.981 × 10⁻²³',
    physicalInterpretation: 'Quantifies why warped TeV KK modes preserve atomic & nuclear clock frequency ratios.'
  }
];

export const MODEL2B_CONVERGENCE_AND_MICROCAUSALITY_TABLE: Array<{
  benchmarkSpan: string;
  turningPeak: string;
  etaFoldAndSpeed: string;
  elAndNullResidual: string;
}> = [
  {
    benchmarkSpan: 'k Δx = 2.0 (N_u = 800 vs N_u = 1600, α_t = α_x = 0.5)',
    turningPeak: 'y_peak = 0.42878 / k',
    etaFoldAndSpeed: 'η_fold = 0.86634 (c_eff / c = 1.1543×)',
    elAndNullResidual: 'Δη(800/1600) = 6.55 × 10⁻⁸; EL res = 1.93 × 10⁻⁹; ds_5² = 4.91 × 10⁻¹⁶'
  },
  {
    benchmarkSpan: 'k Δx = 10.0 (N_u = 800 vs N_u = 1600, α_t = α_x = 0.5)',
    turningPeak: 'y_peak = 2.87237 / k',
    etaFoldAndSpeed: 'η_fold = 0.34279 (c_eff / c = 2.9172×)',
    elAndNullResidual: 'Δη(800/1600) = 2.18 × 10⁻⁷; EL res = 4.40 × 10⁻¹⁰; ds_5² = 5.24 × 10⁻¹⁶'
  },
  {
    benchmarkSpan: 'k Δx = 50.0 (N_u = 800 vs N_u = 1600, deep bulk arch)',
    turningPeak: 'y_peak = 6.07633 / k',
    etaFoldAndSpeed: 'η_fold = 0.07770 (c_eff / c = 12.8695×)',
    elAndNullResidual: 'Δη(800/1600) = 1.68 × 10⁻⁷; EL res = 2.57 × 10⁻⁹; ds_5² = 6.11 × 10⁻¹⁶'
  },
  {
    benchmarkSpan: 'k Δx = 2.0 (Exact Ghost-Free Einstein–Maxwell, α_t = 1.0, α_x = 0.0)',
    turningPeak: 'y_peak = −k⁻¹ ln cos(1) = 0.61563 / k',
    etaFoldAndSpeed: 'η_fold = sin(1) = 0.84147 (c_eff / c = 1.1884×; k Δx < π ceiling, lim 2/π = 0.63662)',
    elAndNullResidual: 'Δη(800/1600) = 1.39 × 10⁻⁷; EL res = 1.64 × 10⁻⁹; ds_5² = 4.45 × 10⁻¹⁶'
  }
];

export const P7_TO_P13_NOISE_BUDGET_TABLE: Array<{
  protocol: string;
  primaryNoiseSources: string;
  quantitativeBudget: string;
  mitigationArchitecture: string;
}> = [
  {
    protocol: 'P7 · CANNEX Sub-10 μm Gravity (Tests 5D Bulk)',
    primaryNoiseSources: 'Electrostatic patch potentials, Casimir background, seismic tilt',
    quantitativeBudget: 'Patch ~ 5 × 10⁻¹² N/m²; Casimir(10 μm) = −1.30 × 10⁻⁴ N/m²',
    mitigationArchitecture: 'Kelvin-probe feedback + planar gold plate symmetry subtracting Casimir d⁻⁴ from exponential e^{−d/R_5}.'
  },
  {
    protocol: 'P8 · Sr-87 / Th-229 Clocks (Tests KK Corrections)',
    primaryNoiseSources: 'Blackbody radiation (ΔT), quadratic Zeeman, gravitational redshift, seismic Doppler',
    quantitativeBudget: 'BBR ~ 5 × 10⁻¹⁹; Zeeman ~ 2 × 10⁻¹⁹; Redshift Δh = 1 mm ~ 1.1 × 10⁻¹⁹',
    mitigationArchitecture: 'Cryogenic/monitored 10 mK shields, hyperfine m_F averaging, and optical fiber link transfer.'
  },
  {
    protocol: 'P9 · Double-Slit Fisher (Tests Decoherence)',
    primaryNoiseSources: 'Counting shot noise, residual gas scattering, interferometer phase jitter',
    quantitativeBudget: 'Shot noise 1/√N = 1.0 × 10⁻⁷ at N = 10¹⁴; gas dephasing < 3 × 10⁻⁷',
    mitigationArchitecture: 'UHV (10⁻¹¹ mbar) cryogenic Talbot–Lau / optical cavity with < 10⁻⁷ rad active phase lock.'
  },
  {
    protocol: 'P10 · 3G GW (ET + CE Network; Tests Bulk Leakage)',
    primaryNoiseSources: 'Newtonian gravity gradients (1–10 Hz), quantum radiation pressure, plasma dispersion',
    quantitativeBudget: 'Strain floor ~ 10⁻²⁴ Hz⁻¹/² (10 Hz–3 kHz); |h_scalar/h_tensor| ≤ 10⁻³ at SNR ≥ 100',
    mitigationArchitecture: 'Triangular Einstein Telescope + L-shaped Cosmic Explorer null stream isolating breathing polarization.'
  },
  {
    protocol: 'P11 · Active Bulk Trajectory Folding (Conceptual)',
    primaryNoiseSources: 'Absence of controlled brane-exit/re-entry bulk emitter; brane trapping > m_KK',
    quantitativeBudget: 'Requires |η_fold − 1| ~ 10⁻⁵ across calibrated macroscopic Δx',
    mitigationArchitecture: 'Not achievable today; awaits proven physical coupling permitting y ≠ 0 excitation.'
  },
  {
    protocol: 'P12 · Asymmetric Bulk Gauge Birefringence',
    primaryNoiseSources: 'Interstellar plasma dispersion (ν⁻²), intrinsic source spectral evolution lags',
    quantitativeBudget: 'Broadband arrival residual |Δc/c| < 10⁻¹⁸',
    mitigationArchitecture: 'Multi-band X-ray/gamma/radio regression subtracting plasma column density.'
  },
  {
    protocol: 'P13 · Passive Multi-Messenger GW–EM Folding',
    primaryNoiseSources: 'Astrophysical jet breakout delay (0.5–1.7 s), host peculiar velocity redshift',
    quantitativeBudget: 'GW170817 D_L = 40 Mpc ⇒ |η_fold^{GW−EM} − 1| ≤ 4.129 × 10⁻¹⁶',
    mitigationArchitecture: 'Population stacking across dozens of joint BNS/EM detections to separate D_L-linear bulk folding from source-local delays.'
  }
];

export const P13_SYSTEMATIC_ERROR_BUDGET: Array<{
  source: string;
  magnitudeOrUncertainty: string;
  impactOnEtaFold: string;
  mitigationStrategy: string;
}> = [
  {
    source: '1. Intrinsic GRB Jet Breakout & Engine Lag (Δt_int)',
    magnitudeOrUncertainty: '+0.5 s to +1.74 s astrophysical prompt delay (GRB 170817A observed +1.74 s)',
    impactOnEtaFold: 'Dominates single-event systematic budget: 1.7 s / T_light = 4.129 × 10⁻¹⁶ at 40 Mpc',
    mitigationStrategy: 'Multi-event D_L regression separates distance-independent Δt_int from D_L-proportional bulk folding Δt_fold ∝ D_L.'
  },
  {
    source: '2. Host-Galaxy Luminosity Distance Uncertainty (D_L)',
    magnitudeOrUncertainty: 'NGC 4993 D_L = 40 (+8 / −14) Mpc (1σ lower bound 26 Mpc)',
    impactOnEtaFold: 'Conservative 26 Mpc shifts ceiling from 4.129 × 10⁻¹⁶ to 6.353 × 10⁻¹⁶',
    mitigationStrategy: 'Combine surface-brightness fluctuation + Fundamental Plane calibrations and GW bright-siren inclination priors.'
  },
  {
    source: '3. Line-of-Sight Shapiro Delay & Gravitational Lensing',
    magnitudeOrUncertainty: 'Δt_Shapiro ~ 10⁻¹⁰ to 10⁻⁹ s for cosmological unlensed BNS vs. EM',
    impactOnEtaFold: '|δ η_Shapiro| < 2.5 × 10⁻²⁵ (negligible relative to 10⁻¹⁶–10⁻¹⁹ bounds)',
    mitigationStrategy: 'Standard PPN γ_PPN = 1 equality between tensor and photon rays on y = 0.'
  },
  {
    source: '4. Host Peculiar Velocity & Intergalactic Dispersion',
    magnitudeOrUncertainty: 'v_pec / c ~ 10⁻³ (redshift uncertainty ±0.001) & radio plasma ν⁻²',
    impactOnEtaFold: 'Contributes < 10⁻³ fractional error on distance scale and < 10⁻² s in gamma-ray bands (> 50 keV)',
    mitigationStrategy: 'Trigger EM counterpart in MeV gamma / optical kilonova onset rather than low-frequency radio afterglow.'
  }
];

export const P13_STATISTICAL_ERROR_BUDGET: Array<{
  channel: string;
  measurementPrecision: string;
  propagatedEtaFoldError: string;
  sampleScalingNote: string;
}> = [
  {
    channel: 'GW Merger Coalescence Trigger (t_c, GW170817)',
    measurementPrecision: 'σ_{t,GW} = 0.05 s (LIGO-Hanford/Livingston triangulation)',
    propagatedEtaFoldError: '1.214 × 10⁻¹⁷ at D_L = 40 Mpc',
    sampleScalingNote: 'Sub-millisecond arrival phase accuracy achievable in 3G ET + CE triangular networks.'
  },
  {
    channel: 'Gamma-Ray Burst Prompt Onset (t_EM, Fermi-GBM)',
    measurementPrecision: 'σ_{t,EM} = 0.10 s (50–300 keV T90 trigger edge)',
    propagatedEtaFoldError: '2.429 × 10⁻¹⁷ at D_L = 40 Mpc',
    sampleScalingNote: 'Limited by photon count statistics in weak off-axis short GRBs.'
  },
  {
    channel: 'Quadrature Combined Statistical Error (Single GW170817)',
    measurementPrecision: 'σ_{t,stat} = √(0.05² + 0.10²) = 0.1118 s',
    propagatedEtaFoldError: 'σ_{η,stat} = 2.716 × 10⁻¹⁷ at D_L = 40 Mpc (15× smaller than 1.7 s jet lag)',
    sampleScalingNote: 'Single-event error is entirely systematic-dominated by astrophysical jet breakout.'
  },
  {
    channel: '3G Stacked BNS Catalog (ET + CE + SVOM/Theseus)',
    measurementPrecision: 'σ_{lag} = 0.50 s per BNS across N = 150 mergers at ⟨D_L⟩ = 400 Mpc',
    propagatedEtaFoldError: 'σ_{η,3G} = 9.916 × 10⁻¹⁹ (< 10⁻¹⁸ benchmark)',
    sampleScalingNote: '1 / (D_L √N) scaling suppresses both statistical jitter and uncorrelated jet lag.'
  }
];

export const P7_TO_P13_COMBINED_BOUNDS_TABLE: Array<{
  protocolPairOrCluster: string;
  constrainedParameters: string;
  combinedJointLikelihoodRole: string;
  orthogonalExclusionPower: string;
}> = [
  {
    protocolPairOrCluster: 'P7 + P8 (Short-Range Gravity + Optical/Nuclear Clocks)',
    constrainedParameters: '(R_5, α_KK, δν/ν_KK)',
    combinedJointLikelihoodRole: 'ln ℒ_P7(R_5, α_KK) + ln ℒ_P8(m_KK^(1), δν/ν)',
    orthogonalExclusionPower: 'Eliminates compactified flat extra dimensions down to R_5 < 10 μm (19.733 meV) and unscreened radion drifts > 10⁻¹⁹.'
  },
  {
    protocolPairOrCluster: 'P9 + P10 (Double-Slit Fiber Check + 3G GW Leakage)',
    constrainedParameters: '(δV_5D, |h_s/h_t|, d_L^GW/d_L^EM)',
    combinedJointLikelihoodRole: 'ln ℒ_P9(δV_5D) + ln ℒ_P10(|h_s/h_t|, d_L^GW/d_L^EM)',
    orthogonalExclusionPower: 'Separates internal fiber PU(ℋ) decoherence (< 10⁻⁶) from astrophysical 5D scalar/KK graviton bulk leakage (< 10⁻³).'
  },
  {
    protocolPairOrCluster: 'P10 + P13 (Bulk Leakage + Passive GW–EM Timing)',
    constrainedParameters: '(α_t + α_x, |h_s/h_t|, η_fold^{GW−EM})',
    combinedJointLikelihoodRole: 'ln ℒ_P10 + ln ℒ_P13(η_fold^{GW−EM})',
    orthogonalExclusionPower: 'Breaks degeneracy between static brane-world gravity dimming and dynamic asymmetric bulk arrival precedence down to 10⁻¹⁸.'
  },
  {
    protocolPairOrCluster: 'P7–P10 + P13 (Full Achievable Joint Bayes Posterior)',
    constrainedParameters: 'Θ_5D = (R_5, k, α_t + α_x) with k_extra = 4 Occam penalty',
    combinedJointLikelihoodRole: 'ln ℒ_joint = −½ Δχ²; Δ ln B_{12/11} = ½ Δχ² − 5.60',
    orthogonalExclusionPower: 'Requires global Δχ² ≥ 21.2 (5σ benchmark Δχ² = 25 ⇒ ln ℒ_joint = −12.50, Δ ln B_{12/11} = +6.90) to overcome 4-parameter Occam penalty.'
  }
];

export const P7_TO_P13_SENSITIVITY_PROJECTION_TABLE: Array<{
  protocol: string;
  currentBaseline2026: string;
  nearTerm2027_2032: string;
  longTerm3G2035Plus: string;
}> = [
  { protocol: 'P7 (Bulk Yukawa)', currentBaseline2026: 'R_5 ≤ 44 μm (4.485 meV)', nearTerm2027_2032: 'R_5 ≤ 10 μm (19.733 meV, CANNEX)', longTerm3G2035Plus: 'Sub-micron ~1 μm (~197 meV)' },
  { protocol: 'P8 (KK Clocks)', currentBaseline2026: '|δν/ν| ~ 10⁻¹⁸ (Sr/Yb)', nearTerm2027_2032: '|δν/ν| ≤ 10⁻¹⁹ (Th-229 / optical)', longTerm3G2035Plus: '|δν/ν| ~ 10⁻²⁰ entangled networks' },
  { protocol: 'P9 (QFI Slit)', currentBaseline2026: '|δV_5D| < 10⁻⁴', nearTerm2027_2032: '|δV_5D| < 10⁻⁶ (N = 10¹⁴)', longTerm3G2035Plus: '|δV_5D| < 10⁻⁸ atom fountains' },
  { protocol: 'P10 (GW Leakage)', currentBaseline2026: '|h_s/h_t| < 10⁻¹ (LVK O4/O5)', nearTerm2027_2032: 'LVK A+ / Voyager ~ 10⁻²', longTerm3G2035Plus: '|h_s/h_t| ≤ 10⁻³ (ET + CE)' },
  { protocol: 'P11 (Active Fold)', currentBaseline2026: 'Infeasible (no bulk emitter)', nearTerm2027_2032: 'Infeasible (conceptual only)', longTerm3G2035Plus: 'Contingent on bulk coupling discovery' },
  { protocol: 'P12 (Birefringence)', currentBaseline2026: '|Δc/c| < 10⁻¹⁵ (archival)', nearTerm2027_2032: '|Δc/c| < 10⁻¹⁷ (CTA / Fermi)', longTerm3G2035Plus: '|Δc/c| < 10⁻¹⁸ broadband' },
  { protocol: 'P13 (Passive GW–EM)', currentBaseline2026: '4.129 × 10⁻¹⁶ (GW170817)', nearTerm2027_2032: '~5 × 10⁻¹⁷ (LVK O5 BNS)', longTerm3G2035Plus: '9.916 × 10⁻¹⁹ (3G 150-BNS stack)' }
];

export const P13_SUMMARY_OF_BOUNDS_TABLE: Array<{
  datasetOrRegime: string;
  baselineDistance: string;
  arrivalBoundOrPrecision: string;
  etaFoldLimit: string;
  epistemicNote: string;
}> = [
  {
    datasetOrRegime: 'GW170817 / GRB 170817A (Nominal)',
    baselineDistance: 'D_L = 40 Mpc',
    arrivalBoundOrPrecision: '|Δt_{GW−EM}| ≤ 1.7 s (+1.74 s obs)',
    etaFoldLimit: '|η_fold^{GW−EM} − 1| ≤ 4.129 × 10⁻¹⁶',
    epistemicNote: 'Passive Category B upper bound from existing archive'
  },
  {
    datasetOrRegime: 'GW170817 Conservative 1σ Distance',
    baselineDistance: 'D_L = 26 Mpc (−14 Mpc bound)',
    arrivalBoundOrPrecision: '|Δt_{GW−EM}| ≤ 1.7 s',
    etaFoldLimit: '|η_fold^{GW−EM} − 1| ≤ 6.353 × 10⁻¹⁶',
    epistemicNote: 'Robust lower-distance systematic bound'
  },
  {
    datasetOrRegime: 'GW170817 Statistical Uncertainty Only',
    baselineDistance: 'D_L = 40 Mpc',
    arrivalBoundOrPrecision: 'σ_{stat} = 0.1118 s (0.05 s ⊕ 0.10 s)',
    etaFoldLimit: 'σ_{η,stat} = 2.716 × 10⁻¹⁷',
    epistemicNote: 'Subdominant to 1.7 s jet breakout lag'
  },
  {
    datasetOrRegime: '3G Stacked BNS Projection (ET + CE)',
    baselineDistance: '⟨D_L⟩ = 400 Mpc (N = 150 BNS)',
    arrivalBoundOrPrecision: 'σ_{lag} = 0.50 s per merger',
    etaFoldLimit: 'σ_{η,3G} = 9.916 × 10⁻¹⁹ (< 10⁻¹⁸)',
    epistemicNote: 'Future 2035+ population regression reach'
  }
];

export const P13_DEDICATED_PROTOCOLS_AND_CHECKS: Array<{ title: string; content: string }> = [
  {
    title: 'Falsification Protocol for P13',
    content: 'Under zero systematic distance-linear GW precedence across N ≥ 150 joint BNS detections (⟨D_L⟩ = 400 Mpc, σ_{lag} = 0.50 s), stacking collapses |η_fold^{GW−EM} − 1| below 9.916 × 10⁻¹⁹ at 95% CL, falsifying unscreened asymmetric bulk tensor-vs-photon arrival folding across cosmological baselines (already excluded above 4.129 × 10⁻¹⁶ by GW170817 [14]).'
  },
  {
    title: 'Confirmation Protocol for P13',
    content: 'Confirming a genuine asymmetric bulk signature via P13 requires observing systematic GW arrival precedence (Δt_GW < Δt_EM) growing linearly with luminosity distance D_L across ≥ 10 unlensed multi-messenger mergers at global significance SNR_global ≥ 5.5 (p_global ≤ 2.87 × 10⁻⁷), persisting after subtracting intrinsic GRB jet breakout lags and verified by P10 scalar/KK ringdown modes.'
  },
  {
    title: 'Systematic Check for P13',
    content: 'Isolate astrophysical engine/jet breakout lag (+0.5 to +1.74 s) from cosmological propagation via linear regression Δt_{GW−EM}(D_L) = Δt_int + (η_fold^{GW−EM} − 1)(D_L / c), propagating NGC 4993 distance priors (40 → 26 Mpc shifts bound from 4.129 × 10⁻¹⁶ to 6.353 × 10⁻¹⁶), host peculiar velocities (~10⁻³), and LOS Shapiro parity (< 10⁻⁹ s).'
  },
  {
    title: 'Multi-Messenger Consistency Check for P13',
    content: 'Cross-check P13 timing residuals against Protocol P10 luminosity-distance dimming (d_L^GW / d_L^EM) and Protocol P12 high-energy photon dispersion (|Δc/c| < 10⁻¹⁸). Any tensor-only bulk shortcut violating |d_L^GW / d_L^EM − 1| bounds or inducing anomalous graviton breathing polarizations fails joint likelihood closure ln ℒ_joint.'
  },
  {
    title: 'Future Prospects for P13 (LVK O5 → 3G Detectors)',
    content: 'Near-term LVK O5 + SVOM/Einstein Probe BNS alerts push single-decade passive bounds toward ~5 × 10⁻¹⁷; third-generation triangular Einstein Telescope and Cosmic Explorer networks paired with wide-field gamma monitors (2035+) reach 9.916 × 10⁻¹⁹ across 150 BNS mergers, tightening constraints on asymmetric tensor bulk folding by > 400×.'
  }
];


