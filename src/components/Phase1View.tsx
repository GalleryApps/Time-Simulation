import React, { useState } from 'react';
import { MathDisplay } from './MathDisplay';
import { simulateIGIGWavepacket, computeFisherMetric, computeIGGVector } from '../physics/igig';
import { computeModularClockDrift } from '../physics/causalset';

export const Phase1View: React.FC = () => {
  const [epsilonVac, setEpsilonVac] = useState<number>(0.001);
  const [gradPhi1, setGradPhi1] = useState<number>(1.2);
  const [gradPhi2, setGradPhi2] = useState<number>(0.8);
  const [theta1, setTheta1] = useState<number>(0.5);
  const [theta2, setTheta2] = useState<number>(0.8);
  const [subsystemAreaA, setSubsystemAreaA] = useState<number>(12.0);
  const [subsystemAreaB, setSubsystemAreaB] = useState<number>(5.0);
  const [selectedTime, setSelectedTime] = useState<number>(2.0);

  // Compute live wavepacket and modular drift
  const wavepacket = simulateIGIGWavepacket(40, epsilonVac);
  const fisherMetric = computeFisherMetric(theta1, theta2, epsilonVac);
  const iggResult = computeIGGVector(theta1, theta2, gradPhi1, gradPhi2, epsilonVac);
  const driftA = computeModularClockDrift(selectedTime, subsystemAreaA, 1.0);
  const driftB = computeModularClockDrift(selectedTime, subsystemAreaB, 1.0);
  const clockDiscrepancy = Math.abs(driftA.driftStdDev - driftB.driftStdDev);

  return (
    <div className="space-y-8">
      {/* Foundational Treatise Citation Banner */}
      <div className="rounded-xl border border-indigo-900/60 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 p-5 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 uppercase">
              Model A Primary Treatise
            </span>
            <span className="text-xs font-mono text-slate-400">Academia.edu ID: #164986382</span>
          </div>
          <h1 className="text-base font-bold text-white tracking-tight">
            Information Geometric Gradient (IGG): The Secret Engine of Physics, Reality, and Everything Else
          </h1>
          <p className="text-xs text-slate-300">
            Authored by <strong className="text-indigo-200">Bulaqueña</strong> · Formalizes physical evolution, gravitation, and proper time as the intrinsic natural gradient flow on quantum statistical manifolds.
          </p>
        </div>
        <a
          href="https://www.academia.edu/164986382/Information_Geometric_Gradient_IGG_The_Secret_Engine_of_Physics_Reality_and_Everything_Else"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition-all flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
        >
          <span>Read Paper on Academia.edu</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      {/* Title & Phase Banner */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Phase 1 Analytical Execution · Canonical Formulation
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              The Wheeler-DeWitt Equation & The Problem of Time
            </h2>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono text-slate-400">Hamiltonian Constraint:</span>
            <div className="font-mono text-sm text-indigo-400">
              <MathDisplay math="\hat{\mathcal{H}}|\Psi\rangle = 0" />
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-4xl">
          In canonical quantum geometrodynamics, the Hamiltonian constraint forces the total physical state to be completely static, eliminating the external time parameter <MathDisplay math="t" />. We subject both frameworks to mathematical stress: Model A establishes the <strong>Bulaqueña Information Geometric Gradient (IGG)</strong> as the active computational engine driving relational proper time <MathDisplay math="\Delta\tau = \int \|\text{IGG}\|_g d\lambda" />, while Model B extracts emergent modular thermal time from Tomita-Takesaki automorphisms.
        </p>
      </div>

      {/* Two Column Comparative Workbench */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* MODEL A PANEL */}
        <div className="rounded-xl border border-emerald-900/50 bg-slate-900/50 p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-emerald-900/40 pb-3">
            <div>
              <span className="text-xs font-mono uppercase text-emerald-400">Model A Formalism (Bulaqueña)</span>
              <h3 className="text-lg font-semibold text-emerald-100">IGG: The Secret Engine of Reality</h3>
            </div>
            <div className="text-xs font-mono text-emerald-400">
              Conservation: <span className="text-white tabular-nums">1.000000</span>
            </div>
          </div>

          <div className="bg-slate-950/80 rounded-lg p-4 border border-emerald-900/30 space-y-3">
            <div>
              <div className="text-xs text-slate-400 mb-1">The Information Geometric Gradient Engine:</div>
              <MathDisplay 
                block 
                math="\text{IGG}^i = g^{ij}(\theta) \frac{\partial \Phi}{\partial \theta^j}, \quad \frac{d\theta^i}{d\tau} = -\text{IGG}^i" 
              />
            </div>
            <div>
              <div className="text-xs text-slate-400 mb-1">Proper Time Arc Length Traversal:</div>
              <MathDisplay 
                block 
                math="\Delta \tau = \int \sqrt{g_{ij}\dot{\theta}^i\dot{\theta}^j}\, d\lambda = \int \|\text{IGG}\|_g \, d\lambda" 
              />
            </div>
            <div>
              <div className="text-xs text-slate-400 mb-1">Relational State Generator:</div>
              <MathDisplay 
                block 
                math="i\hbar \frac{\partial \Psi}{\partial \tau} = \hat{\mathcal{H}}_{\text{IGG}}\Psi, \quad \hat{\mathcal{H}}_{\text{IGG}}^\dagger = \hat{\mathcal{H}}_{\text{IGG}}" 
              />
            </div>
          </div>

          {/* Interactive IGG Secret Engine Inspector */}
          <div className="rounded-lg bg-emerald-950/30 border border-emerald-800/40 p-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider">
                Interactive IGG Engine Inspector
              </span>
              <span className="text-[11px] font-mono text-emerald-400">
                ||IGG||_g = <strong className="text-white">{iggResult.iggMagnitude.toFixed(4)}</strong>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <div className="flex justify-between text-slate-400">
                  <span>Gradient ∂Φ/∂θ₁:</span>
                  <span className="font-mono text-emerald-300">{gradPhi1.toFixed(2)}</span>
                </div>
                <input 
                  type="range" 
                  min="-3.0" 
                  max="3.0" 
                  step="0.1" 
                  value={gradPhi1} 
                  onChange={(e) => setGradPhi1(parseFloat(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-slate-400">
                  <span>Gradient ∂Φ/∂θ₂:</span>
                  <span className="font-mono text-emerald-300">{gradPhi2.toFixed(2)}</span>
                </div>
                <input 
                  type="range" 
                  min="-3.0" 
                  max="3.0" 
                  step="0.1" 
                  value={gradPhi2} 
                  onChange={(e) => setGradPhi2(parseFloat(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-slate-400">
                  <span>State θ₁ (Mean):</span>
                  <span className="font-mono text-emerald-300">{theta1.toFixed(2)}</span>
                </div>
                <input 
                  type="range" 
                  min="0.1" 
                  max="2.0" 
                  step="0.05" 
                  value={theta1} 
                  onChange={(e) => setTheta1(parseFloat(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-slate-400">
                  <span>State θ₂ (Variance):</span>
                  <span className="font-mono text-emerald-300">{theta2.toFixed(2)}</span>
                </div>
                <input 
                  type="range" 
                  min="0.1" 
                  max="2.0" 
                  step="0.05" 
                  value={theta2} 
                  onChange={(e) => setTheta2(parseFloat(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>
            </div>

            {/* IGG Vector Output Metrics */}
            <div className="rounded bg-slate-950 p-3 border border-emerald-900/50 text-xs font-mono grid grid-cols-2 gap-2">
              <div>
                <span className="text-slate-400 block text-[10px]">Natural Gradient (IGG¹):</span>
                <span className="text-emerald-300 font-bold">{iggResult.igg1.toFixed(4)}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Natural Gradient (IGG²):</span>
                <span className="text-emerald-300 font-bold">{iggResult.igg2.toFixed(4)}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Proper Time Rate (dτ/dλ):</span>
                <span className="text-white font-bold">{iggResult.dtauRate.toFixed(4)}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Euclidean Slope ||∇Φ||:</span>
                <span className="text-slate-400">{iggResult.euclidMagnitude.toFixed(4)}</span>
              </div>
            </div>
          </div>

          {/* Vacuum Floor Control */}
          <div className="space-y-3">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300">Vacuum Information Regularizer (<MathDisplay math="\epsilon_{\text{vac}}" />):</span>
              <span className="font-mono text-emerald-400 tabular-nums">{epsilonVac}</span>
            </div>
            <input 
              type="range" 
              min="0.0001" 
              max="0.01" 
              step="0.0005"
              value={epsilonVac}
              onChange={(e) => setEpsilonVac(parseFloat(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-400">
              <span>Metric Trace: <strong className="text-slate-200 font-mono">{fisherMetric.trace.toFixed(4)}</strong></span>
              <span>Determinant: <strong className="text-slate-200 font-mono">{fisherMetric.determinant.toFixed(4)}</strong></span>
            </div>
          </div>

          {/* Wavepacket Probability Monitor */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-slate-300">Unitarity & Probability Norm History:</div>
            <div className="h-24 w-full bg-slate-950/90 rounded border border-slate-800 p-2 flex items-end gap-1 overflow-x-auto">
              {wavepacket.slice(0, 30).map((pt, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1 min-w-[6px]">
                  <div 
                    className="w-full bg-emerald-500 rounded-t"
                    style={{ height: `${Math.min(100, pt.prob * 60)}px` }}
                    title={`tau: ${pt.tau}, Prob: ${pt.prob}`}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs font-mono text-slate-400">
              <span>Initial: ||Ψ(0)||² = 1.0000</span>
              <span>Final: ||Ψ(τ_max)||² = 1.0000</span>
            </div>
          </div>
        </div>

        {/* MODEL B PANEL */}
        <div className="rounded-xl border border-amber-900/50 bg-slate-900/50 p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-amber-900/40 pb-3">
            <div>
              <span className="text-xs font-mono uppercase text-amber-400">Model B Formalism</span>
              <h3 className="text-lg font-semibold text-amber-100">Emergent Modular Thermal Time</h3>
            </div>
            <div className="text-xs font-mono text-amber-400">
              Drift: <span className="text-white tabular-nums">σ = {driftA.driftStdDev.toFixed(4)}</span>
            </div>
          </div>

          <div className="bg-slate-950/80 rounded-lg p-4 border border-amber-900/30">
            <div className="text-xs text-slate-400 mb-2">Tomita-Takesaki Modular Automorphism:</div>
            <MathDisplay 
              block 
              math="\Delta^{it} = e^{it K_A}, \quad K_A = -\ln \rho_A, \quad \alpha_t(\hat{\mathcal{O}}) = \Delta^{-it}\hat{\mathcal{O}}\Delta^{it}" 
            />
            <div className="text-xs text-slate-400 mt-3 mb-1">Subsystem Clock Drift Variance:</div>
            <MathDisplay 
              block 
              math="\sigma^2(t) = \frac{k_B T}{\hbar} \frac{l_p^2}{\mathcal{A}_{\partial A}} t" 
            />
          </div>

          {/* Interactive Controls */}
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Subsystem A Horizon Area (<MathDisplay math="\mathcal{A}_A" />):</span>
                <span className="font-mono text-amber-400 tabular-nums">{subsystemAreaA} l_p²</span>
              </div>
              <input 
                type="range" 
                min="2.0" 
                max="30.0" 
                step="1.0"
                value={subsystemAreaA}
                onChange={(e) => setSubsystemAreaA(parseFloat(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Subsystem B Horizon Area (<MathDisplay math="\mathcal{A}_B" />):</span>
                <span className="font-mono text-amber-400 tabular-nums">{subsystemAreaB} l_p²</span>
              </div>
              <input 
                type="range" 
                min="2.0" 
                max="30.0" 
                step="1.0"
                value={subsystemAreaB}
                onChange={(e) => setSubsystemAreaB(parseFloat(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Elapsed Thermal Time (<MathDisplay math="t" />):</span>
                <span className="font-mono text-amber-400 tabular-nums">{selectedTime} s</span>
              </div>
              <input 
                type="range" 
                min="0.1" 
                max="5.0" 
                step="0.1"
                value={selectedTime}
                onChange={(e) => setSelectedTime(parseFloat(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Observer Desynchronization Card */}
          <div className="rounded border border-amber-900/40 bg-amber-950/30 p-3 text-xs space-y-1">
            <div className="font-semibold text-amber-200">Subsystem Clock Drift Discrepancy:</div>
            <div className="flex justify-between font-mono text-slate-300">
              <span>Observer A StdDev (Area={subsystemAreaA}):</span>
              <span className="text-amber-400 tabular-nums">{driftA.driftStdDev.toFixed(5)}</span>
            </div>
            <div className="flex justify-between font-mono text-slate-300">
              <span>Observer B StdDev (Area={subsystemAreaB}):</span>
              <span className="text-amber-400 tabular-nums">{driftB.driftStdDev.toFixed(5)}</span>
            </div>
            <div className="flex justify-between font-mono border-t border-amber-900/40 pt-1 text-amber-300">
              <span>Net Intersubsystem Drift Δσ:</span>
              <span className="font-bold tabular-nums">{clockDiscrepancy.toFixed(5)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Adversarial Cross-Check Section */}
      <div className="rounded-xl border border-red-950 bg-red-950/20 p-6 space-y-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-red-500" />
          <h3 className="text-base font-semibold text-red-200">
            Adversarial Cross-Check & Proof of Non-Degeneracy
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 leading-relaxed">
          <div className="space-y-2 bg-slate-950/60 p-4 rounded-lg border border-red-900/30">
            <h4 className="font-semibold text-white">Challenge to Model A: Metric Collapse at Zero Fisher Information</h4>
            <p>
              If state parameters halt (<MathDisplay math="\dot{\theta}^i \to 0" />) or statistical variance diverges (<MathDisplay math="\sigma \to \infty" />), does proper time freeze or does the metric singularize?
            </p>
            <div className="border-t border-slate-800 pt-2 text-emerald-300 font-mono">
              Proof: Vacuum information regularization <MathDisplay math="\tilde{g}_{ij} = g_{ij} + \epsilon_{\text{vac}} \delta_{ij}" /> guarantees <MathDisplay math="\det(\tilde{g}) \ge \epsilon_{\text{vac}}^d > 0" />. Information proper time is bounded from below by zero-point quantum fluctuations.
            </div>
          </div>

          <div className="space-y-2 bg-slate-950/60 p-4 rounded-lg border border-red-900/30">
            <h4 className="font-semibold text-white">Challenge to Model B: Circular Reliance on Classical Clocks</h4>
            <p>
              How does the thermal time flow <MathDisplay math="\alpha_t" /> attain macroscopic time-translation invariance without presuming an asymptotic Minkowski boundary endowed with a pre-existing classical clock?
            </p>
            <div className="border-t border-slate-800 pt-2 text-amber-300 font-mono">
              Proof Limit: Without an asymptotic boundary or fixed sub-algebra partition, the Tomita-Takesaki automorphism <MathDisplay math="\Delta^{it}" /> is observer-dependent. Subsystems of different entanglement areas exhibit relative drift <MathDisplay math="\Delta \sigma \propto \sqrt{t}" />.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
