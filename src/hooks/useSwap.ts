import { useContext } from 'react';
import { SwapContext } from '../contexts/SwapContext';
import { SwapState, SwapAction, SwapRequest } from '../types/swap';

export const useSwap = () => {
  const context = useContext(SwapContext);
  if (!context) {
    throw new Error('useSwap must be used within a SwapProvider');
  }
  return context;
};
