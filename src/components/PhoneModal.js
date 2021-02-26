import React, { Component } from "react";
import firebase from "./firebase/firebase.utils";
class PhoneModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      console.log(this.state.phoneNumber);
    });
  };
  // setUpRecaptcha = async () => {
  //   // event.preventDefault();
  //   console.log("handle submit called");
  //   window.recaptchaVerifier = await new firebase.auth.RecaptchaVerifier(
  //     "recaptcha-container",
  //     {
  //       size: "invisible",
  //       callback: (response) => {
  //         // reCAPTCHA solved, allow signInWithPhoneNumber.
  //         this.onSignInSubmit();
  //       },
  //     }
  //   );
  //   this.setState({ phoneNumber: "" });
  //   this.appVerifier = window.recaptchaVerifier;
  // };

  // onSignInSubmit = async (event) => {
  //   event.preventDefault();
  //   let verifier = new firebase.auth.RecaptchaVerifier("recaptcha");
  //   console.log("onsigninsubmit called");
  //   const phoneNumber = this.state.phoneNumber;
  //   firebase
  //     .auth()
  //     .signInWithPhoneNumber(phoneNumber, verifier)
  //     .then((confirmationResult) => {
  //       const code = this.state.phoneNumber;
  //       confirmationResult
  //         .confirm(code)
  //         .then((result) => {
  //           // User signed in successfully.
  //           const user = result.user;
  //           // ...
  //         })
  //         .catch((error) => {
  //           // User couldn't sign in (bad verification code?)
  //           // ...
  //         });
  //       // this.getonetimepassword(confirmationResult)
  //       // SMS sent. Prompt user to type the code from the message, then sign the
  //       // user in with confirmationResult.confirm(code).
  //       window.confirmationResult = confirmationResult;
  //       // ...
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   this.setState({ phoneNumber: "" });
  // };

  onSignInSubmit = async () => {
    window.recaptchaVerifier = await new firebase.auth.RecaptchaVerifier(
      "recaptcha-container"
    );
    window.recaptchaVerifier.render();
    const phoneNumber = this.state.phoneNumber;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        const codeResult = confirmationResult;
        console.log(codeResult);
        alert("message was sent");
        // confirmationResult
        //   .confirm(code)
        //   .then((result) => {
        //     // User signed in successfully.
        //     const user = result.user;
        //     // ...
        //   })
        //   .catch((error) => {
        //     // User couldn't sign in (bad verification code?)
        //     // ...
        //   });
        // // this.getonetimepassword(confirmationResult)
        // // SMS sent. Prompt user to type the code from the message, then sign the
        // // user in with confirmationResult.confirm(code).
        // window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ phoneNumber: "" });
  };

  render() {
    return (
      <>
        <div
          className="modal fade"
          id="request_phone_popup"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered request_popup"
            role="document"
          >
            <div className="modal-content phone-modal">
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
                      <div
                        className="col bg-fixed login-img-bg request_pag_img"
                        style={{ minHeight: "200px" }}
                      >
                        &nbsp;
                      </div>

                      <div
                        className="col-md-7 col-12"
                        style={{ marginTop: "30px" }}
                      >
                        <div className="px-3 m-4">
                          <h2
                            className="h2-xl fw-6"
                            style={{
                              color: "orange",
                              fontSize: "140%",
                              fontWeight: "bolder",
                            }}
                          >
                            Enter your Mobile no
                          </h2>
                          <form
                            noValidate="novalidate"
                            className="rounded-field"
                          >
                            <div className="form-row mb-2">
                              <div className="col">
                                <input
                                  onChange={this.handleChange}
                                  type="text"
                                  name="phoneNumber"
                                  className="form-control"
                                  placeholder="Your Mobile no"
                                />
                              </div>
                            </div>
                            <div id="reacaptcha-container"></div>
                            <div className="form-row">
                              <div className="col pt-2">
                                <button
                                  // onClick={this.onSignInSubmit}
                                  id="number-submit"
                                  type="submit"
                                  className="form-btn btn-theme bg-orange"
                                  onClick={this.onSignInSubmit}
                                  // data-dismiss="modal"
                                  // data-toggle="modal"
                                  // data-target="#request_otp_popup"
                                >
                                  Get OTP
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
export default PhoneModal;
