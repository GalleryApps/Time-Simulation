/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Binds the 26 generated archival cutaway scientific illustrations (2 per chapter, Ch. 1–13)
 * for Paper 2 (IGRT-H12) to their pure metadata definitions.
 */

import {
  H12_THEORY_ILLUSTRATIONS_META,
  H12_SUPPLEMENTAL_PLATES_META,
  type H12TheoryIllustrationMeta
} from '../types/igrtH12IllustrationsMeta';

import ch1BraneBundleImg from '../assets/images/ch1_brane_bundle_1795155467560.jpg';
import ch1EpistemicStrataImg from '../assets/images/ch1_epistemic_strata_1795155467015.jpg';
import ch2KkCompactificationImg from '../assets/images/ch2_kk_compactification_1795155465890.jpg';
import ch2WarpedBulkImg from '../assets/images/ch2_warped_bulk_1795155467509.jpg';
import ch3TemporalLayersImg from '../assets/images/ch3_temporal_layers_1795155467851.jpg';
import ch3KmsManifoldImg from '../assets/images/ch3_kms_manifold_1795155466658.jpg';
import ch4BeltramiGeodesicImg from '../assets/images/ch4_beltrami_geodesic_1795155467973.jpg';
import ch4LightconeHorizonImg from '../assets/images/ch4_lightcone_horizon_1795155467399.jpg';
import ch5HaywardCoreImg from '../assets/images/ch5_hayward_core_1795155466883.jpg';
import ch5BlackStringImg from '../assets/images/ch5_black_string_1795155466778.jpg';
import ch6WormholeThroatImg from '../assets/images/ch6_wormhole_throat_1795155467582.jpg';
import ch6CasimirDeficitImg from '../assets/images/ch6_casimir_deficit_1795155466615.jpg';
import ch7QfiDualityImg from '../assets/images/ch7_qfi_duality_1795155465932.jpg';
import ch7UnbalancedSlitImg from '../assets/images/ch7_unbalanced_slit_1795155466868.jpg';
import ch8CausalDiamondsImg from '../assets/images/ch8_causal_diamonds_1795155466861.jpg';
import ch8EreprBridgeImg from '../assets/images/ch8_erepr_bridge_1795155466669.jpg';
import ch9NogoBarriersImg from '../assets/images/ch9_nogo_barriers_1795155467651.jpg';
import ch9OrderChasmImg from '../assets/images/ch9_order_chasm_1795155467367.jpg';
import ch10UniqueLayersImg from '../assets/images/ch10_unique_layers_1795155466384.jpg';
import ch10MultimessengerBoundsImg from '../assets/images/ch10_multimessenger_bounds_1795155467849.jpg';
import ch11DerivationBoundaryImg from '../assets/images/ch11_derivation_boundary_1795155467050.jpg';
import ch11SourceDeficitImg from '../assets/images/ch11_source_deficit_1795155465759.jpg';
import ch12ProtocolsArrayImg from '../assets/images/ch12_protocols_array_1795155467344.jpg';
import ch12DecisionConeImg from '../assets/images/ch12_decision_cone_1795155467477.jpg';
import ch13OpenConstraintsImg from '../assets/images/ch13_open_constraints_1795155466577.jpg';
import ch13UvHorizonImg from '../assets/images/ch13_uv_horizon_1795155468286.jpg';
import suppS1BifurcationImg from '../assets/images/h12_cutaway_bifurcation_1795211405594.jpg';
import suppS2ThinshellImg from '../assets/images/h12_cutaway_thinshell_1795211404476.jpg';
import suppS3RankdomeImg from '../assets/images/h12_cutaway_rankdome_clean_1795211425635.jpg';
import suppS4ExclusionBasinImg from '../assets/images/h12_cutaway_exclusionbasin_1795211405364.jpg';
import suppS5SynergyHubImg from '../assets/images/h12_cutaway_synergyhub_1795211406075.jpg';

export interface H12TheoryIllustrationSpec extends H12TheoryIllustrationMeta {
  imagePath: string;
}

const IMAGE_PATH_BY_ID: Record<string, string> = {
  'h12-ill-ch1a': ch1BraneBundleImg,
  'h12-ill-ch1b': ch1EpistemicStrataImg,
  'h12-ill-ch2a': ch2KkCompactificationImg,
  'h12-ill-ch2b': ch2WarpedBulkImg,
  'h12-ill-ch3a': ch3TemporalLayersImg,
  'h12-ill-ch3b': ch3KmsManifoldImg,
  'h12-ill-ch4a': ch4BeltramiGeodesicImg,
  'h12-ill-ch4b': ch4LightconeHorizonImg,
  'h12-ill-ch5a': ch5HaywardCoreImg,
  'h12-ill-ch5b': ch5BlackStringImg,
  'h12-ill-ch6a': ch6WormholeThroatImg,
  'h12-ill-ch6b': ch6CasimirDeficitImg,
  'h12-ill-ch7a': ch7QfiDualityImg,
  'h12-ill-ch7b': ch7UnbalancedSlitImg,
  'h12-ill-ch8a': ch8CausalDiamondsImg,
  'h12-ill-ch8b': ch8EreprBridgeImg,
  'h12-ill-ch9a': ch9NogoBarriersImg,
  'h12-ill-ch9b': ch9OrderChasmImg,
  'h12-ill-ch10a': ch10UniqueLayersImg,
  'h12-ill-ch10b': ch10MultimessengerBoundsImg,
  'h12-ill-ch11a': ch11DerivationBoundaryImg,
  'h12-ill-ch11b': ch11SourceDeficitImg,
  'h12-ill-ch12a': ch12ProtocolsArrayImg,
  'h12-ill-ch12b': ch12DecisionConeImg,
  'h12-ill-ch13a': ch13OpenConstraintsImg,
  'h12-ill-ch13b': ch13UvHorizonImg
};

export const H12_THEORY_ILLUSTRATIONS: H12TheoryIllustrationSpec[] = H12_THEORY_ILLUSTRATIONS_META.map(
  (meta) => ({
    ...meta,
    imagePath: IMAGE_PATH_BY_ID[meta.id]
  })
);

const SUPP_IMAGE_PATH_BY_ID: Record<string, string> = {
  'h12-supp-s1': suppS1BifurcationImg,
  'h12-supp-s2': suppS2ThinshellImg,
  'h12-supp-s3': suppS3RankdomeImg,
  'h12-supp-s4': suppS4ExclusionBasinImg,
  'h12-supp-s5': suppS5SynergyHubImg
};

export const H12_SUPPLEMENTAL_PLATES: H12TheoryIllustrationSpec[] = H12_SUPPLEMENTAL_PLATES_META.map(
  (meta) => ({
    ...meta,
    imagePath: SUPP_IMAGE_PATH_BY_ID[meta.id]
  })
);
