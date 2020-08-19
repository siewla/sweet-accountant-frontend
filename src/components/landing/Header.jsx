import React from 'react'
import Introduction from './Introduction';
import Nav from './Nav';
import Signup from '../authentication/Signup';
import Login from '../authentication/Login';
// import Dashboard from '../../pages/isLogin/Main'
import Chatbot from '../chatbot/CustomChatBox';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Header = (props) => {
    const login = props.login;
    return (
        <div>
            <Router>
                <header className="header">
                    <Nav />
                    <Switch>
                    <Route path="/" exact component={Introduction} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/login" render={() => <Login login={login}/> }/>
                        {/* <Route path='/dashboard' component={Dashboard} />  */}
                        {/* just test the buttons on the left */}
                    </Switch>
                    <Chatbot />
                </header>
            </Router>

        </div>
    )
}

export default Header
