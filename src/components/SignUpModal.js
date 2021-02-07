import React, { Component } from "react";
import {
  auth,
  createUserProfileDocument,
} from "../components/firebase/firebase.utils";
import { withRouter } from "react-router-dom";
class SignUpModal extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      mobileNo: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {
      displayName,
      mobileNo,
      email,
      password,
      confirmPassword,
    } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName, mobileNo });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobileNo: "",
      });
      // if (this.props.history.location.state) {
      //   this.props.history.push(this.props.history.location.state.from);
      // } else {
      //   this.props.history.push("/");
      // }
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {
      displayName,
      mobileNo,
      email,
      password,
      confirmPassword,
    } = this.state;
    return (
      <>
        <div
          className="modal fade"
          id="request_signup_popup"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered request_popup"
            role="document"
          >
            <div className="modal-content signup-modal">
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
                            Sign up
                          </h2>
                          <form
                            onSubmit={this.handleSubmit}
                            noValidate="novalidate"
                            className="rounded-field"
                          >
                            <div className="form-row mb-4">
                              <div className="col">
                                Already have an account?{" "}
                                <span
                                  style={{
                                    color: "purple",
                                    marginLeft: "2px",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                  }}
                                  data-dismiss="modal"
                                  data-toggle="modal"
                                  data-target="#request_login_popup"
                                >
                                  Sign in here
                                </span>
                              </div>
                            </div>
                            <div className="form-row mb-2">
                              <div className="col">
                                <input
                                  type="text"
                                  name="displayName"
                                  value={displayName}
                                  className="form-control"
                                  placeholder="Enter your Name"
                                  onChange={this.handleChange}
                                />
                              </div>
                            </div>
                            <div className="form-row mb-2">
                              <div className="col">
                                <input
                                  type="text"
                                  name="mobileNo"
                                  value={mobileNo}
                                  className="form-control"
                                  placeholder="Enter your Mobile No"
                                  onChange={this.handleChange}
                                />
                              </div>
                            </div>
                            <div className="form-row mb-2">
                              <div className="col">
                                <input
                                  type="text"
                                  name="email"
                                  value={email}
                                  className="form-control"
                                  placeholder="Enter your Email"
                                  onChange={this.handleChange}
                                />
                              </div>
                            </div>
                            <div className="form-row mb-2">
                              <div className="col">
                                <input
                                  style={{
                                    borderRadius: "10rem",
                                    padding: "20px",
                                    fontSize: ".9rem",
                                  }}
                                  type="password"
                                  name="password"
                                  value={password}
                                  className="form-control"
                                  placeholder="Enter your Password"
                                  onChange={this.handleChange}
                                />
                              </div>
                            </div>
                            <div className="form-row mb-2">
                              <div className="col">
                                <input
                                  style={{
                                    borderRadius: "10rem",
                                    padding: "20px",
                                    fontSize: ".9rem",
                                  }}
                                  type="password"
                                  name="confirmPassword"
                                  value={confirmPassword}
                                  className="form-control"
                                  placeholder="Confirm Password"
                                  onChange={this.handleChange}
                                />
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="col pt-2">
                                <button
                                  type="submit"
                                  className="form-btn btn-theme bg-orange"
                                >
                                  Sign up
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
export default withRouter(SignUpModal);
