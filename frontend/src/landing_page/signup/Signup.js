import React from "react";
import {Link} from 'react-router-dom';
import IN from 'country-flag-icons/react/3x2/IN';

const Signup = () => {
  return (
    <div className="container my-5" style={{width:"80%"}}>
      <div className="row text-center">
        <h3>Open a free demat and trading account online</h3>
        <p className="text-muted fs-5">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      <div className="row my-5">
        <div className="col-12 col-lg-6 text-center ">
          <img src="../media/images/signup.png" style={{ width: "80%" }} />
        </div>
        <div className="col-12 col-lg-6 mt-3">
          <h3>Signup now</h3>
          <p className="text-muted">Or track your existing application</p>
          <div className="input-group">
            <span className="input-group-text bg-white">
              <IN style={{ width: "20px", height: "15px" }} /> &nbsp; +91</span>
          <input pattern="[0-9]{10}" maxLength='10' className="form-control" type="tel"></input>
          </div>
          <br/>
          <button className='btn btn-primary px-5 fs-5'>Get OTP</button>
          <p className="text-muted fs-7 mt-3 ">By proceeding, you agree to the Zerodha <a href="#" className="text-decoration-none">terms & privacy policy</a></p>
          <hr/>
          <p>Looking to open NRI account? <Link className='text-decoration-none' to='#'>Click here</Link></p>
        </div>
      </div>
    </div>
  );
};
export default Signup;
