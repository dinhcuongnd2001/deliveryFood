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
      console.log(typeof action);
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
    },
  },
});

export default userSlice;
