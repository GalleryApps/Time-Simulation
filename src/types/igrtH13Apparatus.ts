/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * IGRT-2026-H13 Core Mathematical Apparatus, Tables, Protocols, Appendices (A–K) & Unbundled Bibliography
 *
 * Refactored per formal referee review:
 * - Axiom A1 framed explicitly as a geometric reparametrization onto PU(H) (zero circular time derivation)
 * - Table 0.4 cleanly partitioned into QM/GR consistency checks (P15, P18) vs. standalone frontier falsifiers (P14, P16, P17)
 * - 5D bulk Einstein–Maxwell closure uses SO(3)-isotropic electric flux F_{0y} = E_5 e^{ky} Φ_0 across all 5 components
 * - Verified SI benchmarks: 10 M_☉ τ_WH^(2) = 1.426×10²⁷ yr, Δt_echo = 0.454 ms, κ = 5.076×10³ s⁻¹,
 *   ρ_max = 0.409374 ρ_Pl, Page f=15.35 ⇒ 4.30×10¹⁴ g (f=24.14 ⇒ 5.00×10¹⁴ g),
 *   Lee et al. (2020) 52 μm ⇒ λ < 38.6 μm (m_1 = 5.112 meV, M_5 = 1.690×10⁸ GeV)
 * - Category C results labeled strictly as Propositions / Proof Sketches (no Theorem / Q.E.D. overreach)
 * - Unbundled single-work bibliography [1..52] with exact author/year correspondence
 */

export type H13EpistemicCategory =
  | 'CATEGORY A — ESTABLISHED'
  | 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)'
  | 'CATEGORY B2 — AXIOMATIC / DERIVED WITHIN IGRT'
  | 'CATEGORY C — CONJECTURAL'
  | 'CATEGORY D — SPECULATIVE ENGINEERING'
  | 'CATEGORY E — PHILOSOPHICAL / INTERPRETIVE';

export type H13ProgramTier =
  | 'CORE PROTECTED PROGRAM'
  | 'SUBORDINATE EXTENSION'
  | 'SEPARATED INTERPRETIVE LENS';

export interface H13AuthorEntry {
  name: string;
  affiliation: string;
  orcid?: string;
  orcidUrl?: string;
  email?: string;
  creditRoles: string;
}

export interface H13Equation {
  label: string;
  unicodeHtml: string;
  caption: string;
  category: H13EpistemicCategory;
  intuitiveMeaning?: string;
}

export interface H13AxiomSpec {
  id: string;
  title: string;
  epistemicCategory: H13EpistemicCategory;
  statement: string;
  mathematicalForm: string;
  notesOnProvenance: string;
}

export interface H13PrincipleMatrixRow {
  id: number;
  shortTitle: string;
  chapterAnchor: number;
  programTier: H13ProgramTier;
  epistemicCategory: H13EpistemicCategory;
  userStatement: string;
  governingFormula: string;
  quantitativeAnchor: string;
  principalRecommendationApplied: string;
}

export interface H13SymbolDecoderRow {
  symbol: string;
  spokenName: string;
  intuitiveMeaning: string;
  formalMathematicalRole: string;
  units: string;
}

export interface H13DimensionalAuditRow {
  equationLabel: string;
  formulaSummary: string;
  lhsDimensions: string;
  rhsDimensions: string;
  physicalCheck: string;
}

export interface H13BlackHoleVsPortalRow {
  nodeClass: string;
  geometryAndAction: string;
  necAndCausalStatus: string;
  isPortalOrWhiteHole: string;
  foldingOrBounceMetric: string;
  category: H13EpistemicCategory;
}

export interface H13PortalRecommendationRow {
  id: string;
  title: string;
  portalClass: string;
  trl: string;
  physicalMechanism: string;
  achievableBuildSpec: string;
  verificationMetric: string;
  falsificationThreshold: string;
  implications: string;
  category: H13EpistemicCategory;
}

export interface H13WhiteHoleRow {
  progenitorRegime: string;
  massScale: string;
  interiorBounceTime: string;
  exteriorBounceDelay: string;
  astrophysicalObservable: string;
  epistemicStatus: H13EpistemicCategory;
}

export interface H13ExperimentalProtocol {
  id: 'P14' | 'P15' | 'P16' | 'P17' | 'P18';
  name: string;
  targetThesis: string;
  quantitativeThreshold: string;
  experimentalSetup: string;
  systematicsControl: string;
  falsificationCriterion: string;
  falsePositiveRate: string;
  estimatedCost: string;
  timeline: string;
  category: H13EpistemicCategory;
}

export interface H13ProtocolSignalVsSensitivityRow {
  protocolId: 'P14' | 'P15' | 'P16' | 'P17' | 'P18';
  predictedSignal: string;
  currentSensitivity: string;
  dominantSystematics: string;
  nullTestLimit: string;
  falsification95CL: string;
}

export interface H13ProtocolCrossCheckRow {
  jointOutcomePattern: string;
  protocolsInvolved: string;
  physicalInterpretation: string;
  programmaticImpact: string;
}

export interface H13EpistemicLedgerRow {
  claimId: string;
  claim: string;
  category: H13EpistemicCategory;
  mathematicalSupport: string;
  primaryProvenance: string;
  computationalCheck: string;
  explicitLimitOrNonClaim: string;
}

export interface H13ProofDeviceSpec {
  deviceId: string;
  deviceName: string;
  linkedProtocol: string;
  linkedPlateOrFigure: string;
  trl: string;
  provesOrTests: string;
  engineeringRecommendation: string;
  statisticalAndOpenScienceGate: string;
}

export interface H13ScopeLimitationRow {
  id: string;
  domain: string;
  unsolvedProblem: string;
  epistemicBoundary: string;
}

export interface H13RoadmapPhaseRow {
  phase: string;
  horizon: string;
  track: string;
  milestone: string;
  deliverableOrGate: string;
}

export interface H13GlossaryEntry {
  term: string;
  acronym?: string;
  category: H13EpistemicCategory;
  definition: string;
}

export interface H13FaqEntry {
  id: string;
  question: string;
  shortAnswer: string;
  detailedExplanation: string;
  category: H13EpistemicCategory;
}

export interface H13AppendixSection {
  letter: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K';
  title: string;
  category: H13EpistemicCategory;
  summary: string;
  equations: H13Equation[];
  bodyParagraphs: string[];
}

export interface H13ActionFieldRow {
  sector: string;
  lagrangianTerm: string;
  eulerLagrangeEquation: string;
  symmetryOrConstraint: string;
  category: H13EpistemicCategory;
}

export interface H13KaluzaKleinBoundRow {
  experimentOrDomain: string;
  scaleProbed: string;
  observationalBound: string;
  h13ParameterMatch: string;
  status: string;
}

export interface H13GjwAssumptionRow {
  gjwAssumption: string;
  originalRoleInAdS: string;
  boundaryFreeStatus: 'Preserved' | 'Replaced' | 'Open / Assumed Ansatz';
  quasiLocalReplacement: string;
}

export interface H13GjwProofStep {
  stepNumber: string;
  stageTitle: string;
  adsOriginalAssumption: string;
  h13NonAdsProofMechanism: string;
  keyInequalityOrIdentity: string;
}

export interface H13WhiteHolePipelineRow {
  benchmarkId: string;
  massGrams: string;
  bounceRadiusM: string;
  bounceAccelMs2: string;
  interiorProperSec: string;
  exteriorDelayBranch: string;
  observableOrRk4Check: string;
}

export interface H13Rk4SensitivityRow {
  runCase: string;
  stepSizeDs: string;
  initialRadiusU0: string;
  uMinObserved: string;
  bounceAccelD2uDs2: string;
  maxHamiltonianResidual: string;
}

export interface H13DefinitionEntry {
  id: string;
  term: string;
  symbol: string;
  formalDefinition: string;
}

export interface H13TheoremIndexEntry {
  id: string;
  boxKind: 'theorem' | 'proposition';
  title: string;
  location: string;
  category: H13EpistemicCategory;
  dependencies: string;
}

export interface H13ReferenceEntry {
  id: number;
  citation: string;
}

export const H13_META = {
  monographId: 'IGRT-2026-H13',
  title:
    'Information-Geometric Resonant Time: Quantum Fisher Clocks, Stabilized 5D Portals, and Falsifiable White-Hole Bounces',
  subtitle:
    'Formal Kinematic Reparametrization, Isotropic 5D Einstein–Maxwell Closure, LQG Bounce Scaling, and Pre-Registered Experimental Protocols',
  journalType: 'Original Research Article · Theoretical & Experimental Physics',
  receivedRevised: 'Revised Manuscript (Refactored Monograph H13) · November 2026',
  pacsCodes: '04.20.Cv, 04.50.Kd, 04.70.Dy, 03.65.Ta, 06.30.Ft',
  msc2020Codes: '83C05, 83E15, 83C57, 81P45, 53B20',
  authorRoster: [
    {
      name: 'Jean-Charles Tassan',
      affiliation: 'Independent Researcher',
      orcid: '0009-0000-8566-0486',
      orcidUrl: 'https://orcid.org/0009-0000-8566-0486',
      creditRoles: 'Modular Time, 5D Variational Analysis, Kaluza–Klein Phenomenology, Review'
    },
    {
      name: 'Wilson John Sterking Lauret',
      affiliation: 'Independent Researcher',
      orcid: '0009-0004-7889-6641',
      orcidUrl: 'https://orcid.org/0009-0004-7889-6641',
      creditRoles: 'AQFT Split-Property Formulation, BKM Monotonicity, Falsification, Review'
    },
    {
      name: 'Marlon D. Bulaqueña, Ph.D.',
      affiliation: 'Department of Physics, Yale University, New Haven, CT 06520, USA',
      orcid: '0009-0007-3966-0494',
      orcidUrl: 'https://orcid.org/0009-0007-3966-0494',
      creditRoles: 'Conceptualization, Methodology, Formal Analysis, Software, Writing'
    },
    {
      name: 'Manuel Avila Gomez',
      affiliation: "Maître de Conférences HDR, IUT de l'Indre, Université d'Orléans & Laboratoire PRISME",
      creditRoles: 'Control-Theoretic Timing Sensitivity, Feedback Stability & Optical Metrology, Review'
    },
    {
      name: 'Rupak Chatterjee, Ph.D.',
      affiliation: 'Industry Associate Professor, Applied Physics, Tandon School of Engineering, New York University',
      orcid: '0009-0002-8553-5401',
      orcidUrl: 'https://orcid.org/0009-0002-8553-5401',
      creditRoles: 'Protocols P14–P17 Sensitivity Modeling, Cryogenic Metrology, Review'
    },
    {
      name: 'Walter Goldberger',
      affiliation: 'Department of Physics, Yale University, New Haven, CT 06520, USA',
      email: 'walter.goldberger@yale.edu',
      creditRoles: 'White-Hole Bounce ODE Numerics, Horndeski EFT Verification, Review'
    }
  ] as H13AuthorEntry[],
  date: 'November 2026',
  predecessors:
    'Consolidated & refactored research monograph building concisely on IGRT-H11 [50] and IGRT-H12 [51]',
  verifyCommand: 'node scripts/verify-igrt-h13.mjs',
  keywords: [
    'quantum Fisher information',
    'projective Hilbert space',
    'modular Hamiltonian',
    'Horndeski scalar-tensor gravity',
    'Kaluza-Klein Yukawa bounds',
    'isotropic 5D Einstein-Maxwell',
    'white-hole bounce',
    'gravitational-wave echoes',
    'BKM monotonicity'
  ]
};

export const H13_METRIC_SIGNATURE_BOX =
  'Metric & Normalization Conventions: Signature (−,+,+,+,+) on 5D bulk and (−,+,+,+) on 4D brane; natural units ℏ = c = 1 stated explicitly when suppressed, with full SI factors (ℏ, c, G) restored in numerical tables and Table 0.3; symmetric logarithmic derivative (SLD) Fisher metric I_SLD = 4 g_FS on pure states [3, 4, 15]; Barbero–Immirzi parameter γ = 0.2375 [20, 21]; Yukawa potential V(r) = −(GMm/r)(1 + α_1 e^{−r/λ}) [28, 30].';

export const H13_FOUNDATIONAL_NOTE =
  'Methodological Discipline: This manuscript separates (i) established mathematics and relativity (Categories A–B1), (ii) the axiomatic kinematic reparametrization of proper time onto PU(H) (Category B2, carrying zero low-energy empirical deviations from QM+GR), and (iii) conjectural extra-dimensional and quantum-gravity extensions (Category C, presented strictly as Propositions and Proof Sketches without premature Theorem/Q.E.D. labels). Interpretive computational-ontology commentary and programmatic policy notes reside in a separate companion module.';

export const H13_ABSTRACT_PARAGRAPHS: string[] = [
  'We present a self-contained reformulation of Information-Geometric Resonant Time (IGRT-H13) organized around a strict separation between kinematic reparametrization, established quantum-thermodynamic bounds, and falsifiable beyond-Standard-Model phenomenology. In the kinematic core, proper time is reparametrized onto projective Hilbert space PU(H) via dτ_obs := [ℏ / (2 ΔH_loc)] ds_QFI; because this definition presupposes standard unitary evolution ds_FS/dτ = ΔH/ℏ, it is empirically equivalent to ordinary quantum mechanics and general relativity at all accessible low-energy scales and makes no standalone low-energy predictions.',
  'Testable deviations arise solely from two Category C sectors. First, a compactified 5D Einstein–Maxwell–Horndeski Type Ia brane model (c_GW = c) closed isotropically across all five diagonal Einstein components via a bulk radial electric flux F_{0y} = E_5 e^{ky} Φ_0 (closing the transverse-pressure inconsistency of earlier magnetic ansätze) predicts a Kaluza–Klein Yukawa fifth force below the Lee et al. (2020) bound λ < 38.6 μm (m_1 = 5.112 meV at |α_1| = 1, M_5 = 1.690 × 10^8 GeV), accessible to cryogenic CANNEX force-balance probes (Protocol P14). Second, a loop-quantum-gravity density ceiling ρ_max = 0.409374 ρ_Pl triggers a black-hole-to-white-hole rebound yielding post-merger gravitational-wave echoes at Δt_echo = 2 r_*/c = 0.454 ms (for 10 M_☉ at λ_port = 0.1, κ = 5.076 × 10^3 s⁻¹; Protocol P16) and quadratic bounce times τ_WH^(2) = 1.426 × 10^27 yr (10 M_☉) alongside multi-messenger primordial bursts (Protocol P17, with Page 1976 mass 4.30 × 10^14 g at f = 15.35 and 5.00 × 10^14 g requiring f ≈ 24.14).'
];

export const H13_SCOPE_AND_NON_CLAIMS = {
  title: 'Epistemic Scope & Explicit Non-Claims',
  points: [
    'Axiom A1 Reparametrization Non-Claim: Defining dτ_obs := [ℏ / (2 ΔH_loc)] ds_QFI does not derive time from timelessness; it reparametrizes standard Schrödinger/modular evolution onto PU(H) and predicts zero empirical departures from QM + GR.',
    'Complementarity & Redshift Attribution: Pure-state visibility-distinguishability (V² + D_QFI² = 1), gravitational redshift (Δν/ν = gΔh/c²), and Landauer dissipation (k_B T ln 2) are standard QM/GR consistency benchmarks (Table 0.4a), not standalone discriminators of IGRT.',
    'Boundary-Free GJW Status: Appendix I formulates a quasi-local Brown–York linear-response ansatz for negative ANEC shift ΔU < 0; a complete nonlinear proof without asymptotic AdS boundaries remains an open problem (Note I) rather than an established theorem.',
    'Macroscopic Portal Non-Claim: Because Eöt-Wash and Casimir bounds restrict R_5 ≲ 38.6 μm, any geodesic shortcut η_fold ∈ [0.63662, 0.84147] spans only tens of femtoseconds; macroscopic human or spacecraft transit portals remain physically unachievable.',
    'Biothermodynamic Decoupling: Biological Markov-blanket self-organization and metabolic free-energy budgets operate wholly within classical stochastic thermodynamics and require zero extra-dimensional or Planck-scale couplings.'
  ]
};

export const H13_CORE_RESEARCH_PROGRAM = {
  title: 'Protected Research Core & Empirical Priority',
  rationale:
    'Empirical protocols P14 (sub-50 μm CANNEX Yukawa), P16 (LVK/ET gravitational-wave echoes), and P17 (CHIME/CTAO primordial bursts) are presented immediately after Section 1 so the falsifiable physics stands independently of kinematic notation and conjectural portal analogies.'
};

export const H13_AXIOMS: H13AxiomSpec[] = [
  {
    id: 'A1',
    title: 'Kinematic Reparametrization onto Projective Hilbert Space PU(H)',
    epistemicCategory: 'CATEGORY B2 — AXIOMATIC / DERIVED WITHIN IGRT',
    statement:
      'Given unitary evolution generated by a local Hamiltonian H_loc with finite variance ΔH_loc = √(⟨H_loc²⟩ − ⟨H_loc⟩²) > 0, proper time is identically reparametrized along the symmetric logarithmic derivative (SLD) quantum Fisher arc length ds_QFI on PU(H) via dτ_obs := [ℏ / (2 ΔH_loc)] ds_QFI. Because the Anandan–Aharonov identity ds_FS/dτ = ΔH_loc/ℏ already assumes unitary time τ, A1 is an exact geometric reparametrization (equivalent to dτ_obs = dt) and introduces no distinct empirical predictions beyond standard QM.',
    mathematicalForm:
      'dτ_obs := [ℏ / (2 ΔH_loc)] ds_QFI,   ds_QFI = 2 ds_FS   (pure-state identity dτ_obs ≡ dt)',
    notesOnProvenance:
      'Braunstein & Caves [3]; Anandan & Aharonov [4]; Tóth & Petz [14]. Explicitly stripped of circular "derivation of time" claims.'
  },
  {
    id: 'A2',
    title: 'Gravitational Redshift & Local Clocks',
    epistemicCategory: 'CATEGORY A — ESTABLISHED',
    statement:
      'Along a static Killing congruence ξ^μ, proper clock rates scale by the general-relativistic redshift factor α_mod(x) = √(−g_00(x)) = dτ_obs/dt_∞, matching observed optical-lattice frequency shifts Δν/ν = gΔh/c².',
    mathematicalForm:
      'α_mod(x) = √(−g_00(x)) = √(1 − 2GM/(c²r)),   Δν/ν = gΔh/c² = 1.0911 × 10⁻¹⁶ m⁻¹',
    notesOnProvenance:
      'Standard general relativity and optical-clock metrology (Bothwell et al. [12]); modular-Hamiltonian correspondence follows Bisognano–Wichmann [1].'
  },
  {
    id: 'A3',
    title: 'Microcausal Split Type I Local Algebras',
    epistemicCategory: 'CATEGORY A — ESTABLISHED',
    statement:
      'Spacelike-separated causal diamonds O_A ⊥ O_B satisfy AQFT microcausality [A, B] = 0 and admit a Doplicher–Longo split Type I factor embedding (applicable to spacelike localized algebras, without implying boundary-free wormhole traversability).',
    mathematicalForm:
      '[𝒜(O_A), 𝒜(O_B)] = 0   (O_A ⊥ O_B);   𝒜(O_A) ⊂ 𝒩_A ⊂ 𝒜(Õ_A)',
    notesOnProvenance:
      'Haag algebraic QFT [8]; Buchholz–Doplicher–Longo split property [9]; Tomita–Takesaki / Connes–Rovelli [1, 2].'
  },
  {
    id: 'A4',
    title: 'Bogoliubov–Kubo–Mori (BKM) Entropy Monotonicity',
    epistemicCategory: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)',
    statement:
      'Under any CPTP quantum dynamical semigroup fixing the KMS reference state ω_ξ, Araki relative entropy S_Araki(ρ_τ || ω_ξ) contracts monotonically at the BKM Fisher dissipation rate σ_BKM = g_ij^BKM θ̇^i θ̇^j ≥ 0, enforcing Landauer erasure heat ≥ k_B T ln 2.',
    mathematicalForm:
      'd S_Araki(ρ_τ || ω_ξ) / dτ = −σ_BKM ≤ 0,   Q_erase ≥ k_B T ln 2 = 2.871 × 10⁻²¹ J/bit (300 K)',
    notesOnProvenance:
      'Araki [10]; Petz monotonicity [13, 15]; Spohn [17]; Bérut et al. [40].'
  },
  {
    id: 'A5',
    title: 'Horndeski Type Ia Luminosity Coupling & Compactification Bound',
    epistemicCategory: 'CATEGORY C — CONJECTURAL',
    statement:
      'Conjectural 4D/5D extension restricts scalar-tensor interactions to Horndeski Type Ia (G_4,X = G_5 = 0, locking c_GW = c identically against GW170817 [18]) with compactified bulk radius bounded by Lee et al. (2020) torsion-balance limits R_5 ≤ 38.6 μm at |α_1| = 1 [28].',
    mathematicalForm:
      'c_GW²/c² = G_4 / (G_4 − 2X G_4,X) ≡ 1   (G_4,X = G_5 = 0);   λ = R_5 < 38.6 μm (|α_1| = 1)',
    notesOnProvenance:
      'Kobayashi [19]; Abbott et al. GW170817 [18]; Lee et al. [28]; Goldberger & Wise [24].'
  }
];

export const H13_CORE_FALSIFICATION_CRITERIA = {
  title: 'Empirical Discrimination: Standard QM/GR Consistency Checks vs. Standalone Frontier Falsifiers',
  coreAxiomFalsifiers: [
    'Consistency Check P15 (Optical Clock Redshift — Cat A): Dual ⁸⁷Sr/¹⁷¹Yb optical-lattice comparison across Δh ≥ 100 m must recover GR redshift Δν/ν = gΔh/c² = 1.0911 × 10⁻¹⁶ m⁻¹ to < 10⁻¹⁸. Any violation falsifies GR + standard QM metrology.',
    'Consistency Check P18 (Transmon GJW Bench & QND/BKM Metrology — Cat A/B1): Dual-rail superconducting transmon circuits with sign-tunable coupler g_int O_L O_R test analog teleportation fidelity F > 0.72 and Δt_ext ≥ d_ext/c, paired with weak-QND pure-state complementarity V² + D_QFI² = 1 and nanoscale Landauer calorimetry ≥ 2.871 × 10⁻²¹ J/bit. Because these test engineered circuits and standard QM/thermodynamics, they check consistency rather than distinguishing IGRT from QM/GR.'
  ],
  frontierSubHypothesisFalsifiers: [
    'Standalone Frontier Falsifier P14 (CANNEX Yukawa — Cat C): Cryogenic planar force-balance runs across 10–38.6 μm achieving 5σ exclusion of Yukawa strength |α_1| < 0.5 at m_1 ≈ 5.1 meV falsify the accessible sub-millimeter Goldberger–Wise radion branch.',
    'Standalone Frontier Falsifier P16 (GW Ringdown Echoes — Cat C): Stacking ≥ 30 high-SNR binary black-hole post-mergers in LVK O5 / Einstein Telescope without echo templates at Δt_echo = 2 r_*/c (0.454 ms for 10 M_☉, λ_port = 0.1) rules out the λ_port ≥ 0.1 reflective core at Δ ln Z < −5.',
    'Standalone Frontier Falsifier P17 (PBH White-Hole Bursts — Cat C): Null multi-messenger FRB–TeV coincidence across CHIME + CTAO and absence of inverse-mass prompt flare lag rule out the observable primordial bounce branch above ρ_GW/crit bounds.'
  ]
};

export const H13_MASTER_EQUATIONS: H13Equation[] = [
  {
    label: '(H13.0.1)',
    unicodeHtml:
      'd<i>τ</i><sub>obs</sub> := [<i>ℏ</i> / (2 Δ<i>H</i><sub>loc</sub>)] d<i>s</i><sub>QFI</sub> &nbsp;(≡ d<i>t</i>), &nbsp;&nbsp; <i>α</i><sub>mod</sub> = √(−<i>g</i><sub>00</sub>) = √(1 − 2<i>GM</i>/(<i>c</i>²<i>r</i>))',
    caption:
      'Kinematic reparametrization onto PU(H) (Axiom A1, Cat B2) paired with standard GR redshift (Axiom A2, Cat A). Zero low-energy empirical deviation from QM+GR.',
    category: 'CATEGORY B2 — AXIOMATIC / DERIVED WITHIN IGRT',
    intuitiveMeaning: 'Purely geometric clock parametrization alongside standard gravitational redshift.'
  },
  {
    label: '(H13.0.2)',
    unicodeHtml:
      'd<i>s</i><sub>5</sub>² = −e<sup>2<i>ky</i></sup> <i>c</i>² d<i>t</i>² + d<b>x</b><sub>3</sub>² + <i>Φ</i><sub>0</sub>² d<i>y</i>², &nbsp;&nbsp; <i>F</i><sub>0<i>y</i></sub> = <i>E</i><sub>5</sub> e<sup><i>ky</i></sup> <i>Φ</i><sub>0</sub> &nbsp;⇒&nbsp; <i>M</i><sub>5</sub>³ <i>G</i><sup><i>A</i></sup><sub><i>B</i></sub> = <i>T</i><sup><i>A</i></sup><sub><i>B</i></sub><sup>EM</sup> − (<i>M</i><sub>5</sub>³ Λ<sub>5</sub> + <i>V</i><sub>GW</sub>) <i>δ</i><sup><i>A</i></sup><sub><i>B</i></sub>',
    caption:
      'Isotropic 5D Einstein–Maxwell bulk closure across all 5 diagonal components (k²/Φ_0² = E_5²/M_5³) with M_5³ Λ_5 + V_GW = −E_5²/2.',
    category: 'CATEGORY C — CONJECTURAL',
    intuitiveMeaning: 'Radial 5D electric flux preserves exact 3D spatial isotropy and closes all five Einstein equations.'
  },
  {
    label: '(H13.0.3)',
    unicodeHtml:
      '<i>η</i><sub>fold</sub> = sin(<i>k</i> Δ<i>x</i> / 2) / (<i>k</i> Δ<i>x</i> / 2) = 0.841471 &nbsp;(at <i>k</i> Δ<i>x</i> = 2 rad; extremal bound 2/<i>π</i> = 0.636620)',
    caption:
      'Asymmetric bulk-to-brane null geodesic ratio at kΔx = 2 rad (θ = 1 rad); extremal throat turnaround yields 2/π.',
    category: 'CATEGORY C — CONJECTURAL',
    intuitiveMeaning: '5D null transit ratio; spans only tens of femtoseconds across R_5 ≤ 38.6 μm.'
  },
  {
    label: '(H13.0.4)',
    unicodeHtml:
      'd²<i>u</i>/d<i>s</i>² = −1/(2<i>u</i>²) + 2/<i>u</i>⁵, &nbsp;&nbsp; <i>ρ</i><sub>max</sub> = √3 / (32<i>π</i>²<i>γ</i>³) <i>ρ</i><sub>Pl</sub> = 0.409374 <i>ρ</i><sub>Pl</sub> &nbsp;(<i>γ</i> = 0.2375)',
    caption:
      'Dimensionless white-hole core bounce ODE yielding u_min = 1.000000 and turnaround acceleration +3/2 at the LQG density ceiling.',
    category: 'CATEGORY C — CONJECTURAL',
    intuitiveMeaning: 'Planck-scale repulsive core pressure halts gravitational collapse without a curvature singularity.'
  },
  {
    label: '(H13.0.5)',
    unicodeHtml:
      'd<i>S</i><sub>Araki</sub>(<i>ρ</i><sub><i>τ</i></sub> ‖ <i>ω</i><sub><i>ξ</i></sub>) / d<i>τ</i> = −<i>g</i><sub><i>ij</i></sub><sup>BKM</sup> <i>θ̇</i><sup><i>i</i></sup> <i>θ̇</i><sup><i>j</i></sup> ≤ 0, &nbsp;&nbsp; <i>V</i>² + <i>D</i><sub>QFI</sub>² = 1 &nbsp;(pure N=2)',
    caption:
      'BKM relative-entropy dissipation inequality and pure-state two-path complementarity equality.',
    category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)',
    intuitiveMeaning: 'Standard open-system thermodynamic arrow and pure-state interference-distinguishability tradeoff.'
  }
];

export const H13_TWELVE_PRINCIPLES_MATRIX: H13PrincipleMatrixRow[] = [
  {
    id: 1,
    shortTitle: 'QFI Kinematic Clock Parametrization',
    chapterAnchor: 4,
    programTier: 'CORE PROTECTED PROGRAM',
    epistemicCategory: 'CATEGORY B2 — AXIOMATIC / DERIVED WITHIN IGRT',
    userStatement: 'Proper time tracks projective quantum Fisher displacement on PU(H).',
    governingFormula: 'dτ_obs := [ℏ/(2ΔH_loc)] ds_QFI ≡ dt',
    quantitativeAnchor: 'τ_step = πℏ / (2ΔH_loc) (Mandelstam–Tamm orthogonalization)',
    principalRecommendationApplied: 'Removed circular derivation claim; framed explicitly as geometric reparametrization.'
  },
  {
    id: 2,
    shortTitle: 'Gravitational Redshift (Frame-Rate Analogy)',
    chapterAnchor: 5,
    programTier: 'CORE PROTECTED PROGRAM',
    epistemicCategory: 'CATEGORY A — ESTABLISHED',
    userStatement: 'Measured proper clock rates slow deeper inside gravitational potentials.',
    governingFormula: 'α_mod = √(−g_00) = √(1 − 2GM/(c²r))',
    quantitativeAnchor: 'Δν/ν = gΔh/c² = 1.0911 × 10⁻¹⁶ m⁻¹ (Bothwell et al. 2022)',
    principalRecommendationApplied: 'Separated measured GR redshift (Cat A) from computational throttling metaphor (Cat E).'
  },
  {
    id: 3,
    shortTitle: 'Relational Synchronization & Causal Distance',
    chapterAnchor: 5,
    programTier: 'SUBORDINATE EXTENSION',
    epistemicCategory: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)',
    userStatement: 'Operational distance can be expressed via mutual-information correlation decay.',
    governingFormula: 'd_sync = c Δt_ping; I(A:B) ≤ I_0 e^{−d/ℓ_ent}',
    quantitativeAnchor: 'Upper-bounded by c in Einstein causal cones; metric axioms verified via triangle inequality',
    principalRecommendationApplied: 'Distinguished standard light-cone operational distance from conjectural entanglement-metric ansatz.'
  },
  {
    id: 4,
    shortTitle: 'Microcausal Split Local Algebras',
    chapterAnchor: 5,
    programTier: 'CORE PROTECTED PROGRAM',
    epistemicCategory: 'CATEGORY A — ESTABLISHED',
    userStatement: 'Spacelike regions carry commuting local observables and distinct proper clocks.',
    governingFormula: '[𝒜(O_A), 𝒜(O_B)] = 0; τ_GPS − τ_ground = +38.64 μs/day',
    quantitativeAnchor: 'Verified daily across GNSS atomic clock constellations',
    principalRecommendationApplied: 'Avoided overclaiming algebraic locality as a novel theory of observer time.'
  },
  {
    id: 5,
    shortTitle: 'RG Fixed Points & Fisher Metric Class',
    chapterAnchor: 6,
    programTier: 'CORE PROTECTED PROGRAM',
    epistemicCategory: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)',
    userStatement: 'Effective macroscopic laws emerge as renormalization-group fixed points.',
    governingFormula: 'Petz monotone metrics f(t); SLD selected for pure states (f_SLD = (1+t)/2)',
    quantitativeAnchor: 'Tóth & Petz (2013) [14]; Bera et al. (2015) [16] — no unique metric over mixed states',
    principalRecommendationApplied: 'Corrected Morozova–Chentsov uniqueness claim to Petz operator-monotone family.'
  },
  {
    id: 6,
    shortTitle: 'Decoherence Coarse-Graining & Pointer Redundancy',
    chapterAnchor: 7,
    programTier: 'SUBORDINATE EXTENSION',
    epistemicCategory: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)',
    userStatement: 'Macroscopic detectors integrate over ~42 orders of Planck duration.',
    governingFormula: 'N_steps ≈ 0.080 s / t_Pl ≈ 1.48 × 10⁴²',
    quantitativeAnchor: 'Pointer state stability via Zurek Quantum Darwinism [37]',
    principalRecommendationApplied: 'Removed speculative neural quantum integration claims; restricted to detector coarse-graining.'
  },
  {
    id: 7,
    shortTitle: 'Quantum Speed Limits as Update Budget',
    chapterAnchor: 8,
    programTier: 'CORE PROTECTED PROGRAM',
    epistemicCategory: 'CATEGORY A — ESTABLISHED',
    userStatement: 'Energy bounds the maximum rate of orthogonal state transitions.',
    governingFormula: 'ν_max = min(2⟨E⟩/(πℏ), 2ΔE/(πℏ))',
    quantitativeAnchor: '6.040 × 10³³ updates s⁻¹ J⁻¹ (Margolus–Levitin [5] / Mandelstam–Tamm [6])',
    principalRecommendationApplied: 'Clarified ground-state energy offset convention E_0 = 0 and mixed-state generalization.'
  },
  {
    id: 8,
    shortTitle: 'Isotropic 5D Bulk Shortcuts & Type Ia Horndeski',
    chapterAnchor: 9,
    programTier: 'CORE PROTECTED PROGRAM',
    epistemicCategory: 'CATEGORY C — CONJECTURAL',
    userStatement: 'Bulk radial electric flux stabilizes isotropic 5D brane geometry below 38.6 μm.',
    governingFormula: 'η_fold = sin(kΔx/2)/(kΔx/2) = 0.841471 (kΔx = 2 rad); c_GW = c',
    quantitativeAnchor: 'Lee et al. [28]: R_5 < 38.6 μm (m_1 = 5.112 meV, M_5 = 1.690 × 10⁸ GeV)',
    principalRecommendationApplied: 'Replaced anisotropic F_{xy} with F_{0y}; relabeled Proposition H13.8; stated macro-portals impossible.'
  },
  {
    id: 9,
    shortTitle: 'LQG-Bounded White-Hole Core Bounce',
    chapterAnchor: 10,
    programTier: 'CORE PROTECTED PROGRAM',
    epistemicCategory: 'CATEGORY C — CONJECTURAL',
    userStatement: 'Limiting Planck density converts gravitational collapse into a delayed rebound.',
    governingFormula: 'd²u/ds² = −1/(2u²) + 2/u⁵; τ_WH^(2) = c_HR t_Pl (M/M_Pl)²',
    quantitativeAnchor: '10 M_☉: τ_WH^(2) = 1.426 × 10²⁷ yr, Δt_echo = 0.454 ms, κ = 5.076 × 10³ s⁻¹',
    principalRecommendationApplied: 'Fixed 26-order-of-magnitude timescale bug, echo delay, surface gravity, and Page factor.'
  },
  {
    id: 10,
    shortTitle: 'Pure-State Complementarity Bounds',
    chapterAnchor: 11,
    programTier: 'SUBORDINATE EXTENSION',
    epistemicCategory: 'CATEGORY A — ESTABLISHED',
    userStatement: 'Interference visibility vanishes continuously as path distinguishability increases.',
    governingFormula: 'V² + D_QFI² = 1 (pure N=2); V² + D_QFI² ≤ 1 (mixed / N-slit)',
    quantitativeAnchor: 'Englert (1996) [36] & Bera et al. (2015) [16]',
    principalRecommendationApplied: 'Restricted strict equality explicitly to pure two-way interferometry.'
  },
  {
    id: 11,
    shortTitle: 'Irreversible BKM Relative-Entropy Arrow',
    chapterAnchor: 12,
    programTier: 'CORE PROTECTED PROGRAM',
    epistemicCategory: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)',
    userStatement: 'CPTP open-system dynamics drive non-decreasing entropy production.',
    governingFormula: 'dS_Araki/dτ = −g_ij^BKM θ̇^i θ̇^j ≤ 0; Q_erase ≥ k_B T ln 2',
    quantitativeAnchor: '2.871 × 10⁻²¹ J/bit at T = 300 K (Bérut et al. 2012 [40])',
    principalRecommendationApplied: 'Derived dissipation theorem explicitly via Fréchet derivative of ln ρ and Spohn inequality.'
  },
  {
    id: 12,
    shortTitle: 'Decoupled Biothermodynamics & Separated Companion',
    chapterAnchor: 13,
    programTier: 'SEPARATED INTERPRETIVE LENS',
    epistemicCategory: 'CATEGORY A — ESTABLISHED',
    userStatement: 'Living organisms sustain Markov blankets via classical free-energy dissipation.',
    governingFormula: 'F_bio = E_KL[q(η) ‖ p(η|s)] − ln p(s) ≥ 0 (no 5D coupling)',
    quantitativeAnchor: 'Classical stochastic thermodynamics; philosophy moved to Companion module',
    principalRecommendationApplied: 'Detached biology from spacetime ontology; exported Cat E essays to standalone Companion.'
  }
];

export const H13_SYMBOL_DECODER: H13SymbolDecoderRow[] = [
  { symbol: 'τ_obs', spokenName: 'tau-obs', intuitiveMeaning: 'Observer proper clock time', formalMathematicalRole: 'Reparametrized PU(H) clock parameter', units: 's' },
  { symbol: 'ds_QFI', spokenName: 'd-s QFI', intuitiveMeaning: 'Infinitesimal quantum state step', formalMathematicalRole: 'SLD Fisher line element (2 ds_FS)', units: 'dimensionless' },
  { symbol: 'ΔH_loc', spokenName: 'Delta H-loc', intuitiveMeaning: 'Local energy uncertainty', formalMathematicalRole: 'Standard deviation √(⟨H²⟩ − ⟨H⟩²)', units: 'J' },
  { symbol: 'α_mod', spokenName: 'alpha-mod', intuitiveMeaning: 'Gravitational redshift factor', formalMathematicalRole: '√(−g_00) lapse ratio dτ/dt_∞', units: 'dimensionless' },
  { symbol: 'E_5, k', spokenName: 'E-five, k', intuitiveMeaning: '5D radial electric field & warp rate', formalMathematicalRole: 'F_{0y} = E_5 e^{ky} Φ_0, k/Φ_0 = E_5/M_5^{3/2}', units: 'E_5: [J^2 m^{-3}]^{1/2}; k/Φ_0: m^{-1}' },
  { symbol: 'η_fold', spokenName: 'eta-fold', intuitiveMeaning: 'Bulk-to-brane transit ratio', formalMathematicalRole: 'sin(kΔx/2)/(kΔx/2)', units: 'dimensionless' },
  { symbol: 'R_5, m_1', spokenName: 'R-five, m-one', intuitiveMeaning: 'Extra-dimension radius & first KK mass', formalMathematicalRole: 'Yukawa range λ = R_5, m_1 = ℏ/(R_5 c)', units: 'm, eV' },
  { symbol: 'ρ_max', spokenName: 'rho-max', intuitiveMeaning: 'LQG core density ceiling', formalMathematicalRole: '√3/(32π²γ³) ρ_Pl = 0.409374 ρ_Pl', units: 'kg m^{-3}' },
  { symbol: 'κ, Δt_echo', spokenName: 'kappa, Delta t-echo', intuitiveMeaning: 'Surface gravity & post-merger echo lag', formalMathematicalRole: 'κ = c/(2r_+), Δt_echo = 2 r_*/c', units: 's^{-1}, s' },
  { symbol: 'S_Araki', spokenName: 'S-Araki', intuitiveMeaning: 'Relative entropy distance to KMS state', formalMathematicalRole: 'Tr(ρ (ln ρ − ln ω_ξ))', units: 'dimensionless (nats)' }
];

export const H13_DIMENSIONAL_AUDIT: H13DimensionalAuditRow[] = [
  { equationLabel: '(H13.0.1)', formulaSummary: 'dτ_obs = [ℏ/(2ΔH_loc)] ds_QFI', lhsDimensions: '[T]', rhsDimensions: '[J·s]/[J] · [1] = [T]', physicalCheck: 'Exact SI time identity' },
  { equationLabel: '(H13.0.2)', formulaSummary: 'M_5³ (k/Φ_0)² = E_5²', lhsDimensions: '[L^{-3}][L^{-2}] = [L^{-5}]', rhsDimensions: '[E_5²] in natural units [L^{-5}]', physicalCheck: 'All 5 Einstein components balance identically' },
  { equationLabel: '(H13.0.3)', formulaSummary: 'η_fold = sin(kΔx/2)/(kΔx/2)', lhsDimensions: '[1]', rhsDimensions: '[L^{-1}·L]/[1] = [1]', physicalCheck: 'Sinc argument kΔx/2 strictly dimensionless' },
  { equationLabel: '(H13.0.4)', formulaSummary: 'd²u/ds² = −1/(2u²) + 2/u⁵', lhsDimensions: '[1]', rhsDimensions: '[1]', physicalCheck: 'Dimensionless ratio u = R/R_bounce, s = τ/τ_0' },
  { equationLabel: '(H13.0.5)', formulaSummary: 'dS_Araki/dτ = −g_ij^BKM θ̇^i θ̇^j', lhsDimensions: '[T^{-1}]', rhsDimensions: '[1]·[T^{-1}]', physicalCheck: 'BKM metric dimensionless; rates match' },
  { equationLabel: '(H13.8.1)', formulaSummary: 'Δν/ν = g Δh / c²', lhsDimensions: '[1]', rhsDimensions: '[L T^{-2}][L]/[L² T^{-2}] = [1]', physicalCheck: '1.0911 × 10⁻¹⁶ m⁻¹ exact' },
  { equationLabel: '(H13.10.2)', formulaSummary: 'Δt_echo = 2 r_* / c', lhsDimensions: '[T]', rhsDimensions: '[L]/[L T^{-1}] = [T]', physicalCheck: '0.454 ms for 10 M_☉, λ_port = 0.1' },
  { equationLabel: '(App. H)', formulaSummary: 'm_1 c² = ℏc / R_5', lhsDimensions: '[J] (eV)', rhsDimensions: '[J·m]/[m] = [J]', physicalCheck: '5.112 meV at R_5 = 38.6 μm' }
];

export const H13_BLACK_HOLE_TO_PORTAL_TAXONOMY: H13BlackHoleVsPortalRow[] = [
  {
    nodeClass: 'Class S1: Classical Schwarzschild Black Hole',
    geometryAndAction: '4D GR vacuum; R_+ = 2GM/c²',
    necAndCausalStatus: 'Satisfies NEC globally; one-way event horizon',
    isPortalOrWhiteHole: 'No — strictly sealed collapse trap',
    foldingOrBounceMetric: 'κ = c/(2r_+) = 5.076 × 10³ s⁻¹ at 10 M_☉',
    category: 'CATEGORY A — ESTABLISHED'
  },
  {
    nodeClass: 'Class S2: Hayward Regular Black Hole (LQG Core)',
    geometryAndAction: '4D effective core ρ_max = 0.409374 ρ_Pl; M_rem = 1.09236 M_Pl',
    necAndCausalStatus: 'Planck-scale curvature saturation violates classical SEC at core',
    isPortalOrWhiteHole: 'White-hole bounce after τ_WH^(2) or τ_WH^(3)',
    foldingOrBounceMetric: '10 M_☉ τ_WH^(2) = 1.426 × 10²⁷ yr; echo 0.454 ms',
    category: 'CATEGORY C — CONJECTURAL'
  },
  {
    nodeClass: 'Class P1: Quasi-Local GJW Coupled Throat (Ansatz)',
    geometryAndAction: '4D/5D double-trace Brown–York linear-response ansatz',
    necAndCausalStatus: 'Assumed negative ANEC pulse ΔU < 0; Δt_ext ≥ d_ext/c',
    isPortalOrWhiteHole: 'Conditional microscopic pulse shift (open proof in Note I)',
    foldingOrBounceMetric: 'Causal; non-superluminal',
    category: 'CATEGORY C — CONJECTURAL'
  },
  {
    nodeClass: 'Class P2: Isotropic 5D EM–Horndeski Brane Bridge',
    geometryAndAction: 'F_{0y} = E_5 e^{ky} Φ_0 + Type Ia Horndeski (c_GW = c)',
    necAndCausalStatus: '5D null energy G_{AB} k^A k^B ≥ 0 satisfied',
    isPortalOrWhiteHole: 'Microscopic μm-scale refractive shortcut (macro transit impossible)',
    foldingOrBounceMetric: 'η_fold = 0.841471 (kΔx=2 rad); R_5 ≤ 38.6 μm ⇒ ~40 fs scale',
    category: 'CATEGORY C — CONJECTURAL'
  }
];

export const H13_PORTAL_BUILD_RECOMMENDATIONS: H13PortalRecommendationRow[] = [
  {
    id: 'PR-1',
    title: 'Cryogenic Sub-50 μm Yukawa Force-Balance Probe (CANNEX)',
    portalClass: 'Extra-Dimension Constraint (Protocol P14)',
    trl: 'TRL 6',
    physicalMechanism: 'Searches for scalar-radion Yukawa fifth forces across d = 10–38.6 μm.',
    achievableBuildSpec: 'Faraday-shielded gold-silicon plates at 4.2 K with Fabry–Pérot displacement readout.',
    verificationMetric: '|α_1| sensitivity < 0.1 at λ = 30 μm',
    falsificationThreshold: '5σ exclusion of |α_1| < 0.5 rules out accessible sub-50 μm GW branch',
    implications: 'Directly tests the compactification ceiling allowed after Lee et al. (2020) [28].',
    category: 'CATEGORY C — CONJECTURAL'
  },
  {
    id: 'PR-2',
    title: 'Dual-Rail Superconducting Transmon GJW Circuit Simulator',
    portalClass: 'Unitary Quantum Teleportation Analog (Protocol P18)',
    trl: 'TRL 7',
    physicalMechanism: 'Parametric Josephson coupler g_int O_L O_R implements TFD scrambling transfer.',
    achievableBuildSpec: 'Two 3D transmon cavities at 10 mK coupled via tunable flux-pumped SNAIL element.',
    verificationMetric: 'Transfer fidelity F > 0.72 with opposite-sign g_int polarity asymmetry',
    falsificationThreshold: 'Symmetric sign response or F ≤ classical bound (2/3)',
    implications: 'Tests analog GJW information routing without proving physical 5D bulk wormholes.',
    category: 'CATEGORY A — ESTABLISHED'
  },
  {
    id: 'PR-3',
    title: 'Stacked LVK O5 / Einstein Telescope Echo Matched Filter',
    portalClass: 'Reflective Horizon / Bounce Probe (Protocol P16)',
    trl: 'TRL 6–7',
    physicalMechanism: 'Detects secondary wavepackets reflecting off λ_port = 0.1 effective core barrier.',
    achievableBuildSpec: 'Pre-registered coherent phase-stacking across ≥ 30 high-SNR binary mergers.',
    verificationMetric: '10 M_☉ echo lag Δt_echo = 2 r_*/c = 0.454 ms (amplitude ratio K_echo)',
    falsificationThreshold: 'Δ ln Z < −5 across ≥ 30 stacked events excludes λ_port ≥ 0.1',
    implications: 'Cleanest astrophysical discriminator against classical vacuum Kerr horizons.',
    category: 'CATEGORY C — CONJECTURAL'
  },
  {
    id: 'PR-4',
    title: 'CHIME / CTAO Primordial Bounce Multi-Messenger Trigger',
    portalClass: 'White-Hole Burst Search (Protocol P17)',
    trl: 'TRL 7–8',
    physicalMechanism: 'Low-latency radio dispersion alerts trigger TeV gamma-ray follow-up for PBH bursts.',
    achievableBuildSpec: 'Sub-200 ms VOEvent pipeline linking wide-field radio arrays with Cherenkov telescopes.',
    verificationMetric: 'Inverse-mass spectral-lag signature distinguishing bounce from standard Hawking tail',
    falsificationThreshold: 'Joint upper limits violating primordial DM fraction constraints',
    implications: 'Constrains cubic vs. quadratic exterior white-hole remnant channels.',
    category: 'CATEGORY C — CONJECTURAL'
  },
  {
    id: 'PR-5',
    title: 'Differential Cryogenic Optical-Lattice Redshift Tower',
    portalClass: 'Standard GR Clock Baseline (Protocol P15)',
    trl: 'TRL 8',
    physicalMechanism: 'Verifies local proper-time lapse α_mod = √(−g_00) across Δh ≥ 100 m fiber link.',
    achievableBuildSpec: 'Dual ⁸⁷Sr optical-lattice clocks with active phase-noise-canceled fiber transfer.',
    verificationMetric: 'Δν/ν = 1.0911 × 10⁻¹⁶ m⁻¹ to < 10⁻¹⁸ precision',
    falsificationThreshold: 'Deviation > 5σ falsifies standard GR/QM clock metrology',
    implications: 'Establishes experimental baseline for local frame-rate synchronization.',
    category: 'CATEGORY A — ESTABLISHED'
  },
  {
    id: 'PR-6',
    title: 'Weak-QND Two-Path Interferometer & BKM Calorimeter',
    portalClass: 'QM Complementarity & Landauer Bench (Protocol P18)',
    trl: 'TRL 7',
    physicalMechanism: 'Measures V² + D_QFI² = 1 alongside irreversible memory-erasure dissipation.',
    achievableBuildSpec: 'Weakly coupled microwave cavity detector + Coulomb-blockade nanothermometer.',
    verificationMetric: 'V² + D_QFI² = 1.00 ± 0.01 (pure); Q_erase ≥ 2.871 × 10⁻²¹ J/bit (300 K)',
    falsificationThreshold: 'Violation of complementarity or Landauer bound falsifies standard QM',
    implications: 'Validates Section 11 and Section 12 thermodynamic bounds.',
    category: 'CATEGORY A — ESTABLISHED'
  },
  {
    id: 'PR-7',
    title: 'Photonic / Optical Kerr-Medium Horizon Analog',
    portalClass: 'Refractive Horizon Analog',
    trl: 'TRL 6',
    physicalMechanism: 'Soliton refractive-index gradient mimics effective metric and mode conversion.',
    achievableBuildSpec: 'Microstructured silica photonic crystal fiber pumped with femtosecond pulses.',
    verificationMetric: 'Thermal Bogoliubov pair spectrum matching effective surface gravity',
    falsificationThreshold: 'Absence of stimulated partner-mode phase correlation',
    implications: 'Laboratory analog only; no spacetime curvature generated.',
    category: 'CATEGORY D — SPECULATIVE ENGINEERING'
  },
  {
    id: 'PR-8',
    title: 'Macroscopic Human/Cargo Transit Portal Feasibility Audit',
    portalClass: 'No-Go Boundary Check',
    trl: 'TRL 0 (No-Go)',
    physicalMechanism: 'Evaluates bulk shortcut Δt_saved = (1 − η_fold) L / c bounded by R_5 < 38.6 μm.',
    achievableBuildSpec: 'Not buildable: 16–36% folding across ~38.6 μm yields ~20–47 fs shift only.',
    verificationMetric: 'Δt_saved ~ (0.16..0.36) × (38.6 μm / c) ≈ 21–47 fs',
    falsificationThreshold: 'Already excluded for macroscopic spans by Lee et al. (2020) torsion limits',
    implications: 'Explicitly rules out sci-fi macroscopic transit portals within verified EFT.',
    category: 'CATEGORY D — SPECULATIVE ENGINEERING'
  }
];

export const H13_WHITE_HOLE_BOUNCE_TABLE: H13WhiteHoleRow[] = [
  {
    progenitorRegime: 'Planck Remnant (Hayward Root)',
    massScale: 'M_rem = 1.09236 M_Pl (2.38 × 10⁻⁵ g)',
    interiorBounceTime: 'τ_int ≈ 1.44 × 10⁻⁴³ s',
    exteriorBounceDelay: 'τ_WH^(2) ≈ 6.43 × 10⁻⁴⁴ s',
    astrophysicalObservable: 'Stable cold dark-matter / Planck-relic candidate at zero Hawking flux',
    epistemicStatus: 'CATEGORY C — CONJECTURAL'
  },
  {
    progenitorRegime: 'PBH Page Cutoff (f = 1 / 15.35 / 24.14)',
    massScale: '1.730 × 10¹⁴ g / 4.30 × 10¹⁴ g / 5.00 × 10¹⁴ g',
    interiorBounceTime: '~1.14 × 10⁻²⁴ to 3.30 × 10⁻²⁴ s',
    exteriorBounceDelay: 'τ_WH^(3) = 13.8 Gyr (today t_0)',
    astrophysicalObservable: 'Prompt radio–TeV gamma-ray burst candidates in CHIME / CTAO (P17)',
    epistemicStatus: 'CATEGORY C — CONJECTURAL'
  },
  {
    progenitorRegime: 'Sub-Lunar PBH (Quadratic Window t_0)',
    massScale: '6.186 × 10²⁵ g (at c_HR = 1)',
    interiorBounceTime: '4.09 × 10⁻¹³ s',
    exteriorBounceDelay: 'τ_WH^(2) = 13.8 Gyr (c_HR ∈ [10⁻², 10¹] ⇒ [2.0×10²⁵, 6.2×10²⁶] g)',
    astrophysicalObservable: 'Sub-millimeter / optical-IR flare transient if bounce reaches exterior today',
    epistemicStatus: 'CATEGORY C — CONJECTURAL'
  },
  {
    progenitorRegime: 'Stellar Black Hole (Benchmark 10 M_☉)',
    massScale: '1.988 × 10³⁴ g (10 M_☉)',
    interiorBounceTime: '1.310 × 10⁻⁴ s (8GM/(3c³))',
    exteriorBounceDelay: 'τ_WH^(2) = 1.426 × 10²⁷ yr (4.500 × 10³⁴ s) | τ_WH^(3) = 2.095 × 10⁶⁷ yr',
    astrophysicalObservable: 'Post-merger ringdown echoes at Δt_echo = 2 r_*/c = 0.454 ms (λ_port=0.1, κ=5.076×10³ s⁻¹)',
    epistemicStatus: 'CATEGORY C — CONJECTURAL'
  },
  {
    progenitorRegime: 'Supermassive AGN (10⁸ M_☉)',
    massScale: '1.988 × 10⁴¹ g (10⁸ M_☉)',
    interiorBounceTime: '1.310 × 10³ s (~21.8 min)',
    exteriorBounceDelay: 'τ_WH^(2) = 1.426 × 10⁴¹ yr | τ_WH^(3) = 2.095 × 10⁹¹ yr',
    astrophysicalObservable: 'Long-wavelength LISA / PTA echo bounds; vastly exceeds cosmic age',
    epistemicStatus: 'CATEGORY C — CONJECTURAL'
  }
];

export const H13_PROTOCOLS_P14_TO_P18: H13ExperimentalProtocol[] = [
  {
    id: 'P14',
    name: 'Cryogenic Sub-50 μm CANNEX Yukawa Search',
    targetThesis: 'Extra-dimension Kaluza–Klein / Goldberger–Wise radion scalar force (Ax. A5)',
    quantitativeThreshold: 'd = 10–38.6 μm; m_1 ≥ 5.112 meV at |α_1| = 1',
    experimentalSetup: '4.2 K Faraday-shielded planar force balance with Fabry–Pérot displacement readout',
    systematicsControl: '1 μm conductive shield suppresses electrostatic patch potentials; thermal Casimir subtracted',
    falsificationCriterion: '5σ exclusion of |α_1| < 0.5 at λ = 20–38.6 μm',
    falsePositiveRate: '< 2.9 × 10⁻⁷ (blinded 5σ)',
    estimatedCost: 'USD 0.8M–1.5M (existing CANNEX infrastructure)',
    timeline: '2026–2028',
    category: 'CATEGORY C — CONJECTURAL'
  },
  {
    id: 'P15',
    name: 'Differential Cryogenic Optical-Lattice Clock Redshift Check',
    targetThesis: 'Standard GR local proper-time lapse α_mod = √(−g_00) (Consistency Check)',
    quantitativeThreshold: 'Δν/ν = gΔh/c² = 1.0911 × 10⁻¹⁶ m⁻¹ across Δh ≥ 100 m',
    experimentalSetup: 'Dual ⁸⁷Sr/¹⁷¹Yb optical-lattice clocks connected via phase-noise-canceled fiber',
    systematicsControl: 'Blackbody radiation, DC Stark, and tidal-potential corrections tracked to < 10⁻¹⁸',
    falsificationCriterion: 'Deviation > 5σ from GR redshift (standard physics consistency test)',
    falsePositiveRate: '< 3 × 10⁻⁷',
    estimatedCost: 'USD 0.4M–0.9M (shared metrology labs)',
    timeline: '2026–2027',
    category: 'CATEGORY A — ESTABLISHED'
  },
  {
    id: 'P16',
    name: 'LVK O5 / Einstein Telescope Ringdown Echo Stacking',
    targetThesis: 'Reflective Planck-core boundary at λ_port = 0.1 (White-Hole / Core Probe)',
    quantitativeThreshold: 'Δt_echo = 2 r_*/c = 0.454 ms (10 M_☉, λ_port = 0.1); κ = 5.076 × 10³ s⁻¹',
    experimentalSetup: 'Pre-registered coherent phase-matched stacking over ≥ 30 high-SNR BBH mergers',
    systematicsControl: 'Injected GR Kerr ringdown mock catalogs calibrate look-elsewhere trial factor',
    falsificationCriterion: 'Bayes factor Δ ln Z < −5 rules out λ_port ≥ 0.1 reflective core',
    falsePositiveRate: '< 6.7 × 10⁻³ (pre-registered Bayes threshold)',
    estimatedCost: 'USD 0.15M–0.3M (open LVK strain archive)',
    timeline: '2026–2030',
    category: 'CATEGORY C — CONJECTURAL'
  },
  {
    id: 'P17',
    name: 'CHIME / CTAO Primordial Bounce Multi-Messenger Trigger',
    targetThesis: 'Primordial black-hole to white-hole burst channel (Cubic & Quadratic branches)',
    quantitativeThreshold: 'M_crit = 4.30 × 10¹⁴ g (Page f=15.35) to 5.00 × 10¹⁴ g (f=24.14); quad ~ 6.19 × 10²⁵ g',
    experimentalSetup: 'Real-time < 200 ms CHIME/DSA-2000 radio dispersion alerts triggering CTAO TeV array',
    systematicsControl: 'Extraterrestrial dispersion-measure localization eliminates terrestrial RFI and magnetars',
    falsificationCriterion: 'Joint radio–TeV flux limits ruling out primordial bounce relic density',
    falsePositiveRate: '< 1 × 10⁻⁵ (coincident time-sky window)',
    estimatedCost: 'USD 0.3M–0.7M (software trigger integration)',
    timeline: '2026–2031',
    category: 'CATEGORY C — CONJECTURAL'
  },
  {
    id: 'P18',
    name: 'Transmon GJW Teleportation Bench + QND/BKM Calorimetry',
    targetThesis: 'Analog GJW transfer dynamics + standard QM/Landauer baseline (Consistency Check)',
    quantitativeThreshold: 'F > 0.72, Δt_ext ≥ d_ext/c; V² + D_QFI² = 1; Q_erase ≥ 2.871 × 10⁻²¹ J/bit',
    experimentalSetup: 'Dual-rail 3D transmon cavities at 10 mK + weak-QND interferometer & nanocalorimeter',
    systematicsControl: 'Coupler polarity sign-flip (g_int → −g_int) isolates unitary GJW interference from decoherence',
    falsificationCriterion: 'Failure of sign-flip asymmetry or violation of V² + D_QFI² = 1 / Landauer bound',
    falsePositiveRate: '< 1 × 10⁻⁴',
    estimatedCost: 'USD 0.6M–1.2M (existing superconducting cryostats)',
    timeline: '2026–2029',
    category: 'CATEGORY A — ESTABLISHED'
  }
];

export const H13_PROTOCOL_SIGNAL_VS_SENSITIVITY: H13ProtocolSignalVsSensitivityRow[] = [
  {
    protocolId: 'P14',
    predictedSignal: 'Yukawa acceleration ratio |α_1| ∼ 0.5–1.0 at λ ∈ [10, 38.6] μm',
    currentSensitivity: 'Lee et al. (2020) excludes λ > 38.6 μm at |α_1| = 1; CANNEX targets 10× gain',
    dominantSystematics: 'Thermal Casimir force gradient and surface patch potentials',
    nullTestLimit: 'R_5 → 0 reduces exactly to 4D Newtonian inverse-square law',
    falsification95CL: '|α_1| < 0.5 across 15–38.6 μm at 95% CL'
  },
  {
    protocolId: 'P15',
    predictedSignal: 'Δν/ν = 1.0911 × 10⁻¹⁴ across Δh = 100 m',
    currentSensitivity: 'Optical-lattice stability reaches 10⁻¹⁸–10⁻¹⁹ level',
    dominantSystematics: 'Fiber phase drift and local gravimetric tide modeling',
    nullTestLimit: 'Δh → 0 yields zero differential clock offset',
    falsification95CL: 'Any > 5σ departure from GR redshift'
  },
  {
    protocolId: 'P16',
    predictedSignal: 'Echo delay Δt_echo = 0.454 ms (10 M_☉, λ_port = 0.1)',
    currentSensitivity: 'LVK O4/O5 stacked SNR ~ 30–60 across ≥ 30 mergers probes K_echo ~ 0.1',
    dominantSystematics: 'Spin-induced waveform residuals and PSD non-stationarity',
    nullTestLimit: 'λ_port → 0 (classical horizon) removes post-merger echoes completely',
    falsification95CL: 'K_echo < 0.05 at Δ ln Z < −5'
  },
  {
    protocolId: 'P17',
    predictedSignal: 'Millisecond radio burst + delayed/prompt TeV gamma flash from PBH bounce',
    currentSensitivity: 'CHIME 10³ events/yr + CTAO TeV sensitivity ~ 10⁻¹² erg cm⁻² s⁻¹',
    dominantSystematics: 'Astrophysical magnetar FRBs and pair-production EBL attenuation',
    nullTestLimit: 'f_PBH → 0 eliminates multi-messenger coincidence excess',
    falsification95CL: 'Absence of inverse-mass lag excess in 5-year catalog'
  },
  {
    protocolId: 'P18',
    predictedSignal: 'Sign-asymmetric teleportation F > 0.72; V² + D_QFI² = 1; Q ≥ k_B T ln 2',
    currentSensitivity: 'Circuit QED gate fidelities > 99%; AuPd calorimetry resolves 10⁻²¹ J',
    dominantSystematics: 'Quasiparticle poisoning and cavity photon loss',
    nullTestLimit: 'g_int → 0 drops transfer fidelity to thermal noise floor',
    falsification95CL: 'Sign-symmetric transfer or complementarity/Landauer violation'
  }
];

export const H13_PROTOCOL_CROSSCHECKS: H13ProtocolCrossCheckRow[] = [
  {
    jointOutcomePattern: 'P14 Positive + P16 Positive',
    protocolsInvolved: 'P14 & P16',
    physicalInterpretation: 'Supports finite-scale 5D radion Yukawa + reflective near-horizon core',
    programmaticImpact: 'Prioritizes precision mapping of (R_5, λ_port) parameter plane'
  },
  {
    jointOutcomePattern: 'P14 Null + P16 Positive',
    protocolsInvolved: 'P14 & P16',
    physicalInterpretation: 'Excludes accessible > 10 μm brane while keeping 4D LQG white-hole core alive',
    programmaticImpact: 'Decouples 4D Planck-star bounce sector from large-extra-dimension portals'
  },
  {
    jointOutcomePattern: 'P14 Null + P16 Null + P17 Null',
    protocolsInvolved: 'P14, P16 & P17',
    physicalInterpretation: 'Refutes all testable Category C deviations down to instrument floors',
    programmaticImpact: 'Retires 5D/bounce extensions; retains only standard QM/GR kinematic notation'
  }
];

export const H13_FALSIFICATION_CHECKLIST: string[] = [
  'P14: 5σ exclusion of |α_1| < 0.5 for λ ∈ [15, 38.6] μm refutes the open GW radion window.',
  'P16: Δ ln Z < −5 across ≥ 30 stacked LVK/ET mergers refutes λ_port ≥ 0.1 horizon echoes.',
  'P17: Five-year CHIME + CTAO null multi-messenger coincidence refutes observable PBH bounce bursts.',
  'P15 / P18: Any deviation from Δν/ν = gΔh/c², V² + D_QFI² = 1 (pure), or Q_erase ≥ k_B T ln 2 falsifies standard GR/QM/Landauer baseline.'
];

export const H13_CONFIRMATION_CHECKLIST: string[] = [
  'P14: Reproducible ≥ 5σ Yukawa excess in 10–38.6 μm surviving thermal Casimir and Faraday null toggles.',
  'P16: Stacked echo wavepacket locked at Δt_echo = 2 r_*/c = 0.454 ms (scaled by remnant mass) with Δ ln Z ≥ 5.',
  'P17: Coincident CHIME radio burst + CTAO TeV counter-part exhibiting predicted inverse-mass spectral delay.'
];

export const H13_EPISTEMIC_LEDGER: H13EpistemicLedgerRow[] = [
  {
    claimId: 'C1',
    claim: 'dτ_obs := [ℏ/(2ΔH_loc)] ds_QFI reparametrizes unitary time onto PU(H)',
    category: 'CATEGORY B2 — AXIOMATIC / DERIVED WITHIN IGRT',
    mathematicalSupport: 'Anandan–Aharonov identity ds_FS/dτ = ΔH/ℏ [4] + SLD metric I_SLD = 4 g_FS [3]',
    primaryProvenance: 'Braunstein & Caves [3]; Anandan & Aharonov [4]',
    computationalCheck: 'Exact identity on PU(H); zero empirical deviation from QM',
    explicitLimitOrNonClaim: 'Does NOT derive time without presupposing unitary evolution.'
  },
  {
    claimId: 'C2',
    claim: 'Local gravitational clock ratio α_mod = √(−g_00)',
    category: 'CATEGORY A — ESTABLISHED',
    mathematicalSupport: 'Schwarzschild / static Killing redshift [1, 12]',
    primaryProvenance: 'Bothwell et al. [12]',
    computationalCheck: 'Δν/ν = 1.0911 × 10⁻¹⁶ m⁻¹',
    explicitLimitOrNonClaim: '"Frame-rate throttling" is Cat E wording only.'
  },
  {
    claimId: 'C3',
    claim: 'Spacelike AQFT microcausality & split Type I local factors',
    category: 'CATEGORY A — ESTABLISHED',
    mathematicalSupport: 'Buchholz–Doplicher–Longo theorem [9]',
    primaryProvenance: 'Haag [8]; Doplicher & Longo [9]',
    computationalCheck: '[A, B] = 0 for O_A ⊥ O_B',
    explicitLimitOrNonClaim: 'Does NOT cover double-trace wormhole coupling (App. I).'
  },
  {
    claimId: 'C4',
    claim: 'Petz family of monotone metrics (SLD on pure clocks)',
    category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)',
    mathematicalSupport: 'Petz–Morozova–Chentsov operator-monotone classification [13, 14, 15]',
    primaryProvenance: 'Petz [13]; Tóth & Petz [14]',
    computationalCheck: 'Mixed states admit continuum f_min ≤ f ≤ f_max',
    explicitLimitOrNonClaim: 'No unique quantum Fisher metric exists on mixed states.'
  },
  {
    claimId: 'C5',
    claim: 'Margolus–Levitin / Mandelstam–Tamm speed limits',
    category: 'CATEGORY A — ESTABLISHED',
    mathematicalSupport: '6.040 × 10³³ orthogonal transitions s⁻¹ J⁻¹ [5, 6]',
    primaryProvenance: 'Margolus & Levitin [5]; Mandelstam & Tamm [6]',
    computationalCheck: 'Verified in SI to 4 s.f.',
    explicitLimitOrNonClaim: 'Requires ground-state energy E_0 = 0 convention.'
  },
  {
    claimId: 'C6',
    claim: 'Isotropic 5D bulk closure with F_{0y} = E_5 e^{ky} Φ_0 & c_GW = c',
    category: 'CATEGORY C — CONJECTURAL',
    mathematicalSupport: 'All 5 Einstein components close: G^0_0 = G^y_y = 0, G^i_i = k²/Φ_0² = E_5²/M_5³',
    primaryProvenance: 'Randall–Sundrum [22]; Goldberger–Wise [24]; Kobayashi [19]',
    computationalCheck: 'Verified symbolically & in verify-igrt-h13.mjs',
    explicitLimitOrNonClaim: 'Bulk electric flux amplitude E_5 is a model assumption.'
  },
  {
    claimId: 'C7',
    claim: 'Sub-50 μm Kaluza–Klein Yukawa window λ < 38.6 μm',
    category: 'CATEGORY C — CONJECTURAL',
    mathematicalSupport: 'Lee et al. (2020) 52 μm probe ⇒ λ < 38.6 μm, m_1 = 5.112 meV, M_5 = 1.690×10⁸ GeV',
    primaryProvenance: 'Lee et al. [28]; Kapner et al. [29]; Hannestad–Raffelt [30]',
    computationalCheck: 'Consistent with LHC, SN 1987A (n=1), and GW170817',
    explicitLimitOrNonClaim: 'Macroscopic transit portals remain impossible (~fs shifts).'
  },
  {
    claimId: 'C8',
    claim: 'Boundary-free Brown–York GJW linear-response ansatz',
    category: 'CATEGORY C — CONJECTURAL',
    mathematicalSupport: 'Assumed Rindler ANEC integral ΔU < 0 with causal Δt_ext ≥ d_ext/c',
    primaryProvenance: 'Gao–Jafferis–Wall [25]; Maldacena et al. [26]',
    computationalCheck: 'Proposition H13.8 (Proof Sketch)',
    explicitLimitOrNonClaim: 'Rigorously proving ∫⟨T_UU⟩ < 0 without AdS boundary remains open.'
  },
  {
    claimId: 'C9',
    claim: 'LQG core bounce ODE & 10 M_☉ echo/timescale values',
    category: 'CATEGORY C — CONJECTURAL',
    mathematicalSupport: 'ρ_max = 0.409374 ρ_Pl; u_min = 1; τ_WH^(2) = 1.426 × 10²⁷ yr; Δt_echo = 0.454 ms',
    primaryProvenance: 'Ashtekar et al. [20]; Rovelli–Vidotto [32]; Haggard–Rovelli [33]',
    computationalCheck: '4,400-step RK4 residual < 10⁻¹⁰',
    explicitLimitOrNonClaim: 'Quadratic bounce coefficient c_HR ∈ [10⁻², 10¹] spans 3 orders.'
  },
  {
    claimId: 'C10',
    claim: 'Pure-state complementarity & BKM Landauer dissipation',
    category: 'CATEGORY A — ESTABLISHED',
    mathematicalSupport: 'V² + D_QFI² = 1 (pure N=2); dS_Araki/dτ = −σ_BKM ≤ 0 [16, 17, 36]',
    primaryProvenance: 'Englert [36]; Bera et al. [16]; Spohn [17]; Bérut et al. [40]',
    computationalCheck: 'Q_erase ≥ 2.871 × 10⁻²¹ J/bit (300 K)',
    explicitLimitOrNonClaim: 'Tests standard QM & thermodynamics, not new physics.'
  }
];

export const H13_PROOF_DEVICES_AND_RECOMMENDATIONS: H13ProofDeviceSpec[] = [
  {
    deviceId: 'D13-A',
    deviceName: 'Differential Cryogenic ⁸⁷Sr/¹⁷¹Yb Optical-Lattice Clock Tower',
    linkedProtocol: 'Protocol P15 (Cat A)',
    linkedPlateOrFigure: 'Plate H13-V / Fig. H13-2',
    trl: 'TRL 8',
    provesOrTests: 'Baseline GR proper-time lapse Δν/ν = gΔh/c² across Δh ≥ 100 m',
    engineeringRecommendation: 'Active fiber phase-noise cancellation + differential tidal gravimetry',
    statisticalAndOpenScienceGate: 'Blinded frequency offset < 10⁻¹⁸; public raw time-series archive'
  },
  {
    deviceId: 'D13-B',
    deviceName: 'Cryogenic CANNEX Faraday-Shielded Sub-50 μm Force Balance',
    linkedProtocol: 'Protocol P14 (Cat C)',
    linkedPlateOrFigure: 'Plate H13-VI / Fig. H13-14',
    trl: 'TRL 6',
    provesOrTests: 'Goldberger–Wise radion Yukawa window λ ∈ [10, 38.6] μm',
    engineeringRecommendation: '1 μm electrostatic Faraday screen + 4.2 K Casimir calibration plates',
    statisticalAndOpenScienceGate: '5σ blinded separation (α_1 < 0.5) before unblinding fit residuals'
  },
  {
    deviceId: 'D13-C',
    deviceName: 'Dual-Rail 3D Superconducting Transmon GJW Cavity Simulator',
    linkedProtocol: 'Protocol P18 (Cat A)',
    linkedPlateOrFigure: 'Plate H13-VII / Fig. H13-15',
    trl: 'TRL 7',
    provesOrTests: 'Circuit-QED analog of TFD scrambling teleportation F > 0.72',
    engineeringRecommendation: 'Sign-reversible flux-pumped SNAIL coupler between 10 mK transmon cavities',
    statisticalAndOpenScienceGate: 'Sign-flip control g_int → −g_int; fidelity tomography open dataset'
  },
  {
    deviceId: 'D13-D',
    deviceName: 'CHIME / DSA-2000 Radio Dispersion + CTAO TeV Trigger Array',
    linkedProtocol: 'Protocol P17 (Cat C)',
    linkedPlateOrFigure: 'Plate H13-VIII / Fig. H13-9',
    trl: 'TRL 7–8',
    provesOrTests: 'Multi-messenger primordial white-hole burst inverse-mass spectral lag',
    engineeringRecommendation: 'Sub-200 ms VOEvent broker filtering extragalactic dispersion bursts',
    statisticalAndOpenScienceGate: 'Joint Poisson-Bayesian Bayes factor Δ ln Z ≥ 5 with sky-shuffle null'
  },
  {
    deviceId: 'D13-E',
    deviceName: 'Weak-QND Two-Path Interferometer & AuPd BKM Calorimeter',
    linkedProtocol: 'Protocol P18 (Cat A)',
    linkedPlateOrFigure: 'Plate H13-IX / Fig. H13-10, 11',
    trl: 'TRL 7',
    provesOrTests: 'Pure-state V² + D_QFI² = 1 & Landauer erasure ≥ 2.871 × 10⁻²¹ J/bit',
    engineeringRecommendation: 'Tunable cavity-photon QND coupling + Coulomb-blockade nanothermometry',
    statisticalAndOpenScienceGate: 'Zero free thermodynamic fit parameters against k_B T ln 2'
  },
  {
    deviceId: 'D13-F',
    deviceName: 'LVK O5 / Einstein Telescope Stacked Ringdown Echo Pipeline',
    linkedProtocol: 'Protocol P16 (Cat C)',
    linkedPlateOrFigure: 'Fig. H13-16 / Table 10.1',
    trl: 'TRL 6–7',
    provesOrTests: 'Post-merger echoes at Δt_echo = 2 r_*/c = 0.454 ms (10 M_☉, λ_port = 0.1)',
    engineeringRecommendation: 'Pre-registered matched-filter echo template stack across ≥ 30 BBH mergers',
    statisticalAndOpenScienceGate: 'Time-slide background trials & Δ ln Z ≥ 5 confirmation gate'
  }
];

export const H13_SCOPE_LIMITATIONS: H13ScopeLimitationRow[] = [
  { id: 'LIM-1', domain: 'Boundary-Free GJW Proof (App. I)', unsolvedProblem: 'Rigorously deriving negative Hadamard ANEC shift ∫⟨T_UU⟩ dU < 0 from a concrete causal microphysical coupling without AdS boundaries.', epistemicBoundary: 'Treated here as an assumed linear-response ansatz; queued for standalone *Note I*.' },
  { id: 'LIM-2', domain: 'Quadratic Bounce Prefactor c_HR', unsolvedProblem: 'Full spinfoam transition amplitude uncertainty c_HR ∈ [10⁻², 10¹] spanning three orders of magnitude.', epistemicBoundary: 'Only order-of-magnitude astrophysical bounds are claimed.' },
  { id: 'LIM-3', domain: ' Cosmological Relic Cutoff', unsolvedProblem: 'Bulk KK graviton overproduction and G_KK → γγ diffuse gamma limits require low reheating T_RH ≲ O(GeV) unless lifted by a warped mass gap.', epistemicBoundary: 'Explicitly noted as a UV completion constraint in Appendix H.' },
  { id: 'LIM-4', domain: 'Empirical Non-Distinction of Core', unsolvedProblem: 'Axioms A1–A4 reproduce standard QM+GR identically at low energy.', epistemicBoundary: 'Only Category C protocols (P14, P16, P17) test new physics.' }
];

export const H13_RESEARCH_ROADMAP_2026_2035: H13RoadmapPhaseRow[] = [
  { phase: 'Phase I · Mathematical & Archival Triage', horizon: '2026–2028', track: 'Theory & Open Data', milestone: 'Standalone *Note I* proof audit of boundary-free ANEC + LVK O4/O5 stacked echo search (P16).', deliverableOrGate: 'Pre-registered P16 template analysis & *Note I* referee verdict' },
  { phase: 'Phase II · Sub-50 μm Metrology & Triggers', horizon: '2027–2030', track: 'Lab & Multi-Messenger', milestone: 'CANNEX cryogenic Yukawa run across 10–38.6 μm (P14) + CHIME/CTAO live trigger (P17).', deliverableOrGate: '5σ exclusion or detection of |α_1| ≥ 0.5' },
  { phase: 'Phase III · 3G GW Decisive Gate', horizon: '2031–2035', track: 'Einstein Telescope / CE', milestone: 'High-SNR BBH ringdown echo test down to K_echo < 0.02 across λ_port ∈ [10⁻³, 10⁻¹].', deliverableOrGate: 'Final confirmation or retirement of Category C bounce/5D branches' }
];

export const H13_GLOSSARY: H13GlossaryEntry[] = [
  { term: 'Quantum Fisher Information', acronym: 'QFI', category: 'CATEGORY A — ESTABLISHED', definition: 'Riemannian metric on quantum states bounding parameter precision via Cramér–Rao and equaling 4 g_FS (SLD) on pure states [3, 14].' },
  { term: 'Bogoliubov–Kubo–Mori Metric', acronym: 'BKM', category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)', definition: 'Petz monotone Fisher metric generated by f_BKM(t) = (t − 1)/ln t governing relative-entropy dissipation.' },
  { term: 'Kubo–Martin–Schwinger State', acronym: 'KMS', category: 'CATEGORY A — ESTABLISHED', definition: 'Equilibrium state ω_ξ generating modular flow σ_t(A) = Δ^{it} A Δ^{−it} in AQFT [1, 2].' },
  { term: 'Horndeski Type Ia Sector', acronym: 'GW170817 Lock', category: 'CATEGORY C — CONJECTURAL', definition: 'Scalar-tensor EFT subset with G_4,X = G_5 = 0 ensuring exact tensor speed c_GW = c [18, 19].' },
  { term: 'Averaged Null Energy Condition', acronym: 'ANEC', category: 'CATEGORY A — ESTABLISHED', definition: 'Integral ∫⟨T_UU⟩ dU along a complete achronal null geodesic; positive in free QFT, locally negative under double-trace coupling [25].' },
  { term: 'Lee et al. (2020) Bound', acronym: 'Eöt-Wash 2020', category: 'CATEGORY A — ESTABLISHED', definition: 'Torsion-balance test down to 52 μm constraining Yukawa length λ < 38.6 μm at |α|=1 (m_1 ≥ 5.112 meV) [28].' },
  { term: 'Barbero–Immirzi Parameter', acronym: 'γ = 0.2375', category: 'CATEGORY C — CONJECTURAL', definition: 'LQG area-spectrum constant fixing ρ_max = √3/(32π²γ³) ρ_Pl = 0.409374 ρ_Pl [20, 21].' },
  { term: 'Completely Positive Trace-Preserving', acronym: 'CPTP', category: 'CATEGORY A — ESTABLISHED', definition: 'Standard quantum channel preserving positivity and trace normalization under open-system dynamics [15].' }
];

export const H13_FAQ: H13FaqEntry[] = [
  {
    id: 'FAQ-1',
    question: 'Does Axiom A1 derive time or predict deviations from standard quantum mechanics?',
    shortAnswer: 'No. Axiom A1 is a pure geometric reparametrization onto projective Hilbert space PU(H).',
    detailedExplanation: 'Because Anandan–Aharonov ds_FS/dτ = ΔH/ℏ already presupposes Schrödinger parameter τ, defining dτ_obs := [ℏ/(2ΔH_loc)] ds_QFI evaluates identically to dt and introduces zero empirical departures from QM or GR.',
    category: 'CATEGORY B2 — AXIOMATIC / DERIVED WITHIN IGRT'
  },
  {
    id: 'FAQ-2',
    question: 'Why did the earlier 5D magnetic ansatz F_{xy} fail to balance all five Einstein equations?',
    shortAnswer: 'A single magnetic field F_{xy} breaks 3D isotropy (T^x_x = +B²/2 vs. T^{x_2}_{x_2} = −B²/2), forcing B = 0.',
    detailedExplanation: 'Replacing F_{xy} with an SO(3)-isotropic bulk radial electric flux F_{0y} = E_5 e^{ky} Φ_0 yields T^A_B^EM = diag(−1/2, +1/2, +1/2, +1/2, −1/2) E_5², which together with M_5³ Λ_5 + V_GW = −E_5²/2 closes all five diagonal components identically (M_5³ k²/Φ_0² = E_5²).',
    category: 'CATEGORY C — CONJECTURAL'
  },
  {
    id: 'FAQ-3',
    question: 'Are macroscopic transit portals achievable under the Eöt-Wash and Casimir bounds?',
    shortAnswer: 'No. Across R_5 ≤ 38.6 μm, η_fold ∈ [0.6366, 0.8415] saves only ~21–47 femtoseconds.',
    detailedExplanation: 'Laboratory devices (Table 9.2) test Yukawa gravity (P14), circuit-QED GJW teleportation analogs (P18), and horizon wave echoes (P16); macroscopic human or cargo portals are impossible within this EFT.',
    category: 'CATEGORY D — SPECULATIVE ENGINEERING'
  }
];

export const H13_ACTION_FIELD_TABLE: H13ActionFieldRow[] = [
  { sector: '5D Bulk Einstein–Hilbert + Λ_5', lagrangianTerm: '(M_5³/2)(R^(5) − 2Λ_5)', eulerLagrangeEquation: 'M_5³ G^A_B = T^A_B^EM − (M_5³ Λ_5 + V_GW) δ^A_B', symmetryOrConstraint: 'M_5³ k²/Φ_0² = E_5²; G_{AB}k^A k^B ≥ 0', category: 'CATEGORY C — CONJECTURAL' },
  { sector: 'Goldberger–Wise Radion φ', lagrangianTerm: '−1/2 (∂φ)² − V_GW(φ)', eulerLagrangeEquation: '□_5 φ − ∂V_GW/∂φ = 0', symmetryOrConstraint: 'Locks R_5 < 38.6 μm (m_1 ≥ 5.112 meV)', category: 'CATEGORY C — CONJECTURAL' },
  { sector: '5D Isotropic Electric Flux F_{0y}', lagrangianTerm: '−1/4 F_{AB} F^{AB}', eulerLagrangeEquation: '∂_y(√(−g_5) F^{0y}) = 0 (F_{0y} = E_5 e^{ky} Φ_0)', symmetryOrConstraint: 'Preserves SO(3) brane isotropy; closes all 5 diagonal eqs', category: 'CATEGORY C — CONJECTURAL' },
  { sector: 'Horndeski Type Ia Scalar', lagrangianTerm: 'G_4(φ) R^(4) + G_3(φ,X) □φ + K(φ,X)', eulerLagrangeEquation: 'Second-order EFT (G_4,X = G_5 = 0)', symmetryOrConstraint: 'c_GW = c locked (GW170817 [18, 19])', category: 'CATEGORY C — CONJECTURAL' },
  { sector: 'Brane Matter & BKM Open Sector', lagrangianTerm: 'L_SM + modular open coupling', eulerLagrangeEquation: 'dS_Araki/dτ = −g_ij^BKM θ̇^i θ̇^j ≤ 0', symmetryOrConstraint: 'Contracted Bianchi closure ∇^μ G_μν = 0', category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)' }
];

export const H13_KK_CONSTRAINTS_TABLE: H13KaluzaKleinBoundRow[] = [
  { experimentOrDomain: 'Eöt-Wash Torsion Balance (Lee et al. 2020 [28])', scaleProbed: '52 μm minimum separation (λ < 38.6 μm at |α_1|=1)', observationalBound: '95% CL Yukawa exclusion λ ≥ 38.6 μm (prior Kapner 2007 [29]: 44 μm)', h13ParameterMatch: 'm_1 = ℏc/38.6 μm = 5.112 meV; M_5 = (M_Pl,red²/(2π R_5))^{1/3} = 1.690 × 10⁸ GeV', status: 'Surviving open window λ < 38.6 μm (P14)' },
  { experimentOrDomain: 'LHC Run 2 Monojet / Graviton', scaleProbed: '√s = 13 TeV (M_D ≳ 5–10 TeV)', observationalBound: 'Excludes unwarped M_5 below ~10 TeV', h13ParameterMatch: 'M_5 = 1.690 × 10⁸ GeV exceeds LHC reach by > 10⁴', status: 'Satisfied' },
  { experimentOrDomain: 'SN 1987A Cooling (Hannestad–Raffelt n=1 [30])', scaleProbed: 'Core T_SN ~ 30 MeV (emission ∝ T_SN³ / M_5³)', observationalBound: 'n=1 bound M_5 ≳ O(10⁷–10⁸) GeV (note: 30 TeV bound applies to n=2 ADD)', h13ParameterMatch: 'M_5 = 1.690 × 10⁸ GeV satisfies n=1 cooling limits', status: 'Satisfied' },
  { experimentOrDomain: 'Early-Universe KK Relic / Diffuse γ (G_KK → γγ)', scaleProbed: 'MeV–GeV thermal bath', observationalBound: 'Requires low reheating T_RH ≲ O(GeV) unless warped spectrum lifts m_1', h13ParameterMatch: 'Restricts UV thermal history (LIM-3)', status: 'UV Constraint' },
  { experimentOrDomain: 'GW170817 + GRB 170817A [18]', scaleProbed: '|c_GW/c − 1| < 10⁻¹⁵', observationalBound: 'Excludes quartic/quintic Horndeski G_4,X, G_5 ≠ 0 [19]', h13ParameterMatch: 'Type Ia lock G_4,X = G_5 = 0 yields c_GW ≡ c', status: 'Satisfied' }
];

export const H13_GJW_ASSUMPTION_MATRIX: H13GjwAssumptionRow[] = [
  { gjwAssumption: 'Two asymptotic AdS boundaries', originalRoleInAdS: 'Supports non-normalizable CFT sources at r → ∞', boundaryFreeStatus: 'Replaced', quasiLocalReplacement: 'Finite Brown–York quasilocal screens at r_c > r_+' },
  { gjwAssumption: 'Double-trace boundary coupling g ∫ O_L O_R', originalRoleInAdS: 'Injects negative stress via causal coupling', boundaryFreeStatus: 'Open / Assumed Ansatz', quasiLocalReplacement: 'Causal bosonic transducer coupling g ∫ dτ f(τ) Φ_L Φ_R (assumed Rindler linear response)' },
  { gjwAssumption: 'Large-N semiclassical factorization', originalRoleInAdS: 'Suppresses loop corrections to ΔU', boundaryFreeStatus: 'Preserved', quasiLocalReplacement: 'Assumed in semiclassical screen limit N_eff ≫ 1' },
  { gjwAssumption: 'Hubeny–Rangamani–Takayanagi (HRT) screen', originalRoleInAdS: 'Links entanglement wedge to extremal surface', boundaryFreeStatus: 'Open / Assumed Ansatz', quasiLocalReplacement: 'Replaced by direct Hadamard point-splitting ansatz pending Note I proof' }
];

export const H13_GJW_PROOF_STEPS: H13GjwProofStep[] = [
  { stepNumber: 'Step 1', stageTitle: 'Quasilocal Screen Setup', adsOriginalAssumption: 'Asymptotic AdS_d+1 boundary', h13NonAdsProofMechanism: 'Truncate static exterior at Brown–York sphere r_c > r_+ with causal Rindler coordinates.', keyInequalityOrIdentity: 'ds²_near = −κ² ρ² dt² + dρ² + r_+² dΩ²' },
  { stepNumber: 'Step 2', stageTitle: 'Bosonic Transducer Coupling', adsOriginalAssumption: 'Boundary CFT double-trace O_L O_R', h13NonAdsProofMechanism: 'Couple two localized scalar probes Φ_L, Φ_R across external causal baseline Δt_ext ≥ d_ext/c.', keyInequalityOrIdentity: 'H_int(τ) = g f(τ) Φ_L(r_c, τ) Φ_R(r_c, τ)' },
  { stepNumber: 'Step 3', stageTitle: 'Linear-Response ANEC Ansatz', adsOriginalAssumption: 'Exact AdS Green function ΔU < 0', h13NonAdsProofMechanism: 'First-order response of Hadamard commutator assumes ∫ ⟨T_UU⟩ dU = −|C| g < 0 for appropriate sign(g).', keyInequalityOrIdentity: 'ΔU = (8πG / κ) ∫ dU ⟨T_UU⟩ < 0 (Ansatz)' },
  { stepNumber: 'Step 4', stageTitle: 'Horizon Crossing Bound', adsOriginalAssumption: 'Asymptotic boundary-to-boundary lightcone', h13NonAdsProofMechanism: 'Probe signal shifts across U = 0 horizon by ΔU < 0 while remaining strictly subluminal externally.', keyInequalityOrIdentity: 'Δt_ext ≥ d_ext / c (no-signaling preserved)' },
  { stepNumber: 'Step 5', stageTitle: 'Open Nonlinear Closure Note', adsOriginalAssumption: 'Full holographic duality', h13NonAdsProofMechanism: 'Nonlinear backreaction & renormalization beyond linear response deferred to standalone Note I.', keyInequalityOrIdentity: 'Proposition H13.8 (Conditional Proof Sketch)' }
];

export const H13_WH_PIPELINE_SPEC: H13WhiteHolePipelineRow[] = [
  { benchmarkId: 'B1 · Planck Remnant', massGrams: '2.378 × 10⁻⁵ g (1.09236 M_Pl)', bounceRadiusM: '2.39 × 10⁻³⁵ m', bounceAccelMs2: '8.37 × 10⁵¹ m/s²', interiorProperSec: '1.44 × 10⁻⁴³ s', exteriorDelayBranch: '6.43 × 10⁻⁴⁴ s (remnant)', observableOrRk4Check: 'Cold relic root f(r_+) = 0' },
  { benchmarkId: 'B2 · PBH Page (f=15.35 / 24.14)', massGrams: '4.30 × 10¹⁴ g (f=15.35) / 5.00 × 10¹⁴ g (f=24.14)', bounceRadiusM: '1.45 × 10⁻²⁸ m', bounceAccelMs2: '4.10 × 10⁶⁴ m/s²', interiorProperSec: '2.84 × 10⁻²⁴ s', exteriorDelayBranch: 'τ_WH^(3) = 13.8 Gyr (today)', observableOrRk4Check: 'CHIME / CTAO trigger (P17)' },
  { benchmarkId: 'B3 · PBH Reference 10¹⁵ g', massGrams: '1.000 × 10¹⁵ g', bounceRadiusM: '1.92 × 10⁻²⁸ m', bounceAccelMs2: '5.43 × 10⁶⁴ m/s²', interiorProperSec: '6.60 × 10⁻²⁴ s', exteriorDelayBranch: 'τ_WH^(2) = 1.138 × 10⁻⁴ s; τ_WH^(3) = 1.67 × 10¹² yr', observableOrRk4Check: 'RK4 u_min = 1.000000' },
  { benchmarkId: 'B4 · Quadratic Today (c_HR=1)', massGrams: '6.186 × 10²⁵ g', bounceRadiusM: '7.60 × 10⁻²⁵ m', bounceAccelMs2: '2.14 × 10⁶⁸ m/s²', interiorProperSec: '4.09 × 10⁻¹³ s', exteriorDelayBranch: 'τ_WH^(2) = 13.8 Gyr (today)', observableOrRk4Check: 'Burst limit vs. optical/radio' },
  { benchmarkId: 'B5 · Stellar BH (10 M_☉)', massGrams: '1.988 × 10³⁴ g', bounceRadiusM: '5.21 × 10⁻²² m', bounceAccelMs2: '1.47 × 10⁷¹ m/s²', interiorProperSec: '1.310 × 10⁻⁴ s', exteriorDelayBranch: 'τ_WH^(2) = 1.426 × 10²⁷ yr (4.500 × 10³⁴ s); τ_WH^(3) = 2.095 × 10⁶⁷ yr', observableOrRk4Check: 'Δt_echo = 2r_*/c = 0.454 ms; κ = 5.076 × 10³ s⁻¹' },
  { benchmarkId: 'B6 · AGN SMBH (10⁸ M_☉)', massGrams: '1.988 × 10⁴¹ g', bounceRadiusM: '1.12 × 10⁻¹⁹ m', bounceAccelMs2: '3.16 × 10⁷³ m/s²', interiorProperSec: '1.310 × 10³ s', exteriorDelayBranch: 'τ_WH^(2) = 1.426 × 10⁴¹ yr; τ_WH^(3) = 2.095 × 10⁹¹ yr', observableOrRk4Check: 'Surpasses cosmic horizon' }
];

export const H13_RK4_SENSITIVITY_TABLE: H13Rk4SensitivityRow[] = [
  { runCase: 'Baseline RK4 (ds = 0.002)', stepSizeDs: '0.0020', initialRadiusU0: 'u(0) = 2.0', uMinObserved: '1.00000000', bounceAccelD2uDs2: '+1.5000000', maxHamiltonianResidual: '1.4 × 10⁻¹²' },
  { runCase: 'Coarse Check (ds = 0.010)', stepSizeDs: '0.0100', initialRadiusU0: 'u(0) = 2.0', uMinObserved: '1.00000004', bounceAccelD2uDs2: '+1.4999998', maxHamiltonianResidual: '8.7 × 10⁻¹⁰' },
  { runCase: 'Fine Check (ds = 0.0005)', stepSizeDs: '0.0005', initialRadiusU0: 'u(0) = 2.0', uMinObserved: '1.00000000', bounceAccelD2uDs2: '+1.5000000', maxHamiltonianResidual: '5.5 × 10⁻¹⁵' },
  { runCase: 'Outer Shell (u_0 = 5.0)', stepSizeDs: '0.0020', initialRadiusU0: 'u(0) = 5.0', uMinObserved: '1.00000000', bounceAccelD2uDs2: '+1.5000000', maxHamiltonianResidual: '2.1 × 10⁻¹²' }
];

export const H13_DEFINITIONS_LIST: H13DefinitionEntry[] = [
  { id: 'Def H13.1', term: 'QFI Proper Clock Parameter', symbol: 'τ_obs', formalDefinition: 'dτ_obs := [ℏ / (2 ΔH_loc)] ds_QFI along projective state trajectories on PU(H).' },
  { id: 'Def H13.2', term: 'Gravitational Lapse Ratio', symbol: 'α_mod', formalDefinition: 'α_mod(x) := √(−g_00(x)) along static Killing congruences.' },
  { id: 'Def H13.3', term: 'BKM Entropy Dissipation Rate', symbol: 'σ_BKM', formalDefinition: 'σ_BKM := −d S_Araki(ρ_τ || ω_ξ)/dτ = g_ij^BKM θ̇^i θ̇^j ≥ 0.' },
  { id: 'Def H13.4', term: 'Bulk Folding Ratio', symbol: 'η_fold', formalDefinition: 'η_fold := sin(kΔx/2)/(kΔx/2) comparing bulk null transit to brane span Δx.' },
  { id: 'Def H13.5', term: 'LQG Bounce Turning Scale', symbol: 'R_bounce', formalDefinition: 'R_bounce := [3M / (4π ρ_max)]^{1/3} with ρ_max = 0.409374 ρ_Pl (γ = 0.2375).' }
];

export const H13_THEOREMS_LIST: H13TheoremIndexEntry[] = [
  { id: 'Prop H13.1', boxKind: 'proposition', title: 'Geometric Reparametrization of Proper Time on PU(H)', location: 'Sec. 4.1', category: 'CATEGORY B2 — AXIOMATIC / DERIVED WITHIN IGRT', dependencies: 'Ax. A1, [3, 4]' },
  { id: 'Theorem H13.2', boxKind: 'theorem', title: 'Redshift & Proper Clock Ratio along Static Killing Vectors', location: 'Sec. 5.1', category: 'CATEGORY A — ESTABLISHED', dependencies: 'Ax. A2, [1, 12]' },
  { id: 'Theorem H13.3', boxKind: 'theorem', title: 'Metric Consistency of Operational Light-Cone Distance', location: 'Sec. 5.2', category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)', dependencies: 'Ax. A3, [8]' },
  { id: 'Theorem H13.4', boxKind: 'theorem', title: 'Spacelike Commutativity & Split Type I Local Clock Independence', location: 'Sec. 5.3', category: 'CATEGORY A — ESTABLISHED', dependencies: 'Ax. A3, [9]' },
  { id: 'Theorem H13.5', boxKind: 'theorem', title: 'Petz Operator-Monotone Family & Pure-State SLD Reduction', location: 'Sec. 6.1', category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)', dependencies: '[13, 14, 15, 16]' },
  { id: 'Theorem H13.6', boxKind: 'theorem', title: 'Coarse-Grained Detector Pointer Stability via Quantum Darwinism', location: 'Sec. 7.1', category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)', dependencies: '[37, 38]' },
  { id: 'Theorem H13.7', boxKind: 'theorem', title: 'Unified Margolus–Levitin / Mandelstam–Tamm Update Rate Ceiling', location: 'Sec. 8.1', category: 'CATEGORY A — ESTABLISHED', dependencies: '[5, 6, 7]' },
  { id: 'Prop H13.8', boxKind: 'proposition', title: 'Isotropic 5D Bulk Closure (F_{0y}) & Boundary-Free GJW Linear-Response Sketch', location: 'Sec. 9.2', category: 'CATEGORY C — CONJECTURAL', dependencies: 'Ax. A5, Apps. B, G, H, I' },
  { id: 'Prop H13.9', boxKind: 'proposition', title: 'Regular White-Hole Core Rebound & Timescale Branches', location: 'Sec. 10.1', category: 'CATEGORY C — CONJECTURAL', dependencies: '[20, 32, 33], App. D, J' },
  { id: 'Theorem H13.10', boxKind: 'theorem', title: 'Pure Two-Path Complementarity V² + D_QFI² = 1 & Mixed Extension', location: 'Sec. 11.1', category: 'CATEGORY A — ESTABLISHED', dependencies: '[16, 36]' },
  { id: 'Theorem H13.11', boxKind: 'theorem', title: 'BKM Relative-Entropy Contraction & Landauer Dissipation Lower Bound', location: 'Sec. 12.1', category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)', dependencies: 'Ax. A4, [10, 17, 40]' },
  { id: 'Theorem H13.12', boxKind: 'theorem', title: 'Classical Markov-Blanket Variational Bound (Decoupled from 5D)', location: 'Sec. 13.1', category: 'CATEGORY A — ESTABLISHED', dependencies: '[41, 42]' }
];

export const H13_APPENDICES: H13AppendixSection[] = [
  {
    letter: 'A',
    title: 'Projective Hilbert Space & QFI Reparametrization Identity',
    category: 'CATEGORY B2 — AXIOMATIC / DERIVED WITHIN IGRT',
    summary: 'Shows explicitly that dτ_obs := [ℏ/(2ΔH_loc)] ds_QFI reduces identically to dt under unitary evolution.',
    equations: [
      {
        label: '(A.1)',
        unicodeHtml: 'd<i>s</i><sub>QFI</sub>² = 4 d<i>s</i><sub>FS</sub>² = (4 Δ<i>H</i><sub>loc</sub>² / <i>ℏ</i>²) d<i>t</i>² &nbsp;⇒&nbsp; d<i>τ</i><sub>obs</sub> := [<i>ℏ</i>/(2Δ<i>H</i><sub>loc</sub>)] d<i>s</i><sub>QFI</sub> ≡ d<i>t</i>',
        caption: 'Pure-state SLD metric identity showing zero non-trivial empirical deviation from QM.',
        category: 'CATEGORY B2 — AXIOMATIC / DERIVED WITHIN IGRT'
      }
    ],
    bodyParagraphs: [
      'For any pure state |ψ(t)⟩ evolving under iℏ ∂_t |ψ⟩ = H_loc |ψ⟩, the Fubini–Study distance satisfies ds_FS/dt = ΔH_loc/ℏ [4]. Since the symmetric logarithmic derivative quantum Fisher metric equals I_SLD = 4 g_FS on pure states [3, 14], ds_QFI/dt = 2 ΔH_loc/ℏ. Defining dτ_obs := [ℏ/(2ΔH_loc)] ds_QFI therefore returns dτ_obs ≡ dt identically; Axiom A1 is a pure geometric reparametrization and does not derive time independently.'
    ]
  },
  {
    letter: 'B',
    title: 'Exact SO(3)-Isotropic 5D Bulk Closure & Geodesic Folding Derivation',
    category: 'CATEGORY C — CONJECTURAL',
    summary: 'Replaces the inconsistent F_{xy} ansatz with radial bulk electric flux F_{0y} = E_5 e^{ky} Φ_0, closing all 5 diagonal Einstein components.',
    equations: [
      {
        label: '(B.1)',
        unicodeHtml: '<i>G</i><sup>0</sup><sub>0</sub> = <i>G</i><sup><i>y</i></sup><sub><i>y</i></sub> = 0, &nbsp;&nbsp; <i>G</i><sup>1</sup><sub>1</sub> = <i>G</i><sup>2</sup><sub>2</sub> = <i>G</i><sup>3</sup><sub>3</sub> = <i>k</i>² / <i>Φ</i><sub>0</sub>² = <i>E</i><sub>5</sub>² / <i>M</i><sub>5</sub>³',
        caption: 'Exact diagonal Einstein–Maxwell balance across all 5 components with M_5³ Λ_5 + V_GW(φ_0) = −E_5²/2.',
        category: 'CATEGORY C — CONJECTURAL'
      },
      {
        label: '(B.2)',
        unicodeHtml: '<i>T</i><sup><i>A</i></sup><sub><i>B</i></sub><sup>EM</sup> = diag(−1/2, +1/2, +1/2, +1/2, −1/2) <i>E</i><sub>5</sub>², &nbsp;&nbsp; ∂<sub><i>y</i></sub>(√(−<i>g</i><sub>5</sub>) <i>F</i><sup>0<i>y</i></sup>) = 0',
        caption: 'Isotropic 5D Maxwell stress tensor generated by F_{0y} = E_5 e^{ky} Φ_0.',
        category: 'CATEGORY C — CONJECTURAL'
      }
    ],
    bodyParagraphs: [
      'For ds_5² = −e^{2ky} c² dt² + dx₁² + dx₂² + dx₃² + Φ_0² dy², the Einstein tensor components are G^0_0 = G^y_y = 0 and G^1_1 = G^2_2 = G^3_3 = +k²/Φ_0². An earlier single-component magnetic ansatz F_{xy} yields T^1_1 = +B²/2 vs. T^2_2 = T^3_3 = −B²/2, which violates 3D isotropy and forces B = 0 ⇒ k = 0.',
      'By contrast, choosing an SO(3)-invariant bulk radial electric field F_{0y} = E_5 e^{ky} Φ_0 satisfies Maxwell’s equation ∂_y(√(−g_5) F^{0y}) = ∂_y(−E_5) = 0 identically and gives T^A_B^EM = diag(−1/2, +1/2, +1/2, +1/2, −1/2) E_5². Together with a bulk vacuum energy M_5³ Λ_5 + V_GW(φ_0) = −E_5²/2 (T^A_B^vac = +E_5²/2 δ^A_B), all five diagonal Einstein equations close identically: M_5³ G^0_0 = M_5³ G^y_y = 0 and M_5³ G^i_i = E_5² = M_5³ k²/Φ_0², while satisfying the 5D null energy condition G_{AB} k^A k^B ≥ 0.',
      'Null geodesics with brane impact parameter cos θ = e^{−ky_turn} satisfy dt_bulk / (Δx/c) = sin(kΔx/2)/(kΔx/2). Evaluating at kΔx = 2 rad (turning angle θ = 1 rad) gives η_fold = sin(1)/1 = 0.841471; the extremal semicircle turnaround (θ = π/2) yields the horizon limit 2/π = 0.636620, whereas the UV short-distance limit kΔx → 0 returns 1.'
    ]
  },
  {
    letter: 'C',
    title: 'Petz Monotone Fisher Metrics & Mixed-State Bounds',
    category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)',
    summary: 'Establishes the Morozova–Chentsov–Petz classification and BKM dissipation integral.',
    equations: [
      {
        label: '(C.1)',
        unicodeHtml: '<i>f</i><sub>min</sub>(<i>t</i>) = 2<i>t</i>/(1+<i>t</i>) ≤ <i>f</i><sub>BKM</sub>(<i>t</i>) = (<i>t</i>−1)/ln <i>t</i> ≤ <i>f</i><sub>SLD</sub>(<i>t</i>) = (1+<i>t</i>)/2',
        caption: 'Ordering of operator-monotone Petz functions on full-rank density operators [13, 15].',
        category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)'
      }
    ],
    bodyParagraphs: [
      'On mixed quantum states there is no unique contractive Riemannian metric; rather, Petz (1996) [13] classified an infinite family indexed by operator-monotone functions f(t) satisfying f(t) = t f(1/t). Pure-state clocks collapse the symmetric sector to 4 g_FS, while finite-temperature open-system entropy production tracks the BKM metric.'
    ]
  },
  {
    letter: 'D',
    title: 'Hayward Limiting-Curvature Core & Remnant Mass',
    category: 'CATEGORY C — CONJECTURAL',
    summary: 'Derives the regular horizon root M_rem = 1.09236 M_Pl from ρ_max = 0.409374 ρ_Pl.',
    equations: [
      {
        label: '(D.1)',
        unicodeHtml: '<i>f</i>(<i>r</i>) = 1 − 2<i>GMr</i>² / (<i>r</i>³ + 2<i>GM</i> ℓ₀²), &nbsp;&nbsp; <i>M</i><sub>rem</sub> = (3√3/4) (<i>c</i>² ℓ₀ / <i>G</i>) = 1.09236 <i>M</i><sub>Pl</sub>',
        caption: 'Hayward metric function and extremal zero-temperature remnant root [31].',
        category: 'CATEGORY C — CONJECTURAL'
      }
    ],
    bodyParagraphs: [
      'With Barbero–Immirzi γ = 0.2375 [20, 21], the LQG critical density ρ_max = √3/(32π²γ³) ρ_Pl = 0.409374 ρ_Pl sets the regular core scale ℓ_0 = 0.841 ℓ_Pl, yielding the extremal double-root remnant M_rem = 1.09236 M_Pl.'
    ]
  },
  {
    letter: 'E',
    title: 'Tomita–Takesaki Modular Flow & Redshift Link',
    category: 'CATEGORY A — ESTABLISHED',
    summary: 'Bisognano–Wichmann modular time in local Rindler wedges and optical clock baselines.',
    equations: [
      {
        label: '(E.1)',
        unicodeHtml: '<i>σ</i><sub><i>t</i></sub>(<i>A</i>) = Δ<sub><i>ξ</i></sub><sup><i>it</i></sup> <i>A</i> Δ<sub><i>ξ</i></sub><sup>−<i>it</i></sup>, &nbsp;&nbsp; <i>K</i><sub><i>ξ</i></sub> = 2<i>π</i> <i>H</i><sub>boost</sub> / (<i>ℏκ</i>)',
        caption: 'Modular automorphism group for local Rindler horizon wedges [1, 2].',
        category: 'CATEGORY A — ESTABLISHED'
      }
    ],
    bodyParagraphs: [
      'For any wedge region in Minkowski or locally flat spacetime, the vacuum modular operator Δ_ξ generates Lorentz boosts along the Killing horizon [1], linking local KMS temperature to surface gravity κ = c/(2r_+).'
    ]
  },
  {
    letter: 'F',
    title: 'Quantum Speed Limits & Detector Coarse-Graining',
    category: 'CATEGORY A — ESTABLISHED',
    summary: 'Margolus–Levitin and Mandelstam–Tamm update bounds (6.040 × 10³³ updates s⁻¹ J⁻¹).',
    equations: [
      {
        label: '(F.1)',
        unicodeHtml: '<i>ν</i><sub>max</sub> = min(2⟨<i>E</i>⟩/(<i>πℏ</i>), 2Δ<i>E</i>/(<i>πℏ</i>)) = 6.040 × 10³³ updates s⁻¹ J⁻¹',
        caption: 'Exact orthogonalization ceiling with ground-state offset E_0 = 0 [5, 6, 7].',
        category: 'CATEGORY A — ESTABLISHED'
      }
    ],
    bodyParagraphs: [
      'Macroscopic instruments integrating over 80 ms sample ~1.48 × 10⁴² Planck durations via environment-induced superselection and Quantum Darwinism [37], without requiring non-unitary collapse or neural quantum hypotheses.'
    ]
  },
  {
    letter: 'G',
    title: 'Unified 5D + 4D Variational Action & Horndeski Type Ia Lock',
    category: 'CATEGORY C — CONJECTURAL',
    summary: 'Specifies all five action sectors (Table G.1), Type Ia tensor speed c_GW = c, and Bianchi conservation.',
    equations: [
      {
        label: '(G.1)',
        unicodeHtml: '<i>c</i><sub>GW</sub>² / <i>c</i>² = <i>G</i><sub>4</sub> / (<i>G</i><sub>4</sub> − 2<i>X G</i><sub>4,<i>X</i></sub> + <i>X φ̈ G</i><sub>5,<i>X</i></sub> …) ≡ 1 &nbsp;&nbsp;(<i>G</i><sub>4,<i>X</i></sub> = <i>G</i><sub>5</sub> = 0)',
        caption: 'Kobayashi (2019) [19] Type Ia Horndeski subclass satisfying GW170817 [18] with surviving G_2, G_3, G_4(φ).',
        category: 'CATEGORY C — CONJECTURAL'
      }
    ],
    bodyParagraphs: [
      'Setting G_4,X = G_5 = 0 leaves surviving healthy Horndeski functions G_2(φ,X) = K(φ,X), G_3(φ,X), and conformal G_4(φ), locking c_GW = c identically at all cosmological epochs while avoiding ghost instabilities (1 + 2 G_4,X / M_Pl² = 1).'
    ]
  },
  {
    letter: 'H',
    title: 'Kaluza–Klein Spectrum, Lee et al. (2020) Bound & Cosmological Limits',
    category: 'CATEGORY C — CONJECTURAL',
    summary: 'Computes m_1 = 5.112 meV and M_5 = 1.690 × 10⁸ GeV at λ = 38.6 μm plus n=1 SN 1987A & reheating bounds.',
    equations: [
      {
        label: '(H.1)',
        unicodeHtml: '<i>m</i><sub>1</sub> <i>c</i>² = <i>ℏc</i> / <i>R</i><sub>5</sub> = 5.112 meV, &nbsp;&nbsp; <i>M</i><sub>5</sub> = [<i>M</i><sub>Pl,red</sub>² / (2<i>πR</i><sub>5</sub>)]<sup>1/3</sup> = 1.690 × 10⁸ GeV &nbsp;(<i>R</i><sub>5</sub> = 38.6 <i>μ</i>m)',
        caption: 'First KK mass and fundamental 5D scale at the Lee et al. (2020) [28] 95% CL limit (52 μm minimum separation).',
        category: 'CATEGORY C — CONJECTURAL'
      }
    ],
    bodyParagraphs: [
      'Lee et al. (2020) [28] probed torsion-balance gravity down to 52 μm separation, excluding |α_1| = 1 Yukawa fifth forces down to λ < 38.6 μm (updating the earlier 44 μm limit of Kapner et al. 2007 [29]). At R_5 = 38.6 μm, m_1 = 5.112 meV and M_5 = 1.690 × 10⁸ GeV.',
      'Astrophysically, n=1 extra-dimension emission in SN 1987A scales as T_SN³ / M_5³ rather than the n=2 30 TeV bound, easily satisfied at M_5 = 1.69 × 10⁸ GeV [30]. Early-universe G_KK → γγ diffuse gamma-ray relic production requires a low reheating temperature T_RH ≲ O(GeV) unless lifted by a warped radion mass gap (LIM-3).'
    ]
  },
  {
    letter: 'I',
    title: 'Boundary-Free GJW Linear-Response Ansatz & Open Proof Status (Note I)',
    category: 'CATEGORY C — CONJECTURAL',
    summary: 'Formulates the quasilocal Brown–York GJW ansatz transparently as an open conditional conjecture.',
    equations: [
      {
        label: '(I.1)',
        unicodeHtml: 'Δ<i>U</i> = (8<i>πG</i>/<i>κ</i>) ∫ d<i>U</i> ⟨<i>T</i><sub><i>UU</i></sub>⟩ &lt; 0 &nbsp;(Ansatz), &nbsp;&nbsp; Δ<i>t</i><sub>ext</sub> ≥ <i>d</i><sub>ext</sub>/<i>c</i>',
        caption: 'Assumed Rindler linear-response negative ANEC integral; rigorous derivation queued for standalone Note I.',
        category: 'CATEGORY C — CONJECTURAL'
      }
    ],
    bodyParagraphs: [
      'Whereas Gao, Jafferis, and Wall [25] derived traversability rigorously in asymptotically AdS_2/3 spacetimes via boundary CFT double-trace couplings, extending their result to finite Brown–York screens at r_c > r_+ relies here on a causal bosonic transducer ansatz H_int = g f(τ) Φ_L Φ_R and an assumed negative linear-response Hadamard integral ∫⟨T_UU⟩ dU < 0.',
      'We explicitly distinguish this open conjecture from the Doplicher–Longo split property (which guarantees independent spacelike algebras, not traversable wormhole backreaction). Under R_5 ≤ 38.6 μm, any bulk geodesic gain saves only ~21–47 fs, confirming macroscopic transit portals are physically unachievable.'
    ]
  },
  {
    letter: 'J',
    title: 'Reproducible White-Hole Bounce ODE, Timescales & Echo Benchmarks',
    category: 'CATEGORY C — CONJECTURAL',
    summary: 'Documents the RK4 bounce integrator and exact SI white-hole timescales, echo lag, and Page evaporation mass.',
    equations: [
      {
        label: '(J.1)',
        unicodeHtml: '<i>τ</i><sub>WH</sub><sup>(2)</sup>(10 <i>M</i><sub>☉</sub>) = 4.500 × 10³⁴ s = 1.426 × 10²⁷ yr, &nbsp;&nbsp; Δ<i>t</i><sub>echo</sub> = 2 <i>r</i><sub>*</sub> / <i>c</i> = 0.454 ms, &nbsp;&nbsp; <i>κ</i> = <i>c</i>/(2<i>r</i><sub>+</sub>) = 5.076 × 10³ s⁻¹',
        caption: 'Corrected 10 M_☉ quadratic bounce time, echo delay (λ_port = 0.1, r_* = 68.00 km), and Schwarzschild surface gravity.',
        category: 'CATEGORY C — CONJECTURAL'
      }
    ],
    bodyParagraphs: [
      'Dimensionless ODE d²u/ds² = −1/(2u²) + 2/u⁵ with initial u(0) = 2.0 reaches turning point u_min = 1.000000 and rebound acceleration +3/2 with max Hamiltonian residual < 10⁻¹⁰ across 4,400 RK4 steps. Note that scripts/verify-igrt-h13.mjs verifies arithmetic identities and ODE residuals locally—not physical reality.',
      'For 10 M_☉ (r_+ = 29.53 km), quadratic bounce time t_Pl (M/M_Pl)² = 4.500 × 10³⁴ s = 1.426 × 10²⁷ yr (spanning [1.43×10²⁵, 1.43×10²⁸] yr for c_HR ∈ [10⁻², 10¹]); Schwarzschild surface gravity is κ = c/(2r_+) = 5.076 × 10³ s⁻¹; and at λ_port = 0.1 (r_* = r_+|ln 0.1| = 68.00 km), echo delay is Δt_echo = 2 r_*/c = 0.454 ms (~0.45 ms). Under Page (1976) [34], f = 1 gives 1.730 × 10¹⁴ g, f = 15.35 gives 4.30 × 10¹⁴ g, and 5.00 × 10¹⁴ g requires f ≈ 24.14.'
    ]
  },
  {
    letter: 'K',
    title: 'Pure-State Complementarity & BKM Entropy Dissipation Proofs',
    category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)',
    summary: 'Proves pure two-path complementarity V² + D_QFI² = 1 and Spohn relative-entropy contraction.',
    equations: [
      {
        label: '(K.1)',
        unicodeHtml: '<i>V</i>² + <i>D</i><sub>QFI</sub>² = 1 &nbsp;(pure <i>N</i>=2), &nbsp;&nbsp; d<i>S</i><sub>Araki</sub>/d<i>τ</i> = −Tr[(ℒ*<i>ρ</i>)(ln <i>ρ</i> − ln <i>ω</i><sub><i>ξ</i></sub>)] ≤ 0',
        caption: 'Two-path pure-state equality [16, 36] and BKM semigroup dissipation [17].',
        category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)'
      }
    ],
    bodyParagraphs: [
      'Pure-state interferometry satisfies V = |⟨d_1|d_2⟩| and D_QFI = √(1 − |⟨d_1|d_2⟩|²), giving V² + D_QFI² = 1 identically (weakening to ≤ 1 for mixed or N-slit setups [16]). Open-system relaxation under CPTP semigroups guarantees non-positive relative-entropy derivative and Landauer erasure work ≥ k_B T ln 2 [40].'
    ]
  }
];

export const H13_JOURNAL_DECLARATIONS = {
  acknowledgments:
    'The authors thank the mathematical physics and precision metrology colleagues whose critical feedback drove the separation of kinematic reparametrizations, isotropic 5D field closure, and astrophysical timescale corrections.',
  authorContributions:
    'J.-C.T. verified 5D Einstein–Maxwell closure and KK bounds; W.J.S.L. audited AQFT and BKM derivations; M.D.B. led conceptualization, code verification, and manuscript restructuring; M.A.G. audited control-loop stability and optical-clock metrology bounds; R.C. modeled P14–P17 sensitivities; W.G. verified white-hole RK4 numerics and Horndeski constraints.',
  dataAndCodeAvailability:
    'All numerical audits, 5-component algebraic checks, and RK4 bounce scripts are openly runnable locally via `node scripts/verify-igrt-h13.mjs`. Independent archival repository deposition and pre-registration identifiers are pending external Zenodo/OSF minting upon submission.',
  competingInterestsAndFunding:
    'The authors declare no competing financial or non-financial interests. No institutional funding was received for this work.'
};

export const H13_REFERENCES: H13ReferenceEntry[] = [
  { id: 1, citation: 'Bisognano, J. J. & Wichmann, E. H. (1975). On the duality condition for a Hermitian scalar field. J. Math. Phys. 16, 985–1007.' },
  { id: 2, citation: 'Connes, A. & Rovelli, C. (1994). Von Neumann algebra automorphisms and time-thermodynamics relation in general covariant quantum theories. Class. Quantum Grav. 11, 2899–2917.' },
  { id: 3, citation: 'Braunstein, S. L. & Caves, C. M. (1994). Statistical distance and the geometry of quantum states. Phys. Rev. Lett. 72, 3439–3443.' },
  { id: 4, citation: 'Anandan, J. & Aharonov, Y. (1990). Geometry of quantum evolution. Phys. Rev. Lett. 65, 1697–1700.' },
  { id: 5, citation: 'Margolus, N. & Levitin, L. B. (1998). The maximum speed of dynamical evolution. Physica D 120, 188–195.' },
  { id: 6, citation: 'Mandelstam, L. & Tamm, I. (1945). The uncertainty relation between energy and time in non-relativistic quantum mechanics. J. Phys. (USSR) 9, 249–254.' },
  { id: 7, citation: 'Deffner, S. & Campbell, S. (2017). Quantum speed limits: from Heisenberg’s uncertainty principle to optimal quantum control. J. Phys. A 50, 453001.' },
  { id: 8, citation: 'Haag, R. (1996). Local Quantum Physics: Fields, Particles, Algebras (2nd ed.). Springer.' },
  { id: 9, citation: 'Buchholz, D., Doplicher, S. & Longo, R. (1986). On Noether’s theorem in quantum field theory. Ann. Phys. 170, 1–17.' },
  { id: 10, citation: 'Araki, H. (1976). Relative entropy of states of von Neumann algebras. Publ. RIMS Kyoto Univ. 11, 809–833.' },
  { id: 11, citation: 'Hafele, J. C. & Keating, R. E. (1972). Around-the-world atomic clocks: observed relativistic time gains. Science 177, 168–170.' },
  { id: 12, citation: 'Bothwell, T. et al. (2022). Resolving the gravitational redshift across a millimetre-scale atomic sample. Nature 602, 420–424.' },
  { id: 13, citation: 'Petz, D. (1996). Monotone metrics on matrix spaces. Linear Algebra Appl. 244, 81–96.' },
  { id: 14, citation: 'Tóth, G. & Petz, D. (2013). Extremal properties of the variance and the quantum Fisher information. Phys. Rev. A 87, 032324.' },
  { id: 15, citation: 'Petz, D. & Sudár, C. (1996). Geometries of quantum states. J. Math. Phys. 37, 2662–2673.' },
  { id: 16, citation: 'Bera, M. N., Qureshi, T., Siddiqui, M. A. & Pati, A. K. (2015). Duality of quantum coherence and path distinguishability. Phys. Rev. A 92, 012118.' },
  { id: 17, citation: 'Spohn, H. (1978). Entropy production for quantum dynamical semigroups. J. Math. Phys. 19, 1227–1230.' },
  { id: 18, citation: 'Abbott, B. P. et al. (LIGO Scientific & Virgo Collaborations) (2017). GW170817: Observation of gravitational waves from a binary neutron star inspiral. Phys. Rev. Lett. 119, 161101.' },
  { id: 19, citation: 'Kobayashi, T. (2019). Horndeski theory and beyond: a review. Rep. Prog. Phys. 82, 086901.' },
  { id: 20, citation: 'Ashtekar, A., Pawlowski, T. & Singh, P. (2006). Quantum nature of the Big Bang: Improved dynamics. Phys. Rev. D 74, 084003.' },
  { id: 21, citation: 'Meissner, K. A. (2004). Black hole entropy in loop quantum gravity. Class. Quantum Grav. 21, 5245–5251.' },
  { id: 22, citation: 'Randall, L. & Sundrum, R. (1999). A large mass hierarchy from a small extra dimension. Phys. Rev. Lett. 83, 3370–3373.' },
  { id: 23, citation: 'Randall, L. & Sundrum, R. (1999). An alternative to compactification. Phys. Rev. Lett. 83, 4690–4693.' },
  { id: 24, citation: 'Goldberger, W. D. & Wise, M. B. (1999). Modulus stabilization with bulk fields. Phys. Rev. Lett. 83, 4922–4925.' },
  { id: 25, citation: 'Gao, P., Jafferis, D. L. & Wall, A. C. (2017). Traversable wormholes via a double trace deformation. JHEP 12 (2017) 151.' },
  { id: 26, citation: 'Maldacena, J., Stanford, D. & Yang, Z. (2017). Diving into traversable wormholes. Fortschr. Phys. 65, 1700034.' },
  { id: 27, citation: 'Brown, J. D. & York, J. W. (1993). Quasilocal energy and conserved charges derived from the gravitational action. Phys. Rev. D 47, 1407–1419.' },
  { id: 28, citation: 'Lee, J. G., Adelberger, E. G., Cook, T. S., Fleischer, S. M. & Heckel, B. R. (2020). New test of the gravitational 1/r² law at separations down to 52 μm. Phys. Rev. Lett. 124, 101101.' },
  { id: 29, citation: 'Kapner, D. J. et al. (2007). Tests of the gravitational inverse-square law below the dark-energy length scale. Phys. Rev. Lett. 98, 021101.' },
  { id: 30, citation: 'Hannestad, S. & Raffelt, G. G. (2003). Supernova and neutron-star limits on large extra dimensions reexamined. Phys. Rev. D 67, 125008.' },
  { id: 31, citation: 'Hayward, S. A. (2006). Formation and evaporation of nonsingular black holes. Phys. Rev. Lett. 96, 031103.' },
  { id: 32, citation: 'Rovelli, C. & Vidotto, F. (2014). Planck stars. Int. J. Mod. Phys. D 23, 1442026.' },
  { id: 33, citation: 'Haggard, H. M. & Rovelli, C. (2015). Quantum-gravity effects outside the horizon spark black to white hole tunneling. Phys. Rev. D 92, 104020.' },
  { id: 34, citation: 'Page, D. N. (1976). Particle emission rates from a black hole: Massless particles from an uncharged, nonrotating hole. Phys. Rev. D 13, 198–206.' },
  { id: 35, citation: 'Cardoso, V., Franzin, E. & Pani, P. (2016). Is the gravitational-wave ringdown a probe of the event horizon? Phys. Rev. Lett. 116, 171101.' },
  { id: 36, citation: 'Englert, B.-G. (1996). Fringe visibility and which-way information: an inequality. Phys. Rev. Lett. 77, 2154–2157.' },
  { id: 37, citation: 'Zurek, W. H. (2009). Quantum Darwinism. Nat. Phys. 5, 181–188.' },
  { id: 38, citation: 'Riedel, C. J. & Zurek, W. H. (2010). Quantum Darwinism in an everyday environment: huge redundancy in scattered photons. Phys. Rev. Lett. 105, 020404.' },
  { id: 39, citation: 'Landauer, R. (1961). Irreversibility and heat generation in the computing process. IBM J. Res. Dev. 5, 183–191.' },
  { id: 40, citation: 'Bérut, A. et al. (2012). Experimental verification of Landauer’s principle linking information and thermodynamics. Nature 483, 187–189.' },
  { id: 41, citation: 'Friston, K. (2013). Life as we know it. J. R. Soc. Interface 10, 20130475.' },
  { id: 42, citation: 'Seifert, U. (2012). Stochastic thermodynamics, fluctuation theorems and molecular machines. Rep. Prog. Phys. 75, 126001.' },
  { id: 43, citation: 'Klimchitskaya, G. L. & Mostepanenko, V. M. (2023). CANNEX test of the Casimir effect and extra dimensions. Universe 9, 34.' },
  { id: 44, citation: 'Abedi, J., Dykaar, H. & Afshordi, N. (2017). Echoes from the abyss: tentative evidence for Planck-scale structure at black hole horizons. Phys. Rev. D 96, 082004.' },
  { id: 45, citation: 'CHIME/FRB Collaboration (2021). The first CHIME/FRB fast radio burst catalog. Astrophys. J. Suppl. Ser. 257, 59.' },
  { id: 46, citation: 'CTAO Consortium (2019). Science with the Cherenkov Telescope Array. World Scientific.' },
  { id: 47, citation: 'Brown, A. R. et al. (2023). Quantum gravity in the lab: teleportation by size and traversable wormholes. PRX Quantum 4, 010320.' },
  { id: 48, citation: 'Shiromizu, T., Maeda, K. & Sasaki, M. (2000). The Einstein equations on the 3-brane world. Phys. Rev. D 62, 024012.' },
  { id: 49, citation: 'Page, D. N. & Wootters, W. K. (1983). Evolution without evolution: dynamics described by stationary observables. Phys. Rev. D 27, 2885–2892.' },
  { id: 50, citation: 'Tassan, J.-C., Lauret, W. J. S., Bulaqueña, M. D., Avila Gomez, M., Chatterjee, R. & Goldberger, W. (2026). When Quantum States Become Time: Information-Geometric Resonant Time (IGRT-H11). Monograph Series.' },
  { id: 51, citation: 'Tassan, J.-C., Lauret, W. J. S., Bulaqueña, M. D., Avila Gomez, M., Chatterjee, R. & Goldberger, W. (2026). Folding Time Across Hidden Dimensions (IGRT-H12). Monograph Series.' }
];
