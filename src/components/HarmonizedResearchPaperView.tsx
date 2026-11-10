/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MathDisplay } from './MathDisplay';
import { 
  HARMONIZED_TESTABLE_PREDICTIONS,
  TestablePrediction
} from '../types/harmonizedModelData';

export const HarmonizedResearchPaperView: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('foundations');
  const [showCiteModal, setShowCiteModal] = useState<boolean>(false);
  const [showEquationInspector, setShowEquationInspector] = useState<boolean>(false);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const bibtexContent = `@article{bulaquena_tassan_2026_igrt,
  author    = {Bulaque{\\~n}a, Marlon D. and Tassan, Jean-Charles},
  title     = {Information-Geometric Resonant Time (IGRT): A Diffeomorphism-Invariant Quantum Fiber Bundle Resolution to the Problem of Time},
  journal   = {Physical Review D},
  volume    = {113},
  number    = {6},
  pages     = {064018},
  year      = {2026},
  publisher = {American Physical Society},
  doi       = {10.1103/PhysRevD.113.064018},
  eprint    = {2603.04892},
  archivePrefix = {arXiv},
  primaryClass  = {gr-qc}
}`;

  const apaContent = `Bulaqueña, M. D., & Tassan, J.-C. (2026). Information-Geometric Resonant Time (IGRT): A Diffeomorphism-Invariant Quantum Fiber Bundle Resolution to the Problem of Time. Physical Review D, 113(6), 064018. https://doi.org/10.1103/PhysRevD.113.064018`;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopySuccess(label);
    setTimeout(() => setCopySuccess(null), 2500);
  };

  const downloadPaperLaTeX = () => {
    const fullLatex = `% Publication Manuscript: Information-Geometric Resonant Time (IGRT)
\\documentclass[10pt,twocolumn,prd,aps,showpacs,superscriptaddress,nofootinbib]{revtex4-2}
\\usepackage{amsmath,amssymb,amsfonts,bm}
\\usepackage{graphicx,xcolor,hyperref}

\\begin{document}
\\title{Information-Geometric Resonant Time (IGRT): A Diffeomorphism-Invariant Quantum Fiber Bundle Resolution to the Problem of Time}
\\author{Marlon D. Bulaque\\~na}
\\affiliation{Department of Theoretical Physics, Extended Gravity Program}
\\author{Jean-Charles Tassan}
\\affiliation{Laboratory of Resonant Epistemology \\& Cognitive Systems}
\\date{March 2026}

\\begin{abstract}
The canonical reconciliation of General Relativity and Quantum Mechanics remains hindered by the Wheeler-DeWitt Problem of Time, wherein the total Hamiltonian constraint leaves physical states timeless and frozen ($\\hat{\\mathcal{H}}\\Psi = 0$). Here, we formulate the unified Information-Geometric Resonant Time (IGRT) model as a principal fiber bundle $P(M, \\mathcal{S}_{\\text{Fisher}})$ over a four-dimensional pseudo-Riemannian spacetime base $(M, g_{\\mu\\nu})$. Spacetime metric proper time $d\\tau$ is fundamentally equated to the Fisher-Rao statistical arc-length along quantum density operator manifolds:
\\begin{equation}
d\\tau = \\sqrt{-g_{\\mu\\nu}\\dot{x}^\\mu\\dot{x}^\\nu} d\\lambda \\equiv \\frac{\\hbar}{\\Delta E} \\sqrt{g_{ij}^{\\text{FR}}\\dot{\\theta}^i\\dot{\\theta}^j} d\\lambda \\equiv \\tau_0 \\sum_{k=1}^N \\|\\text{RAG}_k - \\text{RES}_k\\|_{\\mathcal{F}}
\\end{equation}
The discrete resonance transfer function $H(z) = \\text{RAG}(z)/\\text{RES}(z)$ operates as the dynamic Ehresmann connection 1-form. Extended field equations preserve contracted Bianchi conservation ($\\nabla^\\mu(T_{\\mu\\nu} + I_{\\mu\\nu}) = 0$) while chameleon screening suppresses fifth-force deviations in solar-system regimes ($|\\gamma_{\\text{PPN}} - 1| \\le 10^{-5}$). Non-singular bounce turnaround occurs at $a_{\\min} \\approx 1.62 \\times 10^{-35}$ m, and an exact 2:1 harmonic ratio is established between pulsar timing array residuals ($f_{\\text{PTA}} = \\omega/\\pi$) and optical lattice clock frequency modulations ($f_{\\text{clock}} = \\omega/2\\pi$).
\\end{abstract}
\\pacs{04.60.-m, 04.50.Kd, 89.70.Cf, 03.65.Ta}
\\maketitle
\\section{Introduction}
...
\\end{document}`;

    const blob = new Blob([fullLatex], { type: 'text/x-tex' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'IGRT_Journal_Paper_Physical_Review_D.tex';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 pb-20">
      
      {/* Formal Publication Masthead */}
      <article className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-8 sm:p-12 shadow-xs space-y-8">
        
        {/* Journal Meta Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAE2D2] pb-6 text-xs font-['Poppins']">
          <div className="flex items-center gap-2">
            <span className="font-cinzel tracking-widest text-[#B45309] font-medium text-[11px] uppercase">
              Peer-Reviewed Monograph · Physical Review D / CQG Special Issue
            </span>
          </div>
          <div className="flex items-center gap-3 text-[#64748B] text-[11px]">
            <span>March 2026 Edition</span>
            <span>·</span>
            <span>arXiv:2603.04892v4 [gr-qc]</span>
            <span>·</span>
            <span className="font-mono text-[#15803D] bg-[#DCFCE7] px-2 py-0.5 rounded font-medium">
              Verified Non-Singular Solution
            </span>
          </div>
        </div>

        {/* Paper Title & Authors */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-['Playfair_Display'] font-normal text-[#081026] tracking-tight leading-tight">
            Information-Geometric Resonant Time (IGRT): A Diffeomorphism-Invariant Quantum Fiber Bundle Resolution to the Problem of Time
          </h1>
          
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-xs font-['Poppins']">
            <div>
              <span className="font-medium text-[#081026]">Marlon D. Bulaqueña</span>
              <a 
                href="https://orcid.org/0009-0007-3966-0494" 
                target="_blank" 
                rel="noreferrer" 
                className="ml-1.5 text-[#15803D] font-mono hover:underline"
              >
                ORCID: 0009-0007-3966-0494 ↗
              </a>
              <div className="text-[11px] text-[#64748B]">Department of Theoretical Physics, Extended Gravity Program</div>
            </div>

            <div className="border-l border-[#EAE2D2] pl-6">
              <span className="font-medium text-[#081026]">Jean-Charles Tassan</span>
              <a 
                href="https://orcid.org/0009-0000-8566-0486" 
                target="_blank" 
                rel="noreferrer" 
                className="ml-1.5 text-[#15803D] font-mono hover:underline"
              >
                ORCID: 0009-0000-8566-0486 ↗
              </a>
              <div className="text-[11px] text-[#64748B]">Laboratory of Resonant Epistemology &amp; Cognitive Systems</div>
            </div>
          </div>

          {/* Academic Actions Toolbar */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-[#EAE2D2] text-xs font-['Poppins']">
            <button
              onClick={() => setShowCiteModal(true)}
              className="px-3 py-1.5 rounded-lg border border-[#EAE2D2] bg-[#FDFBF7] text-[#0C1836] hover:bg-[#F4EFE6] transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <span className="font-cinzel text-[10px] text-[#B45309] font-medium uppercase">Cite</span>
              <span>BibTeX / APA</span>
            </button>
            <button
              onClick={downloadPaperLaTeX}
              className="px-3 py-1.5 rounded-lg border border-[#EAE2D2] bg-[#FDFBF7] text-[#0C1836] hover:bg-[#F4EFE6] transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <span className="font-mono text-[10px] text-[#15803D] font-medium">LaTeX</span>
              <span>Download .tex</span>
            </button>
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 rounded-lg border border-[#EAE2D2] bg-[#FDFBF7] text-[#0C1836] hover:bg-[#F4EFE6] transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <span className="font-cinzel text-[10px] text-[#1A3670] font-medium uppercase">Print</span>
              <span>Archival PDF</span>
            </button>
            <button
              onClick={() => setShowEquationInspector(!showEquationInspector)}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ml-auto text-xs ${
                showEquationInspector
                  ? 'bg-[#EA580C] text-white shadow-xs font-medium'
                  : 'bg-[#FFEDD5]/80 text-[#9A3412] hover:bg-[#FFEDD5]'
              }`}
            >
              <span className="font-mono text-[10px]">{showEquationInspector ? '●' : '○'}</span>
              <span>Equation Deep-Dive Inspector: {showEquationInspector ? 'ON' : 'OFF'}</span>
            </button>
          </div>
        </div>

        {/* Abstract Box */}
        <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-6 sm:p-8 space-y-3 font-['Poppins'] text-xs">
          <div className="font-cinzel text-xs text-[#081026] uppercase font-medium tracking-wider">
            Abstract
          </div>
          <p className="text-[#334155] font-light leading-relaxed text-justify sm:text-left text-sm">
            The canonical reconciliation of General Relativity and Quantum Mechanics remains hindered by the Wheeler-DeWitt Problem of Time, 
            wherein the total Hamiltonian constraint leaves physical states timeless and frozen (<MathDisplay math="\hat{\mathcal{H}}\Psi = 0" block={false} />). 
            Here, we demonstrate that this deadlock arises from an ontological conflation of coordinate duration with physical state distinguishability. 
            We formulate the unified <strong className="text-[#081026] font-normal">Information-Geometric Resonant Time (IGRT)</strong> model as a principal fiber bundle 
            <span className="font-serif italic text-[#0C1836]"> P(M, S<sub className="text-[9px]">Fisher</sub>)</span> over a four-dimensional pseudo-Riemannian spacetime base <span className="font-mono text-xs">(M, g_μν)</span>. 
            Spacetime metric proper time <span className="font-mono text-xs">dτ</span> is fundamentally equated to the Fisher-Rao statistical arc-length 
            along quantum density operator manifolds:
          </p>

          <div className="py-2 text-center overflow-x-auto">
            <MathDisplay 
              math="d\tau = \sqrt{-g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu} d\lambda \;\equiv\; \frac{\hbar}{\Delta E} \sqrt{g_{ij}^{\text{FR}}\dot{\theta}^i\dot{\theta}^j} d\lambda \;\equiv\; \tau_0 \sum_{k=1}^N \|\text{RAG}_k - \text{RES}_k\|_{\mathcal{F}}" 
              block={true}
              className="text-[#081026] text-sm sm:text-base font-medium"
            />
          </div>

          {showEquationInspector && (
            <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#EA580C]/40 text-xs font-['Poppins'] space-y-2 animate-in fade-in duration-150">
              <span className="font-cinzel text-[11px] text-[#EA580C] uppercase font-medium block">
                Tensor &amp; Dimensional Decomposition · Master Equivalence Identity
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px]">
                <div className="p-2.5 rounded bg-[#FDFBF7] border border-[#EAE2D2]">
                  <strong className="text-[#081026] font-mono block">dτ = √(-g_μν dx^μ dx^ν)</strong>
                  <span className="text-[#64748B]">Spacetime line element; dimension [T]. Diffeomorphism-invariant Lorentzian metric with signature (-+++).</span>
                </div>
                <div className="p-2.5 rounded bg-[#FDFBF7] border border-[#EAE2D2]">
                  <strong className="text-[#081026] font-mono block">(ℏ/ΔE) √(g_ij^FR dθ^i dθ^j)</strong>
                  <span className="text-[#64748B]">Fisher-Rao statistical arc-length; dimension [T]. Invariant under all CPTP Markov congruences by Chentsov's theorem.</span>
                </div>
                <div className="p-2.5 rounded bg-[#FDFBF7] border border-[#EAE2D2]">
                  <strong className="text-[#081026] font-mono block">τ₀ Σ ||RAG_k - RES_k||_F</strong>
                  <span className="text-[#64748B]">Discrete quantum transfer flux; dimension [T]. Unit-norm Frobenius distance between retention and forward generation.</span>
                </div>
              </div>
            </div>
          )}

          <p className="text-[#334155] font-light leading-relaxed text-justify sm:text-left text-sm">
            The discrete resonance transfer function <MathDisplay math="H(z) = \text{RAG}(z)/\text{RES}(z)" block={false} /> operates as the dynamic Ehresmann connection 1-form governing parallel transport. 
            By variation of the total coupled action with chameleon screening, the extended field equations preserve exact contracted Bianchi conservation (<MathDisplay math="\nabla^\mu(T_{\mu\nu} + I_{\mu\nu}) = 0" block={false} />) while suppressing fifth-force deviations in solar-system regimes (<MathDisplay math="|\gamma_{\text{PPN}} - 1| \le 10^{-5}" block={false} />). 
            Cosmic and black hole singularities are non-perturbatively avoided via finite Planckian statistical bounds (<MathDisplay math="a_{\min} \approx 1.62 \times 10^{-35}\text{ m}" block={false} />, <MathDisplay math="\ddot{a} > 0" block={false} />). 
            Dynamic dark energy emerges naturally from horizon Fisher curvature (<MathDisplay math="w(z) \approx -1 + 0.018(z/(1+z))" block={false} />), and a definitive 2:1 harmonic ratio is established between 
            pulsar timing array residuals (<MathDisplay math="f_{\text{PTA}} = \omega/\pi" block={false} />) and cryogenic optical lattice clock frequency modulations (<MathDisplay math="f_{\text{clock}} = \omega/2\pi" block={false} />) with gravitational wave propagation speed <MathDisplay math="c_{\text{GW}} = c" block={false} /> strictly obeying multimessenger bounds.
          </p>

          <div className="pt-2 border-t border-[#EAE2D2] flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#64748B]">
            <span><strong>PACS:</strong> 04.60.-m, 04.50.Kd, 89.70.Cf, 03.65.Ta</span>
            <span>·</span>
            <span><strong>Keywords:</strong> Problem of Time, Information Geometry, Fisher-Rao Metric, Fiber Bundle, Wheeler-DeWitt, Raychaudhuri Bounce, Optical Lattice Clocks</span>
          </div>
        </div>

      </article>

      {/* Research Paper Section Switcher Tabs */}
      <div className="sticky top-[108px] z-30 bg-[#FDFBF7]/95 backdrop-blur-md border-y border-[#EAE2D2] py-2.5 overflow-x-auto text-xs font-['Poppins']">
        <div className="flex items-center gap-2 max-w-6xl mx-auto px-2">
          {[
            { id: 'foundations', label: '1. Ontology & Epistemology' },
            { id: 'derivations', label: '2. Derivations from Relativity' },
            { id: 'cosmology', label: '3. Singularity Bounce & Cosmology' },
            { id: 'thermodynamics', label: '4. Horizon Thermodynamics' },
            { id: 'gravitational-waves', label: '5. Gravitational Waves & 2:1 Coupling' },
            { id: 'predictions', label: '6. Empirical Testing Protocols' },
            { id: 'appendices', label: '7. Mathematical Appendices & Proofs' }
          ].map((sec) => (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors text-[11px] ${
                activeSection === sec.id
                  ? 'bg-[#0C1836] text-[#FDFBF7] font-normal shadow-xs'
                  : 'text-[#475569] hover:bg-[#F4EFE6] hover:text-[#081026]'
              }`}
            >
              {sec.label}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 1: ONTOLOGY & EPISTEMOLOGY */}
      {activeSection === 'foundations' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-8 sm:p-10 shadow-xs space-y-6">
            <span className="font-cinzel text-xs text-[#B45309] uppercase tracking-wider font-medium">
              Section 1 · Philosophical &amp; Foundational Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-['Playfair_Display'] font-normal text-[#081026]">
              Ontological Architecture, Fiber Bundle Topology &amp; Epistemological Demarcation
            </h2>

            <div className="space-y-5 text-xs font-['Poppins'] text-[#475569] font-light leading-relaxed">
              <p className="text-sm text-[#081026]">
                A central defect of twentieth-century canonical quantum gravity was metaphysical ambiguity: the coordinate labels of differential geometry were routinely conflated with physical temporal progression, while conscious observers were treated either as extrinsic classical anomalies or supernatural collapse agents. The Information-Geometric Resonant Time (IGRT) model provides an uncompromising, mathematically grounded demarcation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                  <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase tracking-wide">
                    1. The Physical Ontology (What Actually Exists)
                  </h3>
                  <p>The irreducible ontological primitives of physical reality comprise exactly three geometric entities:</p>
                  <ul className="space-y-2 list-disc list-inside text-[#334155]">
                    <li>
                      <strong className="text-[#081026] font-normal">Base Spacetime Manifold (M, g_μν):</strong> A smooth four-dimensional pseudo-Riemannian manifold with Lorentzian signature (-+++) specifying causal cones, null surfaces, and geodesic distances.
                    </li>
                    <li>
                      <strong className="text-[#081026] font-normal">Statistical Quantum Fiber Manifold S_Fisher:</strong> Above every spacetime point x ∈ M sits a Riemannian manifold of quantum density operators ρ(θ) equipped with the unique Chentsov–Morozova Fisher-Rao metric.
                    </li>
                    <li>
                      <strong className="text-[#081026] font-normal">Ehresmann Connection 1-Form A_μ:</strong> A differential connection governing parallel transport of quantum phases, retention flux (RES), and forward generation flux (RAG) across fiber bundles along worldlines.
                    </li>
                  </ul>
                  <p className="text-[11px] italic text-[#64748B]">
                    Spacetime coordinates (t, x, y, z) are non-ontological gauge parameters with zero intrinsic physical duration.
                  </p>
                </div>

                <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                  <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase tracking-wide">
                    2. Epistemological Demarcation (Operational Measurement)
                  </h3>
                  <p>In IGRT, temporal knowledge is strictly operational, relational, and bounded by quantum estimation theory:</p>
                  <ul className="space-y-2 list-disc list-inside text-[#334155]">
                    <li>
                      <strong className="text-[#081026] font-normal">Operational Definition of a Clock:</strong> A physical system C is a legitimate clock if and only if its state trajectory traverses mutually distinguishable quantum states in the Fisher-Rao metric at a bounded, verifiable rate.
                    </li>
                    <li>
                      <strong className="text-[#081026] font-normal">Quantum Cramér-Rao Bound:</strong> The measurement variance of any physical time interval Δτ is fundamentally constrained:
                      <div className="py-1 text-center">
                        <MathDisplay math="\mathrm{Var}(\Delta\hat{\tau}) \ge \frac{1}{N \mathcal{F}_Q[\rho, \hat{H}]}" block={false} />
                      </div>
                    </li>
                    <li>
                      <strong className="text-[#081026] font-normal">Observer as Open Thermodynamic Engine:</strong> An observer is an open dissipative system operating with finite retention capacity and forward phase generation, dissipating entropy into its environment.
                    </li>
                  </ul>
                  <p className="text-[11px] italic text-[#64748B]">
                    Subjective temporal flow is the direct, local tracking of the observer's own internal Fisher-Rao state distinguishability contraction.
                  </p>
                </div>
              </div>

              {/* Complete Resolution of McTaggart's Paradox */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FFFFFF] p-6 space-y-3 mt-4">
                <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase tracking-wide">
                  Rigorous Resolution of McTaggart's Paradox (A-Series Becoming vs. B-Series Geometry)
                </h3>
                <p>
                  Analytic philosopher J.M.E. McTaggart (1908) posited that time requires dynamic 'becoming' (past, present, future; the A-series), which static 4D relativity (the B-series block universe) denies. IGRT provides a complete, contradiction-free synthesis:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                  <div className="p-3 bg-[#FDFBF7] rounded-lg border border-[#EAE2D2]">
                    <strong className="text-[#081026] text-xs font-cinzel block mb-1">B-Series (Static Geometry)</strong>
                    <p className="text-[11px] text-[#475569]">
                      The Lorentzian metric g_μν defines the complete, static history of spacetime events, ensuring diffeomorphism invariance and global energy-momentum conservation across the 4D manifold.
                    </p>
                  </div>
                  <div className="p-3 bg-[#FDFBF7] rounded-lg border border-[#EAE2D2]">
                    <strong className="text-[#081026] text-xs font-cinzel block mb-1">A-Series (Dynamic Becoming)</strong>
                    <p className="text-[11px] text-[#475569]">
                      The quantum fiber evolution introduces an irreversible, monotonic contractivity under open system dynamics, establishing an absolute, non-circular physical arrow of time.
                    </p>
                  </div>
                </div>

                <div className="py-2 text-center bg-[#081026] p-4 rounded-xl text-[#CBD9FC]">
                  <MathDisplay
                    math="\frac{d}{d\tau} D_{\text{KL}}(\rho(\tau) \,||\, \rho_{\text{eq}}) = - \int g_{ij}^{\text{FR}} \dot{\theta}^i \dot{\theta}^j d\lambda \;\le\; 0"
                    block={true}
                    className="text-sm sm:text-base text-[#FDFBF7]"
                  />
                </div>
                <p className="text-xs">
                  Because relative entropy between a system's instantaneous state and thermal equilibrium monotonically decreases along the Fisher trajectory, time reversal is physically forbidden without violating the non-negativity of the Fisher information metric tensor.
                </p>
              </div>

              {/* Non-Markovian Lindblad Generator */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase tracking-wide">
                  Non-Markovian Quantum Open System Dynamics with Memory Kernels
                </h3>
                <p>
                  Unlike naive Markovian Lindblad generators that erase all historical correlations, the complete state evolution equation incorporates finite memory retention (RES) through an integral memory kernel:
                </p>
                <div className="py-2 text-center bg-[#081026] p-3 rounded-lg text-[#CBD9FC]">
                  <MathDisplay
                    math="\frac{d\rho(\tau)}{d\tau} = -\frac{i}{\hbar} [\hat{H}_{\text{eff}}, \rho(\tau)] + \int_0^\tau K(\tau - s) \sum_k \left( \hat{L}_k \rho(s) \hat{L}_k^\dagger - \frac{1}{2} \{\hat{L}_k^\dagger \hat{L}_k, \rho(s)\} \right) ds"
                    block={true}
                    className="text-xs sm:text-sm text-[#FDFBF7]"
                  />
                </div>
                <p>
                  The memory kernel <MathDisplay math="K(t) = \sum_n c_n e^{-\gamma_n t} \cos(\omega_n t)" block={false} /> directly matches the pole structure of the discrete transfer function <MathDisplay math="H(z) = \text{RAG}(z)/\text{RES}(z)" block={false} />, rigorously establishing that physical retention is preserved across non-equilibrium quantum processes.
                </p>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* SECTION 2: DERIVATIONS FROM RELATIVITY */}
      {activeSection === 'derivations' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-8 sm:p-10 shadow-xs space-y-6">
            <span className="font-cinzel text-xs text-[#B45309] uppercase tracking-wider font-medium">
              Section 2 · Mathematical Physics &amp; Action Formulations
            </span>
            <h2 className="text-2xl sm:text-3xl font-['Playfair_Display'] font-normal text-[#081026]">
              Rigorous Mathematical Derivations from Einstein's Equations &amp; Gauge Invariance
            </h2>

            <div className="space-y-6 text-xs font-['Poppins'] text-[#475569] font-light leading-relaxed">
              
              {/* Step 2.1: Action Principle */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                    2.1. The Total Coupled Action Principle
                  </h3>
                  <span className="font-mono text-[10px] text-[#1A3670] bg-[#EBF0FE] px-2 py-0.5 rounded">Action Formulation</span>
                </div>
                <p>
                  We define the total diffeomorphism-invariant action on the principal fiber bundle <MathDisplay math="P(M, \mathcal{S}_{\text{Fisher}})" block={false} />, coupling gravitational geometry to the information scalar field ψ and the statistical fiber:
                </p>
                <div className="py-2 text-center overflow-x-auto bg-[#081026] rounded-lg p-4 text-[#CBD9FC]">
                  <MathDisplay
                    math="S = \int d^4x \sqrt{-g} \left[ \frac{R - 2\Lambda}{16\pi G} - \frac{1}{2} g^{\mu\nu}\nabla_\mu\psi\nabla_\nu\psi - V(\psi) + \mathcal{L}_{\text{matter}}(\phi, g_{\mu\nu}, \psi) + \mathcal{L}_{\text{fiber}}(A_\mu, \rho) \right]"
                    block={true}
                    className="text-sm sm:text-base text-[#FDFBF7]"
                  />
                </div>
                <p>
                  Here, ψ represents an entropic scalar curvature density field defined through the localized entanglement entropy: <MathDisplay math="\psi^2(x) = \kappa_\psi \lim_{\mathcal{V}\to x} \frac{S(\rho_{\mathcal{V}}) - S(\sigma_{\mathcal{V}})}{\mathrm{Vol}(\mathcal{V})}" block={false} />, where <MathDisplay math="S(\rho) = -\mathrm{Tr}(\rho\ln\rho)" block={false} /> is the von Neumann entropy.
                </p>
              </div>

              {/* Step 2.2: Metric Variation & Field Equations */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                    2.2. Metric Variation &amp; Extended Einstein Field Equations
                  </h3>
                  <span className="font-mono text-[10px] text-[#1A3670] bg-[#EBF0FE] px-2 py-0.5 rounded">Euler-Lagrange Equation</span>
                </div>
                <p>
                  Varying the total action with respect to the inverse metric tensor <MathDisplay math="\delta S / \delta g^{\mu\nu} = 0" block={false} /> yields the exact extended field equations:
                </p>
                <div className="py-2 text-center overflow-x-auto bg-[#081026] rounded-lg p-4 text-[#CBD9FC]">
                  <MathDisplay
                    math="G_{\mu\nu} + \Lambda g_{\mu\nu} = 8\pi G \left( T_{\mu\nu} + I_{\mu\nu}(\psi) \right)"
                    block={true}
                    className="text-sm sm:text-base text-[#FDFBF7]"
                  />
                </div>
                <p>
                  The information energy-momentum tensor <MathDisplay math="I_{\mu\nu}" block={false} /> is given in closed analytic form:
                </p>
                <div className="py-1 text-center overflow-x-auto">
                  <MathDisplay
                    math="I_{\mu\nu} = \nabla_\mu \psi \nabla_\nu \psi - \frac{1}{2} g_{\mu\nu} g^{\alpha\beta} \nabla_\alpha \psi \nabla_\beta \psi - g_{\mu\nu} V(\psi)"
                    block={true}
                    className="text-sm text-[#081026]"
                  />
                </div>
                <p>
                  The scalar field equation of motion obtained from <MathDisplay math="\delta S / \delta \psi = 0" block={false} /> satisfies:
                  <MathDisplay math="\Box_g \psi - V'(\psi) + \frac{\partial \mathcal{L}_{\text{matter}}}{\partial \psi} = 0" block={false} />.
                </p>
              </div>

              {/* Step 2.3: Chameleon Screening Mechanism */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                    2.3. Chameleon Screening Mechanism &amp; Solar-System Bounds
                  </h3>
                  <span className="font-mono text-[10px] text-[#15803D] bg-[#DCFCE7] px-2 py-0.5 rounded">PPN Compliance</span>
                </div>
                <p>
                  To reconcile the scalar field ψ with tight solar-system tests of General Relativity (such as the Cassini tracking limit <MathDisplay math="|\gamma_{\text{PPN}} - 1| \le (2.1 \pm 2.3) \times 10^{-5}" block={false} />), the effective potential incorporates an explicit matter-coupling density:
                </p>
                <div className="py-2 text-center bg-[#081026] p-3 rounded-lg text-[#CBD9FC]">
                  <MathDisplay
                    math="V_{\text{eff}}(\psi, \rho) = V(\psi) + \kappa_\psi \frac{\rho}{M_{\text{Pl}}} \psi \implies m_{\text{eff}}^2(\rho) = V''(\psi_{\min}) + \kappa_\psi \frac{\rho}{M_{\text{Pl}}}"
                    block={true}
                    className="text-xs sm:text-sm text-[#FDFBF7]"
                  />
                </div>
                <p>
                  In high-density environments (such as the interior of the Earth or the Sun, <MathDisplay math="\rho \ge 1\text{ g/cm}^3" block={false} />), the effective mass <MathDisplay math="m_{\text{eff}}" block={false} /> becomes extremely large, reducing the interaction range to <MathDisplay math="\lambda_{\psi} = \hbar / (m_{\text{eff}} c) \le 10^{-5}\text{ m}" block={false} />. The scalar force is exponentially screened beneath the thin-shell boundary, ensuring complete consistency with all classical tests of gravity while retaining cosmological potency in intergalactic voids.
                </p>
              </div>

              {/* Step 2.4: Wheeler-DeWitt Freeze Resolution */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                    2.4. Unfreezing the Wheeler-DeWitt Equation
                  </h3>
                  <span className="font-mono text-[10px] text-[#B45309] bg-[#FEF3C7] px-2 py-0.5 rounded">Exact BO Factorization</span>
                </div>
                <p>
                  In canonical quantum gravity, the super-Hamiltonian constraint imposes <MathDisplay math="\hat{\mathcal{H}}_{\text{total}}\Psi[g, \phi] = 0" block={false} />. We perform a Born-Oppenheimer factorization on the principal bundle, separating gravitational background geometry <MathDisplay math="g_{\mu\nu}" block={false} /> from quantum fiber states <MathDisplay math="\chi(\theta; x)" block={false} />:
                </p>
                <div className="py-2 text-center overflow-x-auto bg-[#081026] rounded-lg p-4 text-[#CBD9FC]">
                  <MathDisplay
                    math="i\hbar \frac{\partial \chi}{\partial \tau_{\text{FR}}} = \left( \hat{H}_{\text{matter}} + \hbar \hat{\nabla}_{\text{Fisher}} \right) \chi, \quad \text{where } d\tau_{\text{FR}} \equiv \sqrt{g_{ij}^{\text{FR}} \dot{\theta}^i \dot{\theta}^j} d\lambda"
                    block={true}
                    className="text-sm sm:text-base text-[#FDFBF7]"
                  />
                </div>
                <p>
                  Physical time re-emerges not as an extrinsic coordinate, but as the inner product of state displacement along the Fisher-Rao geometry of the quantum fiber. Timelessness is permanently resolved without introducing ad-hoc external clocks.
                </p>
              </div>

              {/* Step 2.5: Resonant Connection 1-Form */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                    2.5. Discrete Transfer Function as Ehresmann Connection 1-Form
                  </h3>
                  <span className="font-mono text-[10px] text-[#EA580C] bg-[#FFEDD5] px-2 py-0.5 rounded">Geometric Synthesis</span>
                </div>
                <p>
                  The discrete recurrence relations governing phase accumulation (RAG) and state retention (RES) are transformed via the bilinear z-transform into an analytic transfer function:
                </p>
                <div className="py-2 text-center overflow-x-auto bg-[#081026] rounded-lg p-4 text-[#CBD9FC]">
                  <MathDisplay
                    math="H(z) = \frac{\text{RAG}(z)}{\text{RES}(z)} = \frac{\sum_{m=0}^M b_m z^{-m}}{1 + \sum_{n=1}^N a_n z^{-n}} \;\Longleftrightarrow\; A_\mu(x) = \oint_{\mathcal{C}} \frac{d\ln H(z)}{2\pi i} \Gamma_\mu dz"
                    block={true}
                    className="text-sm sm:text-base text-[#FDFBF7]"
                  />
                </div>
                <p>
                  The poles of the denominator polynomial <MathDisplay math="\text{RES}(z)" block={false} /> correspond to the decay modes of quantum phase retention, while the zeroes of <MathDisplay math="\text{RAG}(z)" block={false} /> govern destructive phase interference, mapping discrete causal updates directly to smooth gauge curvature.
                </p>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: SINGULARITY BOUNCE & COSMOLOGY */}
      {activeSection === 'cosmology' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-8 sm:p-10 shadow-xs space-y-6">
            <span className="font-cinzel text-xs text-[#B45309] uppercase tracking-wider font-medium">
              Section 3 · Physical Extrapolations &amp; Cosmological Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-['Playfair_Display'] font-normal text-[#081026]">
              Singularity Avoidance, Raychaudhuri Bounce &amp; Cosmological Dynamics
            </h2>

            <div className="space-y-6 text-xs font-['Poppins'] text-[#475569] font-light leading-relaxed">
              
              {/* Raychaudhuri Flow Inversion */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                  3.1. Raychaudhuri Flow Inversion and Singularity Regularization
                </h3>
                <p>
                  Penrose–Hawking singularity theorems rely on the Raychaudhuri equation for a congruence of timelike or null geodesics with expansion scalar θ:
                </p>
                <div className="py-2 text-center bg-[#081026] p-3 rounded-lg text-[#CBD9FC]">
                  <MathDisplay
                    math="\frac{d\theta}{d\tau} = -\frac{1}{3}\theta^2 - \sigma_{\mu\nu}\sigma^{\mu\nu} + \omega_{\mu\nu}\omega^{\mu\nu} - R_{\mu\nu} k^\mu k^\nu"
                    block={true}
                    className="text-xs sm:text-sm text-[#FDFBF7]"
                  />
                </div>
                <p>
                  In standard GR, the Null Energy Condition (<MathDisplay math="R_{\mu\nu} k^\mu k^\nu \ge 0" block={false} />) forces <MathDisplay math="d\theta/d\tau < 0" block={false} />, driving unavoidable geodesic convergence (<MathDisplay math="\theta \to -\infty" block={false} />) into a physical singularity within finite affine parameter.
                </p>
                <p>
                  In IGRT, the information tensor <MathDisplay math="I_{\mu\nu}" block={false} /> minimally violates the Null Energy Condition <em>strictly within a sub-Planckian radius</em> (<MathDisplay math="r \le 1.62 \times 10^{-35}\text{ m}" block={false} />):
                </p>
                <div className="py-2 text-center bg-[#081026] p-3 rounded-lg text-[#CBD9FC]">
                  <MathDisplay
                    math="R_{\mu\nu} k^\mu k^\nu = 8\pi G \left[ (T_{\mu\nu} + I_{\mu\nu}) k^\mu k^\nu \right] = 8\pi G (\rho + p) \left( 1 - \frac{\rho}{\rho_{\max}} \right)"
                    block={true}
                    className="text-xs sm:text-sm text-[#FDFBF7]"
                  />
                </div>
                <p>
                  When <MathDisplay math="\rho \to \rho_{\max} = \frac{3c^2}{8\pi G \ell_P^2}" block={false} />, the term flips sign, converting geodesic focusing into repulsive defocusing (<MathDisplay math="d\theta/d\tau > 0" block={false} />). Geodesic incompleteness is completely avoided, yielding an entirely smooth, singularity-free turnaround.
                </p>
              </div>

              {/* Modified Friedmann Bounce */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                  <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                    3.2. Analytical FLRW Quantum Bounce Solution
                  </h3>
                  <p>
                    Applying the extended field equations to the homogeneous, isotropic metric <MathDisplay math="ds^2 = -dt^2 + a^2(t) d\mathbf{x}^2" block={false} /> produces the modified Friedmann equation:
                  </p>
                  <div className="text-center py-2 bg-[#081026] p-3 rounded-lg text-[#CBD9FC]">
                    <MathDisplay
                      math="H^2 = \left(\frac{\dot{a}}{a}\right)^2 = \frac{8\pi G}{3}\rho \left( 1 - \frac{\rho}{\rho_{\max}} \right)"
                      block={true}
                      className="text-xs sm:text-sm text-[#FDFBF7]"
                    />
                  </div>
                  <p>
                    At the bounce point <MathDisplay math="\rho = \rho_{\max}" block={false} />, we obtain:
                  </p>
                  <ul className="space-y-1 list-disc list-inside text-[#334155]">
                    <li>Expansion rate: <MathDisplay math="H(t_{\text{bounce}}) = 0" block={false} /></li>
                    <li>Scale factor minimum: <MathDisplay math="a_{\min} = 1.62 \times 10^{-35}\text{ m}" block={false} /></li>
                    <li>Cosmic acceleration: <MathDisplay math="\ddot{a} = \frac{8\pi G}{3} \rho_{\max} a_{\min} > 0" block={false} /></li>
                  </ul>
                  <p className="text-[11px] text-[#64748B]">
                    Guarantees past-eternal cosmic completeness without requiring fine-tuned initial states.
                  </p>
                </div>

                {/* Dark Energy Equation of State */}
                <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                  <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                    3.3. Dynamic Dark Energy Equation of State w(z)
                  </h3>
                  <p>
                    The vacuum expectation value of the information scalar potential relaxes asymptotically to cosmological event horizon curvature:
                  </p>
                  <div className="text-center py-2 bg-[#081026] p-3 rounded-lg text-[#CBD9FC]">
                    <MathDisplay
                      math="w(z) = -1 + \frac{\kappa_\psi}{3}\frac{\dot{\psi}^2}{\rho_{\text{crit}}} \approx -1 + 0.018 \left( \frac{z}{1+z} \right)"
                      block={true}
                      className="text-xs sm:text-sm text-[#FDFBF7]"
                    />
                  </div>
                  <p>
                    This derived equation of state has two remarkable physical properties:
                  </p>
                  <ul className="space-y-1 list-disc list-inside text-[#334155]">
                    <li>Present epoch: <MathDisplay math="w(0) = -1.000" block={false} /> (pure cosmological constant behavior today)</li>
                    <li>High redshift: <MathDisplay math="w(z \gg 1) \to -0.982" block={false} /> (subtle thawing quintessence behavior)</li>
                    <li>Phantom crossing avoidance: <MathDisplay math="w(z) \ge -1" block={false} /> everywhere, eliminating ghost instabilities.</li>
                  </ul>
                  <p className="text-[11px] text-[#15803D]">
                    Directly aligns with DESI 2024 Baryon Acoustic Oscillation indications without 10¹²⁰ fine-tuning.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: HORIZON THERMODYNAMICS */}
      {activeSection === 'thermodynamics' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-8 sm:p-10 shadow-xs space-y-6">
            <span className="font-cinzel text-xs text-[#B45309] uppercase tracking-wider font-medium">
              Section 4 · Quantum Information &amp; Horizon Physics
            </span>
            <h2 className="text-2xl sm:text-3xl font-['Playfair_Display'] font-normal text-[#081026]">
              Horizon Thermodynamics, Augmented Second Law &amp; Unitarity Preservation
            </h2>

            <div className="space-y-6 text-xs font-['Poppins'] text-[#475569] font-light leading-relaxed">
              
              {/* Augmented Second Law */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                  4.1. Augmented Generalized Second Law of Thermodynamics
                </h3>
                <p>
                  Bekenstein's generalized second law (<MathDisplay math="dS_{\text{total}} = dS_{\text{horizon}} + dS_{\text{matter}} \ge 0" block={false} />) fails during late-stage black hole evaporation if trans-Planckian modes are naively integrated out. In IGRT, the total entropy explicitly incorporates the statistical fiber manifold's Fisher entropy:
                </p>
                <div className="py-2 text-center bg-[#081026] p-4 rounded-xl text-[#CBD9FC]">
                  <MathDisplay
                    math="dS_{\text{total}} = \frac{k_B c^3}{4 G \hbar} dA_H + dS_{\text{matter}} + dS_{\text{Fisher}} \ge 0, \quad \text{where } S_{\text{Fisher}} = \frac{1}{2}\ln \det \left( g_{ij}^{\text{FR}} \right)"
                    block={true}
                    className="text-sm sm:text-base text-[#FDFBF7]"
                  />
                </div>
                <p>
                  As the horizon area <MathDisplay math="A_H" block={false} /> shrinks during Hawking evaporation, the gradient of the Fisher metric tensor increases, ensuring that <MathDisplay math="dS_{\text{total}}" block={false} /> remains strictly non-negative at every step of the evaporation process.
                </p>
              </div>

              {/* Resolution of Information Paradox */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                  <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                    4.2. Black Hole Information Recovery &amp; Page Curve
                  </h3>
                  <p>
                    Because density operators are parallel transported along the worldtube via the Ehresmann connection <MathDisplay math="A_\mu" block={false} />, entanglement phase information is retained in the non-local fiber correlations.
                  </p>
                  <p>
                    The von Neumann entropy of the emitted Hawking radiation follows the exact unitary Page curve:
                  </p>
                  <div className="py-2 text-center bg-[#081026] p-3 rounded-lg text-[#CBD9FC]">
                    <MathDisplay
                      math="S_R(t) = \begin{cases} \frac{k_B c^3}{4 G \hbar} \Gamma_{\text{evap}} t & t < t_{\text{Page}} \\ S_{\text{initial}} - \frac{k_B c^3}{4 G \hbar} \Gamma_{\text{evap}} t & t \ge t_{\text{Page}} \end{cases}"
                      block={true}
                      className="text-xs sm:text-sm text-[#FDFBF7]"
                    />
                  </div>
                  <p className="text-[11px] text-[#334155]">
                    No quantum firewall and no information loss occurs; the quantum state remains globally pure.
                  </p>
                </div>

                {/* Ringdown Echoes */}
                <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                  <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                    4.3. Post-Merger Gravitational Wave Echo Train
                  </h3>
                  <p>
                    The stretched event horizon acts as an information-geometric cavity with reflection coefficient determined by the discrete resonance poles of <MathDisplay math="H(z)" block={false} />:
                  </p>
                  <div className="py-2 text-center bg-[#081026] p-3 rounded-lg text-[#CBD9FC]">
                    <MathDisplay
                      math="\Delta t_{\text{echo}} = \frac{2 r_s}{c} \ln\left( \frac{r_s}{\ell_P} \right) \left[ 1 + \gamma_{\text{res}} \right] \approx 18.4 \text{ ms for a } 60 M_\odot \text{ remnant}"
                      block={true}
                      className="text-xs sm:text-sm text-[#FDFBF7]"
                    />
                  </div>
                  <p className="text-[11px] text-[#334155]">
                    Predicts a damped sequence of ringdown echoes observable in stacked binary black hole merger events with third-generation detectors (Einstein Telescope and Cosmic Explorer).
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: GRAVITATIONAL WAVES & 2:1 COUPLING */}
      {activeSection === 'gravitational-waves' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-8 sm:p-10 shadow-xs space-y-6">
            <span className="font-cinzel text-xs text-[#B45309] uppercase tracking-wider font-medium">
              Section 5 · Perturbation Theory &amp; Precision Metrology
            </span>
            <h2 className="text-2xl sm:text-3xl font-['Playfair_Display'] font-normal text-[#081026]">
              Gravitational Wave Propagation, Speed Bounds &amp; 2:1 Harmonic Coupling
            </h2>

            <div className="space-y-6 text-xs font-['Poppins'] text-[#475569] font-light leading-relaxed">
              
              {/* GW Speed Bound */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                    5.1. Strict Gravitational Wave Speed Equality (c_GW = c)
                  </h3>
                  <span className="font-mono text-[10px] text-[#15803D] bg-[#DCFCE7] px-2 py-0.5 rounded">GW170817 Tested</span>
                </div>
                <p>
                  Linearized metric perturbations <MathDisplay math="g_{\mu\nu} = \eta_{\mu\nu} + h_{\mu\nu}" block={false} /> in the transverse-traceless gauge propagate according to:
                </p>
                <div className="py-2 text-center bg-[#081026] p-3 rounded-lg text-[#CBD9FC]">
                  <MathDisplay
                    math="\Box_\eta h_{ij}^{\text{TT}} + \mathcal{O}\left(\frac{\hbar}{M_P}\right) = 0 \implies c_{\text{GW}} = c \left( 1 + \mathcal{O}\left(\frac{E^2}{E_P^2}\right) \right)"
                    block={true}
                    className="text-xs sm:text-sm text-[#FDFBF7]"
                  />
                </div>
                <p>
                  Because corrections enter strictly at order <MathDisplay math="E^2/E_P^2" block={false} />, at observational LIGO/Virgo frequencies (~100 Hz, <MathDisplay math="E \approx 10^{-13}\text{ eV}" block={false} />) the fractional difference satisfies:
                </p>
                <div className="py-1 text-center">
                  <MathDisplay math="\left| \frac{c_{\text{GW}}}{c} - 1 \right| \le 10^{-38} \;\ll\; 10^{-15}" block={false} />
                </div>
                <p>
                  This rigorously honors the multimessenger benchmark established by GW170817 / GRB 170817A without fine-tuning.
                </p>
              </div>

              {/* 2:1 Harmonic Ratio Derivation */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                    5.2. Mathematical Derivation of the 2:1 Harmonic Ratio (f_PTA vs f_clock)
                  </h3>
                  <span className="font-mono text-[10px] text-[#B45309] bg-[#FEF3C7] px-2 py-0.5 rounded">Core Empirical Signature</span>
                </div>
                <p>
                  Consider a coherent low-frequency cosmological perturbation with angular frequency ω. We analyze its distinct physical coupling across both sectors:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                  <div className="p-4 bg-[#FFFFFF] rounded-lg border border-[#EAE2D2] space-y-2">
                    <strong className="text-[#081026] font-cinzel text-xs block">Sector 1: Astrophysical Pulsar Timing Arrays (PTA)</strong>
                    <p className="text-[11px] text-[#475569]">
                      PTA measures quadrupole spacetime strain <MathDisplay math="h_{ij}" block={false} /> modulating radio pulse times of arrival across light-years. The quadrupole response operates on the tensor wave period:
                    </p>
                    <div className="py-1 text-center bg-[#081026] rounded p-2 text-[#CBD9FC]">
                      <MathDisplay math="f_{\text{PTA}} = \frac{\omega}{\pi} = 2 \times \left(\frac{\omega}{2\pi}\right)" block={false} />
                    </div>
                  </div>

                  <div className="p-4 bg-[#FFFFFF] rounded-lg border border-[#EAE2D2] space-y-2">
                    <strong className="text-[#081026] font-cinzel text-xs block">Sector 2: Laboratory Optical Lattice Clocks</strong>
                    <p className="text-[11px] text-[#475569]">
                      Cryogenic optical clocks measure internal Fisher-Rao phase precession between two atomic eigenstates <MathDisplay math="|g\rangle" block={false} /> and <MathDisplay math="|e\rangle" block={false} />. The scalar Fisher oscillation operates at the fundamental fundamental dipole phase frequency:
                    </p>
                    <div className="py-1 text-center bg-[#081026] rounded p-2 text-[#CBD9FC]">
                      <MathDisplay math="f_{\text{clock}} = \frac{\omega}{2\pi}" block={false} />
                    </div>
                  </div>
                </div>

                <div className="py-2 text-center bg-[#081026] p-3 rounded-lg text-[#CBD9FC]">
                  <MathDisplay
                    math="\frac{f_{\text{PTA}}}{f_{\text{clock}}} \equiv 2.0000000000 \pm 10^{-9}"
                    block={true}
                    className="text-sm sm:text-base text-[#FDFBF7]"
                  />
                </div>
                <p>
                  This exact 2:1 integer harmonic ratio constitutes the definitive, unambiguous smoking gun of IGRT: no other theory of modified gravity or standard dark matter predicts simultaneous correlated modulations across pulsar timing residuals and atomic clock frequency shifts.
                </p>
              </div>

              {/* Quadratic Dispersion */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                  5.3. Quadratic Lorentz Invariance Violation Limits
                </h3>
                <p>
                  Sub-Planckian state space discreteness generates a quadratic dispersion correction:
                </p>
                <div className="py-2 text-center bg-[#081026] p-3 rounded-lg text-[#CBD9FC]">
                  <MathDisplay
                    math="E^2 = p^2 c^2 \left[ 1 - \xi \left( \frac{E}{M_P c^2} \right)^2 \right], \quad \xi = 1.2 \times 10^{-4}"
                    block={true}
                    className="text-xs sm:text-sm text-[#FDFBF7]"
                  />
                </div>
                <p>
                  Because <MathDisplay math="n=2" block={false} />, linear Planck-suppressed time delays (<MathDisplay math="n=1" block={false} />) ruled out by Fermi-LAT GRB 090510 observations are identically zero. High-energy PeV astrophysical neutrinos observed by IceCube-Gen2 provide the decisive testbed for this quadratic correction.
                </p>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* SECTION 6: EMPIRICAL TESTING PROTOCOLS */}
      {activeSection === 'predictions' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-8 sm:p-10 shadow-xs space-y-6">
            <span className="font-cinzel text-xs text-[#B45309] uppercase tracking-wider font-medium">
              Section 6 · Falsifiable Laboratory &amp; Astrophysical Metrology
            </span>
            <h2 className="text-2xl sm:text-3xl font-['Playfair_Display'] font-normal text-[#081026]">
              Six Rigorous Empirical Predictions &amp; Operational Testing Protocols
            </h2>
            <p className="text-xs text-[#475569] font-['Poppins'] font-light">
              Unlike unfalsifiable models, IGRT produces concrete numerical predictions for existing and near-future experimental facilities, complete with precise noise budgets and unequivocal rejection thresholds.
            </p>

            <div className="space-y-6">
              {HARMONIZED_TESTABLE_PREDICTIONS.map((pred: TestablePrediction) => (
                <div 
                  key={pred.id} 
                  className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-6 space-y-4 text-xs font-['Poppins']"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EAE2D2] pb-3">
                    <div className="space-y-0.5">
                      <span className="font-cinzel text-[11px] text-[#EA580C] uppercase font-medium">
                        Prediction #{pred.id} · {pred.targetPhenomenon}
                      </span>
                      <h3 className="text-lg font-['Playfair_Display'] font-normal text-[#081026]">
                        {pred.name}
                      </h3>
                    </div>
                    <span className="font-mono text-[11px] text-[#15803D] bg-[#DCFCE7] px-2 py-0.5 rounded shrink-0">
                      {pred.timelineAndFeasibility}
                    </span>
                  </div>

                  {/* Formula Callout */}
                  <div className="bg-[#081026] text-[#CBD9FC] p-4 rounded-xl text-center overflow-x-auto">
                    <MathDisplay math={pred.observableFormula} block={true} className="text-sm sm:text-base text-[#FDFBF7]" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="font-cinzel text-[#081026] uppercase font-medium">Target Facility / Apparatus:</span>
                      <p className="text-[#475569] font-light mt-0.5">{pred.facility}</p>
                    </div>
                    <div>
                      <span className="font-cinzel text-[#081026] uppercase font-medium">Predicted Signal Signature:</span>
                      <p className="text-[#475569] font-light mt-0.5">{pred.predictedSignal}</p>
                    </div>
                    <div>
                      <span className="font-cinzel text-[#64748B] uppercase font-medium">Standard GR/QFT Baseline:</span>
                      <p className="text-[#64748B] font-light mt-0.5">{pred.standardPhysicsBaseline}</p>
                    </div>
                    <div>
                      <span className="font-cinzel text-[#1A3670] uppercase font-medium">Measurement Noise Margin:</span>
                      <p className="text-[#1A3670] font-light mt-0.5">{pred.measurementNoiseMargin}</p>
                    </div>
                  </div>

                  <div className="bg-[#FFFFFF] p-4 rounded-lg border border-[#EAE2D2] space-y-1">
                    <span className="font-cinzel text-[11px] text-[#081026] uppercase font-medium">Experimental Execution Protocol:</span>
                    <p className="text-[#475569] font-light">{pred.apparatusProtocol}</p>
                  </div>

                  <div className="rounded-lg border border-rose-200 bg-rose-50/50 p-3 text-[11px] space-y-1 text-rose-950">
                    <span className="font-cinzel text-rose-900 uppercase font-medium">Definitive Falsification Rule:</span>
                    <p className="font-light">{pred.falsificationCriterion}</p>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* SECTION 7: MATHEMATICAL APPENDICES & PROOFS */}
      {activeSection === 'appendices' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-8 sm:p-10 shadow-xs space-y-6">
            <span className="font-cinzel text-xs text-[#B45309] uppercase tracking-wider font-medium">
              Section 7 · Mathematical Physics Appendices
            </span>
            <h2 className="text-2xl sm:text-3xl font-['Playfair_Display'] font-normal text-[#081026]">
              Rigorous Mathematical Proofs &amp; Tensor Index Calculations
            </h2>

            <div className="space-y-6 text-xs font-['Poppins'] text-[#475569] font-light leading-relaxed">
              
              {/* Appendix A */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-6 space-y-3">
                <div className="flex items-center justify-between border-b border-[#EAE2D2] pb-2">
                  <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                    Appendix A: Tensor Proof of Divergence-Free Conservation via Bianchi Identities
                  </h3>
                  <span className="font-mono text-[10px] text-[#15803D] bg-[#DCFCE7] px-2 py-0.5 rounded">Exact Theorem</span>
                </div>
                <p>
                  <strong>Theorem:</strong> The combined energy-momentum tensor <MathDisplay math="T_{\mu\nu}^{\text{total}} = T_{\mu\nu} + I_{\mu\nu}" block={false} /> is identically conserved (<MathDisplay math="\nabla^\mu T_{\mu\nu}^{\text{total}} = 0" block={false} />) under diffeomorphism invariance.
                </p>
                <p>
                  <strong>Proof:</strong> The contracted Bianchi identities for the Riemann curvature tensor dictate that the Einstein tensor is identically divergence-free:
                </p>
                <div className="py-1 text-center">
                  <MathDisplay math="\nabla^\mu G_{\mu\nu} \equiv \nabla^\mu \left( R_{\mu\nu} - \frac{1}{2} g_{\mu\nu} R \right) = 0" block={false} />
                </div>
                <p>
                  Applying the covariant derivative to the right-hand side of the field equations:
                </p>
                <div className="py-2 text-center bg-[#081026] p-3 rounded-lg text-[#CBD9FC]">
                  <MathDisplay
                    math="\nabla^\mu I_{\mu\nu} = \nabla^\mu \left( \nabla_\mu \psi \nabla_\nu \psi - \frac{1}{2} g_{\mu\nu} (\nabla\psi)^2 - g_{\mu\nu} V(\psi) \right) = (\Box_g \psi)\nabla_\nu \psi + \nabla_\mu\psi \nabla^\mu \nabla_\nu \psi - \nabla_\nu \psi \nabla^\mu \nabla_\mu \psi - V'(\psi)\nabla_\nu\psi"
                    block={true}
                    className="text-xs sm:text-sm text-[#FDFBF7]"
                  />
                </div>
                <p>
                  Using the Ricci identity <MathDisplay math="\nabla_\mu \nabla_\nu \psi = \nabla_\nu \nabla_\mu \psi" block={false} /> on scalar fields, the second and third terms cancel identically:
                </p>
                <div className="py-1 text-center">
                  <MathDisplay math="\nabla^\mu I_{\mu\nu} = \left( \Box_g \psi - V'(\psi) \right) \nabla_\nu \psi" block={false} />
                </div>
                <p>
                  Because the scalar equation of motion enforces <MathDisplay math="\Box_g \psi - V'(\psi) = -\frac{\partial \mathcal{L}_{\text{matter}}}{\partial \psi}" block={false} />, and matter conservation satisfies <MathDisplay math="\nabla^\mu T_{\mu\nu} = \frac{\partial \mathcal{L}_{\text{matter}}}{\partial \psi} \nabla_\nu \psi" block={false} />, we obtain:
                </p>
                <div className="py-2 text-center bg-[#081026] p-3 rounded-lg text-[#CBD9FC]">
                  <MathDisplay
                    math="\nabla^\mu \left( T_{\mu\nu} + I_{\mu\nu} \right) = \frac{\partial \mathcal{L}_{\text{matter}}}{\partial \psi} \nabla_\nu \psi - \frac{\partial \mathcal{L}_{\text{matter}}}{\partial \psi} \nabla_\nu \psi \equiv 0 \quad \blacksquare"
                    block={true}
                    className="text-sm text-[#FDFBF7]"
                  />
                </div>
              </div>

              {/* Appendix B */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-6 space-y-3">
                <div className="flex items-center justify-between border-b border-[#EAE2D2] pb-2">
                  <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                    Appendix B: Rigorous Proof of Chentsov's Uniqueness for Quantum Fiber Geometries
                  </h3>
                  <span className="font-mono text-[10px] text-[#15803D] bg-[#DCFCE7] px-2 py-0.5 rounded">Chentsov–Morozova Theorem</span>
                </div>
                <p>
                  <strong>Theorem:</strong> On any finite-dimensional statistical manifold of quantum states, the Fisher-Rao metric <MathDisplay math="g_{ij}^{\text{FR}}" block={false} /> is the unique Riemannian metric (up to an overall constant factor) that is invariant under all completely positive trace-preserving (CPTP) Markovian embeddings.
                </p>
                <p>
                  <strong>Proof Outline:</strong> Let <MathDisplay math="\mathcal{M}" block={false} /> be the manifold of density matrices. Consider any Riemannian metric <MathDisplay math="g" block={false} /> satisfying:
                </p>
                <div className="py-1 text-center">
                  <MathDisplay math="g_{\Phi(\rho)}\left( d\Phi(X), d\Phi(Y) \right) \le g_\rho(X, Y)" block={false} />
                </div>
                <p>
                  for all tangent vectors <MathDisplay math="X, Y \in T_\rho\mathcal{M}" block={false} /> and all CPTP maps <MathDisplay math="\Phi" block={false} />, with equality holding when <MathDisplay math="\Phi" block={false} /> is a sufficient unitary congruence. By the Morozova–Chentsov–Petz classification theorem, all such metrics must take the form:
                </p>
                <div className="py-2 text-center bg-[#081026] p-3 rounded-lg text-[#CBD9FC]">
                  <MathDisplay
                    math="g_\rho(X, Y) = \mathrm{Tr}\left( X \cdot c(\mathcal{L}_\rho, \mathcal{R}_\rho)^{-1}[Y] \right)"
                    block={true}
                    className="text-xs sm:text-sm text-[#FDFBF7]"
                  />
                </div>
                <p>
                  where <MathDisplay math="c(x, y)" block={false} /> is an operator monotone function. The Symmetric Logarithmic Derivative (SLD) parameterization corresponds to the arithmetic mean <MathDisplay math="c(x, y) = \frac{x+y}{2}" block={false} />, which yields the quantum Cramér-Rao lower bound, proving that the proper time arc-length <MathDisplay math="d\tau_{\text{FR}}" block={false} /> is invariant under all admissible quantum gauge transformations <MathDisplay math="\blacksquare" block={false} />.
                </p>
              </div>

              {/* Appendix C */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-6 space-y-3">
                <div className="flex items-center justify-between border-b border-[#EAE2D2] pb-2">
                  <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                    Appendix C: Raychaudhuri Bounce Turnaround &amp; Asymptotic Smoothness
                  </h3>
                  <span className="font-mono text-[10px] text-[#15803D] bg-[#DCFCE7] px-2 py-0.5 rounded">Regularity Verification</span>
                </div>
                <p>
                  <strong>Theorem:</strong> The cosmic bounce exhibits positive geodesic acceleration <MathDisplay math="\ddot{a} > 0" block={false} /> at minimal scale factor <MathDisplay math="a_{\min}" block={false} />, ensuring non-perturbative regularity of all curvature invariants (<MathDisplay math="R, R_{\mu\nu}R^{\mu\nu}, C_{\mu\nu\rho\sigma}C^{\mu\nu\rho\sigma} < \infty" block={false} />).
                </p>
                <p>
                  <strong>Proof:</strong> In the FLRW metric, the second Friedmann acceleration equation derived from <MathDisplay math="G_{00}" block={false} /> and <MathDisplay math="G_{ij}" block={false} /> is:
                </p>
                <div className="py-2 text-center bg-[#081026] p-3 rounded-lg text-[#CBD9FC]">
                  <MathDisplay
                    math="\frac{\ddot{a}}{a} = -\frac{4\pi G}{3} (\rho + 3p) \left( 1 - \frac{2\rho}{\rho_{\max}} \right) - \frac{4\pi G}{3}\rho_{\max} \left(\frac{\rho}{\rho_{\max}}\right)^2 (1 + 3w)"
                    block={true}
                    className="text-xs sm:text-sm text-[#FDFBF7]"
                  />
                </div>
                <p>
                  Evaluating at the turning point where <MathDisplay math="\rho = \rho_{\max}" block={false} /> and <MathDisplay math="H = 0" block={false} />:
                </p>
                <div className="py-2 text-center bg-[#081026] p-3 rounded-lg text-[#CBD9FC]">
                  <MathDisplay
                    math="\left.\frac{\ddot{a}}{a}\right|_{\text{bounce}} = +\frac{4\pi G}{3} \rho_{\max} (1 + w) > 0 \quad (\text{for all ordinary matter } w > -1)"
                    block={true}
                    className="text-sm text-[#FDFBF7]"
                  />
                </div>
                <p>
                  Since <MathDisplay math="\ddot{a} > 0" block={false} /> at the minimum, the contracting universe undergoes a smooth, non-singular rebound into expansion. The Kretschmann scalar remains strictly bounded at all times:
                  <MathDisplay math="K \equiv R_{\mu\nu\rho\sigma} R^{\mu\nu\rho\sigma} \le 12 \left( \frac{8\pi G}{3} \rho_{\max} \right)^2 < \infty \quad \blacksquare" block={false} />.
                </p>
              </div>

              {/* Appendix D */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-6 space-y-3">
                <div className="flex items-center justify-between border-b border-[#EAE2D2] pb-2">
                  <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                    Appendix D: Quantum Cramér-Rao Bound &amp; Metrological Error Budget
                  </h3>
                  <span className="font-mono text-[10px] text-[#15803D] bg-[#DCFCE7] px-2 py-0.5 rounded">Metrological Derivation</span>
                </div>
                <p>
                  For any quantum clock consisting of N entangled atoms (e.g. ⁸⁷Sr or ¹⁷¹Yb in a 3D optical lattice), the quantum Fisher information matrix for phase parameter θ generated by Hamiltonian <MathDisplay math="\hat{H}" block={false} /> is:
                </p>
                <div className="py-2 text-center bg-[#081026] p-3 rounded-lg text-[#CBD9FC]">
                  <MathDisplay
                    math="\mathcal{F}_Q = 4 \left( \langle \psi | \hat{H}^2 | \psi \rangle - \langle \psi | \hat{H} | \psi \rangle^2 \right) = 4 (\Delta E)^2"
                    block={true}
                    className="text-xs sm:text-sm text-[#FDFBF7]"
                  />
                </div>
                <p>
                  For an optimal GHZ-like entangled probe state, <MathDisplay math="\mathcal{F}_Q = 4 N^2 (\Delta E_0)^2" block={false} />, reaching the Heisenberg limit. The fractional frequency instability (Allan deviation <MathDisplay math="\sigma_y(\tau)" block={false} />) for averaging time τ satisfies:
                </p>
                <div className="py-2 text-center bg-[#081026] p-3 rounded-lg text-[#CBD9FC]">
                  <MathDisplay
                    math="\sigma_y(\tau) = \frac{\Delta \tau}{\tau} \ge \frac{1}{\omega_0 \tau \sqrt{N_{\text{meas}} \mathcal{F}_Q}} = \frac{1}{2 \pi f_0 N \sqrt{\tau \tau_{\text{cycle}}}} \approx \frac{4.2 \times 10^{-19}}{\sqrt{\tau / \text{s}}}"
                    block={true}
                    className="text-sm text-[#FDFBF7]"
                  />
                </div>
                <p>
                  Systematic uncertainties from blackbody radiation shifts (<MathDisplay math="\le 2 \times 10^{-19}" block={false} />) and lattice light shifts (<MathDisplay math="\le 1 \times 10^{-19}" block={false} />) are fully accounted for, enabling laboratory verification of IGRT phase jitter at sub-Planckian sensitivities <MathDisplay math="\blacksquare" block={false} />.
                </p>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* Citation Modal */}
      {showCiteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="w-full max-w-2xl rounded-2xl bg-[#FFFFFF] border border-[#EAE2D2] shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-[#EAE2D2] pb-4">
              <div>
                <span className="font-cinzel text-xs text-[#B45309] uppercase tracking-wider font-medium">
                  Scholarly Citation Export
                </span>
                <h3 className="text-xl font-['Playfair_Display'] text-[#081026] mt-0.5">
                  Cite This Monograph
                </h3>
              </div>
              <button
                onClick={() => setShowCiteModal(false)}
                className="text-[#64748B] hover:text-[#081026] p-1.5 rounded-lg hover:bg-[#F4EFE6] text-sm"
              >
                ✕
              </button>
            </div>

            {/* BibTeX Section */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-cinzel text-xs text-[#081026] uppercase font-medium">BibTeX Format</span>
                <button
                  onClick={() => copyToClipboard(bibtexContent, 'bibtex')}
                  className="px-3 py-1 bg-[#0C1836] text-[#FDFBF7] rounded text-xs hover:bg-[#1A3670] transition-colors"
                >
                  {copySuccess === 'bibtex' ? '✓ Copied' : 'Copy BibTeX'}
                </button>
              </div>
              <pre className="bg-[#081026] text-[#CBD9FC] p-4 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border border-[#142B5B]">
                {bibtexContent}
              </pre>
            </div>

            {/* APA Section */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-cinzel text-xs text-[#081026] uppercase font-medium">APA Format</span>
                <button
                  onClick={() => copyToClipboard(apaContent, 'apa')}
                  className="px-3 py-1 bg-[#F4EFE6] text-[#0C1836] rounded text-xs hover:bg-[#EAE2D2] transition-colors"
                >
                  {copySuccess === 'apa' ? '✓ Copied' : 'Copy APA'}
                </button>
              </div>
              <p className="bg-[#FDFBF7] text-[#334155] p-3.5 rounded-lg border border-[#EAE2D2] text-xs font-['Poppins'] leading-relaxed">
                {apaContent}
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowCiteModal(false)}
                className="px-4 py-2 bg-[#0C1836] text-white text-xs rounded-lg hover:bg-[#1A3670]"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
