import React, { useState } from 'react';
import { MathDisplay } from './MathDisplay';

export const LaymansGuideView: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<'modelA' | 'modelB' | 'synthesis'>('synthesis');

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-20">
      
      {/* SECTION 1 HEADER - Clean Light Aesthetic */}
      <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5 text-xs font-mono text-slate-500">
          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold uppercase tracking-wider">
            Section 1 · Executive Treatise & Layman\'s Guide
          </span>
          <span>Target Audience: General Public & Interdisciplinary Physicists</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
            What Is Time? The Cosmic Operating System vs. The Universal Orchestra
          </h1>
          <p className="text-base text-slate-600 leading-relaxed max-w-4xl">
            For a century, quantum gravity has faced a devastating paradox: when you combine Einstein\'s General Relativity with Quantum Mechanics, the master equation of the universe—the Wheeler-DeWitt equation—says that <strong>nothing can change</strong> (<MathDisplay math="\hat{\mathcal{H}}|\Psi\rangle = 0" />). Time completely vanishes. How does change exist if the fundamental laws of nature are frozen?
          </p>
        </div>

        {/* Paper Credentials Pill */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="font-semibold text-slate-900">Comparing Two Landmark Frameworks:</span>
            <div className="text-slate-600 mt-0.5">
              • <strong>Model A:</strong> Bulaqueña\'s Information Geometric Gradient (IGG) (Academia.edu #164986382)<br />
              • <strong>Model B:</strong> Jean-Charles Tassan\'s Emergent Resonant-Active Time (RES-RAG)
            </div>
          </div>
          <a
            href="https://www.academia.edu/164986382/Information_Geometric_Gradient_IGG_The_Secret_Engine_of_Physics_Reality_and_Everything_Else"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shrink-0"
          >
            Read Bulaqueña (2026) ↗
          </a>
        </div>
      </div>

      {/* SIDE-BY-SIDE INTUITIVE ANALOGIES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* MODEL A CARD */}
        <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
              MODEL A: BULAQUEÑA IGG FRAMEWORK
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-900">
              The Universe as an Operating System
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Imagine the universe is not an empty container of space where clocks tick on the wall. Instead, imagine reality is a <strong>cosmic quantum computer</strong> running a continuous operating system.
            </p>

            <div className="space-y-3 text-xs text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p>
                <strong>The Software Engine:</strong> Time is not a dimension you can walk backward in. It is the <em>clock cycle of the computer processor</em>. Every time the universe calculates a difference between quantum states, that calculation step <strong>IS</strong> time.
              </p>
              <p>
                <strong>The Secret Gradient (IGG):</strong> Just like your smartphone camera adjusts contrast along the steepest lighting slope, nature updates its quantum state along the steepest information slope—the <strong>Information Geometric Gradient (IGG)</strong>.
              </p>
              <p>
                <strong>Why the Clock Never Stops:</strong> Even in empty space, quantum vacuum fluctuations act as a minimal baseline (<MathDisplay math="\epsilon_{\text{vac}} > 0" />). The computer never shuts off or crashes into timelessness.
              </p>
            </div>
          </div>

          <div className="p-3 bg-blue-50/60 rounded-lg border border-blue-100 text-xs text-blue-900 font-mono">
            Key Rule: Time is fundamental code execution (<MathDisplay math="\Delta\tau = \int \|\text{IGG}\|_g d\lambda" />).
          </div>
        </div>

        {/* MODEL B CARD */}
        <div className="rounded-2xl border border-amber-100 bg-white p-8 shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200">
              MODEL B: JEAN-CHARLES TASSAN FRAMEWORK
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-900">
              The Universe as an Orchestra
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Imagine reality is not made of inert matter or rigid coordinates, but of <strong>musical frequencies, echoes, and standing waves</strong> in an infinite acoustic hall.
            </p>

            <div className="space-y-3 text-xs text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p>
                <strong>RES (Resonant Memory / Space):</strong> The concert hall itself, whose walls retain the acoustic reverberations, echoes, and structural history of every note ever played.
              </p>
              <p>
                <strong>RAG (Resonant Active Generation / Time):</strong> The musician actively striking the drum or plucking the violin string in the present moment, generating brand new waves.
              </p>
              <p>
                <strong>Emergence of Time:</strong> Time is not a fundamental line; it is the <em>rhythmic tempo</em> born when the musician\'s live playing (RAG) converses harmoniously with the acoustic memory of the hall (RES).
              </p>
            </div>
          </div>

          <div className="p-3 bg-amber-50/60 rounded-lg border border-amber-100 text-xs text-amber-900 font-mono">
            Key Rule: Time is an emergent acoustic rhythm (<MathDisplay math="H(z) = \text{RAG}(z)/\text{RES}(z)" />).
          </div>
        </div>

      </div>

      {/* WHAT HAPPENS TO OUR UNIVERSE UNDER EACH ASSUMPTION */}
      <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-8">
        <div className="space-y-2 border-b border-slate-100 pb-5">
          <span className="text-xs font-mono font-semibold text-indigo-600 uppercase tracking-wider">
            Cosmic Scenarios & Fate Analysis
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            What Happens to Our Universe Under Each Assumption?
          </h2>
          <p className="text-sm text-slate-600">
            Select a paradigm below to simulate the destiny, mechanics, and physical reality of our universe:
          </p>
        </div>

        {/* Interactive Scenario Buttons */}
        <div className="flex flex-wrap gap-2 text-xs font-medium">
          <button
            onClick={() => setActiveScenario('modelA')}
            className={`px-4 py-2 rounded-xl transition-all ${activeScenario === 'modelA' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
          >
            Universe Under Model A (Bulaqueña IGG)
          </button>
          <button
            onClick={() => setActiveScenario('modelB')}
            className={`px-4 py-2 rounded-xl transition-all ${activeScenario === 'modelB' ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
          >
            Universe Under Model B (Tassan RES-RAG)
          </button>
          <button
            onClick={() => setActiveScenario('synthesis')}
            className={`px-4 py-2 rounded-xl transition-all ${activeScenario === 'synthesis' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
          >
            The Ultimate Dual-Layer Synthesis (Factors 99 & 100)
          </button>
        </div>

        {/* Dynamic Scenario Card */}
        {activeScenario === 'modelA' && (
          <div className="rounded-xl bg-blue-50/50 border border-blue-200 p-6 space-y-4 text-slate-800 text-sm leading-relaxed">
            <h3 className="text-lg font-bold text-blue-950 font-serif">
              The Cyclical, Non-Singular, Eternally Computed Cosmos
            </h3>
            <ul className="space-y-2.5 list-disc list-inside text-xs text-slate-700">
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
          <div className="rounded-xl bg-amber-50/50 border border-amber-200 p-6 space-y-4 text-slate-800 text-sm leading-relaxed">
            <h3 className="text-lg font-bold text-amber-950 font-serif">
              The Rhythmic, Self-Balancing Resonance Cosmos
            </h3>
            <ul className="space-y-2.5 list-disc list-inside text-xs text-slate-700">
              <li>
                <strong>Reality is a Dialogue:</strong> Particles and galaxies stay together not because of invisible hooks, but because their frequencies are locked in acoustic harmony with the space around them.
              </li>
              <li>
                <strong>The Two Failure Modes:</strong>
                <br />• If memory overpowers generation (<MathDisplay math="\text{RES} \gg \text{RAG}" />), the universe crystallizes into a frozen, unchangeable memory lock where time halts.
                <br />• If generation overpowers memory (<MathDisplay math="\text{RAG} \gg \text{RES}" />), the universe explodes into turbulent white noise and chaotic decoherence.
              </li>
              <li>
                <strong>Physical Time is Subjective:</strong> Clocks run slightly differently depending on the resonant density of their surrounding acoustic environment.
              </li>
              <li>
                <strong>Cosmic Destiny:</strong> The universe evolves toward a grand harmonic convergence, where structural memory and live activity reach a perpetual steady-state oscillation.
              </li>
            </ul>
          </div>
        )}

        {activeScenario === 'synthesis' && (
          <div className="rounded-xl bg-indigo-50/50 border border-indigo-200 p-6 space-y-4 text-slate-800 text-sm leading-relaxed">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-indigo-600 text-white">
                FINAL VERDICT · FACTORS 99 & 100
              </span>
              <h3 className="text-lg font-bold text-indigo-950 font-serif">
                The Dual-Layer Solution to Quantum Gravity
              </h3>
            </div>
            <p className="text-xs text-slate-700">
              Theoretical physics does not have to choose between the Computer (Model A) and the Music (Model B). They are the <strong>two layers of the exact same reality</strong>:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-white rounded-lg border border-indigo-100 space-y-2">
                <span className="font-bold text-blue-700 block uppercase font-mono">LAYER 0 · The Microscopic Engine</span>
                <p className="text-slate-600">
                  <strong>Bulaqueña IGG Software Engine:</strong> At the fundamental Planck scale (<MathDisplay math="10^{-35}" /> m), time is non-emergent. It is the raw algorithmic engine executing state updates along the Information Geometric Gradient.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-indigo-100 space-y-2">
                <span className="font-bold text-amber-700 block uppercase font-mono">LAYER 1 · The Macroscopic Voice</span>
                <p className="text-slate-600">
                  <strong>Tassan RES-RAG Resonance:</strong> What human beings, clocks, and macroscopic atoms experience as the passage of time is the emergent acoustic rhythm (DTFT harmonics) produced when the Layer 0 engine computes reality.
                </p>
              </div>
            </div>
            <div className="p-3 bg-white rounded-lg border border-indigo-200 text-xs text-indigo-900 font-mono text-center">
              Formula of Reality: <MathDisplay math="\text{Reality} = \text{Layer 0 Engine (IGG)} \xrightarrow{\quad \text{Harmonic Transfer} \quad} \text{Layer 1 Rhythm (RES-RAG)}" />
            </div>
          </div>
        )}
      </div>

      {/* QUICK COMPARISON TABLE FOR LAYMEN */}
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm space-y-5">
        <h3 className="text-xl font-serif font-bold text-slate-900">
          Executive Comparison At A Glance
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-200">
            <thead className="bg-slate-50 text-slate-700 font-mono border-b border-slate-200">
              <tr>
                <th className="p-3">Category</th>
                <th className="p-3 text-blue-800">Model A: Bulaqueña IGG</th>
                <th className="p-3 text-amber-800">Model B: Tassan RES-RAG</th>
                <th className="p-3 text-indigo-800">Unified Synthesis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="p-3 font-semibold text-slate-900">What is Time?</td>
                <td className="p-3">Fundamental algorithmic calculation step</td>
                <td className="p-3">Emergent acoustic rhythm between past and future</td>
                <td className="p-3 font-semibold text-indigo-900">Raw code (micro) → Perceived rhythm (macro)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Mathematical Tool</td>
                <td className="p-3">Fisher Information Metric & Differential Geometry</td>
                <td className="p-3">Z-Transforms & Discrete Fourier Frequencies</td>
                <td className="p-3 font-semibold text-indigo-900">Wick-rotation maps Fisher space to Z-plane</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">The Wheeler-DeWitt Paradox</td>
                <td className="p-3">Solved: Clock runs internally via IGG gradient</td>
                <td className="p-3">Solved: Static state is DC mode; time is AC phase</td>
                <td className="p-3 font-semibold text-indigo-900">Static boundary hides dynamic internal flow</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Cosmic Singularities</td>
                <td className="p-3">Avoided by Information Saturation Floor</td>
                <td className="p-3">Avoided by Structural Resonance Normalization</td>
                <td className="p-3 font-semibold text-indigo-900">Curvature strictly finite across all extremes</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Astrophysical Validation</td>
                <td className="p-3">100% compliant with GRB 221009A (0.0s LIV lag)</td>
                <td className="p-3">Requires non-linear phase correction to match LIV</td>
                <td className="p-3 font-semibold text-indigo-900">Layer 0 guarantees exact local relativity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
