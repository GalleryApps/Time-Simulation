/**
 * MODEL A: The Bulaqueña Information Geometric Gradient (IGG) Framework
 * "The Secret Engine of Physics, Reality, and Everything Else"
 * Reference: Bulaqueña (Academia.edu ID #164986382)
 * URL: https://www.academia.edu/164986382/Information_Geometric_Gradient_IGG_The_Secret_Engine_of_Physics_Reality_and_Everything_Else
 * 
 * Formalism:
 * - Statistical manifold S with coordinates \theta^i representing quantum configurations.
 * - Fisher-Rao Information Metric: g_{ij}(\theta) = \sum_x p(x|\theta) \partial_i \ln p(x|\theta) \partial_j \ln p(x|\theta)
 * - Information Geometric Gradient (IGG) Engine: \text{IGG}^i = g^{ij}(\theta) \partial_j \Phi(\theta)
 *   where g^{ij} is the inverse Fisher metric and \Phi(\theta) is the informational action/potential.
 * - Algorithmic State Update (The Secret Engine): d\theta^i / d\tau = -\text{IGG}^i = -g^{ij} \partial_j \Phi
 * - Information Proper Time Arc Length: \Delta\tau = \int \sqrt{g_{ij} \dot{\theta}^i \dot{\theta}^j} d\lambda = \int \|\text{IGG}\|_g d\lambda
 * - Non-Singular Relational Evolution: i \hbar \partial_\tau \Psi = \hat{\mathcal{H}}_{\text{IGG}} \Psi
 * - Singularity resolution via Bekenstein-IGG Capacity Cutoff: \mathcal{I}_{\text{max}} = c^3 / (4 G \hbar \ln 2)
 */

export interface FisherMetric2D {
  g11: number;
  g12: number;
  g21: number;
  g22: number;
  determinant: number;
  trace: number;
}

export interface IGGVectorResult {
  gradPhi1: number;
  gradPhi2: number;
  igg1: number;
  igg2: number;
  iggMagnitude: number; // ||IGG||_g = sqrt(g^{ij} \partial_i \Phi \partial_j \Phi)
  euclidMagnitude: number; // ||\nabla \Phi||_2
  metricInverseDet: number;
  dtauRate: number; // d\tau / d\lambda along the IGG flow
}

/**
 * Computes Fisher metric for a parameterized 2-state/Gaussian quantum statistical manifold
 * with vacuum information regularization \epsilon_{vac} to prevent metric collapse.
 */
export function computeFisherMetric(
  theta1: number,
  theta2: number,
  epsilonVac: number = 1e-4
): FisherMetric2D {
  // Let theta1 = mean, theta2 = spread/variance (>0)
  const sigma = Math.max(0.01, Math.abs(theta2));
  
  // For Gaussian manifold p(x|\mu, \sigma):
  // g_{\mu\mu} = 1/\sigma^2, g_{\sigma\sigma} = 2/\sigma^2, g_{\mu\sigma} = 0
  const g11 = 1 / (sigma * sigma) + epsilonVac;
  const g22 = 2 / (sigma * sigma) + epsilonVac;
  const g12 = 0;
  const g21 = 0;
  
  const det = g11 * g22 - g12 * g21;
  const trace = g11 + g22;
  
  return {
    g11,
    g12,
    g21,
    g22,
    determinant: det,
    trace,
  };
}

/**
 * Computes the Information Geometric Gradient (IGG) vector:
 * \text{IGG}^i = g^{ij}(\theta) \frac{\partial \Phi}{\partial \theta^j}
 * based on the Bulaqueña IGG framework ("The Secret Engine of Physics, Reality, and Everything Else").
 */
export function computeIGGVector(
  theta1: number,
  theta2: number,
  gradPhi1: number,
  gradPhi2: number,
  epsilonVac: number = 1e-4
): IGGVectorResult {
  const g = computeFisherMetric(theta1, theta2, epsilonVac);
  const det = g.determinant;
  
  // Inverse Fisher Metric components: g^{ij} = (1/det) [g22, -g12; -g21, g11]
  const invG11 = g.g22 / det;
  const invG12 = -g.g12 / det;
  const invG21 = -g.g21 / det;
  const invG22 = g.g11 / det;
  
  // Natural Gradient: IGG^i = g^{ij} \partial_j \Phi
  const igg1 = invG11 * gradPhi1 + invG12 * gradPhi2;
  const igg2 = invG21 * gradPhi1 + invG22 * gradPhi2;
  
  // Riemannian norm of the IGG vector:
  // ||IGG||_g = \sqrt{ g_{ij} IGG^i IGG^j } = \sqrt{ g^{ij} \partial_i \Phi \partial_j \Phi }
  const iggNormSq = gradPhi1 * igg1 + gradPhi2 * igg2;
  const iggMagnitude = Math.sqrt(Math.max(0, iggNormSq));
  
  // Naive Euclidean gradient magnitude
  const euclidMagnitude = Math.sqrt(gradPhi1 * gradPhi1 + gradPhi2 * gradPhi2);
  
  return {
    gradPhi1,
    gradPhi2,
    igg1,
    igg2,
    iggMagnitude,
    euclidMagnitude,
    metricInverseDet: 1 / det,
    dtauRate: iggMagnitude // In IGG flow, traversal proper time rate is ||IGG||_g
  };
}

/**
 * Computes information proper time increment d\tau along parameter trajectory \dot{\theta}
 */
export function computeProperTimeIncrement(
  g: FisherMetric2D,
  dTheta1: number,
  dTheta2: number
): number {
  const dTauSquared = g.g11 * dTheta1 * dTheta1 + 
                      2 * g.g12 * dTheta1 * dTheta2 + 
                      g.g22 * dTheta2 * dTheta2;
  return Math.sqrt(Math.max(0, dTauSquared));
}

/**
 * Evaluates unitarity and probability conservation under i \hbar \partial_\tau \Psi = \hat{H}_info \Psi.
 * Self-adjoint decomposition ensures d/d\tau <\Psi|\Psi> = 0.
 */
export function simulateIGIGWavepacket(
  steps: number = 50,
  epsilonVac: number = 1e-4
): Array<{ tau: number; psi_re: number; psi_im: number; prob: number; fisher_det: number }> {
  const results = [];
  let tau = 0;
  let theta1 = 0.0;
  let theta2 = 1.0;
  
  // Wavefunction amplitudes
  let psi_re = 1.0;
  let psi_im = 0.0;
  
  for (let i = 0; i <= steps; i++) {
    const g = computeFisherMetric(theta1, theta2, epsilonVac);
    
    // Algorithmic state update velocity
    const dTheta1 = 0.05 * Math.cos(i * 0.1);
    const dTheta2 = 0.02 * Math.sin(i * 0.15);
    
    const dTau = computeProperTimeIncrement(g, dTheta1, dTheta2);
    tau += dTau;
    
    // Self-adjoint phase rotation: generator eigenvalues are real
    // \hat{H}_{info} has eigenvalue \omega = \sqrt{Tr(g)}
    const omega = Math.sqrt(g.trace) * 0.5;
    const dPhi = omega * dTau;
    
    // Unitary rotation: [cos(dPhi) -sin(dPhi); sin(dPhi) cos(dPhi)]
    const new_re = psi_re * Math.cos(dPhi) - psi_im * Math.sin(dPhi);
    const new_im = psi_re * Math.sin(dPhi) + psi_im * Math.cos(dPhi);
    psi_re = new_re;
    psi_im = new_im;
    
    // Probability density norm
    const prob = psi_re * psi_re + psi_im * psi_im;
    
    results.push({
      tau: Number(tau.toFixed(4)),
      psi_re: Number(psi_re.toFixed(4)),
      psi_im: Number(psi_im.toFixed(4)),
      prob: Number(prob.toFixed(6)), // Conserved exactly at 1.000000
      fisher_det: Number(g.determinant.toFixed(4))
    });
    
    theta1 += dTheta1;
    theta2 = Math.max(0.05, theta2 + dTheta2);
  }
  
  return results;
}

/**
 * Computes cosmological bounce scale factor under IGIG information action:
 * S_IGIG = \int R \sqrt{-g} d^4x + \alpha \int \mathcal{I}_Fisher \sqrt{-g} d^4x
 * At high curvature R -> \infty, information density saturates at \mathcal{I}_max,
 * reversing gravitational collapse into a bounce:
 * a(\tau) = (a_{min}^4 + \kappa \tau^2)^{1/4}
 */
export function computeIGIGScaleFactor(
  tau: number,
  aMin: number = 0.15,
  alphaCoupling: number = 1.2
): { a: number; H: number; kretschmann: number } {
  // a(\tau) = (a_{min}^4 + (1/alpha) * \tau^2)^{1/4}
  const a4 = Math.pow(aMin, 4) + (1 / alphaCoupling) * (tau * tau);
  const a = Math.pow(a4, 0.25);
  
  // Hubble parameter H = (1/a) da/d\tau
  // da/d\tau = (1/4) (a4)^(-3/4) * (2 \tau / \alpha) = \tau / (2 \alpha a^3)
  const da_dtau = tau / (2 * alphaCoupling * Math.pow(a, 3));
  const H = da_dtau / a;
  
  // Kretschmann scalar K = 12 (H^2 + da^2/dtau^2) / a^2 is strictly bounded!
  // At \tau = 0, H = 0, da/dtau = 0, K = 12 / (alpha^2 aMin^8) (Finite!)
  const d2a_dtau2 = (1 / (2 * alphaCoupling * Math.pow(a, 3))) - (3 * Math.pow(da_dtau, 2) / a);
  const kretschmann = 12 * (Math.pow(H, 4) + Math.pow(d2a_dtau2 / a, 2) + 1e-6);
  
  return { a, H, kretschmann };
}
