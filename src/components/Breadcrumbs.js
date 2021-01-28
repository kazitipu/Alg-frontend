import React from "react";
import { Link } from "react-router-dom";
const Breadcrumbs = (props) => {
  return (
    <>
      <div className="slider bg-navy-blue bg-scroll pos-rel breadcrumbs-page">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">
                  <i className="icofont-home"></i>
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="#">Pages</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {props.title}
              </li>
            </ol>
          </nav>

          <h1>{props.title}</h1>
        </div>
      </div>
    </>
  );
};
export default Breadcrumbs;
