import { createSlice } from "@reduxjs/toolkit";

const savedNewsSlice = createSlice({
  name: "savednews",
  initialState: {
    saved: [],
  },
  reducers: {
    setSaved: (state, action) => {
      const newsToAdd = action.payload;
      const alreadyExists = state.saved.some(
        (news) => news.article.title === newsToAdd.article.title
      );
      if (!alreadyExists) {
        state.saved.push(newsToAdd);
      } else {
        // console.log("kaa");
        alert("You have already saved the article , see the saved section");
      }
    },
    removeSaved: (state, action) => {
      const newsToRemove= action.payload;
      const newsIndex = state.saved.findIndex((news) => news.article.title === newsToRemove.article.article.title);
      state.saved.splice(newsIndex,1);
    },
  },
});
export const { setSaved,removeSaved } = savedNewsSlice.actions;
export default savedNewsSlice.reducer;
