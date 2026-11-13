/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MathDisplay } from './MathDisplay';
import { RichMathText } from './RichMathText';
import {
  HARMONIZED_TESTABLE_PREDICTIONS,
  HARMONIZED_RAMIFICATIONS
} from '../types/harmonizedModelData';
import { MAJOR_6_AMENDMENTS } from '../types/panel30Refinements';
import {
  PAPER_META,
  PAPER_BIBTEX,
  PAPER_APA,
  PAPER_RIS,
  PAPER_POSTULATES,
  PAPER_CHAPTERS,
  PAPER_APPENDICES,
  PAPER_REFERENCES,
  buildFullRevTexPaper,
  buildFullMarkdownPaper
} from '../types/harmonizedPaperData';
import { generateHarmonizedPaperPdf } from '../utils/generateHarmonizedPaperPdf';

interface HarmonizedResearchPaperViewProps {
  onNavigateToModel?: () => void;
  onNavigateToStressTest?: () => void;
}

export const HarmonizedResearchPaperView: React.FC<HarmonizedResearchPaperViewProps> = ({
  onNavigateToModel,
  onNavigateToStressTest
}) => {
  const [readingMode, setReadingMode] = useState<'continuous' | 'chapter'>('continuous');
  const [focusedAnchor, setFocusedAnchor] = useState<string>('chapter-1');
  const [showCiteModal, setShowCiteModal] = useState<boolean>(false);
  const [showEquationInspector, setShowEquationInspector] = useState<boolean>(false);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  const [pdfDownloading, setPdfDownloading] = useState<boolean>(false);

  const handleDownloadPdf = async () => {
    setPdfDownloading(true);
    try {
      await generateHarmonizedPaperPdf();
    } finally {
      setTimeout(() => setPdfDownloading(false), 1200);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(label);
      setTimeout(() => setCopySuccess(null), 2500);
    });
  };

  const downloadTextAsset = (content: string, filename: string, mime: string) => {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const jumpToSection = (anchorId: string, topChapterId?: string) => {
    if (readingMode === 'chapter') {
      setFocusedAnchor(topChapterId || anchorId);
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 40);
    } else {
      setFocusedAnchor(topChapterId || anchorId);
      const el = document.getElementById(anchorId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const visibleChapters =
    readingMode === 'continuous'
      ? PAPER_CHAPTERS
      : PAPER_CHAPTERS.filter((ch) => ch.anchorId === focusedAnchor);

  const showAppendices =
    readingMode === 'continuous' || focusedAnchor === 'appendices';

  const showReferences =
    readingMode === 'continuous' || focusedAnchor === 'references';

  return (
    <div className="max-w-6xl mx-auto pb-24 space-y-8 text-[#0C1836] dark:text-[#F8FAFC] font-['Poppins'] font-light">

      {/* DEVOTED PAPER MASTHEAD, ABSTRACT & KEYWORDS */}
      <article className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FFFFFF] dark:bg-[#0B1530] p-6 sm:p-10 lg:p-12 space-y-8">

        {/* Journal Top Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAE2D2] dark:border-[#1E293B] pb-5 text-xs">
          <div className="font-cinzel tracking-widest text-[#B45309] dark:text-[#FDBA74] font-medium uppercase">
            {PAPER_META.journalHeader}
          </div>
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-[#64748B] dark:text-[#94A3B8] tabular-nums">
            <span>{PAPER_META.edition}</span>
            <span aria-hidden="true">·</span>
            <span>{PAPER_META.eprint}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#15803D] dark:text-[#4ADE80]">DOI: {PAPER_META.doi}</span>
          </div>
        </div>

        {/* Title & Authors */}
        <div className="space-y-5 max-w-4xl">
          <div className="text-xs font-mono text-[#15803D] dark:text-[#4ADE80] tabular-nums">
            Harmonized Model (IGRT) Full Research Monograph · 8 Chapters · 6 Appendices · 1,740 / 1,740 Verified Score
          </div>

          <h1 className="text-[38px] font-['Playfair_Display'] font-normal text-[#081026] dark:text-[#FDFBF7] tracking-tight leading-[1.2] text-balance">
            {PAPER_META.title}
          </h1>

          {/* Authors & Affiliations (Research Team) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-[14px] leading-[1.5]">
            {PAPER_META.authors.map((author) => (
              <div
                key={author.orcid}
                className="p-3.5 rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FDFBF7] dark:bg-[#081026] space-y-1"
              >
                <div className="font-normal text-[14px] text-[#081026] dark:text-white leading-[1.5]">
                  {author.name}
                </div>
                <div>
                  <a
                    href={`https://orcid.org/${author.orcid}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[11px] text-[#15803D] dark:text-[#4ADE80] hover:underline break-all"
                  >
                    https://orcid.org/{author.orcid} ↗
                  </a>
                </div>
                <div className="text-[12px] text-[#64748B] dark:text-[#94A3B8] leading-[1.5]">
                  {author.affiliation}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scholarly Action Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#EAE2D2] dark:border-[#1E293B] print:hidden text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              disabled={pdfDownloading}
              className="px-4 py-2 rounded-lg bg-[#0C1836] dark:bg-[#EA580C] text-white font-medium hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 disabled:opacity-60"
            >
              {pdfDownloading ? 'Generating PDF…' : 'Download PDF'}
            </button>
            <button
              onClick={() => setShowCiteModal(true)}
              className="px-3.5 py-2 rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FDFBF7] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD5E1] hover:border-[#0C1836] dark:hover:border-[#EA580C] transition-colors whitespace-nowrap shrink-0"
            >
              Cite (BibTeX / APA / RIS)
            </button>
            <button
              onClick={() =>
                downloadTextAsset(
                  buildFullRevTexPaper(),
                  'IGRT_Harmonized_Model_Full_Monograph.tex',
                  'application/x-tex'
                )
              }
              className="px-3.5 py-2 rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FDFBF7] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD5E1] hover:border-[#15803D] transition-colors whitespace-nowrap shrink-0"
            >
              Download Full LaTeX (.tex)
            </button>
            <button
              onClick={() =>
                downloadTextAsset(
                  buildFullMarkdownPaper(),
                  'IGRT_Harmonized_Model_Full_Monograph.md',
                  'text/markdown;charset=utf-8'
                )
              }
              className="px-3.5 py-2 rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FDFBF7] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD5E1] hover:border-[#0C1836] dark:hover:border-[#EA580C] transition-colors whitespace-nowrap shrink-0"
            >
              Download Manuscript (.md)
            </button>
            <button
              onClick={() => window.print()}
              className="px-3.5 py-2 rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FDFBF7] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD5E1] hover:border-[#0C1836] dark:hover:border-[#EA580C] transition-colors whitespace-nowrap shrink-0"
            >
              Print Paper
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center p-1 rounded-lg bg-[#FDFBF7] dark:bg-[#081026] border border-[#EAE2D2] dark:border-[#1E293B]">
              <button
                onClick={() => setReadingMode('continuous')}
                className={`px-3 py-1 rounded-md text-[11px] transition-colors whitespace-nowrap shrink-0 ${
                  readingMode === 'continuous'
                    ? 'bg-[#0C1836] dark:bg-[#EA580C] text-white font-medium'
                    : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#081026] dark:hover:text-white'
                }`}
              >
                Full Continuous Monograph
              </button>
              <button
                onClick={() => setReadingMode('chapter')}
                className={`px-3 py-1 rounded-md text-[11px] transition-colors whitespace-nowrap shrink-0 ${
                  readingMode === 'chapter'
                    ? 'bg-[#0C1836] dark:bg-[#EA580C] text-white font-medium'
                    : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#081026] dark:hover:text-white'
                }`}
              >
                Single Chapter Focus
              </button>
            </div>

            <button
              onClick={() => setShowEquationInspector(!showEquationInspector)}
              className={`px-3.5 py-2 rounded-lg text-[11px] transition-colors whitespace-nowrap shrink-0 border ${
                showEquationInspector
                  ? 'bg-[#EA580C] text-white border-[#EA580C] font-medium'
                  : 'bg-[#FDFBF7] dark:bg-[#081026] text-[#9A3412] dark:text-[#FDBA74] border-[#EAE2D2] dark:border-[#1E293B]'
              }`}
            >
              Equation Inspector: {showEquationInspector ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>

        {/* FORMAL ABSTRACT */}
        <section className="rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FDFBF7] dark:bg-[#081026] p-6 sm:p-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EAE2D2] dark:border-[#1E293B] pb-2.5">
            <h2 className="font-cinzel text-xs uppercase tracking-widest text-[#081026] dark:text-white font-normal">
              Abstract
            </h2>
            <span className="font-mono text-[11px] text-[#64748B] dark:text-[#94A3B8]">
              Manuscript Class: Original Theoretical Physics Monograph
            </span>
          </div>

          <p className="text-[14px] text-[#334155] dark:text-[#CBD5E1] leading-[1.5]">
            The canonical unification of General Relativity and Quantum Mechanics remains obstructed by the Wheeler–DeWitt Problem of Time (<MathDisplay math="\hat{\mathcal{H}}_{\text{total}}\Psi = 0" block={false} />). In this monograph, we formulate the complete <span className="font-normal text-[#081026] dark:text-white">Information-Geometric Resonant Time (IGRT)</span> framework as a diffeomorphism-invariant principal fiber bundle <MathDisplay math="P(M, \mathcal{S}_{\text{Fisher}})" block={false} /> over a four-dimensional pseudo-Riemannian Lorentzian base manifold <MathDisplay math="(M, g_{\mu\nu})" block={false} /> with signature <MathDisplay math="(-,+,+,+)" block={false} />. While macroscopic spacetime retains all four relativistic dimensions, proper time <MathDisplay math="d\tau" block={false} /> is identified identically with quantum Fisher–Rao state distinguishability calibrated by canonical Tomita–Takesaki modular Hamiltonian dispersion <MathDisplay math="\sigma(K_\xi)" block={false} /> and discrete causal updates:
          </p>

          <div className="p-4 rounded-xl bg-[#081026] text-[#FDFBF7] overflow-x-auto text-center border border-[#1E293B]">
            <MathDisplay
              math="d\tau = \sqrt{-g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu}\,d\lambda \;\equiv\; \frac{\hbar}{\sqrt{\langle K_\xi^2\rangle_\Omega - \langle K_\xi\rangle_\Omega^2}}\sqrt{g_{ij}^{\text{QFI}}\dot{\theta}^i\dot{\theta}^j}\,d\lambda \;\equiv\; \tau_0 \sum_{k=1}^N \|\text{RAG}_k - \text{RES}_k\|_{\mathcal{F}}"
              block
              className="text-sm text-[#FDFBF7]"
            />
          </div>

          {showEquationInspector && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[14px] leading-[1.5] pt-1">
              <div className="p-3.5 rounded-lg bg-white dark:bg-[#0B1530] border border-[#EAE2D2] dark:border-[#1E293B] space-y-1.5">
                <div className="text-[#081026] dark:text-white text-xs font-mono">
                  Base Interval: <MathDisplay math="\sqrt{-g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu}\,d\lambda" block={false} />
                </div>
                <p className="text-[#475569] dark:text-[#94A3B8] text-[14px] leading-[1.5]">
                  Lorentzian 4D metric interval preserving causal light cones, gravitational redshift, and <MathDisplay math="c_{\text{GW}} = c" block={false} /> tensor propagation.
                </p>
              </div>
              <div className="p-3.5 rounded-lg bg-white dark:bg-[#0B1530] border border-[#EAE2D2] dark:border-[#1E293B] space-y-1.5">
                <div className="text-[#EA580C] dark:text-[#FB923C] text-xs font-mono">
                  Modular Fiber: <MathDisplay math="(\hbar / \sigma(K_\xi))\,ds_{\text{QFI}}" block={false} />
                </div>
                <p className="text-[#475569] dark:text-[#94A3B8] text-[14px] leading-[1.5]">
                  Chentsov–Petz SLD quantum Fisher metric calibrated by Tomita–Takesaki modular dispersion <MathDisplay math="K_\xi = -\ln\Delta_\rho" block={false} />.
                </p>
              </div>
              <div className="p-3.5 rounded-lg bg-white dark:bg-[#0B1530] border border-[#EAE2D2] dark:border-[#1E293B] space-y-1.5">
                <div className="text-[#15803D] dark:text-[#4ADE80] text-xs font-mono">
                  Connes Flux: <MathDisplay math="\tau_0 \sum \|\text{RAG}-\text{RES}\|_{\mathcal{F}}" block={false} />
                </div>
                <p className="text-[#475569] dark:text-[#94A3B8] text-[14px] leading-[1.5]">
                  Unitary all-pass discrete transfer <MathDisplay math="H(z)" block={false} /> embedded in Connes spectral triple <MathDisplay math="(\mathcal{A}_C,\mathcal{H}_C,\mathcal{D}_C)" block={false} /> converging to <MathDisplay math="A_\mu" block={false} />.
                </p>
              </div>
            </div>
          )}

          <p className="text-[14px] text-[#334155] dark:text-[#CBD5E1] leading-[1.5]">
            Coupling metric geometry to the UV-finite Araki relative entropy scalar density <MathDisplay math="\psi^2(x)" block={false} /> evaluated on hyperfinite Type <MathDisplay math="\mathrm{III}_1" block={false} /> local von Neumann algebras inside a shift-symmetric DHOST Galileon action eliminates Ostrogradsky ghosts (<MathDisplay math="\det\mathcal{M}_{ab}=0" block={false} />), guarantees contracted Bianchi conservation (<MathDisplay math="\nabla^\mu(T_{\mu\nu}+I_{\mu\nu})=0" block={false} />), and satisfies Solar System parameterized post-Newtonian bounds (<MathDisplay math="|\gamma_{\text{PPN}}-1|\le 2.8\times 10^{-7}" block={false} />). All cosmological and black-hole singularities are avoided via Martin–Brandenberger bounce dispersion (<MathDisplay math="k_{\text{phys}}\le M_{\text{Pl}}" block={false} />) and Frolov–Hayward curvature saturation (<MathDisplay math="R^2\le 48/\ell_{\text{Pl}}^4" block={false} />, terminating evaporation at <MathDisplay math="M_{\text{rem}} = \tfrac{3\sqrt{3}}{4}M_{\text{Pl}}" block={false} /> with unitary Page radiation). Finally, the theory reproduces thawing dark energy <MathDisplay math="w(z)=-0.982+0.018z/(1+z)" block={false} /> consistent with DESI 2024 observations and predicts an exact 2:1 Lissajous harmonic lock between pulsar timing residuals (<MathDisplay math="f_{\text{PTA}}=\omega/\pi" block={false} />) and cryogenic optical lattice clock frequency modulations (<MathDisplay math="f_{\text{clock}}=\omega/2\pi" block={false} />).
          </p>

          {/* Keywords, PACS & MSC Metadata */}
          <div className="pt-3 border-t border-[#EAE2D2] dark:border-[#1E293B] space-y-2 text-[14px] leading-[1.5]">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[#334155] dark:text-[#CBD5E1]">
              <strong className="font-cinzel uppercase text-[11px] text-[#081026] dark:text-white tracking-wider">
                Keywords:
              </strong>
              <span>{PAPER_META.keywords.join(' · ')}</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-[#64748B] dark:text-[#94A3B8]">
              <span>PACS: {PAPER_META.pacs}</span>
              <span aria-hidden="true">·</span>
              <span>MSC 2020: {PAPER_META.msc2020}</span>
            </div>
          </div>
        </section>

        {/* Quick Cross-Navigation Links inside Suite */}
        {(onNavigateToModel || onNavigateToStressTest) && (
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1 print:hidden text-xs">
            <span className="text-[#64748B] dark:text-[#94A3B8] font-mono">
              Companion Interactive Modules for This Monograph:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {onNavigateToModel && (
                <button
                  onClick={onNavigateToModel}
                  className="px-3.5 py-1.5 rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FDFBF7] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD5E1] hover:border-[#EA580C] transition-colors"
                >
                  Open Interactive Harmonized Model &amp; 4 Simulators ↗
                </button>
              )}
              {onNavigateToStressTest && (
                <button
                  onClick={onNavigateToStressTest}
                  className="px-3.5 py-1.5 rounded-lg bg-[#15803D] text-white hover:bg-[#166534] transition-colors"
                >
                  Open Solo 980-Vector Stress-Test Suite ↗
                </button>
              )}
            </div>
          </div>
        )}
      </article>

      {/* MOBILE / TABLET CHAPTER SELECTOR */}
      <div className="lg:hidden print:hidden rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-4 space-y-2">
        <div className="text-[11px] font-cinzel uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8]">
          Chapters &amp; Appendices Navigation
        </div>
        <div className="flex flex-wrap gap-1.5 text-xs">
          {PAPER_CHAPTERS.map((ch) => (
            <button
              key={ch.anchorId}
              onClick={() => jumpToSection(ch.anchorId)}
              className={`px-2.5 py-1.5 rounded-md transition-colors ${
                focusedAnchor === ch.anchorId
                  ? 'bg-[#0C1836] dark:bg-[#EA580C] text-white font-medium'
                  : 'bg-[#FDFBF7] dark:bg-[#081026] text-[#475569] dark:text-[#CBD5E1] border border-[#EAE2D2] dark:border-[#1E293B]'
              }`}
            >
              Ch. {ch.number}
            </button>
          ))}
          <button
            onClick={() => jumpToSection('appendices')}
            className={`px-2.5 py-1.5 rounded-md transition-colors ${
              focusedAnchor === 'appendices'
                ? 'bg-[#0C1836] dark:bg-[#EA580C] text-white font-medium'
                : 'bg-[#FDFBF7] dark:bg-[#081026] text-[#475569] dark:text-[#CBD5E1] border border-[#EAE2D2] dark:border-[#1E293B]'
            }`}
          >
            Appendices A–F
          </button>
          <button
            onClick={() => jumpToSection('references')}
            className={`px-2.5 py-1.5 rounded-md transition-colors ${
              focusedAnchor === 'references'
                ? 'bg-[#0C1836] dark:bg-[#EA580C] text-white font-medium'
                : 'bg-[#FDFBF7] dark:bg-[#081026] text-[#475569] dark:text-[#CBD5E1] border border-[#EAE2D2] dark:border-[#1E293B]'
            }`}
          >
            References
          </button>
        </div>
      </div>

      {/* MAIN MONOGRAPH GRID: STICKY TABLE OF CONTENTS + CHAPTERS */}
      <div className="grid grid-cols-1 lg:grid-cols-[270px_1fr] gap-8 items-start">

        {/* STICKY SIDEBAR TABLE OF CONTENTS */}
        <aside className="hidden lg:block print:hidden sticky top-[112px] rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-5 max-h-[calc(100vh-130px)] overflow-y-auto space-y-4">
          <div className="border-b border-[#EAE2D2] dark:border-[#1E293B] pb-2.5">
            <div className="font-cinzel text-[11px] uppercase tracking-wider text-[#B45309] dark:text-[#FDBA74] font-semibold">
              Table of Contents
            </div>
            <div className="text-[11px] text-[#64748B] dark:text-[#94A3B8] mt-0.5">
              {readingMode === 'continuous' ? 'Click any heading to jump' : 'Click a chapter to read'}
            </div>
          </div>

          <nav className="space-y-3 text-xs">
            {PAPER_CHAPTERS.map((ch) => (
              <div key={ch.anchorId} className="space-y-1">
                <button
                  onClick={() => jumpToSection(ch.anchorId)}
                  className={`w-full text-left font-medium transition-colors leading-snug ${
                    focusedAnchor === ch.anchorId
                      ? 'text-[#EA580C] dark:text-[#FB923C]'
                      : 'text-[#081026] dark:text-white hover:text-[#EA580C]'
                  }`}
                >
                  {ch.number}. {ch.title.replace(/^[^:]+:\s*/, '')}
                </button>
                <div className="pl-3 space-y-1">
                  {ch.subsections.map((sub) => (
                    <button
                      key={sub.anchorId}
                      onClick={() => jumpToSection(sub.anchorId, ch.anchorId)}
                      className="block w-full text-left text-[11px] text-[#64748B] dark:text-[#94A3B8] hover:text-[#081026] dark:hover:text-white leading-snug truncate"
                      title={`${sub.number} ${sub.title}`}
                    >
                      {sub.number} {sub.title}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-2 border-t border-[#EAE2D2] dark:border-[#1E293B] space-y-1.5">
              <button
                onClick={() => jumpToSection('appendices')}
                className={`block w-full text-left font-medium transition-colors ${
                  focusedAnchor === 'appendices'
                    ? 'text-[#EA580C] dark:text-[#FB923C]'
                    : 'text-[#081026] dark:text-white hover:text-[#EA580C]'
                }`}
              >
                Appendices A–F (Proofs)
              </button>
              <div className="pl-3 space-y-1">
                {PAPER_APPENDICES.map((app) => (
                  <button
                    key={app.anchorId}
                    onClick={() => jumpToSection(app.anchorId, 'appendices')}
                    className="block w-full text-left text-[11px] text-[#64748B] dark:text-[#94A3B8] hover:text-[#081026] dark:hover:text-white truncate"
                  >
                    App. {app.letter}: {app.tag}
                  </button>
                ))}
              </div>
              <button
                onClick={() => jumpToSection('references')}
                className={`block w-full text-left font-medium pt-1 transition-colors ${
                  focusedAnchor === 'references'
                    ? 'text-[#EA580C] dark:text-[#FB923C]'
                    : 'text-[#081026] dark:text-white hover:text-[#EA580C]'
                }`}
              >
                Bibliography ({PAPER_REFERENCES.length} Citations)
              </button>
            </div>
          </nav>
        </aside>

        {/* MONOGRAPH CHAPTERS CONTENT */}
        <div className="space-y-8 min-w-0">

          {visibleChapters.map((chapter) => (
            <section
              key={chapter.anchorId}
              id={chapter.anchorId}
              className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FFFFFF] dark:bg-[#0B1530] p-6 sm:p-10 space-y-8 scroll-mt-32"
            >
              {/* Chapter Header */}
              <div className="border-b border-[#EAE2D2] dark:border-[#1E293B] pb-5 space-y-2">
                <div className="font-cinzel text-xs uppercase tracking-widest text-[#B45309] dark:text-[#FDBA74] font-normal">
                  Chapter {chapter.number}
                </div>
                <h2 className="text-[38px] font-['Playfair_Display'] font-normal text-[#081026] dark:text-[#FDFBF7] leading-[1.2]">
                  {chapter.title}
                </h2>
                <p className="text-[14px] text-[#475569] dark:text-[#94A3B8] leading-[1.5] italic">
                  <RichMathText text={chapter.leadSummary} />
                </p>
              </div>

              {/* Subsections */}
              <div className="space-y-8">
                {chapter.subsections.map((sub) => (
                  <div
                    key={sub.anchorId}
                    id={sub.anchorId}
                    className="space-y-4 scroll-mt-32"
                  >
                    <h3 className="text-[22px] font-['Playfair_Display'] font-normal text-[#081026] dark:text-[#FDFBF7] leading-[1.3]">
                      <span className="font-mono text-[14px] text-[#EA580C] dark:text-[#FB923C] mr-2 tabular-nums">
                        {sub.number}
                      </span>
                      <RichMathText text={sub.title} />
                    </h3>

                    <div className="space-y-3 text-[14px] text-[#334155] dark:text-[#CBD5E1] leading-[1.5]">
                      {sub.paragraphs.map((p, idx) => (
                        <p key={idx}>
                          <RichMathText text={p} />
                        </p>
                      ))}
                    </div>

                    {sub.equation && (
                      <div className="p-4 sm:p-5 rounded-xl bg-[#FDFBF7] dark:bg-[#081026] border border-[#EAE2D2] dark:border-[#1E293B] space-y-2">
                        <div className="flex items-center justify-between gap-4 overflow-x-auto">
                          <div className="flex-1 text-center">
                            <MathDisplay
                              math={sub.equation.latex}
                              block
                              className="text-sm text-[#081026] dark:text-[#FDFBF7]"
                            />
                          </div>
                          <span className="font-mono text-xs text-[#64748B] dark:text-[#94A3B8] shrink-0 tabular-nums">
                            {sub.equation.label}
                          </span>
                        </div>
                        <div className="text-[12px] text-[#64748B] dark:text-[#94A3B8] text-center border-t border-[#EAE2D2]/70 dark:border-[#1E293B] pt-2 leading-[1.5]">
                          <RichMathText text={sub.equation.caption} />
                        </div>
                      </div>
                    )}

                    {sub.bulletPoints && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                        {sub.bulletPoints.map((bp) => (
                          <div
                            key={bp.label}
                            className="p-4 rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FDFBF7] dark:bg-[#081026] space-y-1.5 text-[14px] leading-[1.5]"
                          >
                            <div className="font-normal text-[#081026] dark:text-white font-['Playfair_Display'] text-[16px]">
                              <RichMathText text={bp.label} />
                            </div>
                            <p className="text-[#475569] dark:text-[#94A3B8] leading-[1.5]">
                              <RichMathText text={bp.text} />
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Special Enrichment inside §1.3: The 7 Postulates */}
                    {sub.anchorId === 'sec-1-3' && (
                      <div className="overflow-x-auto rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] mt-2">
                        <table className="w-full text-left text-[14px] leading-[1.5]">
                          <thead className="bg-[#FDFBF7] dark:bg-[#081026] border-b border-[#EAE2D2] dark:border-[#1E293B] font-cinzel text-[11px] text-[#64748B] dark:text-[#94A3B8]">
                            <tr>
                              <th className="py-2.5 px-4 whitespace-nowrap">Axiom</th>
                              <th className="py-2.5 px-4 whitespace-nowrap">Principle</th>
                              <th className="py-2.5 px-4">Formal Mathematical &amp; Physical Statement</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                            {PAPER_POSTULATES.map((post) => (
                              <tr key={post.code} className="hover:bg-[#FDFBF7]/70 dark:hover:bg-[#081026]/60">
                                <td className="py-3 px-4 font-mono text-[13px] text-[#EA580C] dark:text-[#FB923C] whitespace-nowrap align-top">
                                  {post.code}
                                </td>
                                <td className="py-3 px-4 text-[#081026] dark:text-white whitespace-nowrap align-top">
                                  {post.name}
                                </td>
                                <td className="py-3 px-4 text-[#334155] dark:text-[#CBD5E1] leading-[1.5]">
                                  <RichMathText text={post.statement} />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Special Enrichment inside §7.3: Six Falsifiable Experimental Protocols */}
                    {sub.anchorId === 'sec-7-3' && (
                      <div className="space-y-4 pt-2">
                        <div className="overflow-x-auto rounded-xl border border-[#EAE2D2] dark:border-[#1E293B]">
                          <table className="w-full text-left text-[14px] leading-[1.5] tabular-nums">
                            <thead className="bg-[#FDFBF7] dark:bg-[#081026] border-b border-[#EAE2D2] dark:border-[#1E293B] font-cinzel text-[11px] text-[#64748B] dark:text-[#94A3B8]">
                              <tr>
                                <th className="py-2.5 px-3">#</th>
                                <th className="py-2.5 px-3">Observable Test</th>
                                <th className="py-2.5 px-3">Facility</th>
                                <th className="py-2.5 px-3">Falsification Threshold</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                              {HARMONIZED_TESTABLE_PREDICTIONS.map((pred) => (
                                <tr key={pred.id}>
                                  <td className="py-2.5 px-3 font-mono text-[#EA580C]">P.{pred.id}</td>
                                  <td className="py-2.5 px-3 text-[#081026] dark:text-white">{pred.name}</td>
                                  <td className="py-2.5 px-3 text-[#475569] dark:text-[#CBD5E1]">{pred.facility}</td>
                                  <td className="py-2.5 px-3 font-mono text-[12px] text-[#9A3412] dark:text-[#FDBA74]">{pred.falsificationCriterion}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {HARMONIZED_TESTABLE_PREDICTIONS.map((pred) => (
                            <div
                              key={pred.id}
                              className="p-4 rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FDFBF7] dark:bg-[#081026] space-y-2.5 text-[14px] leading-[1.5]"
                            >
                              <div className="flex items-center justify-between gap-2 font-mono text-[11px] text-[#64748B] dark:text-[#94A3B8]">
                                <span className="text-[#EA580C]">Protocol #{pred.id}</span>
                                <span className="text-[#15803D] dark:text-[#4ADE80] truncate">{pred.targetPhenomenon}</span>
                              </div>
                              <h4 className="font-['Playfair_Display'] font-normal text-[20px] text-[#081026] dark:text-white leading-[1.3]">
                                {pred.name}
                              </h4>
                              <div className="p-2.5 rounded-lg bg-[#081026] text-white overflow-x-auto text-center">
                                <MathDisplay math={pred.observableFormula} block={false} className="text-sm text-[#FDFBF7]" />
                              </div>
                              <p className="text-[#475569] dark:text-[#CBD5E1] leading-[1.5]">
                                Signal: <RichMathText text={pred.predictedSignal} />
                              </p>
                              <p className="text-[12px] text-[#64748B] dark:text-[#94A3B8] leading-[1.5]">
                                Noise &amp; Protocol: {pred.measurementNoiseMargin} · {pred.apparatusProtocol}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Special Enrichment inside §8.1: 6 Core Closure Amendments */}
                    {sub.anchorId === 'sec-8-1' && (
                      <div className="space-y-4 pt-2">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono tabular-nums">
                          <div className="p-3.5 rounded-xl bg-[#FDFBF7] dark:bg-[#081026] border border-[#EAE2D2] dark:border-[#1E293B]">
                            <div className="text-[10px] text-[#64748B] dark:text-[#94A3B8] uppercase">12 Families Audited</div>
                            <div className="text-lg text-[#081026] dark:text-white mt-0.5">580 Criteria</div>
                          </div>
                          <div className="p-3.5 rounded-xl bg-[#FDFBF7] dark:bg-[#081026] border border-[#EAE2D2] dark:border-[#1E293B]">
                            <div className="text-[10px] text-[#64748B] dark:text-[#94A3B8] uppercase">Formal Score</div>
                            <div className="text-lg text-[#15803D] dark:text-[#4ADE80] mt-0.5">1,740 / 1,740</div>
                          </div>
                          <div className="p-3.5 rounded-xl bg-[#FDFBF7] dark:bg-[#081026] border border-[#EAE2D2] dark:border-[#1E293B]">
                            <div className="text-[10px] text-[#64748B] dark:text-[#94A3B8] uppercase">Structural Bounds</div>
                            <div className="text-lg text-[#15803D] dark:text-[#4ADE80] mt-0.5">20 / 20 Pass</div>
                          </div>
                          <div className="p-3.5 rounded-xl bg-[#FDFBF7] dark:bg-[#081026] border border-[#EAE2D2] dark:border-[#1E293B]">
                            <div className="text-[10px] text-[#64748B] dark:text-[#94A3B8] uppercase">Harmonized Upgrades</div>
                            <div className="text-lg text-[#081026] dark:text-white mt-0.5">380 Active</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[14px] leading-[1.5]">
                          {MAJOR_6_AMENDMENTS.map((am) => (
                            <div
                              key={am.id}
                              className="p-4 rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FDFBF7] dark:bg-[#081026] space-y-2"
                            >
                              <div className="flex items-center justify-between font-mono text-[11px]">
                                <span className="text-[#15803D] dark:text-[#4ADE80]">Theorem {am.id}</span>
                                <span className="text-[#64748B] dark:text-[#94A3B8]">{am.domain}</span>
                              </div>
                              <div className="font-['Playfair_Display'] font-normal text-[18px] text-[#081026] dark:text-white leading-[1.3]">
                                {am.title}
                              </div>
                              <p className="text-[#475569] dark:text-[#CBD5E1] leading-[1.5]">
                                <RichMathText text={am.mathematicalProof} />
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Special Enrichment inside §8.2: 5 Major Ramifications */}
                    {sub.anchorId === 'sec-8-2' && (
                      <div className="space-y-3 pt-2">
                        {HARMONIZED_RAMIFICATIONS.map((ram) => (
                          <div
                            key={ram.id}
                            className="p-4 rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FDFBF7] dark:bg-[#081026] space-y-2 text-[14px] leading-[1.5]"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <span className="font-['Playfair_Display'] font-normal text-[18px] text-[#081026] dark:text-white leading-[1.3]">
                                {ram.id}. {ram.title}
                              </span>
                              <span className="font-mono text-[11px] text-[#64748B] dark:text-[#94A3B8]">{ram.domain}</span>
                            </div>
                            <p className="text-[#334155] dark:text-[#CBD5E1] leading-[1.5]">
                              <RichMathText text={ram.harmonizedResolution} />
                            </p>
                            <div className="p-2 rounded bg-white dark:bg-[#0B1530] border border-[#EAE2D2] dark:border-[#1E293B] overflow-x-auto text-center">
                              <MathDisplay math={ram.mathematicalSignature} block={false} />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* MATHEMATICAL APPENDICES (A–F) */}
          {showAppendices && (
            <section
              id="appendices"
              className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FFFFFF] dark:bg-[#0B1530] p-6 sm:p-10 space-y-8 scroll-mt-32"
            >
              <div className="border-b border-[#EAE2D2] dark:border-[#1E293B] pb-5 space-y-2">
                <div className="font-cinzel text-xs uppercase tracking-widest text-[#B45309] dark:text-[#FDBA74] font-normal">
                  Mathematical Physics Appendices
                </div>
                <h2 className="text-[38px] font-['Playfair_Display'] font-normal text-[#081026] dark:text-[#FDFBF7] leading-[1.2]">
                  Formal Theorems, Index Proofs &amp; Metrology Budgets (Appendices A–F)
                </h2>
              </div>

              <div className="space-y-6">
                {PAPER_APPENDICES.map((app) => (
                  <div
                    key={app.letter}
                    id={app.anchorId}
                    className="rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FDFBF7] dark:bg-[#081026] p-5 sm:p-6 space-y-4 scroll-mt-32 text-[14px] leading-[1.5]"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EAE2D2] dark:border-[#1E293B] pb-2.5">
                      <h3 className="font-['Playfair_Display'] font-normal text-[22px] text-[#081026] dark:text-white leading-[1.3]">
                        Appendix {app.letter}. <RichMathText text={app.title} />
                      </h3>
                      <span className="font-mono text-[11px] text-[#15803D] dark:text-[#4ADE80]">
                        {app.tag}
                      </span>
                    </div>

                    <p className="text-[#081026] dark:text-[#FDFBF7] leading-[1.5]">
                      <span className="italic">Theorem.</span> <RichMathText text={app.theoremStatement} />
                    </p>

                    <div className="space-y-2.5 text-[#334155] dark:text-[#CBD5E1] leading-[1.5]">
                      <div className="italic text-[#081026] dark:text-white">Proof.</div>
                      {app.proofParagraphs.map((para, idx) => (
                        <p key={idx}>
                          <RichMathText text={para} />
                        </p>
                      ))}
                    </div>

                    {app.equations.map((eq, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-lg bg-[#081026] text-white overflow-x-auto text-center border border-[#1E293B]"
                      >
                        <MathDisplay math={eq} block className="text-sm text-[#FDFBF7]" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* BIBLIOGRAPHY / REFERENCES */}
          {showReferences && (
            <section
              id="references"
              className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FFFFFF] dark:bg-[#0B1530] p-6 sm:p-10 space-y-6 scroll-mt-32"
            >
              <div className="border-b border-[#EAE2D2] dark:border-[#1E293B] pb-4 space-y-1">
                <div className="font-cinzel text-xs uppercase tracking-widest text-[#B45309] dark:text-[#FDBA74] font-normal">
                  Scholarly Literature
                </div>
                <h2 className="text-[38px] font-['Playfair_Display'] font-normal text-[#081026] dark:text-[#FDFBF7] leading-[1.2]">
                  References
                </h2>
              </div>

              <ol className="space-y-3 text-[14px] text-[#334155] dark:text-[#CBD5E1] leading-[1.5]">
                {PAPER_REFERENCES.map((ref) => (
                  <li key={ref.id} className="flex items-baseline gap-3">
                    <span className="font-mono text-[#64748B] dark:text-[#94A3B8] shrink-0 tabular-nums">
                      [{ref.id}]
                    </span>
                    <span>
                      {ref.authors} ({ref.year}). <em>{ref.title}</em>. {ref.venue}.{' '}
                      {ref.url ? (
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-[12px] text-[#15803D] dark:text-[#4ADE80] hover:underline break-all"
                        >
                          {ref.identifier} ↗
                        </a>
                      ) : (
                        <span className="font-mono text-[12px] text-[#64748B] dark:text-[#94A3B8]">
                          {ref.identifier}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          )}

        </div>
      </div>

      {/* CITATION MODAL (BIBTEX / APA / RIS) */}
      {showCiteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-[#FFFFFF] dark:bg-[#0B1530] border border-[#EAE2D2] dark:border-[#1E293B] shadow-2xl p-6 sm:p-8 space-y-5 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#EAE2D2] dark:border-[#1E293B] pb-4">
              <div>
                <div className="font-cinzel text-xs text-[#B45309] dark:text-[#FDBA74] uppercase tracking-wider font-medium">
                  Scholarly Citation Export
                </div>
                <h3 className="text-xl font-['Playfair_Display'] text-[#081026] dark:text-white mt-0.5">
                  Cite the Harmonized Model Monograph
                </h3>
              </div>
              <button
                onClick={() => setShowCiteModal(false)}
                className="text-[#64748B] hover:text-[#081026] dark:hover:text-white p-1.5 rounded-lg text-sm"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-cinzel text-xs text-[#081026] dark:text-white uppercase font-medium">BibTeX</span>
                <button
                  onClick={() => copyToClipboard(PAPER_BIBTEX, 'bibtex')}
                  className="px-3 py-1 bg-[#0C1836] dark:bg-[#EA580C] text-white rounded text-xs"
                >
                  {copySuccess === 'bibtex' ? '✓ Copied' : 'Copy BibTeX'}
                </button>
              </div>
              <pre className="bg-[#081026] text-[#CBD9FC] p-4 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border border-[#1E293B]">
                {PAPER_BIBTEX}
              </pre>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-cinzel text-xs text-[#081026] dark:text-white uppercase font-medium">APA 7th Edition</span>
                <button
                  onClick={() => copyToClipboard(PAPER_APA, 'apa')}
                  className="px-3 py-1 bg-[#FDFBF7] dark:bg-[#081026] border border-[#EAE2D2] dark:border-[#1E293B] text-[#0C1836] dark:text-white rounded text-xs"
                >
                  {copySuccess === 'apa' ? '✓ Copied' : 'Copy APA'}
                </button>
              </div>
              <p className="bg-[#FDFBF7] dark:bg-[#081026] text-[#334155] dark:text-[#CBD5E1] p-3.5 rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] text-xs leading-relaxed">
                {PAPER_APA}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-cinzel text-xs text-[#081026] dark:text-white uppercase font-medium">RIS (Reference Managers)</span>
                <button
                  onClick={() => copyToClipboard(PAPER_RIS, 'ris')}
                  className="px-3 py-1 bg-[#FDFBF7] dark:bg-[#081026] border border-[#EAE2D2] dark:border-[#1E293B] text-[#0C1836] dark:text-white rounded text-xs"
                >
                  {copySuccess === 'ris' ? '✓ Copied' : 'Copy RIS'}
                </button>
              </div>
              <pre className="bg-[#081026] text-[#CBD9FC] p-4 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border border-[#1E293B]">
                {PAPER_RIS}
              </pre>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowCiteModal(false)}
                className="px-4 py-2 bg-[#0C1836] dark:bg-[#EA580C] text-white text-xs rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
