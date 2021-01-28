import React from "react";
import "./slider.css";
const Slider = () => {
  const Styles = {
    tpCaption: {
      zIndex: 3,
      whiteSpace: "nowrap",
      fontWeight: "800",
      backgroundColor: "rgba(41, 46, 49, 1.00)",
      borderColor: "rgba(255, 255, 255, 0)",
      outline: "none",
      boxShadow: "none",
      boxSizing: "borderBox",
      MozBoxSizing: "border-box",
      WebkitBoxSizing: "border-box",
    },
  };
  return (
    <>
      <div className="banner-background-image">
        {/* <div
          id="rev_slider_1078_1_wrapper"
          className="rev_slider_wrapper fullwidthbanner-container"
          data-alias="classNameic4export"
          data-source="gallery"
          style={{
            margin: "0px auto",
            backgroundColor: "transparent",
            padding: "0px",
            marginTop: "0px",
            marginBottom: "0px",
          }}
        >
          <div
            id="rev_slider_1078_1"
            className="rev_slider fullscreenbanner"
            style={{ display: "none" }}
          >
            <ul>
              <li
                data-index="rs-3045"
                data-transition="zoomout"
                data-slotamount="default"
                data-hideafterloop="0"
                data-hideslideonmobile="off"
                data-easein="Power4.easeInOut"
                data-easeout="Power4.easeInOut"
                data-masterspeed="2000"
                data-thumb="rev-slider/assets/images/datcolor-100x50.jpg"
                data-rotate="0"
                data-fstransition="fade"
                data-fsmasterspeed="1500"
                data-fsslotamount="7"
                data-saveperformance="off"
                data-title="Intro"
                data-param1=""
                data-param2=""
                data-param3=""
                data-param4=""
                data-param5=""
                data-param6=""
                data-param7=""
                data-param8=""
                data-param9=""
                data-param10=""
                data-description=""
              >
                <img
                  src="images/banner_slider_4.png"
                  alt=""
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                  data-bgparallax="10"
                  className="rev-slidebg banner-background-image"
                  data-no-retina
                />
              </li>
            </ul>
            <div
              className="tp-bannertimer tp-bottom"
              style={{
                height: "7px",
                backgroundColor: `rgba(255, 255, 255, 0.25)`,
              }}
            ></div>
          </div>
        </div> */}
      </div>
      <div className="pulse-earth-image"></div>
      <div className="pulse-background"></div>
    </>
  );
};
export default Slider;
