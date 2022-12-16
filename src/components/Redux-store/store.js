import { configureStore } from "@reduxjs/toolkit";
import resultSlice from "./slice/result-slice";

const store = configureStore({
  reducer: {
    resultItems: resultSlice.reducer,
  },
});

export const resultActions = resultSlice.actions;
export default store;
