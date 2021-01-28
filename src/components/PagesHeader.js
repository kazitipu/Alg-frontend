import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
              <Link className="nav-link mr-2 ml-auto" to="#" id="search_home">
                <i className="icofont-search"></i>
              </Link>
              <Link
                className="btn-theme icon-left bg-navy-blue no-shadow align-self-center"
                to="#"
                role="button"
                data-toggle="modal"
                data-target="#request_popup"
              >
                <i className="icofont-list"></i>
                <span className="d-none d-sm-inline-block"> Request Quote</span>
              </Link>
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

export default Header;
