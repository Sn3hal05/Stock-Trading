import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="container text-center my-5 py-5 border-bottom">
      <h2 className="mb-3">Zerodha Products</h2>

      <p className="fs-5 mb-3">
        Sleek, modern, and intuitive trading platforms
      </p>

      <p className="mb-5">
        Check out our{" "}
        <a href="#" className="text-primary text-decoration-none">
          investment offerings <FiArrowRight />
        </a>
      </p>
    </div>
  );
};

export default Hero;