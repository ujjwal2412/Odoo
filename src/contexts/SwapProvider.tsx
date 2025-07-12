import React, { useReducer, ReactNode } from 'react';
import { SwapRequest, UserItem, SwapState, SwapAction } from '../types/swap';
import { SwapContext } from './SwapContext';

// Initial state
const initialState: SwapState = {
  swapRequests: [
    {
      id: '1',
      productId: 1,
      productName: 'Bluetooth Speaker',
      productImage: '/placeholder.svg',
      requestedBy: 'You',
      requestedWith: 'Sarah M.',
      status: 'completed',
      requestDate: '2 days ago',
      responseDate: '1 day ago'
    },
    {
      id: '2', 
      productId: 2,
      productName: 'Yoga Mat',
      productImage: '/placeholder.svg',
      requestedBy: 'You',
      requestedWith: 'John D.',
      status: 'ongoing',
      requestDate: '1 week ago',
      responseDate: '5 days ago'
    },
    {
      id: '3',
      productId: 3,
      productName: 'Coffee Maker',
      productImage: '/placeholder.svg',
      requestedBy: 'You',
      requestedWith: 'Emma L.',
      status: 'completed',
      requestDate: '2 weeks ago',
      responseDate: '1 week ago'
    }
  ],
  userItems: [
    { 
      id: 1, 
      title: 'Vintage Camera', 
      status: 'active', 
      image: '/placeholder.svg', 
      views: 24,
      category: 'Electronics',
      description: 'Classic film camera in excellent condition',
      points: 500
    },
    { 
      id: 2, 
      title: 'Designer Jacket', 
      status: 'swapped', 
      image: '/placeholder.svg', 
      views: 18,
      category: 'Fashion',
      description: 'Premium leather jacket, barely worn',
      points: 800
    },
    { 
      id: 3, 
      title: 'Art Book Collection', 
      status: 'pending', 
      image: '/placeholder.svg', 
      views: 12,
      category: 'Books',
      description: 'Collection of modern art books',
      points: 300
    }
  ]
};

// Reducer
const swapReducer = (state: SwapState, action: SwapAction): SwapState => {
  switch (action.type) {
    case 'ADD_SWAP_REQUEST':
      return {
        ...state,
        swapRequests: [
          {
            ...action.payload,
            id: Date.now().toString(),
            requestDate: 'Just now'
          },
          ...state.swapRequests
        ]
      };
    
    case 'UPDATE_SWAP_STATUS':
      return {
        ...state,
        swapRequests: state.swapRequests.map(request =>
          request.id === action.payload.id
            ? { ...request, status: action.payload.status, responseDate: action.payload.responseDate }
            : request
        )
      };
    
    case 'ADD_USER_ITEM':
      return {
        ...state,
        userItems: [action.payload, ...state.userItems]
      };
    
    case 'UPDATE_USER_ITEM':
      return {
        ...state,
        userItems: state.userItems.map(item =>
          item.id === action.payload.id
            ? { ...item, ...action.payload.updates }
            : item
        )
      };
    
    default:
      return state;
  }
};

// Provider component
export const SwapProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(swapReducer, initialState);

  const addSwapRequest = (request: Omit<SwapRequest, 'id' | 'requestDate'>) => {
    dispatch({ type: 'ADD_SWAP_REQUEST', payload: request });
  };

  const updateSwapStatus = (id: string, status: SwapRequest['status'], responseDate?: string) => {
    dispatch({ type: 'UPDATE_SWAP_STATUS', payload: { id, status, responseDate } });
  };

  return (
    <SwapContext.Provider value={{ state, dispatch, addSwapRequest, updateSwapStatus }}>
      {children}
    </SwapContext.Provider>
  );
};
