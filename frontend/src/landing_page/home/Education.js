import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Education = () => {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-6">
          <img src='../Media/images/education.svg' alt='education' style={{width:'70%'}}/>
        </div>
        <div className="col-6 mt-5 p-5">
          <h1 className='fs-2 mb-3'>Free and open market education</h1>
          <div className='mb-3'>
          <p>Varsity the largest online stocj market education book in the world covering everything from the basics to advance trading</p>
          <a href='#' style={{ textDecoration: 'none' }}>Versity<FaArrowRight/></a>
          </div>
          <div>
          <p>Trading Q&A, the most active trading and investment community in India for all your market related queries</p>
          <a href='#' style={{ textDecoration: 'none' }}>Trading Q&A<FaArrowRight/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education