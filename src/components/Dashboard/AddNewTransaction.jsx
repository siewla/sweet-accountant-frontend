import React, { useState }from 'react'
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

const AddNewTransaction = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div>
            <MDBBtn onClick={()=>setModalIsOpen(!modalIsOpen)}>Add New Transaction</MDBBtn>
            <MDBModal isOpen={modalIsOpen} toggle={()=>setModalIsOpen(!modalIsOpen)}>
                <MDBModalHeader toggle={()=>setModalIsOpen(!modalIsOpen)}>MDBModal title</MDBModalHeader>
                <MDBModalBody>
                    <form>
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
                        <div class="text-center mt-4">
                            <button type="submit" class="btn btn-cyan mt-1">ADD</button>
                        </div>
                    </form>
                </MDBModalBody>
            </MDBModal>
        </div>
    )
}

export default AddNewTransaction
