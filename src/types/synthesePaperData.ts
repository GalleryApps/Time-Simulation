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
  number: number; // Parts I–IX mapped as 1..9
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
  volumeLine: 'Scientific Magazine Edition · 40-Shade Ecru-Orange-Magenta-Teal-Pine Apparatus · Synthese Philosophical Essay',
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
      creditRoles: 'Quantum Reference Frames, Effective Field Bounds & Structural Verification'
    }
  ] as SyntheseAuthor[]
};

export const SYNTHESE_ABSTRACT: string[] = [
  'The observer appears twice in modern thought, and the two appearances have never been reconciled. In phenomenology, the observer is the transcendental ego—a condition of possibility for experience that can never itself appear wholly as an object within experience. In quantum mechanics, the observer is a physical system that performs measurements, yet canonical dynamics systematically places the measurement cut outside the unitary evolution it describes. Both traditions converge on a single structural paradox: the observer is simultaneously constitutive of the world and absent from it.',
  'This treatise constructs a rigorous conceptual and deductive genealogy of thirty traditions across thirty-two named observer-frameworks (Sections 2 through 33) spanning transcendental phenomenology, deconstructive and post-structuralist critique, orthodox and relational quantum foundations, and second-order systems or enactive theory. Operating explicitly within varying-domain quantified modal logic S4 (blocking the Barcan Formula) and Friedman’s relativized a priori framework, we prove by numbered reductio derivations that coherent observer-models converge upon a minimal stratified basis of four conditions: Perspectival Immanence (A1), Egalitarian Frame Parity (A2), Operational Demarcation Cut (A3), and Asymmetric Self-Relation generating an extended thick living present (A4). Suspending any single axiom triggers a distinct classical incoherence—Archimedean regress, solipsistic collapse, unbounded indistinction, or zero-width temporal freeze. After diagnosing genuine anomalies (Levinas, Marion, Cramer, Relational Blockworld), we establish the Structural Identity Thesis (SIT) as faithful structure-preserving functors onto an invariant relational signature bridging Husserl, Rovelli, and Maturana–Varela alongside axiom-specific empirical falsification tests resistant to Duhem–Quine holism.'
];

export const SYNTHESE_AXIOM_TABLE: SyntheseAxiomRow[] = [
  {
    code: 'A1',
    name: 'Perspectival Immanence',
    canonicalFormula: '□∀o (Obs(o) → ∃H_o [Situated(o, H_o) ∧ ¬GlobalView(o)])',
    modalAndEpistemicStatus: 'Varying-domain S4 necessity (blocking Barcan); relativized a priori condition of contextual observation',
    reductioOnDenial: 'Vicious Archimedean infinite regress of meta-observers (o₀ ≺ o₁ ≺ o₂ ≺ …)',
    falsificationTrigger: 'Experimental demonstration of observer-independent absolute macro-facts violating Local Friendliness'
  },
  {
    code: 'A2',
    name: 'Egalitarian Frame Parity',
    canonicalFormula: '∀o,o′ (Overlap(o, o′) → [Compat(o, o′) ∧ Equiv_inv(o, o′)])',
    modalAndEpistemicStatus: 'Normative-structural covariance condition (no metaphysical privilege among valid frames)',
    reductioOnDenial: 'Logically incoherent solipsism destroying criteria for shared scientific truth predicates',
    falsificationTrigger: 'Reproducible breakdown of cross-perspective covariance favoring one absolute cosmic observer-frame'
  },
  {
    code: 'A3',
    name: 'Operational Demarcation Cut',
    canonicalFormula: '∀o,x (Discern(o, x) → ∃B_o [Sep(B_o, Inside_o, Ext_o) ∧ Bounded(Inside_o) ∧ UnmarkedWithin(B_o, o)])',
    modalAndEpistemicStatus: 'Relativized finitude constraint grounded in topological Split Property & operative closure',
    reductioOnDenial: 'Unbounded continuum indistinction collapsing discrete memory sigma-algebras Σ_o into void',
    falsificationTrigger: 'Passive non-autonomous substrates sustaining identical long-range coherence autonomy as dissipative units'
  },
  {
    code: 'A4',
    name: 'Asymmetric Self-Relation & Thick Present',
    canonicalFormula: '∀o (TemporalObs(o) → ∃S_o,I_now [S_o ≥ 0 ∧ Asym(S_o) ∧ Dur(I_now) > 0 ∧ Overlaps(Ret_o, I_now) ∧ Meets(I_now, Prot_o)])',
    modalAndEpistemicStatus: 'Pre-reflective de se / auto-affective grounding (A4a) + Allen interval window |I_now| > 0 (A4b)',
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

export const SYNTHESE_HOW_TO_READ: SyntheseReadingTrack[] = [
  {
    audience: 'Philosophers, Phenomenologists & Continental Theorists',
    essentialSections: 'Part I (§§0.1–1) → Part II (§§2–9) → Part III (§§10–15a) → Part VII (§§34–37) → Part IX (§§41–42)',
    entryFocus:
      'Trace how Kant’s Paralogisms, Husserl’s Bernau manuscripts, Henry’s non-temporal auto-affection, and post-structuralist critiques of presence translate without reductionism into S4 modal axioms A1–A4 and Allen interval logic.'
  },
  {
    audience: 'Physicists & Quantum Foundation Researchers',
    essentialSections: 'Part I (§§0.1–1) → §15a → Part IV (§§16–20) → Part V (§§21–27) → Part VII (§§34–37) → Part VIII (§§38–40)',
    entryFocus:
      'Examine how movable Heisenberg/von Neumann cuts, Wigner’s Friend no-go theorems, RQM Cross-Perspective Links, Zurek einselection, and the First Observer Hypothesis map onto A1–A4 and concrete empirical falsification protocols.'
  },
  {
    audience: 'Systems Biologists, Cyberneticians & Cognitive Scientists',
    essentialSections: 'Part I (§§0.1–1) → Part VI (§§28–33) → Part VII (§§34–37) → Part VIII (§§38–40)',
    entryFocus:
      'See how von Foerster’s eigenbehaviors, Luhmann’s unmarked-exterior re-entry, Maturana–Varela’s autopoiesis, Noë’s sensorimotor contingencies, and Metzinger’s transparent self-model embody operational demarcation (A3) and non-reductive structural realism.'
  }
];

export const SYNTHESE_ARGUMENT_MAP = {
  title: 'Part VII Argument Map: Stratified Dependencies Among A1–A4 and the Structural Identity Thesis',
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
    id: 'part-1',
    number: 1,
    kicker: 'Part I · Methodology, Scope, History & Formal Problem (§§0.1–1)',
    title: 'Methodology, Scope, History, and the Paradox of Constitutive Absence',
    epigraph: '“The eye does not see itself within the visual field; yet nothing within the visual field is seen without the vanishing point.” — Synthetic Paraphrase of Kant B131 and Wittgenstein TLP 5.632',
    pullQuote: 'A rigorous genealogy of the observer requires explicit selection criteria, clear exclusion boundaries, and formal modal proofs showing why constitutive absence arises across both philosophy and physics.',
    leadSummary: 'Establishes the treatise’s conceptual-dialectical methodology (§0.1), explicit scope and excluded interpretations (§0.2), historical evolution across five epochs, and quantified modal S4 reductio proof of Constitutive Absence (§1).',
    chapterIntro: [
      'Few concepts in intellectual history are simultaneously as indispensable and as elusive as that of the observer. Across more than two millennia of inquiry, Western philosophy and the natural sciences have repeatedly built explanatory architectures upon the standpoint of a witness—yet whenever inquiry turns around to ask where or who that witness is, the observer slips quietly out of the frame. The historical arc of this problem spans five decisive epochs, each sharpening the same underlying antinomy into clearer logical focus.',
      'In the first epoch—Classical Antiquity, Buddhist Epistemology, and Early Modern Dualism—Aristotle in *De Anima* (III.2, 425b12–25) already marked the reflexive puzzle that perceiving that we see cannot be merely another colored patch among colors; independently, South Asian Madhyamaka and Yogācāra traditions (Nāgārjuna’s *Mūlamadhyamakakārikā* on mutual dependence and Dignāga’s *svasaṃvedana* theory of non-objectifying reflexive awareness) demonstrated that witness and object co-arise relationally without an intrinsic substance-core. In early modern Europe, René Descartes (*Meditations II & VI*) split reality into extended mechanical matter (*res extensa*) and an unextended thinking spectator (*res cogitans*) observing nature as if through an inner theater, while Gottfried Wilhelm Leibniz (*Monadology* §§14, 56–60) countered Cartesianism with perspectival monads mirroring the universe from irreducible vantage points, leaving their coordination to pre-established theological harmony.',
      'The second epoch opened with Immanuel Kant’s Copernican Revolution (1781/1787), which relocated objectivity inside the synthesizing rules of a formal “I think” (transcendental apperception, B131–132) that makes experience possible precisely by refusing to appear as one empirical substance among others—a paradox Johann Gottlieb Fichte sharpened into the infinite regress of self-positing reflection. In the third epoch—Twentieth-Century Phenomenology, Analytic Self-Reference, and Post-Structuralism—Edmund Husserl, Martin Heidegger, Maurice Merleau-Ponty, and Michel Henry deepened Kant’s insight into lived temporality, embodied chiasm, and non-temporal auto-affection (while analytic philosophers from Wittgenstein and Sellars to Perry, Lewis, and Shoemaker exposed the irreducibility of essential indexicals and *de se* attitudes), whereas Jacques Derrida, Michel Foucault, and Jacques Lacan subjected every claim of self-transparent egoic mastery to critique, exposing deferred traces, historical subject-positions, and constitutive remainders.',
      'Meanwhile, a parallel crisis erupted independently inside the fourth epoch—the Quantum Measurement Debate—where Niels Bohr, John von Neumann, Eugene Wigner, Hugh Everett, John Archibald Wheeler, Carlo Rovelli, QBism, Wojciech Zurek, and Thomas Breuer confronted an unmistakable structural fact: canonical physical laws govern uninterrupted unitary evolution, whereas determinate measurement outcomes only attach relative to a movable demarcation boundary (the Heisenberg or von Neumann cut) whose placement cannot itself be totalized inside the state vector. Finally, in the fifth epoch—Second-Order Cybernetics, Systems Biology, and Enactive Cognitive Science—Heinz von Foerster, Niklas Luhmann, Humberto Maturana, Francisco Varela, Alva Noë, Thomas Metzinger, and Daniel Dennett demonstrated that any biological or cognitive observer operates via recursive boundary closure, creating an inescapable epistemic blind spot toward its own founding distinction.'
    ],
    subsections: [
      {
        number: '0.1',
        title: 'Methodology, Genealogical Mode, and Framework Selection Criteria',
        epistemicFocus: 'Conceptual-dialectical genealogy, structural role semantics, rationale for thirty-two sections, and section parity',
        paragraphs: [
          'Before tracing historical texts or stating formal theorems, a philosophy-of-science treatise must state explicitly what kind of genealogy it executes. This study conducts a **conceptual–dialectical logical genealogy** combined with **structural role semantics**, rather than an encyclopedic biography of ideas or a causal sociology of influence. Individual thinkers are reconstructed at the exact inferential joints where their accounts of the observer generate an internal aporia—a logical gap between what the observer makes possible and what the theory allows the observer to be.',
          'Why examine thirty foundational traditions staged across thirty-two numbered sections (§§2–33, because Husserl’s transcendental project undergoes three structurally distinct mutations in Early LI V §3, Late Bernau monad §4, and Intersubjective §5, supplemented by analytical bridge §15a) rather than an arbitrary list of a hundred? Every included position satisfies three joint selection criteria: (1) *Non-eliminative engagement with perspective*—it treats the standpoint of registration, indexical orientation, or distinction-drawing as an explicit theoretical problem; (2) *Formal or categorical specificity*—it introduces a distinct conceptual invariant (such as apperception, *écart*, trace deferral, agential/measurement cut, einselection, or autopoietic closure) that isolates at least one logical facet of the Paradox of Constitutive Absence; and (3) *Cross-disciplinary parity* across the four epistemic poles of modern inquiry: Transcendental Phenomenology (§§2–9), Post-Structuralist Critique (§§10–15), Quantum Foundations (§§16–27), and Systems/Enactive Theory (§§28–33).',
          'To ensure balanced interpretive rigor across every tradition, sections on figures such as Merleau-Ponty (§7), Levinas (§9), Foucault (§11), Lacan (§12), Deleuze (§13), Nancy (§14), Marion (§15), Cramer (§25), Relational Blockworld (§26), and Noë (§31) receive full structural and primary-text analysis matching Kant and Husserl, avoiding any impression of hurried survey.'
        ]
      },
      {
        number: '0.2',
        title: 'Scope, Epistemic Limits, and Excluded Interpretations',
        epistemicFocus: 'Demarcating what A1–A4 explain vs. realist ontologies outside the four-axiom convergence',
        paragraphs: [
          'Intellectual honesty demands clarifying not only what our four-axiom architecture (A1–A4) explains, but also what it intentionally leaves outside its deductive scope. First, our framework does not absorb non-perspectival realist interpretations of quantum mechanics that explicitly abolish observer-relativity by modifying fundamental dynamics or adding global hidden variables. Specifically, three major research programs sit deliberately outside our convergence claim: (i) **De Broglie–Bohm pilot-wave mechanics**, which resolves measurement via deterministic global particle configurations `Q(t) ∈ ℝ^{3N}` steered by a universal guiding wave (violating A1’s no-global-state premise ontologically, even while subsystem *effective wave functions* reintroduce epistemic cuts); (ii) **Objective spontaneous collapse theories** such as GRW (Ghirardi–Rimini–Weber) and Continuous Spontaneous Localization (CSL), which replace movable cuts with stochastic physical flash or mass-density collapse terms independent of observer demarcation; and (iii) **Arnold Neumaier’s Thermal Interpretation** or classical **Modal Interpretations** (van Fraassen, Dieks, Kochen), which reconstruct property attribution via operator q-expectations or spectral biorthogonal decompositions without centering operational closure.',
          'Second, in philosophy of mind, our framework explicitly separates itself from **constitutive panpsychism** (Goff, Strawson, Chalmers). Although the Structural Identity Thesis bridges phenomenology and quantum/biological systems, A3 and A4 rigorously block panpsychism’s combination problem by forbidding interior phenomenal experience in boundary-less micro-particles or passive linear transducers: authentic observerhood presupposes a self-maintaining operational boundary (A3) coupled with irreversible asymmetric self-relation (A4).',
          'Third, within our thirty-two included frameworks themselves, several extreme positions serve as instructive boundary tests or partial anomalies rather than smooth endorsements—most notably Levinas’s infinite ethical asymmetry (§9, exceeding epistemic parity A2 and bounded horizon A3), Marion’s saturated phenomenon (§15, exceeding A3 capacity), Cramer’s bilateral handshake (§25, strained by relativistic foliations), and Silberstein–Stuckey’s adynamical Relational Blockworld (§26, rejecting fundamental temporal asymmetry A4). Documenting these tensions openly strengthens rather than weakens the Structural Identity Thesis.'
        ]
      },
      {
        number: '1',
        title: 'Introduction: Historical Fracture, Varying-Domain S4 Semantics, and Modal Formalization',
        epistemicFocus: 'Varying-domain S4 (blocking Barcan), Friedman relativized a priori, essential indexicals & Sellars guard, and infinite-domain Breuer reductio',
        paragraphs: [
          'This historical convergence reveals why the observer appears twice in modern thought without ever having been unified. In phenomenology, the observer enters as the transcendental condition of possibility for manifestation; in quantum foundations, the observer enters as an interacting subsystem defining a measurement partition; in analytic philosophy of language, the observer enters through **essential indexicals** (`I`, `here`, `now`, Perry 1979; *de se* attitudes, Lewis 1979; Moore’s Paradox and Shoemaker’s *immunity to error through misidentification*, 1968) that resist translation into any complete third-person list of objective coordinates. Across all three domains arises the identical logical barrier—the **Paradox of Constitutive Absence**: either the observer is flattened wholly inside the object domain (whereupon indexical mineness, selectivity, and measurement cuts vanish), or the observer is exiled outside the world (whereupon empirical interaction with physical clocks and living bodies collapses into dualism).',
          'Before stating Logical Schema (1.1), four meta-logical precisions fortify our formal apparatus against classical referee objections. First, **varying-domain modal S4 semantics (`⟨W, R, D⟩`)**: throughout this treatise, `□` is interpreted within *varying-domain quantified modal logic S4* (reflexivity `□p → p` and transitivity `□p → □□p` over coherent dynamically accessible contexts `W`, assigning each context `w ∈ W` a local domain `D(w)` of active observer-structures). We select S4 over S5 because thermodynamic and biological irreversibility makes context accessibility reflexive and transitive without guaranteeing global modal symmetry; critically, varying domains `D(w)` **invalidate the Barcan Formula (`∀x□Fx → □∀xFx`)**, ensuring that asserting `□∀o (Obs(o) → Situated(o))` (*de dicto* necessity across contexts where observers arise) never falsely forces contingent observers to exist necessarily at primordial pre-biotic worlds!',
          'Second, **Friedman’s relativized a priori rather than naive Kantian–Quinean syncretism**: calling A1–A4 “Kantian–Quinean” risks incoherence because Quine (1951) rejected the analytic–synthetic boundary outright. Instead, following **Michael Friedman (2001, *Dynamics of Reason*, pp. 71–92)** and **Hans Reichenbach (1965)**, A1–A4 operate as *constitutive relativized a priori principles*: they are not analytic definitions stipulating the word “observer,” nor low-level empirical generalizations; rather, they form the constitutive logical framework making empirical measurement, intersubjective reference, and temporal judgment coherent—while remaining open to framework revision when faced with decoupled empirical anomalies (§40). Third, **avoiding Sellars’s Myth of the Given (1956)**: our axiom `A4a` (pre-reflective asymmetric self-relation) does *not* claim self-justifying, non-conceptual propositional knowledge; it specifies pre-inferential structural orientation (`de se` indexical asymmetry) embedded inside Fallible causal cuts (`A3`).',
          'Fourth, **explicit satisfaction criteria and multi-field significance**: Logical Schema (1.1) assigns concrete truth conditions across every conjunct (`H_o`, `Compat(o, o′)`, `Sep(B_o, Inside_o, Ext_o)`, and `S_o ≥ 0 ∧ |I_now| > 0`). Resolving this paradox carries direct foundational stakes across five disciplines: (1) *Epistemology and Philosophy of Science*: mediating between a naive God’s-eye realism and arbitrary relativism; (2) *Phenomenology and Philosophy of Mind*: anchoring conscious ipseity and *de se* reference without Cartesian substance or panpsychism; (3) *Quantum Foundations and Philosophy of Time*: unifying Bohr, Everett, RQM, QBism, and Zurek around cut covariance and interval time; (4) *Systems Biology, Cybernetics, and Artificial Intelligence*: separating dissipative self-maintaining First Observers from stateless statistical transducers; and (5) *Ethics and Social Epistemology*: grounding accountability in mutual parity and openness to unassimilable alterity.'
        ],
        equation: {
          label: '(1.1)',
          unicodeHtml: '□<sub>S4</sub>∀o [ Obs(o)  ↔  ( Immanence<sub>A1</sub>(o, H<sub>o</sub>) ∧ Parity<sub>A2</sub>(o, o′) ∧ Demarcation<sub>A3</sub>(B<sub>o</sub>) ∧ SelfRelation<sub>A4</sub>(o, I<sub>now</sub>) ) ]',
          caption: 'Conjunctive varying-domain S4 characterization defining an observer across phenomenology, quantum foundations, and systems theory.',
          plainMeaning: 'In every accessible observational context (varying-domain S4, blocking Barcan existential overreach), functioning as an observer is co-extensive with inhabiting a situated horizon (A1) in covariant parity with peers (A2), bounded by a finite cut (A3), and anchored by asymmetric temporal self-relation (A4).',
          derivationSteps: [
            '1. [A1 Immanence] Obs(o) entails local horizon H_o with non-empty blind spot: ∀o ¬GlobalView(o).',
            '2. [A2 Parity] Overlapping horizons o, o′ preserve transitive covariant concordance Compat(o, o′) ∧ Equiv_inv(o, o′).',
            '3. [A3 Demarcation] Finite separation collar B_o partitions discrete records Inside_o from unmarked exterior Ext_o.',
            '4. [A4 Asymmetry] Irreversible self-relation S_o ≥ 0 sustains an Allen-interval living present Dur(I_now) > 0.'
          ]
        },
        theoremBox: {
          kind: 'Theorem',
          number: '1.1',
          title: 'Paradox of Constitutive Absence (Numbered Reductio Derivation in Varying-Domain S4)',
          statement: 'In any coherent epistemology or physical theory admitting non-trivial contextual variation, no observer o ∈ D(w) can simultaneously appear wholly represented inside its own domain Rep_o(W) while functioning as the global generating condition of Rep_o.',
          proofSteps: [
            '1. [Assumption for Reductio] Suppose ∃o ∈ D(w) [GlobalSelfRep(o) ∧ Constitutes(o, Rep_o(W))], meaning o represents all presuppositions of its own act of representing as one complete object x ∈ Rep_o(W).',
            '2. [Transcendental–Structural Rule, Kant B131 / Von Neumann] ∀y (y ∈ Rep_o(W) → ∃o′ [Standpoint(o′) ∧ Synthesizes(o′, y) ∧ ExternalTo(o′, y)]).',
            '3. [Universal Instantiation on x] Since x ∈ Rep_o(W) encodes the total condition of o, ∃o′ [Synthesizes(o′, x) ∧ ExternalTo(o′, x)].',
            '4. [Disjunctive Case Split] Either (Case 1) o′ = o, or (Case 2) o′ ≠ o.',
            '5. [Case 1 Elimination via Irreflexivity] If o′ = o, then ExternalTo(o, x) contradicts Assumption 1 that x exhaustively includes every condition of o, yielding Include(x, o) ∧ ¬Include(x, o) → ⊥.',
            '6. [Case 2 Elimination via Vicious Regress] If o′ ≠ o, then o′ constitutes a higher unrepresented standpoint outside Rep_o(W), contradicting GlobalSelfRep(o) and generating an infinite regress o ≺ o′ ≺ o″ ≺ … with no base representation.',
            '7. [Conclusion, RAA & S4 Necessitation] By Reductio ad Absurdum within varying-domain S4, □∀o ¬GlobalSelfRep(o): every constitutive observer remains structurally absent as a total object within its own represented field.'
          ],
          sourceNote: 'Synthesizes Kant B131–B158, Wittgenstein TLP 5.632–5.633, Breuer (1995) pp. 201–210, and Luhmann (1995).'
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
            caption: 'Generalized Breuer–Cantor self-measurement limit valid across both finite and infinite-dimensional state spaces.',
            plainMeaning: 'Distinct global states project onto identical internal records inside o’s cut regardless of finite or infinite dimensionality, barring total self-measurement.'
          },
          takeaway: 'Constitutive absence is a scale-invariant diagonal theorem uniting Kant, Tarski, Gödel, and Breuer.'
        }
      }
    ]
  },
  {
    id: 'part-2',
    number: 2,
    kicker: 'Part II · Phenomenological & Transcendental Genealogy (§§2–9)',
    title: 'Eight Transcendental and Phenomenological Conceptions of the Observer',
    epigraph: '“Every attempt to turn the constituting act of consciousness into an object already presupposes a deeper constituting consciousness standing behind the reflection.” — Edmund Husserl, Ideas I / Bernau Manuscripts Synthesis',
    pullQuote: 'From Kant’s formal apperception to Levinas’s ethical trauma, phenomenology uncovers every layer of situated perspective—while revealing exactly where epistemic axioms reach their outer ethical boundary.',
    leadSummary: 'A balanced analytical reconstruction of §§2–9 engaging Kant’s Paralogisms and two-aspect defense, Husserl’s Ideas I §57 n.1 and Bernau diagram, Heidegger §§69–70 and Zollikon, Merleau-Ponty’s écart, Henry’s A4 reconciliation, and Levinas’s ethical limit.',
    chapterIntro: [
      'Phenomenology did not stumble accidentally upon the observer problem; it converted the observer’s withdrawal from the empirical world into its founding methodological principle, the epoché. Yet across two centuries of development, every attempt to pin down what the transcendental observer positively is provoked an internal crisis that reshaped the tradition.',
      'Tracing Sections 2 through 9 reveals an exact architectural escalation: from Kant’s non-substantial logical unity (§2), through Early Husserl’s non-egological stream (§3), Late Husserl’s self-temporalizing monad (§4), and Husserl’s intersubjective community (§5), to Heidegger’s ecstatic care (§6), Merleau-Ponty’s chiasmic body-subject (§7), Michel Henry’s asymmetric auto-affection (§8), and Emmanuel Levinas’s pre-intentional ethical subjection (§9).'
    ],
    subsections: [
      {
        number: '2',
        title: "Kant's Transcendental Apperception",
        epistemicFocus: 'B-Deduction §16, Second Analogy temporal asymmetry, Paralogisms (A348–366), and Allison vs. Strawson',
        paragraphs: [
          'Immanuel Kant’s *Critique of Pure Reason* initiates modern observer theory by sharply severing the transcendental unity of apperception (B131–136, §16: “The *I think* must be able to accompany all my representations”) from the empirical ego of inner sense (B152–158). The empirical ego is a psychological flow of sensations and memories encountered chronologically in inner intuition like any natural object. By contrast, the transcendental “I think” is not an inner substance at all: it is the purely formal functional synthesis `Syn(o, R)`—the rule-governed unification of diverse intuitions `R` under pure categories so that representations belong to one coherent judgment.',
          'In the Transcendental Dialectic’s Paralogisms (A341/B399–B432), Kant dissects the exact logical fallacy that later haunts physics. The First Paralogism of Substantiality (A348–351) warns against mistaking the “logical subject of every judgment” for an enduring metaphysical substance sitting inside nature, while the Third Paralogism of Personality (A361–366) uses an elastic-ball collision analogy to show that numerical identity across time presupposes a continuous formal standpoint rather than an immutable ghostly substrate—anticipating von Neumann’s arbitrary sliding measurement chain (§17). Furthermore, in the **Second Analogy of Experience (A189/B232)**, Kant proves that distinguishing an objective event (a ship sailing downstream) from a merely subjective scanning sequence (looking sequentially across house walls) demands an irreversible rule of causal order, directly prefiguring A4 temporal asymmetry.',
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
        epistemicFocus: 'Logical Investigations V, Ideas I §57 n.1, Sartre (1936/37), Shoemaker immunity, and Zahavi Meinhaftigkeit',
        paragraphs: [
          'In the Fifth Investigation of *Logical Investigations* (1900–1901, Hua XIX/1, §8), the early Edmund Husserl mounted an austere Brentanian–Humean critique of Natorp’s pure ego, declaring himself unable to find any primitive witness hovering above intentional acts. When Husserl added a famous footnote in the 1913 second edition of LI V (alongside *Ideas I* §57, n. 1, Hua III/1, p. 124), announcing he had “since learned to find” the pure ego, traditional historiography—championed forcefully by **Jean-Paul Sartre’s *The Transcendence of the Ego* (1936/37, pp. 31–60)**—accused Husserl of sliding back into an unnecessary Cartesian spectator hovering behind a pre-reflective impersonal stream.',
          'Contemporary scholarship—most decisively **Dan Zahavi (*Self-Awareness and Alterity*, 1999, pp. 138–156)**—demonstrates convincingly that *Ideas I* §57 n. 1 functions as a structural clarification answering Sartre rather than a capitulation to substance dualism. Even in 1900, Husserl never treated consciousness as an anonymous physical heap; rather, he refined the distinction between a *constituted personal character* (which Sartre rightly banishes to worldly transcendence) and *pre-reflective mineness* (*Meinhaftigkeit* / *Jemeinigkeit*)—the exact phenomenological counterpart to **Sydney Shoemaker’s (1968) analytic criterion of “immunity to error through misidentification”** in first-personal self-ascription.',
          'Consider what *Meinhaftigkeit* entails phenomenologically during acute pain or listening to a sustained cello note: prior to any reflective utterance “I am hearing C-sharp,” the lived experience is already given first-personally *for-me*, never encountered as an anonymous third-person event awaiting empirical identification. Early LI V captured bounded intentional horizon (A3) yet left that pre-reflective *de se* anchor (A4) unformalized until 1913.'
        ]
      },
      {
        number: '4',
        title: "Husserl's Transcendental Ego (Late)",
        epistemicFocus: 'Bernau Manuscripts (Hua XXXIII), Passive Synthesis (Hua XI), Abschattungen, and the Urstrom resolution vs. Sellars',
        paragraphs: [
          'In *Ideas I* (1913), *Analyses Concerning Passive and Active Synthesis* (Hua XI), and the *Bernau Manuscripts on Time-Consciousness* (1917–1918, Hua XXXIII), Husserl transforms the formal “I think” into a concrete, self-temporalizing monad inhabiting a **thick living present (*lebendige Gegenwart*)**. Spatial objects manifest exclusively through perspectival adumbrations (*Abschattungen*, horizon A1), while temporal phases unfold across Husserl’s famous two-dimensional Bernau diagram: horizontal progression of new primal impressions (*Urimpressionen* `U_t`) paired with diagonal continuums of primary retentions (`Ret_t(τ)`) and anticipatory protentions (`Prot_t(τ′)`).',
          'Yet a subtle puzzle threatens this architecture: Husserl identifies the deepest stratum of time-constitution as the “absolute functioning flow” (*Urstrom*)—repeatedly termed *pre-temporal* or standing outside objective constituted time (Hua X, §36; Hua XXXIII, Nr. 1–2). How can A4 (requiring non-zero temporal thickness) apply consistently to a pre-temporal *Urstrom*, and does it fall prey to **Wilfrid Sellars’s (1956) “Myth of the Given”**? The solution resolves both objections simultaneously: the *Urstrom* is *pre-objective*, not frozen atemporality—it is the ongoing asymmetric streaming of retention-and-protention *that constitutes* measurable linear clock time (`t₁ < t₂`). And because pre-reflective *Urstrom* polarity functions as non-propositional temporal orientation rather than an infallible epistemic premise justifying propositions, it cleanly evades Sellars’s Myth of the Given while aligning directly with A4.'
        ],
        equation: {
          label: '(2.2)',
          unicodeHtml: 'Now<sub>H</sub>(t)  ≡  ( ⋃<sub>τ&lt;t</sub> Ret<sub>t</sub>(τ) ) ⊕ Urimp(t) ⊕ ( ⋃<sub>τ′&gt;t</sub> Prot<sub>t</sub>(τ′) )   ∧   PreObj(Urstrom) ⊢ Gen(Now<sub>H</sub>)',
          caption: 'Formalization of Husserl’s Bernau time diagram: thick present unifying diagonal retentional tails, Urimpression, and protention.',
          plainMeaning: 'The concrete living present fuses just-past retentions and coming protentions around an active primal impression, generated by pre-objective asymmetric flow.'
        }
      },
      {
        number: '5',
        title: "Husserl's Intersubjective Correction",
        epistemicFocus: 'Fifth Cartesian Meditation, Leib vs. Körper, Paarung against Einfühlung circle, and Einstimmigkeit covariance',
        paragraphs: [
          'To escape transcendental solipsism, Husserl’s *Fifth Cartesian Meditation* (§§49–58, Hua I, pp. 121–165) grounds worldly objectivity in an open plurality of monads standing at distinct zero-points of orientation (*Nullpunkte*), each anchoring an animated lived body (*Leib*) distinct from inert physical extension (*Körper*). Yet attempting to deduce other subjects strictly from inside my solitary “sphere of ownness” (*Eigenheitssphäre*) via analogical pairing (*Paarung* / *Einfühlung*) encounters a classic circularity: recognizing another body *Körper* as an animated peer *Leib* analogous to mine already presupposes a shared inter-bodily norm.',
          'Rather than merely patching a hole, this circularity supplies a rigorous transcendental proof for **A2 (Egalitarian Frame Parity)**: if a solitary ego `i` can perceive the hidden rear profile of a physical cube *as genuinely co-present* solely by positing a counterfactually positioned peer `j` witnessing it, then symmetric cross-perspective concordance (*Einstimmigkeit* / `Compat(P_i, P_j)`) is logically *prior to* private solipsistic closure. Solipsism presupposes the relational parity it pretends to doubt.',
          'Formally, `Compat(P_i, P_j)` in Schema (2.3) designates **covariant observational concordance over overlapping domains**—combining phenomenological perceptual agreement across perspective shifts, logical consistency across shared predicates, and physical co-variation matching Rovelli’s Cross-Perspective Links (§21).'
        ],
        equation: {
          label: '(2.3)',
          unicodeHtml: 'Objective(W)  ↔  ∀i,j,k [ (Compat(P<sub>i</sub>, P<sub>j</sub>) ∧ Compat(P<sub>j</sub>, P<sub>k</sub>)) → CoherentShift(P<sub>i</sub>, P<sub>k</sub>) ]',
          caption: 'Husserlian objectivity as transitive covariant concordance Compat(P_i, P_j) across situated Nullpunkte.',
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
          'Extending this critique in *The Age of the World Picture* (*Die Zeit des Weltbildes*, 1938), *What Is a Thing?* (1935–36, §§18–20), and the *Zollikon Seminars* (1959–69, pp. 24–40, 134–148), Heidegger demonstrates directly that modern mathematical physics turns nature into a standing objectified picture (*Bild*) placed before a representing *subiectum* while systematically concealing Dasein’s ecstatic temporalizing clearing (*Lichtung*) enabling that projection. What Heidegger resists—marking his `partial` entry on formal A2—is translating ontological clearing into symmetric cross-frame covariance axioms bridging ecstatic temporality with quantum cuts.'
        ]
      },
      {
        number: '7',
        title: "Merleau-Ponty's Body-Subject",
        epistemicFocus: 'Husserl Empfindnisse, Eye and Mind visual reversibility, chiasmic écart (A3 & A4), and Irigaray/Butler intercorporeality',
        paragraphs: [
          'Maurice Merleau-Ponty anchors the observer directly in biological flesh (*Phenomenology of Perception*, 1945, pp. 235–281; *Eye and Mind*, 1961; *The Visible and the Invisible*, 1964, Ch. 4, pp. 130–155). Rejecting both empiricist stimulus-response physiology and intellectualist judgment, he shows that the observer is the lived body (*corps vécu*)—an active sensorimotor field whose spatial depth, figure–ground organization, and perceptual constancy co-vary lawfully with kinesthetic posture and intentional motor grip (*intentional arc*).',
          'Developing **Husserl’s *Ideas II* (§36) analysis of *Empfindnisse*** (localized double-sensations), Merleau-Ponty’s *Visible and the Invisible* elevates **chiasmic reversibility** (*réversibilité*) into an ontological principle. When my right hand reaches across to touch my left hand while my left hand palpates a quartz stone, an internal fold opens: the left hand continually flips between *touched physical object* and *touching sentient witness*—and in *Eye and Mind*, a painter’s visual gaze simultaneously *sees* and *is seen within* visible materiality—yet **the two roles never collapse into simultaneous identity**. An irreducible divergence or slippage (**écart**) always preserves a living gap between witnessing act and witnessed flesh.',
          'Crucially, this non-coincident *écart* maps with surgical precision onto our core axioms: chiasmic crossing realizes **A3 (Operational Demarcation Cut)** as a permeable, two-way sensory membrane rather than an impenetrable Cartesian wall, while the unclosable *écart* embodies **A4 (Asymmetric Self-Relation)** in concrete flesh. Responding further to **Luce Irigaray’s and Judith Butler’s** critiques that abstract “Flesh” risks erasing bodily differentiation, reading *écart* through **intercorporeality** and **A2 parity** ensures that shared flesh never flattens concrete historical, morphological, and situated difference into homogeneous sameness.'
        ]
      },
      {
        number: '8',
        title: "Michel Henry's Auto-Affection",
        epistemicFocus: 'Essence of Manifestation & Incarnation, Zahavi critique of acosmic immanence, A4a vs. A4b, and partial A3',
        paragraphs: [
          'Michel Henry’s *The Essence of Manifestation* (1963, §§29–39, pp. 227–318) and later *Incarnation* (*chair* / living flesh, 2000) push phenomenological immanence to its most radical extreme. Against Heidegger’s ecstatic exteriority and Husserl’s intentional self-objectification, Henry proves that consciousness cannot achieve original self-awareness by projecting an image across external temporal distance; any such separation merely repeats Kant’s regress between seeing pole and seen object. Therefore, Henry posits *auto-affection*: an immediate, non-ecstatic, non-distant self-feeling (*pathos* / living ipseity) preceding worldly light.',
          'Two pressing philosophical tensions must be resolved transparently. First, **Henry’s insistence that auto-affection is strictly “non-temporal”**: as established in Theorem 2.1, Henry negates *ecstatic, spatialized objective clock time* (`T_ext`), *not* irreversible asymmetry (`A4a`); indeed, his non-indifferent immanent pressure supplies the pre-chronometric asymmetric engine enabling Husserl’s thick living present (`A4b`). Second, **Dan Zahavi’s (1999) critique and our Table 8.1 audit (`✗` on A2, `partial` on A3)**: by sealing living immanence acosmically from exterior world-mediation, Henry achieves an *internal* self-delimitation (`partial` on A3) while denying structural world-parity (`✗` on A2). Pairing Henry’s `A4a` asymmetry with Merleau-Ponty’s `A3` world-coupling and Husserl’s `A2` covariance resolves Zahavi’s challenge cleanly without sacrificing living ipseity.'
        ],
        theoremBox: {
          kind: 'Philosophical Thesis',
          number: '2.1',
          title: 'Henry’s Non-Ecstatic Grounding & A4 Compatibility Proof',
          statement: 'Self-awareness cannot arise solely from external symmetric representation without regress; Henry’s “non-temporal” auto-affection supplies the asymmetric grounding (A4a) that renders thick living-present synthesis (A4b) non-vacuous.',
          proofSteps: [
            '1. [Premise] Distinguish Objective Clock Time T_ext (homogeneous external intervals) from Generative Asymmetry A4a (non-negative pre-reflective self-coupling S_o ≥ 0).',
            '2. [Henry’s Regress Argument] If ipseity depended upon objectifying across T_ext, recognizing oneself would demand an infinite chain of prior comparators.',
            '3. [Compatibility Inference] Rejecting external T_ext as origin entails A4a (irreversible immanent polarity) rather than negating extended phenomenological thickness |I_now| > 0.',
            '4. [Conclusion] Henry anchors A4’s asymmetric core while marking an explicit acosmic anomaly on external parity (A2) and worldly cut mediation (partial A3).'
          ],
          sourceNote: 'Henry (1963) §§29–39, pp. 227–318; Henry (2000); Zahavi (1999) pp. 110–137.'
        }
      },
      {
        number: '9',
        title: "Levinas's Ethical Subject",
        epistemicFocus: 'Totality & Infinity vs. Otherwise than Being (Saying vs. Said, Diachrony, Substitution), and Critchley/Bernasconi on thematic betrayal',
        paragraphs: [
          'Closing Part II, Emmanuel Levinas executes the sharpest inversion of modern philosophy across his two masterworks: *Totality and Infinity* (1961, pp. 187–219) and *Otherwise than Being, or Beyond Essence* (1974, pp. 99–129). Subjectivity does not begin as an epistemological observer synthesizing objects, nor even as Heideggerian care for its own finitude. Rather, the subject emerges out of elemental *enjoyment* (*jouissance*) only when shattered retroactively in the accusative (“here I am,” *me voici*) by the vulnerable epiphany of the **Face (*visage*) of the Other**—an encounter preceding intentional cognition.',
          'Whereas *Totality and Infinity* still juxtaposed an interior ego against an exterior Face, *Otherwise than Being* deepens the rupture through **Saying (*le Dire*) vs. Said (*le Dit*)**, **diachrony**, and **substitution**: before any thematic proposition (*le Dit*) can fix identities on a synchronous timeline, ethical exposure (*le Dire*) leaves an unassimilable *diachronic* trace that cannot be synchronized inside one observer’s contemporaneous memory (`A4` asymmetry pushed past epistemic comprehension).',
          'A rigorous treatise must NOT force Levinas into the four axioms by verbal sleight of hand; instead, we mark his **explicit structural friction** against both **A2 (`✗`)** and **A3 (`✗`)** in Table 8.1. Whereas A2 mandates symmetric reciprocal translatability (`Compat(o, o′)`), Levinas defines ethics by radical **curvature of intersubjective space** (“I am infinitely more responsible than the Other”); whereas A3 demands a bounded horizon (`Sep(B_o, Inside_o, Ext_o)`), the Infinite *breaches* every border. Crucially, as **Simon Critchley and Robert Bernasconi** observe, Levinas’s own paradox—how philosophical writing (*le Dit*) can bear witness to unobjectifiable ethical exposure (*le Dire*) without betraying it—mirrors **A3’s exact formal predicament** of registering an unmarked exterior inside a finite text: marking the ethical boundary where scientific parity reaches its non-totalizable outer limit.'
        ]
      }
    ]
  },
  {
    id: 'part-3',
    number: 3,
    kicker: 'Part III · Deconstructive Critique & Bridge to Quantum Cuts (§§10–15a)',
    title: 'Six Ruptures of Presence and the Structural Bridge to Quantum Measurement Cuts',
    epigraph: '“The living present springs forth out of its non-identity with itself and out of the possibility of a retentional trace.” — Jacques Derrida, Speech and Phenomena',
    pullQuote: 'Deconstruction does not dissolve physics into wordplay; its six ruptures of the self-transparent ego trace the exact structural logic of non-commutativity, movable measurement cuts, and subsystem remainders.',
    leadSummary: 'Explains why post-structuralist ruptures emerge structurally from phenomenology, deepens §§10–15 (Derrida, Foucault’s Panopticon, Lacan’s $, Real & objet a, Deleuze’s virtual, Nancy’s être-avec, Marion’s saturation anomaly), and argues rigorously in §15a why these ruptures map onto quantum cuts.',
    chapterIntro: [
      'Why does French post-structuralism follow classical phenomenology not merely as a chronological fashion of the 1960s, but as an internal logical necessity? Review Part II carefully: every single phenomenological project up to Merleau-Ponty attempted to rescue one protected inner sanctuary from Constitutive Absence—a punctual self-present “now” (Husserl), an authentic resoluteness (Heidegger), or pure pre-worldly immanence (Henry). Whenever phenomenology posited that self-identical zero-point, an internal contradiction immediately reopened.',
      'Part III traces the six exact structural points where that residual sovereign ego fractures: temporal trace deferral (Derrida §10), historical institutional calibration (Foucault §11), unconscious signifying splitting (Lacan §12), sub-personal virtual synthesis (Deleuze §13), co-original relational exposure (Nancy §14), and conceptual saturation overwhelming finite borders (Marion §15)—before proving explicitly in §15a why every one of those six fractures shares identical relational geometry with quantum measurement cuts.'
    ],
    subsections: [
      {
        number: '10',
        title: "Derrida's Différance",
        epistemicFocus: 'Of Grammatology arche-trace/supplementarity, Speech & Phenomena, Violence & Metaphysics on symmetry, and autoimmunity',
        paragraphs: [
          'Across *Speech and Phenomena* (1967a, Ch. 5, pp. 60–69) and *Of Grammatology* (1967c, pp. 60–73, 141–164), Jacques Derrida dismantles Husserl’s attempt to preserve a solitary inner voice immune to external signs in a pure punctual instant (*Jetztpunkt*). By showing that Husserl’s own *Urimpression* depends constitutively on retention (the trace of an already-absent past), Derrida uncovers **arche-trace** and **supplementarity**: what appears as “originary self-presence” is already inhabited from the inside by non-presence—*différance* (simultaneously spatial differing/spacing and temporal deferring).',
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
        epistemicFocus: 'Archaeology (Las Meninas), Genealogy (Clinic & Panopticon), Late Subjectivation (pli), and immanent critique',
        paragraphs: [
          'Michel Foucault traces the observer across three decisive methodological axes—**Archaeology**, **Genealogy**, and **Late Subjectivation**—demonstrating that the grammatical slot “observer” is never an ahistorical biological constant. In his archaeological masterpiece *The Order of Things* (1966, pp. 3–16, 303–343), Foucault opens with Diego Velázquez’s painting **Las Meninas**: the sovereign king and queen who organize the entire visual perspective occupy an *absent exterior vanishing point* reflected only fleetingly in a distant rear mirror—supplying modernity’s sharpest painterly emblem of Theorem 1.1’s Paradox of Constitutive Absence prior to Kantian “Man.”',
          'Turning to genealogical materiality, concrete **dispositifs** (linking architecture, instruments, classification tables, and power/knowledge norms) actively produce legitimate observers. In *The Birth of the Clinic* (1963, pp. 107–148), the clinical observer emerges solely alongside pathological anatomy, the stethoscope, and hospital statistics separating diagnostic gaze from lesioned flesh. In Bentham’s **Panopticon** (*Discipline and Punish*, 1975, pp. 195–228), radial visibility geometry installs a one-way asymmetric cut separating unseen watchtower from internalized self-surveillance.',
          'Finally, Foucault’s late turn to **subjectivation** (*The Hermeneutics of the Subject*, 1981–82) refutes any caricature that the subject is merely a passive puppet of discourse: by bending external force-relations back upon itself (what Deleuze terms the *fold* / *le pli*), ethical practices of self-formation cultivate reflexive agency inside historical boundaries. Thus Foucault satisfies **A1 (Perspectival Immanence)** without vicious circularity via **stratified immanent critique**: never leaping outside all *dispositifs* into a view from nowhere, critical inquiry exposes and shifts local boundary cuts (`A3`) from one situated practice into another.'
        ]
      },
      {
        number: '12',
        title: "Lacan's Split Subject",
        epistemicFocus: 'Barred $, Imaginary moi vs. Symbolic je, Extimacy, Gaze vs. Eye (Holbein), Real & objet petit a, and Borromean topology',
        paragraphs: [
          'Jacques Lacan’s psychoanalytic topology (*Écrits*, 1966, pp. 75–81, 671–702; *Seminar XI*, 1973, pp. 53–64, 105–119) explains why conscious ego-synthesis can never ground foundational observation. In the **Mirror Stage**, the infant’s **Imaginary ego (*moi*)** mistakes an external unified mirror Gestalt for sovereign mastery over motor fragmentation. By contrast, the speaking subject of the unconscious (**Symbolic subject of enunciation, *je***) is irreducibly **barred ($)**—divided between what it utters in differential signifiers (*énoncé*) and the fading locus from which speech issues (*énonciation*), quilted provisionally via *points de capiton*.',
          'Three core Lacanian topologies refine our framework directly. First, **Extimacy (*extimité*)**: what is most intimately central to the subject stands radically *excluded as an alien exterior*, matching the exact topology of an **A3** demarcation boundary `B_o`. Second, the split between **Eye (*l’œil*) and Gaze (*le regard*)** in *Seminar XI*: analyzing Hans Holbein’s *The Ambassadors*, Lacan notes the anamorphic floating skull visible only from an oblique angle—the spot where the observer’s own unrepresented blind spot stares back from inside the visual field.',
          'Third, the **Real** (that which resists symbolization absolutely and returns as structural impossibility) and **objet petit a** (the unspeculable remainder shed whenever the Symbolic cut divides organism from undifferentiated wholeness), knotted across Imaginary–Symbolic–Real in Lacan’s **Borromean topology**. Does our four-axiom architecture try to *heal* Lacan’s split subject into a unified Cartesian ego? Explicitly **no**: A1–A4 formalize the structural conditions of the **barred speaking subject ($)**, proving why every coherent cut `B_o` generates an unrepresented remainder outside `Inside_o`.'
        ]
      },
      {
        number: '13',
        title: "Deleuze's Fractured Cogito",
        epistemicFocus: 'Three passive syntheses (Habitus, Bergson Memory cone, Future Caesura), nomadic distribution, le pli, and partial observers',
        paragraphs: [
          'In *Difference and Repetition* (1968, pp. 70–128, 222–261), Gilles Deleuze revisits Kant’s fracture between active “I think” and passive empirical “I am,” proving that the empty form of time splits the observer across **three sub-personal passive syntheses**: (1) **Habitus**, organic contraction of successive instants into a biological living present; (2) **Mnemosyne**, a Bergsonian virtual *pure past cone* coexisting with every present phase; and (3) the **Caesura of the Future**, fracturing egoic circularity toward unassimilable novelty. Beneath personal subjectivity operate pre-individual “larval subjects” and *haecceities*.',
          'Furthermore, in *The Fold* (*Le Pli*) and his collaborative masterwork with Félix Guattari, ***What Is Philosophy?*** (1991/1994, Ch. 5, pp. 129–133), Deleuze explicitly introduces **“partial observers” (*observateurs partiels*)** embedded inside physical and biological functions—not anthropomorphic judges, but perspectival ideal sensitivities stationed at singular points of curvature across states of affairs (`A1`). And as Deleuze emphasizes through *folding*, an interior membrane (**A3**) forms solely as an invaginated fold (*pli*) of the outside rather than an isolated mental citadel.',
          'Tracing Deleuze’s Nietzschean–Leibnizian ontology clarifies our `partial` audit entry on **A2**: Deleuze champions **nomadic distribution** (open, non-hierarchical differential intensities across smooth space) against **sedentary distribution** (fixed categorical compartments), arguing on the virtual plane that intensity is “unequal in itself.” Our stratified model harmonizes this cleanly: *virtual intensive asymmetry* drives genesis (`A4a`), whereas **A2 egalitarian parity** constrains *actualized epistemic perspectives* so no actual observer claims sedentary cosmic hierarchy over rival standpoints.'
        ]
      },
      {
        number: '14',
        title: "Nancy's Singular Plural Being",
        epistemicFocus: 'Co-originality of être-avec, com-parution, spacing/Corpus limit, and relational co-constitution in A2',
        paragraphs: [
          'Jean-Luc Nancy’s *Being Singular Plural* (1996, pp. 1–99) and *Corpus* (2008, pp. 17–51) expose an unexamined prejudice shared from Descartes through early Husserl: positing a self-contained solitary observer first (“ego sum”) and only afterward trying to construct empathy, communication, or intersubjectivity. Nancy demonstrates that singularity and plurality are strictly **co-original** (*être-avec*, being-with): an observer never first exists alone and later enters society; singularity appears *solely through co-appearance (*com-parution*)*, exposing a finite outer limit to other singularities simultaneously without dissolving into an undifferentiated collective monolith.',
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
        epistemicFocus: 'Fourfold Kantian inversion (Event, Idol, Flesh, Icon), anamorphosis, l’adonné, and Benoist/Janicaud critique',
        paragraphs: [
          'Jean-Luc Marion completes post-Husserlian phenomenology of givenness in *Being Given* (*Étant donné*, 1997, §§21–24, pp. 199–247) and *In Excess* (2002). Inverting **all four axes of Kant’s Table of Categories**, Marion identifies four distinct archetypes of **saturated phenomena** in which intuitive givenness violently exceeds conceptual synthesis: (1) *Quantity* → the **Event** (unforeseeable historical excess defying total causal summation); (2) *Quality* → the **Idol / dazzling artwork** (exceeding measurable intensity scales); (3) *Relation* → the **Flesh** (absolute auto-affection breaking external comparison); and (4) *Modality* → the **Icon / Face** (irreducible look escaping objectifying gaze).',
          'Through **anamorphosis**, phenomena impose their own axis of visibility before the witness aligns a telescope; the observer survives solely as ***l’adonné*** (“the gifted” receiver)—constituted retroactively as a screen catching what impacts it. Simultaneously, secular critics including **Dominique Janicaud (1991)** and **Jocelyn Benoist (2001)** press the “theological turn” objection, arguing that pure unconditioned givenness slips past ordinary descriptive phenomenology without conceptual criteria.',
          'Philosophical rigor requires acknowledging an **explicit structural contradiction (`✗` on A3 in Table 8.1)** between Marion’s saturation and **A3 (Operational Demarcation Cut)**. A3 specifies that reproducible scientific discernment requires an *ordinary bounded horizon* (`Bounded(Inside_o)`) keeping discrete records intact, whereas saturation *blinds and shatters* `B_o` (`Intuition ≫ BoundaryCapacity_o`). Rather than falsifying A1–A4, Marion maps the exact upper limit where ordinary communicable measurement breaks down—proving negatively why A3’s operational buffering is necessary whenever science operates.'
        ]
      },
      {
        number: '15a',
        title: 'Structural Bridge: Why Post-Structuralist Ruptures Map Onto Quantum Measurement Cuts',
        epistemicFocus: 'Structural role semantics linking non-commutativity, Barad agential cut, dispositif, extimacy, and co-originality to physics',
        paragraphs: [
          'Without an explicit analytical bridge, placing Derrida, Foucault, and Lacan immediately before Bohr and Rovelli risks reading like loose literary juxtaposition. Why should post-structuralist critiques of self-presence exhibit the *exact same relational structure* as quantum measurement cuts? Framed via **structural role semantics**, post-structuralism proved internally over meaning and temporality three invariant constraints that quantum foundations subsequently derived mathematically over Hilbert spaces and causal networks.',
          'First, **Non-Commutativity of Context and Constitutive Remainder (Derrida/Lacan ↔ Bohr/Heisenberg)**: In classical Newtonian kinematics and Cartesian epistemology, probing observable `A` and observable `B` commutes—one assumes an untouched complete world sitting inside a zero-duration instant. Once measurement context participates in producing outcomes (Bohr §16), actualizing one experimental arrangement renders an incompatible conjugate indeterminate—the exact formal mirror of Lacan’s bar (`$`) shedding an unsymbolizable remainder (*objet petit a*, §12) and Derrida’s arche-trace refuting unmediated punctual presence (§10).',
          'Second, **Agential/Dispositif Cuts and Movable Boundaries (Foucault ↔ Von Neumann/Zurek/Barad)**: As philosopher-physicist **Karen Barad (*Meeting the Universe Halfway*, 2007, pp. 139–175)** shows in unifying Foucault with Bohr, an experimental apparatus acts as a material–discursive **agential cut** separating measured object from measuring agency without pre-existing Cartesian boundaries—explaining why von Neumann’s movable chain (§17) matches Foucault’s shifting historical *dispositifs* (§11). Third, **Co-Original Relationality (Nancy/Deleuze ↔ RQM/Wigner)**: Nancy’s proof that singularities co-emerge across interfaces (§14) and Deleuze’s *partial observers* (§13) share the identical relational-pole geometry of Rovelli’s pairwise interactions (§21) and Wigner’s Friend covariance (§18).'
        ]
      }
    ]
  },
  {
    id: 'part-4',
    number: 4,
    kicker: 'Part IV · Orthodox Quantum Foundations (§§16–20)',
    title: 'Orthodox Quantum Foundations: Complementarity, Cuts, Branches, and Participation',
    epigraph: '“No elementary quantum phenomenon is a phenomenon until it is a registered phenomenon.” — John Archibald Wheeler, Law Without Law',
    pullQuote: 'From Bohr’s classical communication at Solvay through von Neumann’s sliding cut to Wigner’s Friend no-go theorems, orthodox quantum mechanics uncovers perspectival finitude inside the laboratory.',
    leadSummary: 'Dedicated examination of the five foundational orthodox quantum frameworks (§§16–20): Bohr’s complementarity & Solvay/EPR (Faye, Howard, Folse, Zinkernagel), von Neumann & Lüders vs. London–Bauer, Local Friendliness parity, Everett’s branching + Sebens–Carroll & decoherence, and Wheeler’s quantum eraser & 5th-axiom test.',
    chapterIntro: [
      'When twentieth-century physics crossed into the atomic domain, it abruptly inherited the exact constitutive-absence dilemma that Kant and Husserl had wrestled with in philosophy—now armed with unitary evolution and probabilistic state updates. To reduce cognitive load and expose the internal evolution of physics itself, we divide the twelve quantum frameworks cleanly across two parts: Orthodox Quantum Foundations (Part IV, §§16–20) wrestling directly with the measurement cut, followed by Relational, Epistemic, and Dynamical Models (Part V, §§21–27) reconstructing quantum theory relationally or dynamically.',
      'Sections 16 through 20 trace how classical pragmatic cuts (Bohr), sliding mathematical partitions (von Neumann), intersubjective contradictions (Wigner’s Friend), universal branching (Everett), and participatory detection (Wheeler) progressively dissolve the illusion of a detached observer outside physics.'
    ],
    subsections: [
      {
        number: '16',
        title: 'Copenhagen (Bohr): Complementarity, Contextual Cuts, and Solvay–EPR',
        epistemicFocus: 'Semantic complementarity vs. Heisenberg disturbance, Folse/Faye/Howard/Zinkernagel, Solvay 1930, and EPR 1935',
        paragraphs: [
          'Reducing Niels Bohr’s Copenhagen framework to a crude spatial boundary between micro-atoms and macro-pointers obscures his epistemological depth. As **Henry Folse (1985), Jan Faye (1991), Don Howard (1994, pp. 201–229), and Henrik Zinkernagel (2016)** emphasize, Bohr breaks sharply with **Werner Heisenberg’s early epistemic “disturbance” picture** (the naive claim that a gamma-ray microscope merely kicks an electron possessing pre-existing sharp position and momentum). For Bohr (1949, pp. 200–241), **complementarity** is a **semantic and transcendental-contextual thesis**: two mutually exclusive experimental setups (a rigid double-slit diaphragm for interference vs. a spring-mounted recoil shutter for path momentum) define incompatible conditions for unambiguous predicate application—echoing Kant’s synthetic conditions of communicability.',
          'Crucially, Bohr’s classical/quantum demarcation is **strictly contextual rather than ontologically fixed**: the identical physical component acting as part of the classical apparatus in one experiment can become the quantized target in another. Under **A3**, the operational cut `B_o` is contextually movable, yet within any single phenomenon one side must stand as an unambiguous classical reference enabling intersubjective communication (`A2` programmatic seed, though classical-instrument asymmetry leaves full A2 covariance and A4 ipseity under-specified).',
          'Nowhere did Bohr hone this contextualism more sharply than in the **1930 Solvay photon-box debate** (turning Einstein’s own general-relativistic gravitational clock redshift against energy–time violation) and his **1935 reply to Einstein–Podolsky–Rosen (EPR)**. Against EPR’s realism criterion, Bohr conceded there is zero mechanical disturbance across spacelike separation, yet proved there exists an irreducible *“influence on the very conditions which define the possible types of predictions regarding the future behavior of the system”*—directly formulating **A1 perspectival immanence** at the birth of entanglement theory.'
        ]
      },
      {
        number: '17',
        title: "Von Neumann's Chain, Lüders's Rule, and Psychophysical Parallelism",
        epistemicFocus: 'Process 1/2, Lüders (1951) vs. von Neumann rank-1 projection, statistical cut covariance, and London–Bauer contrast',
        paragraphs: [
          'In *Mathematical Foundations of Quantum Mechanics* (1932, Ch. VI, pp. 347–445), John von Neumann formalized Bohr’s pragmatic boundary into the duality between continuous unitary evolution (**Process 2**) and discontinuous state reduction (**Process 1**, refined later by **Gerhart Lüders’s 1951 projection rule** `ρ ↦ P_a ρ P_a / Tr(P_a ρ)` so degenerate subspaces preserve coherent internal phase relations rather than collapsing blindly to rank-1 eigenstates). Because couplings across micro-system → detector → photographic plate → optic nerve (`H_S ⊗ H_A ⊗ H_O`) obey linear Process 2 propagation, von Neumann proved that sliding the partition cut along the chain leaves predicted probabilities strictly invariant.',
          'Under **A3 (Operational Demarcation Cut)**, this arbitrary mobility expresses a positive theorem of **frame covariance** (analogous to gauge choice in field theory): precisely because no mystical physical wall separates “quantum nature” from “classical mind,” relocating the demarcation cut preserves empirical statistics inside accessible registers—so long as an actual cut terminates unitary regress (`¬∃c_end → Regress(Process2)`).',
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
          'Eugene Wigner (1961, pp. 284–302) sharpened von Neumann’s chain into an intersubjective crisis: an inner agent **F (Friend)** inside a sealed laboratory registers a definite spin (`↑` or `↓`), whereas external super-observer **W (Wigner)** models `{spin + F}` evolving coherently as `(|↑⟩|F_↑⟩ + |↓⟩|F_↓⟩)/√2`. Contemporary physics has transformed Wigner’s thought experiment into rigorous no-go theorems—tested experimentally at photonic qubit scale (**Proietti et al. 2019**, *Science Advances*; **Bong et al. 2020**, *Nature Physics*).',
          'Crucially, three distinct logical theorems isolate different pressure points: (i) **Časlav Brukner (2018)** combines Bell locality, freedom of choice, universal QM, and observer-independent facts (`Fact(x)`); (ii) **Frauchiger & Renner (2018)** avoid Bell locality altogether by deriving an internal self-referential paradox when agents chain predictions across complementary bases (prompting **Lazarovici & Hubert 2019** to expose how inconsistent fact-exportation triggers the clash); and (iii) **Bong et al. (2020) Local Friendliness** proves a strictly weaker inequality combining *No-Superdeterminism*, *Locality*, and *Absoluteness of Observed Events (AOE)*.',
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
          'Third, contrasting bare Everett with **Albert & Loewer’s (1988) Many-Minds** highlights a decisive tension on **A2 parity** across unequal branch measures (`|c₁|² ≪ |c₂|²`) and leaves **A3/A4** (`partial` in Table 8.1) reliant on emergent decoherent thermodynamics.'
        ]
      },
      {
        number: '20',
        title: "Wheeler's Participatory Universe & Delayed-Choice Erasers",
        epistemicFocus: 'Delayed choice, Scully–Drühl & Kim et al. (2000) quantum eraser, refuting retrocausality, and disproving a 5th axiom',
        paragraphs: [
          'John Archibald Wheeler (1983, pp. 182–213) projected Bohr’s complementarity onto cosmic scales via the **delayed-choice experiment** and his aphorism **“It from Bit.”** Crucially, later laboratory realizations—specifically **Scully & Drühl’s (1982) and Kim et al.’s (2000) Delayed-Choice Quantum Eraser**—prove why Wheeler does NOT require mystical backward-in-time causation: an idler detector choice made after a signal photon hits a screen never alters the *marginal* signal pattern; interference fringes re-emerge *exclusively upon A2 cross-correlated coincidence post-selection* between signal and idler records!',
          'Does Wheeler’s participatory universe prove that our four-axiom schema (`A1–A4`) is incomplete—requiring a **Fifth Axiom** claiming *conscious participation ontologically creates reality*? Logical dissection separates two conflated theses cleanly: (a) **Epistemic–Phenomenal Participancy**—no quantum observable bears a classical value prior to a contextual registration cut (“no phenomenon is a phenomenon until registered”), which is **already completely entailed by A1 (situated context) + A3 (demarcation cut)** without any fifth axiom; and (b) **Strong Ontological Idealism**—the speculative claim that future primate choices retroactively bring primordial cosmology into existence.',
          'While absorbing claim (a) cleanly inside A1 and A3, we reject claim (b) as anthropocentric overreach: autonomous dissipative boundary interactions (§27) realize physical “bit-registrations” billions of years prior to human minds.'
        ]
      }
    ]
  },
  {
    id: 'part-5',
    number: 5,
    kicker: 'Part V · Relational, Epistemic, and Dynamical Quantum Models (§§21–27)',
    title: 'Relational, Epistemic, and Dynamical Quantum Models',
    epigraph: '“Reality is reduced to interaction; an object in itself, isolated from all interaction, has no physical properties.” — Carlo Rovelli, Helgoland',
    pullQuote: 'Relational QM, QBism, Decoherence, Consistent Histories, Transactional Handshakes, Blockworld Constraints, and the First Observer Hypothesis converge on relational finitude—except where blockworld ontologies collide with asymmetric time.',
    leadSummary: 'Dissects the seven relational, epistemic, and dynamical quantum frameworks (§§21–27): Rovelli (Pienaar/Brukner/Bitbol/Nāgārjuna & Cross-Perspective Links), QBism (Urgleichung & Timpson), Decoherence (proper vs. improper mixtures & Bell FAPP), Consistent Histories, Cramer TI (Maudlin/Kastner), RBW (Price/Wharton), and FOH (Schrödinger/Friston Markov blankets).',
    chapterIntro: [
      'Whereas Orthodox foundations wrestled primarily with where to halt von Neumann’s chain inside a single laboratory, the seven research programs in Part V fundamentally reorganize quantum mechanics around **relational correlation, Bayesian agency, environmental superselection, consistent narrative lattices, spacetime handshakes, or non-equilibrium observer autonomy**.',
      'Crucially, this part exposes our strongest allies—Rovelli’s RQM (§21), Zurek’s einselection (§23), and the First Observer Hypothesis (§27)—alongside our sharpest internal physical challenges in Cramer (§25) and Relational Blockworld (§26), demonstrating where A1–A4 hold across physics and where block ontologies explicitly diverge.'
    ],
    subsections: [
      {
        number: '21',
        title: "Rovelli's Relational Quantum Mechanics (1996–2023)",
        epistemicFocus: 'Pienaar & Brukner solipsism critiques, Adlam–Rovelli Cross-Perspective Links, Bitbol neo-Kantianism, Nāgārjuna, and A4 memory',
        paragraphs: [
          'Carlo Rovelli’s Relational Quantum Mechanics (RQM, 1996, pp. 1637–1678) proclaims thorough anti-anthropocentric parity: any physical system `S₁` functions as an “observer” relative to any interacting system `S₂`, and properties/states `|ψ⟩_{S₂|S₁}` exist strictly relative to physical interactions rather than in an absolute God’s-eye space. Strikingly, in *Helgoland* (2021, pp. 121–145), Rovelli himself draws an explicit parallel to **Nāgārjuna’s *Mūlamadhyamakakārikā*** (mutual empty interdependence without self-standing substance), while **Michel Bitbol** interprets RQM in a *neo-Kantian / transcendental* register aligning closely with §1–§5.',
          'Yet recent physics criticism forced a decisive structural maturation validating our thesis. **Jacques Pienaar (2021)**, **Časlav Brukner (2021)**, and **Muciño–Okon–Sudarsky (2022)** argued that if Friend’s facts relative to Electron remain sealed off from Wigner’s facts relative to Friend, bare RQM splinters into fragmented solipsistic islands incapable of shared objectivity. In **Di Biagio & Rovelli (2021)** (decoherence-stabilized “stable facts”) and **Adlam & Rovelli (2023)** (“Information Is Physical”), RQM resolves this by postulating **Cross-Perspective Links**: if A measures Q of S and B measures A’s pointer coherently, their records *must agree covariantly*. That postulate IS literally our **A2 (Egalitarian Frame Parity)**—proving RQM itself required an explicit A2 axiom to avert solipsism!',
          'Finally, how does RQM satisfy **A4 (Asymmetric Self-Relation & Thick Present)** inside fundamental timeless kinematics? Through **irreversible thermodynamic record updates**: for `S₁` to hold a stable relational fact about `S₂`, `S₁`’s physical register must dissipate entropy asymmetrically over a finite interaction interval `|I_now| > 0`, embedding local temporal asymmetry inside relational networks.'
        ]
      },
      {
        number: '22',
        title: 'QBism: Fuchs’s Participatory Realism vs. Schack’s Formal Coherence',
        epistemicFocus: 'de Finetti vs. Quantum Urgleichung (SIC-POVM), Fuchs vs. Schack, and answering Timpson’s explanatory critique',
        paragraphs: [
          'Quantum Bayesianism (QBism) defends **A1** and **A4** first-person agency more uncompromisingly than any rival interpretation, explicitly citing Husserlian phenomenology and William James. Unlike classical Bayesianism (de Finetti, where subjective priors face zero structural constraints beyond classical coherence), QBism treats the Born rule as a **normative empirical addition**—expressed cleanly via the **SIC-POVM *Urgleichung*** (`p(j) = Σ [(d+1) q(i) - 1/d] r(j|i)`), constraining how an agent’s probabilities over distinct experiments harmonize.',
          'Treating QBism as a monolith conceals an important divergence between its co-founders: **Rüdiger Schack** (Caves–Fuchs–Schack) emphasizes an austere epistemic reading of `ρ` as an agent’s internal betting coherence manual, whereas **Christopher Fuchs** (2017; Fuchs & Stacey 2019) advances **“participatory realism,”** arguing that irreducibly personal probabilities disclose an open, pluralistic world forged continually through agentive acts—directly engaging **Christopher Timpson’s (2008)** charge of explanatory solipsism by insisting probabilities govern *a real external world’s active pushback against the agent’s interventions*.',
          'Regarding **A2 (Egalitarian Frame Parity)**: although no “Master Super-Agent” stands above Alice and Bob (`¬∃o_global`), every agent submits to the *identical normative coherence grammar*, allowing peer observers to coordinate shared expectations covariantly (`partial` on physical A2 until embodied interaction cuts A3 are included alongside subjective agency).'
        ]
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
          'Michael Silberstein, William Stuckey, and Mark Timothy McDevitt (*Beyond the Dynamical Universe*, 2018, pp. 135–210) align alongside **Huw Price’s** temporal symmetry and **Ken Wharton’s “all-at-once” Lagrangian ontology** to propose an uncompromising cure for quantum paradoxes: abandon fundamental time-evolution altogether. On **Relational Blockworld (RBW)**, physical reality is an adynamical 4D relational graph governed globally by discrete spinfoam/path-integral constraint extremization across entire spacetime regions spanning emitter, detector, and apparatus boundaries (`A1 + A2 + A3`).',
          'Transparency demands flagging RBW as our **sharpest physical counter-tension against A4 (Asymmetric Self-Relation & Thick Living Present)** (`✗` on fundamental dynamical A4 in Table 8.1). Because RBW treats past, present, and future equally as co-existing geometric relations inside an eternal 4D block, any primordial temporal flow or asymmetry is denied ontologically.',
          'How does our four-axiom framework respond without glossing over the clash? First, we acknowledge explicitly that if fundamental cosmology proves wholly adynamical globally, A4’s directional asymmetry functions as an **emergent macroscopic thermodynamic–phenomenological invariant** rather than a primordial cosmic push. Second, *even inside a 4D block*, any embedded worldtube qualifying as an *observing system* (an IGUS or conscious witness) must physically instantiate asymmetric retention–protention gradients (`|I_now| > 0`, `Ret ≠ Prot`) along its worldline—meaning A4 remains indispensable for *observerhood* even when micro-kinematics is block-symmetric.'
        ]
      },
      {
        number: '27',
        title: 'The First Observer Hypothesis (FOH): Negentropy, Markov Blankets, and IGUS',
        epistemicFocus: 'Schrödinger negentropy, Friston Free Energy/Markov blanket, Gell-Mann–Hartle IGUS, and contrast with anthropic bias',
        paragraphs: [
          'Concluding Part V, the **First Observer Hypothesis (FOH)** resolves physics’ deepest demarcation lacuna: what rigorously separates a **passive physical measuring apparatus** (a silver-halide emulsion, silicon CCD, or Geiger tube) from a **genuine observer**? To keep falsifiability crisp (§40), FOH defines a First Observer jointly as (i) a **concrete dissipative non-equilibrium organizational class**—continuously exporting entropy (**Erwin Schrödinger’s 1944 *What Is Life?* negentropy**) across a self-maintaining statistical boundary (**Karl Friston’s 2013 Free Energy Principle and Markov blanket**) separating internal states from external states—and (ii) the **physical instantiation of A3 + A4**.',
          'Unlike the **Weak Anthropic Principle** (Carter 1974), which merely states a tautological retrospective selection bias tied to carbon-based human physiology, FOH establishes a **substrate-neutral thermodynamic–cybernetic criterion**: any physical system—prokaryotic cell, synthetic active-inference agent, or neural network—that actively defends its operational boundary (`A3`) and updates asymmetric temporal records (`A4`) against thermal equilibrium qualifies as a First Observer.',
          'In cosmology, FOH sharpens **Gell-Mann & Hartle’s (1990) IGUS** (*Information Gathering and Utilizing System*): passive dust grains undergo fleeting improper decoherence erased immediately by ambient noise, whereas a First Observer sustains low-entropy memory records over extended cycles (`|I_now| > 0`)—enabling direct experimental bifurcation tests against passive transducers in §40.'
        ],
        equation: {
          label: '(5.1)',
          unicodeHtml: '∀o [ FirstObserver(o)  ↔  ( OperationalCut<sub>A3</sub>(B<sub>o</sub>) ∧ ActiveNegentropyCycle<sub>A4</sub>(o) ∧ ¬PassiveTransducer(o) ) ]',
          caption: 'Physical-logical criterion distinguishing autonomous dissipative observers from passive scattering detectors.',
          plainMeaning: 'An autonomous First Observer actively maintains its operational boundary and asymmetric memory updates against thermal equilibrium, unlike passive physical detectors.'
        }
      }
    ]
  },
  {
    id: 'part-6',
    number: 6,
    kicker: 'Part VI · Systems Theory, Autopoiesis & Neurophilosophy (§§28–33)',
    title: 'Six Closure Models: Cybernetics, Autopoiesis, Enaction, and Self-Models',
    epigraph: '“Anything said is said by an observer; anything observed is drawn across a distinction that hides the drawer.” — Humberto Maturana & Heinz von Foerster Synthesis',
    pullQuote: 'Second-order cybernetics and biological autopoiesis rediscover Kant’s Paralogism and Bohr’s cut inside living membranes—formalizing operational closure, blind spots, and transparent self-models.',
    leadSummary: 'Deepens §§28–33: formalizing von Foerster’s eigenbehaviors and 2nd-order cuts, Luhmann’s triple system-reference & anti-humanism, Maturana–Varela’s structural coupling vs. cognitive domains, Noë’s sensorimotor boundaries, Metzinger’s transparent PSM, and Dennett’s Real Patterns.',
    chapterIntro: [
      'Independently of Continental phenomenology and Copenhagen disputes, second-order cybernetics, sociological systems theory, autopoietic biology, and neurophilosophy converged on an identical dilemma: how can a physically bounded organism generate a coherent public world without stepping outside its own cellular membrane or cortical processing loop?',
      'Sections 28 through 33 demonstrate that biological self-maintenance, systemic distinction-drawing, skilled bodily contingencies, transparent neural self-modeling, and narrative gravity articulate the exact operational boundary conditions unified in Part VII.'
    ],
    subsections: [
      {
        number: '28',
        title: "Von Foerster's Observing System: Eigenbehaviors and Second-Order Formalism",
        epistemicFocus: 'Formal eigenbehavior fixed points O(O(...x...)) = x* as A3 closure, and 1st-order vs. 2nd-order observation',
        paragraphs: [
          'Heinz von Foerster (*Observing Systems*, 1981, pp. 258–309) shattered first-order classical science by demonstrating via the physiological blind spot of the retina—where “we do not see that we do not see”—that every act of observation introduces an unobservable origin. Crucially, von Foerster replaced passive mirroring of pre-packaged external objects with **recursive eigenbehaviors** (`O(O(…(x)…)) = x*`): stable invariant perceptual objects (`x*`, eigenvalues of cognitive recursion) arise when an organism’s sensorimotor operator `O` acts repeatedly upon its own outputs across a closed operational loop—a precise functional formalization of **A3 (Operational Demarcation)**.',
          'Equally vital is von Foerster’s formal distinction between **First-Order Cybernetics** (the study of observed mechanical systems by an external detached observer `O₀`) and **Second-Order Cybernetics** (the cybernetics of observing systems `O₁(O₀)`, where an observer observes how another system draws distinctions and generates eigenbehaviors). Second-order recursion immediately explains why no finite frame owns ultimate absoluteness (**A2**): every second-order observer exposes the first-order observer’s blind spot solely by installing a new unexamined blind spot at the higher level.'
        ]
      },
      {
        number: '29',
        title: "Luhmann's Systems Theory: Triple System-Reference and Anti-Humanism",
        epistemicFocus: 'Spencer-Brown calculus, biological/psychic/social parity (A2), and reconciling anti-humanism with phenomenology',
        paragraphs: [
          'Niklas Luhmann (*Social Systems*, 1995, pp. 12–58, 255–277) generalizes George Spencer-Brown’s *Laws of Form* (1969, pp. 1–16) into a comprehensive epistemology of distinction: to observe is strictly to draw an asymmetric mark (`Indicate(Inside) | Unmarked(Outside)`). Because an observer cannot simultaneously indicate both sides and the drawing blade of its distinction, the unity of the operational cut serves as the system’s inescapable blind spot—re-entering inside the system solely through subsequent second-order observations.',
          'Crucially, Luhmann models reality across a **triple autopoietic system-reference**: (1) *biological/living systems* (closed via biochemical metabolism), (2) *psychic/conscious systems* (closed via successive thoughts/perceptions), and (3) *social/communicative systems* (closed via recursively linked communications). None of these three operational closures reduces causally to another; they interpenetrate solely through **structural coupling**—illustrating directly how **A2 (Egalitarian Frame Parity)** operates across heterogeneous system-types without privileging neural matter or social text as an ultimate foundation.',
          'How do we reconcile Luhmann’s notorious methodological **anti-humanism** (“only communication can communicate; human beings sit in the environment of social systems”) with Part II’s phenomenology of lived consciousness? Easily once system-levels are separated: Luhmann removes the *anthropocentric sovereign ego* from social theory while explicitly preserving *psychic operational closure* as an autonomous observer domain—though his strict focus on functional coding (`partial` on A4) under-thematizes Henry’s pre-reflective affective *pathos*.'
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
        title: "Maturana and Varela's Autopoiesis",
        epistemicFocus: 'Structural coupling as A2 coordination, non-vicious causal circularity (A1), and cognitive domain vs. environment',
        paragraphs: [
          'Humberto Maturana and Francisco Varela (*Autopoiesis and Cognition*, 1980, pp. 73–123; *The Tree of Knowledge*, 1987) ground **A3** and **A4** directly in living cellular organization. An autopoietic machine is a homeostatic network of component-producing processes that continuously regenerates both the network itself and the physical topological boundary (cell membrane) delimiting it against thermal dissolution.',
          'Three philosophical precisions sharpen their integration into A1–A4. First, **Structural Coupling instantiates A2 Parity**: when two autopoietic units interact recurrently without destroying one another’s closure, their internal structures undergo congruent historical drift (*structural coupling*), generating an objective consensual domain of coordinated behavior without requiring any global external blueprint. Second, regarding **circularity in A1**: critics charge that defining the observer via an operationally closed cell begs the question. Yet *autopoietic circularity is generative causal self-production, not vicious logical tautology*: precisely because biochemical closure establishes an endogenous point of view (`cognitive domain`), the organism enacts situated perspectival immanence (`A1`) non-circularly inside physical matter.',
          'Third, we must preserve Maturana’s strict distinction between **environment** (the external surroundings as described by an independent third-party meta-observer) and **cognitive domain / niche** (strictly the class of interactions capable of triggering non-destructive structural shifts *for the organism itself*). Failing to distinguish those two planes collapses situated immanence (`A1`) back into naive third-person realism.'
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
          'Transparency directly mechanizes **A3’s blind-spot seam** and **A4’s first-personal mineness** inside neural architecture. Does Metzinger’s famous eliminativist slogan—“no such things as selves exist in the world; nobody ever was or had a self”—contradict our non-reductive **Structural Identity Thesis (SIT)**? Not at all: what Metzinger eliminates is *the Cartesian substantial thing-self* (already refuted by Kant’s First Paralogism in §2!), while affirming the real operational existence of first-person **perspectival process structure** (the active transparent PSM-world-model boundary, fully isomorphic to A1–A4).'
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
            '1. [Autopoietic Closure, §§29–30] Discernible records stabilize solely inside a finite demarcation cut B_o separating Inside_o from Ext_o.',
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
    id: 'part-7',
    number: 7,
    kicker: 'Part VII · Argument Map & Fourfold Axiomatic Resolution (§§34–37)',
    title: 'Argument Map, Modal S4 Proofs, Topological Finitude, and Thick Temporal Synthesis',
    epigraph: '“The observer is neither inside the world like a marble in a jar nor outside it like an unmoved deity; to observe is to inhabit a bounded, relationally accountable temporal horizon.”',
    pullQuote: 'Every axiom A1–A4 is proven deductively via statement, constructive derivation, explicit classical reductio, and unified cross-tradition mapping—establishing minimal independence and completeness without hiding proofs in appendices.',
    leadSummary: 'Presents the Argument Map and brings the full modal S4 proof (formerly Appendix A), set-theoretic Anti-Continuum lemma (formerly Appendix B), four separating countermodels (formerly Appendix C), and Allen interval temporal logic directly into main-text §§34–37.',
    chapterIntro: [
      'Having examined thirty-two distinct observer frameworks across Parts II through VI, we now gather the entire logical weight of the monograph directly inside the main text rather than deferring foundational demonstrations to back-matter appendices. Every section below (§§34–37) adheres to a strict four-part architectural discipline for each axiom: **(a) Canonical Statement, (b) Constructive Derivation, (c) Formal Numbered Reductio of Denial, and (d) Cross-Tradition Mapping**.',
      'Before entering §34, review the five-stage **Argument Map**: (1) **A1 (Perspectival Immanence)** eliminates any global view from nowhere via the S4 Vicious Archimedean Regress Theorem; (2) **A2 (Egalitarian Frame Parity)** bridges overlapping local horizons without solipsism; (3) **A3 (Operational Demarcation Cut)** secures discrete memory against continuum washout via the Topological Anti-Continuum Lemma while solving Spencer-Brown’s unmarked-exterior problem; (4) **A4 (Asymmetric Self-Relation)** grounds first-personal mineness and Allen-interval temporal thickness (`|I| > 0`), culminating in (5) independence/completeness verification across four countermodels.'
    ],
    subsections: [
      {
        number: '34',
        title: 'Axioms A1 & A2: S4 Modal Proof of Immanence and Egalitarian Frame Parity',
        epistemicFocus: 'Formal S4 derivation (formerly Appendix A), vicious vs. benign regress, incoherent solipsism vs. skepticism, and normative parity',
        paragraphs: [
          '### Axiom A1 · Perspectival Immanence\n**(a) Canonical Statement:** Within quantified modal logic S4 (`□p → p`, `□p → □□p`), every legitimate act of observation necessarily occurs from within a situated local horizon `H_o` possessing a non-empty external blind spot: `□∀o (Obs(o) → ∃H_o [Situated(o, H_o) ∧ ¬TotalView(o)])`.',
          '**(b) Constructive Derivation (S4 Contextual Non-Triviality):** Let ⟨W, R⟩ be an S4 Kripke frame of dynamically accessible observational contexts `u ∈ W`. Because contextual measurement bases fail to commute globally (Bohr §16, Wigner §18) and spatialized horizons exhibit curvature/adumbration (Husserl §5), no single global valuation sheet `v_global` assigns simultaneous, mutually consistent truth-values across every `u ∈ W`. Every coherent observer `o` therefore projects through a situated local context `H_o`.',
          '**(c) Formal Numbered Reductio — Why Archimedean Regress Is Strictly Vicious (Against Holistic Benign Regress):** Critics occasionally object that infinite epistemic regresses can be benign (as in coherentist justification holism, where propositions mutually reinforce each other around a closed web without needing a Cartesian foundation). Why is denying **A1** *viciously* incoherent rather than benignly holistic? Because coherentist holism moves *laterally across peers at equal ontological level*, whereas positing an unsituated global observer `o_global` attempts to capture **the entire totality `W` including its own act of capturing** in one hierarchical step—forcing strict irreflexive level ascent (`o₀ ≺ o₁ ≺ o₂ ≺ …`) where no finite object-representation can ever stabilize unless terminated externally. Formally: `(1) Assume ¬A1: ∃o_global ∀x Rep(o_global, x); (2) Synthesis Rule: ∀o [Rep(o, W) → ∃o′ Prior(o′, o) ∧ o′ ∉ Rep(o, W)]; (3) By Universal Instantiation: ∃o′ ∈ W such that o′ ∉ Rep(o_global, W), contradicting (1); (4) ⊢ A1 by RAA.`',
          '**(d) Mapping to Unified Frameworks:** Unifies Kant’s anti-substantialist apperception (§2), Heidegger’s thrownness (§6), Foucault’s immanent *dispositif* (§11), Wigner’s contextual non-absoluteness (§18), QBism’s interior agent (§22), and Maturana’s endogenous niche (§30).',
          '### Axiom A2 · Egalitarian Frame Parity\n**(a) Canonical Statement:** For any two situated observers whose observational horizons overlap (`Overlap(o, o′)`), invariant physical and epistemic predicates transform symmetrically and transitively without privileging any solitary ego or master frame: `∀o,o′,o″ [(Overlap(o, o′) ∧ Overlap(o′, o″)) → (Compat(o, o′) ∧ Equiv_inv(o, o″))]`.',
          '**(b) Clarifying Normative/Structural vs. Empirical Symmetry:** Does A2 absurdly assert that a human infant, an insect, and an atomic clock have *actual equal empirical access* or identical sensory precision? Strictly **no**. Individual observers exhibit radically asymmetric computational bandwidths and material instruments. Rather, **A2 is a normative–structural covariance principle** (exactly like Lorentz covariance in relativity or Adlam–Rovelli Cross-Perspective Links in §21): truth-predicates permit **no built-in metaphysical aristocracy** making one valid frame’s local facts more “cosmically real” than another’s.',
          '**(c) Formal Numbered Reductio — Why Solipsistic Collapse Is Logically Incoherent (Not Mere Skepticism):** Standard Cartesian skepticism doubts *whether* external peers exist while leaving first-person language coherent; denying **A2** inside an already situated plurality (`A1 ∧ ¬A2`) destroys the very *logical possibility of objective truth predicates*. Formally: `(1) Assume A1 ∧ ¬A2: ∃o* ∀o≠o* Privileged(o*) ∧ ¬Compat(o*, o); (2) Objectivity Rule (Husserl §5 / Wittgenstein Private Language / RQM §21): Objective(p) ↔ ∃Rule∀o′ [Valid(o′) → ConvergeUnderShift(o*, o′, p)]; (3) Under ¬A2, cross-frame rule convergence collapses, reducing “objective fact p” to an uncheckable private stipulation (`Objective(p) ∧ ¬Objective(p) → ⊥`); (4) ⊢ A2 by Modus Tollens and RAA.`',
          '**(d) Mapping to Unified Frameworks:** Unifies Leibniz/Husserl’s *Einstimmigkeit* (§5), Nancy’s *être-avec* (§14), Extended Wigner’s Friend covariance (§18), Rovelli’s Cross-Perspective Links (§21), Consistent Histories compatibility (§24), Luhmann’s cross-system parity (§29), and structural coupling (§30).'
        ],
        equation: {
          label: '(7.1)',
          unicodeHtml: 'ContextualObstruction ∧ [ ∀o,o′ (Overlap(o, o′) → Equiv<sub>inv</sub>(o, o′)) ]   ⊢<sub>S4</sub>   □( ¬∃o<sub>global</sub>  ∧  ObjectiveParity )',
          caption: 'Combined S4 modal deduction uniting A1 (impossibility of global view) with A2 (invariant parity).',
          plainMeaning: 'Non-trivial contextual structure rules out an unsituated global observer while covariant cross-frame equivalence preserves objective truth.'
        }
      },
      {
        number: '35',
        title: 'Axiom A3: Topological Anti-Continuum Lemma and the Unmarked Exterior',
        epistemicFocus: 'Formal set-theoretic/topological finitude (formerly Appendix B), unbounded indistinction reductio, and solving the unmarked exterior problem',
        paragraphs: [
          '**(a) Canonical Statement:** Any observer capable of registering finite, reproducible distinctions (`Discern(o, x)`) necessarily maintains a finite operational boundary `B_o` partitioning a bounded accessible interior `Inside_o` from an exterior `Ext_o` that remains unmarked directly inside the act of observation: `∀o,x [Discern(o, x) → ∃B_o (Sep(B_o, Inside_o, Ext_o) ∧ FiniteCap(Inside_o) ∧ ¬ObjWithin(B_o, Inside_o))]`.',
          '**(b) Constructive Derivation (Set-Theoretic / Topological Anti-Continuum Lemma):** Consider a continuous physical manifold or field topology `(X, τ)` equipped with no discrete finite separation collar (`Split Property` of Doplicher–Longo 1984 translated into topological epistemology). To sustain stable memory, an observer requires a **non-trivial Boolean sigma-algebra `Σ_o ⊊ P(X)`** of mutually distinguishable, thermally isolated record states `{r₁, …, r_n}` resistant to instantaneous diffusion across infinite exterior correlations. Topologically, a separation buffer `B_o` surrounding open neighborhood `U_o` ensures compact local closure (`Cl(U_o) ⊂ V_o`) isolating internal state records `Σ_o` from unbounded global entanglement.',
          '**(c) Formal Numbered Reductio of Unbounded Indistinction:** `(1) Assume A1 ∧ A2 ∧ ¬A3: ∃o [Discern(o, x) ∧ ¬∃B_o Sep(B_o, Inside_o, Ext_o)]; (2) Topological Continuum Rule: Removing every separation collar forces Inside_o = Continuum(X), where every finite perturbation immediately correlates globally with infinitely many degrees of freedom (Zero Split Property); (3) Sigma-Algebra Collapse: Every putative internal distinction `r_k` blurs inseparably into its complement `¬r_k` (`∀x,y Indistinguishable_o(x, y)`), yielding `Discern(o, x) ∧ ¬Discern(o, x) → ⊥`; (4) ⊢ A3 by RAA.`',
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
        title: 'Axiom A4: Asymmetric Self-Relation and Temporal Irreversibility',
        epistemicFocus: 'Formalizing asymmetry vs. symmetric translation invariance, numbered shift reductio, and Henry/Metzinger unification',
        paragraphs: [
          '**(a) Canonical Statement:** Every conscious or autonomously self-maintaining observer anchors its bounded perspective through a strictly non-negative, irreversible internal self-relation `S_o` breaking neutral coordinate-shift symmetry: `∀o [Exp(o) → ∃S_o (NonNeg(S_o) ∧ AsymSelfRel(o, S_o) ∧ ¬ShiftSymInv(S_o))]`.',
          '**(b) Constructive Derivation (Why Asymmetry Is Mandatory Rather Than Symmetry):** Suppose one attempts to model self-awareness purely via a symmetric spatial or mathematical offset operator `T_c(t) = t + c` along an undirected axis (`T_c⁻¹ = T_{-c}`). Under pure translation symmetry, forward (+c) and backward (−c) directions are structurally indistinguishable, and no internal boundary separates living self-presence (`S_o ≥ 0`) from external null indifference (`S_o = 0`). Formally analogous to the Tomita–Takesaki positive modular cone or irreversible entropy export in dissipative autopoiesis, genuine first-personal ipseity presupposes a **pre-reflective asymmetric gradient** (`A4a`): the observer’s living self-feeling cannot invert sign into “negative non-self-experience” while functioning, establishing an intrinsic temporal arrow from retained past toward anticipated future.',
          '**(c) Formal Numbered Reductio of Symmetric Shift Indifference:** `(1) Assume A1..A3 ∧ ¬A4: An observer sustains bounded cut B_o purely under full symmetric coordinate translation invariance (ShiftSymInv(S_o) ∧ Rev(Past, Future)); (2) Criterion of Indexical Mineness (Husserl §3, Henry §8): Mineness(o) → Asymmetry(LivingCore_o, Ext_o) ∧ ¬Interchangeable(Retention, Protention); (3) Symmetry Elimination: Under full coordinate symmetry, no intrinsic rule distinguishes active self-affection from passive mirrored exterior (`Mineness(o) ∧ ¬Mineness(o) → ⊥`); (4) ⊢ A4 by RAA.`',
          '**(d) Mapping to Unified Frameworks:** Unifies Early/Late Husserl’s *Meinhaftigkeit* & *Urstrom* (§§3–4), Merleau-Ponty’s non-coincident *écart* (§7), Henry’s auto-affection (§8), QBism’s interior agent (§22), RQM’s irreversible memory updates (§21), First Observer active negentropy (§27), and Metzinger’s active PSM (§32).'
        ],
        equation: {
          label: '(7.3)',
          unicodeHtml: '∀o [ SelfAcquainted(o)  →  ∃S<sub>o</sub> ( S<sub>o</sub> ≥ 0 ∧ Irreversible(S<sub>o</sub>) ∧ ¬(T<sub>c</sub>(S<sub>o</sub>) ≡ T<sub>-c</sub>(S<sub>o</sub>)) ) ]',
          caption: 'Asymmetric self-relation schema: breaking neutral coordinate symmetry anchors directed temporal ipseity.',
          plainMeaning: 'First-personal self-awareness cannot emerge from undirected symmetric translations; it entails an irreversible non-negative self-relation.'
        }
      },
      {
        number: '37',
        title: 'Thick Temporal Synthesis via Allen’s Interval Logic, Axiom Independence, and Completeness',
        epistemicFocus: 'Allen interval temporal logic (|I| > 0), Bernau/Dainton/Gallagher/Varela synthesis, and 4 countermodels proving minimality',
        paragraphs: [
          'Combining **A3 (Bounded Capacity)** and **A4 (Asymmetric Self-Relation)** yields a rigorous temporal theorem uniting Husserl’s **Bernau Manuscripts** (Hua XXXIII) with contemporary philosophy of time consciousness—specifically **Barry Dainton’s (2000, pp. 113–184)** extensional specious-present realism, **Shaun Gallagher’s (2017)** enactive protentional dynamics, and **Francisco Varela’s (1999)** neurophenomenological integration windows (`~0.1–3 s`).',
          'To formalize why zero-width instants are excluded without hand-waving, we employ **James Allen’s (1983) Interval Temporal Logic** over closed intervals `I = [t⁻, t⁺]` with duration `Dur(I) = t⁺ − t⁻`. Let temporal judgment of succession (`Change(A → B)`) require co-holding an earlier phase interval `I_ret` (retention of A) and an emergent anticipation interval `I_prot` (protention of B) across the active living present `I_now` via Allen’s core topological relations **`Overlaps(I_ret, I_now)`** and **`Meets(I_now, I_prot)`**. Crucially, in Allen’s interval calculus, both `Overlaps` and strict `Meets` require strictly **positive interval length (`Dur(I) > 0`)**: degenerate zero-width point-intervals `[t, t]` possess zero interior overlap and collapse distinction into static adjacency.',
          '### Formal Numbered Reductio: Zero-Width Temporal Freeze\n`(1) Assume Zero-Width Present: I_now = [t₀, t₀] with Dur(I_now) = 0; (2) Judgment Rule (Kant Threefold Synthesis / Husserl Bernau / Allen Logic): DiscernChange(o, A→B) → ∃I_now [Overlaps(I_ret(A), I_now) ∧ Meets(I_now, I_prot(B))]; (3) Degenerate Collapse: On [t₀, t₀], Overlaps(I_ret, [t₀, t₀]) = ∅; only a single static configuration at t₀ exists, eliminating relational retention and expectation; (4) Contradiction: DiscernChange(o) ∧ ¬DiscernChange(o) → ⊥; (5) Conclusion (⊢ Dur(I_now) > 0): Every change-perceiving observer inhabits an extended thick living present.`',
          '### Independence, Stratified Dependence, and Completeness (“Why Four Axioms?”)\nDo A1–A4 secretly collapse into fewer axioms, or miss a fifth? We answer both rigorously via four **separating countermodels (formerly Appendix C)**: (1) Model `M_~A1` (Newtonian Universal Sensor) satisfies global frame coherence without A1 yet triggers Archimedean regress; (2) Model `M_~A2` (Solipsistic Leibnizian Bubble) satisfies A1, A3, and A4 internal duration while denying A2 cross-frame parity; (3) Model `M_~A3` (Cut-Free Quantum Continuum) satisfies universal covariant parity A1+A2 without finite separation boundary A3, collapsing into indistinction; and (4) Model `M_~A4` (Static Block Detector / RBW) satisfies A1+A2+A3 spatial boundaries without asymmetric A4 temporal ipseity. Notice the exact logical topology: **`A1`, `A2`, `A3` are mutually independent** via `M_~A1..M_~A3`, while **`A4` presupposes a demarcated locus `A3` (stratified dependence: `A4 → A3` for persistent autonomy, yet `A3 ↛ A4` since passive cuts lack autonomous ipseity!)**. Together they form a **minimal, non-redundant four-axiom basis** covering all four irreducible failures of any observer theory (where, who/parity, cut/finitude, and time/ipseity).'
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
          title: 'Stratified Independence & Four-Axiom Completeness Theorem',
          statement: 'The set {A1, A2, A3, A4} constitutes a minimal stratified necessity basis: no subset of three axioms avoids all four classical paradoxes, and no fifth epistemic axiom is required to characterize coherent scientific observation.',
          proofSteps: [
            '1. [Separating Countermodels] M_~A1 (Archimedean Sensor), M_~A2 (Solipsist), M_~A3 (Continuum Field), and M_~A4 (Passive Static Cut) establish non-redundancy of every axiom.',
            '2. [Stratified Directionality] Passive demarcation cuts (A3) do not entail autonomous asymmetric ipseity (A4), whereas sustained A4 self-maintenance requires operational closure (A3).',
            '3. [Coverage Argument] Across §§2–33, every valid explanatory invariant addresses perspective localization (A1), cross-frame objectivity (A2), finite discrimination (A3), or temporal ipseity (A4); putative 5th axioms (e.g., Wheeler participancy) reduce to A1+A3, while Levinasian ethical infinity marks a meta-epistemic boundary.',
            '4. [Conclusion] Exactly four stratified axioms are necessary and jointly sufficient for epistemic-relational observerhood.'
          ],
          sourceNote: 'Synthesizes Allen (1983), Dainton (2000), Varela (1999), and Husserl Hua XXXIII.'
        }
      }
    ]
  },
  {
    id: 'part-8',
    number: 8,
    kicker: 'Part VIII · Structural Identity, Cross-Reference Matrix & Falsifiability (§§38–40)',
    title: 'The Structural Identity Thesis, 32-Position Matrix, Mutual Indispensability, and Empirical Crucibles',
    epigraph: '“Phenomenology without physics cannot explain why the present is thick; physics without phenomenology cannot say what an observer is.”',
    pullQuote: 'The Structural Identity Thesis is a meta-theoretical category isomorphism over A1–A4—visually verified across all 32 historical positions and tested by four axiom-specific empirical crucibles resistant to Duhem–Quine evasion.',
    leadSummary: 'States SIT precisely as a category/signature isomorphism (§38), provides the full 32-position ✓/✗/partial matrix, gives two concrete worked bilateral examples (§39), and operationalizes axiom-by-axiom empirical falsifiers defeating Duhem–Quine holism (§40).',
    chapterIntro: [
      'A genealogy that stops at taxonomy remains an annotated encyclopedia. Part VIII establishes the exact logical architecture of our central philosophical contribution: **the Structural Identity Thesis (SIT)** (§38), verified visually across every single one of the thirty-two frameworks from Sections 2–33 via our master cross-reference matrix (`✓ / ✗ / partial`), before proving bidirectional indispensability through two concrete worked cross-disciplinary problems (§39).',
      'Finally, §40 answers philosophy of science’s sharpest methodological test: converting our synthetic a priori axioms (`A1–A4`) into four distinct, axiom-by-axiom empirical falsification protocols designed explicitly to defeat Duhem–Quine holistic evasion.'
    ],
    subsections: [
      {
        number: '38',
        title: 'The Structural Identity Thesis: Exact Category Isomorphism and Relation to A1–A4',
        epistemicFocus: 'Precise definition of SIT (signature isomorphism across categories) and its meta-theoretical relation to A1–A4',
        paragraphs: [
          'Ambiguity over what “Structural Identity Thesis” asserts would ruin the treatise. What exactly is claimed to be identical to what? **Not** that conscious human experiences are numerically identical to inanimate photons (which would collapse into panpsychism), nor merely that philosophers happen to enjoy poetic metaphors about waves. Rather, stated formally within Ontic Structural Realism (Ladyman & Ross 2007, pp. 130–189), **the Structural Identity Thesis (SIT) asserts a second-order category-theoretic / model-theoretic signature isomorphism**:',
          'Define the abstract relational observer signature `Σ_Obs = ⟨Obs, Compat, Cut, AsymTime⟩` restricted by axioms `A1–A4`. SIT asserts that there exist faithful structure-preserving functors `F_Phen`, `F_RQM`, and `F_Bio` mapping (1) **Category Phen** (Husserlian intersubjective monads, horizons, and Bernau temporal syntheses), (2) **Category Quant** (Rovellian relational observer-systems, Cross-Perspective Links, and finite measurement cuts), and (3) **Category Sys** (Maturana–Varela autopoietic units, structural couplings, and regulatory cycles) onto the **exact same invariant relational signature `Σ_Obs`**—preserving perspective indexing, parity transformations, boundary separation, and temporal asymmetry without ontological elimination of qualitative experience or physical specificity.',
          'What is the **exact logical relation between SIT and Axioms A1–A4**? Axioms `A1–A4` are **first-order necessary transcendental axioms** constraining any coherent observer model; **SIT is a meta-theoretical convergence theorem** (`(A1..A4 ∧ FaithfullyRealized(Phen, Quant, Sys)) ⊢ Isomorphic(Phen, Quant, Sys | Σ_Obs)`). Because SIT relies on real-world instantiations of `A1–A4` across physics, biology, and mind, **empirically falsifying any bridge consequence of A1–A4 in §40 directly refutes the real-world physical applicability of SIT**, rendering SIT substantively accountable rather than immune speculation.'
        ],
        theoremBox: {
          kind: 'Theorem',
          number: '8.1',
          title: 'Structural Identity Thesis (Category-Signature Form)',
          statement: 'Between the relational observer structures of Phenomenology (Phen), Relational Quantum Foundations (Quant), and Autopoietic Systems Theory (Sys), there exist faithful functors onto the invariant signature Σ_Obs satisfying A1–A4, preserving all structural inferences up to domain-specific realization.',
          proofSteps: [
            '1. [Domain Functor Phen → Σ_Obs] Maps Nullpunkt ↦ H_o (A1), Einstimmigkeit/Paarung ↦ Equiv_inv (A2), perceptual horizon ↦ B_o (A3), and Bernau Urstrom/Henry asymmetry ↦ I_now (A4).',
            '2. [Domain Functor Quant → Σ_Obs] Maps RQM system state ↦ H_o (A1), Cross-Perspective Links ↦ Equiv_inv (A2), einselection/split cut ↦ B_o (A3), and FOH/irreversible record cycle ↦ I_now (A4).',
            '3. [Domain Functor Sys → Σ_Obs] Maps cognitive domain ↦ H_o (A1), structural coupling ↦ Equiv_inv (A2), autopoietic membrane/PSM transparency ↦ B_o (A3), and continuous self-production ↦ I_now (A4).',
            '4. [Conclusion] All three categories preserve exact structural equivalence under A1–A4 while keeping irreducible anomalies (Levinas, Marion, RBW) explicitly marked in Table 8.1.'
          ],
          sourceNote: 'Ladyman & Ross (2007) pp. 130–189; Husserl (1931); Rovelli (1996); Maturana & Varela (1980).'
        }
      },
      {
        number: '39',
        title: 'Why Phenomenology Needs Physics (and Vice Versa): Two Worked Bilateral Examples',
        epistemicFocus: 'Concrete worked proof of phenomenology requiring physical constraints and physics requiring phenomenological/autopoietic demarcation',
        paragraphs: [
          'Rather than merely praising interdisciplinary harmony, we demonstrate bilateral explanatory incompleteness through **two concrete worked problems** where neither discipline can finish its own argument alone.',
          '### Worked Example 1 · Why Phenomenology Needs Physics (Duration & Bandwidth of the Living Present)\nHusserl’s Bernau Manuscripts (§4) and Merleau-Ponty (§7) prove brilliantly by first-person reflection that conscious perception requires a thick living present (`|I_now| > 0`) rather than a mathematical point. Yet pure bracketed phenomenology **cannot explain why the living present is bounded at roughly hundreds of milliseconds to seconds rather than being zero or cosmically infinite**, nor why extreme thermal or gravitational regimes alter correlation stability. Only physical **Operational Demarcation (A3)** and finite-bandwidth thermodynamic/chronometric subsystem constraints supply the missing *explanatory why*: an embedded bounded cut cannot store infinite past phases cleanly without dissipating energy across finite channel capacity—anchoring Husserlian thickness to finite physical realizability.',
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
        title: 'Axiom-by-Axiom Empirical Falsifiability and Defeating Duhem–Quine Holism',
        epistemicFocus: 'Explicit (a) falsifying observation, (b) experiment, (c) predicted vs. rival outcome for each A1–A4, plus anti-holism',
        paragraphs: [
          'If A1–A4 function as synthetic a priori structural commitments bridging mind and nature rather than sterile verbal conventions, each axiom must specify independent empirical consequences:\n**• Axiom A1 (Immanence) Test:** *(a) Falsifier:* Discovery of macroscopically superposed agents obeying simultaneously universal quantum dynamics AND absolute frame-independent observer facts. *(b) Experiment:* Extended Wigner’s Friend / Local Friendliness photonic-superconducting interferometry scaling memory nodes (Bong et al. 2020 protocol). *(c) Outcome:* A1+A2 predict violation of Local Friendliness inequalities preserving relational indexing, whereas naive absolute-fact realism predicts no violation.\n**• Axiom A2 (Parity) Test:** *(a) Falsifier:* Detection of a preferred universal ether/collapse frame breaking covariant Cross-Perspective Links among equally decohered autonomous agents. *(b) Experiment:* Multi-node Bell/Wigner cross-verification tests comparing asymmetric relativistic boost frames. *(c) Outcome:* A2 predicts invariant cross-perspective concordance; privileged-frame collapse theories predict directional privilege.',
          '**• Axiom A3 (Demarcation / FOH) Test:** *(a) Falsifier:* Passive non-regulatory physical substrates exhibiting identical coherence-stabilization and error-corrected correlation persistence as dissipative self-maintaining units under matching thermal noise. *(b) Experiment:* Comparative coherence-lifetime tomography pitting closed-loop active feedback qubits / metabolic vesicles against matched passive scattering materials. *(c) Outcome:* A3+FOH predict sharp non-equilibrium persistence bifurcation favoring active regulatory loops; passive linear physics predicts zero bifurcation.\n**• Axiom A4 (Asymmetry & Thick Present) Test:** *(a) Falsifier:* Evidence that zero-bandwidth instantaneous slices mediate temporal change discrimination, or absence of hypothesized finite-bandwidth harmonic correlation effects across synchronized chronometers. *(b) Experiment:* (i) Psychophysical sub-millisecond temporal-order judgment thresholds alongside (ii) cross-scale phase-noise residuals comparing ultra-cold optical lattice clocks against long-baseline pulsar timing arrays (PTA). *(c) Outcome:* Cognitive thresholds confirm strictly positive `|I_now| > 0`; if optical–PTA comparisons yield strict null white noise, dynamical back-reaction is falsified cleanly, confining thickness to local cognitive/subsystem bandwidth.',
          '### Answering the Duhem–Quine Underdetermination Objection\nHow do we prevent defenders from rescuing any threatened axiom indefinitely by tweaking auxiliary apparatus hypotheses (Quine 1951)? First, by **cross-axiom decoupling**: each of the four protocols targets a *distinct, physically disjoint experimental platform* (optical interferometry for A1/A2, thermodynamic open quantum loops for A3, chronometry/psychophysics for A4)—modifying mirror calibration in a photonic circuit cannot simultaneously patch thermodynamic vesicle lifetimes! Second, by **pre-registered null boundaries**: §40 explicitly commits in advance to what null outcomes force retreating from dynamical back-reaction to purely structural-epistemic isomorphism, precluding ad hoc defensive epicycles.'
        ],
        equation: {
          label: '(8.2)',
          unicodeHtml: '( Test<sub>A1,A2</sub>(LocalFriendliness) ∧ Test<sub>A3</sub>(FOH_Bifurcation) ∧ Test<sub>A4</sub>(Chronometric/Interval) )  ⊢  NonHolisticFalsifiability',
          caption: 'Decoupled empirical crucibles testing each axiom independently to defeat Duhem–Quine holistic evasion.',
          plainMeaning: 'Assigning disjoint experimental tests across quantum interferometry, dissipative feedback loops, and chronometry prevents saving failed claims via ad hoc adjustments.'
        }
      }
    ]
  },
  {
    id: 'part-9',
    number: 9,
    kicker: 'Part IX · Concluding Synthesis & Main-Text Objections and Replies (§§41–42)',
    title: 'Thirty Vocabularies, One Relational Logic: Synthesis and Critical Replies',
    epigraph: '“The task of philosophy of physics is not to declare a winner among thirty vocabularies, but to construct the logical map showing why each is locally indispensable.”',
    pullQuote: 'No observer sits inside the world like a marble in a jar, nor floats outside it like an unmoved deity: to observe is to inhabit a bounded, relationally accountable horizon.',
    leadSummary: 'Distills the unifying philosophical verdict (§41) and places a comprehensive ten-point Critical Objections and Replies section (§42)—addressing Solipsism, Relativism, Circularity, and all boundary anomalies—directly inside the main text.',
    chapterIntro: [
      'We began with an acute historical fracture stretching from Aristotle and Descartes through Kant and Bohr: why does modern thought generate two irreconcilable portraits of the observer—the transcendental ego of phenomenology and the measurement-cut agent of quantum foundations—each afflicted by the identical Paradox of Constitutive Absence? Across Parts I through VIII, we established our methodology and exclusions, examined thirty-two distinct frameworks in balanced historical depth, moved every formal modal and topological proof directly into the main body, and audited all thirty-two positions against Axioms A1–A4.',
      'In this concluding Part, §41 summarizes the philosophical transformation achieved, while §42 answers the ten sharpest objections directly inside the main text so no reader need consult appendices to evaluate the treatise’s defenses.'
    ],
    subsections: [
      {
        number: '41',
        title: 'Concluding Synthesis: Neither Outside Nor Inside, But a Relational Horizon',
        epistemicFocus: 'Integrative verdict across all 32 traditions, Parts I–VIII, and the Structural Identity Thesis',
        paragraphs: [
          'The question “Where or who is the observer?” has received thirty formidable answers across thirty-two sections—from Kant’s Paralogisms (§2) and Husserl’s Bernau time-consciousness (§4) through Derrida’s non-punctual trace (§10), Foucault’s *dispositif* (§11), Lacan’s barred `$` (§12), Bohr’s Solvay complementarity (§16), Rovelli’s Cross-Perspective Links (§21), Zurek’s einselection (§23), and the First Observer Hypothesis (§27) to Luhmann’s blind spot (§29), Maturana–Varela’s autopoiesis (§30), and Metzinger’s transparent self-model (§32). This proliferation across traditions is not intellectual chaos; it reflects discipline-bound vocabularies interrogating distinct facets of one invariant relational logic.',
          'Once formalized cleanly via four stratified conditions within modal system S4—Perspectival Immanence (A1), Egalitarian Frame Parity (A2), Operational Demarcation Cut (A3), and Asymmetric Self-Relation generating an Allen-interval thick living present (A4)—every genuine discovery locks cleanly into place while conceptual limits (Levinas’s infinite ethics, Marion’s saturation, Cramer’s foliations, RBW’s static block) remain mapped candidly as boundary tensions rather than concealed beneath slogans.',
          'Both philosophy and science emerge deepened from the encounter: phenomenology sheds accusations of mysticism by gaining numbered modal proofs and concrete empirical crucibles, while foundational physics recovers a rigorous, non-anthropocentric definition of the situated observer it could never banish from the measurement cut.'
        ]
      },
      {
        number: '42',
        title: 'Critical Objections and Philosophical Replies',
        epistemicFocus: 'Main-text defense against Solipsism, Relativism, Circularity, Category Mistakes, Anomalies, and Duhem–Quine Holism',
        paragraphs: [
          '1. **Objection from Epistemic Solipsism (Does A1 trap every observer inside a private bubble?)** — *Reply:* No. Solipsism arises *only* when A1 (local situatedness) is asserted *without* A2 (Egalitarian Frame Parity), as proved in our §34 Solipsistic Collapse Reductio. Because every situated horizon overlaps covariantly with peer perspectives via shared compatibility rules (`Equiv_inv` / Rovelli Cross-Perspective Links), no private center owns reality.',
          '2. **Objection from Epistemic Relativism (If no global view exists, isn’t “anything goes” true relative to someone?)** — *Reply:* Relativism confuses **frame-indexing** with **anything-goes arbitrariness**. Under A2, truth within an observational domain is strictly constrained by cross-perspective invariance and consistency conditions (Griffiths §24, Born coherence §22). Claiming “velocity depends on inertial frame” does not make speed arbitrary; it states exact Lorentz invariance. Likewise, relational facts in A1–A2 remain strictly lawful.',
          '3. **Objection from Circularity (Aren’t observers already presupposed when defining A1–A4 or autopoietic closure?)** — *Reply:* We distinguish **vicious definitional circularity** from **generative causal closure** (§30) and **transcendental reflexivity**. Autopoietic cells close causally in biochemistry without logical contradiction, while transcendental S4 necessity shows *from inside coherent discourse* why denying any axiom breaks discourse itself via RAA (§§34–37).',
          '4. **Objection from Naturalistic Category Mistake (Does linking phenomenology to physics reduce intentionality to molecules?)** — *Reply:* On the contrary, SIT (§38) asserts a **non-reductive category-signature isomorphism**, never ontic identity of qualia with inert particles. Horizons (A1–A3) are structural conditions determining how physical objects manifest intelligibly, preserving Kant’s and Husserl’s transcendental asymmetry cleanly.',
          '5. **Objection from Henry’s Non-Temporality (Doesn’t Henry’s auto-affection contradict A4?)** — *Reply:* As proved in Theorem 2.1 (§8), Henry denies *ecstatic clock time*, not *generative asymmetry*. His irreversible non-negative self-givenness (`A4a`) provides the engine explaining why lived time (`A4b`) cannot flatten into dead point-instants.',
          '6. **Objection from Saturation and Ethical Infinity (Don’t Marion §15 and Levinas §9 falsify universal necessity of A2–A3?)** — *Reply:* Transparency strengthens our thesis (§9, §15): A1–A4 govern *ordinary intelligible epistemic/scientific observation*. Levinas marks the meta-epistemic *ethical overflow* above symmetric parity, while Marion marks the upper *cognitive-saturation breakdown* of finite horizons—both illuminating the exact boundaries of science.',
          '7. **Objection from Adynamical Blockworld & Wheeler Participancy (Does RBW §26 refute A4, or Wheeler §20 demand a 5th axiom?)** — *Reply:* As detailed in §20, Wheeler’s registered-phenomenon rule is fully captured by A1+A3 without needing human idealism. As detailed in §26, even if fundamental cosmology proves block-static, any localized information-gathering worldtube acting as an *observer* inside the block must still maintain asymmetric retention–protention gradients (`|I_o| > 0`) along its trajectory.',
          '8. **Objection from Duhem–Quine Holism (Can’t auxiliary physics save any failed axiom?)** — *Reply:* §40 defeats holistic evasion by coupling each axiom (`A1–A4`) to physically disjoint experimental apparatuses (interferometry, non-equilibrium open loops, chronometry/psychophysics) with pre-registered null retreat conditions.'
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
  { symbol: 'A1 (Immanence)', name: 'Perspectival Immanence', domain: 'Modal Logic S4', definition: '□(Obs(o) → ∃H_o [Situated(o, H_o) ∧ ¬TotalView(o)]): every observation occurs from a situated local horizon.' },
  { symbol: 'A2 (Parity)', name: 'Egalitarian Frame Parity', domain: 'Relational Logic', definition: '∀o,o′ (Overlap(o, o′) → [Compat(o, o′) ∧ Equiv_inv(o, o′)]): covariant parity without privileged ego.' },
  { symbol: 'A3 (Boundary)', name: 'Operational Demarcation Cut', domain: 'Topology / Systems', definition: '∀o,x (Discern(o, x) → ∃B_o [Sep(B_o, Inside_o, Ext_o) ∧ Bounded(Inside_o)]): finite separation collar.' },
  { symbol: 'A4 (Asymmetry)', name: 'Asymmetric Self-Relation', domain: 'Interval Logic / Mind', definition: 'Irreversible non-negative self-acquaintance (S_o ≥ 0) + Allen extended interval |I_now| > 0.' },
  { symbol: '□ , ◇', name: 'Modal S4 Necessity / Possibility', domain: 'Modal Epistemology', definition: 'Reflexive–transitive necessity across all coherent dynamically accessible contexts ⟨W, R⟩.' },
  { symbol: '⊢ , ⊥', name: 'Entailment & Contradiction', domain: 'Proof Theory', definition: 'Formal syntactic derivation turnstile (⊢) and classical reductio absurdity (p ∧ ¬p → ⊥).' },
  { symbol: 'Overlaps, Meets', name: 'Allen Interval Relations', domain: 'Temporal Logic', definition: 'Relations requiring strictly positive duration intervals (|I| > 0), excluding zero-width points [t, t].' },
  { symbol: '✓ / ✗ / partial', name: 'Cross-Reference Audit Codes', domain: '32-Model Matrix', definition: 'Full convergence (✓), explicit contradiction/limit anomaly (✗), or partial compatibility (partial).' }
];

export const SYNTHESE_GLOSSARY: SyntheseGlossaryTerm[] = [
  { term: 'Paradox of Constitutive Absence', definition: 'The twin convergence of phenomenology and quantum theory: the observer makes objective experience possible yet cannot appear wholly represented as one object within its own horizon.' },
  { term: 'Quantified Modal Logic S4', acronym: '⟨W, R⟩', definition: 'Modal framework combining reflexivity (□p → p) and transitivity (□p → □□p) without assuming global symmetry S5 across irreversible histories.' },
  { term: 'Transcendental Apperception', acronym: 'Kant B131 / Syn(o, R)', definition: 'Rule-governed categorial unification distinct from the empirical ego; guarded against reification by the First and Third Paralogisms.' },
  { term: 'Living Present & Bernau Diagram', acronym: 'Lebendige Gegenwart', definition: 'Husserl’s thick temporal window fusing primal impression with diagonal retention and protention, grounded in pre-objective Urstrom.' },
  { term: 'Chiasmic Écart', acronym: 'Merleau-Ponty', definition: 'Non-coincident divergence in the touching–touched double sensation, manifesting A3 two-way coupling and A4 asymmetry.' },
  { term: 'Auto-Affection', acronym: 'Michel Henry', definition: 'Non-ecstatic immanent self-givenness (A4a) supplying the asymmetric engine prior to objective clock time without denying temporal unfolding.' },
  { term: 'Barred Subject & objet petit a', acronym: 'Lacan $ / a', definition: 'Subject fractured between Imaginary ego and Symbolic signifiers, shedding a non-symbolizable Real remainder across the A3 cut.' },
  { term: 'Einselection & Quantum Darwinism', acronym: 'Zurek', definition: 'Dynamical selection of robust pointer states [H_int, P_α] = 0 and redundant environmental copying realizing A3 and A2.' },
  { term: 'First Observer Hypothesis', acronym: 'FOH', definition: 'Physical–cybernetic demarcation (A3 + A4) separating dissipative closed-loop observers from passive linear transducers.' },
  { term: 'Autopoiesis & Cognitive Domain', acronym: 'Maturana–Varela', definition: 'Self-producing metabolic closure enacting an endogenous cognitive niche distinct from an external observer’s environment description.' },
  { term: 'Phenomenal Transparency', acronym: 'Metzinger PSM', definition: 'Introspective unavailability of sub-personal construction stages inside the self-model, mechanically producing A3’s blind spot.' },
  { term: 'Structural Identity Thesis', acronym: 'SIT', definition: 'Meta-theoretical category-signature isomorphism unifying Phenomenology, Relational QM, and Autopoiesis across A1–A4.' }
];

export const SYNTHESE_APPENDICES: SyntheseAppendix[] = [
  {
    letter: 'A',
    title: 'Archival Cross-Walk: Formal Proofs Integrated Into Main Text (§§34–37)',
    summary: 'Note preserving cross-reference traceability after moving the S4 Modal Proof, Topological Anti-Continuum Lemma, and Separating Countermodels directly into Part VII.',
    paragraphs: [
      'In accordance with best scholarly practice for philosophy of science, the former appendix derivations are no longer isolated at the back of the treatise. Readers seeking the quantified modal S4 derivation and vicious-regress proof should consult main-text §34; readers seeking the set-theoretic Anti-Continuum Lemma and unmarked-exterior re-entry resolution should consult §35; and readers seeking the four separating countermodels (M_~A1 through M_~A4), Allen interval formalization, and coverage completeness proof should consult §36 and §37.',
      'Below is the compact axiomatic concordance ledger verifying consistency across every rule and reductio mode.'
    ],
    equations: [],
    reproducibilityLedger: [
      { checkpoint: 'A1 (Immanence) Suspended', formula: 'Assume ¬A1: ∃o_global ∀x Rep(o_global, x)', referenceConstants: '§34 Vicious Archimedean Regress Theorem', computedOutput: 'Reductio: o₀ ≺ o₁ ≺ o₂ … → ⊥' },
      { checkpoint: 'A2 (Parity) Suspended', formula: 'Assume A1 ∧ ¬A2: Privileged center o*', referenceConstants: '§34 Husserl 5th Med. & Extended Wigner', computedOutput: 'Reductio: Objective(p) ∧ ¬Objective(p) → ⊥' },
      { checkpoint: 'A3 (Boundary) Suspended', formula: 'Assume A1 ∧ A2 ∧ ¬A3: Continuum(X)', referenceConstants: '§35 Topological Anti-Continuum Lemma', computedOutput: 'Reductio: Sigma-algebra collapse → ⊥' },
      { checkpoint: 'A4 (Asymmetry) Suspended', formula: 'Assume A1..A3 ∧ ¬A4: I_now = [t₀, t₀]', referenceConstants: '§36–§37 Allen Interval Logic & Henry', computedOutput: 'Reductio: Temporal freeze → ⊥' }
    ]
  },
  {
    letter: 'B',
    title: 'Extended Technical Notes on Axiom Falsification Protocols (§40)',
    summary: 'Supplementary methodological parameters for Local Friendliness interferometry, FOH thermodynamic persistence, and Allen interval psychophysics.',
    paragraphs: [
      'While §40 summarizes the empirical falsification structure for each axiom A1–A4 and addresses Duhem–Quine holism, this technical note records calibration criteria linking theoretical parameters to laboratory bounds: (1) Local Friendliness bipartite photonic circuits require heralding efficiency above critical visibility thresholds to close detection loopholes; (2) FOH bifurcation tests require matching ambient bath temperatures and spectral densities between active feedback nodes and passive reference crystals; and (3) cognitive vs. chronometric interval tests separate sub-second neural integration windows (Varela ~100–3000 ms) from optical–pulsar clock synchronization residuals.'
    ],
    equations: [
      {
        label: '(B.1)',
        unicodeHtml: 'Bifurcation<sub>FOH</sub>  ≡  ( τ<sub>coh</sub>(Autonomous) ≫ τ<sub>coh</sub>(Passive) )  ∧  ( dS<sub>env</sub>/dt &gt; 0 )',
        caption: 'Quantitative experimental signature distinguishing First Observers from passive thermalizing transducers.',
        plainMeaning: 'An autonomous First Observer sustains correlation persistence far beyond a passive detector of matching mass by continuously exporting entropy.'
      }
    ]
  },
  {
    letter: 'C',
    title: 'Extended Scholarly Dossier on Excluded Frameworks (§0.2)',
    summary: 'Concise comparative notes explaining why Bohmian mechanics, GRW/CSL objective collapse, Neumaier’s thermal interpretation, and panpsychism fall outside A1–A4.',
    paragraphs: [
      'As outlined in §0.2, excluding non-perspectival ontologies preserves philosophical exactness rather than asserting dogmatic superiority: (1) Bohmian mechanics installs an absolute global configuration Q(t) ∈ ℝ^{3N}, violating A1’s fundamental non-global premise even when epistemic sub-systems experience effective ignorance; (2) GRW/CSL collapse replaces movable A3 cuts with an observer-independent stochastic localization field proportional to mass density; (3) Neumaier’s thermal interpretation replaces measurement cuts with objective operator q-expectations; and (4) constitutive panpsychism attributes proto-experience to boundary-less micro-particles lacking A3/A4 operational regulatory autonomy.'
    ],
    equations: []
  }
];

export const SYNTHESE_REFERENCES: SyntheseReference[] = [
  { id: 1, citation: 'Aristotle (c. 350 BCE). De Anima (On the Soul), Book III.2, 425b12–25. Trans. J. A. Smith. Oxford: Clarendon Press.' },
  { id: 2, citation: 'Descartes, R. (1641). Meditationes de prima philosophia (Meditations II & VI, AT VII 24–34, 71–90). Paris: Soly.' },
  { id: 3, citation: 'Leibniz, G. W. (1714). Monadologie (§§1–22, 56–62, GP VI 607–623). Trans. N. Rescher. Pittsburgh: University of Pittsburgh Press.' },
  { id: 4, citation: 'Kant, I. (1781/1787). Kritik der reinen Vernunft (Critique of Pure Reason, A98–110, B131–158, A341/B399–B432). Riga: Hartknoch.' },
  { id: 5, citation: 'Allison, H. E. (2004). Kant’s Transcendental Idealism: An Interpretation and Defense (pp. 50–76, 333–356). New Haven: Yale University Press.' },
  { id: 6, citation: 'Fichte, J. G. (1794/95). Grundlage der gesamten Wissenschaftslehre (SW I 91–105). Jena: Gabler.' },
  { id: 7, citation: 'Husserl, E. (1900–1901/1913). Logische Untersuchungen (Vol. II, Inv. V, §§1–14, Hua XIX/1, pp. 352–399). Halle: Niemeyer.' },
  { id: 8, citation: 'Husserl, E. (1913). Ideen zu einer reinen Phänomenologie und phänomenologischen Philosophie I (§57, n. 1, Hua III/1, p. 124). Halle: Niemeyer.' },
  { id: 9, citation: 'Husserl, E. (1931). Méditations cartésiennes / Cartesianische Meditationen (§§49–58, Hua I, pp. 121–165). The Hague: Nijhoff.' },
  { id: 10, citation: 'Husserl, E. (2001). Die Bernauer Manuskripte über das Zeitbewusstsein (1917/18, Hua XXXIII, Nr. 1–6, pp. 3–118). Dordrecht: Kluwer.' },
  { id: 11, citation: 'Zahavi, D. (1999). Self-Awareness and Alterity: A Phenomenological Investigation (pp. 110–156). Evanston: Northwestern University Press.' },
  { id: 12, citation: 'Heidegger, M. (1927). Sein und Zeit (Being and Time, §§12–18, 65–70, pp. 52–88, 323–368). Tübingen: Niemeyer.' },
  { id: 13, citation: 'Heidegger, M. (1962/1967). Die Frage nach dem Ding (What Is a Thing?, §§18–20, pp. 65–108). Chicago: Regnery.' },
  { id: 14, citation: 'Heidegger, M. (1987). Zollikoner Seminare (Zollikon Seminars, Ed. M. Boss, pp. 24–40, 134–148). Frankfurt: Klostermann.' },
  { id: 15, citation: 'Merleau-Ponty, M. (1945). Phénoménologie de la perception (pp. 235–281, 419–483). Paris: Gallimard.' },
  { id: 16, citation: 'Merleau-Ponty, M. (1964). Le Visible et l’Invisible (Ch. 4: “L’entrelacs – le chiasme,” pp. 130–155). Paris: Gallimard.' },
  { id: 17, citation: 'Henry, M. (1963). L’Essence de la manifestation (The Essence of Manifestation, §§29–39, pp. 227–318). Paris: PUF.' },
  { id: 18, citation: 'Levinas, E. (1961). Totalité et Infini (Totality and Infinity, Sec. III, pp. 187–219). The Hague: Nijhoff.' },
  { id: 19, citation: 'Levinas, E. (1974). Autrement qu’être ou au-delà de l’essence (Ch. IV, pp. 99–129). The Hague: Nijhoff.' },
  { id: 20, citation: 'Derrida, J. (1967a). La Voix et le Phénomène (Speech and Phenomena, Ch. 5, pp. 60–69). Paris: PUF.' },
  { id: 21, citation: 'Derrida, J. (1967b). L’Écriture et la différence (“Violence et métaphysique,” pp. 117–228 / Eng. 79–153). Paris: Seuil.' },
  { id: 22, citation: 'Derrida, J. (2005). Rogues: Two Essays on Reason (pp. 34–41, 108–114). Stanford: Stanford University Press.' },
  { id: 23, citation: 'Foucault, M. (1963). Naissance de la clinique (The Birth of the Clinic, pp. 107–148). Paris: PUF.' },
  { id: 24, citation: 'Foucault, M. (1966). Les Mots et les Choses (The Order of Things, pp. 303–343). Paris: Gallimard.' },
  { id: 25, citation: 'Foucault, M. (1975). Surveiller et punir (Discipline and Punish, “Panopticism,” pp. 195–228). Paris: Gallimard.' },
  { id: 26, citation: 'Lacan, J. (1966). Écrits (“Mirror Stage,” pp. 93–100; “Subversion of the Subject,” pp. 793–827). Paris: Seuil.' },
  { id: 27, citation: 'Lacan, J. (1973). Le Séminaire, Livre XI: Les quatre concepts fondamentaux (pp. 53–64, 105–119). Paris: Seuil.' },
  { id: 28, citation: 'Deleuze, G. (1968). Différence et Répétition (Ch. 2–4, pp. 96–168, 222–261). Paris: PUF.' },
  { id: 29, citation: 'Nancy, J.-L. (1996). Être singulier pluriel (Being Singular Plural, pp. 1–99). Paris: Galilée.' },
  { id: 30, citation: 'Marion, J.-L. (1997). Étant donné: Essai d’une phénoménologie de la donation (§§21–24, pp. 280–342 / Eng. 199–247). Paris: PUF.' },
  { id: 31, citation: 'Wittgenstein, L. (1921). Tractatus Logico-Philosophicus (5.62–5.641). London: Kegan Paul.' },
  { id: 32, citation: 'Bohr, N. (1935). “Can Quantum-Mechanical Description of Physical Reality Be Considered Complete?” Physical Review 48, 696–702.' },
  { id: 33, citation: 'Bohr, N. (1949). “Discussion with Einstein on Epistemological Problems in Atomic Physics.” In Schilpp (Ed.), Albert Einstein: Philosopher-Scientist, pp. 200–241.' },
  { id: 34, citation: 'Faye, J. (1991). Niels Bohr: His Heritage and Legacy (pp. 125–176). Dordrecht: Kluwer.' },
  { id: 35, citation: 'Howard, D. (1994). “What Makes a Classical Concept Classical?” In J. Faye & H. Folse (Eds.), Niels Bohr and Contemporary Philosophy, pp. 201–229.' },
  { id: 36, citation: 'Zinkernagel, H. (2016). “Niels Bohr on the Wave Function and the Classical/Quantum Divide.” Studies in History and Philosophy of Modern Physics 53, 9–19.' },
  { id: 37, citation: 'Von Neumann, J. (1932). Mathematische Grundlagen der Quantenmechanik (Ch. VI, pp. 222–237 / Eng. 347–445). Berlin: Springer.' },
  { id: 38, citation: 'Wigner, E. P. (1961). “Remarks on the Mind-Body Question.” In I. J. Good (Ed.), The Scientist Speculates, pp. 284–302.' },
  { id: 39, citation: 'Brukner, Č. (2018). “A No-Go Theorem for Observer-Independent Facts.” Entropy 20(5), 350.' },
  { id: 40, citation: 'Frauchiger, D., & Renner, R. (2018). “Quantum Theory Cannot Consistently Describe the Use of Itself.” Nature Communications 9, 3711.' },
  { id: 41, citation: 'Bong, K.-W., et al. (2020). “A Strong No-Go Theorem on the Wigner’s Friend Paradox.” Nature Physics 16, 1199–1205.' },
  { id: 42, citation: 'Everett, H. III (1957). “‘Relative State’ Formulation of Quantum Mechanics.” Reviews of Modern Physics 29(3), 454–462.' },
  { id: 43, citation: 'Wheeler, J. A. (1983). “Law Without Law.” In Quantum Theory and Measurement, Princeton University Press, pp. 182–213.' },
  { id: 44, citation: 'Rovelli, C. (1996). “Relational Quantum Mechanics.” International Journal of Theoretical Physics 35, 1637–1678.' },
  { id: 45, citation: 'Rovelli, C. (2021). Helgoland: Making Sense of the Quantum Revolution (pp. 65–145). New York: Riverhead Books.' },
  { id: 46, citation: 'Di Biagio, A., & Rovelli, C. (2021). “Stable Facts, Relative Facts.” Foundations of Physics 51, 30.' },
  { id: 47, citation: 'Adlam, E., & Rovelli, C. (2023). “Information Is Physical: Cross-Perspective Links in Relational Quantum Mechanics.” Philosophy of Physics 1(1), 1–19.' },
  { id: 48, citation: 'Fuchs, C. A., & Schack, R. (2013). “Quantum-Bayesian Coherence.” Reviews of Modern Physics 85(4), 1693–1715.' },
  { id: 49, citation: 'Zeh, H. D. (1970). “On the Interpretation of Measurement in Quantum Theory.” Foundations of Physics 1(1), 69–76.' },
  { id: 50, citation: 'Zurek, W. H. (2003). “Decoherence, Einselection, and the Quantum Origins of the Classical.” Reviews of Modern Physics 75, 715–775.' },
  { id: 51, citation: 'Griffiths, R. B. (2002). Consistent Quantum Theory (Ch. 10–15, pp. 131–215). Cambridge: Cambridge University Press.' },
  { id: 52, citation: 'Dowker, F., & Kent, A. (1996). “On the Consistent Histories Approach to Quantum Mechanics.” Journal of Statistical Physics 82, 1575–1646.' },
  { id: 53, citation: 'Cramer, J. G. (1986). “The Transactional Interpretation of Quantum Mechanics.” Reviews of Modern Physics 58(3), 647–687.' },
  { id: 54, citation: 'Maudlin, T. (2011). Quantum Non-Locality and Relativity (3rd ed., Ch. 7, pp. 180–194). Oxford: Wiley-Blackwell.' },
  { id: 55, citation: 'Silberstein, M., Stuckey, W. M., & McDevitt, T. (2018). Beyond the Dynamical Universe (pp. 135–210). Oxford: Oxford University Press.' },
  { id: 56, citation: 'Gell-Mann, M., & Hartle, J. B. (1990). “Quantum Mechanics in the Light of Quantum Cosmology.” In W. H. Zurek (Ed.), Complexity, Entropy and the Physics of Information, pp. 425–458.' },
  { id: 57, citation: 'Von Foerster, H. (1981). Observing Systems (pp. 258–309). Seaside, CA: Intersystems Publications.' },
  { id: 58, citation: 'Luhmann, N. (1995). Social Systems (Soziale Systeme, pp. 12–58, 255–277). Stanford: Stanford University Press.' },
  { id: 59, citation: 'Spencer-Brown, G. (1969). Laws of Form (pp. 1–16, 56–76). London: Allen & Unwin.' },
  { id: 60, citation: 'Maturana, H. R., & Varela, F. J. (1980). Autopoiesis and Cognition: The Realization of the Living (pp. 73–123). Dordrecht: Reidel.' },
  { id: 61, citation: 'Noë, A. (2004). Action in Perception (pp. 1–34, 75–122). Cambridge, MA: MIT Press.' },
  { id: 62, citation: 'Metzinger, T. (2003). Being No One: The Self-Model Theory of Subjectivity (pp. 163–178, 299–366). Cambridge, MA: MIT Press.' },
  { id: 63, citation: 'Dennett, D. C. (1991). Consciousness Explained (pp. 101–138, 412–430) & “Real Patterns,” Journal of Philosophy 88(1), 27–51.' },
  { id: 64, citation: 'Breuer, T. (1995). “The Impossibility of Accurate State Self-Measurements.” Philosophy of Science 62(2), 197–214.' },
  { id: 65, citation: 'Doplicher, S., & Longo, R. (1984). “Standard and Split Inclusions of von Neumann Factors.” Inventiones Mathematicae 75, 493–536.' },
  { id: 66, citation: 'Allen, J. F. (1983). “Maintaining Knowledge about Temporal Intervals.” Communications of the ACM 26(11), 832–843.' },
  { id: 67, citation: 'Dainton, B. (2000). Stream of Consciousness: Unity and Continuity in Conscious Experience (pp. 113–184). London: Routledge.' },
  { id: 68, citation: 'Gallagher, S. (2017). Enactivist Interventions: Rethinking the Mind (pp. 83–106). Oxford: Oxford University Press.' },
  { id: 69, citation: 'Varela, F. J. (1999). “The Specious Present: A Neurophenomenology of Time Consciousness.” In Naturalizing Phenomenology, Stanford UP, pp. 266–314.' },
  { id: 70, citation: 'Ladyman, J., & Ross, D. (2007). Every Thing Must Go: Metaphysics Naturalized (pp. 130–189). Oxford: Oxford University Press.' },
  { id: 71, citation: 'Quine, W. V. O. (1951). “Two Dogmas of Empiricism.” Philosophical Review 60(1), 20–43.' }
];

export const SYNTHESE_INDEX_OF_NAMES: SyntheseIndexEntry[] = [
  { entry: 'Adlam, Emily', sections: '§21, §34' },
  { entry: 'Allen, James F.', sections: '§37' },
  { entry: 'Allison, Henry E.', sections: '§2' },
  { entry: 'Aristotle', sections: '§1' },
  { entry: 'Bohr, Niels', sections: '§0.1, §1, §15a, §16, §20, §41' },
  { entry: 'Breuer, Thomas', sections: '§1 (Case 1.1), §41' },
  { entry: 'Brukner, Časlav', sections: '§18, §21, §34' },
  { entry: 'Cramer, John G.', sections: '§0.2, §25, §41' },
  { entry: 'Dainton, Barry', sections: '§37, §40' },
  { entry: 'Deleuze, Gilles', sections: '§13, §15a' },
  { entry: 'Dennett, Daniel C.', sections: '§1, §24, §33, §41' },
  { entry: 'Derrida, Jacques', sections: '§1, §10, §15a, §37, §41' },
  { entry: 'Descartes, René', sections: '§1, §2, §6, §32' },
  { entry: 'Doplicher, Sergio & Longo, Roberto', sections: '§35' },
  { entry: 'Dowker, Fay & Kent, Adrian', sections: '§24' },
  { entry: 'Everett, Hugh III', sections: '§1, §19, §23' },
  { entry: 'Faye, Jan', sections: '§16' },
  { entry: 'Foucault, Michel', sections: '§1, §11, §15a, §41' },
  { entry: 'Frauchiger, Daniela & Renner, Renato', sections: '§18, §34' },
  { entry: 'Fuchs, Christopher A.', sections: '§22' },
  { entry: 'Gallagher, Shaun', sections: '§37' },
  { entry: 'Gell-Mann, Murray & Hartle, James B.', sections: '§24, §27' },
  { entry: 'Griffiths, Robert B.', sections: '§24, §33, §42' },
  { entry: 'Heidegger, Martin', sections: '§1, §6, §8, §14, §41' },
  { entry: 'Henry, Michel', sections: '§1, §8, §29, §36, §42' },
  { entry: 'Howard, Don', sections: '§16' },
  { entry: 'Husserl, Edmund', sections: '§0.1, §1, §3, §4, §5, §10, §21, §34, §37, §38, §39' },
  { entry: 'Kant, Immanuel', sections: '§0.1, §1, §2, §13, §15, §16, §32, §34, §41' },
  { entry: 'Kastner, Ruth', sections: '§25' },
  { entry: 'Lacan, Jacques', sections: '§1, §12, §15a, §35, §41' },
  { entry: 'Ladyman, James & Ross, Don', sections: '§38' },
  { entry: 'Leibniz, Gottfried Wilhelm', sections: '§1, §5, §13, §34, §37' },
  { entry: 'Levinas, Emmanuel', sections: '§0.2, §9, §10, §41, §42' },
  { entry: 'Luhmann, Niklas', sections: '§1, §11, §29, §33, §35, §41' },
  { entry: 'Marion, Jean-Luc', sections: '§0.2, §15, §15a, §35, §42' },
  { entry: 'Maturana, Humberto R. & Varela, Francisco J.', sections: '§1, §27, §30, §37, §38, §41' },
  { entry: 'Maudlin, Tim', sections: '§25' },
  { entry: 'Merleau-Ponty, Maurice', sections: '§1, §7, §21, §39, §41' },
  { entry: 'Metzinger, Thomas', sections: '§1, §32, §33, §35, §36, §41' },
  { entry: 'Nancy, Jean-Luc', sections: '§14, §15a, §21, §34' },
  { entry: 'Noë, Alva', sections: '§1, §31' },
  { entry: 'Omnès, Roland', sections: '§24' },
  { entry: 'Quine, Willard Van Orman', sections: '§1, §40, §42' },
  { entry: 'Rovelli, Carlo', sections: '§1, §15a, §21, §34, §38, §41' },
  { entry: 'Schack, Rüdiger', sections: '§22' },
  { entry: 'Silberstein, Michael & Stuckey, William M.', sections: '§0.2, §26, §37, §42' },
  { entry: 'Spencer-Brown, George', sections: '§29, §35' },
  { entry: 'Von Foerster, Heinz', sections: '§1, §28' },
  { entry: 'Von Neumann, John', sections: '§1, §2, §15a, §17, §18, §34' },
  { entry: 'Wheeler, John Archibald', sections: '§20, §27, §37, §42' },
  { entry: 'Wigner, Eugene P.', sections: '§1, §17, §18, §39, §40' },
  { entry: 'Wittgenstein, Ludwig', sections: '§1, §34' },
  { entry: 'Zahavi, Dan', sections: '§3, §4, §8' },
  { entry: 'Zeh, H. Dieter & Zurek, Wojciech H.', sections: '§1, §19, §23, §27, §39, §41' },
  { entry: 'Zinkernagel, Henrik', sections: '§16' }
].map(({ entry, sections }) => ({ entry, sections }));

export const SYNTHESE_INDEX_OF_CONCEPTS: SyntheseIndexEntry[] = [
  { entry: 'Allen’s Interval Temporal Logic (Overlaps, Meets)', sections: '§37' },
  { entry: 'Analytic vs. Synthetic A Priori', sections: '§1, §40' },
  { entry: 'Anti-Continuum Lemma', sections: '§35' },
  { entry: 'Archimedean Vicious vs. Benign Regress', sections: '§1, §34' },
  { entry: 'Argument Map (A1–A4 → SIT)', sections: 'Part VII Intro' },
  { entry: 'Auto-Affection (A4a vs. A4b)', sections: '§8, §36, §42' },
  { entry: 'Autoimmunity (Derrida)', sections: '§10' },
  { entry: 'Autopoiesis & Cognitive Domain vs. Environment', sections: '§30, §38' },
  { entry: 'Barred Subject ($) & objet petit a', sections: '§12, §15a' },
  { entry: 'Bernau Manuscripts Diagram of Time', sections: '§4, §37, §39' },
  { entry: 'Chiasmic Reversibility & Écart', sections: '§7, §36' },
  { entry: 'Complementarity (Solvay & EPR)', sections: '§16' },
  { entry: 'Cross-Perspective Links (RQM)', sections: '§21, §34, §42' },
  { entry: 'Cross-Reference 32-Model Matrix (✓ / ✗ / partial)', sections: '§38 (Table 8.1)' },
  { entry: 'Différance & Anti-Instantaneity', sections: '§10, §15a, §37' },
  { entry: 'Dispositif (Panopticon & Clinical Gaze)', sections: '§11' },
  { entry: 'Duhem–Quine Holism Defense', sections: '§40, §42' },
  { entry: 'Eigenbehaviors & Second-Order Cybernetics', sections: '§28' },
  { entry: 'Einfühlung Circularity & Paarung', sections: '§5' },
  { entry: 'Einselection & Quantum Darwinism', sections: '§19, §23' },
  { entry: 'Ethical Infinite Overflow (Levinas)', sections: '§9, §42' },
  { entry: 'First Observer Hypothesis (FOH) & IGUS', sections: '§20, §27, §39, §40' },
  { entry: 'Meinhaftigkeit (Mineness)', sections: '§3, §36' },
  { entry: 'Modal Logic S4 (Reflexive–Transitive Frames)', sections: '§1, §34' },
  { entry: 'Paradox of Constitutive Absence', sections: '§1 (Theorem 1.1)' },
  { entry: 'Paralogisms (First & Third, Kant)', sections: '§2, §17, §34' },
  { entry: 'Participatory Realism vs. Coherence (QBism)', sections: '§22' },
  { entry: 'Phenomenal Transparency vs. Opacity (PSM)', sections: '§32, §33' },
  { entry: 'Real Patterns & Center of Narrative Gravity', sections: '§33' },
  { entry: 'Saturated Phenomenon (Marion)', sections: '§15, §35, §42' },
  { entry: 'Sensorimotor Contingencies', sections: '§7, §31' },
  { entry: 'Separating Countermodels (M_~A1..M_~A4)', sections: '§37' },
  { entry: 'Structural Identity Thesis (SIT)', sections: '§38, §39, §40' },
  { entry: 'Thick Living Present (|I_now| > 0)', sections: '§4, §26, §37, §40' },
  { entry: 'Two-Aspect Kantian Idealism', sections: '§2' },
  { entry: 'Unmarked Exterior Re-Entry Problem', sections: '§29, §35' },
  { entry: 'Urstrom (Pre-Objective Absolute Flow)', sections: '§4' },
  { entry: 'Vorhandenheit from Zuhandenheit (§§69–70)', sections: '§6' },
  { entry: 'Wigner’s Friend & Local Friendliness', sections: '§18, §39, §40' }
];
