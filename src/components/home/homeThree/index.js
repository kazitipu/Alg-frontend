import React, { useEffect } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import PageContent from "./content";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <PageContent />
      <Footer />
    </>
  );
};
export default Home;
