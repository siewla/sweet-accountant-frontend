import React from 'react'
import SideBar from '../components/Dashboard/SideBar';
import Nav from '../components/Dashboard/Nav';
import Profile from '../components/Dashboard/Profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Dashboard = (props) => {
    const username = props.username;
    const logout = props.logout;
    const email = props.email;
    return (
        <div>
            <Router>

                <div className="dashboard">
                    <SideBar />
                    <div className="nav-content">
                        <Nav />
                        <Switch>
                            <Route path="/login" render={() => <Profile username={username} email={email} logout={logout} />} />
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default Dashboard
