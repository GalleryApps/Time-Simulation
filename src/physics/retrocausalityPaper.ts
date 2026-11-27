/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Formal Temporal Boundary Logic, Bidirectional Consistency Evaluators,
 * and 40-Shade Color System Bindings for Paper 16:
 * "The Universe Remembers Its Future: Retrocausality, Temporal Boundary Conditions,
 *  and the Architecture of Causal Reality"
 *
 * Zero DOM dependencies — deterministic logical & physical evaluators.
 */

import {
  PALETTE_40_SHADES,
  SHADE_BY_ID,
  type Palette40Family,
  type Shade40Token
} from './synthesePhilosophyPaper';

export { PALETTE_40_SHADES, SHADE_BY_ID, type Palette40Family, type Shade40Token };

export type TemporalRegimeKey =
  | 'classical-retarded'
  | 'absorber-symmetric'
  | 'two-state-quantum'
  | 'thermodynamic-block';

export interface TemporalBoundaryAxiomSet {
  timeSymmetricLaw: boolean;      // R1: □_phys(DynLaw(L) → ∃Θ_anti [Θ∘L∘Θ⁻¹ = L])
  twoBoundarySelection: boolean;  // R2: Adm(L, B_past, B_future) = Sol(L) ∩ B_past ∩ B_future ≠ ∅
  noBackwardSignalling: boolean;  // R3: Theorem 5.0 (derived): ∀ρ_p,∀{K_{a,μ}},∀β,∀{M_b(β)}: P(a|ρ_p,β) = ∑_{b,μ} Tr[M_b(β) U(t_f,t) K_{a,μ} ρ_p K†_{a,μ} U†(t_f,t)] = Tr[E_a ρ_p]
  thermodynamicGradient: boolean; // R4: Contingent cosmic trajectory S_B(t_past) ≪ S_B(t_future) with C_{αβγδ} ≈ 0
}

export interface TemporalConsistencyAudit {
  regime: TemporalRegimeKey;
  regimeLabel: string;
  conditionsSatisfiedCount: number;
  coherentBidirectionalModel: boolean;
  statusHeadline:
    | 'Coherent: Temporally Distributed Causal Determination'
    | 'Collapsed: Pure Forward Unfolding (Unexplained Arrow)'
    | 'Collapsed: Unconstrained Future Indeterminacy'
    | 'Paradoxical: Backward Signalling / Grandfather Antinomy'
    | 'Collapsed: Symmetric Amnesia (No Macroscopic Records)';
  formalInferenceChain: string[];
  regimeSummary: string;
  retardedWeight: number;
  advancedWeight: number;
  ablBridgeFactor: number;
  recordEntropyRatio: number;
}

const REGIME_PROFILES: Record<
  TemporalRegimeKey,
  {
    label: string;
    exemplars: string;
    summary: string;
    retardedWeight: number;
    advancedWeight: number;
    ablBridgeFactor: number;
    recordEntropyRatio: number;
  }
> = {
  'classical-retarded': {
    label: 'Classical Retarded Cauchy Evolution (Part 1–2)',
    exemplars: 'Newton, Laplace, Retarded Liénard–Wiechert Electrodynamics',
    summary:
      'Restricts boundary data strictly to an initial Cauchy surface Σ_past, treating advanced Green’s function branches as unphysical mathematical artifacts despite time-symmetric field equations.',
    retardedWeight: 1.0,
    advancedWeight: 0.0,
    ablBridgeFactor: 0.5,
    recordEntropyRatio: 0.88
  },
  'absorber-symmetric': {
    label: 'Time-Symmetric Absorber & Action Physics (Part 2–3)',
    exemplars: 'Wheeler–Feynman (1945), Fokker–Tetrode, Hamilton Variational Principle',
    summary:
      'Constructs physical trajectories and electromagnetic fields from half-retarded plus half-advanced combinations stabilized by complete distant absorber boundary conditions.',
    retardedWeight: 0.5,
    advancedWeight: 0.5,
    ablBridgeFactor: 0.72,
    recordEntropyRatio: 0.91
  },
  'two-state-quantum': {
    label: 'Two-State Vector & Pre/Post-Selection (Part 5–6)',
    exemplars: 'Aharonov–Bergmann–Lebowitz (1964), TSVF, Price–Wharton Retrocausal Models',
    summary:
      'Describes an intermediate quantum system using both a forward-evolving preparation ket |ψ⟩ and a backward-evolving post-selection bra ⟨φ|, yielding weak values without controllable backward signalling.',
    retardedWeight: 0.5,
    advancedWeight: 0.5,
    ablBridgeFactor: 0.94,
    recordEntropyRatio: 0.93
  },
  'thermodynamic-block': {
    label: 'Thermodynamic Asymmetry & Global Block Consistency (Part 7–8)',
    exemplars: 'Boltzmann, Albert Past Hypothesis, Schulman Two-Time Boundary Cosmology',
    summary:
      'Separates the low-entropy initial Past Hypothesis (governing records, memory, and explanatory asymmetry) from global dynamical admissibility across both temporal boundaries.',
    retardedWeight: 0.5,
    advancedWeight: 0.5,
    ablBridgeFactor: 0.89,
    recordEntropyRatio: 0.98
  }
};

export function evaluateTemporalConsistency(
  axioms: TemporalBoundaryAxiomSet,
  regime: TemporalRegimeKey
): TemporalConsistencyAudit {
  const profile = REGIME_PROFILES[regime];
  let satisfied = 0;
  if (axioms.timeSymmetricLaw) satisfied++;
  if (axioms.twoBoundarySelection) satisfied++;
  if (axioms.noBackwardSignalling) satisfied++;
  if (axioms.thermodynamicGradient) satisfied++;

  let statusHeadline: TemporalConsistencyAudit['statusHeadline'] =
    'Coherent: Temporally Distributed Causal Determination';
  const formalInferenceChain: string[] = [];

  if (!axioms.noBackwardSignalling) {
    statusHeadline = 'Paradoxical: Backward Signalling / Grandfather Antinomy';
    formalInferenceChain.push(
      '1. [Assumption ¬R3] Suppose an agent at t_f modulates a controllable channel C(t_f → t_p) with fidelity F > ½ onto macroscopically recorded facts at t_p < t_f.'
    );
    formalInferenceChain.push(
      '2. [Lemma 5.1 — DMC Error-to-Measure Bridge] While a noisy one-shot link (e.g., BSC with F = 0.75) admits local error absorption (Counterexample 5.1), any backward DMC with C_sig(W) = max_{P_M} I(M; R) > 0 (reducing to 1 − H_2(F) only for a BSC) confines admissible runs to H_adm^(N) ⊆ E_err^(N), bounding prior measure W_μ(H_adm^(N)) ≤ ϵ_N^(max) ≤ 2 exp(−N E(R)) → 0 while strict emptiness H_adm^(N) = ∅ holds iff ϵ_N^(max) = 0.'
    );
    formalInferenceChain.push(
      '3. [No-Go Theorem 5.1 — Theory-Independent Consistency Barrier] Coupled with forward memory M(t_p → t_f), shift feedback u = (g_N(r⃗) + 1) mod K leaves no fixed point once ϵ_N^(max) = 0 (H_adm^(N) = ∅ → ⊥) and forces exponential violation of agent independence P_U when ϵ_N^(max) > 0.'
    );
    formalInferenceChain.push(
      '4. [Theorem 5.0 — Intra-Quantum Scoped R3] Within standard linear QM + AQFT premises (A1–A5), Kraus completeness (∑_{a,μ} K†_{a,μ}K_{a,μ} = I), POVM completeness (∑_b M_b(β) = I), β-independent U(t_f,t), and [Ô(x), Ô(y)] = 0 ((x−y)² > 0) derive R3 non-circularly.'
    );
  } else if (!axioms.timeSymmetricLaw) {
    statusHeadline = 'Collapsed: Pure Forward Unfolding (Unexplained Arrow)';
    formalInferenceChain.push(
      '1. [Assumption ¬R1] Suppose microscopic dynamical laws L violate time-reversal / CPT symmetry across Mod_phys (no antiunitary Θ = U K with Θ∘L∘Θ⁻¹ = L).'
    );
    formalInferenceChain.push(
      '2. [Boundary Redundancy] Advanced solutions G_adv and future variational boundary terms vanish identically from the Euler–Lagrange equations.'
    );
    formalInferenceChain.push(
      '3. [Explanatory Deficit] Two-boundary quantum pre/post-selection symmetries and unitary scattering reciprocity σ(i→f) = σ(Θf→Θi) lose dynamical grounding.'
    );
    formalInferenceChain.push(
      '4. [Conclusion ⊢ R1] Under nomological necessity □_phys over Mod_phys, fundamental micro-dynamics remain Θ/CPT-symmetric, keeping both boundary directions mathematically live.'
    );
  } else if (!axioms.twoBoundarySelection) {
    statusHeadline = 'Collapsed: Unconstrained Future Indeterminacy';
    formalInferenceChain.push(
      '1. [Assumption ¬R2] Suppose only past boundary conditions B_past constrain an admissible history h, with B_future exerting zero Fredholm or measure-theoretic selection W_μ.'
    );
    formalInferenceChain.push(
      '2. [Boundary Collapse] In time-symmetric variational dynamics, leaving B_future unconstrained renders half of the symmetric boundary degrees of freedom indeterminate.'
    );
    formalInferenceChain.push(
      '3. [Quantum Post-Selection Deficit] Intermediate two-state vectors ⟨φ| |ψ⟩ and ABL conditional ratios collapse to single-boundary Born expectations, erasing post-selected weak-value structure.'
    );
    formalInferenceChain.push(
      '4. [Conclusion ⊢ R2] Admissible histories are jointly selected and weighted across both boundaries: H_adm = Sol(L) ∩ B_past ∩ B_future ≠ ∅.'
    );
  } else if (!axioms.thermodynamicGradient) {
    statusHeadline = 'Collapsed: Symmetric Amnesia (No Macroscopic Records)';
    formalInferenceChain.push(
      '1. [Assumption ¬R4] Suppose Boltzmann entropy remains stationary across both temporal boundaries (S_B(t_past) ≈ S_B(t_present) ≈ S_B(t_future)).'
    );
    formalInferenceChain.push(
      '2. [Epistemic Symmetry & Landauer Deficit] Without a contingent low-Weyl-curvature Past Hypothesis (C_{αβγδ} ≈ 0), no Landauer heat sink (ΔQ ≥ k_B T ln 2) can lock stable macroscopic traces exclusively to the past.'
    );
    formalInferenceChain.push(
      '3. [Boltzmann-Brain Disorientation] Equilibrium thermal fluctuations dominate record reliability, depriving observers of evidential access to antecedent explanations.'
    );
    formalInferenceChain.push(
      '4. [Conclusion ⊢ R4] A contingent thermodynamic gradient explains why finite agents remember and intervene forward inside globally time-symmetric histories.'
    );
  } else {
    formalInferenceChain.push(
      '1. [Premise R1 — Time-Symmetric Dynamics] Over Mod_phys, fundamental field and quantum laws admit both retarded (G_ret) and advanced (G_adv) kernels under antiunitary Θ = U K / CPT.'
    );
    formalInferenceChain.push(
      '2. [Premise R2 — Two-Boundary Selection] Physically admissible histories form the non-empty intersection H_adm = Sol(L) ∩ B_past ∩ B_future ≠ ∅ weighted by W_μ.'
    );
    formalInferenceChain.push(
      '3. [Theorem 5.0 & Lemma 5.1 — Scoped R3 & Consistency Bound] Within linear QM + AQFT (A1–A5), Kraus/POVM completeness and [Ô(x), Ô(y)] = 0 ((x−y)² > 0) derive forward marginal invariance; across general DMCs, H_adm^(N) ⊆ E_err^(N) collapses prior measure W_μ(H_adm^(N)) ≤ ϵ_N^(max) → 0.'
    );
    formalInferenceChain.push(
      '4. [Premise R4 — Contingent Past Hypothesis] Initial C_{αβγδ} ≈ 0 and Landauer heat ΔQ ≥ k_B T ln 2 ground memory, records, and forward causal intervention.'
    );
  }

  return {
    regime,
    regimeLabel: profile.label,
    conditionsSatisfiedCount: satisfied,
    coherentBidirectionalModel: satisfied === 4,
    statusHeadline,
    formalInferenceChain,
    regimeSummary: profile.summary,
    retardedWeight: axioms.twoBoundarySelection ? profile.retardedWeight : 1.0,
    advancedWeight: axioms.twoBoundarySelection && axioms.timeSymmetricLaw ? profile.advancedWeight : 0.0,
    ablBridgeFactor: satisfied === 4 ? profile.ablBridgeFactor : Math.max(0.25, profile.ablBridgeFactor - 0.32),
    recordEntropyRatio: axioms.thermodynamicGradient ? profile.recordEntropyRatio : 0.04
  };
}

export interface ConceptualBridgeAudit {
  fromRegime: TemporalRegimeKey;
  toRegime: TemporalRegimeKey;
  sharedStructuralQuestion: string;
  formalMapping: string;
  philosophicalSynthesis: string;
}

export function evaluateTemporalBridge(
  fromRegime: TemporalRegimeKey,
  toRegime: TemporalRegimeKey
): ConceptualBridgeAudit {
  if (fromRegime === toRegime) {
    return {
      fromRegime,
      toRegime,
      sharedStructuralQuestion: 'Internal consistency of a single temporal boundary formulation',
      formalMapping: 'Adm(L, B_past, B_future) ⊆ Sol(L) with ΔS_record ≥ 0',
      philosophicalSynthesis:
        'Even within one explanatory framework, distinguishing dynamical admissibility from epistemic record formation dissolves apparent retrocausal paradoxes.'
    };
  }

  const pair = [fromRegime, toRegime].sort().join('::');

  if (pair.includes('classical-retarded') && pair.includes('absorber-symmetric')) {
    return {
      fromRegime,
      toRegime,
      sharedStructuralQuestion: 'Why retarded radiation emerges from time-symmetric wave equations',
      formalMapping: '½(G_ret + G_adv) + ½(G_ret − G_adv)_absorber = G_ret',
      philosophicalSynthesis:
        'Retarded electromagnetic waves are not proof that physics forbids advanced solutions; they arise when symmetric Green’s functions interact with an asymmetric absorbing boundary.'
    };
  }

  if (pair.includes('absorber-symmetric') && pair.includes('two-state-quantum')) {
    return {
      fromRegime,
      toRegime,
      sharedStructuralQuestion: 'How classical two-boundary radiation maps onto quantum pre/post-selection',
      formalMapping: '⟨φ| A |ψ⟩ / ⟨φ|ψ⟩ ↔ (ψ_ret* · ψ_adv) over action extremum δS = 0',
      philosophicalSynthesis:
        'Both classical variational absorber theory and quantum Two-State Vector Formalism treat intermediate physical properties as jointly constrained by preparation and final boundary conditions.'
    };
  }

  if (pair.includes('two-state-quantum') && pair.includes('thermodynamic-block')) {
    return {
      fromRegime,
      toRegime,
      sharedStructuralQuestion: 'Why future quantum boundary constraints cannot be used to send messages into our past',
      formalMapping: 'P(a | ρ_p, β) = ∑_{b,μ} Tr[M_b(β) U(t_f,t) K_{a,μ} ρ_p K†_{a,μ} U†(t_f,t)] = Tr[E_a ρ_p] ⇒ ⊢ R3 (Linear QM + AQFT)',
      philosophicalSynthesis:
        'Within linear QM + AQFT (Theorem 5.0), Kraus/POVM completeness, U(t_f,t), and microcausality derive forward marginal invariance non-circularly (with broader non-QM DMCs blocked by Lemma 5.1 consistency), while Landauer dissipation (ΔQ ≥ k_B T ln 2) along R4 locks direct memories to the past.'
    };
  }

  return {
    fromRegime,
    toRegime,
    sharedStructuralQuestion: 'Reconciling experienced causal direction with globally time-symmetric physical laws',
    formalMapping: 'Causation_experienced(S_past ≪ S_future) ⊂ Constraint_global(B_past, B_future)',
    philosophicalSynthesis:
      'Temporal precedence belongs to the thermodynamic orientation of records and observers, whereas causal determination in fundamental models can reflect global two-boundary consistency.'
  };
}

/**
 * Deterministic Ablanov-Bergmann-Lebowitz (ABL) two-state probability helper
 * for a spin-1/2 system prepared in |+z⟩ and post-selected at angle θ on an
 * intermediate observable angled at α.
 */
export function computeAblTwoBoundaryProbability(prepAngleRad: number, postAngleRad: number, testAngleRad: number): {
  probPlus: number;
  probMinus: number;
  standardBornPlus: number;
} {
  const c1 = Math.cos((testAngleRad - prepAngleRad) / 2);
  const s1 = Math.sin((testAngleRad - prepAngleRad) / 2);
  const c2 = Math.cos((postAngleRad - testAngleRad) / 2);
  const s2 = Math.sin((postAngleRad - testAngleRad) / 2);

  const wPlus = Math.pow(c1 * c2, 2);
  const wMinus = Math.pow(s1 * s2, 2);
  const norm = wPlus + wMinus;

  return {
    probPlus: norm > 1e-12 ? wPlus / norm : 0.5,
    probMinus: norm > 1e-12 ? wMinus / norm : 0.5,
    standardBornPlus: Math.pow(c1, 2)
  };
}
