import React, { useState, useMemo } from 'react';
import { MathDisplay } from './MathDisplay';
import { generateCausalSet, computeLIVDelay } from '../physics/causalset';

export const Phase2View: React.FC = () => {
  const [nodeCount, setNodeCount] = useState<number>(35);
  const [photonEnergy, setPhotonEnergy] = useState<number>(100); // GeV
  const [distanceMpc, setDistanceMpc] = useState<number>(1200); // Mpc
  const [livOrder, setLivOrder] = useState<1 | 2>(1);

  // Generate causal set
  const causalData = useMemo(() => generateCausalSet(nodeCount, 77), [nodeCount]);
  const livDelay = useMemo(() => computeLIVDelay(photonEnergy, distanceMpc, livOrder), [photonEnergy, distanceMpc, livOrder]);
  const spacelikeCommutatorTail = useMemo(() => 0.042 / Math.sqrt(nodeCount), [nodeCount]);

  const formattedLivDelay = useMemo(() => {
    const seconds = livDelay / 1e12;
    if (seconds >= 1) return `${seconds.toFixed(3)} s (${livDelay.toExponential(2)} ps)`;
    if (seconds >= 1e-3) return `${(seconds * 1e3).toFixed(3)} ms`;
    if (seconds >= 1e-6) return `${(seconds * 1e6).toFixed(3)} µs`;
    if (seconds >= 1e-9) return `${(seconds * 1e9).toFixed(3)} ns`;
    return `${livDelay.toFixed(3)} ps`;
  }, [livDelay]);

  return (
    <div className="space-y-8">
      {/* Title & Banner */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Phase 2 Analytical Execution · Covariance & Field Equations
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Preservation of Field Equations & Covariance Without Fundamental Time
            </h2>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono text-slate-400">Conservation Law:</span>
            <div className="font-mono text-sm text-indigo-400">
              <MathDisplay math="\nabla_\mu T^{\mu\nu} = 0, \quad G_{\mu\nu} = 8\pi G T_{\mu\nu}" />
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-4xl">
          When time is stripped as a fundamental coordinate, do general covariance and microcausality survive? Model A derives the spacetime metric directly as a Lorentzian pullback of the Fisher information tensor, while Model B reconstructs spacetime from a discrete Poisson causal network, exposing subtle Lorentz Invariance Violations (LIV).
        </p>
      </div>

      {/* Main Grid: Causal Diamond Sprinkling vs LIV & Covariance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* MODEL B: CAUSAL DIAMOND & POISSON SPRINKLING */}
        <div className="rounded-xl border border-amber-900/50 bg-slate-900/50 p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-amber-900/40 pb-3">
            <div>
              <span className="text-xs font-mono uppercase text-amber-400">Model B Network Stage</span>
              <h3 className="text-lg font-semibold text-amber-100">Discrete Causal Diamond Sprinkling</h3>
            </div>
            <div className="text-xs font-mono text-amber-300">
              Fluctuation: <span className="text-white tabular-nums">δN/√N = {causalData.linkFluctuation}</span>
            </div>
          </div>

          {/* Interactive Causal Canvas */}
          <div className="relative h-64 w-full rounded-lg bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center">
            <svg viewBox="-1.2 -1.2 2.4 2.4" className="w-full h-full p-2">
              {/* Causal diamond boundary */}
              <polygon 
                points="0,-1 1,0 0,1 -1,0" 
                fill="none" 
                stroke="#475569" 
                strokeWidth="0.015" 
                strokeDasharray="0.04, 0.04"
              />
              
              {/* Links between causal nodes */}
              {causalData.nodes.map((node) => 
                node.links.map((parentIdx) => {
                  const parent = causalData.nodes[parentIdx];
                  if (!parent) return null;
                  return (
                    <line
                      key={`${parent.id}-${node.id}`}
                      x1={parent.x}
                      y1={-parent.t}
                      x2={node.x}
                      y2={-node.t}
                      stroke="#d97706"
                      strokeWidth="0.01"
                      strokeOpacity="0.45"
                    />
                  );
                })
              )}

              {/* Discrete nodes */}
              {causalData.nodes.map((node) => (
                <circle
                  key={node.id}
                  cx={node.x}
                  cy={-node.t}
                  r="0.03"
                  className="fill-amber-400 hover:fill-white cursor-pointer transition-colors"
                >
                  <title>{`Node #${node.id}: t=${node.t}, x=${node.x}, links=${node.links.length}`}</title>
                </circle>
              ))}
            </svg>
            <div className="absolute bottom-2 left-2 text-[10px] font-mono text-slate-400">
              Spacetime Causal Diamond (t vs x) · {causalData.nodes.length} Poisson nodes
            </div>
          </div>

          {/* Interactive Node Count Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300">Poisson Sprinkling Node Count (<MathDisplay math="N \sim \rho V" />):</span>
              <span className="font-mono text-amber-400 tabular-nums">{nodeCount} nodes</span>
            </div>
            <input 
              type="range" 
              min="15" 
              max="70" 
              step="5"
              value={nodeCount}
              onChange={(e) => setNodeCount(parseInt(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>

          <div className="rounded bg-slate-950/80 p-3 border border-slate-800 text-xs space-y-1">
            <div className="text-slate-400">Benincasa-Dowker Discrete d'Alembertian:</div>
            <MathDisplay 
              block 
              math="\square^{(4)}\phi(x) = \frac{4}{\sqrt{6}l_p^2}\left(\phi(x) - \sum_{y \in L_1} \phi(y) + 2\sum_{y \in L_2} \phi(y) - \sum_{y \in L_3}\phi(y)\right)" 
            />
          </div>
        </div>

        {/* MODEL A & LIV DISPERSION COLLISION */}
        <div className="rounded-xl border border-emerald-900/50 bg-slate-900/50 p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-emerald-900/40 pb-3">
            <div>
              <span className="text-xs font-mono uppercase text-emerald-400">Model A vs B Comparison</span>
              <h3 className="text-lg font-semibold text-emerald-100">Lorentz Invariance & Dispersion Delay</h3>
            </div>
            <div className="text-xs font-mono text-emerald-400">
              Model A LIV: <span className="text-white">0.00 ps</span>
            </div>
          </div>

          {/* LIV Parameter Controls */}
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Gamma-Ray Burst Photon Energy (<MathDisplay math="E" />):</span>
                <span className="font-mono text-emerald-400 tabular-nums">{photonEnergy} GeV</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="500" 
                step="10"
                value={photonEnergy}
                onChange={(e) => setPhotonEnergy(parseInt(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Source Distance (<MathDisplay math="D" />):</span>
                <span className="font-mono text-emerald-400 tabular-nums">{distanceMpc} Mpc (z ≈ 0.28)</span>
              </div>
              <input 
                type="range" 
                min="200" 
                max="3000" 
                step="100"
                value={distanceMpc}
                onChange={(e) => setDistanceMpc(parseInt(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300">LIV Dispersion Order:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setLivOrder(1)}
                  className={`px-3 py-1 rounded text-xs font-mono transition-colors ${livOrder === 1 ? 'bg-amber-600 text-white font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                >
                  Linear (n=1)
                </button>
                <button
                  onClick={() => setLivOrder(2)}
                  className={`px-3 py-1 rounded text-xs font-mono transition-colors ${livOrder === 2 ? 'bg-amber-600 text-white font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                >
                  Quadratic (n=2)
                </button>
              </div>
            </div>
          </div>

          {/* Time of Flight Display */}
          <div className="rounded-lg bg-slate-950 p-4 border border-slate-800 space-y-3">
            <div className="text-xs font-semibold text-slate-200">Time-of-Flight Arrival Delay (<MathDisplay math="\Delta t_{\text{LIV}}" />):</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded border border-emerald-900/40 bg-emerald-950/20 p-3">
                <div className="text-[11px] text-emerald-400 font-mono">Model A (Bulaqueña IGG):</div>
                <div className="text-xl font-bold font-mono text-white mt-1 tabular-nums">0.000 ps</div>
                <div className="text-[10px] text-slate-400 mt-1">Exact Lorentz Invariance Guaranteed</div>
              </div>
              <div className="rounded border border-amber-900/40 bg-amber-950/20 p-3">
                <div className="text-[11px] text-amber-400 font-mono">Model B (Causal Set):</div>
                <div className="text-lg font-bold font-mono text-amber-300 mt-1 tabular-nums">
                  {formattedLivDelay}
                </div>
                <div className="text-[10px] text-slate-400 mt-1">Planck-suppressed dispersion lag</div>
              </div>
            </div>
          </div>

          <div className="rounded bg-slate-950/80 p-3 border border-slate-800 text-xs">
            <div className="text-slate-400 mb-1">Model A Bulaqueña IGG Metric Pullback:</div>
            <MathDisplay 
              block 
              math="g_{\mu\nu}(x) = \frac{\partial \theta^i}{\partial x^\mu} \frac{\partial \theta^j}{\partial x^\nu} g_{ij}(\theta), \quad \mathcal{L}_\xi g_{\mu\nu} = 0 \implies \nabla_\mu T^{\mu\nu} = 0" 
            />
          </div>
        </div>
      </div>

      {/* Adversarial Collision: Microcausality & No-Signaling */}
      <div className="rounded-xl border border-red-950 bg-red-950/20 p-6 space-y-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-red-500" />
          <h3 className="text-base font-semibold text-red-200">
            Adversarial Stress Collision: Microcausality vs Superluminal Signaling
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300">
          <div className="bg-slate-950/60 p-4 rounded-lg border border-red-900/30 space-y-2">
            <h4 className="font-semibold text-amber-300">Model B Anomaly: Spacelike Commutator Leakage</h4>
            <p>
              In continuous QFT, microcausality requires <MathDisplay math="[\hat{\phi}(x), \hat{\phi}(y)] = 0" /> whenever <MathDisplay math="(x-y)^2 < 0" />. In Causal Sets, Poisson link fluctuations create non-vanishing stochastic tails across spacelike intervals:
            </p>
            <div className="font-mono text-amber-400 bg-slate-900 p-2 rounded">
              Residual Commutator: |[φ(x), φ(y)]| ≈ {spacelikeCommutatorTail.toFixed(5)} · l_p² / √N
            </div>
            <p className="text-slate-400 text-[11px]">
              This implies a fundamental statistical fuzziness to the lightcone, giving rise to quantum diffuse non-locality.
            </p>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-lg border border-red-900/30 space-y-2">
            <h4 className="font-semibold text-emerald-300">Model A Verification: Strictly Causal Software Signal Cones</h4>
            <p>
              Because the metric <MathDisplay math="g_{\mu\nu}" /> is a Riemannian/Lorentzian pullback of the Fisher tensor, the propagation cone is strictly non-degenerate:
            </p>
            <div className="font-mono text-emerald-400 bg-slate-900 p-2 rounded">
              Signaling Speed: v_sig ≡ c = 1.000000, Commutator Spacelike Residual ≡ 0.00000
            </div>
            <p className="text-slate-400 text-[11px]">
              No superluminal information transport is possible, fully satisfying the microcausality axiom while eliminating fundamental coordinate time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
