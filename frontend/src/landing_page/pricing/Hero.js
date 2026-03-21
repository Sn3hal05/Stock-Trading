import React from 'react';

const Hero = () => {
    return (
        <div className="container text-center my-5 py-5">
            <h2>Charges</h2>
            <p className='text-muted'>List of all charges and taxes</p>
            <div className='row my-5'>
                <div className="col-12 col-lg-4 pe-5">
                    <img src="../media/images/pricingMF.svg" style={{width:"70%"}}/>
                    <h1 className='fs-3'>Free equity delivery</h1>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-12 col-lg-4 pe-5">
                    <img src="../media/images/intradayTrades.svg" style={{width:"70%"}}/>
                    <h1 className='fs-3'>Intraday and F&O trades</h1>
                    <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-12 col-lg-4 pe-5">
                    <img src="../media/images/pricingMF.svg" style={{width:"70%"}}/>
                    <h1 className='fs-3'>Free direct MF</h1>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>

            </div>
        </div>
    )
}

export default Hero;