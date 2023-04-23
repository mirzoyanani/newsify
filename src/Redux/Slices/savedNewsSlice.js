import { createSlice } from "@reduxjs/toolkit";

const savedNewsSlice = createSlice({
  name: "savednews",
  initialState: {
    saved: [],
  },
  reducers: {
    setSaved: (state,action) => {
      const newsToAdd = action.payload;
      //  state.saved.push(action.payload);
      // state.saved=[];
      // console.log(newsToAdd.article.title);
      // console.log(newsToAdd);
      const alreadyExists = state.saved.some(
        (news) => news.article.title === newsToAdd.article.title
      );
      if (!alreadyExists) {
        state.saved.push(newsToAdd);
      }
      else{
        // console.log("kaa");
        alert("You have already saved the article , see the saved section");
      }
}}});
export const { setSaved } = savedNewsSlice.actions;
export default savedNewsSlice.reducer;