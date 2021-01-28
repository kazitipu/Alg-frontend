import React from "react";

const Content = () => {
    return (
        <>
            <main id="body-content">
                <section className="wide-tb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1 className="heading-main">
                                    <span>Pick the </span>
                                    Best Plan
                                </h1>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="pricing-table">
                                    <div className="txt-blue fw-6">Starter</div>
                                    <div className="service-icon mx-auto">
                                        <i className="icofont-briefcase-1"></i>
                                    </div>
                                    <div className="pricing">
                                        10<sup>$</sup>
                                    </div>
                                    <ul className="list-unstyled">
                                        <li><strong>10GB</strong> Disk Space</li>
                                        <li><strong>100GB</strong> Monthly Bandwidth</li>
                                        <li><strong>20</strong> Email Accounts</li>
                                        <li><strong>Unlimited</strong> subdomains</li>
                                    </ul>
                                    <a href="#" className="btn-theme bg-orange">Signup Now</a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="pricing-table best-seller">
                                    <div className="txt-blue fw-6">Professional</div>
                                    <div className="service-icon mx-auto">
                                        <i className="icofont-headphone-alt-3"></i>
                                    </div>
                                    <div className="pricing">
                                        40<sup>$</sup>
                                    </div>
                                    <ul className="list-unstyled">
                                        <li><strong>Unlimited</strong> Disk Space</li>
                                        <li><strong>Unlimited</strong> Monthly Bandwidth</li>
                                        <li><strong>Unlimited</strong> Email Accounts</li>
                                        <li><strong>Unlimited</strong> subdomains</li>
                                    </ul>
                                    <a href="#" className="btn-theme bg-navy-blue">Signup Now</a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="pricing-table">
                                    <div className="txt-blue fw-6">Basic</div>
                                    <div className="service-icon mx-auto">
                                        <i className="icofont-paint"></i>
                                    </div>
                                    <div className="pricing">
                                        20<sup>$</sup>
                                    </div>
                                    <ul className="list-unstyled">
                                        <li><strong>2GB </strong> Disk Space</li>
                                        <li><strong>25GB</strong> Monthly Bandwidth</li>
                                        <li><strong>5</strong> Email Accounts</li>
                                        <li><strong>Unlimited</strong> subdomains</li>
                                    </ul>
                                    <a href="#" className="btn-theme bg-orange">Signup Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center mt-5 pt-4">
                            <div className="col-sm-8 offset-md-2">
                                <h3 className="h3-xl">Still! <span className="lead">Troubles with Pricing?</span></h3>
                                <p className="mt-4">Vivamus imperdiet pulvinar risus, at posuere justo scelerisque sed. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
                                <a href="#" className="btn-theme bg-orange mt-2">Chat Support <i className="icofont-rounded-right"></i></a>
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
                                <div className="px-5 wide-tb-100" style={{position: "relative", zIndex: "999"}}>
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
