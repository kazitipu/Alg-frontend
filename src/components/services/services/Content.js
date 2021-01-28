import React from "react";
import "./services.css";
const Services = () => {
  return (
    <>
      <main id="body-content">
        <section className="wide-tb-80 bg-fixed what-we-offer1">
          {/* <div className="container pos-rel">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="mb-4 fw-7 txt-blue ">
                  Quality <span className="fw-6 txt-orange">and</span>{" "}
                  Performance <br />
                  <span className="fw-6 txt-orange">at the right price</span>
                </h2>
                <p className="">
                  Energistically utilize team driven niche markets rather than
                  leveraged platforms. Monotonectally restore tactical "outside
                  the box" thinking and technically sound deliverables.{" "}
                </p>
                <p className="">
                  Compellingly develop fully researched process improvements
                  through innovative opportunities. Credibly productize highly
                  efficient potentialities for vertical core competencies.
                  Quickly maintain pandemic experiences rather than low-risk
                  high-yield processes.
                </p>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div> */}
        </section>
        <section className="bg-white wide-tb-100">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="heading-main">
                  <span>what we offer</span>
                  Our Main Services
                </h1>
              </div>
              <div className="col-md-4 ">
                <a href="service-details.html">
                  <div className="icon-box-1">
                    <img src="images/icon-box-1.jpg" alt="" />
                    <div className="text">
                      <i className="icofont-vehicle-delivery-van"></i>
                      GROUND DELIVERY
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-4 ">
                <a href="service-details.html">
                  <div className="icon-box-1">
                    <img src="images/icon-box-2.jpg" alt="" />
                    <div className="text">
                      <i className="icofont-airplane-alt"></i>
                      AIR DELIVERY
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-4 ">
                <a href="service-details.html">
                  <div className="icon-box-1">
                    <img src="images/icon-box-3.jpg" alt="" />
                    <div className="text">
                      <i className="icofont-ship"></i>
                      SEA DELIVERY
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light-gray">
          <div className="container-fluid p-0">
            <div className="row align-items-center no-gutters">
              <div className="col-lg-4 text-center support">
                <div className="px-5 wide-tb-100">
                  {/* <div className="service-icon mx-auto mb-5 icon-box-5">
                    <i className="icofont-live-support"></i>
                  </div> */}
                  <h4 className="h4-md fw-7 txt-orange">24/7 Support</h4>
                </div>
              </div>
              <div className="col-lg-4 text-center safe-and-secure">
                <div className="px-5 wide-tb-100">
                  {/* <div className="service-icon mx-auto mb-5 icon-box-5">
                    <i className="icofont-glass"></i>
                  </div> */}
                  <h4 className="h4-md fw-7 txt-orange">SAFE & SECURE</h4>
                </div>
              </div>
              <div className="col-lg-4 text-center fast-delivery ">
                <div
                  className="px-5 wide-tb-100"
                  style={{ position: "relative", zIndex: "999" }}
                >
                  {/* <div className="service-icon mx-auto mb-5 icon-box-5">
                    <i className="icofont-delivery-time"></i>
                  </div> */}
                  <h4 className="h4-md fw-7 txt-orange">FAST DELIVERY</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Services;
