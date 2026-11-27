/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Self-contained Scientific Magazine HTML, Markdown, and Pure-ASCII LaTeX Exporters
 * for Paper 17: "Consciousness as a Thermodynamic Compression Artifact"
 * Pairs formatted mathematical expressions with Plain Equation Format across HTML, Markdown, and LaTeX.
 */

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
  type MindEquation,
  type MindTheoremBox,
  type MindWorkedExample
} from '../types/mindCompressionPaperData';
import { MIND_PLATES_META } from '../types/mindCompressionPaperFigures';
import { formatSvgMathMarkup } from './formatMathUnicode';

function escapeHtml(raw: string): string {
  return raw
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderHtmlNonBoldTokens(raw: string): string {
  const codeSplit = raw.split(/(`[^`]+`)/g);
  return codeSplit
    .map((seg, i) => {
      if (!seg) return '';
      if (i % 2 === 1) return `<code>${escapeHtml(seg.slice(1, -1))}</code>`;
      const italicSplit = seg.split(/(\*(?!\s)[^*\n]+?(?<!\s)\*)/g);
      return italicSplit
        .map((itSeg, k) => {
          if (!itSeg) return '';
          if (k % 2 === 1) return `<em>${escapeHtml(itSeg.slice(1, -1))}</em>`;
          return escapeHtml(itSeg);
        })
        .join('');
    })
    .join('');
}

function renderHtmlInlineTokens(raw: string): string {
  const boldSplit = raw.split(/(\*\*[^\n]+?\*\*)/g);
  return boldSplit
    .map((bSeg, j) => {
      if (!bSeg) return '';
      if (j % 2 === 1) return `<strong>${renderHtmlNonBoldTokens(bSeg.slice(2, -2))}</strong>`;
      return renderHtmlNonBoldTokens(bSeg);
    })
    .join('');
}

function renderHtmlRichParagraph(raw: string): string {
  return raw
    .split('\n')
    .map((line) => {
      if (line.startsWith('### ')) {
        return `<h4 class="sub-head">${renderHtmlInlineTokens(line.slice(4))}</h4>`;
      }
      return `<p>${renderHtmlInlineTokens(line)}</p>`;
    })
    .join('');
}

function renderHtmlEquation(eq: MindEquation): string {
  return `<div class="eq-box">
    <div class="eq-math">${eq.unicodeHtml} <span class="eq-num">Schema ${escapeHtml(eq.label)}</span></div>
    <div class="eq-plain"><strong>Plain Equation:</strong> <code>${escapeHtml(eq.plainEquation)}</code></div>
    <div class="eq-cap">${escapeHtml(eq.caption)}</div>
    <div class="eq-meaning">${escapeHtml(eq.plainMeaning)}</div>
    ${
      eq.derivationSteps?.length
        ? `<ol class="deriv-list">${eq.derivationSteps.map((s) => `<li>${renderHtmlInlineTokens(s)}</li>`).join('')}</ol>`
        : ''
    }
  </div>`;
}

function renderHtmlTheorem(tb: MindTheoremBox): string {
  return `<div class="theorem-box">
    <div class="box-title">${escapeHtml(tb.kind)} ${escapeHtml(tb.number)} · ${escapeHtml(tb.title)}</div>
    <p>${renderHtmlInlineTokens(tb.statement)}</p>
    <ol>${tb.proofSteps.map((s) => `<li>${renderHtmlInlineTokens(s)}</li>`).join('')}</ol>
    <div class="box-note">${escapeHtml(tb.sourceNote)}</div>
  </div>`;
}

function renderHtmlWorkedExample(wx: MindWorkedExample): string {
  return `<div class="worked-box">
    <div class="box-title">${escapeHtml(wx.title)}</div>
    <p class="epigraph">${renderHtmlInlineTokens(wx.setup)}</p>
    <ol>${wx.steps.map((s) => `<li>${renderHtmlInlineTokens(s)}</li>`).join('')}</ol>
    ${renderHtmlEquation(wx.resultEquation)}
    <p class="lead"><strong>Conclusion:</strong> ${renderHtmlInlineTokens(wx.takeaway)}</p>
  </div>`;
}

function renderHtmlChapterTable(chapterNum: number): string {
  if (chapterNum === 1) {
    return `
      <h3>Table 1.1 · Contrasting Classical Hard-Problem Framing vs. Thermodynamic Compression</h3>
      <table>
        <thead><tr><th>Analytical Axis</th><th>Standard Hard-Problem Assumption</th><th>Compression-Geometry Account</th><th>Philosophical Gain</th></tr></thead>
        <tbody>${TABLE_M1_CATEGORY_COMPARISON.map((r) => `<tr><td>${escapeHtml(r.axis)}</td><td>${escapeHtml(r.standardHardProblem)}</td><td>${escapeHtml(r.compressionFramework)}</td><td>${escapeHtml(r.philosophicalGain)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  if (chapterNum === 5) {
    return `
      <h3>Table 5.1 · Classical "Soul" Substance vs. Localized Compression Locus (Z_S)</h3>
      <table>
        <thead><tr><th>Property</th><th>Classical Immaterial Soul</th><th>Localized Compression Locus (Z_S)</th></tr></thead>
        <tbody>${TABLE_M3_SOUL_VS_LOCUS.map((r) => `<tr><td>${escapeHtml(r.dimension)}</td><td>${escapeHtml(r.classicalSoul)}</td><td>${escapeHtml(r.localizedLocus)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  if (chapterNum === 6) {
    return `
      <h3>Table 6.1 · Matrix of Dissolved Classical Consciousness Puzzles</h3>
      <table>
        <thead><tr><th>Puzzle</th><th>Classical Premise</th><th>Category Error</th><th>Dissolution Under Theorems 1–3</th></tr></thead>
        <tbody>${TABLE_M2_PUZZLE_DISSOLUTION.map((r) => `<tr><td>${escapeHtml(r.puzzle)}</td><td>${escapeHtml(r.classicalPremise)}</td><td>${escapeHtml(r.categoryError)}</td><td>${escapeHtml(r.dissolution)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  if (chapterNum === 8) {
    return `
      <h3>Table 8.1 · Popperian Falsification Conditions (FC1–FC4) &amp; Empirical Paradigms</h3>
      <table>
        <thead><tr><th>Gate</th><th>Framework Prediction</th><th>Refuting Empirical Observation</th><th>Primary Test Venue</th></tr></thead>
        <tbody>${TABLE_M4_FALSIFICATION_MATRIX.map((r) => `<tr><td>${escapeHtml(r.condition)}</td><td>${escapeHtml(r.predictionOfFramework)}</td><td>${escapeHtml(r.refutingObservation)}</td><td>${escapeHtml(r.experimentalVenue)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  return '';
}

export function buildMindCompressionSelfContainedHtml(): string {
  const plateBlock = (p: (typeof MIND_PLATES_META)[number]) => `
    <figure class="a4-plate" style="background:${escapeHtml(p.bgHex)};border-color:${escapeHtml(p.accentHex)};">
      <div class="plate-meta" style="border-color:${escapeHtml(p.accentHex)};">${escapeHtml(p.plateNumber)} · Chapter ${p.anchorChapter} (${escapeHtml(p.anchorSection)}) · ${escapeHtml(p.shadeName)} (${escapeHtml(p.bgHex)}) · Accent: ${escapeHtml(p.accentShadeName)} (${escapeHtml(p.accentHex)})</div>
      <div class="plate-title">${escapeHtml(p.title)}</div>
      ${p.svgMarkup ? `<div class="plate-svg">${formatSvgMathMarkup(p.svgMarkup)}</div>` : ''}
      <figcaption>${escapeHtml(p.caption)}<br/><small>Layered ground shades: ${escapeHtml(p.layeredShades.join(' · '))}</small></figcaption>
    </figure>`;

  const chaptersHtml = MIND_CHAPTERS.map((ch) => {
    const plates = MIND_PLATES_META.filter((p) => p.anchorChapter === ch.number);
    return `
      <section class="chapter">
        <h2>Chapter ${ch.number}: ${escapeHtml(ch.title)}</h2>
        <p class="epigraph">${escapeHtml(ch.epigraph)}</p>
        <blockquote class="pull-quote">${escapeHtml(ch.pullQuote)}</blockquote>
        <p class="lead">${escapeHtml(ch.leadSummary)}</p>
        ${ch.chapterIntro.length ? `<div class="chapter-intro">${ch.chapterIntro.map((p) => renderHtmlRichParagraph(p)).join('')}</div>` : ''}
        ${ch.subsections
          .map(
            (sub) => `
          <div class="subsec">
            <h3>§${escapeHtml(sub.number)} · ${escapeHtml(sub.title)}</h3>
            ${sub.paragraphs.map((p) => renderHtmlRichParagraph(p)).join('')}
            ${sub.equation ? renderHtmlEquation(sub.equation) : ''}
            ${sub.theoremBox ? renderHtmlTheorem(sub.theoremBox) : ''}
            ${sub.secondaryTheoremBox ? renderHtmlTheorem(sub.secondaryTheoremBox) : ''}
            ${sub.workedExample ? renderHtmlWorkedExample(sub.workedExample) : ''}
          </div>`
          )
          .join('')}
        ${renderHtmlChapterTable(ch.number)}
        ${plates.map(plateBlock).join('\n')}
      </section>
    `;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(MIND_META.title)}</title>
<style>
  body { font-family: Georgia, "Times New Roman", serif; color: #161A1D; background: #FAF6EC; margin: 0; padding: 3rem 1.5rem; line-height: 1.78; }
  main { max-width: 860px; margin: 0 auto; background: #FDFBF7; padding: 3.5rem; border: 1px solid #CBBBA0; }
  h1, h2, h3, h4 { font-weight: 400; color: #161A1D; }
  h1 { font-size: 2.2rem; line-height: 1.18; margin: 0.4rem 0 0.75rem; }
  h2 { font-size: 1.55rem; border-bottom: 1px solid #CBBBA0; padding-bottom: 0.45rem; margin-top: 2.8rem; }
  h3 { font-size: 1.16rem; color: #0B3942; margin-top: 1.9rem; }
  .masthead-rule { border-top: 3px solid #11505C; border-bottom: 1px solid #661447; height: 4px; margin-bottom: 1.8rem; }
  .layman-deck { font-size: 1.1rem; color: #4A0E33; font-style: italic; margin: 0.5rem 0 1.2rem; }
  .epigraph { font-style: italic; color: #11505C; }
  .pull-quote { border-top: 1px solid #CBBBA0; border-bottom: 1px solid #CBBBA0; margin: 1.4rem 0; padding: 0.9rem 0; font-size: 1.14rem; font-style: italic; color: #4A0E33; text-align: center; }
  .lead { color: #0F3D2B; font-style: italic; }
  .chapter-intro { border-top: 1px solid #CBBBA0; border-bottom: 1px solid #CBBBA0; background: #FAF6EC; padding: 1rem 1.35rem; margin: 1.4rem 0 2rem; }
  .eq-box, .theorem-box, .worked-box { background: #FAF6EC; border: 1px solid #CBBBA0; padding: 1rem 1.25rem; margin: 1.5rem 0; }
  .theorem-box { background: #F9EEF4; border-color: #831B5B; }
  .eq-math { font-size: 1.05rem; border-bottom: 1px solid #E2D6C1; padding-bottom: 0.5rem; margin-bottom: 0.5rem; }
  .eq-plain { font-family: monospace; font-size: 0.84rem; color: #0B3942; background: #F4EFE6; padding: 0.35rem 0.6rem; margin-bottom: 0.45rem; border-left: 2px solid #11505C; overflow-x: auto; }
  .eq-num { float: right; font-family: monospace; font-size: 0.8rem; color: #661447; }
  .eq-cap { font-style: italic; font-size: 0.9rem; color: #11505C; }
  .eq-meaning { font-size: 0.9rem; color: #0F3D2B; margin-top: 0.25rem; }
  table { width: 100%; border-collapse: collapse; margin: 1.4rem 0; font-size: 0.85rem; }
  th, td { border: 1px solid #CBBBA0; padding: 0.5rem 0.6rem; text-align: left; }
  th { background: #EDF5F6; color: #0B3942; }
  figure.a4-plate { color: #FFFFFF; padding: 1.4rem; border-width: 1px; border-style: solid; margin: 1.8rem 0; }
  figure.a4-plate .plate-meta { font-family: monospace; font-size: 0.78rem; color: #DCE8FF; border-bottom: 1px solid rgba(255,255,255,0.22); padding-bottom: 0.45rem; margin-bottom: 0.75rem; }
  figure.a4-plate .plate-title { font-size: 1.15rem; color: #FFFFFF; margin-bottom: 0.45rem; }
  figure.a4-plate .plate-svg svg { width: 100%; max-width: 520px; height: auto; display: block; margin: 0.8rem auto; }
  figure.a4-plate figcaption { color: #DCE8FF; margin-top: 0.6rem; font-size: 0.88rem; }
</style>
</head>
<body>
<main>
  <div class="masthead-rule"></div>
  <h1>${escapeHtml(MIND_META.title)}</h1>
  <p class="layman-deck">${escapeHtml(MIND_META.laymanDeck)}</p>
  <p><strong>Authors:</strong> ${MIND_META.authors.map((a) => `${escapeHtml(a.name)} (${escapeHtml(a.affiliation)}${a.orcid ? `, ORCID: ${escapeHtml(a.orcid)}` : ''})`).join(' · ')}</p>
  <p style="font-size:0.84rem;color:#11505C;">${escapeHtml(MIND_META.methodologicalStance)}</p>
  <p style="font-size:0.84rem;color:#4A0E33;font-style:italic;">${escapeHtml(MIND_META.venueFormatNote)}</p>
  <h2>Abstract</h2>
  ${MIND_ABSTRACT.map((p) => `<p>${escapeHtml(p)}</p>`).join('\n')}
  <p><strong>Keywords:</strong> ${escapeHtml(MIND_META.keywords.join('; '))}</p>
  <div class="worked-box">
    <div class="box-title">${escapeHtml(MIND_CORE_THESIS.title)}</div>
    <p><strong>${escapeHtml(MIND_CORE_THESIS.lead)}</strong></p>
    ${MIND_CORE_THESIS.elaboration.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
  </div>
  ${chaptersHtml}
  <h2>Appendix A: Formal Proofs and Mathematical Definitions</h2>
  ${MIND_APPENDICES.map((a) => `<h3>Appendix ${escapeHtml(a.letter)}: ${escapeHtml(a.title)}</h3><p><em>${escapeHtml(a.summary)}</em></p>${a.paragraphs.map(renderHtmlRichParagraph).join('')}${a.equations.map(renderHtmlEquation).join('')}`).join('\n')}
  <h2>Symbol Glossary</h2>
  <table>
    <thead><tr><th>Symbol</th><th>Concept</th><th>Domain</th><th>Definition</th></tr></thead>
    <tbody>${MIND_SYMBOL_GLOSSARY.map((s) => `<tr><td><code>${escapeHtml(s.symbol)}</code></td><td>${escapeHtml(s.name)}</td><td>${escapeHtml(s.domain)}</td><td>${escapeHtml(s.definition)}</td></tr>`).join('')}</tbody>
  </table>
  <h2>Glossary</h2>
  ${MIND_GLOSSARY.map((g) => `<p><strong>${escapeHtml(g.term)}${g.acronym ? ` (${escapeHtml(g.acronym)})` : ''}:</strong> ${escapeHtml(g.definition)}</p>`).join('\n')}
  <h2>References</h2>
  <ol>${MIND_REFERENCES.map((r) => `<li>[${escapeHtml(r.group)}] ${escapeHtml(r.citation)}</li>`).join('')}</ol>
  <h2>Index of Names &amp; Concepts</h2>
  <p><strong>Names:</strong> ${MIND_INDEX_OF_NAMES.map((n) => `${escapeHtml(n.entry)} (${escapeHtml(n.sections)})`).join('; ')}</p>
  <p><strong>Concepts:</strong> ${MIND_INDEX_OF_CONCEPTS.map((c) => `${escapeHtml(c.entry)} (${escapeHtml(c.sections)})`).join('; ')}</p>
</main>
</body>
</html>`;
}

export function buildMindCompressionMarkdown(): string {
  const parts: string[] = [];
  parts.push(`# ${MIND_META.title}`);
  parts.push(`*${MIND_META.laymanDeck}*`, '');
  parts.push(`**Target Journal:** ${MIND_META.journalTarget}`);
  parts.push(`**Methodological Stance:** ${MIND_META.methodologicalStance}`, '');
  parts.push(`**Authors:** ${MIND_META.authors.map((a) => `${a.name} (${a.affiliation}${a.orcid ? `, ORCID: ${a.orcid}` : ''})`).join('; ')}`, '');
  parts.push('## Abstract');
  MIND_ABSTRACT.forEach((p) => parts.push(p, ''));
  parts.push(`**Keywords:** ${MIND_META.keywords.join('; ')}`, '');
  parts.push(`## ${MIND_CORE_THESIS.title}`);
  parts.push(`> ${MIND_CORE_THESIS.lead}`);
  MIND_CORE_THESIS.elaboration.forEach((p) => parts.push('', p));
  parts.push('');

  for (const ch of MIND_CHAPTERS) {
    parts.push(`## Chapter ${ch.number}: ${ch.title}`);
    parts.push(`*${ch.epigraph}*`);
    parts.push(`> ${ch.pullQuote}`);
    parts.push(ch.leadSummary, '');
    ch.chapterIntro.forEach((p) => parts.push(p, ''));
    for (const sub of ch.subsections) {
      parts.push(`### §${sub.number} · ${sub.title}`);
      sub.paragraphs.forEach((p) => parts.push(p, ''));
      if (sub.equation) {
        parts.push(`**Schema ${sub.equation.label}:**`);
        parts.push(`- **Plain Equation:** \`${sub.equation.plainEquation}\``);
        parts.push(`- *${sub.equation.caption}* — ${sub.equation.plainMeaning}`, '');
      }
      if (sub.theoremBox) {
        parts.push(`**${sub.theoremBox.kind} ${sub.theoremBox.number} (${sub.theoremBox.title}):** ${sub.theoremBox.statement}`);
        sub.theoremBox.proofSteps.forEach((s, i) => parts.push(`${i + 1}. ${s}`));
        parts.push('');
      }
      if (sub.workedExample) {
        parts.push(`**${sub.workedExample.title}:** ${sub.workedExample.setup}`);
        sub.workedExample.steps.forEach((s, i) => parts.push(`${i + 1}. ${s}`));
        parts.push(`- **Plain Equation (${sub.workedExample.resultEquation.label}):** \`${sub.workedExample.resultEquation.plainEquation}\``);
        parts.push(`- *Takeaway:* ${sub.workedExample.takeaway}`, '');
      }
    }
    const chPlates = MIND_PLATES_META.filter((p) => p.anchorChapter === ch.number);
    if (chPlates.length) {
      parts.push(`#### Plates in Chapter ${ch.number}`);
      chPlates.forEach((pl) =>
        parts.push(`- **${pl.plateNumber} (${pl.anchorSection} · ${pl.shadeName} ${pl.bgHex}):** *${pl.title}* — ${pl.caption}`)
      );
      parts.push('');
    }
  }

  parts.push('## Appendix A: Formal Proofs and Mathematical Definitions');
  for (const app of MIND_APPENDICES) {
    parts.push(`### Appendix ${app.letter}: ${app.title}`, app.summary, '');
    app.paragraphs.forEach((p) => parts.push(p, ''));
    app.equations.forEach((eq) => {
      parts.push(`- **Equation ${eq.label} Plain Equation:** \`${eq.plainEquation}\``);
      parts.push(`- *${eq.caption}* — ${eq.plainMeaning}`, '');
    });
  }

  parts.push('## References');
  MIND_REFERENCES.forEach((r) => parts.push(`[${r.id}] (${r.group}) ${r.citation}`));
  return parts.join('\n');
}

// ---------------------------------------------------------------------------
// Pure 7-Bit ASCII LaTeX Generator with Balanced Braces & Plain Equation Format
// ---------------------------------------------------------------------------

const UNICODE_SUP: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  '⁺': '+', '⁻': '-', 'ⁿ': 'n', 'ʳ': 'r', 'ⁱ': 'i', 'ʲ': 'j'
};
const UNICODE_SUB: Record<string, string> = {
  '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
  '₊': '+', '₋': '-', 'ᵢ': 'i'
};
const SUP_RE = /[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿʳⁱʲ]+/g;
const SUB_RE = /[₀₁₂₃₄₅₆₇₈₉₊₋ᵢ]+/g;

const LATIN_ACCENTS: Record<string, string> = {
  'à': '\\`{a}', 'á': "\\'{a}", 'â': '\\^{a}', 'ä': '\\"{a}', 'é': "\\'{e}",
  'è': '\\`{e}', 'ê': '\\^{e}', 'ë': '\\"{e}', 'í': "\\'{i}", 'î': '\\^{i}',
  'ï': '\\"{i}', 'ñ': '\\~{n}', 'ó': "\\'{o}", 'ô': '\\^{o}', 'ö': '\\"{o}',
  'ú': "\\'{u}", 'û': '\\^{u}', 'ü': '\\"{u}', 'ç': '\\c{c}', 'Ü': '\\"{U}', 'Ö': '\\"{O}', 'Ä': '\\"{A}'
};

const PUNCT_MAP: Record<string, string> = {
  '§': '\\S{}',
  '–': '--',
  '—': '---',
  '’': "'",
  '‘': '`',
  '“': '``',
  '”': "''",
  '…': '\\ldots{}',
  '⋯': '\\cdots{}'
};

const MATH_MAP: Record<string, string> = {
  'Γ': '\\Gamma ', 'Δ': '\\Delta ', 'Θ': '\\Theta ', 'Λ': '\\Lambda ',
  'Φ': '\\Phi ', 'Ω': '\\Omega ', 'Π': '\\Pi ', 'Ψ': '\\Psi ', 'Σ': '\\Sigma ',
  'α': '\\alpha ', 'β': '\\beta ', 'γ': '\\gamma ', 'δ': '\\delta ',
  'ε': '\\varepsilon ', 'ϵ': '\\epsilon ', 'η': '\\eta ', 'θ': '\\theta ',
  'κ': '\\kappa ', 'λ': '\\lambda ', 'μ': '\\mu ', 'ν': '\\nu ',
  'ξ': '\\xi ', 'π': '\\pi ', 'ρ': '\\rho ', 'σ': '\\sigma ',
  'τ': '\\tau ', 'φ': '\\varphi ', 'χ': '\\chi ', 'ψ': '\\psi ', 'ω': '\\omega ',
  'ℝ': '\\mathbb{R}', 'ℏ': '\\hbar ', 'ħ': '\\hbar ',
  '∀': '\\forall ', '∃': '\\exists ', '∄': '\\nexists ', '¬': '\\neg ',
  '∅': '\\emptyset ', '∈': '\\in ', '∉': '\\notin ', '⊂': '\\subset ', '⊆': '\\subseteq ',
  '⟨': '\\langle ', '⟩': '\\rangle ', '⌈': '\\lceil ', '⌉': '\\rceil ',
  '≅': '\\cong ', '∼': '\\sim ', '∝': '\\propto ', '∑': '\\sum ', '∏': '\\prod ',
  '∂': '\\partial ', '∫': '\\int ', '∞': '\\infty ', '×': '\\times ', '·': '\\cdot ',
  '±': '\\pm ', '≈': '\\approx ', '≤': '\\le ', '≥': '\\ge ', '≪': '\\ll ', '≫': '\\gg ',
  '≠': '\\neq ', '≡': '\\equiv ', '⇔': '\\iff ', '↔': '\\leftrightarrow ', '→': '\\rightarrow ',
  '←': '\\leftarrow ', '⇒': '\\Rightarrow ', '↪': '\\hookrightarrow ', '−': '-', '∖': '\\setminus ',
  '‖': '\\|', '∘': '\\circ ', '½': '\\frac{1}{2}', '′': '\\prime ', '√': '\\sqrt'
};

const MATH_CHECK_RE =
  /[ΓΔΘΛΦΩΠΨΣαβγδεϵηθκλμνξπρστυφχψωℝℏħ∀∃∄¬∅∈∉⊂⊆⟨⟩⌈⌉≅∼∝∑∏∂∫∞×·±≈≤≥≪≫≠≡⇔↔→←⇒↪−∖‖∘½′√⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿʳⁱʲ₀₁₂₃₄₅₆₇₈₉₊₋ᵢ]/u;

function escapeTexTextChar(ch: string): string {
  if (ch in LATIN_ACCENTS) return LATIN_ACCENTS[ch];
  if (ch in PUNCT_MAP) return PUNCT_MAP[ch];
  switch (ch) {
    case '\\': return '\\textbackslash{}';
    case '{': return '\\{';
    case '}': return '\\}';
    case '$': return '\\$';
    case '&': return '\\&';
    case '#': return '\\#';
    case '%': return '\\%';
    case '_': return '\\_';
    case '^': return '\\textasciicircum{}';
    case '~': return '\\textasciitilde{}';
    case '<': return '\\textless{}';
    case '>': return '\\textgreater{}';
    case '|': return '\\textbar{}';
    default:
      if (ch in MATH_MAP) return `$${MATH_MAP[ch].trim()}$`;
      if (ch.charCodeAt(0) > 127) return '';
      return ch;
  }
}

function escapeTexRawText(s: string): string {
  let out = '';
  for (const ch of s) out += escapeTexTextChar(ch);
  return out;
}

function escapeTexCode(s: string): string {
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
      if (ch in LATIN_ACCENTS) return LATIN_ACCENTS[ch];
      if (ch.charCodeAt(0) > 127) return '';
      return ch;
    })
    .join('');
}

function balanceBraces(s: string): string {
  let depth = 0;
  let out = '';
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === '\\' && (s[i + 1] === '{' || s[i + 1] === '}')) {
      out += ch + s[i + 1];
      i++;
      continue;
    }
    if (ch === '{') {
      depth++;
      out += ch;
    } else if (ch === '}') {
      if (depth > 0) {
        depth--;
        out += ch;
      } else {
        out += '\\}';
      }
    } else {
      out += ch;
    }
  }
  while (depth > 0) {
    out += '}';
    depth--;
  }
  return out;
}

function renderMathBodyToTex(rawMath: string): string {
  const expanded = rawMath
    .replace(SUP_RE, (run) => `^{${[...run].map((c) => UNICODE_SUP[c] ?? c).join('')}}`)
    .replace(SUB_RE, (run) => `_{${[...run].map((c) => UNICODE_SUB[c] ?? c).join('')}}`);
  let s = '';
  for (const ch of expanded) {
    if (ch in MATH_MAP) s += MATH_MAP[ch];
    else if (ch === '–' || ch === '—') s += '-';
    else if (ch === '’') s += "'";
    else if (ch === '&') s += '\\&';
    else if (ch === '%') s += '\\%';
    else if (ch === '#') s += '\\#';
    else if (ch.charCodeAt(0) > 127) s += '';
    else s += ch;
  }
  s = s.replace(/\b(ln|log|min|inf|dim|state|capacity|States|Dec)\b/g, (m) => `\\mathrm{${m}}`);
  s = s.replace(/_([A-Za-z]{2,})/g, (_, word) => `_{\\mathrm{${word}}}`);
  return balanceBraces(s.replace(/[ ]{2,}/g, ' ').trim());
}

function texInline(segment: string): string {
  return segment
    .split(/(\s+)/)
    .map((tok) => {
      if (!tok) return '';
      if (/^\s+$/.test(tok)) return tok;
      if (MATH_CHECK_RE.test(tok) || (/[_^]/.test(tok) && !tok.includes('http'))) {
        let core = tok;
        let lead = '';
        let trail = '';
        while (core.length > 1 && /[.,;:!?]$/.test(core)) {
          trail = core[core.length - 1] + trail;
          core = core.slice(0, -1);
        }
        if ((core.match(/\(/g) || []).length > (core.match(/\)/g) || []).length && core.startsWith('(')) {
          lead += '(';
          core = core.slice(1);
        } else if ((core.match(/\)/g) || []).length > (core.match(/\(/g) || []).length && core.endsWith(')')) {
          trail = ')' + trail;
          core = core.slice(0, -1);
        }
        return `${escapeTexRawText(lead)}$${renderMathBodyToTex(core)}$${escapeTexRawText(trail)}`;
      }
      return escapeTexRawText(tok);
    })
    .join('');
}

function texNonBoldLine(content: string): string {
  const chunks = content.split(/(\bBulaqueña\b|`[^`]+`|\*(?!\s)[^*\n]+?(?<!\s)\*)/g);
  return chunks
    .map((chunk) => {
      if (!chunk) return '';
      if (chunk === 'Bulaqueña') return 'Bulaque\\~{n}a';
      if (chunk.startsWith('`') && chunk.endsWith('`') && chunk.length >= 2) {
        const inner = chunk.slice(1, -1);
        if (MATH_CHECK_RE.test(inner) || /[_^]/.test(inner)) return `$${renderMathBodyToTex(inner)}$`;
        return `\\texttt{${escapeTexCode(inner)}}`;
      }
      if (chunk.startsWith('*') && chunk.endsWith('*') && chunk.length >= 2) {
        return `\\textit{${texInline(chunk.slice(1, -1))}}`;
      }
      return texInline(chunk);
    })
    .join('');
}

function texProse(input: string): string {
  if (!input) return '';
  return input
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((line) => {
      let prefix = '';
      let content = line;
      if (content.startsWith('### ')) {
        prefix = '\\paragraph{';
        content = content.slice(4);
      }
      const rendered = content
        .split(/(\*\*[^\n]+?\*\*)/g)
        .map((ch, j) => (j % 2 === 1 ? `\\textbf{${texNonBoldLine(ch.slice(2, -2))}}` : texNonBoldLine(ch)))
        .join('');
      return prefix ? `${prefix}${rendered}}` : rendered;
    })
    .join('\n\n');
}

function renderTexEquation(eq: MindEquation): string {
  const cleanHtml = eq.unicodeHtml
    .replace(/<sup>(.*?)<\/sup>/gi, '^{$1}')
    .replace(/<sub>(.*?)<\/sub>/gi, '_{$1}')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, '; ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
  const cleanTag = eq.label.replace(/^\(|\)$/g, '').trim();
  const safeLabel = cleanTag.replace(/[^A-Za-z0-9.-]/g, '-').toLowerCase();
  const parts: string[] = [
    `\\begin{equation}\\label{eq:${safeLabel}}\\tag{${cleanTag}}\n  ${renderMathBodyToTex(cleanHtml)}\n\\end{equation}`,
    `\\noindent\\textbf{Plain Equation:} \\texttt{${escapeTexCode(eq.plainEquation)}}`,
    `\\noindent{\\small\\textit{${texProse(eq.caption)}}} \\\\ {\\small ${texProse(eq.plainMeaning)}}`
  ];
  if (eq.derivationSteps?.length) {
    parts.push(`\\begin{enumerate}\n${eq.derivationSteps.map((s) => `\\item ${texProse(s)}`).join('\n')}\n\\end{enumerate}`);
  }
  return parts.join('\n\n');
}

function makeTexLongTable(caption: string, colSpec: string, headers: string[], rows: string[][]): string {
  const headerLine = `${headers.map((h) => `\\textbf{${texProse(h)}}`).join(' & ')} \\\\`;
  const rowLines = rows.map((r) => `${r.map((c) => texProse(c)).join(' & ')} \\\\`).join('\n\\midrule\n');
  return `{\\footnotesize\\setlength{\\tabcolsep}{4pt}
\\begin{longtable}{@{} ${colSpec} @{}}
\\caption{${texProse(caption)}} \\\\
\\toprule
${headerLine}
\\midrule
\\endfirsthead
\\multicolumn{${headers.length}}{@{}l}{\\textit{${texProse(caption)} (continued)}} \\\\
\\toprule
${headerLine}
\\midrule
\\endhead
\\bottomrule
\\endfoot
${rowLines}
\\end{longtable}}`;
}

export function buildMindCompressionLatex(): string {
  const lines: string[] = [];
  lines.push('\\documentclass[11pt,a4paper]{article}');
  lines.push('\\usepackage[utf8]{inputenc}');
  lines.push('\\usepackage[T1]{fontenc}');
  lines.push('\\usepackage{amsmath,amssymb,amsthm}');
  lines.push('\\usepackage{booktabs,longtable,array}');
  lines.push('\\usepackage{geometry}');
  lines.push('\\geometry{margin=22mm}');
  lines.push('\\newcolumntype{L}[1]{>{\\raggedright\\arraybackslash}p{#1\\textwidth}}');
  lines.push('');
  lines.push(`\\title{\\textbf{${texProse(MIND_META.title)}} \\\\ \\large ${texProse(MIND_META.laymanDeck)}}`);
  lines.push(`\\author{${MIND_META.authors.map((a) => `${texProse(a.name)} (${texProse(a.affiliation)}${a.orcid ? `, ORCID: ${escapeTexCode(a.orcid)}` : ''})`).join(' \\and ')}}`);
  lines.push('\\date{}');
  lines.push('\\begin{document}');
  lines.push('\\maketitle');
  lines.push(`\\begin{center}\\small ${texProse(MIND_META.methodologicalStance)} \\\\ \\textit{${texProse(MIND_META.venueFormatNote)}}\\end{center}`);
  lines.push('\\begin{abstract}');
  MIND_ABSTRACT.forEach((p) => lines.push(texProse(p), ''));
  lines.push(`\\noindent\\textbf{Keywords:} ${texProse(MIND_META.keywords.join('; '))}`);
  lines.push('\\end{abstract}', '');

  lines.push(`\\section*{${texProse(MIND_CORE_THESIS.title)}}`);
  lines.push(`\\begin{quote}\\textbf{${texProse(MIND_CORE_THESIS.lead)}}\\end{quote}`);
  MIND_CORE_THESIS.elaboration.forEach((p) => lines.push(texProse(p), ''));

  for (const ch of MIND_CHAPTERS) {
    lines.push(`\\section{Chapter ${ch.number}: ${texProse(ch.title)}}`);
    lines.push(`\\begin{quote}\\textit{${texProse(ch.epigraph)}} \\\\ \\textbf{Core Claim:} ${texProse(ch.pullQuote)}\\end{quote}`);
    lines.push(`\\noindent\\textit{${texProse(ch.leadSummary)}}`, '');
    ch.chapterIntro.forEach((p) => lines.push(texProse(p), ''));
    for (const sub of ch.subsections) {
      lines.push(`\\subsection{Section ${texProse(sub.number)}: ${texProse(sub.title)}}`);
      sub.paragraphs.forEach((p) => lines.push(texProse(p), ''));
      if (sub.equation) lines.push(renderTexEquation(sub.equation), '');
      if (sub.theoremBox) {
        lines.push(
          `\\begin{quote}\\textbf{${texProse(sub.theoremBox.kind)} ${texProse(sub.theoremBox.number)} (${texProse(sub.theoremBox.title)}):} ${texProse(sub.theoremBox.statement)}`,
          '\\begin{enumerate}',
          ...sub.theoremBox.proofSteps.map((s) => `\\item ${texProse(s)}`),
          '\\end{enumerate}',
          `\\textit{Source: ${texProse(sub.theoremBox.sourceNote)}}\\end{quote}`,
          ''
        );
      }
      if (sub.workedExample) {
        lines.push(
          `\\begin{quote}\\textbf{${texProse(sub.workedExample.title)}:} ${texProse(sub.workedExample.setup)}`,
          '\\begin{enumerate}',
          ...sub.workedExample.steps.map((s) => `\\item ${texProse(s)}`),
          '\\end{enumerate}\\end{quote}',
          renderTexEquation(sub.workedExample.resultEquation),
          `\\noindent\\textbf{Takeaway:} ${texProse(sub.workedExample.takeaway)}`,
          ''
        );
      }
    }
    if (ch.number === 1) {
      lines.push(
        makeTexLongTable(
          'Table 1.1: Classical Hard-Problem Framing vs. Compression-Geometry Framework',
          'L{0.18} L{0.25} L{0.27} L{0.24}',
          ['Axis', 'Standard Hard Problem', 'Compression Framework', 'Philosophical Gain'],
          TABLE_M1_CATEGORY_COMPARISON.map((r) => [r.axis, r.standardHardProblem, r.compressionFramework, r.philosophicalGain])
        ),
        ''
      );
    } else if (ch.number === 5) {
      lines.push(
        makeTexLongTable(
          'Table 5.1: Classical Soul Substance vs. Localized Compression Locus',
          'L{0.22} L{0.35} L{0.37}',
          ['Dimension', 'Classical Soul', 'Localized Compression Locus'],
          TABLE_M3_SOUL_VS_LOCUS.map((r) => [r.dimension, r.classicalSoul, r.localizedLocus])
        ),
        ''
      );
    } else if (ch.number === 6) {
      lines.push(
        makeTexLongTable(
          'Table 6.1: Dissolution Matrix for Classical Puzzles',
          'L{0.18} L{0.24} L{0.25} L{0.27}',
          ['Puzzle', 'Classical Premise', 'Category Error', 'Dissolution'],
          TABLE_M2_PUZZLE_DISSOLUTION.map((r) => [r.puzzle, r.classicalPremise, r.categoryError, r.dissolution])
        ),
        ''
      );
    } else if (ch.number === 8) {
      lines.push(
        makeTexLongTable(
          'Table 8.1: Popperian Falsification Conditions (FC1--FC4)',
          'L{0.20} L{0.26} L{0.26} L{0.22}',
          ['Gate', 'Prediction', 'Refuting Evidence', 'Venue'],
          TABLE_M4_FALSIFICATION_MATRIX.map((r) => [r.condition, r.predictionOfFramework, r.refutingObservation, r.experimentalVenue])
        ),
        ''
      );
    }
  }

  lines.push('\\appendix');
  for (const app of MIND_APPENDICES) {
    lines.push(`\\section{Appendix ${texProse(app.letter)}: ${texProse(app.title)}}`);
    lines.push(`\\noindent\\textit{${texProse(app.summary)}}`, '');
    app.paragraphs.forEach((p) => lines.push(texProse(p), ''));
    app.equations.forEach((eq) => lines.push(renderTexEquation(eq), ''));
  }

  lines.push('\\section*{Symbol Glossary}');
  lines.push(
    makeTexLongTable(
      'Formal Symbols and Operators',
      'L{0.18} L{0.20} L{0.18} L{0.38}',
      ['Symbol', 'Concept', 'Domain', 'Definition'],
      MIND_SYMBOL_GLOSSARY.map((s) => [s.symbol, s.name, s.domain, s.definition])
    )
  );

  lines.push('\\section*{Glossary}');
  lines.push('\\begin{description}');
  MIND_GLOSSARY.forEach((g) => {
    const head = `${g.term}${g.acronym ? ` (${g.acronym})` : ''}`;
    lines.push(`\\item[${texProse(head)}] ${texProse(g.definition)}`);
  });
  lines.push('\\end{description}');

  lines.push('\\section*{List of Plates (Plates I--XXX)}');
  lines.push('\\begin{enumerate}');
  MIND_PLATES_META.forEach((pl) =>
    lines.push(
      `\\item \\textbf{${texProse(pl.plateNumber)}} (Ch. ${pl.anchorChapter} ${texProse(pl.anchorSection)} --- ${texProse(pl.shadeName)} ${escapeTexCode(pl.bgHex)}): \\textit{${texProse(pl.title)}} --- ${texProse(pl.caption)}`
    )
  );
  lines.push('\\end{enumerate}');

  lines.push('\\section*{References}');
  lines.push('\\begin{enumerate}');
  MIND_REFERENCES.forEach((r) => lines.push(`\\item (${texProse(r.group)}) ${texProse(r.citation)}`));
  lines.push('\\end{enumerate}');

  lines.push('\\section*{Index of Names}');
  lines.push('\\begin{itemize}');
  MIND_INDEX_OF_NAMES.forEach((n) => lines.push(`\\item \\textbf{${texProse(n.entry)}} --- ${texProse(n.sections)}`));
  lines.push('\\end{itemize}');

  lines.push('\\section*{Index of Concepts}');
  lines.push('\\begin{itemize}');
  MIND_INDEX_OF_CONCEPTS.forEach((c) => lines.push(`\\item \\textbf{${texProse(c.entry)}} --- ${texProse(c.sections)}`));
  lines.push('\\end{itemize}');

  lines.push('\\end{document}');
  return lines.join('\n');
}

function triggerDownload(filename: string, content: string, mime: string) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadMindCompressionHtml(): void {
  triggerDownload('Paper_17_Consciousness_Thermodynamic_Compression.html', buildMindCompressionSelfContainedHtml(), 'text/html;charset=utf-8');
}

export function downloadMindCompressionLatex(): void {
  triggerDownload('Paper_17_Consciousness_Thermodynamic_Compression.tex', buildMindCompressionLatex(), 'application/x-tex;charset=utf-8');
}

export function downloadMindCompressionMarkdown(): void {
  triggerDownload('Paper_17_Consciousness_Thermodynamic_Compression.md', buildMindCompressionMarkdown(), 'text/markdown;charset=utf-8');
}
