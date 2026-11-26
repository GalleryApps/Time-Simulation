/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Scientific Magazine Visual Apparatus for Paper 15 (Synthese Journal):
 * - 4 Bespoke Editorial Plates (Ecru, Orange, Dark Magenta, Dark Teal & Pine Green)
 * - 5 Vector Conceptual Schematics from synthesePaperFigures.ts
 */

import React, { useState } from 'react';
import coverPlateImg from '../assets/images/synthese_cover_plate_1795681229780.jpg';
import conventionalismPlateImg from '../assets/images/synthese_conventionalism_plate_1795681229330.jpg';
import moritaPlateImg from '../assets/images/synthese_morita_plate_1795681229768.jpg';
import functionalismPlateImg from '../assets/images/synthese_functionalism_plate_1795681231606.jpg';
import { formatSvgMathMarkup } from '../utils/formatMathUnicode';
import { SYNTHESE_FIGURES, type SyntheseFigureSpec } from '../types/synthesePaperFigures';

export { SYNTHESE_FIGURES, type SyntheseFigureSpec };

export interface SynthesePlateSpec {
  id: string;
  plateNumber: string;
  anchorChapter: number;
  title: string;
  imagePath: string;
  caption: string;
}

export const SYNTHESE_PLATES: SynthesePlateSpec[] = [
  {
    id: 'synthese-plate-1',
    plateNumber: 'Plate I',
    anchorChapter: 1,
    title: 'Dual Manifolds Across an Archival Meridian: Lorentzian Light Cones & Fisher-Rao Bundles',
    imagePath: coverPlateImg,
    caption:
      'Editorial cover plate contrasting warped Lorentzian null-cone geometry (left, dark teal & pine green) with information-geometric Fisher-Rao statistical state fibers (right, burnished orange & dark magenta) bridged across a brass meridian.'
  },
  {
    id: 'synthese-plate-2',
    plateNumber: 'Plate II',
    anchorChapter: 2,
    title: 'Poincaré–Reichenbach Disk Duality: Hyperbolic Geodesic Chords vs. Scalar Rod Distortion',
    imagePath: conventionalismPlateImg,
    caption:
      'Geometric conventionalism dissected: trading curved hyperbolic chords (top, pine green & dark teal) for deformed flat-space ellipses (bottom, burnished orange & dark magenta) succeeds only when spatial impedance enforces gamma = 1.'
  },
  {
    id: 'synthese-plate-3',
    plateNumber: 'Plate III',
    anchorChapter: 4,
    title: 'Categorical Morita Bridge: Exterior Functorial Parity & Core Horizon Split',
    imagePath: moritaPlateImg,
    caption:
      'Constructive Morita equivalence functor F: Lor_ext <-> InfoGeom_ext translating spacetime metric tensors (dark teal/pine) into dual Amari statistical bundles (dark magenta) via burnished orange bridge arcs up to regular core boundaries.'
  },
  {
    id: 'synthese-plate-4',
    plateNumber: 'Plate IV',
    anchorChapter: 5,
    title: 'Optical Chronometric Functionalism: 87Sr Lattice Resonator Probing Regular Photon Spheres',
    imagePath: functionalismPlateImg,
    caption:
      'Operational optical-lattice atomic clock ensembles (pine green & dark teal) calibrating local inertial-frame realization (Knox functionalism) against smooth regular Hayward black hole horizons (dark magenta & burnished orange).'
  }
];

export const SynthesePlateCard: React.FC<{ plate: SynthesePlateSpec }> = ({ plate }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <figure className="my-10 border border-[#CBBBA0] dark:border-[#186876]/50 bg-[#FDFBF7] dark:bg-[#062429] p-5 sm:p-7">
      <div className="pb-3 mb-5 border-b border-[#E2D6C1] dark:border-[#11505C]/40 flex items-center justify-between gap-4 text-xs font-mono">
        <span className="text-[#831B5B] dark:text-[#C974A6] tracking-wide">
          {plate.plateNumber} · Chapter {plate.anchorChapter}
        </span>
        <span className="text-[#9A3412] dark:text-[#F08A43] tabular-nums">
          Editorial Scientific Plate
        </span>
      </div>

      {!imgError ? (
        <div className="overflow-hidden border border-[#EDE5D5] dark:border-[#11505C]/40 bg-[#FAF6EC]">
          <img
            src={plate.imagePath}
            alt={plate.title}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-auto object-cover"
          />
        </div>
      ) : (
        <div className="aspect-[4/3] w-full border border-[#CBBBA0] bg-[#FAF6EC] flex flex-col items-center justify-center p-8 text-center">
          <span className="font-mono text-xs text-[#831B5B]">{plate.plateNumber}</span>
          <span className="font-['Playfair_Display'] text-lg text-[#062429] mt-2 font-normal">{plate.title}</span>
        </div>
      )}

      <figcaption className="mt-5 space-y-1.5">
        <div className="font-['Playfair_Display'] text-lg text-[#2E0820] dark:text-[#F9EEF4] font-normal">
          {plate.title}
        </div>
        <p className="text-sm leading-relaxed text-[#0B3942] dark:text-[#6CB2BD]">
          {plate.caption}
        </p>
      </figcaption>
    </figure>
  );
};

export const SyntheseFigureCard: React.FC<{ fig: SyntheseFigureSpec }> = ({ fig }) => {
  const formattedSvg = formatSvgMathMarkup(fig.svgMarkup);

  return (
    <figure className="my-10 border border-[#186876]/35 dark:border-[#186876]/55 bg-[#FDFBF7] dark:bg-[#062429] p-5 sm:p-7">
      <div className="pb-3 mb-5 border-b border-[#E2D6C1] dark:border-[#11505C]/40 flex items-center justify-between gap-4 text-xs font-mono">
        <span className="text-[#11505C] dark:text-[#6CB2BD] tracking-wide">
          {fig.figureNumber} · {fig.anchorChapter === 0 ? 'Graphical Abstract' : `Chapter ${fig.anchorChapter}`}
        </span>
        <span className="text-[#0F3D2B] dark:text-[#4A9374]">Vector Schematic</span>
      </div>

      <div
        className="w-full overflow-hidden border border-[#E2D6C1] dark:border-[#11505C]/40 bg-[#FAF6EC] p-2 sm:p-3"
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
