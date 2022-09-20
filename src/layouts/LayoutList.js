import React, { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FilterMovie from "../components/sections/FilterMovie";
import navLinks from "../components/layout/partials/HeaderNav";
import links from "../components/layout/partials/FooterNav";
import contentFilter from "../components/sections/ContentFilter";
import { useLocation } from "react-router-dom";
import Loading from "../utils/Loading";

function LayoutList({ children }) {
  const [loading, setLoading] = useState(false);
  let currentLocation = useLocation();
  let currentPage = navLinks.filter(
    (navLink) => navLink.href === currentLocation.pathname
  );

  console.log(currentLocation);

  useEffect(() => {
    setLoading(true);
    const removeLoading = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(removeLoading);
    };
  }, [currentLocation]);

  return (
    <Loading loading={loading}>
      <Header Nav={navLinks} />
      <FilterMovie
        ContentFilter={contentFilter}
        currentPage={currentPage[0].name}
      />
      <main className="site-main grid-wide">{children}</main>
      <Footer NavLinks={navLinks} OutLinks={links} />
    </Loading>
  );
}

export default LayoutList;
