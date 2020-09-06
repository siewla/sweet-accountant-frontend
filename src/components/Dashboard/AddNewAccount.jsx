import React, { useState }from 'react'
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput } from 'mdbreact';
import accountsServices from '../../services/accounts';

const AddNewAccount = (props) => {
    const [formData, setFormData] = useState({
        accountName:''
    })

    const { accountName } = formData

    const [modalIsOpen, setModalIsOpen] = useState(false);

    //handle change from user inputs
    const handleChange = text => event => {
        setFormData({...formData,[text]:event.target.value})
    }

    const handleSubmit = async event =>{
        event.preventDefault();
        // await accountsServices.create(accountName, props.currentUser.id);
        await accountsServices.create(accountName);
        setModalIsOpen(false);
        props.fetchData(props.currentUser)
    }

    return (
        <div>
            <MDBBtn className="add-new-account-button" onClick={()=>setModalIsOpen(!modalIsOpen)}>Add New Account</MDBBtn>
            <MDBModal isOpen={modalIsOpen} toggle={()=>setModalIsOpen(!modalIsOpen)}>
                <MDBModalHeader toggle={()=>setModalIsOpen(!modalIsOpen)}>Add New Account</MDBModalHeader>
                <MDBModalBody>
                <form onSubmit={handleSubmit}>        
                    <MDBInput 
                        label="New Account Name" 
                        type="text" 
                        onChange={handleChange('accountName')}
                        value={accountName}
                        required
                    />
                    <div className="text-center">
                        <MDBBtn type="submit">Add</MDBBtn>
                    </div>
                </form>
                </MDBModalBody>
            </MDBModal>
        </div>
    )
}

export default AddNewAccount
