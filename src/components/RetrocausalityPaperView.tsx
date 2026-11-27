/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Paper 16 — Foundational Monograph View
 * "The Universe Remembers Its Future: Retrocausality, Temporal Boundary Conditions,
 *  and the Architecture of Causal Reality"
 *
 * Matches Paper 15's Museum-Editorial Ecru, Charcoal, Dark Petrol Teal, Pine Green & Deep Plum Palette,
 * Playfair Display headlines, Source Serif 4 body prose, and IBM Plex Mono tables/schemas.
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
  evaluateTemporalConsistency,
  evaluateTemporalBridge,
  computeAblTwoBoundaryProbability,
  type TemporalBoundaryAxiomSet,
  type TemporalRegimeKey
} from '../physics/retrocausalityPaper';
import {
  RETRO_META,
  RETRO_ABSTRACT,
  RETRO_CENTRAL_THESIS,
  RETRO_RESEARCH_QUESTIONS,
  RETRO_CONCEPTUAL_CONTRIBUTION,
  RETRO_IMPLICATION_AND_CONCLUSION,
  RETRO_PRINCIPLES_TABLE,
  TABLE_A1_INDEPENDENCE_RELATIONS,
  TABLE_A2_FORMAL_SYMBOLS_AND_CLAUSES,
  RETRO_ARGUMENT_MAP,
  RETRO_CHAPTERS,
  TABLE_1_1_FOURFOLD_TAXONOMY,
  TABLE_1_2_TAXONOMY_TO_PRINCIPLES,
  TABLE_2_1_SOLUTIONS,
  TABLE_2_2_PHILOSOPHY_TO_PHYSICS,
  TABLE_3_1_BOUNDARY,
  TABLE_5_1_INFLUENCE_VS_CONSISTENCY,
  TABLE_6_1_QUANTUM_RETRO,
  TABLE_7_1_THERMO_ARROWS,
  TABLE_8_1_FIVE_RELATIONS,
  TABLE_8_2_EMPIRICAL_PROTOCOLS,
  TABLE_8_3_CHAPTER_1_ANSWERS,
  RETRO_SYMBOL_GLOSSARY,
  RETRO_GLOSSARY,
  RETRO_APPENDICES,
  RETRO_REFERENCES,
  RETRO_INDEX_OF_NAMES,
  RETRO_INDEX_OF_CONCEPTS,
  type RetroEquation
} from '../types/retrocausalityPaperData';
import {
  RETRO_PLATES,
  RETRO_FIGURES,
  RetroPlateCard,
  RetroFigureCard
} from './RetrocausalityPaperFigures';
import {
  downloadRetrocausalityHtml,
  downloadRetrocausalityLatex,
  downloadRetrocausalityMarkdown
} from '../utils/generateRetrocausalityPaperExports';
import { generateRetrocausalityPaperPdf } from '../utils/generateRetrocausalityPaperPdf';

const REGIME_OPTIONS: Array<{ key: TemporalRegimeKey; label: string }> = [
  { key: 'classical-retarded', label: 'Classical Retarded Cauchy Evolution (Parts 1–2)' },
  { key: 'absorber-symmetric', label: 'Time-Symmetric Absorber & Action Physics (Parts 2–3)' },
  { key: 'two-state-quantum', label: 'Two-State Vector & Pre/Post-Selection (Parts 5–6)' },
  { key: 'thermodynamic-block', label: 'Thermodynamic Arrow & Block Consistency (Parts 7–8)' }
];

const PRINCIPLE_CONTROLS: Array<{
  key: keyof TemporalBoundaryAxiomSet;
  code: string;
  name: string;
  formula: string;
  summary: string;
}> = [
  {
    key: 'timeSymmetricLaw',
    code: 'R1',
    name: 'Time-Symmetric Dynamical Law',
    formula: '□_phys(DynLaw(L) → ∃Θ_anti [Θ∘L∘Θ⁻¹ = L])',
    summary: 'Microphysical field and quantum equations remain time/CPT-invariant over Mod_phys under antiunitary Θ = U K.'
  },
  {
    key: 'twoBoundarySelection',
    code: 'R2',
    name: 'Two-Boundary History Admissibility',
    formula: 'H_adm = Sol(L) ∩ B_past ∩ B_future ≠ ∅',
    summary: 'Complete histories are jointly selected and measure-weighted (W_μ) across both initial and final boundaries.'
  },
  {
    key: 'noBackwardSignalling',
    code: 'R3',
    name: 'No-Signalling Consistency Theorem',
    formula: '∑_{b,μ} Tr[M_b(β) U K_{a,μ} ρ_p K†_{a,μ} U†] = Tr[E_a ρ_p]',
    summary: 'Derived non-circularly from Kraus/POVM completeness and microcausality [Ô(x), Ô(y)] = 0 ((x−y)²>0); Shannon coding forbids loops.'
  },
  {
    key: 'thermodynamicGradient',
    code: 'R4',
    name: 'Thermodynamic Record Asymmetry',
    formula: 'S_B(t_past) ≪ S_B(t_present) ≤ S_B(t_future)',
    summary: 'Contingent Past Hypothesis (C_{αβγδ} ≈ 0) + Landauer heat (ΔQ ≥ k_B T ln 2) lock records exclusively to the past.'
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

function LogicalSchemaCard({ eq }: { eq: RetroEquation }) {
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

      <div className="mt-2.5 px-3 py-1.5 bg-[#FDFBF7] dark:bg-[#062429] border border-[#E2D6C1] dark:border-[#186876]/40 font-mono text-[11px] sm:text-xs text-[#0B3942] dark:text-[#9FD3DD] overflow-x-auto">
        <span className="font-semibold text-[#661447] dark:text-[#C974A6] mr-2">Plain Equation:</span>
        {eq.plainEquation}
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

export const RetrocausalityPaperView: React.FC = () => {
  const [pdfBusy, setPdfBusy] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [showPaletteDrawer, setShowPaletteDrawer] = useState(false);
  const [glossaryFilter, setGlossaryFilter] = useState('');

  const [axioms, setAxioms] = useState<TemporalBoundaryAxiomSet>({
    timeSymmetricLaw: true,
    twoBoundarySelection: true,
    noBackwardSignalling: true,
    thermodynamicGradient: true
  });
  const [selectedRegime, setSelectedRegime] = useState<TemporalRegimeKey>('two-state-quantum');
  const [bridgeTarget, setBridgeTarget] = useState<TemporalRegimeKey>('thermodynamic-block');

  // Interactive ABL Pre/Post-Selection Explorer angles (degrees)
  const [postSelectDeg, setPostSelectDeg] = useState<number>(90);
  const [testAngleDeg, setTestAngleDeg] = useState<number>(45);

  const consistencyAudit = useMemo(
    () => evaluateTemporalConsistency(axioms, selectedRegime),
    [axioms, selectedRegime]
  );

  const regimeBridge = useMemo(
    () => evaluateTemporalBridge(selectedRegime, bridgeTarget),
    [selectedRegime, bridgeTarget]
  );

  const ablResult = useMemo(
    () =>
      computeAblTwoBoundaryProbability(
        0,
        (postSelectDeg * Math.PI) / 180,
        (testAngleDeg * Math.PI) / 180
      ),
    [postSelectDeg, testAngleDeg]
  );

  const toggleAxiom = (key: keyof TemporalBoundaryAxiomSet) => {
    setAxioms((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const restoreAllPrinciples = () => {
    setAxioms({
      timeSymmetricLaw: true,
      twoBoundarySelection: true,
      noBackwardSignalling: true,
      thermodynamicGradient: true
    });
  };

  const filteredGlossary = useMemo(() => {
    const q = glossaryFilter.trim().toLowerCase();
    if (!q) return RETRO_GLOSSARY;
    return RETRO_GLOSSARY.filter(
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
      await generateRetrocausalityPaperPdf();
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
            {RETRO_META.title}
          </h1>

          <p className="mt-4 font-['Source_Serif_4',Georgia,serif] italic text-lg sm:text-xl text-[#4A0E33] dark:text-[#E2D6C1] max-w-4xl leading-relaxed">
            {RETRO_META.laymanDeck}
          </p>

          {/* Author Masthead Grid (7 Authors Including Mirza Adnan Mohtashim) */}
          <div className="mt-8 pt-6 border-t border-[#E2D6C1] dark:border-[#186876]/40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {RETRO_META.authors.map((a) => (
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

          <div className="mt-5 pt-4 border-t border-[#E2D6C1]/70 dark:border-[#186876]/30 space-y-1 text-[11px] text-[#11505C] dark:text-[#6CB2BD]">
            <p>{RETRO_META.institutionalDisclaimer}</p>
            <p className="italic text-[#4A0E33] dark:text-[#C974A6]">{RETRO_META.venueFormatNote}</p>
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
              onClick={downloadRetrocausalityHtml}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FDFBF7] dark:bg-[#062429] hover:bg-[#F4EFE6] dark:hover:bg-[#11505C]/40 text-[#0B3942] dark:text-[#EDF5F6] text-xs font-mono border border-[#CBBBA0] dark:border-[#186876] transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#11505C] dark:text-[#6CB2BD]" />
              <span>Editorial HTML</span>
            </button>

            <button
              type="button"
              onClick={downloadRetrocausalityLatex}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FDFBF7] dark:bg-[#062429] hover:bg-[#F4EFE6] dark:hover:bg-[#11505C]/40 text-[#0B3942] dark:text-[#EDF5F6] text-xs font-mono border border-[#CBBBA0] dark:border-[#17573E] transition-colors cursor-pointer"
            >
              <FileCode2 className="w-4 h-4 text-[#0F3D2B] dark:text-[#4A9374]" />
              <span>LaTeX (.tex)</span>
            </button>

            <button
              type="button"
              onClick={downloadRetrocausalityMarkdown}
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
            {/* Abstract & Central Thesis */}
            <section
              id="abstract"
              className="bg-[#FDFBF7] dark:bg-[#0B3942] border border-[#CBBBA0] dark:border-[#186876]/50 p-6 sm:p-10"
            >
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#161A1D] dark:text-[#FAF6EC] font-normal pb-4 border-b border-[#E2D6C1] dark:border-[#186876]/40">
                Abstract
              </h2>
              <div className="mt-6 space-y-4 font-['Source_Serif_4',Georgia,serif] text-base sm:text-[17px] leading-[1.78] text-[#161A1D] dark:text-[#EDF5F6] max-w-[70ch]">
                {RETRO_ABSTRACT.map((p, i) => (
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

              <div className="mt-8 border border-[#CBBBA0] dark:border-[#186876]/50 bg-[#FAF6EC] dark:bg-[#062429] p-6">
                <h3 className="font-['Playfair_Display'] font-normal text-xl text-[#4A0E33] dark:text-[#C974A6]">
                  {RETRO_CENTRAL_THESIS.title}
                </h3>
                <p className="mt-3 font-['Source_Serif_4',Georgia,serif] text-base sm:text-lg text-[#161A1D] dark:text-[#FAF6EC] leading-relaxed">
                  <strong>{RETRO_CENTRAL_THESIS.lead}</strong>
                </p>
                <div className="mt-3 space-y-2 font-['Source_Serif_4',Georgia,serif] text-sm sm:text-base text-[#0B3942] dark:text-[#EDF5F6]">
                  {RETRO_CENTRAL_THESIS.elaboration.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2D6C1] dark:border-[#186876]/40 text-xs font-mono text-[#0F3D2B] dark:text-[#4A9374]">
                Keywords: {RETRO_META.keywords.join(' · ')}
              </div>

              {RETRO_PLATES.filter((p) => p.anchorChapter === 0).map((pl) => (
                <RetroPlateCard key={pl.id} plate={pl} />
              ))}
              {RETRO_FIGURES.filter((f) => f.anchorChapter === 0).map((fg) => (
                <RetroFigureCard key={fg.id} fig={fg} />
              ))}
            </section>

            {/* Foundational Principles (R1–R4), Questions & Reading Guide */}
            <section
              id="principles-table"
              className="bg-[#FDFBF7] dark:bg-[#0B3942] border border-[#CBBBA0] dark:border-[#186876]/50 p-6 sm:p-10 space-y-8"
            >
              <div>
                <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#161A1D] dark:text-[#FAF6EC] font-normal pb-4 border-b border-[#E2D6C1] dark:border-[#186876]/40">
                  Temporal Boundary Principles (R1–R4) &amp; Research Questions
                </h2>
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                    <thead className="bg-[#EDF5F6] dark:bg-[#062429] text-[#161A1D] dark:text-[#FAF6EC]">
                      <tr>
                        <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Principle</th>
                        <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Canonical Formula</th>
                        <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Physical / Epistemic Status</th>
                        <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Failure on Denial</th>
                        <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Empirical Signature</th>
                      </tr>
                    </thead>
                    <tbody>
                      {RETRO_PRINCIPLES_TABLE.map((r) => (
                        <tr key={r.code} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                          <td className="p-2.5 font-semibold text-[#4A0E33] dark:text-[#C974A6] border border-[#CBBBA0] dark:border-[#186876]/40">
                            {r.code} · {r.name}
                          </td>
                          <td className="p-2.5 font-mono text-[11px] text-[#11505C] dark:text-[#6CB2BD] border border-[#CBBBA0] dark:border-[#186876]/40">
                            {r.canonicalFormula}
                          </td>
                          <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.epistemicStatus}</td>
                          <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.failureOnDenial}</td>
                          <td className="p-2.5 text-[#0F3D2B] dark:text-[#4A9374] border border-[#CBBBA0] dark:border-[#186876]/40">{r.empiricalSignature}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 overflow-x-auto">
                  <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                    Table A.1 · Logical &amp; Dynamical Independence Relations Among Principles R1–R4
                  </h4>
                  <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                    <thead className="bg-[#EDF5F6] dark:bg-[#062429] text-[#161A1D] dark:text-[#FAF6EC]">
                      <tr>
                        <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Principle Pair</th>
                        <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Logical Status</th>
                        <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Formal Justification</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TABLE_A1_INDEPENDENCE_RELATIONS.map((r) => (
                        <tr key={r.pair} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                          <td className="p-2.5 font-semibold text-[#4A0E33] dark:text-[#C974A6] border border-[#CBBBA0] dark:border-[#186876]/40">{r.pair}</td>
                          <td className="p-2.5 font-mono text-[11px] text-[#11505C] dark:text-[#6CB2BD] border border-[#CBBBA0] dark:border-[#186876]/40">{r.status}</td>
                          <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.justification}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 overflow-x-auto">
                  <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                    Table A.2 · Formal Satisfaction Clauses (ℳ ⊨ R_i) &amp; Mathematical Function Spaces
                  </h4>
                  <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                    <thead className="bg-[#EDF5F6] dark:bg-[#062429] text-[#161A1D] dark:text-[#FAF6EC]">
                      <tr>
                        <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Symbol / Clause</th>
                        <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Formal Definition</th>
                        <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Underlying Space &amp; Scope</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TABLE_A2_FORMAL_SYMBOLS_AND_CLAUSES.map((r) => (
                        <tr key={r.symbol} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                          <td className="p-2.5 font-semibold text-[#4A0E33] dark:text-[#C974A6] border border-[#CBBBA0] dark:border-[#186876]/40">{r.symbol}</td>
                          <td className="p-2.5 font-mono text-[11px] text-[#11505C] dark:text-[#6CB2BD] border border-[#CBBBA0] dark:border-[#186876]/40">{r.formalDefinition}</td>
                          <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.mathematicalSpace}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="research-questions" className="pt-4 border-t border-[#E2D6C1] dark:border-[#186876]/40">
                <h3 className="font-['Playfair_Display'] font-normal text-xl text-[#0B3942] dark:text-[#FAF6EC] mb-3">
                  The Questions That Drive the Research
                </h3>
                <ol className="space-y-2 pl-5 list-decimal font-['Source_Serif_4',Georgia,serif] text-sm sm:text-base text-[#161A1D] dark:text-[#EDF5F6] max-w-[70ch]">
                  {RETRO_RESEARCH_QUESTIONS.map((q, idx) => (
                    <li key={idx}>{q}</li>
                  ))}
                </ol>
              </div>
            </section>

            {/* Interactive Two-Boundary Consistency & ABL Pre/Post-Selection Workbench */}
            <section
              id="workbench"
              className="bg-[#FDFBF7] dark:bg-[#0B3942] border border-[#CBBBA0] dark:border-[#186876]/50 p-6 sm:p-10"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3 pb-4 border-b border-[#E2D6C1] dark:border-[#186876]/40">
                <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#161A1D] dark:text-[#FAF6EC] font-normal">
                  Two-Boundary Consistency &amp; ABL Evaluator
                </h2>
                <button
                  type="button"
                  onClick={restoreAllPrinciples}
                  className="font-mono text-xs text-[#11505C] dark:text-[#6CB2BD] hover:underline cursor-pointer"
                >
                  Restore All Four Principles
                </button>
              </div>

              <p className="mt-4 text-sm font-['Source_Serif_4',Georgia,serif] text-[#0B3942] dark:text-[#EDF5F6] leading-relaxed max-w-[72ch]">
                Toggle any temporal boundary condition (R1–R4) to inspect whether bidirectional explanation remains coherent or collapses into a causal antinomy, and explore the quantitative ABL pre- and post-selection divergence below.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PRINCIPLE_CONTROLS.map((ctrl) => {
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

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="border border-[#CBBBA0] dark:border-[#186876]/40 bg-[#FAF6EC] dark:bg-[#062429] p-4 space-y-3">
                  <div className="text-xs font-mono text-[#11505C] dark:text-[#6CB2BD]">
                    Primary Explanatory Regime
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {REGIME_OPTIONS.map((opt) => (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => setSelectedRegime(opt.key)}
                        className={`text-left px-3 py-2 text-xs border transition-colors cursor-pointer ${
                          selectedRegime === opt.key
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
                    Comparison Boundary Regime
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {REGIME_OPTIONS.map((opt) => (
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

              {/* Deductive Proof & Bridge Output */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div
                  className={`p-5 border ${
                    consistencyAudit.coherentBidirectionalModel
                      ? 'bg-[#EEF5F1]/80 dark:bg-[#082419]/60 border-[#17573E]/50'
                      : 'bg-[#F9EEF4]/85 dark:bg-[#2E0820]/60 border-[#661447]/60'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2 pb-2 border-b border-[#CBBBA0]/70 dark:border-[#186876]/40">
                    <span className="font-mono text-xs font-semibold text-[#161A1D] dark:text-[#FAF6EC]">
                      {consistencyAudit.statusHeadline}
                    </span>
                    <span className="font-mono text-xs tabular-nums text-[#11505C] dark:text-[#6CB2BD]">
                      {consistencyAudit.conditionsSatisfiedCount}/4 Conditions
                    </span>
                  </div>
                  <ol className="mt-3 space-y-1.5 pl-4 list-decimal text-xs text-[#161A1D] dark:text-[#EDF5F6] leading-relaxed">
                    {consistencyAudit.formalInferenceChain.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                  <p className="mt-3 pt-3 border-t border-[#CBBBA0]/60 dark:border-[#186876]/40 text-xs italic text-[#0F3D2B] dark:text-[#4A9374]">
                    {consistencyAudit.regimeSummary}
                  </p>
                </div>

                <div className="p-5 border border-[#CBBBA0] dark:border-[#186876]/50 bg-[#FAF6EC] dark:bg-[#062429] flex flex-col justify-between space-y-4">
                  <div>
                    <div className="font-mono text-xs font-semibold text-[#11505C] dark:text-[#6CB2BD] pb-2 border-b border-[#CBBBA0]/70 dark:border-[#186876]/40">
                      Cross-Regime Structural Mapping
                    </div>
                    <p className="mt-3 text-xs font-semibold text-[#161A1D] dark:text-[#FAF6EC]">
                      Question: {regimeBridge.sharedStructuralQuestion}
                    </p>
                    <div className="mt-2.5 p-2.5 bg-[#FDFBF7] dark:bg-[#0B3942] border border-[#E2D6C1] dark:border-[#186876]/40 font-mono text-[11px] text-[#4A0E33] dark:text-[#C974A6]">
                      {regimeBridge.formalMapping}
                    </div>
                    <p className="mt-3 text-xs text-[#062429] dark:text-[#EDF5F6] leading-relaxed">
                      {regimeBridge.philosophicalSynthesis}
                    </p>
                  </div>

                  {/* Interactive ABL Spin-1/2 Pre/Post-Selection Calculator */}
                  <div className="pt-3 border-t border-[#E2D6C1] dark:border-[#186876]/40 space-y-2.5">
                    <div className="font-mono text-[11px] text-[#4A0E33] dark:text-[#C974A6]">
                      ABL Spin-½ Two-Boundary Calculator (Prep |↑_z⟩ = 0°)
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <label className="space-y-1">
                        <span className="font-mono text-[11px] text-[#11505C] dark:text-[#6CB2BD]">
                          Intermediate Angle α: {testAngleDeg}°
                        </span>
                        <input
                          type="range"
                          min={0}
                          max={175}
                          value={testAngleDeg}
                          onChange={(e) => setTestAngleDeg(Number(e.target.value))}
                          className="w-full accent-[#11505C]"
                        />
                      </label>
                      <label className="space-y-1">
                        <span className="font-mono text-[11px] text-[#0F3D2B] dark:text-[#4A9374]">
                          Post-Selection θ: {postSelectDeg}°
                        </span>
                        <input
                          type="range"
                          min={0}
                          max={175}
                          value={postSelectDeg}
                          onChange={(e) => setPostSelectDeg(Number(e.target.value))}
                          className="w-full accent-[#4A0E33]"
                        />
                      </label>
                    </div>
                    <div className="grid grid-cols-2 gap-2 font-mono text-[11px] tabular-nums">
                      <div className="p-2 bg-[#FDFBF7] dark:bg-[#0B3942] border border-[#E2D6C1] dark:border-[#186876]/40">
                        P_ABL(+α | ψ, φ): <strong className="text-[#4A0E33] dark:text-[#C974A6]">{(ablResult.probPlus * 100).toFixed(2)}%</strong>
                      </div>
                      <div className="p-2 bg-[#FDFBF7] dark:bg-[#0B3942] border border-[#E2D6C1] dark:border-[#186876]/40">
                        Past-Only Born: <strong className="text-[#11505C] dark:text-[#6CB2BD]">{(ablResult.standardBornPlus * 100).toFixed(2)}%</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Parts 1–8 */}
            {RETRO_CHAPTERS.map((ch) => {
              const plates = RETRO_PLATES.filter((p) => p.anchorChapter === ch.number);
              const figs = RETRO_FIGURES.filter((f) => f.anchorChapter === ch.number);

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
                    {ch.epigraph}
                  </p>

                  <blockquote className="my-7 py-5 border-t border-b border-[#CBBBA0] dark:border-[#186876]/50 text-center font-['Playfair_Display'] italic text-lg sm:text-xl text-[#4A0E33] dark:text-[#E2D6C1] leading-relaxed max-w-3xl mx-auto">
                    {ch.pullQuote}
                  </blockquote>

                  <p className="text-sm sm:text-base font-['Source_Serif_4',Georgia,serif] italic text-[#0F3D2B] dark:text-[#4A9374] leading-relaxed max-w-[70ch]">
                    {ch.leadSummary}
                  </p>

                  {ch.chapterIntro.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-[#E2D6C1] dark:border-[#186876]/40 space-y-4 font-['Source_Serif_4',Georgia,serif] text-base sm:text-[17px] leading-[1.78] text-[#161A1D] dark:text-[#EDF5F6] max-w-[70ch]">
                      {ch.chapterIntro.map((para, idx) => (
                        <RichProseParagraph key={idx} text={para} dropCap={idx === 0} />
                      ))}
                    </div>
                  )}

                  {ch.number === 8 && (
                    <div className="my-8 space-y-6">
                      <div className="border border-[#11505C] dark:border-[#278594] bg-[#FAF6EC] dark:bg-[#062429] p-5 sm:p-6">
                        <h3 className="font-['Playfair_Display'] font-normal text-xl text-[#161A1D] dark:text-[#FAF6EC]">
                          {RETRO_ARGUMENT_MAP.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-[#11505C] dark:text-[#6CB2BD] leading-relaxed">
                          {RETRO_ARGUMENT_MAP.summary}
                        </p>
                        <div className="mt-4 space-y-2.5">
                          {RETRO_ARGUMENT_MAP.nodes.map((node) => (
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

                      <div className="border border-[#4A0E33]/40 dark:border-[#C974A6]/50 bg-[#F9EEF4]/60 dark:bg-[#4A0E33]/35 p-5 sm:p-6">
                        <h3 className="font-['Playfair_Display'] font-normal text-xl text-[#4A0E33] dark:text-[#F7C9A5]">
                          {RETRO_CONCEPTUAL_CONTRIBUTION.title}
                        </h3>
                        <div className="mt-3 space-y-3 font-['Source_Serif_4',Georgia,serif] text-sm sm:text-base text-[#161A1D] dark:text-[#EDF5F6] leading-relaxed max-w-[70ch]">
                          {RETRO_CONCEPTUAL_CONTRIBUTION.paragraphs.map((p, idx) => (
                            <p key={idx}>{p}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

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

                        {sub.secondaryTheoremBox && (
                          <div className="my-8 border border-[#661447]/40 dark:border-[#C974A6]/50 bg-[#F9EEF4]/65 dark:bg-[#4A0E33]/40 p-5 sm:p-6">
                            <div className="pb-2.5 mb-3 border-b border-[#CBBBA0]/70 flex flex-wrap items-baseline justify-between gap-2">
                              <span className="font-mono text-xs font-semibold text-[#4A0E33] dark:text-[#F7C9A5]">
                                {sub.secondaryTheoremBox.kind} {sub.secondaryTheoremBox.number} · {sub.secondaryTheoremBox.title}
                              </span>
                            </div>
                            <p className="font-['Source_Serif_4',Georgia,serif] text-sm sm:text-base leading-relaxed text-[#161A1D] dark:text-[#FAF6EC]">
                              {sub.secondaryTheoremBox.statement}
                            </p>
                            <ol className="mt-4 space-y-1.5 pl-5 list-decimal text-xs sm:text-sm text-[#062429] dark:text-[#EDF5F6]">
                              {sub.secondaryTheoremBox.proofSteps.map((st, sIdx) => (
                                <li key={sIdx}>{renderInlineProseTokens(st)}</li>
                              ))}
                            </ol>
                            <div className="mt-3 pt-2.5 border-t border-[#CBBBA0]/60 font-mono text-[11px] text-[#11505C] dark:text-[#6CB2BD]">
                              {sub.secondaryTheoremBox.sourceNote}
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
                  {ch.number === 1 && (
                    <div className="mt-10 space-y-10">
                      <div className="overflow-x-auto">
                        <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                          Table 1.1 · Comprehensive Four-Domain Philosophical Taxonomy: Time, Causation, Explanation &amp; Information
                        </h4>
                        <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                          <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                            <tr>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Domain</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Taxonomic Sub-Classes</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Symmetry &amp; Boundary Profile</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Category Mistake if Conflated</th>
                            </tr>
                          </thead>
                          <tbody>
                            {TABLE_1_1_FOURFOLD_TAXONOMY.map((r) => (
                              <tr key={`${r.domain}-${r.subClass}`} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                                <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.domain}</td>
                                <td className="p-2.5 font-mono text-[#11505C] dark:text-[#6CB2BD] border border-[#CBBBA0] dark:border-[#186876]/40">{r.subClass}</td>
                                <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.symmetryProfile}</td>
                                <td className="p-2.5 text-[#661447] dark:text-[#C974A6] border border-[#CBBBA0] dark:border-[#186876]/40">{r.explanatoryMisstep}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="overflow-x-auto">
                        <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                          Table 1.2 · Structure-Preserving Conceptual Crosswalk: Four-Domain Taxonomy (T/C/E/I) to Principles R1–R4
                        </h4>
                        <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                          <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                            <tr>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Taxonomy Stratum</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Primary Principle(s)</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Functional Role in TDCD</th>
                            </tr>
                          </thead>
                          <tbody>
                            {TABLE_1_2_TAXONOMY_TO_PRINCIPLES.map((r) => (
                              <tr key={r.stratumGroup} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                                <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.stratumGroup}</td>
                                <td className="p-2.5 font-mono text-[#11505C] dark:text-[#6CB2BD] border border-[#CBBBA0] dark:border-[#186876]/40">{r.primaryPrinciple}</td>
                                <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.functionalRole}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {ch.number === 2 && (
                    <div className="mt-10 space-y-10">
                      <div className="overflow-x-auto">
                        <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                          Table 2.1 · Comparative Matrix of Retarded, Advanced, Symmetric, and QFT Propagator Solutions
                        </h4>
                        <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                          <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                            <tr>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Formulation</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Green’s Kernel</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Boundary Role</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Physical Realizability</th>
                            </tr>
                          </thead>
                          <tbody>
                            {TABLE_2_1_SOLUTIONS.map((r) => (
                              <tr key={r.framework} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                                <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.framework}</td>
                                <td className="p-2.5 font-mono text-[#11505C] dark:text-[#6CB2BD] border border-[#CBBBA0] dark:border-[#186876]/40">{r.greenKernel}</td>
                                <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.boundaryRole}</td>
                                <td className="p-2.5 text-[#0F3D2B] dark:text-[#4A9374] border border-[#CBBBA0] dark:border-[#186876]/40">{r.realizabilityStatus}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="overflow-x-auto">
                        <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                          Table 2.2 · Crosswalk Expanding Chapter 1’s Philosophical Taxonomy into Chapter 2 Physical Formalisms
                        </h4>
                        <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                          <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                            <tr>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Chapter 1 Node</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Core Philosophical Question</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Chapter 2 Physical Formalism</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Key Result</th>
                            </tr>
                          </thead>
                          <tbody>
                            {TABLE_2_2_PHILOSOPHY_TO_PHYSICS.map((r) => (
                              <tr key={r.philosophicalNode} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                                <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.philosophicalNode}</td>
                                <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.chapter1Question}</td>
                                <td className="p-2.5 font-mono text-[#11505C] dark:text-[#6CB2BD] border border-[#CBBBA0] dark:border-[#186876]/40">{r.physicalFormalism}</td>
                                <td className="p-2.5 text-[#0F3D2B] dark:text-[#4A9374] border border-[#CBBBA0] dark:border-[#186876]/40">{r.keyResult}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {ch.number === 3 && (
                    <div className="mt-10 overflow-x-auto">
                      <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                        Table 3.1 · Cauchy Unfolding vs. Two-Boundary Variational Formulations
                      </h4>
                      <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                        <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Formulation</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Boundary Data</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Determination Mode</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Conceptual Risk</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_3_1_BOUNDARY.map((r) => (
                            <tr key={r.formulation} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                              <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.formulation}</td>
                              <td className="p-2.5 font-mono text-[#11505C] dark:text-[#6CB2BD] border border-[#CBBBA0] dark:border-[#186876]/40">{r.boundaryData}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.determinationMode}</td>
                              <td className="p-2.5 text-[#661447] dark:text-[#C974A6] border border-[#CBBBA0] dark:border-[#186876]/40">{r.conceptualRisk}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {ch.number === 5 && (
                    <div className="mt-10 overflow-x-auto">
                      <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                        Table 5.1 · Backward Causal Influence vs. Global Two-Boundary Consistency
                      </h4>
                      <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                        <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Dimension</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Backward Influence (P1)</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Global Consistency (P2)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_5_1_INFLUENCE_VS_CONSISTENCY.map((r) => (
                            <tr key={r.dimension} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                              <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.dimension}</td>
                              <td className="p-2.5 text-[#661447] dark:text-[#C974A6] border border-[#CBBBA0] dark:border-[#186876]/40">{r.backwardInfluence}</td>
                              <td className="p-2.5 text-[#0F3D2B] dark:text-[#4A9374] border border-[#CBBBA0] dark:border-[#186876]/40">{r.globalConsistency}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {ch.number === 6 && (
                    <div className="mt-10 overflow-x-auto">
                      <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                        Table 6.1 · Quantum Measurement Protocols Incorporating Final Boundary Conditions
                      </h4>
                      <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                        <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Protocol</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Boundary Structure</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Observable Consequence</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Signalling Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_6_1_QUANTUM_RETRO.map((r) => (
                            <tr key={r.protocol} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                              <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.protocol}</td>
                              <td className="p-2.5 font-mono text-[#11505C] dark:text-[#6CB2BD] border border-[#CBBBA0] dark:border-[#186876]/40">{r.boundaryStructure}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.observableConsequence}</td>
                              <td className="p-2.5 text-[#0F3D2B] dark:text-[#4A9374] border border-[#CBBBA0] dark:border-[#186876]/40">{r.signallingStatus}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {ch.number === 7 && (
                    <div className="mt-10 overflow-x-auto">
                      <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                        Table 7.1 · Four Arrows of Time in Temporally Distributed Causation
                      </h4>
                      <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                        <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Arrow</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Symmetry Status</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Physical Source</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Role in TDCD</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_7_1_THERMO_ARROWS.map((r) => (
                            <tr key={r.arrow} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                              <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.arrow}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.symmetryStatus}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.physicalSource}</td>
                              <td className="p-2.5 font-mono text-[#0F3D2B] dark:text-[#4A9374] border border-[#CBBBA0] dark:border-[#186876]/40">{r.roleInTDCD}</td>
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
                          Table 8.1 · Five-Fold Conceptual Taxonomy of Temporally Distributed Causation
                        </h4>
                        <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                          <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                            <tr>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Relation</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Temporal Locus</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Formal Signature</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Explanatory Function</th>
                            </tr>
                          </thead>
                          <tbody>
                            {TABLE_8_1_FIVE_RELATIONS.map((r) => (
                              <tr key={r.relation} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                                <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.relation}</td>
                                <td className="p-2.5 font-mono text-[#11505C] dark:text-[#6CB2BD] border border-[#CBBBA0] dark:border-[#186876]/40">{r.temporalLocus}</td>
                                <td className="p-2.5 font-mono border border-[#CBBBA0] dark:border-[#186876]/40">{r.formalSignature}</td>
                                <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.explanatoryFunction}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="overflow-x-auto">
                        <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                          Table 8.2 · Empirical Discriminators Between Past-Only and Two-Boundary Models
                        </h4>
                        <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                          <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                            <tr>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Domain</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Target Observable</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Past-Only Account</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Two-Boundary Account</th>
                            </tr>
                          </thead>
                          <tbody>
                            {TABLE_8_2_EMPIRICAL_PROTOCOLS.map((r) => (
                              <tr key={r.domain} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                                <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.domain}</td>
                                <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.observable}</td>
                                <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.pastOnlyModel}</td>
                                <td className="p-2.5 text-[#0F3D2B] dark:text-[#4A9374] border border-[#CBBBA0] dark:border-[#186876]/40">{r.twoBoundaryModel}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="overflow-x-auto">
                        <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                          Table 8.3 · Concluding Answer Key: Resolving Chapter 1’s Historical Puzzles &amp; Taxonomic Nodes
                        </h4>
                        <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                          <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                            <tr>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Chapter 1 Lineage / Node</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Foundational Puzzle</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Physical &amp; Formal Mechanism</th>
                              <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">TDCD Resolution</th>
                            </tr>
                          </thead>
                          <tbody>
                            {TABLE_8_3_CHAPTER_1_ANSWERS.map((r) => (
                              <tr key={r.chapter1Node} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                                <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.chapter1Node}</td>
                                <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.legacyPuzzle}</td>
                                <td className="p-2.5 font-mono text-[#11505C] dark:text-[#6CB2BD] border border-[#CBBBA0] dark:border-[#186876]/40">{r.mechanism}</td>
                                <td className="p-2.5 text-[#0F3D2B] dark:text-[#4A9374] border border-[#CBBBA0] dark:border-[#186876]/40">{r.tdcdResolution}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="border border-[#CBBBA0] dark:border-[#186876]/50 bg-[#FAF6EC] dark:bg-[#062429] p-6 space-y-5">
                        <div>
                          <h4 className="font-['Playfair_Display'] font-normal text-xl text-[#11505C] dark:text-[#6CB2BD]">
                            {RETRO_IMPLICATION_AND_CONCLUSION.implicationTitle}
                          </h4>
                          <div className="mt-2 space-y-2 font-['Source_Serif_4',Georgia,serif] text-sm sm:text-base leading-relaxed">
                            {RETRO_IMPLICATION_AND_CONCLUSION.implicationParagraphs.map((p, idx) => (
                              <p key={idx}>{p}</p>
                            ))}
                          </div>
                        </div>
                        <div className="pt-4 border-t border-[#E2D6C1] dark:border-[#186876]/40">
                          <h4 className="font-['Playfair_Display'] font-normal text-xl text-[#4A0E33] dark:text-[#C974A6]">
                            {RETRO_IMPLICATION_AND_CONCLUSION.concludingTitle}
                          </h4>
                          <div className="mt-2 space-y-2 font-['Source_Serif_4',Georgia,serif] text-sm sm:text-base leading-relaxed">
                            {RETRO_IMPLICATION_AND_CONCLUSION.concludingParagraphs.map((p, idx) => (
                              <p key={idx}>{p}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {plates.map((pl) => (
                    <RetroPlateCard key={pl.id} plate={pl} />
                  ))}
                  {figs.map((fg) => (
                    <RetroFigureCard key={fg.id} fig={fg} />
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
                  Glossary of Concepts &amp; Formal Notation
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
                Formal Symbols &amp; Boundary Operators
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                  <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                    <tr>
                      <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Symbol</th>
                      <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Concept</th>
                      <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Domain</th>
                      <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Definition</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RETRO_SYMBOL_GLOSSARY.map((s) => (
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
                  Supplementary Appendices A–{RETRO_APPENDICES[RETRO_APPENDICES.length - 1]?.letter ?? 'C'}
                </h2>
              </div>

              {RETRO_APPENDICES.map((app) => (
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
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Check</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Formula</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Reference Parameters</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Outcome</th>
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
                References ({RETRO_REFERENCES.length} Citations)
              </h2>
              <ol className="mt-6 space-y-2.5 text-xs sm:text-sm text-[#161A1D] dark:text-[#EDF5F6] leading-relaxed">
                {RETRO_REFERENCES.map((r) => (
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
                    Index of Names ({RETRO_INDEX_OF_NAMES.length})
                  </h3>
                  <div className="border-t border-[#E2D6C1] dark:border-[#186876]/40 divide-y divide-[#E2D6C1]/70 dark:divide-[#186876]/30 text-xs">
                    {RETRO_INDEX_OF_NAMES.map((item) => (
                      <div key={item.entry} className="py-1.5 flex items-baseline justify-between gap-3">
                        <span className="text-[#161A1D] dark:text-[#FAF6EC]">{item.entry}</span>
                        <span className="font-mono text-[#11505C] dark:text-[#6CB2BD] shrink-0">{item.sections}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-['Playfair_Display'] font-normal text-xl text-[#0B3942] dark:text-[#FAF6EC] mb-3">
                    Index of Concepts ({RETRO_INDEX_OF_CONCEPTS.length})
                  </h3>
                  <div className="border-t border-[#E2D6C1] dark:border-[#186876]/40 divide-y divide-[#E2D6C1]/70 dark:divide-[#186876]/30 text-xs">
                    {RETRO_INDEX_OF_CONCEPTS.map((item) => (
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
                  Abstract &amp; Central Thesis
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('principles-table')}
                  className="block w-full text-left py-1 text-[#161A1D] dark:text-[#EDF5F6] hover:text-[#11505C] cursor-pointer"
                >
                  Principles (R1–R4) &amp; Questions
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('workbench')}
                  className="block w-full text-left py-1 font-medium text-[#11505C] dark:text-[#6CB2BD] hover:underline cursor-pointer"
                >
                  Two-Boundary &amp; ABL Evaluator
                </button>
                {RETRO_CHAPTERS.map((ch) => (
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
                  Glossary &amp; Formal Symbols
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
                  References ({RETRO_REFERENCES.length})
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
                Core Distinctions (TDCD)
              </div>
              <div className="space-y-2 text-[#161A1D] dark:text-[#EDF5F6] leading-relaxed">
                <p>
                  <strong className="text-[#4A0E33] dark:text-[#C974A6]">1. Precedence ≠ Determination:</strong>{' '}
                  Temporal order does not exhaust causal constraint in time-symmetric equations.
                </p>
                <p>
                  <strong className="text-[#11505C] dark:text-[#6CB2BD]">2. Consistency ≠ Signalling:</strong>{' '}
                  Future boundaries restrict admissible histories without sending messages backward.
                </p>
                <p>
                  <strong className="text-[#0F3D2B] dark:text-[#4A9374]">3. Past Hypothesis Arrow:</strong>{' '}
                  Low initial entropy explains memory and forward narrative orientation.
                </p>
                <p>
                  <strong className="text-[#161A1D] dark:text-[#E2D6C1]">4. Complete History:</strong>{' '}
                  Present events cohere with laws and boundary constraints across both directions.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
};
