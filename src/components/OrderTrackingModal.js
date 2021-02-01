import React from "react";

const OrderTrackingModal = () => {
    return (
        <>
            <div className="modal fade" id="request_order_tracking_popup" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered request_popup" role="document">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <section className="pos-rel bg-light-gray">
                                <div className="container-fluid p-0">
                                    <a href="#" className="close" data-dismiss="modal" aria-label="Close">
                                        <i className="icofont-close-line"></i>
                                    </a>
                                    <div className="d-lg-flex justify-content-end no-gutters mb-spacer-md" style={{ boxShadow: "0px 18px 76px 0px rgba(0, 0, 0, 0.06)" }}>
                                        <div className="col bg-fixed order-tracking-bg request_pag_img">
                                            &nbsp;
                                        </div>


                                        <div className="col-md-7 col-12">
                                            <div className="px-3 m-5">
                                                <h2 className="h2-xl mb-4 fw-6" style={{color:'orange',fontWeight:'bolder'}}>Track your order</h2>
                                                <form action="#" method="post" noValidate="novalidate" className="rounded-field">

                                                    <div className="form-row mb-4">
                                                        <div className="col"> <span><i className="icofont-tick-boxed" style={{color:'purple',marginRight:'3px',fontSize:'130%',fontWeight:'bold'}}></i></span>
                                                        চায়না, ইন্ডিয়া, থাইল্যান্ড ও দুবাই আপনি আপনার পার্সেল যে দেশের কুরিয়ার কোম্পানির মাধ্যমে আমদের ঠিকানায় পাঠাবেন, সে দেশের সেই কুরিয়ার নাম্বারই আমদের ট্রাকিং নাম্বার হিসেবে গ্রহন যোগ্য হবে।
উদাহরণ ; (ট্রাকিং নাম্বার 638292882 যদি কোন রেজাল্ট না দেখায় তাহলে কুরিয়ার কম্পানির কোড সহকারে অনুসন্ধান করুন, SF638297383)
                                                        </div>
                                                        <div className="col"><span><i className="icofont-tick-boxed" style={{color:'purple',marginRight:'3px',fontSize:'130%',fontWeight:'bold'}}></i></span>
                                                        যদি লজিস্টিক বা লোকাল ট্রাক, ভ্যান এর মাধ্যমে আমাদের ওয়্যারহাউজে পার্সেল পাঠানো হয় তাহলে, আমাদের ওয়্যারহাউজ থেকে পার্সেল রিসিভের যে রিসিট দেয়া হবে সেই রিসিটের নাম্বারই আপনার ট্রাকিং নাম্বার।
উদাহরণ ; ( রিসিভিং রিসিটের উপরের নাম্বার 637278 তাহলে ধরে নিবেন সেটাই আপনার ট্রাকিং নাম্বার)
                                                        </div>
                                                    </div>
                                                    <div className="form-row mb-4">
                                                        <div className="col"><span><i className="icofont-tick-boxed" style={{color:'purple',marginRight:'3px',fontSize:'130%',fontWeight:'bold'}}></i></span>
                                                        যদি তার পরে ও আপনার পন্যটি ট্রাকিং করতে না পারেন তাহলে আপনার আইডিতে ডুকে (MY PARCEL) এ চেক করুন।
                                                        </div>
                                                        <div className="col"><span><i className="icofont-tick-boxed" style={{color:'purple',marginRight:'3px',fontSize:'130%',fontWeight:'bold'}}></i></span>
                                                        যদি উপরের পদ্ধতি অবলম্বন করার পরে ও পার্সেলের কোন হদিস না পাওয়া যায় তাহলে, আমাদের দায়িত্বরত কাউকে বিষয়টি অবগত করুন ইনশাআল্লাহ ২ ঘন্টার মধ্যেই আপনি আপনার পন্যের সঠিক অবস্থান জানতে পারবেন।
                                                        </div>
                                                    </div>
                                                    {/* <div className="form-row mb-4">
                                                        <div className="col">
                                                            <input type="text" name="name" className="form-control" placeholder="Total gross weight (KG)" />
                                                        </div>
                                                        <div className="col">
                                                            <input type="text" name="email" className="form-control" placeholder="Dimension" />
                                                        </div>
                                                    </div> */}

                                                    <div className="form-row">
                                                        <div className="col">
                                                            <div className="center-head"><span className="bg-light-gray txt-orange">Your tracking No</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="form-row mb-3">
                                                        <div className="col">
                                                            <input type="text" name="name" className="form-control" placeholder="Enter your tracking no" />
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="col">
                                                            <button type="submit" className="form-btn btn-theme bg-orange">Track order <i className="icofont-rounded-right"></i></button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default OrderTrackingModal;
