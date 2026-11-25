import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PALETTE_20_SHADES,
  computeClockDifferential,
  computeGeodesicTimeGradientAccel,
  computeGpsCorrections,
  computePpnObservables,
  computeHorizonUpdateProfile,
  computeCosmologicalDispersionKernelSec,
  computeDiscreteStepDispersion,
  computeExtendedWeakFieldChecks,
  computeHaywardRegularCore,
  computeOneLoopHiggsLapseCheck,
  integrateNullDeflectionRK4,
  computePainleveGordonBridge,
  computeAdmConstraintResidual,
  computeHaywardStrongFieldObservables,
  computeLindbladClockVisibility,
  computeBinaryPulsarRadiation,
  computeShapiroLogDelay,
  computeHaywardIscoAndShadows,
  computeFiberAndCramerRaoChecks,
  computeMacroscopicInterferometerBound,
  computeLikelihoodRatioGrVsScalar,
  computeQuantumEntanglementAndClockCat,
  computeAntimatterAndNeutrinoClockBounds,
  computeCosmologicalAndGwUpdateBounds,
  computeStrongFieldCoreExtensions,
  getReproducibilityManifest
} from './clockSpeedPaper';
import * as clockSpeedData from '../types/clockSpeedPaperData';
import { CLOCK_SPEED_FIGURES } from '../types/clockSpeedFigures';
import { buildClockSpeedSelfContainedHtml, buildClockSpeedLatex } from '../utils/generateClockSpeedExports';

const {
  CLOCK_SPEED_META,
  CLOCK_SPEED_ABSTRACT,
  CLOCK_SPEED_CHAPTERS,
  CLOCK_SPEED_GLOSSARY,
  CLOCK_SPEED_SYMBOL_GLOSSARY,
  CLOCK_SPEED_APPENDICES,
  CLOCK_SPEED_REFERENCES,
  TABLE_5_2_PPN_BOUNDS,
  TABLE_5_3_WILL_COMPARISON,
  TABLE_8_1_PREDICTIONS_MATRIX,
  TABLE_8_2_NEXT_GEN_ROADMAP,
  TABLE_8_3_MULTISURVEY_EMPIRICAL,
  TABLE_8_4_TABLETOP_PROTOCOL,
  buildClockSpeedMarkdown
} = clockSpeedData;

test('PALETTE_20_SHADES defines exactly 20 distinct shades across Dark Magenta, Dark Teal, and Pine Green', () => {
  assert.equal(PALETTE_20_SHADES.length, 20);
  const hexes = new Set(PALETTE_20_SHADES.map((s) => s.hex));
  assert.equal(hexes.size, 20);
  assert.equal(PALETTE_20_SHADES.filter((s) => s.family === 'Dark Magenta').length, 7);
  assert.equal(PALETTE_20_SHADES.filter((s) => s.family === 'Dark Teal').length, 7);
  assert.equal(PALETTE_20_SHADES.filter((s) => s.family === 'Pine Green').length, 6);
});

test('computeClockDifferential matches NIST 33cm, Tokyo Skytree 450m, JILA 1mm, and 3000m mountain clocks', () => {
  const oneMeter = computeClockDifferential(1);
  assert.ok(Math.abs(oneMeter.ratePerMeter - 1.09114e-16) < 1e-20);
  assert.ok(Math.abs(oneMeter.fractionalShift - 1.0926e-16) < 2e-19);

  const nist33cm = computeClockDifferential(0.33);
  assert.ok(nist33cm.fractionalShift > 3.5e-17 && nist33cm.fractionalShift < 3.7e-17);

  const skytree450m = computeClockDifferential(450);
  assert.ok(skytree450m.nsPerDayGain > 4.2 && skytree450m.nsPerDayGain < 4.35);

  const mountain3000m = computeClockDifferential(3000);
  assert.ok(mountain3000m.nsPerDayGain > 28.0 && mountain3000m.nsPerDayGain < 28.6);
});

test('computeExtendedWeakFieldChecks reconciles 28.28 vs 28.31 ns/day, GP-B, pulsar decay, white dwarfs, and S2', () => {
  const ext = computeExtendedWeakFieldChecks();
  assert.ok(Math.abs(ext.standardGravity3kmNsPerDay - 28.28) < 0.02);
  assert.ok(Math.abs(ext.standardGravity3kmUsPerYear - 10.33) < 0.02);
  assert.ok(Math.abs(ext.sphericalEarth3kmNsPerDay - 28.31) < 0.02);
  assert.ok(ext.annualSolarVariationFraction > 1.6e-10 && ext.annualSolarVariationFraction < 1.7e-10);
  assert.equal(ext.gpbGeodeticGrMasYr, 6606.1);
  assert.ok(Math.abs(ext.gpbGeodeticScalarMasYr - 2202.03) < 0.1);
  assert.equal(ext.gpbFrameDraggingGrMasYr, -39.2);
  assert.equal(ext.psrB1913PeriodDecayRate, -2.4025e-12);
  assert.ok(ext.siriusBRedshiftKmS > 75 && ext.siriusBRedshiftKmS < 85);
  assert.ok(ext.eridani40BRedshiftKmS > 24 && ext.eridani40BRedshiftKmS < 29);
  assert.ok(Math.abs(ext.s2PericenterRedshiftFraction - 1 / 2800) < 1e-8);
});

test('computeGeodesicTimeGradientAccel yields ~9.82 m/s^2 surface gravity from 10^-9 time gradient', () => {
  const accel = computeGeodesicTimeGradientAccel();
  assert.ok(accel.surfaceWarpFraction > 1.38e-9 && accel.surfaceWarpFraction < 1.40e-9);
  assert.ok(Math.abs(accel.geodesicAccelerationMs2 - 9.82) < 0.02);
});

test('computeGpsCorrections reproduces +45.8 - 7.2 = +38.6 us/day net offset and e=0.01 eccentricity amplitude', () => {
  const gps = computeGpsCorrections(0.01);
  assert.ok(Math.abs(gps.gravitationalBlueshiftUsPerDay - 45.8) < 0.3);
  assert.ok(Math.abs(gps.kinematicRedshiftUsPerDay + 7.2) < 0.2);
  assert.ok(Math.abs(gps.netGainUsPerDay - 38.6) < 0.4);
  assert.ok(gps.uncorrectedRangeDriftKmPerDay > 11.3 && gps.uncorrectedRangeDriftKmPerDay < 11.8);
  assert.ok(gps.eccentricityAmplitudeNs > 21.5 && gps.eccentricityAmplitudeNs < 23.5);
});

test('computePpnObservables isolates scalar clock-slowing failure on light bending, Shapiro delay, and Nordtvedt eta', () => {
  const pureScalar = computePpnObservables(0, 0, 1.0);
  assert.ok(Math.abs(pureScalar.grDeflectionArcsec - 1.750) < 0.005);
  assert.ok(Math.abs(pureScalar.lightDeflectionArcsec - 0.875) < 0.003);
  assert.ok(Math.abs(pureScalar.deflectionFractionOfGR - 0.5) < 1e-6);
  assert.ok(Math.abs(pureScalar.shapiroDelayUs / pureScalar.grShapiroDelayUs - 0.5) < 1e-6);
  assert.ok(Math.abs(pureScalar.mercuryPrecessionArcsecCentury - 28.65) < 0.2);
  assert.equal(pureScalar.nordtvedtEta, -3);
  assert.equal(pureScalar.verdictLabel, 'Falsified by Solar-System Tests');

  const expTimeOnly = computePpnObservables(0, 1, 1.0);
  assert.ok(Math.abs(expTimeOnly.mercuryPrecessionArcsecCentury - 14.33) < 0.2);
  assert.equal(expTimeOnly.nordtvedtEta, 1);

  const fullGrOrDualUpdate = computePpnObservables(1, 1, 1.0);
  assert.ok(Math.abs(fullGrOrDualUpdate.lightDeflectionArcsec - 1.750) < 0.005);
  assert.ok(Math.abs(fullGrOrDualUpdate.mercuryPrecessionArcsecCentury - 42.98) < 0.15);
  assert.equal(fullGrOrDualUpdate.nordtvedtEta, 0);
  assert.equal(fullGrOrDualUpdate.verdictLabel, 'Consistent with Weak-Field GR');
});

test('computeHorizonUpdateProfile and computeHaywardRegularCore resolve regular finite cores, horizons, and echoes', () => {
  const nearHorizon = computeHorizonUpdateProfile(1.01, 10, 0.1);
  assert.ok(nearHorizon.localUpdateRateRatio < 0.11);
  assert.ok(nearHorizon.effectiveRefractiveIndex > 100);
  assert.ok(nearHorizon.kretschmannNormalized > 0.9 && nearHorizon.kretschmannNormalized < 1.0);
  assert.ok(Math.abs(nearHorizon.echoDelayMs - 0.454) < 0.005);
  assert.ok(nearHorizon.planckEchoDelayMs > 17.4 && nearHorizon.planckEchoDelayMs < 18.2);
  assert.ok(nearHorizon.hawkingTempK > 5e-9 && nearHorizon.hawkingTempK < 7e-9);

  const haywardCore = computeHaywardRegularCore(1e-4, 10, 0.05);
  assert.equal(haywardCore.hasHorizons, true);
  assert.ok(haywardCore.outerHorizonOverRs > 0.99 && haywardCore.outerHorizonOverRs < 1.0);
  assert.ok(haywardCore.innerHorizonOverRs > 0.04 && haywardCore.innerHorizonOverRs < 0.06);
  // Kretschmann scalar smoothly approaches exact core limit 24 / l0^4
  const relErrCore =
    Math.abs(haywardCore.kretschmannMetersMinus4 - haywardCore.coreKretschmannMetersMinus4) /
    haywardCore.coreKretschmannMetersMinus4;
  assert.ok(relErrCore < 1e-3, `Expected finite core Kretschmann convergence, got relErr=${relErrCore}`);
  assert.ok(haywardCore.hawkingTempK > 5e-9 && haywardCore.hawkingTempK < 7e-9);
  assert.ok(haywardCore.shadowDiameterOverRs < 3 * Math.sqrt(3));
});

test('computeDiscreteStepDispersion and computeOneLoopHiggsLapseCheck validate UV bounds and Higgs loop invariance', () => {
  const k1 = computeCosmologicalDispersionKernelSec(0.903, 1);
  assert.ok(k1 > 4e17 && k1 < 5.5e17);

  const grbLinear = computeDiscreteStepDispersion(31, 0.903, 0, 1);
  assert.ok(grbLinear.arrivalLagSeconds > 0.829);
  assert.equal(grbLinear.isRuledOutAtLinearPlanck, true);

  const lhaasoQuad = computeDiscreteStepDispersion(18_000, 0.151, 0, 2);
  assert.ok(lhaasoQuad.arrivalLagSeconds < 1e-12);

  const higgsLoop = computeOneLoopHiggsLapseCheck(1e10);
  assert.equal(higgsLoop.lapseRescalingChangesLoop, false);
  assert.ok(higgsLoop.oneLoopTopDeltaMSqGeV2 > 3e18 && higgsLoop.oneLoopTopDeltaMSqGeV2 < 4e18);
  assert.ok(higgsLoop.fineTuningRatio > 1e14);
});

test('getReproducibilityManifest exposes structured constants and computed checkpoints', () => {
  const manifest = getReproducibilityManifest();
  assert.ok(manifest.constantsSource.includes('CODATA 2022'));
  assert.ok(manifest.keyCheckpoints.length >= 8);
  assert.ok(manifest.keyCheckpoints.some((c) => c.name.includes('3,000 m')));
  assert.ok(manifest.keyCheckpoints.some((c) => c.name.includes('RK4 Solar-Limb')));
  assert.ok(manifest.keyCheckpoints.some((c) => c.name.includes('PSR B1913+16')));
  assert.ok(manifest.keyCheckpoints.some((c) => c.name.includes('GHZ Cat')));
});

test('integrateNullDeflectionRK4 reproduces GR 1.751 arcsec, scalar 0.876 arcsec, nonlinear 4 r_s bending, and photon capture', () => {
  const gr = integrateNullDeflectionRK4(1, 235_571.3, 180);
  assert.equal(gr.capturedByPhotonSphere, false);
  assert.ok(Math.abs(gr.rk4DeflectionArcsec - 1.7512) < 1e-3);
  assert.ok(gr.relativeDifferencePct < 0.01);

  const scalar = integrateNullDeflectionRK4(0, 235_571.3, 180);
  assert.ok(Math.abs(scalar.rk4DeflectionArcsec - 0.8756) < 1e-3);
  assert.ok(Math.abs(scalar.rk4DeflectionArcsec / gr.rk4DeflectionArcsec - 0.5) < 1e-4);

  const strong = integrateNullDeflectionRK4(1, 4.0, 220);
  assert.equal(strong.capturedByPhotonSphere, false);
  assert.ok(strong.rk4DeflectionArcsec > 150_000);

  const captured = integrateNullDeflectionRK4(1, 2.4, 180);
  assert.equal(captured.capturedByPhotonSphere, true);
  assert.equal(captured.rk4DeflectionArcsec, Infinity);
});

test('computePainleveGordonBridge and computeAdmConstraintResidual confirm flat PG 3-slice iso and vacuum violation for gamma=0', () => {
  const pg = computePainleveGordonBridge(4.0, 10);
  assert.equal(pg.pgLapse, 1);
  assert.equal(pg.pgSpatialRicciScalar, 0);
  assert.ok(Math.abs(pg.inflowSpeedOverC - 0.5) < 1e-9);
  assert.ok(Math.abs(pg.outwardNullSpeedOverC - 0.5) < 1e-9);
  assert.ok(Math.abs(pg.inwardNullSpeedOverC - 1.5) < 1e-9);

  const pgHor = computePainleveGordonBridge(1.0, 10);
  assert.ok(Math.abs(pgHor.outwardNullSpeedOverC) < 1e-9);

  const admGr = computeAdmConstraintResidual(3.0, 1);
  assert.equal(admGr.satisfiesVacuumEinstein, true);
  assert.ok(Math.abs(admGr.radialEinsteinTimesRs2) < 1e-12);
  assert.ok(Math.abs(admGr.spatialRicciTimesRs2) < 1e-12);

  const admScalar = computeAdmConstraintResidual(3.0, 0);
  assert.equal(admScalar.satisfiesVacuumEinstein, false);
  assert.ok(Math.abs(admScalar.radialEinsteinTimesRs2 - (2 / 9) * (-1 / 3 + 1 / 2)) < 1e-3 || admScalar.radialEinsteinTimesRs2 > 0.05);
  assert.ok(Math.abs(admScalar.radialEinsteinTimesRs2 - 1 / 18) < 1e-9);
});

test('computeHaywardStrongFieldObservables, computeLindbladClockVisibility, and computeBinaryPulsarRadiation yield exact observables', () => {
  const sf05 = computeHaywardStrongFieldObservables(10, 0.05);
  assert.ok(Math.abs(sf05.photonSphereOverRs - 1.49777) < 1e-3);
  assert.ok(Math.abs(sf05.eikonalQnmOmegaRM - 0.3852) < 1e-3);
  assert.ok(sf05.qnmShiftPct > 0.05 && sf05.qnmShiftPct < 0.12);
  assert.ok(sf05.cauchyKappaRatio > 30);
  assert.ok(sf05.tidalLoveNumberK2 > 0.03 && sf05.tidalLoveNumberK2 < 0.06);

  const sf30 = computeHaywardStrongFieldObservables(10, 0.30);
  assert.ok(sf30.photonSphereOverRs < sf05.photonSphereOverRs);
  assert.ok(sf30.qnmShiftPct > 2.5);

  const qClock = computeLindbladClockVisibility(1.0, 1.0);
  assert.ok(qClock.unitaryVisibility > 0.985 && qClock.unitaryVisibility < 0.995);
  assert.ok(qClock.lindbladGammaSecInv > 0 && qClock.lindbladGammaSecInv < 1e-40);
  assert.ok(qClock.quantumFisherInfo > 0.08 && qClock.quantumFisherInfo < 0.095);

  const psrGr = computeBinaryPulsarRadiation(1, 1);
  assert.equal(psrGr.matchesHulseTaylor, true);
  assert.ok(Math.abs(psrGr.grQuadrupolePeriodDot + 2.402e-12) < 5e-15);
  assert.ok(Math.abs(psrGr.grPeriastronAdvanceDegYr - 4.2263) < 5e-3);

  const psrScalar = computeBinaryPulsarRadiation(0, 0);
  assert.equal(psrScalar.matchesHulseTaylor, false);
  assert.ok(Math.abs(psrScalar.scalarDipolePeriodDot) > 1e-10);
});

test('computeShapiroLogDelay, computeHaywardIscoAndShadows, computeFiberAndCramerRaoChecks, computeMacroscopicInterferometerBound, and computeLikelihoodRatioGrVsScalar match exact benchmarks', () => {
  const casGr = computeShapiroLogDelay(1, 1.6, 1.0, 8.43);
  const casSc = computeShapiroLogDelay(0, 1.6, 1.0, 8.43);
  assert.ok(Math.abs(casGr.grRoundTripUs - 282.13) < 0.5);
  assert.ok(Math.abs(casSc.shapiroRoundTripUs / casGr.grRoundTripUs - 0.5) < 1e-6);
  assert.ok(Math.abs(casSc.fractionalDeficitPct - 50.0) < 1e-6);
  assert.ok(casSc.cassiniGammaTensionSigma > 43_000);

  const isco05 = computeHaywardIscoAndShadows(0.05);
  assert.ok(Math.abs(isco05.iscoOverRs - 2.9969) < 1e-3);
  assert.ok(Math.abs(isco05.iscoShiftPct + 0.102) < 0.02);
  assert.ok(isco05.m87ShadowDiameterUas > 39 && isco05.m87ShadowDiameterUas < 40.5);
  assert.ok(isco05.sgrAShadowDiameterUas > 49.5 && isco05.sgrAShadowDiameterUas < 51);

  const fiber = computeFiberAndCramerRaoChecks(15, 2000, 1.0, 3600);
  assert.ok(Math.abs(fiber.gravDriftPsPerDayPer10m - 94.3) < 0.5);
  assert.ok(Math.abs(fiber.fiberOneWayDelayUsPerKm - 4.897) < 0.01);
  assert.ok(fiber.cramerRaoFloorFraction > 1.3e-19 && fiber.cramerRaoFloorFraction < 1.5e-19);
  assert.ok(fiber.helstromErrorAtDeltaPhi > 0.3 && fiber.helstromErrorAtDeltaPhi < 0.4);

  const macro = computeMacroscopicInterferometerBound(1.0, 1e-6);
  assert.ok(macro.massEnergyDeltaOmegaSecInv > 9e28);
  assert.ok(macro.planckLindbladRateSecInv > 2e14 && macro.planckLindbladRateSecInv < 3e14);

  const lhood = computeLikelihoodRatioGrVsScalar();
  assert.ok(lhood.chiSquaredGr < 10);
  assert.ok(lhood.deltaLogLikelihood > 3.0e9 && lhood.deltaLogLikelihood < 3.2e9);
  assert.ok(lhood.sigmaRejectionEquivalent > 75_000);
});

test('new tabletop GHZ cat, antimatter/neutrino, cosmological/GW, and strong-field core extension solvers match SI bounds', () => {
  const cat = computeQuantumEntanglementAndClockCat(0.01, 1.0, 8, 25.0);
  assert.ok(cat.ghzCatFreqDiffHz > 3e-3 && cat.ghzCatFreqDiffHz < 4e-3);
  assert.ok(cat.ghzCatVisibilityShift > 0.99);
  assert.ok(cat.trappedIonConcurrenceDecay > 0.95 && cat.trappedIonConcurrenceDecay < 0.97);
  assert.ok(cat.totalTabletopBudgetStrain > 2e-22 && cat.totalTabletopBudgetStrain < 5e-22);
  assert.ok(cat.rotatingAtomSagnacRad > 30 && cat.gravitationalAharonovBohmRad > 100);

  const antiGr = computeAntimatterAndNeutrinoClockBounds(100, 1.0);
  const antiSc = computeAntimatterAndNeutrinoClockBounds(100, 0.0);
  assert.equal(antiGr.alphaGAntimatterWepTarget, 1e-18);
  assert.equal(antiGr.strongLensNonMetricResidualRatio, 0);
  assert.equal(antiSc.strongLensNonMetricResidualRatio, 0.5);
  assert.ok(antiGr.neutrinoClockPhaseShiftRad > 1e-16 && antiGr.neutrinoClockPhaseShiftRad < 1e-11);

  const cosmo = computeCosmologicalAndGwUpdateBounds(1e-4, 0.01);
  assert.equal(cosmo.gw170817SpeedBound, 3e-15);
  assert.equal(cosmo.cmbThetaStarInvarianceShift, 0.0);
  assert.ok(cosmo.lisaGwDispersionSensitivity <= 1e-19);
  assert.ok(cosmo.yukawaComptonRangeM > 1e-3 && cosmo.yukawaComptonRangeM < 3e-3);

  const sf = computeStrongFieldCoreExtensions(0.05, 10);
  assert.ok(sf.echoCombSpacingHz > 800 && sf.echoCombSpacingHz < 900);
  assert.ok(sf.rwZerilliIsospectralSplitPct > 0.05 && sf.rwZerilliIsospectralSplitPct < 0.2);
  assert.ok(sf.loveNumberK2 > 0.03 && sf.loveNumberK2 < 0.06);
  assert.ok(sf.bekensteinEntropyCoreDeltaPct < 0);
  assert.ok(sf.bayesianLogEvidenceGrVsScalar > 3.0e9);
});

test('Paper 14 referee standards: single-paragraph <=200-word Abstract, 12-term Glossary, <=40 References, Reproducibility Appendix F, and clean prose', () => {
  assert.equal(CLOCK_SPEED_CHAPTERS.length, 9);
  assert.equal(CLOCK_SPEED_APPENDICES.length, 6);
  assert.equal(CLOCK_SPEED_GLOSSARY.length, 12);
  assert.ok(CLOCK_SPEED_SYMBOL_GLOSSARY.length >= 10);
  assert.ok(CLOCK_SPEED_REFERENCES.length <= 40, `Expected <= 40 references, got ${CLOCK_SPEED_REFERENCES.length}`);
  assert.equal(CLOCK_SPEED_REFERENCES.length, 40);
  assert.equal(TABLE_5_2_PPN_BOUNDS.length, 7);
  assert.equal(TABLE_5_3_WILL_COMPARISON.length, 5);
  assert.ok(TABLE_8_1_PREDICTIONS_MATRIX.every((r) => Boolean(r.statusBadge && r.falsificationCriterion)));
  assert.ok(TABLE_8_2_NEXT_GEN_ROADMAP.some((r) => r.facility.includes('AION')));
  assert.ok(TABLE_8_3_MULTISURVEY_EMPIRICAL.length >= 6);
  assert.ok(TABLE_8_4_TABLETOP_PROTOCOL.length >= 4);
  assert.ok(CLOCK_SPEED_FIGURES.some((f) => f.figureNumber === 'Fig. 0.1' && f.anchorChapter === 0));
  assert.ok(CLOCK_SPEED_FIGURES.some((f) => f.figureNumber === 'Fig. 8.2' && f.anchorChapter === 8));

  // Abstract is strictly one paragraph <= 200 words, with no plain-language split
  assert.equal('CLOCK_SPEED_PLAIN_SUMMARY' in clockSpeedData, false);
  assert.equal(CLOCK_SPEED_ABSTRACT.length, 1);
  const abstractWords = CLOCK_SPEED_ABSTRACT[0].trim().split(/\s+/).filter(Boolean).length;
  assert.ok(abstractWords >= 120 && abstractWords <= 200, `Expected single-paragraph abstract <= 200 words, got ${abstractWords}`);

  // Clean Yale affiliation and no review-panel leaks or preprint label
  const authorOne = CLOCK_SPEED_META.authors[0];
  assert.equal(authorOne.affiliation, 'Department of Physics, Yale University, New Haven, CT 06520, USA');
  assert.equal('monographId' in CLOCK_SPEED_META, false);

  // Chapter 1 covers history, post-LHC ultraviolet context, and applied metrology domains
  const ch1Text = JSON.stringify(CLOCK_SPEED_CHAPTERS[0]).toLowerCase();
  assert.ok(ch1Text.includes('newton') && ch1Text.includes('gordon'));
  assert.ok(ch1Text.includes('large hadron collider') && ch1Text.includes('higgs') && ch1Text.includes('lhcb'));
  assert.ok(ch1Text.includes('chronometric geodesy') && ch1Text.includes('telecommunications') && ch1Text.includes('quantum'));

  // Chapter 9 philosophical synthesis engages canonical structuralism, conventionalism, and Morita equivalence
  const ch9Text = JSON.stringify(CLOCK_SPEED_CHAPTERS[8]);
  assert.ok(CLOCK_SPEED_CHAPTERS[8].title.includes('Structural Realism'));
  assert.ok(ch9Text.includes('Reichenbach') && ch9Text.includes('Worrall') && ch9Text.includes('Ladyman'));
  assert.ok(ch9Text.includes('Earman') && ch9Text.includes('Weatherall'));
  assert.ok(ch9Text.includes('Grünbaum') && ch9Text.includes('Bridgman') && ch9Text.includes('Morita'));

  // Key analytic coverage across Ch 2, Ch 3, Ch 5, Ch 6, Ch 7, App E, App F
  const ch2Text = JSON.stringify(CLOCK_SPEED_CHAPTERS[1]);
  const ch3Text = JSON.stringify(CLOCK_SPEED_CHAPTERS[2]);
  const ch6Text = JSON.stringify(CLOCK_SPEED_CHAPTERS[5]);
  assert.ok(ch2Text.includes('Kruskal'));
  assert.ok(ch3Text.includes('Hamiltonian') && ch3Text.includes('de Felice') && ch3Text.includes('Jacobson') && ch3Text.includes('Verlinde'));
  assert.ok(ch6Text.includes('Zerilli') && (ch6Text.includes('Page curve') || ch6Text.includes('Page-curve')));

  // References cite included IGRT papers H11 and H13 without redundant padding
  const refsText = CLOCK_SPEED_REFERENCES.map((r) => r.citation).join(' ');
  assert.ok(refsText.includes('IGRT-2026-H11') || refsText.includes('Bulaqueña'));

  // Minimal equations inside Chapters 1-9 (<= 5 essential display equations, zero theorem/worked boxes inside main body)
  const chapterEquationCount = CLOCK_SPEED_CHAPTERS.reduce(
    (acc, ch) => acc + ch.subsections.filter((s) => Boolean(s.equation)).length,
    0
  );
  assert.ok(chapterEquationCount <= 5, `Expected <= 5 equations in chapters, found ${chapterEquationCount}`);
  const chapterWorkedCount = CLOCK_SPEED_CHAPTERS.reduce(
    (acc, ch) => acc + ch.subsections.filter((s) => Boolean(s.workedExample || s.theoremBox)).length,
    0
  );
  assert.equal(chapterWorkedCount, 0);

  // Appendices house derivations, theorems, worked examples, and Appendix F Reproducibility ledger
  const appendixTheorems = CLOCK_SPEED_APPENDICES.reduce((acc, a) => acc + (a.theoremBoxes?.length ?? 0), 0);
  const appendixWorked = CLOCK_SPEED_APPENDICES.reduce((acc, a) => acc + (a.workedExamples?.length ?? 0), 0);
  const appendixF = CLOCK_SPEED_APPENDICES[5];
  assert.ok(appendixTheorems >= 4);
  assert.ok(appendixWorked >= 3);
  assert.ok(appendixF.title.includes('Reproducibility'));
  assert.ok((appendixF.reproducibilityLedger?.length ?? 0) >= 7);

  // Zero forbidden designations, meta-asides, rhetorical clichés, or SI Audit bloat
  const fullTextBlob = JSON.stringify({
    CLOCK_SPEED_META,
    CLOCK_SPEED_ABSTRACT,
    CLOCK_SPEED_CHAPTERS,
    CLOCK_SPEED_GLOSSARY,
    CLOCK_SPEED_SYMBOL_GLOSSARY,
    TABLE_8_3_MULTISURVEY_EMPIRICAL,
    TABLE_8_4_TABLETOP_PROTOCOL,
    CLOCK_SPEED_APPENDICES,
    CLOCK_SPEED_REFERENCES,
    CLOCK_SPEED_FIGURES
  });
  const lowerBlob = fullTextBlob.toLowerCase();
  for (const banned of [
    'igrt-2026-h14',
    'monograph',
    'on leave from',
    'panel of 25',
    'plain-language',
    'plain language',
    'executive overview',
    'further reading',
    'worked calculation',
    'non-specialist',
    'notice how',
    'si dimensional audit',
    'two maps',
    'decision horizon',
    'adversarial',
    'arbiter',
    'we prove',
    'sharp case'
  ]) {
    assert.equal(lowerBlob.includes(banned), false, `Forbidden token found: ${banned}`);
  }

  // Zero question marks outside paper title and bibliographic citations
  const proseNoTitleOrRefs = JSON.stringify({
    CLOCK_SPEED_ABSTRACT,
    CLOCK_SPEED_CHAPTERS,
    CLOCK_SPEED_GLOSSARY,
    CLOCK_SPEED_SYMBOL_GLOSSARY,
    TABLE_8_3_MULTISURVEY_EMPIRICAL,
    TABLE_8_4_TABLETOP_PROTOCOL,
    CLOCK_SPEED_APPENDICES,
    CLOCK_SPEED_FIGURES
  });
  assert.equal(proseNoTitleOrRefs.includes('?'), false, 'Unexpected question mark found in Paper 14 body prose');

  // Zero unresolved raw LaTeX delimiters or commands in Paper 14 prose/equations
  assert.equal(/\\(?:frac|sqrt|alpha|beta|gamma|nabla|partial|int)\b/.test(fullTextBlob), false);
  assert.equal(/\$[^$]+\$/.test(fullTextBlob), false);

  // Every chapter 1-9 opens with >= 2 engaging chapterIntro paragraphs across data and exports
  for (const ch of CLOCK_SPEED_CHAPTERS) {
    assert.ok(Array.isArray(ch.chapterIntro) && ch.chapterIntro.length >= 2, `Missing chapterIntro on Ch. ${ch.number}`);
    assert.ok(ch.chapterIntro.every((p) => p.trim().length > 120), `Too short chapterIntro on Ch. ${ch.number}`);
  }

  const md = buildClockSpeedMarkdown();
  const mdLower = md.toLowerCase();
  assert.equal(mdLower.includes('igrt-2026-h14'), false);
  assert.equal(mdLower.includes('monograph'), false);
  assert.equal(mdLower.includes('si dimensional audit'), false);
  assert.ok(md.includes('### Introduction'));
  assert.ok(md.includes('## References\n'));
  assert.ok(md.includes('Fig. 0.1'));
  assert.ok(md.includes('Table 4.1'));
  assert.ok(md.includes('Table 5.1'));
  assert.ok(md.includes('Table 5.2'));
  assert.ok(md.includes('Table 5.3'));
  assert.ok(md.includes('Table 6.1'));
  assert.ok(md.includes('Table 8.1'));
  assert.ok(md.includes('Table 8.2'));
  assert.ok(md.includes('Table 8.3'));
  assert.ok(md.includes('Table 8.4'));
  assert.ok(md.includes('Fig. 8.2'));
  assert.ok(md.includes('Glossary of Symbols'));
  assert.ok(md.includes('Reproducibility'));
  assert.ok(md.includes('Nordtvedt'));

  const html = buildClockSpeedSelfContainedHtml();
  const htmlLower = html.toLowerCase();
  assert.equal(htmlLower.includes('igrt-2026-h14'), false);
  assert.equal(htmlLower.includes('monograph'), false);
  assert.ok(html.includes('<div class="chapter-intro"><div class="intro-label">Introduction</div>'));
  assert.ok(html.includes('<h2>References</h2>'));
  assert.ok(html.includes('Fig. 0.1'));
  assert.ok(html.includes('Table 5.2'));
  assert.ok(html.includes('Table 5.3'));
  assert.ok(html.includes('Table 8.3'));
  assert.ok(html.includes('Table 8.4'));
  assert.ok(html.includes('Glossary of Symbols'));
  assert.ok(html.includes('What Would Falsify'));
  assert.ok(html.includes('Theorem A.1'));
  assert.ok(html.includes('Theorem A.2'));
  assert.ok(html.includes('Proposition E.2'));
  assert.ok(html.includes('Reproducibility'));

  const tex = buildClockSpeedLatex();
  assert.equal(tex.includes('IGRT-2026-H14'), false);
  assert.equal(tex.includes('²') || tex.includes('⁻¹') || tex.includes('₀'), false);
  assert.ok(tex.includes('\\clearpage'));
  assert.ok(tex.includes('\\paragraph*{Introduction}'));
  assert.ok(tex.includes('Complete PPN Parameter Bounds (Will 2014)'));
  assert.ok(tex.includes('Step-by-Step Comparison Against Will (2014) PPN Derivation'));
  assert.ok(tex.includes('Multi-Survey Empirical Grounding, Calibration, and Systematics'));
  assert.ok(tex.includes('Tabletop Experimental Protocol, Budget, and Decision Thresholds'));
  assert.ok(tex.includes('Glossary of Symbols and Physical Conventions'));
  assert.ok(tex.includes('Reproducibility and Numerical Verification Protocol'));
});
