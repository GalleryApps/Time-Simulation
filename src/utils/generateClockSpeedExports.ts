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
  TABLE_6_1_BLACK_HOLES,
  TABLE_8_1_PREDICTIONS_MATRIX,
  TABLE_8_2_NEXT_GEN_ROADMAP,
  CLOCK_SPEED_GLOSSARY,
  CLOCK_SPEED_APPENDICES,
  CLOCK_SPEED_REFERENCES,
  type ClockPaperEquation,
  type ClockPaperTheoremBox,
  type ClockPaperWorkedExample
} from '../types/clockSpeedPaperData';
import { CLOCK_SPEED_FIGURES } from '../types/clockSpeedFigures';
import { formatSvgMathMarkup } from './formatMathUnicode';

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
      <h3>Table 8.1 · Summary Prediction Matrix: Curved Geometry vs. Slowed Update Speed</h3>
      <table>
        <thead><tr><th>Phenomenon</th><th>Curved Spacetime (GR)</th><th>Pure Clock-Slowing</th><th>Dual Update / IGRT</th><th>Outcome</th></tr></thead>
        <tbody>
          ${TABLE_8_1_PREDICTIONS_MATRIX.map((r) => `<tr><td>${escapeHtml(r.phenomenon)}</td><td>${escapeHtml(r.curvedSpacetimeGR)}</td><td>${escapeHtml(r.pureClockSlowing)}</td><td>${escapeHtml(r.fullDualUpdateRateIGRT)}</td><td>${escapeHtml(r.empiricalWinner)}</td></tr>`).join('')}
        </tbody>
      </table>
      <h3>Table 8.2 · Next-Generation Experimental Roadmap (2026–2035)</h3>
      <table>
        <thead><tr><th>Facility</th><th>Window</th><th>Observable</th><th>Target Precision</th><th>Discriminating Reach</th></tr></thead>
        <tbody>
          ${TABLE_8_2_NEXT_GEN_ROADMAP.map((r) => `<tr><td>${escapeHtml(r.facility)}</td><td>${escapeHtml(r.timeframe)}</td><td>${escapeHtml(r.observable)}</td><td>${escapeHtml(r.targetPrecision)}</td><td>${escapeHtml(r.discriminatingReach)}</td></tr>`).join('')}
        </tbody>
      </table>`;
  }
  return '';
}

export function buildClockSpeedSelfContainedHtml(): string {
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
  @media print { .chapter { page-break-before: always; } }
  .eq-box { background: #EDF5F6; border: 1px solid #186876; padding: 1rem 1.25rem; margin: 1.4rem 0; border-radius: 6px; }
  .eq-math { text-align: center; font-size: 1.05rem; color: #2E0820; }
  .eq-num { float: right; font-family: monospace; font-size: 0.85rem; color: #661447; }
  .eq-cap { font-size: 0.86rem; color: #0B3942; margin-top: 0.5rem; text-align: center; font-style: italic; }
  .eq-meaning { font-size: 0.82rem; color: #0F3D2B; margin-top: 0.25rem; text-align: center; }
  .deriv-list { font-size: 0.82rem; color: #062429; margin: 0.6rem 0 0.4rem; padding-left: 1.2rem; }
  .theorem-box { background: #F7EEF3; border: 1px solid #831B5B; padding: 1.1rem 1.35rem; margin: 1.4rem 0; border-radius: 6px; }
  .worked-box { background: #EEF5F1; border: 1px solid #17573E; padding: 1.1rem 1.35rem; margin: 1.4rem 0; border-radius: 6px; }
  .box-title { font-weight: 600; color: #4A0E33; margin-bottom: 0.5rem; }
  .box-note { font-family: monospace; font-size: 0.78rem; color: #11505C; margin-top: 0.5rem; }
  table { width: 100%; border-collapse: collapse; margin: 1.6rem 0; font-size: 0.86rem; }
  th { background: #EDF5F6; color: #062429; text-align: left; padding: 0.55rem; border: 1px solid #278594; }
  td { padding: 0.5rem; border: 1px solid #C46D9E; vertical-align: top; }
  tr:nth-child(even) td { background: #EEF5F1; }
  figure { margin: 2rem 0; padding: 1rem; border: 1px solid #186876; background: #FFFFFF; }
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
  ${chaptersHtml}
  <h2>Glossary</h2>
  ${CLOCK_SPEED_GLOSSARY.map((g) => `<p><strong>${escapeHtml(g.term)}${g.acronym ? ` (${escapeHtml(g.acronym)})` : ''}:</strong> ${escapeHtml(g.definition)}</p>`).join('')}
  <h2>Appendices</h2>
  ${appendicesHtml}
  <h2>References</h2>
  ${CLOCK_SPEED_REFERENCES.map((r) => `<p>[${r.id}] ${escapeHtml(r.citation)}</p>`).join('')}
</main>
</body>
</html>`;
}

const UNICODE_SUP_TO_TEX: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
  '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  '⁺': '+', '⁻': '-', 'ⁿ': 'n'
};

const UNICODE_SUB_TO_TEX: Record<string, string> = {
  '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
  '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
  '₊': '+', '₋': '-'
};

function convertUnicodeScriptsToLatex(s: string): string {
  return s
    .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿ]+/g, (run) => `^{${[...run].map((c) => UNICODE_SUP_TO_TEX[c] ?? c).join('')}}`)
    .replace(/[₀₁₂₃₄₅₆₇₈₉₊₋]+/g, (run) => `_{${[...run].map((c) => UNICODE_SUB_TO_TEX[c] ?? c).join('')}}`);
}

export function buildClockSpeedLatex(): string {
  const escTex = (s: string) =>
    s
      .replace(/\\/g, '\\textbackslash{}')
      .replace(/&/g, '\\&')
      .replace(/%/g, '\\%')
      .replace(/#/g, '\\#')
      .replace(/_/g, '\\_')
      .replace(/\$/g, '\\$')
      .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿ]+/g, (run) => `$^{${[...run].map((c) => UNICODE_SUP_TO_TEX[c] ?? c).join('')}}$`)
      .replace(/[₀₁₂₃₄₅₆₇₈₉₊₋]+/g, (run) => `$_{${[...run].map((c) => UNICODE_SUB_TO_TEX[c] ?? c).join('')}}$`)
      .replace(/α/g, '$\\alpha$')
      .replace(/β/g, '$\\beta$')
      .replace(/γ/g, '$\\gamma$')
      .replace(/δ/g, '$\\delta$')
      .replace(/ε/g, '$\\varepsilon$')
      .replace(/η/g, '$\\eta$')
      .replace(/θ/g, '$\\theta$')
      .replace(/κ/g, '$\\kappa$')
      .replace(/λ/g, '$\\lambda$')
      .replace(/μ/g, '$\\mu$')
      .replace(/ν/g, '$\\nu$')
      .replace(/ϖ/g, '$\\varpi$')
      .replace(/π/g, '$\\pi$')
      .replace(/ρ/g, '$\\rho$')
      .replace(/σ/g, '$\\sigma$')
      .replace(/τ/g, '$\\tau$')
      .replace(/φ/g, '$\\phi$')
      .replace(/ω/g, '$\\omega$')
      .replace(/Δ/g, '$\\Delta$')
      .replace(/Φ/g, '$\\Phi$')
      .replace(/Λ/g, '$\\Lambda$')
      .replace(/Ω/g, '$\\Omega$')
      .replace(/∞/g, '$\\infty$')
      .replace(/ℓ/g, '$\\ell$')
      .replace(/ℏ/g, '$\\hbar$')
      .replace(/☉/g, '$\\odot$')
      .replace(/⊙/g, '$\\odot$')
      .replace(/⊕/g, '$\\oplus$')
      .replace(/∂/g, '$\\partial$')
      .replace(/∫/g, '$\\int$')
      .replace(/∇/g, '$\\nabla$')
      .replace(/√/g, '$\\sqrt{\\,}$')
      .replace(/×/g, '$\\times$')
      .replace(/·/g, '$\\cdot$')
      .replace(/±/g, '$\\pm$')
      .replace(/≈/g, '$\\approx$')
      .replace(/≤/g, '$\\le$')
      .replace(/≥/g, '$\\ge$')
      .replace(/≪/g, '$\\ll$')
      .replace(/≫/g, '$\\gg$')
      .replace(/≠/g, '$\\neq$')
      .replace(/≡/g, '$\\equiv$')
      .replace(/⟺/g, '$\\iff$')
      .replace(/→/g, '$\\rightarrow$')
      .replace(/⇒/g, '$\\Rightarrow$')
      .replace(/−/g, '-')
      .replace(/°/g, '$^\\circ$')
      .replace(/″/g, '$^{\\prime\\prime}$')
      .replace(/′/g, '$^{\\prime}$')
      .replace(/–/g, '--')
      .replace(/—/g, '---');

  const htmlEqToLatex = (eq: ClockPaperEquation): string => {
    const withHtmlScripts = eq.unicodeHtml
      .replace(/<sup>(.*?)<\/sup>/gi, '^{$1}')
      .replace(/<sub>(.*?)<\/sub>/gi, '_{$1}')
      .replace(/<[^>]+>/g, '')
      .replace(/&nbsp;/g, '\\quad ')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&');

    const body = convertUnicodeScriptsToLatex(withHtmlScripts)
      .replace(/α/g, '\\alpha ')
      .replace(/β/g, '\\beta ')
      .replace(/γ/g, '\\gamma ')
      .replace(/δ/g, '\\delta ')
      .replace(/θ/g, '\\theta ')
      .replace(/φ/g, '\\phi ')
      .replace(/π/g, '\\pi ')
      .replace(/η/g, '\\eta ')
      .replace(/κ/g, '\\kappa ')
      .replace(/λ/g, '\\lambda ')
      .replace(/μ/g, '\\mu ')
      .replace(/ν/g, '\\nu ')
      .replace(/ϖ/g, '\\varpi ')
      .replace(/ρ/g, '\\rho ')
      .replace(/σ/g, '\\sigma ')
      .replace(/τ/g, '\\tau ')
      .replace(/ω/g, '\\omega ')
      .replace(/Δ/g, '\\Delta ')
      .replace(/Φ/g, '\\Phi ')
      .replace(/Λ/g, '\\Lambda ')
      .replace(/Ω/g, '\\Omega ')
      .replace(/∞/g, '\\infty ')
      .replace(/ℓ/g, '\\ell ')
      .replace(/ℏ/g, '\\hbar ')
      .replace(/☉/g, '\\odot ')
      .replace(/⊙/g, '\\odot ')
      .replace(/⊕/g, '\\oplus ')
      .replace(/𝐱/g, '\\mathbf{x}')
      .replace(/r̄/g, '\\bar{r}')
      .replace(/∂/g, '\\partial ')
      .replace(/∫/g, '\\int ')
      .replace(/∇/g, '\\nabla ')
      .replace(/√/g, '\\sqrt ')
      .replace(/×/g, '\\times ')
      .replace(/·/g, '\\cdot ')
      .replace(/≈/g, '\\approx ')
      .replace(/≤/g, '\\le ')
      .replace(/≥/g, '\\ge ')
      .replace(/≪/g, '\\ll ')
      .replace(/≫/g, '\\gg ')
      .replace(/≠/g, '\\neq ')
      .replace(/≡/g, '\\equiv ')
      .replace(/⟺/g, '\\iff ')
      .replace(/→/g, '\\rightarrow ')
      .replace(/⇒/g, '\\Rightarrow ')
      .replace(/−/g, '-')
      .replace(/″/g, '^{\\prime\\prime}')
      .replace(/′/g, '^{\\prime}');
    return `${body.trim()} \\quad \\text{${escTex(eq.label)}}`;
  };

  const renderTexChapterTables = (chapterNum: number): string => {
    if (chapterNum === 4) {
      return `\\begin{table}[htbp]
\\centering
\\caption{Everyday Tests Where Curved Spacetime and Slowed Update Speed Agree}
\\begin{tabular}{llllll}
\\hline
Experiment & Scale & Observed & GR & Update Rate & Status \\\\
\\hline
${TABLE_4_1_EVERYDAY_TESTS.map((r) => `${escTex(r.experiment)} & ${escTex(r.heightOrOrbit)} & ${escTex(r.observedResult)} & ${escTex(r.curvedSpacetimePred)} & ${escTex(r.updateRatePred)} & ${escTex(r.discriminatingPower)} \\\\`).join('\n')}
\\hline
\\end{tabular}
\\end{table}`;
    }
    if (chapterNum === 5) {
      return `\\begin{table}[htbp]
\\centering
\\caption{Solar-System, Gyroscopic, and Pulsar PPN Tests}
\\begin{tabular}{llllll}
\\hline
Test & Measured & Pure Scalar ($\\gamma=0$) & Curved GR ($\\gamma=1$) & Dual Update ($\\gamma=1$) & Verdict \\\\
\\hline
${TABLE_5_1_STRESS_TESTS.map((r) => `${escTex(r.testName)} & ${escTex(r.measuredValue)} & ${escTex(r.pureClockSlowingGamma0)} & ${escTex(r.curvedSpaceTimeGR)} & ${escTex(r.dualUpdateRateGamma1)} & ${escTex(r.verdictOnPureScalar)} \\\\`).join('\n')}
\\hline
\\end{tabular}
\\end{table}

\\begin{table}[htbp]
\\centering
\\caption{Complete PPN Parameter Bounds (Will 2014)}
\\begin{tabular}{llllll}
\\hline
Parameter & Physical Meaning & Will (2014) Bound & LUH-Scalar & Dual Update / GR & Primary Experiment \\\\
\\hline
${TABLE_5_2_PPN_BOUNDS.map((r) => `${escTex(r.parameter)} & ${escTex(r.physicalMeaning)} & ${escTex(r.will2014Bound)} & ${escTex(r.luhScalarValue)} & ${escTex(r.dualUpdateGRValue)} & ${escTex(r.primaryExperiment)} \\\\`).join('\n')}
\\hline
\\end{tabular}
\\end{table}`;
    }
    if (chapterNum === 6) {
      return `\\begin{table}[htbp]
\\centering
\\caption{Black Hole Horizons, Shadows, Ringdowns, and Sgr A* Orbits}
\\begin{tabular}{lllll}
\\hline
Observable & Facility & Standard GR & Literal Update Halt & Covariant Capacity \\\\
\\hline
${TABLE_6_1_BLACK_HOLES.map((r) => `${escTex(r.observable)} & ${escTex(r.instrumentAndTarget)} & ${escTex(r.standardGR)} & ${escTex(r.literalUpdateHaltModel)} & ${escTex(r.covariantUpdateCapacityIGRT)} \\\\`).join('\n')}
\\hline
\\end{tabular}
\\end{table}`;
    }
    if (chapterNum === 8) {
      return `\\begin{table}[htbp]
\\centering
\\caption{Summary Prediction Matrix: Curved Geometry vs. Slowed Update Speed}
\\begin{tabular}{lllll}
\\hline
Phenomenon & Curved Spacetime & Pure Clock-Slowing & Dual Update / IGRT & Outcome \\\\
\\hline
${TABLE_8_1_PREDICTIONS_MATRIX.map((r) => `${escTex(r.phenomenon)} & ${escTex(r.curvedSpacetimeGR)} & ${escTex(r.pureClockSlowing)} & ${escTex(r.fullDualUpdateRateIGRT)} & ${escTex(r.empiricalWinner)} \\\\`).join('\n')}
\\hline
\\end{tabular}
\\end{table}

\\begin{table}[htbp]
\\centering
\\caption{Next-Generation Experimental Roadmap (2026--2035)}
\\begin{tabular}{lllll}
\\hline
Facility & Window & Observable & Precision & Discriminating Reach \\\\
\\hline
${TABLE_8_2_NEXT_GEN_ROADMAP.map((r) => `${escTex(r.facility)} & ${escTex(r.timeframe)} & ${escTex(r.observable)} & ${escTex(r.targetPrecision)} & ${escTex(r.discriminatingReach)} \\\\`).join('\n')}
\\hline
\\end{tabular}
\\end{table}`;
    }
    return '';
  };

  return `\\documentclass[11pt]{article}
\\usepackage[margin=1in]{geometry}
\\usepackage{amsmath,amssymb}
\\usepackage{hyperref}

\\title{${escTex(CLOCK_SPEED_META.title)} \\\\ \\large\\textit{${escTex(CLOCK_SPEED_META.subtitle)}}}
\\author{${CLOCK_SPEED_META.authors.map((a) => `${escTex(a.name)} (${escTex(a.affiliation)})`).join(' \\and ')}}
\\date{${CLOCK_SPEED_META.date}}

\\begin{document}
\\maketitle

\\begin{abstract}
${CLOCK_SPEED_ABSTRACT.map(escTex).join('\n\n')}
\\end{abstract}

${CLOCK_SPEED_CHAPTERS.map(
  (ch) => `\\clearpage
\\section{${escTex(ch.title)}}
\\textit{${escTex(ch.leadSummary)}}

\\paragraph*{Introduction}
${ch.chapterIntro.map(escTex).join('\n\n')}

${ch.subsections
  .map(
    (sub) => `\\subsection{${escTex(sub.title)}}
${sub.paragraphs.map(escTex).join('\n\n')}${
      sub.equation
        ? `\n\n\\begin{equation}\n${htmlEqToLatex(sub.equation)}\n\\end{equation}`
        : ''
    }`
  )
  .join('\n\n')}

${renderTexChapterTables(ch.number)}`
).join('\n\n')}

\\section*{Glossary}
\\begin{description}
${CLOCK_SPEED_GLOSSARY.map((g) => `  \\item[${escTex(g.term)}] ${escTex(g.definition)}`).join('\n')}
\\end{description}

\\appendix
${CLOCK_SPEED_APPENDICES.map(
  (a) => `\\section{${escTex(a.title)}}
\\textit{${escTex(a.summary)}}

${a.equations
  .map(
    (eq) => `\\begin{equation}\n${htmlEqToLatex(eq)}\n\\end{equation}${
      eq.provenance ? `\n\\noindent\\textbf{Provenance:} ${escTex(eq.provenance)}` : ''
    }${
      eq.derivationSteps?.length
        ? `\n\\begin{enumerate}\n${eq.derivationSteps.map((s) => `\\item ${escTex(s)}`).join('\n')}\n\\end{enumerate}`
        : ''
    }`
  )
  .join('\n\n')}

${
  a.theoremBoxes?.length
    ? a.theoremBoxes
        .map(
          (tb) => `\\noindent\\textbf{${escTex(tb.kind)} ${escTex(tb.number)}: ${escTex(tb.title)}.} ${escTex(tb.statement)}\n\\begin{enumerate}\n${tb.proofSteps.map((s) => `\\item ${escTex(s)}`).join('\n')}\n\\end{enumerate}\n\\textit{Provenance:} ${escTex(tb.sourceNote)}`
        )
        .join('\n\n')
    : ''
}

${
  a.workedExamples?.length
    ? a.workedExamples
        .map(
          (wx) => `\\noindent\\textbf{${escTex(wx.title)}.} \\textit{${escTex(wx.setup)}}\n\\begin{enumerate}\n${wx.steps.map((s) => `\\item ${escTex(s)}`).join('\n')}\n\\end{enumerate}\n\\begin{equation}\n${htmlEqToLatex(wx.resultEquation)}\n\\end{equation}\n\\textit{Takeaway:} ${escTex(wx.takeaway)}`
        )
        .join('\n\n')
    : ''
}

${
  a.reproducibilityLedger?.length
    ? `\\begin{table}[htbp]\n\\centering\n\\caption{Reproducibility and Numerical Verification Protocol}\n\\begin{tabular}{llll}\n\\hline\nCheckpoint & Formula & Reference Constants & Computed Output \\\\\n\\hline\n${a.reproducibilityLedger.map((r) => `${escTex(r.checkpoint)} & ${escTex(r.formula)} & ${escTex(r.referenceConstants)} & ${escTex(r.computedOutput)} \\\\`).join('\n')}\n\\hline\n\\end{tabular}\n\\end{table}`
    : ''
}

${a.paragraphs.map(escTex).join('\n\n')}`
).join('\n\n')}

\\begin{thebibliography}{99}
${CLOCK_SPEED_REFERENCES.map((r) => `\\bibitem{ref${r.id}} ${escTex(r.citation)}`).join('\n')}
\\end{thebibliography}

\\end{document}
`;
}
