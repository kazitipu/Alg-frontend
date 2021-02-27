import React, { Component } from "react";

class SearchSubmitModalFreight extends Component {
  render() {
    return (
      <>
        <div
          className="modal fade"
          id="request_search_submit_popup_freight"
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
                          Choose your preferred shipping line
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
                        <div className="px-3 m-4">
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
                            className="rounded-field freight-modal-form"
                          >
                            <div className="form-row mb-4">
                              <div className="col">
                                Having trouble?
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
                                <div className="form-row mb-1">
                                  Product type:
                                </div>
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  placeholder="enter product name"
                                />
                              </div>
                              <div className="col">
                                <div className="form-row mb-1">
                                  Product Weight:
                                </div>
                                <div className="form-row">
                                  <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="product weight (kg)"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-row mb-1">Total Carton:</div>
                            <div className="form-row">
                              <div className="col">
                                <input
                                  style={{
                                    borderRadius: "10rem",
                                    fontSize: "90%",
                                    padding: "20px",
                                  }}
                                  type="number"
                                  name="name"
                                  className="form-control"
                                  placeholder="carton quantity"
                                />
                              </div>
                            </div>
                            <div className="form-row mb-1">Carton Size:</div>
                            <div className="form-row mb-2">
                              <div className="col">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  placeholder="height (cm)"
                                  style={{
                                    borderRadius: "10rem",
                                  }}
                                />
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                }}
                              >
                                X
                              </div>
                              <div className="col">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  placeholder="width (cm)"
                                  style={{
                                    borderRadius: "10rem",
                                  }}
                                />
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                }}
                              >
                                X
                              </div>
                              <div className="col">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  placeholder="length (cm)"
                                  style={{
                                    borderRadius: "10rem",
                                  }}
                                />
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                }}
                              >
                                =
                              </div>
                              <div
                                style={{
                                  color: "orange",
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  padding: "10px",
                                  backgroundColor: "white",
                                  border: "1px solid lightgray",
                                  borderRadius: "10rem",
                                  marginLeft: "5px",
                                }}
                              >
                                3 CBM
                              </div>
                            </div>
                            <div className="form-row mb-2">
                              <div className="col">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  placeholder="chargeable weight (kg)"
                                />
                              </div>
                            </div>

                            <div className="row mt-3">
                              <div className="col">
                                <div
                                  className="center-head"
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "0px",
                                  }}
                                >
                                  <span
                                    className="bg-light-gray txt-orange"
                                    style={{
                                      fontSize: "130%",
                                      fontWeight: "bold",
                                      marginBottom: "0px",
                                      padding: "0px",
                                    }}
                                  >
                                    <i
                                      className="icofont-truck-loaded"
                                      style={{
                                        fontSize: "100%",
                                        border: "1px solid gainsboro",
                                        borderRadius: "10rem",
                                        padding: "5px",
                                      }}
                                    ></i>
                                  </span>
                                  <span
                                    className="bg-light-gray txt-orange"
                                    style={{
                                      fontSize: "130%",
                                      fontWeight: "bold",
                                      marginBottom: "0px",
                                      padding: "0px",
                                    }}
                                  >
                                    <i
                                      className="icofont-industries-5"
                                      style={{
                                        fontSize: "100%",
                                        border: "1px solid gainsboro",
                                        borderRadius: "10rem",
                                        padding: "5px",
                                      }}
                                    ></i>
                                  </span>
                                  <span
                                    className="bg-light-gray txt-orange"
                                    style={{
                                      fontSize: "130%",
                                      fontWeight: "bold",
                                      marginBottom: "0px",
                                      padding: "0px",
                                    }}
                                  >
                                    <i
                                      className="icofont-industries-2"
                                      style={{
                                        fontSize: "100%",
                                        border: "1px solid gainsboro",
                                        borderRadius: "10rem",
                                        padding: "5px",
                                      }}
                                    ></i>
                                  </span>
                                  <span
                                    className="bg-light-gray txt-orange"
                                    style={{
                                      fontSize: "130%",
                                      fontWeight: "bold",
                                      marginBottom: "0px",
                                      padding: "0px",
                                    }}
                                  >
                                    <i
                                      className="icofont-truck-alt"
                                      style={{
                                        fontSize: "100%",
                                        border: "1px solid gainsboro",
                                        borderRadius: "10rem",
                                        padding: "5px",
                                      }}
                                    ></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginTop: "5px",
                                    color: "white",
                                    marginBottom: "20px",
                                  }}
                                >
                                  <span
                                    className="bg-light-gray txt-orange"
                                    style={{
                                      fontSize: "70%",
                                      marginBottom: "0px",
                                      padding: "0px",
                                      color: "gray",
                                    }}
                                  >
                                    pick up
                                  </span>
                                  <span
                                    className="bg-light-gray txt-orange"
                                    style={{
                                      fontSize: "70%",
                                      marginBottom: "0px",
                                      padding: "0px",
                                      color: "gray",
                                    }}
                                  >
                                    port of origin
                                  </span>
                                  <span
                                    className="bg-light-gray txt-orange"
                                    style={{
                                      fontSize: "70%",
                                      marginBottom: "0px",
                                      padding: "0px",
                                      color: "gray",
                                    }}
                                  >
                                    port of discharge
                                  </span>
                                  <span
                                    className="bg-light-gray txt-orange"
                                    style={{
                                      fontSize: "70%",
                                      marginBottom: "0px",
                                      padding: "0px",
                                      color: "gray",
                                    }}
                                  >
                                    delivery
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div
                              className="form-row mb-4"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                              }}
                            >
                              <div className="colo">
                                <div className="form-row">
                                  <span style={{ marginRight: "5px" }}>
                                    <i className="icofont-square"></i>
                                  </span>
                                  Liquid
                                </div>
                                <div className="form-row">
                                  <span style={{ marginRight: "5px" }}>
                                    <i className="icofont-square"></i>
                                  </span>
                                  Battery
                                </div>
                                <div className="form-row">
                                  <span style={{ marginRight: "5px" }}>
                                    <i className="icofont-tick-boxed"></i>
                                  </span>
                                  Chemical
                                </div>
                                <div className="form-row">
                                  <span style={{ marginRight: "5px" }}>
                                    <i className="icofont-square"></i>
                                  </span>
                                  None
                                </div>
                              </div>
                              <div className="colo">
                                <div className="form-row">
                                  <span style={{ marginRight: "5px" }}>
                                    <i className="icofont-square"></i>
                                  </span>
                                  Brand
                                </div>
                                <div className="form-row">
                                  <span style={{ marginRight: "5px" }}>
                                    <i className="icofont-tick-boxed"></i>
                                  </span>
                                  Non Brand
                                </div>
                              </div>
                            </div>
                            <div
                              className="row mt-3"
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <button
                                className="btn"
                                style={{
                                  background: "#0000de",
                                  color: "white",
                                  padding: "13px",
                                  borderRadius: "1rem",
                                }}
                              >
                                Book now
                              </button>
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
export default SearchSubmitModalFreight;
