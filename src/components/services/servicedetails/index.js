import React, { useEffect } from "react";
import Header from "../../PagesHeader";
import Footer from "../../Footer";
import Content from "./Content";
import Breadcrumbs from "../../Breadcrumbs";
import EmailSubscribe from "../../EmailSubscribe";
import BackToTop from "../../BackToTop";
import SearchPopup from "../../SearchPopup";
import RequestModal from "../../RequestModal";
import BreadcrumbsData from "../../breadcrumbs.json";

const ServiceDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Breadcrumbs
        title={BreadcrumbsData.services.servicedetails.title}
        description={BreadcrumbsData.services.servicedetails.description}
      />
      <Content />
      <EmailSubscribe />
      <Footer />
      <SearchPopup />
      <RequestModal />
      <BackToTop />
    </>
  );
};
export default ServiceDetails;
