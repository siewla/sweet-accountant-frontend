import React from 'react'
import SideBar from '../components/Dashboard/SideBar';
import Nav from '../components/Dashboard/Nav';


const Dashboard = (props) => {
    const username = props.username;
    const logout = props.logout;
    return (
        <div>
            <div className="dashboard">
                <SideBar />
                <div className="nav-content">
                    <Nav username={username} logout={logout} />
                    {/* Chart here */}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
