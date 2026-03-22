import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Hero = () => {
  return (
    <div className="container-fluid my-5 bg-light py-4">
      <div className='container'>

        <div className="d-flex justify-content-between align-items-center">
          <h2>Support Portal</h2>
          <button className="btn btn-primary px-4 mx-5">My Tickets</button>
        </div>

        
        <div className="position-relative mt-4">

         
          <FiSearch
            className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
            size={18}
          />

         
          <input
            className='form-control ps-5 py-3 border rounded-3 border-secondary w-100'
            type="text"
            placeholder="Eg: How do I open my account? How do I activate F&O?"
          />

        </div>

      </div>
    </div>
  );
};

export default Hero;