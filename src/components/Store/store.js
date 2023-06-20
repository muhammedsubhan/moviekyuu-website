import { configureStore } from "@reduxjs/toolkit";
import ListSlice from "../ReduxToolkit/ListSlice";

export const store = configureStore({
  reducer: {
    ListSlice: ListSlice,
  },
});
