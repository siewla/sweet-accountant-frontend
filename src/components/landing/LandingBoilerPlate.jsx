import React from 'react'
import Introduction from './Introduction';

import Signup from '../authentication/Signup';
import Login from '../authentication/Login';

import PageHeader from '../PageHeader'
import PageFooter from '../PageFooter'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Landing = (props) => {
    const login = props.login;
    return (
        <div className="landing-container">
            <div className="page-background">
            </div>
            <Router>
                <PageHeader />
                <Switch>
                    <Route path="/" exact component={Introduction} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" render={() => <Login login={login}/> }/>
                </Switch>
                <PageFooter />
            </Router>
        </div>
    )
}

export default Landing
