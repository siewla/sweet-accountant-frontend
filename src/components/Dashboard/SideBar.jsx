import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
    const changeCurrentContent = props.changeCurrentContent;
    return (
        <div className="sidebar-fixed position-fixed">
            <a className="logo-wrapper waves-effect" href="/">
                <img src="../../../img/sweet.png" className="img-fluid" alt="" />
            </a>
            <div className="list-group list-group-flush">

                <p className="list-group-item active waves-effect">
                    <i className="fas fa-chart-pie mr-3"></i>Dashboard</p>

                <Link to="/login" >
                    <p className="list-group-item list-group-item-action waves-effect" onClick={() => {changeCurrentContent('Profile')}}>
                        <i className="fas fa-user mr-3"></i>Profile</p>
                </Link>

                <p className="list-group-item list-group-item-action waves-effect" onClick={() => {changeCurrentContent('All Transactions')}}>
                    <i className="fas fa-money-bill-alt mr-3"></i>Transactions</p>

                <p className="list-group-item list-group-item-action waves-effect" onClick={() => {changeCurrentContent('Categories')}}>
                    <i className="fas fa-table mr-3"></i>Categories</p>

                <Link to="/accounts">
                    <p className="list-group-item list-group-item-action waves-effect" onClick={() => {changeCurrentContent('All Accounts')}}>
                        <i className="fas fa-wallet mr-3"></i>Accounts</p>
                </Link>
                <p className="list-group-item list-group-item-action waves-effect" onClick={() => {changeCurrentContent('Reports')}}>
                    <i className="far fa-chart-bar mr-3"></i>Reports</p>

                <p className="list-group-item list-group-item-action waves-effect" onClick={() => {changeCurrentContent('Import')}}>
                    <i className="fas fa-file-import mr-3"></i>Import</p>
            </div>

        </div>
    )
}

export default SideBar;