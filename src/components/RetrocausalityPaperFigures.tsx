/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Full-Page A4 Scientific and Philosophical Illustrations for Paper 16:
 * "The Universe Remembers Its Future"
 *
 * 29 full-page illustrations spanning Parts 1–8 across a curated 40-shade cool/magenta/pine
 * dark palette plus Dark Red and Dark Orange plates in white geometric linework.
 */

import React, { useState } from 'react';
import img01 from '../assets/images/aristotle_sea_battle_1795773041090.jpg';
import img02 from '../assets/images/chrysippus_cofated_lattice_1795773044831.jpg';
import img03 from '../assets/images/hume_priority_custom_1795773044106.jpg';
import img04 from '../assets/images/kant_ship_downstream_1795773045875.jpg';
import img05 from '../assets/images/russell_reichenbach_forks_1795773047181.jpg';
import img06 from '../assets/images/dummett_bilking_test_1795773048913.jpg';
import img07 from '../assets/images/lewis_price_pearl_1795773048866.jpg';
import img08 from '../assets/images/maxwell_absorber_waves_1795773049174.jpg';
import img09 from '../assets/images/feynman_keldysh_contour_1795773049289.jpg';
import img10 from '../assets/images/landauer_memory_erasure_1795773050524.jpg';
import img11 from '../assets/images/hamilton_wharton_action_1795773125930.jpg';
import img12 from '../assets/images/schulman_dual_horizons_1795773127061.jpg';
import img13 from '../assets/images/cauchy_boundary_intersection_1795773053053.jpg';
import img14 from '../assets/images/maudlin_light_cones_1795773068029.jpg';
import img15 from '../assets/images/present_arch_keystone_1795773053679.jpg';
import img16 from '../assets/images/adlam_constraint_network_1795773175928.jpg';
import img17 from '../assets/images/novikov_thorne_loop_1795773175155.jpg';
import img18 from '../assets/images/influence_vs_consistency_1795773176984.jpg';
import img19 from '../assets/images/aharonov_vaidman_tsvf_1795773178088.jpg';
import img20 from '../assets/images/leifer_pusey_bell_1795773178264.jpg';
import img21 from '../assets/images/wheeler_delayed_choice_1795773067778.jpg';
import img22 from '../assets/images/boltzmann_phase_volume_1795773181262.jpg';
import img23 from '../assets/images/rovelli_albert_records_1795773129322.jpg';
import img24 from '../assets/images/four_arrows_alignment_1795773180810.jpg';
import img25 from '../assets/images/tdcd_fivefold_bridge_1795773126931.jpg';
import img26 from '../assets/images/chapter1_resolution_key_1795773064119.jpg';
import img27 from '../assets/images/dual_border_cosmos_1795773183009.jpg';
import img28 from '../assets/images/igrt_tsvf_metric_darkred_1795791950344.jpg';
import img29 from '../assets/images/weyl_landauer_horizon_darkorange_1795791949345.jpg';
import { formatSvgMathMarkup } from '../utils/formatMathUnicode';
import {
  ILLUSTRATION_40_SHADES,
  ILLUSTRATION_WARM_SHADES,
  ILLUSTRATION_ALL_SHADES,
  RETRO_FIGURES,
  RETRO_PLATES_META,
  type IllustrationShadeToken,
  type RetrocausalityFigureSpec,
  type RetroPlateMetaSpec,
  type RetroHueFamily
} from '../types/retrocausalityPaperFigures';

export {
  ILLUSTRATION_40_SHADES,
  ILLUSTRATION_WARM_SHADES,
  ILLUSTRATION_ALL_SHADES,
  RETRO_FIGURES,
  RETRO_PLATES_META,
  type IllustrationShadeToken,
  type RetrocausalityFigureSpec,
  type RetroPlateMetaSpec,
  type RetroHueFamily
};

export interface RetroPlateSpec extends RetroPlateMetaSpec {
  imagePath: string;
}

const PLATE_IMAGE_BY_FILE: Record<string, string> = {
  'aristotle_sea_battle_1795773041090.jpg': img01,
  'chrysippus_cofated_lattice_1795773044831.jpg': img02,
  'hume_priority_custom_1795773044106.jpg': img03,
  'kant_ship_downstream_1795773045875.jpg': img04,
  'russell_reichenbach_forks_1795773047181.jpg': img05,
  'dummett_bilking_test_1795773048913.jpg': img06,
  'lewis_price_pearl_1795773048866.jpg': img07,
  'maxwell_absorber_waves_1795773049174.jpg': img08,
  'feynman_keldysh_contour_1795773049289.jpg': img09,
  'landauer_memory_erasure_1795773050524.jpg': img10,
  'hamilton_wharton_action_1795773125930.jpg': img11,
  'schulman_dual_horizons_1795773127061.jpg': img12,
  'cauchy_boundary_intersection_1795773053053.jpg': img13,
  'maudlin_light_cones_1795773068029.jpg': img14,
  'present_arch_keystone_1795773053679.jpg': img15,
  'adlam_constraint_network_1795773175928.jpg': img16,
  'novikov_thorne_loop_1795773175155.jpg': img17,
  'influence_vs_consistency_1795773176984.jpg': img18,
  'aharonov_vaidman_tsvf_1795773178088.jpg': img19,
  'leifer_pusey_bell_1795773178264.jpg': img20,
  'wheeler_delayed_choice_1795773067778.jpg': img21,
  'boltzmann_phase_volume_1795773181262.jpg': img22,
  'rovelli_albert_records_1795773129322.jpg': img23,
  'four_arrows_alignment_1795773180810.jpg': img24,
  'tdcd_fivefold_bridge_1795773126931.jpg': img25,
  'chapter1_resolution_key_1795773064119.jpg': img26,
  'dual_border_cosmos_1795773183009.jpg': img27,
  'igrt_tsvf_metric_darkred_1795791950344.jpg': img28,
  'weyl_landauer_horizon_darkorange_1795791949345.jpg': img29
};

export const RETRO_PLATES: RetroPlateSpec[] = RETRO_PLATES_META.map((meta) => ({
  ...meta,
  imagePath: PLATE_IMAGE_BY_FILE[meta.imageFile] ?? ''
}));

export const RetroPlateCard: React.FC<{ plate: RetroPlateSpec }> = ({ plate }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <figure
      className="my-10 p-6 sm:p-8 text-[#FAF8F4]"
      style={{
        backgroundColor: plate.bgHex,
        borderColor: plate.accentHex,
        borderWidth: '1px',
        borderStyle: 'solid'
      }}
    >
      <div
        className="pb-3 mb-5 border-b flex flex-wrap items-center justify-between gap-4 text-xs font-mono"
        style={{ borderColor: plate.accentHex }}
      >
        <span className="text-[#FAF8F4] tracking-wide">
          {plate.plateNumber} · {plate.anchorChapter === 0 ? 'Graphical Abstract' : `Part ${plate.anchorChapter}`}
        </span>
        <span className="text-[#E6ECF5]/85">
          {plate.hueFamily}: {plate.shadeName} ({plate.bgHex}) · Accent: {plate.accentShadeName} ({plate.accentHex})
        </span>
      </div>

      {!imgError ? (
        <div
          className="mx-auto w-full max-w-[620px] aspect-[210/297] overflow-hidden flex items-center justify-center"
          style={{
            backgroundColor: plate.bgHex,
            borderColor: plate.accentHex,
            borderWidth: '1px',
            borderStyle: 'solid'
          }}
        >
          <img
            src={plate.imagePath}
            alt={plate.title}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-contain"
          />
        </div>
      ) : (
        <div
          className="mx-auto w-full max-w-[620px] aspect-[210/297] flex flex-col items-center justify-center p-8 text-center"
          style={{
            backgroundColor: plate.bgHex,
            borderColor: plate.accentHex,
            borderWidth: '1px',
            borderStyle: 'solid'
          }}
        >
          <span className="font-mono text-xs text-[#FAF8F4]">{plate.plateNumber}</span>
          <span className="font-['Playfair_Display'] text-lg text-[#FAF8F4] mt-2 font-normal">{plate.title}</span>
        </div>
      )}

      <figcaption
        className="mt-6 pt-4 border-t space-y-1.5"
        style={{ borderColor: plate.accentHex }}
      >
        <div className="font-['Playfair_Display'] text-lg text-[#FAF8F4] font-normal">
          {plate.title}
        </div>
        <p className="text-sm leading-relaxed text-[#E8EEF8]">
          {plate.caption}
        </p>
      </figcaption>
    </figure>
  );
};

export const RetroFigureCard: React.FC<{ fig: RetrocausalityFigureSpec }> = ({ fig }) => {
  const formattedSvg = formatSvgMathMarkup(fig.svgMarkup);

  return (
    <figure className="my-10 border border-[#173668] bg-[#081B38] p-6 sm:p-8 text-[#FAF8F4]">
      <div className="pb-2.5 mb-4 border-b border-[#FAF8F4]/25 flex items-center justify-between gap-4 text-xs font-mono">
        <span className="text-[#FAF8F4] tabular-nums">{fig.figureNumber}</span>
      </div>

      <div
        className="w-full overflow-x-auto border border-[#FAF8F4]/25 bg-[#081B38]"
        dangerouslySetInnerHTML={{ __html: formattedSvg }}
      />

      <figcaption className="mt-5 space-y-1.5">
        <div className="font-['Playfair_Display'] text-lg text-[#FAF8F4] font-normal">
          {fig.title}
        </div>
        <p className="text-sm leading-relaxed text-[#E8EEF8]">{fig.caption}</p>
      </figcaption>
    </figure>
  );
};
