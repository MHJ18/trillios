import React, { useState } from "react";
import "./header.scss";
import { AiFillHome } from "react-icons/ai";
import { FaPlaneDeparture, FaMap } from "react-icons/fa";
import { GoKey } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const [first, setfirst] = useState();
  let active = useLocation();
  useEffect(() => {
    let result = active.pathname;
    setfirst(result);
  }, [active]);

  return (
    <>
      <div className="header-side">
        <nav className="navbar">
          <ul className="header-sidebar">
            <li className={first === "/" ? "active" : ""}>
              <Link to="/" className="link ">
                <AiFillHome className="icons" />
                <span className="header-links">HOTEL</span>
              </Link>
            </li>
            <li className={first === "/flights" ? "active" : ""}>
              <Link to="flights" className="link">
                <FaPlaneDeparture className="icons" />
                <span className="header-links">flight</span>
              </Link>
            </li>
            <li className={first === "/cars" ? "active" : ""}>
              <Link to="cars" className="link">
                <GoKey className="icons" />
                <span className="header-links">Car rental</span>
              </Link>
            </li>
            <li className={first === "/plans" ? "active" : ""}>
              <Link to="plans" className="link">
                <FaMap className="icons" />
                <span className="header-links">Tours</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="copy">&copy; 2023 by trillo. All rights reserved.</div>
      </div>
    </>
  );
};

export default Header;
