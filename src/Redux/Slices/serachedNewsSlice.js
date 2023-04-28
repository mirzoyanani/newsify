import { createSlice } from "@reduxjs/toolkit";

const searchedNewsSlice = createSlice({
  name: "searchednews",
  initialState: {
    searchNews: [],
    searchTitle:null
  },
  reducers: {
    setSearched: (state, action) => {
      state.searchNews = action.payload;
    },
    setEmpty:(state) => {
      state.searchNews = [];
    },
    setSearchTitle:(state,action) => {
      state.searchTitle = action.payload;
    }
  },
});
export const { setSearched,setSearchTitle,setEmpty} = searchedNewsSlice.actions;
export default searchedNewsSlice.reducer;