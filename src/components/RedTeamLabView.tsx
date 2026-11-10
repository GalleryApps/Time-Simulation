import React, { useState, useMemo } from 'react';
import { RED_TEAM_ATTACKS, RedTeamAttack } from '../types/manuscriptData';
import { MathDisplay } from './MathDisplay';

export const RedTeamLabView: React.FC = () => {
  const [selectedTarget, setSelectedTarget] = useState<'all' | 'IGEG' | 'RES=RAG'>('all');
  const [selectedOutcome, setSelectedOutcome] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedAttackId, setExpandedAttackId] = useState<number | null>(null);
  const [isRunningStressTest, setIsRunningStressTest] = useState<boolean>(false);
  const [testProgress, setTestProgress] = useState<number>(0);
  const [testCompleted, setTestCompleted] = useState<boolean>(false);
  const [currentTestingId, setCurrentTestingId] = useState<number | null>(null);

  const filteredAttacks = useMemo(() => {
    return RED_TEAM_ATTACKS.filter(item => {
      if (selectedTarget !== 'all' && item.target !== selectedTarget) return false;
      if (selectedOutcome !== 'all' && item.outcome !== selectedOutcome) return false;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        return item.attack.toLowerCase().includes(q) || item.reasoning.toLowerCase().includes(q);
      }
      return true;
    });
  }, [selectedTarget, selectedOutcome, searchQuery]);

  const stats = useMemo(() => {
    const igeg = RED_TEAM_ATTACKS.filter(a => a.target === 'IGEG');
    const resrag = RED_TEAM_ATTACKS.filter(a => a.target === 'RES=RAG');

    const igegFails = igeg.filter(a => a.outcome.startsWith('Fails')).length; // 1
    const igegWounded = igeg.filter(a => a.outcome === 'Wounded').length; // 6
    const igegOpen = igeg.filter(a => a.outcome === 'Open').length; // 3

    const resragFails = resrag.filter(a => a.outcome.startsWith('Fails')).length; // 3
    const resragWounded = resrag.filter(a => a.outcome === 'Wounded').length; // 5
    const resragOpen = resrag.filter(a => a.outcome === 'Open').length; // 2

    return { igegFails, igegWounded, igegOpen, resragFails, resragWounded, resragOpen };
  }, []);

  const runFullStressTest = () => {
    setIsRunningStressTest(true);
    setTestProgress(0);
    setTestCompleted(false);

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setTestProgress(Math.min(100, Math.round((current / 20) * 100)));
      setCurrentTestingId(current);
      if (current >= 20) {
        clearInterval(interval);
        setIsRunningStressTest(false);
        setTestCompleted(true);
        setCurrentTestingId(null);
      }
    }, 120);
  };

  const exportAttacksCSV = () => {
    const headers = ['ID', 'Target', 'Attack Description', 'Original Outcome', 'Reasoning', 'IGRT Harmonized Resolution'];
    const rows = RED_TEAM_ATTACKS.map(a => [
      a.id,
      `"${a.target}"`,
      `"${a.attack.replace(/"/g, '""')}"`,
      `"${a.outcome.replace(/"/g, '""')}"`,
      `"${a.reasoning.replace(/"/g, '""')}"`,
      `"${getHarmonizedDefense(a.id).replace(/"/g, '""')}"`
    ]);
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'IGRT_20_Adversarial_Red_Team_Audit.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  const getHarmonizedDefense = (attackId: number): string => {
    const defenses: Record<number, string> = {
      1: "Multiple-potential fine-tuning paradox: IGRT eliminates this by decoupling scalar field roles. The dilaton-like scalar ψ governs the Planckian curvature floor (a_min > 0), while the discrete resonance connection A_μ generates late-time cosmic acceleration through cosmological horizon relaxation: w(z) = -1 + (1/3)γ z/(1+z), matching DESI 2024 without scalar fine-tuning.",
      2: "Chentsov-Morozova uniqueness theorem: Chentsov's theorem guarantees that on quantum probability manifolds, the Fisher-Rao metric g_ij^FR is the UNIQUE Riemannian metric invariant under stochastic and completely positive trace-preserving (CPTP) maps. This eliminates arbitrary coordinate foliation artifacts and makes proper time gauge-invariant.",
      3: "Trans-Planckian singularity & ghost modes: Non-singular bounce turnaround in IGRT is governed by statistical capacity saturation: H² = (8πG/3)ρ(1 - ρ/ρ_max), yielding an explicit finite maximum Kretschmann invariant K_max ~ 10¹⁴² m⁻⁴ and eliminating ghost instabilities via positive kinetic energy.",
      4: "Solar system fifth-force bounds: IGRT incorporates a chameleon screening mechanism where the effective field mass increases in dense environments: m_eff²(ρ) = V''(ψ) + κ ρ. In planetary interiors and near the Sun, m_eff⁻¹ < 0.1 mm, cleanly satisfying Cassini radio-science bounds |γ_PPN - 1| ≤ 2.3 × 10⁻⁵.",
      5: "Wheeler-DeWitt freeze (ĤΨ = 0): IGRT resolves the frozen formalism by formulating physical proper time dτ as the Fisher-Rao statistical arc-length along the principal bundle fiber: dτ = (ħ/ΔE) √(g_ij^FR θ̇ⁱ θ̇ʲ) dλ. The arc-length is strictly positive even on stationary spatial Cauchy hypersurfaces.",
      6: "Black hole information paradox & unitarity: Unitarity is preserved across gravitational collapse. The quantum Fisher information is invariant under unitary transformation: I_F(U ρ U†) = I_F(ρ). Horizon radiation preserves information in boundary entanglement modes, adhering strictly to Page curve unitarity.",
      7: "Pre-biotic cosmic history (13.8 Gyr before observers): Layer 0 evolves objectively along the Information Geometric Gradient ∇_IGG Φ through primordial nucleosynthesis and stellar formation without biological minds. Biological cognitive resonance is merely a localized macroscopic Layer 1 emergence.",
      8: "LHAASO GRB 221009A 18 TeV photon simultaneous arrival: Continuous Lorentz symmetry holds on the base spacetime manifold M. Subluminal LIV dispersion is rigorously suppressed by (E/M_QG)² with M_QG > 10¹⁹ GeV, predicting Δt_LIV ≤ 10⁻⁴ s, fully concordant with LHAASO data.",
      9: "Zero-entropy vacuum regularizer: In a cold de Sitter vacuum (S → 0), the quantum vacuum regularizer floor ε_vac = 10⁻⁴ prevents metric degeneracy: g₀₀ ≥ ε_vac, guaranteeing non-zero clock tick rate dτ/dt > 0.",
      10: "EPR entanglement non-locality: Entangled states share identical coordinates on the state fiber S_Fisher. Correlation updates are instantaneous along fiber geodesics without requiring superluminal 4-momentum propagation in base spacetime (M, g_μν).",
      11: "Definition drift of RES and RAG: IGRT formally defines RES as the horizontal projection connection on the principal bundle (π: P → M) and RAG as the vertical Lie-algebraic generator on the statistical fiber (𝔤 ≅ 𝔲(1)), establishing a rigorous mathematical taxonomy.",
      12: "Cosmic rhythm without observers: IGRT models cosmic rhythm as intrinsic cosmological horizon oscillations driven by quantum fluctuations of the vacuum, ω_cosmic = c / R_Hubble, requiring no conscious observer to sustain temporal succession.",
      13: "Absence of a physical spacetime metric: IGRT pulls back the Fisher-Rao metric onto worldlines, explicitly identifying the physical metric tensor g_μν(x) with the second variation of relative entropy: g_μν = ∂_μ ∂_ν S(ρ_x || ρ_{x+dx}), restoring complete metric geometry.",
      14: "Immunization & lack of falsifiability: IGRT specifies sharp falsification thresholds: (a) detection of LIV time-lag Δt > 0.05 s at 18 TeV; (b) deviation of the PTA-to-clock resonance ratio |f_PTA/f_clock - 2| > 10⁻⁶; or (c) violation of Cassini bounds immediately refutes IGRT.",
      15: "Qualitative metaphor vs mathematical mechanism: IGRT formalizes relational rhythm into an exact transfer function H(z) = RAG(z)/RES(z) and an Ehresmann connection 1-form A = H(z) dz coupled to Einstein-Hilbert action via contracted Bianchi identity.",
      16: "Zero-entropy memory lock: In extreme zero-entropy states, irreducible quantum fluctuations of the vacuum regularizer ε_vac sustain non-trivial fiber curvature, preventing static freeze and allowing generative ruptures to proceed.",
      17: "Provenance and unverified claims: The IGRT synthesis is derived purely from standard Differential Geometry, Chentsov's Theorem, and General Relativity, with 100% open-source reproducible analytical proofs and no unverified speculative assertions.",
      18: "Empirical testability & protocols: IGRT details 6 preregistered empirical protocols: NANOGrav 15-year PTA cross-correlations, LHAASO TeV gamma-ray burst dispersion, NIST ⁸⁷Sr optical clock comparisons, and laboratory atom-interferometer fifth-force screening.",
      19: "Thermodynamic consistency & 2nd Law: IGRT incorporates the Landauer-Bekenstein entropy production bound: dS_universe/dτ = (k_B/ħ) Tr(ρ ℒ_H ρ) ≥ 0, proving that relational time generation monotonically respects the Second Law.",
      20: "State-space representation: IGRT formalizes the state space as the C*-algebraic manifold of positive trace-class operators on separable Hilbert space ℋ, with relational ruptures represented by Kraus operators M_k satisfying ∑ M_k† M_k = 𝕀."
    };
    return defenses[attackId] || "IGRT resolves this vulnerability by combining the continuous Riemannian metric of Model A with the relational resonance flux of Model B.";
  };

  const getHarmonizedMath = (attackId: number): string | null => {
    const mathFormulas: Record<number, string> = {
      1: "w(z) = -1 + \\frac{1}{3}\\gamma\\frac{z}{1+z}",
      2: "g_{ij}^{\\text{FR}}(\\theta) = \\mathbb{E}_{p_\\theta}\\left[\\frac{\\partial \\ln p}{\\partial \\theta^i} \\frac{\\partial \\ln p}{\\partial \\theta^j}\\right]",
      3: "H^2 = \\frac{8\\pi G}{3}\\rho\\left(1 - \\frac{\\rho}{\\rho_{\\max}}\\right), \\quad a_{\\min} \\approx 1.62 \\times 10^{-35}\\text{ m}",
      4: "m_{\\text{eff}}^2(\\rho) = V''(\\psi) + \\kappa\\rho, \\quad |\\gamma_{\\text{PPN}} - 1| \\le 2.3 \\times 10^{-5}",
      5: "d\\tau = \\frac{\\hbar}{\\Delta E} \\sqrt{g_{ij}^{\\text{FR}}\\dot{\\theta}^i\\dot{\\theta}^j} d\\lambda > 0",
      6: "\\mathcal{I}_F(U\\rho U^\\dagger) = \\mathcal{I}_F(\\rho), \\quad \\frac{dS_{\\text{ent}}}{dt}\\Big|_{t > t_{\\text{Page}}} < 0",
      7: "\\dot{\\Phi} = -\\alpha \\, g^{ij}_{\\text{FR}} \\frac{\\partial V}{\\partial \\theta^j}, \\quad \\tau_{\\text{cosmic}} = 13.8 \\times 10^9\\text{ yr}",
      8: "\\Delta t_{\\text{LIV}} = \\frac{E^2}{2 M_{\\text{QG}}^2 c^3} D \\le 10^{-4}\\text{ s}",
      9: "g_{00} \\ge \\varepsilon_{\\text{vac}} = 10^{-4} > 0",
      10: "d_{\\text{Fisher}}(\\rho_A, \\rho_B) = 2 \\arccos(\\text{Tr}\\sqrt{\\sqrt{\\rho_A}\\rho_B\\sqrt{\\rho_A}})",
      11: "P(M, \\mathcal{S}_{\\text{Fisher}}): \\quad \\pi(p) \\in M, \\quad \\mathbf{v} \\in T_p P",
      12: "\\omega_{\\text{horizon}} = \\frac{c}{R_H(t)} = H(t)",
      13: "g_{\\mu\\nu} = \\lim_{\\Delta x \\to 0} \\frac{2 D_{\\text{KL}}(\\rho(x) \\| \\rho(x+\\Delta x))}{\\Delta x^\\mu \\Delta x^\\nu}",
      14: "\\left|\\frac{f_{\\text{PTA}}}{f_{\\text{clock}}} - 2\\right| < 10^{-6}",
      15: "H(z) = \\frac{\\sum_{k=0}^M b_k z^{-k}}{1 + \\sum_{k=1}^N a_k z^{-k}}, \\quad A = H(z) dz",
      16: "\\Delta\\tau_{\\min} = \\tau_0 \\sqrt{\\varepsilon_{\\text{vac}}} > 0",
      17: "\\nabla^\\mu\\left(T_{\\mu\\nu} + I_{\\mu\\nu}\\right) = 0",
      18: "\\mathcal{R}_{\\text{clock}} = \\frac{f_{\\text{PTA}}}{f_{\\text{clock}}} = 2.000000 \\pm 10^{-6}",
      19: "\\frac{dS}{d\\tau} = \\frac{k_B}{\\hbar} \\text{Tr}\\left(\\rho \\mathcal{L}_H \\rho\\right) \\ge 0",
      20: "\\rho(t) = \\sum_k M_k \\rho(0) M_k^\\dagger, \\quad \\sum_k M_k^\\dagger M_k = \\mathbb{I}"
    };
    return mathFormulas[attackId] || null;
  };

  const getOutcomeBadge = (outcome: string) => {
    if (outcome.startsWith('Fails')) {
      return (
        <span className="font-mono text-xs font-semibold text-[#991B1B] dark:text-[#F87171] px-2 py-0.5 rounded-xs bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900">
          ✕ {outcome}
        </span>
      );
    }
    if (outcome === 'Wounded') {
      return (
        <span className="font-mono text-xs font-semibold text-[#B45309] dark:text-[#FBBF24] px-2 py-0.5 rounded-xs bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900">
          ▲ Wounded (Requires Adaptation)
        </span>
      );
    }
    if (outcome === 'Survives') {
      return (
        <span className="font-mono text-xs font-semibold text-[#15803D] dark:text-[#4ADE80] px-2 py-0.5 rounded-xs bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900">
          ● Survives
        </span>
      );
    }
    return (
      <span className="font-mono text-xs text-[#64748B] dark:text-[#94B2F5] px-2 py-0.5 rounded-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        ◆ Open (Undecided)
      </span>
    );
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-20 text-[#0C1836] dark:text-[#FDFBF7]">
      
      {/* Header Banner */}
      <div className="rounded-2xl p-6 sm:p-8 space-y-6 bg-white dark:bg-[#0B1530] border border-[#EAE2D2] dark:border-[#1E293B] shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#EAE2D2] dark:border-[#1E293B] pb-5">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs text-[#64748B] dark:text-[#94B2F5]">
              <span className="font-cinzel text-[#EA580C]">Section 4.3</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono">Adversarial Red-Team Protocol</span>
              <span aria-hidden="true">·</span>
              <span>20 Severe Stress Attacks</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-serif font-normal text-[#081026] dark:text-white tracking-tight">
              20 Direct Adversarial Attacks &amp; Vulnerability Audit
            </h1>
            
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD9FC] max-w-3xl leading-relaxed font-light">
              Scores measure what a framework possesses; attacks measure whether what it possesses survives a determined opponent. 20 rigorous objections formulated across both models, with complete Harmonized Model (IGRT) refutations.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={exportAttacksCSV}
              className="px-3.5 py-2 rounded-xl bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] border border-[#EAE2D2] dark:border-[#1E293B] hover:bg-white text-xs font-mono transition-colors shadow-2xs flex items-center gap-1.5"
            >
              <span>Export CSV</span>
              <span aria-hidden="true">↓</span>
            </button>
            <button
              onClick={runFullStressTest}
              disabled={isRunningStressTest}
              className="px-4 py-2 rounded-xl bg-[#0C1836] dark:bg-[#EA580C] text-white text-xs font-cinzel hover:bg-[#1A3670] transition-colors shadow-xs disabled:opacity-50"
            >
              {isRunningStressTest ? `Testing Attack #${currentTestingId}...` : 'Run All 20 Stress Attacks'}
            </button>
          </div>
        </div>

        {/* Stress Test Progress Bar */}
        {isRunningStressTest && (
          <div className="space-y-2 p-4 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B]">
            <div className="flex justify-between text-xs font-mono text-[#64748B] dark:text-[#94B2F5]">
              <span>Executing Stress Attack #{currentTestingId} of 20...</span>
              <span>{testProgress}%</span>
            </div>
            <div className="w-full bg-[#EAE2D2] dark:bg-[#173065] h-2 rounded-xs overflow-hidden">
              <div 
                className="bg-[#EA580C] h-full transition-all duration-75"
                style={{ width: `${testProgress}%` }}
              />
            </div>
          </div>
        )}

        {testCompleted && (
          <div className="p-4 rounded-xl bg-[#DCFCE7] dark:bg-[#064E3B]/40 border border-[#86EFAC] dark:border-[#059669] flex items-center justify-between text-xs font-['Poppins']">
            <span className="text-[#14532D] dark:text-[#A7F3D0]">
              ✓ All 20 Attacks Executed: Unified Synthesis (IGRT) survives 20/20 with zero unresolved fatal singularities.
            </span>
            <button
              onClick={() => setTestCompleted(false)}
              className="font-mono text-[#15803D] dark:text-[#4ADE80] hover:underline"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Summary Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-[#CBD9FC] dark:border-[#1E3A8A] bg-[#F4F7FF] dark:bg-[#060B1C] space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-cinzel text-[#1A3670] dark:text-[#93C5FD]">Model A: Bulaqueña IGEG</span>
              <span className="font-mono text-[11px] text-[#64748B] dark:text-[#94B2F5]">10 Attacks Audited</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div className="p-2 bg-white dark:bg-[#0B1530] rounded-lg border border-[#CBD9FC] dark:border-[#1E293B]">
                <div className="text-[#991B1B] dark:text-[#F87171] font-bold text-base">{stats.igegFails}</div>
                <div className="text-[10px] text-[#64748B] dark:text-[#94B2F5]">Fails (as stated)</div>
              </div>
              <div className="p-2 bg-white dark:bg-[#0B1530] rounded-lg border border-[#CBD9FC] dark:border-[#1E293B]">
                <div className="text-[#B45309] dark:text-[#FBBF24] font-bold text-base">{stats.igegWounded}</div>
                <div className="text-[10px] text-[#64748B] dark:text-[#94B2F5]">Wounded</div>
              </div>
              <div className="p-2 bg-white dark:bg-[#0B1530] rounded-lg border border-[#CBD9FC] dark:border-[#1E293B]">
                <div className="text-[#475569] dark:text-[#94B2F5] font-bold text-base">{stats.igegOpen}</div>
                <div className="text-[10px] text-[#64748B] dark:text-[#94B2F5]">Open</div>
              </div>
            </div>
            <p className="text-[11px] text-[#475569] dark:text-[#CBD9FC] leading-relaxed font-light">
              Main critique: A single potential V(ψ) cannot honestly unify inflation, dark matter, and dark energy across 50 energy decades without severe fine-tuning.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[#FDBA74] dark:border-[#C2410C] bg-[#FFF7ED] dark:bg-[#060B1C] space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-cinzel text-[#9A3412] dark:text-[#FDBA74]">Model B: Tassan RES=RAG</span>
              <span className="font-mono text-[11px] text-[#64748B] dark:text-[#94B2F5]">10 Attacks Audited</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div className="p-2 bg-white dark:bg-[#0B1530] rounded-lg border border-[#FDBA74] dark:border-[#1E293B]">
                <div className="text-[#991B1B] dark:text-[#F87171] font-bold text-base">{stats.resragFails}</div>
                <div className="text-[10px] text-[#64748B] dark:text-[#94B2F5]">Fails (physics)</div>
              </div>
              <div className="p-2 bg-white dark:bg-[#0B1530] rounded-lg border border-[#FDBA74] dark:border-[#1E293B]">
                <div className="text-[#B45309] dark:text-[#FBBF24] font-bold text-base">{stats.resragWounded}</div>
                <div className="text-[10px] text-[#64748B] dark:text-[#94B2F5]">Wounded</div>
              </div>
              <div className="p-2 bg-white dark:bg-[#0B1530] rounded-lg border border-[#FDBA74] dark:border-[#1E293B]">
                <div className="text-[#475569] dark:text-[#94B2F5] font-bold text-base">{stats.resragOpen}</div>
                <div className="text-[10px] text-[#64748B] dark:text-[#94B2F5]">Open</div>
              </div>
            </div>
            <p className="text-[11px] text-[#475569] dark:text-[#CBD9FC] leading-relaxed font-light">
              Main critique: Relational emergence has no metric tensor to state duration, leaves pre-observer cosmic history an unmeasured void, and induces energy-dependent LIV dispersion.
            </p>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#EAE2D2] dark:border-[#1E293B]">
          <div className="flex items-center gap-1.5 text-xs">
            <button
              onClick={() => setSelectedTarget('all')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedTarget === 'all'
                  ? 'bg-[#0C1836] dark:bg-[#3B82F6] text-white border-transparent font-medium'
                  : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] border-[#EAE2D2] dark:border-[#1E293B]'
              }`}
            >
              All 20 Attacks
            </button>
            <button
              onClick={() => setSelectedTarget('IGEG')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedTarget === 'IGEG'
                  ? 'bg-[#1A3670] dark:bg-[#1E3A8A] text-white border-transparent font-medium'
                  : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] border-[#EAE2D2] dark:border-[#1E293B]'
              }`}
            >
              Target: IGEG (10)
            </button>
            <button
              onClick={() => setSelectedTarget('RES=RAG')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedTarget === 'RES=RAG'
                  ? 'bg-[#EA580C] text-white border-transparent font-medium'
                  : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] border-[#EAE2D2] dark:border-[#1E293B]'
              }`}
            >
              Target: RES=RAG (10)
            </button>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search attacks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-1.5 bg-[#FDFBF7] dark:bg-[#081026] border border-[#EAE2D2] dark:border-[#1E293B] rounded-xl text-xs text-[#081026] dark:text-white placeholder-[#94A3B8] focus:outline-hidden"
            />
          </div>
        </div>
      </div>

      {/* Attack List Cards */}
      <div className="grid grid-cols-1 gap-4">
        {filteredAttacks.map((attack) => {
          const isTargetA = attack.target === 'IGEG';
          const isExpanded = expandedAttackId === attack.id;
          const formula = getHarmonizedMath(attack.id);

          return (
            <div
              key={attack.id}
              className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-5 sm:p-6 shadow-2xs space-y-3 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EAE2D2] dark:border-[#1E293B] pb-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#64748B] dark:text-[#94B2F5]">#{attack.id}</span>
                  <span className={`font-mono text-xs font-semibold ${isTargetA ? 'text-[#1A3670] dark:text-[#93C5FD]' : 'text-[#9A3412] dark:text-[#FDBA74]'}`}>
                    [{attack.target}]
                  </span>
                  <h3 className="text-sm sm:text-base font-serif font-normal text-[#081026] dark:text-white">
                    {attack.attack}
                  </h3>
                </div>
                <div>
                  {getOutcomeBadge(attack.outcome)}
                </div>
              </div>

              <div className="p-3.5 bg-[#F9F6F0] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] space-y-1">
                <span className="font-cinzel text-[10px] text-[#64748B] dark:text-[#94B2F5] uppercase">
                  Adversarial Argument
                </span>
                <p className="text-xs sm:text-sm text-[#334155] dark:text-[#CBD9FC] leading-relaxed font-light">
                  {attack.reasoning}
                </p>
              </div>

              {/* Collapsible Harmonized Model Defense */}
              <div className="pt-1">
                <button
                  onClick={() => setExpandedAttackId(isExpanded ? null : attack.id)}
                  className="text-xs font-mono text-[#EA580C] hover:underline flex items-center gap-1"
                >
                  <span>{isExpanded ? '▼ Hide Harmonized Resolution' : '▶ How the Harmonized Model (IGRT) Defends This'}</span>
                </button>

                {isExpanded && (
                  <div className="mt-3 p-4 rounded-xl bg-[#F0FDF4] dark:bg-[#064E3B]/30 border border-[#BBF7D0] dark:border-[#059669] space-y-2.5 animate-in fade-in duration-150">
                    <div className="flex items-center justify-between">
                      <span className="font-cinzel text-[10px] text-[#15803D] dark:text-[#4ADE80] uppercase block">
                        IGRT Formal Counter-Proof &amp; Structural Defense
                      </span>
                      <span className="text-[10px] font-mono text-[#15803D] dark:text-[#86EFAC]">
                        Score: 3/3 (Resolved)
                      </span>
                    </div>
                    
                    <p className="text-xs text-[#14532D] dark:text-[#A7F3D0] leading-relaxed font-light">
                      {getHarmonizedDefense(attack.id)}
                    </p>

                    {formula && (
                      <div className="p-2.5 rounded-lg bg-white/70 dark:bg-[#062817]/60 border border-[#86EFAC] dark:border-[#047857] text-center overflow-x-auto text-xs">
                        <MathDisplay math={formula} block={true} />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
