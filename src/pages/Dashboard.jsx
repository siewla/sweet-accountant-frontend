import React, { useState, useEffect } from 'react'
import SideBar from '../components/Dashboard/SideBar';
import Profile from '../components/Dashboard/Profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AccountsDetail from '../components/Dashboard/AccountsDetail';
import TopMenu from '../components/Dashboard/TopMenu';
import Categories from '../components/Dashboard/Categories'
import Transactions from '../components/Dashboard/Transactions';
import ListAllTransactions from '../components/Dashboard/ListAllTransactions';
import Report from '../components/Dashboard/Report';
import Import from '../components/Dashboard/Import';
import Training from '../components/Dashboard/Training';

const Dashboard = (props) => {
    const currentUser = props.currentUser;
    const logout = props.logout;
    const updateCurrentUser = props.updateCurrentUser;
    const [currentContent, setCurrentContent] = useState('Profile');

    // change current content
    const changeCurrentContent = (content) => {
        setCurrentContent(content);
        localStorage.setItem("currentContent", `${content}`)
    }
    useEffect(() => {
        if (localStorage.getItem("currentContent")) setCurrentContent(localStorage.getItem("currentContent"));
    }, [])
    return (
        <div>
            <Router>
                <div className="dashboard">
                    <SideBar changeCurrentContent={changeCurrentContent} />
                    <div className="main-content">
                        <TopMenu currentContent={currentContent} currentUser={currentUser} changeCurrentContent={changeCurrentContent} />
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
                                <Route path="/listalltransactions/:type/:id"
                                    render={(props) =>
                                        <ListAllTransactions
                                            currentUser={currentUser}
                                            {...props} />}
                                />
                                <Route path="/categories"
                                    render={(props) =>
                                        <Categories
                                            currentUser={currentUser}
                                            {...props} />}
                                />
                                <Route path="/transactions"
                                    render={(props) =>
                                        <Transactions
                                            currentUser={currentUser}
                                            currentContent={currentContent}
                                            changeCurrentContent={changeCurrentContent}
                                            {...props} />}
                                />
                                <Route path="/report"
                                    render={() =>
                                        <Report
                                        />}
                                />
                                <Route path="/import"
                                    render={() =>
                                        <Import
                                        />}
                                />

                                <Route path="/training"
                                    render={() =>
                                        <Training
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
