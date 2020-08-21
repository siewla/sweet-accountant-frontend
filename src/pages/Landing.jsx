import React from 'react'
import LandingBoilerPlate from '../components/landing/LandingBoilerPlate';

const Landing = (props) => {
    const login = props.login
    return (
        <LandingBoilerPlate login={login}/>
    )
}

export default Landing
