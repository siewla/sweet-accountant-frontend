import React from 'react'
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
            <div className="container">
                <Link to="/">
                    <p href="/" className="navbar-brand"><strong>SLG</strong></p>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-7">
                    <ul className="navbar-nav mr-auto">
                        <Link to="/">
                            <li className="nav-item active">
                                <p className="nav-link">Home <span className="sr-only">(current)</span></p>
                            </li>
                        </Link>
                        <Link to="/signup">
                            <li className="nav-item">
                                <p className="nav-link">Sign up</p>
                            </li>
                        </Link>
                        <Link to="/login">
                        <li className="nav-item">
                            <p className="nav-link">Log in</p>
                        </li>
                        </Link>
                    </ul>
                    <form className="form-inline">
                        <div className="md-form my-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Nav
