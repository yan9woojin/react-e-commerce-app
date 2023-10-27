import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload });
      }

      state.total += action.payload.price * action.payload.quantity;
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );

      const { price, quantity } = state.items[index];

      if (index !== -1) {
        state.items.splice(index, 1);
      }

      state.total -= price * quantity;
    },
    increaseItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      item.quantity += 1;
      state.total += item.price;
    },
    decreaseItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item.quantity > 1) {
        item.quantity -= 1;
        state.total -= item.price;
      }
    },
  },
});

export const { addToCard, removeFromCart, increaseItem, decreaseItem } =
  cartSlice.actions;

export default cartSlice.reducer;
