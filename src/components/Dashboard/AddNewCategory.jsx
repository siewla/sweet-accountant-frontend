import React, {useState} from 'react'
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput } from 'mdbreact';
import categoriesServices from '../../services/categories';

const AddNewCategory = (props) => {
    const [formData, setFormData] = useState({
        name:'',
        type:''
    })

    const { name, type } = formData

    const [modalIsOpen, setModalIsOpen] = useState(false);

      //handle change from user inputs
    const handleChange = text => event => {
        setFormData({...formData,[text]:event.target.value})
    }

    const handleSubmit = async event =>{
        event.preventDefault();
        // console.log(name, type)
        if (type === 'income' || type ==='expense'){
            await categoriesServices.create(name, type);
            setModalIsOpen(false);
            props.fetchCategories();
        }
    }
    
    return (
        <div>
            <MDBBtn onClick={()=>setModalIsOpen(!modalIsOpen)}>Add New Category</MDBBtn>
            <MDBModal isOpen={modalIsOpen} toggle={()=>setModalIsOpen(!modalIsOpen)}>
                <MDBModalHeader toggle={()=>setModalIsOpen(!modalIsOpen)}>Add New Category</MDBModalHeader>
                <MDBModalBody>
                <form onSubmit={handleSubmit}>        
                    <MDBInput 
                        label="Name" 
                        type="text" 
                        onChange={handleChange('name')}
                        value={name}
                        required
                    />          
                    <select className="browser-default custom-select" value={type} onChange={handleChange('type')}>
                        <option>Type</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                    <div className="text-center">
                        <MDBBtn type="submit">Add</MDBBtn>
                    </div>
                </form>
                </MDBModalBody>
            </MDBModal>
        </div>
    )
}

export default AddNewCategory
