import React from "react";
import { Link } from "react-router-dom";
import "./about-us.css";

const Content = () => {
  return (
    <>
      <main id="body-content">
        <section className="wide-tb-80 bg-about-us-fixed what-we-offer">
          <div className="container pos-rel">
            <div className="row align-items-center">
              <div className="col-md-6 ">
                <h2 className="mb-4 fw-7 txt-white">
                  <span className="fw-6 txt-orange"> Quality</span> and
                  <span className="fw-6 txt-orange"> Performance </span>
                  at the right price
                </h2>
                <p style={{ color: "white" }}>
                  The Cargo Company was established in 2016 to supply customers
                  and trading partners with a cost effective, reliable range of
                  international logistics services. Today we have completed over
                  4 years in the shipping industry and this experience has
                  helped us build a reputation as professional, reliable and
                  efficient company. We have been immensely blessed by support
                  from our customers which has spelled our success story. We are
                  today one of the fastest growing logistics providers in
                  Bangladesh with a strong agency network all around the world.
                </p>
                <p style={{ color: "white" }}>
                  We are member of Bangladesh China chamber of commerce and
                  industry (BCCCI) and E-Commerce association of Bangladesh
                  (e-Cab). We have a dedicated, hands-on team committed to
                  providing the highest standards of services. Our employees are
                  regularly trained and the market trends are systematically
                  investigated by experts; reason being that we believe our
                  customers deserve nothing but the best.
                </p>
                <p style={{ color: "white" }}>
                  Our employees arrange the most complex of road, air and ocean
                  shipments, door-to-door deliveries and insurance, warehousing
                  and distribution services. We are also authorized custom house
                  agents since 2006 and thus render different types of custom
                  clearance services to the clients. We handle all
                  documentation, custom broking and inland clearance for our
                  customers. Every day The Cargo Co. solves logistic doubts of
                  its clients and provides them a tailor-made supply chain
                  solution.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light-gray wide-tb-100 pb-5 why-choose">
          <div className="container pos-rel">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="heading-main">
                  <span>Our Goodness</span>
                  What Makes Us Special
                </h1>
              </div>
              <div className="col-12 col-lg-4 ">
                <div className="icon-box-2">
                  <div className="media">
                    <div className="service-icon">
                      <i className="icofont-id"></i>
                    </div>
                    <div className="service-inner-content media-body">
                      <h4 className="h4-md">Trusted Franchise</h4>
                      <p>
                        We are the most trusted Cargo company in Bangladesh.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 ">
                <div className="icon-box-2">
                  <div className="media">
                    <div className="service-icon">
                      <i className="icofont-live-support"></i>
                    </div>
                    <div className="service-inner-content media-body">
                      <h4 className="h4-md">Customer Support</h4>
                      <p>
                        Our support team is always ready to give you 24/7
                        support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 ">
                <div className="icon-box-2">
                  <div className="media">
                    <div className="service-icon">
                      <i className="icofont-history"></i>
                    </div>
                    <div className="service-inner-content media-body">
                      <h4 className="h4-md">Reliability & Punctuality</h4>
                      <p>
                        Definitely you can rely on us as we promise most trusted
                        cargo services all around the country.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wide-tb-100 mb-spacer-md">
          <div className="container wide-tb-100 pb-0">
            <div className="row d-flex align-items-center">
              <div
                className="col col-12 col-lg-3 col-sm-6 wow slideInUp"
                data-wow-duration="0"
                data-wow-delay="0s"
              >
                <div className="counter-style-1 light-bg">
                  <p className="mb-1">
                    <i className="icofont-google-map"></i>
                  </p>
                  <span className="counter">4</span>
                  <div>Our Locations</div>
                </div>
              </div>
              <div
                className="col col-12 col-lg-3 col-sm-6 wow slideInUp"
                data-wow-duration="0"
                data-wow-delay="0.3s"
              >
                <div className="counter-style-1 light-bg">
                  <p className="mb-1">
                    <i className="icofont-globe"></i>
                  </p>
                  <span className="counter">350</span>
                  <span>+</span>
                  <div>Clients Worldwide</div>
                </div>
              </div>
              <div className="w-100 d-none d-sm-block d-lg-none spacer-60"></div>
              <div
                className="col col-12 col-lg-3 col-sm-6 wow slideInUp"
                data-wow-duration="0"
                data-wow-delay="0.6s"
              >
                <div className="counter-style-1 light-bg">
                  <p className="mb-1">
                    <i className="icofont-vehicle-delivery-van"></i>
                  </p>
                  <span className="counter">240</span>
                  <span>+</span>
                  <div>Transport Vehicles</div>
                </div>
              </div>
              <div
                className="col col-12 col-lg-3 col-sm-6 wow slideInUp"
                data-wow-duration="0"
                data-wow-delay="0.9s"
              >
                <div className="counter-style-1 light-bg">
                  <p className="mb-1">
                    <i className="icofont-umbrella-alt"></i>
                  </p>
                  <span className="counter">2340</span>
                  <div>Tonnes Transported</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pos-rel bg-sky-blue">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-5 col-12 p-0">
                <img src="images/why-choose-us.jpg" className="w-100" alt="" />
              </div>
              <div className="col-lg-6 col-12">
                <div className="p-5 about-whoose">
                  <h1 className="heading-main text-left mb-4">
                    <span>Why Choose</span>
                    ALG Cargos And Logistics Ltd
                  </h1>
                  <ul className="list-unstyled icons-listing theme-orange w-half mb-0">
                    <li className="">
                      <i className="icofont-check"></i>Deliver Environmentally
                      Responsible Client Services
                    </li>
                    <li className="">
                      <i className="icofont-check"></i>Be an Active Community
                      Partner
                    </li>
                    <li className="">
                      <i className="icofont-check"></i>Drive Continuous
                      Improvement
                    </li>
                    <li className="">
                      <i className="icofont-check"></i>Clearance and compliance
                      service
                    </li>
                    <li className="">
                      <i className="icofont-check"></i>Maintain High Ethical
                      Standards
                    </li>
                    <li className="">
                      <i className="icofont-check"></i>Air & Ocean Cargo
                      Insurance
                    </li>
                    <li className="">
                      <i className="icofont-check"></i>We ensure complete
                      security
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wide-tb-100 bg-fixed clients-bg pos-rel">
          <div
            className="bg-overlay blue opacity-80"
            style={{ background: "none" }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="heading-main">
                  <span>SOME OF OUR</span>
                  Clients
                </h1>
              </div>

              <div className="col-sm-12 ">
                <div className="owl-carousel owl-theme" id="home-clients">
                  <div className="item">
                    <img src="images/clients/l1.png" alt="" />
                  </div>

                  <div className="item">
                    <img src="images/clients/l2.png" alt="" />
                  </div>

                  <div className="item">
                    <img src="images/clients/l3.png" alt="" />
                  </div>

                  <div className="item">
                    <img src="images/clients/l4.png" alt="" />
                  </div>

                  <div className="item">
                    <img src="images/clients/l5.png" alt="" />
                  </div>

                  <div className="item">
                    <img src="images/clients/l6.png" alt="" />
                  </div>
                  <div className="item">
                    <img src="images/clients/l7.png" alt="" />
                  </div>
                  <div className="item">
                    <img src="images/clients/l8.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="wide-tb-100 faqs">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="heading-main">
                  <span>Frequently Asked</span>
                  Questions
                </h1>
              </div>
              <div className="col-sm-12 col-md-6 ">
                <h4 className="h4-md mb-3">
                  Lobortis sit magna ornare magna egestas?
                </h4>
                <p>
                  Etiam sit amet mauris suscipit sit amet in odio. Integer
                  congue leo metus. Vitae arcu mollis blandit ultrice ligula
                  egestas magna suscipit lectus magna suscipit luctus undo
                  blandit vitae purus laoreet
                </p>
              </div>
              <div className="col-sm-12 col-md-6 ">
                <h4 className="h4-md mb-3">Aliquam dapibus pretium ornare?</h4>
                <p>
                  Feugiat eros ligula massa lipsum primis in orci luctus et
                  ultrices posuere cubilia curae congue lorem. ante ipsum primis
                  in faucibus bibendum sit amet in odio
                </p>
              </div>
              <div className="col-sm-12 col-md-6 ">
                <h4 className="h4-md mb-3">
                  Placeat axime facere omnis volute?
                </h4>
                <p>
                  Etiam sit amet mauris suscipit sit amet in odio. Integer
                  congue leo metus. Vitae arcu mollis blandit ultrice ligula
                  egestas magna suscipit lectus magna suscipit luctus undo
                  blandit vitae purus laoreet
                </p>
              </div>
              <div className="col-sm-12 col-md-6 ">
                <h4 className="h4-md mb-3">Dapibus lobortis pretium ornare?</h4>
                <p>
                  Feugiat eros ligula massa lipsum primis in orci luctus et
                  ultrices posuere cubilia curae congue lorem. ante ipsum primis
                  in faucibus bibendum sit amet in odio
                </p>
              </div>
              <div className="col-sm-12 col-md-6 ">
                <h4 className="h4-md mb-3">
                  An interdum lobortis pretium ornare?
                </h4>
                <p>
                  Etiam sit amet mauris suscipit sit amet in odio. Integer
                  congue leo metus. Vitae arcu mollis blandit ultrice ligula
                  egestas magna suscipit lectus magna suscipit luctus undo
                  blandit vitae purus laoreet
                </p>
              </div>
              <div className="col-sm-12 col-md-6 ">
                <h4 className="h4-md mb-3">
                  Interdum lobortis pretium ornare?
                </h4>
                <p>
                  Feugiat eros ligula massa lipsum primis in orci luctus et
                  ultrices posuere cubilia curae congue lorem. ante ipsum primis
                  in faucibus bibendum sit amet in odio
                </p>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="wide-tb-80 bg-scroll bg-img-6 pos-rel callout-style-1">
          <div className="bg-overlay blue opacity-60"></div>
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-4 col-md-12 mb-0 wow slideInUp"
                data-wow-duration="0"
                data-wow-delay="0.1s"
              >
                <h4 className="h4-xl">Interested in working with ALG?</h4>
              </div>
              <div
                className="col wow slideInUp"
                data-wow-duration="0"
                data-wow-delay="0.2s"
              >
                <div className="center-text">
                  We don’t just manage suppliers, we micro-manage them. We have
                  a consultative, personalized approach
                </div>
              </div>
              <div
                className="col-sm-auto wow slideInUp"
                data-wow-duration="0"
                data-wow-delay="0.3s"
              >
                <Link to="#" className="btn btn-theme bg-white bordered">
                  Get In Touch <i className="icofont-rounded-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
};
export default Content;
