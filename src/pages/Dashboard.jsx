import React, { useState } from 'react'
import SideBar from '../components/Dashboard/SideBar';
import Profile from '../components/Dashboard/Profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AccountsDetail from '../components/Dashboard/AccountsDetail';
import IndividualAccountsDetail from '../components/Dashboard/IndividualAccountDetail'
import TopMenu from '../components/Dashboard/TopMenu';
import { useHistory } from 'react-router-dom';
import Categories from '../components/Dashboard/Categories'
import Transactions from '../components/Dashboard/Transactions';


const Dashboard = (props) => {
    const currentUser = props.currentUser;
    const logout = props.logout;
    const updateCurrentUser = props.updateCurrentUser;
    const [currentContent, setCurrentContent] = useState('Profile');

    // change current content
    const changeCurrentContent = (content) => {
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
                                    render={() => 
                                    <Profile 
                                        currentUser={currentUser}
                                        logout={logout} 
                                        updateCurrentUser={updateCurrentUser}
                                    />} 
                                />
                                <Route exact path="/accounts" 
                                    render={() => 
                                    <AccountsDetail 
                                        currentUser={currentUser}
                                    />} 
                                />
                                <Route path="/accounts/:id" 
                                    render={(props) => 
                                        <IndividualAccountsDetail
                                            currentUser={currentUser}
                                        {...props}/>} 
                                />
                                <Route path="/categories" 
                                    render={(props) => 
                                    <Categories
                                        currentUser={currentUser}
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
