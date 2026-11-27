/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Restrained Museum-Editorial Pure Vector Figures for Paper 15 (Synthese Journal):
 * "Where or Who Is the Observer?"
 *
 * Strictly restrained tonal discipline: Warm Ecru grounds (#FAF6EC, #F4EFE6),
 * Taupe hairlines (#CBBBA0), Archival Charcoal/Teal ink (#161A1D, #11505C), and Muted Deep Plum (#4A0E33) —
 * at most six quiet tonal values across every illustration for dignified academic presentation.
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
    id: 'fig-0-1-observer-bundle-architecture',
    figureNumber: 'Figure 0.1',
    anchorChapter: 0,
    title: 'Dialectical Map · Convergence of Philosophy, Quantum Foundations, and Systems Theory',
    caption:
      'Structural convergence linking Phenomenology & Deconstruction (§§2–15a) with Quantum Foundations (§§16–27) and Systems Theory (§§28–33) onto four shared logical conditions: Perspectival Immanence (A1), Egalitarian Frame Parity (A2), Operational Demarcation Cut (A3), and Asymmetric Self-Relation (A4).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280">
  <rect x="0" y="0" width="760" height="280" fill="#FAF6EC" />
  <rect x="14" y="14" width="732" height="252" fill="#FAF6EC" stroke="#CBBBA0" stroke-width="1" />
  <text x="380" y="38" text-anchor="middle" font-family="DejaVu Serif, Georgia, serif" font-size="12.5" fill="#161A1D">Logical Convergence Across Phenomenology, Quantum Foundations &amp; Systems Theory</text>
  <line x1="40" y1="48" x2="720" y2="48" stroke="#CBBBA0" stroke-width="0.9" />

  <!-- Column 1: Philosophy & Deconstruction -->
  <rect x="32" y="64" width="212" height="176" fill="#F4EFE6" stroke="#4A0E33" stroke-width="1.1" />
  <text x="138" y="84" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#4A0E33">1. Philosophy (§§2–15a)</text>
  <text x="138" y="102" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9" fill="#4A0E33">Transcendental &amp; Critique</text>
  <line x1="50" y1="112" x2="226" y2="112" stroke="#CBBBA0" stroke-width="0.8" />
  <text x="138" y="132" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#161A1D">Kant: Formal Apperception</text>
  <text x="138" y="152" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#161A1D">Husserl: Thick Living Present</text>
  <text x="138" y="172" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#4A0E33">Henry: Immanent Auto-Affection</text>
  <text x="138" y="192" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#161A1D">Derrida: Negative Trace Proof</text>
  <text x="138" y="220" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="8.5" fill="#4A0E33">Constitutive Yet Unrepresented</text>

  <!-- Column 2: Shared Logical Architecture -->
  <rect x="274" y="64" width="212" height="176" fill="#FAF6EC" stroke="#11505C" stroke-width="1.4" />
  <text x="380" y="84" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#11505C">2. Four Shared Axioms (§§34–37)</text>
  <text x="380" y="102" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9" fill="#161A1D">Varying-Domain S4 Skeleton</text>
  <line x1="292" y1="112" x2="468" y2="112" stroke="#CBBBA0" stroke-width="0.8" />
  <text x="380" y="132" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#161A1D">A1: Perspectival Immanence</text>
  <text x="380" y="152" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#161A1D">A2: Egalitarian Frame Parity</text>
  <text x="380" y="172" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#11505C">A3: Operational Boundary Cut</text>
  <text x="380" y="192" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#4A0E33">A4: Asymmetric Self-Relation</text>
  <text x="380" y="220" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="8.5" fill="#11505C">Functorial Identity SIT (§38)</text>

  <!-- Column 3: Quantum & Systems -->
  <rect x="516" y="64" width="212" height="176" fill="#F4EFE6" stroke="#11505C" stroke-width="1.1" />
  <text x="622" y="84" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#11505C">3. Physics &amp; Systems (§§16–33)</text>
  <text x="622" y="102" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9" fill="#161A1D">Relativity &amp; Operational Closure</text>
  <line x1="534" y1="112" x2="710" y2="112" stroke="#CBBBA0" stroke-width="0.8" />
  <text x="622" y="132" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#161A1D">Bohr / Von Neumann Cut</text>
  <text x="622" y="152" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#161A1D">Rovelli RQM &amp; QBism Agent</text>
  <text x="622" y="172" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#11505C">Autopoiesis &amp; Luhmann Mark</text>
  <text x="622" y="192" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#4A0E33">Metzinger &amp; First Observer</text>
  <text x="622" y="220" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="8.5" fill="#11505C">Perspectival Objectivity</text>

  <path d="M 244 152 L 270 152" stroke="#4A0E33" stroke-width="1.3" />
  <polygon points="274,152 266,148 266,156" fill="#4A0E33" />
  <path d="M 516 152 L 490 152" stroke="#11505C" stroke-width="1.3" />
  <polygon points="486,152 494,148 494,156" fill="#11505C" />
  <text x="380" y="258" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="9" fill="#161A1D">Figure 0.1 · Philosophical Equivalence Across 32 Observer Positions Around Four Shared Axioms</text>
</svg>`
  },
  {
    id: 'fig-2-1-phenomenology-genealogy',
    figureNumber: 'Figure 2.1',
    anchorChapter: 2,
    title: 'Phenomenological Progression (§§2–9): From Empty Formal Apperception to Ethical Limit',
    caption:
      'Dialectical sequence in Part II: resolving the emptiness of Kant’s formal “I think” into thick temporality, intersubjectivity, embodied chiasmic écart, immanent auto-affection, and Levinas’s irreducible ethical overflow.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280">
  <rect x="0" y="0" width="760" height="280" fill="#FAF6EC" />
  <rect x="16" y="14" width="728" height="252" fill="#F4EFE6" stroke="#CBBBA0" stroke-width="1" />
  <text x="380" y="36" text-anchor="middle" font-family="DejaVu Serif, Georgia, serif" font-size="12.5" fill="#161A1D">Part II Trajectory: Thickening Transcendental Subjectivity Without Reifying It</text>

  <rect x="86" y="54" width="590" height="164" fill="#FAF6EC" stroke="#11505C" stroke-width="1" />
  <line x1="86" y1="136" x2="676" y2="136" stroke="#CBBBA0" stroke-dasharray="4,3" />
  <line x1="381" y1="54" x2="381" y2="218" stroke="#CBBBA0" stroke-dasharray="4,3" />

  <path d="M 118 192 L 200 174 L 290 148 L 381 128 L 468 112 L 548 92 L 635 76" fill="none" stroke="#4A0E33" stroke-width="1.8" />

  <circle cx="118" cy="192" r="4.5" fill="#11505C" />
  <text x="122" y="207" text-anchor="start" font-family="DejaVu Sans Mono, monospace" font-size="8.5" fill="#161A1D">§2 Kant (Formal Condition)</text>

  <circle cx="290" cy="148" r="4.5" fill="#11505C" />
  <text x="275" y="166" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="8.5" fill="#11505C">§4–5 Late Husserl (Monads)</text>

  <circle cx="381" cy="128" r="4.5" fill="#11505C" />
  <text x="394" y="122" text-anchor="start" font-family="DejaVu Sans Mono, monospace" font-size="8.5" fill="#161A1D">§6 Heidegger (Dasein)</text>

  <circle cx="468" cy="112" r="4.5" fill="#4A0E33" />
  <text x="480" y="106" text-anchor="start" font-family="DejaVu Sans Mono, monospace" font-size="8.5" fill="#4A0E33">§7 Merleau-Ponty (Écart)</text>

  <circle cx="548" cy="92" r="4.5" fill="#4A0E33" />
  <text x="530" y="84" text-anchor="end" font-family="DejaVu Sans Mono, monospace" font-size="8.5" fill="#4A0E33">§8 Henry (Auto-Affection)</text>

  <circle cx="635" cy="76" r="4.5" fill="#4A0E33" />
  <text x="635" y="67" text-anchor="end" font-family="DejaVu Sans Mono, monospace" font-size="8.5" fill="#161A1D">§9 Levinas (Ethical Limit)</text>

  <text x="380" y="242" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="9.5" fill="#11505C">Dialectical Progression Toward Embodied, Temporal &amp; Ethical Concretion →</text>
  <text x="380" y="258" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="9" fill="#161A1D">Figure 2.1 · Each Phenomenological Revision Resolves One Aporia While Isolating A1–A4</text>
</svg>`
  },
  {
    id: 'fig-4-1-quantum-cut-map',
    figureNumber: 'Figure 5.1',
    anchorChapter: 5,
    title: 'Twelve Quantum Observer Models Mapped by Cut Mobility (y) & Relational Parity (x)',
    caption:
      'Quantitative conceptual map of §§16–27 across Parts IV–V: x-axis measures Relational Parity [0.00–1.00]; y-axis measures Cut Mobility [0.00–1.00]. Everett (§19) sits explicitly at (x = 0.78, y = 0.88), where the cut ceases to be a collapse jump and relocates dynamically as an intra-branch decoherence partition (§23).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280">
  <rect x="0" y="0" width="760" height="280" fill="#FAF6EC" />
  <rect x="16" y="14" width="728" height="252" fill="#F4EFE6" stroke="#CBBBA0" stroke-width="1" />
  <text x="380" y="36" text-anchor="middle" font-family="DejaVu Serif, Georgia, serif" font-size="12.5" fill="#161A1D">Quantum Foundations Space (§§16–27): Cut Mobility vs. Relational Parity</text>

  <rect x="64" y="52" width="632" height="168" fill="#FAF6EC" stroke="#11505C" stroke-width="1" />
  <line x1="380" y1="52" x2="380" y2="220" stroke="#CBBBA0" stroke-dasharray="4,3" />
  <line x1="64" y1="136" x2="696" y2="136" stroke="#CBBBA0" stroke-dasharray="4,3" />

  <text x="76" y="68" text-anchor="start" font-family="DejaVu Sans, sans-serif" font-size="9" fill="#4A0E33">Contextual Fixed Cut (Low Parity) · y: Mobility 0.0–1.0</text>
  <text x="684" y="68" text-anchor="end" font-family="DejaVu Sans, sans-serif" font-size="9" fill="#11505C">High Parity &amp; Movable Decoherence Cut</text>

  <circle cx="127" cy="109" r="4.5" fill="#4A0E33" />
  <text x="135" y="113" font-family="DejaVu Sans Mono, monospace" font-size="8.2" fill="#4A0E33">§16 Bohr (0.10, 0.66)</text>

  <circle cx="190" cy="99" r="4.5" fill="#4A0E33" />
  <text x="198" y="96" font-family="DejaVu Sans Mono, monospace" font-size="8.2" fill="#4A0E33">§17 Von Neumann (0.20, 0.72)</text>

  <circle cx="247" cy="134" r="4.5" fill="#4A0E33" />
  <text x="256" y="137" font-family="DejaVu Sans Mono, monospace" font-size="8.2" fill="#4A0E33">§18 Wigner’s Friend (0.29, 0.51)</text>

  <circle cx="266" cy="178" r="4.5" fill="#11505C" />
  <text x="256" y="181" text-anchor="end" font-family="DejaVu Sans Mono, monospace" font-size="8.2" fill="#161A1D">§23 Zurek (0.32, 0.25)</text>

  <circle cx="329" cy="170" r="4.5" fill="#11505C" />
  <text x="329" y="159" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="8.2" fill="#161A1D">§24 Histories (0.42, 0.30)</text>

  <circle cx="418" cy="173" r="4.5" fill="#4A0E33" />
  <text x="426" y="176" text-anchor="start" font-family="DejaVu Sans Mono, monospace" font-size="8.2" fill="#4A0E33">§25 Cramer TI (0.56, 0.28)</text>

  <circle cx="481" cy="196" r="4.5" fill="#4A0E33" />
  <text x="481" y="211" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="8.2" fill="#4A0E33">§26 RBW (0.66, 0.14)</text>

  <circle cx="494" cy="102" r="4.5" fill="#4A0E33" />
  <text x="484" y="112" text-anchor="end" font-family="DejaVu Sans Mono, monospace" font-size="8.2" fill="#4A0E33">§20 Wheeler (0.68, 0.70)</text>

  <circle cx="519" cy="94" r="4.5" fill="#4A0E33" />
  <text x="510" y="92" text-anchor="end" font-family="DejaVu Sans Mono, monospace" font-size="8.2" fill="#4A0E33">§22 QBism (0.72, 0.75)</text>

  <circle cx="557" cy="72" r="5" fill="#4A0E33" />
  <text x="547" y="75" text-anchor="end" font-family="DejaVu Sans Mono, monospace" font-size="8.2" fill="#4A0E33">§19 Everett (0.78, 0.88)</text>

  <circle cx="626" cy="118" r="5" fill="#11505C" />
  <text x="616" y="128" text-anchor="end" font-family="DejaVu Sans Mono, monospace" font-size="8.2" fill="#11505C">§21 Rovelli RQM (0.89, 0.61)</text>

  <circle cx="582" cy="186" r="5" fill="#11505C" />
  <text x="590" y="189" text-anchor="start" font-family="DejaVu Sans Mono, monospace" font-size="8.2" fill="#161A1D">§27 FOH (0.82, 0.20)</text>

  <text x="380" y="242" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="9.5" fill="#11505C">x-Axis: Degree of Intersubjective Relational Parity Across Perspectives (0.00 → 1.00)</text>
  <text x="380" y="258" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="9" fill="#161A1D">Figure 5.1 · Philosophical Synthesis Reconciles Cut Mobility Without Privileging Any Observer</text>
</svg>`
  },
  {
    id: 'fig-5-1-split-closure-bridge',
    figureNumber: 'Figure 6.1',
    anchorChapter: 6,
    title: 'Operational Boundary Closure: Inside Perspective vs. Re-Entry Perturbations',
    caption:
      'Logical architecture shared by Luhmann’s distinction-drawing (§29), biological autopoiesis (§30), Metzinger’s transparent self-model (§32), and operational split demarcation (A3): the unmarked exterior registers indirectly inside the boundary via perturbation, noise, and horizon overflow.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 270" width="760" height="270">
  <rect x="0" y="0" width="760" height="270" fill="#FAF6EC" />
  <rect x="16" y="14" width="728" height="242" fill="#F4EFE6" stroke="#CBBBA0" stroke-width="1" />
  <text x="380" y="36" text-anchor="middle" font-family="DejaVu Serif, Georgia, serif" font-size="12.5" fill="#161A1D">Logical Anatomy of Operational Closure: Boundary Cut &amp; Unmarked Exterior Re-Entry</text>

  <rect x="64" y="54" width="632" height="162" fill="#F4EFE6" stroke="#4A0E33" stroke-width="1.1" />
  <text x="80" y="74" font-family="DejaVu Sans Mono, monospace" font-size="9" fill="#4A0E33">Unmarked Exterior Horizon (Known Only Indirectly via Re-Entry Perturbation &amp; Anomaly)</text>

  <rect x="136" y="88" width="488" height="110" fill="#FAF6EC" stroke="#11505C" stroke-width="1.1" stroke-dasharray="5,3" />
  <text x="380" y="106" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9" fill="#11505C">Demarcation Cut B_o / Finite Separation Collar (First-Order Blind Spot)</text>

  <rect x="208" y="118" width="344" height="64" fill="#FAF6EC" stroke="#161A1D" stroke-width="1.4" />
  <text x="380" y="140" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#161A1D">Coherent Interior Observer Horizon (Inside_o)</text>
  <text x="380" y="159" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9" fill="#11505C">Finite Memory · Discernible Distinctions · Re-Entry Traces</text>
  <text x="380" y="174" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="9" fill="#4A0E33">Second-Order Observation Shifts Cut Without Totalizing the Exterior</text>

  <text x="380" y="240" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="9" fill="#161A1D">Figure 6.1 · Situated Finitude Is an Enabling Transcendental Condition of Intelligibility (A3)</text>
</svg>`
  },
  {
    id: 'fig-6-1-modular-living-present',
    figureNumber: 'Figure 7.1',
    anchorChapter: 7,
    title: 'Argument Map & Thick Living Present: Dependencies Among A1–A4, Allen Intervals, and SIT',
    caption:
      'Constructive proof architecture of Part VII (§§34–37): uniting Husserl’s Bernau time diagram (retention–impression–protention), Allen interval relations (|I| > 0), Henry’s asymmetric self-affection, and Derrida’s anti-instantaneity proof.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280">
  <rect x="0" y="0" width="760" height="280" fill="#FAF6EC" />
  <rect x="16" y="14" width="728" height="252" fill="#F4EFE6" stroke="#CBBBA0" stroke-width="1" />
  <text x="380" y="36" text-anchor="middle" font-family="DejaVu Serif, Georgia, serif" font-size="12.5" fill="#161A1D">Part VII Temporal &amp; Logical Synthesis: Stratified Axioms &amp; Thick Interval Window</text>

  <rect x="86" y="54" width="590" height="160" fill="#FAF6EC" stroke="#11505C" stroke-width="1" />
  <line x1="381" y1="54" x2="381" y2="214" stroke="#4A0E33" stroke-width="1.2" stroke-dasharray="4,3" />
  <rect x="275" y="54" width="212" height="160" fill="#F4EFE6" fill-opacity="0.7" />

  <path d="M 86 208 Q 220 202, 275 156 Q 332 76, 381 74 Q 430 76, 487 156 Q 542 202, 676 208" fill="none" stroke="#11505C" stroke-width="2.1" />
  <circle cx="381" cy="74" r="4.5" fill="#4A0E33" />

  <text x="180" y="138" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9" fill="#4A0E33">Retention I_ret (Overlap)</text>
  <text x="381" y="96" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9" fill="#161A1D">Asymmetric Self-Relation (A4)</text>
  <text x="582" y="138" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9" fill="#11505C">Protention I_prot (Meets)</text>
  <text x="381" y="200" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9" fill="#161A1D">Refutation of Zero-Width Point [t, t]: Finite Interval Thickness |I| &gt; 0</text>

  <text x="86" y="232" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9" fill="#161A1D">Past Horizon</text>
  <text x="381" y="232" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9" fill="#4A0E33">Urimpression Center</text>
  <text x="676" y="232" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9" fill="#161A1D">Future Horizon</text>
  <text x="380" y="252" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="9" fill="#11505C">Figure 7.1 · Stratified Dependence A1–A4 Entails Extended Non-Punctual Temporal Synthesis</text>
</svg>`
  },
  {
    id: 'fig-7-1-clock-pta-prediction',
    figureNumber: 'Figure 8.1',
    anchorChapter: 8,
    title: 'Methodological Falsifiability (§40): Axiom-by-Axiom Crucibles & Anti-Holism Tests',
    caption:
      'Epistemological test architecture in Part VIII: illustrating how the meta-theoretical Structural Identity Thesis (SIT) translates A1–A4 into four independent, axiom-specific falsification protocols.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 270" width="760" height="270">
  <rect x="0" y="0" width="760" height="270" fill="#FAF6EC" />
  <rect x="16" y="14" width="728" height="242" fill="#F4EFE6" stroke="#CBBBA0" stroke-width="1" />
  <text x="380" y="36" text-anchor="middle" font-family="DejaVu Serif, Georgia, serif" font-size="12.5" fill="#161A1D">Philosophy of Science Bridge: From Structural Identity (SIT) to Axiom-Specific Falsification</text>

  <rect x="70" y="60" width="180" height="146" fill="#F4EFE6" stroke="#4A0E33" stroke-width="1.1" />
  <text x="160" y="88" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10" fill="#4A0E33">Synthetic Axioms A1–A4</text>
  <line x1="88" y1="98" x2="232" y2="98" stroke="#CBBBA0" stroke-width="0.8" />
  <text x="160" y="122" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="9.5" fill="#161A1D">A1: No Global Fact Test</text>
  <text x="160" y="144" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="9.5" fill="#161A1D">A2: Cross-Frame Covariance</text>
  <text x="160" y="166" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="9.5" fill="#161A1D">A3–A4: Cut &amp; Thick Window</text>

  <rect x="290" y="60" width="180" height="146" fill="#FAF6EC" stroke="#11505C" stroke-width="1.4" />
  <text x="380" y="88" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10" fill="#11505C">Bridge Principles (§39)</text>
  <line x1="308" y1="98" x2="452" y2="98" stroke="#CBBBA0" stroke-width="0.8" />
  <text x="380" y="122" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="9.5" fill="#161A1D">Operational Closure</text>
  <text x="380" y="144" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="9.5" fill="#161A1D">Functorial Bridge (Σ_Obs)</text>
  <text x="380" y="166" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="9.5" fill="#161A1D">Autonomous Regulation</text>

  <rect x="510" y="60" width="180" height="146" fill="#F4EFE6" stroke="#161A1D" stroke-width="1.1" />
  <text x="600" y="88" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10" fill="#161A1D">Empirical Crucibles (§40)</text>
  <line x1="528" y1="98" x2="672" y2="98" stroke="#CBBBA0" stroke-width="0.8" />
  <text x="600" y="122" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="9.5" fill="#161A1D">A1–A2: Local Friendliness</text>
  <text x="600" y="144" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="9.5" fill="#161A1D">A3: FOH Cut Bifurcation</text>
  <text x="600" y="166" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="9.5" fill="#161A1D">A4: Interval &amp; H_phys Clock</text>

  <path d="M 250 133 L 286 133" stroke="#4A0E33" stroke-width="1.3" />
  <polygon points="290,133 282,129 282,137" fill="#4A0E33" />
  <path d="M 470 133 L 506 133" stroke="#11505C" stroke-width="1.3" />
  <polygon points="510,133 502,129 502,137" fill="#11505C" />

  <text x="380" y="242" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="9" fill="#11505C">Figure 8.1 · Independent Axiom-Specific Tests Mitigate Duhem–Quine Underdetermination</text>
</svg>`
  }
];
