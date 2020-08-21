import React from 'react';

const Profile = (props) => {
    const username = props.username;
    const email = props.email;
    const logout = props.logout;

    return (
        <div className="profile z-depth-1 card text-center">
            <h1>Hi {username}! </h1>
            <p>{email}</p>
            <button className="btn btn-default btn-rounded" data-toggle="modal" data-target="#modalLoginAvatar">Edit profile</button>
            <button className="btn btn-light" onClick={logout}>SIGN OUT</button>

            {/* Modal edit profile */}
            <div class="modal fade" id="modalLoginAvatar" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div class="modal-dialog cascading-modal modal-avatar modal-sm" role="document">
                    <form>
                        <div class="modal-content">

                            <div class="modal-header">
                                <img src="https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png" alt="avatar" class="rounded-circle img-responsive" />
                            </div>

                            <div class="modal-body text-center mb-1">

                                <h5 class="mt-1 mb-2">{email}</h5>

                                <div class="md-form ml-0 mr-0">
                                    <input type="text" id="form29" class="form-control form-control-sm validate ml-0" />
                                    <label data-error="wrong" data-success="right" for="form29" class="ml-0">Name:</label>
                                </div>

                                <div class="md-form ml-0 mr-0">
                                    <input type="password" id="form29" class="form-control form-control-sm validate ml-0" />
                                    <label data-error="wrong" data-success="right" for="form29" class="ml-0">Password:</label>
                                </div>

                                <div class="text-center mt-4">
                                    <button type="submit" class="btn btn-cyan mt-1" data-dismiss="modal">Save <i class="fas fa-sign-in ml-1"></i></button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Profile;
