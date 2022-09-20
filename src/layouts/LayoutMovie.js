import React, { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import navLinks from "../components/layout/partials/HeaderNav";
import links from "../components/layout/partials/FooterNav";
import { useLocation } from "react-router-dom";
import Loading from "../utils/Loading";

function LayoutMovie({ children }) {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const removeLoading = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(removeLoading);
    };
  }, [location]);

  return (
    <Loading loading={loading}>
      <Header Nav={navLinks} />
      <main className="site-main grid-wide">{children}</main>
      <Footer NavLinks={navLinks} OutLinks={links} />
    </Loading>
  );
}

export default LayoutMovie;
