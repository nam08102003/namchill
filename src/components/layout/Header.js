import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BiBookmarkPlus } from "react-icons/bi";
import Search from "../sections/Search";

function Header({ Nav }) {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(false);

  const ChangeShow = () => {
    setShow(!show);
  };
  const ShowSearch = () => {
    setSearch(!search);
  };
  return (
    <header>
      <div className="container">
        <div className="header-top grid wide">
          <div className="wrapper row">
            <div className="logo col l-3 m-3 c-xl-6 c-12">
              <h1>
                <Link to="/" className="slogan">
                  BestChillTv
                </Link>
              </h1>
            </div>
            <div className="search col l-7 m-6 c-xl-0 c-0">
              <Search />
            </div>
            <div className="movies-store col l-2 m-3 c-xl-6 c-0">
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
            <div className="icon-bar">
              <FaBars onClick={ChangeShow} />
              <div className="add-store">
                <BiBookmarkPlus />
                <BsSearch className="icon-search" onClick={ShowSearch} />
              </div>
            </div>
            <ul className={`menu-mobile ${show ? "show-menu" : ""}`}>
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
        <div className={`search-mobile ${search ? "show" : ""}`}>
          <Search />
        </div>
      </div>
    </header>
  );
}

export default Header;
