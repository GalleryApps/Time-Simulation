/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Formal Philosophical Logic, Cross-Tradition Consistency Evaluators,
 * and 40-Shade Color System for Paper 15 (Synthese Journal):
 * "Where or Who Is the Observer? The Observer in Phenomenology,
 *  Quantum Foundations, and Systems Theory"
 *
 * Zero DOM dependencies — deterministic logical proofs verified via node:test.
 */

export type Palette40Family =
  | 'Ecru'
  | 'Orange'
  | 'Dark Magenta'
  | 'Dark Teal'
  | 'Pine Green'
  | 'Complementary';

export interface Shade40Token {
  id: number;
  family: Palette40Family;
  name: string;
  hex: string;
  rgb: [number, number, number];
  role: string;
}

/**
 * Complete 40-Shade Editorial System:
 * Ecru (6) + Orange (7) + Dark Magenta (7) + Dark Teal (7) + Pine Green (6) + Complementary (7) = 40 shades.
 */
export const PALETTE_40_SHADES: Shade40Token[] = [
  // 1. Ecru (6 shades: IDs 1–6)
  { id: 1, family: 'Ecru', name: 'Archival Ecru Paper', hex: '#FDFBF7', rgb: [253, 251, 247], role: 'Primary broadsheet reading surface' },
  { id: 2, family: 'Ecru', name: 'Warm Ecru Folio', hex: '#FAF6EC', rgb: [250, 246, 236], role: 'Monograph spread & sidebar ground' },
  { id: 3, family: 'Ecru', name: 'Vellum Cream', hex: '#F4EFE6', rgb: [244, 239, 230], role: 'Alternating table stripe & margin rail' },
  { id: 4, family: 'Ecru', name: 'Linen Ecru', hex: '#EDE5D5', rgb: [237, 229, 213], role: 'Abstract & dossier backdrop' },
  { id: 5, family: 'Ecru', name: 'Antique Parchment', hex: '#E2D6C1', rgb: [226, 214, 193], role: 'Inset rule accent & light border' },
  { id: 6, family: 'Ecru', name: 'Deep Ecru Hairline', hex: '#CBBBA0', rgb: [203, 187, 160], role: 'Editorial column rules & dividers' },

  // 2. Orange (7 shades: IDs 7–13)
  { id: 7, family: 'Orange', name: 'Apricot Glow Wash', hex: '#FFF4EB', rgb: [255, 244, 235], role: 'Subtle warm wash tint' },
  { id: 8, family: 'Orange', name: 'Copper Peach', hex: '#F7C9A5', rgb: [247, 201, 165], role: 'Soft warm border accent' },
  { id: 9, family: 'Orange', name: 'Terracotta Amber', hex: '#F08A43', rgb: [240, 138, 67], role: 'Dark-mode warm highlight' },
  { id: 10, family: 'Orange', name: 'Burnished Orange', hex: '#EA580C', rgb: [234, 88, 12], role: 'Secondary warm rubric token' },
  { id: 11, family: 'Orange', name: 'Burnt Sienna', hex: '#C2410C', rgb: [194, 65, 12], role: 'Drop-cap & warm divider accent' },
  { id: 12, family: 'Orange', name: 'Rust Vermilion', hex: '#9A3412', rgb: [154, 52, 18], role: 'Readable warm ink on light ecru' },
  { id: 13, family: 'Orange', name: 'Deep Umber Orange', hex: '#5C1D07', rgb: [92, 29, 7], role: 'High-contrast umber display ink' },

  // 3. Dark Magenta (7 shades: IDs 14–20)
  { id: 14, family: 'Dark Magenta', name: 'Pale Magenta Wash', hex: '#F9EEF4', rgb: [249, 238, 244], role: 'Theorem & proof surface tint' },
  { id: 15, family: 'Dark Magenta', name: 'Dusty Rose Magenta', hex: '#C974A6', rgb: [201, 116, 166], role: 'Dark-mode magenta accent & hairlines' },
  { id: 16, family: 'Dark Magenta', name: 'Muted Tyrian Berry', hex: '#9E2D72', rgb: [158, 45, 114], role: 'Dialectical critique rule accent' },
  { id: 17, family: 'Dark Magenta', name: 'Plum Magenta Accent', hex: '#831B5B', rgb: [131, 27, 91], role: 'Schema numbering & subheaders' },
  { id: 18, family: 'Dark Magenta', name: 'Rich Magenta', hex: '#661447', rgb: [102, 20, 71], role: 'Restrained figure & chapter hairline' },
  { id: 19, family: 'Dark Magenta', name: 'Dark Magenta Core', hex: '#4A0E33', rgb: [74, 14, 51], role: 'Primary display accent & pull quotes' },
  { id: 20, family: 'Dark Magenta', name: 'Deep Aubergine Ink', hex: '#2E0820', rgb: [46, 8, 32], role: 'Display headlines & cover title ink' },

  // 4. Dark Teal (7 shades: IDs 21–27)
  { id: 21, family: 'Dark Teal', name: 'Pale Teal Mist', hex: '#EDF5F6', rgb: [237, 245, 246], role: 'Logic schema box & table header tint' },
  { id: 22, family: 'Dark Teal', name: 'Mist Teal', hex: '#6CB2BD', rgb: [108, 178, 189], role: 'Dark-mode secondary ink & grid ticks' },
  { id: 23, family: 'Dark Teal', name: 'Slate Teal', hex: '#278594', rgb: [39, 133, 148], role: 'Running header ink & marginalia notes' },
  { id: 24, family: 'Dark Teal', name: 'Oceanic Teal', hex: '#186876', rgb: [24, 104, 118], role: 'Interactive logic controls & frame rules' },
  { id: 25, family: 'Dark Teal', name: 'Deep Petrol Teal', hex: '#11505C', rgb: [17, 80, 92], role: 'Table headers & primary schematic ink' },
  { id: 26, family: 'Dark Teal', name: 'Dark Teal Core', hex: '#0B3942', rgb: [11, 57, 66], role: 'Subsection headers & dark-mode card base' },
  { id: 27, family: 'Dark Teal', name: 'Abyssal Teal Ink', hex: '#062429', rgb: [6, 36, 41], role: 'Primary serif prose & deep dark surface' },

  // 5. Pine Green (6 shades: IDs 28–33)
  { id: 28, family: 'Pine Green', name: 'Pale Pine Wash', hex: '#EEF5F1', rgb: [238, 245, 241], role: 'Systems closure & concordance wash' },
  { id: 29, family: 'Pine Green', name: 'Soft Needle Green', hex: '#4A9374', rgb: [74, 147, 116], role: 'Dark-mode pine verification highlight' },
  { id: 30, family: 'Pine Green', name: 'Forest Pine', hex: '#227252', rgb: [34, 114, 82], role: 'Operational closure accent' },
  { id: 31, family: 'Pine Green', name: 'Deep Conifer', hex: '#17573E', rgb: [23, 87, 62], role: 'Methodological notes & chapter summary ink' },
  { id: 32, family: 'Pine Green', name: 'Pine Green Core', hex: '#0F3D2B', rgb: [15, 61, 43], role: 'Consistent deduction indicator & citations' },
  { id: 33, family: 'Pine Green', name: 'Midnight Pine', hex: '#082419', rgb: [8, 36, 25], role: 'Deep forest anchor' },

  // 6. Complementary Editorial Accents (7 shades: IDs 34–40)
  { id: 34, family: 'Complementary', name: 'Prussian Indigo', hex: '#1E2D52', rgb: [30, 45, 82], role: 'Complementary invariant structural ink' },
  { id: 35, family: 'Complementary', name: 'Slate Cerulean', hex: '#4D6B99', rgb: [77, 107, 153], role: 'Muted coordinate hairline' },
  { id: 36, family: 'Complementary', name: 'Archival Brass Ochre', hex: '#A16207', rgb: [161, 98, 7], role: 'Muted brass divider hairline' },
  { id: 37, family: 'Complementary', name: 'Antique Gold Foil', hex: '#FBF3D5', rgb: [251, 243, 213], role: 'Subtle parchment highlight' },
  { id: 38, family: 'Complementary', name: 'Coral Vermilion', hex: '#C64334', rgb: [198, 67, 52], role: 'Contradiction / reductio warning ink' },
  { id: 39, family: 'Complementary', name: 'Sage Olive', hex: '#4E6B48', rgb: [78, 107, 72], role: 'Naturalized realist balance' },
  { id: 40, family: 'Complementary', name: 'Broadsheet Charcoal', hex: '#161A1D', rgb: [22, 26, 29], role: 'High-contrast archival serif reading ink' }
];

export const SHADE_BY_ID: Record<number, Shade40Token> = Object.fromEntries(
  PALETTE_40_SHADES.map((s) => [s.id, s])
);

export type TraditionKey =
  | 'phenomenology'
  | 'deconstruction'
  | 'quantum-foundations'
  | 'systems-enaction';

export interface PhilosophicalAxiomSet {
  perspectivalImmanence: boolean;   // A1: □(Obs(o) → ∃H_o Situated(o, H_o))
  relationalParity: boolean;        // A2: ∀o,o′ (Overlap(o, o′) → Compat(o, o′) ∧ Equiv_inv(o, o′))
  operationalBoundary: boolean;     // A3: ∀o,x (Discern(o, x) → ∃B_o Sep(B_o, Inside_o, Ext_o))
  asymmetricSelfAffection: boolean; // A4: ∀o (TemporalObs(o) → ∃S_o,I_now (S_o ≥ 0 ∧ Asym(S_o) ∧ |I_now| > 0))
}

export interface PhilosophicalConsistencyAudit {
  tradition: TraditionKey;
  traditionLabel: string;
  axiomsSatisfiedCount: number;
  consistentSynthesis: boolean;
  paradoxStatus:
    | 'Resolved: Situated Perspective Without Global Privilege'
    | 'Reductio: Archimedean Regress (Objectification Antinomy)'
    | 'Reductio: Solipsistic Privilege (Intersubjective Collapse)'
    | 'Reductio: Unbounded Indistinction (Infinite Boundary Regress)'
    | 'Reductio: Punctual Freeze (Absence of Living Present)';
  missingAxioms: string[];
  formalInferenceChain: string[];
  traditionResolution: string;
}

const TRADITION_PROFILES: Record<
  TraditionKey,
  {
    label: string;
    exemplars: string;
    primaryInsight: string;
    structuralCorrelate: string;
  }
> = {
  phenomenology: {
    label: 'Transcendental Phenomenology (§§2–9)',
    exemplars: 'Kant, Husserl, Heidegger, Merleau-Ponty, Henry, Levinas',
    primaryInsight:
      'Any observer constituting an objective manifold cannot appear globally as a simple object inside that same manifold.',
    structuralCorrelate:
      'Local horizon H_o (A1), Paarung concordance Compat(o, o′) (A2), operational demarcation B_o (A3), and pre-objective Urstrom/auto-affection (A4).'
  },
  deconstruction: {
    label: 'Deconstruction & Critique (§§10–15a)',
    exemplars: 'Derrida, Foucault, Lacan, Deleuze, Nancy, Marion',
    primaryInsight:
      'No punctual, self-identical “now” or sovereign unmediated ego exists free of differential traces, extimate splitting, dispositif cuts, and co-original exposure.',
    structuralCorrelate:
      'Non-punctual trace thickness |I_now| > 0 (A4), boundary remainders such as objet petit a outside Inside_o (A3), and co-original plurality (A2).'
  },
  'quantum-foundations': {
    label: 'Quantum Foundations (§§16–27)',
    exemplars: 'Bohr, Von Neumann, Wigner, Everett, Wheeler, Rovelli, QBism, Zurek, Griffiths, Cramer, RBW, FOH',
    primaryInsight:
      'Observation requires a contextual demarcation cut B_o whose placement is movable across perspectives without privileging any single agent.',
    structuralCorrelate:
      'Frame-indexed facts (A1), Cross-Perspective Links Compat(o, o′) (A2), einselected split boundary B_o (A3), and dissipative FOH cycles (A4).'
  },
  'systems-enaction': {
    label: 'Second-Order Systems & Enaction (§§28–33)',
    exemplars: 'Von Foerster, Luhmann, Maturana & Varela, Noë, Metzinger, Dennett',
    primaryInsight:
      'Every observing system constitutes itself via operative closure across an enacted boundary Sep(B_o, Inside_o, Ext_o) that stays invisible from within.',
    structuralCorrelate:
      'Autopoietic Markov-blanket closure (A3), structural coupling & double contingency (A2), transparent PSM (A4), and endogenous niche H_o (A1).'
  }
};

export function evaluatePhilosophicalConsistency(
  axioms: PhilosophicalAxiomSet,
  tradition: TraditionKey
): PhilosophicalConsistencyAudit {
  const profile = TRADITION_PROFILES[tradition];
  const missingAxioms: string[] = [];
  if (!axioms.perspectivalImmanence) missingAxioms.push('A1 (Perspectival Immanence)');
  if (!axioms.relationalParity) missingAxioms.push('A2 (Egalitarian Frame Parity)');
  if (!axioms.operationalBoundary) missingAxioms.push('A3 (Operational Demarcation Cut)');
  if (!axioms.asymmetricSelfAffection) missingAxioms.push('A4 (Asymmetric Self-Relation)');

  const count = 4 - missingAxioms.length;

  let paradoxStatus: PhilosophicalConsistencyAudit['paradoxStatus'] =
    'Resolved: Situated Perspective Without Global Privilege';
  const formalInferenceChain: string[] = [];

  if (!axioms.perspectivalImmanence) {
    paradoxStatus = 'Reductio: Archimedean Regress (Objectification Antinomy)';
    formalInferenceChain.push(
      '1. [Assumption for Reductio ¬A1] Over varying-domain S4 frame ⟨W, R, D(w)⟩ (blocking Barcan universalism), suppose ∃o_global ∀x Rep(o_global, x) without a situated horizon H_o.'
    );
    formalInferenceChain.push(
      '2. [Transcendental Rule — Kant B131 / Von Neumann / Breuer] ∀o [Rep(o, W) → ∃o′ (Prior(o′, o) ∧ ¬ContainsGlobal(o, o′))].'
    );
    formalInferenceChain.push(
      '3. [Vicious Regress & Diagonal Contradiction] Iterating Universal Instantiation forces an irreflexive ascent o₀ ≺ o₁ ≺ o₂ ≺ …; global self-inclusion yields Rep(o_global, o_global) ∧ ¬Rep(o_global, o_global) → ⊥.'
    );
    formalInferenceChain.push(
      '4. [Conclusion ⊢ A1] By Reductio ad Absurdum and S4 necessitation, □∀o (Obs(o) → ∃H_o [Situated(o, H_o) ∧ ¬GlobalView(o)]) holds necessarily.'
    );
  } else if (!axioms.relationalParity) {
    paradoxStatus = 'Reductio: Solipsistic Privilege (Intersubjective Collapse)';
    formalInferenceChain.push(
      '1. [Assumption for Reductio A1 ∧ ¬A2] Suppose ∃o* ∀o≠o* Privileged(o*) ∧ ¬Equiv_inv(o*, o), granting one ego metaphysical monopoly over truth predicates.'
    );
    formalInferenceChain.push(
      '2. [Rule — Husserl 5th Med. Paarung / Adlam–Rovelli Links] Objective(p) ↔ ∀o,o′ [Overlap(o, o′) → (Compat(o, o′) ∧ Equiv_inv(o, o′))].'
    );
    formalInferenceChain.push(
      '3. [Coherence Collapse] Under ¬A2, cross-frame translation rules vanish; o* cannot distinguish objective p from private stipulation (Objective(p) ∧ ¬Objective(p) → ⊥).'
    );
    formalInferenceChain.push(
      '4. [Conclusion ⊢ A2] By Modus Tollens and Reductio, normative-structural parity Compat(o, o′) ∧ Equiv_inv(o, o′) is mandatory.'
    );
  } else if (!axioms.operationalBoundary) {
    paradoxStatus = 'Reductio: Unbounded Indistinction (Infinite Boundary Regress)';
    formalInferenceChain.push(
      '1. [Assumption for Reductio A1 ∧ A2 ∧ ¬A3] Suppose ∃o,x [Discern(o, x) ∧ ¬∃B_o Sep(B_o, Inside_o, Ext_o)] with zero separation buffer.'
    );
    formalInferenceChain.push(
      '2. [Rule — Topological Anti-Continuum Lemma / Split Property] ¬∃B_o Sep(B_o, Inside_o, Ext_o) → Inside_o = Continuum(W) → ∀r∈Σ_o [Blur(r, ¬r) ∧ ∀x,y Indistinguishable_o(x, y)].'
    );
    formalInferenceChain.push(
      '3. [Sigma-Algebra Collapse] Discrete memory records Σ_o diffuse globally into ambient noise, yielding Discern(o, x) ∧ ¬Discern(o, x) → ⊥.'
    );
    formalInferenceChain.push(
      '4. [Conclusion ⊢ A3] By Reductio ad Absurdum, every discerning observer maintains a finite boundary Sep(B_o, Inside_o, Ext_o) registering Ext_o via re-entry traces.'
    );
  } else if (!axioms.asymmetricSelfAffection) {
    paradoxStatus = 'Reductio: Punctual Freeze (Absence of Living Present)';
    formalInferenceChain.push(
      '1. [Assumption for Reductio A1..A3 ∧ ¬A4] Suppose an observer maintains B_o purely at zero-width instant I₀ = [t, t] with full symmetric shift invariance T_c(S_o) ≡ T_{-c}(S_o).'
    );
    formalInferenceChain.push(
      '2. [Rule — Allen Interval Logic & Henry A4a] ChangeObs(o, A→B) → ∃S_o,I_now [NonNeg(S_o) ∧ Asym(S_o) ∧ Dur(I_now) > 0 ∧ Overlaps(Ret_o, I_now) ∧ Meets(I_now, Prot_o)].'
    );
    formalInferenceChain.push(
      '3. [Degenerate Slice Contradiction] On [t, t], Overlaps(Ret_o, [t, t]) = ∅ and symmetric shift erases mineness polarity, yielding ChangeObs(o) ∧ ¬ChangeObs(o) → ⊥.'
    );
    formalInferenceChain.push(
      '4. [Conclusion ⊢ A4] Asymmetric self-relation S_o ≥ 0 generating a thick living present (|I_now| > 0) is deductively indispensable.'
    );
  } else {
    formalInferenceChain.push(
      '1. [Premise P1 — Varying-Domain S4 A1] □∀o (Obs(o) → ∃H_o [Situated(o, H_o) ∧ ¬GlobalView(o)]), blocking Barcan existential overreach.'
    );
    formalInferenceChain.push(
      '2. [Premise P2 — Structural Covariance A2] ∀o,o′ (Overlap(o, o′) → Compat(o, o′) ∧ Equiv_inv(o, o′)) without metaphysical frame privilege.'
    );
    formalInferenceChain.push(
      '3. [Premise P3 — Stratified Closure A3 ∧ A4] ∀o (TemporalObs(o) → ∃B_o Sep(B_o, Inside_o, Ext_o) ∧ ∃S_o,I_now [Asym(S_o) ∧ |I_now| > 0]).'
    );
    formalInferenceChain.push(
      '4. [Conclusion ⊢ SIT] The Constitutive-Absence Paradox resolves into faithful structure-preserving functors across Phenomenology, RQM, and Autopoiesis.'
    );
  }

  return {
    tradition,
    traditionLabel: profile.label,
    axiomsSatisfiedCount: count,
    consistentSynthesis: count === 4,
    paradoxStatus,
    missingAxioms,
    formalInferenceChain,
    traditionResolution: `${profile.exemplars}: ${profile.primaryInsight} Structural alignment: ${profile.structuralCorrelate}`
  };
}

export interface CrossTraditionBridge {
  from: TraditionKey;
  to: TraditionKey;
  sharedProblem: string;
  deductiveBridge: string;
  unifiedThesis: string;
}

export function evaluateCrossTraditionBridge(
  from: TraditionKey,
  to: TraditionKey
): CrossTraditionBridge {
  if (from === to) {
    const p = TRADITION_PROFILES[from];
    return {
      from,
      to,
      sharedProblem: 'Internal coherence of observer conditions within tradition',
      deductiveBridge: `A1 ∧ A2 ∧ A3 ∧ A4 ⊢ Faithful reconstruction over signature Σ_Obs for ${p.label}.`,
      unifiedThesis: p.primaryInsight
    };
  }
  const pair = [from, to].sort().join('::');
  switch (pair) {
    case 'deconstruction::phenomenology':
      return {
        from,
        to,
        sharedProblem: 'Can presence coincide with itself in an uncontaminated instantaneous “now”?',
        deductiveBridge: 'Husserlian Bernau Retention–Protention ∧ Derridean Différance ⊢ ¬ZeroWidthInstant([t, t]) (Thick Living Present |I_now| > 0).',
        unifiedThesis:
          'Phenomenology uncovers temporal synthesis via pre-objective Urstrom; deconstruction proves that synthesis presupposes non-instantaneous trace deferral rather than pure punctual self-coincidence.'
      };
    case 'phenomenology::quantum-foundations':
      return {
        from,
        to,
        sharedProblem: 'Why is the observer constitutive of phenomena yet excluded as an intra-worldly object?',
        deductiveBridge: 'Transcendental Apperception Syn(o, R) ∧ Movable Heisenberg–Von Neumann Cut B_o ⊢ Perspectival Immanence (A1 ∧ A3).',
        unifiedThesis:
          'Kant’s Paralogisms and von Neumann’s movable cut express one structural law: a situated perspective H_o cannot objectify the total cut condition generating Rep_o.'
      };
    case 'phenomenology::systems-enaction':
      return {
        from,
        to,
        sharedProblem: 'How does lived embodiment generate stable objectivity without a Cartesian inner theater?',
        deductiveBridge: 'Merleau-Ponty Chiasmic Écart ∧ Autopoietic Operational Closure Sep(B_o, Inside_o, Ext_o) ⊢ Embodied Boundary Coupling (A3 ∧ A4).',
        unifiedThesis:
          'Chiasmic reversibility and biological sense-making show that perspective emerges strictly through recursive boundary coupling between living body and cognitive niche.'
      };
    case 'deconstruction::quantum-foundations':
      return {
        from,
        to,
        sharedProblem: 'Do non-commuting measurements and deferred traces destroy objectivity or prove relational dependence?',
        deductiveBridge: 'Lacan Extimacy ($ / objet a) ∧ Barad–Bohr Agential Cut / Wigner’s Friend ⊢ ¬∃AbsoluteFact ∧ Compat(o, o′) (A1 ∧ A2 ∧ A3).',
        unifiedThesis:
          'Both traditions prove via non-commutativity and movable dispositifs that every finite cut produces an excluded remainder outside the local record.'
      };
    case 'deconstruction::systems-enaction':
      return {
        from,
        to,
        sharedProblem: 'Why is the act of observing structurally blind to its own founding distinction?',
        deductiveBridge: 'Derridean Trace & Autoimmunity ∧ Luhmann Unmarked Exterior Re-Entry ⊢ Second-Order Cut Shift (A3).',
        unifiedThesis:
          'Every distinction marks an inside by leaving B_o unmarked; only second-order re-entry perturbations or counterfactual sensorimotor exploration reveal that prior cut.'
      };
    default:
      // quantum-foundations :: systems-enaction
      return {
        from,
        to,
        sharedProblem: 'What rigorously separates a genuine observer from a passive inanimate detector?',
        deductiveBridge: 'First Observer Autonomy (IGUS) ∧ Autopoietic Markov-Blanket Closure ⊢ Dissipative Regulatory Cycle (A3 ∧ A4).',
        unifiedThesis:
          'Unlike passive transducers undergoing improper decoherence mixtures, First Observers actively export entropy across B_o to sustain asymmetric memory records over time.'
      };
  }
}
