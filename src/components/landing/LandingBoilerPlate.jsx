import React from 'react'
import Introduction from './Introduction';

import Signup from '../authentication/Signup';
import Login from '../authentication/Login';

import PageHeader from '../PageHeader'
import PageFooter from '../PageFooter'
import SlideImages from './SlideImages';
import Features from './Features';
import FeedBack from './FeedBack';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Landing = (props) => {
    const login = props.login;
    return (

        <div className="landing-container">
            <div className="page-background fade-in">
               <SlideImages />
            </div>
            <Router>
                <PageHeader />
                <Switch>
                    <Route path="/" exact component={Introduction} />
                    <Route path="/signup" render={() => <Signup login={login} currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} checkAuthentication={props.checkAuthentication}/>} />
                    <Route path="/login" render={() => <Login login={login} currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} checkAuthentication={props.checkAuthentication}/>} />
                </Switch>
                <Features />
                <FeedBack />
                <PageFooter />
            </Router>
            
        </div>
    )
}

export default Landing
