import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantidade += 1;
      } else {
        state.cart.push({ ...action.payload, quantidade: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incrementProduct: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantidade += 1;
      }
    },
    decrementProduct: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        if (item.quantidade > 1) {
          item.quantidade -= 1;
        } else {
          item.quantidade = 1;
        }
      }
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart, incrementProduct, decrementProduct } =
  cartSlice.actions;
