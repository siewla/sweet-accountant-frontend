import React, { useState, useEffect }from 'react'
import { MDBBtn, MDBInput} from 'mdbreact';
import transactions from '../../services/transactions'
import DatePicker from "react-datepicker";


const UpdateIndividualTransaction = (props) => {

    const [formData, setFormData] = useState({
        amount: '',
        description: '',
        paidAt: new Date(),
        categoryId: '',
        accountId: '',
    })

    const [transactionDate, setTransactionDate] = useState(new Date());
    const today = new Date();

    const { amount, description, paidAt, categoryId, accountId} = formData

    // console.log(props.allAccounts)
    // console.log(props.expenseCategories)
    // console.log(props.incomeCategories)
    // console.log(props.currentUserId)
    // console.log(props.transactionId)

    const fetchCurrentTransaction = async() =>{
        const transaction = await transactions.getOne(props.transactionId)
        transaction.amount = parseFloat(transaction.amount)/100
        setFormData({
            amount: transaction.amount,
            description:transaction.description,
            paidAt: new Date(transaction.paidAt.replace(' ', 'T')),
            categoryId: transaction.categoryId,
            accountId:transaction.accountId
        })
    }

    const handleChange = text => event => {
        setFormData({...formData,[text]:event.target.value})
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        if ( (formData.accountId && formData.categoryId) !== ''){
            const transactionsData = formData
            transactionsData.amount = parseInt(transactionsData.amount*100)
            transactionsData.accountId = parseInt(transactionsData.accountId)
            transactionsData.categoryId = parseInt(transactionsData.categoryId)
            transactionsData.paidAt = transactionDate
            const response = await transactions.update(props.transactionId,transactionsData)
            props.fetchData(props.currentUserId)
            props.toggleDisplayEditForm(false)
            // console.log(response)
            props.setMessage({
                message: response.message
            })
        }
    }

    useEffect(() => {
        async function fetchTransaction (){
            fetchCurrentTransaction()
        }
        fetchTransaction()
        //eslint-disable-next-line
    }, [props.transactionId, props.setMessage])

    return (
        <div>
            <div className="edit-transaction-form">
                <h2>Editing transaction #{props.transactionId}</h2>
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
                            {props.incomeCategories.map(category => {
                                return <option value={category.id} key={category.id}>{category.name}</option>
                            })}
                        </select>
                        <select className="browser-default custom-select" value={categoryId} onChange={handleChange('categoryId')}>
                            <option>Expense Categories</option>
                            {props.expenseCategories.map(category => {
                                return <option value={category.id} key={category.id}>{category.name}</option>
                            })}
                        </select>
                        <select className="browser-default custom-select" value={accountId} onChange={handleChange('accountId')}>
                            <option>Account</option>
                            {props.allAccounts.map(account => {
                                return <option value={account.id} key={account.id}>{account.name}</option>
                            })}
                        </select>
                        <div className="text-center">
                            <MDBBtn type="submit">Edit</MDBBtn>
                            <MDBBtn onClick={()=>props.toggleDisplayEditForm(false)}>Cancel</MDBBtn>
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default UpdateIndividualTransaction
