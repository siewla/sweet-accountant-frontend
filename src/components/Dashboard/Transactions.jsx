import React, { useState, useEffect } from 'react'
import transactions from '../../services/transactions'
import categoriesService from '../../services/categories'
import usersService from '../../services/usersService'
import { useHistory } from 'react-router-dom';
import authentication from '../../services/authentication'
import { MDBDataTableV5 } from 'mdbreact';
import Moment from 'react-moment';
import AddNewTransaction from './AddNewTransaction';
import {trackPromise} from 'react-promise-tracker'
import Loader from '../Loader';


const Transactions = (props) => {
    const history = useHistory();
    const [currentUser, setCurrentUser] = useState({});

    // check authentication
    const checkAuthentication = async () => {
        const response = await trackPromise(authentication.checkAuthentication())
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
        tableTransactions: []
    })

    const {incomeCategories, expenseCategories, allAccounts, allTransactions, tableTransactions, categoryFilterName, accountFilterName} = initialData

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
    
    const fetchData= async (currentUser) => {
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
            transaction.amount = parseFloat(transaction.amount)/100
            return transaction
        }) 

        setData({
            incomeCategories: incomeResponse,
            expenseCategories: expenseResponse,
            allAccounts: allAccountsResponse,
            allTransactions: amendedTransactions,
            tableTransactions: amendedTransactions
        })
    }

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
    }, [])

    return (
        <div>
            <AddNewTransaction currentUser={currentUser} fetchData={fetchData} currentContent={props.currentContent} changeCurrentContent={props.changeCurrentContent}/>
            <div className="statistic-box">
                <h4>Total Transactions: <strong className="grey-text">0.00</strong></h4>
                <h4>Total Income: <strong className="grey-text">0.00</strong></h4>
                <h4>Total Expense: <strong className="grey-text">0.00</strong></h4>
                <h4>Total Balance: <strong className="grey-text">0.00</strong></h4>
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
