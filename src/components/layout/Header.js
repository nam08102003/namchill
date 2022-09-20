import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BiBookmarkPlus } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import Search from "../sections/Search";

function Header({ Nav }) {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();

  const ChangeShow = () => {
    setShow(!show);
  };

  const ShowSearch = () => {
    setSearch(!search);
  };

  const RedirectPage = () => {
    navigate("/store");
  };

  const ShowDropdown = (e, dropdown) => {
    if (dropdown) {
      e.preventDefault();
    }

    if (e.target.classList.contains("show-dropdown") === true) {
      console.log(123);
      e.target.classList.remove("show-dropdown");
    } else {
      e.target.classList.add("show-dropdown");
    }
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
              <div className="get-store" onClick={RedirectPage}>
                <BsFillBookmarkFill />
                <button>Tủ Phim</button>
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
                        id={navLink.dropdown ? "dropdown" : ""}
                        to={navLink.href ? navLink.href : ""}
                      >
                        {navLink.name}
                        {navLink.dropdown ? <AiFillCaretDown /> : ""}
                        {navLink.dropdown === true ? (
                          <div className="menu-dropdown-site">
                            <ul className="menu-dropdown row">
                              {navLink.children &&
                                navLink.children.map((children, index) => {
                                  return (
                                    <li
                                      key={index}
                                      className="col l-4 m-4 c-12"
                                    >
                                      <NavLink
                                        to={children.href ? children.href : ""}
                                      >
                                        {children.name}
                                      </NavLink>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        ) : (
                          ""
                        )}
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
                        id={navLink.dropdown ? "dropdown" : ""}
                        to={navLink.href ? navLink.href : ""}
                        onClick={(e) => ShowDropdown(e, navLink.dropdown)}
                      >
                        {navLink.name}
                        {navLink.dropdown ? <AiFillCaretDown /> : ""}
                        {navLink.dropdown === true ? (
                          <div className="menu-dropdown-site">
                            <ul className="menu-dropdown">
                              {navLink.children &&
                                navLink.children.map((children, index) => {
                                  return (
                                    <li
                                      key={index}
                                      className="col l-4 m-4 c-12"
                                    >
                                      <NavLink
                                        to={children.href ? children.href : ""}
                                      >
                                        {children.name}
                                      </NavLink>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        ) : (
                          ""
                        )}
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
