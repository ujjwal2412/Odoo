import { createContext } from 'react';
import { SwapState, SwapAction, SwapRequest } from '../types/swap';

export const SwapContext = createContext<{
  state: SwapState;
  dispatch: React.Dispatch<SwapAction>;
  addSwapRequest: (request: Omit<SwapRequest, 'id' | 'requestDate'>) => void;
  updateSwapStatus: (id: string, status: SwapRequest['status'], responseDate?: string) => void;
} | null>(null);
