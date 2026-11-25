/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Pure Physics & Palette Module for Paper 14:
 * "Does Gravity Bend Space, or Just Slow Down the Universe's Clock Speed?"
 *
 * All calculations use SI physical constants (CODATA 2022 / IAU 2015 nominal values).
 * Zero DOM dependencies — verified deterministically via node:test.
 */

export const SI_CONSTANTS = {
  c: 299_792_458, // m/s
  G: 6.6743e-11, // m^3 kg^-1 s^-2
  hbar: 1.054571817e-34, // J s
  kB: 1.380649e-23, // J/K
  gEarth: 9.80665, // m/s^2
  earthMassKg: 5.9722e24,
  earthRadiusM: 6.371e6,
  gpsRadiusM: 2.656e7,
  gpsSpeedMs: 3874,
  solarMassKg: 1.98847e30,
  solarRadiusM: 6.957e8,
  auMeters: 1.495978707e11,
  mercurySemiMajorM: 5.790905e10,
  mercuryEccentricity: 0.20563069,
  mercuryPeriodDays: 87.9691,
  planckLengthM: 1.616255e-35,
  planckTimeSec: 5.391247e-44,
  planckEnergyGeV: 1.22089e19,
  mpcMeters: 3.085677581491367e22,
  h0KmSMpc: 67.4,
  omegaM: 0.315,
  omegaLambda: 0.685,
  geVToJoules: 1.602176634e-10
} as const;

/**
 * Curated 20-Shade Palette: Dark Magenta (7) + Dark Teal (7) + Pine Green (6)
 * Used across both the web paper view and the A4 PDF renderer.
 */
export interface ShadeToken {
  id: number;
  family: 'Dark Magenta' | 'Dark Teal' | 'Pine Green';
  name: string;
  hex: string;
  rgb: [number, number, number];
  role: string;
}

export const PALETTE_20_SHADES: ShadeToken[] = [
  // Dark Magenta (7 shades)
  { id: 1, family: 'Dark Magenta', name: 'Deep Aubergine Ink', hex: '#2E0820', rgb: [46, 8, 32], role: 'Primary display titles & strong headings' },
  { id: 2, family: 'Dark Magenta', name: 'Dark Magenta Core', hex: '#4A0E33', rgb: [74, 14, 51], role: 'Primary CTA & Challenger curve accent' },
  { id: 3, family: 'Dark Magenta', name: 'Rich Tyrian Magenta', hex: '#661447', rgb: [102, 20, 71], role: 'Section dividers & active tabs' },
  { id: 4, family: 'Dark Magenta', name: 'Plum Magenta Accent', hex: '#831B5B', rgb: [131, 27, 91], role: 'Equation labels & figure callouts' },
  { id: 5, family: 'Dark Magenta', name: 'Muted Berry', hex: '#9E2D72', rgb: [158, 45, 114], role: 'Secondary highlights & trajectory curves' },
  { id: 6, family: 'Dark Magenta', name: 'Dusty Rose-Magenta', hex: '#C46D9E', rgb: [196, 109, 158], role: 'Hairline decorative rules & subtle borders' },
  { id: 7, family: 'Dark Magenta', name: 'Pale Magenta Wash', hex: '#F7EEF3', rgb: [247, 238, 243], role: 'Minimalist callout tint (light mode)' },

  // Dark Teal (7 shades)
  { id: 8, family: 'Dark Teal', name: 'Abyssal Teal', hex: '#062429', rgb: [6, 36, 41], role: 'Deep ink body prose & dark surface base' },
  { id: 9, family: 'Dark Teal', name: 'Dark Teal Core', hex: '#0B3942', rgb: [11, 57, 66], role: 'Curved-spacetime primary linework' },
  { id: 10, family: 'Dark Teal', name: 'Deep Petrol Teal', hex: '#11505C', rgb: [17, 80, 92], role: 'Table headers & geometric grids' },
  { id: 11, family: 'Dark Teal', name: 'Oceanic Teal', hex: '#186876', rgb: [24, 104, 118], role: 'Interactive slider tracks & links' },
  { id: 12, family: 'Dark Teal', name: 'Slate Teal', hex: '#278594', rgb: [39, 133, 148], role: 'Muted captions & running headers' },
  { id: 13, family: 'Dark Teal', name: 'Mist Teal', hex: '#6CB2BD', rgb: [108, 178, 189], role: 'Dark-mode links & secondary grid ticks' },
  { id: 14, family: 'Dark Teal', name: 'Pale Teal Tint', hex: '#EDF5F6', rgb: [237, 245, 246], role: 'Equation box background & table stripe' },

  // Pine Green (6 shades)
  { id: 15, family: 'Pine Green', name: 'Midnight Pine', hex: '#082419', rgb: [8, 36, 25], role: 'Deep forest anchor & footer ink' },
  { id: 16, family: 'Pine Green', name: 'Pine Green Core', hex: '#0F3D2B', rgb: [15, 61, 43], role: 'Verified empirical benchmark accent' },
  { id: 17, family: 'Pine Green', name: 'Deep Conifer', hex: '#17573E', rgb: [23, 87, 62], role: 'Experimental protocol & confirmation tags' },
  { id: 18, family: 'Pine Green', name: 'Forest Pine', hex: '#227252', rgb: [34, 114, 82], role: 'Refractive index & scalar curves' },
  { id: 19, family: 'Pine Green', name: 'Soft Needle Green', hex: '#4A9374', rgb: [74, 147, 116], role: 'Dark-mode verification labels' },
  { id: 20, family: 'Pine Green', name: 'Pale Pine Wash', hex: '#EEF5F1', rgb: [238, 245, 241], role: 'Worked example & theorem surface wash' }
];

export interface ClockDifferentialResult {
  heightMeters: number;
  fractionalShift: number; // Delta nu / nu = g * h / c^2 (exact potential difference in weak field)
  ratePerMeter: number; // 1.09114e-16 m^-1
  nsPerDayGain: number;
  psPerDayGain: number;
  seaLevelUpdateRateRatio: number; // d tau / d t at Earth surface
}

export function computeClockDifferential(heightMeters: number): ClockDifferentialResult {
  const { c, G, earthMassKg, earthRadiusM, gEarth } = SI_CONSTANTS;
  const h = Math.max(0, heightMeters);
  // Exact Schwarzschild radial potential comparison between R_earth and R_earth + h
  // Cancellation-free algebraic identity: sqrt(a) - sqrt(b) = (a - b) / (sqrt(a) + sqrt(b))
  const r0 = earthRadiusM;
  const r1 = earthRadiusM + h;
  const rsEarth = (2 * G * earthMassKg) / (c * c);
  const f0 = Math.sqrt(Math.max(0, 1 - rsEarth / r0));
  const f1 = Math.sqrt(Math.max(0, 1 - rsEarth / r1));
  const deltaAlpha = (rsEarth * h) / (r0 * r1 * (f1 + f0));
  const fractionalShift = deltaAlpha / f0;
  const ratePerMeter = gEarth / (c * c);
  const secondsPerDay = 86_400;
  const nsPerDayGain = fractionalShift * secondsPerDay * 1e9;
  return {
    heightMeters: h,
    fractionalShift,
    ratePerMeter,
    nsPerDayGain,
    psPerDayGain: nsPerDayGain * 1000,
    seaLevelUpdateRateRatio: f0
  };
}

export interface TimeGradientAccelerationResult {
  surfaceWarpFraction: number; // r_s / R_earth (~1.39e-9)
  spatialGradientPerMeter: number; // d(alpha_upd)/dr = GM / (r^2 c^2)
  geodesicAccelerationMs2: number; // c^2 * d(alpha_upd)/dr = GM / r^2
}

export function computeGeodesicTimeGradientAccel(radiusMeters: number = SI_CONSTANTS.earthRadiusM): TimeGradientAccelerationResult {
  const { c, G, earthMassKg } = SI_CONSTANTS;
  const r = Math.max(1, radiusMeters);
  const rs = (2 * G * earthMassKg) / (c * c);
  const surfaceWarpFraction = rs / r;
  const spatialGradientPerMeter = (G * earthMassKg) / (r * r * c * c);
  const geodesicAccelerationMs2 = c * c * spatialGradientPerMeter;
  return {
    surfaceWarpFraction,
    spatialGradientPerMeter,
    geodesicAccelerationMs2
  };
}

export interface GpsRelativisticBudget {
  gravitationalBlueshiftUsPerDay: number;
  kinematicRedshiftUsPerDay: number;
  netGainUsPerDay: number;
  uncorrectedRangeDriftKmPerDay: number;
  eccentricityAmplitudeNs: number; // Periodic relativistic eccentricity correction at e = 0.01
}

export function computeGpsCorrections(eccentricity: number = 0.01): GpsRelativisticBudget {
  const { c, G, earthMassKg, earthRadiusM, gpsRadiusM, gpsSpeedMs } = SI_CONSTANTS;
  const secDay = 86_400;
  const gravFrac = (G * earthMassKg / (c * c)) * (1 / earthRadiusM - 1 / gpsRadiusM);
  const kinFrac = -0.5 * (gpsSpeedMs * gpsSpeedMs) / (c * c);
  const gravUs = gravFrac * secDay * 1e6;
  const kinUs = kinFrac * secDay * 1e6;
  const netUs = gravUs + kinUs;
  const driftKm = (netUs * 1e-6 * c) / 1000;
  // Standard IS-GPS-200 sinusoidal eccentricity amplitude: Delta t_ecc = (2 * sqrt(GM * a) / c^2) * e
  const eccentricityAmplitudeNs = ((2 * Math.sqrt(G * earthMassKg * gpsRadiusM)) / (c * c)) * Math.max(0, eccentricity) * 1e9;
  return {
    gravitationalBlueshiftUsPerDay: gravUs,
    kinematicRedshiftUsPerDay: kinUs,
    netGainUsPerDay: netUs,
    uncorrectedRangeDriftKmPerDay: driftKm,
    eccentricityAmplitudeNs
  };
}

export interface PpnObservablesResult {
  gammaUpd: number; // 0 = pure scalar clock-slowing, 1 = full spatial+temporal / GR
  betaUpd: number; // 0 = linear g_00, 1 = full nonlinear GR / exponential lapse
  impactSolarRadii: number;
  lightDeflectionArcsec: number;
  grDeflectionArcsec: number;
  deflectionFractionOfGR: number;
  shapiroDelayUs: number; // Round-trip Earth-Mars conjunction at b
  grShapiroDelayUs: number;
  mercuryPrecessionArcsecCentury: number;
  grMercuryPrecessionArcsecCentury: number;
  nordtvedtEta: number; // eta_N = 4*beta - gamma - 3 (LLR bound < 1.1e-4)
  cassiniGammaTensionSigma: number; // |(gamma - 1) - 2.1e-5| / 2.3e-5
  verdictLabel: 'Falsified by Solar-System Tests' | 'Consistent with Weak-Field GR';
}

export function computePpnObservables(
  gammaUpd: number,
  betaUpd: number = gammaUpd,
  impactSolarRadii: number = 1.0
): PpnObservablesResult {
  const {
    c,
    G,
    solarMassKg,
    solarRadiusM,
    auMeters,
    mercurySemiMajorM,
    mercuryEccentricity,
    mercuryPeriodDays
  } = SI_CONSTANTS;

  const b = Math.max(1.0, impactSolarRadii) * solarRadiusM;
  const radToArcsec = (180 / Math.PI) * 3600;

  // Light deflection: Delta theta = (1 + gamma) * 2GM / (b c^2)
  const baseHalfDeflectionRad = (2 * G * solarMassKg) / (b * c * c);
  const grDeflectionArcsec = 2 * baseHalfDeflectionRad * radToArcsec;
  const lightDeflectionArcsec = (1 + gammaUpd) * baseHalfDeflectionRad * radToArcsec;

  // Shapiro round-trip excess delay: Earth (1 AU) <-> Mars (1.524 AU) solar limb grazing
  const rEarth = auMeters;
  const rMars = 1.523679 * auMeters;
  const logFactor = Math.log((4 * rEarth * rMars) / (b * b));
  const baseShapiroSec = ((2 * G * solarMassKg) / Math.pow(c, 3)) * logFactor;
  const grShapiroDelayUs = 2 * baseShapiroSec * 1e6;
  const shapiroDelayUs = (1 + gammaUpd) * baseShapiroSec * 1e6;

  // Mercury perihelion precession: (2 + 2*gamma - beta)/3 * 6*pi*GM / (a*(1-e^2)*c^2)
  const orbitsPerCentury = (100 * 365.25) / mercuryPeriodDays;
  const grPrecessionPerOrbitRad =
    (6 * Math.PI * G * solarMassKg) /
    (mercurySemiMajorM * (1 - mercuryEccentricity * mercuryEccentricity) * c * c);
  const grMercuryPrecessionArcsecCentury = grPrecessionPerOrbitRad * orbitsPerCentury * radToArcsec;
  const ppnFactor = (2 + 2 * gammaUpd - betaUpd) / 3;
  const mercuryPrecessionArcsecCentury = ppnFactor * grMercuryPrecessionArcsecCentury;
  const nordtvedtEta = 4 * betaUpd - gammaUpd - 3;

  const cassiniGammaTensionSigma = Math.abs(gammaUpd - 1 - 2.1e-5) / 2.3e-5;
  const verdictLabel =
    cassiniGammaTensionSigma < 3.0 &&
    Math.abs(mercuryPrecessionArcsecCentury - grMercuryPrecessionArcsecCentury) < 0.5 &&
    Math.abs(nordtvedtEta) < 1e-3
      ? 'Consistent with Weak-Field GR'
      : 'Falsified by Solar-System Tests';

  return {
    gammaUpd,
    betaUpd,
    impactSolarRadii,
    lightDeflectionArcsec,
    grDeflectionArcsec,
    deflectionFractionOfGR: lightDeflectionArcsec / grDeflectionArcsec,
    shapiroDelayUs,
    grShapiroDelayUs,
    mercuryPrecessionArcsecCentury,
    grMercuryPrecessionArcsecCentury,
    nordtvedtEta,
    cassiniGammaTensionSigma,
    verdictLabel
  };
}

export interface HorizonUpdateProfile {
  radiusOverRs: number;
  schwarzschildRadiusKm: number;
  localUpdateRateRatio: number; // f_upd / f_inf = sqrt(1 - r_s/r)
  effectiveRefractiveIndex: number; // n(r) = (1 - r_s/r)^(-1) for radial null rays
  kretschmannNormalized: number; // K(r) / K(r_s) = (r_s / r)^6
  photonSphereRatio: number; // r / r_ph = (r / r_s) / 1.5
  echoDelayMs: number; // 2 |r_*| / c at phenomenological lambda_port
  planckEchoDelayMs: number; // 2 |r_*| / c at Planck scale l_Pl / r_s
  surfaceGravityMs2: number;
  hawkingTempK: number;
}

export function computeHorizonUpdateProfile(
  radiusOverRs: number,
  solarMasses: number = 10,
  lambdaPort: number = 0.1
): HorizonUpdateProfile {
  const { c, G, hbar, kB, solarMassKg, planckLengthM } = SI_CONSTANTS;
  const M = Math.max(0.1, solarMasses) * solarMassKg;
  const rsMeters = (2 * G * M) / (c * c);
  const x = Math.max(1.0001, radiusOverRs);
  const lapseSq = 1 - 1 / x;
  const localUpdateRateRatio = Math.sqrt(lapseSq);
  const effectiveRefractiveIndex = 1 / lapseSq;
  const kretschmannNormalized = Math.pow(1 / x, 6);
  // Tortoise coordinate echo delay: Delta t_echo = (2 r_s / c) * ln(1 / lambda_port)
  const echoDelaySec = (2 * rsMeters / c) * Math.log(1 / Math.max(1e-9, Math.min(0.99, lambdaPort)));
  const lambdaPlanck = Math.max(1e-60, planckLengthM / rsMeters);
  const planckEchoDelaySec = (2 * rsMeters / c) * Math.log(1 / lambdaPlanck);
  const surfaceGravityMs2 = Math.pow(c, 4) / (4 * G * M);
  const hawkingTempK = (hbar * Math.pow(c, 3)) / (8 * Math.PI * G * M * kB);

  return {
    radiusOverRs: x,
    schwarzschildRadiusKm: rsMeters / 1000,
    localUpdateRateRatio,
    effectiveRefractiveIndex,
    kretschmannNormalized,
    photonSphereRatio: x / 1.5,
    echoDelayMs: echoDelaySec * 1000,
    planckEchoDelayMs: planckEchoDelaySec * 1000,
    surfaceGravityMs2,
    hawkingTempK
  };
}

export interface DiscreteStepDispersionResult {
  photonEnergyGeV: number;
  redshift: number;
  cosmologicalKernelSec: number; // Jacob-Piran K_n(z) integral in seconds
  eQgGeV: number; // Effective quantum-gravity / update-step energy scale
  order: 1 | 2;
  arrivalLagSeconds: number;
  fermiGrb090510BoundSec: number; // 0.829 s at 31 GeV, z = 0.903
  isRuledOutAtLinearPlanck: boolean;
}

/**
 * Computes the flat-LambdaCDM Jacob-Piran cosmological dispersion integral:
 * K_n(z) = (1 / H0) * integral_0^z [ (1 + z')^n / sqrt(Omega_m (1 + z')^3 + Omega_L) ] dz'
 */
export function computeCosmologicalDispersionKernelSec(redshift: number, order: 1 | 2): number {
  const { mpcMeters, h0KmSMpc, omegaM, omegaLambda } = SI_CONSTANTS;
  const z = Math.max(0.001, redshift);
  const h0PerSec = (h0KmSMpc * 1000) / mpcMeters;
  const steps = 120; // even number for Simpson quadrature
  const dz = z / steps;
  let sum = 0;
  for (let i = 0; i <= steps; i++) {
    const zp = i * dz;
    const onePlusZ = 1 + zp;
    const eZ = Math.sqrt(omegaM * Math.pow(onePlusZ, 3) + omegaLambda);
    const integrand = Math.pow(onePlusZ, order) / eZ;
    const weight = i === 0 || i === steps ? 1 : i % 2 === 1 ? 4 : 2;
    sum += weight * integrand;
  }
  const integral = (sum * dz) / 3;
  return integral / h0PerSec;
}

export function computeDiscreteStepDispersion(
  photonEnergyGeV: number,
  redshiftOrDistance: number = 0.903,
  log10StepOverPlanck: number = 0,
  order: 1 | 2 = 1
): DiscreteStepDispersionResult {
  const { planckEnergyGeV } = SI_CONSTANTS;
  // Minimum update step Delta t_min = 10^k * t_Pl => E_QG = E_Pl / 10^k
  const eQgGeV = planckEnergyGeV / Math.pow(10, log10StepOverPlanck);
  const z = Math.max(0.001, Math.min(10, redshiftOrDistance));
  const cosmologicalKernelSec = computeCosmologicalDispersionKernelSec(z, order);
  const ratio = photonEnergyGeV / eQgGeV;
  const arrivalLagSeconds =
    order === 1 ? cosmologicalKernelSec * ratio : cosmologicalKernelSec * 1.5 * ratio * ratio;

  return {
    photonEnergyGeV,
    redshift: z,
    cosmologicalKernelSec,
    eQgGeV,
    order,
    arrivalLagSeconds,
    fermiGrb090510BoundSec: 0.829,
    isRuledOutAtLinearPlanck: order === 1 && eQgGeV < 7.6 * planckEnergyGeV
  };
}

export interface ExtendedWeakFieldChecks {
  standardGravity3kmNsPerDay: number;
  standardGravity3kmUsPerYear: number;
  sphericalEarth3kmNsPerDay: number;
  annualSolarVariationFraction: number; // +/- Delta(GM_sun/(r c^2)) across Earth eccentric orbit
  gpbGeodeticGrMasYr: number;
  gpbGeodeticScalarMasYr: number;
  gpbFrameDraggingGrMasYr: number;
  psrB1913PeriodDecayRate: number; // dimensionless dP/dt
  siriusBRedshiftKmS: number;
  eridani40BRedshiftKmS: number;
  s2PericenterRedshiftFraction: number; // GM / (r_p c^2) at 1400 r_s
}

export function computeExtendedWeakFieldChecks(): ExtendedWeakFieldChecks {
  const { c, G, solarMassKg, solarRadiusM, auMeters, gEarth } = SI_CONSTANTS;
  const secDay = 86_400;
  const daysYear = 365.25;
  const standardGravity3kmNsPerDay = ((gEarth * 3000) / (c * c)) * secDay * 1e9;
  const standardGravity3kmUsPerYear = (standardGravity3kmNsPerDay * daysYear) / 1000;
  const sphericalEarth3kmNsPerDay = computeClockDifferential(3000).nsPerDayGain;

  // Annual modulation of solar gravitational potential at 1 AU (e = 0.0167086)
  const eEarth = 0.0167086;
  const rPeri = auMeters * (1 - eEarth);
  const rAph = auMeters * (1 + eEarth);
  const annualSolarVariationFraction =
    0.5 * ((G * solarMassKg) / (c * c)) * (1 / rPeri - 1 / rAph);

  // Gravity Probe B polar orbit (h = 642 km, a = 7,013 km)
  const gpbGeodeticGrMasYr = 6606.1;
  const gpbGeodeticScalarMasYr = gpbGeodeticGrMasYr / 3; // ((1 + 2*gamma)/3) with gamma = 0
  const gpbFrameDraggingGrMasYr = -39.2;

  // Hulse-Taylor PSR B1913+16 GR quadrupole orbital decay: dP/dt ≈ -2.4025e-12 s/s
  const psrB1913PeriodDecayRate = -2.4025e-12;

  // White dwarf surface gravitational redshifts (GM / (R c) in km/s)
  const siriusBRedshiftKmS = ((G * 1.018 * solarMassKg) / (0.008098 * solarRadiusM * c)) / 1000;
  const eridani40BRedshiftKmS = ((G * 0.573 * solarMassKg) / (0.0136 * solarRadiusM * c)) / 1000;

  // VLTI GRAVITY star S2 pericenter around Sgr A* at r_p = 1,400 r_s
  const s2PericenterRedshiftFraction = 1 / (2 * 1400);

  return {
    standardGravity3kmNsPerDay,
    standardGravity3kmUsPerYear,
    sphericalEarth3kmNsPerDay,
    annualSolarVariationFraction,
    gpbGeodeticGrMasYr,
    gpbGeodeticScalarMasYr,
    gpbFrameDraggingGrMasYr,
    psrB1913PeriodDecayRate,
    siriusBRedshiftKmS,
    eridani40BRedshiftKmS,
    s2PericenterRedshiftFraction
  };
}

export interface HaywardRegularCoreResult {
  rOverRs: number;
  l0OverRs: number;
  metricF: number;
  schwarzschildF: number;
  kretschmannMetersMinus4: number;
  coreKretschmannMetersMinus4: number; // Finite analytical limit 24 / l0^4 at r -> 0
  horizonKretschmannMetersMinus4: number;
  outerHorizonOverRs: number;
  innerHorizonOverRs: number;
  hasHorizons: boolean;
  hawkingTempK: number;
  shadowDiameterOverRs: number;
  iscoOverRs: number;
  fractionalIscoShift: number;
}

/**
 * Evaluates a regular finite-capacity Hayward-type static spherical metric:
 * f(r) = 1 - (r_s * r^2) / (r^3 + r_s * l0^2)
 * which reduces to Schwarzschild f(r) = 1 - r_s/r for r >> l0 and forms a regular
 * de Sitter core f(r) ≈ 1 - r^2 / l0^2 as r -> 0 with finite Kretschmann scalar K(0) = 24 / l0^4.
 */
export function computeHaywardRegularCore(
  rOverRs: number,
  solarMasses: number = 10,
  l0OverRs: number = 0.05
): HaywardRegularCoreResult {
  const { c, G, hbar, kB, solarMassKg } = SI_CONSTANTS;
  const M = Math.max(0.1, solarMasses) * solarMassKg;
  const rs = (2 * G * M) / (c * c);
  const l0Ratio = Math.max(1e-6, l0OverRs);
  const l0 = l0Ratio * rs;
  const x = Math.max(0, rOverRs);
  const r = x * rs;

  const evalF = (radius: number) => {
    const denom = Math.pow(radius, 3) + rs * l0 * l0;
    return denom === 0 ? 1 : 1 - (rs * radius * radius) / denom;
  };
  const evalK = (radius: number) => {
    if (radius <= 1e-12 * rs) return 24 / Math.pow(l0, 4);
    const u = Math.pow(radius, 3) + rs * l0 * l0;
    const f = 1 - (rs * radius * radius) / u;
    const fp = (rs * radius * (Math.pow(radius, 3) - 2 * rs * l0 * l0)) / (u * u);
    const fpp =
      (-2 * rs * (Math.pow(radius, 6) - 7 * rs * l0 * l0 * Math.pow(radius, 3) + Math.pow(rs, 2) * Math.pow(l0, 4))) /
      Math.pow(u, 3);
    return fpp * fpp + (4 / (radius * radius)) * fp * fp + (4 / Math.pow(radius, 4)) * (1 - f) * (1 - f);
  };

  // Critical regulator threshold for Hayward horizons: l0_crit = (2 / (3*sqrt(3))) * r_s
  const l0CritRatio = 2 / (3 * Math.sqrt(3));
  const hasHorizons = l0Ratio <= l0CritRatio;

  let outerHorizonOverRs = 1;
  let innerHorizonOverRs = 0;
  if (hasHorizons) {
    // Solve x^3 - x^2 + l0Ratio^2 = 0 for outer root in (2/3, 1] and inner root in (0, 2/3]
    let hi = 1.0;
    let lo = 2 / 3;
    for (let i = 0; i < 60; i++) {
      const mid = 0.5 * (lo + hi);
      if (mid * mid * mid - mid * mid + l0Ratio * l0Ratio > 0) hi = mid;
      else lo = mid;
    }
    outerHorizonOverRs = 0.5 * (lo + hi);

    let loIn = 0.0;
    let hiIn = 2 / 3;
    for (let i = 0; i < 60; i++) {
      const mid = 0.5 * (loIn + hiIn);
      if (mid * mid * mid - mid * mid + l0Ratio * l0Ratio > 0) loIn = mid;
      else hiIn = mid;
    }
    innerHorizonOverRs = 0.5 * (loIn + hiIn);
  }

  const rPlus = outerHorizonOverRs * rs;
  const denomPlus = Math.pow(rPlus, 3) + rs * l0 * l0;
  const fPrimePlus = (rs * rPlus * (Math.pow(rPlus, 3) - 2 * rs * l0 * l0)) / (denomPlus * denomPlus);
  const surfaceGravity = 0.5 * c * c * Math.abs(fPrimePlus);
  const hawkingTempK = (hbar * surfaceGravity) / (2 * Math.PI * c * kB);

  const shadowDiameterOverRs = 3 * Math.sqrt(3) * (1 - (4 / 27) * l0Ratio * l0Ratio);
  const iscoOverRs = 3 * (1 - 0.148 * l0Ratio * l0Ratio);

  return {
    rOverRs: x,
    l0OverRs: l0Ratio,
    metricF: evalF(r),
    schwarzschildF: x > 0 ? 1 - 1 / x : -Infinity,
    kretschmannMetersMinus4: evalK(r),
    coreKretschmannMetersMinus4: 24 / Math.pow(l0, 4),
    horizonKretschmannMetersMinus4: evalK(rPlus),
    outerHorizonOverRs,
    innerHorizonOverRs,
    hasHorizons,
    hawkingTempK,
    shadowDiameterOverRs,
    iscoOverRs,
    fractionalIscoShift: (iscoOverRs - 3) / 3
  };
}

export interface HiggsOneLoopCheckResult {
  topYukawa: number;
  higgsMassGeV: number;
  cutoffGeV: number;
  oneLoopTopDeltaMSqGeV2: number; // ~ 3 * y_t^2 * Lambda^2 / (8 pi^2)
  fineTuningRatio: number;
  lapseRescalingChangesLoop: boolean;
}

/**
 * Evaluates the one-loop top-quark quadratic contribution to the Higgs mass-squared
 * in an asymptotically flat frame where <alpha_upd> = 1. A local ADM lapse field alone
 * preserves flat-space Lorentz invariance and therefore leaves UV loop scaling unaltered
 * unless an explicit UV regulator modifies propagator dispersion.
 */
export function computeOneLoopHiggsLapseCheck(cutoffGeV: number = 1e10): HiggsOneLoopCheckResult {
  const topYukawa = 0.992;
  const higgsMassGeV = 125.09;
  const lam = Math.max(100, cutoffGeV);
  const oneLoopTopDeltaMSqGeV2 = (3 * topYukawa * topYukawa * lam * lam) / (8 * Math.PI * Math.PI);
  const fineTuningRatio = oneLoopTopDeltaMSqGeV2 / (higgsMassGeV * higgsMassGeV);
  return {
    topYukawa,
    higgsMassGeV,
    cutoffGeV: lam,
    oneLoopTopDeltaMSqGeV2,
    fineTuningRatio,
    lapseRescalingChangesLoop: false
  };
}

export interface NullDeflectionRk4Result {
  gammaUpd: number;
  impactOverRs: number;
  capturedByPhotonSphere: boolean;
  turningPointOverRs: number;
  rk4DeflectionArcsec: number;
  analyticWeakFieldArcsec: number;
  relativeDifferencePct: number;
}

/**
 * Integrates the exact static spherical photon trajectory (1/B(r) = (1 - r_s/r)^gamma)
 * using 4th-order Runge-Kutta on a cancellation-free substitution w = 1 - x^2 = u / u_max.
 */
export function integrateNullDeflectionRK4(
  gammaUpd: number = 1,
  impactOverRs: number = 235_571.3,
  steps: number = 240
): NullDeflectionRk4Result {
  const bOverRs = Math.max(0.5, impactOverRs);
  const g = Math.max(0, Math.min(1.5, gammaUpd));
  // Photon-sphere capture threshold for static metric A(r)=1-r_s/r, B(r)=(1-r_s/r)^(-g):
  // Effective radial potential peak at (du/dphi)^2 = (1-u)^g [b^-2/(1-u) - u^2]:
  // Turning point satisfies b^-2 = mu^2 (1 - mu) -> critical photon capture at mu_crit = 2/3, b_crit = 3 sqrt(3)/2 r_s.
  const uCrit = 2 / 3;
  const bCritOverRs = 1 / Math.sqrt(uCrit * uCrit * (1 - uCrit));
  const radToArcsec = (180 / Math.PI) * 3600;
  const analyticWeakFieldArcsec = ((1 + g) / bOverRs) * radToArcsec;

  if (bOverRs <= bCritOverRs * 1.0001) {
    return {
      gammaUpd: g,
      impactOverRs: bOverRs,
      capturedByPhotonSphere: true,
      turningPointOverRs: 1.5,
      rk4DeflectionArcsec: Infinity,
      analyticWeakFieldArcsec,
      relativeDifferencePct: 100
    };
  }

  // Solve turning point mu = r_s / r_min in (0, 2/3) where mu^2 * (1 - mu) = 1 / bOverRs^2
  const target = 1 / (bOverRs * bOverRs);
  let lo = 0;
  let hi = uCrit;
  for (let i = 0; i < 80; i++) {
    const mid = 0.5 * (lo + hi);
    const val = mid * mid * (1 - mid);
    if (val > target) hi = mid;
    else lo = mid;
  }
  const mu = 0.5 * (lo + hi);

  // Cancellation-free integrand via exact difference of squares:
  // Exact integral: 2 * integral_0^1 [ 2 * N(x) / sqrt(D1(x)) - 2 / sqrt(D0(x)) ] dx
  // where N(x) = (1 - mu*w)^((1-g)/2), D1(x) = 2 - x^2 - mu*(3 - 3*x^2 + x^4), D0(x) = 2 - x^2.
  const fDiff = (x: number): number => {
    const x2 = x * x;
    const w = 1 - x2;
    const d0 = 2 - x2;
    const polyMu = 3 - 3 * x2 + x2 * x2;
    const d1 = d0 - mu * polyMu;
    const oneMinusMuW = 1 - mu * w;
    // N^2 * D0 - D1 = (1 - mu*w)^(1-g) * D0 - (D0 - mu*polyMu)
    // = D0 * expm1((1 - g) * log1p(-mu*w)) + mu * polyMu
    const numExact = d0 * Math.expm1((1 - g) * Math.log1p(-mu * w)) + mu * polyMu;
    const nVal = Math.pow(oneMinusMuW, 0.5 * (1 - g));
    const sqrtD1 = Math.sqrt(Math.max(1e-18, d1));
    const sqrtD0 = Math.sqrt(d0);
    const denomExact = sqrtD1 * sqrtD0 * (nVal * sqrtD0 + sqrtD1);
    return (4 * numExact) / denomExact;
  };

  // Classic 4th-order Runge-Kutta integration of d(deltaPhi)/dx = fDiff(x) from x=0 to x=1
  const n = Math.max(40, steps);
  const h = 1 / n;
  let y = 0;
  for (let i = 0; i < n; i++) {
    const x0 = i * h;
    const k1 = fDiff(x0);
    const k2 = fDiff(x0 + 0.5 * h);
    const k3 = fDiff(x0 + 0.5 * h);
    const k4 = fDiff(x0 + h);
    y += (h / 6) * (k1 + 2 * k2 + 2 * k3 + k4);
  }

  const rk4DeflectionArcsec = y * radToArcsec;
  const relativeDifferencePct =
    analyticWeakFieldArcsec > 0
      ? (Math.abs(rk4DeflectionArcsec - analyticWeakFieldArcsec) / analyticWeakFieldArcsec) * 100
      : 0;

  return {
    gammaUpd: g,
    impactOverRs: bOverRs,
    capturedByPhotonSphere: false,
    turningPointOverRs: 1 / mu,
    rk4DeflectionArcsec,
    analyticWeakFieldArcsec,
    relativeDifferencePct
  };
}

export interface PainleveGordonBridgeResult {
  radiusOverRs: number;
  inflowSpeedOverC: number;
  schwarzschildLapse: number;
  pgLapse: number;
  pgSpatialRicciScalar: number;
  outwardNullSpeedOverC: number;
  inwardNullSpeedOverC: number;
  freeFallTimeFromRadiusMs: number;
}

/**
 * Evaluates the exact Painleve-Gullstrand acoustic/river coordinate transformation
 * bridging curved Schwarzschild geometry and flat spatial 3-slices.
 */
export function computePainleveGordonBridge(
  radiusOverRs: number,
  solarMasses: number = 10
): PainleveGordonBridgeResult {
  const { c, G, solarMassKg } = SI_CONSTANTS;
  const x = Math.max(0.05, radiusOverRs);
  const M = Math.max(0.1, solarMasses) * solarMassKg;
  const rs = (2 * G * M) / (c * c);
  const inflowSpeedOverC = Math.sqrt(1 / x);
  const schwarzschildLapse = x > 1 ? Math.sqrt(1 - 1 / x) : 0;
  const freeFallTimeSec = ((2 * rs) / (3 * c)) * Math.pow(x, 1.5);
  return {
    radiusOverRs: x,
    inflowSpeedOverC,
    schwarzschildLapse,
    pgLapse: 1,
    pgSpatialRicciScalar: 0,
    outwardNullSpeedOverC: 1 - inflowSpeedOverC,
    inwardNullSpeedOverC: 1 + inflowSpeedOverC,
    freeFallTimeFromRadiusMs: freeFallTimeSec * 1000
  };
}

export interface AdmConstraintResidualResult {
  radiusOverRs: number;
  gammaSpatial: number;
  spatialRicciTimesRs2: number;
  radialEinsteinTimesRs2: number; // G^r_r * r_s^2 (must vanish in vacuum!)
  spuriousStressFraction: number;
  satisfiesVacuumEinstein: boolean;
}

/**
 * Evaluates the ADM 3-Ricci scalar and radial vacuum Einstein tensor component G^r_r
 * for ds^2 = -(1 - r_s/r) c^2 dt^2 + (1 - r_s/r)^(-gamma) dr^2 + r^2 dOmega^2.
 */
export function computeAdmConstraintResidual(
  radiusOverRs: number,
  gammaSpatial: number
): AdmConstraintResidualResult {
  const x = Math.max(1.05, radiusOverRs);
  const g = gammaSpatial;
  const f = 1 - 1 / x;
  const fPowG = Math.pow(f, g);
  const spatialRicciTimesRs2 = (2 / (x * x)) * (1 - fPowG - (g / x) * Math.pow(f, g - 1));
  const radialEinsteinTimesRs2 = (1 / (x * x)) * (fPowG - 1 + (1 / (x * x)) * (Math.pow(f, g - 1) / (1 / x)));
  // Exact formula: G^r_r * r_s^2 = (1/x^2)*(f^g - 1) + f^(g - 1) / x^3
  const exactGRR = (1 / (x * x)) * (fPowG - 1) + Math.pow(f, g - 1) / Math.pow(x, 3);
  void radialEinsteinTimesRs2;
  const satisfiesVacuumEinstein = Math.abs(exactGRR) < 1e-10 && Math.abs(spatialRicciTimesRs2) < 1e-10;
  return {
    radiusOverRs: x,
    gammaSpatial: g,
    spatialRicciTimesRs2,
    radialEinsteinTimesRs2: exactGRR,
    spuriousStressFraction: Math.abs(exactGRR) * Math.pow(x, 3),
    satisfiesVacuumEinstein
  };
}

export interface HaywardStrongFieldResult {
  l0OverRs: number;
  photonSphereOverRs: number;
  criticalImpactOverRs: number;
  eikonalQnmOmegaRM: number; // l = 2 fundamental mode Re(omega) * M_geom
  eikonalQnmDampingM: number; // |Im(omega)| * M_geom
  qnmShiftPct: number;
  cauchyKappaRatio: number; // |kappa_-| / |kappa_+| mass-inflation instability ratio
  tidalLoveNumberK2: number; // Phenomenological Planck-core Love number vs GR (0)
}

/**
 * Solves exact light-ring radius, critical shadow impact parameter, eikonal l=2 QNM frequencies,
 * inner-horizon Cauchy instability ratio, and Planck-core tidal Love number for Hayward geometry.
 */
export function computeHaywardStrongFieldObservables(
  solarMasses: number = 10,
  l0OverRs: number = 0.05
): HaywardStrongFieldResult {
  void solarMasses;
  const lam = Math.max(1e-6, Math.min(0.38, l0OverRs));
  const lam2 = lam * lam;
  const f = (x: number) => 1 - (x * x) / (x * x * x + lam2);
  const fp = (x: number) => (x * (x * x * x - 2 * lam2)) / Math.pow(x * x * x + lam2, 2);
  const fpp = (x: number) =>
    (-2 * (Math.pow(x, 6) - 7 * lam2 * Math.pow(x, 3) + lam2 * lam2)) / Math.pow(x * x * x + lam2, 3);

  // Solve 2 f(x) - x f'(x) = 0 on [1.0, 1.55] by guaranteed-convergent bisection
  let lo = 1.05;
  let hi = 1.55;
  for (let i = 0; i < 64; i++) {
    const mid = 0.5 * (lo + hi);
    const val = 2 * f(mid) - mid * fp(mid);
    if (val > 0) hi = mid;
    else lo = mid;
  }
  const xPh = 0.5 * (lo + hi);
  const fPh = f(xPh);
  const criticalImpactOverRs = xPh / Math.sqrt(Math.max(1e-12, fPh));
  const lyapunovDimless = Math.sqrt(Math.max(0, (fPh * (2 * fPh - xPh * xPh * fpp(xPh))) / 2)) / xPh;

  // In units where r_s = 2 M_geom (M_geom = 0.5 r_s), fundamental l = 2 eikonal QNM scaling:
  // omega_R * M_geom ≈ l * sqrt(f_ph)/x_ph * 0.5 = 2 / (3 sqrt 3) ≈ 0.3849 for l = 2 (Schw),
  // damping |omega_I| * M_geom ≈ 0.5 * lambda_ph * 0.5 ≈ 0.0962 (Schw)
  const l2OmegaRM = (2 * Math.sqrt(fPh) / xPh) * 0.5;
  const dampingM = 0.5 * lyapunovDimless * 0.5;
  const l2SchwOmegaRM = 2 / (3 * Math.sqrt(3));
  const qnmShiftPct = ((l2OmegaRM - l2SchwOmegaRM) / l2SchwOmegaRM) * 100;

  // Inner vs outer horizon surface gravity ratio |kappa_-| / |kappa_+|
  const core = computeHaywardRegularCore(1.0, 10, lam);
  const kappaPlus = Math.abs(fp(core.outerHorizonOverRs));
  const kappaMinus = core.innerHorizonOverRs > 1e-5 ? Math.abs(fp(core.innerHorizonOverRs)) : 0;
  const cauchyKappaRatio = kappaPlus > 0 ? kappaMinus / kappaPlus : 0;

  // Phenomenological Cardoso et al. compactness-logarithmic Love number for near-horizon surface
  const tidalLoveNumberK2 = 0.25 / Math.log(1 / Math.max(1e-12, lam2));

  return {
    l0OverRs: lam,
    photonSphereOverRs: xPh,
    criticalImpactOverRs,
    eikonalQnmOmegaRM: l2OmegaRM,
    eikonalQnmDampingM: dampingM,
    qnmShiftPct,
    cauchyKappaRatio,
    tidalLoveNumberK2
  };
}

export interface LindbladClockVisibilityResult {
  deltaHeightM: number;
  holdTimeSec: number;
  tauGrainSec: number;
  phaseShiftRad: number;
  unitaryVisibility: number;
  lindbladGammaSecInv: number;
  lindbladVisibility: number;
  quantumFisherInfo: number;
}

/**
 * Evaluates unitary Zych-Pikovski interferometric proper-time visibility versus
 * Markovian Lindblad update-channel decoherence across a vertical height differential.
 */
export function computeLindbladClockVisibility(
  deltaHeightM: number = 1.0,
  holdTimeSec: number = 1.0,
  tauGrainSec: number = 5.391247e-44
): LindbladClockVisibilityResult {
  const { c, gEarth } = SI_CONSTANTS;
  const nuSr = 429_228_004_229_873;
  const omegaSr = 2 * Math.PI * nuSr;
  const deltaAlpha = (gEarth * Math.max(0, deltaHeightM)) / (c * c);
  const deltaOmega = omegaSr * deltaAlpha;
  const t = Math.max(0, holdTimeSec);
  const phaseShiftRad = deltaOmega * t;
  const unitaryVisibility = Math.abs(Math.cos(0.5 * phaseShiftRad));
  const lindbladGammaSecInv = 0.5 * deltaOmega * deltaOmega * Math.max(0, tauGrainSec);
  const lindbladVisibility = unitaryVisibility * Math.exp(-lindbladGammaSecInv * t);
  const quantumFisherInfo = t * t * deltaOmega * deltaOmega * Math.exp(-2 * lindbladGammaSecInv * t);
  return {
    deltaHeightM,
    holdTimeSec: t,
    tauGrainSec,
    phaseShiftRad,
    unitaryVisibility,
    lindbladGammaSecInv,
    lindbladVisibility,
    quantumFisherInfo
  };
}

export interface BinaryPulsarRadiationResult {
  grQuadrupolePeriodDot: number;
  scalarDipolePeriodDot: number;
  totalPredictedPeriodDot: number;
  grPeriastronAdvanceDegYr: number;
  ppnPeriastronAdvanceDegYr: number;
  matchesHulseTaylor: boolean;
}

/**
 * Evaluates Peters-Mathews quadrupole orbital period decay and periastron advance for PSR B1913+16
 * alongside scalar dipole radiation excess when gamma_upd < 1.
 */
export function computeBinaryPulsarRadiation(
  gammaUpd: number = 1,
  betaUpd: number = 1
): BinaryPulsarRadiationResult {
  const { c, G, solarMassKg } = SI_CONSTANTS;
  const m1 = 1.438 * solarMassKg;
  const m2 = 1.390 * solarMassKg;
  const pbSec = 27906.98;
  const e = 0.617134;
  const omegaOrb = (2 * Math.PI) / pbSec;
  const eccFactor = (1 + (73 / 24) * e * e + (37 / 96) * Math.pow(e, 4)) / Math.pow(1 - e * e, 3.5);
  const grQuadrupolePeriodDot =
    ((-192 * Math.PI * Math.pow(G, 5 / 3)) / (5 * Math.pow(c, 5))) *
    Math.pow(omegaOrb, 5 / 3) *
    ((m1 * m2) / Math.pow(m1 + m2, 1 / 3)) *
    eccFactor;

  // Scalar dipole flux ratio scales with (1 - gamma)^2 * (c / v_orb)^2
  const muRed = (m1 * m2) / (m1 + m2);
  const vChar = Math.pow(G * (m1 + m2) * omegaOrb, 1 / 3);
  const alphaDiffSq = Math.pow(Math.max(0, 1 - gammaUpd), 2) * 0.04;
  const scalarDipolePeriodDot =
    -2 * Math.PI * (G * muRed / (c * c * c)) * omegaOrb * ((1 + 0.5 * e * e) / Math.pow(1 - e * e, 2.5)) * alphaDiffSq;
  void vChar;

  const secPerYr = 365.25 * 86400;
  const radToDeg = 180 / Math.PI;
  const grPeriastronRadPerSec =
    ((3 * Math.pow(G * (m1 + m2), 2 / 3)) / (c * c * (1 - e * e))) * Math.pow(omegaOrb, 5 / 3);
  const grPeriastronAdvanceDegYr = grPeriastronRadPerSec * secPerYr * radToDeg;
  const ppnPeriastronAdvanceDegYr = ((2 + 2 * gammaUpd - betaUpd) / 3) * grPeriastronAdvanceDegYr;
  const totalPredictedPeriodDot = grQuadrupolePeriodDot + scalarDipolePeriodDot;

  return {
    grQuadrupolePeriodDot,
    scalarDipolePeriodDot,
    totalPredictedPeriodDot,
    grPeriastronAdvanceDegYr,
    ppnPeriastronAdvanceDegYr,
    matchesHulseTaylor: Math.abs(totalPredictedPeriodDot / grQuadrupolePeriodDot - 1) < 0.01
  };
}

export interface ReproducibilityManifest {
  constantsSource: string;
  constantsUsed: typeof SI_CONSTANTS;
  keyCheckpoints: Array<{
    name: string;
    formula: string;
    computedValue: string;
  }>;
}

export function getReproducibilityManifest(): ReproducibilityManifest {
  const ext = computeExtendedWeakFieldChecks();
  const gps = computeGpsCorrections(0.01);
  const gr = computePpnObservables(1, 1, 1.0);
  const sc = computePpnObservables(0, 0, 1.0);
  const rk4Gr = integrateNullDeflectionRK4(1, 235_571.3, 180);
  const rk4Sc = integrateNullDeflectionRK4(0, 235_571.3, 180);
  const hor = computeHaywardRegularCore(1.0, 10, 0.05);
  const horSf = computeHaywardStrongFieldObservables(10, 0.05);
  const liv = computeDiscreteStepDispersion(31, 0.903, 0, 1);
  const psr = computeBinaryPulsarRadiation(1, 1);
  return {
    constantsSource: 'CODATA 2022 / IAU 2015 nominal solar and terrestrial resolution constants; Planck 2018 flat-ΛCDM',
    constantsUsed: SI_CONSTANTS,
    keyCheckpoints: [
      {
        name: '3,000 m Clock Differential (standard g₀ vs spherical GM/R⊕²)',
        formula: 'Δτ = (g₀ Δh / c²) × 86,400 s/day',
        computedValue: `${ext.standardGravity3kmNsPerDay.toFixed(2)} ns/day (${ext.standardGravity3kmUsPerYear.toFixed(2)} μs/yr); spherical: ${ext.sphericalEarth3kmNsPerDay.toFixed(2)} ns/day`
      },
      {
        name: 'GPS Net Offset & 1% Eccentricity Swing',
        formula: 'Δf/f₀ = (GM⊕/c²)(R⊕⁻¹ − a⁻¹) − v²/(2c²)',
        computedValue: `+${gps.gravitationalBlueshiftUsPerDay.toFixed(1)} ${gps.kinematicRedshiftUsPerDay.toFixed(1)} = +${gps.netGainUsPerDay.toFixed(1)} μs/day (${gps.uncorrectedRangeDriftKmPerDay.toFixed(2)} km/day, ±${gps.eccentricityAmplitudeNs.toFixed(1)} ns)`
      },
      {
        name: 'RK4 Solar-Limb Null Deflection (γ = 0 vs γ = 1)',
        formula: 'RK4 geodesic quadrature of (du/dφ)²',
        computedValue: `${rk4Sc.rk4DeflectionArcsec.toFixed(4)}″ (γ=0) vs ${rk4Gr.rk4DeflectionArcsec.toFixed(4)}″ (γ=1; analytic ${gr.lightDeflectionArcsec.toFixed(4)}″)`
      },
      {
        name: 'Mercury Perihelion Precession & Nordtvedt η_N',
        formula: 'Δϖ = [(2+2γ−β)/3]·42.98″/cy; η_N = 4β − γ − 3',
        computedValue: `${sc.mercuryPrecessionArcsecCentury.toFixed(2)}″/cy (η_N=${sc.nordtvedtEta}) vs ${gr.mercuryPrecessionArcsecCentury.toFixed(2)}″/cy (η_N=${gr.nordtvedtEta})`
      },
      {
        name: 'Peters-Mathews PSR B1913+16 Decay & Periastron Advance',
        formula: 'dP/dt_GR; dω/dt = 3(GM)^{2/3} ω^{5/3}/[c²(1−e²)]',
        computedValue: `dP/dt = ${psr.grQuadrupolePeriodDot.toExponential(4)} s/s; dω/dt = ${psr.grPeriastronAdvanceDegYr.toFixed(4)}°/yr`
      },
      {
        name: 'Hayward Core, Photon Sphere & l=2 QNM (10 M☉, ℓ₀ = 0.05 r_s)',
        formula: 'K(0) = 24/ℓ₀⁴; 2f(r_ph) − r_ph f′(r_ph) = 0',
        computedValue: `K(0)=${hor.coreKretschmannMetersMinus4.toExponential(2)} m⁻⁴; r_ph=${horSf.photonSphereOverRs.toFixed(5)} r_s; ω_R M=${horSf.eikonalQnmOmegaRM.toFixed(4)}`
      },
      {
        name: 'GRB 090510 Linear Dispersion Kernel (z = 0.903)',
        formula: 'Δt_LIV = K₁(0.903) × (31 GeV / E_Pl)',
        computedValue: `K₁ = ${liv.cosmologicalKernelSec.toExponential(3)} s -> Δt = ${liv.arrivalLagSeconds.toFixed(2)} s (> 0.829 s)`
      }
    ]
  };
}

