import React, { useState, useEffect } from 'react'
import transactions from '../../services/transactions'
import { MDBInput, MDBBtn } from 'mdbreact'
import categoriesService from '../../services/categories'

const AddNewTransactionForm = () => {
    const [formData, setFormData] = useState({
        amount: '',
        description: '',
        paidAt: '',
        categoryId: '',
        accountId: '',
    })
    const handleSubmit = async event => {
        event.preventDefault()
        // await transactions.create(transactionDetails)
    }

    const [initialData, setData] = useState({
        incomeCategories: [],
        expenseCategories: []
    })

    const {incomeCategories, expenseCategories} = initialData

    const fetchCategories = async () => {
        const incomeResponse = await categoriesService.getAllIncomeCategories()
        const expenseResponse = await categoriesService.getAllExpenseCategories()
        setData({
            incomeCategories: incomeResponse,
            expenseCategories: expenseResponse
        })
    }

    useEffect(() => {
        fetchCategories()}, []
    )

    return (
        <form>
            <MDBInput 
                label="New Account Name" 
                type="text" 
                // onChange={handleChange('accountName')}
                // value={accountName}
                required
            />
            <div className="text-center">
                <MDBBtn type="submit">Add</MDBBtn>
            </div>
        </form>
    )
}

export default AddNewTransactionForm
