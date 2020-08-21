import React from 'react';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';

const Accounts = (props) => {
    return (
        <React.Fragment>
            {/* LEFT BOX */}
            <div className="accounts z-depth-1 card">
                <p>Credit: 0</p>
                <p>Debit: 0</p>
                <p>Balance: 0</p>
                <OverlayTrigger
                    placement="bottom"
                    overlay={
                        <Tooltip id={`tooltip-bottom`}>
                            Add an account
        </Tooltip>
                    }
                >
                    {/* add more account */}
                    <Button className="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginForm"><i class="fas fa-plus-circle fa-lg"></i></Button>
                </OverlayTrigger>
            </div>

            {/* TABLE */}
            <div className="table-accounts z-depth-1 card">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Balance</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Modal to add new account */}
            <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header text-center">
                                <h4 class="modal-title w-100 font-weight-bold">Add new account</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body mx-3">

                                <div class="md-form ml-0 mr-0">
                                    <input type="text" id="form29" class="form-control form-control-sm validate ml-0" />
                                    <label data-error="wrong" data-success="right" for="form29" class="ml-0">Name:</label>
                                </div>

                            </div>
                            <div class="modal-footer d-flex justify-content-center">
                                <button type="submit" class="btn btn-default" data-dismiss="modal">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Accounts;
