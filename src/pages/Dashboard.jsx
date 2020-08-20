import React, { useState } from 'react'
import SideBar from '../components/Dashboard/SideBar';
import Nav from '../components/Dashboard/Nav';
import Profile from '../components/Dashboard/Profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Accounts from '../components/Dashboard/Accounts';
const Dashboard = (props) => {
    const username = props.username;
    const logout = props.logout;
    const email = props.email;
    const [currentContent, setCurrentContent] = useState('Profile');

    // change current content
    const changeCurrentContent = (content) => {
        console.log(content);
        setCurrentContent(content);
    }
    return (
        <div>
            <Router>

                <div className="dashboard">
                    <SideBar changeCurrentContent={changeCurrentContent} />
                    <div className="nav-content">
                        <Nav currentContent={currentContent} />
                        <div className="content">
                            <Switch>
                                <Route path="/login" render={() => <Profile username={username} email={email} logout={logout} />} />
                            </Switch>
                            <Switch>
                                <Route path="/accounts" render={() => <Accounts />} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default Dashboard
