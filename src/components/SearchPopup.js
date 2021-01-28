import React from "react";

const SearchPopup = () => {
    return (
        <>
            <div className="overlay overlay-hugeinc">
                <form className="form-inline mt-2 mt-md-0">
                    <div className="form-inner">
                        <div className="form-inner-div d-inline-flex align-items-center no-gutters">
                            <div className="col-md-1">
                                <i className="icofont-search"></i>
                            </div>
                            <div className="col-10">
                                <input className="form-control w-100 p-0" type="text" placeholder="Search" aria-label="Search" />
                            </div>
                            <div className="col-md-1">
                                <a href="#" className="overlay-close link-oragne"><i className="icofont-close-line"></i></a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};
export default SearchPopup;
