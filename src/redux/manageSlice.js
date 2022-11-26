import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const manageSlice = createSlice({
  name: "manage",
  initialState: { status: "idle", foods: [] }, //chi lu tru cart
  reducers: {
    add: (state, action) => {
      //   state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoods.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchFoods.fulfilled, (state, action) => {
        state.foods = action.payload;
        state.status = "idle";
      });
  },
});

export default manageSlice;

export const fetchFoods = createAsyncThunk("manage/fetchFoods", async () => {
  // console.log("co vao day r");
  const res = await axios.get("http://localhost:8080/products");
  return res.data;
});
