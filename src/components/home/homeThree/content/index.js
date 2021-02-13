import React from "react";
import Slider from "./Slilder";
import Content from "./Content";
import VideoBox from "./VideoBox";
import SearchPopup from "../../../SearchPopup";
import SignUpModal from "../../../SignUpModal";
import OrderTrackingModal from "../../../OrderTrackingModal";
import SearchSubmitModalFreight from "../../../SearchSubmitModalFreight";
import SearchSubmitModalDoortoDoor from "../../../SearchSubmitModalDoortoDoor";
import LoginModal from "../../../LoginModal";
import PhoneModal from "../../../PhoneModal";
import OtpModal from "../../../OtpModal";
import SearchBar from "./SearchBar";
const PageContent = () => {
  return (
    <>
      <SearchBar />
      <Slider />
      <Content />
      <VideoBox />
      <SearchPopup />
      <SignUpModal />
      <OrderTrackingModal />
      <SearchSubmitModalFreight />
      <SearchSubmitModalDoortoDoor />
      <LoginModal />
      <PhoneModal />
      <OtpModal />
    </>
  );
};
export default PageContent;
