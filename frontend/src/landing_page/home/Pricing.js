import React from 'react';
import { FaArrowRight, FaBorderNone } from 'react-icons/fa';

const Pricing = () => { 
    return(
        <div className="container mb-5">
            <div className="row">
                <div className="col-4">
                    <h1 className=''>Unbeatable pricing</h1>
                    <p>We pioneer the concept of discount brokering and pass on the benefits to our clients. flat fees and no hidden costs.</p>
                    <a href="#" style={{textDecoration:'none'}}>See pricing<FaArrowRight/></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row text-center">
                        <div className="col p-3 border">
                            <h1 className='mb-3'>$0</h1>
                            <p>Free equity delivery and <br/> direct mutual funds</p>

                        </div>
                        <div className="col p-3 border">
                            <h1 className='mb-3'>$20</h1>
                            <p>Intraday and F&O</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Pricing;