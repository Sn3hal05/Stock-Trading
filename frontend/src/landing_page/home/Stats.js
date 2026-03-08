import React from "react";

const Stats = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1>Trust With Confidence</h1>
          <div>
            <h3>Customer-first always</h3>
            <p>
              That's why 1.3+ crore customers trust Zerodha with $3.5cr+ lakh
              crores worth of equity investments
            </p>
          </div>
          <div>
            <h3>No spam or gimmicks</h3>
            <h3>Customer-first always</h3>
            <p>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at pace, the way you like.
            </p>
          </div>
          <div>
            <h3>The Zerodha universe</h3>
            <p>
              Not just Zerodha, but a whole ecosystem of related products and
              services
            </p>
          </div>
          <div>
            <h3>Do better with Money</h3>
            <p>
              With initiatives likeNudge and Insights, we're building a future
              where you can do better with money, all the way.
            </p>
          </div>
        </div>
        <div className="col-6">
          <img
            src="../media/images/ecosystem.png"
            alt="Ecosystem"
            style={{ width: "80%" }}
          />
          <div>
            <a href="#">Explore our products</a>
            <a href="#">Try kite demo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
