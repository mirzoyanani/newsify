import { createSlice } from "@reduxjs/toolkit";

const searchedNewsSlice = createSlice({
  name: "searchednews",
  initialState: {
    searchNews: [],
  },
  reducers: {
    setSearched: (state, action) => {
      state.searchNews = action.payload;
    },
    setEmpty:(state) => {
      state.searchNews = [];
    }
  },
});
export const { setSearched} = searchedNewsSlice.actions;
export default searchedNewsSlice.reducer;