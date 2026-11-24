/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Devoted Thirteenth Monograph View (IGRT-2026-H13):
 * "Reality as Running Code: Hidden Fifth Dimensions, Black Hole Portals,
 *  White Hole Bounces, and How Time Compiles the Universe"
 *
 * - Playfair Display Regular (weight 400, non-bold) chapter titles
 * - Justified Book Antiqua / Serif prose in pure Unicode + HTML <sup>/<sub>
 * - Exact 5 authors matching H11 & H12 (with ORCID links and email)
 * - Dual Scholarly + Plain-English Guide layers (Bridges, Analogies, Symbol Decoder, FAQ)
 * - Downloadable A4 PDF, Self-Contained HTML, Markdown & ASCII-Safe LaTeX exports
 * - Interactive Cosmic Software Frame-Rate, 5D Portal & White-Hole Bounce Simulator
 */

import React, { useMemo, useState } from 'react';
import {
  H13_META,
  H13_METRIC_SIGNATURE_BOX,
  H13_FOUNDATIONAL_NOTE,
  H13_READING_GUIDE,
  H13_MASTER_EQUATIONS,
  H13_ABSTRACT_PARAGRAPHS,
  H13_SCOPE_AND_NON_CLAIMS,
  H13_TWELVE_PRINCIPLES_MATRIX,
  H13_SYMBOL_DECODER,
  H13_DIMENSIONAL_AUDIT,
  H13_BLACK_HOLE_TO_PORTAL_TAXONOMY,
  H13_WHITE_HOLE_BOUNCE_TABLE,
  H13_PROTOCOLS_P14_TO_P18,
  H13_FALSIFICATION_CHECKLIST,
  H13_CONFIRMATION_CHECKLIST,
  H13_EPISTEMIC_LEDGER,
  H13_PROOF_DEVICES_AND_RECOMMENDATIONS,
  H13_LAYMAN_FAQ,
  H13_APPENDICES,
  H13_ACTION_FIELD_TABLE,
  H13_KK_CONSTRAINTS_TABLE,
  H13_GJW_PROOF_STEPS,
  H13_WH_PIPELINE_SPEC,
  H13_DEFINITIONS_LIST,
  H13_THEOREMS_LIST,
  H13_REFERENCES,
  type H13EpistemicCategory,
  type H13Equation
} from '../types/igrtH13Apparatus';
import {
  H13_CHAPTERS,
  H13_FRONTMATTER_TABLES_LIST,
  H13_FRONTMATTER_EQUATIONS_LIST,
  buildH13FullMarkdown
} from '../types/igrtH13Data';
import {
  H13_ARCHIVAL_PLATES,
  H13_FIGURES,
  H13PlateCard,
  H13FigureCard
} from './IgrtH13Figures';
import { MathText } from './MathText';
import {
  buildH13SelfContainedHtml,
  buildH13StandaloneLatex
} from '../utils/generateIgrtH13Exports';
import { generateIgrtH13Pdf } from '../utils/generateIgrtH13Pdf';

interface IgrtH13PaperViewProps {
  onNavigateToH11Paper?: () => void;
  onNavigateToH12Paper?: () => void;
  onNavigateToH11Model?: () => void;
}

type ReaderMode = 'COMPLETE' | 'PLAIN_GUIDE' | 'FORMAL';

const H13EquationBox: React.FC<{ eq: H13Equation; showPlain?: boolean; showUnits?: boolean }> = ({
  eq,
  showPlain = true,
  showUnits = true
}) => (
  <div className="my-8 rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] p-6 sm:p-7">
    <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-3 border-b border-[#EAE2D2] dark:border-[#1E293B] text-[11px] font-mono">
      <span className="text-[#64748B] dark:text-[#94A3B8] tracking-wide">{eq.category}</span>
      <span className="text-[#8B4513] dark:text-[#FB923C] tabular-nums">{eq.label}</span>
    </div>
    <div
      className="text-center text-[#0F172A] dark:text-[#FDFBF7] py-3 overflow-x-auto text-[17px] leading-[1.75]"
      dangerouslySetInnerHTML={{ __html: eq.unicodeHtml }}
    />
    <div className="mt-3 pt-3 border-t border-[#EAE2D2] dark:border-[#1E293B] text-center text-[13.5px] leading-[1.65] italic text-[#475569] dark:text-[#94A3B8]">
      <MathText text={eq.caption} />
    </div>
    {showPlain && eq.plainEnglishMeaning && (
      <div className="mt-3 pt-2.5 border-t border-[#EAE2D2] dark:border-[#1E293B] text-[13.5px] leading-[1.6] text-[#3A2E26] dark:text-[#CBD9FC]">
        <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#64705B] dark:text-[#86EFAC] mr-2">
          In Plain English
        </span>
        <MathText text={eq.plainEnglishMeaning} />
      </div>
    )}
    {showUnits && eq.unitsCheck && (
      <div className="mt-2 font-mono text-[11px] text-[#64748B] dark:text-[#94A3B8]">
        Units Check: <MathText text={eq.unitsCheck} />
      </div>
    )}
  </div>
);

export const IgrtH13PaperView: React.FC<IgrtH13PaperViewProps> = ({
  onNavigateToH11Paper,
  onNavigateToH12Paper,
  onNavigateToH11Model
}) => {
  const [categoryFilter, setCategoryFilter] = useState<'ALL' | H13EpistemicCategory>('ALL');
  const [readerMode, setReaderMode] = useState<ReaderMode>('COMPLETE');
  const [pdfBusy, setPdfBusy] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);

  // Interactive simulator state
  const [radiusRatio, setRadiusRatio] = useState<number>(3.0);
  const [portalSpan, setPortalSpan] = useState<number>(2.0);
  const [pbhLogMassG, setPbhLogMassG] = useState<number>(14.24);

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

  const handleDownloadPdf = async () => {
    setPdfBusy(true);
    setPdfError(null);
    try {
      await generateIgrtH13Pdf();
    } catch (err) {
      setPdfError(err instanceof Error ? err.message : 'PDF export encountered an error.');
    } finally {
      setPdfBusy(false);
    }
  };

  const simOutputs = useMemo(() => {
    const alphaMod = Math.sqrt(Math.max(0, 1 - 1 / Math.max(1.0001, radiusRatio)));
    const half = 0.5 * portalSpan;
    const etaFold = portalSpan < 1e-4 ? 1 : Math.sin(half) / half;
    const shortcutGainPct = (1 - etaFold) * 100;
    const hbar = 1.054571817e-34;
    const G = 6.6743e-11;
    const c = 2.99792458e8;
    const tPlSec = 5.391247e-44;
    const mPlGrams = 2.176434e-5;
    const secPerYear = 3.15576e7;
    const rhoPl = Math.pow(c, 5) / (hbar * G * G);
    const rhoMax = 0.4094 * rhoPl;
    const massGrams = Math.pow(10, pbhLogMassG);
    const massKg = massGrams / 1000;
    const massRatio = massGrams / mPlGrams;
    const log10QuadYears = Math.log10(tPlSec / secPerYear) + 2 * Math.log10(massRatio);
    const log10CubicYears =
      Math.log10((5120 * Math.PI * tPlSec) / secPerYear) + 3 * Math.log10(massRatio);
    const interiorMs = ((G * massKg) / Math.pow(c, 3)) * 1000;
    const rBounceM = Math.cbrt((3 * massKg) / (4 * Math.PI * rhoMax));
    const aBounceMs2 = (3 * G * massKg) / (rBounceM * rBounceM);
    const tauIntExactSec = ((8 / 3) * G * massKg) / Math.pow(c, 3);

    // Live 4-stage RK4 integration of d^2 u / ds^2 = -1/(2 u^2) + 2 / u^5
    let u = 2.0;
    let v = -Math.sqrt(0.5 - 1 / 16);
    const ds = 0.002;
    let uMin = u;
    let maxEnergyResidual = 0;
    const accel = (uu: number) => -1 / (2 * uu * uu) + 2 / Math.pow(uu, 5);
    for (let step = 0; step < 2200; step++) {
      const k1u = v;
      const k1v = accel(u);
      const k2u = v + 0.5 * ds * k1v;
      const k2v = accel(u + 0.5 * ds * k1u);
      const k3u = v + 0.5 * ds * k2v;
      const k3v = accel(u + 0.5 * ds * k2u);
      const k4u = v + ds * k3v;
      const k4v = accel(u + ds * k3u);
      u += (ds / 6) * (k1u + 2 * k2u + 2 * k3u + k4u);
      v += (ds / 6) * (k1v + 2 * k2v + 2 * k3v + k4v);
      if (u < uMin) uMin = u;
      const eRes = Math.abs(v * v - (1 / u - 1 / Math.pow(u, 4)));
      if (eRes > maxEnergyResidual) maxEnergyResidual = eRes;
    }

    return {
      alphaMod,
      etaFold,
      shortcutGainPct,
      massGrams,
      log10QuadYears,
      log10CubicYears,
      interiorMs,
      rBounceM,
      aBounceMs2,
      tauIntExactSec,
      uMin,
      uEnd: u,
      maxEnergyResidual
    };
  }, [radiusRatio, portalSpan, pbhLogMassG]);

  const filteredChapters = useMemo(() => {
    if (categoryFilter === 'ALL') return H13_CHAPTERS;
    return H13_CHAPTERS.filter(
      (ch) =>
        ch.epistemicCategory === categoryFilter ||
        ch.subsections.some((s) => s.category === categoryFilter)
    );
  }, [categoryFilter]);

  const showPlainBridges = readerMode !== 'FORMAL';
  const showFormalBoxes = readerMode !== 'PLAIN_GUIDE';

  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10 text-[#0F172A] dark:text-[#FDFBF7]"
      style={{ fontFamily: '"Book Antiqua", "Palatino Linotype", Georgia, serif' }}
    >
      {/* Top Action Bar & Cross-Paper Navigation */}
      <div className="rounded-xl border border-[#D6CABE] dark:border-[#1E293B] bg-[#FAF8F3] dark:bg-[#081026] p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 text-xs font-sans">
          {onNavigateToH11Paper && (
            <button
              onClick={onNavigateToH11Paper}
              className="px-3 py-1.5 rounded-lg border border-[#D6CABE] dark:border-[#334155] bg-white dark:bg-[#0C1836] hover:border-[#8F5B4A] transition-colors"
            >
              Read Paper 1 (H11)
            </button>
          )}
          {onNavigateToH12Paper && (
            <button
              onClick={onNavigateToH12Paper}
              className="px-3 py-1.5 rounded-lg border border-[#D6CABE] dark:border-[#334155] bg-white dark:bg-[#0C1836] hover:border-[#8F5B4A] transition-colors"
            >
              Read Paper 2 (H12 · 5D)
            </button>
          )}
          {onNavigateToH11Model && (
            <button
              onClick={onNavigateToH11Model}
              className="px-3 py-1.5 rounded-lg border border-[#D6CABE] dark:border-[#334155] bg-white dark:bg-[#0C1836] hover:border-[#8F5B4A] transition-colors"
            >
              Open Harmonized Model
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2.5 text-xs font-sans">
          <button
            onClick={handleDownloadPdf}
            disabled={pdfBusy}
            className="px-4 py-2 rounded-lg bg-[#8F5B4A] hover:bg-[#7A4B3C] text-white font-medium shadow-xs disabled:opacity-60 transition-colors"
          >
            {pdfBusy ? 'Compiling Unicode PDF…' : 'Download Full PDF (A4)'}
          </button>
          <button
            onClick={() =>
              triggerDownload(
                new Blob([buildH13SelfContainedHtml()], { type: 'text/html;charset=utf-8' }),
                'IGRT_H13_Monograph.html'
              )
            }
            className="px-3 py-2 rounded-lg border border-[#D6CABE] dark:border-[#334155] bg-white dark:bg-[#0C1836] hover:border-[#8F5B4A] transition-colors"
          >
            Archival HTML
          </button>
          <button
            onClick={() =>
              triggerDownload(
                new Blob([buildH13FullMarkdown()], { type: 'text/markdown;charset=utf-8' }),
                'IGRT_H13_Monograph.md'
              )
            }
            className="px-3 py-2 rounded-lg border border-[#D6CABE] dark:border-[#334155] bg-white dark:bg-[#0C1836] hover:border-[#8F5B4A] transition-colors"
          >
            Markdown (.md)
          </button>
          <button
            onClick={() =>
              triggerDownload(
                new Blob([buildH13StandaloneLatex()], { type: 'application/x-tex;charset=utf-8' }),
                'IGRT_H13_Monograph.tex'
              )
            }
            className="px-3 py-2 rounded-lg border border-[#D6CABE] dark:border-[#334155] bg-white dark:bg-[#0C1836] hover:border-[#8F5B4A] transition-colors"
          >
            LaTeX (.tex)
          </button>
        </div>
      </div>

      {pdfError && (
        <div className="rounded-lg border border-rose-300 bg-rose-50 dark:bg-rose-950/40 px-4 py-3 text-xs text-rose-800 dark:text-rose-200 font-mono">
          {pdfError}
        </div>
      )}

      {/* Cover Header Banner */}
      <header className="rounded-2xl border border-[#D6CABE] dark:border-[#1E293B] bg-[#FFFFFF] dark:bg-[#0B1530] p-7 sm:p-11 space-y-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#8F5B4A] dark:text-[#FB923C] uppercase tracking-widest border-b border-[#EAE2D2] dark:border-[#1E293B] pb-3">
          <span>{H13_META.monographId} · Thirteenth Edition Monograph</span>
          <span>{H13_META.date} · 12 Chapters · 26 Figures &amp; Plates · Appendices A–J</span>
        </div>

        <h1 className="font-['Playfair_Display'] font-normal text-3xl sm:text-[40px] leading-[1.18] text-[#0F172A] dark:text-[#FDFBF7]">
          {H13_META.title}
        </h1>

        <p className="text-base sm:text-lg italic text-[#475569] dark:text-[#CBD9FC] leading-relaxed">
          {H13_META.subtitle}
        </p>

        {/* Five Authors Roster */}
        <div className="pt-4 border-t border-[#EAE2D2] dark:border-[#1E293B]">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-3">
            Authors &amp; Affiliations
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {H13_META.authorRoster.map((author) => (
              <div
                key={author.name}
                className="rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FAF8F3] dark:bg-[#081026] p-3.5 space-y-1 text-xs"
              >
                <div className="font-semibold text-sm text-[#0F172A] dark:text-[#FDFBF7]">
                  {author.name}
                </div>
                <div className="text-[#475569] dark:text-[#CBD9FC] leading-snug">
                  {author.affiliation}
                </div>
                <div className="text-[11px] text-[#64748B] dark:text-[#94A3B8] italic">
                  {author.role}
                </div>
                {author.orcidUrl ? (
                  <a
                    href={author.orcidUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block font-mono text-[10.5px] text-[#64705B] dark:text-[#86EFAC] hover:underline pt-0.5"
                  >
                    ORCID: {author.orcid}
                  </a>
                ) : author.email ? (
                  <a
                    href={`mailto:${author.email}`}
                    className="inline-block font-mono text-[10.5px] text-[#64705B] dark:text-[#86EFAC] hover:underline pt-0.5"
                  >
                    {author.email}
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content + Sticky TOC Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sticky Left Navigation */}
        <aside className="lg:col-span-3 lg:sticky lg:top-28 space-y-5">
          {/* Reading Lens Selector */}
          <div className="rounded-xl border border-[#D6CABE] dark:border-[#1E293B] bg-[#FFFFFF] dark:bg-[#0B1530] p-4 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#64705B] dark:text-[#86EFAC] border-b border-[#EAE2D2] dark:border-[#1E293B] pb-2">
              Reader Lens
            </div>
            <div className="flex flex-col gap-1.5 text-xs font-sans">
              {(
                [
                  ['COMPLETE', 'Complete Edition (Plain + Formal)'],
                  ['PLAIN_GUIDE', 'Plain-English Guided Tour'],
                  ['FORMAL', 'Formal Equations & Proofs']
                ] as const
              ).map(([mode, label]) => (
                <button
                  key={mode}
                  onClick={() => setReaderMode(mode)}
                  className={`text-left px-2.5 py-1.5 rounded-lg transition-colors ${
                    readerMode === mode
                      ? 'bg-[#64705B] text-white font-medium'
                      : 'hover:bg-[#FAF8F3] dark:hover:bg-[#142B5B] text-[#334155] dark:text-[#CBD5E1]'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#D6CABE] dark:border-[#1E293B] bg-[#FFFFFF] dark:bg-[#0B1530] p-4 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#8F5B4A] dark:text-[#FB923C] border-b border-[#EAE2D2] dark:border-[#1E293B] pb-2">
              Epistemic Tier Filter
            </div>
            <div className="flex flex-col gap-1.5 text-xs font-sans">
              {(
                [
                  ['ALL', 'All Tiers (Complete H13)'],
                  ['CATEGORY A — ESTABLISHED', 'Cat A · Established Physics'],
                  ['CATEGORY B — DERIVED', 'Cat B · Derived in IGRT'],
                  ['CATEGORY C — CONJECTURAL', 'Cat C · 5D, Portals & White Holes']
                ] as const
              ).map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setCategoryFilter(val)}
                  className={`text-left px-2.5 py-1.5 rounded-lg transition-colors ${
                    categoryFilter === val
                      ? 'bg-[#8F5B4A] text-white font-medium'
                      : 'hover:bg-[#FAF8F3] dark:hover:bg-[#142B5B] text-[#334155] dark:text-[#CBD5E1]'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <nav className="rounded-xl border border-[#D6CABE] dark:border-[#1E293B] bg-[#FFFFFF] dark:bg-[#0B1530] p-4 space-y-1.5 max-h-[55vh] overflow-y-auto text-xs font-sans">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#64705B] dark:text-[#86EFAC] border-b border-[#EAE2D2] dark:border-[#1E293B] pb-2">
              Monograph Contents
            </div>
            <a href="#h13-abstract" className="block py-1 hover:text-[#8F5B4A]">Abstract &amp; Reader Guide</a>
            <a href="#h13-simulator" className="block py-1 hover:text-[#8F5B4A]">Interactive Explorer</a>
            <a href="#h13-principles" className="block py-1 hover:text-[#8F5B4A]">Table 0.1 · 12 Principles</a>
            <a href="#h13-symbols" className="block py-1 hover:text-[#8F5B4A]">Table 0.2 · Symbol Decoder</a>
            <a href="#h13-dimensions" className="block py-1 hover:text-[#8F5B4A]">Table 0.3 · SI Units Audit</a>
            {H13_CHAPTERS.map((ch) => (
              <a
                key={ch.id}
                href={`#${ch.id}`}
                className="block py-1 text-[#475569] dark:text-[#CBD5E1] hover:text-[#8F5B4A] truncate"
              >
                Ch. {ch.number}. {ch.title}
              </a>
            ))}
            <a href="#h13-faq" className="block py-1 pt-2 border-t border-[#EAE2D2] dark:border-[#1E293B] hover:text-[#8F5B4A]">
              Common Questions (FAQ)
            </a>
            <a href="#h13-appendices" className="block py-1 hover:text-[#8F5B4A]">
              Appendices A–J &amp; References
            </a>
            <div className="pl-2.5 space-y-0.5 text-[11px] text-[#64748B] dark:text-[#94A3B8]">
              <a href="#h13-app-G" className="block py-0.5 hover:text-[#8F5B4A]">App. G · 5D+4D Action &amp; EL Eqs</a>
              <a href="#h13-app-H" className="block py-0.5 hover:text-[#8F5B4A]">App. H · KK Spectrum &amp; Bounds</a>
              <a href="#h13-app-I" className="block py-0.5 hover:text-[#8F5B4A]">App. I · Non-AdS GJW Proof</a>
              <a href="#h13-app-J" className="block py-0.5 hover:text-[#8F5B4A]">App. J · RK4 Bounce Pipeline</a>
            </div>
          </nav>
        </aside>

        {/* Right Scholarly Column */}
        <article className="lg:col-span-9 space-y-12">
          {/* Abstract, Reader Guide & Foundational Equations */}
          <section
            id="h13-abstract"
            className="rounded-xl border border-[#D6CABE] dark:border-[#1E293B] bg-[#FFFFFF] dark:bg-[#0B1530] p-6 sm:p-9 space-y-5"
          >
            <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl border-b border-[#EAE2D2] dark:border-[#1E293B] pb-3">
              Abstract &amp; Reader Navigation Guide
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs sm:text-[13px]">
              {H13_READING_GUIDE.map((item) => (
                <div
                  key={item.audience}
                  className="rounded-lg border border-[#EAE2D2] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] p-3.5 space-y-1.5"
                >
                  <div className="font-semibold text-[#8F5B4A] dark:text-[#FB923C]">{item.audience}</div>
                  <p className="leading-relaxed text-[#475569] dark:text-[#CBD9FC]">
                    <MathText text={item.howToRead} />
                  </p>
                </div>
              ))}
            </div>

            {H13_ABSTRACT_PARAGRAPHS.map((p, idx) => (
              <p key={idx} className="text-[16.5px] leading-[1.72] text-justify">
                <MathText text={p} />
              </p>
            ))}

            <div className="rounded-lg border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] p-4 text-xs sm:text-sm space-y-2">
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#8F5B4A] dark:text-[#FB923C]">
                Epistemic Guardrail &amp; Signature Convention
              </div>
              <p className="leading-relaxed">
                <MathText text={H13_FOUNDATIONAL_NOTE} />
              </p>
              <p className="font-mono text-xs text-[#475569] dark:text-[#94A3B8]">
                <MathText text={H13_METRIC_SIGNATURE_BOX} />
              </p>
            </div>

            {showFormalBoxes &&
              H13_MASTER_EQUATIONS.map((eq) => (
                <H13EquationBox key={eq.label} eq={eq} />
              ))}

            <div className="space-y-2 pt-2">
              <h3 className="font-['Playfair_Display'] font-normal text-xl text-[#8F5B4A] dark:text-[#FB923C]">
                {H13_SCOPE_AND_NON_CLAIMS.title}
              </h3>
              <ul className="space-y-2 text-[15px] leading-relaxed list-disc pl-5">
                {H13_SCOPE_AND_NON_CLAIMS.points.map((pt, i) => (
                  <li key={i}>
                    <MathText text={pt} />
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Interactive Cosmic Software, 5D Portal & White-Hole Bounce Simulator */}
          <section
            id="h13-simulator"
            className="rounded-xl border border-[#D6CABE] dark:border-[#1E293B] bg-[#FFFFFF] dark:bg-[#0B1530] p-6 sm:p-9 space-y-6"
          >
            <div className="border-b border-[#EAE2D2] dark:border-[#1E293B] pb-3">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#64705B] dark:text-[#86EFAC]">
                Interactive Numerical Workbench
              </div>
              <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl mt-1">
                Frame-Rate Gravity, 5D Portal Shortcut &amp; White-Hole Bounce Explorer
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-sans">
              <div className="rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FAF8F3] dark:bg-[#081026] p-4 space-y-3">
                <div className="text-xs font-medium text-[#8F5B4A] dark:text-[#FB923C]">
                  1. Gravitational Frame Throttling (r / r_s)
                </div>
                <input
                  type="range"
                  min={1.02}
                  max={20}
                  step={0.02}
                  value={radiusRatio}
                  onChange={(e) => setRadiusRatio(Number(e.target.value))}
                  className="w-full accent-[#8F5B4A]"
                />
                <div className="flex justify-between text-xs font-mono">
                  <span>r = {radiusRatio.toFixed(2)} r_s</span>
                  <span className="font-semibold text-[#0F172A] dark:text-white">
                    α_mod = {(simOutputs.alphaMod * 100).toFixed(2)}%
                  </span>
                </div>
                <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8]">
                  Closer to compressed mass density, local software ticks slow proportionally to √(1 − r_s/r).
                </p>
              </div>

              <div className="rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FAF8F3] dark:bg-[#081026] p-4 space-y-3">
                <div className="text-xs font-medium text-[#64705B] dark:text-[#86EFAC]">
                  2. 5D Einstein–Maxwell Portal Span (k Δx)
                </div>
                <input
                  type="range"
                  min={0.1}
                  max={3.14159}
                  step={0.02}
                  value={portalSpan}
                  onChange={(e) => setPortalSpan(Number(e.target.value))}
                  className="w-full accent-[#64705B]"
                />
                <div className="flex justify-between text-xs font-mono">
                  <span>k Δx = {portalSpan.toFixed(2)}</span>
                  <span className="font-semibold text-[#0F172A] dark:text-white">
                    η_fold = {simOutputs.etaFold.toFixed(5)}
                  </span>
                </div>
                <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8]">
                  Bulk portal saves {simOutputs.shortcutGainPct.toFixed(1)}% transit latency (2/π limit = 0.63662).
                </p>
              </div>

              <div className="rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FAF8F3] dark:bg-[#081026] p-4 space-y-3">
                <div className="text-xs font-medium text-[#8F5B4A] dark:text-[#FB923C]">
                  3. Progenitor BH Mass log₁₀(M / g)
                </div>
                <input
                  type="range"
                  min={5}
                  max={36}
                  step={0.1}
                  value={pbhLogMassG}
                  onChange={(e) => setPbhLogMassG(Number(e.target.value))}
                  className="w-full accent-[#8F5B4A]"
                />
                <div className="flex flex-col gap-0.5 text-[11px] font-mono">
                  <span>M = 10^{pbhLogMassG.toFixed(1)} g · τ_int ≈ {simOutputs.interiorMs.toExponential(1)} ms</span>
                  <span className="text-[#64705B] dark:text-[#86EFAC]">
                    Cubic τ_WH^(3) ≈ 10^{simOutputs.log10CubicYears.toFixed(1)} yr
                  </span>
                  <span className="text-[#8F5B4A] dark:text-[#FB923C]">
                    Quad τ_WH^(2) ≈ 10^{simOutputs.log10QuadYears.toFixed(1)} yr
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FAF8F3] dark:bg-[#081026] p-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <div className="space-y-1">
                <div className="text-[10.5px] uppercase tracking-wider text-[#64705B] dark:text-[#86EFAC]">
                  Live RK4 White-Hole Bounce Solver (Appendix J · Eq. J.1–J.2)
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-[#0F172A] dark:text-[#E2E8F0]">
                  <span>R_bounce = {simOutputs.rBounceM.toExponential(3)} m</span>
                  <span>d²R/dτ² = +{simOutputs.aBounceMs2.toExponential(2)} m/s²</span>
                  <span>τ_int = {simOutputs.tauIntExactSec.toExponential(2)} s</span>
                  <span>u_min = {simOutputs.uMin.toFixed(6)}</span>
                  <span>max|E_res| = {simOutputs.maxEnergyResidual.toExponential(1)}</span>
                </div>
              </div>
              <button
                onClick={() =>
                  triggerDownload(
                    new Blob(
                      [
                        JSON.stringify(
                          {
                            monograph: H13_META.monographId,
                            ode: 'd2u/ds2 = -1/(2 u^2) + 2/u^5',
                            rhoMaxOverRhoPl: 0.4094,
                            massGrams: Number(simOutputs.massGrams.toExponential(4)),
                            rBounceMeters: Number(simOutputs.rBounceM.toExponential(4)),
                            bounceAccelMs2: Number(simOutputs.aBounceMs2.toExponential(4)),
                            interiorProperSeconds: Number(simOutputs.tauIntExactSec.toExponential(4)),
                            log10QuadDelayYears: Number(simOutputs.log10QuadYears.toFixed(3)),
                            log10CubicDelayYears: Number(simOutputs.log10CubicYears.toFixed(3)),
                            rk4StepDs: 0.002,
                            uMinObserved: Number(simOutputs.uMin.toFixed(8)),
                            uEndRebound: Number(simOutputs.uEnd.toFixed(6)),
                            maxHamiltonianResidual: Number(simOutputs.maxEnergyResidual.toExponential(3))
                          },
                          null,
                          2
                        )
                      ],
                      { type: 'application/json;charset=utf-8' }
                    ),
                    'IGRT_H13_WH_Bounce_Pipeline.json'
                  )
                }
                className="px-3 py-1.5 rounded-lg border border-[#D6CABE] dark:border-[#334155] bg-white dark:bg-[#0C1836] hover:border-[#8F5B4A] font-sans text-xs transition-colors"
              >
                Export RK4 Spec (.json)
              </button>
            </div>
          </section>

          {/* 12 Computational-Reality Principles Matrix */}
          <section
            id="h13-principles"
            className="rounded-xl border border-[#D6CABE] dark:border-[#1E293B] bg-[#FFFFFF] dark:bg-[#0B1530] p-6 sm:p-9 space-y-5"
          >
            <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl border-b border-[#EAE2D2] dark:border-[#1E293B] pb-3">
              Table 0.1 · Twelve Principles of Reality as Running Code
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
                <thead>
                  <tr className="bg-[#FAF8F3] dark:bg-[#081026] border-b border-[#D6CABE] dark:border-[#334155]">
                    <th className="p-3 font-semibold"># &amp; Principle</th>
                    <th className="p-3 font-semibold">Intuitive Statement</th>
                    <th className="p-3 font-semibold">IGRT Formula &amp; Anchor</th>
                    <th className="p-3 font-semibold">Tier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                  {H13_TWELVE_PRINCIPLES_MATRIX.map((pr) => (
                    <tr key={pr.id} className="hover:bg-[#FAF8F3]/60 dark:hover:bg-[#081026]/60">
                      <td className="p-3 font-semibold align-top whitespace-nowrap">
                        <a href={`#ch-${pr.chapterAnchor}`} className="text-[#8F5B4A] dark:text-[#FB923C] hover:underline">
                          {pr.id}. {pr.shortTitle}
                        </a>
                      </td>
                      <td className="p-3 italic align-top">“{pr.userStatement}”</td>
                      <td className="p-3 align-top space-y-1">
                        <div className="font-mono text-[11px] text-[#0F172A] dark:text-[#CBD9FC]">
                          <MathText text={pr.governingFormula} />
                        </div>
                        <div className="text-[11.5px] text-[#64748B] dark:text-[#94A3B8]">
                          <MathText text={pr.quantitativeAnchor} />
                        </div>
                      </td>
                      <td className="p-3 font-mono text-[10.5px] align-top whitespace-nowrap">
                        {pr.epistemicCategory}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Table 0.2 · Plain-English Symbol & Units Decoder */}
          <section
            id="h13-symbols"
            className="rounded-xl border border-[#D6CABE] dark:border-[#1E293B] bg-[#FFFFFF] dark:bg-[#0B1530] p-6 sm:p-9 space-y-5"
          >
            <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl border-b border-[#EAE2D2] dark:border-[#1E293B] pb-3">
              Table 0.2 · Plain-English Symbol &amp; Units Decoder
            </h2>
            <p className="text-sm text-[#475569] dark:text-[#CBD9FC]">
              Every Greek symbol and shorthand quantity in this paper decoded cleanly in plain English alongside its formal physical units.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
                <thead>
                  <tr className="bg-[#FAF8F3] dark:bg-[#081026] border-b border-[#D6CABE] dark:border-[#334155]">
                    <th className="p-2.5">Symbol</th>
                    <th className="p-2.5">Spoken Name</th>
                    <th className="p-2.5">Plain-English Meaning</th>
                    <th className="p-2.5">Formal Role &amp; SI Units</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                  {H13_SYMBOL_DECODER.map((sy) => (
                    <tr key={sy.symbol} className="hover:bg-[#FAF8F3]/60 dark:hover:bg-[#081026]/60">
                      <td className="p-2.5 font-mono font-semibold text-[#8F5B4A] dark:text-[#FB923C] whitespace-nowrap align-top">
                        <MathText text={sy.symbol} />
                      </td>
                      <td className="p-2.5 italic align-top whitespace-nowrap">{sy.spokenName}</td>
                      <td className="p-2.5 align-top"><MathText text={sy.plainEnglishMeaning} /></td>
                      <td className="p-2.5 align-top text-[#475569] dark:text-[#CBD9FC]">
                        <div><MathText text={sy.formalMathematicalRole} /></div>
                        <div className="font-mono text-[10.5px] text-[#64705B] dark:text-[#86EFAC] mt-0.5">
                          <MathText text={sy.units} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Table 0.3 · SI Units & Dimensional Consistency Audit */}
          {showFormalBoxes && (
            <section
              id="h13-dimensions"
              className="rounded-xl border border-[#D6CABE] dark:border-[#1E293B] bg-[#FFFFFF] dark:bg-[#0B1530] p-6 sm:p-9 space-y-5"
            >
              <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl border-b border-[#EAE2D2] dark:border-[#1E293B] pb-3">
                Table 0.3 · SI Units &amp; Dimensional Consistency Audit
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
                  <thead>
                    <tr className="bg-[#FAF8F3] dark:bg-[#081026] border-b border-[#D6CABE] dark:border-[#334155]">
                      <th className="p-2.5">Equation</th>
                      <th className="p-2.5">Formula</th>
                      <th className="p-2.5">LHS = RHS Dimensions</th>
                      <th className="p-2.5">Physical Check</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                    {H13_DIMENSIONAL_AUDIT.map((da) => (
                      <tr key={da.equationLabel}>
                        <td className="p-2.5 font-mono font-semibold text-[#8F5B4A] dark:text-[#FB923C] align-top whitespace-nowrap">
                          {da.equationLabel}
                        </td>
                        <td className="p-2.5 font-mono text-[11px] align-top">
                          <MathText text={da.formulaSummary} />
                        </td>
                        <td className="p-2.5 align-top">
                          <div><strong>LHS:</strong> <MathText text={da.lhsDimensions} /></div>
                          <div><strong>RHS:</strong> <MathText text={da.rhsDimensions} /></div>
                        </td>
                        <td className="p-2.5 align-top text-[#475569] dark:text-[#CBD9FC]">
                          <MathText text={da.physicalCheck} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Chapters 1 to 12 */}
          {filteredChapters.map((ch) => (
            <section
              key={ch.id}
              id={ch.id}
              className="rounded-xl border border-[#D6CABE] dark:border-[#1E293B] bg-[#FFFFFF] dark:bg-[#0B1530] p-6 sm:p-10 space-y-6"
            >
              <div className="space-y-3 border-b border-[#EAE2D2] dark:border-[#1E293B] pb-4">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#64705B] dark:text-[#86EFAC]">
                  Chapter {ch.number} · {ch.epistemicCategory}
                </div>
                <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl leading-snug">
                  {ch.number}. <MathText text={ch.title} />
                </h2>
                <div className="text-[11.5px] font-mono text-[#64748B] dark:text-[#94A3B8]">
                  <strong>Provenance:</strong> <MathText text={ch.provenance} />
                </div>
                <blockquote className="rounded-lg border border-[#EAE2D2] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] px-4 py-3 italic text-[15.5px] text-[#3A2E26] dark:text-[#E2E8F0]">
                  “{ch.principleQuote}”
                </blockquote>

                {showPlainBridges && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1 text-[13.5px]">
                    <div className="rounded-lg border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] p-4 space-y-1">
                      <div className="font-mono text-[10.5px] uppercase tracking-wider text-[#64705B] dark:text-[#86EFAC]">
                        In Plain English
                      </div>
                      <p className="leading-relaxed text-[#0F172A] dark:text-[#E2E8F0]">
                        <MathText text={ch.plainEnglishBridge} />
                      </p>
                    </div>
                    <div className="rounded-lg border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] p-4 space-y-1">
                      <div className="font-mono text-[10.5px] uppercase tracking-wider text-[#8F5B4A] dark:text-[#FB923C]">
                        Everyday Analogy
                      </div>
                      <p className="leading-relaxed text-[#3A2E26] dark:text-[#CBD9FC]">
                        <MathText text={ch.everydayAnalogy} />
                      </p>
                    </div>
                  </div>
                )}

                <p className="text-[15px] italic text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                  <MathText text={ch.leadSummary} />
                </p>
              </div>

              {ch.subsections.map((sub) => (
                <div key={sub.number} className="space-y-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-['Playfair_Display'] font-normal text-xl sm:text-2xl text-[#8F5B4A] dark:text-[#FB923C]">
                      {sub.number} <MathText text={sub.title} />
                    </h3>
                    <span className="font-mono text-[10.5px] text-[#64748B] dark:text-[#94A3B8]">
                      {sub.category}
                    </span>
                  </div>
                  {sub.paragraphs.map((p, idx) => (
                    <p key={idx} className="text-[16.5px] leading-[1.72] text-justify">
                      <MathText text={p} />
                    </p>
                  ))}
                  {showFormalBoxes && sub.equation && (
                    <H13EquationBox eq={sub.equation} showPlain={showPlainBridges} showUnits />
                  )}
                  {showFormalBoxes && sub.theoremBox && (
                    <div className="rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] p-5 space-y-2.5">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                        <span className="text-[#64705B] dark:text-[#86EFAC] font-semibold">
                          {sub.theoremBox.number}: <MathText text={sub.theoremBox.title} />
                        </span>
                        <span className="text-[#64748B]">{sub.theoremBox.category}</span>
                      </div>
                      <ul className="text-xs space-y-1 text-[#475569] dark:text-[#CBD9FC] list-disc pl-5">
                        {sub.theoremBox.hypotheses.map((h, hi) => (
                          <li key={hi}>
                            <MathText text={h} />
                          </li>
                        ))}
                      </ul>
                      <p className="text-[15px] leading-relaxed font-medium">
                        <MathText text={sub.theoremBox.statement} />
                      </p>
                      <div className="pt-2 border-t border-[#EAE2D2] dark:border-[#1E293B] space-y-1.5">
                        <div className="font-mono text-[10.5px] uppercase tracking-wider text-[#8F5B4A] dark:text-[#FB923C]">
                          Formal Multi-Step Proof
                        </div>
                        <ol className="text-[13.5px] leading-relaxed space-y-1.5 list-decimal pl-5 text-[#3A2E26] dark:text-[#E2E8F0]">
                          {sub.theoremBox.proofSteps.map((step, si) => (
                            <li key={si}>
                              <MathText text={step} />
                            </li>
                          ))}
                        </ol>
                        <div className="text-[11.5px] font-mono text-[#64748B] dark:text-[#94A3B8] pt-1">
                          <strong>Provenance:</strong> <MathText text={sub.theoremBox.provenance} />
                        </div>
                      </div>
                      {showPlainBridges && sub.theoremBox.plainEnglishSummary && (
                        <p className="text-[13.5px] pt-2 border-t border-[#EAE2D2] dark:border-[#1E293B] text-[#64705B] dark:text-[#86EFAC]">
                          <strong>Plain-English Meaning:</strong>{' '}
                          <MathText text={sub.theoremBox.plainEnglishSummary} />
                        </p>
                      )}
                    </div>
                  )}
                  {sub.workedExample && (
                    <div className="rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] p-5 space-y-3">
                      <div className="font-semibold text-sm text-[#8F5B4A] dark:text-[#FB923C]">
                        <MathText text={sub.workedExample.title} />
                      </div>
                      <p className="text-xs italic text-[#475569] dark:text-[#CBD9FC]">
                        <MathText text={sub.workedExample.setup} />
                      </p>
                      <ol className="text-sm space-y-1.5 list-decimal pl-5">
                        {sub.workedExample.steps.map((st, si) => (
                          <li key={si}>
                            <MathText text={st} />
                          </li>
                        ))}
                      </ol>
                      {showFormalBoxes && (
                        <H13EquationBox eq={sub.workedExample.resultEquation} showPlain={showPlainBridges} showUnits />
                      )}
                      <p className="text-xs font-medium text-[#64705B] dark:text-[#86EFAC]">
                        Takeaway: <MathText text={sub.workedExample.takeaway} />
                      </p>
                    </div>
                  )}
                </div>
              ))}

              {/* Chapter Key Takeaways */}
              {showPlainBridges && (
                <div className="rounded-lg border border-[#EAE2D2] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] p-4 space-y-1.5">
                  <div className="font-mono text-[10.5px] uppercase tracking-wider text-[#8F5B4A] dark:text-[#FB923C]">
                    Chapter {ch.number} Key Takeaways
                  </div>
                  <ul className="space-y-1 list-disc pl-5 text-xs sm:text-[13.5px]">
                    {ch.keyTakeaways.map((kt, i) => (
                      <li key={i}><MathText text={kt} /></li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Chapter 8 Portal Taxonomy Table */}
              {ch.number === 8 && (
                <div className="space-y-3 pt-4">
                  <h4 className="font-['Playfair_Display'] font-normal text-lg text-[#0F172A] dark:text-[#FDFBF7]">
                    Table 8.1 · Sealed Black-Hole Compression Vaults vs. Coupled Class P Portal Nodes
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
                      <thead>
                        <tr className="bg-[#FAF8F3] dark:bg-[#081026] border-b border-[#D6CABE] dark:border-[#334155]">
                          <th className="p-2.5">Node Class</th>
                          <th className="p-2.5">Geometry &amp; NEC Status</th>
                          <th className="p-2.5">Portal Verdict &amp; Benchmark</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                        {H13_BLACK_HOLE_TO_PORTAL_TAXONOMY.map((row) => (
                          <tr key={row.nodeClass}>
                            <td className="p-2.5 font-semibold align-top">
                              <div><MathText text={row.nodeClass} /></div>
                              <div className="font-mono text-[10px] text-[#8F5B4A]">{row.category}</div>
                            </td>
                            <td className="p-2.5 align-top">
                              <div><MathText text={row.geometryAndAction} /></div>
                              <div className="text-[11px] text-[#64748B] dark:text-[#94A3B8] mt-1">
                                <MathText text={row.necAndCausalStatus} />
                              </div>
                            </td>
                            <td className="p-2.5 align-top">
                              <div className="font-medium"><MathText text={row.isPortalOrWhiteHole} /></div>
                              <div className="font-mono text-[11px] text-[#64705B] dark:text-[#86EFAC] mt-1">
                                <MathText text={row.foldingOrBounceMetric} />
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Chapter 9 White-Hole Bounce Table */}
              {ch.number === 9 && (
                <div className="space-y-3 pt-4">
                  <h4 className="font-['Playfair_Display'] font-normal text-lg text-[#0F172A] dark:text-[#FDFBF7]">
                    Table 9.1 · Black-Hole-to-White-Hole Bounce Regimes (Planck to AGN)
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
                      <thead>
                        <tr className="bg-[#FAF8F3] dark:bg-[#081026] border-b border-[#D6CABE] dark:border-[#334155]">
                          <th className="p-2.5">Progenitor Regime</th>
                          <th className="p-2.5">Mass Scale</th>
                          <th className="p-2.5">Interior vs. Exterior Delay</th>
                          <th className="p-2.5">Astrophysical Signal</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                        {H13_WHITE_HOLE_BOUNCE_TABLE.map((wb) => (
                          <tr key={wb.progenitorRegime}>
                            <td className="p-2.5 font-semibold align-top">
                              <MathText text={wb.progenitorRegime} />
                              <div className="font-mono text-[10px] text-[#8F5B4A]">{wb.epistemicStatus}</div>
                            </td>
                            <td className="p-2.5 font-mono text-[11.5px] align-top">
                              <MathText text={wb.massScale} />
                            </td>
                            <td className="p-2.5 align-top text-[12px]">
                              <div><strong>Int:</strong> <MathText text={wb.interiorBounceTime} /></div>
                              <div><strong>Ext:</strong> <MathText text={wb.exteriorBounceDelay} /></div>
                            </td>
                            <td className="p-2.5 align-top">
                              <MathText text={wb.astrophysicalObservable} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Chapter 12 Protocols, Checklists & Ledger */}
              {ch.number === 12 && (
                <div className="space-y-6 pt-4">
                  <div className="space-y-3">
                    <h4 className="font-['Playfair_Display'] font-normal text-lg">
                      Table 12.1 · Experimental Falsification Protocols (P14–P18)
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
                        <thead>
                          <tr className="bg-[#FAF8F3] dark:bg-[#081026] border-b border-[#D6CABE] dark:border-[#334155]">
                            <th className="p-2.5">Protocol</th>
                            <th className="p-2.5">Target, Threshold &amp; Systematics</th>
                            <th className="p-2.5">Falsification Criterion</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {H13_PROTOCOLS_P14_TO_P18.map((p) => (
                            <tr key={p.id}>
                              <td className="p-2.5 font-semibold align-top">
                                <div>{p.id} · {p.name}</div>
                                <div className="font-mono text-[10px] text-[#64705B]">{p.category} · {p.timeline}</div>
                              </td>
                              <td className="p-2.5 align-top">
                                <div><MathText text={p.targetThesis} /></div>
                                <div className="font-mono text-[11px] text-[#8F5B4A] mt-1">
                                  <MathText text={p.quantitativeThreshold} />
                                </div>
                                <div className="text-[11px] text-[#64748B] dark:text-[#94A3B8] mt-1">
                                  <strong>Systematics:</strong> <MathText text={p.systematicsControl} />
                                </div>
                              </td>
                              <td className="p-2.5 align-top">
                                <MathText text={p.falsificationCriterion} />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
                    <div className="rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FAF8F3] dark:bg-[#081026] p-4 space-y-2">
                      <h5 className="font-mono text-xs uppercase tracking-wider text-[#8F5B4A]">
                        Falsification Checklist
                      </h5>
                      <ul className="space-y-1.5 list-disc pl-4 text-xs sm:text-[13px]">
                        {H13_FALSIFICATION_CHECKLIST.map((f, i) => (
                          <li key={i}><MathText text={f} /></li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FAF8F3] dark:bg-[#081026] p-4 space-y-2">
                      <h5 className="font-mono text-xs uppercase tracking-wider text-[#64705B]">
                        Confirmation Checklist
                      </h5>
                      <ul className="space-y-1.5 list-disc pl-4 text-xs sm:text-[13px]">
                        {H13_CONFIRMATION_CHECKLIST.map((c, i) => (
                          <li key={i}><MathText text={c} /></li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-['Playfair_Display'] font-normal text-lg">
                      Table 12.2 · Epistemic Claim–Provenance–Proof Ledger (16 Claims C1–C16)
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-[#FAF8F3] dark:bg-[#081026] border-b border-[#D6CABE] dark:border-[#334155]">
                            <th className="p-2.5">ID &amp; Claim</th>
                            <th className="p-2.5">Category</th>
                            <th className="p-2.5">Mathematical Proof &amp; Primary Provenance</th>
                            <th className="p-2.5">Verification &amp; Explicit Limit</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {H13_EPISTEMIC_LEDGER.map((row) => (
                            <tr key={row.claimId}>
                              <td className="p-2.5 font-medium align-top">
                                <span className="font-mono text-[10.5px] font-bold text-[#8F5B4A] dark:text-[#FB923C] mr-1.5">
                                  {row.claimId}
                                </span>
                                <MathText text={row.claim} />
                              </td>
                              <td className="p-2.5 font-mono text-[10.5px] align-top whitespace-nowrap">{row.category}</td>
                              <td className="p-2.5 align-top">
                                <div><strong>Proof:</strong> <MathText text={row.mathematicalSupport} /></div>
                                <div className="text-[#475569] dark:text-[#CBD9FC] mt-1">
                                  <strong>Provenance:</strong> <MathText text={row.primaryProvenance} />
                                </div>
                              </td>
                              <td className="p-2.5 align-top">
                                <div className="font-mono text-[11px] text-[#64705B] dark:text-[#86EFAC]">
                                  <MathText text={row.computationalCheck} />
                                </div>
                                <div className="text-[#8F5B4A] dark:text-[#FB923C] mt-1">
                                  <strong>Limit:</strong> <MathText text={row.explicitLimitOrNonClaim} />
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-['Playfair_Display'] font-normal text-lg">
                      Table 12.3 · Experimental Proof Apparatus, Readiness Levels (TRL) &amp; Priority Recommendations
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-[#FAF8F3] dark:bg-[#081026] border-b border-[#D6CABE] dark:border-[#334155]">
                            <th className="p-2.5">Device &amp; Plate</th>
                            <th className="p-2.5">TRL &amp; Target Proof</th>
                            <th className="p-2.5">Engineering &amp; Metrology Recommendation</th>
                            <th className="p-2.5">Statistical &amp; Open-Science Gate</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {H13_PROOF_DEVICES_AND_RECOMMENDATIONS.map((dev) => (
                            <tr key={dev.deviceId}>
                              <td className="p-2.5 font-medium align-top">
                                <div className="font-mono text-[10.5px] font-bold text-[#8F5B4A] dark:text-[#FB923C]">
                                  {dev.deviceId} · {dev.linkedPlateOrFigure}
                                </div>
                                <div className="mt-0.5"><MathText text={dev.deviceName} /></div>
                                <div className="font-mono text-[10px] text-[#64705B] dark:text-[#86EFAC] mt-0.5">
                                  {dev.linkedProtocol}
                                </div>
                              </td>
                              <td className="p-2.5 align-top">
                                <div className="font-mono text-[10.5px] font-semibold text-[#0F172A] dark:text-[#FDFBF7]">
                                  {dev.trl}
                                </div>
                                <div className="mt-1 text-[#475569] dark:text-[#CBD9FC]">
                                  <MathText text={dev.provesOrTests} />
                                </div>
                              </td>
                              <td className="p-2.5 align-top">
                                <MathText text={dev.engineeringRecommendation} />
                              </td>
                              <td className="p-2.5 align-top text-[#64705B] dark:text-[#86EFAC]">
                                <MathText text={dev.statisticalAndOpenScienceGate} />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Chapter Raster Plates & Vector Schematics */}
              {H13_ARCHIVAL_PLATES.filter((pl) => pl.anchorChapter === ch.number).map((pl) => (
                <H13PlateCard key={pl.id} plate={pl} />
              ))}
              {H13_FIGURES.filter((fg) => fg.anchorChapter === ch.number).map((fg) => (
                <H13FigureCard key={fg.id} figure={fg} />
              ))}
            </section>
          ))}

          {/* Plain-Language FAQ Section */}
          <section
            id="h13-faq"
            className="rounded-xl border border-[#D6CABE] dark:border-[#1E293B] bg-[#FFFFFF] dark:bg-[#0B1530] p-6 sm:p-10 space-y-6"
          >
            <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl border-b border-[#EAE2D2] dark:border-[#1E293B] pb-3">
              Common Questions &amp; Misconceptions Clarified
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {H13_LAYMAN_FAQ.map((faq) => (
                <div
                  key={faq.id}
                  className="rounded-lg border border-[#EAE2D2] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] p-5 space-y-2"
                >
                  <div className="flex items-center justify-between text-[10.5px] font-mono text-[#64705B] dark:text-[#86EFAC]">
                    <span>{faq.id}</span>
                    <span>{faq.category}</span>
                  </div>
                  <h3 className="font-['Playfair_Display'] font-normal text-lg text-[#0F172A] dark:text-[#FDFBF7]">
                    <MathText text={faq.question} />
                  </h3>
                  <p className="text-xs sm:text-[13.5px] font-medium text-[#8F5B4A] dark:text-[#FB923C]">
                    <MathText text={faq.shortAnswer} />
                  </p>
                  <p className="text-xs sm:text-[13.5px] leading-relaxed text-[#475569] dark:text-[#CBD9FC]">
                    <MathText text={faq.detailedExplanation} />
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Consolidated Appendices A-J & References */}
          <section
            id="h13-appendices"
            className="rounded-xl border border-[#D6CABE] dark:border-[#1E293B] bg-[#FFFFFF] dark:bg-[#0B1530] p-6 sm:p-10 space-y-8"
          >
            <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl border-b border-[#EAE2D2] dark:border-[#1E293B] pb-3">
              Consolidated Appendices (A–J) &amp; Index
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] p-4 space-y-1.5">
                <div className="font-mono uppercase tracking-wider text-[#8F5B4A]">Front-Matter Tables &amp; Equations</div>
                {H13_FRONTMATTER_TABLES_LIST.map((t) => (
                  <div key={t.id}><strong>{t.id}</strong> ({t.location}): {t.title}</div>
                ))}
                {H13_FRONTMATTER_EQUATIONS_LIST.slice(0, 10).map((e) => (
                  <div key={e.label}><strong>{e.label}</strong>: <MathText text={e.title} /></div>
                ))}
              </div>
              <div className="rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] p-4 space-y-1.5">
                <div className="font-mono uppercase tracking-wider text-[#64705B]">Theorems &amp; Core Definitions</div>
                {H13_THEOREMS_LIST.map((th) => (
                  <div key={th.id}><strong>{th.id}</strong>: <MathText text={th.title} /></div>
                ))}
                {H13_DEFINITIONS_LIST.map((d) => (
                  <div key={d.id}><strong>{d.id}</strong>: <MathText text={d.term} /></div>
                ))}
              </div>
            </div>

            {H13_APPENDICES.map((app) => (
              <div
                key={app.letter}
                id={`h13-app-${app.letter}`}
                className="pt-6 border-t border-[#EAE2D2] dark:border-[#1E293B] space-y-4"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-['Playfair_Display'] font-normal text-xl sm:text-2xl text-[#8F5B4A] dark:text-[#FB923C]">
                    Appendix {app.letter}: <MathText text={app.title} />
                  </h3>
                  <span className="font-mono text-[10.5px] text-[#64748B]">{app.category}</span>
                </div>
                <p className="text-[15px] italic text-[#475569] dark:text-[#CBD9FC]">
                  <MathText text={app.summary} />
                </p>
                {showFormalBoxes &&
                  app.equations.map((eq) => (
                    <H13EquationBox key={eq.label} eq={eq} showPlain={showPlainBridges} showUnits />
                  ))}
                {app.bodyParagraphs.map((p, idx) => (
                  <p key={idx} className="text-[16px] leading-[1.7] text-justify">
                    <MathText text={p} />
                  </p>
                ))}

                {app.letter === 'G' && (
                  <div className="space-y-2 pt-2">
                    <h4 className="font-['Playfair_Display'] font-normal text-lg">
                      Table G.1 · Unified 5D + 4D Action Sectors, Field Equations &amp; Constraints
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-[#FAF8F3] dark:bg-[#081026] border-b border-[#D6CABE] dark:border-[#334155]">
                            <th className="p-2.5">Action Sector</th>
                            <th className="p-2.5">Lagrangian Density Term</th>
                            <th className="p-2.5">Euler–Lagrange Equation</th>
                            <th className="p-2.5">Symmetry &amp; Bounds</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {H13_ACTION_FIELD_TABLE.map((row) => (
                            <tr key={row.sector}>
                              <td className="p-2.5 font-semibold align-top">
                                <div><MathText text={row.sector} /></div>
                                <div className="font-mono text-[10px] text-[#8F5B4A]">{row.category}</div>
                              </td>
                              <td className="p-2.5 font-mono text-[11px] align-top"><MathText text={row.lagrangianTerm} /></td>
                              <td className="p-2.5 font-mono text-[11px] align-top"><MathText text={row.eulerLagrangeEquation} /></td>
                              <td className="p-2.5 align-top"><MathText text={row.symmetryOrConstraint} /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {app.letter === 'H' && (
                  <div className="space-y-2 pt-2">
                    <h4 className="font-['Playfair_Display'] font-normal text-lg">
                      Table H.1 · Multi-Experiment Extra-Dimension &amp; Kaluza–Klein Constraints
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-[#FAF8F3] dark:bg-[#081026] border-b border-[#D6CABE] dark:border-[#334155]">
                            <th className="p-2.5">Experiment / Domain</th>
                            <th className="p-2.5">Scale &amp; Observational Bound</th>
                            <th className="p-2.5">H13 KK / Radion Match</th>
                            <th className="p-2.5">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {H13_KK_CONSTRAINTS_TABLE.map((row) => (
                            <tr key={row.experimentOrDomain}>
                              <td className="p-2.5 font-semibold align-top"><MathText text={row.experimentOrDomain} /></td>
                              <td className="p-2.5 align-top">
                                <div className="font-mono text-[11px] text-[#8F5B4A]"><MathText text={row.scaleProbed} /></div>
                                <div className="mt-1"><MathText text={row.observationalBound} /></div>
                              </td>
                              <td className="p-2.5 align-top"><MathText text={row.h13ParameterMatch} /></td>
                              <td className="p-2.5 font-mono text-[10.5px] text-[#64705B] align-top"><MathText text={row.status} /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {app.letter === 'I' && (
                  <div className="space-y-2 pt-2">
                    <h4 className="font-['Playfair_Display'] font-normal text-lg">
                      Table I.1 · Five-Step Proof of Non-AdS GJW Traversable Portal Transfer
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-[#FAF8F3] dark:bg-[#081026] border-b border-[#D6CABE] dark:border-[#334155]">
                            <th className="p-2.5">Proof Step</th>
                            <th className="p-2.5">AdS Convention Replaced</th>
                            <th className="p-2.5">H13 Boundary-Free Mechanism &amp; Identity</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {H13_GJW_PROOF_STEPS.map((st) => (
                            <tr key={st.stepNumber}>
                              <td className="p-2.5 font-semibold align-top whitespace-nowrap">
                                <div className="text-[#8F5B4A] font-mono text-[10.5px]">{st.stepNumber}</div>
                                <div><MathText text={st.stageTitle} /></div>
                              </td>
                              <td className="p-2.5 align-top text-[#64748B] dark:text-[#94A3B8]"><MathText text={st.adsOriginalAssumption} /></td>
                              <td className="p-2.5 align-top">
                                <div><MathText text={st.h13NonAdsProofMechanism} /></div>
                                <div className="font-mono text-[11px] text-[#64705B] dark:text-[#86EFAC] mt-1">
                                  <MathText text={st.keyInequalityOrIdentity} />
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {app.letter === 'J' && (
                  <div className="space-y-2 pt-2">
                    <h4 className="font-['Playfair_Display'] font-normal text-lg">
                      Table J.1 · Reproducible RK4 White-Hole Bounce Numerical Benchmarks (B1–B6)
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-[#FAF8F3] dark:bg-[#081026] border-b border-[#D6CABE] dark:border-[#334155]">
                            <th className="p-2.5">Benchmark &amp; Mass</th>
                            <th className="p-2.5">Bounce Radius &amp; Accel</th>
                            <th className="p-2.5">Interior / Exterior Delay</th>
                            <th className="p-2.5">RK4 Check &amp; Observable</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                          {H13_WH_PIPELINE_SPEC.map((b) => (
                            <tr key={b.benchmarkId}>
                              <td className="p-2.5 font-semibold align-top">
                                <div><MathText text={b.benchmarkId} /></div>
                                <div className="font-mono text-[11px] text-[#8F5B4A]"><MathText text={b.massGrams} /></div>
                              </td>
                              <td className="p-2.5 font-mono text-[11px] align-top">
                                <div><MathText text={b.bounceRadiusM} /></div>
                                <div className="text-[#64705B] dark:text-[#86EFAC]"><MathText text={b.bounceAccelMs2} /></div>
                              </td>
                              <td className="p-2.5 align-top">
                                <div><strong>Int:</strong> <MathText text={b.interiorProperSec} /></div>
                                <div><strong>Ext:</strong> <MathText text={b.exteriorDelayBranch} /></div>
                              </td>
                              <td className="p-2.5 align-top"><MathText text={b.observableOrRk4Check} /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="pt-6 border-t border-[#EAE2D2] dark:border-[#1E293B] space-y-3">
              <h3 className="font-['Playfair_Display'] font-normal text-2xl">References</h3>
              <ol className="space-y-2 text-sm list-decimal pl-5">
                {H13_REFERENCES.map((r) => (
                  <li key={r.id}>{r.citation}</li>
                ))}
              </ol>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};
