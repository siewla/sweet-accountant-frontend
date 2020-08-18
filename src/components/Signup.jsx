import React from 'react'

const Signup = () => {
    return (
        <div>
            <div id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            >
                <div class="modal-dialog cascading-modal" role="document">
                    <div class="modal-content">
                        <div class="modal-header primary-color white-text">
                            <h4 class="title">
                                <i class="fa fa-pencil-alt"></i> Register form</h4>
                            <button type="button" class="close waves-effect waves-light" data-dismiss="modal"
                                aria-label="Close">

                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="md-form form-sm">
                                <i class="fa fa-envelope prefix"></i>
                                <input type="text" id="materialFormNameModalEx1" class="form-control form-control-sm" />
                                <label for="materialFormNameModalEx1">Your email</label>
                            </div>
                            <div class="md-form form-sm">
                                <i class="fa fa-lock prefix"></i>
                                <input type="password" id="materialFormEmailModalEx1" class="form-control form-control-sm" />
                                <label for="materialFormEmailModalEx1">Your password</label>
                            </div>
                            <div class="md-form form-sm">
                                <i class="fa fa-tag prefix"></i>
                                <input type="text" id="materialFormSubjectModalEx1" class="form-control form-control-sm" />
                                <label for="materialFormSubjectModalEx1">Your username</label>
                            </div>


                            <div class="text-center mt-4 mb-2">
                                <button class="btn btn-primary">Submit
                                <i class="far fa-paper-plane"></i>
                               
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
