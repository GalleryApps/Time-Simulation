/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Paper 15 — Scientific Magazine Editorial View for *Synthese*
 * Palette: 40-Shade Ecru, Burnished Orange, Dark Magenta, Dark Teal, Pine Green & Complementary Accents
 */

import React, { useMemo, useState } from 'react';
import {
  BookOpen,
  Download,
  FileCode2,
  FileText,
  Palette,
  Search,
  SlidersHorizontal
} from 'lucide-react';
import {
  PALETTE_40_SHADES,
  evaluateConventionalismSplit,
  evaluateMoritaEquivalence,
  computeBayesianEpistemicComparison
} from '../physics/synthesePhilosophyPaper';
import {
  SYNTHESE_META,
  SYNTHESE_ABSTRACT,
  SYNTHESE_CHAPTERS,
  TABLE_2_1_CONVENTIONALISM,
  TABLE_3_1_PPN_UNDERDETERMINATION,
  TABLE_4_1_MORITA_LEDGER,
  TABLE_5_1_FUNCTIONALISM_MATRIX,
  TABLE_6_1_STRONG_FIELD_ONTOLOGY,
  TABLE_7_1_BAYESIAN_MDL,
  TABLE_8_1_CRUCIAL_EXPERIMENTS,
  SYNTHESE_SYMBOL_GLOSSARY,
  SYNTHESE_GLOSSARY,
  SYNTHESE_APPENDICES,
  SYNTHESE_REFERENCES,
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

function EquationCard({ eq }: { eq: SyntheseEquation }) {
  return (
    <div className="my-8 border border-[#186876]/35 dark:border-[#278594]/50 bg-[#EDF5F6]/70 dark:bg-[#0B3942]/70 p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3 pb-3 border-b border-[#CBBBA0]/60 dark:border-[#186876]/40">
        <div
          className="text-base sm:text-lg font-['Source_Serif_4',Georgia,serif] text-[#2E0820] dark:text-[#FAF6EC] overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: eq.unicodeHtml }}
        />
        <span className="font-mono text-xs text-[#831B5B] dark:text-[#C974A6] tabular-nums shrink-0">
          Eq. {eq.label}
        </span>
      </div>

      <div className="mt-3 px-3 py-2 bg-[#FDFBF7] dark:bg-[#062429] border border-[#CBBBA0] dark:border-[#186876]/40 font-mono text-xs text-[#9A3412] dark:text-[#F08A43] overflow-x-auto">
        <span className="font-semibold text-[#4A0E33] dark:text-[#C974A6] mr-1.5">Plain Math Equation:</span>
        <span>{eq.plainMath}</span>
      </div>

      <p className="mt-3 text-xs sm:text-sm italic text-[#0B3942] dark:text-[#6CB2BD]">
        {eq.caption}
      </p>
      <p className="mt-1 text-xs sm:text-sm text-[#0F3D2B] dark:text-[#4A9374]">
        {eq.plainMeaning}
      </p>
      {eq.provenance && (
        <p className="mt-2 font-mono text-[11px] text-[#11505C] dark:text-[#6CB2BD]">
          Provenance: {eq.provenance}
        </p>
      )}
      {eq.derivationSteps && eq.derivationSteps.length > 0 && (
        <ol className="mt-3 space-y-1 pl-5 list-decimal text-xs text-[#062429] dark:text-[#EDF5F6]">
          {eq.derivationSteps.map((st, idx) => (
            <li key={idx}>{st}</li>
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

  // Interactive Epistemology Workbench state
  const [ppnGamma, setPpnGamma] = useState<number>(1.0);
  const [radialRRs, setRadialRRs] = useState<number>(1.5);
  const [coreScaleEps, setCoreScaleEps] = useState<number>(0.02);
  const [echoSnr, setEchoSnr] = useState<number>(0.5);

  const convAudit = useMemo(() => evaluateConventionalismSplit(ppnGamma), [ppnGamma]);
  const moritaAudit = useMemo(
    () => evaluateMoritaEquivalence(radialRRs, coreScaleEps),
    [radialRRs, coreScaleEps]
  );
  const bayesScores = useMemo(
    () => computeBayesianEpistemicComparison(1200, echoSnr, 0.0),
    [echoSnr]
  );

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
    <article className="bg-[#FAF6EC] dark:bg-[#062429] text-[#062429] dark:text-[#FAF6EC] min-h-screen transition-colors">
      {/* 40-Shade Chromatic Masthead Strip */}
      <div className="w-full flex h-2" aria-label="40-shade Synthese magazine color strip">
        {PALETTE_40_SHADES.map((shade) => (
          <div
            key={shade.id}
            style={{ backgroundColor: shade.hex }}
            className="flex-1 h-full"
            title={`${shade.family}: ${shade.name} (${shade.hex})`}
          />
        ))}
      </div>

      <div className="max-w-[1340px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14">
        {/* Editorial Magazine Cover Masthead */}
        <header className="bg-[#FDFBF7] dark:bg-[#0B3942] border border-[#CBBBA0] dark:border-[#186876]/50 p-6 sm:p-10 lg:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E2D6C1] dark:border-[#186876]/40 text-xs font-mono">
            <span className="text-[#831B5B] dark:text-[#C974A6] tracking-wider">
              {SYNTHESE_META.paperNumber} · {SYNTHESE_META.journalTarget}
            </span>
            <span className="text-[#0F3D2B] dark:text-[#4A9374]">
              Scientific Magazine Monograph · A4 Exportable
            </span>
          </div>

          <h1 className="mt-6 font-['Playfair_Display'] font-normal text-3xl sm:text-4xl lg:text-[2.85rem] leading-[1.15] text-[#2E0820] dark:text-[#FAF6EC] text-balance max-w-5xl">
            {SYNTHESE_META.title}
          </h1>

          <p className="mt-4 font-['Source_Serif_4',Georgia,serif] italic text-lg sm:text-xl text-[#C2410C] dark:text-[#F08A43] max-w-4xl leading-relaxed">
            {SYNTHESE_META.laymanDeck}
          </p>

          <p className="mt-3 text-sm sm:text-base text-[#0B3942] dark:text-[#6CB2BD] max-w-4xl leading-relaxed">
            {SYNTHESE_META.subtitle}
          </p>

          {/* Author Masthead Grid */}
          <div className="mt-8 pt-6 border-t border-[#E2D6C1] dark:border-[#186876]/40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {SYNTHESE_META.authors.map((a) => (
              <div key={a.name} className="text-xs space-y-0.5">
                <div className="font-semibold text-[#2E0820] dark:text-[#FAF6EC]">{a.name}</div>
                <div className="text-[#11505C] dark:text-[#6CB2BD]">{a.affiliation}</div>
                <div className="text-[#0F3D2B] dark:text-[#4A9374] italic">{a.creditRoles}</div>
              </div>
            ))}
          </div>

          {/* Action Toolbar — Sharp Editorial Rectangular Controls */}
          <div className="mt-8 pt-6 border-t border-[#E2D6C1] dark:border-[#186876]/40 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={pdfBusy}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#4A0E33] hover:bg-[#661447] text-[#FDFBF7] text-xs font-mono tracking-wide border border-[#2E0820] transition-colors cursor-pointer disabled:opacity-60"
            >
              <Download className="w-4 h-4" />
              <span>{pdfBusy ? 'Compiling A4 Magazine PDF...' : 'Download Full A4 PDF'}</span>
            </button>

            <button
              type="button"
              onClick={downloadSyntheseHtml}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FDFBF7] dark:bg-[#062429] hover:bg-[#F4EFE6] dark:hover:bg-[#11505C]/40 text-[#0B3942] dark:text-[#EDF5F6] text-xs font-mono border border-[#186876] transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#C2410C]" />
              <span>Magazine HTML</span>
            </button>

            <button
              type="button"
              onClick={downloadSyntheseLatex}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FDFBF7] dark:bg-[#062429] hover:bg-[#F4EFE6] dark:hover:bg-[#11505C]/40 text-[#0B3942] dark:text-[#EDF5F6] text-xs font-mono border border-[#17573E] transition-colors cursor-pointer"
            >
              <FileCode2 className="w-4 h-4 text-[#0F3D2B] dark:text-[#4A9374]" />
              <span>Synthese LaTeX (.tex)</span>
            </button>

            <button
              type="button"
              onClick={downloadSyntheseMarkdown}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FDFBF7] dark:bg-[#062429] hover:bg-[#F4EFE6] dark:hover:bg-[#11505C]/40 text-[#0B3942] dark:text-[#EDF5F6] text-xs font-mono border border-[#CBBBA0] dark:border-[#278594] transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#831B5B] dark:text-[#C974A6]" />
              <span>Markdown (.md)</span>
            </button>

            <button
              type="button"
              onClick={() => setShowPaletteDrawer((v) => !v)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FFF4EB] dark:bg-[#5C1D07]/40 hover:bg-[#F7C9A5]/40 text-[#9A3412] dark:text-[#F08A43] text-xs font-mono border border-[#C2410C]/50 transition-colors cursor-pointer ml-auto"
            >
              <Palette className="w-4 h-4" />
              <span>{showPaletteDrawer ? 'Hide 40-Shade Atlas' : 'Inspect 40-Shade Palette'}</span>
            </button>
          </div>

          {pdfError && (
            <p className="mt-3 text-xs font-mono text-[#C64334] dark:text-[#F08A43]">
              PDF Export Notice: {pdfError}
            </p>
          )}

          {/* Optional Expandable 40-Shade Chromatic Atlas */}
          {showPaletteDrawer && (
            <div className="mt-6 pt-6 border-t border-[#E2D6C1] dark:border-[#186876]/40">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-['Playfair_Display'] text-lg text-[#2E0820] dark:text-[#FAF6EC]">
                  40-Shade Chromatic System (Ecru · Orange · Dark Magenta · Dark Teal · Pine Green · Complementary)
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
                    <div className="font-mono font-semibold text-[#2E0820] dark:text-[#FAF6EC] tabular-nums">
                      #{shade.id} · {shade.hex}
                    </div>
                    <div className="text-[#0B3942] dark:text-[#6CB2BD] truncate" title={shade.name}>
                      {shade.name}
                    </div>
                    <div className="text-[10px] text-[#9A3412] dark:text-[#F08A43]">
                      {shade.family}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* 70 / 30 Asymmetric Scientific Magazine Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
          {/* Primary Reading Column */}
          <div className="space-y-12 min-w-0">
            {/* Abstract Section */}
            <section
              id="abstract"
              className="bg-[#FDFBF7] dark:bg-[#0B3942] border border-[#CBBBA0] dark:border-[#186876]/50 p-6 sm:p-10"
            >
              <div className="text-xs font-mono text-[#831B5B] dark:text-[#C974A6] tracking-wider mb-2">
                ABSTRACT · SYNTHESE MONOGRAPH
              </div>
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#2E0820] dark:text-[#FAF6EC] font-normal pb-4 border-b border-[#E2D6C1] dark:border-[#186876]/40">
                Abstract &amp; Overview
              </h2>
              <div className="mt-6 space-y-4 font-['Source_Serif_4',Georgia,serif] text-base sm:text-[17px] leading-[1.78] text-[#062429] dark:text-[#EDF5F6] max-w-[70ch]">
                {SYNTHESE_ABSTRACT.map((p, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "first-letter:float-left first-letter:text-5xl first-letter:font-['Playfair_Display'] first-letter:text-[#C2410C] dark:first-letter:text-[#F08A43] first-letter:mr-3 first-letter:mt-1 first-letter:leading-none"
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

            {/* Interactive Philosophy-of-Physics Formal Workbench */}
            <section
              id="workbench"
              className="bg-[#FDFBF7] dark:bg-[#0B3942] border border-[#186876]/50 p-6 sm:p-10"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E2D6C1] dark:border-[#186876]/40">
                <div>
                  <div className="text-xs font-mono text-[#C2410C] dark:text-[#F08A43] flex items-center gap-1.5">
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    <span>INTERACTIVE FORMAL EPISTEMOLOGY WORKBENCH</span>
                  </div>
                  <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#2E0820] dark:text-[#FAF6EC] font-normal mt-1">
                    Conventionalism, Morita Parity &amp; Fisher-MDL Crucible
                  </h2>
                </div>
                <span className="font-mono text-xs text-[#0F3D2B] dark:text-[#4A9374] tabular-nums">
                  Deterministic Model Evaluator
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Control 1: Reichenbach PPN gamma */}
                <div className="border border-[#CBBBA0] dark:border-[#186876]/40 bg-[#FAF6EC] dark:bg-[#062429] p-4 space-y-3">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#4A0E33] dark:text-[#C974A6]">PPN Parameter γ</span>
                    <span className="font-semibold text-[#C2410C] dark:text-[#F08A43] tabular-nums">
                      γ = {ppnGamma.toFixed(2)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={1.2}
                    step={0.01}
                    value={ppnGamma}
                    onChange={(e) => setPpnGamma(Number(e.target.value))}
                    className="w-full accent-[#EA580C]"
                    aria-label="PPN Gamma slider"
                  />
                  <div className="text-xs space-y-1 font-mono tabular-nums">
                    <div className="flex justify-between">
                      <span className="text-[#0B3942] dark:text-[#6CB2BD]">Solar Deflection:</span>
                      <span className="text-[#2E0820] dark:text-[#FAF6EC]">
                        {convAudit.photonDeflectionArcsec.toFixed(4)}&quot;
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#0B3942] dark:text-[#6CB2BD]">Shapiro Ratio:</span>
                      <span>{(convAudit.cassiniShapiroRatio * 100).toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#0B3942] dark:text-[#6CB2BD]">Nordtvedt |η_N|:</span>
                      <span>{convAudit.nordtvedtViolationMagnitude.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-[#E2D6C1] dark:border-[#186876]/40 text-[11px] font-mono text-[#0F3D2B] dark:text-[#4A9374]">
                    {convAudit.epistemicVerdict}
                  </div>
                </div>

                {/* Control 2: Morita Equivalence Radius */}
                <div className="border border-[#CBBBA0] dark:border-[#186876]/40 bg-[#FAF6EC] dark:bg-[#062429] p-4 space-y-3">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#11505C] dark:text-[#6CB2BD]">Radius r / r_s</span>
                    <span className="font-semibold text-[#0F3D2B] dark:text-[#4A9374] tabular-nums">
                      {radialRRs.toFixed(2)} r_s
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0.1}
                    max={4.0}
                    step={0.05}
                    value={radialRRs}
                    onChange={(e) => setRadialRRs(Number(e.target.value))}
                    className="w-full accent-[#17573E]"
                    aria-label="Dimensionless radius slider"
                  />
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#11505C] dark:text-[#6CB2BD]">Core ℓ_core / r_s</span>
                    <span className="tabular-nums">{coreScaleEps.toFixed(3)}</span>
                  </div>
                  <input
                    type="range"
                    min={0.001}
                    max={0.25}
                    step={0.005}
                    value={coreScaleEps}
                    onChange={(e) => setCoreScaleEps(Number(e.target.value))}
                    className="w-full accent-[#831B5B]"
                    aria-label="Core regularization scale slider"
                  />
                  <div className="text-xs space-y-1 font-mono tabular-nums">
                    <div className="flex justify-between">
                      <span className="text-[#0B3942] dark:text-[#6CB2BD]">Exterior Overlap:</span>
                      <span>{(moritaAudit.exteriorMetricOverlap * 100).toFixed(2)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#0B3942] dark:text-[#6CB2BD]">Knox Inertial Match:</span>
                      <span>{(moritaAudit.functionalInertialMatch * 100).toFixed(2)}%</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-[#E2D6C1] dark:border-[#186876]/40 text-[11px] font-mono text-[#831B5B] dark:text-[#C974A6]">
                    {moritaAudit.categoricalStatus}
                  </div>
                </div>

                {/* Control 3: Crucial Echo SNR */}
                <div className="border border-[#CBBBA0] dark:border-[#186876]/40 bg-[#FAF6EC] dark:bg-[#062429] p-4 space-y-3">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#9A3412] dark:text-[#F08A43]">GW Echo Detection SNR</span>
                    <span className="font-semibold text-[#831B5B] dark:text-[#C974A6] tabular-nums">
                      SNR = {echoSnr.toFixed(1)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={6}
                    step={0.1}
                    value={echoSnr}
                    onChange={(e) => setEchoSnr(Number(e.target.value))}
                    className="w-full accent-[#831B5B]"
                    aria-label="Echo SNR slider"
                  />
                  <div className="space-y-1.5 text-[11px] font-mono tabular-nums">
                    {bayesScores.map((bs) => (
                      <div key={bs.modelId} className="space-y-0.5">
                        <div className="flex justify-between">
                          <span className="truncate pr-2 text-[#062429] dark:text-[#EDF5F6]">
                            {bs.modelId === 'scalar-luh'
                              ? 'Scalar γ=0'
                              : bs.modelId === 'standard-gr'
                                ? 'Classical GR'
                                : bs.modelId === 'dual-igrt-ext'
                                  ? 'Morita IGRT Ext'
                                  : 'Regular-Core IGRT'}
                          </span>
                          <span className="text-[#0F3D2B] dark:text-[#4A9374]">
                            {(bs.posteriorShare * 100).toFixed(1)}%
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-[#EDE5D5] dark:bg-[#11505C]/40">
                          <div
                            className="h-full transition-all"
                            style={{
                              width: `${Math.max(1, bs.posteriorShare * 100)}%`,
                              backgroundColor:
                                bs.modelId === 'dual-igrt-core'
                                  ? '#EA580C'
                                  : bs.modelId === 'standard-gr'
                                    ? '#0B3942'
                                    : bs.modelId === 'dual-igrt-ext'
                                      ? '#0F3D2B'
                                      : '#831B5B'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-[#E2D6C1] dark:border-[#186876]/40 text-[11px] font-mono text-[#0B3942] dark:text-[#6CB2BD]">
                    Crucial Flip Threshold: SNR_crit = 3.20
                  </div>
                </div>
              </div>
            </section>

            {/* Chapters 1–9 */}
            {SYNTHESE_CHAPTERS.map((ch) => {
              const plates = SYNTHESE_PLATES.filter((p) => p.anchorChapter === ch.number);
              const figs = SYNTHESE_FIGURES.filter((f) => f.anchorChapter === ch.number);

              return (
                <section
                  key={ch.id}
                  id={ch.id}
                  className="bg-[#FDFBF7] dark:bg-[#0B3942] border border-[#CBBBA0] dark:border-[#186876]/50 p-6 sm:p-10"
                >
                  <div className="text-xs font-mono text-[#C2410C] dark:text-[#F08A43] tracking-wider">
                    {ch.kicker}
                  </div>
                  <h2 className="mt-2 font-['Playfair_Display'] font-normal text-2xl sm:text-3xl text-[#2E0820] dark:text-[#FAF6EC] text-balance leading-tight">
                    Chapter {ch.number} · {ch.title}
                  </h2>

                  <p className="mt-4 font-['Source_Serif_4',Georgia,serif] italic text-sm sm:text-base text-[#11505C] dark:text-[#6CB2BD]">
                    “{ch.epigraph}”
                  </p>

                  {/* Magazine Pull Quote bounded strictly by hairline top/bottom dividers */}
                  <blockquote className="my-7 py-5 border-t border-b border-[#CBBBA0] dark:border-[#186876]/50 text-center font-['Playfair_Display'] italic text-lg sm:text-xl text-[#4A0E33] dark:text-[#F7C9A5] leading-relaxed max-w-3xl mx-auto">
                    {ch.pullQuote}
                  </blockquote>

                  <p className="text-sm sm:text-base font-['Source_Serif_4',Georgia,serif] italic text-[#0F3D2B] dark:text-[#4A9374] leading-relaxed max-w-[70ch]">
                    {ch.leadSummary}
                  </p>

                  {/* Editorial Drop-Cap Chapter Opening */}
                  {ch.chapterIntro.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-[#E2D6C1] dark:border-[#186876]/40 space-y-4 font-['Source_Serif_4',Georgia,serif] text-base sm:text-[17px] leading-[1.78] text-[#062429] dark:text-[#EDF5F6] max-w-[70ch]">
                      <div className="text-[11px] font-mono text-[#0F3D2B] dark:text-[#4A9374] tracking-wider">
                        EDITORIAL OPENING
                      </div>
                      {ch.chapterIntro.map((para, idx) => (
                        <p
                          key={idx}
                          className={
                            idx === 0
                              ? "first-letter:float-left first-letter:text-5xl first-letter:font-['Playfair_Display'] first-letter:text-[#4A0E33] dark:first-letter:text-[#F08A43] first-letter:mr-3 first-letter:mt-1 first-letter:leading-none"
                              : ''
                          }
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Subsections */}
                  <div className="mt-8 space-y-10">
                    {ch.subsections.map((sub) => (
                      <div
                        key={sub.number}
                        className="pt-6 border-t border-[#E2D6C1] dark:border-[#186876]/40"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                          <h3 className="font-['Playfair_Display'] font-normal text-xl sm:text-2xl text-[#0B3942] dark:text-[#FAF6EC]">
                            {sub.number} · {sub.title}
                          </h3>
                          <span className="font-mono text-[11px] text-[#9A3412] dark:text-[#F08A43]">
                            {sub.epistemicFocus}
                          </span>
                        </div>

                        <div className="space-y-4 font-['Source_Serif_4',Georgia,serif] text-base sm:text-[17px] leading-[1.78] text-[#062429] dark:text-[#EDF5F6] max-w-[70ch]">
                          {sub.paragraphs.map((para, pIdx) => (
                            <p key={pIdx}>{para}</p>
                          ))}
                        </div>

                        {sub.equation && <EquationCard eq={sub.equation} />}

                        {sub.theoremBox && (
                          <div className="my-8 border border-[#831B5B]/45 dark:border-[#C974A6]/50 bg-[#F9EEF4]/70 dark:bg-[#4A0E33]/40 p-5 sm:p-6">
                            <div className="pb-2.5 mb-3 border-b border-[#C974A6]/40 flex flex-wrap items-baseline justify-between gap-2">
                              <span className="font-mono text-xs font-semibold text-[#4A0E33] dark:text-[#F7C9A5]">
                                {sub.theoremBox.kind} {sub.theoremBox.number} · {sub.theoremBox.title}
                              </span>
                            </div>
                            <p className="font-['Source_Serif_4',Georgia,serif] text-sm sm:text-base leading-relaxed text-[#2E0820] dark:text-[#FAF6EC]">
                              {sub.theoremBox.statement}
                            </p>
                            <ol className="mt-4 space-y-1.5 pl-5 list-decimal text-xs sm:text-sm text-[#062429] dark:text-[#EDF5F6]">
                              {sub.theoremBox.proofSteps.map((st, sIdx) => (
                                <li key={sIdx}>{st}</li>
                              ))}
                            </ol>
                            <div className="mt-3 pt-2.5 border-t border-[#C974A6]/30 font-mono text-[11px] text-[#11505C] dark:text-[#6CB2BD]">
                              Source: {sub.theoremBox.sourceNote}
                            </div>
                          </div>
                        )}

                        {sub.workedExample && (
                          <div className="my-8 border border-[#C2410C]/45 dark:border-[#F08A43]/50 bg-[#FFF4EB]/80 dark:bg-[#5C1D07]/30 p-5 sm:p-6">
                            <div className="pb-2.5 mb-3 border-b border-[#F08A43]/40 font-mono text-xs font-semibold text-[#9A3412] dark:text-[#F08A43]">
                              {sub.workedExample.title}
                            </div>
                            <p className="font-['Source_Serif_4',Georgia,serif] italic text-sm text-[#0B3942] dark:text-[#6CB2BD]">
                              {sub.workedExample.setup}
                            </p>
                            <ol className="mt-3 space-y-1.5 pl-5 list-decimal text-xs sm:text-sm text-[#062429] dark:text-[#EDF5F6]">
                              {sub.workedExample.steps.map((st, idx) => (
                                <li key={idx}>{st}</li>
                              ))}
                            </ol>
                            <EquationCard eq={sub.workedExample.resultEquation} />
                            <p className="text-sm font-['Source_Serif_4',Georgia,serif] italic text-[#0F3D2B] dark:text-[#4A9374]">
                              Takeaway: {sub.workedExample.takeaway}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Chapter Tables */}
                  {ch.number === 2 && (
                    <div className="mt-10 overflow-x-auto">
                      <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                        Table 2.1 · Taxonomy of Geometric Conventionalisms (G + F) &amp; Empirical Constraints
                      </h4>
                      <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                        <thead className="bg-[#EDF5F6] dark:bg-[#062429] text-[#062429] dark:text-[#FAF6EC]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Program</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Metric Choice</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Coordinative Bridge</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Empirical Status</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">IGRT Diagnostic</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_2_1_CONVENTIONALISM.map((r) => (
                            <tr key={r.program} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                              <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.program}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.metricChoice}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.coordinativeBridge}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.empiricalStatus}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.igrtDiagnostic}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {ch.number === 3 && (
                    <div className="mt-10 overflow-x-auto">
                      <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                        Table 3.1 · PPN Bounds &amp; Collapse of Scalar γ = 0 Underdetermination
                      </h4>
                      <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                        <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Observable</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Empirical Bound</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Naive Scalar (γ=0)</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Morita IGRT &amp; GR</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Philosophical Implication</th>
                          </tr>
                        </thead>
                        <tbody className="tabular-nums">
                          {TABLE_3_1_PPN_UNDERDETERMINATION.map((r) => (
                            <tr key={r.observable} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                              <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.observable}</td>
                              <td className="p-2.5 font-mono border border-[#CBBBA0] dark:border-[#186876]/40">{r.empiricalBound}</td>
                              <td className="p-2.5 font-mono text-[#831B5B] dark:text-[#F08A43] border border-[#CBBBA0] dark:border-[#186876]/40">{r.naiveScalar}</td>
                              <td className="p-2.5 font-mono text-[#0F3D2B] dark:text-[#4A9374] border border-[#CBBBA0] dark:border-[#186876]/40">{r.moritaIgrtAndGr}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.philosophicalImplication}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {ch.number === 4 && (
                    <div className="mt-10 overflow-x-auto">
                      <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                        Table 4.1 · Categorical &amp; Morita Functorial Equivalence Ledger
                      </h4>
                      <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                        <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Object</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Lorentzian GR</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">InfoGeom IGRT</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Invariant Preserved</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_4_1_MORITA_LEDGER.map((r) => (
                            <tr key={r.categoricalObject} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                              <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.categoricalObject}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.lorentzianGR}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.infoGeomIGRT}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.invariantPreserved}</td>
                              <td className="p-2.5 font-mono text-[#0F3D2B] dark:text-[#4A9374] border border-[#CBBBA0] dark:border-[#186876]/40">{r.status}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {ch.number === 5 && (
                    <div className="mt-10 overflow-x-auto">
                      <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                        Table 5.1 · Functionalist &amp; Structuralist Ontological Matrix
                      </h4>
                      <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                        <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Stance</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Ontic Commitments</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Functional Role Status</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Response to IGRT</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Synthese Assessment</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_5_1_FUNCTIONALISM_MATRIX.map((r) => (
                            <tr key={r.stance} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                              <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.stance}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.onticCommitments}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.functionalRoleStatus}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.responseToIGRT}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.syntheseAssessment}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {ch.number === 6 && (
                    <div className="mt-10 overflow-x-auto">
                      <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                        Table 6.1 · Strong-Field Horizon &amp; Regular-Core Ontological Scorecard
                      </h4>
                      <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                        <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Domain Feature</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Standard GR</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Regular IGRT</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Ontological Status</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Empirical Handle</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_6_1_STRONG_FIELD_ONTOLOGY.map((r) => (
                            <tr key={r.domainFeature} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                              <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.domainFeature}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.standardGR}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.regularIGRT}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.ontologicalStatus}</td>
                              <td className="p-2.5 font-mono text-[#0F3D2B] dark:text-[#4A9374] border border-[#CBBBA0] dark:border-[#186876]/40">{r.empiricalHandle}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {ch.number === 7 && (
                    <div className="mt-10 overflow-x-auto">
                      <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                        Table 7.1 · Bayesian Evidence &amp; Fisher MDL Epistemic Audit
                      </h4>
                      <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                        <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Framework</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">k</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">χ² Misfit</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">MDL Penalty</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Log Bayes vs GR</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Methodology Lesson</th>
                          </tr>
                        </thead>
                        <tbody className="tabular-nums">
                          {TABLE_7_1_BAYESIAN_MDL.map((r) => (
                            <tr key={r.framework} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                              <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.framework}</td>
                              <td className="p-2.5 font-mono border border-[#CBBBA0] dark:border-[#186876]/40">{r.paramsK}</td>
                              <td className="p-2.5 font-mono border border-[#CBBBA0] dark:border-[#186876]/40">{r.chiSquareData}</td>
                              <td className="p-2.5 font-mono border border-[#CBBBA0] dark:border-[#186876]/40">{r.fisherMdlPenalty}</td>
                              <td className="p-2.5 font-mono text-[#9A3412] dark:text-[#F08A43] border border-[#CBBBA0] dark:border-[#186876]/40">{r.logBayesVsGR}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.methodologyLesson}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {ch.number === 8 && (
                    <div className="mt-10 overflow-x-auto">
                      <h4 className="font-mono text-xs text-[#4A0E33] dark:text-[#C974A6] mb-2">
                        Table 8.1 · 2026–2035 Crucial Experiments &amp; Falsification Thresholds
                      </h4>
                      <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                        <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Experiment</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Window</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Target Observable</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">If Confirmed</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">If Null</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Lakatosian Role</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_8_1_CRUCIAL_EXPERIMENTS.map((r) => (
                            <tr key={r.experiment} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                              <td className="p-2.5 font-semibold border border-[#CBBBA0] dark:border-[#186876]/40">{r.experiment}</td>
                              <td className="p-2.5 font-mono tabular-nums border border-[#CBBBA0] dark:border-[#186876]/40">{r.window}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.targetObservable}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.ifConfirmed}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.ifNull}</td>
                              <td className="p-2.5 border border-[#CBBBA0] dark:border-[#186876]/40">{r.lakatosianRole}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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
                <div>
                  <div className="text-xs font-mono text-[#831B5B] dark:text-[#C974A6]">
                    CONCEPTUAL &amp; FORMAL LEXICON
                  </div>
                  <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl text-[#2E0820] dark:text-[#FAF6EC]">
                    Glossary of Philosophy &amp; Symbols
                  </h2>
                </div>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#11505C] dark:text-[#6CB2BD]" />
                  <input
                    type="text"
                    value={glossaryFilter}
                    onChange={(e) => setGlossaryFilter(e.target.value)}
                    placeholder="Filter glossary terms..."
                    className="pl-8 pr-3 py-1.5 text-xs bg-[#FAF6EC] dark:bg-[#062429] border border-[#CBBBA0] dark:border-[#186876]/50 text-[#062429] dark:text-[#FAF6EC] focus:outline-none focus:border-[#EA580C]"
                  />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredGlossary.map((g) => (
                  <div
                    key={g.term}
                    className="p-4 bg-[#FAF6EC] dark:bg-[#062429] border border-[#E2D6C1] dark:border-[#186876]/40"
                  >
                    <div className="font-['Playfair_Display'] text-base text-[#4A0E33] dark:text-[#F08A43]">
                      {g.term}
                      {g.acronym ? ` (${g.acronym})` : ''}
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#062429] dark:text-[#EDF5F6]">
                      {g.definition}
                    </p>
                  </div>
                ))}
              </div>

              <h3 className="mt-8 font-['Playfair_Display'] text-xl text-[#0B3942] dark:text-[#FAF6EC] mb-3">
                Formal Mathematical Symbols
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                  <thead className="bg-[#EDF5F6] dark:bg-[#062429]">
                    <tr>
                      <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Symbol</th>
                      <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Formal Quantity</th>
                      <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Domain</th>
                      <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Operational Definition</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SYNTHESE_SYMBOL_GLOSSARY.map((s) => (
                      <tr key={s.symbol} className="odd:bg-[#FDFBF7] even:bg-[#F4EFE6] dark:odd:bg-[#0B3942] dark:even:bg-[#062429]">
                        <td className="p-2.5 font-mono font-semibold text-[#831B5B] dark:text-[#F08A43] border border-[#CBBBA0] dark:border-[#186876]/40">{s.symbol}</td>
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
                <div className="text-xs font-mono text-[#0F3D2B] dark:text-[#4A9374]">
                  TECHNICAL &amp; DIALECTICAL APPENDICES
                </div>
                <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl text-[#2E0820] dark:text-[#FAF6EC]">
                  Appendices A–E
                </h2>
              </div>

              {SYNTHESE_APPENDICES.map((app) => (
                <div key={app.letter} className="pt-4 border-t border-[#E2D6C1] dark:border-[#186876]/40">
                  <h3 className="font-['Playfair_Display'] text-xl text-[#0B3942] dark:text-[#FAF6EC]">
                    Appendix {app.letter} · {app.title}
                  </h3>
                  <p className="mt-1 text-sm italic text-[#11505C] dark:text-[#6CB2BD]">
                    {app.summary}
                  </p>
                  <div className="mt-4 space-y-3 font-['Source_Serif_4',Georgia,serif] text-sm sm:text-base leading-relaxed text-[#062429] dark:text-[#EDF5F6] max-w-[70ch]">
                    {app.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  {app.equations.map((eq) => (
                    <EquationCard key={eq.label} eq={eq} />
                  ))}

                  {app.reproducibilityLedger && (
                    <div className="mt-6 overflow-x-auto">
                      <table className="w-full text-xs border-collapse border border-[#CBBBA0] dark:border-[#186876]/50">
                        <thead className="bg-[#EEF5F1] dark:bg-[#062429]">
                          <tr>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Checkpoint</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Formula</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Constants</th>
                            <th className="p-2.5 text-left border border-[#CBBBA0] dark:border-[#186876]/40">Computed Output</th>
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
                          className="p-4 bg-[#FFF4EB]/80 dark:bg-[#5C1D07]/30 border border-[#C2410C]/40"
                        >
                          <div className="font-semibold text-xs font-mono text-[#9A3412] dark:text-[#F08A43]">
                            {obj.objection}
                          </div>
                          <p className="mt-2 text-sm text-[#062429] dark:text-[#EDF5F6] leading-relaxed">
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
              <div className="text-xs font-mono text-[#831B5B] dark:text-[#C974A6]">
                SCHOLARLY APPARATUS
              </div>
              <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl text-[#2E0820] dark:text-[#FAF6EC] pb-4 border-b border-[#E2D6C1] dark:border-[#186876]/40">
                References ({SYNTHESE_REFERENCES.length} Citations)
              </h2>
              <ol className="mt-6 space-y-2.5 text-xs sm:text-sm text-[#062429] dark:text-[#EDF5F6] leading-relaxed">
                {SYNTHESE_REFERENCES.map((r) => (
                  <li key={r.id} className="flex gap-3">
                    <span className="font-mono text-[#9A3412] dark:text-[#F08A43] tabular-nums shrink-0">
                      [{r.id}]
                    </span>
                    <span>{r.citation}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          {/* Right 30% Sticky Magazine Marginalia & Navigation Rail */}
          <aside className="lg:sticky lg:top-24 space-y-6">
            <div className="bg-[#FDFBF7] dark:bg-[#0B3942] border border-[#CBBBA0] dark:border-[#186876]/50 p-5">
              <div className="text-[11px] font-mono text-[#831B5B] dark:text-[#C974A6] pb-2 border-b border-[#E2D6C1] dark:border-[#186876]/40">
                MAGAZINE CONTENTS
              </div>
              <nav className="mt-3 space-y-1.5 text-xs">
                <button
                  type="button"
                  onClick={() => scrollToSection('abstract')}
                  className="block w-full text-left py-1 text-[#062429] dark:text-[#EDF5F6] hover:text-[#C2410C] cursor-pointer"
                >
                  Abstract &amp; Architectural Map
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('workbench')}
                  className="block w-full text-left py-1 font-medium text-[#9A3412] dark:text-[#F08A43] hover:underline cursor-pointer"
                >
                  Formal Epistemology Workbench
                </button>
                {SYNTHESE_CHAPTERS.map((ch) => (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => scrollToSection(ch.id)}
                    className="block w-full text-left py-1 text-[#0B3942] dark:text-[#6CB2BD] hover:text-[#4A0E33] dark:hover:text-[#F7C9A5] truncate cursor-pointer"
                    title={ch.title}
                  >
                    Ch. {ch.number} · {ch.title}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => scrollToSection('glossary')}
                  className="block w-full text-left py-1 text-[#062429] dark:text-[#EDF5F6] hover:text-[#C2410C] cursor-pointer"
                >
                  Philosophical &amp; Symbol Glossary
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('appendices')}
                  className="block w-full text-left py-1 text-[#062429] dark:text-[#EDF5F6] hover:text-[#C2410C] cursor-pointer"
                >
                  Appendices A–E &amp; Referee Replies
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('references')}
                  className="block w-full text-left py-1 text-[#062429] dark:text-[#EDF5F6] hover:text-[#C2410C] cursor-pointer"
                >
                  References ({SYNTHESE_REFERENCES.length})
                </button>
              </nav>
            </div>

            <div className="bg-[#FAF6EC] dark:bg-[#062429] border border-[#CBBBA0] dark:border-[#186876]/50 p-5 space-y-3 text-xs">
              <div className="text-[11px] font-mono text-[#0F3D2B] dark:text-[#4A9374] pb-2 border-b border-[#E2D6C1] dark:border-[#186876]/40">
                SYNTHESE THESIS LEDGER
              </div>
              <div className="space-y-2 text-[#062429] dark:text-[#EDF5F6] leading-relaxed">
                <p>
                  <strong className="text-[#831B5B] dark:text-[#C974A6]">1. Scalar Collapse:</strong>{' '}
                  γ = 0 flat throttling loses by ΔlnL = 3.09 × 10⁹.
                </p>
                <p>
                  <strong className="text-[#11505C] dark:text-[#6CB2BD]">2. Morita Parity:</strong>{' '}
                  Gordon duals match GR outside horizons (−0.07 nats tie).
                </p>
                <p>
                  <strong className="text-[#0F3D2B] dark:text-[#4A9374]">3. Petz Rigidity:</strong>{' '}
                  KMS equilibrium forces unique BKM coupling.
                </p>
                <p>
                  <strong className="text-[#9A3412] dark:text-[#F08A43]">4. Core Crucible:</strong>{' '}
                  Echo SNR &gt; 3.20 decides singular vs. regular interiors.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
};
