import React from "react";
import "./navigation.scss";
const Navbar = () => {
  return (
    <div className="navbar__container">
      <nav className="navbar__item">
        <img src="favicon.png" alt="" />
        <form className="navbar__form" action="">
          <input type="search" placeholder="Search here" />
          <label htmlFor="search">icon</label>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
