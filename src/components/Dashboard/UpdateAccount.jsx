import React, {useState, useEffect} from 'react'
import { MDBBtn, MDBInput } from 'mdbreact';
import accounts from '../../services/accounts';


const UpdateAccount = (props) => {
    const [formData, setFormData] = useState({
        name: ''
    })

    const { name } = formData

    const fetchCurrentAccount = async() =>{
        const account = await accounts.getOne(props.accountId)
        setFormData({
            name: account.name
        })
    }

    const handleChange = text => event => {
        setFormData({...formData,[text]:event.target.value})
    }

    const handleSubmit = async event =>{
        event.preventDefault();
        await accounts.updateById(props.accountId, formData)
        props.fetchData(props.currentUser)
        props.toggleDisplayEditForm(false)
    }

    useEffect(() => {
        async function fetchAccount (){
            fetchCurrentAccount()
        }
        fetchAccount()
        //eslint-disable-next-line
    }, [props.accountId])

    return (
        <div>
            <form onSubmit={handleSubmit}>        
                    <MDBInput 
                        label="New Account Name" 
                        type="text" 
                        onChange={handleChange('name')}
                        value={name}
                        required
                    />
                    <div className="text-center">
                        <MDBBtn color="primary" type="submit">Update</MDBBtn>
                        <MDBBtn color="default" onClick={()=>props.toggleDisplayEditForm(false)}>Cancel</MDBBtn>
                    </div>
                </form>
        </div>
    )
}

export default UpdateAccount
