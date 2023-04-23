import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import newsSlice from "../Slices/newsSlice";
import savedNewsSlice from "../Slices/savedNewsSlice";
import serachedNewsSlice from "./serachedNewsSlice";
import { combineReducers } from "@reduxjs/toolkit";
// import newsReducer from "./newsSlice";
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
    news:newsSlice,
    savednews:savedNewsSlice,
    searchednews:serachedNewsSlice,
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
//   const store = createStore(persistedReducer);
// const persistor = persistStore(store);

  export default persistedReducer;