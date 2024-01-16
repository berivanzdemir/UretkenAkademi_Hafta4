import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiteContext } from "../Context/SiteContext";
import ThemeIcon from "./ThemeIcon";

function Navbar() {
  const {user,handleLogOut}=useContext(SiteContext)
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container">
      <Link className="navbar-brand" to="/">R-Store</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/Products">
              Products
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
            {
              user?
              <>
              <NavLink className="nav-link" to="/fav">Favorites</NavLink>
              <button className="nav-link" onClick={handleLogOut}>Logout ({user.name})</button>
              </>:
              <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            }
            <div className="ms-auto"><ThemeIcon/></div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
