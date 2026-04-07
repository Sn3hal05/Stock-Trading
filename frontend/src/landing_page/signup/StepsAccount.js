import React from 'react';
import './signup.css';


const StepsAccount = () => {
    return (
        <>
            <div className='container-fluid bg-light py-5'>
                <div className="container d-flex flex-column align-items-center">
                    
                    <h3 className="text-center mb-4">
                        Steps to open a demat account with Zerodha
                    </h3>

                    <div className='row mt-4 w-100' style={{ maxWidth: "1100px" }}>
                        
                        {/* Image Section */}
                        <div className='col-12 col-lg-6 pe-lg-5 mb-4 mb-lg-0'>
                            <img 
                                src={process.env.PUBLIC_URL + '/media/images/steps-acop.svg'} 
                                className="img-fluid" 
                                alt="Steps to open account"
                            />
                        </div>

                        {/* Steps Section */}
                        <div className='col-12 col-lg-6 d-flex flex-column justify-content-center'>
                            
                            <div className='d-flex align-items-center mb-3'>
                                <span className="circle">1</span>
                                <p className="ms-3 mb-0">Enter the requested details</p>
                            </div>
                            <hr />

                            <div className='d-flex align-items-center mb-3'>
                                <span className="circle">2</span>
                                <p className="ms-3 mb-0">Complete e-sign & verification</p>
                            </div>
                            <hr />

                            <div className='d-flex align-items-center mb-3'>
                                <span className="circle">3</span>
                                <p className="ms-3 mb-0">Start investing!</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-7 text-center'>
                        <img
                        src={process.env.PUBLIC_URL + "/media/images/acop-benefits.svg"}
                        alt="Account benefits"
                        className='img-fluid w-75'
                        />

                    </div>
                    <div className='col-5'>
                        <h5>Unbeatable pricing</h5>
                        <p className='text-muted'>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>

                        <h5>Best investing experience</h5>
                        <p className='text-muted'>Simple and intuitive trading platform with an easy-to-understand user interface.</p>

                        <h5>No spam or gimmicks</h5>
                        <p className='text-muted'>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>

                        <h5>The Zerodha universe</h5>
                        <p className='text-muted'>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
                        
                    </div>

                </div>
                 
            </div>
        </>
    );
};

export default StepsAccount;