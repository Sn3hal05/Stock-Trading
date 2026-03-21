import React from "react";

const Investment = () => {
  return (
<div className="container my-5 py-5" style={{width:"70%"}}>
      <h3 className="text-center">
        Investment options with Zerodha demat account
      </h3>
      <div className="row my-5">
        <div className="col-12 col-lg-6">
          <div className="row ">
            <div className="col-3">
              <img src="../media/images/stocks-acop.svg" />
            </div>
            <div className="col-9">
              <h4>Stocks</h4>
              <p>Invest in all exchange-listed securities</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="row">
            <div className="col-3">
              <img src="../media/images/mf-acop.svg" />
            </div>
            <div className="col-9">
                <h4>Mutual funds</h4>
              <p>Invest in commission-free direct mutual funds</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="row">
            <div className="col-3">
              <img src="../media/images/ipo-acop.svg" />
            </div>
            <div className="col-9">
                <h4>IPO</h4>
              <p>Apply to the latest IPOs instantly via UPI</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="row">
            <div className="col-3">
              <img src="../media/images/fo-acop.svg" />
            </div>
            <div className="col-9">
                <h4>Futures & options</h4>
              <p>Hedge and mitigate market risk through simplified F&O trading</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" container text-center my-5"> 
      <button className='btn btn-primary px-3 mx-5 fs-5'>Explore Investments</button>
      </div>
</div>
  );
};

export default Investment;
