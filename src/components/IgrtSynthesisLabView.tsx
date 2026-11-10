import React, { useState, useMemo } from 'react';
import { MathDisplay } from './MathDisplay';
import { IGRT_MAPPING, OBSERVATIONAL_DISCRIMINATORS } from '../types/manuscriptData';

export const IgrtSynthesisLabView: React.FC = () => {
  // Interactive Simulation Controls for Section 6.5
  const [omega, setOmega] = useState<number>(1.5); // angular frequency
  const [x0, setX0] = useState<number>(0.8); // oscillation amplitude
  const [couplingEps, setCouplingEps] = useState<number>(0.05); // matter-clock coupling
  const [activeTab, setActiveTab] = useState<'equations' | 'signatures' | 'mapping' | 'program'>('equations');

  // Compute waveform points for the 2:1 ratio test
  const waveforms = useMemo(() => {
    const points = [];
    const steps = 100;
    const tMax = 10;
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * tMax;
      // Clock frequency modulation at omega: delta_nu/nu = eps * x0 * cos(omega * t)
      const clockMod = couplingEps * x0 * Math.cos(omega * t);
      // PTA timing residual oscillates at 2 * omega: delta_t_PTA ~ x0^2 * sin(2 * omega * t)
      const ptaResidual = 0.5 * Math.pow(x0, 2) * Math.sin(2 * omega * t);
      points.push({ t, clockMod, ptaResidual });
    }
    return points;
  }, [omega, x0, couplingEps]);

  const fPTA = (omega / Math.PI).toFixed(3);
  const fClock = (omega / (2 * Math.PI)).toFixed(3);

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-20 text-[#0C1836]">
      
      {/* Header Banner - Oxford Monograph Masthead */}
      <div className="oxford-card rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 bg-white border border-[#EAE2D2]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAE2D2] pb-5">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-[#EA580C] uppercase tracking-wider">
              Section 6 · The IGRT Unified Synthesis
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#081026] tracking-tight">
              Information-Geometric Resonant Time (IGRT)
            </h1>
            <p className="text-xs sm:text-sm text-[#475569] max-w-3xl leading-relaxed">
              Constructed directly from the two frameworks and quantum information foundations: IGRT identifies the <strong>Fisher-Rao distance</strong> traversed by the retention-generation events of RES=RAG with the <strong>proper time</strong> of General Relativity, and derives the scalar field <MathDisplay math="\psi" /> from <strong>vacuum-subtracted entanglement entropy density</strong>.
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#081026] bg-[#F4EFE6] px-3.5 py-1.5 rounded-lg border border-[#EAE2D2]">
            <span className="font-serif font-bold text-[#1A3670]">Dual-Layer Architecture</span>
            <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
            <span className="text-[#475569]">Microscopic Metric + Macroscopic Rhythm</span>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap gap-2 text-xs font-medium">
          <button
            onClick={() => setActiveTab('equations')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'equations'
                ? 'bg-[#0C1836] text-[#FDFBF7] font-serif font-semibold shadow-xs'
                : 'bg-[#F9F6F0] text-[#0C1836] hover:bg-white border border-[#EAE2D2]'
            }`}
          >
            Core Identification & Field Equations (Eq. 10–16)
          </button>
          <button
            onClick={() => setActiveTab('signatures')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'signatures'
                ? 'bg-[#0C1836] text-[#FDFBF7] font-serif font-semibold shadow-xs'
                : 'bg-[#F9F6F0] text-[#0C1836] hover:bg-white border border-[#EAE2D2]'
            }`}
          >
            Interactive 2:1 Dual Observable Simulator (Eq. 17–20)
          </button>
          <button
            onClick={() => setActiveTab('mapping')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'mapping'
                ? 'bg-[#0C1836] text-[#FDFBF7] font-serif font-semibold shadow-xs'
                : 'bg-[#F9F6F0] text-[#0C1836] hover:bg-white border border-[#EAE2D2]'
            }`}
          >
            Table 8: Concept Mapping Matrix
          </button>
          <button
            onClick={() => setActiveTab('program')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'program'
                ? 'bg-[#0C1836] text-[#FDFBF7] font-serif font-semibold shadow-xs'
                : 'bg-[#F9F6F0] text-[#0C1836] hover:bg-white border border-[#EAE2D2]'
            }`}
          >
            Open Problems & 8-Step Research Program
          </button>
        </div>
      </div>

      {/* TAB 1: FORMAL EQUATIONS */}
      {activeTab === 'equations' && (
        <div className="space-y-6">
          
          {/* Postulate 1: Core Identification */}
          <div className="oxford-card rounded-2xl p-6 sm:p-8 shadow-xs space-y-4 bg-white border border-[#EAE2D2]">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-[#EBF0FE] text-[#1A3670] text-xs font-mono font-bold border border-[#CBD9FC]">
                Postulate 1 · Equation (10)
              </span>
              <h2 className="text-lg font-serif font-bold text-[#081026]">
                The Core Equivalence: Fisher-Rao Distance = Proper Time
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              IGRT equates the Fisher-Rao length along the trajectory of distinguishable states on statistical manifold <MathDisplay math="\mathcal{S}" /> with the proper time along the worldline in spacetime:
            </p>
            <div className="p-4 bg-[#F9F6F0] rounded-xl border border-[#EAE2D2] text-center font-mono">
              <MathDisplay math="\Delta\tau = \int \sqrt{g_{ij}\dot{\theta}^i\dot{\theta}^j} \, d\lambda \;\equiv\; \int \sqrt{-g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu} \, d\lambda" />
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed font-sans">
              Here <MathDisplay math="\lambda" /> is an unphysical monotonic gauge label. Each integrand is homogeneous of degree one in velocities, guaranteeing strict <strong>reparametrization invariance</strong>. The left-hand side counts distinguishable states traversed (supplying the measure RES=RAG lacks); the right-hand side is the proper time of General Relativity (which IGEG inherits).
            </p>
            <div className="p-3 bg-[#F4F7FF] rounded-xl border border-[#CBD9FC] text-xs text-[#1A3670]">
              <strong>Discrete Event Sum (Eq. 11):</strong> <MathDisplay math="\Delta\tau_N = \sum_{k=1}^N \sqrt{g_{ij}(\theta_k)\Delta\theta_k^i\Delta\theta_k^j} \;\longrightarrow\; \Delta\tau \quad (N\to\infty)" />
            </div>
          </div>

          {/* Derivation of Scalar Field from Entanglement */}
          <div className="oxford-card rounded-2xl p-6 sm:p-8 shadow-xs space-y-4 bg-white border border-[#EAE2D2]">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-[#FEF3C7] text-[#92400E] text-xs font-mono font-bold border border-[#FCD34D]">
                Derivation · Equations (13)–(16)
              </span>
              <h2 className="text-lg font-serif font-bold text-[#081026]">
                Resolving Circularity: <MathDisplay math="\psi" /> as Emergent Entanglement Density
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              To resolve the circularity of the IGEG engine clock, IGRT invokes the <strong>Page-Wootters mechanism</strong>. A stationary global state obeys <MathDisplay math="(\hat{H}_C + \hat{H}_S)|\Psi\rangle\rangle = 0" />, yielding ordinary Schrödinger evolution for the conditional state <MathDisplay math="|\phi_S(t)\rangle = \langle t|_C |\Psi\rangle\rangle" />:
            </p>
            <div className="p-4 bg-[#F9F6F0] rounded-xl border border-[#EAE2D2] text-center font-mono">
              <MathDisplay math="\psi^2(x) = \kappa_\psi \lim_{A \to x} \frac{S(\rho_A) - S(\sigma_A)}{\text{Vol}(A)}" />
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed font-sans">
              The scalar field <MathDisplay math="\psi" /> is thereby a coarse-grained descriptor of the vacuum-subtracted entanglement entropy density rather than an independent primitive. Fisher geometry and entanglement are linked via the second-order expansion of relative entropy:
            </p>
            <div className="p-3 bg-[#FDFBF7] rounded-xl border border-[#EAE2D2] text-center font-mono text-xs">
              <MathDisplay math="D(p_{\theta+d\theta} \,\|\, p_\theta) = \frac{1}{2} g_{ij} d\theta^i d\theta^j + \mathcal{O}(|d\theta|^3)" />
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: INTERACTIVE DUAL OBSERVABLE SIMULATOR */}
      {activeTab === 'signatures' && (
        <div className="space-y-6">
          
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
                Section 6.5 · Equations (19) & (20)
              </span>
              <h2 className="text-xl font-serif font-bold text-slate-900">
                The 2:1 Harmonic Frequency Dual Signature
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When displaced from equilibrium <MathDisplay math="\psi = \psi_0 + x" />, the field oscillates at frequency <MathDisplay math="\omega^2 = V''(\psi_0)" />. An oscillating ultralight scalar field imprints a periodic modulation on <strong>Pulsar Timing Arrays (PTA)</strong> at <MathDisplay math="f_{\text{PTA}} = \omega/\pi" /> (twice the frequency), while optical atomic clock comparisons oscillate at <MathDisplay math="f_{\text{clock}} = \omega/(2\pi)" />:
              </p>
            </div>

            {/* Sliders */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <div className="space-y-1.5">
                <div className="flex justify-between font-mono">
                  <span className="text-slate-700 font-semibold">Field Curvature / Mass (ω):</span>
                  <span className="font-bold text-purple-700">{omega.toFixed(2)} rad/s</span>
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
                <div className="flex justify-between font-mono">
                  <span className="text-slate-700 font-semibold">Scalar Amplitude (x₀):</span>
                  <span className="font-bold text-blue-700">{x0.toFixed(2)}</span>
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
                <div className="flex justify-between font-mono">
                  <span className="text-slate-700 font-semibold">Clock Coupling (ε):</span>
                  <span className="font-bold text-amber-700">{couplingEps.toFixed(3)}</span>
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
            </div>

            {/* Frequency Display Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 bg-blue-50 rounded-xl border border-blue-200">
                <div className="text-blue-800 font-bold uppercase text-[10px]">Atomic Clock Modulation (Eq. 20)</div>
                <div className="text-lg font-bold text-blue-900 mt-0.5">{fClock} Hz</div>
                <div className="text-[10px] text-blue-600">f_clock = ω / 2π</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
                <div className="text-purple-800 font-bold uppercase text-[10px]">Pulsar Timing Residual Line (Eq. 19)</div>
                <div className="text-lg font-bold text-purple-900 mt-0.5">{fPTA} Hz</div>
                <div className="text-[10px] text-purple-600">f_PTA = 2ω / 2π = ω / π</div>
              </div>
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="text-emerald-800 font-bold uppercase text-[10px]">Exact Frequency Ratio</div>
                <div className="text-lg font-bold text-emerald-900 mt-0.5">2.000 : 1</div>
                <div className="text-[10px] text-emerald-600">Harmonic signature of IGRT</div>
              </div>
            </div>

            {/* Simulated Live Waveform Graph */}
            <div className="space-y-2 p-4 bg-slate-900 rounded-xl text-white">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-blue-400 font-semibold">━ Optical Clock Shift (δν/ν) [1x Frequency]</span>
                <span className="text-purple-400 font-semibold">━ Pulsar Timing Residual (δt_PTA) [2x Frequency]</span>
              </div>
              <div className="h-40 w-full relative border-t border-b border-slate-700/60 flex items-center">
                {/* Horizontal Zero Axis */}
                <div className="absolute inset-x-0 h-px bg-slate-700" />
                
                {/* SVG Curves */}
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Clock Modulation Wave (Blue) */}
                  <polyline
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="2.5"
                    points={waveforms.map((p, idx) => `${idx},${50 - p.clockMod * 350}`).join(' ')}
                  />
                  {/* PTA Residual Wave (Purple, 2x freq) */}
                  <polyline
                    fill="none"
                    stroke="#c084fc"
                    strokeWidth="2.5"
                    points={waveforms.map((p, idx) => `${idx},${50 - p.ptaResidual * 60}`).join(' ')}
                  />
                </svg>
              </div>
              <div className="text-[11px] font-mono text-slate-400 text-center">
                Time Evolution <MathDisplay math="\tau" /> (Simulated Seconds)
              </div>
            </div>

            {/* Explanation Note */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
              <span className="font-bold text-slate-900">Observational Adjudication Protocol:</span>
              <p>
                Any search finding both a pulsar-timing residual line and an optical-clock comparison line must observe them in the <strong>exact frequency ratio of 2:1</strong>. This provides an unambiguous experimental test separating IGRT from alternative scalar-field models.
              </p>
            </div>

          </div>

        </div>
      )}

      {/* TAB 3: CONCEPT MAPPING MATRIX */}
      {activeTab === 'mapping' && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
          <div>
            <h2 className="text-lg font-serif font-bold text-slate-900">
              Table 8: Dimensional Concept Mapping Across All Three Frameworks
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Direct mapping of ontological primitives, ordering, metrics, equilibrium states, and observational tests between Model A (IGEG), Model B (RES=RAG), and the IGRT Synthesis.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-mono text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4 w-32 font-semibold">Physical Dimension</th>
                  <th className="py-3 px-4 text-blue-900 font-bold">Model A: IGEG</th>
                  <th className="py-3 px-4 text-amber-900 font-bold">Model B: RES=RAG</th>
                  <th className="py-3 px-4 text-purple-900 font-bold bg-purple-50/50">Unified IGRT Synthesis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {IGRT_MAPPING.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-mono font-semibold text-slate-700">
                      {item.concept}
                    </td>
                    <td className="py-3 px-4 text-slate-700">
                      {item.igeg}
                    </td>
                    <td className="py-3 px-4 text-slate-700">
                      {item.resrag}
                    </td>
                    <td className="py-3 px-4 font-medium text-purple-950 bg-purple-50/30">
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
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-rose-100 text-rose-800 text-xs font-mono font-bold">
                Section 6.7
              </span>
              <h2 className="text-lg font-serif font-bold text-slate-900">
                7 Explicit Failure Modes & Open Problems
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900">1. Calibration Constant (l_I):</span>
                <p className="text-slate-600">The constant <MathDisplay math="l_I = \hbar / (2\Delta E)" /> depends on clock energy uncertainty. If it cannot be made universal, Eq. (10) fails as an identity.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900">2. Metric Signature:</span>
                <p className="text-slate-600">Fisher metric is positive-definite, while spacetime has Lorentzian signature (−,+,+,+). Spacelike sector requires additional structure.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900">3. Definition of ψ:</span>
                <p className="text-slate-600">Eq. (15) depends on an ultraviolet regulator and <MathDisplay math="\kappa_\psi" />. A scheme-independent definition is required.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900">4. Matter Coupling:</span>
                <p className="text-slate-600">Coupling of <MathDisplay math="\psi" /> to ordinary matter is unspecified; atomic clock coupling <MathDisplay math="\varepsilon" /> cannot be computed without it.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900">5. Choice of Clock:</span>
                <p className="text-slate-600">Page-Wootters conditioning depends on subsystem choice; interacting clocks remain debated in quantum foundations.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900">6. Statistical Manifold Degeneracy:</span>
                <p className="text-slate-600">The Fisher metric becomes degenerate rather than zero for fully deterministic zero-entropy distributions.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1 md:col-span-2">
                <span className="font-bold text-slate-900">7. Differing Epistemic Priorities:</span>
                <p className="text-slate-600">IGEG is physics-first; RES=RAG is relation- and consciousness-first. A full merger inevitably demotes one of these priorities unless an observer-inclusive optional layer is formalized.</p>
              </div>
            </div>
          </div>

          {/* 8-Step Research Program */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-purple-100 text-purple-800 text-xs font-mono font-bold">
                Section 6.8
              </span>
              <h2 className="text-lg font-serif font-bold text-slate-900">
                8-Step Research Program for Promotion from Hypothesis to Theory
              </h2>
            </div>
            <ol className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-2">
                <span className="font-mono font-bold text-purple-700 shrink-0">1.</span>
                <span>Fix a strict, frozen glossary for RES and RAG with immutable symbols so meanings cease to drift across preprints.</span>
              </li>
              <li className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-2">
                <span className="font-mono font-bold text-purple-700 shrink-0">2.</span>
                <span>Formally define <MathDisplay math="\psi" /> through Eq. (15) with an explicit regulator, physical SI units, and dimensional constant <MathDisplay math="\kappa_\psi" />.</span>
              </li>
              <li className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-2">
                <span className="font-mono font-bold text-purple-700 shrink-0">3.</span>
                <span>Derive Eq. (10) for real laboratory clocks (e.g. 2-level optical atomic clock in Earth's gravitational potential) and test universality of <MathDisplay math="l_I" />.</span>
              </li>
              <li className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-2">
                <span className="font-mono font-bold text-purple-700 shrink-0">4.</span>
                <span>Compute angular frequency <MathDisplay math="\omega = \sqrt{V''(\psi_0)}" /> from candidate potential functions, forecasting precise bands for NANOGrav, EPTA, and optical clock comparisons.</span>
              </li>
              <li className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-2">
                <span className="font-mono font-bold text-purple-700 shrink-0">5.</span>
                <span>Conduct preregistered experimental trials on RES=RAG cognitive and dialogue proxies so the phenomenological model risks empirical refutation.</span>
              </li>
              <li className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-2">
                <span className="font-mono font-bold text-purple-700 shrink-0">6.</span>
                <span>Score IGRT itself with the 500-criterion matrix using the multi-rater protocol with quadratically weighted Cohen's <MathDisplay math="\kappa" /> and Krippendorff's <MathDisplay math="\alpha" />.</span>
              </li>
              <li className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-2">
                <span className="font-mono font-bold text-purple-700 shrink-0">7.</span>
                <span>Derive the matter coupling <MathDisplay math="\varepsilon" /> from first principles to compute exact fifth-force torsion-balance constraints.</span>
              </li>
              <li className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-2">
                <span className="font-mono font-bold text-purple-700 shrink-0">8.</span>
                <span>Deploy public CLASS/CAMB cosmological Boltzmann code patches testing IGRT against Planck, ACT, and DESI datasets.</span>
              </li>
            </ol>
          </div>

        </div>
      )}

    </div>
  );
};
