import React, {useState, useEffect} from 'react'
import transactions from '../../services/transactions'
import categoriesService from '../../services/categories'
import usersService from '../../services/usersService'
import authentication from '../../services/authentication'
import {trackPromise} from 'react-promise-tracker'
import AddNewTransactionForm from './AddNewTransactionForm'

const AddNewTransaction = (props) => {
    const [currentUser, setCurrentUser]= useState(props.currentUser)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [transactionDate, setTransactionDate] = useState(new Date());
    // check authentication
    const checkAuthentication = async () => {
        const response = await authentication.checkAuthentication();
        if(response.message) {
            return []
        } else {
            return response
        }
    }

    const [formData, setFormData] = useState({
        amount: '',
        description: '',
        paidAt: new Date(),
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
        allAccounts:[],
    })

    const {incomeCategories, expenseCategories, allAccounts} = initialData

    const handleSubmit = async event => {
        event.preventDefault();
        if ( (formData.accountId && formData.categoryId) !== ''){
            const transactionsData = formData
            transactionsData.amount = parseInt(transactionsData.amount*100)
            transactionsData.accountId = parseInt(transactionsData.accountId)
            transactionsData.categoryId = parseInt(transactionsData.categoryId)
            transactionsData.paidAt = transactionDate
            
            await transactions.create(transactionsData)
            // console.log(response)
            setFormData({
                amount: '',
                description: '',
                paidAt: new Date(),
                categoryId: '',
                accountId: '',
            })
            setModalIsOpen(!modalIsOpen)
            window.location.reload()
        }
    
    }

    useEffect(() => {
        async function fetchData (user){
            const incomeResponse = await categoriesService.getAllIncomeCategories()
            const expenseResponse = await categoriesService.getAllExpenseCategories()
            const allAccountsResponse = await usersService.getAllAccounts(user.id)

            setData({
                incomeCategories: incomeResponse,
                expenseCategories: expenseResponse,
                allAccounts: allAccountsResponse,
            })
        }

        async function fetchCurrentUser (){
            const data = await trackPromise(checkAuthentication())
            setCurrentUser(data)
            fetchData(data)
        }

        if (!currentUser.id){
            fetchCurrentUser()
        } else{
            fetchData(currentUser)
        }
        // eslint-disable-next-line
    }, [currentUser])

    return (
        <div>
            <AddNewTransactionForm 
                setModalIsOpen={setModalIsOpen}
                modalIsOpen ={modalIsOpen}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                amount={amount}
                description={description}
                transactionDate={transactionDate}
                setTransactionDate={setTransactionDate}
                paidAt={paidAt}
                incomeCategories={incomeCategories}
                expenseCategories={expenseCategories}
                allAccounts={allAccounts}
                categoryId={categoryId}
                accountId={accountId}
            />
        </div>
    )
}

export default AddNewTransaction
