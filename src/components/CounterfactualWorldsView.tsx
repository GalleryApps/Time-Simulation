import React, { useState, useMemo } from 'react';
import { COUNTERFACTUAL_WORLDS, CounterfactualWorld } from '../types/manuscriptData';
import { MathDisplay } from './MathDisplay';

export const CounterfactualWorldsView: React.FC = () => {
  const [selectedEdge, setSelectedEdge] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedWorldId, setSelectedWorldId] = useState<number>(1);
  const [perturbationLevel, setPerturbationLevel] = useState<number>(0.5);

  // Exact 2D Phase coordinates for the 14 worlds based on their actual physical postulates
  // X: Spacetime Discreteness & Relationality (0 = purely smooth Riemannian, 10 = discrete causal sets/ruptures)
  // Y: Statistical Information Coupling (0 = minimal matter coupling, 10 = holographic/entanglement saturation)
  const worldCoordinates: Record<number, { x: number; y: number; label: string; math: string; igrtResolution: string }> = {
    1: { 
      x: 1.5, 
      y: 9.0, 
      label: 'Removal of Time Dimension', 
      math: 'd\\tau = \\frac{\\hbar}{\\Delta E} \\sqrt{g_{ij}^{\\text{FR}} d\\theta^i d\\theta^j} > 0',
      igrtResolution: 'IGRT decouples coordinate time t from physical proper time dτ. Proper time is preserved as the invariant statistical arc-length along the quantum fiber, avoiding frozen Wheeler-DeWitt spatial collapse.'
    },
    2: { 
      x: 1.0, 
      y: 1.2, 
      label: 'Zero-Entropy Vacuum Freeze', 
      math: 'g_{00} \\ge \\varepsilon_{\\text{vac}} = 10^{-4} > 0',
      igrtResolution: 'Quantum vacuum regularizer floor ε_vac guarantees the metric never degenerates. Even in an absolute zero thermodynamic state (S=0), the cosmic clock advances with positive minimum rate.'
    },
    3: { 
      x: 3.0, 
      y: 6.5, 
      label: 'Time Runs Backwards', 
      math: '\\Delta S_{\\text{ent}} = \\int \\text{Tr}(\\rho \\ln \\rho) \\, d\\lambda \\ge 0',
      igrtResolution: 'Diffeomorphism invariance on the base manifold respects microscopic time-reversal, while the fiber relative entropy distance monotonically increases, generating a robust statistical arrow of time.'
    },
    4: { 
      x: 9.0, 
      y: 4.0, 
      label: 'Tiny Discrete Planck Steps', 
      math: '\\tau_N = \\tau_0 \\sum_{k=1}^N \\|\\text{RAG}_k - \\text{RES}_k\\|_{\\mathcal{F}}',
      igrtResolution: 'Discrete relational steps operate as discrete holonomies along the Ehresmann connection. In the continuum limit N → ∞, the discrete sum smoothly converges to the continuous Fisher metric.'
    },
    5: { 
      x: 1.0, 
      y: 5.0, 
      label: 'Perfect Smooth Spacetime', 
      math: 'ds^2 = -g_{\\mu\\nu} dx^\\mu dx^\\nu, \\quad A_\\mu = H(z) dz',
      igrtResolution: 'Smooth pseudo-Riemannian manifold forms the base space of the principal fiber bundle P(M, S_Fisher), seamlessly admitting continuous tensor calculus and Einstein-Hilbert curvature.'
    },
    6: { 
      x: 2.0, 
      y: 8.5, 
      label: 'Observer-Free Cosmos (Pre-Biotic)', 
      math: '\\rho_{\\text{obs}} = 0, \\quad \\nabla^\\mu(T_{\\mu\\nu} + I_{\\mu\\nu}) = 0',
      igrtResolution: 'Layer 0 objective metric and informational gradient operate autonomously for 13.8 billion years without biological minds. Observers are merely emergent local thermodynamic sub-networks.'
    },
    7: { 
      x: 8.5, 
      y: 1.5, 
      label: 'Minds Exist Without Matter', 
      math: '\\mathcal{H} = \\mathcal{H}_{\\text{clock}} \\otimes \\mathcal{H}_{\\text{system}}',
      igrtResolution: 'The relational state manifold retains pure entanglement dynamics even without baryonic matter, but contracts into a topological field theory lacking gravitational curvature.'
    },
    8: { 
      x: 4.5, 
      y: 7.0, 
      label: 'Gravitational Clock Dilation', 
      math: 'd\\tau_1 / d\\tau_2 = \\sqrt{-g_{00}(r_1) / -g_{00}(r_2)}',
      igrtResolution: 'Naturally explained by metric curvature on the base manifold pulling back to the state fiber, matching atomic clock gravitational redshift experiments to 10⁻¹⁸ precision.'
    },
    9: { 
      x: 2.5, 
      y: 7.5, 
      label: 'Strict Determinism Proved', 
      math: '\\frac{d\\rho}{dt} = -\\frac{i}{\\hbar}[H, \\rho]',
      igrtResolution: 'Pure von Neumann unitary evolution is completely deterministic; retention and generation maintain constant informational volume without stochastic loss.'
    },
    10: { 
      x: 8.0, 
      y: 8.0, 
      label: 'Fundamental Quantum Randomness', 
      math: '\\mathcal{L}[\\rho] = \\sum_k \\left(L_k \\rho L_k^\\dagger - \\frac{1}{2}\\{L_k^\\dagger L_k, \\rho\\}\\right)',
      igrtResolution: 'Lindbladian open-system decoherence generates continuous innovation ruptures (RAG), acting as a natural driver of temporal progression.'
    },
    11: { 
      x: 5.0, 
      y: 9.5, 
      label: 'Black Hole Information Destruction', 
      math: 'S_{\\text{Page}}(t) = \\min\\{S_{\\text{BH}}(t), S_{\\text{rad}}(t)\\}',
      igrtResolution: 'Unitary quantum Fisher information conservation precludes true information destruction. Boundary entanglement modes restore the Page curve during late-time Hawking evaporation.'
    },
    12: { 
      x: 7.0, 
      y: 6.0, 
      label: 'GW Speed Differs from Light', 
      math: '|c_{\\text{GW}} - c| / c < 10^{-15} \\quad \\text{(GW170817)}',
      igrtResolution: 'Minimal scalar coupling keeps metric and conformal factors matched, strictly predicting c_GW = c. Any observed difference would constrain the non-minimal coupling parameter.'
    },
    13: { 
      x: 6.5, 
      y: 5.5, 
      label: 'Energy-Dependent GRB Delays', 
      math: '\\Delta t_{\\text{LIV}} = \\frac{E^2}{2 M_{\\text{QG}}^2 c^3} D \\le 10^{-4}\\text{ s}',
      igrtResolution: 'Continuum metric covariance on base manifold preserves Lorentz symmetry, suppressing subluminal dispersion beyond Planck scale to meet LHAASO GRB 221009A null observations.'
    },
    14: { 
      x: 8.0, 
      y: 4.5, 
      label: 'Machines Proved Conscious', 
      math: '\\Phi_{\\text{IIT}} > 0, \\quad \\mathcal{R}_{\\text{res}} = \\frac{\\text{RAG}}{\\text{RES}} \\approx 1',
      igrtResolution: 'Confirms Layer 1 macroscopic cognitive rhythm as an algorithmic substrate-independent phenomenon, validating Tassan\'s human-machine dialogic resonance.'
    }
  };

  const filteredWorlds = useMemo(() => {
    return COUNTERFACTUAL_WORLDS.filter(w => {
      if (selectedEdge === 'IGEG' && !w.edge.includes('IGEG')) return false;
      if (selectedEdge === 'RES=RAG' && !w.edge.includes('RES=RAG')) return false;
      if (selectedEdge === 'Level' && !w.edge.includes('Level')) return false;
      if (selectedEdge === 'Neither' && !w.edge.includes('Neither')) return false;

      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        return w.world.toLowerCase().includes(q) || 
               w.igegAnswer.toLowerCase().includes(q) || 
               w.resragAnswer.toLowerCase().includes(q);
      }
      return true;
    });
  }, [selectedEdge, searchQuery]);

  const activeWorld = COUNTERFACTUAL_WORLDS.find(w => w.id === selectedWorldId) || COUNTERFACTUAL_WORLDS[0];
  const activeCoord = worldCoordinates[selectedWorldId] || worldCoordinates[1];

  const exportCounterfactualsCSV = () => {
    const headers = ['ID', 'Counterfactual World', 'Model A (IGEG) Response', 'Model B (RES=RAG) Response', 'Advantage', 'IGRT Unified Resolution'];
    const rows = COUNTERFACTUAL_WORLDS.map(w => [
      w.id,
      `"${w.world.replace(/"/g, '""')}"`,
      `"${w.igegAnswer.replace(/"/g, '""')}"`,
      `"${w.resragAnswer.replace(/"/g, '""')}"`,
      `"${w.edge.replace(/"/g, '""')}"`,
      `"${(worldCoordinates[w.id]?.igrtResolution || '').replace(/"/g, '""')}"`
    ]);
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'IGRT_14_Counterfactual_Universes_Audit.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-20 text-[#0C1836] dark:text-[#FDFBF7]">
      
      {/* Header Banner */}
      <div className="rounded-2xl p-6 sm:p-8 space-y-6 bg-white dark:bg-[#0B1530] border border-[#EAE2D2] dark:border-[#1E293B] shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#EAE2D2] dark:border-[#1E293B] pb-5">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs text-[#64748B] dark:text-[#94B2F5]">
              <span className="font-cinzel text-[#15803D] dark:text-[#4ADE80]">Section 4.4 &amp; Table 5</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono">Counterfactual Thought Experiments</span>
              <span aria-hidden="true">·</span>
              <span>14 Altered Universes</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-serif font-normal text-[#081026] dark:text-white tracking-tight">
              14 Counterfactual Universes &amp; Stress-Testing Time
            </h1>
            
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD9FC] max-w-3xl leading-relaxed font-light">
              A decisive test of any theory of time is to remove time, or modify fundamental physical postulates, and inspect what remains. In each world, one core physical postulate is systematically altered and tested against Model A, Model B, and the Harmonized Model (IGRT).
            </p>
          </div>
          
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={exportCounterfactualsCSV}
              className="px-3.5 py-2 rounded-xl bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] border border-[#EAE2D2] dark:border-[#1E293B] hover:bg-white text-xs font-mono transition-colors shadow-2xs flex items-center gap-1.5"
            >
              <span>Export CSV</span>
              <span aria-hidden="true">↓</span>
            </button>
            <div className="font-mono text-xs text-[#15803D] dark:text-[#4ADE80] px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
              14/14 Worlds Resolved in IGRT
            </div>
          </div>
        </div>

        {/* 2D Cosmic Phase Map */}
        <div className="p-4 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-cinzel text-[#081026] dark:text-white">
              Cosmic Phase Space: 14 Altered Universes
            </span>
            <span className="font-mono text-[11px] text-[#64748B] dark:text-[#94B2F5]">
              Click a coordinate point to inspect that world
            </span>
          </div>

          <div className="h-56 sm:h-64 relative bg-[#060B1C] rounded-lg border border-[#142B5B] p-2 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 500 240" className="w-full h-full">
              {/* Grid Lines */}
              <line x1="45" y1="20" x2="45" y2="210" stroke="#1E293B" strokeWidth="1" />
              <line x1="45" y1="210" x2="480" y2="210" stroke="#1E293B" strokeWidth="1" />
              
              <line x1="45" y1="115" x2="480" y2="115" stroke="#1E293B" strokeWidth="0.5" strokeDasharray="3 3" />
              <line x1="262" y1="20" x2="262" y2="210" stroke="#1E293B" strokeWidth="0.5" strokeDasharray="3 3" />

              {/* Axes Labels */}
              <text x="262" y="232" fill="#94A3B8" fontSize="10" fontFamily="Poppins" textAnchor="middle">
                Spacetime Discreteness &amp; Relationality (0 = Smooth, 10 = Discrete Causal Nodes) →
              </text>
              <text x="18" y="115" fill="#94A3B8" fontSize="10" fontFamily="Poppins" textAnchor="middle" transform="rotate(-90 18 115)">
                Information Coupling →
              </text>

              {/* 14 Plotted Points */}
              {COUNTERFACTUAL_WORLDS.map((w) => {
                const coord = worldCoordinates[w.id] || { x: 5, y: 5, label: w.world };
                const cx = 55 + (coord.x / 10) * 400;
                const cy = 200 - (coord.y / 10) * 170;
                const isSelected = selectedWorldId === w.id;

                const color = w.edge.includes('IGEG') && !w.edge.includes('Level')
                  ? '#60A5FA' 
                  : w.edge.includes('RES=RAG') && !w.edge.includes('Level')
                  ? '#FB923C'
                  : '#A78BFA';

                return (
                  <g 
                    key={w.id} 
                    className="cursor-pointer group"
                    onClick={() => {
                      setSelectedWorldId(w.id);
                    }}
                  >
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isSelected ? 8 : 5}
                      fill={color}
                      stroke={isSelected ? '#FFFFFF' : 'rgba(255,255,255,0.4)'}
                      strokeWidth={isSelected ? 2.5 : 1}
                      className="transition-all duration-150"
                    />
                    <text
                      x={cx}
                      y={cy - 10}
                      fill={isSelected ? '#FFFFFF' : '#CBD5E1'}
                      fontSize={isSelected ? "10" : "8"}
                      fontWeight={isSelected ? "bold" : "normal"}
                      fontFamily="IBM Plex Mono"
                      textAnchor="middle"
                      className="opacity-80 group-hover:opacity-100"
                    >
                      #{w.id}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Live Gedanken Experiment Inspector for Selected World */}
        <div className="p-5 rounded-xl border border-[#EA580C]/40 bg-[#FFFBF7] dark:bg-[#0E1B38] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EA580C]/20 pb-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#EA580C] px-2 py-0.5 rounded-xs bg-[#EA580C]/10 border border-[#EA580C]/30">
                ACTIVE GEDANKEN TEST: WORLD #{activeWorld.id}
              </span>
              <span className="font-serif text-sm font-medium text-[#081026] dark:text-white">
                {activeCoord.label}
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="text-[#64748B] dark:text-[#94B2F5]">Perturbation Stress:</span>
              <input
                type="range"
                min="0.0"
                max="1.0"
                step="0.05"
                value={perturbationLevel}
                onChange={(e) => setPerturbationLevel(parseFloat(e.target.value))}
                className="w-28 accent-[#EA580C]"
              />
              <span className="text-[#EA580C] font-semibold">{(perturbationLevel * 100).toFixed(0)}%</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-['Poppins']">
            <div className="p-3 bg-white dark:bg-[#081026] rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] space-y-1">
              <span className="text-[10px] font-mono text-[#64748B] dark:text-[#94B2F5] uppercase block">
                Model A (IGEG) Behavior
              </span>
              <p className="text-[#334155] dark:text-[#CBD9FC] font-light leading-relaxed">
                {activeWorld.igegAnswer}
              </p>
            </div>

            <div className="p-3 bg-white dark:bg-[#081026] rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] space-y-1">
              <span className="text-[10px] font-mono text-[#64748B] dark:text-[#94B2F5] uppercase block">
                Model B (RES=RAG) Behavior
              </span>
              <p className="text-[#334155] dark:text-[#CBD9FC] font-light leading-relaxed">
                {activeWorld.resragAnswer}
              </p>
            </div>

            <div className="p-3 bg-emerald-50/60 dark:bg-[#064E3B]/20 rounded-lg border border-emerald-200 dark:border-emerald-800 space-y-1">
              <span className="text-[10px] font-mono text-emerald-800 dark:text-emerald-300 font-semibold uppercase block">
                Harmonized IGRT Resolution
              </span>
              <p className="text-emerald-950 dark:text-emerald-200 font-light leading-relaxed">
                {activeCoord.igrtResolution}
              </p>
              <div className="pt-1 font-mono text-[11px] text-emerald-900 dark:text-emerald-300">
                <MathDisplay math={activeCoord.math} />
              </div>
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <button
              onClick={() => setSelectedEdge('all')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedEdge === 'all'
                  ? 'bg-[#0C1836] dark:bg-[#3B82F6] text-white border-transparent font-medium'
                  : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] border-[#EAE2D2] dark:border-[#1E293B]'
              }`}
            >
              All 14 Universes
            </button>
            <button
              onClick={() => setSelectedEdge('IGEG')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedEdge === 'IGEG'
                  ? 'bg-[#1A3670] dark:bg-[#1E3A8A] text-white border-transparent font-medium'
                  : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] border-[#EAE2D2] dark:border-[#1E293B]'
              }`}
            >
              IGEG Edge (4)
            </button>
            <button
              onClick={() => setSelectedEdge('RES=RAG')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedEdge === 'RES=RAG'
                  ? 'bg-[#EA580C] text-white border-transparent font-medium'
                  : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] border-[#EAE2D2] dark:border-[#1E293B]'
              }`}
            >
              RES=RAG Edge (2)
            </button>
            <button
              onClick={() => setSelectedEdge('Level')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedEdge === 'Level'
                  ? 'bg-[#6D28D9] text-white border-transparent font-medium'
                  : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] border-[#EAE2D2] dark:border-[#1E293B]'
              }`}
            >
              Parity Level (6)
            </button>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Filter by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-1.5 bg-[#FDFBF7] dark:bg-[#081026] border border-[#EAE2D2] dark:border-[#1E293B] rounded-xl text-xs text-[#081026] dark:text-white placeholder-[#94A3B8] focus:outline-hidden"
            />
          </div>
        </div>
      </div>

      {/* Universes Cards */}
      <div className="grid grid-cols-1 gap-5">
        {filteredWorlds.map((w) => {
          const isIgegEdge = w.edge.includes('IGEG') && !w.edge.includes('Level');
          const isResRagEdge = w.edge.includes('RES=RAG') && !w.edge.includes('Level');
          const isSelected = selectedWorldId === w.id;
          const coord = worldCoordinates[w.id];

          return (
            <div
              id={`world-${w.id}`}
              key={w.id}
              className={`rounded-2xl p-6 shadow-xs space-y-4 transition-all bg-white dark:bg-[#0B1530] border ${
                isSelected 
                  ? 'border-[#EA580C] ring-2 ring-[#EA580C]/20' 
                  : 'border-[#EAE2D2] dark:border-[#1E293B]'
              }`}
              onClick={() => setSelectedWorldId(w.id)}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EAE2D2] dark:border-[#1E293B] pb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#64748B] dark:text-[#94B2F5]">
                    Scenario #{w.id}
                  </span>
                  <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
                  <h3 className="text-base font-serif font-normal text-[#081026] dark:text-white">
                    {w.world}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-[#64748B] dark:text-[#94B2F5]">Advantage:</span>
                  <span className={isIgegEdge ? 'text-[#1A3670] dark:text-[#93C5FD] font-semibold' : isResRagEdge ? 'text-[#9A3412] dark:text-[#FDBA74] font-semibold' : 'text-[#6D28D9] dark:text-[#D8B4FE]'}>
                    {w.edge}
                  </span>
                </div>
              </div>

              {/* Side-by-side Response Columns + Harmonized Synthesis */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Model A Column */}
                <div className={`p-4 rounded-xl border ${isIgegEdge ? 'border-[#CBD9FC] dark:border-[#1E3A8A] bg-[#F4F7FF] dark:bg-[#060B1C]' : 'border-[#EAE2D2] dark:border-[#1E293B] bg-[#FDFBF7] dark:bg-[#081026]'} space-y-1.5`}>
                  <div className="flex items-center justify-between">
                    <span className="font-cinzel text-xs text-[#1A3670] dark:text-[#93C5FD]">
                      Model A: Bulaqueña IGEG
                    </span>
                    {isIgegEdge && (
                      <span className="text-[10px] font-mono text-[#1A3670] dark:text-[#93C5FD] font-semibold">
                        ★ Distinct Edge
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[#334155] dark:text-[#CBD9FC] leading-relaxed font-light">
                    {w.igegAnswer}
                  </p>
                </div>

                {/* Model B Column */}
                <div className={`p-4 rounded-xl border ${isResRagEdge ? 'border-[#FDBA74] dark:border-[#C2410C] bg-[#FFF7ED] dark:bg-[#060B1C]' : 'border-[#EAE2D2] dark:border-[#1E293B] bg-[#FDFBF7] dark:bg-[#081026]'} space-y-1.5`}>
                  <div className="flex items-center justify-between">
                    <span className="font-cinzel text-xs text-[#9A3412] dark:text-[#FDBA74]">
                      Model B: Tassan RES=RAG
                    </span>
                    {isResRagEdge && (
                      <span className="text-[10px] font-mono text-[#9A3412] dark:text-[#FDBA74] font-semibold">
                        ★ Distinct Edge
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[#334155] dark:text-[#CBD9FC] leading-relaxed font-light">
                    {w.resragAnswer}
                  </p>
                </div>

                {/* Harmonized Model Synthesis Column */}
                <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-[#F0FDF4] dark:bg-[#064E3B]/20 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-cinzel text-xs text-emerald-800 dark:text-emerald-300 font-semibold">
                      IGRT Unified Synthesis
                    </span>
                    <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400">
                      Unified
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 leading-relaxed font-light">
                    {coord?.igrtResolution || 'Synthesizes the Fisher metric with relational resonance.'}
                  </p>
                  {coord?.math && (
                    <div className="pt-1 text-xs text-emerald-900 dark:text-emerald-300">
                      <MathDisplay math={coord.math} />
                    </div>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
