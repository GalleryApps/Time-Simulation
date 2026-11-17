/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Devoted Follow-Up Monograph View for IGRT-H12:
 * "Folding Time Across Hidden Dimensions: Fifth-Dimensional Resonant Geometry,
 *  Quantum Portals, and the Limits of Spacetime Shortcuts"
 *
 * Architecture:
 * - Preserves IGRT-2026-H11 completely untouched
 * - Pure Playfair Display Regular (40px, non-bold) chapter titles + Book Antiqua 16px justified prose
 * - Includes Summary for Non-Specialists, 5 Front-Matter Lists, Chapters 1–13 (reorganized with
 *   Ch. 9 Negative Results Summary, Ch. 10 What Is Unique to 5D?, Ch. 11 What Is Not Derived),
 *   Appendices L–N (Portal Mechanisms, Devices A–F, Adversarial Stress-Test Scorecard),
 *   End-Matter Open Problems & Prior Audits, and separate Supplementary Volume II (Appendices A–K)
 */

import React, { useMemo, useState } from 'react';
import {
  H12_META,
  H12_MASTER_EQUATIONS,
  H12_ABSTRACT_PARAGRAPHS,
  H12_NON_SPECIALIST_SUMMARY,
  H12_SCOPE_AND_NON_CLAIMS,
  H11_TWELVE_COMPONENTS_AUDIT,
  COMPARISON_4D_VS_5D_IGRT,
  GLOSSARY_5D_TERMS,
  SUMMARY_FOR_PHYSICISTS,
  TIMELINE_5D_PHYSICS,
  SEVEN_TEMPORAL_NOTIONS,
  POSITIVE_CONJECTURES_SUMMARY,
  SIX_BLACK_HOLE_CLASSES,
  NEGATIVE_RESULTS_SUMMARY,
  GLOSSARY_NEGATIVE_THEOREMS,
  WHAT_IS_UNIQUE_TO_5D,
  FIVE_D_OBSERVATIONAL_BOUNDS,
  WHAT_IS_NOT_DERIVED_LEDGER,
  H12_ALL_PROTOCOLS,
  P7_TO_P10_TIMELINE_TABLE,
  P7_TO_P10_FALSIFICATION_TABLE,
  P7_TO_P10_CONFIRMATION_TABLE,
  P7_TO_P10_DECISION_MATRIX,
  H11_VS_H12_PROTOCOLS_COMPARISON,
  H12_FALSIFICATION_CHECKLIST,
  H12_CONFIRMATION_CHECKLIST,
  H12_FUNDING_AGENCY_SUMMARY,
  ELEVEN_PORTAL_MECHANISMS,
  SIX_PROPOSED_DEVICES,
  TWELVE_EXTRAPOLATIONS,
  H12_DEFINITIONS_LIST,
  H12_THEOREMS_LIST,
  H12_OPEN_PROBLEMS_LIST,
  H12_PRIOR_AUDIT_RESPONSES,
  H12_APPENDICES,
  H12_REFERENCES,
  type H12EpistemicCategory,
  type H12Equation
} from '../types/igrtH12Apparatus';
import {
  H12_CHAPTERS,
  H12_MAIN_APPENDICES_LMN,
  H12_FRONTMATTER_TABLES_LIST,
  H12_FRONTMATTER_EQUATIONS_LIST,
  buildH12FullMarkdown
} from '../types/igrtH12Data';
import {
  H12_ARCHIVAL_PLATES,
  H12_FIGURES,
  H12PlateCard,
  H12FigureCard
} from './IgrtH12Figures';
import { MathText } from './MathText';
import {
  buildH12SelfContainedHtml,
  buildH12StandaloneLatex,
  buildH12LatexBundleZipBlob
} from '../utils/generateIgrtH12Exports';
import {
  generateIgrtH12Pdf,
  generateIgrtH12SupplementaryPdf
} from '../utils/generateIgrtH12Pdf';
import {
  H12_TEN_DOMAIN_AUDITS,
  H12_SIXTEEN_REDTEAM_ATTACKS,
  H12_STRESS_TEST_SUMMARY
} from '../types/igrtH12StressTest';
import verifyH12ScriptSource from '../../scripts/verify-igrt-h12.mjs?raw';
import stressH12ScriptSource from '../../scripts/stress-test-h12.mjs?raw';

interface IgrtH12PaperViewProps {
  onNavigateToH11Paper?: () => void;
  onNavigateToH11Model?: () => void;
}

const H12EquationBox: React.FC<{ eq: H12Equation }> = ({ eq }) => (
  <div className="my-7 rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] p-5 sm:p-6">
    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 mb-2 border-b border-[#EAE2D2] dark:border-[#1E293B] text-[11px] font-mono">
      <span className="text-[#64748B] dark:text-[#94A3B8] tracking-wide">
        {eq.category}
      </span>
      <span className="text-[#8B4513] dark:text-[#FB923C] tabular-nums">{eq.label}</span>
    </div>
    <div
      className="text-center text-[#0F172A] dark:text-[#FDFBF7] py-2.5 overflow-x-auto leading-relaxed"
      dangerouslySetInnerHTML={{ __html: eq.unicodeHtml }}
    />
    <div className="mt-2.5 pt-2.5 border-t border-[#EAE2D2] dark:border-[#1E293B] text-center text-[13px] italic text-[#475569] dark:text-[#94A3B8]">
      <MathText text={eq.caption} />
    </div>
  </div>
);

export const IgrtH12PaperView: React.FC<IgrtH12PaperViewProps> = ({
  onNavigateToH11Paper,
  onNavigateToH11Model
}) => {
  const [categoryFilter, setCategoryFilter] = useState<'ALL' | H12EpistemicCategory>('ALL');
  const [attackWaveFilter, setAttackWaveFilter] = useState<string>('ALL');
  const [zipBusy, setZipBusy] = useState(false);
  const [pdfBusy, setPdfBusy] = useState(false);
  const [suppPdfBusy, setSuppPdfBusy] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [kDxSlider, setKDxSlider] = useState<number>(10);
  const [wormholeLogRadius, setWormholeLogRadius] = useState<number>(0);

  const triggerDownload = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadLatexZip = async () => {
    setZipBusy(true);
    try {
      const blob = await buildH12LatexBundleZipBlob();
      triggerDownload(blob, 'IGRT_H12_LaTeX_Bundle.zip');
    } finally {
      setZipBusy(false);
    }
  };

  const handleDownloadPdf = async () => {
    setPdfBusy(true);
    setPdfError(null);
    try {
      await generateIgrtH12Pdf();
    } catch (err) {
      setPdfError(err instanceof Error ? err.message : 'PDF export encountered an error.');
    } finally {
      setPdfBusy(false);
    }
  };

  const handleDownloadSupplementaryPdf = async () => {
    setSuppPdfBusy(true);
    setPdfError(null);
    try {
      await generateIgrtH12SupplementaryPdf();
    } catch (err) {
      setPdfError(err instanceof Error ? err.message : 'Supplementary PDF export encountered an error.');
    } finally {
      setSuppPdfBusy(false);
    }
  };

  const liveBeltrami = useMemo(() => {
    const beta = 1.0;
    const alpha_t = 0.5;
    const dx = kDxSlider;
    const computeHalf = (yPeak: number) => {
      if (yPeak <= 0) return { xHalf: 0, cdtHalf: 0 };
      const C = Math.exp(-beta * yPeak);
      const nu = 200;
      const du = 1 / nu;
      let xHalf = 0;
      let cdtHalf = 0;
      for (let i = 0; i < nu; i++) {
        const um = (i + 0.5) * du;
        const y = yPeak * (1 - um * um);
        const dyAbs = 2 * yPeak * um * du;
        const e_m2by = Math.exp(-2 * beta * y);
        const e_2aty = Math.exp(2 * alpha_t * y);
        const bracket = Math.max(1e-18, e_m2by / (C * C) - 1);
        const yp = Math.sqrt(e_2aty * e_m2by * bracket);
        const dxStep = dyAbs / yp;
        xHalf += dxStep;
        cdtHalf += (e_m2by / C) * dxStep;
      }
      return { xHalf, cdtHalf };
    };
    let lo = 1e-4;
    let hi = 25;
    for (let it = 0; it < 36; it++) {
      const mid = 0.5 * (lo + hi);
      if (computeHalf(mid).xHalf < dx / 2) lo = mid;
      else hi = mid;
    }
    const yPeak = 0.5 * (lo + hi);
    const { cdtHalf } = computeHalf(yPeak);
    const etaFold = (2 * cdtHalf) / dx;
    return { yPeak, etaFold, cEffRatio: 1 / etaFold };
  }, [kDxSlider]);

  const liveWormhole = useMemo(() => {
    const r0 = Math.pow(10, wormholeLogRadius);
    const c = 2.99792458e8;
    const G = 6.6743e-11;
    const hbar = 1.054571817e-34;
    const M_sun = 1.98847e30;
    const necThroat = -(Math.pow(c, 4) / (4 * Math.PI * G)) / (r0 * r0);
    const exoticJ = -(Math.PI / 2) * (Math.pow(c, 4) / G) * r0;
    const exoticSolar = exoticJ / (c * c * M_sun);
    const casimirRho = -(Math.PI * Math.PI * hbar * c) / (720 * Math.pow(r0, 4));
    const ratio = Math.abs(casimirRho / necThroat);
    return { r0, necThroat, exoticSolar, ratio };
  }, [wormholeLogRadius]);

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div id="igrt-h12-paper-root" className="igrt-monograph igrt-h12-paper space-y-10 text-[#0C1836] dark:text-[#FDFBF7]">
      {/* Masthead, Title, Authors & Download Action Bar */}
      <section className="rounded-2xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-7 sm:p-11 shadow-xs space-y-7">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D6CABE] dark:border-[#1E293B] pb-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-[#64748B] dark:text-[#94A3B8]">
            <span className="text-[#9A3412] dark:text-[#FDBA74] uppercase tracking-[0.12em]">
              {H12_META.monographId}
            </span>
            <span aria-hidden="true">·</span>
            <span>{H12_META.edition}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#166534] dark:text-[#86EFAC]">15/15 Assertions Verified</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => scrollToAnchor('h12-app-n')}
              className="text-[#1E40AF] dark:text-[#93C5FD] hover:underline whitespace-nowrap shrink-0 tabular-nums"
            >
              Stress Score (App. N): {H12_STRESS_TEST_SUMMARY.grandSelfContainedPoints}/{H12_STRESS_TEST_SUMMARY.grandMaxPoints} ({H12_STRESS_TEST_SUMMARY.selfContainedScorePct}%)
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {onNavigateToH11Paper && (
              <button
                onClick={onNavigateToH11Paper}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium border border-[#D6CABE] dark:border-[#334155] hover:bg-[#F4EFE6] dark:hover:bg-[#173065] transition-colors whitespace-nowrap shrink-0"
              >
                ← Back to H11 Monograph
              </button>
            )}
            {onNavigateToH11Model && (
              <button
                onClick={onNavigateToH11Model}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium border border-[#D6CABE] dark:border-[#334155] hover:bg-[#F4EFE6] dark:hover:bg-[#173065] transition-colors whitespace-nowrap shrink-0"
              >
                H11 Reference Model
              </button>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h1
            className="text-[#081026] dark:text-white text-balance"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: 'clamp(2rem, 3.4vw, 2.85rem)', lineHeight: 1.18 }}
          >
            {H12_META.title}
          </h1>
          <p className="text-base sm:text-[18px] text-[#475569] dark:text-[#CBD5E1] italic leading-[1.6] text-justify [hyphens:auto]">
            {H12_META.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          {H12_META.authorRoster.map((author) => (
            <div
              key={author.orcid}
              className="p-4 sm:p-5 rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] space-y-1.5"
            >
              <div
                className="text-[20px] leading-snug text-[#0C1836] dark:text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
              >
                {author.name}
              </div>
              <a
                href={author.orcidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono text-[11px] text-[#15803D] dark:text-[#86EFAC] hover:underline break-all"
              >
                {author.orcidUrl} ↗
              </a>
              <div className="text-[12.5px] font-medium text-[#0C1836] dark:text-[#E2E8F0] leading-snug pt-0.5">
                {author.affiliation}
              </div>
              <div className="text-[11.5px] text-[#9A3412] dark:text-[#FDBA74] leading-snug">
                {author.role}
              </div>
            </div>
          ))}
        </div>

        <div className="text-xs font-mono text-[#64748B] dark:text-[#94A3B8] flex flex-wrap gap-x-3 gap-y-1">
          <span>Authors: {H12_META.authors}</span>
          <span aria-hidden="true">·</span>
          <span>{H12_META.date}</span>
          <span aria-hidden="true">·</span>
          <span>Predecessor Preserved: {H12_META.predecessor}</span>
        </div>

        <div className="pt-4 border-t border-[#EAE2D2] dark:border-[#1E293B] flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleDownloadPdf}
            disabled={pdfBusy}
            className="px-3.5 py-2 rounded-lg text-xs font-medium bg-[#0C1836] dark:bg-[#EA580C] text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
          >
            {pdfBusy ? 'Generating Main A4 PDF…' : 'Download Main Monograph PDF (.pdf)'}
          </button>
          <button
            onClick={handleDownloadSupplementaryPdf}
            disabled={suppPdfBusy}
            className="px-3.5 py-2 rounded-lg text-xs font-medium bg-[#1E40AF] text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
          >
            {suppPdfBusy ? 'Generating Vol. II PDF…' : 'Download Supplementary Vol. II (A–K PDF)'}
          </button>
          <button
            onClick={handleDownloadLatexZip}
            disabled={zipBusy}
            className="px-3.5 py-2 rounded-lg text-xs font-medium bg-[#15803D] text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
          >
            {zipBusy ? 'Packaging LaTeX ZIP…' : 'Download LaTeX Bundle (.zip)'}
          </button>
          <button
            onClick={() =>
              triggerDownload(
                new Blob([buildH12StandaloneLatex()], { type: 'application/x-tex;charset=utf-8' }),
                'IGRT_H12_Monograph.tex'
              )
            }
            className="px-3 py-2 rounded-lg text-xs font-medium border border-[#CBD5E1] dark:border-[#334155] hover:bg-[#F4EFE6] dark:hover:bg-[#173065] transition-colors"
          >
            Download Standalone (.tex)
          </button>
          <button
            onClick={() =>
              triggerDownload(
                new Blob([buildH12SelfContainedHtml()], { type: 'text/html;charset=utf-8' }),
                'IGRT_H12_Monograph.html'
              )
            }
            className="px-3 py-2 rounded-lg text-xs font-medium border border-[#CBD5E1] dark:border-[#334155] hover:bg-[#F4EFE6] dark:hover:bg-[#173065] transition-colors"
          >
            Download HTML (.html)
          </button>
          <button
            onClick={() =>
              triggerDownload(
                new Blob([buildH12FullMarkdown()], { type: 'text/markdown;charset=utf-8' }),
                'IGRT_H12_Monograph.md'
              )
            }
            className="px-3 py-2 rounded-lg text-xs font-medium border border-[#CBD5E1] dark:border-[#334155] hover:bg-[#F4EFE6] dark:hover:bg-[#173065] transition-colors"
          >
            Download Markdown (.md)
          </button>
          <button
            onClick={() =>
              triggerDownload(
                new Blob([verifyH12ScriptSource], { type: 'application/javascript;charset=utf-8' }),
                'verify-igrt-h12.mjs'
              )
            }
            className="px-3 py-2 rounded-lg text-xs font-medium border border-[#15803D]/50 text-[#15803D] dark:text-[#86EFAC] hover:bg-[#F0FDF4] dark:hover:bg-[#052E16] transition-colors"
          >
            Download Solver (.mjs)
          </button>
          <button
            onClick={() =>
              triggerDownload(
                new Blob([stressH12ScriptSource], { type: 'application/javascript;charset=utf-8' }),
                'stress-test-h12.mjs'
              )
            }
            className="px-3 py-2 rounded-lg text-xs font-medium border border-[#1E40AF]/50 text-[#1E40AF] dark:text-[#93C5FD] hover:bg-[#EFF6FF] dark:hover:bg-[#172554] transition-colors"
          >
            Download Stress-Test (.mjs)
          </button>
          {pdfError && (
            <span className="text-xs text-[#9F1239] dark:text-[#FDA4AF] font-mono">
              {pdfError}
            </span>
          )}
        </div>

        <div className="pt-3 flex flex-wrap items-center gap-2 text-xs">
          <span className="font-mono text-[#64748B] dark:text-[#94A3B8] mr-1">Filter Subsections:</span>
          {(
            [
              'ALL',
              'CATEGORY A — ESTABLISHED',
              'CATEGORY B — DERIVED',
              'CATEGORY C — CONJECTURAL',
              'CATEGORY D — SPECULATIVE ENGINEERING'
            ] as const
          ).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-2.5 py-1 rounded-md font-mono text-[11px] border transition-colors ${
                categoryFilter === cat
                  ? 'bg-[#0C1836] dark:bg-[#EA580C] text-white border-transparent'
                  : 'bg-[#FDFBF7] dark:bg-[#081026] text-[#475569] dark:text-[#CBD5E1] border-[#EAE2D2] dark:border-[#1E293B]'
              }`}
            >
              {cat === 'ALL' ? 'All Categories (A–D)' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <aside className="lg:col-span-3 lg:sticky lg:top-28 rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-4 space-y-3 text-xs max-h-[82vh] overflow-y-auto">
          <div className="font-mono uppercase tracking-wider text-[11px] text-[#9A3412] dark:text-[#FDBA74] font-semibold">
            IGRT-H12 Contents
          </div>
          <nav className="space-y-1">
            <button onClick={() => scrollToAnchor('h12-abstract')} className="block w-full text-left px-2 py-1 rounded hover:bg-[#F4EFE6] dark:hover:bg-[#173065]">
              Abstract &amp; Non-Specialist Summary
            </button>
            <button onClick={() => scrollToAnchor('h12-lists')} className="block w-full text-left px-2 py-1 rounded hover:bg-[#F4EFE6] dark:hover:bg-[#173065]">
              Front-Matter Lists (Figures, Tables, Eqs, Theorems, Defs)
            </button>
            <button onClick={() => scrollToAnchor('h12-frontmatter')} className="block w-full text-left px-2 py-1 rounded hover:bg-[#F4EFE6] dark:hover:bg-[#173065]">
              Foundational 5D Equations &amp; Scope
            </button>
            {H12_CHAPTERS.map((ch) => (
              <button
                key={ch.anchorId}
                onClick={() => scrollToAnchor(ch.anchorId)}
                className="block w-full text-left px-2 py-1 rounded hover:bg-[#F4EFE6] dark:hover:bg-[#173065] text-[#334155] dark:text-[#CBD5E1]"
              >
                <span className="font-mono text-[#EA580C] mr-1">Ch.{ch.number}</span>
                {ch.title}
              </button>
            ))}
            <button onClick={() => scrollToAnchor('h12-appendices-lmn')} className="block w-full text-left px-2 py-1 rounded hover:bg-[#F4EFE6] dark:hover:bg-[#173065] font-medium text-[#9A3412] dark:text-[#FDBA74]">
              Appendices L, M &amp; N + References
            </button>
            <button onClick={() => scrollToAnchor('h12-supplementary-vol2')} className="block w-full text-left px-2 py-1 rounded hover:bg-[#F4EFE6] dark:hover:bg-[#173065] font-medium text-[#1E40AF] dark:text-[#93C5FD]">
              Supplementary Vol. II: Tech. Appendices A–K
            </button>
          </nav>
        </aside>

        <div className="lg:col-span-9 space-y-10">
          {/* Pure Abstract + Non-Specialist Summary */}
          <section
            id="h12-abstract"
            className="rounded-2xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-7 sm:p-11 space-y-6 shadow-xs"
          >
            <h2
              className="igrt-h12-chapter-title border-b border-[#D6CABE] dark:border-[#1E293B] pb-5 text-[#0C1836] dark:text-white mb-10"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: '40px' }}
            >
              Abstract
            </h2>
            <div className="space-y-5 text-[16px] leading-[1.5] text-[#1E293B] dark:text-[#E2E8F0]">
              {H12_ABSTRACT_PARAGRAPHS.map((p, idx) => (
                <p key={idx} className="text-[16px] leading-[1.5] text-justify [hyphens:auto]">
                  <MathText text={p} />
                </p>
              ))}
            </div>
            <div className="rounded-xl border border-[#1E40AF]/30 bg-[#EFF6FF] dark:bg-[#0A193A] p-5 text-[15px] leading-[1.55] text-[#0C1836] dark:text-[#DBEAFE] text-justify [hyphens:auto]">
              <MathText text={H12_NON_SPECIALIST_SUMMARY} />
            </div>
            <div className="pt-4 border-t border-[#EAE2D2] dark:border-[#1E293B] text-[13.5px] text-[#475569] dark:text-[#94A3B8]">
              <strong className="font-medium text-[#0C1836] dark:text-[#FDFBF7]">Keywords:</strong>{' '}
              <MathText text={H12_META.keywords.join(' · ')} />
            </div>
          </section>

          {/* Five Front-Matter Reference Lists */}
          <section
            id="h12-lists"
            className="rounded-2xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-7 sm:p-11 space-y-7 shadow-xs"
          >
            <h2
              className="igrt-h12-chapter-title border-b border-[#D6CABE] dark:border-[#1E293B] pb-5 text-[#0C1836] dark:text-white mb-10"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: '40px' }}
            >
              Lists of Figures, Tables, Equations, Theorems &amp; Definitions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="rounded-xl border border-[#EAE2D2] dark:border-[#334155] p-5 space-y-2.5 bg-[#FAF8F3] dark:bg-[#081026]">
                <h3 className="text-[18px] text-[#0C1836] dark:text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
                  List of Figures &amp; Plates
                </h3>
                <ul className="space-y-1.5 list-disc pl-4 text-[#334155] dark:text-[#CBD5E1]">
                  {H12_ARCHIVAL_PLATES.map((pl) => (
                    <li key={pl.id}><strong>{pl.figureNumber}</strong> (Ch.{pl.anchorChapter}): {pl.title} [{pl.category}]</li>
                  ))}
                  {H12_FIGURES.map((fg) => (
                    <li key={fg.id}><strong>{fg.figureNumber}</strong> (Ch.{fg.anchorChapter}): <MathText text={fg.title} /> [{fg.category}]</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-[#EAE2D2] dark:border-[#334155] p-5 space-y-2.5 bg-[#FAF8F3] dark:bg-[#081026]">
                <h3 className="text-[18px] text-[#0C1836] dark:text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
                  List of Tables
                </h3>
                <ul className="space-y-1.5 list-disc pl-4 text-[#334155] dark:text-[#CBD5E1]">
                  {H12_FRONTMATTER_TABLES_LIST.map((tb) => (
                    <li key={tb.id}><strong>{tb.id}</strong> ({tb.location}): <MathText text={tb.title} /></li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-[#EAE2D2] dark:border-[#334155] p-5 space-y-2.5 bg-[#FAF8F3] dark:bg-[#081026]">
                <h3 className="text-[18px] text-[#0C1836] dark:text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
                  List of Principal Equations
                </h3>
                <ul className="space-y-1.5 list-disc pl-4 text-[#334155] dark:text-[#CBD5E1]">
                  {H12_FRONTMATTER_EQUATIONS_LIST.map((eq) => (
                    <li key={eq.label}><strong>{eq.label}</strong> ({eq.location}, {eq.category}): <MathText text={eq.title} /></li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-[#EAE2D2] dark:border-[#334155] p-5 space-y-2.5 bg-[#FAF8F3] dark:bg-[#081026]">
                <h3 className="text-[18px] text-[#0C1836] dark:text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
                  List of Theorems &amp; Definitions
                </h3>
                <ul className="space-y-1.5 list-disc pl-4 text-[#334155] dark:text-[#CBD5E1]">
                  {H12_THEOREMS_LIST.map((th) => (
                    <li key={th.id}><strong>{th.id}</strong> ({th.location}, {th.category}): <MathText text={th.title} /></li>
                  ))}
                  {H12_DEFINITIONS_LIST.map((df) => (
                    <li key={df.id}><strong>{df.id} ({df.term}):</strong> <MathText text={df.formalDefinition} /></li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Foundational 5D Equations & Epistemic Boundaries */}
          <section
            id="h12-frontmatter"
            className="rounded-2xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-7 sm:p-11 space-y-7 shadow-xs"
          >
            <h2
              className="igrt-h12-chapter-title border-b border-[#D6CABE] dark:border-[#1E293B] pb-5 text-[#0C1836] dark:text-white mb-10"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: '40px' }}
            >
              Foundational Five-Dimensional Equations (Category C) &amp; Epistemic Boundaries
            </h2>
            {H12_MASTER_EQUATIONS.map((eq) => (
              <H12EquationBox key={eq.label} eq={eq} />
            ))}
            <div className="rounded-xl border border-[#D97706]/35 bg-[#FFFBEB] dark:bg-[#291704] p-6 space-y-3">
              <h3
                className="text-[20px] font-normal text-[#92400E] dark:text-[#FDE68A]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
              >
                {H12_SCOPE_AND_NON_CLAIMS.title}
              </h3>
              <ul className="space-y-2.5 text-[15px] leading-[1.65] text-[#451A03] dark:text-[#FEF3C7] list-disc pl-5 text-justify">
                {H12_SCOPE_AND_NON_CLAIMS.points.map((pt, i) => (
                  <li key={i}>
                    <MathText text={pt} />
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 13 Chapters */}
          {H12_CHAPTERS.map((ch) => {
            const visibleSubs =
              categoryFilter === 'ALL'
                ? ch.subsections
                : ch.subsections.filter((s) => s.category === categoryFilter);
            const chapterFigs = H12_FIGURES.filter((f) => f.anchorChapter === ch.number);
            const chapterPlates = H12_ARCHIVAL_PLATES.filter((p) => p.anchorChapter === ch.number);

            return (
              <article
                key={ch.anchorId}
                id={ch.anchorId}
                className="rounded-2xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-7 sm:p-11 space-y-8 shadow-xs"
              >
                <div className="border-b border-[#D6CABE] dark:border-[#1E293B] pb-8 mb-4">
                  <div className="font-mono text-xs uppercase tracking-[0.18em] text-[#9A3412] dark:text-[#FDBA74] mb-3">
                    {ch.runningLabel}
                  </div>
                  <h2
                    className="igrt-h12-chapter-title font-normal text-[40px] leading-[1.18] text-[#081026] dark:text-white mb-11"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: '40px' }}
                  >
                    Chapter {ch.number}. {ch.title}
                  </h2>
                  <p className="text-[16px] italic text-[#475569] dark:text-[#94A3B8] leading-[1.5] text-justify [hyphens:auto]">
                    <MathText text={ch.leadSummary} />
                  </p>
                </div>

                {/* Chapter 2 Start: Timeline of 5D Physics */}
                {ch.number === 2 && (
                  <div className="rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] p-5 space-y-3">
                    <div className="font-mono text-xs font-semibold text-[#9A3412] dark:text-[#FDBA74] uppercase tracking-wide">
                      Timeline of Five-Dimensional Physics (1921–2026)
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      {TIMELINE_5D_PHYSICS.map((tm) => (
                        <div key={tm.year} className="rounded-lg bg-white dark:bg-[#0B1530] p-3 border border-[#EAE2D2] dark:border-[#1E293B]">
                          <div className="font-mono font-semibold text-[#0C1836] dark:text-[#FDBA74]">{tm.year} · {tm.milestone}</div>
                          <div className="text-[#475569] dark:text-[#CBD5E1] mt-1"><MathText text={tm.contributionToH12} /></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {visibleSubs.map((sub, subIdx) => (
                  <section key={sub.anchorId} id={sub.anchorId} className="space-y-5 pt-2">
                    <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-[#EAE2D2]/80 dark:border-[#1E293B] pb-2">
                      <h3
                        className="text-[22px] font-normal text-[#0C1836] dark:text-[#FDFBF7]"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
                      >
                        {sub.number} <MathText text={sub.title} />
                      </h3>
                      <span className="text-[11px] font-mono text-[#64748B] dark:text-[#94A3B8]">
                        {sub.category}
                      </span>
                    </div>

                    {sub.paragraphs.map((p, idx) => (
                      <p
                        key={idx}
                        className={`text-[16px] leading-[1.5] text-[#1E293B] dark:text-[#E2E8F0] text-justify [hyphens:auto] ${
                          (ch.number === 1 || ch.number === 13) && subIdx === 0 && idx === 0
                            ? "first-letter:text-5xl first-letter:font-['Playfair_Display'] first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-[#9A3412] dark:first-letter:text-[#FDBA74]"
                            : ''
                        }`}
                      >
                        <MathText text={p} />
                      </p>
                    ))}

                    {sub.equation && <H12EquationBox eq={sub.equation} />}

                    {sub.theoremBox && (
                      <div className="my-6 rounded-xl border border-[#15803D]/35 bg-[#F4FAF6] dark:bg-[#052E16]/45 p-6 space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#15803D]/20">
                          <span
                            className="text-[17px] font-normal text-[#166534] dark:text-[#86EFAC]"
                            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
                          >
                            {sub.theoremBox.number}: <MathText text={sub.theoremBox.title} />
                          </span>
                          <span className="text-[10.5px] font-mono text-[#166534] dark:text-[#86EFAC]">
                            {sub.theoremBox.category}
                          </span>
                        </div>
                        <ul className="text-[14px] leading-[1.65] text-[#14532D] dark:text-[#BBF7D0] list-disc pl-5 space-y-1.5 text-justify">
                          {sub.theoremBox.hypotheses.map((h, hi) => (
                            <li key={hi}>
                              <MathText text={h} />
                            </li>
                          ))}
                        </ul>
                        <p className="text-[15.5px] leading-[1.68] text-[#0F172A] dark:text-[#ECFDF5] pt-1 text-justify [hyphens:auto]">
                          <MathText text={sub.theoremBox.statement} />
                        </p>
                      </div>
                    )}

                    {sub.workedExample && (
                      <div className="my-5 rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] p-5 sm:p-6 space-y-3">
                        <div
                          className="text-[17px] text-[#0C1836] dark:text-[#FDBA74]"
                          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
                        >
                          <MathText text={sub.workedExample.title} />
                        </div>
                        <p className="text-[14px] text-[#475569] dark:text-[#CBD5E1] text-justify">
                          <MathText text={sub.workedExample.setup} />
                        </p>
                        <ol className="text-[14px] leading-[1.65] space-y-1.5 list-decimal pl-5 text-[#1E293B] dark:text-[#E2E8F0] text-justify tabular-nums">
                          {sub.workedExample.steps.map((st, si) => (
                            <li key={si}>
                              <MathText text={st} />
                            </li>
                          ))}
                        </ol>
                        <H12EquationBox eq={sub.workedExample.resultEquation} />
                        <p className="text-[14px] font-medium text-[#15803D] dark:text-[#86EFAC] text-justify">
                          Takeaway: <MathText text={sub.workedExample.takeaway} />
                        </p>
                      </div>
                    )}
                  </section>
                ))}

                {/* Chapter 1 Extras: Table 1.1, Table 1.2 (4D vs 5D), Glossary of 5D Terms, Summary for Physicists */}
                {ch.number === 1 && (
                  <div className="space-y-6">
                    <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                      <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2.5 font-mono text-xs font-semibold">
                        Table 1.1 · Audit of All 12 Core IGRT-H11 Components &amp; H12 Embedding Status
                      </div>
                      <table className="w-full text-xs text-left tabular-nums">
                        <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                          <tr>
                            <th className="p-2.5">Component</th>
                            <th className="p-2.5">H11 Value / Role</th>
                            <th className="p-2.5">H12 Status</th>
                            <th className="p-2.5">Category &amp; Modification</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {H11_TWELVE_COMPONENTS_AUDIT.map((row) => (
                            <tr key={row.component}>
                              <td className="p-2.5 font-medium">{row.component}</td>
                              <td className="p-2.5 font-mono text-[11px]"><MathText text={row.h11EquationOrValue} /></td>
                              <td className="p-2.5">{row.h12Status}</td>
                              <td className="p-2.5 space-y-1">
                                <div className="text-[10.5px] font-mono text-[#64748B] dark:text-[#94A3B8]">{row.category}</div>
                                <div><MathText text={row.h12Modification} /></div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                      <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2.5 font-mono text-xs font-semibold">
                        Table 1.2 · Direct Structural Comparison: 4D IGRT-H11 vs. 5D IGRT-H12
                      </div>
                      <table className="w-full text-xs text-left">
                        <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                          <tr>
                            <th className="p-2.5">Dimension</th>
                            <th className="p-2.5">4D IGRT-H11</th>
                            <th className="p-2.5">5D IGRT-H12</th>
                            <th className="p-2.5">Epistemic Delta</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {COMPARISON_4D_VS_5D_IGRT.map((c) => (
                            <tr key={c.dimension}>
                              <td className="p-2.5 font-medium">{c.dimension}</td>
                              <td className="p-2.5"><MathText text={c.h11FourD} /></td>
                              <td className="p-2.5"><MathText text={c.h12FiveD} /></td>
                              <td className="p-2.5 font-mono text-[11px]">{c.epistemicDelta}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] p-5 space-y-2.5">
                      <div className="font-mono text-xs font-semibold text-[#9A3412] dark:text-[#FDBA74] uppercase">
                        Glossary of Five-Dimensional Terms
                      </div>
                      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        {GLOSSARY_5D_TERMS.map((g) => (
                          <div key={g.term} className="bg-white dark:bg-[#0B1530] p-3 rounded-lg border border-[#EAE2D2] dark:border-[#1E293B]">
                            <dt className="font-semibold text-[#0C1836] dark:text-white">{g.term}</dt>
                            <dd className="text-[#475569] dark:text-[#CBD5E1] mt-1"><MathText text={g.definition} /></dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div className="rounded-xl border border-[#15803D]/35 bg-[#F4FAF6] dark:bg-[#052E16]/45 p-5 text-[15px] leading-[1.55] text-[#0F172A] dark:text-[#ECFDF5] text-justify [hyphens:auto]">
                      <MathText text={SUMMARY_FOR_PHYSICISTS} />
                    </div>
                  </div>
                )}

                {ch.number === 3 && (
                  <div className="overflow-x-auto rounded-xl border border-[#EAE2D2] dark:border-[#1E293B]">
                    <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2.5 font-mono text-xs font-semibold">
                      Table 3.1 · Taxonomy of Seven Distinct Temporal Notions in IGRT-H12
                    </div>
                    <table className="w-full text-xs text-left">
                      <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                        <tr>
                          <th className="p-2.5">Notion</th>
                          <th className="p-2.5">Symbol</th>
                          <th className="p-2.5">Definition</th>
                          <th className="p-2.5">Behavior Under Temporal Folding</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                        {SEVEN_TEMPORAL_NOTIONS.map((t) => (
                          <tr key={t.notion}>
                            <td className="p-2.5 font-medium">{t.notion}</td>
                            <td className="p-2.5 font-mono">{t.symbol}</td>
                            <td className="p-2.5"><MathText text={t.mathematicalDefinition} /></td>
                            <td className="p-2.5"><MathText text={t.foldsInH12} /></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {ch.number === 4 && (
                  <div className="space-y-6">
                    <div className="rounded-xl border border-[#EA580C]/40 bg-[#FFF7ED] dark:bg-[#1E140B] p-4 sm:p-5 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-mono text-xs font-semibold text-[#9A3412] dark:text-[#FDBA74]">
                          Interactive Beltrami Bulk Shortcut Explorer (Model 2B · α_t = α_x = 0.5)
                        </span>
                        <span className="text-[10.5px] font-mono text-[#9A3412] dark:text-[#FDBA74]">
                          CATEGORY C — CONJECTURAL
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <label className="text-xs font-mono shrink-0">
                          Brane Span k Δx = <strong>{kDxSlider.toFixed(1)}</strong>
                        </label>
                        <input
                          type="range"
                          min={1}
                          max={50}
                          step={1}
                          value={kDxSlider}
                          onChange={(e) => setKDxSlider(Number(e.target.value))}
                          className="w-full accent-[#EA580C]"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                        <div className="rounded-lg bg-white dark:bg-[#0B1530] p-3 border border-[#EAE2D2] dark:border-[#334155]">
                          Peak Bulk Excursion: <strong>{liveBeltrami.yPeak.toFixed(4)} / k</strong>
                        </div>
                        <div className="rounded-lg bg-white dark:bg-[#0B1530] p-3 border border-[#EAE2D2] dark:border-[#334155]">
                          Folding Ratio η_fold: <strong>{liveBeltrami.etaFold.toFixed(5)}</strong>
                        </div>
                        <div className="rounded-lg bg-white dark:bg-[#0B1530] p-3 border border-[#EAE2D2] dark:border-[#334155]">
                          Apparent c_eff / c: <strong>{liveBeltrami.cEffRatio.toFixed(4)}×</strong>
                        </div>
                      </div>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                      <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2.5 font-mono text-xs font-semibold">
                        Table 4.1 · Positive Conjectures Summary Table (Strictly Category C Mathematical Possibilities)
                      </div>
                      <table className="w-full text-xs text-left">
                        <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                          <tr>
                            <th className="p-2.5">Conjecture</th>
                            <th className="p-2.5">Conditional Mathematical Statement</th>
                            <th className="p-2.5">Target Protocol &amp; Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {POSITIVE_CONJECTURES_SUMMARY.map((p) => (
                            <tr key={p.conjecture}>
                              <td className="p-2.5 font-medium">{p.conjecture}</td>
                              <td className="p-2.5"><MathText text={p.statement} /></td>
                              <td className="p-2.5 space-y-1">
                                <div className="text-[10.5px] font-mono text-[#9A3412] dark:text-[#FDBA74]">{p.category}</div>
                                <div><MathText text={p.test} /></div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {ch.number === 5 && (
                  <div className="overflow-x-auto rounded-xl border border-[#EAE2D2] dark:border-[#1E293B]">
                    <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2.5 font-mono text-xs font-semibold">
                      Table 5.1 · Six-Class Black-Hole &amp; Portal Geometry Taxonomy (Classes A–F)
                    </div>
                    <table className="w-full text-xs text-left">
                      <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                        <tr>
                          <th className="p-2.5">Class</th>
                          <th className="p-2.5">Metric / NEC Status</th>
                          <th className="p-2.5">Portal Viability</th>
                          <th className="p-2.5">Stability &amp; Category</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                        {SIX_BLACK_HOLE_CLASSES.map((b) => (
                          <tr key={b.classId}>
                            <td className="p-2.5 font-medium">
                              <div>{b.classId}</div>
                              <div className="text-[11px] text-[#64748B]">{b.label}</div>
                            </td>
                            <td className="p-2.5 space-y-1">
                              <div className="font-mono text-[11px]">{b.metricSignatureAndForm}</div>
                              <div className="text-[#475569] dark:text-[#94A3B8]"><MathText text={b.necStatus} /></div>
                            </td>
                            <td className="p-2.5"><MathText text={b.portalViability} /></td>
                            <td className="p-2.5 space-y-1">
                              <div className="text-[10.5px] font-mono text-[#64748B] dark:text-[#94A3B8]">{b.category}</div>
                              <div><MathText text={b.stabilityAndConstraints} /></div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {(ch.number === 6 || ch.number === 9) && (
                  <div className="space-y-6">
                    {ch.number === 6 && (
                      <div className="rounded-xl border border-[#15803D]/35 bg-[#F4FAF6] dark:bg-[#052E16]/40 p-5 space-y-3 tabular-nums">
                        <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#15803D]/20">
                          <span className="font-mono text-xs font-semibold text-[#166534] dark:text-[#86EFAC]">
                            Interactive Morris–Thorne Wormhole vs. Casimir Deficit Calculator
                          </span>
                          <span className="text-[10.5px] font-mono text-[#166534] dark:text-[#86EFAC]">CATEGORY B — DERIVED</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                          <label className="text-xs font-mono shrink-0">
                            Throat Radius log₁₀(r₀ / 1 m) = <strong>{wormholeLogRadius.toFixed(1)}</strong> (r₀ = {liveWormhole.r0.toExponential(2)} m)
                          </label>
                          <input
                            type="range"
                            min={-35}
                            max={4}
                            step={0.5}
                            value={wormholeLogRadius}
                            onChange={(e) => setWormholeLogRadius(Number(e.target.value))}
                            className="w-full accent-[#15803D]"
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                          <div className="rounded-lg bg-white dark:bg-[#0B1530] p-3 border border-[#D6CABE] dark:border-[#334155]">
                            Throat NEC: <strong>{liveWormhole.necThroat.toExponential(3)} J/m³</strong>
                          </div>
                          <div className="rounded-lg bg-white dark:bg-[#0B1530] p-3 border border-[#D6CABE] dark:border-[#334155]">
                            Exotic Mass: <strong>{liveWormhole.exoticSolar.toExponential(3)} M_⊙</strong>
                          </div>
                          <div className="rounded-lg bg-white dark:bg-[#0B1530] p-3 border border-[#D6CABE] dark:border-[#334155]">
                            |ρ_Casimir / NEC|: <strong>{liveWormhole.ratio.toExponential(2)}</strong>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                      <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2.5 font-mono text-xs font-semibold">
                        Table {ch.number}.1 · {ch.number === 6 ? 'Negative Results Summary (Geodesics, Horizons & Wormholes)' : 'Consolidated Negative Results Summary Table (Category A/B Proofs)'}
                      </div>
                      <table className="w-full text-xs text-left">
                        <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                          <tr>
                            <th className="p-2.5">Negative Theorem</th>
                            <th className="p-2.5">Derived Proof Statement</th>
                            <th className="p-2.5">Physical Implication</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {NEGATIVE_RESULTS_SUMMARY.map((n) => (
                            <tr key={n.theorem}>
                              <td className="p-2.5 font-medium">
                                <div>{n.theorem}</div>
                                <div className="text-[10.5px] font-mono text-[#15803D] dark:text-[#86EFAC] mt-1">{n.category}</div>
                              </td>
                              <td className="p-2.5"><MathText text={n.statement} /></td>
                              <td className="p-2.5"><MathText text={n.implication} /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] p-5 space-y-2.5">
                      <div className="font-mono text-xs font-semibold text-[#15803D] dark:text-[#86EFAC] uppercase">
                        Glossary of Negative Theorems
                      </div>
                      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        {GLOSSARY_NEGATIVE_THEOREMS.map((g) => (
                          <div key={g.term} className="bg-white dark:bg-[#0B1530] p-3 rounded-lg border border-[#EAE2D2] dark:border-[#1E293B]">
                            <dt className="font-semibold text-[#0C1836] dark:text-white">{g.term}</dt>
                            <dd className="text-[#475569] dark:text-[#CBD5E1] mt-1"><MathText text={g.definition} /></dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                )}

                {ch.number === 10 && (
                  <div className="space-y-6">
                    <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                      <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2.5 font-mono text-xs font-semibold">
                        Table 10.1 · What Is Unique to 5D vs. Already Resolved in 4D IGRT-H11
                      </div>
                      <table className="w-full text-xs text-left">
                        <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                          <tr>
                            <th className="p-2.5">Observable / Mechanism</th>
                            <th className="p-2.5">Status in 4D IGRT-H11</th>
                            <th className="p-2.5">Unique to 5D IGRT-H12</th>
                            <th className="p-2.5">Empirical Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {WHAT_IS_UNIQUE_TO_5D.map((u) => (
                            <tr key={u.observable}>
                              <td className="p-2.5 font-medium">{u.observable}</td>
                              <td className="p-2.5"><MathText text={u.reproducedIn4DH11} /></td>
                              <td className="p-2.5"><MathText text={u.uniqueTo5DH12} /></td>
                              <td className="p-2.5 font-mono text-[11px]">{u.empiricalStatus}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                      <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2.5 font-mono text-xs font-semibold">
                        Table 10.2 · Observational Bounds Consistency Audit (Eöt-Wash, BBN, GW170817, Cassini, LHC, DE &amp; CMB)
                      </div>
                      <table className="w-full text-xs text-left">
                        <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                          <tr>
                            <th className="p-2.5">Probe</th>
                            <th className="p-2.5">Quantitative Bound</th>
                            <th className="p-2.5">H12 Status</th>
                            <th className="p-2.5">Derived vs. Assumed</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {FIVE_D_OBSERVATIONAL_BOUNDS.map((b) => (
                            <tr key={b.probe}>
                              <td className="p-2.5 font-medium">{b.probe}</td>
                              <td className="p-2.5 font-mono text-[11px]"><MathText text={b.bound} /></td>
                              <td className="p-2.5">{b.h12Status}</td>
                              <td className="p-2.5"><MathText text={b.derivationOrAssumption} /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {ch.number === 11 && (
                  <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                    <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2.5 font-mono text-xs font-semibold">
                      Table 11.1 · Exhaustive Ledger of Non-Derived Claims (Categories A, C &amp; D)
                    </div>
                    <table className="w-full text-xs text-left">
                      <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                        <tr>
                          <th className="p-2.5">Claim / Ansatz / Postulate</th>
                          <th className="p-2.5">Category</th>
                          <th className="p-2.5">Exact Reason Why Not Derived in H12</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                        {WHAT_IS_NOT_DERIVED_LEDGER.map((w) => (
                          <tr key={w.claim}>
                            <td className="p-2.5 font-medium"><MathText text={w.claim} /></td>
                            <td className="p-2.5 font-mono text-[10.5px]">{w.category}</td>
                            <td className="p-2.5"><MathText text={w.whyNotDerived} /></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {ch.number === 12 && (
                  <div className="space-y-6">
                    <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                      <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2.5 font-mono text-xs font-semibold">
                        Table 12.1 · Dedicated IGRT-H12 Empirical &amp; Conceptual Protocols (P7–P12)
                      </div>
                      <table className="w-full text-xs text-left tabular-nums">
                        <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                          <tr>
                            <th className="p-2.5">Protocol</th>
                            <th className="p-2.5">Relation to H11 &amp; Scope</th>
                            <th className="p-2.5">Quantitative Sensitivity</th>
                            <th className="p-2.5">Falsification Criterion</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {H12_ALL_PROTOCOLS.map((p) => (
                            <tr key={p.id}>
                              <td className="p-2.5 font-medium">
                                <div>{p.id} · {p.name}</div>
                                <div className="mt-1 text-[10.5px] font-mono text-[#64748B] dark:text-[#94A3B8]">{p.category} ({p.timeline})</div>
                              </td>
                              <td className="p-2.5"><MathText text={p.relationToH11} /></td>
                              <td className="p-2.5 font-mono text-[11px]"><MathText text={p.numericalSensitivity} /></td>
                              <td className="p-2.5"><MathText text={p.falsificationCriterion} /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                        <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2 font-mono font-semibold">Table 12.2 · P7–P10 Experimental Timeline</div>
                        <table className="w-full text-left">
                          <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                            {P7_TO_P10_TIMELINE_TABLE.map((t) => (
                              <tr key={t.protocol}>
                                <td className="p-2 font-medium">{t.protocol}</td>
                                <td className="p-2">{t.requiredSensitivity}</td>
                                <td className="p-2 font-mono">{t.expectedYear}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                        <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2 font-mono font-semibold">Table 12.6 · H11 (P1–P6) vs. H12 (P7–P12)</div>
                        <table className="w-full text-left">
                          <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                            {H11_VS_H12_PROTOCOLS_COMPARISON.map((r) => (
                              <tr key={r.aspect}>
                                <td className="p-2 font-medium">{r.aspect}</td>
                                <td className="p-2">{r.h11Protocols}</td>
                                <td className="p-2">{r.h12Protocols}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                        <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2 font-mono font-semibold">Table 12.3 · Falsification Thresholds</div>
                        <table className="w-full text-left">
                          <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                            {P7_TO_P10_FALSIFICATION_TABLE.map((r) => (
                              <tr key={r.protocol}>
                                <td className="p-2 font-mono font-semibold">{r.protocol}</td>
                                <td className="p-2 font-mono text-[11px]">{r.nullBound}</td>
                                <td className="p-2"><MathText text={r.whatItRulesOut} /></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                        <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2 font-mono font-semibold">Table 12.4 · Confirmation Thresholds</div>
                        <table className="w-full text-left">
                          <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                            {P7_TO_P10_CONFIRMATION_TABLE.map((r) => (
                              <tr key={r.protocol}>
                                <td className="p-2 font-mono font-semibold">{r.protocol}</td>
                                <td className="p-2"><MathText text={r.signalSignature} /></td>
                                <td className="p-2"><MathText text={r.requiredControl} /></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                      <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2 font-mono text-xs font-semibold">Table 12.5 · Empirical Decision Matrix</div>
                      <table className="w-full text-xs text-left">
                        <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                          <tr><th className="p-2.5">Experimental Outcome</th><th className="p-2.5">Posterior Scientific Status</th><th className="p-2.5">Mandatory Research Action</th></tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {P7_TO_P10_DECISION_MATRIX.map((d) => (
                            <tr key={d.outcome}><td className="p-2.5 font-medium">{d.outcome}</td><td className="p-2.5">{d.posteriorStatus}</td><td className="p-2.5"><MathText text={d.mandatoryAction} /></td></tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="rounded-xl border border-[#9F1239]/30 bg-[#FFF1F2] dark:bg-[#4C0519]/40 p-4 space-y-2">
                        <div className="font-mono font-semibold text-[#9F1239] dark:text-[#FDA4AF] uppercase">Falsification Checklist</div>
                        <ul className="list-disc pl-4 space-y-1.5 text-[#4C0519] dark:text-[#FFE4E6]">
                          {H12_FALSIFICATION_CHECKLIST.map((f, i) => <li key={i}><MathText text={f} /></li>)}
                        </ul>
                      </div>
                      <div className="rounded-xl border border-[#15803D]/30 bg-[#F4FAF6] dark:bg-[#052E16]/40 p-4 space-y-2">
                        <div className="font-mono font-semibold text-[#166534] dark:text-[#86EFAC] uppercase">What Would Prove H12 Right?</div>
                        <ul className="list-disc pl-4 space-y-1.5 text-[#14532D] dark:text-[#DCFCE7]">
                          {H12_CONFIRMATION_CHECKLIST.map((c, i) => <li key={i}><MathText text={c} /></li>)}
                        </ul>
                      </div>
                    </div>

                    <div className="rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] p-5 text-[15px] leading-[1.55] text-[#1E293B] dark:text-[#E2E8F0] text-justify [hyphens:auto]">
                      <MathText text={H12_FUNDING_AGENCY_SUMMARY} />
                    </div>
                  </div>
                )}

                {ch.number === 13 && (
                  <div className="space-y-6">
                    <div className="overflow-x-auto rounded-xl border border-[#EAE2D2] dark:border-[#1E293B]">
                      <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2.5 font-mono text-xs font-semibold">
                        Table 13.1 · Twelve Disciplined Research Extrapolations &amp; Open Obstacles
                      </div>
                      <table className="w-full text-xs text-left">
                        <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                          <tr>
                            <th className="p-2.5"># · Topic</th>
                            <th className="p-2.5">Proposed Extension</th>
                            <th className="p-2.5">Key Obstacle / Falsifier</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {TWELVE_EXTRAPOLATIONS.map((ex) => (
                            <tr key={ex.id}>
                              <td className="p-2.5 font-medium">
                                <div>{ex.id}. {ex.topic}</div>
                                <div className="mt-1 text-[10.5px] font-mono text-[#64748B] dark:text-[#94A3B8]">{ex.category}</div>
                              </td>
                              <td className="p-2.5"><MathText text={ex.extension} /></td>
                              <td className="p-2.5"><MathText text={ex.keyObstacleOrFalsifier} /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] p-5 space-y-3">
                      <h3 className="text-[20px] font-normal text-[#0C1836] dark:text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
                        List of Open Problems (OP-1 to OP-6)
                      </h3>
                      <ul className="space-y-2 text-xs text-[#334155] dark:text-[#CBD5E1] list-disc pl-5">
                        {H12_OPEN_PROBLEMS_LIST.map((op) => (
                          <li key={op.id}><strong>{op.id}: <MathText text={op.problem} /></strong> — <MathText text={op.statusNote} /></li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl border border-[#1E40AF]/30 bg-[#EFF6FF] dark:bg-[#0A193A] p-5 space-y-3">
                      <h3 className="text-[20px] font-normal text-[#0C1836] dark:text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
                        Response to Prior Audits (200-Expert Panel Critiques)
                      </h3>
                      <div className="space-y-2.5 text-xs">
                        {H12_PRIOR_AUDIT_RESPONSES.map((r) => (
                          <div key={r.auditScope} className="rounded-lg bg-white dark:bg-[#0B1530] p-3 border border-[#CBD5E1] dark:border-[#1E293B]">
                            <div className="font-semibold text-[#1E40AF] dark:text-[#93C5FD]">{r.auditScope}</div>
                            <div className="text-[#475569] dark:text-[#94A3B8] mt-1"><strong>Critique:</strong> <MathText text={r.panelCritique} /></div>
                            <div className="text-[#15803D] dark:text-[#86EFAC] mt-1"><strong>Harmonized Resolution:</strong> <MathText text={r.harmonizedResolution} /></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {chapterFigs.map((fig) => <H12FigureCard key={fig.id} fig={fig} />)}
                {chapterPlates.map((plate) => <H12PlateCard key={plate.id} plate={plate} />)}
              </article>
            );
          })}

          {/* Main Monograph Extended Appendices L, M, N + References */}
          <section
            id="h12-appendices-lmn"
            className="rounded-2xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-7 sm:p-11 space-y-8 shadow-xs"
          >
            <h2
              className="igrt-h12-chapter-title border-b border-[#D6CABE] dark:border-[#1E293B] pb-5 text-[#081026] dark:text-white mb-10"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: '40px' }}
            >
              Appendices L, M &amp; N and Bibliography
            </h2>

            {/* Appendix L */}
            <div id="h12-app-l" className="rounded-xl border border-[#D6CABE] dark:border-[#334155] p-6 space-y-4 bg-[#FAF8F3] dark:bg-[#081026]">
              <div className="flex flex-wrap items-baseline justify-between gap-2 pb-2 border-b border-[#EAE2D2] dark:border-[#1E293B]">
                <h3 className="text-[22px] font-normal text-[#0C1836] dark:text-[#FDFBF7]" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
                  Appendix L: {H12_MAIN_APPENDICES_LMN[0].title}
                </h3>
                <span className="text-[10.5px] font-mono text-[#64748B] dark:text-[#94A3B8]">{H12_MAIN_APPENDICES_LMN[0].category}</span>
              </div>
              <p className="text-[16px] italic text-[#475569] dark:text-[#94A3B8] leading-[1.5] text-justify"><MathText text={H12_MAIN_APPENDICES_LMN[0].leadSummary} /></p>
              {H12_MAIN_APPENDICES_LMN[0].paragraphs.map((p, i) => (
                <p key={i} className="text-[16px] leading-[1.5] text-[#1E293B] dark:text-[#E2E8F0] text-justify [hyphens:auto]"><MathText text={p} /></p>
              ))}
              <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530]">
                <div className="bg-[#F4EFE6] dark:bg-[#0F172A] px-4 py-2 font-mono text-xs font-semibold">
                  Table L.1 · Five-Tier Assessment of Eleven Candidate Portal &amp; Analog Mechanisms
                </div>
                <table className="w-full text-xs text-left tabular-nums">
                  <thead className="border-b border-[#EAE2D2] dark:border-[#1E293B]">
                    <tr><th className="p-2.5">Mechanism</th><th className="p-2.5">Feasibility Tier</th><th className="p-2.5">Quantitative Obstacle / Limit</th></tr>
                  </thead>
                  <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                    {ELEVEN_PORTAL_MECHANISMS.map((m) => (
                      <tr key={m.id}>
                        <td className="p-2.5 font-medium">{m.mechanism}</td>
                        <td className="p-2.5"><div>{m.tier}</div><div className="text-[10.5px] font-mono text-[#64748B]">{m.category}</div></td>
                        <td className="p-2.5"><MathText text={m.quantitativeObstacleOrLimit} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Appendix M */}
            <div id="h12-app-m" className="rounded-xl border border-[#D6CABE] dark:border-[#334155] p-6 space-y-4 bg-[#FAF8F3] dark:bg-[#081026]">
              <div className="flex flex-wrap items-baseline justify-between gap-2 pb-2 border-b border-[#EAE2D2] dark:border-[#1E293B]">
                <h3 className="text-[22px] font-normal text-[#0C1836] dark:text-[#FDFBF7]" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
                  Appendix M: {H12_MAIN_APPENDICES_LMN[1].title}
                </h3>
                <span className="text-[10.5px] font-mono text-[#64748B] dark:text-[#94A3B8]">{H12_MAIN_APPENDICES_LMN[1].category}</span>
              </div>
              <p className="text-[16px] italic text-[#475569] dark:text-[#94A3B8] leading-[1.5] text-justify"><MathText text={H12_MAIN_APPENDICES_LMN[1].leadSummary} /></p>
              {H12_MAIN_APPENDICES_LMN[1].paragraphs.map((p, i) => (
                <p key={i} className="text-[16px] leading-[1.5] text-[#1E293B] dark:text-[#E2E8F0] text-justify [hyphens:auto]"><MathText text={p} /></p>
              ))}
              <div className="grid grid-cols-1 gap-4">
                {SIX_PROPOSED_DEVICES.map((dev) => (
                  <div key={dev.deviceId} className="rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-white dark:bg-[#0B1530] p-5 space-y-2.5 text-xs">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 pb-2 border-b border-[#EAE2D2] dark:border-[#1E293B]">
                      <h4 className="text-[18px] text-[#0C1836] dark:text-[#FDFBF7]" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
                        {dev.deviceId}: {dev.name}
                      </h4>
                      <span className="text-[10.5px] font-mono text-[#64748B]">{dev.category}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-[#334155] dark:text-[#CBD5E1]">
                      <div><strong>1. Principle:</strong> <MathText text={dev.physicalPrinciple} /></div>
                      <div><strong>2. Governing Eqs:</strong> <span className="font-mono"><MathText text={dev.governingEquations} /></span></div>
                      <div><strong>3. Architecture:</strong> <MathText text={dev.architecture} /></div>
                      <div><strong>4. Operating Regime:</strong> <MathText text={dev.operatingRegime} /></div>
                      <div><strong>5. Predicted Signal:</strong> <MathText text={dev.predictedSignal} /></div>
                      <div><strong>6. Noise Floor:</strong> <MathText text={dev.noiseFloor} /></div>
                      <div><strong>7. Feasibility:</strong> {dev.engineeringFeasibility}</div>
                      <div><strong>8. Actually Tests:</strong> <MathText text={dev.whatItActuallyTests} /></div>
                      <div className="text-[#9F1239] dark:text-[#FDA4AF]"><strong>9. Explicitly Does NOT Do:</strong> <MathText text={dev.whatItDoesNotDo} /></div>
                      <div><strong>10. Failure Criteria:</strong> <MathText text={dev.failureCriteria} /></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Appendix N (Stress-Test Scorecard) */}
            <div id="h12-app-n" className="rounded-xl border border-[#D6CABE] dark:border-[#334155] p-6 space-y-5 bg-[#FAF8F3] dark:bg-[#081026]">
              <div className="flex flex-wrap items-baseline justify-between gap-2 pb-2 border-b border-[#EAE2D2] dark:border-[#1E293B]">
                <h3 className="text-[22px] font-normal text-[#0C1836] dark:text-[#FDFBF7]" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
                  Appendix N: {H12_MAIN_APPENDICES_LMN[2].title}
                </h3>
                <span className="text-[10.5px] font-mono text-[#15803D] dark:text-[#86EFAC]">{H12_MAIN_APPENDICES_LMN[2].category}</span>
              </div>
              <p className="text-[16px] leading-[1.5] text-[#475569] dark:text-[#94A3B8] text-justify [hyphens:auto]">
                <MathText text={H12_MAIN_APPENDICES_LMN[2].paragraphs[0]} />
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 tabular-nums">
                <div className="rounded-xl border border-[#15803D]/35 bg-[#F4FAF6] dark:bg-[#052E16]/50 p-4">
                  <div className="text-[11px] font-mono text-[#166534] dark:text-[#86EFAC] uppercase">Self-Contained Closure</div>
                  <div className="text-2xl font-normal text-[#0C1836] dark:text-white mt-1" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
                    {H12_STRESS_TEST_SUMMARY.grandSelfContainedPoints} / {H12_STRESS_TEST_SUMMARY.grandMaxPoints}
                  </div>
                  <div className="text-xs font-mono text-[#15803D] dark:text-[#4ADE80] mt-0.5">{H12_STRESS_TEST_SUMMARY.selfContainedScorePct}% Verified</div>
                </div>
                <div className="rounded-xl border border-[#1E40AF]/35 bg-[#F4F8FF] dark:bg-[#172554]/50 p-4">
                  <div className="text-[11px] font-mono text-[#1E40AF] dark:text-[#93C5FD] uppercase">Epistemic Applicable Score</div>
                  <div className="text-2xl font-normal text-[#0C1836] dark:text-white mt-1" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
                    {H12_STRESS_TEST_SUMMARY.grandApplicablePoints} / {H12_STRESS_TEST_SUMMARY.grandMaxPoints}
                  </div>
                  <div className="text-xs font-mono text-[#1E40AF] dark:text-[#93C5FD] mt-0.5">{H12_STRESS_TEST_SUMMARY.overallEpistemicScorePct}% (Cat. C/D Bounded)</div>
                </div>
                <div className="rounded-xl border border-[#EA580C]/35 bg-[#FFF9F2] dark:bg-[#431407]/40 p-4">
                  <div className="text-[11px] font-mono text-[#9A3412] dark:text-[#FDBA74] uppercase">500-Criterion Domains</div>
                  <div className="text-2xl font-normal text-[#0C1836] dark:text-white mt-1" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
                    {H12_STRESS_TEST_SUMMARY.domainSelfContainedPoints} / {H12_STRESS_TEST_SUMMARY.domainMaxPoints}
                  </div>
                  <div className="text-xs font-mono text-[#9A3412] dark:text-[#FDBA74] mt-0.5">100.0% Math &amp; Negative Theorems</div>
                </div>
                <div className="rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-white dark:bg-[#0B1530] p-4">
                  <div className="text-[11px] font-mono text-[#475569] dark:text-[#94A3B8] uppercase">16 Red-Team Attacks</div>
                  <div className="text-2xl font-normal text-[#0C1836] dark:text-white mt-1" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
                    {H12_STRESS_TEST_SUMMARY.attackSelfContainedPoints} / {H12_STRESS_TEST_SUMMARY.attackMaxPoints}
                  </div>
                  <div className="text-xs font-mono text-[#475569] dark:text-[#CBD5E1] mt-0.5">14 Survived · 2 Contained Frontiers</div>
                </div>
              </div>

              <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530]">
                <div className="bg-[#F4EFE6] dark:bg-[#0F172A] px-4 py-2 font-mono text-xs font-semibold">
                  Table N.1 · Ten-Domain 500-Criterion Breakdown
                </div>
                <table className="w-full text-xs text-left tabular-nums">
                  <thead className="border-b border-[#EAE2D2] dark:border-[#1E293B]">
                    <tr><th className="p-2.5">Domain (50 Criteria Each)</th><th className="p-2.5">Self-Contained</th><th className="p-2.5">Applicable</th><th className="p-2.5">Verdict &amp; Key Verification</th></tr>
                  </thead>
                  <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                    {H12_TEN_DOMAIN_AUDITS.map((d) => (
                      <tr key={d.domainNumber}>
                        <td className="p-2.5 font-medium"><div>{d.domainNumber}: {d.domainName}</div><div className="mt-1 text-[10.5px] font-mono text-[#64748B]">{d.category}</div></td>
                        <td className="p-2.5 font-mono text-[#15803D]">{d.selfContainedPoints}/{d.maxPoints}</td>
                        <td className="p-2.5 font-mono">{d.applicablePoints}/{d.maxPoints}</td>
                        <td className="p-2.5"><div className="font-semibold text-[11px]">{d.verdict}</div><div><MathText text={d.openFrontierNotes} /></div></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-[18px] font-normal" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
                    Table N.2 · Sixteen Direct Red-Team Attacks (H12-ATK-01 .. H12-ATK-16)
                  </h4>
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
                    {['ALL', 'Wave I: 5D Geometry & Causality', 'Wave II: Black Holes & Wormholes', 'Wave III: Quantum & Information', 'Wave IV: Engineering & Falsification'].map((w) => (
                      <button
                        key={w}
                        onClick={() => setAttackWaveFilter(w)}
                        className={`px-2.5 py-1 rounded border whitespace-nowrap shrink-0 ${
                          attackWaveFilter === w ? 'bg-[#0C1836] dark:bg-[#EA580C] text-white border-transparent' : 'bg-white dark:bg-[#0B1530] border-[#D6CABE] dark:border-[#334155]'
                        }`}
                      >
                        {w === 'ALL' ? 'All 16 Attacks' : w.split(':')[0]}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {H12_SIXTEEN_REDTEAM_ATTACKS.filter((a) => attackWaveFilter === 'ALL' || a.wave === attackWaveFilter).map((atk) => (
                    <div key={atk.id} className="rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-white dark:bg-[#0B1530] p-4 text-xs space-y-1.5">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-1 border-b border-[#EAE2D2] dark:border-[#1E293B]">
                        <span className="font-mono text-[#9A3412] dark:text-[#FDBA74]">{atk.id} · {atk.wave} · {atk.category}</span>
                        <span className="font-mono text-[#166534] dark:text-[#86EFAC] tabular-nums">{atk.pointsAwarded}/{atk.maxPoints} · {atk.technicalStatus}</span>
                      </div>
                      <div className="text-[15px] text-[#0C1836] dark:text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
                        <MathText text={atk.attackTitle} />
                      </div>
                      <p className="text-[13px] leading-[1.55] text-[#475569] dark:text-[#94A3B8] text-justify"><strong>Challenge:</strong> <MathText text={atk.adversarialChallenge} /></p>
                      <p className="text-[13px] leading-[1.55] text-[#1E293B] dark:text-[#E2E8F0] text-justify"><strong>H12 Resolution:</strong> <MathText text={atk.h12ResolutionAndCitation} /></p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#D6CABE] dark:border-[#1E293B] space-y-3">
              <h3 className="text-[24px] font-normal" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
                References
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-[14px] leading-[1.6] text-[#334155] dark:text-[#CBD5E1] text-justify">
                {H12_REFERENCES.map((r) => <li key={r.id}><MathText text={r.citation} /></li>)}
              </ol>
            </div>
          </section>

          {/* Supplementary Volume II: Technical Appendices A-K (Separate Companion Panel) */}
          <section
            id="h12-supplementary-vol2"
            className="rounded-2xl border-2 border-[#1E40AF]/40 bg-white dark:bg-[#0B1530] p-7 sm:p-11 space-y-8 shadow-xs"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D6CABE] dark:border-[#1E293B] pb-6">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.16em] text-[#1E40AF] dark:text-[#93C5FD] mb-2">
                  Supplementary Volume II · Detailed Mathematical Proofs &amp; Code Audits
                </div>
                <h2
                  className="igrt-h12-chapter-title text-[#081026] dark:text-white"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: '40px' }}
                >
                  Technical Appendices (A–K)
                </h2>
              </div>
              <button
                onClick={handleDownloadSupplementaryPdf}
                disabled={suppPdfBusy}
                className="px-4 py-2 rounded-lg text-xs font-medium bg-[#1E40AF] text-white hover:opacity-90 disabled:opacity-50"
              >
                {suppPdfBusy ? 'Generating Vol. II PDF…' : 'Download Supplementary Vol. II PDF (.pdf)'}
              </button>
            </div>

            {H12_APPENDICES.map((app) => (
              <div
                key={app.anchorId}
                id={app.anchorId}
                className="rounded-xl border border-[#D6CABE] dark:border-[#334155] p-6 space-y-4 bg-[#FAF8F3] dark:bg-[#081026]"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 pb-2 border-b border-[#EAE2D2] dark:border-[#1E293B]">
                  <h3 className="text-[20px] font-normal text-[#0C1836] dark:text-[#FDFBF7]" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
                    Appendix {app.letter}: {app.title}
                  </h3>
                  <span className="text-[10.5px] font-mono text-[#64748B] dark:text-[#94A3B8]">{app.category}</span>
                </div>
                <p className="text-[16px] italic text-[#475569] dark:text-[#94A3B8] leading-[1.5] text-justify [hyphens:auto]">
                  <MathText text={app.summary} />
                </p>
                {app.equations.map((eq) => <H12EquationBox key={eq.label} eq={eq} />)}
                {app.bodyParagraphs.map((p, idx) => (
                  <p key={idx} className="text-[16px] leading-[1.5] text-[#1E293B] dark:text-[#E2E8F0] text-justify [hyphens:auto]">
                    <MathText text={p} />
                  </p>
                ))}
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};
