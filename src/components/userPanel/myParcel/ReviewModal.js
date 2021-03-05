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
class ReviewModal extends Component {
  render() {
    const { parcelObj } = this.props;

    console.log(parcelObj);
    return (
      <>
        <div
          className="modal fade"
          id="request_review_popup"
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
                          <form className="rounded-field">
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
                            <div className="form-row">Products Value</div>
                            <div className="form-row mb-3">
                              <div className="col">
                                <input
                                  value={parcelObj.productsValue}
                                  className="form-control input-field-70"
                                  readOnly
                                />
                              </div>
                            </div>
                            <div className="form-row">Delivery Address</div>
                            <div className="form-row mb-3">
                              <div className="col">
                                <textarea
                                  value={
                                    parcelObj.deliveryAddress
                                      ? parcelObj.deliveryAddress
                                      : "Alg office"
                                  }
                                  className="form-control input-field-70"
                                  readOnly
                                />
                              </div>
                            </div>
                            <div className="form-row">Any Other Problems</div>
                            <div className="form-row mb-3">
                              <div className="col">
                                <textarea
                                  value={
                                    parcelObj.problem
                                      ? parcelObj.problem
                                      : "No Problem"
                                  }
                                  className="form-control input-field-70"
                                  readOnly
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
                                      value={parcelObj.packagingCost}
                                      className="form-control"
                                      readOnly
                                    />
                                  </div>
                                </div>
                                <div className="form-row">Chosed Packaging</div>
                                <input
                                  value={
                                    parcelObj.packagingChosed
                                      ? parcelObj.packagingChosed
                                      : "No packaging"
                                  }
                                  className="form-control  mb-3"
                                  readOnly
                                />
                              </>
                            ) : null}

                            <div className="form-row mb-3">
                              <div className="col">
                                <div className="form-row">Insurance</div>
                                <input
                                  value={
                                    parcelObj.insurance
                                      ? parcelObj.insurance
                                      : "No insurance"
                                  }
                                  className="form-control  mb-3"
                                  readOnly
                                />
                              </div>
                              <div className="col">
                                <div className="form-row">Edit Approved</div>
                                <input
                                  value={
                                    parcelObj.editApproved ? "Yes" : "Pending"
                                  }
                                  className="form-control  mb-3"
                                  readOnly
                                />
                              </div>
                            </div>

                            <div className="form-row mt-4"></div>
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
  connect(mapStateToProps, { updateMyParcelArrayOfUser })(ReviewModal)
);
