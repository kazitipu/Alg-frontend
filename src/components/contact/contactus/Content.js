import React from "react";

const Content = () => {
    return (
        <>
            <main id="body-content">
                <section className="wide-tb-80 contact-full-shadow">
                    <div className="container">
                        <div className="contact-map-bg">
                            <img src="images/map-bg.png" alt="" />
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-md-6 col-sm-12 col-lg-4 s">
                                <div className="contact-detail-shadow">
                                    <h4>Germany</h4>
                                    <div className="d-flex align-items-start items">
                                        <i className="icofont-google-map"></i> <span>Envato Pty Ltd, 13/2 Elizabeth
St Melbourne VIC 3000, Australia</span>
                                    </div>
                                    <div className="d-flex align-items-start items">
                                        <i className="icofont-phone"></i> <span>+1 (408) 786 - 5117</span>
                                    </div>
                                    <div className="text-nowrap d-flex align-items-start items">
                                        <i className="icofont-email"></i> <a href="#">germany@logzee.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 col-lg-4 ">
                                <div className="contact-detail-shadow">
                                    <h4>Spain</h4>
                                    <div className="d-flex align-items-start items">
                                        <i className="icofont-google-map"></i> <span>Envato Pty Ltd, 13/2 Elizabeth
St Melbourne VIC 3000, Australia</span>
                                    </div>
                                    <div className="d-flex align-items-start items">
                                        <i className="icofont-phone"></i> <span>+1 (408) 786 - 5117</span>
                                    </div>
                                    <div className="text-nowrap d-flex align-items-start items">
                                        <i className="icofont-email"></i> <a href="#">spain@logzee.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="wide-tb-100 bg-light-gray pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-lg-8 offset-lg-2 ">
                                <div className="free-quote-form contact-page">
                                    <h1 className="heading-main mb-4">
                                        Get in touch
                                    </h1>
                                    <form action="#" method="post" id="contactusForm" noValidate="novalidate" className="col rounded-field">
                                        <div className="form-row mb-4">
                                            <div className="col">
                                                <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" />
                                            </div>
                                            <div className="col">
                                                <input type="text" name="email" id="email" className="form-control" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="form-row mb-4">
                                            <div className="col">
                                                <select title="Please choose a package" required="" name="Transport_Package" id="Transport_Package" className="custom-select" aria-required="true" aria-invalid="false">
                                                    <option value="">Transport Type</option>
                                                    <option value="Type 1">Type 1</option>
                                                    <option value="Type 2">Type 2</option>
                                                    <option value="Type 3">Type 3</option>
                                                    <option value="Type 4">Type 4</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <select title="Please choose a package" required="" name="Freight_Package" id="Freight_Package" className="custom-select" aria-required="true" aria-invalid="false">
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
                                                <textarea rows="7" name="cment" id="cment" placeholder="Message" className="form-control"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-row text-center">
                                            <button name="contactForm" id="contactForm" type="button" className="form-btn mx-auto btn-theme bg-orange">Submit Now <i className="icofont-rounded-right"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="map-bg">
                    <div id="map-holder" className="pos-rel">
                        <div id="map_extended">
                            <p>This will be replaced with the Google Map.</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};
export default Content;
