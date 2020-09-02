import React, { useState, useEffect } from 'react'
import transactions from '../../services/transactions'
import accounts from '../../services/accounts'
import categoriesService from '../../services/categories'
import usersService from '../../services/usersService'
import authentication from '../../services/authentication'
import { MDBDataTableV5 } from 'mdbreact';
import Moment from 'react-moment';
import AddNewTransaction from './AddNewTransaction';
import {trackPromise} from 'react-promise-tracker'
import Loader from '../Loader';
import UpdateIndividualTransactionInMain from './UpdateIndividualTransactionInMain';



const Transactions = (props) => {
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

    const [initialData, setData] = useState({
        incomeCategories: [],
        expenseCategories: [],
        allAccounts:[],
        allTransactions: [],
        tableTransactions: [],
        allAccountsStatistic:{
            totalTransactions: 0,
            totalIncome: 0.00,
            totalExpense: 0.00,
            balance: 0.00
        }
    })

    const {incomeCategories, expenseCategories, allAccounts, allTransactions, tableTransactions, categoryFilterName, accountFilterName, allAccountsStatistic} = initialData

    const [filterMsg, setfilterMsg] = useState('none')
    
    const dataColumn= 
        [
            {
                label: '#',
                field: 'id'
            },
            {
                label: "Category",
                field: 'categoryName'
            },
            {
                label: 'Account',
                field: 'accountName'

            },
            {
                label: 'Amount',
                field: 'amount'
            },
            {
                label: 'Description',
                field: 'description'
            },
            {
                label: 'Date',
                field: 'paidAt',
                sort: 'disabled'
            },
            
            {
                label: 'Actions',
                field: 'actions',
                sort: 'disabled'
            }
        ]
    const handleDelete = async (transactionId) =>{
        try{
            await transactions.deleteTransactionById(transactionId)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    // console.log('handle delete', transactionId)
    }

    const [editState, toggleDisplayEditForm] = useState(false)

    const [currentTransactionId, setCurrentTransactionId] =useState(null)


    const handleEdit = (transactionId) =>{
        toggleDisplayEditForm(true)
        setCurrentTransactionId(transactionId)
    }
    
    
    const fetchData= async (currentUser) => {
        const allAccountsStatisticResponse = await accounts.getAllAccountsStatistic(currentUser.id)
        const allTransactionsResponse = await trackPromise( transactions.getAllTransactions(currentUser.id))
        const incomeResponse = await trackPromise( categoriesService.getAllIncomeCategories())
        const expenseResponse = await trackPromise( categoriesService.getAllExpenseCategories())
        const allCategories = [...incomeResponse, ...expenseResponse]
        const allAccountsResponse = await trackPromise( usersService.getAllAccounts(currentUser.id))
        const amendedTransactions = allTransactionsResponse.map((transaction,index) =>
        {
            allAccountsResponse.filter( account=>{ 
                if( account.id === transaction.accountId){
                    transaction.accountName = account.name
                    return transaction
                } else
                    return null
            })
            allCategories.filter ( category =>{
                if ( category.id === transaction.categoryId){
                    transaction.categoryName = category.name
                    return transaction
                } else
                    return null
            })

            const calendarStrings = {
                lastDay : '[Yesterday]',
                sameDay : '[Today]',
                nextDay : 'DD/MM/YYYY',
                lastWeek : 'DD/MM/YYYY',
                nextWeek : 'DD/MM/YYYY',
                sameElse : 'DD/MM/YYYY'
            };

            transaction.paidAt = <Moment calendar={calendarStrings}>{transaction.paidAt}</Moment>
            transaction.amount = (parseFloat(transaction.amount)/100).toFixed(2)
            const idForTransaction = transaction.id
            transaction.actions = <div><button onClick={()=>handleEdit(idForTransaction)}>Edit</button><button onClick={()=>handleDelete(idForTransaction)}>Delete</button></div>
            return transaction
        }) 
        allAccountsStatisticResponse.totalTransactions = allTransactionsResponse.length

        setData({
            incomeCategories: incomeResponse,
            expenseCategories: expenseResponse,
            allAccounts: allAccountsResponse,
            allTransactions: amendedTransactions,
            tableTransactions: amendedTransactions,
            allAccountsStatistic: allAccountsStatisticResponse
        })
    }

    const handleFilter = (filterString, filterType) => {
        let filteredTransactions;
        if (filterType===null){
            filteredTransactions = allTransactions
        } else{
            filteredTransactions = allTransactions.filter(transaction =>{
            if( filterType === 'byAccount' && transaction.accountName === filterString){
                return transaction
            } else if( filterType === 'byCategory' && transaction.categoryName === filterString){

                return transaction
            } else return null
        })
        }

        if( filterType === 'byAccount'){
            setfilterMsg(`Account Name: ${filterString}`)
        } else if( filterType === 'byCategory'){
            setfilterMsg(`Category Name: ${filterString}`)
        }

        setData((prevState) =>({
            ...prevState,
            tableTransactions: filteredTransactions,
            categoryFilterName: '',
            accountFilterName: ''
        }))
    }

    useEffect(() => {
        async function fetchCurrentUser (){
            const data = await trackPromise(checkAuthentication())
            setCurrentUser(data)
            fetchData(data)
        }
        fetchCurrentUser() 
        // eslint-disable-next-line
    }, [AddNewTransaction])

    return (
        <div>
            <AddNewTransaction currentUser={currentUser} fetchData={fetchData} currentContent={props.currentContent} changeCurrentContent={props.changeCurrentContent}/>
            <div className="statistic-box">
                <h4>Total Transactions: <strong className="grey-text">{allAccountsStatistic.totalTransactions}</strong></h4>
                <h4>Credit: <strong className="grey-text">{(parseFloat(allAccountsStatistic.totalExpense)/100).toFixed(2)}</strong></h4>
                    <h4>Debit: <strong className="grey-text">{(parseFloat(allAccountsStatistic.totalIncome)/100).toFixed(2)}</strong></h4>
                    <h4>Balance: <strong className="grey-text">{(parseFloat(allAccountsStatistic.balance)/10).toFixed(2)}</strong></h4>
            </div>
            <h1>Filters</h1>
            <button onClick={()=>handleFilter('clear', null)}>Clear Filter</button>
            <select className="browser-default custom-select" value={categoryFilterName} onChange={(e)=>handleFilter(e.target.value, 'byCategory')}>
                <option>Filter by Income Categories</option>
                {incomeCategories.map(category => {
                    return <option value={category.name} key={category.id}>{category.name}</option>
                })}
            </select>
            <select className="browser-default custom-select" value={categoryFilterName} onChange={(e)=>handleFilter(e.target.value, 'byCategory')}>
                <option>Filter by Expense Categories</option>
                {expenseCategories.map(category => {
                    return <option value={category.name} key={category.id}>{category.name}</option>
                })}
            </select>
            <select className="browser-default custom-select" value={accountFilterName} onChange={(e)=>handleFilter(e.target.value, 'byAccount')}>
                <option>Filter by Account</option>
                {allAccounts.map(account => {
                    return <option value={account.name} key={account.id}>{account.name}</option>
                })}
            </select>
            <h5>Filtered by {filterMsg}</h5>
            <h1>Transactions List</h1>
            <Loader>
            {editState?
            <UpdateIndividualTransactionInMain
                incomeCategories={incomeCategories}
                expenseCategories={expenseCategories}
                allAccounts={allAccounts}
                fetchData={fetchData}
                currentUser={currentUser}
                toggleDisplayEditForm={toggleDisplayEditForm}
                transactionId={currentTransactionId}
            />:null}
                <MDBDataTableV5 
                hover
                entriesOptions = {[5, 10, 25, 50]}
                entries = {5}
                data = {{
                    columns: dataColumn,
                    rows: tableTransactions
                }}
                />
            </Loader>

            
    </div>
    )
}

export default Transactions
