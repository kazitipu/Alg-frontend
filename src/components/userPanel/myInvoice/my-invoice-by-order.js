import React, { Component, Fragment } from "react";
import Breadcrumb from "../common/breadcrumb";
import { connect } from "react-redux";
import "./css/invoice-by-order.css";
import Alg from "./alg.png";
import Paid from "./paid.png";
import { withRouter } from "react-router-dom";
export class MyInvoiceByOrder extends Component {
  handleClick = async () => {
    const { orderObj } = this.props;
    const { userObj } = this.state;
    if (userObj && orderObj) {
      const updatedOrder = await this.props.updateOrderAfterInvoiceRedux({
        ...orderObj,
        invoiceGenerated: true,
      });
      if (updatedOrder) {
        this.props.history.push(
          `${process.env.PUBLIC_URL}/invoice/${orderObj.shipmentMethod}-${orderObj.lotNo}`
        );
      }
    }
  };

  render() {
    const { orderObj, userObj } = this.props;
    let total;
    if (orderObj) {
      total = Math.round(
        parseInt(orderObj.grossWeight * orderObj.ratePerKg) +
          parseInt(
            orderObj.productsValue ? (orderObj.productsValue * 3) / 100 : 0
          ) +
          parseInt(orderObj.packagingCost) +
          parseInt(orderObj.localDeliveryCost)
      );
    }
    console.log(userObj);
    return (
      <Fragment>
        <Breadcrumb title="Invoice" parent="Invoice" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5>Invoice #{orderObj.parcelId}</h5>
                </div>
                <div
                  className="card-body"
                  style={{ backgroundColor: "#e4e3e1" }}
                >
                  <div id="basicScenario" className="product-list">
                    <div
                      id="container"
                      style={{ maxWidth: "1000px", borderRadius: ".2rem" }}
                    >
                      <section id="memo" style={{ height: "165px" }}>
                        <div className="logo">
                          <img
                            style={{ width: "70px", height: "70px" }}
                            src={Alg}
                          />
                        </div>

                        <div className="company-info">
                          <div>Alg Cargos & Logistics ltd</div>
                          <br />
                          <span>
                            37/2 Pritom-Zaman Tower, 10th Floor, suite 6A &nbsp;
                          </span>{" "}
                          <br />
                          <span>Culvert Road, Dhaka-1000. Bangladesh</span>
                          <br />
                          <span>Hotline: 8801736404419,</span>
                          <span>info@algcargos.com</span>
                        </div>
                      </section>

                      <section id="invoice-title-number">
                        <span id="title" style={{ backgroundColor: "#8a0368" }}>
                          INVOICE
                        </span>
                        <span id="number" style={{ fontSize: "200%" }}>
                          #{orderObj.parcelId}
                        </span>
                      </section>

                      <div className="clearfix"></div>

                      <section id="client-info">
                        <span>TO:</span>
                        <div>
                          <span className="bold">
                            {userObj ? userObj.displayName : null}
                          </span>
                        </div>
                        {userObj && userObj.address ? (
                          <div>
                            <span>{userObj.address}</span>
                          </div>
                        ) : null}
                        {userObj && userObj.city ? (
                          <div>
                            <span>{userObj.city}</span>
                          </div>
                        ) : null}

                        <div>
                          <span>{userObj && userObj.mobileNo}</span>
                        </div>

                        <div>
                          <span>{userObj && userObj.email}</span>
                        </div>
                      </section>

                      <div className="clearfix"></div>

                      <section id="items">
                        <table cellPadding="0" cellSpacing="0">
                          <tbody>
                            <tr>
                              <th>#</th>
                              <th style={{ maxWidth: "50px" }}>Product</th>
                              <th>Quantity</th>
                              <th>Price</th>
                              <th>CTN no</th>
                              <th>Tracking no</th>
                              <th>Weight</th>
                              <th>In Total</th>
                            </tr>

                            <tr data-iterate="item">
                              <td>1</td>
                              <td style={{ maxWidth: "50px" }}>
                                {orderObj && orderObj.productName}
                              </td>
                              <td>{orderObj && orderObj.quantity}</td>
                              <td>{orderObj && orderObj.ratePerKg}Tk</td>
                              <td>{orderObj && orderObj.cartonNo}</td>
                              <td>{orderObj && orderObj.trackingNo}</td>

                              <td>{orderObj && orderObj.grossWeight}</td>
                              <td>
                                {orderObj &&
                                  Math.round(
                                    orderObj.grossWeight * orderObj.ratePerKg
                                  )}
                                Tk
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </section>

                      <section id="sums">
                        <table cellPadding="0" cellSpacing="0">
                          <tbody>
                            <tr>
                              <th>Subtotal</th>
                              <td>
                                {orderObj &&
                                  Math.round(
                                    orderObj.grossWeight * orderObj.ratePerKg
                                  )}
                                Tk
                              </td>
                            </tr>

                            <tr data-iterate="tax">
                              <th>Packaging Charge</th>
                              <td>{orderObj && orderObj.packagingCost}Tk</td>
                            </tr>
                            <tr data-iterate="tax">
                              <th>Insurance</th>
                              <td>
                                {orderObj && orderObj.productsValue
                                  ? Math.round(
                                      (orderObj.productsValue * 3) / 100
                                    )
                                  : 0}
                                Tk
                              </td>
                            </tr>
                            <tr data-iterate="tax">
                              <th>Local Delivery</th>
                              <td>
                                {orderObj &&
                                  Math.round(orderObj.localDeliveryCost)}
                                Tk
                              </td>
                            </tr>
                            <tr className="amount-total">
                              <th>TOTAL</th>
                              <td>{total}tk</td>
                            </tr>

                            {/* <!-- You can use attribute data-hide-on-quote="true" to hide specific information on quotes.
               For example Invoicebus doesn't need amount paid and amount due on quotes  --> */}
                            <tr data-hide-on-quote="true">
                              <th>paid</th>
                              <td>
                                {orderObj && orderObj.paidAmount
                                  ? orderObj.paidAmount
                                  : 0}
                                Tk
                              </td>
                            </tr>

                            <tr data-hide-on-quote="true">
                              <th>AMOUNT DUE</th>
                              <td>
                                {total -
                                  (orderObj && orderObj.paidAmount
                                    ? orderObj.paidAmount
                                    : 0)}
                                tk
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <div className="clearfix"></div>
                      </section>

                      <div className="clearfix"></div>

                      <section id="invoice-info">
                        <div>
                          <span style={{ color: "#464242" }}>Created By</span>
                        </div>
                        <div>
                          <span>MD.Tipu</span>
                        </div>
                        <br />
                        <div>
                          <span style={{ color: "#464242" }}>Delivered By</span>
                        </div>
                        <div>
                          <span>Sagor</span>
                        </div>
                      </section>

                      <section id="terms">
                        <div className="notes">
                          <span
                            style={{ fontWeight: "bold", color: "darkorange" }}
                          >
                            {userObj && userObj.displayName}
                          </span>
                          , thank you very much.We really appreciate your
                          buisness. <br />
                          Pay through ALG wallet to get amazing discount.
                        </div>

                        <br />

                        <div className="payment-info">
                          <div>Packaging</div>
                          <div>
                            {orderObj && orderObj.packagingChosed
                              ? orderObj.packagingChosed
                              : "None"}
                          </div>
                          <br />
                          <div>Delivery Address</div>
                          <div>
                            {orderObj && orderObj.deliveryAddress
                              ? orderObj.deliveryAddress
                              : "Alg Office"}
                          </div>
                        </div>
                      </section>

                      <div className="clearfix"></div>

                      <div
                        className="thank-you"
                        style={{ backgroundColor: "#8a0368" }}
                      >
                        THANKS!
                      </div>

                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    backgroundColor: "#e4e3e1",
                    padding: "0px 20px 20px 0px",
                  }}
                >
                  {orderObj && orderObj.paid ? null : (
                    <button
                      className="btn btn-secondary"
                      onClick={this.handleClick}
                    >
                      Pay Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {orderObj && orderObj.paid ? (
          <div>
            <img
              style={{
                position: "absolute",
                height: "220px",
                width: "220px",
                top: "50%",
                left: "25%",
              }}
              src={Paid}
            ></img>
          </div>
        ) : null}
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userObj: state.currentUser.currentUser,
    orderObj: state.parcelObj.parcelObj,
  };
};
export default withRouter(connect(mapStateToProps, {})(MyInvoiceByOrder));
