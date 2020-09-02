import React, { useState, useEffect } from 'react'
import AddNewAccount from './AddNewAccount'
import UpdateAccount from './UpdateAccount'
import { MDBDataTableV5 } from 'mdbreact';
import usersService from '../../services/usersService'
import accounts from '../../services/accounts'
import { Link } from 'react-router-dom';

import authentication from '../../services/authentication';


const AccountsDetail = (props) => {
    const [currentUser, setCurrentUser] = useState({});

    // check authentication
    const checkAuthentication = async () => {
        const response = await authentication.checkAuthentication();
        if(response.message) {
            return []
        } else {
            return response
        }
    }

    const dataColumn = [
            {
                label: '#',
                field: 'id'

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
        ]

    const [initialData, setData] = useState({
        allAccounts: [],
        tableAccounts: [],
        allAccountsStatistic:{
            totalIncome: 0.00,
            totalExpense: 0.00,
            balance: 0.00
        }
    })

    const { allAccounts, tableAccounts, allAccountsStatistic} = initialData

    const handleDelete = async (id) =>{
        try{
            await accounts.deleteById(id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    // console.log('handle delete', transactionId)
    }

    const [editState, toggleDisplayEditForm] = useState(false)

    const [currentAccount, setCurrentAccount] =useState({
        currentAccountId: '',
        currentAccountName: ''
    })

    const {currentAccountId, currentAccountName} = currentAccount


    const handleEdit = (id) =>{
        // console.log(id)
        toggleDisplayEditForm(true)
        setCurrentAccount({
            currentAccountId: id,
        })
    }

    // eslint-disable-next-line 
    const fetchData= async (currentUser) => {
        const allAccountsStatisticResponse = await accounts.getAllAccountsStatistic(currentUser.id)
        const allAccountsResponse = await usersService.getAllAccounts(currentUser.id)
        const allAccountsBalance = await accounts.getEachAccountStatistic(currentUser.id)
        // console.log(allAccountsBalance)
        const amendedAccounts = allAccountsResponse.map((accountMain,index) =>{
            allAccountsBalance.filter( account=>{ 
                if( account.accountId === accountMain.id){
                    accountMain.balance = (parseFloat(account.balance)/100).toFixed(2)
                    return accountMain
                } else
                    return null
            })
            const path =`/listalltransactions/account/${accountMain.id}`
            accountMain.name = <Link to={path}><p>{accountMain.name}</p></Link>
            accountMain.actions = <div><button onClick={()=>handleEdit(accountMain.id)}>Edit</button><button onClick={()=>handleDelete(accountMain.id)}>Delete</button></div>
            return accountMain
        }
        )
        setData({
            allAccounts: amendedAccounts,
            tableAccounts: amendedAccounts,
            allAccountsStatistic: allAccountsStatisticResponse
        })
    }

    useEffect(() => {
        async function fetchCurrentUser (){
            const data = await checkAuthentication();
            setCurrentUser(data)
            fetchData(data)
        }
        fetchCurrentUser()   
    // eslint-disable-next-line   
    }, [])


    return (
        <div className="accounts">
            <div className="d-flex justify-content-center align-items-center">
                <div className="accounts-details-container">
                    <h4>Credit: <strong className="grey-text">{(parseFloat(allAccountsStatistic.totalExpense)/100).toFixed(2)}</strong></h4>
                    <h4>Debit: <strong className="grey-text">{(parseFloat(allAccountsStatistic.totalIncome)/100).toFixed(2)}</strong></h4>
                    <h4>Balance: <strong className="grey-text">{(parseFloat(allAccountsStatistic.balance)/10).toFixed(2)}</strong></h4>
                </div>
                <AddNewAccount currentUser={currentUser} fetchData={fetchData}/>
            </div>
            {editState?
            <UpdateAccount 
                fetchData={fetchData}
                currentUser={currentUser}
                toggleDisplayEditForm={toggleDisplayEditForm}
                accountId={currentAccountId}
            />:null}
            <MDBDataTableV5 
                hover
                entriesOptions = {[5, 10, 25, 50]}
                entries = {5}
                data = {{
                    columns: dataColumn,
                    rows: tableAccounts
                }}
            />
            <h1>Account Name</h1>
            {allAccounts.length >0 && allAccounts.map(account=>{
                return <h2 key={account.id}>{account.name}</h2>
            })}
        </div>
    )
}

export default AccountsDetail
