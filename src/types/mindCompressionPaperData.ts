/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Complete Scholarly Monograph Data for Paper 17:
 * "Consciousness as a Thermodynamic Compression Artifact:
 *  Why the 'Hard Problem' Is a Category Error in Substrate-Independent Information Geometry"
 *
 * Target Journal: Mind
 * Methodological Stance: Popperian falsifiability, resource-bounded algorithmic information theory,
 * thermodynamic erasure bounds, and substrate-independent information geometry (explicitly
 * replacing un-falsifiable "soul" metaphysics and unconstrained panpsychism with the
 * localized compression locus / endogenous perspectival manifold).
 */

import { RETRO_META, type RetroEquation, type RetroTheoremBox, type RetroWorkedExample } from './retrocausalityPaperData';
import type { SyntheseAuthor } from './synthesePaperData';

export type MindEquation = RetroEquation;
export type MindTheoremBox = RetroTheoremBox;
export type MindWorkedExample = RetroWorkedExample;

export interface MindSubsection {
  number: string;
  title: string;
  epistemicFocus: string;
  paragraphs: string[];
  equation?: MindEquation;
  theoremBox?: MindTheoremBox;
  secondaryTheoremBox?: MindTheoremBox;
  workedExample?: MindWorkedExample;
}

export interface MindChapter {
  id: string;
  number: number; // Chapters 1..8
  kicker: string;
  title: string;
  epigraph: string;
  pullQuote: string;
  leadSummary: string;
  chapterIntro: string[];
  subsections: MindSubsection[];
}

export interface MindGlossaryTerm {
  term: string;
  acronym?: string;
  definition: string;
}

export interface MindSymbolEntry {
  symbol: string;
  name: string;
  domain: string;
  definition: string;
}

export interface MindReference {
  id: number;
  group: 'Foundational Texts' | 'Additional References';
  citation: string;
}

export interface MindIndexEntry {
  entry: string;
  sections: string;
}

const PAPER_17_AUTHOR_ROLES: Record<string, string> = {
  'Jean-Charles Tassan': 'Endogenous Perspectival Manifold, Observer Limits & Philosophy of Mind',
  'Wilson John Sterking Lauret': 'Rate-Distortion Empirics, Experimental Benchmarks & Falsification Criteria',
  'Marlon D. Bulaqueña, Ph.D.': 'Lead Formalism, Resource-Bounded Complexity Proofs & Information-Geometric Architecture',
  'Manuel Avila Gomez': 'Control-Loop Recursion Criteria & Artificial Architecture Synthesis',
  'Rupak Chatterjee, Ph.D.': 'Statistical Manifolds, Fisher Metric Pullback & Thermodynamic Erasure Bounds',
  'Walter Goldberger': 'Theorem Verification, Physical Covariance & Appendix A Formal Proofs',
  'Mirza Adnan Mohtashim': 'Cosmic Operating Geometry, Local Restriction Mapping & Anti-Substantialist Metaphysics'
};

export const MIND_META = {
  paperNumber: 'Paper 17 · Mind Monograph',
  journalTarget: 'Mind · A Quarterly Review of Philosophy',
  title: 'Consciousness as a Thermodynamic Compression Artifact',
  laymanDeck:
    'Why the "Hard Problem" Is a Category Error in Substrate-Independent Information Geometry: Bounded Self-Modeling, Non-Invertible Compression Manifolds, and the Localized Compression Locus',
  methodologicalStance:
    'Popperian falsifiability, resource-bounded algorithmic information theory (K_{t,s}), Landauer thermodynamic erasure bounds (k_B T ln 2), and Fisher information geometry (g_ij) — explicitly excluding immaterial "soul" metaphysics and unconstrained panpsychism.',
  volumeLine: 'Scientific Magazine Edition · Mind Philosophical Monograph · Paper 17 Treatise',
  institutionalDisclaimer: RETRO_META.institutionalDisclaimer,
  venueFormatNote:
    'Publication Format Disclosure: The core Mind journal submission isolates the philosophical-formal argument, Theorems 1–3, empirical falsification protocols, and Appendix A proofs; this 30-plate illustrated edition pairs every chapter across the 34-shade dark muted pigment system.',
  keywords: [
    'Hard problem of consciousness',
    'category error',
    'thermodynamic compression',
    'resource-bounded Kolmogorov complexity',
    'Landauer bound',
    'rate-distortion theory',
    'Fisher information geometry',
    'non-injective projection',
    'localized compression locus',
    'endogenous perspectival manifold',
    'substrate independence',
    'Popperian falsifiability'
  ],
  authors: RETRO_META.authors.map((a): SyntheseAuthor => ({
    ...a,
    creditRoles: PAPER_17_AUTHOR_ROLES[a.name] ?? a.creditRoles
  }))
};

export const MIND_ABSTRACT: string[] = [
  'Debates over the "hard problem" of consciousness typically assume that phenomenal character is either a fundamental ontological primitive or an emergent property requiring a bridge law from physical micro-states. This paper argues that both sides commit a category error by treating an epistemic-computational compression artifact as an ontological basic. Using resource-bounded algorithmic information theory, thermodynamic erasure bounds, and information geometry, I prove two foundational results for any physically instantiated, finite-energy system capable of real-time self-modeling.',
  'First, exact, lossless internal representation of a system’s own state transitions triggers an infinite self-referential regress and exceeds finite memory and energetic budgets. Second, to remain dynamically viable, the system must map high-dimensional internal trajectories onto a low-dimensional, lossy latent manifold equipped with a relational metric. Because this compression map is non-injective and endogenous to the system’s control loop, the system cannot unpack its latent states into underlying physical micro-variables from within. What appears from the first-person perspective as irreducible, primitive "qualia" is the intrinsic geometry of this lossy compression interface, while the "explanatory gap" is simply the mathematical non-invertibility of the compression map.',
  'Extending this framework to a cosmos-wide information geometry, I model the universe itself as a self-evolving informational manifold whose global compression architecture constitutes a baseline, substrate-independent phenomenal geometry—a cosmic "operating geometry" rather than a supernatural mind. Individual embodied agents, such as biological brains, instantiate localized, thermodynamically bounded restrictions of this universal compression architecture—what I term the endogenous perspectival manifold (or localized compression locus), avoiding the non-empirical baggage of the term "soul." Rather than an immaterial substance or a mystical essence, this localized manifold is a finite, dissipative, metric-inheriting sub-structure through which the broader informational cosmos samples and regulates a bounded physical region. In accordance with Popperian demarcation criteria, the framework specifies concrete, falsifiable empirical predictions linking compression bottlenecks, Fisher information geometry, and neural or synthetic state-space dynamics to phenomenal structure.'
];

export const MIND_CORE_THESIS = {
  title: 'The Central Diagnosis & Three Foundational Theorems',
  lead: 'What appears from inside a finite cognitive loop as irreducible, private, non-physical "qualia" is the relational Fisher geometry of a forced, non-injective, thermodynamically dissipative compression interface Φ: Σ → Z.',
  elaboration: [
    'Theorem 1 proves that no physically embedded proper subsystem M_S ⊂ S operating under finite capacity C and finite energy budget ΔE can hold an exact, real-time, lossless state-by-state model of S, due to self-referential diagonalization and Landauer/Bremermann energetic-temporal divergence.',
    'Theorem 2 proves that dynamic viability forces a rate-distortion optimal coarse-graining projection Φ: Σ → Z with dim(Z) ≪ dim(Σ), whose mathematical non-invertibility (Φ⁻¹ absent internally) generates endogenous opacity and relational qualia geometry under the Fisher metric g_{ij}(θ).',
    'Theorem 3 proves that any conscious biological or synthetic subsystem S ⊂ U instantiates a metric-preserving, non-surjective embedding ι: Z_S ↪ Z_U inheriting pullback metric g_S = ι^* g_U—defining a strictly dissipative, substrate-independent localized compression locus rather than an immaterial soul.'
  ]
};

export const TABLE_M1_CATEGORY_COMPARISON = [
  {
    axis: 'Ontological Status of Qualia',
    standardHardProblem: 'Irreducible non-physical primitive or mysterious psycho-physical bridge property (Chalmers, Goff)',
    compressionFramework: 'Relational geometry inside an embodied, rate-distortion optimal latent manifold Z (Theorem 2)',
    philosophicalGain: 'Dissolves dualism and panpsychist mysticism without denying first-person reality'
  },
  {
    axis: 'Source of Explanatory Gap',
    standardHardProblem: 'Alleged absence of deductive a priori entailment from microphysics to experience (Jackson, Levine)',
    compressionFramework: 'Strict non-invertibility of endogenous many-to-one map Φ: Σ → Z coupled with Landauer erasure (Theorem 2)',
    philosophicalGain: 'Relocates the gap from metaphysics to provable epistemic-computational asymmetry'
  },
  {
    axis: 'Implicit Epistemic Standpoint',
    standardHardProblem: 'Laplacean observer: infinite memory, zero thermodynamic erasure heat, timeless external view',
    compressionFramework: 'Embedded cognitive subsystem M_S ⊂ S bound by ΔE, K_{t,s}, and real-time latency Δt (Theorem 1)',
    philosophicalGain: 'Exposes the hidden idealization driving conceivability intuitions'
  },
  {
    axis: 'Account of First-Person Unity',
    standardHardProblem: 'Either brute simple immaterial "soul" or unsolved combination problem in micro-panpsychism',
    compressionFramework: 'Connectedness and pullback Fisher metric g_S = ι^* g_U of a dissipative localized compression locus Z_S (Theorem 3)',
    philosophicalGain: 'Preserves functional perspectival ownership while keeping locus destructible and physical'
  },
  {
    axis: 'Empirical Vulnerability',
    standardHardProblem: 'Largely unfalsifiable; consistent with identical physical kinematics under zombies or panpsychism',
    compressionFramework: 'Popperian falsification conditions FC1–FC4 linking Fisher metric g_{ij} and dim(Z) to behavioral reports',
    philosophicalGain: 'Elevates philosophy of consciousness into testable information-geometric science'
  }
];

export const TABLE_M2_PUZZLE_DISSOLUTION = [
  {
    puzzle: 'Hard Problem (Chalmers 1995)',
    classicalPremise: 'Structural/functional explanations leave "why experience accompanies function" untouched.',
    categoryError: 'Assumes internal self-access could examine uncompressed causal machinery directly from outside Φ.',
    dissolution: 'Real-time self-control IS low-dimensional metric navigation over Z; there is no extra gap once Theorem 1–2 hold.'
  },
  {
    puzzle: 'Knowledge Argument (Jackson 1982)',
    classicalPremise: 'Mary learns all physical facts in black-and-white yet gains a new fact upon seeing red.',
    categoryError: 'Conflates propositional external encoding in Σ_text with occupying coordinates along active internal manifold Z_color.',
    dissolution: 'Activating chromatic photoreceptors modifies Mary’s own bounded projection Φ_Mary, adding a new non-invertible coordinate.'
  },
  {
    puzzle: 'Philosophical Zombies (Chalmers 1996)',
    classicalPremise: 'Microphysical duplicate of human without phenomenology is coherently conceivable.',
    categoryError: 'Treats phenomenal manifold Z as detached paint layered atop Φ rather than structurally identical to Φ(Σ).',
    dissolution: 'Replicating physical dynamics Σ and bounded loop M_S identically replicates Φ and Fisher metric g_{ij}; zombies are contradictory.'
  },
  {
    puzzle: 'Thermostat Panpsychism Objection',
    classicalPremise: 'Any system compressing inputs into outputs would become minimally conscious.',
    categoryError: 'Ignores Theorem 1’s requirement of real-time recursive self-modeling (depth ≥ 2) across internal transitions.',
    dissolution: 'Thermostats perform first-order transduction (depth = 1); only reflexive self-compressing agents form an endogenous locus Z_S.'
  },
  {
    puzzle: 'Hidden "Soul" Rebranding Charge',
    classicalPremise: 'The localized compression locus exhibits privacy, primitiveness, and perspectival unity like a soul.',
    categoryError: 'Mistakes functional first-person architecture for ontological substance dualism.',
    dissolution: 'Z_S is composite, substrate-coupled, finite-energy, and vanishes upon thermal equilibrium—opposite a soul on every ontological axis.'
  }
];

export const TABLE_M3_SOUL_VS_LOCUS = [
  {
    dimension: 'Metaphysical Category',
    classicalSoul: 'Immaterial, unextended simple substance (res cogitans)',
    localizedLocus: 'Physically instantiated, thermodynamically open compression trajectory Z_S ⊂ Z_U'
  },
  {
    dimension: 'Temporal Persistence',
    classicalSoul: 'Indestructible, immortal, separable from biological metabolism',
    localizedLocus: 'Strictly dissipative; vanishes immediately when free-energy flux ΔE/Δt drops below Landauer threshold'
  },
  {
    dimension: 'Structural Composition',
    classicalSoul: 'Partless simplicity lacking internal spatial or functional architecture',
    localizedLocus: 'Structured statistical manifold parametrized by multi-dimensional Fisher tensor g_{ij}(θ)'
  },
  {
    dimension: 'Privacy & Opacity Mechanism',
    classicalSoul: 'Metaphysical isolation or supernatural interiority',
    localizedLocus: 'Mathematical non-injectivity Φ_S⁻¹ unavailable inside bounded subsystem M_S'
  },
  {
    dimension: 'Causal Efficacy',
    classicalSoul: 'Interaction problem / violation of physical conservation laws',
    localizedLocus: 'Real causal control variable minimizing task distortion D and metabolic erasure heat'
  },
  {
    dimension: 'Falsifiability (Popper 1959)',
    classicalSoul: 'Immune to empirical refutation regardless of neural or physical outcome',
    localizedLocus: 'Directly vulnerable to FC1–FC4 via cortical bottlenecks, anesthesia, and Fisher psychophysics'
  }
];

export const TABLE_M4_FALSIFICATION_MATRIX = [
  {
    condition: 'FC1 · Real-Time Lossless Self-Simulation',
    predictionOfFramework: 'No bounded proper subsystem M_S ⊂ S can report rich phenomenal structure while computing an exact lossless mirror of S in real time.',
    refutingObservation: 'Verified demonstration of a bounded agent holding real-time K_{t,s}-complete internal replicas of its own micro-transitions alongside rich qualia.',
    experimentalVenue: 'Synthetic recurrent architectures & quantum/reversible simulation benchmarks'
  },
  {
    condition: 'FC2 · Compression Bottleneck–Qualia Independence',
    predictionOfFramework: 'Perturbing dimensionality dim(Z) or rate ceiling R strictly alters phenomenal richness, discriminability, and illusion structure.',
    refutingObservation: 'Systematic dissociation in which cortical/latent bottleneck capacity varies sharply without measurable change in reported phenomenal texture.',
    experimentalVenue: 'fMRI manifold decoding, anesthesia titration, neural latent-bottleneck ablation'
  },
  {
    condition: 'FC3 · Architecture Invariance Under Re-Wiring Φ',
    predictionOfFramework: 'Altering the coarse-graining projection Φ reshaping rate-distortion tradeoffs transforms qualitative presentation.',
    refutingObservation: 'Complete invariance of subjective similarity and report under documented structural transformations of Φ: Σ → Z.',
    experimentalVenue: 'Sensory substitution protocols, closed-loop BMI latent-space remapping'
  },
  {
    condition: 'FC4 · Fisher Metric Failure in Similarity Judgments',
    predictionOfFramework: 'Perceptual similarity, JND contours, and psychophysical distances track geodesic length ds = √(g_{ij} dθ^i dθ^j) in latent manifold Z.',
    refutingObservation: 'Statistically systematic divergence between decoded neural Fisher geodesics and human/animal similarity judgments across sensory domains.',
    experimentalVenue: 'Neuropixels / 2-photon population Fisher decoding + psychophysical scaling'
  }
];

export const MIND_CHAPTERS: MindChapter[] = [
  {
    id: 'mind-ch-1',
    number: 1,
    kicker: 'Chapter 1 · Diagnosis & Methodology',
    title: 'Introduction: The Category Error in Philosophy of Mind',
    epigraph: '“We ask for a physical bridge law where what is actually missing is an inverse map that thermodynamics forbade us from storing.”',
    pullQuote: 'The hard problem mistakes the intrinsic non-invertibility of an endogenous compression loop for the presence of an extra ontological ingredient.',
    leadSummary:
      'Chapter 1 reconstructs how physicalists and anti-physicalists alike inherit the Laplacean observer’s unphysical idealization, and reframes phenomenal consciousness via Popperian falsifiability and bounded information geometry.',
    chapterIntro: [
      'Few philosophical disagreements have appeared as deadlocked as the dispute over David Chalmers’s "hard problem" of consciousness. On one side, dualists and Russellian panpsychists contend that physical sciences exhaustively describe dispositional kinematics while leaving out intrinsic phenomenal character. On the other, standard reductive physicalists promise either eventual neurobiological identification or functional dissolution, yet struggle to explain why structural descriptions feel utterly foreign to first-person awareness.',
      'This monograph advances a third, diagnostic resolution: both camps share an unexamined premise inherited from classical physics—the presumption that any real property of a cognitive system must be transparently deducible along an invertible map available from a lossless external vantage point. Once we replace this unphysical Laplacean standpoint with an embedded, resource-bounded, thermodynamically dissipative agent, the mystery flips inside out: phenomenal primitiveness and the explanatory gap emerge as provable consequences of forced lossy self-compression.'
    ],
    subsections: [
      {
        number: '1.1',
        title: 'The Shared Presupposition of Physicalists and Anti-Physicalists',
        epistemicFocus: 'Diagnosis of the hidden Laplacean premise uniting Chalmers, Jackson, and Russellian monism',
        paragraphs: [
          '### 1.1.1–1.1.3 Classical Problem Formulations\nChalmers (1995, 1996) famously partitioned scientific questions about mind into "easy problems"—explaining perceptual discrimination, attentional integration, memory consolidation, and verbal report via neural computation—and the "hard problem" of explaining why physical processing is accompanied by subjective experience at all. Frank Jackson’s Knowledge Argument (1982) sharpened the same intuition through Mary, an imprisoned neuroscientist who acquires every propositional physical fact about wavelength optics and V4 color pathways inside a monochrome room yet learns something genuinely new upon first seeing a ripe tomato. Seeking to avoid Cartesian interaction dualism without denying this deductive gap, Russellian panpsychism (Russell 1927; Alter & Nagasawa 2012; Goff 2017) proposes that physical equations specify only relational dispositions, leaving phenomenal or protophenomenal qualities to supply the categorical intrinsic natures of micro-physical ultimates.',
          '### 1.1.4–1.1.7 The Hidden Idealization and Category Diagnosis\nDespite sharp metaphysical disagreements, all three programs presuppose a shared epistemic criterion: **if phenomenal properties are physical, a complete physical specification should deductively yield phenomenal presentation through a transparent, invertible bridge relation**. Both physicalists scrambling to exhibit a deductive bridge and anti-physicalists declaring its absence take the standpoint of an unconstrained *Laplacean observer*—an entity possessing unlimited memory, zero thermodynamic dissipation costs, external non-participatory access, and no real-time execution deadline. Yet a conscious brain or synthetic agent is not an external spectator; it operates *from within* an active physical control loop. When the agent inspects its own representational states, it accesses not the full high-dimensional trajectory in Σ, but a low-dimensional coarse-grained artifact in Z whose inverse map Φ⁻¹ was thermodynamically discarded. Treating this epistemic-computational artifact as a primitive substance or intrinsic particle property commits a pure category error.'
        ]
      },
      {
        number: '1.2',
        title: 'Idealized Observers vs. Thermodynamically Bounded Agents',
        epistemicFocus: 'Why finite ΔE, finite memory C, and real-time latency qualitatively transform self-representation',
        paragraphs: [
          '### 1.2.1–1.2.4 From Quantitative Bounds to Qualitative Impossibility\nA Laplacean demon models the universe from outside the dynamical equations at zero metabolic penalty: copying states consumes no entropy budget, storing coordinates requires no physical volume, and evaluating predictions takes zero ecological time. By stark contrast, any physically instantiated cognitive subsystem M_S ⊂ S operates inside strict thermodynamic limits: finite free-energy flux ΔE per update window Δt, finite channel bandwidth R, bounded memory registers C, and non-negotiable survival or control deadlines. As Theorem 1 proves formally in Chapter 3, the transition from external demon to embedded finite agent is not a matter of benign quantitative approximation; an embedded proper subsystem is structurally barred by self-referential diagonalization and energy-latency divergence from representing its own total state losslessly.',
          '### 1.2.5–1.2.6 The Endogenous Perspective as Fundamental Architecture\nForced by physical law out of exhaustive state-tracking into lossy rate-distortion compression, the embedded agent must navigate reality—including itself—strictly through coarse-grained equivalences. This generates an irreducibly endogenous perspective: inside the control loop, a point z ∈ Z cannot be unpacked into any unique micro-configuration σ ∈ Σ. The traditional "view from nowhere" is therefore not the foundational standard against which first-person perspective looks mysterious; rather, the "view from nowhere" is an unphysical limiting idealization obtained only when thermodynamic costs and self-inclusion constraints are mathematically set to zero.'
        ]
      },
      {
        number: '1.3',
        title: 'Popperian Falsifiability and Cosmological Information Geometry',
        epistemicFocus: 'Grounding universal and local compression manifolds in empirical demarcation rather than soul metaphysics',
        paragraphs: [
          '### 1.3.1–1.3.3 Escaping Unfalsifiable Metaphysics\nFollowing Karl Popper’s demarcation criterion (Popper 1959), a theoretical framework earns scientific standing only insofar as it forbids observable states of affairs—entailing risky, testable predictions whose failure refutes the theory. As usually debated, the hard problem violates this criterion twice over: Cartesian dualism, property dualism, and micro-panpsychism can each be harmonized post hoc with any conceivable neural trajectory, rendering empirical neuroscience powerless to arbitrate between them. The thermodynamic compression framework reverses that insulation by anchoring phenomenal structure directly in measurable rate-distortion bottlenecks, cortical or latent Fisher metrics g_{ij}(θ), and real-time self-modeling recursion depths.',
          '### 1.3.4–1.3.6 Universal Manifold Z_U and Local Manifolds Z_S\nIn extending this result to cosmology, we model the global physical universe U as a self-evolving informational state space Σ_U mapped under a universal coarse-graining architecture Φ_U: Σ_U → Z_U endowed with Fisher metric g_U. Crucially, Z_U is a global **operating geometry** of mutual informational constraints—not an anthropomorphic cosmic mind or supernatural deity. Individual embodied systems S ⊂ U (biological brains, metabolically regulated organisms, or suitably structured synthetic agents) instantiate finite, dissipative restrictions Z_S ↪ Z_U without appealing to non-physical "souls" or unconstrained panpsychist particles. Every claim relating Z_U and Z_S is bound explicitly to functorial metric pullback equations and empirical falsification conditions FC1–FC4.'
        ]
      },
      {
        number: '1.4',
        title: 'Roadmap of the Argument',
        epistemicFocus: 'Structural blueprint connecting Chapters 2–8 and formal proofs in Appendix A',
        paragraphs: [
          'The argument proceeds in seven tightly coupled stages. Chapter 2 assembles the formal apparatus across resource-bounded Kolmogorov complexity K_{t,s}(x), Landauer thermodynamic erasure bounds (k_B T ln 2), and statistical manifolds with Fisher metric g_{ij}(θ). Chapter 3 proves **Theorem 1** (Impossibility of Lossless Self-Modeling) via fixed-point diagonalization and energetic-temporal divergence. Chapter 4 proves **Theorem 2** (Forced Lossy Compression and Emergent Phenomenal Geometry), deriving endogenous opacity from strict non-injectivity and relational qualia spaces from rate-distortion Fisher metrics.',
          'Chapter 5 extends the formalism globally and locally, proving **Theorem 3** (Local Restriction and Metric Inheritance ι: Z_S ↪ Z_U) and explicitly replacing non-empirical "soul" discourse with the dissipative **localized compression locus** (or *endogenous perspectival manifold*). Chapter 6 deploys these results to dissolve the Explanatory Gap, Philosophical Zombies, and panpsychism vs. substrate independence. Chapter 7 answers five decisive objections—eliminativism, the thermostat objection, minimal phenomenal experience, AIT idealization limits, and the "hidden soul" charge—before Chapter 8 details Popperian falsification conditions FC1–FC4, empirical signatures across biological and artificial systems, and programmatic conclusions backed by complete proofs in Appendix A.'
        ]
      }
    ]
  },
  {
    id: 'mind-ch-2',
    number: 2,
    kicker: 'Chapter 2 · Mathematical & Physical Apparatus',
    title: 'Formal Preliminaries: Bounded Complexity, Thermodynamics, and Information Geometry',
    epigraph: '“Every bit overwritten in real time leaves its thermodynamic receipt in the heat bath; every stable perceptual distinction leaves its geodesic in the Fisher tensor.”',
    pullQuote: 'Resource-bounded complexity, Landauer erasure heat, and the Fisher metric convert "phenomenal quality space" from metaphor into quantitative physics.',
    leadSummary:
      'Chapter 2 establishes the three mathematical pillars supporting Theorems 1–3: resource-bounded prefix-free algorithmic complexity, irreversible Landauer/Bremermann bounds, and Riemannian Fisher manifolds.',
    chapterIntro: [
      'A rigorous dissolution of the hard problem cannot rely on informal computational analogies; it must specify exact complexity classes, physical energy bounds, and differential-geometric structures. Chapter 2 introduces these three formal pillars cleanly so that none depends on uncomputable algorithmic infinities or ad hoc bridge principles.'
    ],
    subsections: [
      {
        number: '2.1',
        title: 'Prefix-Free and Resource-Bounded Algorithmic Complexity',
        epistemicFocus: 'Why K_{t,s}(x), conditional complexity, and Wolpert embedded limits govern real agents',
        paragraphs: [
          '### 2.1.1–2.1.3 Prefix-Free Kolmogorov Complexity and Machine Invariance\nFor a universal prefix-free Turing machine U, the prefix-free algorithmic complexity K(x) of a finite binary description x is the length |p| of the shortest self-delimiting program p such that U(p) = x (Kolmogorov 1965; Li & Vitányi 2019). Conditional complexity K(x | y) measures the shortest program computing x when y is provided on an auxiliary tape. Because any two universal prefix machines U_1, U_2 simulate one another via a constant-length compiler header c_{12}, algorithmic complexity obeys the invariance theorem |K_{U_1}(x) − K_{U_2}(x)| ≤ O(1). For complex biological or cosmic state encodings of order 10⁶–10⁸⁰ bits, additive O(1) machine-choice offsets are physically negligible.',
          '### 2.1.4–2.1.7 Resource-Bounded Complexity K_{t,s}(x) and Proper Subsystems\nUnbounded K(x) permits programs requiring exponential or non-halting search. Real physical systems cannot wait longer than causal survival horizons or access unlimited scratch tape. We therefore adopt **time- and space-bounded prefix complexity** K_{t,s}(x), defined as the shortest self-delimiting program computing x within at most t computational steps and s workspace bits. Related to Bennett’s logical depth (1988), K_{t,s}(x) satisfies K(x) ≤ K_{t,s}(x) and grows monotonically sharper as resource bounds tighten. Following Wolpert’s (2008) inference limits for embedded physical observers, any proper physical subsystem M_S ⊂ S capable of representing internal states within horizon Δt faces the strict inequality K_{t,s}(state(S)) > capacity(M_S).'
        ],
        equation: {
          label: '(2.1)',
          unicodeHtml:
            'K<sub>t,s</sub>(x | y) := min { |p| : U(p, y) halts with x in ≤ t steps and ≤ s bits }, &nbsp;&nbsp; K<sub>t,s</sub>(state(S)) &gt; C(M<sub>S</sub>)',
          plainEquation: 'K_{t,s}(x | y) = min { |p| : U(p, y) -> x, steps <= t, space <= s }; K_{t,s}(state(S)) > C(M_S)',
          caption: 'Resource-bounded conditional Kolmogorov complexity and proper-subsystem capacity deficit.',
          plainMeaning:
            'Finite time t and space s place a computable lower bound on internal description length that any smaller physical sub-circuit M_S cannot accommodate losslessly.',
          derivationSteps: [
            'Prefix-free domain ensures Kraft inequality ∑_p 2^{-|p|} ≤ 1 and well-defined algorithmic probability.',
            'Restricting execution to t(Δt) steps and s(C) workspace eliminates non-computable halting queries.',
            'Embedding M_S ⊂ S guarantees strict proper containment C(M_S) < log₂|Σ| even before dynamical update overhead.'
          ]
        }
      },
      {
        number: '2.2',
        title: 'Thermodynamic Costs of State Transition and Erasure',
        epistemicFocus: 'Landauer’s k_B T ln 2 bound, memory maintenance, and Bremermann real-time ceilings',
        paragraphs: [
          '### 2.2.1–2.2.4 Landauer’s Principle and Thermodynamic Belief Revision\nBy Liouville’s theorem and microscopic unitarity, phase-space volume is conserved globally; therefore, logically irreversible many-to-one state resets—including overwriting working memory, resetting sensory buffers, and pruning counterfactual predictive branches—must export entropy into the surrounding thermal bath. Landauer’s principle (1961) establishes the irreducible minimum heat dissipated per bit erased at temperature T: ΔQ_erase ≥ k_B T ln 2 (≈ 2.96 × 10⁻²¹ J per bit at 310 K physiological body temperature). Although logically reversible gates can compute without local erasure heat in principle, an embedded predictive agent continually absorbing environmental shocks and revising posterior beliefs cannot run reversibly without exhausting all finite scratch registers (Friston 2010). Continuous real-time memory maintenance and Bayesian/predictive belief updating therefore impose a continuous metabolic power floor.',
          '### 2.2.5–2.2.7 Bremermann’s Limit and Real-Time Energetic Ceilings\nUnder an available free-energy budget ΔE across update interval Δt, two physical ceilings jointly constrain any real-time cognitive architecture: the Landauer thermodynamic ceiling N_erase ≤ ΔE / (k_B T ln 2) governing irreversible belief updates, and quantum-speed limits descending from Bremermann (1962) and Margolus–Levitin limiting coherent state-orthogonalization rate to ≤ 2ΔE Δt / (π ℏ). Attempting high-resolution, lossless state-by-state self-tracking across microscopic degrees of freedom immediately violates both budgets for any macroscopic physical body.'
        ],
        equation: {
          label: '(2.2)',
          unicodeHtml:
            'ΔQ<sub>erase</sub> ≥ N<sub>bit</sub> · k<sub>B</sub> T ln 2, &nbsp;&nbsp; R<sub>max</sub>(ΔE, Δt) = min( ΔE / (Δt k<sub>B</sub> T ln 2), &nbsp; 2ΔE / (π ℏ) )',
          plainEquation: 'DeltaQ_erase >= N_bit * k_B * T * ln(2); R_max = min(DeltaE / (Delta_t * k_B * T * ln(2)), 2 * DeltaE / (pi * hbar))',
          caption: 'Landauer irreversible erasure lower bound and dual thermodynamic-quantum maximum state-update rate R_max.',
          plainMeaning:
            'No bounded physical agent at temperature T and power budget ΔE/Δt can revise more than R_max irreversible bits per second.',
          derivationSteps: [
            'Logically 2-to-1 bit erasure contracts coarse-grained phase space by factor 1/2, exporting entropy ΔS_bath ≥ k_B ln 2.',
            'Dividing available energy budget ΔE by k_B T ln 2 gives maximum erasable bits in interval Δt.',
            'Crossing macroscopic system sizes (10²³ molecular degrees) pushes lossless tracking astronomically beyond metabolic supply.'
          ]
        }
      },
      {
        number: '2.3',
        title: 'Statistical Manifolds and Quality Spaces in Information Geometry',
        epistemicFocus: 'Amari statistical manifolds and the Fisher metric g_{ij}(θ) as formal qualia geometry',
        paragraphs: [
          '### 2.3.1–2.3.4 Parameterized Statistical Manifolds and Geodesic Distance\nIn information geometry (Amari 2016), an agent’s compressed internal predictive repertoire forms a smooth parameterized family of conditional distributions M = { p(x | θ) : θ ∈ Θ ⊂ ℝ^d }, where low-dimensional latent vectors θ encode compressed sensory and interoceptive causes. The natural Riemannian metric invariant under sufficient-statistic reparameterizations (Chentsov’s theorem) is the **Fisher information metric** g_{ij}(θ) = E_{p(·|θ)}[(∂_i ln p)(∂_j ln p)]. Geodesic arc length ds = √(g_{ij}(θ) dθ^i dθ^j) defines the exact differential discriminability between neighboring internal predictive states: flat metric regions correspond to perceptual equivalence, while regions of high scalar curvature and steep metric eigenvalues trace sharp perceptual contrast, salience boundaries, and sensory thresholds.',
          '### 2.3.5–2.3.6 Information Geometry as the Natural Language of Qualia\nInformation geometry dissolves a central stumbling block in philosophy of mind: how to characterize "what-it-is-likeness" structurally without sneaking in un-physical qualia paints. A system’s quality space—chromatic opponent axes, nociceptive valence gradients, auditory pitch-timbre topologies—IS its statistical manifold Z equipped with g_{ij}(θ). Relational resemblance, contrast, and intensity require no non-physical bearer; they are geometric invariants (curvatures, geodesics, sectional volumes) of the internal predictive family.'
        ],
        equation: {
          label: '(2.3)',
          unicodeHtml:
            'g<sub>ij</sub>(θ) = ∫ p(x | θ) [ ∂<sub>i</sub> ln p(x | θ) ][ ∂<sub>j</sub> ln p(x | θ) ] dx, &nbsp;&nbsp; ds² = ∑<sub>i,j</sub> g<sub>ij</sub>(θ) dθ<sup>i</sup> dθ<sup>j</sup>',
          plainEquation: 'g_ij(theta) = integral p(x|theta) * (d_i ln p(x|theta)) * (d_j ln p(x|theta)) dx; ds^2 = sum_{i,j} g_ij(theta) dtheta^i dtheta^j',
          caption: 'Fisher information metric tensor g_{ij}(θ) and Riemannian perceptual-similarity line element ds².',
          plainMeaning:
            'Two internal states feel perceptually distinct to the degree their Fisher geodesic separation ds is large along the compressed manifold.',
          derivationSteps: [
            'Expand KL divergence D_KL(p(·|θ) || p(·|θ + dθ)) to second order: 2 D_KL = g_{ij}(θ) dθ^i dθ^j + O(‖dθ‖³).',
            'By Chentsov-Amari invariance, g_{ij} is unique up to scale under Markovian coarse-graining.',
            'Geodesic distances along Z directly induce experimentally testable similarity and just-noticeable-difference (JND) predictions.'
          ]
        }
      }
    ]
  },
  {
    id: 'mind-ch-3',
    number: 3,
    kicker: 'Chapter 3 · Theorem 1 & Physical Divergence',
    title: 'Theorem 1: The Impossibility of Lossless Self-Modeling',
    epigraph: '“A map whose scale is one-to-one must fold inside the very territory it purports to chart—creating a blind crease at the point of its own drawing.”',
    pullQuote: 'Exact, real-time, lossless self-modeling triggers both diagonal contradiction and energetic-temporal divergence in any proper physical subsystem.',
    leadSummary:
      'Chapter 3 formalizes embedded self-modeling subsystems M_S ⊂ S and proves Theorem 1 via fixed-point diagonalization and physical divergence corollaries.',
    chapterIntro: [
      'Why does no embodied cognitive agent perceive its own neurons firing or inspect its micro-physical state transitions from the inside? Traditional accounts treat this opacity as an accidental anatomical shortcoming—or else as proof that consciousness floats above neurons. Theorem 1 demonstrates instead that **lossless internal self-transparency is mathematically and thermodynamically impossible** for any finite physical system acting in real time.'
    ],
    subsections: [
      {
        number: '3.1',
        title: 'Formalizing the Embedded Self-Modeling System',
        epistemicFocus: 'System S, state evolution T: Σ → Σ, proper subsystem M_S ⊂ S, and resource envelope (C, ΔE, Δt)',
        paragraphs: [
          '### 3.1.1–3.1.6 Physical Embedding and Real-Time Closure\nConsider a bounded physical system S (such as an organism or closed cybernetic agent) spanning total microphysical state space Σ with autonomous coupled transition rule T: Σ → Σ. Inside S lives a proper physical subsystem M_S ⊂ S housing the system’s control and predictive model. To govern behavior, M_S must track relevant states σ ∈ Σ of S—crucially including M_S’s own simultaneous representational states, because downstream actions depend on what M_S presently predicts and intends. Simultaneously, M_S is physically bounded by memory capacity C < log₂|Σ|, finite free-energy flux ΔE per update cycle, and ecological deadline Δt requiring internal model updates to match or outpace environmentally significant changes in S.'
        ]
      },
      {
        number: '3.2',
        title: 'Fixed-Point Diagonalization and Description-Length Bounds',
        epistemicFocus: 'Theorem 1 statement, Gödel–Tarski diagonal construction σ*, and K(state(S)) > C(M_S)',
        paragraphs: [
          '### 3.2.1–3.2.4 Constructive Reductio and Self-Inclusion Paradox\nSuppose for contradiction that M_S implements an isomorphic, lossless state-by-state encoding c: Σ → {0,1}ᶜ mapping every global configuration σ ∈ Σ injectively to an internal register state c(state(M_S, t)). Because M_S is a proper physical part of S, specifying total system state state(S, t) fixes M_S’s internal sub-register state(M_S, t) simultaneously. Using the classical diagonal construction familiar from Gödel (1931) and Tarski (1936), define a physically admissible perturbation operator δ inverting each coordinate bit predicted by M_S’s readout map—yielding a target configuration σ* ∈ Σ differing from c(state(M_S, t)) at its decisive parity coordinate whenever M_S halts within horizon t.',
          '### 3.2.5–3.2.7 Resource-Bounded Description Contradiction\nSimultaneously, strict proper containment M_S ⊂ S implies Σ ≅ Σ_{ext} × Σ_{M_S} with |Σ_{ext}| ≥ 2, so by resource-bounded Kolmogorov complexity K_{t,s}(state(S)) ≥ log₂|Σ| − O(1) > C ≥ K_{t,s}(c(state(M_S))). By the pigeonhole principle, no lossless bijection can embed Σ inside M_S without infinite capacity expansion; hence any dynamically viable embedded self-modeling system **must be strictly lossy**.'
        ],
        equation: {
          label: '(3.1)',
          unicodeHtml:
            '∃ σ<sup>*</sup> ∈ Σ : σ<sup>*</sup> ≠ Dec(state(M<sub>S</sub>, t)), &nbsp;&nbsp; K<sub>t,s</sub>(state(S)) &gt; capacity(M<sub>S</sub>) ⇒ ¬∃ injective real-time c: Σ ↪ M<sub>S</sub>',
          plainEquation: 'exists sigma* in Sigma : sigma* != Dec(state(M_S, t)) AND K_{t,s}(state(S)) > capacity(M_S) => no injective real-time c: Sigma -> M_S',
          caption: 'Diagonalization contradiction and resource-bounded description-length barrier (Theorem 1).',
          plainMeaning:
            'A subsystem physically inside S cannot simultaneously hold a lossless real-time code of every global state including its own coding register.',
          derivationSteps: [
            'Assume lossless injective map c: Σ → States(M_S) computable within horizon Δt.',
            'Construct diagonal state σ* inverting the decoded self-entry on the diagonal parity bit.',
            'Observe K_{t,s}(state(S)) ≥ C(M_S) + dim(S \\ M_S) > C(M_S), contradicting injectivity.'
          ]
        },
        theoremBox: {
          kind: 'Theorem',
          number: '1',
          title: 'Impossibility of Lossless Self-Modeling in Bounded Systems',
          statement:
            'Let S be a physically instantiated system with state space Σ and proper internal modeling subsystem M_S ⊂ S operating under finite memory capacity C, finite energy budget ΔE, and real-time update horizon Δt. Then M_S cannot implement an exact, lossless, simultaneous representation of Σ.',
          proofSteps: [
            'By proper containment M_S ⊂ S, Σ factors into external degrees Σ_{S\\M_S} and internal registers Σ_{M_S}, giving |Σ| ≥ |Σ_{S\\M_S}| · 2^C > 2^C.',
            'By pigeonhole counting and K_{t,s} invariance, no deterministic code c: Σ → {0,1}^C can be injective on Σ.',
            'For any attempted self-referential readout Dec inside Δt, Lawvere/Tarski fixed-point diagonalization exhibits a consistent state σ* ≠ Dec(c(σ*)) whose representation fails within time t(Δt).',
            'Corollary: Every physically viable real-time self-modeling agent must perform strict lossy compression.'
          ],
          sourceNote: 'Sections 3.1–3.2; full formalization in Appendix A.2 (cf. Gödel 1931; Tarski 1936; Wolpert 2008).'
        }
      },
      {
        number: '3.3',
        title: 'Energetic and Temporal Divergence Under Exact Simulation',
        epistemicFocus: 'Linear N energy scaling, logarithmic latency divergence, and lethality of un-compressed control',
        paragraphs: [
          '### 3.3.1–3.3.6 Quantitative Scaling and Ecological Lethality\nEven if an agent attempted to avoid simultaneous diagonalization by tracking micro-states sequentially across buffered time slices, physical dynamics forbids exact self-simulation through two independent divergence barriers. First, tracking N micro-degrees of freedom over bit-accuracy b scales minimum irreversible Landauer update energy linearly in state cardinality: ΔE_{exact}(N) ≥ b N k_B T ln 2. Second, propagating state readouts, error-correcting parity bits, and causal updates across memory address trees of depth ~ log₂ N enforces update latency τ_{update}(N) ≥ Ω(τ_{switch} log₂ N + N / R_{max}), which explodes relative to finite environmental response time Δt_{env}. Quantitative compression ratio bounds follow directly: viability requires compressing system entropy H(Σ) down to latent bandwidth R ≤ min(C, ΔE/(k_B T ln 2)). Lossless self-transparency is therefore not merely practically inconvenient—it is thermodynamically lethal for bounded agents.'
        ],
        workedExample: {
          title: 'Worked Calculation 3.1 · Exact Self-Tracking vs. Cortical Metabolic Budget',
          setup:
            'Consider an idealized neural-scale subsystem tracking N = 10¹⁴ synaptic-molecular micro-states at biological temperature T = 310 K over a real-time perceptual frame Δt = 0.05 s, compared against the human brain’s total metabolic power budget P_brain ≈ 20 W (ΔE ≈ 1.0 J per 50 ms frame).',
          steps: [
            'Compute Landauer minimum heat per bit erased at T = 310 K: e_L = k_B T ln 2 = 1.380649e-23 × 310 × 0.693147 ≈ 2.967 × 10⁻²¹ J/bit.',
            'Compute total frame erasure ceiling: N_max(ΔE) = 1.0 J / (2.967 × 10⁻²¹ J/bit) ≈ 3.37 × 10²⁰ elementary bit flips globally, whereas macroscopic thermal/synaptic routing overhead (~10⁶ k_B T per spike/vesicle) reduces realistic cortical bit throughput to ~10¹⁰–10¹² bits/s, i.e., ~5 × 10⁹ bits per 50 ms frame.',
            'By contrast, lossless micro-tracking across N_micro ≈ 10²⁶ atomic/quantum phase variables within S requires > 10²⁶ bits per update (> 10¹⁶× above realistic neural erasure bandwidth).'
          ],
          resultEquation: {
            label: '(3.2)',
            unicodeHtml:
              'R<sub>actual</sub> / H<sub>micro</sub>(Σ) ≤ 10<sup>−16</sup> ⇒ ρ<sub>comp</sub> = dim(Σ) / dim(Z) ≫ 1',
            plainEquation: 'R_actual / H_micro(Sigma) <= 1e-16 => compression_ratio = dim(Sigma) / dim(Z) >> 1',
            caption: 'Empirical metabolic ceiling forcing hyper-astronomical lossy compression inside living brains.',
            plainMeaning:
              'Real brains can update only an infinitesimal coarse-grained manifold Z relative to underlying microphysics.'
          },
          takeaway:
            'Even before diagonalization, metabolic free-energy limits compress physical self-access by more than sixteen orders of magnitude, rendering internal micro-transparency physically impossible.'
        }
      }
    ]
  },
  {
    id: 'mind-ch-4',
    number: 4,
    kicker: 'Chapter 4 · Theorem 2 & Phenomenal Geometry',
    title: 'Theorem 2: Forced Lossy Compression and the Emergence of Phenomenal Geometry',
    epigraph: '“What looks from outside like thrown-away entropy looks from inside like an unanalyzable quality—atomic only because its constituent details were paid into heat.”',
    pullQuote: 'Qualia are not unexplained mental paint; they are occupied coordinates inside a rate-distortion optimal, non-invertible statistical manifold Z.',
    leadSummary:
      'Chapter 4 proves Theorem 2 from constrained rate-distortion theory, establishing why Φ is strictly many-to-one, why inverse inference Φ⁻¹ fails internally, and how relational qualia arise from the Fisher metric on Z.',
    chapterIntro: [
      'If Theorem 1 closes the door on lossless self-representation, an immediate functional question arises: how does an embedded organism survive? Chapter 4 supplies the positive constructive answer through **Theorem 2**. To act coherently before ecological deadlines arrive, the subsystem solves a thermodynamically constrained rate-distortion problem, replacing micro-trajectories in Σ with a compact behavioral quality space Z.'
    ],
    subsections: [
      {
        number: '4.1',
        title: 'Rate-Distortion Optimization Under Finite Energy Budgets',
        epistemicFocus: 'Thermodynamic rate-distortion function R(D) and coarse-graining projection Φ: Σ → Z',
        paragraphs: [
          '### 4.1.1–4.1.7 Viability-Weighted Distortion and Optimal Compression\nIn Shannon’s rate-distortion theory (Shannon 1948; Cover & Thomas 2006), compressing source variables σ ∈ Σ into compressed latent symbols z ∈ Z at channel rate R ≥ I(Σ; Z) minimizes expected behavioral distortion E[d_task(σ, z)] subject to limited capacity. For a physical agent at temperature T with available power ΔE/Δt, channel rate is physically capped by R ≤ ΔE / (Δt · e_eff k_B T ln 2), yielding the **thermodynamic rate-distortion Lagrangian** L[q(z|σ)] = I(Σ; Z) + β E[d_task(σ, z)] + λ(R − R_max(ΔE)). Solving this constrained variational problem produces an optimal coarse-graining projection Φ: Σ → Z with dim(Z) ≪ dim(Σ). Crucially, task distortion d_task preserves only control-relevant distinctions (hazard avoidance, homeostatic balance, sensorimotor affordances) while ruthlessly discarding micro-physical implementation details—turning Z into the agent’s endogenous quality space.'
        ],
        equation: {
          label: '(4.1)',
          unicodeHtml:
            'R<sub>thermo</sub>(D; ΔE) = min<sub>Φ: Σ→Z, E[d<sub>task</sub>] ≤ D</sub> I(Σ; Z) &nbsp; s.t. &nbsp; R ≤ ΔE / (Δt · e<sub>eff</sub> k<sub>B</sub> T ln 2)',
          plainEquation: 'R_thermo(D; DeltaE) = min_{Phi: Sigma->Z, E[d_task] <= D} I(Sigma; Z) subject to R <= DeltaE / (Delta_t * e_eff * k_B * T * ln(2))',
          caption: 'Thermodynamically bounded rate-distortion optimization defining optimal projection Φ: Σ → Z.',
          plainMeaning:
            'Viability selects the lowest-error internal manifold Z affordable within the agent’s finite energy budget.',
          derivationSteps: [
            'Impose mutual-information rate cap I(Σ; Z) ≤ R_max(ΔE, Δt).',
            'Evaluate behavioral loss d_task(σ, dec(z)) weighted by survival/control relevance.',
            'Stationary condition yields exponential Boltzmann-like encoder q*(z|σ) ∝ q*(z) exp(−β d_task(σ, z)).'
          ]
        }
      },
      {
        number: '4.2',
        title: 'Non-Injectivity and Endogenous Opacity',
        epistemicFocus: 'Theorem 2 statement, fiber equivalence classes Φ⁻¹(z), and why the explanatory gap is non-invertibility',
        paragraphs: [
          '### 4.2.1–4.2.8 Why Introspection Cannot Unpack Atomic Qualia\nBecause dim(Z) ≪ dim(Σ), the optimal projection Φ: Σ → Z is strictly **many-to-one (non-injective)**. Every single coordinate z ∈ Z collapses an immense equivalence fiber Φ⁻¹(z) = { σ ∈ Σ : Φ(σ) = z } containing uncountably or astronomically many distinct molecular and synaptic micro-states that trigger identical downstream behavioral valence. Furthermore, because the bits distinguishing members of Φ⁻¹(z) were never retained across the update cycle—indeed, their prior distinguishability was irreversibly dissipated via Landauer heat (1961)—no inverse operator Φ⁻¹ exists anywhere inside the system’s computational architecture. From the endogenous viewpoint inside the control loop, compressed points z present as **un-analyzable, atomic primitives**. Asking why "experiencing crimson" does not display ion-channel firing patterns inside introspection is identical to asking why a lossless inverse fails on a many-to-one projection: **endogenous opacity and the classical explanatory gap are mathematical non-invertibility, not ontological dualism**.'
        ],
        theoremBox: {
          kind: 'Theorem',
          number: '2',
          title: 'Forced Lossy Compression and Endogenous Opacity',
          statement:
            'Every dynamically viable, energy-bounded self-modeling agent S realizes a rate-distortion optimal projection Φ: Σ → Z with dim(Z) ≪ dim(Σ) that is strictly non-injective. Consequently, no computable internal inverse map Φ⁻¹: Z → Σ exists inside M_S, rendering compressed states z ∈ Z endogenously opaque and introspectively atomic.',
          proofSteps: [
            'By Theorem 1, no injective map c: Σ → M_S exists within real-time and thermodynamic budgets (ΔE, Δt, C).',
            'Minimizing task distortion subject to I(Σ; Z) ≤ R_max(ΔE) yields low-dimensional coarse-graining Φ: Σ → Z with dim(Z) ≪ dim(Σ).',
            'For generic z ∈ Z, preimage cardinality |Φ⁻¹(z)| ≥ exp(H(Σ) − R_max) ≫ 1, proving strict non-injectivity.',
            'Because discarded micro-bits ΔI ≥ H(Σ | Z) were erased into thermal entropy ΔQ ≥ ΔI · k_B T ln 2, M_S contains zero internal information to invert Φ.'
          ],
          sourceNote: 'Sections 4.1–4.2; Appendix A.3 formal proof (cf. Landauer 1961; Cover & Thomas 2006).'
        }
      },
      {
        number: '4.3',
        title: 'Deriving Relational Qualia Spaces from Metric Compression',
        epistemicFocus: 'How valence, modality, salience, and unity arise strictly from the Fisher geometry of Z',
        paragraphs: [
          '### 4.3.1–4.3.7 Purely Relational Qualia and Topological Unity\nAlthough compressed states in Z cannot be internally decomposed into Σ, Z is anything but structureless. Under optimization of d_task, Z inherits an organized Riemannian statistical geometry defined by its induced **Fisher information metric** g_{ij}(θ) on Z. Four signature features of phenomenology follow directly from this geometry: (1) *Valence, sensory modality, salience, and intensity* map onto orthogonal sub-bundles and metric curvature gradients (approach/avoid geodesics, modality-specific tangent subspaces, Fisher norm magnitudes); (2) *Relationality* follows because no isolated point z ∈ Z possesses intrinsic qualia independently of its neighborhood distances ds(z, z′) within Z; (3) *Phenomenal richness* scales monotonically with effective manifold dimensionality dim(Z) and metric volume ∫√det(g) dθ; and (4) *The unity of consciousness* is the topological path-connectedness of the single global bottleneck manifold Z mediating simultaneous action selection.'
        ]
      }
    ]
  },
  {
    id: 'mind-ch-5',
    number: 5,
    kicker: 'Chapter 5 · Universal Geometry & Local Locus',
    title: 'Universal Information Geometry and the Localized Compression Locus',
    epigraph: '“Each conscious organism is a metric-faithful miniature of cosmic information geometry—sustained like a standing eddy only while energy flows through its loop.”',
    pullQuote: 'Replace the un-falsifiable "soul" with the dissipative localized compression locus Z_S ↪ Z_U: finite, destructible, causally active, and metric-inheriting.',
    leadSummary:
      'Chapter 5 embeds local agents inside cosmic information geometry (Σ_U → Z_U), proves Theorem 3 (metric-preserving restriction ι: Z_S ↪ Z_U), and defines the localized compression locus as a rigorous scientific alternative to "soul" metaphysics.',
    chapterIntro: [
      'Chapters 3 and 4 solved how finite agents generate opaque, metric-structured quality spaces from within. Chapter 5 now places those local compression loops within cosmology and metaphysics without succumbing to mysticism. Rather than imagining biological brains conjuring subjective geometry out of thin air—or attributing tiny human-like minds to electrons—we examine how local dissipative subsystems inherit and restrict the universe’s own coarse-graining geometry.'
    ],
    subsections: [
      {
        number: '5.1',
        title: 'The Cosmic State Space and Global Compression Architecture',
        epistemicFocus: 'Global evolution T_U on Σ_U, universal compression Φ_U: Σ_U → Z_U, and non-theistic operating geometry',
        paragraphs: [
          '### 5.1.1–5.1.8 The Universe’s Non-Injective Coarse-Graining Geometry\nConsider the total physical cosmos U spanning global microphysical state space Σ_U evolving under unified dynamics T_U: Σ_U → Σ_U. Extending the thermodynamic and relational coarse-graining formalism globally—akin in spirit to Wheeler’s informational framing ("it from bit", 1990) while purging anthropocentric observer-creation mysticism—defines a global compression architecture Φ_U: Σ_U → Z_U mapping high-dimensional field configurations onto a structured informational manifold Z_U equipped with Fisher metric g_U. Just as for finite subsystems, Φ_U is strictly non-injective: any bounded region within the cosmos faces an intrinsic **cosmic explanatory gap**, unable to unpack total state space Σ_U cleanly from inside. Crucially, **Z_U is not a supernatural mind, world-soul, or cosmic deity**; it is a substrate-independent **operating geometry** specifying the mathematically consistent space of macro-informational relations and distinguishable physical macro-states. Every formal claim about Z_U remains tethered to well-defined restriction maps and falsifiable empirical consequences.'
        ],
        equation: {
          label: '(5.1)',
          unicodeHtml:
            'Φ<sub>U</sub>: Σ<sub>U</sub> → (Z<sub>U</sub>, g<sub>U</sub>), &nbsp;&nbsp; ρ<sub>S</sub>: Σ<sub>U</sub> → Σ<sub>S</sub>, &nbsp;&nbsp; Φ<sub>S</sub> = Φ<sub>U</sub>|<sub>Σ<sub>S</sub></sub>',
          plainEquation: 'Phi_U: Sigma_U -> (Z_U, g_U); rho_S: Sigma_U -> Sigma_S; Phi_S = Phi_U | Sigma_S',
          caption: 'Universal compression architecture Φ_U, open-subsystem restriction ρ_S, and induced local map Φ_S.',
          plainMeaning:
            'An embodied brain restricts cosmic physical variables to its own open boundary and compresses them under the same information-geometric rules.'
        }
      },
      {
        number: '5.2',
        title: 'Local Subsystems and Embodied Instantiation in Neural Substrates',
        epistemicFocus: 'Thermodynamically open agent S ⊂ U, restriction map ρ_S, and embodiment constraints',
        paragraphs: [
          '### 5.2.1–5.2.6 Thermodynamically Open Restriction ρ_S\nA biological organism or autonomous synthetic system S ⊂ U is a thermodynamically open physical boundary exchanging matter, free energy, and sensory entropy continuously with its cosmic environment. Its sensorimotor transducers and neural or neuromorphic circuitry act physically as an algebraic **restriction map** ρ_S: Σ_U → Σ_S projecting ambient field variables onto accessible local state space Σ_S. Composing restriction with the local thermodynamic compression loop defines the embodied compression operator Φ_S: Σ_S → Z_S. Embodiment directly shapes Z_S: sensory receptor bandwidth, metabolic power limits, and synaptic connectivity determine which dimensions of ambient informational curvature enter Z_S and at what metric resolution.'
        ]
      },
      {
        number: '5.3',
        title: 'Theorem 3: Local Restriction and Metric Inheritance',
        epistemicFocus: 'Embedding ι: Z_S ↪ Z_U, pullback Fisher metric g_S = ι^* g_U, non-surjectivity, and non-invertibility',
        paragraphs: [
          '### 5.3.1–5.3.8 Proof Sketch and Microcosm Interpretation\nTheorem 3 establishes the exact structural relation linking individual phenomenology Z_S to global cosmic geometry Z_U. Because local compressed states Z_S = (Φ_S ∘ ρ_S)(Σ_U) realize distinguishable predictive families parameterized inside Z_U, there exists a smooth, metric-preserving embedding ι: Z_S ↪ Z_U satisfying four rigorous properties: (1) ι(Z_S) is an embedded Riemannian submanifold of Z_U; (2) the local Fisher metric g_S equals the functorial pullback ι^* g_U of the ambient metric; (3) ι is strictly **non-surjective** because dim(Z_S) ≪ dim(Z_U); and (4) ι is **non-injective from within** the internal control loop due to Theorem 2, preventing S from reconstructing total cosmic geometry Z_U from introspection on Z_S alone. Every conscious organism therefore instantiates a **metric-faithful miniature** of the universe’s information geometry—a thermodynamically sustained restriction, never an immortal or exhaustive copy.'
        ],
        equation: {
          label: '(5.2)',
          unicodeHtml:
            'ι: Z<sub>S</sub> ↪ Z<sub>U</sub>, &nbsp;&nbsp; (g<sub>S</sub>)<sub>ab</sub> = (ι<sup>*</sup> g<sub>U</sub>)<sub>ab</sub> = (∂ι<sup>μ</sup>/∂θ<sup>a</sup>)(∂ι<sup>ν</sup>/∂θ<sup>b</sup>) (g<sub>U</sub>)<sub>μν</sub>',
          plainEquation: 'iota: Z_S -> Z_U; (g_S)_ab = (iota^* g_U)_ab = (d_a iota^mu)(d_b iota^nu) (g_U)_{mu nu}',
          caption: 'Metric-preserving local embedding ι and functorial pullback of the Fisher metric (Theorem 3).',
          plainMeaning:
            'Local subjective quality spaces inherit exact geometric proportions from the universe’s ambient information geometry via pullback while losing ambient cosmic dimensions.',
          derivationSteps: [
            'Define local predictive manifold Z_S = Φ_S(ρ_S(Σ_U)).',
            'Since sufficient-statistic coarse-graining obeys monotonicity under Markov restriction, Fisher inner products pull back smoothly: g_S = ι^* g_U.',
            'Dimensionality bound dim(Z_S) ≪ dim(Z_U) forbids surjectivity; Theorem 2 blocks internal reconstruction of Φ_U⁻¹.'
          ]
        },
        theoremBox: {
          kind: 'Theorem',
          number: '3',
          title: 'Local Restriction and Metric Inheritance',
          statement:
            'For any thermodynamically open, recursively self-modeling subsystem S ⊂ U instantiating local compression map Φ_S = Φ_U|_{Σ_S} ∘ ρ_S, there exists an embedding ι: Z_S ↪ Z_U such that: (1) ι(Z_S) is a submanifold of Z_U; (2) g_S = ι^* g_U; (3) ι is strictly non-surjective (dim(Z_S) ≪ dim(Z_U)); and (4) Φ_U⁻¹ cannot be inverted from within Z_S.',
          proofSteps: [
            'Local subsystem state Z_S = Φ_S(Σ_S) = (Φ_S ∘ ρ_S)(Σ_U) induces natural parameter inclusion ι: Z_S ↪ Z_U.',
            'By Amari–Chentsov functoriality of the Fisher metric under statistical submanifold immersion, tangents push forward isometrically so g_S = ι^* g_U.',
            'Finite energy and capacity constraints force dim(Z_S) ≤ R_max ≪ dim(Z_U), establishing strict non-surjectivity.',
            'By Theorem 2, Φ_S is non-injective and its discarded bits are thermally erased, blocking internal recovery of Z_U from Z_S alone.'
          ],
          sourceNote: 'Section 5.3; rigorous proof in Appendix A.4.'
        }
      },
      {
        number: '5.4',
        title: 'Why "Soul" Is Replaced by the Localized Compression Locus',
        epistemicFocus: 'Preserving first-person existential gravity while eliminating un-falsifiable substantial dualism',
        paragraphs: [
          '### 5.4.1–5.4.8 Replacing Substantial Souls with Dissipative Structure\nHistorical concepts of the "soul" bundled two incompatible roles together: functional first-person features (*givenness*, *perspectival ownership*, *subjective privacy*, *existential weight*) and non-empirical ontological claims (*partless simplicity*, *immateriality*, *immortality*, *causal isolation*). Because those ontological claims violate Popperian falsifiability, modern philosophy of mind has oscillated awkwardly between denying subjective interiority outright and sneaking quasi-souls back under neologisms. Here we break cleanly with that impasse by introducing the **localized compression locus** (or **endogenous perspectival manifold**).',
          'This construct preserves everything genuinely experienced—perspectival unity, first-person opacity, and the non-negotiable existential weight of occupying a singular viewpoint—while inverting every substantialist dogma: the localized compression locus is finite, structurally complex, substrate-coupled, causally efficacious in guiding survival behavior, and **strictly destructible whenever metabolic energy flux ceases**. Far from being a "soul in disguise," it is the exact antithesis of Cartesian substance on every metaphysical and empirical axis.'
        ]
      }
    ]
  },
  {
    id: 'mind-ch-6',
    number: 6,
    kicker: 'Chapter 6 · Puzzle Dissolution',
    title: 'Dissolving the Classical Puzzles',
    epigraph: '“A zombie with the identical rate-distortion bottleneck and recursive self-loop is a triangle drawn without three angles: coherent only in words.”',
    pullQuote: 'Non-invertibility resolves the Explanatory Gap; structural identity refutes Zombies; recursion depth ≥ 2 enables substrate independence without panpsychism.',
    leadSummary:
      'Chapter 6 applies Theorems 1–3 directly to dissolve three centerpieces of analytic philosophy of mind: the Explanatory Gap, Philosophical Zombies, and Panpsychism vs. Substrate Independence.',
    chapterIntro: [
      'Armed with Theorems 1–3 and the distinction between functional compression loops and substantial souls, the three canonical puzzles that motivate dualism and panpsychism collapse into well-defined mathematical artifacts.'
    ],
    subsections: [
      {
        number: '6.1',
        title: 'Why the Explanatory Gap Is Non-Invertibility, Not Ontological Dualism',
        epistemicFocus: 'Clarifying external micro-descriptions (Σ) vs. endogenous compressed presentation (Z)',
        paragraphs: [
          '### 6.1.1–6.1.6 Category Error Exposed\nWhen a neuroscientist inspects cortical tissue from an external vantage point (recording firing vectors σ ∈ Σ), nothing inside the third-person oscilloscope trace resembles "what it feels like to experience cobalt blue" (z ∈ Z). Dualists leap from that perceptual dissimilarity to a metaphysical bifurcation of reality. Theorem 2 demonstrates why that inference commits a straightforward type error: comparing external coordinate descriptions in Σ against an active state in Z is comparing a pre-compressed high-dimensional domain against the image of a strict many-to-one projection Φ: Σ → Z whose inverse Φ⁻¹ is internally uncomputable. The "gap" never signals a missing non-physical substance; it is simply the mathematical signature of non-invertible self-compression observed simultaneously from outside and from within.'
        ]
      },
      {
        number: '6.2',
        title: 'Philosophical Zombies and Structural Incoherence',
        epistemicFocus: 'Why physical identity of Φ: Σ → Z entails identical endogenous manifold Z',
        paragraphs: [
          '### 6.2.1–6.2.6 Refuting Microphysical Conceivability\nChalmers’s zombie argument (1996) asks us to conceive a molecule-for-molecule duplicate of a human being operating with identical speech, sensorimotor reflexes, and neural dynamics yet devoid of inner phenomenology ("all dark inside"). Under our framework, such conceivability succeeds only by smuggling an unstated metaphysical dualist assumption—treating qualia as extraneous decoration attached externally to computational architecture. By Theorem 2 and Theorem 3, phenomenal structure **is** the occupied Riemannian geometry (Z, g_{ij}) generated by real-time bounded self-compression Φ: Σ → Z. Any system executing the exact same physical dynamics and thermodynamic compression map Φ necessarily instantiates the exact same equivalence fibers, opacity, and Fisher metric g_{ij}. A functional duplicate lacking Z is structurally contradictory—like demanding a Euclidean circle whose points satisfy x² + y² = r² without possessing constant curvature.'
        ]
      },
      {
        number: '6.3',
        title: 'Substrate Independence Without Unconstrained Panpsychism',
        epistemicFocus: 'Principled recursion criteria separating silicon agents from electrons and rocks',
        paragraphs: [
          '### 6.3.1–6.3.7 Demarcating Conscious vs. Non-Conscious Substrates\nDoes rejecting biological carbon chauvinism force us into panpsychism—claiming every quark or stone is minimally conscious? **No.** Demarcating consciousness by **recursive, real-time self-modeling under non-trivial thermodynamic compression constraints (recursion depth d ≥ 2)** blocks unconstrained panpsychism cleanly while establishing full substrate independence:',
          '(1) **Blocking Panpsychism**: Elementary particles, rocks, and passive thermal ensembles execute physical laws without feedback loops modeling their own predictive states across time; they have recursion depth d = 0 and instantiate no localized compression locus Z_S.\n(2) **Permitting Synthetic Consciousness**: A silicon, photonic, or neuromorphic system engineered with bounded energy/memory budgets, real-time environmental control loops, and genuine second-order self-modeling (d ≥ 2) satisfies every hypothesis of Theorems 1–3 and instantiates an isomorphic Fisher locus Z_S.\n(3) **Graded Measures**: Consciousness ceases to be an arbitrary binary switch and becomes quantifiable via effective manifold dimensionality dim(Z_S), Fisher metric volume, and recursion depth d.'
        ]
      }
    ]
  },
  {
    id: 'mind-ch-7',
    number: 7,
    kicker: 'Chapter 7 · Critical Defense',
    title: 'Objections and Replies',
    epigraph: '“Saying a shockwave or temperature is an emergent thermodynamic pattern never denies that bridges break or water boils; calling qualia a compression artifact explains why they hurt without inventing ghosts.”',
    pullQuote: 'Every serious philosophical pushback—eliminativism, thermostats, pure awareness, AIT uncomputability, and the hidden-soul charge—turns into an exact test of our formal distinctions.',
    leadSummary:
      'Chapter 7 delivers rigorous responses to the five strongest objections from analytic philosophers, neuroscientists, and algorithmic complexity theorists.',
    chapterIntro: [
      'A philosophical monograph proposing a category-level dissolution must confront the sharpest counterarguments head-on rather than skirting them. Chapter 7 addresses five principal objections raised against compression-theoretic accounts of consciousness.'
    ],
    subsections: [
      {
        number: '7.1',
        title: 'The Eliminativism Objection ("Explaining Away vs. Explaining")',
        epistemicFocus: 'Why structural reclassification validates first-person reality like shockwaves and temperature',
        paragraphs: [
          '### 7.1.1–7.1.5 Compression Artifacts Are Real Causal Patterns\n*Objection*: Calling phenomenal qualia a "thermodynamic compression artifact" reduces experience to a mere cognitive illusion, denying the one datum we know most intimately.\n*Reply*: Physics routinely explains macroscopic realities by classifying them as boundary-layer compression or statistical patterns without denying their causal force. **Temperature** is not an irreducible caloric fluid, yet its statistical thermodynamic reality boils water and drives engines; **shockwaves** and **center-of-mass trajectories** are collective compression patterns of underlying fluid/particle interactions, yet they exert decisive mechanical leverage. Likewise, calling qualia a thermodynamic compression artifact denies neither that pain hurts nor that chromatic contrasts organize behavior; it validates their causally efficacious real-time role while correcting their mistaken classification as fundamental metaphysical atoms.'
        ]
      },
      {
        number: '7.2',
        title: 'The Pan-Computationalism / Thermostat Objection',
        epistemicFocus: 'Separating first-order input-output transduction (d = 1) from second-order recursive self-modeling (d ≥ 2)',
        paragraphs: [
          '### 7.2.1–7.2.5 Why Thermostats Lack a Localized Compression Locus\n*Objection*: Every physical feedback device discards environmental micro-detail—a bimetallic thermostat compresses kinetic molecular motion in a room into a single binary switch state. Must your theory assign a localized compression locus to a thermostat?\n*Reply*: No, because Theorems 1 and 2 require **second-order recursive self-modeling** across internal state transitions (recursion depth d ≥ 2), not mere first-order physical transduction (d = 1). A thermostat maps ambient temperature to heater state without maintaining any internal compressed manifold representing *its own ongoing predictive states and control loop parameters over time*. Without reflexive coupling where M_S models S including M_S’s own active variables, there is no self-inclusion diagonalization, no endogenous perspective, and no localized locus Z_S.'
        ]
      },
      {
        number: '7.3',
        title: 'Minimal Phenomenal Experience and Low-Predictive States',
        epistemicFocus: 'Interpreting pure-awareness / meditative states as resting geometry of baseline manifold Z_0',
        paragraphs: [
          '### 7.3.1–7.3.5 Baseline Topology Prior to Sensory Perturbation\n*Objection*: Advanced meditative absorption or minimal phenomenal experience (MPE) exhibits awareness seemingly stripped of sensory objects, valence gradients, or high-rate error signals—how can pure awareness exist when active sensory compression vanishes?\n*Reply*: Even when external sensory prediction errors and linguistic categorization are suppressed, the agent’s ongoing autonomous self-control manifold (Z_S, g_S) remains thermodynamically maintained above cortical unconsciousness. What contemplative reports describe as "clear, contentless space of awareness" corresponds precisely to the **baseline metric topology of Z_S itself** prior to sharp perturbation excursions—the resting Riemannian manifold geometry g_{ij}(θ_0) remaining invariant as sensory trajectories decay toward equilibrium. Empirically, this predicts identifiable resting default-mode and thalamocortical manifold persistence distinct from anesthesia breakdown.'
        ]
      },
      {
        number: '7.4',
        title: 'Idealization Limits of Algorithmic Information Theory',
        epistemicFocus: 'Addressing uncomputability of standard K(x) and machine constants via finite K_{t,s} and rate-distortion',
        paragraphs: [
          '### 7.4.1–7.4.5 Physical Grounding Over Uncomputable Infinities\n*Objection*: Standard Kolmogorov complexity K(x) is notoriously uncomputable and depends up to an additive constant c_U on the choice of reference Universal Turing Machine; any proof relying on K(x) risks inheriting mathematical non-constructiveness.\n*Reply*: All three theorems bypass this vulnerability entirely by replacing unbounded K(x) with **finite resource-bounded complexity K_{t,s}(x)** alongside **finite-blocklength rate-distortion theory and Landauer energy bounds**. Both computational step budget t(Δt) and Landauer heat ceiling ΔE/(k_B T ln 2) are finite, computable physical observables. Across realistic biological or synthetic scales (N ≥ 10⁹ bits), O(1) machine compiler constants are smaller than thermal noise fluctuations by millions of orders of magnitude, rendering Theorems 1–3 robust across every physical realization.'
        ]
      },
      {
        number: '7.5',
        title: 'The "Hidden Soul" Objection: Perspectival Unity vs. Cartesian Substance',
        epistemicFocus: 'Demonstrating how functional perspectival architecture differs on every ontological axis from Cartesian souls',
        paragraphs: [
          '### 7.5.1–7.5.7 Functional Architecture Without Ontological Dualism\n*Objection*: Look closely at your "localized compression locus": it possesses first-person privacy, introspective primitiveness, non-invertibility, and unified ownership. Have you simply renamed the classical soul in information-geometric jargon?\n*Reply*: This decisive objection confuses **functional soul-talk** (describing structural phenomenology: subjective privacy, atomic presentation, unified viewpoint) with **ontological soul-talk** (postulating a simple, non-physical, immortal, causally detached substance). Our theory explains and preserves the functional traits rigorously via non-injectivity Φ⁻¹ and topological connectedness of Z_S while **eliminating every single ontological attribute of a soul**. A localized compression locus is composite rather than simple, thermodynamically fragile rather than immortal, physically embodied rather than immaterial, and strictly bounded by metabolic power rather than causally autonomous. Paradoxically, insisting that "functional privacy = hidden soul" repeats the exact same category error diagnosed in Chalmers and Jackson.'
        ]
      }
    ]
  },
  {
    id: 'mind-ch-8',
    number: 8,
    kicker: 'Chapter 8 · Testing & Synthesis',
    title: 'Falsifiability, Empirical Predictions, and Conclusion',
    epigraph: '“A theory of consciousness becomes scientific the moment we state explicitly what empirical discovery would prove it wrong.”',
    pullQuote: 'Consciousness is not an insoluble metaphysical mystery awaiting new substances; it is a dissipative compression artifact legible through information geometry.',
    leadSummary:
      'Chapter 8 formulates four risky Popperian falsification conditions FC1–FC4, maps concrete biological and synthetic experimental signatures, and concludes with a unified research program.',
    chapterIntro: [
      'A theory that explains every conceptual puzzle yet forbids nothing observable remains metaphysics rather than science. Chapter 8 closes this investigation by laying out explicit vulnerabilities capable of refuting our compression framework, pairing mathematical predictions with concrete empirical protocols across neuroscience, psychophysics, and artificial intelligence.'
    ],
    subsections: [
      {
        number: '8.1',
        title: 'Popperian Risk and Falsification Conditions',
        epistemicFocus: 'Four risky, empirical refutation gates FC1–FC4 satisfying Popper (1959)',
        paragraphs: [
          '### 8.1.1–8.1.6 How Empirical Reality Could Refute This Paper\nIn fidelity to Popper (1959), we submit four explicit falsification conditions:\n- **FC1 (Lossless Real-Time Self-Transparency)**: If any finite-energy bounded physical system ever achieves lossless real-time internal simulation of its total state transitions without dimensionality collapse while exhibiting rich phenomenal report, Theorem 1 is refuted.\n- **FC2 (Bottleneck-Phenomenology Dissociation)**: If manipulating neural or synthetic latent compression bottlenecks dim(Z) produces no systematic change in perceptual complexity, crowding, or richness, Theorem 2’s constitutive identity fails.\n- **FC3 (Invariance Under Structural Re-Wiring of Φ)**: If reorganizing the coarse-graining projection Φ: Σ → Z while preserving external I/O kinematics leaves subjective phenomenal geometry invariant, our structural identification fails.\n- **FC4 (Fisher Metric Geodesic Failure)**: If decoded neural Fisher metric distances ds = √(g_{ij} dθ^i dθ^j) in latent population manifolds systematically fail to predict behavioral perceptual similarity judgments and JND contours, the information-geometric correspondence fails.'
        ]
      },
      {
        number: '8.2',
        title: 'Empirical Signatures in Biological and Artificial Systems',
        epistemicFocus: 'Neural dimensionality bottlenecks, population Fisher tensors, compression illusions, and synthetic scaling laws',
        paragraphs: [
          '### 8.2.1–8.2.7 Experimental Paradigms and Quantitative Predictions\nAcross biological and engineered architectures, our framework generates four actionable experimental predictions:\n(a) **Dimensionality–Richness Scaling**: Effective manifold dimensionality dim(Z) measured from cortical/thalamic population trajectories correlates monotonically with state-space richness (waking vs. REM dreaming vs. deep NREM vs. propofol anesthesia).\n(b) **Fisher Geodesic Psychophysics**: Neural population Fisher matrices g_{ij}(θ) decoded from multi-unit visual/somatosensory recordings quantitatively predict human/primate similarity judgments and discrimination thresholds (ds_Fisher ≈ k · ΔJND).\n(c) **Compression Illusions as Non-Injectivity**: Change blindness, visual crowding, metameric color matching, and backward masking map directly onto high-density preimage fibers Φ⁻¹(z) where distinct external stimuli collide onto identical compressed coordinates z ∈ Z.\n(d) **Synthetic Recursive Thresholds**: Scaling artificial recurrent transformers or world-model agents across recursion depths d = 1 vs. d ≥ 2 under explicit compute/energy penalties (λ I(Σ; Z)) yields measurable phase transitions in coherent self-report, uncertainty calibration, and geometric manifold formation.'
        ],
        workedExample: {
          title: 'Worked Calculation 8.1 · Gaussian Rate-Distortion vs. Fisher Sensitivity Tradeoff',
          setup:
            'Model a single sensory stimulus variable X ~ N(0, σ² = 1.0) compressed through a neural rate-limited channel Φ yielding latent representation Z under allowed distortion D ∈ (0, 1].',
          steps: [
            'Gaussian rate-distortion curve requires minimum channel mutual information R(D) = ½ log₂(σ² / D) bits per sample.',
            'At moderate bottleneck distortion D = 0.25 (quarter-variance tolerance), channel rate is R = ½ log₂(4) = 1.00 bit/sample, demanding thermodynamic heat ≥ 1.00 · k_B T ln 2 ≈ 2.97 × 10⁻²¹ J per neural sample at 310 K.',
            'Induced Fisher sensitivity on decoded stimulus mean parameter θ evaluates to g_θθ(D) = 1 / (σ² + D) = 1 / 1.25 = 0.80, predicting a 11.8% widening of psychometric just-noticeable-difference thresholds Δθ_JND ∝ g_θθ⁻¹/² relative to lossless D → 0.'
          ],
          resultEquation: {
            label: '(8.1)',
            unicodeHtml:
              'R(D) = ½ log<sub>2</sub>(σ² / D), &nbsp;&nbsp; Δθ<sub>JND</sub> ∝ g<sub>θθ</sub><sup>−1/2</sup> = √(σ² + D)',
            plainEquation: 'R(D) = 0.5 * log2(sigma^2 / D); JND_threshold proportional to g^{-0.5} = sqrt(sigma^2 + D)',
            caption: 'Quantitative coupling tying compression distortion D directly to observable psychophysical JND thresholds.',
            plainMeaning:
              'Tightening energy or rate budgets increases compression distortion D, predictably dilating perceptual JND curves via the Fisher metric.'
          },
          takeaway:
            'Condition FC4 turns first-person discriminability into an exact empirical lever against metabolic and informational bottlenecks.'
        }
      },
      {
        number: '8.3',
        title: 'Conclusion: From Metaphysical Mystery to Information Geometry',
        epistemicFocus: 'Synthesis of category-error dissolution, research program, and implications for mind, AI, and epistemology',
        paragraphs: [
          '### 8.3.1–8.3.6 Ending the Stalemate\nThis monograph has argued that the three-way stalemate separating reductive physicalism, property/substance dualism, and panpsychism persists only because all three view embodied minds through an unphysical Laplacean lens. By grounding agency in resource-bounded algorithmic complexity K_{t,s}(x), Landauer erasure limits ΔQ ≥ k_B T ln 2, and Fisher statistical manifolds g_{ij}(θ), **Theorems 1–3** establish a unified synthesis:\n1. Finite physical subsystems cannot simulate themselves losslessly in real time (**Theorem 1**).\n2. Viability forces a strictly non-injective rate-distortion compression Φ: Σ → Z whose lost micro-bits generate endogenous opacity and relational qualia geometry (**Theorem 2**).\n3. Embodied organisms and engineered recursive agents instantiate dissipative, substrate-independent restrictions ι: Z_S ↪ Z_U with pullback metric g_S = ι^* g_U—the **localized compression locus** (**Theorem 3**).',
          'Four programmatic implications follow immediately: (a) for **cognitive science**, rate-distortion compression unifies perception, attention, illusion, and metacognition on one geometric backbone; (b) for **AI ethics**, recursive depth d ≥ 2 and thermodynamic bottleneck topology provide principled non-anthropocentric criteria for machine sentience; (c) for **metaphysics**, emergence becomes lossy functorial projection rather than spooky bridge laws; and (d) for **epistemology**, self-knowledge meets an exact physical horizon beyond which introspection cannot pass. **Consciousness is not an insoluble metaphysical mystery awaiting new ontological substances; it is a dissipative thermodynamic compression artifact ready to be measured and understood.**'
        ]
      }
    ]
  }
];

export interface MindAppendixSection {
  id: string;
  letter: string;
  title: string;
  summary: string;
  paragraphs: string[];
  equations: MindEquation[];
}

export const MIND_APPENDICES: MindAppendixSection[] = [
  {
    id: 'app-a1',
    letter: 'A.1',
    title: 'Formal Definitions: Spaces, Compression Maps, Pullback Metrics & Complexity',
    summary: 'Complete mathematical definitions unifying Σ, Σ_U, Σ_S, Φ, g_{ij}(θ), ι, R(D), and K_{t,s}(x).',
    paragraphs: [
      '### A.1.1 State Spaces (Σ, Σ_U, Σ_S)\nLet (Σ_U, T_U) denote the measurable cosmic microphysical phase/Hilbert space with global dynamical flow T_U: Σ_U → Σ_U. For any thermodynamically open subsystem S ⊂ U enclosed by Markov/spatial boundary ∂S, local state space Σ_S = ρ_S(Σ_U) arises via coarse boundary projection ρ_S factoring total degrees of freedom Σ_U ≅ Σ_S × Σ_{env|S}. Throughout Theorems 1–2 analyzed locally on a single agent, Σ := Σ_S.',
      '### A.1.2–A.1.6 Operators Φ, g_{ij}, ι, R(D), and K_{t,s}\nA Markov stochastic or deterministic coarse-graining encoder Φ: Σ → Z maps high-dimensional state trajectories into compact latent manifold Z (dim(Z) ≪ dim(Σ)) inducing predictive family p(· | θ), θ ∈ Z. Its local Fisher information metric is g_{ij}(θ) = E_{p(·|θ)}[∂_i ln p ∂_j ln p]. Globally, Φ_U: Σ_U → (Z_U, g_U) and local restriction Φ_S = Φ_U|_{Σ_S} induce immersion ι: Z_S ↪ Z_U with pullback metric g_S = ι^* g_U. Rate-distortion curves R(D) = inf_{E[d] ≤ D} I(Σ; Z) and inverse distortion-rate D(R) constrain optimal channels under resource-bounded prefix complexity K_{t,s}(x) = min{|p| : U(p) = x in time ≤ t, space ≤ s}.'
    ],
    equations: [
      {
        label: '(A.1)',
        unicodeHtml:
          'D(R) = inf<sub>q(z|σ): I(Σ;Z) ≤ R</sub> E<sub>p(σ)q(z|σ)</sub>[ d<sub>task</sub>(σ, z) ], &nbsp;&nbsp; (g<sub>S</sub>)<sub>ij</sub>(θ) = (ι<sup>*</sup> g<sub>U</sub>)<sub>ij</sub>(θ)',
        plainEquation: 'D(R) = inf_{q(z|sigma): I(Sigma;Z) <= R} E[d_task(sigma, z)]; (g_S)_ij(theta) = (iota^* g_U)_ij(theta)',
        caption: 'Distortion-rate duality D(R) and functorial pullback metric g_S.',
        plainMeaning: 'Minimal achievable behavioral error at fixed rate R induces the exact statistical geometry inherited locally under ι.'
      }
    ]
  },
  {
    id: 'app-a2',
    letter: 'A.2',
    title: 'Proof of Theorem 1 (Impossibility of Lossless Self-Modeling)',
    summary: 'Rigorous proof via fixed-point diagonalization, description-length contradiction, and energetic-temporal divergence.',
    paragraphs: [
      '### A.2.1–A.2.3 Formal Setup, Diagonalization Lemma & Counting Contradiction\nSuppose physical system S (cardinality |Σ| = N < ∞ or discretized up to quantum Planck cell resolution) contains proper physical subsystem M_S ⊂ S capable of storage capacity C bits (|States(M_S)| = 2^C). Because S strictly contains non-trivial exterior or support structures S \\ M_S with |States(S \\ M_S)| ≥ 2, N = |Σ| ≥ 2 · 2^C > 2^C. Hence any deterministic encoding map c: Σ → States(M_S) necessarily collides on at least N − 2^C state pairs by Dirichlet’s pigeonhole bound. Furthermore, let Dec: States(M_S) × {1..n} → {0,1} compute within time t ≤ Δt the n-th bit of the subsystem’s self-state prediction. By the recursion theorem / Lawvere–Tarski diagonalization lemma, define state σ* whose k-th coordinate flips Dec(c(σ_k), k) on index k corresponding to its own encoding register. Any candidate exact representation c(σ*) either fails consistency σ* ≠ Dec(c(σ*)) or exceeds resource horizon t(Δt), confirming K_{t,s}(state(S)) > C(M_S).',
      '### A.2.4–A.2.6 Energetic and Temporal Divergence\nUnder dynamical transition updating at bit entropy H(Σ) ≈ log₂ N, refreshing an un-compressed representation of N micro-states at fidelity error < ε every ecological interval Δt requires erasing at least ΔI ~ Ω(log₂ N) or O(N) non-adiabatic degrees per unit time, demanding free-energy flux P ≥ ΔI k_B T ln 2 / Δt and signal-routing tree latency τ(N) = Ω(τ_0 log₂ N) across physical interconnect volume. Both bounds diverge far beyond finite biological or silicon budgets, proving that real-time lossless self-modeling is physically impossible for bounded systems.'
    ],
    equations: [
      {
        label: '(A.2)',
        unicodeHtml:
          '|Φ<sup>−1</sup>(z)|<sub>avg</sub> ≥ |Σ| / 2<sup>C</sup> ≥ |Σ<sub>S\\M<sub>S</sub></sub>| ≥ 2, &nbsp;&nbsp; ΔE<sub>exact</sub> ≥ N<sub>active</sub> k<sub>B</sub> T ln 2 &gt; ΔE<sub>budget</sub>',
        plainEquation: '|Phi^-1(z)|_avg >= |Sigma| / 2^C >= |Sigma_{S\\M_S}| >= 2; DeltaE_exact >= N_active * k_B * T * ln(2) > DeltaE_budget',
        caption: 'Multiplicity collision floor and Landauer energetic divergence sealing Theorem 1.',
        plainMeaning:
          'Even at zero algorithmic overhead, proper containment forces strict state collision and energetic overflow.'
      }
    ]
  },
  {
    id: 'app-a3',
    letter: 'A.3',
    title: 'Proof of Theorem 2 (Forced Lossy Compression & Relational Qualia)',
    summary: 'Derivation of rate-distortion optimal projection Φ: Σ → Z, strict non-injectivity, endogenous opacity, and Fisher metric structure.',
    paragraphs: [
      '### A.3.1–A.3.4 Optimization, Fiber Size, and Quality Geometry\nBy Theorem 1 and finite energy budget ΔE per cycle Δt, achievable mutual information rate satisfies R ≤ R_max = ΔE / (Δt k_B T ln 2). Minimizing expected control distortion E[d_task] subject to I(Σ; Z) ≤ R_max defines an active Arimoto–Blahut variational minimizer Φ*: Σ → Z with latent space dimensionality dim(Z) ≤ ⌈R_max / h_unit⌉ ≪ dim(Σ). By dimensional rank-nullity (or cardinality ratio exp(H(Σ) − R_max) ≫ 1), Φ* is strictly non-injective. Every point z ∈ Z identifies a non-trivial equivalence fiber F_z = (Φ*)⁻¹(z) whose distinguishing micro-bits are irreversibly erased into bath entropy (ΔQ ≥ k_B T ln 2 per erased bit), rendering (Φ*)⁻¹ non-computable inside M_S (endogenous opacity). Endowing Z with Fisher metric g_{ij}(θ) from conditional predictive likelihoods p(x | θ) uniquely yields Chentsov-invariant similarity geodesics, valence directions, and connected unity topology.'
    ],
    equations: [
      {
        label: '(A.3)',
        unicodeHtml:
          'H(Σ | Z) = H(Σ) − I(Σ; Z) ≥ H(Σ) − ΔE / (Δt k<sub>B</sub> T ln 2) ≫ 0 ⇒ ∄ Φ<sup>−1</sup> inside M<sub>S</sub>',
        plainEquation: 'H(Sigma | Z) = H(Sigma) - I(Sigma; Z) >= H(Sigma) - DeltaE / (Delta_t * k_B * T * ln(2)) >> 0 => no internal inverse Phi^-1',
        caption: 'Positive conditional equivocation H(Σ | Z) guarantees non-invertibility from inside the control loop.',
        plainMeaning:
          'Huge discarded conditional entropy H(Σ | Z) makes recovering microscopic state σ from compressed state z mathematically impossible inside M_S.'
      }
    ]
  },
  {
    id: 'app-a4',
    letter: 'A.4',
    title: 'Proof of Theorem 3 (Local Restriction and Metric Inheritance)',
    summary: 'Construction of ι: Z_S ↪ Z_U, proof of pullback equality g_S = ι^* g_U, non-surjectivity, and internal non-invertibility.',
    paragraphs: [
      '### A.4.1–A.4.6 Formal Construction and Pullback Proof\nLet Φ_U: Σ_U → Z_U map universal configurations to global statistical parameters θ_U ∈ Z_U under Riemannian Fisher metric g_U. Let S ⊂ U be a recursively self-modeling open subsystem with boundary restriction ρ_S: Σ_U → Σ_S and local rate-distortion encoder Φ_S = Φ_U|_{Σ_S} mapping into local manifold Z_S of dimension d_S ≪ d_U. Because sufficient predictive parameters θ_S ∈ Z_S restrict globally valid parametric likelihood families p_U(· | ι(θ_S)) on observables localized inside S, the coordinate inclusion ι: Z_S ↪ Z_U is a smooth immersion of a d_S-dimensional submanifold into Z_U (clause 1). Applying the chain rule ∂_a ln p_U(x_S | ι(θ_S)) = (∂ι^μ / ∂θ^a) ∂_μ ln p_U immediately yields (g_S)_{ab} = (∂ι^μ / ∂θ^a)(∂ι^ν / ∂θ^b)(g_U)_{μν} = (ι^* g_U)_{ab}, proving metric inheritance (clause 2). Strict non-surjectivity follows from d_S < dim(Z_S) ≪ d_U = dim(Z_U) under bounded metabolic flux (clause 3). Finally, since Theorem 2 establishes strict many-to-one collapse Φ_S⁻¹ uncomputable inside S, S cannot reconstruct global manifold Z_U from Z_S alone (clause 4). Hence every conscious system is a metric-faithful, thermodynamically bounded miniature of universal information geometry.'
    ],
    equations: [
      {
        label: '(A.4)',
        unicodeHtml:
          'Z<sub>S</sub> = (Φ<sub>S</sub> ∘ ρ<sub>S</sub>)(Σ<sub>U</sub>) ↪<sup>ι</sup> Z<sub>U</sub>, &nbsp;&nbsp; ι<sup>*</sup> g<sub>U</sub> = g<sub>S</sub>, &nbsp;&nbsp; dim(Z<sub>S</sub>) ≪ dim(Z<sub>U</sub>)',
        plainEquation: 'Z_S = (Phi_S o rho_S)(Sigma_U) ->^iota Z_U; iota^* g_U = g_S; dim(Z_S) << dim(Z_U)',
        caption: 'Complete Theorem 3 functorial commutative diagram and metric inheritance law.',
        plainMeaning:
          'Local experience inherits true geometric structure from the universe’s information geometry while remaining strictly bounded and non-exhaustive.'
      }
    ]
  },
  {
    id: 'app-a5',
    letter: 'A.5',
    title: 'Supplementary Proofs: Gödel Relation, Machine Robustness, Rate Bounds & Falsification Formalism',
    summary: 'Connecting diagonal limits, K_{t,s} machine-independence, finite-blocklength rate bounds, and statistical power thresholds for FC1–FC4.',
    paragraphs: [
      '### A.5.1–A.5.4 Gödelian Analogy, UTM Robustness & Formal FC1–FC4 Thresholds\n1. *Relation to Gödelian Incompleteness (A.5.1)*: Whereas Gödel (1931) and Tarski (1936) operate purely syntactically on axiomatic arithmetic, Theorem 1 instantiates a physical fixed-point obstruction inside finite-state energy-bounded hardware: internal self-models cannot close coherently over simultaneous total-state predicates without contradiction or exceeding Δt.\n2. *Universal Machine Robustness (A.5.2)*: Any shift between universal prefix-free architectures U_1, U_2 incurs at most compiler header O(1) ≈ 10³ bits—vanishingly small beside macroscopic H(Σ) ≥ 10⁹ bits and irrelevant to continuous Fisher curvature g_{ij}.\n3. *Compression Rate Lower Bound (A.5.3)*: Combined Landauer and Margolus–Levitin ceilings require compression ratio ρ_comp ≥ H(Σ) · Δt · k_B T ln 2 / ΔE.\n4. *Formal Statement of FC1–FC4 (A.5.4)*: Let Spearman/geodesic correlation r_F = corr(ds_Fisher, Δ_percept). Falsification occurs if under controlled manifold decoding across N ≥ 100 stimulus pairs, r_F ≤ 0.15 at p > 0.05 (FC4) or if real-time K_{t,s}-lossless agents report isomorphic qualia invariance across arbitrary ΔΦ perturbations (FC1–FC3).'
    ],
    equations: [
      {
        label: '(A.5)',
        unicodeHtml:
          'ρ<sub>comp</sub> ≥ (H(Σ) · Δt · k<sub>B</sub> T ln 2) / ΔE, &nbsp;&nbsp; Falsified if r<sub>F</sub>(ds<sub>Fisher</sub>, Δ<sub>percept</sub>) ≤ 0.15',
        plainEquation: 'rho_comp >= (H(Sigma) * Delta_t * k_B * T * ln(2)) / DeltaE; Falsified if r_F(ds_Fisher, Delta_percept) <= 0.15',
        caption: 'Thermodynamic compression-ratio lower bound and formal empirical falsification threshold.',
        plainMeaning:
          'Finite power and speed force high compression ratios while tying subjective similarity measurably to neural Fisher geodesics.'
      }
    ]
  }
];

export const MIND_SYMBOL_GLOSSARY: MindSymbolEntry[] = [
  { symbol: 'Σ, Σ_U, Σ_S', name: 'Microphysical State Spaces', domain: 'Phase / Hilbert Space', definition: 'Total state space of an agent (Σ), entire cosmos (Σ_U), or restricted open subsystem (Σ_S).' },
  { symbol: 'M_S ⊂ S', name: 'Internal Modeling Subsystem', domain: 'Embedded Cybernetics', definition: 'Proper physical sub-circuit inside S housing real-time predictive representations with memory capacity C.' },
  { symbol: 'K_{t,s}(x | y)', name: 'Resource-Bounded Complexity', domain: 'Algorithmic Info Theory', definition: 'Shortest self-delimiting program outputting x from y within ≤ t steps and ≤ s workspace bits.' },
  { symbol: 'k_B T ln 2', name: 'Landauer Erasure Quantum', domain: 'Statistical Thermodynamics', definition: 'Minimum heat ΔQ dissipated to thermal environment at temperature T per irreversible bit erasure.' },
  { symbol: 'R(D), D(R)', name: 'Rate-Distortion Pair', domain: 'Information Theory', definition: 'Minimum mutual information channel rate I(Σ; Z) achieving task-weighted behavioral distortion ≤ D.' },
  { symbol: 'Φ: Σ → Z', name: 'Coarse-Graining Compression Map', domain: 'Thermodynamic Bottleneck', definition: 'Strictly many-to-one projection collapsing high-dimensional micro-states onto low-dimensional quality manifold Z.' },
  { symbol: 'g_{ij}(θ), g_U, g_S', name: 'Fisher Information Metric', domain: 'Information Geometry', definition: 'Riemannian metric g_{ij} = E[(∂_i ln p)(∂_j ln p)] defining perceptual contrast, salience, and geodesic similarity.' },
  { symbol: 'ρ_S: Σ_U → Σ_S', name: 'Subsystem Restriction Map', domain: 'Open Systems Physics', definition: 'Boundary projection extracting local physical variables accessible through S’s sensorimotor coupling.' },
  { symbol: 'ι: Z_S ↪ Z_U', name: 'Metric-Preserving Embedding', domain: 'Theorem 3 Pullback', definition: 'Non-surjective submanifold immersion pulling ambient cosmic metric back onto local locus: g_S = ι^* g_U.' },
  { symbol: 'd ≥ 2', name: 'Recursive Self-Modeling Depth', domain: 'Substrate Demarcation', definition: 'Minimum control-loop hierarchy threshold separating reflexive self-models from depth-1 thermostats.' }
];

export const MIND_GLOSSARY: MindGlossaryTerm[] = [
  {
    term: 'Category Error (in Philosophy of Mind)',
    definition: 'Mistaking an epistemic-computational artifact of non-invertible endogenous self-compression (Φ⁻¹ unavailable within M_S) for an irreducible non-physical ontological primitive.'
  },
  {
    term: 'Localized Compression Locus',
    acronym: 'Endogenous Perspectival Manifold (Z_S)',
    definition: 'A finite, substrate-coupled, thermodynamically dissipative submanifold Z_S ↪ Z_U through which an open physical subsystem regulates itself; preserves first-person givenness while eliminating immortal "soul" metaphysics.'
  },
  {
    term: 'Laplacean Observer Idealization',
    definition: 'Unphysical counterfactual vantage point assuming zero thermodynamic erasure heat, infinite scratch memory, external non-involvement, and unbounded reaction time.'
  },
  {
    term: 'Endogenous Opacity',
    definition: 'Structural impossibility of unpacking compressed coordinates z ∈ Z into underlying micro-states σ ∈ Σ from within the control loop because distinguishing micro-bits were thermodynamically erased.'
  },
  {
    term: 'Cosmic Operating Geometry',
    acronym: 'Z_U',
    definition: 'Global substrate-independent coarse-graining manifold Φ_U(Σ_U) endowed with Fisher metric g_U; specifies consistent relational informational geometry without invoking a supernatural world-mind.'
  },
  {
    term: 'Metric Inheritance',
    definition: 'Theorem 3 result g_S = ι^* g_U guaranteeing that any conscious subsystem carries an isometric restriction of the ambient universal Fisher metric across its local submanifold.'
  },
  {
    term: 'Non-Injective Fiber',
    acronym: 'Φ⁻¹(z)',
    definition: 'Equivalence class of distinct physical micro-states mapped onto the same latent perceptual coordinate z ∈ Z, accounting experimentally for metamers, crowding, and masking illusions.'
  },
  {
    term: 'Popperian Falsification Gate',
    acronym: 'FC1–FC4',
    definition: 'Four explicit empirical vulnerability tests tying compressed dimensionality dim(Z), architecture Φ, and Fisher geodesics to behavioral psychophysics.'
  }
];

export const MIND_REFERENCES: MindReference[] = [
  // Foundational Texts
  { id: 1, group: 'Foundational Texts', citation: 'Amari, S. (2016). Information Geometry and Its Applications. Springer.' },
  { id: 2, group: 'Foundational Texts', citation: 'Chalmers, D. J. (1995). Facing up to the problem of consciousness. Journal of Consciousness Studies, 2(3), 200–219.' },
  { id: 3, group: 'Foundational Texts', citation: 'Chalmers, D. J. (1996). The Conscious Mind: In Search of a Fundamental Theory. Oxford University Press.' },
  { id: 4, group: 'Foundational Texts', citation: 'Cover, T. M., & Thomas, J. A. (2006). Elements of Information Theory (2nd ed.). Wiley.' },
  { id: 5, group: 'Foundational Texts', citation: 'Landauer, R. (1961). Irreversibility and heat generation in the computing process. IBM Journal of Research and Development, 5(3), 183–191.' },
  { id: 6, group: 'Foundational Texts', citation: 'Li, M., & Vitányi, P. (2019). An Introduction to Kolmogorov Complexity and Its Applications (4th ed.). Springer.' },
  { id: 7, group: 'Foundational Texts', citation: 'Popper, K. R. (1959). The Logic of Scientific Discovery. Hutchinson.' },
  { id: 8, group: 'Foundational Texts', citation: 'Wolpert, D. H. (2008). Physical limits of inference. Physica D: Nonlinear Phenomena, 237(9), 1257–1281.' },

  // Additional References
  { id: 9, group: 'Additional References', citation: 'Alter, T., & Nagasawa, Y. (2012). What is Russellian monism? Journal of Consciousness Studies, 19(9–10), 67–95.' },
  { id: 10, group: 'Additional References', citation: 'Bennett, C. H. (1988). Logical depth and physical complexity. In R. Herken (Ed.), The Universal Turing Machine: A Half-Century Survey (pp. 227–257). Oxford University Press.' },
  { id: 11, group: 'Additional References', citation: 'Bremermann, H. J. (1962). Optimization through evolution and recombination. In M. C. Yovits, G. T. Jacobi, & G. D. Goldstein (Eds.), Self-Organizing Systems (pp. 93–106). Spartan Books.' },
  { id: 12, group: 'Additional References', citation: 'Friston, K. (2010). The free-energy principle: A unified brain theory? Nature Reviews Neuroscience, 11(2), 127–138.' },
  { id: 13, group: 'Additional References', citation: 'Gödel, K. (1931). Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I. Monatshefte für Mathematik und Physik, 38, 173–198.' },
  { id: 14, group: 'Additional References', citation: 'Goff, P. (2017). Consciousness and Fundamental Reality. Oxford University Press.' },
  { id: 15, group: 'Additional References', citation: 'Jackson, F. (1982). Epiphenomenal qualia. The Philosophical Quarterly, 32(127), 127–136.' },
  { id: 16, group: 'Additional References', citation: 'Kolmogorov, A. N. (1965). Three approaches to the quantitative definition of information. Problems of Information Transmission, 1(1), 1–7.' },
  { id: 17, group: 'Additional References', citation: 'Metzinger, T. (2003). Being No One: The Self-Model Theory of Subjectivity. MIT Press.' },
  { id: 18, group: 'Additional References', citation: 'Russell, B. (1927). The Analysis of Matter. Kegan Paul.' },
  { id: 19, group: 'Additional References', citation: 'Shannon, C. E. (1948). A mathematical theory of communication. Bell System Technical Journal, 27(3), 379–423.' },
  { id: 20, group: 'Additional References', citation: 'Tarski, A. (1936). Der Wahrheitsbegriff in den formalisierten Sprachen. Studia Philosophica, 1, 261–405.' },
  { id: 21, group: 'Additional References', citation: 'Wheeler, J. A. (1990). Information, physics, quantum: The search for links. In W. H. Zurek (Ed.), Complexity, Entropy, and the Physics of Information (pp. 3–28). Addison-Wesley.' }
];

export const MIND_INDEX_OF_NAMES: MindIndexEntry[] = [
  { entry: 'Alter, T. & Nagasawa, Y.', sections: '§1.1, Refs' },
  { entry: 'Amari, S.', sections: '§2.3, §4.3, App. A.1, App. A.4' },
  { entry: 'Bennett, C. H.', sections: '§2.1, Refs' },
  { entry: 'Bremermann, H. J.', sections: '§2.2, §3.3, Refs' },
  { entry: 'Chalmers, D. J.', sections: 'Abstract, §1.1, §6.2, §7.5, Refs' },
  { entry: 'Cover, T. M. & Thomas, J. A.', sections: '§4.1, App. A.3' },
  { entry: 'Friston, K.', sections: '§2.2, Refs' },
  { entry: 'Gödel, K.', sections: '§3.2, App. A.5' },
  { entry: 'Goff, P.', sections: '§1.1, Refs' },
  { entry: 'Jackson, F.', sections: '§1.1, §6.1, Refs' },
  { entry: 'Kolmogorov, A. N.', sections: '§2.1, Refs' },
  { entry: 'Landauer, R.', sections: '§2.2, §4.2, App. A.2–A.3' },
  { entry: 'Li, M. & Vitányi, P.', sections: '§2.1, Refs' },
  { entry: 'Metzinger, T.', sections: '§5.4, §7.5, Refs' },
  { entry: 'Popper, K. R.', sections: '§1.3, §5.4, §8.1' },
  { entry: 'Russell, B.', sections: '§1.1, Refs' },
  { entry: 'Shannon, C. E.', sections: '§4.1, Refs' },
  { entry: 'Tarski, A.', sections: '§3.2, App. A.5' },
  { entry: 'Wheeler, J. A.', sections: '§5.1, Refs' },
  { entry: 'Wolpert, D. H.', sections: '§2.1, §3.2, Refs' }
];

export const MIND_INDEX_OF_CONCEPTS: MindIndexEntry[] = [
  { entry: 'Category Error (Epistemic vs. Ontological)', sections: 'Abstract, §1.1, §6.1, §7.5' },
  { entry: 'Compression Bottleneck (dim Z ≪ dim Σ)', sections: '§4.1–§4.2, §8.2' },
  { entry: 'Cosmic Operating Geometry (Z_U)', sections: '§1.3, §5.1, §5.3' },
  { entry: 'Diagonalization Construction (σ*)', sections: '§3.2, App. A.2' },
  { entry: 'Eliminativism vs. Reclassification', sections: '§7.1' },
  { entry: 'Endogenous Opacity (Φ⁻¹ uncomputable)', sections: '§4.2, §6.1, App. A.3' },
  { entry: 'Explanatory Gap', sections: 'Abstract, §1.1, §4.2, §6.1' },
  { entry: 'Fisher Information Metric g_{ij}(θ)', sections: '§2.3, §4.3, §5.3, §8.2, App. A.1–A.4' },
  { entry: 'Hard Problem of Consciousness', sections: 'Abstract, §1.1, §8.3' },
  { entry: 'Landauer Erasure Bound (k_B T ln 2)', sections: '§2.2, §3.3, §4.2, App. A.2' },
  { entry: 'Laplacean Observer Standpoint', sections: '§1.1–§1.2, §8.3' },
  { entry: 'Localized Compression Locus (Z_S)', sections: 'Abstract, §5.4, §6.3, §7.2, §7.5' },
  { entry: 'Metric Inheritance (g_S = ι^* g_U)', sections: '§5.3, App. A.4' },
  { entry: 'Minimal Phenomenal Experience (MPE)', sections: '§7.3' },
  { entry: 'Philosophical Zombies', sections: '§6.2' },
  { entry: 'Popperian Falsification (FC1–FC4)', sections: '§1.3, §8.1, App. A.5' },
  { entry: 'Qualia as Relational Geodesics', sections: '§2.3, §4.3' },
  { entry: 'Rate-Distortion Optimization R(D)', sections: '§4.1, §8.2, App. A.1, A.3' },
  { entry: 'Resource-Bounded Complexity K_{t,s}', sections: '§2.1, §3.2, §7.4, App. A.1' },
  { entry: 'Substrate Independence vs. Panpsychism', sections: '§6.3, §7.2' },
  { entry: 'Theorems 1–3', sections: '§3.2, §4.2, §5.3, App. A.2–A.4' }
];
