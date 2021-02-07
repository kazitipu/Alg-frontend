import React, { Component } from "react";
import "./searchbar.css";
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
    };
  }

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
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      paddingRight: "5px",
                    }}
                  >
                    <label style={{ fontSize: "80%" }}>parcel type</label>
                    <select style={{ border: "0px" }}>
                      <option>1kg box</option>
                      <option>2kg box</option>
                      <option>3kg box</option>
                      <option>4kg box</option>
                      <option>5kg box</option>
                    </select>
                  </div>
                  <span style={{ padding: "0px" }}>
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
                  name="name"
                  className="form-control"
                  placeholder="City,Port,Country"
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
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="City,Port,Country"
                />
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
                    <input
                      style={{ marginBottom: "4px" }}
                      placeholder="approx weight"
                      type="text"
                    ></input>
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
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <label style={{ fontSize: "80%" }}>product type</label>
                      <select style={{ border: "0px" }}>
                        <option>Bags</option>
                        <option>Shoes</option>
                        <option>Cosmetics</option>
                        <option>Autmobile parts</option>
                        <option>Light</option>
                      </select>
                    </div>
                  </div>
                </>
              )}
              <div
                data-toggle="modal"
                data-target={
                  this.state.sea
                    ? "#request_search_submit_popup"
                    : "#request_search_submit_popup_air"
                }
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

export default SearchBar;
