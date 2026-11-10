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
    <div className="space-y-8 max-w-6xl mx-auto pb-20 text-[#0C1836] dark:text-[#FDFBF7]">
      
      {/* Title & Banner */}
      <div className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAE2D2] dark:border-[#1E293B] pb-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-semibold text-[#EA580C] uppercase tracking-wider">
              Interactive Physics Workbench · Frequency &amp; State Space
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif font-normal text-[#081026] dark:text-white tracking-tight">
              Tassan RES-RAG vs. Bulaqueña IGG Simulation Laboratory
            </h1>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className={`px-2.5 py-1 rounded-xs border font-semibold ${resRagState.isStable ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300' : 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300'}`}>
              Pole Stability: {resRagState.isStable ? 'STABLE (|z| < 1)' : 'UNSTABLE'}
            </span>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD9FC] leading-relaxed font-light">
          Manipulate Jean-Charles Tassan's structural memory coefficients (RES) and active generative flow (RAG) in the discrete Z-domain alongside the Bulaqueña Information Geometric Gradient (IGG) engine. Observe how the Layer 0 computational engine couples into Layer 1 macroscopic acoustic rhythms.
        </p>
      </div>

      {/* DUAL INTERACTIVE PANELS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* MODEL B: TASSAN RES-RAG FREQUENCY DOMAIN */}
        <div className="rounded-2xl border border-[#FDBA74] dark:border-[#C2410C] bg-white dark:bg-[#0B1530] p-6 sm:p-7 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-[#FDBA74]/30 pb-3">
            <div>
              <span className="text-xs font-mono uppercase font-bold text-[#9A3412] dark:text-[#FDBA74]">Model B · Z-Transform Domain</span>
              <h2 className="text-base sm:text-lg font-serif font-normal text-[#081026] dark:text-white">RES-RAG Transfer Function H(z)</h2>
            </div>
            <span className="text-xs font-mono font-semibold text-[#9A3412] dark:text-[#FDBA74]">
              γ = ||RAG||/||RES|| = {resRagState.balanceGamma}
            </span>
          </div>

          {/* Master Z-Transform Equation */}
          <div className="p-3 bg-[#FFF7ED] dark:bg-[#060B1C] rounded-xl border border-[#FDBA74]/40 text-xs font-mono overflow-x-auto text-center">
            <MathDisplay block math="H(z) = \frac{\text{RAG}(z)}{\text{RES}(z)} = \frac{b_0 + b_1 z^{-1} + b_2 z^{-2}}{1 - a_1 z^{-1} - a_2 z^{-2}}" />
          </div>

          {/* Pole-Zero Complex Plane & Frequency Spectrum */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Pole-Zero Plot (SVG) */}
            <div className="p-3 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] space-y-2">
              <span className="text-[10px] font-mono font-bold text-[#64748B] dark:text-[#94B2F5] block uppercase">
                Z-Plane Complex Pole-Zero Map
              </span>
              <div className="h-44 w-full flex items-center justify-center">
                <svg viewBox="-1.5 -1.5 3 3" className="w-full h-full">
                  {/* Grid & Axis */}
                  <line x1="-1.4" y1="0" x2="1.4" y2="0" stroke="#64748B" strokeWidth="0.02" />
                  <line x1="0" y1="-1.4" x2="0" y2="1.4" stroke="#64748B" strokeWidth="0.02" />
                  
                  {/* Unit Circle |z| = 1 */}
                  <circle cx="0" cy="0" r="1.0" fill="none" stroke="#94A3B8" strokeWidth="0.03" strokeDasharray="0.08, 0.04" />
                  
                  {/* Zeros (O - RAG) */}
                  {resRagState.zeros.map((z, idx) => (
                    <circle key={`zero-${idx}`} cx={z.re} cy={-z.im} r="0.08" fill="none" stroke="#D97706" strokeWidth="0.04" />
                  ))}

                  {/* Poles (X - RES) */}
                  {resRagState.poles.map((p, idx) => (
                    <g key={`pole-${idx}`}>
                      <line x1={p.re - 0.07} y1={-p.im - 0.07} x2={p.re + 0.07} y2={-p.im + 0.07} stroke="#B91C1C" strokeWidth="0.04" />
                      <line x1={p.re - 0.07} y1={-p.im + 0.07} x2={p.re + 0.07} y2={-p.im - 0.07} stroke="#B91C1C" strokeWidth="0.04" />
                    </g>
                  ))}
                </svg>
              </div>
              <div className="flex justify-between text-[10px] font-mono text-[#64748B] dark:text-[#94B2F5]">
                <span>Dashed: Unit Circle |z|=1</span>
                <span><strong className="text-red-700">✕</strong> Poles, <strong className="text-amber-700">○</strong> Zeros</span>
              </div>
            </div>

            {/* DTFT Frequency Response Plot */}
            <div className="p-3 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] space-y-2">
              <span className="text-[10px] font-mono font-bold text-[#64748B] dark:text-[#94B2F5] block uppercase">
                DTFT Resonant Gain |H(e^jω)|
              </span>
              <div className="h-44 w-full flex items-center justify-center">
                <svg viewBox="0 0 3.2 8" className="w-full h-full overflow-visible">
                  <line x1="0" y1="7.5" x2="3.14" y2="7.5" stroke="#64748B" strokeWidth="0.08" />
                  <polyline
                    fill="none"
                    stroke="#D97706"
                    strokeWidth="0.12"
                    points={resRagState.frequencySpectrum.map(s => `${s.omega},${7.5 - Math.min(7, s.magnitude * 0.8)}`).join(' ')}
                  />
                  <line x1={resRagState.peakResonantFreqRad} y1="0.5" x2={resRagState.peakResonantFreqRad} y2="7.5" stroke="#EF4444" strokeWidth="0.04" strokeDasharray="0.1, 0.1" />
                </svg>
              </div>
              <div className="flex justify-between text-[10px] font-mono text-[#64748B] dark:text-[#94B2F5]">
                <span>Peak ω: {resRagState.peakResonantFreqRad} rad</span>
                <span>Emergent Δt: {resRagState.emergentTimeStep}</span>
              </div>
            </div>

          </div>

          {/* Parameter Sliders */}
          <div className="space-y-3 pt-2">
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-[#64748B] dark:text-[#94B2F5] font-mono">
                <span>RES Memory Decay (a₁):</span>
                <span className="font-bold text-[#9A3412] dark:text-[#FDBA74]">{params.resMemoryDecay}</span>
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
              <div className="flex justify-between text-xs text-[#64748B] dark:text-[#94B2F5] font-mono">
                <span>RES Coupling Rigidity (a₂):</span>
                <span className="font-bold text-[#9A3412] dark:text-[#FDBA74]">{params.resCoupling}</span>
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
              <div className="flex justify-between text-xs text-[#64748B] dark:text-[#94B2F5] font-mono">
                <span>RAG Active Drive (b₀):</span>
                <span className="font-bold text-[#9A3412] dark:text-[#FDBA74]">{params.ragActiveDrive}</span>
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
        <div className="rounded-2xl border border-[#CBD9FC] dark:border-[#1E3A8A] bg-white dark:bg-[#0B1530] p-6 sm:p-7 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-[#CBD9FC]/40 pb-3">
            <div>
              <span className="text-xs font-mono uppercase font-bold text-[#1A3670] dark:text-[#93C5FD]">Model A · Information Geometry</span>
              <h2 className="text-base sm:text-lg font-serif font-normal text-[#081026] dark:text-white">Bulaqueña IGG Software Engine</h2>
            </div>
            <span className="text-xs font-mono font-semibold text-[#1A3670] dark:text-[#93C5FD]">
              ||IGG||_g = {iggResult.iggMagnitude.toFixed(4)}
            </span>
          </div>

          {/* Master IGG Equation */}
          <div className="p-3 bg-[#F4F7FF] dark:bg-[#060B1C] rounded-xl border border-[#CBD9FC]/40 text-xs font-mono overflow-x-auto text-center">
            <MathDisplay block math="\text{IGG}^i = g^{ij}(\theta)\frac{\partial \Phi}{\partial \theta^j}, \quad \Delta\tau = \int \|\text{IGG}\|_g d\lambda" />
          </div>

          {/* Metrics Readout Grid */}
          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B]">
              <span className="text-[10px] text-[#64748B] dark:text-[#94B2F5] block uppercase">Fisher Trace Tr(g)</span>
              <span className="text-base font-bold text-[#081026] dark:text-white">{fisherMetric.trace.toFixed(4)}</span>
            </div>
            <div className="p-3 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B]">
              <span className="text-[10px] text-[#64748B] dark:text-[#94B2F5] block uppercase">Determinant det(g)</span>
              <span className="text-base font-bold text-[#081026] dark:text-white">{fisherMetric.determinant.toFixed(4)}</span>
            </div>
            <div className="p-3 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B]">
              <span className="text-[10px] text-[#64748B] dark:text-[#94B2F5] block uppercase">Natural Step (IGG¹)</span>
              <span className="text-base font-bold text-[#1A3670] dark:text-[#93C5FD]">{iggResult.igg1.toFixed(4)}</span>
            </div>
            <div className="p-3 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B]">
              <span className="text-[10px] text-[#64748B] dark:text-[#94B2F5] block uppercase">Proper Time Rate dτ/dλ</span>
              <span className="text-base font-bold text-emerald-700 dark:text-emerald-400">{iggResult.dtauRate.toFixed(4)}</span>
            </div>
          </div>

          {/* IGG Parameter Sliders */}
          <div className="space-y-3 pt-2">
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-[#64748B] dark:text-[#94B2F5] font-mono">
                <span>Informational Gradient (∂Φ/∂θ₁):</span>
                <span className="font-bold text-[#1A3670] dark:text-[#93C5FD]">{gradPhi1}</span>
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
              <div className="flex justify-between text-xs text-[#64748B] dark:text-[#94B2F5] font-mono">
                <span>Informational Gradient (∂Φ/∂θ₂):</span>
                <span className="font-bold text-[#1A3670] dark:text-[#93C5FD]">{gradPhi2}</span>
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
              <div className="flex justify-between text-xs text-[#64748B] dark:text-[#94B2F5] font-mono">
                <span>Quantum State Variance (θ₂):</span>
                <span className="font-bold text-[#1A3670] dark:text-[#93C5FD]">{theta2}</span>
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
      <div className="rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-[#0B1530] p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-100 dark:border-indigo-900 pb-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">
              Dual-Layer Synthesis Engine (Factors 99 &amp; 100)
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#081026] dark:text-white">
              Coupling Layer 0 Software Engine to Layer 1 Resonant Voice
            </h3>
          </div>
          <div className="px-3.5 py-1.5 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 rounded-lg font-mono text-xs text-indigo-900 dark:text-indigo-300">
            Coherence Index: <strong className="text-indigo-600 dark:text-indigo-400 font-bold">{(dualCoupling.coherenceIndex * 100).toFixed(0)}%</strong>
          </div>
        </div>

        <div className="p-4 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-xl border border-indigo-100 dark:border-indigo-900 text-xs text-[#334155] dark:text-[#CBD9FC] leading-relaxed space-y-2 font-light">
          <div className="font-semibold text-[#081026] dark:text-white font-['Poppins']">Real-Time Coupling Diagnostic:</div>
          <p>{dualCoupling.dualVerdict}</p>
          <div className="flex flex-wrap gap-4 pt-2 font-mono text-[#64748B] dark:text-[#94B2F5] text-[11px]">
            <span>Layer 0 Clock Rate: <strong className="text-blue-800 dark:text-blue-400">{dualCoupling.layer0ClockRate}</strong></span>
            <span>Layer 1 Resonant Peak: <strong className="text-amber-800 dark:text-amber-400">{dualCoupling.layer1ResonantFreq} rad</strong></span>
          </div>
        </div>
      </div>

    </div>
  );
};
