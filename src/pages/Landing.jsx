import React from 'react'
import Header from '../components/landing/Header';
import Footer from '../components/Footer';
const Landing = (props) => {
    const login = props.login
    return (
        <div>
           <Header login={login}/>
            <Footer />
        </div>
    )
}

export default Landing
