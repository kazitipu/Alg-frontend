import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <>
      <main id="body-content">
        <section
          className="contact-callout bg-navy-blue wide-tb-70 mb-spacer-md"
          style={{ background: "rgb(9 0 97)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-3 col-sm-6">
                <div className="row align-items-start">
                  <div className="col-sm-auto col-2 text-center">
                    <i className="icofont-wall-clock icofont-2x"></i>
                  </div>
                  <div className="col pl-0">
                    <h5 className="mb-3 h5-xs fw-6">OPENING HOURS</h5>
                    <div className="text">
                      Saturday - Wednesday 10.00 - 19.00
                      <br />
                      Thurseday 10.00 - 17.00
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-3 col-sm-6">
                <div className="row align-items-start">
                  <div className="col-sm-auto col-2 text-center">
                    <i className="icofont-phone icofont-2x"></i>
                  </div>
                  <div className="col pl-0">
                    <h5 className="mb-3 h5-xs fw-6">CALL US ANYTIME</h5>
                    <div className="text">
                      +8801736 404419 <br />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-100 d-none d-sm-block d-lg-none spacer-60"></div>

              <div className="col-12 col-lg-3 col-sm-6">
                <div className="row align-items-start">
                  <div className="col-sm-auto col-2 text-center">
                    <i className="icofont-envelope icofont-2x"></i>
                  </div>
                  <div className="col pl-0">
                    <h5 className="mb-3 h5-xs fw-6">EMAIL US</h5>
                    <div className="text">
                      <Link to="#" className="link-light">
                        info@algcargos.com
                      </Link>
                      <br />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-3 col-sm-6">
                <div className="row align-items-start">
                  <div className="col-sm-auto col-2 text-center">
                    <i className="icofont-envelope-open icofont-2x"></i>
                  </div>
                  <div className="col pl-0">
                    <h5 className="mb-3 h5-xs fw-6">Subscribe to Newsletter</h5>
                    <div className="text">
                      <Link to="#" className="btn-theme bg-sky-blue light tra">
                        Get Started Now!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white wide-tb-100">
          <div className="container pos-rel">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <p>
                  <img src="images/years_img.png" alt="" className="mb-5" />
                </p>
                <p>
                  The Cargo Company was established in 2016 to supply customers
                  and trading partners with a cost effective, reliable range of
                  international logistics services.
                </p>
                <p>
                  we have completed over 4 years in the shipping industry and
                  this experience has helped us build a reputation as
                  professional, reliable and efficient company.
                </p>
                <div className="img-icon mt-4 d-flex align-items-center">
                  <h3>ALG Cargos And Logistics Ltd</h3>
                </div>
              </div>

              <div className="w-100 spacer-50 d-none d-md-block d-lg-none d-sm-none"></div>
              <div className="col-md-12 col-lg-6">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="icon-box-6">
                      <i className="icofont-box"></i>
                      <h3 className="h3-xs txt-blue">Packaging and Storage</h3>
                      <p>
                        We package and store your products with good care in our
                        warehouses.
                      </p>
                      <Link to="#" className="btn-arrow bg-navy-blue">
                        <i className="icofont-swoosh-right"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="icon-box-6">
                      <i className="icofont-safety"></i>
                      <h3 className="h3-xs txt-blue">Safety & Quality</h3>
                      <p>
                        Our team members ensures the safety and quality of your
                        products.
                      </p>
                      <Link to="#" className="btn-arrow bg-navy-blue">
                        <i className="icofont-swoosh-right"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="w-100 spacer-50 d-none d-lg-none d-md-block d-lg-block d-sm-none"></div>

                  <div className="col-12 col-md-6">
                    <div className="icon-box-6">
                      <i className="icofont-tree-alt"></i>
                      <h3 className="h3-xs txt-blue">Care for Grow</h3>
                      <p>
                        We care for you. So that you can grow your
                        buisness,start up and any kind of services.
                      </p>
                      <Link to="#" className="btn-arrow bg-navy-blue">
                        <i className="icofont-swoosh-right"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="icon-box-6">
                      <i className="icofont-delivery-time"></i>
                      <h3 className="h3-xs txt-blue">Delivery On Time</h3>
                      <p>
                        The fastest delivery service is only available with Alg
                        in Bangladesh.
                      </p>
                      <Link to="#" className="btn-arrow bg-navy-blue">
                        <i className="icofont-swoosh-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light-gray wide-tb-100 bg-wave">
          <div className="container pos-rel">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="images/about_img_2.png"
                  className="bordered-img"
                  alt=""
                />
              </div>

              <div className="col-md-6 ml-auto why-choose">
                <h1 className="heading-main text-left">
                  <span>ABOUT US</span>
                  Welcome To ALG Family
                </h1>

                <p>
                  The Cargo Company was established in 2016 to supply customers
                  and trading partners with a cost effective, reliable range of
                  international logistics services. Today we have completed over
                  4 years in the shipping industry and this experience has
                  helped us build a reputation as professional, reliable and
                  efficient company. We have been immensely blessed by support
                  from our customers which has spelled our success story. We are
                  today one of the fastest growing logistics providers in
                  Bangladesh with a strong agency network all around the
                  world...
                  <span
                    style={{
                      color: "orange",
                      fontSize: "130%",
                      padding: "3px",
                    }}
                  >
                    <Link to="/about" style={{ color: "#fe8704" }}>
                      view more
                    </Link>
                  </span>
                </p>

                <div className="skillbar-wrap mt-5">
                  <div className="clearfix">Logistics</div>
                  <div className="skillbar" data-percent="95%">
                    <div className="skillbar-percent">95%</div>
                    <div className="skillbar-bar"></div>
                  </div>
                </div>
                <div className="skillbar-wrap">
                  <div className="clearfix">Courier</div>
                  <div className="skillbar" data-percent="95%">
                    <div className="skillbar-percent">95%</div>
                    <div className="skillbar-bar"></div>
                  </div>
                </div>
                <div className="skillbar-wrap">
                  <div className="clearfix">Air Transport</div>
                  <div className="skillbar" data-percent="90%">
                    <div className="skillbar-percent">90%</div>
                    <div className="skillbar-bar"></div>
                  </div>
                </div>
                <div className="skillbar-wrap">
                  <div className="clearfix">Truck Rental</div>
                  <div className="skillbar" data-percent="60%">
                    <div className="skillbar-percent">60%</div>
                    <div className="skillbar-bar"></div>
                  </div>
                </div>
                <div className="skillbar-wrap">
                  <div className="clearfix">Support</div>
                  <div className="skillbar" data-percent="100%">
                    <div className="skillbar-percent">100%</div>
                    <div className="skillbar-bar"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-sky-blue wide-tb-100 pb-5 why-choose">
          <div className="container pos-rel">
            <div className="contact-map-bg">
              <img src="images/map-bg.png" alt="" />
            </div>
            <div className="row piecharts" id="pie-charts">
              <div className="col-sm-12 ">
                <h1 className="heading-main">
                  <span>Looking for more?</span>
                  Watch Our Intro Video
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="wide-tb-60 p-0 bg-sky-blue">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                <div className="bg-fixed pos-rel video-popup">
                  <div className="bg-overlay black opacity-50"></div>
                  <div className="zindex-fixed pos-rel">
                    <a href="#" className="play-video">
                      <i className="icofont-play icofont-4x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white wide-tb-100">
          <div className="container pos-rel" style={{ paddingTop: "4rem" }}>
            <div className="row">
              <div className="img-business-man">
                <img src="images/courier-man.png" alt="" />
              </div>
              <div className="col-sm-12">
                <h1 className="heading-main">
                  <span>Our Goodness</span>
                  What Makes Us Special
                </h1>
              </div>
              <div className="col-md-6 ml-auto">
                <div className="row">
                  <div className="col-12 ">
                    <div className="icon-box-3 mb-5 bg-sky-blue">
                      <div className="media">
                        <div className="service-icon mr-5">
                          <i className="icofont-box bg-white"></i>
                        </div>
                        <div className="service-inner-content media-body">
                          <h4 className="h4-md">Safe & Secure</h4>
                          <p>
                            You benefit from our experience in delivering
                            effective solutions to the complex global supply
                            chains of some of the world’s biggest corporations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 ">
                    <div className="icon-box-3 mb-5 bg-sky-blue">
                      <div className="media">
                        <div className="service-icon mr-5">
                          <i className="icofont-shield bg-white"></i>
                        </div>
                        <div className="service-inner-content media-body">
                          <h4 className="h4-md">Fast Delivery</h4>
                          <p>
                            You benefit from every innovation, whether it
                            involves a simple extension to our Air and Ocean
                            Freight products, whether it means a development in
                            warehousing.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 ">
                    <div className="icon-box-3 bg-sky-blue">
                      <div className="media">
                        <div className="service-icon mr-5">
                          <i className="icofont-tree-alt bg-white"></i>
                        </div>
                        <div className="service-inner-content media-body">
                          <h4 className="h4-md">24/7 Support</h4>
                          <p>
                            All of which explains why you’ll find the team of
                            outstanding support at Keas Logistics ready to apply
                            their passion for solutions in support of your
                            business.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wide-tb-100">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="heading-main">
                  <span>What Our</span>
                  Customers Saying
                </h1>
              </div>
              <div className="col-sm-12">
                <div
                  className="owl-carousel owl-theme"
                  id="home-client-testimonials"
                >
                  <div className="item">
                    <div className="client-testimonial bg-wave">
                      <div className="media">
                        <div className="client-testimonial-icon rounded-circle bg-navy-blue">
                          <img src="images/team_1.jpg" alt="" />
                        </div>
                        <div className="client-inner-content media-body">
                          <p>
                            Absolutely brilliant service.Goods delivered on time
                            and at a competitive price.
                          </p>
                          <footer className="blockquote-footer">
                            <cite title="Source Title">Md Rohol Amin</cite>
                          </footer>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="client-testimonial bg-wave">
                      <div className="media">
                        <div className="client-testimonial-icon rounded-circle bg-navy-blue">
                          <img src="images/team_2.jpg" alt="" />
                        </div>
                        <div className="client-inner-content media-body">
                          <p>
                            Professional, friendly and reliable; nothing is too
                            much trouble for ALG Cargos.
                          </p>
                          <footer className="blockquote-footer">
                            <cite title="Source Title">Nazmul Haque</cite>
                          </footer>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="client-testimonial bg-wave">
                      <div className="media">
                        <div className="client-testimonial-icon rounded-circle bg-navy-blue">
                          <img src="images/team_3.jpg" alt="" />
                        </div>
                        <div className="client-inner-content media-body">
                          <p>
                            I was really impressed with your brilliant service.
                            Everything was arranged in record time, and you kept
                            me informed throughout. Thank you so much.
                          </p>
                          <footer className="blockquote-footer">
                            <cite title="Source Title">Md Arif Miah</cite>
                          </footer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wide-tb-80 bg-navy-blue callout-style-1 ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12 mb-0">
                <h4 className="h4-xl">Interested in working with ALG?</h4>
              </div>
              <div className="col">
                <div className="center-text">
                  We don’t just manage suppliers, we micro-manage them. We have
                  a consultative, personalized approach
                </div>
              </div>
              <div className="col-sm-auto">
                <Link to="#" className="btn-theme bg-white light">
                  Get In Touch <i className="icofont-rounded-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="wide-tb-100">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="heading-main">
                  <span>COMPANY'S NEWS</span>
                  Recent Posts
                </h1>
              </div>

              <div className="col-sm-12 col-md-4 ">
                <div className="blog-warp">
                  <img src="images/blog_img_1.jpg" alt="" className="rounded" />
                  <div className="meta-box">
                    <a href="#">Business</a> <span>/</span> September 28, 2018
                  </div>
                  <h4 className="h4-md mb-3">
                    <a href="#">Freight Payment and Auditing Services</a>
                  </h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantiumg
                  </p>
                </div>
              </div>

              <div className="col-sm-12 col-md-4 ">
                <div className="blog-warp">
                  <img src="images/blog_img_2.jpg" alt="" className="rounded" />
                  <div className="meta-box">
                    <a href="#">Business</a> <span>/</span> September 28, 2018
                  </div>
                  <h4 className="h4-md mb-3">
                    <a href="#">Freight Payment and Auditing Services</a>
                  </h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantiumg
                  </p>
                </div>
              </div>

              <div className="col-sm-12 col-md-4 ">
                <div className="blog-warp">
                  <img src="images/blog_img_3.jpg" alt="" className="rounded" />
                  <div className="meta-box">
                    <a href="#">Business</a> <span>/</span> September 28, 2018
                  </div>
                  <h4 className="h4-md mb-3">
                    <a href="#">Freight Payment and Auditing Services</a>
                  </h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantiumg
                  </p>
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

        {/* <section className="map-bg">
          <div className="contact-details row d-flex">
            <div className="col">
              <h4>Germany</h4>
              <p>
                <i className="icofont-phone"></i> +1 (408) 786 - 5117
              </p>
              <div className="text-nowrap">
                <i className="icofont-email"></i>
                <a href="#">info@algcargos.com</a>
              </div>
            </div>
            <div className="col">
              <h4>Spain</h4>
              <p>
                <i className="icofont-phone"></i> +1 (408) 786 - 5117
              </p>
              <div className="text-nowrap">
                <i className="icofont-email"></i>{" "}
                <a href="#">spain@logzee.com</a>
              </div>
            </div>
          </div>
          <div id="map-holder" className="pos-rel">
            <div id="map_extended">
              <p>This will be replaced with the Google Map.</p>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
};
export default Content;
