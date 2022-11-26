// cac hoat dong loc cua user
import { createSlice } from "@reduxjs/toolkit";

const filterSilce = createSlice({
  name: "filter",
  initialState: { category: "All" },
  reducers: {
    byCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export default filterSilce;
