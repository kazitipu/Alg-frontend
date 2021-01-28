import React from "react";

const EmailSubscribe = () => {
    return (
        <>
            <section className="wide-tb-50 pb-0 bg-sky-blue footer-subscribe">
                <div className="container ">
                    <div className="row">
                        <div className="col-sm-12 d-flex col-md-12 col-lg-6 offset-lg-3">
                            <div className="d- align-items-center d-sm-inline-flex  w-100">
                                <div className="head">
                                    <span className="d-block">SUBSCRIBE For</span> NEWSLETTER
                                </div>
                                <form className="flex-nowrap col ml-auto">
                                    <input type="text" className="form-control" placeholder="Enter order number" />
                                    <button type="button" className="btn btn-theme bg-navy-blue">Check Now <i className="icofont-envelope"></i></button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};
export default EmailSubscribe;
