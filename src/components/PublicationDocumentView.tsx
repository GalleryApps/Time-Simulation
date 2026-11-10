import React, { useState } from 'react';
import { MathDisplay } from './MathDisplay';

export const PublicationDocumentView: React.FC = () => {
  const [activePage, setActivePage] = useState<'page1' | 'page2' | 'page3' | 'page4' | 'verdict'>('page1');

  const downloadLaTeXMonograph = () => {
    const latexText = `% Archival Publication Monograph: The Quantum Gravity Problem of Time
\\documentclass[11pt,a4paper]{article}
\\usepackage{amsmath,amssymb,amsfonts,bm}
\\usepackage{hyperref}
\\title{The Quantum Gravity Problem of Time: A 500-Criterion Comparative Monograph}
\\author{Marlon D. Bulaque\\~na \\and Jean-Charles Tassan}
\\date{March 2026}
\\begin{document}
\\maketitle
\\begin{abstract}
We present the formal evaluation of Information-Geometric Extended Gravity (IGEG) vs. the RES=RAG Emergent Time Model, culminating in the unified Information-Geometric Resonant Time (IGRT) framework.
\\end{abstract}
\\section{The Core Identity}
\\begin{equation}
d\\tau = \\sqrt{-g_{\\mu\\nu}\\dot{x}^\\mu\\dot{x}^\\nu} d\\lambda \\equiv \\frac{\\hbar}{\\Delta E} \\sqrt{g_{ij}^{\\text{FR}}\\dot{\\theta}^i\\dot{\\theta}^j} d\\lambda
\\end{equation}
\\end{document}`;

    const blob = new Blob([latexText], { type: 'text/x-tex' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'QG_Problem_of_Time_Archival_Monograph.tex';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-10 max-w-5xl mx-auto pb-24 text-[#0C1836] dark:text-[#FDFBF7]">
      
      {/* Document Publication Header - Oxford Monograph Edition */}
      <div className="rounded-2xl p-6 sm:p-10 shadow-xs space-y-6 bg-white dark:bg-[#0B1530] border border-[#EAE2D2] dark:border-[#1E293B]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAE2D2] dark:border-[#1E293B] pb-5 text-xs font-mono text-[#64748B] dark:text-[#94B2F5]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-xs bg-[#EBF0FE] dark:bg-[#1E3A8A]/40 text-[#1A3670] dark:text-[#93C5FD] font-semibold uppercase tracking-wider border border-[#CBD9FC] dark:border-[#1E3A8A]">
              Publication Monograph · QG-2026-IGG-TASSAN
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={downloadLaTeXMonograph}
              className="text-[#1A3670] dark:text-[#93C5FD] hover:underline font-mono text-xs flex items-center gap-1"
            >
              <span>Download Monograph (.tex)</span>
              <span aria-hidden="true">↓</span>
            </button>
            <span className="text-[#CBD5E1]">·</span>
            <a
              href="https://www.academia.edu/164986382/Information_Geometric_Gradient_IGG_The_Secret_Engine_of_Physics_Reality_and_Everything_Else"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A3670] dark:text-[#93C5FD] hover:text-[#081026] font-medium transition-colors font-serif"
            >
              Academia.edu #164986382 ↗
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl sm:text-4xl font-serif font-normal text-[#081026] dark:text-white tracking-tight leading-tight">
            The Quantum Gravity Problem of Time: A Comprehensive Publication Monograph
          </h1>
          <p className="text-sm sm:text-base text-[#475569] dark:text-[#CBD9FC] leading-relaxed max-w-4xl font-light">
            An adversarial comparative simulation and mathematical treatise evaluating the <strong>Bulaqueña Information-Geometric Extended Gravity (IGEG / IGG)</strong> model versus <strong>Jean-Charles Tassan’s Emergent Resonant-Active Time (RES=RAG)</strong> framework.
          </p>
        </div>

        {/* Multi-Page Navigation Bar */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-[#EAE2D2] dark:border-[#1E293B]">
          <button
            onClick={() => setActivePage('page1')}
            className={`px-4 py-2.5 rounded-xl text-xs font-serif font-semibold transition-all ${
              activePage === 'page1'
                ? 'bg-[#0C1836] dark:bg-[#3B82F6] text-[#FDFBF7] shadow-xs'
                : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] hover:bg-white border border-[#EAE2D2] dark:border-[#1E293B]'
            }`}
          >
            Page 1: Layman Foundations &amp; Equations
          </button>
          <button
            onClick={() => setActivePage('page2')}
            className={`px-4 py-2.5 rounded-xl text-xs font-serif font-semibold transition-all ${
              activePage === 'page2'
                ? 'bg-[#1A3670] dark:bg-[#1E3A8A] text-white shadow-xs'
                : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] hover:bg-white border border-[#EAE2D2] dark:border-[#1E293B]'
            }`}
          >
            Page 2: Model A (Bulaqueña IGG)
          </button>
          <button
            onClick={() => setActivePage('page3')}
            className={`px-4 py-2.5 rounded-xl text-xs font-serif font-semibold transition-all ${
              activePage === 'page3'
                ? 'bg-[#B45309] dark:bg-[#78350F] text-white shadow-xs'
                : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] hover:bg-white border border-[#EAE2D2] dark:border-[#1E293B]'
            }`}
          >
            Page 3: Model B (Tassan RES=RAG)
          </button>
          <button
            onClick={() => setActivePage('page4')}
            className={`px-4 py-2.5 rounded-xl text-xs font-serif font-semibold transition-all ${
              activePage === 'page4'
                ? 'bg-[#991B1B] dark:bg-[#881337] text-white shadow-xs'
                : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] hover:bg-white border border-[#EAE2D2] dark:border-[#1E293B]'
            }`}
          >
            Page 4: Stress-Tests &amp; Falsifiability
          </button>
          <button
            onClick={() => setActivePage('verdict')}
            className={`px-4 py-2.5 rounded-xl text-xs font-serif font-semibold transition-all ${
              activePage === 'verdict'
                ? 'bg-[#EA580C] text-white shadow-xs'
                : 'bg-[#FFEDD5] dark:bg-[#064E3B]/30 text-[#9A3412] dark:text-[#A7F3D0] hover:bg-[#FDBA74]/30 border border-[#FDBA74] dark:border-[#059669]'
            }`}
          >
            ★ The Ultimate Layman Verdict
          </button>
        </div>
      </div>

      {/* PAGE 1: FOUNDATIONAL PREMISES */}
      {activePage === 'page1' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-10 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-xs text-xs font-mono font-bold bg-[#EBF0FE] dark:bg-[#1E3A8A]/40 text-[#1A3670] dark:text-[#93C5FD] border border-[#CBD9FC] dark:border-[#1E3A8A]">
                PAGE 1 · FOUNDATIONAL PREMISES
              </span>
              <span className="text-xs text-[#64748B] dark:text-[#94B2F5] font-mono">Accessible Theory &amp; Analogies</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-serif font-normal text-[#081026] dark:text-white">
              Foundational Premises &amp; Equations Explained for the Layman
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#475569] dark:text-[#CBD9FC] leading-relaxed font-light">
              <h3 className="text-base font-serif font-medium text-[#081026] dark:text-white">
                1. The Core Problem of Time in Quantum Gravity: Why Standard Physics Is Broken
              </h3>
              <p>
                When you combine Einstein’s General Relativity with quantum mechanics, time disappears from the fundamental equations. General Relativity treats time as dynamic and geometric, whereas quantum mechanics requires an external background clock.
              </p>
              <p>
                Attempting canonical quantization yields the Wheeler-DeWitt equation:
              </p>

              <div className="p-4 rounded-xl bg-[#FDFBF7] dark:bg-[#081026] border border-[#EAE2D2] dark:border-[#1E293B] text-[#081026] dark:text-white font-mono text-center">
                <MathDisplay block math="\hat{\mathcal{H}}|\Psi\rangle = 0" />
                <p className="text-xs text-[#64748B] dark:text-[#94B2F5] mt-2 font-['Poppins'] font-light">
                  <em>Translation: The total Hamiltonian constraint leaves the cosmos frozen in place with no external time evolution.</em>
                </p>
              </div>
            </div>

            {/* Intuitive Model Breakdowns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-[#F4F7FF] dark:bg-[#060B1C] border border-[#CBD9FC] dark:border-[#1E3A8A] space-y-3">
                <span className="inline-block px-2.5 py-0.5 rounded-xs text-xs font-mono font-bold bg-[#EBF0FE] dark:bg-[#1E3A8A]/40 text-[#1A3670] dark:text-[#93C5FD]">
                  MODEL A: BULAQUEÑA IGG FRAMEWORK
                </span>
                <h4 className="text-lg font-serif font-normal text-[#081026] dark:text-white">
                  The Microscopic CPU Clock Engine
                </h4>
                <p className="text-xs text-[#475569] dark:text-[#CBD9FC] leading-relaxed font-light">
                  Time is an active computational process. Every time the universe calculates a quantum state update along the steepest Information Geometric Gradient (IGG), that calculation step is what we experience as elapsed proper time.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FFF7ED] dark:bg-[#060B1C] border border-[#FDBA74] dark:border-[#C2410C] space-y-3">
                <span className="inline-block px-2.5 py-0.5 rounded-xs text-xs font-mono font-bold bg-[#FFEDD5] dark:bg-[#78350F]/40 text-[#9A3412] dark:text-[#FDBA74]">
                  MODEL B: TASSAN RES=RAG FRAMEWORK
                </span>
                <h4 className="text-lg font-serif font-normal text-[#081026] dark:text-white">
                  The Macroscopic Acoustic Resonance
                </h4>
                <p className="text-xs text-[#475569] dark:text-[#CBD9FC] leading-relaxed font-light">
                  At the microscopic Planck scale, time is not fundamental. Time emerges as the rhythmic tempo generated when live active novelty (RAG) interacts with structural memory (RES) in the frequency domain.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PAGE 2: MODEL A */}
      {activePage === 'page2' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-10 shadow-xs space-y-6">
            <span className="px-2.5 py-0.5 rounded-xs text-xs font-mono font-bold bg-blue-100 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
              PAGE 2 · FORMAL ANALYSIS: MODEL A (IGEG)
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-normal text-[#081026] dark:text-white">
              Bulaqueña Information-Geometric Extended Gravity
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD9FC] leading-relaxed font-light">
              Model A formulates gravity as coupled to an informational scalar field <MathDisplay math="\psi" /> with stress-energy tensor <MathDisplay math="I_{\mu\nu} = \nabla_\mu\psi\nabla_\nu\psi - \frac{1}{2}g_{\mu\nu}(\nabla\psi)^2 - g_{\mu\nu}V(\psi)" />. By enforcing contracted Bianchi identities, energy-momentum conservation is strictly preserved.
            </p>
            <div className="p-4 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] text-center font-mono text-xs overflow-x-auto">
              <MathDisplay math="G_{\mu\nu} = 8\pi G (T_{\mu\nu} + I_{\mu\nu}), \quad \nabla^\mu(T_{\mu\nu} + I_{\mu\nu}) = 0" />
            </div>
          </div>
        </div>
      )}

      {/* PAGE 3: MODEL B */}
      {activePage === 'page3' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-10 shadow-xs space-y-6">
            <span className="px-2.5 py-0.5 rounded-xs text-xs font-mono font-bold bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900">
              PAGE 3 · FORMAL ANALYSIS: MODEL B (RES=RAG)
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-normal text-[#081026] dark:text-white">
              Tassan Emergent Resonant-Active Time
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD9FC] leading-relaxed font-light">
              Model B models temporal progression through discrete relational ruptures governed by the rational transfer function <MathDisplay math="H(z) = \text{RAG}(z)/\text{RES}(z)" /> in the complex Z-domain.
            </p>
            <div className="p-4 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] text-center font-mono text-xs overflow-x-auto">
              <MathDisplay math="H(z) = \frac{\sum_{k=0}^M b_k z^{-k}}{1 + \sum_{k=1}^N a_k z^{-k}}, \quad |p_k| < 1 \implies \text{Stable Temporal Flow}" />
            </div>
          </div>
        </div>
      )}

      {/* PAGE 4: STRESS TESTS */}
      {activePage === 'page4' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-10 shadow-xs space-y-6">
            <span className="px-2.5 py-0.5 rounded-xs text-xs font-mono font-bold bg-rose-100 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-900">
              PAGE 4 · ADVERSARIAL STRESS-TESTS &amp; FALSIFIABILITY
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-normal text-[#081026] dark:text-white">
              Empirical Discriminators &amp; Observational Thresholds
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD9FC] leading-relaxed font-light">
              Contrasting theoretical predictions with experimental data from LHAASO GRB 221009A (null LIV delay), Cassini tracking (Shapiro delay parameter <MathDisplay math="|\gamma_{\text{PPN}}-1| \le 10^{-5}" />), and NANOGrav pulsar timing array residuals.
            </p>
          </div>
        </div>
      )}

      {/* THE ULTIMATE VERDICT */}
      {activePage === 'verdict' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-[#F0FDF4] dark:bg-[#064E3B]/20 p-6 sm:p-10 shadow-xs space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-xs text-[11px] font-mono font-bold bg-emerald-600 text-white">
                THE DUAL-LAYER SYNTHESIS · ULTIMATE RESOLUTION
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-normal text-emerald-950 dark:text-emerald-300">
                The Dual-Layer Synthesis (IGRT)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 leading-relaxed font-light">
              Both models are mutually tenable across two distinct layers of reality. Theoretical physics does not need to choose between the computational kernel and the macroscopic symphony:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-light">
              <div className="p-4 bg-white dark:bg-[#081026] rounded-xl border border-emerald-200 dark:border-emerald-900 space-y-2">
                <span className="font-bold text-blue-900 dark:text-blue-300 font-mono block">
                  LAYER 0: Foundational Software Engine (Model A)
                </span>
                <p className="text-[#334155] dark:text-[#CBD9FC]">
                  At the microscopic Planck scale (<MathDisplay math="10^{-35}\text{ m}" />), the Bulaqueña IGG framework operates as the fundamental kernel. Proper time is computed along the Information Geometric Gradient on the quantum state fiber bundle.
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-[#081026] rounded-xl border border-emerald-200 dark:border-emerald-900 space-y-2">
                <span className="font-bold text-amber-900 dark:text-amber-300 font-mono block">
                  LAYER 1: Phenomenological User Interface (Model B)
                </span>
                <p className="text-[#334155] dark:text-[#CBD9FC]">
                  To macroscopic observers, living organisms, and laboratory clocks, the billions of underlying software updates compile into an emergent resonant rhythm (Tassan’s RES=RAG balance).
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#081026] text-white space-y-2">
              <div className="text-xs font-mono font-bold uppercase text-[#EA580C]">
                Final Archival Verdict
              </div>
              <p className="text-xs sm:text-sm font-serif font-light leading-relaxed text-[#CBD9FC]">
                Time is the computational heartbeat of the cosmos—calculated with geometric rigor by the Information Geometric Gradient at the Planck scale, and sung to the universe as an emergent acoustic rhythm through resonant harmony.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
