import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="sidebar-fixed position-fixed">
            <a className="logo-wrapper waves-effect" href="/">
                <img src="../../../img/sweet.png" className="img-fluid" alt="" />
            </a>
            <div className="list-group list-group-flush">
                
                <p className="list-group-item active waves-effect">
                    <i className="fas fa-chart-pie mr-3"></i>Dashboard</p>

                    <Link to="/login">
                <p className="list-group-item list-group-item-action waves-effect">
                    <i className="fas fa-user mr-3"></i>Profile</p>
                    </Link>

                <p className="list-group-item list-group-item-action waves-effect">
                    <i className="fas fa-money-bill-alt mr-3"></i>Transactions</p>

                <p className="list-group-item list-group-item-action waves-effect">
                <i className="fas fa-table mr-3"></i>Categories</p>

                <p className="list-group-item list-group-item-action waves-effect">
                <i className="fas fa-wallet mr-3"></i>Accounts</p>

                <p className="list-group-item list-group-item-action waves-effect">
                <i className="far fa-chart-bar mr-3"></i>Reports</p>

                <p className="list-group-item list-group-item-action waves-effect">
                <i className="fas fa-file-import mr-3"></i>Imports</p>
            </div>

        </div>
    )
}

export default SideBar;