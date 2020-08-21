import React, { useState } from 'react'
import SideBar from '../components/Dashboard/SideBar';
import Profile from '../components/Dashboard/Profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AccountsDetail from '../components/Dashboard/AccountsDetail';
import TopMenu from '../components/Dashboard/TopMenu';
import { useHistory } from 'react-router-dom';

const Dashboard = (props) => {
    const currentUser = props.currentUser;
    const logout = props.logout;
    const isLogin = props.isLogin;
    const updateCurrentUser = props.updateCurrentUser;
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
                    <div className="main-content">
                        <TopMenu currentContent={currentContent} currentUser={currentUser}/>
                        <div className="content">
                            <Switch>
                                <Route path="/profile" 
                                    render={() => 
                                    <Profile 
                                        currentUser={currentUser}
                                        logout={logout} 
                                        updateCurrentUser={updateCurrentUser}
                                    />} 
                                />
                                <Route path="/accounts" 
                                    render={() => 
                                    <AccountsDetail 
                                        currentUser={currentUser}
                                    />} 
                                />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default Dashboard
