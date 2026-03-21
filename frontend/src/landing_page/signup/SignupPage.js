import React from 'react';
import OpenAccount from '../OpenAccount';
import Signup from './Signup';
import Investment from './Investment';
import StepAccount from './StepAccount';

const SignupPage = () => {
    return (
        <div>
            <Signup/>
            <Investment/>
            <StepAccount/>
            <OpenAccount/>
            
        </div>
    )
}

export default SignupPage;