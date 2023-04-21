import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    articlescount:0
  },
  reducers: {
    setNews: (state, action) => {
        state.news = action.payload;
      },
    setArticlesCount: (state, action) => {
      state.articlescount = action.payload;
    },
  },
});
export const { setNews,setArticlesCount } = newsSlice.actions;
export default newsSlice.reducer;