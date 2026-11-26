/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Pure Vector Conceptual Figures for Paper 15 (Synthese Journal).
 * Styled exclusively in the 40-Shade Ecru, Orange, Dark Magenta, Dark Teal & Pine Green System.
 * Zero binary image imports so Node unit tests & A4 PDF exporters can consume directly.
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
    id: 'fig-0-1-architectural-map',
    figureNumber: 'Figure 0.1',
    anchorChapter: 0,
    title: 'Epistemic Map of Emergent Chronometry: Conventionalism, Morita Parity & Core Divergence',
    caption:
      'Graphical abstract illustrating the three philosophical regimes analyzed in Paper 15: naive scalar throttling (gamma = 0, empirically eliminated), exact Morita exterior equivalence F: Lor_ext <-> InfoGeom_ext, and strong-field horizon bifurcation.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280">
  <rect x="0" y="0" width="760" height="280" fill="#FAF6EC" />
  <rect x="14" y="14" width="732" height="252" fill="#FDFBF7" stroke="#CBBBA0" stroke-width="1.2" />
  <text x="380" y="38" text-anchor="middle" font-family="DejaVu Serif, Georgia, serif" font-size="13" fill="#2E0820">Epistemic Architecture of Bounded Exterior Morita Structuralism</text>
  <line x1="40" y1="48" x2="720" y2="48" stroke="#E2D6C1" stroke-width="1" />

  <!-- Column 1: Eliminated Scalar -->
  <rect x="32" y="64" width="212" height="176" fill="#F9EEF4" stroke="#831B5B" stroke-width="1.2" />
  <text x="138" y="84" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="11" fill="#4A0E33">1. Naive Scalar (γ = 0)</text>
  <text x="138" y="102" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9.5" fill="#C64334">Falsified · ΔlnL = −3.09×10⁹</text>
  <line x1="50" y1="112" x2="226" y2="112" stroke="#C974A6" stroke-width="0.8" />
  <text x="138" y="132" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#062429">Clocks: Matches O(Φ/c²)</text>
  <text x="138" y="152" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#C64334">Lensing: 0.875″ (50% short)</text>
  <text x="138" y="172" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#C64334">Cassini: 50% Shapiro deficit</text>
  <text x="138" y="192" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#9A3412">Fails Reichenbach Rule</text>
  <text x="138" y="220" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9" fill="#661447">Underdetermination Collapse</text>

  <!-- Column 2: Exterior Morita Equivalence -->
  <rect x="274" y="64" width="212" height="176" fill="#EDF5F6" stroke="#11505C" stroke-width="1.4" />
  <text x="380" y="84" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="11" fill="#062429">2. Exterior Morita Class</text>
  <text x="380" y="102" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9.5" fill="#0F3D2B">Lor_ext ⇄ InfoGeom_ext (γ = 1)</text>
  <line x1="292" y1="112" x2="468" y2="112" stroke="#6CB2BD" stroke-width="0.8" />
  <text x="380" y="132" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#0B3942">n_eff = α_upd⁻² (Gordon)</text>
  <text x="380" y="152" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#0F3D2B">Knox Inertial Role Preserved</text>
  <text x="380" y="172" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#1E2D52">BKM Metric Unique (Petz)</text>
  <text x="380" y="192" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#17573E">ΔMDL = −0.07 nats (Tie)</text>
  <text x="380" y="220" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9" fill="#11505C">Invariant Structural Realism</text>

  <!-- Column 3: Strong-Field Split -->
  <rect x="516" y="64" width="212" height="176" fill="#FFF4EB" stroke="#C2410C" stroke-width="1.2" />
  <text x="622" y="84" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="11" fill="#5C1D07">3. Horizon &amp; UV Split</text>
  <text x="622" y="102" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9.5" fill="#EA580C">Crucial Tests · SNR &gt; 3.2</text>
  <line x1="534" y1="112" x2="710" y2="112" stroke="#F08A43" stroke-width="0.8" />
  <text x="622" y="132" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#2E0820">GR: Singularity &amp; Cauchy blow-up</text>
  <text x="622" y="152" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#0F3D2B">IGRT: Regular Hayward Core</text>
  <text x="622" y="172" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#9A3412">Echo Comb Δt ≈ 52 ms (30 M☉)</text>
  <text x="622" y="192" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#11505C">LISA · ngEHT · ²²⁹Th Clocks</text>
  <text x="622" y="220" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9" fill="#9A3412">Empirical Frontier (2026–2035)</text>

  <path d="M 244 152 L 270 152" stroke="#831B5B" stroke-width="1.5" stroke-dasharray="3,2" />
  <path d="M 486 152 L 512 152" stroke="#EA580C" stroke-width="1.8" />
  <text x="380" y="258" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="9" fill="#0B3942">Figure 0.1 · Three-Tier Epistemology: Empirical Refutation (Left) · Morita Structuralism (Center) · Horizon Arbiters (Right)</text>
</svg>`
  },
  {
    id: 'fig-2-1-conventionalism-corridor',
    figureNumber: 'Figure 2.1',
    anchorChapter: 2,
    title: 'Narrowing the Poincaré–Reichenbach Conventional Corridor Under PPN Observables',
    caption:
      'Quantitative breakdown of pure temporal throttling (gamma = 0): solar deflection error vs. PPN gamma shows admissible conventions must satisfy |1 - gamma| < 2.3e-5 (Pine Green corridor).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 290" width="760" height="290">
  <rect x="0" y="0" width="760" height="290" fill="#FDFBF7" />
  <rect x="16" y="14" width="728" height="262" fill="#FAF6EC" stroke="#CBBBA0" stroke-width="1" />
  <text x="380" y="36" text-anchor="middle" font-family="DejaVu Serif, Georgia, serif" font-size="12.5" fill="#2E0820">Solar Grazing Deflection vs. PPN Spatial Parameter γ (Cassini Constraint)</text>

  <!-- Plot axes -->
  <rect x="92" y="54" width="588" height="170" fill="#FFFFFF" stroke="#11505C" stroke-width="1" />
  <line x1="92" y1="139" x2="680" y2="139" stroke="#E2D6C1" stroke-dasharray="4,3" stroke-width="1" />
  <line x1="92" y1="84" x2="680" y2="84" stroke="#E2D6C1" stroke-dasharray="4,3" stroke-width="1" />
  <line x1="92" y1="194" x2="680" y2="194" stroke="#E2D6C1" stroke-dasharray="4,3" stroke-width="1" />

  <!-- Green admissible band around gamma = 1 (x = 582) -->
  <rect x="572" y="54" width="20" height="170" fill="#EEF5F1" stroke="#227252" stroke-width="0.9" stroke-dasharray="2,2" />

  <!-- Curve: theta = 0.87525 * (1 + gamma): at x=92 (gamma=0), y=184 (0.875"); at x=582 (gamma=1), y=84 (1.7505"); at x=680 (gamma=1.2), y=64 -->
  <line x1="92" y1="184" x2="680" y2="64" stroke="#11505C" stroke-width="2.4" />

  <!-- Observed horizontal benchmark -->
  <line x1="92" y1="84" x2="680" y2="84" stroke="#EA580C" stroke-width="1.6" stroke-dasharray="5,3" />
  <circle cx="92" cy="184" r="5" fill="#831B5B" />
  <circle cx="582" cy="84" r="5.5" fill="#0F3D2B" />

  <!-- Labels inside bounds -->
  <text x="108" y="176" text-anchor="start" font-family="DejaVu Sans Mono, monospace" font-size="9.5" fill="#4A0E33">γ = 0 · LUH Scalar: 0.8752″ (Refuted −50%)</text>
  <text x="564" y="76" text-anchor="end" font-family="DejaVu Sans Mono, monospace" font-size="9.5" fill="#0F3D2B">γ = 1 · GR &amp; Dual IGRT (1.7505″)</text>
  <text x="380" y="128" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="9.5" fill="#C2410C">Excluded Universal-Force Gap (Differential Anomaly on Null Cones)</text>

  <!-- Axes ticks -->
  <text x="84" y="187" text-anchor="end" font-family="DejaVu Sans Mono, monospace" font-size="9" fill="#062429">0.88″</text>
  <text x="84" y="142" text-anchor="end" font-family="DejaVu Sans Mono, monospace" font-size="9" fill="#062429">1.31″</text>
  <text x="84" y="87" text-anchor="end" font-family="DejaVu Sans Mono, monospace" font-size="9" fill="#062429">1.75″</text>
  <text x="92" y="242" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9.5" fill="#062429">γ = 0.0</text>
  <text x="337" y="242" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9.5" fill="#062429">γ = 0.5</text>
  <text x="582" y="242" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9.5" fill="#0F3D2B">γ = 1.0 (Cassini)</text>
  <text x="680" y="242" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9.5" fill="#062429">1.2</text>
  <text x="386" y="264" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="9.5" fill="#0B3942">PPN Parameter γ (Spatial Curvature Response per Unit Potential)</text>
</svg>`
  },
  {
    id: 'fig-4-1-morita-diagram',
    figureNumber: 'Figure 4.1',
    anchorChapter: 4,
    title: 'Commutative Morita Equivalence Functor Between Lorentzian and Information-Geometric Categories',
    caption:
      'Categorically, exterior diffeomorphisms Diff(M_ext) commute with sufficient-statistic Markov pullbacks via the Chentsov-BKM bridge, whereas strong-field horizon extensions break functorial surjectivity.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 270" width="760" height="270">
  <rect x="0" y="0" width="760" height="270" fill="#FDFBF7" />
  <rect x="16" y="14" width="728" height="242" fill="#FAF6EC" stroke="#CBBBA0" stroke-width="1" />
  <text x="380" y="38" text-anchor="middle" font-family="DejaVu Serif, Georgia, serif" font-size="12.5" fill="#2E0820">Categorical Translation: Morita Bridge F : Lor_ext ⇄ InfoGeom_ext</text>

  <!-- Left Category Box -->
  <rect x="44" y="64" width="232" height="148" fill="#EDF5F6" stroke="#11505C" stroke-width="1.4" />
  <text x="160" y="86" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="11" fill="#062429">Category Lor_ext</text>
  <text x="160" y="110" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9.5" fill="#11505C">(M_ext, g_μν, T_μν)</text>
  <text x="160" y="136" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#0B3942">Morphisms: φ ∈ Diff_+(M_ext)</text>
  <text x="160" y="162" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#0B3942">Connection: ∇^LC (Levi-Civita)</text>
  <text x="160" y="188" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#17573E">Gauge: ADM Dirac Bracket</text>

  <!-- Right Category Box -->
  <rect x="484" y="64" width="232" height="148" fill="#F9EEF4" stroke="#661447" stroke-width="1.4" />
  <text x="600" y="86" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="11" fill="#2E0820">Category InfoGeom_ext</text>
  <text x="600" y="110" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9.5" fill="#831B5B">(S_ext, ρ_θ, g^BKM, α_upd)</text>
  <text x="600" y="136" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#4A0E33">Morphisms: Sufficient Markov κ</text>
  <text x="600" y="162" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#4A0E33">Dual: ½(∇^(+1) + ∇^(−1)) = ∇^LC</text>
  <text x="600" y="188" text-anchor="middle" font-family="DejaVu Serif, serif" font-size="10" fill="#17573E">Gauge: KMS Modular Flow</text>

  <!-- Functors -->
  <path d="M 284 114 L 476 114" stroke="#EA580C" stroke-width="2" />
  <polygon points="476,114 468,109 468,119" fill="#EA580C" />
  <text x="380" y="104" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="10" fill="#9A3412">Functor F (Chentsov-BKM)</text>

  <path d="M 476 154 L 284 154" stroke="#227252" stroke-width="2" />
  <polygon points="284,154 292,149 292,159" fill="#227252" />
  <text x="380" y="174" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="10" fill="#0F3D2B">Inverse G (Gordon Dual Metric)</text>

  <text x="380" y="236" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="9.5" fill="#C2410C">Invariant Preserved for r &gt; r_s: dτ, n_eff = α_upd⁻², Dirac {H, H_i}, Knox Inertial Frames</text>
</svg>`
  },
  {
    id: 'fig-5-1-petz-uniqueness',
    figureNumber: 'Figure 5.1',
    anchorChapter: 5,
    title: 'Petz Monotone Metric Family & Unique KMS Kubo–Mori–Bogoliubov Coupling',
    caption:
      'Within Petz’s operator-monotone classification g^(f), pure-state clock metrology allows SLD = BKM coincidence, whereas thermal equilibrium selects f_BKM(t) = (t - 1)/ln t uniquely.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 270" width="760" height="270">
  <rect x="0" y="0" width="760" height="270" fill="#FDFBF7" />
  <rect x="16" y="14" width="728" height="242" fill="#FAF6EC" stroke="#CBBBA0" stroke-width="1" />
  <text x="380" y="36" text-anchor="middle" font-family="DejaVu Serif, Georgia, serif" font-size="12.5" fill="#2E0820">Chentsov–Morozova–Petz Rigidity: BKM vs. SLD Monotone Curves</text>

  <rect x="86" y="54" width="590" height="156" fill="#FFFFFF" stroke="#186876" stroke-width="1" />
  <!-- Gridlines -->
  <line x1="381" y1="54" x2="381" y2="210" stroke="#E2D6C1" stroke-dasharray="4,3" />
  <line x1="86" y1="132" x2="676" y2="132" stroke="#E2D6C1" stroke-dasharray="4,3" />

  <!-- BKM Bell Curve peaked at modular s = 0.5 (x=381, y=72) -->
  <path d="M 86 202 Q 230 198, 300 120 Q 345 72, 381 72 Q 417 72, 462 120 Q 532 198, 676 202" fill="none" stroke="#0F3D2B" stroke-width="2.5" />
  <!-- SLD Extremal curve -->
  <path d="M 86 204 Q 250 180, 381 132 Q 512 84, 676 74" fill="none" stroke="#831B5B" stroke-width="2" stroke-dasharray="5,3" />

  <circle cx="381" cy="72" r="5" fill="#EA580C" />
  <text x="381" y="96" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9.5" fill="#0F3D2B">Unique KMS Extensivity Peak: f_BKM(t) = (t−1)/ln(t)</text>
  <text x="580" y="94" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9.5" fill="#661447">SLD f_SLD(t) = (1+t)/2</text>

  <text x="86" y="228" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9.5" fill="#062429">s = 0.0</text>
  <text x="381" y="228" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9.5" fill="#9A3412">s = 0.5 (Modular KMS Symmetry)</text>
  <text x="676" y="228" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9.5" fill="#062429">s = 1.0</text>
  <text x="380" y="246" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="9" fill="#0B3942">Figure 5.1 · Monotone Statistical Channel Symmetry Parameter s</text>
</svg>`
  },
  {
    id: 'fig-6-1-horizon-bifurcation',
    figureNumber: 'Figure 6.1',
    anchorChapter: 6,
    title: 'Strong-Field Bifurcation: Singular Kretschmann Blow-Up vs. Regular IGRT De Sitter Core',
    caption:
      'Kretschmann curvature scalar K(r) as a function of dimensionless radius r/r_s. Classical GR diverges as (r/r_s)^-6 while regular Hayward-IGRT caps cleanly at 24/l_core^4, breaking Morita equivalence inside r_s.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280">
  <rect x="0" y="0" width="760" height="280" fill="#FDFBF7" />
  <rect x="16" y="14" width="728" height="252" fill="#FAF6EC" stroke="#CBBBA0" stroke-width="1" />
  <text x="380" y="36" text-anchor="middle" font-family="DejaVu Serif, Georgia, serif" font-size="12.5" fill="#2E0820">Horizon Curvature Bifurcation: Exterior Equivalence vs. Interior Core Divergence</text>

  <rect x="86" y="54" width="590" height="162" fill="#FFFFFF" stroke="#11505C" stroke-width="1" />
  <!-- Horizon line r = r_s at x = 350 -->
  <line x1="350" y1="54" x2="350" y2="216" stroke="#EA580C" stroke-width="1.4" stroke-dasharray="4,3" />
  <rect x="350" y="54" width="326" height="162" fill="#EDF5F6" fill-opacity="0.55" />
  <rect x="86" y="54" width="264" height="162" fill="#F9EEF4" fill-opacity="0.45" />

  <!-- GR singular curve blowing up toward top-left -->
  <path d="M 104 60 Q 150 135, 250 182 Q 350 198, 666 208" fill="none" stroke="#4A0E33" stroke-width="2.4" />
  <!-- Regular Hayward-IGRT curve plateauing cleanly inside core -->
  <path d="M 96 154 Q 180 156, 260 182 Q 350 198, 666 208" fill="none" stroke="#0F3D2B" stroke-width="2.4" stroke-dasharray="6,2" />

  <text x="218" y="76" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="9.5" fill="#4A0E33">Interior Core Split (r &lt; r_s)</text>
  <text x="515" y="76" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="9.5" fill="#0F3D2B">Morita-Equivalent Exterior (r &gt; r_s)</text>
  <text x="155" y="100" text-anchor="start" font-family="DejaVu Sans Mono, monospace" font-size="9" fill="#4A0E33">GR: K → ∞ (Geodesic Incomplete)</text>
  <text x="100" y="144" text-anchor="start" font-family="DejaVu Sans Mono, monospace" font-size="9" fill="#0F3D2B">IGRT Core Cap: 24 / ℓ_core⁴</text>

  <text x="350" y="232" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9.5" fill="#9A3412">r = r_s (Horizon)</text>
  <text x="96" y="232" text-anchor="start" font-family="DejaVu Sans Mono, monospace" font-size="9.5" fill="#2E0820">r → 0 (Core)</text>
  <text x="666" y="232" text-anchor="end" font-family="DejaVu Sans Mono, monospace" font-size="9.5" fill="#11505C">r ≫ r_s (Asymptotic Flatness)</text>
  <text x="380" y="252" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="9" fill="#0B3942">Figure 6.1 · Dimensionless Radial Coordinate (log K vs r/r_s)</text>
</svg>`
  },
  {
    id: 'fig-7-1-bayesian-mdl',
    figureNumber: 'Figure 7.1',
    anchorChapter: 7,
    title: 'Bayesian Fisher-MDL Evidence Trajectory Under Crucial Echo Detection SNR',
    caption:
      'Log Bayes factor ln B_(reg-IGRT, GR) = 0.5 SNR^2 - 3.62 crosses zero near SNR = 2.69 and clears the Jeffreys decisive discovery threshold (+1.5 nats) at SNR_crit = 3.20.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 270" width="760" height="270">
  <rect x="0" y="0" width="760" height="270" fill="#FDFBF7" />
  <rect x="16" y="14" width="728" height="242" fill="#FAF6EC" stroke="#CBBBA0" stroke-width="1" />
  <text x="380" y="36" text-anchor="middle" font-family="DejaVu Serif, Georgia, serif" font-size="12.5" fill="#2E0820">Bayesian Fisher-MDL Crucible: Echo SNR vs. Log Bayes Factor ln B</text>

  <rect x="92" y="54" width="580" height="156" fill="#FFFFFF" stroke="#186876" stroke-width="1" />
  <!-- Zero-evidence line (ln B = 0) at y = 166 -->
  <line x1="92" y1="166" x2="672" y2="166" stroke="#11505C" stroke-width="1" stroke-dasharray="4,3" />
  <!-- +1.5 threshold at y = 148 -->
  <line x1="92" y1="148" x2="672" y2="148" stroke="#227252" stroke-width="1" stroke-dasharray="3,2" />

  <!-- Quadratic curve: SNR=0 -> y=198 (-3.62); SNR=3.2 -> y=148 (+1.5); SNR=5.0 -> y=68 (+8.88) -->
  <path d="M 92 198 Q 270 192, 463 148 Q 570 116, 672 68" fill="none" stroke="#EA580C" stroke-width="2.5" />
  <circle cx="463" cy="148" r="5" fill="#0F3D2B" />
  <circle cx="672" cy="68" r="5" fill="#831B5B" />

  <text x="108" y="189" text-anchor="start" font-family="DejaVu Sans Mono, monospace" font-size="9" fill="#9A3412">Null Echoes: −3.62 nats (Occam Penalty)</text>
  <text x="455" y="138" text-anchor="end" font-family="DejaVu Sans Mono, monospace" font-size="9" fill="#0F3D2B">SNR_crit = 3.20 (+1.5 nats)</text>
  <text x="660" y="88" text-anchor="end" font-family="DejaVu Sans Mono, monospace" font-size="9" fill="#4A0E33">5σ Discovery → ln B = +8.88 nats</text>

  <text x="92" y="228" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9.5" fill="#062429">SNR = 0</text>
  <text x="463" y="228" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9.5" fill="#0F3D2B">SNR = 3.2</text>
  <text x="672" y="228" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="9.5" fill="#831B5B">SNR = 5.0</text>
  <text x="380" y="246" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="9" fill="#0B3942">Figure 7.1 · Quantitative Transition From Exterior Draw to Decisive Regular-Core Evidence</text>
</svg>`
  }
];
