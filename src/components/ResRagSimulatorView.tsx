import React, { useState, useMemo } from 'react';
import { MathDisplay } from './MathDisplay';
import { evaluateResRag, computeDualLayerCoupling, ResRagParams } from '../physics/tassan';
import { computeFisherMetric, computeIGGVector } from '../physics/igig';

export const ResRagSimulatorView: React.FC = () => {
  const [params, setParams] = useState<ResRagParams>({
    resMemoryDecay: 0.65,
    resCoupling: -0.22,
    ragActiveDrive: 1.0,
    ragPhaseLag: -0.35,
    ragHighFreqNoise: 0.08
  });

  const [theta1, setTheta1] = useState<number>(0.5);
  const [theta2, setTheta2] = useState<number>(0.8);
  const [gradPhi1, setGradPhi1] = useState<number>(1.2);
  const [gradPhi2, setGradPhi2] = useState<number>(0.8);

  const resRagState = useMemo(() => evaluateResRag(params, 48), [params]);
  const fisherMetric = useMemo(() => computeFisherMetric(theta1, theta2, 1e-4), [theta1, theta2]);
  const iggResult = useMemo(() => computeIGGVector(theta1, theta2, gradPhi1, gradPhi2, 1e-4), [theta1, theta2, gradPhi1, gradPhi2]);
  const dualCoupling = useMemo(() => computeDualLayerCoupling(fisherMetric.determinant, fisherMetric.trace, resRagState), [fisherMetric, resRagState]);

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-20">
      
      {/* Title & Banner - Light Aesthetic */}
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-semibold text-amber-700 uppercase tracking-wider">
              Interactive Physics Workbench · Frequency & State Space
            </span>
            <h1 className="text-3xl font-serif font-bold text-slate-900 tracking-tight">
              Tassan RES-RAG vs. Bulaqueña IGG Simulation Laboratory
            </h1>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className={`px-3 py-1.5 rounded-lg border font-semibold ${resRagState.isStable ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
              Pole Stability: {resRagState.isStable ? 'STABLE (|z| < 1)' : 'UNSTABLE'}
            </span>
          </div>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          Manipulate Jean-Charles Tassan\'s structural memory coefficients (RES) and active generative flow (RAG) in the discrete Z-domain alongside the Bulaqueña Information Geometric Gradient (IGG) engine. Observe how the Layer 0 computational engine couples into Layer 1 macroscopic acoustic rhythms.
        </p>
      </div>

      {/* DUAL INTERACTIVE PANELS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* MODEL B: TASSAN RES-RAG FREQUENCY DOMAIN */}
        <div className="rounded-2xl border border-amber-200 bg-white p-6 sm:p-7 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-amber-100 pb-3">
            <div>
              <span className="text-xs font-mono uppercase font-bold text-amber-800">Model B · Z-Transform Domain</span>
              <h2 className="text-lg font-serif font-bold text-slate-900">RES-RAG Transfer Function H(z)</h2>
            </div>
            <span className="text-xs font-mono font-semibold text-amber-800">
              γ = ||RAG||/||RES|| = {resRagState.balanceGamma}
            </span>
          </div>

          {/* Master Z-Transform Equation */}
          <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-100 text-xs font-mono">
            <MathDisplay block math="H(z) = \frac{\text{RAG}(z)}{\text{RES}(z)} = \frac{b_0 + b_1 z^{-1} + b_2 z^{-2}}{1 - a_1 z^{-1} - a_2 z^{-2}}" />
          </div>

          {/* Pole-Zero Complex Plane & Frequency Spectrum */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Pole-Zero Plot (SVG) */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <span className="text-[10px] font-mono font-bold text-slate-500 block uppercase">
                Z-Plane Complex Pole-Zero Map
              </span>
              <div className="h-44 w-full flex items-center justify-center">
                <svg viewBox="-1.5 -1.5 3 3" className="w-full h-full">
                  {/* Grid & Axis */}
                  <line x1="-1.4" y1="0" x2="1.4" y2="0" stroke="#cbd5e1" strokeWidth="0.02" />
                  <line x1="0" y1="-1.4" x2="0" y2="1.4" stroke="#cbd5e1" strokeWidth="0.02" />
                  
                  {/* Unit Circle |z| = 1 */}
                  <circle cx="0" cy="0" r="1.0" fill="none" stroke="#94a3b8" strokeWidth="0.03" strokeDasharray="0.08, 0.04" />
                  
                  {/* Zeros (O - RAG) */}
                  {resRagState.zeros.map((z, idx) => (
                    <circle key={`zero-${idx}`} cx={z.re} cy={-z.im} r="0.08" fill="none" stroke="#d97706" strokeWidth="0.04" />
                  ))}

                  {/* Poles (X - RES) */}
                  {resRagState.poles.map((p, idx) => (
                    <g key={`pole-${idx}`}>
                      <line x1={p.re - 0.07} y1={-p.im - 0.07} x2={p.re + 0.07} y2={-p.im + 0.07} stroke="#b91c1c" strokeWidth="0.04" />
                      <line x1={p.re - 0.07} y1={-p.im + 0.07} x2={p.re + 0.07} y2={-p.im - 0.07} stroke="#b91c1c" strokeWidth="0.04" />
                    </g>
                  ))}
                </svg>
              </div>
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>Dashed: Unit Circle |z|=1</span>
                <span><strong className="text-red-700">✕</strong> Poles, <strong className="text-amber-700">○</strong> Zeros</span>
              </div>
            </div>

            {/* DTFT Frequency Response Plot */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <span className="text-[10px] font-mono font-bold text-slate-500 block uppercase">
                DTFT Resonant Gain |H(e^jω)|
              </span>
              <div className="h-44 w-full flex items-center justify-center">
                <svg viewBox="0 0 3.2 8" className="w-full h-full overflow-visible">
                  <line x1="0" y1="7.5" x2="3.14" y2="7.5" stroke="#cbd5e1" strokeWidth="0.08" />
                  <polyline
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="0.12"
                    points={resRagState.frequencySpectrum.map(s => `${s.omega},${7.5 - Math.min(7, s.magnitude * 0.8)}`).join(' ')}
                  />
                  <line x1={resRagState.peakResonantFreqRad} y1="0.5" x2={resRagState.peakResonantFreqRad} y2="7.5" stroke="#ef4444" strokeWidth="0.04" strokeDasharray="0.1, 0.1" />
                </svg>
              </div>
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>Peak ω: {resRagState.peakResonantFreqRad} rad</span>
                <span>Emergent Δt: {resRagState.emergentTimeStep}</span>
              </div>
            </div>

          </div>

          {/* Parameter Sliders */}
          <div className="space-y-3 pt-2">
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-600">
                <span>RES Memory Decay (a₁):</span>
                <span className="font-mono font-bold text-amber-800">{params.resMemoryDecay}</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="0.95"
                step="0.05"
                value={params.resMemoryDecay}
                onChange={(e) => setParams(prev => ({ ...prev, resMemoryDecay: parseFloat(e.target.value) }))}
                className="w-full accent-amber-600 cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-600">
                <span>RES Coupling Rigidity (a₂):</span>
                <span className="font-mono font-bold text-amber-800">{params.resCoupling}</span>
              </div>
              <input
                type="range"
                min="-0.6"
                max="0.1"
                step="0.02"
                value={params.resCoupling}
                onChange={(e) => setParams(prev => ({ ...prev, resCoupling: parseFloat(e.target.value) }))}
                className="w-full accent-amber-600 cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-600">
                <span>RAG Active Drive (b₀):</span>
                <span className="font-mono font-bold text-amber-800">{params.ragActiveDrive}</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="2.0"
                step="0.1"
                value={params.ragActiveDrive}
                onChange={(e) => setParams(prev => ({ ...prev, ragActiveDrive: parseFloat(e.target.value) }))}
                className="w-full accent-amber-600 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* MODEL A: BULAQUEÑA IGG NATURAL GRADIENT ENGINE */}
        <div className="rounded-2xl border border-blue-200 bg-white p-6 sm:p-7 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-blue-100 pb-3">
            <div>
              <span className="text-xs font-mono uppercase font-bold text-blue-800">Model A · Information Geometry</span>
              <h2 className="text-lg font-serif font-bold text-slate-900">Bulaqueña IGG Software Engine</h2>
            </div>
            <span className="text-xs font-mono font-semibold text-blue-800">
              ||IGG||_g = {iggResult.iggMagnitude.toFixed(4)}
            </span>
          </div>

          {/* Master IGG Equation */}
          <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs font-mono">
            <MathDisplay block math="\text{IGG}^i = g^{ij}(\theta)\frac{\partial \Phi}{\partial \theta^j}, \quad \Delta\tau = \int \|\text{IGG}\|_g d\lambda" />
          </div>

          {/* Metrics Readout Grid */}
          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] text-slate-500 block uppercase">Fisher Trace Tr(g)</span>
              <span className="text-base font-bold text-slate-900">{fisherMetric.trace.toFixed(4)}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] text-slate-500 block uppercase">Determinant det(g)</span>
              <span className="text-base font-bold text-slate-900">{fisherMetric.determinant.toFixed(4)}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] text-slate-500 block uppercase">Natural Step (IGG¹)</span>
              <span className="text-base font-bold text-blue-700">{iggResult.igg1.toFixed(4)}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] text-slate-500 block uppercase">Proper Time Rate dτ/dλ</span>
              <span className="text-base font-bold text-emerald-700">{iggResult.dtauRate.toFixed(4)}</span>
            </div>
          </div>

          {/* IGG Parameter Sliders */}
          <div className="space-y-3 pt-2">
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-600">
                <span>Informational Gradient (∂Φ/∂θ₁):</span>
                <span className="font-mono font-bold text-blue-800">{gradPhi1}</span>
              </div>
              <input
                type="range"
                min="-2.5"
                max="2.5"
                step="0.1"
                value={gradPhi1}
                onChange={(e) => setGradPhi1(parseFloat(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-600">
                <span>Informational Gradient (∂Φ/∂θ₂):</span>
                <span className="font-mono font-bold text-blue-800">{gradPhi2}</span>
              </div>
              <input
                type="range"
                min="-2.5"
                max="2.5"
                step="0.1"
                value={gradPhi2}
                onChange={(e) => setGradPhi2(parseFloat(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-600">
                <span>Quantum State Variance (θ₂):</span>
                <span className="font-mono font-bold text-blue-800">{theta2}</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="2.0"
                step="0.05"
                value={theta2}
                onChange={(e) => setTheta2(parseFloat(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>
          </div>
        </div>

      </div>

      {/* DUAL-LAYER SYNTHESIS COUPLING CARD */}
      <div className="rounded-2xl border border-indigo-200 bg-white p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-100 pb-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider">
              Dual-Layer Synthesis Engine (Factors 99 & 100)
            </span>
            <h3 className="text-2xl font-serif font-bold text-slate-900">
              Coupling Layer 0 Software Engine to Layer 1 Resonant Voice
            </h3>
          </div>
          <div className="px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-xl font-mono text-xs text-indigo-900">
            Coherence Index: <strong className="text-indigo-600 font-bold">{dualCoupling.coherenceIndex * 100}%</strong>
          </div>
        </div>

        <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2">
          <div className="font-semibold text-slate-900">Real-Time Coupling Diagnostic:</div>
          <p>{dualCoupling.dualVerdict}</p>
          <div className="flex flex-wrap gap-4 pt-2 font-mono text-slate-600 text-[11px]">
            <span>Layer 0 Clock Rate: <strong className="text-blue-800">{dualCoupling.layer0ClockRate}</strong></span>
            <span>Layer 1 Resonant Peak: <strong className="text-amber-800">{dualCoupling.layer1ResonantFreq} rad</strong></span>
          </div>
        </div>
      </div>

    </div>
  );
};
