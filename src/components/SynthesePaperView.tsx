/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Paper 15 — Philosophical Treatise Editorial View for *Synthese*
 * Restrained Museum-Editorial Ecru, Charcoal, Dark Petrol Teal & Muted Deep Plum Palette
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
  type PhilosophicalAxiomSet,
  type TraditionKey
} from '../physics/synthesePhilosophyPaper';
import {
  SYNTHESE_META,
  SYNTHESE_ABSTRACT,
  SYNTHESE_AXIOM_TABLE,
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
  SYNTHESE_SYMBOL_GLOSSARY,
  SYNTHESE_GLOSSARY,
  SYNTHESE_APPENDICES,
  SYNTHESE_REFERENCES,
  SYNTHESE_INDEX_OF_NAMES,
  SYNTHESE_INDEX_OF_CONCEPTS,
  type SyntheseEquation
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
          className="font-mono text-[0.86em] px-1 py-0.5 bg-[#FAF6EC] dark:bg-[#062429] border border-[#E2D6C1] dark:border-[#186876]/40 text-[#11505C] dark:text-[#6CB2BD]"
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
        <strong key={nextKey()} className="font-semibold text-[#161A1D] dark:text-[#FAF6EC]">
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
              className="pt-3 font-['Playfair_Display'] font-normal text-lg text-[#4A0E33] dark:text-[#C974A6]"
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
                ? "first-letter:float-left first-letter:text-5xl first-letter:font-['Playfair_Display'] first-letter:text-[#4A0E33] dark:first-letter:text-[#C974A6] first-letter:mr-3 first-letter:mt-1 first-letter:leading-none"
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
    <div className="my-8 border border-[#CBBBA0] dark:border-[#186876]/45 bg-[#FAF6EC]/80 dark:bg-[#0B3942]/60 p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3 pb-3 border-b border-[#CBBBA0]/70 dark:border-[#186876]/40">
        <div
          className="text-base sm:text-lg font-['Source_Serif_4',Georgia,serif] text-[#161A1D] dark:text-[#FAF6EC] overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: eq.unicodeHtml }}
        />
        <span className="font-mono text-xs text-[#661447] dark:text-[#C974A6] tabular-nums shrink-0">
          Logical Schema {eq.label}
        </span>
      </div>

      <p className="mt-3 text-xs sm:text-sm italic text-[#161A1D]/85 dark:text-[#6CB2BD]">
        {eq.caption}
      </p>
      <p className="mt-1 text-xs sm:text-sm text-[#0F3D2B] dark:text-[#4A9374]">
        {eq.plainMeaning}
      </p>
      {eq.derivationSteps && eq.derivationSteps.length > 0 && (
        <ol className="mt-3 space-y-1 pl-5 list-decimal text-xs text-[#062429] dark:text-[#EDF5F6]">
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

  const consistencyAudit = useMemo(
    () => evaluatePhilosophicalConsistency(axioms, selectedTradition),
    [axioms, selectedTradition]
  );

  const traditionBridge = useMemo(
    () => evaluateCrossTraditionBridge(selectedTradition, bridgeTarget),
    [selectedTradition, bridgeTarget]
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
    <article className="bg-[#FAF6EC] dark:bg-[#062429] text-[#161A1D] dark:text-[#FAF6EC] min-h-screen transition-colors">
      {/* Quiet Dual Editorial Top Hairline */}
      <div className="w-full h-1 bg-[#11505C]" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14">
        {/* Dignified Treatise Masthead */}
        <header className="bg-[#FDFBF7] dark:bg-[#0B3942] border border-[#CBBBA0] dark:border-[#186876]/50 p-6 sm:p-10 lg:p-12">
          <h1 className="font-['Playfair_Display'] font-normal text-3xl sm:text-4xl lg:text-[2.85rem] leading-[1.15] text-[#161A1D] dark:text-[#FAF6EC] text-balance max-w-5xl">
            {SYNTHESE_META.title}
          </h1>

          <p className="mt-4 font-['Source_Serif_4',Georgia,serif] italic text-lg sm:text-xl text-[#4A0E33] dark:text-[#E2D6C1] max-w-4xl leading-relaxed">
            {SYNTHESE_META.laymanDeck}
          </p>

          {/* Author Masthead Grid */}
          <div className="mt-8 pt-6 border-t border-[#E2D6C1] dark:border-[#186876]/40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {SYNTHESE_META.authors.map((a) => (
              <div key={a.name} className="text-xs space-y-0.5">
                <div className="font-semibold text-[#161A1D] dark:text-[#FAF6EC]">{a.name}</div>
                <div className="text-[#11505C] dark:text-[#6CB2BD]">{a.affiliation}</div>
                {a.orcidUrl && (
                  <div>
                    <a
                      href={a.orcidUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] text-[#0F3D2B] dark:text-[#4A9374] hover:underline"
                    >
                      ORCID: {a.orcid ?? a.orcidUrl}
                    </a>
                  </div>
                )}
                <div className="text-[#4A0E33] dark:text-[#C974A6] italic">{a.creditRoles}</div>
              </div>
            ))}
          </div>

          {/* Action Toolbar */}
          <div className="mt-8 pt-6 border-t border-[#E2D6C1] dark:border-[#186876]/40 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={pdfBusy}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#4A0E33] hover:bg-[#661447] text-[#FDFBF7] text-xs font-mono tracking-wide border border-[#2E0820] transition-colors cursor-pointer disabled:opacity-60"
            >
              <Download className="w-4 h-4" />
              <span>{pdfBusy ? 'Compiling A4 Treatise PDF...' : 'Download Full A4 PDF'}</span>
            </button>

            <button
              type="button"
              onClick={downloadSyntheseHtml}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FDFBF7] dark:bg-[#062429] hover:bg-[#F4EFE6] dark:hover:bg-[#11505C]/40 text-[#0B3942] dark:text-[#EDF5F6] text-xs font-mono border border-[#CBBBA0] dark:border-[#186876] transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#11505C] dark:text-[#6CB2BD]" />
              <span>Editorial HTML</span>
            </button>

            <button
              type="button"
              onClick={downloadSyntheseLatex}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FDFBF7] dark:bg-[#062429] hover:bg-[#F4EFE6] dark:hover:bg-[#11505C]/40 text-[#0B3942] dark:text-[#EDF5F6] text-xs font-mono border border-[#CBBBA0] dark:border-[#17573E] transition-colors cursor-pointer"
            >
              <FileCode2 className="w-4 h-4 text-[#0F3D2B] dark:text-[#4A9374]" />
              <span>LaTeX (.tex)</span>
            </button>

            <button
              type="button"
              onClick={downloadSyntheseMarkdown}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FDFBF7] dark:bg-[#062429] hover:bg-[#F4EFE6] dark:hover:bg-[#11505C]/40 text-[#0B3942] dark:text-[#EDF5F6] text-xs font-mono border border-[#CBBBA0] dark:border-[#278594] transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#661447] dark:text-[#C974A6]" />
              <span>Markdown (.md)</span>
            </button>

            <button
              type="button"
              onClick={() => setShowPaletteDrawer((v) => !v)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FAF6EC] dark:bg-[#062429] hover:bg-[#F4EFE6] text-[#11505C] dark:text-[#6CB2BD] text-xs font-mono border border-[#CBBBA0] dark:border-[#186876]/60 transition-colors cursor-pointer ml-auto"
            >
              <Palette className="w-4 h-4" />
              <span>{showPaletteDrawer ? 'Hide Palette System' : 'Tonal System'}</span>
            </button>
          </div>

          {pdfError && (
            <p className="mt-3 text-xs font-mono text-[#661447] dark:text-[#C974A6]">
              PDF Export Notice: {pdfError}
            </p>
          )}

          {showPaletteDrawer && (
            <div className="mt-6 pt-6 border-t border-[#E2D6C1] dark:border-[#186876]/40">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-['Playfair_Display'] text-lg text-[#161A1D] dark:text-[#FAF6EC] font-normal">
                  40-Token Archival Palette Registry
                </h2>
                <span className="font-mono text-xs text-[#0F3D2B] dark:text-[#4A9374]">
                  {PALETTE_40_SHADES.length} calibrated tokens
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-2.5">
                {PALETTE_40_SHADES.map((shade) => (
                  <div
                    key={shade.id}
                    className="border border-[#CBBBA0] dark:border-[#186876]/40 bg-[#FAF6EC] dark:bg-[#062429] p-2 text-[11px]"
                  >
                    <div
                      className="h-7 w-full border border-black/10 mb-1.5"
                      style={{ backgroundColor: shade.hex }}
                    />
                    <div className="font-mono font-semibold text-[#161A1D] dark:text-[#FAF6EC] tabular-nums">
                      #{shade.id} · {shade.hex}
                    </div>
                    <div className="text-[#11505C] dark:text-[#6CB2BD] truncate" title={shade.name}>
                      {shade.name}
                    </div>
                    <div className="text-[10px] text-[#661447] dark:text-[#C974A6]">
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
              className="bg-[#FDFBF7] dark:bg-[#0B3942] border border-[#CBBBA0] dark:border-[#186876]/50 p-6 sm:p-10"
            >
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#161A1D] dark:text-[#FAF6EC] font-normal pb-4 border-b border-[#E2D6C1] dark:border-[#186876]/40">
                Abstract
              </h2>
              <div className="mt-6 space-y-4 font-['Source_Serif_4',Georgia,serif] text-base sm:text-[17px] leading-[1.78] text-[#161A1D] dark:text-[#EDF5F6] max-w-[70ch]">
                {SYNTHESE_ABSTRACT.map((p, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "first-letter:float-left first-letter:text-5xl first-letter:font-['Playfair_Display'] first-letter:text-[#4A0E33] dark:first-letter:text-[#C974A6] first-letter:mr-3 first-letter:mt-1 first-letter:leading-none"
                        : ''
                    }
                  >
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-[#E2D6C1] dark:border-[#186876]/40 text-xs font-mono text-[#0F3D2B] dark:text-[#4A9374]">
                Keywords: {SYNTHESE_META.keywords.join(' · ')}
              </div>

              {SYNTHESE_FIGURES.filter((f) => f.anchorChapter === 0).map((fg) => (
                <SyntheseFigureCard key={fg.id} fig={fg} />
              ))}
            </section>

            {/* Canonical Table of Axioms (A1–A4) & Reader Navigation */}
            <section
              id="axioms-table"
              className="bg-[#FDFBF7] dark:bg-[#0B3942] border border-[#CBBBA0] dark:border-[#186876]/50 p-6 sm:p-10 space-y-8"
            >
              <div>
                <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#161A1D] dark:text-[#FAF6EC] font-normal pb-4 border-b border-[#E2D6C1] dark:border-[#186876]/40">
                  Table of Axioms (A1–A4) &amp; Reading Guide
                </h2>
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                    <thead className="bg-[#EDF5F6] dark:bg-[#062429] text-[#161A1D] dark:text-[#FAF6EC]">
                      <tr>
                        <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Axiom</th>
                        <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Canonical Modal S4 Formula</th>
                        <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Modal &amp; Epistemic Status</th>
                        <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Reductio on Denial</th>
                        <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Empirical Falsifier (§40)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SYNTHESE_AXIOM_TABLE.map((ax) => (
                        <tr key={ax.code} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                          <td className="p-2.5 font-semibold text-[#4A0E33] dark:text-[#C974A6] border border-[#CBBBA0] dark:border-[#186876]/40">
                            {ax.code} · {ax.name}
                          </td>
                          <td className="p-2.5 font-mono text-[11px] text-[#11505C] dark:text-[#6CB2BD] border border-[#CBBBA0] dark:border-[#186876]/40">
                            {ax.canonicalFormula}
                          </td>
                          <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{ax.modalAndEpistemicStatus}</td>
                          <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{ax.reductioOnDenial}</td>
                          <td className="p-2.5 text-[#0F3D2B] dark:text-[#4A9374] border border-[#CBBBA0] dark:border-[#186876]/40">{ax.falsificationTrigger}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="how-to-read" className="pt-4 border-t border-[#E2D6C1] dark:border-[#186876]/40">
                <h3 className="font-['Playfair_Display'] font-normal text-xl text-[#0B3942] dark:text-[#FAF6EC] mb-3">
                  How to Read This Treatise
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {SYNTHESE_HOW_TO_READ.map((track) => (
                    <div
                      key={track.audience}
                      className="p-4 bg-[#FAF6EC] dark:bg-[#062429] border border-[#CBBBA0] dark:border-[#186876]/40 space-y-2 text-xs"
                    >
                      <div className="font-semibold text-[#4A0E33] dark:text-[#C974A6]">{track.audience}</div>
                      <div className="font-mono text-[11px] text-[#11505C] dark:text-[#6CB2BD]">{track.essentialSections}</div>
                      <p className="text-[#161A1D] dark:text-[#EDF5F6] leading-relaxed">{track.entryFocus}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Interactive Philosophical Logic & Dialectical Consistency Evaluator */}
            <section
              id="workbench"
              className="bg-[#FDFBF7] dark:bg-[#0B3942] border border-[#CBBBA0] dark:border-[#186876]/50 p-6 sm:p-10"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3 pb-4 border-b border-[#E2D6C1] dark:border-[#186876]/40">
                <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#161A1D] dark:text-[#FAF6EC] font-normal">
                  Philosophical Logic &amp; Consistency Evaluator
                </h2>
                <button
                  type="button"
                  onClick={restoreAllAxioms}
                  className="font-mono text-xs text-[#11505C] dark:text-[#6CB2BD] hover:underline cursor-pointer"
                >
                  Restore All Four Axioms
                </button>
              </div>

              <p className="mt-4 text-sm font-['Source_Serif_4',Georgia,serif] text-[#0B3942] dark:text-[#EDF5F6] leading-relaxed max-w-[72ch]">
                Test the deductive necessity of the four foundational observer axioms (A1–A4). Suspending any axiom triggers the corresponding classical paradox or reductio ad absurdum across phenomenology, deconstruction, quantum foundations, or systems theory.
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
                          ? 'bg-[#FAF6EC] dark:bg-[#062429] border-[#11505C] dark:border-[#278594]'
                          : 'bg-[#F9EEF4]/60 dark:bg-[#2E0820]/50 border-[#661447] dark:border-[#C974A6]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 text-xs font-mono">
                        <span className="font-semibold text-[#161A1D] dark:text-[#FAF6EC]">
                          {ctrl.code} · {ctrl.name}
                        </span>
                        <span className={active ? 'text-[#0F3D2B] dark:text-[#4A9374]' : 'text-[#661447] dark:text-[#C974A6]'}>
                          {active ? 'Affirmed' : 'Suspended'}
                        </span>
                      </div>
                      <div className="mt-1.5 font-mono text-[11px] text-[#11505C] dark:text-[#6CB2BD]">
                        {ctrl.formula}
                      </div>
                      <p className="mt-1.5 text-xs text-[#062429]/85 dark:text-[#EDF5F6]/85 leading-relaxed">
                        {ctrl.summary}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Tradition & Bridge Selectors */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="border border-[#CBBBA0] dark:border-[#186876]/40 bg-[#FAF6EC] dark:bg-[#062429] p-4 space-y-3">
                  <div className="text-xs font-mono text-[#11505C] dark:text-[#6CB2BD]">
                    Primary Tradition Under Audit
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {TRADITION_OPTIONS.map((opt) => (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => setSelectedTradition(opt.key)}
                        className={`text-left px-3 py-2 text-xs border transition-colors cursor-pointer ${
                          selectedTradition === opt.key
                            ? 'bg-[#11505C] text-[#FDFBF7] border-[#0B3942]'
                            : 'bg-[#FDFBF7] dark:bg-[#0B3942] text-[#161A1D] dark:text-[#FAF6EC] border-[#CBBBA0] dark:border-[#186876]/40'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border border-[#CBBBA0] dark:border-[#186876]/40 bg-[#FAF6EC] dark:bg-[#062429] p-4 space-y-3">
                  <div className="text-xs font-mono text-[#661447] dark:text-[#C974A6]">
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
                            ? 'bg-[#4A0E33] text-[#FDFBF7] border-[#2E0820]'
                            : 'bg-[#FDFBF7] dark:bg-[#0B3942] text-[#161A1D] dark:text-[#FAF6EC] border-[#CBBBA0] dark:border-[#186876]/40'
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
                      ? 'bg-[#EEF5F1]/80 dark:bg-[#082419]/60 border-[#17573E]/50'
                      : 'bg-[#F9EEF4]/85 dark:bg-[#2E0820]/60 border-[#661447]/60'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2 pb-2 border-b border-[#CBBBA0]/70 dark:border-[#186876]/40">
                    <span className="font-mono text-xs font-semibold text-[#161A1D] dark:text-[#FAF6EC]">
                      {consistencyAudit.paradoxStatus}
                    </span>
                    <span className="font-mono text-xs tabular-nums text-[#11505C] dark:text-[#6CB2BD]">
                      {consistencyAudit.axiomsSatisfiedCount}/4 Axioms
                    </span>
                  </div>
                  <ol className="mt-3 space-y-1.5 pl-4 list-decimal text-xs text-[#161A1D] dark:text-[#EDF5F6] leading-relaxed">
                    {consistencyAudit.formalInferenceChain.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                  <p className="mt-3 pt-3 border-t border-[#CBBBA0]/60 dark:border-[#186876]/40 text-xs italic text-[#0F3D2B] dark:text-[#4A9374]">
                    {consistencyAudit.traditionResolution}
                  </p>
                </div>

                <div className="p-5 border border-[#CBBBA0] dark:border-[#186876]/50 bg-[#FAF6EC] dark:bg-[#062429] flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-xs font-semibold text-[#11505C] dark:text-[#6CB2BD] pb-2 border-b border-[#CBBBA0]/70 dark:border-[#186876]/40">
                      Cross-Tradition Deductive Entailment
                    </div>
                    <p className="mt-3 text-xs font-semibold text-[#161A1D] dark:text-[#FAF6EC]">
                      Shared Problem: {traditionBridge.sharedProblem}
                    </p>
                    <div className="mt-2.5 p-2.5 bg-[#FDFBF7] dark:bg-[#0B3942] border border-[#E2D6C1] dark:border-[#186876]/40 font-mono text-[11px] text-[#4A0E33] dark:text-[#C974A6]">
                      {traditionBridge.deductiveBridge}
                    </div>
                    <p className="mt-3 text-xs text-[#062429] dark:text-[#EDF5F6] leading-relaxed">
                      {traditionBridge.unifiedThesis}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Parts I–IX (§§0.1–42) */}
            {SYNTHESE_CHAPTERS.map((ch) => {
              const plates = SYNTHESE_PLATES.filter((p) => p.anchorChapter === ch.number);
              const figs = SYNTHESE_FIGURES.filter((f) => f.anchorChapter === ch.number);

              return (
                <section
                  key={ch.id}
                  id={ch.id}
                  className="bg-[#FDFBF7] dark:bg-[#0B3942] border border-[#CBBBA0] dark:border-[#186876]/50 p-6 sm:p-10"
                >
                  <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl text-[#161A1D] dark:text-[#FAF6EC] text-balance leading-tight">
                    Part {ch.number} · {ch.title}
                  </h2>

                  <p className="mt-4 font-['Source_Serif_4',Georgia,serif] italic text-sm sm:text-base text-[#11505C] dark:text-[#6CB2BD]">
                    “{ch.epigraph}”
                  </p>

                  {/* Pull Quote bounded strictly by hairline dividers */}
                  <blockquote className="my-7 py-5 border-t border-b border-[#CBBBA0] dark:border-[#186876]/50 text-center font-['Playfair_Display'] italic text-lg sm:text-xl text-[#4A0E33] dark:text-[#E2D6C1] leading-relaxed max-w-3xl mx-auto">
                    {ch.pullQuote}
                  </blockquote>

                  <p className="text-sm sm:text-base font-['Source_Serif_4',Georgia,serif] italic text-[#0F3D2B] dark:text-[#4A9374] leading-relaxed max-w-[70ch]">
                    {ch.leadSummary}
                  </p>

                  {/* Drop-Cap Part Opening Prose */}
                  {ch.chapterIntro.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-[#E2D6C1] dark:border-[#186876]/40 space-y-4 font-['Source_Serif_4',Georgia,serif] text-base sm:text-[17px] leading-[1.78] text-[#161A1D] dark:text-[#EDF5F6] max-w-[70ch]">
                      {ch.chapterIntro.map((para, idx) => (
                        <RichProseParagraph key={idx} text={para} dropCap={idx === 0} />
                      ))}
                    </div>
                  )}

                  {/* Argument Map at Start of Part VII */}
                  {ch.number === 7 && (
                    <div className="my-8 border border-[#11505C] dark:border-[#278594] bg-[#FAF6EC] dark:bg-[#062429] p-5 sm:p-6">
                      <h3 className="font-['Playfair_Display'] font-normal text-xl text-[#161A1D] dark:text-[#FAF6EC]">
                        {SYNTHESE_ARGUMENT_MAP.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#11505C] dark:text-[#6CB2BD] leading-relaxed">
                        {SYNTHESE_ARGUMENT_MAP.summary}
                      </p>
                      <div className="mt-4 space-y-2.5">
                        {SYNTHESE_ARGUMENT_MAP.nodes.map((node) => (
                          <div
                            key={node.step}
                            className="p-3 bg-[#FDFBF7] dark:bg-[#0B3942] border border-[#CBBBA0] dark:border-[#186876]/40 grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] gap-3 text-xs"
                          >
                            <div className="font-mono font-semibold text-[#4A0E33] dark:text-[#C974A6]">
                              {node.step}
                            </div>
                            <div className="text-[#161A1D] dark:text-[#EDF5F6]">{node.rule}</div>
                            <div className="text-[#0F3D2B] dark:text-[#4A9374]">{node.leadsTo}</div>
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
                        className="pt-6 border-t border-[#E2D6C1] dark:border-[#186876]/40"
                      >
                        <h3 className="font-['Playfair_Display'] font-normal text-xl sm:text-2xl text-[#0B3942] dark:text-[#FAF6EC] mb-3">
                          §{sub.number} · {sub.title}
                        </h3>

                        <div className="space-y-4 font-['Source_Serif_4',Georgia,serif] text-base sm:text-[17px] leading-[1.78] text-[#161A1D] dark:text-[#EDF5F6] max-w-[70ch]">
                          {sub.paragraphs.map((para, pIdx) => (
                            <RichProseParagraph key={pIdx} text={para} />
                          ))}
                        </div>

                        {sub.equation && <LogicalSchemaCard eq={sub.equation} />}

                        {sub.theoremBox && (
                          <div className="my-8 border border-[#661447]/40 dark:border-[#C974A6]/50 bg-[#F9EEF4]/65 dark:bg-[#4A0E33]/40 p-5 sm:p-6">
                            <div className="pb-2.5 mb-3 border-b border-[#CBBBA0]/70 flex flex-wrap items-baseline justify-between gap-2">
                              <span className="font-mono text-xs font-semibold text-[#4A0E33] dark:text-[#F7C9A5]">
                                {sub.theoremBox.kind} {sub.theoremBox.number} · {sub.theoremBox.title}
                              </span>
                            </div>
                            <p className="font-['Source_Serif_4',Georgia,serif] text-sm sm:text-base leading-relaxed text-[#161A1D] dark:text-[#FAF6EC]">
                              {sub.theoremBox.statement}
                            </p>
                            <ol className="mt-4 space-y-1.5 pl-5 list-decimal text-xs sm:text-sm text-[#062429] dark:text-[#EDF5F6]">
                              {sub.theoremBox.proofSteps.map((st, sIdx) => (
                                <li key={sIdx}>{renderInlineProseTokens(st)}</li>
                              ))}
                            </ol>
                            <div className="mt-3 pt-2.5 border-t border-[#CBBBA0]/60 font-mono text-[11px] text-[#11505C] dark:text-[#6CB2BD]">
                              {sub.theoremBox.sourceNote}
                            </div>
                          </div>
                        )}

                        {sub.workedExample && (
                          <div className="my-8 border border-[#11505C]/45 dark:border-[#278594]/50 bg-[#FAF6EC] dark:bg-[#062429]/60 p-5 sm:p-6">
                            <div className="pb-2.5 mb-3 border-b border-[#CBBBA0]/70 font-mono text-xs font-semibold text-[#11505C] dark:text-[#6CB2BD]">
                              {sub.workedExample.title}
                            </div>
                            <p className="font-['Source_Serif_4',Georgia,serif] italic text-sm text-[#0B3942] dark:text-[#6CB2BD]">
                              {sub.workedExample.setup}
                            </p>
                            <ol className="mt-3 space-y-1.5 pl-5 list-decimal text-xs sm:text-sm text-[#161A1D] dark:text-[#EDF5F6]">
                              {sub.workedExample.steps.map((st, idx) => (
                                <li key={idx}>{renderInlineProseTokens(st)}</li>
                              ))}
                            </ol>
                            <LogicalSchemaCard eq={sub.workedExample.resultEquation} />
                            <p className="text-sm font-['Source_Serif_4',Georgia,serif] italic text-[#0F3D2B] dark:text-[#4A9374]">
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
                      <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                        Table 2.1 · Comparative Synthesis of Phenomenological Observer Theories (§§2–9)
                      </h4>
                      <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                        <thead className="bg-[#EDF5F6] dark:bg-[#062429] text-[#161A1D] dark:text-[#FAF6EC]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Theory (§)</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Core Claim</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Paradox Encountered</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Logical Counterpart</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_2_1_PHENOMENOLOGY.map((r) => (
                            <tr key={r.theory} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                              <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.theory}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.coreClaim}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.paradoxEncountered}</td>
                              <td className="p-2.5 font-mono text-[#0F3D2B] dark:text-[#4A9374] border border-[#CBBBA0] dark:border-[#186876]/40">{r.bundleCounterpart}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {ch.number === 3 && (
                    <div className="mt-10 overflow-x-auto">
                      <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                        Table 3.1 · Deconstructive &amp; Post-Structuralist Dissolution of the Sovereign Ego (§§10–15a)
                      </h4>
                      <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                        <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Theory (§)</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Core Thesis</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Structural Dissolution</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Logical Counterpart</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_3_1_DECONSTRUCTION.map((r) => (
                            <tr key={r.theory} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                              <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.theory}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.coreClaim}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.structuralDissolution}</td>
                              <td className="p-2.5 font-mono text-[#661447] dark:text-[#C974A6] border border-[#CBBBA0] dark:border-[#186876]/40">{r.bundleCounterpart}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {ch.number === 4 && (
                    <div className="mt-10 overflow-x-auto">
                      <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                        Table 4.1 · Orthodox Quantum Foundations Conceptions of the Observer (§§16–20)
                      </h4>
                      <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                        <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Interpretation (§)</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Observer Seat</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Heisenberg / Measurement Cut</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Philosophical Mapping</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_4_1_QUANTUM.slice(0, 5).map((r) => (
                            <tr key={r.theory} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                              <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.theory}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.observerSeat}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.cutStatus}</td>
                              <td className="p-2.5 font-mono text-[#0F3D2B] dark:text-[#4A9374] border border-[#CBBBA0] dark:border-[#186876]/40">{r.bundleMapping}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {ch.number === 5 && (
                    <div className="mt-10 overflow-x-auto">
                      <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                        Table 5.1 · Relational, Epistemic, Decoherent, and Dynamical Quantum Observer Models (§§21–27)
                      </h4>
                      <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                        <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Interpretation (§)</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Observer Seat</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Cut / Decoherence Status</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Philosophical Mapping</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_4_1_QUANTUM.slice(5).map((r) => (
                            <tr key={r.theory} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                              <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.theory}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.observerSeat}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.cutStatus}</td>
                              <td className="p-2.5 font-mono text-[#0F3D2B] dark:text-[#4A9374] border border-[#CBBBA0] dark:border-[#186876]/40">{r.bundleMapping}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {ch.number === 6 && (
                    <div className="mt-10 overflow-x-auto">
                      <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                        Table 6.1 · Systems, Autopoietic, and Enactive Observer Theories (§§28–33)
                      </h4>
                      <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                        <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Theory (§)</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Core Principle</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Boundary / Closure Mechanism</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Logical Counterpart</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_5_1_SYSTEMS.map((r) => (
                            <tr key={r.theory} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                              <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.theory}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.coreClaim}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.closureMechanism}</td>
                              <td className="p-2.5 font-mono text-[#11505C] dark:text-[#6CB2BD] border border-[#CBBBA0] dark:border-[#186876]/40">{r.bundleCounterpart}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {ch.number === 7 && (
                    <div className="mt-10 overflow-x-auto">
                      <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                        Table 7.1 · Axiomatic Resolution of the Constitutive-Absence Paradox (§§34–37)
                      </h4>
                      <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                        <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Logical Principle</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Structural Role</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Phenomenological Correlate</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Antinomy Dissolved</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_6_1_RESOLUTION.map((r) => (
                            <tr key={r.formalObject} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                              <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.formalObject}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.mathematicalRole}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.phenomenologicalCorrelate}</td>
                              <td className="p-2.5 font-mono text-[#0F3D2B] dark:text-[#4A9374] border border-[#CBBBA0] dark:border-[#186876]/40">{r.obstructionResolved}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {ch.number === 8 && (
                    <div className="mt-10 space-y-10">
                      <div className="overflow-x-auto">
                        <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                          Table 8.1 · Master 32-Position Axiomatic Cross-Reference Matrix (§§2–33 × A1–A4)
                        </h4>
                        <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                          <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                            <tr>
                              <th className="p-2 text-left border border-[#CBBBA0] dark:border-[#186876]/40">§</th>
                              <th className="p-2 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Framework</th>
                              <th className="p-2 text-center border border-[#CBBBA0] dark:border-[#186876]/40">A1</th>
                              <th className="p-2 text-center border border-[#CBBBA0] dark:border-[#186876]/40">A2</th>
                              <th className="p-2 text-center border border-[#CBBBA0] dark:border-[#186876]/40">A3</th>
                              <th className="p-2 text-center border border-[#CBBBA0] dark:border-[#186876]/40">A4</th>
                              <th className="p-2 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Audit Status &amp; Anomaly Note</th>
                            </tr>
                          </thead>
                          <tbody>
                            {SYNTHESE_32_MATRIX.map((r) => {
                              const cellClass = (v: '✓' | '✗' | 'partial') =>
                                v === '✓'
                                  ? 'text-[#0F3D2B] dark:text-[#4A9374] font-bold'
                                  : v === '✗'
                                  ? 'text-[#661447] dark:text-[#C974A6] font-bold'
                                  : 'text-[#11505C] dark:text-[#6CB2BD] italic';
                              return (
                                <tr key={r.section} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                                  <td className="p-2 font-mono border border-[#CBBBA0] dark:border-[#186876]/40">{r.section}</td>
                                  <td className="p-2 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.framework}</td>
                                  <td className={`p-2 text-center font-mono border border-[#CBBBA0] dark:border-[#186876]/40 ${cellClass(r.a1)}`}>{r.a1}</td>
                                  <td className={`p-2 text-center font-mono border border-[#CBBBA0] dark:border-[#186876]/40 ${cellClass(r.a2)}`}>{r.a2}</td>
                                  <td className={`p-2 text-center font-mono border border-[#CBBBA0] dark:border-[#186876]/40 ${cellClass(r.a3)}`}>{r.a3}</td>
                                  <td className={`p-2 text-center font-mono border border-[#CBBBA0] dark:border-[#186876]/40 ${cellClass(r.a4)}`}>{r.a4}</td>
                                  <td className="p-2 border border-[#CBBBA0] dark:border-[#186876]/40">{r.statusNote}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>

                      <div className="overflow-x-auto">
                        <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                          Table 8.2 · Structural Identity Matrix Across Phenomenology, RQM, Autopoiesis &amp; Four-Axiom Logic (§38)
                        </h4>
                        <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                          <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                            <tr>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Invariant Criterion</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Husserl (Phenomenology)</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Rovelli (RQM)</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Maturana–Varela (Autopoiesis)</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Four-Axiom Logic</th>
                            </tr>
                          </thead>
                          <tbody>
                            {TABLE_7_1_IDENTITY_SYNTHESIS.map((r) => (
                              <tr key={r.structuralCriterion} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                                <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.structuralCriterion}</td>
                                <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.husserlPhenom}</td>
                                <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.rovelliRqm}</td>
                                <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.autopoiesisBio}</td>
                                <td className="p-2.5 font-mono text-[#11505C] dark:text-[#6CB2BD] border border-[#CBBBA0] dark:border-[#186876]/40">{r.fiberBundleFormal}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="overflow-x-auto">
                        <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                          Table 8.3 · Axiom-by-Axiom Empirical Falsification Channels &amp; Methodological Crucibles (§40)
                        </h4>
                        <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                          <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                            <tr>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Domain</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Target Observable</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Philosophical Prediction</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Null Consequence</th>
                            </tr>
                          </thead>
                          <tbody>
                            {TABLE_8_1_TESTABLE_CORRELATION.map((r) => (
                              <tr key={r.channel} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                                <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.channel}</td>
                                <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.targetObservable}</td>
                                <td className="p-2.5 font-mono text-[#0F3D2B] dark:text-[#4A9374] border border-[#CBBBA0] dark:border-[#186876]/40">{r.predictedSignal}</td>
                                <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.nullConsequence}</td>
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
              className="bg-[#FDFBF7] dark:bg-[#0B3942] border border-[#CBBBA0] dark:border-[#186876]/50 p-6 sm:p-10"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E2D6C1] dark:border-[#186876]/40">
                <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl text-[#161A1D] dark:text-[#FAF6EC]">
                  Glossary of Concepts &amp; Logical Notation
                </h2>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#11505C] dark:text-[#6CB2BD]" />
                  <input
                    type="text"
                    value={glossaryFilter}
                    onChange={(e) => setGlossaryFilter(e.target.value)}
                    placeholder="Filter glossary terms..."
                    className="pl-8 pr-3 py-1.5 text-xs bg-[#FAF6EC] dark:bg-[#062429] border border-[#CBBBA0] dark:border-[#186876]/50 text-[#161A1D] dark:text-[#FAF6EC] focus:outline-none focus:border-[#11505C]"
                  />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredGlossary.map((g) => (
                  <div
                    key={g.term}
                    className="p-4 bg-[#FAF6EC] dark:bg-[#062429] border border-[#E2D6C1] dark:border-[#186876]/40"
                  >
                    <div className="font-['Playfair_Display'] text-base text-[#4A0E33] dark:text-[#C974A6]">
                      {g.term}
                      {g.acronym ? ` (${g.acronym})` : ''}
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#161A1D] dark:text-[#EDF5F6]">
                      {g.definition}
                    </p>
                  </div>
                ))}
              </div>

              <h3 className="mt-8 font-['Playfair_Display'] font-normal text-xl text-[#0B3942] dark:text-[#FAF6EC] mb-3">
                Logical Symbols &amp; Axioms
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                  <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                    <tr>
                      <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Symbol</th>
                      <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Concept</th>
                      <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Domain</th>
                      <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Logical Definition</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SYNTHESE_SYMBOL_GLOSSARY.map((s) => (
                      <tr key={s.symbol} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                        <td className="p-2.5 font-mono font-semibold text-[#4A0E33] dark:text-[#C974A6] border border-[#CBBBA0] dark:border-[#186876]/40">{s.symbol}</td>
                        <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{s.name}</td>
                        <td className="p-2.5 font-mono border border-[#CBBBA0] dark:border-[#186876]/40">{s.domain}</td>
                        <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{s.definition}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Appendices */}
            <section
              id="appendices"
              className="bg-[#FDFBF7] dark:bg-[#0B3942] border border-[#CBBBA0] dark:border-[#186876]/50 p-6 sm:p-10 space-y-10"
            >
              <div className="pb-4 border-b border-[#E2D6C1] dark:border-[#186876]/40">
                <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl text-[#161A1D] dark:text-[#FAF6EC]">
                  Supplementary Appendices A–{SYNTHESE_APPENDICES[SYNTHESE_APPENDICES.length - 1]?.letter ?? 'C'}
                </h2>
              </div>

              {SYNTHESE_APPENDICES.map((app) => (
                <div key={app.letter} className="pt-4 border-t border-[#E2D6C1] dark:border-[#186876]/40">
                  <h3 className="font-['Playfair_Display'] font-normal text-xl text-[#0B3942] dark:text-[#FAF6EC]">
                    Appendix {app.letter} · {app.title}
                  </h3>
                  <p className="mt-1 text-sm italic text-[#11505C] dark:text-[#6CB2BD]">
                    {app.summary}
                  </p>
                  <div className="mt-4 space-y-3 font-['Source_Serif_4',Georgia,serif] text-sm sm:text-base leading-relaxed text-[#161A1D] dark:text-[#EDF5F6] max-w-[70ch]">
                    {app.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  {app.equations.map((eq) => (
                    <LogicalSchemaCard key={eq.label} eq={eq} />
                  ))}

                  {app.reproducibilityLedger && (
                    <div className="mt-6 overflow-x-auto">
                      <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                        <thead className="bg-[#EEF5F1] dark:bg-[#062429]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Condition</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Logical Rule</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Tradition Grounds</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Deductive Outcome</th>
                          </tr>
                        </thead>
                        <tbody className="font-mono tabular-nums">
                          {app.reproducibilityLedger.map((r) => (
                            <tr key={r.checkpoint} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                              <td className="p-2.5 font-sans font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.checkpoint}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.formula}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.referenceConstants}</td>
                              <td className="p-2.5 text-[#0F3D2B] dark:text-[#4A9374] border border-[#CBBBA0] dark:border-[#186876]/40">{r.computedOutput}</td>
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
                          className="p-4 bg-[#FAF6EC] dark:bg-[#062429] border border-[#CBBBA0] dark:border-[#186876]/50"
                        >
                          <div className="font-semibold text-xs font-mono text-[#4A0E33] dark:text-[#C974A6]">
                            {obj.objection}
                          </div>
                          <p className="mt-2 text-sm text-[#161A1D] dark:text-[#EDF5F6] leading-relaxed">
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
              className="bg-[#FDFBF7] dark:bg-[#0B3942] border border-[#CBBBA0] dark:border-[#186876]/50 p-6 sm:p-10"
            >
              <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl text-[#161A1D] dark:text-[#FAF6EC] pb-4 border-b border-[#E2D6C1] dark:border-[#186876]/40">
                References ({SYNTHESE_REFERENCES.length} Citations)
              </h2>
              <ol className="mt-6 space-y-2.5 text-xs sm:text-sm text-[#161A1D] dark:text-[#EDF5F6] leading-relaxed">
                {SYNTHESE_REFERENCES.map((r) => (
                  <li key={r.id} className="flex gap-3">
                    <span className="font-mono text-[#11505C] dark:text-[#6CB2BD] tabular-nums shrink-0">
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
              className="bg-[#FDFBF7] dark:bg-[#0B3942] border border-[#CBBBA0] dark:border-[#186876]/50 p-6 sm:p-10 space-y-8"
            >
              <div className="pb-4 border-b border-[#E2D6C1] dark:border-[#186876]/40">
                <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl text-[#161A1D] dark:text-[#FAF6EC]">
                  Index of Names &amp; Index of Concepts
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-['Playfair_Display'] font-normal text-xl text-[#0B3942] dark:text-[#FAF6EC] mb-3">
                    Index of Names ({SYNTHESE_INDEX_OF_NAMES.length})
                  </h3>
                  <div className="border-t border-[#E2D6C1] dark:border-[#186876]/40 divide-y divide-[#E2D6C1]/70 dark:divide-[#186876]/30 text-xs">
                    {SYNTHESE_INDEX_OF_NAMES.map((item) => (
                      <div key={item.entry} className="py-1.5 flex items-baseline justify-between gap-3">
                        <span className="text-[#161A1D] dark:text-[#FAF6EC]">{item.entry}</span>
                        <span className="font-mono text-[#11505C] dark:text-[#6CB2BD] shrink-0">{item.sections}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-['Playfair_Display'] font-normal text-xl text-[#0B3942] dark:text-[#FAF6EC] mb-3">
                    Index of Concepts ({SYNTHESE_INDEX_OF_CONCEPTS.length})
                  </h3>
                  <div className="border-t border-[#E2D6C1] dark:border-[#186876]/40 divide-y divide-[#E2D6C1]/70 dark:divide-[#186876]/30 text-xs">
                    {SYNTHESE_INDEX_OF_CONCEPTS.map((item) => (
                      <div key={item.entry} className="py-1.5 flex items-baseline justify-between gap-3">
                        <span className="text-[#161A1D] dark:text-[#FAF6EC]">{item.entry}</span>
                        <span className="font-mono text-[#661447] dark:text-[#C974A6] shrink-0">{item.sections}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right 30% Sticky Navigation Rail */}
          <aside className="lg:sticky lg:top-24 space-y-6">
            <div className="bg-[#FDFBF7] dark:bg-[#0B3942] border border-[#CBBBA0] dark:border-[#186876]/50 p-5">
              <div className="text-[11px] font-mono text-[#4A0E33] dark:text-[#C974A6] pb-2 border-b border-[#E2D6C1] dark:border-[#186876]/40">
                Contents
              </div>
              <nav className="mt-3 space-y-1.5 text-xs">
                <button
                  type="button"
                  onClick={() => scrollToSection('abstract')}
                  className="block w-full text-left py-1 text-[#161A1D] dark:text-[#EDF5F6] hover:text-[#11505C] cursor-pointer"
                >
                  Abstract &amp; Dialectical Map
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('axioms-table')}
                  className="block w-full text-left py-1 text-[#161A1D] dark:text-[#EDF5F6] hover:text-[#11505C] cursor-pointer"
                >
                  Table of Axioms (A1–A4)
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('how-to-read')}
                  className="block w-full text-left py-1 text-[#161A1D] dark:text-[#EDF5F6] hover:text-[#11505C] cursor-pointer"
                >
                  How to Read This Treatise
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('workbench')}
                  className="block w-full text-left py-1 font-medium text-[#11505C] dark:text-[#6CB2BD] hover:underline cursor-pointer"
                >
                  Philosophical Logic Evaluator
                </button>
                {SYNTHESE_CHAPTERS.map((ch) => (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => scrollToSection(ch.id)}
                    className="block w-full text-left py-1 text-[#0B3942] dark:text-[#6CB2BD] hover:text-[#4A0E33] dark:hover:text-[#F7C9A5] truncate cursor-pointer"
                    title={ch.title}
                  >
                    Part {ch.number} · {ch.title}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => scrollToSection('glossary')}
                  className="block w-full text-left py-1 text-[#161A1D] dark:text-[#EDF5F6] hover:text-[#11505C] cursor-pointer"
                >
                  Glossary &amp; Logical Notation
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('appendices')}
                  className="block w-full text-left py-1 text-[#161A1D] dark:text-[#EDF5F6] hover:text-[#11505C] cursor-pointer"
                >
                  Supplementary Appendices
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('references')}
                  className="block w-full text-left py-1 text-[#161A1D] dark:text-[#EDF5F6] hover:text-[#11505C] cursor-pointer"
                >
                  References ({SYNTHESE_REFERENCES.length})
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('indexes')}
                  className="block w-full text-left py-1 text-[#161A1D] dark:text-[#EDF5F6] hover:text-[#11505C] cursor-pointer"
                >
                  Index of Names &amp; Concepts
                </button>
              </nav>
            </div>

            <div className="bg-[#FAF6EC] dark:bg-[#062429] border border-[#CBBBA0] dark:border-[#186876]/50 p-5 space-y-3 text-xs">
              <div className="text-[11px] font-mono text-[#0F3D2B] dark:text-[#4A9374] pb-2 border-b border-[#E2D6C1] dark:border-[#186876]/40">
                Four Foundational Axioms
              </div>
              <div className="space-y-2 text-[#161A1D] dark:text-[#EDF5F6] leading-relaxed">
                <p>
                  <strong className="text-[#4A0E33] dark:text-[#C974A6]">1. Perspectival Immanence (A1):</strong>{' '}
                  Every observation is locally situated; an unsituated total standpoint triggers infinite regress.
                </p>
                <p>
                  <strong className="text-[#11505C] dark:text-[#6CB2BD]">2. Relational Parity (A2):</strong>{' '}
                  Coherent viewpoints map symmetrically without privileging any solitary ego or frame.
                </p>
                <p>
                  <strong className="text-[#0F3D2B] dark:text-[#4A9374]">3. Operational Cut (A3):</strong>{' '}
                  Determinate discernment presupposes a finite demarcation separating interior records from exterior horizon.
                </p>
                <p>
                  <strong className="text-[#161A1D] dark:text-[#E2D6C1]">4. Asymmetric Self-Relation (A4):</strong>{' '}
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
