import React, { useState } from 'react';
import usersService from '../../services/usersService';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


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
        <div className="profile z-depth-1 card text-center">
            <h1>Hi, {username}! </h1>
            <p>{email}</p>
            <button className="btn btn-default" onClick={()=>setModalIsOpen(true)}>Edit Profile</button>
            <button className="btn btn-light" onClick={logout}>SIGN OUT</button>
            <MDBModal isOpen={modalIsOpen} toggle={()=>setModalIsOpen(!modalIsOpen)}>
                <MDBModalHeader toggle={()=>setModalIsOpen(!modalIsOpen)}>
                    <h3><i class="fa fa-user-circle" aria-hidden="true"></i> Edit Profile </h3>
                </MDBModalHeader>
                <MDBModalBody>
                    <form onSubmit = {handleSubmit}>
                        <h5 class="mt-1 mb-2">{email}</h5>
                        <div class="md-form ml-0 mr-0">
                            <input type="text" id="username" class="form-control form-control-sm validate ml-0" value={updateUser.username} onChange={handleChange} required />
                            <label data-error="wrong" data-success="right" for="form29" class="ml-0">Name</label>
                        </div>
                        <div class="md-form ml-0 mr-0">
                            <input type="password" id="password" class="form-control form-control-sm validate ml-0" value={updateUser.password} onChange={handleChange} required />
                            <label data-error="wrong" data-success="right" for="form29" class="ml-0">Password </label>
                        </div>
                        <div class="text-center mt-4">
                            <button type="submit" class="btn btn-cyan mt-1"> Update and Save<i class="fas fa-sign-in ml-1"></i></button>
                        </div>
                    </form>
                </MDBModalBody>
            </MDBModal>
        </div>
    )
}

export default Profile;
