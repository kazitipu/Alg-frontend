import React from "react";

const OtpModal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="request_otp_popup"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered request_popup"
          role="document"
        >
          <div
            className="modal-content"
            style={{ maxWidth: "70%", marginLeft: "12rem" }}
          >
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
                    <div className="col bg-fixed login-img-bg request_pag_img">
                      &nbsp;
                    </div>

                    <div
                      className="col-md-7 col-12"
                      style={{ marginTop: "30px" }}
                    >
                      <div className="px-3 m-5">
                        <h2
                          className="h2-xl fw-6"
                          style={{
                            color: "orange",
                            fontSize: "140%",
                            fontWeight: "bolder",
                          }}
                        >
                          Enter your OTP
                        </h2>
                        <form
                          action="#"
                          method="post"
                          noValidate="novalidate"
                          className="rounded-field"
                        >
                          <div className="form-row mb-2">
                            <div className="col">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Enter your OTP here"
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="col pt-2">
                              <button
                                type="submit"
                                className="form-btn btn-theme bg-orange"
                                data-dismiss="modal"
                              >
                                proceed
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
export default OtpModal;
