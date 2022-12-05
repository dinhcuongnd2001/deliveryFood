// reduce cac hanh dong cau user (them, xoa, checkout)

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    quantity: 0,
    cart: [],
  },
  reducers: {
    addQuantity: (state, action) => {
      state.quantity += 1;
      const index = state.cart.findIndex((e) => e.id === action.payload.id);
      if (index < 0) {
        let newProduct = action.payload;
        state.cart.push({ ...newProduct, count: 1 });
      } else {
        state.cart[index].count += 1;
      }
    },
    subQuantity: (state, action) => {
      state.quantity -= 1;
      const newCart = state.cart
        .map((item) => {
          if (item.id === action.payload.id) {
            item.count -= 1;
            return item;
          }
          return item;
        })
        .filter((item) => item.count > 0);
      state.cart = newCart;
    },
    removeProduct: (state, action) => {
      const newCart = state.cart.filter((item) => item.id != action.payload.id);
      // console.log("new your cart: ", newState);
      state.cart = newCart;
      state.quantity -= action.payload.count;
    },
    checkout: (state) => {
      state.cart = [];
      state.quantity = 0;
    },
  },
});

export default userSlice;
