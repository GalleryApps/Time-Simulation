/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Paper 14 View:
 * "Does Gravity Bend Space, or Just Slow Down the Universe's Clock Speed?"
 *
 * - Minimalist editorial layout with generous whitespace
 * - Curated 20-shade Dark Magenta, Dark Teal, and Pine Green palette (light & dark pairs)
 * - Playfair Display Regular (weight 400, strictly non-bold) headings
 * - Fully illustrated (5 archival plates + 9 chapter vector schematics)
 * - Interactive Comparative Physics Explorer + Searchable Glossary + Appendices A-F
 * - Downloadable A4 PDF matching Papers 11, 12, and 13
 */

import React, { useMemo, useState } from 'react';
import {
  CLOCK_SPEED_META,
  CLOCK_SPEED_ABSTRACT,
  CLOCK_SPEED_CHAPTERS,
  TABLE_4_1_EVERYDAY_TESTS,
  TABLE_5_1_STRESS_TESTS,
  TABLE_5_2_PPN_BOUNDS,
  TABLE_5_3_WILL_COMPARISON,
  TABLE_6_1_BLACK_HOLES,
  TABLE_8_1_PREDICTIONS_MATRIX,
  TABLE_8_2_NEXT_GEN_ROADMAP,
  TABLE_8_3_MULTISURVEY_EMPIRICAL,
  TABLE_8_4_TABLETOP_PROTOCOL,
  CLOCK_SPEED_SYMBOL_GLOSSARY,
  CLOCK_SPEED_GLOSSARY,
  CLOCK_SPEED_APPENDICES,
  CLOCK_SPEED_REFERENCES,
  buildClockSpeedMarkdown,
  type ClockPaperEquation
} from '../types/clockSpeedPaperData';
import {
  CLOCK_SPEED_PLATES,
  CLOCK_SPEED_FIGURES,
  ClockSpeedPlateCard,
  ClockSpeedFigureCard
} from './ClockSpeedPaperFigures';
import {
  PALETTE_20_SHADES,
  computeClockDifferential,
  computeGpsCorrections,
  computePpnObservables,
  computeHorizonUpdateProfile,
  computeDiscreteStepDispersion,
  computeHaywardRegularCore,
  integrateNullDeflectionRK4,
  computePainleveGordonBridge,
  computeAdmConstraintResidual,
  computeHaywardStrongFieldObservables,
  computeLindbladClockVisibility,
  computeBinaryPulsarRadiation,
  computeShapiroLogDelay,
  computeHaywardIscoAndShadows,
  computeFiberAndCramerRaoChecks,
  computeMacroscopicInterferometerBound,
  computeLikelihoodRatioGrVsScalar,
  computeQuantumEntanglementAndClockCat,
  computeAntimatterAndNeutrinoClockBounds,
  computeCosmologicalAndGwUpdateBounds,
  computeStrongFieldCoreExtensions
} from '../physics/clockSpeedPaper';
import { MathText } from './MathText';
import {
  buildClockSpeedSelfContainedHtml,
  buildClockSpeedLatex
} from '../utils/generateClockSpeedExports';
import { generateClockSpeedPdf } from '../utils/generateClockSpeedPdf';

interface ClockSpeedPaperViewProps {
  onNavigateToH13Paper?: () => void;
  onNavigateToH12Paper?: () => void;
  onNavigateToH11Paper?: () => void;
}

const EquationDisplay: React.FC<{ eq: ClockPaperEquation }> = ({ eq }) => (
  <div className="my-10 py-6 px-6 sm:px-8 border-y border-[#C46D9E]/35 dark:border-[#186876]/50 bg-[#EDF5F6]/65 dark:bg-[#062429]/80">
    <div className="flex items-center justify-between gap-4">
      <div
        className="flex-1 text-center text-[#2E0820] dark:text-[#F7EEF3] py-1.5 overflow-x-auto text-[16.5px] leading-[1.8]"
        dangerouslySetInnerHTML={{ __html: eq.unicodeHtml }}
      />
      <div className="shrink-0 font-mono text-xs text-[#661447] dark:text-[#C46D9E] tabular-nums">
        {eq.label}
      </div>
    </div>
    <div className="mt-3 pt-3 border-t border-[#186876]/20 dark:border-[#186876]/40 space-y-1.5 text-[13px] leading-[1.65] text-[#0B3942] dark:text-[#6CB2BD]">
      <div className="italic">
        <MathText text={eq.caption} />
      </div>
      <div className="text-[12.5px] text-[#0F3D2B] dark:text-[#4A9374]">
        <MathText text={eq.plainMeaning} />
      </div>
      {eq.provenance && (
        <div className="text-[12px] text-[#661447] dark:text-[#C46D9E] pt-1">
          <span className="font-mono uppercase text-[10.5px] mr-1.5">Provenance:</span>
          <MathText text={eq.provenance} />
        </div>
      )}
      {eq.derivationSteps && eq.derivationSteps.length > 0 && (
        <ol className="list-decimal pl-5 pt-1 space-y-1 text-[12.5px] text-[#062429] dark:text-[#EDF5F6]/90">
          {eq.derivationSteps.map((step, i) => (
            <li key={i}>
              <MathText text={step} />
            </li>
          ))}
        </ol>
      )}
    </div>
  </div>
);

export const ClockSpeedPaperView: React.FC<ClockSpeedPaperViewProps> = ({
  onNavigateToH13Paper,
  onNavigateToH12Paper,
  onNavigateToH11Paper
}) => {
  const [pdfBusy, setPdfBusy] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [glossaryQuery, setGlossaryQuery] = useState('');

  // Interactive Comparative Explorer Controls
  const [heightMeters, setHeightMeters] = useState<number>(3000);
  const [gammaUpd, setGammaUpd] = useState<number>(0);
  const [betaUpd, setBetaUpd] = useState<number>(0);
  const [radiusOverRs, setRadiusOverRs] = useState<number>(1.5);
  const [l0OverRs, setL0OverRs] = useState<number>(0.05);
  const [photonEnergyGeV, setPhotonEnergyGeV] = useState<number>(31);
  const [dispersionOrder, setDispersionOrder] = useState<1 | 2>(1);

  const clockDiff = useMemo(() => computeClockDifferential(heightMeters), [heightMeters]);
  const gpsBudget = useMemo(() => computeGpsCorrections(), []);
  const ppnResult = useMemo(() => computePpnObservables(gammaUpd, betaUpd, 1.0), [gammaUpd, betaUpd]);
  const horizonProfile = useMemo(() => computeHorizonUpdateProfile(radiusOverRs, 10, 0.1), [radiusOverRs]);
  const livResult = useMemo(
    () => computeDiscreteStepDispersion(photonEnergyGeV, 0.903, 0, dispersionOrder),
    [photonEnergyGeV, dispersionOrder]
  );
  const rk4Solar = useMemo(() => integrateNullDeflectionRK4(gammaUpd, 235_571.3, 180), [gammaUpd]);
  const rk4Strong = useMemo(() => integrateNullDeflectionRK4(gammaUpd, 4.0, 220), [gammaUpd]);
  const admRes = useMemo(() => computeAdmConstraintResidual(Math.max(1.1, radiusOverRs), gammaUpd), [radiusOverRs, gammaUpd]);
  const pgBridge = useMemo(() => computePainleveGordonBridge(radiusOverRs, 10), [radiusOverRs]);
  const haywardCore = useMemo(() => computeHaywardRegularCore(Math.max(0.05, radiusOverRs), 10, l0OverRs), [radiusOverRs, l0OverRs]);
  const haywardSf = useMemo(() => computeHaywardStrongFieldObservables(10, l0OverRs), [l0OverRs]);
  const haywardIscoShadows = useMemo(() => computeHaywardIscoAndShadows(l0OverRs), [l0OverRs]);
  const quantumClockHeightM = useMemo(() => Math.max(0.1, heightMeters / 1000), [heightMeters]);
  const lindblad = useMemo(() => computeLindbladClockVisibility(quantumClockHeightM, 1.0), [quantumClockHeightM]);
  const macroBound = useMemo(() => computeMacroscopicInterferometerBound(1.0, 1e-6), []);
  const fiberCrb = useMemo(() => computeFiberAndCramerRaoChecks(15, 2000, 1.0, 3600), []);
  const cassiniLog = useMemo(() => computeShapiroLogDelay(gammaUpd, 1.6, 1.0, 8.43), [gammaUpd]);
  const likelihood = useMemo(() => computeLikelihoodRatioGrVsScalar(), []);
  const pulsar = useMemo(() => computeBinaryPulsarRadiation(gammaUpd, betaUpd), [gammaUpd, betaUpd]);
  const catAndTabletop = useMemo(
    () => computeQuantumEntanglementAndClockCat(0.01 * (heightMeters / 3000), 1.0, 8, 25.0),
    [heightMeters]
  );
  const strongFieldExt = useMemo(() => computeStrongFieldCoreExtensions(l0OverRs, 10), [l0OverRs]);
  const cosmoGw = useMemo(() => computeCosmologicalAndGwUpdateBounds(1e-4, 0.01), []);
  const antiNu = useMemo(
    () => computeAntimatterAndNeutrinoClockBounds(Math.max(1, photonEnergyGeV), gammaUpd),
    [photonEnergyGeV, gammaUpd]
  );
  const graphicalAbstractFigures = useMemo(() => CLOCK_SPEED_FIGURES.filter((f) => f.anchorChapter === 0), []);

  const liveSvgPaths = useMemo(() => {
    // Left chart domain: r/r_s in [0.05, 3.0], f in [-1.5, 1.0] mapped to x:[40..325], y:[25..175]
    const xMap = (r: number) => 40 + ((r - 0.05) / 2.95) * 285;
    const yMap = (val: number) => 25 + ((1.0 - Math.max(-1.5, Math.min(1.0, val))) / 2.5) * 150;
    const lam2 = l0OverRs * l0OverRs;
    const hayPts: string[] = [];
    const schwPts: string[] = [];
    for (let i = 0; i <= 59; i++) {
      const r = 0.05 + (i / 59) * 2.95;
      const fH = 1 - (r * r) / (r * r * r + lam2);
      hayPts.push(`${i === 0 ? 'M' : 'L'}${xMap(r).toFixed(1)},${yMap(fH).toFixed(1)}`);
      if (r >= 0.4) {
        const fS = 1 - 1 / r;
        schwPts.push(`${schwPts.length === 0 ? 'M' : 'L'}${xMap(r).toFixed(1)},${yMap(fS).toFixed(1)}`);
      }
    }
    const activeRadiusClamped = Math.max(0.05, Math.min(3.0, radiusOverRs));
    const activeFH = 1 - (activeRadiusClamped * activeRadiusClamped) / (Math.pow(activeRadiusClamped, 3) + lam2);

    // Right chart domain: gamma in [0, 1] -> x:[400..695], deltaTheta in [0.7, 1.9] arcsec -> y:[175..25]
    const gxMap = (g: number) => 400 + g * 295;
    const gyMap = (arc: number) => 175 - ((arc - 0.7) / 1.2) * 150;
    const deflPts: string[] = [];
    for (let i = 0; i <= 10; i++) {
      const g = i / 10;
      const arc = 0.8756 * (1 + g);
      deflPts.push(`${i === 0 ? 'M' : 'L'}${gxMap(g).toFixed(1)},${gyMap(arc).toFixed(1)}`);
    }
    return {
      haywardPath: hayPts.join(' '),
      schwPath: schwPts.join(' '),
      zeroLineY: yMap(0),
      activeDotX: xMap(activeRadiusClamped),
      activeDotY: yMap(activeFH),
      deflLinePath: deflPts.join(' '),
      grBandY: gyMap(1.7512),
      activeGammaX: gxMap(gammaUpd),
      activeGammaY: gyMap(rk4Solar.rk4DeflectionArcsec)
    };
  }, [l0OverRs, radiusOverRs, gammaUpd, rk4Solar.rk4DeflectionArcsec]);

  const filteredGlossary = useMemo(() => {
    const q = glossaryQuery.trim().toLowerCase();
    if (!q) return CLOCK_SPEED_GLOSSARY;
    return CLOCK_SPEED_GLOSSARY.filter(
      (g) =>
        g.term.toLowerCase().includes(q) ||
        (g.acronym && g.acronym.toLowerCase().includes(q)) ||
        g.definition.toLowerCase().includes(q)
    );
  }, [glossaryQuery]);

  const filteredSymbols = useMemo(() => {
    const q = glossaryQuery.trim().toLowerCase();
    if (!q) return CLOCK_SPEED_SYMBOL_GLOSSARY;
    return CLOCK_SPEED_SYMBOL_GLOSSARY.filter(
      (s) =>
        s.symbol.toLowerCase().includes(q) ||
        s.name.toLowerCase().includes(q) ||
        s.definition.toLowerCase().includes(q)
    );
  }, [glossaryQuery]);

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
      await generateClockSpeedPdf();
    } catch (err) {
      setPdfError(err instanceof Error ? err.message : 'PDF compilation encountered an error.');
    } finally {
      setPdfBusy(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-10 space-y-10 sm:space-y-14 text-[#062429] dark:text-[#EDF5F6] font-['Source_Serif_4',Georgia,serif]">
      {/* Top Action Strip: Primary PDF CTA + Secondary Exports & Subtle Cross-Paper Links */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-between gap-3 sm:gap-4 pb-5 border-b border-[#C46D9E]/35 dark:border-[#186876]/50">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-['Poppins'] order-2 sm:order-1">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#278594] dark:text-[#6CB2BD]">
            Series:
          </span>
          {onNavigateToH11Paper && (
            <button
              type="button"
              onClick={onNavigateToH11Paper}
              className="text-[#0B3942] dark:text-[#6CB2BD] hover:text-[#661447] dark:hover:text-[#C46D9E] underline decoration-[#C46D9E]/40 underline-offset-4 whitespace-nowrap"
            >
              Paper 11 (H11)
            </button>
          )}
          {onNavigateToH12Paper && (
            <button
              type="button"
              onClick={onNavigateToH12Paper}
              className="text-[#0B3942] dark:text-[#6CB2BD] hover:text-[#661447] dark:hover:text-[#C46D9E] underline decoration-[#C46D9E]/40 underline-offset-4 whitespace-nowrap"
            >
              Paper 12 (H12)
            </button>
          )}
          {onNavigateToH13Paper && (
            <button
              type="button"
              onClick={onNavigateToH13Paper}
              className="text-[#0B3942] dark:text-[#6CB2BD] hover:text-[#661447] dark:hover:text-[#C46D9E] underline decoration-[#C46D9E]/40 underline-offset-4 whitespace-nowrap"
            >
              Paper 13 (H13)
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-['Poppins'] order-1 sm:order-2">
          <button
            type="button"
            onClick={handleDownloadPdf}
            disabled={pdfBusy}
            className="px-4 sm:px-5 py-2.5 rounded-lg bg-[#4A0E33] hover:bg-[#661447] text-white font-medium disabled:opacity-60 whitespace-nowrap"
          >
            {pdfBusy ? 'Compiling A4 PDF…' : 'Download Full PDF (A4)'}
          </button>
          <button
            type="button"
            onClick={() =>
              triggerDownload(
                new Blob([buildClockSpeedSelfContainedHtml()], { type: 'text/html;charset=utf-8' }),
                'Gravity_Clock_Speed_vs_Curved_Space.html'
              )
            }
            className="px-3 py-2 rounded-lg border border-[#17573E]/35 dark:border-[#4A9374]/50 bg-white dark:bg-[#062429] text-[#0F3D2B] dark:text-[#4A9374] hover:bg-[#EEF5F1] dark:hover:bg-[#082419] whitespace-nowrap"
          >
            Archival HTML
          </button>
          <button
            type="button"
            onClick={() =>
              triggerDownload(
                new Blob([buildClockSpeedMarkdown()], { type: 'text/markdown;charset=utf-8' }),
                'Gravity_Clock_Speed_vs_Curved_Space.md'
              )
            }
            className="px-3 py-2 rounded-lg border border-[#186876]/35 dark:border-[#6CB2BD]/40 bg-white dark:bg-[#062429] text-[#0B3942] dark:text-[#6CB2BD] hover:bg-[#EDF5F6] dark:hover:bg-[#0B3942] whitespace-nowrap"
          >
            Markdown (.md)
          </button>
          <button
            type="button"
            onClick={() =>
              triggerDownload(
                new Blob([buildClockSpeedLatex()], { type: 'application/x-tex;charset=utf-8' }),
                'Gravity_Clock_Speed_vs_Curved_Space.tex'
              )
            }
            className="px-3 py-2 rounded-lg border border-[#831B5B]/35 dark:border-[#C46D9E]/40 bg-white dark:bg-[#062429] text-[#661447] dark:text-[#C46D9E] hover:bg-[#F7EEF3] dark:hover:bg-[#2E0820] whitespace-nowrap"
          >
            LaTeX (.tex)
          </button>
        </div>
      </div>

      {pdfError && (
        <div
          role="alert"
          className="rounded-lg border border-[#831B5B] bg-[#F7EEF3] dark:bg-[#2E0820] px-5 py-3 text-xs font-mono text-[#4A0E33] dark:text-[#F7EEF3]"
        >
          {pdfError}
        </div>
      )}

      {/* Minimalist Museum-Editorial Masthead */}
      <header className="rounded-2xl border border-[#C46D9E]/35 dark:border-[#186876]/50 bg-white dark:bg-[#062429] p-6 sm:p-14 space-y-6 sm:space-y-8">
        {/* Clean 20-Shade Minimalist Top Bar */}
        <div className="grid grid-cols-[repeat(20,minmax(0,1fr))] h-1.5 w-full overflow-hidden rounded-full" aria-label="20-shade paper palette bar">
          {PALETTE_20_SHADES.map((shade) => (
            <div key={shade.id} style={{ backgroundColor: shade.hex }} title={`${shade.family}: ${shade.name} (${shade.hex})`} />
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#661447] dark:text-[#C46D9E]">
          <span>
            {CLOCK_SPEED_META.paperNumber} · {CLOCK_SPEED_META.targetVenues}
          </span>
          <span className="text-[#0F3D2B] dark:text-[#4A9374]">
            {CLOCK_SPEED_META.date}
          </span>
        </div>

        <div className="space-y-3 sm:space-y-4 max-w-4xl">
          <h1 className="font-['Playfair_Display'] font-normal text-3xl sm:text-5xl leading-[1.15] text-[#2E0820] dark:text-[#F7EEF3] text-balance">
            {CLOCK_SPEED_META.title}
          </h1>
          <p className="text-base sm:text-xl italic text-[#11505C] dark:text-[#6CB2BD] leading-relaxed">
            {CLOCK_SPEED_META.subtitle}
          </p>
        </div>

        {/* Authors & Affiliations */}
        <div className="pt-6 border-t border-[#EDF5F6] dark:border-[#11505C]/40 space-y-3 text-sm font-['Poppins']">
          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1 text-[#062429] dark:text-[#EDF5F6] font-medium">
            {CLOCK_SPEED_META.authors.map((author, idx) => (
              <span key={author.name}>
                {author.name}
                <sup className="text-[#831B5B] dark:text-[#C46D9E] font-mono text-[10px] ml-0.5">
                  {idx + 1}
                </sup>
                {idx < CLOCK_SPEED_META.authors.length - 1 ? ',' : ''}
              </span>
            ))}
          </div>

          <ol className="text-xs text-[#0B3942] dark:text-[#6CB2BD] space-y-1.5 list-none pl-0">
            {CLOCK_SPEED_META.authors.map((author, idx) => (
              <li key={author.name} className="leading-relaxed">
                <sup className="font-mono text-[#831B5B] dark:text-[#C46D9E] mr-1.5">{idx + 1}</sup>
                {author.affiliation}
                {author.orcidUrl && (
                  <a
                    href={author.orcidUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-2 font-mono text-[11px] text-[#17573E] dark:text-[#4A9374] hover:underline"
                  >
                    ORCID: {author.orcid}
                  </a>
                )}
                {author.email && (
                  <a
                    href={`mailto:${author.email}`}
                    className="ml-2 font-mono text-[11px] text-[#17573E] dark:text-[#4A9374] hover:underline"
                  >
                    {author.email}
                  </a>
                )}
              </li>
            ))}
          </ol>

          <div className="pt-3 flex flex-wrap gap-x-8 gap-y-1 text-[11px] font-mono text-[#278594] dark:text-[#6CB2BD]">
            <span>PACS: {CLOCK_SPEED_META.pacsCodes}</span>
            <span>MSC 2020: {CLOCK_SPEED_META.msc2020Codes}</span>
          </div>
        </div>
      </header>

      {/* Main Two-Column Asymmetric Layout: Sticky TOC Rail + Wide Minimalist Reading Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <aside className="lg:col-span-3 lg:sticky lg:top-28 space-y-6">
          <nav
            aria-label="Paper chapters navigation"
            className="rounded-xl border border-[#186876]/25 dark:border-[#186876]/50 bg-white dark:bg-[#062429] p-5 space-y-2 text-xs font-['Poppins']"
          >
            <div className="font-mono text-[11px] uppercase tracking-wider text-[#661447] dark:text-[#C46D9E] pb-2 border-b border-[#EDF5F6] dark:border-[#11505C]/40">
              Contents
            </div>
            <a href="#cs-abstract" className="block py-1 text-[#0B3942] dark:text-[#6CB2BD] hover:text-[#661447]">
              Abstract
            </a>
            <a href="#cs-explorer" className="block py-1 text-[#0F3D2B] dark:text-[#4A9374] font-medium hover:text-[#661447]">
              Interactive Test Bench
            </a>
            {CLOCK_SPEED_CHAPTERS.map((ch) => (
              <a
                key={ch.id}
                href={`#${ch.id}`}
                className="block py-1 leading-snug text-[#0B3942] dark:text-[#EDF5F6]/85 hover:text-[#831B5B] dark:hover:text-[#C46D9E]"
              >
                Ch. {ch.number} · {ch.title}
              </a>
            ))}
            <a
              href="#cs-glossary"
              className="block py-1 pt-2 border-t border-[#EDF5F6] dark:border-[#11505C]/40 text-[#0B3942] dark:text-[#6CB2BD] hover:text-[#661447]"
            >
              Glossary ({CLOCK_SPEED_GLOSSARY.length} Terms)
            </a>
            <a href="#cs-appendices" className="block py-1 text-[#0B3942] dark:text-[#6CB2BD] hover:text-[#661447]">
              Appendices A–F
            </a>
            <a href="#cs-references" className="block py-1 text-[#0B3942] dark:text-[#6CB2BD] hover:text-[#661447]">
              References ({CLOCK_SPEED_REFERENCES.length})
            </a>
          </nav>
        </aside>

        {/* Primary Scholarly Column */}
        <article className="lg:col-span-9 space-y-16">
          {/* Concise Journal Abstract */}
          <section
            id="cs-abstract"
            className="rounded-xl border border-[#C46D9E]/30 dark:border-[#186876]/50 bg-white dark:bg-[#062429] p-8 sm:p-12 space-y-7"
          >
            <h2 className="font-['Playfair_Display'] font-normal text-3xl text-[#2E0820] dark:text-[#F7EEF3] pb-4 border-b border-[#EDF5F6] dark:border-[#11505C]/40">
              Abstract
            </h2>

            <div className="space-y-5 max-w-[68ch]">
              {CLOCK_SPEED_ABSTRACT.map((p, idx) => (
                <p key={idx} className="text-[17px] leading-[1.82] text-[#062429] dark:text-[#EDF5F6]">
                  <MathText text={p} />
                </p>
              ))}
            </div>

            <div className="pt-3 border-t border-[#EDF5F6] dark:border-[#11505C]/40 text-xs font-['Poppins'] text-[#11505C] dark:text-[#6CB2BD]">
              <span className="font-medium text-[#2E0820] dark:text-[#F7EEF3]">Keywords: </span>
              {CLOCK_SPEED_META.keywords.join(' · ')}
            </div>
          </section>

          {/* Graphical Abstract & Deductive Architecture (Fig. 0.1) */}
          {graphicalAbstractFigures.map((fig) => (
            <ClockSpeedFigureCard key={fig.id} fig={fig} />
          ))}

          {/* Interactive Two-Picture Comparative Physics Explorer */}
          <section
            id="cs-explorer"
            className="rounded-xl border border-[#186876]/35 dark:border-[#186876]/60 bg-white dark:bg-[#062429] p-8 sm:p-12 space-y-8"
          >
            <div className="space-y-2 pb-4 border-b border-[#EDF5F6] dark:border-[#11505C]/40">
              <h2 className="font-['Playfair_Display'] font-normal text-2xl sm:text-3xl text-[#2E0820] dark:text-[#F7EEF3]">
                Test Bench: Curved Spacetime vs. Local Update-Rate Models
              </h2>
              <p className="text-sm font-['Poppins'] text-[#0B3942] dark:text-[#6CB2BD] max-w-2xl leading-relaxed">
                Switch between Pure Scalar Clock-Slowing (time throttled only) and Full Dual Update-Rate / General Relativity (spatial + temporal coupling) to observe exactly where they agree and where solar-system data falsifies scalar-only models.
              </p>
            </div>

            {/* Preset Model Selector Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 font-['Poppins'] text-xs">
              <button
                type="button"
                aria-pressed={gammaUpd === 0 && betaUpd === 0}
                onClick={() => {
                  setGammaUpd(0);
                  setBetaUpd(0);
                }}
                className={`px-4 py-2 rounded-lg border font-medium whitespace-nowrap ${
                  gammaUpd === 0 && betaUpd === 0
                    ? 'bg-[#4A0E33] text-white border-[#2E0820]'
                    : 'bg-white dark:bg-[#2E0820]/60 text-[#4A0E33] dark:text-[#F7EEF3] border-[#831B5B]/45 hover:bg-[#F7EEF3]'
                }`}
              >
                Pure Scalar Clock-Slowing (γ=0, β=0)
              </button>
              <button
                type="button"
                aria-pressed={gammaUpd === 0 && betaUpd === 1}
                onClick={() => {
                  setGammaUpd(0);
                  setBetaUpd(1);
                }}
                className={`px-4 py-2 rounded-lg border font-medium whitespace-nowrap ${
                  gammaUpd === 0 && betaUpd === 1
                    ? 'bg-[#661447] text-white border-[#2E0820]'
                    : 'bg-white dark:bg-[#2E0820]/60 text-[#4A0E33] dark:text-[#F7EEF3] border-[#831B5B]/45 hover:bg-[#F7EEF3]'
                }`}
              >
                Exponential Time-Only (γ=0, β=1)
              </button>
              <button
                type="button"
                aria-pressed={gammaUpd === 1 && betaUpd === 1}
                onClick={() => {
                  setGammaUpd(1);
                  setBetaUpd(1);
                }}
                className={`px-4 py-2 rounded-lg border font-medium whitespace-nowrap ${
                  gammaUpd === 1 && betaUpd === 1
                    ? 'bg-[#0F3D2B] text-white border-[#082419]'
                    : 'bg-white dark:bg-[#082419]/60 text-[#0F3D2B] dark:text-[#EEF5F1] border-[#17573E]/45 hover:bg-[#EEF5F1]'
                }`}
              >
                Full Dual Update / GR (γ=1, β=1)
              </button>
            </div>

            {/* Sliders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-['Poppins'] text-xs">
              <div className="space-y-2 p-4 rounded-lg border border-[#186876]/25 bg-[#EDF5F6]/50 dark:bg-[#0B3942]/30">
                <label htmlFor="slider-height" className="flex justify-between items-baseline gap-2 font-medium text-[#062429] dark:text-[#EDF5F6]">
                  <span>Clock Elevation Δh (Earth)</span>
                  <span className="font-mono tabular-nums whitespace-nowrap shrink-0 text-[#661447] dark:text-[#C46D9E]">{heightMeters.toLocaleString()} m</span>
                </label>
                <input
                  id="slider-height"
                  type="range"
                  min={1}
                  max={20000}
                  step={50}
                  value={heightMeters}
                  onChange={(e) => setHeightMeters(Number(e.target.value))}
                  className="w-full accent-[#186876]"
                />
                <div className="flex justify-between text-[11px] font-mono tabular-nums text-[#11505C] dark:text-[#6CB2BD]">
                  <span>Shift: {clockDiff.fractionalShift.toExponential(3)}</span>
                  <span>Gain: +{clockDiff.nsPerDayGain.toFixed(2)} ns/day</span>
                </div>
              </div>

              <div className="space-y-2 p-4 rounded-lg border border-[#C46D9E]/30 bg-[#F7EEF3]/50 dark:bg-[#2E0820]/30">
                <label htmlFor="slider-gamma" className="flex justify-between items-baseline gap-2 font-medium text-[#2E0820] dark:text-[#F7EEF3]">
                  <span>Spatial Update Coupling (γ_upd)</span>
                  <span className="font-mono tabular-nums whitespace-nowrap shrink-0 text-[#661447] dark:text-[#C46D9E]">{gammaUpd.toFixed(2)}</span>
                </label>
                <input
                  id="slider-gamma"
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={gammaUpd}
                  onChange={(e) => setGammaUpd(Number(e.target.value))}
                  className="w-full accent-[#661447]"
                />
                <div className="flex justify-between text-[11px] font-mono tabular-nums text-[#661447] dark:text-[#C46D9E]">
                  <span>0.00 = Pure Clock-Slowing</span>
                  <span>1.00 = Spatial + Temporal</span>
                </div>
              </div>

              <div className="space-y-2 p-4 rounded-lg border border-[#17573E]/25 bg-[#EEF5F1]/50 dark:bg-[#082419]/30">
                <label htmlFor="slider-horizon" className="flex justify-between items-baseline gap-2 font-medium text-[#082419] dark:text-[#EEF5F1]">
                  <span>Black Hole Radius (r / r_s)</span>
                  <span className="font-mono tabular-nums whitespace-nowrap shrink-0 text-[#0F3D2B] dark:text-[#4A9374]">{radiusOverRs.toFixed(2)} r_s</span>
                </label>
                <input
                  id="slider-horizon"
                  type="range"
                  min={1.01}
                  max={6.0}
                  step={0.05}
                  value={radiusOverRs}
                  onChange={(e) => setRadiusOverRs(Number(e.target.value))}
                  className="w-full accent-[#0F3D2B]"
                />
                <div className="flex flex-wrap justify-between gap-2 text-[11px] font-mono tabular-nums text-[#17573E] dark:text-[#4A9374]">
                  <span>f_upd / f_∞ = {horizonProfile.localUpdateRateRatio.toFixed(4)}</span>
                  <span>n_eff = {horizonProfile.effectiveRefractiveIndex.toFixed(2)}</span>
                </div>
                <div className="flex flex-wrap justify-between gap-2 text-[10.5px] font-mono tabular-nums text-[#0F3D2B] dark:text-[#6CB2BD]">
                  <span>T_H (10 M☉) = {horizonProfile.hawkingTempK.toExponential(2)} K</span>
                  <span>Echo (λ=0.1 / Pl): {horizonProfile.echoDelayMs.toFixed(2)} / {horizonProfile.planckEchoDelayMs.toFixed(1)} ms</span>
                </div>
              </div>

              <div className="space-y-2 p-4 rounded-lg border border-[#186876]/25 bg-[#EDF5F6]/50 dark:bg-[#0B3942]/30">
                <label htmlFor="slider-energy" className="flex justify-between items-baseline gap-2 font-medium text-[#062429] dark:text-[#EDF5F6]">
                  <span>GRB 090510 Photon Energy (z=0.903, n={dispersionOrder})</span>
                  <span className="font-mono tabular-nums whitespace-nowrap shrink-0 text-[#11505C] dark:text-[#6CB2BD]">{photonEnergyGeV} GeV</span>
                </label>
                <div className="flex items-center gap-3">
                  <input
                    id="slider-energy"
                    type="range"
                    min={10}
                    max={18000}
                    step={10}
                    value={photonEnergyGeV}
                    onChange={(e) => setPhotonEnergyGeV(Number(e.target.value))}
                    className="flex-1 accent-[#11505C]"
                  />
                  <button
                    type="button"
                    onClick={() => setDispersionOrder(dispersionOrder === 1 ? 2 : 1)}
                    className="px-2.5 py-1 rounded border border-[#186876]/40 font-mono text-[11px] bg-white dark:bg-[#062429]"
                  >
                    n={dispersionOrder}
                  </button>
                </div>
                <div className="flex flex-wrap justify-between gap-2 text-[11px] font-mono tabular-nums text-[#11505C] dark:text-[#6CB2BD]">
                  <span>ΛCDM Lag Δt_LIV: {livResult.arrivalLagSeconds.toExponential(2)} s</span>
                  <span>Fermi limit: &lt; 0.83 s</span>
                </div>
              </div>

              <div className="md:col-span-2 space-y-2 p-4 rounded-lg border border-[#831B5B]/25 bg-[#F7EEF3]/45 dark:bg-[#2E0820]/25">
                <label htmlFor="slider-l0" className="flex justify-between items-baseline gap-2 font-medium text-[#2E0820] dark:text-[#F7EEF3]">
                  <span>Hayward Regular-Core Scale (ℓ₀ / r_s)</span>
                  <span className="font-mono tabular-nums whitespace-nowrap shrink-0 text-[#661447] dark:text-[#C46D9E]">{l0OverRs.toFixed(3)} r_s</span>
                </label>
                <input
                  id="slider-l0"
                  type="range"
                  min={0.01}
                  max={0.35}
                  step={0.005}
                  value={l0OverRs}
                  onChange={(e) => setL0OverRs(Number(e.target.value))}
                  className="w-full accent-[#831B5B]"
                />
                <div className="flex flex-wrap justify-between gap-2 text-[11px] font-mono tabular-nums text-[#661447] dark:text-[#C46D9E]">
                  <span>r_+ = {haywardCore.outerHorizonOverRs.toFixed(4)} r_s · r_− = {haywardCore.innerHorizonOverRs.toFixed(4)} r_s</span>
                  <span>r_ph = {haywardSf.photonSphereOverRs.toFixed(4)} r_s · l=2 QNM shift: {haywardSf.qnmShiftPct >= 0 ? '+' : ''}{haywardSf.qnmShiftPct.toFixed(2)}%</span>
                  <span>|κ_−|/κ_+ = {haywardSf.cauchyKappaRatio.toFixed(1)} · k₂ = {haywardSf.tidalLoveNumberK2.toFixed(4)}</span>
                </div>
              </div>
            </div>

            {/* Live Dual-Panel SVG Curve Plot */}
            <div className="rounded-xl border border-[#186876]/30 bg-[#FAF9F7] dark:bg-[#0B3942]/20 p-4 space-y-2">
              <div className="flex flex-wrap justify-between items-center gap-2 text-[11px] font-mono text-[#11505C] dark:text-[#6CB2BD]">
                <span>LIVE NUMERICAL DIAGNOSTICS · HAYWARD METRIC PROFILE &amp; RK4 NULL DEFLECTION</span>
                <span>ADM Vacuum G^r_r·r_s² = {admRes.radialEinsteinTimesRs2.toExponential(2)}</span>
              </div>
              <svg
                viewBox="0 0 720 205"
                className="w-full h-auto"
                role="img"
                aria-label="Live Hayward lapse profile and RK4 null light deflection curves"
              >
                {/* Left Subplot Frame: f(r) */}
                <rect x="40" y="25" width="285" height="150" fill="#FFFFFF" stroke="#186876" strokeOpacity="0.3" strokeWidth="1" />
                <line x1="40" y1={liveSvgPaths.zeroLineY} x2="325" y2={liveSvgPaths.zeroLineY} stroke="#831B5B" strokeOpacity="0.45" strokeDasharray="3 3" strokeWidth="1" />
                <path d={liveSvgPaths.schwPath} fill="none" stroke="#186876" strokeWidth="1.6" strokeDasharray="5 4" />
                <path d={liveSvgPaths.haywardPath} fill="none" stroke="#0F3D2B" strokeWidth="2.2" />
                <circle cx={liveSvgPaths.activeDotX} cy={liveSvgPaths.activeDotY} r="4.5" fill="#661447" stroke="#FFFFFF" strokeWidth="1.5" />
                <text x="44" y="17" fontSize="10" fontFamily="monospace" fill="#2E0820">
                  Lapse f(r): Solid=Hayward (ℓ₀={l0OverRs.toFixed(2)}) · Dashed=Schw
                </text>
                <text x="44" y="191" fontSize="9.5" fontFamily="monospace" fill="#11505C">r/r_s = 0.05</text>
                <text x="275" y="191" fontSize="9.5" fontFamily="monospace" fill="#11505C">r/r_s = 3.0</text>
                <text x="6" y="88" fontSize="9.5" fontFamily="monospace" fill="#831B5B">f=0</text>

                {/* Right Subplot Frame: RK4 Deflection(gamma) */}
                <rect x="400" y="25" width="295" height="150" fill="#FFFFFF" stroke="#186876" strokeOpacity="0.3" strokeWidth="1" />
                <line x1="400" y1={liveSvgPaths.grBandY} x2="695" y2={liveSvgPaths.grBandY} stroke="#0F3D2B" strokeOpacity="0.55" strokeDasharray="4 3" strokeWidth="1.2" />
                <path d={liveSvgPaths.deflLinePath} fill="none" stroke="#186876" strokeWidth="2.2" />
                <circle cx={liveSvgPaths.activeGammaX} cy={liveSvgPaths.activeGammaY} r="5" fill="#661447" stroke="#FFFFFF" strokeWidth="1.5" />
                <text x="400" y="17" fontSize="10" fontFamily="monospace" fill="#2E0820">
                  RK4 Solar-Limb Deflection Δθ(γ_upd): {rk4Solar.rk4DeflectionArcsec.toFixed(4)}″
                </text>
                <text x="400" y="191" fontSize="9.5" fontFamily="monospace" fill="#661447">γ_upd = 0.0 (Scalar)</text>
                <text x="615" y="191" fontSize="9.5" fontFamily="monospace" fill="#0F3D2B">γ_upd = 1.0 (GR)</text>
                <text x="580" y={liveSvgPaths.grBandY - 5} fontSize="9" fontFamily="monospace" fill="#0F3D2B">Cassini/VLBI 1.751″</text>
              </svg>
            </div>

            {/* Live Tabular Comparison Readout */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs font-['Poppins']">
                <thead>
                  <tr className="border-b border-[#186876]/35 text-[#11505C] dark:text-[#6CB2BD] font-mono">
                    <th className="py-3 pr-4">Observable</th>
                    <th className="py-3 px-4">Active Model Prediction</th>
                    <th className="py-3 px-4">Observed / GR Target</th>
                    <th className="py-3 pl-4">Empirical Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EDF5F6] dark:divide-[#11505C]/30 font-mono tabular-nums">
                  <tr>
                    <td className="py-3 pr-4 font-sans text-[#062429] dark:text-[#EDF5F6]">GPS Satellite Net Offset</td>
                    <td className="py-3 px-4">
                      +{gpsBudget.netGainUsPerDay.toFixed(2)} μs/day{' '}
                      <span className="text-[10.5px] text-[#278594] dark:text-[#6CB2BD]">
                        (±{gpsBudget.eccentricityAmplitudeNs.toFixed(1)} ns @ e=0.01)
                      </span>
                    </td>
                    <td className="py-3 px-4">+38.60 μs/day</td>
                    <td className="py-3 pl-4 text-[#0F3D2B] dark:text-[#4A9374]">Exact Match (Ch. 4)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-sans text-[#062429] dark:text-[#EDF5F6]">RK4 Solar-Limb Light Deflection</td>
                    <td className="py-3 px-4 text-[#661447] dark:text-[#C46D9E]">
                      {rk4Solar.rk4DeflectionArcsec.toFixed(4)}″ ({(ppnResult.deflectionFractionOfGR * 100).toFixed(0)}%)
                      <span className="block text-[10.5px] text-[#278594] dark:text-[#6CB2BD]">
                        Strong 4 r_s: {(rk4Strong.rk4DeflectionArcsec / 3600).toFixed(2)}°
                      </span>
                    </td>
                    <td className="py-3 px-4">1.7512″ (analytic)</td>
                    <td className={`py-3 pl-4 ${Math.abs(rk4Solar.rk4DeflectionArcsec - 1.751) < 0.05 ? 'text-[#0F3D2B] dark:text-[#4A9374]' : 'text-[#831B5B] dark:text-[#C46D9E]'}`}>
                      {ppnResult.verdictLabel}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-sans text-[#062429] dark:text-[#EDF5F6]">Cassini Logarithmic Shapiro Integral (1.6 R_☉, 8.43 AU)</td>
                    <td className="py-3 px-4">
                      {cassiniLog.shapiroRoundTripUs.toFixed(2)} μs
                      <span className="block text-[10.5px] text-[#278594] dark:text-[#6CB2BD]">
                        Deficit vs. GR: {cassiniLog.fractionalDeficitPct.toFixed(1)}%
                      </span>
                    </td>
                    <td className="py-3 px-4">{cassiniLog.grRoundTripUs.toFixed(2)} μs (|γ−1| &lt; 2.3×10⁻⁵)</td>
                    <td className={`py-3 pl-4 ${cassiniLog.cassiniGammaTensionSigma < 3 ? 'text-[#0F3D2B] dark:text-[#4A9374]' : 'text-[#831B5B] dark:text-[#C46D9E]'}`}>
                      {cassiniLog.cassiniGammaTensionSigma < 3 ? 'Within Cassini 1σ' : `${cassiniLog.cassiniGammaTensionSigma.toFixed(0)}σ Tension`}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-sans text-[#062429] dark:text-[#EDF5F6]">Mercury Perihelion &amp; Nordtvedt η_N</td>
                    <td className="py-3 px-4">
                      {ppnResult.mercuryPrecessionArcsecCentury.toFixed(2)}″ / cy{' '}
                      <span className="text-[10.5px] text-[#278594] dark:text-[#6CB2BD]">(η_N={ppnResult.nordtvedtEta.toFixed(2)})</span>
                    </td>
                    <td className="py-3 px-4">42.98″ / cy · η_N=0</td>
                    <td className={`py-3 pl-4 ${Math.abs(ppnResult.mercuryPrecessionArcsecCentury - 42.98) < 0.5 && Math.abs(ppnResult.nordtvedtEta) < 1.1e-4 ? 'text-[#0F3D2B] dark:text-[#4A9374]' : 'text-[#831B5B] dark:text-[#C46D9E]'}`}>
                      {Math.abs(ppnResult.mercuryPrecessionArcsecCentury - 42.98) < 0.5 && Math.abs(ppnResult.nordtvedtEta) < 1.1e-4 ? 'Matches Orbit & SEP' : 'Orbital / SEP Failure'}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-sans text-[#062429] dark:text-[#EDF5F6]">PSR B1913+16 Decay &amp; 7-Channel Likelihood</td>
                    <td className="py-3 px-4">
                      {pulsar.totalPredictedPeriodDot.toExponential(4)} s/s
                      <span className="block text-[10.5px] text-[#278594] dark:text-[#6CB2BD]">
                        dω/dt = {pulsar.ppnPeriastronAdvanceDegYr.toFixed(3)}°/yr · Δ ln ℒ = {likelihood.deltaLogLikelihood.toExponential(2)}
                      </span>
                    </td>
                    <td className="py-3 px-4">-2.402e-12 s/s · χ²_GR = {likelihood.chiSquaredGr.toFixed(2)}</td>
                    <td className={`py-3 pl-4 ${pulsar.matchesHulseTaylor && Math.abs(pulsar.ppnPeriastronAdvanceDegYr - pulsar.grPeriastronAdvanceDegYr) < 0.05 ? 'text-[#0F3D2B] dark:text-[#4A9374]' : 'text-[#831B5B] dark:text-[#C46D9E]'}`}>
                      {pulsar.matchesHulseTaylor && Math.abs(pulsar.ppnPeriastronAdvanceDegYr - pulsar.grPeriastronAdvanceDegYr) < 0.05 ? 'Matches Hulse-Taylor' : `Scalar Rejected (${likelihood.sigmaRejectionEquivalent.toFixed(0)}σ)`}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-sans text-[#062429] dark:text-[#EDF5F6]">Hayward ISCO &amp; EHT Shadows (ℓ₀ = {l0OverRs.toFixed(3)} r_s)</td>
                    <td className="py-3 px-4">
                      r_ISCO = {haywardIscoShadows.iscoOverRs.toFixed(4)} r_s ({haywardIscoShadows.iscoShiftPct.toFixed(2)}%)
                      <span className="block text-[10.5px] text-[#278594] dark:text-[#6CB2BD]">
                        M87*: {haywardIscoShadows.m87ShadowDiameterUas.toFixed(2)} μas · Sgr A*: {haywardIscoShadows.sgrAShadowDiameterUas.toFixed(2)} μas
                      </span>
                    </td>
                    <td className="py-3 px-4">ISCO 3.00 r_s · M87* 42 μas / Sgr A* 51.8 μas</td>
                    <td className={`py-3 pl-4 ${Math.abs(haywardIscoShadows.iscoShiftPct) < 2.0 ? 'text-[#0F3D2B] dark:text-[#4A9374]' : 'text-[#831B5B] dark:text-[#C46D9E]'}`}>
                      {Math.abs(haywardIscoShadows.iscoShiftPct) < 2.0 ? 'Within EHT & X-Ray Bounds' : 'Macro Core Tension'}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-sans text-[#062429] dark:text-[#EDF5F6]">ADM Vacuum Tensor G^r_r · r_s²</td>
                    <td className="py-3 px-4">
                      {admRes.radialEinsteinTimesRs2.toExponential(2)}
                      <span className="block text-[10.5px] text-[#278594] dark:text-[#6CB2BD]">
                        ³R·r_s² = {admRes.spatialRicciTimesRs2.toExponential(2)}
                      </span>
                    </td>
                    <td className="py-3 px-4">0 (Vacuum Einstein)</td>
                    <td className={`py-3 pl-4 ${admRes.satisfiesVacuumEinstein ? 'text-[#0F3D2B] dark:text-[#4A9374]' : 'text-[#831B5B] dark:text-[#C46D9E]'}`}>
                      {admRes.satisfiesVacuumEinstein ? 'Exact Vacuum Satisfied' : 'Violates Vacuum Constraint'}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-sans text-[#062429] dark:text-[#EDF5F6]">Painlevé–Gullstrand River Bridge</td>
                    <td className="py-3 px-4">
                      v_flow = {pgBridge.inflowSpeedOverC.toFixed(3)} c
                      <span className="block text-[10.5px] text-[#278594] dark:text-[#6CB2BD]">
                        c_out = {pgBridge.outwardNullSpeedOverC.toFixed(3)} c · ³R_PG = {pgBridge.pgSpatialRicciScalar}
                      </span>
                    </td>
                    <td className="py-3 px-4">Flat 3-Slice Exact Iso</td>
                    <td className="py-3 pl-4 text-[#0F3D2B] dark:text-[#4A9374]">
                      τ_fall = {pgBridge.freeFallTimeFromRadiusMs.toFixed(3)} ms
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-sans text-[#062429] dark:text-[#EDF5F6]">Quantum Cramér–Rao, 1 kg Decoherence &amp; Fiber Link</td>
                    <td className="py-3 px-4">
                      V({quantumClockHeightM.toFixed(1)}m) = {lindblad.unitaryVisibility.toFixed(4)} · σ_CRB = {fiberCrb.cramerRaoFloorFraction.toExponential(2)}
                      <span className="block text-[10.5px] text-[#278594] dark:text-[#6CB2BD]">
                        Γ_1kg(1μm) = {macroBound.planckLindbladRateSecInv.toExponential(2)} s⁻¹ · Fiber {fiberCrb.fiberOneWayDelayUsPerKm.toFixed(2)} μs/km
                      </span>
                    </td>
                    <td className="py-3 px-4">Unitary cos(Δφ/2) · 94.3 ps/d/10m</td>
                    <td className="py-3 pl-4 text-[#0F3D2B] dark:text-[#4A9374]">
                      QFI = {lindblad.quantumFisherInfo.toExponential(2)} rad²
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-sans text-[#062429] dark:text-[#EDF5F6]">8-Ion GHZ Clock Cat &amp; 4 K Cryo Tabletop Budget</td>
                    <td className="py-3 px-4">
                      Δν_GHZ = {catAndTabletop.ghzCatFreqDiffHz.toExponential(2)} Hz · C(1s) = {catAndTabletop.trappedIonConcurrenceDecay.toFixed(4)}
                      <span className="block text-[10.5px] text-[#278594] dark:text-[#6CB2BD]">
                        h_tot = {catAndTabletop.totalTabletopBudgetStrain.toExponential(2)} · Δφ_Sagnac = {catAndTabletop.rotatingAtomSagnacRad.toFixed(1)} rad
                      </span>
                    </td>
                    <td className="py-3 px-4">10⁻²⁰–10⁻²² Cryo Strain Floor</td>
                    <td className="py-3 pl-4 text-[#0F3D2B] dark:text-[#4A9374]">
                      Unitary V_GHZ = {catAndTabletop.ghzCatVisibilityShift.toFixed(4)}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-sans text-[#062429] dark:text-[#EDF5F6]">Echo Comb Δf_comb, Tidal Love k₂ &amp; Page Shift</td>
                    <td className="py-3 px-4">
                      Δf_comb = {strongFieldExt.echoCombSpacingHz.toFixed(1)} Hz · k₂ = {strongFieldExt.loveNumberK2.toFixed(4)}
                      <span className="block text-[10.5px] text-[#278594] dark:text-[#6CB2BD]">
                        RW–Zerilli: +{strongFieldExt.rwZerilliIsospectralSplitPct.toFixed(2)}% · Page ΔS = {strongFieldExt.bekensteinEntropyCoreDeltaPct.toFixed(2)}%
                      </span>
                    </td>
                    <td className="py-3 px-4">k₂,GR = 0 · ln B = {strongFieldExt.bayesianLogEvidenceGrVsScalar.toExponential(2)}</td>
                    <td className="py-3 pl-4 text-[#11505C] dark:text-[#6CB2BD]">
                      CE/ET Core Spectroscopy Reach
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-sans text-[#062429] dark:text-[#EDF5F6]">GW Dispersion (LISA/PTA) &amp; CMB Acoustic θ_*</td>
                    <td className="py-3 px-4">
                      h_LISA = {cosmoGw.lisaGwDispersionSensitivity.toExponential(1)} · PTA = {cosmoGw.ptaUpdateMemoryStrain.toExponential(1)}
                      <span className="block text-[10.5px] text-[#278594] dark:text-[#6CB2BD]">
                        Δθ_* = {cosmoGw.cmbThetaStarInvarianceShift.toFixed(1)} · |ΔY_p| &lt; {cosmoGw.bbnHeliumMassFractionShift.toExponential(1)}
                      </span>
                    </td>
                    <td className="py-3 px-4">|c_GW/c − 1| &lt; 3×10⁻¹⁵ (GW170817)</td>
                    <td className="py-3 pl-4 text-[#0F3D2B] dark:text-[#4A9374]">
                      Breathing h_b &lt; {cosmoGw.scalarBreathingStrainSuppression.toExponential(0)}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-sans text-[#062429] dark:text-[#EDF5F6]">ALPHA-g Antimatter, IceCube ν &amp; Strong-Lens Slip</td>
                    <td className="py-3 px-4">
                      Δφ_ν({photonEnergyGeV} GeV) = {antiNu.neutrinoClockPhaseShiftRad.toExponential(2)} rad
                      <span className="block text-[10.5px] text-[#278594] dark:text-[#6CB2BD]">
                        Lens residual = {(antiNu.strongLensNonMetricResidualRatio * 100).toFixed(1)}% · Quasar Δμ/μ &lt; {antiNu.quasarElectronMassDeltaMuOverMu.toExponential(0)}
                      </span>
                    </td>
                    <td className="py-3 px-4">ALPHA-g → 10⁻¹⁸ · H0LiCOW γ=1</td>
                    <td className={`py-3 pl-4 ${antiNu.strongLensNonMetricResidualRatio < 0.02 ? 'text-[#0F3D2B] dark:text-[#4A9374]' : 'text-[#831B5B] dark:text-[#C46D9E]'}`}>
                      {antiNu.strongLensNonMetricResidualRatio < 0.02 ? 'Universal Metric Consistent' : 'Strong-Lens Slip Excluded'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Chapters 1 to 9 */}
          {CLOCK_SPEED_CHAPTERS.map((ch) => {
            const chapterPlates = CLOCK_SPEED_PLATES.filter((p) => p.anchorChapter === ch.number);
            const chapterFigures = CLOCK_SPEED_FIGURES.filter((f) => f.anchorChapter === ch.number);

            return (
              <section
                key={ch.id}
                id={ch.id}
                className="rounded-xl border border-[#C46D9E]/30 dark:border-[#186876]/50 bg-white dark:bg-[#062429] p-8 sm:p-14 space-y-10"
              >
                <header className="space-y-4 pb-6 border-b border-[#EDF5F6] dark:border-[#11505C]/40">
                  <h2 className="font-['Playfair_Display'] font-normal text-3xl sm:text-4xl leading-[1.2] text-[#2E0820] dark:text-[#F7EEF3] text-balance">
                    Chapter {ch.number}: {ch.title}
                  </h2>
                  <p className="text-base italic text-[#186876] dark:text-[#6CB2BD]">
                    {ch.epigraph}
                  </p>
                  <p className="text-[16.5px] leading-[1.78] text-[#0F3D2B] dark:text-[#4A9374] max-w-[68ch]">
                    <MathText text={ch.leadSummary} />
                  </p>
                </header>

                {ch.chapterIntro && ch.chapterIntro.length > 0 && (
                  <div className="pl-5 border-l-2 border-[#17573E]/55 dark:border-[#4A9374]/60 bg-[#EEF5F1]/55 dark:bg-[#082419]/50 py-5 pr-5 rounded-r-lg space-y-4 max-w-[68ch]">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-[#0F3D2B] dark:text-[#4A9374]">
                      Introduction
                    </div>
                    {ch.chapterIntro.map((introPara, iidx) => (
                      <p key={iidx} className="text-[16.5px] leading-[1.82] text-[#062429] dark:text-[#EDF5F6]/95">
                        <MathText text={introPara} />
                      </p>
                    ))}
                  </div>
                )}

                <div className="space-y-12">
                  {ch.subsections.map((sub) => (
                    <div key={sub.number} className="space-y-6">
                      <h3 className="font-['Playfair_Display'] font-normal text-2xl text-[#0B3942] dark:text-[#EDF5F6]">
                        {sub.number} {sub.title}
                      </h3>

                      <div className="space-y-5 max-w-[68ch]">
                        {sub.paragraphs.map((p, pidx) => (
                          <p
                            key={pidx}
                            className={`text-[17px] leading-[1.82] text-[#062429] dark:text-[#EDF5F6]/95 ${
                              pidx === 0 && sub.number.endsWith('.1')
                                ? 'first-letter:text-5xl first-letter:font-["Playfair_Display"] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#661447] dark:first-letter:text-[#C46D9E]'
                                : ''
                            }`}
                          >
                            <MathText text={p} />
                          </p>
                        ))}
                      </div>

                      {sub.equation && <EquationDisplay eq={sub.equation} />}

                      {sub.theoremBox && (
                        <div className="my-8 p-7 rounded-xl border border-[#831B5B]/35 bg-[#F7EEF3]/65 dark:bg-[#2E0820]/50 space-y-4 max-w-[68ch]">
                          <div className="border-b border-[#C46D9E]/35 pb-2.5">
                            <span className="font-['Playfair_Display'] text-xl text-[#4A0E33] dark:text-[#F7EEF3]">
                              {sub.theoremBox.kind} {sub.theoremBox.number}: {sub.theoremBox.title}
                            </span>
                          </div>
                          <p className="text-[16px] leading-[1.75] text-[#2E0820] dark:text-[#F7EEF3]">
                            <MathText text={sub.theoremBox.statement} />
                          </p>
                          <ol className="space-y-2 pl-5 text-[15px] leading-[1.7] text-[#062429] dark:text-[#EDF5F6] list-decimal">
                            {sub.theoremBox.proofSteps.map((step, sidx) => (
                              <li key={sidx}>
                                <MathText text={step} />
                              </li>
                            ))}
                          </ol>
                          <div className="pt-2 text-xs font-mono text-[#11505C] dark:text-[#6CB2BD]">
                            {sub.theoremBox.sourceNote}
                          </div>
                        </div>
                      )}

                      {sub.workedExample && (
                        <div className="my-8 p-7 rounded-xl border border-[#17573E]/30 bg-[#EEF5F1]/65 dark:bg-[#082419]/60 space-y-4 max-w-[68ch]">
                          <div className="font-['Playfair_Display'] text-xl text-[#0F3D2B] dark:text-[#EEF5F1]">
                            {sub.workedExample.title}
                          </div>
                          <p className="text-[15.5px] italic text-[#11505C] dark:text-[#6CB2BD]">
                            <MathText text={sub.workedExample.setup} />
                          </p>
                          <ol className="space-y-2 pl-5 text-[15.5px] leading-[1.75] text-[#062429] dark:text-[#EDF5F6] list-decimal">
                            {sub.workedExample.steps.map((step, sidx) => (
                              <li key={sidx}>
                                <MathText text={step} />
                              </li>
                            ))}
                          </ol>
                          <EquationDisplay eq={sub.workedExample.resultEquation} />
                          <p className="text-[14.5px] italic text-[#0F3D2B] dark:text-[#4A9374]">
                            Takeaway: <MathText text={sub.workedExample.takeaway} />
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Chapter-Specific Tables */}
                {ch.number === 4 && (
                  <div className="pt-4 space-y-3">
                    <h4 className="font-['Playfair_Display'] text-xl text-[#0B3942] dark:text-[#EDF5F6]">
                      Table 4.1 · Everyday Tests Where Both Pictures Agree
                    </h4>
                    <div className="overflow-x-auto rounded-lg border border-[#186876]/30">
                      <table className="w-full text-left border-collapse text-xs font-['Poppins']">
                        <thead>
                          <tr className="bg-[#EDF5F6] dark:bg-[#0B3942] text-[#062429] dark:text-[#EDF5F6] border-b border-[#186876]/30">
                            <th className="p-3">Experiment</th>
                            <th className="p-3">Scale</th>
                            <th className="p-3">Observed</th>
                            <th className="p-3">Curved Space (GR)</th>
                            <th className="p-3">Update Rate (LUH)</th>
                            <th className="p-3">Discrimination</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EDF5F6] dark:divide-[#11505C]/40">
                          {TABLE_4_1_EVERYDAY_TESTS.map((row) => (
                            <tr key={row.experiment} className="even:bg-[#EEF5F1]/45 dark:even:bg-[#082419]/35">
                              <td className="p-3 font-medium text-[#2E0820] dark:text-[#F7EEF3]">{row.experiment}</td>
                              <td className="p-3 font-mono tabular-nums">{row.heightOrOrbit}</td>
                              <td className="p-3 font-mono tabular-nums">{row.observedResult}</td>
                              <td className="p-3 font-mono tabular-nums">{row.curvedSpacetimePred}</td>
                              <td className="p-3 font-mono tabular-nums">{row.updateRatePred}</td>
                              <td className="p-3 text-[#0F3D2B] dark:text-[#4A9374]">{row.discriminatingPower}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {ch.number === 5 && (
                  <div className="pt-4 space-y-8">
                    <div className="space-y-3">
                      <h4 className="font-['Playfair_Display'] text-xl text-[#4A0E33] dark:text-[#F7EEF3]">
                        Table 5.1 · Solar-System, Gyroscopic, and Pulsar PPN Tests
                      </h4>
                      <div className="overflow-x-auto rounded-lg border border-[#C46D9E]/40">
                        <table className="w-full text-left border-collapse text-xs font-['Poppins']">
                          <thead>
                            <tr className="bg-[#F7EEF3] dark:bg-[#2E0820] text-[#2E0820] dark:text-[#F7EEF3] border-b border-[#C46D9E]/40">
                              <th className="p-3">Test</th>
                              <th className="p-3">Measured</th>
                              <th className="p-3">Pure Scalar (γ=0)</th>
                              <th className="p-3">Curved GR (γ=1)</th>
                              <th className="p-3">Dual Update (γ=1)</th>
                              <th className="p-3">Verdict</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#F7EEF3] dark:divide-[#4A0E33]/40">
                            {TABLE_5_1_STRESS_TESTS.map((row) => (
                              <tr key={row.testName} className="even:bg-[#EDF5F6]/50 dark:even:bg-[#0B3942]/35">
                                <td className="p-3 font-medium">{row.testName}</td>
                                <td className="p-3 font-mono tabular-nums">{row.measuredValue}</td>
                                <td className="p-3 font-mono tabular-nums text-[#831B5B] dark:text-[#C46D9E]">{row.pureClockSlowingGamma0}</td>
                                <td className="p-3 font-mono tabular-nums">{row.curvedSpaceTimeGR}</td>
                                <td className="p-3 font-mono tabular-nums">{row.dualUpdateRateGamma1}</td>
                                <td className="p-3 font-mono font-medium text-[#661447] dark:text-[#C46D9E]">{row.verdictOnPureScalar}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-['Playfair_Display'] text-xl text-[#0B3942] dark:text-[#EDF5F6]">
                        Table 5.2 · Complete PPN Parameter Bounds (Will 2014)
                      </h4>
                      <div className="overflow-x-auto rounded-lg border border-[#186876]/35">
                        <table className="w-full text-left border-collapse text-xs font-['Poppins']">
                          <thead>
                            <tr className="bg-[#EDF5F6] dark:bg-[#0B3942] text-[#062429] dark:text-[#EDF5F6] border-b border-[#186876]/35">
                              <th className="p-3">Parameter</th>
                              <th className="p-3">Physical Meaning</th>
                              <th className="p-3">Will (2014) Bound</th>
                              <th className="p-3">LUH-Scalar</th>
                              <th className="p-3">Dual Update / GR</th>
                              <th className="p-3">Primary Experiment</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#EDF5F6] dark:divide-[#11505C]/40">
                            {TABLE_5_2_PPN_BOUNDS.map((row) => (
                              <tr key={row.parameter} className="even:bg-[#EEF5F1]/45 dark:even:bg-[#082419]/35">
                                <td className="p-3 font-mono font-medium text-[#661447] dark:text-[#C46D9E] whitespace-nowrap">{row.parameter}</td>
                                <td className="p-3">{row.physicalMeaning}</td>
                                <td className="p-3 font-mono tabular-nums">{row.will2014Bound}</td>
                                <td className="p-3 font-mono text-[#831B5B] dark:text-[#C46D9E]">{row.luhScalarValue}</td>
                                <td className="p-3 font-mono text-[#0F3D2B] dark:text-[#4A9374]">{row.dualUpdateGRValue}</td>
                                <td className="p-3">{row.primaryExperiment}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-['Playfair_Display'] text-xl text-[#4A0E33] dark:text-[#F7EEF3]">
                        Table 5.3 · Step-by-Step Comparison Against Will (2014) PPN Derivation
                      </h4>
                      <div className="overflow-x-auto rounded-lg border border-[#C46D9E]/40">
                        <table className="w-full text-left border-collapse text-xs font-['Poppins']">
                          <thead>
                            <tr className="bg-[#F7EEF3] dark:bg-[#2E0820] text-[#2E0820] dark:text-[#F7EEF3] border-b border-[#C46D9E]/40">
                              <th className="p-3">Derivation Stage</th>
                              <th className="p-3">Will (2014) Canonical PPN</th>
                              <th className="p-3">Present Paper Derivation</th>
                              <th className="p-3">Status Relative to Will</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#F7EEF3] dark:divide-[#4A0E33]/40">
                            {TABLE_5_3_WILL_COMPARISON.map((row) => (
                              <tr key={row.derivationStage} className="even:bg-[#EEF5F1]/45 dark:even:bg-[#082419]/35">
                                <td className="p-3 font-medium text-[#2E0820] dark:text-[#F7EEF3]">{row.derivationStage}</td>
                                <td className="p-3">{row.will2014CanonicalPpn}</td>
                                <td className="p-3">{row.presentPaperDerivation}</td>
                                <td className="p-3 font-medium text-[#0F3D2B] dark:text-[#4A9374]">{row.statusRelativeToWill}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {ch.number === 6 && (
                  <div className="pt-4 space-y-3">
                    <h4 className="font-['Playfair_Display'] text-xl text-[#0B3942] dark:text-[#EDF5F6]">
                      Table 6.1 · Black Holes: Geometry vs. Update-Halt vs. Covariant Capacity
                    </h4>
                    <div className="overflow-x-auto rounded-lg border border-[#186876]/30">
                      <table className="w-full text-left border-collapse text-xs font-['Poppins']">
                        <thead>
                          <tr className="bg-[#EDF5F6] dark:bg-[#0B3942] text-[#062429] dark:text-[#EDF5F6] border-b border-[#186876]/30">
                            <th className="p-3">Observable</th>
                            <th className="p-3">Facility</th>
                            <th className="p-3">Standard GR</th>
                            <th className="p-3">Literal Update Halt</th>
                            <th className="p-3">Covariant Capacity (IGRT)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EDF5F6] dark:divide-[#11505C]/40">
                          {TABLE_6_1_BLACK_HOLES.map((row) => (
                            <tr key={row.observable} className="even:bg-[#EEF5F1]/45 dark:even:bg-[#082419]/35">
                              <td className="p-3 font-medium text-[#2E0820] dark:text-[#F7EEF3]">{row.observable}</td>
                              <td className="p-3 font-mono">{row.instrumentAndTarget}</td>
                              <td className="p-3">{row.standardGR}</td>
                              <td className="p-3">{row.literalUpdateHaltModel}</td>
                              <td className="p-3 text-[#0F3D2B] dark:text-[#4A9374]">{row.covariantUpdateCapacityIGRT}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {ch.number === 8 && (
                  <div className="space-y-10 pt-4">
                    <div className="space-y-3">
                      <h4 className="font-['Playfair_Display'] text-xl text-[#2E0820] dark:text-[#F7EEF3]">
                        Table 8.1 · Summary Prediction Matrix &amp; Falsification Criteria
                      </h4>
                      <div className="overflow-x-auto rounded-lg border border-[#C46D9E]/40">
                        <table className="w-full text-left border-collapse text-xs font-['Poppins']">
                          <thead>
                            <tr className="bg-[#F7EEF3] dark:bg-[#2E0820] text-[#2E0820] dark:text-[#F7EEF3] border-b border-[#C46D9E]/40">
                              <th className="p-3">Phenomenon</th>
                              <th className="p-3">Status</th>
                              <th className="p-3">Curved Spacetime (GR)</th>
                              <th className="p-3">Pure Scalar Clock-Slowing</th>
                              <th className="p-3">Dual Update / IGRT</th>
                              <th className="p-3">Outcome</th>
                              <th className="p-3">What Would Falsify</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#EDF5F6] dark:divide-[#11505C]/40">
                            {TABLE_8_1_PREDICTIONS_MATRIX.map((row) => (
                              <tr key={row.phenomenon} className="even:bg-[#EEF5F1]/50 dark:even:bg-[#082419]/40">
                                <td className="p-3 font-medium">{row.phenomenon}</td>
                                <td className={`p-3 font-mono font-semibold whitespace-nowrap ${
                                  row.statusBadge === 'PASS'
                                    ? 'text-[#0F3D2B] dark:text-[#4A9374]'
                                    : row.statusBadge === 'FAIL'
                                      ? 'text-[#831B5B] dark:text-[#C46D9E]'
                                      : 'text-[#186876] dark:text-[#6CB2BD]'
                                }`}>
                                  {row.statusBadge}
                                </td>
                                <td className="p-3 font-mono">{row.curvedSpacetimeGR}</td>
                                <td className="p-3 font-mono text-[#831B5B] dark:text-[#C46D9E]">{row.pureClockSlowing}</td>
                                <td className="p-3 font-mono text-[#0F3D2B] dark:text-[#4A9374]">{row.fullDualUpdateRateIGRT}</td>
                                <td className="p-3 font-medium">{row.empiricalWinner}</td>
                                <td className="p-3 text-[#0B3942] dark:text-[#EDF5F6]/85">{row.falsificationCriterion}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-['Playfair_Display'] text-xl text-[#0F3D2B] dark:text-[#EEF5F1]">
                        Table 8.2 · Next-Generation Experimental Roadmap (2026–2035)
                      </h4>
                      <div className="overflow-x-auto rounded-lg border border-[#17573E]/30">
                        <table className="w-full text-left border-collapse text-xs font-['Poppins']">
                          <thead>
                            <tr className="bg-[#EEF5F1] dark:bg-[#082419] text-[#082419] dark:text-[#EEF5F1] border-b border-[#17573E]/30">
                              <th className="p-3">Facility</th>
                              <th className="p-3">Window</th>
                              <th className="p-3">Observable</th>
                              <th className="p-3">Target Precision</th>
                              <th className="p-3">Discriminating Reach</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#EDF5F6] dark:divide-[#11505C]/40">
                            {TABLE_8_2_NEXT_GEN_ROADMAP.map((row) => (
                              <tr key={row.facility} className="even:bg-[#EDF5F6]/50 dark:even:bg-[#0B3942]/35">
                                <td className="p-3 font-medium">{row.facility}</td>
                                <td className="p-3 font-mono tabular-nums">{row.timeframe}</td>
                                <td className="p-3">{row.observable}</td>
                                <td className="p-3 font-mono tabular-nums">{row.targetPrecision}</td>
                                <td className="p-3">{row.discriminatingReach}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-['Playfair_Display'] text-xl text-[#0B3942] dark:text-[#EDF5F6]">
                        Table 8.3 · Multi-Survey Empirical Grounding, Calibration &amp; Systematics
                      </h4>
                      <div className="overflow-x-auto rounded-lg border border-[#186876]/35">
                        <table className="w-full text-left border-collapse text-xs font-['Poppins']">
                          <thead>
                            <tr className="bg-[#EDF5F6] dark:bg-[#0B3942] text-[#062429] dark:text-[#EDF5F6] border-b border-[#186876]/35">
                              <th className="p-3">Regime &amp; Survey</th>
                              <th className="p-3">Key Dataset</th>
                              <th className="p-3">Observed Bound</th>
                              <th className="p-3">Systematics &amp; Calibration</th>
                              <th className="p-3">Model Discrimination</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#EDF5F6] dark:divide-[#11505C]/40">
                            {TABLE_8_3_MULTISURVEY_EMPIRICAL.map((row) => (
                              <tr key={row.regimeAndSurvey} className="even:bg-[#EEF5F1]/45 dark:even:bg-[#082419]/35">
                                <td className="p-3 font-medium text-[#2E0820] dark:text-[#F7EEF3]">{row.regimeAndSurvey}</td>
                                <td className="p-3 font-mono text-[11px]">{row.keyDataset}</td>
                                <td className="p-3 font-mono tabular-nums">{row.observedBound}</td>
                                <td className="p-3">{row.systematicsAndCalibration}</td>
                                <td className="p-3 text-[#0F3D2B] dark:text-[#4A9374]">{row.modelDiscrimination}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-['Playfair_Display'] text-xl text-[#4A0E33] dark:text-[#F7EEF3]">
                        Table 8.4 · 10⁻²⁰–10⁻²² Tabletop Experimental Protocol, Budget &amp; Decision Thresholds
                      </h4>
                      <div className="overflow-x-auto rounded-lg border border-[#C46D9E]/40">
                        <table className="w-full text-left border-collapse text-xs font-['Poppins']">
                          <thead>
                            <tr className="bg-[#F7EEF3] dark:bg-[#2E0820] text-[#2E0820] dark:text-[#F7EEF3] border-b border-[#C46D9E]/40">
                              <th className="p-3">Subsystem</th>
                              <th className="p-3">Target Sensitivity</th>
                              <th className="p-3">Error Budget</th>
                              <th className="p-3">Cost &amp; Schedule</th>
                              <th className="p-3">Falsification &amp; Power</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#EDF5F6] dark:divide-[#11505C]/40">
                            {TABLE_8_4_TABLETOP_PROTOCOL.map((row) => (
                              <tr key={row.subsystem} className="even:bg-[#EEF5F1]/45 dark:even:bg-[#082419]/35">
                                <td className="p-3 font-medium text-[#2E0820] dark:text-[#F7EEF3]">{row.subsystem}</td>
                                <td className="p-3 font-mono tabular-nums text-[#661447] dark:text-[#C46D9E]">{row.targetSensitivity}</td>
                                <td className="p-3">{row.errorBudgetItem}</td>
                                <td className="p-3 font-mono text-[11px]">{row.costAndSchedule}</td>
                                <td className="p-3 text-[#0F3D2B] dark:text-[#4A9374]">{row.falsificationAndPower}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {/* Chapter Plates & Figures */}
                {chapterPlates.map((plate) => (
                  <ClockSpeedPlateCard key={plate.id} plate={plate} />
                ))}
                {chapterFigures.map((fig) => (
                  <ClockSpeedFigureCard key={fig.id} fig={fig} />
                ))}
              </section>
            );
          })}

          {/* Glossary */}
          <section
            id="cs-glossary"
            className="rounded-xl border border-[#17573E]/30 dark:border-[#186876]/50 bg-white dark:bg-[#062429] p-8 sm:p-14 space-y-8"
          >
            <div className="flex flex-wrap items-end justify-between gap-4 pb-4 border-b border-[#EDF5F6] dark:border-[#11505C]/40">
              <h2 className="font-['Playfair_Display'] font-normal text-3xl text-[#2E0820] dark:text-[#F7EEF3]">
                Glossary
              </h2>

              <div className="w-full sm:w-72">
                <label htmlFor="glossary-search" className="sr-only">
                  Filter glossary terms
                </label>
                <input
                  id="glossary-search"
                  type="text"
                  value={glossaryQuery}
                  onChange={(e) => setGlossaryQuery(e.target.value)}
                  placeholder="Filter glossary terms..."
                  className="w-full px-3.5 py-2 rounded-lg border border-[#186876]/35 bg-[#FAF9F7] dark:bg-[#0B3942] text-xs font-['Poppins'] text-[#062429] dark:text-[#EDF5F6] placeholder-[#278594] focus:outline-hidden focus:border-[#661447]"
                />
              </div>
            </div>

            {filteredGlossary.length === 0 && filteredSymbols.length === 0 ? (
              <p className="text-sm font-['Poppins'] text-[#11505C] dark:text-[#6CB2BD]">
                No glossary entries match “{glossaryQuery}”.
              </p>
            ) : (
              <div className="space-y-10">
                {filteredGlossary.length > 0 && (
                  <dl className="divide-y divide-[#EDF5F6] dark:divide-[#11505C]/40">
                    {filteredGlossary.map((entry) => (
                      <div key={entry.term} className="py-5 space-y-1.5">
                        <dt className="font-['Playfair_Display'] text-lg text-[#2E0820] dark:text-[#F7EEF3]">
                          {entry.term}
                        </dt>
                        <dd className="text-[15.5px] leading-[1.75] text-[#062429] dark:text-[#EDF5F6]/90 max-w-[68ch]">
                          <MathText text={entry.definition} />
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                {filteredSymbols.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-[#EDF5F6] dark:border-[#11505C]/40">
                    <h3 className="font-['Playfair_Display'] font-normal text-2xl text-[#0B3942] dark:text-[#EDF5F6]">
                      Glossary of Symbols &amp; Physical Conventions
                    </h3>
                    <div className="overflow-x-auto rounded-lg border border-[#186876]/30">
                      <table className="w-full text-left border-collapse text-xs font-['Poppins']">
                        <thead>
                          <tr className="bg-[#EDF5F6] dark:bg-[#0B3942] text-[#062429] dark:text-[#EDF5F6] border-b border-[#186876]/30">
                            <th className="p-3">Symbol</th>
                            <th className="p-3">Quantity</th>
                            <th className="p-3">Units / Domain</th>
                            <th className="p-3">Operational Definition</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EDF5F6] dark:divide-[#11505C]/40">
                          {filteredSymbols.map((sym) => (
                            <tr key={sym.symbol} className="even:bg-[#EEF5F1]/45 dark:even:bg-[#082419]/35">
                              <td className="p-3 font-mono font-medium text-[#661447] dark:text-[#C46D9E] whitespace-nowrap">{sym.symbol}</td>
                              <td className="p-3 font-medium text-[#2E0820] dark:text-[#F7EEF3]">{sym.name}</td>
                              <td className="p-3 font-mono text-[11px]">{sym.unitsOrDomain}</td>
                              <td className="p-3"><MathText text={sym.definition} /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}
          </section>

          {/* Appendices */}
          <section
            id="cs-appendices"
            className="rounded-xl border border-[#C46D9E]/30 dark:border-[#186876]/50 bg-white dark:bg-[#062429] p-8 sm:p-14 space-y-12"
          >
            <div className="pb-4 border-b border-[#EDF5F6] dark:border-[#11505C]/40">
              <h2 className="font-['Playfair_Display'] font-normal text-3xl text-[#2E0820] dark:text-[#F7EEF3]">
                Appendices
              </h2>
            </div>

            <div className="space-y-12">
              {CLOCK_SPEED_APPENDICES.map((app) => (
                <div key={app.letter} className="space-y-6 pb-8 border-b border-[#EDF5F6] dark:border-[#11505C]/30 last:border-b-0">
                  <div className="space-y-1">
                    <h3 className="font-['Playfair_Display'] font-normal text-2xl text-[#0B3942] dark:text-[#EDF5F6]">
                      Appendix {app.letter}: {app.title}
                    </h3>
                    <p className="text-[15.5px] italic text-[#0F3D2B] dark:text-[#4A9374] max-w-[68ch]">
                      <MathText text={app.summary} />
                    </p>
                  </div>

                  {app.equations.map((eq) => (
                    <EquationDisplay key={eq.label} eq={eq} />
                  ))}

                  {app.theoremBoxes?.map((tb) => (
                    <div key={tb.number} className="my-6 p-7 rounded-xl border border-[#831B5B]/35 bg-[#F7EEF3]/65 dark:bg-[#2E0820]/50 space-y-4 max-w-[68ch]">
                      <div className="border-b border-[#C46D9E]/35 pb-2.5">
                        <span className="font-['Playfair_Display'] text-xl text-[#4A0E33] dark:text-[#F7EEF3]">
                          {tb.kind} {tb.number}: {tb.title}
                        </span>
                      </div>
                      <p className="text-[16px] leading-[1.75] text-[#2E0820] dark:text-[#F7EEF3]">
                        <MathText text={tb.statement} />
                      </p>
                      <ol className="space-y-2 pl-5 text-[15px] leading-[1.7] text-[#062429] dark:text-[#EDF5F6] list-decimal">
                        {tb.proofSteps.map((step, sidx) => (
                          <li key={sidx}>
                            <MathText text={step} />
                          </li>
                        ))}
                      </ol>
                      <div className="pt-2 text-xs font-mono text-[#11505C] dark:text-[#6CB2BD]">
                        <MathText text={tb.sourceNote} />
                      </div>
                    </div>
                  ))}

                  {app.workedExamples?.map((wx) => (
                    <div key={wx.title} className="my-6 p-7 rounded-xl border border-[#17573E]/30 bg-[#EEF5F1]/65 dark:bg-[#082419]/60 space-y-4 max-w-[68ch]">
                      <div className="font-['Playfair_Display'] text-xl text-[#0F3D2B] dark:text-[#EEF5F1]">
                        {wx.title}
                      </div>
                      <p className="text-[15.5px] italic text-[#11505C] dark:text-[#6CB2BD]">
                        <MathText text={wx.setup} />
                      </p>
                      <ol className="space-y-2 pl-5 text-[15.5px] leading-[1.75] text-[#062429] dark:text-[#EDF5F6] list-decimal">
                        {wx.steps.map((step, sidx) => (
                          <li key={sidx}>
                            <MathText text={step} />
                          </li>
                        ))}
                      </ol>
                      <EquationDisplay eq={wx.resultEquation} />
                      <p className="text-[14.5px] italic text-[#0F3D2B] dark:text-[#4A9374]">
                        Takeaway: <MathText text={wx.takeaway} />
                      </p>
                    </div>
                  ))}

                  {app.reproducibilityLedger && app.reproducibilityLedger.length > 0 && (
                    <div className="overflow-x-auto rounded-lg border border-[#186876]/30">
                      <table className="w-full text-left border-collapse text-xs font-['Poppins']">
                        <thead>
                          <tr className="bg-[#EDF5F6] dark:bg-[#0B3942] text-[#062429] dark:text-[#EDF5F6] border-b border-[#186876]/30">
                            <th className="p-3">Checkpoint</th>
                            <th className="p-3">Formula</th>
                            <th className="p-3">Reference Constants</th>
                            <th className="p-3">Computed Output</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EDF5F6] dark:divide-[#11505C]/40">
                          {app.reproducibilityLedger.map((row) => (
                            <tr key={row.checkpoint} className="even:bg-[#EEF5F1]/45 dark:even:bg-[#082419]/35">
                              <td className="p-3 font-medium text-[#2E0820] dark:text-[#F7EEF3]">{row.checkpoint}</td>
                              <td className="p-3 font-mono text-[11px]"><MathText text={row.formula} /></td>
                              <td className="p-3"><MathText text={row.referenceConstants} /></td>
                              <td className="p-3 font-mono text-[11px] text-[#0F3D2B] dark:text-[#4A9374]">{row.computedOutput}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  <div className="space-y-4 max-w-[68ch]">
                    {app.paragraphs.map((p, idx) => (
                      <p key={idx} className="text-[16.5px] leading-[1.8] text-[#062429] dark:text-[#EDF5F6]/90">
                        <MathText text={p} />
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* References */}
          <section
            id="cs-references"
            className="rounded-xl border border-[#186876]/30 dark:border-[#186876]/50 bg-white dark:bg-[#062429] p-8 sm:p-14 space-y-6"
          >
            <h2 className="font-['Playfair_Display'] font-normal text-3xl text-[#2E0820] dark:text-[#F7EEF3] pb-4 border-b border-[#EDF5F6] dark:border-[#11505C]/40">
              References
            </h2>
            <ol className="space-y-3 list-none pl-0 text-[14.5px] leading-[1.7] text-[#062429] dark:text-[#EDF5F6]/90 max-w-[72ch]">
              {CLOCK_SPEED_REFERENCES.map((ref) => (
                <li key={ref.id} className="flex gap-3">
                  <span className="font-mono text-xs text-[#661447] dark:text-[#C46D9E] shrink-0 pt-0.5 tabular-nums">
                    [{ref.id}]
                  </span>
                  <span>{ref.citation}</span>
                </li>
              ))}
            </ol>
          </section>
        </article>
      </div>
    </div>
  );
};
