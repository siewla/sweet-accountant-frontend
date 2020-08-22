import React, { useState, useEffect } from 'react'
import AddNewAccount from './AddNewAccount'
import { MDBDataTableV5 } from 'mdbreact';
import { useHistory } from 'react-router-dom';
import usersService from '../../services/usersService'

const AccountsDetail = (props) => {
    const history = useHistory();
    const currentUser = props.currentUser;
    const [datatable, setDatatable] = useState({
        columns:[
            {
                label: '#',
                field: 'number'

            },
            {
                label: 'Account Name',
                field: 'name'

            },
            {
                label: 'Balance',
                field: 'balance'
            },
            {
                label: 'Actions',
                field: 'actions'
            }
        ], 
        rows: [
            {
                number:1,
                name: 'dbs',
                balance: 324.12,
                actions: 'edit',
            },
            {
                number:2,
                name: 'ocbc',
                balance: 3321.52,
                actions: 'edit',
            },
            {
                number:3,
                name: 'citibank',
                balance: 34.19,
                actions: 'edit',
            },
            {
                number:4,
                name: <button onClick ={()=>handleAccount(4)}>cash</button>,
                balance: 194.17,
                actions: 
                    <div>
                        <button onClick={()=>handleDelete(4)}>Delete</button>
                        <button onClick={()=>handleEdit(4)}>Edit</button>
                    </div>
                    ,
            }
        ]
    })

    const [initialData, setData] = useState({
        allAccounts: []
    })

    const { allAccounts} = initialData

    const fetchData= async () => {
        // console.log(currentUser);
        const allAccountsResponse = await usersService.getAllAccounts(currentUser.id)
        setData({
            allAccounts: allAccountsResponse
        })
    }

    useEffect(() => {
        fetchData()
    }, []
    )

    const routeChange =(accountId)=> {
        let path = `/accounts/${accountId}`;
        history.push(path);
    }
    

    const handleAccount = (e) =>{
        routeChange(e)
    }

    const handleDelete = (e) =>{
        console.log('handle delete')
    }

    const handleEdit = (e) =>{
        console.log('handle edit')
    }

    return (
        <div className="accounts">
            <div className="d-flex justify-content-center align-items-center">
                <div className="accounts-details-container">
                    <h4>Credit: <strong className="grey-text">0.00</strong></h4>
                    <h4>Debit: <strong className="grey-text">0.00</strong></h4>
                    <h4>Balance: <strong className="grey-text">0.00</strong></h4>
                </div>
                <AddNewAccount currentUser = {currentUser} />
            </div>
            <MDBDataTableV5 
                hover
                entriesOptions = {[5, 10, 25, 50]}
                entries = {5}
                data = {datatable}
            />
            <h1>Account Name</h1>
            {allAccounts.map(account=>{
                return <h2 key={account.id}>{account.name}</h2>
            })}
        </div>
    )
}

export default AccountsDetail
