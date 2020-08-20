import React from 'react';

const Profile = (props) => {
    const username = props.username;
    const email = props.email;
    const logout = props.logout;

    return (
        <div className="profile z-depth-1 card text-center">
            <h1>Hi {username}! </h1>
            <p>{email}</p>
            <button className="btn btn-light" onClick={logout}>SIGN OUT</button>

        </div>

    )
}

export default Profile;
