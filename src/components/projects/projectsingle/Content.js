import React from "react";

const Content = () => {
    return (
        <>
            <main id="body-content">
                <section className="wide-tb-80">
                    <div className="container pos-rel">
                        <div className="row align-items-center">
                            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                                <h2 className="mb-4 fw-7 txt-orange">
                                    Michale Warehouse Transportaion
                                </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat sodales mauris. Proin quis elit vel ligula rutrum bibendum. Aenean et orci hendrerit, consectetur nulla eu, viverra magna. In et ipsum.Fusce gravida quam non velit ornare bibendum. Etiam sit amet diam arcu.</p>

                                <p>Nunc tristique tellus quam, id ultrices urna rhoncus non. Cras rhoncus interdum arcu eget congue. Curabitur non justo velit. Proin vitae elit condimentum, tincidunt dui id, egestas orci. Curabitur feugiat enim ullamcorper faucibus sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat sodales mauris. Proin quis elit vel ligula rutrum bibendum. Aenean et orci hendrerit, consectetur nulla eu, viverra magna. In et ipsum.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-light-gray wide-tb-100 why-choose">
                    <div className="container pos-rel">
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-8 col-md-6">
                                <img src="images/blog_single.jpg" alt="" />
                            </div>
                            <div className="col-12 col-lg-4 col-md-6">
                                <div className="icon-box-2">
                                    <div className="media">
                                        <div className="service-inner-content media-body">
                                            <h4 className="h4-md">Porject Details </h4>
                                            <p><strong>Customer:</strong> Michale</p>
                                            <p><strong>Category:</strong> Warehouse Transportaion</p>
                                            <p><strong>Date:</strong> 22 Decmber, 2018</p>
                                            <p><strong>Status:</strong> Completed</p>
                                            <p><strong>Live Demo:</strong> <a href="#" className="link-oragne">www.wichalewarehouse.com <i className="icofont-external-link"></i></a></p>
                                            <p><strong>Tags:</strong> </p>
                                            <p><a href="#">Outstanding</a></p>
                                            <p><a href="#">Lifestyle</a></p>
                                            <div><a href="#">Travel</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="wide-tb-100 why-choose">
                    <div className="container">
                        <div id="js-grid-slider-team" className="cbp cbp-slider-edge">
                            <div className="cbp-item">
                                <div className="gallery-link">
                                    <a href="projectsingle" className="txt-white"><i className="icofont-external-link"></i></a>
                                </div>
                                <a href="projectsingle">
                                    <div className="cbp-caption-defaultWrap">
                                        <img src="images/portfolio/3col-9.jpg" alt="" />
                                    </div>
                                </a>
                            </div>
                            <div className="cbp-item">
                                <div className="gallery-link">
                                    <a href="projectsingle" className="txt-white"><i className="icofont-external-link"></i></a>
                                </div>
                                <a href="projectsingle">
                                    <div className="cbp-caption-defaultWrap">
                                        <img src="images/portfolio/3col-8.jpg" alt="" />
                                    </div>
                                </a>
                            </div>
                            <div className="cbp-item">
                                <div className="gallery-link">
                                    <a href="projectsingle" className="txt-white"><i className="icofont-external-link"></i></a>
                                </div>
                                <a href="projectsingle">
                                    <div className="cbp-caption-defaultWrap">
                                        <img src="images/portfolio/3col-7.jpg" alt="" />
                                    </div>
                                </a>
                            </div>
                            <div className="cbp-item">
                                <div className="gallery-link">
                                    <a href="projectsingle" className="txt-white"><i className="icofont-external-link"></i></a>
                                </div>
                                <a href="projectsingle">
                                    <div className="cbp-caption-defaultWrap">
                                        <img src="images/portfolio/3col-6.jpg" alt="" />
                                    </div>
                                </a>
                            </div>
                            <div className="cbp-item">
                                <div className="gallery-link">
                                    <a href="projectsingle" className="txt-white"><i className="icofont-external-link"></i></a>
                                </div>
                                <a href="projectsingle">
                                    <div className="cbp-caption-defaultWrap">
                                        <img src="images/portfolio/3col-5.jpg" alt="" />
                                    </div>
                                </a>
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
