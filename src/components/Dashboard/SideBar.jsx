import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
    const changeCurrentContent = props.changeCurrentContent;
    return (
        <div className="sidebar">
            <a className="logo-wrapper waves-effect" href="/">
                <img src="../../../img/sweet.png" className="img-fluid" alt="" />
            </a>
            <div>
                <h3 className="text-center">
                    <i className="fas fa-chart-pie mr-3"></i>Dashboard</h3>
                <div className="sidebar-components">
                    <Link to="/profile" >
                    <button className="sidebar-buttons" onClick={() => {changeCurrentContent('Profile')}}>
                        <i className="fas fa-user mr-3"></i><span>Profile</span></button>
                    </Link>

                    <button className="sidebar-buttons" onClick={() => {changeCurrentContent('All Transactions')}}>
                        <i className="fas fa-money-bill-alt mr-3"></i><span>Transactions</span></button>

                    <button className="sidebar-buttons" onClick={() => {changeCurrentContent('Categories')}}>
                        <i className="fas fa-table mr-3"></i><span>Categories</span></button>

                    <Link to="/accounts">
                        <button className="sidebar-buttons" onClick={() => {changeCurrentContent('All Accounts')}}>
                            <i className="fas fa-wallet mr-3"></i><span>Accounts</span></button>
                    </Link>

                    <button className="sidebar-buttons" onClick={() => {changeCurrentContent('Reports')}}>
                        <i className="far fa-chart-bar mr-3"></i><span>Reports</span></button>

                    <button className="sidebar-buttons" onClick={() => {changeCurrentContent('Import')}}>
                        <i className="fas fa-file-import mr-3"></i><span>Import</span></button>
                        
                </div>
            </div>

        </div>
    )
}

export default SideBar;