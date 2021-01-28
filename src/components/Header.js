import React from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      {/* <Loader /> */}
      <header className="fixed-top header-fullpage bordered-nav wow fadeInDown">
        <div className="top-bar-right d-flex align-items-center text-md-left">
          <div className="container px-0">
            <div className="row align-items-center">
              <div className="col d-flex">
                <div className="top-text">
                  <small className="txt-black">Address</small>
                  37/2 Pritom-Zaman Tower, 10th Floor, suite 6A, Culvert Road,
                  Dhaka-1000. Bangladesh
                </div>
                <div className="top-text">
                  <small className="txt-black">Emaii Us</small>
                  <Link to="#">info@algcargos.com</Link>
                </div>
                <div className="top-text">
                  <small className="txt-black">Phone Number</small>
                  +8801736-404419
                </div>
              </div>
              {/* <div className="col-md-auto">
                <div className="d-inline-flex request-btn ml-2">
                  <Link
                    className="btn-theme icon-left bg-orange no-shadow d-none d-lg-inline-block align-self-center"
                    to="#"
                    role="button"
                    data-toggle="modal"
                    data-target="#request_popup"
                  >
                    <i className="icofont-page"></i> Request Quote
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg bg-transparent">
          <div className="container text-nowrap bdr-nav px-0">
            <div className="d-flex mr-auto">
              <Link className="navbar-brand rounded-bottom light-bg" to="/">
                <img
                  style={{ maxWidth: "30%", paddingBottom: "5px" }}
                  src="images/alg-header-logo.png"
                  alt=""
                />
              </Link>
            </div>
            <span className="order-lg-last d-inline-flex request-btn">
              <a className="nav-link mr-2 ml-auto" href="#" id="search_home">
                <i className="icofont-search"></i>
              </a>
            </span>
            <button
              className="navbar-toggler x collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarCollapse"
              data-hover="dropdown"
              data-animations="slideInUp slideInUp slideInUp slideInUp"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={`${process.env.PUBLIC_URL}/`}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={`${process.env.PUBLIC_URL}/about`}
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={`${process.env.PUBLIC_URL}/services`}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={`${process.env.PUBLIC_URL}/recent-news`}
                  >
                    News
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle-mob"
                    to={`${process.env.PUBLIC_URL}/`}
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Contact <i className="icofont-rounded-down"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`${process.env.PUBLIC_URL}/contact`}
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`${process.env.PUBLIC_URL}contactusoption`}
                      >
                        Contact Us Option
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
