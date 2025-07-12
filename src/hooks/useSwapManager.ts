import { useContext } from 'react';
import { SwapContext } from '../contexts/SwapManager';

export const useSwap = () => {
  const context = useContext(SwapContext);
  if (!context) {
    throw new Error('useSwap must be used within a SwapProvider');
  }
  return context;
};
