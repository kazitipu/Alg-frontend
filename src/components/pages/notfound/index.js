import React, { useEffect } from "react";
import Header from "../../PagesHeader";
import Footer from "../../Footer";
import Content from "./Content";
import Breadcrumbs from "../../Breadcrumbs";
import EmailSubscribe from "../../EmailSubscribe";
import BackToTop from "../../BackToTop";
import SearchPopup from "../../SearchPopup";
import LoginModal from "../../LoginModal";
import SignUpModal from "../../SignUpModal";
import OrderTrackingModal from "../../OrderTrackingModal";
import PhoneModal from "../../PhoneModal";
import BreadcrumbsData from "../../breadcrumbs.json";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Breadcrumbs
        title={BreadcrumbsData.notfound.title}
        description={BreadcrumbsData.notfound.description}
      />
      <Content />
      <EmailSubscribe />
      <Footer />
      <SearchPopup />
    <OrderTrackingModal />
    <LoginModal />
    <SignUpModal />
    <PhoneModal />
      <BackToTop />
    </>
  );
};
export default NotFound;
