import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import navLinks from "../components/layout/partials/HeaderNav";
import links from "../components/layout/partials/FooterNav";

function LayoutMovie({ children }) {
  return (
    <>
      <Header Nav={navLinks} />
      <main className="site-main grid-wide">{children}</main>
      <Footer NavLinks={navLinks} OutLinks={links} />
    </>
  );
}

export default LayoutMovie;
