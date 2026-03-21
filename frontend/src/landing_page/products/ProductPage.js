import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import {Link} from 'react-router-dom';
import Universe from './Universe';


const ProductPage = () => {
  return (
    <div>
      <Hero/>
      <LeftSection
      imageURL="../media/images/kite.png"
  productName="Kite"
  productDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
  tryDemo="Try Demo"
  leranMore="Learn More"
      />
      <RightSection
      imageURL="../media/images/console.png"
  productName="Console"
  productDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
  learnMore="Learn More"
      />
      <LeftSection
      imageURL="../media/images/coin.png"
  productName="Coin"
  productDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
  tryDemo="Coin"
      />
      <RightSection
      imageURL="../media/images/kiteconnect.png"
  productName="Kite Connect API"
  productDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
  tryDemo="Kite Connect"
      />
      <LeftSection
      imageURL="../media/images/varsity-products.svg"
  productName="Varsity mobile"
  productDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
      />  
      <h4 className='text-center my-5'>Want to know more about our technology stack? Check out the <Link className="text-decoration-none" to="#">Zerodha.tech</Link> blog.</h4>

      <Universe/>
    </div>


    
  )
}

export default ProductPage;