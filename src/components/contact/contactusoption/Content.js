import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <>
      <main id="body-content">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1481.1892641960144!2d90.41071277762568!3d23.733607426693027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f607928051%3A0xf8d2f4910a109a85!2sZAMAN%20TOWER!5e0!3m2!1sen!2sbd!4v1611807985092!5m2!1sen!2sbd"
            width="100%"
            height="450"
            frameborder="0"
            style={{ border: "0" }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <section className="wide-tb-100 pos-rel">
          <div className="container">
            <div className="contact-map-bg option">
              <img src="images/map-bg.png" alt="" />
            </div>
            <div className="row">
              <div className="col-md-4">
                <h2 className="h2-md mb-4 fw-7 txt-blue">Our Address</h2>
                <div className="contact-detail-shadow no-shadow mb-5 s">
                  <h4>China (GZ)</h4>
                  <div className="d-flex align-items-start items">
                    <i className="icofont-google-map"></i>
                    <span>
                      Warehouse 107, 16 center lane Zoumagang District,
                      Guangzhou China
                    </span>
                  </div>
                  <div className="d-flex align-items-start items">
                    <i className="icofont-phone"></i>
                    <span>+8618520393085</span>
                  </div>
                  <div className="text-nowrap d-flex align-items-start items">
                    <i className="icofont-email"></i>
                    <Link to="#">gzcn@algcargos.com</Link>
                  </div>
                </div>
                <div className="contact-detail-shadow no-shadow s">
                  <h4>Bangladesh</h4>
                  <div className="d-flex align-items-start items">
                    <i className="icofont-google-map"></i>
                    <span>
                      37/2 Pritom-Zaman Tower, 10th Floor, suite 6A, Culvert
                      Road, Dhaka-1000. Bangladesh
                    </span>
                  </div>
                  <div className="d-flex align-items-start items">
                    <i className="icofont-phone"></i>
                    <span>8801736404419</span>
                  </div>
                  <div className="text-nowrap d-flex align-items-start items">
                    <i className="icofont-email"></i>
                    <Link to="#">info@algcargos.com</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-sm-12">
                <h2 className="h2-md mb-4 fw-7 txt-blue">
                  Say Hello! Its Free
                </h2>
                <div className="">
                  <div className="free-quote-form contact-page-option ">
                    <form
                      action="#"
                      method="post"
                      id="contactoption"
                      noValidate="novalidate"
                      className="rounded-field"
                    >
                      <div className="form-row mb-4">
                        <div className="col">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="form-row mb-4">
                        <div className="col">
                          <select
                            title="Please choose a package"
                            required=""
                            name="Transport_Package"
                            id="Transport_Package"
                            className="custom-select"
                            aria-required="true"
                            aria-invalid="false"
                          >
                            <option value="">Transport Type</option>
                            <option value="Type 1">Type 1</option>
                            <option value="Type 2">Type 2</option>
                            <option value="Type 3">Type 3</option>
                            <option value="Type 4">Type 4</option>
                          </select>
                        </div>
                        <div className="col">
                          <select
                            title="Please choose a package"
                            required=""
                            name="Freight_Package"
                            id="Freight_Package"
                            className="custom-select"
                            aria-required="true"
                            aria-invalid="false"
                          >
                            <option value="">Type of freight</option>
                            <option value="Type 1">Type 1</option>
                            <option value="Type 2">Type 2</option>
                            <option value="Type 3">Type 3</option>
                            <option value="Type 4">Type 4</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row mb-4">
                        <div className="col">
                          <textarea
                            name="cment"
                            rows="7"
                            placeholder="Message"
                            className="form-control"
                          ></textarea>
                        </div>
                      </div>
                      <div className="form-row text-center">
                        <button
                          name="contactoption"
                          id="contactoption"
                          type="button"
                          className="form-btn mx-auto btn-theme bg-orange"
                        >
                          Submit Now <i className="icofont-rounded-right"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Content;
