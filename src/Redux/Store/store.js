import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "../Slices/newsSlice";
import savedNewsSlice from "../Slices/savedNewsSlice";
const store = configureStore({
    reducer:{
        news:newsSlice,
        savednews:savedNewsSlice,
    }
});
export default store;