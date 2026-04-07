import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const LeftSection = ({
  imageURL,
  productName,
  productDesc,
  tryDemo,
  learnMore,
}) => {
  return (
    <div className="container my-3" style={{width:"80%"}}> 
      <div className="row align-items-center">
        <div className="col-12 col-lg-8 text-center">
          <img src={imageURL} alt="Product 1" />
        </div>

        <div className="col-12 col-lg-4 my-5">
          <h3>{productName}</h3>
          <p className="fs-6">{productDesc}</p>

          <p>
            { tryDemo && (
            <Link className="text-decoration-none" to="#">
              {tryDemo}
              <FiArrowRight />
            </Link> 
  )}
  
  { learnMore && (
            <Link className="text-decoration-none" to="#">
              {learnMore}
              <FiArrowRight />
            </Link> 
  )}
  </p>
          <div className="row mt-4">
            <div className="col">
              <img
                src={process.env.PUBLIC_URL + "/media/images/googleplayBadge.svg"}
                alt="Product 1"
                style={{ width: "150px" }}
              />
            </div>
            <div className="col">
              <img
                src={process.env.PUBLIC_URL + "/media/images/appstoreBadge.svg"}
                alt="Product 1"
                style={{ width: "140px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
