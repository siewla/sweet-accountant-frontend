import React, { useState } from 'react'
import SideBar from '../components/Dashboard/SideBar';
import Profile from '../components/Dashboard/Profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AccountsDetail from '../components/Dashboard/AccountsDetail';
import IndividualAccountDetail from '../components/Dashboard/IndividualAccountDetail'
import TopMenu from '../components/Dashboard/TopMenu';
import Categories from '../components/Dashboard/Categories'
import Transactions from '../components/Dashboard/Transactions';

const Dashboard = (props) => {
    const currentUser = props.currentUser;
    const logout = props.logout;
    const updateCurrentUser = props.updateCurrentUser;
    const [currentContent, setCurrentContent] = useState('Profile');

    // change current content
    const changeCurrentContent = (content) => {
        // console.log(content);
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
                                <Route path="/login" 
                                    render={(props) => 
                                    <Profile 
                                        currentUser={currentUser}
                                        logout={logout} 
                                        updateCurrentUser={updateCurrentUser}
                                    {...props}/>} 
                                />
                                <Route path="/accounts/:id" 
                                    render={(props) => 
                                    <IndividualAccountDetail 
                                        currentUser={currentUser}
                                    {...props} />} 
                                />
                                <Route path="/accounts" 
                                    render={(props) => 
                                    <AccountsDetail 
                                        currentUser={currentUser}
                                    {...props}/>} 
                                />
                                <Route path="/categories" 
                                    render={(props) => 
                                    <Categories 
                                    {...props}/>} 
                                />
                                <Route path="/transactions" 
                                    render={(props) => 
                                    <Transactions
                                        currentUser={currentUser}
                                    {...props}/>} 
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
