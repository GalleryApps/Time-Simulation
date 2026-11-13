/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Devoted Audited Preprint Monograph Page:
 * "Information-Geometric Resonant Time (IGRT): A Diffeomorphism-Invariant
 *  Principal Fiber Bundle Framework for the Canonical Problem of Time"
 *
 * - Zero LaTeX: pure Unicode & HTML <sup>/<sub> typography
 * - Refined museum-editorial scale (.igrt-monograph: 18.5px body, 32px H1, 26px H2, 20.5px H3, 1.66 line-height)
 * - Playfair Display Regular (weight 400, strictly never bold) headlines
 * - Isolated iframe Print-to-PDF & single self-contained HTML download + A4 direct PDF download
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  PAPER_META,
  MASTER_EQUATION_ABSTRACT,
  PAPER_BIBTEX,
  PAPER_APA,
  PAPER_RIS,
  PAPER_POSTULATES,
  PAPER_CHAPTERS,
  AUDITED_TEST_PROTOCOLS,
  AUDITED_CLOSURE_THEOREMS,
  PAPER_APPENDICES,
  PAPER_REFERENCES,
  buildFullMarkdownPaper,
  type PaperEquation
} from '../types/harmonizedPaperData';
import {
  PLAIN_LANGUAGE_SUMMARY,
  SHORTENED_ABSTRACT,
  SCOPE_AND_NON_CLAIMS,
  LIST_OF_SYMBOLS,
  ACRONYMS_GLOSSARY,
  LIST_OF_TABLES,
  DIMENSIONAL_ANALYSIS_TABLE,
  EQUATION_INDEX,
  FRAMEWORKS_COMPARISON_TABLE,
  ETHICS_AND_GOVERNANCE,
  VERSION_CHANGE_LOG
} from '../types/harmonizedPaperApparatus';
import { PAPER_FIGURES, HarmonizedPaperFigure } from './HarmonizedPaperFigures';
import { MathText } from './MathText';
import { buildSelfContainedMonographHtml } from '../utils/generateHarmonizedPaperHtml';
import { generateHarmonizedPaperPdf } from '../utils/generateHarmonizedPaperPdf';

interface HarmonizedResearchPaperViewProps {
  onNavigateToModel?: () => void;
  onNavigateToStressTest?: () => void;
}

const UnicodeEquationBox: React.FC<{ eq: PaperEquation }> = ({ eq }) => (
  <div className="igrt-eq-box dark:bg-[#081026] dark:border-[#334155]">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 overflow-x-auto">
      <div
        className="flex-1 text-center text-[#0F172A] dark:text-[#FDFBF7] leading-[1.45]"
        style={{ fontSize: '0.96em' }}
        // Controlled static HTML with <i>, <sup>, <sub>
        dangerouslySetInnerHTML={{ __html: eq.unicodeHtml }}
      />
      <span className="font-mono text-[14px] text-[#8B4513] dark:text-[#FB923C] shrink-0 text-right tabular-nums">
        {eq.label}
      </span>
    </div>
    <div
      className="mt-3 pt-2.5 border-t border-[#E2D9C8] dark:border-[#1E293B] text-center italic text-[#475569] dark:text-[#94A3B8]"
      style={{ fontSize: 'var(--igrt-caption-size)', lineHeight: 1.52 }}
    >
      <MathText text={eq.caption} />
    </div>
  </div>
);

export const HarmonizedResearchPaperView: React.FC<HarmonizedResearchPaperViewProps> = ({
  onNavigateToModel,
  onNavigateToStressTest
}) => {
  const [readingMode, setReadingMode] = useState<'continuous' | 'chapter'>('continuous');
  const [focusedAnchor, setFocusedAnchor] = useState<string>('chapter-1');
  const [activeSubAnchor, setActiveSubAnchor] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showCiteModal, setShowCiteModal] = useState<boolean>(false);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  const [pdfDownloading, setPdfDownloading] = useState<boolean>(false);
  const printFrameRef = useRef<HTMLIFrameElement | null>(null);
  const monographRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateProgress = () => {
      const el = monographRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = Math.max(1, el.offsetHeight - window.innerHeight * 0.7);
      const passed = Math.max(0, -rect.top + window.innerHeight * 0.25);
      setScrollProgress(Math.min(100, Math.max(0, (passed / total) * 100)));
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, [readingMode, focusedAnchor]);

  useEffect(() => {
    if (readingMode !== 'continuous' || typeof IntersectionObserver === 'undefined') return;
    const ids = [
      'frontmatter',
      ...PAPER_CHAPTERS.flatMap((c) => [c.anchorId, ...c.subsections.map((s) => s.anchorId)]),
      'appendices',
      'governance',
      'references'
    ];
    const subToChap = new Map<string, string>();
    for (const c of PAPER_CHAPTERS) {
      for (const s of c.subsections) subToChap.set(s.anchorId, c.anchorId);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const parent = subToChap.get(id);
            if (parent) {
              setFocusedAnchor(parent);
              setActiveSubAnchor(id);
            } else {
              setFocusedAnchor(id);
              setActiveSubAnchor('');
            }
          }
        }
      },
      { rootMargin: '-22% 0px -65% 0px', threshold: 0.01 }
    );

    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, [readingMode]);

  const handleDownloadPdf = async () => {
    setPdfDownloading(true);
    try {
      await generateHarmonizedPaperPdf();
    } finally {
      setTimeout(() => setPdfDownloading(false), 1200);
    }
  };

  const handlePrintCleanHtml = () => {
    const html = buildSelfContainedMonographHtml();
    if (printFrameRef.current) {
      printFrameRef.current.srcdoc = html;
      printFrameRef.current.onload = () => {
        try {
          printFrameRef.current?.contentWindow?.focus();
          printFrameRef.current?.contentWindow?.print();
        } catch {
          window.print();
        }
      };
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

  const jumpToSection = (anchorId: string, topSectionAnchor?: string) => {
    setFocusedAnchor(topSectionAnchor || anchorId);
    setTimeout(() => {
      const el = document.getElementById(anchorId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 40);
  };

  const visibleChapters =
    readingMode === 'continuous'
      ? PAPER_CHAPTERS
      : PAPER_CHAPTERS.filter((ch) => ch.anchorId === focusedAnchor);

  const showFrontmatter = readingMode === 'continuous' || focusedAnchor === 'frontmatter';
  const showAppendices = readingMode === 'continuous' || focusedAnchor === 'appendices';
  const showGovernance = readingMode === 'continuous' || focusedAnchor === 'governance';
  const showReferences = readingMode === 'continuous' || focusedAnchor === 'references';

  return (
    <div ref={monographRef} className="max-w-7xl mx-auto pb-24 space-y-8 text-[#111827] dark:text-[#F8FAFC]">
      {/* Subtle Top Reading-Depth Hairline */}
      <div
        className="print:hidden fixed top-0 left-0 right-0 h-[2px] z-50 bg-transparent pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-[#8B4513] dark:bg-[#EA580C] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress.toFixed(1)}%` }}
        />
      </div>

      {/* Hidden Print Iframe for isolated A4 Self-Contained HTML -> Print-to-PDF (no window.open) */}
      <iframe
        ref={printFrameRef}
        title="Printable Monograph Frame"
        className="hidden"
        aria-hidden="true"
      />

      {/* INTERACTIVE ACTION & EXPORT TOOLBAR */}
      <div className="print:hidden rounded-2xl border border-[#D6CABE] dark:border-[#1E293B] bg-[#FAF8F3] dark:bg-[#0B1530] p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 text-[13px] font-['Poppins']">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() =>
              downloadTextAsset(
                buildSelfContainedMonographHtml(),
                'IGRT_Harmonized_Monograph_SelfContained.html',
                'text/html;charset=utf-8'
              )
            }
            className="px-4 py-2 rounded-lg bg-[#8B4513] dark:bg-[#EA580C] text-white font-medium hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
          >
            Download Self-Contained HTML (.html)
          </button>
          <button
            onClick={handleDownloadPdf}
            disabled={pdfDownloading}
            className="px-4 py-2 rounded-lg bg-[#0C1836] dark:bg-[#1E293B] text-white font-medium hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 disabled:opacity-60"
          >
            {pdfDownloading ? 'Generating A4 PDF…' : 'Download A4 PDF (.pdf)'}
          </button>
          <button
            onClick={handlePrintCleanHtml}
            className="px-3.5 py-2 rounded-lg border border-[#D6CABE] dark:border-[#334155] bg-white dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD5E1] hover:border-[#8B4513] transition-colors whitespace-nowrap shrink-0"
          >
            Print Monograph (A4 CSS)
          </button>
          <button
            onClick={() =>
              downloadTextAsset(
                buildFullMarkdownPaper(),
                'IGRT_Harmonized_Monograph.md',
                'text/markdown;charset=utf-8'
              )
            }
            className="px-3.5 py-2 rounded-lg border border-[#D6CABE] dark:border-[#334155] bg-white dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD5E1] hover:border-[#8B4513] transition-colors whitespace-nowrap shrink-0"
          >
            Download Markdown (.md)
          </button>
          <button
            onClick={() => setShowCiteModal(true)}
            className="px-3.5 py-2 rounded-lg border border-[#D6CABE] dark:border-[#334155] bg-white dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD5E1] hover:border-[#8B4513] transition-colors whitespace-nowrap shrink-0"
          >
            Cite This Work
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center p-1 rounded-lg bg-white dark:bg-[#081026] border border-[#D6CABE] dark:border-[#334155]">
            <button
              onClick={() => setReadingMode('continuous')}
              className={`px-3 py-1 rounded-md text-[12px] transition-colors whitespace-nowrap shrink-0 ${
                readingMode === 'continuous'
                  ? 'bg-[#0C1836] dark:bg-[#EA580C] text-white font-medium'
                  : 'text-[#64748B] dark:text-[#94A3B8]'
              }`}
            >
              Continuous Monograph
            </button>
            <button
              onClick={() => setReadingMode('chapter')}
              className={`px-3 py-1 rounded-md text-[12px] transition-colors whitespace-nowrap shrink-0 ${
                readingMode === 'chapter'
                  ? 'bg-[#0C1836] dark:bg-[#EA580C] text-white font-medium'
                  : 'text-[#64748B] dark:text-[#94A3B8]'
              }`}
            >
              Single Section Focus
            </button>
          </div>
          {onNavigateToModel && (
            <button
              onClick={onNavigateToModel}
              className="px-3 py-1.5 rounded-lg border border-[#D6CABE] dark:border-[#334155] bg-white dark:bg-[#081026] text-[12px] hover:border-[#EA580C]"
            >
              Interactive Model ↗
            </button>
          )}
          {onNavigateToStressTest && (
            <button
              onClick={onNavigateToStressTest}
              className="px-3 py-1.5 rounded-lg bg-[#15803D] text-white text-[12px] hover:bg-[#166534]"
            >
              Stress-Test Matrix ↗
            </button>
          )}
        </div>
      </div>

      {/* GRID: SIDEBAR TOC + SCOPED .igrt-monograph BODY */}
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 items-start">
        {/* STICKY SIDEBAR TABLE OF CONTENTS */}
        <aside className="hidden lg:block print:hidden sticky top-[104px] rounded-2xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-4 max-h-[calc(100vh-120px)] overflow-y-auto space-y-3 text-xs font-['Poppins']">
          <div className="border-b border-[#D6CABE] dark:border-[#1E293B] pb-2">
            <div className="font-cinzel text-[11px] uppercase tracking-wider text-[#8B4513] dark:text-[#FDBA74]">
              Table of Contents
            </div>
            <div className="text-[11px] text-[#64748B] dark:text-[#94A3B8]">
              Chapters 1–8 · App. A–J · Refs [1–91]
            </div>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => jumpToSection('frontmatter')}
              className={`block w-full text-left font-medium hover:text-[#8B4513] ${
                focusedAnchor === 'frontmatter' ? 'text-[#8B4513] dark:text-[#FB923C]' : ''
              }`}
            >
              Summary, Symbols &amp; Indices
            </button>

            {PAPER_CHAPTERS.map((ch) => (
              <div key={ch.anchorId} className="space-y-0.5">
                <button
                  onClick={() => jumpToSection(ch.anchorId)}
                  className={`block w-full text-left font-medium leading-snug hover:text-[#8B4513] ${
                    focusedAnchor === ch.anchorId ? 'text-[#8B4513] dark:text-[#FB923C]' : ''
                  }`}
                >
                  Ch. {ch.number}: <MathText text={ch.title.replace(/^[^:]+:\s*/, '')} />
                </button>
                <div className="pl-2.5 space-y-0.5">
                  {ch.subsections.map((sub) => (
                    <button
                      key={sub.anchorId}
                      onClick={() => jumpToSection(sub.anchorId, ch.anchorId)}
                      className={`block w-full text-left text-[11px] truncate transition-colors ${
                        activeSubAnchor === sub.anchorId
                          ? 'text-[#8B4513] dark:text-[#FB923C] font-medium'
                          : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-white'
                      }`}
                      title={`${sub.number} ${sub.title}`}
                    >
                      {sub.number} <MathText text={sub.title} />
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <button
              onClick={() => jumpToSection('appendices')}
              className={`block w-full text-left font-medium pt-1 hover:text-[#8B4513] ${
                focusedAnchor === 'appendices' ? 'text-[#8B4513] dark:text-[#FB923C]' : ''
              }`}
            >
              Appendices A–J &amp; FAQ
            </button>
            <button
              onClick={() => jumpToSection('governance')}
              className={`block w-full text-left font-medium hover:text-[#8B4513] ${
                focusedAnchor === 'governance' ? 'text-[#8B4513] dark:text-[#FB923C]' : ''
              }`}
            >
              Governance &amp; Change Log
            </button>
            <button
              onClick={() => jumpToSection('references')}
              className={`block w-full text-left font-medium hover:text-[#8B4513] ${
                focusedAnchor === 'references' ? 'text-[#8B4513] dark:text-[#FB923C]' : ''
              }`}
            >
              References ({PAPER_REFERENCES.length})
            </button>
          </nav>
        </aside>

        {/* SCOPED MONOGRAPH CONTAINER WITH ARCHIVAL PAGE FOLIO BREAKS */}
        <div className="igrt-monograph min-w-0 space-y-14 sm:space-y-16">
          {/* PAGE 1: MASTHEAD, TITLE, RESEARCH TEAM & SHORTENED ABSTRACT */}
          <article className="rounded-2xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-10 lg:p-14 space-y-8 shadow-sm">
            <div className="border-b-2 border-[#0F172A] dark:border-[#475569] pb-4 space-y-2">
              <div
                className="font-cinzel uppercase tracking-wider text-[#8B4513] dark:text-[#FDBA74]"
                style={{ fontSize: 'var(--igrt-meta-size)', lineHeight: 1.35 }}
              >
                {PAPER_META.publicationStatus} · {PAPER_META.edition}
              </div>
              <div
                className="font-mono text-[#64748B] dark:text-[#94A3B8] break-words"
                style={{ fontSize: '14px', lineHeight: 1.45 }}
              >
                {PAPER_META.eprint} · {PAPER_META.doi}
              </div>
            </div>

            <h1
              className="text-[#0F172A] dark:text-[#FDFBF7] text-balance"
              style={{ fontSize: 'var(--igrt-h1-size)', lineHeight: 1.2 }}
            >
              <MathText text={PAPER_META.title} />
            </h1>

            {/* Research Team Masthead (ORCIDs reside strictly on Author Masthead, never in References) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {PAPER_META.authors.map((author) => (
                <div
                  key={author.orcid}
                  className="p-4 rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] space-y-1.5"
                >
                  <div style={{ fontSize: '18px', lineHeight: 1.3 }} className="text-[#0F172A] dark:text-white">
                    {author.name}
                  </div>
                  <div>
                    <a
                      href={`https://orcid.org/${author.orcid}`}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[12px] text-[#15803D] dark:text-[#4ADE80] hover:underline break-all"
                    >
                      https://orcid.org/{author.orcid} ↗
                    </a>
                  </div>
                  <div className="text-[13px] text-[#64748B] dark:text-[#94A3B8] leading-[1.4]">
                    {author.affiliation}
                  </div>
                </div>
              ))}
            </div>

            {/* Formal Abstract */}
            <section className="rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#D6CABE] dark:border-[#1E293B] pb-3">
                <h2 style={{ fontSize: 'var(--igrt-h3-size)', lineHeight: 1.25 }}>Abstract</h2>
              </div>

              {SHORTENED_ABSTRACT.paragraphs.map((para, i) => (
                <p key={i} className="text-[#1E293B] dark:text-[#CBD5E1]">
                  <MathText text={para} />
                </p>
              ))}

              <UnicodeEquationBox eq={MASTER_EQUATION_ABSTRACT} />

              <div className="pt-3 border-t border-[#D6CABE] dark:border-[#1E293B] space-y-1.5" style={{ fontSize: '15px', lineHeight: 1.5 }}>
                <div>
                  <strong>Keywords:</strong> <MathText text={PAPER_META.keywords.join(' · ')} />
                </div>
                <div className="text-[#475569] dark:text-[#94A3B8]">
                  <strong>PhySH:</strong> {PAPER_META.physh}
                </div>
                <div className="font-mono text-[13px] text-[#64748B] dark:text-[#94A3B8]">
                  MSC 2020: {PAPER_META.msc2020}
                </div>
              </div>
            </section>
          </article>

          {/* EDITORIAL SUMMARY, SYMBOLS & INDICES */}
          {showFrontmatter && (
            <>
              {readingMode === 'continuous' && (
                <div className="igrt-page-break-banner print:hidden" aria-hidden="true">
                  <span className="h-px flex-1 bg-[#D6CABE] dark:bg-[#334155]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8B4513] dark:text-[#FDBA74] px-2">
                    New Page · Summary, Symbols &amp; Indices
                  </span>
                  <span className="h-px flex-1 bg-[#D6CABE] dark:bg-[#334155]" />
                </div>
              )}
              <section
                id="frontmatter"
                className="igrt-chapter-break rounded-2xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-10 lg:p-14 space-y-12 scroll-mt-32 shadow-sm"
              >
                <div className="border-b border-[#D6CABE] dark:border-[#1E293B] pb-6 space-y-2">
                  <div className="font-cinzel text-[13px] uppercase tracking-wider text-[#8B4513] dark:text-[#FDBA74]">
                    Summary &amp; Editorial Reference Apparatus
                  </div>
                  <h2 style={{ fontSize: 'var(--igrt-h2-size)', lineHeight: 1.2 }}>
                    Summary, Symbols &amp; Indices
                  </h2>
                </div>

                <div className="space-y-4 py-2">
                  <h3 style={{ fontSize: 'var(--igrt-h3-size)' }}>Plain-Language Summary</h3>
                  <p className="text-[#1E293B] dark:text-[#CBD5E1]"><MathText text={PLAIN_LANGUAGE_SUMMARY} /></p>
                </div>

                <div className="space-y-4 pt-6 border-t border-[#EAE2D2] dark:border-[#1E293B]">
                  <h3 style={{ fontSize: 'var(--igrt-h3-size)' }}>Scope &amp; Architectural Closures</h3>
                  <div className="space-y-4">
                    {SCOPE_AND_NON_CLAIMS.map((sc) => (
                      <div
                        key={sc.title}
                        className="p-4 rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026]"
                      >
                        <div className="text-[#8B4513] dark:text-[#FB923C] mb-1.5" style={{ fontSize: '18px' }}>
                          <MathText text={sc.title} />
                        </div>
                        <p className="mb-0 text-[#334155] dark:text-[#CBD5E1]" style={{ marginBottom: 0 }}>
                          <MathText text={sc.detail} />
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              {/* List of Figures & Tables */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] space-y-3">
                  <h3 style={{ fontSize: 'var(--igrt-h3-size)' }}>List of Figures</h3>
                  <ul className="space-y-2 list-disc pl-6" style={{ fontSize: '16px', lineHeight: 1.5 }}>
                    {PAPER_FIGURES.map((f) => (
                      <li key={f.id}>
                        <button
                          onClick={() => jumpToSection(f.anchorId, f.chapterAnchor)}
                          className="text-left hover:underline text-[#8B4513] dark:text-[#FB923C]"
                        >
                          Figure {f.id}: <MathText text={f.title} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] space-y-3">
                  <h3 style={{ fontSize: 'var(--igrt-h3-size)' }}>List of Tables</h3>
                  <ul className="space-y-2 list-disc pl-6" style={{ fontSize: '16px', lineHeight: 1.5 }}>
                    {LIST_OF_TABLES.map((t) => (
                      <li key={t.number}>
                        <strong>{t.number}:</strong> <MathText text={t.title} /> ({t.location})
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Table 0.1: List of Symbols */}
              <div className="space-y-3">
                <h3 style={{ fontSize: 'var(--igrt-h3-size)' }}>Table 0.1: List of Symbols &amp; Collision Rules</h3>
                <div className="overflow-x-auto rounded-lg border border-[#D6CABE] dark:border-[#334155]">
                  <table className="w-full text-left igrt-tabular" style={{ fontSize: '14px', lineHeight: 1.52 }}>
                    <thead className="bg-[#FAF6EE] dark:bg-[#081026] border-b border-[#D6CABE] dark:border-[#334155]">
                      <tr>
                        <th className="p-3 font-normal">Symbol</th>
                        <th className="p-3 font-normal">Definition</th>
                        <th className="p-3 font-normal">Units</th>
                        <th className="p-3 font-normal">Collision Disambiguation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2D9C8] dark:divide-[#1E293B]">
                      {LIST_OF_SYMBOLS.map((sym) => (
                        <tr key={sym.symbol}>
                          <td className="p-3 font-mono text-[#8B4513] dark:text-[#FB923C] whitespace-nowrap">
                            <MathText text={sym.symbol} />
                          </td>
                          <td className="p-3"><MathText text={sym.name} /></td>
                          <td className="p-3 font-mono text-[12.5px]"><MathText text={sym.units} /></td>
                          <td className="p-3 text-[#475569] dark:text-[#94A3B8]"><MathText text={sym.collisionNote} /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Acronyms Glossary */}
              <div className="space-y-3">
                <h3 style={{ fontSize: 'var(--igrt-h3-size)' }}>Acronyms Glossary</h3>
                <div className="overflow-x-auto rounded-lg border border-[#D6CABE] dark:border-[#334155]">
                  <table className="w-full text-left igrt-tabular" style={{ fontSize: '14px', lineHeight: 1.52 }}>
                    <thead className="bg-[#FAF6EE] dark:bg-[#081026] border-b border-[#D6CABE] dark:border-[#334155]">
                      <tr>
                        <th className="p-3 font-normal">Acronym</th>
                        <th className="p-3 font-normal">Expansion</th>
                        <th className="p-3 font-normal">Operational Definition</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2D9C8] dark:divide-[#1E293B]">
                      {ACRONYMS_GLOSSARY.map((acr) => (
                        <tr key={acr.term}>
                          <td className="p-3 font-mono text-[#8B4513] dark:text-[#FB923C] whitespace-nowrap">{acr.term}</td>
                          <td className="p-3">{acr.expansion}</td>
                          <td className="p-3 text-[#475569] dark:text-[#94A3B8]"><MathText text={acr.definition} /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 0.2: Dimensional-Analysis Table */}
              <div className="space-y-3">
                <h3 style={{ fontSize: 'var(--igrt-h3-size)' }}>Table 0.2: Dimensional-Analysis Closure</h3>
                <div className="overflow-x-auto rounded-lg border border-[#D6CABE] dark:border-[#334155]">
                  <table className="w-full text-left igrt-tabular" style={{ fontSize: '14px', lineHeight: 1.52 }}>
                    <thead className="bg-[#FAF6EE] dark:bg-[#081026] border-b border-[#D6CABE] dark:border-[#334155]">
                      <tr>
                        <th className="p-3 font-normal">Quantity</th>
                        <th className="p-3 font-normal">Expression</th>
                        <th className="p-3 font-normal">SI / Natural</th>
                        <th className="p-3 font-normal">Derivation Note</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2D9C8] dark:divide-[#1E293B]">
                      {DIMENSIONAL_ANALYSIS_TABLE.map((dim) => (
                        <tr key={dim.quantity}>
                          <td className="p-3"><MathText text={dim.quantity} /></td>
                          <td className="p-3 font-mono text-[12.5px]"><MathText text={dim.expression} /></td>
                          <td className="p-3"><MathText text={dim.siUnits} /> / <MathText text={dim.naturalUnits} /></td>
                          <td className="p-3 text-[#475569] dark:text-[#94A3B8]"><MathText text={dim.auditNote} /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 0.3: Equation Index */}
              <div className="space-y-3">
                <h3 style={{ fontSize: 'var(--igrt-h3-size)' }}>Table 0.3: Equation Index</h3>
                <div className="overflow-x-auto rounded-lg border border-[#D6CABE] dark:border-[#334155]">
                  <table className="w-full text-left igrt-tabular" style={{ fontSize: '14px', lineHeight: 1.52 }}>
                    <thead className="bg-[#FAF6EE] dark:bg-[#081026] border-b border-[#D6CABE] dark:border-[#334155]">
                      <tr>
                        <th className="p-3 font-normal">Eq.</th>
                        <th className="p-3 font-normal">Title</th>
                        <th className="p-3 font-normal">Section</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2D9C8] dark:divide-[#1E293B]">
                      {EQUATION_INDEX.map((eq) => (
                        <tr key={eq.label}>
                          <td className="p-3 font-mono text-[#8B4513] dark:text-[#FB923C] tabular-nums whitespace-nowrap">{eq.label}</td>
                          <td className="p-3"><MathText text={eq.title} /></td>
                          <td className="p-3"><MathText text={eq.section} /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              </section>
            </>
          )}

          {/* CHAPTERS 1–8 */}
          {visibleChapters.map((chapter) => (
            <React.Fragment key={chapter.anchorId}>
              {readingMode === 'continuous' && (
                <div className="igrt-page-break-banner print:hidden" aria-hidden="true">
                  <span className="h-px flex-1 bg-[#D6CABE] dark:bg-[#334155]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8B4513] dark:text-[#FDBA74] px-2">
                    New Page · Chapter {chapter.number}
                  </span>
                  <span className="h-px flex-1 bg-[#D6CABE] dark:bg-[#334155]" />
                </div>
              )}
              <section
                id={chapter.anchorId}
                className="igrt-chapter-break rounded-2xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-10 lg:p-14 space-y-12 scroll-mt-32 shadow-sm"
              >
                <div className="border-b border-[#D6CABE] dark:border-[#1E293B] pb-6 space-y-3">
                  <div className="font-cinzel uppercase tracking-widest text-[#8B4513] dark:text-[#FDBA74]" style={{ fontSize: '14px' }}>
                    Chapter {chapter.number}
                  </div>
                  <h2 style={{ fontSize: 'var(--igrt-h2-size)', lineHeight: 1.2 }}><MathText text={chapter.title} /></h2>
                  <p className="italic text-[#475569] dark:text-[#94A3B8]" style={{ marginBottom: 0 }}>
                    <MathText text={chapter.leadSummary} />
                  </p>
                </div>

                <div className="space-y-12">
                  {chapter.subsections.map((sub, subIdx) => {
                    const subFigs = PAPER_FIGURES.filter(
                      (f) => f.afterSubsectionAnchor === sub.anchorId
                    );
                    return (
                      <div
                        key={sub.anchorId}
                        id={sub.anchorId}
                        className={`space-y-5 scroll-mt-32 pb-4 ${
                          subIdx > 0 ? 'pt-8 border-t border-[#EAE2D2] dark:border-[#1E293B]' : 'pt-2'
                        }`}
                      >
                        <h3 className="pb-1" style={{ fontSize: 'var(--igrt-h3-size)', lineHeight: 1.3 }}>
                          <span className="font-mono text-[#8B4513] dark:text-[#FB923C] mr-2.5" style={{ fontSize: '18.5px' }}>
                            {sub.number}
                          </span>
                          <MathText text={sub.title} />
                        </h3>

                        {sub.paragraphs.map((p, idx) => (
                          <p key={idx} className="text-[#1E293B] dark:text-[#CBD5E1]">
                            <MathText text={p} />
                          </p>
                        ))}

                      {sub.theoremBox && (
                        <div className="igrt-keep-together p-5 sm:p-6 rounded-lg border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] space-y-3 my-5">
                          <div className="flex items-center justify-between gap-2 pb-2 border-b border-[#E2D9C8] dark:border-[#1E293B]">
                            <span className="font-cinzel text-[11px] uppercase tracking-[0.14em] text-[#8B4513] dark:text-[#FB923C]">
                              Formal Statement · {sub.theoremBox.number}
                            </span>
                          </div>
                          <div style={{ fontSize: 'var(--igrt-h4-size)' }} className="font-['Playfair_Display'] text-[#0F172A] dark:text-white">
                            <MathText text={sub.theoremBox.title} />
                          </div>
                          <div style={{ fontSize: '16px', lineHeight: 1.58 }}>
                            <strong>Hypotheses:</strong>
                            <ul className="list-disc pl-6 mt-1.5 space-y-1">
                              {sub.theoremBox.hypotheses.map((h) => (
                                <li key={h}><MathText text={h} /></li>
                              ))}
                            </ul>
                          </div>
                          <p style={{ marginBottom: 0, fontSize: '16.5px', lineHeight: 1.62 }}>
                            <strong>Statement:</strong> <MathText text={sub.theoremBox.statement} />
                          </p>
                        </div>
                      )}

                      {sub.equation && <UnicodeEquationBox eq={sub.equation} />}

                      {sub.workedExample && (
                        <div className="igrt-keep-together p-5 sm:p-6 rounded-lg border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] space-y-3 my-5">
                          <div className="flex items-center justify-between gap-2 pb-2 border-b border-[#E2D9C8] dark:border-[#1E293B]">
                            <span className="font-cinzel text-[11px] uppercase tracking-[0.14em] text-[#15803D] dark:text-[#4ADE80]">
                              Worked Example · Explicit Verification
                            </span>
                          </div>
                          <div style={{ fontSize: 'var(--igrt-h4-size)' }} className="font-['Playfair_Display'] text-[#0F172A] dark:text-white">
                            <MathText text={sub.workedExample.title} />
                          </div>
                          <p style={{ fontSize: '16.5px', lineHeight: 1.62 }}><MathText text={sub.workedExample.setup} /></p>
                          <ol className="list-decimal pl-6 space-y-2" style={{ fontSize: '16px', lineHeight: 1.58 }}>
                            {sub.workedExample.steps.map((st, idx) => (
                              <li key={idx}><MathText text={st} /></li>
                            ))}
                          </ol>
                          <UnicodeEquationBox eq={sub.workedExample.resultEquation} />
                          <p style={{ marginBottom: 0, fontSize: '16.5px', lineHeight: 1.62 }}>
                            <strong>Result:</strong> <MathText text={sub.workedExample.takeaway} />
                          </p>
                        </div>
                      )}

                      {sub.bulletPoints && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                          {sub.bulletPoints.map((bp) => (
                            <div
                              key={bp.label}
                              className="p-4 sm:p-5 rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] space-y-1.5"
                            >
                              <div className="font-['Playfair_Display'] text-[#0F172A] dark:text-white" style={{ fontSize: '19px', lineHeight: 1.35 }}>
                                <MathText text={bp.label} />
                              </div>
                              <p style={{ fontSize: '17px', lineHeight: 1.55, marginBottom: 0 }} className="text-[#475569] dark:text-[#CBD5E1]">
                                <MathText text={bp.text} />
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* §1.4 Postulates Table */}
                      {sub.anchorId === 'sec-1-4' && (
                        <div className="overflow-x-auto rounded-lg border border-[#D6CABE] dark:border-[#334155] my-7">
                          <table className="w-full text-left igrt-tabular" style={{ fontSize: '14px', lineHeight: 1.52 }}>
                            <thead className="bg-[#FAF6EE] dark:bg-[#081026] border-b border-[#D6CABE] dark:border-[#334155]">
                              <tr>
                                <th className="p-3 font-normal">Principle</th>
                                <th className="p-3 font-normal">Name</th>
                                <th className="p-3 font-normal">Statement</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#E2D9C8] dark:divide-[#1E293B]">
                              {PAPER_POSTULATES.map((post) => (
                                <tr key={post.code}>
                                  <td className="p-3 font-mono text-[#8B4513] dark:text-[#FB923C] whitespace-nowrap">{post.code}</td>
                                  <td className="p-3">{post.name}</td>
                                  <td className="p-3"><MathText text={post.statement} /></td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* §7.3 Experimental & Observational Protocols */}
                      {sub.anchorId === 'sec-7-3' && (
                        <div className="space-y-6 my-5">
                          <div className="overflow-x-auto rounded-lg border border-[#D6CABE] dark:border-[#334155]">
                            <table className="w-full text-left igrt-tabular" style={{ fontSize: '14px', lineHeight: 1.52 }}>
                              <thead className="bg-[#FAF6EE] dark:bg-[#081026] border-b border-[#D6CABE] dark:border-[#334155]">
                                <tr>
                                  <th className="p-3 font-normal">ID</th>
                                  <th className="p-3 font-normal">Protocol &amp; Facility</th>
                                  <th className="p-3 font-normal">Observable &amp; Signal Budget</th>
                                  <th className="p-3 font-normal">Falsification</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-[#E2D9C8] dark:divide-[#1E293B]">
                                {AUDITED_TEST_PROTOCOLS.map((pr) => (
                                  <tr key={pr.id}>
                                    <td className="p-3 font-mono text-[#8B4513] dark:text-[#FB923C] tabular-nums whitespace-nowrap">P{pr.id}</td>
                                    <td className="p-3">
                                      <strong>{pr.name}</strong>
                                      <div className="text-[#64748B] dark:text-[#94A3B8]">{pr.facility}</div>
                                    </td>
                                    <td className="p-3 space-y-1">
                                      <div
                                        className="font-mono text-[12.5px]"
                                        dangerouslySetInnerHTML={{ __html: pr.formulaHtml }}
                                      />
                                      <div><MathText text={pr.predictedSignal} /></div>
                                      <div className="text-[#475569] dark:text-[#94A3B8] italic"><MathText text={pr.noiseAndAuditNote} /></div>
                                    </td>
                                    <td className="p-3"><MathText text={pr.falsificationCriterion} /></td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {/* §8.1 Comparison & Core Closure Tables */}
                      {sub.anchorId === 'sec-8-1' && (
                        <div className="space-y-6 my-5">
                          <div className="overflow-x-auto rounded-lg border border-[#D6CABE] dark:border-[#334155]">
                            <table className="w-full text-left igrt-tabular" style={{ fontSize: '13.5px', lineHeight: 1.5 }}>
                              <caption className="p-3 text-left font-['Playfair_Display'] text-[17px] bg-[#FAF6EE] dark:bg-[#081026] text-[#0F172A] dark:text-[#F8FAFC] border-b border-[#D6CABE] dark:border-[#334155]">
                                Table 8.1: Comparison With Competing Approaches to the Problem of Time
                              </caption>
                              <thead className="bg-[#FAF8F3] dark:bg-[#081026] border-b border-[#D6CABE] dark:border-[#334155]">
                                <tr>
                                  <th className="p-3 font-normal">Framework</th>
                                  <th className="p-3 font-normal">Key Mechanism</th>
                                  <th className="p-3 font-normal">4D Lorentzian</th>
                                  <th className="p-3 font-normal">WDW Unfreezing</th>
                                  <th className="p-3 font-normal">Open Limitations</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-[#E2D9C8] dark:divide-[#1E293B]">
                                {FRAMEWORKS_COMPARISON_TABLE.map((row) => (
                                  <tr key={row.framework}>
                                    <td className="p-3 font-medium">{row.framework}</td>
                                    <td className="p-3"><MathText text={row.keyMechanism} /></td>
                                    <td className="p-3"><MathText text={row.preserves4DLorentzian} /></td>
                                    <td className="p-3"><MathText text={row.wdwUnfreezing} /></td>
                                    <td className="p-3 text-[#475569] dark:text-[#94A3B8]"><MathText text={row.openLimitations} /></td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          <div className="overflow-x-auto rounded-lg border border-[#D6CABE] dark:border-[#334155]">
                            <table className="w-full text-left igrt-tabular" style={{ fontSize: '14px', lineHeight: 1.52 }}>
                              <caption className="p-3 text-left font-['Playfair_Display'] text-[17px] bg-[#FAF6EE] dark:bg-[#081026] text-[#0F172A] dark:text-[#F8FAFC] border-b border-[#D6CABE] dark:border-[#334155]">
                                Table 8.2: Summary of Core Formal Results
                              </caption>
                              <thead className="bg-[#FAF8F3] dark:bg-[#081026] border-b border-[#D6CABE] dark:border-[#334155]">
                                <tr>
                                  <th className="p-3 font-normal">Result</th>
                                  <th className="p-3 font-normal">Domain</th>
                                  <th className="p-3 font-normal">Summary</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-[#E2D9C8] dark:divide-[#1E293B]">
                                {AUDITED_CLOSURE_THEOREMS.map((t) => (
                                  <tr key={t.id}>
                                    <td className="p-3"><MathText text={t.title} /></td>
                                    <td className="p-3">{t.domain}</td>
                                    <td className="p-3"><MathText text={t.summary} /></td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {/* Render inline SVG figures positioned after this subsection */}
                      {subFigs.map((fig) => (
                        <HarmonizedPaperFigure key={fig.id} figure={fig} />
                      ))}
                    </div>
                  );
                })}
              </div>
            </section>
            </React.Fragment>
          ))}

          {/* APPENDICES A–J */}
          {showAppendices && (
            <>
              {readingMode === 'continuous' && (
                <div className="igrt-page-break-banner print:hidden" aria-hidden="true">
                  <span className="h-px flex-1 bg-[#D6CABE] dark:bg-[#334155]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8B4513] dark:text-[#FDBA74] px-2">
                    New Page · Appendices A–J
                  </span>
                  <span className="h-px flex-1 bg-[#D6CABE] dark:bg-[#334155]" />
                </div>
              )}
              <section
                id="appendices"
                className="igrt-chapter-break rounded-2xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-10 lg:p-14 space-y-10 scroll-mt-32 shadow-sm"
              >
                <div className="border-b border-[#D6CABE] dark:border-[#1E293B] pb-5 space-y-2">
                  <div className="font-cinzel text-[14px] uppercase tracking-wider text-[#8B4513] dark:text-[#FDBA74]">
                    Mathematical &amp; Derivation Appendices
                  </div>
                  <h2 style={{ fontSize: 'var(--igrt-h2-size)', lineHeight: 1.2 }}>
                    Appendices A–J: Derivations, CODATA Units &amp; Technical FAQ
                  </h2>
                </div>

              <div className="space-y-6">
                {PAPER_APPENDICES.map((app) => (
                  <div
                    key={app.letter}
                    id={app.anchorId}
                    className="rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] p-6 space-y-4 scroll-mt-32"
                  >
                    <h3 style={{ fontSize: 'var(--igrt-h3-size)', lineHeight: 1.28 }}>
                      Appendix {app.letter}. <MathText text={app.title} />
                    </h3>
                    <p>
                      <em>Statement ({app.tag}):</em> <MathText text={app.theoremStatement} />
                    </p>
                    {app.proofParagraphs.map((para, idx) => (
                      <p key={idx} className="text-[#1E293B] dark:text-[#CBD5E1]">
                        <MathText text={para} />
                      </p>
                    ))}
                    {app.equations.map((eq, idx) => (
                      <div key={idx} className="igrt-eq-box dark:bg-[#0B1530] dark:border-[#334155]">
                        <div className="flex items-center justify-between gap-4 overflow-x-auto">
                          <div
                            className="flex-1 text-center"
                            dangerouslySetInnerHTML={{ __html: eq.unicodeHtml }}
                          />
                          {eq.label && (
                            <span className="font-mono text-[14px] text-[#8B4513] dark:text-[#FB923C] tabular-nums shrink-0">{eq.label}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </section>
            </>
          )}

          {/* GOVERNANCE & VERSION CHANGE LOG */}
          {showGovernance && (
            <>
              {readingMode === 'continuous' && (
                <div className="igrt-page-break-banner print:hidden" aria-hidden="true">
                  <span className="h-px flex-1 bg-[#D6CABE] dark:bg-[#334155]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8B4513] dark:text-[#FDBA74] px-2">
                    New Page · Governance &amp; Change Log
                  </span>
                  <span className="h-px flex-1 bg-[#D6CABE] dark:bg-[#334155]" />
                </div>
              )}
              <section
                id="governance"
                className="igrt-chapter-break rounded-2xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-10 lg:p-14 space-y-8 scroll-mt-32 shadow-sm"
              >
                <div className="border-b border-[#D6CABE] dark:border-[#1E293B] pb-5">
                  <div className="font-cinzel text-[13px] uppercase tracking-wider text-[#8B4513] dark:text-[#FDBA74]">
                    Research Integrity &amp; Governance
                  </div>
                  <h2 style={{ fontSize: 'var(--igrt-h2-size)', lineHeight: 1.2 }}>
                    Governance Disclosures &amp; Version Change Log
                  </h2>
                </div>

                <div className="space-y-6">
                  <h3 style={{ fontSize: 'var(--igrt-h3-size)' }}>CRediT Author Contributions</h3>
                  <ul className="list-disc pl-6 space-y-2" style={{ fontSize: '16px', lineHeight: 1.55 }}>
                    {ETHICS_AND_GOVERNANCE.creditRoles.map((c) => (
                      <li key={c.author}>
                        <strong>{c.author}:</strong> <MathText text={c.roles} />
                      </li>
                    ))}
                  </ul>

                  <h3 style={{ fontSize: 'var(--igrt-h3-size)' }}>Conflicts of Interest</h3>
                  <p>{ETHICS_AND_GOVERNANCE.conflictsOfInterest}</p>

                  <h3 style={{ fontSize: 'var(--igrt-h3-size)' }}>Funding Statement</h3>
                  <p>{ETHICS_AND_GOVERNANCE.fundingStatement}</p>

                  <h3 style={{ fontSize: 'var(--igrt-h3-size)' }}>Data &amp; Code Availability</h3>
                  <p>{ETHICS_AND_GOVERNANCE.dataAndCodeAvailability}</p>

                  <h3 style={{ fontSize: 'var(--igrt-h3-size)' }}>AI-Assistance Statement</h3>
                  <p>{ETHICS_AND_GOVERNANCE.aiAssistanceDisclosure}</p>
                </div>

                <div className="space-y-4 pt-6 border-t border-[#EAE2D2] dark:border-[#1E293B]">
                  <h3 style={{ fontSize: 'var(--igrt-h3-size)' }}>Version Change Log</h3>
                  <div className="overflow-x-auto rounded-lg border border-[#D6CABE] dark:border-[#334155]">
                    <table className="w-full text-left igrt-tabular" style={{ fontSize: '14px', lineHeight: 1.52 }}>
                      <thead className="bg-[#FAF6EE] dark:bg-[#081026] border-b border-[#D6CABE] dark:border-[#334155]">
                        <tr>
                          <th className="p-3 font-normal">Version</th>
                          <th className="p-3 font-normal">Date</th>
                          <th className="p-3 font-normal">Summary of Revisions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E2D9C8] dark:divide-[#1E293B]">
                        {VERSION_CHANGE_LOG.map((v) => (
                          <tr key={v.version}>
                            <td className="p-3 font-mono text-[#8B4513] dark:text-[#FB923C] whitespace-nowrap">{v.version}</td>
                            <td className="p-3 whitespace-nowrap">{v.date}</td>
                            <td className="p-3"><MathText text={v.summary} /></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* CITED VERSION & REFERENCES [1]–[91] (SLIGHTLY SMALLER FONT; NO ORCIDs IN REFERENCES) */}
          {showReferences && (
            <>
              {readingMode === 'continuous' && (
                <div className="igrt-page-break-banner print:hidden" aria-hidden="true">
                  <span className="h-px flex-1 bg-[#D6CABE] dark:bg-[#334155]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8B4513] dark:text-[#FDBA74] px-2">
                    New Page · References
                  </span>
                  <span className="h-px flex-1 bg-[#D6CABE] dark:bg-[#334155]" />
                </div>
              )}
              <section
                id="references"
                className="igrt-chapter-break rounded-2xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-10 lg:p-14 space-y-8 scroll-mt-32 shadow-sm"
              >
                <div className="border-b border-[#D6CABE] dark:border-[#1E293B] pb-5">
                  <div className="font-cinzel text-[14px] uppercase tracking-wider text-[#8B4513] dark:text-[#FDBA74]">
                    Scholarly Literature ({PAPER_REFERENCES.length} Citations in Numeric Order of Appearance)
                  </div>
                  <h2 style={{ fontSize: 'var(--igrt-h2-size)', lineHeight: 1.2 }}>
                    References &amp; Cited Version
                  </h2>
                </div>

              {/* Cited Version Box */}
              <div
                className="rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#081026] p-4 sm:p-5 space-y-3"
                style={{ fontSize: '15px', lineHeight: 1.5 }}
              >
                <div className="font-cinzel text-[12px] uppercase tracking-wider text-[#8B4513] dark:text-[#FDBA74]">
                  How to Cite This Monograph (Cited Version)
                </div>
                <p className="mb-0 text-[#334155] dark:text-[#CBD5E1]" style={{ marginBottom: 0, fontSize: '15px' }}>
                  <strong>APA:</strong> {PAPER_APA}
                </p>
                <pre
                  className="p-3 rounded-lg bg-[#081026] text-[#FDFBF7] font-mono overflow-x-auto"
                  style={{ fontSize: '12px', lineHeight: 1.45 }}
                >
                  {PAPER_BIBTEX}
                </pre>
              </div>

              <ol className="space-y-2.5 list-none pl-0" style={{ fontSize: '15px', lineHeight: 1.5 }}>
                {PAPER_REFERENCES.map((ref) => (
                  <li key={ref.id} className="flex items-baseline gap-3">
                    <span className="font-mono text-[#8B4513] dark:text-[#FB923C] shrink-0 tabular-nums">
                      [{ref.id}]
                    </span>
                    <span>
                      <strong>{ref.authors}</strong> ({ref.year}). <em><MathText text={ref.title} /></em>. <MathText text={ref.venue} />.
                      {ref.identifier ? (
                        <span className="ml-1.5 font-mono text-[13px] text-[#64748B] dark:text-[#94A3B8]">
                          {ref.identifier}.
                        </span>
                      ) : null}
                      <span className="ml-2 text-[13px] text-[#64748B] dark:text-[#94A3B8]">
                        ({ref.topicGroup})
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
              </section>
            </>
          )}
        </div>
      </div>

      {/* CITATION EXPORT MODAL */}
      {showCiteModal && (
        <div
          className="fixed inset-0 z-50 bg-[#081026]/70 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-2xl rounded-2xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 space-y-5 shadow-2xl font-['Poppins']">
            <div className="flex items-center justify-between border-b border-[#D6CABE] dark:border-[#1E293B] pb-3">
              <h3 className="font-['Playfair_Display'] font-normal text-2xl text-[#081026] dark:text-white">
                Cite This Monograph
              </h3>
              <button
                onClick={() => setShowCiteModal(false)}
                className="px-2.5 py-1 rounded-md text-xs text-[#64748B] hover:text-[#081026] dark:hover:text-white"
              >
                Close ✕
              </button>
            </div>

            {copySuccess && (
              <div className="px-3 py-2 rounded-lg bg-[#15803D]/10 text-[#15803D] dark:text-[#4ADE80] text-xs font-mono">
                Copied {copySuccess} to clipboard.
              </div>
            )}

            <div className="space-y-4 text-xs">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-cinzel uppercase tracking-wider text-[#64748B]">APA Style (Cited Version)</span>
                  <button
                    onClick={() => copyToClipboard(PAPER_APA, 'APA citation')}
                    className="text-[#8B4513] hover:underline"
                  >
                    Copy APA
                  </button>
                </div>
                <p className="p-3 rounded-lg bg-[#FAF8F3] dark:bg-[#081026] border border-[#D6CABE] dark:border-[#1E293B] text-[#334155] dark:text-[#CBD5E1] text-[12px] leading-relaxed">
                  {PAPER_APA}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-cinzel uppercase tracking-wider text-[#64748B]">BibTeX (@article)</span>
                  <button
                    onClick={() => copyToClipboard(PAPER_BIBTEX, 'BibTeX entry')}
                    className="text-[#8B4513] hover:underline"
                  >
                    Copy BibTeX
                  </button>
                </div>
                <pre className="p-3 rounded-lg bg-[#081026] text-[#FDFBF7] font-mono text-[11px] overflow-x-auto leading-relaxed">
                  {PAPER_BIBTEX}
                </pre>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-cinzel uppercase tracking-wider text-[#64748B]">RIS (EndNote / Zotero)</span>
                  <button
                    onClick={() => copyToClipboard(PAPER_RIS, 'RIS record')}
                    className="text-[#8B4513] hover:underline"
                  >
                    Copy RIS
                  </button>
                </div>
                <pre className="p-3 rounded-lg bg-[#FAF8F3] dark:bg-[#081026] border border-[#D6CABE] dark:border-[#1E293B] text-[#334155] dark:text-[#CBD5E1] font-mono text-[11px] overflow-x-auto">
                  {PAPER_RIS}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
