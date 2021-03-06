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
      problem: "",
      insurance: "",
      bookingId: "",
      productName: "",
      quantity: "",
      trackingNo: "",
      gorssWeight: "",
      totalCbm: "",
    };
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.parcelObj) {
      this.setState({
        productName: nextProps.parcelObj.productName,
        quantity: nextProps.parcelObj.quantity,
        trackingNo: nextProps.parcelObj.trackingNo,
        gorssWeight: nextProps.parcelObj.grossWeight,
        totalCbm: nextProps.parcelObj.totalCbm,
      });
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const {
      productsValue,
      packagingChosed,
      deliveryAddress,
      problem,
      insurance,
    } = this.state;
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
      problem: "",
      insurance: "",
      bookingId: "",
      productName: "",
      quantity: "",
      trackingNo: "",
      gorssWeight: "",
      totalCbm: "",
    });
  };

  render() {
    const { parcelObj } = this.props;
    const {
      productsValue,
      packagingChosed,
      deliveryAddress,
      problem,
      insurance,
      bookingId,
      productName,
      quantity,
      trackingNo,
      gorssWeight,
      totalCbm,
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
                            className="h2-xl fw-6 sign-in-header-title other-information-header-title"
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
                            <div
                              className="form-row mb-4"
                              style={{
                                color: "darkorange",
                                fontWeight: "bold",
                              }}
                            >
                              Mandatory field.
                              <br />
                              <span>&nbsp;Don't touch if everything's ok</span>
                            </div>

                            <div className="form-row mb-3">
                              <div className="col">
                                <div className="form-row">Products Value</div>
                                <input
                                  type="text"
                                  name="productsValue"
                                  value={productsValue}
                                  className="form-control input-field-70"
                                  placeholder="Total Cost (single carton)"
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>
                              <div className="col">
                                <div className="form-row">Products Name</div>
                                <input
                                  type="text"
                                  name="productName"
                                  value={productName}
                                  className="form-control input-field-70"
                                  placeholder="Total Cost (single carton)"
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
                                  name="quantity"
                                  value={quantity}
                                  className="form-control input-field-70"
                                  placeholder="Total Cost (single carton)"
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>
                              <div className="col">
                                <div className="form-row">Tracking No</div>
                                <input
                                  type="text"
                                  name="trackingNo"
                                  value={trackingNo}
                                  className="form-control input-field-70"
                                  placeholder="Total Cost (single carton)"
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-row mb-4">
                              <div className="col">
                                <div className="form-row">Products Weight</div>
                                <input
                                  type="text"
                                  name="grossWeight"
                                  value={gorssWeight}
                                  className="form-control input-field-70"
                                  placeholder="Total Cost (single carton)"
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>
                              <div className="col">
                                <div className="form-row">Total CBM</div>
                                <input
                                  type="text"
                                  name="totalCbm"
                                  value={totalCbm}
                                  className="form-control input-field-70"
                                  placeholder="Total Cost (single carton)"
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>
                            </div>
                            <div
                              className="form-row mb-4"
                              style={{
                                color: "darkorange",
                                fontWeight: "bold",
                              }}
                            >
                              Additional Services.
                              <br />
                              <span>
                                &nbsp;Take additional services if you wish.
                              </span>
                            </div>
                            <div className="form-row">Delivery Address</div>
                            <div className="form-row mb-3">
                              <div className="col">
                                <textarea
                                  type="text"
                                  name="deliveryAddress"
                                  value={
                                    deliveryAddress
                                      ? deliveryAddress
                                      : "ALG OFFICE"
                                  }
                                  className="form-control input-field-70"
                                  placeholder="Enter your Delivery Address"
                                  onChange={this.handleChange}
                                />
                              </div>
                            </div>

                            {parcelObj.packaging ? (
                              <>
                                {" "}
                                <div className="form-row mb-3">
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
                                <div className="form-row">Choose Packaging</div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    name="packagingChosed"
                                    type="checkbox"
                                    value={parcelObj.packaging}
                                    checked={
                                      packagingChosed === parcelObj.packaging
                                    }
                                    onChange={this.handleChange}
                                  />
                                  <label className="form-check-label">
                                    {parcelObj.packaging}
                                  </label>
                                </div>
                                <div
                                  className="form-check"
                                  style={{ marginBottom: "8px" }}
                                >
                                  <input
                                    className="form-check-input"
                                    name="packagingChosed"
                                    type="checkbox"
                                    value=""
                                    checked={packagingChosed === ""}
                                    onChange={this.handleChange}
                                  />
                                  <label className="form-check-label">
                                    None
                                  </label>
                                </div>{" "}
                              </>
                            ) : null}
                            <>
                              {this.state.productsValue ? (
                                <>
                                  {" "}
                                  <div className="form-row mb-3">
                                    Take Insurance
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      name="insurance"
                                      type="checkbox"
                                      value="insurance amount"
                                      checked={insurance === "insurance amount"}
                                      onChange={this.handleChange}
                                    />
                                    <label className="form-check-label">
                                      Insurance (3% of products cost)
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
                              <div className="form-row mb-3">
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
                            </>

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
