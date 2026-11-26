/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Self-contained HTML & LaTeX Exporters for Paper 14:
 * "Does Gravity Bend Space, or Just Slow Down the Universe's Clock Speed?"
 */

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
  type ClockPaperEquation,
  type ClockPaperTheoremBox,
  type ClockPaperWorkedExample
} from '../types/clockSpeedPaperData';
import { CLOCK_SPEED_FIGURES } from '../types/clockSpeedFigures';
import { formatSvgMathMarkup } from './formatMathUnicode';

const CLOCK_SPEED_PLATES_INDEX = [
  {
    plateNumber: 'Plate I',
    anchorChapter: 1,
    title: 'Optical Atomic Clock Chambers Across an Elevation Potential Gradient',
    caption:
      'Minimalist engraving contrasting an alpine optical lattice clock and a sea-level twin linked by phase-locked timing wavefronts (Δν/ν = gΔh/c² = 1.0911×10⁻¹⁶ m⁻¹).'
  },
  {
    plateNumber: 'Plate II',
    anchorChapter: 3,
    title: 'Curved 4D Spacetime Continuum vs. Local Update-Rate Throttling Lattice',
    caption:
      'Conceptual contrast between smooth Schwarzschild metric curvature and a density-throttled physical update lattice.'
  },
  {
    plateNumber: 'Plate III',
    anchorChapter: 5,
    title: 'Solar-Limb Starlight Deflection: Scalar Half-Bending vs. Full Geometric Lensing',
    caption:
      'Pure temporal clock-slowing (γ = 0) deflects grazing starlight by 0.875″; adding spatial impedance (γ = 1) matches the observed 1.750″ and Cassini Shapiro delay.'
  },
  {
    plateNumber: 'Plate IV',
    anchorChapter: 6,
    title: 'Event Horizon Cross-Section: Photon Ring & Asymptotic Update Throttling',
    caption:
      'Schwarzschild photon sphere (1.5 r_s) and glowing accretion ring enclosing the causal horizon, where coordinate update ticks compress toward zero.'
  },
  {
    plateNumber: 'Plate V',
    anchorChapter: 7,
    title: 'Ultra-High-Energy Particle Cascade Across Planck-Scale Vacuum Contours',
    caption:
      'Cosmic-ray and TeV gamma-ray burst trajectories probing potential discrete update-step dispersion bounds (Fermi-LAT E_QG,1 > 7.6 E_Pl, LHAASO GRB 221009A).'
  }
];

function escapeHtml(raw: string): string {
  return raw
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderHtmlEquation(eq: ClockPaperEquation): string {
  return `<div class="eq-box">
    <div class="eq-math">${eq.unicodeHtml} <span class="eq-num">${escapeHtml(eq.label)}</span></div>
    ${eq.plainMath ? `<div class="eq-plain"><strong>Plain Math Equation:</strong> <code>${escapeHtml(eq.plainMath)}</code></div>` : ''}
    <div class="eq-cap">${escapeHtml(eq.caption)}</div>
    <div class="eq-meaning">${escapeHtml(eq.plainMeaning)}</div>
    ${eq.provenance ? `<div class="box-note"><strong>Provenance:</strong> ${escapeHtml(eq.provenance)}</div>` : ''}
    ${
      eq.derivationSteps?.length
        ? `<ol class="deriv-list">${eq.derivationSteps.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}</ol>`
        : ''
    }
  </div>`;
}

function renderHtmlTheorem(tb: ClockPaperTheoremBox): string {
  return `<div class="theorem-box">
    <div class="box-title">${escapeHtml(tb.kind)} ${escapeHtml(tb.number)}: ${escapeHtml(tb.title)}</div>
    <p>${escapeHtml(tb.statement)}</p>
    <ol>${tb.proofSteps.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}</ol>
    <div class="box-note">${escapeHtml(tb.sourceNote)}</div>
  </div>`;
}

function renderHtmlWorkedExample(wx: ClockPaperWorkedExample): string {
  return `<div class="worked-box">
    <div class="box-title">${escapeHtml(wx.title)}</div>
    <p class="epigraph">${escapeHtml(wx.setup)}</p>
    <ol>${wx.steps.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}</ol>
    ${renderHtmlEquation(wx.resultEquation)}
    <p class="lead">Takeaway: ${escapeHtml(wx.takeaway)}</p>
  </div>`;
}

function renderHtmlChapterTable(chapterNum: number): string {
  if (chapterNum === 4) {
    return `
      <h3>Table 4.1 · Everyday Tests Where Curved Spacetime &amp; Slowed Update Speed Agree</h3>
      <table>
        <thead><tr><th>Experiment</th><th>Scale</th><th>Observed</th><th>Curved Space (GR)</th><th>Update Rate (LUH)</th><th>Discrimination</th></tr></thead>
        <tbody>
          ${TABLE_4_1_EVERYDAY_TESTS.map((r) => `<tr><td>${escapeHtml(r.experiment)}</td><td>${escapeHtml(r.heightOrOrbit)}</td><td>${escapeHtml(r.observedResult)}</td><td>${escapeHtml(r.curvedSpacetimePred)}</td><td>${escapeHtml(r.updateRatePred)}</td><td>${escapeHtml(r.discriminatingPower)}</td></tr>`).join('')}
        </tbody>
      </table>`;
  }
  if (chapterNum === 5) {
    return `
      <h3>Table 5.1 · Solar-System, Gyroscopic, and Pulsar PPN Tests</h3>
      <table>
        <thead><tr><th>Test</th><th>Measured</th><th>Pure Scalar (γ=0)</th><th>Curved GR (γ=1)</th><th>Dual Update (γ=1)</th><th>Verdict</th></tr></thead>
        <tbody>
          ${TABLE_5_1_STRESS_TESTS.map((r) => `<tr><td>${escapeHtml(r.testName)}</td><td>${escapeHtml(r.measuredValue)}</td><td>${escapeHtml(r.pureClockSlowingGamma0)}</td><td>${escapeHtml(r.curvedSpaceTimeGR)}</td><td>${escapeHtml(r.dualUpdateRateGamma1)}</td><td>${escapeHtml(r.verdictOnPureScalar)}</td></tr>`).join('')}
        </tbody>
      </table>
      <h3>Table 5.2 · Complete PPN Parameter Bounds (Will 2014)</h3>
      <table>
        <thead><tr><th>Parameter</th><th>Physical Meaning</th><th>Will (2014) Bound</th><th>LUH-Scalar</th><th>Dual Update / GR</th><th>Primary Experiment</th></tr></thead>
        <tbody>
          ${TABLE_5_2_PPN_BOUNDS.map((r) => `<tr><td>${escapeHtml(r.parameter)}</td><td>${escapeHtml(r.physicalMeaning)}</td><td>${escapeHtml(r.will2014Bound)}</td><td>${escapeHtml(r.luhScalarValue)}</td><td>${escapeHtml(r.dualUpdateGRValue)}</td><td>${escapeHtml(r.primaryExperiment)}</td></tr>`).join('')}
        </tbody>
      </table>
      <h3>Table 5.3 · Step-by-Step Comparison Against Will (2014) PPN Derivation</h3>
      <table>
        <thead><tr><th>Derivation Stage</th><th>Will (2014) Canonical PPN</th><th>Present Paper Derivation</th><th>Status Relative to Will</th></tr></thead>
        <tbody>
          ${TABLE_5_3_WILL_COMPARISON.map((r) => `<tr><td>${escapeHtml(r.derivationStage)}</td><td>${escapeHtml(r.will2014CanonicalPpn)}</td><td>${escapeHtml(r.presentPaperDerivation)}</td><td>${escapeHtml(r.statusRelativeToWill)}</td></tr>`).join('')}
        </tbody>
      </table>`;
  }
  if (chapterNum === 6) {
    return `
      <h3>Table 6.1 · Black Hole Horizons, Shadows, Ringdowns &amp; Sgr A* Orbits</h3>
      <table>
        <thead><tr><th>Observable</th><th>Facility</th><th>Standard GR</th><th>Literal Update Halt</th><th>Covariant Capacity (IGRT)</th></tr></thead>
        <tbody>
          ${TABLE_6_1_BLACK_HOLES.map((r) => `<tr><td>${escapeHtml(r.observable)}</td><td>${escapeHtml(r.instrumentAndTarget)}</td><td>${escapeHtml(r.standardGR)}</td><td>${escapeHtml(r.literalUpdateHaltModel)}</td><td>${escapeHtml(r.covariantUpdateCapacityIGRT)}</td></tr>`).join('')}
        </tbody>
      </table>`;
  }
  if (chapterNum === 8) {
    return `
      <h3>Table 8.1 · Summary Prediction Matrix &amp; Falsification Criteria</h3>
      <table>
        <thead><tr><th>Phenomenon</th><th>Status</th><th>Curved Spacetime (GR)</th><th>Pure Clock-Slowing</th><th>Dual Update / IGRT</th><th>Outcome</th><th>What Would Falsify</th></tr></thead>
        <tbody>
          ${TABLE_8_1_PREDICTIONS_MATRIX.map((r) => `<tr><td>${escapeHtml(r.phenomenon)}</td><td>${escapeHtml(r.statusBadge)}</td><td>${escapeHtml(r.curvedSpacetimeGR)}</td><td>${escapeHtml(r.pureClockSlowing)}</td><td>${escapeHtml(r.fullDualUpdateRateIGRT)}</td><td>${escapeHtml(r.empiricalWinner)}</td><td>${escapeHtml(r.falsificationCriterion)}</td></tr>`).join('')}
        </tbody>
      </table>
      <h3>Table 8.2 · Next-Generation Experimental Roadmap (2026–2035)</h3>
      <table>
        <thead><tr><th>Facility</th><th>Window</th><th>Observable</th><th>Target Precision</th><th>Discriminating Reach</th></tr></thead>
        <tbody>
          ${TABLE_8_2_NEXT_GEN_ROADMAP.map((r) => `<tr><td>${escapeHtml(r.facility)}</td><td>${escapeHtml(r.timeframe)}</td><td>${escapeHtml(r.observable)}</td><td>${escapeHtml(r.targetPrecision)}</td><td>${escapeHtml(r.discriminatingReach)}</td></tr>`).join('')}
        </tbody>
      </table>
      <h3>Table 8.3 · Multi-Survey Empirical Grounding, Calibration &amp; Systematics</h3>
      <table>
        <thead><tr><th>Regime &amp; Survey</th><th>Key Dataset</th><th>Observed Bound</th><th>Systematics &amp; Calibration</th><th>Model Discrimination</th></tr></thead>
        <tbody>
          ${TABLE_8_3_MULTISURVEY_EMPIRICAL.map((r) => `<tr><td>${escapeHtml(r.regimeAndSurvey)}</td><td>${escapeHtml(r.keyDataset)}</td><td>${escapeHtml(r.observedBound)}</td><td>${escapeHtml(r.systematicsAndCalibration)}</td><td>${escapeHtml(r.modelDiscrimination)}</td></tr>`).join('')}
        </tbody>
      </table>
      <h3>Table 8.4 · 10⁻²⁰–10⁻²² Tabletop Experimental Protocol, Budget &amp; Decision Thresholds</h3>
      <table>
        <thead><tr><th>Subsystem</th><th>Target Sensitivity</th><th>Error Budget</th><th>Cost &amp; Schedule</th><th>Falsification &amp; Power</th></tr></thead>
        <tbody>
          ${TABLE_8_4_TABLETOP_PROTOCOL.map((r) => `<tr><td>${escapeHtml(r.subsystem)}</td><td>${escapeHtml(r.targetSensitivity)}</td><td>${escapeHtml(r.errorBudgetItem)}</td><td>${escapeHtml(r.costAndSchedule)}</td><td>${escapeHtml(r.falsificationAndPower)}</td></tr>`).join('')}
        </tbody>
      </table>`;
  }
  return '';
}

export function buildClockSpeedSelfContainedHtml(): string {
  const graphicalAbstractHtml = CLOCK_SPEED_FIGURES.filter((f) => f.anchorChapter === 0)
    .map(
      (fg) => `
    <figure>
      <div class="fig-meta">${escapeHtml(fg.figureNumber)} · ${escapeHtml(fg.title)}</div>
      ${formatSvgMathMarkup(fg.svgMarkup)}
      <figcaption>${escapeHtml(fg.caption)}</figcaption>
    </figure>`
    )
    .join('\n');

  const chaptersHtml = CLOCK_SPEED_CHAPTERS.map((ch) => {
    const figs = CLOCK_SPEED_FIGURES.filter((f) => f.anchorChapter === ch.number);
    return `
      <section class="chapter">
        <h2>Chapter ${ch.number}: ${escapeHtml(ch.title)}</h2>
        <p class="epigraph">${escapeHtml(ch.epigraph)}</p>
        <p class="lead">${escapeHtml(ch.leadSummary)}</p>
        ${
          ch.chapterIntro?.length
            ? `<div class="chapter-intro"><div class="intro-label">Introduction</div>${ch.chapterIntro.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}</div>`
            : ''
        }
        ${ch.subsections
          .map(
            (sub) => `
          <div class="subsec">
            <h3>${escapeHtml(sub.number)} ${escapeHtml(sub.title)}</h3>
            ${sub.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
            ${sub.equation ? renderHtmlEquation(sub.equation) : ''}
            ${sub.theoremBox ? renderHtmlTheorem(sub.theoremBox) : ''}
            ${sub.workedExample ? renderHtmlWorkedExample(sub.workedExample) : ''}
          </div>`
          )
          .join('')}
        ${renderHtmlChapterTable(ch.number)}
        ${figs
          .map(
            (fg) => `
          <figure>
            <div class="fig-meta">${escapeHtml(fg.figureNumber)} · ${escapeHtml(fg.title)}</div>
            ${formatSvgMathMarkup(fg.svgMarkup)}
            <figcaption>${escapeHtml(fg.caption)}</figcaption>
          </figure>`
          )
          .join('')}
      </section>
    `;
  }).join('\n');

  const appendicesHtml = CLOCK_SPEED_APPENDICES.map(
    (a) => `
      <h3>Appendix ${a.letter}: ${escapeHtml(a.title)}</h3>
      <p><em>${escapeHtml(a.summary)}</em></p>
      ${a.equations.map(renderHtmlEquation).join('')}
      ${a.theoremBoxes ? a.theoremBoxes.map(renderHtmlTheorem).join('') : ''}
      ${a.workedExamples ? a.workedExamples.map(renderHtmlWorkedExample).join('') : ''}
      ${
        a.reproducibilityLedger?.length
          ? `<table>
               <thead><tr><th>Checkpoint</th><th>Formula</th><th>Reference Constants</th><th>Computed Output</th></tr></thead>
               <tbody>${a.reproducibilityLedger
                 .map(
                   (row) =>
                     `<tr><td>${escapeHtml(row.checkpoint)}</td><td>${escapeHtml(row.formula)}</td><td>${escapeHtml(row.referenceConstants)}</td><td>${escapeHtml(row.computedOutput)}</td></tr>`
                 )
                 .join('')}</tbody>
             </table>`
          : ''
      }
      ${a.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
    `
  ).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(CLOCK_SPEED_META.title)}</title>
<style>
  body { font-family: Georgia, "Times New Roman", serif; color: #062429; background: #FAF9F7; margin: 0; padding: 3rem 1.5rem; line-height: 1.78; }
  main { max-width: 820px; margin: 0 auto; background: #FFFFFF; padding: 3.5rem; border: 1px solid #C46D9E; }
  h1, h2, h3 { font-weight: 400; color: #2E0820; }
  h1 { font-size: 2.2rem; line-height: 1.2; margin-bottom: 0.5rem; }
  h2 { font-size: 1.55rem; border-bottom: 1px solid #C46D9E; padding-bottom: 0.4rem; margin-top: 2.8rem; }
  h3 { font-size: 1.18rem; color: #0B3942; margin-top: 1.8rem; }
  .kicker { font-family: monospace; font-size: 0.78rem; color: #831B5B; letter-spacing: 0.08em; text-transform: uppercase; }
  .subtitle { font-style: italic; color: #11505C; font-size: 1.15rem; margin-bottom: 1.5rem; }
  .epigraph { font-style: italic; color: #186876; }
  .lead { color: #0F3D2B; font-style: italic; }
  .chapter-intro { border-left: 3px solid #17573E; background: #EEF5F1; padding: 1rem 1.35rem; margin: 1.4rem 0 2rem; border-radius: 0 6px 6px 0; }
  .intro-label { font-family: monospace; font-size: 0.78rem; color: #0F3D2B; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.4rem; }
  @media print {
    @page { size: A4; margin: 20mm; }
    body { padding: 0; background: #FFFFFF; }
    main { max-width: none; padding: 0; border: none; }
    .chapter { page-break-before: always; }
    .eq-box, .theorem-box, .worked-box, figure { break-inside: avoid; }
  }
  .eq-box { background: #EDF5F6; border: 1px solid #186876; padding: 1rem 1.25rem; margin: 1.4rem 0; border-radius: 6px; }
  .eq-math { text-align: center; font-size: 1.05rem; color: #2E0820; overflow-wrap: anywhere; }
  .eq-num { float: right; font-family: monospace; font-size: 0.85rem; color: #661447; }
  .eq-plain { margin-top: 0.55rem; padding: 0.4rem 0.65rem; background: #FFFFFF; border: 1px solid #C46D9E; border-radius: 4px; font-size: 0.8rem; color: #2E0820; overflow-wrap: anywhere; }
  .eq-plain code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.78rem; }
  .eq-cap { font-size: 0.86rem; color: #0B3942; margin-top: 0.5rem; text-align: center; font-style: italic; }
  .eq-meaning { font-size: 0.82rem; color: #0F3D2B; margin-top: 0.25rem; text-align: center; }
  .deriv-list { font-size: 0.82rem; color: #062429; margin: 0.6rem 0 0.4rem; padding-left: 1.2rem; }
  .theorem-box { background: #F7EEF3; border: 1px solid #831B5B; padding: 1.1rem 1.35rem; margin: 1.4rem 0; border-radius: 6px; }
  .worked-box { background: #EEF5F1; border: 1px solid #17573E; padding: 1.1rem 1.35rem; margin: 1.4rem 0; border-radius: 6px; }
  .box-title { font-weight: 600; color: #4A0E33; margin-bottom: 0.5rem; }
  .box-note { font-family: monospace; font-size: 0.78rem; color: #11505C; margin-top: 0.5rem; overflow-wrap: anywhere; }
  table { width: 100%; table-layout: fixed; border-collapse: collapse; margin: 1.6rem 0; font-size: 0.82rem; }
  th { background: #EDF5F6; color: #062429; text-align: left; padding: 0.5rem; border: 1px solid #278594; word-break: break-word; overflow-wrap: anywhere; }
  td { padding: 0.45rem; border: 1px solid #C46D9E; vertical-align: top; word-break: break-word; overflow-wrap: anywhere; }
  tr:nth-child(even) td { background: #EEF5F1; }
  figure { margin: 2rem 0; padding: 1rem; border: 1px solid #186876; background: #FFFFFF; }
  figure svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
  .fig-meta { font-family: monospace; font-size: 0.82rem; color: #661447; margin-bottom: 0.6rem; }
  figcaption { font-size: 0.88rem; color: #0B3942; margin-top: 0.6rem; }
</style>
</head>
<body>
<main>
  <div class="kicker">${escapeHtml(CLOCK_SPEED_META.paperNumber)} · ${escapeHtml(CLOCK_SPEED_META.targetVenues)}</div>
  <h1>${escapeHtml(CLOCK_SPEED_META.title)}</h1>
  <p class="subtitle">${escapeHtml(CLOCK_SPEED_META.subtitle)}</p>
  <p><strong>Authors:</strong> ${escapeHtml(CLOCK_SPEED_META.authors.map((a) => `${a.name} (${a.affiliation})`).join('; '))}</p>
  <h2>Abstract</h2>
  ${CLOCK_SPEED_ABSTRACT.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
  ${graphicalAbstractHtml}
  ${chaptersHtml}
  <h2>Glossary</h2>
  <h3>Core Conceptual Terms</h3>
  ${CLOCK_SPEED_GLOSSARY.map((g) => `<p><strong>${escapeHtml(g.term)}${g.acronym ? ` (${escapeHtml(g.acronym)})` : ''}:</strong> ${escapeHtml(g.definition)}</p>`).join('')}
  <h3>Glossary of Symbols</h3>
  <table>
    <thead><tr><th>Symbol</th><th>Physical Quantity</th><th>Units / Domain</th><th>Definition</th></tr></thead>
    <tbody>
      ${CLOCK_SPEED_SYMBOL_GLOSSARY.map((s) => `<tr><td>${escapeHtml(s.symbol)}</td><td>${escapeHtml(s.name)}</td><td>${escapeHtml(s.unitsOrDomain)}</td><td>${escapeHtml(s.definition)}</td></tr>`).join('')}
    </tbody>
  </table>
  <h2>Appendices</h2>
  ${appendicesHtml}
  <h2>References</h2>
  ${CLOCK_SPEED_REFERENCES.map((r) => `<p>[${r.id}] ${escapeHtml(r.citation)}</p>`).join('')}
</main>
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// Pure 7-bit ASCII LaTeX Token & Math Translator
// ---------------------------------------------------------------------------

const UNICODE_SUP_TO_TEX: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
  '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  '⁺': '+', '⁻': '-', 'ⁿ': 'n', 'ʳ': 'r', 'ⁱ': 'i', 'ʲ': 'j',
  'ᵀ': '\\mathrm{T}'
};

const UNICODE_SUB_TO_TEX: Record<string, string> = {
  '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
  '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
  '₊': '+', '₋': '-', 'ᵢ': 'i'
};

const SUP_CHAR_RE = /[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿʳⁱʲᵀ]/;
const SUB_CHAR_RE = /[₀₁₂₃₄₅₆₇₈₉₊₋ᵢ]/;
const SUP_RUN_RE = /[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿʳⁱʲᵀ]+/g;
const SUB_RUN_RE = /[₀₁₂₃₄₅₆₇₈₉₊₋ᵢ]+/g;

const COMBINED_ACCENTS: Record<string, string> = {
  '\u0302': '\\hat',
  '\u0303': '\\tilde',
  '\u0304': '\\bar',
  '\u0307': '\\dot',
  '\u0308': '\\ddot',
  '\u20D7': '\\vec'
};

const PRECOMPOSED_MATH_ACCENTS: Record<string, string> = {
  'Ĥ': '\\hat{H}',
  'ẋ': '\\dot{x}',
  'ȧ': '\\dot{a}',
  'Ṗ': '\\dot{P}'
};

const TEXT_LATIN_ACCENTS: Record<string, string> = {
  'à': '\\`{a}',
  'á': "\\'{a}",
  'â': '\\^{a}',
  'ä': '\\"{a}',
  'å': '\\aa{}',
  'À': '\\`{A}',
  'Á': "\\'{A}",
  'Ä': '\\"{A}',
  'Å': '\\AA{}',
  'ç': '\\c{c}',
  'Ç': '\\c{C}',
  'è': '\\`{e}',
  'é': "\\'{e}",
  'ê': '\\^{e}',
  'ë': '\\"{e}',
  'È': '\\`{E}',
  'É': "\\'{E}",
  'ì': '\\`{i}',
  'í': "\\'{i}",
  'î': '\\^{i}',
  'ï': '\\"{i}',
  'ñ': '\\~{n}',
  'Ñ': '\\~{N}',
  'ò': '\\`{o}',
  'ó': "\\'{o}",
  'ô': '\\^{o}',
  'ö': '\\"{o}',
  'ø': '\\o{}',
  'Ø': '\\O{}',
  'ù': '\\`{u}',
  'ú': "\\'{u}",
  'û': '\\^{u}',
  'ü': '\\"{u}',
  'Ü': '\\"{U}',
  'ß': '\\ss{}',
  'Č': '\\v{C}',
  'č': '\\v{c}',
  'ć': "\\'{c}",
  'Ġ': '\\.{G}',
  'ł': '\\l{}',
  'Ł': '\\L{}',
  'ń': "\\'{n}",
  'ř': '\\v{r}',
  'Š': '\\v{S}',
  'š': '\\v{s}',
  'Ž': '\\v{Z}',
  'ž': '\\v{z}',
  'ā': '\\={a}',
  'ē': '\\={e}',
  'ī': '\\={i}',
  'ō': '\\={o}',
  'ū': '\\={u}'
};

const TEXT_PUNCT_MAP: Record<string, string> = {
  '§': '\\S{}',
  '–': '--',
  '—': '---',
  '’': "'",
  '‘': '`',
  '“': '``',
  '”': "''",
  '…': '\\ldots{}',
  '•': '\\textbullet{} '
};

const MATH_UNICODE_MAP: Record<string, string> = {
  'Γ': '\\Gamma ',
  'Δ': '\\Delta ',
  'Θ': '\\Theta ',
  'Λ': '\\Lambda ',
  'Ξ': '\\Xi ',
  'Π': '\\Pi ',
  'Σ': '\\Sigma ',
  'Υ': '\\Upsilon ',
  'Φ': '\\Phi ',
  'Ψ': '\\Psi ',
  'Ω': '\\Omega ',
  'α': '\\alpha ',
  'β': '\\beta ',
  'γ': '\\gamma ',
  'δ': '\\delta ',
  'ε': '\\varepsilon ',
  'ϵ': '\\varepsilon ',
  'ζ': '\\zeta ',
  'η': '\\eta ',
  'θ': '\\theta ',
  'ϑ': '\\vartheta ',
  'κ': '\\kappa ',
  'λ': '\\lambda ',
  'μ': '\\mu ',
  'ν': '\\nu ',
  'ξ': '\\xi ',
  'ϖ': '\\varpi ',
  'π': '\\pi ',
  'ρ': '\\rho ',
  'σ': '\\sigma ',
  'τ': '\\tau ',
  'υ': '\\upsilon ',
  'φ': '\\varphi ',
  'ϕ': '\\phi ',
  'χ': '\\chi ',
  'ψ': '\\psi ',
  'ω': '\\omega ',
  'ℂ': '\\mathbb{C}',
  'ℍ': '\\mathbb{H}',
  'ℝ': '\\mathbb{R}',
  'ℤ': '\\mathbb{Z}',
  'ℱ': '\\mathcal{F}',
  'ℋ': '\\mathcal{H}',
  'ℐ': '\\mathcal{I}',
  'ℒ': '\\mathcal{L}',
  'ℛ': '\\mathcal{R}',
  '𝒪': '\\mathcal{O}',
  'ℏ': '\\hbar ',
  'ℓ': '\\ell ',
  '□': '\\Box ',
  '⟨': '\\langle ',
  '⟩': '\\rangle ',
  '≅': '\\cong ',
  '↦': '\\mapsto ',
  '⊣': '\\dashv ',
  '∝': '\\propto ',
  '∘': '\\circ ',
  '∏': '\\prod ',
  '∑': '\\sum ',
  '∈': '\\in ',
  '∉': '\\notin ',
  '∼': '\\sim ',
  '≃': '\\simeq ',
  '𝐱': '\\mathbf{x}',
  '𝐲': '\\mathbf{y}',
  '☉': '\\odot ',
  '⊙': '\\odot ',
  '⊕': '\\oplus ',
  '⊗': '\\otimes ',
  '⊥': '\\perp ',
  '∂': '\\partial ',
  '∫': '\\int ',
  '∇': '\\nabla ',
  '∞': '\\infty ',
  '×': '\\times ',
  '·': '\\cdot ',
  '±': '\\pm ',
  '∓': '\\mp ',
  '≈': '\\approx ',
  '≤': '\\le ',
  '≥': '\\ge ',
  '≪': '\\ll ',
  '≫': '\\gg ',
  '≠': '\\neq ',
  '≡': '\\equiv ',
  '⟺': '\\iff ',
  '↔': '\\leftrightarrow ',
  '→': '\\rightarrow ',
  '⇒': '\\Rightarrow ',
  '−': '-',
  '†': '\\dagger ',
  '‖': '\\|',
  '°': '^\\circ',
  '″': '^{\\prime\\prime}',
  '′': '^{\\prime}',
  '¼': '\\frac{1}{4}',
  '½': '\\frac{1}{2}'
};

const ROMAN_WORDS = new Set([
  'upd', 'obs', 'loc', 'eff', 'core', 'crit', 'rad', 'vac', 'rel', 'tot',
  'eq', 'lin', 'ext', 'int', 'coh', 'env', 'rev', 'irrev', 'smear', 'det',
  'max', 'min', 'grav', 'matter', 'total', 'clock', 'light', 'rest', 'inf',
  'tick', 'ring', 'sat', 'infl', 'norm', 'bare', 'ren', 'th', 'out', 'bulk',
  'PPN', 'GR', 'IGRT', 'LUH', 'BKM', 'QFI', 'GHZ', 'GW', 'EM', 'UV', 'IR',
  'CMB', 'BAO', 'SMBH', 'QNM', 'ISCO', 'ADM', 'LIV', 'LISA', 'EHT', 'GPS',
  'ACES', 'VLBI', 'VLTI', 'CANNEX', 'AION', 'MIGA', 'SNIa', 'LHC', 'LHCb',
  'CODATA', 'SLD', 'diag', 'tr', 'Tr', 'det', 'ln', 'log', 'sin', 'cos',
  'tan', 'sinh', 'cosh', 'exp', 'lim', 'sup', 'Spec', 'Area', 'Var', 'dB'
]);

const MATH_TOKEN_UNICODE_RE =
  /[ΓΔΘΛΞΠΣΥΦΨΩαβγδεϵζηθϑκλμνξϖπρστυφϕχψωℂℍℝℤℱℋℐℒℛ𝒪ℏℓ□⟨⟩≅↦⊣∝∘∏∑∈∉∼≃𝐱𝐲☉⊙⊕⊗⊥∂∫∇∞×·±∓≈≤≥≪≫≠≡⟺↔→⇒−†‖°″′¼½√⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿʳⁱʲᵀ₀₁₂₃₄₅₆₇₈₉₊₋ᵢĤẋȧṖ\u0302\u0303\u0304\u0307\u0308\u20D7]/u;

function escapeTextChar(ch: string): string {
  if (ch in TEXT_LATIN_ACCENTS) return TEXT_LATIN_ACCENTS[ch];
  if (ch in TEXT_PUNCT_MAP) return TEXT_PUNCT_MAP[ch];
  switch (ch) {
    case '\\':
      return '\\textbackslash{}';
    case '{':
      return '\\{';
    case '}':
      return '\\}';
    case '$':
      return '\\$';
    case '&':
      return '\\&';
    case '#':
      return '\\#';
    case '%':
      return '\\%';
    case '_':
      return '\\_';
    case '^':
      return '\\textasciicircum{}';
    case '~':
      return '\\textasciitilde{}';
    case '<':
      return '\\textless{}';
    case '>':
      return '\\textgreater{}';
    case '|':
      return '\\textbar{}';
    default: {
      if (ch in MATH_UNICODE_MAP) return `$${MATH_UNICODE_MAP[ch].trim()}$`;
      if (ch.charCodeAt(0) > 127) return '';
      return ch;
    }
  }
}

function escapeRawText(s: string): string {
  let out = '';
  for (const ch of s) {
    out += escapeTextChar(ch);
  }
  return out;
}

function escapeCodeText(s: string): string {
  return [...s]
    .map((ch) => {
      if (ch === '\\') return '\\textbackslash{}';
      if (ch === '{') return '\\{';
      if (ch === '}') return '\\}';
      if (ch === '$') return '\\$';
      if (ch === '&') return '\\&';
      if (ch === '#') return '\\#';
      if (ch === '%') return '\\%';
      if (ch === '_') return '\\_';
      if (ch === '^') return '\\textasciicircum{}';
      if (ch === '~') return '\\textasciitilde{}';
      if (ch === '–' || ch === '−') return '-';
      if (ch === '—') return '--';
      if (ch in TEXT_LATIN_ACCENTS) return TEXT_LATIN_ACCENTS[ch];
      if (ch in MATH_UNICODE_MAP) return `$${MATH_UNICODE_MAP[ch].trim()}$`;
      if (ch.charCodeAt(0) > 127) return '';
      return ch;
    })
    .join('');
}

function foldCombiningMarksForMath(s: string): string {
  const chars = [...s];
  let out = '';
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    const next = chars[i + 1];
    if (next && next in COMBINED_ACCENTS) {
      const cmd = COMBINED_ACCENTS[next];
      const baseMath =
        ch in PRECOMPOSED_MATH_ACCENTS
          ? PRECOMPOSED_MATH_ACCENTS[ch]
          : ch in MATH_UNICODE_MAP
            ? MATH_UNICODE_MAP[ch].trim()
            : ch;
      out += `${cmd}{${baseMath}}`;
      i++;
    } else if (ch in PRECOMPOSED_MATH_ACCENTS) {
      out += PRECOMPOSED_MATH_ACCENTS[ch];
    } else {
      out += ch;
    }
  }
  return out;
}

/**
 * Converts balanced \sqrt(...) or \sqrt[...] or standalone \sqrt<token> into \sqrt{...}
 * at arbitrary parenthesis nesting depth (e.g. √(Ω_m(1+z′)³ + Ω_Λ)).
 */
function balanceSqrt(tex: string): string {
  let out = '';
  let i = 0;
  while (i < tex.length) {
    if (tex.startsWith('\\sqrt', i) && !/[A-Za-z]/.test(tex[i + 5] ?? '')) {
      let j = i + 5;
      while (j < tex.length && tex[j] === ' ') j++;
      if (tex[j] === '{') {
        out += '\\sqrt{';
        i = j + 1;
        continue;
      }
      if (tex[j] === '(' || tex[j] === '[') {
        const openCh = tex[j];
        const closeCh = openCh === '(' ? ')' : ']';
        let depth = 1;
        let k = j + 1;
        while (k < tex.length && depth > 0) {
          if (tex[k] === openCh) depth++;
          else if (tex[k] === closeCh) depth--;
          k++;
        }
        const inner = balanceSqrt(tex.slice(j + 1, k - (depth === 0 ? 1 : 0)));
        out += `\\sqrt{${inner}}`;
        i = k;
        continue;
      }
      // Single letter/symbol operand like \sqrt h or \sqrt f
      const matchAtom = tex.slice(j).match(/^(\\[A-Za-z]+|[A-Za-z0-9])/);
      if (matchAtom) {
        out += `\\sqrt{${matchAtom[1]}}`;
        i = j + matchAtom[1].length;
        continue;
      }
      out += '\\sqrt{\\,}';
      i = j;
      continue;
    }
    out += tex[i];
    i++;
  }
  return out;
}

function convertUnicodeScriptsToLatex(s: string): string {
  return s
    .replace(SUP_RUN_RE, (run) => `^{${[...run].map((c) => UNICODE_SUP_TO_TEX[c] ?? c).join('')}}`)
    .replace(SUB_RUN_RE, (run) => `_{${[...run].map((c) => UNICODE_SUB_TO_TEX[c] ?? c).join('')}}`);
}

function renderMathBodyToLatex(rawMath: string): string {
  const withScripts = convertUnicodeScriptsToLatex(foldCombiningMarksForMath(rawMath));
  const chars = [...withScripts];
  let s = '';
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    if (ch in MATH_UNICODE_MAP) {
      s += MATH_UNICODE_MAP[ch];
    } else if (ch === '–' || ch === '—') {
      s += '-';
    } else if (ch === '’') {
      s += "'";
    } else if (ch === '…') {
      s += '\\ldots ';
    } else if (ch === '√' || ch === '\u221A') {
      s += '\\sqrt';
    } else if (ch === '&') {
      s += '\\&';
    } else if (ch === '%') {
      s += '\\%';
    } else if (ch === '#') {
      s += '\\#';
    } else if (ch.charCodeAt(0) > 127) {
      s += '';
    } else {
      s += ch;
    }
  }

  // Wrap known multi-letter function names & Roman subscripts/superscripts cleanly
  s = s.replace(
    /\b(Spec|Area|Var|diag|lim|sinh|cosh|sin|cos|tan|exp|ln|log|max|min|sup|inf)\b/g,
    (m) => `\\mathrm{${m}}`
  );
  s = s.replace(/_([A-Za-z0-9]+)/g, (full, word) =>
    ROMAN_WORDS.has(word) || word.length >= 3 ? `_{\\mathrm{${word}}}` : full
  );
  s = balanceSqrt(s);
  return s.replace(/[ ]{2,}/g, ' ').trim();
}

function isMathToken(tok: string): boolean {
  if (!tok) return false;
  if (/[_^]/.test(tok)) return true;
  if (MATH_TOKEN_UNICODE_RE.test(tok)) return true;
  if (/^[|⟨‖].*[|⟩‖]$/.test(tok) && tok.length > 2) return true;
  if (/^[A-Za-z][′″']+$/.test(tok)) return true;
  if (/^[A-Za-z]\/[A-Za-z]$/.test(tok)) return true;
  return false;
}

function normalizeMathPunctBoundaries(tok: string): { lead: string; core: string; trail: string } {
  let core = tok;
  let lead = '';
  let trail = '';

  const proseHyphen = core.match(/^([A-Za-z]{2,}-)(.+)$/);
  if (proseHyphen && isMathToken(proseHyphen[2]) && !/[_^]/.test(proseHyphen[1])) {
    lead += proseHyphen[1];
    core = proseHyphen[2];
  }

  while (core.length > 1 && /[.,;:!?]$/.test(core)) {
    trail = core[core.length - 1] + trail;
    core = core.slice(0, -1);
  }
  const openParens = (core.match(/\(/g) || []).length;
  const closeParens = (core.match(/\)/g) || []).length;
  if (openParens > closeParens && core.startsWith('(')) {
    lead += '(';
    core = core.slice(1);
  } else if (closeParens > openParens && core.endsWith(')')) {
    trail = ')' + trail;
    core = core.slice(0, -1);
  }
  const openSq = (core.match(/\[/g) || []).length;
  const closeSq = (core.match(/\]/g) || []).length;
  if (openSq > closeSq && core.startsWith('[')) {
    lead += '[';
    core = core.slice(1);
  } else if (closeSq > openSq && core.endsWith(']')) {
    trail = ']' + trail;
    core = core.slice(0, -1);
  }
  if (core.startsWith('"') || core.startsWith('“')) {
    lead += core.startsWith('“') ? '``' : '"';
    core = core.slice(1);
  }
  if (core.endsWith('"') || core.endsWith('”')) {
    trail = (core.endsWith('”') ? "''" : '"') + trail;
    core = core.slice(0, -1);
  }
  return { lead, core, trail };
}

function splitPreservingBraces(chunk: string): string[] {
  const parts: string[] = [];
  let cur = '';
  let depth = 0;

  for (let i = 0; i < chunk.length; i++) {
    const ch = chunk[i];
    if (ch === '{') {
      depth++;
      cur += ch;
    } else if (ch === '}') {
      if (depth > 0) depth--;
      cur += ch;
    } else if (depth === 0 && (/\s/.test(ch) || ch === '—' || ch === '–')) {
      if (cur) {
        parts.push(cur);
        cur = '';
      }
      if (ch === '—' || ch === '–') {
        parts.push(ch);
      } else {
        let ws = ch;
        while (i + 1 < chunk.length && /\s/.test(chunk[i + 1])) {
          ws += chunk[++i];
        }
        parts.push(ws);
      }
    } else {
      cur += ch;
    }
  }
  if (cur) parts.push(cur);
  return parts;
}

function convertProseLineToLatex(line: string): string {
  const parts = splitPreservingBraces(line);
  const items: Array<{ kind: 'ws' | 'dash' | 'text' | 'math'; val: string; raw?: string }> = [];

  for (const p of parts) {
    if (!p) continue;
    if (/^\s+$/.test(p)) {
      items.push({ kind: 'ws', val: p });
      continue;
    }
    if (p === '—' || p === '–') {
      items.push({ kind: 'dash', val: p === '—' ? '---' : '--' });
      continue;
    }

    const { lead, core, trail } = normalizeMathPunctBoundaries(p);
    const isOperatorToken = /^(=|<|>|\+|−|-|\/|→|⇒|↔|≈|≃|≡|≤|≥|≪|≫|≠|∝|∈|∉|⊂|⊕|⊗|×|·|±|:|\|)$/.test(core);
    const isApproxMath = /^~\d/.test(core) && MATH_TOKEN_UNICODE_RE.test(core);

    if (core && (isMathToken(core) || isOperatorToken || isApproxMath)) {
      if (lead) items.push({ kind: 'text', val: escapeRawText(lead) });
      // Bare numeric-like hyphenated dates such as 2026-04 stay plain text unless unicode math
      if (/^[\d.+\-\/]+$/.test(core) && !isOperatorToken && !SUP_CHAR_RE.test(core) && !SUB_CHAR_RE.test(core)) {
        items.push({ kind: 'text', val: escapeRawText(core), raw: core });
      } else {
        items.push({ kind: 'math', val: renderMathBodyToLatex(core), raw: core });
      }
      if (trail) items.push({ kind: 'text', val: escapeRawText(trail) });
    } else {
      items.push({ kind: 'text', val: escapeRawText(p), raw: p });
    }
  }

  const merged: Array<{ kind: 'text' | 'math'; val: string }> = [];
  let idx = 0;
  while (idx < items.length) {
    const cur = items[idx];
    if (cur.kind !== 'math') {
      merged.push({ kind: 'text', val: cur.val });
      idx++;
      continue;
    }
    let mathAcc = cur.val;
    let j = idx + 1;
    while (j < items.length) {
      if (items[j].kind === 'math') {
        mathAcc += ' ' + items[j].val;
        j++;
      } else if (
        items[j].kind === 'ws' &&
        j + 1 < items.length &&
        (items[j + 1].kind === 'math' ||
          (items[j + 1].raw && /^[+-]?\d+(?:\.\d+)?$/.test(items[j + 1].raw!)))
      ) {
        if (items[j + 1].kind === 'math') {
          mathAcc += ' ' + items[j + 1].val;
          j += 2;
        } else {
          mathAcc += ' ' + items[j + 1].raw!;
          j += 2;
        }
      } else {
        break;
      }
    }
    const cleaned = mathAcc.replace(/\s+/g, ' ').trim();
    merged.push({ kind: 'math', val: `$${cleaned}$` });
    idx = j;
  }

  return merged.map((m) => m.val).join('');
}

function expandCitationMatch(inner: string): string | null {
  const tokens = inner.split(',').map((t) => t.trim()).filter(Boolean);
  if (tokens.length === 0) return null;
  const keys: string[] = [];
  for (const tok of tokens) {
    const rm = tok.match(/^(\d+)\s*[–\-]\s*(\d+)$/);
    if (rm) {
      const a = Number(rm[1]);
      const b = Number(rm[2]);
      if (a < 1 || b > CLOCK_SPEED_REFERENCES.length || a > b || b - a > 15) return null;
      for (let k = a; k <= b; k++) keys.push(`ref${k}`);
    } else if (/^\d+$/.test(tok)) {
      const n = Number(tok);
      if (n < 1 || n > CLOCK_SPEED_REFERENCES.length) return null;
      keys.push(`ref${n}`);
    } else {
      return null;
    }
  }
  return keys.length > 0 ? `\\cite{${keys.join(',')}}` : null;
}

function texProse(input: string, allowCitations = true): string {
  if (!input) return '';
  const normalizedInput = input.replace(/\r\n/g, '\n');
  const PROTECTED_RE =
    /(`[^`]+`|https?:\/\/[^\s)>,;]+|DOI:\s*[^\s)>,;]+|arXiv:\s*[^\s)>,;]+|\bBulaqueña\b|\[[0-9,\s–\-]+\](?:\s*[–\-]\s*\[\d+\])?)/g;

  const pieces = normalizedInput.split(PROTECTED_RE);
  const out: string[] = [];

  for (let i = 0; i < pieces.length; i++) {
    const piece = pieces[i];
    if (!piece) continue;
    if (i % 2 === 1) {
      if (piece.startsWith('`') && piece.endsWith('`')) {
        out.push(`\\texttt{${escapeCodeText(piece.slice(1, -1))}}`);
      } else if (piece.startsWith('http://') || piece.startsWith('https://')) {
        out.push(`\\url{${piece}}`);
      } else if (piece.startsWith('DOI:') || piece.startsWith('arXiv:')) {
        out.push(`\\texttt{${escapeCodeText(piece)}}`);
      } else if (piece === 'Bulaqueña') {
        out.push('Bulaque\\~{n}a');
      } else if (piece.startsWith('[') && allowCitations) {
        const crossDash = piece.match(/^\[(\d+)\]\s*[–\-]\s*\[(\d+)\]$/);
        if (crossDash) {
          const a = Number(crossDash[1]);
          const b = Number(crossDash[2]);
          if (a >= 1 && b <= CLOCK_SPEED_REFERENCES.length && a <= b && b - a <= 15) {
            const keys: string[] = [];
            for (let k = a; k <= b; k++) keys.push(`ref${k}`);
            out.push(`\\cite{${keys.join(',')}}`);
            continue;
          }
        } else {
          const singleMatch = piece.match(/^\[([0-9,\s–\-]+)\]$/);
          if (singleMatch) {
            const cited = expandCitationMatch(singleMatch[1]);
            if (cited) {
              out.push(cited);
              continue;
            }
          }
        }
        out.push(convertProseLineToLatex(piece));
      } else {
        out.push(escapeRawText(piece));
      }
    } else {
      const lines = piece.split('\n');
      out.push(lines.map((ln) => convertProseLineToLatex(ln)).join(' \\\\\n'));
    }
  }
  return out.join('');
}

function visibleMathLength(expr: string): number {
  return expr
    .replace(/\\(?:mathbb|mathcal|mathrm|mathbf|mathit|text|sqrt|frac|hat|tilde|bar|dot|ddot|vec|tag|label)/g, '')
    .replace(/\\[A-Za-z]+/g, 'x')
    .replace(/[{}^_\s]/g, '').length;
}

function wrapLongDisplayMathSegment(segment: string, maxVisLen = 74): string[] {
  if (visibleMathLength(segment) <= maxVisLen) return [segment];
  const splitOps = ['\\quad ', ';\\quad', '\\Longrightarrow', '\\Rightarrow', '\\iff', '=', ',\\quad', ',\\;'];
  const candidates: Array<{ pos: number; opLen: number }> = [];
  let braceDepth = 0;
  let parenDepth = 0;
  for (let i = 0; i < segment.length; i++) {
    const ch = segment[i];
    if (ch === '{') braceDepth++;
    else if (ch === '}') {
      if (braceDepth > 0) braceDepth--;
    } else if (ch === '(' || ch === '[') parenDepth++;
    else if (ch === ')' || ch === ']') {
      if (parenDepth > 0) parenDepth--;
    } else if (braceDepth === 0 && parenDepth === 0) {
      for (const op of splitOps) {
        if (segment.startsWith(op, i)) {
          if (i > 12 && i + op.length < segment.length - 8) {
            candidates.push({ pos: i, opLen: op.length });
          }
          break;
        }
      }
    }
  }
  if (candidates.length === 0) return [segment];
  const targetMid = segment.length * 0.48;
  candidates.sort((a, b) => Math.abs(a.pos - targetMid) - Math.abs(b.pos - targetMid));
  const best = candidates[0];
  const opStr = segment.slice(best.pos, best.pos + best.opLen);
  const left = segment.slice(0, best.pos).trim();
  const right = (opStr.startsWith(',') || opStr === '\\quad ' || opStr === ';\\quad'
    ? segment.slice(best.pos + best.opLen)
    : segment.slice(best.pos)
  ).trim();
  if (!left || !right) return [segment];
  return [
    ...wrapLongDisplayMathSegment(left, maxVisLen),
    ...wrapLongDisplayMathSegment(right, maxVisLen)
  ];
}

function renderTexEquation(eq: ClockPaperEquation, includeNotes = true): string {
  const cleanHtml = eq.unicodeHtml
    .replace(/<sup>(.*?)<\/sup>/gi, '^{$1}')
    .replace(/<sub>(.*?)<\/sub>/gi, '_{$1}')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, '; ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');

  const rawBody = renderMathBodyToLatex(cleanHtml);
  const wrappedLines = rawBody
    .split(/\s*;\s*/)
    .flatMap((seg) => wrapLongDisplayMathSegment(seg.trim(), 74))
    .filter(Boolean);

  const cleanTag = eq.label.replace(/^\(|\)$/g, '').trim();
  const safeLabel = cleanTag.replace(/[^A-Za-z0-9.\-]/g, '-').toLowerCase();

  const eqBlock =
    wrappedLines.length > 1
      ? `\\begin{equation}\\label{eq:${safeLabel}}\\tag{${cleanTag}}\n\\begin{gathered}\n  ${wrappedLines.join(' \\\\\n  ')}\n\\end{gathered}\n\\end{equation}`
      : `\\begin{equation}\\label{eq:${safeLabel}}\\tag{${cleanTag}}\n  ${wrappedLines[0] ?? rawBody}\n\\end{equation}`;

  const parts = [eqBlock];
  if (eq.plainMath) {
    parts.push(`\\noindent\\textbf{Plain Math Equation:} \\texttt{${escapeCodeText(eq.plainMath)}}`);
  }
  if (includeNotes) {
    parts.push(`\\noindent{\\small\\textit{${texProse(eq.caption)}}} \\\\ {\small ${texProse(eq.plainMeaning)}}`);
  }
  if (eq.provenance) {
    parts.push(`\\noindent\\textbf{Provenance:} ${texProse(eq.provenance)}`);
  }
  if (eq.derivationSteps?.length) {
    parts.push(`\\begin{enumerate}\n${eq.derivationSteps.map((s) => `\\item ${texProse(s)}`).join('\n')}\n\\end{enumerate}`);
  }
  return parts.join('\n\n');
}

function makeLongTable(
  caption: string,
  colSpec: string,
  headers: string[],
  rows: string[][]
): string {
  const numCols = headers.length;
  const headerLine = `${headers.map((h) => `\\textbf{${texProse(h, false)}}`).join(' & ')} \\\\`;
  const rowLines = rows
    .map((r) => `${r.map((cell) => texProse(cell, false)).join(' & ')} \\\\`)
    .join('\n\\midrule\n');

  return `{\\footnotesize\\setlength{\\tabcolsep}{4pt}
\\begin{longtable}{@{} ${colSpec} @{}}
\\caption{${texProse(caption, false)}} \\\\
\\toprule
${headerLine}
\\midrule
\\endfirsthead
\\multicolumn{${numCols}}{@{}l}{\\textit{${texProse(caption, false)} (continued)}} \\\\
\\toprule
${headerLine}
\\midrule
\\endhead
\\bottomrule
\\endfoot
${rowLines}
\\end{longtable}}`;
}

function safeHeadingTitle(raw: string): string {
  const tex = texProse(raw, false);
  const plain = raw
    .replace(/[–—]/g, '-')
    .replace(/−/g, '-')
    .replace(/×/g, 'x')
    .replace(/[^\x20-\x7E]/g, '');
  if (tex.includes('$') || tex.includes('\\')) {
    return `\\texorpdfstring{${tex}}{${escapeRawText(plain)}}`;
  }
  return tex;
}

export function buildClockSpeedLatex(): string {
  const renderTexChapterTables = (chapterNum: number): string => {
    if (chapterNum === 4) {
      return makeLongTable(
        'Everyday Tests Where Curved Spacetime and Slowed Update Speed Agree',
        'L{0.18} L{0.12} L{0.16} L{0.15} L{0.15} L{0.12}',
        ['Experiment', 'Scale', 'Observed', 'GR', 'Update Rate', 'Status'],
        TABLE_4_1_EVERYDAY_TESTS.map((r) => [
          r.experiment,
          r.heightOrOrbit,
          r.observedResult,
          r.curvedSpacetimePred,
          r.updateRatePred,
          r.discriminatingPower
        ])
      );
    }
    if (chapterNum === 5) {
      return [
        makeLongTable(
          'Solar-System, Gyroscopic, and Pulsar PPN Tests',
          'L{0.18} L{0.18} L{0.16} L{0.14} L{0.14} L{0.10}',
          ['Test', 'Measured', 'Pure Scalar (γ=0)', 'Curved GR (γ=1)', 'Dual Update (γ=1)', 'Verdict'],
          TABLE_5_1_STRESS_TESTS.map((r) => [
            r.testName,
            r.measuredValue,
            r.pureClockSlowingGamma0,
            r.curvedSpaceTimeGR,
            r.dualUpdateRateGamma1,
            r.verdictOnPureScalar
          ])
        ),
        makeLongTable(
          'Complete PPN Parameter Bounds (Will 2014)',
          'L{0.08} L{0.20} L{0.18} L{0.16} L{0.16} L{0.14}',
          ['Param', 'Physical Meaning', 'Will (2014) Bound', 'LUH-Scalar', 'Dual Update / GR', 'Primary Experiment'],
          TABLE_5_2_PPN_BOUNDS.map((r) => [
            r.parameter,
            r.physicalMeaning,
            r.will2014Bound,
            r.luhScalarValue,
            r.dualUpdateGRValue,
            r.primaryExperiment
          ])
        ),
        makeLongTable(
          'Step-by-Step Comparison Against Will (2014) PPN Derivation',
          'L{0.16} L{0.26} L{0.28} L{0.18}',
          ['Derivation Stage', 'Will (2014) Canonical PPN', 'Present Paper Derivation', 'Status'],
          TABLE_5_3_WILL_COMPARISON.map((r) => [
            r.derivationStage,
            r.will2014CanonicalPpn,
            r.presentPaperDerivation,
            r.statusRelativeToWill
          ])
        )
      ].join('\n\n');
    }
    if (chapterNum === 6) {
      return makeLongTable(
        'Black Hole Horizons, Shadows, Ringdowns, and Sgr A* Orbits',
        'L{0.18} L{0.16} L{0.18} L{0.18} L{0.18}',
        ['Observable', 'Facility', 'Standard GR', 'Literal Update Halt', 'Covariant Capacity'],
        TABLE_6_1_BLACK_HOLES.map((r) => [
          r.observable,
          r.instrumentAndTarget,
          r.standardGR,
          r.literalUpdateHaltModel,
          r.covariantUpdateCapacityIGRT
        ])
      );
    }
    if (chapterNum === 8) {
      return [
        makeLongTable(
          'Summary Prediction Matrix and Falsification Criteria',
          'L{0.14} L{0.10} L{0.14} L{0.14} L{0.14} L{0.10} L{0.14}',
          ['Phenomenon', 'Status', 'Curved GR', 'Pure Scalar', 'Dual Update / IGRT', 'Outcome', 'What Would Falsify'],
          TABLE_8_1_PREDICTIONS_MATRIX.map((r) => [
            r.phenomenon,
            r.statusBadge,
            r.curvedSpacetimeGR,
            r.pureClockSlowing,
            r.fullDualUpdateRateIGRT,
            r.empiricalWinner,
            r.falsificationCriterion
          ])
        ),
        makeLongTable(
          'Next-Generation Experimental Roadmap (2026-2035)',
          'L{0.18} L{0.12} L{0.18} L{0.18} L{0.22}',
          ['Facility', 'Window', 'Observable', 'Precision', 'Discriminating Reach'],
          TABLE_8_2_NEXT_GEN_ROADMAP.map((r) => [
            r.facility,
            r.timeframe,
            r.observable,
            r.targetPrecision,
            r.discriminatingReach
          ])
        ),
        makeLongTable(
          'Multi-Survey Empirical Grounding, Calibration, and Systematics',
          'L{0.16} L{0.16} L{0.18} L{0.20} L{0.18}',
          ['Regime', 'Dataset', 'Bound', 'Calibration', 'Discrimination'],
          TABLE_8_3_MULTISURVEY_EMPIRICAL.map((r) => [
            r.regimeAndSurvey,
            r.keyDataset,
            r.observedBound,
            r.systematicsAndCalibration,
            r.modelDiscrimination
          ])
        ),
        makeLongTable(
          'Tabletop Experimental Protocol, Budget, and Decision Thresholds',
          'L{0.18} L{0.14} L{0.18} L{0.18} L{0.20}',
          ['Subsystem', 'Sensitivity', 'Error Budget', 'Schedule', 'Falsification'],
          TABLE_8_4_TABLETOP_PROTOCOL.map((r) => [
            r.subsystem,
            r.targetSensitivity,
            r.errorBudgetItem,
            r.costAndSchedule,
            r.falsificationAndPower
          ])
        )
      ].join('\n\n');
    }
    return '';
  };

  const rawLatex = `\\documentclass[11pt,a4paper]{article}
\\usepackage[a4paper,margin=22mm]{geometry}
\\usepackage[T1]{fontenc}
\\usepackage[utf8]{inputenc}
\\usepackage{lmodern}
\\usepackage{amsmath,amssymb,array,booktabs,longtable,ragged2e,xurl,microtype}
\\usepackage[hidelinks,breaklinks=true]{hyperref}
\\emergencystretch=1.5em
\\newcolumntype{L}[1]{>{\\RaggedRight\\arraybackslash}p{#1\\textwidth}}

\\hypersetup{
  pdftitle={${escapeRawText(CLOCK_SPEED_META.title)}},
  pdfauthor={${escapeRawText(CLOCK_SPEED_META.authors.map((a) => a.name).join(', '))}}
}

\\title{${texProse(CLOCK_SPEED_META.title, false)} \\\\ \\large\\textit{${texProse(CLOCK_SPEED_META.subtitle, false)}}}
\\author{${CLOCK_SPEED_META.authors.map((a) => `${texProse(a.name, false)} (${texProse(a.affiliation, false)})`).join(' \\and ')}}
\\date{${escapeRawText(CLOCK_SPEED_META.date)}}

\\begin{document}
\\sloppy
\\maketitle

\\begin{abstract}
${CLOCK_SPEED_ABSTRACT.map((p) => texProse(p)).join('\n\n')}
\\end{abstract}

\\noindent\\textbf{Keywords:} ${CLOCK_SPEED_META.keywords.map((k) => texProse(k, false)).join('; ')}.

\\tableofcontents

\\section*{List of Illustrations}
\\begin{description}
${CLOCK_SPEED_PLATES_INDEX.map((pl) => `  \\item[${texProse(pl.plateNumber, false)} (Ch. ${pl.anchorChapter})] ${texProse(pl.title)}: ${texProse(pl.caption)}`).join('\n')}
${CLOCK_SPEED_FIGURES.map((fg) => `  \\item[${texProse(fg.figureNumber, false)} (Ch. ${fg.anchorChapter})] ${texProse(fg.title)}: ${texProse(fg.caption)}`).join('\n')}
\\end{description}

${CLOCK_SPEED_CHAPTERS.map(
  (ch) => `\\clearpage
\\section{${safeHeadingTitle(ch.title)}}
\\textit{${texProse(ch.leadSummary)}}

\\paragraph*{Introduction}
${ch.chapterIntro.map((p) => texProse(p)).join('\n\n')}

${ch.subsections
  .map(
    (sub) => `\\subsection{${safeHeadingTitle(sub.title)}}
${sub.paragraphs.map((p) => texProse(p)).join('\n\n')}${
      sub.equation ? `\n\n${renderTexEquation(sub.equation, true)}` : ''
    }`
  )
  .join('\n\n')}

${renderTexChapterTables(ch.number)}`
).join('\n\n')}

\\clearpage
\\section*{Glossary}
\\begin{description}
${CLOCK_SPEED_GLOSSARY.map((g) => `  \\item[${texProse(g.term, false)}] ${texProse(g.definition)}`).join('\n')}
\\end{description}

${makeLongTable(
  'Glossary of Symbols and Physical Conventions',
  'L{0.14} L{0.20} L{0.16} L{0.38}',
  ['Symbol', 'Quantity', 'Units / Domain', 'Definition'],
  CLOCK_SPEED_SYMBOL_GLOSSARY.map((s) => [s.symbol, s.name, s.unitsOrDomain, s.definition])
)}

\\appendix
${CLOCK_SPEED_APPENDICES.map(
  (a) => `\\clearpage
\\section{${safeHeadingTitle(a.title)}}
\\textit{${texProse(a.summary)}}

${a.equations.map((eq) => renderTexEquation(eq, true)).join('\n\n')}

${
  a.theoremBoxes?.length
    ? a.theoremBoxes
        .map(
          (tb) =>
            `\\noindent\\textbf{${texProse(tb.kind, false)} ${texProse(tb.number, false)}: ${texProse(tb.title, false)}.} ${texProse(tb.statement)}\n\\begin{enumerate}\n${tb.proofSteps.map((s) => `\\item ${texProse(s)}`).join('\n')}\n\\end{enumerate}\n\\textit{Provenance:} ${texProse(tb.sourceNote)}`
        )
        .join('\n\n')
    : ''
}

${
  a.workedExamples?.length
    ? a.workedExamples
        .map(
          (wx) =>
            `\\noindent\\textbf{${texProse(wx.title, false)}.} \\textit{${texProse(wx.setup)}}\n\\begin{enumerate}\n${wx.steps.map((s) => `\\item ${texProse(s)}`).join('\n')}\n\\end{enumerate}\n${renderTexEquation(wx.resultEquation, true)}\n\\textit{Takeaway:} ${texProse(wx.takeaway)}`
        )
        .join('\n\n')
    : ''
}

${
  a.reproducibilityLedger?.length
    ? makeLongTable(
        'Reproducibility and Numerical Verification Protocol',
        'L{0.20} L{0.24} L{0.22} L{0.22}',
        ['Checkpoint', 'Formula', 'Reference Constants', 'Computed Output'],
        a.reproducibilityLedger.map((r) => [
          r.checkpoint,
          r.formula,
          r.referenceConstants,
          r.computedOutput
        ])
      )
    : ''
}

${a.paragraphs.map((p) => texProse(p)).join('\n\n')}`
).join('\n\n')}

\\clearpage
\\begin{thebibliography}{99}
${CLOCK_SPEED_REFERENCES.map((r) => `\\bibitem{ref${r.id}} ${texProse(r.citation, false)}`).join('\n')}
\\end{thebibliography}

\\end{document}
`;

  // Final strict 7-bit ASCII guarantee so pdflatex compiles cleanly without UTF-8 symbol crashes
  return rawLatex.replace(/[^\x00-\x7F]/g, '');
}
