import React, { useState } from 'react'
import AddNewAccount from './AddNewAccount'
import { MDBDataTableV5 } from 'mdbreact';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

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
                clickEvent: () => handleClick(1)
            },
            {
                number:2,
                name: 'ocbc',
                balance: 3321.52,
                actions: 'edit',
                clickEvent: () => handleClick(2)
            },
            {
                number:3,
                name: 'citibank',
                balance: 34.19,
                actions: 'edit',
                clickEvent: () => handleClick(3)
            },
            {
                number:4,
                name: 'cash',
                balance: 194.17,
                actions: 'edit',
                clickEvent: () => handleClick(4)
            }
        ]
    })

    const routeChange =(accountId)=> {
        let path = `/accounts/${accountId}`;
        history.push(path);
    }
    

    const handleClick = (e) =>{
        routeChange(e)
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
        </div>
    )
}

export default AccountsDetail
