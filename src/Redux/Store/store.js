import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "../Slices/newsSlice";
const store = configureStore({
    reducer:{

        news:newsSlice,
        
    }
});
export default store;