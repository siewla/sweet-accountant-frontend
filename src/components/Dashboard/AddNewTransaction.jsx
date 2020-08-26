import React, { useState, useEffect } from 'react'
import transactions from '../../services/transactions'
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput} from 'mdbreact';
import categoriesService from '../../services/categories'
import usersService from '../../services/usersService'
import authentication from '../../services/authentication'
import DatePicker from "react-datepicker";
import { useHistory } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";

const AddNewTransaction = (props) => {
    const history = useHistory();
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [transactionDate, setTransactionDate] = useState(new Date());
    const today = new Date();

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

    const fetchData = async (currentUser) => {
        const incomeResponse = await categoriesService.getAllIncomeCategories()
        const expenseResponse = await categoriesService.getAllExpenseCategories()
        const allAccountsResponse = await usersService.getAllAccounts(currentUser.id)

        setData({
            incomeCategories: incomeResponse,
            expenseCategories: expenseResponse,
            allAccounts: allAccountsResponse,
        })
    }

    useEffect(() => {
        async function fetchCurrentUser (){
            const currentUser = await checkAuthentication();
            fetchData(currentUser)
        }
        fetchCurrentUser()  
        // eslint-disable-next-line   
    }, [])

    const handleSubmit = async event => {
        event.preventDefault();
        if ( (formData.accountId && formData.categoryId) !== ''){
            const transactionsData = formData
            transactionsData.amount = parseInt(transactionsData.amount*100)
            transactionsData.accountId = parseInt(transactionsData.accountId)
            transactionsData.categoryId = parseInt(transactionsData.categoryId)
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
        }
        props.changeCurrentContent('All Transactions')
        history.push('/transactions')
        // console.log(props.currentUser)
        props.fetchData(props.currentUser)
    }
        
    return (
        <div>
            <MDBBtn onClick={()=>setModalIsOpen(!modalIsOpen)}>Add New Transaction</MDBBtn>
            <MDBModal isOpen={modalIsOpen} toggle={()=>setModalIsOpen(!modalIsOpen)}>
                <MDBModalHeader toggle={()=>setModalIsOpen(!modalIsOpen)}>Add New Transaction</MDBModalHeader>
                <MDBModalBody>
                <form onSubmit={handleSubmit}>
                    <MDBInput 
                        label="Amount" 
                        type="number" 
                        step="0.01"
                        min="0"
                        onChange={handleChange('amount')}
                        value={amount}
                        required
                    />
                    <MDBInput 
                        label="Description" 
                        type="text" 
                        maxLength="25"
                        onChange={handleChange('description')}
                        value={description}
                        required
                    />
                    <div className="date-container">
                        <h6>Paid At</h6>
                        <DatePicker 
                        selected={transactionDate} 
                        value={paidAt}
                        onChange={date => setTransactionDate(date)} 
                        maxDate={today}
                        showTimeSelect
                        />
                    </div>
                    
                    
                    <select className="browser-default custom-select" value={categoryId} onChange={handleChange('categoryId')}>
                        <option>Income Categories</option>
                        {incomeCategories.map(category => {
                            return <option value={category.id} key={category.id}>{category.name}</option>
                        })}
                    </select>
                    <select className="browser-default custom-select" value={categoryId} onChange={handleChange('categoryId')}>
                        <option>Expense Categories</option>
                        {expenseCategories.map(category => {
                            return <option value={category.id} key={category.id}>{category.name}</option>
                        })}
                    </select>
                    <select className="browser-default custom-select" value={accountId} onChange={handleChange('accountId')}>
                        <option>Account</option>
                        {allAccounts.map(account => {
                            return <option value={account.id} key={account.id}>{account.name}</option>
                        })}
                    </select>
                    <div className="text-center">
                        <MDBBtn type="submit">Add</MDBBtn>
                    </div>
                </form>
                </MDBModalBody>
            </MDBModal>
        </div>
    )
}

export default AddNewTransaction
