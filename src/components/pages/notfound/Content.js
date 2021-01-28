import React from "react";

const Content = () => {
    return (
        <>
            <main id="body-content">
                <section className="wide-tb-100">
                    <div className="container pos-rel">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 bg-light-gray rounded">
                                <div className="text-center p-5">
                                    <img src="images/404_img.png" alt="Nothing Found 404 Error" />
                                    <h3 className="h3-sm fw-6 txt-ligt-gray mb-4 mt-5">You may have mis-typed the URL. Or the page has been removed. <br />Actually, there is nothing to see here...</h3>
                                    <a href="#" className="mr-2 mb-3 btn-theme bg-navy-blue icon-left"><i className="icofont-home"></i> Back To Home</a>
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
