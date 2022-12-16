import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
  name: "result",
  initialState: {
    searchResult: [],
    hideSearchBar: false,
  },
  reducers: {
    getFetchData(state, action) {
      state.searchResult = [];
      state.searchResult.push(...action.payload.data);
      state.hideSearchBar = true;
    },
  },
});
export default resultSlice;
