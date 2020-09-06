import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
    const changeCurrentContent = props.changeCurrentContent;
    return (
        <div className="sidebar">

            <div>
                <h3 className="logo-wrapper waves-effect text-center">
                    <img src="../../../img/sweet.png" className="img-fluid" alt="" />
                </h3>
                <h3 className="text-center dashboard-title">
                    <i className="fas fa-chart-pie mr-3"></i>Dashboard</h3>
                <div className="sidebar-components">
                    <Link to="/login" >
                        <button className="sidebar-buttons" onClick={() => { changeCurrentContent('Profile') }}>
                            <i className="fas fa-user mr-3"></i><span>Profile</span></button>
                    </Link>

                    <Link to="/transactions">
                        <button className="sidebar-buttons" onClick={() => { changeCurrentContent('All Transactions') }}>
                            <i className="fas fa-money-bill-alt mr-3"></i><span>Transactions</span></button>
                    </Link>

                    <Link to='/categories'>
                        <button className="sidebar-buttons" onClick={() => { changeCurrentContent('Categories') }}>
                            <i className="fas fa-table mr-3"></i><span>Categories</span></button>
                    </Link>

                    <Link to="/accounts">
                        <button className="sidebar-buttons" onClick={() => { changeCurrentContent('All Accounts') }}>
                            <i className="fas fa-wallet mr-3"></i><span>Accounts</span></button>
                    </Link>

                    <Link to="/report">
                        <button className="sidebar-buttons" onClick={() => { changeCurrentContent('Reports') }}>
                            <i className="far fa-chart-bar mr-3"></i><span>Reports</span></button>
                    </Link>

                    <Link to="/import">
                        <button className="sidebar-buttons" onClick={() => { changeCurrentContent('Import') }}>
                            <i className="fas fa-file-import mr-3"></i><span>Import</span></button>
                    </Link>

                    <Link to="/training">
                        <button className="sidebar-buttons" onClick={() => { changeCurrentContent('Training Data') }}>
                            <i className="fas fa-file-import mr-3"></i><span>Training Data</span></button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default SideBar;