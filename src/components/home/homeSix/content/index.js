import React from "react";
import Slider from "./Slilder";
import Content from "./Content";
import RequestModal from "../../../RequestModal";
import VideoBox from "./VideoBox";
import SearchPopup from "../../../SearchPopup";

const PageContent = () => {
	return (
		<>
			<Slider />
			<Content />
			<VideoBox />
			<SearchPopup />
			<RequestModal />
		</>
	);
};
export default PageContent;
