import React from "react";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">

        {/* ✅ Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="../media/images/logo.svg"
            style={{ width: "25%" }}
            alt="logo"
          />
        </Link>

        {/* ✅ Mobile Hamburger (collapse button) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <FiMenu size={22} />
        </button>

        {/* ✅ Collapsible content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          {/* ✅ CHANGED: removed form → replaced with div */}
          <div className="d-flex w-100">

            {/* ✅ CHANGED: added ms-auto */}
            <ul className="navbar-nav ms-auto mb-lg-0 align-items-lg-center">

              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">Signup</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/product">Product</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/support">Support</NavLink>
              </li>

              {/* ✅ Dropdown menu (Zerodha style) */}
              <li className="nav-item dropdown">

                {/* ✅ CHANGED: cleaner button */}
                <button
                  className="nav-link btn"
                  data-bs-toggle="dropdown"
                  style={{ border: "none", background: "none" }}
                >
                  <FiMenu size={20} />
                </button>

                {/* ✅ CHANGED: added dropdown-menu-end */}
                <div
                  className="dropdown-menu dropdown-menu-end p-4 shadow"
                  style={{ width: "750px" }}
                >

                  {/* Top section */}
                  <div className="row text-center">
                    <div className="col-lg-3">
                      <img src="../media/images/kite-logo.svg" alt="" />
                      <h6>Kite</h6>
                      <p className="text-muted">Trading Platform</p>
                    </div>

                    <div className="col-lg-3">
                      <img src="../media/images/console.svg" alt="" />
                      <h6>Console</h6>
                      <p className="text-muted">Backoffice</p>
                    </div>

                    <div className="col-lg-3">
                      <img src="../media/images/kite-connect.svg" alt="" />
                      <h6>Kite Connect</h6>
                      <p className="text-muted">Trading APIs</p>
                    </div>

                    <div className="col-lg-3">
                      <img src="../media/images/coin.svg" alt="" />
                      <h6>Coin</h6>
                      <p className="text-muted">Mutual Funds</p>
                    </div>
                  </div>

                  {/* Bottom section */}
                  <div className="row mt-4">
                    <div className="col">
                      <h6>Utilities</h6>
                      <ul className="list-unstyled">
                        <li>Calculators</li>
                        <li>Brokerage calculator</li>
                        <li>Margin calculator</li>
                        <li>SIP calculator</li>
                      </ul>
                    </div>

                    <div className="col">
                      <h6>Updates</h6>
                      <ul className="list-unstyled">
                        <li>Z-Connect blog</li>
                        <li>Circulars / Bulletin</li>
                        <li>IPOs</li>
                        <li>Markets</li>
                      </ul>
                    </div>

                    <div className="col">
                      <h6>Education</h6>
                      <div className="row">
                        <div className="col text-center">
                          <img src="../media/images/varsity-logo.png" alt="" />
                          <p>Varsity</p>
                        </div>

                        <div className="col text-center">
                          <img src="../media/images/tqna.png" alt="" />
                          <p>Trading Q&A</p>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;