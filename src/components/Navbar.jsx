import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { TfiBookmark } from "react-icons/tfi";
import { TbMessages } from "react-icons/tb";
import "./navigation.scss";
const Navbar = () => {
  return (
    <div className="navbar__container">
      <nav className="navbar__item">
        <img src="favicon.png" alt="" />
        <form className="navbar__form" action="">
          <input type="text" placeholder="Search here" />
          <label htmlFor="search">
            <AiOutlineSearch className="search-icon" />
          </label>
        </form>
        <div className="main-menu">
          <div className="icon-hover">
            <TfiBookmark className="menu-icons" />
            <p className="icondetails1">7</p>
          </div>
          <div className="icon-hover">
            <TbMessages className="menu-icons" />
            <p className="icondetails2">14</p>
          </div>
          <div className="user-image icon-hover-img">
            <img src="user.jpg" alt="" className="user-image-img" />
            <figcaption>Hassaan</figcaption>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
