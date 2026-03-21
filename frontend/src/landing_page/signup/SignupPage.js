import React from 'react';
import OpenAccount from '../OpenAccount';
import Signup from './Signup';
import Investment from './Investment';
import StepsAccount from './StepsAccount';

const SignupPage = () => {
    return (
        <div>
            <Signup/>
            <Investment/>
            <StepsAccount/>
            <OpenAccount/>
            
        </div>
    )
}

export default SignupPage;