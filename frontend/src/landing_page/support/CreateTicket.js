import React from 'react'
import './Support.css';
import {Link} from 'react-router-dom';
import {
    FiPlusCircle,
    FiUser,
    FiTrendingUp,
    FiDollarSign,
    FiRefreshCw,
    FiClock
} from 'react-icons/fi'
const CreateTicket = () => {
    const Sections=[
        {
            name:"Account Opening",
            listnames:["Resident individual","Minor","Non Resident Indian (NRI)","Company, Partnership, HUF and LLP","Glossary"],
            icon:<FiPlusCircle/>,
        },
        {
            name:"Your Zerodha Account",
            listnames:["Your Profile","Account modification","Client Master Report (CMR) and Depository Participant (DP)","Nomination","Transfer and conversion of securities"],
            icon:<FiUser/>,
        },
        {
            name:"Kite",
            listnames:["IPO","Trading FAQs","Margin Trading Facility (MTF) and Margins","Charts and orders, HUF and LLP","Alerts and Nudges","General"],
            icon:<FiTrendingUp/>,
        },
        {
            name:"Console",
            listnames:["Portfolio","Corporate actions","Funds statement","Reports","Profile","Segments"],
            icon:<FiDollarSign/>,
        },
        {
            name:"Funds",
            listnames:["Add money","Withdraw money","Add bank accounts","Company, Partnership"," eMandates"],
            icon:<FiRefreshCw/>,
        },
        {
            name:"Coin",
            listnames:["Mutual funds","National Pension Scheme (NPS)","Fixed Deposit (FD)","Features on Coin","Payments and Orders","General"],
            icon:<FiClock/>,
        }
];
 const links=["Track account opening","Track segment activation","Intraday margins","Kite user manual","Learn how to create a ticket"];


     return (
    <div className="container my-5">
      <div className="row g-5 mx-3">

        <div className='col-12 col-lg-8'>
          <div className="accordion" id="supportAccordion">

            {Sections.map((items, index) => (

              <div className='accordion-item mb-4 border-rounded' key={index}>
                

                {/* Header */}
                <h2 className='accordion-header'>
                  <button
                    className="accordion-button collapsed d-flex align-items-center gap-3 btn-style"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-controls={`collapse${index}`}
                  >
                    <div className='fs-4'>{items.icon}</div>
                    
                    {items.name}
                  </button>
                </h2>

                {/* Content */}
                <div
                  id={`collapse${index}`}
                  className='accordion-collapse collapse'
                  data-bs-parent="#supportAccordion"
                >
                  <div className="accordion-body">
                    
                    <ul className='list-unstyled text-primary'>
                      {items.listnames.map((list, i) => (
                        <li key={i}>{list}</li>
                      ))}
                    </ul>

                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>

        <div className='col-lg-4 g-4'>
            <div className='row py-3 ps-4 rev-div'>
                <ul>
                    <li><Link to="#">Revision in commodity market trading hours from March 09, 2026</Link></li>
                    <li><Link to="#">BSE StAR mutual fund platform downtime</Link></li>
                </ul>

            </div>
            <div className='row my-5 mx-2'>
                <h5>Quick Links</h5>
                <ol>
                    {
                    links.map((item,index)=>(
                        <li key={index} className='mb-2 text-primary fs-5'>{item}</li>

                    ))}
                </ol>
                
            </div>
          
        </div>

      </div>
    </div>
  );
};

export default CreateTicket;