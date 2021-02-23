import React, { Component } from "react";
import "./searchbar.css";
import { connect } from "react-redux";
import {
  getAllExpressRatesParcelRedux,
  getAllExpressRatesDocumentRedux,
  getAllD2DRatesRedux,
  setExpressResultRedux,
  setD2dResultRedux,
} from "../../../../actions/index";
import {
  handleExpressSubmit,
  handleDoorToDoorSubmit,
  handleFreightSubmit,
} from "./SearchSubmit";
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
      expressRatesParcelWeightType: "",
      expressRatesParcelProductType: "",

      boxTypeParcel: [],
      boxTypeDocument: [],

      shipTo: "Bangladesh",
      shipFrom: "",
      date: "",
      containerType: "",
      weight: "",
      productType: "",
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

  handleCountryChangeD2dFreight = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      if (this.state.sea) {
        this.props.getAllD2DRatesRedux("sea", this.state.shipFrom);
      }
      if (this.state.air) {
        this.props.getAllD2DRatesRedux("air", this.state.shipFrom);
      }
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      expressRatesType,
      expressRatesParcelTo,
      expressRatesParcelWeightType,
      expressRatesParcelProductType,
    } = this.state;
    const { allExpressRatesDocument, allExpressRatesParcel } = this.props;

    if (this.state.express) {
      const result = handleExpressSubmit(
        expressRatesType,
        expressRatesParcelTo,
        expressRatesParcelWeightType,
        allExpressRatesParcel,
        allExpressRatesDocument
      );
      this.props.setExpressResultRedux({
        parcelType: expressRatesType,
        parcelBox: expressRatesParcelWeightType,
        productName: expressRatesParcelProductType,
        parcelTo: expressRatesParcelTo,
        total: result,
      });
    } else {
      if (this.state.doorToDoor) {
        const { shipFrom, weight, productType } = this.state;
        const { allD2dRates } = this.props;
        const result = handleDoorToDoorSubmit(weight, productType, allD2dRates);
        this.props.setD2dResultRedux({
          shipFrom,
          weight,
          productType,
          ...result,
        });
      }
      if (this.state.freight) {
        handleFreightSubmit();
      }
    }
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
                    style={{ border: "0px", marginTop: "7px" }}
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
                {this.state.express ? (
                  <input
                    style={{ backgroundColor: "white", marginTop: "7px" }}
                    type="text"
                    name="expressRatesFrom"
                    value={this.state.expressRatesFrom}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="City,Port,Country"
                    readOnly
                  />
                ) : (
                  <select
                    style={{ border: "0px", marginTop: "7px" }}
                    onChange={this.handleCountryChangeD2dFreight}
                    name="shipFrom"
                    value={this.state.shipFrom}
                    className="custom-select"
                  >
                    <option value="">Select Country</option>
                    <option value="china">china</option>
                    <option value="malaysia">malaysia</option>
                    <option value="hongkong">hongkong</option>
                    <option value="dubai">dubai</option>
                    <option value="pakistan">pakistan</option>
                    <option value="singapore">singapore</option>
                    <option value="thailand">thailand</option>
                    <option value="india">india</option>
                  </select>
                )}
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
                {this.state.express ? (
                  <select
                    style={{ border: "0px", marginTop: "7px" }}
                    onChange={this.handleCountryChange}
                    name="expressRatesParcelTo"
                    value={this.state.expressRatesParcelTo}
                    className="custom-select"
                  >
                    <option value="">Select Country</option>
                    {this.state.expressRatesType == "Parcel"
                      ? this.props.allExpressRatesParcel.map((country) => (
                          <option
                            key={country.country}
                            value={`${country.country}`}
                          >
                            {country.country}
                          </option>
                        ))
                      : this.props.allExpressRatesDocument.map((country) => (
                          <option
                            key={country.country}
                            value={`${country.country}`}
                          >
                            {country.country}
                          </option>
                        ))}
                  </select>
                ) : (
                  <input
                    style={{ backgroundColor: "white", marginTop: "7px" }}
                    type="text"
                    name="shipTo"
                    value={this.state.shipTo}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="City,Port,Country"
                    readOnly
                  />
                )}
              </div>
              {!this.state.doorToDoor ? (
                <div className="col logo-input-container">
                  {!this.state.express ? (
                    <>
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
                        name="date"
                        onChange={this.handleChange}
                        value={this.state.date}
                        className="form-control"
                        placeholder="Date"
                      />
                    </>
                  ) : (
                    <>
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
                        style={{ border: "0px", marginTop: "7px" }}
                        className="custom-select"
                        onChange={this.handleChange}
                        name="expressRatesParcelWeightType"
                        value={this.state.expressRatesParcelWeightType}
                      >
                        <option value="">Select Box Type</option>
                        {this.state.expressRatesType == "Parcel"
                          ? this.state.boxTypeParcel.map((box) => (
                              <option key={box} value={`${box}`}>
                                {box} kg
                              </option>
                            ))
                          : this.state.boxTypeDocument.map((box) => (
                              <option key={box} value={`${box}`}>
                                {box} kg
                              </option>
                            ))}
                      </select>{" "}
                    </>
                  )}
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
                        <select
                          style={{ border: "0px" }}
                          value={this.state.containerType}
                          name="containerType"
                          onChange={this.handleChange}
                          className="cutom-select"
                        >
                          <option value="FCL">FCL </option>
                          <option value="LCL">LCL </option>
                        </select>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="lcl-fcl logo-input-container"
                      style={{ cursor: "pointer" }}
                    >
                      {!this.state.express ? (
                        <>
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
                              this.setState({
                                toggleLcl: !this.state.toggleLcl,
                              })
                            }
                          >
                            <div style={{ fontSize: "80%" }}>air delivery</div>
                            <div style={{ fontWeight: "bold" }}>Air</div>
                          </div>
                        </>
                      ) : (
                        <>
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
                          {this.state.express ? (
                            <input
                              value={this.state.expressRatesParcelProductType}
                              name="expressRatesParcelProductType"
                              onChange={this.handleChange}
                              style={{ marginBottom: "4px", outline: "0px" }}
                              placeholder="Enter Product Name"
                              type="text"
                            ></input>
                          ) : (
                            <select
                              style={{ border: "0px", marginTop: "7px" }}
                              onChange={this.handleChange}
                              name="productType"
                              value={this.state.productType}
                              className="custom-select"
                            >
                              <option value="">Select Product Type</option>
                              <option value="china">china</option>
                              <option value="malaysia">malaysia</option>
                              <option value="hongkong">hongkong</option>
                              <option value="dubai">dubai</option>
                              <option value="pakistan">pakistan</option>
                              <option value="singapore">singapore</option>
                              <option value="thailand">thailand</option>
                              <option value="india">india</option>
                            </select>
                          )}
                        </>
                      )}
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
                    {this.state.express ? (
                      <select
                        style={{ border: "0px", marginTop: "7px" }}
                        className="custom-select"
                        onChange={this.handleChange}
                        name="expressRatesParcelWeightType"
                        value={this.state.expressRatesParcelWeightType}
                      >
                        <option value="">Select Box Type</option>
                        {this.state.expressRatesType == "Parcel"
                          ? this.state.boxTypeParcel.map((box) => (
                              <option key={box} value={`${box}`}>
                                {box} kg
                              </option>
                            ))
                          : this.state.boxTypeDocument.map((box) => (
                              <option key={box} value={`${box}`}>
                                {box} kg
                              </option>
                            ))}
                      </select>
                    ) : (
                      <input
                        type="number"
                        name="weight"
                        onChange={this.handleChange}
                        value={this.state.weight}
                        className="form-control"
                        placeholder="Enter weight(kg)"
                      />
                    )}
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
                    {this.state.express ? (
                      <input
                        value={this.state.expressRatesParcelProductType}
                        name="expressRatesParcelProductType"
                        onChange={this.handleChange}
                        style={{ marginBottom: "4px", outline: "0px" }}
                        placeholder="Enter Product Name"
                        type="text"
                      ></input>
                    ) : (
                      <select
                        style={{ border: "0px", marginTop: "7px" }}
                        onChange={this.handleCountryChangeD2dFreight}
                        name="productType"
                        value={this.state.productType}
                        className="custom-select"
                      >
                        <option value="">Select Product Type</option>
                        {this.props.allD2dRates.map((productType) => (
                          <option value={productType.id}>
                            {productType.id}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                </>
              )}
              <div
                data-toggle="modal"
                data-target={
                  !this.state.express
                    ? this.state.doorToDoor
                      ? "#request_search_submit_popup_door_to_door"
                      : "#request_search_submit_popup_freight"
                    : "#request_search_submit_popup_door_to_door"
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
  allD2dRates: state.d2dRates.d2dRates,
});
export default connect(mapStateToProps, {
  getAllExpressRatesParcelRedux,
  getAllExpressRatesDocumentRedux,
  setExpressResultRedux,
  setD2dResultRedux,
  getAllD2DRatesRedux,
})(SearchBar);
