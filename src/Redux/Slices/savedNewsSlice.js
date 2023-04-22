import { createSlice } from "@reduxjs/toolkit";

const savedNewsSlice = createSlice({
  name: "savednews",
  initialState: {
    saved: [],
  },
  reducers: {
    setSaved: (state, action) => {
        state.saved.push(action.payload);
      },
  },
});
export const { setSaved } = savedNewsSlice.actions;
export default savedNewsSlice.reducer;