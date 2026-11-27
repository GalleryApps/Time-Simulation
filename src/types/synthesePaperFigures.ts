/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * 22 Scientific & Philosophical Full-Page A4 Portrait Calligram Schematics for Paper 15 (Synthese Journal)
 * Palette: Strictly calibrated from Dark Blue (#08182E, #0B203B), Slate Gray Blue (#263B54, #51677B, #8B9FAF),
 *          Muted Blue-Green (#2D5E5D, #48827E, #87B9B2), and Pale Ice Ink (#E5EFF5, #F0F6FA).
 * Dimensions: A4 Portrait Proportion (viewBox="0 0 740 1046", ratio 1 : 1.4135)
 */

export interface SyntheseFigureSpec {
  id: string;
  figureNumber: string;
  anchorChapter: number;
  title: string;
  caption: string;
  svgMarkup: string;
}

export const SYNTHESE_FIGURES: SyntheseFigureSpec[] = [
  {
    id: 'fig-0-1',
    figureNumber: 'Figure 0.1',
    anchorChapter: 0,
    title: 'Four-Tradition Scientific & Philosophical Convergence Toward Invariant Σ_Obs',
    caption:
      'A4 structural diagram illustrating four methodological observer-traditions—Phenomenology (Kant & Husserl), Deconstruction (Derrida, Lacan & Marion), Quantum Optics (Bohr, Wigner & Rovelli), and Autopoiesis (Maturana–Varela & Friston, bounded by Varela 1999 / Pöppel 100–3000 ms integration windows)—projecting onto Axioms A1–A4.',
    svgMarkup: `<svg viewBox="0 0 740 1046" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-Tradition Convergence Scientific Diagram">
  <defs>
    <path id="f0-ring-top" d="M 106 436 A 264 264 0 0 1 634 436"/>
    <path id="f0-ring-bot" d="M 634 436 A 264 264 0 0 1 106 436"/>
  </defs>
  <rect x="0" y="0" width="740" height="1046" fill="#08182E"/>
  <rect x="28" y="28" width="684" height="990" fill="none" stroke="#51677B" stroke-width="1.3"/>

  <text x="370" y="72" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" letter-spacing="3" fill="#87B9B2">ABSTRACT · CROSS-DISCIPLINARY SCIENTIFIC ARCHITECTURE</text>
  <text x="370" y="112" text-anchor="middle" font-family="Georgia,serif" font-size="27" font-weight="700" letter-spacing="1.4" fill="#F0F6FA">WHERE OR WHO IS THE OBSERVER?</text>
  <line x1="115" y1="134" x2="625" y2="134" stroke="#48827E" stroke-width="1.4"/>

  <circle cx="370" cy="436" r="276" fill="none" stroke="#8B9FAF" stroke-width="1.8"/>
  <circle cx="370" cy="436" r="228" fill="none" stroke="#48827E" stroke-width="1.2" stroke-dasharray="6 5"/>
  <text x="370" y="182" font-family="Georgia,serif" font-size="16" font-weight="700" letter-spacing="2.2" fill="#E5EFF5">
    <textPath href="#f0-ring-top" startOffset="50%" text-anchor="middle">KANT · HUSSERL · DERRIDA · LACAN · BOHR · ROVELLI · VARELA</textPath>
  </text>
  <text x="370" y="692" font-family="Georgia,serif" font-size="16" font-weight="700" letter-spacing="2.2" fill="#87B9B2">
    <textPath href="#f0-ring-bot" startOffset="50%" text-anchor="middle">AXIOM A1 (IMMANENCE) · A2 (PARITY) · A3 (CUT) · A4 (THICK NOW)</textPath>
  </text>

  <polygon points="370,298 486,436 370,574 254,436" fill="#0B203B" stroke="#87B9B2" stroke-width="2.2"/>
  <path d="M 352 382 C 386 382, 410 404, 410 434 L 420 448 L 408 456 L 406 472 C 404 484, 388 492, 372 492 L 354 510 L 354 472 C 338 460, 330 440, 332 418 C 334 398, 342 382, 352 382 Z" fill="none" stroke="#E5EFF5" stroke-width="2"/>
  <circle cx="388" cy="428" r="5" fill="#87B9B2"/>
  <path d="M 388 428 L 478 408 M 388 428 L 478 448" stroke="#BFD0DA" stroke-width="1.2" stroke-dasharray="3 3"/>
  <text x="370" y="544" text-anchor="middle" font-family="Georgia,serif" font-size="22" font-weight="700" fill="#F0F6FA">Σ_Obs</text>

  <rect x="64" y="218" width="176" height="140" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.6"/>
  <text x="152" y="244" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-weight="700" fill="#F0F6FA">1. PHENOMENOLOGY</text>
  <path d="M 96 292 C 110 268, 134 274, 132 298 C 130 314, 114 316, 112 302" fill="none" stroke="#E5EFF5" stroke-width="1.8"/>
  <path d="M 144 272 A 22 22 0 0 1 144 316 M 156 264 A 32 32 0 0 1 156 324 M 168 256 A 42 42 0 0 1 168 332" fill="none" stroke="#87B9B2" stroke-width="1.4"/>
  <text x="152" y="346" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">Kant B131 · Husserl A1,A4</text>
  <line x1="240" y1="320" x2="294" y2="386" stroke="#87B9B2" stroke-width="1.6"/>

  <rect x="500" y="218" width="176" height="140" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.6"/>
  <text x="588" y="244" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-weight="700" fill="#F0F6FA">2. DECONSTRUCTION</text>
  <path d="M 526 294 C 526 268, 578 268, 588 294 C 598 320, 650 320, 650 294 C 650 268, 598 268, 588 294 C 578 320, 526 320, 526 294 Z" fill="none" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="588" y="302" text-anchor="middle" font-family="Georgia,serif" font-size="22" font-weight="700" fill="#F0F6FA">$</text>
  <text x="588" y="346" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">Derrida · Lacan · Marion</text>
  <line x1="500" y1="320" x2="446" y2="386" stroke="#87B9B2" stroke-width="1.6"/>

  <rect x="64" y="514" width="176" height="140" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.6"/>
  <text x="152" y="540" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-weight="700" fill="#F0F6FA">3. QUANTUM OPTICS</text>
  <line x1="94" y1="606" x2="152" y2="558" stroke="#E5EFF5" stroke-width="1.4"/>
  <line x1="94" y1="606" x2="152" y2="624" stroke="#E5EFF5" stroke-width="1.4"/>
  <line x1="152" y1="558" x2="210" y2="606" stroke="#87B9B2" stroke-width="1.4"/>
  <line x1="152" y1="624" x2="210" y2="606" stroke="#87B9B2" stroke-width="1.4"/>
  <rect x="86" y="598" width="14" height="14" fill="none" stroke="#E5EFF5" stroke-width="1.6"/>
  <rect x="202" y="598" width="14" height="14" fill="none" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="152" y="644" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">Bohr · Wigner · Rovelli A2,A3</text>
  <line x1="240" y1="546" x2="294" y2="486" stroke="#87B9B2" stroke-width="1.6"/>

  <rect x="500" y="514" width="176" height="140" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.6"/>
  <text x="588" y="540" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-weight="700" fill="#F0F6FA">4. AUTOPOIESIS</text>
  <circle cx="588" cy="590" r="34" fill="none" stroke="#87B9B2" stroke-width="1.8" stroke-dasharray="4 3"/>
  <circle cx="588" cy="590" r="18" fill="none" stroke="#E5EFF5" stroke-width="1.4"/>
  <text x="588" y="595" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#F0F6FA">S⇄A</text>
  <text x="588" y="644" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">Maturana–Varela · Friston</text>
  <line x1="500" y1="546" x2="446" y2="486" stroke="#87B9B2" stroke-width="1.6"/>

  <rect x="64" y="756" width="612" height="202" fill="#0B203B" stroke="#48827E" stroke-width="1.6"/>
  <text x="370" y="788" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">STRUCTURAL TRANSLATION ACROSS OBSERVER TRADITIONS</text>
  <line x1="88" y1="804" x2="652" y2="804" stroke="#51677B" stroke-width="1"/>
  <text x="92" y="834" text-anchor="start" font-family="ui-monospace,monospace" font-size="13" fill="#87B9B2">A1 Immanence :</text>
  <text x="230" y="834" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="13" fill="#E5EFF5">Kant B131 Horizon  ≡  Breuer Self-Limit  ≡  RQM Locality</text>
  <text x="92" y="868" text-anchor="start" font-family="ui-monospace,monospace" font-size="13" fill="#87B9B2">A2 Frame Parity :</text>
  <text x="230" y="868" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="13" fill="#E5EFF5">Husserl Paarung  ≡  Cross-Perspective Links  ≡  Foerster 2nd-Order</text>
  <text x="92" y="902" text-anchor="start" font-family="ui-monospace,monospace" font-size="13" fill="#87B9B2">A3 Cut Boundary :</text>
  <text x="230" y="902" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="13" fill="#E5EFF5">Lacan Split $  ≡  Doplicher–Longo Factor N  ≡  Markov Blanket B</text>
  <text x="92" y="936" text-anchor="start" font-family="ui-monospace,monospace" font-size="13" fill="#87B9B2">A4 Thick Present :</text>
  <text x="230" y="936" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="13" fill="#E5EFF5">Bernau Retention  ≡  Asymmetric Record  ≡  Varela 100–3000 ms Band</text>

  <text x="370" y="998" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" letter-spacing="2" fill="#8B9FAF">FIG. 0.1 · SHARED OBSERVER INVARIANT Σ_OBS (§0.1–§1)</text>
</svg>`
  },
  {
    id: 'fig-1-1',
    figureNumber: 'Figure 1.1',
    anchorChapter: 1,
    title: 'Varying-Domain S4 Semantics (W, R, D), Barcan Blocking & Archimedean ω-Regress',
    caption:
      'Formal semantics of Schema (1.1) and Theorem 1.1: non-monotonic world-indexed domains D(w₀) ⊈ D(w₁) block the Barcan Formula while exposing the ungrounded ω-sequence regress o₀ ≺ o₁ ≺ o₂ … under ¬A1.',
    svgMarkup: `<svg viewBox="0 0 740 1046" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Varying-Domain S4 Semantics and Archimedean Regress">
  <rect x="0" y="0" width="740" height="1046" fill="#08182E"/>
  <rect x="28" y="28" width="684" height="990" fill="none" stroke="#51677B" stroke-width="1.3"/>

  <text x="370" y="72" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" letter-spacing="3" fill="#87B9B2">CHAPTER 1 · VARYING-DOMAIN MODAL S4 &amp; CONSTITUTIVE ABSENCE (§1)</text>
  <text x="370" y="112" text-anchor="middle" font-family="Georgia,serif" font-size="25" font-weight="700" letter-spacing="1.2" fill="#F0F6FA">NON-MONOTONIC DOMAINS &amp; ω-REGRESS</text>
  <line x1="115" y1="134" x2="625" y2="134" stroke="#48827E" stroke-width="1.4"/>

  <rect x="74" y="162" width="592" height="284" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.8"/>
  <text x="370" y="196" text-anchor="middle" font-family="Georgia,serif" font-size="17" font-weight="700" fill="#F0F6FA">BARCAN-BLOCKING FRAME ⟨W, R, D(w)⟩ (NON-MONOTONIC DOMAINS)</text>

  <circle cx="176" cy="306" r="62" fill="#16263A" stroke="#87B9B2" stroke-width="2"/>
  <text x="176" y="286" text-anchor="middle" font-family="Georgia,serif" font-size="18" font-weight="700" fill="#F0F6FA">w₀ (Pre-Biotic)</text>
  <text x="176" y="312" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#87B9B2">D(w₀) = ∅</text>
  <text x="176" y="336" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="11" fill="#BFD0DA">Vacuous truth holds</text>

  <circle cx="370" cy="306" r="62" fill="#16263A" stroke="#E5EFF5" stroke-width="2.2"/>
  <text x="370" y="286" text-anchor="middle" font-family="Georgia,serif" font-size="18" font-weight="700" fill="#F0F6FA">w₁ (Emergent)</text>
  <text x="370" y="312" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#E5EFF5">D(w₁) = {o₁, o₂}</text>
  <text x="370" y="336" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="11" fill="#87B9B2">Situated A1–A4 hold</text>

  <circle cx="564" cy="306" r="62" fill="#16263A" stroke="#8B9FAF" stroke-width="2"/>
  <text x="564" y="286" text-anchor="middle" font-family="Georgia,serif" font-size="18" font-weight="700" fill="#F0F6FA">w₂ (Shifted)</text>
  <text x="564" y="312" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#BFD0DA">D(w₂) = {o₃}</text>
  <text x="564" y="336" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="11" fill="#87B9B2">D(w₁) ⊈ D(w₂)</text>

  <line x1="242" y1="306" x2="300" y2="306" stroke="#87B9B2" stroke-width="2"/>
  <polygon points="306,306 294,300 294,312" fill="#87B9B2"/>
  <line x1="436" y1="306" x2="494" y2="306" stroke="#87B9B2" stroke-width="2"/>
  <polygon points="500,306 488,300 488,312" fill="#87B9B2"/>
  <text x="370" y="408" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#E5EFF5">Countermodel Falsifies CBF: □∀x(Obs(x)→A1) holds without ∀x□Obs(x)</text>

  <rect x="74" y="478" width="592" height="240" fill="#0B203B" stroke="#48827E" stroke-width="1.8"/>
  <text x="370" y="512" text-anchor="middle" font-family="Georgia,serif" font-size="17" font-weight="700" fill="#F0F6FA">THEOREM 1.1 · VICIOUS ARCHIMEDEAN ω-REGRESS (NO BASE ELEMENT)</text>
  <circle cx="150" cy="602" r="34" fill="#16263A" stroke="#E5EFF5" stroke-width="1.8"/>
  <text x="150" y="608" text-anchor="middle" font-family="Georgia,serif" font-size="18" font-weight="700" fill="#F0F6FA">o₀</text>
  <circle cx="290" cy="602" r="34" fill="#16263A" stroke="#87B9B2" stroke-width="1.8"/>
  <text x="290" y="608" text-anchor="middle" font-family="Georgia,serif" font-size="18" font-weight="700" fill="#F0F6FA">o₁</text>
  <circle cx="430" cy="602" r="34" fill="#16263A" stroke="#8B9FAF" stroke-width="1.8"/>
  <text x="430" y="608" text-anchor="middle" font-family="Georgia,serif" font-size="18" font-weight="700" fill="#F0F6FA">o₂</text>
  <circle cx="574" cy="602" r="34" fill="#16263A" stroke="#51677B" stroke-width="1.8" stroke-dasharray="5 4"/>
  <text x="574" y="608" text-anchor="middle" font-family="Georgia,serif" font-size="18" font-weight="700" fill="#87B9B2">o_ω → ⊥</text>
  <line x1="188" y1="602" x2="250" y2="602" stroke="#E5EFF5" stroke-width="1.8"/>
  <text x="220" y="588" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" fill="#87B9B2">≺</text>
  <line x1="328" y1="602" x2="390" y2="602" stroke="#E5EFF5" stroke-width="1.8"/>
  <text x="360" y="588" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" fill="#87B9B2">≺</text>
  <line x1="468" y1="602" x2="534" y2="602" stroke="#8B9FAF" stroke-width="1.8" stroke-dasharray="4 4"/>
  <text x="502" y="588" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" fill="#87B9B2">≺ …</text>
  <text x="370" y="684" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#BFD0DA">∀n∈ω ∃o_{n+1} (Prior(o_{n+1}, o_n) ∧ ¬ContainsGlobal(o_n, o_{n+1}))</text>

  <rect x="74" y="750" width="592" height="202" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.6"/>
  <text x="370" y="784" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">GENERALIZED BREUER–CANTOR NON-SURJECTIVITY LIMIT</text>
  <text x="370" y="828" text-anchor="middle" font-family="ui-monospace,monospace" font-size="15" fill="#87B9B2">W ≅ Inside_o × Ext_o ,  |States(Ext_o)| ≥ 2</text>
  <text x="370" y="866" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="14" fill="#E5EFF5">No surjection φ : States(W) → States(Inside_o) exists across finite or infinite spaces.</text>
  <text x="370" y="904" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#BFD0DA">∴ ∃W₁ ≠ W₂ : Record_o(W₁) ≡ Record_o(W₂)   ⊢   Axiom A1 Mandatory</text>

  <text x="370" y="998" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" letter-spacing="2" fill="#8B9FAF">FIG. 1.1 · HYBRID S4 SEMANTICS &amp; BREUER DIAGONAL (§1)</text>
</svg>`
  },
  {
    id: 'fig-2-1',
    figureNumber: 'Figure 2.1',
    anchorChapter: 2,
    title: 'Husserl’s 1905/Bernau Time Diagram & Human Audition of a Living Melody',
    caption:
      'Scientific–phenomenological A4 diagram pairing a human listener’s acoustic experience of melody notes with Edmund Husserl’s diagonal Zeitdiagramm (E₀ → E′ → E″), Merleau-Ponty’s bodily chiasm, and Varela’s 3-second integration band.',
    svgMarkup: `<svg viewBox="0 0 740 1046" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Husserl Zeitdiagramm and Human Experience of Lived Time">
  <defs>
    <path id="f2-melody-arc" d="M 88 262 Q 210 198 340 248"/>
    <path id="f2-prot-arc" d="M 526 246 Q 608 214 662 246"/>
  </defs>
  <rect x="0" y="0" width="740" height="1046" fill="#08182E"/>
  <rect x="28" y="28" width="684" height="990" fill="none" stroke="#51677B" stroke-width="1.3"/>

  <text x="370" y="72" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" letter-spacing="3" fill="#87B9B2">CHAPTER 2 · PHENOMENOLOGY OF INTERNAL TIME-CONSCIOUSNESS (§§2–9)</text>
  <text x="370" y="112" text-anchor="middle" font-family="Georgia,serif" font-size="26" font-weight="700" letter-spacing="1.4" fill="#F0F6FA">HUMAN AUDITION &amp; HUSSERL’S ZEITDIAGRAMM</text>
  <line x1="115" y1="134" x2="625" y2="134" stroke="#48827E" stroke-width="1.4"/>

  <text x="200" y="176" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">ACOUSTIC MELODY STREAM (C₄ – E₄ – G₄)</text>
  <path d="M 74 226 Q 170 190 284 226 M 74 242 Q 170 206 284 242 M 74 258 Q 170 222 284 258" fill="none" stroke="#87B9B2" stroke-width="1.2"/>
  <circle cx="116" cy="224" r="7" fill="#E5EFF5"/>
  <line x1="123" y1="224" x2="123" y2="188" stroke="#E5EFF5" stroke-width="1.8"/>
  <circle cx="182" cy="212" r="7" fill="#E5EFF5"/>
  <line x1="189" y1="212" x2="189" y2="176" stroke="#E5EFF5" stroke-width="1.8"/>
  <circle cx="248" cy="232" r="7" fill="#87B9B2"/>
  <line x1="255" y1="232" x2="255" y2="196" stroke="#87B9B2" stroke-width="1.8"/>
  <text x="200" y="218" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">
    <textPath href="#f2-melody-arc" startOffset="48%" text-anchor="middle">SOUNDING NOW SERIES t₋₂ → t₋₁ → t₀</textPath>
  </text>

  <path d="M 358 176 C 414 176, 456 208, 456 258 L 474 282 L 456 296 L 454 322 C 446 340, 422 350, 396 350 L 368 380 L 368 332 C 334 316, 320 282, 322 246 C 324 204, 340 176, 358 176 Z" fill="#0B203B" stroke="#E5EFF5" stroke-width="2.2"/>
  <path d="M 342 250 C 332 250, 330 272, 342 276 C 350 278, 352 264, 344 262" fill="none" stroke="#87B9B2" stroke-width="1.8"/>
  <ellipse cx="424" cy="246" rx="11" ry="6" fill="none" stroke="#E5EFF5" stroke-width="1.6"/>
  <circle cx="426" cy="246" r="3" fill="#87B9B2"/>
  <path d="M 480 232 A 36 36 0 0 1 480 276 M 506 218 A 56 56 0 0 1 506 290 M 534 202 A 78 78 0 0 1 534 306" fill="none" stroke="#87B9B2" stroke-width="1.6" stroke-dasharray="5 4"/>
  <text x="588" y="200" font-family="Georgia,serif" font-size="14" font-weight="700" font-style="italic" fill="#F0F6FA">
    <textPath href="#f2-prot-arc" startOffset="50%" text-anchor="middle">PROTENTIONAL HORIZON</textPath>
  </text>
  <text x="588" y="274" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">Open Future I_prot</text>

  <rect x="74" y="400" width="592" height="316" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.8"/>
  <text x="370" y="432" text-anchor="middle" font-family="Georgia,serif" font-size="17" font-weight="700" fill="#F0F6FA">EDMUND HUSSERL’S DIAGONAL TIME DIAGRAM (ZEITDIAGRAMM)</text>

  <line x1="126" y1="472" x2="616" y2="472" stroke="#E5EFF5" stroke-width="2.4"/>
  <polygon points="622,472 608,466 608,478" fill="#E5EFF5"/>
  <text x="150" y="458" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" font-weight="700" fill="#F0F6FA">E₀ (t₀)</text>
  <text x="290" y="458" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" font-weight="700" fill="#F0F6FA">E₁ (t₁)</text>
  <text x="430" y="458" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" font-weight="700" fill="#F0F6FA">E₂ (t₂)</text>
  <text x="570" y="458" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" font-weight="700" fill="#87B9B2">E₃ (NOW)</text>

  <line x1="290" y1="472" x2="290" y2="542" stroke="#8B9FAF" stroke-width="1.6"/>
  <line x1="430" y1="472" x2="430" y2="612" stroke="#8B9FAF" stroke-width="1.6"/>
  <line x1="570" y1="472" x2="570" y2="682" stroke="#87B9B2" stroke-width="2.4"/>

  <line x1="150" y1="472" x2="570" y2="682" stroke="#48827E" stroke-width="1.8" stroke-dasharray="6 4"/>
  <line x1="290" y1="472" x2="570" y2="612" stroke="#48827E" stroke-width="1.8" stroke-dasharray="6 4"/>
  <line x1="430" y1="472" x2="570" y2="542" stroke="#48827E" stroke-width="1.8" stroke-dasharray="6 4"/>

  <circle cx="150" cy="472" r="5" fill="#E5EFF5"/>
  <circle cx="290" cy="472" r="5" fill="#E5EFF5"/>
  <circle cx="430" cy="472" r="5" fill="#E5EFF5"/>
  <circle cx="570" cy="472" r="7" fill="#87B9B2"/>
  <circle cx="290" cy="542" r="4" fill="#BFD0DA"/>
  <circle cx="430" cy="542" r="4" fill="#BFD0DA"/>
  <circle cx="430" cy="612" r="4" fill="#BFD0DA"/>
  <circle cx="570" cy="542" r="4.5" fill="#87B9B2"/>
  <circle cx="570" cy="612" r="4.5" fill="#87B9B2"/>
  <circle cx="570" cy="682" r="4.5" fill="#87B9B2"/>

  <text x="588" y="546" text-anchor="start" font-family="ui-monospace,monospace" font-size="13" fill="#BFD0DA">E′₂</text>
  <text x="588" y="616" text-anchor="start" font-family="ui-monospace,monospace" font-size="13" fill="#BFD0DA">E″₁</text>
  <text x="588" y="686" text-anchor="start" font-family="ui-monospace,monospace" font-size="13" fill="#BFD0DA">E‴₀</text>
  <text x="220" y="656" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-style="italic" fill="#E5EFF5">Longitudinal &amp; Transverse Intentionality</text>

  <rect x="74" y="746" width="286" height="206" fill="#0B203B" stroke="#48827E" stroke-width="1.6"/>
  <text x="217" y="780" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">MERLEAU-PONTY CHIASM (§7)</text>
  <path d="M 104 848 Q 160 806 212 838 Q 178 866 130 874 Z" fill="none" stroke="#E5EFF5" stroke-width="1.6"/>
  <path d="M 330 848 Q 274 806 222 838 Q 256 866 304 874 Z" fill="none" stroke="#87B9B2" stroke-width="1.6"/>
  <circle cx="217" cy="838" r="7" fill="none" stroke="#F0F6FA" stroke-width="1.6"/>
  <text x="217" y="906" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" fill="#BFD0DA">Touching ↔ Touched Reversibility</text>
  <text x="217" y="932" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">Écart Anchors Boundary A3 + A4</text>

  <rect x="380" y="746" width="286" height="206" fill="#0B203B" stroke="#48827E" stroke-width="1.6"/>
  <text x="523" y="780" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">HENRY &amp; VARELA BRIDGE (§§4, 8)</text>
  <path d="M 406 854 Q 445 814 484 854 T 562 854 T 640 854" fill="none" stroke="#87B9B2" stroke-width="2"/>
  <line x1="406" y1="882" x2="640" y2="882" stroke="#51677B" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="523" y="906" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#BFD0DA">~100 – 3000 ms Reconstruction Band</text>
  <text x="523" y="932" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#E5EFF5">A4a Asymmetry Fuels Living Now</text>

  <text x="370" y="998" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" letter-spacing="2" fill="#8B9FAF">FIG. 2.1 · HUSSERL, MERLEAU-PONTY, HENRY &amp; LIVING TEMPORALITY</text>
</svg>`
  },
  {
    id: 'fig-3-1',
    figureNumber: 'Figure 3.1',
    anchorChapter: 3,
    title: 'Post-Structuralist Rupture & §15a Commutative Bridge to Quantum Measurement Cuts',
    caption:
      'Scientific–philosophical topology showing why Derrida’s différance, Lacan’s barred subject ($), Foucault’s dispositif lattice, and Marion’s saturated overflow commute cleanly into non-commutative quantum measurement cuts (§§10–15a).',
    svgMarkup: `<svg viewBox="0 0 740 1046" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Post-Structuralist Rupture and Quantum Cut Correspondence">
  <defs>
    <path id="f3-mobius" d="M 116 392 C 116 226, 336 226, 370 392 C 404 558, 624 558, 624 392"/>
  </defs>
  <rect x="0" y="0" width="740" height="1046" fill="#08182E"/>
  <rect x="28" y="28" width="684" height="990" fill="none" stroke="#51677B" stroke-width="1.3"/>

  <text x="370" y="72" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" letter-spacing="3" fill="#87B9B2">CHAPTER 3 · SIX RUPTURES OF PRESENCE &amp; THE CUT BRIDGE (§§10–15a)</text>
  <text x="370" y="112" text-anchor="middle" font-family="Georgia,serif" font-size="25" font-weight="700" letter-spacing="1.2" fill="#F0F6FA">EXTIMACY, DIFFÉRANCE &amp; §15a COMMUTING BRIDGE</text>
  <line x1="115" y1="134" x2="625" y2="134" stroke="#48827E" stroke-width="1.4"/>

  <path d="M 116 392 C 116 226, 336 226, 370 392 C 404 558, 624 558, 624 392 C 624 226, 404 226, 370 392 C 336 558, 116 558, 116 392 Z" fill="none" stroke="#87B9B2" stroke-width="2.2"/>
  <text x="370" y="310" font-family="Georgia,serif" font-size="14" font-weight="700" letter-spacing="1.8" fill="#F0F6FA">
    <textPath href="#f3-mobius" startOffset="50%" text-anchor="middle">LACANIAN MÖBIUS STRIP: INTIMATE KERNEL ↔ EXTIMATE OTHER</textPath>
  </text>

  <path d="M 190 332 C 228 332, 248 360, 246 392 L 258 406 L 246 414 L 242 436 C 228 450, 200 452, 182 440 C 166 424, 166 360, 190 332 Z" fill="none" stroke="#E5EFF5" stroke-width="1.8"/>
  <line x1="154" y1="446" x2="274" y2="330" stroke="#87B9B2" stroke-width="3"/>
  <line x1="154" y1="330" x2="274" y2="446" stroke="#8B9FAF" stroke-width="1.5" stroke-dasharray="4 4"/>
  <text x="215" y="482" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#BFD0DA">Ego Crossed Under Erasure</text>

  <circle cx="370" cy="392" r="58" fill="#0B203B" stroke="#E5EFF5" stroke-width="2.4"/>
  <text x="370" y="410" text-anchor="middle" font-family="Georgia,serif" font-size="48" font-weight="700" fill="#F0F6FA">S</text>
  <line x1="340" y1="436" x2="400" y2="348" stroke="#87B9B2" stroke-width="4.2"/>

  <rect x="466" y="338" width="114" height="108" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.4" stroke-dasharray="5 4"/>
  <circle cx="523" cy="392" r="14" fill="#87B9B2"/>
  <line x1="523" y1="392" x2="612" y2="310" stroke="#E5EFF5" stroke-width="1.5"/>
  <line x1="523" y1="392" x2="626" y2="392" stroke="#E5EFF5" stroke-width="1.5"/>
  <line x1="523" y1="392" x2="612" y2="474" stroke="#E5EFF5" stroke-width="1.5"/>
  <line x1="523" y1="392" x2="444" y2="310" stroke="#E5EFF5" stroke-width="1.5"/>
  <text x="523" y="482" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#BFD0DA">Marion Saturated Overflow</text>

  <!-- Displayed Commutative Bridge Square (§15a) -->
  <rect x="68" y="534" width="604" height="196" fill="#0B203B" stroke="#48827E" stroke-width="1.8"/>
  <text x="370" y="566" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">§15a COMMUTATIVE BRIDGE DIAGRAM (G_Q ∘ τ_Disc = F_Quant ∘ δ)</text>
  <text x="166" y="608" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" font-weight="700" fill="#E5EFF5">Dispositif / Trace (D)</text>
  <text x="574" y="608" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" font-weight="700" fill="#87B9B2">Measurement Cut (Q)</text>
  <line x1="274" y1="604" x2="460" y2="604" stroke="#87B9B2" stroke-width="2"/>
  <polygon points="466,604 454,598 454,610" fill="#87B9B2"/>
  <text x="370" y="594" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#BFD0DA">Role Map Φ (§15a)</text>

  <line x1="166" y1="622" x2="166" y2="674" stroke="#8B9FAF" stroke-width="1.8"/>
  <polygon points="166,680 160,668 172,668" fill="#8B9FAF"/>
  <line x1="574" y1="622" x2="574" y2="674" stroke="#8B9FAF" stroke-width="1.8"/>
  <polygon points="574,680 568,668 580,668" fill="#8B9FAF"/>

  <text x="166" y="704" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" fill="#BFD0DA">Shift Cut (δ)</text>
  <text x="574" y="704" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" fill="#87B9B2">Remainder (a ↦ Ext_o)</text>
  <line x1="234" y1="698" x2="460" y2="698" stroke="#E5EFF5" stroke-width="1.8" stroke-dasharray="5 4"/>
  <polygon points="466,698 454,692 454,704" fill="#E5EFF5"/>

  <rect x="68" y="752" width="604" height="202" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.6"/>
  <text x="94" y="786" text-anchor="start" font-family="Georgia,serif" font-size="14" font-weight="700" fill="#F0F6FA">DERRIDA (§10) DIFFÉRANCE</text>
  <text x="380" y="786" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">⟶  Non-Commuting Traces [Ô₁, Ô₂] ≠ 0</text>
  <text x="94" y="824" text-anchor="start" font-family="Georgia,serif" font-size="14" font-weight="700" fill="#F0F6FA">FOUCAULT (§11) DISPOSITIF</text>
  <text x="380" y="824" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">⟶  Bohr Apparatus Arrangement (A3)</text>
  <text x="94" y="862" text-anchor="start" font-family="Georgia,serif" font-size="14" font-weight="700" fill="#F0F6FA">LACAN (§12) BARRED $ &amp; a</text>
  <text x="380" y="862" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">⟶  Heisenberg Cut Remainder</text>
  <text x="94" y="900" text-anchor="start" font-family="Georgia,serif" font-size="14" font-weight="700" fill="#F0F6FA">DELEUZE (§13) SYNTHESIS</text>
  <text x="380" y="900" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">⟶  Passive Temporal Asymmetry (A4)</text>
  <text x="94" y="938" text-anchor="start" font-family="Georgia,serif" font-size="14" font-weight="700" fill="#F0F6FA">MARION (§15) SATURATION</text>
  <text x="380" y="938" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">⟶  Channel Capacity Overflow (¬A3)</text>

  <text x="370" y="998" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" letter-spacing="2" fill="#8B9FAF">FIG. 3.1 · CONTINENTAL CRITIQUE AS CUT TOPOLOGY (§§10–15a)</text>
</svg>`
  },
  {
    id: 'fig-4-1',
    figureNumber: 'Figure 4.1',
    anchorChapter: 4,
    title: 'Bohr’s Solvay Complementarity, Sliding Cut Covariance & Wigner’s Friend No-Go',
    caption:
      'Orthodox quantum foundations schematic uniting Bohr’s contextual cut (§16), von Neumann–Lüders Process 1 mobility across cuts c₁ and c₂ (§17), and the Extended Wigner’s Friend Local Friendliness no-go interferometer (§18).',
    svgMarkup: `<svg viewBox="0 0 740 1046" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bohr Solvay Cut and Extended Wigner Friend Interferometer">
  <rect x="0" y="0" width="740" height="1046" fill="#08182E"/>
  <rect x="28" y="28" width="684" height="990" fill="none" stroke="#51677B" stroke-width="1.3"/>

  <text x="370" y="72" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" letter-spacing="3" fill="#87B9B2">CHAPTER 4 · ORTHODOX QUANTUM FOUNDATIONS (§§16–20)</text>
  <text x="370" y="112" text-anchor="middle" font-family="Georgia,serif" font-size="25" font-weight="700" letter-spacing="1.2" fill="#F0F6FA">SLIDING CUTS &amp; LOCAL FRIENDLINESS NO-GO</text>
  <line x1="115" y1="134" x2="625" y2="134" stroke="#48827E" stroke-width="1.4"/>

  <rect x="74" y="164" width="592" height="232" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.8"/>
  <text x="370" y="196" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">VON NEUMANN CHAIN COVARIANCE (SHIFT-INVARIANT CUTS c₁ ↔ c₂)</text>
  <circle cx="150" cy="284" r="38" fill="#16263A" stroke="#E5EFF5" stroke-width="2"/>
  <text x="150" y="290" text-anchor="middle" font-family="Georgia,serif" font-size="18" font-weight="700" fill="#F0F6FA">S</text>
  <rect x="294" y="246" width="90" height="76" fill="#16263A" stroke="#87B9B2" stroke-width="2"/>
  <text x="339" y="290" text-anchor="middle" font-family="Georgia,serif" font-size="18" font-weight="700" fill="#F0F6FA">A (Ptr)</text>
  <circle cx="566" cy="284" r="40" fill="#16263A" stroke="#E5EFF5" stroke-width="2"/>
  <text x="566" y="290" text-anchor="middle" font-family="Georgia,serif" font-size="18" font-weight="700" fill="#F0F6FA">O (Ret)</text>
  <line x1="192" y1="284" x2="290" y2="284" stroke="#E5EFF5" stroke-width="2"/>
  <line x1="388" y1="284" x2="522" y2="284" stroke="#E5EFF5" stroke-width="2"/>
  <line x1="240" y1="218" x2="240" y2="352" stroke="#87B9B2" stroke-width="2.6" stroke-dasharray="6 4"/>
  <text x="240" y="374" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">Cut c₁</text>
  <line x1="454" y1="218" x2="454" y2="352" stroke="#87B9B2" stroke-width="2.6" stroke-dasharray="6 4"/>
  <text x="454" y="374" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">Cut c₂</text>

  <rect x="74" y="424" width="592" height="312" fill="#0B203B" stroke="#48827E" stroke-width="1.8"/>
  <text x="370" y="458" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">EXTENDED WIGNER’S FRIEND INTERFEROMETER (§18)</text>
  <rect x="134" y="492" width="220" height="196" fill="#16263A" stroke="#87B9B2" stroke-width="2"/>
  <text x="244" y="520" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#87B9B2">FRIEND F LAB (Unit. Box)</text>
  <circle cx="244" cy="590" r="44" fill="#08182E" stroke="#E5EFF5" stroke-width="1.6"/>
  <text x="244" y="586" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">|↑⟩|F_↑⟩ + |↓⟩|F_↓⟩</text>
  <text x="244" y="610" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#BFD0DA">Fact(q | F)</text>

  <rect x="424" y="492" width="212" height="196" fill="#16263A" stroke="#E5EFF5" stroke-width="2"/>
  <text x="530" y="520" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#E5EFF5">WIGNER W (Outer Cut)</text>
  <polygon points="530,544 596,594 530,644 464,594" fill="none" stroke="#87B9B2" stroke-width="1.8"/>
  <text x="530" y="598" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#F0F6FA">Interference</text>
  <text x="530" y="666" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">LF Bound Violated</text>
  <line x1="354" y1="590" x2="424" y2="590" stroke="#87B9B2" stroke-width="2.2"/>

  <rect x="74" y="762" width="592" height="186" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.6"/>
  <text x="370" y="796" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">DISSOLVING ABSOLUTENESS VIA RELATIONAL INDEXING (A1 + A2)</text>
  <text x="370" y="838" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#87B9B2">AOE ∧ Locality ∧ No-Superdeterminism  ⊢  ⊥   (Bong et al. 2020)</text>
  <text x="370" y="876" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="14" fill="#E5EFF5">Everett Branch Parity (§19) + Wheeler It-from-Bit (§20) entail no 5th axiom:</text>
  <text x="370" y="908" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#BFD0DA">Contextual Facts Fact(x | o) Preserve Covariance Without Global Collapse</text>

  <text x="370" y="998" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" letter-spacing="2" fill="#8B9FAF">FIG. 4.1 · COPENHAGEN, VON NEUMANN CHAIN &amp; LOCAL FRIENDLINESS</text>
</svg>`
  },
  {
    id: 'fig-5-1',
    figureNumber: 'Figure 5.1',
    anchorChapter: 5,
    title: 'No-Go Theorem 5.1 Two-Qubit Fidelity, Doplicher–Longo Split Collar (O₁ ⊂ O₂) & Darwinism',
    caption:
      'Scientific diagram uniting No-Go Theorem 5.1 (statistical Fidelity Lemma F > 1/2 vs. deterministic branch record r = m), Doplicher–Longo Type I split factor N separating O₁ from O₂, and Zurek’s einselection fragments.',
    svgMarkup: `<svg viewBox="0 0 740 1046" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="No-Go Theorem 5.1 Split Collar and Quantum Darwinism">
  <defs>
    <path id="f5-collar-arc" d="M 116 402 A 254 254 0 0 1 624 402"/>
    <path id="f5-collar-bot" d="M 624 402 A 254 254 0 0 1 116 402"/>
  </defs>
  <rect x="0" y="0" width="740" height="1046" fill="#08182E"/>
  <rect x="28" y="28" width="684" height="990" fill="none" stroke="#51677B" stroke-width="1.3"/>

  <text x="370" y="72" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" letter-spacing="3" fill="#87B9B2">CHAPTER 5 · RELATIONAL QM, NO-GO 5.1 &amp; SPLIT COLLAR (§§21–27)</text>
  <text x="370" y="112" text-anchor="middle" font-family="Georgia,serif" font-size="24" font-weight="700" letter-spacing="1.1" fill="#F0F6FA">DOPLICHER–LONGO SPLIT (O₁ ⊂ O₂) &amp; THEOREM 5.1</text>
  <line x1="115" y1="134" x2="625" y2="134" stroke="#48827E" stroke-width="1.4"/>

  <circle cx="370" cy="402" r="246" fill="#0B203B" stroke="#87B9B2" stroke-width="2.2"/>
  <circle cx="370" cy="402" r="200" fill="#16263A" stroke="#8B9FAF" stroke-width="1.3" stroke-dasharray="7 5"/>
  <text x="370" y="182" font-family="Georgia,serif" font-size="15" font-weight="700" letter-spacing="1.6" fill="#F0F6FA">
    <textPath href="#f5-collar-arc" startOffset="50%" text-anchor="middle">DOPLICHER–LONGO TYPE I FACTOR N : M(O₁) ⊂ N ⊂ M(O₂)′</textPath>
  </text>
  <text x="370" y="628" font-family="Georgia,serif" font-size="15" font-weight="700" letter-spacing="1.6" fill="#87B9B2">
    <textPath href="#f5-collar-bot" startOffset="50%" text-anchor="middle">ZUREK EINSELECTION · POINTER FRAGMENTS E₁, E₂, E₃ (O₂)</textPath>
  </text>

  <polygon points="370,224 522,402 370,580 218,402" fill="#08182E" stroke="#E5EFF5" stroke-width="2.2"/>
  <polygon points="370,276 474,402 370,528 266,402" fill="#16263A" stroke="#87B9B2" stroke-width="1.4"/>
  <line x1="196" y1="402" x2="544" y2="402" stroke="#51677B" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="370" y1="210" x2="370" y2="594" stroke="#51677B" stroke-width="1"/>
  <text x="370" y="394" text-anchor="middle" font-family="Georgia,serif" font-size="20" font-weight="700" fill="#F0F6FA">O₁ (FRIEND)</text>
  <text x="370" y="424" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#87B9B2">Cl(O₁) ⊂ O₂ · Buffer B_o</text>

  <ellipse cx="96" cy="236" rx="22" ry="12" fill="#0B203B" stroke="#E5EFF5" stroke-width="1.8"/>
  <circle cx="96" cy="236" r="5" fill="#87B9B2"/>
  <text x="96" y="212" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" font-weight="700" fill="#F0F6FA">O_W (E₁)</text>

  <ellipse cx="644" cy="236" rx="22" ry="12" fill="#0B203B" stroke="#E5EFF5" stroke-width="1.8"/>
  <circle cx="644" cy="236" r="5" fill="#87B9B2"/>
  <text x="644" y="212" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" font-weight="700" fill="#F0F6FA">O_C (E₂)</text>

  <ellipse cx="644" cy="576" rx="22" ry="12" fill="#0B203B" stroke="#E5EFF5" stroke-width="1.8"/>
  <circle cx="644" cy="576" r="5" fill="#87B9B2"/>
  <text x="644" y="608" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" font-weight="700" fill="#F0F6FA">O_D (E₃)</text>

  <rect x="68" y="688" width="292" height="260" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.6"/>
  <text x="214" y="722" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">NO-GO THEOREM 5.1 CLAUSES</text>
  <text x="214" y="758" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">(i) Statistical: F &gt; 1/2 ⇒ P(r=m) ≥ 2F−1</text>
  <text x="214" y="792" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#E5EFF5">(ii) Deterministic: r = m Branch Record</text>
  <text x="214" y="832" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">2-Qubit Bell Witness |Φ⁺⟩_SA:</text>
  <text x="214" y="860" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">F(r, m) = 1.00 under Cut Alignment</text>
  <text x="214" y="902" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Converse Guard: marginal r = m alone</text>
  <text x="214" y="926" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">does NOT imply superluminal signalling.</text>

  <rect x="380" y="688" width="292" height="260" fill="#0B203B" stroke="#48827E" stroke-width="1.6"/>
  <text x="526" y="722" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">RQM, QBISM &amp; FOH (§§21–27)</text>
  <polygon points="526,750 476,826 576,826" fill="none" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="526" y="806" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#F0F6FA">SIC-POVM</text>
  <text x="526" y="860" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">p(j) = Σ[(d+1)q(i) − 1/d] r(j|i)</text>
  <text x="526" y="896" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Adlam–Rovelli Links + FOH Cycle</text>
  <text x="526" y="924" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#BFD0DA">Negentropic Collar Sustains Memory</text>

  <text x="370" y="998" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" letter-spacing="2" fill="#8B9FAF">FIG. 5.1 · NO-GO THEOREM 5.1, SPLIT PROPERTY &amp; RQM (§§21–27)</text>
</svg>`
  },
  {
    id: 'fig-6-1',
    figureNumber: 'Figure 6.1',
    anchorChapter: 6,
    title: 'Embodied Enaction, Markov Blanket (μ ⊥ η | B) & Autopoietic Re-Entry',
    caption:
      'Scientific–anatomical A4 diagram illustrating Maturana & Varela’s autopoiesis, Friston’s Markov blanket conditional independence, Spencer-Brown’s re-entry law f = ⟨f⟩, and Metzinger’s transparent Phenomenal Self-Model.',
    svgMarkup: `<svg viewBox="0 0 740 1046" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Autopoiesis Markov Blanket and Embodied Human Enaction">
  <defs>
    <path id="f6-ring-top" d="M 118 452 A 252 252 0 0 1 622 452"/>
    <path id="f6-ring-bot" d="M 622 452 A 252 252 0 0 1 118 452"/>
    <path id="f6-spiral" d="M 370 452 C 414 452, 434 410, 404 378 C 364 336, 294 362, 290 426 C 284 510, 384 554, 456 500"/>
  </defs>
  <rect x="0" y="0" width="740" height="1046" fill="#08182E"/>
  <rect x="28" y="28" width="684" height="990" fill="none" stroke="#51677B" stroke-width="1.3"/>

  <text x="370" y="72" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" letter-spacing="3" fill="#87B9B2">CHAPTER 6 · AUTOPOIESIS, ENACTION &amp; SELF-MODELING (§§28–33)</text>
  <text x="370" y="112" text-anchor="middle" font-family="Georgia,serif" font-size="26" font-weight="700" letter-spacing="1.4" fill="#F0F6FA">MARKOV BLANKET &amp; EMBODIED CLOSURE</text>
  <line x1="115" y1="134" x2="625" y2="134" stroke="#48827E" stroke-width="1.4"/>

  <path d="M 284 226 C 284 176, 344 156, 396 164 C 446 172, 468 210, 456 244 C 446 266, 412 268, 398 256 C 374 268, 304 262, 284 226 Z" fill="#0B203B" stroke="#E5EFF5" stroke-width="2"/>
  <path d="M 314 216 Q 344 188 378 206 Q 412 186 436 218" fill="none" stroke="#87B9B2" stroke-width="1.4"/>
  <text x="370" y="290" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#BFD0DA">Internal Cognitive State (μ) · Metzinger Transparent PSM</text>

  <circle cx="370" cy="452" r="244" fill="none" stroke="#87B9B2" stroke-width="2.4"/>
  <circle cx="370" cy="452" r="204" fill="none" stroke="#8B9FAF" stroke-width="1.3" stroke-dasharray="6 5"/>
  <circle cx="370" cy="452" r="158" fill="#0B203B" stroke="#E5EFF5" stroke-width="1.6"/>
  <text x="370" y="232" font-family="Georgia,serif" font-size="15" font-weight="700" letter-spacing="2" fill="#F0F6FA">
    <textPath href="#f6-ring-top" startOffset="50%" text-anchor="middle">FRISTON MARKOV BLANKET B = {S, A} : μ ⊥ η | B</textPath>
  </text>
  <text x="370" y="672" font-family="Georgia,serif" font-size="15" font-weight="700" letter-spacing="2" fill="#87B9B2">
    <textPath href="#f6-ring-bot" startOffset="50%" text-anchor="middle">MATURANA–VARELA AUTOPOIESIS · LUHMANN SYSTEM CLOSURE</textPath>
  </text>

  <path d="M 370 452 C 414 452, 434 410, 404 378 C 364 336, 294 362, 290 426 C 284 510, 384 554, 456 500" fill="none" stroke="#87B9B2" stroke-width="2.2"/>
  <text x="370" y="370" font-family="ui-sans-serif,sans-serif" font-size="12" font-weight="700" letter-spacing="1.6" fill="#E5EFF5">
    <textPath href="#f6-spiral" startOffset="52%" text-anchor="middle">SPENCER-BROWN RE-ENTRY f = ⟨f⟩</textPath>
  </text>
  <circle cx="370" cy="412" r="15" fill="none" stroke="#E5EFF5" stroke-width="1.8"/>
  <path d="M 370 427 L 370 474 M 340 448 L 402 440 M 370 474 L 350 510 M 370 474 L 392 510" fill="none" stroke="#E5EFF5" stroke-width="1.8"/>

  <circle cx="148" cy="452" r="44" fill="#16263A" stroke="#87B9B2" stroke-width="2"/>
  <text x="148" y="446" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" font-weight="700" fill="#F0F6FA">SENSORY</text>
  <text x="148" y="464" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#87B9B2">S (η→B)</text>

  <circle cx="592" cy="452" r="44" fill="#16263A" stroke="#87B9B2" stroke-width="2"/>
  <text x="592" y="446" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" font-weight="700" fill="#F0F6FA">ACTIVE</text>
  <text x="592" y="464" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#87B9B2">A (μ→η)</text>

  <rect x="68" y="736" width="604" height="214" fill="#0B203B" stroke="#48827E" stroke-width="1.6"/>
  <line x1="370" y1="736" x2="370" y2="950" stroke="#51677B" stroke-width="1.2"/>
  <text x="219" y="772" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">VON FOERSTER &amp; VARELA</text>
  <text x="219" y="806" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">O(O(x)) = x* (Eigenbehavior)</text>
  <text x="219" y="838" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" fill="#E5EFF5">Living organisms enact worlds via</text>
  <text x="219" y="864" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" fill="#E5EFF5">closed metabolic–neural self-production.</text>
  <text x="219" y="914" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#BFD0DA">Autopoiesis Exemplifies A3 (A2 + A3)</text>

  <text x="521" y="772" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">ALVA NOË, METZINGER &amp; DENNETT</text>
  <text x="521" y="806" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">Transparent PSM &amp; Real Patterns</text>
  <text x="521" y="838" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" fill="#E5EFF5">Phenomenal transparency conceals</text>
  <text x="521" y="864" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" fill="#E5EFF5">sub-personal representation cuts.</text>
  <text x="521" y="914" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#BFD0DA">Pre-Reflective A4a Anchors CNG</text>

  <text x="370" y="998" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" letter-spacing="2" fill="#8B9FAF">FIG. 6.1 · ENACTIVE SENSORIMOTOR LOOP &amp; CLOSURE (§§28–33)</text>
</svg>`
  },
  {
    id: 'fig-7-1',
    figureNumber: 'Figure 7.1',
    anchorChapter: 7,
    title: 'Varying-Domain Modal S4 Kripke Frame, Stratification (A4 ⊢ A3) & Countermodels',
    caption:
      'Modal-logic diagram of Theorem 7.1: reflexivity and transitivity across epistemic horizon worlds (w₀ R w₁ R w₂), proving mutual independence of {A1, A2, A3} while grounding stratified dependence A4 → A3.',
    svgMarkup: `<svg viewBox="0 0 740 1046" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Modal S4 Varying-Domain Kripke Frame and Countermodels">
  <rect x="0" y="0" width="740" height="1046" fill="#08182E"/>
  <rect x="28" y="28" width="684" height="990" fill="none" stroke="#51677B" stroke-width="1.3"/>

  <text x="370" y="72" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" letter-spacing="3" fill="#87B9B2">CHAPTER 7 · MODAL S4 LOGIC &amp; SEPARATING COUNTERMODELS (§37)</text>
  <text x="370" y="112" text-anchor="middle" font-family="Georgia,serif" font-size="26" font-weight="700" letter-spacing="1.4" fill="#F0F6FA">KRIPKE S4 WORLDS &amp; AXIOM STRATIFICATION</text>
  <line x1="115" y1="134" x2="625" y2="134" stroke="#48827E" stroke-width="1.4"/>

  <rect x="74" y="160" width="592" height="236" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.8"/>
  <text x="370" y="192" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">VARYING-DOMAIN MODAL S4 ACCESSIBILITY GRAPH ⟨W, R, D(w)⟩</text>

  <circle cx="170" cy="292" r="48" fill="#16263A" stroke="#E5EFF5" stroke-width="2.2"/>
  <text x="170" y="286" text-anchor="middle" font-family="Georgia,serif" font-size="20" font-weight="700" fill="#F0F6FA">w₀</text>
  <text x="170" y="310" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#87B9B2">D(w₀)={o}</text>
  <path d="M 148 248 C 138 214, 202 214, 192 248" fill="none" stroke="#87B9B2" stroke-width="1.4"/>

  <circle cx="370" cy="292" r="48" fill="#16263A" stroke="#87B9B2" stroke-width="2.2"/>
  <text x="370" y="286" text-anchor="middle" font-family="Georgia,serif" font-size="20" font-weight="700" fill="#F0F6FA">w₁</text>
  <text x="370" y="310" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#E5EFF5">D(w₁)={o,o′}</text>
  <path d="M 348 248 C 338 214, 402 214, 392 248" fill="none" stroke="#87B9B2" stroke-width="1.4"/>

  <circle cx="570" cy="292" r="48" fill="#16263A" stroke="#8B9FAF" stroke-width="2.2"/>
  <text x="570" y="286" text-anchor="middle" font-family="Georgia,serif" font-size="20" font-weight="700" fill="#F0F6FA">w₂</text>
  <text x="570" y="310" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">D(w₂)={o′}</text>
  <path d="M 548 248 C 538 214, 602 214, 592 248" fill="none" stroke="#87B9B2" stroke-width="1.4"/>

  <line x1="222" y1="292" x2="314" y2="292" stroke="#E5EFF5" stroke-width="2"/>
  <polygon points="320,292 308,286 308,298" fill="#E5EFF5"/>
  <text x="270" y="280" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">R</text>

  <line x1="422" y1="292" x2="514" y2="292" stroke="#E5EFF5" stroke-width="2"/>
  <polygon points="520,292 508,286 508,298" fill="#E5EFF5"/>
  <text x="470" y="280" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">R</text>

  <path d="M 188 338 Q 370 384 552 338" fill="none" stroke="#48827E" stroke-width="1.4" stroke-dasharray="5 4"/>
  <text x="370" y="378" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#BFD0DA">Transitive Accessibility (S4 Axiom 4: □φ → □□φ)</text>

  <rect x="74" y="420" width="140" height="218" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.8"/>
  <text x="144" y="452" text-anchor="middle" font-family="ui-monospace,monospace" font-size="16" font-weight="700" fill="#F0F6FA">M_~A1</text>
  <circle cx="144" cy="508" r="32" fill="none" stroke="#87B9B2" stroke-width="1.6"/>
  <circle cx="144" cy="458" r="6" fill="#E5EFF5"/>
  <text x="144" y="566" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">External Bird’s-Eye</text>
  <text x="144" y="586" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">Non-Situated Pole</text>
  <text x="144" y="618" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">A1:F  A2,3,4:T</text>

  <rect x="224" y="420" width="140" height="218" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.8"/>
  <text x="294" y="452" text-anchor="middle" font-family="ui-monospace,monospace" font-size="16" font-weight="700" fill="#F0F6FA">M_~A2</text>
  <circle cx="294" cy="508" r="14" fill="#87B9B2"/>
  <circle cx="294" cy="508" r="32" fill="none" stroke="#E5EFF5" stroke-width="1.2" stroke-dasharray="3 3"/>
  <text x="294" y="566" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">Solipsistic Hub</text>
  <text x="294" y="586" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">Zero Frame Parity</text>
  <text x="294" y="618" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">A2:F  A1,3,4:T</text>

  <rect x="374" y="420" width="140" height="218" fill="#0B203B" stroke="#48827E" stroke-width="2"/>
  <text x="444" y="452" text-anchor="middle" font-family="ui-monospace,monospace" font-size="16" font-weight="700" fill="#F0F6FA">M_~A3</text>
  <path d="M 404 508 Q 424 484 444 508 T 484 508" fill="none" stroke="#87B9B2" stroke-width="1.8"/>
  <text x="444" y="566" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">Cut-Free Flat</text>
  <text x="444" y="586" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">Continuum Field</text>
  <text x="444" y="618" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#E5EFF5">A3:F  A4:F (Thm)</text>

  <rect x="524" y="420" width="142" height="218" fill="#0B203B" stroke="#48827E" stroke-width="2"/>
  <text x="595" y="452" text-anchor="middle" font-family="ui-monospace,monospace" font-size="16" font-weight="700" fill="#F0F6FA">M_~A4</text>
  <line x1="595" y1="474" x2="595" y2="540" stroke="#87B9B2" stroke-width="3.2"/>
  <circle cx="595" cy="508" r="8" fill="#E5EFF5"/>
  <text x="595" y="566" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">Frozen Zero Slice</text>
  <text x="595" y="586" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">[t, t] Collapse</text>
  <text x="595" y="618" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">A4:F  A1,2,3:T</text>

  <rect x="74" y="672" width="592" height="278" fill="#0B203B" stroke="#48827E" stroke-width="1.8"/>
  <text x="370" y="708" text-anchor="middle" font-family="Georgia,serif" font-size="17" font-weight="700" fill="#F0F6FA">THEOREM 7.1 · STRATIFIED NECESSITY &amp; ENTAILED CUT (A4 ⊢ A3)</text>
  <line x1="98" y1="726" x2="642" y2="726" stroke="#51677B" stroke-width="1"/>
  <text x="104" y="762" text-anchor="start" font-family="ui-monospace,monospace" font-size="13" fill="#E5EFF5">1. Assume A4 (Asymmetric Self-Relation S_o ≥ 0 &amp; |I_now| &gt; 0).</text>
  <text x="104" y="798" text-anchor="start" font-family="ui-monospace,monospace" font-size="13" fill="#BFD0DA">2. Retention–Impression–Protention requires irreversible memory register Σ_o.</text>
  <text x="104" y="834" text-anchor="start" font-family="ui-monospace,monospace" font-size="13" fill="#BFD0DA">3. Any cut-free continuum field (M_~A3) loses Doplicher–Longo split factor N.</text>
  <text x="104" y="870" text-anchor="start" font-family="ui-monospace,monospace" font-size="13" fill="#E5EFF5">4. Contradiction: □(TemporalObs(o) → Asym(S_o)) entails ∃Sep(B_o, Inside_o, Ext_o).</text>
  <text x="370" y="920" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#87B9B2">∴ {A1, A2, A3} Independent · A4 Strictly Entails A3 Across Finite Observers</text>

  <text x="370" y="998" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" letter-spacing="2" fill="#8B9FAF">FIG. 7.1 · MODAL S4 INDEPENDENCE MATRIX &amp; COUNTERMODELS (§37)</text>
</svg>`
  },
  {
    id: 'fig-7-2',
    figureNumber: 'Figure 7.2',
    anchorChapter: 7,
    title: 'Psychophysical Lived Time: Human EEG Horizon, Allen Intervals & Point Freeze',
    caption:
      'Scientific worked example (§37 & §40) illustrating human temporal binding over Allen interval relations Overlaps(I_ret, I_now) and Meets(I_now, I_prot) synchronized to 100–3000 ms theta–gamma brainwaves versus M_~A4 collapse.',
    svgMarkup: `<svg viewBox="0 0 740 1046" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Human Lived Time EEG and Allen Interval Algebra">
  <rect x="0" y="0" width="740" height="1046" fill="#08182E"/>
  <rect x="28" y="28" width="684" height="990" fill="none" stroke="#51677B" stroke-width="1.3"/>

  <text x="370" y="72" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" letter-spacing="3" fill="#87B9B2">CHAPTER 7 · EMPIRICAL TEMPORAL THICKNESS (§37 &amp; §40)</text>
  <text x="370" y="112" text-anchor="middle" font-family="Georgia,serif" font-size="26" font-weight="700" letter-spacing="1.4" fill="#F0F6FA">PSYCHOPHYSICAL TIME &amp; ALLEN INTERVALS</text>
  <line x1="115" y1="134" x2="625" y2="134" stroke="#48827E" stroke-width="1.4"/>

  <path d="M 332 174 C 386 174, 424 206, 424 252 L 440 274 L 424 286 L 420 310 C 408 326, 384 334, 360 334 L 336 362 L 336 318 C 306 304, 294 274, 296 238 C 298 198, 314 174, 332 174 Z" fill="#0B203B" stroke="#E5EFF5" stroke-width="2.2"/>
  <path d="M 298 228 Q 360 156 420 220" fill="none" stroke="#87B9B2" stroke-width="2.6"/>
  <circle cx="332" cy="196" r="4" fill="#E5EFF5"/>
  <circle cx="364" cy="184" r="4" fill="#87B9B2"/>
  <circle cx="394" cy="196" r="4" fill="#E5EFF5"/>

  <circle cx="536" cy="242" r="20" fill="none" stroke="#87B9B2" stroke-width="1.8"/>
  <line x1="536" y1="208" x2="536" y2="276" stroke="#8B9FAF" stroke-width="1.3"/>
  <line x1="502" y1="242" x2="570" y2="242" stroke="#8B9FAF" stroke-width="1.3"/>
  <path d="M 434 252 L 510 244" stroke="#87B9B2" stroke-width="1.4" stroke-dasharray="4 4"/>
  <text x="536" y="302" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#BFD0DA">Visual–Auditory Crucible</text>

  <rect x="74" y="182" width="196" height="122" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.5"/>
  <text x="172" y="206" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" font-weight="700" fill="#F0F6FA">EEG GAMMA–THETA</text>
  <path d="M 90 256 L 106 234 L 122 274 L 138 224 L 154 282 L 170 236 L 186 266 L 202 238 L 218 264 L 234 246 L 254 254" fill="none" stroke="#87B9B2" stroke-width="1.8"/>
  <text x="172" y="294" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">Integration Cycle Δt ≈ 970 ms</text>

  <rect x="74" y="380" width="592" height="292" fill="#0B203B" stroke="#48827E" stroke-width="1.8"/>
  <text x="370" y="414" text-anchor="middle" font-family="Georgia,serif" font-size="17" font-weight="700" fill="#F0F6FA">ALLEN INTERVAL TOPOLOGY OF THE LIVING PRESENT (§37)</text>

  <rect x="104" y="446" width="268" height="46" fill="#16263A" stroke="#8B9FAF" stroke-width="2.2"/>
  <text x="238" y="474" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" font-weight="700" fill="#E5EFF5">I_RET (0 – 440 ms Retention)</text>

  <rect x="248" y="508" width="248" height="46" fill="#16263A" stroke="#87B9B2" stroke-width="2.6"/>
  <text x="372" y="536" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" font-weight="700" fill="#F0F6FA">I_NOW (120 – 440 ms)</text>

  <rect x="496" y="570" width="144" height="46" fill="#16263A" stroke="#48827E" stroke-width="2.2"/>
  <text x="568" y="598" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" font-weight="700" fill="#87B9B2">I_PROT (→ 970 ms)</text>

  <line x1="248" y1="436" x2="248" y2="626" stroke="#8B9FAF" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="372" y1="436" x2="372" y2="564" stroke="#8B9FAF" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="496" y1="498" x2="496" y2="626" stroke="#87B9B2" stroke-width="1.8"/>

  <text x="310" y="600" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#87B9B2">Overlaps(I_ret, I_now) &gt; 0</text>
  <text x="370" y="652" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-style="italic" fill="#E5EFF5">Coherent Synthesis Across ~100–3000 ms Varela–Pöppel Window</text>

  <rect x="74" y="704" width="592" height="244" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.6" stroke-dasharray="6 5"/>
  <text x="370" y="742" text-anchor="middle" font-family="Georgia,serif" font-size="17" font-weight="700" fill="#F0F6FA">DEGENERATE INSTANT COLLAPSE: |I_NOW| → 0 (MODEL M_~A4)</text>

  <line x1="118" y1="824" x2="622" y2="824" stroke="#51677B" stroke-width="1.3"/>
  <line x1="370" y1="774" x2="370" y2="874" stroke="#87B9B2" stroke-width="3.8"/>
  <circle cx="370" cy="824" r="10" fill="#E5EFF5"/>

  <text x="370" y="902" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#BFD0DA">Instantaneous Slice [t, t] · Zero Overlap · Zero Auditory/Motion Binding</text>
  <text x="370" y="930" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" fill="#E5EFF5">Falsifier (§40): Consciousness with zero sub-second temporal integration disproves A4.</text>

  <text x="370" y="998" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" letter-spacing="2" fill="#8B9FAF">FIG. 7.2 · WORKED EXAMPLE 7.1 &amp; PSYCHOPHYSICAL CRUCIBLE (§37 &amp; §40)</text>
</svg>`
  },
  {
    id: 'fig-8-1',
    figureNumber: 'Figure 8.1',
    anchorChapter: 8,
    title: 'Structural Identity Functors (Phen, Quant, Sys → ObsCat / Σ_Obs) & Empirical Crucibles',
    caption:
      'Category-theoretic schematic uniting Husserlian phenomenology, Rovelli’s RQM, Varela’s autopoiesis, and Śāntarakṣita’s svasamvedana via faithful functors onto ObsCat (Σ_Obs) alongside four decoupled laboratory tests (§§38–40).',
    svgMarkup: `<svg viewBox="0 0 740 1046" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Structural Identity Category Functors and Four Falsification Crucibles">
  <rect x="0" y="0" width="740" height="1046" fill="#08182E"/>
  <rect x="28" y="28" width="684" height="990" fill="none" stroke="#51677B" stroke-width="1.3"/>

  <text x="370" y="72" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" letter-spacing="3" fill="#87B9B2">CHAPTER 8 · STRUCTURAL IDENTITY &amp; FALSIFICATION (§§38–40)</text>
  <text x="370" y="112" text-anchor="middle" font-family="Georgia,serif" font-size="25" font-weight="700" letter-spacing="1.2" fill="#F0F6FA">CATEGORY FUNCTORS &amp; EMPIRICAL CRUCIBLES</text>
  <line x1="115" y1="134" x2="625" y2="134" stroke="#48827E" stroke-width="1.4"/>

  <circle cx="370" cy="248" r="82" fill="#0B203B" stroke="#87B9B2" stroke-width="2.4"/>
  <circle cx="370" cy="248" r="60" fill="none" stroke="#8B9FAF" stroke-width="1.1" stroke-dasharray="5 4"/>
  <ellipse cx="370" cy="224" rx="28" ry="12" fill="none" stroke="#E5EFF5" stroke-width="1.6"/>
  <circle cx="370" cy="224" r="5" fill="#87B9B2"/>
  <text x="370" y="264" text-anchor="middle" font-family="Georgia,serif" font-size="23" font-weight="700" fill="#F0F6FA">ObsCat (Σ_Obs)</text>
  <text x="370" y="292" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">SVASAMVEDANA INVARIANT</text>

  <line x1="166" y1="454" x2="314" y2="314" stroke="#87B9B2" stroke-width="2.2"/>
  <polygon points="318,310 306,315 314,324" fill="#87B9B2"/>
  <line x1="370" y1="454" x2="370" y2="338" stroke="#E5EFF5" stroke-width="2.2"/>
  <polygon points="370,332 364,344 376,344" fill="#E5EFF5"/>
  <line x1="574" y1="454" x2="426" y2="314" stroke="#87B9B2" stroke-width="2.2"/>
  <polygon points="422,310 426,324 434,315" fill="#87B9B2"/>

  <text x="208" y="378" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" font-weight="700" fill="#87B9B2">F_Phen</text>
  <text x="394" y="396" text-anchor="start" font-family="ui-monospace,monospace" font-size="13" font-weight="700" fill="#E5EFF5">F_RQM</text>
  <text x="532" y="378" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" font-weight="700" fill="#87B9B2">F_Bio</text>

  <line x1="258" y1="518" x2="282" y2="518" stroke="#8B9FAF" stroke-width="1.8"/>
  <line x1="458" y1="518" x2="482" y2="518" stroke="#8B9FAF" stroke-width="1.8"/>
  <text x="270" y="506" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-style="italic" fill="#E5EFF5">η</text>
  <text x="470" y="506" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-style="italic" fill="#E5EFF5">μ</text>

  <rect x="74" y="458" width="184" height="122" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.8"/>
  <text x="166" y="490" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">PHEN (HUSSERL)</text>
  <text x="166" y="518" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">Horizon · Living Now</text>
  <text x="166" y="544" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">§§2–15a · A1,A2,A4</text>

  <rect x="282" y="458" width="176" height="122" fill="#0B203B" stroke="#48827E" stroke-width="1.8"/>
  <text x="370" y="490" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">QUANT (ROVELLI)</text>
  <text x="370" y="518" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">Type I Collar · RQM</text>
  <text x="370" y="544" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">§§16–27 · A1–A4</text>

  <rect x="482" y="458" width="184" height="122" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.8"/>
  <text x="574" y="490" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">SYS (VARELA)</text>
  <text x="574" y="518" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">Markov Blanket · Loop</text>
  <text x="574" y="544" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">§§28–33 · A1–A4</text>

  <rect x="74" y="618" width="286" height="154" fill="#0B203B" stroke="#48827E" stroke-width="1.6"/>
  <text x="217" y="652" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">CRUCIBLE 1 · A1 IMMANENCE</text>
  <text x="217" y="684" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">LF (LF-HV Scope) &amp; Peres–Mermin χ_PM</text>
  <text x="217" y="714" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">η &gt; 2/3, V &gt; 0.85 · χ_PM &gt; 4</text>
  <text x="217" y="746" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Refutes Global Non-Contextual HV</text>

  <rect x="380" y="618" width="286" height="154" fill="#0B203B" stroke="#48827E" stroke-width="1.6"/>
  <text x="523" y="652" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">CRUCIBLE 2 · A2 PARITY</text>
  <text x="523" y="684" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">Cross-Perspective Overlap(o₁, o₂)</text>
  <text x="523" y="714" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">ΔP_TV = ½‖P_o₁ − P_cov,o₂‖₁ ≤ 0.02</text>
  <text x="523" y="746" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Refutes Privileged Frame Hierarchy o*</text>

  <rect x="74" y="794" width="286" height="154" fill="#0B203B" stroke="#48827E" stroke-width="1.6"/>
  <text x="217" y="828" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">CRUCIBLE 3 · A3 (+ §27 FOH)</text>
  <text x="217" y="860" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">Collar Decay vs. §27 FOH Auxiliary</text>
  <text x="217" y="890" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">I(μ : η | B_o) &lt; ε  (+ τ_coh ≥ 10²)</text>
  <text x="217" y="922" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Isolates Topological Cut from Heat Loop</text>

  <rect x="380" y="794" width="286" height="154" fill="#0B203B" stroke="#48827E" stroke-width="1.6"/>
  <text x="523" y="828" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">CRUCIBLE 4 · A4 &amp; CLOCKS</text>
  <text x="523" y="860" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">Optical Lattice (10⁻¹⁸) + PTA Residuals</text>
  <text x="523" y="890" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">Varela 100–3000 ms + Clock Null</text>
  <text x="523" y="922" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Defeats Duhem–Quine Holistic Evasion</text>

  <text x="370" y="998" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" letter-spacing="2" fill="#8B9FAF">FIG. 8.1 · STRUCTURAL IDENTITY FUNCTORS &amp; TESTBENCH (§§38–40)</text>
</svg>`
  },
  {
    id: 'fig-9-1',
    figureNumber: 'Figure 9.1',
    anchorChapter: 9,
    title: 'Comprehensive Synthesis Ledger: Resolving the Five Disciplinary Questions of §§0.1–1',
    caption:
      'Closing A4 architecture diagram mapping how Axioms A1–A4 and the Structural Identity Thesis systematically resolve all five foundational problems posed in the Abstract and Chapter 1 across Epistemology, Mind, Physics, Biology/AI, and Ethics.',
    svgMarkup: `<svg viewBox="0 0 740 1046" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comprehensive Synthesis Ledger Closing All Opening Questions">
  <rect x="0" y="0" width="740" height="1046" fill="#08182E"/>
  <rect x="28" y="28" width="684" height="990" fill="none" stroke="#51677B" stroke-width="1.3"/>

  <text x="370" y="72" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" letter-spacing="3" fill="#87B9B2">CHAPTER 9 · COMPREHENSIVE PHILOSOPHICAL VERDICT (§§41–43)</text>
  <text x="370" y="112" text-anchor="middle" font-family="Georgia,serif" font-size="25" font-weight="700" letter-spacing="1.2" fill="#F0F6FA">ANSWERING THE OPENING FRACTURE</text>
  <line x1="115" y1="134" x2="625" y2="134" stroke="#48827E" stroke-width="1.4"/>

  <!-- Central Horizon Seal -->
  <rect x="74" y="160" width="592" height="132" fill="#0B203B" stroke="#87B9B2" stroke-width="1.8"/>
  <text x="370" y="196" text-anchor="middle" font-family="Georgia,serif" font-size="17" font-weight="700" fill="#F0F6FA">THE CORE ANSWER TO “WHERE OR WHO IS THE OBSERVER?”</text>
  <text x="370" y="232" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="14" fill="#E5EFF5">Neither a marble trapped inside nature nor an external deity hovering outside:</text>
  <text x="370" y="264" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#87B9B2">Obs(o) ≡ Horizon H_o (A1) + Parity Equiv_inv (A2) + Cut B_o (A3) + Thick Now I_now (A4)</text>

  <!-- Five Resolved Stakes -->
  <rect x="74" y="316" width="592" height="110" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.5"/>
  <text x="96" y="348" text-anchor="start" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#87B9B2">1. EPISTEMOLOGY &amp; SCIENCE (§1 ↔ §41)</text>
  <text x="96" y="376" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="13" fill="#E5EFF5">Replaces God’s-eye realism and anything-goes relativism with covariant equivalence Equiv_inv</text>
  <text x="96" y="402" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#BFD0DA">Resolution: Friedman Relativized A Priori + 4 Decoupled Crucibles (§40)</text>

  <rect x="74" y="442" width="592" height="110" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.5"/>
  <text x="96" y="474" text-anchor="start" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#87B9B2">2. PHENOMENOLOGY &amp; MIND (§§2–15a ↔ §42)</text>
  <text x="96" y="502" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="13" fill="#E5EFF5">Grounds de se mineness (Meinhaftigkeit) &amp; Allen thickness without Cartesian ego or panpsychism</text>
  <text x="96" y="528" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#BFD0DA">Resolution: Henry A4a + Husserl Bernau Flow + Transparent PSM (§32)</text>

  <rect x="74" y="568" width="592" height="110" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.5"/>
  <text x="96" y="600" text-anchor="start" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#87B9B2">3. QUANTUM FOUNDATIONS &amp; TIME (§§16–27 ↔ §43)</text>
  <text x="96" y="628" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="13" fill="#E5EFF5">Unifies Bohr, von Neumann cuts, RQM links &amp; No-Go 5.1 fidelity without observer-collapse mysticism</text>
  <text x="96" y="654" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#BFD0DA">Resolution: Doplicher–Longo Collar N + Frame-Indexed Fact(x | o)</text>

  <rect x="74" y="694" width="592" height="110" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.5"/>
  <text x="96" y="726" text-anchor="start" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#87B9B2">4. SYSTEMS BIOLOGY &amp; AI (§§27–33 ↔ §43)</text>
  <text x="96" y="754" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="13" fill="#E5EFF5">Separates autonomous dissipative First Observers from stateless passive linear transducers</text>
  <text x="96" y="780" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#BFD0DA">Resolution: Autopoietic Boundary B_o + Irreversible Negentropy Cycle S_o ≥ 0</text>

  <rect x="74" y="820" width="592" height="122" fill="#0B203B" stroke="#48827E" stroke-width="1.6"/>
  <text x="96" y="852" text-anchor="start" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#87B9B2">5. ETHICS &amp; STANDPOINT BOUNDARIES (§§9, 15 ↔ §43)</text>
  <text x="96" y="880" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="13" fill="#E5EFF5">Honors Levinasian ethical overflow (¬A2 ∧ ¬A3) &amp; Marion saturation (¬A3) as explicit limits</text>
  <text x="96" y="908" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#BFD0DA">Resolution: Egalitarian Parity + Unmarked Alterity Convergence (Nāgārjuna &amp; Haraway)</text>

  <text x="370" y="998" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" letter-spacing="2" fill="#8B9FAF">FIG. 9.1 · COMPREHENSIVE FIVE-DISCIPLINE CONCLUSION (§§41–43)</text>
</svg>`
  },
  {
    id: 'fig-3-2',
    figureNumber: 'Figure 3.2',
    anchorChapter: 3,
    title: 'The Six Post-Structuralist Rupture-Types Mapped to Axiom Stress Vectors',
    caption:
      'Comparative formal chart distinguishing six post-structuralist ruptures of presence—Deferral (Derrida), Dispersion (Foucault), Splitting (Lacan), Fracturing (Deleuze), Plurality (Nancy), and Saturation (Marion)—mapped explicitly to Axioms A1–A4 and scope boundaries (§§10–15a).',
    svgMarkup: `<svg viewBox="0 0 740 1046" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Six Post-Structuralist Rupture-Types Diagram">
  <rect x="0" y="0" width="740" height="1046" fill="#08182E"/>
  <rect x="28" y="28" width="684" height="990" fill="none" stroke="#51677B" stroke-width="1.3"/>
  <text x="370" y="70" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" letter-spacing="3" fill="#87B9B2">CHAPTER 3 · TAXONOMY OF POST-STRUCTURALIST RUPTURES</text>
  <text x="370" y="108" text-anchor="middle" font-family="Georgia,serif" font-size="23" font-weight="700" fill="#F0F6FA">SIX RUPTURES OF PRESENCE &amp; AXIOM STRESS</text>
  <line x1="88" y1="128" x2="652" y2="128" stroke="#48827E" stroke-width="1.4"/>

  <rect x="64" y="160" width="290" height="220" fill="#0B203B" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="209" y="190" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">1. DEFERRAL · DERRIDA (§10)</text>
  <line x1="94" y1="206" x2="324" y2="206" stroke="#51677B" stroke-width="1"/>
  <line x1="94" y1="252" x2="324" y2="252" stroke="#8B9FAF" stroke-width="1.4" stroke-dasharray="4 3"/>
  <circle cx="144" cy="252" r="10" fill="#16263A" stroke="#E5EFF5" stroke-width="1.6"/>
  <circle cx="209" cy="252" r="10" fill="#263B54" stroke="#87B9B2" stroke-width="1.6"/>
  <circle cx="274" cy="252" r="10" fill="#16263A" stroke="#E5EFF5" stroke-width="1.6"/>
  <text x="209" y="294" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">Arche-Trace: t₁ &lt; t &lt; t₂</text>
  <text x="209" y="324" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Refutes punctual now [t, t] (A4b)</text>
  <text x="209" y="352" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">Autoimmunity keeps A3 cut open</text>

  <rect x="386" y="160" width="290" height="220" fill="#0B203B" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="531" y="190" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">2. DISPERSION · FOUCAULT (§11)</text>
  <line x1="416" y1="206" x2="646" y2="206" stroke="#51677B" stroke-width="1"/>
  <polygon points="531,222 574,274 488,274" fill="#16263A" stroke="#87B9B2" stroke-width="1.5"/>
  <circle cx="531" cy="256" r="6" fill="#F0F6FA"/>
  <text x="531" y="302" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">External Dispositif &amp; Episteme</text>
  <text x="531" y="330" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Historicizes H_o &amp; gaze cut (A1/A3)</text>
  <text x="531" y="356" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">Folded subjectivation bends B_o</text>

  <rect x="64" y="408" width="290" height="220" fill="#0B203B" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="209" y="438" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">3. SPLITTING · LACAN (§12)</text>
  <line x1="94" y1="454" x2="324" y2="454" stroke="#51677B" stroke-width="1"/>
  <text x="209" y="502" text-anchor="middle" font-family="Georgia,serif" font-size="30" font-weight="700" fill="#87B9B2">$  |  a</text>
  <text x="209" y="544" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">Internal Signifier Bar + Real a</text>
  <text x="209" y="574" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Extimacy maps Cut B_o &amp; Ext_o (A3)</text>
  <text x="209" y="602" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">Partial on A2 (singular objet a)</text>

  <rect x="386" y="408" width="290" height="220" fill="#0B203B" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="531" y="438" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">4. FRACTURING · DELEUZE (§13)</text>
  <line x1="416" y1="454" x2="646" y2="454" stroke="#51677B" stroke-width="1"/>
  <polygon points="531,472 586,522 476,522" fill="none" stroke="#E5EFF5" stroke-width="1.4"/>
  <polygon points="531,522 574,484 488,484" fill="#263B54" stroke="#87B9B2" stroke-width="1.4"/>
  <text x="531" y="552" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">3 Passive Syntheses · Partial Obs.</text>
  <text x="531" y="580" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Invaginated fold le pli (A1/A4)</text>
  <text x="531" y="606" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">Intensive asymmetry vs actual A2</text>

  <rect x="64" y="656" width="290" height="220" fill="#0B203B" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="209" y="686" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">5. PLURALITY · NANCY (§14)</text>
  <line x1="94" y1="702" x2="324" y2="702" stroke="#51677B" stroke-width="1"/>
  <circle cx="174" cy="744" r="24" fill="#16263A" stroke="#87B9B2" stroke-width="1.6"/>
  <circle cx="244" cy="744" r="24" fill="#16263A" stroke="#E5EFF5" stroke-width="1.6"/>
  <text x="209" y="750" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">o ↔ o′</text>
  <text x="209" y="796" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">Co-Original Être-Avec &amp; Spacing</text>
  <text x="209" y="824" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Co-constituted relational poles (A2)</text>
  <text x="209" y="852" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">Touching at finite boundary B_o</text>

  <rect x="386" y="656" width="290" height="220" fill="#0B203B" stroke="#48827E" stroke-width="2"/>
  <text x="531" y="686" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">6. SATURATION · MARION (§15)</text>
  <line x1="416" y1="702" x2="646" y2="702" stroke="#51677B" stroke-width="1"/>
  <line x1="450" y1="744" x2="612" y2="744" stroke="#87B9B2" stroke-width="1.6"/>
  <line x1="470" y1="720" x2="592" y2="768" stroke="#E5EFF5" stroke-width="1.2"/>
  <line x1="470" y1="768" x2="592" y2="720" stroke="#E5EFF5" stroke-width="1.2"/>
  <rect x="503" y="726" width="56" height="36" fill="none" stroke="#8B9FAF" stroke-width="1.4" stroke-dasharray="3 2"/>
  <text x="531" y="796" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">I(Phenomenon : B_o) ≫ C(B_o)</text>
  <text x="531" y="824" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Channel-Capacity Overflow (✗ A3)</text>
  <text x="531" y="852" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">Scoped Anomaly Zone (Plate XXI)</text>

  <rect x="64" y="902" width="612" height="66" fill="#16263A" stroke="#51677B" stroke-width="1.3"/>
  <text x="370" y="930" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" fill="#F0F6FA">Structural Rule (§15a): §§10–14 form role-preserving cut constraints inside Role(Obs);</text>
  <text x="370" y="952" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">§15 Saturation demarcates the upper capacity limit C(B_o) of bounded cognition.</text>
  <text x="370" y="1000" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" letter-spacing="2" fill="#8B9FAF">FIG. 3.2 · SIX RUPTURE-TYPES &amp; AXIOM STRESS MATRIX (§§10–15a)</text>
</svg>`
  },
  {
    id: 'fig-5-2',
    figureNumber: 'Figure 5.2',
    anchorChapter: 5,
    title: 'No-Go Theorem 5.1 Circuit Diagram & Fidelity–Visibility Trade-Off Bounds',
    caption:
      'Quantum circuit and convex parameter diagram for the two-qubit witness |Φ⁺⟩_SA showing encoding preparation m ∈ {0,1}, pointer readout r ∈ {0,1} inside Type I factor N, statistical lower bound P(r=m) ≥ 2F−1, and coherence ceiling V_coh ≤ 2√(F(1−F)) (§21).',
    svgMarkup: `<svg viewBox="0 0 740 1046" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="No-Go Theorem 5.1 Quantum Circuit Diagram">
  <rect x="0" y="0" width="740" height="1046" fill="#08182E"/>
  <rect x="28" y="28" width="684" height="990" fill="none" stroke="#51677B" stroke-width="1.3"/>
  <text x="370" y="70" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" letter-spacing="3" fill="#87B9B2">CHAPTER 5 · BIPARTITE WITNESS &amp; SPLIT CUT TRADE-OFF</text>
  <text x="370" y="108" text-anchor="middle" font-family="Georgia,serif" font-size="24" font-weight="700" fill="#F0F6FA">NO-GO THEOREM 5.1 · CIRCUIT &amp; BOUNDS</text>
  <line x1="92" y1="128" x2="648" y2="128" stroke="#48827E" stroke-width="1.4"/>

  <rect x="64" y="162" width="612" height="292" fill="#0B203B" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="370" y="192" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">TWO-QUBIT BELL WITNESS CIRCUIT |Φ⁺⟩_SA = (|00⟩ + |11⟩)/√2</text>

  <text x="88" y="256" text-anchor="start" font-family="ui-monospace,monospace" font-size="13" fill="#E5EFF5">S (o₁):</text>
  <line x1="154" y1="252" x2="626" y2="252" stroke="#E5EFF5" stroke-width="2"/>
  <text x="88" y="346" text-anchor="start" font-family="ui-monospace,monospace" font-size="13" fill="#87B9B2">A (o₂):</text>
  <line x1="154" y1="342" x2="626" y2="342" stroke="#87B9B2" stroke-width="2"/>

  <rect x="176" y="226" width="64" height="52" fill="#16263A" stroke="#E5EFF5" stroke-width="1.6"/>
  <text x="208" y="257" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" fill="#F0F6FA">U(m)</text>
  <circle cx="298" cy="252" r="7" fill="#F0F6FA"/>
  <line x1="298" y1="252" x2="298" y2="358" stroke="#87B9B2" stroke-width="2"/>
  <circle cx="298" cy="342" r="16" fill="none" stroke="#87B9B2" stroke-width="2"/>
  <text x="298" y="218" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">CNOT / Coupling</text>

  <line x1="378" y1="206" x2="378" y2="388" stroke="#48827E" stroke-width="2.4" stroke-dasharray="6 4"/>
  <text x="378" y="408" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">Doplicher–Longo Split B_o : M(O₁) ⊂ N ⊂ M(O₂)′</text>

  <rect x="442" y="316" width="84" height="52" fill="#263B54" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="484" y="347" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">Read r∈Σ</text>
  <rect x="556" y="226" width="62" height="52" fill="#16263A" stroke="#8B9FAF" stroke-width="1.5"/>
  <text x="587" y="257" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#E5EFF5">V_coh</text>

  <text x="370" y="436" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">Quantifier Order: ∀o₁, o₂ ∃B_o (preparation-independent trials; A2 covariance preserved)</text>

  <rect x="64" y="482" width="612" height="330" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.6"/>
  <text x="370" y="514" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">COMPLEMENTARY BOUND CURVE · V_coh ≤ 2√(F(1 − F))</text>

  <line x1="146" y1="744" x2="614" y2="744" stroke="#E5EFF5" stroke-width="1.8"/>
  <line x1="146" y1="548" x2="146" y2="744" stroke="#E5EFF5" stroke-width="1.8"/>
  <path d="M 146 566 C 280 566, 460 612, 574 744 L 574 548 L 146 548 Z" fill="#263B54" opacity="0.65"/>
  <path d="M 146 566 C 280 566, 460 612, 574 744" fill="none" stroke="#87B9B2" stroke-width="2.6"/>

  <circle cx="146" cy="566" r="6" fill="#F0F6FA"/>
  <text x="164" y="562" text-anchor="start" font-family="ui-monospace,monospace" font-size="11" fill="#F0F6FA">F = 0.50 · V_coh = 1.00</text>
  <circle cx="445" cy="619" r="7" fill="#87B9B2"/>
  <text x="348" y="644" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#E5EFF5">F = 0.85 → V ≤ 0.714 (P≥0.70)</text>
  <circle cx="574" cy="744" r="6" fill="#F0F6FA"/>
  <text x="536" y="726" text-anchor="end" font-family="ui-monospace,monospace" font-size="11" fill="#F0F6FA">r = m (F = 1.00, V_coh = 0)</text>

  <text x="392" y="582" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" font-weight="700" fill="#BFD0DA">FORBIDDEN NO-GO REGION (A2/A3 VIOLATION)</text>
  <text x="370" y="778" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">Classical One-Way Signaling Fidelity F ∈ [0.50, 1.00]</text>
  <text x="98" y="652" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">V_coh</text>

  <rect x="64" y="838" width="612" height="128" fill="#16263A" stroke="#48827E" stroke-width="1.5"/>
  <text x="370" y="868" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">FIDELITY LEMMA &amp; CONVERSE-FALLACY GUARD</text>
  <text x="92" y="898" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#E5EFF5">1. Statistical Clause (F &gt; 1/2): P(r = m) ≥ 2F − 1 &gt; 0 forces split boundary B_o.</text>
  <text x="92" y="922" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#E5EFF5">2. Deterministic Clause (r = m, F = 1): V_coh = 0 branch-relatively; marginals no-signaling.</text>
  <text x="92" y="946" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">3. Converse Fallacy Guard: Pure dephasing gives V_coh = 0 with F = 0.50 (V = 0 ⇏ F &gt; 1/2).</text>
  <text x="370" y="1000" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" letter-spacing="2" fill="#8B9FAF">FIG. 5.2 · NO-GO THEOREM 5.1 WITNESS &amp; COHERENCE BOUNDS (§21)</text>
</svg>`
  },
  {
    id: 'fig-6-2',
    figureNumber: 'Figure 6.2',
    anchorChapter: 6,
    title: 'Autopoiesis vs. Active Inference: Component Closure and Markov Blanket Topology',
    caption:
      'Side-by-side structural diagram distinguishing Maturana–Varela (1972) component-production autopoietic closure from Friston (2013) Bayesian Markov-blanket conditional independence (μ ⊥ η | B_o), showing how statistical conditional independence maps onto topological Axiom A3 (§30).',
    svgMarkup: `<svg viewBox="0 0 740 1046" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Autopoiesis vs Active Inference Diagram">
  <rect x="0" y="0" width="740" height="1046" fill="#08182E"/>
  <rect x="28" y="28" width="684" height="990" fill="none" stroke="#51677B" stroke-width="1.3"/>
  <text x="370" y="70" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" letter-spacing="3" fill="#87B9B2">CHAPTER 6 · RECONSTRUCTION BOUNDARY IN SYSTEMS BIOLOGY</text>
  <text x="370" y="108" text-anchor="middle" font-family="Georgia,serif" font-size="22" font-weight="700" fill="#F0F6FA">AUTOPOIESIS VS. ACTIVE INFERENCE</text>
  <line x1="92" y1="128" x2="648" y2="128" stroke="#48827E" stroke-width="1.4"/>

  <rect x="58" y="160" width="300" height="460" fill="#0B203B" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="208" y="194" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">A. MATURANA–VARELA (1972)</text>
  <text x="208" y="218" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#87B9B2">COMPONENT-PRODUCTION CLOSURE</text>
  <circle cx="208" cy="368" r="112" fill="#16263A" stroke="#E5EFF5" stroke-width="2.2"/>
  <circle cx="208" cy="368" r="66" fill="#0B203B" stroke="#87B9B2" stroke-width="1.5" stroke-dasharray="5 3"/>
  <path d="M 164 342 A 54 54 0 0 1 252 342" fill="none" stroke="#F0F6FA" stroke-width="2"/>
  <path d="M 252 394 A 54 54 0 0 1 164 394" fill="none" stroke="#87B9B2" stroke-width="2"/>
  <text x="208" y="366" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">Metabolic Net</text>
  <text x="208" y="388" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">Self-Producing C₁..C_k</text>
  <text x="208" y="464" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#E5EFF5">Lipid Membrane Boundary B_phys</text>
  <text x="208" y="532" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Material self-synthesis regenerates</text>
  <text x="208" y="552" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">the topological boundary enclosing it.</text>
  <text x="208" y="592" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#87B9B2">Structural coupling = A2 Parity</text>

  <rect x="382" y="160" width="300" height="460" fill="#0B203B" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="532" y="194" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">B. FRISTON (2013) RECONSTRUCTION</text>
  <text x="532" y="218" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#87B9B2">BAYESIAN MARKOV BLANKET</text>

  <rect x="424" y="252" width="216" height="58" fill="#16263A" stroke="#8B9FAF" stroke-width="1.4"/>
  <text x="532" y="286" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" fill="#E5EFF5">η · External States (Ext_o)</text>

  <rect x="412" y="338" width="106" height="56" fill="#263B54" stroke="#87B9B2" stroke-width="1.8"/>
  <text x="465" y="371" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">s · Sensory</text>
  <rect x="546" y="338" width="106" height="56" fill="#263B54" stroke="#87B9B2" stroke-width="1.8"/>
  <text x="599" y="371" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">a · Active</text>

  <rect x="424" y="422" width="216" height="64" fill="#16263A" stroke="#E5EFF5" stroke-width="1.8"/>
  <text x="532" y="452" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" fill="#F0F6FA">μ · Internal States (Inside_o)</text>
  <text x="532" y="474" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#87B9B2">P(μ, η | B_o) = P(μ | B) P(η | B)</text>

  <text x="532" y="532" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Conditional statistical independence:</text>
  <text x="532" y="552" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#87B9B2">μ ⊥ η | B_o   (I(μ : η | B_o) = 0)</text>
  <text x="532" y="592" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">Non-anachronistic post-Pearl formalization</text>

  <rect x="58" y="648" width="624" height="310" fill="#16263A" stroke="#48827E" stroke-width="1.6"/>
  <text x="370" y="684" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">STATISTICAL INDEPENDENCE → TOPOLOGICAL DEMARCATION (A3)</text>
  <line x1="88" y1="702" x2="652" y2="702" stroke="#51677B" stroke-width="1"/>
  <text x="90" y="738" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">1. Gap Identified:</text>
  <text x="236" y="738" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">μ ⊥ η | B_o is a statistical conditional factorization, not automatic space.</text>
  <text x="90" y="776" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">2. Topological Lift:</text>
  <text x="236" y="776" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Dissipative non-equilibrium persistence embeds B_o as sparse interaction graph ∂U.</text>
  <text x="90" y="814" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">3. Spatial Sep(B_o):</text>
  <text x="236" y="814" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Causal interaction locality forces graph boundary ∂U = Sep(B_o, Inside_o, Ext_o).</text>
  <text x="90" y="852" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">4. Logical Verdict:</text>
  <text x="236" y="852" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#F0F6FA">Autopoiesis exemplifies A3 materially; A3 does NOT collapse into carbon biology.</text>
  <text x="370" y="924" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">Collar Screen I(μ : η | B_o) &lt; ε Isolates A3 ; τ_coh(Act) ≫ τ_coh(Pas) Tests §27 FOH</text>

  <text x="370" y="1000" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" letter-spacing="2" fill="#8B9FAF">FIG. 6.2 · AUTOPOIESIS VS. MARKOV BLANKET RECONSTRUCTION (§30)</text>
</svg>`
  },
  {
    id: 'fig-7-3',
    figureNumber: 'Figure 7.3',
    anchorChapter: 7,
    title: 'Four Separating Countermodels (M_~A1..M_~A4) as Explicit Kripke World Diagrams',
    caption:
      'Explicit varying-domain Kripke world diagrams ⟨W, R, D(w), Σ_o, I⟩ for M_~A1 (Archimedean Sensor), M_~A2 (Leibnizian Bubble), M_~A3 (Cut-Free Continuum), and M_~A4 (Passive Static Cut), proving strict independence of {A1–A3} and stratified A4 → A3 (§34.5 & §37).',
    svgMarkup: `<svg viewBox="0 0 740 1046" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Separating Countermodels Kripke Diagrams">
  <rect x="0" y="0" width="740" height="1046" fill="#08182E"/>
  <rect x="28" y="28" width="684" height="990" fill="none" stroke="#51677B" stroke-width="1.3"/>
  <text x="370" y="70" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" letter-spacing="3" fill="#87B9B2">CHAPTER 7 · MODEL-THEORETIC INDEPENDENCE PROOF (§34.5)</text>
  <text x="370" y="108" text-anchor="middle" font-family="Georgia,serif" font-size="22" font-weight="700" fill="#F0F6FA">KRIPKE COUNTERMODELS M_~A1 .. M_~A4</text>
  <line x1="92" y1="128" x2="648" y2="128" stroke="#48827E" stroke-width="1.4"/>

  <rect x="58" y="160" width="300" height="360" fill="#0B203B" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="208" y="192" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">M_~A1 · ARCHIMEDEAN SENSOR</text>
  <circle cx="142" cy="272" r="32" fill="#16263A" stroke="#E5EFF5" stroke-width="1.6"/>
  <text x="142" y="276" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">w₀: o_g</text>
  <circle cx="274" cy="272" r="32" fill="#16263A" stroke="#E5EFF5" stroke-width="1.6"/>
  <text x="274" y="276" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">w₁: o_g</text>
  <line x1="174" y1="272" x2="242" y2="272" stroke="#87B9B2" stroke-width="1.8"/>
  <text x="208" y="262" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#87B9B2">R (global)</text>
  <text x="208" y="346" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#E5EFF5">A1: FALSE  |  A2,A3,A4: TRUE</text>
  <text x="208" y="382" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">Global valuation sheet v_global</text>
  <text x="208" y="404" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">gives ¬Situated(o_g) without</text>
  <text x="208" y="426" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">contextual quantum obstruction.</text>
  <text x="208" y="476" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">⊢ A2,A3,A4 ⊭ A1</text>

  <rect x="382" y="160" width="300" height="360" fill="#0B203B" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="532" y="192" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">M_~A2 · LEIBNIZIAN BUBBLE</text>
  <circle cx="466" cy="272" r="32" fill="#16263A" stroke="#E5EFF5" stroke-width="1.6"/>
  <text x="466" y="276" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">w₀: o*</text>
  <circle cx="598" cy="272" r="32" fill="#16263A" stroke="#51677B" stroke-width="1.6"/>
  <text x="598" y="276" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#BFD0DA">w₁: o′</text>
  <line x1="504" y1="260" x2="560" y2="284" stroke="#87B9B2" stroke-width="1.6"/>
  <line x1="504" y1="284" x2="560" y2="260" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="532" y="346" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#E5EFF5">A2: FALSE  |  A1,A3,A4: TRUE</text>
  <text x="532" y="382" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">Windowless private horizon H_o*</text>
  <text x="532" y="404" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">and thick duration |I_now*| &gt; 0</text>
  <text x="532" y="426" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">with zero Compat(o*, o′) map.</text>
  <text x="532" y="476" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">⊢ A1,A3,A4 ⊭ A2</text>

  <rect x="58" y="548" width="300" height="360" fill="#0B203B" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="208" y="580" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">M_~A3 · CUT-FREE FIELD</text>
  <rect x="108" y="618" width="200" height="88" fill="#263B54" stroke="#8B9FAF" stroke-width="1.4" stroke-dasharray="4 4"/>
  <text x="208" y="656" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#E5EFF5">Type III₁ Continuum</text>
  <text x="208" y="680" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">Zero Split Collar B_o (Σ_o = ∅)</text>
  <text x="208" y="742" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#E5EFF5">A3: FALSE, A4: FALSE | A1,A2: T</text>
  <text x="208" y="778" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">Covariant charts exist without</text>
  <text x="208" y="800" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">intermediate Type I factor N;</text>
  <text x="208" y="822" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">collapsing memory collapses A4.</text>
  <text x="208" y="866" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">⊢ A1,A2 ⊭ A3  (Confirms A4 → A3)</text>

  <rect x="382" y="548" width="300" height="360" fill="#0B203B" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="532" y="580" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">M_~A4 · PASSIVE STATIC CUT</text>
  <rect x="432" y="618" width="200" height="88" fill="#16263A" stroke="#E5EFF5" stroke-width="1.6"/>
  <text x="532" y="656" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">Fixed Cut [t, t] (Dur = 0)</text>
  <text x="532" y="680" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#87B9B2">T_c Symmetry: S_o = 0</text>
  <text x="532" y="742" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#E5EFF5">A4: FALSE  |  A1,A2,A3: TRUE</text>
  <text x="532" y="778" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">4D RBW worldtube satisfies</text>
  <text x="532" y="800" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">horizon, parity &amp; spatial cut</text>
  <text x="532" y="822" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">while lacking Asym(S_o) &amp; |I| &gt; 0.</text>
  <text x="532" y="866" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">⊢ A1,A2,A3 ⊭ A4 (Strict Stratification)</text>

  <text x="370" y="950" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">Minimal Stratified Independence Proven: No Weaker Proper Subset Entails {A1..A4}</text>
  <text x="370" y="1000" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" letter-spacing="2" fill="#8B9FAF">FIG. 7.3 · KRIPKE SEPARATING COUNTERMODELS (§34.5 &amp; §37)</text>
</svg>`
  },
  {
    id: 'fig-8-2',
    figureNumber: 'Figure 8.2',
    anchorChapter: 8,
    title: 'Functorial Structural Identity Thesis (SIT) as Explicit Commutative Diagrams',
    caption:
      'Commutative category-theoretic diagram illustrating faithful (hom-set injective), identity- and composition-preserving functors F_Phen, F_RQM, F_Bio from Phen, Quant, Sys into Σ_Obs (explicitly distinguishing faithful embedding from invertible category isomorphism, §§38.1–38.4).',
    svgMarkup: `<svg viewBox="0 0 740 1046" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Functorial SIT Commutative Diagram">
  <rect x="0" y="0" width="740" height="1046" fill="#08182E"/>
  <rect x="28" y="28" width="684" height="990" fill="none" stroke="#51677B" stroke-width="1.3"/>
  <text x="370" y="70" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" letter-spacing="3" fill="#87B9B2">CHAPTER 8 · FORMAL CATEGORY FUNCTORS (§§38.1–38.4)</text>
  <text x="370" y="108" text-anchor="middle" font-family="Georgia,serif" font-size="22" font-weight="700" fill="#F0F6FA">COMMUTATIVE FUNCTORIAL SIT · Σ_Obs</text>
  <line x1="92" y1="128" x2="648" y2="128" stroke="#48827E" stroke-width="1.4"/>

  <rect x="58" y="158" width="624" height="232" fill="#0B203B" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="370" y="188" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">SOURCE MORPHISM TRIANGLE COMMUTING UNDER F ∈ {F_Phen, F_RQM, F_Bio}</text>

  <rect x="92" y="218" width="108" height="44" fill="#16263A" stroke="#E5EFF5" stroke-width="1.5"/>
  <text x="146" y="245" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" fill="#F0F6FA">X ∈ C</text>
  <rect x="292" y="218" width="108" height="44" fill="#16263A" stroke="#E5EFF5" stroke-width="1.5"/>
  <text x="346" y="245" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" fill="#F0F6FA">Y ∈ C</text>
  <rect x="192" y="320" width="108" height="44" fill="#16263A" stroke="#E5EFF5" stroke-width="1.5"/>
  <text x="246" y="347" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" fill="#F0F6FA">Z ∈ C</text>
  <line x1="200" y1="240" x2="292" y2="240" stroke="#87B9B2" stroke-width="2"/>
  <text x="246" y="232" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">f</text>
  <line x1="330" y1="262" x2="276" y2="320" stroke="#87B9B2" stroke-width="2"/>
  <text x="322" y="300" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">g</text>
  <line x1="160" y1="262" x2="214" y2="320" stroke="#E5EFF5" stroke-width="2"/>
  <text x="166" y="302" text-anchor="end" font-family="ui-monospace,monospace" font-size="12" fill="#E5EFF5">g ∘ f</text>

  <line x1="416" y1="292" x2="472" y2="292" stroke="#F0F6FA" stroke-width="2.2"/>
  <text x="444" y="280" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#87B9B2">F</text>

  <rect x="488" y="218" width="166" height="146" fill="#263B54" stroke="#87B9B2" stroke-width="1.8"/>
  <text x="571" y="246" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">F(X) —[F(f)]→ F(Y)</text>
  <text x="571" y="278" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">↓ F(g∘f)      ↓ F(g)</text>
  <text x="571" y="310" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#87B9B2">F(Z) = F(Z)</text>
  <text x="571" y="344" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#E5EFF5">F(g ∘ f) = F(g) ∘ F(f)</text>

  <rect x="58" y="418" width="624" height="316" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.6"/>
  <text x="370" y="450" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">FAITHFUL EMBEDDINGS ONTO INVARIANT SIGNATURE Σ_Obs</text>
  <line x1="88" y1="468" x2="652" y2="468" stroke="#51677B" stroke-width="1"/>

  <rect x="82" y="492" width="176" height="64" fill="#16263A" stroke="#87B9B2" stroke-width="1.5"/>
  <text x="170" y="518" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">Phen (Husserl)</text>
  <text x="170" y="540" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="11" fill="#BFD0DA">Nullpunkt · Paarung</text>

  <rect x="282" y="492" width="176" height="64" fill="#16263A" stroke="#87B9B2" stroke-width="1.5"/>
  <text x="370" y="518" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">Quant (RQM)</text>
  <text x="370" y="540" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="11" fill="#BFD0DA">Split N · Cross-Links</text>

  <rect x="482" y="492" width="176" height="64" fill="#16263A" stroke="#87B9B2" stroke-width="1.5"/>
  <text x="570" y="518" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">Sys (Autopoiesis)</text>
  <text x="570" y="540" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="11" fill="#BFD0DA">Blanket B · Coupling</text>

  <line x1="170" y1="556" x2="310" y2="624" stroke="#E5EFF5" stroke-width="1.8"/>
  <line x1="370" y1="556" x2="370" y2="624" stroke="#E5EFF5" stroke-width="1.8"/>
  <line x1="570" y1="556" x2="430" y2="624" stroke="#E5EFF5" stroke-width="1.8"/>

  <rect x="190" y="624" width="360" height="84" fill="#263B54" stroke="#E5EFF5" stroke-width="2"/>
  <text x="370" y="656" text-anchor="middle" font-family="Georgia,serif" font-size="18" font-weight="700" fill="#F0F6FA">Σ_Obs = ⟨Ob_Obs, Hom_Obs⟩</text>
  <text x="370" y="684" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">Invariant Subcategory Sharing {A1, A2, A3, A4}</text>

  <rect x="58" y="762" width="624" height="196" fill="#16263A" stroke="#48827E" stroke-width="1.5"/>
  <text x="370" y="794" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">FAITHFUL EMBEDDING VS. CATEGORY ISOMORPHISM (§38.4)</text>
  <text x="90" y="828" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">• Faithfulness Proven:</text>
  <text x="270" y="828" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Injective on Hom(X, Y): distinct transitions map distinctly.</text>
  <text x="90" y="860" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">• No Overclaim of Isomorphism:</text>
  <text x="304" y="860" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">F forgets material carriers (lipid vs. qubit); not full/surjective.</text>
  <text x="90" y="892" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">• Equivalence on Common Image:</text>
  <text x="316" y="892" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Image subcategories coincide structurally up to Σ_Obs parity.</text>
  <text x="90" y="924" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#BFD0DA">• Identity Preservation:</text>
  <text x="270" y="924" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">F(id_X) = id_{F(X)} checked explicitly across all 3 poles.</text>

  <text x="370" y="1000" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" letter-spacing="2" fill="#8B9FAF">FIG. 8.2 · COMMUTATIVE FUNCTORS &amp; FAITHFULNESS PROOF (§§38.1–38.4)</text>
</svg>`
  },
  {
    id: 'fig-9-2',
    figureNumber: 'Figure 9.2',
    anchorChapter: 9,
    title: 'Constitutive-Absence Resolution as a Topological Vanishing-Point Diagram',
    caption:
      'Topological perspectival geometry resolving Constitutive Absence (Definition 1.0 & §43): an observer satisfies o ∈ Conditions(World) ∧ o ∉ Obj(Inside_o), acting like a geometric vanishing point that organizes Horizon H_o across Boundary B_o without appearing inside the framed visual manifold.',
    svgMarkup: `<svg viewBox="0 0 740 1046" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Constitutive Absence Topological Vanishing Point Diagram">
  <rect x="0" y="0" width="740" height="1046" fill="#08182E"/>
  <rect x="28" y="28" width="684" height="990" fill="none" stroke="#51677B" stroke-width="1.3"/>
  <text x="370" y="70" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" letter-spacing="3" fill="#87B9B2">CHAPTER 9 · FORMAL RESOLUTION OF CONSTITUTIVE ABSENCE</text>
  <text x="370" y="108" text-anchor="middle" font-family="Georgia,serif" font-size="22" font-weight="700" fill="#F0F6FA">TOPOLOGICAL VANISHING POINT · A1–A4</text>
  <line x1="92" y1="128" x2="648" y2="128" stroke="#48827E" stroke-width="1.4"/>

  <rect x="74" y="168" width="592" height="474" fill="#0B203B" stroke="#87B9B2" stroke-width="1.8"/>
  <text x="370" y="198" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#87B9B2">REPRESENTED WORLD FIELD · Inside_o ⊂ H_o (Marked Objects)</text>

  <polygon points="370,736 124,234 616,234" fill="#16263A" opacity="0.55"/>
  <line x1="370" y1="736" x2="124" y2="234" stroke="#E5EFF5" stroke-width="1.8"/>
  <line x1="370" y1="736" x2="248" y2="234" stroke="#87B9B2" stroke-width="1.3" stroke-dasharray="4 3"/>
  <line x1="370" y1="736" x2="370" y2="234" stroke="#87B9B2" stroke-width="1.3" stroke-dasharray="4 3"/>
  <line x1="370" y1="736" x2="492" y2="234" stroke="#87B9B2" stroke-width="1.3" stroke-dasharray="4 3"/>
  <line x1="370" y1="736" x2="616" y2="234" stroke="#E5EFF5" stroke-width="1.8"/>

  <rect x="190" y="294" width="110" height="68" fill="#263B54" stroke="#E5EFF5" stroke-width="1.5"/>
  <text x="245" y="332" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">Object x₁</text>
  <rect x="440" y="346" width="110" height="68" fill="#263B54" stroke="#E5EFF5" stroke-width="1.5"/>
  <text x="495" y="384" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">Pointer r₂</text>
  <ellipse cx="370" cy="492" rx="188" ry="40" fill="none" stroke="#87B9B2" stroke-width="2"/>
  <text x="370" y="497" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">Operational Cut B_o (A3)</text>

  <line x1="74" y1="642" x2="666" y2="642" stroke="#48827E" stroke-width="3"/>
  <text x="370" y="670" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">UNMARKED BOUNDARY THRESHOLD · ¬ObjWithin(B_o, Inside_o)</text>

  <circle cx="370" cy="736" r="24" fill="#08182E" stroke="#F0F6FA" stroke-width="2.4"/>
  <circle cx="370" cy="736" r="7" fill="#87B9B2"/>
  <text x="370" y="782" text-anchor="middle" font-family="Georgia,serif" font-size="17" font-weight="700" fill="#F0F6FA">VANISHING ORIGIN o ∈ Conditions(World) ∧ o ∉ Obj(Inside_o)</text>

  <rect x="74" y="812" width="592" height="150" fill="#16263A" stroke="#51677B" stroke-width="1.5"/>
  <text x="370" y="842" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">TWO-FOLD RESOLUTION WITHOUT DUALISM (DEFINITION 1.0)</text>
  <text x="98" y="874" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">1. Situated Existence:</text>
  <text x="272" y="874" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">o ∈ D(w) in real world (horizon H_o, cut B_o, entropy update S_o ≥ 0).</text>
  <text x="98" y="904" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">2. Constitutive Absence:</text>
  <text x="272" y="904" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">o ∉ Dom(Rep_o(w)): vanishing origin organizes field without residing inside it.</text>
  <text x="98" y="934" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">3. 2nd-Order Visibility:</text>
  <text x="272" y="934" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Peer frame o′ (A2 parity) witnesses o’s cut B_o by installing its own blind spot.</text>

  <text x="370" y="1000" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" letter-spacing="2" fill="#8B9FAF">FIG. 9.2 · CONSTITUTIVE-ABSENCE VANISHING-POINT TOPOLOGY (§43)</text>
</svg>`
  },
  {
    id: 'fig-0-2',
    figureNumber: 'Figure 0.2',
    anchorChapter: 0,
    title: 'Two-Stage Methodological Architecture: Dialectical Genealogy vs. Non-Circular Deductive Proof',
    caption:
      'Methodological separation diagram contrasting historical dialectical discovery across §§2–33 (left) with non-circular formal S4 proofs, separating Kripke countermodels M_~A1..M_~A4, and apparatus-disjoint empirical falsifiers in §§34–40 (right) (§0.1 & §34.5).',
    svgMarkup: `<svg viewBox="0 0 740 1046" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-Stage Methodological Architecture Diagram">
  <rect x="0" y="0" width="740" height="1046" fill="#08182E"/>
  <rect x="28" y="28" width="684" height="990" fill="none" stroke="#51677B" stroke-width="1.3"/>

  <text x="370" y="70" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" letter-spacing="3" fill="#87B9B2">CHAPTER 1 · NON-CIRCULAR METHODOLOGY (§0.1 &amp; §34.5)</text>
  <text x="370" y="108" text-anchor="middle" font-family="Georgia,serif" font-size="22" font-weight="700" fill="#F0F6FA">DISCOVERY GENEALOGY VS. FORMAL PROOF</text>
  <line x1="90" y1="128" x2="650" y2="128" stroke="#48827E" stroke-width="1.4"/>

  <rect x="58" y="160" width="292" height="516" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.7"/>
  <text x="204" y="194" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">STAGE I · HISTORICAL GENEALOGY</text>
  <text x="204" y="218" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#87B9B2">CONTEXT OF DISCOVERY (§§2–33)</text>
  <line x1="82" y1="234" x2="326" y2="234" stroke="#51677B" stroke-width="1"/>

  <rect x="82" y="256" width="244" height="74" fill="#16263A" stroke="#87B9B2" stroke-width="1.4"/>
  <text x="204" y="284" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" font-weight="700" fill="#F0F6FA">Phenomenology (§§2–9)</text>
  <text x="204" y="310" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">Kant B131 · Husserl · Levinas Limit</text>

  <rect x="82" y="348" width="244" height="74" fill="#16263A" stroke="#87B9B2" stroke-width="1.4"/>
  <text x="204" y="376" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" font-weight="700" fill="#F0F6FA">Post-Structuralism (§§10–15a)</text>
  <text x="204" y="402" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">Trace · Dispositif · $ · Marion Excl_Sat</text>

  <rect x="82" y="440" width="244" height="74" fill="#16263A" stroke="#87B9B2" stroke-width="1.4"/>
  <text x="204" y="468" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" font-weight="700" fill="#F0F6FA">Quantum Cuts (§§16–27)</text>
  <text x="204" y="494" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">Bohr · vN Cut · RQM · FOH IGUS</text>

  <rect x="82" y="532" width="244" height="74" fill="#16263A" stroke="#87B9B2" stroke-width="1.4"/>
  <text x="204" y="560" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" font-weight="700" fill="#F0F6FA">Systems Biology (§§28–33)</text>
  <text x="204" y="586" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">Eigenbehavior · Autopoiesis · PSM</text>

  <text x="204" y="644" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Locates historical aporias without</text>
  <text x="204" y="662" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">anachronistic modal projection.</text>

  <rect x="390" y="160" width="292" height="516" fill="#0B203B" stroke="#48827E" stroke-width="1.8"/>
  <text x="536" y="194" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">STAGE II · DEDUCTIVE JUSTIFICATION</text>
  <text x="536" y="218" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#87B9B2">INDEPENDENT VERIFICATION (§§34–40)</text>
  <line x1="414" y1="234" x2="658" y2="234" stroke="#51677B" stroke-width="1"/>

  <rect x="414" y="256" width="244" height="86" fill="#263B54" stroke="#E5EFF5" stroke-width="1.5"/>
  <text x="536" y="284" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" font-weight="700" fill="#F0F6FA">1. Hybrid Varying-Domain S4</text>
  <text x="536" y="308" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#87B9B2">⟨W, R, D(w), E, =_w⟩ · Prop. E.1</text>
  <text x="536" y="328" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">Fitch RAA + Lean 4 Type Signatures</text>

  <rect x="414" y="362" width="244" height="86" fill="#263B54" stroke="#E5EFF5" stroke-width="1.5"/>
  <text x="536" y="390" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" font-weight="700" fill="#F0F6FA">2. Countermodel Independence</text>
  <text x="536" y="414" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#87B9B2">Theorem 7.0: M_~A1..M_~A4</text>
  <text x="536" y="434" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">Lemma 35.1 Proper Split Inclusion</text>

  <rect x="414" y="468" width="244" height="86" fill="#263B54" stroke="#E5EFF5" stroke-width="1.5"/>
  <text x="536" y="496" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" font-weight="700" fill="#F0F6FA">3. Faithful SIT Functors</text>
  <text x="536" y="520" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#87B9B2">Phen, Quant, Sys ↪ Σ_Obs (§38)</text>
  <text x="536" y="540" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">Non-A1–A4 Axes (Table 8.1, Fig 8.3)</text>

  <rect x="414" y="574" width="244" height="86" fill="#263B54" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="536" y="602" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" font-weight="700" fill="#F0F6FA">4. Calibrated Empirical Crucibles</text>
  <text x="536" y="626" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#87B9B2">χ_PM · ΔP_TV · I(μ:η|B_o) · TBW/PTA</text>
  <text x="536" y="646" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#BFD0DA">Disjoint Auxiliaries (Table 8.4)</text>

  <line x1="350" y1="418" x2="390" y2="418" stroke="#F0F6FA" stroke-width="2.4"/>
  <polygon points="384,412 394,418 384,424" fill="#F0F6FA"/>

  <rect x="58" y="704" width="624" height="250" fill="#16263A" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="370" y="738" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">FRIEDMAN RELATIVIZED A PRIORI TIERING (§1)</text>
  <line x1="88" y1="754" x2="652" y2="754" stroke="#51677B" stroke-width="1"/>
  <text x="90" y="788" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">• Tier (i) Minimal Logic:</text>
  <text x="278" y="788" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Varying-domain S4 + E(x) + Allen closure (background frame).</text>
  <text x="90" y="822" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">• Tier (ii) Constitutive:</text>
  <text x="278" y="822" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Axioms A1–A4 conditioning coherent experience &amp; cut covariance.</text>
  <text x="90" y="856" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">• Tier (iii) Empirical:</text>
  <text x="278" y="856" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Testable predictions (§40) capable of triggering SIT revisions R1–R3.</text>
  <text x="90" y="904" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">Circularity blocked: historical synthesis discovers the candidate constraints;</text>
  <text x="90" y="926" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">semantic Kripke models (§34.5) and disjoint apparatus (§40) test them independently.</text>

  <text x="370" y="998" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" letter-spacing="2" fill="#8B9FAF">FIG. 0.2 · DISCOVERY VS. NON-CIRCULAR JUSTIFICATION (§0.1 &amp; §34.5)</text>
</svg>`
  },
  {
    id: 'fig-1a-1',
    figureNumber: 'Figure 1a.1',
    anchorChapter: 1,
    title: 'Hybrid Modal Indexicals (@_i, ↓x) and Fichte’s Anstoß Horizon Boundary',
    caption:
      'Geometric schematic unifying Perry–Lewis–Shoemaker essential indexicals (“I, here, now”) bound via hybrid operators @_i and ↓o inside situated horizon H_o with Fichte’s external check (Anstoß), halting infinite Archimedean ω-regress against operational cut B_o (§1a).',
    svgMarkup: `<svg viewBox="0 0 740 1046" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hybrid Modal Indexicals and Fichte Anstoß Diagram">
  <rect x="0" y="0" width="740" height="1046" fill="#08182E"/>
  <rect x="28" y="28" width="684" height="990" fill="none" stroke="#51677B" stroke-width="1.3"/>

  <text x="370" y="70" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" letter-spacing="3" fill="#87B9B2">CHAPTER 1 · DE SE INDEXICALITY &amp; ANSTOß (§1a)</text>
  <text x="370" y="108" text-anchor="middle" font-family="Georgia,serif" font-size="22" font-weight="700" fill="#F0F6FA">HYBRID NOMINALS &amp; FICHTE’S ANSTOß</text>
  <line x1="90" y1="128" x2="650" y2="128" stroke="#48827E" stroke-width="1.4"/>

  <rect x="58" y="158" width="624" height="362" fill="#0B203B" stroke="#87B9B2" stroke-width="1.7"/>
  <text x="370" y="190" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">1. VARYING-DOMAIN HYBRID S4 BINDER OVER PERSPECTIVAL HORIZON H_o</text>

  <ellipse cx="268" cy="346" rx="176" ry="122" fill="#16263A" stroke="#87B9B2" stroke-width="2" stroke-dasharray="6 4"/>
  <circle cx="268" cy="346" r="68" fill="#263B54" stroke="#E5EFF5" stroke-width="1.8"/>
  <circle cx="268" cy="346" r="8" fill="#F0F6FA"/>
  <text x="268" y="326" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">↓o (@_i)</text>
  <text x="268" y="376" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">I · Here · Now</text>
  <text x="268" y="446" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">Horizon H_o (w_i = V_Nom(i))</text>

  <rect x="478" y="238" width="176" height="218" fill="#16263A" stroke="#48827E" stroke-width="1.6"/>
  <text x="566" y="268" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-weight="700" fill="#F0F6FA">EXT_o · ANSTOß</text>
  <text x="566" y="296" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Fichte Check (1794)</text>
  <text x="566" y="328" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">o ∈ D(w_i) ≠ D(w_j)</text>
  <text x="566" y="362" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">Co-constitutes</text>
  <text x="566" y="382" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">Boundary Cut B_o</text>
  <text x="566" y="422" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#87B9B2">Blocks Pure Ich = Ich</text>

  <line x1="444" y1="346" x2="478" y2="346" stroke="#F0F6FA" stroke-width="2.4"/>
  <line x1="444" y1="322" x2="444" y2="370" stroke="#48827E" stroke-width="3"/>

  <rect x="58" y="548" width="624" height="236" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.6"/>
  <text x="370" y="582" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">2. HALTING UNBOUNDED ARCHIMEDEAN ω-REGRESS (o₀ ≺ o₁ ≺ …)</text>
  <line x1="88" y1="598" x2="652" y2="598" stroke="#51677B" stroke-width="1"/>

  <rect x="92" y="624" width="124" height="58" fill="#16263A" stroke="#E5EFF5" stroke-width="1.4"/>
  <text x="154" y="658" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">Posited o₀</text>
  <line x1="216" y1="653" x2="256" y2="653" stroke="#87B9B2" stroke-width="1.8"/>
  <rect x="256" y="624" width="124" height="58" fill="#16263A" stroke="#E5EFF5" stroke-width="1.4"/>
  <text x="318" y="658" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">Positing o₁</text>
  <line x1="380" y1="653" x2="420" y2="653" stroke="#87B9B2" stroke-width="1.8"/>
  <rect x="420" y="624" width="124" height="58" fill="#263B54" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="482" y="658" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">Border B_o (A3)</text>
  <text x="614" y="658" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" fill="#87B9B2">⊥ No ω-∞</text>
  <line x1="544" y1="653" x2="572" y2="653" stroke="#48827E" stroke-width="2.6"/>

  <text x="370" y="720" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" fill="#E5EFF5">Perry (1979) · Lewis (1979) de se + Shoemaker (1968) Immunity to Misidentification:</text>
  <text x="370" y="750" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">↓o ( @_i [ Situated(o, H_o) ∧ Anstoß(Ext_o, B_o) ] )  ⊢  ¬ReducibleTo3rdPerson</text>

  <rect x="58" y="810" width="624" height="144" fill="#16263A" stroke="#48827E" stroke-width="1.5"/>
  <text x="370" y="842" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">MODAL SYNTAX GUARD AGAINST BARCAN COLLAPSE (APPENDIX E)</text>
  <text x="92" y="876" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">• Actualist E(o):</text>
  <text x="236" y="876" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Quantifiers range over world domain D(w), allowing D(w₀) = ∅.</text>
  <text x="92" y="908" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">• Non-Rigid =_w:</text>
  <text x="236" y="908" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Composite observers persist via world-indexed equivalence without S5 rigid necessity.</text>

  <text x="370" y="998" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" letter-spacing="2" fill="#8B9FAF">FIG. 1a.1 · ESSENTIAL INDEXICALS &amp; FICHTE ANSTOß LIMIT (§1a)</text>
</svg>`
  },
  {
    id: 'fig-4-2',
    figureNumber: 'Figure 4.2',
    anchorChapter: 4,
    title: 'Fourfold Quantum Measurement-Cut Taxonomy Mapped to Table 4.0 & Axiom A3',
    caption:
      'Comparative structural diagram contrasting Bohr’s epistemic–pragmatic setup cut (§16), von Neumann’s Hilbert Process I/II partition (§17), Heisenberg’s movable cut (Eq. 4.1 covariance), and Rovelli’s bipartite relational interaction cut (§21) under Axiom A3.',
    svgMarkup: `<svg viewBox="0 0 740 1046" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fourfold Quantum Measurement Cut Taxonomy Diagram">
  <rect x="0" y="0" width="740" height="1046" fill="#08182E"/>
  <rect x="28" y="28" width="684" height="990" fill="none" stroke="#51677B" stroke-width="1.3"/>

  <text x="370" y="70" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" letter-spacing="3" fill="#87B9B2">CHAPTER 4 · TABLE 4.0 CUT TAXONOMY (§§16–21)</text>
  <text x="370" y="108" text-anchor="middle" font-family="Georgia,serif" font-size="22" font-weight="700" fill="#F0F6FA">FOURFOLD QUANTUM CUT ARCHITECTURE</text>
  <line x1="90" y1="128" x2="650" y2="128" stroke="#48827E" stroke-width="1.4"/>

  <rect x="58" y="160" width="624" height="156" fill="#0B203B" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="86" y="192" text-anchor="start" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">I. BOHR EPISTEMIC–PRAGMATIC CUT (§16)</text>
  <rect x="86" y="212" width="220" height="72" fill="#16263A" stroke="#E5EFF5" stroke-width="1.4"/>
  <text x="196" y="244" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">Quantum Object [Ext_o]</text>
  <text x="196" y="266" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="11" fill="#BFD0DA">Non-disturbance indivisibility</text>
  <line x1="336" y1="208" x2="336" y2="288" stroke="#48827E" stroke-width="3"/>
  <rect x="366" y="212" width="286" height="72" fill="#263B54" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="509" y="244" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">Classical Frame [Inside_o / A1]</text>
  <text x="509" y="266" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="11" fill="#E5EFF5">Condition for unambiguous predicates</text>

  <rect x="58" y="336" width="624" height="156" fill="#0B203B" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="86" y="368" text-anchor="start" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">II. VON NEUMANN PROCESS I / II PARTITION (§17)</text>
  <rect x="86" y="388" width="276" height="72" fill="#16263A" stroke="#E5EFF5" stroke-width="1.4"/>
  <text x="224" y="420" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">H_S ⊗ H_A · Unitary Process 2</text>
  <text x="224" y="442" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="11" fill="#BFD0DA">Continuous deterministic propagation</text>
  <line x1="392" y1="384" x2="392" y2="464" stroke="#87B9B2" stroke-width="3"/>
  <rect x="422" y="388" width="230" height="72" fill="#263B54" stroke="#E5EFF5" stroke-width="1.6"/>
  <text x="537" y="420" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">H_O · Lüders Process 1</text>
  <text x="537" y="442" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="11" fill="#E5EFF5">Discrete Boolean algebra Σ_o</text>

  <rect x="58" y="512" width="624" height="156" fill="#0B203B" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="86" y="544" text-anchor="start" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">III. HEISENBERG MOVABLE CUT &amp; EQ. (4.1) COVARIANCE (§17)</text>
  <line x1="116" y1="600" x2="624" y2="600" stroke="#8B9FAF" stroke-width="2"/>
  <circle cx="242" cy="600" r="9" fill="#16263A" stroke="#E5EFF5" stroke-width="2"/>
  <text x="242" y="582" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#BFD0DA">Cut c₁</text>
  <line x1="258" y1="600" x2="404" y2="600" stroke="#87B9B2" stroke-width="2.4" stroke-dasharray="5 3"/>
  <circle cx="420" cy="600" r="9" fill="#263B54" stroke="#87B9B2" stroke-width="2"/>
  <text x="420" y="582" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">Cut c₂</text>
  <circle cx="576" cy="600" r="9" fill="#263B54" stroke="#F0F6FA" stroke-width="2"/>
  <text x="576" y="582" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#F0F6FA">∃c_end (A3)</text>
  <text x="370" y="644" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#E5EFF5">P(x | c₁) = P(x | c₂)  [Covariant Marginals; Halted at Bounded Register N]</text>

  <rect x="58" y="688" width="624" height="156" fill="#0B203B" stroke="#48827E" stroke-width="1.7"/>
  <text x="86" y="720" text-anchor="start" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">IV. ROVELLI RELATIONAL INTERACTION CUT (§21 &amp; §35)</text>
  <circle cx="196" cy="780" r="34" fill="#16263A" stroke="#E5EFF5" stroke-width="1.6"/>
  <text x="196" y="784" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">S₁ (O₁)</text>
  <line x1="230" y1="780" x2="478" y2="780" stroke="#87B9B2" stroke-width="2.2"/>
  <rect x="290" y="752" width="128" height="56" fill="#263B54" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="354" y="776" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#F0F6FA">Type I Collar N</text>
  <text x="354" y="796" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#87B9B2">Lemma 35.1 (A3)</text>
  <circle cx="512" cy="780" r="34" fill="#16263A" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="512" y="784" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#F0F6FA">S₂ (O₂)</text>

  <rect x="58" y="868" width="624" height="86" fill="#16263A" stroke="#51677B" stroke-width="1.4"/>
  <text x="370" y="900" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" fill="#F0F6FA">Unified Synthesis: Cut-shift covariance holds precisely when Doplicher–Longo–Buchholz</text>
  <text x="370" y="926" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">proper split M(O₁) ⊊ N ⊊ M(O₂)′ secures a discrete non-trivial Boolean record algebra Σ_o.</text>

  <text x="370" y="998" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" letter-spacing="2" fill="#8B9FAF">FIG. 4.2 · QUANTUM MEASUREMENT-CUT TAXONOMY (TABLE 4.0, §§16–21)</text>
</svg>`
  },
  {
    id: 'fig-8-3',
    figureNumber: 'Figure 8.3',
    anchorChapter: 8,
    title: 'Three Independent Non-A1–A4 Clustering Axes Auditing the 32-Position Matrix',
    caption:
      'Orthogonal classification grid mapping all 32 historical observer-frameworks along (i) primary textual genre, (ii) historical epoch (1781–2023), and (iii) native formal/empirical apparatus independently of Axioms A1–A4, proving non-circular convergence into Σ_Obs (§38 & Table 8.1).',
    svgMarkup: `<svg viewBox="0 0 740 1046" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three Independent Non-A1-A4 Clustering Axes Diagram">
  <rect x="0" y="0" width="740" height="1046" fill="#08182E"/>
  <rect x="28" y="28" width="684" height="990" fill="none" stroke="#51677B" stroke-width="1.3"/>

  <text x="370" y="70" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" letter-spacing="3" fill="#87B9B2">CHAPTER 8 · NON-CIRCULAR TAXONOMIC AXES (§38)</text>
  <text x="370" y="108" text-anchor="middle" font-family="Georgia,serif" font-size="22" font-weight="700" fill="#F0F6FA">THREE NON-A1–A4 CLUSTERING AXES</text>
  <line x1="90" y1="128" x2="650" y2="128" stroke="#48827E" stroke-width="1.4"/>

  <rect x="58" y="160" width="624" height="114" fill="#0B203B" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="86" y="192" text-anchor="start" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">AXIS 1 · PRIMARY TEXTUAL METHODOLOGY / GENRE</text>
  <text x="86" y="220" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Transcendental Critique (§§2–9)  |  Genealogical Deconstruction (§§10–15a)</text>
  <text x="86" y="246" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#87B9B2">Operator/Relational Physics (§§16–27)  |  Cybernetic/Enactive Biology (§§28–33)</text>

  <rect x="58" y="294" width="624" height="114" fill="#0B203B" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="86" y="326" text-anchor="start" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">AXIS 2 · HISTORICAL EPOCH &amp; CITATION LINEAGE</text>
  <text x="86" y="354" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#E5EFF5">1781–1945 (Kant–Husserl–Merleau-Ponty)   |   1960–1997 (Derrida–Foucault–Marion)</text>
  <text x="86" y="380" text-anchor="start" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">1927–2023 (Bohr–von Neumann–Rovelli)      |   1957–2013 (Foerster–Maturana–Friston)</text>

  <rect x="58" y="428" width="624" height="114" fill="#0B203B" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="86" y="460" text-anchor="start" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">AXIS 3 · NATIVE FORMAL / EMPIRICAL APPARATUS</text>
  <text x="86" y="488" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Epoché / Bernau Diagrams  |  Signifier Bar &amp; Panopticon Geometry</text>
  <text x="86" y="514" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#87B9B2">Hilbert Factor Cuts &amp; LF Photons  |  Eigenbehavior Fixed Points &amp; Markov Graphs</text>

  <rect x="58" y="570" width="624" height="384" fill="#16263A" stroke="#48827E" stroke-width="1.7"/>
  <text x="370" y="604" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="700" fill="#F0F6FA">NON-CIRCULAR CONVERGENCE ONTO Σ_Obs (TABLE 8.1 AUDIT)</text>
  <line x1="88" y1="620" x2="652" y2="620" stroke="#51677B" stroke-width="1"/>

  <rect x="92" y="644" width="256" height="62" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.4"/>
  <text x="220" y="672" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" font-weight="700" fill="#F0F6FA">Phenomenology (8 positions)</text>
  <text x="220" y="692" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#87B9B2">6 ✓ Full · Henry A4a · Levinas Excl_Eth</text>

  <rect x="392" y="644" width="256" height="62" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.4"/>
  <text x="520" y="672" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" font-weight="700" fill="#F0F6FA">Post-Structuralism (6 + §15a)</text>
  <text x="520" y="692" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#87B9B2">5 Role(Obs) Converge · Marion Excl_Sat</text>

  <rect x="92" y="726" width="256" height="62" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.4"/>
  <text x="220" y="754" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" font-weight="700" fill="#F0F6FA">Orthodox Quantum (5 positions)</text>
  <text x="220" y="774" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#87B9B2">Bohr · vN · Wigner · Everett · Wheeler</text>

  <rect x="392" y="726" width="256" height="62" fill="#0B203B" stroke="#8B9FAF" stroke-width="1.4"/>
  <text x="520" y="754" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" font-weight="700" fill="#F0F6FA">Relational Quantum (7 positions)</text>
  <text x="520" y="774" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#87B9B2">RQM · QBism · FOH · RBW (M_~A4)</text>

  <rect x="212" y="808" width="316" height="62" fill="#263B54" stroke="#E5EFF5" stroke-width="1.6"/>
  <text x="370" y="836" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="13" font-weight="700" fill="#F0F6FA">Systems Biology &amp; Cognitive Science (6 pos.)</text>
  <text x="370" y="856" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#87B9B2">6 ✓ Across Eigenbehavior · Blanket · PSM</text>

  <text x="370" y="906" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Because Axes 1–3 partition thinkers independently of {A1–A4}, shared projection onto Σ_Obs</text>
  <text x="370" y="928" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">is an empirical-structural invariant across traditions rather than circular clustering.</text>

  <text x="370" y="998" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" letter-spacing="2" fill="#8B9FAF">FIG. 8.3 · THREE NON-A1–A4 CLUSTERING AXES (§38 &amp; TABLE 8.1)</text>
</svg>`
  },
  {
    id: 'fig-9-3',
    figureNumber: 'Figure 9.3',
    anchorChapter: 9,
    title: 'Five-Discipline Transformation Architecture Closing the Observer Monograph',
    caption:
      'Concluding synthesis blueprint summarizing how Axioms A1–A4 and faithful SIT functors transform Phenomenology, Post-Structuralism, Quantum Foundations, Systems Biology/Cognitive Science, and Philosophy of Science while marking scope boundaries Excl_Eth and Excl_Sat (§43).',
    svgMarkup: `<svg viewBox="0 0 740 1046" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five-Discipline Transformation Architecture Diagram">
  <rect x="0" y="0" width="740" height="1046" fill="#08182E"/>
  <rect x="28" y="28" width="684" height="990" fill="none" stroke="#51677B" stroke-width="1.3"/>

  <text x="370" y="70" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" letter-spacing="3" fill="#87B9B2">CHAPTER 9 · FIVE-DISCIPLINE TRANSFORMATIONS (§43)</text>
  <text x="370" y="108" text-anchor="middle" font-family="Georgia,serif" font-size="22" font-weight="700" fill="#F0F6FA">DISCIPLINARY OUTCOMES OF SIT &amp; A1–A4</text>
  <line x1="90" y1="128" x2="650" y2="128" stroke="#48827E" stroke-width="1.4"/>

  <rect x="58" y="158" width="624" height="132" fill="#0B203B" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="86" y="188" text-anchor="start" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">I. PHENOMENOLOGY · FORMAL SOUNDNESS &amp; TIME RECONSTRUCTION</text>
  <text x="86" y="216" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">• Hybrid varying-domain S4 semantics ⟨W, R, D(w), E⟩ blocking BF/CBF (Prop. E.1)</text>
  <text x="86" y="242" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">• Closed 13-relation Allen rational reconstruction of Husserl Bernau living present</text>
  <text x="86" y="268" text-anchor="start" font-family="ui-monospace,monospace" font-size="11" fill="#87B9B2">Gains empirical binding &amp; TOJ bounds (TBW 100–3000 ms vs. τ_min 20–100 ms)</text>

  <rect x="58" y="308" width="624" height="132" fill="#0B203B" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="86" y="338" text-anchor="start" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">II. POST-STRUCTURALISM · NON-CIRCULAR SCOPE BOUNDARIES</text>
  <text x="86" y="366" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">• Bridge §15a separates Role(Obs) anti-presence constraints (Derrida–Foucault–Lacan)</text>
  <text x="86" y="392" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">• Preserves Levinas ethical overflow (Excl_Eth) &amp; Marion capacity excess (Excl_Sat)</text>
  <text x="86" y="418" text-anchor="start" font-family="ui-monospace,monospace" font-size="11" fill="#87B9B2">Prevents assimilating ethical or saturated anomalies into flat epistemic parity</text>

  <rect x="58" y="458" width="624" height="132" fill="#0B203B" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="86" y="488" text-anchor="start" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">III. QUANTUM FOUNDATIONS · NO-GO WITNESS &amp; SPLIT CUTS</text>
  <text x="86" y="516" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">• No-Go Theorem 5.1 proves P(r=m) ≥ 2F−1 and V_coh ≤ 2√(F(1−F)) across cuts</text>
  <text x="86" y="542" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">• Lemma 35.1 anchors Boolean records Σ_o inside Doplicher–Longo–Buchholz Type I N</text>
  <text x="86" y="568" text-anchor="start" font-family="ui-monospace,monospace" font-size="11" fill="#87B9B2">Distinguishes bare RQM links from dissipative irreversible IGUS observers (A3+A4)</text>

  <rect x="58" y="608" width="624" height="132" fill="#0B203B" stroke="#87B9B2" stroke-width="1.6"/>
  <text x="86" y="638" text-anchor="start" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">IV. SYSTEMS &amp; COGNITIVE SCIENCE · TOPOLOGICAL DEMARCATION</text>
  <text x="86" y="666" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">• Separates 1972 autopoietic production from 2013 Friston blankets (μ ⊥ η | B_o)</text>
  <text x="86" y="692" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">• Explains phenomenal transparency (Metzinger) as structural signature of A3 blind spot</text>
  <text x="86" y="718" text-anchor="start" font-family="ui-monospace,monospace" font-size="11" fill="#87B9B2">Tests spatial collar decay I(μ:η|B_o) cleanly apart from FOH negentropy τ_coh</text>

  <rect x="58" y="758" width="624" height="196" fill="#16263A" stroke="#48827E" stroke-width="1.8"/>
  <text x="86" y="788" text-anchor="start" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">V. PHILOSOPHY OF SCIENCE · RELATIVIZED A PRIORI VERIFICATION</text>
  <text x="86" y="818" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">• Main-text Theorem 7.0 Kripke countermodels (M_~A1..M_~A4) prove exact 4-axiom minimality</text>
  <text x="86" y="844" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">• Appendix D shallow Lean 4 embedding + Gentzen/Fitch trees establish full auditability</text>
  <text x="86" y="870" text-anchor="start" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">• Faithful functors Phen, Quant, Sys ↪ Σ_Obs defeat reductionism &amp; Duhem–Quine holism</text>
  <text x="370" y="924" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">Obs(o) ≡ Situated Horizon H_o (A1) + Parity (A2) + Split Collar B_o (A3) + Thick Now I_now (A4)</text>

  <text x="370" y="998" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" letter-spacing="2" fill="#8B9FAF">FIG. 9.3 · FIVE-DISCIPLINE VERDICT &amp; RESEARCH PROGRAM (§43)</text>
</svg>`
  }
];
