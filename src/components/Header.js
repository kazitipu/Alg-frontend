import React from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "./firebase/firebase.utils";
import "./header.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Header = (props) => {
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
                  <small className="txt-black">Email Us</small>
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
                  <ul
                    className="dropdown-menu"
                    style={{ flexDirection: "column" }}
                  >
                    <li style={{ display: "block" }}>
                      <Link
                        className="dropdown-item"
                        to={`${process.env.PUBLIC_URL}/contact`}
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li style={{ display: "block" }}>
                      <Link
                        className="dropdown-item"
                        to={`${process.env.PUBLIC_URL}contactusoption`}
                      >
                        Contact Us Option
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className="btn-theme icon-left no-shadow d-none d-lg-inline-block align-self-center nav-link"
                    to="#"
                    role="button"
                    data-toggle="modal"
                    data-target="#request_order_tracking_popup"
                    style={{
                      background: "#7d017d",
                      fontSize: "85%",
                      fontFamily: "sans-serif",
                    }}
                  >
                    <i className="icofont-location-arrow"></i> Order tracking
                  </Link>
                </li>
                {!props.currentUser.displayName ? (
                  <li className="nav-item">
                    <Link
                      className="btn-theme icon-left no-shadow d-none d-lg-inline-block align-self-center nav-link"
                      to="/"
                      role="button"
                      data-toggle="modal"
                      data-target="#request_login_popup"
                      style={{
                        background: "#0e6f0e",
                        fontSize: "85%",
                        fontFamily: "sans-serif",
                      }}
                    >
                      <i className="icofont-man-in-glasses"></i>
                      Login
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle-mob"
                      to={`${process.env.PUBLIC_URL}/`}
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ paddingTop: "6px", paddingBottom: "7px" }}
                    >
                      <i className="icofont-man-in-glasses"></i>
                      {props.currentUser.displayName.slice(0, 10)}
                    </Link>
                    <ul className="dropdown-menu">
                      <li
                        style={{
                          display: "block",
                          background: "#7d017d",
                          padding: "11px 0px",
                        }}
                      >
                        <Link
                          // className="dropdown-item"
                          to={`${process.env.PUBLIC_URL}/contact`}
                          style={{
                            color: "white",
                            borderBottom: "1px solid white",
                          }}
                        >
                          <i className="icofont-wallet"></i>&nbsp;My wallet:
                          17500tk
                        </Link>
                      </li>
                      <li style={{ display: "block" }}>
                        <Link
                          className="dropdown-item"
                          to={`${process.env.PUBLIC_URL}/user/${props.currentUser.uid}`}
                        >
                          <i className="icofont-dashboard-web"></i>&nbsp;My
                          Dashboard
                        </Link>
                      </li>
                      <li style={{ display: "block" }}>
                        <a
                          href={`${process.env.PUBLIC_URL}/`}
                          className="dropdown-item"
                          onClick={async () => {
                            await auth.signOut();
                            toast.error("You are logged out!");
                          }}
                        >
                          <i className="icofont-logout"></i>&nbsp; Log Out
                        </a>
                      </li>
                    </ul>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <ToastContainer />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser,
  };
};
export default connect(mapStateToProps)(Header);
