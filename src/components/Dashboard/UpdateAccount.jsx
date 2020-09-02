import React, {useState} from 'react'
import { MDBBtn, MDBInput } from 'mdbreact';
import accounts from '../../services/accounts';


const UpdateAccount = (props) => {
    const [formData, setFormData] = useState({
        accountName: props.accountName
    })

    const { accountName } = formData

    const handleChange = text => event => {
        setFormData({...formData,[text]:event.target.value})
    }

    const handleSubmit = async event =>{
        event.preventDefault();
        // await accountsServices.create(accountName, props.currentUser.id);
        console.log(props.accountId)
        const response = await accounts.updateById(props.accountId)
        console.log(response)
        props.fetchData(props.currentUser)
    }

    return (
        <div>
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
        </div>
    )
}

export default UpdateAccount
