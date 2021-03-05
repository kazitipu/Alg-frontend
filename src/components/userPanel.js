import React, { Component } from "react";
import Sidebar from "./userPanel/common/sidebar_components/sidebar";
import Right_sidebar from "./userPanel/common/right-sidebar";
import Footer from "./userPanel/common/footer";
import Header from "./userPanel/common/header_components/header";

import { connect } from "react-redux";
import "../index.scss";

export class UserPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ltr: true,
      divName: "RTL",
    };
  }

  componentDidMount = async () => {
    console.log(this.props.children);
  };
  ChangeRtl(divName) {
    if (divName === "RTL") {
      document.body.classList.add("rtl");
      this.setState({ divName: "LTR" });
    } else {
      document.body.classList.remove("rtl");
      this.setState({ divName: "RTL" });
    }
  }
  render() {
    return (
      <div>
        <div className="page-wrapper">
          <Header />
          <div className="page-body-wrapper">
            <Sidebar />
            <Right_sidebar />
            <div className="page-body">{this.props.children}</div>
            <Footer />
          </div>
        </div>
        <div
          className="btn-light custom-theme"
          onClick={() => this.ChangeRtl(this.state.divName)}
          style={{ display: "none" }}
        >
          {this.state.divName}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser,
  };
};
export default connect(mapStateToProps, {})(UserPanel);
