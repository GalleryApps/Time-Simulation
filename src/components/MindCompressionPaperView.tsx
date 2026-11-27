/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Paper 17 — Monograph View
 * "Consciousness as a Thermodynamic Compression Artifact:
 *  Why the 'Hard Problem' Is a Category Error in Substrate-Independent Information Geometry"
 *
 * Matches Papers 15 & 16 Museum-Editorial Ecru, Charcoal, Dark Petrol Teal, Pine Green & Deep Plum Palette,
 * Playfair Display headlines (non-bold), Source Serif 4 body prose, and IBM Plex Mono tables/schemas.
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
  MIND_34_SHADES,
  evaluateSelfModelingBudget,
  evaluateCompressionLocus,
  computeRateDistortionFisherTradeoff,
  type SubstrateClass
} from '../physics/mindCompressionPaper';
import {
  MIND_META,
  MIND_ABSTRACT,
  MIND_CORE_THESIS,
  TABLE_M1_CATEGORY_COMPARISON,
  TABLE_M2_PUZZLE_DISSOLUTION,
  TABLE_M3_SOUL_VS_LOCUS,
  TABLE_M4_FALSIFICATION_MATRIX,
  MIND_CHAPTERS,
  MIND_APPENDICES,
  MIND_SYMBOL_GLOSSARY,
  MIND_GLOSSARY,
  MIND_REFERENCES,
  MIND_INDEX_OF_NAMES,
  MIND_INDEX_OF_CONCEPTS,
  type MindEquation
} from '../types/mindCompressionPaperData';
import {
  MIND_PLATES,
  MindPlateCard
} from './MindCompressionPaperFigures';
import {
  downloadMindCompressionHtml,
  downloadMindCompressionLatex,
  downloadMindCompressionMarkdown
} from '../utils/generateMindCompressionPaperExports';
import { generateMindCompressionPaperPdf } from '../utils/generateMindCompressionPaperPdf';

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

function SchemaEquationCard({ eq }: { eq: MindEquation }) {
  return (
    <div className="my-8 border border-[#CBBBA0] dark:border-[#186876]/45 bg-[#FAF6EC]/80 dark:bg-[#0B3942]/60 p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3 pb-3 border-b border-[#CBBBA0]/70 dark:border-[#186876]/40">
        <div
          className="text-base sm:text-lg font-['Source_Serif_4',Georgia,serif] text-[#161A1D] dark:text-[#FAF6EC] overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: eq.unicodeHtml }}
        />
        <span className="font-mono text-xs text-[#661447] dark:text-[#C974A6] tabular-nums shrink-0">
          Schema {eq.label}
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

const SUBSTRATE_OPTIONS: Array<{ key: SubstrateClass; label: string }> = [
  { key: 'biological-neural', label: 'Biological Neural Cortex (Depth >= 2)' },
  { key: 'synthetic-silicon', label: 'Synthetic Recursive World Model (Silicon)' },
  { key: 'thermostat-control', label: 'Bimetallic Thermostat (First-Order Depth = 1)' },
  { key: 'passive-matter', label: 'Passive Physical Aggregate (Depth = 0)' }
];

export const MindCompressionPaperView: React.FC = () => {
  const [pdfBusy, setPdfBusy] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [showPaletteDrawer, setShowPaletteDrawer] = useState(false);
  const [glossaryFilter, setGlossaryFilter] = useState('');

  // Interactive Theorem 1-3 Workbench state
  const [systemLogBits, setSystemLogBits] = useState(1e12);
  const [latentBits, setLatentBits] = useState(4096);
  const [energyMilliJ, setEnergyMilliJ] = useState(1000);
  const [substrateType, setSubstrateType] = useState<SubstrateClass>('biological-neural');
  const [recursionDepth, setRecursionDepth] = useState(3);
  const [distortionD, setDistortionD] = useState(0.25);

  const budgetResult = useMemo(
    () =>
      evaluateSelfModelingBudget({
        systemMicroBits: systemLogBits,
        subsystemCapacityBits: Math.max(latentBits * 4, 16384),
        latentManifoldBits: latentBits,
        temperatureK: 310,
        energyBudgetJ: energyMilliJ / 1000,
        stepWindowSec: 0.05
      }),
    [systemLogBits, latentBits, energyMilliJ]
  );

  const locusResult = useMemo(
    () =>
      evaluateCompressionLocus({
        dimSigma: Math.round(Math.log10(systemLogBits) * 1000),
        dimZ: Math.max(4, Math.round(Math.sqrt(latentBits))),
        recursionDepth,
        fisherCoupling: substrateType === 'passive-matter' ? 0.02 : substrateType === 'thermostat-control' ? 0.12 : 0.86,
        substrateType
      }),
    [systemLogBits, latentBits, recursionDepth, substrateType]
  );

  const rdTradeoff = useMemo(
    () => computeRateDistortionFisherTradeoff(distortionD, 1.0, 310),
    [distortionD]
  );

  const filteredGlossary = useMemo(() => {
    const q = glossaryFilter.trim().toLowerCase();
    if (!q) return MIND_GLOSSARY;
    return MIND_GLOSSARY.filter(
      (g) =>
        g.term.toLowerCase().includes(q) ||
        (g.acronym?.toLowerCase().includes(q) ?? false) ||
        g.definition.toLowerCase().includes(q)
    );
  }, [glossaryFilter]);

  const handleDownloadPdf = async () => {
    setPdfBusy(true);
    setPdfError(null);
    try {
      await generateMindCompressionPaperPdf();
    } catch (err) {
      setPdfError(err instanceof Error ? err.message : 'PDF export encountered an error.');
    } finally {
      setPdfBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6EC] dark:bg-[#062429] text-[#161A1D] dark:text-[#EDF5F6] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Masthead Header matching Papers 15 & 16 */}
        <header className="border-t-4 border-[#11505C] dark:border-[#248A9B] border-b border-[#CBBBA0] dark:border-[#186876]/40 bg-[#FDFBF7] dark:bg-[#082E36] p-6 sm:p-10 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-[#E2D6C1] dark:border-[#186876]/40">
            <div className="space-y-1">
              <div className="font-mono text-xs uppercase tracking-widest text-[#661447] dark:text-[#C974A6]">
                {MIND_META.paperNumber} · {MIND_META.journalTarget}
              </div>
              <div className="font-mono text-[11px] text-[#11505C] dark:text-[#6CB2BD]">
                {MIND_META.volumeLine}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleDownloadPdf}
                disabled={pdfBusy}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#4A0E33] hover:bg-[#661447] text-white text-xs font-mono transition-colors disabled:opacity-60"
              >
                <Download className="w-3.5 h-3.5" />
                {pdfBusy ? 'Compiling A4 PDF…' : 'Download PDF'}
              </button>
              <button
                onClick={downloadMindCompressionHtml}
                className="inline-flex items-center gap-1.5 px-3 py-2 border border-[#11505C] text-[#0B3942] dark:text-[#9FD3DD] dark:border-[#1D7685] hover:bg-[#EDF5F6] dark:hover:bg-[#0B3942] text-xs font-mono transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                HTML
              </button>
              <button
                onClick={downloadMindCompressionLatex}
                className="inline-flex items-center gap-1.5 px-3 py-2 border border-[#11505C] text-[#0B3942] dark:text-[#9FD3DD] dark:border-[#1D7685] hover:bg-[#EDF5F6] dark:hover:bg-[#0B3942] text-xs font-mono transition-colors"
              >
                <FileCode2 className="w-3.5 h-3.5" />
                LaTeX
              </button>
              <button
                onClick={downloadMindCompressionMarkdown}
                className="inline-flex items-center gap-1.5 px-3 py-2 border border-[#11505C] text-[#0B3942] dark:text-[#9FD3DD] dark:border-[#1D7685] hover:bg-[#EDF5F6] dark:hover:bg-[#0B3942] text-xs font-mono transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                Markdown
              </button>
              <button
                onClick={() => setShowPaletteDrawer((v) => !v)}
                className="inline-flex items-center gap-1.5 px-3 py-2 border border-[#661447] text-[#4A0E33] dark:text-[#C974A6] dark:border-[#831B5B] hover:bg-[#F9EEF4] dark:hover:bg-[#380D29] text-xs font-mono transition-colors"
              >
                <Palette className="w-3.5 h-3.5" />
                34-Shade Palette
              </button>
            </div>
          </div>

          {pdfError && (
            <div className="mb-4 p-3 border border-rose-400 bg-rose-50 dark:bg-rose-950/50 text-xs font-mono text-rose-800 dark:text-rose-200">
              {pdfError}
            </div>
          )}

          <h1 className="font-['Playfair_Display'] font-normal text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] text-[#161A1D] dark:text-[#FAF6EC]">
            {MIND_META.title}
          </h1>
          <p className="mt-3 font-['Source_Serif_4',Georgia,serif] italic text-lg sm:text-xl text-[#4A0E33] dark:text-[#C974A6]">
            {MIND_META.laymanDeck}
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-5 border-t border-[#E2D6C1] dark:border-[#186876]/40">
            {MIND_META.authors.map((a) => (
              <div key={a.name} className="text-xs space-y-0.5">
                <div className="font-semibold text-[#161A1D] dark:text-[#FAF6EC]">{a.name}</div>
                <div className="text-[#11505C] dark:text-[#6CB2BD]">{a.affiliation}</div>
                {a.orcidUrl && (
                  <a
                    href={a.orcidUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] text-[#0F3D2B] dark:text-[#4A9374] hover:underline block"
                  >
                    ORCID: {a.orcid}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-[#E2D6C1] dark:border-[#186876]/40 space-y-1 text-xs">
            <p className="font-mono text-[#0B3942] dark:text-[#9FD3DD]">{MIND_META.methodologicalStance}</p>
            <p className="text-[#11505C] dark:text-[#6CB2BD]">{MIND_META.institutionalDisclaimer}</p>
            <p className="italic text-[#4A0E33] dark:text-[#C974A6]">{MIND_META.venueFormatNote}</p>
          </div>

          {showPaletteDrawer && (
            <div className="mt-6 pt-5 border-t border-[#CBBBA0] dark:border-[#186876]/50">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-['Playfair_Display'] font-normal text-lg text-[#161A1D] dark:text-[#FAF6EC]">
                  34-Shade Dark Muted Palette System (4 Core Grounds + 30 Pigment Mixes)
                </h3>
                <span className="font-mono text-[11px] text-[#11505C] dark:text-[#6CB2BD]">
                  White contours &amp; cross-hatching anchored over layered dark muted grounds
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2.5">
                {MIND_34_SHADES.map((s) => (
                  <div key={s.id} className="border border-[#CBBBA0] dark:border-[#186876]/40 bg-[#FAF6EC] dark:bg-[#062429] p-2">
                    <div className="h-9 w-full mb-1.5 border border-white/15" style={{ backgroundColor: s.hex }} />
                    <div className="text-[11px] font-semibold truncate text-[#161A1D] dark:text-[#FAF6EC]">{s.name}</div>
                    <div className="font-mono text-[10px] text-[#661447] dark:text-[#C974A6]">{s.hex}</div>
                    <div className="text-[10px] text-[#11505C] dark:text-[#6CB2BD] truncate" title={s.note}>{s.note}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Main 70/30 Reading + Sticky TOC Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="border border-[#CBBBA0] dark:border-[#186876]/45 bg-[#FDFBF7] dark:bg-[#082E36] p-5">
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#661447] dark:text-[#C974A6] pb-2 mb-3 border-b border-[#E2D6C1] dark:border-[#186876]/40">
                Table of Contents
              </div>
              <nav className="space-y-2 text-xs">
                <a href="#mind-abstract" className="block text-[#0B3942] dark:text-[#9FD3DD] hover:underline">
                  Abstract &amp; Central Diagnosis
                </a>
                <a href="#mind-workbench" className="block text-[#4A0E33] dark:text-[#C974A6] hover:underline">
                  Interactive Compression &amp; Locus Lab
                </a>
                {MIND_CHAPTERS.map((ch) => (
                  <a
                    key={ch.id}
                    href={`#${ch.id}`}
                    className="block text-[#161A1D] dark:text-[#EDF5F6] hover:text-[#661447] dark:hover:text-[#C974A6]"
                  >
                    <span className="font-mono text-[#661447] dark:text-[#C974A6] mr-1.5">Ch.{ch.number}</span>
                    {ch.title}
                  </a>
                ))}
                <a href="#mind-appendix" className="block text-[#0F3D2B] dark:text-[#4A9374] hover:underline pt-1 border-t border-[#E2D6C1] dark:border-[#186876]/40">
                  Appendix A: Formal Proofs &amp; Definitions
                </a>
                <a href="#mind-glossary" className="block text-[#0B3942] dark:text-[#9FD3DD] hover:underline">
                  Glossary &amp; Symbol Lexicon
                </a>
                <a href="#mind-references" className="block text-[#0B3942] dark:text-[#9FD3DD] hover:underline">
                  References ({MIND_REFERENCES.length}) &amp; Indexes
                </a>
              </nav>
            </div>

            {/* Interactive Workbench Card */}
            <div id="mind-workbench" className="border border-[#CBBBA0] dark:border-[#186876]/45 bg-[#FDFBF7] dark:bg-[#082E36] p-5 space-y-4">
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#0F3D2B] dark:text-[#4A9374] border-b border-[#E2D6C1] dark:border-[#186876]/40 pb-2">
                Thermodynamic Compression &amp; Locus Lab
              </div>

              <div className="space-y-3 text-xs">
                <label className="block">
                  <span className="flex justify-between font-mono text-[11px] mb-1">
                    <span>System Micro-Bits (log2|Σ|)</span>
                    <span>{systemLogBits.toExponential(1)}</span>
                  </span>
                  <input
                    type="range"
                    min={6}
                    max={20}
                    step={1}
                    value={Math.round(Math.log10(systemLogBits))}
                    onChange={(e) => setSystemLogBits(10 ** Number(e.target.value))}
                    className="w-full accent-[#11505C]"
                  />
                </label>

                <label className="block">
                  <span className="flex justify-between font-mono text-[11px] mb-1">
                    <span>Latent Manifold Z Bits</span>
                    <span>{latentBits} bits</span>
                  </span>
                  <input
                    type="range"
                    min={64}
                    max={16384}
                    step={64}
                    value={latentBits}
                    onChange={(e) => setLatentBits(Number(e.target.value))}
                    className="w-full accent-[#4A0E33]"
                  />
                </label>

                <label className="block">
                  <span className="flex justify-between font-mono text-[11px] mb-1">
                    <span>Frame Energy Budget ΔE (mJ / 50ms)</span>
                    <span>{energyMilliJ} mJ</span>
                  </span>
                  <input
                    type="range"
                    min={10}
                    max={2000}
                    step={10}
                    value={energyMilliJ}
                    onChange={(e) => setEnergyMilliJ(Number(e.target.value))}
                    className="w-full accent-[#0F3D2B]"
                  />
                </label>

                <label className="block">
                  <span className="block font-mono text-[11px] mb-1">Substrate Class</span>
                  <select
                    value={substrateType}
                    onChange={(e) => {
                      const next = e.target.value as SubstrateClass;
                      setSubstrateType(next);
                      setRecursionDepth(next === 'passive-matter' ? 0 : next === 'thermostat-control' ? 1 : 3);
                    }}
                    className="w-full border border-[#CBBBA0] dark:border-[#186876]/50 bg-[#FAF6EC] dark:bg-[#062429] p-1.5 text-xs"
                  >
                    {SUBSTRATE_OPTIONS.map((opt) => (
                      <option key={opt.key} value={opt.key}>{opt.label}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="flex justify-between font-mono text-[11px] mb-1">
                    <span>Self-Model Recursion Depth d</span>
                    <span>d = {recursionDepth}</span>
                  </span>
                  <input
                    type="range"
                    min={0}
                    max={5}
                    step={1}
                    value={recursionDepth}
                    onChange={(e) => setRecursionDepth(Number(e.target.value))}
                    className="w-full accent-[#661447]"
                  />
                </label>

                <label className="block">
                  <span className="flex justify-between font-mono text-[11px] mb-1">
                    <span>Rate-Distortion D (norm. σ² = 1)</span>
                    <span>D = {distortionD.toFixed(2)}</span>
                  </span>
                  <input
                    type="range"
                    min={0.05}
                    max={0.95}
                    step={0.05}
                    value={distortionD}
                    onChange={(e) => setDistortionD(Number(e.target.value))}
                    className="w-full accent-[#11505C]"
                  />
                </label>
              </div>

              <div className="p-3 border border-[#CBBBA0] dark:border-[#186876]/50 bg-[#FAF6EC] dark:bg-[#062429] space-y-2 text-[11px]">
                <div className="font-mono font-semibold text-[#4A0E33] dark:text-[#C974A6]">
                  {budgetResult.forcedRegime}
                </div>
                <p className="text-[#161A1D] dark:text-[#EDF5F6] leading-relaxed">{budgetResult.diagnosis}</p>
                <div className="pt-2 border-t border-[#E2D6C1] dark:border-[#186876]/40 space-y-1 font-mono text-[10px] text-[#0B3942] dark:text-[#9FD3DD]">
                  <div>Compression Ratio ρ: {budgetResult.compressionRatio.toExponential(2)} : 1</div>
                  <div>Landauer 310K Quantum: {budgetResult.landauerBitCostJ.toExponential(2)} J/bit</div>
                  <div>Gaussian R(D): {rdTradeoff.rateBitsR.toFixed(2)} bits · Fisher g_θθ: {rdTradeoff.fisherSensitivityG.toFixed(3)}</div>
                </div>
                <div className="pt-2 border-t border-[#E2D6C1] dark:border-[#186876]/40">
                  <div className="font-mono font-semibold text-[#0F3D2B] dark:text-[#4A9374]">
                    {locusResult.substrateVerdict}
                  </div>
                  <p className="mt-1 text-[11px] text-[#11505C] dark:text-[#6CB2BD]">
                    {locusResult.metaphysicalStatus}
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Scholarly Article Column */}
          <main className="lg:col-span-8 space-y-12 font-['Source_Serif_4',Georgia,serif]">
            {/* Abstract & Core Diagnosis */}
            <section id="mind-abstract" className="border border-[#CBBBA0] dark:border-[#186876]/45 bg-[#FDFBF7] dark:bg-[#082E36] p-6 sm:p-10 space-y-5">
              <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl text-[#161A1D] dark:text-[#FAF6EC] pb-3 border-b border-[#E2D6C1] dark:border-[#186876]/40">
                Abstract
              </h2>
              <div className="space-y-4 text-base sm:text-[17px] leading-[1.8] text-[#161A1D] dark:text-[#EDF5F6]">
                {MIND_ABSTRACT.map((para, i) => (
                  <RichProseParagraph key={i} text={para} dropCap={i === 0} />
                ))}
              </div>
              <div className="text-xs font-mono text-[#11505C] dark:text-[#6CB2BD] pt-2">
                Keywords: {MIND_META.keywords.join('; ')}
              </div>

              <div className="mt-6 border border-[#831B5B]/45 bg-[#F9EEF4] dark:bg-[#380D29]/45 p-5 sm:p-6 space-y-3">
                <div className="font-mono text-xs uppercase tracking-wider text-[#661447] dark:text-[#C974A6]">
                  {MIND_CORE_THESIS.title}
                </div>
                <p className="font-semibold text-[#161A1D] dark:text-[#FAF6EC] text-base">
                  {MIND_CORE_THESIS.lead}
                </p>
                <div className="space-y-2 text-sm text-[#062429] dark:text-[#EDF5F6]">
                  {MIND_CORE_THESIS.elaboration.map((p, idx) => (
                    <RichProseParagraph key={idx} text={p} />
                  ))}
                </div>
              </div>
            </section>

            {/* Chapters 1..8 */}
            {MIND_CHAPTERS.map((ch) => {
              const chapterPlates = MIND_PLATES.filter((p) => p.anchorChapter === ch.number);
              return (
                <article
                  key={ch.id}
                  id={ch.id}
                  className="border border-[#CBBBA0] dark:border-[#186876]/45 bg-[#FDFBF7] dark:bg-[#082E36] p-6 sm:p-10 space-y-7"
                >
                  <div className="space-y-3 border-b border-[#E2D6C1] dark:border-[#186876]/40 pb-6">
                    <div className="font-mono text-xs uppercase tracking-wider text-[#661447] dark:text-[#C974A6]">
                      {ch.kicker}
                    </div>
                    <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl text-[#161A1D] dark:text-[#FAF6EC]">
                      {ch.number}. {ch.title}
                    </h2>
                    <p className="italic text-sm text-[#11505C] dark:text-[#6CB2BD]">{ch.epigraph}</p>
                    <blockquote className="my-4 py-3 border-y border-[#CBBBA0] dark:border-[#186876]/40 text-center italic text-lg text-[#4A0E33] dark:text-[#C974A6]">
                      {ch.pullQuote}
                    </blockquote>
                    <p className="text-sm italic text-[#0F3D2B] dark:text-[#4A9374]">{ch.leadSummary}</p>
                  </div>

                  <div className="space-y-4 text-base sm:text-[17px] leading-[1.82] bg-[#FAF6EC]/60 dark:bg-[#062429]/50 p-5 border-y border-[#E2D6C1] dark:border-[#186876]/40">
                    {ch.chapterIntro.map((para, idx) => (
                      <RichProseParagraph key={idx} text={para} dropCap={idx === 0} />
                    ))}
                  </div>

                  {ch.subsections.map((sub) => (
                    <section key={sub.number} className="space-y-4 pt-2">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#E2D6C1]/70 dark:border-[#186876]/30 pb-2">
                        <h3 className="font-['Playfair_Display'] font-normal text-xl sm:text-2xl text-[#0B3942] dark:text-[#9FD3DD]">
                          §{sub.number} · {sub.title}
                        </h3>
                        <span className="font-mono text-[11px] text-[#661447] dark:text-[#C974A6]">
                          {sub.epistemicFocus}
                        </span>
                      </div>

                      <div className="space-y-4 text-base sm:text-[17px] leading-[1.82]">
                        {sub.paragraphs.map((p, pi) => (
                          <RichProseParagraph key={pi} text={p} />
                        ))}
                      </div>

                      {sub.equation && <SchemaEquationCard eq={sub.equation} />}

                      {sub.theoremBox && (
                        <div className="my-7 border border-[#831B5B] bg-[#F9EEF4] dark:bg-[#380D29]/55 p-5 sm:p-6 space-y-3">
                          <div className="font-mono text-xs uppercase tracking-wider text-[#661447] dark:text-[#C974A6]">
                            {sub.theoremBox.kind} {sub.theoremBox.number} · {sub.theoremBox.title}
                          </div>
                          <div className="text-sm sm:text-base text-[#161A1D] dark:text-[#FAF6EC]">
                            <RichProseParagraph text={sub.theoremBox.statement} />
                          </div>
                          <ol className="pl-5 list-decimal space-y-1.5 text-sm text-[#0B3942] dark:text-[#EDF5F6]">
                            {sub.theoremBox.proofSteps.map((step, si) => (
                              <li key={si}>{renderInlineProseTokens(step)}</li>
                            ))}
                          </ol>
                          <div className="text-xs italic text-[#4A0E33] dark:text-[#C974A6]">
                            {sub.theoremBox.sourceNote}
                          </div>
                        </div>
                      )}

                      {sub.workedExample && (
                        <div className="my-7 border border-[#11505C]/50 bg-[#FAF6EC] dark:bg-[#0B3942]/45 p-5 sm:p-6 space-y-3">
                          <div className="font-mono text-xs uppercase tracking-wider text-[#11505C] dark:text-[#6CB2BD]">
                            {sub.workedExample.title}
                          </div>
                          <p className="text-sm italic text-[#0B3942] dark:text-[#9FD3DD]">
                            {renderInlineProseTokens(sub.workedExample.setup)}
                          </p>
                          <ol className="pl-5 list-decimal space-y-1.5 text-sm">
                            {sub.workedExample.steps.map((st, si) => (
                              <li key={si}>{renderInlineProseTokens(st)}</li>
                            ))}
                          </ol>
                          <SchemaEquationCard eq={sub.workedExample.resultEquation} />
                          <p className="text-sm text-[#0F3D2B] dark:text-[#4A9374]">
                            <strong>Takeaway:</strong> {renderInlineProseTokens(sub.workedExample.takeaway)}
                          </p>
                        </div>
                      )}
                    </section>
                  ))}

                  {/* Chapter-specific analytical tables */}
                  {ch.number === 1 && (
                    <div className="overflow-x-auto my-6">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-[#4A0E33] dark:text-[#C974A6] mb-2">
                        Table 1.1 · Contrasting Classical Hard-Problem Framing vs. Thermodynamic Compression
                      </h4>
                      <table className="w-full border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-[#EDF5F6] dark:bg-[#0B3942] text-[#0B3942] dark:text-[#FAF6EC]">
                            <th className="border border-[#CBBBA0] dark:border-[#186876]/50 p-2.5 text-left">Analytical Axis</th>
                            <th className="border border-[#CBBBA0] dark:border-[#186876]/50 p-2.5 text-left">Standard Hard Problem</th>
                            <th className="border border-[#CBBBA0] dark:border-[#186876]/50 p-2.5 text-left">Compression Account</th>
                            <th className="border border-[#CBBBA0] dark:border-[#186876]/50 p-2.5 text-left">Philosophical Gain</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_M1_CATEGORY_COMPARISON.map((row) => (
                            <tr key={row.axis} className="even:bg-[#FAF6EC] dark:even:bg-[#062429]/50">
                              <td className="border border-[#CBBBA0] dark:border-[#186876]/40 p-2.5 font-semibold">{row.axis}</td>
                              <td className="border border-[#CBBBA0] dark:border-[#186876]/40 p-2.5">{row.standardHardProblem}</td>
                              <td className="border border-[#CBBBA0] dark:border-[#186876]/40 p-2.5">{row.compressionFramework}</td>
                              <td className="border border-[#CBBBA0] dark:border-[#186876]/40 p-2.5">{row.philosophicalGain}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {ch.number === 5 && (
                    <div className="overflow-x-auto my-6">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-[#4A0E33] dark:text-[#C974A6] mb-2">
                        Table 5.1 · Classical &ldquo;Soul&rdquo; Substance vs. Localized Compression Locus (Z_S)
                      </h4>
                      <table className="w-full border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-[#EDF5F6] dark:bg-[#0B3942] text-[#0B3942] dark:text-[#FAF6EC]">
                            <th className="border border-[#CBBBA0] dark:border-[#186876]/50 p-2.5 text-left">Dimension</th>
                            <th className="border border-[#CBBBA0] dark:border-[#186876]/50 p-2.5 text-left">Classical Immaterial Soul</th>
                            <th className="border border-[#CBBBA0] dark:border-[#186876]/50 p-2.5 text-left">Localized Compression Locus (Z_S)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_M3_SOUL_VS_LOCUS.map((row) => (
                            <tr key={row.dimension} className="even:bg-[#FAF6EC] dark:even:bg-[#062429]/50">
                              <td className="border border-[#CBBBA0] dark:border-[#186876]/40 p-2.5 font-semibold">{row.dimension}</td>
                              <td className="border border-[#CBBBA0] dark:border-[#186876]/40 p-2.5">{row.classicalSoul}</td>
                              <td className="border border-[#CBBBA0] dark:border-[#186876]/40 p-2.5">{row.localizedLocus}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {ch.number === 6 && (
                    <div className="overflow-x-auto my-6">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-[#4A0E33] dark:text-[#C974A6] mb-2">
                        Table 6.1 · Matrix of Dissolved Classical Consciousness Puzzles
                      </h4>
                      <table className="w-full border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-[#EDF5F6] dark:bg-[#0B3942] text-[#0B3942] dark:text-[#FAF6EC]">
                            <th className="border border-[#CBBBA0] dark:border-[#186876]/50 p-2.5 text-left">Puzzle</th>
                            <th className="border border-[#CBBBA0] dark:border-[#186876]/50 p-2.5 text-left">Classical Premise</th>
                            <th className="border border-[#CBBBA0] dark:border-[#186876]/50 p-2.5 text-left">Category Error</th>
                            <th className="border border-[#CBBBA0] dark:border-[#186876]/50 p-2.5 text-left">Dissolution Under Theorems 1–3</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_M2_PUZZLE_DISSOLUTION.map((row) => (
                            <tr key={row.puzzle} className="even:bg-[#FAF6EC] dark:even:bg-[#062429]/50">
                              <td className="border border-[#CBBBA0] dark:border-[#186876]/40 p-2.5 font-semibold">{row.puzzle}</td>
                              <td className="border border-[#CBBBA0] dark:border-[#186876]/40 p-2.5">{row.classicalPremise}</td>
                              <td className="border border-[#CBBBA0] dark:border-[#186876]/40 p-2.5">{row.categoryError}</td>
                              <td className="border border-[#CBBBA0] dark:border-[#186876]/40 p-2.5">{row.dissolution}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {ch.number === 8 && (
                    <div className="overflow-x-auto my-6">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-[#4A0E33] dark:text-[#C974A6] mb-2">
                        Table 8.1 · Popperian Falsification Conditions (FC1–FC4) &amp; Experimental Paradigms
                      </h4>
                      <table className="w-full border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-[#EDF5F6] dark:bg-[#0B3942] text-[#0B3942] dark:text-[#FAF6EC]">
                            <th className="border border-[#CBBBA0] dark:border-[#186876]/50 p-2.5 text-left">Gate</th>
                            <th className="border border-[#CBBBA0] dark:border-[#186876]/50 p-2.5 text-left">Prediction</th>
                            <th className="border border-[#CBBBA0] dark:border-[#186876]/50 p-2.5 text-left">Refuting Observation</th>
                            <th className="border border-[#CBBBA0] dark:border-[#186876]/50 p-2.5 text-left">Primary Venue</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_M4_FALSIFICATION_MATRIX.map((row) => (
                            <tr key={row.condition} className="even:bg-[#FAF6EC] dark:even:bg-[#062429]/50">
                              <td className="border border-[#CBBBA0] dark:border-[#186876]/40 p-2.5 font-semibold">{row.condition}</td>
                              <td className="border border-[#CBBBA0] dark:border-[#186876]/40 p-2.5">{row.predictionOfFramework}</td>
                              <td className="border border-[#CBBBA0] dark:border-[#186876]/40 p-2.5">{row.refutingObservation}</td>
                              <td className="border border-[#CBBBA0] dark:border-[#186876]/40 p-2.5">{row.experimentalVenue}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Full-page A4 Illustrations anchored in this chapter */}
                  {chapterPlates.map((plate) => (
                    <MindPlateCard key={plate.id} plate={plate} />
                  ))}
                </article>
              );
            })}

            {/* Appendix A */}
            <section id="mind-appendix" className="border border-[#CBBBA0] dark:border-[#186876]/45 bg-[#FDFBF7] dark:bg-[#082E36] p-6 sm:p-10 space-y-6">
              <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl text-[#161A1D] dark:text-[#FAF6EC] pb-3 border-b border-[#E2D6C1] dark:border-[#186876]/40">
                Appendix A: Formal Proofs and Mathematical Definitions
              </h2>
              {MIND_APPENDICES.map((app) => (
                <div key={app.id} className="space-y-4 pt-2 border-b border-[#E2D6C1]/60 dark:border-[#186876]/30 pb-6 last:border-none">
                  <h3 className="font-['Playfair_Display'] font-normal text-xl text-[#0B3942] dark:text-[#9FD3DD]">
                    {app.letter}. {app.title}
                  </h3>
                  <p className="text-sm italic text-[#11505C] dark:text-[#6CB2BD]">{app.summary}</p>
                  <div className="space-y-3 text-base leading-[1.8]">
                    {app.paragraphs.map((p, idx) => (
                      <RichProseParagraph key={idx} text={p} />
                    ))}
                  </div>
                  {app.equations.map((eq) => (
                    <SchemaEquationCard key={eq.label} eq={eq} />
                  ))}
                </div>
              ))}
            </section>

            {/* Glossary & Symbols */}
            <section id="mind-glossary" className="border border-[#CBBBA0] dark:border-[#186876]/45 bg-[#FDFBF7] dark:bg-[#082E36] p-6 sm:p-10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-[#E2D6C1] dark:border-[#186876]/40">
                <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl text-[#161A1D] dark:text-[#FAF6EC]">
                  Glossary &amp; Symbol Lexicon
                </h2>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-[#11505C]" />
                  <input
                    type="text"
                    value={glossaryFilter}
                    onChange={(e) => setGlossaryFilter(e.target.value)}
                    placeholder="Filter definitions…"
                    className="pl-8 pr-3 py-1.5 text-xs border border-[#CBBBA0] dark:border-[#186876]/50 bg-[#FAF6EC] dark:bg-[#062429]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredGlossary.map((g) => (
                  <div key={g.term} className="p-4 border border-[#E2D6C1] dark:border-[#186876]/40 bg-[#FAF6EC]/60 dark:bg-[#062429]/60 space-y-1">
                    <div className="font-semibold text-sm text-[#4A0E33] dark:text-[#C974A6]">
                      {g.term}{g.acronym ? ` (${g.acronym})` : ''}
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed">{g.definition}</p>
                  </div>
                ))}
              </div>

              <div className="overflow-x-auto pt-4">
                <table className="w-full border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#EDF5F6] dark:bg-[#0B3942] text-[#0B3942] dark:text-[#FAF6EC]">
                      <th className="border border-[#CBBBA0] dark:border-[#186876]/50 p-2.5 text-left">Symbol</th>
                      <th className="border border-[#CBBBA0] dark:border-[#186876]/50 p-2.5 text-left">Concept</th>
                      <th className="border border-[#CBBBA0] dark:border-[#186876]/50 p-2.5 text-left">Domain</th>
                      <th className="border border-[#CBBBA0] dark:border-[#186876]/50 p-2.5 text-left">Definition</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MIND_SYMBOL_GLOSSARY.map((s) => (
                      <tr key={s.symbol} className="even:bg-[#FAF6EC] dark:even:bg-[#062429]/50">
                        <td className="border border-[#CBBBA0] dark:border-[#186876]/40 p-2 font-mono">{s.symbol}</td>
                        <td className="border border-[#CBBBA0] dark:border-[#186876]/40 p-2 font-semibold">{s.name}</td>
                        <td className="border border-[#CBBBA0] dark:border-[#186876]/40 p-2">{s.domain}</td>
                        <td className="border border-[#CBBBA0] dark:border-[#186876]/40 p-2">{s.definition}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* References & Indexes */}
            <section id="mind-references" className="border border-[#CBBBA0] dark:border-[#186876]/45 bg-[#FDFBF7] dark:bg-[#082E36] p-6 sm:p-10 space-y-6">
              <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl text-[#161A1D] dark:text-[#FAF6EC] pb-3 border-b border-[#E2D6C1] dark:border-[#186876]/40">
                References &amp; Back-Matter Indexes
              </h2>

              <div className="space-y-4">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#661447] dark:text-[#C974A6]">
                  Foundational Texts
                </h3>
                <ol className="space-y-2 text-sm pl-5 list-decimal">
                  {MIND_REFERENCES.filter((r) => r.group === 'Foundational Texts').map((r) => (
                    <li key={r.id}>{r.citation}</li>
                  ))}
                </ol>

                <h3 className="font-mono text-xs uppercase tracking-wider text-[#11505C] dark:text-[#6CB2BD] pt-4">
                  Additional References
                </h3>
                <ol start={9} className="space-y-2 text-sm pl-5 list-decimal">
                  {MIND_REFERENCES.filter((r) => r.group === 'Additional References').map((r) => (
                    <li key={r.id}>{r.citation}</li>
                  ))}
                </ol>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#E2D6C1] dark:border-[#186876]/40 text-xs">
                <div>
                  <h4 className="font-mono uppercase tracking-wider text-[#4A0E33] dark:text-[#C974A6] mb-2">
                    Index of Names
                  </h4>
                  <ul className="space-y-1">
                    {MIND_INDEX_OF_NAMES.map((n) => (
                      <li key={n.entry} className="flex justify-between gap-2 border-b border-[#E2D6C1]/40 pb-1">
                        <span className="font-semibold">{n.entry}</span>
                        <span className="font-mono text-[#11505C] dark:text-[#6CB2BD]">{n.sections}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono uppercase tracking-wider text-[#0F3D2B] dark:text-[#4A9374] mb-2">
                    Index of Concepts
                  </h4>
                  <ul className="space-y-1">
                    {MIND_INDEX_OF_CONCEPTS.map((c) => (
                      <li key={c.entry} className="flex justify-between gap-2 border-b border-[#E2D6C1]/40 pb-1">
                        <span className="font-semibold">{c.entry}</span>
                        <span className="font-mono text-[#11505C] dark:text-[#6CB2BD]">{c.sections}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};
