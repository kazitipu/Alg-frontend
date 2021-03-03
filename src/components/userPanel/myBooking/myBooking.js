import React, { Component, Fragment } from "react";
import Breadcrumb from "../common/breadcrumb";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Datatable from "./myBookingDatatable";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Search } from "react-feather";

export class MyBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    const { open } = this.state;

    console.log(this.props);
    return (
      <Fragment>
        <Breadcrumb
          title="My Bookings"
          parent={this.props.currentUser.displayName.slice(0, 12)}
        />
        {/* <!-- Container-fluid starts--> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div
                  className="card-header"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <h5
                    style={{
                      fontFamily: "fantasy",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    <i
                      className="icofont-notebook"
                      style={{
                        fontSize: "180%",
                        marginRight: "5px",
                        marginTop: "5px",
                        color: "#430861",
                      }}
                    ></i>
                    My Bookings
                  </h5>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    {" "}
                    <li
                      style={{
                        border: "1px solid gainsboro",
                        borderRadius: "5rem",
                        padding: "0px 20px",
                        background: "whitesmoke",
                        marginRight: "20px",
                      }}
                    >
                      <form
                        className="form-inline search-form"
                        onSubmit={this.handleSubmit}
                      >
                        <div
                          // className="form-group"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                          }}
                        >
                          <input
                            className={
                              "form-control-plaintext " +
                              (this.state.searchbar ? "open" : "")
                            }
                            name="searchFor"
                            value={this.state.searchFor}
                            type="search"
                            placeholder="Search Booking"
                            onChange={this.handleChange}
                          />
                          <span
                            // className="d-sm-none mobile-search"
                            onClick={() => this.handleSearchClick()}
                          >
                            <Search
                              style={{
                                marginTop: "5px",
                                borderLeft: "1px solid gainsboro",
                                paddingLeft: "7px",
                                color: "gray",
                              }}
                            />
                          </span>
                        </div>
                      </form>
                    </li>
                  </div>
                </div>
                <div className="card-body">
                  <div className="clearfix"></div>
                  <div id="basicScenario" className="product-physical">
                    <Datatable
                      history={this.props.history}
                      multiSelectOption={false}
                      myData={this.props.bookingArray}
                      pageSize={10}
                      pagination={true}
                      class="-striped -highlight"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
        {/* <!-- Container-fluid Ends--> */}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookingArray: state.currentUser.currentUser.bookingArray,
    currentUser: state.currentUser.currentUser,
  };
};

export default connect(mapStateToProps, {})(MyBooking);
