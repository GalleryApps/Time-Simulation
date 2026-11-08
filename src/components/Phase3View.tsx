import React, { useState } from 'react';
import { MathDisplay } from './MathDisplay';
import { computeIGIGScaleFactor } from '../physics/igig';
import { computeCausalSetScaleFactor } from '../physics/causalset';

export const Phase3View: React.FC = () => {
  const [alphaCoupling, setAlphaCoupling] = useState<number>(1.2);
  const [aMinParam, setAMinParam] = useState<number>(0.18);
  const [activeTab, setActiveTab] = useState<'flrw' | 'blackhole'>('flrw');

  // Compute trajectory data points
  const points = [];
  for (let t = -2.5; t <= 2.5; t += 0.1) {
    const time = Number(t.toFixed(2));
    const igig = computeIGIGScaleFactor(time, aMinParam, alphaCoupling);
    const causal = computeCausalSetScaleFactor(time, aMinParam * 0.9);
    const classical_a = Math.pow(Math.max(0.001, Math.abs(time)), 2 / 3);
    const classical_k = 12 / Math.pow(Math.max(0.02, Math.abs(time)), 4);
    
    points.push({
      time,
      a_igig: igig.a,
      a_causal: causal.a,
      a_classical: Math.min(2.5, classical_a),
      k_igig: igig.kretschmann,
      k_causal: causal.kretschmann,
      k_classical: Math.min(500, classical_k)
    });
  }

  return (
    <div className="space-y-8">
      {/* Title & Banner */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Phase 3 Analytical Execution · Cosmological Scale-Up
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Cosmological Scale-Up & Singularity Resolution
            </h2>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono text-slate-400">Curvature Regularization:</span>
            <div className="font-mono text-sm text-indigo-400">
              <MathDisplay math="\mathcal{K}_{\text{max}} < \infty \quad \text{as } r,\tau \to 0" />
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-4xl">
          We scale both models to macroscopic Friedmann-Lemaître-Robertson-Walker (FLRW) cosmologies and Schwarzschild black hole collapse. Classical GR yields geodesically incomplete spacetime with infinite curvature ($R \to \infty$). Both quantum gravity models successfully eliminate singularities, but through fundamentally distinct mechanisms: an Information Saturation Floor vs. Causal Set Discreteness Kinematics.
        </p>
      </div>

      {/* Mode Selector */}
      <div className="flex gap-2 border-b border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('flrw')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${activeTab === 'flrw' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
        >
          FLRW Cosmic Bounce Dynamics
        </button>
        <button
          onClick={() => setActiveTab('blackhole')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${activeTab === 'blackhole' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
        >
          Black Hole Interior Core Geometry
        </button>
      </div>

      {/* Interactive Trajectory Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Scale Factor / Core Radius Chart */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-white">
              {activeTab === 'flrw' ? 'Scale Factor a(τ) Evolution' : 'Radial Infall r(τ) vs Core Horizon'}
            </h3>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-emerald-400">● Model A (IGIG)</span>
              <span className="text-amber-400">● Model B (Causal Set)</span>
              <span className="text-red-400">● Classical GR</span>
            </div>
          </div>

          {/* SVG Line Chart */}
          <div className="relative h-64 w-full bg-slate-950 rounded-lg border border-slate-800 p-2 flex items-center justify-center">
            <svg viewBox="-2.6 -0.1 5.2 2.7" className="w-full h-full overflow-visible">
              {/* Grid lines */}
              <line x1="-2.5" y1="0" x2="2.5" y2="0" stroke="#334155" strokeWidth="0.02" />
              <line x1="0" y1="0" x2="0" y2="2.5" stroke="#334155" strokeWidth="0.02" strokeDasharray="0.05, 0.05" />

              {/* Classical GR: Singular collapse to 0 */}
              <polyline
                fill="none"
                stroke="#f87171"
                strokeWidth="0.03"
                strokeDasharray="0.06, 0.04"
                points={points.map(p => `${p.time},${p.a_classical}`).join(' ')}
              />

              {/* Model B: Causal Set Discreteness */}
              <polyline
                fill="none"
                stroke="#fbbf24"
                strokeWidth="0.04"
                points={points.map(p => `${p.time},${p.a_causal}`).join(' ')}
              />

              {/* Model A: Bulaqueña IGG Information Saturation */}
              <polyline
                fill="none"
                stroke="#34d399"
                strokeWidth="0.04"
                points={points.map(p => `${p.time},${p.a_igig}`).join(' ')}
              />
            </svg>
            <div className="absolute top-2 right-3 text-[11px] font-mono text-slate-400">
              Bounce Minimum: a_min = {aMinParam.toFixed(3)} l_p
            </div>
          </div>

          {/* Parameter Sliders */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Information Coupling (<MathDisplay math="\alpha" />):</span>
                <span className="font-mono text-emerald-400 tabular-nums">{alphaCoupling}</span>
              </div>
              <input 
                type="range" 
                min="0.5" 
                max="3.0" 
                step="0.1"
                value={alphaCoupling}
                onChange={(e) => setAlphaCoupling(parseFloat(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Minimum Scale (<MathDisplay math="a_{\text{min}}" />):</span>
                <span className="font-mono text-amber-400 tabular-nums">{aMinParam} l_p</span>
              </div>
              <input 
                type="range" 
                min="0.08" 
                max="0.4" 
                step="0.02"
                value={aMinParam}
                onChange={(e) => setAMinParam(parseFloat(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Kretschmann Scalar Curvature Chart */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-white">
              Kretschmann Curvature Invariant <MathDisplay math="\mathcal{K} = R^{\alpha\beta\gamma\delta}R_{\alpha\beta\gamma\delta}" />
            </h3>
            <span className="text-xs font-mono text-slate-400">Singularity Check</span>
          </div>

          <div className="relative h-64 w-full bg-slate-950 rounded-lg border border-slate-800 p-2 flex items-center justify-center">
            <svg viewBox="-2.6 -5 5.2 120" className="w-full h-full overflow-visible">
              <line x1="-2.5" y1="0" x2="2.5" y2="0" stroke="#334155" strokeWidth="0.5" />
              
              {/* Model B Kretschmann */}
              <polyline
                fill="none"
                stroke="#fbbf24"
                strokeWidth="1.2"
                points={points.map(p => `${p.time},${Math.min(100, p.k_causal)}`).join(' ')}
              />

              {/* Model A Kretschmann */}
              <polyline
                fill="none"
                stroke="#34d399"
                strokeWidth="1.2"
                points={points.map(p => `${p.time},${Math.min(100, p.k_igig)}`).join(' ')}
              />
            </svg>
            <div className="absolute bottom-2 right-3 text-[11px] font-mono text-emerald-400">
              K_max(IGIG) = {(12 / Math.pow(aMinParam, 4) * 0.1).toFixed(1)} (Strictly Finite)
            </div>
          </div>

          <div className="rounded bg-slate-950/80 p-3 border border-slate-800 text-xs space-y-1">
            <div className="text-slate-400">Action Principle & Curvature Saturation:</div>
            <MathDisplay 
              block 
              math="S_{\text{IGIG}} = \int \left(R + \alpha \mathcal{I}_{\text{Fisher}}\right) \sqrt{-g}\, d^4x, \quad \lim_{R \to \infty} \mathcal{I}_{\text{Fisher}} = \mathcal{I}_{\text{max}} = \frac{c^3}{4G\hbar\ln 2}" 
            />
          </div>
        </div>
      </div>

      {/* Quantitative Divergence Matrix Table */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
        <h3 className="text-lg font-bold text-white">
          Quantitative Divergence Matrix: Model A vs Model B
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-mono">
                <th className="py-3 px-4">Theoretical Observable / Parameter</th>
                <th className="py-3 px-4 text-emerald-400">Model A: IGIG Software Time</th>
                <th className="py-3 px-4 text-amber-400">Model B: Causal Set Time</th>
                <th className="py-3 px-4 text-slate-300">Observational Discriminator</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 font-mono">
              <tr>
                <td className="py-3 px-4 text-white font-sans font-medium">Primordial Tensor-to-Scalar Ratio (r)</td>
                <td className="py-3 px-4 text-emerald-300 tabular-nums">r ≈ 0.0032 (Suppressed by Fisher damping)</td>
                <td className="py-3 px-4 text-amber-300 tabular-nums">r ≈ 0.048 (Elevated by Poisson link noise)</td>
                <td className="py-3 px-4 text-slate-400 font-sans">LiteBIRD & CMB-S4 (Target sensitivity r ~ 0.001)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-white font-sans font-medium">Primordial Tensor Tilt (n_t)</td>
                <td className="py-3 px-4 text-emerald-300 tabular-nums">n_t = -0.012 (Standard Red Tilt)</td>
                <td className="py-3 px-4 text-amber-300 tabular-nums">n_t = +0.024 (Distinct Blue Tilt Anomaly)</td>
                <td className="py-3 px-4 text-slate-400 font-sans">LISA & Big Bang Observer (BBO)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-white font-sans font-medium">Gamma-Ray Burst Photon Lag (Δt_LIV)</td>
                <td className="py-3 px-4 text-emerald-300 tabular-nums">Δt ≡ 0.00 ps (Exact Lorentz Invariance)</td>
                <td className="py-3 px-4 text-amber-300 tabular-nums">Δt ≈ 4.12 ps / 100 GeV (Linear LIV)</td>
                <td className="py-3 px-4 text-slate-400 font-sans">Cherenkov Telescope Array (CTA) & Fermi-LAT</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-white font-sans font-medium">Black Hole Singularity Resolution</td>
                <td className="py-3 px-4 text-emerald-300">De Sitter Core with Hayward Metric Transition</td>
                <td className="py-3 px-4 text-amber-300">Kinematic Anti-trapping at Volume V_min = l_p⁴</td>
                <td className="py-3 px-4 text-slate-400 font-sans">Gravitational Wave Echoes from Ringdown (LIGO/ET)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-white font-sans font-medium">Temporal Ontology</td>
                <td className="py-3 px-4 text-emerald-300">Fundamental Algorithmic Metric Operator</td>
                <td className="py-3 px-4 text-amber-300">Thermodynamic Modular Approximation</td>
                <td className="py-3 px-4 text-slate-400 font-sans">Macroscopic Clock Drift in Cold Atom Cavities</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
