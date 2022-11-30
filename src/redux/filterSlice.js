// cac hoat dong loc cua user
import { createSlice } from "@reduxjs/toolkit";

const filterSilce = createSlice({
  name: "filter",
  initialState: { category: "All", hotPizza: 100 },
  reducers: {
    byCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export default filterSilce;
