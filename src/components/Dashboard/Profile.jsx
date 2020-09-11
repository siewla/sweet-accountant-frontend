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
        <div className="">
            <div className="view grey lighten-3">
                {/* <div className="mask"> */}

                <div className="container h-100">

                    <div className="row align-items-center h-100 profile-content">

                        <div className="col-md-6">
                            <h1 className="mb-4">Start <span className="text-warning">your jouney</span><br /><span className="cyan-text">to reach</span> your goal</h1>

                            <h3 className="mb-4 pb-2 dark-grey-text">Hi, {username}!</h3>
                            <p className="mb-4 pb-2 dark-grey-text">{email}</p>

                            <button className="btn btn-primary btn-rounded btn-md ml-md-0" onClick={() => setModalIsOpen(true)}>Edit Profile</button>
                            <button className="btn btn-outline-grey btn-rounded btn-md" onClick={logout}>SIGN OUT</button>

                        </div>

                        <div className="col-md-6">
                            <img src="https://mdbootstrap.com/img/illustrations/hiker-man-colour.svg" alt="" className="img-fluid" />
                        </div>

                    </div>
                    <MDBModal className="black-text" isOpen={modalIsOpen} toggle={() => setModalIsOpen(!modalIsOpen)}>
                        <MDBModalHeader toggle={() => setModalIsOpen(!modalIsOpen)}>
                            <h5><svg id="Layer_1" className="animated bounceInDown" enable-background="new 0 0 512 512" height="50" viewBox="0 0 512 512" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m206 512h-86c-66.168 0-120-53.832-120-120v-272c0-66.168 53.832-120 120-120h272c66.168 0 120 53.832 120 120v100c0 11.046-8.954 20-20 20s-20-8.954-20-20v-100c0-44.112-35.888-80-80-80h-272c-44.112 0-80 35.888-80 80v272c0 44.112 35.888 80 80 80h86c11.046 0 20 8.954 20 20s-8.954 20-20 20zm27-372c0-33.084-26.916-60-60-60s-60 26.916-60 60 26.916 60 60 60 60-26.916 60-60zm-40 0c0 11.028-8.972 20-20 20s-20-8.972-20-20 8.972-20 20-20 20 8.972 20 20zm239 54c0-11.046-8.954-20-20-20h-124c-11.046 0-20 8.954-20 20s8.954 20 20 20h124c11.046 0 20-8.954 20-20zm-148 140c0-11.046-8.954-20-20-20h-146c-11.046 0-20 8.954-20 20s8.954 20 20 20h146c11.046 0 20-8.954 20-20zm-80 70c0-11.046-8.954-20-20-20h-66c-11.046 0-20 8.954-20 20s8.954 20 20 20h66c11.046 0 20-8.954 20-20zm85.92 107.612 56.664-11.326c28.099-5.616 53.662-19.295 73.926-39.558l70.108-70.109c13.788-13.788 21.382-32.12 21.382-51.619s-7.593-37.831-21.381-51.619-32.12-21.381-51.619-21.381-37.831 7.594-51.619 21.381l-70.109 70.109c-20.263 20.264-33.941 45.827-39.558 73.926l-11.326 56.664c-1.311 6.557.742 13.334 5.47 18.063 3.788 3.787 8.89 5.857 14.142 5.857 1.303 0 2.616-.127 3.92-.388zm172.414-195.946c6.233 6.232 9.666 14.52 9.666 23.334s-3.433 17.102-9.666 23.334l-70.109 70.109c-14.659 14.66-33.152 24.556-53.48 28.618l-27.253 5.447 5.447-27.253c4.063-20.328 13.958-38.821 28.618-53.48l70.109-70.11c6.232-6.232 14.52-9.665 23.334-9.665s17.102 3.433 23.334 9.666zm-50.334-171.666h-124c-11.046 0-20-8.954-20-20s8.954-20 20-20h124c11.046 0 20 8.954 20 20s-8.954 20-20 20zm-171.209 129.462c7.435-8.169 6.84-20.818-1.329-28.253-16.443-14.967-37.792-23.209-60.112-23.209h-12.7c-22.32 0-43.669 8.242-60.112 23.209-8.169 7.435-8.764 20.084-1.329 28.253 7.434 8.168 20.084 8.764 28.253 1.329 9.063-8.248 20.85-12.791 33.188-12.791h12.699c12.339 0 24.126 4.543 33.188 12.791 3.833 3.488 8.651 5.209 13.456 5.209 5.436 0 10.852-2.202 14.798-6.538z" /></svg>
                             {email}</h5>   
                        </MDBModalHeader>
                        <MDBModalBody>
                            <form onSubmit={handleSubmit}>
            
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
