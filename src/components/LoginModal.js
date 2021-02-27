import React, { Component } from "react";
import {
  auth,
  signInWithGoogle,
  singInWithFacebook,
} from "./firebase/firebase.utils";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { toggleLoginModal } from "../actions/index";
class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      currentUser: null,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      document.getElementById("modal-close-icon-login").click();
      this.setState({ email: "", password: "" });
      // if (this.props.history.location.state) {
      //   this.props.history.push(this.props.history.location.state.from);
      // } else {
      //   this.props.history.push("/");
      // }
      this.props.history.push("/");
      this.setState({ email: "", password: "" });
    } catch (error) {
      alert(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleSignInWithFacebook = async () => {
    try {
      await singInWithFacebook();
      console.log();
    } catch (error) {}
  };

  handleSignInWithGoogle = async () => {
    try {
      const currentUser = await signInWithGoogle();
      this.setState(currentUser, () => {
        console.log(this.state.currentUser);
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <div
          className="modal fade"
          id="request_login_popup"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered request_popup"
            role="document"
          >
            <div className="modal-content login-modal">
              <div className="modal-body p-0">
                <section className="pos-rel bg-light-gray">
                  <div className="container-fluid p-0">
                    <a
                      href="#"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      id="modal-close-icon-login"
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

                      <div className="col-md-7 col-12">
                        <div className="m-4 ">
                          <h2
                            className="h2-xl fw-6 sign-in-header-title"
                            style={{
                              color: "orange",
                              fontSize: "140%",
                              fontWeight: "bolder",
                            }}
                          >
                            Sign in
                          </h2>
                          <form
                            onSubmit={this.handleSubmit}
                            className="rounded-field"
                          >
                            <div className="form-row mb-4">
                              <div className="col">
                                Not registered?
                                <span
                                  style={{
                                    color: "purple",
                                    marginLeft: "2px",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                  }}
                                  data-dismiss="modal"
                                  data-toggle="modal"
                                  data-target="#request_signup_popup"
                                >
                                  create an account
                                </span>
                              </div>
                            </div>
                            <div className="form-row mb-2">
                              <div className="col">
                                <input
                                  type="text"
                                  name="email"
                                  value={email}
                                  className="form-control input-field-70"
                                  placeholder="Enter your Email"
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="col">
                                <input
                                  style={{
                                    padding: "20px",
                                    borderRadius: "10rem",
                                    fontSize: ".9rem",
                                  }}
                                  type="password"
                                  name="password"
                                  value={password}
                                  className="form-control input-field-70"
                                  placeholder="Enter your Password"
                                  onChange={this.handleChange}
                                  required
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
                                <div
                                  className="facebook-sign-in"
                                  onClick={() =>
                                    this.handleSignInWithFacebook()
                                  }
                                >
                                  <span>
                                    <i className="icofont-facebook"></i>
                                  </span>
                                  Sign in with Facebook
                                </div>
                                <div
                                  className="google-sign-in"
                                  data-dismiss="modal"
                                  onClick={() => this.handleSignInWithGoogle()}
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

export default withRouter(connect()(LoginModal));
