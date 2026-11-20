/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Devoted Follow-Up Monograph View for IGRT-H12:
 * "Folding Time Across Hidden Dimensions: Fifth-Dimensional Resonant Geometry,
 *  Mathematical Portals, and the Limits of Spacetime Shortcuts"
 *
 * Architecture:
 * - Preserves IGRT-2026-H11 completely untouched
 * - Pure Playfair Display Regular (40px, non-bold) chapter titles + Book Antiqua 16px justified prose
 * - Includes Unified Abstract (Layman + Scholar), 5 Front-Matter Lists, Chapters 1–13 (with Ch. 13.5
 *   Seven Solved Physics Problems & 13.6 Comprehensive Conclusion), References, and strictly
 *   alphabetical Consolidated Appendices (A–L) featuring Claim–Evidence & Structural Scorecard (App. I),
 *   Proposed Devices A–K with Cutaway Plates & Vector Schematics (App. J), Physics Breakthroughs
 *   (App. K), and Speculative Portal Concepts (App. L).
 */

import React, { useMemo, useState } from 'react';
import {
  H12_META,
  H12_MASTER_EQUATIONS,
  H12_METRIC_SIGNATURE_BOX,
  H12_FOUNDATIONAL_EQUATIONS_NOTE,
  H12_ABSTRACT_PARAGRAPHS,
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
  FIVE_D_SIGNATURES_TEST_MATRIX,
  WHAT_IS_NOT_DERIVED_LEDGER,
  H12_ALL_PROTOCOLS,
  P7_TO_P13_TIMELINE_TABLE,
  P7_TO_P13_FALSIFICATION_TABLE,
  P7_TO_P13_CONFIRMATION_TABLE,
  P7_TO_P13_DECISION_MATRIX,
  H11_VS_H12_PROTOCOLS_COMPARISON,
  H12_FALSIFICATION_CHECKLIST,
  H12_CONFIRMATION_CHECKLIST,
  H12_FUNDING_AGENCY_SUMMARY,
  ELEVEN_PORTAL_MECHANISMS,
  H12_PROPOSED_DEVICES,
  SEVEN_SOLVED_PHYSICS_PROBLEMS,
  TWELVE_EXTRAPOLATIONS,
  H12_DEFINITIONS_LIST,
  H12_THEOREMS_LIST,
  H12_OPEN_PROBLEMS_LIST,
  H12_PRIOR_AUDIT_RESPONSES,
  EPISTEMIC_BC_GREY_AREA_RUBRIC,
  H11_665_ASSERTIONS_CATALOG,
  REGULATOR_SENSITIVITY_TABLE,
  MODEL2B_CONVERGENCE_AND_MICROCAUSALITY_TABLE,
  P7_TO_P13_NOISE_BUDGET_TABLE,
  P13_SYSTEMATIC_ERROR_BUDGET,
  P13_STATISTICAL_ERROR_BUDGET,
  P7_TO_P13_COMBINED_BOUNDS_TABLE,
  P7_TO_P13_SENSITIVITY_PROJECTION_TABLE,
  P13_SUMMARY_OF_BOUNDS_TABLE,
  H12_PROTOCOL_ANALYSIS_SECTIONS,
  H12_APPENDICES,
  H12_REFERENCES,
  APPENDIX_J_DEVICE_DOSSIERS,
  APPENDIX_J_SYNTHESIS_TABLE,
  type H12EpistemicCategory,
  type H12Equation
} from '../types/igrtH12Apparatus';
import {
  H12_CHAPTERS,
  H12_FRONTMATTER_TABLES_LIST,
  H12_FRONTMATTER_EQUATIONS_LIST,
  buildH12FullMarkdown
} from '../types/igrtH12Data';
import {
  H12_ARCHIVAL_PLATES,
  H12_FIGURES,
  H12_DEVICE_FIGURES,
  H12PlateCard,
  H12FigureCard
} from './IgrtH12Figures';
import { MathText } from './MathText';
import {
  buildH12SelfContainedHtml,
  buildH12StandaloneLatex,
  buildH12LatexBundleZipBlob
} from '../utils/generateIgrtH12Exports';
import { generateIgrtH12Pdf } from '../utils/generateIgrtH12Pdf';
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
  <div className="my-9 rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] p-6 sm:p-8">
    <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-3 border-b border-[#EAE2D2] dark:border-[#1E293B] text-[11px] font-mono">
      <span className="text-[#64748B] dark:text-[#94A3B8] tracking-wide">
        {eq.category}
      </span>
      <span className="text-[#8B4513] dark:text-[#FB923C] tabular-nums">{eq.label}</span>
    </div>
    <div
      className="text-center text-[#0F172A] dark:text-[#FDFBF7] py-3.5 overflow-x-auto text-[17px] leading-[1.75]"
      dangerouslySetInnerHTML={{ __html: eq.unicodeHtml }}
    />
    <div className="mt-3.5 pt-3.5 border-t border-[#EAE2D2] dark:border-[#1E293B] text-center text-[13.5px] leading-[1.65] italic text-[#475569] dark:text-[#94A3B8]">
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
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [beltramiBranch, setBeltramiBranch] = useState<'phenom' | 'em'>('phenom');
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

  const liveBeltrami = useMemo(() => {
    const dx = kDxSlider;
    const necStatus =
      beltramiBranch === 'em'
        ? 'Satisfied (+k² / 0)'
        : 'Violated (−k² / −1.5 k²)';
    if (beltramiBranch === 'em') {
      if (dx >= Math.PI) {
        return {
          withinHorizon: false,
          yPeak: Infinity,
          etaFold: 2 / Math.PI,
          cEffRatio: Math.PI / 2,
          necStatus
        };
      }
      const half = 0.5 * dx;
      const yPeak = -Math.log(Math.cos(half));
      const etaFold = Math.sin(half) / half;
      return {
        withinHorizon: true,
        yPeak,
        etaFold,
        cEffRatio: 1 / etaFold,
        necStatus
      };
    }
    const beta = 1.0;
    const alpha_t = 0.5;
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
    return { withinHorizon: true, yPeak, etaFold, cEffRatio: 1 / etaFold, necStatus };
  }, [kDxSlider, beltramiBranch]);

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
    const vFrac = 0.1;
    const v = vFrac * c;
    const gamma = 1 / Math.sqrt(1 - vFrac * vFrac);
    const bp0 = -1.0;
    const bodyL = 2.0;
    const tidalPerp = ((gamma * gamma * v * v * (1 - bp0)) / (2 * r0 * r0)) * bodyL;
    const tauTrav = (20 * r0) / (gamma * v);
    return { r0, necThroat, exoticSolar, ratio, tidalPerp, tauTrav };
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
            <span className="text-[#166534] dark:text-[#86EFAC]">102/102 Assertions Verified</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => scrollToAnchor('h12-app-i')}
              className="text-[#1E40AF] dark:text-[#93C5FD] hover:underline whitespace-nowrap shrink-0 tabular-nums"
            >
              Structural Score (App. I): {H12_STRESS_TEST_SUMMARY.grandSelfContainedPoints}/{H12_STRESS_TEST_SUMMARY.grandMaxPoints} ({H12_STRESS_TEST_SUMMARY.selfContainedScorePct}%)
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
            {pdfBusy ? 'Generating Complete A4 PDF…' : 'Download Complete Monograph PDF (Main + A–L .pdf)'}
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
              Abstract
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
            <button onClick={() => scrollToAnchor('h12-references')} className="block w-full text-left px-2 py-1 rounded hover:bg-[#F4EFE6] dark:hover:bg-[#173065] font-medium text-[#9A3412] dark:text-[#FDBA74]">
              References
            </button>
            <button onClick={() => scrollToAnchor('h12-appendices')} className="block w-full text-left px-2 py-1 rounded hover:bg-[#F4EFE6] dark:hover:bg-[#173065] font-medium text-[#1E40AF] dark:text-[#93C5FD]">
              Consolidated Appendices (A–L)
            </button>
            <div className="pl-2 space-y-0.5 border-l border-[#EAE2D2] dark:border-[#1E293B] ml-2">
              {H12_APPENDICES.map((app) => (
                <button
                  key={app.anchorId}
                  onClick={() => scrollToAnchor(app.anchorId)}
                  className="block w-full text-left px-2 py-0.5 rounded hover:bg-[#F4EFE6] dark:hover:bg-[#173065] text-[11px] text-[#475569] dark:text-[#94A3B8] truncate"
                >
                  <span className="font-mono text-[#1E40AF] dark:text-[#93C5FD] mr-1">App.{app.letter}</span>
                  {app.title}
                </button>
              ))}
            </div>
          </nav>
        </aside>

        <div className="lg:col-span-9 space-y-12">
          {/* Unified Layman & Scholar Abstract */}
          <section
            id="h12-abstract"
            className="scroll-mt-32 rounded-2xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-7 sm:p-11 space-y-7 shadow-xs"
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
            <div className="pt-4 border-t border-[#EAE2D2] dark:border-[#1E293B] text-[13.5px] text-[#475569] dark:text-[#94A3B8]">
              <strong className="font-medium text-[#0C1836] dark:text-[#FDFBF7]">Keywords:</strong>{' '}
              <MathText text={H12_META.keywords.join(' · ')} />
            </div>
          </section>

          {/* Five Front-Matter Reference Lists */}
          <section
            id="h12-lists"
            className="scroll-mt-32 rounded-2xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-7 sm:p-11 space-y-7 shadow-xs"
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
                    <li key={pl.id}><strong>{pl.figureNumber}</strong> (Ch.{pl.anchorChapter}): <MathText text={pl.title} /> [{pl.category}]</li>
                  ))}
                  {H12_FIGURES.map((fg) => (
                    <li key={fg.id}><strong>{fg.figureNumber}</strong> (Ch.{fg.anchorChapter}): <MathText text={fg.title} /> [{fg.category}]</li>
                  ))}
                  {H12_DEVICE_FIGURES.map((mfg) => (
                    <li key={mfg.id}><strong>{mfg.figureNumber}</strong> (Appendix J · {mfg.deviceId}): <MathText text={mfg.title} /> [{mfg.category}]</li>
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
            className="scroll-mt-32 rounded-2xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-7 sm:p-11 space-y-7 shadow-xs"
          >
            <h2
              className="igrt-h12-chapter-title border-b border-[#D6CABE] dark:border-[#1E293B] pb-5 text-[#0C1836] dark:text-white mb-10"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: '40px' }}
            >
              Foundational Five-Dimensional Equations (Category C) &amp; Epistemic Boundaries
            </h2>
            <div className="rounded-xl border border-[#9A3412]/35 bg-[#FFF7ED] dark:bg-[#2A1205] px-5 py-3.5 text-[15px] font-medium text-[#7C2D12] dark:text-[#FDBA74] text-justify [hyphens:auto]">
              <MathText text={H12_FOUNDATIONAL_EQUATIONS_NOTE} />
            </div>
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
                className="scroll-mt-32 rounded-2xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-7 sm:p-11 space-y-10 shadow-xs"
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

                {/* Chapter 1 Start: Metric Signature Box & Category B/C Boundary Rubric Box */}
                {ch.number === 1 && (
                  <div className="space-y-5">
                    <div className="rounded-xl border border-[#1E40AF]/35 bg-[#EFF6FF] dark:bg-[#0A193A] p-4 sm:p-5 text-[14.5px] leading-[1.6] text-[#1E3A8A] dark:text-[#BFDBFE] text-justify [hyphens:auto]">
                      <div className="font-mono text-[11px] uppercase tracking-[0.14em] font-semibold mb-1">
                        Metric Signature Box
                      </div>
                      <MathText text={H12_METRIC_SIGNATURE_BOX} />
                    </div>
                    <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                      <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2.5 font-mono text-xs font-semibold">
                        Table 1.3 · Category B/C Boundary Rubric Box (Resolving Epistemic Grey Areas)
                      </div>
                      <table className="w-full text-xs text-left border-collapse [&_th]:border [&_td]:border [&_th]:border-[#EAE2D2] [&_td]:border-[#EAE2D2] dark:[&_th]:border-[#1E293B] dark:[&_td]:border-[#1E293B]">
                        <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                          <tr>
                            <th className="p-2.5">Boundary Case</th>
                            <th className="p-2.5">Derived Core vs. Conjectural Premise</th>
                            <th className="p-2.5">Category &amp; Boundary Rule</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {EPISTEMIC_BC_GREY_AREA_RUBRIC.map((g) => (
                            <tr key={g.boundaryCase}>
                              <td className="p-2.5 font-medium"><MathText text={g.boundaryCase} /></td>
                              <td className="p-2.5 space-y-1">
                                <div><strong>Derived:</strong> <MathText text={g.derivedAspect} /></div>
                                <div className="text-[#475569] dark:text-[#94A3B8]"><strong>Conjectural:</strong> <MathText text={g.conjecturalAspect} /></div>
                              </td>
                              <td className="p-2.5 space-y-1">
                                <div className="font-mono text-[10.5px] text-[#9A3412] dark:text-[#FDBA74]">{g.assignedCategory}</div>
                                <div><MathText text={g.ruleApplied} /></div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Chapter 2 Start: Timeline of 5D Physics */}
                {ch.number === 2 && (
                  <div className="rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] p-5 space-y-3">
                    <div className="font-mono text-xs font-semibold text-[#9A3412] dark:text-[#FDBA74] uppercase tracking-wide">
                      Timeline of 5D Physics (1921–2026)
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
                  <section key={sub.anchorId} id={sub.anchorId} className="scroll-mt-32 space-y-6 pt-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-[#EAE2D2]/80 dark:border-[#1E293B] pb-3">
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
                        className={`text-[16px] leading-[1.55] text-[#1E293B] dark:text-[#E2E8F0] text-justify [hyphens:auto] ${
                          (ch.number === 1 || ch.number === 13) && subIdx === 0 && idx === 0
                            ? "first-letter:text-5xl first-letter:font-['Playfair_Display'] first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-[#9A3412] dark:first-letter:text-[#FDBA74]"
                            : ''
                        }`}
                      >
                        <MathText text={p} />
                      </p>
                    ))}

                    {sub.equation && <H12EquationBox eq={sub.equation} />}

                    {sub.bulletPoints && sub.bulletPoints.length > 0 && (
                      <ul className="text-[14.5px] leading-[1.68] text-[#1E293B] dark:text-[#E2E8F0] list-disc pl-6 space-y-2.5 text-justify">
                        {sub.bulletPoints.map((bp, bpi) => (
                          <li key={bpi}>
                            <strong>{bp.label}:</strong> <MathText text={bp.text} />
                          </li>
                        ))}
                      </ul>
                    )}

                    {sub.theoremBox && (
                      <div className="my-8 rounded-xl border border-[#15803D]/35 bg-[#F4FAF6] dark:bg-[#052E16]/45 p-6 sm:p-7 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-[#15803D]/20">
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
                        <ul className="text-[14px] leading-[1.68] text-[#14532D] dark:text-[#BBF7D0] list-disc pl-5 space-y-2 text-justify">
                          {sub.theoremBox.hypotheses.map((h, hi) => (
                            <li key={hi}>
                              <MathText text={h} />
                            </li>
                          ))}
                        </ul>
                        <p className="text-[15.5px] leading-[1.7] text-[#0F172A] dark:text-[#ECFDF5] pt-1 text-justify [hyphens:auto]">
                          <MathText text={sub.theoremBox.statement} />
                        </p>
                      </div>
                    )}

                    {sub.workedExample && (
                      <div className="my-7 rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] p-6 sm:p-7 space-y-4">
                        <div
                          className="text-[17px] text-[#0C1836] dark:text-[#FDBA74]"
                          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
                        >
                          <MathText text={sub.workedExample.title} />
                        </div>
                        <p className="text-[14px] leading-[1.6] text-[#475569] dark:text-[#CBD5E1] text-justify">
                          <MathText text={sub.workedExample.setup} />
                        </p>
                        <ol className="text-[14px] leading-[1.68] space-y-2 list-decimal pl-5 text-[#1E293B] dark:text-[#E2E8F0] text-justify tabular-nums">
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
                      <table className="w-full text-xs text-left tabular-nums border-collapse [&_th]:border [&_td]:border [&_th]:border-[#EAE2D2] [&_td]:border-[#EAE2D2] dark:[&_th]:border-[#1E293B] dark:[&_td]:border-[#1E293B]">
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
                              <td className="p-2.5 font-medium"><MathText text={row.component} /></td>
                              <td className="p-2.5 font-mono text-[11px]"><MathText text={row.h11EquationOrValue} /></td>
                              <td className="p-2.5"><MathText text={row.h12Status} /></td>
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
                      <table className="w-full text-xs text-left border-collapse [&_th]:border [&_td]:border [&_th]:border-[#EAE2D2] [&_td]:border-[#EAE2D2] dark:[&_th]:border-[#1E293B] dark:[&_td]:border-[#1E293B]">
                        <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                          <tr>
                            <th className="p-2.5">Dimension</th>
                            <th className="p-2.5">4D IGRT-H11</th>
                            <th className="p-2.5">5D IGRT-H12</th>
                            <th className="p-2.5">Epistemic Delta</th>
                            <th className="p-2.5">Testable Now?</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {COMPARISON_4D_VS_5D_IGRT.map((c) => (
                            <tr key={c.dimension}>
                              <td className="p-2.5 font-medium"><MathText text={c.dimension} /></td>
                              <td className="p-2.5"><MathText text={c.h11FourD} /></td>
                              <td className="p-2.5"><MathText text={c.h12FiveD} /></td>
                              <td className="p-2.5 font-mono text-[11px]"><MathText text={c.epistemicDelta} /></td>
                              <td className="p-2.5 font-mono text-[11px]">{c.testableNow}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] p-5 space-y-2.5">
                      <div className="font-mono text-xs font-semibold text-[#9A3412] dark:text-[#FDBA74] uppercase">
                        Glossary of 5D Terms
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

                {ch.number === 2 && (
                  <div className="space-y-6">
                    <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                      <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2.5 font-mono text-xs font-semibold">
                        Table 2.1 · Structured Catalog of All 665 Verified IGRT-H11 Assertions (SHA-256 Pinned)
                      </div>
                      <table className="w-full text-xs text-left tabular-nums">
                        <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                          <tr>
                            <th className="p-2.5">Verification Group</th>
                            <th className="p-2.5">Assertions</th>
                            <th className="p-2.5">Verified Physical &amp; Mathematical Scope</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {H11_665_ASSERTIONS_CATALOG.map((row) => (
                            <tr key={row.moduleGroup}>
                              <td className="p-2.5 font-medium">{row.moduleGroup}</td>
                              <td className="p-2.5 font-mono font-semibold">{row.assertionCount}</td>
                              <td className="p-2.5"><MathText text={row.verifiedPhysicalScope} /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                      <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2.5 font-mono text-xs font-semibold">
                        Table 2.2 · Eöt-Wash ±2 μm Error Propagation, Multi-Regulator Stability &amp; Clock Energy Sweep
                      </div>
                      <table className="w-full text-xs text-left tabular-nums">
                        <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                          <tr>
                            <th className="p-2.5">Regime / UV Regulator</th>
                            <th className="p-2.5">Scale / Ratio</th>
                            <th className="p-2.5">Computed Output</th>
                            <th className="p-2.5">Physical Significance</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {REGULATOR_SENSITIVITY_TABLE.map((row) => (
                            <tr key={row.regimeOrRegulator}>
                              <td className="p-2.5 font-medium"><MathText text={row.regimeOrRegulator} /></td>
                              <td className="p-2.5 font-mono text-[11px]"><MathText text={row.energyOrRadius} /></td>
                              <td className="p-2.5 font-mono text-[11px]"><MathText text={row.computedOutput} /></td>
                              <td className="p-2.5"><MathText text={row.physicalInterpretation} /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {ch.number === 3 && (
                  <div className="overflow-x-auto rounded-xl border border-[#EAE2D2] dark:border-[#1E293B]">
                    <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2.5 font-mono text-xs font-semibold">
                      Table 3.1 · Taxonomy of Seven Distinct Temporal Notions &amp; Standard Literature Correspondence
                    </div>
                    <table className="w-full text-xs text-left">
                      <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                        <tr>
                          <th className="p-2.5">Notion</th>
                          <th className="p-2.5">Symbol</th>
                          <th className="p-2.5">Definition</th>
                          <th className="p-2.5">Folding &amp; Literature Correspondence</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                        {SEVEN_TEMPORAL_NOTIONS.map((t) => (
                          <tr key={t.notion}>
                            <td className="p-2.5 font-medium">{t.notion}</td>
                            <td className="p-2.5 font-mono"><MathText text={t.symbol} /></td>
                            <td className="p-2.5"><MathText text={t.mathematicalDefinition} /></td>
                            <td className="p-2.5 space-y-1">
                              <div><MathText text={t.foldsInH12} /></div>
                              <div className="text-[11px] text-[#475569] dark:text-[#94A3B8]"><em>Literature:</em> <MathText text={t.literatureComparison} /></div>
                            </td>
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
                          Interactive Beltrami Bulk Shortcut Explorer (<MathText text={beltramiBranch === 'em' ? '5D Einstein–Maxwell · α_t = 1.0, α_x = 0.0' : 'Model 2B · α_t = α_x = 0.5'} />)
                        </span>
                        <span className="text-[10.5px] font-mono text-[#9A3412] dark:text-[#FDBA74]">
                          CATEGORY C — CONJECTURAL
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                        <button
                          onClick={() => {
                            setBeltramiBranch('phenom');
                            setKDxSlider(10);
                          }}
                          className={`px-2.5 py-1 rounded border transition-colors ${
                            beltramiBranch === 'phenom'
                              ? 'bg-[#9A3412] text-white border-transparent'
                              : 'bg-white dark:bg-[#0B1530] text-[#475569] dark:text-[#CBD5E1] border-[#D6CABE] dark:border-[#334155]'
                          }`}
                        >
                          Phenomenological (0.5, 0.5)
                        </button>
                        <button
                          onClick={() => {
                            setBeltramiBranch('em');
                            setKDxSlider(2.0);
                          }}
                          className={`px-2.5 py-1 rounded border transition-colors ${
                            beltramiBranch === 'em'
                              ? 'bg-[#9A3412] text-white border-transparent'
                              : 'bg-white dark:bg-[#0B1530] text-[#475569] dark:text-[#CBD5E1] border-[#D6CABE] dark:border-[#334155]'
                          }`}
                        >
                          Ghost-Free 5D Einstein–Maxwell (1.0, 0.0)
                        </button>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <label className="text-xs font-mono shrink-0">
                          Brane Span <MathText text="k Δx" /> = <strong>{kDxSlider.toFixed(1)}</strong>
                        </label>
                        <input
                          type="range"
                          min={beltramiBranch === 'em' ? 0.2 : 1}
                          max={beltramiBranch === 'em' ? 4.5 : 50}
                          step={beltramiBranch === 'em' ? 0.1 : 1}
                          value={kDxSlider}
                          onChange={(e) => setKDxSlider(Number(e.target.value))}
                          className="w-full accent-[#EA580C]"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
                        <div className="rounded-lg bg-white dark:bg-[#0B1530] p-3 border border-[#EAE2D2] dark:border-[#334155]">
                          Peak Bulk Excursion: <strong>{liveBeltrami.withinHorizon ? `${liveBeltrami.yPeak.toFixed(4)} / k` : '∞ (y → ∞ horizon)'}</strong>
                        </div>
                        <div className="rounded-lg bg-white dark:bg-[#0B1530] p-3 border border-[#EAE2D2] dark:border-[#334155]">
                          Folding Ratio <MathText text="η_fold" />: <strong>{liveBeltrami.withinHorizon ? liveBeltrami.etaFold.toFixed(5) : '2/π = 0.63662 ceiling'}</strong>
                        </div>
                        <div className="rounded-lg bg-white dark:bg-[#0B1530] p-3 border border-[#EAE2D2] dark:border-[#334155]">
                          Apparent <MathText text="c_eff / c" />: <strong>{liveBeltrami.withinHorizon ? `${liveBeltrami.cEffRatio.toFixed(4)}×` : 'π/2 = 1.5708× ceiling'}</strong>
                        </div>
                        <div className="rounded-lg bg-white dark:bg-[#0B1530] p-3 border border-[#EAE2D2] dark:border-[#334155]">
                          5D NEC Status: <strong className={beltramiBranch === 'em' ? 'text-[#166534] dark:text-[#86EFAC]' : 'text-[#9F1239] dark:text-[#FDA4AF]'}><MathText text={liveBeltrami.necStatus} /></strong>
                        </div>
                      </div>
                      {!liveBeltrami.withinHorizon && (
                        <div className="text-[11.5px] font-mono text-[#9F1239] dark:text-[#FDA4AF]">
                          <MathText text="Finite-Span Horizon Reached (k Δx ≥ π): without spatial warping α_x > 0, symmetric turning arches do not close past k Δx = π; η_fold is bounded below by 2/π = 0.63662." />
                        </div>
                      )}
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

                    <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                      <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2.5 font-mono text-xs font-semibold">
                        Table 4.2 · Model 2B Quadrature Convergence, Euler–Lagrange &amp; Node-by-Node <MathText text="ds_5² ≡ 0" /> Audit
                      </div>
                      <table className="w-full text-xs text-left tabular-nums">
                        <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                          <tr>
                            <th className="p-2.5">Span &amp; Resolution</th>
                            <th className="p-2.5">Peak Bulk Depth</th>
                            <th className="p-2.5">Folding &amp; Speed</th>
                            <th className="p-2.5">Convergence &amp; Null Residual</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {MODEL2B_CONVERGENCE_AND_MICROCAUSALITY_TABLE.map((row) => (
                            <tr key={row.benchmarkSpan}>
                              <td className="p-2.5 font-medium"><MathText text={row.benchmarkSpan} /></td>
                              <td className="p-2.5 font-mono text-[11px]"><MathText text={row.turningPeak} /></td>
                              <td className="p-2.5 font-mono text-[11px]"><MathText text={row.etaFoldAndSpeed} /></td>
                              <td className="p-2.5 font-mono text-[11px]"><MathText text={row.elAndNullResidual} /></td>
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
                              <div className="font-mono text-[11px]"><MathText text={b.metricSignatureAndForm} /></div>
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
                            Throat Radius <MathText text="log₁₀(r₀ / 1 m)" /> = <strong>{wormholeLogRadius.toFixed(1)}</strong> (<MathText text="r₀" /> = {liveWormhole.r0.toExponential(2)} m)
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs font-mono">
                          <div className="rounded-lg bg-white dark:bg-[#0B1530] p-3 border border-[#D6CABE] dark:border-[#334155]">
                            Throat NEC: <strong>{liveWormhole.necThroat.toExponential(3)} J/m³</strong>
                          </div>
                          <div className="rounded-lg bg-white dark:bg-[#0B1530] p-3 border border-[#D6CABE] dark:border-[#334155]">
                            Exotic Mass: <strong>{liveWormhole.exoticSolar.toExponential(3)} <MathText text="M_⊙" /></strong>
                          </div>
                          <div className="rounded-lg bg-white dark:bg-[#0B1530] p-3 border border-[#D6CABE] dark:border-[#334155]">
                            <MathText text="|ρ_Casimir / NEC|" />: <strong>{liveWormhole.ratio.toExponential(2)}</strong>
                          </div>
                          <div className="rounded-lg bg-white dark:bg-[#0B1530] p-3 border border-[#D6CABE] dark:border-[#334155]">
                            <MathText text="Δa_⊥ (0.1c, 2m)" />: <strong>{liveWormhole.tidalPerp.toExponential(3)} m/s²</strong>
                          </div>
                          <div className="rounded-lg bg-white dark:bg-[#0B1530] p-3 border border-[#D6CABE] dark:border-[#334155]">
                            <MathText text="τ_trav (20 r₀)" />: <strong>{liveWormhole.tauTrav.toExponential(3)} s</strong>
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
                                <div><MathText text={n.theorem} /></div>
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
                      <table className="w-full text-xs text-left border-collapse [&_th]:border [&_td]:border [&_th]:border-[#EAE2D2] [&_td]:border-[#EAE2D2] dark:[&_th]:border-[#1E293B] dark:[&_td]:border-[#1E293B]">
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
                              <td className="p-2.5 font-medium"><MathText text={u.observable} /></td>
                              <td className="p-2.5"><MathText text={u.reproducedIn4DH11} /></td>
                              <td className="p-2.5"><MathText text={u.uniqueTo5DH12} /></td>
                              <td className="p-2.5 font-mono text-[11px]"><MathText text={u.empiricalStatus} /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                      <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2.5 font-mono text-xs font-semibold">
                        Table 10.2 · Observational Bounds Consistency Audit (Eöt-Wash, BBN, GW170817, Cassini, LHC, DE &amp; CMB)
                      </div>
                      <table className="w-full text-xs text-left border-collapse [&_th]:border [&_td]:border [&_th]:border-[#EAE2D2] [&_td]:border-[#EAE2D2] dark:[&_th]:border-[#1E293B] dark:[&_td]:border-[#1E293B]">
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
                              <td className="p-2.5 font-medium"><MathText text={b.probe} /></td>
                              <td className="p-2.5 font-mono text-[11px]"><MathText text={b.bound} /></td>
                              <td className="p-2.5"><MathText text={b.h12Status} /></td>
                              <td className="p-2.5"><MathText text={b.derivationOrAssumption} /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                      <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2.5 font-mono text-xs font-semibold">
                        Table 10.3 · Five-Dimensional Signatures, Experimental Tests &amp; Current Observational Constraints
                      </div>
                      <table className="w-full text-xs text-left border-collapse [&_th]:border [&_td]:border [&_th]:border-[#EAE2D2] [&_td]:border-[#EAE2D2] dark:[&_th]:border-[#1E293B] dark:[&_td]:border-[#1E293B]">
                        <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                          <tr>
                            <th className="p-2.5">5D Signature</th>
                            <th className="p-2.5">Experiment That Tests It</th>
                            <th className="p-2.5">Current Observational Constraint</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {FIVE_D_SIGNATURES_TEST_MATRIX.map((sig) => (
                            <tr key={sig.signature}>
                              <td className="p-2.5 font-medium"><MathText text={sig.signature} /></td>
                              <td className="p-2.5"><MathText text={sig.experimentToTestIt} /></td>
                              <td className="p-2.5 font-mono text-[11px]"><MathText text={sig.currentConstraint} /></td>
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
                        Table 12.1 · Dedicated IGRT-H12 Empirical &amp; Conceptual Protocols (P7–P13)
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
                                <div><MathText text={`${p.id} · ${p.name}`} /></div>
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
                        <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2 font-mono font-semibold">Table 12.2 · P7–P13 Experimental Timeline</div>
                        <table className="w-full text-left">
                          <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                            <tr>
                              <th className="p-2">Protocol</th>
                              <th className="p-2">Current State</th>
                              <th className="p-2">Required Sensitivity</th>
                              <th className="p-2">Expected Year</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                            {P7_TO_P13_TIMELINE_TABLE.map((t) => (
                              <tr key={t.protocol}>
                                <td className="p-2 font-medium"><MathText text={t.protocol} /></td>
                                <td className="p-2"><MathText text={t.currentState} /></td>
                                <td className="p-2"><MathText text={t.requiredSensitivity} /></td>
                                <td className="p-2 font-mono">{t.expectedYear}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                        <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2 font-mono font-semibold">Table 12.6 · H11 (P1–P6) vs. H12 (P7–P13)</div>
                        <table className="w-full text-left">
                          <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                            <tr>
                              <th className="p-2">Aspect</th>
                              <th className="p-2">H11 (P1–P6)</th>
                              <th className="p-2">H12 (P7–P13)</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                            {H11_VS_H12_PROTOCOLS_COMPARISON.map((r) => (
                              <tr key={r.aspect}>
                                <td className="p-2 font-medium"><MathText text={r.aspect} /></td>
                                <td className="p-2"><MathText text={r.h11Protocols} /></td>
                                <td className="p-2"><MathText text={r.h12Protocols} /></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                        <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2 font-mono font-semibold">Table 12.3 · Falsification Thresholds (P7–P13)</div>
                        <table className="w-full text-left">
                          <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                            <tr>
                              <th className="p-2">Protocol</th>
                              <th className="p-2">Null Falsification Bound</th>
                              <th className="p-2">What It Rules Out</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                            {P7_TO_P13_FALSIFICATION_TABLE.map((r) => (
                              <tr key={r.protocol}>
                                <td className="p-2 font-mono font-semibold">{r.protocol}</td>
                                <td className="p-2 font-mono text-[11px]"><MathText text={r.nullBound} /></td>
                                <td className="p-2"><MathText text={r.whatItRulesOut} /></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                        <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2 font-mono font-semibold">Table 12.4 · Confirmation Thresholds (P7–P13)</div>
                        <table className="w-full text-left">
                          <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                            <tr>
                              <th className="p-2">Protocol</th>
                              <th className="p-2">Positive Signal Signature</th>
                              <th className="p-2">Required Systematic Control</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                            {P7_TO_P13_CONFIRMATION_TABLE.map((r) => (
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
                      <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2 font-mono text-xs font-semibold">Table 12.5 · Empirical Decision Matrix (P7–P13)</div>
                      <table className="w-full text-xs text-left">
                        <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                          <tr><th className="p-2.5">Experimental Outcome</th><th className="p-2.5">Posterior Scientific Status</th><th className="p-2.5">Mandatory Research Action</th></tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {P7_TO_P13_DECISION_MATRIX.map((d) => (
                            <tr key={d.outcome}><td className="p-2.5 font-medium"><MathText text={d.outcome} /></td><td className="p-2.5"><MathText text={d.posteriorStatus} /></td><td className="p-2.5"><MathText text={d.mandatoryAction} /></td></tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                      <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2 font-mono text-xs font-semibold">Table 12.7 · Quantitative Noise Budgets &amp; Systematic Mitigation (P7–P13)</div>
                      <table className="w-full text-xs text-left tabular-nums">
                        <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                          <tr>
                            <th className="p-2.5">Protocol</th>
                            <th className="p-2.5">Dominant Noise Sources</th>
                            <th className="p-2.5">Quantitative Floor</th>
                            <th className="p-2.5">Mitigation Architecture</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {P7_TO_P13_NOISE_BUDGET_TABLE.map((nb) => (
                            <tr key={nb.protocol}>
                              <td className="p-2.5 font-medium"><MathText text={nb.protocol} /></td>
                              <td className="p-2.5"><MathText text={nb.primaryNoiseSources} /></td>
                              <td className="p-2.5 font-mono text-[11px]"><MathText text={nb.quantitativeBudget} /></td>
                              <td className="p-2.5"><MathText text={nb.mitigationArchitecture} /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                      <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2.5 font-mono text-xs font-semibold">Table 12.8 · P13 Systematic Error Budget (GW170817 / GRB 170817A &amp; Multi-Event Calibration)</div>
                      <table className="w-full text-xs text-left tabular-nums">
                        <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                          <tr>
                            <th className="p-2.5">Systematic Source</th>
                            <th className="p-2.5">Magnitude / Uncertainty</th>
                            <th className="p-2.5">Impact on <MathText text="η_fold" /></th>
                            <th className="p-2.5">Mitigation Strategy</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {P13_SYSTEMATIC_ERROR_BUDGET.map((s) => (
                            <tr key={s.source}>
                              <td className="p-2.5 font-medium"><MathText text={s.source} /></td>
                              <td className="p-2.5 font-mono text-[11px]"><MathText text={s.magnitudeOrUncertainty} /></td>
                              <td className="p-2.5"><MathText text={s.impactOnEtaFold} /></td>
                              <td className="p-2.5"><MathText text={s.mitigationStrategy} /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                      <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2.5 font-mono text-xs font-semibold">Table 12.9 · P13 Statistical Error Budget (Quadrature 0.05 s ⊕ 0.10 s &amp; 3G Stacking)</div>
                      <table className="w-full text-xs text-left tabular-nums">
                        <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                          <tr>
                            <th className="p-2.5">Measurement Channel</th>
                            <th className="p-2.5">Timing Precision</th>
                            <th className="p-2.5">Propagated <MathText text="η_fold" /> Error</th>
                            <th className="p-2.5">Sample Scaling Note</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {P13_STATISTICAL_ERROR_BUDGET.map((st) => (
                            <tr key={st.channel}>
                              <td className="p-2.5 font-medium"><MathText text={st.channel} /></td>
                              <td className="p-2.5 font-mono text-[11px]"><MathText text={st.measurementPrecision} /></td>
                              <td className="p-2.5 font-mono text-[11px]"><MathText text={st.propagatedEtaFoldError} /></td>
                              <td className="p-2.5"><MathText text={st.sampleScalingNote} /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                      <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2.5 font-mono text-xs font-semibold">Table 12.10 · Combined Protocol Bounds (P7–P13 Orthogonal Joint Likelihood Closure)</div>
                      <table className="w-full text-xs text-left tabular-nums">
                        <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                          <tr>
                            <th className="p-2.5">Protocol Cluster</th>
                            <th className="p-2.5">Constrained Parameters</th>
                            <th className="p-2.5">Joint Likelihood Role</th>
                            <th className="p-2.5">Orthogonal Exclusion Power</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {P7_TO_P13_COMBINED_BOUNDS_TABLE.map((cb) => (
                            <tr key={cb.protocolPairOrCluster}>
                              <td className="p-2.5 font-medium"><MathText text={cb.protocolPairOrCluster} /></td>
                              <td className="p-2.5 font-mono text-[11px]"><MathText text={cb.constrainedParameters} /></td>
                              <td className="p-2.5 font-mono text-[11px]"><MathText text={cb.combinedJointLikelihoodRole} /></td>
                              <td className="p-2.5"><MathText text={cb.orthogonalExclusionPower} /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                        <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2 font-mono font-semibold">Table 12.11 · Protocol Sensitivity Projections (2026–2035+)</div>
                        <table className="w-full text-left tabular-nums">
                          <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                            <tr>
                              <th className="p-2">Protocol</th>
                              <th className="p-2">2026 Baseline</th>
                              <th className="p-2">2027–2032</th>
                              <th className="p-2">2035+ (3G)</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                            {P7_TO_P13_SENSITIVITY_PROJECTION_TABLE.map((pr) => (
                              <tr key={pr.protocol}>
                                <td className="p-2 font-medium"><MathText text={pr.protocol} /></td>
                                <td className="p-2 font-mono text-[11px]"><MathText text={pr.currentBaseline2026} /></td>
                                <td className="p-2 font-mono text-[11px]"><MathText text={pr.nearTerm2027_2032} /></td>
                                <td className="p-2 font-mono text-[11px]"><MathText text={pr.longTerm3G2035Plus} /></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B]">
                        <div className="bg-[#F4EFE6] dark:bg-[#081026] px-4 py-2 font-mono font-semibold">Table 12.12 · Summary of P13 Multi-Messenger Bounds</div>
                        <table className="w-full text-left tabular-nums">
                          <thead className="bg-[#FDFBF7] dark:bg-[#0F172A] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                            <tr>
                              <th className="p-2">Dataset / Regime</th>
                              <th className="p-2">Distance</th>
                              <th className="p-2">Arrival Bound</th>
                              <th className="p-2"><MathText text="η_fold" /> Limit</th>
                              <th className="p-2">Epistemic Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                            {P13_SUMMARY_OF_BOUNDS_TABLE.map((pb) => (
                              <tr key={pb.datasetOrRegime}>
                                <td className="p-2 font-medium"><MathText text={pb.datasetOrRegime} /></td>
                                <td className="p-2 font-mono text-[11px]"><MathText text={pb.baselineDistance} /></td>
                                <td className="p-2 font-mono text-[11px]"><MathText text={pb.arrivalBoundOrPrecision} /></td>
                                <td className="p-2 font-mono text-[11px]"><MathText text={pb.etaFoldLimit} /></td>
                                <td className="p-2"><MathText text={pb.epistemicNote} /></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] p-5 space-y-3 text-xs">
                      <div className="font-mono font-semibold text-[#0C1836] dark:text-[#FDFBF7] uppercase">
                        Protocol Systematics, Statistical Significance &amp; Bayesian Evidence Summary (P7–P13)
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {H12_PROTOCOL_ANALYSIS_SECTIONS.map((sec) => (
                          <div key={sec.title} className="rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-3.5 space-y-1">
                            <div className="font-semibold text-[#0C1836] dark:text-white"><MathText text={sec.title} /></div>
                            <p className="text-[12.5px] leading-relaxed text-[#334155] dark:text-[#CBD5E1]"><MathText text={sec.content} /></p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="rounded-xl border border-[#9F1239]/30 bg-[#FFF1F2] dark:bg-[#4C0519]/40 p-4 space-y-2">
                        <div className="font-mono font-semibold text-[#9F1239] dark:text-[#FDA4AF] uppercase">Falsification Checklist: What Would Prove H12 Wrong?</div>
                        <ul className="list-disc pl-4 space-y-1.5 text-[#4C0519] dark:text-[#FFE4E6]">
                          {H12_FALSIFICATION_CHECKLIST.map((f, i) => <li key={i}><MathText text={f} /></li>)}
                        </ul>
                      </div>
                      <div className="rounded-xl border border-[#15803D]/30 bg-[#F4FAF6] dark:bg-[#052E16]/40 p-4 space-y-2">
                        <div className="font-mono font-semibold text-[#166534] dark:text-[#86EFAC] uppercase">Confirmation Checklist: What Would Confirm H12?</div>
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
                                <div><MathText text={`${ex.id}. ${ex.topic}`} /></div>
                                <div className="mt-1 text-[10.5px] font-mono text-[#64748B] dark:text-[#94A3B8]">{ex.category}</div>
                              </td>
                              <td className="p-2.5"><MathText text={ex.extension} /></td>
                              <td className="p-2.5"><MathText text={ex.keyObstacleOrFalsifier} /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-[#15803D]/35 dark:border-[#1E293B]">
                      <div className="bg-[#F4FAF6] dark:bg-[#081026] px-4 py-2.5 font-mono text-xs font-semibold text-[#166534] dark:text-[#86EFAC]">
                        Table 13.2 · Seven Fundamental Problems in Physics Solved or Revolutionized by IGRT–H12
                      </div>
                      <table className="w-full text-xs text-left border-collapse [&_th]:border [&_td]:border [&_th]:border-[#EAE2D2] [&_td]:border-[#EAE2D2] dark:[&_th]:border-[#1E293B] dark:[&_td]:border-[#1E293B]">
                        <thead className="bg-[#FDFBF7] dark:bg-[#0F172A]">
                          <tr>
                            <th className="p-2.5">Open Physics Problem</th>
                            <th className="p-2.5">Governing H11 / H12 Equations</th>
                            <th className="p-2.5">Resolution, Quantitative Prediction &amp; Category</th>
                            <th className="p-2.5">Plain-Language Takeaway</th>
                          </tr>
                        </thead>
                        <tbody>
                          {SEVEN_SOLVED_PHYSICS_PROBLEMS.map((sp) => (
                            <tr key={sp.id}>
                              <td className="p-2.5 font-medium"><MathText text={sp.openProblem} /></td>
                              <td className="p-2.5 font-mono text-[11px] text-[#8F5B4A] dark:text-[#FDBA74]"><MathText text={sp.governingH11H12Equations} /></td>
                              <td className="p-2.5 space-y-1">
                                <div><MathText text={sp.coreResolutionAndPrediction} /></div>
                                <div className="text-[10.5px] font-mono text-[#64748B] dark:text-[#94A3B8]">{sp.category}</div>
                              </td>
                              <td className="p-2.5"><MathText text={sp.laymanTakeaway} /></td>
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
                        Response to Prior Methodological Audits
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

          {/* References */}
          <section
            id="h12-references"
            className="scroll-mt-32 rounded-2xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-7 sm:p-11 space-y-6 shadow-xs"
          >
            <h2
              className="igrt-h12-chapter-title border-b border-[#D6CABE] dark:border-[#1E293B] pb-5 text-[#081026] dark:text-white mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: '40px' }}
            >
              References
            </h2>
            <ol className="list-decimal pl-5 space-y-3 text-[14.5px] leading-[1.65] text-[#334155] dark:text-[#CBD5E1] text-justify">
              {H12_REFERENCES.map((r) => <li key={r.id}><MathText text={r.citation} /></li>)}
            </ol>
          </section>

          {/* Consolidated Appendices (Strictly Ordered A–L) */}
          <section
            id="h12-appendices"
            className="scroll-mt-32 rounded-2xl border-2 border-[#1E40AF]/40 bg-white dark:bg-[#0B1530] p-7 sm:p-11 space-y-10 shadow-xs"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D6CABE] dark:border-[#1E293B] pb-6">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.16em] text-[#1E40AF] dark:text-[#93C5FD] mb-2">
                  Strictly Ordered A–L · Mathematical Derivations, Devices A–K, Physics Breakthroughs &amp; Epistemic Ledger
                </div>
                <h2
                  className="igrt-h12-chapter-title text-[#081026] dark:text-white"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: '40px' }}
                >
                  Consolidated Appendices (A–L)
                </h2>
              </div>
              <button
                onClick={handleDownloadPdf}
                disabled={pdfBusy}
                className="px-4 py-2 rounded-lg text-xs font-medium bg-[#0C1836] dark:bg-[#EA580C] text-white hover:opacity-90 disabled:opacity-50"
              >
                {pdfBusy ? 'Generating Complete A4 PDF…' : 'Download Complete Monograph PDF (Main + A–L .pdf)'}
              </button>
            </div>

            {H12_APPENDICES.map((app) => (
              <div
                key={app.anchorId}
                id={app.anchorId}
                className="scroll-mt-32 rounded-xl border border-[#D6CABE] dark:border-[#334155] p-6 sm:p-8 space-y-6 bg-[#FAF8F3] dark:bg-[#081026]"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 pb-2 border-b border-[#EAE2D2] dark:border-[#1E293B]">
                  <h3 className="text-[22px] font-normal text-[#0C1836] dark:text-[#FDFBF7]" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
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

                {app.letter === 'I' && (
                  <div className="space-y-5">
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
                        Table I.1 · Ten-Domain 500-Criterion Breakdown
                      </div>
                      <table className="w-full text-xs text-left tabular-nums">
                        <thead className="border-b border-[#EAE2D2] dark:border-[#1E293B]">
                          <tr><th className="p-2.5">Domain (50 Criteria Each)</th><th className="p-2.5">Self-Contained</th><th className="p-2.5">Applicable</th><th className="p-2.5">Verdict &amp; Key Verification</th></tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {H12_TEN_DOMAIN_AUDITS.map((d) => (
                            <tr key={d.domainNumber}>
                              <td className="p-2.5 font-medium"><div><MathText text={`${d.domainNumber}: ${d.domainName}`} /></div><div className="mt-1 text-[10.5px] font-mono text-[#64748B]">{d.category}</div></td>
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
                          Table I.2 · Sixteen Direct Red-Team Attacks (H12-ATK-01 .. H12-ATK-16)
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
                )}

                {app.letter === 'J' && (
                  <div className="space-y-6">
                    <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530]">
                      <div className="bg-[#F4EFE6] dark:bg-[#0F172A] px-4 py-2 font-mono text-xs font-semibold">
                        Table J.1 · Devices A–K Master Ten-Field Technical Specifications
                      </div>
                      <table className="w-full text-xs text-left tabular-nums border-collapse [&_th]:border [&_td]:border [&_th]:border-[#EAE2D2] [&_td]:border-[#EAE2D2] dark:[&_th]:border-[#1E293B] dark:[&_td]:border-[#1E293B]">
                        <thead className="bg-[#FDFBF7] dark:bg-[#0F172A]">
                          <tr>
                            <th className="p-2.5">Device &amp; Category</th>
                            <th className="p-2.5">Principle &amp; Governing Eqs</th>
                            <th className="p-2.5">Predicted Signal &amp; Noise Floor</th>
                            <th className="p-2.5">Actually Tests vs. Explicit Non-Claim</th>
                          </tr>
                        </thead>
                        <tbody>
                          {H12_PROPOSED_DEVICES.map((d) => (
                            <tr key={d.deviceId}>
                              <td className="p-2.5 font-medium">
                                <div><MathText text={`${d.deviceId}: ${d.name}`} /></div>
                                <div className="mt-1 text-[10.5px] font-mono text-[#64748B]">{d.category}</div>
                              </td>
                              <td className="p-2.5 space-y-1">
                                <div><MathText text={d.physicalPrinciple} /></div>
                                <div className="font-mono text-[11px] text-[#8F5B4A] dark:text-[#FDBA74]"><MathText text={d.governingEquations} /></div>
                              </td>
                              <td className="p-2.5 space-y-1">
                                <div><MathText text={d.predictedSignal} /></div>
                                <div className="text-[11px] text-[#475569] dark:text-[#94A3B8]"><em>Floor:</em> <MathText text={d.noiseFloor} /></div>
                              </td>
                              <td className="p-2.5 space-y-1">
                                <div><strong>Tests:</strong> <MathText text={d.whatItActuallyTests} /></div>
                                <div className="text-[#9F1239] dark:text-[#FDA4AF]"><strong>Does NOT do:</strong> <MathText text={d.whatItDoesNotDo} /></div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="space-y-6">
                      {APPENDIX_J_DEVICE_DOSSIERS.map((dos) => {
                        const dev = H12_PROPOSED_DEVICES.find((d) => d.deviceId === dos.deviceId);
                        const mfig = H12_DEVICE_FIGURES.find((f) => f.id === dos.figureId);
                        return (
                          <div key={dos.deviceId} className="rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-white dark:bg-[#0B1530] p-6 space-y-5">
                            <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 border-b border-[#EAE2D2] dark:border-[#1E293B]">
                              <div>
                                <h4 className="text-[20px] text-[#0C1836] dark:text-[#FDFBF7]" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
                                  <MathText text={dos.title} />
                                </h4>
                                <p className="text-[14px] italic text-[#475569] dark:text-[#94A3B8] mt-1">
                                  <MathText text={dos.tagline} />
                                </p>
                              </div>
                              <span className="text-[10.5px] font-mono text-[#64748B] dark:text-[#94A3B8] shrink-0">{dos.category}</span>
                            </div>

                            <div className="space-y-3">
                              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#8F5B4A] dark:text-[#FDBA74] font-semibold">
                                How It Works · Plain-Language Guide
                              </div>
                              {dos.laymanParagraphs.map((lp, idx) => (
                                <p key={idx} className="text-[15.5px] leading-[1.55] text-[#1E293B] dark:text-[#E2E8F0] text-justify [hyphens:auto]">
                                  <MathText text={lp} />
                                </p>
                              ))}
                            </div>

                            {mfig && (
                              <div className="my-8 space-y-6">
                                {mfig.illustrationPath && (
                                  <figure className="rounded-xl border border-[#3A2E26]/25 dark:border-[#8E7F6B]/40 bg-[#FFFFFF] p-5 sm:p-7 space-y-4 shadow-sm">
                                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#EAE2D6] text-[11px] font-mono">
                                      <span className="uppercase tracking-[0.14em] text-[#64705B]">
                                        Cutaway Plate · Appendix J ({mfig.deviceId})
                                      </span>
                                      <span className="text-[#8E7F6B]">{mfig.category}</span>
                                    </div>
                                    <div className="text-[17px] text-[#0F0D0B]" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
                                      <MathText text={mfig.illustrationTitle || mfig.title} />
                                    </div>
                                    <div className="rounded-lg overflow-hidden border border-[#EAE2D6] bg-[#FFFFFF] p-2">
                                      <img
                                        src={mfig.illustrationPath}
                                        alt={mfig.illustrationTitle || mfig.title}
                                        referrerPolicy="no-referrer"
                                        className="w-full h-auto max-h-[540px] object-contain mx-auto block"
                                      />
                                    </div>
                                    <figcaption className="pt-2 text-[13.5px] leading-[1.68] text-[#3A2E26] text-justify [hyphens:auto]">
                                      <strong className="font-mono text-[11.5px] uppercase tracking-wider text-[#64705B] mr-1.5">
                                        {mfig.deviceId} Hardware Cutaway:
                                      </strong>
                                      <MathText text={mfig.illustrationTitle || mfig.title} /> — Full labeled apparatus cutaway on archival white ground.
                                    </figcaption>
                                  </figure>
                                )}
                                <figure className="rounded-xl border border-[#3A2E26]/25 dark:border-[#8E7F6B]/40 bg-[#FFFFFF] p-5 sm:p-7 space-y-4 shadow-sm">
                                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#EAE2D6] text-[11px] font-mono">
                                    <span className="uppercase tracking-[0.14em] text-[#64705B]">
                                      {mfig.figureNumber} · Appendix J Schematic ({mfig.deviceId})
                                    </span>
                                    <span className="text-[#8E7F6B]">{mfig.category}</span>
                                  </div>
                                  <div className="text-[17px] text-[#0F0D0B]" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
                                    <MathText text={mfig.title} />
                                  </div>
                                  <div
                                    className="w-full overflow-hidden rounded-lg border border-[#EAE2D6] bg-[#FFFFFF] p-3 [&>svg]:w-full [&>svg]:h-auto [&>svg]:block"
                                    dangerouslySetInnerHTML={{ __html: mfig.svgMarkup }}
                                  />
                                  <figcaption className="pt-2 text-[13.5px] leading-[1.68] text-[#3A2E26] text-justify [hyphens:auto]">
                                    <MathText text={mfig.caption} />
                                  </figcaption>
                                </figure>
                              </div>
                            )}

                            <div className="space-y-3">
                              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#15803D] dark:text-[#86EFAC] font-semibold">
                                Laboratory Architecture, Governing Physics &amp; Metrology
                              </div>
                              {dos.engineeringParagraphs.map((ep, idx) => (
                                <p key={idx} className="text-[15.5px] leading-[1.55] text-[#1E293B] dark:text-[#E2E8F0] text-justify [hyphens:auto]">
                                  <MathText text={ep} />
                                </p>
                              ))}
                            </div>

                            <div className="rounded-lg border border-[#15803D]/30 bg-[#F4FAF6] dark:bg-[#052E16]/40 p-4 text-[14.5px] leading-[1.6] text-[#0F172A] dark:text-[#ECFDF5] text-justify [hyphens:auto]">
                              <strong className="font-mono text-xs uppercase tracking-wider text-[#166534] dark:text-[#86EFAC] block mb-1">
                                Significance &amp; Epistemic Boundary
                              </strong>
                              <MathText text={dos.impactParagraph} />
                            </div>

                            {dev && (
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#334155] dark:text-[#CBD5E1] border-t border-[#EAE2D2] dark:border-[#1E293B]">
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
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530]">
                      <div className="bg-[#F4EFE6] dark:bg-[#0F172A] px-4 py-2 font-mono text-xs font-semibold">
                        Table J.2 · Cross-Device Sensitivity, Readiness &amp; Discovery Horizon Matrix (Devices A–K · 2026–2035+)
                      </div>
                      <table className="w-full text-xs text-left tabular-nums border-collapse [&_th]:border [&_td]:border [&_th]:border-[#EAE2D2] [&_td]:border-[#EAE2D2] dark:[&_th]:border-[#1E293B] dark:[&_td]:border-[#1E293B]">
                        <thead className="bg-[#FDFBF7] dark:bg-[#0F172A]">
                          <tr>
                            <th className="p-2.5">Device</th>
                            <th className="p-2.5">Target Physics</th>
                            <th className="p-2.5">Primary Observable</th>
                            <th className="p-2.5">TRL &amp; Window</th>
                            <th className="p-2.5">Breakthrough vs. Strict Non-Claim</th>
                          </tr>
                        </thead>
                        <tbody>
                          {APPENDIX_J_SYNTHESIS_TABLE.map((row) => (
                            <tr key={row.device}>
                              <td className="p-2.5 font-medium"><MathText text={row.device} /></td>
                              <td className="p-2.5"><MathText text={row.targetPhysics} /></td>
                              <td className="p-2.5 font-mono text-[11px]"><MathText text={row.primaryObservable} /></td>
                              <td className="p-2.5 font-mono text-[11px]">{row.readinessAndWindow}</td>
                              <td className="p-2.5 space-y-1">
                                <div><strong>If Detected:</strong> <MathText text={row.breakthroughIfDetected} /></div>
                                <div className="text-[#9F1239] dark:text-[#FDA4AF]"><strong>Non-Claim:</strong> <MathText text={row.strictNonClaim} /></div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {app.letter === 'K' && (
                  <div className="overflow-x-auto rounded-xl border border-[#15803D]/35 dark:border-[#1E293B] bg-white dark:bg-[#0B1530]">
                    <div className="bg-[#F4FAF6] dark:bg-[#0F172A] px-4 py-2 font-mono text-xs font-semibold text-[#166534] dark:text-[#86EFAC]">
                      Table K.1 · Unified Solutions to Seven Open Problems in Physics (IGRT–H11 &amp; H12 Equations)
                    </div>
                    <table className="w-full text-xs text-left border-collapse [&_th]:border [&_td]:border [&_th]:border-[#EAE2D2] [&_td]:border-[#EAE2D2] dark:[&_th]:border-[#1E293B] dark:[&_td]:border-[#1E293B]">
                      <thead className="bg-[#FDFBF7] dark:bg-[#0F172A]">
                        <tr>
                          <th className="p-2.5">Open Problem</th>
                          <th className="p-2.5">Governing H11 / H12 Equations</th>
                          <th className="p-2.5">Resolution &amp; Category</th>
                          <th className="p-2.5">Plain-Language Explanation</th>
                        </tr>
                      </thead>
                      <tbody>
                        {SEVEN_SOLVED_PHYSICS_PROBLEMS.map((sp) => (
                          <tr key={sp.id}>
                            <td className="p-2.5 font-medium"><MathText text={sp.openProblem} /></td>
                            <td className="p-2.5 font-mono text-[11px] text-[#8F5B4A] dark:text-[#FDBA74]"><MathText text={sp.governingH11H12Equations} /></td>
                            <td className="p-2.5 space-y-1">
                              <div><MathText text={sp.coreResolutionAndPrediction} /></div>
                              <div className="text-[10.5px] font-mono text-[#64748B] dark:text-[#94A3B8]">{sp.category}</div>
                            </td>
                            <td className="p-2.5"><MathText text={sp.laymanTakeaway} /></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {app.letter === 'L' && (
                  <div className="overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530]">
                    <div className="bg-[#F4EFE6] dark:bg-[#0F172A] px-4 py-2 font-mono text-xs font-semibold">
                      Table L.1 · Five-Tier Assessment of Eleven Candidate Speculative Portal Concepts
                    </div>
                    <table className="w-full text-xs text-left tabular-nums">
                      <thead className="border-b border-[#EAE2D2] dark:border-[#1E293B]">
                        <tr><th className="p-2.5">Concept</th><th className="p-2.5">Feasibility Tier</th><th className="p-2.5">Physical Action</th><th className="p-2.5">Quantitative Obstacle / Limit</th></tr>
                      </thead>
                      <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                        {ELEVEN_PORTAL_MECHANISMS.map((m) => (
                          <tr key={m.id}>
                            <td className="p-2.5 font-medium"><MathText text={m.mechanism} /></td>
                            <td className="p-2.5"><div>{m.tier}</div><div className="text-[10.5px] font-mono text-[#64748B]">{m.category}</div></td>
                            <td className="p-2.5"><MathText text={m.physicalAction} /></td>
                            <td className="p-2.5"><MathText text={m.quantitativeObstacleOrLimit} /></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};
