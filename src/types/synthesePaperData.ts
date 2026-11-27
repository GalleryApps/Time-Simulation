/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Full *Synthese*-Standard Philosophical Treatise for Paper 15:
 * "Where or Who Is the Observer? The Observer in Phenomenology,
 *  Quantum Foundations, and Systems Theory"
 *
 * Subtitle / Layman Deck:
 * "Thirty Theories of Self and Time, from Transcendental Philosophy
 *  to Quantum Mechanics—and the Hidden Structure They Share"
 */

export interface SyntheseAuthor {
  name: string;
  affiliation: string;
  orcid?: string;
  orcidUrl?: string;
  orcidNote?: string;
  email?: string;
  creditRoles: string;
}

export interface SyntheseEquation {
  label: string;
  unicodeHtml: string;
  plainMath?: string;
  caption: string;
  plainMeaning: string;
  derivationSteps?: string[];
}

export interface SyntheseTheoremBox {
  kind: 'Definition' | 'Proposition' | 'Theorem' | 'No-Go Theorem' | 'Corollary' | 'Philosophical Thesis';
  number: string;
  title: string;
  statement: string;
  proofSteps: string[];
  sourceNote: string;
}

export interface SyntheseWorkedExample {
  title: string;
  setup: string;
  steps: string[];
  resultEquation: SyntheseEquation;
  takeaway: string;
}

export interface SyntheseSubsection {
  number: string;
  title: string;
  epistemicFocus: string;
  paragraphs: string[];
  equation?: SyntheseEquation;
  theoremBox?: SyntheseTheoremBox;
  workedExample?: SyntheseWorkedExample;
}

export interface SyntheseChapter {
  id: string;
  number: number; // Chapters 1..9
  kicker: string;
  title: string;
  epigraph: string;
  pullQuote: string;
  leadSummary: string;
  chapterIntro: string[];
  subsections: SyntheseSubsection[];
}

export interface SyntheseAxiomRow {
  code: 'A1' | 'A2' | 'A3' | 'A4';
  name: string;
  canonicalFormula: string;
  modalAndEpistemicStatus: string;
  reductioOnDenial: string;
  falsificationTrigger: string;
}

export interface SyntheseReadingTrack {
  audience: string;
  essentialSections: string;
  entryFocus: string;
}

export interface SyntheseMatrixRow {
  section: string;
  framework: string;
  tradition: 'Phenomenology' | 'Post-Structuralism' | 'Orthodox Quantum' | 'Relational Quantum' | 'Systems & Enaction';
  a1: '✓' | '✗' | 'partial';
  a2: '✓' | '✗' | 'partial';
  a3: '✓' | '✗' | 'partial';
  a4: '✓' | '✗' | 'partial';
  statusNote: string;
}

export interface SyntheseAppendix {
  letter: string;
  title: string;
  summary: string;
  paragraphs: string[];
  equations: SyntheseEquation[];
  theoremBoxes?: SyntheseTheoremBox[];
  reproducibilityLedger?: Array<{
    checkpoint: string;
    formula: string;
    referenceConstants: string;
    computedOutput: string;
  }>;
  refereeObjections?: Array<{
    objection: string;
    reply: string;
  }>;
}

export interface SyntheseGlossaryTerm {
  term: string;
  acronym?: string;
  definition: string;
}

export interface SyntheseSymbolEntry {
  symbol: string;
  name: string;
  domain: string;
  definition: string;
}

export interface SyntheseReference {
  id: number;
  citation: string;
}

export interface SyntheseIndexEntry {
  entry: string;
  sections: string;
}

export interface SyntheseCountermodelRow {
  model: string;
  domainAndStructure: string;
  a1: 'T' | 'F';
  a2: 'T' | 'F';
  a3: 'T' | 'F';
  a4: 'T' | 'F';
  diagnosticProof: string;
}

export const SYNTHESE_META = {
  paperNumber: 'Paper 15 · Synthese Monograph',
  journalTarget: 'Synthese: An International Journal for Epistemology, Methodology and Philosophy of Science',
  title: 'Where or Who Is the Observer? The Observer in Phenomenology, Quantum Foundations, and Systems Theory',
  laymanDeck: 'Thirty-Two Theories of Self and Time, from Transcendental Philosophy to Quantum Mechanics—and the Hidden Structure They Share',
  subtitle: 'Resolving the Constitutive-Absence Paradox Across Kant, Husserl, Derrida, Bohr, Rovelli, Autopoiesis, and Split Horizon Logic',
  volumeLine: 'Scientific Magazine Edition · 40-Shade Dark Blue, Slate Gray Blue & Muted Blue-Green Apparatus · Synthese Philosophical Essay',
  keywords: [
    'observer',
    'constitutive-absence paradox',
    'transcendental epistemology',
    'modal logic S4',
    'phenomenology',
    'quantum foundations',
    'relational quantum mechanics',
    'autopoiesis',
    'structural identity thesis'
  ],
  authors: [
    {
      name: 'Jean-Charles Tassan',
      affiliation: 'Independent Researcher',
      orcid: '0000-0000-8566-0489',
      orcidUrl: 'https://orcid.org/0000-0000-8566-0489',
      creditRoles: 'Transcendental Genealogy, Auto-Affection & Non-Negative Asymmetric Immanence'
    },
    {
      name: 'Wilson John Sterking Lauret',
      affiliation: 'Independent Researcher',
      orcid: '0000-0004-7889-6644',
      orcidUrl: 'https://orcid.org/0000-0004-7889-6644',
      creditRoles: 'Operational Chronometry, Falsifiability Methodology & Critical Review'
    },
    {
      name: 'Marlon D. Bulaqueña, Ph.D.',
      affiliation: 'Department of Physics, Yale University, New Haven, CT 06520, USA',
      orcid: '0000-0007-3966-0497',
      orcidUrl: 'https://orcid.org/0000-0007-3966-0497',
      creditRoles: 'Lead Synthese Argumentation, Modal S4 Proofs & Axiomatic Synthesis'
    },
    {
      name: 'Manuel Avila Gomez',
      affiliation: "Maître de Conférences HDR, IUT de l'Indre, Université d'Orléans & Laboratoire PRISME",
      orcidNote: 'ORCID: Pending Institutional Verification (Directory)',
      creditRoles: 'Systems Closure, Second-Order Observation & Clock Synchronization'
    },
    {
      name: 'Rupak Chatterjee, Ph.D.',
      affiliation: 'Industry Associate Professor, Applied Physics, Tandon School of Engineering, New York University',
      orcid: '0000-0002-8553-5404',
      orcidUrl: 'https://orcid.org/0000-0002-8553-5404',
      creditRoles: 'Operational Boundaries, Relational Parity & Astrophysical Metrology'
    },
    {
      name: 'Walter Goldberger',
      affiliation: 'Sloane Physics Laboratory, Department of Physics, Yale University, New Haven, CT 06511, USA',
      orcidNote: 'ORCID: Pending Institutional Verification (Directory)',
      email: 'walter.goldberger@yale.edu',
      creditRoles: 'Quantum Reference Frames, Effective Field Bounds & Structural Verification'
    }
  ] as SyntheseAuthor[]
};

export const SYNTHESE_ABSTRACT: string[] = [
  'The observer appears twice in modern thought, and the two appearances have never been reconciled. In phenomenology, the observer is the transcendental ego—a condition of possibility for experience that can never itself appear wholly as an object within experience. In quantum mechanics, the observer is a physical system that performs measurements, yet canonical dynamics systematically places the measurement cut outside the unitary evolution it describes. Both traditions converge on a single structural paradox: the observer is simultaneously constitutive of the world and absent from it.',
  'This treatise constructs a rigorous conceptual and deductive genealogy of thirty traditions across thirty-two named observer-frameworks (Sections 2 through 33) spanning transcendental phenomenology, deconstructive and post-structuralist critique, orthodox and relational quantum foundations, and second-order systems or enactive theory. Operating explicitly within many-sorted hybrid varying-domain quantified modal logic S4 (blocking both the Barcan and Converse Barcan Formulas) and Friedman’s relativized a priori framework, we prove by numbered reductio derivations that coherent observer-models converge upon a minimal stratified basis of four conditions: Perspectival Immanence (A1), Egalitarian Frame Parity (A2), Operational Demarcation Cut (A3), and Asymmetric Self-Relation generating an extended thick living present (A4). Suspending any single axiom triggers a distinct classical incoherence—Archimedean ω-regress, solipsistic collapse, unbounded indistinction, or zero-width temporal freeze. After diagnosing genuine anomalies (Levinas, Marion, Cramer, Relational Blockworld) and establishing No-Go Theorem 5.1 over bipartite quantum cuts, we prove the Structural Identity Thesis (SIT) as faithful composition-preserving functors onto an invariant relational signature bridging Husserl, Rovelli, and Maturana–Varela alongside decoupled empirical falsification tests (Table 8.3–8.4) and a comprehensive five-discipline conclusion (§43) (Figure 0.1).'
];

export const SYNTHESE_AXIOM_TABLE: SyntheseAxiomRow[] = [
  {
    code: 'A1',
    name: 'Perspectival Immanence',
    canonicalFormula: '□∀o (Obs(o) → ∃H_o [Situated(o, H_o) ∧ ¬GlobalView(o)])',
    modalAndEpistemicStatus: 'Varying-domain S4 necessity (blocking Barcan, Ch. 1 · §1 & Ch. 7 · §34); relativized a priori condition of contextual observation',
    reductioOnDenial: 'Vicious Archimedean ω-regress of meta-observers (o₀ ≺ o₁ ≺ o₂ ≺ …)',
    falsificationTrigger: 'Experimental demonstration of observer-independent absolute macro-facts violating Local Friendliness'
  },
  {
    code: 'A2',
    name: 'Egalitarian Frame Parity',
    canonicalFormula: '∀o,o′ (Overlap(o, o′) → [Compat(o, o′) ∧ Equiv_inv(o, o′)])',
    modalAndEpistemicStatus: 'Normative-structural equivalence relation (reflexive, symmetric, transitive, Ch. 7 · §34; no master frame)',
    reductioOnDenial: 'Logically incoherent solipsism destroying criteria for shared scientific truth predicates',
    falsificationTrigger: 'Reproducible breakdown of cross-perspective covariance favoring one absolute cosmic observer-frame'
  },
  {
    code: 'A3',
    name: 'Operational Demarcation Cut',
    canonicalFormula: '∀o,x (Discern(o, x) → ∃B_o [Sep(B_o, Inside_o, Ext_o) ∧ Bounded(Inside_o) ∧ UnmarkedWithin(B_o, o)])',
    modalAndEpistemicStatus: 'Relativized finitude constraint grounded in Doplicher–Longo Split Property & Markov blanket (Ch. 7 · §35)',
    reductioOnDenial: 'Unbounded continuum indistinction collapsing discrete memory sigma-algebras Σ_o into void',
    falsificationTrigger: 'Passive non-autonomous substrates sustaining identical long-range coherence autonomy as dissipative units'
  },
  {
    code: 'A4',
    name: 'Asymmetric Self-Relation & Thick Present',
    canonicalFormula: '∀o (TemporalObs(o) → ∃S_o,I_now [S_o ≥ 0 ∧ Asym(S_o) ∧ Dur(I_now) > 0 ∧ Overlaps(Ret_o, I_now) ∧ Meets(I_now, Prot_o)])',
    modalAndEpistemicStatus: 'Irreversible entropy-update functional S_o ≥ 0 (A4a) + Allen interval reconstruction |I_now| > 0 (A4b, Ch. 7 · §§36–37)',
    reductioOnDenial: 'Zero-width temporal freeze ([t, t]) abolishing retention, mineness, and change discrimination',
    falsificationTrigger: 'Evidence that zero-duration slices mediate temporal change judgment (A4); optional H_phys via optical–PTA residuals'
  }
];

export const SYNTHESE_INDEPENDENCE_MODELS: SyntheseCountermodelRow[] = [
  {
    model: 'M_~A1 (Archimedean Sensor)',
    domainAndStructure: 'Global valuation sheet v_global over constant domain; zero local blind spots; symmetric parity & finite buffers intact.',
    a1: 'F',
    a2: 'T',
    a3: 'T',
    a4: 'T',
    diagnosticProof: 'Proves ¬A1 is not entailed by {A2, A3, A4} absent contextual obstruction; inside contextual reality triggers Theorem 1.1 regress.'
  },
  {
    model: 'M_~A2 (Leibnizian Bubble)',
    domainAndStructure: 'Single local horizon H_o* with finite collar B_o* and internal temporal flow I_now*, but Compat(o*, o′) fails across frames.',
    a1: 'T',
    a2: 'F',
    a3: 'T',
    a4: 'T',
    diagnosticProof: 'Demonstrates A2 is logically independent of {A1, A3, A4}: isolated phenomenology retains duration yet loses shared objectivity.'
  },
  {
    model: 'M_~A3 (Cut-Free Field)',
    domainAndStructure: 'Covariant global manifold with compatible local coordinate charts (A1+A2) but zero compact separation collar (Zero Split Property).',
    a1: 'T',
    a2: 'T',
    a3: 'F',
    a4: 'F',
    diagnosticProof: 'Proves A3 is independent of {A1, A2}; simultaneously shows A4 fails whenever A3 collapses (confirming stratified A4 → A3).'
  },
  {
    model: 'M_~A4 (Passive Static Cut)',
    domainAndStructure: 'Relational 4D block detector worldtube with local vantage (A1), parity (A2), and fixed spatial cut (A3), evaluated at [t, t] with T_c symmetry.',
    a1: 'T',
    a2: 'T',
    a3: 'T',
    a4: 'F',
    diagnosticProof: 'Decisive proof that A3 ↛ A4: passive detectors and RBW static cuts satisfy A1–A3 while lacking asymmetric ipseity and |I_now| > 0.'
  }
];

export interface SyntheseRoadmapRow {
  chapter: string;
  sections: string;
  centralMove: string;
  visualAnchor: string;
}

export const SYNTHESE_ROADMAP: SyntheseRoadmapRow[] = [
  { chapter: 'Chapter 1', sections: '§§0.1–1', centralMove: 'Methodology, exclusions, varying-domain S4 ⟨W, R, D⟩, Barcan countermodel & Constitutive Absence (Theorem 1.1)', visualAnchor: 'Fig. 0.1, Fig. 1.1, Plates I–II' },
  { chapter: 'Chapter 2', sections: '§§2–9', centralMove: 'Eight phenomenological & transcendental theories (Kant through Levinas) separating epistemic parity from ethical overflow', visualAnchor: 'Fig. 2.1, Plates III–IV' },
  { chapter: 'Chapter 3', sections: '§§10–15a', centralMove: 'Six post-structuralist ruptures of presence & formal §15a structural-role morphism bridging to quantum cuts', visualAnchor: 'Fig. 3.1, Plates V–VI' },
  { chapter: 'Chapter 4', sections: '§§16–20', centralMove: 'Five orthodox quantum programs (Bohr Solvay–EPR, von Neumann–Lüders, Wigner–LF, Everett, Wheeler)', visualAnchor: 'Fig. 4.1, Plates VII–VIII' },
  { chapter: 'Chapter 5', sections: '§§21–27', centralMove: 'Seven relational/dynamical models, No-Go Theorem 5.1 (F > 1/2 vs. r = m), Two-Qubit Witness & First Observer Hypothesis', visualAnchor: 'Fig. 5.1, Plates IX–X' },
  { chapter: 'Chapter 6', sections: '§§28–33', centralMove: 'Six systems/enactive models (von Foerster, Luhmann, Maturana–Varela μ ⊥ η | B, Noë, Metzinger, Dennett)', visualAnchor: 'Fig. 6.1, Plates XI–XII' },
  { chapter: 'Chapter 7', sections: '§§34–37', centralMove: 'Main-text modal S4 proofs, Equiv_inv proof, Doplicher–Longo split collar, Allen interval logic & 4 countermodels', visualAnchor: 'Figs. 7.1–7.2, Plates XIII–XIV' },
  { chapter: 'Chapter 8', sections: '§§38–40', centralMove: 'Structural Identity Thesis functors (Phen, Quant, Sys → Σ_Obs), 32-position matrix & Duhem–Quine crucibles (Tables 8.3–8.4)', visualAnchor: 'Fig. 8.1, Plates XV–XVI' },
  { chapter: 'Chapter 9', sections: '§§41–43', centralMove: 'Integrative synthesis, ten-point critical replies & Comprehensive Conclusion answering all five-discipline stakes', visualAnchor: 'Fig. 9.1, Plates XVII–XVIII' }
];

export interface SyntheseNotationRow {
  symbol: string;
  role: string;
  firstDefined: string;
}

export const SYNTHESE_NOTATION_TABLE: SyntheseNotationRow[] = [
  { symbol: '⟨W, R, D(w)⟩', role: 'Varying-domain S4 Kripke frame with non-monotonic world domains D(w)', firstDefined: 'Ch. 1 (§1)' },
  { symbol: 'H_o', role: 'Situated perspectival observational horizon excluding a global view', firstDefined: 'Ch. 1 (§1 · A1)' },
  { symbol: 'Compat / Equiv_inv', role: 'Covariant equivalence relation (reflexive, symmetric, transitive) over Overlap(o, o′)', firstDefined: 'Ch. 2 (§5) & Ch. 7 (§34 · A2)' },
  { symbol: 'B_o, Σ_o', role: 'Compact topological demarcation collar & isolated discrete Boolean memory sigma-algebra', firstDefined: 'Ch. 1 (§1) & Ch. 7 (§35 · A3)' },
  { symbol: 'M(O₁) ⊂ N ⊂ M(O₂)′', role: 'Doplicher–Longo split inclusion yielding an intermediate Type I factor N', firstDefined: 'Ch. 5 (§21) & Ch. 7 (§35)' },
  { symbol: 'S_o ≥ 0, Asym(S_o)', role: 'Irreversible non-negative entropy-update functional with strict temporal order-antisymmetry', firstDefined: 'Ch. 7 (§36 · A4a)' },
  { symbol: 'I_now, Ret_o, Prot_o', role: 'Allen closed intervals [t⁻, t⁺] with Dur(I_now) > 0, Overlaps(Ret_o, I_now) & Meets(I_now, Prot_o)', firstDefined: 'Ch. 2 (§4) & Ch. 7 (§37 · A4b)' },
  { symbol: 'F > 1/2, r = m', role: 'Channel signalling fidelity vs. deterministic branch-relative pointer readout in No-Go Theorem 5.1', firstDefined: 'Ch. 5 (§21)' },
  { symbol: 'Σ_Obs (ObsCat)', role: 'Invariant target category ⟨Ob_Obs, Hom_Obs⟩ receiving faithful functors F_Phen, F_RQM, F_Bio', firstDefined: 'Ch. 8 (§38 · SIT)' }
];

export interface SyntheseAuxiliaryAssumptionRow {
  crucible: string;
  targetAxiom: string;
  isolatedAuxiliaries: string;
  decouplingGuard: string;
}

export const TABLE_8_4_AUXILIARY_ASSUMPTIONS: SyntheseAuxiliaryAssumptionRow[] = [
  {
    crucible: 'Local Friendliness Interferometry',
    targetAxiom: 'A1 (Immanence) & A2 (Parity)',
    isolatedAuxiliaries: 'Photon heralding efficiency η > 2/3, interferometric visibility V, memory-qubit isolation fidelity',
    decouplingGuard: 'Independent tomography calibrates detector η and phase stability prior to testing AOE inequalities'
  },
  {
    crucible: 'Open-Loop FOH Thermal Bifurcation',
    targetAxiom: 'A3 (Demarcation Cut)',
    isolatedAuxiliaries: 'Ambient bath spectral density J(ω), substrate mass, Landauer dissipation rate dS_env/dt',
    decouplingGuard: 'Matched passive control substrates share identical bath temperature and geometry with zero regulatory feedback'
  },
  {
    crucible: 'Psychophysical Temporal-Order & EEG',
    targetAxiom: 'A4 (Thick Living Present)',
    isolatedAuxiliaries: 'Retinal/auditory transduction latency, cortical sampling bandwidth (~100–3000 ms), masking noise floor',
    decouplingGuard: 'Sub-millisecond peripheral latency is subtracted directly via paired catch trials isolating central integration'
  },
  {
    crucible: 'Optical Lattice–PTA Chronometry',
    targetAxiom: 'A4 (Optional Cross-Scale Link)',
    isolatedAuxiliaries: 'Laser cavity thermal drift (< 10^-18), pulsar dispersion-measure interstellar modeling, barycentric ephemeris',
    decouplingGuard: 'Pre-registered strict null boundary isolates fundamental clock dynamics from cognitive thickness without epicycles'
  }
];

export const SYNTHESE_HOW_TO_READ: SyntheseReadingTrack[] = [
  {
    audience: 'Philosophers, Phenomenologists & Continental Theorists',
    essentialSections: 'Chapter 1 (§§0.1–1) → Chapter 2 (§§2–9) → Chapter 3 (§§10–15a) → Chapter 7 (§§34–37) → Chapter 9 (§§41–43)',
    entryFocus:
      'Trace how Kant’s Paralogisms, Husserl’s Bernau manuscripts, Henry’s non-temporal auto-affection, and post-structuralist critiques of presence translate without reductionism into S4 modal axioms A1–A4 and Allen interval logic.'
  },
  {
    audience: 'Physicists & Quantum Foundation Researchers',
    essentialSections: 'Chapter 1 (§§0.1–1) → §15a → Chapter 4 (§§16–20) → Chapter 5 (§§21–27) → Chapter 7 (§§34–37) → Chapter 8 (§§38–40)',
    entryFocus:
      'Examine how movable Heisenberg/von Neumann cuts, No-Go Theorem 5.1, Wigner’s Friend no-go theorems, RQM Cross-Perspective Links, Zurek einselection, and the First Observer Hypothesis map onto A1–A4 and concrete empirical falsification protocols.'
  },
  {
    audience: 'Systems Biologists, Cyberneticians & Cognitive Scientists',
    essentialSections: 'Chapter 1 (§§0.1–1) → Chapter 6 (§§28–33) → Chapter 7 (§§34–37) → Chapter 8 (§§38–40) → Chapter 9 (§43)',
    entryFocus:
      'See how von Foerster’s eigenbehaviors, Luhmann’s unmarked-exterior re-entry, Maturana–Varela’s autopoiesis (μ ⊥ η | B), Noë’s sensorimotor contingencies, and Metzinger’s transparent self-model embody operational demarcation (A3) and non-reductive structural realism.'
  }
];

export const SYNTHESE_ARGUMENT_MAP = {
  title: 'Chapter 7 Argument Map: Stratified Dependencies Among A1–A4 and the Structural Identity Thesis',
  summary:
    'Rather than four disconnected postulates or a circular cluster, A1–A4 form a stratified logical dependency cascade culminating in the meta-theoretical Structural Identity Thesis (SIT).',
  nodes: [
    {
      step: 'Stage 1 · A1 (Perspectival Immanence)',
      rule: 'Refutes unsituated global view via S4 Vicious Archimedean Regress Theorem.',
      leadsTo: 'Establishes locality of every observational horizon H_o; opens the plurality problem.'
    },
    {
      step: 'Stage 2 · A2 (Egalitarian Frame Parity)',
      rule: 'Refutes privileged ego solipsism via Intersubjective Coherence / Wigner’s Friend Reductio.',
      leadsTo: 'Binds overlapping local horizons covariantly (Compat / Equiv_inv) without a master center.'
    },
    {
      step: 'Stage 3 · A3 (Operational Demarcation Cut)',
      rule: 'Refutes cut-free continuum via Topological Anti-Continuum Lemma; clarifies indirect exterior re-entry.',
      leadsTo: 'Creates stable bounded interior records (Inside_o) prerequisite for self-maintaining loops.'
    },
    {
      step: 'Stage 4 · A4 (Asymmetric Self-Relation & Thick Present)',
      rule: 'Refutes neutral coordinate shift & zero-width instant [t, t] via Allen Interval Temporal Logic.',
      leadsTo: 'Explains pre-reflective mineness (ipseity) and finite non-zero integration window |I_o| > 0.'
    },
    {
      step: 'Stage 5 · Meta-Theorem (SIT, §38)',
      rule: 'Establishes faithful composition-preserving functors onto invariant signature Σ_Obs across Phenomenology, RQM, and Autopoiesis.',
      leadsTo: 'Generates decoupled, non-holistic empirical crucibles (A1–A4 falsifiers + optional H_phys test in §40).'
    }
  ]
};

export const SYNTHESE_32_MATRIX: SyntheseMatrixRow[] = [
  { section: '§2', framework: 'Kant (Transcendental Apperception)', tradition: 'Phenomenology', a1: '✓', a2: 'partial', a3: '✓', a4: 'partial', statusNote: 'Isolates formal A1/A3 horizon; temporal thickness (§A4) left to Schematism' },
  { section: '§3', framework: 'Husserl Early (LI V Non-Egological)', tradition: 'Phenomenology', a1: '✓', a2: 'partial', a3: '✓', a4: '✗', statusNote: 'Fails A4 mineness anchor until Ideas I §57 n.1 clarification' },
  { section: '§4', framework: 'Husserl Late (Urstrom & Bernau)', tradition: 'Phenomenology', a1: '✓', a2: 'partial', a3: '✓', a4: '✓', statusNote: 'Canonical A4 thick living present; pre-objective Urstrom drives retention/protention' },
  { section: '§5', framework: 'Husserl Intersubjectivity (5th Med.)', tradition: 'Phenomenology', a1: '✓', a2: '✓', a3: '✓', a4: '✓', statusNote: 'Paarung parity resolves Einfühlung circle via explicit A2 concordance' },
  { section: '§6', framework: 'Heidegger (Dasein & §§69–70)', tradition: 'Phenomenology', a1: '✓', a2: 'partial', a3: '✓', a4: '✓', statusNote: 'Sorge ecstatic temporality grounds A1/A4; Zollikon resists formal A2 covariance' },
  { section: '§7', framework: 'Merleau-Ponty (Chiasmic Écart)', tradition: 'Phenomenology', a1: '✓', a2: '✓', a3: '✓', a4: '✓', statusNote: 'Touching–touched non-coincident écart embodies A3 boundary & A4 asymmetry' },
  { section: '§8', framework: 'Michel Henry (Auto-Affection)', tradition: 'Phenomenology', a1: '✓', a2: '✗', a3: 'partial', a4: '✓', statusNote: 'Radical A4 ipseity engine; rejects external world-mediation (anomaly on A2)' },
  { section: '§9', framework: 'Levinas (Ethical Subject)', tradition: 'Phenomenology', a1: '✓', a2: '✗', a3: '✗', a4: '✓', statusNote: 'Ethical limit: infinite asymmetry of the Face overflows symmetric A2 & bounded A3' },
  { section: '§10', framework: 'Derrida (Différance & Autoimmunity)', tradition: 'Post-Structuralism', a1: '✓', a2: 'partial', a3: '✓', a4: '✓', statusNote: 'Negative proof of A4 non-punctuality; autoimmunity keeps A3 boundaries unclosed' },
  { section: '§11', framework: 'Foucault (Dispersed Subject / Dispositif)', tradition: 'Post-Structuralism', a1: '✓', a2: 'partial', a3: '✓', a4: 'partial', statusNote: 'Historicizes A1 immanence inside power-knowledge cuts; weak pre-reflective A4' },
  { section: '§12', framework: 'Lacan (Barred Subject $ & objet a)', tradition: 'Post-Structuralism', a1: '✓', a2: 'partial', a3: '✓', a4: '✓', statusNote: '$ split & objet a Real remainder formalize A3 structural exclusion' },
  { section: '§13', framework: 'Deleuze (Fractured Cogito & Virtual)', tradition: 'Post-Structuralism', a1: '✓', a2: 'partial', a3: '✓', a4: '✓', statusNote: 'Passive syntheses satisfy A4; virtual inequality complicates macroscopic A2 parity' },
  { section: '§14', framework: 'Nancy (Being Singular Plural)', tradition: 'Post-Structuralism', a1: '✓', a2: '✓', a3: '✓', a4: 'partial', statusNote: 'Co-original être-avec validates A2 as relational pole exposure, not atomism' },
  { section: '§15', framework: 'Marion (Saturated Phenomenon)', tradition: 'Post-Structuralism', a1: '✓', a2: 'partial', a3: '✗', a4: '✓', statusNote: 'Horizon-overflow anomaly: excess givenness overwhelms finite A3 conceptual cut' },
  { section: '§16', framework: 'Bohr (Complementarity & Solvay)', tradition: 'Orthodox Quantum', a1: '✓', a2: 'partial', a3: '✓', a4: 'partial', statusNote: 'Contextual cut realizes A3; classical apparatus asymmetry under-specifies A2/A4' },
  { section: '§17', framework: 'Von Neumann (Movable Chain & Ego)', tradition: 'Orthodox Quantum', a1: '✓', a2: 'partial', a3: '✓', a4: 'partial', statusNote: 'Arbitrary cut shift invariance mirrors A3 covariance; leaves A4 ego unanalyzed' },
  { section: '§18', framework: 'Wigner’s Friend & Local Friendliness', tradition: 'Orthodox Quantum', a1: '✓', a2: '✓', a3: '✓', a4: 'partial', statusNote: 'No-go theorem forces relational frame-indexing (A1 + A2) over absolute facts' },
  { section: '§19', framework: 'Everett (Relative States & Branches)', tradition: 'Orthodox Quantum', a1: '✓', a2: '✓', a3: 'partial', a4: 'partial', statusNote: 'Requires §23 decoherence for A3 cut stability & Born measure across A2 branches' },
  { section: '§20', framework: 'Wheeler (Participatory Universe)', tradition: 'Orthodox Quantum', a1: '✓', a2: 'partial', a3: '✓', a4: 'partial', statusNote: 'It-from-Bit captured by A1+A3; strong cosmic self-circuit exceeds core axioms' },
  { section: '§21', framework: 'Rovelli (RQM & Cross-Perspective Links)', tradition: 'Relational Quantum', a1: '✓', a2: '✓', a3: '✓', a4: '✓', statusNote: 'Flagship alignment: A2 via 2023 Links, A4 via irreversible record updates' },
  { section: '§22', framework: 'QBism (Fuchs / Schack)', tradition: 'Relational Quantum', a1: '✓', a2: 'partial', a3: '✓', a4: '✓', statusNote: 'Strongest A1/A4 first-person agency; A2 reconciled via normative Born coherence' },
  { section: '§23', framework: 'Decoherence (Zeh / Zurek Einselection)', tradition: 'Relational Quantum', a1: 'partial', a2: '✓', a3: '✓', a4: 'partial', statusNote: 'Einselection & Quantum Darwinism realize A3 dynamically given partition cut' },
  { section: '§24', framework: 'Consistent Histories (Griffiths / GMH)', tradition: 'Relational Quantum', a1: '✓', a2: '✓', a3: '✓', a4: 'partial', statusNote: 'Consistency condition formalizes A2 lattice rules; silent on single-frame choice' },
  { section: '§25', framework: 'Transactional Interpretation (Cramer)', tradition: 'Relational Quantum', a1: '✓', a2: 'partial', a3: '✓', a4: 'partial', statusNote: 'Bilateral handshake anticipates extended temporal window; foliation tension' },
  { section: '§26', framework: 'Relational Blockworld (Silberstein–Stuckey)', tradition: 'Relational Quantum', a1: '✓', a2: '✓', a3: '✓', a4: '✗', statusNote: 'Explicit anomaly on A4: adynamical 4D ontology denies irreducible temporal asymmetry' },
  { section: '§27', framework: 'First Observer Hypothesis (FOH)', tradition: 'Relational Quantum', a1: '✓', a2: '✓', a3: '✓', a4: '✓', statusNote: 'Separates dissipative self-maintaining A3+A4 observers from passive transducers' },
  { section: '§28', framework: 'Von Foerster (Second-Order Eigenbehavior)', tradition: 'Systems & Enaction', a1: '✓', a2: '✓', a3: '✓', a4: 'partial', statusNote: 'Recursive fixed points realize A3; second-order shift instantiates A2 parity' },
  { section: '§29', framework: 'Luhmann (Triple System Closure)', tradition: 'Systems & Enaction', a1: '✓', a2: '✓', a3: '✓', a4: 'partial', statusNote: 'Mark/Unmarked re-entry formalizes A3; anti-humanism downplays felt A4 ipseity' },
  { section: '§30', framework: 'Maturana & Varela (Autopoiesis)', tradition: 'Systems & Enaction', a1: '✓', a2: '✓', a3: '✓', a4: '✓', statusNote: 'Structural coupling (A2) + self-producing metabolic closure (A3+A4)' },
  { section: '§31', framework: 'Alva Noë (Enactive Perception)', tradition: 'Systems & Enaction', a1: '✓', a2: '✓', a3: '✓', a4: '✓', statusNote: 'Sensorimotor contingency laws enact A3 reafference cut & temporal exploration' },
  { section: '§32', framework: 'Metzinger (Phenomenal Self-Model)', tradition: 'Systems & Enaction', a1: '✓', a2: '✓', a3: '✓', a4: '✓', statusNote: 'PSM transparency explains A3 blind spot while rejecting Cartesian substance' },
  { section: '§33', framework: 'Dennett (Center of Narrative Gravity)', tradition: 'Systems & Enaction', a1: '✓', a2: '✓', a3: 'partial', a4: 'partial', statusNote: 'Real Patterns align with SIT; retrospective drafts under-explain pre-reflective A4' }
];

export const SYNTHESE_CHAPTERS: SyntheseChapter[] = [
  {
    id: 'chapter-1',
    number: 1,
    kicker: 'Chapter 1 · Methodology, Scope, History & Formal Problem (§§0.1–1)',
    title: 'Methodology, Scope, History, and the Paradox of Constitutive Absence',
    epigraph: '“The eye does not actually see itself within the visual field; yet nothing within the visual field is seen without the vanishing point.” — Synthetic Paraphrase of Kant B131 and Wittgenstein TLP 5.632',
    pullQuote: 'A rigorous genealogy of the observer requires explicit selection criteria, clear exclusion boundaries, and formal modal proofs showing why constitutive absence arises across both philosophy and physics.',
    leadSummary: 'Establishes the treatise’s conceptual-dialectical methodology (§0.1), explicit scope and excluded interpretations (§0.2), historical evolution across five epochs, and quantified modal S4 reductio proof of Constitutive Absence (§1).',
    chapterIntro: [
      'Few concepts in intellectual history are simultaneously as indispensable and as elusive as that of the observer. Across more than two millennia of inquiry, Western philosophy and the natural sciences have repeatedly built explanatory architectures upon the standpoint of a witness—yet whenever inquiry turns around to ask **where or who** that witness is, the observer slips quietly out of the frame. The historical arc of this problem spans five decisive epochs, each sharpening the same underlying antinomy into clearer logical focus (Plate I).',
      'In the first epoch—Classical Antiquity, Buddhist Epistemology, and Early Modern Dualism—Aristotle in *De Anima* (III.2, 425b12–25) already marked the reflexive puzzle that perceiving that we see cannot be merely another colored patch among colors; independently, South Asian Madhyamaka and Yogācāra traditions (Nāgārjuna’s *Mūlamadhyamakakārikā* on mutual dependence and Dignāga’s *svasaṃvedana* theory of non-objectifying reflexive awareness) demonstrated that witness and object co-arise relationally without an intrinsic substance-core (Plate II). In early modern Europe, René Descartes (*Meditations II & VI*) split reality into extended mechanical matter (*res extensa*) and an unextended thinking spectator (*res cogitans*) observing nature as if through an inner theater, while Gottfried Wilhelm Leibniz (*Monadology* §§14, 56–60) countered Cartesianism with perspectival monads mirroring the universe from irreducible vantage points, leaving their coordination to pre-established theological harmony.',
      'The second epoch opened with Immanuel Kant’s Copernican Revolution (1781/1787), which relocated objectivity inside the synthesizing rules of a formal “I think” (transcendental apperception, B131–132) that makes experience possible precisely by refusing to appear as one empirical substance among others—a paradox **Johann Gottlieb Fichte** (*Grundlage der gesamten Wissenschaftslehre*, 1794/95, SW I 91–105) sharpened into the **vicious self-positing regress**: any act turning the positing “I” into a posited object presupposes an unposited higher “I.” In the third epoch—Twentieth-Century Phenomenology, Analytic Self-Reference, and Post-Structuralism—Edmund Husserl, Martin Heidegger, Maurice Merleau-Ponty, and Michel Henry deepened Kant’s insight into lived temporality, embodied chiasm, and non-temporal auto-affection (while analytic philosophers from Wittgenstein and Sellars to Perry, Lewis, and Shoemaker exposed the irreducibility of essential indexicals and *de se* attitudes), whereas Jacques Derrida, Michel Foucault, and Jacques Lacan subjected every claim of self-transparent egoic mastery to critique, exposing deferred traces, historical subject-positions, and constitutive remainders.',
      'Meanwhile, a parallel crisis erupted independently inside the fourth epoch—the Quantum Measurement Debate—where Niels Bohr, John von Neumann, Eugene Wigner, Hugh Everett, John Archibald Wheeler, Carlo Rovelli, QBism, Wojciech Zurek, Časlav Brukner and Anton Zeilinger (2009, showing informationally elementary systems cannot carry more mutually independent propositions than degrees of freedom), and Thomas Breuer confronted an unmistakable structural fact: canonical physical laws govern uninterrupted unitary evolution, whereas determinate measurement outcomes only attach relative to a movable demarcation boundary (the Heisenberg or von Neumann cut) whose placement cannot itself be totalized inside the state vector. Finally, in the fifth epoch—Second-Order Cybernetics, Systems Biology, and Enactive Cognitive Science—Heinz von Foerster, Niklas Luhmann, Humberto Maturana, Francisco Varela, Alva Noë, Thomas Metzinger, and Daniel Dennett demonstrated that any biological or cognitive observer operates via recursive boundary closure, creating an inescapable epistemic blind spot toward its own founding distinction.'
    ],
    subsections: [
      {
        number: '0.1',
        title: 'Methodology, Genealogical Mode, and Framework Selection Criteria',
        epistemicFocus: 'Reconstructive vs. attributive genealogy, structural role semantics, rationale for thirty-two sections, and section parity',
        paragraphs: [
          'Before tracing historical texts or stating formal theorems, a philosophy-of-science treatise must state explicitly what kind of genealogy it executes. This study conducts a **reconstructive conceptual–dialectical logical genealogy** combined with **structural role semantics**, rather than either pure historical *attributive exegesis* or an encyclopedic biography of ideas. Whenever a formal predicate such as `H_o` or `B_o` is paired with a classical thinker, the mapping is *reconstructive* at the exact inferential joint where that thinker’s observer-account generates an internal aporia—a logical gap between what the observer makes possible and what the theory allows the observer to be—while historical scholarship preserves faithful textual boundaries without attributing modern modal notation to past authors.',
          'Why examine thirty foundational traditions staged across thirty-two numbered sections (§§2–33, because Husserl’s transcendental project undergoes three structurally distinct mutations in Early LI V §3, Late Bernau monad §4, and Intersubjective §5, supplemented by analytical bridge §15a) rather than an arbitrary list of a hundred? Every included position satisfies three joint selection criteria: (1) *Non-eliminative engagement with perspective*—it treats the standpoint of registration, indexical orientation, or distinction-drawing as an explicit theoretical problem; (2) *Formal or categorical specificity*—it introduces a distinct conceptual invariant (such as apperception, *écart*, trace deferral, agential/measurement cut, einselection, or autopoietic closure) that isolates at least one logical facet of the Paradox of Constitutive Absence; and (3) *Cross-disciplinary parity* across the four epistemic poles of modern inquiry: Transcendental Phenomenology (§§2–9), Post-Structuralist Critique (§§10–15), Quantum Foundations (§§16–27), and Systems/Enactive Theory (§§28–33).',
          'To ensure balanced interpretive rigor across every tradition, sections on figures such as Merleau-Ponty (§7), Levinas (§9), Foucault (§11), Lacan (§12), Deleuze (§13), Nancy (§14), Marion (§15), Cramer (§25), Relational Blockworld (§26), and Noë (§31) receive full structural and primary-text analysis matching Kant and Husserl, avoiding any impression of hurried survey.'
        ]
      },
      {
        number: '0.2',
        title: 'Scope, Epistemic Limits, and Excluded Interpretations',
        epistemicFocus: 'Scope exclusion vs. in-principle refutation, Bohm effective wavefunction, GRW mass-density collapse, and boundary tests',
        paragraphs: [
          'Intellectual honesty demands separating **scope exclusions** (ontological programs that intentionally step outside perspectival-axiom convergence without claiming deductive refutation) from **internal coherence limits**. First, our four-axiom architecture (A1–A4) does not claim to absorb non-perspectival realist interpretations of quantum mechanics that explicitly abolish fundamental observer-relativity by modifying dynamics or adding global hidden variables: (i) **De Broglie–Bohm pilot-wave mechanics**, which installs deterministic global particle configurations `Q(t) ∈ ℝ^{3N}` steered by a universal guiding wave (violating A1’s no-global-state premise at the fundamental ontological level, even though subsystem *conditional/effective wave functions* `ψ_eff(x_S)` reintroduce epistemic cuts operationally); (ii) **Objective spontaneous collapse theories** such as GRW (Ghirardi–Rimini–Weber) and Continuous Spontaneous Localization (CSL), which replace movable cuts with stochastic physical flash or mass-density collapse terms independent of observer demarcation; and (iii) **Arnold Neumaier’s Thermal Interpretation** or classical **Modal Interpretations** (van Fraassen, Dieks, Kochen), which reconstruct property attribution via operator q-expectations or spectral biorthogonal decompositions without centering operational closure.',
          'Second, in philosophy of mind, our framework explicitly separates itself from **constitutive panpsychism** (Goff, Strawson, Chalmers). Although the Structural Identity Thesis bridges phenomenology and quantum/biological systems, A3 and A4 rigorously block panpsychism’s combination problem by forbidding interior phenomenal experience in boundary-less micro-particles or passive linear transducers: authentic observerhood presupposes a self-maintaining operational boundary (A3) coupled with irreversible asymmetric self-relation (A4).',
          'Third, within our thirty-two included frameworks themselves, several extreme positions are retained in §§2–33 precisely because they act as **structural boundary tests** revealing where A1–A4 hit an outer limit—most notably Levinas’s infinite ethical asymmetry (§9, exceeding epistemic parity A2 and bounded horizon A3), Marion’s saturated phenomenon (§15, exceeding A3 capacity), Cramer’s bilateral handshake (§25, strained by relativistic foliations), and Silberstein–Stuckey’s adynamical Relational Blockworld (§26, rejecting fundamental temporal asymmetry A4). Keeping §9 and §15 inside the main sequence guarantees that borderline cases are diagnosed transparently rather than excluded out of convenience (Appendix C).'
        ]
      },
      {
        number: '1',
        title: 'Introduction: Historical Fracture, Varying-Domain S4 Semantics, and Modal Formalization',
        epistemicFocus: 'Many-sorted hybrid S4 ⟨W, R, D(w)⟩, Barcan countermodel, satisfaction clauses, ω-regress, ego placement & five-field stakes',
        paragraphs: [
          'Why does asking **“Where or who is the observer?”** immediately provoke the **Paradox of Constitutive Absence**? Because *“where”* asks for a spatial/systemic locus (answered by a demarcation boundary cut inside physical reality) while *“who”* asks for a first-personal bearer of reference (answered by an asymmetric de se vantage). In phenomenology, the observer enters as the transcendental condition of possibility for manifestation; in quantum foundations, the observer enters as an interacting subsystem defining a measurement partition; in analytic philosophy of language and quantum information (**Brukner & Zeilinger 2009**), the observer enters through **essential indexicals** (`I`, `here`, `now`, Perry 1979; *de se* attitudes, Lewis 1979; Moore’s Paradox and Shoemaker’s *immunity to error through misidentification*, 1968) alongside **Wittgenstein’s exact dictum (TLP 5.632)**: *“The eye does not actually see itself.”* Either the observer is flattened wholly inside the object domain (whereupon indexical mineness, selectivity, and measurement cuts vanish), or the observer is exiled outside the world (whereupon empirical interaction with physical clocks and living bodies collapses into dualism).',
          'To formalize this fracture without logical ambiguity, we specify six exact syntactic and semantic parameters (illustrated in **Figure 1.1**): (1) **Logic Classification**: our formalism operates in **many-sorted hybrid quantified modal logic S4**—combining actualist first-order quantification over observers `o ∈ D(w)` and contexts `w ∈ W` with bounded second-order structural predicates for local horizons `H_o`, boundary cuts `B_o`, equivalence relations `Equiv_inv`, and entropy-update functionals `S_o`. (2) **Model-Theoretic Frame `⟨W, R, D⟩`**: let `W` be a non-empty set of coherent dynamically accessible observational contexts (each `w ∈ W` specifying a compatible measurement algebra `M_w` and thermodynamic regime, *the precise definition of an accessible observational context*), `R ⊆ W × W` a reflexive and transitive (but not symmetric, because entropy exports are irreversible) accessibility relation, and `D : W → Sets` a **non-monotonic domain assignment** (`∃w, w′ ∈ W [wRw′ ∧ D(w) ⊈ D(w′)]` and `D(w′) ⊈ D(w)`). The necessity operator `□` ranges jointly over accessible context–observer pairs `(w, o)` with `o ∈ D(w)`. Under **free-logic actualist semantics**, pre-biotic primordial worlds `w₀` may carry an **empty observer domain `D(w₀) = ∅`**, evaluating `∀o ∈ D(w₀) Obs(o) → …` vacuously true without creating phantom observers.',
          '(3) **Explicit Barcan & Converse-Barcan Countermodel**: Define `M_BF = ⟨{w₀, w₁}, R, D⟩` with `R = {(w₀,w₀), (w₀,w₁), (w₁,w₁)}`, `D(w₀) = ∅`, and `D(w₁) = {o₁}` (plus a companion shrinking world `w₂` with `D(w₁)={o₁} → D(w₂)=∅`). At `w₀`, `w₀ ⊨ ∀x □Obs(x)` holds vacuously, whereas `∃x ∉ D(w₀)` arises at `w₁` (non-observer stone `x_p ∈ D(w₁)` violating `Obs`), yielding `M_BF, w₀ ⊭ □∀x Obs(x)` (blocking Barcan Formula `BF`). Symmetrically, `w₁ ⊨ □∀x Obs(x)` holds while `w₂` loses `o₁`, blocking Converse Barcan (`CBF`). Thus Schema (1.1) never forces finite observers to exist necessarily! (4) **Transcendental Ego Placement (`D(w)` vs. `Dom(Rep_o)`)**: Does the transcendental observer sit inside `D(w)` or outside it? Both in exact stratified senses: as an *active relational perspective tuple* `⟨H_o, B_o, S_o, I_now⟩`, every real observer belongs to the dynamic world domain `o ∈ D(w)` (no dualism); yet within `o`’s *own total represented object domain `Dom(Rep_o(w))`*, its generating cut and synthesis remain structurally unrepresented (`¬∃x ∈ Rep_o (x ≡ TotalCondition(o))`), explaining why an observer is *simultaneously world-situated and self-absent*.',
          '(5) **Friedman’s Relativized A Priori & Sellars Guard**: Rather than incoherent Kantian–Quinean syncretism, Axioms A1–A4 operate as **Friedman (2001, pp. 71–92) / Reichenbach (1965) relativized a priori constitutive conditions** enabling measurement and temporal reference while remaining accountable to §40 revisions; and `A4a` avoids **Sellars’s (1956) Myth of the Given** by encoding pre-inferential indexical orientation rather than infallible propositional justification. (6) **Five-Field Founding Stakes (Answered Explicitly in §43)**: Resolving this paradox determines core commitments across *(1) Epistemology & Philosophy of Science, (2) Phenomenology & Philosophy of Mind, (3) Quantum Foundations & Philosophy of Time, (4) Systems Biology, Cybernetics & AI, and (5) Ethics & Social Epistemology*.'
        ],
        equation: {
          label: '(1.1)',
          unicodeHtml: '□<sub>S4</sub>∀o [ Obs(o)  ↔  ( Immanence<sub>A1</sub>(o, H<sub>o</sub>) ∧ Parity<sub>A2</sub>(o, o′) ∧ Demarcation<sub>A3</sub>(B<sub>o</sub>) ∧ SelfRelation<sub>A4</sub>(o, I<sub>now</sub>) ) ]',
          caption: 'Conjunctive varying-domain S4 characterization with explicit per-conjunct satisfaction clauses (M, w ⊨_{g} Conj_k).',
          plainMeaning: 'In every accessible observational context (varying-domain S4, blocking Barcan existential overreach), functioning as an observer is co-extensive with satisfying all four explicit truth clauses over situated horizons (A1), parity (A2), cut separation (A3), and asymmetric duration (A4).',
          derivationSteps: [
            '1. [Clause A1 · M, w ⊨ Situated(o, H_o)] ∃H_o ⊊ W×τ_w with o ∈ D(w) such that Dom(Rep_o(w)) ⊆ H_o and ∃x ∈ W∖H_o (¬GlobalView(o)).',
            '2. [Clause A2 · M, w ⊨ Parity(o, o′)] ∀o′ ∈ D(w), if Overlap(o, o′) ≠ ∅ then Compat(o, o′) ∧ Equiv_inv(o, o′) is an equivalence on shared observables.',
            '3. [Clause A3 · M, w ⊨ Demarcation(B_o)] ∃compact boundary B_o separating bounded discrete sigma-algebra Σ_o ⊆ Inside_o from unmarked Ext_o (UnmarkedWithin(B_o, o)).',
            '4. [Clause A4 · M, w ⊨ SelfRelation(o, I_now)] ∃irreversible functional S_o ≥ 0 (Asym(S_o)) and closed interval I_now with Dur(I_now) > 0, Overlaps(Ret_o, I_now), Meets(I_now, Prot_o).'
          ]
        },
        theoremBox: {
          kind: 'Theorem',
          number: '1.1',
          title: 'Paradox of Constitutive Absence (Numbered ω-Regress Derivation in Varying-Domain S4)',
          statement: 'In any coherent epistemology or physical theory admitting non-trivial contextual variation, no observer o ∈ D(w) can simultaneously appear wholly represented inside its own domain Rep_o(W) while functioning as the global generating condition of Rep_o.',
          proofSteps: [
            '1. [Assumption for Reductio] Suppose ∃o ∈ D(w) [GlobalSelfRep(o) ∧ Constitutes(o, Rep_o(W))], meaning o represents all presuppositions of its own act of representing as one complete object x ∈ Rep_o(W).',
            '2. [Transcendental–Structural Rule, Kant B131 / Fichte / Von Neumann] ∀y (y ∈ Rep_o(W) → ∃o′ ∈ D(w′) [wRw′ ∧ Standpoint(o′) ∧ Synthesizes(o′, y) ∧ ExternalTo(o′, y)]).',
            '3. [Universal Instantiation on x] Since x ∈ Rep_o(W) encodes the total condition of o, ∃o₁ [Synthesizes(o₁, x) ∧ ExternalTo(o₁, x)].',
            '4. [Disjunctive Case Split] Either (Case 1) o₁ = o, or (Case 2) o₁ ≠ o.',
            '5. [Case 1 Elimination via Irreflexivity] If o₁ = o, then ExternalTo(o, x) contradicts Assumption 1 that x exhaustively includes every condition of o, yielding Include(x, o) ∧ ¬Include(x, o) → ⊥.',
            '6. [Case 2 Elimination via Explicit Ungrounded ω-Sequence] If o₁ ≠ o, iterating Step 2 constructs an infinite strict-order ω-sequence (o₀ ≺ o₁ ≺ o₂ ≺ … ≺ o_n ≺ … with n ∈ ω) accompanied by a strict no-base clause ¬∃o_base ∈ {o_n} (∀k ∈ ω, o_k ≤ o_base), barring stabilization of any complete base representation Rep_o(W) → ⊥.',
            '7. [Conclusion, RAA & S4 Necessitation] By Reductio ad Absurdum within varying-domain S4 (and sounding across finite/infinite domains via Case 1.1), □∀o ¬GlobalSelfRep(o): every constitutive observer remains absent as a total object within its own represented field.'
          ],
          sourceNote: 'Synthesizes Kant B131–B158, Fichte SW I 91–105, Wittgenstein TLP 5.632, Breuer (1995), and Fitting & Mendelsohn (1998).'
        },
        workedExample: {
          title: 'Dialectical Case 1.1 · Infinite- and Finite-Domain Reconstruction of Breuer’s Self-Measurement Limit',
          setup: 'Demonstrate via diagonalization and surjectivity impossibility (extending beyond finite pigeonhole counting to infinite Hilbert/phase spaces) why no observer embedded as a proper subsystem of world W can distinguish every global state of W.',
          steps: [
            '1. [Proper Subsystem Embedding] Embedded(o, W) → W ≅ Inside_o × Ext_o with |States(Ext_o)| ≥ 2 (non-trivial unrepresented exterior degrees of freedom).',
            '2. [Diagonal / Surjection Impossibility (Breuer 1995 / Cantor)] Even when States(Inside_o) is infinite, any total state-encoding map φ: States(W) → States(Inside_o) maps a product space of strictly higher informational multiplicity onto a proper factor (for binary self-reference indicators g(s), diagonalizing against self-representation yields no surjective φ).',
            '3. [Indistinguishability Consequence] Therefore ∃W₁, W₂ ∈ States(W) with W₁ ≠ W₂ yet InternalRecord_o(W₁) ≡ InternalRecord_o(W₂).',
            '4. [Modus Tollens Conclusion] Since CanDistinguish(o, W₁, W₂) → InternalRecord_o(W₁) ≢ InternalRecord_o(W₂), ¬CanDistinguish(o, W₁, W₂) ⊢ ¬CompleteSelfKnowledge(o).'
          ],
          resultEquation: {
            label: '(1.2)',
            unicodeHtml: '( W ≅ Inside<sub>o</sub> × Ext<sub>o</sub> ∧ |Ext<sub>o</sub>| ≥ 2 )  ⇒  ¬∃Surj(φ: W → Inside<sub>o</sub>)   ⊢   ¬CompleteSelfKnowledge(o)',
            caption: 'Generalized Breuer–Cantor self-measurement limit valid across both finite and infinite-dimensional state spaces (Figure 1.1).',
            plainMeaning: 'Distinct global states project onto identical internal records inside o’s cut regardless of finite or infinite dimensionality, barring total self-measurement.'
          },
          takeaway: 'Constitutive absence is a scale-invariant diagonal theorem uniting Kant, Fichte, Tarski, Gödel, and Breuer.'
        }
      }
    ]
  },
  {
    id: 'chapter-2',
    number: 2,
    kicker: 'Chapter 2 · Phenomenological & Transcendental Genealogy (§§2–9)',
    title: 'Eight Transcendental and Phenomenological Conceptions of the Observer',
    epigraph: '“Every attempt to turn the constituting act of consciousness into an object already presupposes a deeper constituting consciousness standing behind the reflection.” — Edmund Husserl, Ideas I / Bernau Manuscripts Synthesis',
    pullQuote: 'From Kant’s formal apperception to Levinas’s ethical trauma, phenomenology uncovers every layer of situated perspective—while revealing exactly where epistemic axioms reach their outer ethical boundary.',
    leadSummary: 'A balanced analytical reconstruction of §§2–9 engaging Kant’s vs. Husserl’s A1 provenance, Husserl’s LI V vs. Bernau & Sartre’s critique, Heidegger §§69–70, Merleau-Ponty’s chiasm constraining A3, Henry’s A4 reconciliation, and Levinas’s boundary test.',
    chapterIntro: [
      'Phenomenology did not stumble accidentally upon the observer problem; it converted the observer’s withdrawal from the empirical world into its founding methodological principle, the epoché. Yet across two centuries of development, every attempt to pin down what the transcendental observer positively is provoked an internal crisis that reshaped the tradition (Plate III, Figure 2.1).',
      'Tracing Sections 2 through 9 reveals an exact architectural escalation: from Kant’s non-substantial logical unity (§2), through Early Husserl’s non-egological stream (§3), Late Husserl’s self-temporalizing monad (§4), and Husserl’s intersubjective community (§5), to Heidegger’s ecstatic care (§6), Merleau-Ponty’s chiasmic body-subject (§7), Michel Henry’s asymmetric auto-affection (§8), and Emmanuel Levinas’s pre-intentional ethical subjection (§9) (Plate IV).'
    ],
    subsections: [
      {
        number: '2',
        title: "Kant's Transcendental Apperception",
        epistemicFocus: 'B-Deduction §16, Kantian vs. Husserlian A1 provenance, Second Analogy temporal asymmetry, Paralogisms, and Allison vs. Strawson',
        paragraphs: [
          'Immanuel Kant’s *Critique of Pure Reason* initiates modern observer theory by sharply severing the transcendental unity of apperception (B131–136, §16: “The *I think* must be able to accompany all my representations”) from the empirical ego of inner sense (B152–158). The empirical ego is a psychological flow of sensations and memories encountered chronologically in inner intuition like any natural object. By contrast, the transcendental “I think” is not an inner substance at all: it is the purely formal functional synthesis `Syn(o, R)`—the rule-governed unification of diverse intuitions `R` under pure categories so that representations belong to one coherent judgment. Notice a vital **provenance distinction for Axiom A1**: Kant derives no-global-view (`A1`) *logically and categorially* from finite discursive receptivity requiring sensible intuition alongside conceptual rules, whereas Husserl (§§4–5) derives `A1` *intuitively and horizonally* from bodily perspective adumbrations (*Abschattungen*) around a spatial zero-point (*Nullpunkt*)—marking distinct routes converging on identical situated finitude.',
          'In the Transcendental Dialectic’s Paralogisms (A341/B399–B432), Kant dissects the exact logical fallacy that later haunts physics. The First Paralogism of Substantiality (A348–351) warns against mistaking the “logical subject of every judgment” for an enduring metaphysical substance sitting inside nature, while the Third Paralogism of Personality (A361–366) uses an elastic-ball collision analogy to show that numerical identity across time presupposes a continuous formal standpoint rather than an immutable ghostly substrate—anticipating von Neumann’s arbitrary sliding measurement chain (§17). Furthermore, connecting the Transcendental Aesthetic (time as form of inner sense, A33/B49), the B-Deduction’s figurative synthesis (*synthesis speciosa*, B151–152), and the **Second Analogy of Experience (A189/B232)**, Kant proves that distinguishing an objective event (a ship sailing downstream) from a merely subjective scanning sequence (looking sequentially across house walls) demands an irreversible rule of causal order, directly prefiguring A4 temporal asymmetry.',
          'Equally vital is defending the methodological **“two-aspect” reading** of Kant’s phenomenal/noumenal distinction (**Allison 2004**, pp. 50–76) against **Peter Strawson’s (*The Bounds of Sense*, 1966)** metaphysical “two-world” charge. Phenomena and things-in-themselves are not two disconnected geographical realms; they represent reality considered *as indexed to an observer’s epistemic–receptive conditions* (A3) versus reality *abstracted from any operational cut* (unmarked exterior). Kant thus isolates Perspectival Immanence (A1) and Operational Demarcation (A3) while leaving intersubjective parity (A2) and pre-objective temporal thickness (A4) for phenomenology.'
        ],
        equation: {
          label: '(2.1)',
          unicodeHtml: '∀R ( Judged(R) → ∃o Syn(o, R) )  ∧  ∀o ¬( λR.Syn(o, R) ∈ Dom(InnerSense) )',
          caption: 'Kant’s apperception formalized: Syn(o, R) designates categorial synthesis excluded from inner intuition.',
          plainMeaning: 'Every unified judgment requires a formal synthesizing function Syn(o, R) distinct from the empirical ego encountered inside inner sense.',
          derivationSteps: [
            '1. Empirical Ego ∈ Dom(InnerSense): passively observed psychological stream.',
            '2. Transcendental Unity Syn(o, R): active categorial binding enabling unified judgment (B131–132).',
            '3. First/Third Paralogism Guard: Treating Syn(o, R) as an object in Dom(InnerSense) triggers infinite regress.'
          ]
        }
      },
      {
        number: '3',
        title: "Husserl's Transcendental Ego (Early) & Sartre's Critique",
        epistemicFocus: 'LI V vs. Bernau retention, Sartre A4a compatibility, Shoemaker immunity, and Zahavi minimal-self critique',
        paragraphs: [
          'In the Fifth Investigation of *Logical Investigations* (1900–1901, Hua XIX/1, §8), the early Edmund Husserl mounted an austere Brentanian–Humean critique of Natorp’s pure ego, declaring himself unable to find any primitive witness hovering above intentional acts—treating temporal retention provisionally via instantaneous act-content modification rather than the later two-dimensional **Bernau horizon continuum (§4)**. When Husserl added his 1913 second-edition footnote alongside *Ideas I* §57 n. 1 (Hua III/1, p. 124), announcing he had “since learned to find” the pure ego, **Jean-Paul Sartre’s *The Transcendence of the Ego* (1936/37, pp. 31–60)** accused Husserl of sliding back into an unnecessary Cartesian spectator behind an impersonal pre-reflective stream.',
          'Evaluating **`A4a` (pre-reflective asymmetric self-relation) against Sartre’s critique** yields a crucial precision: `A4a` is *strictly compatible* with Sartre’s banishment of the transcendent ego! Sartre never denied immediate first-person awareness; rather, he insisted that consciousness is *conscience (de) soi*—non-thetic, non-positional self-consciousness built directly into every directed intentional act without positing an objectified “I” hovering behind the curtain. That non-thetic first-personal asymmetry IS `A4a` before linguistic reflection.',
          'Meanwhile, engaging **Dan Zahavi’s (*Self-Awareness and Alterity*, 1999, pp. 138–156) minimal-self thesis** prevents a subtle misunderstanding: Zahavi defends pre-reflective *Meinhaftigkeit* (“for-me-ness”) against eliminative critics while warning against reifying “mineness” into an isolated homuncular kernel. In harmony with Zahavi and **Sydney Shoemaker’s (1968) *immunity to error through misidentification***, `A4a` specifies minimal structural de se ownership (`S_o ≥ 0`) inseparable from active experience, leaving thematic narrative personality for higher social-linguistic layers (§33).'
        ]
      },
      {
        number: '4',
        title: "Husserl's Transcendental Ego (Late)",
        epistemicFocus: 'Bernau Manuscripts continuity thesis vs. Allen interval reconstruction, Abschattungen, and Urstrom vs. Sellars',
        paragraphs: [
          'In *Ideas I* (1913), *Analyses Concerning Passive and Active Synthesis* (Hua XI), and the *Bernau Manuscripts on Time-Consciousness* (1917–1918, Hua XXXIII), Husserl replaces LI V’s static act-bundling with a concrete, self-temporalizing monad inhabiting a **thick living present (*lebendige Gegenwart*)**. Spatial objects manifest exclusively through perspectival adumbrations (*Abschattungen*, horizon A1), while temporal phases unfold continuously across Husserl’s famous two-dimensional Bernau diagram: horizontal progression of new primal impressions paired with diagonal continuums of primary retentions (`Ret_t(τ)`) and anticipatory protentions (`Prot_t(τ′)`) (Plate III, Figure 2.1).',
          'A crucial methodological question confronts our formalization in **A4b**: Husserl insists that lived retention forms an **unbroken phenomenological continuum** (*Kontinuum der Abschattungen*), whereas Allen’s interval calculus (§37) employs discrete closed intervals `I_ret, I_now, I_prot`. Does this contradict Husserl’s continuity thesis? Explicitly **no**: Allen intervals function here as a **finite-bandwidth structural rational reconstruction** (analogous to sampling a continuous differentiable manifold with overlapping coordinate charts) capturing non-punctual co-presence (`Overlaps(Ret_o, I_now)`) and transition adjacency (`Meets(I_now, Prot_o)`), rather than claiming that lived time consists of discrete digital bricks.',
          'Simultaneously, resolving the puzzle of Husserl’s pre-temporal “absolute functioning flow” (*Urstrom*, Hua X §36) answers **Wilfrid Sellars’s (1956) “Myth of the Given”**: the *Urstrom* is *pre-objective*, not frozen atemporality—it is the ongoing asymmetric streaming of retention-and-protention *that constitutes* measurable linear clock time (`t₁ < t₂`), functioning as non-propositional orientation rather than an infallible epistemic premise justifying assertions.'
        ],
        equation: {
          label: '(2.2)',
          unicodeHtml: 'Now<sub>H</sub>(t)  ≡  ( ⋃<sub>τ&lt;t</sub> Ret<sub>t</sub>(τ) ) ⊕ Urimp(t) ⊕ ( ⋃<sub>τ′&gt;t</sub> Prot<sub>t</sub>(τ′) )   ∧   PreObj(Urstrom) ⊢ Gen(Now<sub>H</sub>)',
          caption: 'Formalization of Husserl’s Bernau time diagram: continuous retentional tails, Urimpression, and protention reconstructed cleanly in Figure 2.1.',
          plainMeaning: 'The concrete living present fuses just-past retentions and coming protentions around an active primal impression, generated by pre-objective asymmetric flow.'
        }
      },
      {
        number: '5',
        title: "Husserl's Intersubjective Correction",
        epistemicFocus: 'Fifth Cartesian Meditation, Leib vs. Körper, Paarung against Einfühlung circle, and A2 Equiv_inv equivalence',
        paragraphs: [
          'To escape transcendental solipsism, Husserl’s *Fifth Cartesian Meditation* (§§49–58, Hua I, pp. 121–165) grounds worldly objectivity in an open plurality of monads standing at distinct zero-points of orientation (*Nullpunkte*), each anchoring an animated lived body (*Leib*) distinct from inert physical extension (*Körper*). Yet attempting to deduce other subjects strictly from inside my solitary “sphere of ownness” (*Eigenheitssphäre*) via analogical pairing (*Paarung* / *Einfühlung*) encounters a classic circularity: recognizing another body *Körper* as an animated peer *Leib* analogous to mine already presupposes a shared inter-bodily norm.',
          'Rather than merely patching a hole, this circularity supplies a rigorous transcendental proof linking **Husserlian intersubjective correction directly to A2 parity**: if a solitary ego `i` can perceive the hidden rear profile of a physical cube *as genuinely co-present* solely by positing a counterfactually positioned peer `j` witnessing it, then symmetric cross-perspective concordance (*Einstimmigkeit* / `Compat(P_i, P_j)`) is logically *prior to* private solipsistic closure. Solipsism presupposes the relational parity it pretends to doubt.',
          'Formally, `Equiv_inv(o, o′)` in Schema (2.3) guarantees an **equivalence relation** (reflexive, symmetric, transitive—proved explicitly in §34) over overlapping perceptual manifolds, directly anticipating Adlam–Rovelli’s Cross-Perspective Links (§21).'
        ],
        equation: {
          label: '(2.3)',
          unicodeHtml: 'Objective(W)  ↔  ∀i,j,k [ (Compat(P<sub>i</sub>, P<sub>j</sub>) ∧ Compat(P<sub>j</sub>, P<sub>k</sub>)) → Equiv<sub>inv</sub>(P<sub>i</sub>, P<sub>k</sub>) ]',
          caption: 'Husserlian objectivity as transitive covariant equivalence Equiv_inv across situated Nullpunkte.',
          plainMeaning: 'Shared reality consists in symmetric, transitive invariance across overlapping viewpoints, dissolving the Eigenheitssphäre circularity via A2.'
        }
      },
      {
        number: '6',
        title: "Heidegger's Dasein",
        epistemicFocus: 'Being and Time §§16, 69–70 breakdown modes to Vorhandenheit, ecstatic Sorge, Age of the World Picture, and Zollikon',
        paragraphs: [
          'Martin Heidegger’s *Being and Time* (1927, §§12–18, 65–70) launches the twentieth century’s sharpest dismantling of spectator epistemology. There is no detached cognitive observer inspecting sense-data inside a mental box; the observer is *Dasein*—being-in-the-world (*In-der-Welt-sein*) structured by Care (*Sorge*), uniting attunement (*Befindlichkeit*), existential understanding (*Verstehen*), and absorbed engagement within a totality of involvements (*Bewandtnisganzheit*).',
          'Critically, in *Being and Time* §§16 and 69b (pp. 72–76, 356–368), Heidegger traces the exact three-stage modification through which equipmental “ready-to-hand” absorption (*Zuhandenheit*) flips into detached scientific inspection of “present-at-hand” objects (*Vorhandenheit*): when a laboratory instrument fails through **conspicuousness (*Auffälligkeit*)**, missing components (**obtrusiveness, *Aufdringlichkeit***), or blockage (**obstinacy, *Aufsässigkeit***), practical involvement stalls; consciousness executes a changeover (*Umschlag*) into thematic **“just-looking” (*Nur-noch-hinsehen*)**, stripping phenomena of worldly relevance to isolate mathematically measurable spatio-temporal coordinates.',
          'Extending this critique in *The Age of the World Picture* (*Die Zeit des Weltbildes*, 1938), *What Is a Thing?* (1935–36, §§18–20), and the *Zollikon Seminars* (1959–69, pp. 24–40, 134–148), Heidegger demonstrates directly that modern mathematical physics turns nature into a standing objectified picture (*Bild*) placed before a representing *subiectum* while systematically concealing Dasein’s ecstatic temporalizing clearing (*Lichtung*) enabling that projection (Plate IV). What Heidegger resists—marking his `partial` entry on formal A2—is translating ontological clearing into symmetric cross-frame covariance axioms bridging ecstatic temporality with quantum cuts.'
        ]
      },
      {
        number: '7',
        title: "Merleau-Ponty's Body-Subject",
        epistemicFocus: 'Husserl Empfindnisse, Eye and Mind, chiasm as architectural constraint on A3 boundary cut, and Irigaray/Butler',
        paragraphs: [
          'Maurice Merleau-Ponty anchors the observer directly in biological flesh (*Phenomenology of Perception*, 1945, pp. 235–281; *Eye and Mind*, 1961; *The Visible and the Invisible*, 1964, Ch. 4, pp. 130–155). Rejecting both empiricist stimulus-response physiology and intellectualist judgment, he shows that the observer is the lived body (*corps vécu*)—an active sensorimotor field whose spatial depth, figure–ground organization, and perceptual constancy co-vary lawfully with kinesthetic posture and intentional motor grip (*intentional arc*).',
          'Developing **Husserl’s *Ideas II* (§36) analysis of *Empfindnisse*** (localized double-sensations), Merleau-Ponty’s *Visible and the Invisible* elevates **chiasmic reversibility** (*réversibilité*) into an ontological principle (Plate IV). When my right hand reaches across to touch my left hand while my left hand palpates a quartz stone, an internal fold opens: the left hand continually flips between *touched physical object* and *touching sentient witness*—and in *Eye and Mind*, a painter’s visual gaze simultaneously *sees* and *is seen within* visible materiality—yet **the two roles never collapse into simultaneous identity**. An irreducible divergence or slippage (**écart**) always preserves a living gap between witnessing act and witnessed flesh.',
          'Crucially, Merleau-Ponty’s chiasm imposes a **hard philosophical constraint on Axiom A3 (`Sep(B_o, Inside_o, Ext_o)`)**: A3’s demarcation cut *cannot* be modeled as a brittle, one-way Cartesian pane of glass isolating pure interior mind from dead matter! Because touching requires belonging to the tactile world oneself, `B_o` must function as an **asymmetrically reversible, permeable bodily fold** where every external impact perturbs internal sensitivity while the act of cutting (`écart`) refuses complete self-coincidence (**A4**). Responding further to **Luce Irigaray’s and Judith Butler’s** critiques that abstract “Flesh” risks erasing bodily differentiation, reading *écart* through **intercorporeality** and **A2 parity** ensures that shared flesh never flattens concrete historical, morphological, and situated difference into homogeneous sameness.'
        ]
      },
      {
        number: '8',
        title: "Michel Henry's Auto-Affection",
        epistemicFocus: 'Mapping non-temporal auto-affection explicitly onto A4 (Pathos → S_o ≥ 0), Zahavi critique, and partial A3',
        paragraphs: [
          'Michel Henry’s *The Essence of Manifestation* (1963, §§29–39, pp. 227–318) and later *Incarnation* (*chair* / living flesh, 2000) push phenomenological immanence to its most radical extreme. Against Heidegger’s ecstatic exteriority and Husserl’s intentional self-objectification, Henry proves that consciousness cannot achieve original self-awareness by projecting an image across external temporal distance; any such separation merely repeats Kant’s regress between seeing pole and seen object. Therefore, Henry posits *auto-affection*: an immediate, non-ecstatic, non-distant self-feeling (*pathos* / living ipseity) preceding worldly light (Plate IV).',
          'To resolve the **sharp structural tension between Henry’s strictly non-temporal auto-affection and A4’s temporal living-present requirement**, we distinguish formally between two levels connected by an **order-preserving projection `π_temp : Pathos_o → S_o ≥ 0`** (Theorem 2.1): Henry’s “non-temporality” specifically negates *ecstatic, linearized exterior clock time* (`T_ext`), NOT asymmetric dynamic intensity! By mapping non-indifferent affective intensity (`pathos`) onto the strictly non-negative irreversibility functional `S_o ≥ 0` (`A4a`), immanent auto-affection acts as the pre-chronometric asymmetric engine preventing Husserlian retention (`A4b`) from degenerating into reversible geometric symmetry. Second, addressing **Dan Zahavi’s (1999) critique and our Table 8.1 audit (`✗` on A2, `partial` on A3)**: sealing living immanence acosmically grants internal self-delimitation (`partial` on A3) while denying world-mediated parity (`✗` on A2)—a gap healed cleanly when Henry’s `A4a` pairs with Merleau-Ponty’s chiasmic `A3` and Husserl’s `A2` covariance.'
        ],
        theoremBox: {
          kind: 'Philosophical Thesis',
          number: '2.1',
          title: 'Henry’s Non-Ecstatic Grounding & A4 Compatibility Proof',
          statement: 'Self-awareness cannot arise solely from external symmetric representation without regress; Henry’s “non-temporal” auto-affection projects onto A4a (S_o ≥ 0), rendering thick living-present synthesis (A4b) non-vacuous.',
          proofSteps: [
            '1. [Premise] Distinguish Objective Clock Time T_ext (homogeneous external intervals) from Generative Asymmetry A4a (non-negative pre-reflective self-coupling S_o ≥ 0).',
            '2. [Henry’s Regress Argument] If ipseity depended upon objectifying across T_ext, recognizing oneself would demand an infinite chain of prior comparators.',
            '3. [Compatibility Inference via π_temp] Rejecting external T_ext as origin maps living pathos onto S_o ≥ 0 (irreversible immanent polarity) rather than negating extended phenomenological thickness |I_now| > 0.',
            '4. [Conclusion] Henry anchors A4’s asymmetric core while marking an explicit acosmic anomaly on external parity (A2) and worldly cut mediation (partial A3).'
          ],
          sourceNote: 'Henry (1963) §§29–39, pp. 227–318; Henry (2000); Zahavi (1999) pp. 110–137.'
        }
      },
      {
        number: '9',
        title: "Levinas's Ethical Subject",
        epistemicFocus: 'Reconciling §0.2 boundary-test status with §9 inclusion; Saying vs. Said, Diachrony, Substitution, and Critchley/Bernasconi',
        paragraphs: [
          'Closing Chapter 2, Emmanuel Levinas executes the sharpest inversion of modern philosophy across his two masterworks: *Totality and Infinity* (1961, pp. 187–219) and *Otherwise than Being, or Beyond Essence* (1974, pp. 99–129). Subjectivity does not begin as an epistemological observer synthesizing objects, nor even as Heideggerian care for its own finitude. Rather, the subject emerges out of elemental *enjoyment* (*jouissance*) only when shattered retroactively in the accusative (“here I am,” *me voici*) by the vulnerable epiphany of the **Face (*visage*) of the Other**—an encounter preceding intentional cognition (Plate IV).',
          'Reconciling **§0.2’s characterization of Levinas as a “boundary test” with §9’s full structural inclusion**: Levinas is *included* inside the thirty-two-framework genealogy precisely because his philosophy satisfies all three selection criteria (§0.1)—staging non-eliminative perspective, introducing specific categorical invariants (**Saying *le Dire* vs. Said *le Dit***, **diachrony**, and **substitution**), and maintaining cross-disciplinary parity—while functioning diagnostically as the **exact outer ethical boundary** of A1–A4 rather than a compliant specimen! Before any synchronous proposition (*le Dit*) fixes reciprocal equivalence, ethical exposure (*le Dire*) leaves an unassimilable *diachronic* trace overflowing symmetric memory (`A4` asymmetry carried beyond epistemic comprehension).',
          'In Table 8.1, therefore, we openly mark Levinas’s **explicit structural friction** against both **A2 (`✗`)** and **A3 (`✗`)**: whereas A2 mandates symmetric reciprocal translatability (`Compat(o, o′)`), Levinas defines ethics by radical **curvature of intersubjective space** (“I am infinitely more responsible than the Other”); whereas A3 demands a bounded horizon (`Sep(B_o, Inside_o, Ext_o)`), the Infinite *breaches* every border. Crucially, as **Simon Critchley and Robert Bernasconi** observe, Levinas’s own paradox—how philosophical writing (*le Dit*) can bear witness to unobjectifiable ethical exposure (*le Dire*) without betraying it—mirrors **A3’s exact formal predicament** of registering an unmarked exterior inside a finite text.'
        ]
      }
    ]
  },
  {
    id: 'chapter-3',
    number: 3,
    kicker: 'Chapter 3 · Deconstructive Critique & Bridge to Quantum Cuts (§§10–15a)',
    title: 'Six Ruptures of Presence and the Structural Bridge to Quantum Measurement Cuts',
    epigraph: '“The living present springs forth out of its non-identity with itself and out of the possibility of a retentional trace.” — Jacques Derrida, Speech and Phenomena',
    pullQuote: 'Deconstruction does not dissolve physics into wordplay; its six ruptures of the self-transparent ego trace the exact structural logic of non-commutativity, movable measurement cuts, and subsystem remainders.',
    leadSummary: 'Explains why post-structuralist ruptures emerge structurally from phenomenology, deepens §§10–15 (Derrida, Foucault’s Panopticon, Lacan’s $ parity, Deleuze’s virtual, Nancy’s être-avec, Marion’s saturation capacity), and formalizes §15a with commutative Diagram (3.4).',
    chapterIntro: [
      'Why does French post-structuralism follow classical phenomenology not merely as a chronological fashion of the 1960s, but as an internal logical necessity? Review Chapter 2 carefully: every single phenomenological project up to Merleau-Ponty attempted to rescue one protected inner sanctuary from Constitutive Absence—a punctual self-present “now” (Husserl), an authentic resoluteness (Heidegger), or pure pre-worldly immanence (Henry). Whenever phenomenology posited that self-identical zero-point, an internal contradiction immediately reopened (Plate V, Figure 3.1).',
      'Chapter 3 traces the six exact structural points where that residual sovereign ego fractures: temporal trace deferral (Derrida §10), historical institutional calibration (Foucault §11), unconscious signifying splitting (Lacan §12), sub-personal virtual synthesis (Deleuze §13), co-original relational exposure (Nancy §14), and conceptual saturation overwhelming finite borders (Marion §15)—before proving explicitly in §15a why every one of those six fractures shares identical structural-role geometry with quantum measurement cuts (Plate VI).'
    ],
    subsections: [
      {
        number: '10',
        title: "Derrida's Différance",
        epistemicFocus: 'Of Grammatology arche-trace/supplementarity, Speech & Phenomena, Violence & Metaphysics on symmetry, and autoimmunity',
        paragraphs: [
          'Across *Speech and Phenomena* (1967a, Ch. 5, pp. 60–69) and *Of Grammatology* (1967c, pp. 60–73, 141–164), Jacques Derrida dismantles Husserl’s attempt to preserve a solitary inner voice immune to external signs in a pure punctual instant (*Jetztpunkt*). By showing that Husserl’s own *Urimpression* depends constitutively on retention (the trace of an already-absent past), Derrida uncovers **arche-trace** and **supplementarity**: what appears as “originary self-presence” is already inhabited from the inside by non-presence—*différance* (simultaneously spatial differing/spacing and temporal deferring) (Plate V).',
          'Three crucial philosophical precisions preserve Derrida’s rigor inside our schema without domesticating him. First, we must NOT turn Derrida into a serene defender of Husserl’s *lebendige Gegenwart*: Derrida explicitly deconstructs phonetic self-presence as metaphysical closure. Instead, **A4** adopts Derrida’s strict **negative transcendental proof** (`¬PunctualNow(t)`): no zero-width unmediated instant exists; every coherent temporal mark involves extended differential tracing. Second, in “Violence and Metaphysics” (*Writing and Difference*, 1967b, pp. 79–153), Derrida critiques Levinas’s pure asymmetry by proving that encountering the Other *as* an alter ego already presupposes a Husserlian moment of reciprocal symmetry—explaining why A2 parity and Levinasian ethical alterity stand in productive tension rather than annihilating each other.',
          'Third, what of Derrida’s late writings on **autoimmunity** (*Rogues*, 2005, pp. 34–41)—warning that any closed axiomatic system destabilizes its own immune boundaries—and the risk that Schema (3.1) converts *différance* into an ordinary predicate? Reading Schema (3.1) purely as a *negative boundary constraint* shows why autoimmunity is inscribed structurally inside **A3**: because no demarcation cut `B_o` can contain itself or close off its unmarked exterior from within, A1–A4 never claim totalized self-mastery and remain permanently exposed to revision (§40).'
        ],
        equation: {
          label: '(3.1)',
          unicodeHtml: '∀t [ MarkablePresent(t) → ∃t₁ &lt; t &lt; t₂ (ArcheTrace(t₁, t) ∧ Deferral(t, t₂)) ]   ⊢   ¬PunctualSelfIdentity(t)',
          caption: 'Derridean negative constraint: differential trace dependency refutes any self-identical instantaneous present.',
          plainMeaning: 'Every temporal mark relies structurally on differential traces from elsewhere, proving zero-width punctual self-coincidence impossible.'
        }
      },
      {
        number: '11',
        title: "Foucault's Dispersed Subject",
        epistemicFocus: 'Archaeology (Las Meninas), Genealogy (Clinic & Panopticon), Dispositif vs. A1, and Late Subjectivation (pli)',
        paragraphs: [
          'Michel Foucault traces the observer across three decisive methodological axes—**Archaeology**, **Genealogy**, and **Late Subjectivation**—demonstrating that the grammatical slot “observer” is never an ahistorical biological constant. In his archaeological masterpiece *The Order of Things* (1966, pp. 3–16, 303–343), Foucault opens with Diego Velázquez’s painting **Las Meninas**: the sovereign king and queen who organize the entire visual perspective occupy an *absent exterior vanishing point* reflected only fleetingly in a distant rear mirror—supplying modernity’s sharpest painterly emblem of Theorem 1.1’s Paradox of Constitutive Absence prior to Kantian “Man” (Plate V).',
          'Turning to genealogical materiality, concrete **dispositifs** (linking architecture, instruments, classification tables, and power/knowledge norms) actively produce legitimate observers. In *The Birth of the Clinic* (1963, pp. 107–148), the clinical observer emerges solely alongside pathological anatomy, the stethoscope, and hospital statistics separating diagnostic gaze from lesioned flesh. In Bentham’s **Panopticon** (*Discipline and Punish*, 1975, pp. 195–228), radial visibility geometry installs a one-way asymmetric cut separating unseen watchtower from internalized self-surveillance.',
          'How does Foucault’s historicized *dispositif* relate to **A1 (Perspectival Immanence)**? Unlike transcendental timelessness, every historical *épistémè* calibrates which predicates count as observable inside a concrete power–knowledge cut (`B_o`), confirming **A1** precisely by eliminating unsituated universal spectators. Foucault’s late turn to **subjectivation** (*The Hermeneutics of the Subject*, 1981–82) further refutes any caricature that the subject is merely a passive puppet: by bending external force-relations back upon itself (the *fold* / *le pli*), critical inquiry exposes and shifts local boundary cuts (`A3`) immanently from within situated practice.'
        ]
      },
      {
        number: '12',
        title: "Lacan's Split Subject",
        epistemicFocus: 'Barred $, A2 parity test across Symbolic law, Extimacy, Gaze vs. Eye (Holbein), Real & objet petit a, and Borromean topology',
        paragraphs: [
          'Jacques Lacan’s psychoanalytic topology (*Écrits*, 1966, pp. 75–81, 671–702; *Seminar XI*, 1973, pp. 53–64, 105–119) explains why conscious ego-synthesis can never ground foundational observation. In the **Mirror Stage**, the infant’s **Imaginary ego (*moi*)** mistakes an external unified mirror Gestalt for sovereign mastery over motor fragmentation. By contrast, the speaking subject of the unconscious (**Symbolic subject of enunciation, *je***) is irreducibly **barred ($)**—divided between what it utters in differential signifiers (*énoncé*) and the fading locus from which speech issues (*énonciation*), quilted provisionally via *points de capiton* (Plate V).',
          'Three core Lacanian topologies refine our framework directly. First, **Extimacy (*extimité*)**: what is most intimately central to the subject stands radically *excluded as an alien exterior*, matching the exact topology of an **A3** demarcation boundary `B_o`. Second, the split between **Eye (*l’œil*) and Gaze (*le regard*)** in *Seminar XI*: analyzing Hans Holbein’s *The Ambassadors*, Lacan notes the anamorphic floating skull visible only from an oblique angle—the spot where the observer’s own unrepresented blind spot stares back from inside the visual field.',
          'Third, testing **`$` against A2 parity**: why does Lacan earn `partial` rather than full `✓` on A2 in Table 8.1? Because every speaking subject shares the symmetric symbolic law of language (*the big Other* allowing intersubjective structural legibility), yet unconscious desire hinges upon each subject’s singular unassimilable **Real** remainder (**objet petit a**, *Seminar XI*), resisting full symmetrical equivalence (“there is no sexual relation”). Meanwhile A1–A4 explicitly formalize the **barred speaking subject ($)** without ever attempting to heal `$` back into a unified Cartesian ego.'
        ]
      },
      {
        number: '13',
        title: "Deleuze's Fractured Cogito",
        epistemicFocus: 'Three passive syntheses (Habitus, Bergson Memory cone, Future Caesura), nomadic distribution, le pli, and partial observers',
        paragraphs: [
          'In *Difference and Repetition* (1968, pp. 70–128, 222–261), Gilles Deleuze revisits Kant’s fracture between active “I think” and passive empirical “I am,” proving that the empty form of time splits the observer across **three sub-personal passive syntheses**: (1) **Habitus**, organic contraction of successive instants into a biological living present; (2) **Mnemosyne**, a Bergsonian virtual *pure past cone* coexisting with every present phase; and (3) the **Caesura of the Future**, fracturing egoic circularity toward unassimilable novelty. Beneath personal subjectivity operate pre-individual “larval subjects” and *haecceities* (Plate VI).',
          'Furthermore, in *The Fold* (*Le Pli*) and his collaborative masterwork with Félix Guattari, ***What Is Philosophy?*** (1991/1994, Ch. 5, pp. 129–133), Deleuze explicitly introduces **“partial observers” (*observateurs partiels*)** embedded inside physical and biological functions—not anthropomorphic judges, but perspectival ideal sensitivities stationed at singular points of curvature across states of affairs (`A1`). And as Deleuze emphasizes through *folding*, an interior membrane (**A3**) forms solely as an invaginated fold (*pli*) of the outside rather than an isolated mental citadel.',
          'Tracing Deleuze’s Nietzschean–Leibnizian ontology clarifies our `partial` audit entry on **A2**: Deleuze champions **nomadic distribution** (open, non-hierarchical differential intensities across smooth space) against **sedentary distribution** (fixed categorical compartments), arguing on the virtual plane that intensity is “unequal in itself.” Our stratified model harmonizes this cleanly: *virtual intensive asymmetry* drives genesis (`A4a`), whereas **A2 egalitarian parity** constrains *actualized epistemic perspectives* so no actual observer claims sedentary cosmic hierarchy over rival standpoints.'
        ]
      },
      {
        number: '14',
        title: "Nancy's Singular Plural Being",
        epistemicFocus: 'Co-originality of être-avec, com-parution, spacing/Corpus limit, and relational co-constitution in A2',
        paragraphs: [
          'Jean-Luc Nancy’s *Being Singular Plural* (1996, pp. 1–99) and *Corpus* (2008, pp. 17–51) expose an unexamined prejudice shared from Descartes through early Husserl: positing a self-contained solitary observer first (“ego sum”) and only afterward trying to construct empathy, communication, or intersubjectivity. Nancy demonstrates that singularity and plurality are strictly **co-original** (*être-avec*, being-with): an observer never first exists alone and later enters society; singularity appears *solely through co-appearance (*com-parution*)*, exposing a finite outer limit to other singularities simultaneously without dissolving into an undifferentiated collective monolith (Plate VI).',
          'Crucially, in *Corpus*, Nancy interprets skin, boundary, and **spacing (*espacement*)** as neither solid enclosure nor empty gap: bodies touch *solely at an uncrossable limit* (`A3` finite boundary cut) where interiority and exteriority brush without merging. Thus, against Heideggerian *Mitsein* when misread as collective fusion, spacing preserves irreducible plurality.',
          'Critics might object that formalizing **A2 (Egalitarian Frame Parity)** as `∀o,o′ Parity(o, o′)` covertly smuggles back the pre-existing atomistic individuals (`o` and `o′`) that Nancy deconstructs! Yet in Schema (3.2) and Ontic Structural Realism (§38), the variables `o` and `o′` denote **co-constituted relational poles**, never isolated metaphysical substances: without boundary exposure `o ↔ o′`, no solitary `o` acquires determinate internal distinctions (`Inside_o`) at all.'
        ],
        equation: {
          label: '(3.2)',
          unicodeHtml: '∀o [ SingularObserver(o)  ↔  ∃o′ ≠ o ( BoundaryExposure(o, o′) ∧ CoOriginal(o, o′) ) ]',
          caption: 'Nancy’s singular-plural principle: observer variables o and o′ designate co-constituted relational poles, not prior atoms.',
          plainMeaning: 'No solitary observer exists prior to relation; individual standpoint and plural relational exposure arise simultaneously.'
        }
      },
      {
        number: '15',
        title: "Marion's Saturated Phenomenon",
        epistemicFocus: 'Fourfold Kantian inversion (Event, Idol, Flesh, Icon), formal A3 channel-capacity overflow, l’adonné, and Benoist/Janicaud critique',
        paragraphs: [
          'Jean-Luc Marion completes post-Husserlian phenomenology of givenness in *Being Given* (*Étant donné*, 1997, §§21–24, pp. 199–247) and *In Excess* (2002). Inverting **all four axes of Kant’s Table of Categories**, Marion identifies four distinct archetypes of **saturated phenomena** in which intuitive givenness violently exceeds conceptual synthesis: (1) *Quantity* → the **Event** (unforeseeable historical excess defying total causal summation); (2) *Quality* → the **Idol / dazzling artwork** (exceeding measurable intensity scales); (3) *Relation* → the **Flesh** (absolute auto-affection breaking external comparison); and (4) *Modality* → the **Icon / Face** (irreducible look escaping objectifying gaze) (Plate VI).',
          'Through **anamorphosis**, phenomena impose their own axis of visibility before the witness aligns a telescope; the observer survives solely as ***l’adonné*** (“the gifted” receiver)—constituted retroactively as a screen catching what impacts it. Simultaneously, secular critics including **Dominique Janicaud (1991)** and **Jocelyn Benoist (2001)** press the “theological turn” objection, arguing that pure unconditioned givenness slips past ordinary descriptive phenomenology without conceptual criteria.',
          'Going beyond informal talk of “exceeding,” we **formalize Marion’s `✗` collision on Axiom A3** information-theoretically: let any finite demarcation cut `B_o` possess finite Shannon/von Neumann encoding capacity `C(B_o) = sup_{ρ} I(Phenomenon : Σ_o) < ∞`. A phenomenon is *ordinary (A3-admissible)* whenever its incoming informational complexity satisfies `I(Phenomenon : B_o) ≤ C(B_o)`, permitting stable Boolean memory encoding inside `Σ_o`. Marion’s saturated phenomenon occurs specifically in the **channel-capacity overflow regime `I(Phenomenon : B_o) ≫ C(B_o)`**—blinding concept-formation without negating A3’s necessity whenever ordinary empirical science operates.'
        ]
      },
      {
        number: '15a',
        title: 'Structural Bridge: Why Post-Structuralist Ruptures Map Onto Quantum Measurement Cuts',
        epistemicFocus: 'Structural-role functor vs. monoidal category, anachronism caveat, core vs. anomalies, and commutative Diagram (3.4)',
        paragraphs: [
          'Without an explicit analytical bridge, placing Derrida, Foucault, and Lacan immediately before Bohr and Rovelli risks reading like loose literary juxtaposition. Why should post-structuralist critiques of self-presence exhibit the *exact same relational structure* as quantum measurement cuts? To keep method razor-sharp (**Figure 3.1**), notice three safeguards: first, our bridge constructs a **structural-role morphism** inside thin category `Role(Obs)` (*preserving cut-incompatibility, remainder shedding, and non-instantaneity*), NOT a claim that discourse obeys strict tensor-product **monoidal coherence axioms** (`A ⊗ B`); second, we enter an explicit **anti-anachronism caveat**—Derrida and Lacan did not derive *différance* or `$` from Hilbert spaces, nor did Bohr derive complementarity from French philosophy; rather, both disciplines independently hit identical structural constraints whenever global representation breaks down; and third, our SIT functors cover *core stabilized regimes* (`§§10–14`), explicitly setting aside *limit anomalies* (`Marion §15` capacity overflow, `Levinas §9` infinite ethical overflow) rather than forcing total collapse.',
          'Subject to those bounds, **role-preservation verification** holds across three exact correspondences: (1) **Non-Commutativity & Remainder (`[A, B] ≠ 0` ↔ `$ / a`)**: once experimental context participates in producing outcomes (Bohr §16), actualizing observable `A` renders conjugate `B` indeterminate and leaves an unrepresented environmental trace—matching Lacan’s barred `$` shedding `objet petit a` (§12) and Derrida’s arche-trace refuting zero-width punctual instants (`¬[t, t]`, §10); (2) **Agential/Dispositif Cuts (Foucault ↔ Von Neumann/Zurek/Barad)**: as **Karen Barad (*Meeting the Universe Halfway*, 2007, pp. 139–175)** demonstrates in unifying Foucault with Bohr, an experimental apparatus functions as an intra-active **agential cut** dividing measured phenomenon from measuring agency; and (3) **Co-Original Relationality (Nancy/Deleuze ↔ RQM/Wigner)**: Nancy’s relational poles (§14) and Deleuze’s *partial observers* (§13) obey the same commutative diagram **(3.4)** transferring cuts across incompatible contexts without privileged foundations.'
        ],
        equation: {
          label: '(3.4)',
          unicodeHtml: 'Ctx<sub>A</sub> ──[ Φ<sub>Role</sub> : Cut(B<sub>o</sub>) ]──▶ Alg<sub>Quant</sub>(H<sub>S</sub>)  ;   F<sub>Role</sub>(A ; B) = F<sub>Role</sub>(A) ∘ F<sub>Role</sub>(B)   ∧   [A, B] ≠ 0 ⊢ ExtRemainder(a)',
          caption: 'Commutative role-preservation diagram bridging post-structuralist cut ruptures (§§10–14) to quantum measurement algebras (§§16–27) (Figure 3.1).',
          plainMeaning: 'Translating from discursive cut structures to quantum measurement algebras preserves non-commuting context composition and remainder shedding without implying historical borrowing.',
          derivationSteps: [
            '1. Non-commuting observables [A, B] ≠ 0 entail irreducible complementarity across incompatible dispositifs.',
            '2. Every operational cut B_o sheds an unassimilable remainder outside Inside_o (Lacan objet petit a / partial-trace environment Tr_E).',
            '3. Trace deferral across distinct contexts prohibits any unmediated zero-width present [t, t], feeding directly into No-Go Theorem 5.1.'
          ]
        }
      }
    ]
  },
  {
    id: 'chapter-4',
    number: 4,
    kicker: 'Chapter 4 · Orthodox Quantum Foundations (§§16–20)',
    title: 'Orthodox Quantum Foundations: Complementarity, Cuts, Branches, and Participation',
    epigraph: '“No elementary quantum phenomenon is a phenomenon until it is a registered phenomenon.” — John Archibald Wheeler, Law Without Law',
    pullQuote: 'From Bohr’s classical communication at Solvay through von Neumann’s sliding cut to Wigner’s Friend no-go theorems, orthodox quantum mechanics uncovers perspectival finitude inside the laboratory.',
    leadSummary: 'Dedicated examination of the five foundational orthodox quantum frameworks (§§16–20): Bohr’s complementarity & Solvay/EPR (Faye, Howard, Folse, Zinkernagel), von Neumann & Lüders vs. London–Bauer, Local Friendliness parity, Everett’s branching + Sebens–Carroll & decoherence, and Wheeler’s quantum eraser & 5th-axiom test.',
    chapterIntro: [
      'When twentieth-century physics crossed into the atomic domain, it abruptly inherited the exact constitutive-absence dilemma that Kant and Husserl had wrestled with in philosophy—now armed with unitary evolution and probabilistic state updates. To reduce cognitive load and expose the internal evolution of physics itself, we divide the twelve quantum frameworks cleanly across two chapters: Orthodox Quantum Foundations (Chapter 4, §§16–20) wrestling directly with the measurement cut, followed by Relational, Epistemic, and Dynamical Models (Chapter 5, §§21–27) reconstructing quantum theory relationally or dynamically.',
      'Sections 16 through 20 trace how classical pragmatic cuts (Bohr), sliding mathematical partitions (von Neumann), intersubjective contradictions (Wigner’s Friend), universal branching (Everett), and participatory detection (Wheeler) progressively dissolve the illusion of a detached observer outside physics (**Figure 4.1**).'
    ],
    subsections: [
      {
        number: '16',
        title: 'Copenhagen (Bohr): Complementarity, Contextual Cuts, and Solvay–EPR',
        epistemicFocus: 'Semantic complementarity vs. Heisenberg disturbance, Folse/Faye/Howard/Zinkernagel, Solvay 1930, and EPR 1935',
        paragraphs: [
          'Reducing Niels Bohr’s Copenhagen framework to a crude spatial boundary between micro-atoms and macro-pointers obscures his epistemological depth. As **Henry Folse (1985), Jan Faye (1991), Don Howard (1994, pp. 201–229), and Henrik Zinkernagel (2016)** emphasize, Bohr breaks sharply with **Werner Heisenberg’s early epistemic “disturbance” picture** (the naive claim that a gamma-ray microscope merely kicks an electron possessing pre-existing sharp position and momentum). For Bohr (1949, pp. 200–241), **complementarity** is a **semantic and transcendental-contextual thesis**: two mutually exclusive experimental setups (a rigid double-slit diaphragm for interference vs. a spring-mounted recoil shutter for path momentum) define incompatible conditions for unambiguous predicate application—echoing Kant’s synthetic conditions of communicability **(Plate VII)**.',
          'Crucially, Bohr’s classical/quantum demarcation is **strictly contextual rather than ontologically fixed**: the identical physical component acting as part of the classical apparatus in one experiment can become the quantized target in another. Under **A3**, the operational cut `B_o` is contextually movable, yet within any single phenomenon one side must stand as an unambiguous classical reference enabling intersubjective communication (`A2` programmatic seed, though classical-instrument asymmetry leaves full A2 covariance and A4 ipseity under-specified).',
          'Nowhere did Bohr hone this contextualism more sharply than in the **1930 Solvay photon-box debate** (turning Einstein’s own general-relativistic gravitational clock redshift against energy–time violation) and his **1935 reply to Einstein–Podolsky–Rosen (EPR)**. Against EPR’s realism criterion, Bohr conceded there is zero mechanical disturbance across spacelike separation, yet proved there exists an irreducible *“influence on the very conditions which define the possible types of predictions regarding the future behavior of the system”*—directly formulating **A1 perspectival immanence** at the birth of entanglement theory.'
        ]
      },
      {
        number: '17',
        title: "Von Neumann's Chain, Lüders's Rule, and Psychophysical Parallelism",
        epistemicFocus: 'Process 1/2, Lüders (1951) vs. von Neumann rank-1 projection, statistical cut covariance, and London–Bauer contrast',
        paragraphs: [
          'In *Mathematical Foundations of Quantum Mechanics* (1932, Ch. VI, pp. 347–445), John von Neumann formalized Bohr’s pragmatic boundary into the duality between continuous unitary evolution (**Process 2**) and discontinuous state reduction (**Process 1**, refined later by **Gerhart Lüders’s 1951 projection rule** `ρ ↦ P_a ρ P_a / Tr(P_a ρ)` so degenerate subspaces preserve coherent internal phase relations rather than collapsing blindly to rank-1 eigenstates). Because couplings across micro-system → detector → photographic plate → optic nerve (`H_S ⊗ H_A ⊗ H_O`) obey linear Process 2 propagation, von Neumann proved that sliding the partition cut along the chain leaves predicted probabilities strictly invariant **(Figure 4.1)**.',
          'Under **A3 (Operational Demarcation Cut)**, this arbitrary mobility expresses a positive theorem of **frame covariance** (analogous to gauge choice in field theory): precisely because no mystical physical wall separates “quantum nature” from “classical mind,” relocating the demarcation cut preserves empirical statistics inside accessible registers—so long as an actual cut terminates unitary regress (`¬∃c_end → Regress(Process2)`). Moreover, this exact structural requirement anticipates **No-Go Theorem 5.1 (§21)** by proving that coherent internal records cannot simultaneously register full bipartite coherence without cutting the causal chain.',
          'Equally vital is distinguishing von Neumann’s formal **“abstract ego”** from **Fritz London & Edmond Bauer’s (1939)** explicit appeal to conscious introspection (which helped inspire Wigner’s 1961 mental-collapse hypothesis in §18). Von Neumann invoked *psychophysical parallelism* strictly as a **methodological closure limit**—demonstrating mathematically that Process 1 must be indexed *at or prior to* subjective registration (`A1`), *not* claiming that an immaterial mind physically collapses wave functions in space.'
        ],
        equation: {
          label: '(4.1)',
          unicodeHtml: '∀c₁, c₂ [ ValidCut(c₁) ∧ ValidCut(c₂) → ( ShiftInvariant(Prob, c₁, c₂) ∧ (¬∃c_end → Regress(Process2)) ) ]',
          caption: 'Covariance of von Neumann’s chain: shifting the A3 cut preserves statistics while forcing a situated boundary.',
          plainMeaning: 'Cut mobility is a covariant feature of relational measurement rather than a defect, yet an actual cut remains required to terminate unitary regress.'
        }
      },
      {
        number: '18',
        title: "Wigner's Friend and Extended Parity No-Go Theorems",
        epistemicFocus: 'Brukner (2018), Frauchiger–Renner (2018) & Lazarovici–Hubert, Bong Local Friendliness & Proietti (2019), and A2 indexing',
        paragraphs: [
          'Eugene Wigner (1961, pp. 284–302) sharpened von Neumann’s chain into an intersubjective crisis: an inner agent **F (Friend)** inside a sealed laboratory registers a definite spin (`↑` or `↓`), whereas external super-observer **W (Wigner)** models `{spin + F}` evolving coherently as `(|↑⟩|F_↑⟩ + |↓⟩|F_↓⟩)/√2`. Contemporary physics has transformed Wigner’s thought experiment into rigorous no-go theorems—tested experimentally at photonic qubit scale (**Proietti et al. 2019**, *Science Advances*; **Bong et al. 2020**, *Nature Physics*) **(Plate VIII)**.',
          'Crucially, three distinct logical theorems isolate different pressure points: (i) **Časlav Brukner (2018)** combines Bell locality, freedom of choice, universal QM, and observer-independent facts (`Fact(x)`); (ii) **Frauchiger & Renner (2018)** avoid Bell locality altogether by deriving an internal self-referential paradox when agents chain predictions across complementary bases (prompting **Lazarovici & Hubert 2019** to expose how inconsistent fact-exportation triggers the clash); and (iii) **Bong et al. (2020) Local Friendliness** proves a strictly weaker inequality combining *No-Superdeterminism*, *Locality*, and *Absoluteness of Observed Events (AOE)*. Together with **No-Go Theorem 5.1 (§21)**, these results establish an operational ceiling on joint coherence visibility and classical signaling across nested cuts.',
          'What saves science once AOE falls? **A1 + A2 (Perspectival Immanence + Egalitarian Frame Parity)**: W and F occupy symmetrically valid cuts (`¬Privileged(W)` and `¬Privileged(F)`). Rather than exporting naked facts across incompatible cuts, A2 mandates **covariant frame-indexing (`Fact(x | o)`)**, dissolving Theorem 4.1’s contradiction `q ∧ ¬q` without sliding into solipsism.'
        ],
        theoremBox: {
          kind: 'No-Go Theorem',
          number: '4.1',
          title: 'Extended Wigner’s Friend & Local Friendliness Contradiction',
          statement: 'Under universal unitary validity across nested observers, assuming absolute observer-independent facts alongside naive cross-frame deductive importation generates a formal contradiction q ∧ ¬q.',
          proofSteps: [
            '1. [Universal Validity (Q)] Both inner friend F and outer observer W apply standard quantum rules reliably within their accessible horizons.',
            '2. [Absoluteness Assumption (¬A1/A2)] Suppose recorded outcome p by F holds absolutely (AOE) without frame-indexing.',
            '3. [Inferential Chaining] Extended Wigner protocols allow W to deduce certainty of complementary outcome q from F’s premise while outer interference forces ¬q.',
            '4. [Contradiction & Conclusion] Deriving q ∧ ¬q → ⊥ refutes Premise 2 by Reductio: facts in relational measurement must be perspectivally indexed under A1–A2.'
          ],
          sourceNote: 'Brukner (2018) Entropy 20(5):350; Frauchiger & Renner (2018) Nat. Commun. 9:3711; Proietti et al. (2019); Bong et al. (2020).'
        }
      },
      {
        number: '19',
        title: "Everett's Relative States, Branching, and Probability",
        epistemicFocus: 'Preferred Basis (§23 link), Deutsch–Wallace vs. Sebens–Carroll Born derivations, Many-Minds contrast, and Fig. 5.1 (0.78, 0.88)',
        paragraphs: [
          'Hugh Everett III’s 1957 *Relative State* formulation removes Process 1 entirely: only the universal state vector `|Ψ⟩` evolves unitarily, while an observer acts internally as a correlated memory subsystem defining branch-relative facts. Everett marks a powerful physical counterpart to Husserl’s plurality of monads: no witness views the branching multiverse from an outside throne.',
          'Three acute philosophical challenges define Everett’s exact position in **Figure 5.1 (`x = 0.78` Relational Parity, `y = 0.88` Cut Mobility)**. First, the **Preferred Basis Problem**: bare unitary branching fails to specify why reality splits into localized quasiclassical worlds rather than rotated cat-states without **Decoherence Theory (§23)**, which dynamically stabilizes an effective cut (`A3`) via einselection. Second, the **Probability / Incoherence Problem**: how do deterministic branching amplitudes `|c_k|²` dictate rational betting odds? **Deutsch (1999) and Wallace (2012)** derive Born weights from decision-theoretic axioms for branching agents, whereas **Sebens & Carroll (2018)** derive Born probabilities from *self-locating uncertainty* via an *Epistemic Separability Principle*—confirming that intra-branch observers remain bounded under **A1**.',
          'Third, contrasting bare Everett with **Albert & Loewer’s (1988) Many-Minds** highlights a decisive tension on **A2 parity** across unequal branch measures (`|c₁|² ≪ |c₂|²`) and clarifies how branch-relative deterministic readouts (`r = m`) in **No-Go Theorem 5.1** preserve no-signaling on reduced marginals without superluminal communication.'
        ]
      },
      {
        number: '20',
        title: "Wheeler's Participatory Universe & Delayed-Choice Erasers",
        epistemicFocus: 'Delayed choice, Scully–Drühl & Kim et al. (2000) quantum eraser, refuting retrocausality, and disproving a 5th axiom',
        paragraphs: [
          'John Archibald Wheeler (1983, pp. 182–213) projected Bohr’s complementarity onto cosmic scales via the **delayed-choice experiment** and his aphorism **“It from Bit.”** Crucially, later laboratory realizations—specifically **Scully & Drühl’s (1982) and Kim et al.’s (2000) Delayed-Choice Quantum Eraser**—prove why Wheeler does NOT require mystical backward-in-time causation: an idler detector choice made after a signal photon hits a screen never alters the *marginal* signal pattern; interference fringes re-emerge *exclusively upon A2 cross-correlated coincidence post-selection* between signal and idler records **(Figure 4.1)**!',
          'Does Wheeler’s participatory universe prove that our four-axiom schema (`A1–A4`) is incomplete—requiring a **Fifth Axiom** claiming *conscious participation ontologically creates reality*? Logical dissection separates two conflated theses cleanly: (a) **Epistemic–Phenomenal Participancy**—no quantum observable bears a classical value prior to a contextual registration cut (“no phenomenon is a phenomenon until registered”), which is **already completely entailed by A1 (situated context) + A3 (demarcation cut)** without any fifth axiom; and (b) **Strong Ontological Idealism**—the speculative claim that future primate choices retroactively bring primordial cosmology into existence.',
          'While absorbing claim (a) cleanly inside A1 and A3, we reject claim (b) as anthropocentric overreach: autonomous dissipative boundary interactions (§27) realize physical “bit-registrations” billions of years prior to human minds.'
        ]
      }
    ]
  },
  {
    id: 'chapter-5',
    number: 5,
    kicker: 'Chapter 5 · Relational, Epistemic, and Dynamical Quantum Models (§§21–27)',
    title: 'Relational, Epistemic, and Dynamical Quantum Models',
    epigraph: '“Reality is reduced to interaction; an object in itself, isolated from all interaction, has no physical properties.” — Carlo Rovelli, Helgoland',
    pullQuote: 'Relational QM, QBism, Decoherence, Consistent Histories, Transactional Handshakes, Blockworld Constraints, and the First Observer Hypothesis converge on relational finitude—except where blockworld ontologies collide with asymmetric time.',
    leadSummary: 'Dissects the seven relational, epistemic, and dynamical quantum frameworks (§§21–27): Rovelli (Pienaar/Brukner/Bitbol/Nāgārjuna & Cross-Perspective Links), No-Go Theorem 5.1 & Worked Two-Qubit Witness, QBism (Urgleichung & Timpson), Decoherence, Consistent Histories, Cramer TI, RBW, and FOH.',
    chapterIntro: [
      'Whereas Orthodox foundations wrestled primarily with where to halt von Neumann’s chain inside a single laboratory, the seven research programs in **Chapter 5** fundamentally reorganize quantum mechanics around **relational correlation, Bayesian agency, environmental superselection, consistent narrative lattices, spacetime handshakes, or non-equilibrium observer autonomy**.',
      'Crucially, this chapter proves **No-Go Theorem 5.1** bridging finite split boundaries (`A3`) to bipartite quantum signaling limits, then maps our strongest allies—Rovelli’s RQM (§21), Zurek’s einselection (§23), and the First Observer Hypothesis (§27)—alongside internal physical challenges in Cramer (§25) and Relational Blockworld (§26) (**Figure 5.1**).'
    ],
    subsections: [
      {
        number: '21',
        title: "Rovelli's Relational Quantum Mechanics (1996–2023) & No-Go Theorem 5.1",
        epistemicFocus: 'Pienaar/Brukner solipsism critiques, Adlam–Rovelli Cross-Perspective Links, No-Go Theorem 5.1 (F > 1/2 vs r = m), and Worked Two-Qubit Bell Witness',
        paragraphs: [
          'Carlo Rovelli’s Relational Quantum Mechanics (RQM, 1996, pp. 1637–1678) proclaims thorough anti-anthropocentric parity: any physical system `S₁` functions as an “observer” relative to any interacting system `S₂`, and properties/states `|ψ⟩_{S₂|S₁}` exist strictly relative to physical interactions rather than in an absolute God’s-eye space. Strikingly, in *Helgoland* (2021, pp. 121–145), Rovelli draws an explicit parallel to **Nāgārjuna’s *Mūlamadhyamakakārikā*** (mutual empty interdependence without self-standing substance), while **Michel Bitbol** interprets RQM in a *neo-Kantian / transcendental* register aligning closely with §§1–5.',
          'Yet recent physics criticism forced a decisive structural maturation validating our thesis. **Jacques Pienaar (2021)**, **Časlav Brukner (2021)**, and **Muciño–Okon–Sudarsky (2022)** argued that if Friend’s facts relative to Electron remain sealed off from Wigner’s facts relative to Friend, bare RQM splinters into fragmented solipsistic islands incapable of shared objectivity. In **Di Biagio & Rovelli (2021)** (decoherence-stabilized “stable facts”) and **Adlam & Rovelli (2023)** (“Information Is Physical”), RQM resolves this by postulating **Cross-Perspective Links**: if A measures Q of S and B measures A’s pointer coherently, their records *must agree covariantly*. That postulate IS literally our **A2 (Egalitarian Frame Parity)**—proving RQM itself required an explicit A2 axiom to avert solipsism!',
          'Before turning to **QBism**, we crystallize the physical interplay between **A2**, **A3**, and quantum entanglement in **No-Go Theorem 5.1** and **Worked Example 5.2** **(Plate IX; Figure 5.1)**. Notice ten essential formal precisions guarding Theorem 5.1 against standard foundational confusions: (i) **Clause Separation & Fidelity Lemma**: distinguish the *statistical condition* (`F > 1/2` over a single-shot binary preparation ensemble `{m ∈ {0, 1}}`, yielding pointer agreement bound `P(r = m) ≥ 2F − 1 > 0` by linear trace-distance convexity) from the *deterministic condition* (`r = m` with `F = 1`); (ii) **Converse & Fallacy Guard**: the converse direction fails whenever unitary post-selection (`V_coh`) acts *only inside* one branch—falsely inferring `r = m ⇒ no entanglement` commits the **converse fallacy**, ignoring decoherence-free subspaces unless the split inclusion holds; (iii) **Quantifier Order**: `∀o₁, o₂ ∃B_o` (an operational cut exists *dependent on* the communicating pair), NOT a single cosmic cut `∃B_univ ∀o₁, o₂`; (iv) **Cross-Links & Bilateral Handshakes**: Theorem 5.1 tightens **Frauchiger–Renner (2018)** and **Bong et al. (2020) Local Friendliness** by fixing *one-way channel signaling fidelity* (`F` from `o₁` to `o₂` over independent preparation trials obeying Bell **preparation independence**), contrasting cleanly with Cramer’s *two-way* offer/confirmation handshake (§25); (v) **Operational Readout & Consistency with A2**: `m ∈ {0, 1}` is a classical preparation bit encoded by `o₁`, while `r ∈ {0, 1}` is a macroscopic pointer record registered inside `o₂`’s Boolean subalgebra `Σ_{o₂}`—strictly consistent with **A2 parity** (zero privileged frame; both frames transform symmetrically under Cross-Perspective Links) and **distinct from Bell nonlocality** (which violates local hidden-variable factorizability) and **PBR** (which tests ontic distinctness of pure quantum states); (vi) **Everett Branch-Relativity & Doplicher–Longo Hypotheses**: within Everettian branching (§19), `r = m` holds strictly *branch-relatively* (`Tr_B(ρ_AB)` preserves no-signaling marginals), and invoking A3’s boundary rests explicitly on the **Doplicher–Longo (1984) Split Property**—nuclearity of the local Hamiltonian `exp(−β H)` plus compact buffer collar `Cl(O₁) ⊂ O₂` guaranteeing an intermediate **Type I factor `N`** (`M(O₁) ⊂ N ⊂ M(O₂)′`, depicted in **Plate IX** and **Figure 5.1**). Finally, RQM satisfies **A4 (Asymmetric Self-Relation & Thick Present)** via **irreversible thermodynamic record updates** dissipating entropy across `|I_now| > 0`.'
        ],
        theoremBox: {
          kind: 'No-Go Theorem',
          number: '5.1',
          title: 'Bipartite Cut–Signaling Trade-Off (Fidelity Lemma & Doplicher–Longo Split Constraint)',
          statement: 'For any pair of situated observers ∀o₁, o₂ coupled across a bipartite quantum substrate satisfying preparation independence, local Doplicher–Longo nuclearity, and split boundary ∃B_o (M(O₁) ⊂ N ⊂ M(O₂)′): (1) [Statistical Clause] One-way classical signaling fidelity F > 1/2 across an ensemble of independent trials (m, r ∈ {0, 1}) forces agreement bound P(r = m) ≥ 2F − 1 > 0 via the Fidelity Lemma and suppresses complementary cross-cut interference visibility V_coh ≤ 2√(F(1 − F)) < 1; (2) [Deterministic Clause] Branch-relative deterministic registration (r = m, F = 1) forces complete decoherence of off-diagonal cross-cut interference (V_coh = 0) relative to the registered cut without violating reduced-marginal no-signaling.',
          proofSteps: [
            '1. [Quantifier & Operational Setup] Fix ∀o₁, o₂ with operational cut B_o separating O₁ from O₂ under nuclearity exp(−β H) and Split Property M(O₁) ⊂ N ⊂ M(O₂)′. Let o₁ encode preparation bit m ∈ {0, 1} across independent identically prepared runs (satisfying preparation independence), and let o₂ register classical pointer readout r ∈ {0, 1} inside Boolean algebra Σ_{o₂}.',
            '2. [Fidelity Lemma] Over the single-shot binary ensemble, signaling fidelity F = ½ P(r = 0 | m = 0) + ½ P(r = 1 | m = 1) satisfies F > 1/2 iff total agreement probability P(r = m) ≥ 2F − 1 > 0 and trace distance ½‖ρ₀ − ρ₁‖₁ ≥ 2F − 1 (one-way causal transmission, unlike Cramer two-way handshakes).',
            '3. [Complementary Coherence Bound] By Fuchs–van de Graaf trace inequalities across intermediate Type I factor N, mutual record distinguishability bounding P(r = m) bounds off-diagonal visibility V_coh ≤ 2√(F(1 − F)). Thus deterministic readout (r = m ⇒ F = 1) forces V_coh = 0 across B_o.',
            '4. [Consistency with A2, Everett & Converse Guard] Frame transformations obey A2 parity (no privileged cosmic cut; unlike PBR on pure-state ontology or Bell factorizability); inside Everett (§19), r = m holds branch-relatively while marginals remain no-signaling. Note the converse fails: V_coh = 0 alone never entails F > 1/2 (classical erasure yields zero coherence with F = 1/2).'
          ],
          sourceNote: 'Cross-links Frauchiger–Renner (2018), Bong et al. (2020), Doplicher–Longo (1984) Invent. Math. 75, and Plate IX / Fig. 5.1.'
        },
        workedExample: {
          title: 'Worked Example 5.2 · Two-Qubit Bell State Witness |Φ⁺⟩_SA Instantiating No-Go Theorem 5.1',
          setup: 'Evaluate Theorem 5.1 explicitly on a maximally entangled two-qubit witness |Φ⁺⟩_SA = (|00⟩ + |11⟩)/√2 shared across system S (o₁) and apparatus pointer A (o₂) with tunable dephasing visibility V_coh ∈ [0, 1].',
          steps: [
            '1. [Pointer Coupling & Marginals] When o₁ encodes computational bit m ∈ {0, 1} via |m⟩⟨m| projection, apparatus A registers readout r = m with fidelity F = 1, yielding classical mixture ρ_S = ½(|0⟩⟨0| + |1⟩⟨1|) (marginal no-signaling invariant) and V_coh = 2√(1(1 − 1)) = 0.',
            '2. [Unitary Partial-Fidelity Channel] Introduce weak pre-measurement coupling producing overlap fidelity F = 0.85 across independent preparation trials: the Fidelity Lemma gives P(r = m) ≥ 2(0.85) − 1 = 0.70, strictly capping residual off-diagonal interference at V_coh ≤ 2√(0.85 × 0.15) ≈ 0.714 < 1.',
            '3. [Check Converse Failure] Conversely, passing |Φ⁺⟩_SA through symmetric phase-flip noise (ρ = ½|00⟩⟨00| + ½|11⟩⟨11| without recording m) sets V_coh = 0 while one-way signaling fidelity remains F = 0.50—illustrating why V_coh = 0 ⇏ F > 1/2.'
          ],
          resultEquation: {
            label: '(5.3)',
            unicodeHtml: 'F = 0.85  ⇒  P(r = m) ≥ 0.70  ∧  V<sub>coh</sub> ≤ 2√(F(1 − F)) ≈ 0.714   |   (r = m, F = 1 ⇒ V<sub>coh</sub> = 0)',
            caption: 'Exact two-qubit Bell-state instantiation of No-Go Theorem 5.1 linking record fidelity F, agreement probability, and off-diagonal visibility.',
            plainMeaning: 'Registering classical pointer fidelity F > 1/2 across an operational split boundary strictly caps conjugate interference visibility V_coh ≤ 2√(F(1−F)), reducing V_coh to zero at r = m (F = 1).',
            derivationSteps: [
              '1. Maximally entangled pre-measurement state |Φ⁺⟩_SA supports V_coh = 1 only prior to classical bit signaling (F = 0.50).',
              '2. Increasing classical pointer fidelity to F = 0.85 restricts residual cross-cut coherence to V_coh ≤ 0.714.',
              '3. Deterministic branch readout r = m (F = 1) extinguishes cross-cut coherence V_coh = 0 while preserving marginal no-signaling.'
            ]
          },
          takeaway: 'Every real physical witness obeys the strict cut-signaling conservation law: classical signaling across B_o trades directly against conjugate coherence visibility.'
        }
      },
      {
        number: '22',
        title: 'QBism: Fuchs’s Participatory Realism vs. Schack’s Formal Coherence',
        epistemicFocus: 'de Finetti vs. Quantum Urgleichung (SIC-POVM), Fuchs vs. Schack, and answering Timpson’s explanatory critique',
        paragraphs: [
          'Quantum Bayesianism (QBism) defends **A1** and **A4** first-person agency more uncompromisingly than any rival interpretation, explicitly citing Husserlian phenomenology and William James. Unlike classical Bayesianism (de Finetti, where subjective priors face zero structural constraints beyond classical coherence), QBism treats the Born rule as a **normative empirical addition**—expressed cleanly via the **SIC-POVM *Urgleichung*** (`p(j) = Σ [(d+1) q(i) - 1/d] r(j|i)`), constraining how an agent’s probabilities over distinct experiments harmonize.',
          'Treating QBism as a monolith conceals an important divergence between its co-founders: **Rüdiger Schack** (Caves–Fuchs–Schack) emphasizes an austere epistemic reading of `ρ` as an agent’s internal betting coherence manual, whereas **Christopher Fuchs** (2017; Fuchs & Stacey 2019) advances **“participatory realism,”** arguing that irreducibly personal probabilities disclose an open, pluralistic world forged continually through agentive acts—directly engaging **Christopher Timpson’s (2008)** charge of explanatory solipsism by insisting probabilities govern *a real external world’s active pushback against the agent’s interventions*.',
          'Regarding **A2 (Egalitarian Frame Parity)**: although no “Master Super-Agent” stands above Alice and Bob (`¬∃o_global`), every agent submits to the *identical normative coherence grammar*, allowing peer observers to coordinate shared expectations covariantly (`partial` on physical A2 until embodied interaction cuts A3 are included alongside subjective agency).'
        ],
        workedExample: {
          title: 'Worked Example 5.1 · Qubit (d = 2) SIC-POVM Urgleichung Normative Constraint',
          setup: 'Demonstrate concretely for a single spin-1/2 qubit (Hilbert dimension d = 2, symmetric tetrahedral SIC-POVM i = 1..4) how an agent’s reference priors q(i) and transition conditionals r(j|i) constrain subsequent measurement odds p(j) without an observer-independent wavefunction.',
          steps: [
            '1. [Reference Prior q(i)] Suppose a QBist agent prepares a pure z-spin-up state |0⟩; across the four symmetrical tetrahedral SIC-POVM faces, exact Born evaluation assigns q(1) = 1/2 and q(2) = q(3) = q(4) = 1/6 (summing to 1).',
            '2. [Channel Conditional r(j|i)] Measuring an orthogonal x-axis binary basis (j ∈ {+, −}) from tetrahedral face i gives r(+|1) = 1/2, r(+|2) = 1/2 + 1/(2√3) ≈ 0.789, r(+|3) = r(+|4) = 1/2 − 1/(4√3) ≈ 0.356.',
            '3. [Apply d = 2 Urgleichung] Substituting d = 2 yields multiplier (d+1) = 3 and shift 1/d = 1/2: p(+) = Σ_{i=1..4} [3 q(i) − 0.5] r(+|i) = (1.0)(0.5) + (0)(0.789) + (0)(0.356) + (0)(0.356) = 0.500.'
          ],
          resultEquation: {
            label: '(5.2)',
            unicodeHtml: 'p(j)  =  ∑<sub>i=1..d²</sub> [ (d + 1)·q(i) − 1/d ]·r(j|i)   ⇒   p(+) = 0.500 (normatively constrained)',
            caption: 'Qubit Urgleichung evaluation confirming that normative quantum probability relations replace classical observer-free collapse.',
            plainMeaning: 'Even when quantum states express personal agentive expectations (A1/A4), the Born Urgleichung strictly constrains multi-measurement betting coherence.'
          },
          takeaway: 'QBism avoids anything-goes subjectivism via a tight normative probability grammar while inviting A2/A3 intersubjective completion.'
        }
      },
      {
        number: '23',
        title: 'Decoherence Theory: Zeh, Zurek, Proper Mixtures, and Bell’s FAPP Limit',
        epistemicFocus: 'Einselection, Quantum Darwinism, d’Espagnat improper vs. proper mixture, Bell (1990) FAPP, and presupposed-split limit',
        paragraphs: [
          'Pioneered by H. Dieter Zeh (1970, pp. 69–76) and developed by Wojciech Zurek (2003, pp. 715–775), decoherence theory supplies the concrete dynamical mechanism stabilizing macroscopic measurement boundaries (**A3**). Through continuous ambient entanglement with photons and phonons, an interaction Hamiltonian `H_int` selects robust pointer projections `P_α` satisfying `[H_int, P_α] = 0` (**einselection** via predictability sieve). Under **Quantum Darwinism**, redundant imprints proliferate across environmental fragments `E_f`, creating a plateau of classical mutual information `I(S : E_f) ≈ H_S` enabling non-destructive peer verification (**A2**).',
          'Yet a classic philosophical trap must be blocked decisively: as **Bernard d’Espagnat (1976)** proved and **John Bell (1990)** emphasized in critiquing “FAPP” (*For All Practical Purposes*) solutions, tracing out the environment produces an **improper mixture** (`ρ_S = Tr_E(|Ψ⟩⟨Ψ|)` representing local entanglement ignorance rather than a classical statistical ensemble of definite single outcomes). Decoherence suppresses cross-pointer interference *FAPP*, yet cannot by itself explain why *one* outcome registers without either Everettian branching (§19) or situated perspective (`A1`).',
          'Equally decisive, Zurek explicitly presupposes the **“System + Environment Decomposition Axiom”**: computing `Tr_E` *already assumes* partitioning the total Hilbert space into `S ⊗ A ⊗ E`! Decoherence dynamically stabilizes an operational boundary (`A3`), confirming why `A3` stands independently as a necessary structural prerequisite.'
        ]
      },
      {
        number: '24',
        title: 'Consistent Histories: Logical Lattice Parity and the Selection Critique',
        epistemicFocus: 'Griffiths Consistency Condition D(α, α′) = 0 as A2 Boolean constraint, plus Dowker–Kent / Bassi–Ghirardi critique',
        paragraphs: [
          'Robert Griffiths (2002, Ch. 10–15, pp. 131–215), Roland Omnès, Murray Gell-Mann, and James Hartle construct an observer-free logical grammar of quantum events using time-ordered projection chains (*histories* `C_α`). Classical Boolean probability logic applies cleanly to a family of histories `{C_α}` whenever the **Consistency Condition** holds: `D(α, α′) = Tr(C_α ρ C_α′†) = 0` for `α ≠ α′`, guaranteeing zero quantum interference among alternative narratives.',
          'Connected to our axioms, Griffiths’ **Consistency Condition and Single-Framework Rule** function explicitly as a mathematical formalization of **A2 frame validity**: within any consistent Boolean lattice, all logically valid inferences satisfy objective consistency, while incompatible complementary lattices cannot be mashed together into contradictory assertions (`A1` contextual restriction).',
          'Nevertheless, critics including **Fay Dowker & Adrian Kent (1996)** and **Angelo Bassi & GianCarlo Ghirardi** press a devastating objection: Consistent Histories contains infinitely many mutually incompatible consistent quasiclassical families—and the formalism supplies **no internal physical principle selecting which single framework actually describes our experienced world**, covertly re-introducing a framework-selecting observer (`partial` on A4 active selection).'
        ]
      },
      {
        number: '25',
        title: 'Transactional Interpretation (Cramer) & Relativistic Foliation Tensions',
        epistemicFocus: 'Wheeler–Feynman absorbers, offer/confirmation handshake mapped to A4, Maudlin contingency paradox, and Kastner PTI',
        paragraphs: [
          'Rooted in **Wheeler–Feynman absorber electrodynamics**, John Cramer’s Transactional Interpretation (TI, 1986, pp. 647–687) replaces unidirectional collapse with an **atemporal spacetime handshake**: an emitter sends a retarded *offer wave* `ψ` forward in time, candidate absorbers return advanced *confirmation waves* `ψ*` backward in time, and the resonant standing echo `ψ*ψ` across both endpoints actualizes the registered quantum event with exact Born probability.',
          'Positively, TI’s bilateral handshake anticipates **A4’s non-punctual temporal window**: determinate registration never occupies an isolated zero-width slice `[t, t]`, but spans emission and absorption across an extended temporal handshake. Crucially, however, TI exposes severe tensions on **A2 relativistic covariance** and **A4 directed temporal asymmetry**. As **Tim Maudlin (2011, Ch. 7, pp. 180–194)** proved via his **contingency paradox**—where absorber B sits contingent upon whether detector A registers first at spacelike separation—fixed-spacetime transactions trigger causal loops unless nature selects a preferred cosmic foliation or elevates the transaction outside 4D spacetime.',
          '**Ruth Kastner’s Possibilist Transactional Interpretation (PTI, 2012)** rescues TI from Maudlin’s loop by relocating offer/confirmation transactions into pre-spacetime quantum possibilities whose actualization emits discrete spacetime events asymmetrically (`partial` on A2/A4 in Table 8.1), illuminating the exact physical friction between bilateral handshakes and relativistic frame parity.'
        ]
      },
      {
        number: '26',
        title: 'Relational Blockworld (Silberstein & Stuckey): Static Block vs. A4 Asymmetry',
        epistemicFocus: 'Adynamical 4D action constraints, Price/Wharton all-at-once ontology, explicit A4 clash, and intra-worldtube emergence',
        paragraphs: [
          'Michael Silberstein, William Stuckey, and Mark Timothy McDevitt (*Beyond the Dynamical Universe*, 2018, pp. 135–210) align alongside **Huw Price’s (1996)** temporal symmetry and **Ken Wharton’s “all-at-once” Lagrangian ontology** to propose an uncompromising cure for quantum paradoxes: abandon fundamental time-evolution altogether. On **Relational Blockworld (RBW)**, physical reality is an adynamical 4D relational graph governed globally by discrete spinfoam/path-integral constraint extremization across entire spacetime regions spanning emitter, detector, and apparatus boundaries (`A1 + A2 + A3`).',
          'Transparency demands flagging RBW as our **sharpest physical counter-tension against A4 (Asymmetric Self-Relation & Thick Living Present)** (`✗` on fundamental dynamical A4 in Table 8.1) **(Plate X)**. Because RBW treats past, present, and future equally as co-existing geometric relations inside an eternal 4D block, any primordial temporal flow or asymmetry is denied ontologically.',
          'How does our four-axiom framework respond without glossing over the clash? First, we acknowledge explicitly that if fundamental cosmology proves wholly adynamical globally, A4’s directional asymmetry functions as an **emergent macroscopic thermodynamic–phenomenological invariant** rather than a primordial cosmic push. Second, *even inside a 4D block*, any embedded worldtube qualifying as an *observing system* (an IGUS or conscious witness) must physically instantiate asymmetric retention–protention gradients (`|I_now| > 0`, `Ret ≠ Prot`) along its worldline—meaning A4 remains indispensable for *observerhood* even when micro-kinematics is block-symmetric.'
        ],
        theoremBox: {
          kind: 'Proposition',
          number: '5.1',
          title: 'Intra-Worldtube Observer Asymmetry in Adynamical Block Geometries',
          statement: 'Even within a time-symmetric 4D Lagrangian or Relational Blockworld (A1 + A2 + A3 with global T-symmetry), any embedded worldtube acting as an epistemic observer must exhibit local directional memory entropy gradient dS_mem/dλ > 0 across finite proper interval |I_now| > 0.',
          proofSteps: [
            '1. [Block Premise] Global boundary action S_RBW extremizes adynamical relations across emitter, detector, and medium without fundamental dynamical becoming.',
            '2. [Record Constraint] To distinguish "already measured" from "not yet interacted" along parameter λ, a subsystem’s internal register M(λ) must exhibit asymmetric mutual-information storage.',
            '3. [Thermodynamic Necessity] Landauer erasure and Markov-chain memory reliability enforce positive entropy gradient dS_mem/dλ > 0 over non-zero integration span |I_now| > 0.',
            '4. [Conclusion] Global block symmetry (✗ fundamental A4) still induces emergent local A4 asymmetry inside every epistemic observer worldtube.'
          ],
          sourceNote: 'Reconciles Silberstein, Stuckey & McDevitt (2018) with Price (1996) and Gell-Mann & Hartle IGUS.'
        }
      },
      {
        number: '27',
        title: 'The First Observer Hypothesis (FOH): Negentropy, Markov Blankets, and IGUS',
        epistemicFocus: 'Schrödinger negentropy, Friston Free Energy/Markov blanket, Gell-Mann–Hartle IGUS, and stipulative definition vs. empirical bifurcation',
        paragraphs: [
          'Concluding Chapter 5, the **First Observer Hypothesis (FOH)** resolves physics’ deepest demarcation lacuna: what rigorously separates a **passive physical measuring apparatus** (a silver-halide emulsion, silicon CCD, or Geiger tube) from a **genuine observer**? To keep logical form unambiguous (§40), FOH explicitly combines two distinct components: (i) a **stipulative organizational classification** defining a *First Observer* as a dissipative non-equilibrium organizational class continuously exporting entropy (**Erwin Schrödinger’s 1944 *What Is Life?* negentropy**) across a self-maintaining statistical boundary (**Karl Friston’s 2013 Free Energy Principle and Markov blanket**) satisfying conditional independence `μ ⊥ η | B_o` (`A3 + A4`); and (ii) a **substantive empirical bifurcation thesis** predicting that active autonomous loops sustain coherence correlation lifetimes (`τ_coh(Active) ≫ τ_coh(Passive)`) far exceeding matched passive scatterers under equal thermal bath spectral density **(Plate X)**.',
          'Unlike the **Weak Anthropic Principle** (Carter 1974), which merely states a tautological retrospective selection bias tied to carbon-based human physiology, FOH establishes a **substrate-neutral thermodynamic–cybernetic criterion**: any physical system—prokaryotic cell, synthetic active-inference agent, or neural network—that actively defends its operational boundary (`A3`) and updates asymmetric temporal records (`A4`) against thermal equilibrium qualifies as a First Observer.',
          'In cosmology, FOH sharpens **Gell-Mann & Hartle’s (1990) IGUS** (*Information Gathering and Utilizing System*): passive dust grains undergo fleeting improper decoherence erased immediately by ambient noise, whereas a First Observer sustains low-entropy memory records over extended cycles (`|I_now| > 0`)—enabling direct experimental bifurcation tests against passive transducers in §40 and Appendix B.'
        ],
        equation: {
          label: '(5.1)',
          unicodeHtml: '∀o [ FirstObserver(o)  ↔  ( OperationalCut<sub>A3</sub>(B<sub>o</sub>) ∧ ActiveNegentropyCycle<sub>A4</sub>(o) ∧ ¬PassiveTransducer(o) ) ]',
          caption: 'Stipulative-organizational and thermodynamic criterion distinguishing autonomous dissipative observers from passive scattering detectors.',
          plainMeaning: 'An autonomous First Observer actively maintains its operational boundary and asymmetric memory updates against thermal equilibrium, unlike passive physical detectors.'
        }
      }
    ]
  },
  {
    id: 'chapter-6',
    number: 6,
    kicker: 'Chapter 6 · Systems Theory, Autopoiesis & Neurophilosophy (§§28–33)',
    title: 'Six Closure Models: Cybernetics, Autopoiesis, Enaction, and Self-Models',
    epigraph: '“Anything said is said by an observer; anything observed is drawn across a distinction that hides the drawer.” — Humberto Maturana & Heinz von Foerster Synthesis',
    pullQuote: 'Second-order cybernetics and biological autopoiesis rediscover Kant’s Paralogism and Bohr’s cut inside living membranes—formalizing operational closure, blind spots, and transparent self-models.',
    leadSummary: 'Deepens §§28–33: formalizing von Foerster’s eigenbehaviors and 2nd-order cuts, Luhmann’s triple system-reference & anti-humanism, Maturana–Varela Markov blanket & structural coupling, Noë’s sensorimotor boundaries, Metzinger’s transparent PSM, and Dennett’s Real Patterns.',
    chapterIntro: [
      'Independently of Continental phenomenology and Copenhagen disputes, second-order cybernetics, sociological systems theory, autopoietic biology, and neurophilosophy converged on an identical dilemma: how can a physically bounded organism generate a coherent public world without stepping outside its own cellular membrane or cortical processing loop?',
      'Sections 28 through 33 demonstrate that biological self-maintenance, systemic distinction-drawing, skilled bodily contingencies, transparent neural self-modeling, and narrative gravity articulate the exact operational boundary conditions unified in **Chapter 7** (**Figure 6.1**).'
    ],
    subsections: [
      {
        number: '28',
        title: "Von Foerster's Observing System: Eigenbehaviors and Second-Order Formalism",
        epistemicFocus: 'Formal eigenbehavior fixed points O(O(...x...)) = x* as A3 closure, and 1st-order vs. 2nd-order observation',
        paragraphs: [
          'Heinz von Foerster (*Observing Systems*, 1981, pp. 258–309) shattered first-order classical science by demonstrating via the physiological blind spot of the retina—where “we do not see that we do not see”—that every act of observation introduces an unobservable origin. Crucially, von Foerster replaced passive mirroring of pre-packaged external objects with **recursive eigenbehaviors** (`O(O(…(x)…)) = x*`): stable invariant perceptual objects (`x*`, eigenvalues of cognitive recursion) arise when an organism’s sensorimotor operator `O` acts repeatedly upon its own outputs across a closed operational loop—a precise functional formalization of **A3 (Operational Demarcation)** **(Plate XI)**.',
          'Equally vital is von Foerster’s formal distinction between **First-Order Cybernetics** (the study of observed mechanical systems by an external detached observer `O₀`) and **Second-Order Cybernetics** (the cybernetics of observing systems `O₁(O₀)`, where an observer observes how another system draws distinctions and generates eigenbehaviors). Second-order recursion immediately explains why no finite frame owns ultimate absoluteness (**A2**): every second-order observer exposes the first-order observer’s blind spot solely by installing a new unexamined blind spot at the higher level.'
        ]
      },
      {
        number: '29',
        title: "Luhmann's Systems Theory: Triple System-Reference and Anti-Humanism",
        epistemicFocus: 'Spencer-Brown calculus, biological/psychic/social parity (A2), and reconciling anti-humanism with phenomenology',
        paragraphs: [
          'Niklas Luhmann (*Social Systems*, 1995, pp. 12–58, 255–277) generalizes George Spencer-Brown’s *Laws of Form* (1969, pp. 1–16) into a comprehensive epistemology of distinction: to observe is strictly to draw an asymmetric mark (`Indicate(Inside) | Unmarked(Outside)`). Because an observer cannot simultaneously indicate both sides and the drawing blade of its distinction, the unity of the operational cut serves as the system’s inescapable blind spot—re-entering inside the system solely through subsequent second-order observations **(Figure 6.1)**.',
          'Crucially, Luhmann models reality across a **triple autopoietic system-reference**: (1) *biological/living systems* (closed via biochemical metabolism), (2) *psychic/conscious systems* (closed via successive thoughts/perceptions), and (3) *social/communicative systems* (closed via recursively linked communications). None of these three operational closures reduces causally to another; they interpenetrate solely through **structural coupling**—illustrating directly how **A2 (Egalitarian Frame Parity)** operates across heterogeneous system-types without privileging neural matter or social text as an ultimate foundation.',
          'How do we reconcile Luhmann’s notorious methodological **anti-humanism** (“only communication can communicate; human beings sit in the environment of social systems”) with **Chapter 2’s** phenomenology of lived consciousness? Easily once system-levels are separated: Luhmann removes the *anthropocentric sovereign ego* from social theory while explicitly preserving *psychic operational closure* as an autonomous observer domain—though his strict focus on functional coding (`partial` on A4) under-thematizes Henry’s pre-reflective affective *pathos*.'
        ],
        equation: {
          label: '(6.1)',
          unicodeHtml: '∀s ∈ {Bio, Psychic, Social} ∀x [ Observes(s, x) → ∃d ( MarksInside(d, x) ∧ UnobservedOrigin(d, s) ) ]',
          caption: 'Luhmann’s triple-system distinction logic: observation across every closed domain operates via a self-concealing cut.',
          plainMeaning: 'Biological, conscious, and communicative systems all share the identical operational logic of drawing distinctions invisible from inside their act.'
        }
      },
      {
        number: '30',
        title: "Maturana and Varela's Autopoiesis & Formal Markov Blanket Partition",
        epistemicFocus: 'Markov blanket conditional independence μ ⊥ η | B inside A3, structural coupling (A2), and exemplification vs. entailment',
        paragraphs: [
          'Humberto Maturana and Francisco Varela (*Autopoiesis and Cognition*, 1980, pp. 73–123; *The Tree of Knowledge*, 1987) ground **A3** and **A4** directly in living cellular organization. An autopoietic machine is a homeostatic network of component-producing processes that continuously regenerates both the network itself and the physical topological boundary (cell membrane) delimiting it against thermal dissolution **(Plate XII)**.',
          'Translating biological autopoiesis cleanly into our **A3 formalism** connects directly to **Friston’s Markov blanket partition** (`B_o = (s_sens, a_act)`): internal metabolic states `μ ⊂ Inside_o` and external environmental states `η ⊂ Ext_o` satisfy strict conditional independence **`μ ⊥ η | B_o` (`I(μ : η | B_o) = 0`)**. Notice the vital logical boundary between **exemplification and entailment**: *biological autopoiesis exemplifies A3 as a concrete biochemical realization, yet it does NOT exhaustively define or entail that only carbon cells satisfy A3*—non-living bounded physical cuts (quantum registers, synthetic active-inference loops) instantiate `A3` without cellular metabolism (`A3` is necessary for autopoiesis, not synonymous with it!).',
          'Three further precisions sharpen Maturana and Varela’s role in A1–A4. First, **Structural Coupling instantiates A2 Parity**: when two autopoietic units interact recurrently without destroying one another’s closure, their internal structures undergo congruent historical drift (*structural coupling*), generating an objective consensual domain without a global blueprint. Second, **autopoietic circularity is generative causal self-production, not vicious logical tautology**: biochemical closure establishes an endogenous point of view (`cognitive domain`), enacting situated perspectival immanence (`A1`) non-circularly inside physical matter. Third, preserving Maturana’s distinction between **environment** (third-party observer view) and **cognitive domain / niche** prevents collapsing `A1` back into naive realism.'
        ]
      },
      {
        number: '31',
        title: "Alva Noë's Enactive Perception",
        epistemicFocus: 'Sensorimotor contingencies as active A3 demarcation separating reafference from exafference',
        paragraphs: [
          'Alva Noë (*Action in Perception*, 2004, pp. 1–34, 75–122) extends enactivism to perceptual consciousness: seeing a solid tomato or navigating an experiment is never the passive synthesis of an internal cortical cinema snapshot. Perception is skillful exploratory engagement structured by implicit mastery of **sensorimotor contingencies**—lawful covariance rules linking self-initiated bodily movement (saccades, head tilt, hand rotation) to systematic shifts in sensory stimulation.',
          'Notice how concretely sensorimotor contingencies instantiate **A3 (Operational Demarcation Cut)** inside active cognition: through continuous comparison of internal motor efference copies against returning sensory signals (*reafference* vs. *exafference*), an active organism draws a living operational boundary separating transformations caused by its *own moving viewpoint* from invariants belonging to the *independent world*. Without active sensorimotor boundary regulation, an organism cannot distinguish stationary objects from self-motion (`A1 + A3 + A4`).'
        ]
      },
      {
        number: '32',
        title: "Metzinger's Self-Model Theory of Subjectivity",
        epistemicFocus: 'Phenomenal transparency vs. opacity (A3/A4) and reconciling deflationism with non-reductive SIT',
        paragraphs: [
          'Thomas Metzinger (*Being No One*, 2003, pp. 163–178, 299–366) supplies the decisive neurophilosophical bridge explaining *why* an embedded observer naturally mistakes a functional process for an indivisible Cartesian soul. To steer complex behavior, a cognitive system generates an ongoing virtual **Phenomenal Self-Model (PSM)** integrated inside a world-model. Crucially, the PSM operates under **phenomenal transparency**: the organism has zero introspective access to the earlier sub-personal processing stages constructing the model, so it looks directly *through* the representation—experiencing a naive immediate “I” rather than seeing a representational tool (contrast *phenomenal opacity* in lucid dreaming or Husserlian *epoché*, where constructedness becomes visible).',
          'Transparency directly mechanizes **A3’s blind-spot seam** and **A4’s first-personal mineness** inside neural architecture **(Plate XII)**. Does Metzinger’s famous eliminativist slogan—“no such things as selves exist in the world; nobody ever was or had a self”—contradict our non-reductive **Structural Identity Thesis (SIT)**? Not at all: what Metzinger eliminates is *the Cartesian substantial thing-self* (already refuted by Kant’s First Paralogism in §2!), while affirming the real operational existence of first-person **perspectival process structure** (the active transparent PSM-world-model boundary, fully isomorphic to A1–A4).'
        ]
      },
      {
        number: '33',
        title: "Dennett's Center of Narrative Gravity",
        epistemicFocus: 'Multiple Drafts, Real Patterns, and compatibility with non-reductive SIT',
        paragraphs: [
          'Completing our thirty-two-theory genealogy, Daniel Dennett’s *Consciousness Explained* (1991, pp. 101–138, 412–430) dismantles the residual “Cartesian Theater”—any privileged neural finish line where processed streams assemble before an inner homunculus. In his **Multiple Drafts model**, parallel cortical edits continually compete and decay; unified agency appears retrospectively as a **Center of Narrative Gravity (CNG)**—an abstractional focal point around which biographical reports and external predictions stabilize, much like a physical object’s center of mass.',
          'How can Dennett’s deflationary narrative model harmonize with our **non-reductive Structural Identity Thesis**? The bridge lies explicitly in Dennett’s own celebrated paper **“Real Patterns”** (*Journal of Philosophy*, 1991, pp. 27–51): just as centers of gravity and intentional stances are *real structural patterns* objectively indispensable for predictive compression above noisy micro-physics, the relational invariants `(A1–A4)` are *real abstract organizational invariants* without reifying a ghostly homunculus. Our solitary point of gentle philosophical critique against Dennett mirrors Husserl and Henry (§§3–8): while narrative autobiography is indeed a distributed retrospective draft, pre-reflective affective mineness (`A4`) anchors first-personal perspective *prior to* linguistic storytelling.'
        ],
        theoremBox: {
          kind: 'Proposition',
          number: '6.1',
          title: 'Transparency–Narrative Closure Equivalence',
          statement: 'Any operationally closed cognitive system running a transparent self-model (Metzinger) and stabilizing consistent retrospective reports (Dennett) necessarily instantiates an operational boundary cut concealing its own generating machinery (A3).',
          proofSteps: [
            '1. [Autopoietic Closure, §§29–30] Discernible records stabilize solely inside a finite demarcation cut B_o (μ ⊥ η | B_o) separating Inside_o from Ext_o.',
            '2. [Transparency Rule, §32] Sub-personal boundary-generating mechanisms sit outside introspective reach of Inside_o.',
            '3. [Narrative Unification, §33] Linguistic self-attribution organizes exclusively across stabilized macro-drafts inside B_o.',
            '4. [Conclusion] Perceived subjective unity and phenomenal transparency are logical effects of bounded operational closure (A3 ∧ A4), requiring zero Cartesian substance.'
          ],
          sourceNote: 'Metzinger (2003) pp. 163–178; Dennett (1991) Ch. 5 & 13; Luhmann (1995).'
        }
      }
    ]
  },
  {
    id: 'chapter-7',
    number: 7,
    kicker: 'Chapter 7 · Argument Map & Fourfold Axiomatic Resolution (§§34–37)',
    title: 'Argument Map, Modal S4 Proofs, Topological Finitude, and Thick Temporal Synthesis',
    epigraph: '“The observer is neither inside the world like a marble in a jar nor outside it like an unmoved deity; to observe is to inhabit a bounded, relationally accountable temporal horizon.”',
    pullQuote: 'Every axiom A1–A4 is proven deductively via statement, constructive derivation, explicit classical reductio, and unified cross-tradition mapping—establishing minimal independence and completeness without hiding proofs in appendices.',
    leadSummary: 'Presents the Argument Map and brings the full modal S4 proof (Equiv_inv equivalence & Overlap logic), set-theoretic Anti-Continuum lemma, four separating countermodels (with Soundness stated & hybrid Completeness left explicitly open), and Allen interval temporal logic directly into main-text §§34–37.',
    chapterIntro: [
      'Having examined thirty-two distinct observer frameworks across **Chapters 2 through 6**, we now gather the entire logical weight of the monograph directly inside the main text rather than deferring foundational demonstrations to back-matter appendices. Every section below (§§34–37) adheres to a strict four-part architectural discipline for each axiom: **(a) Canonical Statement, (b) Constructive Derivation, (c) Formal Numbered Reductio of Denial, and (d) Cross-Tradition Mapping** **(Figure 7.1)**.',
      'Before entering §34, review the five-stage **Argument Map**: (1) **A1 (Perspectival Immanence)** eliminates any global view from nowhere via the S4 Vicious Archimedean Regress Theorem; (2) **A2 (Egalitarian Frame Parity)** proves that `Equiv_inv` defines a genuine equivalence relation over overlapping domains without solipsism; (3) **A3 (Operational Demarcation Cut)** secures discrete memory against continuum washout via the Topological Anti-Continuum Lemma while solving Spencer-Brown’s unmarked-exterior problem; (4) **A4 (Asymmetric Self-Relation)** grounds first-personal mineness (`S_o ≥ 0` entropy-update functional) and Allen-interval temporal thickness (`|I| > 0`), culminating in (5) Soundness and independence verification across four countermodels **(Figure 7.2)**.'
    ],
    subsections: [
      {
        number: '34',
        title: 'Axioms A1 & A2: S4 Modal Proof of Immanence, Overlap Logic & Equivalence Parity',
        epistemicFocus: 'Varying-domain S4 ⟨W, R, D(w)⟩ derivation, Equiv_inv equivalence-relation proof, mereo-temporal-epistemic Overlap logic, and vicious vs. benign regress',
        paragraphs: [
          '### Axiom A1 · Perspectival Immanence\n**(a) Canonical Statement:** Within hybrid varying-domain quantified modal logic S4 (`□p → p`, `□p → □□p` over `⟨W, R, D(w)⟩`), every legitimate act of observation necessarily occurs from within a situated local horizon `H_o` possessing a non-empty external blind spot: `□∀o (Obs(o) → ∃H_o [Situated(o, H_o) ∧ ¬TotalView(o)])` **(Plate XIII)**.',
          '**(b) Constructive Derivation (S4 Contextual Non-Triviality):** Let `⟨W, R, D(w)⟩` be a varying-domain S4 Kripke frame where worlds/contexts `w ∈ W` carry non-monotonic observer domains `D(w)` and `R` encodes causally accessible context shifts. Because contextual measurement bases fail to commute globally (Bohr §16, Wigner §18) and spatialized horizons exhibit curvature/adumbration (Husserl §5), no single global valuation sheet `v_global` assigns simultaneous, mutually consistent truth-values across every `w ∈ W`. Every coherent observer `o ∈ D(w)` therefore projects through a situated local context `H_o`.',
          '**(c) Formal Numbered Reductio — Why Archimedean Regress Is Strictly Vicious (Against Holistic Benign Regress):** Critics occasionally object that infinite epistemic regresses can be benign (as in coherentist justification holism, where propositions mutually reinforce each other around a closed web without needing a Cartesian foundation). Why is denying **A1** *viciously* incoherent rather than benignly holistic? Because coherentist holism moves *laterally across peers at equal ontological level*, whereas positing an unsituated global observer `o_global` attempts to capture **the entire totality `W` including its own act of capturing** in one hierarchical step—forcing strict irreflexive level ascent (`o₀ ≺ o₁ ≺ o₂ ≺ …`) with zero base clause (`¬∃o_base ∀x Rep(o_base, x)`). Formally: `(1) Assume ¬A1: ∃o_global ∀x Rep(o_global, x); (2) Synthesis Rule: ∀o [Rep(o, W) → ∃o′ Prior(o′, o) ∧ o′ ∉ Rep(o, W)]; (3) By Universal Instantiation: ∃o′ ∈ W such that o′ ∉ Rep(o_global, W), contradicting (1); (4) ⊢ A1 by RAA.`',
          '**(d) Mapping to Unified Frameworks:** Unifies Kant’s anti-substantialist apperception (§2), Heidegger’s thrownness (§6), Foucault’s immanent *dispositif* (§11), Wigner’s contextual non-absoluteness (§18), QBism’s interior agent (§22), and Maturana’s endogenous niche (§30).',
          '### Axiom A2 · Egalitarian Frame Parity, `Overlap` Logic & Proof That `Equiv_inv` Is an Equivalence Relation\n**(a) Canonical Statement:** For situated observers whose observational horizons overlap (`Overlap(o, o′)`), invariant physical and epistemic predicates transform covariantly without privileging any solitary ego or master frame: `∀o,o′,o″ [(Overlap(o, o′) ∧ Overlap(o′, o″)) → (Compat(o, o′) ∧ Equiv_inv(o, o″))]`.',
          '**(b) Logic of `Overlap(o, o′)` and Explicit Proof That `Equiv_inv` Is an Equivalence Relation:** To prevent `Overlap` from drifting ambiguously between physics and phenomenology, define **`Overlap(o, o′)` explicitly as a conjunction of three conditions**: *(i) mereological intersection* (`H_o ∩ H_o′ ≠ ∅` in observed event domain `O₁ ∩ O₂`), *(ii) temporal synchronization* (non-empty Allen overlap across communication window `I_o ∩ I_o′`), and *(iii) epistemic translation channel* (well-defined unitary/CPTP or *Paarung* map `T_{o→o′}` preserving truth-values of shared observables). Restricted to any transitively connected overlap component (or extended via finite relay chains `o = o₀ ~ o₁ ~ … ~ o_k = o′`), **`Equiv_inv(o, o′)` is rigorously an equivalence relation**: *(1) Reflexivity (`Equiv_inv(o, o)`)*: mediated by identity transformation `Id_o`, preserving every observable inside `H_o`; *(2) Symmetry (`Equiv_inv(o, o′) → Equiv_inv(o′, o)`)*: because invariant observable algebras share isomorphic spectra across reversible chart transitions `T_{o→o′}⁻¹ = T_{o′→o}`, no privileged direction exists; *(3) Transitivity (`Equiv_inv(o, o′) ∧ Equiv_inv(o′, o″) → Equiv_inv(o, o″)`)*: functorial composition `T_{o′→o″} ∘ T_{o→o′}` preserves spectral invariants across relay chains even when direct pairwise overlap spans multiple frames. **A2 does not claim equal sensory precision across species**, but strictly invariant truth-predicate parity without metaphysical aristocracy.',
          '**(c) Formal Numbered Reductio — Why Solipsistic Collapse Is Logically Incoherent:** Standard Cartesian skepticism doubts *whether* external peers exist while leaving first-person language coherent; denying **A2** inside an already situated plurality (`A1 ∧ ¬A2`) destroys the very *logical possibility of objective truth predicates*. Formally: `(1) Assume A1 ∧ ¬A2: ∃o* ∀o≠o* Privileged(o*) ∧ ¬Compat(o*, o); (2) Objectivity Rule (Husserl §5 / Wittgenstein Private Language / RQM §21): Objective(p) ↔ ∃Rule∀o′ [Valid(o′) → ConvergeUnderShift(o*, o′, p)]; (3) Under ¬A2, cross-frame rule convergence collapses, reducing “objective fact p” to an uncheckable private stipulation (`Objective(p) ∧ ¬Objective(p) → ⊥`); (4) ⊢ A2 by Modus Tollens and RAA.`',
          '**(d) Mapping to Unified Frameworks:** Unifies Leibniz/Husserl’s *Einstimmigkeit* (§5), Nancy’s *être-avec* (§14), Extended Wigner’s Friend covariance (§18), Rovelli’s Cross-Perspective Links (§21), Consistent Histories compatibility (§24), Luhmann’s cross-system parity (§29), and structural coupling (§30).'
        ],
        equation: {
          label: '(7.1)',
          unicodeHtml: 'ContextualObstruction ∧ [ ∀o,o′ (Overlap(o, o′) → Equiv<sub>inv</sub>(o, o′)) ]   ⊢<sub>S4</sub>   □( ¬∃o<sub>global</sub>  ∧  ObjectiveParity )',
          caption: 'Combined varying-domain S4 modal deduction uniting A1 (impossibility of global view) with A2 (invariant equivalence parity).',
          plainMeaning: 'Non-trivial contextual structure rules out an unsituated global observer while covariant cross-frame equivalence preserves objective truth.'
        }
      },
      {
        number: '35',
        title: 'Axiom A3: Topological Anti-Continuum Lemma and the Unmarked Exterior',
        epistemicFocus: 'Formal set-theoretic/topological finitude, Doplicher–Longo split collar, unbounded indistinction reductio, and solving the unmarked exterior problem',
        paragraphs: [
          '**(a) Canonical Statement:** Any observer capable of registering finite, reproducible distinctions (`Discern(o, x)`) necessarily maintains a finite operational boundary `B_o` partitioning a bounded accessible interior `Inside_o` from an exterior `Ext_o` that remains unmarked directly inside the act of observation: `∀o,x [Discern(o, x) → ∃B_o (Sep(B_o, Inside_o, Ext_o) ∧ FiniteCap(Inside_o) ∧ ¬ObjWithin(B_o, Inside_o))]`.',
          '**(b) Constructive Derivation (Set-Theoretic / Topological Anti-Continuum Lemma & Doplicher–Longo Split Property):** Consider a local algebraic or field topology `(X, τ)` pairing observable algebra `M(O₁)` of bounded interior `O₁` against exterior region `O₂′`. By the **Doplicher–Longo (1984) Split Property** (requiring nuclearity of the local Hamiltonian and a non-zero causal collar `Cl(O₁) ⊂ O₂`), there exists an intermediate **Type I factor `N`** (`M(O₁) ⊂ N ⊂ M(O₂)′`) isolating discrete internal states **(Figure 7.1)**. Translated into topological epistemology, to sustain stable memory an observer requires a **non-trivial Boolean sigma-algebra `Σ_o ⊊ P(X)`** of thermally isolated record states `{r₁, …, r_n}` anchored inside `N` and obeying conditional statistical independence `μ ⊥ η | B_o` (§30).',
          '**(c) Formal Numbered Reductio of Unbounded Indistinction:** `(1) Assume A1 ∧ A2 ∧ ¬A3: ∃o [Discern(o, x) ∧ ¬∃B_o Sep(B_o, Inside_o, Ext_o)]; (2) Topological Continuum Rule: Removing every separation collar forces Inside_o = Continuum(X) with Zero Split Property, where every finite perturbation immediately correlates globally with infinitely many exterior Type III₁ vacuum degrees of freedom; (3) Sigma-Algebra Collapse: Every putative internal distinction r_k blurs inseparably into its complement ¬r_k (`∀x,y Indistinguishable_o(x, y)`), yielding `Discern(o, x) ∧ ¬Discern(o, x) → ⊥`; (4) ⊢ A3 by RAA.`',
          '**(d) Solving the “Unmarked Exterior” Problem:** How can an interior observer distinguish the *unmarked exterior* (`Ext_o`) from the *boundary cut* (`B_o`) if, as Figure 6.1 indicates, the observer never stands outside to inspect `Ext_o` directly? This classic Spencer-Brown / Luhmann puzzle dissolves via **internal re-entry traces**: the exterior is never presented *directly as a positive bounded object* inside `Inside_o`, yet it registers *indirectly within the boundary* as non-compressible environmental perturbation, thermodynamic noise, unexpected empirical anomaly, and saturation overflow (Marion §15; Lacan’s Real §12). Second-order shifts (`O₂`) then relocate the prior cut `B_o` inside a wider horizon without ever capturing a totalized exterior.',
          '**(e) Mapping to Unified Frameworks:** Unifies Kant’s two-aspect receptivity (§2), Merleau-Ponty’s bodily boundary (§7), Lacan’s barred `$ / objet a` (§12), Bohr/von Neumann/Zurek einselection cuts (§§16–17, 23), Luhmann’s blind-spot distinction (§29), cellular autopoiesis (§30), and Metzinger’s transparent PSM (§32).'
        ],
        equation: {
          label: '(7.2)',
          unicodeHtml: '∀o [ NonTrivial(Σ<sub>o</sub>) → ∃U<sub>o</sub>, B<sub>o</sub> ( Cl(U<sub>o</sub>) ⊂ V<sub>o</sub> ∧ B<sub>o</sub> = ∂U<sub>o</sub> ∧ RegisterReEntry(Ext<sub>o</sub>, B<sub>o</sub>) ) ]',
          caption: 'Topological finitude lemma: discrete memory sigma-algebras require a compact boundary collar registering exterior anomalies indirectly.',
          plainMeaning: 'Finite knowledge requires a topological separation collar; the unmarked exterior registers indirectly through boundary perturbations and re-entry traces.'
        }
      },
      {
        number: '36',
        title: 'Axiom A4: Asymmetric Self-Relation (Entropy-Update Functional S_o) and Temporal Irreversibility',
        epistemicFocus: 'Clarifying S_o ≥ 0 as irreversible entropy-update functional, strict irreflexive antisymmetry Asym(S_o), numbered shift reductio, and Henry/Metzinger unification',
        paragraphs: [
          '**(a) Canonical Statement:** Every conscious or autonomously self-maintaining observer anchors its bounded perspective through an irreversible, non-negative entropy-update / auto-affective functional `S_o` breaking neutral coordinate-shift symmetry: `∀o [Exp(o) → ∃S_o (S_o ≥ 0 ∧ Asym(S_o) ∧ ¬ShiftSymInv(S_o))]` **(Plate XIV)**.',
          '**(b) Formal Disambiguation of `S_o ≥ 0` and `Asym(S_o)` (Why Asymmetry Is Mandatory Rather Than Symmetry):** To remove ambiguity, **`S_o : Paths(o) → ℝ_{≥ 0}`** denotes the **irreversible thermodynamic/phenomenal state-update functional** (`ΔS_record + ΔS_env ≥ 0`, analogous to action-entropy production along an observing trajectory—distinct from a free parameter, yet proportional to minimal Landauer record cost inside `Σ_o`), while **`Asym(S_o)`** enforces *strict order-antisymmetry* on the induced precedence relation `x ≺_{S_o} y := (S_o(y) > S_o(x))` (`∀x,y [(x ≺_{S_o} y) → ¬(y ≺_{S_o} x)]`). Suppose one attempts to model self-awareness purely via a symmetric spatial or mathematical offset operator `T_c(t) = t + c` along an undirected axis (`T_c⁻¹ = T_{-c}`). Under pure translation symmetry, forward (+c) and backward (−c) directions are structurally indistinguishable, and no internal boundary separates living self-presence (`S_o ≥ 0`) from external null indifference. Formally analogous to the Tomita–Takesaki positive modular cone, genuine first-personal ipseity presupposes a **pre-reflective asymmetric gradient** (`A4a`): an irreversible arrow from retained past toward anticipated future.',
          '**(c) Formal Numbered Reductio of Symmetric Shift Indifference:** `(1) Assume A1..A3 ∧ ¬A4: An observer sustains bounded cut B_o purely under full symmetric coordinate translation invariance (ShiftSymInv(S_o) ∧ Rev(Past, Future)); (2) Criterion of Indexical Mineness (Husserl §3, Henry §8): Mineness(o) → Asymmetry(LivingCore_o, Ext_o) ∧ ¬Interchangeable(Retention, Protention); (3) Symmetry Elimination: Under full coordinate symmetry, no intrinsic rule distinguishes active self-affection from passive mirrored exterior (`Mineness(o) ∧ ¬Mineness(o) → ⊥`); (4) ⊢ A4 by RAA.`',
          '**(d) Mapping to Unified Frameworks:** Unifies Early/Late Husserl’s *Meinhaftigkeit* & *Urstrom* (§§3–4), Merleau-Ponty’s non-coincident *écart* (§7), Henry’s auto-affection (§8), QBism’s interior agent (§22), RQM’s irreversible memory updates (§21), First Observer active negentropy (§27), and Metzinger’s active PSM (§32).'
        ],
        equation: {
          label: '(7.3)',
          unicodeHtml: '∀o [ SelfAcquainted(o)  →  ∃S<sub>o</sub> ( S<sub>o</sub> ≥ 0 ∧ Asym(S<sub>o</sub>) ∧ ¬(T<sub>c</sub>(S<sub>o</sub>) ≡ T<sub>-c</sub>(S<sub>o</sub>)) ) ]',
          caption: 'Asymmetric self-relation schema: breaking neutral coordinate symmetry anchors directed temporal ipseity via non-negative entropy-update functional S_o.',
          plainMeaning: 'First-personal self-awareness cannot emerge from undirected symmetric translations; it entails an irreversible non-negative entropy-update relation S_o.'
        }
      },
      {
        number: '37',
        title: 'Thick Temporal Synthesis via Allen’s Interval Logic, Soundness, Open Completeness & Independence',
        epistemicFocus: 'Allen interval logic (|I| > 0), Bernau/Dainton/Gallagher/Varela synthesis, Soundness theorem, explicit open Completeness disclaimer, and 4 countermodels',
        paragraphs: [
          'Combining **A3 (Bounded Capacity)** and **A4 (Asymmetric Self-Relation)** yields a rigorous temporal theorem uniting Husserl’s **Bernau Manuscripts** (Hua XXXIII) with contemporary philosophy of time consciousness—specifically **Barry Dainton’s (2000, pp. 113–184)** extensional specious-present realism, **Shaun Gallagher’s (2017)** enactive protentional dynamics, and **Francisco Varela’s (1999)** neurophenomenological integration windows (`~0.1–3 s`) **(Plate XIV)**.',
          'To formalize why zero-width instants are excluded without hand-waving, we employ **James Allen’s (1983) Interval Temporal Logic** over closed intervals `I = [t⁻, t⁺]` with duration `Dur(I) = t⁺ − t⁻`. Let temporal judgment of succession (`Change(A → B)`) require co-holding an earlier phase interval `I_ret` (retention of A) and an emergent anticipation interval `I_prot` (protention of B) across the active living present `I_now` via Allen’s core topological relations **`Overlaps(I_ret, I_now)`** and **`Meets(I_now, I_prot)`**. Crucially, in Allen’s interval calculus, both `Overlaps` and strict `Meets` require strictly **positive interval length (`Dur(I) > 0`)**: degenerate zero-width point-intervals `[t, t]` possess zero interior overlap and collapse distinction into static adjacency.',
          '### Formal Numbered Reductio: Zero-Width Temporal Freeze\n`(1) Assume Zero-Width Present: I_now = [t₀, t₀] with Dur(I_now) = 0; (2) Judgment Rule (Kant Threefold Synthesis / Husserl Bernau / Allen Logic): DiscernChange(o, A→B) → ∃I_now [Overlaps(I_ret(A), I_now) ∧ Meets(I_now, I_prot(B))]; (3) Degenerate Collapse: On [t₀, t₀], Overlaps(I_ret, [t₀, t₀]) = ∅; only a single static configuration at t₀ exists, eliminating relational retention and expectation; (4) Contradiction: DiscernChange(o) ∧ ¬DiscernChange(o) → ⊥; (5) Conclusion (⊢ Dur(I_now) > 0): Every change-perceiving observer inhabits an extended thick living present.`',
          '### Soundness, Explicit Open Completeness Disclaimer & Independence (“Why Four Axioms?”)\nLet us state the metatheoretic scope transparently: **(i) Soundness** holds strictly for our axiomatic fragment (`⊢_Obs φ ⇒ ⊨_{⟨W,R,D,Σ,I⟩} φ`) over the class of varying-domain reflexive–transitive S4 Kripke–topological–interval frames (Appendix A, Proposition A.1); **(ii) Full Completeness Is Explicitly Left Open** for the combined second-order hybrid modal + Doplicher–Longo algebraic + Allen-interval fragment (since full higher-order topological modal fragments are generically non-compact and incomplete without Henkin non-standard semantics), though **propositional S4 + finite-domain Allen interval decidability** holds subsystem-by-subsystem; and **(iii) Mutual Independence & Stratification** is proven constructively via the four **separating countermodels detailed in Table 7.2 and illustrated in Figure 7.2**: (1) `M_~A1` (Archimedean Sensor), (2) `M_~A2` (Leibnizian Bubble), (3) `M_~A3` (Cut-Free Continuum), and (4) `M_~A4` (Passive Static Cut). Thus `{A1, A2, A3}` are mutually independent while `A4 → A3` (yet `A3 ↛ A4`) establishes a **minimal, non-redundant four-axiom basis**.'
        ],
        equation: {
          label: '(7.4)',
          unicodeHtml: '∀o [ TemporalObs(o)  →  ∃I<sub>now</sub> ( Dur(I<sub>now</sub>) &gt; 0 ∧ Overlaps(I<sub>ret</sub>, I<sub>now</sub>) ∧ Meets(I<sub>now</sub>, I<sub>prot</sub>) ) ]',
          caption: 'Allen interval-logic formalization of the Thick Living Present proving zero-width point-instants [t, t] incoherent.',
          plainMeaning: 'Observing temporal change requires positive interval duration integrating overlapping retention and meeting protention.'
        },
        theoremBox: {
          kind: 'Theorem',
          number: '7.1',
          title: 'Soundness, Stratified Independence & Four-Axiom Minimality (With Open Hybrid Completeness)',
          statement: 'The axiom system {A1, A2, A3, A4} is sound for all varying-domain S4–topological–interval observer frames ⟨W, R, D(w), Σ_o, I⟩ and forms a minimal stratified necessity basis via separating countermodels M_~A1..M_~A4; full syntactic completeness for the combined hybrid second-order fragment remains an explicit open problem.',
          proofSteps: [
            '1. [Soundness] Every rule (Modus Ponens, Necessitation on global validities, S4 K/T/4, and varying-domain specialization) preserves truth across every admissible frame ⟨W, R, D(w), Σ_o, I⟩.',
            '2. [Separating Countermodels — Table 7.2 / Fig. 7.2] M_~A1 (Archimedean Sensor), M_~A2 (Solipsist), M_~A3 (Continuum Field), and M_~A4 (Passive Static Cut) establish strict non-redundancy of every axiom.',
            '3. [Stratified Directionality] Passive demarcation cuts (A3) do not entail autonomous asymmetric ipseity (A4), whereas sustained A4 self-maintenance requires operational closure (A3).',
            '4. [Open Completeness Boundary] While S4 propositional and propositional Allen fragments are complete individually, characterizing full second-order hybrid completeness over Type I factors is recorded openly without overclaim.'
          ],
          sourceNote: 'Synthesizes Fitting & Mendelsohn (1998), Allen (1983), Dainton (2000), Varela (1999), and Husserl Hua XXXIII.'
        },
        workedExample: {
          title: 'Worked Example 7.1 · Numerical Allen Interval Verification of the Thick Living Present',
          setup: 'Contrast a standard human neurophenomenological integration episode (Pöppel & Varela ~100–3000 ms) against a degenerate instantaneous time-slice [0, 0] to verify Overlaps and Meets conditions explicitly.',
          steps: [
            '1. [Define Thick Windows] Let I_ret = [−450 ms, 120 ms] (retained tonal phrase), I_now = [0 ms, 320 ms] (active Urimpression), and I_prot = [320 ms, 850 ms] (anticipated resolution).',
            '2. [Verify Allen Predicates] Dur(I_now) = 320 − 0 = 320 ms > 0; Overlaps(I_ret, I_now) = [0, 120] ms (120 ms non-empty intersection); Meets(I_now, I_prot) holds strictly at boundary 320 ms = 320 ms; total active horizon span = 1,300 ms (within Varela–Pöppel band).',
            '3. [Test Degenerate Collapse] Setting Dur(I_now) → 0 yields I_now = [0, 0]: the interior intersection I_ret ∩ I_now collapses to measure zero and change succession A → B vanishes.'
          ],
          resultEquation: {
            label: '(7.5)',
            unicodeHtml: 'Dur(I<sub>now</sub>) = 320 ms &gt; 0  ∧  (I<sub>ret</sub> ∩ I<sub>now</sub>) = 120 ms &gt; 0   ⇒   CoherentChangeJudgment(A → B)',
            caption: 'Concrete interval-logic verification grounding Husserl’s Bernau present within measurable psychophysical bounds.',
            plainMeaning: 'A 320 ms living-present window overlapping 120 ms of retention and meeting 530 ms of protention sustains coherent change perception, whereas [0, 0] fails.'
          },
          takeaway: 'Allen’s interval calculus supplies an exact mathematical bridge between Husserl’s Bernau diagram and empirical temporal-order psychophysics.'
        }
      }
    ]
  },
  {
    id: 'chapter-8',
    number: 8,
    kicker: 'Chapter 8 · Structural Identity, Cross-Reference Matrix & Falsifiability (§§38–40)',
    title: 'The Structural Identity Thesis, 32-Position Matrix, Mutual Indispensability, and Empirical Crucibles',
    epigraph: '“Phenomenology without physics cannot explain why the present is thick; physics without phenomenology cannot say what an observer is.”',
    pullQuote: 'The Structural Identity Thesis is a meta-theoretical category isomorphism over A1–A4—visually verified across all 32 historical positions and tested by four axiom-specific empirical crucibles resistant to Duhem–Quine evasion.',
    leadSummary: 'States SIT precisely as a category isomorphism onto Σ_Obs (non-circularity & exemplary vs. exhaustive matrix clarified in §38), gives bilateral worked examples (§39), and operationalizes axiom-by-axiom falsifiers isolating auxiliaries in Table 8.4 (§40).',
    chapterIntro: [
      'A genealogy that stops at taxonomy remains an annotated encyclopedia. **Chapter 8** establishes the exact logical architecture of our central philosophical contribution: **the Structural Identity Thesis (SIT)** (§38), verified visually across all thirty-two frameworks from Sections 2–33 via our master cross-reference matrix (`✓ / ✗ / partial`), before proving bidirectional indispensability through two concrete worked cross-disciplinary problems (§39) **(Plate XV; Figure 8.1)**.',
      'Finally, §40 answers philosophy of science’s sharpest methodological test: converting Friedman’s relativized a priori (`A1–A4`) into four distinct, axiom-by-axiom empirical falsification protocols pairing concrete laboratory tolerances (`10⁻¹⁸` optical vs. nanosecond PTA bounds) with **Table 8.4’s explicit auxiliary-assumption isolation matrix** defeating Duhem–Quine holism **(Plate XVI)**.'
    ],
    subsections: [
      {
        number: '38',
        title: 'The Structural Identity Thesis: Category Isomorphism Σ_Obs, Matrix Scope & Non-Circularity',
        epistemicFocus: 'Category isomorphism F_Phen, F_RQM, F_Bio → Σ_Obs vs. ontic identity, exemplary vs. exhaustive 32-position corpus, and non-circularity reply',
        paragraphs: [
          'Ambiguity over what “Structural Identity Thesis” asserts would ruin the treatise. What exactly is claimed to be identical to what? **Not** ontic identity (claiming conscious human experiences *are* inanimate photons, which collapses into panpsychism), nor loose poetic analogy. Rather, stated formally within Ontic Structural Realism (Ladyman & Ross 2007, pp. 130–189) and elementary Category Theory (Mac Lane 1998; Awodey 2010), **the Structural Identity Thesis (SIT) asserts a second-order category isomorphism across invariant observer signature `ObsCat = Σ_Obs = ⟨Ob_Obs, Hom_Obs⟩`** **(Figure 8.1)**.',
          'Specify three domain categories explicitly: (1) **Category `Phen`**: `Ob(Phen)` = Husserlian transcendental monads `⟨Monad_i, Nullpunkt_i, Horizon_i, BernauFlow_i⟩`, `Hom(Phen)` = concordance-preserving *Paarung* shifts; (2) **Category `Quant`**: `Ob(Quant)` = Rovellian physical reference subsystems `⟨S, H_S, Cut_B, Mem_S⟩`, `Hom(Quant)` = Adlam–Rovelli Cross-Perspective unitary/CPTP links; and (3) **Category `Sys`**: `Ob(Sys)` = Maturana–Varela autopoietic units `⟨Unit_u, Membrane_B, Niche_u, Cycle_u⟩`, `Hom(Sys)` = closure-preserving structural couplings. SIT constructs faithful functors `F_Phen : Phen → Σ_Obs`, `F_RQM : Quant → Σ_Obs`, and `F_Bio : Sys → Σ_Obs` preserving identity (`F(id) = id`) and composition (`F(g ∘ f) = F(g) ∘ F(f)`) across all coherent observer transitions.',
          'Two methodological safeguards answer structural critics directly: **(a) Exemplary vs. Exhaustive Matrix Scope**: our 32-position matrix (**Table 8.1**) is *thematically comprehensive* across core Western/comparative traditions yet **exemplary rather than canonically exhaustive** (e.g., Confucian/Daoist or additional indigenous cosmologies await analogous audit without falsifying core `Σ_Obs`); **(b) Non-Circularity Defense**: critics charge that because `A1–A4` were distilled partly from Husserl, Bohr, and Maturana, recovering them via `F_Phen, F_RQM, F_Bio` is circular. Not so: the *distillation* is heuristic discovery, whereas *independence proofs* (§37 countermodels) and *predictive falsifiability* (§40 laboratory thresholds not built into phenomenological texts!) impose genuinely non-circular, externally testable constraints **(Plate XV)**.'
        ],
        equation: {
          label: '(8.0)',
          unicodeHtml: 'F<sub>Phen</sub>(Phen)  ≅<sub>Σ_Obs</sub>  F<sub>RQM</sub>(Quant)  ≅<sub>Σ_Obs</sub>  F<sub>Bio</sub>(Sys)   ∧   F(g ∘ f) = F(g) ∘ F(f)',
          caption: 'Category-theoretic statement of the Structural Identity Thesis (SIT) mapping three independent domains onto invariant signature Σ_Obs (ObsCat).',
          plainMeaning: 'Husserlian phenomenology, Relational Quantum Mechanics, and Autopoiesis map via composition-preserving functors onto the same four-axiom relational structure.'
        },
        theoremBox: {
          kind: 'Theorem',
          number: '8.1',
          title: 'Structural Identity Thesis (Category-Signature Form)',
          statement: 'Between the relational observer categories of Phenomenology (Phen), Relational Quantum Foundations (Quant), and Autopoietic Systems Theory (Sys), there exist faithful composition-preserving functors onto the invariant signature Σ_Obs satisfying A1–A4.',
          proofSteps: [
            '1. [Domain Functor F_Phen : Phen → Σ_Obs] Maps Nullpunkt ↦ H_o (A1), Einstimmigkeit/Paarung morphisms ↦ Equiv_inv (A2), perceptual horizon ↦ B_o (A3), and Bernau Urstrom/Henry asymmetry ↦ I_now (A4).',
            '2. [Domain Functor F_RQM : Quant → Σ_Obs] Maps RQM system state ↦ H_o (A1), Cross-Perspective Links ↦ Equiv_inv (A2), einselection/split cut ↦ B_o (A3), and FOH/irreversible record cycle ↦ I_now (A4).',
            '3. [Domain Functor F_Bio : Sys → Σ_Obs] Maps cognitive domain ↦ H_o (A1), structural coupling morphisms ↦ Equiv_inv (A2), autopoietic Markov blanket μ ⊥ η | B_o ↦ B_o (A3), and continuous self-production ↦ I_now (A4).',
            '4. [Conclusion] All three categories preserve exact structural covariance under A1–A4 while keeping non-epistemic limits (Levinas, Marion, RBW) explicitly marked in Table 8.1.'
          ],
          sourceNote: 'Ladyman & Ross (2007) pp. 130–189; Mac Lane (1998); Awodey (2010); Husserl (1931); Rovelli (1996); Maturana & Varela (1980).'
        }
      },
      {
        number: '39',
        title: 'Why Phenomenology Needs Physics (and Vice Versa): Two Worked Bilateral Examples',
        epistemicFocus: 'Concrete worked proof of phenomenology requiring physical constraints (Thompson/Blanke–Metzinger) and physics requiring phenomenological/autopoietic demarcation',
        paragraphs: [
          'Rather than merely praising interdisciplinary harmony, we demonstrate bilateral explanatory incompleteness through **two concrete worked problems** where neither discipline can finish its own argument alone.',
          '### Worked Example 1 · Why Phenomenology Needs Physics (Duration & Bandwidth of the Living Present)\nHusserl’s Bernau Manuscripts (§4) and Merleau-Ponty (§7) prove brilliantly by first-person reflection that conscious perception requires a thick living present (`|I_now| > 0`) rather than a mathematical point. Yet pure bracketed phenomenology **cannot explain why the living present is bounded at roughly hundreds of milliseconds to seconds rather than being zero or cosmically infinite**, nor why extreme thermal or multisensory perturbations (**Evan Thompson 2007, *Mind in Life***; **Olaf Blanke & Thomas Metzinger 2009** full-body illusion bounds on minimal phenomenal selfhood) alter integration stability. Only physical **Operational Demarcation (A3)** and finite-bandwidth thermodynamic/chronometric subsystem constraints supply the missing *explanatory why*: an embedded bounded cut cannot store infinite past phases cleanly without dissipating energy across finite channel capacity—anchoring Husserlian thickness to finite physical realizability.',
          '### Worked Example 2 · Why Physics Needs Phenomenology & Systems Closure (The Passive-Detector Ambiguity in Wigner’s Friend)\nIn Wigner’s Friend interferometry (§18) and Zurek’s decoherence (§23), mathematical quantum mechanics manipulates Hilbert spaces and unitary propagators cleanly—yet **the formalism itself contains zero internal predicate separating an “observing Friend F” from a stray rock or reversible silver atom**. Without importing phenomenological **First-Person Intentionality / Mineness (A4)** and autopoietic **First Observer Autonomy (§27)**, physicists slide endlessly between anthropocentric mysticism (“human souls collapse waves”) and absurd panpsychism (“every dust grain is a Wigner’s Friend”). Phenomenology and systems theory supply the non-arbitrary semantic demarcation defining what constitutes a genuine observer node.'
        ],
        equation: {
          label: '(8.1)',
          unicodeHtml: 'Phenomenology <sub>[Supplies Semantic Observer Criteria A1,A4]</sub>   ⇄<sub>Bilateral</sub>   Foundational Physics <sub>[Supplies Bandwidth & Cut Constraints A2,A3]</sub>',
          caption: 'Bidirectional explanatory necessity demonstrated via worked examples in temporal bandwidth and Wigner’s Friend demarcation.',
          plainMeaning: 'Phenomenology needs physics to explain why finite temporal and horizon limits hold; physics needs phenomenology and autopoiesis to identify genuine observers.'
        }
      },
      {
        number: '40',
        title: 'Axiom-by-Axiom Empirical Falsifiability, Table 8.4 Auxiliaries & SIT Revision Triggers',
        epistemicFocus: 'Explicit (a) falsifier, (b) experiment (η > 2/3, 10^-18 optical vs PTA), (c) SIT falsification & Friedman triggers, and Table 8.4 Duhem–Quine auxiliary isolation',
        paragraphs: [
          'If A1–A4 function as **Friedman-style relativized a priori commitments** bridging mind and nature rather than sterile verbal conventions, both individual axioms and **the Structural Identity Thesis (SIT) itself** must confront crisp empirical revision triggers **(Plate XVI)**:\n**• Axiom A1 (Immanence) Test:** *(a) Falsifier:* Discovery of macroscopically superposed agents obeying simultaneously universal quantum dynamics AND absolute frame-independent observer facts. *(b) Experiment:* Extended Wigner’s Friend / Local Friendliness photonic-superconducting interferometry scaling memory nodes (Bong et al. 2020 protocol; Appendix B requires heralding efficiencies `η > 2/3` and interference visibility `> 0.85` closing fair-sampling loopholes). *(c) Outcome:* A1+A2 predict Local Friendliness violation preserving relational indexing, whereas absolute-fact realism predicts no violation.\n**• Axiom A2 (Parity) Test:** *(a) Falsifier:* Detection of a preferred universal ether/collapse frame breaking covariant Cross-Perspective Links among equally decohered autonomous agents. *(b) Experiment:* Multi-node Bell/Wigner cross-verification comparing relativistically boosted clock-and-detector frames (`β = v/c` Lorentz offsets). *(c) Outcome:* A2 predicts invariant cross-perspective concordance; privileged-frame collapse theories predict directional privilege.',
          '**• Axiom A3 (Demarcation / FOH) Test:** *(a) Falsifier:* Passive non-regulatory substrates exhibiting identical coherence-stabilization persistence as dissipative self-maintaining units under matched thermal spectral density—including engineered passive error-protected substrates operating purely via open-loop symmetry. *(b) Experiment:* Comparative coherence-lifetime tomography pitting closed-loop active feedback qubits / metabolic vesicles against matched passive crystals (`dS_env/dt` calibrated). *(c) Outcome:* A3+FOH predict sharp non-equilibrium persistence bifurcation (`τ_coh(Active) ≫ τ_coh(Passive)`).\n**• Axiom A4 (Asymmetry & Thick Present) Test:** *(a) Falsifier:* Evidence that zero-bandwidth instantaneous slices mediate temporal change discrimination, or absence of hypothesized cross-scale harmonic residuals across precision clocks. *(b) Experiment:* (i) Psychophysical temporal-order discrimination resolving the ~100–3000 ms Varela–Pöppel integration window alongside (ii) cross-scale phase-noise residuals comparing ultra-cold optical lattice atomic clocks (`Δν/ν ~ 10⁻¹⁸` fractional instability) against long-baseline millisecond pulsar timing arrays (PTA at `~10–100 ns` timing residual floors). *(c) Outcome:* Cognitive thresholds confirm strictly positive `|I_now| > 0`; strict null white noise between `10⁻¹⁸` optical clocks and nanosecond PTA datasets falsifies cross-scale dynamical back-reaction cleanly, confining thickness to local subsystem bandwidth.',
          '### What Falsifies SIT Directly & Defeating Duhem–Quine Holism (Table 8.4)\nFirst, **what falsifies SIT itself**—and activates a **Friedman framework revision**? If any *two* domain categories (`Phen`, `Quant`, `Sys`) fail morphism-composition preservation (`F(g ∘ f) ≠ F(g) ∘ F(f)`)—for instance, if quantum Cross-Perspective Links experimentally validate privileged-frame collapse (`¬A2`) while human phenomenology remains strictly multi-perspectival, or if active biological cuts fail thermal bifurcation (`¬A3`)—then **SIT is refuted directly**, triggering a Friedman constitutive paradigm shift decoupling physical measurement from transcendental subjectivity. Second, **Table 8.4** blocks **Duhem–Quine underdetermination (Quine 1951)** by explicitly isolating every auxiliary assumption (`η > 2/3`, Lorentz ephemeris calibration, bath-spectrum matching, PTA ephemerides) across *physically disjoint apparatuses*: adjusting mirror loss in an optical cavity cannot salvage a thermodynamic vesicle failure!'
        ],
        equation: {
          label: '(8.2)',
          unicodeHtml: '( Test<sub>A1,A2</sub>(LocalFriendliness) ∧ Test<sub>A3</sub>(FOH_Bifurcation) ∧ Test<sub>A4</sub>(10⁻¹⁸ Optical / PTA) )  ⊢  NonHolisticFalsifiability',
          caption: 'Decoupled empirical crucibles testing each axiom and SIT independently while isolating auxiliary hypotheses in Table 8.4.',
          plainMeaning: 'Assigning disjoint experimental tests across quantum interferometry, dissipative feedback loops, and optical-vs.-PTA chronometry prevents saving failed claims via ad hoc adjustments.'
        }
      }
    ]
  },
  {
    id: 'chapter-9',
    number: 9,
    kicker: 'Chapter 9 · Concluding Synthesis, Replies & Five-Discipline Conclusion (§§41–43)',
    title: 'Thirty Vocabularies, One Relational Logic: Synthesis, Critical Replies, and Direct Answers',
    epigraph: '“The task of philosophy of physics is not to declare a winner among thirty vocabularies, but to construct the logical map showing why each is locally indispensable.”',
    pullQuote: 'No observer sits inside the world like a marble in a jar, nor floats outside it like an unmoved deity: to observe is to inhabit a bounded, relationally accountable horizon.',
    leadSummary: 'Distills the unifying philosophical verdict (§41), presents the ten-point Critical Objections and Replies (§42), and closes with §43 Comprehensive Conclusion directly answering "Where is the observer?", "Who is the observer?", Constitutive Absence, and five-discipline stakes.',
    chapterIntro: [
      'We began with an acute historical fracture stretching from Aristotle and Descartes through Kant and Bohr: why does modern thought generate two irreconcilable portraits of the observer—the transcendental ego of phenomenology and the measurement-cut agent of quantum foundations—each afflicted by the identical Paradox of Constitutive Absence? Across **Chapters 1 through 8**, we established our methodology and exclusions, examined thirty-two distinct frameworks in balanced historical depth, placed every formal modal, topological, and no-go proof directly inside the main text, and audited all thirty-two positions against Axioms A1–A4.',
      'In this concluding **Chapter 9**, **§41** summarizes the unified relational transformation achieved, **§42** answers the ten sharpest objections directly inside the main text, and **§43** delivers a Comprehensive Conclusion explicitly answering every opening question and stating concrete discipline-by-discipline stakes **(Figure 9.1)**.'
    ],
    subsections: [
      {
        number: '41',
        title: 'Concluding Synthesis: Neither Outside Nor Inside, But a Relational Horizon',
        epistemicFocus: 'Integrative verdict across all 32 traditions, Chapters 1–8, and the Structural Identity Thesis',
        paragraphs: [
          'The question “Where or who is the observer?” has received thirty formidable answers across thirty-two sections—from Kant’s Paralogisms (§2) and Husserl’s Bernau time-consciousness (§4) through Derrida’s non-punctual trace (§10), Foucault’s *dispositif* (§11), Lacan’s barred `$` (§12), Bohr’s Solvay complementarity (§16), Rovelli’s Cross-Perspective Links (§21), Zurek’s einselection (§23), and the First Observer Hypothesis (§27) to Luhmann’s blind spot (§29), Maturana–Varela’s autopoiesis (§30), and Metzinger’s transparent self-model (§32) **(Plate XVII)**. This proliferation across traditions is not intellectual chaos; it reflects discipline-bound vocabularies interrogating distinct facets of one invariant relational logic.',
          'Once formalized cleanly via four stratified conditions within hybrid varying-domain modal system S4—Perspectival Immanence (A1), Egalitarian Frame Parity (A2), Operational Demarcation Cut (A3), and Asymmetric Self-Relation generating an Allen-interval thick living present (A4)—every genuine discovery locks cleanly into place while conceptual limits (Levinas’s infinite ethics, Marion’s saturation, Cramer’s foliations, RBW’s static block) remain mapped candidly as boundary tensions rather than concealed beneath slogans.',
          'Both philosophy and science emerge deepened from the encounter: phenomenology sheds accusations of mysticism by gaining numbered modal proofs and concrete empirical crucibles, while foundational physics recovers a rigorous, non-anthropocentric definition of the situated observer it could never banish from the measurement cut.'
        ]
      },
      {
        number: '42',
        title: 'Critical Objections and Philosophical Replies',
        epistemicFocus: 'Main-text defense against Solipsism, Relativism, Circularity, Category Mistakes, Anomalies, and Duhem–Quine Holism',
        paragraphs: [
          '1. **Objection from Epistemic Solipsism (Does A1 trap every observer inside a private bubble?)** — *Reply:* No. Solipsism arises *only* when A1 (local situatedness) is asserted *without* A2 (Egalitarian Frame Parity), as proved in our §34 Solipsistic Collapse Reductio. Because every situated horizon overlaps covariantly with peer perspectives via shared equivalence rules (`Equiv_inv` / Rovelli Cross-Perspective Links), no private center owns reality.',
          '2. **Objection from Epistemic Relativism (If no global view exists, isn’t “anything goes” true relative to someone?)** — *Reply:* Relativism confuses **frame-indexing** with **anything-goes arbitrariness**. Under A2, truth within an observational domain is strictly constrained by cross-perspective invariance and consistency conditions (Griffiths §24, Born coherence §22). Claiming “velocity depends on inertial frame” does not make speed arbitrary; it states exact Lorentz invariance. Likewise, relational facts in A1–A2 remain strictly lawful.',
          '3. **Objection from Circularity (Aren’t observers already presupposed when defining A1–A4 or autopoietic closure?)** — *Reply:* We distinguish **vicious definitional circularity** from **generative causal closure** (§30) and **transcendental reflexivity**. Autopoietic cells close causally in biochemistry without logical contradiction, while transcendental S4 necessity shows *from inside coherent discourse* why denying any axiom breaks discourse itself via RAA (§§34–37) and §40 external laboratory thresholds.',
          '4. **Objection from Naturalistic Category Mistake (Does linking phenomenology to physics reduce intentionality to molecules?)** — *Reply:* On the contrary, SIT (§38) asserts a **non-reductive category-signature isomorphism**, never ontic identity of qualia with inert particles. Horizons (A1–A3) are structural conditions determining how physical objects manifest intelligibly, preserving Kant’s and Husserl’s transcendental asymmetry cleanly.',
          '5. **Objection from Henry’s Non-Temporality (Doesn’t Henry’s auto-affection contradict A4?)** — *Reply:* As proved in Theorem 2.1 (§8), Henry denies *ecstatic clock time*, not *generative asymmetry*. His irreversible non-negative self-givenness (`π_temp : Pathos_o → S_o ≥ 0`, `A4a`) provides the engine explaining why lived time (`A4b`) cannot flatten into dead point-instants.',
          '6. **Objection from Saturation and Ethical Infinity (Don’t Marion §15 and Levinas §9 falsify universal necessity of A2–A3?)** — *Reply:* Transparency strengthens our thesis (§9, §15): A1–A4 govern *ordinary intelligible epistemic/scientific observation*. Levinas marks the meta-epistemic *ethical overflow* above symmetric parity, while Marion marks the upper *channel-capacity overflow (`I(Phenomenon : B_o) ≫ C(B_o)`)* of finite horizons—both illuminating the exact boundaries of science.',
          '7. **Objection from Adynamical Blockworld & Wheeler Participancy (Does RBW §26 refute A4, or Wheeler §20 demand a 5th axiom?)** — *Reply:* As detailed in §20, Wheeler’s registered-phenomenon rule is fully captured by A1+A3 without needing human idealism. As detailed in §26 and Proposition 5.1, even if fundamental cosmology proves block-static, any localized information-gathering worldtube acting as an *observer* inside the block must still maintain asymmetric retention–protention gradients (`|I_o| > 0`, `dS_mem/dλ > 0`) along its trajectory.',
          '8. **Objection from Duhem–Quine Holism (Can’t auxiliary physics save any failed axiom?)** — *Reply:* §40 and **Table 8.4** defeat holistic evasion by coupling each axiom (`A1–A4`) to physically disjoint experimental apparatuses (interferometry, non-equilibrium open loops, chronometry/psychophysics) with isolated auxiliaries and pre-registered null retreat conditions.',
          '9. **Objection from Modal Quantification (Doesn’t `□∀o Obs(o) → …` trigger the Barcan or Converse Barcan Formula, forcing observers to exist necessarily?)** — *Reply:* Explicitly blocked in §1 via **varying-domain S4 semantics `⟨W, R, D(w)⟩`** (Kripke 1963; Fitting & Mendelsohn 1998) with non-monotonic domains `D(w)` and Barcan countermodel `M_BF`: universal quantification binds *de dicto* inside each world `w` over observers *that happen to exist in `D(w)`*, invalidating both Barcan (`∀x□Fx → □∀xFx`) and Converse Barcan (`□∀xFx → ∀x□Fx`) without absurdly necessitating observers in lifeless primordial epochs.',
          '10. **Objection from Non-Western & Feminist Standpoint Philosophy (Isn’t A1–A4 merely a Eurocentric masculine subject disguised as universal logic?)** — *Reply:* On the contrary, A1’s rejection of the “view from nowhere” and A2’s demand for symmetrical non-aristocratic parity converge directly with **Nāgārjuna’s *śūnyatā* interdependence**, **Dignāga’s *svasaṃvedana***, and **Donna Haraway / Sandra Harding’s feminist standpoint critique of the “god trick”**, explicitly situating every epistemic observer in embodied historical materiality (`A3`) rather than a disembodied sovereign subject.'
        ]
      },
      {
        number: '43',
        title: 'Comprehensive Conclusion: Direct Answers to the Opening Questions and Five-Discipline Stakes',
        epistemicFocus: 'Direct closure to Where/Who is the observer, Constitutive Absence resolution, and five concrete disciplinary verdicts',
        paragraphs: [
          'Every architectural proof, countermodel, and empirical protocol in this monograph converges on clean, direct answers to the three foundational questions posed at the opening of **Chapter 1** **(Plate XVIII; Figure 9.1)**:',
          '**(1) “Where is the observer?”** — *Answer:* The observer is **neither an external deity floating outside the universe nor an inert marble sitting passively inside a neutral container**. Rather, **“where” the observer stands is an operationally demarcated topological boundary `B_o` separating an accessible Boolean interior `Inside_o` from an unmarked exterior `Ext_o` (Axiom A3)**, always anchored inside a situated local horizon `H_o` (`Axiom A1`) whose coordinate frame shifts covariantly across peer vantage points without a global master frame (`Axiom A2`). **(2) “Who is the observer?”** — *Answer:* **“Who” the observer is is any physically or phenomenologically bounded agent instantiating an asymmetric, entropy-updating self-relation (`S_o ≥ 0`, `Asym(S_o)`) across an extended thick living present (`Dur(I_now) > 0`, `Axiom A4`)**—spanning conscious human *ipseity*, non-equilibrium living cells (FOH/autopoiesis), and irreversible information-gathering subsystems (IGUS), cleanly distinguished from passive reversible transducers (**§27**, **§37**). **(3) How does this dissolve the Paradox of Constitutive Absence?** — *Answer:* The observer appears constitutively absent precisely because **a boundary `B_o` cannot present itself wholly as one bounded object inside its own interior (`¬ObjWithin(B_o, Inside_o)`)**. Once we abandon the impossible demand for total self-objectification within a single static snapshot and recognize second-order frame shifts (`A2`), the vanishing point ceases to look like a mystical anomaly and reveals itself as the necessary geometry of finite observation (**Theorem 1.1**, **No-Go Theorem 5.1**).',
          'Crucially, this resolution transforms concrete practice across **five major disciplines**: **(i) Phenomenology** gains formal varying-domain S4 derivations, Allen-interval precision over *Bernau* time-consciousness, and empirically bounded integration thresholds; **(ii) Post-Structuralism & Continental Critique** retains its anti-essentialist critiques of sovereign presence (`différance`, *dispositif*, `$`, *l’adonné*) via formal §15a structural-role morphisms while isolating ethical/saturated limit overflows from ordinary epistemic breakdown; **(iii) Quantum Foundations** receives an explicit cross-cut trade-off law (**No-Go Theorem 5.1**) linking Adlam–Rovelli Cross-Perspective Links (`A2`) and Doplicher–Longo split inclusions (`A3`) to non-anthropic First Observer criteria (`A4`); **(iv) Systems Theory & Cognitive Science** secures formal Markov-blanket distinction (`μ ⊥ η | B_o`) separating passive cuts from autonomous agency without Cartesian dualism; and **(v) Philosophy of Science** obtains a testable **Friedman-style relativized a priori framework** equipped with explicit auxiliary-assumption isolation (**Table 8.4**) and formal reproducibility signatures (**Appendix D**).'
        ]
      }
    ]
  }
];

export const TABLE_2_1_PHENOMENOLOGY = [
  { theory: '§2 Kant Apperception', coreClaim: 'Formal Syn(o, R) vs. empirical ego; 1st/3rd Paralogisms; two-aspect reading', paradoxEncountered: 'Absent from intuition; self-objectification triggers infinite regress', bundleCounterpart: 'Transcendental condition A1 & two-aspect horizon A3' },
  { theory: '§3 Husserl Early Ego (LI V)', coreClaim: 'Non-egological stream; Ideas I §57 n.1 clarification (Zahavi)', paradoxEncountered: 'Early formulation under-specifies pre-reflective Meinhaftigkeit', bundleCounterpart: 'Requires first-personal indexical anchor A4' },
  { theory: '§4 Husserl Late Ego & Bernau', coreClaim: 'Bernau time diagram; pre-objective Urstrom drives living present', paradoxEncountered: 'Constituting/constituted circle resolved via pre-objective asymmetry', bundleCounterpart: 'Thick temporal synthesis (A4a asymmetry + A4b interval)' },
  { theory: '§5 Husserl Intersubjectivity', coreClaim: 'Paarung concordance across Nullpunkte; Compat(P_i, P_j) covariance', paradoxEncountered: 'Eigenheitssphäre empathy circularity proves parity prior', bundleCounterpart: 'Transitive covariant equivalence across peers (A2)' },
  { theory: '§6 Heidegger Dasein (§§69–70)', coreClaim: 'Nur-noch-hinsehen derivation of Vorhandenheit; Zollikon/Thing', paradoxEncountered: 'Critiques mathematical time without formal cut covariance', bundleCounterpart: 'Embedded immanence A1 & ecstatic temporality A4' },
  { theory: '§7 Merleau-Ponty Body-Subject', coreClaim: 'Double-sensation touching/touched chiasm & non-coincident écart', paradoxEncountered: 'Informal boundary scale awaiting physical decoherence', bundleCounterpart: 'Two-way boundary coupling (A3) & chiasmic gap (A4)' },
  { theory: '§8 Michel Henry Auto-Affection', coreClaim: 'Non-ecstatic immanent self-feeling generating living ipseity', paradoxEncountered: 'Acosmism rejects external parity (✗ on A2)', bundleCounterpart: 'Pre-chronometric asymmetric engine grounding time (A4a)' },
  { theory: '§9 Levinas Ethical Subject', coreClaim: 'Subject summoned passively by Face of Other prior to ontology', paradoxEncountered: 'Infinite ethical asymmetry overflows A2 parity & A3 border', bundleCounterpart: 'Meta-epistemic ethical limit beyond scientific totalization' }
];

export const TABLE_3_1_DECONSTRUCTION = [
  { theory: '§10 Derrida Différance', coreClaim: 'Negative trace proof; Violence & Metaphysics symmetry; autoimmunity', structuralDissolution: 'Refutes punctual Jetztpunkt while keeping cuts open to revision', bundleCounterpart: 'Anti-instantaneity (¬[t, t]) & unclosed horizon A3' },
  { theory: '§11 Foucault Dispersed Subject', coreClaim: 'Dispositif / power-knowledge (Panopticon & clinical gaze)', structuralDissolution: 'Dissolves ahistorical ego; resolved via stratified critique', bundleCounterpart: 'Historically situated immanent cuts (A1 & A3)' },
  { theory: '§12 Lacan Split Subject ($)', coreClaim: 'Barred $ between Imaginary moi & Symbolic je; Real & objet petit a', structuralDissolution: 'Exposes egoic mastery as misrecognition leaving Real remainder', bundleCounterpart: 'A1–A4 formalize barred $ & A3 remainder without healing split' },
  { theory: '§13 Deleuze Fractured Cogito', coreClaim: 'Virtual/actual ontology; nomadic vs. sedentary distribution; passive syntheses', structuralDissolution: 'Virtual intensive inequality vs. actualized frame symmetry', bundleCounterpart: 'Larval temporal syntheses (A4); stratified parity (A2)' },
  { theory: '§14 Nancy Singular Plural Being', coreClaim: 'Co-original être-avec & spacing prior to atomism', structuralDissolution: 'Refutes prior solitary ego modeled before relationality', bundleCounterpart: 'Observer poles o, o′ co-constituted via parity links (A2)' },
  { theory: '§15 Marion Saturated Phenomenon', coreClaim: 'Intuition overflows conceptual horizon; l’adonné receiver', structuralDissolution: 'Shatters ordinary bounded synthesis under excess givenness', bundleCounterpart: 'Explicit horizon-overflow limit exceeding finite cut capacity (A3)' }
];

export const TABLE_4_1_QUANTUM = [
  { theory: '§16 Copenhagen (Bohr)', observerSeat: 'Contextual classical experimental apparatus (Faye/Howard)', cutStatus: 'Movable context cut + Solvay/EPR complementarity', bundleMapping: 'Epistemic horizon (A1) & contextual cut intelligibility (A3)' },
  { theory: '§17 Von Neumann Chain', observerSeat: 'Formal abstract ego halting Process 2 (distinct from Wigner)', cutStatus: 'Arbitrary cut shift invariance along causal chain', bundleMapping: 'Frame covariance of demarcation boundary (A3)' },
  { theory: '§18 Wigner’s Friend', observerSeat: 'Inner friend vs. outer super-observer (Local Friendliness)', cutStatus: 'No-go theorem against absolute observer-independent facts', bundleMapping: 'Forces relational parity & frame-indexed facts (A1 + A2)' },
  { theory: '§19 Everett Relative States', observerSeat: 'Branch-indexed memory registers (Fig. 5.1: 0.78, 0.88)', cutStatus: 'No collapse; requires §23 decoherence for quasiclassical cut', bundleMapping: 'Intra-branch parity (A2); cross-branch measure tension' },
  { theory: '§20 Wheeler Participatory', observerSeat: 'Delayed-choice registration loop (It from Bit)', cutStatus: 'Phenomenon actualized via interaction cut (no 5th axiom)', bundleMapping: 'Registered status entailed directly by A1 + A3' },
  { theory: '§21 Rovelli Relational QM', observerSeat: 'Any physical system coupled with memory updates', cutStatus: 'Relational states + Adlam–Rovelli Cross-Perspective Links', bundleMapping: 'Full parity (A2) & irreversible thermodynamic memory (A4)' },
  { theory: '§22 QBism (Fuchs / Schack)', observerSeat: 'First-person gambling agent (participatory realism vs. coherence)', cutStatus: 'Born rule as normative Dutch-book coherence grammar', bundleMapping: 'Strongest A1/A4 agency; normative coordination toward A2' },
  { theory: '§23 Decoherence (Zeh / Zurek)', observerSeat: 'Einselected pointer states & Quantum Darwinism fragments', cutStatus: 'Stabilizes classical cut dynamically given partition split', bundleMapping: 'Physical mechanism realizing A3 boundary stability' },
  { theory: '§24 Consistent Histories', observerSeat: 'Consistent Boolean history lattice (Griffiths / GMH)', cutStatus: 'D(α, α′) = 0 compatibility; Dowker–Kent selection gap', bundleMapping: 'Boolean frame compatibility (A2); silent on framework choice' },
  { theory: '§25 Transactional (Cramer)', observerSeat: 'Absorber-boundary completing offer/confirmation handshake', cutStatus: 'Bilateral temporal standing constraint; Maudlin/PTI tension', bundleMapping: 'Extended boundary handshake (A4) vs. foliation strain' },
  { theory: '§26 Relational Blockworld', observerSeat: 'Persistent worldtube pattern in adynamical 4D block', cutStatus: 'Global path-integral constraint; denies dynamic collapse', bundleMapping: 'Matches A1–A3; explicit anomaly against fundamental A4' },
  { theory: '§27 First Observer Hypothesis', observerSeat: 'Dissipative self-maintaining system (non-anthropic IGUS)', cutStatus: 'Physical/logical cut separating active observer & dead detector', bundleMapping: 'Canonical physical realization of A3 + A4 regulatory cycles' }
];

export const TABLE_5_1_SYSTEMS = [
  { theory: '§28 Von Foerster Observing System', coreClaim: 'Recursive eigenbehaviors O(O(x))=x*; 1st vs. 2nd-order cuts', closureMechanism: 'Fixed-point stabilization generating cognitive invariants', bundleCounterpart: 'Operational demarcation (A3) & second-order frame shift (A2)' },
  { theory: '§29 Luhmann Systems Theory', coreClaim: 'Triple Bio/Psychic/Social closure; anti-humanism reconciled', closureMechanism: 'Spencer-Brown distinction re-entry & blind-spot transfer', bundleCounterpart: 'Cross-system parity (A2) & self-concealing boundary (A3)' },
  { theory: '§30 Maturana & Varela Autopoiesis', coreClaim: 'Metabolic closure + cognitive domain vs. environment', closureMechanism: 'Generative causal circularity + structural coupling', bundleCounterpart: 'Endogenous perspective (A1), coupling parity (A2), closure (A3)' },
  { theory: '§31 Alva Noë Enactive Perception', coreClaim: 'Skillful mastery of lawful sensorimotor contingencies', closureMechanism: 'Reafference vs. exafference boundary calibration', bundleCounterpart: 'Active operational boundary (A3) enacted via exploration' },
  { theory: '§32 Metzinger Self-Model (SMT)', coreClaim: 'Phenomenal transparency vs. opacity; process vs. soul-self', closureMechanism: 'Attentional unavailability of sub-personal PSM machinery', bundleCounterpart: 'Explains A3 blind spot & A4 mineness compatible with SIT' },
  { theory: '§33 Dennett Narrative Gravity', coreClaim: 'Multiple Drafts & Real Patterns (Center of Narrative Gravity)', closureMechanism: 'Predictive compression over distributed retrospective traces', bundleCounterpart: 'Real structural patterns align with SIT; pre-narrative A4' }
];

export const TABLE_6_1_RESOLUTION = [
  { formalObject: 'A1: Perspectival Immanence', mathematicalRole: 'Modal S4 necessity: situated local horizon H_o', phenomenologicalCorrelate: 'Kant/Husserl horizon of perspectives (no God’s-eye view)', obstructionResolved: 'Refutes vicious Archimedean regress without relativism' },
  { formalObject: 'A2: Egalitarian Frame Parity', mathematicalRole: 'Symmetric, transitive structural-normative covariance', phenomenologicalCorrelate: 'Husserlian Paarung concordance & RQM Cross-Perspective Links', obstructionResolved: 'Refutes incoherent solipsism without privileging one ego' },
  { formalObject: 'A3: Operational Boundary Cut', mathematicalRole: 'Topological separation collar & indirect exterior re-entry', phenomenologicalCorrelate: 'Finite horizon vs. unassimilable exterior anomalies', obstructionResolved: 'Cures continuum indistinction & Spencer-Brown exterior puzzle' },
  { formalObject: 'A4: Asymmetric Self-Relation', mathematicalRole: 'Non-negative irreversible gradient (S_o ≥ 0) prior to T_ext', phenomenologicalCorrelate: 'Henry’s auto-affection (A4a) & Merleau-Ponty écart', obstructionResolved: 'Breaks shift symmetry; grounds pre-reflective mineness' },
  { formalObject: 'Thick Temporal Synthesis', mathematicalRole: 'Allen Interval Logic (Dur(I_now) > 0, Overlaps, Meets)', phenomenologicalCorrelate: 'Husserl Bernau diagram, Dainton, Gallagher & Varela', obstructionResolved: 'Refutes zero-width temporal freeze ([t, t]) & enables §40 tests' }
];

export const TABLE_7_1_IDENTITY_SYNTHESIS = [
  { structuralCriterion: 'Situational Perspective (A1)', husserlPhenom: 'Embodied Nullpunkt & adumbrations', rovelliRqm: 'State relative to interacting system O', autopoiesisBio: 'Endogenous cognitive domain of cell', fiberBundleFormal: 'A1: S4 Situated Local Horizon H_o' },
  { structuralCriterion: 'No Absolute Viewpoint (A2)', husserlPhenom: 'Intersubjective Paarung & Einstimmigkeit', rovelliRqm: 'Adlam–Rovelli Cross-Perspective Links', autopoiesisBio: 'History-dependent structural coupling', fiberBundleFormal: 'A2: Normative-Structural Parity Equiv_inv' },
  { structuralCriterion: 'Finite Capacity & Cut (A3)', husserlPhenom: 'Bounded horizon & exterior anomaly', rovelliRqm: 'Finite accessible interaction records', autopoiesisBio: 'Operational membrane closure (Bio/Psychic)', fiberBundleFormal: 'A3: Topological Collar & Re-Entry Traces' },
  { structuralCriterion: 'Immanent Self-Relation (A4a)', husserlPhenom: 'Pre-objective Urstrom / Henry ipseity', rovelliRqm: 'Irreversible memory update asymmetry', autopoiesisBio: 'Active negentropic self-maintenance', fiberBundleFormal: 'A4a: Irreversible Non-Negative Gradient' },
  { structuralCriterion: 'Temporal Thickness (A4b)', husserlPhenom: 'Bernau Retention–Impression–Protention', rovelliRqm: 'Finite thermodynamic correlation window', autopoiesisBio: 'Autonomous regulatory cycle period', fiberBundleFormal: 'A4b: Allen Interval Window |I_now| > 0' },
  { structuralCriterion: 'Falsifiable Bridge (SIT)', husserlPhenom: 'Synthetic a priori structural necessity', rovelliRqm: 'Extended Wigner & Local Friendliness', autopoiesisBio: 'FOH active vs. passive bifurcation', fiberBundleFormal: 'Meta-Theorem SIT & Anti-Holism Tests (§40)' }
];

export const TABLE_8_1_TESTABLE_CORRELATION = [
  { channel: 'A1 & A2: Local Friendliness Interferometry', targetObservable: 'Cross-frame fact invariance across nested coherent memory nodes', predictedSignal: 'Violates Local Friendliness while preserving covariant cross-links', nullConsequence: 'Supports observer-independent absolute macro-facts against A1/A2' },
  { channel: 'A3: FOH Active vs. Passive Probes', targetObservable: 'Coherence persistence in closed-loop dissipative units vs. dead detectors', predictedSignal: 'Threshold persistence bifurcation marking autonomous operational cuts', nullConsequence: 'Collapses FOH autonomy boundary into scale-free passive decoherence' },
  { channel: 'A4 (Cognitive): Psychophysical Interval Bounds', targetObservable: 'Minimum temporal-order discrimination threshold & neural integration', predictedSignal: 'Strictly positive lower window |I_now| > 0 (Varela/Dainton bands)', nullConsequence: 'Zero-duration slices sustaining perceptual change refutes A4' },
  { channel: 'A4 (Chronometric): Optical–PTA Comparisons', targetObservable: 'Harmonic phase residuals across terrestrial lattice clocks & pulsars', predictedSignal: 'Tests whether finite thickness exerts dynamical cross-scale coupling', nullConsequence: 'Confines thick present cleanly to local cognitive/subsystem bandwidth' }
];

export const SYNTHESE_SYMBOL_GLOSSARY: SyntheseSymbolEntry[] = [
  { symbol: 'A1 (Immanence)', name: 'Perspectival Immanence', domain: 'Modal Logic S4', definition: '□∀o (Obs(o) → ∃H_o [Situated(o, H_o) ∧ ¬TotalView(o)]): every observation occurs from a situated local horizon.' },
  { symbol: 'A2 (Parity)', name: 'Egalitarian Frame Parity', domain: 'Relational Logic', definition: '∀o,o′ (Overlap(o, o′) → [Compat(o, o′) ∧ Equiv_inv(o, o′)]): covariant parity without privileged ego.' },
  { symbol: 'A3 (Boundary)', name: 'Operational Demarcation Cut', domain: 'Topology / Systems', definition: '∀o,x (Discern(o, x) → ∃B_o [Sep(B_o, Inside_o, Ext_o) ∧ Bounded(Inside_o)]): finite separation collar.' },
  { symbol: 'A4 (Asymmetry)', name: 'Asymmetric Self-Relation', domain: 'Interval Logic / Mind', definition: 'Irreversible non-negative self-acquaintance (S_o ≥ 0) + Allen extended interval |I_now| > 0.' },
  { symbol: '⟨W, R, D(w)⟩', name: 'Varying-Domain S4 Frame', domain: 'Quantified Modal Logic', definition: 'Reflexive–transitive modal accessibility relation with world-indexed domain D(w) invalidating Barcan & Converse Barcan.' },
  { symbol: 'H_o , B_o , Ext_o', name: 'Horizon, Cut & Unmarked Exterior', domain: 'Phenomenology / Topology', definition: 'Situated local horizon H_o, operational boundary B_o separating Inside_o, and indirect exterior Ext_o.' },
  { symbol: 'Compat(o, o′)', name: 'Cross-Perspective Concordance', domain: 'Intersubjectivity / RQM', definition: 'Symmetric, transitive covariant equivalence linking Husserlian Paarung and Adlam–Rovelli Links.' },
  { symbol: 'Σ_o , N', name: 'Memory Sigma-Algebra & Split Factor', domain: 'Operator Algebras', definition: 'Non-trivial discrete Boolean event algebra Σ_o stabilized inside Doplicher–Longo intermediate Type I factor N.' },
  { symbol: 'S_o , I_now', name: 'Auto-Affective Gradient & Present', domain: 'Interval Logic / Mind', definition: 'Non-negative irreversible self-relation S_o ≥ 0 and non-zero active living-present interval Dur(I_now) > 0.' },
  { symbol: 'Σ_Obs', name: 'Invariant Observer Signature', domain: 'Category Theory / SIT', definition: 'Target category ⟨Ob_Obs, Hom_Obs⟩ satisfying A1–A4 shared via functors F_Phen, F_RQM, and F_Bio.' },
  { symbol: 'F_Phen, F_RQM, F_Bio', name: 'Domain Structure Functors', domain: 'Category Theory (§38)', definition: 'Faithful composition-preserving functors from Phen, Quant, and Sys onto invariant signature Σ_Obs.' },
  { symbol: 'M_~A1..M_~A4', name: 'Separating Countermodels', domain: 'Model Theory (Table 7.2)', definition: 'Explicit semantic countermodels proving mutual independence of {A1–A3} and stratified A4 → A3.' },
  { symbol: 'D(α, α′) = 0', name: 'Decoherence Consistency Functional', domain: 'Consistent Histories', definition: 'Orthogonality condition Tr(C_α ρ C_α′†) = 0 permitting valid Boolean probabilities inside a single history family.' },
  { symbol: '□ , ◇', name: 'Modal S4 Necessity / Possibility', domain: 'Modal Epistemology', definition: 'Reflexive–transitive necessity across all coherent dynamically accessible contexts ⟨W, R, D(w)⟩.' },
  { symbol: '⊢ , ⊥', name: 'Entailment & Contradiction', domain: 'Proof Theory', definition: 'Formal syntactic derivation turnstile (⊢) and classical reductio absurdity (p ∧ ¬p → ⊥).' },
  { symbol: 'Overlaps, Meets', name: 'Allen Interval Relations', domain: 'Temporal Logic', definition: 'Topological interval relations requiring strictly positive duration (|I| > 0), excluding zero-width [t, t].' },
  { symbol: '✓ / ✗ / partial', name: 'Cross-Reference Audit Codes', domain: '32-Model Matrix', definition: 'Full convergence (✓), explicit contradiction/limit anomaly (✗), or partial compatibility (partial).' }
];

export const SYNTHESE_GLOSSARY: SyntheseGlossaryTerm[] = [
  { term: 'Paradox of Constitutive Absence', definition: 'The twin convergence of phenomenology and quantum theory: the observer makes objective experience possible yet cannot appear wholly represented as one object within its own horizon.' },
  { term: 'Varying-Domain Modal Logic S4', acronym: '⟨W, R, D(w)⟩', definition: 'Reflexive–transitive modal logic with context-indexed domains invalidating both Barcan and Converse Barcan formulas while avoiding S5 cosmic symmetry.' },
  { term: 'Relativized A Priori', acronym: 'Friedman / Reichenbach', definition: 'Constitutive structural axioms (A1–A4) framing empirical intelligibility while remaining open to revision when empirical crucibles fail.' },
  { term: 'Essential Indexicals & de se', acronym: 'Perry / Lewis / Shoemaker', definition: 'First-personal expressions (“I”, “here”, “now”) irreducible to third-person coordinates and immune to error through misidentification.' },
  { term: 'Myth of the Given', acronym: 'Sellars', definition: 'The fallacy of treating raw non-conceptual states as self-justifying propositional premises; avoided cleanly by structural orientation A4a.' },
  { term: 'Transcendental Apperception', acronym: 'Kant B131 / Syn(o, R)', definition: 'Rule-governed categorial unification distinct from the empirical ego; guarded against reification by the First and Third Paralogisms.' },
  { term: 'Meinhaftigkeit (Pre-Reflective Mineness)', acronym: 'Zahavi / Shoemaker', definition: 'Immediate first-personal self-acquaintance built into every conscious act prior to reflective objectification.' },
  { term: 'Living Present & Bernau Diagram', acronym: 'Lebendige Gegenwart', definition: 'Husserl’s thick temporal window fusing primal impression with diagonal retention and protention, grounded in pre-objective Urstrom.' },
  { term: 'Paarung & Einstimmigkeit', acronym: 'Husserl 5th Med.', definition: 'Analogizing perceptual pairing and harmonious cross-perspective concordance grounding shared intersubjective objectivity (A2).' },
  { term: 'Zuhandenheit vs. Vorhandenheit', acronym: 'Heidegger §§16, 69–70', definition: 'Shift from absorbed practical coping to detached mathematical inspection triggered by equipmental breakdown.' },
  { term: 'Chiasmic Écart', acronym: 'Merleau-Ponty', definition: 'Non-coincident divergence in the touching–touched double sensation, manifesting A3 two-way coupling and A4 asymmetry.' },
  { term: 'Auto-Affection', acronym: 'Michel Henry', definition: 'Non-ecstatic immanent self-givenness (A4a) supplying the asymmetric engine prior to objective clock time without denying temporal unfolding.' },
  { term: 'Diachrony & Saying vs. Said', acronym: 'Levinas', definition: 'Irreducible ethical exposure (le Dire) overflowing synchronous conceptual recall (le Dit) and symmetric epistemic borders.' },
  { term: 'Arche-Trace & Autoimmunity', acronym: 'Derrida', definition: 'Structural deferral refuting uncontaminated instantaneous presence (¬[t, t]) and keeping every axiomatic border open to outside disruption.' },
  { term: 'Dispositif & Subjectivation', acronym: 'Foucault', definition: 'Historical-material apparatus of instruments, gaze geometry, and norms producing situated observer positions and reflexive folding.' },
  { term: 'Barred Subject & objet petit a', acronym: 'Lacan $ / a', definition: 'Subject fractured between Imaginary ego and Symbolic signifiers, shedding a non-symbolizable Real remainder across the A3 cut.' },
  { term: 'Extimacy (Extimité)', acronym: 'Lacan Sem. VII/XI', definition: 'Structural topology in which the subject’s innermost core functions simultaneously as an excluded exterior kernel.' },
  { term: 'Partial Observers & Nomadic Space', acronym: 'Deleuze & Guattari', definition: 'Embedded perspectival stations inhabiting local curvatures of state space prior to anthropomorphic unification.' },
  { term: 'Being Singular Plural & Spacing', acronym: 'Nancy', definition: 'Co-originality of individual perspective and plural exposure (être-avec) along finite corporeal limits.' },
  { term: 'Saturated Phenomenon & l’adonné', acronym: 'Marion', definition: 'Intuitive excess overwhelming conceptual horizons (A3 limit), reframing the witness as passive receiver rather than sovereign judge.' },
  { term: 'Lüders Rule vs. von Neumann Projection', acronym: 'Process 1 / Covariant Cut', definition: 'State-update operator preserving coherence inside degenerate subspaces while confirming empirical invariance across movable Heisenberg cuts.' },
  { term: 'Local Friendliness No-Go Theorem', acronym: 'Bong et al. 2020', definition: 'Tighter successor to Bell and Frauchiger–Renner proving Locality, No-Superdeterminism, and Absolute Observer-Independent Facts mutually inconsistent.' },
  { term: 'Cross-Perspective Links', acronym: 'Adlam–Rovelli 2023', definition: 'Relational QM coherence axiom enforcing covariant agreement when two observers probe one shared interaction record (A2).' },
  { term: 'Quantum Urgleichung', acronym: 'QBism / SIC-POVM', definition: 'Normative Born consistency relation binding personal measurement priors across symmetric minimal informationally complete POVMs.' },
  { term: 'Einselection, Proper Mixture & FAPP', acronym: 'Zurek / d’Espagnat / Bell', definition: 'Dynamical environment-induced pointer selection stabilizing A3 while generating improper entanglement mixtures requiring situated registration.' },
  { term: 'Split Property & Intermediate Type I Factor', acronym: 'Doplicher–Longo 1984', definition: 'Algebraic quantum field condition guaranteeing a separating Type I factor N whenever finite buffer collars isolate local regions (A3).' },
  { term: 'First Observer Hypothesis & IGUS', acronym: 'FOH / Gell-Mann–Hartle', definition: 'Physical–cybernetic demarcation (A3 + A4) separating dissipative closed-loop negentropic observers from passive linear transducers.' },
  { term: 'Eigenbehavior & Unmarked Exterior', acronym: 'Von Foerster / Luhmann', definition: 'Recursive fixed-point perceptual invariants stabilized across a distinction boundary whose origin remains blind from inside.' },
  { term: 'Autopoiesis & Cognitive Domain', acronym: 'Maturana–Varela', definition: 'Self-producing metabolic closure enacting an endogenous cognitive niche distinct from an external observer’s environment description.' },
  { term: 'Phenomenal Transparency', acronym: 'Metzinger PSM', definition: 'Introspective unavailability of sub-personal construction stages inside the self-model, mechanically producing A3’s blind spot.' },
  { term: 'Real Patterns & Multiple Drafts', acronym: 'Dennett', definition: 'Non-homuncular functional patterns enabling predictive compression over parallel distributed cognitive revisions.' },
  { term: 'Structural Identity Thesis', acronym: 'SIT', definition: 'Meta-theoretical category-signature isomorphism unifying Phenomenology, Relational QM, and Autopoiesis across A1–A4.' }
];

export const SYNTHESE_APPENDICES: SyntheseAppendix[] = [
  {
    letter: 'A',
    title: 'Archival Cross-Walk: Formal Proofs Integrated Into Main Text (§§34–37)',
    summary: 'Cross-reference concordance confirming soundness and independence of Axioms A1–A4 across main-text §§34–37 and separating countermodels M_~A1..M_~A4.',
    paragraphs: [
      'In accordance with best scholarly practice for philosophy of science, the former appendix derivations live directly inside the main text: readers seeking the quantified varying-domain S4 derivation and vicious-regress proof should consult main-text §34; readers seeking the set-theoretic Anti-Continuum Lemma, Doplicher–Longo Split Property, and unmarked-exterior re-entry resolution should consult §35; and readers seeking the four separating countermodels (M_~A1 through M_~A4 in Table 7.2), Allen interval formalization, and coverage completeness proof should consult §36 and §37.',
      'Below is the compact axiomatic concordance ledger paired with Proposition A.1 establishing formal soundness across every reductio channel.'
    ],
    equations: [],
    theoremBoxes: [
      {
        kind: 'Proposition',
        number: 'A.1',
        title: 'Soundness of Stratified Reductio & Separating Countermodel Semantics',
        statement: 'Every reductio branch in the A1–A4 Axiomatic Concordance Ledger witnesses a valid countermodel separation inside varying-domain Kripke–topological semantics ⟨W, R, D(w), Σ_o⟩.',
        proofSteps: [
          '1. [Completeness Match] Each row of Table A.1 corresponds bijectively to one of {M_~A1, M_~A2, M_~A3, M_~A4} in Table 7.2.',
          '2. [Stratification Check] Deleting A3 collapses both A3 and A4 in M_~A3 (since persistent memory requires Type I factor separation), verifying A4 → A3.',
          '3. [Non-Collapse] M_~A4 satisfies A1–A3 while denying A4, proving A3 ↛ A4 strictly.'
        ],
        sourceNote: 'Cross-verified against Table 7.2 (§37) and Figure 7.2.'
      }
    ],
    reproducibilityLedger: [
      { checkpoint: 'A1 (Immanence) Suspended', formula: 'Assume ¬A1: ∃o_global ∀x Rep(o_global, x)', referenceConstants: '§34 Vicious Archimedean Regress Theorem (M_~A1)', computedOutput: 'Reductio: o₀ ≺ o₁ ≺ o₂ … → ⊥' },
      { checkpoint: 'A2 (Parity) Suspended', formula: 'Assume A1 ∧ ¬A2: Privileged center o*', referenceConstants: '§34 Husserl 5th Med. & Extended Wigner (M_~A2)', computedOutput: 'Reductio: Objective(p) ∧ ¬Objective(p) → ⊥' },
      { checkpoint: 'A3 (Boundary) Suspended', formula: 'Assume A1 ∧ A2 ∧ ¬A3: Continuum(X)', referenceConstants: '§35 Split Property & Anti-Continuum Lemma (M_~A3)', computedOutput: 'Reductio: Sigma-algebra collapse → ⊥' },
      { checkpoint: 'A4 (Asymmetry) Suspended', formula: 'Assume A1..A3 ∧ ¬A4: I_now = [t₀, t₀]', referenceConstants: '§36–§37 Allen Interval Logic & Henry (M_~A4)', computedOutput: 'Reductio: Temporal freeze → ⊥' }
    ]
  },
  {
    letter: 'B',
    title: 'Extended Technical Notes on Axiom Falsification Protocols (§40)',
    summary: 'Supplementary methodological parameters for Local Friendliness interferometry, FOH thermodynamic persistence, and optical-vs.-PTA chronometry tolerances.',
    paragraphs: [
      'While §40 summarizes the empirical falsification structure for each axiom A1–A4 and isolates auxiliary assumptions in Table 8.4, this technical note records quantitative laboratory calibration criteria: (1) Local Friendliness bipartite photonic circuits require heralding efficiencies η > 2/3 alongside high interferometric visibility (> 0.85) to close detection-loophole thresholds testing A1/A2; (2) FOH bifurcation tests require matching ambient bath temperatures and spectral densities between closed-loop active feedback nodes and passive reference crystals; and (3) cognitive vs. chronometric interval tests separate sub-second neural integration windows (Pöppel–Varela ~100–3000 ms) from optical lattice atomic clock instability floors (Δν/ν ~ 10⁻¹⁸) compared against nanosecond pulsar timing array (PTA) residual floors.'
    ],
    equations: [
      {
        label: '(B.1)',
        unicodeHtml: 'Bifurcation<sub>FOH</sub>  ≡  ( τ<sub>coh</sub>(Autonomous) ≫ τ<sub>coh</sub>(Passive) )  ∧  ( dS<sub>env</sub>/dt &gt; 0 )',
        caption: 'Quantitative experimental signature distinguishing First Observers from passive thermalizing transducers.',
        plainMeaning: 'An autonomous First Observer sustains correlation persistence far beyond a passive detector of matching mass by continuously exporting entropy.'
      }
    ],
    reproducibilityLedger: [
      { checkpoint: 'A1/A2 Photonic Local Friendliness', formula: 'S_LF violation under η_herald > 2/3', referenceConstants: 'Bong et al. (2020); Proietti et al. (2019)', computedOutput: 'Relational frame indexing required; AOE refuted' },
      { checkpoint: 'A3 FOH Open-Loop Persistence', formula: 'τ_coh(Active) / τ_coh(Passive) vs. dS_env/dt', referenceConstants: 'Schrödinger (1944); Friston (2013) Markov blanket', computedOutput: 'Non-equilibrium cut bifurcation threshold' },
      { checkpoint: 'A4 Cognitive Interval Window', formula: 'Dur(I_now) > 0 ∧ Overlaps(I_ret, I_now)', referenceConstants: 'Varela (1999) ~100–3000 ms; Dainton (2000)', computedOutput: 'Lower integration bound blocks [t, t] slice' },
      { checkpoint: 'A4 Chronometric Cross-Scale Link', formula: 'Optical Lattice Δν/ν ~ 10⁻¹⁸ vs. PTA ~10 ns', referenceConstants: 'Pre-registered null criterion (§40 · Table 8.4)', computedOutput: 'Null confines thickness to local subsystem scale' }
    ]
  },
  {
    letter: 'C',
    title: 'Extended Scholarly Dossier on Excluded Frameworks (§0.2)',
    summary: 'Comparative primary-source notes explaining why Bohmian mechanics (effective subsystem wavefunction ψ_eff), GRW/CSL objective collapse, Neumaier’s thermal interpretation, modal interpretations, and constitutive panpsychism fall outside A1–A4.',
    paragraphs: [
      'As outlined in §0.2, excluding non-perspectival ontologies preserves philosophical exactness rather than asserting dogmatic superiority: (1) De Broglie–Bohm pilot-wave mechanics (Bohm 1952; Bell 1987) installs an absolute global configuration Q(t) ∈ ℝ^{3N}, violating A1’s fundamental non-global premise even when epistemic sub-systems define a conditional effective wavefunction ψ_eff(x, t) = Ψ(x, Y(t)) via macroscopic pointer ignorance; (2) Objective spontaneous collapse theories (Ghirardi, Rimini & Weber 1986; Pearle 1989 CSL; Bassi & Ghirardi 2003) replace movable A3 cuts with an observer-independent stochastic localization field whose collapse rate scales with mass-density ratio m/m_0; (3) Arnold Neumaier’s (2019) thermal interpretation and spectral Modal Interpretations (van Fraassen 1991; Dieks 1989) reconstruct property attribution via objective q-expectations or biorthogonal decompositions rather than situated operational boundaries; and (4) constitutive panpsychism (Strawson 2006; Chalmers 2015; Goff 2019) attributes proto-experience to boundary-less micro-particles lacking A3/A4 operational regulatory autonomy.'
    ],
    equations: []
  },
  {
    letter: 'D',
    title: 'Formal Reproducibility Ledger, Gentzen/Fitch Natural-Deduction Trees & Lean 4 Type Signatures',
    summary: 'Machine-checkable proof skeletons (Gentzen/Fitch natural-deduction derivations), Lean 4 dependent type signatures for ⟨W, R, D(w)⟩, Equiv_inv, Markov blankets, and numerical reproducibility ledger across No-Go Theorem 5.1 and Allen intervals.',
    paragraphs: [
      'To guarantee complete formal transparency and computational auditability alongside our prose derivations in §§34–38, Appendix D presents: (1) Gentzen/Fitch-style natural-deduction proof skeletons for the A1 Archimedean Reductio and A2 Solipsistic Collapse; (2) explicit dependent type declarations compatible with Lean 4 (formalizing varying-domain Kripke frames, Equiv_inv equivalence proofs, Markov-blanket cuts, and Allen interval overlap); and (3) a deterministic reproducibility ledger verifying No-Go Theorem 5.1, Worked Example 5.2, and Worked Example 7.1.'
    ],
    equations: [
      {
        label: '(D.1)',
        unicodeHtml: '[Assume ¬A1: ∃o<sub>g</sub> ∀x Rep(o<sub>g</sub>, x)]  ⊢<sub>RAA</sub>  [∃o′ (o′ ∉ Rep(o<sub>g</sub>, W))]  ⇒  ⊥  ⊢  □(¬∃o<sub>g</sub> ∀x Rep(o<sub>g</sub>, x))',
        caption: 'Gentzen/Fitch natural-deduction discharge for Axiom A1 (Archimedean ω-regress contradiction).',
        plainMeaning: 'Assuming a global unsituated observer derives an inescapable meta-observer missing from its own representation, discharging A1 necessity by reductio.'
      },
      {
        label: '(D.2)',
        unicodeHtml: 'structure ObserverModel (W : Type) where (R : W → W → Prop) (D : W → Type) (H_o : ∀w, D w → Horizon) (Cut : ∀w, D w → SplitTypeI) (S_o : ∀w, D w → ℝ≥0)',
        caption: 'Dependently typed signature (Lean 4 syntax) encoding varying-domain S4 frame ⟨W, R, D(w)⟩, Type I cut, and non-negative functional S_o.',
        plainMeaning: 'Formal type signature unifying context accessibility, world-dependent observer domains, Type I split cuts, and irreversible self-update functionals.'
      }
    ],
    reproducibilityLedger: [
      { checkpoint: 'Theorem 5.1 · Weak Fidelity Witness', formula: 'P(r=m) ≥ 2F−1 ; V_coh ≤ 2√(F(1−F))', referenceConstants: 'F = 0.85, |Φ⁺⟩_SA (Worked Ex. 5.2)', computedOutput: 'P(r=m) ≥ 0.700 ; V_coh ≤ 0.714' },
      { checkpoint: 'Theorem 5.1 · Deterministic Branch Cut', formula: 'r = m ⇒ F = 1.00 ⇒ V_coh = 0', referenceConstants: 'Doplicher–Longo Split M(O₁)⊂N⊂M(O₂)′', computedOutput: 'P(r=m) = 1.000 ; V_coh = 0.000' },
      { checkpoint: 'Theorem 5.1 · Classical Noise Guard', formula: 'Dephased mixture without message encoding', referenceConstants: 'F = 0.50 (Converse-Fallacy Check)', computedOutput: 'V_coh = 0.000 while P(r=m) = 0.000 lower bound' },
      { checkpoint: 'Worked Ex. 7.1 · Allen Thick Present', formula: 'Dur(I_now) > 0 ∧ Overlaps(I_ret, I_now)', referenceConstants: 'I_ret=[-450,120], I_now=[0,320] ms', computedOutput: 'Dur=320 ms ; Overlap=120 ms ; Meets at 320 ms' }
    ]
  }
];

export const SYNTHESE_REFERENCES: SyntheseReference[] = [
  { id: 1, citation: 'Aristotle (c. 350 BCE). De Anima (On the Soul), Book III.2, 425b12–25. Trans. J. A. Smith. Oxford: Clarendon Press.' },
  { id: 2, citation: 'Nāgārjuna (c. 150 CE). Mūlamadhyamakakārikā (Fundamental Verses of the Middle Way). Trans. J. L. Garfield. Oxford: Oxford University Press (1995).' },
  { id: 3, citation: 'Dignāga (c. 480–540 CE). Pramāṇasamuccaya (Compendium of Valid Cognition, Ch. 1: Pratyakṣa & Svasaṃvedana). Trans. M. Hattori. Cambridge, MA: Harvard University Press (1968).' },
  { id: 4, citation: 'Descartes, R. (1641). Meditationes de prima philosophia (Meditations II & VI, AT VII 24–34, 71–90). Paris: Soly.' },
  { id: 5, citation: 'Leibniz, G. W. (1714). Monadologie (§§1–22, 56–62, GP VI 607–623). Trans. N. Rescher. Pittsburgh: University of Pittsburgh Press.' },
  { id: 6, citation: 'Kant, I. (1781/1787). Kritik der reinen Vernunft (Critique of Pure Reason, A33/B49, A98–110, B131–158, A189/B232, A341/B399–B432). Riga: Hartknoch.' },
  { id: 7, citation: 'Allison, H. E. (2004). Kant’s Transcendental Idealism: An Interpretation and Defense (pp. 50–76, 333–356). New Haven: Yale University Press.' },
  { id: 8, citation: 'Strawson, P. F. (1966). The Bounds of Sense: An Essay on Kant’s Critique of Pure Reason. London: Methuen.' },
  { id: 9, citation: 'Fichte, J. G. (1794/95). Grundlage der gesamten Wissenschaftslehre (SW I 91–105). Jena: Gabler.' },
  { id: 10, citation: 'Husserl, E. (1900–1901/1913). Logische Untersuchungen (Vol. II, Inv. V, §§1–14, Hua XIX/1, pp. 352–399). Halle: Niemeyer.' },
  { id: 11, citation: 'Husserl, E. (1913). Ideen zu einer reinen Phänomenologie und phänomenologischen Philosophie I (§57, n. 1, Hua III/1, p. 124). Halle: Niemeyer.' },
  { id: 12, citation: 'Husserl, E. (1931). Méditations cartésiennes / Cartesianische Meditationen (§§49–58, Hua I, pp. 121–165). The Hague: Nijhoff.' },
  { id: 13, citation: 'Husserl, E. (1952). Ideen zur einer reinen Phänomenologie II (Ideas II, §36 Empfindnisse, Hua IV). The Hague: Nijhoff.' },
  { id: 14, citation: 'Husserl, E. (1966). Zur Phänomenologie des inneren Zeitbewusstseins (Hua X, §36) & Analysen zur passiven Synthesis (Hua XI). The Hague: Nijhoff.' },
  { id: 15, citation: 'Husserl, E. (2001). Die Bernauer Manuskripte über das Zeitbewusstsein (1917/18, Hua XXXIII, Nr. 1–6, pp. 3–118). Dordrecht: Kluwer.' },
  { id: 16, citation: 'Sartre, J.-P. (1936/37). La Transcendance de l’Ego (The Transcendence of the Ego, pp. 31–60). Paris: Vrin.' },
  { id: 17, citation: 'Zahavi, D. (1999). Self-Awareness and Alterity: A Phenomenological Investigation (pp. 110–156). Evanston: Northwestern University Press.' },
  { id: 18, citation: 'Heidegger, M. (1927). Sein und Zeit (Being and Time, §§12–18, 65–70, pp. 52–88, 323–368). Tübingen: Niemeyer.' },
  { id: 19, citation: 'Heidegger, M. (1938/1977). “Die Zeit des Weltbildes” (“The Age of the World Picture,” GA 5). Frankfurt: Klostermann.' },
  { id: 20, citation: 'Heidegger, M. (1962/1967). Die Frage nach dem Ding (What Is a Thing?, §§18–20, pp. 65–108). Chicago: Regnery.' },
  { id: 21, citation: 'Heidegger, M. (1987). Zollikoner Seminare (Zollikon Seminars, Ed. M. Boss, pp. 24–40, 134–148). Frankfurt: Klostermann.' },
  { id: 22, citation: 'Merleau-Ponty, M. (1945). Phénoménologie de la perception (pp. 235–281, 419–483). Paris: Gallimard.' },
  { id: 23, citation: 'Merleau-Ponty, M. (1961/1964). L’Œil et l’Esprit (Eye and Mind). Paris: Gallimard.' },
  { id: 24, citation: 'Merleau-Ponty, M. (1964). Le Visible et l’Invisible (Ch. 4: “L’entrelacs – le chiasme,” pp. 130–155). Paris: Gallimard.' },
  { id: 25, citation: 'Irigaray, L. (1984). Éthique de la différence sexuelle (An Ethics of Sexual Difference, Ch. on Merleau-Ponty, pp. 151–184). Paris: Minuit.' },
  { id: 26, citation: 'Butler, J. (2015). Senses of the Subject (Ch. 2: Merleau-Ponty and sexual difference). New York: Fordham University Press.' },
  { id: 27, citation: 'Henry, M. (1963). L’Essence de la manifestation (The Essence of Manifestation, §§29–39, pp. 227–318). Paris: PUF.' },
  { id: 28, citation: 'Henry, M. (2000). Incarnation: Une philosophie de la chair. Paris: Seuil.' },
  { id: 29, citation: 'Levinas, E. (1961). Totalité et Infini (Totality and Infinity, Sec. III, pp. 187–219). The Hague: Nijhoff.' },
  { id: 30, citation: 'Levinas, E. (1974). Autrement qu’être ou au-delà de l’essence (Ch. IV, pp. 99–129). The Hague: Nijhoff.' },
  { id: 31, citation: 'Critchley, S. (1992). The Ethics of Deconstruction: Derrida and Levinas. Oxford: Blackwell.' },
  { id: 32, citation: 'Bernasconi, R. (1988). “The Trace of Levinas in Derrida.” In D. Wood & R. Bernasconi (Eds.), Derrida and Différance, pp. 13–29.' },
  { id: 33, citation: 'Derrida, J. (1967a). La Voix et le Phénomène (Speech and Phenomena, Ch. 5, pp. 60–69). Paris: PUF.' },
  { id: 34, citation: 'Derrida, J. (1967b). L’Écriture et la différence (“Violence et métaphysique,” pp. 117–228 / Eng. 79–153). Paris: Seuil.' },
  { id: 35, citation: 'Derrida, J. (1967c). De la grammatologie (Of Grammatology, pp. 60–73, 141–164). Paris: Minuit.' },
  { id: 36, citation: 'Derrida, J. (2005). Rogues: Two Essays on Reason (pp. 34–41, 108–114). Stanford: Stanford University Press.' },
  { id: 37, citation: 'Foucault, M. (1963). Naissance de la clinique (The Birth of the Clinic, pp. 107–148). Paris: PUF.' },
  { id: 38, citation: 'Foucault, M. (1966). Les Mots et les Choses (The Order of Things, pp. 3–16, 303–343). Paris: Gallimard.' },
  { id: 39, citation: 'Foucault, M. (1975). Surveiller et punir (Discipline and Punish, “Panopticism,” pp. 195–228). Paris: Gallimard.' },
  { id: 40, citation: 'Foucault, M. (2001/2005). L’Herméneutique du sujet (The Hermeneutics of the Subject, Lectures 1981–82). New York: Palgrave Macmillan.' },
  { id: 41, citation: 'Lacan, J. (1966). Écrits (“Mirror Stage,” pp. 93–100; “Subversion of the Subject,” pp. 793–827). Paris: Seuil.' },
  { id: 42, citation: 'Lacan, J. (1973). Le Séminaire, Livre XI: Les quatre concepts fondamentaux (pp. 53–64, 105–119). Paris: Seuil.' },
  { id: 43, citation: 'Deleuze, G. (1968). Différence et Répétition (Ch. 2–4, pp. 70–168, 222–261). Paris: PUF.' },
  { id: 44, citation: 'Deleuze, G. (1988). Le Pli: Leibniz et le baroque (The Fold). Paris: Minuit.' },
  { id: 45, citation: 'Deleuze, G., & Guattari, F. (1991/1994). Qu’est-ce que la philosophie? (What Is Philosophy?, Ch. 5, pp. 129–133). New York: Columbia UP.' },
  { id: 46, citation: 'Nancy, J.-L. (1996). Être singulier pluriel (Being Singular Plural, pp. 1–99). Paris: Galilée.' },
  { id: 47, citation: 'Nancy, J.-L. (2008). Corpus (pp. 17–51). New York: Fordham University Press.' },
  { id: 48, citation: 'Marion, J.-L. (1997). Étant donné: Essai d’une phénoménologie de la donation (§§21–24, pp. 280–342 / Eng. 199–247). Paris: PUF.' },
  { id: 49, citation: 'Marion, J.-L. (2002). In Excess: Studies of Saturated Phenomena. New York: Fordham University Press.' },
  { id: 50, citation: 'Janicaud, D. (1991). Le Tournant théologique de la phénoménologie française (Phenomenology and the “Theological Turn”). Combas: Éclat.' },
  { id: 51, citation: 'Benoist, J. (2001). L’Idée de phénoménologie (Ch. 3–4). Paris: Beauchesne.' },
  { id: 52, citation: 'Wittgenstein, L. (1921). Tractatus Logico-Philosophicus (5.62–5.641). London: Kegan Paul.' },
  { id: 53, citation: 'Sellars, W. (1956). “Empiricism and the Philosophy of Mind.” In Minnesota Studies in the Philosophy of Science, Vol. 1, pp. 253–329.' },
  { id: 54, citation: 'Shoemaker, S. (1968). “Self-Reference and Self-Awareness.” Journal of Philosophy 65(19), 555–567.' },
  { id: 55, citation: 'Perry, J. (1979). “The Problem of the Essential Indexical.” Noûs 13(1), 3–21.' },
  { id: 56, citation: 'Lewis, D. (1979). “Attitudes De Dicto and De Se.” Philosophical Review 88(4), 513–543.' },
  { id: 57, citation: 'Quine, W. V. O. (1951). “Two Dogmas of Empiricism.” Philosophical Review 60(1), 20–43.' },
  { id: 58, citation: 'Reichenbach, H. (1965). The Theory of Relativity and A Priori Knowledge (Relativitätstheorie und Erkenntnis Apriori, 1920). Berkeley: UC Press.' },
  { id: 59, citation: 'Friedman, M. (2001). Dynamics of Reason (pp. 71–92). Stanford: CSLI Publications.' },
  { id: 60, citation: 'Kripke, S. A. (1963). “Semantical Considerations on Modal Logic.” Acta Philosophica Fennica 16, 83–94.' },
  { id: 61, citation: 'Fitting, M., & Mendelsohn, R. L. (1998). First-Order Modal Logic (Varying Domains & Barcan Formulas, Ch. 4–5). Dordrecht: Kluwer.' },
  { id: 62, citation: 'Barad, K. (2007). Meeting the Universe Halfway: Quantum Physics and the Entanglement of Matter and Meaning (pp. 139–175). Durham: Duke UP.' },
  { id: 63, citation: 'Haraway, D. (1988). “Situated Knowledges: The Science Question in Feminism and the Privilege of Partial Perspective.” Feminist Studies 14(3), 575–599.' },
  { id: 64, citation: 'Harding, S. (1991). Whose Science? Whose Knowledge? Thinking from Women’s Lives. Ithaca: Cornell University Press.' },
  { id: 65, citation: 'Bohr, N. (1935). “Can Quantum-Mechanical Description of Physical Reality Be Considered Complete?” Physical Review 48, 696–702.' },
  { id: 66, citation: 'Bohr, N. (1949). “Discussion with Einstein on Epistemological Problems in Atomic Physics.” In Schilpp (Ed.), Albert Einstein: Philosopher-Scientist, pp. 200–241.' },
  { id: 67, citation: 'Folse, H. J. (1985). The Philosophy of Niels Bohr: The Framework of Complementarity. Amsterdam: North-Holland.' },
  { id: 68, citation: 'Faye, J. (1991). Niels Bohr: His Heritage and Legacy (pp. 125–176). Dordrecht: Kluwer.' },
  { id: 69, citation: 'Howard, D. (1994). “What Makes a Classical Concept Classical?” In J. Faye & H. Folse (Eds.), Niels Bohr and Contemporary Philosophy, pp. 201–229.' },
  { id: 70, citation: 'Zinkernagel, H. (2016). “Niels Bohr on the Wave Function and the Classical/Quantum Divide.” Studies in History and Philosophy of Modern Physics 53, 9–19.' },
  { id: 71, citation: 'Von Neumann, J. (1932). Mathematische Grundlagen der Quantenmechanik (Ch. VI, pp. 222–237 / Eng. 347–445). Berlin: Springer.' },
  { id: 72, citation: 'Lüders, G. (1951). “Über die Zustandsänderung durch den Messprozess.” Annalen der Physik 443(5–8), 322–328.' },
  { id: 73, citation: 'London, F., & Bauer, E. (1939). La Théorie de l’observation en mécanique quantique. Paris: Hermann.' },
  { id: 74, citation: 'Wigner, E. P. (1961). “Remarks on the Mind-Body Question.” In I. J. Good (Ed.), The Scientist Speculates, pp. 284–302.' },
  { id: 75, citation: 'Brukner, Č. (2018). “A No-Go Theorem for Observer-Independent Facts.” Entropy 20(5), 350.' },
  { id: 76, citation: 'Frauchiger, D., & Renner, R. (2018). “Quantum Theory Cannot Consistently Describe the Use of Itself.” Nature Communications 9, 3711.' },
  { id: 77, citation: 'Lazarovici, D., & Hubert, M. (2019). “How Quantum Mechanics Can Consistently Describe the Use of Itself.” Scientific Reports 9, 470.' },
  { id: 78, citation: 'Proietti, M., et al. (2019). “Experimental Test of Local Observer Independence.” Science Advances 5(9), eaaw9832.' },
  { id: 79, citation: 'Bong, K.-W., et al. (2020). “A Strong No-Go Theorem on the Wigner’s Friend Paradox.” Nature Physics 16, 1199–1205.' },
  { id: 80, citation: 'Everett, H. III (1957). “‘Relative State’ Formulation of Quantum Mechanics.” Reviews of Modern Physics 29(3), 454–462.' },
  { id: 81, citation: 'Deutsch, D. (1999). “Quantum Theory of Probability and Decisions.” Proceedings of the Royal Society A 455, 3129–3137.' },
  { id: 82, citation: 'Wallace, D. (2012). The Emergent Multiverse: Quantum Theory According to the Everett Interpretation. Oxford: Oxford UP.' },
  { id: 83, citation: 'Sebens, C. T., & Carroll, S. M. (2018). “Self-Locating Uncertainty and the Origin of Probability in Everettian Quantum Mechanics.” British Journal for the Philosophy of Science 69(1), 25–74.' },
  { id: 84, citation: 'Albert, D., & Loewer, B. (1988). “Interpreting the Many Worlds Interpretation.” Synthese 77, 195–213.' },
  { id: 85, citation: 'Wheeler, J. A. (1983). “Law Without Law.” In Quantum Theory and Measurement, Princeton University Press, pp. 182–213.' },
  { id: 86, citation: 'Scully, M. O., & Drühl, K. (1982). “Quantum Eraser: A Proposed Photon Correlation Experiment Concerning Observation and ‘Delayed Choice’.” Physical Review A 25(4), 2208–2213.' },
  { id: 87, citation: 'Kim, Y.-H., Yu, R., Kulik, S. P., Shih, Y., & Scully, M. O. (2000). “Delayed ‘Choice’ Quantum Eraser.” Physical Review Letters 84(1), 1–5.' },
  { id: 88, citation: 'Rovelli, C. (1996). “Relational Quantum Mechanics.” International Journal of Theoretical Physics 35, 1637–1678.' },
  { id: 89, citation: 'Rovelli, C. (2021). Helgoland: Making Sense of the Quantum Revolution (pp. 65–145). New York: Riverhead Books.' },
  { id: 90, citation: 'Bitbol, M. (2007). “Physical Relations or Functional Relations? A Non-Metaphysical Construal of Rovelli’s Relational Quantum Mechanics.” Philosophy of Science archive.' },
  { id: 91, citation: 'Pienaar, J. (2021). “A Quintet of Quandaries: Five No-Go Theorems for Relational Quantum Mechanics.” Foundations of Physics 51, 97.' },
  { id: 92, citation: 'Brukner, Č. (2021). “Qubits Are Not Observers—A No-Go Theorem.” arXiv:2107.03513.' },
  { id: 93, citation: 'Muciño, R., Okon, E., & Sudarsky, D. (2022). “Assessing Relational Quantum Mechanics.” Synthese 200, 399.' },
  { id: 94, citation: 'Di Biagio, A., & Rovelli, C. (2021). “Stable Facts, Relative Facts.” Foundations of Physics 51, 30.' },
  { id: 95, citation: 'Adlam, E., & Rovelli, C. (2023). “Information Is Physical: Cross-Perspective Links in Relational Quantum Mechanics.” Philosophy of Physics 1(1), 1–19.' },
  { id: 96, citation: 'Fuchs, C. A., & Schack, R. (2013). “Quantum-Bayesian Coherence.” Reviews of Modern Physics 85(4), 1693–1715.' },
  { id: 97, citation: 'Fuchs, C. A., & Stacey, B. C. (2019). “QBism: Quantum Theory as a Hero’s Handbook.” In Foundations of Quantum Theory (Varenna Lectures), pp. 133–202.' },
  { id: 98, citation: 'Timpson, C. G. (2008). “Quantum Bayesianism: A Study.” Studies in History and Philosophy of Modern Physics 39(3), 579–609.' },
  { id: 99, citation: 'Zeh, H. D. (1970). “On the Interpretation of Measurement in Quantum Theory.” Foundations of Physics 1(1), 69–76.' },
  { id: 100, citation: 'd’Espagnat, B. (1976). Conceptual Foundations of Quantum Mechanics (2nd ed., Ch. 6: Proper vs. Improper Mixtures). Reading, MA: Benjamin.' },
  { id: 101, citation: 'Bell, J. S. (1990). “Against ‘Measurement’.” Physics World 3(8), 33–40.' },
  { id: 102, citation: 'Zurek, W. H. (2003). “Decoherence, Einselection, and the Quantum Origins of the Classical.” Reviews of Modern Physics 75, 715–775.' },
  { id: 103, citation: 'Griffiths, R. B. (2002). Consistent Quantum Theory (Ch. 10–15, pp. 131–215). Cambridge: Cambridge University Press.' },
  { id: 104, citation: 'Dowker, F., & Kent, A. (1996). “On the Consistent Histories Approach to Quantum Mechanics.” Journal of Statistical Physics 82, 1575–1646.' },
  { id: 105, citation: 'Bassi, A., & Ghirardi, G. (2000). “Decoherent Histories and Realism.” Journal of Statistical Physics 98, 457–494.' },
  { id: 106, citation: 'Cramer, J. G. (1986). “The Transactional Interpretation of Quantum Mechanics.” Reviews of Modern Physics 58(3), 647–687.' },
  { id: 107, citation: 'Maudlin, T. (2011). Quantum Non-Locality and Relativity (3rd ed., Ch. 7, pp. 180–194). Oxford: Wiley-Blackwell.' },
  { id: 108, citation: 'Kastner, R. E. (2012). The Transactional Interpretation of Quantum Mechanics: The Reality of Possibility. Cambridge: Cambridge UP.' },
  { id: 109, citation: 'Price, H. (1996). Time’s Arrow and Archimedes’ Point. Oxford: Oxford University Press.' },
  { id: 110, citation: 'Silberstein, M., Stuckey, W. M., & McDevitt, T. (2018). Beyond the Dynamical Universe (pp. 135–210). Oxford: Oxford University Press.' },
  { id: 111, citation: 'Gell-Mann, M., & Hartle, J. B. (1990). “Quantum Mechanics in the Light of Quantum Cosmology.” In W. H. Zurek (Ed.), Complexity, Entropy and the Physics of Information, pp. 425–458.' },
  { id: 112, citation: 'Schrödinger, E. (1944). What Is Life? The Physical Aspect of the Living Cell (Ch. 6: Order, Disorder and Entropy). Cambridge: Cambridge UP.' },
  { id: 113, citation: 'Friston, K. (2013). “Life as We Know It.” Journal of the Royal Society Interface 10(86), 20130475.' },
  { id: 114, citation: 'Carter, B. (1974). “Large Number Coincidences and the Anthropic Principle in Cosmology.” IAU Symposium 63, pp. 291–298.' },
  { id: 115, citation: 'Bohm, D. (1952). “A Suggested Interpretation of the Quantum Theory in Terms of ‘Hidden’ Variables, I & II.” Physical Review 85(2), 166–193.' },
  { id: 116, citation: 'Bell, J. S. (1987). Speakable and Unspeakable in Quantum Mechanics. Cambridge: Cambridge University Press.' },
  { id: 117, citation: 'Ghirardi, G. C., Rimini, A., & Weber, T. (1986). “Unified Dynamics for Microscopic and Macroscopic Systems.” Physical Review D 34(2), 470–491.' },
  { id: 118, citation: 'Pearle, P. (1989). “Combining Stochastic Dynamical State-Vector Reduction with Spontaneous Localization.” Physical Review A 39(5), 2277–2289.' },
  { id: 119, citation: 'Neumaier, A. (2019). Coherent Quantum Physics: A Reinterpretation of the Tradition. Berlin: De Gruyter.' },
  { id: 120, citation: 'van Fraassen, B. C. (1991). Quantum Mechanics: An Empiricist View. Oxford: Clarendon Press.' },
  { id: 121, citation: 'Dieks, D. (1989). “Resolution of the Measurement Problem Through Decoherence of the Quantum State.” Physics Letters A 142(8–9), 439–446.' },
  { id: 122, citation: 'Strawson, G. (2006). “Realistic Monism: Why Physicalism Entails Panpsychism.” Journal of Consciousness Studies 13(10–11), 3–31.' },
  { id: 123, citation: 'Goff, P. (2019). Galileo’s Error: Foundations for a New Science of Consciousness. New York: Pantheon.' },
  { id: 124, citation: 'Chalmers, D. J. (2015). “Panpsychism and Panprotopsychism.” In T. Alter & Y. Nagasawa (Eds.), Consciousness in the Physical World, Oxford UP, pp. 246–276.' },
  { id: 125, citation: 'Von Foerster, H. (1981). Observing Systems (pp. 258–309). Seaside, CA: Intersystems Publications.' },
  { id: 126, citation: 'Luhmann, N. (1995). Social Systems (Soziale Systeme, pp. 12–58, 255–277). Stanford: Stanford University Press.' },
  { id: 127, citation: 'Spencer-Brown, G. (1969). Laws of Form (pp. 1–16, 56–76). London: Allen & Unwin.' },
  { id: 128, citation: 'Maturana, H. R., & Varela, F. J. (1980). Autopoiesis and Cognition: The Realization of the Living (pp. 73–123). Dordrecht: Reidel.' },
  { id: 129, citation: 'Thompson, E. (2007). Mind in Life: Biology, Phenomenology, and the Sciences of Mind. Cambridge, MA: Harvard University Press.' },
  { id: 130, citation: 'Noë, A. (2004). Action in Perception (pp. 1–34, 75–122). Cambridge, MA: MIT Press.' },
  { id: 131, citation: 'Metzinger, T. (2003). Being No One: The Self-Model Theory of Subjectivity (pp. 163–178, 299–366). Cambridge, MA: MIT Press.' },
  { id: 132, citation: 'Blanke, O., & Metzinger, T. (2009). “Full-Body Illusions and Minimal Phenomenal Selfhood.” Trends in Cognitive Sciences 13(1), 7–13.' },
  { id: 133, citation: 'Dennett, D. C. (1991). Consciousness Explained (pp. 101–138, 412–430) & “Real Patterns,” Journal of Philosophy 88(1), 27–51.' },
  { id: 134, citation: 'Breuer, T. (1995). “The Impossibility of Accurate State Self-Measurements.” Philosophy of Science 62(2), 197–214.' },
  { id: 135, citation: 'Doplicher, S., & Longo, R. (1984). “Standard and Split Inclusions of von Neumann Factors.” Inventiones Mathematicae 75, 493–536.' },
  { id: 136, citation: 'Allen, J. F. (1983). “Maintaining Knowledge about Temporal Intervals.” Communications of the ACM 26(11), 832–843.' },
  { id: 137, citation: 'Dainton, B. (2000). Stream of Consciousness: Unity and Continuity in Conscious Experience (pp. 113–184). London: Routledge.' },
  { id: 138, citation: 'Gallagher, S. (2017). Enactivist Interventions: Rethinking the Mind (pp. 83–106). Oxford: Oxford University Press.' },
  { id: 139, citation: 'Varela, F. J. (1999). “The Specious Present: A Neurophenomenology of Time Consciousness.” In Naturalizing Phenomenology, Stanford UP, pp. 266–314.' },
  { id: 140, citation: 'Ladyman, J., & Ross, D. (2007). Every Thing Must Go: Metaphysics Naturalized (pp. 130–189). Oxford: Oxford University Press.' },
  { id: 141, citation: 'Mac Lane, S. (1998). Categories for the Working Mathematician (2nd ed.). New York: Springer.' },
  { id: 142, citation: 'Awodey, S. (2010). Category Theory (2nd ed.). Oxford: Oxford University Press.' }
];

export const SYNTHESE_INDEX_OF_NAMES: SyntheseIndexEntry[] = [
  { entry: 'Adlam, Emily', sections: '§21, §34' },
  { entry: 'Albert, David & Loewer, Barry', sections: '§19' },
  { entry: 'Allen, James F.', sections: '§37, App. B, App. D' },
  { entry: 'Allison, Henry E.', sections: '§2' },
  { entry: 'Aristotle', sections: '§1' },
  { entry: 'Awodey, Steve', sections: '§38' },
  { entry: 'Barad, Karen', sections: '§15a' },
  { entry: 'Bassi, Angelo & Ghirardi, GianCarlo', sections: '§24, App. C' },
  { entry: 'Bell, John S.', sections: '§21, §23, App. C' },
  { entry: 'Benoist, Jocelyn', sections: '§15' },
  { entry: 'Bernasconi, Robert', sections: '§9' },
  { entry: 'Bitbol, Michel', sections: '§21' },
  { entry: 'Blanke, Olaf', sections: '§39' },
  { entry: 'Bohr, Niels', sections: '§0.1, §1, §15a, §16, §20, §41' },
  { entry: 'Bong, Kok-Wei et al.', sections: '§18, §21, §40, App. B' },
  { entry: 'Breuer, Thomas', sections: '§1 (Case 1.1), §41' },
  { entry: 'Brukner, Časlav', sections: '§18, §21, §34' },
  { entry: 'Butler, Judith', sections: '§7' },
  { entry: 'Carter, Brandon', sections: '§27' },
  { entry: 'Chalmers, David J.', sections: '§0.2, App. C' },
  { entry: 'Cramer, John G.', sections: '§0.2, §21, §25, §41' },
  { entry: 'Critchley, Simon', sections: '§9' },
  { entry: 'd’Espagnat, Bernard', sections: '§23' },
  { entry: 'Dainton, Barry', sections: '§37, §40, App. B' },
  { entry: 'Deleuze, Gilles & Guattari, Félix', sections: '§13, §15a' },
  { entry: 'Dennett, Daniel C.', sections: '§1, §24, §33, §41' },
  { entry: 'Derrida, Jacques', sections: '§1, §10, §15a, §37, §41' },
  { entry: 'Descartes, René', sections: '§1, §2, §6, §32' },
  { entry: 'Deutsch, David', sections: '§19' },
  { entry: 'Dignāga', sections: '§1, §42' },
  { entry: 'Doplicher, Sergio & Longo, Roberto', sections: '§21, §35, App. D' },
  { entry: 'Dowker, Fay & Kent, Adrian', sections: '§24' },
  { entry: 'Everett, Hugh III', sections: '§1, §19, §21, §23' },
  { entry: 'Faye, Jan', sections: '§16' },
  { entry: 'Fitting, Melvin & Mendelsohn, Richard L.', sections: '§1, §37, §42' },
  { entry: 'Folse, Henry J.', sections: '§16' },
  { entry: 'Foucault, Michel', sections: '§1, §11, §15a, §41' },
  { entry: 'Frauchiger, Daniela & Renner, Renato', sections: '§18, §21, §34' },
  { entry: 'Friedman, Michael', sections: '§1, §40, §43' },
  { entry: 'Friston, Karl', sections: '§27, §30, App. B' },
  { entry: 'Fuchs, Christopher A. & Stacey, Blake C.', sections: '§22' },
  { entry: 'Gallagher, Shaun', sections: '§37' },
  { entry: 'Gell-Mann, Murray & Hartle, James B.', sections: '§24, §27, §43' },
  { entry: 'Goff, Philip', sections: '§0.2, App. C' },
  { entry: 'Griffiths, Robert B.', sections: '§24, §33, §42' },
  { entry: 'Haraway, Donna & Harding, Sandra', sections: '§42' },
  { entry: 'Heidegger, Martin', sections: '§1, §6, §8, §14, §41' },
  { entry: 'Henry, Michel', sections: '§1, §8, §29, §36, §42' },
  { entry: 'Howard, Don', sections: '§16' },
  { entry: 'Husserl, Edmund', sections: '§0.1, §1, §3, §4, §5, §10, §21, §34, §37, §38, §39' },
  { entry: 'Irigaray, Luce', sections: '§7' },
  { entry: 'Janicaud, Dominique', sections: '§15' },
  { entry: 'Kant, Immanuel', sections: '§0.1, §1, §2, §13, §15, §16, §32, §34, §41' },
  { entry: 'Kastner, Ruth', sections: '§25' },
  { entry: 'Kim, Yoon-Ho et al. & Scully, Marlan O.', sections: '§20' },
  { entry: 'Kripke, Saul A.', sections: '§1, §42' },
  { entry: 'Lacan, Jacques', sections: '§1, §12, §15a, §35, §41' },
  { entry: 'Ladyman, James & Ross, Don', sections: '§38' },
  { entry: 'Lazarovici, Dustin & Hubert, Mario', sections: '§18' },
  { entry: 'Leibniz, Gottfried Wilhelm', sections: '§1, §5, §13, §34, §37' },
  { entry: 'Levinas, Emmanuel', sections: '§0.2, §9, §10, §41, §42' },
  { entry: 'Lewis, David & Perry, John', sections: '§1' },
  { entry: 'London, Fritz & Bauer, Edmond', sections: '§17' },
  { entry: 'Lüders, Gerhart', sections: '§17' },
  { entry: 'Luhmann, Niklas', sections: '§1, §11, §29, §33, §35, §41' },
  { entry: 'Mac Lane, Saunders', sections: '§38' },
  { entry: 'Marion, Jean-Luc', sections: '§0.2, §15, §15a, §35, §42' },
  { entry: 'Maturana, Humberto R. & Varela, Francisco J.', sections: '§1, §27, §30, §37, §38, §41' },
  { entry: 'Maudlin, Tim', sections: '§25' },
  { entry: 'Merleau-Ponty, Maurice', sections: '§1, §7, §21, §39, §41' },
  { entry: 'Metzinger, Thomas', sections: '§1, §32, §33, §35, §36, §39, §41' },
  { entry: 'Muciño, R., Okon, E. & Sudarsky, D.', sections: '§21' },
  { entry: 'Nāgārjuna', sections: '§1, §21, §42' },
  { entry: 'Nancy, Jean-Luc', sections: '§14, §15a, §21, §34' },
  { entry: 'Neumaier, Arnold', sections: '§0.2, App. C' },
  { entry: 'Noë, Alva', sections: '§1, §31' },
  { entry: 'Omnès, Roland', sections: '§24' },
  { entry: 'Pienaar, Jacques', sections: '§21' },
  { entry: 'Price, Huw & Wharton, Ken', sections: '§26' },
  { entry: 'Proietti, Massimiliano et al.', sections: '§18, App. B' },
  { entry: 'Quine, Willard Van Orman', sections: '§1, §40, §42, Table 8.4' },
  { entry: 'Reichenbach, Hans', sections: '§1' },
  { entry: 'Rovelli, Carlo', sections: '§1, §15a, §21, §34, §38, §41, §43' },
  { entry: 'Sartre, Jean-Paul', sections: '§3' },
  { entry: 'Schack, Rüdiger', sections: '§22' },
  { entry: 'Schrödinger, Erwin', sections: '§27, App. B' },
  { entry: 'Sebens, Charles T. & Carroll, Sean M.', sections: '§19' },
  { entry: 'Sellars, Wilfrid', sections: '§1, §4' },
  { entry: 'Shoemaker, Sydney', sections: '§1, §3' },
  { entry: 'Silberstein, Michael & Stuckey, William M.', sections: '§0.2, §26, §37, §42' },
  { entry: 'Spencer-Brown, George', sections: '§29, §35' },
  { entry: 'Strawson, Peter F.', sections: '§2' },
  { entry: 'Thompson, Evan', sections: '§39' },
  { entry: 'Timpson, Christopher G.', sections: '§22' },
  { entry: 'Von Foerster, Heinz', sections: '§1, §28' },
  { entry: 'Von Neumann, John', sections: '§1, §2, §15a, §17, §18, §34' },
  { entry: 'Wallace, David', sections: '§19' },
  { entry: 'Wheeler, John Archibald', sections: '§20, §27, §37, §42' },
  { entry: 'Wigner, Eugene P.', sections: '§1, §17, §18, §39, §40' },
  { entry: 'Wittgenstein, Ludwig', sections: '§1, §34' },
  { entry: 'Zahavi, Dan', sections: '§3, §4, §8' },
  { entry: 'Zeh, H. Dieter & Zurek, Wojciech H.', sections: '§1, §19, §23, §27, §39, §41' },
  { entry: 'Zinkernagel, Henrik', sections: '§16' }
].map(({ entry, sections }) => ({ entry, sections }));

export const SYNTHESE_INDEX_OF_CONCEPTS: SyntheseIndexEntry[] = [
  { entry: 'Agential Cut (Barad) & Dispositif', sections: '§11, §15a' },
  { entry: 'Allen’s Interval Temporal Logic (Overlaps, Meets)', sections: '§37, App. B, App. D' },
  { entry: 'Archimedean Vicious vs. Benign Regress', sections: '§1, §34, App. D' },
  { entry: 'Argument Map (A1–A4 → SIT)', sections: 'Chapter 7 Intro' },
  { entry: 'Auto-Affection (A4a vs. A4b)', sections: '§8, §36, §42' },
  { entry: 'Autoimmunity (Derrida)', sections: '§10' },
  { entry: 'Autopoiesis & Markov Blanket (μ ⊥ η | B_o)', sections: '§27, §30, §38, §43' },
  { entry: 'Barcan & Converse Barcan Formulas (Blocked)', sections: '§1, §42' },
  { entry: 'Barred Subject ($) & objet petit a', sections: '§12, §15a' },
  { entry: 'Bernau Manuscripts Diagram of Time', sections: '§4, §37, §39' },
  { entry: 'Category Isomorphism & Functors (F_Phen, F_RQM, F_Bio)', sections: '§38, §40' },
  { entry: 'Chiasmic Reversibility & Écart', sections: '§7, §36' },
  { entry: 'Complementarity (Solvay & EPR)', sections: '§16' },
  { entry: 'Constitutive Absence (Paradox Resolved)', sections: '§1 (Theorem 1.1), §43' },
  { entry: 'Cross-Perspective Links (RQM) & Equiv_inv', sections: '§21, §34, §42' },
  { entry: 'Cross-Reference 32-Model Matrix (✓ / ✗ / partial)', sections: '§38 (Table 8.1)' },
  { entry: 'Delayed-Choice Quantum Eraser (Kim / Scully–Drühl)', sections: '§20' },
  { entry: 'Différance & Anti-Instantaneity', sections: '§10, §15a, §37' },
  { entry: 'Dispositif (Panopticon & Clinical Gaze)', sections: '§11' },
  { entry: 'Duhem–Quine Holism & Auxiliary Isolation', sections: '§40, §42, Table 8.4' },
  { entry: 'Eigenbehaviors & Second-Order Cybernetics', sections: '§28' },
  { entry: 'Einfühlung Circularity & Paarung', sections: '§5' },
  { entry: 'Einselection & Quantum Darwinism', sections: '§19, §23' },
  { entry: 'Essential Indexicals & de se Attitudes', sections: '§1, §3' },
  { entry: 'Ethical Infinite Overflow (Levinas)', sections: '§9, §42' },
  { entry: 'Excluded Interpretations (Bohm, GRW/CSL, Panpsychism)', sections: '§0.2, App. C' },
  { entry: 'Fidelity Lemma & No-Go Theorem 5.1', sections: '§21 (Worked Ex. 5.2), App. D' },
  { entry: 'First Observer Hypothesis (FOH) & IGUS', sections: '§20, §27, §39, §40, App. B' },
  { entry: 'Gentzen/Fitch Proof Trees & Lean 4 Signatures', sections: 'App. D' },
  { entry: 'Improper vs. Proper Mixtures & FAPP', sections: '§23' },
  { entry: 'Lüders Projection Rule vs. von Neumann Cut', sections: '§17' },
  { entry: 'Meinhaftigkeit (Mineness)', sections: '§3, §36' },
  { entry: 'Myth of the Given (Sellars)', sections: '§1, §4' },
  { entry: 'No-Go Theorem 5.1 (F > 1/2 vs. r = m)', sections: '§17, §18, §19, §21, §43, App. D' },
  { entry: 'Paradox of Constitutive Absence', sections: '§1 (Theorem 1.1), §43' },
  { entry: 'Paralogisms (First & Third, Kant)', sections: '§2, §17, §34' },
  { entry: 'Participatory Realism vs. Coherence (QBism)', sections: '§22' },
  { entry: 'Phenomenal Transparency vs. Opacity (PSM)', sections: '§32, §33' },
  { entry: 'Quantum Urgleichung (SIC-POVM)', sections: '§22' },
  { entry: 'Real Patterns & Center of Narrative Gravity', sections: '§33' },
  { entry: 'Relativized A Priori (Friedman / Reichenbach)', sections: '§1, §40, §43' },
  { entry: 'Saturated Phenomenon (Marion)', sections: '§15, §35, §42' },
  { entry: 'Sensorimotor Contingencies', sections: '§7, §31' },
  { entry: 'Separating Countermodels (M_~A1..M_~A4)', sections: '§37 (Table 7.2, Fig. 7.2)' },
  { entry: 'Split Property & Type I Factor (Doplicher–Longo)', sections: '§21, §35' },
  { entry: 'Standpoint Epistemology & Śūnyatā Convergence', sections: '§1, §21, §42' },
  { entry: 'Structural Identity Thesis (SIT)', sections: '§38, §39, §40, §43' },
  { entry: 'Thick Living Present (|I_now| > 0)', sections: '§4, §26, §37, §40, App. B' },
  { entry: 'Two-Aspect Kantian Idealism', sections: '§2' },
  { entry: 'Unmarked Exterior Re-Entry Problem', sections: '§29, §35' },
  { entry: 'Urstrom (Pre-Objective Absolute Flow)', sections: '§4' },
  { entry: 'Varying-Domain Modal Logic S4', sections: '§1, §34, §37, §42, App. D' },
  { entry: 'Vorhandenheit from Zuhandenheit (§§69–70)', sections: '§6' },
  { entry: 'Wigner’s Friend & Local Friendliness', sections: '§18, §39, §40, App. B' }
];
