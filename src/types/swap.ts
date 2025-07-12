// Types
export interface SwapRequest {
  id: string;
  productId: number;
  productName: string;
  productImage: string;
  requestedBy: string;
  requestedWith: string;
  status: 'pending' | 'ongoing' | 'approved' | 'rejected' | 'completed';
  requestDate: string;
  responseDate?: string;
}

export interface UserItem {
  id: number;
  title: string;
  image: string;
  status: 'active' | 'swapped' | 'pending';
  views: number;
  category: string;
  description: string;
  points?: number;
}

export interface SwapState {
  swapRequests: SwapRequest[];
  userItems: UserItem[];
}

export type SwapAction = 
  | { type: 'ADD_SWAP_REQUEST'; payload: Omit<SwapRequest, 'id' | 'requestDate'> }
  | { type: 'UPDATE_SWAP_STATUS'; payload: { id: string; status: SwapRequest['status']; responseDate?: string } }
  | { type: 'ADD_USER_ITEM'; payload: UserItem }
  | { type: 'UPDATE_USER_ITEM'; payload: { id: number; updates: Partial<UserItem> } };
