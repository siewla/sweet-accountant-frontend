import React from 'react'
import Introduction from './Introduction';
import Nav from './Nav';
import Signup from './Signup';
import Login from './Login';
import Chatbot from './chatbot/CustomChatBox';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Router>
                <header>
                    <Nav />
                    <Switch>
                    <Route path="/" exact component={Introduction} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/login" component={Login} />
                    </Switch>
                    <Chatbot />
                </header>

            </Router>

        </div>
    )
}

export default Header
