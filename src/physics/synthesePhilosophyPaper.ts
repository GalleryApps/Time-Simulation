/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Formal Philosophical Logic, Cross-Tradition Consistency Evaluators,
 * Two-Qubit No-Go Theorem 5.1 Verifier, and 40-Shade Color System for Paper 15 (Synthese Journal):
 * "Where or Who Is the Observer? The Observer in Phenomenology,
 *  Quantum Foundations, and Systems Theory"
 *
 * Zero DOM dependencies — deterministic logical proofs verified via node:test.
 */

export type Palette40Family =
  | 'Dark Blue Core'
  | 'Slate Blue'
  | 'Slate Gray Blue'
  | 'Deep Sea Blue-Green'
  | 'Muted Blue-Green'
  | 'Frost & Mist Slate';

export interface Shade40Token {
  id: number;
  family: Palette40Family;
  name: string;
  hex: string;
  rgb: [number, number, number];
  role: string;
}

/**
 * Complete 40-Shade Color System:
 * 40 calibrated shades spanning Dark Blue Core (8), Slate Blue (6), Slate Gray Blue (7),
 * Deep Sea Blue-Green (6), Muted Blue-Green (7), and Frost & Mist Slate (6).
 */
export const PALETTE_40_SHADES: Shade40Token[] = [
  // 1. Dark Blue Core (8 shades: IDs 1–8)
  { id: 1, family: 'Dark Blue Core', name: 'Abyssal Trench Navy', hex: '#040C18', rgb: [4, 12, 24], role: 'Deepest nocturnal ground & illustration shadow' },
  { id: 2, family: 'Dark Blue Core', name: 'Midnight Dark Blue', hex: '#061325', rgb: [6, 19, 37], role: 'Full-page A4 plate field backdrop' },
  { id: 3, family: 'Dark Blue Core', name: 'Observatory Dark Blue', hex: '#08182E', rgb: [8, 24, 46], role: 'Primary dark theme & figure ground' },
  { id: 4, family: 'Dark Blue Core', name: 'Nocturnal Prussian Blue', hex: '#0B203B', rgb: [11, 32, 59], role: 'Primary dark reading surface & card ground' },
  { id: 5, family: 'Dark Blue Core', name: 'Deep Indigo Blue', hex: '#0F294A', rgb: [15, 41, 74], role: 'Primary serif ink on mist slate & modal dark ground' },
  { id: 6, family: 'Dark Blue Core', name: 'Maritime Royal Blue', hex: '#14335A', rgb: [20, 51, 90], role: 'Chapter rule anchor & interactive control active surface' },
  { id: 7, family: 'Dark Blue Core', name: 'Solvay Cobalt Navy', hex: '#1B3F6C', rgb: [27, 63, 108], role: 'Secondary header accent & active structural border' },
  { id: 8, family: 'Dark Blue Core', name: 'Clear Sapphire Blue', hex: '#244D7E', rgb: [36, 77, 126], role: 'Elevated link accent & topological cone highlight' },

  // 2. Slate Blue (6 shades: IDs 9–14)
  { id: 9, family: 'Slate Blue', name: 'Basalt Slate Blue', hex: '#16263A', rgb: [22, 38, 58], role: 'Nested dark frame container & theorem dark wash' },
  { id: 10, family: 'Slate Blue', name: 'Storm Slate Blue', hex: '#1D3048', rgb: [29, 48, 72], role: 'Dark card border & table header in dark mode' },
  { id: 11, family: 'Slate Blue', name: 'Harbor Slate Blue', hex: '#263B54', rgb: [38, 59, 84], role: 'Secondary diagram fill & structural node surface' },
  { id: 12, family: 'Slate Blue', name: 'Cadet Slate Blue', hex: '#304863', rgb: [48, 72, 99], role: 'Diagram lattice beam & worked-box edge' },
  { id: 13, family: 'Slate Blue', name: 'Nordic Slate Blue', hex: '#3B5672', rgb: [59, 86, 114], role: 'Muted coordinate hairline & marginalia rule' },
  { id: 14, family: 'Slate Blue', name: 'Boreal Slate Blue', hex: '#486582', rgb: [72, 101, 130], role: 'Highlight contour on slate engraving plates' },

  // 3. Slate Gray Blue (7 shades: IDs 15–21)
  { id: 15, family: 'Slate Gray Blue', name: 'Charcoal Slate Gray Blue', hex: '#2A3B4C', rgb: [42, 59, 76], role: 'Subtle dark divider & anatomical shadow' },
  { id: 16, family: 'Slate Gray Blue', name: 'Iron Slate Gray Blue', hex: '#35485B', rgb: [53, 72, 91], role: 'Secondary serif metadata on mist ground' },
  { id: 17, family: 'Slate Gray Blue', name: 'Pewter Slate Gray Blue', hex: '#42566A', rgb: [66, 86, 106], role: 'Cross-reference metadata & epigraph ink' },
  { id: 18, family: 'Slate Gray Blue', name: 'Glacier Slate Gray Blue', hex: '#51677B', rgb: [81, 103, 123], role: 'Graph grid line & light-surface muted caption' },
  { id: 19, family: 'Slate Gray Blue', name: 'Overcast Slate Gray Blue', hex: '#62788C', rgb: [98, 120, 140], role: 'Dark-mode secondary caption & rule accent' },
  { id: 20, family: 'Slate Gray Blue', name: 'Silvered Slate Gray Blue', hex: '#758B9E', rgb: [117, 139, 158], role: 'Axis tick label & dashed lattice stroke' },
  { id: 21, family: 'Slate Gray Blue', name: 'Mist Slate Gray Blue', hex: '#8B9FAF', rgb: [139, 159, 175], role: 'Soft highlight stroke & inactive tab text' },

  // 4. Deep Sea Blue-Green (6 shades: IDs 22–27)
  { id: 22, family: 'Deep Sea Blue-Green', name: 'Trench Blue-Green', hex: '#0C292C', rgb: [12, 41, 44], role: 'Deepest blue-green collar recess' },
  { id: 23, family: 'Deep Sea Blue-Green', name: 'Abyssal Verdigris Blue-Green', hex: '#12373A', rgb: [18, 55, 58], role: 'Dark mode proof container tint' },
  { id: 24, family: 'Deep Sea Blue-Green', name: 'Petrol Blue-Green', hex: '#184649', rgb: [24, 70, 73], role: 'Primary structural functor ink & dark rule' },
  { id: 25, family: 'Deep Sea Blue-Green', name: 'Fjord Blue-Green', hex: '#1F5659', rgb: [31, 86, 89], role: 'Table header fill & logical schema badge' },
  { id: 26, family: 'Deep Sea Blue-Green', name: 'Pelagic Blue-Green', hex: '#28676A', rgb: [40, 103, 106], role: 'High-contrast blue-green display ink on mist slate' },
  { id: 27, family: 'Deep Sea Blue-Green', name: 'Deep Lagoon Blue-Green', hex: '#33797B', rgb: [51, 121, 123], role: 'Theorem deduction indicator & interactive control' },

  // 5. Muted Blue-Green (7 shades: IDs 28–34)
  { id: 28, family: 'Muted Blue-Green', name: 'Spruce Muted Blue-Green', hex: '#224E4E', rgb: [34, 78, 78], role: 'Operational boundary cut accent' },
  { id: 29, family: 'Muted Blue-Green', name: 'Lichen Muted Blue-Green', hex: '#2D5E5D', rgb: [45, 94, 93], role: 'Autopoietic membrane ring & citation ink' },
  { id: 30, family: 'Muted Blue-Green', name: 'Celadon Slate Blue-Green', hex: '#39706E', rgb: [57, 112, 110], role: 'Doplicher-Longo split collar shading' },
  { id: 31, family: 'Muted Blue-Green', name: 'Sea-Mist Muted Blue-Green', hex: '#48827E', rgb: [72, 130, 126], role: 'Primary convergence arc & waveform accent' },
  { id: 32, family: 'Muted Blue-Green', name: 'Sage Teal Blue-Green', hex: '#5A948F', rgb: [90, 148, 143], role: 'Dark-mode primary proof highlight' },
  { id: 33, family: 'Muted Blue-Green', name: 'Muted Aqua Blue-Green', hex: '#6FA6A0', rgb: [111, 166, 160], role: 'Luminous blue-green diagram stroke on dark blue' },
  { id: 34, family: 'Muted Blue-Green', name: 'Pale Seafoam Blue-Green', hex: '#87B9B2', rgb: [135, 185, 178], role: 'Soft vector beam highlight on dark blue' },

  // 6. Frost & Mist Slate (6 shades: IDs 35–40)
  { id: 35, family: 'Frost & Mist Slate', name: 'Frost Horizon Slate', hex: '#A6BCC8', rgb: [166, 188, 200], role: 'Muted light border & slate rule divider' },
  { id: 36, family: 'Frost & Mist Slate', name: 'Pale Glaze Slate', hex: '#BFD0DA', rgb: [191, 208, 218], role: 'Editorial hairline on light reading sheets' },
  { id: 37, family: 'Frost & Mist Slate', name: 'Cool Cloud Mist', hex: '#D5E2EA', rgb: [213, 226, 234], role: 'Alternating table stripe & subtle theorem tint' },
  { id: 38, family: 'Frost & Mist Slate', name: 'Ice Engraving Highlight', hex: '#E5EFF5', rgb: [229, 239, 245], role: 'Crisp portrait highlight & primary dark-mode ink' },
  { id: 39, family: 'Frost & Mist Slate', name: 'Archival Ice Folio', hex: '#F0F6FA', rgb: [240, 246, 250], role: 'Sidebar & callout surface wash' },
  { id: 40, family: 'Frost & Mist Slate', name: 'Mineral White Sheet', hex: '#F7FAFC', rgb: [247, 250, 252], role: 'Primary high-contrast broadsheet reading surface' }
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

export interface ReductioDiagnostic {
  axiom: 'A1' | 'A2' | 'A3' | 'A4';
  paradoxName: string;
  reductioFormula: string;
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
  triggeredReductios: ReductioDiagnostic[];
  violatesStratification: boolean;
  stratificationNote: string;
  matchingCountermodel: string;
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
  const triggeredReductios: ReductioDiagnostic[] = [];

  if (!axioms.perspectivalImmanence) {
    missingAxioms.push('A1 (Perspectival Immanence)');
    triggeredReductios.push({
      axiom: 'A1',
      paradoxName: 'Vicious Archimedean Regress',
      reductioFormula: '∃o_global ∀x Rep(o_global, x) ⊢ o₀ ≺ o₁ ≺ o₂ … → ⊥'
    });
  }
  if (!axioms.relationalParity) {
    missingAxioms.push('A2 (Egalitarian Frame Parity)');
    triggeredReductios.push({
      axiom: 'A2',
      paradoxName: 'Incoherent Solipsistic Privilege',
      reductioFormula: 'A1 ∧ ¬A2 ⊢ Objective(p) ∧ ¬Objective(p) → ⊥'
    });
  }
  if (!axioms.operationalBoundary) {
    missingAxioms.push('A3 (Operational Demarcation Cut)');
    triggeredReductios.push({
      axiom: 'A3',
      paradoxName: 'Unbounded Continuum Indistinction',
      reductioFormula: '¬Split(B_o) ⊢ Inside_o = Continuum(X) ∧ Collapse(Σ_o) → ⊥'
    });
  }
  if (!axioms.asymmetricSelfAffection) {
    missingAxioms.push('A4 (Asymmetric Self-Relation)');
    triggeredReductios.push({
      axiom: 'A4',
      paradoxName: 'Zero-Width Punctual Temporal Freeze',
      reductioFormula: 'I_now = [t, t] ∧ T_c(S_o) ≡ T_{-c}(S_o) ⊢ ¬DiscernChange → ⊥'
    });
  }

  const count = 4 - missingAxioms.length;
  const violatesStratification = axioms.asymmetricSelfAffection && !axioms.operationalBoundary;
  const stratificationNote = violatesStratification
    ? 'Stratified Dependence Alert (A4 → A3, Theorem 7.1): Persistent asymmetric self-maintenance (A4) cannot stabilize without an operational boundary cut (A3); see countermodel M_~A3.'
    : axioms.operationalBoundary && !axioms.asymmetricSelfAffection
      ? 'Valid Stratified Asymmetry (A3 ↛ A4): Passive static boundary cuts (M_~A4 / RBW) satisfy A1–A3 while lacking asymmetric temporal ipseity.'
      : 'Stratified hierarchy {A1, A2, A3} independent and A4 → A3 respected.';

  let matchingCountermodel = 'Canonical Synthesis (A1 ∧ A2 ∧ A3 ∧ A4)';
  if (!axioms.perspectivalImmanence && axioms.relationalParity && axioms.operationalBoundary && axioms.asymmetricSelfAffection) {
    matchingCountermodel = 'M_~A1 (Archimedean Sensor · Table 7.2)';
  } else if (axioms.perspectivalImmanence && !axioms.relationalParity && axioms.operationalBoundary && axioms.asymmetricSelfAffection) {
    matchingCountermodel = 'M_~A2 (Leibnizian Solipsistic Bubble · Table 7.2)';
  } else if (axioms.perspectivalImmanence && axioms.relationalParity && !axioms.operationalBoundary && !axioms.asymmetricSelfAffection) {
    matchingCountermodel = 'M_~A3 (Cut-Free Continuum Field · Table 7.2)';
  } else if (axioms.perspectivalImmanence && axioms.relationalParity && !axioms.operationalBoundary && axioms.asymmetricSelfAffection) {
    matchingCountermodel = 'Unsatisfiable Stratification (A4 → A3 forces M_~A3 with A4 = F · Table 7.2)';
  } else if (axioms.perspectivalImmanence && axioms.relationalParity && axioms.operationalBoundary && !axioms.asymmetricSelfAffection) {
    matchingCountermodel = 'M_~A4 (Passive Static Block Cut · Table 7.2)';
  } else if (count < 4) {
    matchingCountermodel = `Compound Failure Profile (${missingAxioms.map((m) => m.slice(0, 2)).join(' + ')} suspended)`;
  }

  let paradoxStatus: PhilosophicalConsistencyAudit['paradoxStatus'] =
    'Resolved: Situated Perspective Without Global Privilege';
  const formalInferenceChain: string[] = [];

  if (!axioms.perspectivalImmanence) {
    paradoxStatus = 'Reductio: Archimedean Regress (Objectification Antinomy)';
    formalInferenceChain.push(
      '1. [Assumption for Reductio ¬A1] Over varying-domain S4 frame ⟨W, R, D(w)⟩ (blocking Barcan & Converse Barcan universalism), suppose ∃o_global ∀x Rep(o_global, x) without a situated horizon H_o.'
    );
    formalInferenceChain.push(
      '2. [Transcendental Rule — Kant B131 / Von Neumann / Breuer] ∀o [Rep(o, W) → ∃o′ (Prior(o′, o) ∧ ¬ContainsGlobal(o, o′))].'
    );
    formalInferenceChain.push(
      '3. [Vicious Regress & Diagonal Contradiction] Iterating Universal Instantiation forces an irreflexive ω-ascent o₀ ≺ o₁ ≺ o₂ ≺ … with no base element; global self-inclusion yields Rep(o_global, o_global) ∧ ¬Rep(o_global, o_global) → ⊥.'
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
      '3. [Coherence Collapse] Under ¬A2, cross-frame equivalence rules vanish; o* cannot distinguish objective p from private stipulation (Objective(p) ∧ ¬Objective(p) → ⊥).'
    );
    formalInferenceChain.push(
      '4. [Conclusion ⊢ A2] By Modus Tollens and Reductio, equivalence-relation parity Compat(o, o′) ∧ Equiv_inv(o, o′) is mandatory.'
    );
  } else if (!axioms.operationalBoundary) {
    paradoxStatus = 'Reductio: Unbounded Indistinction (Infinite Boundary Regress)';
    formalInferenceChain.push(
      '1. [Assumption for Reductio A1 ∧ A2 ∧ ¬A3] Suppose ∃o,x [Discern(o, x) ∧ ¬∃B_o Sep(B_o, Inside_o, Ext_o)] with zero Doplicher–Longo separation collar.'
    );
    formalInferenceChain.push(
      '2. [Rule — Topological Anti-Continuum Lemma / Doplicher–Longo Split Property] ¬∃B_o Sep(B_o, Inside_o, Ext_o) → Inside_o = Continuum(W) → ∀r∈Σ_o [Blur(r, ¬r) ∧ ∀x,y Indistinguishable_o(x, y)].'
    );
    formalInferenceChain.push(
      '3. [Sigma-Algebra Collapse] Discrete memory records Σ_o diffuse globally into Type III₁ ambient noise, yielding Discern(o, x) ∧ ¬Discern(o, x) → ⊥.'
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
      '2. [Rule — Allen Interval Logic & Irreversible Entropy Functional S_o ≥ 0] ChangeObs(o, A→B) → ∃S_o,I_now [NonNeg(S_o) ∧ Asym(S_o) ∧ Dur(I_now) > 0 ∧ Overlaps(Ret_o, I_now) ∧ Meets(I_now, Prot_o)].'
    );
    formalInferenceChain.push(
      '3. [Degenerate Slice Contradiction] On [t, t], Overlaps(Ret_o, [t, t]) = ∅ and symmetric shift erases mineness polarity, yielding ChangeObs(o) ∧ ¬ChangeObs(o) → ⊥.'
    );
    formalInferenceChain.push(
      '4. [Conclusion ⊢ A4] Asymmetric self-relation S_o ≥ 0 (strictly antisymmetric update order) generating a thick living present (|I_now| > 0) is deductively indispensable.'
    );
  } else {
    formalInferenceChain.push(
      '1. [Premise P1 — Varying-Domain S4 A1] □∀o (Obs(o) → ∃H_o [Situated(o, H_o) ∧ ¬GlobalView(o)]), blocking Barcan & Converse Barcan overreach.'
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

  if (triggeredReductios.length > 1) {
    formalInferenceChain.push(
      `5. [Compound Non-Satisfaction] All active reductios triggered simultaneously: ${triggeredReductios.map((r) => `${r.axiom} (${r.paradoxName})`).join('; ')}.`
    );
  }
  if (violatesStratification) {
    formalInferenceChain.push(
      '6. [Stratification Violation A4 → A3] Affirming autonomous asymmetric ipseity (A4) while deleting the boundary cut (A3) fails Theorem 7.1 stratification (countermodel M_~A3).'
    );
  }

  return {
    tradition,
    traditionLabel: profile.label,
    axiomsSatisfiedCount: count,
    consistentSynthesis: count === 4,
    paradoxStatus,
    missingAxioms,
    triggeredReductios,
    violatesStratification,
    stratificationNote,
    matchingCountermodel,
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

export interface AllenThickPresentEvaluation {
  retentionSpanMs: number;
  impressionNowMs: number;
  protentionSpanMs: number;
  overlapMs: number;
  totalHorizonMs: number;
  overlapsHolds: boolean;
  meetsHolds: boolean;
  isZeroWidthDegenerate: boolean;
  isCoherentTemporalObservation: boolean;
  bandClassification:
    | 'Degenerate Instant [t, t] (Temporal Freeze)'
    | 'Sub-Threshold Micro-Window (< 80 ms)'
    | 'Varela–Pöppel Neurophenomenological Window (80–3000 ms)'
    | 'Extended Narrative–Retentional Arc (> 3000 ms)';
  intervalNotation: string;
  diagnosis: string;
}

export function evaluateAllenThickPresent(
  retentionOverlapMs: number,
  impressionNowMs: number,
  protentionSpanMs: number
): AllenThickPresentEvaluation {
  const safeNow = Math.max(0, Number.isFinite(impressionNowMs) ? impressionNowMs : 0);
  const safeRet = Math.max(0, Number.isFinite(retentionOverlapMs) ? retentionOverlapMs : 0);
  const safeProt = Math.max(0, Number.isFinite(protentionSpanMs) ? protentionSpanMs : 0);

  const isZeroWidthDegenerate = safeNow <= 0;
  const overlapMs = isZeroWidthDegenerate ? 0 : Math.min(safeRet, safeNow);
  const overlapsHolds = !isZeroWidthDegenerate && overlapMs > 0;
  const meetsHolds = !isZeroWidthDegenerate && safeProt > 0;
  const isCoherentTemporalObservation = overlapsHolds && meetsHolds;
  const totalHorizonMs = safeNow + Math.max(0, safeRet - overlapMs) + safeProt;

  let bandClassification: AllenThickPresentEvaluation['bandClassification'] =
    'Varela–Pöppel Neurophenomenological Window (80–3000 ms)';
  let diagnosis =
    'Valid thick living present: non-empty retentional overlap Overlaps(I_ret, I_now) and strict future junction Meets(I_now, I_prot) sustain coherent change judgment within empirical neural integration bounds (~100–3000 ms).';

  if (isZeroWidthDegenerate) {
    bandClassification = 'Degenerate Instant [t, t] (Temporal Freeze)';
    diagnosis =
      'Reductio triggered: setting |I_now| = 0 collapses interval boundaries into [0, 0], erasing Overlaps(I_ret, I_now) and breaking temporal succession judgment (A4b).';
  } else if (!overlapsHolds || !meetsHolds) {
    bandClassification = safeNow < 80 ? 'Sub-Threshold Micro-Window (< 80 ms)' : 'Varela–Pöppel Neurophenomenological Window (80–3000 ms)';
    diagnosis =
      'Incomplete temporal synthesis: missing either positive retention overlap (Overlaps = false) or active protention junction (Meets = false) degrades unified change perception.';
  } else if (totalHorizonMs < 80) {
    bandClassification = 'Sub-Threshold Micro-Window (< 80 ms)';
    diagnosis =
      'Mathematically thick (|I_now| > 0) for fast physical switches, yet below the biological human Pöppel–Varela perceptual fusion floor (~80–100 ms).';
  } else if (totalHorizonMs > 3000) {
    bandClassification = 'Extended Narrative–Retentional Arc (> 3000 ms)';
    diagnosis =
      'Exceeds direct primary-impression window (~3 s); transitions from immediate Husserlian Urimpression into secondary episodic memory and narrative compression (§33).';
  }

  const retStart = -(Math.max(120, safeRet));
  const intervalNotation = `I_ret=[${retStart.toFixed(0)}, ${overlapMs.toFixed(0)}] ms | I_now=[0, ${safeNow.toFixed(0)}] ms | I_prot=[${safeNow.toFixed(0)}, ${(safeNow + safeProt).toFixed(0)}] ms`;

  return {
    retentionSpanMs: safeRet,
    impressionNowMs: safeNow,
    protentionSpanMs: safeProt,
    overlapMs,
    totalHorizonMs,
    overlapsHolds,
    meetsHolds,
    isZeroWidthDegenerate,
    isCoherentTemporalObservation,
    bandClassification,
    intervalNotation,
    diagnosis
  };
}

export interface NoGoTheorem51Evaluation {
  inputFidelity: number;
  branchVisibility: number;
  statisticalLowerBound: number; // 2F - 1 via Fidelity Lemma (statistical clause)
  deterministicSatisfied: boolean; // r = m branch-relative exactness (F = 1, visibility = 0 across cut)
  statisticalClauseTriggered: boolean; // F > 1/2 triggers classical signalling tension
  noSignallingHoldsOnMarginals: boolean;
  doplicherLongoSplitRequired: boolean;
  twoQubitTraceDistance: number;
  verdict: string;
}

/**
 * Evaluates No-Go Theorem 5.1 (Chapter 5):
 * Separates the Statistical Fidelity Lemma clause (F > 1/2 across incompatible Wigner-RQM cuts)
 * from the Deterministic condition (r = m branch-relative sharp pointer record, F = 1),
 * checking the converse fallacy (marginal agreement does not imply F > 1/2 coherence signalling).
 */
export function evaluateNoGoTheorem51(
  channelFidelity: number,
  coherenceVisibility = 0.0
): NoGoTheorem51Evaluation {
  const f = Math.max(0, Math.min(1, Number.isFinite(channelFidelity) ? channelFidelity : 0.5));
  const vis = Math.max(0, Math.min(1, Number.isFinite(coherenceVisibility) ? coherenceVisibility : 0));
  const statisticalLowerBound = Math.max(0, 2 * f - 1);
  const deterministicSatisfied = Math.abs(f - 1) < 1e-9;
  const statisticalClauseTriggered = f > 0.5;
  const twoQubitTraceDistance = Math.sqrt(Math.max(0, 1 - vis * vis));
  const doplicherLongoSplitRequired = true;
  const noSignallingHoldsOnMarginals = true;

  const verdict = deterministicSatisfied
    ? 'Deterministic Clause (r = m exact branch record): Universal cross-cut exportation without A2/A3 indexing violates covariant complementarity (F = 1, P(r=m) = 1.00).'
    : statisticalClauseTriggered
      ? `Statistical Clause (F = ${f.toFixed(3)} > 1/2): Fidelity Lemma bounds P(r = m) ≥ ${(statisticalLowerBound).toFixed(3)}, forcing Doplicher–Longo split isolation B_o or relativistic signalling clash.`
      : `Null Signalling Regime (F = ${f.toFixed(3)} ≤ 1/2): Marginal outcomes obey no-signalling covariance without superluminal cross-cut tension.`;

  return {
    inputFidelity: f,
    branchVisibility: vis,
    statisticalLowerBound,
    deterministicSatisfied,
    statisticalClauseTriggered,
    noSignallingHoldsOnMarginals,
    doplicherLongoSplitRequired,
    twoQubitTraceDistance,
    verdict
  };
}

export type SitSourceCategory = 'Phen' | 'Quant' | 'Sys';

export interface SitFunctorAudit {
  sourceCategory: SitSourceCategory;
  functorName: string;
  targetSignature: 'Σ_Obs';
  objectsDefinition: string;
  morphismsDefinition: string;
  axiomMappings: Array<{ axiom: 'A1' | 'A2' | 'A3' | 'A4'; imageText: string }>;
  functorLaws: string[];
  anomalousBoundaryNotes: string;
}

export function evaluateSitFunctor(source: SitSourceCategory): SitFunctorAudit {
  if (source === 'Phen') {
    return {
      sourceCategory: 'Phen',
      functorName: 'F_Phen : Phen → Σ_Obs',
      targetSignature: 'Σ_Obs',
      objectsDefinition: 'Ob(Phen) = ⟨Monad_i, Nullpunkt_i, Horizon_i, BernauFlow_i⟩',
      morphismsDefinition: 'Hom(Phen) = Einfühlung / Paarung concordance transitions preserving Einstimmigkeit',
      axiomMappings: [
        { axiom: 'A1', imageText: 'Nullpunkt_i & Abschattungen ↦ Situated Horizon H_o' },
        { axiom: 'A2', imageText: 'Paarung & Einstimmigkeit ↦ Covariant Equivalence Equiv_inv(o, o′)' },
        { axiom: 'A3', imageText: 'Embodied perceptual limit / écart ↦ Separation Cut B_o' },
        { axiom: 'A4', imageText: 'Bernau Urstrom & Henry ipseity ↦ Irreversible S_o ≥ 0 & |I_now| > 0' }
      ],
      functorLaws: [
        'Identity: F_Phen(id_Monad) = id_{H_o} (self-concordant trivial perspective invariance)',
        'Composition: F_Phen(g ∘ f) = F_Phen(g) ∘ F_Phen(f) (transitivity of intersubjective concordance, Schema 2.3)'
      ],
      anomalousBoundaryNotes:
        'Ethical Face overflow (Levinas §9, ¬A2 ∧ ¬A3) and Saturated Givenness (Marion §15, ¬A3) sit explicitly outside Hom(Phen) ordinary epistemic invariance.'
    };
  }
  if (source === 'Quant') {
    return {
      sourceCategory: 'Quant',
      functorName: 'F_RQM : Quant → Σ_Obs',
      targetSignature: 'Σ_Obs',
      objectsDefinition: 'Ob(Quant) = ⟨System_S, HilbertFactor_H_S, Cut_B, MemoryRegister_M_S⟩',
      morphismsDefinition: 'Hom(Quant) = Adlam–Rovelli Cross-Perspective unitary/CPTP consistency links',
      axiomMappings: [
        { axiom: 'A1', imageText: 'Relative quantum state |ψ⟩_{S|O} ↦ Situated Horizon H_o' },
        { axiom: 'A2', imageText: 'Cross-Perspective Links & Local Friendliness parity ↦ Equiv_inv(o, o′)' },
        { axiom: 'A3', imageText: 'Heisenberg–von Neumann cut & Doplicher–Longo Split Factor N ↦ B_o' },
        { axiom: 'A4', imageText: 'FOH negentropy cycle & irreversible pointer recording ↦ S_o ≥ 0 & |I_now| > 0' }
      ],
      functorLaws: [
        'Identity: F_RQM(U = I) = id_{H_o} (unitary stability of unperturbed pointer subspace)',
        'Composition: F_RQM(Λ₂ ∘ Λ₁) = F_RQM(Λ₂) ∘ F_RQM(Λ₁) (cut shift invariance along von Neumann chain, Schema 4.1)'
      ],
      anomalousBoundaryNotes:
        'Adynamical 4D Relational Blockworld (§26, ¬A4) and preferred-foliation Cramer TI (§25, partial A2) mark explicit boundary friction inside Hom(Quant).'
    };
  }
  return {
    sourceCategory: 'Sys',
    functorName: 'F_Bio : Sys → Σ_Obs',
    targetSignature: 'Σ_Obs',
    objectsDefinition: 'Ob(Sys) = ⟨AutopoieticUnit_u, Membrane_B_u, Niche_u, RegulatoryCycle_u⟩',
    morphismsDefinition: 'Hom(Sys) = Structure-preserving historical structural couplings preserving closure',
    axiomMappings: [
      { axiom: 'A1', imageText: 'Endogenous cognitive domain (vs. external environment) ↦ H_o' },
      { axiom: 'A2', imageText: 'Structural coupling & Luhmann cross-system parity ↦ Equiv_inv(o, o′)' },
      { axiom: 'A3', imageText: 'Markov blanket, Spencer-Brown mark, transparent PSM ↦ B_o' },
      { axiom: 'A4', imageText: 'Continuous negentropic self-production & reafference cycle ↦ S_o ≥ 0 & |I_now| > 0' }
    ],
    functorLaws: [
      'Identity: F_Bio(homeostasis) = id_{H_o} (eigenbehavior fixed point O(O(x*)) = x*)',
      'Composition: F_Bio(couple₂ ∘ couple₁) = F_Bio(couple₂) ∘ F_Bio(couple₁) (multi-scale coupling transitivity)'
    ],
    anomalousBoundaryNotes:
      'Purely functional communication coding (Luhmann §29, partial A4) and narrative hindsight (Dennett §33, partial A4) require A4a pre-reflective anchoring.'
  };
}

export interface MatrixSummaryStats {
  totalPositions: number;
  fullConvergenceCount: number;
  axiomCounts: Record<'a1' | 'a2' | 'a3' | 'a4', { full: number; partial: number; anomaly: number }>;
}

export function computeMatrixSummary(
  rows: ReadonlyArray<{ a1: '✓' | '✗' | 'partial'; a2: '✓' | '✗' | 'partial'; a3: '✓' | '✗' | 'partial'; a4: '✓' | '✗' | 'partial' }>
): MatrixSummaryStats {
  const tally = () => ({ full: 0, partial: 0, anomaly: 0 });
  const axiomCounts = { a1: tally(), a2: tally(), a3: tally(), a4: tally() };
  let fullConvergenceCount = 0;

  for (const r of rows) {
    if (r.a1 === '✓' && r.a2 === '✓' && r.a3 === '✓' && r.a4 === '✓') {
      fullConvergenceCount++;
    }
    for (const k of ['a1', 'a2', 'a3', 'a4'] as const) {
      if (r[k] === '✓') axiomCounts[k].full++;
      else if (r[k] === 'partial') axiomCounts[k].partial++;
      else axiomCounts[k].anomaly++;
    }
  }

  return {
    totalPositions: rows.length,
    fullConvergenceCount,
    axiomCounts
  };
}
