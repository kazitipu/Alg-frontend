import React, { Component, Fragment } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import "./myBookingDatatable.css";
export class Datatable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedValues: [],
      myData: this.props.myData,
    };
  }

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

  handleRemoveRow = () => {
    const selectedValues = this.state.checkedValues;
    const updatedData = this.state.myData.filter(function (el) {
      return selectedValues.indexOf(el.id) < 0;
    });
    this.setState({
      myData: updatedData,
    });
    toast.success("Successfully Deleted !");
  };

  renderEditable = (cellInfo) => {
    const { myData } = this.props;
    if (myData.length > 0) {
      const newData = [];
      myData.forEach((booking) => {
        //  this is not affecting my output see line 104
        newData.push({
          "Booking Id": booking.bookingId,
          "Shipment Method": booking.bookingObj.shipmentMethod,
          Date: booking.bookingObj.date,
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

  renderProductName = (array, row) => {
    if (array.length > 0) {
      const bookingObj = array.find(
        (booking) => booking.bookingId === row.original["Booking Id"]
      ).bookingObj;
      if (row.original["Shipment Method"] == "D2D") {
        return bookingObj.productType;
      } else {
        return bookingObj.productName;
      }
    } else {
      return "";
    }
  };

  renderOtherInformation = (array, row) => {
    if (array.length > 0) {
      const bookingObj = array.find(
        (booking) => booking.bookingId === row.original["Booking Id"]
      ).bookingObj;
      if (row.original["Shipment Method"] == "D2D") {
        return (
          <div>
            <h3>Other Information</h3>
            <p style={{ marginBottom: "0px" }}>
              Ship By:&nbsp;
              <span style={{ color: "rgb(18 201 202)", fontSize: "130%" }}>
                {bookingObj.shipBy}
              </span>
            </p>
            <p style={{ marginBottom: "0px" }}>
              Ship From:&nbsp;
              <span style={{ color: "rgb(18 201 202)", fontSize: "130%" }}>
                {bookingObj.shipFrom}
              </span>
            </p>
            <p style={{ marginBottom: "0px" }}>
              Total Weight:&nbsp;
              <span style={{ color: "rgb(18 201 202)", fontSize: "130%" }}>
                {bookingObj.weight}
                kg ({bookingObj.perKg}tk/kg)
              </span>
            </p>
            <p style={{ marginBottom: "0px" }}>
              Total Cost:&nbsp;
              <span style={{ color: "rgb(18 201 202)", fontSize: "130%" }}>
                {bookingObj.result}
                tk
              </span>
            </p>
          </div>
        );
      }
      if (row.original["Shipment Method"] == "Express") {
        return (
          <div>
            <h3>Other Information</h3>
            <p style={{ marginBottom: "0px" }}>
              Parcel To:&nbsp;
              <span style={{ color: "rgb(18 201 202)", fontSize: "130%" }}>
                {bookingObj.parcelTo}
              </span>
            </p>
            <p style={{ marginBottom: "0px" }}>
              Parcel Type:&nbsp;
              <span style={{ color: "rgb(18 201 202)", fontSize: "130%" }}>
                {bookingObj.parcelType}
              </span>
            </p>
            <p style={{ marginBottom: "0px" }}>
              Parcel Box:&nbsp;
              <span style={{ color: "rgb(18 201 202)", fontSize: "130%" }}>
                {bookingObj.parcelBox}
              </span>
            </p>
            <p style={{ marginBottom: "0px" }}>
              Total Cost:&nbsp;
              <span style={{ color: "rgb(18 201 202)", fontSize: "130%" }}>
                {bookingObj.total}
              </span>
            </p>
          </div>
        );
      }
      if (row.original["Shipment Method"] == "Freight") {
        return (
          <div>
            <h3>Other Information</h3>
            <p style={{ marginBottom: "0px" }}>
              Ship By:&nbsp;
              <span style={{ color: "rgb(18 201 202)", fontSize: "130%" }}>
                {bookingObj.shipBy}
              </span>
            </p>
            <p style={{ marginBottom: "0px" }}>
              Ship From:&nbsp;
              <span style={{ color: "rgb(18 201 202)", fontSize: "130%" }}>
                {bookingObj.shipFrom}
              </span>
            </p>
            <p style={{ marginBottom: "0px" }}>
              Total Weight:&nbsp;
              <span style={{ color: "rgb(18 201 202)", fontSize: "130%" }}>
                {bookingObj.totalWeight}
                kg
              </span>
            </p>
            <p style={{ marginBottom: "0px" }}>
              Chargeable Weight:&nbsp;
              <span style={{ color: "rgb(18 201 202)", fontSize: "130%" }}>
                {bookingObj.chargeableWeight}
                kg
              </span>
            </p>
          </div>
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
      myData.forEach((booking) => {
        newData.push({
          "Booking Id": booking.bookingId,
          "Shipment Method": booking.bookingObj.shipmentMethod,
          Date: booking.bookingObj.date,
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
        Header: <b>Booking Details</b>,
        id: "orderDetails",
        accessor: (str) => "orderDetails",
        Cell: (row) => (
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={
              <Popover
                id={`popover-positioned-bottom`}
                style={{ minWidth: "35%" }}
              >
                <Popover.Title
                  style={{ backgroundColor: "#ff8084", color: "white" }}
                  as="h3"
                >{`Booking Id: ${row.original["Booking Id"]}`}</Popover.Title>
                <Popover.Content className="popover-body-container">
                  <div
                    style={{
                      paddingBottom: "10px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      borderBottom: "2px solid gainsboro",
                    }}
                  >
                    <div>
                      <h3>Product Information</h3>
                      <p style={{ marginBottom: "0px" }}>
                        Product Name:&nbsp;
                        <span style={{ color: "#ff8084", fontSize: "130%" }}>
                          {/* {myData.length > 0
                              ?myData.find(
                                  (booking) => booking.bookingIid === row.original['Booking Id']
                                ).bookingObj.productType
                              : ""} */}
                          {this.renderProductName(myData, row)}
                        </span>
                      </p>
                      <p style={{ marginBottom: "0px" }}>
                        Brand/Non-Brand:&nbsp;{" "}
                        <span style={{ color: "#ff8084", fontSize: "130%" }}>
                          {myData.length > 0
                            ? myData.find(
                                (booking) =>
                                  booking.bookingId ===
                                  row.original["Booking Id"]
                              ).bookingObj.productBrand
                            : ""}
                        </span>
                      </p>
                      <p style={{ marginBottom: "0px" }}>
                        Product Contains:&nbsp;{" "}
                        <span style={{ color: "#ff8084", fontSize: "130%" }}>
                          {myData.length > 0
                            ? myData.find(
                                (booking) =>
                                  booking.bookingId ===
                                  row.original["Booking Id"]
                              ).bookingObj.productContains
                            : ""}
                        </span>
                      </p>
                    </div>
                    <div
                      style={{
                        minHeight: "100%",
                        borderRight: "2px solid gainsboro",
                      }}
                    ></div>
                    {this.renderOtherInformation(myData, row)}
                  </div>
                  {/* <div style={{ marginTop: "20px" }}>
                   
                  </div> */}
                </Popover.Content>
              </Popover>
            }
          >
            <button className="btn btn-primary">show</button>
          </OverlayTrigger>
        ),
        style: {
          textAlign: "center",
        },
        sortable: false,
      },
      {
        Header: <b>Booking Status</b>,
        id: "orderDetails",
        accessor: (str) => "orderDetails",
        Cell: (row) => (
          <>
            {myData.length > 0 ? (
              <button
                className={`btn ${
                  myData.find(
                    (booking) => booking.bookingId == row.original["Booking Id"]
                  ).bookingObj.bookingStatus == "Pending"
                    ? "btn-secondary"
                    : "btn-success"
                }`}
              >
                {
                  myData.find(
                    (booking) => booking.bookingId == row.original["Booking Id"]
                  ).bookingObj.bookingStatus
                }
              </button>
            ) : (
              ""
            )}
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

export default Datatable;
