import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "./firebase/firebase.utils";
// comments for checking githum username
const Header = (props) => {
  return (
    <>
      <header className="fixed-top header-fullpage top-border top-transparent wow fadeInDown">
        <div className="top-bar-right d-flex align-items-center text-md-left">
          <div className="container">
            <div className="row align-items-center">
              <div className="col">
                <i className="icofont-google-map"></i>37/2 Pritom-Zaman Tower,
                10th Floor, suite 6A, Culvert Road, Dhaka-1000. Bangladesh
              </div>
              <div className="col-md-auto">
                <span className="mr-3">
                  <i className="icofont-ui-touch-phone"></i> +8801736-404419
                </span>
                <span className="mr-3">
                  <i className="icofont-ui-email"></i> info@algcargos.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg bg-transparent">
          <div className="container text-nowrap">
            <div className="d-flex align-items-center w-100 col p-0">
              <Link
                className="navbar-brand rounded-bottom light-bg"
                to={`${process.env.PUBLIC_URL}/`}
              >
                <img
                  style={{ maxWidth: "35%" }}
                  src="images/alg-header-logo.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="d-inline-flex request-btn order-lg-last col p-0">
              <Link className="nav-link" to="#" id="search_home">
                {/* <i className="icofont-search"></i> */}
              </Link>
              {/* <Link
                className="btn-theme icon-left bg-navy-blue no-shadow align-self-center"
                to="#"
                role="button"
                data-toggle="modal"
                data-target="#request_popup"
              >
                <i className="icofont-list"></i>
                <span className="d-none d-sm-inline-block"> Request Quote</span>
              </Link> */}
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
            </div>
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
                    to={`${process.env.PUBLIC_URL}/recent-news`}
                  >
                    News
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
                    to={`${process.env.PUBLIC_URL}/contact`}
                  >
                    Contact us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="btn-theme icon-left no-shadow d-none d-lg-inline-block align-self-center nav-link"
                    to="#"
                    role="button"
                    data-toggle="modal"
                    data-target="#request_order_tracking_popup"
                    style={{ background: "#7d017d", fontSize: "85%" }}
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
                      style={{ background: "#0e6f0e", fontSize: "85%" }}
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
                          style={{ color: "white" }}
                        >
                          <i className="icofont-wallet"></i>&nbsp;My wallet:
                          17500tk
                        </Link>
                      </li>
                      <li style={{ display: "block" }}>
                        <Link
                          className="dropdown-item"
                          to={`${process.env.PUBLIC_URL}/contact`}
                        >
                          <i className="icofont-dashboard-web"></i>&nbsp;My
                          Dashboard
                        </Link>
                      </li>
                      <li style={{ display: "block" }}>
                        <a
                          href={`${process.env.PUBLIC_URL}/`}
                          className="dropdown-item"
                          onClick={() => auth.signOut()}
                        >
                          <i className="icofont-logout"></i>&nbsp; Log Out
                        </a>
                      </li>
                    </ul>
                  </li>
                )}
                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle-mob"
                    href="home-one"
                    id="blog-menu"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog <i className="icofont-rounded-down"></i>
                  </a>

                  <ul className="dropdown-menu" aria-labelledby="blog-menu">
                    <li>
                      <a className="dropdown-item" href="bloglist">
                        Blog List
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="blogstandard">
                        Blog Standard
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="bloggrid">
                        Blog Grid
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="blogsingle">
                        Blog Single
                      </a>
                    </li>
                  </ul>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser,
  };
};

export default connect(mapStateToProps, null)(Header);
