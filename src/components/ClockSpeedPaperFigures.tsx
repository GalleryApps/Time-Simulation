/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Paper 14 Visual Apparatus:
 * - 5 Archival Generated Plates (Dark Magenta, Dark Teal, Pine Green on ivory paper)
 * - 9 High-Precision Chapter Vector Schematics (white-ground, 20-shade Dark Magenta / Dark Teal / Pine Green palette,
 *   exact equation-derived curves, quantitative tick grids, directional arrow markers, and multi-series legends)
 */

import React, { useState } from 'react';
import plate1Img from '../assets/images/clock_puzzle_plate1_1795582791803.jpg';
import plate2Img from '../assets/images/curved_vs_processor_plate2_1795582792456.jpg';
import plate3Img from '../assets/images/lensing_shapiro_plate3_1795582792940.jpg';
import plate4Img from '../assets/images/black_hole_horizon_plate4_1795582793370.jpg';
import plate5Img from '../assets/images/uhecr_frontier_plate5_1795582794098.jpg';
import { formatSvgMathMarkup } from '../utils/formatMathUnicode';
import type { ClockPaperTier } from '../types/clockSpeedPaperData';
import { CLOCK_SPEED_FIGURES, type ClockFigureSpec } from '../types/clockSpeedFigures';

export { CLOCK_SPEED_FIGURES, type ClockFigureSpec };

export interface ClockPlateSpec {
  id: string;
  plateNumber: string;
  anchorChapter: number;
  title: string;
  imagePath: string;
  tier: ClockPaperTier;
  caption: string;
}

export const CLOCK_SPEED_PLATES: ClockPlateSpec[] = [
  {
    id: 'clock-plate-1',
    plateNumber: 'Plate I',
    anchorChapter: 1,
    title: 'Optical Atomic Clock Chambers Across an Elevation Potential Gradient',
    imagePath: plate1Img,
    tier: 'ESTABLISHED EMPIRICAL FACT',
    caption:
      'Minimalist engraving contrasting an alpine optical lattice clock and a sea-level twin linked by phase-locked timing wavefronts (Δν/ν = gΔh/c² = 1.0911×10⁻¹⁶ m⁻¹).'
  },
  {
    id: 'clock-plate-2',
    plateNumber: 'Plate II',
    anchorChapter: 3,
    title: 'Curved 4D Spacetime Continuum vs. Local Update-Rate Throttling Lattice',
    imagePath: plate2Img,
    tier: 'UPDATE-RATE REINTERPRETATION',
    caption:
      'Side-by-side conceptual contrast: Einstein’s smooth Schwarzschild metric curvature (left, dark teal) alongside a density-throttled physical update lattice (right, pine green & dark magenta).'
  },
  {
    id: 'clock-plate-3',
    plateNumber: 'Plate III',
    anchorChapter: 5,
    title: 'Solar-Limb Starlight Deflection: Scalar Half-Bending vs. Full Geometric Lensing',
    imagePath: plate3Img,
    tier: 'PPN STRESS-TEST & FALSIFICATION',
    caption:
      'Pure temporal clock-slowing (γ = 0, pine green ray) deflects grazing starlight by 0.875″; adding spatial impedance (γ = 1, dark magenta ray) matches the observed 1.750″ and Cassini Shapiro delay.'
  },
  {
    id: 'clock-plate-4',
    plateNumber: 'Plate IV',
    anchorChapter: 6,
    title: 'Event Horizon Cross-Section: Photon Ring & Asymptotic Update Throttling',
    imagePath: plate4Img,
    tier: 'FRONTIER OBSERVATIONAL PROBE',
    caption:
      'Schwarzschild photon sphere (1.5 r_s) and glowing accretion ring (dark magenta) enclosing the causal horizon (abyssal teal), where coordinate update ticks (pine green) compress toward zero.'
  },
  {
    id: 'clock-plate-5',
    plateNumber: 'Plate V',
    anchorChapter: 7,
    title: 'Ultra-High-Energy Particle Cascade Across Planck-Scale Vacuum Contours',
    imagePath: plate5Img,
    tier: 'FRONTIER OBSERVATIONAL PROBE',
    caption:
      'Cosmic-ray and TeV gamma-ray burst trajectories probing potential discrete update-step dispersion bounds (Fermi-LAT E_QG,1 > 7.6 E_Pl, LHAASO GRB 221009A).'
  }
];

export const ClockSpeedPlateCard: React.FC<{ plate: ClockPlateSpec }> = ({ plate }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <figure className="my-10 rounded-xl border border-[#C46D9E]/40 dark:border-[#186876]/50 bg-white dark:bg-[#062429] p-5 sm:p-7">
      <div className="pb-3 mb-5 border-b border-[#EDF5F6] dark:border-[#11505C]/40 text-xs font-mono">
        <span className="text-[#661447] dark:text-[#C46D9E] tracking-wide">
          {plate.plateNumber} · Chapter {plate.anchorChapter}
        </span>
      </div>

      {!imgError ? (
        <div className="overflow-hidden rounded-lg border border-[#EDF5F6] dark:border-[#11505C]/40 bg-[#FAF9F7]">
          <img
            src={plate.imagePath}
            alt={plate.title}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-auto object-cover"
          />
        </div>
      ) : (
        <div className="aspect-video w-full rounded-lg border border-[#C46D9E]/30 bg-gradient-to-br from-[#F7EEF3] via-[#EDF5F6] to-[#EEF5F1] flex flex-col items-center justify-center p-8 text-center">
          <span className="font-mono text-xs text-[#661447]">{plate.plateNumber}</span>
          <span className="font-['Playfair_Display'] text-lg text-[#062429] mt-2">{plate.title}</span>
        </div>
      )}

      <figcaption className="mt-5 space-y-1.5">
        <div className="font-['Playfair_Display'] text-lg text-[#2E0820] dark:text-[#F7EEF3] font-normal">
          {plate.title}
        </div>
        <p className="text-sm leading-relaxed text-[#0B3942] dark:text-[#6CB2BD]">
          {plate.caption}
        </p>
      </figcaption>
    </figure>
  );
};

export const ClockSpeedFigureCard: React.FC<{ fig: ClockFigureSpec }> = ({ fig }) => {
  const formattedSvg = formatSvgMathMarkup(fig.svgMarkup);

  return (
    <figure className="my-10 rounded-xl border border-[#186876]/30 dark:border-[#186876]/50 bg-white dark:bg-[#062429] p-5 sm:p-7">
      <div className="pb-3 mb-5 border-b border-[#EDF5F6] dark:border-[#11505C]/40 text-xs font-mono">
        <span className="text-[#11505C] dark:text-[#6CB2BD] tracking-wide">
          {fig.figureNumber} · Chapter {fig.anchorChapter}
        </span>
      </div>

      <div
        className="w-full overflow-hidden rounded-lg border border-[#EDF5F6] bg-white p-3"
        dangerouslySetInnerHTML={{ __html: formattedSvg }}
      />

      <figcaption className="mt-5 space-y-1.5">
        <div className="font-['Playfair_Display'] text-lg text-[#062429] dark:text-[#EDF5F6] font-normal">
          {fig.title}
        </div>
        <p className="text-sm leading-relaxed text-[#0B3942] dark:text-[#6CB2BD]">
          {fig.caption}
        </p>
      </figcaption>
    </figure>
  );
};
