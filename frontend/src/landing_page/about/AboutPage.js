import React from 'react';
import Hero from './Hero';
import Team from './Team';
import Navbar from '../Navbar';
import Footer from '../Footer';
import TeamMembers from './TeamMembers';
    
const AboutPage = ()=>{
    return(
        <div>
            
            <Hero/>
            <Team/>
            <TeamMembers/>
            
        </div>
    )
}

export default AboutPage;