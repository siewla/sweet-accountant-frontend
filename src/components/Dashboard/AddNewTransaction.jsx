import React, { useState }from 'react'
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader} from 'mdbreact';
import AddNewTransactionForm from './AddNewTransactionForm'

const AddNewTransaction = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div>
            <MDBBtn onClick={()=>setModalIsOpen(!modalIsOpen)}>Add New Transaction</MDBBtn>
            <MDBModal isOpen={modalIsOpen} toggle={()=>setModalIsOpen(!modalIsOpen)}>
                <MDBModalHeader toggle={()=>setModalIsOpen(!modalIsOpen)}>Add New Transaction</MDBModalHeader>
                <MDBModalBody>
                    <AddNewTransactionForm currentUser={props.currentUser}/>
                </MDBModalBody>
            </MDBModal>
        </div>
    )
}

export default AddNewTransaction
