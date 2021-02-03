import React, { useEffect } from "react";
import Header from "../../PagesHeader";
import Footer from "../../Footer";
import Content from "./Content";
import EmailSubscribe from "../../EmailSubscribe";
import BackToTop from "../../BackToTop";
import SearchPopup from "../../SearchPopup";
import LoginModal from "../../LoginModal";
import SignUpModal from "../../SignUpModal";
import OrderTrackingModal from "../../OrderTrackingModal";
import PhoneModal from "../../PhoneModal";
import OtpModal from "../../OtpModal";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <>
        <div className="slider bg-navy-blue bg-scroll pos-rel breadcrumbs-page service-background">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb" style={{ background: "none" }}>
                <li className="breadcrumb-item">
                  <Link to="/">
                    <i className="icofont-home"></i>
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Pages</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Services
                </li>
              </ol>
            </nav>

            <h1 style={{ color: "white" }}>Our Services</h1>
          </div>
        </div>
      </>
      <Content />
      <EmailSubscribe />
      <Footer />
      <SearchPopup />
      <LoginModal />
      <SignUpModal />
      <OrderTrackingModal />
      <PhoneModal />
      <OtpModal />
      <BackToTop />
    </>
  );
};
export default Services;
