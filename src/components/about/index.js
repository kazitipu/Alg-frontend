import React, { useEffect } from "react";
import Header from "../PagesHeader";
import Footer from "../Footer";
import Content from "./Content";
import Breadcrumbs from "../Breadcrumbs";
import EmailSubscribe from "../EmailSubscribe";
import BackToTop from "../BackToTop";
import SearchPopup from "../SearchPopup";
import VideoBox from "./VideoBox";

import LoginModal from "../LoginModal";
import SignUpModal from "../SignUpModal";
import OrderTrackingModal from "../OrderTrackingModal";
import PhoneModal from "../PhoneModal";
import BreadcrumbsData from "../breadcrumbs.json";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Breadcrumbs
        title={BreadcrumbsData.about.title}
        description={BreadcrumbsData.about.description}
      />
      <Content />
      <EmailSubscribe />
      <VideoBox />
      <SearchPopup />
      <PhoneModal />
      <LoginModal />
      <SignUpModal />
      <OrderTrackingModal />
      <BackToTop />
      <Footer />
    </>
  );
};
export default About;
