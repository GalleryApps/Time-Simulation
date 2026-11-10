import React from 'react';
import { Factors500MatrixView } from './Factors500MatrixView';

/**
 * Re-exporting Factors500MatrixView as Factors100MatrixView to fulfill the requirement:
 * "100-Factor Physical Stress-Test & Adversarial Review Matrix should be 500 and not 100"
 */
export const Factors100MatrixView: React.FC = () => {
  return <Factors500MatrixView />;
};

export { Factors500MatrixView };
