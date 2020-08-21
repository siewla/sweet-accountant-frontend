import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
    const changeCurrentContent = props.changeCurrentContent;
    return (
        <div className="sidebar">
            <a className="logo-wrapper waves-effect" href="/">
                <img src="../../../img/sweet.png" className="img-fluid" alt="" />
            </a>
<<<<<<< HEAD
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
=======
            <div className="list-group list-group-flush">

                <Link to="/login" >
                    <p className="list-group-item list-group-item-action waves-effect" onClick={() => { changeCurrentContent('Profile') }}>
                        <i className="fas fa-user mr-3"></i>Profile</p>
                </Link>

                <Link to="/transactions">
                    <p className="list-group-item list-group-item-action waves-effect" onClick={() => { changeCurrentContent('All Transactions') }}>
                        <i className="fas fa-money-bill-alt mr-3"></i>Transactions</p>
                </Link>

                <Link to="/categories">
                    <p className="list-group-item list-group-item-action waves-effect" onClick={() => { changeCurrentContent('Categories') }}>
                        <i className="fas fa-table mr-3"></i>Categories</p>
                </Link>

                <Link to="/accounts">
                    <p className="list-group-item list-group-item-action waves-effect" onClick={() => { changeCurrentContent('All Accounts') }}>
                        <i className="fas fa-wallet mr-3"></i>Accounts</p>
                </Link>

                <Link to="/reports">
                <p className="list-group-item list-group-item-action waves-effect" onClick={() => { changeCurrentContent('Reports') }}>
                    <i className="far fa-chart-bar mr-3"></i>Reports</p>
                </Link>

                <Link to="import">
                <p className="list-group-item list-group-item-action waves-effect" onClick={() => { changeCurrentContent('Import') }}>
                    <i className="fas fa-file-import mr-3"></i>Import</p>
                </Link>
>>>>>>> 4d2830e3f989762356361e6d8335e9f24d5a5b29
            </div>

        </div>
    )
}

export default SideBar;