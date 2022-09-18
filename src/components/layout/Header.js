import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";
import Search from "../sections/Search";

function Header({ Nav }) {
  return (
    <header>
      <div className="container">
        <div className="header-top grid wide">
          <div className="wrapper row">
            <div className="logo col l-3 m-3">
              <h1>
                <Link to="/" className="slogan">
                  NamChill
                </Link>
              </h1>
            </div>
            <div className="search col l-7 m-7">
              <Search />
            </div>
            <div className="movies-store col l-2 m-2">
              <div className="get-store">
                <BsFillBookmarkFill />
                <span>Tủ Phim</span>
                <span className="amount-movies">0</span>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <nav className="navbar-desktop grid wide">
            <ul className="menu row">
              {Nav &&
                Nav.map((navLink, index) => {
                  return (
                    <li key={index} className="menu-item">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "active" : undefined
                        }
                        to={navLink.href ? navLink.href : ""}
                      >
                        {navLink.name}
                      </NavLink>
                    </li>
                  );
                })}
            </ul>
          </nav>
          <nav className="navbar-mobile">
            <ul className="menu row">
              {Nav &&
                Nav.map((navLink, index) => {
                  return (
                    <li key={index} className="menu-item">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "active" : undefined
                        }
                        to={navLink.href ? navLink.href : ""}
                      >
                        {navLink.name}
                      </NavLink>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
