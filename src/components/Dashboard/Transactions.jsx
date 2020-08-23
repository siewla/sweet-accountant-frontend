import React, { useState, useEffect } from 'react'
import transactions from '../../services/transactions'
import categoriesService from '../../services/categories'
import usersService from '../../services/usersService'
import { useHistory } from 'react-router-dom';
import authentication from '../../services/authentication'
import { MDBDataTableV5 } from 'mdbreact';
import dummyTransactions from './dummyTransactions'


const Transactions = () => {
    const history = useHistory();
    const [currentUser, setCurrentUser] = useState({});

    const [allTransactionsDummy, setAllTransactionsDummy] = useState(dummyTransactions);

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
        categoryFilterName: 'clear',
        accountFilterName: 'clear'
    })

    const {incomeCategories, expenseCategories, allAccounts, allTransactions, categoryFilterName, accountFilterName} = initialData

    const dataColumn= 
        [
            {
                label: '#',
                field: 'number'
            },
            {
                label: "Category",
                field: 'category'
            },
            {
                label: 'Account',
                field: 'account'

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
                label: 'Actions',
                field: 'actions'
            }
        ]

    const fetchData= async (currentUser) => {
        const allTransactionsResponse = await transactions.getAllTransactions(currentUser.id)
        const incomeResponse = await categoriesService.getAllIncomeCategories()
        const expenseResponse = await categoriesService.getAllExpenseCategories()
        const allAccountsResponse = await usersService.getAllAccounts(currentUser.id)
        setData({
            incomeCategories: incomeResponse,
            expenseCategories: expenseResponse,
            allAccounts: allAccountsResponse,
            allTransactions: allTransactionsResponse
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

    const handleFilter = (filterString) => {
        console.log(filterString)
        const filteredTransactions = dummyTransactions.filter(transaction =>{
            if (filterString === 'clear'){
                return transaction
            } else{
                return transaction.account === filterString
            }
        })
        setAllTransactionsDummy(filteredTransactions)
    }

    useEffect(() => {
        async function fetchCurrentUser (){
            const data = await checkAuthentication();
            setCurrentUser(data)
            fetchData(data)
        }
        fetchCurrentUser()     
    }, [])

    return (
        <div>
            <div className="statistic-box">
                <h4>Total Transactions: <strong className="grey-text">0.00</strong></h4>
                <h4>Total Income: <strong className="grey-text">0.00</strong></h4>
                <h4>Total Expense: <strong className="grey-text">0.00</strong></h4>
                <h4>Total Balance: <strong className="grey-text">0.00</strong></h4>
            </div>
            <h1>Filters</h1>
            <button onClick={()=>handleFilter('clear')}>Clear Filter</button>
            <select className="browser-default custom-select" value={categoryFilterName} onChange={(e)=>handleFilter(e.target.value)}>
                <option>Filter by Income Categories</option>
                {incomeCategories.map(category => {
                    return <option value={category.name} key={category.id}>{category.name}</option>
                })}
            </select>
            <select className="browser-default custom-select" value={categoryFilterName} onChange={(e)=>handleFilter(e.target.value)}>
                <option>Filter by Expense Categories</option>
                {expenseCategories.map(category => {
                    return <option value={category.name} key={category.id}>{category.name}</option>
                })}
            </select>
            <select className="browser-default custom-select" value={accountFilterName} onChange={(e)=>handleFilter(e.target.value)}>
                <option>Filter by Account</option>
                {allAccounts.map(account => {
                    return <option value={account.name} key={account.id}>{account.name}</option>
                })}
            </select>
            <h1>Transactions List</h1>
            <MDBDataTableV5 
                hover
                entriesOptions = {[5, 10, 25, 50]}
                entries = {5}
                data = {{
                    columns: dataColumn,
                    rows: allTransactionsDummy
                }}
            />
        </div>
    )
}

export default Transactions
