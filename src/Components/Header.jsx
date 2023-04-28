import { useState } from "react";
import "../Css/header.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import MenuItems from "./MenuItems";
import { setSearchTitle } from "../Redux/Slices/serachedNewsSlice";
const Header = () => {
  // let history = useHistory ();
  const [searchItem, setSearchItem] = useState(null);
  const dispach = useDispatch();
  
  function handleInfo() {
    window.location.replace("http://localhost:5173/search");
    dispach(setSearchTitle(searchItem));
  }
  async function handleSubmit(e){
    e.preventDefault();
    if (searchItem != null) {
          handleInfo();
    }
  }
  return (
    <div className="header">
      <NavLink className="shortcuts-list-item" to="/">
        <p className="title"> Newsify</p>
      </NavLink>
      <div className="navbar">
        <MenuItems/>
      </div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="search-box">
            <input
              type="search"
              className="input-search"
              placeholder="Type to Search..."
              onChange={(e) => {
                setSearchItem(e.target.value);
              }}
            />
          </div>
        </form>
      </div>
       

      
    </div>
  );
};

export default Header;
