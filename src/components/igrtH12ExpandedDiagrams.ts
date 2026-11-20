/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Expanded Chapter Scientific Diagrams for IGRT-H12 (Chapters 1–13):
 * Ensures every single chapter (Ch. 1–13) features multiple full-detail,
 * fully labeled technical diagrams rendered on a pure white (#FFFFFF) canvas
 * using crisp black technical ink (#0F0D0B) and muted subtle earth accents
 * (Umber #3A2E26, Terracotta #8F5B4A, Sage #64705B, Stone #8E7F6B).
 */

import type { H12FigureSpec } from './IgrtH12Figures';

export const H12_EXPANDED_CHAPTER_FIGURES: H12FigureSpec[] = [
  {
    id: 'h12-fig-1b',
    figureNumber: 'Figure H12-1B',
    anchorChapter: 1,
    title: 'Epistemic Firewall Architecture: Safeguards 1–20 & Category A–D Embedding Flow',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Architectural separation preventing conjectural 5D assumptions (Category C) and speculative engineering concepts (Category D) from overwriting the 665 verified 4D H11 predictions (pinned SHA-256 digest 57cf3f1c...048d). Safeguards 1–20 gate every inference at the boundary between established brane physics, derived no-go theorems, and speculative bulk proposals.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 480" width="760" height="480" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="480" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="452" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">EPISTEMIC BOUNDARY ARCHITECTURE: H11 ANCHOR PROTECTION &amp; SAFEGUARDS 1–20</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <!-- Category A Box -->
  <rect x="38" y="74" width="320" height="145" fill="#F7F5F0" stroke="#0F0D0B" stroke-width="1.5"/>
  <rect x="38" y="74" width="320" height="26" fill="#3A2E26"/>
  <text x="198" y="92" text-anchor="middle" font-size="11" font-weight="bold" fill="#FFFFFF">CATEGORY A — ESTABLISHED PHYSICS</text>
  <text x="54" y="120" font-size="10.5" fill="#0F0D0B">• 665 Verified 4D IGRT-H11 Assertions</text>
  <text x="54" y="140" font-size="10.5" fill="#0F0D0B">• Pinned SHA-256: 57cf3f1c...2b05048d</text>
  <text x="54" y="160" font-size="10.5" fill="#0F0D0B">• Projective Fiber PU(H) &amp; SLD Fisher Metric</text>
  <text x="54" y="180" font-size="10.5" fill="#0F0D0B">• Born Rule, Lorentz Microcausality, 2nd Law</text>
  <text x="54" y="202" font-size="10" font-weight="bold" fill="#64705B">STATUS: UNALTERED AT y = 0 (delta &lt;= 4.97e-14)</text>

  <!-- Category B Box -->
  <rect x="402" y="74" width="320" height="145" fill="#F4F6F2" stroke="#64705B" stroke-width="1.6"/>
  <rect x="402" y="74" width="320" height="26" fill="#64705B"/>
  <text x="562" y="92" text-anchor="middle" font-size="11" font-weight="bold" fill="#FFFFFF">CATEGORY B — RIGOROUSLY DERIVED (H12)</text>
  <text x="418" y="120" font-size="10.5" fill="#0F0D0B">• Geometric Decoupling G_Ai = 0 (Thm 2.1)</text>
  <text x="418" y="140" font-size="10.5" fill="#0F0D0B">• Negative No-Go Theorems (Symm. &amp; RS AdS5)</text>
  <text x="418" y="160" font-size="10.5" fill="#0F0D0B">• 10^-71 Casimir Shortfall at r0 = 1 m</text>
  <text x="418" y="180" font-size="10.5" fill="#0F0D0B">• EM Horizon Ceiling eta &gt;= 2/pi = 0.63662</text>
  <text x="418" y="202" font-size="10" font-weight="bold" fill="#64705B">STATUS: 102/102 NUMERICAL ASSERTIONS PROVEN</text>

  <!-- Firewall Bar -->
  <rect x="38" y="238" width="684" height="54" fill="#EFEAE1" stroke="#0F0D0B" stroke-width="1.8" stroke-dasharray="6,3"/>
  <text x="380" y="260" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#8F5B4A">EPISTEMIC QUARANTINE WALL: SAFEGUARDS 1–20 &amp; NON-CLAIM BOUNDARIES</text>
  <text x="380" y="280" text-anchor="middle" font-size="10" fill="#0F0D0B">No back-reaction from Cat. C/D onto Cat. A · No physical portals claimed · Active warp unmechanized</text>

  <!-- Category C Box -->
  <rect x="38" y="312" width="320" height="130" fill="#FBF7F4" stroke="#8F5B4A" stroke-width="1.6"/>
  <rect x="38" y="312" width="320" height="26" fill="#8F5B4A"/>
  <text x="198" y="330" text-anchor="middle" font-size="11" font-weight="bold" fill="#FFFFFF">CATEGORY C — CONJECTURAL POSTULATES</text>
  <text x="54" y="358" font-size="10.5" fill="#0F0D0B">• Eq. (H12.0.1): 5D Asymmetric Metric Ansatz</text>
  <text x="54" y="378" font-size="10.5" fill="#0F0D0B">• Eq. (H12.0.2): d tau_5 = alpha_mod ds_QFI</text>
  <text x="54" y="398" font-size="10.5" fill="#0F0D0B">• ER=EPR Correspondence Without Signaling</text>
  <text x="54" y="422" font-size="10" font-weight="bold" fill="#8F5B4A">STATUS: POSTULATED — NO ACTIVE TEST FEASIBLE</text>

  <!-- Category D Box -->
  <rect x="402" y="312" width="320" height="130" fill="#F8F6F2" stroke="#8E7F6B" stroke-width="1.6"/>
  <rect x="402" y="312" width="320" height="26" fill="#8E7F6B"/>
  <text x="562" y="330" text-anchor="middle" font-size="11" font-weight="bold" fill="#FFFFFF">CATEGORY D — SPECULATIVE CONCEPTS</text>
  <text x="418" y="358" font-size="10.5" fill="#0F0D0B">• Analog Simulators (Devices C, G &amp; H)</text>
  <text x="418" y="378" font-size="10.5" fill="#0F0D0B">• 11 Speculative Portal Concepts (App. L)</text>
  <text x="418" y="398" font-size="10.5" fill="#0F0D0B">• Optical/Quantum Mode Transfer Below c</text>
  <text x="418" y="422" font-size="10" font-weight="bold" fill="#3A2E26">STATUS: BENCH ANALOGS — NOT SPACETIME TUNNELS</text>

  <!-- Connectors -->
  <line x1="198" y1="219" x2="198" y2="238" stroke="#0F0D0B" stroke-width="1.5"/>
  <line x1="562" y1="219" x2="562" y2="238" stroke="#0F0D0B" stroke-width="1.5"/>
  <line x1="198" y1="292" x2="198" y2="312" stroke="#8F5B4A" stroke-width="1.5"/>
  <line x1="562" y1="292" x2="562" y2="312" stroke="#8E7F6B" stroke-width="1.5"/>
</svg>`
  },
  {
    id: 'h12-fig-2b',
    figureNumber: 'Figure H12-2B',
    anchorChapter: 2,
    title: 'Kaluza–Klein Mode Tower (n = 0,1,2,3) & Warped AdS_5 Hierarchy Geometry',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Dual structural decomposition of Chapter 2: Left, discrete Kaluza–Klein excitation spectrum m_KK^(n) = n hbar c / R_5 constrained by the Eot-Wash 44 um bound (m_KK^(1) = 4.485 meV, n=2 at 8.969 meV, n=3 at 13.454 meV), isolating the massless zero-mode graviton (H11). Right, the Randall–Sundrum warped AdS_5 exponential warp factor A(y) = e^{-k|y|} dropping by 6.305 x 10^-16 across k pi R = 35 between the UV Planck brane and IR TeV brane.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 480" width="760" height="480" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="480" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="452" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">5D COMPACTIFICATION: KALUZA–KLEIN TOWER vs. WARPED AdS_5 HIERARCHY</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <!-- Left Panel: KK Spectrum -->
  <rect x="34" y="70" width="336" height="330" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="202" y="92" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">A. Compact S^1 / Z_2 Kaluza–Klein Tower</text>
  <line x1="76" y1="358" x2="340" y2="358" stroke="#0F0D0B" stroke-width="1.5"/>
  <line x1="76" y1="115" x2="76" y2="358" stroke="#0F0D0B" stroke-width="1.5"/>
  <text x="64" y="138" text-anchor="end" font-size="9.5" fill="#0F0D0B">13.45 meV</text>
  <text x="64" y="204" text-anchor="end" font-size="9.5" fill="#0F0D0B">8.97 meV</text>
  <text x="64" y="274" text-anchor="end" font-size="9.5" fill="#8F5B4A">4.49 meV</text>
  <text x="64" y="358" text-anchor="end" font-size="9.5" fill="#64705B">0 meV</text>

  <!-- Tower Levels -->
  <line x1="76" y1="350" x2="310" y2="350" stroke="#64705B" stroke-width="3"/>
  <text x="195" y="340" text-anchor="middle" font-size="10" font-weight="bold" fill="#64705B">n = 0 Zero Mode (4D GR + IGRT-H11)</text>
  <line x1="76" y1="270" x2="310" y2="270" stroke="#8F5B4A" stroke-width="2.4"/>
  <text x="195" y="260" text-anchor="middle" font-size="10" font-weight="bold" fill="#8F5B4A">n = 1 First KK Mode (&gt;= 4.485 meV)</text>
  <line x1="76" y1="200" x2="310" y2="200" stroke="#3A2E26" stroke-width="2"/>
  <text x="195" y="190" text-anchor="middle" font-size="10" fill="#0F0D0B">n = 2 Harmonic (&gt;= 8.969 meV)</text>
  <line x1="76" y1="134" x2="310" y2="134" stroke="#8E7F6B" stroke-width="1.8"/>
  <text x="195" y="124" text-anchor="middle" font-size="10" fill="#3A2E26">n = 3 Harmonic (&gt;= 13.454 meV)</text>

  <rect x="92" y="290" width="210" height="36" fill="#FFFFFF" stroke="#8F5B4A" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="197" y="306" text-anchor="middle" font-size="9.5" fill="#8F5B4A">Protected Mass Gap (No Yukawa Leak)</text>
  <text x="197" y="320" text-anchor="middle" font-size="9" fill="#0F0D0B">M_5(flat) &gt;= 2.985 x 10^8 GeV (Z_2: 3.761e8)</text>

  <!-- Right Panel: Warped AdS_5 -->
  <rect x="390" y="70" width="336" height="330" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="558" y="92" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">B. Warped RS AdS_5 Exponential Throat</text>
  <!-- UV Brane -->
  <rect x="424" y="125" width="14" height="215" fill="#3A2E26"/>
  <text x="431" y="114" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0F0D0B">UV Brane</text>
  <text x="431" y="356" text-anchor="middle" font-size="9" fill="#3A2E26">y = 0</text>
  <!-- IR Brane -->
  <rect x="680" y="125" width="14" height="215" fill="#8F5B4A"/>
  <text x="687" y="114" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#8F5B4A">IR Brane</text>
  <text x="687" y="356" text-anchor="middle" font-size="9" fill="#8F5B4A">y = pi R_5</text>

  <!-- Warp curve -->
  <path d="M 438 145 C 495 148, 520 315, 680 330" fill="none" stroke="#64705B" stroke-width="3"/>
  <path d="M 438 145 C 495 148, 520 315, 680 330 L 680 340 L 438 340 Z" fill="#64705B" opacity="0.14"/>
  <text x="562" y="175" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#64705B">Warp Factor A(y) = e^(-k|y|)</text>
  <text x="572" y="218" text-anchor="middle" font-size="10" fill="#0F0D0B">At k*pi*R = 35:</text>
  <text x="572" y="236" text-anchor="middle" font-size="10" font-weight="bold" fill="#8F5B4A">e^(-35) = 6.305 x 10^-16</text>
  <text x="572" y="266" text-anchor="middle" font-size="9.5" fill="#0F0D0B">Sasaki-Shiromizu 4D Projection:</text>
  <text x="572" y="282" text-anchor="middle" font-size="9.5" fill="#3A2E26">G_uv + Lambda g_uv = 8 pi G T_uv + E_uv</text>

  <!-- Bottom Footnote -->
  <text x="380" y="432" text-anchor="middle" font-size="10.5" fill="#0F0D0B">Both compactifications preserve H11 optical/nuclear clocks down to 4.972e-14 (1 neV); E_uv vanishes symmetrically</text>
  <text x="380" y="450" text-anchor="middle" font-size="10" fill="#64705B">Verifies Chapter 2 Assertions 1–14: M_Pl^2 = (M_5^3 / k)(1 - e^{-2 k pi R_5})</text>
</svg>`
  },
  {
    id: 'h12-fig-3b',
    figureNumber: 'Figure H12-3B',
    anchorChapter: 3,
    title: 'Tomita–Takesaki Modular KMS Analytic Strip & Seven Temporal Notions Hierarchy',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Complex modular time strip Im(tau) in [0, beta hbar] verifying Eq. (H12.0.2) analyticity (top) and the strict epistemic classification of the seven temporal notions in Table 3.1 (bottom). Coordinate time t and brane proper duration tau_4 obey Category A relativity; modular flow tau_mod links statistical relative entropy to thermal periodicity beta hbar = 2 pi c / a, while folding ratio eta_fold stays quarantined under Category C.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 480" width="760" height="480" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="480" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="452" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">TOMITA–TAKESAKI KMS STRIP &amp; SEVEN-NOTION TEMPORAL HIERARCHY</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <!-- Top: Analytic Strip -->
  <rect x="44" y="72" width="672" height="170" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="94" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">A. KMS Thermal-Time Analytic Strip (0 &lt;= Im(tau) &lt;= beta * hbar = 2 pi c / a)</text>
  <rect x="90" y="114" width="580" height="82" fill="#64705B" opacity="0.16" stroke="#64705B" stroke-width="1.3"/>
  <line x1="90" y1="196" x2="670" y2="196" stroke="#0F0D0B" stroke-width="1.8"/>
  <line x1="90" y1="114" x2="670" y2="114" stroke="#8F5B4A" stroke-width="1.8" stroke-dasharray="5,3"/>
  <circle cx="240" cy="196" r="4.5" fill="#0F0D0B"/>
  <circle cx="520" cy="114" r="4.5" fill="#8F5B4A"/>
  <path d="M 240 196 C 320 155, 440 155, 520 114" fill="none" stroke="#3A2E26" stroke-width="1.8" stroke-dasharray="3,2"/>
  <text x="240" y="216" text-anchor="middle" font-size="10" fill="#0F0D0B">Real Axis Im(tau) = 0: omega(A alpha_t(B))</text>
  <text x="520" y="106" text-anchor="middle" font-size="10" font-weight="bold" fill="#8F5B4A">Shifted Axis Im(tau) = beta*hbar: omega(alpha_t(B) A)</text>
  <text x="380" y="158" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#3A2E26">d tau_mod = alpha_mod ds_QFI (KMS Periodicity 1.88365e-7 s at a = 1e16 m/s^2)</text>

  <!-- Bottom: 7 Notions Grid -->
  <rect x="44" y="256" width="672" height="190" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="278" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">B. Seven Orthogonal Temporal Notions &amp; Epistemic Locks (Table 3.1)</text>
  <rect x="64" y="294" width="204" height="42" fill="#F4F6F2" stroke="#64705B" stroke-width="1.2"/>
  <text x="166" y="312" text-anchor="middle" font-size="10" font-weight="bold" fill="#0F0D0B">1. Coordinate t &amp; 2. Brane tau_4</text>
  <text x="166" y="328" text-anchor="middle" font-size="9" fill="#64705B">Cat. A: Unchanged 4D proper clock</text>

  <rect x="278" y="294" width="204" height="42" fill="#F4F6F2" stroke="#64705B" stroke-width="1.2"/>
  <text x="380" y="312" text-anchor="middle" font-size="10" font-weight="bold" fill="#0F0D0B">3. Modular Flow s_mod</text>
  <text x="380" y="328" text-anchor="middle" font-size="9" fill="#64705B">Cat. B: Connes–Rovelli Tomita flow</text>

  <rect x="492" y="294" width="204" height="42" fill="#F4F6F2" stroke="#64705B" stroke-width="1.2"/>
  <text x="594" y="312" text-anchor="middle" font-size="10" font-weight="bold" fill="#0F0D0B">4. QFI Arc s_QFI (PU(H))</text>
  <text x="594" y="328" text-anchor="middle" font-size="9" fill="#64705B">Cat. B: Anandan-Aharonov speed limit</text>

  <rect x="64" y="348" width="204" height="42" fill="#FBF7F4" stroke="#8F5B4A" stroke-width="1.2"/>
  <text x="166" y="366" text-anchor="middle" font-size="10" font-weight="bold" fill="#8F5B4A">5. Bulk Excursion tau_5</text>
  <text x="166" y="382" text-anchor="middle" font-size="9" fill="#0F0D0B">Cat. C: Requires assumed asymmetry</text>

  <rect x="278" y="348" width="204" height="42" fill="#FBF7F4" stroke="#8F5B4A" stroke-width="1.2"/>
  <text x="380" y="366" text-anchor="middle" font-size="10" font-weight="bold" fill="#8F5B4A">6. Folding Ratio eta_fold</text>
  <text x="380" y="382" text-anchor="middle" font-size="9" fill="#0F0D0B">Cat. B/C: dt_5 / dt_4 (&lt; 1 conjectural)</text>

  <rect x="492" y="348" width="204" height="42" fill="#F7F5F0" stroke="#3A2E26" stroke-width="1.2"/>
  <text x="594" y="366" text-anchor="middle" font-size="10" font-weight="bold" fill="#0F0D0B">7. Causal Arrow / Microcausality</text>
  <text x="594" y="382" text-anchor="middle" font-size="9" fill="#3A2E26">Cat. B: Chronology strictly preserved</text>

  <text x="380" y="424" text-anchor="middle" font-size="10.5" fill="#0F0D0B">Thermodynamic Second Law &amp; Araki relative entropy S(rho||sigma) &gt;= 0 forbid time-reversed clock cycles</text>
</svg>`
  },
  {
    id: 'h12-fig-4b',
    figureNumber: 'Figure H12-4B',
    anchorChapter: 4,
    title: '5D Light-Cone Tilt, Euler–Lagrange Turning Condition & Finite EM Horizon (k dx < pi)',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Variational phase portrait of the Beltrami functional dt[y] = int (1/c) e^{-alpha_t k|y|} sqrt(1 + e^{2 alpha_x k|y|} y\'^2) dx. Top, local 5D null cone ds_5^2 = 0 widens smoothly into the bulk only when alpha_t + alpha_x > 0. Bottom, exact 5D Einstein–Maxwell bulk (alpha_t = 1, alpha_x = 0) encounters a causal horizon ceiling at k dx = pi (eta_min = 2/pi = 0.63662), while phenomenological Model 2B spans arbitrary baseline lengths asymptotically.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 480" width="760" height="480" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="480" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="452" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">BELTRAMI VARIATIONAL GEOMETRY &amp; FINITE EINSTEIN–MAXWELL HORIZON</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <!-- Left: Null Cone Tilt across y -->
  <rect x="34" y="72" width="332" height="334" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="200" y="94" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">A. 5D Null Cone Expansion (ds_5^2 = 0)</text>
  <!-- Brane null cone -->
  <polygon points="155,150 200,195 245,150" fill="#64705B" opacity="0.22" stroke="#0F0D0B" stroke-width="1.4"/>
  <text x="200" y="135" text-anchor="middle" font-size="10" fill="#0F0D0B">y = 0 Brane Cone (c_eff = c)</text>
  <!-- Deep bulk null cone -->
  <polygon points="75,305 200,365 325,305" fill="#8F5B4A" opacity="0.22" stroke="#8F5B4A" stroke-width="1.6"/>
  <text x="200" y="294" text-anchor="middle" font-size="10" font-weight="bold" fill="#8F5B4A">y = y_peak Bulk Cone: c_eff = c e^((a_t+a_x)k|y|)</text>
  <line x1="200" y1="195" x2="200" y2="365" stroke="#3A2E26" stroke-width="1.3" stroke-dasharray="4,3"/>
  <text x="210" y="245" font-size="9.5" fill="#3A2E26">Beltrami Turning Point:</text>
  <text x="210" y="260" font-size="9.5" fill="#0F0D0B">dy/dx = 0 at y = y_peak</text>
  <text x="200" y="392" text-anchor="middle" font-size="9.5" fill="#64705B">Strict superluminal tilt inside cone remains forbidden</text>

  <!-- Right: EM vs Model 2B Curve -->
  <rect x="386" y="72" width="340" height="334" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="556" y="94" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">B. EM Finite Span vs. Model 2B Trajectory</text>
  <line x1="428" y1="352" x2="704" y2="352" stroke="#0F0D0B" stroke-width="1.4"/>
  <line x1="428" y1="120" x2="428" y2="352" stroke="#0F0D0B" stroke-width="1.4"/>
  <line x1="428" y1="150" x2="704" y2="150" stroke="#0F0D0B" stroke-width="1.1" stroke-dasharray="4,3"/>
  <text x="436" y="142" font-size="9.5" fill="#0F0D0B">eta_fold = 1.0 (Brane Limit)</text>

  <!-- EM curve ending at k dx = pi -->
  <path d="M 428 150 Q 505 170 538 218" fill="none" stroke="#64705B" stroke-width="2.6"/>
  <circle cx="538" cy="218" r="4.5" fill="#64705B"/>
  <line x1="538" y1="120" x2="538" y2="352" stroke="#64705B" stroke-width="1.3" stroke-dasharray="3,3"/>
  <text x="538" y="368" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#64705B">k*dx = pi</text>
  <text x="552" y="215" font-size="9.5" font-weight="bold" fill="#64705B">EM Horizon: 2/pi = 0.6366</text>

  <!-- Model 2B curve -->
  <path d="M 428 150 C 500 165, 575 268, 692 332" fill="none" stroke="#8F5B4A" stroke-width="2.6"/>
  <circle cx="498" cy="176" r="3.8" fill="#8F5B4A"/>
  <circle cx="578" cy="264" r="3.8" fill="#8F5B4A"/>
  <circle cx="678" cy="326" r="3.8" fill="#8F5B4A"/>
  <text x="586" y="255" font-size="9.5" fill="#8F5B4A">2B: 0.343 (k*dx=10)</text>
  <text x="646" y="314" text-anchor="middle" font-size="9.5" fill="#8F5B4A">0.0777 (50)</text>

  <text x="380" y="438" text-anchor="middle" font-size="10.5" fill="#0F0D0B">Ghost-free EM bulk terminates at k dx &lt; pi; Model 2B (Cat. C) removes horizon only by unproven asymmetric warp ansatz</text>
</svg>`
  },
  {
    id: 'h12-fig-5b',
    figureNumber: 'Figure H12-5B',
    anchorChapter: 5,
    title: 'Hayward Regular Soliton Critical Mass (23.7744 ug) & Gregory–Laflamme Threshold (0.876)',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Parameter stability diagram separating regular 4D Hayward horizonless solitons (M < M_crit = 23.7744 ug, where l_0 = 1.359 x 10^-35 m suppresses event horizon formation) from regular two-horizon black holes (Class B) and 5D black-string Gregory–Laflamme instabilities along compactified extra dimensions below r_+ / R_AdS < 0.876.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 480" width="760" height="480" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="480" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="452" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">HAYWARD CORE COLLAPSE BOUNDARIES &amp; GREGORY–LAFLAMME STABILITY</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <!-- Left: Hayward Lapse Function f(r) -->
  <rect x="34" y="72" width="336" height="334" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="202" y="94" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">A. Hayward Lapse f(r) &amp; M_crit = 23.7744 ug</text>
  <line x1="72" y1="125" x2="72" y2="365" stroke="#0F0D0B" stroke-width="1.4"/>
  <line x1="72" y1="280" x2="344" y2="280" stroke="#0F0D0B" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="64" y="284" text-anchor="end" font-size="9.5" fill="#0F0D0B">f=0</text>
  <text x="64" y="145" text-anchor="end" font-size="9.5" fill="#0F0D0B">f=1</text>

  <!-- Sub-critical horizonless soliton -->
  <path d="M 72 142 Q 145 215 215 170 T 338 145" fill="none" stroke="#64705B" stroke-width="2.4"/>
  <text x="242" y="156" font-size="9.5" font-weight="bold" fill="#64705B">M &lt; M_crit: Soliton</text>
  <!-- Critical extremal -->
  <path d="M 72 142 Q 145 280 210 280 T 338 145" fill="none" stroke="#3A2E26" stroke-width="1.8" stroke-dasharray="5,3"/>
  <circle cx="176" cy="280" r="4" fill="#3A2E26"/>
  <text x="176" y="302" text-anchor="middle" font-size="9.5" fill="#0F0D0B">Extremal (23.7744 ug)</text>
  <!-- Regular 2-horizon BH -->
  <path d="M 72 142 Q 130 345 205 330 T 338 152" fill="none" stroke="#8F5B4A" stroke-width="2.4"/>
  <text x="258" y="330" font-size="9.5" font-weight="bold" fill="#8F5B4A">M &gt; M_crit: Two Horizons</text>
  <text x="202" y="385" text-anchor="middle" font-size="9.5" fill="#0F0D0B">De Sitter core eliminates r=0 singularity (no throat)</text>

  <!-- Right: Gregory-Laflamme Instability -->
  <rect x="390" y="72" width="336" height="334" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="558" y="94" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">B. 5D String Gregory–Laflamme Pinchoff</text>
  <rect x="415" y="135" width="132" height="225" fill="#8F5B4A" opacity="0.14" stroke="#8F5B4A" stroke-width="1.2"/>
  <rect x="547" y="135" width="154" height="225" fill="#64705B" opacity="0.14" stroke="#64705B" stroke-width="1.2"/>
  <line x1="547" y1="120" x2="547" y2="370" stroke="#0F0D0B" stroke-width="2"/>
  <text x="547" y="114" text-anchor="middle" font-size="10" font-weight="bold" fill="#0F0D0B">r_+ / R_AdS = 0.876</text>

  <!-- Undulating string on left -->
  <path d="M 426 190 Q 454 176 482 195 T 536 188" fill="none" stroke="#8F5B4A" stroke-width="2.2"/>
  <path d="M 426 245 Q 454 260 482 240 T 536 247" fill="none" stroke="#8F5B4A" stroke-width="2.2"/>
  <text x="481" y="286" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#8F5B4A">GL UNSTABLE</text>
  <text x="481" y="302" text-anchor="middle" font-size="9" fill="#0F0D0B">Fragments to 5D BH</text>

  <!-- Smooth stable brane BH on right -->
  <line x1="564" y1="190" x2="684" y2="190" stroke="#64705B" stroke-width="2.2"/>
  <line x1="564" y1="245" x2="684" y2="245" stroke="#64705B" stroke-width="2.2"/>
  <text x="624" y="286" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#64705B">MODULI STABLE</text>
  <text x="624" y="302" text-anchor="middle" font-size="9" fill="#0F0D0B">Note: App. to Hayward assumed</text>

  <text x="380" y="438" text-anchor="middle" font-size="10.5" fill="#0F0D0B">Classes A–D yield zero traversable throats; Hayward core emits K_echo = 0.184 ringdown reflections only</text>
</svg>`
  },
  {
    id: 'h12-fig-6b',
    figureNumber: 'Figure H12-6B',
    anchorChapter: 6,
    title: 'Ford–Roman Quantum Inequality Envelope (tau^-4) & Orthonormal Tetrad Transverse Tide',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Quantitative breakdown of Chapter 6 negative theorems: Left, the Ford–Roman quantum inequality constrains negative energy density to rho_avg >= -3 hbar / (32 pi^2 c^3 tau^4), shutting down sustained macroscopic wormhole throats above Planck timescales. Right, Lorentz-boosted traveler transverse tidal acceleration Delta a_perp = gamma^2 v^2 Delta xi / r_0^2 computed from the exact Riemann component |R_{theta r theta r}(r_0)| = 1/r_0^2.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 480" width="760" height="480" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="480" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="452" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">FORD–ROMAN QUANTUM INEQUALITY &amp; WORMHOLE TRANSVERSE TIDAL STRESS</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <!-- Left Panel: Ford-Roman T^-4 decay -->
  <rect x="34" y="72" width="336" height="334" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="202" y="94" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">A. Ford–Roman Exotic Density Limit (~ tau^-4)</text>
  <line x1="80" y1="348" x2="342" y2="348" stroke="#0F0D0B" stroke-width="1.4"/>
  <line x1="80" y1="120" x2="80" y2="348" stroke="#0F0D0B" stroke-width="1.4"/>
  <line x1="80" y1="150" x2="340" y2="150" stroke="#8F5B4A" stroke-width="1.4" stroke-dasharray="4,3"/>
  <text x="210" y="140" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#8F5B4A">Required NEC Throat Deficit (r_0 = 1 m)</text>
  <path d="M 92 145 L 330 330" fill="none" stroke="#64705B" stroke-width="2.6"/>
  <circle cx="96" cy="148" r="4" fill="#64705B"/>
  <circle cx="290" cy="298" r="4" fill="#8F5B4A"/>
  <text x="165" y="176" font-size="9.5" fill="#64705B">tau ~ t_Pl (Planck Parity)</text>
  <text x="235" y="324" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#8F5B4A">tau &gt;&gt; t_Pl: -71 Orders Gap</text>
  <text x="205" y="384" text-anchor="middle" font-size="9.5" fill="#0F0D0B">Negative pulses must repay >100% positive flash</text>

  <!-- Right Panel: Tetrad Tide Geometry -->
  <rect x="390" y="72" width="336" height="334" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="558" y="94" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">B. Orthonormal Tetrad Transverse Tidal Force</text>
  <ellipse cx="558" cy="215" rx="95" ry="30" fill="#FFFFFF" stroke="#8F5B4A" stroke-width="2"/>
  <line x1="463" y1="215" x2="653" y2="215" stroke="#0F0D0B" stroke-width="1.2" stroke-dasharray="3,2"/>
  <text x="558" y="207" text-anchor="middle" font-size="10" font-weight="bold" fill="#0F0D0B">Throat Radius r_0 = r_min</text>
  <!-- Traveler arrow -->
  <line x1="558" y1="125" x2="558" y2="305" stroke="#64705B" stroke-width="2.5"/>
  <polygon points="558,312 553,300 563,300" fill="#64705B"/>
  <!-- Transverse tidal squeeze arrows -->
  <line x1="496" y1="254" x2="546" y2="254" stroke="#8F5B4A" stroke-width="2"/>
  <polygon points="550,254 542,250 542,258" fill="#8F5B4A"/>
  <line x1="620" y1="254" x2="570" y2="254" stroke="#8F5B4A" stroke-width="2"/>
  <polygon points="566,254 574,250 574,258" fill="#8F5B4A"/>
  <text x="558" y="336" text-anchor="middle" font-size="10" font-weight="bold" fill="#0F0D0B">Delta a_perp = gamma^2 v^2 |R_trtr| Delta xi</text>
  <text x="558" y="354" text-anchor="middle" font-size="10" fill="#8F5B4A">Exact at b'(r_0) = -1: |R_trtr| = 1 / r_0^2</text>
  <text x="558" y="376" text-anchor="middle" font-size="9.5" fill="#64705B">E_exotic(r_0) = -(pi / 2)(c^4 / G) r_0 (Exact)</text>

  <text x="380" y="438" text-anchor="middle" font-size="10.5" fill="#0F0D0B">Macroscopic r_0 = 1 m requires -1.0637e-3 M_sun exotic matter (4.50e-71 Casimir reach) with severe relativistic shear</text>
</svg>`
  },
  {
    id: 'h12-fig-7b',
    figureNumber: 'Figure H12-7B',
    anchorChapter: 7,
    title: 'Projective Fiber PU(H) Unbalanced Double-Slit Envelope & Born-Rule Independence',
    category: 'CATEGORY A — ESTABLISHED',
    caption:
      'Generalization of Figure H12-8 to asymmetric slit illumination probabilities p_1 != p_2 inside projective Hilbert space PU(H). Total predictability plus QFI distinguishability respects V^2 + D_QFI^2 <= 1, saturating at equality strictly on pure internal states regardless of bulk coordinate y. Born rule Born_4D = |psi|^2 remains an independent Category A postulate.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 480" width="760" height="480" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="480" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="452" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">UNBALANCED SLIT COMPLEMENTARITY IN PU(H) &amp; 5D INDEPENDENCE</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <!-- Left: Visibility vs Distinguishability Envelope -->
  <rect x="34" y="72" width="368" height="334" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="218" y="94" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">A. Asymmetric Slit Partition (p_1 + p_2 = 1)</text>
  <line x1="78" y1="348" x2="368" y2="348" stroke="#0F0D0B" stroke-width="1.4"/>
  <line x1="78" y1="120" x2="78" y2="348" stroke="#0F0D0B" stroke-width="1.4"/>
  <text x="223" y="370" text-anchor="middle" font-size="10" fill="#0F0D0B">Slit Path Imbalance P_bias = |p_1 - p_2|</text>
  <text x="64" y="234" text-anchor="middle" font-size="10" fill="#0F0D0B" transform="rotate(-90 64 234)">Normalized Metric Value</text>

  <!-- Curves V_max = sqrt(1-P^2) and P -->
  <path d="M 78 135 A 213 213 0 0 1 291 348" fill="none" stroke="#64705B" stroke-width="2.6"/>
  <line x1="78" y1="348" x2="291" y2="135" stroke="#8F5B4A" stroke-width="2.4" stroke-dasharray="5,3"/>
  <circle cx="185" cy="170" r="4" fill="#64705B"/>
  <circle cx="185" cy="242" r="4" fill="#8F5B4A"/>
  <text x="150" y="158" font-size="9.5" font-weight="bold" fill="#64705B">V_max = 2 sqrt(p_1 p_2)</text>
  <text x="240" y="246" font-size="9.5" font-weight="bold" fill="#8F5B4A">D_QFI &gt;= |p_1 - p_2|</text>
  <text x="291" y="362" text-anchor="middle" font-size="9" fill="#0F0D0B">1.0</text>
  <text x="78" y="362" text-anchor="middle" font-size="9" fill="#0F0D0B">0.0</text>

  <!-- Right: Orthogonal Epistemic Box -->
  <rect x="418" y="72" width="308" height="334" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="572" y="94" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">B. Chapter 7 Orthogonality Audit</text>
  <rect x="438" y="114" width="268" height="82" fill="#F4F6F2" stroke="#64705B" stroke-width="1.3"/>
  <text x="572" y="136" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#64705B">1. Fiber Independence (Proved)</text>
  <text x="572" y="156" text-anchor="middle" font-size="9.5" fill="#0F0D0B">g_QFI on PU(H) does NOT shift with</text>
  <text x="572" y="172" text-anchor="middle" font-size="9.5" fill="#0F0D0B">5th bulk coordinate y (G_Ai = 0).</text>

  <rect x="438" y="212" width="268" height="82" fill="#FAF8F4" stroke="#3A2E26" stroke-width="1.3"/>
  <text x="572" y="234" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0F0D0B">2. Born Rule Status (Cat. A)</text>
  <text x="572" y="254" text-anchor="middle" font-size="9.5" fill="#0F0D0B">Prob(k) = |&lt;k|psi&gt;|^2 holds identically</text>
  <text x="572" y="270" text-anchor="middle" font-size="9.5" fill="#0F0D0B">independent of any 5D bulk postulate.</text>

  <rect x="438" y="310" width="268" height="76" fill="#FBF7F4" stroke="#8F5B4A" stroke-width="1.3"/>
  <text x="572" y="332" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#8F5B4A">3. Protocol P9 Experimental Target</text>
  <text x="572" y="352" text-anchor="middle" font-size="9.5" fill="#0F0D0B">Device D bounds anomalous bulk leakage</text>
  <text x="572" y="368" text-anchor="middle" font-size="9.5" fill="#0F0D0B">on V(gamma_coh) to |delta V| &lt; 10^-6.</text>

  <text x="380" y="438" text-anchor="middle" font-size="10.5" fill="#0F0D0B">Saturates V^2 + P_bias^2 + D_anc^2 = 1 exactly on pure states without invoking bulk teleportation</text>
</svg>`
  },
  {
    id: 'h12-fig-8a',
    figureNumber: 'Figure H12-8A',
    anchorChapter: 8,
    title: '5D Microcausality Commutator [O_A, O_B] = 0 & No-Communication Lock',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Algebraic quantum field theory proof from Chapter 8: operators O_A and O_B separated across the 5D spacelike interval ds_5^2 > 0 satisfy strict local commutativity [O_A, O_B] = 0. Tracing out Alice\'s branch fixes Bob\'s reduced marginal state rho_B = Tr_A[(U_A x I) rho_AB (U_A^dagger x I)] = Tr_A(rho_AB) identically, forbidding superluminal messaging.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 480" width="760" height="480" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="480" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="452" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">5D MICROCAUSALITY COMMUTATOR &amp; NO-COMMUNICATION INVARIANCE</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <!-- Left: 5D Light Cone & Spacelike Separation -->
  <rect x="34" y="72" width="356" height="334" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="212" y="94" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">A. 5D Spacelike Causal Independence</text>
  <!-- Cone A -->
  <polygon points="82,126 146,245 210,126" fill="#64705B" opacity="0.2" stroke="#64705B" stroke-width="1.5"/>
  <circle cx="146" cy="245" r="5" fill="#0F0D0B"/>
  <text x="146" y="268" text-anchor="middle" font-size="10" font-weight="bold" fill="#0F0D0B">Region A (Alice: U_A)</text>
  <!-- Cone B -->
  <polygon points="222,126 286,245 350,126" fill="#8F5B4A" opacity="0.2" stroke="#8F5B4A" stroke-width="1.5"/>
  <circle cx="286" cy="245" r="5" fill="#0F0D0B"/>
  <text x="286" y="268" text-anchor="middle" font-size="10" font-weight="bold" fill="#0F0D0B">Region B (Bob: O_B)</text>

  <!-- Spacelike separation arrow -->
  <line x1="152" y1="245" x2="280" y2="245" stroke="#0F0D0B" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="216" y="236" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#8F5B4A">ds_5^2 &gt; 0 (5D Spacelike)</text>

  <rect x="54" y="294" width="316" height="90" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="212" y="318" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">[ O_A , O_B ] = 0 identically in M_5</text>
  <text x="212" y="340" text-anchor="middle" font-size="9.5" fill="#64705B">Preserved by standard 5D QFT microcausality;</text>
  <text x="212" y="356" text-anchor="middle" font-size="9.5" fill="#64705B">does NOT constitute a new H12 theorem.</text>

  <!-- Right: No-Signaling Partial Trace Circuit -->
  <rect x="406" y="72" width="320" height="334" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="566" y="94" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">B. Partial Trace Signaling Firewall</text>
  <rect x="436" y="118" width="260" height="46" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.3"/>
  <text x="566" y="145" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0F0D0B">Shared State rho_AB in H_A x H_B</text>
  <line x1="496" y1="164" x2="496" y2="210" stroke="#0F0D0B" stroke-width="1.6"/>
  <line x1="636" y1="164" x2="636" y2="292" stroke="#64705B" stroke-width="1.6"/>
  <rect x="436" y="210" width="120" height="46" fill="#EFEAE1" stroke="#8F5B4A" stroke-width="1.5"/>
  <text x="496" y="232" text-anchor="middle" font-size="10" font-weight="bold" fill="#8F5B4A">Local Unitary U_A</text>
  <text x="496" y="246" text-anchor="middle" font-size="9" fill="#0F0D0B">+ Trace Out Tr_A</text>
  <line x1="496" y1="256" x2="496" y2="282" stroke="#8F5B4A" stroke-width="1.4" stroke-dasharray="3,2"/>
  <line x1="496" y1="282" x2="566" y2="282" stroke="#8F5B4A" stroke-width="1.4" stroke-dasharray="3,2"/>
  <text x="526" y="274" font-size="9" fill="#8F5B4A">X Blocked</text>

  <rect x="436" y="292" width="260" height="92" fill="#F4F6F2" stroke="#64705B" stroke-width="1.5"/>
  <text x="566" y="316" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0F0D0B">Bob's Reduced Density Matrix</text>
  <text x="566" y="338" text-anchor="middle" font-size="10" fill="#0F0D0B">rho_B' = Tr_A[(U_A x I) rho_AB (U_A^d x I)]</text>
  <text x="566" y="358" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#64705B">= Tr_A(rho_AB) = rho_B  (Zero Bit Rate)</text>

  <text x="380" y="438" text-anchor="middle" font-size="10.5" fill="#0F0D0B">Entanglement shares joint correlations (OTOC) cleanly inside the 5D light cone without violating causal ordering</text>
</svg>`
  },
  {
    id: 'h12-fig-8b',
    figureNumber: 'Figure H12-8B',
    anchorChapter: 8,
    title: 'ER = EPR Geometric Wormhole vs. Pure 4D Entanglement & Classical Channel Lock',
    category: 'CATEGORY C — CONJECTURAL',
    caption:
      'Clarifying the distinction drawn in Chapter 8 between holographic ER = EPR thermofield-double entanglement (non-traversable unless coupled by a causal classical message channel, as in Device E Track E2) and Category D physical spacetime portals. No pure quantum entanglement transfers classical bits without a subluminal classical bit-stream obeying causal propagation bounds.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 480" width="760" height="480" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="480" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="452" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">ER = EPR CORRELATIONS vs. CLASSICAL-CHANNEL CAUSAL BOTTLENECK</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <!-- Left Boundary CFT_L -->
  <rect x="44" y="92" width="170" height="250" fill="#F4F6F2" stroke="#64705B" stroke-width="1.6"/>
  <text x="129" y="116" text-anchor="middle" font-size="11" font-weight="bold" fill="#64705B">Subsystem L (CFT_L)</text>
  <circle cx="129" cy="175" r="24" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.4"/>
  <text x="129" y="179" text-anchor="middle" font-size="10" fill="#0F0D0B">O_L(t)</text>
  <text x="129" y="236" text-anchor="middle" font-size="9.5" fill="#0F0D0B">Local Measurement</text>
  <text x="129" y="254" text-anchor="middle" font-size="9.5" fill="#0F0D0B">+ Scrambling Gate</text>
  <text x="129" y="316" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#64705B">Entropy S_EE &gt; 0</text>

  <!-- Right Boundary CFT_R -->
  <rect x="546" y="92" width="170" height="250" fill="#FBF7F4" stroke="#8F5B4A" stroke-width="1.6"/>
  <text x="631" y="116" text-anchor="middle" font-size="11" font-weight="bold" fill="#8F5B4A">Subsystem R (CFT_R)</text>
  <circle cx="631" cy="175" r="24" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.4"/>
  <text x="631" y="179" text-anchor="middle" font-size="10" fill="#0F0D0B">O_R(t)</text>
  <text x="631" y="236" text-anchor="middle" font-size="9.5" fill="#0F0D0B">Readout Receiver</text>
  <text x="631" y="254" text-anchor="middle" font-size="9.5" fill="#0F0D0B">(Requires C-Bits)</text>
  <text x="631" y="316" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#8F5B4A">Mutual Info I(L:R)</text>

  <!-- Center Wormhole / Non-traversable Bridge -->
  <path d="M 214 140 Q 380 190 546 140" fill="none" stroke="#3A2E26" stroke-width="2.2"/>
  <path d="M 214 210 Q 380 160 546 210" fill="none" stroke="#3A2E26" stroke-width="2.2"/>
  <text x="380" y="135" text-anchor="middle" font-size="10" font-weight="bold" fill="#0F0D0B">Thermofield Double State |TFD&gt;</text>
  <rect x="275" y="156" width="210" height="38" fill="#EFEAE1" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="173" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#8F5B4A">NON-TRAVERSABLE ALONE</text>
  <text x="380" y="187" text-anchor="middle" font-size="9" fill="#0F0D0B">(Gao–Jafferis–Wall Coupling Needed)</text>

  <!-- Subluminal Classical Channel -->
  <line x1="214" y1="292" x2="540" y2="292" stroke="#0F0D0B" stroke-width="2.4"/>
  <polygon points="546,292 534,287 534,297" fill="#0F0D0B"/>
  <text x="380" y="278" text-anchor="middle" font-size="10" font-weight="bold" fill="#0F0D0B">Mandatory Classical Interaction H_int = g O_L O_R (Speed v &lt;= c)</text>
  <text x="380" y="312" text-anchor="middle" font-size="9.5" fill="#64705B">Device E Track E2 tests OTOC scrambling within this channel limit</text>

  <rect x="44" y="362" width="672" height="72" fill="#F7F5F0" stroke="#8E7F6B" stroke-width="1.2"/>
  <text x="380" y="388" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0F0D0B">Chapter 8 Epistemic Verdict (Strong Separation): ER = EPR is dual to bulk connectivity in AdS/CFT,</text>
  <text x="380" y="408" text-anchor="middle" font-size="10" fill="#3A2E26">NOT a Category A/B physical tunnel for macroscopic signaling outside the causal light cone.</text>
</svg>`
  },
  {
    id: 'h12-fig-9a',
    figureNumber: 'Figure H12-9A',
    anchorChapter: 9,
    title: 'Structural Architecture of Negative No-Go Theorems Across 5D Metric, NEC & Quantum Sectors',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Visual synthesis of Chapter 9 demonstrating why the negative theorems constitute the strongest derived core of IGRT-H12. Four independent mathematical locks—Beltrami Variational Positivity, Morris–Thorne Casimir Shortfall, Ford–Roman Quantum Inequality Decay, and AQFT Microcausality—jointly rule out physical spacetime portals across symmetric, warped, and quantum sectors.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 480" width="760" height="480" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="480" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="452" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">TAXONOMY OF CHAPTER 9 NEGATIVE NO-GO THEOREMS (CATEGORY B STRONGEST CORE)</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <!-- Central Node -->
  <rect x="235" y="200" width="290" height="82" fill="#3A2E26" stroke="#0F0D0B" stroke-width="1.8"/>
  <text x="380" y="232" text-anchor="middle" font-size="12" font-weight="bold" fill="#FFFFFF">PHYSICAL PORTALS RULED OUT</text>
  <text x="380" y="252" text-anchor="middle" font-size="10" fill="#EAE2D2">Closed by Four Independent Derivations</text>
  <text x="380" y="268" text-anchor="middle" font-size="9.5" fill="#FFFFFF">All 5 Negative Theorems Verified (100%)</text>

  <!-- Pillar 1 -->
  <rect x="42" y="74" width="296" height="104" fill="#FAF8F4" stroke="#64705B" stroke-width="1.5"/>
  <text x="190" y="96" text-anchor="middle" font-size="11" font-weight="bold" fill="#64705B">LOCK I · SYMMETRIC / RS NO-GO</text>
  <text x="190" y="116" text-anchor="middle" font-size="10" fill="#0F0D0B">Model 1 (S^1): eta_fold = 1.001249 &gt; 1</text>
  <text x="190" y="134" text-anchor="middle" font-size="10" fill="#0F0D0B">Model 2A (RS AdS_5): eta_fold = 1.010321 &gt; 1</text>
  <text x="190" y="156" text-anchor="middle" font-size="9.5" fill="#3A2E26">Conformally flat bulks lengthen coordinate time</text>

  <!-- Pillar 2 -->
  <rect x="422" y="74" width="296" height="104" fill="#FAF8F4" stroke="#8F5B4A" stroke-width="1.5"/>
  <text x="570" y="96" text-anchor="middle" font-size="11" font-weight="bold" fill="#8F5B4A">LOCK II · CASIMIR NEC DEFICIT</text>
  <text x="570" y="116" text-anchor="middle" font-size="10" fill="#0F0D0B">1 m Throat Needs -1.0637e-3 M_sun Exotic Mass</text>
  <text x="570" y="134" text-anchor="middle" font-size="10" fill="#0F0D0B">Casimir Attains Only 4.50e-71 (2.22e70 short)</text>
  <text x="570" y="156" text-anchor="middle" font-size="9.5" fill="#3A2E26">Macroscopic Morris–Thorne throats closed</text>

  <!-- Pillar 3 -->
  <rect x="42" y="304" width="296" height="104" fill="#FAF8F4" stroke="#8F5B4A" stroke-width="1.5"/>
  <text x="190" y="326" text-anchor="middle" font-size="11" font-weight="bold" fill="#8F5B4A">LOCK III · FORD–ROMAN &amp; EM CEILING</text>
  <text x="190" y="346" text-anchor="middle" font-size="10" fill="#0F0D0B">Quantum Inequality Decays as T^-4</text>
  <text x="190" y="364" text-anchor="middle" font-size="10" fill="#0F0D0B">EM Bulk Horizon Stops at k*dx &lt; pi (eta &gt;= 0.637)</text>
  <text x="190" y="386" text-anchor="middle" font-size="9.5" fill="#3A2E26">Forbids unbounded or long-lived bulk shortcuts</text>

  <!-- Pillar 4 -->
  <rect x="422" y="304" width="296" height="104" fill="#FAF8F4" stroke="#64705B" stroke-width="1.5"/>
  <text x="570" y="326" text-anchor="middle" font-size="11" font-weight="bold" fill="#64705B">LOCK IV · HAYWARD &amp; CHRONOLOGY</text>
  <text x="570" y="346" text-anchor="middle" font-size="10" fill="#0F0D0B">Hayward Core Obeys NEC (p_r = -rho &lt;=&gt; No Throat)</text>
  <text x="570" y="364" text-anchor="middle" font-size="10" fill="#0F0D0B">[O_A, O_B] = 0 + Araki Entropy Preserve Causality</text>
  <text x="570" y="386" text-anchor="middle" font-size="9.5" fill="#3A2E26">Zero FTL bits, zero CTC paradoxes in M_5</text>

  <!-- Arrows into Center -->
  <line x1="255" y1="178" x2="290" y2="200" stroke="#0F0D0B" stroke-width="1.6"/>
  <line x1="505" y1="178" x2="470" y2="200" stroke="#0F0D0B" stroke-width="1.6"/>
  <line x1="255" y1="304" x2="290" y2="282" stroke="#0F0D0B" stroke-width="1.6"/>
  <line x1="505" y1="304" x2="470" y2="282" stroke="#0F0D0B" stroke-width="1.6"/>

  <text x="380" y="440" text-anchor="middle" font-size="10.5" fill="#0F0D0B">What remains viable: Mathematical Portals (Cat. C geometry) and benchtop optical/quantum analogs below c (Cat. D)</text>
</svg>`
  },
  {
    id: 'h12-fig-9b',
    figureNumber: 'Figure H12-9B',
    anchorChapter: 9,
    title: 'Quantitative Impossibility Gap Spectrum Across 71 Orders of Magnitude',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Log10 summary scale ranking physical suppression barriers and negative-theorem margins proved in Chapters 2, 6, 9, and 12: from Planck-scale O(1) Casimir parity (0.2436) down to atomic 1 neV KK decoupling (4.972e-14), GW170817 arrival limits (4.129e-16), and macroscopic 1 m Morris–Thorne Casimir deficits (4.50e-71).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 480" width="760" height="480" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="480" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="452" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">QUANTITATIVE IMPOSSIBILITY &amp; DECOUPLING SPECTRUM (LOG10 SCALE)</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <!-- Axis -->
  <line x1="255" y1="84" x2="255" y2="412" stroke="#0F0D0B" stroke-width="1.5"/>
  <line x1="255" y1="412" x2="700" y2="412" stroke="#0F0D0B" stroke-width="1.5"/>
  <text x="255" y="430" text-anchor="middle" font-size="9.5" fill="#0F0D0B">0</text>
  <text x="372" y="430" text-anchor="middle" font-size="9.5" fill="#0F0D0B">-20</text>
  <text x="488" y="430" text-anchor="middle" font-size="9.5" fill="#0F0D0B">-40</text>
  <text x="605" y="430" text-anchor="middle" font-size="9.5" fill="#0F0D0B">-60</text>
  <text x="692" y="430" text-anchor="middle" font-size="9.5" fill="#8F5B4A">-75 (Gap)</text>
  <text x="480" y="450" text-anchor="middle" font-size="10" font-weight="bold" fill="#0F0D0B">Magnitude Bar: |log10(Suppression / Shortfall Ratio)|</text>

  <!-- Bars (length ~ 5.8 px per decade) -->
  <text x="242" y="116" text-anchor="end" font-size="10.5" fill="#0F0D0B">1. Planck Parity r0 = l_0</text>
  <rect x="255" y="100" width="10" height="22" fill="#64705B"/>
  <text x="275" y="116" font-size="10" fill="#64705B">0.2436 (log10 = -0.61)</text>

  <text x="242" y="168" text-anchor="end" font-size="10.5" fill="#0F0D0B">2. 4 K Cavity delta_KK</text>
  <rect x="255" y="152" width="16" height="22" fill="#64705B"/>
  <text x="280" y="168" font-size="10" fill="#64705B">5.873e-3 (log10 = -2.23)</text>

  <text x="242" y="220" text-anchor="end" font-size="10.5" fill="#0F0D0B">3. H11 1 neV Clocks delta_KK</text>
  <rect x="255" y="204" width="77" height="22" fill="#3A2E26"/>
  <text x="342" y="220" font-size="10" fill="#0F0D0B">4.972e-14 (log10 = -13.30)</text>

  <text x="242" y="272" text-anchor="end" font-size="10.5" fill="#0F0D0B">4. GW170817 Passive Eta Bound</text>
  <rect x="255" y="256" width="90" height="22" fill="#64705B"/>
  <text x="355" y="272" font-size="10" fill="#64705B">4.129e-16 (log10 = -15.38)</text>

  <text x="242" y="324" text-anchor="end" font-size="10.5" fill="#0F0D0B">5. Micron Throat r0 = 1 um</text>
  <rect x="255" y="308" width="338" height="22" fill="#8E7F6B"/>
  <text x="602" y="324" font-size="10" fill="#3A2E26">4.50e-59 (-58.35)</text>

  <text x="242" y="376" text-anchor="end" font-size="10.5" font-weight="bold" fill="#8F5B4A">6. 1 m Wormhole Casimir Gap</text>
  <rect x="255" y="360" width="408" height="22" fill="#8F5B4A"/>
  <text x="580" y="352" font-size="10" font-weight="bold" fill="#8F5B4A">4.50e-71 (log10 = -70.35)</text>
</svg>`
  },
  {
    id: 'h12-fig-10a',
    figureNumber: 'Figure H12-10A',
    anchorChapter: 10,
    title: 'Multi-Regulator Convergence Audit (Tree / PV / HK / DimReg / FRG) & 5D Uniqueness',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Scheme-independence verification across five UV regulators evaluated in Table 2.2 & Chapter 10 at E = 1 neV: Tree, Pauli–Villars, and Heat-Kernel agree to 4.9721 x 10^-14; Zeta KK sum multiplies by pi^2/6 = 8.179e-14; DimReg and Litim Functional Renormalization Group (FRG) remain strictly bounded at 1.925e-14 and 3.149e-16, confirming zero regulator artifact on the 4D H11 limit.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 480" width="760" height="480" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="480" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="452" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">MULTI-REGULATOR CONVERGENCE &amp; UNIQUE 5D vs. 4D DISCRIMINATORS</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <!-- Top: 5 Regulator Bars -->
  <rect x="38" y="70" width="684" height="202" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="92" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">A. Perturbative &amp; FRG Regulator Deviations at 1 neV Optical Clocks (Ceiling &lt; 10^-13)</text>

  <text x="58" y="122" font-size="10.5" fill="#0F0D0B">Tree / Pauli-Villars / Heat Kernel</text>
  <rect x="300" y="108" width="235" height="18" fill="#64705B"/>
  <text x="546" y="121" font-size="10" font-weight="bold" fill="#64705B">4.9721 x 10^-14</text>

  <text x="58" y="154" font-size="10.5" fill="#0F0D0B">Full Zeta KK Tower Sum (pi^2/6)</text>
  <rect x="300" y="140" width="305" height="18" fill="#8F5B4A"/>
  <text x="615" y="153" font-size="10" font-weight="bold" fill="#8F5B4A">8.1787 x 10^-14</text>

  <text x="58" y="186" font-size="10.5" fill="#0F0D0B">Dimensional Regularization (DimReg)</text>
  <rect x="300" y="172" width="160" height="18" fill="#3A2E26"/>
  <text x="470" y="185" font-size="10" fill="#0F0D0B">1.9252 x 10^-14</text>

  <text x="58" y="218" font-size="10.5" fill="#0F0D0B">Non-Perturbative FRG (Litim Cutoff)</text>
  <rect x="300" y="204" width="62" height="18" fill="#8E7F6B"/>
  <text x="372" y="217" font-size="10" fill="#3A2E26">3.1486 x 10^-16</text>

  <line x1="650" y1="100" x2="650" y2="255" stroke="#0F0D0B" stroke-width="1.3" stroke-dasharray="4,3"/>
  <text x="642" y="248" text-anchor="end" font-size="9.5" fill="#0F0D0B">Experimental Clock Stability Threshold (~10^-13)</text>

  <!-- Bottom: Unique 5D vs 4D split -->
  <rect x="38" y="286" width="332" height="154" fill="#FFFFFF" stroke="#64705B" stroke-width="1.4"/>
  <text x="204" y="308" text-anchor="middle" font-size="11" font-weight="bold" fill="#64705B">Reproduced Purely Inside 4D H11 (Zero 5D Needed)</text>
  <text x="54" y="332" font-size="10" fill="#0F0D0B">• Double-Slit V^2 + D_QFI^2 = 1</text>
  <text x="54" y="352" font-size="10" fill="#0F0D0B">• Hayward Core Echoes K_echo = 0.184</text>
  <text x="54" y="372" font-size="10" fill="#0F0D0B">• Chameleon Screening 2.44 meV (P5)</text>
  <text x="54" y="392" font-size="10" fill="#0F0D0B">• Ekpyrotic B-Mode Tilt r &lt; 0.036 (P3)</text>
  <text x="54" y="420" font-size="9.5" font-weight="bold" fill="#64705B">Note: No 5D phenomenon has been observed.</text>

  <rect x="390" y="286" width="332" height="154" fill="#FFFFFF" stroke="#8F5B4A" stroke-width="1.4"/>
  <text x="556" y="308" text-anchor="middle" font-size="11" font-weight="bold" fill="#8F5B4A">Unique 5D Signatures (Empirical Targets)</text>
  <text x="406" y="332" font-size="10" fill="#0F0D0B">• Sub-44 um Yukawa Force (P7 / Device B)</text>
  <text x="406" y="352" font-size="10" fill="#0F0D0B">• Radial Scalar GW Leakage (P10 / ET+CE)</text>
  <text x="406" y="372" font-size="10" fill="#0F0D0B">• High-E Dispersion / Colliders (LHC KK)</text>
  <text x="406" y="392" font-size="10" fill="#0F0D0B">• BBN Dark-Radiation Delta N_eff &lt; 0.28</text>
  <text x="406" y="420" font-size="9.5" font-weight="bold" fill="#8F5B4A">All currently null — cleanly bounded in Table 10.3</text>
</svg>`
  },
  {
    id: 'h12-fig-11a',
    figureNumber: 'Figure H12-11A',
    anchorChapter: 11,
    title: 'Epistemic Derivation Boundary Map: Derived Proofs (Cat. A/B) vs. Assumed Axioms (Cat. C/D)',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Audit diagram of Chapter 11 (Table 11.1) showing exact boundaries between mathematically proven results and postulated inputs. Left branch isolates derived invariants (No-Go theorems, Casimir deficits, 4D decoupling); right branch itemizes the six non-derived assumptions requiring future UV dynamics or observational discovery.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 480" width="760" height="480" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="480" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="452" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">CHAPTER 11 BOUNDARY AUDIT: WHAT IS DERIVED vs. WHAT IS NOT DERIVED</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <!-- Derived Column -->
  <rect x="34" y="72" width="320" height="366" fill="#F4F6F2" stroke="#64705B" stroke-width="1.6"/>
  <rect x="34" y="72" width="320" height="28" fill="#64705B"/>
  <text x="194" y="90" text-anchor="middle" font-size="11" font-weight="bold" fill="#FFFFFF">DERIVED &amp; PROVEN (CAT. A / B)</text>
  <text x="48" y="124" font-size="10.5" font-weight="bold" fill="#0F0D0B">1. 4D Embedding Preservation</text>
  <text x="48" y="140" font-size="9.5" fill="#3A2E26">Sasaki-Shiromizu &amp; G_Ai = 0 keep H11 intact.</text>
  <text x="48" y="172" font-size="10.5" font-weight="bold" fill="#0F0D0B">2. Symmetric &amp; AdS_5 No-Go</text>
  <text x="48" y="188" font-size="9.5" fill="#3A2E26">dt_5 &gt;= dt_4 proved by Beltrami Euler-Lagrange.</text>
  <text x="48" y="220" font-size="10.5" font-weight="bold" fill="#0F0D0B">3. Wormhole Casimir Shortfall</text>
  <text x="48" y="236" font-size="9.5" fill="#3A2E26">4.50e-71 ratio proved across r = r_0 sec(u).</text>
  <text x="48" y="268" font-size="10.5" font-weight="bold" fill="#0F0D0B">4. EM Finite Horizon Bound</text>
  <text x="48" y="284" font-size="9.5" fill="#3A2E26">eta_min = 2/pi at k*dx = pi proved analytically.</text>
  <text x="48" y="316" font-size="10.5" font-weight="bold" fill="#0F0D0B">5. 5D Microcausality Lock</text>
  <text x="48" y="332" font-size="9.5" fill="#3A2E26">[O_A, O_B] = 0 enforces no-communication theorem.</text>
  <text x="48" y="364" font-size="10.5" font-weight="bold" fill="#0F0D0B">6. P13 Passive Arrival Bound</text>
  <text x="48" y="380" font-size="9.5" fill="#3A2E26">GW170817 1.7s / 40 Mpc yields |eta-1| &lt;= 4.13e-16.</text>

  <!-- Central Gap Divider -->
  <line x1="380" y1="74" x2="380" y2="438" stroke="#0F0D0B" stroke-width="1.8" stroke-dasharray="6,4"/>
  <rect x="352" y="225" width="56" height="44" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.3"/>
  <text x="380" y="244" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#8F5B4A">STRICT</text>
  <text x="380" y="258" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#8F5B4A">GAP</text>

  <!-- Non-Derived Column -->
  <rect x="406" y="72" width="320" height="366" fill="#FBF7F4" stroke="#8F5B4A" stroke-width="1.6"/>
  <rect x="406" y="72" width="320" height="28" fill="#8F5B4A"/>
  <text x="566" y="90" text-anchor="middle" font-size="11" font-weight="bold" fill="#FFFFFF">NON-DERIVED / POSTULATED (CAT. A, C, D)</text>
  <text x="420" y="124" font-size="10.5" font-weight="bold" fill="#0F0D0B">1. Asymmetric Metric Eq. (H12.0.1)</text>
  <text x="420" y="140" font-size="9.5" fill="#8F5B4A">Reason: Postulated ansatz; missing stress-energy source.</text>
  <text x="420" y="172" font-size="10.5" font-weight="bold" fill="#0F0D0B">2. Modular Time Lock Eq. (H12.0.2)</text>
  <text x="420" y="188" font-size="9.5" fill="#8F5B4A">Reason: Proposed bridge; assumes KMS-metric identity.</text>
  <text x="420" y="220" font-size="10.5" font-weight="bold" fill="#0F0D0B">3. Radion Mass / Size Stabilization</text>
  <text x="420" y="236" font-size="9.5" fill="#8F5B4A">Reason: Assumes Goldberger-Wise scalar potential.</text>
  <text x="420" y="268" font-size="10.5" font-weight="bold" fill="#0F0D0B">4. Coupled Hayward GL Threshold</text>
  <text x="420" y="284" font-size="9.5" fill="#8F5B4A">Reason: Extrapolated from Schwarzschild-AdS strings.</text>
  <text x="420" y="316" font-size="10.5" font-weight="bold" fill="#0F0D0B">5. Born Rule &amp; Gauge Group</text>
  <text x="420" y="332" font-size="9.5" fill="#8F5B4A">Reason: Imported Category A axioms from QM / SM.</text>
  <text x="420" y="364" font-size="10.5" font-weight="bold" fill="#0F0D0B">6. Portal Concepts (Appendix L)</text>
  <text x="420" y="380" font-size="9.5" fill="#8F5B4A">Reason: Theoretical speculations, not engineering specs.</text>
</svg>`
  },
  {
    id: 'h12-fig-11b',
    figureNumber: 'Figure H12-11B',
    anchorChapter: 11,
    title: 'Missing Dynamic Mechanism Flow: Einstein Tensor G_AB Source Deficit for Asymmetric Warp',
    category: 'CATEGORY C — CONJECTURAL',
    caption:
      'Chain-of-causation audit illustrating Chapter 11\'s central physical disclosure: while the asymmetric Model 2B metric cleanly parameterizes geometric shortcuts mathematically (right box), substituting alpha_t != alpha_x into the 5D Einstein tensor G_AB requires an exotic anisotropic bulk stress tensor T_AB without any currently known physical generation mechanism (broken link on left).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 480" width="760" height="480" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="480" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="452" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">MECHANISM GAP AUDIT: SOURCE MATTER vs. 5D ASYMMETRIC WARP FIELD</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <!-- Step 1 -->
  <rect x="44" y="108" width="186" height="145" fill="#FBF7F4" stroke="#8F5B4A" stroke-width="1.6"/>
  <text x="137" y="134" text-anchor="middle" font-size="11" font-weight="bold" fill="#8F5B4A">1. STRESS-ENERGY SOURCE</text>
  <text x="137" y="162" text-anchor="middle" font-size="10" fill="#0F0D0B">Required Bulk T_AB</text>
  <text x="137" y="182" text-anchor="middle" font-size="9.5" fill="#0F0D0B">Needs anisotropic p_y != -rho</text>
  <text x="137" y="202" text-anchor="middle" font-size="9.5" fill="#0F0D0B">violating symmetric S^1 / AdS_5</text>
  <text x="137" y="228" text-anchor="middle" font-size="10" font-weight="bold" fill="#8F5B4A">STATUS: UNKNOWN MECHANISM</text>

  <!-- Broken Link -->
  <line x1="230" y1="180" x2="270" y2="180" stroke="#8F5B4A" stroke-width="2" stroke-dasharray="4,3"/>
  <circle cx="282" cy="180" r="14" fill="#FFFFFF" stroke="#8F5B4A" stroke-width="2"/>
  <line x1="274" y1="172" x2="290" y2="188" stroke="#8F5B4A" stroke-width="2.2"/>
  <line x1="274" y1="188" x2="290" y2="172" stroke="#8F5B4A" stroke-width="2.2"/>
  <line x1="296" y1="180" x2="326" y2="180" stroke="#8F5B4A" stroke-width="2" stroke-dasharray="4,3"/>

  <!-- Step 2 -->
  <rect x="326" y="108" width="194" height="145" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.5"/>
  <text x="423" y="134" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">2. EINSTEIN FIELD EQUATIONS</text>
  <text x="423" y="164" text-anchor="middle" font-size="10.5" fill="#0F0D0B">G_AB + Lambda_5 g_AB = k_5 T_AB</text>
  <text x="423" y="190" text-anchor="middle" font-size="9.5" fill="#3A2E26">Metric coefficients A_t, A_x</text>
  <text x="423" y="208" text-anchor="middle" font-size="9.5" fill="#3A2E26">demand net alpha_t + alpha_x &gt; 0</text>
  <text x="423" y="232" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#8F5B4A">UNSOLVED DYNAMICAL STEP</text>

  <!-- Valid kinematic arrow -->
  <line x1="520" y1="180" x2="554" y2="180" stroke="#64705B" stroke-width="2"/>
  <polygon points="560,180 548,175 548,185" fill="#64705B"/>

  <!-- Step 3 -->
  <rect x="560" y="108" width="156" height="145" fill="#F4F6F2" stroke="#64705B" stroke-width="1.6"/>
  <text x="638" y="134" text-anchor="middle" font-size="11" font-weight="bold" fill="#64705B">3. KINEMATICS</text>
  <text x="638" y="162" text-anchor="middle" font-size="10" fill="#0F0D0B">Beltrami ODE</text>
  <text x="638" y="182" text-anchor="middle" font-size="9.5" fill="#0F0D0B">Given ansatz Eq.(H12.0.1),</text>
  <text x="638" y="200" text-anchor="middle" font-size="9.5" fill="#0F0D0B">dt_5 &lt; dt_4 solved</text>
  <text x="638" y="228" text-anchor="middle" font-size="10" font-weight="bold" fill="#64705B">EXACTLY VERIFIED</text>

  <!-- Summary Disclosure Box -->
  <rect x="44" y="292" width="672" height="132" fill="#EFEAE1" stroke="#0F0D0B" stroke-width="1.3"/>
  <text x="380" y="322" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">MANDATORY EPISTEMIC DISCLOSURE (CH. 1 &amp; CH. 11)</text>
  <text x="380" y="350" text-anchor="middle" font-size="10.5" fill="#0F0D0B">No physical mechanism is currently known that could produce the asymmetric warp required for shortcuts.</text>
  <text x="380" y="374" text-anchor="middle" font-size="10" fill="#3A2E26">Even in ghost-free Einstein–Maxwell 5D, radial static electric flux F_0y hits a finite horizon at k*dx = pi.</text>
  <text x="380" y="396" text-anchor="middle" font-size="10" fill="#64705B">Therefore Model 2B remains a kinematic benchmark metric rather than an engineering propulsion blueprint.</text>
</svg>`
  },
  {
    id: 'h12-fig-12b',
    figureNumber: 'Figure H12-12B',
    anchorChapter: 12,
    title: 'Protocol P7–P13 Sensitivity Horizon (2026–2035+), Joint Likelihood & P13 Error Budget',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Quantitative experimental roadmap of Chapter 12 (Tables 12.1–12.12). Top, projected 5D parameter reach from 2026–2029 bench probes (P7 CANNEX 10 um, P8 10^-19 clocks, P9 10^-6 slits) to 2035+ 3G gravitational-wave networks (P10 10^-3 leakage, P13 stacked 150-BNS timing sigma_eta = 9.916e-19). Bottom, breakdown of the P13 passive GW170817/GRB 170817A budget bounded cleanly to 4.129e-16.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 480" width="760" height="480" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="480" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="452" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">PROTOCOLS P7–P13 EXPERIMENTAL HORIZON &amp; P13 SYSTEMATIC BUDGET</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <!-- Timeline Axis -->
  <rect x="38" y="70" width="684" height="196" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="92" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">A. Coordinated Protocol Discovery Timeline (2026–2035+)</text>
  <line x1="72" y1="126" x2="692" y2="126" stroke="#0F0D0B" stroke-width="1.6"/>
  <text x="120" y="116" text-anchor="middle" font-size="10" font-weight="bold" fill="#64705B">2026 ACTIVE</text>
  <text x="330" y="116" text-anchor="middle" font-size="10" font-weight="bold" fill="#3A2E26">2027–2032 BENCH</text>
  <text x="580" y="116" text-anchor="middle" font-size="10" font-weight="bold" fill="#8F5B4A">2035+ 3G ERA</text>

  <rect x="54" y="142" width="160" height="106" fill="#FFFFFF" stroke="#64705B" stroke-width="1.4"/>
  <text x="134" y="162" text-anchor="middle" font-size="10" font-weight="bold" fill="#64705B">P13 Passive Bound</text>
  <text x="134" y="182" text-anchor="middle" font-size="9.5" fill="#0F0D0B">GW170817/GRB170817A</text>
  <text x="134" y="200" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0F0D0B">|eta - 1| &lt;= 4.129e-16</text>
  <text x="134" y="220" text-anchor="middle" font-size="9" fill="#64705B">(Passive data, not active)</text>

  <rect x="234" y="142" width="218" height="106" fill="#FFFFFF" stroke="#3A2E26" stroke-width="1.4"/>
  <text x="343" y="162" text-anchor="middle" font-size="10" font-weight="bold" fill="#0F0D0B">P7 · P8 · P9 Bulk Probes</text>
  <text x="343" y="182" text-anchor="middle" font-size="9.5" fill="#0F0D0B">P7 (Dev B): R_5 &lt;= 10 um (19.7 meV)</text>
  <text x="343" y="200" text-anchor="middle" font-size="9.5" fill="#0F0D0B">P8 (Dev A): |dv/v| &lt;= 10^-19 Clocks</text>
  <text x="343" y="218" text-anchor="middle" font-size="9.5" fill="#0F0D0B">P9 (Dev D): |dV| &lt;= 10^-6 Slits</text>

  <rect x="472" y="142" width="232" height="106" fill="#FFFFFF" stroke="#8F5B4A" stroke-width="1.4"/>
  <text x="588" y="162" text-anchor="middle" font-size="10" font-weight="bold" fill="#8F5B4A">P10 &amp; P13 Stacked 3G Network</text>
  <text x="588" y="182" text-anchor="middle" font-size="9.5" fill="#0F0D0B">P10 (Dev E1): Scalar Leak &lt;= 10^-3</text>
  <text x="588" y="200" text-anchor="middle" font-size="9.5" fill="#0F0D0B">P13 (150 BNS): sigma = 9.916e-19</text>
  <text x="588" y="220" text-anchor="middle" font-size="9" fill="#8F5B4A">P11–P12 Folding: Beyond Tech Reach</text>

  <!-- Bottom: P13 Systematic Error Breakdown -->
  <rect x="38" y="282" width="684" height="156" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="304" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">B. Protocol P13 Passive Multi-Messenger Error Budget (Tables 12.8–12.9)</text>
  <text x="58" y="330" font-size="10" fill="#0F0D0B">1. Intrinsic GRB Jet Engine Delay (1.7 s / 40 Mpc):</text>
  <text x="400" y="330" font-size="10" font-weight="bold" fill="#8F5B4A">sigma_eta = 4.129 x 10^-16 (Dominant Passive Anchor)</text>
  <text x="58" y="352" font-size="10" fill="#0F0D0B">2. Host Distance Calibration (NGC 4993 40 +/- 4 Mpc):</text>
  <text x="400" y="352" font-size="10" fill="#3A2E26">delta_D / D ~ 10% (Bounded cleanly inside 4.129e-16)</text>
  <text x="58" y="374" font-size="10" fill="#0F0D0B">3. Plasma Dispersion &amp; Shapiro Propagation:</text>
  <text x="400" y="374" font-size="10" fill="#64705B">&lt; 10^-18 residual (Subdominant across 40–150 Mpc)</text>
  <text x="58" y="396" font-size="10" fill="#0F0D0B">4. 3G ET+CE Multi-Messenger Stack (N = 150 BNS):</text>
  <text x="400" y="396" font-size="10" font-weight="bold" fill="#64705B">sigma_eta,3G = 9.916 x 10^-19 (330x sharper by 2035+)</text>
  <text x="380" y="424" text-anchor="middle" font-size="9.5" fill="#8E7F6B">Bayesian Occam penalty enforces strict null defaults until multi-sigma bulk detection occurs</text>
</svg>`
  },
  {
    id: 'h12-fig-13a',
    figureNumber: 'Figure H12-13A',
    anchorChapter: 13,
    title: 'Unified Resolution Matrix: Seven Fundamental Open Physics Problems (IGRT-H11 + H12)',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Architectural synthesis from Chapter 13 (Table 13.2) and Appendix K (Table K.1) summarizing how IGRT-H11 and IGRT-H12 jointly address seven longstanding foundational questions while preserving explicit epistemic labels: Canonical Problem of Time (Cat. B), Black-Hole Singularity & Information Echoes (Cat. B/C), Quantum Measurement Complementarity (Cat. A/B), Dark Matter / Dark Energy Spectrum (Cat. C), Hierarchy Stabilization (Cat. B/C), Chronology Protection (Cat. B), and Microcausality-Entanglement Compatibility (Cat. B).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 480" width="760" height="480" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="480" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="452" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">SEVEN OPEN PROBLEMS IN PHYSICS ADDRESSED BY IGRT-H11 + H12 (TABLE 13.2)</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <!-- Seven Problem Cards -->
  <rect x="34" y="70" width="338" height="78" fill="#F4F6F2" stroke="#64705B" stroke-width="1.3"/>
  <text x="48" y="92" font-size="10.5" font-weight="bold" fill="#0F0D0B">1. Problem of Time (Wheeler–DeWitt) [Cat. B]</text>
  <text x="48" y="110" font-size="9.5" fill="#3A2E26">Resolved via Araki KMS Flow &amp; QFI arc d tau = a_mod ds_QFI</text>
  <text x="48" y="128" font-size="9" fill="#64705B">Tested by Devices A &amp; J (KMS period 1.88365e-7 s)</text>

  <rect x="388" y="70" width="338" height="78" fill="#F4F6F2" stroke="#64705B" stroke-width="1.3"/>
  <text x="402" y="92" font-size="10.5" font-weight="bold" fill="#0F0D0B">2. BH Singularity &amp; Ringdown Echoes [Cat. B/C]</text>
  <text x="402" y="110" font-size="9.5" fill="#3A2E26">Hayward dS core r_core = 2.5389e-22 m; K_echo = 0.184</text>
  <text x="402" y="128" font-size="9" fill="#64705B">Tested by Protocol P4, Device E1 &amp; Device F (BEC)</text>

  <rect x="34" y="160" width="338" height="78" fill="#F7F5F0" stroke="#0F0D0B" stroke-width="1.3"/>
  <text x="48" y="182" font-size="10.5" font-weight="bold" fill="#0F0D0B">3. Wave–Particle Complementarity [Cat. A/B]</text>
  <text x="48" y="200" font-size="9.5" fill="#3A2E26">Exact identity V^2 + D_QFI^2 = 1 on fiber PU(H)</text>
  <text x="48" y="218" font-size="9" fill="#3A2E26">Tested to 10^-6 visibility by Device D (Protocol P9)</text>

  <rect x="388" y="160" width="338" height="78" fill="#FBF7F4" stroke="#8F5B4A" stroke-width="1.3"/>
  <text x="402" y="182" font-size="10.5" font-weight="bold" fill="#8F5B4A">4. Dark Sector &amp; Chameleon Screening [Cat. C]</text>
  <text x="402" y="200" font-size="9.5" fill="#3A2E26">ULDM clocks (P1) &amp; 2.44 meV chameleon scale (P5)</text>
  <text x="402" y="218" font-size="9" fill="#8F5B4A">Tested by Devices A, B &amp; LiteBIRD B-mode search (P3)</text>

  <rect x="34" y="250" width="338" height="78" fill="#FBF7F4" stroke="#8F5B4A" stroke-width="1.3"/>
  <text x="48" y="272" font-size="10.5" font-weight="bold" fill="#8F5B4A">5. Electroweak / Gravity Hierarchy [Cat. B/C]</text>
  <text x="48" y="290" font-size="9.5" fill="#3A2E26">Warped AdS_5 factor e^-35 = 6.305e-16; R_5 &lt;= 44 um</text>
  <text x="48" y="308" font-size="9" fill="#8F5B4A">Tested down to 10 um (19.73 meV) by Device B (P7)</text>

  <rect x="388" y="250" width="338" height="78" fill="#F4F6F2" stroke="#64705B" stroke-width="1.3"/>
  <text x="402" y="272" font-size="10.5" font-weight="bold" fill="#0F0D0B">6. Chronology &amp; Vacuum Thermodynamics [Cat. B]</text>
  <text x="402" y="290" font-size="9.5" fill="#3A2E26">NEC (-71 gap) + Ford-Roman + Araki 2nd Law protect time</text>
  <text x="402" y="308" font-size="9" fill="#64705B">Tested by Casimir calorimeter Dev I &amp; loop Dev H</text>

  <rect x="34" y="340" width="692" height="72" fill="#EFEAE1" stroke="#3A2E26" stroke-width="1.4"/>
  <text x="380" y="364" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">7. Entanglement vs. No-Signaling Microcausality [Category B Proven]</text>
  <text x="380" y="384" text-anchor="middle" font-size="10" fill="#3A2E26">5D microcausality [O_A, O_B] = 0 guarantees ER=EPR correlations carry zero FTL classical bits (Device E2 &amp; P13)</text>

  <text x="380" y="442" text-anchor="middle" font-size="10" fill="#0F0D0B">Every problem pairs explicit H11/H12 equations, falsification protocol, and preserved H11 SHA-256 digest</text>
</svg>`
  },
  {
    id: 'h12-fig-13b',
    figureNumber: 'Figure H12-13B',
    anchorChapter: 13,
    title: 'UV Completion Frontier: Flat M_5 Floor, Goldberger–Wise Stabilization & Open Problems OP-1..OP-6',
    category: 'CATEGORY C — CONJECTURAL',
    caption:
      'Roadmap of the remaining open mathematical frontiers (OP-1 to OP-6) above the observed Eot-Wash and LHC scales. Shows the logarithmic climb from sub-millimeter compactification (R_5 = 44 um) through the flat 5D Planck floor (2.985e8 GeV), Goldberger–Wise radion stabilization, and UV quantum gravity completion near M_Pl = 1.221e19 GeV.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 480" width="760" height="480" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="480" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="452" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">UV COMPLETION FRONTIER &amp; OPEN PROBLEMS LANDSCAPE (OP-1 TO OP-6)</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <!-- Energy Scale Bar -->
  <line x1="76" y1="126" x2="684" y2="126" stroke="#0F0D0B" stroke-width="2.6"/>
  <circle cx="110" cy="126" r="6" fill="#64705B"/>
  <circle cx="245" cy="126" r="6" fill="#3A2E26"/>
  <circle cx="405" cy="126" r="6" fill="#8F5B4A"/>
  <circle cx="545" cy="126" r="6" fill="#8F5B4A"/>
  <circle cx="658" cy="126" r="6" fill="#0F0D0B"/>

  <text x="110" y="104" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#64705B">4.485 meV</text>
  <text x="110" y="150" text-anchor="middle" font-size="9" fill="#0F0D0B">Eot-Wash KK Floor</text>

  <text x="245" y="104" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0F0D0B">~14 TeV</text>
  <text x="245" y="150" text-anchor="middle" font-size="9" fill="#0F0D0B">HL-LHC Frontier</text>

  <text x="405" y="104" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#8F5B4A">2.985e8 GeV</text>
  <text x="405" y="150" text-anchor="middle" font-size="9" fill="#8F5B4A">Flat M_5 Floor</text>

  <text x="545" y="104" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#8F5B4A">Radion V(phi)</text>
  <text x="545" y="150" text-anchor="middle" font-size="9" fill="#8F5B4A">Goldberger–Wise UV</text>

  <text x="658" y="104" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0F0D0B">1.221e19 GeV</text>
  <text x="658" y="150" text-anchor="middle" font-size="9" fill="#0F0D0B">4D Planck Scale</text>

  <!-- Open Problems Grid OP-1..OP-6 -->
  <rect x="40" y="182" width="680" height="238" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="206" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">Six Explicit Open Mathematical &amp; Experimental Frontiers (Ch. 13.7)</text>

  <rect x="58" y="224" width="310" height="54" fill="#FFFFFF" stroke="#8F5B4A" stroke-width="1.1"/>
  <text x="70" y="244" font-size="10" font-weight="bold" fill="#8F5B4A">OP-1: Asymmetric Warp Source T_AB</text>
  <text x="70" y="262" font-size="9" fill="#0F0D0B">Derive or exclude dynamic Model 2B matter sector.</text>

  <rect x="392" y="224" width="310" height="54" fill="#FFFFFF" stroke="#64705B" stroke-width="1.1"/>
  <text x="404" y="244" font-size="10" font-weight="bold" fill="#64705B">OP-2: Non-Linear Coupled Hayward GL</text>
  <text x="404" y="262" font-size="9" fill="#0F0D0B">Compute full nonlinear 5D perturbations beyond r+/R_AdS.</text>

  <rect x="58" y="290" width="310" height="54" fill="#FFFFFF" stroke="#3A2E26" stroke-width="1.1"/>
  <text x="70" y="310" font-size="10" font-weight="bold" fill="#0F0D0B">OP-3: Radion Moduli Stabilization</text>
  <text x="70" y="328" font-size="9" fill="#0F0D0B">Constrain Goldberger–Wise potential from sub-mm tests.</text>

  <rect x="392" y="290" width="310" height="54" fill="#FFFFFF" stroke="#3A2E26" stroke-width="1.1"/>
  <text x="404" y="310" font-size="10" font-weight="bold" fill="#0F0D0B">OP-4: UV Regulator Matching to String/LQG</text>
  <text x="404" y="328" font-size="9" fill="#0F0D0B">Connect FRG-Litim 3.149e-16 scale to full UV theory.</text>

  <rect x="58" y="356" width="310" height="50" fill="#FFFFFF" stroke="#64705B" stroke-width="1.1"/>
  <text x="70" y="376" font-size="10" font-weight="bold" fill="#64705B">OP-5: 150-BNS 3G Multi-Messenger Stack</text>
  <text x="70" y="394" font-size="9" fill="#0F0D0B">Sharpen P13 passive limit to 9.916e-19 (2035+).</text>

  <rect x="392" y="356" width="310" height="50" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1.1"/>
  <text x="404" y="376" font-size="10" font-weight="bold" fill="#3A2E26">OP-6: Benchtop Quantum Analog Fidelity</text>
  <text x="404" y="394" font-size="9" fill="#0F0D0B">Advance Devices A–K precision without portal overclaims.</text>

  <text x="380" y="446" text-anchor="middle" font-size="10" fill="#0F0D0B">Preserves H11 SHA-256 Digest 57cf3f1cef74a45cd936663f1b017212e2f64b1bee05f55cdff9068a2b05048d intact</text>
</svg>`
  }
];
