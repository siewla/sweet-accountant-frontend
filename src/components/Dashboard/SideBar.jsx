import React from 'react';

const SideBar = () => {
    return (
        <div className="sidebar-fixed position-fixed">
            <a className="logo-wrapper waves-effect" href="/">
                <img src="../../../img/sweet.png" className="img-fluid" alt="" />
            </a>
            <div className="list-group list-group-flush">
                <a href="/" className="list-group-item active waves-effect">
                    <i className="fas fa-chart-pie mr-3"></i>Dashboard</a>
                <a href="/" className="list-group-item list-group-item-action waves-effect">
                    <i className="fas fa-user mr-3"></i>Profile</a>
                <a href="/" className="list-group-item list-group-item-action waves-effect">
                    <i className="fas fa-money-bill-alt mr-3"></i>Transactions</a>
                <a href="/" className="list-group-item list-group-item-action waves-effect">
                <i className="fas fa-table mr-3"></i>Categories</a>
                <a href="/" className="list-group-item list-group-item-action waves-effect">
                <i className="fas fa-wallet mr-3"></i>Accounts</a>
                <a href="/" className="list-group-item list-group-item-action waves-effect">
                <i className="far fa-chart-bar mr-3"></i>Reports</a>
                <a href="/" className="list-group-item list-group-item-action waves-effect">
                <i className="fas fa-file-import mr-3"></i>Imports</a>
            </div>

        </div>
    )
}

export default SideBar;