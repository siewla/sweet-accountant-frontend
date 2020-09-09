import React, { useState } from 'react';
import usersService from '../../services/usersService';
import { MDBModal, MDBModalBody, MDBModalHeader, MDBBtn } from 'mdbreact';

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
        <div className="profile">
            <div class="view grey lighten-3">
                {/* <div class="mask"> */}

                <div class="container h-100">

                    <div class="row align-items-center h-100">

                        <div class="col-md-6">
                            <h1 class="mb-4">Start <span class="text-warning">your jouney</span><br /><span class="cyan-text">to reach</span> your goal</h1>

                            <h3 class="mb-4 pb-2 dark-grey-text">Hi, {username}!</h3>
                            <p class="mb-4 pb-2 dark-grey-text">{email}</p>

                            <button class="btn btn-primary btn-rounded btn-md ml-md-0" onClick={() => setModalIsOpen(true)}>Edit Profile</button>
                            <button class="btn btn-outline-grey btn-rounded btn-md" onClick={logout}>SIGN OUT</button>

                        </div>

                        <div class="col-md-6">
                            <img src="https://mdbootstrap.com/img/illustrations/hiker-man-colour.svg" alt="" class="img-fluid" />
                        </div>

                    </div>
                    <MDBModal className="black-text" isOpen={modalIsOpen} toggle={() => setModalIsOpen(!modalIsOpen)}>
                        <MDBModalHeader toggle={() => setModalIsOpen(!modalIsOpen)}>
                            <i className="fa fa-user-circle" aria-hidden="true">Edit Profile</i>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <form onSubmit={handleSubmit}>
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
                                    <MDBBtn color="primary" type="submit">Edit</MDBBtn>
                                    <MDBBtn color="grey" onClick={() => setModalIsOpen(!modalIsOpen)}>Cancel</MDBBtn>
                                </div>
                            </form>
                        </MDBModalBody>
                    </MDBModal>

                </div>

                {/* </div> */}

            </div>

        </div>


    )
}

export default Profile;
