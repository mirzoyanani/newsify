// import React from 'react'
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CategoryContext from "../Context/CategoryContext";
const MenuItems = () => {
    const { setCategory } = useContext(CategoryContext);
  return (
    <div>
          <ul className="shortcuts-list">
            <li>
            <div className="dropdown">
              <button className="dropbtn">Dropdown</button>
              <div className="dropdown-content">
              <li
            onClick={() => setCategory("general")}
            className="shortcuts-list-item"
          >
            General
          </li>
          <li
            onClick={() => setCategory("business")}
            className="shortcuts-list-item"
          >
            Business
          </li>
          <li
            onClick={() => setCategory("sports")}
            className="shortcuts-list-item"
          >
            Sports
          </li>
          <li
            onClick={() => setCategory("health")}
            className="shortcuts-list-item"
          >
            Health
          </li>
          <li
            onClick={() => setCategory("entertainment")}
            className="shortcuts-list-item"
          >
            Entertaiment
          </li>
          <li
            onClick={() => setCategory("technology")}
            className="shortcuts-list-item"
          >
            Tecnology
          </li>
          <li
            onClick={() => setCategory("science")}
            className="shortcuts-list-item"
          >
            Science
          </li>
              </div>
            </div>
          </li>
          <li
            onClick={() => setCategory("general")}
            className="shortcuts-list-item"
          >
            General
          </li>
          <li
            onClick={() => setCategory("business")}
            className="shortcuts-list-item"
          >
            Business
          </li>
          <li
            onClick={() => setCategory("sports")}
            className="shortcuts-list-item"
          >
            Sports
          </li>
          <li
            onClick={() => setCategory("health")}
            className="shortcuts-list-item"
          >
            Health
          </li>
          <li
            onClick={() => setCategory("entertainment")}
            className="shortcuts-list-item"
          >
            Entertaiment
          </li>
          <li
            onClick={() => setCategory("technology")}
            className="shortcuts-list-item"
          >
            Tecnology
          </li>
          <li
            onClick={() => setCategory("science")}
            className="shortcuts-list-item"
          >
            Science
          </li>
          <li className="shortcuts-list-item">
            <NavLink className="shortcuts-list-item navlink" to="/saved">
              Saved
            </NavLink>
          </li>
          </ul>
    </div>
  );
};

export default MenuItems;