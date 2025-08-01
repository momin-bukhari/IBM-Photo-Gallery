import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload.id;
      if (!state.items[id]) {
        state.items[id] = { ...action.payload, quantity: 1 };
      }
    },
    increaseQuantity: (state, action) => {
      state.items[action.payload].quantity++;
    },
    decreaseQuantity: (state, action) => {
      const item = state.items[action.payload];
      if (item.quantity > 1) item.quantity--;
    },
    deleteItem: (state, action) => {
      delete state.items[action.payload];
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;