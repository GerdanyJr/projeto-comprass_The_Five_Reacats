import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CartSlice {
  [key: string]: number;
}

const initialState: CartSlice = {};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<number>) {
      if (state[action.payload]) {
        state[action.payload] += 1;
      } else {
        state[action.payload] = 1;
      }
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      const counter = state[action.payload];
      state[action.payload] = counter > 1 ? counter - 1 : 0;
    },
    removeItem(state, action: PayloadAction<number>) {
      delete state[action.payload];
    },
  },
});

export const cartActions = cartSlice.actions;