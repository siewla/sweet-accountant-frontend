import React, { useState } from 'react'
import AddNewAccount from './AddNewAccount'
import { MDBDataTableV5 } from 'mdbreact';

const AccountsDetail = (props) => {
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
                actions: 'edit'
            },
            {
                number:2,
                name: 'ocbc',
                balance: 3321.52,
                actions: 'edit'
            },
            {
                number:3,
                name: 'citibank',
                balance: 34.19,
                actions: 'edit'
            },
            {
                number:4,
                name: 'cash',
                balance: 194.17,
                actions: 'edit'
            }
        ]
    })

    return (
        <div className="accounts">
            <AddNewAccount currentUser = {currentUser} />
            <div className="accounts-details-container">
                <h2>Credit: 0</h2>
                <h2>Debit: 0</h2>
                <h2>Balance: 0</h2>
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
