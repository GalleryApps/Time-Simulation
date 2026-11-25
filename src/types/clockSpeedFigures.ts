/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Pure vector SVG schematic definitions (Figs. 1.1–9.1) for Paper 14.
 * Decoupled from raster/asset imports so HTML/LaTeX exporters and unit tests run in pure Node.
 */

import type { ClockPaperTier } from './clockSpeedPaperData';

export interface ClockFigureSpec {
  id: string;
  figureNumber: string;
  anchorChapter: number;
  title: string;
  tier: ClockPaperTier;
  caption: string;
  svgMarkup: string;
}

export const CLOCK_SPEED_FIGURES: ClockFigureSpec[] = [
  {
    id: 'clock-fig-1',
    figureNumber: 'Fig. 1.1',
    anchorChapter: 1,
    title: 'Vertical Gravitational Clock Rate Gradient: 1 mm JILA Scale to GPS Altitude',
    tier: 'ESTABLISHED EMPIRICAL FACT',
    caption:
      'Log–log comparison of exact spherical potential shift Δν/ν₀ = (GM/c²)(R⊕⁻¹ − (R⊕+h)⁻¹) (solid magenta) against the constant-g weak-field tangent gΔh/c² (dashed teal) from 1 mm (JILA) through 33 cm (NIST), 22.5 m (Pound–Rebka), 450 m (Tokyo Skytree), 10 km (jets), to 20,200 km (GPS).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <!-- Grid Lines -->
  <g stroke="#EDF5F6" stroke-width="1">
    <line x1="100" y1="68" x2="695" y2="68"/>
    <line x1="100" y1="128" x2="695" y2="128"/>
    <line x1="100" y1="188" x2="695" y2="188"/>
    <line x1="100" y1="248" x2="695" y2="248"/>
    <line x1="126" y1="50" x2="126" y2="275"/>
    <line x1="283" y1="50" x2="283" y2="275"/>
    <line x1="439" y1="50" x2="439" y2="275"/>
    <line x1="596" y1="50" x2="596" y2="275"/>
  </g>
  <!-- Axes -->
  <line x1="100" y1="275" x2="695" y2="275" stroke="#0B3942" stroke-width="1.6"/>
  <line x1="100" y1="45" x2="100" y2="275" stroke="#0B3942" stroke-width="1.6"/>
  <!-- Y Ticks & Labels -->
  <g font-family="DejaVu Sans, sans-serif" font-size="10" fill="#11505C" text-anchor="end">
    <text x="92" y="72">10⁻¹⁰</text>
    <text x="92" y="132">10⁻¹³</text>
    <text x="92" y="192">10⁻¹⁶</text>
    <text x="92" y="252">10⁻¹⁹</text>
  </g>
  <!-- X Ticks & Labels -->
  <g font-family="DejaVu Sans, sans-serif" font-size="10" fill="#11505C" text-anchor="middle">
    <text x="126" y="292">1 mm</text>
    <text x="283" y="292">1 m</text>
    <text x="439" y="292">1 km</text>
    <text x="596" y="292">1,000 km</text>
    <text x="664" y="292">20,200 km</text>
  </g>
  <!-- Uniform-g Tangent Line g*h/c^2 -->
  <line x1="126" y1="247" x2="635" y2="48" stroke="#186876" stroke-width="1.6" stroke-dasharray="5 4"/>
  <!-- Exact Spherical Schwarzschild Potential Curve -->
  <polyline points="126,247 258,197 353,160 421,134 464,117 492,107 544,87 596,68 632,61 664,57" fill="none" stroke="#661447" stroke-width="2.8"/>
  <!-- Benchmark Experiment Points -->
  <circle cx="126" cy="247" r="4.5" fill="#0F3D2B"/>
  <circle cx="258" cy="197" r="4.5" fill="#227252"/>
  <circle cx="353" cy="160" r="4.5" fill="#186876"/>
  <circle cx="421" cy="134" r="4.5" fill="#11505C"/>
  <circle cx="464" cy="117" r="4.5" fill="#661447"/>
  <circle cx="492" cy="107" r="4.5" fill="#831B5B"/>
  <circle cx="664" cy="57" r="5" fill="#0F3D2B"/>
  <!-- Non-overlapping Alternating Callouts -->
  <text x="136" y="253" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#082419">JILA 1 mm (1.09×10⁻¹⁹)</text>
  <text x="268" y="204" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#0F3D2B">NIST 33 cm (3.6×10⁻¹⁷)</text>
  <text x="342" y="150" text-anchor="end" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#0B3942">Pound–Rebka 22.5 m (2.45×10⁻¹⁵)</text>
  <text x="410" y="124" text-anchor="end" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#11505C">Tokyo Skytree 450 m (+4.2 ns/d)</text>
  <text x="502" y="114" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#661447">3–10 km Peak/Jet (+28 to +94 ns/d)</text>
  <text x="652" y="42" text-anchor="end" font-family="DejaVu Sans, sans-serif" font-size="10.5" font-weight="bold" fill="#0F3D2B">GPS 20,200 km (+45.8 μs/d grav.)</text>
  <!-- Legend -->
  <rect x="440" y="205" width="248" height="54" rx="5" fill="#FAF9F7" stroke="#278594" stroke-width="1"/>
  <line x1="452" y1="224" x2="480" y2="224" stroke="#661447" stroke-width="2.6"/>
  <text x="488" y="228" font-family="DejaVu Sans, sans-serif" font-size="10" fill="#2E0820">Exact Spherical Potential ΔΦ/c²</text>
  <line x1="452" y1="244" x2="480" y2="244" stroke="#186876" stroke-width="1.6" stroke-dasharray="5 4"/>
  <text x="488" y="248" font-family="DejaVu Sans, sans-serif" font-size="10" fill="#0B3942">Flat-Earth Tangent gΔh/c²</text>
  <!-- Axis Titles -->
  <text x="398" y="325" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="11.5" fill="#0B3942">Elevation / Orbital Altitude Baseline Δh (log scale)</text>
  <text x="30" y="160" text-anchor="middle" transform="rotate(-90 30 160)" font-family="DejaVu Sans, sans-serif" font-size="11.5" fill="#0B3942">Fractional Blueshift Δν / ν₀</text>
</svg>`
  },
  {
    id: 'clock-fig-2',
    figureNumber: 'Fig. 2.1',
    anchorChapter: 2,
    title: 'Temporal vs. Spatial Curvature Dominance Near Earth',
    tier: 'STANDARD GENERAL RELATIVITY',
    caption:
      'Quantitative contrast explaining free-fall near Earth: spatial funnel curvature δg_rr ≈ 1.4×10⁻⁹ plays negligible role for slow matter, whereas the time-rate gradient dα/dr = g/c² multiplied by c² yields a = 9.82 m/s².',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 340">
  <defs>
    <marker id="arrowTeal" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
      <path d="M0,0 L7,3 L0,6 Z" fill="#0F3D2B"/>
    </marker>
    <marker id="arrowMag" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
      <path d="M0,0 L7,3 L0,6 Z" fill="#661447"/>
    </marker>
  </defs>
  <rect width="760" height="340" fill="#FFFFFF"/>
  <!-- Left Card: Spatial Slice Only -->
  <rect x="45" y="32" width="315" height="270" fill="#EDF5F6" stroke="#186876" stroke-width="1.3" rx="8"/>
  <text x="202" y="60" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="13" font-weight="bold" fill="#0B3942">Rubber-Sheet Slice (Spatial Only)</text>
  <path d="M 75 118 Q 202 225 330 118" fill="none" stroke="#11505C" stroke-width="2.4"/>
  <path d="M 75 148 Q 202 248 330 148" fill="none" stroke="#278594" stroke-width="1.4" stroke-dasharray="5 4"/>
  <circle cx="202" cy="182" r="20" fill="#0B3942"/>
  <text x="202" y="186" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10" fill="#FFFFFF">Earth</text>
  <text x="202" y="258" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#062429">δg_rr = r_s / R⊕ ≈ 1.39×10⁻⁹</text>
  <text x="202" y="278" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#661447">Slow objects (v ≪ c) barely sample δg_rr</text>
  <!-- Right Card: 4D Spacetime Geodesic -->
  <rect x="395" y="32" width="320" height="270" fill="#F7EEF3" stroke="#831B5B" stroke-width="1.3" rx="8"/>
  <text x="555" y="60" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="13" font-weight="bold" fill="#4A0E33">True 4D Geodesic (Time + Space)</text>
  <line x1="440" y1="230" x2="670" y2="230" stroke="#0F3D2B" stroke-width="1.5" marker-end="url(#arrowTeal)"/>
  <line x1="440" y1="230" x2="440" y2="85" stroke="#0F3D2B" stroke-width="1.5" marker-end="url(#arrowTeal)"/>
  <!-- Worldline Bending Inward -->
  <path d="M 605 228 Q 585 155 515 100" fill="none" stroke="#661447" stroke-width="3" marker-end="url(#arrowMag)"/>
  <line x1="605" y1="228" x2="605" y2="100" stroke="#9E2D72" stroke-width="1.2" stroke-dasharray="4 4"/>
  <text x="454" y="96" font-family="DejaVu Sans, sans-serif" font-size="11" fill="#0F3D2B">c t (1 s ≈ 3×10⁸ m)</text>
  <text x="678" y="234" font-family="DejaVu Sans, sans-serif" font-size="11" fill="#0F3D2B">r</text>
  <text x="615" y="130" font-family="DejaVu Sans, sans-serif" font-size="10" fill="#831B5B">Unaccelerated</text>
  <text x="555" y="258" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#2E0820">a = c² (dα/dr) = c² × 1.09×10⁻¹⁶ m⁻¹</text>
  <text x="555" y="278" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="11" font-weight="bold" fill="#4A0E33">= 9.82 m/s² Free-Fall Acceleration</text>
</svg>`
  },
  {
    id: 'clock-fig-3',
    figureNumber: 'Fig. 3.1',
    anchorChapter: 3,
    title: 'Local Update-Rate Profile α_upd(r) vs. Coordinate Speed of Light Ratio',
    tier: 'UPDATE-RATE REINTERPRETATION',
    caption:
      'Exact radial profiles for clock update cadence α_upd = √(1 − r_s/r) (pine green) and isotropic Schwarzschild coordinate light speed c_coord/c = 1 − r_s/r (dark magenta dashed) across r/r_s ∈ [1.0, 6.0].',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 340">
  <rect width="760" height="340" fill="#FFFFFF"/>
  <!-- Grid Lines -->
  <g stroke="#EEF5F1" stroke-width="1">
    <line x1="100" y1="60" x2="690" y2="60"/>
    <line x1="100" y1="110" x2="690" y2="110"/>
    <line x1="100" y1="160" x2="690" y2="160"/>
    <line x1="100" y1="210" x2="690" y2="210"/>
    <line x1="236" y1="55" x2="236" y2="260"/>
    <line x1="350" y1="55" x2="350" y2="260"/>
    <line x1="463" y1="55" x2="463" y2="260"/>
    <line x1="577" y1="55" x2="577" y2="260"/>
  </g>
  <!-- Axes -->
  <line x1="100" y1="260" x2="690" y2="260" stroke="#082419" stroke-width="1.6"/>
  <line x1="100" y1="50" x2="100" y2="260" stroke="#082419" stroke-width="1.6"/>
  <!-- Ticks -->
  <g font-family="DejaVu Sans, sans-serif" font-size="10" fill="#0F3D2B" text-anchor="end">
    <text x="92" y="64">1.00</text>
    <text x="92" y="114">0.75</text>
    <text x="92" y="164">0.50</text>
    <text x="92" y="214">0.25</text>
    <text x="92" y="264">0.00</text>
  </g>
  <g font-family="DejaVu Sans, sans-serif" font-size="10" fill="#0F3D2B" text-anchor="middle">
    <text x="123" y="278">1.0</text>
    <text x="179" y="278">1.5 (r_ph)</text>
    <text x="236" y="278">2.0</text>
    <text x="350" y="278">3.0</text>
    <text x="463" y="278">4.0</text>
    <text x="577" y="278">5.0</text>
    <text x="690" y="278">6.0</text>
  </g>
  <!-- Asymptotic Vacuum Line & Horizon Marker -->
  <line x1="100" y1="60" x2="690" y2="60" stroke="#278594" stroke-width="1.2" stroke-dasharray="6 4"/>
  <line x1="123" y1="50" x2="123" y2="260" stroke="#831B5B" stroke-width="1.5" stroke-dasharray="4 4"/>
  <line x1="179" y1="50" x2="179" y2="260" stroke="#C46D9E" stroke-width="1" stroke-dasharray="3 3"/>
  <!-- Exact Curve 1: alpha_upd = sqrt(1 - 1/x) -->
  <polyline points="123,260 128,216 134,197 145,178 162,158 179,145 208,128 236,119 293,105 350,97 463,87 577,81 690,77" fill="none" stroke="#17573E" stroke-width="3"/>
  <!-- Exact Curve 2: coordinate radial null speed c_coord/c = 1 - 1/x -->
  <polyline points="123,260 128,250 134,242 145,227 162,208 179,193 208,174 236,160 293,140 350,127 463,110 577,100 690,93" fill="none" stroke="#831B5B" stroke-width="2.2" stroke-dasharray="7 4"/>
  <!-- Photon Sphere Benchmark Dots -->
  <circle cx="179" cy="145" r="4.5" fill="#0F3D2B"/>
  <circle cx="179" cy="193" r="4.5" fill="#831B5B"/>
  <text x="187" y="142" font-family="DejaVu Sans, sans-serif" font-size="10" fill="#082419">r = 1.5 r_s: α = 0.577</text>
  <text x="187" y="205" font-family="DejaVu Sans, sans-serif" font-size="10" fill="#661447">c_r / c = 0.333</text>
  <text x="130" y="45" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#831B5B">Horizon (r = r_s)</text>
  <!-- Legend Box -->
  <rect x="435" y="175" width="240" height="62" rx="6" fill="#FAF9F7" stroke="#17573E" stroke-width="1"/>
  <line x1="448" y1="195" x2="478" y2="195" stroke="#17573E" stroke-width="2.8"/>
  <text x="486" y="199" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#082419">Clock Cadence α_upd = √(1 − r_s/r)</text>
  <line x1="448" y1="219" x2="478" y2="219" stroke="#831B5B" stroke-width="2.2" stroke-dasharray="6 3"/>
  <text x="486" y="223" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#4A0E33">Radial Light Speed (1 − r_s/r)</text>
  <text x="395" y="314" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="11.5" fill="#082419">Normalized Radial Distance (r / r_s)</text>
  <text x="30" y="158" text-anchor="middle" transform="rotate(-90 30 158)" font-family="DejaVu Sans, sans-serif" font-size="11.5" fill="#17573E">Normalized Rate Ratio (rel. to r → ∞)</text>
</svg>`
  },
  {
    id: 'clock-fig-4',
    figureNumber: 'Fig. 4.1',
    anchorChapter: 4,
    title: 'GPS Relativistic Budget: Gravitational Speedup vs. Kinematic Slowdown',
    tier: 'ESTABLISHED EMPIRICAL FACT',
    caption:
      'Proportional relativistic offset budget for GPS satellites (a = 26,560 km): +45.8 μs/day gravitational speedup minus 7.2 μs/day orbital time dilation leaves +38.6 μs/day net offset, supplemented by a ±22.8 ns orbital eccentricity swing at e = 0.01.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 330">
  <rect width="760" height="330" fill="#FFFFFF"/>
  <!-- Scaled Y-Grid (zero = y 205, 2.9 px per us/day) -->
  <g stroke="#EDF5F6" stroke-width="1">
    <line x1="95" y1="60" x2="700" y2="60"/>
    <line x1="95" y1="132" x2="700" y2="132"/>
    <line x1="95" y1="234" x2="700" y2="234"/>
  </g>
  <g font-family="DejaVu Sans, sans-serif" font-size="10" fill="#11505C" text-anchor="end">
    <text x="87" y="64">+50</text>
    <text x="87" y="136">+25</text>
    <text x="87" y="209">0</text>
    <text x="87" y="238">−10</text>
  </g>
  <line x1="95" y1="45" x2="95" y2="255" stroke="#062429" stroke-width="1.5"/>
  <line x1="95" y1="205" x2="700" y2="205" stroke="#062429" stroke-width="1.6"/>
  <!-- Scaled Proportional Bars -->
  <rect x="140" y="72" width="110" height="133" fill="#17573E" rx="4"/>
  <rect x="315" y="205" width="110" height="21" fill="#831B5B" rx="4"/>
  <rect x="490" y="93" width="110" height="112" fill="#11505C" rx="4"/>
  <!-- Value Labels -->
  <text x="195" y="58" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="12" font-weight="bold" fill="#0F3D2B">+45.8 μs/day</text>
  <text x="195" y="226" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="11" fill="#062429">Gravitational Potential</text>
  <text x="370" y="246" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="12" font-weight="bold" fill="#661447">−7.2 μs/day</text>
  <text x="370" y="192" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="11" fill="#062429">Orbital Velocity (v/c)</text>
  <text x="545" y="80" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="12" font-weight="bold" fill="#0B3942">+38.6 μs/day</text>
  <text x="545" y="226" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="11" fill="#062429">Net GPS Correction</text>
  <!-- Galileo Eccentricity Annotation Box -->
  <rect x="440" y="254" width="258" height="44" rx="5" fill="#F7EEF3" stroke="#C46D9E" stroke-width="1"/>
  <text x="569" y="272" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10" fill="#4A0E33">Eccentricity Check (e = 0.01): Δt_ecc = ±22.8 ns</text>
  <text x="569" y="288" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="9.5" fill="#0F3D2B">Matches Galileo 5/6 &amp; GPS IS-200 identically</text>
  <text x="235" y="282" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="11" fill="#0B3942">GR &amp; LUH overlap completely (0% discrimination)</text>
  <text x="34" y="150" text-anchor="middle" transform="rotate(-90 34 150)" font-family="DejaVu Sans, sans-serif" font-size="11.5" fill="#0B3942">Rate Offset (μs / day)</text>
</svg>`
  },
  {
    id: 'clock-fig-5',
    figureNumber: 'Fig. 5.1',
    anchorChapter: 5,
    title: 'PPN Parameter Plane (γ, β): Solar-System Constraint Intersection at (1, 1)',
    tier: 'PPN STRESS-TEST & FALSIFICATION',
    caption:
      'Cassini Shapiro delay (γ − 1 = (2.1 ± 2.3) × 10⁻⁵, vertical teal band), MESSENGER/INPOP Mercury perihelion advance (β = 2γ − 1, pine green line), and Lunar Laser Ranging Nordtvedt bound (4β − γ = 3, dashed dark teal) isolate the unique solution (γ = 1, β = 1, α₁ = α₂ = 0), refuting scalar-only models at γ = 0.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 350">
  <rect width="760" height="350" fill="#FFFFFF"/>
  <!-- Grid Lines: gamma [-0.2, 1.3] -> x [110, 680]; beta [-0.2, 1.3] -> y [270, 50] -->
  <g stroke="#EDF5F6" stroke-width="1">
    <line x1="110" y1="241" x2="680" y2="241"/>
    <line x1="110" y1="167" x2="680" y2="167"/>
    <line x1="110" y1="94" x2="680" y2="94"/>
    <line x1="186" y1="50" x2="186" y2="270"/>
    <line x1="376" y1="50" x2="376" y2="270"/>
    <line x1="566" y1="50" x2="566" y2="270"/>
  </g>
  <line x1="110" y1="270" x2="680" y2="270" stroke="#062429" stroke-width="1.6"/>
  <line x1="110" y1="50" x2="110" y2="270" stroke="#062429" stroke-width="1.6"/>
  <!-- Ticks -->
  <g font-family="DejaVu Sans, sans-serif" font-size="10" fill="#0B3942" text-anchor="end">
    <text x="102" y="245">0.0</text>
    <text x="102" y="171">0.5</text>
    <text x="102" y="98">1.0</text>
  </g>
  <g font-family="DejaVu Sans, sans-serif" font-size="10" fill="#0B3942" text-anchor="middle">
    <text x="186" y="287">0.0</text>
    <text x="376" y="287">0.5</text>
    <text x="566" y="287">1.0</text>
  </g>
  <!-- Cassini Band gamma = 1 -->
  <rect x="560" y="50" width="12" height="220" fill="#EDF5F6" stroke="#186876" stroke-width="1"/>
  <!-- Nordtvedt LLR Line: beta = (3 + gamma)/4 -->
  <line x1="110" y1="138" x2="680" y2="83" stroke="#186876" stroke-width="2" stroke-dasharray="6 4"/>
  <!-- Mercury Perihelion Line: beta = 2*gamma - 1 -->
  <line x1="338" y1="270" x2="623" y2="50" stroke="#17573E" stroke-width="2.6"/>
  <!-- Key Model Points -->
  <circle cx="566" cy="94" r="7" fill="#661447"/>
  <circle cx="186" cy="241" r="6" fill="#9E2D72" stroke="#2E0820" stroke-width="1.5"/>
  <circle cx="186" cy="94" r="6" fill="#C46D9E" stroke="#4A0E33" stroke-width="1.2"/>
  <!-- Crisp Labels -->
  <line x1="572" y1="99" x2="588" y2="122" stroke="#4A0E33" stroke-width="1"/>
  <text x="582" y="136" font-family="DejaVu Sans, sans-serif" font-size="10.5" font-weight="bold" fill="#4A0E33">GR &amp; Dual Update (1, 1)</text>
  <text x="582" y="150" font-family="DejaVu Sans, sans-serif" font-size="9.5" fill="#11505C">|α₁|&lt;4×10⁻⁵, |α₂|&lt;2×10⁻⁹</text>
  <text x="198" y="245" font-family="DejaVu Sans, sans-serif" font-size="10" fill="#831B5B">Linear Scalar (0, 0) · Excluded</text>
  <text x="198" y="82" font-family="DejaVu Sans, sans-serif" font-size="10" fill="#831B5B">Exp. Lapse (0, 1) · Excluded</text>
  <text x="566" y="38" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10" fill="#11505C">Cassini (γ = 1)</text>
  <!-- Legend -->
  <rect x="130" y="148" width="224" height="62" rx="6" fill="#FAF9F7" stroke="#C46D9E" stroke-width="1"/>
  <line x1="142" y1="169" x2="170" y2="169" stroke="#17573E" stroke-width="2.6"/>
  <text x="178" y="173" font-family="DejaVu Sans, sans-serif" font-size="10" fill="#0F3D2B">Mercury Orbit (β = 2γ − 1)</text>
  <line x1="142" y1="193" x2="170" y2="193" stroke="#186876" stroke-width="2" stroke-dasharray="6 3"/>
  <text x="178" y="197" font-family="DejaVu Sans, sans-serif" font-size="10" fill="#11505C">LLR Nordtvedt (4β − γ = 3)</text>
  <text x="395" y="320" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="11.5" fill="#0B3942">PPN Spatial Curvature / Refractive Coupling Parameter γ</text>
  <text x="42" y="160" text-anchor="middle" transform="rotate(-90 42 160)" font-family="DejaVu Sans, sans-serif" font-size="11.5" fill="#0B3942">Temporal Nonlinearity β</text>
</svg>`
  },
  {
    id: 'clock-fig-6',
    figureNumber: 'Fig. 6.1',
    anchorChapter: 6,
    title: 'Horizon Update Halt α_upd(r) vs. Finite Kretschmann Curvature K(r)',
    tier: 'FRONTIER OBSERVATIONAL PROBE',
    caption:
      'Exact radial profiles for α_upd = √(1 − r_s/r) (dark teal) and normalized tidal curvature K(r)/K(r_s) = (r_s/r)⁶ (pine green dashed): coordinate updates halt at r_s where tidal curvature remains perfectly finite.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 350">
  <rect width="760" height="350" fill="#FFFFFF"/>
  <!-- Grid: r/r_s in [0.7, 4.5] -> x in [100, 690]; y in [265, 60] -->
  <g stroke="#EDF5F6" stroke-width="1">
    <line x1="100" y1="60" x2="690" y2="60"/>
    <line x1="100" y1="162" x2="690" y2="162"/>
    <line x1="302" y1="55" x2="302" y2="265"/>
    <line x1="457" y1="55" x2="457" y2="265"/>
    <line x1="612" y1="55" x2="612" y2="265"/>
  </g>
  <!-- Interior Zone r < r_s -->
  <rect x="100" y="55" width="47" height="210" fill="#F7EEF3"/>
  <!-- Axes -->
  <line x1="100" y1="265" x2="690" y2="265" stroke="#062429" stroke-width="1.6"/>
  <line x1="100" y1="55" x2="100" y2="265" stroke="#062429" stroke-width="1.6"/>
  <line x1="147" y1="55" x2="147" y2="265" stroke="#661447" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="224" y1="55" x2="224" y2="265" stroke="#C46D9E" stroke-width="1.2" stroke-dasharray="3 3"/>
  <!-- Y Ticks -->
  <g font-family="DejaVu Sans, sans-serif" font-size="10" fill="#0B3942" text-anchor="end">
    <text x="92" y="64">1.0</text>
    <text x="92" y="166">0.5</text>
    <text x="92" y="269">0.0</text>
  </g>
  <!-- X Ticks -->
  <g font-family="DejaVu Sans, sans-serif" font-size="10" fill="#0B3942" text-anchor="middle">
    <text x="147" y="283">1.0 (r_s)</text>
    <text x="224" y="283">1.5 (r_ph)</text>
    <text x="302" y="283">2.0</text>
    <text x="457" y="283">3.0</text>
    <text x="612" y="283">4.0</text>
  </g>
  <!-- Exact Curves for r >= r_s -->
  <polyline points="147,265 154,220 162,203 178,180 224,147 302,120 379,106 457,98 612,88 690,84" fill="none" stroke="#186876" stroke-width="2.8"/>
  <polyline points="147,60 154,112 162,150 178,196 224,247 302,262 379,264 457,265 690,265" fill="none" stroke="#17573E" stroke-width="2.5" stroke-dasharray="7 4"/>
  <circle cx="147" cy="60" r="4.5" fill="#17573E"/>
  <circle cx="147" cy="265" r="4.5" fill="#661447"/>
  <!-- Labels & Legend -->
  <text x="154" y="46" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#4A0E33">Event Horizon r = r_s (α_upd → 0, K/K_s = 1.0)</text>
  <rect x="380" y="140" width="292" height="68" rx="6" fill="#FAF9F7" stroke="#186876" stroke-width="1"/>
  <line x1="394" y1="162" x2="424" y2="162" stroke="#186876" stroke-width="2.8"/>
  <text x="432" y="166" font-family="DejaVu Sans, sans-serif" font-size="10" fill="#0B3942">Update Rate α_upd = √(1 − r_s/r)</text>
  <line x1="394" y1="186" x2="424" y2="186" stroke="#17573E" stroke-width="2.5" stroke-dasharray="6 3"/>
  <text x="432" y="190" font-family="DejaVu Sans, sans-serif" font-size="10" fill="#0F3D2B">Tidal Scalar K(r)/K(r_s) = (r_s/r)⁶</text>
  <text x="395" y="315" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="11.5" fill="#062429">Radial Coordinate Ratio (r / r_s)</text>
  <text x="38" y="160" text-anchor="middle" transform="rotate(-90 38 160)" font-family="DejaVu Sans, sans-serif" font-size="11.5" fill="#0B3942">Normalized Dimensionless Ratio</text>
</svg>`
  },
  {
    id: 'clock-fig-7',
    figureNumber: 'Fig. 7.1',
    anchorChapter: 7,
    title: 'Astrophysical Bounds on Discrete Update-Step Dispersion (ΛCDM K_n Integral)',
    tier: 'FRONTIER OBSERVATIONAL PROBE',
    caption:
      'Exact Jacob–Piran ΛCDM dispersion lag Δt_LIV at E_QG = E_Pl (z = 0.903) for linear (n = 1) vs. quadratic (n = 2) discrete clock steps: Fermi-LAT GRB 090510 rules out n = 1 linear granularity by 7.6×, while n = 2 suppression falls > 10 orders of magnitude below instrumental thresholds.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 350">
  <rect width="760" height="350" fill="#FFFFFF"/>
  <!-- Grid: logE in [0, 5] -> x in [105, 695]; log(dt) in [-24, 4] -> y in [270, 55] -->
  <g stroke="#EDF5F6" stroke-width="1">
    <line x1="105" y1="86" x2="695" y2="86"/>
    <line x1="105" y1="132" x2="695" y2="132"/>
    <line x1="105" y1="178" x2="695" y2="178"/>
    <line x1="105" y1="224" x2="695" y2="224"/>
    <line x1="223" y1="55" x2="223" y2="270"/>
    <line x1="341" y1="55" x2="341" y2="270"/>
    <line x1="459" y1="55" x2="459" y2="270"/>
    <line x1="577" y1="55" x2="577" y2="270"/>
  </g>
  <!-- Excluded Region > 0.83 s (y <= 86) -->
  <rect x="105" y="55" width="590" height="31" fill="#F7EEF3"/>
  <line x1="105" y1="86" x2="695" y2="86" stroke="#831B5B" stroke-width="1.8" stroke-dasharray="5 4"/>
  <!-- Axes -->
  <line x1="105" y1="270" x2="695" y2="270" stroke="#062429" stroke-width="1.6"/>
  <line x1="105" y1="55" x2="105" y2="270" stroke="#062429" stroke-width="1.6"/>
  <!-- Y Ticks -->
  <g font-family="DejaVu Sans, sans-serif" font-size="10" fill="#0B3942" text-anchor="end">
    <text x="97" y="89">10⁰ s</text>
    <text x="97" y="136">10⁻⁶ s</text>
    <text x="97" y="182">10⁻¹² s</text>
    <text x="97" y="228">10⁻¹⁸ s</text>
    <text x="97" y="274">10⁻²⁴ s</text>
  </g>
  <!-- X Ticks -->
  <g font-family="DejaVu Sans, sans-serif" font-size="10" fill="#0B3942" text-anchor="middle">
    <text x="105" y="288">1 GeV</text>
    <text x="223" y="288">10 GeV</text>
    <text x="341" y="288">100 GeV</text>
    <text x="459" y="288">1 TeV</text>
    <text x="577" y="288">10 TeV</text>
    <text x="695" y="288">100 TeV</text>
  </g>
  <!-- Exact Curves -->
  <polyline points="105,97 281,86 459,74 695,59" fill="none" stroke="#661447" stroke-width="2.8"/>
  <polyline points="105,241 341,211 607,176 695,165" fill="none" stroke="#17573E" stroke-width="2.8"/>
  <circle cx="281" cy="86" r="5" fill="#4A0E33"/>
  <circle cx="607" cy="176" r="5" fill="#0F3D2B"/>
  <!-- Callouts -->
  <line x1="185" y1="86" x2="185" y2="98" stroke="#831B5B" stroke-width="1"/>
  <text x="115" y="112" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#4A0E33">Fermi-LAT GRB 090510 Exclusion Floor (Δt_obs &lt; 0.83 s)</text>
  <line x1="488" y1="72" x2="508" y2="46" stroke="#661447" stroke-width="1"/>
  <text x="514" y="45" font-family="DejaVu Sans, sans-serif" font-size="10.5" font-weight="bold" fill="#661447">Linear Grid (n = 1 · Refuted)</text>
  <line x1="607" y1="176" x2="585" y2="155" stroke="#0F3D2B" stroke-width="1"/>
  <text x="580" y="152" text-anchor="end" font-family="DejaVu Sans, sans-serif" font-size="10.5" font-weight="bold" fill="#0F3D2B">Quadratic / LHAASO 18 TeV (n = 2 · Viable)</text>
  <text x="400" y="322" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="11.5" fill="#0B3942">Photon Energy E_γ (Log Scale, GeV to 100 TeV)</text>
  <text x="34" y="162" text-anchor="middle" transform="rotate(-90 34 162)" font-family="DejaVu Sans, sans-serif" font-size="11.5" fill="#0B3942">Arrival Lag Δt_LIV (Log Scale)</text>
</svg>`
  },
  {
    id: 'clock-fig-8',
    figureNumber: 'Fig. 8.1',
    anchorChapter: 8,
    title: 'Experimental Screening Across Weak-Field, PPN, and Strong-Field Regimes',
    tier: 'PPN STRESS-TEST & FALSIFICATION',
    caption:
      'Hierarchical empirical filtering: weak-field clock tests yield observational degeneracy; solar-system PPN bounds exclude purely temporal models (γ = 0); 2026–2035 instruments test horizon echoes and atom-clock interferometric unitarity.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 340">
  <defs>
    <marker id="arrowTree" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
      <path d="M0,0 L7,3 L0,6 Z" fill="#0B3942"/>
    </marker>
    <marker id="arrowReject" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
      <path d="M0,0 L7,3 L0,6 Z" fill="#831B5B"/>
    </marker>
  </defs>
  <rect width="760" height="340" fill="#FFFFFF"/>
  <!-- Stage 1 -->
  <rect x="35" y="110" width="175" height="84" rx="8" fill="#EEF5F1" stroke="#17573E" stroke-width="1.6"/>
  <text x="122" y="138" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="11.5" font-weight="bold" fill="#082419">1. Clocks &amp; GNSS</text>
  <text x="122" y="157" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#17573E">+38.6 μs/d &amp; ±22.8 ns</text>
  <text x="122" y="175" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10" fill="#0F3D2B">Weak-Field Degeneracy</text>
  <!-- Connector 1 -> 2 -->
  <line x1="210" y1="152" x2="262" y2="152" stroke="#0B3942" stroke-width="1.8" marker-end="url(#arrowTree)"/>
  <!-- Stage 2 -->
  <rect x="266" y="110" width="185" height="84" rx="8" fill="#EDF5F6" stroke="#186876" stroke-width="1.6"/>
  <text x="358" y="138" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="11.5" font-weight="bold" fill="#062429">2. Solar PPN &amp; Pulsars</text>
  <text x="358" y="157" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#11505C">1.750″, Cassini γ=1</text>
  <text x="358" y="175" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10" fill="#11505C">|η_N| &lt; 1.1×10⁻⁴ (LLR)</text>
  <!-- Reject Branch -->
  <line x1="358" y1="194" x2="358" y2="244" stroke="#831B5B" stroke-width="1.8" marker-end="url(#arrowReject)"/>
  <rect x="266" y="248" width="185" height="58" rx="8" fill="#F7EEF3" stroke="#831B5B" stroke-width="1.6"/>
  <text x="358" y="272" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="11" font-weight="bold" fill="#4A0E33">Scalar-Only Excluded</text>
  <text x="358" y="290" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10" fill="#831B5B">50% Deficit (γ=0), η_N=−3</text>
  <!-- Connector 2 -> 3 -->
  <line x1="451" y1="152" x2="500" y2="152" stroke="#0B3942" stroke-width="1.8" marker-end="url(#arrowTree)"/>
  <!-- Stage 3 -->
  <rect x="504" y="96" width="220" height="112" rx="8" fill="#EDF5F6" stroke="#0B3942" stroke-width="1.8"/>
  <text x="614" y="124" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="11.5" font-weight="bold" fill="#062429">3. 2026–2035 Frontier</text>
  <text x="614" y="145" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#11505C">LISA / ET / CE Ringdowns</text>
  <text x="614" y="164" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#11505C">AION / MAGIS / ngEHT</text>
  <text x="614" y="185" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10.5" font-weight="bold" fill="#4A0E33">GR vs. Regular Core (ℓ₀)</text>
</svg>`
  },
  {
    id: 'clock-fig-9',
    figureNumber: 'Fig. 9.1',
    anchorChapter: 9,
    title: 'Structural Equivalence Outside Horizons and Dynamical Divergence at Regular Cores',
    tier: 'EPISTEMOLOGY & PHILOSOPHY OF SCIENCE',
    caption:
      'Outside compact horizons, Lorentzian geometry (g_μν) and covariant spatial-temporal update formulations (α_upd, n_eff) determine identical observable invariants (τ, Δθ, Δt_Shapiro, Δϖ), diverging solely if high-curvature saturation replaces classical singularities.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 300">
  <defs>
    <marker id="arrowDualR" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#0F3D2B"/>
    </marker>
    <marker id="arrowDualL" markerWidth="7" markerHeight="7" refX="1" refY="3" orient="auto">
      <path d="M6,0 L0,3 L6,6 Z" fill="#0F3D2B"/>
    </marker>
  </defs>
  <rect width="760" height="300" fill="#FFFFFF"/>
  <ellipse cx="250" cy="145" rx="175" ry="96" fill="#EDF5F6" fill-opacity="0.72" stroke="#11505C" stroke-width="2"/>
  <ellipse cx="510" cy="145" rx="175" ry="96" fill="#F7EEF3" fill-opacity="0.72" stroke="#661447" stroke-width="2"/>
  <text x="165" y="130" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="13" font-weight="bold" fill="#062429">Curved Geometry</text>
  <text x="165" y="150" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#11505C">Metric g_μν, Geodesics</text>
  <text x="165" y="168" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#11505C">Classical r = 0 Singularity</text>
  <text x="595" y="130" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="13" font-weight="bold" fill="#4A0E33">Covariant Update-Rate</text>
  <text x="595" y="150" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#661447">α_upd, n_eff Impedance</text>
  <text x="595" y="168" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#661447">Finite Regular Core (ℓ₀)</text>
  <!-- Overlap Zone -->
  <line x1="342" y1="104" x2="418" y2="104" stroke="#0F3D2B" stroke-width="1.6" marker-start="url(#arrowDualL)" marker-end="url(#arrowDualR)"/>
  <text x="380" y="134" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="12" font-weight="bold" fill="#0F3D2B">Equivalent</text>
  <text x="380" y="154" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#17573E">Exterior Domain</text>
  <text x="380" y="172" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="10.5" fill="#17573E">(Clocks, GPS, PPN)</text>
</svg>`
  }
];
