import React from 'react';

const Nav = (props) => {
    const username = props.username;
    const logout = props.logout;
    return (
        <nav class="navbar-dark secondary-color lighten-1 nav-db">
            <button className="btn btn-info">Hi {username}</button>
            <button className="btn btn-light" onClick={logout}>SIGN OUT</button>
        </nav>
    )
}

export default Nav;
