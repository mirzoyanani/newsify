import Header from "./Header";
import General from "../Pages/General";
import store ,{ persistor } from "../Redux/Store/store";
// import { Persistor } from "redux-persist";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import SavedPage from "../Pages/SavedPage";
import SearchPage from "../Pages/SearchPage";

function App() {
  return (
    <>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<General />}></Route>
            <Route path="/saved" element={<SavedPage />}></Route>
            <Route path="/search" element={<SearchPage/>}></Route>
          </Routes>
        </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
