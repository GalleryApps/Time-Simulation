import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { MathDisplay } from './MathDisplay';
import { IGRT_MAPPING, OBSERVATIONAL_DISCRIMINATORS } from '../types/manuscriptData';

export const IgrtSynthesisLabView: React.FC = () => {
  // Interactive Simulation Controls for Section 6.5
  const [omega, setOmega] = useState<number>(1.5); // angular frequency
  const [x0, setX0] = useState<number>(0.8); // oscillation amplitude
  const [couplingEps, setCouplingEps] = useState<number>(0.05); // matter-clock coupling
  const [phaseDelta, setPhaseDelta] = useState<number>(0.0); // Lissajous phase offset
  const [activeTab, setActiveTab] = useState<'equations' | 'signatures' | 'mapping' | 'program'>('equations');
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Audio Context Ref for 2:1 Resonance Synthesis
  const audioCtxRef = useRef<AudioContext | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);

  const toggleHarmonicAudio = useCallback(() => {
    if (isPlayingAudio) {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
      setIsPlayingAudio(false);
    } else {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        const baseFreq = 220 * (omega / 1.5);

        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        const gain2 = ctx.createGain();
        const masterGain = ctx.createGain();

        // Osc1 = Base optical clock frequency
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(baseFreq, ctx.currentTime);
        gain1.gain.setValueAtTime(0.08, ctx.currentTime);

        // Osc2 = PTA 2:1 harmonic overtone
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(baseFreq * 2, ctx.currentTime);
        gain2.gain.setValueAtTime(0.05, ctx.currentTime);

        masterGain.gain.setValueAtTime(0.12, ctx.currentTime);

        osc1.connect(gain1);
        osc2.connect(gain2);
        gain1.connect(masterGain);
        gain2.connect(masterGain);
        masterGain.connect(ctx.destination);

        osc1.start();
        osc2.start();

        audioCtxRef.current = ctx;
        osc1Ref.current = osc1;
        osc2Ref.current = osc2;
        setIsPlayingAudio(true);
      } catch (e) {
        console.error("Web Audio error", e);
      }
    }
  }, [isPlayingAudio, omega]);

  useEffect(() => {
    if (isPlayingAudio && audioCtxRef.current && osc1Ref.current && osc2Ref.current) {
      const baseFreq = 220 * (omega / 1.5);
      osc1Ref.current.frequency.setTargetAtTime(baseFreq, audioCtxRef.current.currentTime, 0.05);
      osc2Ref.current.frequency.setTargetAtTime(baseFreq * 2, audioCtxRef.current.currentTime, 0.05);
    }
  }, [omega, isPlayingAudio]);

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  // Compute waveform points and Lissajous trajectory for the 2:1 ratio test
  const waveforms = useMemo(() => {
    const points = [];
    const steps = 120;
    const tMax = 10;
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * tMax;
      // Clock frequency modulation at omega: delta_nu/nu = eps * x0 * cos(omega * t)
      const clockMod = couplingEps * x0 * Math.cos(omega * t);
      // PTA timing residual oscillates at 2 * omega: delta_t_PTA ~ x0^2 * sin(2 * omega * t + phaseDelta)
      const ptaResidual = 0.5 * Math.pow(x0, 2) * Math.sin(2 * omega * t + phaseDelta);
      points.push({ t, clockMod, ptaResidual });
    }
    return points;
  }, [omega, x0, couplingEps, phaseDelta]);

  // Lissajous curve points: x = cos(omega * t), y = sin(2 * omega * t + phaseDelta)
  const lissajousPoints = useMemo(() => {
    const pts = [];
    const steps = 180;
    for (let i = 0; i <= steps; i++) {
      const theta = (i / steps) * 2 * Math.PI;
      const x = 100 + 75 * Math.cos(theta);
      const y = 100 - 75 * Math.sin(2 * theta + phaseDelta);
      pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return pts.join(' ');
  }, [phaseDelta]);

  const fPTA = (omega / Math.PI).toFixed(3);
  const fClock = (omega / (2 * Math.PI)).toFixed(3);

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-20 text-[#0C1836] dark:text-[#FDFBF7]">
      
      {/* Header Banner - Oxford Monograph Masthead */}
      <div className="rounded-2xl p-6 sm:p-8 space-y-6 bg-white dark:bg-[#0B1530] border border-[#EAE2D2] dark:border-[#1E293B] shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAE2D2] dark:border-[#1E293B] pb-5">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-[#EA580C] uppercase tracking-wider">
              Section 6 · The IGRT Unified Synthesis
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif font-normal text-[#081026] dark:text-white tracking-tight">
              Information-Geometric Resonant Time (IGRT)
            </h1>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD9FC] max-w-3xl leading-relaxed font-light">
              Constructed directly from the two frameworks and quantum information foundations: IGRT identifies the <strong>Fisher-Rao distance</strong> traversed by the retention-generation events of RES=RAG with the <strong>proper time</strong> of General Relativity, and derives the scalar field <MathDisplay math="\psi" /> from <strong>vacuum-subtracted entanglement entropy density</strong>.
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#081026] dark:text-[#CBD9FC] bg-[#F4EFE6] dark:bg-[#081026] px-3.5 py-1.5 rounded-lg border border-[#EAE2D2] dark:border-[#1E293B]">
            <span className="font-serif font-bold text-[#1A3670] dark:text-[#93C5FD]">Dual-Layer Architecture</span>
            <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
            <span className="text-[#475569] dark:text-[#94B2F5]">Microscopic Metric + Macroscopic Rhythm</span>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap gap-2 text-xs font-medium">
          <button
            onClick={() => setActiveTab('equations')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'equations'
                ? 'bg-[#0C1836] dark:bg-[#3B82F6] text-[#FDFBF7] font-serif font-semibold shadow-xs'
                : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] hover:bg-white border border-[#EAE2D2] dark:border-[#1E293B]'
            }`}
          >
            Core Identification &amp; Field Equations (Eq. 10–16)
          </button>
          <button
            onClick={() => setActiveTab('signatures')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'signatures'
                ? 'bg-[#0C1836] dark:bg-[#3B82F6] text-[#FDFBF7] font-serif font-semibold shadow-xs'
                : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] hover:bg-white border border-[#EAE2D2] dark:border-[#1E293B]'
            }`}
          >
            Interactive 2:1 Resonance &amp; Lissajous Synthesizer
          </button>
          <button
            onClick={() => setActiveTab('mapping')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'mapping'
                ? 'bg-[#0C1836] dark:bg-[#3B82F6] text-[#FDFBF7] font-serif font-semibold shadow-xs'
                : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] hover:bg-white border border-[#EAE2D2] dark:border-[#1E293B]'
            }`}
          >
            Table 8: Concept Mapping Matrix
          </button>
          <button
            onClick={() => setActiveTab('program')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'program'
                ? 'bg-[#0C1836] dark:bg-[#3B82F6] text-[#FDFBF7] font-serif font-semibold shadow-xs'
                : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] hover:bg-white border border-[#EAE2D2] dark:border-[#1E293B]'
            }`}
          >
            Open Problems &amp; 8-Step Research Program
          </button>
        </div>
      </div>

      {/* TAB 1: FORMAL EQUATIONS */}
      {activeTab === 'equations' && (
        <div className="space-y-6">
          
          {/* Postulate 1: Core Identification */}
          <div className="rounded-2xl p-6 sm:p-8 shadow-xs space-y-4 bg-white dark:bg-[#0B1530] border border-[#EAE2D2] dark:border-[#1E293B]">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-xs bg-[#EBF0FE] dark:bg-[#1E3A8A]/40 text-[#1A3670] dark:text-[#93C5FD] text-xs font-mono font-bold border border-[#CBD9FC] dark:border-[#1E3A8A]">
                Postulate 1 · Equation (10)
              </span>
              <h2 className="text-lg font-serif font-normal text-[#081026] dark:text-white">
                The Core Equivalence: Fisher-Rao Distance = Proper Time
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD9FC] leading-relaxed font-light">
              IGRT equates the Fisher-Rao length along the trajectory of distinguishable states on statistical manifold <MathDisplay math="\mathcal{S}" /> with the proper time along the worldline in spacetime:
            </p>
            <div className="p-4 bg-[#F9F6F0] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] text-center font-mono overflow-x-auto">
              <MathDisplay math="\Delta\tau = \int \sqrt{g_{ij}\dot{\theta}^i\dot{\theta}^j} \, d\lambda \;\equiv\; \int \sqrt{-g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu} \, d\lambda" />
            </div>
            <p className="text-xs text-[#64748B] dark:text-[#94B2F5] leading-relaxed font-light">
              Here <MathDisplay math="\lambda" /> is an unphysical monotonic gauge label. Each integrand is homogeneous of degree one in velocities, guaranteeing strict <strong>reparametrization invariance</strong>. The left-hand side counts distinguishable states traversed (supplying the measure RES=RAG lacks); the right-hand side is the proper time of General Relativity (which IGEG inherits).
            </p>
            <div className="p-3 bg-[#F4F7FF] dark:bg-[#060B1C] rounded-xl border border-[#CBD9FC] dark:border-[#1E3A8A] text-xs text-[#1A3670] dark:text-[#93C5FD]">
              <strong>Discrete Event Sum (Eq. 11):</strong> <MathDisplay math="\Delta\tau_N = \sum_{k=1}^N \sqrt{g_{ij}(\theta_k)\Delta\theta_k^i\Delta\theta_k^j} \;\longrightarrow\; \Delta\tau \quad (N\to\infty)" />
            </div>
          </div>

          {/* Derivation of Scalar Field from Entanglement */}
          <div className="rounded-2xl p-6 sm:p-8 shadow-xs space-y-4 bg-white dark:bg-[#0B1530] border border-[#EAE2D2] dark:border-[#1E293B]">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-xs bg-[#FEF3C7] dark:bg-[#78350F]/40 text-[#92400E] dark:text-[#FDE68A] text-xs font-mono font-bold border border-[#FCD34D] dark:border-[#B45309]">
                Derivation · Equations (13)–(16)
              </span>
              <h2 className="text-lg font-serif font-normal text-[#081026] dark:text-white">
                Resolving Circularity: <MathDisplay math="\psi" /> as Emergent Entanglement Density
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD9FC] leading-relaxed font-light">
              To resolve the circularity of the IGEG engine clock, IGRT invokes the <strong>Page-Wootters mechanism</strong>. A stationary global state obeys <MathDisplay math="(\hat{H}_C + \hat{H}_S)|\Psi\rangle\rangle = 0" />, yielding ordinary Schrödinger evolution for the conditional state <MathDisplay math="|\phi_S(t)\rangle = \langle t|_C |\Psi\rangle\rangle" />:
            </p>
            <div className="p-4 bg-[#F9F6F0] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] text-center font-mono overflow-x-auto">
              <MathDisplay math="\psi^2(x) = \kappa_\psi \lim_{A \to x} \frac{S(\rho_A) - S(\sigma_A)}{\text{Vol}(A)}" />
            </div>
            <p className="text-xs text-[#64748B] dark:text-[#94B2F5] leading-relaxed font-light">
              The scalar field <MathDisplay math="\psi" /> is thereby a coarse-grained descriptor of the vacuum-subtracted entanglement entropy density rather than an independent primitive. Fisher geometry and entanglement are linked via the second-order expansion of relative entropy:
            </p>
            <div className="p-3 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] text-center font-mono text-xs overflow-x-auto">
              <MathDisplay math="D(p_{\theta+d\theta} \,\|\, p_\theta) = \frac{1}{2} g_{ij} d\theta^i d\theta^j + \mathcal{O}(|d\theta|^3)" />
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: INTERACTIVE DUAL OBSERVABLE SIMULATOR & LISSAJOUS SYNTHESIZER */}
      {activeTab === 'signatures' && (
        <div className="space-y-6">
          
          <div className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 rounded-xs bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold border border-emerald-200 dark:border-emerald-800">
                  Section 6.5 · Equations (19) &amp; (20)
                </span>
                <h2 className="text-xl font-serif font-normal text-[#081026] dark:text-white">
                  The 2:1 Harmonic Frequency Dual Signature &amp; Lissajous Laboratory
                </h2>
                <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD9FC] leading-relaxed font-light">
                  When displaced from equilibrium <MathDisplay math="\psi = \psi_0 + x" />, the field oscillates at frequency <MathDisplay math="\omega^2 = V''(\psi_0)" />. An oscillating ultralight scalar field imprints a periodic modulation on <strong>Pulsar Timing Arrays (PTA)</strong> at <MathDisplay math="f_{\text{PTA}} = \omega/\pi" /> (twice the frequency), while optical atomic clock comparisons oscillate at <MathDisplay math="f_{\text{clock}} = \omega/(2\pi)" />.
                </p>
              </div>

              <button
                onClick={toggleHarmonicAudio}
                className="shrink-0 px-4 py-2.5 rounded-xl bg-[#0C1836] dark:bg-[#EA580C] text-white text-xs font-mono shadow-xs hover:bg-[#1A3670] transition-colors flex items-center gap-2"
              >
                <span>{isPlayingAudio ? '■ Mute 2:1 Audio Chord' : '▶ Audition 2:1 Harmonic Chord'}</span>
              </button>
            </div>

            {/* Sliders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] text-xs font-mono">
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#64748B] dark:text-[#94B2F5]">Field Mass / Curvature (ω):</span>
                  <span className="font-bold text-purple-700 dark:text-purple-400">{omega.toFixed(2)} rad/s</span>
                </div>
                <input
                  type="range"
                  min={0.5}
                  max={3.0}
                  step={0.1}
                  value={omega}
                  onChange={(e) => setOmega(parseFloat(e.target.value))}
                  className="w-full accent-purple-600"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#64748B] dark:text-[#94B2F5]">Scalar Amplitude (x₀):</span>
                  <span className="font-bold text-blue-700 dark:text-blue-400">{x0.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min={0.1}
                  max={1.5}
                  step={0.05}
                  value={x0}
                  onChange={(e) => setX0(parseFloat(e.target.value))}
                  className="w-full accent-blue-600"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#64748B] dark:text-[#94B2F5]">Clock Coupling (ε):</span>
                  <span className="font-bold text-amber-700 dark:text-amber-400">{couplingEps.toFixed(3)}</span>
                </div>
                <input
                  type="range"
                  min={0.01}
                  max={0.2}
                  step={0.01}
                  value={couplingEps}
                  onChange={(e) => setCouplingEps(parseFloat(e.target.value))}
                  className="w-full accent-amber-600"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#64748B] dark:text-[#94B2F5]">Phase Lag (δ):</span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400">{(phaseDelta / Math.PI).toFixed(2)} π</span>
                </div>
                <input
                  type="range"
                  min={0.0}
                  max={Math.PI}
                  step={0.05}
                  value={phaseDelta}
                  onChange={(e) => setPhaseDelta(parseFloat(e.target.value))}
                  className="w-full accent-emerald-600"
                />
              </div>
            </div>

            {/* Frequency Display Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-900">
                <div className="text-blue-800 dark:text-blue-300 font-bold uppercase text-[10px]">Atomic Clock Modulation (Eq. 20)</div>
                <div className="text-lg font-bold text-blue-950 dark:text-blue-200 mt-0.5">{fClock} Hz</div>
                <div className="text-[10px] text-blue-600 dark:text-blue-400">f_clock = ω / 2π</div>
              </div>
              <div className="p-3 bg-purple-50 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-900">
                <div className="text-purple-800 dark:text-purple-300 font-bold uppercase text-[10px]">Pulsar Timing Residual Line (Eq. 19)</div>
                <div className="text-lg font-bold text-purple-950 dark:text-purple-200 mt-0.5">{fPTA} Hz</div>
                <div className="text-[10px] text-purple-600 dark:text-purple-400">f_PTA = 2ω / 2π = ω / π</div>
              </div>
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-900">
                <div className="text-emerald-800 dark:text-emerald-300 font-bold uppercase text-[10px]">Harmonic Ratio (Smoking Gun)</div>
                <div className="text-lg font-bold text-emerald-950 dark:text-emerald-200 mt-0.5">2.000000 : 1</div>
                <div className="text-[10px] text-emerald-600 dark:text-emerald-400">Exact 2:1 octave lock</div>
              </div>
            </div>

            {/* Dual Graph: Simulated Waveforms + 2:1 Lissajous Phase Portrait */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              
              {/* Waveform Time-Series */}
              <div className="lg:col-span-2 space-y-2 p-4 bg-[#060B1C] rounded-xl border border-[#142B5B] text-white">
                <div className="flex flex-wrap justify-between text-xs font-mono gap-2">
                  <span className="text-blue-400 font-semibold">━ Optical Clock Shift (δν/ν) [1x Frequency]</span>
                  <span className="text-purple-400 font-semibold">━ Pulsar Timing Residual (δt_PTA) [2x Frequency]</span>
                </div>
                <div className="h-44 w-full relative border-t border-b border-slate-700/60 flex items-center">
                  <div className="absolute inset-x-0 h-px bg-slate-700" />
                  
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 120 100" preserveAspectRatio="none">
                    <polyline
                      fill="none"
                      stroke="#60a5fa"
                      strokeWidth="2.5"
                      points={waveforms.map((p, idx) => `${idx},${50 - p.clockMod * 350}`).join(' ')}
                    />
                    <polyline
                      fill="none"
                      stroke="#c084fc"
                      strokeWidth="2.5"
                      points={waveforms.map((p, idx) => `${idx},${50 - p.ptaResidual * 60}`).join(' ')}
                    />
                  </svg>
                </div>
                <div className="text-[11px] font-mono text-slate-400 text-center">
                  Time Evolution <MathDisplay math="\tau" /> (Simulated Proper Time Seconds)
                </div>
              </div>

              {/* 2:1 Lissajous Resonator */}
              <div className="p-4 bg-[#060B1C] rounded-xl border border-[#142B5B] flex flex-col items-center justify-between">
                <div className="text-xs font-mono text-[#FDBA74] uppercase text-center font-bold">
                  2:1 Lissajous Phase Portrait
                </div>
                <div className="h-40 w-40 relative flex items-center justify-center my-1">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Crosshair */}
                    <line x1="20" y1="100" x2="180" y2="100" stroke="#1E293B" strokeWidth="1" />
                    <line x1="100" y1="20" x2="100" y2="180" stroke="#1E293B" strokeWidth="1" />
                    
                    {/* 2:1 Lissajous Orbit */}
                    <polyline
                      fill="none"
                      stroke="#F97316"
                      strokeWidth="2.5"
                      points={lissajousPoints}
                    />
                  </svg>
                </div>
                <div className="text-[10px] font-mono text-slate-400 text-center">
                  Trajectory: (x(t), y(t)) = (cos ωt, sin 2ωt)
                </div>
              </div>

            </div>

            {/* Explanation Note */}
            <div className="p-3.5 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] text-xs text-[#475569] dark:text-[#CBD9FC] space-y-1 font-light">
              <span className="font-bold text-[#081026] dark:text-white">Observational Adjudication Protocol:</span>
              <p>
                Any search finding both a pulsar-timing residual line and an optical-clock comparison line must observe them in the <strong>exact frequency ratio of 2:1</strong>. This provides an unambiguous experimental test separating IGRT from alternative scalar-field models.
              </p>
            </div>

          </div>

        </div>
      )}

      {/* TAB 3: CONCEPT MAPPING MATRIX */}
      {activeTab === 'mapping' && (
        <div className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-8 shadow-xs space-y-4">
          <div>
            <h2 className="text-lg font-serif font-normal text-[#081026] dark:text-white">
              Table 8: Dimensional Concept Mapping Across All Three Frameworks
            </h2>
            <p className="text-xs text-[#475569] dark:text-[#CBD9FC] mt-1 font-light">
              Direct mapping of ontological primitives, ordering, metrics, equilibrium states, and observational tests between Model A (IGEG), Model B (RES=RAG), and the IGRT Synthesis.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse font-['Poppins']">
              <thead className="bg-[#F9F6F0] dark:bg-[#081026] border-b border-[#EAE2D2] dark:border-[#1E293B] text-[#64748B] dark:text-[#94B2F5] font-mono text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4 w-32 font-semibold">Physical Dimension</th>
                  <th className="py-3 px-4 text-blue-900 dark:text-blue-300 font-bold">Model A: IGEG</th>
                  <th className="py-3 px-4 text-amber-900 dark:text-amber-300 font-bold">Model B: RES=RAG</th>
                  <th className="py-3 px-4 text-purple-900 dark:text-purple-300 font-bold bg-purple-50/50 dark:bg-purple-950/20">Unified IGRT Synthesis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                {IGRT_MAPPING.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#FDFBF7] dark:hover:bg-[#081026] transition-colors">
                    <td className="py-3 px-4 font-mono font-semibold text-[#081026] dark:text-white">
                      {item.concept}
                    </td>
                    <td className="py-3 px-4 text-[#334155] dark:text-[#CBD9FC] font-light">
                      {item.igeg}
                    </td>
                    <td className="py-3 px-4 text-[#334155] dark:text-[#CBD9FC] font-light">
                      {item.resrag}
                    </td>
                    <td className="py-3 px-4 font-medium text-purple-950 dark:text-purple-200 bg-purple-50/30 dark:bg-purple-950/10">
                      {item.igrt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 4: RESEARCH PROGRAM & FAILURE MODES */}
      {activeTab === 'program' && (
        <div className="space-y-6">
          
          {/* 7 Failure Modes */}
          <div className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-xs bg-rose-100 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 text-xs font-mono font-bold border border-rose-200 dark:border-rose-900">
                Section 6.7
              </span>
              <h2 className="text-lg font-serif font-normal text-[#081026] dark:text-white">
                7 Explicit Failure Modes &amp; Open Problems
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] space-y-1">
                <span className="font-bold text-[#081026] dark:text-white">1. Calibration Constant (l_I):</span>
                <p className="text-[#475569] dark:text-[#CBD9FC] font-light">The constant <MathDisplay math="l_I = \hbar / (2\Delta E)" /> depends on clock energy uncertainty. If it cannot be made universal, Eq. (10) fails as an identity.</p>
              </div>
              <div className="p-3 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] space-y-1">
                <span className="font-bold text-[#081026] dark:text-white">2. Metric Signature:</span>
                <p className="text-[#475569] dark:text-[#CBD9FC] font-light">Fisher metric is positive-definite, while spacetime has Lorentzian signature (−,+,+,+). Spacelike sector requires additional structure.</p>
              </div>
              <div className="p-3 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] space-y-1">
                <span className="font-bold text-[#081026] dark:text-white">3. Definition of ψ:</span>
                <p className="text-[#475569] dark:text-[#CBD9FC] font-light">Eq. (15) depends on an ultraviolet regulator and <MathDisplay math="\kappa_\psi" />. A scheme-independent definition is required.</p>
              </div>
              <div className="p-3 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] space-y-1">
                <span className="font-bold text-[#081026] dark:text-white">4. Matter Coupling:</span>
                <p className="text-[#475569] dark:text-[#CBD9FC] font-light">Coupling of <MathDisplay math="\psi" /> to ordinary matter is unspecified; atomic clock coupling <MathDisplay math="\varepsilon" /> cannot be computed without it.</p>
              </div>
              <div className="p-3 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] space-y-1">
                <span className="font-bold text-[#081026] dark:text-white">5. Choice of Clock:</span>
                <p className="text-[#475569] dark:text-[#CBD9FC] font-light">Page-Wootters conditioning depends on subsystem choice; interacting clocks remain debated in quantum foundations.</p>
              </div>
              <div className="p-3 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] space-y-1">
                <span className="font-bold text-[#081026] dark:text-white">6. Statistical Manifold Degeneracy:</span>
                <p className="text-[#475569] dark:text-[#CBD9FC] font-light">The Fisher metric becomes degenerate rather than zero for fully deterministic zero-entropy distributions.</p>
              </div>
              <div className="p-3 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] space-y-1 md:col-span-2">
                <span className="font-bold text-[#081026] dark:text-white">7. Differing Epistemic Priorities:</span>
                <p className="text-[#475569] dark:text-[#CBD9FC] font-light">IGEG is physics-first; RES=RAG is relation- and consciousness-first. A full merger inevitably demotes one of these priorities unless an observer-inclusive optional layer is formalized.</p>
              </div>
            </div>
          </div>

          {/* 8-Step Research Program */}
          <div className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-xs bg-purple-100 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 text-xs font-mono font-bold border border-purple-200 dark:border-purple-900">
                Section 6.8
              </span>
              <h2 className="text-lg font-serif font-normal text-[#081026] dark:text-white">
                8-Step Research Program for Promotion from Hypothesis to Theory
              </h2>
            </div>
            <ol className="space-y-2 text-xs sm:text-sm text-[#475569] dark:text-[#CBD9FC] font-light">
              <li className="p-2.5 bg-[#FDFBF7] dark:bg-[#081026] rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] flex items-start gap-2">
                <span className="font-mono font-bold text-purple-700 dark:text-purple-400 shrink-0">1.</span>
                <span>Fix a strict, frozen glossary for RES and RAG with immutable symbols so meanings cease to drift across preprints.</span>
              </li>
              <li className="p-2.5 bg-[#FDFBF7] dark:bg-[#081026] rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] flex items-start gap-2">
                <span className="font-mono font-bold text-purple-700 dark:text-purple-400 shrink-0">2.</span>
                <span>Formally define <MathDisplay math="\psi" /> through Eq. (15) with an explicit regulator, physical SI units, and dimensional constant <MathDisplay math="\kappa_\psi" />.</span>
              </li>
              <li className="p-2.5 bg-[#FDFBF7] dark:bg-[#081026] rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] flex items-start gap-2">
                <span className="font-mono font-bold text-purple-700 dark:text-purple-400 shrink-0">3.</span>
                <span>Derive Eq. (10) for real laboratory clocks (e.g. 2-level optical atomic clock in Earth's gravitational potential) and test universality of <MathDisplay math="l_I" />.</span>
              </li>
              <li className="p-2.5 bg-[#FDFBF7] dark:bg-[#081026] rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] flex items-start gap-2">
                <span className="font-mono font-bold text-purple-700 dark:text-purple-400 shrink-0">4.</span>
                <span>Compute angular frequency <MathDisplay math="\omega = \sqrt{V''(\psi_0)}" /> from candidate potential functions, forecasting precise bands for NANOGrav, EPTA, and optical clock comparisons.</span>
              </li>
              <li className="p-2.5 bg-[#FDFBF7] dark:bg-[#081026] rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] flex items-start gap-2">
                <span className="font-mono font-bold text-purple-700 dark:text-purple-400 shrink-0">5.</span>
                <span>Conduct preregistered experimental trials on RES=RAG cognitive and dialogue proxies so the phenomenological model risks empirical refutation.</span>
              </li>
              <li className="p-2.5 bg-[#FDFBF7] dark:bg-[#081026] rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] flex items-start gap-2">
                <span className="font-mono font-bold text-purple-700 dark:text-purple-400 shrink-0">6.</span>
                <span>Score IGRT itself with the 500-criterion matrix using the multi-rater protocol with quadratically weighted Cohen's <MathDisplay math="\kappa" /> and Krippendorff's <MathDisplay math="\alpha" />.</span>
              </li>
              <li className="p-2.5 bg-[#FDFBF7] dark:bg-[#081026] rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] flex items-start gap-2">
                <span className="font-mono font-bold text-purple-700 dark:text-purple-400 shrink-0">7.</span>
                <span>Derive the matter coupling <MathDisplay math="\varepsilon" /> from first principles to compute exact fifth-force torsion-balance constraints.</span>
              </li>
              <li className="p-2.5 bg-[#FDFBF7] dark:bg-[#081026] rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] flex items-start gap-2">
                <span className="font-mono font-bold text-purple-700 dark:text-purple-400 shrink-0">8.</span>
                <span>Deploy public CLASS/CAMB cosmological Boltzmann code patches testing IGRT against Planck, ACT, and DESI datasets.</span>
              </li>
            </ol>
          </div>

        </div>
      )}

    </div>
  );
};
