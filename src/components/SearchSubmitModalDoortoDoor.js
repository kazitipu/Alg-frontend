import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { setBookingRequestRedux } from "./../actions/index";
class SearchSubmitModalDoortoDoor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      ctnQuantity: "",
      ctnHeight: "",
      ctnWidth: "",
      ctnLength: "",
      productContains: "",
      productBrand: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    if (this.props.currentUser.displayName === "") {
      alert("Please log in to your account to request a booking");
      document.getElementById("modal-close-icon-door-to-door").click();
      return;
    } else {
      await this.props.setBookingRequestRedux({
        userId: this.props.currentUser.uid,
        ...this.state,
        ...this.props.result,
      });
      toast.success(
        "your booking request is successful. Our agent will confirm your booking soon"
      );
      document.getElementById("modal-close-icon-door-to-door").click();
    }
    this.setState({
      date: "",
      ctnQuantity: "",
      ctnHeight: "",
      ctnWidth: "",
      ctnLength: "",
      productContains: "",
      productBrand: "",
    });
  };
  render() {
    return (
      <>
        <div
          className="modal fade"
          id="request_search_submit_popup_door_to_door"
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
                      id="modal-close-icon-door-to-door"
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
                        style={{ padding: "10px", backgroundColor: "#4e014e" }}
                      >
                        <div
                          className="row mt-4 mb-4"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            fontSize: "150%",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          Approximate shipping cost:
                        </div>
                        {this.props.searchType === "express" ? (
                          <>
                            <div
                              className="row mt-2"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                paddingLeft: "25%",
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "140%",
                                  color: "white",
                                }}
                              >
                                Parcel Type: &nbsp;
                              </div>
                              <div
                                style={{
                                  fontSize: "140%",
                                  color: "white",
                                  fontWeight: "bold",
                                }}
                              >
                                {this.props.result.parcelType}
                              </div>
                            </div>
                            <div
                              className="row mt-2"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                paddingLeft: "25%",
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "140%",
                                  color: "white",
                                }}
                              >
                                Product Name: &nbsp;
                              </div>
                              <div
                                style={{
                                  fontSize: "140%",
                                  color: "white",
                                  fontWeight: "bold",
                                }}
                              >
                                {this.props.result.productName}
                              </div>
                            </div>
                            <div
                              className="row mt-2"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                paddingLeft: "25%",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",

                                  fontSize: "140%",
                                  color: "white",
                                }}
                              >
                                Parcel To: &nbsp;
                              </div>
                              <div
                                style={{
                                  fontSize: "140%",
                                  color: "white",
                                  fontWeight: "bold",
                                }}
                              >
                                {this.props.result.parcelTo}
                              </div>
                            </div>
                            <div
                              className="row mt-2"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                paddingLeft: "25%",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",

                                  fontSize: "140%",
                                  color: "white",
                                }}
                              >
                                Parcel Box: &nbsp;
                              </div>
                              <div
                                style={{
                                  fontSize: "140%",
                                  color: "white",
                                  fontWeight: "bold",
                                }}
                              >
                                {this.props.result.parcelBox} kg
                              </div>
                            </div>
                            <div className="row ">
                              <div className="col">
                                <div
                                  className="center-head"
                                  style={{ margin: "0px" }}
                                >
                                  <span className="bg-light-gray txt-orange"></span>
                                </div>
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "200%",
                                  color: "white",
                                  fontWeight: "bold",
                                }}
                              >
                                Total
                              </div>
                              <div
                                style={{
                                  fontSize: "250%",
                                  color: "white",
                                  fontWeight: "bold",
                                }}
                              >
                                {this.props.result.total}Tk
                              </div>
                            </div>
                            <div
                              className="row mt-2"
                              style={{
                                color: "white",
                                fontFamily: "sans-serif",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              (IF 1 CBM= 167kg)
                            </div>
                            <div
                              className="row"
                              style={{
                                color: "orange",
                                fontFamily: "sans-serif",
                                display: "flex",
                                justifyContent: "center",
                                padding: "30px 15px 0px 15px",
                              }}
                            >
                              **This total is calculated based on your choosed
                              destination country,parcel type and parcel box.
                              And it may change according to market rate if you
                              book later.
                            </div>
                          </>
                        ) : (
                          <>
                            <div
                              className="row mt-2"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "140%",
                                  color: "white",
                                }}
                              >
                                Ship By
                              </div>
                              <div
                                style={{
                                  fontSize: "140%",
                                  color: "white",
                                  fontWeight: "bold",
                                }}
                              >
                                {this.props.result
                                  ? this.props.result.shipBy
                                  : ""}
                              </div>
                            </div>
                            <div
                              className="row mt-2"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "140%",
                                  color: "white",
                                }}
                              >
                                Ship From
                              </div>
                              <div
                                style={{
                                  fontSize: "140%",
                                  color: "white",
                                  fontWeight: "bold",
                                }}
                              >
                                {this.props.result
                                  ? this.props.result.shipFrom
                                  : ""}
                              </div>
                            </div>
                            <div
                              className="row mt-2"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "140%",
                                  color: "white",
                                }}
                              >
                                Product Type
                              </div>
                              <div
                                style={{
                                  fontSize: "140%",
                                  color: "white",
                                  fontWeight: "bold",
                                }}
                              >
                                {this.props.result
                                  ? this.props.result.productType
                                  : ""}
                              </div>
                            </div>
                            <div
                              className="row mt-2"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "140%",
                                  color: "white",
                                }}
                              >
                                Per kg
                              </div>
                              <div
                                style={{
                                  fontSize: "140%",
                                  color: "white",
                                  fontWeight: "bold",
                                }}
                              >
                                {this.props.result
                                  ? this.props.result.perKg
                                  : ""}
                                tk/kg
                              </div>
                            </div>
                            <div
                              className="row mt-2"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",

                                  fontSize: "140%",
                                  color: "white",
                                }}
                              >
                                Total weight{" "}
                              </div>
                              <div
                                style={{
                                  fontSize: "140%",
                                  color: "white",
                                  fontWeight: "bold",
                                }}
                              >
                                {this.props.result
                                  ? this.props.result.weight
                                  : ""}{" "}
                                kg
                              </div>
                            </div>
                            <div className="row ">
                              <div className="col">
                                <div
                                  className="center-head"
                                  style={{ margin: "0px" }}
                                >
                                  <span className="bg-light-gray txt-orange"></span>
                                </div>
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "200%",
                                  color: "white",
                                  fontWeight: "bold",
                                }}
                              >
                                Total
                              </div>
                              <div
                                style={{
                                  fontSize: "250%",
                                  color: "white",
                                  fontWeight: "bold",
                                }}
                              >
                                {this.props.result
                                  ? this.props.result.result
                                  : ""}
                                Tk
                              </div>
                            </div>
                            <div
                              className="row mt-2"
                              style={{
                                color: "white",
                                fontFamily: "sans-serif",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              (IF 1 CBM= 167kg)
                            </div>
                            <div
                              className="row"
                              style={{
                                color: "orange",
                                fontFamily: "sans-serif",
                                display: "flex",
                                justifyContent: "center",
                                padding: "30px 15px 0px 15px",
                              }}
                            >
                              **Below 1 kg the parcel is considered equiavalent
                              to 1kg.In that case you have to pay similar to
                              1kg.
                            </div>
                          </>
                        )}

                        <div className="row mt-3">
                          <div className="col">
                            <div
                              className="center-head"
                              style={{ marginBottom: "0px" }}
                            >
                              <span
                                className="bg-light-gray txt-orange"
                                style={{ textTransform: "none" }}
                              >
                                We are connnected to
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-3 sea-logos-row">
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage: "url(../images/air-logos/1.png)",
                              marginLeft: "0px",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage: "url(../images/air-logos/2.png)",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage: "url(../images/air-logos/3.png)",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage: "url(../images/air-logos/4.png)",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage: "url(../images/air-logos/5.png)",
                            }}
                          ></div>
                        </div>
                        <div className="row mt-1 sea-logos-row">
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage: "url(../images/air-logos/6.png)",
                              marginLeft: "0px",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage: "url(../images/air-logos/7.png)",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage: "url(../images/air-logos/8.png)",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage: "url(../images/air-logos/9.png)",
                            }}
                          ></div>
                          <div
                            className="col sea-logo-container"
                            style={{
                              backgroundImage:
                                "url(../images/air-logos/10.png)",
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
                            onSubmit={this.handleSubmit}
                            // noValidate="noValidate"
                            className="rounded-field"
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
                            <div className="form-row mb-1">Select Date:</div>
                            <div className="form-row mb-2">
                              <div className="col">
                                <input
                                  type="date"
                                  name="date"
                                  onChange={this.handleChange}
                                  value={this.state.date}
                                  className="form-control"
                                  placeholder="approx date"
                                  style={{
                                    borderRadius: "10rem",
                                    width: "60%",
                                  }}
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-row mb-1">
                              Carton quantity:
                            </div>
                            <div className="form-row mb-2">
                              <div className="col">
                                <input
                                  style={{
                                    borderRadius: "10rem",
                                    width: "60%",
                                  }}
                                  type="number"
                                  name="ctnQuantity"
                                  value={this.state.ctnQuantity}
                                  onChange={this.handleChange}
                                  className="form-control"
                                  placeholder="quantity"
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-row mb-1">Carton Size:</div>
                            <div className="form-row mb-2">
                              <div className="col">
                                <input
                                  type="number"
                                  name="ctnHeight"
                                  value={this.state.ctnHeight}
                                  onChange={this.handleChange}
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
                                  type="number"
                                  name="ctnWidth"
                                  value={this.state.ctnWidth}
                                  onChange={this.handleChange}
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
                                  type="number"
                                  name="ctnLength"
                                  value={this.state.ctnLength}
                                  onChange={this.handleChange}
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
                                  padding: "0px 10px",
                                  backgroundColor: "white",
                                  border: "1px solid lightgray",
                                  borderRadius: "10rem",
                                }}
                              >
                                {(this.state.ctnHeight *
                                  this.state.ctnWidth *
                                  this.state.ctnLength) /
                                  1000000}
                                CBM
                              </div>
                            </div>

                            <div className="form-row mt-3">
                              <div className="col">
                                <div
                                  className="center-head"
                                  style={{ marginBottom: "10px" }}
                                >
                                  <span className="bg-light-gray txt-orange">
                                    Product information
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                              }}
                            >
                              <div>
                                <div className="form-row mb-1">
                                  Product contains:
                                </div>
                                <div className="form-row">
                                  <select
                                    className="custom-select"
                                    name="productContains"
                                    value={this.state.productContains}
                                    onChange={this.handleChange}
                                    required
                                  >
                                    <option value="liquid">liquid</option>
                                    <option value="chemical">chemical</option>
                                    <option value="battery">battery</option>
                                    <option value="none">none</option>
                                  </select>
                                </div>
                              </div>
                              <div>
                                <div className="form-row mb-1">
                                  Brand/non-brand
                                </div>
                                <select
                                  name="productBrand"
                                  value={this.state.productBrand}
                                  onChange={this.handleChange}
                                  required
                                  className="custom-select"
                                >
                                  <option value="Brand">Brand</option>
                                  <option value="Non Brand">Non Brand</option>
                                </select>
                              </div>
                            </div>
                            <div
                              className="row mt-5"
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <button
                                className="btn"
                                type="submit"
                                style={{
                                  background: "purple",
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
const mapStateToProps = (state) => {
  return {
    result: state.result.result,
    searchType: state.result.searchType,
    currentUser: state.currentUser.currentUser,
  };
};
export default connect(mapStateToProps, { setBookingRequestRedux })(
  SearchSubmitModalDoortoDoor
);
