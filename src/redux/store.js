import { configureStore } from "@reduxjs/toolkit";
import filterSilce from "./filterSlice";
import manageSlice from "./manageSlice";

export default configureStore({
  reducer: {
    manage: manageSlice.reducer,
    filter: filterSilce.reducer,
  },
});
