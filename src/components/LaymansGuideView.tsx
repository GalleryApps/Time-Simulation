import React, { useState } from 'react';
import { MathDisplay } from './MathDisplay';

export const LaymansGuideView: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<'modelA' | 'modelB' | 'synthesis'>('synthesis');
  const [observerDensity, setObserverDensity] = useState<number>(0.0);
  const [memoryRatio, setMemoryRatio] = useState<number>(1.0); // RES / RAG

  return (
    <div className="space-y-10 max-w-5xl mx-auto pb-24 text-[#0C1836] dark:text-[#FDFBF7]">
      
      {/* SECTION 1 HEADER - Oxford Monograph Edition */}
      <div className="rounded-2xl p-6 sm:p-10 shadow-xs space-y-6 bg-white dark:bg-[#0B1530] border border-[#EAE2D2] dark:border-[#1E293B]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAE2D2] dark:border-[#1E293B] pb-5 text-xs font-mono text-[#64748B] dark:text-[#94B2F5]">
          <span className="px-2.5 py-1 rounded-xs bg-[#EBF0FE] dark:bg-[#1E3A8A]/40 text-[#1A3670] dark:text-[#93C5FD] font-semibold uppercase tracking-wider border border-[#CBD9FC] dark:border-[#1E3A8A]">
            Section 1 · Executive Treatise &amp; Layman's Guide
          </span>
          <span>Target Audience: General Public &amp; Interdisciplinary Physicists</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl sm:text-4xl font-serif font-normal text-[#081026] dark:text-white tracking-tight leading-tight">
            What Is Time? The Cosmic Operating System vs. The Universal Orchestra
          </h1>
          <p className="text-sm sm:text-base text-[#475569] dark:text-[#CBD9FC] leading-relaxed max-w-4xl font-light">
            For a century, theoretical physics has been haunted by a devastating paradox: when you unite Einstein's General Relativity with Quantum Mechanics, the master equation of the cosmos—the Wheeler-DeWitt equation—declares that <strong>nothing can change</strong> (<MathDisplay math="\hat{\mathcal{H}}|\Psi\rangle = 0" />). Time completely vanishes from fundamental physics. How does our universe continuously tick and evolve if the fundamental laws of nature are timeless?
          </p>
        </div>

        {/* Paper Credentials */}
        <div className="p-4 rounded-xl bg-[#F9F6F0] dark:bg-[#081026] border border-[#EAE2D2] dark:border-[#1E293B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="font-serif font-medium text-[#081026] dark:text-white">Comparing Two Landmark Frameworks:</span>
            <div className="text-[#475569] dark:text-[#CBD9FC] mt-0.5 font-light">
              • <strong>Model A:</strong> Bulaqueña's Information Geometric Gradient (IGG) (Academia.edu #164986382)<br />
              • <strong>Model B:</strong> Jean-Charles Tassan's Emergent Resonant-Active Time (RES-RAG)
            </div>
          </div>
          <a
            href="https://www.academia.edu/164986382/Information_Geometric_Gradient_IGG_The_Secret_Engine_of_Physics_Reality_and_Everything_Else"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-lg bg-[#0C1836] dark:bg-[#EA580C] text-[#FDFBF7] font-serif font-semibold hover:bg-[#1A3670] transition-colors shrink-0 shadow-xs"
          >
            Read Bulaqueña (2026) ↗
          </a>
        </div>
      </div>

      {/* SIDE-BY-SIDE INTUITIVE ANALOGIES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* MODEL A CARD */}
        <div className="rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 flex flex-col justify-between bg-white dark:bg-[#0B1530] border border-[#CBD9FC] dark:border-[#1E3A8A]">
          <div className="space-y-4">
            <div className="inline-block px-2.5 py-0.5 rounded-xs text-xs font-mono font-bold bg-[#EBF0FE] dark:bg-[#1E3A8A]/40 text-[#1A3670] dark:text-[#93C5FD] border border-[#CBD9FC] dark:border-[#1E3A8A]">
              MODEL A: BULAQUEÑA IGG FRAMEWORK
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-normal text-[#081026] dark:text-white">
              The Universe as a Cosmic Computer
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD9FC] leading-relaxed font-light">
              Imagine the universe is not an empty container where clocks tick on the wall. Instead, imagine reality is a <strong>cosmic quantum computer</strong> running a continuous operating system.
            </p>

            <div className="space-y-3 text-xs text-[#334155] dark:text-[#CBD9FC] leading-relaxed bg-[#FDFBF7] dark:bg-[#081026] p-4 rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] font-light">
              <p>
                <strong>The Software Engine:</strong> Time is not a physical dimension you can walk backward in. It is the <em>clock cycle of the processor</em>. Every time the universe calculates a distinction between quantum states, that calculation step <strong>IS</strong> time.
              </p>
              <p>
                <strong>The Secret Gradient (IGG):</strong> Just like your smartphone camera adjusts contrast along the steepest lighting slope, nature updates its quantum state along the steepest informational slope—the <strong>Information Geometric Gradient (IGG)</strong>.
              </p>
              <p>
                <strong>Why the Clock Never Stops:</strong> Even in empty space, quantum vacuum fluctuations act as a minimal baseline (<MathDisplay math="\varepsilon_{\text{vac}} > 0" />). The computer never shuts down into timelessness.
              </p>
            </div>
          </div>

          <div className="p-3 bg-[#F4F7FF] dark:bg-[#060B1C] rounded-lg border border-[#CBD9FC] dark:border-[#1E3A8A] text-xs text-[#1A3670] dark:text-[#93C5FD] font-mono">
            Key Rule: Time is fundamental code execution (<MathDisplay math="\Delta\tau = \int \|\text{IGG}\|_g d\lambda" />).
          </div>
        </div>

        {/* MODEL B CARD */}
        <div className="rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 flex flex-col justify-between bg-white dark:bg-[#0B1530] border border-[#FDBA74] dark:border-[#C2410C]">
          <div className="space-y-4">
            <div className="inline-block px-2.5 py-0.5 rounded-xs text-xs font-mono font-bold bg-[#FFEDD5] dark:bg-[#78350F]/40 text-[#9A3412] dark:text-[#FDBA74] border border-[#FDBA74] dark:border-[#B45309]">
              MODEL B: JEAN-CHARLES TASSAN FRAMEWORK
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-normal text-[#081026] dark:text-white">
              The Universe as a Universal Orchestra
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD9FC] leading-relaxed font-light">
              Imagine reality is not made of inert matter or rigid coordinates, but of <strong>musical frequencies, echoes, and standing waves</strong> in an infinite acoustic concert hall.
            </p>

            <div className="space-y-3 text-xs text-[#334155] dark:text-[#CBD9FC] leading-relaxed bg-[#FDFBF7] dark:bg-[#081026] p-4 rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] font-light">
              <p>
                <strong>RES (Resonant Memory / Space):</strong> The concert hall itself, whose walls retain the acoustic reverberations, echoes, and structural history of every note ever played.
              </p>
              <p>
                <strong>RAG (Resonant Active Generation / Time):</strong> The musician actively striking the drum or plucking the violin string in the present moment, generating brand new waves.
              </p>
              <p>
                <strong>Emergence of Time:</strong> Time is not a fundamental line; it is the <em>rhythmic tempo</em> born when the musician's live playing (RAG) converses harmoniously with the acoustic memory of the hall (RES).
              </p>
            </div>
          </div>

          <div className="p-3 bg-[#FFF7ED] dark:bg-[#060B1C] rounded-lg border border-[#FDBA74] dark:border-[#C2410C] text-xs text-[#9A3412] dark:text-[#FDBA74] font-mono">
            Key Rule: Time is an emergent acoustic rhythm (<MathDisplay math="H(z) = \text{RAG}(z)/\text{RES}(z)" />).
          </div>
        </div>

      </div>

      {/* INTERACTIVE INTUITION LAB: OBSERVERS & MEMORY */}
      <div className="rounded-2xl p-6 sm:p-8 space-y-5 bg-white dark:bg-[#0B1530] border border-[#EAE2D2] dark:border-[#1E293B] shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EAE2D2] dark:border-[#1E293B] pb-4">
          <div>
            <span className="font-cinzel text-xs text-[#EA580C] uppercase tracking-wider block">
              Intuitive Sandbox · The Cosmic Clock Laboratory
            </span>
            <h3 className="text-lg font-serif font-normal text-[#081026] dark:text-white">
              Did Time Exist 13.8 Billion Years Ago Before Observers?
            </h3>
          </div>
          <span className="font-mono text-xs text-[#64748B] dark:text-[#94B2F5]">
            Physical Epistemology
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs font-mono">
          <div className="p-4 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] space-y-2">
            <div className="flex justify-between">
              <span className="text-[#64748B] dark:text-[#94B2F5]">Observer Density (ρ_obs)</span>
              <span className="text-[#081026] dark:text-white font-bold">{observerDensity === 0 ? '0% (Pre-Biotic Universe)' : `${(observerDensity * 100).toFixed(0)}% (Human / Mind Present)`}</span>
            </div>
            <input
              type="range"
              min="0.0"
              max="1.0"
              step="0.1"
              value={observerDensity}
              onChange={(e) => setObserverDensity(parseFloat(e.target.value))}
              className="w-full accent-[#EA580C]"
            />
            <p className="text-[11px] font-['Poppins'] text-[#475569] dark:text-[#CBD9FC] font-light leading-relaxed">
              {observerDensity === 0 
                ? 'Under Model A & IGRT, Layer 0 continues computing objective spacetime along the informational gradient ∇_IGG Φ through primordial nucleosynthesis and galaxy formation without requiring conscious observers.'
                : 'With observers present, Layer 1 macroscopic cognitive resonance (RES=RAG) activates, allowing subjective conscious experience of time\'s flow.'}
            </p>
          </div>

          <div className="p-4 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] space-y-2">
            <div className="flex justify-between">
              <span className="text-[#64748B] dark:text-[#94B2F5]">Balance of Past vs Future (RES / RAG)</span>
              <span className="text-[#081026] dark:text-white font-bold">{memoryRatio.toFixed(2)}x</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="2.0"
              step="0.1"
              value={memoryRatio}
              onChange={(e) => setMemoryRatio(parseFloat(e.target.value))}
              className="w-full accent-[#3B82F6]"
            />
            <p className="text-[11px] font-['Poppins'] text-[#475569] dark:text-[#CBD9FC] font-light leading-relaxed">
              {memoryRatio > 1.4 
                ? 'Excess Memory (RES >> RAG): The system risks a frozen memory lock, where no new physical novelty can be generated.'
                : memoryRatio < 0.6
                ? 'Excess Novelty (RAG >> RES): The system loses structural coherence, degrading into chaotic white noise.'
                : 'Harmonized Equilibrium (RES ≈ RAG): Sustainable rhythmic timeflow with stable transfer function poles.'}
            </p>
          </div>
        </div>
      </div>

      {/* WHAT HAPPENS TO OUR UNIVERSE UNDER EACH ASSUMPTION */}
      <div className="rounded-2xl p-6 sm:p-10 shadow-xs space-y-6 bg-white dark:bg-[#0B1530] border border-[#EAE2D2] dark:border-[#1E293B]">
        <div className="space-y-2 border-b border-[#EAE2D2] dark:border-[#1E293B] pb-5">
          <span className="text-xs font-mono font-bold text-[#EA580C] uppercase tracking-wider">
            Cosmic Scenarios &amp; Fate Analysis
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-normal text-[#081026] dark:text-white">
            What Happens to Our Universe Under Each Paradigm?
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD9FC] font-light">
            Select a paradigm below to simulate the destiny, mechanics, and physical reality of our universe:
          </p>
        </div>

        {/* Interactive Scenario Buttons */}
        <div className="flex flex-wrap gap-2 text-xs font-medium">
          <button
            onClick={() => setActiveScenario('modelA')}
            className={`px-4 py-2 rounded-xl transition-all ${activeScenario === 'modelA' ? 'bg-[#1A3670] dark:bg-[#1E3A8A] text-white shadow-xs font-serif font-bold' : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] hover:bg-white border border-[#EAE2D2] dark:border-[#1E293B]'}`}
          >
            Universe Under Model A (Bulaqueña IGG)
          </button>
          <button
            onClick={() => setActiveScenario('modelB')}
            className={`px-4 py-2 rounded-xl transition-all ${activeScenario === 'modelB' ? 'bg-[#EA580C] text-white shadow-xs font-serif font-bold' : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] hover:bg-white border border-[#EAE2D2] dark:border-[#1E293B]'}`}
          >
            Universe Under Model B (Tassan RES-RAG)
          </button>
          <button
            onClick={() => setActiveScenario('synthesis')}
            className={`px-4 py-2 rounded-xl transition-all ${activeScenario === 'synthesis' ? 'bg-[#0C1836] dark:bg-[#3B82F6] text-[#FDFBF7] shadow-xs font-serif font-bold' : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] hover:bg-white border border-[#EAE2D2] dark:border-[#1E293B]'}`}
          >
            The Ultimate Dual-Layer Synthesis (Factors 99 &amp; 100)
          </button>
        </div>

        {/* Dynamic Scenario Card */}
        {activeScenario === 'modelA' && (
          <div className="rounded-xl bg-[#F4F7FF] dark:bg-[#060B1C] border border-[#CBD9FC] dark:border-[#1E3A8A] p-6 space-y-4 text-[#0C1836] dark:text-[#CBD9FC] text-sm leading-relaxed">
            <h3 className="text-base sm:text-lg font-serif font-normal text-[#1A3670] dark:text-[#93C5FD]">
              The Cyclical, Non-Singular, Eternally Computed Cosmos
            </h3>
            <ul className="space-y-2.5 list-disc list-inside text-xs font-light">
              <li>
                <strong>No Beginning of Time:</strong> The Big Bang was not a moment where time was created out of nothing. It was an <em>information bounce</em>: when matter reached maximum information density, the processor reversed direction smoothly (<MathDisplay math="a_{\text{min}} > 0" />).
              </li>
              <li>
                <strong>No Infinite Black Hole Singularities:</strong> When a dying star collapses, it hits an information capacity ceiling (<MathDisplay math="\mathcal{I}_{\text{max}}" />), creating a smooth, finite quantum core instead of an infinitely crushing point.
              </li>
              <li>
                <strong>Universal Speed of Light Remains Pristine:</strong> Photons of all energies travel at exactly the same speed <MathDisplay math="c" />, perfectly matching observations of distant gamma-ray bursts without time smearing.
              </li>
              <li>
                <strong>Cosmic Destiny:</strong> The universe never dies in a meaningless freeze; after expanding, it remains governed by an eternal algorithmic code, naturally recycling its informational degrees of freedom.
              </li>
            </ul>
          </div>
        )}

        {activeScenario === 'modelB' && (
          <div className="rounded-xl bg-[#FFF7ED] dark:bg-[#060B1C] border border-[#FDBA74] dark:border-[#C2410C] p-6 space-y-4 text-[#0C1836] dark:text-[#CBD9FC] text-sm leading-relaxed">
            <h3 className="text-base sm:text-lg font-serif font-normal text-[#9A3412] dark:text-[#FDBA74]">
              The Rhythmic, Self-Balancing Resonance Cosmos
            </h3>
            <ul className="space-y-2.5 list-disc list-inside text-xs font-light">
              <li>
                <strong>Reality is an Acoustic Dialogue:</strong> Particles and structures stay together not because of arbitrary external labels, but because their frequencies are locked in standing-wave resonance.
              </li>
              <li>
                <strong>The Two Failure Modes:</strong>
                <br />• If memory overpowers generation (<MathDisplay math="\text{RES} \gg \text{RAG}" />), the universe crystallizes into a frozen, unchangeable memory lock where time halts.
                <br />• If generation overpowers memory (<MathDisplay math="\text{RAG} \gg \text{RES}" />), the universe explodes into turbulent white noise and chaotic decoherence.
              </li>
              <li>
                <strong>Physical Time is Relational:</strong> Clocks run with rhythmic fidelity governed by the transfer function of their surrounding environment.
              </li>
              <li>
                <strong>Cosmic Destiny:</strong> The universe evolves toward a grand harmonic convergence, where structural memory and live activity reach a perpetual steady-state oscillation.
              </li>
            </ul>
          </div>
        )}

        {activeScenario === 'synthesis' && (
          <div className="rounded-xl bg-[#F0FDF4] dark:bg-[#064E3B]/20 border border-emerald-200 dark:border-emerald-800 p-6 space-y-4 text-[#0C1836] dark:text-[#CBD9FC] text-sm leading-relaxed">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-xs text-[11px] font-mono font-bold bg-emerald-600 text-white">
                FINAL VERDICT · FACTORS 99 &amp; 100
              </span>
              <h3 className="text-base sm:text-lg font-serif font-normal text-emerald-950 dark:text-emerald-300">
                The Dual-Layer Solution to Quantum Gravity (IGRT)
              </h3>
            </div>
            <p className="text-xs font-light">
              Theoretical physics does not have to choose between the Computer (Model A) and the Music (Model B). They are the <strong>two layers of the exact same reality</strong>:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-light">
              <div className="p-4 bg-white dark:bg-[#081026] rounded-lg border border-emerald-100 dark:border-emerald-900 space-y-2">
                <span className="font-bold text-blue-700 dark:text-blue-300 block uppercase font-mono">LAYER 0 · The Microscopic Engine</span>
                <p>
                  <strong>Bulaqueña IGG Software Engine:</strong> At the fundamental Planck scale (<MathDisplay math="10^{-35}" /> m), time is the raw algorithmic engine executing state updates along the Information Geometric Gradient on the quantum fiber bundle.
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-[#081026] rounded-lg border border-emerald-100 dark:border-emerald-900 space-y-2">
                <span className="font-bold text-amber-700 dark:text-amber-300 block uppercase font-mono">LAYER 1 · The Macroscopic Voice</span>
                <p>
                  <strong>Tassan RES-RAG Resonance:</strong> What human beings, clocks, and macroscopic atoms experience as the passage of time is the emergent acoustic rhythm produced when the Layer 0 engine computes reality.
                </p>
              </div>
            </div>
            <div className="p-3 bg-white dark:bg-[#081026] rounded-lg border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-300 font-mono text-center">
              Formula of Reality: <MathDisplay math="\text{Reality} = \text{Layer 0 Engine (IGG)} \xrightarrow{\quad \text{Harmonic Transfer} \quad} \text{Layer 1 Rhythm (RES-RAG)}" />
            </div>
          </div>
        )}
      </div>

      {/* QUICK COMPARISON TABLE FOR LAYMEN */}
      <div className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-8 shadow-xs space-y-5">
        <h3 className="text-xl font-serif font-normal text-[#081026] dark:text-white">
          Executive Comparison At A Glance
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-[#EAE2D2] dark:border-[#1E293B] font-['Poppins']">
            <thead className="bg-[#F9F6F0] dark:bg-[#081026] text-[#64748B] dark:text-[#94B2F5] font-mono border-b border-[#EAE2D2] dark:border-[#1E293B]">
              <tr>
                <th className="p-3">Category</th>
                <th className="p-3 text-blue-800 dark:text-blue-300">Model A: Bulaqueña IGG</th>
                <th className="p-3 text-amber-800 dark:text-amber-300">Model B: Tassan RES-RAG</th>
                <th className="p-3 text-emerald-800 dark:text-emerald-300">Unified Synthesis (IGRT)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B] text-[#475569] dark:text-[#CBD9FC] font-light">
              <tr>
                <td className="p-3 font-medium text-[#081026] dark:text-white">What is Time?</td>
                <td className="p-3">Fundamental algorithmic calculation step</td>
                <td className="p-3">Emergent acoustic rhythm between past and future</td>
                <td className="p-3 font-medium text-emerald-700 dark:text-emerald-300">Raw code (micro) → Perceived rhythm (macro)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-[#081026] dark:text-white">Mathematical Tool</td>
                <td className="p-3">Fisher Information Metric &amp; Differential Geometry</td>
                <td className="p-3">Z-Transforms &amp; Discrete Transfer Functions</td>
                <td className="p-3 font-medium text-emerald-700 dark:text-emerald-300">Principal fiber bundle P(M, S_Fisher) with connection</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-[#081026] dark:text-white">Wheeler-DeWitt Paradox</td>
                <td className="p-3">Solved: Clock runs internally via IGG gradient</td>
                <td className="p-3">Solved: Static state is DC mode; time is AC phase</td>
                <td className="p-3 font-medium text-emerald-700 dark:text-emerald-300">Static boundary hides dynamic internal flow</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-[#081026] dark:text-white">Cosmic Singularities</td>
                <td className="p-3">Avoided by Information Saturation Floor</td>
                <td className="p-3">Avoided by Structural Resonance Normalization</td>
                <td className="p-3 font-medium text-emerald-700 dark:text-emerald-300">Curvature strictly finite across all extremes</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-[#081026] dark:text-white">Astrophysical Validation</td>
                <td className="p-3">100% compliant with GRB 221009A (0.0s LIV lag)</td>
                <td className="p-3">Requires non-linear phase correction to match LIV</td>
                <td className="p-3 font-medium text-emerald-700 dark:text-emerald-300">Layer 0 guarantees exact local relativity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
