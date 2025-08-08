import { configureStore } from "@reduxjs/toolkit";
import dynamicDataReducer from "./slices/dynamicDataSlice";

export const store = configureStore({
  reducer: {
    dynamicData: dynamicDataReducer,
  },
});
