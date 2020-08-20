import React from 'react';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';

const Nav = (props) => {
    const currentContent = props.currentContent;

    return (
        <nav className="navbar-dark  lighten-1 nav-db">
            <div className="currentContent">
                <button class="btn aqua-gradient">{currentContent}</button>
            </div>
            <OverlayTrigger
                placement="bottom"
                overlay={
                    <Tooltip id={`tooltip-bottom`}>
                        Add transaction
        </Tooltip>
                }
            >
                <Button variant="secondary" data-toggle="modal" data-target="#modalPush"><i class="fas fa-plus-circle fa-lg"></i></Button>
            </OverlayTrigger>




            <div class="modal fade" id="modalPush" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-notify modal-info" role="document">

                    <div class="modal-content">

                        <div class="modal-header d-flex justify-content-center">
                            <p class="heading">Add new transaction</p>
                        </div>

                        <div class="modal-body">

                            <div class="md-form mb-5">
                              <i class="fas fa-table prefix grey-text"></i>
                                <input type="text" id="defaultForm-email" class="form-control validate" />
                                <label data-error="wrong" data-success="right" for="defaultForm-email">Category</label>
                            </div>

                            <div class="md-form mb-5">
                               <i class="fas fa-wallet prefix grey-text"></i>
                                <input type="text" id="defaultForm-email" class="form-control validate" />
                                <label data-error="wrong" data-success="right" for="defaultForm-email">Account</label>
                            </div>

                            <div class="md-form mb-5">
                                <i class="fas fa-dollar-sign prefix grey-text"></i>
                                <input type="number" id="defaultForm-email" class="form-control validate" />
                                <label data-error="wrong" data-success="right" for="defaultForm-email">Amount</label>
                            </div>

                            <div class="md-form mb-5">
                                <i class="far fa-sticky-note prefix grey-text"></i>
                                <input type="text" id="defaultForm-email" class="form-control validate" />
                                <label data-error="wrong" data-success="right" for="defaultForm-email">Description</label>
                            </div>

                            <div class="md-form mb-5">
                                <i class="far fa-calendar-alt prefix grey-text"></i>
                                <input type="date" id="defaultForm-email" class="form-control validate" />
                                <label data-error="wrong" data-success="right" for="defaultForm-email">Paid at</label>
                            </div>

                        </div>


                        <div class="modal-footer flex-center">
                            <p type="button" class="btn btn-outline-info waves-effect" data-dismiss="modal">Add</p>
                        </div>
                    </div>

                </div>
            </div>

        </nav>
    )
}

export default Nav;
