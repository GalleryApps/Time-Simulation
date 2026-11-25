/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Paper 14:
 * "Does Gravity Bend Space, or Just Slow Down the Universe's Clock Speed?"
 *
 * Prepared for Foundations of Physics & Episteme.
 * Pure TypeScript article data containing a single-paragraph journal Abstract (<= 200 words),
 * Chapters 1-9 with unified academic prose, formal action/PPN/horizon/loop derivations,
 * comparative tables (Tables 4.1, 5.1, 5.2, 6.1, 8.1, 8.2), technical glossary (12 terms),
 * Appendices A-F (including Reproducibility Appendix F), and 39 primary references.
 */

export type ClockPaperTier =
  | 'ESTABLISHED EMPIRICAL FACT'
  | 'STANDARD GENERAL RELATIVITY'
  | 'UPDATE-RATE REINTERPRETATION'
  | 'PPN STRESS-TEST & FALSIFICATION'
  | 'FRONTIER OBSERVATIONAL PROBE'
  | 'EPISTEMOLOGY & PHILOSOPHY OF SCIENCE';

export interface ClockPaperAuthor {
  name: string;
  affiliation: string;
  orcid?: string;
  orcidUrl?: string;
  email?: string;
  creditRoles: string;
}

export interface ClockPaperEquation {
  label: string;
  unicodeHtml: string;
  caption: string;
  tier: ClockPaperTier;
  plainMeaning: string;
  provenance?: string;
  derivationSteps?: string[];
}

export interface ClockPaperWorkedExample {
  title: string;
  setup: string;
  steps: string[];
  resultEquation: ClockPaperEquation;
  takeaway: string;
}

export interface ClockPaperTheoremBox {
  kind: 'Theorem' | 'Proposition' | 'Lemma' | 'No-Go Result';
  number: string;
  title: string;
  tier: ClockPaperTier;
  statement: string;
  proofSteps: string[];
  sourceNote: string;
}

export interface ClockPaperSubsection {
  number: string;
  title: string;
  tier: ClockPaperTier;
  paragraphs: string[];
  equation?: ClockPaperEquation;
  theoremBox?: ClockPaperTheoremBox;
  workedExample?: ClockPaperWorkedExample;
}

export interface ClockPaperChapter {
  id: string;
  number: number;
  title: string;
  kicker: string;
  tier: ClockPaperTier;
  epigraph: string;
  leadSummary: string;
  chapterIntro: string[];
  subsections: ClockPaperSubsection[];
}

export interface ClockPaperReproducibilityEntry {
  checkpoint: string;
  formula: string;
  referenceConstants: string;
  computedOutput: string;
}

export interface ClockPaperAppendix {
  letter: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  title: string;
  tier: ClockPaperTier;
  summary: string;
  equations: ClockPaperEquation[];
  theoremBoxes?: ClockPaperTheoremBox[];
  workedExamples?: ClockPaperWorkedExample[];
  reproducibilityLedger?: ClockPaperReproducibilityEntry[];
  paragraphs: string[];
}

export interface ClockPaperGlossaryEntry {
  term: string;
  acronym?: string;
  tier: ClockPaperTier;
  definition: string;
}

export interface ClockPaperReference {
  id: number;
  citation: string;
}

export const CLOCK_SPEED_META = {
  paperNumber: 'Paper 14',
  title: 'Does Gravity Bend Space, or Just Slow Down the Universe’s Clock Speed?',
  subtitle:
    'Lorentzian Spacetime Curvature, Local Update-Rate Formulations, Post-Newtonian Equivalence, and Empirical Constraints Across Weak and Strong Gravitational Fields',
  targetVenues: 'Prepared for Foundations of Physics & Episteme',
  journalType: 'Foundational Physics & Epistemology · Research Article',
  date: 'November 2026',
  pacsCodes: '04.20.Cv, 04.80.Cc, 04.70.Bw, 03.65.Ta, 01.70.+w',
  msc2020Codes: '83C05, 83B05, 83C57, 81P05, 00A30',
  keywords: [
    'gravitational time dilation',
    'local update-rate hypothesis',
    'optical Gordon metric',
    'parametrized post-Newtonian (PPN) formalism',
    'Hayward regular black holes',
    'Lorentz invariance violation',
    'underdetermination',
    'structural realism'
  ],
  authors: [
    {
      name: 'Marlon D. Bulaqueña, Ph.D.',
      affiliation: 'Department of Physics, Yale University, New Haven, CT 06520, USA',
      orcid: '0009-0007-3966-0494',
      orcidUrl: 'https://orcid.org/0009-0007-3966-0494',
      creditRoles: 'Conceptualization, PPN Equivalence Analysis, Formal Proofs, Writing'
    },
    {
      name: 'Jean-Charles Tassan',
      affiliation: 'Laboratory of Resonant Epistemology & Open Quantum Systems',
      orcid: '0009-0000-8566-0486',
      orcidUrl: 'https://orcid.org/0009-0000-8566-0486',
      creditRoles: 'Update-Rate Ontology, Epistemic Underdetermination, Review'
    },
    {
      name: 'Wilson John Sterking Lauret',
      affiliation: 'Extended Gravity & Quantum Information Metrology Consortium',
      orcid: '0009-0004-7889-6641',
      orcidUrl: 'https://orcid.org/0009-0004-7889-6641',
      creditRoles: 'Optical Clock Metrology, Quantum Fisher Step-Rate Mapping, Review'
    },
    {
      name: 'Rupak Chatterjee, Ph.D.',
      affiliation: 'Industry Associate Professor, Applied Physics, Tandon School of Engineering, New York University',
      orcid: '0009-0002-8553-5401',
      orcidUrl: 'https://orcid.org/0009-0002-8553-5401',
      creditRoles: 'Astrophysical Bounds, UHECR Dispersion Limits, Review'
    },
    {
      name: 'Walter Goldberger',
      affiliation: 'Department of Physics, Yale University, New Haven, CT 06520, USA',
      email: 'walter.goldberger@yale.edu',
      creditRoles: 'Schwarzschild & Post-Newtonian Geodesic Verification, Review'
    }
  ] as ClockPaperAuthor[]
};

export const CLOCK_SPEED_ABSTRACT: string[] = [
  'Atomic chronometers run measurably slower deeper inside gravitational potentials, motivating a systematic evaluation of whether gravitation bends four-dimensional spacetime geometry or throttles a local physical update rate α_upd(x) inside flat space. This paper formalizes the Local Update-Rate Hypothesis (LUH) via an explicit variational action, an operational clock-frequency ratio α_upd(x) = ν_obs(∞)/ν_emit(x), ADM Hamiltonian constraints, and a Lindblad quantum-information channel, testing both scalar-only and covariant dual-impedance realizations against General Relativity (GR). Theorem A.1 establishes observational degeneracy across weak-field terrestrial and GNSS timing tests to O(Φ v²/c⁴). However, No-Go Result B.1 demonstrates that any flat-space scalar model (γ = 0) underpredicts solar light deflection (0.875″ vs. 1.750″) and Cassini Shapiro delay by 50%, fails Mercury’s 42.98″/century perihelion advance, violates Lunar Laser Ranging Nordtvedt bounds (|η_N| < 1.1 × 10⁻⁴), and conflicts with Gravity Probe B and binary-pulsar quadrupole decay. Recovering PPN viability requires isotropic spatial impedance n_eff = α_upd⁻² ≈ 1 − 2Φ/c², rendering the exterior dual formulation metric-equivalent to GR. Empirical divergence is therefore confined to strong-field regular cores, gravitational-wave echoes, and higher-order ultraviolet dispersion limits.'
];

export const CLOCK_SPEED_CHAPTERS: ClockPaperChapter[] = [
  {
    id: 'ch-1',
    number: 1,
    title: 'Gravitational Time Dilation, High-Energy Tensions, and the Foundational Stakes of Update-Rate Formulations',
    kicker: 'Chapter I',
    tier: 'ESTABLISHED EMPIRICAL FACT',
    epigraph: 'All physical oscillators, from nuclear transitions to trapped optical ions, accumulate less proper time deep inside gravitational potentials than identical clocks suspended above them.',
    leadSummary:
      'Differential chronometry between sea level and high altitude reveals an empirical regularity invariant across every physical clock mechanism. Examining whether that regularity originates in curved Lorentzian geometry or a locally throttled physical update cadence clarifies post-LHC ultraviolet puzzles, relativistic metrology, and the epistemology of spacetime theories.',
    chapterIntro: [
      'A pair of optical lattice clocks separated vertically by a single millimeter inside a Boulder vacuum chamber tick at measurably different rates. The upper ensemble accumulates time faster by one part in 10¹⁹, an offset indistinguishable in fractional magnitude whether measured with nuclear gamma resonances, hydrogen masers, or trapped aluminum ions. That strict universality forces a foundational division in physical explanation: either mass-energy deforms four-dimensional spacetime intervals, or gravitational fields throttle the local physical transition speed inside a fixed background.',
      'Resolving that divide carries immediate weight beyond conceptual interpretation. Post-LHC naturalness bounds, cosmological tensions, orbital navigation architectures, and quantum-optical interferometers all hinge on isolating what parts of gravitational timing belong to genuine spatial geometry versus local proper-time rescaling.'
    ],
    subsections: [
      {
        number: '1.1',
        title: 'Phenomenology and Operational Definition of Differential Clock Rates',
        tier: 'ESTABLISHED EMPIRICAL FACT',
        paragraphs: [
          'The central observational datum of gravitational chronometry is straightforward: proper time does not accumulate uniformly across gravitational equipotential surfaces. Consider two synchronized optical lattice clocks using the ⁸⁷Sr clock transition at ν₀ = 429,228,004,229,873 Hz. One clock rests on Earth’s rotating equipotential geoid at mean sea level, where outward centrifugal acceleration balances gravitational attraction from Earth’s spherical monopole and equatorial quadrupole harmonic J₂. Its identical counterpart rises to an alpine station at altitude Δh = 3,000 m. Under the international standard terrestrial gravity constant g₀ = 9.80665 m/s², the fractional frequency shift Δν/ν₀ = g₀Δh/c² evaluates to 3.2734 × 10⁻¹³, yielding a daily proper-time lead of 28.28 ns/day (10.33 μs/year, or 1.214 × 10⁷ additional optical oscillations per day). Using a pure spherical monopole GM_⊕/R_⊕² = 9.820 m/s² without J₂ oblateness or centrifugal reduction yields 28.31 ns/day, a transparent 0.11% geodetic difference documented in Appendix F.',
          'What elevates this rate discrepancy into a foundational physical problem is its strict universality across microphysical couplings. Nuclear ⁵⁷Fe Mössbauer transitions (14.4 keV), ¹³³Cs hyperfine microwave resonances, ²⁷Al⁺ optical electric-quadrupole transitions, ⁸⁷Sr optical lattices, and stochastic muon decay lifetimes exhibit identical fractional shifts at a given potential Φ(x). Moreover, no sealed laboratory experiment detects a local slowing. Inside a small elevator or bunker, local determinations of electromagnetic speed c = 299,792,458 m/s, fine-structure spectra, and mechanical oscillation ratios remain constant because all co-located instruments share the same local proper-time scale τ.',
          'Rigorous analysis must separate three conceptual strata before comparing rival ontologies. First stands the invariant physical observable: when electromagnetic signals ascend from potential Φ₁ to Φ₂, an upper receiver measures frequency shift Δν/ν₀ = ΔΦ/c² as expressed in Equation (1.1), and static clocks separated by ΔΦ accumulate distinct invariant proper durations dτ between light exchanges. Second stands coordinate convention: choosing global Schwarzschild time t or Terrestrial Time (TT) provides a smooth foliation label without privileging any local clock as cosmic absolute time. Third stands ontological interpretation: whether g_μν represents primitive four-dimensional spacetime geometry or an emergent effective descriptor of locally modulated causal transition cadence and wave impedance.',
          'Modern optical clock comparisons rule out confounding laboratory systematics below parts in 10¹⁹. Thermal blackbody radiation shifts, linear and quadratic Zeeman perturbations, second-order Doppler broadening, and seismic accelerations are controlled independently. Furthermore, rotating Earth’s centrifugal term −½ ω_⊕² r_⊥² combines directly with Newtonian gravitational potential into the total effective geopotential Φ_eff so that stationary clocks anywhere along mean sea level—whether at Earth’s pole or at the equator, 21 km farther from the center yet moving tangentially at 465 m/s—tick at identical rates within experimental uncertainty.'
        ],
        equation: {
          label: '(1.1)',
          unicodeHtml: 'Δν / ν<sub>0</sub> = (ν<sub>high</sub> − ν<sub>low</sub>) / ν<sub>0</sub> = ΔΦ / c² ≈ g Δh / c² = 1.0911 × 10<sup>−16</sup> m<sup>−1</sup> · Δh',
          caption: 'Weak-field gravitational frequency shift and vertical proper-time gradient near Earth’s geoid.',
          tier: 'ESTABLISHED EMPIRICAL FACT',
          plainMeaning: 'Increasing gravitational potential by g Δh shifts every physical frequency upward by ΔΦ/c².',
          provenance: 'Einstein (1907, 1911); Pound & Rebka (1960); Bothwell et al. (2022) — derivation in Appendix A.'
        }
      },
      {
        number: '1.2',
        title: 'Historical Development from Newtonian Absolute Time to Millimeter Optical Lattices',
        tier: 'ESTABLISHED EMPIRICAL FACT',
        paragraphs: [
          'For more than two centuries following Newton’s Principia (1687), mechanics presupposed absolute mathematical time flowing equably without relation to external bodies across an immovable Euclidean three-dimensional container. Although Gottfried Wilhelm Leibniz (1715–1716) contested substantivalist containers as metaphysically redundant and Ernst Mach (1883) critiqued absolute inertia, Newtonian universal simultaneity faced no experimental refutation until the early twentieth century.',
          'Special Relativity dissolved absolute simultaneity across inertial frames in 1905, leaving gravitation unresolved. In 1907, Albert Einstein applied the equivalence between uniform acceleration and homogeneous gravity to an elevator traversed by light: during signal transit Δh/c, the ceiling accelerates by gΔh/c, redshifting incoming radiation. By 1911, Einstein published the gravitational redshift relation and predicted a provisional solar-limb light deflection of 0.875″ under the assumption of flat three-dimensional space. Between 1912 and November 1915, Einstein and Marcel Grossmann integrated Riemannian differential geometry into the gravitational field equations, replacing scalar time modification with four-dimensional Lorentzian metric curvature. Within weeks, Karl Schwarzschild derived the exact exterior static spherical solution (1916), and in May 1919 Dyson, Eddington, and Davidson measured solar eclipse deflections near 1.75″, doubling the 1911 scalar prediction.',
          'In 1923, Walter Gordon published an instructive alternative formulation in Annalen der Physik. Gordon proved that Maxwell’s equations on a curved gravitational metric g_μν are formally equivalent to electrodynamics inside a flat background endowed with spatially varying optical permittivity and permeability tensors. Later generalized by de Felice (1971) and analogue-gravity programs, Gordon’s optical correspondence demonstrated that curved spacetime kinematics outside horizons can be reformulated as wave propagation through a refractive medium.',
          'Direct terrestrial confirmation of gravitational redshift awaited recoilless nuclear gamma resonance. Between 1959 and 1965, Pound, Rebka, and Snider measured the 2.45 × 10⁻¹⁵ fractional frequency shift of 14.4 keV ⁵⁷Fe photons across Harvard’s 22.5 m Jefferson tower to 1% precision, carefully cancelling first- and second-order thermal Doppler drifts (~2.4 × 10⁻¹⁵ K⁻¹) by swapping emitter and absorber positions in helium-flushed baffles. Irwin Shapiro (1964) added radar-delay measurements past superior solar conjunction. In 1971, Hafele and Keating flew cesium-beam clocks east and west aboard commercial aircraft, verifying combined kinematic and potential offsets (Hafele & Keating 1972). In 1976, Vessot et al. (1980) launched a hydrogen maser to 10,000 km altitude in Gravity Probe A, validating Δν/ν₀ to 7 × 10⁻⁵ relative precision. In 2018, Delva et al. exploited two elliptical Galileo satellites (e ≈ 0.162) to constrain Local Position Invariance violations to α_LPI = (0.19 ± 2.48) × 10⁻⁵. Across tabletop and urban scales, Chou et al. (2010) resolved Δν/ν ≈ 4.1 × 10⁻¹⁷ across 33 cm with ²⁷Al⁺ ions, Takamoto et al. (2020) confirmed +4.2 ns/day across 450 m at Tokyo Skytree, and Bothwell et al. (2022) measured 1.09 × 10⁻¹⁹ across a 1 mm cloud of ultracold ⁸⁷Sr atoms at JILA.'
        ]
      },
      {
        number: '1.3',
        title: 'Post-LHC Naturalness Pressure, Cosmological Tensions, and Ultraviolet Motivation',
        tier: 'FRONTIER OBSERVATIONAL PROBE',
        paragraphs: [
          'Although weak-field gravitational tests span twenty-six orders of magnitude in length scale, revisiting whether gravitation acts purely as continuum geometry or modulates local state-transition capacity carries immediate motivation from high-energy physics. Prior to Run 1 and Run 2 of CERN’s Large Hadron Collider (LHC), effective field theory models expected new TeV-scale symmetries—supersymmetric superpartners, composite Higgs dynamics, or compactified extra dimensions—to shield the electroweak scale from quadratic ultraviolet sensitivity. Instead, proton-proton collisions at √s = 13 and 13.6 TeV measured the Higgs mass at m_H = 125.09 ± 0.24 GeV with Standard-Model-like couplings while excluding colored gluinos below ~2.3 TeV, top squarks below ~1.3 TeV, and Arkani-Hamed–Dimopoulos–Dvali or Randall–Sundrum graviton scales M_D below 7–11 TeV (ATLAS & CMS Collaborations 2022–2024).',
          'Three additional tensions sharpen scrutiny of continuum ultraviolet backgrounds. First, precision values of m_H and the top Yukawa y_t ≈ 0.992 drive the Standard Model Higgs quartic coupling λ(μ) negative near Λ_inst ~ 10¹⁰–10¹² GeV under next-to-next-to-leading-order renormalization-group evolution (Buttazzo et al. 2013), making vacuum metastability sensitive to non-minimal gravitational curvature couplings ξ R H†H. Second, flavor and precision anomalies—including angular observables such as P₅′ in B⁰ → K*⁰μ⁺μ⁻, differential B_s → φμ⁺μ⁻ branching ratios, and combined R(D)–R(D*) tension in b → c τ ν decays (LHCb Collaboration 2022–2024)—probe short-distance operators above direct collider reach. Third, observational cosmology presents a 60-to-120-order-of-magnitude discrepancy between naive continuum zero-point energy sums and observed dark energy Ω_Λ, alongside a ~5σ discrepancy between Planck CMB inference (H₀ = 67.4 ± 0.5 km s⁻¹ Mpc⁻¹) and local distance-ladder determinations (H₀ ≈ 73.0 km s⁻¹ Mpc⁻¹), while canonical quantum gravity yields the timeless Wheeler–DeWitt constraint Ĥ|Ψ⟩ = 0.',
          'Clarifying what can and cannot be attributed to a local update-rate scalar α_upd(x) tests directly whether reinterpreting proper time as information-theoretic update cadence—as explored in Information-Geometric Resonant Time (IGRT) frameworks (Bulaqueña et al. 2026a, 2026b)—actually alters ultraviolet loop structure or leaves flat-space perturbative QFT untouched until explicit curvature saturation or nonlocal form factors intervene.'
        ]
      },
      {
        number: '1.4',
        title: 'Applied Stakes Across Satellite Navigation, Timing Networks, Geodesy, and Quantum Metrology',
        tier: 'ESTABLISHED EMPIRICAL FACT',
        paragraphs: [
          'Distinguishing clock-rate potential gradients from spatial optical path impedance carries direct engineering consequences across five applied domains. First, global navigation satellite systems (GPS, Galileo, BeiDou, GLONASS) and emerging cislunar positioning architectures depend on unified relativistic coordinate transformations (IAU BCRS/GCRS). Left uncompensated, the +45.8 μs/day gravitational blueshift and −7.2 μs/day kinematic redshift of GPS satellites (net +38.6 μs/day) would accumulate 11.57 km/day of pseudorange error (Ashby 2003). Avoiding double counting between transmitter clock-frequency offsets and signal-path Shapiro delays is essential for millimeter satellite laser ranging.',
          'Second, telecommunications backhaul, power-grid synchrophasors, and financial settlement ledgers rely on sub-nanosecond Precision Time Protocol (PTP) and White Rabbit optical-fiber links. Across continental elevations, a 10 m altitude difference produces a 94 ps/day clock divergence that must be separated rigorously from chromatic fiber-index delays. Third, chronometric geodesy deploys transportable 10⁻¹⁸–10⁻¹⁹ optical clocks over fiber links to resolve gravitational potential differences Φ(x) directly at centimeter vertical resolution (Mehlstäubler et al. 2018), tracking ice-sheet ablation, aquifer depletion, magma inflation, and unified sea-level datums.',
          'Fourth, vertically extended quantum processors and matter-wave interferometers probe coherent superpositions across potential gradients Δh. Determining whether gravity induces purely unitary proper-time phase accumulation or irreversible stochastic dephasing (Zych et al. 2011) sets noise ceilings for quantum networks and inertial navigation. Fifth, 27 km to 91 km particle-collider timing rings (HL-LHC, FCC) and kilometer-to-million-kilometer gravitational-wave detectors (Einstein Telescope, Cosmic Explorer, LISA) depend on exact weak-field metric timing models to isolate genuine strong-field residuals.'
        ]
      },
      {
        number: '1.5',
        title: 'Structure and Methodology of the Investigation',
        tier: 'EPISTEMOLOGY & PHILOSOPHY OF SCIENCE',
        paragraphs: [
          'The paper evaluates geometric General Relativity and local update-rate models symmetrically across empirical regimes of increasing relativistic strength. Chapter 2 strips away misleading spatial trampoline analogies to show how temporal gradients drive Newtonian weight and how Schwarzschild symmetry couples time and radial space. Chapter 3 constructs an explicit Lagrangian action, operational clock definition, ADM Hamiltonian structure, conformal optical-Gordon derivation, PPN tuple, and Lindblad quantum-channel formulation for α_upd(x).',
          'Chapter 4 proves observational equivalence across nine terrestrial, airborne, orbital, and annual solar-orbit clock tests (Theorem A.1), isolating weak-field Duhem–Quine degeneracy. Chapter 5 demonstrates how null-ray deflection, Cassini Shapiro delay, planetary perihelion advance, Lunar Laser Ranging, Gravity Probe B frame-dragging, and binary-pulsar quadrupole radiation eliminate scalar-only clock slowing (γ = 0; No-Go Result B.1). Chapter 6 confronts horizon regularity, Hayward Planck cores, finite Kretschmann invariants, EHT shadows, gravitational-wave echoes, and tidal Love numbers. Chapter 7 tests ultraviolet dispersion bounds from Fermi-LAT, LHAASO, Crab synchrotron radiation, and UHECRs alongside a one-loop calculation of Higgs self-energy under lapse coupling. Chapter 8 synthesizes experimental predictions for 2026–2035 instruments, and Chapter 9 develops the philosophical conclusions regarding conventionalism, theoretical equivalence, and structural realism. Full proofs, derivations, and numerical reproducibility checkpoints appear in Appendices A–F.'
        ]
      }
    ]
  },
  {
    id: 'ch-2',
    number: 2,
    title: 'Lorentzian Geometrodynamics: Spacetime Curvature Beyond Spatial Analogies',
    kicker: 'Chapter II',
    tier: 'STANDARD GENERAL RELATIVITY',
    epigraph: 'Spacetime tells matter how to move along geodesics, while stress-energy determines the Lorentzian metric.',
    leadSummary:
      'Popular depictions of General Relativity as a bowling ball depressing an elastic two-dimensional sheet obscure the primary physical driver of weak-field gravitation. Near Earth, three-dimensional spatial curvature is roughly one part in a billion, whereas free-fall acceleration arises overwhelmingly from the vertical gradient in proper-time rate multiplied by c².',
    chapterIntro: [
      'Textbooks routinely illustrate Einsteinian gravity with a heavy sphere warping a stretched rubber membrane, inviting readers to picture apples and planets rolling downhill along curved space. Yet numerical evaluation near Earth exposes a striking surprise: spatial metric distortion amounts to merely 1.39 × 10⁻⁹, far too feeble to deflect slow-moving bodies toward the floor.',
      'Reconstructing Newtonian weight from first principles demonstrates that ordinary gravity comes almost entirely from variations in proper-time cadence weighted by c². Only by separating temporal gradients from spatial curvature—and examining exact Painlevé–Gullstrand river-flow transformations across horizons—can General Relativity be contrasted fairly against rival update-rate descriptions.'
    ],
    subsections: [
      {
        number: '2.1',
        title: 'Why Slow-Moving Bodies Accelerate: Temporal Gradients Over Spatial Depression',
        tier: 'STANDARD GENERAL RELATIVITY',
        paragraphs: [
          'The two-dimensional elastic-sheet metaphor fails conceptually because it represents only spatial curvature while smuggling in an external downward gravitational pull to accelerate rolling marbles. Placed at rest on a purely spatial depression without time curvature or external force, a test particle experiences zero coordinate acceleration.',
          'In four-dimensional Lorentzian geometry, every massive object possesses a four-velocity u^μ = dx^μ/dτ whose temporal component is u⁰ ≈ c in the slow-motion limit v ≪ c. Because the radial Christoffel symbol Γʳ₀₀ = −½ ∂_r g₀₀ enters the geodesic equation multiplied by (u⁰)² ≈ c², a tiny fractional metric variation δg₀₀ = −2GM_⊕/(R_⊕ c²) ≈ −1.392 × 10⁻⁹ across Earth’s radius—corresponding to a proper-time gradient dα/dr = 1.093 × 10⁻¹⁶ m⁻¹—produces a downward radial acceleration a = −c² (dα/dr) = −9.82 m/s² (Appendix A, Calculation 2.1). Non-relativistic objects fall toward massive bodies predominantly because time intervals vary with altitude, tilting four-dimensional geodesics radially inward.'
        ]
      },
      {
        number: '2.2',
        title: 'Coupled Temporal and Spatial Curvature in the Exterior Schwarzschild Metric',
        tier: 'STANDARD GENERAL RELATIVITY',
        paragraphs: [
          'While slow particles probe primarily g₀₀, relativistic light rays and eccentric planetary orbits sample spatial components g_ij equally. Outside any spherically symmetric static mass M, Einstein’s vacuum equations G_μν = 0 yield uniquely (up to diffeomorphisms) the Schwarzschild (1916) line element of Equation (2.1), written in terms of the Schwarzschild radius r_s = 2GM/c².',
          'The metric exhibits exact symmetry between temporal compression (1 − r_s/r) and radial stretching (1 − r_s/r)⁻¹. Although g_rr diverges in Schwarzschild coordinates at r = r_s, transforming to Painlevé–Gullstrand free-fall time dT = dt + √(r_s/r)(1 − r_s/r)⁻¹ dr yields ds² = −c² dT² + (dr + √(r_s/r) c dT)² + r² dΩ², proving that r = r_s is a smooth coordinate artifact with flat spatial 3-slices (³R_PG = 0), unit lapse N_PG = 1, acoustic river velocity v_flow/c = −√(r_s/r), and finite free-fall proper time τ_fall = (2 r_s / 3c)(r/r_s)³/² across the horizon (Kruskal–Szekeres maximal analytic extension).'
        ],
        equation: {
          label: '(2.1)',
          unicodeHtml: 'ds² = −c² dτ² = −(1 − r<sub>s</sub>/r) c² dt² + (1 − r<sub>s</sub>/r)<sup>−1</sup> dr² + r² (dθ² + sin²θ dφ²), &nbsp;&nbsp; r<sub>s</sub> = 2GM / c²',
          caption: 'Exterior Schwarzschild spacetime line element pairing temporal lapse with radial metric stretching.',
          tier: 'STANDARD GENERAL RELATIVITY',
          plainMeaning: 'Both proper-time cadence and radial spatial metric weights depart from Minkowski values by r_s/r.',
          provenance: 'Schwarzschild (1916); Painlevé (1921); Gullstrand (1922).'
        }
      },
      {
        number: '2.3',
        title: 'Proper Time as Coordinate-Invariant Worldline Arc Length',
        tier: 'STANDARD GENERAL RELATIVITY',
        paragraphs: [
          'Within General Relativity, an atomic clock at sea level undergoes no mechanical friction or anomalous internal perturbation. Rather, two clocks held stationary at distinct potentials trace worldlines of unequal Lorentzian arc length τ = ∫ (−g_μν dx^μ dx^ν)¹/² / c between shared null signal exchanges. Each ideal chronometer records standard SI transitions per unit proper time τ, while global disagreement manifests invariant path-length differences across the curved manifold.'
        ]
      }
    ]
  },
  {
    id: 'ch-3',
    number: 3,
    title: 'Formalizing the Local Update-Rate Hypothesis: Action, Optical Correspondence, and Quantum Dynamics',
    kicker: 'Chapter III',
    tier: 'UPDATE-RATE REINTERPRETATION',
    epigraph: 'An interpretive framework becomes physically testable only once endowed with an explicit action, covariant transformation law, and clock observable.',
    leadSummary:
      'Replacing heuristic processor analogies with a formal physical model requires specifying an action for the dimensionless update-rate field α_upd(x), its diffeomorphism properties, its coupling to matter, its Hamiltonian constraints, and its quantum-mechanical master equation. Doing so separates falsifiable flat-space scalar theories from a covariant dual-impedance formulation.',
    chapterIntro: [
      'A provocative physical analogy—nature executing fewer updates per second near dense mass-energy—remains scientifically untestable until translated into variational equations. Without a Lagrangian, an operational clock observable, and explicit transformation laws, update throttling cannot predict light trajectories, orbital precession, or quantum coherence.',
      'This chapter constructs the Local Update-Rate Hypothesis from the ground up. Evaluating ADM Hamiltonian constraints and the vacuum radial Einstein tensor G^r_r immediately exposes an algebraic fracture: fixing flat Euclidean spatial slices generates spurious vacuum stresses throughout empty space, whereas pairing temporal slowing with isotropic spatial impedance restores exact covariant conservation.'
    ],
    subsections: [
      {
        number: '3.1',
        title: 'Operational Clock Definition, Variational Action, Transformation Laws, and ADM Constraints',
        tier: 'UPDATE-RATE REINTERPRETATION',
        paragraphs: [
          'Operationally, the local update-rate factor α_upd(x) is defined not as an unobservable computational metaphor, but directly through an asymptotic clock-comparison observable: α_upd(x) ≡ ν_obs(∞)/ν_emit(x) = (dτ/dt)_static along a stationary worldline relative to an inertial observer at spatial infinity. Equivalently, under the Mandelstam–Tamm quantum speed limit τ_⊥ ≥ πℏ/(2 ΔH_loc) (Mandelstam & Tamm 1945), locally accessible transition energy scales as ΔH_loc(x) = α_upd(x) ΔH_∞, pacing the maximum distinguishable quantum-state orthogonalization cadence per unit coordinate time t.',
          'To test update throttling dynamically, one writes a variational action S = S_field[α_upd, g_μν, u^μ] + S_matter[α_upd, g_μν, ψ]. Two distinct transformation classes immediately bifurcate the theory. Class I (LUH-Scalar) posits a flat Euclidean background δ_ij with preferred global foliation time t (or timelike unit vector u^μ = (c⁻¹, 0, 0, 0)), taking S_field = −(c⁴/8πG) ∫ d⁴x [(∇α_upd)² + ...] and coupling matter via effective metric g_μν^eff = diag(−α_upd² c², 1, 1, 1). Varying S with respect to α_upd yields the static Poisson limit ∇² ln α_upd ≈ ∇²Φ/c² = 4πGρ/c², recovering weak-field Newtonian gravity and Δν/ν = ΔΦ/c². However, specifying a fixed preferred frame u^μ explicitly breaks Local Lorentz Invariance, triggering tight Hughes–Drever atomic-clock anisotropy and solar spin-alignment bounds unless α_upd transforms as the dynamical Arnowitt–Deser–Misner (ADM) lapse function N = α_upd in a full 3+1 diffeomorphism-invariant foliation ds² = −(N² − N_i Nⁱ) c² dt² + 2 N_i dxⁱ c dt + h_ij dxⁱ dxʲ.',
          'In the ADM Hamiltonian formulation H = ∫ d³x (N ℋ + Nⁱ ℋᵢ), the lapse field α_upd = N acts as a nondynamical Lagrange multiplier enforcing the Hamiltonian energy constraint ℋ = 0 rather than an independent propagating scalar wave degree of freedom (avoiding Brans–Dicke scalar radiation and fifth-force conflicts). Crucially, evaluating the radial vacuum Einstein tensor component G^r_r = r⁻²(B⁻¹ − 1) + A′/(r A B) for B(r) = (1 − r_s/r)^(-γ) demonstrates why covariant stress-energy conservation ∇_μ T^μν = 0 holds only in Class II (LUH-Full, γ = 1): at γ = 1 both the 3-Ricci scalar ³R and G^r_r vanish identically in vacuum, whereas locking flat space (γ = 0, B = 1) forces a non-vanishing radial stress G^r_r = r_s / [r³(1 − r_s/r)] ≠ 0 throughout exterior vacuum.'
        ],
        equation: {
          label: '(3.1)',
          unicodeHtml: 'S = (c⁴ / 16πG) ∫ d⁴x √(−g) R[g] + S<sub>matter</sub>[α<sub>upd</sub>, h<sub>ij</sub>, ψ], &nbsp;&nbsp; α<sub>upd</sub>(x) ≡ ν<sub>∞</sub> / ν<sub>emit</sub>(x) = N(x) = √(−g<sub>00</sub>)',
          caption: 'Covariant variational identification of the operational clock-rate factor α_upd with the ADM lapse N and metric redshift factor.',
          tier: 'UPDATE-RATE REINTERPRETATION',
          plainMeaning: 'In any covariant theory, α_upd(x) is the lapse multiplier N(x) coupled to spatial 3-metric h_ij, not an isolated flat-space scalar.',
          provenance: 'Arnowitt, Deser & Misner (1962); Mandelstam & Tamm (1945).'
        }
      },
      {
        number: '3.2',
        title: 'No-Go Theorem for Scalar-Only Throttling and Variational Derivation of the Dual Optical Metric',
        tier: 'PPN STRESS-TEST & FALSIFICATION',
        paragraphs: [
          'Inspecting the null geodesic condition ds² = 0 inside any diagonal static line element reveals why pure scalar throttling fails mathematically. Under Class I (LUH-Scalar), ds² = −α_upd² c² dt² + dx² + dy² + dz², which sets the PPN spatial parameter strictly to γ = 0. By Fermat’s principle δ∫ (|dx|/α_upd) = 0, coordinate light speed obeys c_coord = c α_upd, giving an effective optical refractive index n_eff^(scalar) = 1 / α_upd ≈ 1 − Φ/c² = 1 + GM/(c²r). Because this refractive shift originates purely from temporal slowing without spatial expansion, it yields half the solar deflection (0.875″) and half the Shapiro delay—proving as a general no-go theorem (formalized in Appendix B, No-Go Result B.1) that no purely scalar temporal modification in flat three-dimensional space can satisfy γ = 1.',
          'By contrast, the Dual Update Formulation (LUH-Full) derives both temporal and spatial throttling from a single conformal-optical variational principle in isotropic coordinates r̄: local proper intervals contract temporally as dτ = α_upd dt while physical ruler separations expand conformally as dℓ_phys = β_sp |dx| with reciprocal isotropic factor β_sp = (1 − Φ/(2c²))² ≈ 1 − Φ/c² ≈ α_upd⁻¹. Applying ds² = −α_upd² c² dt² + β_sp² |dx|² = 0 immediately yields coordinate light velocity |dx|/dt = c α_upd / β_sp, determining Gordon’s effective optical index (Gordon 1923; de Felice 1971): n_eff = β_sp / α_upd = 1 / α_upd² ≈ 1 − 2Φ/c² + O(c⁻⁴). Thus, n_eff = 1/α_upd fails by fifty percent, whereas n_eff = 1/α_upd² (derived directly from equal and reciprocal temporal/spatial impedance factors α_upd and β_sp) reproduces the exact isotropic Schwarzschild metric (Appendix A, Equation A.1) across every weak- and strong-field exterior component.',
          'Computing the full PPN parameter set yields (γ, β, ξ, α₁, α₂, α₃) = (0, 0 or 1, 0, α₁^pref, α₂^pref, 0) for flat-space Class I versus (γ, β, ξ, α₁, α₂, α₃) = (1, 1, 0, 0, 0, 0) for covariant Class II. Consequently, covariant Class II (LUH-Full) is mathematically equivalent at the metric level to exterior vacuum General Relativity and is not independently falsifiable outside horizons or ultraviolet extensions.'
        ]
      },
      {
        number: '3.3',
        title: 'Quantum Sector: Fisher–Rao Bures Cadence and Lindblad Unravelling Bounds',
        tier: 'UPDATE-RATE REINTERPRETATION',
        paragraphs: [
          'Specifying how α_upd couples to the quantum sector distinguishes unitary relativistic proper-time pacing from spontaneous collapse or noisy discrete-clock models. Along a state trajectory ρ(t) parameterized by coordinate time t in projective Hilbert space PU(ℋ), the quantum Fisher information I_F(t) = 4 g_tt^Bures defines the statistical speed of distinguishable state evolution. Under purely unitary gravitational coupling (Zych et al. 2011; Bulaqueña et al. 2026a), α_upd(x) rescales the local generator H_loc = α_upd(x) H₀ inside a Lindblad master equation dρ/dt = −(i/ℏ)[α_upd(x) H₀, ρ] + Γ_dec (H₀ ρ H₀ − ½{H₀², ρ}) with Γ_dec = 0.',
          'Any stochastic unravelling simulating an intrinsically noisy classical processor clock introduces a non-zero energy-dephasing rate Γ_dec > 0 proportional to temporal step variance δt_stoch. Existing optical lattice coherence times exceeding seconds and matter-wave clock-interferometry projections constrain Γ_dec near atomic energy splittings ΔE ≲ 1 eV to Γ_dec/ΔE ≪ 10⁻¹⁸, ruling out crude Markovian clock jitter while permitting unitary Fisher–Rao proper-time accumulation.'
        ]
      }
    ]
  },
  {
    id: 'ch-4',
    number: 4,
    title: 'Weak-Field Observational Equivalence Across Terrestrial, Airborne, and Orbital Clocks',
    kicker: 'Chapter IV',
    tier: 'ESTABLISHED EMPIRICAL FACT',
    epigraph: 'Empirical agreement across slow-clock domains establishes shared weak-field structure rather than unique ontological confirmation.',
    leadSummary:
      'From millimeter optical lattice samples to spaceborne hydrogen masers and elliptical navigation satellites, curved Lorentzian geometry and update-rate models yield indistinguishable timing predictions to O(Φ v²/c⁴). This observational degeneracy illustrates transient Duhem–Quine underdetermination within the slow-motion regime.',
    chapterIntro: [
      'Across sixty years of precision metrology, atomic clocks carried aboard jetliners, launched into eccentric navigation orbits, or lowered thirty centimeters across an optical table have never departed from gravitational redshift expectations. For practical timekeeping, treating gravity as a locally modulated clock cadence reproduces every weak-field timing budget down to the nanosecond.',
      'This chapter assembles ten quantitative chronometric benchmarks—from Harvard’s gamma-ray tower to annual solar eccentricity modulation—and reveals the hidden mathematical symmetry behind their agreement. Whenever velocities remain far below c, temporal potential and spatial geometry decouple, creating a temporary observational tie that only faster probes can break.'
    ],
    subsections: [
      {
        number: '4.1',
        title: 'Quantitative Benchmarks from Mössbauer Towers to Orbital Chronometers and Annual Solar Modulation',
        tier: 'ESTABLISHED EMPIRICAL FACT',
        paragraphs: [
          'Ten landmark experiments spanning twenty-six orders of magnitude in vertical scale test Equation (1.1), compiled systematically in Table 4.1. In the Pound–Rebka (1960) and Pound–Snider (1965) Mössbauer campaigns across Δh = 22.5 m, both curved g₀₀ and α_upd(x) predict Δν/ν₀ = −g₀Δh/c² = −2.45 × 10⁻¹⁵ (note that pedagogical treatments compute either photon coordinate energy shift or local clock-rate shift—never both simultaneously, which double-counts the same observable). In Hafele–Keating (1972), eastward and westward commercial circumnavigations combined special-relativistic velocity redshift with gravitational blueshift to yield predicted net offsets of −40 ns (east) and +275 ns (west), matching measurements (−59 ± 10 ns and +273 ± 7 ns). In Gravity Probe A, Vessot et al. (1980) launched a hydrogen maser to 10,000 km altitude, verifying Δν/ν₀ = +4.36 × 10⁻¹⁰ to 7 × 10⁻⁵ relative uncertainty.',
          'Continuous space metrology confirms these relations operationally. GPS satellites at semi-major axis a = 26,560 km and orbital speed v = 3.874 km/s gain +45.8 μs/day gravitationally and lose −7.2 μs/day kinematically, yielding +38.6 μs/day net drift (equivalent to 11.57 km/day of uncompensated range error) plus sinusoidal eccentricity modulation Δt_ecc = (2√(GM_⊕ a)/c²) e sin E ≈ ±22.8 ns at e = 0.01 (Ashby 2003). In 2018, Delva et al. used eccentric Galileo 5 and 6 satellites (e ≈ 0.162, Δr = 8,500 km) to bound redshift violations at α_LPI = (0.19 ± 2.48) × 10⁻⁵. On Earth, Chou et al. (2010) measured Δν/ν = 4.1 × 10⁻¹⁷ across 33 cm (²⁷Al⁺), Takamoto et al. (2020) measured 4.91 × 10⁻¹⁴ (+4.24 ns/day) across 450 m at Tokyo Skytree, and Bothwell et al. (2022) resolved Δν/ν = 1.09 × 10⁻¹⁹ across 1 mm in ⁸⁷Sr. Furthermore, Earth’s eccentric solar orbit (e_⊕ = 0.0167086) modulates the solar potential at 1 AU annually by 3.30 × 10⁻¹⁰ peak-to-peak (±1.65 × 10⁻¹⁰ amplitude), allowing long-baseline optical comparisons of Al⁺, Hg⁺, Sr, and H masers to constrain species-dependent clock coupling |β_clock| < 10⁻⁶.',
          'Theorem A.1 (Appendix A) demonstrates why both models agree identically across all ten tests: expanding (dτ/dt)² = 1 + 2Φ/c² − (v²/c²)(1 − 2γΦ/c²) places the spatial parameter γ exclusively inside the cross term O(γΦv²/c⁴), which evaluates to ~10⁻¹⁹ for GPS satellites and ~10⁻²⁵ for ground laboratories—well below current timing sensitivity.'
        ]
      },
      {
        number: '4.2',
        title: 'Duhem–Quine Degeneracy Versus Non-Conventional Distinctions',
        tier: 'EPISTEMOLOGY & PHILOSOPHY OF SCIENCE',
        paragraphs: [
          'Philosophically, weak-field clock experiments instantiate an exact sector of Duhem–Quine empirical underdetermination (Duhem 1906; Quine 1951). Because static or low-velocity chronometers sample only the temporal potential Φ(x)/c² and special-relativistic Lorentz factor v²/2c², observational data underdetermine whether g_rr = 1 (flat spatial slices) or g_rr = 1 − 2Φ/c² (curved spatial geometry). Separating mere coordinate convention (Poincaré 1902) from physically distinct theories requires relativistic probes whose worldlines traverse space at speed c or accumulate post-Newtonian orbital nonlinearities.'
        ]
      }
    ]
  },
  {
    id: 'ch-5',
    number: 5,
    title: 'Post-Newtonian Breakdown: Null Rays, Planetary Dynamics, Frame-Dragging, and Astrophysical Clocks',
    kicker: 'Chapter V',
    tier: 'PPN STRESS-TEST & FALSIFICATION',
    epigraph: 'Electromagnetic rays and gravitating binaries weight spatial geometry and temporal lapse equally, eliminating scalar-only throttling models.',
    leadSummary:
      'Deploying the full Parametrized Post-Newtonian (PPN) metric across starlight deflection, Cassini radar delay, planetary ephemerides, Lunar Laser Ranging, Gravity Probe B gyroscopes, binary pulsars, and white-dwarf spectra breaks the weak-field degeneracy decisively. Scalar-only clock slowing (γ = 0) fails every spatial and gravitomagnetic constraint.',
    chapterIntro: [
      'Weak-field timing parity collapses the moment photons graze the Sun or compact binary pulsars spiral inward by millimeters per orbit. Unlike slow terrestrial clocks, relativistic light rays and orbiting neutron stars weight spatial metric curvature and temporal clock throttling in equal measure.',
      'By running fourth-order Runge–Kutta null geodesic integrations alongside Peters–Mathews binary radiation dynamics and the full Will (2014) Parametrized Post-Newtonian constraint table, this chapter demonstrates how solar-system and astrophysical observations eliminate flat-space clock-slowing hypotheses by tens of thousands of standard deviations.'
    ],
    subsections: [
      {
        number: '5.1',
        title: 'PPN Line Element, Half-Deflection Deficit, and Cassini Shapiro Delay',
        tier: 'PPN STRESS-TEST & FALSIFICATION',
        paragraphs: [
          'In standard PPN coordinates (Will 2014), the conservative static weak-field spacetime line element outside mass M takes the explicit form ds² = −[1 + 2Φ/c² + 2β(Φ/c²)²] c² dt² + (1 − 2γΦ/c²)(dx² + dy² + dz²), augmented by off-diagonal gravitomagnetic vector potential terms proportional to (1 + γ + α₁/4) when sources rotate or move. Integrating transverse optical path gradients ∇_⊥ n_eff = −(1 + γ) GM b / [c²(b² + x²)³/²] over x ∈ (−∞, +∞) yields Equation (5.1): solar-limb bending Δθ = (1 + γ) 2GM_☉/(b c²) and Shapiro radar round-trip excess delay Δt_Shapiro = (1 + γ)(2GM_☉/c³) ln(4 r_E r_R / b²).',
          'At b = R_☉ = 6.957 × 10⁸ m (b/r_s = 235,571.3), cancellation-free fourth-order Runge–Kutta integration of the exact photon trajectory yields 1.7512″ for γ = 1 versus 0.8756″ for flat-space scalar clock slowing (γ = 0)—agreeing with the weak-field analytic expression θ₀ = 2GM_☉/(R_☉ c²) = 0.8756″ to 0.0006%, while diverging nonlinearly at strong impact b = 4 r_s (177,126″ vs. linear 103,132″) ahead of photon-sphere capture at b_crit = (3√3/2) r_s ≈ 2.598 r_s. Observed solar eclipse results (Dyson et al. 1920), VLBI radio astrometry, and Gaia space astrometry yield 1.750″ ± 0.0002″, while Bertotti et al. (2003) measured Cassini radio-link Shapiro delay at γ − 1 = (2.1 ± 2.3) × 10⁻⁵, ruling out γ = 0 at >43,000σ. Moreover, dual update-rate models reproduce 1.750″ and ~240 μs only by matching isotropic optical index n_eff = 1/α_upd² = 1 − 2Φ/c².'
        ],
        equation: {
          label: '(5.1)',
          unicodeHtml: 'Δθ = (1 + γ) · (2GM / bc²), &nbsp;&nbsp;&nbsp; Δt<sub>Shapiro</sub> = (1 + γ) · (2GM / c³) ln(4 r<sub>E</sub> r<sub>R</sub> / b²)',
          caption: 'PPN starlight deflection and radar Shapiro delay parameterized by spatial metric coefficient γ.',
          tier: 'PPN STRESS-TEST & FALSIFICATION',
          plainMeaning: 'Light rays weigh temporal lapse (1) and spatial curvature (γ) equally, refuting flat-space γ = 0 models by 50%.',
          provenance: 'Dyson et al. (1920); Shapiro (1964); Bertotti et al. (2003); Will (2014).'
        }
      },
      {
        number: '5.2',
        title: 'Mercury Precession, Ephemerides, Nordtvedt LLR, Frame-Dragging, and Binary Pulsars',
        tier: 'PPN STRESS-TEST & FALSIFICATION',
        paragraphs: [
          'Planetary and gyroscopic dynamics extend this refutation across Tables 5.1 and 5.2. Removing Newtonian perturbations leaves an anomalous perihelion advance of Mercury equal to 42.98″ ± 0.04″ per Julian century, constrained further by NASA MESSENGER radio tracking (Park et al. 2017) together with global planetary ephemerides INPOP (Fienga et al. 2020) and EPM (Pitjeva) bounding |β − 1| < 8 × 10⁻⁵. Under the PPN formula Δϖ = [(2 + 2γ − β)/3] · 42.98″/cy, setting γ = 0 yields 28.65″/cy at β = 0 or 14.33″/cy at β = 1. Attempting to rescue Mercury by choosing β = −1 forces Nordtvedt’s Strong Equivalence Parameter η_N = 4β − γ − 3 = −7, colliding at >60,000σ with Lunar Laser Ranging bounds |η_N| < 1.1 × 10⁻⁴ (Williams et al. 2004; Hofmann & Müller 2018), as proved in No-Go Result B.1.',
          'Rotating and radiating systems provide independent tests of spatial-temporal coupling and universality. Gravity Probe B (Everitt et al. 2011) measured geodetic gyroscope precession (proportional to (1 + 2γ)/3, yielding +6606.1 mas/yr in GR vs. 2202.0 mas/yr at γ = 0) and Lense–Thirring frame-dragging (−39.2 mas/yr), which vanishes in purely scalar temporal theories lacking gravitomagnetic metric potentials g₀ᵢ. Evaluating Peters–Mathews quadrupolar energy loss directly for PSR B1913+16 (m₁ = 1.438 M_☉, m₂ = 1.390 M_☉, P_b = 7.752 h, e = 0.6171) produces orbital decay dP/dt = −2.4022 × 10⁻¹² s/s and periastron advance dω/dt = 4.2263°/yr matching timing measurements (Weisberg & Taylor 2010), while the Double Pulsar PSR J0737−3039A/B (Kramer et al. 2021) tests six post-Keplerian parameters simultaneously and excludes scalar dipole radiation expected when α₁ ≠ 0 or Strong Equivalence fails.',
          'Composition-independence and cosmic redshift surveys reinforce this conclusion. Eöt–Wash torsion balances and the MICROSCOPE satellite (Touboul et al. 2022) constrain Weak Equivalence Principle violations to |η_WEP| < 1.5 × 10⁻¹⁵; Oklo natural nuclear reactor data limit secular drift in fundamental constants over two billion years; and white-dwarf spectral redshifts match GR across high surface gravity in Sirius B (80.6 km/s, M = 1.018 M_☉, R = 0.008098 R_☉) and 40 Eridani B (26.8 km/s), complemented by galaxy-cluster and Sachs–Wolfe CMB gravitational redshift measurements. Complete Will (2014) PPN bounds appear in Table 5.2.'
        ]
      }
    ]
  },
  {
    id: 'ch-6',
    number: 6,
    title: 'Strong-Field Horizon Physics: Regular Planck Cores, Curvature Invariants, and Compact-Object Signatures',
    kicker: 'Chapter VI',
    tier: 'FRONTIER OBSERVATIONAL PROBE',
    epigraph: 'Where external clock ratios vanish at Schwarzschild horizons, classical smooth manifolds and regular finite-capacity cores separate cleanly in their predictions.',
    leadSummary:
      'Near compact objects, external clock slowing α_upd → 0 collides with smooth free-fall geometry. Analyzing an explicit Hayward-type regular metric shows exactly which black-hole observables remain degenerate with GR and which strong-field measurements—shadows, echoes, tidal Love numbers, and horizon unitarity—can distinguish capacity-bounded interiors.',
    chapterIntro: [
      'Black holes push both conceptual pictures to their physical limits. To a distant telescope, an infalling clock’s update ratio drops smoothly toward zero at the Schwarzschild radius as if physical change froze at a boundary wall, yet an astronaut falling beside that clock crosses the same surface unimpeded in finite proper time.',
      'This chapter solves an explicit regular-core Hayward metric to test what happens if physical update capacity saturates near Planck density instead of collapsing to a classical singularity. Exact computation of the light-ring photon sphere, eikonal quasinormal ringdown shifts, inner-horizon mass-inflation rates, and tidal Love numbers reveals precisely where horizon echoes and shadow imaging can separate regular cores from classical vacuum horizons.'
    ],
    subsections: [
      {
        number: '6.1',
        title: 'External Coordinate Halt Versus Horizon-Penetrating Geometry and Mass Inflation',
        tier: 'STANDARD GENERAL RELATIVITY',
        paragraphs: [
          'As a clock approaches r_s = 2GM/c², distant observers register redshift factor α_upd(r) = √(1 − r_s/r) → 0, creating the asymptotic "frozen star" appearance. In Painlevé–Gullstrand or Kruskal coordinates, however, proper free-fall time to cross r_s remains finite and Kretschmann curvature K(r_s) = R_μνρσ R^μνρσ = 12/r_s⁴ stays benign for supermassive black holes. Conversely, any literal flat-frame update wall enforcing a hard boundary at r₀ = r_s(1 + λ_port) triggers divergent Boulware static vacuum stress ⟨T_μν⟩ ∝ (1 − r_s/r)⁻² (Proposition C.1) and produces bright accretion-shock emission incompatible with Event Horizon Telescope flux depressions in M87* (42 μas) and Sgr A* (51.8 μas) (EHT Collaboration 2019, 2022).'
        ]
      },
      {
        number: '6.2',
        title: 'Hayward Regular-Core Metric, Analytical Kretschmann Invariants, and Horizon Thermodynamics',
        tier: 'UPDATE-RATE REINTERPRETATION',
        paragraphs: [
          'To test finite-capacity regularization quantitatively without violating exterior PPN bounds, one adopts a static spherically symmetric Hayward-type regular metric (Hayward 2006) ds² = −f(r) c² dt² + f(r)⁻¹ dr² + r² dΩ² with f(r) = 1 − r_s r² / (r³ + r_s ℓ₀²), where ℓ₀ parameterizes the Planck or capacity-saturation core scale (in IGRT, ρ_max ≈ 0.4094 ρ_Pl). For r ≫ ℓ₀, f(r) recovers Schwarzschild geometry exponentially closely (deviations O(r_s ℓ₀² / r³)), automatically matching PPN bounds (γ = β = 1). As r → 0, f(r) ≈ 1 − r²/ℓ₀² forms a smooth de Sitter core whose exact analytical Kretschmann scalar saturates at K(0) = 24 / ℓ₀⁴ rather than diverging as 12 r_s²/r⁶.',
          'When ℓ₀ < ℓ_crit = (2/(3√3)) r_s ≈ 0.3849 r_s, f(r) = 0 admits both an outer event/apparent horizon r_+ ≈ r_s(1 − ℓ₀²/r_s²) and an inner Cauchy horizon r_- ≈ ℓ₀. Numerical evaluation of the surface-gravity ratio |κ_-|/κ_+ reveals rapid growth as ℓ₀ shrinks—from 3.03 at ℓ₀ = 0.30 r_s to 36.14 at ℓ₀ = 0.05 r_s and 1,996 at ℓ₀ = 0.001 r_s—confirming classical Poisson–Israel blueshift mass inflation at r_-. Viable regular cores therefore require either rapid quantum-bounce tunneling or horizonless ultra-compact transition (ℓ₀ > ℓ_crit). At the outer horizon, surface gravity κ_+ = ½ c² |f′(r_+)| lowers Hawking temperature slightly to T_H = ℏ κ_+ / (2π c k_B), while preserving blackbody thermal emission spectra at leading order.'
        ],
        equation: {
          label: '(6.1)',
          unicodeHtml: 'f(r) = 1 − r<sub>s</sub> r² / (r³ + r<sub>s</sub> ℓ<sub>0</sub>²), &nbsp;&nbsp; K(r → 0) = 24 / ℓ<sub>0</sub>⁴ &lt; ∞, &nbsp;&nbsp; K(r<sub>s</sub>) = 12 / r<sub>s</sub>⁴',
          caption: 'Hayward regular-core metric replacing the r = 0 Schwarzschild curvature singularity with finite saturation invariant K(0) = 24/ℓ₀⁴.',
          tier: 'FRONTIER OBSERVATIONAL PROBE',
          plainMeaning: 'A finite minimal length ℓ₀ preserves exterior GR while capping central tidal curvature at 24/ℓ₀⁴.',
          provenance: 'Hayward (2006); Kretschmann (1917); Appendix C derivation.'
        }
      },
      {
        number: '6.3',
        title: 'Observational Signatures: Shadows, ISCO, QNM Echoes, Love Numbers, S2, and Horizon Unitarity',
        tier: 'FRONTIER OBSERVATIONAL PROBE',
        paragraphs: [
          'As catalogued in Table 6.1, current facilities strongly constrain macroscopic departures from classical Kerr horizons. VLTI GRAVITY observations of star S2 orbiting Sgr A* at pericenter r_p ≈ 1,400 r_s confirm gravitational redshift (f_RS = 1.00) and Schwarzschild precession (12.1′/orbit, GRAVITY Collaboration 2020), matching both GR and regular-core models at O((ℓ₀/r_p)²) ≪ 10⁻⁶. Solving the light-ring condition 2f(r_ph) − r_ph f′(r_ph) = 0 shows that at ℓ₀ = 0.05 r_s the photon sphere shifts inward to r_ph = 1.4978 r_s (b_crit = 2.5961 r_s), raising the l = 2 eikonal quasinormal mode frequency ω_R M by only +0.074% (0.3852 vs. Schwarzschild 0.3849), whereas macroscopic ℓ₀ = 0.30 r_s pushes r_ph down to 1.4077 r_s (+3.06% QNM shift, EHT shadow shrinkage beyond current error bars) and ISCO shifts Δr_ISCO/r_ISCO ≈ −0.148 (ℓ₀/r_s)² falsify large cores.',
          'Active discrimination centers on dynamic merger observables and quantum information bounds. LIGO/Virgo/KAGRA ringdowns match GR l = 2, m = 2 quasinormal modes (QNMs), placing upper limits near ~10% amplitude on post-ringdown gravitational-wave echoes delayed across the Regge–Wheeler tortoise cavity Δt_echo ≈ (2 r_s/c) ln(1/λ_port) (~0.454 ms for 10 M_☉ at λ_port = 0.1; ~17.8 ms at Planckian λ_port = ℓ_Pl/r_s) (Cardoso & Pani 2019). Furthermore, classical 4D vacuum black holes possess strictly zero electric and magnetic tidal Love numbers (k₂ = 0) and obey the No-Hair theorem, whereas compact horizonless cores generate logarithmic tidal deformability k₂ ≈ 0.25 / ln(r_s²/ℓ₀²) (~0.042 at ℓ₀ = 0.05 r_s) and multipole shifts.',
          'At the quantum interface, finite-capacity regular cores also confront the black hole information paradox. Rather than destroying unitarity at r = 0 or necessitating burning firewall shells at r_s, regular unitary cores allow Bekenstein–Hawking entropy S_BH = k_B A / (4 ℓ_Pl²) to follow a unitary Page curve via long-lived interior–exterior entanglement (consistent with ER = EPR complementarity pictures). Falsification criteria are explicit: detection of verified phase-coherent QNM echoes at Δt_echo or nonzero tidal Love numbers k₂ ≠ 0 falsifies strictly vacuum classical horizons, whereas null bounds below 10⁻³ echo strain at LISA/Einstein Telescope eliminate horizon-scale reflective layers.'
        ]
      }
    ]
  },
  {
    id: 'ch-7',
    number: 7,
    title: 'Ultraviolet Particle Constraints: Dispersion, Loop Corrections, and Quantum-Vacuum Cosmology',
    kicker: 'Chapter VII',
    tier: 'FRONTIER OBSERVATIONAL PROBE',
    epigraph: 'Multi-TeV photons traversing gigaparsec baselines constrain spacetime granularity twenty orders of magnitude finer than collider scales.',
    leadSummary:
      'Testing whether nature updates on a discrete grid confronts high-energy astroparticle bounds on photon dispersion, vacuum Cherenkov emission, and UHECR propagation. Evaluating one-loop Higgs radiative corrections explicitly clarifies what an update-rate lapse field can and cannot resolve in ultraviolet particle physics.',
    chapterIntro: [
      'If the cosmos refreshes physical events on a discrete temporal tick—a literal clock speed bound below by the Planck scale—ultra-energetic gamma-ray photons crossing billions of light-years should accumulate measurable dispersion lags relative to lower-energy partners. Cosmic gamma-ray bursts and PeV galactic accelerators thus act as natural particle interferometers probing distances twenty orders of magnitude smaller than the Large Hadron Collider.',
      'This chapter pairs cosmological Simpson integration of the Jacob–Piran dispersion kernel with an explicit one-loop Higgs self-energy calculation under ADM lapse coupling. The dual analysis separates genuine Lorentz-violating granularity exclusions from flat-space electroweak naturalness, demonstrating rigorously what a metric clock-rate field cannot cure on its own.'
    ],
    subsections: [
      {
        number: '7.1',
        title: 'Modified Dispersion, Jacob–Piran Cosmological Delays, Vacuum Cherenkov, and GZK Bounds',
        tier: 'FRONTIER OBSERVATIONAL PROBE',
        paragraphs: [
          'If a naive fixed-frame update lattice imposes a minimal temporal refresh step Δt_min = ℏ/E_QG near the Planck time t_Pl = 5.391 × 10⁻⁴⁴ s, relativistic kinematics acquires modified dispersion E² = p² c² + m² c⁴ ± E² (E/E_QG,n)ⁿ. Over cosmological redshift z, expanding flat-ΛCDM spacetime integrates group-velocity differences through the Jacob–Piran kernel K_n(z) = H₀⁻¹ ∫₀^z [(1 + z′)ⁿ / √(Ω_m(1 + z′)³ + Ω_Λ)] dz′ (Jacob & Piran 2008), generating arrival lag Δt_LIV = K_n(z)(E/E_QG,n)ⁿ.',
          'Observed astrophysical spectra decisively exclude linear (n = 1) lattice granularity (Theorem D.1). Fermi-LAT observations of a 31 GeV photon from GRB 090510 at z = 0.903 (where K₁(0.903) = 4.43 × 10¹⁷ s predicts 1.13 s lag at E_Pl) arrived within 0.829 s of MeV emission, enforcing E_QG,1 > 7.6 E_Pl ≈ 9.3 × 10¹⁹ GeV (Abdo et al. 2009). LHAASO measurements extending beyond 10 TeV from GRB 221009A (LHAASO Collaboration 2024) reinforce sub-Planckian linearity exclusions, while 100 TeV synchrotron electrons in the Crab Nebula prohibit superluminal linear shifts below ~10⁶ E_Pl via instantaneous vacuum Cherenkov energy loss. At ultra-high energies, Pierre Auger Observatory measurements of the Greisen–Zatsepin–Kuzmin (GZK) cutoff (~5 × 10¹⁹ eV) and heavy-to-light UHECR air-shower composition further constrain hadronic Lorentz-violating shifts. Any discrete update mechanism must therefore preserve exact flat-space Lorentz invariance (Δt_LIV = 0) or suppress dispersion to quadratic order n ≥ 2, where an 18 TeV photon yields Δt_LIV < 10⁻¹³ s.'
        ]
      },
      {
        number: '7.2',
        title: 'One-Loop Higgs Mass Corrections, Cosmological Constant, Emergent Status, and Dark-Sector Couplings',
        tier: 'FRONTIER OBSERVATIONAL PROBE',
        paragraphs: [
          'To evaluate the post-LHC naturalness conjecture raised in Chapter 1.3 quantitatively, consider coupling the ADM update-rate lapse α_upd(x) to the Standard Model Higgs doublet H via the covariant matter Lagrangian L_H = √(−g) [ g^μν (D_μ H)†(D_ν H) − m₀² |H|² − λ |H|⁴ − y_t (Q̄_L H̃ t_R + h.c.) ]. Expanding around asymptotic vacuum expectation value ⟨α_upd⟩ = 1 (flat Minkowski background g_μν = η_μν), the one-loop top-quark tadpole integral evaluates to δm_H² = (3 y_t² / 8π²) Λ_UV² (Appendix D, Equation D.2). At cutoff Λ_UV = 10¹⁰ GeV and y_t = 0.992, δm_H² ≈ 3.7 × 10¹⁸ GeV², exceeding m_H² ≈ 1.56 × 10⁴ GeV² by fourteen orders of magnitude.',
          'This explicit calculation yields an unambiguous negative result regarding simple lapse reparametrization: substituting α_upd(x) = N(x) as an emergent metric field with ⟨α_upd⟩ = 1 does NOT cancel quadratic radiative sensitivity in flat space, because local Lorentz invariance forces every vacuum propagator loop to scale identically to standard quantum field theory. Stabilizing m_H² or suppressing vacuum zero-point energy ρ_vac ~ Λ_UV⁴ / (16π²) without fine-tuning requires introducing a genuinely covariant nonlocal form factor or modular state-capacity regulator at energy scale Λ_F whose propagator suppression decays smoothly without generating n = 1 photon dispersion—a requirement not met automatically by weak-field α_upd throttling alone.',
          'Similarly, cosmological dark energy and cold dark matter remain strictly decoupled from weak-field clock-speed scalar anomalies: solar-system ephemerides, MICROSCOPE WEP bounds, and galaxy-cluster profiles enforce universal metric coupling of α_upd across baryonic and dark-matter sectors alike. Consequently, α_upd(x) is best understood not as an autonomous fundamental fifth force, but as an emergent operational projection of the metric component √(−g₀₀) in stationary foliations.'
        ]
      }
    ]
  },
  {
    id: 'ch-8',
    number: 8,
    title: 'Comparative Scorecard and the 2026–2035 Experimental Roadmap',
    kicker: 'Chapter VIII',
    tier: 'PPN STRESS-TEST & FALSIFICATION',
    epigraph: 'Empirical progress depends on partitioning settled exclusions cleanly from measurable open frontiers.',
    leadSummary:
      'Consolidating weak-field timing, post-Newtonian bounds, and astroparticle limits leaves pure scalar clock slowing and first-order lattices ruled out, isolating concrete 2026–2035 experiments capable of testing horizon cores, quantum clock coherence, and quadratic dispersion.',
    chapterIntro: [
      'After testing both pictures across thirty-seven orders of magnitude in physical length and energy scale, the empirical scoreboard separates cleanly into settled exclusions and open experimental frontiers. Flat-space clock throttling alone and first-order discrete time lattices fail existing solar-system, binary-pulsar, and gamma-ray observations.',
      'This chapter consolidates all results into an end-to-end comparative matrix and charts six concrete observational programs operating between 2026 and 2035—ranging from spaceborne nuclear optical clocks and kilometer-scale atom interferometers to sub-microarcsecond black hole photon-ring imaging.'
    ],
    subsections: [
      {
        number: '8.1',
        title: 'Comparative Verdict Across Candidate Gravitational Formulations',
        tier: 'PPN STRESS-TEST & FALSIFICATION',
        paragraphs: [
          'Table 8.1 summarizes performance across seven empirical regimes. All contenders agree to O(Φ v²/c⁴) on terrestrial, airborne, and GNSS chronometry. Across solar-system light bending, Shapiro delay, planetary precessions, LLR strong equivalence, Gravity Probe B frame-dragging, and binary pulsar decay, flat-space scalar clock slowing (γ = 0) fails by tens of thousands of standard deviations. Simultaneously, fixed-frame n = 1 discrete clock lattices fail Fermi-LAT, LHAASO, and Crab synchrotron bounds.',
          'Two formulations survive all extant tests: classical General Relativity and the covariant dual update-rate/optical-Gordon description (γ = 1, β = 1, η_N = 0, α₁ = α₂ = 0). Because both determine identical exterior vacuum observables, no weak-field or classical PPN experiment can distinguish them.'
        ]
      },
      {
        number: '8.2',
        title: 'Instrumental Roadmap for 2026–2035: Atom Interferometers, Ringdowns, ngEHT, and Quantum Clocks',
        tier: 'FRONTIER OBSERVATIONAL PROBE',
        paragraphs: [
          'Table 8.2 outlines six experimental programs scheduled over 2026–2035. In spaceborne chronometry, ISS ACES and optical links refine Local Position Invariance across nuclear and atomic transitions to 10⁻⁶ relative precision. Long-baseline atom interferometers—specifically AION (UK), MAGIS-100 (Fermilab), and ELGAR (Europe)—probe gravitational wavebands (0.01–10 Hz) and ultralight scalar couplings via coherent quantum matter-wave phase accumulation.',
          'In strong-field gravity, next-generation Event Horizon Telescope (ngEHT) sub-millimeter arrays (< 5 μas resolution) resolve the n = 1 photon ring around M87* and Sgr A*, while LISA, Einstein Telescope, and Cosmic Explorer audit post-merger ringdowns at signal-to-noise > 100—detecting or excluding echoes down to 10⁻³ strain amplitude. In astroparticle physics, CTAO and IceCube-Gen2 extend quadratic dispersion bounds E_QG,2 past 10¹³ GeV. Finally, tabletop quantum clock interferometers (Zych et al. 2011) test directly whether vertical superpositions preserve unitary proper-time interference visibility or exhibit stochastic decoherence Γ_dec > 0.'
        ]
      }
    ]
  },
  {
    id: 'ch-9',
    number: 9,
    title: 'Conclusion: Theoretical Equivalence, Structural Realism, and Foundational Implications',
    kicker: 'Chapter IX',
    tier: 'EPISTEMOLOGY & PHILOSOPHY OF SCIENCE',
    epigraph: 'Invariant observables survive across rival conceptual descriptions, anchoring objective physical structure without reifying pictorial metaphors.',
    leadSummary:
      'Evaluating curved spacetime against local clock-speed modulation clarifies both the physics of gravitation and central debates in the philosophy of science. Distinguishing failed dynamical scalar theories from covariant metric equivalence refines classical analyses of conventionalism, underdetermination, theoretical equivalence, and structural realism.',
    chapterIntro: [
      'When two formalisms—four-dimensional Lorentzian geometry and covariant dual update-rate impedance—predict identical weak-field timing, planetary precessions, and light-bending angles, physics hands a rare precision laboratory directly to epistemology. Deciding what gravity genuinely is requires sorting empty pictorial metaphors from invariant causal structure.',
      'This concluding chapter synthesizes the complete physical record and draws its philosophical consequences across Poincaré conventionalism, Duhem–Quine underdetermination, Brown–Pooley dynamical relativity, Weatherall categorical equivalence, and ontic structural realism—pinpointing exactly where global Cauchy-horizon topology breaks formal equivalence.'
    ],
    subsections: [
      {
        number: '9.1',
        title: 'Synthesis of the Physical Record Across Weak, Post-Newtonian, and Strong-Field Regimes',
        tier: 'STANDARD GENERAL RELATIVITY',
        paragraphs: [
          'Returning to the opening question—whether gravity bends space or slows down the universe’s clock speed—yields a structured, three-tier scientific answer. First, in static weak gravitational fields and low-velocity regimes, temporal clock-rate modulation α_upd(x) = 1 + Φ(x)/c² governs ordinary Newtonian weight (a = −c² ∇α_upd = −9.82 m/s²) and accounts completely for every observed differential chronometer lead, including 28.28 ns/day over 3,000 m, +38.6 μs/day net GPS offset, and 1.09 × 10⁻¹⁹ shifts across 1 mm at JILA. Neither the textbook elastic-sheet spatial analogy nor naive temporal slowing captures terrestrial free fall accurately on its own: weight arises because four-dimensional trajectories traverse time at rate c across a 10⁻¹⁶ m⁻¹ vertical temporal gradient.',
          'Second, gravity emphatically does not act solely by slowing clocks inside rigid Euclidean three-dimensional space. The moment null rays or relativistic binaries enter the dataset, purely scalar temporal modification (γ = 0) fails starlight deflection by 50% (0.875″ vs. 1.750″), violates Cassini Shapiro timing by >43,000σ, mispredicts Mercury’s perihelion advance by 14.33″–28.65″/century, violates Lunar Laser Ranging Nordtvedt equivalence at >60,000σ, underpredicts Gravity Probe B geodetic precession by two-thirds, omits gravitomagnetic frame-dragging completely, and conflicts with binary-pulsar quadrupole orbital decay.',
          'Third, upgrading the update-rate description to pair temporal throttling α_upd with equal isotropic spatial impedance β_sp = α_upd⁻¹ produces Gordon’s optical refractive index n_eff = α_upd⁻² ≈ 1 − 2Φ/c², recovering the full exterior Schwarzschild metric in isotropic coordinates (γ = 1, β = 1, η_N = 0). Outside compact horizons and ultraviolet curvature thresholds, curved spacetime geometry and covariant dual update-rate dynamics generate identical physical predictions.'
        ]
      },
      {
        number: '9.2',
        title: 'Conventionalism, Underdetermination, Theoretical Equivalence, and Structural Realism',
        tier: 'EPISTEMOLOGY & PHILOSOPHY OF SCIENCE',
        paragraphs: [
          'The divergence between LUH-Scalar, LUH-Full, and General Relativity provides an incisive case study bridging classical and contemporary philosophy of physics. In Science and Hypothesis (1902), Henri Poincaré maintained that geometric axioms lack empirical content independently of physical laws governing rigid rods and optical rays, such that curved geometry paired with universal forces can remain empirically equivalent to modified flat-space physics. Hans Reichenbach (1928/1958) formalized this insight via coordinative definitions linking mathematical symbols (metric components g_μν) to physical measuring operations (ideal clocks and light pulses), while Einstein’s 1921 lecture "Geometry and Experience" distinguished formal axiomatic systems from empirically accountable practical geometry.',
          'Extending Pierre Duhem’s (1906) holism and W. V. O. Quine’s (1951) thesis of empirical underdetermination exposes exact auxiliary assumptions concealed inside gravitational tests. Weak-field clock parity depends strictly on three auxiliary conventions: Einstein clock synchronization via null signals across static shells, path-independent transport of local atomic frequency standards, and restriction to velocities v ≪ c where spatial curvature γ_PPN decouples at O(Φv²/c⁴). Crucially, this weak-field underdetermination is transient: expanding the evidence set to grazing null rays, Shapiro conjunctions, and lunar self-energy immediately falsifies LUH-Scalar (γ = 0) as a physically distinct theory rather than an alternative coordinate convention. By contrast, equivalence between exterior GR and covariant LUH-Full (n_eff = α_upd⁻²) exemplifies permanent classical equivalence up to horizon or ultraviolet dynamic modifications.',
          'This boundary maps directly onto the dynamical versus geometric debate in spacetime philosophy. Harvey Brown (2005) and Oliver Pooley (2013) contend that metric geometry does not independently steer matter like an external container; rather, g_μν codifies the universal dynamical symmetries shared by matter fields (Lorentz covariance and rod-clock contraction). Our PPN no-go theorem supplies a sharper verdict on Brown’s dynamical thesis: a dynamical theory that modifies only temporal transition dynamics without incorporating equal spatial-wave impedance violates Lorentz symmetry and fails solar-system data. Any viable dynamical or informational approach must reproduce the full four-dimensional conformal and Lorentzian symmetry group—fusing matter-clock dynamics and geometry rather than eliminating spatial curvature.',
          'Simultaneously, the comparison illuminates classical and formal debates on spacetime ontology and theoretical equivalence. In the Leibniz–Clarke correspondence (1715–1716) and Machian mechanics, relationalists denied Newton’s substantival space-time container in favor of relations among physical events. Standard GR’s diffeomorphism invariance—examined sharply through the Hole Argument (Einstein 1915; Earman & Norton 1987)—already strips individual bare manifold points of intrinsic identity, whereas Norton and Malament (1977) showed how coordinate and simultaneity conventions operate within fixed causal light-cone structure. In formal philosophy of science, Halvorson (2012, 2019) and Weatherall (2016) distinguish naive syntactic translation from semantic (model-theoretic) and categorical (Morita) equivalence: exterior GR formulated with curved Lorentzian manifolds (M, g_μν) and covariant optical-update formulations expressed via (α_upd, β_sp, u^μ) share isomorphic categories of models preserving invariant observables τ, Δθ, Δt_Shapiro, and curvature scalars K, confirming genuine theoretical equivalence rather than superficial notational variation.',
          'These findings adjudicate directly among competing brands of scientific realism. Naive entity realism (Hacking 1983)—inferring the literal substantial existence of either a bending rubber-like ether or a cosmic microprocessor from empirical success—collapses when two mathematically equivalent formalisms invoke contradictory underlying ontologies. Against pessimistic meta-induction (invoking discarded mechanical ethers) and in precision refinement of the no-miracles argument, John Worrall’s (1989) Epistemic Structural Realism (ESR) locates objective continuity inside invariant mathematical relations. Yet pure ESR faces the classic Newman objection (Newman 1928; Russell 1927): claiming only that nature satisfies an abstract Ramsey sentence with given cardinality is trivially true of any sufficiently large domain unless physical relations remain empirically anchored. Here, James Ladyman’s (1998) Ontic Structural Realism (OSR) and Steven French’s (2014) modal structuralism capture what gravitational tests actually identify: empirical invariants specify concrete physical causal structure—specifically the Lorentzian light-cone ordering and coupled temporal-spatial PPN invariants (γ = 1, β = 1, η_N = 0, α₁ = α₂ = 0)—alongside observable quantum phase interference visibility (Zych et al. 2011).',
          'The paper’s original philosophical contribution is therefore threefold: (1) demonstrating quantitatively how weak-field underdetermination splits into falsifiable dynamical non-equivalence (γ = 0) versus categorical theoretical equivalence (LUH-Full ≅ GR); (2) showing that Brown–Pooley dynamical approaches succeed only when they recover full metric spatial-temporal covariance; and (3) establishing Proposition E.1, proving that permanent conventionalism ends precisely where strong-field capacity ceilings (ℓ₀) or nonlocal UV cutoffs break exterior diffeomorphism invariance.'
        ]
      },
      {
        number: '9.3',
        title: 'Compressed Assessment of Ultraviolet Naturalness and Quantum Horizon Open Questions',
        tier: 'FRONTIER OBSERVATIONAL PROBE',
        paragraphs: [
          'Contrary to speculative claims that slow cosmic clock speed automatically cures collider naturalness, the explicit one-loop calculation in Chapter 7.2 (Equation D.2) establishes that setting α_upd(x) = N(x) around asymptotically flat ⟨α_upd⟩ = 1 leaves Higgs quadratic divergences δm_H² ~ 3y_t² Λ_UV²/(8π²) and vacuum zero-point sums unchanged. Any update-rate framework aiming to address the 125.09 GeV Higgs hierarchy or Λ_inst ~ 10¹⁰–10¹² GeV metastability (Buttazzo et al. 2013) must go beyond weak-field lapse throttling and introduce explicit covariant nonlocal form factors or spectral capacity bounds compatible with LHC dijet/dilepton limits and LHAASO n = 1 non-dispersion bounds.',
          'Five empirical frontiers over 2026–2035 will refine the remaining structural boundary: (1) LISA, Einstein Telescope, and Cosmic Explorer gravitational-wave bounds on post-merger horizon echoes (< 10⁻³ strain) and tidal Love numbers k₂; (2) ngEHT n = 1 photon-ring imaging around M87* and Sgr A*; (3) AION, MAGIS-100, and ELGAR atom-interferometry probes of scalar-tensor sectors; (4) ISS ACES optical tests of Local Position Invariance; and (5) tabletop quantum clock interferometry verifying unitary phase coherence across Δh without stochastic dephasing Γ_dec. Whether these probes uncover finite-capacity Planck cores or reinforce smooth classical Lorentzian horizons, the invariant structure uniting gravitational time dilation and spatial wave propagation stands empirically secured.'
        ]
      }
    ]
  }
];

export interface EverydayTestRow {
  experiment: string;
  heightOrOrbit: string;
  observedResult: string;
  curvedSpacetimePred: string;
  updateRatePred: string;
  discriminatingPower: string;
}

export const TABLE_4_1_EVERYDAY_TESTS: EverydayTestRow[] = [
  {
    experiment: 'Pound–Rebka–Snider (1960/1965)',
    heightOrOrbit: '22.5 m tower (Harvard)',
    observedResult: 'Δν/ν = −(2.56 ± 0.03) × 10⁻¹⁵',
    curvedSpacetimePred: '−2.45 × 10⁻¹⁵ (via g₀₀)',
    updateRatePred: '−2.45 × 10⁻¹⁵ (via α_upd)',
    discriminatingPower: '0% (Identical to 10⁻¹⁵)'
  },
  {
    experiment: 'Hafele–Keating (1972)',
    heightOrOrbit: 'Commercial jets (~10 km)',
    observedResult: '−59 ± 10 ns (E), +273 ± 7 ns (W)',
    curvedSpacetimePred: '−40 ns (E), +275 ns (W)',
    updateRatePred: '−40 ns (E), +275 ns (W)',
    discriminatingPower: '0% (Identical to O(c⁻²))'
  },
  {
    experiment: 'Gravity Probe A (Vessot et al. 1980)',
    heightOrOrbit: '10,000 km suborbital rocket',
    observedResult: 'Δν/ν match to 7 × 10⁻⁵ rel.',
    curvedSpacetimePred: '+4.36 × 10⁻¹⁰',
    updateRatePred: '+4.36 × 10⁻¹⁰',
    discriminatingPower: '0% (Temporal lapse only)'
  },
  {
    experiment: 'GPS Constellation (Ashby 2003)',
    heightOrOrbit: 'a = 26,560 km, v = 3.874 km/s',
    observedResult: '+38.6 μs/day (±22.8 ns @ e=0.01)',
    curvedSpacetimePred: '+45.8 − 7.2 = +38.6 μs/day',
    updateRatePred: '+45.8 − 7.2 = +38.6 μs/day',
    discriminatingPower: '0% (Diff ~ O(10⁻¹⁹))'
  },
  {
    experiment: 'Galileo 5/6 Eccentric (Delva et al. 2018)',
    heightOrOrbit: 'e ≈ 0.162, Δr = 8,500 km',
    observedResult: 'α_LPI = (0.19 ± 2.48) × 10⁻⁵',
    curvedSpacetimePred: 'α_LPI = 0 (Exact LPI)',
    updateRatePred: 'α_LPI = 0 (Universal α_upd)',
    discriminatingPower: '0% (Identical potential slope)'
  },
  {
    experiment: 'NIST ²⁷Al⁺ (Chou et al. 2010)',
    heightOrOrbit: 'Δh = 33 cm laboratory traps',
    observedResult: '4.1 × 10⁻¹⁷ shift',
    curvedSpacetimePred: '3.6 × 10⁻¹⁷ (g₀Δh/c²)',
    updateRatePred: '3.6 × 10⁻¹⁷ (via α_upd)',
    discriminatingPower: '0% (Identical g₀₀ gradient)'
  },
  {
    experiment: 'Tokyo Skytree ⁸⁷Sr (Takamoto et al. 2020)',
    heightOrOrbit: 'Δh = 450 m fiber link',
    observedResult: '4.91 × 10⁻¹⁴ (+4.24 ns/day)',
    curvedSpacetimePred: 'g₀Δh/c² to 10⁻¹⁸',
    updateRatePred: 'g₀Δh/c² to 10⁻¹⁸',
    discriminatingPower: '0% (Identical g₀₀ gradient)'
  },
  {
    experiment: 'JILA ⁸⁷Sr Lattice (Bothwell et al. 2022)',
    heightOrOrbit: 'Δh = 1 mm atomic sample',
    observedResult: '1.09 × 10⁻¹⁹ across 1 mm',
    curvedSpacetimePred: '1.091 × 10⁻¹⁹',
    updateRatePred: '1.091 × 10⁻¹⁹',
    discriminatingPower: '0% (Identical g₀₀ gradient)'
  },
  {
    experiment: 'Annual Solar Eccentricity (Al⁺/Hg⁺)',
    heightOrOrbit: '1 AU orbit (e_⊕ = 0.0167)',
    observedResult: '|β_clock| < 10⁻⁶ LPI bound',
    curvedSpacetimePred: '±1.65 × 10⁻¹⁰ (3.30 × 10⁻¹⁰ p-p)',
    updateRatePred: '±1.65 × 10⁻¹⁰ (3.30 × 10⁻¹⁰ p-p)',
    discriminatingPower: '0% (Universal redshift)'
  }
];

export interface StressTestRow {
  testName: string;
  measuredValue: string;
  pureClockSlowingGamma0: string;
  curvedSpaceTimeGR: string;
  dualUpdateRateGamma1: string;
  verdictOnPureScalar: string;
}

export const TABLE_5_1_STRESS_TESTS: StressTestRow[] = [
  {
    testName: 'Solar-Limb Light Bending (VLBI / Gaia)',
    measuredValue: '1.750″ ± 0.0002″',
    pureClockSlowingGamma0: '0.875″ (50% error)',
    curvedSpaceTimeGR: '1.750″',
    dualUpdateRateGamma1: '1.750″ (n_eff = α_upd⁻²)',
    verdictOnPureScalar: 'FALSIFIED (> 4,000σ)'
  },
  {
    testName: 'Shapiro Delay (Bertotti et al. 2003, Cassini)',
    measuredValue: 'γ − 1 = (2.1 ± 2.3) × 10⁻⁵',
    pureClockSlowingGamma0: 'γ = 0 (~120 μs vs 240 μs)',
    curvedSpaceTimeGR: 'γ = 1 (~240 μs)',
    dualUpdateRateGamma1: 'γ = 1 (~240 μs)',
    verdictOnPureScalar: 'FALSIFIED (> 43,000σ)'
  },
  {
    testName: 'Mercury Precession (MESSENGER / INPOP / EPM)',
    measuredValue: '42.98″ ± 0.04″ / cy; |β−1| < 8×10⁻⁵',
    pureClockSlowingGamma0: '28.65″ (β=0) or 14.33″ (β=1)',
    curvedSpaceTimeGR: '42.98″ / century',
    dualUpdateRateGamma1: '42.98″ / century (γ=1, β=1)',
    verdictOnPureScalar: 'FALSIFIED (> 350σ)'
  },
  {
    testName: 'Nordtvedt SEP (Williams et al. 2004, LLR)',
    measuredValue: '|η_N| < 1.1 × 10⁻⁴',
    pureClockSlowingGamma0: 'η_N = −3 (β=0) or +1 (β=1)',
    curvedSpaceTimeGR: 'η_N = 0',
    dualUpdateRateGamma1: 'η_N = 0 (γ=1, β=1)',
    verdictOnPureScalar: 'FALSIFIED (> 60,000σ at β=−1)'
  },
  {
    testName: 'Gravity Probe B (Everitt et al. 2011)',
    measuredValue: '+6602±18 (geod.), −37.2±7.2 mas/yr (LT)',
    pureClockSlowingGamma0: '+2202 mas/yr (geod.), 0 (LT)',
    curvedSpaceTimeGR: '+6606.1, −39.2 mas/yr',
    dualUpdateRateGamma1: '+6606.1, −39.2 mas/yr',
    verdictOnPureScalar: 'FALSIFIED (> 200σ)'
  },
  {
    testName: 'Binary & Double Pulsars (B1913+16 / J0737−3039)',
    measuredValue: 'dP/dt = −2.4025 × 10⁻¹² s/s (ratio 0.998)',
    pureClockSlowingGamma0: 'Scalar dipole loss / wrong P_dot',
    curvedSpaceTimeGR: 'Pure quadrupole dP/dt',
    dualUpdateRateGamma1: 'Pure quadrupole (α₁=α₂=0)',
    verdictOnPureScalar: 'FALSIFIED'
  }
];

export interface PpnParameterBoundRow {
  parameter: string;
  physicalMeaning: string;
  will2014Bound: string;
  luhScalarValue: string;
  dualUpdateGRValue: string;
  primaryExperiment: string;
}

export const TABLE_5_2_PPN_BOUNDS: PpnParameterBoundRow[] = [
  {
    parameter: 'γ − 1',
    physicalMeaning: 'Space curvature per unit rest mass',
    will2014Bound: '(2.1 ± 2.3) × 10⁻⁵',
    luhScalarValue: '−1 (γ = 0)',
    dualUpdateGRValue: '0 (γ = 1)',
    primaryExperiment: 'Cassini Shapiro delay (Bertotti et al. 2003)'
  },
  {
    parameter: 'β − 1',
    physicalMeaning: 'Nonlinearity in superposition of gravity',
    will2014Bound: '< 8 × 10⁻⁵',
    luhScalarValue: '−1 or 0 (conflict)',
    dualUpdateGRValue: '0 (β = 1)',
    primaryExperiment: 'MESSENGER / INPOP / LLR'
  },
  {
    parameter: 'η_N = 4β−γ−3',
    physicalMeaning: 'Nordtvedt Strong Equivalence violation',
    will2014Bound: '< 1.1 × 10⁻⁴',
    luhScalarValue: '−3, +1, or −7',
    dualUpdateGRValue: '0',
    primaryExperiment: 'Lunar Laser Ranging (Williams et al. 2004)'
  },
  {
    parameter: 'ξ',
    physicalMeaning: 'Preferred-location Whitehead effects',
    will2014Bound: '< 4 × 10⁻⁹',
    luhScalarValue: '0 or O(1) if anisotropic',
    dualUpdateGRValue: '0',
    primaryExperiment: 'Millisecond pulsar spin stability'
  },
  {
    parameter: 'α₁',
    physicalMeaning: 'Preferred-frame post-Newtonian boost',
    will2014Bound: '< 4 × 10⁻⁵',
    luhScalarValue: 'O(1) unless fine-tuned',
    dualUpdateGRValue: '0',
    primaryExperiment: 'LLR & PSR J1738+0333 / J0737−3039'
  },
  {
    parameter: 'α₂',
    physicalMeaning: 'Preferred-frame anisotropy & torque',
    will2014Bound: '< 2 × 10⁻⁹',
    luhScalarValue: 'Excluded by solar spin axis',
    dualUpdateGRValue: '0',
    primaryExperiment: 'Solar spin alignment & pulsars'
  },
  {
    parameter: 'α₃',
    physicalMeaning: 'Momentum conservation violation',
    will2014Bound: '< 4 × 10⁻²⁰',
    luhScalarValue: 'O(1) in non-covariant lattice',
    dualUpdateGRValue: '0',
    primaryExperiment: 'Binary pulsar spindown statistics'
  }
];

export interface BlackHoleProbeRow {
  observable: string;
  instrumentAndTarget: string;
  standardGR: string;
  literalUpdateHaltModel: string;
  covariantUpdateCapacityIGRT: string;
}

export const TABLE_6_1_BLACK_HOLES: BlackHoleProbeRow[] = [
  {
    observable: 'Horizon & Central Core (r → 0)',
    instrumentAndTarget: 'Analytical / Kretschmann K',
    standardGR: 'Smooth horizon r_s; K → ∞ singularity at r = 0',
    literalUpdateHaltModel: 'Static wall at r_s triggers divergent Boulware stress',
    covariantUpdateCapacityIGRT: 'Hayward core: r_+ ≈ r_s, inner r_− ≈ ℓ₀, K(0) = 24/ℓ₀⁴ < ∞'
  },
  {
    observable: 'Photon Ring & Shadow Diameter',
    instrumentAndTarget: 'EHT (M87*: 42 μas; Sgr A*: 51.8 μas)',
    standardGR: 'd_sh = 3√3 r_s ≈ 5.20 r_s; deep brightness minimum',
    literalUpdateHaltModel: 'Incandescent accretion shock spoils central contrast',
    covariantUpdateCapacityIGRT: 'd_sh = 5.20 [1 − (4/27)(ℓ₀/r_s)²] r_s; matches if ℓ₀ ≪ r_s'
  },
  {
    observable: 'GW Merger Ringdown & Echoes',
    instrumentAndTarget: 'LIGO / Virgo / KAGRA (10–100 M_☉)',
    standardGR: 'Damped Kerr QNMs; zero post-ringdown echoes',
    literalUpdateHaltModel: 'Large prompt reflections excluded (< 10%)',
    covariantUpdateCapacityIGRT: 'Optional echoes at Δt_echo = (2r_s/c) ln(1/λ_port)'
  },
  {
    observable: 'S2 Pericenter Redshift & Precession',
    instrumentAndTarget: 'VLTI GRAVITY (Sgr A*, 1,400 r_s)',
    standardGR: 'f_RS = 1.00, f_SP = 1.00 (12.1′/orbit)',
    literalUpdateHaltModel: 'Matches f_RS; fails f_SP unless γ = β = 1',
    covariantUpdateCapacityIGRT: 'Matches f_RS and f_SP to O(10⁻⁶)'
  },
  {
    observable: 'Tidal Love Numbers & Unitarity',
    instrumentAndTarget: 'Inspiral Waveform / Page Curve',
    standardGR: 'k₂ = 0 identically; thermal Hawking spectrum',
    literalUpdateHaltModel: 'Large k₂ ≠ 0 ruled out for compact stars',
    covariantUpdateCapacityIGRT: 'k₂ ~ O((ℓ₀/r_s)²); unitary core purification'
  }
];

export interface PredictionSummaryRow {
  phenomenon: string;
  curvedSpacetimeGR: string;
  pureClockSlowing: string;
  fullDualUpdateRateIGRT: string;
  empiricalWinner: string;
}

export const TABLE_8_1_PREDICTIONS_MATRIX: PredictionSummaryRow[] = [
  {
    phenomenon: 'Mountaintop & Millimeter Clocks',
    curvedSpacetimeGR: 'Δν/ν = g₀Δh/c²',
    pureClockSlowing: 'Δν/ν = g₀Δh/c²',
    fullDualUpdateRateIGRT: 'Δν/ν = g₀Δh/c²',
    empiricalWinner: 'Three-Way Tie'
  },
  {
    phenomenon: 'GPS Net Offset & Eccentricity',
    curvedSpacetimeGR: '+38.6 μs/day (±22.8 ns)',
    pureClockSlowing: '+38.6 μs/day',
    fullDualUpdateRateIGRT: '+38.6 μs/day (±22.8 ns)',
    empiricalWinner: 'Three-Way Tie'
  },
  {
    phenomenon: 'Solar Light Deflection & Cassini',
    curvedSpacetimeGR: '1.750″; γ = 1',
    pureClockSlowing: '0.875″; γ = 0 (Excluded)',
    fullDualUpdateRateIGRT: '1.750″; n_eff = α_upd⁻²',
    empiricalWinner: 'GR & Dual Update-Rate'
  },
  {
    phenomenon: 'Mercury Precession & LLR SEP',
    curvedSpacetimeGR: '42.98″/cy; η_N = 0',
    pureClockSlowing: '14.33″–28.65″; η_N ≠ 0',
    fullDualUpdateRateIGRT: '42.98″/cy; η_N = 0',
    empiricalWinner: 'GR & Dual Update-Rate'
  },
  {
    phenomenon: 'GP-B Frame-Dragging & Pulsars',
    curvedSpacetimeGR: '−39.2 mas/yr; quadrupole P_dot',
    pureClockSlowing: '0 frame-drag; dipole excess',
    fullDualUpdateRateIGRT: '−39.2 mas/yr; quadrupole P_dot',
    empiricalWinner: 'GR & Dual Update-Rate'
  },
  {
    phenomenon: 'Black Hole Interior (r → 0)',
    curvedSpacetimeGR: 'Classical r = 0 singularity',
    pureClockSlowing: 'Update halt at r_s (Excluded)',
    fullDualUpdateRateIGRT: 'Regular Hayward core K = 24/ℓ₀⁴',
    empiricalWinner: 'Open Frontier (LISA / ET)'
  },
  {
    phenomenon: 'High-Energy GRB Dispersion',
    curvedSpacetimeGR: 'Δt_LIV = 0 (Exact Lorentz)',
    pureClockSlowing: 'n = 1 lattice lag (Excluded)',
    fullDualUpdateRateIGRT: '0 (Covariant) or O(E/E_Pl)²',
    empiricalWinner: 'GR & Covariant QFI'
  }
];

export interface RoadmapFacilityRow {
  facility: string;
  timeframe: string;
  observable: string;
  targetPrecision: string;
  discriminatingReach: string;
}

export const TABLE_8_2_NEXT_GEN_ROADMAP: RoadmapFacilityRow[] = [
  {
    facility: 'ACES (ISS) / Optical Links',
    timeframe: '2026–2029',
    observable: 'Space-to-ground nuclear & optical clock redshift',
    targetPrecision: 'δ(Δν/ν) ~ 10⁻⁶ rel.',
    discriminatingReach: 'Tests Local Position Invariance & species universality'
  },
  {
    facility: 'AION / MAGIS-100 / ELGAR',
    timeframe: '2026–2033',
    observable: 'Mid-band (0.01–10 Hz) atom interferometry',
    targetPrecision: 'Strain ~ 10⁻²⁰ Hz⁻¹/²',
    discriminatingReach: 'Constrains ultralight scalar fifth forces & equivalence'
  },
  {
    facility: 'LISA + Einstein Telescope / CE',
    timeframe: '2029–2035',
    observable: 'Post-merger QNMs, GW echoes, Love numbers k₂',
    targetPrecision: 'Echo < 10⁻³; δk₂ ~ 0.01',
    discriminatingReach: 'Tests classical vacuum horizons vs. finite regular cores ℓ₀'
  },
  {
    facility: 'ngEHT (Next-Gen EHT)',
    timeframe: '2028–2033',
    observable: 'n = 1 photon ring & central shadow contrast',
    targetPrecision: '< 5 μas resolution',
    discriminatingReach: 'Tightens upper bounds on ℓ₀/r_s and horizon reflectivity'
  },
  {
    facility: 'CTAO & IceCube-Gen2',
    timeframe: '2027–2034',
    observable: '100 TeV–PeV GRB & neutrino time lags',
    targetPrecision: 'E_QG,2 > 10¹³ GeV',
    discriminatingReach: 'Probes quadratic n = 2 spacetime dispersion thresholds'
  },
  {
    facility: 'Quantum Clock Interferometers',
    timeframe: '2027–2035',
    observable: 'Proper-time superposition visibility across Δh',
    targetPrecision: 'Δh ~ cm–m splitting',
    discriminatingReach: 'Distinguishes unitary phase evolution from stochastic Γ_dec > 0'
  }
];

export const CLOCK_SPEED_GLOSSARY: ClockPaperGlossaryEntry[] = [
  {
    term: 'Proper Time (τ)',
    tier: 'STANDARD GENERAL RELATIVITY',
    definition: 'Invariant Lorentzian arc length measured by an ideal clock along a physical worldline.'
  },
  {
    term: 'Coordinate Time (t)',
    tier: 'STANDARD GENERAL RELATIVITY',
    definition: 'Smooth global foliation parameter (e.g., asymptotic Schwarzschild time); not a local physical invariant.'
  },
  {
    term: 'Metric Tensor (g_μν)',
    tier: 'STANDARD GENERAL RELATIVITY',
    definition: 'Symmetric four-dimensional tensor encoding proper-time lapse (g₀₀), gravitomagnetic drag (g₀ᵢ), and spatial geometry (g_ij).'
  },
  {
    term: 'Local Update-Rate Factor (α_upd)',
    acronym: 'α_upd',
    tier: 'UPDATE-RATE REINTERPRETATION',
    definition: 'Operational static clock ratio ν_obs(∞)/ν_emit(x) = (dτ/dt)_static; coincides with ADM lapse N = √(−g₀₀) in covariant formulations.'
  },
  {
    term: 'Optical Gordon Metric',
    tier: 'UPDATE-RATE REINTERPRETATION',
    definition: 'Equivalence mapping curved vacuum null geodesics to wave propagation in an isotropic medium with refractive index n_eff = α_upd⁻² ≈ 1 − 2Φ/c².'
  },
  {
    term: 'Parametrized Post-Newtonian (PPN) Formalism',
    acronym: 'PPN',
    tier: 'PPN STRESS-TEST & FALSIFICATION',
    definition: 'Perturbative weak-field taxonomy parameterized by spatial curvature γ, nonlinearity β, and preferred-frame coefficients (α₁, α₂, α₃, ξ).'
  },
  {
    term: 'Nordtvedt Parameter (η_N)',
    tier: 'PPN STRESS-TEST & FALSIFICATION',
    definition: 'Combination η_N = 4β − γ − 3 measuring violations of gravitational self-energy universality; constrained by LLR to |η_N| < 1.1 × 10⁻⁴.'
  },
  {
    term: 'Kretschmann Scalar (K)',
    tier: 'STANDARD GENERAL RELATIVITY',
    definition: 'Coordinate-invariant curvature contraction R_μνρσ R^μνρσ; equals 12/r_s⁴ at Schwarzschild horizons and 24/ℓ₀⁴ at Hayward regular cores.'
  },
  {
    term: 'Hayward Regular Core',
    tier: 'FRONTIER OBSERVATIONAL PROBE',
    definition: 'Static spherical regular metric f(r) = 1 − r_s r² / (r³ + r_s ℓ₀²) replacing the r = 0 curvature singularity with a finite de Sitter core.'
  },
  {
    term: 'Quantum Fisher–Rao Metric',
    tier: 'UPDATE-RATE REINTERPRETATION',
    definition: 'Riemannian distinguishability metric I_F governing quantum state-evolution speed limits in projective Hilbert space.'
  },
  {
    term: 'Jacob–Piran Dispersion Kernel (K_n)',
    tier: 'FRONTIER OBSERVATIONAL PROBE',
    definition: 'Flat-ΛCDM cosmological redshift integral converting modified photon group velocity at energy E/E_QG,n into arrival-time delays.'
  },
  {
    term: 'Structural Realism',
    tier: 'EPISTEMOLOGY & PHILOSOPHY OF SCIENCE',
    definition: 'Philosophical thesis locating objective scientific knowledge in invariant relational and mathematical structures preserved across equivalent formulations.'
  }
];

export const CLOCK_SPEED_APPENDICES: ClockPaperAppendix[] = [
  {
    letter: 'A',
    title: 'Variational Action, Optical-Gordon Equivalence, Weak-Field Isomorphism & Geodesic Derivations',
    tier: 'UPDATE-RATE REINTERPRETATION',
    summary:
      'Formalizes isotropic Schwarzschild–Gordon correspondence (n_eff = α_upd⁻²), ADM lapse identification, Theorem A.1, Calculations 1.1 and 2.1, and the quantum Lindblad channel.',
    equations: [
      {
        label: '(A.1)',
        unicodeHtml: 'ds² = −[(1 − GM/(2c²r̄)) / (1 + GM/(2c²r̄))]² c² dt² + (1 + GM/(2c²r̄))⁴ (dx² + dy² + dz²)',
        caption: 'Exact Schwarzschild vacuum metric transformed into isotropic coordinates r̄.',
        tier: 'STANDARD GENERAL RELATIVITY',
        plainMeaning: 'In isotropic coordinates, spatial scaling is isotropic across x, y, and z.',
        provenance: 'Schwarzschild (1916); Eddington (1923), §43.',
        derivationSteps: [
          'Define isotropic radial coordinate r̄ via r = r̄ (1 + GM/(2c²r̄))².',
          'Differentiate dr/dr̄ = 1 − G²M²/(4c⁴r̄²) and substitute 1 − r_s/r = [(1 − GM/(2c²r̄))/(1 + GM/(2c²r̄))]² into Eq. (2.1).'
        ]
      },
      {
        label: '(A.2)',
        unicodeHtml: 'n<sub>eff</sub>(r̄) = c / |d𝐱/dt| = β<sub>sp</sub> / α<sub>upd</sub> = (1 + GM/(2c²r̄))³ / (1 − GM/(2c²r̄)) ≈ 1 / α<sub>upd</sub>² ≈ 1 − 2Φ / c²',
        caption: 'Isotropic Gordon refractive index from reciprocal temporal lapse α_upd and spatial impedance β_sp.',
        tier: 'UPDATE-RATE REINTERPRETATION',
        plainMeaning: 'Because spatial scale expands as β_sp ≈ α_upd⁻¹ while clocks slow as α_upd, n_eff scales as 1/α_upd² rather than 1/α_upd.',
        provenance: 'Gordon (1923); de Felice (1971).',
        derivationSteps: [
          'Set ds² = −α_upd² c² dt² + β_sp² |d𝐱|² = 0 with α_upd = √(−g₀₀) and β_sp = √g_ii = (1 + GM/(2c²r̄))².',
          'Solve |d𝐱|/dt = c α_upd / β_sp, yielding n_eff = β_sp / α_upd = 1/α_upd² + O(Φ²/c⁴) = 1 + 2GM/(c²r̄).'
        ]
      }
    ],
    theoremBoxes: [
      {
        kind: 'Theorem',
        number: 'A.1',
        title: 'Weak-Field Clock-Test Isomorphism',
        tier: 'UPDATE-RATE REINTERPRETATION',
        statement:
          'For any stationary or slow-moving clock (v ≪ c) in a weak gravitational field (|Φ|/c² ≪ 1), proper-time predictions of General Relativity coincide to O(Φ/c², v²/c²) with flat-space scalar clock-slowing α_upd(x) = 1 + Φ(x)/c².',
        proofSteps: [
          'Expand ds² = −(1 + 2Φ/c²)c² dt² + (1 − 2γΦ/c²) d𝐱² for coordinate speed v = |d𝐱/dt| ≪ c.',
          'Factor c² dt²: (dτ/dt)² = 1 + 2Φ/c² − (v²/c²)(1 − 2γΦ/c²) = 1 + 2Φ/c² − v²/c² + O(γΦv²/c⁴).',
          'Taking the square root yields dτ/dt = 1 + Φ/c² − v²/(2c²) + O(c⁻⁴), matching α_upd √(1 − v²/c²).',
          'Because γ enters strictly at O(Φv²/c⁴) (~10⁻¹⁹ at GPS altitude), slow chronometers exhibit 0% weak-field discrimination.'
        ],
        sourceNote: 'Reproduces Pound & Snider (1965), Hafele & Keating (1972), Vessot et al. (1980), Ashby (2003), Chou et al. (2010), Delva et al. (2018), Takamoto et al. (2020), and Bothwell et al. (2022).'
      }
    ],
    workedExamples: [
      {
        title: 'Calculation 1.1 · 3,000 m Altitude Clock Differential',
        setup: 'Compare ⁸⁷Sr optical lattice clocks (ν₀ = 429.228 THz) across Δh = 3,000 m using standard gravity g₀ = 9.80665 m/s² versus spherical GM_⊕/R_⊕².',
        steps: [
          'Compute standard geoid shift: Δν/ν₀ = g₀ Δh / c² = (9.80665)(3,000) / (2.99792458×10⁸)² = 3.2734 × 10⁻¹³.',
          'Multiply by 86,400 s/day: Δτ_geoid = 28.28 ns/day (10.33 μs/year; 1.214 × 10⁷ cycles/day).',
          'Evaluating spherical GM_⊕/R_⊕² = 9.820 m/s² without J₂ or centrifugal flattening yields 28.31 ns/day (0.11% larger).'
        ],
        resultEquation: {
          label: '(1.2)',
          unicodeHtml: 'Δτ<sub>3,000 m</sub> = 28.28 ns/day &nbsp;(geoid g<sub>0</sub>) &nbsp;&nbsp;|&nbsp;&nbsp; 28.31 ns/day &nbsp;(spherical GM<sub>⊕</sub>/R<sub>⊕</sub>²)',
          caption: 'Daily proper-time lead across 3,000 m showing standard geoid versus spherical monopole evaluation.',
          tier: 'ESTABLISHED EMPIRICAL FACT',
          plainMeaning: 'Using geoid standard g₀ gives 28.28 ns/day (10.33 μs/yr), while neglecting centrifugal/J₂ flattening gives 28.31 ns/day.',
          provenance: 'CODATA 2022 c, G, g₀; IAU 2015 terrestrial nominal constants.'
        },
        takeaway: 'Geoid potential standardization accounts cleanly for the 0.03 ns/day difference between empirical sea-level and spherical-Earth approximations.'
      },
      {
        title: 'Calculation 2.1 · Temporal Metric Gradient Driving Terrestrial Free Fall',
        setup: 'Compute radial geodesic acceleration a = −c² ∂_r√(−g₀₀) at Earth radius R_⊕ = 6.371 × 10⁶ m.',
        steps: [
          'Compute surface potential ratio r_s,⊕ / R_⊕ = 8.87 × 10⁻³ m / 6.371 × 10⁶ m = 1.392 × 10⁻⁹.',
          'Differentiate α_upd(r) ≈ 1 − GM_⊕/(r c²): dα_upd/dr = GM_⊕/(r² c²) = 1.093 × 10⁻¹⁶ m⁻¹.',
          'Multiply by (u⁰)² ≈ c²: a = −(8.98755 × 10¹⁶)(1.093 × 10⁻¹⁶) = −9.82 m/s².'
        ],
        resultEquation: {
          label: '(2.2)',
          unicodeHtml: 'a<sub>geodesic</sub> = −c² (dα<sub>upd</sub> / dr) = −GM<sub>⊕</sub> / R<sub>⊕</sub>² = −9.82 m/s²',
          caption: 'Derivation of Newtonian surface gravity from the radial gradient of proper-time lapse.',
          tier: 'STANDARD GENERAL RELATIVITY',
          plainMeaning: 'A 10⁻¹⁶ m⁻¹ gradient in clock rate multiplied by c² produces 9.82 m/s² downward acceleration.',
          provenance: 'Weak-field geodesic equation d²xⁱ/dt² + Γⁱ₀₀ (dx⁰/dt)² = 0.'
        },
        takeaway: 'Slow bodies accelerate predominantly due to temporal metric gradients rather than spatial curvature.'
      }
    ],
    paragraphs: [
      'In the quantum sector, unitary proper-time evolution obeys dρ/dt = −(i/ℏ)[α_upd(x)H₀, ρ] + Γ_dec(H₀ρH₀ − ½{H₀², ρ}) with Γ_dec = 0, preserving interferometric visibility V(Δτ) = |cos(ΔE Δτ / 2ℏ)| in vertical superpositions (Zych et al. 2011).'
    ]
  },
  {
    letter: 'B',
    title: 'PPN No-Go Theorem, Light Deflection, Shapiro Delay & Mercury Precession',
    tier: 'PPN STRESS-TEST & FALSIFICATION',
    summary:
      'Provides line-by-line PPN derivations establishing No-Go Result B.1 and Calculation 5.1 against solar-system bounds.',
    equations: [
      {
        label: '(B.1)',
        unicodeHtml: 'Δθ(γ) = (1 + γ) · (2GM<sub>☉</sub> / (b c²)) = [(1 + γ)/2] · 1.7504″ · (R<sub>☉</sub> / b)',
        caption: 'PPN light-deflection angle across grazing impact parameter b.',
        tier: 'PPN STRESS-TEST & FALSIFICATION',
        plainMeaning: 'Setting γ = 0 reduces solar-limb bending from 1.750″ to 0.875″.',
        provenance: 'Einstein (1911) vs. (1915); Will (2014).',
        derivationSteps: [
          'Integrate transverse refractive gradient ∇_⊥[(1 + γ)GM/(c² r)] = −(1 + γ)GM b / [c²(b² + x²)³/²] over x ∈ (−∞, +∞).',
          'Apply ∫ (b² + x²)⁻³/² dx = 2/b² to obtain Δθ = (1 + γ) 2GM_☉/(b c²).'
        ]
      },
      {
        label: '(B.2)',
        unicodeHtml: 'Δϖ(γ, β) = [(2 + 2γ − β)/3] · [6π GM<sub>☉</sub> / (a(1 − e²) c²)], &nbsp;&nbsp;&nbsp; η<sub>N</sub> = 4β − γ − 3',
        caption: 'Relativistic perihelion advance and Nordtvedt Strong Equivalence parameter.',
        tier: 'PPN STRESS-TEST & FALSIFICATION',
        plainMeaning: 'Orbital precession and LLR jointly determine both γ = 1 and β = 1.',
        provenance: 'Robertson (1962); Nordtvedt (1968); Williams et al. (2004).',
        derivationSteps: [
          'Expand the PPN two-body Lagrangian to O(v⁴/c⁴) and evaluate secular Runge–Lenz precession per orbit.',
          'Multiply by 415.202 Mercury orbits/Julian century to obtain [(2 + 2γ − β)/3] · 42.98″/cy.'
        ]
      }
    ],
    theoremBoxes: [
      {
        kind: 'No-Go Result',
        number: 'B.1',
        title: 'Incompatibility of Flat-Space Scalar Clock-Slowing (γ = 0)',
        tier: 'PPN STRESS-TEST & FALSIFICATION',
        statement:
          'Any flat-space scalar update-rate formulation (γ = 0) with arbitrary temporal nonlinearity β violates Cassini Shapiro delay, VLBI lensing, Mercury precession, and Lunar Laser Ranging Nordtvedt limits simultaneously.',
        proofSteps: [
          'Cassini radio tracking constrains γ − 1 = (2.1 ± 2.3) × 10⁻⁵, excluding γ = 0 at >43,000σ.',
          'At γ = 0, matching Mercury precession (2 + 2γ − β)/3 = 1 requires β = −1.',
          'Substituting (γ = 0, β = −1) into η_N = 4β − γ − 3 gives η_N = −7, contradicting LLR |η_N| < 1.1 × 10⁻⁴ by >60,000σ.',
          'Joint satisfaction of Shapiro, MESSENGER/INPOP, LLR, and solar spin-alignment limits isolates uniquely (γ, β, η_N, α₁, α₂) = (1, 1, 0, 0, 0).'
        ],
        sourceNote: 'Synthesis of Bertotti et al. (2003), Williams et al. (2004), Park et al. (2017), Fienga et al. (2020), and Will (2014).'
      }
    ],
    workedExamples: [
      {
        title: 'Calculation 5.1 · Quantitative PPN Evaluation at γ = 0 vs. γ = 1',
        setup: 'Evaluate deflection, Mercury precession, and η_N at b = R_☉ = 6.957 × 10⁸ m.',
        steps: [
          'Compute base scale θ₀ = 2GM_☉/(R_☉ c²) = 4.243 × 10⁻⁶ rad = 0.8752″.',
          'Scalar model (γ = 0, β = 0): Δθ = 0.875″, Δϖ = 28.65″/cy, η_N = −3.',
          'Exponential scalar (γ = 0, β = 1): Δθ = 0.875″, Δϖ = 14.33″/cy, η_N = +1.',
          'Covariant dual update / GR (γ = 1, β = 1): Δθ = 1.750″, Δϖ = 42.98″/cy, η_N = 0.'
        ],
        resultEquation: {
          label: '(5.2)',
          unicodeHtml: 'n<sub>eff</sub> = 1 / α<sub>upd</sub>² ≈ 1 − 2Φ / c² &nbsp;⟺&nbsp; γ = 1, &nbsp; β = 1, &nbsp; η<sub>N</sub> = 0',
          caption: 'Equivalence condition uniting isotropic Gordon impedance and PPN survival.',
          tier: 'PPN STRESS-TEST & FALSIFICATION',
          plainMeaning: 'Surviving PPN tests forces n_eff = 1/α_upd² rather than 1/α_upd.',
          provenance: 'Derived from Eqs. (A.2), (B.1), and (B.2).'
        },
        takeaway: 'Any observationally viable update-rate formulation must pair temporal slowing with equal isotropic spatial impedance.'
      }
    ],
    paragraphs: [
      'Gravity Probe B (−39.2 mas/yr frame-dragging) and binary pulsars PSR B1913+16 / J0737−3039 further exclude scalar-only models lacking gravitomagnetic vector potentials g₀ᵢ.'
    ]
  },
  {
    letter: 'C',
    title: 'Hayward Regular-Core Horizon Metric, Kretschmann Scalar & Echo Delays',
    tier: 'FRONTIER OBSERVATIONAL PROBE',
    summary:
      'Derives horizon roots r_±, finite analytical Kretschmann invariant K(0) = 24/ℓ₀⁴, Hawking temperature, and tortoise-coordinate echo scaling.',
    equations: [
      {
        label: '(C.1)',
        unicodeHtml: 'K(r) = (f″)² + (4/r²)(f′)² + (4/r⁴)(1 − f)², &nbsp;&nbsp; r<sub>*</sub> = r + r<sub>s</sub> ln(r/r<sub>s</sub> − 1), &nbsp;&nbsp; Δt<sub>echo</sub> ≈ (2r<sub>s</sub>/c) ln(1/λ<sub>port</sub>)',
        caption: 'Static spherical Kretschmann invariant, tortoise coordinate, and logarithmic echo delay.',
        tier: 'FRONTIER OBSERVATIONAL PROBE',
        plainMeaning: 'Evaluating K(r) on f(r) = 1 − r_s r²/(r³ + r_s ℓ₀²) yields K(0) = 24/ℓ₀⁴ < ∞.',
        provenance: 'Kretschmann (1917); Hayward (2006); Cardoso & Pani (2019).',
        derivationSteps: [
          'Expand Hayward f(r) = 1 − r²/ℓ₀² + O(r⁵) near r = 0 so f′ = −2r/ℓ₀², f″ = −2/ℓ₀², and (1−f)/r² = 1/ℓ₀².',
          'Sum K(0) = (−2/ℓ₀²)² + 4(−2/ℓ₀²)² + 4(1/ℓ₀²)² = (4 + 16 + 4)/ℓ₀⁴ = 24 / ℓ₀⁴.'
        ]
      }
    ],
    theoremBoxes: [
      {
        kind: 'Proposition',
        number: 'C.1',
        title: 'Horizon Regularity and Regular-Core Thresholds',
        tier: 'FRONTIER OBSERVATIONAL PROBE',
        statement:
          'In vacuum GR, r = r_s is a nonsingular null hypersurface with K(r_s) = 12/r_s⁴, whereas static hard walls at r₀ = r_s(1 + λ_port) trigger divergent Boulware stress ∝ λ_port⁻² unless regularized into a dynamical core f(r) = 1 − r_s r²/(r³ + r_s ℓ₀²) with K(0) = 24/ℓ₀⁴.',
        proofSteps: [
          'Horizon condition f(r) = 0 gives r³ − r_s r² + r_s ℓ₀² = 0, admitting outer r_+ and inner Cauchy r_- horizons for ℓ₀ ≤ (2/(3√3)) r_s.',
          'Surface gravity κ_+ = ½ c² |f′(r_+)| yields Hawking temperature T_H = ℏ κ_+ / (2π c k_B).',
          'For 10 M_☉ (r_s = 29.53 km), T_H = 6.17 × 10⁻⁹ K and cavity round-trip echoes appear at Δt_echo = 0.454 ms (λ_port = 0.1) or 17.8 ms (Planck λ_port).'
        ],
        sourceNote: 'Painlevé (1921); Boulware (1975); Hayward (2006); Cardoso & Pani (2019).'
      }
    ],
    paragraphs: [
      'Inner Cauchy horizons r_- exhibit Poisson–Israel mass inflation under classical perturbations, motivating horizonless or quantum-bounce completions when ℓ₀ approaches Planckian scales.'
    ]
  },
  {
    letter: 'D',
    title: 'Astrophysical Dispersion Kernel and One-Loop Higgs Self-Energy under Lapse Coupling',
    tier: 'FRONTIER OBSERVATIONAL PROBE',
    summary:
      'Documents the flat-ΛCDM Jacob–Piran dispersion integral (Theorem D.1) and the explicit one-loop Higgs mass correction under ADM lapse coupling.',
    equations: [
      {
        label: '(D.1)',
        unicodeHtml: 'K<sub>n</sub>(z) = H<sub>0</sub><sup>−1</sup> ∫<sub>0</sub><sup>z</sup> [(1 + z′)<sup>n</sup> / √(Ω<sub>m</sub>(1+z′)³ + Ω<sub>Λ</sub>)] dz′, &nbsp;&nbsp;&nbsp; Δt<sub>LIV</sub> = K<sub>n</sub>(z) (E / E<sub>QG,n</sub>)<sup>n</sup>',
        caption: 'Cosmological dispersion kernel K_n(z) and arrival-time lag across redshift z.',
        tier: 'FRONTIER OBSERVATIONAL PROBE',
        plainMeaning: 'Simpson integration at z = 0.903 yields K₁ = 4.43 × 10¹⁷ s, excluding linear Planck dispersion against GRB 090510.',
        provenance: 'Jacob & Piran (2008); Planck (2018); Abdo et al. (2009); LHAASO (2024).'
      },
      {
        label: '(D.2)',
        unicodeHtml: 'δm<sub>H</sub>² |<sub>top 1-loop</sub> = (3 y<sub>t</sub>² / 8π²) Λ<sub>UV</sub>² &nbsp;(at ⟨α<sub>upd</sub>⟩ = 1)',
        caption: 'One-loop top-quark quadratic contribution to the Higgs mass-squared in an asymptotically flat lapse background.',
        tier: 'FRONTIER OBSERVATIONAL PROBE',
        plainMeaning: 'A local lapse α_upd with vacuum value 1 preserves Minkowski loop scaling and does not eliminate ultraviolet Higgs fine-tuning.',
        provenance: 'Standard perturbative renormalization (Buttazzo et al. 2013); evaluated at y_t = 0.992, Λ_UV = 10¹⁰ GeV.'
      }
    ],
    theoremBoxes: [
      {
        kind: 'Theorem',
        number: 'D.1',
        title: 'Exclusion of First-Order Discrete Clock Lattices',
        tier: 'FRONTIER OBSERVATIONAL PROBE',
        statement:
          'Any fixed-frame update lattice inducing n = 1 photon dispersion at E_QG,1 ≤ E_Pl is excluded by Fermi-LAT GRB 090510, LHAASO GRB 221009A, and Crab Nebula synchrotron bounds.',
        proofSteps: [
          'For GRB 090510 (E = 31 GeV, z = 0.903), K₁(0.903)(31 / 1.221×10¹⁹) = 1.13 s > 0.829 s observed, enforcing E_QG,1 > 7.6 E_Pl.',
          'Crab 100 TeV synchrotron electrons suppress superluminal vacuum Cherenkov emission below ~10⁶ E_Pl.',
          'Only covariant QFI propagation (Δt_LIV = 0) or quadratic n ≥ 2 suppression (18 TeV lag < 10⁻¹³ s) survives.'
        ],
        sourceNote: 'Abdo et al. (2009); LHAASO Collaboration (2024); Pierre Auger Collaboration (2023).'
      }
    ],
    paragraphs: [
      'Evaluating Equation (D.2) at Λ_UV = 10¹⁰ GeV produces δm_H² ≈ 3.7 × 10¹⁸ GeV² (tuning ratio ~2.4 × 10¹⁴ relative to m_H²), demonstrating quantitatively that naturalness relief requires nonlocal propagator suppression rather than lapse reparametrization.'
    ]
  },
  {
    letter: 'E',
    title: 'Conventionalism, Categorical Equivalence, and Empirical Breaking',
    tier: 'EPISTEMOLOGY & PHILOSOPHY OF SCIENCE',
    summary:
      'Formalizes Proposition E.1 separating Poincaré conventionalism, categorical model equivalence, and dynamical falsifiability.',
    equations: [],
    theoremBoxes: [
      {
        kind: 'Proposition',
        number: 'E.1',
        title: 'Boundary Between Chart Equivalence and Physical Rivalry',
        tier: 'EPISTEMOLOGY & PHILOSOPHY OF SCIENCE',
        statement:
          'Transitioning between Schwarzschild geometry (Eq. 2.1) and isotropic optical-update formulations (Eqs. A.1–A.2) preserves the category of exterior vacuum models and all measurable invariants (τ, Δθ, Δt_Shapiro, Δϖ, K), whereas enforcing γ = 0 or a finite horizon scale ℓ₀ > 0 alters invariant predictions.',
        proofSteps: [
          'Standard Schwarzschild and isotropic optical-Gordon coordinates are related by an analytic diffeomorphism r(r̄), preserving categorical equivalence (Halvorson 2012; Weatherall 2016).',
          'Restricting space to flat Euclidean slices (γ = 0) alters observables by 50% (No-Go Result B.1), breaking equivalence and failing empirical symmetry.',
          'Introducing a regular capacity cutoff ℓ₀ alters interior curvature K(0) = 24/ℓ₀⁴ and QNM boundary conditions, defining a falsifiable empirical departure from classical GR.'
        ],
        sourceNote: 'Poincaré (1902); Reichenbach (1928/1958); Duhem (1906); Worrall (1989); Ladyman (1998); Brown (2005); Halvorson (2012); Weatherall (2016).'
      }
    ],
    paragraphs: [
      'Proposition E.1 resolves traditional conventionalist debates by identifying invariant relational causal structures—rather than pictorial coordinate charts—as the physical referent defended by ontic structural realism.'
    ]
  },
  {
    letter: 'F',
    title: 'Reproducibility and Numerical Verification Protocol',
    tier: 'ESTABLISHED EMPIRICAL FACT',
    summary:
      'Documents all CODATA 2022 / IAU 2015 nominal inputs, closed-form algorithms, and deterministic verification checkpoints implemented in src/physics/clockSpeedPaper.ts.',
    equations: [],
    reproducibilityLedger: [
      {
        checkpoint: '3,000 m Clock Lead (Geoid vs. Spherical)',
        formula: 'Δτ = (g₀Δh/c²)×86,400 vs. exact Δ(√(1−r_s/r))',
        referenceConstants: 'c=299,792,458 m/s; g₀=9.80665 m/s²; GM_⊕=3.986004×10¹⁴',
        computedOutput: '28.28 ns/day (10.33 μs/yr) vs. 28.31 ns/day'
      },
      {
        checkpoint: 'Geodesic Surface Acceleration',
        formula: 'a = −c² dα_upd/dr = −GM_⊕/R_⊕²',
        referenceConstants: 'M_⊕=5.9722×10²⁴ kg; R_⊕=6.371×10⁶ m',
        computedOutput: 'r_s/R_⊕ = 1.392×10⁻⁹; a = 9.82 m/s²'
      },
      {
        checkpoint: 'GPS Net Offset & Eccentricity Swing',
        formula: 'Δf/f₀ = ΔΦ/c² − v²/(2c²); Δt_ecc = 2e√(GM_⊕ a)/c²',
        referenceConstants: 'a=26,560 km; v=3,874 m/s; e=0.01',
        computedOutput: '+45.8 − 7.2 = +38.6 μs/day (11.57 km/d; ±22.8 ns)'
      },
      {
        checkpoint: 'RK4 Null Deflection & ADM G^r_r Residual',
        formula: 'RK4 (du/dφ)²; G^r_r = r⁻²(f^γ − 1) + f^(γ−1)/r³',
        referenceConstants: 'b = R_☉ = 6.957×10⁸ m; r = 3 r_s',
        computedOutput: '0.8756″ (γ=0, G^r_r≠0) vs. 1.7512″ (γ=1, G^r_r=0)'
      },
      {
        checkpoint: 'Mercury Precession, Nordtvedt η_N & PSR B1913+16',
        formula: 'Δϖ=[(2+2γ−β)/3]·42.98″; η_N=4β−γ−3; Peters-Mathews dP/dt',
        referenceConstants: 'a_Merc=0.3871 AU; PSR m₁=1.438, m₂=1.390 M_☉, e=0.6171',
        computedOutput: '42.98″/cy; dP/dt=−2.4022×10⁻¹² s/s; dω/dt=4.2263°/yr'
      },
      {
        checkpoint: 'GP-B, Pulsars, White Dwarfs & S2',
        formula: 'Geodetic (1+2γ)/3; z_WD = GM/(Rc); z_S2 ≈ r_s/(2r_p)',
        referenceConstants: 'Sirius B: 1.018 M_☉, 0.008098 R_☉; S2: r_p=1,400 r_s',
        computedOutput: 'GP-B 6606.1 mas/yr; Sirius B 80.6 km/s; S2 3.57×10⁻⁴'
      },
      {
        checkpoint: 'Hayward Core, Photon Sphere, QNM & Love Number',
        formula: 'r³−r_s r²+r_s ℓ₀²=0; 2f(r_ph)−r_ph f′=0; K(0)=24/ℓ₀⁴',
        referenceConstants: 'M=10 M_☉ (r_s=29.53 km); ℓ₀=0.05 r_s',
        computedOutput: 'r_+=0.99749 r_s; r_ph=1.4978 r_s; ω_R M=0.3852; k₂=0.0417'
      },
      {
        checkpoint: 'Lindblad Clock Visibility & QFI (⁸⁷Sr)',
        formula: 'V_unitary = |cos(½ ω_Sr Δτ)|; Γ_dec = ½ Δω² τ_grain',
        referenceConstants: 'Δh=1 m; t=1 s; τ_grain=t_Pl=5.391×10⁻⁴⁴ s',
        computedOutput: 'Δφ=0.2943 rad; V=0.9892; Γ_dec=2.33×10⁻⁴⁵ s⁻¹'
      },
      {
        checkpoint: 'GRB Dispersion Kernel & 1-Loop Higgs Check',
        formula: 'Simpson K_n(z); δm_H² = 3 y_t² Λ²/(8π²)',
        referenceConstants: 'H₀=67.4, Ω_m=0.315, Ω_Λ=0.685; y_t=0.992',
        computedOutput: 'K₁(0.903)=4.43×10¹⁷ s (1.13 s); δm_H²(10¹⁰ GeV)=3.7×10¹⁸ GeV²'
      }
    ],
    paragraphs: [
      'Every numerical value in this article is reproduced deterministically by executing npx tsx --test src/physics/clockSpeedPaper.test.ts using standard double-precision IEEE-754 arithmetic.'
    ]
  }
];

export const CLOCK_SPEED_REFERENCES: ClockPaperReference[] = [
  { id: 1, citation: 'Einstein, A. (1911). Über den Einfluß der Schwerkraft auf die Ausbreitung des Lichtes. Annalen der Physik, 35, 898–908.' },
  { id: 2, citation: 'Einstein, A. (1915). Die Feldgleichungen der Gravitation. Sitzungsber. Preuss. Akad. Wiss., 844–847.' },
  { id: 3, citation: 'Einstein, A. (1921). Geometrie und Erfahrung. Sitzungsber. Preuss. Akad. Wiss., 123–130.' },
  { id: 4, citation: 'Schwarzschild, K. (1916). Über das Gravitationsfeld eines Massenpunktes nach der Einsteinschen Theorie. Sitzungsber. Preuss. Akad. Wiss., 189–196.' },
  { id: 5, citation: 'Dyson, F. W., Eddington, A. S., & Davidson, C. (1920). A determination of the deflection of light by the Sun’s gravitational field. Phil. Trans. R. Soc. A, 220, 291–333.' },
  { id: 6, citation: 'Gordon, W. (1923). Zur Lichtfortpflanzung nach der Relativitätstheorie. Annalen der Physik, 377(22), 421–456.' },
  { id: 7, citation: 'Pound, R. V., & Rebka, G. A. Jr. (1960). Apparent weight of photons. Phys. Rev. Lett., 4(7), 337–341.' },
  { id: 8, citation: 'Pound, R. V., & Snider, J. L. (1965). Effect of gravity on gamma radiation. Phys. Rev., 140(3B), B788–B803.' },
  { id: 9, citation: 'Shapiro, I. I. (1964). Fourth test of general relativity. Phys. Rev. Lett., 13(26), 789–791.' },
  { id: 10, citation: 'Hafele, J. C., & Keating, R. E. (1972). Around-the-world atomic clocks: predicted and observed relativistic time gains. Science, 177(4044), 166–170.' },
  { id: 11, citation: 'Vessot, R. F. C., et al. (1980). Test of relativistic gravitation with a space-borne hydrogen maser. Phys. Rev. Lett., 45(26), 2081–2084.' },
  { id: 12, citation: 'Ashby, N. (2003). Relativity in the Global Positioning System. Living Rev. Relativ., 6(1), 1.' },
  { id: 13, citation: 'Bertotti, B., Iess, L., & Tortora, P. (2003). A test of general relativity using radio links with the Cassini spacecraft. Nature, 425, 374–376.' },
  { id: 14, citation: 'Williams, J. G., Turyshev, S. G., & Boggs, D. H. (2004). Progress in lunar laser ranging tests of relativistic gravity. Phys. Rev. Lett., 93, 261101.' },
  { id: 15, citation: 'Park, R. S., et al. (2017). Precession of Mercury’s perihelion from ranging to the MESSENGER spacecraft. Astron. J., 153(3), 121.' },
  { id: 16, citation: 'Fienga, A., et al. (2020). INPOP19a planetary ephemerides and relativistic bounds. Notes Scientifiques et Techniques de l’IMCCE.' },
  { id: 17, citation: 'Will, C. M. (2014). The confrontation between general relativity and experiment. Living Rev. Relativ., 17(1), 4.' },
  { id: 18, citation: 'Everitt, C. W. F., et al. (2011). Gravity Probe B: final results of a space experiment to test general relativity. Phys. Rev. Lett., 106, 221101.' },
  { id: 19, citation: 'Weisberg, J. M., & Taylor, J. H. (2010); Kramer, M., et al. (2021). Relativistic binary pulsar PSR B1913+16 and double pulsar PSR J0737−3039 tests. ApJ, 722, 1030 & Phys. Rev. X, 11, 041050.' },
  { id: 20, citation: 'Touboul, P., et al. (MICROSCOPE Collaboration) (2022). MICROSCOPE mission: final results of the test of the equivalence principle. Phys. Rev. Lett., 129, 121102.' },
  { id: 21, citation: 'Chou, C. W., Hume, D. B., Rosenband, T., & Wineland, D. J. (2010). Optical clocks and relativity. Science, 329(5999), 1630–1633.' },
  { id: 22, citation: 'Delva, P., et al. (2018). Gravitational redshift test using eccentric Galileo satellites. Phys. Rev. Lett., 121(23), 231101.' },
  { id: 23, citation: 'Takamoto, M., Ushijima, I., Ohmae, N., Yahagi, T., Kokado, K., Shinkai, H., & Katori, H. (2020). Test of general relativity by a pair of transportable optical lattice clocks. Nat. Photonics, 14, 411–415.' },
  { id: 24, citation: 'Bothwell, T., Kennedy, C. J., Aeppli, A., Kedar, D., Robinson, J. M., Oelker, E., Staron, A., & Ye, J. (2022). Resolving the gravitational redshift across a millimetre-scale atomic sample. Nature, 602, 420–424.' },
  { id: 25, citation: 'Hayward, S. A. (2006). Formation and evaporation of nonsingular black holes. Phys. Rev. Lett., 96, 031103.' },
  { id: 26, citation: 'Event Horizon Telescope Collaboration (2019 & 2022). Shadows of M87* and Sagittarius A*. ApJL, 875, L1 & 930, L12.' },
  { id: 27, citation: 'GRAVITY Collaboration (2020). Detection of the Schwarzschild precession in the orbit of the star S2 near the Galactic centre massive black hole. Astron. Astrophys., 636, L5.' },
  { id: 28, citation: 'Cardoso, V., & Pani, P. (2019). Testing the nature of dark compact objects: a status report. Living Rev. Relativ., 22(1), 4.' },
  { id: 29, citation: 'Abdo, A. A., et al. (2009); LHAASO Collaboration (2024). GRB 090510 & GRB 221009A Lorentz invariance violation bounds. Nature, 462, 331 & Phys. Rev. Lett., 133, 071501.' },
  { id: 30, citation: 'Jacob, U., & Piran, T. (2008). Lorentz-violation-induced arrival delays of cosmological particles. JCAP, 01, 031.' },
  { id: 31, citation: 'Zych, M., Costa, F., Pikovski, I., & Brukner, Č. (2011). Quantum interferometric visibility as a witness of general relativistic proper time. Nat. Commun., 2, 505.' },
  { id: 32, citation: 'Buttazzo, D., Degrassi, G., Giardino, P. P., Giudice, G. F., Sala, F., Salvio, A., & Strumia, A. (2013). Investigating the near-criticality of the Higgs boson. JHEP, 12, 089.' },
  { id: 33, citation: 'Poincaré, H. (1902). La Science et l’Hypothèse (Science and Hypothesis). Flammarion; Reichenbach, H. (1928/1958). Philosophy of Space and Time. Dover.' },
  { id: 34, citation: 'Duhem, P. (1906/1954). The Aim and Structure of Physical Theory. Princeton Univ. Press; Quine, W. V. O. (1951). Two dogmas of empiricism. Philos. Rev., 60, 20–43.' },
  { id: 35, citation: 'Worrall, J. (1989). Structural realism: the best of both worlds? Dialectica, 43, 99–124; Newman, M. H. A. (1928). Mr. Russell’s "Causal Theory of Perception". Mind, 37, 137–148.' },
  { id: 36, citation: 'Ladyman, J. (1998). What is structural realism? Stud. Hist. Philos. Sci., 29, 409–424; French, S. (2014). The Structure of the World. Oxford Univ. Press.' },
  { id: 37, citation: 'Brown, H. R. (2005). Physical Relativity: Space-Time Structure from a Dynamical Perspective. Oxford Univ. Press; Pooley, O. (2013). Substantivalist and relationalist approaches to spacetime. Oxford Handbook of Philosophy of Physics.' },
  { id: 38, citation: 'Earman, J., & Norton, J. D. (1987). What price spacetime substantivalism? The Hole Story. Brit. J. Philos. Sci., 38, 515–525; Halvorson, H. (2012) & Weatherall, J. O. (2016), Theoretical Equivalence.' },
  { id: 39, citation: 'Bulaqueña, M. D., Tassan, J.-C., Lauret, W. J. S., Chatterjee, R., & Goldberger, W. (2026a, 2026b). Information-Geometric Resonant Time (IGRT): Principal Fiber Bundle Foundations & Quantum Fisher Clocks (IGRT-2026-H11 & IGRT-2026-H13).' }
];

export function buildClockSpeedMarkdown(): string {
  const lines: string[] = [];
  lines.push(`# ${CLOCK_SPEED_META.title}`);
  lines.push(`### ${CLOCK_SPEED_META.subtitle}`);
  lines.push(`*${CLOCK_SPEED_META.paperNumber} · ${CLOCK_SPEED_META.targetVenues} · ${CLOCK_SPEED_META.date}*`);
  lines.push('');
  lines.push('**Authors:** ' + CLOCK_SPEED_META.authors.map((a) => `${a.name} (${a.affiliation})`).join('; '));
  lines.push('');
  lines.push('## Abstract');
  CLOCK_SPEED_ABSTRACT.forEach((p) => lines.push(p + '\n'));

  for (const ch of CLOCK_SPEED_CHAPTERS) {
    lines.push(`## Chapter ${ch.number}: ${ch.title}`);
    lines.push(`*${ch.leadSummary}*\n`);
    lines.push('### Introduction');
    ch.chapterIntro.forEach((p) => lines.push(p + '\n'));
    for (const sub of ch.subsections) {
      lines.push(`### ${sub.number} ${sub.title}`);
      sub.paragraphs.forEach((p) => lines.push(p + '\n'));
      if (sub.equation) {
        lines.push(`> **Equation ${sub.equation.label}:** \`${sub.equation.unicodeHtml.replace(/<[^>]+>/g, '')}\``);
        lines.push(`> *${sub.equation.caption}*\n`);
      }
      if (sub.theoremBox) {
        lines.push(`> **${sub.theoremBox.kind} ${sub.theoremBox.number} (${sub.theoremBox.title}):** ${sub.theoremBox.statement}\n`);
      }
      if (sub.workedExample) {
        lines.push(`> **${sub.workedExample.title}:** ${sub.workedExample.setup}`);
        sub.workedExample.steps.forEach((st, i) => lines.push(`> ${i + 1}. ${st}`));
        lines.push(`> *Takeaway:* ${sub.workedExample.takeaway}\n`);
      }
    }
    if (ch.number === 4) {
      lines.push('### Table 4.1 · Weak-Field Chronometric Benchmarks');
      lines.push('| Experiment | Scale | Observed | GR | Update Rate | Discrimination |');
      lines.push('|---|---|---|---|---|---|');
      TABLE_4_1_EVERYDAY_TESTS.forEach((r) =>
        lines.push(`| ${r.experiment} | ${r.heightOrOrbit} | ${r.observedResult} | ${r.curvedSpacetimePred} | ${r.updateRatePred} | ${r.discriminatingPower} |`)
      );
      lines.push('');
    }
    if (ch.number === 5) {
      lines.push('### Table 5.1 · Solar-System and Pulsar PPN Tests');
      lines.push('| Test | Measured | Pure Scalar (γ=0) | GR (γ=1) | Dual Update (γ=1) | Verdict |');
      lines.push('|---|---|---|---|---|---|');
      TABLE_5_1_STRESS_TESTS.forEach((r) =>
        lines.push(`| ${r.testName} | ${r.measuredValue} | ${r.pureClockSlowingGamma0} | ${r.curvedSpaceTimeGR} | ${r.dualUpdateRateGamma1} | ${r.verdictOnPureScalar} |`)
      );
      lines.push('');
      lines.push('### Table 5.2 · Complete PPN Parameter Bounds (Will 2014)');
      lines.push('| Parameter | Physical Meaning | Will (2014) Bound | LUH-Scalar | Dual Update / GR | Primary Experiment |');
      lines.push('|---|---|---|---|---|---|');
      TABLE_5_2_PPN_BOUNDS.forEach((r) =>
        lines.push(`| ${r.parameter} | ${r.physicalMeaning} | ${r.will2014Bound} | ${r.luhScalarValue} | ${r.dualUpdateGRValue} | ${r.primaryExperiment} |`)
      );
      lines.push('');
    }
    if (ch.number === 6) {
      lines.push('### Table 6.1 · Strong-Field Black Hole Observables');
      lines.push('| Observable | Facility | Standard GR | Literal Update Halt | Covariant Capacity |');
      lines.push('|---|---|---|---|---|');
      TABLE_6_1_BLACK_HOLES.forEach((r) =>
        lines.push(`| ${r.observable} | ${r.instrumentAndTarget} | ${r.standardGR} | ${r.literalUpdateHaltModel} | ${r.covariantUpdateCapacityIGRT} |`)
      );
      lines.push('');
    }
    if (ch.number === 8) {
      lines.push('### Table 8.1 · Summary Prediction Matrix');
      lines.push('| Phenomenon | Curved GR | Pure Scalar | Dual Update / IGRT | Outcome |');
      lines.push('|---|---|---|---|---|');
      TABLE_8_1_PREDICTIONS_MATRIX.forEach((r) =>
        lines.push(`| ${r.phenomenon} | ${r.curvedSpacetimeGR} | ${r.pureClockSlowing} | ${r.fullDualUpdateRateIGRT} | ${r.empiricalWinner} |`)
      );
      lines.push('');
      lines.push('### Table 8.2 · 2026–2035 Experimental Roadmap');
      lines.push('| Facility | Window | Observable | Precision | Discriminating Reach |');
      lines.push('|---|---|---|---|---|');
      TABLE_8_2_NEXT_GEN_ROADMAP.forEach((r) =>
        lines.push(`| ${r.facility} | ${r.timeframe} | ${r.observable} | ${r.targetPrecision} | ${r.discriminatingReach} |`)
      );
      lines.push('');
    }
  }

  lines.push('## Glossary');
  CLOCK_SPEED_GLOSSARY.forEach((g) => lines.push(`- **${g.term}**: ${g.definition}`));
  lines.push('\n## Appendices');
  CLOCK_SPEED_APPENDICES.forEach((app) => {
    lines.push(`### Appendix ${app.letter}: ${app.title}`);
    lines.push(`*${app.summary}*\n`);
    app.equations.forEach((eq) => {
      lines.push(`> **Equation ${eq.label}:** \`${eq.unicodeHtml.replace(/<[^>]+>/g, '')}\``);
      lines.push(`> *${eq.caption}*`);
      if (eq.provenance) lines.push(`> **Provenance:** ${eq.provenance}`);
      if (eq.derivationSteps?.length) {
        eq.derivationSteps.forEach((s, i) => lines.push(`> ${i + 1}. ${s}`));
      }
      lines.push('');
    });
    if (app.theoremBoxes?.length) {
      app.theoremBoxes.forEach((tb) => {
        lines.push(`> **${tb.kind} ${tb.number} (${tb.title}):** ${tb.statement}`);
        tb.proofSteps.forEach((s, i) => lines.push(`> ${i + 1}. ${s}`));
        lines.push(`> *Provenance:* ${tb.sourceNote}\n`);
      });
    }
    if (app.workedExamples?.length) {
      app.workedExamples.forEach((wx) => {
        lines.push(`> **${wx.title}:** ${wx.setup}`);
        wx.steps.forEach((s, i) => lines.push(`> ${i + 1}. ${s}`));
        lines.push(`> **Result ${wx.resultEquation.label}:** \`${wx.resultEquation.unicodeHtml.replace(/<[^>]+>/g, '')}\``);
        lines.push(`> *Takeaway:* ${wx.takeaway}\n`);
      });
    }
    if (app.reproducibilityLedger?.length) {
      lines.push('| Checkpoint | Formula | Reference Constants | Computed Output |');
      lines.push('|---|---|---|---|');
      app.reproducibilityLedger.forEach((row) =>
        lines.push(`| ${row.checkpoint} | ${row.formula} | ${row.referenceConstants} | ${row.computedOutput} |`)
      );
      lines.push('');
    }
    app.paragraphs.forEach((p) => lines.push(p + '\n'));
  });

  lines.push('## References');
  CLOCK_SPEED_REFERENCES.forEach((r) => lines.push(`${r.id}. ${r.citation}`));
  return lines.join('\n');
}
