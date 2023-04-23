import { createSlice } from "@reduxjs/toolkit";

const searchedNewsSlice = createSlice({
  name: "searchednews",
  initialState: {
    searchNews: [],
  },
  reducers: {
    setSearched: (state, action) => {
      state.searchNews = action.payload;
    }
  },
});
export const { setSearched} = searchedNewsSlice.actions;
export default searchedNewsSlice.reducer;