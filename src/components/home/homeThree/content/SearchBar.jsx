import React, { Component } from "react";
import "./searchbar.css";
class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar-container-home">
        <h5 style={{ fontWeight: "bold", color: "lightgray" }}>
          SHIPPING TO AND FROM ANYWHERE IN THE WORLD
        </h5>
        <h1 style={{ fontWeight: "bold", color: "white", fontSize: "300%" }}>
          Find the{" "}
          <span
            style={{ fontSize: "130%", color: "purple", fontWeight: "bolder" }}
          >
            best freight
          </span>
          &nbsp;quote
        </h1>
        <div className="search-bar">
          <div className="search-options">
            <div
              className="option"
              style={{
                color: "purple",
                borderBottom: "4px solid purple",
              }}
            >
              <i
                className="icofont-airplane-alt"
                style={{ color: "purple" }}
              ></i>
              Air
            </div>
            <div className="option">
              <i className="icofont-ship"></i>Sea
            </div>
            <div className="option">
              <i className="icofont-fast-delivery"></i>Express
            </div>
          </div>
          <div className="search-input-bar" style={{ paddingTop: "10px" }}>
            <div className="form-row mb-2">
              <div className="col logo-input-container">
                <span
                  style={{
                    backgroundColor: "purple",
                    color: "white",
                    borderRadius: "20px",
                  }}
                >
                  <i className="icofont-">freight</i>
                </span>
                <span>
                  <i className="icofont-">D2D</i>
                </span>
                <span>
                  <i className="icofont-"></i>
                </span>
              </div>
              <div className="col logo-input-container">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Approx Kg"
                />
              </div>
              <div className="col logo-input-container">
                <span>
                  <i className="icofont-industries-2"></i>
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
                  }}
                >
                  <i
                    className="icofont-long-arrow-left"
                    style={{
                      color: "white",
                      fontSize: "140%",
                      fontWeight: "bold",
                      padding: "2px",
                      backgroundColor: "blue",
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
                      backgroundColor: "blue",
                    }}
                  ></i>
                </div>
              </div>
              <div className="col logo-input-container">
                <span style={{ borderLeft: "0px" }}>
                  <i className="icofont-home"></i>
                </span>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="City,Port,Country"
                />
              </div>
              <div className="col logo-input-container">
                <span>
                  <i className="icofont-calendar"></i>
                </span>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Date"
                />
              </div>
              <div className="logo-input-container">
                <span
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    fontSize: "150%",
                    paddingTop: "5px",
                    borderLeft: "0px",
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
