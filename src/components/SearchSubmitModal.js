import React, { Component } from "react";

class SearchSubmitModal extends Component {
  render() {
    return (
      <>
        <div
          className="modal fade"
          id="request_search_submit_popup"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered request_popup"
            role="document"
          >
            <div className="modal-content search-submit-modal">
              <div className="modal-body p-0">
                <section className="pos-rel bg-light-gray">
                  <div className="container-fluid p-0">
                    <a
                      href="#"
                      className="close search-submit-modal-close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <i
                        className="icofont-close-line"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                    <div
                      className="d-lg-flex justify-content-end no-gutters mb-spacer-md"
                      style={{
                        boxShadow: "0px 18px 76px 0px rgba(0, 0, 0, 0.06)",
                      }}
                    >
                      <div
                        className="col"
                        style={{ padding: "10px", backgroundColor: "darkblue" }}
                      >
                        <div className="row mt-5 search-submit-modal-header-1">
                          Our preferred
                        </div>
                        <div className="row mt-3">
                          <div className="col">
                            <div className="center-head">
                              <span className="bg-light-gray txt-orange">
                                (Shipping line)
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-3 sea-logos-row">
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage: "url(../images/sea-logos/1.png)",
                              marginLeft: "0px",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage: "url(../images/sea-logos/2.png)",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage: "url(../images/sea-logos/3.png)",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage: "url(../images/sea-logos/4.png)",
                              border: "2px solid red",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage: "url(../images/sea-logos/5.png)",
                            }}
                          ></div>
                        </div>
                        <div className="row mt-1 sea-logos-row">
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage: "url(../images/sea-logos/6.png)",
                              marginLeft: "0px",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage: "url(../images/sea-logos/7.png)",
                              border: "2px solid red",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage: "url(../images/sea-logos/8.png)",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage: "url(../images/sea-logos/9.png)",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage:
                                "url(../images/sea-logos/10.png)",
                              border: "2px solid red",
                            }}
                          ></div>
                        </div>
                        <div className="row mt-1 sea-logos-row">
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage:
                                "url(../images/sea-logos/11.png)",
                              marginLeft: "0px",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage:
                                "url(../images/sea-logos/12.png)",
                              border: "2px solid red",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage:
                                "url(../images/sea-logos/13.png)",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage:
                                "url(../images/sea-logos/14.png)",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage:
                                "url(../images/sea-logos/15.png)",
                              border: "2px solid red",
                            }}
                          ></div>
                        </div>
                        <div className="row mt-1 sea-logos-row">
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage:
                                "url(../images/sea-logos/16.png)",
                              marginLeft: "0px",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage:
                                "url(../images/sea-logos/17.png)",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage:
                                "url(../images/sea-logos/18.png)",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage:
                                "url(../images/sea-logos/19.png)",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage:
                                "url(../images/sea-logos/20.png)",
                            }}
                          ></div>
                        </div>
                        <div className="row mt-3">
                          <div className="col">
                            <div className="center-head">
                              <span
                                className="bg-light-gray txt-orange"
                                style={{
                                  fontSize: "130%",
                                  fontWeight: "bold",
                                  marginBottom: "0px",
                                }}
                              >
                                You choosed
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-4 sea-logos-row">
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage: "url(../images/sea-logos/4.png)",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage: "url(../images/sea-logos/7.png)",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage:
                                "url(../images/sea-logos/10.png)",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage:
                                "url(../images/sea-logos/12.png)",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage:
                                "url(../images/sea-logos/15.png)",
                            }}
                          ></div>
                        </div>
                      </div>

                      <div className="col-md-7 col-12">
                        <div className="px-3 m-5">
                          <h2
                            className="h2-xl fw-6"
                            style={{
                              color: "orange",
                              fontSize: "140%",
                              fontWeight: "bolder",
                            }}
                          >
                            Detail information
                          </h2>
                          <form
                            action="#"
                            method="post"
                            noValidate="novalidate"
                            className="rounded-field"
                          >
                            <div className="form-row mb-4">
                              <div className="col">
                                Don't know the procedure?
                                <span
                                  style={{
                                    color: "purple",
                                    marginLeft: "2px",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                  }}
                                >
                                  &nbsp; contact support
                                </span>
                              </div>
                            </div>
                            <div className="form-row mb-2">
                              <div className="col">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  placeholder="Enter your Email"
                                />
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="col">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  placeholder="Enter your Password"
                                />
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="col pt-2">
                                <button
                                  type="submit"
                                  className="form-btn btn-theme bg-orange"
                                >
                                  Sign in
                                  <i className="icofont-rounded-right"></i>
                                </button>
                              </div>
                            </div>

                            <div className="form-row mt-3">
                              <div className="col">
                                <div className="center-head">
                                  <span className="bg-light-gray txt-orange">
                                    Or
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="form-row mb-4">
                              <div className="col">
                                <div
                                  className="mobile-sign-in"
                                  data-dismiss="modal"
                                  data-toggle="modal"
                                  data-target="#request_phone_popup"
                                >
                                  <span>
                                    <i className="icofont-iphone"></i>
                                  </span>
                                  Sign in with Phone
                                </div>
                                <div className="facebook-sign-in">
                                  <span>
                                    <i className="icofont-facebook"></i>
                                  </span>
                                  Sign in with Facebook
                                </div>
                                <div
                                  className="google-sign-in"
                                  data-dismiss="modal"
                                >
                                  <span>
                                    <i className="icofont-google-plus"></i>
                                  </span>
                                  Sign in with Google
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default SearchSubmitModal;
