import React, { Component, Fragment } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import "./myParcelDatatable.css";
import { Link } from "react-router-dom";
import OtherInformationModal from "./OtherInformationModal";
import ReviewModal from "./ReviewModal";
import { setParcelObj } from "../../../actions/index";
import { connect } from "react-redux";
export class Datatable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedValues: [],
      myData: this.props.myData,
      parcelValue: "",
      deliveryAddress: "ALG OFFICE",
      packagingChosed: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  selectRow = (e, i) => {
    if (!e.target.checked) {
      this.setState({
        checkedValues: this.state.checkedValues.filter((item, j) => i !== item),
      });
    } else {
      this.state.checkedValues.push(i);
      this.setState({
        checkedValues: this.state.checkedValues,
      });
    }
  };
  renderEditable = (cellInfo) => {
    const { myData } = this.props;
    if (myData.length > 0) {
      const newData = [];
      myData.forEach((parcel) => {
        //  this is not affecting my output see line 104
        newData.push({
          "Parcel Id": parcel.parcelId,
          "Lot No": parcel.lotNo,
          "Carton No": parcel.cartonNo,
          "Tracking No": parcel.trackingNo,
        });
      });
      return (
        <div
          style={{ backgroundColor: "#fafafa" }}
          onBlur={(e) => {
            const data = [...newData];
            data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
            this.setState({ myData: data });
          }}
          dangerouslySetInnerHTML={{
            __html: newData[cellInfo.index][cellInfo.column.id],
          }}
        />
      );
    } else {
      return null;
    }
  };

  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  renderButton = (row, array) => {
    if (array.length > 0) {
      const parcelObj = array.find(
        (parcel) => parcel.parcelId === row.original["Parcel Id"]
      );
      if (parcelObj.editRequested) {
        return (
          <Link
            className="btn-theme icon-left no-shadow align-self-center my_parcel_update_button"
            to="#"
            role="button"
            data-toggle="modal"
            data-target="#request_review_popup"
            style={{
              background: "green",
              fontSize: "85%",
              fontFamily: "sans-serif",
            }}
            onClick={() => {
              // const parcelObj = myData.find(
              //   (parcel) => parcel.parcelId === row.original["Parcel Id"]
              // );
              this.props.setParcelObj(parcelObj);
            }}
          >
            <i className="icofont-tick-mark"></i> Review
          </Link>
        );
      } else {
        return (
          <Link
            className="btn-theme icon-left no-shadow align-self-center my_parcel_update_button"
            to="#"
            role="button"
            data-toggle="modal"
            data-target="#request_other_information_popup"
            style={{
              background: "#7d017d",
              fontSize: "85%",
              fontFamily: "sans-serif",
            }}
            onClick={() => {
              // const parcelObj = myData.find(
              //   (parcel) => parcel.parcelId === row.original["Parcel Id"]
              // );
              this.props.setParcelObj(parcelObj);
            }}
          >
            <i className="icofont-location-arrow"></i> Update
          </Link>
        );
      }
    } else {
      return "";
    }
  };

  render() {
    const { pageSize, myClass, multiSelectOption, pagination } = this.props;
    console.log(this.props);
    const { myData } = this.props;
    console.log(myData);
    const newData = [];
    if (myData.length > 0) {
      myData.forEach((parcel) => {
        //  this is not affecting my output see line 104
        newData.push({
          "Parcel Id": parcel.parcelId,
          "Lot No": parcel.lotNo,
          "Carton No": parcel.cartonNo,
          "Tracking No": parcel.trackingNo,
        });
      });
    }
    const columns = [];
    for (var key in newData[0]) {
      let editable = this.renderEditable;
      if (key == "image") {
        editable = null;
      }
      if (key == "status") {
        editable = null;
      }
      if (key === "avtar") {
        editable = null;
      }
      if (key === "vendor") {
        editable = null;
      }
      if (key === "order_status") {
        editable = null;
      }

      columns.push({
        Header: <b>{this.Capitalize(key.toString())}</b>,
        accessor: key,
        Cell: editable,
        style: {
          textAlign: "center",
        },
      });
    }
    columns.push(
      {
        Header: <b>Product Information</b>,
        id: "orderDetails",
        accessor: (str) => "orderDetails",
        Cell: (row) => (
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={
              <Popover
                id={`popover-positioned-bottom`}
                style={{ minWidth: "20%" }}
              >
                <Popover.Title
                  style={{ backgroundColor: "#13c9ca", color: "white" }}
                  as="h3"
                >{`Parcel Id: ${row.original["Parcel Id"]}`}</Popover.Title>
                <Popover.Content className="popover-body-container">
                  <div
                    style={{
                      paddingBottom: "10px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <div>
                      <h3>Product Information</h3>
                      <p
                        style={{
                          marginBottom: "0px",
                          borderBottom: "2px solid gainsboro",
                        }}
                      >
                        Product Name:&nbsp;
                        <span
                          style={{
                            color: "#13c9ca",
                            fontSize: "130%",
                            fontWeight: "bold",
                          }}
                        >
                          {myData.length > 0
                            ? myData.find(
                                (parcel) =>
                                  parcel.parcelId === row.original["Parcel Id"]
                              ).productName
                            : ""}
                        </span>
                      </p>
                      <p
                        style={{
                          marginBottom: "0px",
                          borderBottom: "2px solid gainsboro",
                        }}
                      >
                        Product Quantity:&nbsp;{" "}
                        <span
                          style={{
                            color: "#13c9ca",
                            fontSize: "130%",
                            fontWeight: "bold",
                          }}
                        >
                          {myData.length > 0
                            ? myData.find(
                                (parcel) =>
                                  parcel.parcelId === row.original["Parcel Id"]
                              ).quantity
                            : ""}
                        </span>
                      </p>
                      <p
                        style={{
                          marginBottom: "0px",
                          borderBottom: "2px solid gainsboro",
                        }}
                      >
                        Total CBM:&nbsp;{" "}
                        <span
                          style={{
                            color: "#13c9ca",
                            fontSize: "130%",
                            fontWeight: "bold",
                          }}
                        >
                          {myData.length > 0
                            ? myData.find(
                                (parcel) =>
                                  parcel.parcelId === row.original["Parcel Id"]
                              ).totalCbm
                            : ""}
                        </span>
                      </p>
                      <p
                        style={{
                          marginBottom: "0px",
                          borderBottom: "2px solid gainsboro",
                        }}
                      >
                        Total Weight:&nbsp;{" "}
                        <span
                          style={{
                            color: "#13c9ca",
                            fontSize: "130%",
                            fontWeight: "bold",
                          }}
                        >
                          {myData.length > 0
                            ? myData.find(
                                (parcel) =>
                                  parcel.parcelId === row.original["Parcel Id"]
                              ).grossWeight
                            : ""}
                          kg
                        </span>
                      </p>
                      <p
                        style={{
                          marginBottom: "0px",
                          borderBottom: "2px solid gainsboro",
                        }}
                      >
                        Chargeable Weight:&nbsp;{" "}
                        <span
                          style={{
                            color: "#13c9ca",
                            fontSize: "130%",
                            fontWeight: "bold",
                          }}
                        >
                          {myData.length > 0
                            ? Math.round(
                                myData.find(
                                  (parcel) =>
                                    parcel.parcelId ===
                                    row.original["Parcel Id"]
                                ).totalCbm * 167
                              )
                            : ""}
                          kg
                        </span>
                      </p>
                    </div>
                  </div>
                </Popover.Content>
              </Popover>
            }
          >
            <button className="btn btn-secondary">info</button>
          </OverlayTrigger>
        ),
        style: {
          textAlign: "center",
        },
        sortable: false,
      },
      {
        Header: <b>Additional Information</b>,
        id: "orderDetails",
        accessor: (str) => "orderDetails",
        Cell: (row) => (
          <>
            <ReviewModal />
            <OtherInformationModal />
            {this.renderButton(row, myData)}
          </>
        ),
        style: {
          textAlign: "center",
        },
        sortable: false,
      }
    );

    return (
      <Fragment>
        <ReactTable
          data={newData}
          columns={columns}
          defaultPageSize={pageSize}
          className={myClass}
          showPagination={pagination}
        />
        <ToastContainer />
      </Fragment>
    );
  }
}

export default connect(null, { setParcelObj })(Datatable);
