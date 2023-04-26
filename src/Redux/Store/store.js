// import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import persistedReducer from "../Slices/persistedReducer ";

  const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export default store;