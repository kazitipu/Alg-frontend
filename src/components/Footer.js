import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      {/* footer start */}
      <footer className="wide-tb-70 bg-light-gray pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 ">
              <div className="logo-footer">
                <img
                  src="images/alg-header-logo.png"
                  alt=""
                  style={{ maxWidth: "60%" }}
                />
              </div>
              <p>
                The Cargo Company was established in 2016 to supply customers
                and trading partners with a cost effective, reliable range of
                international logistics services.
              </p>
              <p>
                we have completed over 4 years in the shipping industry and this
                experience has helped us build a reputation as professional,
                reliable and efficient company.
              </p>

              <h3 className="footer-heading">We're Social</h3>
              <div className="social-icons">
                <a href="https://www.facebook.com/algcargo" target="_blank">
                  <i className="icofont-facebook"></i>
                </a>
                <Link to={`${process.env.PUBLIC_URL}/`}>
                  <i className="icofont-twitter"></i>
                </Link>
                <Link to={`${process.env.PUBLIC_URL}/`}>
                  <i className="icofont-whatsapp"></i>
                </Link>
                <Link to={`${process.env.PUBLIC_URL}/`}>
                  <i className="icofont-google-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 ">
              <h3 className="footer-heading">Recent Post</h3>
              <div className="blog-list-footer">
                <ul className="list-unstyled">
                  <li>
                    <div className="media">
                      <div className="post-thumb">
                        <img
                          src="images/post_thumb_1.jpg"
                          alt=""
                          className="rounded-circle"
                        />
                      </div>
                      <div className="media-body post-text">
                        <h5 className="mb-3 h5-md">
                          <Link to={`${process.env.PUBLIC_URL}/`}>
                            Liberalisation of air cargo
                          </Link>
                        </h5>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries.
                        </p>

                        <div className="comment-box">
                          <span>
                            <i className="icofont-ui-calendar"></i> 04.10.2013
                          </span>
                          <span>
                            <Link to={`${process.env.PUBLIC_URL}/`}>
                              <i className="icofont-speech-comments"></i> 25
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="post-thumb">
                        <img
                          src="images/post_thumb_2.jpg"
                          alt=""
                          className="rounded-circle"
                        />
                      </div>
                      <div className="media-body post-text">
                        <h5 className="mb-3 h5-md">
                          <Link to={`${process.env.PUBLIC_URL}/`}>
                            New Ocean Freight Rules
                          </Link>
                        </h5>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries.
                        </p>

                        <div className="comment-box">
                          <span>
                            <i className="icofont-ui-calendar"></i> 04.10.2013
                          </span>
                          <span>
                            <Link to={`${process.env.PUBLIC_URL}/`}>
                              <i className="icofont-speech-comments"></i> 25
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 ">
              <h3 className="footer-heading">Download App</h3>
            </div>
          </div>
        </div>

        <div className="copyright-wrap bg-navy-blue wide-tb-30">
          <div className="container">
            <div className="row text-md-left text-center">
              <div className="col-sm-12 col-md-6 copyright-links">
                <Link to={`${process.env.PUBLIC_URL}/privacy-policy`}>
                  Privacy Policy
                </Link>
                <span>|</span>
                <Link to={`${process.env.PUBLIC_URL}/contact`}>CONTACT</Link>
                <span>|</span>
                <Link to={`${process.env.PUBLIC_URL}/faqs`}>FAQS</Link>
                <span>|</span>
                <Link to={`${process.env.PUBLIC_URL}/terms-and-condition`}>
                  Terms and Condition
                </Link>
              </div>
              <div className="col-sm-12 col-md-6 text-md-right text-center">
                copyright
                <Link to={`${process.env.PUBLIC_URL}/`} rel="nofollow">
                  Algcargos.com
                </Link>
                © 2021 All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
