/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Complete Scholarly Monograph Data for Paper 16:
 * "The Universe Remembers Its Future:
 *  Retrocausality, Temporal Boundary Conditions, and the Architecture of Causal Reality"
 *
 * Deck:
 * "A Foundational Investigation into the Bidirectional Structure of Physical Explanation"
 *
 * Uses the exact same author team, editorial typography, logical schema cards,
 * theorem/proof boxes, worked examples, comparative tables, glossary, appendices,
 * references, and back-matter indexes as Paper 15.
 */

import { SYNTHESE_META, type SyntheseAuthor } from './synthesePaperData';

export interface RetroEquation {
  label: string;
  unicodeHtml: string;
  plainEquation: string;
  caption: string;
  plainMeaning: string;
  derivationSteps?: string[];
}

export interface RetroTheoremBox {
  kind: 'Definition' | 'Lemma' | 'Proposition' | 'Theorem' | 'No-Go Theorem' | 'Corollary' | 'Philosophical Thesis';
  number: string;
  title: string;
  statement: string;
  proofSteps: string[];
  sourceNote: string;
}

export interface RetroWorkedExample {
  title: string;
  setup: string;
  steps: string[];
  resultEquation: RetroEquation;
  takeaway: string;
}

export interface RetroSubsection {
  number: string;
  title: string;
  epistemicFocus: string;
  paragraphs: string[];
  equation?: RetroEquation;
  theoremBox?: RetroTheoremBox;
  secondaryTheoremBox?: RetroTheoremBox;
  workedExample?: RetroWorkedExample;
}

export interface RetroChapter {
  id: string;
  number: number; // Parts 1..8 matching the 8 Principal Investigations
  kicker: string;
  title: string;
  epigraph: string;
  pullQuote: string;
  leadSummary: string;
  chapterIntro: string[];
  subsections: RetroSubsection[];
}

export interface RetroPrincipleRow {
  code: 'R1' | 'R2' | 'R3' | 'R4';
  name: string;
  canonicalFormula: string;
  epistemicStatus: string;
  failureOnDenial: string;
  empiricalSignature: string;
}

export interface RetroGlossaryTerm {
  term: string;
  acronym?: string;
  definition: string;
}

export interface RetroSymbolEntry {
  symbol: string;
  name: string;
  domain: string;
  definition: string;
}

export interface RetroAppendix {
  letter: string;
  title: string;
  summary: string;
  paragraphs: string[];
  equations: RetroEquation[];
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

export interface RetroReference {
  id: number;
  citation: string;
}

export interface RetroIndexEntry {
  entry: string;
  sections: string;
}

const PAPER_16_AUTHOR_ROLES: Record<string, string> = {
  'Jean-Charles Tassan': 'Temporal Asymmetry, Thermodynamic Records & Bidirectional Philosophy of Time',
  'Wilson John Sterking Lauret': 'Two-Boundary Metrology, Empirical Discriminators & Critical Review',
  'Marlon D. Bulaqueña, Ph.D.': 'Lead Monograph Architecture, TDCD Formalism & No-Signalling Proofs',
  'Manuel Avila Gomez': 'Closed-Loop Feedback Analysis, Causal Consistency & Systems Orientation',
  'Rupak Chatterjee, Ph.D.': 'Advanced/Retarded Green’s Functions, Absorber Theory & Quantum Foundations',
  'Walter Goldberger': 'Variational Action Boundaries, Relativistic Covariance & Field-Theoretic Verification',
  'Mirza Adnan Mohtashim': 'Two-Boundary Ontological Architecture, Cosmological Synthesis & Formal Audit Integration'
};

const PAPER_16_BASE_AUTHORS: SyntheseAuthor[] = [
  ...SYNTHESE_META.authors,
  {
    name: 'Mirza Adnan Mohtashim',
    affiliation: 'Independent Researcher',
    orcid: '0009-0004-2823-5976',
    orcidUrl: 'https://orcid.org/0009-0004-2823-5976',
    creditRoles: PAPER_16_AUTHOR_ROLES['Mirza Adnan Mohtashim']
  }
];

export const RETRO_META = {
  paperNumber: 'Paper 16 · Synthese Monograph',
  journalTarget: 'Synthese · Epistemology, Methodology and Philosophy of Science',
  title: 'The Universe Remembers Its Future',
  laymanDeck:
    'Retrocausality Without Backward Signalling, Two-Endpoint Temporal Boundary Conditions in Field and Quantum Dynamics, and the Bidirectional Architecture of Causal Reality: Why Both Ends of Time Co-Determine Admissible Physical Histories',
  volumeLine: 'Scientific Magazine Edition · Synthese Philosophical Monograph · Paper 16 Treatise',
  institutionalDisclaimer:
    'Affiliations identify individual academic positions and do not imply institutional endorsement. Co-authors without listed ORCID numbers do not maintain public ORCID records.',
  venueFormatNote:
    'Publication Format Disclosure: The core Synthese journal submission isolates the philosophical-formal argument, equations, and analytical tables; this 29-plate illustrated edition serves as the expanded companion monograph.',
  keywords: [
    'Retrocausality',
    'time-symmetric physics',
    'temporal boundary conditions',
    'architecture of causal reality',
    'causal asymmetry',
    'Kant Second Analogy',
    'bilking argument',
    'advanced and retarded solutions',
    'two-state vector formalism',
    'thermodynamic arrow of time',
    'global consistency',
    'philosophy of physics'
  ],
  authors: PAPER_16_BASE_AUTHORS.map((a): SyntheseAuthor => ({
    ...a,
    creditRoles: PAPER_16_AUTHOR_ROLES[a.name] ?? a.creditRoles
  }))
};

export const RETRO_ABSTRACT: string[] = [
  'In everyday life, cause and effect feel strictly like a row of falling dominoes: yesterday pushes today, and today pushes tomorrow, never the other way around. Because we remember our childhoods, see footprints left behind in wet sand, and never find crisp photographs of next Tuesday, it feels obvious that only the past shapes what happens right now.',
  'Yet when physicists write down the fundamental rules of motion, light, gravity, and subatomic particles, a quiet surprise appears: the underlying mathematics treats forward time and backward time almost identically. Much like a stretched violin string whose middle vibration depends simultaneously on the pegs clamped at both ends, or an arch bridge whose center stone holds up only because both left and right riverbanks support it, physical laws allow present events to depend on conditions at both ends of time—past and future alike.',
  'Does that mean people can send secret messages back to yesterday or undo history? No. This paper draws a bright line between sending controllable signals backward in time—which triggers logical paradoxes once multi-run error correction amplifies even noisy channels—and two-ended rules of consistency, where the future simply narrows which complete physical stories can exist at all without anyone steering the past from tomorrow.',
  'If nature’s deepest rulebook works symmetrically from both ends, why does human memory and scientific storytelling still point strictly forward? Because our early universe began in an extraordinarily tidy, low-disorder state. Writing or erasing a single reliable bit of physical memory in brains, cameras, or rocks physically requires paying a minimum heat cost (Landauer’s bound, ΔQ ≥ k_B T ln 2) along that thermodynamic slope, locking direct records exclusively to the past even inside a two-ended universe.',
  'To untangle centuries of philosophical confusion, this study builds a clear four-part map separating Time, Causation, Explanation, and Information, traces how physics translates every piece of that map into precise laws of light, quantum measurement, field theory, and heat, and proposes a disciplined framework—Temporally Distributed Causal Determination—showing how the universe may be less like dominoes falling one by one and more like a single coherent tapestry anchored at both borders of time.'
];

export const RETRO_CENTRAL_THESIS = {
  title: 'The Central Thesis',
  lead: 'An event may be temporally located in the present while being causally constrained by conditions at both ends of its history.',
  elaboration: [
    'If this proposition can be formally established within appropriate physical models, the traditional past-to-future architecture of causal explanation would require substantial revision.',
    'The future would not need to send anything backward. It would participate in determining which complete physical histories are consistent with the governing laws and boundary conditions.'
  ]
};

export const RETRO_RESEARCH_QUESTIONS: string[] = [
  'Must the cause of an event always be temporally earlier than the event itself?',
  'Can future boundary conditions participate in determining present physical states without enabling backward signalling?',
  'Is the causal structure of the universe fundamentally directional, or can it be globally time-symmetric?',
  'Are physical histories generated sequentially, or are they selected from a larger space of mathematically admissible histories?',
  'Does the thermodynamic arrow of time explain causal asymmetry, or merely explain why observers experience and reconstruct it in one direction?',
  'Can a theory of causation accommodate both local physical interactions and global temporal constraints?',
  'What empirical distinctions, if any, separate past-only causal models from models incorporating future boundary conditions?'
];

export const RETRO_CONCEPTUAL_CONTRIBUTION = {
  title: 'The Proposed Conceptual Contribution: Temporally Distributed Causal Determination',
  paragraphs: [
    'This paper introduces the concept of Temporally Distributed Causal Determination (TDCD). The concept describes a class of explanatory structures in which the admissible physical history of a system is constrained by conditions distributed across more than one temporal boundary.',
    'It does not require the future to act as an independent agent, nor does it establish that every event has a future cause. Rather, it identifies a possibility that conventional causal language can obscure: the temporal location of an event and the temporal distribution of the conditions that constrain it need not be identical.',
    'The proposal is deliberately limited. It does not replace established physical theories, claim experimental confirmation of retrocausality, or assume that every time-symmetric equation describes a physically realized process. Its contribution is to clarify the conceptual and mathematical conditions under which future boundary constraints could legitimately enter physical explanation.'
  ]
};

export const RETRO_IMPLICATION_AND_CONCLUSION = {
  implicationTitle: 'The Larger Philosophical & Physical Implication',
  implicationParagraphs: [
    'If fundamental physical reality is governed by time-reversal-invariant laws (`□_phys` over `Mod_phys`) whose realizations live inside globally constrained four-dimensional block-universe histories—`Adm(L, B_past, B_future) = Sol(L) ∩ B_past ∩ B_future ≠ ∅` with `μ_W(H_adm) > 0`—then the conventional metaphor of the universe as an instantaneous wavefront propelled exclusively from behind cannot stand as an exhaustive ontology. Sequential Cauchy evolution works extraordinarily well whenever future macroscopic conditions remain unconditioned and dissipative baths swamp advanced interference, yet treating that asymmetric approximation as fundamental metaphysics mistakes a contingent cosmological trajectory (`R4`) for a law of nature.',
    'Crucially, the convergence demonstrated across this monograph spans classical electrodynamics, analytical mechanics, relativistic quantum field theory, information-geometric metrology, and quantum foundations. In QFT under `(−, +, +, +)` metric signature, the time-ordered Feynman propagator decomposes into a strictly time-symmetric real kernel `G_bar = ½(G_ret + G_adv)` plus a Hadamard sector, while Lorentz-invariant microcausality (`[Ô(x), Ô(y)] = 0` at spacelike separation `(x − y)² > 0`) together with the Haag–Kastler / Buchholz–Wichmann split property and Kraus-instrument completeness (`∑_{a,μ} K†_{a,μ} K_{a,μ} = I`) / POVM completeness (`∑_b M_b(β) = I`) derive non-circularly (**Theorem 5.0 / `R3`**, scoped rigorously to standard linear quantum mechanics and AQFT) that bidirectional amplitudes coexist with zero operational signalling. Meanwhile, standard Schwinger–Keldysh `in–in` `C₊/C₋` contours (`E_f = I`) compute single-boundary causal expectations and acquire physical two-boundary selection only under an explicit final-weight postulate (`E_f ≠ I`), while any controllable backward discrete memoryless channel (`C_sig(W) = max_{P_M} I(M; R) > 0`, specializing to `1 − H_2(F)` only for a BSC) is blocked across `N` trials by consistency (`H_adm^{(N)} ⊆ E_err^{(N)} ⇒ W_μ(H_adm^{(N)}) ≤ ϵ_N^(max) ≤ 2 exp(−N E(R)) → 0`, **Lemma 5.1** and **No-Go Theorem 5.1**).',
    'Equally important, Temporally Distributed Causal Determination (TDCD) dissolves the longest-standing paradoxes raised in Chapter 1 without sacrificing compatibilist human agency or historical science. Aristotle’s *necessitas consequentiae* (*Physics* II.3, *De Int.* 9), Chrysippus’s co-fated histories (*SVF* II.998–1000), Hume’s priority regularity (*Treatise* I.iii.2, *Enquiry* VII, hedged via Beauchamp–Rosenberg and Norton), Kant’s Second vs. Third Analogy distinction (`A189/B232–A218/B265`), the Black–Flew–Dummett–Lewis bilking debate, Reichenbach’s conjunctive forks (§19), Lewis’s overdetermination asymmetry, Salmon–Dowe conserved-quantity processes (`T^{μν}`), Strevens–Hitchcock difference-making, and Pearl–Woodward acyclic DAGs vs. cyclic SCMs (`M = ⟨U, V, F, P(U)⟩`) all map cleanly via a structure-preserving conceptual homomorphism once `T1–T5`, `C1–C6`, `E1–E5`, and `I1–I5` are disambiguated.',
    'Because our cosmic patch originated in an ultra-low Weyl-curvature initial state (`C_{αβγδ} ≈ 0`, Past Hypothesis `R4` as contingent cosmological boundary rather than a fundamental dynamical law, cf. Albert, Loewer’s Mentaculus, and Callender) and writing or erasing any stable memory bit dissipates heat bounded below by Landauer’s inequality (`ΔQ ≥ k_B T ln 2 ≈ 2.87 × 10⁻²¹ J` at `300 K`) derived from unitarity plus Liouville phase-space preservation, finite observers embedded along the Boltzmann/Crooks coarse-grained gradient (`dS_B/dt ≥ 0`, distinct from Liouville-constant `S_G` and complemented by Connes–Rovelli thermal time) evade Boltzmann-brain double fluctuations (modulo eternal-inflation measure caveats), remember only the past, and exercise controllable intervention solely toward the future—while yielding their monopoly over fundamental physical determination.'
  ],
  concludingTitle: 'Concluding Synthesis & Direct Answer to Chapter 1',
  concludingParagraphs: [
    'Returning directly to the seven questions and philosophical history of Chapter 1, our verdict is unified and precise. First, chronological precedence (`T1`) is neither necessary nor sufficient for physical determination (`C5–C6`): Kant’s downstream ship and Hamilton’s Dirichlet/Neumann/Robin boundary-value action show that objective rule-governed order need not privilege the initial slice over global boundary compatibility—provided incomplete half-Cauchy or coarse-grained `B_past` is clearly distinguished from complete hyperbolic Cauchy data (`φ|_{Σ₀}, π|_{Σ₀}`). Second, future boundary conditions constrain present sub-ensembles and intermediate amplitudes without enabling controllable backward signalling (`Q2`), answering Black and Flew’s bilking objection **both** via non-controllability (`R3`) **and** via global consistency filtering (`R2`): within standard linear QM and AQFT, joint Kraus-instrument / POVM sorting (`I4`) always marginalizes non-circularly back to invariant forward distributions (`I3 = 0`, Theorem 5.0), while across *any* model with a controllable backward DMC (`C_sig(W) = max_{P_M} I(M; R) > 0`), decoding errors bound admissible histories (`H_adm^{(N)} ⊆ E_err^{(N)} ⇒ W_μ(H_adm^{(N)}) ≤ ϵ_N^(max) ≤ 2 exp(−N E(R)) → 0`, culminating in deterministic emptiness `H_adm^{(N)} = ∅` at `ϵ_N^(max) = 0` in `Lemma 5.1` and `No-Go Theorem 5.1`).',
    'Third, the apparent causal direction of everyday life does not contradict the time-reversal invariance of fundamental equations (`Q3, Q5`). Rather than endorsing Russell’s polemical 1912 eliminativism (*Proceedings of the Aristotelian Society* 13, pp. 1–26, p. 1)—later moderated via causal lines in 1948—or Maudlin’s primitive metaphysical arrow, TDCD preserves the full causal vocabulary of Pearl, Woodward, Dowe, and Hitchcock at the macroscopic level of dissipative agents (`C3, T4`) while grounding microphysics in time-symmetric field laws, cyclic constraint graphs, and global consistency (`C6, T3`).',
    'Fourth, against the skeptical charge that two-boundary descriptions are mere mathematical bookkeeping equivalent to forward evolution from tuned initial data (`Q4, Q6`), four structural barriers tip the balance decisively toward TDCD: forward-only hidden-variable models of Bell correlations must break PBR ontic realism, violate Shimony parameter independence / Lorentz covariance with superluminal collapse, or smuggle `I(λ : β | past)` measurement conspiracies beyond cosmic `> 7.8 Gyr` quasar light cones (joining Frauchiger–Renner and Bong et al.’s Local Friendliness constraints); S-matrix `in–out` QFT natively fixes two asymptotic states while generalized `E_f ≠ I` Schwinger–Keldysh CTP contours explicitly extend standard single-boundary `in–in` (`E_f = I`) expectations; Horowitz–Maldacena black-hole final-state boundary conditions (subject to Lloyd–Preskill entanglement-linearity caveats) inform unitary Page-curve evaporation; and pre/post-selected TSVF/ABL mechanics (including the Three-Box Paradox) bridged with Bulaqueña’s Information-Geometric Resonant Time (`IGRT`) Quantum Fisher metric (`ds_QFI`) yields symmetric weak-value regularities obscured by one-way collapse narratives.',
    'Fifth, TDCD carries prospective, statistical-power-analyzed empirical discriminators (`Q7`, Table 8.2): pre-registered blinded total-ensemble Fisher-information protocols (`F_tot = P_post · F_post ≤ F_quant_max`), cosmic-Bell upper bounds on `I(λ : settings)`, `< 10⁻⁴` statistical precision benchmarks for `R3` (`N ≥ 10⁹` coincidence trials), out-of-time-order correlator (OTOC) tests, and CMB Weyl-curvature / LQC bounce / Boyle–Finn–Turok CPT bounds. It stands openly falsifiable if an irreducible microphysical arrow violating `R1` in an isolated unitary system—or an unconditioned protocol violating `R3`—were ever observed.',
    'Ultimately, the universe does not remember its future in the psychological sense of storing photographs of tomorrow. Yet in the exact structural sense established across these chapters, every present event stands as an interior keystone sustained jointly between two temporal boundaries. The universe is not a blind story improvised one isolated moment at a time; it is a single, locally interactive four-dimensional history whose full physical intelligibility appears only when read from both borders of time together.'
  ]
};

export const RETRO_PRINCIPLES_TABLE: RetroPrincipleRow[] = [
  {
    code: 'R1',
    name: 'Time-Symmetric Dynamical Law',
    canonicalFormula: '□_phys(DynLaw(L) → ∃Θ_anti [Θ∘L∘Θ⁻¹ = L])',
    epistemicStatus: 'Nomological principle (□_phys over globally hyperbolic Mod_phys): T / CPT invariance under basis-independent antiunitary Θ = U K (Θ² = ±I)',
    failureOnDenial: 'Hard-coded microscopic arrow erasing advanced Green’s kernels and unitary reciprocity',
    empiricalSignature: 'Scattering reciprocity σ(i→f) = σ(Θf→Θi) and time-reversed unitary state tomography'
  },
  {
    code: 'R2',
    name: 'Two-Boundary History Admissibility',
    canonicalFormula: 'Adm(L, B_past, B_future) = Sol(L) ∩ B_past ∩ B_future ≠ ∅ (μ_W > 0)',
    epistemicStatus: 'Model-consistency & admissibility constraint weighted by W_μ(B_past, B_future) via Fredholm index-zero compatibility',
    failureOnDenial: 'Unconstrained future freedom in symmetric actions or collapse of ABL pre/post-selection',
    empiricalSignature: 'WVA, out-of-spectrum Re(A_w) ∉ Spec(A), & Re(Π_k)_w < 0 under total-ensemble Fisher F_tot = P_post F_post'
  },
  {
    code: 'R3',
    name: 'No-Signalling Consistency Theorem',
    canonicalFormula: '∀ρ_p,∀{K_{a,μ}},∀β,∀{M_b(β)}: P(a|ρ_p,β) = ∑_{b,μ} Tr[M_b(β) U(t_f,t) K_{a,μ} ρ_p K†_{a,μ} U†(t_f,t)] = Tr[E_a ρ_p]',
    epistemicStatus: 'Derived within linear QM + AQFT (Theorem 5.0): follows from ∑_{a,μ} K†_{a,μ}K_{a,μ} = I, ∑_b M_b = I, U†U = I, & [Ô(x), Ô(y)] = 0 ((x−y)² > 0); beyond-QM models constrained separately by consistency (Theorem 5.1)',
    failureOnDenial: 'ϵ_N^(max) = 0 forces H_adm^(N) = ∅; noisy DMC C_sig(W) > 0 (BSC special case 1 − H_2(F)) gives H_adm^(N) ⊆ E_err^(N) ⇒ W_μ(H_adm^(N)) ≤ ϵ_N^(max) ≤ 2 exp(−N E(R)) → 0 (Lemma 5.1)',
    empiricalSignature: 'Non-circular marginal invariance (worked qubit check) & precision QRNG statistical benchmark (< 10⁻⁴ at N ≥ 10⁹)'
  },
  {
    code: 'R4',
    name: 'Thermodynamic Record Asymmetry',
    canonicalFormula: 'S_B(t_past) ≪ S_B(t_present) ≤ S_B(t_future) [contingent]',
    epistemicStatus: 'Contingent cosmological boundary trajectory (Past Hypothesis C_{αβγδ} ≈ 0, dynamically independent of R1 and R3)',
    failureOnDenial: 'Equilibrium Boltzmann-brain fluctuations erasing reliable macroscopic traces and explanatory orientation',
    empiricalSignature: 'CMB / Weyl-curvature low-entropy initial bounds, Landauer erasure ΔQ ≥ k_B T ln 2, and Crooks entropy production'
  }
];

export const TABLE_A1_INDEPENDENCE_RELATIONS = [
  {
    pair: 'R1 vs. R4 (Dynamical Law vs. Cosmic Arrow)',
    status: 'Logically & Dynamically Independent',
    justification: 'Antiunitary law symmetry Θ∘L∘Θ⁻¹ = L admits reversed-gradient or symmetric-equilibrium solutions; reversing or removing R4 leaves R1 intact (validated by Loschmidt & Crooks).'
  },
  {
    pair: 'R1 vs. R2 (Law Symmetry vs. Two-Boundary Selection)',
    status: 'Distinct Roles (Enablement, Not Entailment)',
    justification: 'R1 supplies time-symmetric solution space Sol(L) and advanced kernels, while R2 selects non-empty Fredholm-compatible boundaries H_adm ≠ ∅ with μ_W > 0.'
  },
  {
    pair: 'R3 vs. R1–R2 (No-Signalling Scope)',
    status: 'Derived Inside Linear QM + AQFT; Consistency-Bound Beyond QM',
    justification: 'Theorem 5.0 derives R3 within linear QM + AQFT (Kraus/POVM completeness, β-independent U(t_f,t), & [Ô(x), Ô(y)] = 0); speculative non-linear/ontic models outside QM face the general consistency barrier of Lemma 5.1 & No-Go Theorem 5.1.'
  },
  {
    pair: 'R3 vs. R4 (Bilking Immunity vs. Thermodynamics)',
    status: 'Formally Independent (Complementarily Grounded)',
    justification: 'R3 blocks backward channels even in coherent few-qubit regimes where R4 thermal dissipation is absent, though R4 explains why macroscopic records of A exist prior to any bilking test.'
  }
];

export const TABLE_A2_FORMAL_SYMBOLS_AND_CLAUSES = [
  {
    symbol: 'ℳ ⊨ R₁ & □_phys',
    formalDefinition: 'ℳ ⊨ R₁ iff ∀L ∈ Dyn(ℳ), ∃Θ_anti = U K (Θ² = ±I) with Θ∘L∘Θ⁻¹ = L',
    mathematicalSpace: 'Nomic (physical) necessity over globally hyperbolic Hausdorff Mod_phys (narrower than broad metaphysical □_log; excludes Cauchy-horizon pathologies).'
  },
  {
    symbol: 'Sol(L), H^s(Ω), μ',
    formalDefinition: 'Sol(L) = {φ ∈ H^s(Ω; E) : L(φ, ∂φ) = 0} endowed with Liouville / Wiener measure μ',
    mathematicalSpace: 'Classical Sobolev fields φ ∈ H^s(Ω) and Hermitian quantum vector-bundle sections E → M across Ω = [t₀, t_f] × Σ.'
  },
  {
    symbol: 'L_lin & Cokernel Condition',
    formalDefinition: 'Fredholm index-zero linearization L_lin δφ = 0 requires ⟨ψ_ker, B_data⟩ = 0 for all ψ_ker ∈ Coker(L_lin)',
    mathematicalSpace: 'Ensures compatibility of Dirichlet/Neumann/Robin data (B_past, B_future) across ∂Ω without over-determination contradiction.'
  },
  {
    symbol: 'ℳ ⊨ R₂ (Admissibility & Incomplete B_past)',
    formalDefinition: 'ℳ ⊨ R₂ iff H_adm = Sol(L) ∩ B_past ∩ B_future ≠ ∅ and μ_W(H_adm) = ∫_{H_adm} W_μ dμ > 0 (where B_past ≠ full global Cauchy (φ|_{Σ₀}, π|_{Σ₀}))',
    mathematicalSpace: 'B_past specifies half-Cauchy configuration φ|_{Σ₀}, coarse macrostates, or partial-slice/pre-selected data—so Sol(L) ∩ B_past remains multi-valued without violating Leray Cauchy uniqueness.'
  },
  {
    symbol: 'ℳ ⊨ R₃ (Chronological Ordering)',
    formalDefinition: '∀ρ_p, {K_{a,μ}}, β, {M_b(β)}: ∑_{b,μ} Tr[M_b(β) U(t_f,t) K_{a,μ} ρ_p K†_{a,μ} U†(t_f,t)] = Tr[E_a ρ_p]',
    mathematicalSpace: 'ρ_p := ρ(t) at intermediate slice t; ∑_{a,μ} K†_{a,μ}K_{a,μ} = I; U(t_f,t) evolves post-measurement state forward from t to t_f.'
  },
  {
    symbol: 'ℳ ⊨ R₄ (Boltzmann Entropy S_B)',
    formalDefinition: 'S_B(t) = k_B ln W(M(t)) with S_B(t_past) ≪ S_B(t_present) ≤ S_B(t_future) & C_{αβγδ}(t_past) ≈ 0',
    mathematicalSpace: 'Coarse-grained Boltzmann phase-space macrostate volume W(M(t)) (contrasted with Liouville-constant Gibbs S_G).'
  }
];

export const RETRO_ARGUMENT_MAP = {
  title: 'Argument Map · From Time-Symmetric Law to Temporally Distributed Causal Determination',
  summary:
    'Five deductive stages showing how future boundary conditions legitimately enter physical explanation without permitting backward signalling or violating thermodynamic experience.',
  nodes: [
    {
      step: 'Stage 1 · Conceptual Uncoupling',
      rule: 'Temporal precedence (t_1 < t_2) ≠ causal determination (C(x, y))',
      leadsTo: 'Separates chronological order from physical dependence in symmetric laws'
    },
    {
      step: 'Stage 2 · Dynamical Symmetry (R1)',
      rule: 'Fundamental equations admit both G_ret and G_adv solutions & δS = 0 endpoints',
      leadsTo: 'Establishes mathematical legitimacy of two-boundary formulations'
    },
    {
      step: 'Stage 3 · Admissibility Filter (R2)',
      rule: 'H_adm = Sol(L) ∩ B_past ∩ B_future',
      leadsTo: 'Models the present event as jointly constrained at both temporal ends'
    },
    {
      step: 'Stage 4 · No-Signalling Guard (R3)',
      rule: 'Marginalizing future outcomes recovers P(a | B_past)',
      leadsTo: 'Proves global consistency does not enable controllable backward messaging'
    },
    {
      step: 'Stage 5 · Thermodynamic Ground (R4)',
      rule: 'S_past ≪ S_future creates macroscopic records exclusively of the past',
      leadsTo: 'Explains forward explanatory asymmetry within a bidirectional reality (TDCD)'
    }
  ]
};

export const TABLE_1_1_FOURFOLD_TAXONOMY = [
  {
    domain: 'I. Time (T1)',
    subClass: 'T1 · Coordinate / Chronological Parameter (t₁ < t₂)',
    symmetryProfile: 'Reversible relabeling (t ↦ −t); manifold index carries zero causal force',
    explanatoryMisstep: 'Mistaking numerical time-ordering for ontological generation (Mistake 1)'
  },
  {
    domain: 'I. Time (T2)',
    subClass: 'T2 · Relativistic Metric Proper Time & Light Cones (dτ, J±(x))',
    symmetryProfile: 'Lorentz invariant partial order partitioning past J⁻(x) & future J⁺(x) cones',
    explanatoryMisstep: 'Treating invariant light-cone speed limits (v ≤ c) as asymmetric backward prohibition'
  },
  {
    domain: 'I. Time (T3)',
    subClass: 'T3 · Dynamical / Antiunitary Reversal Symmetry (Θ, CPT)',
    symmetryProfile: 'Exact T-invariance in Maxwell/GR/Hamiltonian; universal CPT in QFT',
    explanatoryMisstep: 'Importing macroscopic irreversibility directly into elementary differential operators'
  },
  {
    domain: 'I. Time (T4)',
    subClass: 'T4 · Thermodynamic Entropy Gradient (dS_B/dt ≥ 0)',
    symmetryProfile: 'Contingent cosmic trajectory (C_{αβγδ} ≈ 0, Crooks P_F/P_R = e^{σ/k_B})',
    explanatoryMisstep: 'Forgetting that T4 is a contingent boundary trajectory rather than a dynamical law'
  },
  {
    domain: 'I. Time (T5)',
    subClass: 'T5 · Phenomenological / Indexical Passage',
    symmetryProfile: 'Asymmetric neural memory of past vs. epistemic openness inside 4D eternalist block',
    explanatoryMisstep: 'Projecting biological consciousness and felt flow onto fundamental 4D spacetime'
  },
  {
    domain: 'II. Causation (C1)',
    subClass: 'C1 · Humean Regularity & Constant Conjunction',
    symmetryProfile: 'Symmetric mosaic patterns; priority convention (Beauchamp–Rosenberg; Norton)',
    explanatoryMisstep: 'Elevating Hume’s priority convention into a metaphysical ban on consequent constraints'
  },
  {
    domain: 'II. Causation (C2)',
    subClass: 'C2 · Counterfactual Overdetermination (Lewis)',
    symmetryProfile: 'Asymmetric macro-traces track T4; symmetric at microscopic deterministic level',
    explanatoryMisstep: 'Mistaking macroscopic trace proliferation for a non-thermodynamic arrow of law'
  },
  {
    domain: 'II. Causation (C3)',
    subClass: 'C3 · Interventionist / Manipulationist Causation (do(X))',
    symmetryProfile: 'Forward acyclic DAGs for dissipative agents vs. cyclic SCMs / factor graphs in physics',
    explanatoryMisstep: 'Equating acyclic agentive DAGs (Pearl/Woodward) with microphysical boundary-value law'
  },
  {
    domain: 'II. Causation (C4)',
    subClass: 'C4 · Antecedent Cauchy Propagation (Σ_0 → interior)',
    symmetryProfile: 'Hyperbolic well-posedness from initial data (equally valid backward from Σ_f)',
    explanatoryMisstep: 'Assuming single-slice initial evolution precludes dual-endpoint formulation'
  },
  {
    domain: 'II. Causation (C5)',
    subClass: 'C5 · Consequent Boundary Constraint (B_future)',
    symmetryProfile: 'Kinematic edge, smooth measure weight W(B_f), or Bayesian conditioning at ∂Ω_future',
    explanatoryMisstep: 'Caricaturing boundary restriction as a physical force pushing backward in time'
  },
  {
    domain: 'II. Causation (C6)',
    subClass: 'C6 · Global History Admissibility (Sol(L) ∩ B_past ∩ B_future)',
    symmetryProfile: 'Fully symmetric two-boundary relational constraint with Fredholm/Liouville existence',
    explanatoryMisstep: 'Conflating global self-consistency filtering with paradox-inducing bilking loops'
  },
  {
    domain: 'III. Explanation (E1)',
    subClass: 'E1 · Deductive-Nomological Covering Law',
    symmetryProfile: 'Temporally neutral: deduces interior events equally from past or future data',
    explanatoryMisstep: 'Admitting initial-condition deductions while arbitrarily rejecting final-condition ones'
  },
  {
    domain: 'III. Explanation (E2)',
    subClass: 'E2 · Causal-Mechanical Process Explanation (Salmon/MDC)',
    symmetryProfile: 'Pointwise mark-transmission & conserved exchange (T^{μν}, J^μ) along G_ret & G_adv',
    explanatoryMisstep: 'Treating continuous conserved transfer or mechanistic activities as necessarily retarded'
  },
  {
    domain: 'III. Explanation (E3)',
    subClass: 'E3 · Variational / Global Action Extremum (δS = 0)',
    symmetryProfile: 'Two-endpoint BVP (Dirichlet/Neumann/Robin) vs. Hamilton–Jacobi characteristic PDE',
    explanatoryMisstep: 'Dismissing stationary-action selection as merely a computational trick over C4'
  },
  {
    domain: 'III. Explanation (E4)',
    subClass: 'E4 · Unificationist Structural Coherence',
    symmetryProfile: 'Explains Bell & consistent-histories correlations via compact global constraints',
    explanatoryMisstep: 'Demanding dynamical time-step stories even where 4D structural coherence suffices'
  },
  {
    domain: 'III. Explanation (E5)',
    subClass: 'E5 · Genealogical / Trace-Anchored Retrodiction',
    symmetryProfile: 'Strictly anchored toward low-entropy past records via T4 (immune to Boltzmann brains)',
    explanatoryMisstep: 'Concluding reality itself lacks future constraints because narratives read backward'
  },
  {
    domain: 'IV. Information (I1)',
    subClass: 'I1 · Symmetric Shannon Mutual Information I(X; Y)',
    symmetryProfile: 'Strictly symmetric: I(X_past; Y_future) ≡ I(Y_future; X_past)',
    explanatoryMisstep: 'Assuming mutual correlation between t_p and t_f implies asymmetric forward transfer'
  },
  {
    domain: 'IV. Information (I2)',
    subClass: 'I2 · Dissipative Physical Records & Traces (ΔS > 0)',
    symmetryProfile: 'Landauer writing/erasure cost ΔQ ≥ k_B T ln 2 (distinct from reversible readout)',
    explanatoryMisstep: 'Asking why we lack records of tomorrow without accounting for R4 dissipation'
  },
  {
    domain: 'IV. Information (I3)',
    subClass: 'I3 · Controllable Signalling Channel Capacity (C_sig)',
    symmetryProfile: 'Strictly C_sig(t_f → t_p) = 0; any DMC with C_sig(W) > 0 allows N-shot Shannon amplification',
    explanatoryMisstep: 'Conflating non-zero C5/C6 boundary dependence with C_sig(t_f → t_p) > 0 (Mistake 2)'
  },
  {
    domain: 'IV. Information (I4)',
    subClass: 'I4 · Conditional Post-Selected Sorting (Coincidence)',
    symmetryProfile: 'Joint two-boundary measure P(a,b|B_p,β) preserving unconditional past marginals',
    explanatoryMisstep: 'Claiming delayed-choice quantum erasers rewrite already-measured marginal counts (Mistake 4)'
  },
  {
    domain: 'IV. Information (I5)',
    subClass: 'I5 · Boundary State Specification on ∂Ω',
    symmetryProfile: 'Mathematical field/state constraints on ∂Ω_past ∪ ∂Ω_future defining H_adm',
    explanatoryMisstep: 'Treating abstract mathematical boundary data as identical to dissipative human memory'
  }
];

export const TABLE_1_2_TAXONOMY_TO_PRINCIPLES = [
  {
    stratumGroup: 'Time: T1–T2 (Chronology & Cones)',
    primaryPrinciple: 'Kinematic Stage (Pre-R1–R4)',
    functionalRole: 'Supplies chart order t₁ < t₂ and symmetric Lorentzian cones J±(x) under (−,+,+,+) metric without imposing arrows.'
  },
  {
    stratumGroup: 'Time: T3 (Antiunitary Θ & CPT)',
    primaryPrinciple: 'R1 (Time-Symmetric Law)',
    functionalRole: 'Grounds □_phys invariance Θ∘L∘Θ⁻¹ = L over Mod_phys, keeping retarded and advanced kernels equally valid.'
  },
  {
    stratumGroup: 'Time: T4–T5 (Entropy & Passage)',
    primaryPrinciple: 'R4 (Thermodynamic Gradient)',
    functionalRole: 'Contingent low-Weyl Past Hypothesis drives dS_B/dt ≥ 0 and observer memory orientation inside an eternalist block.'
  },
  {
    stratumGroup: 'Causation: C1–C3 (Regularity, Traces, DAGs)',
    primaryPrinciple: 'R4 + Emergent Agency (Dir_ΔS)',
    functionalRole: 'Governs dissipative macroscopic regularity, trace overdetermination, and Pearl/Woodward do(X) interventions.'
  },
  {
    stratumGroup: 'Causation: C4–C6 (Cauchy, Consequent, Global)',
    primaryPrinciple: 'R2 (Two-Boundary Admissibility)',
    functionalRole: 'Embeds Cauchy (W_μ ≡ 1) inside Fredholm-compatible H_adm = Sol(L) ∩ B_past ∩ B_future ≠ ∅ and cyclic SCMs.'
  },
  {
    stratumGroup: 'Explanation: E1–E4 (DN, Conserved, Action, Unified)',
    primaryPrinciple: 'R1 + R2 (Symmetric Law & BVP)',
    functionalRole: 'Captures neutral DN inference, Salmon/Dowe conserved transfer, δS = 0 BVPs, and Consistent-Histories coherence.'
  },
  {
    stratumGroup: 'Explanation: E5 & Information: I2 (Records)',
    primaryPrinciple: 'R4 (Landauer Trace Sink)',
    functionalRole: 'Dissipative writing/reset (ΔQ ≥ k_B T ln 2) anchors records and historical retrodiction strictly to the past.'
  },
  {
    stratumGroup: 'Information: I1, I3, I4, I5 (Channels & Sorting)',
    primaryPrinciple: 'R3 (Derived No-Signalling) + R2',
    functionalRole: 'Derives I3 = 0 via Kraus/POVM completeness & Lemma 5.1 while permitting two-boundary mutual/conditional sorting I1, I4, I5.'
  }
];

export const TABLE_2_1_SOLUTIONS = [
  {
    framework: 'Retarded Liénard–Wiechert (§2.3)',
    greenKernel: 'G_ret(x, x′) ∝ δ(t − t′ − |r|/c)',
    boundaryRole: 'Zero incoming free radiation at I⁻; ironically paired with outgoing Sommerfeld condition at I⁺',
    realizabilityStatus: 'Standard macroscopic approximation; boundary selection (not kernel inconsistency) breaks symmetry'
  },
  {
    framework: 'Advanced Electromagnetic Branch (§2.3)',
    greenKernel: 'G_adv(x, x′) ∝ δ(t − t′ + |r|/c)',
    boundaryRole: 'Requires coherent convergent sources at I⁺; satisfies G_ret + G_adv = 2 G_sym',
    realizabilityStatus: 'Mathematically consistent; macroscopically suppressed by contingent R4 trajectory'
  },
  {
    framework: 'Wheeler–Feynman Absorber (§2.3)',
    greenKernel: '½(G_ret + G_adv) + absorber response',
    boundaryRole: 'Requires complete optical-thickness τ(ω) → ∞ along both past and future light cones',
    realizabilityStatus: 'Historically sidelined by both cosmic transparency limits and QED self-energy quantization issues'
  },
  {
    framework: 'Feynman Propagator G_F in QFT (§2.4)',
    greenKernel: 'G_F = G_bar + (i/2) G^(1), G_bar = ½(G_ret + G_adv)',
    boundaryRole: 'Routes positive-energy modes forward, antiparticles backward via −iε',
    realizabilityStatus: 'Fundamental bidirectional kernel of S-matrix perturbation theory'
  },
  {
    framework: 'Pauli–Jordan Causal Commutator (§2.4)',
    greenKernel: 'iΔ(x − y) = G_ret − G_adv = [φ̂(x), φ̂(y)]',
    boundaryRole: 'Vanishes identically outside light cone (x − y)² > 0 in (−,+,+,+) metric signature (AQFT microcausality)',
    realizabilityStatus: 'Load-bearing proof protecting relativistic no-signalling across every inertial frame'
  },
  {
    framework: 'Schwinger–Keldysh Closed-Time-Path (§2.4)',
    greenKernel: '2×2 Keldysh matrix (G_R, G_A, G_K)',
    boundaryRole: 'Standard CTP (E_f = I turnaround) computes single-boundary in–in expectations; genuine two-boundary selection requires additional weight E_f ≠ I',
    realizabilityStatus: 'Separates algebraic contour doubling (E_f = I, causal G_R) from explicit two-boundary CTP extensions (E_f ≠ I)'
  }
];

export const TABLE_2_2_PHILOSOPHY_TO_PHYSICS = [
  {
    philosophicalNode: 'T1–T3 · Temporal Order & Symmetry',
    chapter1Question: 'Does physical chronology require an intrinsic arrow in fundamental laws?',
    physicalFormalism: 'Functor LorMfd (M, g_μν, (−,+,+,+)), light cones J±(x), antiunitary Θ = U K, Lüders–Pauli CPT (|Δm_K|/m < 10⁻¹⁸)',
    keyResult: 'T/CPT-invariance of Maxwell/Dirac/Yang–Mills/GR actions decouples chronology from causal direction'
  },
  {
    philosophicalNode: 'C4–C6 · Antecedent vs. Two-Boundary Causation',
    chapter1Question: 'Can physical histories be determined jointly from past and future boundaries?',
    physicalFormalism: 'SymplAct: Leray data (Σ_0), Hamilton BVP (Dirichlet/Neumann/Robin, GHY term, Jacobi caustics) vs. HJ PDE, LSZ ⟨out|S|in⟩',
    keyResult: 'Cauchy/in–in propagation is the trace-over-future limit of two-boundary selection'
  },
  {
    philosophicalNode: 'E1–E4 · Covering-Law, QFT & Variational Explanation',
    chapter1Question: 'How do local field equations remain compatible with global endpoint selection?',
    physicalFormalism: 'Euler–Lagrange PDEs (Ostrogradsky-free), G_ret + G_adv = 2 G_sym, Consistent Histories D(α,α′), Path Integral K(q_f;q_0)',
    keyResult: 'Pointwise field locality and G_F time-symmetry hold jointly with global ∂Ω constraints'
  },
  {
    philosophicalNode: 'I1–I5 · Microcausality, Landauer, IGRT & No-Signalling',
    chapter1Question: 'Why can observers record only the past and never signal backward despite B_future?',
    physicalFormalism: 'ProbHilb/InfoChan: [φ̂(x), φ̂(y)] = 0 ((x−y)² > 0), Kraus {K_{a,μ}}, Bulaqueña IGRT ds_QFI, Landauer ΔQ ≥ k_B T ln 2',
    keyResult: 'Microcausality and Kraus/POVM completeness derive C_sig(t_f → t_p) = 0 while records track ΔS_B > 0'
  }
];

export const TABLE_3_1_BOUNDARY = [
  {
    formulation: 'Cauchy Initial-Value Problem (§7)',
    boundaryData: 'State (q(t_0), p(t_0)) on single spacelike hypersurface Σ_0',
    determinationMode: 'Sequential forward integration via Hamiltonian flow',
    conceptualRisk: 'Treats initial slice as ontologically privileged generator'
  },
  {
    formulation: 'Hamilton Two-Boundary Action (§8)',
    boundaryData: 'Fixed configurations q(t_0) and q(t_f) at both temporal ends',
    determinationMode: 'Global variational extremum δS[q] = 0 across [t_0, t_f]',
    conceptualRisk: 'Requires global consistency; non-unique without action bounds'
  },
  {
    formulation: 'Schulman Two-Time Boundary (§9)',
    boundaryData: 'Coarse-grained low-entropy constraints at both t_0 and t_f',
    determinationMode: 'Statistical ensemble conditioning on dual cosmic boundaries',
    conceptualRisk: 'Sensitivity to cosmological future contraction / expansion phase'
  },
  {
    formulation: 'Wharton Lagrangian Schema (§9)',
    boundaryData: 'Field values on closed 4D spacetime boundary ∂Ω',
    determinationMode: 'All-at-once field solution inside 4-volume Ω',
    conceptualRisk: 'Dispenses with instantaneous 3D state ontology'
  }
];

export const TABLE_5_1_INFLUENCE_VS_CONSISTENCY = [
  {
    dimension: 'Ontological Mechanism',
    backwardInfluence: 'Postulates a dynamical carrier propagating from t_f to t_p to alter fixed facts',
    globalConsistency: 'Restricts the set of complete histories H_adm = Sol(L) ∩ B_past ∩ B_future'
  },
  {
    dimension: 'Controllable Signalling',
    backwardInfluence: 'Permits an agent at t_f to transmit arbitrary bits into t_p',
    globalConsistency: 'Forbids controllable backward channels via marginalization invariance (R3)'
  },
  {
    dimension: 'Paradox Vulnerability',
    backwardInfluence: 'Vulnerable to grandfather / bilking contradictions f(x) = ¬x',
    globalConsistency: 'Excludes contradictory loops by definition of admissible history space'
  },
  {
    dimension: 'Physical Precedent',
    backwardInfluence: 'Tachyonic messaging or unscreened closed timelike signal loops',
    globalConsistency: 'Hamilton’s principle, Novikov self-consistency, and ABL quantum post-selection'
  }
];

export const TABLE_6_1_QUANTUM_RETRO = [
  {
    protocol: 'Aharonov–Bergmann–Lebowitz (ABL) (§16)',
    boundaryStructure: 'Initial preparation |ψ(t_0)⟩ + final post-selection ⟨φ(t_f)|',
    observableConsequence: 'Symmetric probability rule P(a_k | ψ, φ) for intermediate measurement',
    signallingStatus: 'Strictly no backward signalling prior to classical post-selection reveal'
  },
  {
    protocol: 'Weak Values & TSVF (§17)',
    boundaryStructure: 'Two-state vector ⟨φ(t)| |ψ(t)⟩ with weak coupling g ≪ 1',
    observableConsequence: 'Weak value A_w = ⟨φ|A|ψ⟩ / ⟨φ|ψ⟩ can lie outside eigenvalue spectrum',
    signallingStatus: 'No signalling; amplification arises in post-selected sub-ensembles'
  },
  {
    protocol: 'Delayed-Choice Quantum Eraser (§18)',
    boundaryStructure: 'Signal photon detection prior to idler erasure/which-path choice',
    observableConsequence: 'Interference fringes recoverable only conditionally via coincidence sorting',
    signallingStatus: 'Total marginal distribution at signal detector remains strictly unmodulated'
  },
  {
    protocol: 'Cramer Transactional & Price Models (§18)',
    boundaryStructure: 'Offer wave (retarded) + confirmation wave (advanced) handshake',
    observableConsequence: 'Dissolves Bell nonlocality tension via local zig-zag mediation along past cones',
    signallingStatus: 'Respects relativistic no-signalling; constrained by preparation control'
  }
];

export const TABLE_7_1_THERMO_ARROWS = [
  {
    arrow: 'Dynamical / Microscopic Arrow (§19)',
    symmetryStatus: 'Time-reversal symmetric (T / CPT invariant) in fundamental equations',
    physicalSource: 'Symplectic Hamiltonian & unitary Schrödinger/Dirac structure',
    roleInTDCD: 'Permits two-boundary admissibility (R1, R2)'
  },
  {
    arrow: 'Thermodynamic Arrow (§19)',
    symmetryStatus: 'Strongly asymmetric (dS/dt ≥ 0)',
    physicalSource: 'Low-entropy Past Hypothesis boundary condition S(t_0) ≪ S_eq',
    roleInTDCD: 'Suppresses macroscopic advanced waves & fixes statistical direction'
  },
  {
    arrow: 'Record / Epistemic Arrow (§20)',
    symmetryStatus: 'Oriented strictly toward the past',
    physicalSource: 'Photonic, neural, and geological correlation traces require entropy increase',
    roleInTDCD: 'Explains why observers remember the past and predict the future (R4)'
  },
  {
    arrow: 'Explanatory / Causal Arrow (§21)',
    symmetryStatus: 'Pragmatically forward, structurally bidirectional in boundary constraints',
    physicalSource: 'Agent intervention asymmetry + thermodynamic memory asymmetry',
    roleInTDCD: 'Aligns ordinary causal talk with forward intervention while preserving TDCD'
  }
];

export const TABLE_8_1_FIVE_RELATIONS = [
  {
    relation: '1. Antecedent Causation',
    temporalLocus: 't_p < t (strictly prior)',
    formalSignature: 'B_past(t_0) → constraint on H_adm',
    explanatoryFunction: 'Accounts for preparation, momentum transfer, and macroscopic memory traces'
  },
  {
    relation: '2. Consequent Constraint',
    temporalLocus: 't_f > t (strictly later)',
    formalSignature: 'B_future(t_f) → constraint on H_adm',
    explanatoryFunction: 'Restricts admissible intermediate histories via final boundary or post-selection'
  },
  {
    relation: '3. Local Interaction',
    temporalLocus: 'Spacetime point x ∈ Ω',
    formalSignature: 'δS / δφ(x) = 0 · L(φ, ∂φ)',
    explanatoryFunction: 'Mediates physical coupling locally along light cones without action-at-a-distance'
  },
  {
    relation: '4. Global Consistency',
    temporalLocus: 'Entire interval [t_0, t_f]',
    formalSignature: 'h ∈ Sol(L) ∩ B_past ∩ B_future',
    explanatoryFunction: 'Selects globally coherent complete histories across all boundaries'
  },
  {
    relation: '5. Explanatory Direction',
    temporalLocus: 'Observer frame (S_past ≪ S_future)',
    formalSignature: 'Info_record(t_p) ≫ Info_record(t_f)',
    explanatoryFunction: 'Orients human scientific narrative and counterfactual intervention from past to future'
  }
];

export const TABLE_8_2_EMPIRICAL_PROTOCOLS = [
  {
    domain: 'Pre-Registered Weak Metrology & IGRT Fisher Geometry',
    observable: 'Total-ensemble Fisher information F_tot = P_post · F_post ≤ F_quant_max, Re(A_w) ∉ Spec(A), Im(A_w) shifts, & negative Re(Π_k)_w < 0 under QRNG blinding',
    pastOnlyModel: 'Post-hoc equivalence via forward disturbance + conditional filtering; no Fisher gain above full-ensemble unitary / IGRT ds_QFI bound',
    twoBoundaryModel: 'Treats ⟨φ(t)| |ψ(t)⟩ symmetrically along Fisher-Rao geometry; prospective blinded tests isolate genuine technical-noise WVA & contextuality'
  },
  {
    domain: 'Cosmic-Bell & Delayed-Choice Entanglement Swapping',
    observable: 'Upper bounds on I(λ : settings) forced back > 7.8 Gyr via quasar light (η > 82.8% loophole-free) & OTOC / cavity two-contour tests',
    pastOnlyModel: 'Requires superluminal parameter dependence or ad hoc Big Bang conspiracies violating PBR & Wood–Spekkens faithfulness',
    twoBoundaryModel: 'Tests prospective lower bounds on zigzag retrocausal mutual information anchored strictly inside local past light cones J⁻ (Price–Wharton)'
  },
  {
    domain: 'Precision No-Signalling Bounds (Derived R3 Test)',
    observable: 'Marginal outcome deviation |P(a | ρ_p, β₁) − P(a | ρ_p, β₂)| < 10⁻⁴ across QRNG-selected bases β (statistical power N ≥ 10⁹ trials)',
    pastOnlyModel: 'Assumes forward no-signalling identically across causal cuts',
    twoBoundaryModel: 'Derives R3 from Kraus/POVM completeness and microcausality; directly falsified if any unconditioned basis dependence > 10⁻⁴ appears'
  },
  {
    domain: 'Cosmological, LIGO & Black-Hole Boundary Bounds',
    observable: 'CMB Weyl-curvature low-entropy bounds (C_{αβγδ} ≈ 0), LQC bounce (ρ_c ≈ 0.41 ρ_Pl), Boyle–Finn–Turok CPT cosmos, LIGO precursor null bounds, & Page-curve islands',
    pastOnlyModel: 'Assumes unexplained single-ended initial smoothness + standard semi-classical horizon thermalization',
    twoBoundaryModel: 'Tests Horowitz–Maldacena final-state black-hole projection (within Lloyd–Preskill bounds) & symmetric cosmic bounce entropy ratios'
  }
];

export const RETRO_CHAPTERS: RetroChapter[] = [
  {
    id: 'part-1',
    number: 1,
    kicker: 'Principal Investigation 1 · Synthese Philosophical Foundation',
    title: 'The Temporal Asymmetry of Causal Explanation',
    epigraph:
      '“The law of causality, I believe, like much that passes muster among philosophers, is a relic of a bygone age, surviving, like the monarchy, only because it is erroneously supposed to do no harm.” — Bertrand Russell, “On the Notion of Cause” (1912)',
    pullQuote:
      'Temporal precedence, causal determination, scientific explanation, and informational signalling are four distinct structural relations; conflating them manufactures pseudoparadoxes where physics exhibits coherent two-boundary symmetry.',
    leadSummary:
      'Why do we systematically explain physical events through their past, even when the fundamental equations governing nature display near-perfect time-reversal symmetry? Chapter 1 constructs the historical, philosophical, and conceptual foundation for Synthese—tracing debates from Aristotle, Hume, and Kant through Boltzmann, Russell, Dummett, Reichenbach, Lewis, Price, and Pearl—establishing what prompted this investigation, its significance for contemporary philosophy of science, and a comprehensive four-domain taxonomy mapping Time, Causation, Explanation, and Information.',
    chapterIntro: [
      'In ordinary human discourse, legal attribution, clinical diagnosis, and much of textbook classical mechanics, causal explanation obeys an implicit directional grammar that feels indistinguishable from logical necessity. An event occurring at present time t is rendered intelligible by citing antecedent conditions at an earlier instant t₀ < t, together with dynamical laws or regularities that carry those initial conditions forward into present actuality. A window shatters because a stone struck it moments earlier; a star illuminates a photographic plate because nuclear reactions emitted photons centuries before; a laboratory detector registers a click because an emitter fired a pulse across an optical bench. Across nearly every domain of everyday experience, the arrow of causal explanation runs rigidly in one direction—from an already fixed past toward an open and still undetermined future.',
      'Yet when one inspects the mathematical architecture of fundamental physics, this intuitive asymmetry disappears with startling abruptness. The canonical equations of Newtonian Hamiltonian mechanics, classical Maxwellian electrodynamics, Einstein’s relativistic field equations, and the unitary Schrödinger or Dirac evolution of quantum mechanics do not contain a built-in directional signpost pointing from past to future. Apart from the subtle violation of CP (and hence T) symmetry inside weak-interaction kaon and B-meson decays—an exotic microphysical asymmetry whose coupling scales bear no plausible responsibility for why coffee cools, eggs break, or causes precede effects—the dynamical laws governing elementary physical processes are time-reversal invariant. Whenever a trajectory or field configuration h(t) satisfies the governing equations of motion, its time-reversed conjugate Θh(−t) constitutes an equally valid mathematical solution.',
      'This divergence between the relentless unidirectional grammar of human explanation and the bidirectional symmetry of fundamental physical equations generates one of the enduring foundational puzzles in the philosophy of physics. Either the familiar asymmetry of causation reflects a deep ontological directionality somehow omitted from differential equations—a primitive metaphysical arrow of temporal becoming or productive generation—or else causal asymmetry is a derivative, structural phenomenon rooted in asymmetric boundary conditions, thermodynamic entropy gradients, and the epistemic perspective of observers embedded inside a macroscopic universe.',
      'To adjudicate between these alternatives without falling into category mistakes, philosophy of science requires more than piecemeal commentary on individual thought experiments. Over the past century, arguments over “retrocausality” have repeatedly foundered because defenders and critics talk past one another using four incompatible vocabularies: the language of chronological time order, the language of physical determination, the language of explanatory intelligibility, and the language of controllable information transmission. Before a single differential equation of quantum or field physics can be interpreted safely, these four conceptual strata must be disambiguated historically, analytically, and taxonomically. Chapter 1 performs that philosophical groundwork in full.'
    ],
    subsections: [
      {
        number: '0.1',
        title: 'The Central Thesis & Expansion of the Three Core Pillars',
        epistemicFocus: 'Formal statement of the Central Thesis, block-universe ontology, and disambiguation of retrocausality, temporal boundary conditions, and causal architecture',
        paragraphs: [
          'The central thesis governing this monograph is deliberately sharp: **an event may be temporally located in the present while being causally constrained by conditions at both ends of its history.** Formally, we ground this thesis within an **eternalist four-dimensional spacetime ontology (block universe)** equipped with metric `(M, g_μν)` in signature `(−, +, +, +)`. Against **presentism**, Broad/Tooley’s **Growing Block**, and Skow’s **Moving Spotlight**, Special Relativity’s Rietdijk–Putnam–Penrose relativity of simultaneity—paired with **Howard Stein’s (1968/1991) theorem** proving that no frame-independent “present” exists beyond light-cone determinateness `J⁻(x)`—rules out any ontically privileged universal cutting edge; **TDCD therefore uses invariant light-cone intersections (`J⁻ ∩ J⁺`) rather than frame-dependent simultaneity slices**, treating **four-dimensionalism as genuine spacetime ontology** rather than a mere graphing convenience, while felt temporal passage (`T5`) and memory asymmetry (`I2`) arise as localized observer features. Crucially, `TDCD` does **not** collapse into static Parmenidean timelessness: invariant proper-time intervals `dτ` and quantum information-geometric arc lengths `ds_QFI` encode genuine physical ordering along worldlines (`T2`) without requiring a moving metaphysical knife.',
          'Our expanded subtitle specifies three interlocking analytical commitments that define the scope of this investigation. First, **retrocausality without backward signalling**: we reject naive mechanical models in which a macroscopic future event acts like an agent shooting physical messages backward through time to overwrite fixed past records. Instead, we examine boundary-symmetric dependence—cases in which present physical properties depend mathematically and ontologically on both past and future boundary specifications without permitting controllable signalling from later agents to earlier receivers. Second, **two-endpoint temporal boundary conditions**: in variational mechanics, electrodynamics with complete absorbers, two-time statistical ensembles, and pre- and post-selected quantum theory, a physical history across an interval `[t₀, t_f]` is defined not exclusively by Cauchy data on an initial spacelike slice, but by joint boundary restrictions imposed at both `∂Ω_past` and `∂Ω_future`—operating cleanly as kinematic edge constraints, smooth probabilistic measure weights `W_μ(B_future)` over `Sol(L)` (which ground objective Lewisian Principal-Principle typicality weights compatible with agent credences `P_U` whenever `R3` keeps `C_sig = 0`), or Bayesian epistemic conditioning.',
          'In the **deterministic regime**, `H_adm(L, B_past, B_future) ≠ ∅` requires an **exact admissibility** criterion: `(L, B_past, B_future)` is *admissible* iff `H_adm` is non-empty **and** carries positive normalized measure weight `μ_W(H_adm) := ∫_{H_adm} W_μ(φ) dμ(φ) > 0` in Sobolev regularity space `H^s(Ω)`. Rather than blindly stipulating non-emptiness as an uncheckable dogma, `H_adm ≠ ∅` functions as a **model-consistency selector** pruning incompatible `(L, B_past, B_future)` triples whose linearised boundary data `L_lin` fail **Fredholm index-zero cokernel orthogonality** (`⟨ψ_ker, B_data⟩ = 0`).'
        ],
        equation: {
          label: '1.1',
          unicodeHtml: 'H<sub>adm</sub>(L, B<sub>past</sub>, B<sub>future</sub>) = Sol(L) ∩ B<sub>past</sub> ∩ B<sub>future</sub> ≠ ∅   [μ<sub>W</sub>(H<sub>adm</sub>) &gt; 0]',
          plainEquation: 'H_adm(L, B_past, B_future) = Sol(L) intersect B_past intersect B_future != empty_set   [mu_W(H_adm) > 0]',
          caption: 'Two-Boundary History Admissibility Set with Sobolev Regularity, Fredholm Compatibility & Measure Weight.',
          plainMeaning:
            'A triple (L, B_past, B_future) is physically admissible iff Sol(L) (in Sobolev H^s(Ω) with Liouville/Wiener measure μ) satisfies Fredholm cokernel orthogonality ⟨ψ_ker, B⟩ = 0 so H_adm ≠ ∅ carries positive measure weight μ_W > 0.',
          derivationSteps: [
            'Let Ω = [t_0, t_f] × Σ denote a globally hyperbolic Hausdorff spacetime region with ∂Ω = ∂Ω_past ∪ ∂Ω_future.',
            'Equip Sol(L) = {φ ∈ H^s(Ω; E) : L(φ, ∂φ) = 0} (classical PDE fields and Hermitian quantum bundle sections) with canonical Liouville/Wiener measure μ.',
            'Enforce Fredholm index-zero linearised cokernel orthogonality ⟨ψ_ker, B⟩ = 0 for (B_past, B_future) so H_adm ≠ ∅ and μ_W(H_adm) > 0.'
          ]
        }
      },
      {
        number: '0.2',
        title: 'The Seven Research Questions',
        epistemicFocus: 'Programmatic questions guiding the philosophical and physical investigation across Chapters 1–8',
        paragraphs: [
          'Seven interlocking questions organize this monograph and govern the division of labor between philosophical taxonomy (Chapter 1), physical formalization (Chapter 2), and two-boundary synthesis (Parts 3–8): (1) Must the cause—or determining physical condition—of an event always be temporally earlier than the event itself? (2) Can future boundary conditions participate in determining present physical states without enabling controllable backward signalling or causal paradoxes? (3) Is the causal structure of the universe fundamentally directional, or can microphysical causal architecture be globally time-symmetric while macroscopic agency remains asymmetric?',
          '(4) Are physical histories generated sequentially moment by moment from an initial slice, or are they selected all at once from a larger space of mathematically admissible histories? (5) Does the thermodynamic arrow of time ground genuine causal asymmetry, or does it primarily explain why embedded thermodynamic observers remember and reconstruct causation in a single direction? (6) Can a mature theory of causation integrate local spacetime field interactions with global two-boundary temporal constraints? (7) What prospective, quantitative empirical or structural discriminators separate strictly past-only causal accounts from models that incorporate future boundary conditions?'
        ]
      },
      {
        number: '1.1',
        title: 'What Prompted This Study & Its Significance for Philosophy of Science',
        epistemicFocus: 'Motivation from three converging foundational crises—including the four-horn Bell theorem, TSVF vs. ABL separation, and Schwinger–Keldysh CTP—and stakes for Synthese debates',
        paragraphs: [
          'What prompted the present investigation is neither idle metaphysical speculation nor an attempt to rehabilitate occult teleology. Rather, this study was forced into existence by three converging structural tensions across contemporary philosophy of physics, quantum foundations, and variational field theory—each of which exposes an unresolved contradiction in how physicists and philosophers deploy the vocabulary of time and causation.',
          'The first prompt is what we term the **Symplectic–Epistemic Rift**. Whenever theorists teach classical or quantum dynamics, they write down Lagrangians, Hamiltonians, and wave operators whose mathematical structure is symmetric under time reversal `Θ = U K` (`t ↦ −t, i ↦ −i`). Yet the very next paragraph of almost every textbook characterizes the **advanced Green’s function** `G_adv` as somehow unphysical—ignoring that `G_ret + G_adv = 2 G_sym` is algebraically exact, that physical asymmetry rests purely in boundary selection rather than operator inconsistency, and (with deep historical irony) that the standard **Sommerfeld radiation condition at future null infinity `I⁺`** (`lim_{r→∞} r(∂_r − ∂_t)A = 0`) is *itself* a future boundary condition! The rift lies in mistaking an *epistemic convenience* (solving from known initial data toward an unknown future) for an *ontological decree* prohibiting future constraints from entering physical explanation.',
          'The second prompt arises directly from **Quantum Foundations and the Four-Horn Bell Theorem**. Over the past decade, rigorous no-go results—most notably Matthew Leifer and Matthew Pusey (2017), extending Huw Price (2012) and Peter Evans, Huw Price, and Ken Wharton (2013), framed cleanly inside the **Harrigan–Spekkens (2010) ontological models framework** (`ψ`-ontic vs. `ψ`-epistemic distributions `μ_ψ(λ)`), alongside the **Pusey–Barrett–Rudolph (PBR, 2012)** theorem restricting `ψ`-epistemic models and **Wood and Spekkens’s (2015)** fine-tuning theorem showing that standard Bell causal DAGs violate causal faithfulness—have sharpened the foundational options left open by Bell inequality violations. Standard textbook presentations speak of a Bell trilemma, yet formally there are **four distinct horns**: *(1) superluminal nonlocal influences* breaking relativistic foliation neutrality; *(2) antirealism or `ψ`-epistemic non-ontic denial* (severely restricted by PBR); *(3) conspiratorial superdeterminism*, in which past hidden variables `λ` are statically correlated with future measurement settings via ad hoc Big Bang fine-tuning; and *(4) local retrocausal two-boundary dependence*, which is formally distinct from superdeterminism because `λ`-correlations arise cleanly from future-boundary selection along local past light cones (`P(λ | α, β) ≠ P(λ | α)` via two-boundary `H_adm` rather than past-only causal steering) without hidden cosmic conspiracies. Stated carefully, Leifer–Pusey establishes that retrocausal boundary dependence is one of the very few viable pathways **provided one affirms** ontic realism, pre-measurement `λ`-independence prior to post-selection, Lorentz covariance, and non-superdeterminism. Even then, rigor demands separating **ontic retrocausality** (where future measurement settings constrain earlier physical `λ`-variables) from **epistemic retrocausality** (Bayesian updating over past unknowns), and **fundamental post-selection** from **effective post-selection** in open ensembles.',
          'The third prompt comes from the **Variational, Quantum-Field, and Two-Boundary Renaissance**. Crucially, on first use we must separate three closely related concepts in Yakir Aharonov’s quantum measurement program that literature frequently conflates: *(i) the Two-State Vector Formalism (TSVF)*, which characterizes a pre- and post-selected quantum system at intermediate time `t` by the composite two-state vector `⟨Φ(t)| |Ψ(t)⟩` propagating from both temporal ends; *(ii) the Aharonov–Bergmann–Lebowitz (ABL, 1964) conditional probability rule* `P_ABL(a_k | B_p, b) = |⟨Φ|P_k|Ψ⟩|² / ∑_j |⟨Φ|P_j|Ψ⟩|²` governing *strong projective* intermediate measurements; and *(iii) the Weak Value* `A_w = ⟨Φ|A|Ψ⟩ / ⟨Φ|Ψ⟩` governing *weakly coupled* (`g → 0`) pointer shifts. Equally striking, relativistic non-equilibrium quantum field theory already embeds two-boundary structure inside the **Schwinger–Keldysh Closed-Time-Path (CTP)** contour, folding evolution forward along branch `C₊` and backward along `C₋` to couple initial density matrices directly to asymptotic turning-point compatibility. Simultaneously, Lawrence Schulman’s two-time statistical mechanics (1997), Ken Wharton’s Lagrangian Schema (2018), Emily Adlam’s all-at-once constraint ontology (2018), Marlon D. Bulaqueña’s Information-Geometric Resonant Time (`IGRT`, 2026) bridging projective Hilbert Fisher metrics with spacetime proper time, and loop-quantum-cosmology bounce models formulate physical dynamics natively across temporal boundaries.',
          'The philosophical significance of resolving these three prompts for *Synthese* is far-reaching. First, it offers an exact **diagnostic dissolution of pseudo-conflicts** between Humean regularity theories (and Lewisian Best-System vs. Maudlin/Armstrong governing-law accounts, both of which `H_adm` accommodates neutrally), interventionist causal graphs, and fundamental physics. Second, it rehabilitates **variational and boundary-constraint explanation** alongside causal-mechanical process explanation, showing why explanation by global consistency is neither mystical nor anti-local. Third, it reframes classic philosophical disputes over **fatalism and free agency**: once deliberative human choice is analyzed compatibilistically as an internal boundary constituent of `H_adm` rather than an external coercion violating local dynamics, bidirectional physical consistency and human agency reinforce rather than undermine one another.'
        ]
      },
      {
        number: '1.2',
        title: 'Historical Trajectory I: Antiquity, Hume’s Convention, and Kant’s Second Analogy',
        epistemicFocus: 'Philosophical genealogy of causal direction from Aristotle and Stoic compatibilism to Hume (hedged via Beauchamp–Rosenberg & Norton) and Kant’s Second vs. Third Analogy',
        paragraphs: [
          'To understand why the equation “causation equals past-to-future precedence” feels unassailable, one must trace how deeply it was woven into Western metaphysics long before differential equations or statistical mechanics existed. In classical antiquity, Aristotle’s *Physics* II.3 (194b16–195b30) distinguished four explanatory principles (*aitiai*): material, formal, efficient, and final. Crucially, we must distinguish Aristotle’s **immanent teleology** (biological form realizing an internal end) from modern mathematical **variational extrema (`δS = 0`)**: two-boundary action principles deploy global stationarity without projecting anthropomorphic ends onto dead matter. Yet when Aristotle confronted temporal modality in *De Interpretatione* 9 (18a28–19b4)—whether “there will be a sea-battle tomorrow” is already true or false today—commentators routinely conflated **conditional necessity of the whole disjunction (*necessitas consequentiae*, `□(p ∨ ¬p)`)** with **fatalistic necessity of each disjunct (*necessitas consequentis*, `□p ∨ □¬p`)**, mistaking *logical bivalence* inside complete eternalist histories (where **truthmakers** for future-tensed truths reside in later spacetime regions of `Ω` without exerting causal coercion) for *mechanical fatalism*.',
          'Hellenistic Stoicism made an underappreciated breakthrough against that confusion (*Stoicorum Veterum Fragmenta* [`SVF`] II.998–1000, preserved in Cicero’s *De Fato* XII.28–30) that remains directly relevant to modern compatibilist agency. Although historical Stoic *heimarmene* operated within deterministic *pneuma* physics, Chrysippus’s reply to the “Idle Argument” (*argos logos*)—the doctrine of **co-fated events** (*confatalia*) linking recovery jointly with summoning the physician inside one globally consistent web—generalizes naturally to relativistic boundary-compatibility (`H_adm`). Why does this ground a **positive compatibilist argument** (aligned with Frankfurt-style internal-source agency and **Jenann Ismael’s epistemic self-reference / prediction barrier** proving no embedded physical agent can compute the global boundary solution containing her own neural computation faster than executing the deliberation itself) rather than mere assertion? Because inside `H_adm = Sol(L) ∩ B_past ∩ B_future`, an agent’s deliberative choice at `t` is *constitutive* of the boundary/interior realization selected by `L`, not a puppet manipulated by an alien external force; asserting `□(B_f → Choice)` commits the modal scope fallacy of holding the consequent boundary fixed while varying its own internal constituent. Likewise, **counterfactual backtracking** (“had I chosen differently at `t`, `H_adm` would pair that choice with altered boundary data”) compares *distinct admissible worlds* `h₁, h₂ ∈ H_adm` rather than granting *backward manipulability* inside a single history (`I3 = 0`).',
          'The modern philosophical orthodoxy equating causation strictly with temporal priority solidified in the eighteenth century through **David Hume**. In *A Treatise of Human Nature* I.iii.2 (SBN 73–78) and *An Enquiry Concerning Human Understanding* VII (SBN 60–79), Hume dismantled rationalist notions of hidden “necessary connection,” reducing causation to contiguity, **priority in time**, and constant conjunction. To avoid overstating Hume as offering a purely arbitrary stipulation, careful Hume scholars—including **Tom Beauchamp and Alexander Rosenberg (1981)** and **John Norton (2003)**—note that Hume also offered an empirical regularity defense rooted in observed succession and worried that simultaneous causes would collapse temporal succession altogether. Moreover, contemporary **Humean Supervenience** (a four-dimensional mosaic of local qualities) does *not* entail temporal priority of causes: any mosaic pattern remains symmetric under global `t ↦ −t` unless contingent entropy asymmetry (`T4`) breaks the distribution of macroscopic regularities.',
          'Immanuel **Kant** saw that Hume’s psychological custom could not ground objective temporal order, and in the **Second Analogy of Experience** (*Critique of Pure Reason*, A189/B232–A211/B256)—paired immediately with the **Third Analogy** (A211/B256–A218/B265, grounding simultaneous mutual co-determination *Wechselwirkung*)—he forged the deepest transcendental argument in modern philosophy. Crucially, Kant’s Second Analogy target was **epistemological, not modern microdynamical**: he asked how a finite subject distinguishes mere *subjective* order of perceptual apprehension (glancing arbitrarily from the roof to the basement of a stationary house) from *objective temporal succession* in the world (watching a ship move strictly downstream). Kant’s transcendental criterion requires an **invariant rule linking states A and B**, NOT that the law’s differential kernel be purely retarded (`G_ret`) rather than symmetric (`G_sym` / two-boundary BVP)—while his own Third Analogy already conceded reciprocal co-determination without one-way priority! Subsequent causal theorists conflated Kant’s epistemic rule-governance with unidirectional *past-to-future production*. As modern physics shows, the ship’s upstream and downstream states obey time-symmetric equations; empirical downstream irreversibility stems from viscosity, dissipation, and past-anchored memory traces.'
        ]
      },
      {
        number: '1.3',
        title: 'Historical Trajectory II: Statistical Mechanics, Russell (1912 vs. 1948) & the Black–Flew–Dummett–Lewis Bilking Debate',
        epistemicFocus: 'Loschmidt & Zermelo recurrence, Crooks symmetry, Russell (1912 p. 1 vs. 1948), full Black–Flew bilking reconstruction, Dummett (1964), Mackie (1974), and Lewis (1976)',
        paragraphs: [
          'The nineteenth-century triumph of thermodynamics and kinetic theory shattered the comfortable assumption that microphysical laws share the one-way arrow of macroscopic heat flow. When Ludwig Boltzmann published his *H*-theorem in 1872, his Viennese colleague **Josef Loschmidt** (1876) immediately delivered the *Umkehreinwand* (reversibility objection): because Newton’s equations are invariant under `v ↦ −v`, every entropy-increasing collision trajectory possesses an exact reversed mirror trajectory along which entropy falls—and performing instantaneous velocity reversal `v ↦ −v` at `t_m` yields anti-thermodynamic convergence *precisely because* it trades a generic initial condition for a fine-tuned **future boundary constraint (`B_future`)**. Twenty years later, **Ernst Zermelo** (1896) deployed Henri Poincaré’s recurrence theorem to prove that any bounded, measure-preserving Hamiltonian system must eventually return arbitrarily close to its initial state after a colossal **Poincaré recurrence timescale** (`τ_rec ~ exp(S/k_B) ~ exp(10^{120})` for cosmic scales)—demonstrating decisively that irreversibility is **statistical and boundary-contingent**, never a lawlike prohibition in microdynamics. Modern non-equilibrium statistical mechanics sharpens Boltzmann’s insight via exact time-symmetric identities: the **Jarzynski equality** (`⟨e^{−W/k_B T}⟩ = e^{−ΔF/k_B T}`, 1997) and the **Crooks fluctuation theorem** (`P_F(+σ) / P_R(−σ) = exp(σ/k_B)`, 1999) quantify precisely how tiny anti-thermodynamic entropy-decreasing fluctuations remain mathematically admissible while exponentially suppressed as macroscopic dissipation `σ ≫ k_B` grows.',
          'In 1912, **Bertrand Russell** brought this dynamical revolution into analytic metaphysics in “On the Notion of Cause” (*Proceedings of the Aristotelian Society*, Vol. 13 [1912–1913], pp. 1–26; opening epigraph on p. 1), declaring that asymmetric “causes compelling effects” belong to pre-scientific folklore because advanced gravitational physics operates purely via time-symmetric functional differential equations. Crucially, however, historians of philosophy must note that Russell **moderated his eliminativism** in *Human Knowledge: Its Scope and Limits* (1948), rehabilitating **“causal lines”**—quasi-persistent spacetime worldlines preserving structural identity across time—as indispensable empirical threads in scientific inference. Yet Russell’s mature causal lines remain fully compatible with two-boundary physics: worldline continuity expresses local dynamical propagation (`E2`), not a prohibition on dual boundary constraints.',
          'Forty years after Russell’s 1912 address, the analytic **“bilking argument”**—initiated by **Antony Flew** (1954) and crystallized by **Max Black** (1956)—posed the sharpest logical challenge to retrocausality. Reconstructed rigorously, Black–Flew bilking proceeds in four steps: *(Step 1)* suppose event `B` at `t_f` retrocausally brings about earlier event `A` at `t_p < t_f`; *(Step 2)* observe or verify whether `A` occurred at intermediate time `t_m ∈ (t_p, t_f)` via a reliable macroscopic record; *(Step 3)* execute a free intervention at `t_f` implementing the inverter policy `B ↔ ¬A` (performing `B` iff `A` did not occur, refraining from `B` iff `A` did); *(Step 4)* conclude that any putative backward efficacy either collapses into flat contradiction (`A ↔ ¬A`) or exposes `B` as causally impotent. Observe carefully how the **bilking paradox** differs from the **grandfather paradox** and **Novikov self-consistency**: *bilking* is an **epistemic-interventionist challenge** exploiting an intermediate agent’s record-guided veto over `B`, whereas the *grandfather paradox* asserts an **ontological closed feedback loop** (`m = 1 − r`), and *Novikov consistency* filters trajectories to self-consistent fixed points `H_adm ≠ ∅`.',
          'In 1964, **Michael Dummett** published “Bringing About the Past” (reinforced by his **1976 Lewis–Dummett exchange**, **J. L. Mackie’s (1974)** “fixity” account in *The Cement of the Universe* arguing causes are fixed before their effects act, and **David Lewis’s** “The Paradoxes of Time Travel,” 1976), pinpointing the exact hidden premise of Step 2–3: Black’s bilking argument succeeds *only* when an agent can both reliably inspect `A` unconditionally and intervene freely on `B` independent of `A`’s physical precursors. Lewis cleanly separated **local narrow capability** (what an agent’s muscles or apparatus can execute locally) from **global compossibility** (what coexists consistently with all facts in `H_adm`), while `TDCD` replaces Mackie’s asymmetric “fixity-as-generation” with **thermodynamic record-accessibility asymmetry (`T4 → I2`)**. Our explicit TDCD verdict is therefore **both (c): non-controllability (`R3`) AND global consistency filtering (`R2`)**: first, derived Theorem 5.0 (`R3`, `C_sig(t_f → t_p) = 0`) eliminates controllable signalling even in noisy multi-run protocols (`Lemma 5.1`), holding **independently of thermodynamic `R4`** (while `R4` explains why stable macroscopic records of `A` exist at `t_m` at all); second, wherever pre- and post-selection are physically coupled (`I4`), inspecting `A` alters the intermediate state or selects consistent `H_adm` fixed points (`R2`), preventing contradiction-inducing interventions from ever co-occurring.'
        ]
      },
      {
        number: '1.4',
        title: 'Historical Trajectory III: Reichenbach Forks, Lewis, Price, Dowe, Hitchcock & SCM Debates',
        epistemicFocus: 'Explicit Reichenbach §19 conjunctive fork equations, Lewis similarity/miracles (Elga 2001), Price, Pearl SCMs vs. cyclic Bongers et al. SCMs, Woodward invariance, Salmon–Dowe conserved quantities, and Strevens–Hitchcock difference-making',
        paragraphs: [
          'Between the 1950s and the present, major philosophical programs attempted either to ground causal asymmetry objectively or to disentangle fundamental physics from anthropocentric projection. First, **Hans Reichenbach** (*The Direction of Time*, 1956, §19) formalized the **Principle of the Common Cause** via explicit **conjunctive fork** probability relations: three events `(A, B, C)` form a conjunctive fork iff `C` screens off `A` and `B` (`P(A ∩ B | C) = P(A | C) P(B | C)` and `P(A ∩ B | ¬C) = P(A | ¬C) P(B | ¬C)`) while positively elevating both (`P(A | C) > P(A | ¬C)` and `P(B | C) > P(B | ¬C)`), generating unconditional correlation `P(A ∩ B) > P(A) P(B)` that points asymmetrically toward the future solely because early low-entropy boundary conditions suppress *unexplained open past-directed forks*. Second, **David Lewis** (1979), in “Counterfactual Dependence and Time’s Arrow,” built a similarity metric ranking the avoidance of **large miracles** above preserving exact past matches to block backtracking counterfactuals while invoking the **asymmetry of overdetermination** (present events radiate vast redundant traces forward); yet **Adam Elga (2001)** and **David Albert (2000)** proved that tiny local entropy-reversing “miracles” break Lewis’s similarity asymmetry unless one presupposes the low-entropy Past Hypothesis (`T4`).',
          'Third, **Huw Price** (*Time’s Arrow and Archimedes’ Point*, 1996; 2012) exposed the **temporal double standard**: physicists treat chaotic uncorrelated incoming boundary conditions as “natural” while dismissing non-random outgoing-convergence boundary correlations as “conspiratorial,” and proved against naive Boltzmann typicality that conditionalizing on a mid-entropy present *without* an explicit past boundary predicts equally higher entropy in the past (a symmetric fluctuation dip). Adopting an Archimedean standpoint outside local thermodynamic bias reveals that past and future boundaries stand on symmetrical footing, opening a Lorentz-covariant retrocausal resolution of Bell correlations.',
          'Fourth, modern causal methodology integrates **interventionist structural causal models (SCMs)**—tuples `M = ⟨U, V, F, P(U)⟩` pioneered by **Judea Pearl** (*Causality*, 2009) and **James Woodward** (*Making Things Happen*, 2003), alongside **Christopher Hitchcock’s (2001/2007)** contrastivist interventionist/intransitivity analyses—and **causal-mechanical / difference-making philosophies** led by **Wesley Salmon** (1984), **Phil Dowe’s (2000, *Physical Causation*) Conserved Quantity (CQ) theory** replacing subjective “mark transmission” with objective conservation-law exchanges (`∇_μ T^{μν} = 0`, `∂_μ J^μ = 0`), **Michael Strevens’s (2008, *Depth*)** kairetic difference-making, and **Machamer, Darden, and Craver (MDC, 2000)** on productive mechanisms. Notice carefully **three crucial boundary conditions on causal formalism**: *(1)* **Woodward’s invariance-under-intervention condition** and **Pearl’s `do`-calculus completeness** hold cleanly for **coarse-grained dissipative macro-subsystems (`T4`) whose Markov blankets decouple `do(X)` choices from bath noise**, whereas `do`-calculus acyclicity fails for closed global conserved fields; *(2)* extending Pearl’s DAGs via **cyclic SCMs (Bongers, Forré, Peters & Mooij, 2021)**, undirected Markov random fields, and **bipartite factor graphs** restores structural symmetry over Bell correlations without **Wood–Spekkens (2015) faithfulness fine-tuning**; and *(3)* as **Dowe’s own fork-asymmetry problem** shows, `∇_μ T^{μν} = 0` and MDC mechanism vertices are strictly symmetric under `t ↦ −t` (MDC’s directional verbs track `T4` open-system dissipation), reconciling **Tim Maudlin** (2007) with **Wharton** (2018), **Adlam** (2018), and **Rovelli** (2022).'
        ]
      },
      {
        number: '1.5',
        title: 'Comprehensive Taxonomy I: Five Stratified Conceptions of Time (T1–T5)',
        epistemicFocus: 'Mapping McTaggart A/B-series, coordinate, relativistic, dynamical-symmetry, thermodynamic, and phenomenological time across formal criteria',
        paragraphs: [
          'Having traced the historical lineage from Aristotle through Pearl, Woodward, Dowe, Hitchcock, and Price, we now construct a comprehensive four-domain philosophical taxonomy mapping **Time** (`T1–T5`), **Causation & Physical Determination** (`C1–C6`), **Scientific Explanation** (`E1–E5`), and **Information & Records** (`I1–I5`) across 21 analytical strata (Tables 1.1 and 1.2). Methodologically, these 21 categories form a **functional analytical partition**—disambiguating distinct inferential, dynamical, and informational roles rather than claiming that concrete physical phenomena belong in isolation to a single cell. Every persistent deadlock in retrocausality debates arises from sliding illicitly across strata—for example, importing asymmetries valid in `T4`, `C3`, `E5`, or `I2–I3` into domains governed by `T3`, `C6`, `E3`, or `I1`.',
          '**T1. Coordinate / Chronological Parameter Time (`t₁ < t₂`)**: A smooth monotonic chart parameter (corresponding to **McTaggart’s tenseless B-series** earlier/later relation) ordering events along a worldline. Purely as an ordinal index, `t₁ < t₂` carries zero causal force; reversing `t ↦ −t` preserves every geometric trajectory while inverting parameter order. **T2. Relativistic Metric Proper Time & Light-Cone Partial Order (`dτ, J±(x)`)**: On a four-dimensional Lorentzian spacetime `(M, g_μν)` in `(−, +, +, +)` signature, the metric partitions directions into timelike (`ds² < 0`), null (`ds² = 0`), and spacelike (`ds² > 0`) intervals, defining the past light cone `J⁻(x)` and future light cone `J⁺(x)`. Metric geometry enforces *speed-limited local mediation* (`v ≤ c`) symmetrically along both cones without privileging `J⁻(x)` over `J⁺(x)`.',
          '**T3. Dynamical / Symplectic & Antiunitary Time-Reversal Symmetry (`Θ, CPT`)**: Invariance of physical laws under symplectic momentum reversal `(q, p) ↦ (q, −p)` in classical phase space `(T*Q, ω = dq ∧ dp)` and Wigner antiunitary conjugation `Θ = U K` (`t ↦ −t, i ↦ −i`, `Θ² = ±I`) in quantum Hilbert space. Standard Maxwell, GR, QCD, and relativistic QFT satisfy exact `T` or combined `CPT` symmetry. **T4. Thermodynamic Boltzmann Entropy Gradient (`dS_B/dt ≥ 0`)**: A **contingent cosmological trajectory** anchored by a low-entropy initial state (Past Hypothesis, `C_{αβγδ} ≈ 0`) and quantified by Boltzmann phase volume `S_B` (distinct from Liouville-constant Gibbs entropy `S_G`) and Crooks fluctuation ratios—not a local dynamical law. **T5. Phenomenological / Indexical Passage**: The **McTaggart A-series appearance** of an advancing “now” and felt contrast between fixed past and open future inside an eternalist 4D block universe, generated by biological trace stabilization (`T4 → I2`).'
        ]
      },
      {
        number: '1.6',
        title: 'Comprehensive Taxonomy II: Six Frameworks of Causation & Determination (C1–C6)',
        epistemicFocus: 'Separating Humean regularity, counterfactuals, interventionism, Cauchy propagation, consequent constraint, and global admissibility',
        paragraphs: [
          'The second taxonomic domain disaggregates **Causation and Physical Determination** into six conceptually distinct relations (`C1–C6`). **C1. Humean Regularity & Constant Conjunction**: Paired event patterns across the four-dimensional mosaic; as Beauchamp–Rosenberg and Norton emphasize, Hume’s priority condition reflected empirical observation rather than logical proof against symmetric regularity—and `TDCD` remains neutral between **Lewis’s Best System Account (BSA)** (where symmetric PDEs plus boundary constraints compactly summarize the mosaic) and **Maudlin/Armstrong anti-Humean governing laws**. **C2. Counterfactual Dependence, Overdetermination & Preemption (Lewis 1979)**: Distinguishes **non-backtracking interventionist counterfactuals** (holding past `R4` traces fixed for embedded agents) from **symmetric boundary-variation counterfactuals** comparing `h(B_p, B_f)` vs. `h(B_p, B_f′)` across `H_adm`—where forward trace overdetermination tracks `T4` statistically while incompatible two-boundary overdetermination is excluded by `H_adm ≠ ∅`.',
          '**C3. Interventionist / Manipulationist Causation (`do(X)`) (Pearl, Woodward, Hitchcock)**: Separates **type-level invariant regularities** across `Mod_phys` from **token-level actual causation (`H_adm` realizations)**: exogenous surgical manipulation inside acyclic DAGs governs dissipative agents at low-entropy interfaces (`T4`), contrasted with **cyclic SCMs (Bongers et al., 2021) and factor graphs** encoding bidirectional equilibrium and two-boundary constraints. **C4. Antecedent Dynamical Propagation (Cauchy Unfolding)**: Specifying complete data `(φ(t₀), ∂_t φ(t₀))` on `Σ₀` uniquely integrates hyperbolic equations forward into `D⁺(Σ₀)`—yet mathematically, final data on `Σ_f` determines `D⁻(Σ_f)` with identical uniqueness.',
          '**C5. Consequent Boundary Constraint (`B_future`)**: Crucially, `B_future` must neither be conflated with atemporal **metaphysical grounding** (Fine/Schaffer) nor reduced to a single mode, nor caricatured as “negative causation” (a missing-fluid force pushing backward): when `B_future` excludes intermediate branches, it acts via global nomological boundary filtering across **three logically distinct modes**: *(i) as a hard kinematic boundary condition* (`h ∈ B_future`), *(ii) as a smooth dynamical measure weight `W_μ(B_future)`* biasing typicality wrt Liouville/Wiener measure `μ` on `Sol(L)`, or *(iii) as Bayesian epistemic conditioning* (`P(· | B_past, B_future)`, which reflects updating credences over unknowns and proves *ontic* retrocausality only when dynamical/Bell invariants require `B_future` ontically). **C6. Global History Admissibility (`H_adm = Sol(L) ∩ B_past ∩ B_future ≠ ∅`, `μ_W > 0`)**: The unified relational determination mode defended here, in which local equations `L` and dual boundary specifications jointly select coherent four-dimensional histories.'
        ]
      },
      {
        number: '1.7',
        title: 'Comprehensive Taxonomy III: Five Regimes of Explanation (E1–E5) & Five Species of Information (I1–I5)',
        epistemicFocus: 'Mapping Hempel DN covering law, Salmon–Dowe conserved vertices, Lange/Kitcher variational & mathematical explanation, Earman–Norton / Reeb–Wolf Landauer bounds, and informational channels',
        paragraphs: [
          'The third taxonomic column classifies **Scientific Explanation** (`E1–E5`). **E1. Deductive-Nomological Covering Law (Hempel–Oppenheim)**: Temporally neutral inferential deduction equally valid for prediction from past premises or retrodiction from future premises (famously illustrated by the symmetry between deriving a flagpole’s shadow from its height or its height from its shadow). **E2. Causal-Mechanical & Conserved-Quantity Process Explanation (Salmon, Dowe, Strevens, MDC)**: Tracing conserved stress-energy `T^{μν}` (`∇_μ T^{μν} = 0`), charge-current `J^μ`, and QFT spacetime interaction vertices continuously inside spacetime (`J⁻` and `J⁺` symmetrically); strictly local (`T2`) yet mathematically hospitable to both `G_ret` and `G_adv` couplings. **E3. Variational / Global Action Constraint Explanation (`δS = 0`)**: Against Hempel/Lange worries that `δS = 0` looks teleological or merely equivalent to local `F = ma`, in gauge, topological, and gravitational field theories stationary-action two-endpoint BVPs encode global invariants irreducible to single-slice updates—providing *physical* (action-and-boundary) rather than purely formal mathematical constraints (Lange). **E4. Unificationist Structural Coherence (Friedman, Kitcher)**: Compresses Bell, TSVF, and path-integral correlations under the minimal four-axiom package `R1–R4` without ad hoc collapse or superdeterministic fine-tuning. **E5. Genealogical / Trace-Anchored Retrodiction**: Reconstructing history from surviving physical records (`I2`), oriented exclusively toward the past by `T4`.',
          'The fourth column partitions **Information** (`I1–I5`). **I1. Symmetric Shannon Mutual Information `I(X; Y)`**: Symmetric shared entropy `I(X_past; Y_future) ≡ I(Y_future; X_past)` obeying the data-processing inequality along Markov sub-chains, carrying zero directional signalling implication. **I2. Dissipative Physical Records & Traces**: Stable memory states governed by **Landauer’s principle (`ΔQ ≥ k_B T ln 2 ≈ 2.87 × 10⁻²¹ J` at `300 K` per erased/reset bit)** and **Charles Bennett’s (1982)** resolution of Maxwell’s demon via reversible Fredkin/Toffoli computation vs. irreversible register reset. Answering **Earman and Norton’s (1998/1999)** charge of thermodynamic circularity, **Ladyman et al. (2007)** and **Reeb and Wolf (2014)** derive Landauer’s bound non-circularly from unitary evolution, Liouville conservation, and an initially uncorrelated thermal bath—while sharply separating **irreversible writing/erasure** (dissipating `≥ k_B T ln 2`) from **reversible coherent readout or unitary computation**. **I3. Controllable Signalling Channel Capacity (`C_sig`)**: Reliable arbitrary bit transmission via `do(X)` interventions; microcausality and Kraus/POVM completeness enforce `C_sig(t_f → t_p) = 0`. **I4. Conditional Post-Selected Coincidence Information**: Joint sub-ensemble correlations conditioned on both `B_past` and `B_future` while preserving unconditional marginals. **I5. Abstract Boundary Data Specification**: Mathematical assignment of fields or states on `∂Ω` defining `H_adm`.'
        ]
      },
      {
        number: '1.8',
        title: 'Cross-Domain Taxonomic Diagnostics, Structural Homomorphism & Canonical Category Mistakes',
        epistemicFocus: 'Structure-preserving homomorphism Φ_hom mapping T/C/E/I into physical spaces (distinct from strict categorical functor) and dissolving Category Mistakes 1–4',
        paragraphs: [
          'Setting all 21 strata side by side (Tables 1.1 and 1.2) yields an exact **structure-preserving conceptual homomorphism (structural correspondence)** `Φ_hom : (Time, Causation, Explanation, Information) → (LorMfd, SymplAct, ProbHilb, InfoChan)` mapping taxonomy domains and structural relations onto Chapter 2’s mathematical spaces: `T1–T3` map onto Lorentzian manifolds and antiunitary group actions in `LorMfd` (an exact group-action homomorphism); `C4–C6` and `E3` map onto symplectic phase-space boundary-value problems and Fredholm action extrema in `SymplAct` (an exact variational correspondence); `I4` and `R2–R3` map onto two-boundary Kraus-instrument / POVM state spaces and Schwinger–Keldysh contours in `ProbHilb`; and `I1–I3` map onto symmetric mutual-information vs. Landauer-dissipative/no-signalling channels in `InfoChan`. Qualifying `Φ_hom` rigorously as a **structural correspondence**—exact on group symmetries, boundary projections, and probability marginals while heuristic/analogical for historical genealogical narratives (`E5`)—avoids overclaiming an unrestricted category-theoretic functor over arbitrary philosophical concepts.',
          'Through this fourfold diagnostic grid, the **Four Canonical Category Mistakes** dominating modern retrocausality controversies dissolve before a single differential equation is integrated: **(Mistake 1) The Chronology–Determination Conflation**, equating coordinate order `T1` with antecedent determination `C4` while overlooking two-boundary admissibility `C5–C6` and variational explanation `E3`; **(Mistake 2) The Symmetry–Signalling Conflation**, assuming that bidirectional boundary dependence (`C5–C6`) entails controllable backward channel capacity (`I3`) capable of triggering Black–Flew bilking contradictions; **(Mistake 3) The Agency–Ontology Conflation**, treating acyclic interventionist DAGs (`C3`) and dissipative retrodiction (`E5`) as exhaustive of fundamental microphysics (`T3`); and **(Mistake 4) The Conditional–Marginal Conflation**, mistaking post-selected coincidence sorting (`I4`)—such as recovering interference fringes in delayed-choice quantum erasers—for retroactive modification of already-recorded marginal distributions (`I2`). Disentangling these four mistakes establishes an airtight philosophical launchpad for Chapter 2.'
        ],
        theoremBox: {
          kind: 'Definition',
          number: '1.1',
          title: 'Four-Domain Decoupling Principle (Time · Causation · Explanation · Information)',
          statement:
            'For any events e₁, e₂ ∈ Ω inside a time-reversal-invariant theory (T3, Mod_phys), chronological order T1 (t(e₁) < t(e₂)) is neither necessary nor sufficient for bidirectional boundary determination C6, whereas physical record writing/erasure (I2, ΔQ ≥ k_B T ln 2), trace-anchored narrative (E5), and controllable signalling (I3) strictly presuppose contingent thermodynamic entropy asymmetry T4 and non-trivial channel marginalization.',
          proofSteps: [
            '1. Let L be a time-reversal-invariant dynamical operator satisfying Θ ∘ L ∘ Θ⁻¹ = L with basis-independent antiunitary Θ = U K (T3, Mod_phys).',
            '2. Any solution h ∈ Sol(L) bounded by (B_past, B_future) makes interior properties h(t) depend symmetrically on both temporal boundaries (C5–C6, E3) regardless of T1.',
            '3. Controllable backward signalling I3 from t_f to t_p fails identically whenever POVM completeness ∑_b M_b = I and microcausality [Ô(x), Ô(y)] = 0 enforce marginalization invariance (I4 ≠ I3).',
            '4. Macroscopic memory asymmetry T5 and explanatory genealogy E5 track irreversible Landauer record writing I2 (ΔQ ≥ k_B T ln 2) along T4 rather than reversing T3.'
          ],
          sourceNote: 'Synthese Conceptual Taxonomy · Chapter 1 (§1.5–1.8) & Price (1996, Ch. 6).'
        }
      }
    ]
  },
  {
    id: 'part-2',
    number: 2,
    kicker: 'Principal Investigation 2 · Physical Realization of Chapter 1',
    title: 'The Physics of Time, Boundary Determination, Explanation, and Information',
    epigraph:
      '“The wave equation knows no preference between outgoing ripples and incoming spherical shells; it is the boundary condition—not the operator—that breaks symmetry.” — Classical & Quantum Field Principle',
    pullQuote:
      'Every philosophical category of Chapter 1 finds an exact mathematical counterpart in physics: Lorentzian cones and antiunitary Θ realize Time; Cauchy vs. variational endpoints realize Causation; Green’s kernels and Feynman propagators realize Bidirectional Law; Landauer erasure and projector completeness realize Record Asymmetry and No-Signalling.',
    leadSummary:
      'Chapter 2 systematically expands the physics corresponding to every domain of Chapter 1’s philosophical taxonomy: relativistic spacetime geometry and Wigner time-reversal symmetry (T1–T3); hyperbolic Cauchy evolution versus two-boundary Hamilton action (C4–C6); classical advanced/retarded Green’s kernels and Wheeler–Feynman absorber cancellation (E2–E3); relativistic QFT Feynman propagators and path-integral two-endpoint kernels; and the statistical mechanics of Boltzmann records, Landauer bounds, and quantum no-signalling theorems (I1–I5).',
    chapterIntro: [
      'Chapter 1 established on philosophical and historical grounds that Time, Causation, Explanation, and Information decompose into distinct strata—some strictly time-symmetric, others asymmetrically anchored by cosmological boundary statistics. A critic steeped in the analytic tradition might still ask: does actual mathematical physics bear out those distinctions, or are two-boundary constraints merely an artifact of philosophical wordplay?',
      'Chapter 2 answers that challenge by translating every conceptual layer of Chapter 1 directly into rigorous physical formalism. Across general relativity, Hamiltonian field theory, classical electrodynamics, relativistic quantum field theory, quantum foundations, and non-equilibrium statistical mechanics, we show that fundamental physics already operates with the exact structural separations our taxonomy demands—and that treating initial-value propagation as nature’s exclusive mode of determination rests on overlooking half of the mathematical machinery physics already uses every day.'
    ],
    subsections: [
      {
        number: '2.1',
        title: 'Physics of Time & Dynamical Symmetry (Realizing T1–T3)',
        epistemicFocus: 'Lorentzian light cones, Wigner antiunitary time reversal Θ = U K, nomological necessity □_phys, and CPT invariance vs. CP violation',
        paragraphs: [
          'In relativistic physics, chronological parameter time (`T1`) and invariant causal structure (`T2`) are encoded in a four-dimensional Lorentzian manifold `(M, g_μν)` equipped with metric signature `(−, +, +, +)` (`ds² = g_μν dx^μ dx^ν`). At every spacetime event `p ∈ M`, the null cone `ds² = 0` partitions nearby events into the timelike causal past `J⁻(p)` (`ds² < 0`), the timelike causal future `J⁺(p)` (`ds² < 0`), and the **spacelike exterior (`ds² > 0`)**. Crucially, the metric itself makes no dynamical preference between `J⁺(p)` and `J⁻(p)`, permitting boundary data to constrain interior events along both cones with identical speed limit `v ≤ c`.',
          'At the quantum and field-theoretic level (`T3`), dynamical time symmetry is governed by **Wigner’s theorem**. Any symmetry preserving transition probabilities must be unitary or antiunitary; time reversal `Θ` is explicitly **basis-independent antiunitary** (`Θ_anti = U K`, `Θ² = ±I`, where `U` is unitary and `K` is antiunitary conjugation in a chosen basis, satisfying `Θ i Θ⁻¹ = −i`) so that positive-energy spectra remain bounded from below rather than inverting to negative energies. Under `Θ`, position remains invariant (`Θ x̂ Θ⁻¹ = x̂`) while momentum and spin reverse (`Θ p̂ Θ⁻¹ = −p̂`, `Θ Ĵ Θ⁻¹ = −Ĵ`), preserving canonical commutators `[x̂, p̂] = iħ` and mapping Schrödinger evolution `iħ ∂_t |ψ⟩ = H|ψ⟩` onto its conjugate whenever `[Θ, H] = 0` (or covariantly `Θ ∘ L ∘ Θ⁻¹ = L`). Classical phase space `(T*Q, ω = dq ∧ dp)` preserves Liouville volume `ω^n` identically under `(q, p) ↦ (q, −p)`. When Principle `R1` writes the modal operator `□_phys`, it expresses **nomic necessity** (narrower than unrestricted logical/metaphysical necessity `□_log`) over **globally hyperbolic Hausdorff physical models (`Mod_phys`, `M ≅ ℝ × Σ`)**, excluding Cauchy-horizon / Gödel CTC pathologies by default (while showing in `§12` how Novikov/EKT fixed points generalize consistency even onto wormhole testbeds).',
          'Across Maxwellian electrodynamics, Dirac spinor theory, Yang–Mills gauge fields, and Einstein’s general relativity, fundamental actions satisfy `T` (or universally `CPT` by the Lüders–Pauli theorem, experimentally verified to `< 10⁻¹⁸` in neutral kaon mass bounds `|m_{K⁰} − m_{K̄⁰}|/m`). Because isolated weak-sector meson decays violate pure `CP`/`T` via the CKM Jarlskog phase (`ϵ_K ≈ 2.2 × 10⁻³`), **in the full Standard Model `R1` is anchored strictly by universal `CPT` invariance (`Θ_CPT = C P T`)** rather than `T` alone—preserving S-matrix unitarity (`S† S = I`) while bearing zero responsibility for macroscopic entropy growth or human record asymmetry.'
        ],
        equation: {
          label: '2.1',
          unicodeHtml: '□<sub>phys</sub>(Θ H Θ<sup>−1</sup> = H),   Θ = U K  (Θ i Θ<sup>−1</sup> = −i, Θ<sup>2</sup> = ±I),   (CPT) ℒ(x) (CPT)<sup>−1</sup> = ℒ(−x)',
          plainEquation: 'Box_phys(Theta H Theta^-1 = H),   Theta = U K (Theta i Theta^-1 = -i, Theta^2 = +-I),   (CPT) L(x) (CPT)^-1 = L(-x)',
          caption: 'Nomological Wigner Antiunitary Time-Reversal Symmetry & Relativistic CPT Invariance.',
          plainMeaning:
            'Over all nomologically lawful models Mod_phys, fundamental Hamiltonians and field Lagrangians are dynamically symmetric under basis-independent antiunitary temporal reversal or CPT.',
          derivationSteps: [
            'Require Θ i Θ⁻¹ = −i (Θ² = ±I for integer/half-integer spin) so [x̂, p̂] = iħ stays invariant under x̂ ↦ x̂, p̂ ↦ −p̂.',
            'Transform unitary evolution: Θ exp(−iHt/ħ) Θ⁻¹ = exp(+iHt/ħ), mapping forward evolution directly onto reversed evolution.',
            'Verify Einstein–Hilbert, Maxwell, and QED actions remain invariant up to boundary divergences across ∂Ω.'
          ]
        }
      },
      {
        number: '2.2',
        title: 'Physics of Boundary Determination: Cauchy, Hamilton BVP & Hamilton–Jacobi (Realizing C4–C6)',
        epistemicFocus: 'Leray hyperbolic well-posedness contrasted with Dirichlet/Neumann/Robin BVP, hyperbolic spectral resonances, Jacobi caustics, GHY boundary h_ij, Fredholm cokernel condition, and Ostrogradsky stability',
        paragraphs: [
          'Why did philosophy inherit the habit of equating physical determination solely with antecedent propagation (`C4`)? In mathematical physics, second-order hyperbolic partial differential equations (avoiding higher-derivative **Ostrogradsky ghost instabilities**)—such as the wave equation or Einstein’s equations on a globally hyperbolic spacetime `M ≅ ℝ × Σ`—satisfy **Leray’s well-posedness theorem**: specifying Cauchy data `(φ(t₀), ∂_t φ(t₀))` on a single spacelike slice `Σ₀` uniquely determines a solution inside `D(Σ₀)` (paired with **characteristic initial-boundary value problems [IBVPs]** on null cones `I⁻ / I⁺`). Yet mathematical uniqueness from `Σ₀` is *symmetric*: final Cauchy data on `Σ_f` determines `D⁻(Σ_f)` equally uniquely.',
          'Equally vital is keeping **Hamilton’s two-endpoint boundary-value problem (BVP)** strictly distinct from the **Hamilton–Jacobi initial/characteristic PDE** (`∂_t S + H(q, ∂_q S) = 0`), which evolves a generating wave-front forward or backward from a single initial/terminal surface. In Hamilton’s variational principle (`E3`), varying `δS = ∫_{t₀}^{t_f} (EL) δq dt + [p δq]_{t₀}^{t_f}`—and in general relativity adding the **Gibbons–Hawking–York [GHY] extrinsic-curvature boundary term** `∫_{∂M} K √h d³x`, which forces variational well-posedness by fixing the induced 3-metric `h_ij` on *both* `Σ₀` and `Σ_f` plus the timelike boundary `ℬ`—shows directly how boundary variations vanish under **Dirichlet** (`q(t₀), q(t_f)` fixed), **Neumann** (`q̇(t₀), q̇(t_f)` fixed), or **mixed Robin** (`a q + b q̇` fixed on `∂Ω_past ∪ ∂Ω_future`) conditions. Crucially, unlike elliptic Laplace BVPs, **hyperbolic two-time Dirichlet BVPs (`□φ = 0` on `[0, T]`) can encounter spectral resonances (`ω_n T = kπ`) where `ker(L_lin) ≠ {0}`** and continuous dependence fails unless compatibility holds—which is *precisely why* `Definition 1.1` builds in **Jacobi conjugate-point bounds** and **Fredholm index-zero cokernel orthogonality (`⟨ψ_ker, B⟩ = 0`)**, guaranteeing `H_adm` forms a positive-weight manifold (`μ_W(H_adm) > 0`) in Sobolev space `H^s(Ω)` endowed with Liouville/Wiener measure `μ`.',
          'Philosophically, as Ken Wharton’s **Lagrangian Schema** emphasizes, the Cauchy “Newtonian Schema” treats the present 3D slice as an updating computer, whereas relativistic field theory lives naturally in a 4D **spacetime block `Ω`** bounded by `∂Ω = Σ_past ∪ Σ_future`, where local Euler–Lagrange equations hold pointwise everywhere inside `Ω`.'
        ]
      },
      {
        number: '2.3',
        title: 'Classical Electrodynamics: Retarded & Advanced Green’s Kernels and Absorber Boundaries',
        epistemicFocus: 'Exact identity G_ret + G_adv = 2 G_sym in (−,+,+,+) signature, Penrose conformal I⁺ Sommerfeld boundary, Hogarth/Hoyle–Narlikar FRW vs. ΛCDM limits, and Landau–Lifshitz pre-acceleration',
        paragraphs: [
          'Nowhere is the interplay between **mathematical admissibility** (`T3/C5`) and **boundary realization** (`T4/R4`) sharper than in classical electrodynamics. Under metric signature `(−, +, +, +)`, the d’Alembertian wave operator is `□ = −c⁻² ∂_t² + ∇²`, so Maxwell’s equations in Lorenz gauge (`∂_μ A^μ = 0`) yield `□A^μ = −μ₀ J^μ`. Solving `□G = −δ⁴(x − x′)` yields the **retarded kernel** `G_ret` (forward light cone) and **advanced kernel** `G_adv` (backward light cone), satisfying the exact algebraic identity `G_ret + G_adv = 2 G_sym`. Contrary to loose textbook rhetoric, `G_adv` contains zero internal mathematical inconsistency; physical temporal asymmetry enters **solely through boundary selection**.',
          'Indeed, textbook electrodynamics exhibits a famous **historical irony**: under **Penrose conformal compactification (`I⁻, I⁺, i⁰, i±`)**, the gauge-invariant **Sommerfeld radiation condition** specifying strictly outgoing waves at future null infinity `I⁺` (`lim_{r→∞} r(∂_r − c⁻¹ ∂_t)A = 0`, paired with zero incoming free radiation `A_in = 0` at `I⁻`) is **itself a dual asymptotic boundary condition incorporating `I⁺`**! Wheeler and Feynman (1945), building on Fokker (1929) and Tetrode (1922) under vanishing homogeneous free fields (`A_in = A_out = 0`), derived retarded phenomenology instead from strictly time-symmetric direct interactions `A^μ_sym = ½(A^μ_ret + A^μ_adv)` coupled to a complete future and past absorber. Notably, LIGO gravitational-wave observations likewise place stringent empirical null bounds on any macroscopic advanced-wave GW precursors.',
          'For honesty and historical precision, we must state **two critical caveats** explaining why classical Wheeler–Feynman absorber theory was largely superseded in mid-century physics: first, **Hogarth (1962)** and **Hoyle–Narlikar (1995)** showed that exact cancellation of pre-acceleration advanced waves requires the cosmological **optical-thickness precondition `τ(ω) → ∞`** along future null geodesics—satisfied in steady-state expansion yet violated in our **accelerating `ΛCDM` (`Ω_Λ ≈ 0.69`)** cosmos; second, direct interparticle action encountered severe **quantum self-energy, vacuum-polarization, and field-quantization difficulties**—while classical Abraham–Lorentz–Dirac **pre-acceleration (`τ₀ = 2e² / 3mc³ ~ 10⁻²³ s`)** is a point-charge self-energy artifact cured by the **Landau–Lifshitz perturbative reduction** or QED, **not** evidence for macroscopic retrocausal signalling!'
        ],
        equation: {
          label: '2.2',
          unicodeHtml: 'G<sub>ret</sub>(x, x′) + G<sub>adv</sub>(x, x′) = 2 G<sub>sym</sub>(x, x′),   A<sup>μ</sup><sub>sym</sub>(x) = μ₀ ∫ G<sub>sym</sub>(x, x′) J<sup>μ</sup>(x′) d⁴x′',
          plainEquation: 'G_ret(x, x\') + G_adv(x, x\') = 2 G_sym(x, x\'),   A^mu_sym(x) = mu_0 integral G_sym(x, x\') J^mu(x\') d^4x\'',
          caption: 'Exact Algebraic Symmetry of Maxwell Green’s Kernels (Fokker–Tetrode / Wheeler–Feynman).',
          plainMeaning:
            'Both retarded and advanced kernels satisfy □G = −δ⁴(x − x′); physical radiative asymmetry enters exclusively via boundary conditions on ∂Ω (such as optical thickness τ → ∞ or Sommerfeld conditions at I⁺).',
          derivationSteps: [
            'Verify (−c⁻²∂_t² + ∇²)G_ret = (−c⁻²∂_t² + ∇²)G_adv = −δ⁴(x − x′), making G_sym = ½(G_ret + G_adv) strictly Θ-invariant.',
            'Recognize that the textbook Sommerfeld outgoing-wave condition at I⁺ already imposes a future boundary constraint.',
            'Impose Wheeler–Feynman absorber completeness (optical thickness τ(ω) → ∞) to cancel pre-emission advanced waves while noting Ω_Λ cosmological transparency and QED limits.'
          ]
        },
        workedExample: {
          title: 'Worked Calculation 2.1 · Absorber Cancellation & Covariant Radiation Reaction',
          setup:
            'Consider an accelerating test charge i surrounded by an optically thick (τ(ω) → ∞) complete absorber shell j ≠ i where total fields vanish outside the absorber boundary.',
          steps: [
            'Write the total symmetric field acting on charge i as A_total = ∑_j ½(A^(j)_ret + A^(j)_adv).',
            'Impose the optically thick complete-absorber boundary condition outside the shell: ∑_all ½(A_ret − A_adv) = 0.',
            'Add and subtract ½(A^(i)_ret − A^(i)_adv) to isolate the finite covariant Abraham–Lorentz–Dirac self-force (regularized perturbatively via Landau–Lifshitz beyond τ₀ ~ 10⁻²³ s).'
          ],
          resultEquation: {
            label: '2.2a',
            unicodeHtml: 'F<sup>μ</sup><sub>self</sub> = ½ [F<sup>μ(i)</sup><sub>ret</sub> − F<sup>μ(i)</sup><sub>adv</sub>] = (e² / 6πε₀c³) [d³z<sup>μ</sup>/dτ³ + (u<sup>μ</sup>/c²)(a<sub>ν</sub> a<sup>ν</sup>)]',
            plainEquation: 'F^mu_self = (1/2) [F^(i)mu_ret - F^(i)mu_adv] = (e^2 / (6 pi eps_0 c^3)) [ d^3 z^mu / dtau^3 + (u^mu / c^2)(a_nu a^nu) ]',
            caption: 'Covariant Abraham–Lorentz–Dirac Radiation Reaction Derived from Future Absorber Boundary.',
            plainMeaning:
              'Radiative damping emerges from the collective advanced response of optically thick future absorbers rather than intrinsic time-asymmetry in Maxwell’s equations.'
          },
          takeaway:
            'Even classical outgoing radiation demonstrates how boundary conditions—including Sommerfeld I⁺ conditions—mediate between symmetric laws and asymmetric phenomenology.'
        }
      },
      {
        number: '2.4',
        title: 'Quantum Field Theory, Propagator Decompositions, AQFT Microcausality & Closed-Time Contours',
        epistemicFocus: 'Bidirectional Feynman kernels, Haag–Kastler / Buchholz–Wichmann split property, (−,+,+,+) microcausality [Ô(x), Ô(y)] = 0 ((x − y)² > 0), Schwinger–Keldysh C₊/C₋, OTOCs, & Consistent Histories',
        paragraphs: [
          'If classical electrodynamics reveals how boundary selection separates retarded phenomenology from symmetric Green’s kernels, **relativistic quantum field theory (QFT)** elevates two-boundary structure and relativistic microcausality into the mathematical architecture of all fundamental particle physics. Under `(−, +, +, +)` metric signature, consider the Wightman two-point functions `W⁺(x − y) = ⟨0 | φ̂(x) φ̂(y) | 0⟩` and `W⁻(x − y) = ⟨0 | φ̂(y) φ̂(x) | 0⟩` for a Hermitian scalar field `φ̂(x)` (with anticommutators `{ψ̂(x), ψ̄(y)} = 0` enforcing **spin-statistics microcausality** for fermions). Their commutator yields the **Pauli–Jordan causal function** `iΔ(x − y) = [φ̂(x), φ̂(y)] = G_ret(x − y) − G_adv(x − y)`. In **Algebraic QFT (Haag–Kastler local operator nets `𝒜(𝒪)`)**, relativistic **microcausality** `[Ô(x), Ô(y)] = 0` for all **spacelike separations `(x − y)² > 0`**—combined with the **Buchholz–Wichmann nuclearity / split property** permitting statistically independent local preparations despite **Reeh–Schlieder vacuum entanglement** (every local algebra `𝒜(𝒪)` is cyclic and separating for `|0⟩`)—serves as the **load-bearing mathematical safeguard protecting Lorentz-invariant no-signalling** across every inertial frame, separating **spacelike no-signalling** cleanly from **timelike backward no-signalling (`t_p < t_f`)**.',
          'Contrast `Δ(x − y)` with the **Hadamard anticommutator function** `G^(1)(x − y) = ⟨0 | {φ̂(x), φ̂(y)} | 0⟩`, which remains nonzero across spacelike intervals. The time-ordered **Feynman propagator** `G_F(x − y) = −i⟨0 | T{φ̂(x) φ̂(y)} | 0⟩` splits algebraically into `G_F(x − y) = ½(G_ret(x − y) + G_adv(x − y)) + (i/2) G^(1)(x − y)`, embedding the exact time-symmetric real kernel `G_bar = ½(G_ret + G_adv)` inside every Feynman loop, Dyson series, and **S-matrix crossing symmetry** (`A + B → C + D` analytically continued from `A + C̄ → B̄ + D`)—while **commutators of gauge-invariant observables** still depend strictly on `iΔ = G_ret − G_adv`, satisfying **Bogoliubov’s causal condition** and **cluster decomposition** without superluminal signalling.',
          'Equally illuminating is the careful distinction between **mathematical contour structure** and **physical two-boundary interpretation** in QFT. In collider physics, the LSZ reduction formula evaluates **in–out S-matrix amplitudes** `⟨out | T{φ̂(x₁)⋯φ̂(x_n)} | in⟩`, fixing both past (`I⁻`) and future (`I⁺`) asymptotic states symmetrically. By contrast, in cosmology, trapped-ion **out-of-time-order correlators (OTOCs)**, and non-equilibrium QFT, the standard **Schwinger–Keldysh Closed-Time-Path (CTP)** formalism folds time forward along branch `C₊` from `t₀` to `t_max` and backward along `C₋` back to `t₀` via `Z[J₊, J₋] = Tr[ρ(t₀) T̃ exp(−i ∫ J₋ φ̂₋) T exp(+i ∫ J₊ φ̂₊)]`—where the turnaround at `t_max` simply inserts an **unconstrained resolution of the identity `∑_n |n(t_max)⟩⟨n(t_max)| = I`**! Mathematically, doubling the time contour is strictly an algebraic device to evaluate causal **in–in expectation values** `Tr[ρ(t₀) Ô(t)]` determined solely by initial state `ρ(t₀)` (so setting `J₊ = J₋` leaves `G_R(t − t_f) ≡ 0` for `t < t_f`, while the KMS thermal relation `G_K(ω) = coth(βω/2)(G_R(ω) − G_A(ω))` bridges CTP directly to Connes–Rovelli thermal time in §16). Therefore, **standard Schwinger–Keldysh does NOT by itself establish two independently imposed physical temporal boundary conditions.** To obtain genuine two-boundary physical determination inside the CTP contour infrastructure, TDCD introduces an explicit additional physical postulate: replacing the trivial identity turnaround `I_{t_max}` with a **non-trivial final boundary weight / projection operator `E_future(t_max) ≠ I`**, yielding the **generalized two-boundary CTP generating functional** `Z[J₊, J₋; ρ₀, E_future] = Tr[E_future(t_max) T{...} ρ(t₀) T̃{...}]` (recovering standard causal `in–in` CTP at `E_future = I`, and `in–out` LSZ / TSVF when `ρ₀ = |in⟩⟨in|, E_future = |out⟩⟨out|`).',
          'At the non-perturbative and foundational level, **Feynman’s spacetime path integral** `Z[B_past, B_future] = ∫_{B_past}^{B_future} Dφ exp(i S[φ]/ħ)` sums over entire four-dimensional field histories anchored at both hypersurfaces `Σ_past ∪ Σ_future`. Furthermore, this coarse-grained history structure maps directly onto the **Consistent Histories (Decoherence Functional) formalism** of Griffiths, Omnès, and Gell-Mann–Hartle: `D(α, α′) = Tr[C_α ρ C†_{α′}]` weights complete history chains `C_α = P_{α_n}(t_n) ⋯ P_{α_1}(t_1)` symmetrically; answering **Dowker and Kent’s (1996) critique** that infinitely many incompatible consistent sets exist mathematically, **Zurek’s Quantum Darwinism / pointer-basis einselection (`T4 → I2`)** picks out the empirically realized quasiclassical framework whenever `Re D(α, α′) ≈ 0` (`α ≠ α′`). Combined with quantum Wheeler–Feynman absorber QED (Davies 1971; Pegg 1975) and the **CPT theorem** of Lüders–Pauli–Jost (`Θ_CPT = C P T`), relativistic QFT guarantees exact micro-reciprocity (`R1`) and Lorentz-invariant no-signalling (`R3`) simultaneously.'
        ],
        equation: {
          label: '2.3',
          unicodeHtml: '[Ô(x), Ô(y)] = 0 ((x − y)² > 0),   G<sub>F</sub> = ½(G<sub>ret</sub> + G<sub>adv</sub>) + (i/2) G<sup>(1)</sup>',
          plainEquation: '[O_hat(x), O_hat(y)] = 0  for spacelike (x - y)^2 > 0 in (-,+,+,+),   G_F = (1/2)(G_ret + G_adv) + (i/2) G^(1)',
          caption: 'Relativistic Microcausality Protecting No-Signalling & Exact Feynman Propagator Time-Symmetry.',
          plainMeaning:
            'Spacelike commutator vanishing [Ô(x), Ô(y)] = 0 for (x − y)² > 0 in (−,+,+,+) enforces Lorentz-invariant no-signalling (R3), G_F embeds symmetric propagation ½(G_ret + G_adv), and standard Schwinger–Keldysh (E_f = I) embeds inside generalized two-boundary CTP (E_f ≠ I).',
          derivationSteps: [
            'Verify [φ̂(x), φ̂(y)] = iΔ(x − y) = i(G_ret − G_adv) = 0 identically for spacelike (x − y)² > 0 under metric signature (−,+,+,+).',
            'Decompose −i⟨0|T{φ̂(x)φ̂(y)}|0⟩ into time-symmetric real part ½(G_ret + G_adv) plus Hadamard correlation (i/2)G^(1).',
            'Separate standard in–in CTP (turnaround identity E_f = I, computing causal expectations from ρ₀ alone via G_R) from the added two-boundary CTP postulate (E_f ≠ I at t_max).'
          ]
        },
        workedExample: {
          title: 'Worked Calculation 2.2 · Standard In–In CTP (E_f = I) vs. Generalized Two-Boundary CTP / LSZ (E_f ≠ I)',
          setup:
            'Compare the expectation shift δ⟨Ô(t)⟩ in a scalar QFT perturbed by a source J_f(t_f) acting at a future time t_f > t under (a) standard Schwinger–Keldysh in–in CTP (E_f = I at t_max) and (b) explicit two-boundary conditioning (E_f = |out⟩⟨out| ≠ I).',
          steps: [
            'In standard Schwinger–Keldysh CTP (C₊ forward, C₋ backward joined by identity I_{t_max}), setting physical sources equal J_+ = J_- = J_f enforces exact unitarity cancellation along the turnaround at t_max.',
            'Because variations δZ[J_+, J_-; ρ₀, I]/δJ_q(t) couple strictly via retarded kernel G_R(t − t_f) ∝ θ(t − t_f), t < t_f forces G_R(t − t_f) = 0 identically—demonstrating that standard CTP derives causal single-boundary expectations rather than imposing a future boundary.',
            'By contrast, introducing an explicit additional future boundary operator E_f(t_max) = |out⟩⟨out| ≠ I (generalized two-boundary CTP / in–out LSZ ⟨out|T{Ô(t)}|in⟩) fixes both ends independently, activating the bidirectional Feynman kernel G_F(t − t_f) ≠ 0 for t < t_f.'
          ],
          resultEquation: {
            label: '2.3a',
            unicodeHtml: 'δ⟨Ô(t)⟩<sub>in–in (E<sub>f</sub>=I)</sub> / δJ<sub>f</sub>(t<sub>f</sub>) = −G<sub>R</sub>(t − t<sub>f</sub>) ≡ 0 (t < t<sub>f</sub>),   whereas  ⟨out|T{φ̂(t)φ̂(t<sub>f</sub>)}|in⟩<sub>(E<sub>f</sub>≠I)</sub> ∝ G<sub>F</sub>(t − t<sub>f</sub>) ≠ 0',
            plainEquation: 'delta<O_hat(t)>_{in-in (E_f=I)} / delta J_f(t_f) = -G_R(t - t_f) = 0 (t < t_f),   whereas  <out| T{ phi_hat(t) phi_hat(t_f) } |in>_{(E_f != I)} ~ G_F(t - t_f) != 0',
            caption: 'Distinguishing Algebraic In–In Contour Doubling (E_f = I) from Explicit Two-Boundary Selection (E_f ≠ I).',
            plainMeaning:
              'Standard Schwinger–Keldysh (E_f = I) yields strictly retarded expectations from ρ₀ alone, while replacing identity turnaround I with E_f ≠ I explicitly introduces future boundary selection.'
          },
          takeaway:
            'Standard Schwinger–Keldysh provides compatible contour geometry without by itself proving two-boundary ontology; two-boundary selection enters cleanly as the additional E_f ≠ I postulate.'
        }
      },
      {
        number: '2.5',
        title: 'Physics of Explanation & Information: Landauer Bounds, IGRT Speed Limits & Non-Circular No-Signalling',
        epistemicFocus: 'Physical realization of Boltzmann/Crooks thermodynamics, Reeb–Wolf quantum Landauer bounds, Bulaqueña IGRT ds_QFI proper time, and Kraus/POVM derivation of R3',
        paragraphs: [
          'Finally, physics supplies quantitative laws anchoring Chapter 1’s distinctions within **Explanation** (`E1–E5`) and **Information** (`I1–I5`). First, **physical record formation (`I2`)** is governed by statistical mechanics and **Landauer’s principle** (1961), derived directly from unitary evolution plus phase-space Liouville volume conservation coupled to a thermal reservoir (sharpened for finite quantum baths via **Reeb and Wolf’s** quantum Landauer inequality `ΔQ ≥ k_B T ΔS_vN`): writing or resetting a reliable macroscopic memory bit dissipates at least `ΔQ ≥ k_B T ln 2 ≈ 2.87 × 10⁻²¹ J` (at `300 K`) into the bath (`ΔS_total ≥ k_B ln 2`). Crucially, physics distinguishes this **irreversible writing/erasure cost** from **reversible unitary readout or optical amplification**, which need not dissipate `k_B T ln 2` until an irreversible macroscopic trace is latched. Simultaneously, **Marlon D. Bulaqueña’s Information-Geometric Resonant Time (`IGRT`, 2026)** bridges quantum metrology with relativistic proper time by tying Quantum Fisher Information arc length `ds_QFI` on projective Hilbert space `PU(H)` directly to physical clock rate (`dτ_obs = [ℏ / (2 ΔH_loc)] ds_QFI`) alongside the **Mandelstam–Tamm quantum speed limit** (`ΔE Δt ≥ ħ/2`).',
          'Second, within standard linear quantum mechanics and relativistic AQFT, **zero operational backward signalling (`R3`, `I3 = 0`)** is a **derived theorem** (**Theorem 5.0**, proved in full inside §11 and Appendix B), not an independent circular postulate. Setting intermediate slice density matrix `ρ_p := ρ(t)` (absorbing pre-measurement `U(t, t₀)`), any intermediate linear **quantum instrument** `{K_{a,μ} : ∑_{a,μ} K†_{a,μ} K_{a,μ} = I, E_a = ∑_μ K†_{a,μ} K_{a,μ}}`, `β`-independent post-measurement unitary propagator `U ≡ U(t_f, t)` evolving `K_{a,μ} ρ_p K†_{a,μ}` forward from `t` to `t_f`, and any future POVM `{M_b(β) ≥ 0, ∑_b M_b(β) = I}` at `t_f > t`, define the joint Kolmogorov measure `P(a, b | ρ_p, β) = ∑_μ Tr[M_b(β) U(t_f,t) K_{a,μ} ρ_p K†_{a,μ} U†(t_f,t)]`. Summing out `b` *derives* `P(a | ρ_p, β) = Tr[E_a ρ_p]` **without circularly assuming future independence `P(b | B_p, β) = P(b | B_p)` in advance** (with speculative non-linear or beyond-QM ontic models addressed separately via consistency in `No-Go Theorem 5.1`). Combined with AQFT microcausality `[Ô(x), Ô(y)] = 0` for `(x − y)² > 0`, Chapter 1’s four philosophical pillars lock via our structural homomorphism `Φ_hom` into `(LorMfd, SymplAct, ProbHilb, InfoChan)` (Tables 2.1 and 2.2).'
        ],
        theoremBox: {
          kind: 'Proposition',
          number: '2.1',
          title: 'Physical Realization & Non-Circularity of the Four-Domain Decoupling',
          statement:
            'In any CPT-symmetric, locally unitary field theory equipped with a contingent low-entropy Past Hypothesis boundary (C_{αβγδ} ≈ 0), irreversible record writing dissipates ΔQ ≥ k_B T ln 2 (I2) and backward signalling vanishes as a derived theorem of Kraus-instrument / POVM completeness and spacelike microcausality (I3 = 0, (x − y)² > 0), while action BVPs, G_F, and joint two-boundary sub-ensembles (I4) remain mathematically bidirectional.',
          proofSteps: [
            '1. Nomological symmetry ΘHΘ⁻¹ = H and G_ret + G_adv = 2 G_sym keep bidirectional solution branches live over Mod_phys (R1).',
            '2. Landauer writing/erasure ΔQ ≥ k_B T ln 2 plus Crooks asymmetry along the contingent Past Hypothesis restricts stable trace storage I2 to past events (R4).',
            '3. Summing joint two-boundary Kraus/POVM measures P(a, b | ρ_p, β) via ∑_b M_b(β) = I and [Ô(x), Ô(y)] = 0 ((x − y)² > 0) derives C_sig(t_f → t_p) = 0 non-circularly (Theorem 5.0 / R3).'
          ],
          sourceNote: 'Chapter 2 Synthesis · Bridging Philosophy (Ch. 1) and Physics (Ch. 2–7).'
        }
      }
    ]
  },
  {
    id: 'part-3',
    number: 3,
    kicker: 'Principal Investigation 3',
    title: 'Two-Boundary Physics and the Determination of Histories',
    epigraph:
      '“Nature minimizes the action between two fixed ends rather than merely pushing an initial state blindly forward.” — Variational Physics Tradition',
    pullQuote:
      'In variational mechanics, a physical history is not generated moment by moment from t₀ alone; it is selected globally between both temporal endpoints.',
    leadSummary:
      'Part 3 investigates two-boundary formulations, Hamilton’s action principle, Page–Wootters / Hartle–Hawking boundaries, and final-state black-hole constraints.',
    chapterIntro: [
      'Physics possesses two mathematically equivalent—yet conceptually opposite—ways of formulating dynamics. The **initial-value (Cauchy) picture** specifies positions and velocities at a single instant t₀ and integrates differential equations forward step by step. The **variational (two-boundary) picture** specifies configurations at both an initial time t₀ and a final time t_f and selects the trajectory that extremizes the global action integral S[q].',
      'Although both formulations yield the identical Euler–Lagrange equations locally, they invite starkly different pictures of physical determination. In the Cauchy picture, the past generates the future like falling dominoes. In the variational picture, the complete history is selected globally by conditions imposed at both ends.'
    ],
    subsections: [
      {
        number: '6',
        title: 'Cauchy Unfolding, Hamilton Two-Endpoint BVPs & Hamilton–Jacobi PDEs',
        epistemicFocus: 'Hamilton’s Principle (Dirichlet/Neumann/Robin BVP, Jacobi caustics, GHY boundary) contrasted against the Hamilton–Jacobi characteristic PDE',
        paragraphs: [
          'Consider Fermat’s principle of least time in optics or Hamilton’s principle `δS = 0` in classical field theory. When light travels from point `A` in air to point `B` in water, Snell’s law holds locally at every point along the trajectory, yet the global variational formulation selects the extremal curve connecting both fixed boundary points `A` and `B`. Rigorously, one must keep **Hamilton’s two-endpoint boundary-value problem (BVP)**—whose variation `δS = ∫ (EL) δq dt + [p δq]_{t₀}^{t_f}` (augmented by the Gibbons–Hawking–York term in gravity) enforces fixed **Dirichlet** `(q(t₀), q(t_f))`, **Neumann** `(q̇(t₀), q̇(t_f))`, or **mixed Robin** combinations across `∂Ω_past ∪ ∂Ω_future`, acknowledging **Jacobi conjugate points / caustics** when endpoints span focal intervals—sharply distinct from the **Hamilton–Jacobi PDE** (`∂_t S + H(q, ∂_q S) = 0`), a single-boundary characteristic evolution equation generating wave fronts from one hypersurface.',
          'Philosophers of physics such as Ken Wharton have argued that our bias toward the Newtonian Cauchy schema (“time-evolution paradigm”) obscures the fact that relativistic field theories are naturally formulated as four-dimensional boundary-value problems (“Lagrangian schema”), consistent with **Page–Wootters** timeless Wheeler–DeWitt conditioning (`Ĥ|Ψ⟩ = 0`) and **Bulaqueña’s IGRT** metric proper-time geometry. On a spacetime region `Ω`, imposing compatible field data on `∂Ω = Σ_past ∪ Σ_future` (satisfying Fredholm compatibility so `H_adm ≠ ∅`) determines the interior history globally while preserving pointwise Euler–Lagrange locality everywhere inside `Ω`.'
        ],
        equation: {
          label: '3.1',
          unicodeHtml: 'δ S[φ] = δ ∫<sub>Ω</sub> ℒ(φ, ∂<sub>μ</sub>φ) d⁴x = 0  |<sub>∂Ω = ∂Ω<sub>past</sub> ∪ ∂Ω<sub>future</sub></sub>',
          plainEquation: 'delta S[phi] = delta integral_Omega L(phi, d_mu phi) d^4x = 0   subject to boundaries on dOmega_past U dOmega_future',
          caption: 'Two-Boundary Variational Principle (Dirichlet / Neumann / Robin BVP) over Spacetime Volume Ω.',
          plainMeaning:
            'The physical field history inside Ω is the stationary point of the action functional subject to compatible constraints at both past and future boundaries.',
          derivationSteps: [
            'Vary the action S[φ] → S[φ + δφ] with Dirichlet, Neumann, or Robin boundary variations fixed on ∂Ω_past ∪ ∂Ω_future (plus GHY boundary in GR).',
            'Integrate by parts to isolate local Euler–Lagrange equations δℒ/δφ − ∂_μ(δℒ/δ(∂_μφ)) = 0 outside Jacobi caustics.',
            'Contrast this global two-endpoint BVP with the single-surface Hamilton–Jacobi characteristic PDE ∂_t S + H(q, ∂_q S) = 0.'
          ]
        }
      },
      {
        number: '7',
        title: 'Final-State Constraints, Two-Time Cosmology & Black-Hole Boundaries',
        epistemicFocus: 'Schulman’s smooth attractor weights W_μ(B_future), Hartle–Hawking vs. Lorentzian boundaries, and Horowitz–Maldacena / Lloyd–Preskill black-hole final state',
        paragraphs: [
          'In statistical mechanics and cosmology, Lawrence Schulman (1997) analyzed systems subject to both initial and final coarse-grained macroscopic constraints. A common objection holds that imposing an exact future microstate `B_future` has **Liouville measure zero** and represents extreme fine-tuning. Schulman’s crucial technical insight resolves this cleanly: macroscopic future constraints enter not as zero-measure Dirac spikes, but as **smooth attractor measure weights `W_μ(B_future)`** partitioning phase space `Γ` via finite-volume macrostates wrt the invariant Liouville/Wiener measure `μ`. Whenever the two-boundary interval greatly exceeds the **relaxation timescale (`τ_relax ≪ t_f − t₀`)**, intermediate dynamics looks indistinguishable from ordinary forward thermodynamics; near a tight cosmic contraction, **Hartle–Hawking Euclidean no-boundary** vs. **Vilenkin tunneling** vs. real Lorentzian turning points select coherent two-ended histories.',
          'In quantum gravity and black-hole physics, timeless Page–Wootters conditioning faces **Kuchař’s (1992) multi-clock problem** (non-equivalent internal clocks disagree and freeze sequential two-time transition probabilities); **Giovannetti, Lloyd, and Maccone (2015)** resolve multi-time transition amplitudes via generalized conditional projectors, while **Bulaqueña’s IGRT** (`ds_QFI`) extracts invariant clock geometry from quantum Fisher metrology. Meanwhile, in the **Black-Hole Information Paradox** and **AMPS firewall** debate, **Penington (2020)** and Almheiri–Engelhardt–Marolf–Maxfield derive unitary **Page curves** from semiclassical **replica wormholes and quantum extremal islands** without post-selection, whereas **Horowitz and Maldacena (2004)** impose an explicit **final-state quantum boundary condition** `⟨BH_final|` at the black-hole singularity (`r = 0`) projecting infalling matter and Hawking partners onto a Bell state. Rigorously, **Seth Lloyd and John Preskill (2014)** proved that generic infalling interactions can induce small departures from exact post-selected unitarity unless specific dynamical constraints hold—separating standard island saddle-point unitarity from falsifiable final-state corrections.'
        ]
      },
      {
        number: '8',
        title: 'From Initial Generation to Joint Boundary Determination',
        epistemicFocus: 'Rethinking how physical histories are constituted across kinematic, measure-weighted, and epistemic modes',
        paragraphs: [
          'Should a physical history be understood as the sequential unfolding of an initial state, or as a globally constrained solution compatible with conditions at multiple temporal boundaries? Notice that the Cauchy picture is actually a **special limiting case** of the two-boundary picture in which the future boundary is left thermodynamically unconstrained (`W_μ(B_future) ≡ 1`).',
          'Whenever future boundaries carry non-trivial structure—whether as kinematic endpoint constraints in variational mechanics, smooth phase-space weights in two-time cosmology, final-state horizon projections in black-hole evaporation, or post-selected states in quantum measurement—treating history as exclusively past-generated omits half of the structural boundary conditions defining `H_adm`.'
        ]
      }
    ]
  },
  {
    id: 'part-4',
    number: 4,
    kicker: 'Principal Investigation 4',
    title: 'The Present as a Temporally Constrained Event',
    epigraph:
      '“The present is not a passive bucket catching only what spills from the past; it is a node where past and future boundary relations meet.” — Analytical Framework',
    pullQuote:
      'A temporally constrained present does not receive backward messages; its admissible properties depend jointly on its boundary relations in both directions.',
    leadSummary:
      'Part 4 formalizes the concept of a temporally constrained present within phase space, path integrals, and Hilbert space rather than leaving it as a loose metaphysical metaphor.',
    chapterIntro: [
      'In naive temporal metaphysics, the present moment t is pictured as a razor-thin frontier receiving causal inputs solely from t − δt and broadcasting outputs solely toward t + δt. This Markovian picture fits forward deterministic integration, yet breaks down when physical descriptions depend on global or two-boundary constraints.',
      'To turn the idea of a **temporally constrained present** into rigorous physics rather than poetic metaphor, we must specify exactly which mathematical objects at an intermediate time t encode dependence on both earlier and later boundaries—and prove that those objects remain fully compatible with local field equations.'
    ],
    subsections: [
      {
        number: '9',
        title: 'Beyond the Markovian Frontier',
        epistemicFocus: 'Phase-space and path-integral conditioning at intermediate time t',
        paragraphs: [
          'In Feynman’s path-integral formulation of quantum mechanics, the amplitude for a particle prepared at (x₀, t₀) and detected at (x_f, t_f) to pass through an intermediate region A at time t ∈ (t₀, t_f) is obtained by summing e^{iS[q]/ħ} over all paths anchored at **both** x₀ and x_f.',
          'Crucially, the intermediate conditional probability density does not factorize into a purely past-conditioned wave packet once the final boundary at t_f is fixed. The physical description of the event at intermediate time t is structurally relational: it depends on the full two-ended bridge linking (x₀, t₀) and (x_f, t_f).'
        ],
        equation: {
          label: '4.1',
          unicodeHtml: 'K(x, t | x<sub>0</sub>, t<sub>0</sub>; x<sub>f</sub>, t<sub>f</sub>) = ∫<sub>q(t<sub>0</sub>)=x<sub>0</sub></sub><sup>q(t<sub>f</sub>)=x<sub>f</sub></sup> 𝒟q δ(q(t) − x) exp(i S[q] / ħ)',
          plainEquation: 'K(x, t | x_0, t_0; x_f, t_f) = integral_{q(t_0)=x_0}^{q(t_f)=x_f} Dq delta(q(t) - x) exp(i S[q] / hbar)',
          caption: 'Two-Boundary Conditional Path-Integral Kernel at Intermediate Time t.',
          plainMeaning:
            'Intermediate event amplitudes depend symmetrically on both the initial boundary q(t_0) = x_0 and final boundary q(t_f) = x_f.',
          derivationSteps: [
            'Split the action S[q] across [t_0, t] and [t, t_f]: S = S₁ + S₂.',
            'Integrate over intermediate paths to obtain the product K(x_f, t_f; x, t) · K(x, t; x_0, t_0).',
            'Normalize over intermediate outcomes x to express conditional present state dependence on both boundaries.'
          ]
        }
      },
      {
        number: '10',
        title: 'Local Equations Under Global Constraints',
        epistemicFocus: 'Reconciling local physical laws with bidirectional boundary dependence',
        paragraphs: [
          'A frequent objection to bidirectional boundary models is that they appear to conflict either with locality or with standard **hyperbolic Cauchy uniqueness**. On the first point, Laplace’s equation `∇²V = 0` in electrostatics is strictly local at every interior point, yet `V(x)` inside a chamber depends globally on the voltages fixed along the surrounding wall. Replacing spatial boundaries with **temporal boundaries** preserves pointwise PDE locality: local equations `L(φ, ∂φ) = 0` hold everywhere inside `Ω = [t₀, t_f] × Σ` without nonlocal source terms.',
          'On the second point, it is essential to clarify precisely what `B_past` contains—and why `Proposition 4.1` does **not** contradict the Leray / Choquet–Bruhat uniqueness theorem for well-posed hyperbolic PDEs! If `B_past` specified *complete global Cauchy data* `(φ|_{Σ₀}, π|_{Σ₀})` (both field configuration and its conjugate canonical momentum / normal derivative `π = ∂ℒ/∂(∂_t φ)`) across an entire Cauchy hypersurface `Σ₀`, then well-posed hyperbolic dynamics would determine a strictly unique solution `φ` everywhere in the future domain of dependence `D⁺(Σ₀)`, leaving no room for two distinct solutions `φ₁ ≠ φ₂` sharing `B_past`. In `Proposition 4.1`, **`B_past` explicitly does NOT constitute complete global Cauchy data.** Instead, `B_past` encodes one of three standard **incomplete past boundary specifications** under which `Sol(L) ∩ B_past` remains strictly multi-valued prior to `B_future`: *(i) Half-Cauchy Dirichlet configuration data* `B_past = { φ|_{Σ₀} = φ₀ }`, which fixes positions/field values on `Σ₀` while leaving conjugate velocities/momenta `π|_{Σ₀}` free to be jointly selected by future configuration data `B_future = { φ|_{Σ_f} = φ_f }` (non-focal two-endpoint variational BVP); *(ii) Coarse-grained macrostate or partial-slice data* `B_past` (a finite-volume phase-space cell `M_past` or partial spatial sub-region `Σ_0^{(A)} ⊊ Σ_0` whose domain of dependence `D⁺(Σ_0^{(A)})` excludes incoming modes from `Σ_0 ∖ Σ_0^{(A)}`); or *(iii) Pre-selected quantum ensemble data* `|ψ(t₀)⟩`, which leaves incompatible intermediate observables open until final post-selection `⟨φ(t_f)|`. Under any of these incomplete `B_past` specifications, `Sol(L) ∩ B_past` contains distinct local solutions selected jointly by `B_future` with zero violation of hyperbolic uniqueness.'
        ],
        theoremBox: {
          kind: 'Proposition',
          number: '4.1',
          title: 'Compatibility of Local Dynamics, Hyperbolic Cauchy Uniqueness & Incomplete Past Data',
          statement:
            'Whenever past boundary specification B_past is incomplete relative to full global Cauchy data (φ|_{Σ₀}, π|_{Σ₀})—specifically (i) half-Cauchy Dirichlet configuration φ|_{Σ₀} omitting conjugate momenta π|_{Σ₀}, (ii) coarse-grained macrostate or partial-region data Σ_0^{(A)} ⊊ Σ_0, or (iii) pre-selected quantum state data—local differential laws L(φ(x), ∂_μ φ(x)) = 0 hold pointwise at every interior event x ∈ Ω while distinct solutions φ₁ ≠ φ₂ in Sol(L) ∩ B_past vary non-trivially with final boundary data B_future without violating hyperbolic Cauchy uniqueness.',
          proofSteps: [
            '1. Distinguish complete global Cauchy data (φ|_{Σ₀}, π|_{Σ₀}) (which uniquely fixes φ on D⁺(Σ₀) by Leray uniqueness) from incomplete B_past (e.g., half-Cauchy configuration φ|_{Σ₀} = φ₀ leaving canonical momenta π|_{Σ₀} unconstrained, or coarse macrostates / partial sub-slices Σ_0^{(A)} ⊊ Σ_0).',
            '2. Let φ₁ ≠ φ₂ be two distinct solutions in Sol(L) ∩ B_past sharing identical incomplete B_past (hence differing in unfixed initial momenta π|_{Σ₀}, exterior modes on Σ_0 ∖ Σ_0^{(A)}, or post-selected branch) and distinguished by compatible B_future ∈ {φ|_{Σ_f}, π|_{Σ_f}}.',
            '3. At every interior point x ∈ Ω, both φ₁(x) and φ₂(x) satisfy the exact same local Euler–Lagrange equation L(φ, ∂_μ φ) = 0 without nonlocal sources, so interior divergence arises strictly from global boundary selection across (B_past, B_future).'
          ],
          sourceNote: 'Elliptic/Hyperbolic Two-Endpoint Equivalence & Incomplete Cauchy Data · Part 4 (§10).'
        }
      }
    ]
  },
  {
    id: 'part-5',
    number: 5,
    kicker: 'Principal Investigation 5',
    title: 'The Difference Between Causal Influence and Global Consistency',
    epigraph:
      '“Not every constraint that restricts what can happen at t₀ exerts a controllable push from t_f back to t₀.” — Consistency Principle',
    pullQuote:
      'A future boundary condition can restrict the set of physically admissible histories without sending controllable signals into the past.',
    leadSummary:
      'Part 5 establishes the decisive analytical boundary of this paper: separating backward-directed causal signalling (which triggers paradoxes) from global two-boundary consistency (which does not).',
    chapterIntro: [
      'Critics of retrocausality rightly worry about causal paradoxes. If an experimenter at 3:00 PM could flip a switch to send a readable message backward to 2:00 PM, an assistant at 2:00 PM could commit to flipping the switch at 3:00 PM if and only if no message arrived—producing the classic grandfather contradiction.',
      'To evaluate bidirectional physics rigorously, we must therefore draw an unbreakable distinction between two fundamentally different propositions: (P1) *A future event physically influences an earlier event through a controllable backward-directed causal mechanism*, versus (P2) *A future boundary condition restricts the set of physically admissible histories containing an earlier event.*'
    ],
    subsections: [
      {
        number: '11',
        title: 'Backward Mechanism vs. History-Space Restriction (Theorem 5.0: Non-Circular R3 Proof & Qubit Check)',
        epistemicFocus: 'Theorem 5.0 in main text, explicit quantifier/operator ordering U(t_f, t), non-circularity definition, spacelike vs. backward no-signalling, AQFT split property, and Worked Calculation 5.1',
        paragraphs: [
          'These two propositions are **not equivalent**. Proposition `P1` asserts an asymmetric intervention channel (`I3`): varying a free macro-variable `β` at `t_f` alters the unconditional marginal distribution at `t_p < t_f` so an observer at `t_p` decodes `β` prior to `t_f`. Proposition `P2` asserts that complete histories satisfy joint boundary compatibility (`I4`, `C6`).',
          'To keep our foundations exact—both mathematically and in **explanatory scope**—we elevate the quantum operational result into **Theorem 5.0** inside the main text (paired with Appendix B) and state explicitly **what it proves and what it does not cover**. Let `ρ_p := ρ(t) ∈ 𝒟(ℋ_p)` denote the pre-measurement density operator at intermediate slice `t > t₀` (any prior preparation unitary `U(t, t₀)` is already absorbed into `ρ_p`). Assume the **five standard linear-QM and AQFT premises (A1–A5)**: **(A1)** standard linear density-operator Born rule `Tr[·]` for joint probabilities; **(A2)** Alice applies any linear completely positive trace-preserving (CPTP) **quantum instrument** `{K_{a,μ}}` normalized as `∑_{a,μ} K†_{a,μ} K_{a,μ} = I` (with positive effects `E_a = ∑_μ K†_{a,μ} K_{a,μ}`, `∑_a E_a = I`) chosen independently of Bob’s future setting `β`; **(A3)** post-measurement state `∑_μ K_{a,μ} ρ_p K†_{a,μ}` evolves forward from `t` to `t_f > t` via a linear **`β`-independent unitary propagator `U ≡ U(t_f, t)`**; **(A4)** at `t_f`, Bob measures any complete linear POVM `{M_b(β) ≥ 0 : ∑_b M_b(β) = I}`; and **(A5)** in relativistic Algebraic QFT (`𝒜(𝒪)`), spacelike observables obey microcausality `[Ô(x), Ô(y)] = 0` for `(x − y)² > 0` under signature `(−,+,+,+)` plus the Buchholz–Wichmann split property. Notice also how cleanly this connects to **Oreshkov, Costa, and Brukner’s (2012) Process Matrix** formalism: fixed-order quantum circuits satisfy causal separability (`W = I ⊗ ρ`), whereas indefinite-causal-order process matrices obey general trace normalization while still requiring causal consistency to exclude grandfather loops.',
          '**Non-Circularity & Explicit Scope Restriction**: A derivation is circular if it assumes `P(b | B_p, β) = P(b | B_p)` prior to proving no-signalling; **Theorem 5.0** avoids circularity by starting from the joint Kolmogorov measure `P(a, b | ρ_p, β)` and collapsing `β` strictly via trace linearity, `∑_b M_b(β) = I`, and `U†(t_f,t)U(t_f,t) = I`. Note the sharp structural distinction: **timelike backward no-signalling** (`t_f → t_p`) follows from future POVM completeness `∑_b M_b(β) = I`, whereas **spacelike no-signalling** (`x ~ y`) follows from `(A5)` microcausality; furthermore, `R3` leaves **post-selected conditional correlations `P(a | ρ_p, β, b)` free to depend on `(β, b)`** (`I4`) while forbidding any dependence in the *unconditional* marginal `P(a | ρ_p, β)` (`I3 = 0`). At the same time, **we explicitly restrict Theorem 5.0’s conclusion to the standard linear quantum-mechanical and AQFT framework defined by (A1)–(A5)**: proving operational no-signalling inside linear QM + AQFT does **not** automatically bar controllable backward signalling in *every conceivable non-quantum, nonlinear, or hidden-variable retrocausal model* (such as nonlinear post-selected modifications of QM, Lloyd–Preskill interacting Horowitz–Maldacena horizons, Deutsch CTCs, or ontic `λ`-models that fail to average linearly to the Born rule). Prohibiting macroscopic controllable backward channels across *those* broader model classes requires the separate, theory-independent **consistency and agent-independence argument of Lemma 5.1 and No-Go Theorem 5.1 (§12)**!'
        ],
        equation: {
          label: '5.1',
          unicodeHtml: '∀ρ<sub>p</sub>,∀{K<sub>a,μ</sub>},∀β,∀{M<sub>b</sub>(β)}:  P(a | ρ<sub>p</sub>, β) = ∑<sub>b,μ</sub> Tr[M<sub>b</sub>(β) U(t<sub>f</sub>,t) K<sub>a,μ</sub> ρ<sub>p</sub> K†<sub>a,μ</sub> U†(t<sub>f</sub>,t)] = Tr[E<sub>a</sub> ρ<sub>p</sub>]',
          plainEquation: 'forall rho_p, forall {K_{a,mu}}, forall beta, forall {M_b(beta)}:  P(a | rho_p, beta) = sum_{b,mu} Tr[ M_b(beta) U(t_f, t) K_{a,mu} rho_p K_{a,mu}^dagger U^dagger(t_f, t) ] = Tr[ E_a rho_p ]',
          caption: 'Theorem 5.0 · Intra-Quantum Non-Circular Proof of No-Signalling (R3) Under Premises (A1)–(A5).',
          plainMeaning:
            'Scoped explicitly to standard linear QM + AQFT (A1–A5), summing over future POVM outcomes b eliminates β and U(t_f, t) identically without circularly assuming forward marginal independence; broader non-QM retrocausal models are constrained separately by No-Go Theorem 5.1.',
          derivationSteps: [
            'Explicit Linear-QM / AQFT Scope (A1–A5): (A1) Linear Born trace rule; (A2) β-independent Kraus completeness ∑_{a,μ} K†_{a,μ}K_{a,μ} = I; (A3) β-independent unitary U(t_f,t); (A4) POVM completeness ∑_b M_b(β) = I; (A5) AQFT microcausality [Ô(x), Ô(y)] = 0 ((x−y)² > 0).',
            'Chronological Operator Order: ρ_p := ρ(t) at slice t → post-measurement K_{a,μ} ρ_p K†_{a,μ} → forward propagator U(t_f, t) → future POVM M_b(β) at t_f.',
            'Sum over b: ∑_b Tr[M_b(β) U K_{a,μ} ρ_p K†_{a,μ} U†] = Tr[(∑_b M_b(β)) U K_{a,μ} ρ_p K†_{a,μ} U†] = Tr[U† U K_{a,μ} ρ_p K†_{a,μ}] = Tr[E_a ρ_p]. (Beyond-QM nonlinear/ontic models lie outside Theorem 5.0 and are governed by Lemma 5.1 & No-Go Theorem 5.1.)'
          ]
        },
        theoremBox: {
          kind: 'Theorem',
          number: '5.0',
          title: 'Intra-Quantum Non-Circular No-Signalling Theorem (Scoped to Linear QM + AQFT)',
          statement:
            'Under the five explicit assumptions (A1)–(A5) of standard linear quantum mechanics and relativistic AQFT—namely linear density-operator trace probabilities over ρ_p := ρ(t) ∈ 𝒟(ℋ_p), β-independent CPTP Kraus instruments {K_{a,μ}} (∑_{a,μ} K†_{a,μ} K_{a,μ} = I), β-independent unitary post-measurement evolution U(t_f, t), complete future POVMs {M_b(β) ≥ 0 : ∑_b M_b(β) = I}, and spacelike microcausality [Ô(x), Ô(y)] = 0 ((x−y)² > 0)—the marginal probability P(a | ρ_p, β) equals Tr[E_a ρ_p] identically. Consequently, operational timelike backward signalling vanishes within standard linear QM + AQFT (alongside spacelike no-signalling); general non-quantum, nonlinear, or hidden-variable ontic retrocausal theories violating (A1)–(A4) are constrained instead by consistency and agent independence via No-Go Theorem 5.1.',
          proofSteps: [
            '1. [Explicit Scope & Non-Circularity] Fix standard linear-QM/AQFT assumptions (A1)–(A5). Without assuming P(b | B_p, β) = P(b | B_p) circularly, define P(a, b | ρ_p, β) = ∑_μ Tr[M_b(β) U(t_f, t) K_{a,μ} ρ_p K†_{a,μ} U†(t_f, t)] ≥ 0.',
            '2. [Kolmogorov Normalization] Summing over a, b yields Tr[U† (∑_b M_b) U (∑_{a,μ} K†_{a,μ} K_{a,μ}) ρ_p] = Tr[ρ_p] = 1.',
            '3. [Marginal Collapse Inside QM] Trace linearity, ∑_b M_b(β) = I, and U†(t_f,t) U(t_f,t) = I eliminate all β and U(t_f, t) dependence, deriving P(a | ρ_p, β) = Tr[E_a ρ_p] identically.',
            '4. [Spacelike vs. Beyond-QM Scope Boundary] (A5) + the Buchholz–Wichmann split property guarantees frame-invariant spacelike no-signalling; simultaneously, any speculative retrocausal theory dropping (A1)–(A4) (e.g., nonlinear collapse or unscreened ontic λ-channels) is outside Theorem 5.0 and falls instead under Lemma 5.1 & No-Go Theorem 5.1.'
          ],
          sourceNote: 'Scoped Intra-Quantum Operational Proof of R3 · Part 5 (§11) & Appendix B.'
        },
        workedExample: {
          title: 'Worked Calculation 5.1 · Explicit Qubit Instantiation of Theorem 5.0 (R3)',
          setup:
            'Take a single qubit in general Bloch state ρ_p = ½(I + r_x σ_x + r_y σ_y + r_z σ_z) at slice t, measure σ_z via rank-1 Kraus operators K_0 = |0⟩⟨0|, K_1 = |1⟩⟨1|, apply post-measurement unitary rotation U(t_f, t) = exp(−i θ σ_y / 2), and measure future rotated POVM M_±(β) = ½(I ± cos β σ_z ± sin β σ_x) at t_f.',
          steps: [
            'Compute post-measurement state after outcome a = 0 at t: K_0 ρ_p K†_0 = ½(1 + r_z) |0⟩⟨0|.',
            'Propagate forward from t to t_f under U(t_f, t): U(t_f, t) |0⟩ = cos(θ/2)|0⟩ + sin(θ/2)|1⟩, yielding joint probabilities P(0, ± | ρ_p, β) = ½(1 + r_z) · ½[1 ± cos(θ − β)].',
            'Sum explicitly over Bob’s future outcomes b ∈ {+, −}: P(0, + | ρ_p, β) + P(0, − | ρ_p, β) = ½(1 + r_z) · [½(1 + cos(θ − β)) + ½(1 − cos(θ − β))] = ½(1 + r_z), cancelling β and θ identically.'
          ],
          resultEquation: {
            label: '5.1a',
            unicodeHtml: 'P(0 | ρ<sub>p</sub>, β) = ∑<sub>b=±</sub> ½(1 + r<sub>z</sub>) · ½[1 + b cos(θ − β)] = ½(1 + r<sub>z</sub>) = Tr[|0⟩⟨0| ρ<sub>p</sub>]',
            plainEquation: 'P(0 | rho_p, beta) = sum_{b=+-1} (1/2)(1 + r_z) * (1/2)[1 + b cos(theta - beta)] = (1/2)(1 + r_z) = Tr[|0><0| rho_p]',
            caption: 'Qubit Verification of Theorem 5.0: Exact Cancellation of Future Setting β and Post-Measurement Unitary θ.',
            plainMeaning:
              'Summing the joint pre/post-selected qubit probabilities over ± outcomes cancels both the future measurement angle β and intermediate rotation θ identically, restoring Tr[E_0 ρ_p].'
          },
          takeaway:
            'Even when intermediate post-measurement evolution mixes |0⟩ and |1⟩ arbitrarily before future measurement β, summing b recovers past statistics without any dependence on β.'
        }
      },
      {
        number: '12',
        title: 'Self-Consistency Fixed Points, Lemma 5.1 (Statistical–Deterministic Bridge) & No-Go Theorem 5.1',
        epistemicFocus: 'Brouwer/Schauder fixed points, Counterexample 5.1, explicit DMC capacity vs. BSC special case, measure-to-error derivation H_adm^(N) ⊆ E_err^(N) ⇒ W_μ(H_adm^(N)) ≤ ϵ_N^(max), and statistical benchmark < 10⁻⁴',
        paragraphs: [
          'Why does global consistency block grandfather paradoxes across *general* physical or ontic models (including those outside linear QM)? Because a contradiction such as “event `X` occurs at `t_p` iff `X` does not occur at `t_p`” specifies an inconsistent boundary constraint for which **zero trajectories solve the dynamical equations** (`H_adm = ∅`). In Novikov, **Polchinski**, and **Echeverria–Klinkhammer–Thorne** relativistic billiard analyses, self-consistent solutions exist whenever Cauchy evolution defines a **continuous self-map `Φ : K → K` on a compact, convex space `K` of Cauchy states** satisfying the **Brouwer / Schauder fixed-point theorem** (or a **Banach contraction** under weak coupling), guaranteeing fixed points `x* = Φ(x*) ∈ H_adm`; where multiple self-consistent fixed points coexist, `W_μ(x*)` weights relative branches.',
          'Crucially, two mathematical gaps in informal bilking arguments about **noisy backward signalling** must be resolved explicitly: **(1) Channel Specification (`DMC` vs. `BSC`)**: Model the backward link over `N` independent uses as a **discrete memoryless channel (DMC)** `(𝓧, W(r|m), 𝓡)` with product transition matrix `W^N(r⃗ | m⃗) = ∏_{i=1}^N W(r_i | m_i)`. Note carefully that **average signalling fidelity `F := ½[W(0|0) + W(1|1)]` alone does NOT imply the channel is binary symmetric (`BSC`)**: for an asymmetric binary channel (`W(0|0) ≠ W(1|1)`) or `d`-ary alphabet, `1 − H_2(F)` is NOT the channel capacity! Instead, the operative quantity is the general **Shannon–DMC capacity `C_sig(W) = max_{P_M} I(M; R) > 0`**, which is strictly positive whenever at least two inputs `m_0 ≠ m_1` produce distinct conditional output distributions (`D_TV(W(·|m_0), W(·|m_1)) > 0`, generalizing `F > 1/2`). Only under the **additional symmetry assumption of a Binary Symmetric Channel `BSC(1 − F)`** (`W(0|0) = W(1|1) = F ∈ (½, 1]` and `W(1|0) = W(0|1) = 1 − F`) does capacity reduce to `C_sig = 1 − H_2(F)` (e.g., `F = 0.75 ⇒ 0.1887 bits/use`).',
          '**(2) Exact Measure-to-Error Bridge (`W_μ(H_adm^{(N)}) ≤ ϵ_N^(max)`)**: While **Counterexample 5.1** shows a noisy single-shot link (`F = 0.75`) survives `m = 1 − r` locally via `0.25`-weight error runs, why does `N`-run Shannon block coding (`ϵ_N → 0`) imply collapse of the **history probability measure `W_μ(H_adm^{(N)})`**—which is distinct from decoding error `ϵ_N`? Define the **unconditioned prior physical measure `W_μ`** on `Ω^{(N)}` (prior to post-selecting onto `H_adm^{(N)}`) over agent message indices `u ∈ {1, ..., K}` (`K = ⌈2^{NR}⌉`, rate `0 < R < C_sig(W)`) and past channel outputs `r⃗ ∈ 𝓡^N`: under **agent/preparation independence**, the agent chooses `u` with arbitrary positive prior `P_U(u)` independent of backward channel noise, while the channel generates `r⃗` given transmitted codeword `m⃗(u)` with transition probability `W^N(r⃗ | m⃗(u))`, yielding `W_μ({(u, r⃗)}) = P_U(u) W^N(r⃗ | m⃗(u))` (distinct from the *renormalized* post-selected conditional measure `W_μ(· | H_adm^{(N)})`). Coupled with forward memory `r⃗` and deterministic shift feedback `u = f(g_N(r⃗)) := (g_N(r⃗) + 1) mod K`, any realization where the decoder succeeds (`g_N(r⃗) = u`) forces `u ≡ u + 1 mod K` (`⊥`). Thus **exact set inclusion holds**: `H_adm^{(N)} ⊆ E_err^{(N)} := { (u, r⃗) : g_N(r⃗) ≠ u }`! By measure monotonicity (`A ⊆ B ⇒ W_μ(A) ≤ W_μ(B)`) and Shannon’s expurgated maximal-error bound `ϵ_N^(max) := max_u ∑_{r⃗ : g_N(r⃗) ≠ u} W^N(r⃗ | m⃗(u)) ≤ 2 ϵ̄_N ≤ 2 exp(−N E(R))`, it follows identically for *arbitrary* priors `P_U` that `W_μ(H_adm^{(N)}) ≤ ∑_u P_U(u) P_e(u) ≤ ϵ_N^(max) ≤ 2 exp(−N E(R)) → 0`—collapsing surviving prior measure exponentially to zero on noise tails (`ϵ_N^(max) > 0`), and reaching strict set emptiness `H_adm^{(N)} = ∅` iff `ϵ_N^(max) = 0`. Even if a speculative beyond-QM theory transmitted *quantum states* backward via a quantum channel `𝒩_{t_f → t_p}`, **Holevo’s bound** `χ ≤ S(ρ) ≤ log d` still caps classical bit capacity `C_sig(𝒩)` (`I3`), subjecting any `C_sig > 0` backward quantum channel to the identical `H_adm^{(N)} ⊆ E_err^{(N)}` collapse. Practically, experimental tests of `R3` treat `< 10⁻⁴` marginal deviation strictly as a **statistical power benchmark (`N ≥ 10⁹` QRNG trials)**.'
        ],
        equation: {
          label: '5.2',
          unicodeHtml: 'H<sub>adm</sub><sup>(N)</sup> ⊆ E<sub>err</sub><sup>(N)</sup>  ⇒  W<sub>μ</sub>(H<sub>adm</sub><sup>(N)</sup>) ≤ ϵ<sub>N</sub><sup>(max)</sup> ≤ 2 exp(−N E(R)) → 0  [H<sub>adm</sub><sup>(N)</sup> = ∅ if ϵ<sub>N</sub><sup>(max)</sup> = 0]',
          plainEquation: 'H_adm^(N) <= E_err^(N)  ==>  W_mu(H_adm^(N)) <= eps_N^(max) <= 2 exp(-N E(R)) -> 0  [H_adm^(N) = empty_set if eps_N^(max) = 0]',
          caption: 'Lemma 5.1 · Event-Inclusion Derivation Connecting Decoding Error ϵ_N^(max) to Prior History Measure W_μ(H_adm^(N)).',
          plainMeaning:
            'Under preparation independence and backward DMC transition kernel W^N(r⃗|m⃗(u)), consistency blocks all correct-decoding histories (H_adm^(N) ⊆ E_err^(N)), rigorously bounding prior measure W_μ(H_adm^(N)) by the maximal decoding error ϵ_N^(max) ≤ 2 exp(−N E(R)) → 0.',
          derivationSteps: [
            'Specify backward DMC (𝓧, W(r|m), 𝓡) with general capacity C_sig(W) = max_{P_M} I(M; R) > 0 (reducing to 1 − H_2(F) specifically in the BSC(1−F) symmetric case) and prior measure W_μ({(u, r⃗)}) = P_U(u) W^N(r⃗ | m⃗(u)).',
            'Show that under shift feedback u = (g_N(r⃗) + 1) mod K, any successful decoding g_N(r⃗) = u fails consistency (⊥), proving strict set inclusion H_adm^(N) ⊆ E_err^(N) := {(u, r⃗) : g_N(r⃗) ≠ u}.',
            'Apply monotonicity and Shannon expurgation (0 < R < C_sig, E(R) > 0): W_μ(H_adm^(N)) ≤ ∑_u P_U(u) P_e(u) ≤ ϵ_N^(max) ≤ 2 exp(−N E(R)) → 0 for arbitrary P_U, reaching H_adm^(N) = ∅ iff ϵ_N^(max) = 0.'
          ]
        },
        theoremBox: {
          kind: 'Lemma',
          number: '5.1',
          title: 'Channel-Error to History-Measure Bridge & Statistical–Deterministic Collapse',
          statement:
            'Let a controllable backward discrete memoryless channel (𝓧, W(r|m), 𝓡) have general Shannon capacity C_sig(W) = max_{P_M} I(M; R) > 0 (specializing to 1 − H_2(F) only under BSC symmetry W(0|0) = W(1|1) = F) across N uses with unconditioned prior physical measure W_μ({(u, r⃗)}) = P_U(u) W^N(r⃗ | m⃗(u)) and shift feedback u = (g_N(r⃗) + 1) mod K. Then H_adm^(N) ⊆ E_err^(N) = {(u, r⃗) : g_N(r⃗) ≠ u}, yielding W_μ(H_adm^(N)) ≤ ϵ_N^(max) ≤ 2 exp(−N E(R)) → 0 for arbitrary priors P_U(u) (with E(R) > 0 at rate 0 < R < C_sig). Strict set emptiness H_adm^(N) = ∅ holds iff decoding is zero-error (ϵ_N^(max) = 0).',
          proofSteps: [
            '1. [General DMC vs. BSC] C_sig(W) = max_{P_M} I(M; R) > 0 requires only distinct output distributions D_TV(W(·|m₀), W(·|m₁)) > 0; average fidelity F alone does not force BSC symmetry 1 − H_2(F).',
            '2. [Inclusion H_adm^(N) ⊆ E_err^(N)] On any history with g_N(r⃗) = u, deterministic feedback u = (g_N(r⃗) + 1) mod K forces u ≡ u + 1 mod K (⊥), confining every admissible history to the error event E_err^(N).',
            '3. [Monotonicity & Expurgated Measure Collapse] Under prior measure W_μ({(u, r⃗)}) = P_U(u) W^N(r⃗ | m⃗(u)), monotonicity yields W_μ(H_adm^(N)) ≤ W_μ(E_err^(N)) = ∑_u P_U(u) P_e(u) ≤ ϵ_N^(max) ≤ 2 exp(−N E(R)) → 0 for all P_U, reaching H_adm^(N) = ∅ iff ϵ_N^(max) = 0.'
          ],
          sourceNote: 'Rigorous Measure-to-Error Derivation Bridging Shannon DMC Coding & H_adm · Part 5 (§12).'
        },
        secondaryTheoremBox: {
          kind: 'No-Go Theorem',
          number: '5.1',
          title: 'Theory-Independent Consistency Barrier Against Controllable Backward Signalling',
          statement:
            'In any physical or ontic model (quantum or non-quantum) satisfying global history admissibility H_adm and agent/preparation independence P_U(u), suppose an agent at t_f > t_p modulates a backward DMC (𝓧, W(r|m), 𝓡) decoded at t_p with capacity C_sig(W) = max_{P_M} I(M; R) > 0. (i) Zero-Error Regime (ϵ_N^(max) = 0): shift feedback u = (g_N(r⃗) + 1) mod K leaves zero fixed points, forcing H_adm^(N) = ∅. (ii) Noisy Single-Shot Regime (Counterexample 5.1, BSC with F = 0.75, 1 − F = 0.25): error runs (r ≠ m) sustain H_adm ≠ ∅ locally at weight 0.25. (iii) Multi-Run Amplified Regime (Lemma 5.1): across N uses at rate 0 < R < C_sig(W) (e.g. BSC(0.25) gives C_sig = 1 − H_2(0.75) = 0.1887 bits/use), H_adm^(N) ⊆ E_err^(N) bounds prior measure by W_μ(H_adm^(N)) ≤ ϵ_N^(max) ≤ 2 exp(−N E(R)) → 0, forcing either exponential cosmic fine-tuning of agent choices into rare noise tails or C_sig(W) = 0.',
          proofSteps: [
            '1. [Zero-Error Case ϵ = 0] Exact decoding g_N(r⃗) = u composed with shift feedback u = (g_N(r⃗) + 1) mod K yields 0 ≡ 1 mod K, forcing H_adm = ∅.',
            '2. [Noisy Single-Shot Counterexample 5.1] Under BSC(0.25) (W(0|0) = W(1|1) = 0.75, W(1|0) = W(0|1) = 0.25), m = 1 − r admits self-consistent error runs (0, 1) and (1, 0) at finite weight 0.25.',
            '3. [DMC Capacity & Measure Collapse — Lemma 5.1] For any DMC with C_sig(W) = max_{P_M} I(M; R) > 0, Shannon expurgation at 0 < R < C_sig guarantees ϵ_N^(max) ≤ 2 exp(−N E(R)) → 0, bounding W_μ(H_adm^(N)) ≤ ϵ_N^(max) → 0 via H_adm^(N) ⊆ E_err^(N).',
            '4. [Conclusion vs. Theorem 5.0] Preserving agent independence P_U across macroscopic N compels C_sig(W) = 0 even outside linear QM, complementing Theorem 5.0’s intra-quantum operational proof.'
          ],
          sourceNote: 'Causal Loop Fixed-Point, Lemma 5.1 & Theory-Independent DMC Consistency Theorem · Part 5 (§12).'
        }
      }
    ]
  },
  {
    id: 'part-6',
    number: 6,
    kicker: 'Principal Investigation 6',
    title: 'The Problem of Quantum Measurement and Temporal Constraints',
    epigraph:
      '“Between two measurements, a quantum system is described symmetrically by a vector evolving forward from the past and a vector evolving backward from the future.” — Aharonov, Bergmann & Lebowitz (1964)',
    pullQuote:
      'Quantum formalism already accommodates symmetric pre- and post-selection; the interpretive question is whether that symmetry reflects epistemic conditioning or ontic two-boundary reality.',
    leadSummary:
      'Part 6 examines pre- and post-selection, the Aharonov–Bergmann–Lebowitz rule, weak values, IGRT Fisher metrology, delayed-choice quantum erasers, and retrocausal interpretations of quantum foundations.',
    chapterIntro: [
      'Standard textbook quantum mechanics appears dramatically time-asymmetric. A system evolves unitarily via Schrödinger’s equation until a measurement occurs, at which point the state vector abruptly “collapses” onto an eigenstate—an irreversible jump oriented strictly forward in time.',
      'Yet in 1964, Yakir Aharonov, Peter Bergmann, and Joel Lebowitz (ABL) proved that once both an initial preparation `|ψ(t₀)⟩` and a final measurement outcome `⟨φ(t_f)|` are specified, the quantum formalism becomes completely time-symmetric between `t₀` and `t_f`. Rigorously separating **(1) the Two-State Vector Formalism (TSVF)** `⟨Φ(t)| |Ψ(t)⟩` describing intermediate states symmetrically, **(2) the ABL conditional rule** for strong intermediate projections, and **(3) Weak Values** `A_w` coupled to **Bulaqueña’s IGRT Fisher–Rao metric `ds_QFI`** (Illustration XXVIII)—alongside Hardy’s paradox, Consistent Histories, PBR, and Frauchiger–Renner consistency—provides the sharpest mathematical laboratory for testing two-boundary quantum physics.'
    ],
    subsections: [
      {
        number: '13',
        title: 'Pre- and Post-Selection: Separating TSVF, ABL & the Three-Box Paradox',
        epistemicFocus: 'Explicit distinction between Two-State Vector ⟨Φ(t)||Ψ(t)⟩, strong ABL formula, Three-Box Paradox, and TSVF as an exemplar (not requirement) for R2',
        paragraphs: [
          'First, let us distinguish the concepts cleanly on formal grounds: **TSVF** assigns the bipartite state object `⟨Φ(t)| |Ψ(t)⟩`—a forward-evolving ket `|Ψ(t)⟩ = U(t, t₀)|ψ⟩` paired with a backward-evolving bra `⟨Φ(t)| = ⟨φ|U(t_f, t)`—across the open interval `(t₀, t_f)`, which generalizes via **Aharonov–Popescu–Tollaksen (2009) multi-time states** (isomorphic to **quantum combs / process matrices**) across non-commuting intermediate checks (`[P_a, P_b] ≠ 0`), whereas the **ABL rule** is the specific **strong projective conditional probability formula** yielding `P_ABL(a_k | ψ, φ) = |⟨Φ|P_k|Ψ⟩|² / ∑_j |⟨Φ|P_j|Ψ⟩|²` when intermediate sharp projectors `{P_k}` are *actually measured* at slice `t`. Answering **Sharp and Shanks’s / Kastner’s ABL counterfactual objection**, ABL applies strictly to actual projective outcomes under Griffiths’s single-framework rule—NOT unconditionally to unmeasured intermediate counterfactual assertions! And note carefully how TSVF relates to `R2`: like Schwinger–Keldysh `C₊/C₋`, strict `|Ψ⟩ ↔ ⟨Φ|` symmetry is an **illustrative quantum exemplar of `R2` rather than an exhaustive requirement**.',
          'The cleanest demonstrations of non-classical two-boundary conditioning are Aharonov and Vaidman’s **Three-Box Paradox** and **Hardy’s Paradox**. In the Three-Box Paradox, prepare a particle across `{|A⟩, |B⟩, |C⟩}` in `|Ψ⟩ = (|A⟩ + |B⟩ + |C⟩)/√3` and post-select on `⟨Φ| = (⟨A| + ⟨B| − ⟨C|)/√3`. If an intermediate check tests Box `A` (`{P_A, I − P_A}`), destructive interference in `⟨Φ|(I − P_A)|Ψ⟩ = 0` forces `P_ABL(A | Ψ, Φ) = 1`; if instead it tests Box `B` (`{P_B, I − P_B}`), `P_ABL(B | Ψ, Φ) = 1`! Similarly, in **Hardy’s (1992) two-interferometer paradox** (a post-selected electron–positron Mach–Zehnder setup), detecting both particles at dark ports implies via past-only classical stories that electron and positron simultaneously traversed overlapping arms *and* avoided mutual annihilation—resolved under TSVF/ABL by non-zero weak values (`N_e⁺,e⁻^overlap_w = 0`, `N_e⁻^non-overlap_w = 1`, `N_pair_w = −1`) showing how future boundary selection dramatically reshapes intermediate conditional descriptions without violating `R3`.'
        ],
        equation: {
          label: '6.1',
          unicodeHtml: 'TSVF: ⟨Φ(t)| |Ψ(t)⟩   vs.   P<sub>ABL</sub>(a<sub>k</sub> | ψ, φ) = |⟨Φ| P<sub>k</sub> |Ψ⟩|² / ∑<sub>j</sub> |⟨Φ| P<sub>j</sub> |Ψ⟩|²,   P<sub>ABL</sub>(A)=P<sub>ABL</sub>(B)=1 (3-Box)',
          plainEquation: 'TSVF: <Phi(t)| |Psi(t)>   vs.   P_ABL(a_k | psi, phi) = |<Phi| P_k |Psi>|^2 / sum_j |<Phi| P_j |Psi>|^2,   P_ABL(A)=P_ABL(B)=1 (3-Box)',
          caption: 'Explicit Separation of TSVF Representation, Strong-Projective ABL Rule & Three-Box Paradox.',
          plainMeaning:
            'TSVF specifies the bidirectional two-state representation ⟨Φ(t)||Ψ(t)⟩, while ABL yields P_ABL(A)=1 or P_ABL(B)=1 in the Three-Box Paradox depending on which single intermediate box is projected.',
          derivationSteps: [
            'Propagate |Ψ(t)⟩ = U(t, t₀)|ψ⟩ forward and ⟨Φ(t)| = ⟨φ|U(t_f, t) backward to define TSVF.',
            'Evaluate Three-Box weights: for check {P_A, I − P_A}, ⟨Φ|P_A|Ψ⟩ = 1/3 while ⟨Φ|(I − P_A)|Ψ⟩ = 0, giving P_ABL(A) = 1 (and analogously P_ABL(B) = 1 under {P_B, I − P_B}).',
            'Normalize over complete outcomes ∑_j |⟨Φ|P_j|Ψ⟩|² to verify manifest |Ψ⟩ ↔ |Φ| symmetry.'
          ]
        }
      },
      {
        number: '14',
        title: 'Weak Values, IGRT Fisher Geometry & Selection-Bias Controls',
        epistemicFocus: 'Weak-Value Amplification (Hosten–Kwiat), Ferrie–Combes classical statistics critique vs. Pusey contextuality, Knee–Gauger Fisher bound vs. technical-noise WVA, and Bulaqueña IGRT ds_QFI',
        paragraphs: [
          'When intermediate coupling `exp(−i g A ⊗ P_pointer)` is kept inside the **linear-response regime `g |A_w| ≪ σ_q`** (pointer width), pointer shifts directly measure the complex **Weak Value** `A_w = ⟨Φ|A|Ψ⟩ / ⟨Φ|Ψ⟩`: `Re(A_w)` displaces conjugate pointer position `⟨q_pointer⟩ = g Re(A_w)` while `Im(A_w)` shifts pointer momentum (famously realized by **Hosten & Kwiat, 2008**, detecting sub-nanometer optical spin-Hall shifts). Answering **Ferrie and Combes’s (2014)** critique that mere statistical magnification can arise from classical post-selection with disturbance, metrology must separate **three distinct operational signatures**: *(a) Weak-Value Amplification (WVA)* (`|A_w| ≫ 1` suppressing technical detector-saturation noise); *(b) out-of-spectrum anomalous weak values* (`Re(A_w) ∉ Spec(A)`, e.g. `⟨σ_z⟩_w = 100`); and *(c) negative weak values* (`Re(Π_k)_w < 0`, as in Hardy’s `-1` pair occupancy), which **Pusey (2014)** proved witness genuine **Kochen–Specker contextuality** strictly impossible in classical non-contextual models.',
          'Because post-selection retains only fraction `P_post = |⟨Φ|Ψ⟩|²` of trials—confirming **Knee and Gauger (2014)** and **Combes, Ferrie, Jiang, and Caves (2014)** that post-selection never exceeds the unfiltered quantum Cramér–Rao bound in ideal shot-noise limits, concentrating sensitivity strictly against *technical/saturation noise*—**Marlon D. Bulaqueña’s Information-Geometric Resonant Time (`IGRT`, 2026)** provides the exact Riemannian benchmark (illustrated geometrically in **Illustration XXVIII**): along statistical manifold `PU(H)` endowed with **Quantum Fisher Information metric `ds_QFI² = F_Q(θ) dθ²`**, pre-registration with blinded sorting ensures total-prepared-ensemble sensitivity satisfies `F_tot = P_post · F_post ≤ F_quant_max`.'
        ],
        workedExample: {
          title: 'Worked Calculation 6.1 · ABL Pre/Post-Selection Spin-½ Divergence',
          setup:
            'Prepare a spin-½ particle at t₀ along +z (|ψ⟩ = |↑_z⟩) and post-select at t_f along +x (|φ⟩ = |↑_x⟩). Measure intermediate spin at angle α = 45° in the x–z plane.',
          steps: [
            'Compute forward transition amplitude cos(α/2) = cos(22.5°) ≈ 0.9239 for |+α⟩ and sin(α/2) = sin(22.5°) ≈ 0.3827 for |−α⟩.',
            'Compute backward post-selection overlap cos((90°−α)/2) = cos(22.5°) ≈ 0.9239 for |+α⟩ and sin(22.5°) ≈ 0.3827 for |−α⟩.',
            'Insert into the ABL numerator weights w_+ = (0.9239 × 0.9239)² ≈ 0.7285 and w_− = (0.3827 × 0.3827)² ≈ 0.0214.'
          ],
          resultEquation: {
            label: '6.2',
            unicodeHtml: 'P<sub>ABL</sub>(+α | ↑<sub>z</sub>, ↑<sub>x</sub>) ≈ 0.9714  vs.  P<sub>Born</sub>(+α | ↑<sub>z</sub>) ≈ 0.8536',
            plainEquation: 'P_ABL(+alpha | up_z, up_x) ~= 0.9714   vs.   P_Born(+alpha | up_z) ~= 0.8536',
            caption: 'Quantitative Shift Between Two-Boundary ABL and Past-Only Born Conditioning.',
            plainMeaning:
              'Conditioning on the future boundary raises the intermediate probability of +α from 85.36% to 97.14%, while summing over ±x post-selections restores 85.36% identically.'
          },
          takeaway:
            'Future boundary selection sharpens intermediate descriptions within the sub-ensemble without altering unconditional forward marginal statistics.'
        }
      },
      {
        number: '15',
        title: 'Delayed Choice, Decoherence, Shimony Peaceful Coexistence & Four-Horn Bell Realism',
        epistemicFocus: 'Effective vs. fundamental post-selection, Zurek einselection answering Dowker–Kent, Bong et al. 3 Local Friendliness assumptions, Cramer/Kastner TIQM vs. Maudlin, Shimony PI/OI vs. Bell Local Causality, and Cosmic-Bell retrocausal nuance',
        paragraphs: [
          'In Wheeler’s delayed-choice experiment, Scully–Drühl quantum erasers, and **Ma et al.’s (2012/2013) delayed-choice entanglement swapping**, sorting decisions on an idler pair occur *after* earlier signal detections are logged. As **Theorem 5.0 (`R3`)** proves, unconditional signal distributions never vary—only joint **effective post-selection (`I4`)** changes sub-ensemble classification, distinct from **fundamental cosmological post-selection** (`B_future`). Crucially, **Wojciech Zurek’s environment-induced decoherence and pointer-basis einselection** answer **Dowker and Kent’s (1996)** critique of **Consistent Histories** multiplicity (`D(α, α′) = Tr[C_α ρ C†_{α′}] ≈ 0` for `α ≠ α′`) by selecting the robust quasiclassical branch without nonlinear collapse. Meanwhile, **Frauchiger–Renner (2018)** and **Bong et al.’s (2020) Local Friendliness** no-go theorem isolate three explicit axioms—**(1) Absoluteness of Observed Events**, **(2) Local Agency**, and **(3) No-Superdeterminism**—showing that preserving Local Agency forces either perspectival/contextual facts or two-boundary relaxation of pre-measurement ontic absoluteness while keeping `R3` intact. Similarly, framing **Cramer’s Transactional Interpretation (TIQM)** and **Kastner’s Relativistic Transactional Interpretation (RTI)** inside eternalist 4D `H_adm` dissolves **Tim Maudlin’s slow-moving-absorber pseudotime objection** cleanly.',
          'In Bell-type tests, **Bell’s Local Causality** (which assumes `λ` is statistically independent of future settings) breaks down into **Abner Shimony’s (1984/1993)** **“peaceful coexistence”**: **Parameter Independence** (setting `β` cannot shift Alice’s marginal distribution, preserved identically in every Lorentz frame by Theorem 5.0 / `R3`) and **Outcome Dependence** (conditional correlation across spacelike separation). Our **four-horn classification** cleanly separates: *(1)* superluminal nonlocality (**Bohmian mechanics** requiring a preferred foliation); *(2)* anti-realist or perspectival views such as **Rovelli’s Relational QM (RQM)** (perspectival event facts, distinct from `ψ`-epistemic overlap models constrained by **PBR [2012]**); *(3)* **conspiratorial superdeterminism** (`I(λ; β | past) > 0` baked into Big Bang fine-tuning, constrained across `> 7.8 Gyr` by **Handsteiner et al., 2017** and **Rauch et al., 2018** cosmic-Bell quasars); and *(4)* **local ontic retrocausality**. Crucially, recognize the **Cosmic-Bell asymmetry**: pushing quasar randomizers back `> 7.8 Gyr` squeezes *past-only superdeterminism* back toward the Big Bang, whereas *local retrocausality* correlates `λ` at the source with `β` locally along the future light cone `J⁻(β)` **without** requiring `7.8 Gyr` prior conspiracy! Hedged properly as viable *given* realism, pre-selection `λ`-independence, and Lorentz covariance, **TDCD stays neutral across compatible `λ`-models** while cleanly separating **ontic retrocausality** from **epistemic retrodiction**.'
        ]
      }
    ]
  },
  {
    id: 'part-7',
    number: 7,
    kicker: 'Principal Investigation 7',
    title: 'Thermodynamic Time and the Direction of Explanation',
    epigraph:
      '“The arrow of time is not a property of the equations of motion; it is a macroscopic shadow cast by our extraordinarily ordered past.” — Statistical Mechanics Tradition',
    pullQuote:
      'The thermodynamic arrow of time explains why observers remember the past and narrate causation forward—even if fundamental constraints operate across both temporal boundaries.',
    leadSummary:
      'Part 7 examines Gibbs vs. Boltzmann entropy, the Past Hypothesis, Weyl curvature, Landauer records, Quantum Darwinism, and why experienced explanatory direction aligns with the thermodynamic gradient.',
    chapterIntro: [
      'If fundamental equations are time-symmetric and two-boundary formulations are mathematically natural, why does the world of human experience feel relentlessly one-way? Why do ice cubes melt rather than un-melt, why do photographs depict the past rather than the future, and why does every explanation in biology and history run forward?',
      'Part 7 demonstrates that this macroscopic asymmetry does not refute bidirectional boundary structure; rather, it explains why **observers inside a thermodynamic universe** systematically reconstruct causal reality from past to future.'
    ],
    subsections: [
      {
        number: '16',
        title: 'Gibbs vs. Boltzmann Entropy, Past Hypothesis (Albert, Loewer, Callender), Weyl Curvature & CPT Cosmology',
        epistemicFocus: 'Liouville-invariant S_G vs. coarse-grained S_B, Albert/Loewer Mentaculus vs. Callender boundary status, Penrose Weyl curvature, inflation, Connes–Rovelli thermal time, and LQC/CPT cosmos',
        paragraphs: [
          'Statistical mechanics must first distinguish **fine-grained Gibbs entropy `S_G(t) = −k_B ∫ ρ(q,p,t) ln ρ(q,p,t) dΓ`**—which remains *strictly constant* (`dS_G/dt = 0`) under exact Hamiltonian Liouville flow, unlike *coarse-grained* Gibbs entropy—from **coarse-grained Boltzmann macro-cell entropy `S_B(t) = k_B ln W(M(t))`**, which increases almost everywhere along typical trajectories (**Goldstein–Lebowitz deterministic typicality**, requiring no non-unitary stochastic collapse) precisely because low-entropy macrostates `M(t_past)` occupy exponentially minuscule phase-space volumes! Answering **Huw Price’s critique of Boltzmann typicality**, Liouville counting *alone* without an explicit past boundary predicts symmetric entropy increase in *both* directions from our mid-entropy present; thus `S_B(t_past) ≪ S_B(t_present) ≤ S_B(t_future)` (`R4`) is an explicit **contingent cosmological trajectory, dynamically independent of `R1`**. Following **David Albert (2000)** and **Barry Loewer’s (2012) Mentaculus** (treating the Past Hypothesis as a Best-System cosmological law) contrasted with **Craig Callender’s (2004)** defense of `R4` as a **contingent accidental boundary condition**, `TDCD` treats `R4` as a **contingent boundary constraint on our cosmic history** distinct from microscopic laws (`R1`) and laboratory `B_future` constraints. Meanwhile, **Zermelo’s Poincaré recurrence** (`τ_rec ~ exp(10^{120})`) and **Jarzynski/Crooks fluctuation theorems** (`P_F(+σ)/P_R(−σ) = exp(σ/k_B)`, Collin et al. 2005) prove micro-reversibility coexists cleanly with overwhelming forward dissipation.',
          'Quantitatively, Roger **Penrose’s Weyl Curvature Hypothesis** (illustrated alongside Landauer memory horizons in **Illustration XXIX**) identifies minimal initial gravitational entropy with vanishing initial Weyl tensor `C_{αβγδ}(t_past) ≈ 0` (`1 : 10^{10^{123}}` phase-space ratio). Slow-roll **inflation** cannot dissolve this boundary problem because initiating inflation requires an even lower-entropy homogeneous patch. Crucially, we must distinguish two cosmic two-time geometries: **Barbour–Koslowski–Mercati’s (2014)** gravitational **Janus point** and **Boyle, Finn, and Turok’s (2018) CPT-symmetric universe** generate *bidirectionally growing entropy away from a single low-entropy `t = 0` surface* (`|t| → ∞`), whereas **Schulman’s two-time cosmology (§7)** imposes *low-entropy bounds at both temporal ends* (`t_0` and `t_f`); meanwhile, deterministic **LQC bounces (`ρ_c ≈ 0.41 ρ_Pl`, Ashtekar–Pawlowski–Singh; Bojowald)** still require symmetric or pre-bounce Weyl constraints to avoid asymmetric fine-tuning, and **Connes–Rovelli (1994) Thermal Time** (`α_t(A) = Δ_ω^{it} A Δ_ω^{−it}`) extracts emergent flow statistically inside a 4D block without any preferred microscopic arrow.'
        ],
        equation: {
          label: '7.1',
          unicodeHtml: 'S<sub>G</sub> = −k<sub>B</sub> ∫ ρ ln ρ dΓ (const.),   S<sub>B</sub>(t) = k<sub>B</sub> ln W(M(t)),   P<sub>F</sub>(+σ)/P<sub>R</sub>(−σ) = e<sup>σ/k<sub>B</sub></sup>,   C<sub>αβγδ</sub>(t<sub>past</sub>) ≈ 0',
          plainEquation: 'S_G = -k_B int rho ln(rho) dGamma = const.,   S_B(t) = k_B ln W(M(t)),   P_F(+sigma)/P_R(-sigma) = exp(sigma/k_B),   C_{abcd}(t_past) ~= 0',
          caption: 'Gibbs Liouville Invariance vs. Boltzmann Trajectory, Crooks Fluctuation Symmetry & Penrose Weyl Boundary.',
          plainMeaning:
            'Fine-grained Gibbs entropy stays constant under time-symmetric flow, while coarse-grained Boltzmann entropy grows from C_{αβγδ} ≈ 0 in strict compliance with Crooks’ micro-reversible fluctuation law.',
          derivationSteps: [
            'Verify dS_G/dt = 0 under Hamiltonian Liouville conservation while coarse-graining phase space Γ into macrostates M of volume W(M).',
            'Impose the contingent Past Hypothesis boundary C_{αβγδ}(t_past) ≈ 0 (phase-space weight ~ 10^{−10^{123}}, deeper than slow-roll inflation).',
            'Apply Crooks theorem P_F(+σ)/P_R(−σ) = exp(σ/k_B) and Connes–Rovelli thermal time to reconcile forward macroscopic irreversibility with Θ/CPT-invariant dynamics.'
          ]
        }
      },
      {
        number: '17',
        title: 'Records, Quantum Darwinism, Boltzmann Brains, Landauer Bounds & Eternal-Inflation Measures',
        epistemicFocus: 'Non-circular Landauer bound (Ladyman/Reeb–Wolf), Rovelli memory basins, Zurek Quantum Darwinism I(S:E_k) ≈ H(S), Wolpert mismatch cost, and Boltzmann-brain measure caveat',
        paragraphs: [
          'As David Albert (2000), **Carlo Rovelli’s (2022) “Memory and Entropy”** (proving stable traces form only by relaxing into lower-free-energy equilibrium basins along `dS_B/dt > 0`), and **Wojciech Zurek’s Quantum Darwinism (2009)** (redundant environmental broadcasting `I(S : E_k) ≈ H(S)` across disjoint bath fragments creating intersubjective past records while suppressing macroscopic `G_adv` coherence) demonstrate, a **physical record (`I2`)** requires an earlier low-entropy reserve plus dissipative stabilization. Answering **Earman and Norton’s** circularity objection, **Landauer’s principle** derives non-circularly from unitary dynamics, Liouville phase-space preservation, and an initially uncorrelated thermal reservoir (**Ladyman et al., 2007; Reeb & Wolf, 2014**; verified experimentally by **Bérut et al., 2012**): **writing or resetting** one bit dissipates `ΔQ ≥ k_B T ln 2` (`≈ 2.87 × 10⁻²¹ J` at `300 K`), while **David Wolpert’s stochastic thermodynamics of computation** adds an additional **mismatch cost `k_B T · D_KL(p₀ || q₀)`** whenever hardware prior `q₀` mismatches input `p₀`, contrasting sharply with zero-heat **reversible unitary readout** prior to irreversible latching.',
          'This thermodynamic architecture also clarifies the **Boltzmann-brain paradox**: in an unconstrained eternal thermal equilibrium, spawning an isolated false observer brain with fabricated memories requires a smaller local entropy dip than fluctuating an entire coherent low-entropy cosmos (`10^{−10^{123}}`), yet conditioning on our contingent Past Hypothesis (`R4`) requires any Boltzmann-brain equilibrium intrusion inside a young-universe history to execute a suppressed *double* fluctuation (ordinary boundary history plus improbable detached thermal apparition). Rigorously, **cosmological eternal-inflation measure ambiguities** show that whether Boltzmann brains remain exponentially suppressed asymptotically depends on late-time de Sitter vacuum-decay vs. volume weighting—underscoring again why `R4` is an empirical cosmological boundary condition (`C_{αβγδ} ≈ 0`) rather than an automatic deduction from `R1`.'
        ]
      },
      {
        number: '18',
        title: 'Contingent Alignment of Thermodynamic and Causal Arrows',
        epistemicFocus: 'Distinguishing universal law from cosmological boundary contingency, non-Parmenidean proper time dτ/ds_QFI, and coherent few-qubit preservation',
        paragraphs: [
          'Therefore, the alignment between our experienced causal arrow and temporal order is **contingent on our cosmos’s thermodynamic trajectory (`R4`)**, which is **dynamically independent of `R1` and `R3`**: one could reverse `R4` (a reversed thermodynamic patch) without altering a single micro-law in `R1`, or keep `R1` while thermalizing `R4` into symmetric equilibrium. Falsifiability tests separating `R4` from `R1` track CMB primordial non-Gaussianity / Weyl-curvature smoothness vs. CP/T-violating S-matrix reciprocity. Equally clear, anchoring `Dir_ΔS` in `R4` rather than an A-series knife does **not** collapse reality into static Parmenidean timelessness: invariant proper time `dτ` and IGRT arc length `ds_QFI` trace real ordered physical variation along worldlines (`T2`).',
          'Where macroscopic thermal baths dominate—as in every classical apparatus—thermodynamic irreversibility and `G_K` Keldysh noise mask two-boundary symmetries behind overwhelming retarded dissipation. Conversely, in coherent microscopic systems isolated from thermal baths (`τ_coh > t_f − t₀`, where TDCD persists cleanly without macro-dissipation `R4`) and conditioned at both temporal edges, the underlying bidirectional boundary structure becomes cleanly accessible.'
        ]
      }
    ]
  },
  {
    id: 'part-8',
    number: 8,
    kicker: 'Concluding Chapter · Principal Investigation 8',
    title: 'Concluding Synthesis: Temporally Distributed Causation & Direct Answers to Chapter 1',
    epigraph:
      '“The universe may not be a story written one moment at a time; it may be a complete physical history whose internal events cohere across both directions.” — Concluding Synthesis',
    pullQuote:
      'Temporally Distributed Causal Determination unifies antecedent causation, consequent constraint, local interaction, global consistency, and explanatory direction—closing every philosophical and physical tension posed in Chapter 1.',
    leadSummary:
      'This concluding chapter synthesizes the five-fold conceptual taxonomy, establishes the formal coherence of Temporally Distributed Causal Determination (TDCD), audits empirical discriminators, and delivers a point-by-point answer to Chapter 1’s seven research questions, twelve historical thinkers, and twenty-one taxonomic categories.',
    chapterIntro: [
      'Across Parts 1 through 7, we dismantled the unexamined dogma that physical determination must coincide with chronological priority. Chapter 1 reconstructed the philosophical debate from Aristotle’s sea battle to contemporary causal graph theory, mapped twenty-one fine-grained categories spanning Time, Causation, Explanation, and Information, and distilled seven exact research questions. Chapters 2 through 7 then tested every category inside classical electrodynamics, analytical variational principles, relativistic quantum field theory, two-state quantum measurement, and statistical thermodynamics.',
      'This final Concluding Chapter assembles those threads into a complete, disciplined framework—**Temporally Distributed Causal Determination (TDCD)**—and closes the circle directly back to Chapter 1. Rather than replacing classical or quantum physics, TDCD supplies the rigorous conceptual grammar needed to understand how local covariant laws, past preparations, and future boundary conditions jointly govern admissible four-dimensional histories without permitting paradoxes or backward signalling.'
    ],
    subsections: [
      {
        number: '19',
        title: 'The Five-Fold Taxonomy of Causal Relations',
        epistemicFocus: 'Formal definitions separating the five distinct explanatory notions',
        paragraphs: [
          'To eliminate ambiguity in future debates over retrocausality, Part 8 distinguishes five irreducible terms spanning both type-level laws across `Mod_phys` and token-level realizations `h ∈ H_adm`: (1) **Antecedent causation**: explanation through physically relevant prior conditions (B_past); (2) **Consequent constraint**: restriction imposed on admissible histories by later boundary conditions (B_future—strictly distinct from atemporal metaphysical grounding); (3) **Local interaction**: physical influence mediated pointwise through permitted relativistic couplings L(φ, ∂φ) without action at a distance.',
          '(4) **Global consistency**: compatibility of an entire physical history h across [t₀, t_f] with both governing equations and boundary conditions (Sol(L) ∩ B_past ∩ B_future ≠ ∅); and (5) **Explanatory direction**: the thermodynamically oriented direction in which an observer constructs a narrative account (and non-backtracking counterfactuals) from accessible records along `R4`.'
        ],
        equation: {
          label: '8.1',
          unicodeHtml: 'TDCD(E<sub>t</sub>) ≡ ⟨ B<sub>past</sub>, B<sub>future</sub>, L<sub>local</sub>, H<sub>adm</sub>, Dir<sub>ΔS</sub> ⟩',
          plainEquation: 'TDCD(E_t) === < B_past, B_future, L_local, H_adm, Dir_DeltaS >',
          caption: 'Five-Tuple Architecture of Temporally Distributed Causal Determination.',
          plainMeaning:
            'A complete physical explanation of an event E_t integrates prior conditions, later boundary restrictions, local coupling laws, global history admissibility, and observer thermodynamic orientation.',
          derivationSteps: [
            'Separate boundary inputs (B_past, B_future) from local field equations L_local.',
            'Compute admissible history manifold H_adm = Sol(L_local) ∩ B_past ∩ B_future.',
            'Project onto observer memory orientation Dir_ΔS to reconcile forward explanation with bidirectional constraint.'
          ]
        }
      },
      {
        number: '20',
        title: 'Temporally Distributed Causal Determination & Prospective Empirical Discriminators',
        epistemicFocus: 'Logical hierarchy among R1–R4, scope limits, IGRT Fisher bounds, Quine–Duhem underdetermination, and falsifiability asymmetry',
        paragraphs: [
          'The concept of **Temporally Distributed Causal Determination** is deliberately disciplined. Crucially, `R1–R4` obey a clean **logical hierarchy** (Tables A.0–A.2): `R1` (nomic `CPT`/antiunitary symmetry over `Mod_phys`) preserves the dual boundary degrees of freedom enabling `R2` (`H_adm ≠ ∅`, `μ_W > 0`, where incomplete `B_past` preserves hyperbolic Cauchy uniqueness); **`R3` is derived strictly inside linear QM + AQFT via Theorem 5.0** (Kraus/POVM completeness, `β`-independent `U(t_f, t)`, and microcausality `[Ô(x), Ô(y)] = 0`), while broader beyond-QM retrocausal models—including quantum channels bounded by Holevo capacity `χ`—fall under the **theory-independent DMC consistency bound `W_μ(H_adm^(N)) ≤ ϵ_N^(max) ≤ 2 exp(−N E(R)) → 0`** (`Lemma 5.1`, `No-Go Theorem 5.1`); and **`R4` (contingent Past Hypothesis trajectory, distinct from laboratory `B_future` constraints)** supplies the observer-side record gradient `Dir_ΔS`.',
          'Addressing **Quine–Duhem empirical underdetermination**, wherever past-only and two-boundary descriptions reproduce identical standard unitary statistics, theoretical virtues (eliminating superluminal preferred foliations and cosmic fine-tuning conspiracies) must be paired with **prospective discriminators** (Table 8.2): *(a) pre-registered blinded weak-value metrology* testing total-ensemble **Bulaqueña IGRT Fisher information `F_tot = P_post · F_post`** (Illustration XXVIII), out-of-spectrum `Re(A_w) ∉ Spec(A)`, and contextuality-witnessing negative `Re(Π_k)_w < 0`; *(b) cosmic-Bell mutual-information bounds* from `> 7.8 Gyr` quasars restricting past-only superdeterminism vs. local light-cone retrocausal models; *(c) `< 10⁻⁴` statistical precision marginalization benchmarks (`N ≥ 10⁹` trials)* testing `R3`; and *(d) CMB Weyl-curvature (`C_{αβγδ} ≈ 0`), LQC / Boyle–Finn–Turok CPT cosmology, and Page-curve quantum-extremal-island / Horowitz–Maldacena bounds* (Illustration XXIX). Note the **falsifiability asymmetry**: observing unconditioned marginal deviations `> 10⁻⁴` directly refutes `Theorem 5.0 / R3`, whereas ruling out past-only exclusivity rests on the joint empirical-plus-structural elimination of Bell nonlocality, `ψ`-epistemic overlap (PBR), and cosmic superdeterminism.'
        ],
        theoremBox: {
          kind: 'Theorem',
          number: '8.1',
          title: 'Coherence of Temporally Distributed Causal Determination (TDCD)',
          statement:
            'Any physical framework satisfying R1 (Nomological Time-Symmetric Dynamics over Mod_phys) and R2 (Compatible Two-Boundary Admissibility H_adm ≠ ∅, μ_W > 0, with incomplete B_past respecting Leray uniqueness) derives operational no-signalling R3 within standard linear QM + AQFT (Theorem 5.0 under premises (A1)–(A5)), blocks macroscopic controllable backward DMCs across general models under agent independence (Lemma 5.1 & No-Go Theorem 5.1), and, when coupled to contingent cosmological boundary R4 (Past Hypothesis C_{αβγδ} ≈ 0 distinguishing Gibbs S_G from Boltzmann S_B), supports bidirectional boundary constraints without backward signalling paradoxes or violation of experienced temporal order.',
          proofSteps: [
            '1. By R1 and R2, admissible histories form a non-empty Fredholm-compatible set H_adm = Sol(L) ∩ B_past ∩ B_future ≠ ∅ with μ_W(H_adm) > 0.',
            '2. Inside linear QM + AQFT (A1–A5), summing over future POVM outcomes derives R3 non-circularly (Theorem 5.0); across general DMC models, H_adm^(N) ⊆ E_err^(N) proves W_μ(H_adm^(N)) ≤ ϵ_N^(max) ≤ 2 exp(−N E(R)) → 0 (Lemma 5.1, No-Go Theorem 5.1).',
            '3. By contingent trajectory R4 (C_{αβγδ} ≈ 0), Quantum Darwinism redundancy, and Landauer writing dissipation ΔQ ≥ k_B T ln 2, observer memory traces lock to past boundaries without Boltzmann-brain disruption.',
            '4. Hence temporal location of an event and temporal distribution of its constraining conditions need not coincide (⊢ TDCD).'
          ],
          sourceNote: 'Central Synthesis Theorem · Concluding Chapter (§20).'
        }
      },
      {
        number: '21',
        title: 'Comprehensive Closing Synthesis: Directly Answering Chapter 1, the 21 Taxonomic Strata, Objections & Final Verdict',
        epistemicFocus: 'Complete point-by-point reconciliation of Chapter 1’s philosophers, research questions, fourfold taxonomy, and multi-domain physics',
        paragraphs: [
          'In Chapter 1, we opened this monograph with an enduring paradox: ordinary discourse, biological memory, and classical engineering treat causal explanation as strictly past-to-future, whereas the fundamental laws of classical mechanics, electrodynamics, general relativity, and relativistic quantum field theory exhibit antiunitary time-reversal and CPT symmetry. To resolve that tension rigorously, Chapter 1 traced the philosophical genealogy from Aristotle to Pearl, Woodward, Dowe, Hitchcock, and Price, posed seven foundational research questions (§0.2), and erected a 21-category functional partition separating **Time** (`T1–T5`), **Causation** (`C1–C6`), **Explanation** (`E1–E5`), and **Information** (`I1–I5`). This concluding chapter closes that entire philosophical and mathematical arc directly.',
          '### 21.1 Point-by-Point Verdict on the Seven Research Questions of Chapter 1',
          'Each of the seven programmatic questions posed in Chapter 1 (§0.2) receives an exact, formal resolution: **(Q1) Must the determining condition of an event always precede it chronologically?** No: chronological parameter order `T1` and light-cone geometry `T2` are logically independent of consequent boundary constraints `C5` (kinematic, measure-weighted, or Bayesian) and global history admissibility `C6` (Definition 1.1 & Proposition 4.1 with incomplete `B_past`). **(Q2) Can future boundary conditions participate in determining present states without enabling backward signalling?** Yes: within standard linear QM + AQFT (A1–A5), Kraus/POVM completeness `∑_b M_b(β) = I`, `β`-independent unitary `U(t_f, t)`, spacelike microcausality `[Ô(x), Ô(y)] = 0` (`(x − y)² > 0`), and standard Schwinger–Keldysh `in–in` `E_f = I` vanishing `G_R(t − t_f) = 0` derive operational `C_sig(t_f → t_p) = 0` non-circularly (`Theorem 5.0 / R3`, Appendix B); across broader non-QM models, any backward DMC (`C_sig(W) = max_{P_M} I(M; R) > 0`, specializing to `1 − H_2(F)` only for a BSC) forces `H_adm^{(N)} ⊆ E_err^{(N)} ⇒ W_μ(H_adm^{(N)}) ≤ ϵ_N^(max) ≤ 2 exp(−N E(R)) → 0` (`Lemma 5.1`, `No-Go Theorem 5.1`). **(Q3) Is causal structure directional or globally symmetric?** Microphysical field dynamics (`T3`) and variational action structure (`E3`) are nomologically time-symmetric (`R1`), whereas macroscopic intervention (`C3`) and genealogical retrodiction (`E5`) inherit directional orientation from the contingent Past Hypothesis (`R4`).',
          '**(Q4 & Q6) Are histories sequentially generated or globally selected with local interaction?** Cauchy initial-value propagation (`C4`) is simply the unconstrained-future limit (`W_μ(B_future) ≡ 1`) of two-boundary admissibility `Adm(L, B_past, B_future) = Sol(L) ∩ B_past ∩ B_future ≠ ∅` (`R2`), while local relativistic equations `L_local` mediate all field exchanges pointwise (`E2`, `T2`) without action at a distance or conflict with hyperbolic uniqueness (`Proposition 4.1`). **(Q5) What role does thermodynamic entropy play?** Distinguishing Liouville-invariant Gibbs entropy `S_G` from coarse-grained Boltzmann entropy `S_B` anchored by Penrose’s `10^{−10^{123}}` Weyl curvature `C_{αβγδ}(t₀) ≈ 0` (Albert/Loewer/Callender), Connes–Rovelli thermal time, Crooks fluctuation symmetry, and Landauer’s writing bound (`ΔQ ≥ k_B T ln 2`) explains why observers form records only of the past (`I2`), experience passage (`T5`) inside a 4D eternalist block, and narrate history forward (`E5`). **(Q7) What separates two-boundary models empirically from past-only accounts?** Prospective IGRT Fisher metrology (`F_tot = P_post · F_post`) with pre-registered blinding (Illustration XXVIII), cosmic-Bell upper bounds on `I(λ : settings)`, `< 10⁻⁴` precision `R3` statistical benchmarks (`N ≥ 10⁹`), and CMB / LQC / Boyle–Finn–Turok / Horowitz–Maldacena entropy bounds (Table 8.2 & Illustration XXIX).',
          '### 21.2 Answering the Philosophical Lineage of Chapter 1 (§1.2–1.4)',
          'Equally decisive is how TDCD reconciles every historical thinker examined in Chapter 1 (Table 8.3): **(1) Aristotle & Chrysippus**: future determinateness in a 4D block (`C6`) commits no modal scope fallacy (*necessitas consequentiae* vs. *consequentis*, *Physics* II.3, *De Int.* 9); Stoic *confatalia* (*SVF* II.998–1000) plus Jenann Ismael’s epistemic self-reference barrier grounds our compatibilist synthesis that deliberative choices are internal boundary/interior constituents of `H_adm`. **(2) Hume (Beauchamp–Rosenberg & Norton) & Kant’s Second & Third Analogies**: Humean Supervenience and priority regularity reflected macroscopic dissipation (`T4`) rather than a prohibition on symmetric laws, while Kant’s epistemological criterion (`A189/B232–A218/B265`) for *objective temporal succession* requires invariant rule-governance—equally satisfied by symmetric boundary laws (`δS = 0`) and reciprocal *Wechselwirkung*.',
          '**(3) Boltzmann, Loschmidt, Zermelo, Crooks & Russell (1912 vs. 1948)**: Russell’s 1912 critique (*PAS* 13, pp. 1–26, p. 1) rightly expelled asymmetric compulsion from differential equations (`T3`) and his 1948 *causal lines* align cleanly with conserved local process propagation (`E2`); Gibbs vs. Boltzmann entropy, Loschmidt’s `B_future` velocity reversal, Zermelo’s recurrence (`τ_rec ~ exp(10^{120})`), and Crooks/Jarzynski establish `R4` as a contingent statistical trajectory. **(4) Black, Flew, Mackie, Dummett & Lewis**: Black and Flew refute *controllable backward signalling* (`I3`), while our dual `(R3 + R2)` response reconciles Dummett (1964), Mackie’s (1974) fixity-as-record-asymmetry, and Lewis (1976) around non-controllable conditioning (`I4`). **(5) Reichenbach, Lewis, Price, Pearl, Woodward, Dowe, Strevens, Hitchcock, MDC, Wood–Spekkens & Maudlin**: Reichenbach’s conjunctive forks (§19) and Lewis’s overdetermination/similarity (hedged via Elga 2001) reduce to `R4`; Pearl–Woodward–Hitchcock interventions (`C3`) and Salmon–Dowe conserved quantities (`T^{μν}`) / Strevens–MDC mechanisms capture dissipative agency while **cyclic SCMs (Bongers et al.) and factor graphs** avoid Wood–Spekkens fine-tuning in Bell correlations (`C6`); Price’s Archimedean symmetry is realized by QFT CPT invariance; and Maudlin’s felt passage (`T5`) tracks `I2` along `T4` without Parmenidean collapse inside an eternalist 4D manifold.',
          '### 21.3 Complete Audit of Chapter 1’s Twenty-One Taxonomic Categories (Tables 1.1 & 1.2)',
          'Every one of the 21 functional strata maps conflict-free onto `TDCD(E_t) = ⟨B_past, B_future, L_local, H_adm, Dir_ΔS⟩` via our structure-preserving conceptual homomorphism `Φ_hom` into `(LorMfd, SymplAct, ProbHilb, InfoChan)`: **(I) Time (`T1–T5`)**: coordinate parameter `T1`, Bulaqueña IGRT resonant proper-time `ds_QFI`, and Lorentzian cones `T2` supply the local geometric stage; antiunitary reversal and `CPT` (`T3`) ground `R1`; contingent cosmic entropy `T4` grounds `R4`; and felt passage `T5` is the observer readout of `I2` inside an eternalist block. **(II) Causation (`C1–C6`)**: BSA/governing-law-neutral regularity `C1`, trace asymmetry & non-backtracking counterfactuals `C2`, and `do(X)` acyclic interventions `C3` map dissipative agency (`Dir_ΔS`), while cyclic SCMs/factor graphs, Cauchy limit `C4`, tri-modal consequent constraints `C5` (distinct from metaphysical grounding), and global admissibility `C6` instantiate `R2`.',
          '**(III) Explanation (`E1–E5`)**: covering laws `E1`, Salmon/Dowe conserved-quantity worldlines & QFT vertices `E2`, Hamilton Dirichlet/Neumann/Robin variational extrema `E3` (distinct from Hamilton–Jacobi PDEs and safe from Ostrogradsky instability), and Consistent-Histories / Bell unification `E4` remain temporally symmetric, while genealogical narrative `E5` reconstructs surviving traces. **(IV) Information (`I1–I5`)**: mutual correlation `I1` and boundary specification `I5` span both ends; non-circular Landauer-dissipative writing `I2` (`ΔQ ≥ k_B T ln 2`, Ladyman/Reeb–Wolf) locks to `B_past` (distinct from reversible readout); coincidence sorting `I4` exposes TSVF/ABL structure; and derived theorem `R3` (`Theorem 5.0` inside QM + `Theorem 5.1` across general DMCs) enforces `I3 = 0`.',
          '### 21.4 Convergence Across Electrodynamics, Variational Mechanics, QFT, Quantum Measurement & Cosmology',
          'TDCD achieves mathematical convergence across five independent physical domains: in Maxwell electrodynamics (§2.3), `G_ret + G_adv = 2 G_sym` shows symmetry rests in boundary selection (even Sommerfeld’s condition at Penrose `I⁺` is a future boundary, while Wheeler–Feynman requires optical thickness `τ(ω) → ∞` violated in `ΛCDM` and yields to QED self-energy consistency); in Hamilton’s mechanics (§2.2, §3.6), Dirichlet/Neumann/Robin BVPs bounded by Jacobi conjugate points and Fredholm cokernel orthogonality (resolving hyperbolic spectral resonances `ω_n T = kπ`) select globally extremal histories; in QFT (§2.4), `G_F` embeds `½(G_ret + G_adv)` inside Lorentz-invariant microcausality `[Ô(x), Ô(y)] = 0` (`(x − y)² > 0`) and Haag–Kastler / Buchholz–Wichmann split algebras despite Reeh–Schlieder vacuum entanglement, while standard `in–in` Schwinger–Keldysh (`E_f = I`) cleanly separates single-boundary causal expectations from explicit `E_f ≠ I` two-boundary extensions; in quantum foundations (Part 6), TSVF `⟨Φ(t)| |Ψ(t)⟩`, strong ABL rules & Three-Box/Hardy paradoxes, weak values linked to IGRT Fisher geometry (Illustration XXVIII), Zurek einselection answering Dowker–Kent, Shimony peaceful coexistence, and the 4-horn Bell theorem under PBR establish bidirectional coherence; and in cosmology (Part 3 & Part 7), Penrose Weyl curvature `C_{αβγδ} ≈ 0`, Connes–Rovelli thermal time, LQC / Boyle–Finn–Turok CPT symmetries (contrasted with Schulman’s two-ended low-entropy bounds), and replica-wormhole / Horowitz–Maldacena black-hole boundaries unify two-boundary physics from Planck horizons to lab optics.',
          '### 21.5 Dismantling Core Objections, Scope Boundaries & Experimental Falsifiability',
          'Three objections remain for two-boundary realism: **(1) Bookkeeping Equivalence & Underdetermination**: Wood & Spekkens (2015) prove forward-only hidden-variable accounts of Bell correlations must violate causal faithfulness, break Shimony parameter independence / Lorentz covariance, or violate PBR, whereas QFT scattering (`⟨out|S|in⟩`), generalized `E_f ≠ I` CTP contours, and Horowitz–Maldacena / quantum-extremal-island black-hole unitarity use two-boundary architecture natively. **(2) Decoherence Screening**: environmental `G_K` noise and Zurek Quantum Darwinism wash out macroscopic `G_adv` interference, confirming why TDCD predicts ordinary forward causation at macro-scales while preserving bidirectional structure in coherent regimes. **(3) Prospective Falsifiability**: TDCD would be decisively refuted by any blinded pre-registered protocol violating derived theorem `R3` (`|P(a|ρ_p,β₁) − P(a|ρ_p,β₂)| > 10⁻⁴` at `N ≥ 10⁹` under complete POVMs) or by an irreducible microphysical arrow violating `R1` inside an isolated unitary system.',
          '### 21.6 Culminating Proposition',
          'Perhaps the universe does not remember its future in the psychological sense—no geological stratum or human cortex stores low-entropy photographs of tomorrow, because Landauer-dissipative record writing (`ΔQ ≥ k_B T ln 2`) is locked irreversibly to the contingent Past Hypothesis (`R4`, `I2`). Yet in the exact structural sense established across Chapters 1 through 8, **what we call the present is an interior keystone held upright between two temporal banks.** The future is not an empty void waiting passively to receive whatever the past pushes toward it; it participates constitutively in the boundary structure against which every complete physical history must cohere. **The universe is not a story written blindly one moment at a time; it is an unbroken, locally coupled four-dimensional history whose full physical intelligibility emerges only when read from both borders of time together.**'
        ]
      }
    ]
  }
];

export const TABLE_8_3_CHAPTER_1_ANSWERS = [
  {
    chapter1Node: 'Aristotle (Physics II.3, De Int. 9, §1.2)',
    legacyPuzzle: 'Does future truth or final constraint necessitate present events fatalistically?',
    mechanism: 'Global admissibility Adm = Sol(L) ∩ B_past ∩ B_future (R2) + δS = 0 (E3)',
    tdcdResolution: 'Necessitas consequentiae ≠ consequentis; global compatibility selects histories without fatalism'
  },
  {
    chapter1Node: 'Chrysippus (Confatalia, SVF II, §1.2)',
    legacyPuzzle: 'How do distinct temporal events cohere without breaking local efficacy?',
    mechanism: 'Pointwise Euler–Lagrange coupling L_local inside global 4D boundary Ω',
    tdcdResolution: 'Local interactions (E2) and joint boundary coherence (C6) co-determine admissible worlds'
  },
  {
    chapter1Node: 'Hume (Treatise I.iii.2, Enquiry VII, §1.2)',
    legacyPuzzle: 'Is temporal priority of cause over effect necessary or conventional?',
    mechanism: 'Time-symmetric laws Θ∘L∘Θ⁻¹ = L (R1) vs. asymmetric trace distribution (R4)',
    tdcdResolution: 'Priority is a contingent empirical habit rooted in T4, not a law of regularity (C1)'
  },
  {
    chapter1Node: 'Kant (Second & Third Analogies, §1.2)',
    legacyPuzzle: 'Does objective event order require strictly forward antecedent determination?',
    mechanism: 'Hamilton two-endpoint boundary action & Leray bidirectional uniqueness (§2.2, §3.6)',
    tdcdResolution: 'Objective rule-governance holds under symmetric global boundary laws just as cleanly as C4'
  },
  {
    chapter1Node: 'Boltzmann, Gibbs, Loschmidt, Zermelo & Russell (§1.3)',
    legacyPuzzle: 'Why do reversible micro-laws produce irreversible macro-history and causal talk?',
    mechanism: 'Gibbs S_G invariance vs. Boltzmann S_B + C_{αβγδ} ≈ 0 + Crooks P_F/P_R + Landauer ΔQ ≥ k_B T ln 2',
    tdcdResolution: 'Micro-laws remain Θ/CPT-symmetric (R1) while macroscopic irreversibility tracks contingent R4'
  },
  {
    chapter1Node: 'Black, Flew, Dummett & Lewis (Bilking, §1.3)',
    legacyPuzzle: 'Does future-boundary dependence permit contradictory past-rewriting loops?',
    mechanism: 'Theorem 5.0 (R3) + R2 consistency filtering + Lemma 5.1 large-deviation measure collapse',
    tdcdResolution: 'Both R3 non-controllability and R2 consistency jointly dissolve bilking while preserving I4'
  },
  {
    chapter1Node: 'Reichenbach & Lewis (Forks / Traces, §1.4)',
    legacyPuzzle: 'Why do conjunctive forks (§19) & counterfactual traces overdetermine only the past?',
    mechanism: 'Cosmic initial low-entropy boundary + Quantum Darwinism avoiding Boltzmann brains (§7.17)',
    tdcdResolution: 'Forks and Lewisian trace overdetermination reduce directly to R4 rather than extra laws'
  },
  {
    chapter1Node: 'Price vs. Pearl, Woodward, Dowe, Hitchcock & Wood–Spekkens (§1.4)',
    legacyPuzzle: 'How can physics be Archimedean time-symmetric while science uses forward DAGs & mechanisms?',
    mechanism: 'Dissipative do(X) & CQ processes (C3, E2) vs. cyclic SCMs / factor graphs avoiding Bell fine-tuning (C6)',
    tdcdResolution: 'Acyclic DAGs & conserved-quantity interactions map open subsystems (T4), not fundamental laws (T3)'
  },
  {
    chapter1Node: 'Maudlin vs. Shimony, Bong et al., Wharton, Adlam & Bulaqueña IGRT (§1.4, §6.14–15)',
    legacyPuzzle: 'Is primitive passage needed for Bell nonlocality, Shimony coexistence, and proper time?',
    mechanism: '4D eternalist Lagrangian Schema + IGRT ds_QFI + Shimony parameter independence + Three-Box / 4-horn Bell',
    tdcdResolution: 'Felt passage tracks memory T5 along T4 while local retrocausal boundaries preserve Lorentz covariance'
  },
  {
    chapter1Node: 'Fourfold 21-Stratum Taxonomy (T1–T5, C1–C6, E1–E5, I1–I5, §1.5–1.8)',
    legacyPuzzle: 'How do twenty-one time, causal, explanatory, and information concepts reconcile?',
    mechanism: 'Structural homomorphism Φ_hom : (T,C,E,I) → (LorMfd, SymplAct, ProbHilb, InfoChan) (Table 1.2)',
    tdcdResolution: 'Every stratum maps cleanly without contradiction; R1–R4 prevent category mistakes 1–4'
  }
];

export const RETRO_GLOSSARY: RetroGlossaryTerm[] = [
  {
    term: 'Temporally Distributed Causal Determination',
    acronym: 'TDCD',
    definition:
      'An explanatory framework in which the admissible physical history of a system is jointly constrained by boundary conditions distributed across both past and future temporal boundaries, without requiring controllable backward signalling.'
  },
  {
    term: 'Antecedent Causation',
    definition:
      'Physical explanation citing relevant conditions temporally prior to the event being explained, together with forward-integrated dynamical laws.'
  },
  {
    term: 'Consequent Constraint',
    definition:
      'Restriction imposed on admissible intermediate histories by later boundary conditions—operating as kinematic edge data, smooth measure weights W_μ(B_future), or Bayesian epistemic conditioning.'
  },
  {
    term: 'Global Consistency',
    definition:
      'Compatibility of an entire physical history across a spacetime interval with both governing local equations and boundary conditions at every temporal edge (H_adm ≠ ∅).'
  },
  {
    term: 'Advanced Solution',
    definition:
      'A mathematically valid solution to a time-symmetric wave equation (G_adv) satisfying G_ret + G_adv = 2 G_sym whose support lies on the past light cone converging onto a source or sink.'
  },
  {
    term: 'Retarded Solution',
    definition:
      'A solution to a wave equation (G_ret) whose support lies on the future light cone radiating outward after source acceleration.'
  },
  {
    term: 'Two-State Vector Formalism',
    acronym: 'TSVF',
    definition:
      'Aharonov–Bergmann–Lebowitz representation describing a pre- and post-selected quantum system between measurements via ⟨Φ(t)| |Ψ(t)⟩, distinct from the strong-projective ABL probability formula.'
  },
  {
    term: 'Weak Value',
    definition:
      'The complex ratio A_w = ⟨Φ|A|Ψ⟩ / ⟨Φ|Ψ⟩ measured inside the linear regime g|A_w| ≪ σ_q, partitioned into Weak-Value Amplification (WVA), out-of-spectrum Re(A_w) ∉ Spec(A), and contextuality-witnessing negative Re(Π_k)_w < 0.'
  },
  {
    term: 'Information-Geometric Resonant Time',
    acronym: 'IGRT',
    definition:
      'Marlon D. Bulaqueña’s information-geometric framework tying projective Hilbert-space Quantum Fisher Information arc length ds_QFI directly to physical proper time dτ_obs and quantum Cramér–Rao speed limits.'
  },
  {
    term: 'Quantum Instrument & Kraus Effects',
    definition:
      'General quantum measurement model {K_{a,μ}} yielding positive effects E_a = ∑_μ K†_{a,μ} K_{a,μ} with ∑_a E_a = I, from which non-circular forward marginal invariance (R3) is derived.'
  },
  {
    term: 'Gibbs vs. Boltzmann Entropy',
    definition:
      'Fine-grained Gibbs entropy S_G = −k_B ∫ ρ ln ρ dΓ remains strictly invariant under Liouville Hamiltonian flow, whereas coarse-grained Boltzmann entropy S_B = k_B ln W(M) grows monotonically from the Past Hypothesis.'
  },
  {
    term: 'Past Hypothesis',
    definition:
      'The contingent cosmological initial-boundary trajectory anchored by minimal Weyl curvature (C_{αβγδ} ≈ 0, phase-space weight ~ 10^{−10^{123}}), grounding thermodynamic irreversibility, Landauer records, and Boltzmann-brain exclusion.'
  },
  {
    term: 'No-Signalling Consistency',
    definition:
      'The derived theorem (R3) that joint two-boundary Kraus/POVM completeness ∑_b M_b(β) = I and spacelike microcausality [Ô(x), Ô(y)] = 0 ((x − y)² > 0 in (−,+,+,+)) collapse marginal past statistics identically to Tr[E_a ρ_p].'
  },
  {
    term: 'Wheeler–Feynman Absorber Theory',
    definition:
      'An electrodynamic formulation using ½(G_ret + G_adv) interactions where optically thick future absorption (τ(ω) → ∞) reproduces radiative damping, historically limited by cosmic transparency and QED self-energy issues.'
  },
  {
    term: 'Explanatory Direction',
    definition:
      'The epistemic orientation along which observers construct accounts of events—typically forward from recorded past causes due to thermodynamic memory asymmetry.'
  }
];

export const RETRO_SYMBOL_GLOSSARY: RetroSymbolEntry[] = [
  { symbol: 'H_adm', name: 'Admissible History Space', domain: 'Global History', definition: 'Non-empty Fredholm-compatible intersection Sol(L) ∩ B_past ∩ B_future weighted by measure μ.' },
  { symbol: 'B_past, B_future', name: 'Temporal Boundaries', domain: 'Boundary Data', definition: 'Initial and final kinematic, measure-weighted W_μ(B_f), or Bayesian constraints on ∂Ω.' },
  { symbol: 'g_{μν} = (−,+,+,+)', name: 'Lorentzian Metric', domain: 'Relativity & QFT', definition: 'Spacetime signature assigning (x − y)² > 0 to spacelike intervals and □ = −c⁻²∂_t² + ∇².' },
  { symbol: 'G_ret, G_adv', name: 'Green’s Propagators', domain: 'Field Theory', definition: 'Retarded and advanced fundamental kernels of □ satisfying G_ret + G_adv = 2 G_sym and □G = −δ⁴.' },
  { symbol: 'δS[φ] = 0', name: 'Variational Extremum', domain: 'Action Principle', definition: 'Stationary action two-endpoint BVP (Dirichlet/Neumann/Robin), distinct from Hamilton–Jacobi PDE.' },
  { symbol: '⟨Φ(t)| |Ψ(t)⟩', name: 'Two-State Vector', domain: 'TSVF Quantum', definition: 'Joint forward preparation ket and backward post-selection bra at intermediate time t.' },
  { symbol: 'P_ABL(a_k | Ψ, Φ)', name: 'ABL Probability', domain: 'Quantum Pre/Post', definition: 'Time-symmetric strong-projective intermediate probability normalized over post-selected outcomes.' },
  { symbol: 'A_w, ds_QFI', name: 'Weak Value & IGRT Metric', domain: 'Quantum Metrology', definition: 'A_w = ⟨Φ|A|Ψ⟩ / ⟨Φ|Ψ⟩ audited via Bulaqueña IGRT Quantum Fisher Information F_tot = P_post · F_post.' },
  { symbol: '{K_{a,μ}}, E_a', name: 'Kraus Quantum Instrument', domain: 'Quantum Channels', definition: 'General measurement effects E_a = ∑_μ K†_{a,μ} K_{a,μ} enforcing derived theorem R3.' },
  { symbol: 'S_G vs. S_B(t)', name: 'Gibbs & Boltzmann Entropy', domain: 'Thermodynamics', definition: 'Liouville-constant S_G vs. coarse-grained S_B = k_B ln W(M) anchored by C_{αβγδ} ≈ 0.' },
  { symbol: 'Θ = U K', name: 'Time-Reversal Operator', domain: 'Symmetry', definition: 'Antiunitary symmetry map (Θ i Θ⁻¹ = −i) leaving nomological micro-laws Mod_phys invariant.' }
];

export const RETRO_APPENDICES: RetroAppendix[] = [
  {
    letter: 'A',
    title: 'Variational Two-Boundary Equivalence & Wheeler–Feynman Cancellation',
    summary: 'Formal derivation connecting Hamilton’s two-endpoint BVP to symmetric Green’s functions, optical-thickness τ(ω) → ∞, and historical QED limits.',
    paragraphs: [
      'In classical and semiclassical field theories, choosing between Cauchy initial-value data (φ(t₀), ∂_t φ(t₀)) and two-endpoint Hamilton BVP data (Dirichlet, Neumann, or Robin conditions on ∂Ω_past ∪ ∂Ω_future) leaves the local Euler–Lagrange equations inside (t₀, t_f) unchanged while separating BVP formulation cleanly from the single-surface Hamilton–Jacobi PDE ∂_t S + H(q, ∂_q S) = 0.',
      'For electromagnetic direct action under signature (−,+,+,+), complete cancellation of pre-emission advanced waves requires both cosmic optical thickness τ(ω) → ∞ across all frequencies along future light cones and careful regularizations; historically, absorber theory gave way to local covariant QED due to both cosmic optical-transparency constraints (Ω_Λ ≈ 0.69 accelerating expansion) and quantum self-energy / vacuum-polarization quantization challenges.'
    ],
    equations: [
      {
        label: 'A.1',
        unicodeHtml: 'A<sup>μ</sup><sub>obs</sub> = A<sup>μ</sup><sub>sym</sub> + ½ ∑<sub>j</sub> (A<sup>μ(j)</sup><sub>ret</sub> − A<sup>μ(j)</sup><sub>adv</sub>) = A<sup>μ(i)</sup><sub>ret</sub> + F<sub>rad</sub>   [τ(ω) → ∞]',
        plainEquation: 'A_obs^mu = A_sym^mu + (1/2) sum_j (A_ret^{mu(j)} - A_adv^{mu(j)}) = A_ret^{mu(i)} + F_rad   [tau(omega) -> inf]',
        caption: 'Exact Absorber Reduction to Retarded Field Plus Radiation Reaction Under Complete Optical Thickness.',
        plainMeaning:
          'Complete optically thick future absorption converts half-retarded/half-advanced fields into standard observed retarded electromagnetic behavior.'
      }
    ],
    reproducibilityLedger: [
      {
        checkpoint: 'Symmetric Green Decomposition',
        formula: 'G_sym = ½(G_ret + G_adv)',
        referenceConstants: '□G = −δ⁴(x − x′) in (−,+,+,+)',
        computedOutput: 'Exact Θ-invariant solution (R1)'
      },
      {
        checkpoint: 'ABL Spin-½ Check (α=45°, θ=90°)',
        formula: 'cos⁴(22.5°) / [cos⁴(22.5°) + sin⁴(22.5°)]',
        referenceConstants: 'ψ=|↑_z⟩, φ=|↑_x⟩',
        computedOutput: 'P_ABL(+α) = 0.9714 vs Born 0.8536'
      },
      {
        checkpoint: 'Non-Circular Kraus/POVM Marginal Sum',
        formula: '∑_{b,μ} Tr[M_b(β) U(t_f,t) K_{a,μ} ρ_p K†_{a,μ} U†(t_f,t)]',
        referenceConstants: '∑_{a,μ} K†_{a,μ}K_{a,μ} = I, ∑_b M_b(β) = I, [Ô(x),Ô(y)]=0 ((x−y)²>0)',
        computedOutput: 'Identically equals Tr[E_a ρ_p] (Theorem 5.0 / R3)'
      },
      {
        checkpoint: 'Lemma 5.1 · DMC Error-to-Measure Bridge',
        formula: 'H_adm^(N) ⊆ E_err^(N) ⇒ W_μ(H_adm^(N)) ≤ ϵ_N^(max) ≤ 2 exp(−N E(R))',
        referenceConstants: 'BSC(0.25): H_2(0.75)=0.8113; C_sig = 0.1887 bits/use',
        computedOutput: 'W_μ(H_adm^(N)) ≤ ϵ_N^(max) → 0 for ∀P_U; H_adm^(N) = ∅ iff ϵ_N^(max) = 0'
      }
    ]
  },
  {
    letter: 'B',
    title: 'Non-Circular Linear-QM / AQFT Proof of No-Signalling (Theorem 5.0) & DMC Consistency Bridge (Lemma 5.1)',
    summary: 'Scoped intra-quantum proof of R3 under (A1)–(A5), general DMC capacity vs. BSC symmetry, and explicit derivation W_μ(H_adm^(N)) ≤ ϵ_N^(max).',
    paragraphs: [
      'Extending Theorem 5.0 (§11), **scoped explicitly to standard linear quantum mechanics and relativistic AQFT under premises (A1)–(A5)**, let ρ_p := ρ(t) ∈ 𝒟(ℋ_p) denote the pre-measurement state at slice t > t₀ (absorbing U(t, t₀)), let Alice apply an arbitrary β-independent linear Kraus instrument {K_{a,μ}} normalized strictly as ∑_{a,μ} K†_{a,μ} K_{a,μ} = I (effects E_a = ∑_μ K†_{a,μ} K_{a,μ}, ∑_a E_a = I), let U ≡ U(t_f, t) denote the β-independent post-measurement unitary propagator evolving K_{a,μ} ρ_p K†_{a,μ} forward from t to t_f > t, and let Bob apply any future POVM {M_b(β) ≥ 0 : ∑_b M_b(β) = I}. Without assuming P(b | B_p, β) = P(b | B_p) circularly, the joint Kolmogorov measure P(a, b | ρ_p, β) = ∑_μ Tr[M_b(β) U(t_f,t) K_{a,μ} ρ_p K†_{a,μ} U†(t_f,t)] ≥ 0 sums to Tr[ρ_p] = 1.',
      'Summing over Bob’s outcomes b invokes trace linearity, cyclicity, ∑_b M_b(β) = I, and U†(t_f,t) U(t_f,t) = I to collapse all β and U(t_f, t) dependence identically: P(a | ρ_p, β) = Tr[E_a ρ_p], proving operational no-signalling *within linear QM + AQFT* (with spacelike [Ô(x), Ô(y)] = 0 for (x − y)² > 0 and the Buchholz–Wichmann split property). Crucially, speculative beyond-QM models dropping (A1)–(A4) (nonlinear collapse, interacting Horowitz–Maldacena branches, or unscreened ontic λ-channels) lie outside Theorem 5.0 and are governed instead by Lemma 5.1 (§12): for *any* backward DMC (𝓧, W(r|m), 𝓡) with capacity C_sig(W) = max_{P_M} I(M; R) > 0 (equal to 1 − H_2(F) only in the BSC(1−F) special case), shift feedback u = (g_N(r⃗) + 1) mod K forces H_adm^{(N)} ⊆ E_err^{(N)}, bounding prior measure W_μ(H_adm^{(N)}) = ∑_u P_U(u) ∑_{r⃗ ∈ E_err} W^N(r⃗ | m⃗(u)) ≤ ϵ_N^(max) ≤ 2 exp(−N E(R)) → 0 (and reaching strict set emptiness H_adm^{(N)} = ∅ iff ϵ_N^(max) = 0).'
    ],
    equations: [
      {
        label: 'B.1',
        unicodeHtml: 'P(a | ρ<sub>p</sub>, β) = ∑<sub>b,μ</sub> Tr[M<sub>b</sub>(β) U(t<sub>f</sub>,t) K<sub>a,μ</sub> ρ<sub>p</sub> K†<sub>a,μ</sub> U†(t<sub>f</sub>,t)] = Tr[E<sub>a</sub> ρ<sub>p</sub>],   [Ô(x), Ô(y)] = 0 ((x−y)² &gt; 0)',
        plainEquation: 'P(a | rho_p, beta) = sum_{b,mu} Tr[M_b(beta) U(t_f,t) K_{a,mu} rho_p K_{a,mu}^dagger U^dagger(t_f,t)] = Tr[E_a rho_p],   [O_hat(x), O_hat(y)] = 0 for (x - y)^2 > 0 in (-,+,+,+)',
        caption: 'Scoped Intra-Quantum Proof of R3 Under Linear QM + AQFT Premises (A1)–(A5).',
        plainMeaning:
          'Under linear QM + AQFT (A1–A5), Kraus/POVM completeness, U(t_f,t) unitarity, and [Ô(x), Ô(y)] = 0 ((x − y)² > 0) derive operational no-signalling non-circularly; broader non-QM models face the DMC consistency bound of Lemma 5.1.'
      }
    ]
  },
  {
    letter: 'C',
    title: 'Methodological Objections & Referee Responses on Retrocausality',
    summary: 'Addressing four foundational objections regarding noisy backward loops, Ockham’s razor, compatibilist agency, and prospective empirical testing.',
    paragraphs: [
      'Bidirectional causal frameworks routinely face four sharp objections from philosophers and physicists. Each objection dissolves once Theorem 5.0 (linear-QM/AQFT operational R3), Lemma 5.1 (general DMC measure-to-error bridge), Proposition 4.1 (incomplete past Cauchy data), and prospective IGRT-benchmarked protocols are laid out explicitly.'
    ],
    equations: [],
    refereeObjections: [
      {
        objection: 'Objection 1 (Grandfather / Bilking Paradox & Noisy Channels): What if backward signalling is noisy (½ < F < 1) rather than deterministic?',
        reply:
          'As established in Lemma 5.1, No-Go Theorem 5.1, and Counterexample 5.1, single-shot noisy channels (e.g., BSC with F = 0.75) permit error events to satisfy consistency locally without paradox. Across N independent uses of any backward DMC with C_sig(W) = max_{P_M} I(M; R) > 0 (equal to 1 − H_2(F) = 0.1887 bits/use in the BSC(0.25) case), H_adm^(N) ⊆ E_err^(N) and Shannon expurgation bound prior measure by W_μ(H_adm^(N)) ≤ ϵ_N^(max) ≤ 2 exp(−N E(R)) → 0 exponentially for arbitrary agent priors P_U (reaching strict set emptiness H_adm^(N) = ∅ iff ϵ_N^(max) = 0). Thus consistency blocks macroscopic controllable backward DMCs even outside linear QM.'
      },
      {
        objection: 'Objection 2 (Ockham’s Razor & Bookkeeping): Why introduce future boundary constraints when Cauchy evolution reproduces standard predictions?',
        reply:
          'Distinguishing quantitative parsimony from qualitative/explanatory parsimony: Wood & Spekkens (2015) prove forward-only hidden-variable accounts of Bell correlations must violate causal faithfulness, break Shimony parameter independence / Lorentz covariance, or conflict with PBR. Meanwhile, QFT LSZ scattering, quantum-extremal-island / Horowitz–Maldacena black-hole boundaries, and generalized E_f ≠ I Schwinger–Keldysh CTP contours deploy two-boundary structure natively while eliminating superluminal preferred-foliation mechanisms.'
      },
      {
        objection: 'Objection 3 (Block Universe & Compatibilist Agency): Does two-boundary physics undermine free deliberation?',
        reply:
          'No. Drawing on Aristotle’s necessitas consequentiae vs. consequentis, Stoic confatalia, Jenann Ismael’s epistemic self-reference barrier, and modern compatibilism (Lewis 1976 / Dummett 1964) within an eternalist 4D block, an agent’s choice is an internal constituent of H_adm—and deliberative agency requires R4 (forward memory + prospective uncertainty) rather than metaphysical indeterminism; claiming choices are coerced because B_future is fixed commits the modal scope fallacy.'
      },
      {
        objection: 'Objection 4 (Post-Hoc vs. Prospective Empirical Equivalence): Can two-boundary models offer prospective empirical tests?',
        reply:
          'Yes. Beyond post-hoc compatibility, Table 8.2 specifies prospective protocols: pre-registered blinded weak metrology scored by total-ensemble IGRT Fisher information F_tot = P_post · F_post (Illustration XXVIII), cosmic-Bell mutual-information bounds I(λ : settings) across > 7.8 Gyr quasars, < 10⁻⁴ precision R3 statistical benchmarks (N ≥ 10⁹ trials), and CMB Weyl-curvature / LQC / Boyle–Finn–Turok CPT bounds.'
      }
    ]
  }
];

export const RETRO_REFERENCES: RetroReference[] = [
  { id: 1, citation: 'Wheeler, J. A., & Feynman, R. P. (1945). Interaction with the absorber as the mechanism of radiation. Reviews of Modern Physics, 17(2–3), 157–181.' },
  { id: 2, citation: 'Wheeler, J. A., & Feynman, R. P. (1949). Classical electrodynamics in terms of direct interparticle action. Reviews of Modern Physics, 21(3), 425–433.' },
  { id: 3, citation: 'Aharonov, Y., Bergmann, P. G., & Lebowitz, J. L. (1964). Time symmetry in the quantum process of measurement. Physical Review, 134(6B), B1410–B1416.' },
  { id: 4, citation: 'Aharonov, Y., Albert, D. Z., & Vaidman, L. (1988). How the result of a measurement of a component of the spin of a spin-1/2 particle can turn out to be 100. Physical Review Letters, 60(14), 1351–1354.' },
  { id: 5, citation: 'Aharonov, Y., & Vaidman, L. (2008). The two-state vector formalism: An updated review. In Time in Quantum Mechanics (pp. 399–447). Springer.' },
  { id: 6, citation: 'Price, H. (1996). Time’s Arrow and Archimedes’ Point: New Directions for the Physics of Time. Oxford University Press.' },
  { id: 7, citation: 'Price, H. (2012). Does time-symmetry imply retrocausality? How the quantum world says “Maybe”? Studies in History and Philosophy of Modern Physics, 43(2), 75–83.' },
  { id: 8, citation: 'Wharton, K. B. (2007). Time-symmetric quantum mechanics. Foundations of Physics, 37(1), 159–168.' },
  { id: 9, citation: 'Wharton, K. B. (2018). A new class of retrocausal models. Entropy, 20(6), 410.' },
  { id: 10, citation: 'Leifer, M. S., & Pusey, M. F. (2017). Is a time symmetric interpretation of quantum theory possible without retrocausality? Proceedings of the Royal Society A, 473(2202), 20160607.' },
  { id: 11, citation: 'Cramer, J. G. (1986). The transactional interpretation of quantum mechanics. Reviews of Modern Physics, 58(3), 647–687.' },
  { id: 12, citation: 'Schulman, L. S. (1997). Time’s Arrows and Quantum Measurement. Cambridge University Press.' },
  { id: 13, citation: 'Albert, D. Z. (2000). Time and Chance. Harvard University Press.' },
  { id: 14, citation: 'Carroll, S. (2010). From Eternity to Here: The Quest for the Ultimate Theory of Time. Dutton.' },
  { id: 15, citation: 'Wheeler, J. A. (1978). The “past” and the “delayed-choice” double-slit experiment. In Mathematical Foundations of Quantum Theory (pp. 9–48). Academic Press.' },
  { id: 16, citation: 'Scully, M. O., & Drühl, K. (1982). Quantum eraser: A proposed photon correlation experiment concerning observation and “delayed choice” in quantum mechanics. Physical Review A, 25(4), 2208.' },
  { id: 17, citation: 'Kim, Y.-H., Yu, R., Kulik, S. P., Shih, Y., & Scully, M. O. (2000). Delayed “choice” quantum eraser. Physical Review Letters, 84(1), 1–5.' },
  { id: 18, citation: 'Friedman, J., Morris, M. S., Novikov, I. D., Echeverria, F., Klinkhammer, G., Thorne, K. S., & Yurtsever, U. (1990). Cauchy problem in spacetimes with closed timelike curves. Physical Review D, 42(6), 1915.' },
  { id: 19, citation: 'Costa de Beauregard, O. (1953). Mécanique quantique. Comptes Rendus de l’Académie des Sciences, 236, 1632–1634.' },
  { id: 20, citation: 'Feynman, R. P. (1948). Space-time approach to non-relativistic quantum mechanics. Reviews of Modern Physics, 20(2), 367–387.' },
  { id: 21, citation: 'Rovelli, C. (2018). The Order of Time. Riverhead Books.' },
  { id: 22, citation: 'Rovelli, C. (2022). Memory and entropy. Entropy, 24(8), 1022.' },
  { id: 23, citation: 'Pearl, J. (2009). Causality: Models, Reasoning, and Inference (2nd ed.). Cambridge University Press.' },
  { id: 24, citation: 'Reichenbach, H. (1956). The Direction of Time. University of California Press.' },
  { id: 25, citation: 'Evans, P. W., Price, H., & Wharton, K. B. (2013). New slant on the EPR–Bell experiment. British Journal for the Philosophy of Science, 64(2), 297–324.' },
  { id: 26, citation: 'Adlam, E. (2018). Spooky action at a temporal distance. Entropy, 20(1), 41.' },
  { id: 27, citation: 'Silberstein, M., Stuckey, W. M., & McDevitt, T. (2018). Beyond the Dynamical Universe: Unifying Block Universe Physics and Time as Experienced. Oxford University Press.' },
  { id: 28, citation: 'Fokker, A. D. (1929). Ein invarianter Variationssatz für die Bewegung mehrerer elektrischer Massenteilchen. Zeitschrift für Physik, 58, 386–393.' },
  { id: 29, citation: 'Beauchamp, T. L., & Rosenberg, A. (1981). Hume and the Problem of Causation. Oxford University Press.' },
  { id: 30, citation: 'Norton, J. D. (2003). Causation as folk science. Philosophers’ Imprint, 3(4), 1–22.' },
  { id: 31, citation: 'Russell, B. (1912). On the notion of cause. Proceedings of the Aristotelian Society, 13, 1–26; Russell, B. (1948). Human Knowledge: Its Scope and Limits. George Allen & Unwin.' },
  { id: 32, citation: 'Woodward, J. (2003). Making Things Happen: A Theory of Causal Explanation. Oxford University Press.' },
  { id: 33, citation: 'Salmon, W. C. (1984). Scientific Explanation and the Causal Structure of the World. Princeton University Press; Dowe, P. (2000). Physical Causation. Cambridge University Press.' },
  { id: 34, citation: 'Strevens, M. (2008). Depth: An Account of Scientific Explanation. Harvard University Press; Hitchcock, C. (2001). The intransitivity of causation revealed in equations and graphs. Journal of Philosophy, 98(6), 273–299.' },
  { id: 35, citation: 'Machamer, P., Darden, L., & Craver, C. F. (2000). Thinking about mechanisms. Philosophy of Science, 67(1), 1–25.' },
  { id: 36, citation: 'Landauer, R. (1961). Irreversibility and heat generation in the computing process. IBM Journal of Research and Development, 5(3), 183–191.' },
  { id: 37, citation: 'Crooks, G. E. (1999). Entropy production fluctuation theorem and the nonequilibrium work relation for free energy differences. Physical Review E, 60(3), 2721–2726.' },
  { id: 38, citation: 'Jarzynski, C. (1997). Nonequilibrium equality for free energy differences. Physical Review Letters, 78(14), 2690–2693.' },
  { id: 39, citation: 'Penrose, R. (1979). Singularities and time-asymmetry. In General Relativity: An Einstein Centenary Survey (pp. 581–638). Cambridge University Press.' },
  { id: 40, citation: 'Horowitz, G. T., & Maldacena, J. (2004). The black hole final state. Journal of High Energy Physics, 2004(02), 008.' },
  { id: 41, citation: 'Ashtekar, A., Pawlowski, T., & Singh, P. (2006). Quantum nature of the big bang. Physical Review Letters, 96(14), 141301.' },
  { id: 42, citation: 'Bojowald, M. (2001). Absence of singularity in loop quantum cosmology. Physical Review Letters, 86(23), 5227–5230.' },
  { id: 43, citation: 'Barbour, J., Koslowski, T., & Mercati, F. (2014). Identification of a gravitational arrow of time. Physical Review Letters, 113(18), 181101.' },
  { id: 44, citation: 'Griffiths, R. B. (2002). Consistent Quantum Theory. Cambridge University Press.' },
  { id: 45, citation: 'Pusey, M. F., Barrett, J., & Rudolph, T. (2012). On the reality of the quantum state. Nature Physics, 8(6), 475–478.' },
  { id: 46, citation: 'Frauchiger, D., & Renner, R. (2018). Quantum theory cannot consistently describe the use of itself. Nature Communications, 9(1), 3711.' },
  { id: 47, citation: 'Schwinger, J. (1961). Brownian motion of a quantum oscillator. Journal of Mathematical Physics, 2(3), 407–432; Keldysh, L. V. (1965). Soviet Physics JETP, 20(4), 1018–1026.' },
  { id: 48, citation: 'Tassan, J.-C., Lauret, W. J. S., Bulaqueña, M. D., Avila Gomez, M., Chatterjee, R., & Goldberger, W. (2026). When Quantum States Become Time: Information-Geometric Resonant Time, Fiber-Bundle Unfreezing, and Falsifiable Horndeski Cosmology. Extended Gravity & Quantum Information Metrology Series, Monograph IGRT-2026-H11.' },
  { id: 49, citation: 'Bulaqueña, M. D. (2026). Information Geometric Gradient (IGG): Foundations of Information Geometric Extended Gravity (IGEG). Extended Gravity Working Paper Series.' },
  { id: 50, citation: 'Wood, C. J., & Spekkens, R. W. (2015). The lesson of causal discovery algorithms for quantum correlations: Causal explanations of Bell-inequality violations require fine-tuning. New Journal of Physics, 17(3), 033002.' },
  { id: 51, citation: 'Boyle, L., Finn, K., & Turok, N. (2018). CPT-symmetric universe. Physical Review Letters, 121(25), 251301.' },
  { id: 52, citation: 'Bennett, C. H. (1982). The thermodynamics of computation—a review. International Journal of Theoretical Physics, 21(12), 905–940.' },
  { id: 53, citation: 'Pusey, M. F. (2014). Anomalous weak values are proofs of contextuality. Physical Review Letters, 113(20), 200401.' },
  { id: 54, citation: 'Lloyd, S., & Preskill, J. (2014). Unitarity of black hole evaporation in final-state projection models. Journal of High Energy Physics, 2014(08), 126.' },
  { id: 55, citation: 'Rauch, D., Handsteiner, J., Hochrainer, A., Gallicchio, J., Friedman, A. S., Leung, C., Liu, B., Bulla, L., Ecker, S., Steinlechner, F., Ursin, R., Hu, B., Leon, D., Benn, C., Ghedina, A., Cecconi, M., Guth, A. H., Kaiser, D. I., Scheidl, T., & Zeilinger, A. (2018). Cosmic Bell test using random measurement settings from high-redshift quasars. Physical Review Letters, 121(8), 080403; Bérut, A., Arakelyan, A., Petrosyan, A., Ciliberto, S., Dillenschneider, R., & Lutz, E. (2012). Experimental verification of Landauer’s principle linking information and thermodynamics. Nature, 483, 187–189.' },
  { id: 56, citation: 'Flew, A. (1954). Can an effect precede its cause? Proceedings of the Aristotelian Society, Supplementary Vol. 28, 45–62; Black, M. (1956). Why cannot an effect precede its cause? Analysis, 16(3), 49–58.' },
  { id: 57, citation: 'Dummett, M. (1964). Bringing about the past. The Philosophical Review, 73(3), 338–359; Lewis, D. (1976). The paradoxes of time travel. American Philosophical Quarterly, 13(2), 145–152.' },
  { id: 58, citation: 'Bong, K.-W., Utreras-Alarcón, A., Ghafari, F., Liang, Y.-C., Tischler, N., Cavalcanti, E. G., Pryde, G. J., & Wiseman, H. M. (2020). A strong no-go theorem on the Wigner’s friend paradox. Nature Physics, 16, 1199–1205.' },
  { id: 59, citation: 'Shimony, A. (1984). Controllable and uncontrollable non-locality. In Foundations of Quantum Mechanics in the Light of New Technology (pp. 225–230); Shimony, A. (1993). Search for a Naturalistic World View (Vol. 2). Cambridge University Press.' },
  { id: 60, citation: 'Connes, A., & Rovelli, C. (1994). Von Neumann algebra automorphisms and time-thermodynamics relation in generally covariant quantum theories. Classical and Quantum Gravity, 11(12), 2899–2917.' },
  { id: 61, citation: 'Loewer, B. (2012). Two accounts of laws and time. Philosophical Studies, 160(1), 115–137; Callender, C. (2004). There is no puzzle about the low-entropy past. In Contemporary Debates in Philosophy of Science (pp. 240–255). Blackwell.' },
  { id: 62, citation: 'Zurek, W. H. (2009). Quantum Darwinism. Nature Physics, 5(3), 181–188; Buchholz, D., & Wichmann, E. H. (1986). Causal independence and the energy-level density of states in local quantum field theory. Communications in Mathematical Physics, 106, 321–344.' },
  { id: 63, citation: 'Stein, H. (1968). On Einstein–Minkowski space-time. Journal of Philosophy, 65(1), 5–23; Stein, H. (1991). On relativity theory and openness of the future. Philosophy of Science, 58(2), 147–167.' },
  { id: 64, citation: 'Mackie, J. L. (1974). The Cement of the Universe: A Study of Causation. Clarendon Press; Elga, A. (2001). Statistical mechanics and the asymmetry of counterfactual dependence. Philosophy of Science, 68(S3), S313–S324.' },
  { id: 65, citation: 'Earman, J., & Norton, J. D. (1998/1999). Exorcist XIV: The wrath of Maxwell’s demon. Studies in History and Philosophy of Modern Physics, 29(4), 435–471 & 30(1), 1–40; Reeb, D., & Wolf, M. M. (2014). An improved Landauer principle with finite-size corrections. New Journal of Physics, 16(10), 103011.' },
  { id: 66, citation: 'Harrigan, N., & Spekkens, R. W. (2010). Einstein, incompleteness, and the epistemic view of quantum states. Foundations of Physics, 40(2), 125–157; Oreshkov, O., Costa, F., & Brukner, Č. (2012). Quantum correlations with no causal order. Nature Communications, 3, 1092.' },
  { id: 67, citation: 'Ferrie, C., & Combes, J. (2014). How the result of a single coin toss can turn out to be 100 heads. Physical Review Letters, 113(12), 120404; Knee, G. C., & Gauger, E. M. (2014). When amplification with weak values fails to suppress technical noise. Physical Review X, 4(1), 011032.' },
  { id: 68, citation: 'Dowker, F., & Kent, A. (1996). On the consistent histories approach to quantum mechanics. Journal of Statistical Physics, 82(5–6), 1575–1646; Penington, G. (2020). Entanglement wedge reconstruction and the information paradox. Journal of High Energy Physics, 2020(09), 002.' },
  { id: 69, citation: 'Bongers, S., Forré, P., Peters, J., & Mooij, J. M. (2021). Foundations of structural causal models with cycles and latent variables. Annals of Statistics, 49(5), 2885–2915; Ismael, J. T. (2016). How Physics Makes Us Free. Oxford University Press.' },
  { id: 70, citation: 'Giovannetti, V., Lloyd, S., & Maccone, L. (2015). Quantum time. Physical Review D, 92(4), 045033; Hogarth, J. E. (1962). Cosmological considerations of the absorber theory of radiation. Proceedings of the Royal Society A, 267(1330), 365–383.' }
];

export const RETRO_INDEX_OF_NAMES: RetroIndexEntry[] = [
  { entry: 'Adlam, Emily', sections: 'Part 1 (§1.4), Part 5, Part 8 (§21), Ref. 26' },
  { entry: 'Aharonov, Yakir', sections: 'Part 6 (§13–14), Part 8 (§21), Ref. 3–5' },
  { entry: 'Albert, David Z.', sections: 'Part 7 (§16–17), Part 8 (§21), Ref. 13' },
  { entry: 'Aristotle', sections: 'Part 1 (§1.2), Part 8 (§21, Table 8.3)' },
  { entry: 'Ashtekar, Abhay', sections: 'Part 7 (§16), Part 8 (§21), Ref. 41' },
  { entry: 'Barbour, Julian · Koslowski · Mercati', sections: 'Part 7 (§16), Ref. 43' },
  { entry: 'Beauchamp, Tom L.', sections: 'Part 1 (§1.2), Part 8 (§21.2), Ref. 29' },
  { entry: 'Bennett, Charles H.', sections: 'Part 1 (§1.7), Part 2 (§2.5), Ref. 52' },
  { entry: 'Bergmann, Peter G.', sections: 'Part 6 (§13), Ref. 3' },
  { entry: 'Black, Max', sections: 'Part 1 (§1.3), Part 8 (§21, Table 8.3), Ref. 56' },
  { entry: 'Bojowald, Martin', sections: 'Part 7 (§16), Ref. 42' },
  { entry: 'Boltzmann, Ludwig', sections: 'Part 1 (§1.3), Part 7 (§16), Part 8 (§21)' },
  { entry: 'Bong, Kok-Wei · Wiseman', sections: 'Part 5 (§11), Part 6 (§15), Part 8 (§21), Ref. 58' },
  { entry: 'Bongers, Stephan · Forré · Peters · Mooij', sections: 'Part 1 (§1.4, §1.6), Part 8 (§19), Ref. 69' },
  { entry: 'Boyle, Latham · Finn · Turok', sections: 'Part 7 (§16), Part 8 (§20–21), Ref. 51' },
  { entry: 'Buchholz, Detlev & Wichmann, Eyvind', sections: 'Part 2 (§2.4), Part 5 (§11), App. B, Ref. 62' },
  { entry: 'Bulaqueña, Marlon D. (IGRT / IGEG)', sections: 'Part 2 (§2.5), Part 3 (§6), Part 6 (§14), Part 8 (§20–21), Ref. 48–49' },
  { entry: 'Callender, Craig', sections: 'Part 7 (§16), Part 8 (§21), Ref. 61' },
  { entry: 'Carroll, Sean', sections: 'Part 7, Ref. 14' },
  { entry: 'Chrysippus', sections: 'Part 1 (§1.2), Part 8 (§21, Table 8.3)' },
  { entry: 'Connes, Alain', sections: 'Part 7 (§16), Part 8 (§21), Ref. 60' },
  { entry: 'Costa de Beauregard, Olivier', sections: 'Part 5, Part 6, Ref. 19' },
  { entry: 'Cramer, John G.', sections: 'Part 6 (§15), Ref. 11' },
  { entry: 'Crooks, Gavin E.', sections: 'Part 1 (§1.3), Part 2 (§2.5), Part 7 (§16), Ref. 37' },
  { entry: 'Dowe, Phil', sections: 'Part 1 (§1.4, §1.7), Part 8 (§21, Table 8.3), Ref. 33' },
  { entry: 'Dowker, Fay & Kent, Adrian', sections: 'Part 2 (§2.4), Part 6 (§15), Ref. 68' },
  { entry: 'Dummett, Michael', sections: 'Part 1 (§1.3), Part 8 (§21, Table 8.3), Ref. 57' },
  { entry: 'Earman, John & Norton, John D.', sections: 'Part 1 (§1.2, §1.7), Part 7 (§17), Ref. 30, 65' },
  { entry: 'Elga, Adam', sections: 'Part 1 (§1.4), Part 8 (§19), Ref. 64' },
  { entry: 'Ferrie, Christopher & Combes, Joshua', sections: 'Part 6 (§14), Ref. 67' },
  { entry: 'Feynman, Richard P.', sections: 'Part 2 (§4), Part 4 (§9), Ref. 1–2, 20' },
  { entry: 'Flew, Antony', sections: 'Part 1 (§1.3), Part 8 (§21, Table 8.3), Ref. 56' },
  { entry: 'Fokker, Adriaan D.', sections: 'Part 2 (§3), Ref. 28' },
  { entry: 'Frauchiger, Daniela', sections: 'Part 6 (§15), Ref. 46' },
  { entry: 'Gibbs, Josiah Willard', sections: 'Part 7 (§16), Part 8 (§20–21)' },
  { entry: 'Giovannetti, Vittorio · Lloyd · Maccone', sections: 'Part 3 (§7), Ref. 70' },
  { entry: 'Griffiths, Robert B.', sections: 'Part 2 (§2.4), Part 6 (§15), Ref. 44' },
  { entry: 'Hamilton, William Rowan', sections: 'Part 2 (§2.2), Part 3 (§6), Part 8 (§21)' },
  { entry: 'Harrigan, Nicholas & Spekkens, Robert W.', sections: 'Part 1 (§1.1), Part 6 (§15), Ref. 66' },
  { entry: 'Hitchcock, Christopher', sections: 'Part 1 (§1.4, §1.6), Part 8 (§21, Table 8.3), Ref. 34' },
  { entry: 'Hogarth, J. E.', sections: 'Part 2 (§2.3), Ref. 70' },
  { entry: 'Horowitz, Gary T.', sections: 'Part 3 (§7), Part 8 (§20–21), Ref. 40' },
  { entry: 'Hume, David', sections: 'Part 1 (§1.2), Part 8 (§21, Table 8.3)' },
  { entry: 'Ismael, Jenann T.', sections: 'Part 1 (§1.2), App. C (Obj. 3), Ref. 69' },
  { entry: 'Jarzynski, Christopher', sections: 'Part 1 (§1.3), Part 7 (§16), Ref. 38' },
  { entry: 'Kant, Immanuel', sections: 'Part 1 (§1.2), Part 8 (§21, Table 8.3)' },
  { entry: 'Knee, George C. & Gauger, Erik M.', sections: 'Part 6 (§14), Ref. 67' },
  { entry: 'Landauer, Rolf', sections: 'Part 1 (§1.7), Part 2 (§2.5), Part 7 (§17), Ref. 36, 55' },
  { entry: 'Lebowitz, Joel L.', sections: 'Part 6 (§13), Part 7 (§16), Ref. 3' },
  { entry: 'Leifer, Matthew S.', sections: 'Part 6 (§15), Part 8 (§20–21), Ref. 10' },
  { entry: 'Lewis, David K.', sections: 'Part 1 (§1.1, §1.3–1.4), Part 8 (§21, Table 8.3), Ref. 57' },
  { entry: 'Lloyd, Seth & Preskill, John', sections: 'Part 3 (§7), Ref. 54' },
  { entry: 'Loewer, Barry', sections: 'Part 7 (§16), Part 8 (§21), Ref. 61' },
  { entry: 'Machamer, Peter · Darden · Craver', sections: 'Part 1 (§1.4, §1.7), Part 8 (§21), Ref. 35' },
  { entry: 'Mackie, J. L.', sections: 'Part 1 (§1.3), Part 8 (§21.2), Ref. 64' },
  { entry: 'Maldacena, Juan', sections: 'Part 3 (§7), Part 8 (§20–21), Ref. 40' },
  { entry: 'Maudlin, Tim', sections: 'Part 1 (§1.1, §1.4), Part 6 (§15), Part 8 (§21, Table 8.3)' },
  { entry: 'Maxwell, James Clerk', sections: 'Part 2 (§3–4)' },
  { entry: 'Novikov, Igor D.', sections: 'Part 5 (§12), Ref. 18' },
  { entry: 'Oreshkov, Ognyan · Costa · Brukner', sections: 'Part 5 (§11), Part 6 (§13), Ref. 66' },
  { entry: 'Pearl, Judea', sections: 'Part 1 (§1.4), Part 5, Part 8 (§21), Ref. 23' },
  { entry: 'Penington, Geoffrey', sections: 'Part 3 (§7), Ref. 68' },
  { entry: 'Penrose, Roger', sections: 'Part 2 (§2.3), Part 7 (§16), Part 8 (§21), Ref. 39' },
  { entry: 'Price, Huw', sections: 'Part 1 (§1.4), Part 5, Part 6, Part 8 (§21), Ref. 6–7, 25' },
  { entry: 'Pusey, Matthew F. (PBR & Weak Contextuality)', sections: 'Part 1 (§1.1), Part 6 (§14–15), Part 8 (§20–21), Ref. 10, 45, 53' },
  { entry: 'Rauch, Dominik · Zeilinger (Cosmic Bell)', sections: 'Part 6 (§15), Ref. 55' },
  { entry: 'Reeb, David & Wolf, Michael M.', sections: 'Part 1 (§1.7), Part 7 (§17), Ref. 65' },
  { entry: 'Reichenbach, Hans', sections: 'Part 1 (§1.4), Part 7, Part 8 (§21), Ref. 24' },
  { entry: 'Renner, Renato', sections: 'Part 6 (§15), Ref. 46' },
  { entry: 'Rovelli, Carlo', sections: 'Part 6 (§15), Part 7 (§16–17), Ref. 21–22, 60' },
  { entry: 'Russell, Bertrand', sections: 'Part 1 (§1.1, §1.3), Part 8 (§21, Table 8.3), Ref. 31' },
  { entry: 'Salmon, Wesley C.', sections: 'Part 1 (§1.4, §1.7), Part 8 (§21), Ref. 33' },
  { entry: 'Schulman, Lawrence S.', sections: 'Part 3 (§7), Part 7 (§16), Ref. 12' },
  { entry: 'Scully, Marlan O.', sections: 'Part 6 (§15), Ref. 16–17' },
  { entry: 'Shimony, Abner', sections: 'Part 6 (§15), Part 8 (§21, Table 8.3), Ref. 59' },
  { entry: 'Stein, Howard', sections: 'Part 1 (§0.1), Part 4 (§9), Ref. 63' },
  { entry: 'Strevens, Michael', sections: 'Part 1 (§1.4, §1.7), Ref. 34' },
  { entry: 'Thorne, Kip S.', sections: 'Part 5 (§12), Ref. 18' },
  { entry: 'Vaidman, Lev', sections: 'Part 6 (§13–14), Ref. 4–5' },
  { entry: 'Wharton, Ken B.', sections: 'Part 1 (§1.4), Part 3 (§6), Part 6, Part 8, Ref. 8–9, 25' },
  { entry: 'Wheeler, John Archibald', sections: 'Part 2 (§4), Part 6 (§15), Ref. 1–2, 15' },
  { entry: 'Wood, Christopher J. & Spekkens, Robert W.', sections: 'Part 1 (§1.4), Part 6 (§15), Part 8 (§21), Ref. 50' },
  { entry: 'Woodward, James', sections: 'Part 1 (§1.4), Part 8 (§21, Table 8.3), Ref. 32' },
  { entry: 'Zurek, Wojciech H.', sections: 'Part 6 (§15), Part 7 (§17), Ref. 62' }
];

export const RETRO_INDEX_OF_CONCEPTS: RetroIndexEntry[] = [
  { entry: 'ABL Rule, TSVF, Hardy Paradox & Three-Box Paradox', sections: 'Part 1 (§1.1), Part 6 (§13–14), Part 8 (§21), App. A' },
  { entry: 'Absorber Theory (Penrose Null Infinity, Hogarth & QED Limits)', sections: 'Part 2 (§2.3), Part 8 (§21.4), App. A, Ref. 70' },
  { entry: 'Advanced & Retarded Solutions (G_ret + G_adv = 2 G_sym)', sections: 'Part 1 (§1.1), Part 2 (§2.3–2.4), Table 2.1' },
  { entry: 'Antecedent Causation & Local Narrow Capability', sections: 'Part 1 (§1.3, §1.6), Part 8 (§19)' },
  { entry: 'Bilking Paradox (Black–Flew–Dummett–Lewis–Mackie) & Holevo/Lemma 5.1', sections: 'Part 1 (§1.3), Part 5 (§11–12), App. C' },
  { entry: 'Block Universe Eternalism, Stein Light-Cone & Ismael Agency', sections: 'Part 1 (§0.1, §1.2), Part 4 (§9), Part 8 (§21.2), App. C' },
  { entry: 'Boltzmann Brains, Eternal-Inflation Measures & Poincaré Recurrence', sections: 'Part 1 (§1.3), Part 7 (§16–17)' },
  { entry: 'Cauchy Unfolding vs. Hamilton–GHY BVP & Spectral Resonances', sections: 'Part 2 (§2.2), Part 3 (§6–8), Part 8 (§21)' },
  { entry: 'Connes–Rovelli Thermal Time & Past Hypothesis (BSA vs. Nomic)', sections: 'Part 1 (§1.1), Part 7 (§16), Part 8 (§21), Ref. 60–61' },
  { entry: 'Consequent Constraint (Kinematic / Measure / Bayesian)', sections: 'Part 1 (§1.6), Part 3 (§7), Part 8 (§19, §21)' },
  { entry: 'Consistent Histories (Dowker–Kent), Zurek Darwinism & Bong et al.', sections: 'Part 2 (§2.4), Part 6 (§15), Ref. 44, 58, 68' },
  { entry: 'Cyclic SCMs (Bongers), Lewis–Elga Counterfactuals & Wood–Spekkens', sections: 'Part 1 (§1.4, §1.6), Part 6 (§15), Part 8 (§19, §21.2)' },
  { entry: 'Delayed-Choice Quantum Eraser, Harrigan–Spekkens & Cosmic Bell', sections: 'Part 1 (§1.1), Part 6 (§15), Table 8.2, Ref. 55, 66' },
  { entry: 'Explanatory Direction, Ockham Razor & Kitcher Unification', sections: 'Part 1 (§1.7), Part 7, Part 8 (§19, §21)' },
  { entry: 'Feynman Propagator, Reeh–Schlieder Split, CPT & Schwinger–Keldysh', sections: 'Part 1 (§1.1), Part 2 (§2.4), Part 8 (§21.4)' },
  { entry: 'Fourfold 21-Stratum Taxonomy & Structural Homomorphism Φ_hom', sections: 'Part 1 (§1.5–1.8, Tables 1.1–1.2), Part 8 (§21.3)' },
  { entry: 'Gibbs Liouville Entropy (S_G), Typicality & Boltzmann Entropy (S_B)', sections: 'Part 7 (§16), Part 8 (§20–21)' },
  { entry: 'Global Consistency, Process Matrices & Brouwer/Schauder Fixed Points', sections: 'Part 5 (§11–12), Part 8 (§19, §21)' },
  { entry: 'Horowitz–Maldacena Final State, Page Curve & Quantum Extremal Islands', sections: 'Part 3 (§7), Part 8 (§20–21), Ref. 40, 54, 68' },
  { entry: 'Information-Geometric Resonant Time (IGRT) & ds_QFI Metrology', sections: 'Part 2 (§2.5), Part 3 (§6), Part 6 (§14, Ill. XXVIII), Ref. 48–49' },
  { entry: 'Kraus Instruments, U(t_f,t) Ordering & Theorem 5.0 (Non-Circular R3)', sections: 'Part 2 (§2.5), Part 5 (§11), Part 8 (§21), App. B' },
  { entry: 'Landauer–Reeb–Wolf Non-Circular Cost, Wolpert KL & Quantum Darwinism', sections: 'Part 1 (§1.3, §1.7), Part 2 (§2.5), Part 7 (§16–17, Ill. XXIX)' },
  { entry: 'Past Hypothesis (Weyl Curvature C_{αβγδ} ≈ 0, LQC, Janus Point & CPT)', sections: 'Part 1 (§1.3), Part 7 (§16–18), Part 8 (§21), Ref. 39, 41, 43, 51' },
  { entry: 'Prospective Fisher Protocol (F_tot = P_post · F_post) vs. Knee–Gauger', sections: 'Part 6 (§14, Ill. XXVIII), Part 8 (§20), Table 8.2, Ref. 67' },
  { entry: 'Quine–Duhem Underdetermination, Principal Principle & Falsifiability', sections: 'Part 1 (§0.1, §1.6), Part 7, Part 8 (§20, §21.5)' },
  { entry: 'Temporally Constrained Present', sections: 'Part 4 (§9–10)' },
  { entry: 'Temporally Distributed Causal Determination', sections: 'Part 8 (§19–21), Table 8.3' },
  { entry: 'Weak Values (WVA, Ferrie–Combes & Pusey Contextuality)', sections: 'Part 6 (§14), Part 8 (§20–21), Ref. 53, 67' }
];

