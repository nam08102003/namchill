import React from "react";
import { Link } from "react-router-dom";

function Footer({ NavLinks, OutLinks }) {
  return (
    <footer>
      <div className="footer grid">
        <div className="container">
          <div className="footer-top row">
            <div className="footer-top__left col l-4">
              <div className="footer-logo">
                <h1>NamChill</h1>
              </div>
              <div className="footer-description">
                <p>
                  Tổng hợp phim mới, phim HOT vietsub, thuyết minh nhanh nhất.
                  Xem phim nhanh online miễn phí, chất lượng full HD.
                </p>
              </div>
            </div>
            <div className="footer-menu footer-top__center col l-5">
              <ul>
                {OutLinks &&
                  OutLinks.map((link, index) => {
                    return (
                      <li key={index}>
                        <Link to={link.href}>{link.name}</Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="footer-menu footer-top__right col l-3">
              <ul>
                {NavLinks &&
                  NavLinks.map((link, index) => {
                    return (
                      <li key={index}>
                        <Link to={link.href}>{link.name}</Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="footer-bottom row">
            <div className="copyright col l-4">
              <span>
                Copyright 2022 © <p>NamChill.com</p>
              </span>
            </div>
            <div className="footer-slogan col l-8">
              <span>Phim HD</span>
              <span>Xem phim nhanh</span>
              <span>Xem Phim Thuyết Minh VietSub</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
