// import React from 'react'
import MenuItem from "./MenuItem";
const MenuItems = () => {
  return (
    <div>
      <ul>
          <div className="dropdown">
            <div className="container dropbtn">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            <div className="dropdown-content">
            <MenuItem className="dropdown-menu"/>
            </div>
          </div>
          <div  className="shortcuts-list">
              <MenuItem/>             
          </div>
      </ul>
    </div>
  );
};

export default MenuItems;
