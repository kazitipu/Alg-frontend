import React, { Component } from "react";
import "./searchbar.css";
import { connect } from "react-redux";
import {
  getAllExpressRatesParcelRedux,
  getAllExpressRatesDocumentRedux,
} from "../../../../actions/index";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      air: true,
      sea: false,
      express: false,
      freight: false,
      doorToDoor: true,
      toggleLcl: false,
      toggleProductType: false,

      expressRatesType: "",
      expressRatesFrom: "Bangladesh",
      expressRatesParcelTo: "",
      expressRatesParcelWeightType: [],
      expressRatesParcelProductType: "",

      boxTypeParcel: [],
      boxTypeDocument: [],

      from: "",
    };
  }

  componentDidMount = async () => {
    await this.props.getAllExpressRatesDocumentRedux();
    // const valueArrayDocument = keyArrayDocument.map(key=>countryObj[key])
    await this.props.getAllExpressRatesParcelRedux();
    // const valueArrayParcel = keyArrayParcel.map(key=>countryObj[key])
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCountryChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      console.log(this.state.expressRatesParcelTo);

      this.props.allExpressRatesDocument.map((country) => {
        console.log(country.country);
        const countryObjDocument = this.props.allExpressRatesDocument.find(
          (country) => country.country == this.state.expressRatesParcelTo
        );
        const keyArrayDocument = Object.keys(countryObjDocument).filter(
          (key) => key !== "country"
        );
        const countryObjParcel = this.props.allExpressRatesParcel.find(
          (country) => country.country == this.state.expressRatesParcelTo
        );
        const keyArrayParcel = Object.keys(countryObjParcel).filter(
          (key) => key !== "country"
        );

        this.setState({
          boxTypeDocument: keyArrayDocument,
          boxTypeParcel: keyArrayParcel,
        });
      });
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.air) this.handleAirSubmit();
    if (this.state.sea) this.handleSeaSubmit();
    if (this.state.express) this.handleExpressSubmit();
  };

  handleExpressSubmit = () => {
    if (this.state.expressRatesType == "Parcel") {
      const country = this.props.allExpressRatesParcel.find(
        (country) => country.country == this.state.expressRatesParcelTo
      );
      const result = country[this.state.boxTypeParcel];
      console.log(result);
    } else {
      const country = this.props.allExpressRatesDocument.find(
        (country) => country.country == this.state.expressRatesParcelTo
      );
      const result = country[this.state.boxTypeDocument];
      console.log(result);
    }
    this.setState({
      air: true,
      sea: false,
      express: false,
      freight: false,
      doorToDoor: true,
      toggleLcl: false,
      toggleProductType: false,

      expressRatesType: "",
      expressRatesFrom: "Bangladesh",
      expressRatesParcelTo: "",
      expressRatesParcelWeightType: [],
      expressRatesParcelProductType: "",

      boxTypeParcel: [],
      boxTypeDocument: [],

      from: "",
    });
  };

  render() {
    const freight = {
      color: "#bf03bf",
    };
    const doorToDoor = {
      color: "rgb(3 212 195)",
    };

    const express = {
      color: "rgb(222 193 46)",
    };

    return (
      <div className="searchbar-container-home">
        <h5 className="header-title-1">
          SHIPPING TO AND FROM ANYWHERE IN THE WORLD
        </h5>
        <h1 className="header-title-2">
          Find the &nbsp;
          {!this.state.express ? (
            <>
              {this.state.freight ? (
                <>
                  <span
                    style={{
                      fontSize: "130%",
                      color: freight.color,
                      fontWeight: "bolder",
                    }}
                  >
                    best freight
                  </span>
                  &nbsp;quote
                </>
              ) : (
                <>
                  <span
                    style={{
                      fontSize: "130%",
                      color: doorToDoor.color,
                      fontWeight: "bolder",
                    }}
                  >
                    best door to door
                  </span>
                  &nbsp; rate
                </>
              )}
            </>
          ) : (
            <>
              <span
                style={{
                  fontSize: "130%",
                  color: express.color,
                  fontWeight: "bolder",
                }}
              >
                best express
              </span>
              &nbsp; rate
            </>
          )}
        </h1>
        <div className="search-bar">
          <div className="search-options">
            {this.state.air ? (
              <div
                className="option"
                style={{
                  color: this.state.freight ? freight.color : doorToDoor.color,
                  borderBottom: `4px solid ${
                    this.state.freight ? freight.color : doorToDoor.color
                  }`,
                }}
                onClick={() =>
                  this.setState({
                    air: true,
                    sea: false,
                    express: false,
                  })
                }
              >
                <i
                  className="icofont-airplane-alt"
                  style={{
                    color: this.state.freight
                      ? freight.color
                      : doorToDoor.color,
                  }}
                ></i>
                Air
              </div>
            ) : (
              <div
                className="option"
                onClick={() =>
                  this.setState({
                    air: true,
                    sea: false,
                    express: false,
                  })
                }
              >
                <i className="icofont-airplane-alt"></i>
                Air
              </div>
            )}
            <>
              {this.state.sea ? (
                <div
                  className="option"
                  style={{
                    color: this.state.freight
                      ? freight.color
                      : doorToDoor.color,
                    borderBottom: `4px solid ${
                      this.state.freight ? freight.color : doorToDoor.color
                    }`,
                  }}
                  onClick={() =>
                    this.setState({
                      air: false,
                      sea: true,
                      express: false,
                    })
                  }
                >
                  <i
                    className="icofont-ship"
                    style={{
                      color: this.state.freight
                        ? freight.color
                        : doorToDoor.color,
                    }}
                  ></i>
                  Sea
                </div>
              ) : (
                <div
                  className="option"
                  onClick={() =>
                    this.setState({
                      air: false,
                      sea: true,
                      express: false,
                    })
                  }
                >
                  <i className="icofont-ship"></i>Sea
                </div>
              )}
            </>
            <>
              {this.state.express ? (
                <div
                  className="option"
                  style={{
                    color: express.color,
                    borderBottom: `4px solid ${express.color}`,
                  }}
                  onClick={() =>
                    this.setState({
                      air: false,
                      sea: false,
                      express: true,
                    })
                  }
                >
                  <i
                    className="icofont-fast-delivery"
                    style={{
                      color: express.color,
                    }}
                  ></i>
                  Express
                </div>
              ) : (
                <div
                  className="option"
                  onClick={() =>
                    this.setState({
                      air: false,
                      sea: false,
                      express: true,
                    })
                  }
                >
                  <i className="icofont-fast-delivery"></i>Express
                </div>
              )}
            </>
          </div>
          <div className="search-input-bar" style={{ paddingTop: "10px" }}>
            <div className="form-row">
              {!this.state.express ? (
                <div
                  className="logo-input-container mid-options"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <>
                    {this.state.doorToDoor ? (
                      <span
                        className="door-to-door"
                        style={{
                          backgroundColor: doorToDoor.color,
                          color: "white",
                          borderRadius: "20px",
                          cursor: "pointer",
                          marginLeft: "0px",
                        }}
                        onClick={() =>
                          this.setState({ freight: false, doorToDoor: true })
                        }
                      >
                        <i className="icofont-">D2D</i>
                      </span>
                    ) : (
                      <span
                        className="door-to-door"
                        style={{ marginLeft: "0px" }}
                        onClick={() =>
                          this.setState({ freight: false, doorToDoor: true })
                        }
                      >
                        <i className="icofont-">D2D</i>
                      </span>
                    )}
                  </>
                  {this.state.freight ? (
                    <span
                      className="freight"
                      style={{
                        backgroundColor: freight.color,
                        color: "white",
                        borderRadius: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        this.setState({ freight: true, doorToDoor: false })
                      }
                    >
                      <i className="icofont-">freight</i>
                    </span>
                  ) : (
                    <span
                      className="freight"
                      onClick={() =>
                        this.setState({ freight: true, doorToDoor: false })
                      }
                    >
                      <i className="icofont-">freight</i>
                    </span>
                  )}

                  <span style={{ padding: "0px" }}>
                    <i className="icofont-"></i>
                  </span>
                </div>
              ) : (
                <div className="logo-input-container">
                  <span>
                    <i
                      className="icofont-cube"
                      style={{
                        color: express.color,
                      }}
                    ></i>
                  </span>

                  <select
                    style={{ border: "0px", marginTop: "5px" }}
                    value={this.state.expressRatesType}
                    onChange={this.handleChange}
                    name="expressRatesType"
                    className="custom-select"
                  >
                    <option value="">Select Type</option>
                    <option value="Document">Document</option>
                    <option value="Parcel">Parcel</option>
                  </select>

                  <span style={{ padding: "0px", marginRight: "4px" }}>
                    <i className="icofont-"></i>
                  </span>
                </div>
              )}

              <div className="logo-input-container">
                <span style={{ borderLeft: "0px" }}>
                  <i
                    className="icofont-industries-2"
                    style={{
                      color: !this.state.express
                        ? this.state.freight
                          ? freight.color
                          : doorToDoor.color
                        : express.color,
                    }}
                  ></i>
                </span>
                <input
                  type="text"
                  name="expressRatesFrom"
                  value={
                    this.state.express
                      ? this.state.expressRatesFrom
                      : this.state.from
                  }
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="City,Port,Country"
                  readOnly={this.state.express ? true : false}
                />
              </div>
              <div className="arrow-container">
                <div
                  style={{
                    paddingTop: "3px",
                    border: "blue 1px slolid",
                    borderRadius: ".5rem",
                    marginTop:
                      window.innerWidth < "600px"
                        ? this.state.express
                          ? "7rem"
                          : null
                        : null,
                  }}
                >
                  <i
                    className="icofont-long-arrow-left"
                    style={{
                      color: "white",
                      fontSize: "140%",
                      fontWeight: "bold",
                      padding: "2px",
                      backgroundColor: !this.state.express
                        ? this.state.freight
                          ? freight.color
                          : doorToDoor.color
                        : express.color,
                    }}
                  ></i>
                </div>
                <div>
                  <i
                    className="icofont-long-arrow-right"
                    style={{
                      color: "white",
                      fontSize: "140%",
                      fontWeight: "bold",
                      padding: "2px",
                      backgroundColor: !this.state.express
                        ? this.state.freight
                          ? freight.color
                          : doorToDoor.color
                        : express.color,
                    }}
                  ></i>
                </div>
              </div>
              <div className="logo-input-container">
                <span style={{ borderLeft: "0px" }}>
                  <i
                    className="icofont-home"
                    style={{
                      color: !this.state.express
                        ? this.state.freight
                          ? freight.color
                          : doorToDoor.color
                        : express.color,
                    }}
                  ></i>
                </span>
                <select
                  style={{ border: "0px", marginTop: "5px" }}
                  onChange={this.handleCountryChange}
                  name="expressRatesParcelTo"
                  value={this.state.expressRatesParcelTo}
                  className="custom-select"
                >
                  <option value="">Select Country</option>
                  {this.state.expressRatesType == "Parcel"
                    ? this.props.allExpressRatesParcel.map((country) => (
                        <option value={`${country.country}`}>
                          {country.country}
                        </option>
                      ))
                    : this.props.allExpressRatesDocument.map((country) => (
                        <option value={`${country.country}`}>
                          {country.country}
                        </option>
                      ))}
                </select>
              </div>
              {!this.state.doorToDoor ? (
                <div className="col logo-input-container">
                  <span>
                    <i
                      className="icofont-calendar"
                      style={{
                        color: !this.state.express
                          ? this.state.freight
                            ? freight.color
                            : doorToDoor.color
                          : express.color,
                      }}
                    ></i>
                  </span>
                  <input
                    type="date"
                    name="name"
                    className="form-control"
                    placeholder="Date"
                  />
                </div>
              ) : null}

              {!this.state.doorToDoor ? (
                <>
                  {this.state.sea ? (
                    <div className="logo-input-container">
                      <span>
                        <i
                          className="icofont-cube"
                          style={{
                            color: express.color,
                          }}
                        ></i>
                      </span>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          paddingRight: "5px",
                        }}
                      >
                        <label style={{ fontSize: "80%" }}>
                          Container type
                        </label>
                        <select style={{ border: "0px" }}>
                          <option>FCL</option>
                          <option>LCL</option>
                        </select>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="lcl-fcl logo-input-container"
                      style={{ cursor: "pointer" }}
                    >
                      <span>
                        <i
                          className="icofont-airplane"
                          style={{
                            color: !this.state.express
                              ? this.state.freight
                                ? freight.color
                                : doorToDoor.color
                              : express.color,
                          }}
                        ></i>
                      </span>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          paddingTop: "5px",
                        }}
                        onClick={() =>
                          this.setState({ toggleLcl: !this.state.toggleLcl })
                        }
                      >
                        <div style={{ fontSize: "80%" }}>air delivery</div>
                        <div style={{ fontWeight: "bold" }}>Air</div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div
                    className="logo-input-container"
                    style={{ cursor: "pointer" }}
                  >
                    <span>
                      <i
                        className="icofont-cube"
                        style={{
                          color: !this.state.express
                            ? this.state.freight
                              ? freight.color
                              : doorToDoor.color
                            : express.color,
                        }}
                      ></i>
                    </span>
                    <select
                      style={{ border: "0px", marginTop: "5px" }}
                      className="custom-select"
                    >
                      <option value="">Select Box Type</option>
                      {this.state.expressRatesType == "Parcel"
                        ? this.state.boxTypeParcel.map((box) => (
                            <option value={`${box}`}>{box} kg</option>
                          ))
                        : this.state.boxTypeDocument.map((box) => (
                            <option value={`${box}`}>{box} kg</option>
                          ))}
                    </select>
                  </div>
                  <div className="logo-input-container">
                    <span>
                      <i
                        className="icofont-bag"
                        style={{
                          color: !this.state.express
                            ? this.state.freight
                              ? freight.color
                              : doorToDoor.color
                            : express.color,
                        }}
                      ></i>
                    </span>

                    <input
                      style={{ marginBottom: "4px" }}
                      placeholder="Enter Product Type"
                      type="text"
                    ></input>
                  </div>
                </>
              )}
              <div
                data-toggle="modal"
                data-target={
                  this.state.doorToDoor
                    ? "#request_search_submit_popup_door_to_door"
                    : "#request_search_submit_popup_freight"
                }
                onClick={this.handleSubmit}
                className="logo-input-container search-button"
                style={{
                  backgroundColor: !this.state.express
                    ? this.state.freight
                      ? freight.color
                      : doorToDoor.color
                    : express.color,
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    backgroundColor: !this.state.express
                      ? this.state.freight
                        ? freight.color
                        : doorToDoor.color
                      : express.color,
                    color: "white",
                    fontSize: "150%",
                    paddingTop: "5px",
                    borderLeft: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <i className="icofont-search-1"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  allExpressRatesParcel: state.expressRatesParcel.expressRatesParcel,
  allExpressRatesDocument: state.expressRatesDocuments.expressRatesDocuments,
});
export default connect(mapStateToProps, {
  getAllExpressRatesParcelRedux,
  getAllExpressRatesDocumentRedux,
})(SearchBar);
