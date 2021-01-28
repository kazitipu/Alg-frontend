import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../PagesHeader";
import Footer from "../../Footer";
import Content from "./Content";
import EmailSubscribe from "../../EmailSubscribe";
import BackToTop from "../../BackToTop";
import SearchPopup from "../../SearchPopup";
import RequestModal from "../../RequestModal";
import "./contact-us.css";

const ContactusOption = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <>
        <div className="slider bg-navy-blue bg-scroll pos-rel contact-us-breadcrumbs">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-c-none">
                <li className="breadcrumb-item">
                  <Link to="/">
                    <i className="icofont-home"></i>
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#" style={{ color: "white" }}>
                    Pages
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active"
                  aria-current="page"
                  style={{ color: "orange" }}
                >
                  Contac Us
                </li>
              </ol>
            </nav>

            <h1 style={{ color: "orange" }}>Contac Us</h1>
          </div>
        </div>
      </>
      <Content />
      {/* <EmailSubscribe /> */}
      <Footer />
      <SearchPopup />
      <RequestModal />
      <BackToTop />
    </>
  );
};
export default ContactusOption;
