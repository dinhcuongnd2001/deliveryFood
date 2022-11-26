import { configureStore } from "@reduxjs/toolkit";
import manageSlice from "./manageSlice";

export default configureStore({
  reducer: {
    manage: manageSlice.reducer,
  },
});