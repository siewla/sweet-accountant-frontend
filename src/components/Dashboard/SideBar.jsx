import React from 'react';

const SideBar = () => {
    return (
        <div class="sidebar-fixed position-fixed">
            <a class="logo-wrapper waves-effect" href="/">
                <img src="../../../img/sweet.png" class="img-fluid" alt="" />
            </a>
            <div class="list-group list-group-flush">
                <a href="/" class="list-group-item active waves-effect">
                    <i class="fas fa-chart-pie mr-3"></i>Dashboard</a>
                <a href="/" class="list-group-item list-group-item-action waves-effect">
                    <i class="fas fa-user mr-3"></i>Profile</a>
                <a href="/" class="list-group-item list-group-item-action waves-effect">
                   <i class="fas fa-money-bill-alt mr-3"></i>Transactions</a>
                <a href="/" class="list-group-item list-group-item-action waves-effect">
                <i class="fas fa-table mr-3"></i>Categories</a>
                <a href="/" class="list-group-item list-group-item-action waves-effect">
                <i class="fas fa-wallet mr-3"></i>Accounts</a>
                <a href="/" class="list-group-item list-group-item-action waves-effect">
                <i class="far fa-chart-bar mr-3"></i>Reports</a>
                <a href="/" class="list-group-item list-group-item-action waves-effect">
                <i class="fas fa-file-import mr-3"></i>Imports</a>
            </div>

        </div>
    )
}

export default SideBar;