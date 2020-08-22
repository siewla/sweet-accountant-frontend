import React, { useState, useEffect } from 'react'
import categoriesService from '../../services/categories'
import AddNewCategory from './AddNewCategory'

const Categories = () => {
    const [initialData, setData] = useState({
        incomeCategories: [],
        expenseCategories: []
    })

    const {incomeCategories, expenseCategories} = initialData

    const fetchCategories = async () => {
        const incomeResponse = await categoriesService.getAllIncomeCategories()
        // console.log(incomeResponse)
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
        <div>
            <AddNewCategory fetchCategories={fetchCategories}/>
            <h1>Income Categories</h1>
            {incomeCategories.map(category=>{
                return <h2 key={category.id}>{category.name}</h2>
            })}
            <h1>Expense Categories</h1>
            {expenseCategories.map(category=>{
                return <h2 key={category.id}>{category.name}</h2>
            })}
        </div>
    )
}

export default Categories
