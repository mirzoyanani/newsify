import Header from "./Header";
import General from "../Pages/General";
import store from "../Redux/Store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SavedPage from "../Pages/SavedPage";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<General/>}></Route>
            <Route path="/saved" element={<SavedPage/>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
