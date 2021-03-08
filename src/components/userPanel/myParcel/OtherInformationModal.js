import React, { Component } from "react";
import {
  auth,
  createUserProfileDocument,
} from "../../../components/firebase/firebase.utils";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import "./OtherInformationModal.css";
import { updateMyParcelArrayOfUser } from "../../../actions/index";
class OtherInformationModal extends Component {
  constructor() {
    super();

    this.state = {
      productsValue: "",
      packagingChosed: "",
      deliveryAddress: "",
      insurance: "",
      bookingId: "",
      customerDeclaredProductName: "",
      customerDeclaredQuantity: "",
      customerDeclaredTotalCbm: "",
      additionalServices: false,
      qcCheck: "",
    };
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.parcelObj) {
      this.setState({
        customerDeclaredProductName: nextProps.parcelObj.productName,
        customerDeclaredQuantity: nextProps.parcelObj.quantity,
        customerDeclaredTotalCbm: nextProps.parcelObj.totalCbm,
        deliveryAddress: nextProps.parcelObj.deliveryAddress
          ? nextProps.parcelObj.deliveryAddress
          : "ALG Office",
      });
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { parcelObj, updateMyParcelArrayOfUser } = this.props;
    await updateMyParcelArrayOfUser({
      ...parcelObj,
      ...this.state,
      editRequested: true,
      editApproved: false,
    });

    // document.getElementById("modal-close-icon-other-information").click();
  };

  componentWillUnmount = () => {
    this.setState({
      productsValue: "",
      packagingChosed: "",
      deliveryAddress: "",

      insurance: "",
      bookingId: "",
      customerDeclaredProductName: "",
      customerDeclaredQuantity: "",

      customerDeclaredTotalCbm: "",
      additionalServices: false,
      qcCheck: "",
    });
  };

  render() {
    const { parcelObj } = this.props;
    const {
      productsValue,
      packagingChosed,
      deliveryAddress,
      insurance,
      bookingId,
      customerDeclaredProductName,
      customerDeclaredQuantity,

      customerDeclaredTotalCbm,
      additionalServices,
      qcCheck,
    } = this.state;
    console.log(parcelObj);
    return (
      <>
        <div
          className="modal fade"
          id="request_other_information_popup"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered request_popup"
            role="document"
          >
            <div
              className="modal-content signup-modal"
              style={{ maxWidth: "700px" }}
            >
              <div className="modal-body p-0">
                <section className="pos-rel bg-light-gray">
                  <div className="container-fluid p-0">
                    <a
                      href="#"
                      className="close other_information_modal_close"
                      data-dismiss="modal"
                      aria-label="Close"
                      id="modal-close-icon-other-information"
                    >
                      <i className="icofont-close-line"></i>
                    </a>
                    <div
                      className="d-lg-flex justify-content-center no-gutters mb-spacer-md"
                      style={{
                        boxShadow: "0px 18px 76px 0px rgba(0, 0, 0, 0.06)",
                      }}
                    >
                      <div className="col-12">
                        <div className="px-3 m-4 ">
                          <h2
                            className="h2-xl mb-2 fw-6 sign-in-header-title other-information-header-title"
                            style={{
                              color: "orange",
                              fontSize: "140%",
                              fontWeight: "bolder",
                            }}
                          >
                            Additional Information
                          </h2>
                          <form
                            onSubmit={this.handleSubmit}
                            className="rounded-field"
                          >
                            <div className="form-row mb-4">
                              <div className="col">
                                <span
                                  className="sub-header-title"
                                  style={{
                                    color: "purple",
                                    marginLeft: "2px",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Local Delivery, Packaging, Insurace,Issues
                                </span>
                              </div>
                            </div>

                            <div className="form-row mb-3">
                              <div className="col">
                                <div className="form-row">Products Value</div>
                                <input
                                  type="text"
                                  name="productsValue"
                                  value={productsValue}
                                  className="form-control input-field-70"
                                  placeholder="Total Cost"
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>
                              <div className="col">
                                <div className="form-row">Product Name</div>
                                <input
                                  type="text"
                                  name="customerDeclaredProductName"
                                  value={customerDeclaredProductName}
                                  className="form-control input-field-70"
                                  placeholder="Enter product Name"
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-row mb-3">
                              <div className="col">
                                <div className="form-row">
                                  Products Quantity
                                </div>
                                <input
                                  type="text"
                                  name="customerDeclaredQuantity"
                                  value={customerDeclaredQuantity}
                                  className="form-control input-field-70"
                                  placeholder="Total Quantity"
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>
                              <div className="col">
                                <div className="form-row">Total CBM</div>
                                <input
                                  type="text"
                                  name="customerDeclaredTotalCbm"
                                  value={customerDeclaredTotalCbm}
                                  className="form-control input-field-70"
                                  placeholder="Total Cbm"
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>
                            </div>

                            <div
                              className="form-row my-4"
                              style={{
                                color: additionalServices
                                  ? "darkorange"
                                  : "gray",
                                fontWeight: "bold",
                                justifyContent: "center",
                              }}
                            >
                              <i
                                className={
                                  additionalServices
                                    ? "icofont-minus-circle"
                                    : "icofont-plus-circle"
                                }
                                onClick={() => {
                                  this.setState({
                                    additionalServices: !this.state
                                      .additionalServices,
                                  });
                                }}
                                style={{
                                  cursor: "pointer",
                                  color: additionalServices
                                    ? "darkorange"
                                    : "gray",
                                  fontWeight: "bold",
                                }}
                              >
                                &nbsp;Take additional services if you wish.
                              </i>
                            </div>
                            {additionalServices ? (
                              <>
                                {parcelObj.packaging ? (
                                  <>
                                    {" "}
                                    <div className="form-row my-3">
                                      <div className="col">
                                        <div className="form-row">
                                          Need Packaging
                                        </div>
                                        <input
                                          type="text"
                                          name="email"
                                          value={parcelObj.packaging}
                                          className="form-control"
                                          readOnly
                                        />
                                      </div>

                                      <div className="col">
                                        <div className="form-row">
                                          Packaging Cost
                                        </div>
                                        <input
                                          type="text"
                                          name="email"
                                          value={parcelObj.packagingCost}
                                          className="form-control"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                  </>
                                ) : null}
                                <div className="form-row">Choose Packaging</div>
                                <select
                                  // style={{ border: "0px", marginTop: "7px" }}
                                  onChange={this.handleChange}
                                  name="packagingChosed"
                                  value={packagingChosed}
                                  className="form-control input-field-70"
                                  required
                                >
                                  <option value="">Select Packaging</option>
                                  <option value="Green Bag">
                                    Green Bag (50Tk)
                                  </option>
                                  <option value="Green Bag with Polythene">
                                    Green Bag with Polythene (100Tk)
                                  </option>
                                  <option value="Wooden Box">
                                    Wooden Box (2480Tk)
                                  </option>
                                </select>
                                <div className="form-row my-3">
                                  <div className="col">
                                    <div className="form-row">Booking Id:</div>
                                    <input
                                      type="text"
                                      name="bookingId"
                                      value={bookingId}
                                      onChange={this.handleChange}
                                      className="form-control input-field-70"
                                      placeholder="Enter Booking Id if you booked for this parcel"
                                    />
                                  </div>
                                </div>
                                <div className="form-row">Delivery Address</div>
                                <div className="form-row mb-3">
                                  <div className="col">
                                    <textarea
                                      type="text"
                                      name="deliveryAddress"
                                      value={deliveryAddress}
                                      className="form-control input-field-70"
                                      placeholder="Enter your Delivery Address"
                                      onChange={this.handleChange}
                                    />
                                  </div>
                                </div>
                                <>
                                  <div className="form-row mb-1">
                                    Check Your Product
                                  </div>

                                  <div className="form-check mb-1">
                                    <input
                                      className="form-check-input"
                                      name="qcCheck"
                                      type="checkbox"
                                      value="true"
                                      checked={qcCheck === "true"}
                                      onChange={this.handleChange}
                                    />
                                    <label className="form-check-label">
                                      QC Check (100tk)
                                    </label>
                                  </div>
                                  <div className="form-check ">
                                    <input
                                      className="form-check-input"
                                      name="qcCheck"
                                      type="checkbox"
                                      value=""
                                      checked={qcCheck === ""}
                                      onChange={this.handleChange}
                                    />
                                    <label className="form-check-label">
                                      No. Don't need.
                                    </label>
                                  </div>
                                  {this.state.productsValue ? (
                                    <>
                                      {" "}
                                      <div className="form-row mt-3 mb-1">
                                        Take Insurance
                                      </div>
                                      <div className="form-check mb-1">
                                        <input
                                          className="form-check-input"
                                          name="insurance"
                                          type="checkbox"
                                          value="insurance amount"
                                          checked={
                                            insurance === "insurance amount"
                                          }
                                          onChange={this.handleChange}
                                        />
                                        <label className="form-check-label">
                                          Insurance (3% of products value)
                                        </label>
                                      </div>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          name="insurance"
                                          type="checkbox"
                                          value=""
                                          checked={insurance === ""}
                                          onChange={this.handleChange}
                                        />
                                        <label className="form-check-label">
                                          No. Don't need.
                                        </label>
                                      </div>
                                    </>
                                  ) : null}
                                </>
                              </>
                            ) : null}

                            <div className="form-row mt-4">
                              <div className="col pt-2">
                                <button
                                  type="submit"
                                  className="from-btn btn-theme bg-orange"
                                >
                                  Update
                                  <i className="icofont-rounded-right"></i>
                                </button>
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

const mapStateToProps = (state) => {
  return {
    parcelObj: state.parcelObj.parcelObj,
  };
};
export default withRouter(
  connect(mapStateToProps, { updateMyParcelArrayOfUser })(OtherInformationModal)
);
