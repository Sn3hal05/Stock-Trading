import React from 'react'

const Universe = () => {
    return (
        <div className='container text-center my-5 py-5'>
            <h2>The Zerodha Universe</h2>
            <p className='text-muted mt-4'>Extend your trading and investment experience even further with our partner platforms</p>
            <img style={{width:"80%"}} src={process.env.PUBLIC_URL + "/media/images/zerodhaUniverse.png"}/>
            <br/>
            <button className='btn btn-primary px-4 fs-5'>Sign Up For Free</button>
        </div>
    )
}

export default Universe;