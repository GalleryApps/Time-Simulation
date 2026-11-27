/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Self-contained Scientific Magazine HTML, Markdown, and Pure-ASCII LaTeX Exporters
 * for Paper 15 (Synthese Journal):
 * "Where or Who Is the Observer? The Observer in Phenomenology, Quantum Foundations, and Systems Theory"
 */

import {
  SYNTHESE_META,
  SYNTHESE_ABSTRACT,
  SYNTHESE_AXIOM_TABLE,
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
  SYNTHESE_INDEPENDENCE_MODELS,
  SYNTHESE_SYMBOL_GLOSSARY,
  SYNTHESE_GLOSSARY,
  SYNTHESE_APPENDICES,
  SYNTHESE_REFERENCES,
  SYNTHESE_INDEX_OF_NAMES,
  SYNTHESE_INDEX_OF_CONCEPTS,
  type SyntheseEquation,
  type SyntheseTheoremBox,
  type SyntheseWorkedExample
} from '../types/synthesePaperData';
import { SYNTHESE_FIGURES } from '../types/synthesePaperFigures';
import { formatSvgMathMarkup } from './formatMathUnicode';

const SYNTHESE_PLATES_INDEX = [
  {
    plateNumber: 'Plate I',
    anchorChapter: 1,
    title: 'Kant & Husserl: Situated Astronomical Horizon, Armillary Sphere & Modal S4 ⟨W, R, D(w)⟩',
    caption:
      'Immanuel Kant and Edmund Husserl flanking a brass armillary sphere and concentric varying-domain modal S4 horizon ⟨W, R, D(w)⟩: illustrating Axiom A1 (Perspectival Immanence) and the impossibility of an unsituated global view (§1).'
  },
  {
    plateNumber: 'Plate II',
    anchorChapter: 1,
    title: 'Aristotle, Dignāga & Leibniz: Non-Monotonic Domains D(w₀) ⊈ D(w₁) & Breuer’s Diagonal Limit',
    caption:
      'Portraits of Aristotle, Dignāga (svasaṃvedana), and G. W. Leibniz (perspectival monadology) framing the Barcan-blocking varying-domain lattice D(w₀) = ∅ → D(w₁) and Breuer’s subsystem self-measurement blind spot (§1, Theorem 1.1).'
  },
  {
    plateNumber: 'Plate III',
    anchorChapter: 2,
    title: 'Humans Experiencing Lived Time: Musical Melody Unfolded Across Husserl’s Bernau Zeitdiagramm',
    caption:
      'An embodied human listener experiencing musical pitch succession mapped geometrically onto Edmund Husserl’s diagonal Bernau time diagram (retentional tails E′, E″, primal impression Urimp, and open protentional horizon, §§3–5).'
  },
  {
    plateNumber: 'Plate IV',
    anchorChapter: 2,
    title: 'Heidegger, Merleau-Ponty, Henry & Levinas: Chiasmic Écart, Clearing Cone & Ethical Face',
    caption:
      'Four phenomenological masterworks synthesized: Martin Heidegger’s ecstatic clearing (Lichtung), Maurice Merleau-Ponty’s touching–touched hand chiasm around quartz, Michel Henry’s immanent auto-affection ring, and Emmanuel Levinas’s asymmetrical Face (§§6–9).'
  },
  {
    plateNumber: 'Plate V',
    anchorChapter: 3,
    title: 'Derrida, Foucault & Lacan: Möbius Trace, Barred Subject ($) & Panopticon Dispositif',
    caption:
      'Portraits of Jacques Derrida, Michel Foucault, and Jacques Lacan surrounding a continuous Möbius topology, the barred subject under erasure ($), the optical rays of Velázquez’s Las Meninas, and radial Benthamite dispositif geometry (§§10–12).'
  },
  {
    plateNumber: 'Plate VI',
    anchorChapter: 3,
    title: 'Deleuze, Nancy & Marion: Bergsonian Memory Cones, Le Pli & Saturated Aperture Overflow',
    caption:
      'Gilles Deleuze’s virtual pure-past memory cone and invaginated fold (le pli), Jean-Luc Nancy’s co-original plural-pole boundary exposure (être-avec), and Jean-Luc Marion’s saturated ray bundle overflowing finite aperture cuts (§§13–15a).'
  },
  {
    plateNumber: 'Plate VII',
    anchorChapter: 4,
    title: 'Bohr, Von Neumann & Heisenberg: Solvay Photon-Box & Covariant Movable Cuts c₁, c₂',
    caption:
      'Niels Bohr, John von Neumann, and Werner Heisenberg surrounding the 1930 Solvay gravitational photon-box and sliding measurement boundaries c₁, c₂ along H_S ⊗ H_A ⊗ H_O: empirical probability remains cut-shift invariant (§§16–17).'
  },
  {
    plateNumber: 'Plate VIII',
    anchorChapter: 4,
    title: 'Everett, Wigner & Wheeler: Wigner’s Friend Interferometer & Cosmic Participatory U-Eye',
    caption:
      'Hugh Everett III, Eugene Wigner, and John Archibald Wheeler framing Wigner’s sealed Friend inside a nested Mach–Zehnder interferometer beneath Wheeler’s self-observing cosmic U-loop: refuting absolute observer-independent macro-facts (§§18–20).'
  },
  {
    plateNumber: 'Plate IX',
    anchorChapter: 5,
    title: 'Rovelli, Fuchs & Zurek: Doplicher–Longo Type I Split Collar & No-Go Theorem 5.1 Circuit',
    caption:
      'Carlo Rovelli, Christopher Fuchs, and Wojciech Zurek framing the Doplicher–Longo Type I algebraic split collar M(O₁) ⊂ N ⊂ M(O₂)′, the two-qubit Bell witness for No-Go Theorem 5.1 (F > 1/2 vs. r = m), Quantum Darwinism pointer fragments, and QBism’s Born simplex (§§21–23).'
  },
  {
    plateNumber: 'Plate X',
    anchorChapter: 5,
    title: 'Cramer, Griffiths & Hartle: Bilateral Spacetime Handshake, History Lattice & IGUS Engine',
    caption:
      'John Cramer, Robert Griffiths, and James Hartle uniting the bilateral emitter–absorber handshake (ψ and ψ*), orthogonal consistent Boolean history chains D(α, α′) = 0, and Gell-Mann–Hartle’s negentropic IGUS record cycle (§§24–27).'
  },
  {
    plateNumber: 'Plate XI',
    anchorChapter: 6,
    title: 'Maturana, Varela & Friston: Embodied Human Brain–Torso & Markov Blanket Closure (S/A)',
    caption:
      'Humberto Maturana, Francisco Varela, and Karl Friston enclosing an embodied human nervous system connected via bidirectional sensory (S) and active (A) states across a conditional Markov blanket isolating internal autonomous metabolism (§§27, 30–31).'
  },
  {
    plateNumber: 'Plate XII',
    anchorChapter: 6,
    title: 'Von Foerster, Luhmann, Metzinger & Dennett: Eigenbehavior Fixed Point & Retinal Blind Spot',
    caption:
      'Heinz von Foerster’s recursive eigenbehavior O(O(x)) = x*, Niklas Luhmann’s Spencer-Brown unmarked-exterior re-entry, Thomas Metzinger’s transparent Phenomenal Self-Model, and Daniel Dennett’s narrative gravity around the optical blind spot (§§28–29, 32–33).'
  },
  {
    plateNumber: 'Plate XIII',
    anchorChapter: 7,
    title: 'The Thick Living Now: Human Subject in EEG Cap & Stratified Allen Intervals (I_ret, I_now, I_prot)',
    caption:
      'A human observer wearing a neural EEG sensor array experiencing the 100–3000 ms Varela–Pöppel integration window mapped directly onto Allen’s interval temporal relations Overlaps(I_ret, I_now) and Meets(I_now, I_prot) alongside Francisco Varela (§37).'
  },
  {
    plateNumber: 'Plate XIV',
    anchorChapter: 7,
    title: 'Four Separating Countermodels (M_~A1..M_~A4) & Stratified Four-Axiom Logic Architecture',
    caption:
      'Archival cutaway of the stratified modal lattice A1–A4 proving minimal non-redundancy via the four explicit separating countermodels: Archimedean sensor M_~A1, Leibnizian bubble M_~A2, cut-free continuum M_~A3, and static block cut M_~A4 (§§34–37).'
  },
  {
    plateNumber: 'Plate XV',
    anchorChapter: 8,
    title: 'Structural Identity Thesis (SIT): Faithful Functors Phen, Quant, Sys Converging on Σ_Obs',
    caption:
      'Husserl (Phen), Rovelli (Quant), and Varela (Sys) projecting their respective categories through three commutative functor beams onto the shared invariant observer prism Σ_Obs while preserving composition F(g ∘ f) = F(g) ∘ F(f) (§38).'
  },
  {
    plateNumber: 'Plate XVI',
    anchorChapter: 8,
    title: 'Anti-Holism Crucibles: Interferometer, Lipid Vesicle Calorimeter, EEG Masking & Pulsar Timing',
    caption:
      'Four physically disjoint experimental falsification apparatuses decoupling Axioms A1–A4 against Duhem–Quine evasion: Local Friendliness interferometry (A1/A2), active lipid vesicle persistence (A3), psychophysical EEG masking (A4a), and optical–pulsar chronometry (§40).'
  },
  {
    plateNumber: 'Plate XVII',
    anchorChapter: 9,
    title: 'Resolution of Constitutive Absence: Interlocked Celestial Meridian & Optical Retina Prism',
    caption:
      'A human retina aligned along an interlocked astronomical meridian prism: resolving the Paradox of Constitutive Absence by showing why an observer inhabits a relational, finite, asymmetric horizon rather than sitting inside or outside reality (§§41, 43).'
  },
  {
    plateNumber: 'Plate XVIII',
    anchorChapter: 9,
    title: 'Nāgārjuna, Haraway & Kant: Svasaṃvedana Mirror-Eye & Situated Standpoint Reticle',
    caption:
      'Nāgārjuna (emptiness/interdependence), Donna Haraway (situated partial knowledges against the "god trick"), and Immanuel Kant converging on Dignāga’s reflexive svasaṃvedana mirror-eye and multi-perspective parity without Eurocentric privilege (§§42–43).'
  }
];

function escapeHtml(raw: string): string {
  return raw
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function htmlEquationToText(unicodeHtml: string): string {
  return unicodeHtml
    .replace(/<sup>(.*?)<\/sup>/gi, '^($1)')
    .replace(/<sub>(.*?)<\/sub>/gi, '_$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/[ ]{2,}/g, ' ')
    .trim();
}

function renderHtmlNonBoldTokens(raw: string): string {
  const codeSplit = raw.split(/(`[^`]+`)/g);
  return codeSplit
    .map((seg, i) => {
      if (!seg) return '';
      if (i % 2 === 1) {
        return `<code>${escapeHtml(seg.slice(1, -1))}</code>`;
      }
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
      if (j % 2 === 1) {
        return `<strong>${renderHtmlNonBoldTokens(bSeg.slice(2, -2))}</strong>`;
      }
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

function renderHtmlEquation(eq: SyntheseEquation): string {
  return `<div class="eq-box">
    <div class="eq-math">${eq.unicodeHtml} <span class="eq-num">Logical Schema ${escapeHtml(eq.label)}</span></div>
    <div class="eq-cap">${escapeHtml(eq.caption)}</div>
    <div class="eq-meaning">${escapeHtml(eq.plainMeaning)}</div>
    ${
      eq.derivationSteps?.length
        ? `<ol class="deriv-list">${eq.derivationSteps.map((s) => `<li>${renderHtmlInlineTokens(s)}</li>`).join('')}</ol>`
        : ''
    }
  </div>`;
}

function renderHtmlTheorem(tb: SyntheseTheoremBox): string {
  return `<div class="theorem-box">
    <div class="box-title">${escapeHtml(tb.kind)} ${escapeHtml(tb.number)} · ${escapeHtml(tb.title)}</div>
    <p>${renderHtmlInlineTokens(tb.statement)}</p>
    <ol>${tb.proofSteps.map((s) => `<li>${renderHtmlInlineTokens(s)}</li>`).join('')}</ol>
    <div class="box-note">${escapeHtml(tb.sourceNote)}</div>
  </div>`;
}

function renderHtmlWorkedExample(wx: SyntheseWorkedExample): string {
  return `<div class="worked-box">
    <div class="box-title">${escapeHtml(wx.title)}</div>
    <p class="epigraph">${renderHtmlInlineTokens(wx.setup)}</p>
    <ol>${wx.steps.map((s) => `<li>${renderHtmlInlineTokens(s)}</li>`).join('')}</ol>
    ${renderHtmlEquation(wx.resultEquation)}
    <p class="lead"><strong>Conclusion:</strong> ${renderHtmlInlineTokens(wx.takeaway)}</p>
  </div>`;
}

function renderHtmlChapterTable(chapterNum: number): string {
  if (chapterNum === 2) {
    return `
      <h3>Table 2.1 · Phenomenological &amp; Transcendental Genealogy Matrix (§§2–9)</h3>
      <table>
        <thead><tr><th>Theory</th><th>Core Structural Claim</th><th>Paradox Encountered</th><th>Logical Counterpart</th></tr></thead>
        <tbody>${TABLE_2_1_PHENOMENOLOGY.map((r) => `<tr><td>${escapeHtml(r.theory)}</td><td>${escapeHtml(r.coreClaim)}</td><td>${escapeHtml(r.paradoxEncountered)}</td><td>${escapeHtml(r.bundleCounterpart)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  if (chapterNum === 3) {
    return `
      <h3>Table 3.1 · Deconstructive &amp; Post-Structuralist Matrix (§§10–15a)</h3>
      <table>
        <thead><tr><th>Theory</th><th>Core Claim</th><th>Structural Dissolution</th><th>Logical Counterpart</th></tr></thead>
        <tbody>${TABLE_3_1_DECONSTRUCTION.map((r) => `<tr><td>${escapeHtml(r.theory)}</td><td>${escapeHtml(r.coreClaim)}</td><td>${escapeHtml(r.structuralDissolution)}</td><td>${escapeHtml(r.bundleCounterpart)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  if (chapterNum === 4) {
    return `
      <h3>Table 4.1 · Orthodox Quantum Foundations Observer Models (§§16–20)</h3>
      <table>
        <thead><tr><th>Framework</th><th>Where Observer Sits</th><th>Cut / Collapse Status</th><th>Philosophical Mapping</th></tr></thead>
        <tbody>${TABLE_4_1_QUANTUM.slice(0, 5).map((r) => `<tr><td>${escapeHtml(r.theory)}</td><td>${escapeHtml(r.observerSeat)}</td><td>${escapeHtml(r.cutStatus)}</td><td>${escapeHtml(r.bundleMapping)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  if (chapterNum === 5) {
    return `
      <h3>Table 5.1 · Relational, Epistemic, Decoherent &amp; Dynamical Quantum Models (§§21–27)</h3>
      <table>
        <thead><tr><th>Framework</th><th>Where Observer Sits</th><th>Cut / Decoherence Status</th><th>Philosophical Mapping</th></tr></thead>
        <tbody>${TABLE_4_1_QUANTUM.slice(5).map((r) => `<tr><td>${escapeHtml(r.theory)}</td><td>${escapeHtml(r.observerSeat)}</td><td>${escapeHtml(r.cutStatus)}</td><td>${escapeHtml(r.bundleMapping)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  if (chapterNum === 6) {
    return `
      <h3>Table 6.1 · Systems-Theoretical &amp; Enactive Closure Matrix (§§28–33)</h3>
      <table>
        <thead><tr><th>Theory</th><th>Core Claim</th><th>Closure Mechanism</th><th>Logical Counterpart</th></tr></thead>
        <tbody>${TABLE_5_1_SYSTEMS.map((r) => `<tr><td>${escapeHtml(r.theory)}</td><td>${escapeHtml(r.coreClaim)}</td><td>${escapeHtml(r.closureMechanism)}</td><td>${escapeHtml(r.bundleCounterpart)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  if (chapterNum === 7) {
    return `
      <h3>Table 7.1 · Axiomatic Resolution of the Constitutive-Absence Paradox (§§34–37)</h3>
      <table>
        <thead><tr><th>Logical Principle</th><th>Structural Role</th><th>Phenomenological Correlate</th><th>Antinomy Dissolved</th></tr></thead>
        <tbody>${TABLE_6_1_RESOLUTION.map((r) => `<tr><td>${escapeHtml(r.formalObject)}</td><td>${escapeHtml(r.mathematicalRole)}</td><td>${escapeHtml(r.phenomenologicalCorrelate)}</td><td>${escapeHtml(r.obstructionResolved)}</td></tr>`).join('')}</tbody>
      </table>
      <h3>Table 7.2 · Separating Countermodels &amp; Axiom Independence Matrix (M_~A1..M_~A4, §37)</h3>
      <table>
        <thead><tr><th>Model</th><th>Semantic Domain &amp; Structure</th><th>A1</th><th>A2</th><th>A3</th><th>A4</th><th>Independence Proof</th></tr></thead>
        <tbody>${SYNTHESE_INDEPENDENCE_MODELS.map((m) => `<tr><td>${escapeHtml(m.model)}</td><td>${escapeHtml(m.domainAndStructure)}</td><td>${escapeHtml(m.a1)}</td><td>${escapeHtml(m.a2)}</td><td>${escapeHtml(m.a3)}</td><td>${escapeHtml(m.a4)}</td><td>${escapeHtml(m.diagnosticProof)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  if (chapterNum === 8) {
    return `
      <h3>Table 8.1 · Master 32-Position Axiomatic Cross-Reference Matrix (§§2–33 × A1–A4)</h3>
      <table>
        <thead><tr><th>§</th><th>Framework</th><th>A1</th><th>A2</th><th>A3</th><th>A4</th><th>Structural Synthesis &amp; Anomaly Note</th></tr></thead>
        <tbody>${SYNTHESE_32_MATRIX.map((r) => `<tr><td>${escapeHtml(r.section)}</td><td>${escapeHtml(r.framework)}</td><td>${escapeHtml(r.a1)}</td><td>${escapeHtml(r.a2)}</td><td>${escapeHtml(r.a3)}</td><td>${escapeHtml(r.a4)}</td><td>${escapeHtml(r.statusNote)}</td></tr>`).join('')}</tbody>
      </table>
      <h3>Table 8.2 · Cross-Tradition Structural Identity Audit (§§38–39)</h3>
      <table>
        <thead><tr><th>Invariant Criterion</th><th>Husserl</th><th>Rovelli RQM</th><th>Autopoiesis</th><th>Four-Axiom Logic</th></tr></thead>
        <tbody>${TABLE_7_1_IDENTITY_SYNTHESIS.map((r) => `<tr><td>${escapeHtml(r.structuralCriterion)}</td><td>${escapeHtml(r.husserlPhenom)}</td><td>${escapeHtml(r.rovelliRqm)}</td><td>${escapeHtml(r.autopoiesisBio)}</td><td>${escapeHtml(r.fiberBundleFormal)}</td></tr>`).join('')}</tbody>
      </table>
      <h3>Table 8.3 · Axiom-by-Axiom Empirical Falsification &amp; Anti-Holism Crucibles (§40)</h3>
      <table>
        <thead><tr><th>Domain</th><th>Target Observable</th><th>Philosophical Prediction</th><th>Null Consequence</th></tr></thead>
        <tbody>${TABLE_8_1_TESTABLE_CORRELATION.map((r) => `<tr><td>${escapeHtml(r.channel)}</td><td>${escapeHtml(r.targetObservable)}</td><td>${escapeHtml(r.predictedSignal)}</td><td>${escapeHtml(r.nullConsequence)}</td></tr>`).join('')}</tbody>
      </table>
      <h3>Table 8.4 · Auxiliary Assumptions Isolated Across Disjoint Experimental Crucibles (§40 · Duhem–Quine Defense)</h3>
      <table>
        <thead><tr><th>Experimental Crucible</th><th>Target Axiom</th><th>Isolated Auxiliary Assumptions</th><th>Anti-Holism Decoupling Guard</th></tr></thead>
        <tbody>${TABLE_8_4_AUXILIARY_ASSUMPTIONS.map((r) => `<tr><td>${escapeHtml(r.crucible)}</td><td>${escapeHtml(r.targetAxiom)}</td><td>${escapeHtml(r.isolatedAuxiliaries)}</td><td>${escapeHtml(r.decouplingGuard)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  return '';
}

export function buildSyntheseSelfContainedHtml(): string {
  const graphicalAbstractHtml = SYNTHESE_FIGURES.filter((f) => f.anchorChapter === 0)
    .map(
      (fg) => `
    <figure>
      <div class="fig-meta">${escapeHtml(fg.figureNumber)} · ${escapeHtml(fg.title)}</div>
      ${formatSvgMathMarkup(fg.svgMarkup)}
      <figcaption>${escapeHtml(fg.caption)}</figcaption>
    </figure>`
    )
    .join('\n');

  const chaptersHtml = SYNTHESE_CHAPTERS.map((ch) => {
    const figs = SYNTHESE_FIGURES.filter((f) => f.anchorChapter === ch.number);
    const argMapHtml =
      ch.number === 7
        ? `<div class="worked-box">
            <div class="box-title">${escapeHtml(SYNTHESE_ARGUMENT_MAP.title)}</div>
            <p>${escapeHtml(SYNTHESE_ARGUMENT_MAP.summary)}</p>
            <ol>${SYNTHESE_ARGUMENT_MAP.nodes
              .map(
                (n) =>
                  `<li><strong>${escapeHtml(n.step)}:</strong> ${escapeHtml(n.rule)} — <em>${escapeHtml(n.leadsTo)}</em></li>`
              )
              .join('')}</ol>
          </div>`
        : '';

    return `
      <section class="chapter">
        <h2>Chapter ${ch.number}: ${escapeHtml(ch.title)}</h2>
        <p class="epigraph">${escapeHtml(ch.epigraph)}</p>
        ${
          ch.chapterIntro.length
            ? `<div class="chapter-intro">${ch.chapterIntro.map((p) => renderHtmlRichParagraph(p)).join('')}</div>`
            : ''
        }
        ${argMapHtml}
        ${ch.subsections
          .map(
            (sub) => `
          <div class="subsec">
            <h3>§${escapeHtml(sub.number)} · ${escapeHtml(sub.title)}</h3>
            ${sub.paragraphs.map((p) => renderHtmlRichParagraph(p)).join('')}
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

  const appendicesHtml = SYNTHESE_APPENDICES.map(
    (a) => `
      <h3>Appendix ${escapeHtml(a.letter)}: ${escapeHtml(a.title)}</h3>
      <p><em>${escapeHtml(a.summary)}</em></p>
      ${a.paragraphs.map((p) => renderHtmlRichParagraph(p)).join('')}
      ${a.equations.map(renderHtmlEquation).join('')}
      ${a.theoremBoxes ? a.theoremBoxes.map(renderHtmlTheorem).join('') : ''}
      ${
        a.reproducibilityLedger?.length
          ? `<table>
               <thead><tr><th>Condition</th><th>Logical Rule</th><th>Tradition Grounds</th><th>Deductive Outcome</th></tr></thead>
               <tbody>${a.reproducibilityLedger
                 .map(
                   (row) =>
                     `<tr><td>${escapeHtml(row.checkpoint)}</td><td>${escapeHtml(row.formula)}</td><td>${escapeHtml(row.referenceConstants)}</td><td>${escapeHtml(row.computedOutput)}</td></tr>`
                 )
                 .join('')}</tbody>
             </table>`
          : ''
      }
      ${
        a.refereeObjections?.length
          ? a.refereeObjections
              .map(
                (obj) => `<div class="worked-box"><div class="box-title">${escapeHtml(obj.objection)}</div><p>${escapeHtml(obj.reply)}</p></div>`
              )
              .join('')
          : ''
      }
    `
  ).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(SYNTHESE_META.title)}</title>
<style>
  body { font-family: Georgia, "Times New Roman", serif; color: #0B203B; background: #F0F6FA; margin: 0; padding: 3rem 1.5rem; line-height: 1.78; }
  main { max-width: 860px; margin: 0 auto; background: #F7FAFC; padding: 3.5rem; border: 1px solid #A6BCC8; }
  h1, h2, h3, h4 { font-weight: 400; color: #0B203B; }
  h1 { font-size: 2.25rem; line-height: 1.18; margin: 0.4rem 0 0.75rem; }
  h2 { font-size: 1.58rem; border-bottom: 1px solid #A6BCC8; padding-bottom: 0.45rem; margin-top: 2.8rem; }
  h3 { font-size: 1.18rem; color: #0F294A; margin-top: 1.9rem; }
  h4.sub-head { font-size: 1.04rem; color: #14335A; margin: 1.1rem 0 0.4rem; }
  code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.86em; background: #F0F6FA; border: 1px solid #BFD0DA; padding: 0.08rem 0.3rem; color: #14335A; }
  .masthead-rule { border-top: 3px solid #14335A; border-bottom: 1px solid #28676A; height: 4px; margin-bottom: 1.8rem; }
  .layman-deck { font-size: 1.12rem; color: #14335A; font-style: italic; margin: 0.5rem 0 1.2rem; }
  .epigraph { font-style: italic; color: #28676A; }
  .lead { color: #28676A; font-style: italic; }
  .chapter-intro { border-top: 1px solid #A6BCC8; border-bottom: 1px solid #A6BCC8; background: #F0F6FA; padding: 1rem 1.35rem; margin: 1.4rem 0 2rem; }
  @media print {
    @page { size: A4; margin: 20mm; }
    body { padding: 0; background: #FFFFFF; }
    main { max-width: none; padding: 0; border: none; }
    .chapter { page-break-before: always; }
    .eq-box, .theorem-box, .worked-box, figure { break-inside: avoid; }
  }
  .eq-box { background: #F0F6FA; border: 1px solid #A6BCC8; padding: 1rem 1.25rem; margin: 1.4rem 0; }
  .eq-math { text-align: center; font-size: 1.04rem; color: #0B203B; overflow-wrap: anywhere; }
  .eq-num { float: right; font-family: monospace; font-size: 0.85rem; color: #1B3F6C; }
  .eq-cap { font-size: 0.86rem; color: #0F294A; margin-top: 0.5rem; text-align: center; font-style: italic; }
  .eq-meaning { font-size: 0.82rem; color: #28676A; margin-top: 0.25rem; text-align: center; }
  .deriv-list { font-size: 0.82rem; color: #0B203B; margin: 0.6rem 0 0.4rem; padding-left: 1.2rem; }
  .theorem-box { background: #E5EFF5; border: 1px solid #1B3F6C; padding: 1.1rem 1.35rem; margin: 1.4rem 0; }
  .worked-box { background: #F0F6FA; border: 1px solid #28676A; padding: 1.1rem 1.35rem; margin: 1.4rem 0; }
  .box-title { color: #14335A; margin-bottom: 0.5rem; font-weight: bold; }
  .box-note { font-family: monospace; font-size: 0.78rem; color: #28676A; margin-top: 0.5rem; overflow-wrap: anywhere; }
  table { width: 100%; table-layout: fixed; border-collapse: collapse; margin: 1.6rem 0; font-size: 0.80rem; }
  th { background: #E5EFF5; color: #0B203B; text-align: left; padding: 0.48rem; border: 1px solid #51677B; word-break: break-word; overflow-wrap: anywhere; }
  td { padding: 0.42rem; border: 1px solid #A6BCC8; vertical-align: top; word-break: break-word; overflow-wrap: anywhere; }
  tr:nth-child(even) td { background: #E5EFF5; }
  figure { margin: 2rem 0; padding: 1.5rem; border: 1px solid #51677B; background: #08182E; color: #F0F6FA; }
  figure svg { width: 100%; aspect-ratio: 210 / 297; height: auto; display: block; margin: 0 auto; background: #08182E; }
  .fig-meta { font-family: monospace; font-size: 0.82rem; color: #E5EFF5; letter-spacing: 0.08em; text-transform: uppercase; border-bottom: 1px solid #51677B; padding-bottom: 0.5rem; margin-bottom: 0.85rem; }
  figcaption { font-size: 0.88rem; color: #BFD0DA; border-top: 1px solid #51677B; padding-top: 0.65rem; margin-top: 0.85rem; }
  .idx-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; font-size: 0.84rem; }
  .idx-row { display: flex; justify-content: space-between; border-bottom: 1px solid #BFD0DA; padding: 0.25rem 0; gap: 0.5rem; }
</style>
</head>
<body>
<main>
  <div class="masthead-rule"></div>
  <h1>${escapeHtml(SYNTHESE_META.title)}</h1>
  <p class="layman-deck">${escapeHtml(SYNTHESE_META.laymanDeck)}</p>
  <p><strong>Authors:</strong> ${SYNTHESE_META.authors
    .map(
      (a) =>
        `${escapeHtml(a.name)} (${escapeHtml(a.affiliation)}${
          a.orcidUrl
            ? `; ORCID: <a href="${escapeHtml(a.orcidUrl)}">${escapeHtml(a.orcid ?? a.orcidUrl)}</a>`
            : a.email
            ? `; Email: ${escapeHtml(a.email)}`
            : a.orcidNote
            ? `; ${escapeHtml(a.orcidNote)}`
            : ''
        })`
    )
    .join('; ')}</p>
  <h2>Abstract</h2>
  ${SYNTHESE_ABSTRACT.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
  ${graphicalAbstractHtml}

  <h2>Treatise Roadmap (Chapters 1–9)</h2>
  <table>
    <thead><tr><th>Chapter</th><th>Sections</th><th>Core Deductive &amp; Genealogy Contribution</th><th>Visual Anchor</th></tr></thead>
    <tbody>${SYNTHESE_ROADMAP.map(
      (rm) =>
        `<tr><td>${escapeHtml(rm.chapter)}</td><td><code>${escapeHtml(rm.sections)}</code></td><td>${escapeHtml(rm.centralMove)}</td><td>${escapeHtml(rm.visualAnchor)}</td></tr>`
    ).join('')}</tbody>
  </table>

  <h2>Table of Axioms (A1–A4)</h2>
  <table>
    <thead><tr><th>Axiom</th><th>Canonical S4 Formula</th><th>Modal &amp; Epistemic Status</th><th>Reductio on Denial</th><th>Falsification Trigger</th></tr></thead>
    <tbody>${SYNTHESE_AXIOM_TABLE.map(
      (ax) =>
        `<tr><td>${escapeHtml(ax.code)} · ${escapeHtml(ax.name)}</td><td><code>${escapeHtml(ax.canonicalFormula)}</code></td><td>${escapeHtml(ax.modalAndEpistemicStatus)}</td><td>${escapeHtml(ax.reductioOnDenial)}</td><td>${escapeHtml(ax.falsificationTrigger)}</td></tr>`
    ).join('')}</tbody>
  </table>

  <h2>Standardized Notation (Chapters 1–9)</h2>
  <table>
    <thead><tr><th>Symbol</th><th>Formal Meaning</th><th>First Defined</th></tr></thead>
    <tbody>${SYNTHESE_NOTATION_TABLE.map(
      (n) => `<tr><td><code>${escapeHtml(n.symbol)}</code></td><td>${escapeHtml(n.role)}</td><td>${escapeHtml(n.firstDefined)}</td></tr>`
    ).join('')}</tbody>
  </table>

  <h2>How to Read This Treatise</h2>
  <table>
    <thead><tr><th>Audience</th><th>Essential Reading Path</th><th>Primary Focus</th></tr></thead>
    <tbody>${SYNTHESE_HOW_TO_READ.map(
      (tr) =>
        `<tr><td>${escapeHtml(tr.audience)}</td><td><code>${escapeHtml(tr.essentialSections)}</code></td><td>${escapeHtml(tr.entryFocus)}</td></tr>`
    ).join('')}</tbody>
  </table>

  ${chaptersHtml}
  <h2>Glossary</h2>
  <h3>Philosophical &amp; Conceptual Lexicon</h3>
  ${SYNTHESE_GLOSSARY.map((g) => `<p><strong>${escapeHtml(g.term)}${g.acronym ? ` (${escapeHtml(g.acronym)})` : ''}:</strong> ${escapeHtml(g.definition)}</p>`).join('')}
  <h3>Logical Symbols &amp; Axioms</h3>
  <table>
    <thead><tr><th>Symbol</th><th>Concept</th><th>Domain</th><th>Logical Definition</th></tr></thead>
    <tbody>${SYNTHESE_SYMBOL_GLOSSARY.map((s) => `<tr><td>${escapeHtml(s.symbol)}</td><td>${escapeHtml(s.name)}</td><td>${escapeHtml(s.domain)}</td><td>${escapeHtml(s.definition)}</td></tr>`).join('')}</tbody>
  </table>
  <h2>Supplementary Appendices A–${escapeHtml(SYNTHESE_APPENDICES[SYNTHESE_APPENDICES.length - 1]?.letter ?? 'D')}</h2>
  ${appendicesHtml}
  <h2>References</h2>
  ${SYNTHESE_REFERENCES.map((r) => `<p>[${r.id}] ${escapeHtml(r.citation)}</p>`).join('')}
  <h2>Index of Names &amp; Index of Concepts</h2>
  <div class="idx-grid">
    <div>
      <h3>Index of Names</h3>
      ${SYNTHESE_INDEX_OF_NAMES.map((it) => `<div class="idx-row"><span>${escapeHtml(it.entry)}</span><span>${escapeHtml(it.sections)}</span></div>`).join('')}
    </div>
    <div>
      <h3>Index of Concepts</h3>
      ${SYNTHESE_INDEX_OF_CONCEPTS.map((it) => `<div class="idx-row"><span>${escapeHtml(it.entry)}</span><span>${escapeHtml(it.sections)}</span></div>`).join('')}
    </div>
  </div>
</main>
</body>
</html>`;
}

export function buildSyntheseMarkdown(): string {
  const lines: string[] = [];
  lines.push(`# ${SYNTHESE_META.title}`);
  lines.push(`*${SYNTHESE_META.laymanDeck}*`);
  lines.push('');
  lines.push(
    `**Authors:** ${SYNTHESE_META.authors
      .map(
        (a) =>
          `${a.name} (${a.affiliation}${a.orcid ? `; ORCID ${a.orcid}` : a.email ? `; Email ${a.email}` : a.orcidNote ? `; ${a.orcidNote}` : ''})`
      )
      .join('; ')}`
  );
  lines.push(`**Keywords:** ${SYNTHESE_META.keywords.join(', ')}`);
  lines.push('');
  lines.push('## Abstract');
  SYNTHESE_ABSTRACT.forEach((p) => lines.push(p, ''));

  lines.push('## Editorial Plates & Vector Figures Index (29 Full-Page A4 Illustrations)');
  SYNTHESE_PLATES_INDEX.forEach((pl) => {
    lines.push(`- **${pl.plateNumber} (Chapter ${pl.anchorChapter}):** *${pl.title}* — ${pl.caption}`);
  });
  SYNTHESE_FIGURES.forEach((fg) => {
    lines.push(`- **${fg.figureNumber} (${fg.anchorChapter === 0 ? 'Abstract' : `Chapter ${fg.anchorChapter}`}):** *${fg.title}* — ${fg.caption}`);
  });
  lines.push('');

  lines.push('## Treatise Roadmap (Chapters 1–9)');
  SYNTHESE_ROADMAP.forEach((rm) => {
    lines.push(`- **${rm.chapter}** (\`${rm.sections}\`): ${rm.centralMove} — *${rm.visualAnchor}*`);
  });
  lines.push('');

  lines.push('## Table of Axioms (A1–A4)');
  SYNTHESE_AXIOM_TABLE.forEach((ax) => {
    lines.push(`- **${ax.code} · ${ax.name}:** \`${ax.canonicalFormula}\` — ${ax.modalAndEpistemicStatus} Reductio: ${ax.reductioOnDenial}. Falsifier: ${ax.falsificationTrigger}`);
  });
  lines.push('');

  lines.push('## Standardized Notation (Chapters 1–9)');
  SYNTHESE_NOTATION_TABLE.forEach((n) => {
    lines.push(`- \`${n.symbol}\` — ${n.role} (${n.firstDefined})`);
  });
  lines.push('');

  lines.push('## How to Read This Treatise');
  SYNTHESE_HOW_TO_READ.forEach((tr) => {
    lines.push(`- **${tr.audience}** (\`${tr.essentialSections}\`): ${tr.entryFocus}`);
  });
  lines.push('');

  SYNTHESE_CHAPTERS.forEach((ch) => {
    lines.push(`## Chapter ${ch.number}: ${ch.title}`);
    lines.push(`> *${ch.epigraph}*`);
    lines.push('');
    ch.chapterIntro.forEach((p) => lines.push(p, ''));
    if (ch.number === 7) {
      lines.push(`### ${SYNTHESE_ARGUMENT_MAP.title}`);
      lines.push(SYNTHESE_ARGUMENT_MAP.summary, '');
      SYNTHESE_ARGUMENT_MAP.nodes.forEach((n) => lines.push(`- **${n.step}:** ${n.rule} → ${n.leadsTo}`));
      lines.push('');
    }
    ch.subsections.forEach((sub) => {
      lines.push(`### §${sub.number} ${sub.title}`);
      sub.paragraphs.forEach((p) => lines.push(p, ''));
      if (sub.equation) {
        lines.push(`**Logical Schema ${sub.equation.label}:** \`${htmlEquationToText(sub.equation.unicodeHtml)}\``);
        lines.push(`*${sub.equation.caption}* — ${sub.equation.plainMeaning}`);
        if (sub.equation.derivationSteps?.length) {
          sub.equation.derivationSteps.forEach((st, idx) => lines.push(`  ${idx + 1}. ${st}`));
        }
        lines.push('');
      }
      if (sub.theoremBox) {
        lines.push(`**${sub.theoremBox.kind} ${sub.theoremBox.number} (${sub.theoremBox.title}):** ${sub.theoremBox.statement}`);
        sub.theoremBox.proofSteps.forEach((s, i) => lines.push(`${i + 1}. ${s}`));
        lines.push('');
      }
      if (sub.workedExample) {
        lines.push(`**${sub.workedExample.title}:** ${sub.workedExample.setup}`);
        sub.workedExample.steps.forEach((s, i) => lines.push(`${i + 1}. ${s}`));
        lines.push(`*Logical Schema ${sub.workedExample.resultEquation.label}:* \`${htmlEquationToText(sub.workedExample.resultEquation.unicodeHtml)}\``);
        lines.push(`*Conclusion:* ${sub.workedExample.takeaway}`, '');
      }
    });

    if (ch.number === 2) {
      lines.push('### Table 2.1 · Phenomenological & Transcendental Genealogy Matrix (§§2–9)');
      lines.push('| Theory | Core Structural Claim | Paradox Encountered | Logical Counterpart |');
      lines.push('|---|---|---|---|');
      TABLE_2_1_PHENOMENOLOGY.forEach((r) => lines.push(`| ${r.theory} | ${r.coreClaim} | ${r.paradoxEncountered} | ${r.bundleCounterpart} |`));
      lines.push('');
    }
    if (ch.number === 3) {
      lines.push('### Table 3.1 · Deconstructive & Post-Structuralist Matrix (§§10–15a)');
      lines.push('| Theory | Core Claim | Structural Dissolution | Logical Counterpart |');
      lines.push('|---|---|---|---|');
      TABLE_3_1_DECONSTRUCTION.forEach((r) => lines.push(`| ${r.theory} | ${r.coreClaim} | ${r.structuralDissolution} | ${r.bundleCounterpart} |`));
      lines.push('');
    }
    if (ch.number === 4) {
      lines.push('### Table 4.1 · Orthodox Quantum Foundations Observer Models (§§16–20)');
      lines.push('| Framework | Where Observer Sits | Cut / Collapse Status | Philosophical Mapping |');
      lines.push('|---|---|---|---|');
      TABLE_4_1_QUANTUM.slice(0, 5).forEach((r) => lines.push(`| ${r.theory} | ${r.observerSeat} | ${r.cutStatus} | ${r.bundleMapping} |`));
      lines.push('');
    }
    if (ch.number === 5) {
      lines.push('### Table 5.1 · Relational, Epistemic, Decoherent & Dynamical Quantum Models (§§21–27)');
      lines.push('| Framework | Where Observer Sits | Cut / Decoherence Status | Philosophical Mapping |');
      lines.push('|---|---|---|---|');
      TABLE_4_1_QUANTUM.slice(5).forEach((r) => lines.push(`| ${r.theory} | ${r.observerSeat} | ${r.cutStatus} | ${r.bundleMapping} |`));
      lines.push('');
    }
    if (ch.number === 6) {
      lines.push('### Table 6.1 · Systems-Theoretical & Enactive Closure Matrix (§§28–33)');
      lines.push('| Theory | Core Claim | Closure Mechanism | Logical Counterpart |');
      lines.push('|---|---|---|---|');
      TABLE_5_1_SYSTEMS.forEach((r) => lines.push(`| ${r.theory} | ${r.coreClaim} | ${r.closureMechanism} | ${r.bundleCounterpart} |`));
      lines.push('');
    }
    if (ch.number === 7) {
      lines.push('### Table 7.1 · Axiomatic Resolution of the Constitutive-Absence Paradox (§§34–37)');
      lines.push('| Logical Principle | Structural Role | Phenomenological Correlate | Antinomy Dissolved |');
      lines.push('|---|---|---|---|');
      TABLE_6_1_RESOLUTION.forEach((r) => lines.push(`| ${r.formalObject} | ${r.mathematicalRole} | ${r.phenomenologicalCorrelate} | ${r.obstructionResolved} |`));
      lines.push('');
      lines.push('### Table 7.2 · Separating Countermodels & Axiom Independence Matrix (M_~A1..M_~A4, §37)');
      lines.push('| Model | Semantic Domain & Structure | A1 | A2 | A3 | A4 | Independence Proof |');
      lines.push('|---|---|---|---|---|---|---|');
      SYNTHESE_INDEPENDENCE_MODELS.forEach((m) => lines.push(`| ${m.model} | ${m.domainAndStructure} | ${m.a1} | ${m.a2} | ${m.a3} | ${m.a4} | ${m.diagnosticProof} |`));
      lines.push('');
    }
    if (ch.number === 8) {
      lines.push('### Table 8.1 · Master 32-Position Cross-Reference Matrix (§§2–33 × A1–A4)');
      lines.push('| § | Framework | A1 | A2 | A3 | A4 | Structural Synthesis Note |');
      lines.push('|---|---|---|---|---|---|---|');
      SYNTHESE_32_MATRIX.forEach((r) => {
        lines.push(`| ${r.section} | ${r.framework} | ${r.a1} | ${r.a2} | ${r.a3} | ${r.a4} | ${r.statusNote} |`);
      });
      lines.push('');
      lines.push('### Table 8.2 · Cross-Tradition Structural Identity Matrix (§§38–39)');
      lines.push('| Invariant Criterion | Husserl | Rovelli RQM | Autopoiesis | Four-Axiom Logic |');
      lines.push('|---|---|---|---|---|');
      TABLE_7_1_IDENTITY_SYNTHESIS.forEach((r) => {
        lines.push(`| ${r.structuralCriterion} | ${r.husserlPhenom} | ${r.rovelliRqm} | ${r.autopoiesisBio} | ${r.fiberBundleFormal} |`);
      });
      lines.push('');
      lines.push('### Table 8.3 · Axiom-by-Axiom Empirical Falsification & Anti-Holism Crucibles (§40)');
      lines.push('| Domain | Target Observable | Philosophical Prediction | Null Consequence |');
      lines.push('|---|---|---|---|');
      TABLE_8_1_TESTABLE_CORRELATION.forEach((r) => {
        lines.push(`| ${r.channel} | ${r.targetObservable} | ${r.predictedSignal} | ${r.nullConsequence} |`);
      });
      lines.push('');
      lines.push('### Table 8.4 · Auxiliary Assumptions Isolated Across Disjoint Experimental Crucibles (§40 · Duhem–Quine Defense)');
      lines.push('| Experimental Crucible | Target Axiom | Isolated Auxiliary Assumptions | Anti-Holism Decoupling Guard |');
      lines.push('|---|---|---|---|');
      TABLE_8_4_AUXILIARY_ASSUMPTIONS.forEach((r) => {
        lines.push(`| ${r.crucible} | ${r.targetAxiom} | ${r.isolatedAuxiliaries} | ${r.decouplingGuard} |`);
      });
      lines.push('');
    }
  });

  lines.push('## Glossary');
  SYNTHESE_GLOSSARY.forEach((g) => {
    lines.push(`- **${g.term}${g.acronym ? ` (${g.acronym})` : ''}:** ${g.definition}`);
  });
  lines.push('');
  lines.push('### Logical Symbols & Axioms');
  lines.push('| Symbol | Concept | Domain | Logical Definition |');
  lines.push('|---|---|---|---|');
  SYNTHESE_SYMBOL_GLOSSARY.forEach((s) => {
    lines.push(`| ${s.symbol} | ${s.name} | ${s.domain} | ${s.definition} |`);
  });
  lines.push('');
  SYNTHESE_APPENDICES.forEach((a) => {
    lines.push(`## Appendix ${a.letter}: ${a.title}`);
    lines.push(`*${a.summary}*`, '');
    a.paragraphs.forEach((p) => lines.push(p, ''));
    a.equations.forEach((eq) => {
      lines.push(`**Logical Schema ${eq.label}:** \`${htmlEquationToText(eq.unicodeHtml)}\` — ${eq.caption}`, '');
    });
    a.theoremBoxes?.forEach((tb) => {
      lines.push(`**${tb.kind} ${tb.number} (${tb.title}):** ${tb.statement}`);
      tb.proofSteps.forEach((s, i) => lines.push(`${i + 1}. ${s}`));
      lines.push('');
    });
    if (a.reproducibilityLedger?.length) {
      lines.push('| Condition | Logical Rule | Tradition Grounds | Deductive Outcome |');
      lines.push('|---|---|---|---|');
      a.reproducibilityLedger.forEach((r) => lines.push(`| ${r.checkpoint} | ${r.formula} | ${r.referenceConstants} | ${r.computedOutput} |`));
      lines.push('');
    }
    a.refereeObjections?.forEach((o) => {
      lines.push(`- **${o.objection}** ${o.reply}`);
    });
    lines.push('');
  });
  lines.push('## References');
  SYNTHESE_REFERENCES.forEach((r) => lines.push(`${r.id}. ${r.citation}`));
  lines.push('');
  lines.push('## Index of Names');
  SYNTHESE_INDEX_OF_NAMES.forEach((it) => lines.push(`- ${it.entry} — ${it.sections}`));
  lines.push('');
  lines.push('## Index of Concepts');
  SYNTHESE_INDEX_OF_CONCEPTS.forEach((it) => lines.push(`- ${it.entry} — ${it.sections}`));
  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Pure 7-bit ASCII LaTeX Translator (Hardened)
// ---------------------------------------------------------------------------

const UNICODE_SUP_TO_TEX: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
  '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  '⁺': '+', '⁻': '-', 'ⁿ': 'n', 'ʳ': 'r', 'ⁱ': 'i', 'ʲ': 'j'
};

const UNICODE_SUB_TO_TEX: Record<string, string> = {
  '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
  '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
  '₊': '+', '₋': '-', 'ᵢ': 'i'
};

const SUP_CHAR_RE = /[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿʳⁱʲ]/;
const SUB_CHAR_RE = /[₀₁₂₃₄₅₆₇₈₉₊₋ᵢ]/;
const SUP_RUN_RE = /[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿʳⁱʲ]+/g;
const SUB_RUN_RE = /[₀₁₂₃₄₅₆₇₈₉₊₋ᵢ]+/g;

const TEXT_LATIN_ACCENTS: Record<string, string> = {
  'à': '\\`{a}', 'á': "\\'{a}", 'â': '\\^{a}', 'ä': '\\"{a}', 'é': "\\'{e}",
  'è': '\\`{e}', 'ê': '\\^{e}', 'ë': '\\"{e}', 'Ê': '\\^{E}', 'í': "\\'{i}", 'î': '\\^{i}',
  'ï': '\\"{i}', 'ñ': '\\~{n}', 'ó': "\\'{o}", 'ô': '\\^{o}', 'ö': '\\"{o}',
  'ú': "\\'{u}", 'û': '\\^{u}', 'ü': '\\"{u}', 'ç': '\\c{c}', 'É': "\\'{E}",
  'Ä': '\\"{A}', 'Ö': '\\"{O}', 'Ü': '\\"{U}', 'ß': '\\ss{}',
  'Č': '\\v{C}', 'č': '\\v{c}', 'š': '\\v{s}', 'ž': '\\v{z}', 'ł': '\\l{}',
  'ā': '\\={a}', 'ī': '\\={i}', 'ū': '\\={u}', 'ṃ': '\\d{m}', 'ṇ': '\\d{n}',
  'Ś': "\\'{S}", 'ś': "\\'{s}", 'ṣ': '\\d{s}', 'ṛ': '\\d{r}',
  'Œ': '\\OE{}', 'œ': '\\oe{}'
};

const TEXT_PUNCT_MAP: Record<string, string> = {
  '§': '\\S{}',
  '–': '--',
  '—': '---',
  '─': '--',
  '’': "'",
  '‘': '`',
  '“': '``',
  '”': "''",
  '…': '\\ldots{}',
  '•': '\\textbullet{} ',
  '✓': '$\\checkmark$',
  '✗': '$\\times$'
};

const MATH_UNICODE_MAP: Record<string, string> = {
  'Γ': '\\Gamma ', 'Δ': '\\Delta ', 'Θ': '\\Theta ', 'Λ': '\\Lambda ',
  'Φ': '\\Phi ', 'Ω': '\\Omega ', 'Π': '\\Pi ', 'Ψ': '\\Psi ', 'Σ': '\\Sigma ',
  'α': '\\alpha ', 'β': '\\beta ', 'γ': '\\gamma ', 'δ': '\\delta ',
  'ε': '\\varepsilon ', 'θ': '\\theta ', 'κ': '\\kappa ', 'λ': '\\lambda ',
  'μ': '\\mu ', 'ν': '\\nu ', 'ξ': '\\xi ', 'π': '\\pi ',
  'ρ': '\\rho ', 'σ': '\\sigma ', 'τ': '\\tau ', 'φ': '\\varphi ',
  'χ': '\\chi ', 'ψ': '\\psi ', 'ω': '\\omega ',
  'ℱ': '\\mathcal{F}', '𝒢': '\\mathcal{G}', 'ℐ': '\\mathcal{I}', 'ℒ': '\\mathcal{L}',
  'ℳ': '\\mathcal{M}', '𝒪': '\\mathcal{O}', '𝒥': '\\mathcal{J}',
  'ℝ': '\\mathbb{R}', '♮': '\\natural ',
  '∀': '\\forall ', '∃': '\\exists ', '∄': '\\nexists ', '¬': '\\neg ',
  '∅': '\\emptyset ', '∈': '\\in ', '∉': '\\notin ', '⊂': '\\subset ',
  '⊆': '\\subseteq ', '⊈': '\\not\\subseteq ', '⊊': '\\subsetneq ', '∩': '\\cap ', '∪': '\\cup ', '⋃': '\\bigcup ', '∖': '\\setminus ',
  '≺': '\\prec ', '≻': '\\succ ',
  '≅': '\\cong ', '⟨': '\\langle ', '⟩': '\\rangle ',
  '∧': '\\wedge ', '∨': '\\vee ', '⊕': '\\oplus ', '⊗': '\\otimes ', '∮': '\\oint ',
  '⊢': '\\vdash ', '⊬': '\\nvdash ', '⊨': '\\models ', '⊭': '\\not\\models ', '⊥': '\\bot ', '□': '\\Box ', '◇': '\\Diamond ', '▶': '\\triangleright ',
  '†': '^\\dagger ', '↦': '\\mapsto ', '⊣': '\\dashv ', '∝': '\\propto ', '∑': '\\sum ',
  'ℓ': '\\ell ', '∇': '\\nabla ', '∂': '\\partial ', '∫': '\\int ',
  '∞': '\\infty ', '×': '\\times ', '·': '\\cdot ', '±': '\\pm ',
  '≈': '\\approx ', '≤': '\\le ', '≥': '\\ge ', '≪': '\\ll ', '≫': '\\gg ',
  '≠': '\\neq ', '≡': '\\equiv ', '≢': '\\not\\equiv ', '⇔': '\\iff ', '⇄': '\\leftrightarrow ', '↔': '\\leftrightarrow ',
  '→': '\\rightarrow ', '↛': '\\nrightarrow ', '←': '\\leftarrow ', '↑': '\\uparrow ', '↓': '\\downarrow ', '⇒': '\\Rightarrow ', '⇏': '\\not\\Rightarrow ', '−': '-', '‖': '\\|',
  '⊔': '\\sqcup ', '∘': '\\circ ', '⊙': '\\odot ', '☉': '\\odot ',
  '½': '\\frac{1}{2}', '′': '\\prime ', '″': '^{\\prime\\prime}',
  '✓': '\\checkmark ', '✗': '\\times '
};

const ROMAN_WORDS = new Set([
  'upd', 'obs', 'loc', 'eff', 'core', 'ext', 'int', 'sing', 'reg',
  'KMS', 'PTA', 'clk', 'aut', 'min', 'global', 'now', 'delay', 'instant',
  'Cut', 'ego', 'Kant', 'obj', 'env', 'mod', 'diag', 'Tr', 'det', 'ln', 'log', 'lim',
  'split', 'present', 'inv', 'coh', 'ret', 'prot', 'FOH', 'context', 'ordinary',
  'NonComm', 'DispositifCut', 'Remainder', 'InstantPresent', 'Role', 'Autonomous',
  'Passive', 'herald', 'LF', 'mem', 'RBW', 'id', 'Obs', 'Phen', 'RQM', 'Bio', 'SA'
]);

const MATH_TOKEN_UNICODE_RE =
  /[ΓΔΘΛΦΩΠΨΣαβγδεθκλμνξπρστυφχψωℱ𝒢ℐℒℳ𝒪𝒥ℝ♮∀∃∄¬∅∈∉⊂⊆⊈⊊∩∪⋃∖≺≻≅⟨⟩∧∨⊕⊗∮⊢⊬⊨⊭⊥□◇▶†↦⊣∝∑ℓ∇∂∫∞×·±≈≤≥≪≫≠≡≢⇔⇄↔→↛←↑↓⇒⇏−‖⊔∘⊙☉½′″√⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿʳⁱʲ₀₁₂₃₄₅₆₇₈₉₊₋ᵢ]/u;

function escapeTextChar(ch: string): string {
  if (ch in TEXT_LATIN_ACCENTS) return TEXT_LATIN_ACCENTS[ch];
  if (ch in TEXT_PUNCT_MAP) return TEXT_PUNCT_MAP[ch];
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
      if (ch in MATH_UNICODE_MAP) return `$${MATH_UNICODE_MAP[ch].trim()}$`;
      if (ch.charCodeAt(0) > 127) return '';
      return ch;
  }
}

function escapeRawText(s: string): string {
  let out = '';
  for (const ch of s) out += escapeTextChar(ch);
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
      if (ch.charCodeAt(0) > 127) return '';
      return ch;
    })
    .join('');
}

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

function balanceLiteralBracesInMath(s: string): string {
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

function renderMathBodyToLatex(rawMath: string): string {
  const withScripts = rawMath
    .replace(SUP_RUN_RE, (run) => `^{${[...run].map((c) => UNICODE_SUP_TO_TEX[c] ?? c).join('')}}`)
    .replace(SUB_RUN_RE, (run) => `_{${[...run].map((c) => UNICODE_SUB_TO_TEX[c] ?? c).join('')}}`);
  let s = '';
  for (const ch of withScripts) {
    if (ch in MATH_UNICODE_MAP) s += MATH_UNICODE_MAP[ch];
    else if (ch === '–' || ch === '—') s += '-';
    else if (ch === '’') s += "'";
    else if (ch === '√') s += '\\sqrt';
    else if (ch === '&') s += '\\&';
    else if (ch === '%') s += '\\%';
    else if (ch === '#') s += '\\#';
    else if (ch.charCodeAt(0) > 127) s += '';
    else s += ch;
  }
  s = s.replace(/\b(lim|ln|log|Tr|det|diag)\b/g, (m) => `\\mathrm{${m}}`);
  s = s.replace(/\^([+-]\d+|\d{2,}|-[A-Za-z])/g, (_, exp) => `^{${exp}}`);
  s = s.replace(/_([A-Za-z0-9]+)/g, (full, word) =>
    ROMAN_WORDS.has(word) || word.length >= 3 ? `_{\\mathrm{${word}}}` : full
  );
  s = balanceSqrt(s);
  s = balanceLiteralBracesInMath(s);
  return s.replace(/[ ]{2,}/g, ' ').trim();
}

function texInlineSegment(segment: string): string {
  return segment
    .split(/(\s+)/)
    .map((tok) => {
      if (!tok) return '';
      if (/^\s+$/.test(tok)) return tok;
      if (MATH_TOKEN_UNICODE_RE.test(tok) || (/[_^]/.test(tok) && !tok.includes('http'))) {
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
        if ((core.match(/\{/g) || []).length > (core.match(/\}/g) || []).length && core.startsWith('{')) {
          lead += '{';
          core = core.slice(1);
        } else if ((core.match(/\}/g) || []).length > (core.match(/\{/g) || []).length && core.endsWith('}')) {
          trail = '}' + trail;
          core = core.slice(0, -1);
        }
        if (core && !SUP_CHAR_RE.test(lead) && !SUB_CHAR_RE.test(trail)) {
          return `${escapeRawText(lead)}$${renderMathBodyToLatex(core)}$${escapeRawText(trail)}`;
        }
      }
      return escapeRawText(tok);
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
        if (MATH_TOKEN_UNICODE_RE.test(inner) || /[_^]/.test(inner)) {
          return `$${renderMathBodyToLatex(inner)}$`;
        }
        return `\\texttt{${escapeCodeText(inner)}}`;
      }
      if (chunk.startsWith('*') && chunk.endsWith('*') && chunk.length >= 2) {
        return `\\textit{${texInlineSegment(chunk.slice(1, -1))}}`;
      }
      return texInlineSegment(chunk);
    })
    .join('');
}

function texProse(input: string): string {
  if (!input) return '';
  const lines = input.replace(/\r\n/g, '\n').split('\n');
  return lines
    .map((line) => {
      let headingPrefix = '';
      let content = line;
      if (content.startsWith('### ')) {
        headingPrefix = '\\paragraph{';
        content = content.slice(4);
      }
      const boldSplit = content.split(/(\*\*[^\n]+?\*\*)/g);
      const rendered = boldSplit
        .map((chunk, j) => {
          if (!chunk) return '';
          if (j % 2 === 1) {
            return `\\textbf{${texNonBoldLine(chunk.slice(2, -2))}}`;
          }
          return texNonBoldLine(chunk);
        })
        .join('');
      return headingPrefix ? `${headingPrefix}${rendered}}` : rendered;
    })
    .join('\n\n');
}

function renderTexEquation(eq: SyntheseEquation): string {
  const cleanHtml = eq.unicodeHtml
    .replace(/<sup>(.*?)<\/sup>/gi, '^{$1}')
    .replace(/<sub>(.*?)<\/sub>/gi, '_{$1}')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, '; ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');

  const body = renderMathBodyToLatex(cleanHtml);
  const cleanTag = eq.label.replace(/^\(|\)$/g, '').trim();
  const safeLabel = cleanTag.replace(/[^A-Za-z0-9.\-]/g, '-').toLowerCase();
  const parts: string[] = [
    `\\begin{equation}\\label{eq:${safeLabel}}\\tag{${cleanTag}}\n  ${body}\n\\end{equation}`,
    `\\noindent{\\small\\textit{${texProse(eq.caption)}}} \\\\ {\\small ${texProse(eq.plainMeaning)}}`
  ];
  if (eq.derivationSteps?.length) {
    parts.push(`\\begin{enumerate}\n${eq.derivationSteps.map((s) => `\\item ${texProse(s)}`).join('\n')}\n\\end{enumerate}`);
  }
  return parts.join('\n\n');
}

function makeLongTable(caption: string, colSpec: string, headers: string[], rows: string[][]): string {
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

function renderTexChapterTables(chapterNum: number): string {
  if (chapterNum === 2) {
    return makeLongTable(
      'Table 2.1: Phenomenological and Transcendental Genealogy Matrix (Sections 2-9)',
      'L{0.20} L{0.22} L{0.24} L{0.22}',
      ['Theory', 'Core Structural Claim', 'Paradox Encountered', 'Logical Counterpart'],
      TABLE_2_1_PHENOMENOLOGY.map((r) => [r.theory, r.coreClaim, r.paradoxEncountered, r.bundleCounterpart])
    );
  }
  if (chapterNum === 3) {
    return makeLongTable(
      'Table 3.1: Deconstructive and Post-Structuralist Matrix (Sections 10-15a)',
      'L{0.20} L{0.22} L{0.24} L{0.22}',
      ['Theory', 'Core Claim', 'Structural Dissolution', 'Logical Counterpart'],
      TABLE_3_1_DECONSTRUCTION.map((r) => [r.theory, r.coreClaim, r.structuralDissolution, r.bundleCounterpart])
    );
  }
  if (chapterNum === 4) {
    return makeLongTable(
      'Table 4.1: Orthodox Quantum Foundations Observer Models (Sections 16-20)',
      'L{0.20} L{0.22} L{0.22} L{0.24}',
      ['Framework', 'Where Observer Sits', 'Cut / Collapse Status', 'Philosophical Mapping'],
      TABLE_4_1_QUANTUM.slice(0, 5).map((r) => [r.theory, r.observerSeat, r.cutStatus, r.bundleMapping])
    );
  }
  if (chapterNum === 5) {
    return makeLongTable(
      'Table 5.1: Relational, Epistemic, Decoherent and Dynamical Quantum Models (Sections 21-27)',
      'L{0.20} L{0.22} L{0.22} L{0.24}',
      ['Framework', 'Where Observer Sits', 'Cut / Decoherence Status', 'Philosophical Mapping'],
      TABLE_4_1_QUANTUM.slice(5).map((r) => [r.theory, r.observerSeat, r.cutStatus, r.bundleMapping])
    );
  }
  if (chapterNum === 6) {
    return makeLongTable(
      'Table 6.1: Systems-Theoretical and Enactive Closure Matrix (Sections 28-33)',
      'L{0.20} L{0.22} L{0.24} L{0.22}',
      ['Theory', 'Core Claim', 'Closure Mechanism', 'Logical Counterpart'],
      TABLE_5_1_SYSTEMS.map((r) => [r.theory, r.coreClaim, r.closureMechanism, r.bundleCounterpart])
    );
  }
  if (chapterNum === 7) {
    return [
      makeLongTable(
        'Table 7.1: Axiomatic Resolution of the Constitutive-Absence Paradox (Sections 34-37)',
        'L{0.20} L{0.22} L{0.23} L{0.23}',
        ['Logical Principle', 'Structural Role', 'Phenomenological Correlate', 'Antinomy Dissolved'],
        TABLE_6_1_RESOLUTION.map((r) => [r.formalObject, r.mathematicalRole, r.phenomenologicalCorrelate, r.obstructionResolved])
      ),
      makeLongTable(
        'Table 7.2: Separating Countermodels and Axiom Independence Matrix (M_~A1..M_~A4, Section 37)',
        'L{0.16} L{0.28} L{0.05} L{0.05} L{0.05} L{0.05} L{0.24}',
        ['Model', 'Semantic Domain and Structure', 'A1', 'A2', 'A3', 'A4', 'Independence Proof'],
        SYNTHESE_INDEPENDENCE_MODELS.map((m) => [m.model, m.domainAndStructure, m.a1, m.a2, m.a3, m.a4, m.diagnosticProof])
      )
    ].join('\n\n');
  }
  if (chapterNum === 8) {
    return [
      makeLongTable(
        'Table 8.1: Master 32-Position Axiomatic Cross-Reference Matrix (Sections 2-33 x A1-A4)',
        'L{0.06} L{0.22} L{0.07} L{0.07} L{0.07} L{0.07} L{0.30}',
        ['Sec.', 'Framework', 'A1', 'A2', 'A3', 'A4', 'Structural Synthesis'],
        SYNTHESE_32_MATRIX.map((r) => [r.section, r.framework, r.a1, r.a2, r.a3, r.a4, r.statusNote])
      ),
      makeLongTable(
        'Table 8.2: Cross-Tradition Structural Identity Audit (Sections 38-39)',
        'L{0.16} L{0.18} L{0.18} L{0.18} L{0.18}',
        ['Criterion', 'Husserl', 'Rovelli RQM', 'Autopoiesis', 'Four-Axiom Logic'],
        TABLE_7_1_IDENTITY_SYNTHESIS.map((r) => [r.structuralCriterion, r.husserlPhenom, r.rovelliRqm, r.autopoiesisBio, r.fiberBundleFormal])
      ),
      makeLongTable(
        'Table 8.3: Empirical Falsification and Methodological Crucibles (Section 40)',
        'L{0.20} L{0.22} L{0.24} L{0.22}',
        ['Domain', 'Target Observable', 'Philosophical Prediction', 'Null Consequence'],
        TABLE_8_1_TESTABLE_CORRELATION.map((r) => [r.channel, r.targetObservable, r.predictedSignal, r.nullConsequence])
      ),
      makeLongTable(
        'Table 8.4: Auxiliary Assumptions Isolated Across Disjoint Experimental Crucibles (Section 40, Duhem-Quine Defense)',
        'L{0.20} L{0.14} L{0.26} L{0.28}',
        ['Experimental Crucible', 'Target Axiom', 'Isolated Auxiliary Assumptions', 'Anti-Holism Decoupling Guard'],
        TABLE_8_4_AUXILIARY_ASSUMPTIONS.map((r) => [r.crucible, r.targetAxiom, r.isolatedAuxiliaries, r.decouplingGuard])
      )
    ].join('\n\n');
  }
  return '';
}

export function buildSyntheseLatex(): string {
  const raw = `\\documentclass[11pt,a4paper]{article}
\\usepackage[a4paper,margin=22mm]{geometry}
\\usepackage[T1]{fontenc}
\\usepackage[utf8]{inputenc}
\\usepackage{lmodern}
\\usepackage{amsmath,amssymb,array,booktabs,longtable,ragged2e,xurl,microtype}
\\usepackage[hidelinks,breaklinks=true]{hyperref}
\\emergencystretch=1.5em
\\newcolumntype{L}[1]{>{\\RaggedRight\\arraybackslash}p{#1\\textwidth}}

\\hypersetup{
  pdftitle={${escapeRawText(SYNTHESE_META.title)}},
  pdfauthor={${escapeRawText(SYNTHESE_META.authors.map((a) => a.name).join(', '))}}
}

\\title{${texProse(SYNTHESE_META.title)} \\\\ \\large\\textit{${texProse(SYNTHESE_META.laymanDeck)}}}
\\author{${SYNTHESE_META.authors
    .map(
      (a) =>
        `${texProse(a.name)} (${texProse(a.affiliation)}${
          a.orcid ? `; ORCID ${a.orcid}` : a.email ? `; Email ${texProse(a.email)}` : a.orcidNote ? `; ${texProse(a.orcidNote)}` : ''
        })`
    )
    .join(' \\and ')}}
\\date{2026}

\\begin{document}
\\sloppy
\\maketitle

\\begin{abstract}
${SYNTHESE_ABSTRACT.map((p) => texProse(p)).join('\n\n')}
\\end{abstract}

\\noindent\\textbf{Keywords:} ${SYNTHESE_META.keywords.map((k) => texProse(k)).join('; ')}.

\\tableofcontents

${makeLongTable(
  'Treatise Roadmap (Chapters 1-9)',
  'L{0.14} L{0.16} L{0.34} L{0.24}',
  ['Chapter', 'Sections', 'Core Deductive & Genealogy Contribution', 'Visual Anchor'],
  SYNTHESE_ROADMAP.map((rm) => [rm.chapter, rm.sections, rm.centralMove, rm.visualAnchor])
)}

${makeLongTable(
  'Table of Axioms (A1-A4)',
  'L{0.14} L{0.22} L{0.18} L{0.17} L{0.17}',
  ['Axiom', 'Canonical Formula', 'Modal Status', 'Reductio on Denial', 'Empirical Falsifier'],
  SYNTHESE_AXIOM_TABLE.map((ax) => [
    `${ax.code} ${ax.name}`,
    ax.canonicalFormula,
    ax.modalAndEpistemicStatus,
    ax.reductioOnDenial,
    ax.falsificationTrigger
  ])
)}

${makeLongTable(
  'Standardized Notation (Chapters 1-9)',
  'L{0.20} L{0.50} L{0.18}',
  ['Symbol', 'Formal Meaning', 'First Defined'],
  SYNTHESE_NOTATION_TABLE.map((n) => [n.symbol, n.role, n.firstDefined])
)}

${makeLongTable(
  'How to Read This Treatise',
  'L{0.22} L{0.26} L{0.40}',
  ['Discipline / Audience', 'Essential Reading Path', 'Entry Focus'],
  SYNTHESE_HOW_TO_READ.map((tr) => [tr.audience, tr.essentialSections, tr.entryFocus])
)}

\\section*{List of Plates and Figures (29 Full-Page A4 Illustrations)}
\\begin{description}
${SYNTHESE_PLATES_INDEX.map((pl) => `  \\item[${texProse(pl.plateNumber)} (Chapter ${pl.anchorChapter})] ${texProse(pl.title)}: ${texProse(pl.caption)}`).join('\n')}
${SYNTHESE_FIGURES.map((fg) => `  \\item[${texProse(fg.figureNumber)} (${fg.anchorChapter === 0 ? 'Abstract' : `Chapter ${fg.anchorChapter}`})] ${texProse(fg.title)}: ${texProse(fg.caption)}`).join('\n')}
\\end{description}

${SYNTHESE_CHAPTERS.map(
  (ch) => `\\clearpage
\\section{Chapter ${ch.number}: ${texProse(ch.title)}}
\\noindent\\textit{${texProse(ch.epigraph)}}

${ch.chapterIntro.map((p) => texProse(p)).join('\n\n')}

${
  ch.number === 7
    ? `\\subsection*{${texProse(SYNTHESE_ARGUMENT_MAP.title)}}\n${texProse(SYNTHESE_ARGUMENT_MAP.summary)}\n\\begin{enumerate}\n${SYNTHESE_ARGUMENT_MAP.nodes
        .map((n) => `\\item \\textbf{${texProse(n.step)}:} ${texProse(n.rule)} (${texProse(n.leadsTo)})`)
        .join('\n')}\n\\end{enumerate}\n`
    : ''
}${ch.subsections
    .map(
      (sub) => `\\subsection{${texProse(sub.title)}}
${sub.paragraphs.map((p) => texProse(p)).join('\n\n')}${
        sub.equation ? `\n\n${renderTexEquation(sub.equation)}` : ''
      }${
        sub.theoremBox
          ? `\n\n\\noindent\\textbf{${texProse(sub.theoremBox.kind)} ${texProse(sub.theoremBox.number)}: ${texProse(sub.theoremBox.title)}.} ${texProse(sub.theoremBox.statement)}\n\\begin{enumerate}\n${sub.theoremBox.proofSteps.map((s) => `\\item ${texProse(s)}`).join('\n')}\n\\end{enumerate}\n\\textit{${texProse(sub.theoremBox.sourceNote)}}`
          : ''
      }${
        sub.workedExample
          ? `\n\n\\noindent\\textbf{${texProse(sub.workedExample.title)}.} \\textit{${texProse(sub.workedExample.setup)}}\n\\begin{enumerate}\n${sub.workedExample.steps.map((s) => `\\item ${texProse(s)}`).join('\n')}\n\\end{enumerate}\n${renderTexEquation(sub.workedExample.resultEquation)}\n\\textit{Conclusion:} ${texProse(sub.workedExample.takeaway)}`
          : ''
      }`
    )
    .join('\n\n')}

${renderTexChapterTables(ch.number)}`
).join('\n\n')}

\\clearpage
\\section*{Glossary}
\\begin{description}
${SYNTHESE_GLOSSARY.map((g) => `  \\item[${texProse(g.term)}] ${texProse(g.definition)}`).join('\n')}
\\end{description}

${makeLongTable(
  'Logical Symbols and Axioms',
  'L{0.16} L{0.20} L{0.18} L{0.34}',
  ['Symbol', 'Concept', 'Domain', 'Logical Definition'],
  SYNTHESE_SYMBOL_GLOSSARY.map((s) => [s.symbol, s.name, s.domain, s.definition])
)}

\\appendix
${SYNTHESE_APPENDICES.map(
  (a) => `\\clearpage
\\section{${texProse(a.title)}}
\\textit{${texProse(a.summary)}}

${a.paragraphs.map((p) => texProse(p)).join('\n\n')}

${a.equations.map((eq) => renderTexEquation(eq)).join('\n\n')}

${
  a.theoremBoxes?.length
    ? a.theoremBoxes
        .map(
          (tb) =>
            `\\begin{quote}\n\\textbf{${texProse(tb.kind)} ${texProse(tb.number)} (${texProse(tb.title)}).} ${texProse(tb.statement)}\n\\begin{enumerate}\n${tb.proofSteps.map((s) => `\\item ${texProse(s)}`).join('\n')}\n\\end{enumerate}\n\\end{quote}`
        )
        .join('\n\n')
    : ''
}

${
  a.reproducibilityLedger?.length
    ? makeLongTable(
        'Logical and Dialectical Axiomatic Concordance',
        'L{0.20} L{0.22} L{0.22} L{0.24}',
        ['Condition', 'Logical Rule', 'Tradition Grounds', 'Deductive Outcome'],
        a.reproducibilityLedger.map((r) => [r.checkpoint, r.formula, r.referenceConstants, r.computedOutput])
      )
    : ''
}

${
  a.refereeObjections?.length
    ? `\\begin{description}\n${a.refereeObjections.map((o) => `  \\item[${texProse(o.objection)}] ${texProse(o.reply)}`).join('\n')}\n\\end{description}`
    : ''
}`
).join('\n\n')}

\\clearpage
\\begin{thebibliography}{99}
${SYNTHESE_REFERENCES.map((r) => `\\bibitem{ref${r.id}} ${texProse(r.citation)}`).join('\n')}
\\end{thebibliography}

\\clearpage
\\section*{Index of Names}
\\begin{description}
${SYNTHESE_INDEX_OF_NAMES.map((it) => `  \\item[${texProse(it.entry)}] ${texProse(it.sections)}`).join('\n')}
\\end{description}

\\section*{Index of Concepts}
\\begin{description}
${SYNTHESE_INDEX_OF_CONCEPTS.map((it) => `  \\item[${texProse(it.entry)}] ${texProse(it.sections)}`).join('\n')}
\\end{description}

\\end{document}
`;
  return raw.replace(/[^\x00-\x7F]/g, '');
}

export function downloadSyntheseHtml(): void {
  const blob = new Blob([buildSyntheseSelfContainedHtml()], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Paper_15_Synthese_Where_Is_The_Observer.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadSyntheseMarkdown(): void {
  const blob = new Blob([buildSyntheseMarkdown()], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Paper_15_Synthese_Where_Is_The_Observer.md';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadSyntheseLatex(): void {
  const blob = new Blob([buildSyntheseLatex()], { type: 'application/x-tex;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Paper_15_Synthese_Where_Is_The_Observer.tex';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
