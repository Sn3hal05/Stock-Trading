import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Stats = () => {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-5 p-5">
          <h1 className='fs-2 mb-5'>Trust With Confidence</h1>
          
            <h3 className='fs-4'>Customer-first always</h3>
            <p className="text-muted " >
              That's why 1.3+ crore customers trust Zerodha with $3.5cr+ lakh
              crores worth of equity investments
            </p>
          
            <h3 className='fs-4'>No spam or gimmicks</h3>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at pace, the way you like.
            </p>
        
            <h3 className='fs-4'>The Zh3odha universe</h3>
            <p className="text-muted">
              Not just Zerodha, but a whole ecosystem of related products and
              services
            </p>
          
            <h3 className='fs-4'>Do better with Money</h3>
            <p className="text-muted">
              With initiatives likeNudge and Insights, we're building a future
              where you can do better with money, all the way.
            </p>
        </div>
          
        <div className="col-7 p-5">
          <img
            src="../media/images/ecosystem.png"
            alt="Ecosystem"
            style={{ width: "90%" }}
          />
          <div className="text-center">
            <a href="#" className="mx-5" style={{textDecoration:"none"}}>Explore our products<FaArrowRight/></a>
            <a href="#" className="mx-5" style={{textDecoration:"none"}}>Try kite demo<FaArrowRight/></a>
          </div>
        </div>
      
    </div>
    </div>
  );
};

export default Stats;
