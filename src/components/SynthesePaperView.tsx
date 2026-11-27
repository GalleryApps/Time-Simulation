/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Paper 15 — Philosophical Treatise Editorial View for *Synthese*
 * 40-Shade Dark Blue, Slate Gray Blue, Muted Blue-Green & Frost Mist Palette
 */

import React, { useMemo, useState } from 'react';
import {
  BookOpen,
  Download,
  FileCode2,
  FileText,
  Palette,
  Search
} from 'lucide-react';
import {
  PALETTE_40_SHADES,
  evaluatePhilosophicalConsistency,
  evaluateCrossTraditionBridge,
  evaluateAllenThickPresent,
  evaluateSitFunctor,
  evaluateNoGoTheorem51,
  computeMatrixSummary,
  type PhilosophicalAxiomSet,
  type TraditionKey,
  type SitSourceCategory
} from '../physics/synthesePhilosophyPaper';
import {
  SYNTHESE_META,
  SYNTHESE_ABSTRACT,
  SYNTHESE_AXIOM_TABLE,
  SYNTHESE_INDEPENDENCE_MODELS,
  SYNTHESE_ROADMAP,
  SYNTHESE_NOTATION_TABLE,
  SYNTHESE_HOW_TO_READ,
  SYNTHESE_ARGUMENT_MAP,
  SYNTHESE_32_MATRIX,
  SYNTHESE_CHAPTERS,
  TABLE_2_1_PHENOMENOLOGY,
  TABLE_3_1_DECONSTRUCTION,
  TABLE_4_1_QUANTUM,
  TABLE_5_1_SYSTEMS,
  TABLE_6_1_RESOLUTION,
  TABLE_7_1_IDENTITY_SYNTHESIS,
  TABLE_8_1_TESTABLE_CORRELATION,
  TABLE_8_4_AUXILIARY_ASSUMPTIONS,
  SYNTHESE_SYMBOL_GLOSSARY,
  SYNTHESE_GLOSSARY,
  SYNTHESE_APPENDICES,
  SYNTHESE_REFERENCES,
  SYNTHESE_INDEX_OF_NAMES,
  SYNTHESE_INDEX_OF_CONCEPTS,
  type SyntheseEquation,
  type SyntheseMatrixRow
} from '../types/synthesePaperData';
import {
  SYNTHESE_PLATES,
  SYNTHESE_FIGURES,
  SynthesePlateCard,
  SyntheseFigureCard
} from './SynthesePaperFigures';
import {
  downloadSyntheseHtml,
  downloadSyntheseLatex,
  downloadSyntheseMarkdown
} from '../utils/generateSynthesePaperExports';
import { generateSynthesePaperPdf } from '../utils/generateSynthesePaperPdf';

const TRADITION_OPTIONS: Array<{ key: TraditionKey; label: string }> = [
  { key: 'phenomenology', label: 'Transcendental Phenomenology (§§2–9)' },
  { key: 'deconstruction', label: 'Deconstruction & Critique (§§10–15a)' },
  { key: 'quantum-foundations', label: 'Quantum Foundations (§§16–27)' },
  { key: 'systems-enaction', label: 'Systems Theory & Enaction (§§28–33)' }
];

const AXIOM_CONTROLS: Array<{
  key: keyof PhilosophicalAxiomSet;
  code: string;
  name: string;
  formula: string;
  summary: string;
}> = [
  {
    key: 'perspectivalImmanence',
    code: 'A1',
    name: 'Perspectival Immanence',
    formula: '□(Obs(o) → Situated(o))',
    summary: 'Every observation necessarily takes place from within a situated local horizon.'
  },
  {
    key: 'relationalParity',
    code: 'A2',
    name: 'Egalitarian Frame Parity',
    formula: '∀o,o′ (Obs(o) ∧ Obs(o′) → Parity(o, o′))',
    summary: 'No single ego or physical reference frame commands absolute cosmological privilege.'
  },
  {
    key: 'operationalBoundary',
    code: 'A3',
    name: 'Operational Demarcation Cut',
    formula: '∀o (Discern(o) → ∃Cut(Inside_o | Outside_o))',
    summary: 'Determinate knowledge requires a finite boundary separating internal memory from an exterior.'
  },
  {
    key: 'asymmetricSelfAffection',
    code: 'A4',
    name: 'Asymmetric Self-Relation',
    formula: '∀o (Exp(o) → AsymSelfRel(o))',
    summary: 'Lived ipseity and thick temporal synthesis break neutral shift symmetry.'
  }
];

function renderNonBoldProseTokens(text: string, nextKey: () => number): React.ReactNode[] {
  const codeSplit = text.split(/(`[^`]+`)/g);
  const nodes: React.ReactNode[] = [];
  for (let i = 0; i < codeSplit.length; i++) {
    const seg = codeSplit[i];
    if (!seg) continue;
    if (i % 2 === 1) {
      nodes.push(
        <code
          key={nextKey()}
          className="font-mono text-[0.86em] px-1 py-0.5 bg-[#E5EFF5] dark:bg-[#08182E] border border-[#BFD0DA] dark:border-[#51677B]/50 text-[#14335A] dark:text-[#87B9B2]"
        >
          {seg.slice(1, -1)}
        </code>
      );
      continue;
    }
    const italicSplit = seg.split(/(\*(?!\s)[^*\n]+?(?<!\s)\*)/g);
    for (let k = 0; k < italicSplit.length; k++) {
      const itSeg = italicSplit[k];
      if (!itSeg) continue;
      if (k % 2 === 1) {
        nodes.push(<em key={nextKey()}>{itSeg.slice(1, -1)}</em>);
      } else {
        nodes.push(<React.Fragment key={nextKey()}>{itSeg}</React.Fragment>);
      }
    }
  }
  return nodes;
}

function renderInlineProseTokens(text: string): React.ReactNode[] {
  let keyCounter = 0;
  const nextKey = () => keyCounter++;
  const boldSplit = text.split(/(\*\*[^\n]+?\*\*)/g);
  const nodes: React.ReactNode[] = [];
  for (let j = 0; j < boldSplit.length; j++) {
    const bSeg = boldSplit[j];
    if (!bSeg) continue;
    if (j % 2 === 1) {
      nodes.push(
        <strong key={nextKey()} className="font-semibold text-[#0F294A] dark:text-[#F0F6FA]">
          {renderNonBoldProseTokens(bSeg.slice(2, -2), nextKey)}
        </strong>
      );
    } else {
      nodes.push(...renderNonBoldProseTokens(bSeg, nextKey));
    }
  }
  return nodes;
}

function RichProseParagraph({ text, dropCap = false }: { text: string; dropCap?: boolean }) {
  const lines = text.split('\n');
  return (
    <div className="space-y-3">
      {lines.map((line, idx) => {
        if (line.startsWith('### ')) {
          return (
            <h4
              key={idx}
              className="pt-3 font-['Playfair_Display'] font-normal text-lg text-[#14335A] dark:text-[#87B9B2]"
            >
              {renderInlineProseTokens(line.slice(4))}
            </h4>
          );
        }
        return (
          <p
            key={idx}
            className={
              dropCap && idx === 0
                ? "first-letter:float-left first-letter:text-5xl first-letter:font-['Playfair_Display'] first-letter:text-[#14335A] dark:first-letter:text-[#87B9B2] first-letter:mr-3 first-letter:mt-1 first-letter:leading-none"
                : ''
            }
          >
            {renderInlineProseTokens(line)}
          </p>
        );
      })}
    </div>
  );
}

function LogicalSchemaCard({ eq }: { eq: SyntheseEquation }) {
  return (
    <div className="my-8 border border-[#A6BCC8] dark:border-[#51677B]/60 bg-[#E5EFF5]/70 dark:bg-[#08182E]/80 p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3 pb-3 border-b border-[#BFD0DA] dark:border-[#51677B]/50">
        <div
          className="text-base sm:text-lg font-['Source_Serif_4',Georgia,serif] text-[#0B203B] dark:text-[#F0F6FA] overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: eq.unicodeHtml }}
        />
        <span className="font-mono text-xs text-[#28676A] dark:text-[#87B9B2] tabular-nums shrink-0">
          Logical Schema {eq.label}
        </span>
      </div>

      <p className="mt-3 text-xs sm:text-sm italic text-[#1E3A54] dark:text-[#BFD0DA]">
        {eq.caption}
      </p>
      <p className="mt-1 text-xs sm:text-sm text-[#2E6966] dark:text-[#7DA39D]">
        {eq.plainMeaning}
      </p>
      {eq.derivationSteps && eq.derivationSteps.length > 0 && (
        <ol className="mt-3 space-y-1 pl-5 list-decimal text-xs text-[#0B203B] dark:text-[#E5EFF5]">
          {eq.derivationSteps.map((st, idx) => (
            <li key={idx}>{renderInlineProseTokens(st)}</li>
          ))}
        </ol>
      )}
    </div>
  );
}

export const SynthesePaperView: React.FC = () => {
  const [pdfBusy, setPdfBusy] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [showPaletteDrawer, setShowPaletteDrawer] = useState(false);
  const [glossaryFilter, setGlossaryFilter] = useState('');

  // Interactive Philosophical Logic & Dialectical Consistency Evaluator state
  const [axioms, setAxioms] = useState<PhilosophicalAxiomSet>({
    perspectivalImmanence: true,
    relationalParity: true,
    operationalBoundary: true,
    asymmetricSelfAffection: true
  });
  const [selectedTradition, setSelectedTradition] = useState<TraditionKey>('phenomenology');
  const [bridgeTarget, setBridgeTarget] = useState<TraditionKey>('quantum-foundations');

  const [workbenchTab, setWorkbenchTab] = useState<'axioms' | 'allen' | 'functors' | 'nogo51'>('axioms');
  const [retentionOverlapMs, setRetentionOverlapMs] = useState(120);
  const [impressionNowMs, setImpressionNowMs] = useState(320);
  const [protentionSpanMs, setProtentionSpanMs] = useState(530);
  const [sitSource, setSitSource] = useState<SitSourceCategory>('Phen');
  const [nogoFidelity, setNogoFidelity] = useState(0.85);
  const [nogoVisibility, setNogoVisibility] = useState(0.714);
  const [matrixTraditionFilter, setMatrixTraditionFilter] = useState<'ALL' | SyntheseMatrixRow['tradition']>('ALL');

  const consistencyAudit = useMemo(
    () => evaluatePhilosophicalConsistency(axioms, selectedTradition),
    [axioms, selectedTradition]
  );

  const traditionBridge = useMemo(
    () => evaluateCrossTraditionBridge(selectedTradition, bridgeTarget),
    [selectedTradition, bridgeTarget]
  );

  const allenEvaluation = useMemo(
    () => evaluateAllenThickPresent(retentionOverlapMs, impressionNowMs, protentionSpanMs),
    [retentionOverlapMs, impressionNowMs, protentionSpanMs]
  );

  const sitFunctorAudit = useMemo(
    () => evaluateSitFunctor(sitSource),
    [sitSource]
  );

  const nogo51Audit = useMemo(
    () => evaluateNoGoTheorem51(nogoFidelity, nogoVisibility),
    [nogoFidelity, nogoVisibility]
  );

  const filteredMatrixRows = useMemo(
    () =>
      matrixTraditionFilter === 'ALL'
        ? SYNTHESE_32_MATRIX
        : SYNTHESE_32_MATRIX.filter((r) => r.tradition === matrixTraditionFilter),
    [matrixTraditionFilter]
  );

  const matrixSummary = useMemo(
    () => computeMatrixSummary(filteredMatrixRows),
    [filteredMatrixRows]
  );

  const toggleAxiom = (key: keyof PhilosophicalAxiomSet) => {
    setAxioms((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const restoreAllAxioms = () => {
    setAxioms({
      perspectivalImmanence: true,
      relationalParity: true,
      operationalBoundary: true,
      asymmetricSelfAffection: true
    });
  };

  const filteredGlossary = useMemo(() => {
    const q = glossaryFilter.trim().toLowerCase();
    if (!q) return SYNTHESE_GLOSSARY;
    return SYNTHESE_GLOSSARY.filter(
      (g) =>
        g.term.toLowerCase().includes(q) ||
        (g.acronym && g.acronym.toLowerCase().includes(q)) ||
        g.definition.toLowerCase().includes(q)
    );
  }, [glossaryFilter]);

  const handleDownloadPdf = async () => {
    setPdfBusy(true);
    setPdfError(null);
    try {
      await generateSynthesePaperPdf();
    } catch (err) {
      setPdfError(err instanceof Error ? err.message : 'Unable to generate PDF export');
    } finally {
      setPdfBusy(false);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <article className="bg-[#F0F6FA] dark:bg-[#08182E] text-[#0B203B] dark:text-[#F0F6FA] min-h-screen transition-colors">
      {/* Quiet Dual Editorial Top Hairline */}
      <div className="w-full h-1 bg-[#14335A]" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14">
        {/* Dignified Treatise Masthead */}
        <header className="bg-[#F7FAFC] dark:bg-[#0B203B] border border-[#A6BCC8] dark:border-[#51677B]/60 p-6 sm:p-10 lg:p-12">
          <h1 className="font-['Playfair_Display'] font-normal text-3xl sm:text-4xl lg:text-[2.85rem] leading-[1.15] text-[#0B203B] dark:text-[#F0F6FA] text-balance max-w-5xl">
            {SYNTHESE_META.title}
          </h1>

          <p className="mt-4 font-['Source_Serif_4',Georgia,serif] italic text-lg sm:text-xl text-[#1B3F6C] dark:text-[#BFD0DA] max-w-4xl leading-relaxed">
            {SYNTHESE_META.laymanDeck}
          </p>

          {/* Author Masthead Grid */}
          <div className="mt-8 pt-6 border-t border-[#BFD0DA] dark:border-[#51677B]/50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {SYNTHESE_META.authors.map((a) => (
              <div key={a.name} className="text-xs space-y-0.5">
                <div className="font-semibold text-[#0B203B] dark:text-[#F0F6FA]">{a.name}</div>
                <div className="text-[#35485B] dark:text-[#A9B7C4]">{a.affiliation}</div>
                {a.orcidUrl ? (
                  <div>
                    <a
                      href={a.orcidUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] text-[#28676A] dark:text-[#87B9B2] hover:underline"
                    >
                      ORCID: {a.orcid ?? a.orcidUrl}
                    </a>
                  </div>
                ) : (
                  a.orcidNote && (
                    <div className="font-mono text-[11px] text-[#51677B] dark:text-[#8B9FAF]">
                      {a.orcidNote}
                    </div>
                  )
                )}
                {a.email && (
                  <div className="font-mono text-[11px] text-[#28676A] dark:text-[#87B9B2]">
                    Email: {a.email}
                  </div>
                )}
                <div className="text-[#14335A] dark:text-[#7DA39D] italic">{a.creditRoles}</div>
              </div>
            ))}
          </div>

          {/* Action Toolbar */}
          <div className="mt-8 pt-6 border-t border-[#BFD0DA] dark:border-[#51677B]/50 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={pdfBusy}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0F294A] hover:bg-[#14335A] text-[#F7FAFC] text-xs font-mono tracking-wide border border-[#08182E] transition-colors cursor-pointer disabled:opacity-60"
            >
              <Download className="w-4 h-4" />
              <span>{pdfBusy ? 'Compiling A4 Treatise PDF...' : 'Download Full A4 PDF'}</span>
            </button>

            <button
              type="button"
              onClick={downloadSyntheseHtml}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#F7FAFC] dark:bg-[#08182E] hover:bg-[#E5EFF5] dark:hover:bg-[#16263A] text-[#0F294A] dark:text-[#E5EFF5] text-xs font-mono border border-[#A6BCC8] dark:border-[#51677B] transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#1B3F6C] dark:text-[#87B9B2]" />
              <span>Editorial HTML</span>
            </button>

            <button
              type="button"
              onClick={downloadSyntheseLatex}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#F7FAFC] dark:bg-[#08182E] hover:bg-[#E5EFF5] dark:hover:bg-[#16263A] text-[#0F294A] dark:text-[#E5EFF5] text-xs font-mono border border-[#A6BCC8] dark:border-[#48827E] transition-colors cursor-pointer"
            >
              <FileCode2 className="w-4 h-4 text-[#28676A] dark:text-[#87B9B2]" />
              <span>LaTeX (.tex)</span>
            </button>

            <button
              type="button"
              onClick={downloadSyntheseMarkdown}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#F7FAFC] dark:bg-[#08182E] hover:bg-[#E5EFF5] dark:hover:bg-[#16263A] text-[#0F294A] dark:text-[#E5EFF5] text-xs font-mono border border-[#A6BCC8] dark:border-[#51677B] transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#35485B] dark:text-[#BFD0DA]" />
              <span>Markdown (.md)</span>
            </button>

            <button
              type="button"
              onClick={() => setShowPaletteDrawer((v) => !v)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#E5EFF5] dark:bg-[#08182E] hover:bg-[#D5E2EA] dark:hover:bg-[#16263A] text-[#14335A] dark:text-[#87B9B2] text-xs font-mono border border-[#A6BCC8] dark:border-[#51677B]/70 transition-colors cursor-pointer ml-auto"
            >
              <Palette className="w-4 h-4" />
              <span>{showPaletteDrawer ? 'Hide Palette System' : 'Tonal System'}</span>
            </button>
          </div>

          {pdfError && (
            <p className="mt-3 text-xs font-mono text-[#14335A] dark:text-[#87B9B2]">
              PDF Export Notice: {pdfError}
            </p>
          )}

          {showPaletteDrawer && (
            <div className="mt-6 pt-6 border-t border-[#BFD0DA] dark:border-[#51677B]/50">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-['Playfair_Display'] text-lg text-[#0B203B] dark:text-[#F0F6FA] font-normal">
                  40-Shade Dark Blue, Slate Gray Blue &amp; Muted Blue-Green Registry
                </h2>
                <span className="font-mono text-xs text-[#28676A] dark:text-[#87B9B2]">
                  {PALETTE_40_SHADES.length} calibrated tokens
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-2.5">
                {PALETTE_40_SHADES.map((shade) => (
                  <div
                    key={shade.id}
                    className="border border-[#A6BCC8] dark:border-[#51677B]/50 bg-[#F0F6FA] dark:bg-[#08182E] p-2 text-[11px]"
                  >
                    <div
                      className="h-7 w-full border border-black/10 mb-1.5"
                      style={{ backgroundColor: shade.hex }}
                    />
                    <div className="font-mono font-semibold text-[#0B203B] dark:text-[#F0F6FA] tabular-nums">
                      #{shade.id} · {shade.hex}
                    </div>
                    <div className="text-[#35485B] dark:text-[#BFD0DA] truncate" title={shade.name}>
                      {shade.name}
                    </div>
                    <div className="text-[10px] text-[#28676A] dark:text-[#87B9B2]">
                      {shade.family}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* 70 / 30 Reading Layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
          {/* Primary Reading Column */}
          <div className="space-y-12 min-w-0">
            {/* Abstract Section */}
            <section
              id="abstract"
              className="bg-[#F7FAFC] dark:bg-[#0B203B] border border-[#A6BCC8] dark:border-[#51677B]/60 p-6 sm:p-10"
            >
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#0B203B] dark:text-[#F0F6FA] font-normal pb-4 border-b border-[#BFD0DA] dark:border-[#51677B]/50">
                Abstract
              </h2>
              <div className="mt-6 space-y-4 font-['Source_Serif_4',Georgia,serif] text-base sm:text-[17px] leading-[1.78] text-[#0B203B] dark:text-[#E5EFF5] max-w-[70ch]">
                {SYNTHESE_ABSTRACT.map((p, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "first-letter:float-left first-letter:text-5xl first-letter:font-['Playfair_Display'] first-letter:text-[#14335A] dark:first-letter:text-[#87B9B2] first-letter:mr-3 first-letter:mt-1 first-letter:leading-none"
                        : ''
                    }
                  >
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-[#BFD0DA] dark:border-[#51677B]/50 text-xs font-mono text-[#28676A] dark:text-[#87B9B2]">
                Keywords: {SYNTHESE_META.keywords.join(' · ')}
              </div>

              {SYNTHESE_FIGURES.filter((f) => f.anchorChapter === 0).map((fg) => (
                <SyntheseFigureCard key={fg.id} fig={fg} />
              ))}
            </section>

            {/* Canonical Table of Axioms (A1–A4), Roadmap, Notation & Reader Navigation */}
            <section
              id="axioms-table"
              className="bg-[#F7FAFC] dark:bg-[#0B203B] border border-[#A6BCC8] dark:border-[#51677B]/60 p-6 sm:p-10 space-y-8"
            >
              <div>
                <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#0B203B] dark:text-[#F0F6FA] font-normal pb-4 border-b border-[#BFD0DA] dark:border-[#51677B]/50">
                  Table of Axioms (A1–A4), Structural Roadmap &amp; Reading Guide
                </h2>
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full text-xs border-collapse border border-[#A6BCC8] dark:border-[#51677B]/60">
                    <thead className="bg-[#E5EFF5] dark:bg-[#08182E] text-[#0B203B] dark:text-[#F0F6FA]">
                      <tr>
                        <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Axiom</th>
                        <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Canonical Modal S4 Formula</th>
                        <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Modal &amp; Epistemic Status</th>
                        <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Reductio on Denial</th>
                        <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Empirical Falsifier (§40)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SYNTHESE_AXIOM_TABLE.map((ax) => (
                        <tr key={ax.code} className="odd:bg-[#F7FAFC] even:bg-[#E5EFF5]/60 dark:odd:bg-[#0B203B] dark:even:bg-[#08182E]">
                          <td className="p-2.5 font-semibold text-[#14335A] dark:text-[#87B9B2] border border-[#A6BCC8] dark:border-[#51677B]/50">
                            {ax.code} · {ax.name}
                          </td>
                          <td className="p-2.5 font-mono text-[11px] text-[#28676A] dark:text-[#87B9B2] border border-[#A6BCC8] dark:border-[#51677B]/50">
                            {ax.canonicalFormula}
                          </td>
                          <td className="p-2.5 border border-[#A6BCC8] dark:border-[#51677B]/50">{ax.modalAndEpistemicStatus}</td>
                          <td className="p-2.5 border border-[#A6BCC8] dark:border-[#51677B]/50">{ax.reductioOnDenial}</td>
                          <td className="p-2.5 text-[#2E6966] dark:text-[#7DA39D] border border-[#A6BCC8] dark:border-[#51677B]/50">{ax.falsificationTrigger}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-4 border-t border-[#BFD0DA] dark:border-[#51677B]/50">
                <h3 className="font-['Playfair_Display'] font-normal text-xl text-[#0F294A] dark:text-[#F0F6FA] mb-3">
                  Treatise Architecture Roadmap (Chapters 1–9)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse border border-[#A6BCC8] dark:border-[#51677B]/60">
                    <thead className="bg-[#E5EFF5] dark:bg-[#08182E] text-[#0B203B] dark:text-[#F0F6FA]">
                      <tr>
                        <th className="p-2 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Chapter</th>
                        <th className="p-2 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Sections</th>
                        <th className="p-2 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Core Deductive &amp; Genealogy Contribution</th>
                        <th className="p-2 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Visual Anchor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SYNTHESE_ROADMAP.map((row) => (
                        <tr key={row.chapter} className="odd:bg-[#F7FAFC] even:bg-[#E5EFF5]/60 dark:odd:bg-[#0B203B] dark:even:bg-[#08182E]">
                          <td className="p-2 font-semibold text-[#14335A] dark:text-[#87B9B2] border border-[#A6BCC8] dark:border-[#51677B]/50">{row.chapter}</td>
                          <td className="p-2 font-mono text-[#28676A] dark:text-[#87B9B2] border border-[#A6BCC8] dark:border-[#51677B]/50">{row.sections}</td>
                          <td className="p-2 border border-[#A6BCC8] dark:border-[#51677B]/50">{row.centralMove}</td>
                          <td className="p-2 font-mono text-[11px] text-[#35485B] dark:text-[#BFD0DA] border border-[#A6BCC8] dark:border-[#51677B]/50">{row.visualAnchor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-4 border-t border-[#BFD0DA] dark:border-[#51677B]/50">
                <h3 className="font-['Playfair_Display'] font-normal text-xl text-[#0F294A] dark:text-[#F0F6FA] mb-3">
                  Standardized Notation Index
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse border border-[#A6BCC8] dark:border-[#51677B]/60">
                    <thead className="bg-[#E5EFF5] dark:bg-[#08182E] text-[#0B203B] dark:text-[#F0F6FA]">
                      <tr>
                        <th className="p-2 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Symbol</th>
                        <th className="p-2 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Formal Meaning</th>
                        <th className="p-2 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">First Defined</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SYNTHESE_NOTATION_TABLE.map((n) => (
                        <tr key={n.symbol} className="odd:bg-[#F7FAFC] even:bg-[#E5EFF5]/60 dark:odd:bg-[#0B203B] dark:even:bg-[#08182E]">
                          <td className="p-2 font-mono font-semibold text-[#14335A] dark:text-[#87B9B2] border border-[#A6BCC8] dark:border-[#51677B]/50">{n.symbol}</td>
                          <td className="p-2 border border-[#A6BCC8] dark:border-[#51677B]/50">{n.role}</td>
                          <td className="p-2 font-mono text-[#28676A] dark:text-[#87B9B2] border border-[#A6BCC8] dark:border-[#51677B]/50">{n.firstDefined}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="how-to-read" className="pt-4 border-t border-[#BFD0DA] dark:border-[#51677B]/50">
                <h3 className="font-['Playfair_Display'] font-normal text-xl text-[#0F294A] dark:text-[#F0F6FA] mb-3">
                  How to Read This Treatise
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {SYNTHESE_HOW_TO_READ.map((track) => (
                    <div
                      key={track.audience}
                      className="p-4 bg-[#E5EFF5]/70 dark:bg-[#08182E] border border-[#A6BCC8] dark:border-[#51677B]/50 space-y-2 text-xs"
                    >
                      <div className="font-semibold text-[#14335A] dark:text-[#87B9B2]">{track.audience}</div>
                      <div className="font-mono text-[11px] text-[#28676A] dark:text-[#7DA39D]">{track.essentialSections}</div>
                      <p className="text-[#0B203B] dark:text-[#E5EFF5] leading-relaxed">{track.entryFocus}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Interactive Philosophical Logic & Dialectical Consistency Evaluator */}
            <section
              id="workbench"
              className="bg-[#F7FAFC] dark:bg-[#0B203B] border border-[#A6BCC8] dark:border-[#51677B]/60 p-6 sm:p-10"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3 pb-4 border-b border-[#BFD0DA] dark:border-[#51677B]/50">
                <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#0B203B] dark:text-[#F0F6FA] font-normal">
                  Philosophical Logic &amp; Consistency Evaluator
                </h2>
                <button
                  type="button"
                  onClick={restoreAllAxioms}
                  className="font-mono text-xs text-[#28676A] dark:text-[#87B9B2] hover:underline cursor-pointer"
                >
                  Restore All Four Axioms
                </button>
              </div>

              {/* Interactive Workbench Mode Tabs */}
              <div className="mt-5 flex flex-wrap gap-2 border-b border-[#BFD0DA] dark:border-[#51677B]/50 pb-4">
                <button
                  type="button"
                  onClick={() => setWorkbenchTab('axioms')}
                  className={`px-3.5 py-2 text-xs font-mono border transition-colors cursor-pointer ${
                    workbenchTab === 'axioms'
                      ? 'bg-[#14335A] text-[#F7FAFC] border-[#08182E]'
                      : 'bg-[#E5EFF5] dark:bg-[#08182E] text-[#0B203B] dark:text-[#E5EFF5] border-[#A6BCC8] dark:border-[#51677B]/50'
                  }`}
                >
                  1. Axiom &amp; Bridge Consistency (A1–A4)
                </button>
                <button
                  type="button"
                  onClick={() => setWorkbenchTab('allen')}
                  className={`px-3.5 py-2 text-xs font-mono border transition-colors cursor-pointer ${
                    workbenchTab === 'allen'
                      ? 'bg-[#35485B] text-[#F7FAFC] border-[#08182E]'
                      : 'bg-[#E5EFF5] dark:bg-[#08182E] text-[#0B203B] dark:text-[#E5EFF5] border-[#A6BCC8] dark:border-[#51677B]/50'
                  }`}
                >
                  2. Allen Thick-Present Calculator (A4b)
                </button>
                <button
                  type="button"
                  onClick={() => setWorkbenchTab('functors')}
                  className={`px-3.5 py-2 text-xs font-mono border transition-colors cursor-pointer ${
                    workbenchTab === 'functors'
                      ? 'bg-[#28676A] text-[#F7FAFC] border-[#13383B]'
                      : 'bg-[#E5EFF5] dark:bg-[#08182E] text-[#0B203B] dark:text-[#E5EFF5] border-[#A6BCC8] dark:border-[#51677B]/50'
                  }`}
                >
                  3. SIT Category Functors (Σ_Obs)
                </button>
                <button
                  type="button"
                  onClick={() => setWorkbenchTab('nogo51')}
                  className={`px-3.5 py-2 text-xs font-mono border transition-colors cursor-pointer ${
                    workbenchTab === 'nogo51'
                      ? 'bg-[#1B3F6C] text-[#F7FAFC] border-[#08182E]'
                      : 'bg-[#E5EFF5] dark:bg-[#08182E] text-[#0B203B] dark:text-[#E5EFF5] border-[#A6BCC8] dark:border-[#51677B]/50'
                  }`}
                >
                  4. No-Go Theorem 5.1 Witness (F &gt; 1/2)
                </button>
              </div>

              {workbenchTab === 'axioms' && (
                <>
                  <p className="mt-4 text-sm font-['Source_Serif_4',Georgia,serif] text-[#0B203B] dark:text-[#E5EFF5] leading-relaxed max-w-[72ch]">
                    Test the deductive necessity and stratified independence (Theorem 7.1) of the four foundational observer axioms (A1–A4) over varying-domain S4 semantics. Suspending one or multiple axioms enumerates all active reductios and separating countermodels.
                  </p>

                  {/* Axiom Toggles */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {AXIOM_CONTROLS.map((ctrl) => {
                      const active = axioms[ctrl.key];
                      return (
                        <button
                          key={ctrl.key}
                          type="button"
                          onClick={() => toggleAxiom(ctrl.key)}
                          aria-pressed={active}
                          className={`text-left p-4 border transition-colors cursor-pointer ${
                            active
                              ? 'bg-[#F0F6FA] dark:bg-[#08182E] border-[#28676A] dark:border-[#48827E]'
                              : 'bg-[#D5E2EA]/60 dark:bg-[#16263A]/80 border-[#1B3F6C] dark:border-[#87B9B2]'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 text-xs font-mono">
                            <span className="font-semibold text-[#0B203B] dark:text-[#F0F6FA]">
                              {ctrl.code} · {ctrl.name}
                            </span>
                            <span className={active ? 'text-[#28676A] dark:text-[#87B9B2]' : 'text-[#1B3F6C] dark:text-[#BFD0DA]'}>
                              {active ? 'Affirmed' : 'Suspended'}
                            </span>
                          </div>
                          <div className="mt-1.5 font-mono text-[11px] text-[#14335A] dark:text-[#87B9B2]">
                            {ctrl.formula}
                          </div>
                          <p className="mt-1.5 text-xs text-[#0B203B]/85 dark:text-[#E5EFF5]/85 leading-relaxed">
                            {ctrl.summary}
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  {/* Tradition & Bridge Selectors */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="border border-[#A6BCC8] dark:border-[#51677B]/50 bg-[#F0F6FA] dark:bg-[#08182E] p-4 space-y-3">
                      <div className="text-xs font-mono text-[#14335A] dark:text-[#87B9B2]">
                        Primary Tradition Under Evaluation
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {TRADITION_OPTIONS.map((opt) => (
                          <button
                            key={opt.key}
                            type="button"
                            onClick={() => setSelectedTradition(opt.key)}
                            className={`text-left px-3 py-2 text-xs border transition-colors cursor-pointer ${
                              selectedTradition === opt.key
                                ? 'bg-[#14335A] text-[#F7FAFC] border-[#0B203B]'
                                : 'bg-[#F7FAFC] dark:bg-[#0B203B] text-[#0B203B] dark:text-[#F0F6FA] border-[#A6BCC8] dark:border-[#51677B]/50'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="border border-[#A6BCC8] dark:border-[#51677B]/50 bg-[#F0F6FA] dark:bg-[#08182E] p-4 space-y-3">
                      <div className="text-xs font-mono text-[#28676A] dark:text-[#87B9B2]">
                        Cross-Tradition Bridge Target
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {TRADITION_OPTIONS.map((opt) => (
                          <button
                            key={opt.key}
                            type="button"
                            onClick={() => setBridgeTarget(opt.key)}
                            className={`text-left px-3 py-2 text-xs border transition-colors cursor-pointer ${
                              bridgeTarget === opt.key
                                ? 'bg-[#28676A] text-[#F7FAFC] border-[#12373A]'
                                : 'bg-[#F7FAFC] dark:bg-[#0B203B] text-[#0B203B] dark:text-[#F0F6FA] border-[#A6BCC8] dark:border-[#51677B]/50'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Deductive Proof Output */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div
                      className={`p-5 border ${
                        consistencyAudit.consistentSynthesis
                          ? 'bg-[#E5EFF5]/85 dark:bg-[#12373A]/60 border-[#28676A]/60'
                          : 'bg-[#D5E2EA]/85 dark:bg-[#16263A]/85 border-[#1B3F6C]/70'
                      }`}
                    >
                      <div className="flex items-baseline justify-between gap-2 pb-2 border-b border-[#A6BCC8]/70 dark:border-[#51677B]/50">
                        <span className="font-mono text-xs font-semibold text-[#0B203B] dark:text-[#F0F6FA]">
                          {consistencyAudit.paradoxStatus}
                        </span>
                        <span className="font-mono text-xs tabular-nums text-[#28676A] dark:text-[#87B9B2]">
                          {consistencyAudit.axiomsSatisfiedCount}/4 Axioms
                        </span>
                      </div>

                      <div className="mt-2.5 flex flex-wrap gap-2 text-[11px] font-mono">
                        <span className="px-2 py-0.5 border border-[#A6BCC8] dark:border-[#51677B]/50 bg-[#F7FAFC] dark:bg-[#08182E] text-[#14335A] dark:text-[#87B9B2]">
                          Model: {consistencyAudit.matchingCountermodel}
                        </span>
                        {consistencyAudit.violatesStratification && (
                          <span className="px-2 py-0.5 border border-[#1B3F6C] bg-[#E5EFF5] dark:bg-[#14335A] text-[#1B3F6C] dark:text-[#E5EFF5]">
                            Stratification Violation (A4 ↛ ¬A3)
                          </span>
                        )}
                      </div>

                      {consistencyAudit.triggeredReductios.length > 0 && (
                        <div className="mt-3 space-y-1.5">
                          {consistencyAudit.triggeredReductios.map((r) => (
                            <div
                              key={r.axiom}
                              className="p-2 border border-[#1B3F6C]/35 bg-[#F7FAFC]/90 dark:bg-[#08182E] text-[11px]"
                            >
                              <div className="font-mono font-semibold text-[#1B3F6C] dark:text-[#87B9B2]">
                                {r.axiom} · {r.paradoxName}
                              </div>
                              <div className="font-mono text-[#0B203B] dark:text-[#E5EFF5] mt-0.5">
                                {r.reductioFormula}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      <ol className="mt-3 space-y-1.5 pl-4 list-decimal text-xs text-[#0B203B] dark:text-[#E5EFF5] leading-relaxed">
                        {consistencyAudit.formalInferenceChain.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ol>
                      <p className="mt-3 pt-2 border-t border-[#A6BCC8]/60 dark:border-[#51677B]/50 text-xs font-mono text-[#14335A] dark:text-[#E5EFF5]">
                        {consistencyAudit.stratificationNote}
                      </p>
                      <p className="mt-2 pt-2 border-t border-[#A6BCC8]/60 dark:border-[#51677B]/50 text-xs italic text-[#28676A] dark:text-[#87B9B2]">
                        {consistencyAudit.traditionResolution}
                      </p>
                    </div>

                    <div className="p-5 border border-[#A6BCC8] dark:border-[#51677B]/50 bg-[#F0F6FA] dark:bg-[#08182E] flex flex-col justify-between">
                      <div>
                        <div className="font-mono text-xs font-semibold text-[#14335A] dark:text-[#87B9B2] pb-2 border-b border-[#A6BCC8]/70 dark:border-[#51677B]/50">
                          Cross-Tradition Deductive Entailment
                        </div>
                        <p className="mt-3 text-xs font-semibold text-[#0B203B] dark:text-[#F0F6FA]">
                          Shared Problem: {traditionBridge.sharedProblem}
                        </p>
                        <div className="mt-2.5 p-2.5 bg-[#F7FAFC] dark:bg-[#0B203B] border border-[#BFD0DA] dark:border-[#51677B]/50 font-mono text-[11px] text-[#14335A] dark:text-[#87B9B2]">
                          {traditionBridge.deductiveBridge}
                        </div>
                        <p className="mt-3 text-xs text-[#0B203B] dark:text-[#E5EFF5] leading-relaxed">
                          {traditionBridge.unifiedThesis}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {workbenchTab === 'allen' && (
                <div className="mt-5 space-y-5">
                  <p className="text-sm font-['Source_Serif_4',Georgia,serif] text-[#0B203B] dark:text-[#E5EFF5] leading-relaxed max-w-[72ch]">
                    Interactive numerical model of Worked Example 7.1 (§37 &amp; §40): verify how Allen’s interval temporal relations (`Overlaps(I_ret, I_now)` and `Meets(I_now, I_prot)`) remain coherent inside the ~100–3000 ms Varela–Pöppel window and collapse into `[t, t]` freeze when `|I_now| = 0`.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setRetentionOverlapMs(120);
                        setImpressionNowMs(320);
                        setProtentionSpanMs(530);
                      }}
                      className="px-3 py-1.5 text-xs font-mono border border-[#14335A] bg-[#F0F6FA] dark:bg-[#08182E] text-[#14335A] dark:text-[#87B9B2] cursor-pointer"
                    >
                      Canonical Varela Window (120 / 320 / 530 ms)
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setRetentionOverlapMs(0);
                        setImpressionNowMs(0);
                        setProtentionSpanMs(0);
                      }}
                      className="px-3 py-1.5 text-xs font-mono border border-[#1B3F6C] bg-[#D5E2EA] dark:bg-[#16263A] text-[#1B3F6C] dark:text-[#BFD0DA] cursor-pointer"
                    >
                      Zero-Width Slice [t, t] (0 / 0 / 0 ms)
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setRetentionOverlapMs(20);
                        setImpressionNowMs(25);
                        setProtentionSpanMs(20);
                      }}
                      className="px-3 py-1.5 text-xs font-mono border border-[#A6BCC8] bg-[#F0F6FA] dark:bg-[#08182E] text-[#0B203B] dark:text-[#E5EFF5] cursor-pointer"
                    >
                      Sub-Threshold Micro-Switch (20 / 25 / 20 ms)
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <label className="p-4 border border-[#A6BCC8] dark:border-[#51677B]/50 bg-[#F0F6FA] dark:bg-[#08182E] text-xs space-y-2">
                      <div className="flex justify-between font-mono">
                        <span>Retention Overlap</span>
                        <span className="text-[#14335A] dark:text-[#87B9B2] tabular-nums">{retentionOverlapMs} ms</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={1000}
                        step={10}
                        value={retentionOverlapMs}
                        onChange={(e) => setRetentionOverlapMs(Number(e.target.value))}
                        className="w-full accent-[#14335A]"
                      />
                    </label>

                    <label className="p-4 border border-[#A6BCC8] dark:border-[#51677B]/50 bg-[#F0F6FA] dark:bg-[#08182E] text-xs space-y-2">
                      <div className="flex justify-between font-mono">
                        <span>Impression |I_now|</span>
                        <span className="text-[#28676A] dark:text-[#87B9B2] tabular-nums">{impressionNowMs} ms</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={1500}
                        step={10}
                        value={impressionNowMs}
                        onChange={(e) => setImpressionNowMs(Number(e.target.value))}
                        className="w-full accent-[#28676A]"
                      />
                    </label>

                    <label className="p-4 border border-[#A6BCC8] dark:border-[#51677B]/50 bg-[#F0F6FA] dark:bg-[#08182E] text-xs space-y-2">
                      <div className="flex justify-between font-mono">
                        <span>Protention Horizon</span>
                        <span className="text-[#35485B] dark:text-[#7DA39D] tabular-nums">{protentionSpanMs} ms</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={1500}
                        step={10}
                        value={protentionSpanMs}
                        onChange={(e) => setProtentionSpanMs(Number(e.target.value))}
                        className="w-full accent-[#35485B]"
                      />
                    </label>
                  </div>

                  <div
                    className={`p-5 border ${
                      allenEvaluation.isCoherentTemporalObservation
                        ? 'bg-[#E5EFF5]/85 dark:bg-[#12373A]/60 border-[#28676A]/60'
                        : 'bg-[#D5E2EA]/85 dark:bg-[#16263A]/85 border-[#1B3F6C]/70'
                    }`}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2 pb-2 border-b border-[#A6BCC8]/70 dark:border-[#51677B]/50">
                      <span className="font-mono text-xs font-semibold text-[#0B203B] dark:text-[#F0F6FA]">
                        {allenEvaluation.bandClassification}
                      </span>
                      <span className="font-mono text-xs tabular-nums text-[#28676A] dark:text-[#87B9B2]">
                        Total Horizon: {allenEvaluation.totalHorizonMs.toFixed(0)} ms
                      </span>
                    </div>
                    <div className="mt-3 p-2.5 bg-[#F7FAFC] dark:bg-[#08182E] border border-[#BFD0DA] dark:border-[#51677B]/50 font-mono text-xs text-[#14335A] dark:text-[#87B9B2]">
                      {allenEvaluation.intervalNotation}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-3 font-mono text-xs">
                      <span className={allenEvaluation.overlapsHolds ? 'text-[#28676A] dark:text-[#87B9B2]' : 'text-[#1B3F6C] dark:text-[#BFD0DA]'}>
                        Overlaps(I_ret, I_now): {String(allenEvaluation.overlapsHolds)} ({allenEvaluation.overlapMs} ms)
                      </span>
                      <span className={allenEvaluation.meetsHolds ? 'text-[#28676A] dark:text-[#87B9B2]' : 'text-[#1B3F6C] dark:text-[#BFD0DA]'}>
                        Meets(I_now, I_prot): {String(allenEvaluation.meetsHolds)}
                      </span>
                    </div>
                    <p className="mt-3 text-xs text-[#0B203B] dark:text-[#E5EFF5] leading-relaxed">
                      {allenEvaluation.diagnosis}
                    </p>
                  </div>
                </div>
              )}

              {workbenchTab === 'functors' && (
                <div className="mt-5 space-y-5">
                  <p className="text-sm font-['Source_Serif_4',Georgia,serif] text-[#0B203B] dark:text-[#E5EFF5] leading-relaxed max-w-[72ch]">
                    Inspect the Structural Identity Thesis (§38) category-theoretic functors mapping Phenomenology (<code>Phen</code>), Relational Quantum Mechanics (<code>Quant</code>), and Autopoietic Systems Theory (<code>Sys</code>) onto the shared invariant signature <code>Σ_Obs</code>.
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {(['Phen', 'Quant', 'Sys'] as const).map((src) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setSitSource(src)}
                        className={`px-4 py-2 text-xs font-mono border cursor-pointer transition-colors ${
                          sitSource === src
                            ? 'bg-[#28676A] text-[#F7FAFC] border-[#12373A]'
                            : 'bg-[#F0F6FA] dark:bg-[#08182E] text-[#0B203B] dark:text-[#F0F6FA] border-[#A6BCC8] dark:border-[#51677B]/50'
                        }`}
                      >
                        {src === 'Phen' && 'F_Phen : Phen → Σ_Obs (§§2–15a)'}
                        {src === 'Quant' && 'F_RQM : Quant → Σ_Obs (§§16–27)'}
                        {src === 'Sys' && 'F_Bio : Sys → Σ_Obs (§§28–33)'}
                      </button>
                    ))}
                  </div>

                  <div className="border border-[#A6BCC8] dark:border-[#51677B]/50 bg-[#F0F6FA] dark:bg-[#08182E] p-5 space-y-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 pb-2 border-b border-[#BFD0DA] dark:border-[#51677B]/50">
                      <span className="font-mono text-sm font-semibold text-[#14335A] dark:text-[#87B9B2]">
                        {sitFunctorAudit.functorName}
                      </span>
                      <span className="font-mono text-xs text-[#28676A] dark:text-[#7DA39D]">
                        Target: {sitFunctorAudit.targetSignature}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-[#F7FAFC] dark:bg-[#0B203B] border border-[#BFD0DA] dark:border-[#51677B]/50">
                        <div className="font-mono text-[#14335A] dark:text-[#87B9B2]">Objects Ob({sitFunctorAudit.sourceCategory})</div>
                        <div className="mt-1 font-mono text-[11px] text-[#0B203B] dark:text-[#F0F6FA]">{sitFunctorAudit.objectsDefinition}</div>
                      </div>
                      <div className="p-3 bg-[#F7FAFC] dark:bg-[#0B203B] border border-[#BFD0DA] dark:border-[#51677B]/50">
                        <div className="font-mono text-[#14335A] dark:text-[#87B9B2]">Morphisms Hom({sitFunctorAudit.sourceCategory})</div>
                        <div className="mt-1 text-[#0B203B] dark:text-[#F0F6FA]">{sitFunctorAudit.morphismsDefinition}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                      {sitFunctorAudit.axiomMappings.map((am) => (
                        <div key={am.axiom} className="p-2.5 bg-[#F7FAFC] dark:bg-[#0B203B] border border-[#A6BCC8] dark:border-[#51677B]/50">
                          <span className="font-mono font-semibold text-[#14335A] dark:text-[#87B9B2]">{am.axiom}: </span>
                          <span className="text-[#0B203B] dark:text-[#E5EFF5]">{am.imageText}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="font-mono text-[#28676A] dark:text-[#7DA39D]">Functor Coherence Laws:</div>
                      {sitFunctorAudit.functorLaws.map((law, idx) => (
                        <div key={idx} className="font-mono text-[11px] text-[#0B203B] dark:text-[#E5EFF5]">
                          • {law}
                        </div>
                      ))}
                    </div>
                    <p className="pt-2 border-t border-[#BFD0DA] dark:border-[#51677B]/50 text-xs italic text-[#28676A] dark:text-[#87B9B2]">
                      Boundary Anomalies: {sitFunctorAudit.anomalousBoundaryNotes}
                    </p>
                  </div>
                </div>
              )}

              {workbenchTab === 'nogo51' && (
                <div className="mt-5 space-y-5">
                  <p className="text-sm font-['Source_Serif_4',Georgia,serif] text-[#0B203B] dark:text-[#E5EFF5] leading-relaxed max-w-[72ch]">
                    Interactive witness evaluator for <strong>No-Go Theorem 5.1</strong> &amp; <strong>Worked Example 5.2</strong> (§21): inspect how the Fidelity Lemma (<code>P(r = m) ≥ 2F − 1</code>) couples classical signaling fidelity <code>F</code> across a Doplicher–Longo split cut to off-diagonal cross-cut coherence visibility <code>V_coh</code>, while preventing the converse fallacy.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setNogoFidelity(0.85);
                        setNogoVisibility(0.714);
                      }}
                      className="px-3 py-1.5 text-xs font-mono border border-[#1B3F6C] bg-[#E5EFF5] dark:bg-[#08182E] text-[#14335A] dark:text-[#87B9B2] cursor-pointer"
                    >
                      Worked Ex. 5.2 Witness (F = 0.85, V = 0.714)
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setNogoFidelity(1.0);
                        setNogoVisibility(0.0);
                      }}
                      className="px-3 py-1.5 text-xs font-mono border border-[#28676A] bg-[#D7ECE9]/60 dark:bg-[#13383B]/60 text-[#28676A] dark:text-[#87B9B2] cursor-pointer"
                    >
                      Deterministic Readout r = m (F = 1.0, V = 0.0)
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setNogoFidelity(0.5);
                        setNogoVisibility(0.0);
                      }}
                      className="px-3 py-1.5 text-xs font-mono border border-[#51677B] bg-[#E5EFF5] dark:bg-[#08182E] text-[#35485B] dark:text-[#BFD0DA] cursor-pointer"
                    >
                      Converse-Fallacy Check (F = 0.50, V = 0.0)
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="p-4 border border-[#A6BCC8] dark:border-[#51677B]/50 bg-[#E5EFF5]/60 dark:bg-[#08182E] text-xs space-y-2">
                      <div className="flex justify-between font-mono">
                        <span>One-Way Channel Fidelity F</span>
                        <span className="text-[#14335A] dark:text-[#87B9B2] tabular-nums">{nogoFidelity.toFixed(2)}</span>
                      </div>
                      <input
                        type="range"
                        min={0.5}
                        max={1.0}
                        step={0.01}
                        value={nogoFidelity}
                        onChange={(e) => setNogoFidelity(Number(e.target.value))}
                        className="w-full accent-[#14335A]"
                      />
                    </label>
                    <label className="p-4 border border-[#A6BCC8] dark:border-[#51677B]/50 bg-[#E5EFF5]/60 dark:bg-[#08182E] text-xs space-y-2">
                      <div className="flex justify-between font-mono">
                        <span>Cross-Cut Coherence Visibility V_coh</span>
                        <span className="text-[#28676A] dark:text-[#87B9B2] tabular-nums">{nogoVisibility.toFixed(3)}</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        value={nogoVisibility}
                        onChange={(e) => setNogoVisibility(Number(e.target.value))}
                        className="w-full accent-[#28676A]"
                      />
                    </label>
                  </div>

                  <div className="p-5 border border-[#51677B] bg-[#E5EFF5]/70 dark:bg-[#08182E] space-y-3 text-xs">
                    <div className="flex flex-wrap justify-between gap-2 pb-2 border-b border-[#BFD0DA] dark:border-[#51677B]/50 font-mono">
                      <span className="font-semibold text-[#14335A] dark:text-[#F0F6FA]">
                        Statistical Lower Bound P(r = m) ≥ {nogo51Audit.statisticalLowerBound.toFixed(3)}
                      </span>
                      <span className="text-[#28676A] dark:text-[#87B9B2]">
                        Trace Distance ½‖ρ₀ − ρ₁‖₁ = {nogo51Audit.twoQubitTraceDistance.toFixed(3)}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3 font-mono text-[11px]">
                      <span className="px-2 py-0.5 border border-[#A6BCC8] dark:border-[#51677B]/50">
                        Statistical Clause (F &gt; 1/2): {String(nogo51Audit.statisticalClauseTriggered)}
                      </span>
                      <span className="px-2 py-0.5 border border-[#A6BCC8] dark:border-[#51677B]/50">
                        Deterministic (r = m): {String(nogo51Audit.deterministicSatisfied)}
                      </span>
                      <span className="px-2 py-0.5 border border-[#A6BCC8] dark:border-[#51677B]/50">
                        Marginal No-Signaling: {String(nogo51Audit.noSignallingHoldsOnMarginals)}
                      </span>
                    </div>
                    <p className="text-[#0B203B] dark:text-[#E5EFF5] leading-relaxed">{nogo51Audit.verdict}</p>
                  </div>
                </div>
              )}
            </section>

            {/* Chapters 1–9 (§§0.1–43) */}
            {SYNTHESE_CHAPTERS.map((ch) => {
              const plates = SYNTHESE_PLATES.filter((p) => p.anchorChapter === ch.number);
              const figs = SYNTHESE_FIGURES.filter((f) => f.anchorChapter === ch.number);

              return (
                <section
                  key={ch.id}
                  id={ch.id}
                  className="bg-[#F7FAFC] dark:bg-[#0B203B] border border-[#A6BCC8] dark:border-[#51677B]/60 p-6 sm:p-10"
                >
                  <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl text-[#0B203B] dark:text-[#F0F6FA] text-balance leading-tight">
                    Chapter {ch.number} · {ch.title}
                  </h2>

                  <p className="mt-4 font-['Source_Serif_4',Georgia,serif] italic text-sm sm:text-base text-[#28676A] dark:text-[#87B9B2]">
                    {ch.epigraph}
                  </p>

                  {/* Drop-Cap Chapter Opening Prose */}
                  {ch.chapterIntro.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-[#BFD0DA] dark:border-[#51677B]/50 space-y-4 font-['Source_Serif_4',Georgia,serif] text-base sm:text-[17px] leading-[1.78] text-[#0B203B] dark:text-[#E5EFF5] max-w-[70ch]">
                      {ch.chapterIntro.map((para, idx) => (
                        <RichProseParagraph key={idx} text={para} dropCap={idx === 0} />
                      ))}
                    </div>
                  )}

                  {/* Argument Map at Start of Chapter 7 */}
                  {ch.number === 7 && (
                    <div className="my-8 border border-[#1B3F6C] dark:border-[#48827E] bg-[#E5EFF5]/70 dark:bg-[#08182E] p-5 sm:p-6">
                      <h3 className="font-['Playfair_Display'] font-normal text-xl text-[#0B203B] dark:text-[#F0F6FA]">
                        {SYNTHESE_ARGUMENT_MAP.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#14335A] dark:text-[#87B9B2] leading-relaxed">
                        {SYNTHESE_ARGUMENT_MAP.summary}
                      </p>
                      <div className="mt-4 space-y-2.5">
                        {SYNTHESE_ARGUMENT_MAP.nodes.map((node) => (
                          <div
                            key={node.step}
                            className="p-3 bg-[#F7FAFC] dark:bg-[#0B203B] border border-[#A6BCC8] dark:border-[#51677B]/50 grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] gap-3 text-xs"
                          >
                            <div className="font-mono font-semibold text-[#14335A] dark:text-[#87B9B2]">
                              {node.step}
                            </div>
                            <div className="text-[#0B203B] dark:text-[#E5EFF5]">{node.rule}</div>
                            <div className="text-[#28676A] dark:text-[#7DA39D]">{node.leadsTo}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Sections */}
                  <div className="mt-8 space-y-10">
                    {ch.subsections.map((sub) => (
                      <div
                        key={sub.number}
                        className="pt-6 border-t border-[#BFD0DA] dark:border-[#51677B]/50"
                      >
                        <h3 className="font-['Playfair_Display'] font-normal text-xl sm:text-2xl text-[#0F294A] dark:text-[#F0F6FA] mb-3">
                          §{sub.number} · {sub.title}
                        </h3>

                        <div className="space-y-4 font-['Source_Serif_4',Georgia,serif] text-base sm:text-[17px] leading-[1.78] text-[#0B203B] dark:text-[#E5EFF5] max-w-[70ch]">
                          {sub.paragraphs.map((para, pIdx) => (
                            <RichProseParagraph key={pIdx} text={para} />
                          ))}
                        </div>

                        {sub.equation && <LogicalSchemaCard eq={sub.equation} />}

                        {sub.theoremBox && (
                          <div className="my-8 border border-[#1B3F6C]/50 dark:border-[#87B9B2]/50 bg-[#E5EFF5]/65 dark:bg-[#16263A]/60 p-5 sm:p-6">
                            <div className="pb-2.5 mb-3 border-b border-[#A6BCC8]/70 flex flex-wrap items-baseline justify-between gap-2">
                              <span className="font-mono text-xs font-semibold text-[#14335A] dark:text-[#E5EFF5]">
                                {sub.theoremBox.kind} {sub.theoremBox.number} · {sub.theoremBox.title}
                              </span>
                            </div>
                            <p className="font-['Source_Serif_4',Georgia,serif] text-sm sm:text-base leading-relaxed text-[#0B203B] dark:text-[#F0F6FA]">
                              {sub.theoremBox.statement}
                            </p>
                            <ol className="mt-4 space-y-1.5 pl-5 list-decimal text-xs sm:text-sm text-[#08182E] dark:text-[#E5EFF5]">
                              {sub.theoremBox.proofSteps.map((st, sIdx) => (
                                <li key={sIdx}>{renderInlineProseTokens(st)}</li>
                              ))}
                            </ol>
                            <div className="mt-3 pt-2.5 border-t border-[#A6BCC8]/60 font-mono text-[11px] text-[#28676A] dark:text-[#87B9B2]">
                              {sub.theoremBox.sourceNote}
                            </div>
                          </div>
                        )}

                        {sub.workedExample && (
                          <div className="my-8 border border-[#28676A]/50 dark:border-[#48827E]/50 bg-[#F0F6FA] dark:bg-[#08182E]/70 p-5 sm:p-6">
                            <div className="pb-2.5 mb-3 border-b border-[#A6BCC8]/70 font-mono text-xs font-semibold text-[#14335A] dark:text-[#87B9B2]">
                              {sub.workedExample.title}
                            </div>
                            <p className="font-['Source_Serif_4',Georgia,serif] italic text-sm text-[#0F294A] dark:text-[#87B9B2]">
                              {sub.workedExample.setup}
                            </p>
                            <ol className="mt-3 space-y-1.5 pl-5 list-decimal text-xs sm:text-sm text-[#0B203B] dark:text-[#E5EFF5]">
                              {sub.workedExample.steps.map((st, idx) => (
                                <li key={idx}>{renderInlineProseTokens(st)}</li>
                              ))}
                            </ol>
                            <LogicalSchemaCard eq={sub.workedExample.resultEquation} />
                            <p className="text-sm font-['Source_Serif_4',Georgia,serif] italic text-[#28676A] dark:text-[#7DA39D]">
                              Conclusion: {sub.workedExample.takeaway}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Comparative Tables */}
                  {ch.number === 2 && (
                    <div className="mt-10 overflow-x-auto">
                      <h4 className="font-mono text-xs text-[#14335A] dark:text-[#87B9B2] mb-2">
                        Table 2.1 · Comparative Synthesis of Phenomenological Observer Theories (§§2–9)
                      </h4>
                      <table className="w-full text-xs border-collapse border border-[#A6BCC8] dark:border-[#51677B]/60">
                        <thead className="bg-[#E5EFF5] dark:bg-[#08182E] text-[#0B203B] dark:text-[#F0F6FA]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Theory (§)</th>
                            <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Core Claim</th>
                            <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Paradox Encountered</th>
                            <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Logical Counterpart</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_2_1_PHENOMENOLOGY.map((r) => (
                            <tr key={r.theory} className="odd:bg-[#F7FAFC] even:bg-[#E5EFF5]/60 dark:odd:bg-[#0B203B] dark:even:bg-[#08182E]">
                              <td className="p-2.5 font-semibold border border-[#A6BCC8] dark:border-[#51677B]/50">{r.theory}</td>
                              <td className="p-2.5 border border-[#A6BCC8] dark:border-[#51677B]/50">{r.coreClaim}</td>
                              <td className="p-2.5 border border-[#A6BCC8] dark:border-[#51677B]/50">{r.paradoxEncountered}</td>
                              <td className="p-2.5 font-mono text-[#28676A] dark:text-[#7DA39D] border border-[#A6BCC8] dark:border-[#51677B]/50">{r.bundleCounterpart}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {ch.number === 3 && (
                    <div className="mt-10 overflow-x-auto">
                      <h4 className="font-mono text-xs text-[#14335A] dark:text-[#87B9B2] mb-2">
                        Table 3.1 · Deconstructive &amp; Post-Structuralist Dissolution of the Sovereign Ego (§§10–15a)
                      </h4>
                      <table className="w-full text-xs border-collapse border border-[#A6BCC8] dark:border-[#51677B]/60">
                        <thead className="bg-[#E5EFF5] dark:bg-[#08182E]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Theory (§)</th>
                            <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Core Thesis</th>
                            <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Structural Dissolution</th>
                            <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Logical Counterpart</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_3_1_DECONSTRUCTION.map((r) => (
                            <tr key={r.theory} className="odd:bg-[#F7FAFC] even:bg-[#E5EFF5]/60 dark:odd:bg-[#0B203B] dark:even:bg-[#08182E]">
                              <td className="p-2.5 font-semibold border border-[#A6BCC8] dark:border-[#51677B]/50">{r.theory}</td>
                              <td className="p-2.5 border border-[#A6BCC8] dark:border-[#51677B]/50">{r.coreClaim}</td>
                              <td className="p-2.5 border border-[#A6BCC8] dark:border-[#51677B]/50">{r.structuralDissolution}</td>
                              <td className="p-2.5 font-mono text-[#1B3F6C] dark:text-[#87B9B2] border border-[#A6BCC8] dark:border-[#51677B]/50">{r.bundleCounterpart}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {ch.number === 4 && (
                    <div className="mt-10 overflow-x-auto">
                      <h4 className="font-mono text-xs text-[#14335A] dark:text-[#87B9B2] mb-2">
                        Table 4.1 · Orthodox Quantum Foundations Conceptions of the Observer (§§16–20)
                      </h4>
                      <table className="w-full text-xs border-collapse border border-[#A6BCC8] dark:border-[#51677B]/60">
                        <thead className="bg-[#E5EFF5] dark:bg-[#08182E]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Interpretation (§)</th>
                            <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Observer Seat</th>
                            <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Heisenberg / Measurement Cut</th>
                            <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Philosophical Mapping</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_4_1_QUANTUM.slice(0, 5).map((r) => (
                            <tr key={r.theory} className="odd:bg-[#F7FAFC] even:bg-[#E5EFF5]/60 dark:odd:bg-[#0B203B] dark:even:bg-[#08182E]">
                              <td className="p-2.5 font-semibold border border-[#A6BCC8] dark:border-[#51677B]/50">{r.theory}</td>
                              <td className="p-2.5 border border-[#A6BCC8] dark:border-[#51677B]/50">{r.observerSeat}</td>
                              <td className="p-2.5 border border-[#A6BCC8] dark:border-[#51677B]/50">{r.cutStatus}</td>
                              <td className="p-2.5 font-mono text-[#28676A] dark:text-[#7DA39D] border border-[#A6BCC8] dark:border-[#51677B]/50">{r.bundleMapping}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {ch.number === 5 && (
                    <div className="mt-10 overflow-x-auto">
                      <h4 className="font-mono text-xs text-[#14335A] dark:text-[#87B9B2] mb-2">
                        Table 5.1 · Relational, Epistemic, Decoherent, and Dynamical Quantum Observer Models (§§21–27)
                      </h4>
                      <table className="w-full text-xs border-collapse border border-[#A6BCC8] dark:border-[#51677B]/60">
                        <thead className="bg-[#E5EFF5] dark:bg-[#08182E]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Interpretation (§)</th>
                            <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Observer Seat</th>
                            <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Cut / Decoherence Status</th>
                            <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Philosophical Mapping</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_4_1_QUANTUM.slice(5).map((r) => (
                            <tr key={r.theory} className="odd:bg-[#F7FAFC] even:bg-[#E5EFF5]/60 dark:odd:bg-[#0B203B] dark:even:bg-[#08182E]">
                              <td className="p-2.5 font-semibold border border-[#A6BCC8] dark:border-[#51677B]/50">{r.theory}</td>
                              <td className="p-2.5 border border-[#A6BCC8] dark:border-[#51677B]/50">{r.observerSeat}</td>
                              <td className="p-2.5 border border-[#A6BCC8] dark:border-[#51677B]/50">{r.cutStatus}</td>
                              <td className="p-2.5 font-mono text-[#28676A] dark:text-[#7DA39D] border border-[#A6BCC8] dark:border-[#51677B]/50">{r.bundleMapping}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {ch.number === 6 && (
                    <div className="mt-10 overflow-x-auto">
                      <h4 className="font-mono text-xs text-[#14335A] dark:text-[#87B9B2] mb-2">
                        Table 6.1 · Systems, Autopoietic, and Enactive Observer Theories (§§28–33)
                      </h4>
                      <table className="w-full text-xs border-collapse border border-[#A6BCC8] dark:border-[#51677B]/60">
                        <thead className="bg-[#E5EFF5] dark:bg-[#08182E]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Theory (§)</th>
                            <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Core Principle</th>
                            <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Boundary / Closure Mechanism</th>
                            <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Logical Counterpart</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_5_1_SYSTEMS.map((r) => (
                            <tr key={r.theory} className="odd:bg-[#F7FAFC] even:bg-[#E5EFF5]/60 dark:odd:bg-[#0B203B] dark:even:bg-[#08182E]">
                              <td className="p-2.5 font-semibold border border-[#A6BCC8] dark:border-[#51677B]/50">{r.theory}</td>
                              <td className="p-2.5 border border-[#A6BCC8] dark:border-[#51677B]/50">{r.coreClaim}</td>
                              <td className="p-2.5 border border-[#A6BCC8] dark:border-[#51677B]/50">{r.closureMechanism}</td>
                              <td className="p-2.5 font-mono text-[#14335A] dark:text-[#87B9B2] border border-[#A6BCC8] dark:border-[#51677B]/50">{r.bundleCounterpart}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {ch.number === 7 && (
                    <div className="mt-10 space-y-8">
                      <div className="overflow-x-auto">
                        <h4 className="font-mono text-xs text-[#14335A] dark:text-[#87B9B2] mb-2">
                          Table 7.1 · Axiomatic Resolution of the Constitutive-Absence Paradox (§§34–37)
                        </h4>
                        <table className="w-full text-xs border-collapse border border-[#A6BCC8] dark:border-[#51677B]/60">
                          <thead className="bg-[#E5EFF5] dark:bg-[#08182E]">
                            <tr>
                              <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Logical Principle</th>
                              <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Structural Role</th>
                              <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Phenomenological Correlate</th>
                              <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Antinomy Dissolved</th>
                            </tr>
                          </thead>
                          <tbody>
                            {TABLE_6_1_RESOLUTION.map((r) => (
                              <tr key={r.formalObject} className="odd:bg-[#F7FAFC] even:bg-[#E5EFF5]/60 dark:odd:bg-[#0B203B] dark:even:bg-[#08182E]">
                                <td className="p-2.5 font-semibold border border-[#A6BCC8] dark:border-[#51677B]/50">{r.formalObject}</td>
                                <td className="p-2.5 border border-[#A6BCC8] dark:border-[#51677B]/50">{r.mathematicalRole}</td>
                                <td className="p-2.5 border border-[#A6BCC8] dark:border-[#51677B]/50">{r.phenomenologicalCorrelate}</td>
                                <td className="p-2.5 font-mono text-[#28676A] dark:text-[#7DA39D] border border-[#A6BCC8] dark:border-[#51677B]/50">{r.obstructionResolved}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="overflow-x-auto">
                        <h4 className="font-mono text-xs text-[#28676A] dark:text-[#87B9B2] mb-2">
                          Table 7.2 · Separating Countermodels &amp; Axiom Independence Matrix (M_~A1..M_~A4, §37)
                        </h4>
                        <table className="w-full text-xs border-collapse border border-[#A6BCC8] dark:border-[#51677B]/60">
                          <thead className="bg-[#E5EFF5] dark:bg-[#08182E]">
                            <tr>
                              <th className="p-2 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Countermodel</th>
                              <th className="p-2 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Domain &amp; Structure</th>
                              <th className="p-2 text-center border border-[#A6BCC8] dark:border-[#51677B]/50">A1</th>
                              <th className="p-2 text-center border border-[#A6BCC8] dark:border-[#51677B]/50">A2</th>
                              <th className="p-2 text-center border border-[#A6BCC8] dark:border-[#51677B]/50">A3</th>
                              <th className="p-2 text-center border border-[#A6BCC8] dark:border-[#51677B]/50">A4</th>
                              <th className="p-2 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Independence Proof</th>
                            </tr>
                          </thead>
                          <tbody>
                            {SYNTHESE_INDEPENDENCE_MODELS.map((m) => (
                              <tr key={m.model} className="odd:bg-[#F7FAFC] even:bg-[#E5EFF5]/60 dark:odd:bg-[#0B203B] dark:even:bg-[#08182E]">
                                <td className="p-2 font-mono font-semibold text-[#14335A] dark:text-[#87B9B2] border border-[#A6BCC8] dark:border-[#51677B]/50">{m.model}</td>
                                <td className="p-2 border border-[#A6BCC8] dark:border-[#51677B]/50">{m.domainAndStructure}</td>
                                {([m.a1, m.a2, m.a3, m.a4] as const).map((val, idx) => (
                                  <td
                                    key={idx}
                                    className={`p-2 text-center font-mono font-bold border border-[#A6BCC8] dark:border-[#51677B]/50 ${
                                      val === 'T' ? 'text-[#28676A] dark:text-[#7DA39D]' : 'text-[#1B3F6C] dark:text-[#BFD0DA]'
                                    }`}
                                  >
                                    {val}
                                  </td>
                                ))}
                                <td className="p-2 border border-[#A6BCC8] dark:border-[#51677B]/50">{m.diagnosticProof}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {ch.number === 8 && (
                    <div className="mt-10 space-y-10">
                      <div className="overflow-x-auto space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-mono text-xs text-[#14335A] dark:text-[#87B9B2]">
                            Table 8.1 · Master 32-Position Axiomatic Cross-Reference Matrix (§§2–33 × A1–A4)
                          </h4>
                          <span className="font-mono text-[11px] text-[#28676A] dark:text-[#7DA39D] tabular-nums">
                            {matrixSummary.totalPositions} Positions · {matrixSummary.fullConvergenceCount} Full (A1–A4) Convergence
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
                          {(
                            [
                              'ALL',
                              'Phenomenology',
                              'Post-Structuralism',
                              'Orthodox Quantum',
                              'Relational Quantum',
                              'Systems & Enaction'
                            ] as const
                          ).map((tr) => (
                            <button
                              key={tr}
                              type="button"
                              onClick={() => setMatrixTraditionFilter(tr)}
                              className={`px-2.5 py-1 border cursor-pointer transition-colors ${
                                matrixTraditionFilter === tr
                                  ? 'bg-[#14335A] text-[#F7FAFC] border-[#0B203B]'
                                  : 'bg-[#F0F6FA] dark:bg-[#08182E] text-[#0B203B] dark:text-[#E5EFF5] border-[#A6BCC8] dark:border-[#51677B]/50'
                              }`}
                            >
                              {tr === 'ALL' ? 'All Traditions (32)' : tr}
                            </button>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono">
                          {(['a1', 'a2', 'a3', 'a4'] as const).map((ak) => (
                            <div
                              key={ak}
                              className="px-2.5 py-1.5 bg-[#F0F6FA] dark:bg-[#08182E] border border-[#BFD0DA] dark:border-[#51677B]/50 flex justify-between"
                            >
                              <span className="font-semibold uppercase text-[#14335A] dark:text-[#87B9B2]">{ak}</span>
                              <span className="tabular-nums text-[#28676A] dark:text-[#7DA39D]">
                                ✓{matrixSummary.axiomCounts[ak].full} · p{matrixSummary.axiomCounts[ak].partial} · ✗{matrixSummary.axiomCounts[ak].anomaly}
                              </span>
                            </div>
                          ))}
                        </div>

                        <table className="w-full text-xs border-collapse border border-[#A6BCC8] dark:border-[#51677B]/60">
                          <thead className="bg-[#E5EFF5] dark:bg-[#08182E]">
                            <tr>
                              <th className="p-2 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">§</th>
                              <th className="p-2 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Framework</th>
                              <th className="p-2 text-center border border-[#A6BCC8] dark:border-[#51677B]/50">A1</th>
                              <th className="p-2 text-center border border-[#A6BCC8] dark:border-[#51677B]/50">A2</th>
                              <th className="p-2 text-center border border-[#A6BCC8] dark:border-[#51677B]/50">A3</th>
                              <th className="p-2 text-center border border-[#A6BCC8] dark:border-[#51677B]/50">A4</th>
                              <th className="p-2 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Structural Synthesis &amp; Anomaly Note</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredMatrixRows.map((r) => {
                              const cellClass = (v: '✓' | '✗' | 'partial') =>
                                v === '✓'
                                  ? 'text-[#28676A] dark:text-[#7DA39D] font-bold'
                                  : v === '✗'
                                  ? 'text-[#1B3F6C] dark:text-[#BFD0DA] font-bold'
                                  : 'text-[#14335A] dark:text-[#87B9B2] italic';
                              return (
                                <tr key={r.section} className="odd:bg-[#F7FAFC] even:bg-[#E5EFF5]/60 dark:odd:bg-[#0B203B] dark:even:bg-[#08182E]">
                                  <td className="p-2 font-mono border border-[#A6BCC8] dark:border-[#51677B]/50">{r.section}</td>
                                  <td className="p-2 font-semibold border border-[#A6BCC8] dark:border-[#51677B]/50">{r.framework}</td>
                                  <td className={`p-2 text-center font-mono border border-[#A6BCC8] dark:border-[#51677B]/50 ${cellClass(r.a1)}`}>{r.a1}</td>
                                  <td className={`p-2 text-center font-mono border border-[#A6BCC8] dark:border-[#51677B]/50 ${cellClass(r.a2)}`}>{r.a2}</td>
                                  <td className={`p-2 text-center font-mono border border-[#A6BCC8] dark:border-[#51677B]/50 ${cellClass(r.a3)}`}>{r.a3}</td>
                                  <td className={`p-2 text-center font-mono border border-[#A6BCC8] dark:border-[#51677B]/50 ${cellClass(r.a4)}`}>{r.a4}</td>
                                  <td className="p-2 border border-[#A6BCC8] dark:border-[#51677B]/50">{r.statusNote}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>

                      <div className="overflow-x-auto">
                        <h4 className="font-mono text-xs text-[#14335A] dark:text-[#87B9B2] mb-2">
                          Table 8.2 · Structural Identity Matrix Across Phenomenology, RQM, Autopoiesis &amp; Four-Axiom Logic (§38)
                        </h4>
                        <table className="w-full text-xs border-collapse border border-[#A6BCC8] dark:border-[#51677B]/60">
                          <thead className="bg-[#E5EFF5] dark:bg-[#08182E]">
                            <tr>
                              <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Invariant Criterion</th>
                              <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Husserl (Phenomenology)</th>
                              <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Rovelli (RQM)</th>
                              <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Maturana–Varela (Autopoiesis)</th>
                              <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Four-Axiom Logic</th>
                            </tr>
                          </thead>
                          <tbody>
                            {TABLE_7_1_IDENTITY_SYNTHESIS.map((r) => (
                              <tr key={r.structuralCriterion} className="odd:bg-[#F7FAFC] even:bg-[#E5EFF5]/60 dark:odd:bg-[#0B203B] dark:even:bg-[#08182E]">
                                <td className="p-2.5 font-semibold border border-[#A6BCC8] dark:border-[#51677B]/50">{r.structuralCriterion}</td>
                                <td className="p-2.5 border border-[#A6BCC8] dark:border-[#51677B]/50">{r.husserlPhenom}</td>
                                <td className="p-2.5 border border-[#A6BCC8] dark:border-[#51677B]/50">{r.rovelliRqm}</td>
                                <td className="p-2.5 border border-[#A6BCC8] dark:border-[#51677B]/50">{r.autopoiesisBio}</td>
                                <td className="p-2.5 font-mono text-[#28676A] dark:text-[#87B9B2] border border-[#A6BCC8] dark:border-[#51677B]/50">{r.fiberBundleFormal}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="overflow-x-auto">
                        <h4 className="font-mono text-xs text-[#14335A] dark:text-[#87B9B2] mb-2">
                          Table 8.3 · Axiom-by-Axiom Empirical Falsification Channels &amp; Methodological Crucibles (§40)
                        </h4>
                        <table className="w-full text-xs border-collapse border border-[#A6BCC8] dark:border-[#51677B]/60">
                          <thead className="bg-[#E5EFF5] dark:bg-[#08182E]">
                            <tr>
                              <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Domain</th>
                              <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Target Observable</th>
                              <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Philosophical Prediction</th>
                              <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Null Consequence</th>
                            </tr>
                          </thead>
                          <tbody>
                            {TABLE_8_1_TESTABLE_CORRELATION.map((r) => (
                              <tr key={r.channel} className="odd:bg-[#F7FAFC] even:bg-[#E5EFF5]/60 dark:odd:bg-[#0B203B] dark:even:bg-[#08182E]">
                                <td className="p-2.5 font-semibold border border-[#A6BCC8] dark:border-[#51677B]/50">{r.channel}</td>
                                <td className="p-2.5 border border-[#A6BCC8] dark:border-[#51677B]/50">{r.targetObservable}</td>
                                <td className="p-2.5 font-mono text-[#28676A] dark:text-[#87B9B2] border border-[#A6BCC8] dark:border-[#51677B]/50">{r.predictedSignal}</td>
                                <td className="p-2.5 border border-[#A6BCC8] dark:border-[#51677B]/50">{r.nullConsequence}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="overflow-x-auto">
                        <h4 className="font-mono text-xs text-[#28676A] dark:text-[#87B9B2] mb-2">
                          Table 8.4 · Auxiliary Assumptions Isolated Across Disjoint Experimental Crucibles (§40 · Duhem–Quine Defense)
                        </h4>
                        <table className="w-full text-xs border-collapse border border-[#A6BCC8] dark:border-[#51677B]/60">
                          <thead className="bg-[#E5EFF5] dark:bg-[#08182E]">
                            <tr>
                              <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Experimental Crucible</th>
                              <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Target Axiom</th>
                              <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Isolated Auxiliary Assumptions</th>
                              <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Anti-Holism Decoupling Guard</th>
                            </tr>
                          </thead>
                          <tbody>
                            {TABLE_8_4_AUXILIARY_ASSUMPTIONS.map((row) => (
                              <tr key={row.crucible} className="odd:bg-[#F7FAFC] even:bg-[#E5EFF5]/60 dark:odd:bg-[#0B203B] dark:even:bg-[#08182E]">
                                <td className="p-2.5 font-semibold border border-[#A6BCC8] dark:border-[#51677B]/50">{row.crucible}</td>
                                <td className="p-2.5 font-mono text-[#14335A] dark:text-[#87B9B2] border border-[#A6BCC8] dark:border-[#51677B]/50">{row.targetAxiom}</td>
                                <td className="p-2.5 border border-[#A6BCC8] dark:border-[#51677B]/50">{row.isolatedAuxiliaries}</td>
                                <td className="p-2.5 text-[#2E6966] dark:text-[#7DA39D] border border-[#A6BCC8] dark:border-[#51677B]/50">{row.decouplingGuard}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {plates.map((pl) => (
                    <SynthesePlateCard key={pl.id} plate={pl} />
                  ))}
                  {figs.map((fg) => (
                    <SyntheseFigureCard key={fg.id} fig={fg} />
                  ))}
                </section>
              );
            })}

            {/* Glossary */}
            <section
              id="glossary"
              className="bg-[#F7FAFC] dark:bg-[#0B203B] border border-[#A6BCC8] dark:border-[#51677B]/60 p-6 sm:p-10"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#BFD0DA] dark:border-[#51677B]/50">
                <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl text-[#0B203B] dark:text-[#F0F6FA]">
                  Glossary of Concepts &amp; Logical Notation
                </h2>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#14335A] dark:text-[#87B9B2]" />
                  <input
                    type="text"
                    value={glossaryFilter}
                    onChange={(e) => setGlossaryFilter(e.target.value)}
                    placeholder="Filter glossary terms..."
                    className="pl-8 pr-3 py-1.5 text-xs bg-[#F0F6FA] dark:bg-[#08182E] border border-[#A6BCC8] dark:border-[#51677B]/60 text-[#0B203B] dark:text-[#F0F6FA] focus:outline-none focus:border-[#14335A]"
                  />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredGlossary.map((g) => (
                  <div
                    key={g.term}
                    className="p-4 bg-[#F0F6FA] dark:bg-[#08182E] border border-[#BFD0DA] dark:border-[#51677B]/50"
                  >
                    <div className="font-['Playfair_Display'] text-base text-[#14335A] dark:text-[#87B9B2]">
                      {g.term}
                      {g.acronym ? ` (${g.acronym})` : ''}
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#0B203B] dark:text-[#E5EFF5]">
                      {g.definition}
                    </p>
                  </div>
                ))}
              </div>

              <h3 className="mt-8 font-['Playfair_Display'] font-normal text-xl text-[#0F294A] dark:text-[#F0F6FA] mb-3">
                Logical Symbols &amp; Axioms
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse border border-[#A6BCC8] dark:border-[#51677B]/60">
                  <thead className="bg-[#E5EFF5] dark:bg-[#08182E]">
                    <tr>
                      <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Symbol</th>
                      <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Concept</th>
                      <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Domain</th>
                      <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Logical Definition</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SYNTHESE_SYMBOL_GLOSSARY.map((s) => (
                      <tr key={s.symbol} className="odd:bg-[#F7FAFC] even:bg-[#E5EFF5]/60 dark:odd:bg-[#0B203B] dark:even:bg-[#08182E]">
                        <td className="p-2.5 font-mono font-semibold text-[#14335A] dark:text-[#87B9B2] border border-[#A6BCC8] dark:border-[#51677B]/50">{s.symbol}</td>
                        <td className="p-2.5 border border-[#A6BCC8] dark:border-[#51677B]/50">{s.name}</td>
                        <td className="p-2.5 font-mono border border-[#A6BCC8] dark:border-[#51677B]/50">{s.domain}</td>
                        <td className="p-2.5 border border-[#A6BCC8] dark:border-[#51677B]/50">{s.definition}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Appendices */}
            <section
              id="appendices"
              className="bg-[#F7FAFC] dark:bg-[#0B203B] border border-[#A6BCC8] dark:border-[#51677B]/60 p-6 sm:p-10 space-y-10"
            >
              <div className="pb-4 border-b border-[#BFD0DA] dark:border-[#51677B]/50">
                <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl text-[#0B203B] dark:text-[#F0F6FA]">
                  Supplementary Appendices A–{SYNTHESE_APPENDICES[SYNTHESE_APPENDICES.length - 1]?.letter ?? 'D'}
                </h2>
              </div>

              {SYNTHESE_APPENDICES.map((app) => (
                <div key={app.letter} className="pt-4 border-t border-[#BFD0DA] dark:border-[#51677B]/50">
                  <h3 className="font-['Playfair_Display'] font-normal text-xl text-[#0F294A] dark:text-[#F0F6FA]">
                    Appendix {app.letter} · {app.title}
                  </h3>
                  <p className="mt-1 text-sm italic text-[#28676A] dark:text-[#87B9B2]">
                    {app.summary}
                  </p>
                  <div className="mt-4 space-y-3 font-['Source_Serif_4',Georgia,serif] text-sm sm:text-base leading-relaxed text-[#0B203B] dark:text-[#E5EFF5] max-w-[70ch]">
                    {app.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  {app.equations.map((eq) => (
                    <LogicalSchemaCard key={eq.label} eq={eq} />
                  ))}

                  {app.theoremBoxes?.map((tb) => (
                    <div key={tb.number} className="my-6 border border-[#1B3F6C]/50 dark:border-[#87B9B2]/50 bg-[#E5EFF5]/65 dark:bg-[#16263A]/60 p-5 sm:p-6">
                      <div className="pb-2.5 mb-3 border-b border-[#A6BCC8]/70 flex flex-wrap items-baseline justify-between gap-2">
                        <span className="font-mono text-xs font-semibold text-[#14335A] dark:text-[#E5EFF5]">
                          {tb.kind} {tb.number} · {tb.title}
                        </span>
                      </div>
                      <p className="font-['Source_Serif_4',Georgia,serif] text-sm sm:text-base leading-relaxed text-[#0B203B] dark:text-[#F0F6FA]">
                        {tb.statement}
                      </p>
                      <ol className="mt-4 space-y-1.5 pl-5 list-decimal text-xs sm:text-sm text-[#08182E] dark:text-[#E5EFF5]">
                        {tb.proofSteps.map((st, sIdx) => (
                          <li key={sIdx}>{renderInlineProseTokens(st)}</li>
                        ))}
                      </ol>
                      <div className="mt-3 pt-2.5 border-t border-[#A6BCC8]/60 font-mono text-[11px] text-[#28676A] dark:text-[#87B9B2]">
                        {tb.sourceNote}
                      </div>
                    </div>
                  ))}

                  {app.reproducibilityLedger && (
                    <div className="mt-6 overflow-x-auto">
                      <table className="w-full text-xs border-collapse border border-[#A6BCC8] dark:border-[#51677B]/60">
                        <thead className="bg-[#E5EFF5] dark:bg-[#08182E]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Condition</th>
                            <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Logical Rule</th>
                            <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Tradition Grounds</th>
                            <th className="p-2.5 text-left border border-[#A6BCC8] dark:border-[#51677B]/50">Deductive Outcome</th>
                          </tr>
                        </thead>
                        <tbody className="font-mono tabular-nums">
                          {app.reproducibilityLedger.map((r) => (
                            <tr key={r.checkpoint} className="odd:bg-[#F7FAFC] even:bg-[#E5EFF5]/60 dark:odd:bg-[#0B203B] dark:even:bg-[#08182E]">
                              <td className="p-2.5 font-sans font-semibold border border-[#A6BCC8] dark:border-[#51677B]/50">{r.checkpoint}</td>
                              <td className="p-2.5 border border-[#A6BCC8] dark:border-[#51677B]/50">{r.formula}</td>
                              <td className="p-2.5 border border-[#A6BCC8] dark:border-[#51677B]/50">{r.referenceConstants}</td>
                              <td className="p-2.5 text-[#28676A] dark:text-[#7DA39D] border border-[#A6BCC8] dark:border-[#51677B]/50">{r.computedOutput}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {app.refereeObjections && (
                    <div className="mt-6 space-y-4">
                      {app.refereeObjections.map((obj, idx) => (
                        <div
                          key={idx}
                          className="p-4 bg-[#F0F6FA] dark:bg-[#08182E] border border-[#A6BCC8] dark:border-[#51677B]/60"
                        >
                          <div className="font-semibold text-xs font-mono text-[#14335A] dark:text-[#87B9B2]">
                            {obj.objection}
                          </div>
                          <p className="mt-2 text-sm text-[#0B203B] dark:text-[#E5EFF5] leading-relaxed">
                            {obj.reply}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </section>

            {/* References */}
            <section
              id="references"
              className="bg-[#F7FAFC] dark:bg-[#0B203B] border border-[#A6BCC8] dark:border-[#51677B]/60 p-6 sm:p-10"
            >
              <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl text-[#0B203B] dark:text-[#F0F6FA] pb-4 border-b border-[#BFD0DA] dark:border-[#51677B]/50">
                References ({SYNTHESE_REFERENCES.length} Citations)
              </h2>
              <ol className="mt-6 space-y-2.5 text-xs sm:text-sm text-[#0B203B] dark:text-[#E5EFF5] leading-relaxed">
                {SYNTHESE_REFERENCES.map((r) => (
                  <li key={r.id} className="flex gap-3">
                    <span className="font-mono text-[#28676A] dark:text-[#87B9B2] tabular-nums shrink-0">
                      [{r.id}]
                    </span>
                    <span>{r.citation}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Index of Names & Index of Concepts */}
            <section
              id="indexes"
              className="bg-[#F7FAFC] dark:bg-[#0B203B] border border-[#A6BCC8] dark:border-[#51677B]/60 p-6 sm:p-10 space-y-8"
            >
              <div className="pb-4 border-b border-[#BFD0DA] dark:border-[#51677B]/50">
                <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl text-[#0B203B] dark:text-[#F0F6FA]">
                  Index of Names &amp; Index of Concepts
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-['Playfair_Display'] font-normal text-xl text-[#0F294A] dark:text-[#F0F6FA] mb-3">
                    Index of Names ({SYNTHESE_INDEX_OF_NAMES.length})
                  </h3>
                  <div className="border-t border-[#BFD0DA] dark:border-[#51677B]/50 divide-y divide-[#BFD0DA]/70 dark:divide-[#51677B]/40 text-xs">
                    {SYNTHESE_INDEX_OF_NAMES.map((item) => (
                      <div key={item.entry} className="py-1.5 flex items-baseline justify-between gap-3">
                        <span className="text-[#0B203B] dark:text-[#F0F6FA]">{item.entry}</span>
                        <span className="font-mono text-[#28676A] dark:text-[#87B9B2] shrink-0">{item.sections}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-['Playfair_Display'] font-normal text-xl text-[#0F294A] dark:text-[#F0F6FA] mb-3">
                    Index of Concepts ({SYNTHESE_INDEX_OF_CONCEPTS.length})
                  </h3>
                  <div className="border-t border-[#BFD0DA] dark:border-[#51677B]/50 divide-y divide-[#BFD0DA]/70 dark:divide-[#51677B]/40 text-xs">
                    {SYNTHESE_INDEX_OF_CONCEPTS.map((item) => (
                      <div key={item.entry} className="py-1.5 flex items-baseline justify-between gap-3">
                        <span className="text-[#0B203B] dark:text-[#F0F6FA]">{item.entry}</span>
                        <span className="font-mono text-[#14335A] dark:text-[#87B9B2] shrink-0">{item.sections}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right 30% Sticky Navigation Rail */}
          <aside className="lg:sticky lg:top-24 space-y-6">
            <div className="bg-[#F7FAFC] dark:bg-[#0B203B] border border-[#A6BCC8] dark:border-[#51677B]/60 p-5">
              <div className="text-[11px] font-mono text-[#14335A] dark:text-[#87B9B2] pb-2 border-b border-[#BFD0DA] dark:border-[#51677B]/50">
                Contents
              </div>
              <nav className="mt-3 space-y-1.5 text-xs">
                <button
                  type="button"
                  onClick={() => scrollToSection('abstract')}
                  className="block w-full text-left py-1 text-[#0B203B] dark:text-[#E5EFF5] hover:text-[#28676A] cursor-pointer"
                >
                  Abstract &amp; Dialectical Map
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('axioms-table')}
                  className="block w-full text-left py-1 text-[#0B203B] dark:text-[#E5EFF5] hover:text-[#28676A] cursor-pointer"
                >
                  Table of Axioms (A1–A4)
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('how-to-read')}
                  className="block w-full text-left py-1 text-[#0B203B] dark:text-[#E5EFF5] hover:text-[#28676A] cursor-pointer"
                >
                  How to Read This Treatise
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('workbench')}
                  className="block w-full text-left py-1 font-medium text-[#28676A] dark:text-[#87B9B2] hover:underline cursor-pointer"
                >
                  Philosophical Logic Evaluator
                </button>
                {SYNTHESE_CHAPTERS.map((ch) => (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => scrollToSection(ch.id)}
                    className="block w-full text-left py-1 text-[#14335A] dark:text-[#87B9B2] hover:text-[#28676A] dark:hover:text-[#F0F6FA] truncate cursor-pointer"
                    title={ch.title}
                  >
                    Chapter {ch.number} · {ch.title}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => scrollToSection('glossary')}
                  className="block w-full text-left py-1 text-[#0B203B] dark:text-[#E5EFF5] hover:text-[#28676A] cursor-pointer"
                >
                  Glossary &amp; Logical Notation
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('appendices')}
                  className="block w-full text-left py-1 text-[#0B203B] dark:text-[#E5EFF5] hover:text-[#28676A] cursor-pointer"
                >
                  Appendices A–{SYNTHESE_APPENDICES[SYNTHESE_APPENDICES.length - 1]?.letter ?? 'D'}
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('references')}
                  className="block w-full text-left py-1 text-[#0B203B] dark:text-[#E5EFF5] hover:text-[#28676A] cursor-pointer"
                >
                  References ({SYNTHESE_REFERENCES.length})
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('indexes')}
                  className="block w-full text-left py-1 text-[#0B203B] dark:text-[#E5EFF5] hover:text-[#28676A] cursor-pointer"
                >
                  Index of Names &amp; Concepts
                </button>
              </nav>
            </div>

            <div className="bg-[#E5EFF5]/80 dark:bg-[#08182E] border border-[#A6BCC8] dark:border-[#51677B]/60 p-5 space-y-3 text-xs">
              <div className="text-[11px] font-mono text-[#28676A] dark:text-[#87B9B2] pb-2 border-b border-[#BFD0DA] dark:border-[#51677B]/50">
                Four Foundational Axioms
              </div>
              <div className="space-y-2 text-[#0B203B] dark:text-[#E5EFF5] leading-relaxed">
                <p>
                  <strong className="text-[#14335A] dark:text-[#87B9B2]">1. Perspectival Immanence (A1):</strong>{' '}
                  Every observation is locally situated; an unsituated total standpoint triggers infinite regress.
                </p>
                <p>
                  <strong className="text-[#1B3F6C] dark:text-[#BFD0DA]">2. Relational Parity (A2):</strong>{' '}
                  Coherent viewpoints map symmetrically without privileging any solitary ego or frame.
                </p>
                <p>
                  <strong className="text-[#28676A] dark:text-[#7DA39D]">3. Operational Cut (A3):</strong>{' '}
                  Determinate discernment presupposes a finite demarcation separating interior records from exterior horizon.
                </p>
                <p>
                  <strong className="text-[#35485B] dark:text-[#E5EFF5]">4. Asymmetric Self-Relation (A4):</strong>{' '}
                  Irreversible self-acquaintance grounds mineness and a thick, non-punctual living present.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
};
