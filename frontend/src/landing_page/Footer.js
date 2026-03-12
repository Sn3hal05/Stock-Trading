import React from 'react';
import {
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTelegram
} from "react-icons/fa";


const Footer = () => {
    return (
        <div className='container-fluid border-top mt-5 bg-light footer'>
            <div className='container'>
            <div className='row mt-5'>
                <div className='col-3'>
                    <img src="../media/images/logo.svg" alt="Logo" style={{width:"50%"}}/>
                    <p> &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved </p>
                    <div className='d-flex gap-3'>
                        <FaTwitter />
                        <FaFacebook />
                        <FaInstagram />
                        <FaLinkedin />
                        <FaTelegram />
                    </div>
                </div>
                <div className='col-3 d-flex flex-column gap-2 '>
                    <h4>Company</h4>
                    <a href="#">About</a>
                    <a href="#">Products</a>
                    <a href="#">Pricing</a>
                    <a href="#">Referral Programme</a>
                    <a href="#">Careers</a>
                    <a href="#">Zerodha.tech</a>
                    <a href="#">Press & Media</a>
                    <a href="#">Zerodha Cares</a>
                </div>
                <div className='col-3 d-flex flex-column gap-2'>
                    <h4>Support</h4>
                    <a href="#">Contact</a>
                    <a href="#">Support portal</a>
                    <a href="#">Z-connect blog</a>
                    <a href="#">List of charges</a>
                    <a href="#">Downloads & Resources</a>
                    
                </div>
                <div className='col-3 d-flex flex-column gap-2'>
                    <h4 >Account</h4>
                    <a href="#">Open an Account</a>
                    <a href="#">Fund Transfer</a>
                    <a href="#">60 days Challenge</a>
                </div>
                
            </div>
            <div className='row mt-5 text-muted' style={{fontSize:"14px"}}>
                <p>Zerodha Banking Ltd. Member of NSE & BSE - SEBI Registration No: INZ000031633 CDSL ID: 1241 Depository services through Zerodha Securities Pvt. Ltd. - SEBI Reg.
                    Trading through Zerodha Commodities Pvt. Ltd. MCX: 53835- SEBI Registration No: INZ000031633 Registered Address: Zerodha Banking Ltd. Bangalore, Karnataka 560001 India for any complaints regarding securities/ derivatives trading please write to complaints@zerodha.com we ensure you carefully look into your complaints Document as prescribed by SEBI ICF
                </p>
                <p>
                    Procedures to file a complaint on SEBI scores: Register on scores portal . Mandatory details for filing complaints on scores : Name, PAN, Address, Email, Mobile Number, Demat Account Number, Bank Account Number, Trading Account Number, Nature of Complaint. Speedy redresal of the grievance.
                </p>
                <p>Investment & securities related risks read here. read all the related documents carefully before Investing.</p>

                <p>
                    Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of you Exchange on your mobile/email at the end of the day. Issued in the interest of investors, KYC is one time exercise while dealing in securities mark SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermedi subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your of allotment, in case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyon others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
                </p>

                
            </div>
            <div className='row'>
                <ul className='d-flex list-unstyled gap-3 justify-content-center'>
                    <li><a href="#">NSE</a></li>
                    <li><a href="#">BSE</a></li>
                    <li><a href="#">MCX</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Policies & Procedures</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Disclosure</a></li>
                </ul>

                
            </div>
            </div>
        </div>
    );
};

export default Footer;