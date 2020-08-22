import React, { useState, useEffect } from 'react'
import transactions from '../../services/transactions'
import { MDBInput, MDBBtn } from 'mdbreact'
import categoriesService from '../../services/categories'
import usersService from '../../services/usersService'

const AddNewTransactionForm = (props) => {
    const currentUser = props.currentUser

    const [formData, setFormData] = useState({
        amount: '',
        description: '',
        paidAt: '',
        categoryId: '',
        accountId: '',
    })

    const { amount, description, paidAt, categoryId, accountId } = formData

    const handleChange = text => event => {
        setFormData({...formData,[text]:event.target.value})
    }


    const [initialData, setData] = useState({
        incomeCategories: [],
        expenseCategories: [],
        allAccounts:[]
    })

    const {incomeCategories, expenseCategories, allAccounts} = initialData

    const fetchData = async () => {
        const incomeResponse = await categoriesService.getAllIncomeCategories()
        const expenseResponse = await categoriesService.getAllExpenseCategories()
        const allAccountsResponse = await usersService.getAllAccounts(currentUser.id)
        setData({
            incomeCategories: incomeResponse,
            expenseCategories: expenseResponse,
            allAccountsResponse: allAccountsResponse
        })
    }

    useEffect(() => {
        fetchData()}, []
    )

    const handleSubmit = async event => {
        event.preventDefault();
        const transactionsData = formData
        transactionsData.amount = parseInt(transactionsData.amount)
        transactionsData.accountId = parseInt(transactionsData.accountId)
        transactionsData.categoryId = parseInt(transactionsData.categoryId)
        const response = await transactions.create(transactionsData)
        console.log(response)
    }

    return (
        <form onSubmit={handleSubmit}>
            <MDBInput 
                label="amount" 
                type="number" 
                onChange={handleChange('amount')}
                value={amount}
                required
            />
            <MDBInput 
                label="description" 
                type="text" 
                onChange={handleChange('description')}
                value={description}
                required
            />
            <MDBInput 
                label="paidAt" 
                type="date" 
                onChange={handleChange('paidAt')}
                value={paidAt}
                required
            />
            <MDBInput 
                label="Category" 
                type="number" 
                onChange={handleChange('categoryId')}
                value={categoryId}
                required
            />
            <MDBInput 
                label="Account" 
                type="number" 
                onChange={handleChange('accountId')}
                value={accountId}
                required
            />
            <div className="text-center">
                <MDBBtn type="submit">Add</MDBBtn>
            </div>
        </form>
    )
}

export default AddNewTransactionForm
