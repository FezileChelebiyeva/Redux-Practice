import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
const Header = () => {
  return (
    <div id="header">
      <div className="logo">Logo</div>
      <nav>
        <ul>
          <li>
            <NavLink to={"/customers"}>Customers List</NavLink>
          </li>
          <li>
            <NavLink to={"/favorite-customers"}>Favorites</NavLink>
          </li>
          <li>
            <NavLink to={"/add-customers"}>Add Customers</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
