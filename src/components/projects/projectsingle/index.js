import React from "react";
import Header from "../../PagesHeader";
import Footer from "../../Footer";
import Content from "./Content";
import Breadcrumbs from "../../Breadcrumbs";
import EmailSubscribe from "../../EmailSubscribe";
import BackToTop from "../../BackToTop";
import SearchPopup from "../../SearchPopup";
import RequestModal from "../../RequestModal";
import BreadcrumbsData from "../../breadcrumbs.json";

const ProjectSingle = () => {
    return (
        <>
            <Header />
            <Breadcrumbs title={BreadcrumbsData.projects.projectsingle.title} description={BreadcrumbsData.projects.projectsingle.description}/>
            <Content />
            <EmailSubscribe />
            <Footer />
            <SearchPopup />
            <RequestModal />
            <BackToTop />
        </>
    );
};
export default ProjectSingle;
