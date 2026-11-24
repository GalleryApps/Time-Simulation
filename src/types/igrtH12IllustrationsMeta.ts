/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Metadata for all 26 scientific theory & dimension cutaway illustrations
 * across Chapters 1–13 of Paper 2 (IGRT-H12), 2 illustrations per chapter.
 * Kept pure TypeScript (no binary image imports) so Node/Markdown generators
 * stay lightweight and zero-asset-loader compatible.
 */

import type { H12EpistemicCategory } from './igrtH12Apparatus';

export interface H12TheoryIllustrationMeta {
  id: string;
  illustrationNumber: string;
  anchorChapter: number;
  title: string;
  bundleFilename: string;
  category: H12EpistemicCategory;
  description: string;
}

export const H12_THEORY_ILLUSTRATIONS_META: H12TheoryIllustrationMeta[] = [
  // Chapter 1 (2 illustrations)
  {
    id: 'h12-ill-ch1a',
    illustrationNumber: 'Illustration H12-1A',
    anchorChapter: 1,
    title: 'Principal Bundle Cutaway: 4D Brane M₄, Fifth Spatial Axis y & Orthogonal Fiber PU(H)',
    bundleFilename: 'ch01_brane_bundle.jpg',
    category: 'CATEGORY B — DERIVED',
    description:
      'Architectural cutaway showing the 4D Lorentzian brane sheet M₄ (y = 0) intersected orthogonally by the postulated fifth spatial coordinate y and coupled at a right angle (flat connection A^i_y = 0 ⇒ G_{Ai} = 0) to the projective-Hilbert state fiber PU(H). Because cross-metric terms vanish identically, all 665 4D IGRT-H11 laws remain unaffected on every bulk slice.'
  },
  {
    id: 'h12-ill-ch1b',
    illustrationNumber: 'Illustration H12-1B',
    anchorChapter: 1,
    title: 'Four-Tier Epistemic Firewall Monolith Separating Categories A–D',
    bundleFilename: 'ch01_epistemic_strata.jpg',
    category: 'CATEGORY A — ESTABLISHED',
    description:
      'Stratified cutaway separating Established 4D physics (Category A bedrock) and Derived 5D consequences (Category B structural core) beneath an impermeable central Epistemic Firewall, isolating Conjectural 5D bulk ansätze (Category C) and Speculative laboratory hardware concepts (Category D).'
  },

  // Chapter 2 (2 illustrations)
  {
    id: 'h12-ill-ch2a',
    illustrationNumber: 'Illustration H12-2A',
    anchorChapter: 2,
    title: 'Kaluza–Klein Circle Compactification M₄ × S¹ & ℤ₂ Orbifold Fixed-Plane Geometry',
    bundleFilename: 'ch02_kk_compactification.jpg',
    category: 'CATEGORY B — DERIVED',
    description:
      'Isometric lattice cutaway showing microscopic compactified circular S¹ fibers (radius floor R_5 ≤ 44 μm from Eöt-Wash torsion balances) attached across the 4D spacetime base alongside a ℤ₂ orbifold reflection plane supporting the massive Kaluza–Klein excitation tower m_KK(n) = n ℏc / R_5.'
  },
  {
    id: 'h12-ill-ch2b',
    illustrationNumber: 'Illustration H12-2B',
    anchorChapter: 2,
    title: 'Warped AdS₅ Bulk Throat Geometry: UV Planck Brane (y = 0) to IR TeV Brane (y = L)',
    bundleFilename: 'ch02_warped_bulk.jpg',
    category: 'CATEGORY C — CONJECTURAL',
    description:
      'Three-dimensional isometric cutaway of the five-dimensional anti-de Sitter bulk throat bridged by an exponential warp profile e^{-k|y|} descending from the ultraviolet Planck brane (y = 0) to the infrared TeV brane (y = L), illustrating how bulk warping generates hierarchy separation without altering local 4D quantum geometry.'
  },

  // Chapter 3 (2 illustrations)
  {
    id: 'h12-ill-ch3a',
    illustrationNumber: 'Illustration H12-3A',
    anchorChapter: 3,
    title: 'Stratified Operational Temporal Paths: Brane τ₄, Bulk Excursion τ₅ & Modular Flow τ_mod',
    bundleFilename: 'ch03_temporal_layers.jpg',
    category: 'CATEGORY C — CONJECTURAL',
    description:
      'Geometric comparison of three distinct operational clock layers connecting fixed events A and B: the straight 4D brane geodesic ruler τ₄ (Category A baseline), the curved 5D bulk null excursion rail τ₅ (Category C iff α_t + α_x > 0), and the helical Tomita–Takesaki modular flow ribbon τ_mod.'
  },
  {
    id: 'h12-ill-ch3b',
    illustrationNumber: 'Illustration H12-3B',
    anchorChapter: 3,
    title: 'Complex KMS Thermal-Time Analytic Strip Im(τ) ∈ [0, βℏ] & Rindler Horizon Wedge',
    bundleFilename: 'ch03_kms_manifold.jpg',
    category: 'CATEGORY B — DERIVED',
    description:
      'Architectural cutaway coupling a Rindler horizon wedge to the vertical complex modular-time analytic strip Im(τ) = βℏ = 2πc/a, visualizing the gauge-invariant Araki modular QFI arc dτ₅ = α_mod ds_QFI that anchors Eq. (H12.0.2) without breaking chronological ordering.'
  },

  // Chapter 4 (2 illustrations)
  {
    id: 'h12-ill-ch4a',
    illustrationNumber: 'Illustration H12-4A',
    anchorChapter: 4,
    title: 'Beltrami Shooting Geodesic Cutaway: Brane Ray (y = 0) vs. Deep Bulk Arch (y_peak)',
    bundleFilename: 'ch04_beltrami_geodesic.jpg',
    category: 'CATEGORY C — CONJECTURAL',
    description:
      'Isometric basin cutaway contrasting a brane-confined dashed light ray at y = 0 against a smooth Beltrami shooting geodesic plunging to turning depth y_peak inside an assumed asymmetric warp throat (c_eff(y) = c e^{(α_t+α_x)k|y|} > c), obeying ds₅² ≡ 0 (< 7 × 10⁻¹⁶) inside linearized radion regime |δΦ_rad/Φ_rad| ≪ (k y_peak)⁻¹.'
  },
  {
    id: 'h12-ill-ch4b',
    illustrationNumber: 'Illustration H12-4B',
    anchorChapter: 4,
    title: '5D Warped Light-Cone Flare Array & Einstein–Maxwell Finite Span Horizon (k Δx < π)',
    bundleFilename: 'ch04_lightcone_horizon.jpg',
    category: 'CATEGORY C — CONJECTURAL',
    description:
      'Stacked five-dimensional null cones ds₅² = 0 opening progressively down bulk depth y under asymmetric warp tilt (α_t + α_x > 0), bounded laterally by the exact Einstein–Maxwell analytical span horizon ceiling k Δx < π (limiting η_fold ≥ 2/π = 0.63662).'
  },

  // Chapter 5 (2 illustrations)
  {
    id: 'h12-ill-ch5a',
    illustrationNumber: 'Illustration H12-5A',
    anchorChapter: 5,
    title: 'Regular Hayward Soliton Core: Concentric Outer/Inner Horizons & NEC ≥ 0 Closure',
    bundleFilename: 'ch05_hayward_core.jpg',
    category: 'CATEGORY B — DERIVED',
    description:
      'Hemispherical cutaway revealing the regular Hayward spacetime geometry: outer event horizon and inner Cauchy horizon enclosing a finite-curvature de Sitter core rather than a singularity, completely sealed from beneath (radial NEC ≥ 0 identically, ruling out portal traversal).'
  },
  {
    id: 'h12-ill-ch5b',
    illustrationNumber: 'Illustration H12-5B',
    anchorChapter: 5,
    title: '5D Bulk Black-String Column & Gregory–Laflamme Pinching Instability (r_+ / R_AdS < 0.876)',
    bundleFilename: 'ch05_black_string.jpg',
    category: 'CATEGORY C — CONJECTURAL',
    description:
      'Isometric cutaway of a 4D brane black-hole horizon extending as a five-dimensional black-string cylinder down bulk axis y, illustrating periodic Gregory–Laflamme Rayleigh-like pinching ripples below the critical AdS₅ threshold r_+ / R_AdS < 0.876.'
  },

  // Chapter 6 (2 illustrations)
  {
    id: 'h12-ill-ch6a',
    illustrationNumber: 'Illustration H12-6A',
    anchorChapter: 6,
    title: 'Flared Morris–Thorne Wormhole Embedding Tunnel Joining Twin Spacetime Sheets',
    bundleFilename: 'ch06_wormhole_throat.jpg',
    category: 'CATEGORY B — DERIVED',
    description:
      'Isometric embedding funnel connecting upper and lower 4D spacetime sheets through an Ellis–Bronnikov zero-tidal throat b(r) = r_0²/r (b\'(r_0) = −1 < 1, parametrized via r = r_0 sec(u), u ∈ [0, π/2]), highlighting the negative radial tension stress ring T^r_r < 0 demanded by the Einstein equations at the flare-out collar.'
  },
  {
    id: 'h12-ill-ch6b',
    illustrationNumber: 'Illustration H12-6B',
    anchorChapter: 6,
    title: 'Quantum Inequality Scale Vault: 100 nm Casimir Plates vs. 10⁷¹ Energy Deficit & Planck Scale ℓ₀',
    bundleFilename: 'ch06_casimir_deficit.jpg',
    category: 'CATEGORY B — DERIVED',
    description:
      'Architectural scale cutaway contrasting a laboratory 100 nm Casimir plate cavity (yield 13.0 Pa) against the 10⁷¹ exotic energy deficit blocking macroscopic 1 m throats, paired with the Ford–Roman τ⁻⁴ sampling worldtube terminating at the 0.2436 Planck parity regime ℓ₀.'
  },

  // Chapter 7 (2 illustrations)
  {
    id: 'h12-ill-ch7a',
    illustrationNumber: 'Illustration H12-7A',
    anchorChapter: 7,
    title: 'SLD Quantum Fisher Sphere PU(H) & Double-Slit Complementarity Triangle (V² + D_QFI² = 1)',
    bundleFilename: 'ch07_qfi_duality.jpg',
    category: 'CATEGORY B — DERIVED',
    description:
      'Isometric optical double-slit waveplate projecting fringe visibility vector V onto an orthogonal sliced projective Bloch sphere inside PU(H) together with distinguishability vector D_QFI, satisfying exact saturation V² + D_QFI² = 1 and F_Q = V².'
  },
  {
    id: 'h12-ill-ch7b',
    illustrationNumber: 'Illustration H12-7B',
    anchorChapter: 7,
    title: 'Unbalanced Double-Slit Geodesic Dome: Mixed-State Purity Sphere & Zero 5D Bulk Leakage',
    bundleFilename: 'ch07_unbalanced_slit.jpg',
    category: 'CATEGORY A — ESTABLISHED',
    description:
      'Cutaway dome illustrating unbalanced slit weights (p₁ = 0.7, p₂ = 0.3, γ_coh = 0.6) isolating mixed-state predictability P² and Born-rule probability invariance |⟨k|ψ⟩|² inside the rank-2 Bloch ball behind an orthogonal bulk barrier enforcing zero spatial leakage into extra dimension y.'
  },

  // Chapter 8 (2 illustrations)
  {
    id: 'h12-ill-ch8a',
    illustrationNumber: 'Illustration H12-8A',
    anchorChapter: 8,
    title: '5D AQFT Microcausality Lattice: Spacelike Causal Diamonds O_A & O_B ([O_A, O_B] = 0)',
    bundleFilename: 'ch08_causal_diamonds.jpg',
    category: 'CATEGORY B — DERIVED',
    description:
      'Isometric five-dimensional spacetime lattice housing two double-cone Haag–Kastler causal diamonds O_A and O_B separated cleanly outside each other’s 5D light cones behind a structural commutator partition proving [O_A, O_B] = 0.'
  },
  {
    id: 'h12-ill-ch8b',
    illustrationNumber: 'Illustration H12-8B',
    anchorChapter: 8,
    title: 'ER = EPR AdS₅ Dual Arch: Non-Traversable Einstein–Rosen Throat & Classical Channel Lock',
    bundleFilename: 'ch08_erepr_bridge.jpg',
    category: 'CATEGORY C — CONJECTURAL',
    description:
      'Architectural cutaway connecting two entangled boundary qubit pedestals A and B via an interior AdS₅ Einstein–Rosen bridge geometry while the upper brane deck enforces an explicit classical communication gate lock preventing faster-than-light signaling.'
  },

  // Chapter 9 (2 illustrations)
  {
    id: 'h12-ill-ch9a',
    illustrationNumber: 'Illustration H12-9A',
    anchorChapter: 9,
    title: 'Sixfold Negative-Theorem Vault: Metric, NEC, Hayward, Casimir, AQFT & Slit No-Go Walls',
    bundleFilename: 'ch09_nogo_barriers.jpg',
    category: 'CATEGORY B — DERIVED',
    description:
      'Hexagonal isometric containment vault summarizing Chapter 9’s six mathematically closed Category A/B negative proofs: flat KK shortcut closure, conformal AdS₅ no-go, closed Hayward horizon, macroscopic Casimir energy deficit, AQFT no-signaling lock, and non-spatial interference.'
  },
  {
    id: 'h12-ill-ch9b',
    illustrationNumber: 'Illustration H12-9B',
    anchorChapter: 9,
    title: '71-Order Logarithmic Impossibility Chasm: Laboratory Casimir Scale vs. Macroscopic Wormhole Ring',
    bundleFilename: 'ch09_order_chasm.jpg',
    category: 'CATEGORY B — DERIVED',
    description:
      'Stepped logarithmic scale monument spanning 71 orders of magnitude in energy density from achievable tabletop Casimir plates (bottom left) up a colossal quantitative chasm to macroscopic meter-scale exotic wormhole requirements and the Planck scale cutoff ℓ₀.'
  },

  // Chapter 10 (2 illustrations)
  {
    id: 'h12-ill-ch10a',
    illustrationNumber: 'Illustration H12-10A',
    anchorChapter: 10,
    title: '4D H11 Invariant Slab vs. Genuinely 5D-Unique Observational Signatures Deck',
    bundleFilename: 'ch10_unique_layers.jpg',
    category: 'CATEGORY B — DERIVED',
    description:
      'Two-story isometric cutaway separating already-resolved 4D IGRT-H11 phenomenology (optical clocks, Born rule, Hayward horizon cores) below an isolation membrane from uniquely 5D signatures above: Yukawa fifth forces, radion oscillations, and gravitational-wave bulk leakage.'
  },
  {
    id: 'h12-ill-ch10b',
    illustrationNumber: 'Illustration H12-10B',
    anchorChapter: 10,
    title: 'Multi-Messenger Sky Geometry: GW170817 Bulk Wavefront vs. 4D Brane Gamma-Ray Pulse (40 Mpc)',
    bundleFilename: 'ch10_multimessenger_bounds.jpg',
    category: 'CATEGORY A — ESTABLISHED',
    description:
      'Isometric astrophysical propagation slice from a binary neutron-star merger at D_L = 40 (+8/−14) Mpc (z = 0.0098) showing the gravitational wavefront probing 5D bulk curvature alongside the brane-bound 4D gamma-ray flash arriving within 1.74 s, clamping |η_fold − 1| ≤ 4.129 × 10⁻¹⁶ (1σ bracket [3.441, 6.353] × 10⁻¹⁶ under Category C jet-lag prior Δt_intr ∈ [0, 1.74] s).'
  },

  // Chapter 11 (2 illustrations)
  {
    id: 'h12-ill-ch11a',
    illustrationNumber: 'Illustration H12-11A',
    anchorChapter: 11,
    title: 'Axiomatic Derivation Boundary: Anchored Cat. A/B Truss vs. Unsupported Cat. C Warp Span',
    bundleFilename: 'ch11_derivation_boundary.jpg',
    category: 'CATEGORY B — DERIVED',
    description:
      'Cantilevered bridge cutaway illustrating the sharp Chapter 11 epistemic division: derived 4D and bundle-theoretic theorems rest on solid mathematical foundations on the left, while the postulated asymmetric warp span on the right remains suspended across an axiomatic gap without a vacuum source.'
  },
  {
    id: 'h12-ill-ch11b',
    illustrationNumber: 'Illustration H12-11B',
    anchorChapter: 11,
    title: '5×5 Einstein–Stress Tensor Deficit: Curvature Block G_AB (G_00/G_xx) vs. Hollow T_AB Source',
    bundleFilename: 'ch11_source_deficit.jpg',
    category: 'CATEGORY C — CONJECTURAL',
    description:
      'Exploded isometric 5×5 tensor matrix comparing the asymmetric bulk Einstein curvature tensor G^A_B + Λ_5 δ^A_B (including G^0_0 and G^x_x) against the corresponding bulk stress-energy block 8π G_5 T^A_B whose required anisotropic source components remain hollow dashed wireframes lacking an observed physical bulk flux.'
  },

  // Chapter 12 (2 illustrations)
  {
    id: 'h12-ill-ch12a',
    illustrationNumber: 'Illustration H12-12A',
    anchorChapter: 12,
    title: 'Four-Quadrant Experimental Program Architecture: P1–P6, P7–P10, P11–P12 & P13',
    bundleFilename: 'ch12_protocols_array.jpg',
    category: 'CATEGORY B — DERIVED',
    description:
      'Isometric observatory-complex layout separating verified 4D baseline rings (P1–P6), near-term 5D torsion/clock/interferometer probes (P7–P10), a sealed quarantine vault for unachievable active temporal folding (P11–P12), and the active multi-messenger sky timing dish (P13).'
  },
  {
    id: 'h12-ill-ch12b',
    illustrationNumber: 'Illustration H12-12B',
    anchorChapter: 12,
    title: 'Bayesian Occam Decision Funnel: Raw Sensor Data, −5.6 Penalty & 5σ vs. Null Exits',
    bundleFilename: 'ch12_decision_cone.jpg',
    category: 'CATEGORY B — DERIVED',
    description:
      'Vertical statistical likelihood funnel filtering multi-protocol experimental residuals through the Bayesian Occam penalty filter (Δ ln O = −5.60) to separate clean Null Falsification boundaries from any genuine Δχ² ≥ 25 (5σ, Δ ln B_{12/11} = +6.90 ≥ +5.0) detection cone.'
  },

  // Chapter 13 (2 illustrations)
  {
    id: 'h12-ill-ch13a',
    illustrationNumber: 'Illustration H12-13A',
    anchorChapter: 13,
    title: 'Heptagonal Solution-Space Caliper Ring: Seven Open Physics Problems Constrained, Not Solved',
    bundleFilename: 'ch13_open_constraints.jpg',
    category: 'CATEGORY C — CONJECTURAL',
    description:
      'Symmetrical seven-sided architectural ring housing seven open radial portals representing Quantum Gravity, Black-Hole Information, Dark Energy, Hierarchy, Arrow of Time, Measurement, and Unification—each held open within H12 structural constraint brackets rather than claimed as closed solutions.'
  },
  {
    id: 'h12-ill-ch13b',
    illustrationNumber: 'Illustration H12-13B',
    anchorChapter: 13,
    title: 'Multi-Scale Energy Horizon Tower: 1 neV Clocks to 4.485 meV Floor, Radion & UV Quantum Gravity',
    bundleFilename: 'ch13_uv_horizon.jpg',
    category: 'CATEGORY C — CONJECTURAL',
    description:
      'Inverted conical cutaway ascending across energy scales from the 1 neV atomic-clock floor through the 4.485 meV Eöt-Wash compactification horizon and Goldberger–Wise radion collar up to the ultraviolet 5D Planck & Quantum-Gravity completion horizon.'
  }
];

export const H12_SUPPLEMENTAL_PLATES_META: H12TheoryIllustrationMeta[] = [
  {
    id: 'h12-supp-s1',
    illustrationNumber: 'Illustration H12-S1',
    anchorChapter: 4,
    title: '5D Null-Geodesic Bifurcation & Linearized Radion Ceiling |δΦ_rad/Φ_rad| ≪ (k y_peak)⁻¹',
    bundleFilename: 'supp_s1_bifurcation.jpg',
    category: 'CATEGORY C — CONJECTURAL',
    description:
      'Architectural cutaway contrasting the unbounded NEC-violating Model 2B shortcut sheet against the finite-span ghost-free 5D Einstein–Maxwell trajectory capped at k Δx < π (lim η_fold^EM = 2/π = 0.63662), bounded vertically by the linearized radion backreaction validity ceiling |δΦ_rad/Φ_rad| ≪ (k y_peak)⁻¹.'
  },
  {
    id: 'h12-supp-s2',
    illustrationNumber: 'Illustration H12-S2',
    anchorChapter: 6,
    title: 'Spherical Casimir Thin-Shell Strut Stress Budget vs. 71-Order Wormhole Energy Deficit',
    bundleFilename: 'supp_s2_thinshell.jpg',
    category: 'CATEGORY B — DERIVED',
    description:
      'Exploded isometric cutaway showing why curving planar 100 nm Casimir plates into a spherical Morris–Thorne shell introduces positive compressive structural strut/wall tension exceeding negative vacuum energy, leaving the Category B macroscopic throat deficit (4.50 × 10⁻⁷¹ at 1 m) strictly sealed across 35 orders of magnitude.'
  },
  {
    id: 'h12-supp-s3',
    illustrationNumber: 'Illustration H12-S3',
    anchorChapter: 7,
    title: 'Open Mixed-State Bloch Ball (1 − |r|² > 0) & Regular Rank-2 SLD Fisher Manifold',
    bundleFilename: 'supp_s3_rankdome.jpg',
    category: 'CATEGORY B — DERIVED',
    description:
      'Geometric dome visualizing the open interior Bloch ball (|r|² < 1, strictly rank-2 positive density operator ρ(φ)) satisfying r · ∂_φ r = 0 so F_Q = V² remains smooth and avoids the pure-state Šafránek Bures discontinuity at the boundary sphere |r| → 1, orthogonal to spatial bulk axis y.'
  },
  {
    id: 'h12-supp-s4',
    illustrationNumber: 'Illustration H12-S4',
    anchorChapter: 12,
    title: 'Multi-Channel Orthogonal Template Separation: P4/P10 Ringdown & P5/P7 CANNEX Exclusions',
    bundleFilename: 'supp_s4_exclusion_basin.jpg',
    category: 'CATEGORY B — DERIVED',
    description:
      'Dual-channel statistical exclusion basin separating 4D IGRT-H11 tests (P4 K_echo = 0.184 photon-sphere echoes; P5 power-law Chameleon pressure) from strictly orthogonal 5D observables (P10 breathing mode h_b and chirped KK trains; P7 exponential Yukawa e^{−d/R_5}) under the Bayesian Occam penalty Δ ln O = −5.60.'
  },
  {
    id: 'h12-supp-s5',
    illustrationNumber: 'Illustration H12-S5',
    anchorChapter: 13,
    title: 'Cross-Monograph Epistemic Convergence Hub: Four-Tier H11 ↔ H12 Reconciliation & Synergy Clusters',
    bundleFilename: 'supp_s5_synergy_hub.jpg',
    category: 'CATEGORY A — ESTABLISHED',
    description:
      'Architectural network hub mapping the H11 ↔ H12 Four-Tier Epistemic Crosswalk across preserved 4D closures (665 assertions, ΔAIC = −1.84 caveat, SHA-256 lock), closed negative theorems (Ch. 9), seven constrained open problems (§13.5 / App. K), and blind-injected hardware validation Clusters 1–4 (Devices A–K).'
  }
];
