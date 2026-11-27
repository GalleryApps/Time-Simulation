/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * 11 Scientific & Philosophical Full-Page A4 Portrait Calligram Schematics for Paper 15 (Synthese Journal)
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
      'A4 structural diagram illustrating four situated human and scientific vantage points—Kant & Husserl’s transcendental horizon, Derrida & Lacan’s split trace, Bohr & Rovelli’s interferometer cut, and Maturana & Varela’s autopoietic loop—projecting onto Axioms A1–A4.',
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
  <text x="217" y="684" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">Local Friendliness Photonic Circuit</text>
  <text x="217" y="714" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">η &gt; 2/3 Closes Fair-Sampling</text>
  <text x="217" y="746" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Refutes Frame-Independent Macro Facts</text>

  <rect x="380" y="618" width="286" height="154" fill="#0B203B" stroke="#48827E" stroke-width="1.6"/>
  <text x="523" y="652" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">CRUCIBLE 2 · A2 PARITY</text>
  <text x="523" y="684" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">Relativistic Boost Cross-Verification</text>
  <text x="523" y="714" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">Test Equiv_inv(o, o′) Symmetries</text>
  <text x="523" y="746" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Refutes Preferred Collapse Foliation</text>

  <rect x="74" y="794" width="286" height="154" fill="#0B203B" stroke="#48827E" stroke-width="1.6"/>
  <text x="217" y="828" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#F0F6FA">CRUCIBLE 3 · A3 / FOH</text>
  <text x="217" y="860" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#BFD0DA">Active Feedback vs. Passive Crystal</text>
  <text x="217" y="890" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="#87B9B2">τ_coh(Active) ≫ τ_coh(Passive)</text>
  <text x="217" y="922" text-anchor="middle" font-family="ui-sans-serif,sans-serif" font-size="12" fill="#E5EFF5">Non-Equilibrium Bifurcation Threshold</text>

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
  }
];
