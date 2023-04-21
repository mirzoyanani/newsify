import Header from "./Header";
import General from "../Pages/General";
import store from "../Redux/Store/store";
import { Provider } from "react-redux";
function App() {
  return (
    <>
    <Provider store={store}>
      <Header/>
      <General/>
    </Provider>
    </>
  );
}

export default App;
