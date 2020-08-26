import React, {useState, useEffect} from 'react'
import transactions from '../../services/transactions'
import { MDBDataTableV5 } from 'mdbreact';
import categoriesService from '../../services/categories'
import usersService from '../../services/usersService'
import Moment from 'react-moment';
import authentication from '../../services/authentication'

import dataColumn from './transactionsTableDataColumn'
import UpdateIndividualTransaction from './UpdateIndividualTransaction';



const ListAllTransactions = (props) => {
    const type = props.match.params.type
    const typeId = props.match.params.id
    const [currentUserData, setCurrentUser] = useState({
        currentUserId:null
    });
    const {currentUserId} = currentUserData

    const [messageData, setMessage] = useState({
        message: ''
    })

    const { message } = messageData

     // check authentication
    const checkAuthentication = async () => {
        const response = await authentication.checkAuthentication();
        if(response.message) {
            return []
        } else {
            return response
        }
    }

    const handleDelete = async (transactionId) =>{
        try{
            await transactions.deleteTransactionById(transactionId)
            if (currentUserId === null){
                const data = await checkAuthentication();
                setCurrentUser({
                    currentUserId: data.id
                })
                fetchData(data.id)
                setMessage({
                    message: `Successfully delete transaction #${transactionId}.`
                })
            } else {
                fetchData(currentUserId)
            }
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
        setMessage({
            message:''
        })
    }


    const [initialData, setData] = useState({
        incomeCategories: [],
        expenseCategories: [],
        allAccounts:[],
        allTransactions: []
    })

    const { incomeCategories, expenseCategories, allAccounts, allTransactions } = initialData

    const fetchData = async(userId) =>{
        let transactionsResponse;
        switch (type){
            case 'account':
                transactionsResponse = await transactions.getAllTransactionsByAccountId(typeId)
                break
            case 'category':
                transactionsResponse = await transactions.getAllTransactionsByCategoriesId(typeId)
                break
            default:
                transactionsResponse =[]
                break
        }

        const incomeResponse = await categoriesService.getAllIncomeCategories()
        const expenseResponse = await categoriesService.getAllExpenseCategories()
        const allCategories = [...incomeResponse, ...expenseResponse]
        const allAccountsResponse = await usersService.getAllAccounts(userId)

        const amendedTransactions = transactionsResponse.map((transaction,index) =>
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
            const idForTransaction = transaction.id
            transaction.actions = <div><button onClick={()=>handleEdit(idForTransaction)}>Edit</button><button onClick={()=>handleDelete(idForTransaction)}>Delete</button></div>
            return transaction
        }) 
        setData({
            incomeCategories: incomeResponse,
            expenseCategories: expenseResponse,
            allAccounts: allAccountsResponse,
            allTransactions: amendedTransactions
        })
    }

    useEffect(() => {
        async function fetchCurrentUser (){
            const data = await checkAuthentication();
            setCurrentUser({
                currentUserId: data.id
            })
            fetchData(data.id)
        }
        fetchCurrentUser() 
        // eslint-disable-next-line
    }, [message])


    return (
        <div>
            <h2>{message}</h2>
    <h1>List of Transactions by <span className="blue-text">{type} {typeId}</span></h1>
            {editState?
            <UpdateIndividualTransaction 
                incomeCategories={incomeCategories}
                expenseCategories={expenseCategories}
                allAccounts={allAccounts}
                fetchData={fetchData}
                currentUserId={currentUserId}
                toggleDisplayEditForm={toggleDisplayEditForm}
                transactionId={currentTransactionId}
                message={message}
                setMessage={setMessage}
            />:null}
            <MDBDataTableV5 
                hover
                entriesOptions = {[5, 10, 25, 50]}
                entries = {5}
                data = {{
                    columns: dataColumn,
                    rows: allTransactions
                }}
            />
            
        </div>
    )
}

export default ListAllTransactions
