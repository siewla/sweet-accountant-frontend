import React, { useState } from 'react';
import usersService from '../../services/usersService';
import { MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';

const Profile = (props) => {
    const { username, email, id } = props.currentUser;

    const logout = props.logout;
    const [updateUser, setUpdateUser] = useState({
        username: '',
        password: ''
    })

    const updateCurrentUser = props.updateCurrentUser;

    const [modalIsOpen, setModalIsOpen] = useState(false)


    // Handle Form Input Change
    const handleChange = event => {
        const { id, value } = event.target;

        setUpdateUser((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

    // Handle Form Submit
    const handleSubmit = async event => {
        event.preventDefault();
        await usersService.update(id, updateUser);
        setUpdateUser({
            username: '',
            password: ''
        });
        const currentUser = await usersService.getOne(id);
        setModalIsOpen(false);
        updateCurrentUser(currentUser); 
    }

    return (
        <div>
            <div className="profile z-depth-1 card text-center">
                <h1 className="black-text">Hi, {username}! </h1>
                <h2 className="black-text">{email}</h2>
                <button className="btn btn-default" onClick={()=>setModalIsOpen(true)}>Edit Profile</button>
                <button className="btn btn-light" onClick={logout}>SIGN OUT</button>
                <MDBModal className="black-text" isOpen={modalIsOpen} toggle={()=>setModalIsOpen(!modalIsOpen)}>
                    <MDBModalHeader toggle={()=>setModalIsOpen(!modalIsOpen)}>
                        <i className="fa fa-user-circle" aria-hidden="true">Edit Profile</i> 
                    </MDBModalHeader>
                    <MDBModalBody>
                        <form onSubmit = {handleSubmit}>
                            <h5 className="mt-1 mb-2">{email}</h5>
                            <div className="md-form ml-0 mr-0">
                                <input type="text" id="username" className="form-control form-control-sm validate ml-0" value={updateUser.username} onChange={handleChange} required autoComplete="username" />
                                <label data-error="wrong" data-success="right" htmlFor="form29" className="ml-0">Name</label>
                            </div>
                            <div className="md-form ml-0 mr-0">
                                <input type="password" id="password" className="form-control form-control-sm validate ml-0" value={updateUser.password} onChange={handleChange} required autoComplete="current-password" />
                                <label data-error="wrong" data-success="right" htmlFor="form29" className="ml-0">Password </label>
                            </div>
                            <div className="text-center mt-4">
                                <button type="submit" className="btn btn-cyan mt-1"> Update and Save</button>
                            </div>
                        </form>
                    </MDBModalBody>
                </MDBModal>
            </div>
        </div>
        
    )
}

export default Profile;
