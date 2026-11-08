/**
 * MODEL B: Jean-Charles Tassan's Emergent Resonant-Active Time Framework
 * 
 * Formalism:
 * - Reality is a dynamic frequency-domain interaction of Resonant Structural Nodes.
 * - Time and space emerge dynamically from the recursive balance between:
 *   - RES (Resonant Memory / Structural Space / Past Retention)
 *   - RAG (Resonant Active Generation / Dynamic Flow / Future Protention)
 * - Mathematical representation via Z-transform discrete transfer function:
 *   H(z) = \frac{RAG(z)}{RES(z)} = \frac{b_0 + b_1 z^{-1} + b_2 z^{-2}}{1 - a_1 z^{-1} - a_2 z^{-2}}
 * - Frequency response evaluated on unit circle z = e^{j\omega} (DTFT):
 *   H(e^{j\omega}) = |H(e^{j\omega})| e^{j \angle H(e^{j\omega})}
 * - Harmonic balance parameter \gamma = ||RAG|| / ||RES||:
 *   \gamma = 1.0 -> Dynamic harmonic equilibrium (healthy spacetime emergence)
 *   \gamma < 1.0 -> Structural memory lock (static crystallization, frozen time)
 *   \gamma > 1.0 -> Runaway generative dispersion (chaotic decoherence, turbulence)
 */

export interface ResRagParams {
  resMemoryDecay: number; // a1 coefficient (memory persistence)
  resCoupling: number; // a2 coefficient (spatial rigidity)
  ragActiveDrive: number; // b0 coefficient (dynamic drive)
  ragPhaseLag: number; // b1 coefficient (temporal generation offset)
  ragHighFreqNoise: number; // b2 coefficient (high-frequency generation)
}

export interface PoleZero {
  re: number;
  im: number;
  magnitude: number;
  angleRad: number;
}

export interface ResRagState {
  poles: PoleZero[];
  zeros: PoleZero[];
  isStable: boolean; // all poles inside unit circle |z_p| < 1
  balanceGamma: number; // ||RAG|| / ||RES||
  peakResonantFreqRad: number; // \omega_{peak} where gain is maximum
  emergentTimeStep: number; // \Delta t_{res} \propto 1 / \omega_{peak}
  qFactor: number; // resonance sharpness
  frequencySpectrum: Array<{
    omega: number;
    magnitude: number;
    phaseDeg: number;
    resMagnitude: number;
    ragMagnitude: number;
  }>;
}

/**
 * Computes the quadratic roots for polynomial c0 + c1 z^{-1} + c2 z^{-2} = 0
 * or equivalently c0 z^2 + c1 z + c2 = 0
 */
function solveQuadraticRoots(c0: number, c1: number, c2: number): PoleZero[] {
  if (Math.abs(c0) < 1e-9) {
    if (Math.abs(c1) < 1e-9) return [];
    const rootRe = -c2 / c1;
    return [{ re: rootRe, im: 0, magnitude: Math.abs(rootRe), angleRad: rootRe >= 0 ? 0 : Math.PI }];
  }

  const disc = c1 * c1 - 4 * c0 * c2;
  if (disc >= 0) {
    const sqrtD = Math.sqrt(disc);
    const r1 = (-c1 + sqrtD) / (2 * c0);
    const r2 = (-c1 - sqrtD) / (2 * c0);
    return [
      { re: r1, im: 0, magnitude: Math.abs(r1), angleRad: r1 >= 0 ? 0 : Math.PI },
      { re: r2, im: 0, magnitude: Math.abs(r2), angleRad: r2 >= 0 ? 0 : Math.PI }
    ];
  } else {
    const realPart = -c1 / (2 * c0);
    const imagPart = Math.sqrt(-disc) / (2 * c0);
    const mag = Math.sqrt(realPart * realPart + imagPart * imagPart);
    const ang = Math.atan2(imagPart, realPart);
    return [
      { re: realPart, im: imagPart, magnitude: mag, angleRad: ang },
      { re: realPart, im: -imagPart, magnitude: mag, angleRad: -ang }
    ];
  }
}

/**
 * Evaluates Tassan's RES-RAG frequency response across the spectrum \omega \in [0, \pi]
 */
export function evaluateResRag(params: ResRagParams, numSamples: number = 64): ResRagState {
  const { resMemoryDecay, resCoupling, ragActiveDrive, ragPhaseLag, ragHighFreqNoise } = params;

  // Denominator (RES): 1 - a1 z^{-1} - a2 z^{-2} -> z^2 - a1 z - a2 = 0
  const poles = solveQuadraticRoots(1, -resMemoryDecay, -resCoupling);

  // Numerator (RAG): b0 + b1 z^{-1} + b2 z^{-2} -> b0 z^2 + b1 z + b2 = 0
  const zeros = solveQuadraticRoots(ragActiveDrive, ragPhaseLag, ragHighFreqNoise);

  // Stability: all poles must have magnitude < 1.0 (inside unit circle)
  const isStable = poles.every(p => p.magnitude < 0.999);

  // Frequency response on unit circle: z = e^{j\omega}
  const spectrum = [];
  let maxGain = -1;
  let peakOmega = 0.5;

  let ragTotalNorm = 0;
  let resTotalNorm = 0;

  for (let i = 0; i <= numSamples; i++) {
    const omega = (i / numSamples) * Math.PI; // from 0 to \pi
    const cos1 = Math.cos(omega);
    const sin1 = Math.sin(omega);
    const cos2 = Math.cos(2 * omega);
    const sin2 = Math.sin(2 * omega);

    // Numerator RAG(e^{j\omega}) = b0 + b1 e^{-j\omega} + b2 e^{-j 2\omega}
    const numRe = ragActiveDrive + ragPhaseLag * cos1 + ragHighFreqNoise * cos2;
    const numIm = -ragPhaseLag * sin1 - ragHighFreqNoise * sin2;
    const numMag = Math.sqrt(numRe * numRe + numIm * numIm);
    const numPhase = Math.atan2(numIm, numRe);

    // Denominator RES(e^{j\omega}) = 1 - a1 e^{-j\omega} - a2 e^{-j 2\omega}
    const denRe = 1 - resMemoryDecay * cos1 - resCoupling * cos2;
    const denIm = resMemoryDecay * sin1 + resCoupling * sin2;
    const denMag = Math.sqrt(denRe * denRe + denIm * denIm) + 1e-6;
    const denPhase = Math.atan2(denIm, denRe);

    const gain = numMag / denMag;
    const phaseRad = numPhase - denPhase;
    const phaseDeg = (phaseRad * 180) / Math.PI;

    if (gain > maxGain && omega > 0.05) {
      maxGain = gain;
      peakOmega = omega;
    }

    ragTotalNorm += numMag;
    resTotalNorm += denMag;

    spectrum.push({
      omega: Number(omega.toFixed(4)),
      magnitude: Number(gain.toFixed(4)),
      phaseDeg: Number(phaseDeg.toFixed(2)),
      resMagnitude: Number(denMag.toFixed(4)),
      ragMagnitude: Number(numMag.toFixed(4))
    });
  }

  const balanceGamma = resTotalNorm > 0 ? ragTotalNorm / resTotalNorm : 1.0;
  const emergentTimeStep = peakOmega > 0 ? (2 * Math.PI) / peakOmega : 1.0;
  const qFactor = Math.min(50, Math.max(0.5, maxGain));

  return {
    poles,
    zeros,
    isStable,
    balanceGamma: Number(balanceGamma.toFixed(3)),
    peakResonantFreqRad: Number(peakOmega.toFixed(4)),
    emergentTimeStep: Number(emergentTimeStep.toFixed(3)),
    qFactor: Number(qFactor.toFixed(2)),
    frequencySpectrum: spectrum
  };
}

/**
 * Computes the Dual-Layer Coupling between Model A (IGG) and Model B (Tassan RES-RAG).
 * Maps Fisher eigenvalues to emergent resonant poles.
 */
export function computeDualLayerCoupling(
  fisherDeterminant: number,
  fisherTrace: number,
  resRagState: ResRagState
): {
  layer0ClockRate: number; // d\tau / d\lambda
  layer1ResonantFreq: number; // \omega_{peak}
  coherenceIndex: number; // 0 to 1 coupling fidelity
  dualVerdict: string;
} {
  const layer0ClockRate = Math.sqrt(Math.max(1e-4, fisherTrace));
  const layer1ResonantFreq = resRagState.peakResonantFreqRad;
  
  // Coherence index measures how closely the IGG clock rate aligns with the resonant peak
  const ratio = layer0ClockRate / (layer1ResonantFreq * 2 + 1e-4);
  const coherenceIndex = Math.max(0, Math.min(1, 1 - Math.abs(ratio - 1) * 0.5));

  const dualVerdict = resRagState.isStable && Math.abs(resRagState.balanceGamma - 1.0) < 0.25
    ? 'Harmonic Synthesis Optimal: Layer 0 Software Engine drives stable Layer 1 Resonant Rhythm'
    : resRagState.balanceGamma < 0.75
    ? 'Memory Locked: Layer 1 over-crystallized (RES dominant, freezing macroscopic flow)'
    : 'Generative Noise: Layer 1 turbulent (RAG dominant, high-frequency decoherence)';

  return {
    layer0ClockRate: Number(layer0ClockRate.toFixed(4)),
    layer1ResonantFreq: Number(layer1ResonantFreq.toFixed(4)),
    coherenceIndex: Number(coherenceIndex.toFixed(3)),
    dualVerdict
  };
}
