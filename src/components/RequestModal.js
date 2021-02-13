import React from "react";

const RequestModal = () => {
  return (
    <>
      <div
        className="modal fade show"
        id="request_popup"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered request_popup"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body p-0">
              <section className="pos-rel bg-light-gray">
                <div className="container-fluid p-0">
                  <a
                    href="#"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="icofont-close-line"></i>
                  </a>
                  <div
                    className="d-lg-flex justify-content-end no-gutters mb-spacer-md"
                    style={{
                      boxShadow: "0px 18px 76px 0px rgba(0, 0, 0, 0.06)",
                    }}
                  >
                    <div className="col bg-fixed bg-img-7 request_pag_img">
                      &nbsp;
                    </div>

                    <div className="col-md-7 col-12">
                      <div className="px-3 m-5">
                        <h2 className="h2-xl mb-4 fw-6">Request A Quote</h2>
                        <form
                          action="#"
                          method="post"
                          noValidate="novalidate"
                          className="rounded-field"
                        >
                          <div className="form-row mb-4">
                            <div className="col">
                              <select
                                title="Please choose a package"
                                required=""
                                name="package"
                                className="custom-select"
                                aria-required="true"
                                aria-invalid="false"
                              >
                                <option value="">Freight Type</option>
                                <option value="Type 1">Type 1</option>
                                <option value="Type 2">Type 2</option>
                                <option value="Type 3">Type 3</option>
                                <option value="Type 4">Type 4</option>
                              </select>
                            </div>
                            <div className="col">
                              <select
                                title="Please choose a package"
                                required=""
                                name="package"
                                className="custom-select"
                                aria-required="true"
                                aria-invalid="false"
                              >
                                <option value="">Incoterms</option>
                                <option value="Type 1">Type 1</option>
                                <option value="Type 2">Type 2</option>
                                <option value="Type 3">Type 3</option>
                                <option value="Type 4">Type 4</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-row mb-4">
                            <div className="col">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="City of departure"
                              />
                            </div>
                            <div className="col">
                              <input
                                type="text"
                                name="email"
                                className="form-control"
                                placeholder="Delivery city"
                              />
                            </div>
                          </div>
                          <div className="form-row mb-4">
                            <div className="col">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Total gross weight (KG)"
                              />
                            </div>
                            <div className="col">
                              <input
                                type="text"
                                name="email"
                                className="form-control"
                                placeholder="Dimension"
                              />
                            </div>
                          </div>

                          <div className="form-row">
                            <div className="col">
                              <div className="center-head">
                                <span className="bg-light-gray txt-orange">
                                  Your Personal Details
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="form-row mb-4">
                            <div className="col">
                              <input
                                type="text"
                                name="name"
                                className="form-control mb-3"
                                placeholder="Your Name"
                              />
                              <input
                                type="text"
                                name="name"
                                className="form-control mb-3"
                                placeholder="Email"
                              />
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Phone Number"
                              />
                            </div>
                            <div className="col">
                              <textarea
                                rows="7"
                                placeholder="Message"
                                className="form-control"
                              ></textarea>
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="col pt-3">
                              <button
                                type="submit"
                                className="form-btn btn-theme bg-orange"
                              >
                                Send Message{" "}
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
};
export default RequestModal;
