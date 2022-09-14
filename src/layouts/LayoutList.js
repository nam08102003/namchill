import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FilterMovie from "../components/sections/FilterMovie";
import navLinks from "../components/layout/partials/HeaderNav";
import links from "../components/layout/partials/FooterNav";
import contentFilter from "../components/sections/ContentFilter";
import { useLocation } from "react-router-dom";

function LayoutList({ children }) {
  let currentLocation = useLocation();
  let currentPage = navLinks.filter(
    (navLink) => navLink.href === currentLocation.pathname
  );
  return (
    <>
      <Header Nav={navLinks} />
      <FilterMovie
        ContentFilter={contentFilter}
        currentPage={currentPage[0].name}
      />
      <main className="site-main grid-wide">{children}</main>
      <Footer NavLinks={navLinks} OutLinks={links} />
    </>
  );
}

export default LayoutList;
