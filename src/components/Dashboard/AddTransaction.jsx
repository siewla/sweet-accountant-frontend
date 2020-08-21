import React from 'react';

const ModalTransaction = () => {
    return (
        <div class="modal fade" id="modalPush" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-notify modal-info" role="document">

                <div class="modal-content">

                    <div class="modal-header d-flex justify-content-center">
                        <p class="heading">Add new transaction</p>
                    </div>
                    <form>
                        <div class="modal-body">

                            <div class="mb-5" data-toggle="modal" data-target="#modalContactForm">
                                <p class="form-control validate text-center"> <i class="fas fa-table prefix grey-text"></i> Category <i class="fas fa-angle-right"></i></p>
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
                            <button type="submit" class="btn btn-outline-info waves-effect" data-dismiss="modal">Add</button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    )
}

export default ModalTransaction;