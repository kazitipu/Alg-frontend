import React from "react";

const Content = () => {
    return (
        <>
            <main id="body-content">
                <section className="pos-rel bg-sky-blue">
                    <div className="container-fluid p-0">
                        <div className="d-lg-flex justify-content-end no-gutters mb-spacer-md" style={{ boxShadow: "0px 18px 76px 0px rgba(0, 0, 0, 0.06)" }}>
                            <div className="col-md-12 col-lg-5 bg-fixed bg-img-8 request_pag_img">
                                &nbsp;
                            </div>
                            <div className="col-md-12 col-lg-7 col-sm-12">
                                <div className="wide-tb-90">
                                    <div className="col-sm-10 offset-md-1 col-md-10 col-lg-8">
                                        <h2 className="h2-sm mb-4 fw-7 txt-blue">Request A Quote</h2>
                                        <form action="#" method="post" noValidate="novalidate" className="rounded-field">
                                            <div className="form-row mb-4">
                                                <div className="col">
                                                    <select title="Please choose a package" required="" name="package" className="custom-select" aria-required="true" aria-invalid="false">
                                                        <option value="">Freight Type</option>
                                                        <option value="Type 1">Type 1</option>
                                                        <option value="Type 2">Type 2</option>
                                                        <option value="Type 3">Type 3</option>
                                                        <option value="Type 4">Type 4</option>
                                                    </select>
                                                </div>
                                                <div className="col">
                                                    <select title="Please choose a package" required="" name="package" className="custom-select" aria-required="true" aria-invalid="false">
                                                        <option value="">Incoterms</option>
                                                        <option value="Type 1">Type 1</option>
                                                        <option value="Type 2">Type 2</option>
                                                        <option value="Type 3">Type 3</option>
                                                        <option value="Type 4">Type 4</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-row mb-4">
                                                <div className="col">
                                                    <input type="text" name="name" className="form-control" placeholder="City of departure" />
                                                </div>
                                                <div className="col">
                                                    <input type="text" name="email" className="form-control" placeholder="Delivery city" />
                                                </div>
                                            </div>
                                            <div className="form-row mb-4">
                                                <div className="col">
                                                    <input type="text" name="name" className="form-control" placeholder="Total gross weight (KG)" />
                                                </div>
                                                <div className="col">
                                                    <input type="text" name="email" className="form-control" placeholder="Dimension" />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col">
                                                    <div className="center-head"><span className="bg-sky-blue txt-orange">Your Personal Details</span></div>
                                                </div>
                                            </div>
                                            <div className="form-row mb-4">
                                                <div className="col">
                                                    <input type="text" name="name" className="form-control mb-3" placeholder="Your Name" />
                                                    <input type="text" name="name" className="form-control mb-3" placeholder="Email" />
                                                    <input type="text" name="name" className="form-control" placeholder="Phone Number" />
                                                </div>
                                                <div className="col">
                                                    <textarea rows="7" placeholder="Message" className="form-control"></textarea>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col pt-3">
                                                    <button type="submit" className="form-btn btn-theme bg-orange">Send Message <i className="icofont-rounded-right"></i></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-light-gray">
                    <div className="container-fluid p-0">
                        <div className="row align-items-center no-gutters">
                            <div className="col-lg-4 text-center">
                                <div className="px-5 wide-tb-100">
                                    <div className="service-icon mx-auto mb-5 icon-box-5">
                                        <i className="icofont-glass"></i>
                                    </div>
                                    <h4 className="h4-md fw-7 txt-blue">SAFE & SECURE</h4>
                                    Nunc non mollis nulla. Sed tconsectetur elit id mi consectetur bibendum.
                                </div>
                            </div>
                            <div className="col-lg-4 text-center bg-fixed clients-bg pos-rel txt-white">
                                <div className="bg-overlay black opacity-40"></div>
                                <div className="px-5 wide-tb-100" style={{ position: "relative", zIndex: "999" }}>
                                    <div className="service-icon mx-auto mb-5 icon-box-5">
                                        <i className="icofont-delivery-time"></i>
                                    </div>
                                    <h4 className="h4-md fw-7">FAST DELIVERY</h4>
                                    Nunc non mollis nulla. Sed tconsectetur elit id mi consectetur bibendum.
                                </div>
                            </div>
                            <div className="col-lg-4 text-center">
                                <div className="px-5 wide-tb-100">
                                    <div className="service-icon mx-auto mb-5 icon-box-5">
                                        <i className="icofont-live-support"></i>
                                    </div>
                                    <h4 className="h4-md fw-7 txt-blue">24/7 Support</h4>
                                    Nunc non mollis nulla. Sed tconsectetur elit id mi consectetur bibendum.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="wide-tb-80 bg-scroll bg-img-6 pos-rel callout-style-1">
                    <div className="bg-overlay blue opacity-60"></div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-12 mb-0">
                                <h4 className="h4-xl">Interested in working with Logzee?</h4>
                            </div>
                            <div className="col">
                                <div className="center-text">
                                    We don’t just manage suppliers, we micro-manage them. We have a consultative, personalized approach
                                </div>
                            </div>
                            <div className="col-sm-auto">
                                <a href="#" className="btn btn-theme bg-white bordered">Get In Touch <i className="icofont-rounded-right"></i></a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};
export default Content;
