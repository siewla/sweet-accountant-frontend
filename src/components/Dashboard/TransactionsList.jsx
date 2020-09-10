import React, { useState, useEffect } from 'react'
import transactions from '../../services/transactions'
import categoriesService from '../../services/categories'
import usersService from '../../services/usersService'
import authentication from '../../services/authentication'
import { MDBDataTableV5, MDBBtn } from 'mdbreact';
import dataColumn from './transactionsTableDataColumn'
import Moment from 'react-moment';
import UpdateIndividualTransaction from './UpdateIndividualTransaction';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const TransactionsList = (props) => {
    const [currentUser, setCurrentUser] = useState(props.currentUser)
    const [startDate, setStartDate] = useState(null); //1 week ago
    const [endDate, setEndDate] = useState(null);

    const checkAuthentication = async () => {
        const response = await authentication.checkAuthentication();
        if (response.message) {
            return []
        } else {
            return response
        }
    }

    const [triggerEffect, setTriggerEffect] = useState(false)

    const [initialData, setData] = useState({
        incomeCategories: [],
        expenseCategories: [],
        allCategories: [],
        allAccounts: [],
        allTransactions: [],
    })

    const { incomeCategories, expenseCategories, allCategories, allAccounts, allTransactions } = initialData

    const [editState, toggleDisplayEditForm] = useState(false)

    const [currentTransactionId, setCurrentTransactionId] = useState(null)

    const handleEdit = (transactionId) => {
        toggleDisplayEditForm(true)
        setCurrentTransactionId(transactionId)
    }

    const handleDelete = async (transactionId) => {
        try {
            await transactions.deleteTransactionById(transactionId)
            setTriggerEffect(!triggerEffect)
        } catch (err) {
            console.log(err)
        }
        // console.log('handle delete', transactionId)
    }

    // const getCommon = (arr1, arr2) =>{
    //     const common = [];
    //     let i = 0, j = 0;       
    //     while(i<arr1.length && j<arr2.length) {
    //         if(arr1[i].id === arr2[j].id) {        // If both are same, add it to result
    //             common.push(arr1[i]);
    //             i++;
    //             j++;
    //         }
    //         else if(arr1[i] < arr2[j]) {  // Increment the smaller value so that
    //             i++;                        // it could be matched with the larger
    //         }                             // element
    //         else {
    //             j++;
    //         }
    //       }          // i points to arr1 and j to arr2

    //     return common;
    // }

    const handleDateSubmit = async () => {
        props.setFilterMsg('date')
        const allTransactionsRangeResponse = await transactions.getAllTransactionsByRange(startDate, endDate)
        const amendedTransactions = amendTransactions(allTransactionsRangeResponse, allAccounts, allCategories)
        // const matchedTransactions = getCommon(amendedTransactions, allTransactions)
        setData((prevState) => ({
            ...prevState,
            // allTransactions: matchedTransactions
            allTransactions: amendedTransactions
        }))
    }

    const handleClear = async () => {
        props.setFilterMsg('none')
        const transactionsResponse = await transactions.getAllTransactions(currentUser.id)
        const amendedTransactions = amendTransactions(transactionsResponse, allAccounts, allCategories)
        setData((prevState) => ({
            ...prevState,
            allTransactions: amendedTransactions
        }))
    }

    const amendTransactions = (transactions, allAccounts, allCategories) => {
        transactions.map((transaction, index) => {
            allAccounts.filter(account => {
                if (account.id === transaction.accountId) {
                    transaction.accountName = account.name
                    return transaction
                } else
                    return null
            })
            allCategories.filter(category => {
                if (category.id === transaction.categoryId) {
                    transaction.categoryName = category.name
                    return transaction
                } else
                    return null
            })

            const calendarStrings = {
                lastDay: 'DD/MM/YYYY',
                sameDay: 'DD/MM/YYYY',
                nextDay: 'DD/MM/YYYY',
                lastWeek: 'DD/MM/YYYY',
                nextWeek: 'DD/MM/YYYY',
                sameElse: 'DD/MM/YYYY'
            };

            transaction.paidAt = <Moment calendar={calendarStrings}>{transaction.paidAt}</Moment>
            transaction.amount = (parseFloat(transaction.amount) / 100).toFixed(2)
            const idForTransaction = transaction.id
            transaction.actions = <div><MDBBtn color="primary" size="sm" onClick={() => handleEdit(idForTransaction)}>Edit</MDBBtn><MDBBtn color="red" size="sm" onClick={() => handleDelete(idForTransaction)}>Delete</MDBBtn></div>
            return transaction
        })
        return transactions
    }


    useEffect(() => {
        async function fetchData(user) {
            let transactionsResponse;
            switch (props.type) {
                case 'account':
                    transactionsResponse = await transactions.getAllTransactionsByAccountId(props.typeId)
                    break
                case 'category':
                    transactionsResponse = await transactions.getAllTransactionsByCategoryId(props.typeId)
                    break
                case 'all':
                    transactionsResponse = await transactions.getAllTransactions(user.id)
                    break;
                default:
                    transactionsResponse = []
                    break
            }
            const incomeResponse = await categoriesService.getAllIncomeCategories()
            const expenseResponse = await categoriesService.getAllExpenseCategories()
            const allCategoriesResponse = [...incomeResponse, ...expenseResponse]
            const allAccountsResponse = await usersService.getAllAccounts(user.id)
            const amendedTransactions = amendTransactions(transactionsResponse, allAccountsResponse, allCategoriesResponse)
            setData({
                incomeCategories: incomeResponse,
                expenseCategories: expenseResponse,
                allCategories: allCategoriesResponse,
                allAccounts: allAccountsResponse,
                allTransactions: amendedTransactions,
            })
        }

        async function fetchCurrentUser() {
            const data = await checkAuthentication()
            setCurrentUser(data)
            fetchData(data)
        }

        if (!currentUser.id) {
            fetchCurrentUser()
        } else {
            fetchData(currentUser)
        }

        // eslint-disable-next-line
    }, [currentUser, triggerEffect, props.type, props.typeId])


    return (
        <div>

            {props.filterMsg !== 'disabled' ? <div>
                <div className="date-filter-container z-depth-1">
                    <h5 className="card-header default-color">Filtered by Date</h5>
                    <div className="date-filter-container-column">
                        <div>
                            <h6>From</h6>
                            <DatePicker
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                maxDate={new Date()}
                            />
                        </div>
                        <div>
                            <h6>To </h6>
                            <DatePicker
                                selected={endDate}
                                onChange={date => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                maxDate={new Date()}
                            />
                        </div>
                        <MDBBtn className="float-right" color="primary" size="sm" onClick={() => handleDateSubmit()}>Submit</MDBBtn>
                    </div>

                </div>

                <h5>Filtered by {props.filterMsg}</h5>
                <MDBBtn color="unique" onClick={() => handleClear()}>Clear Filter</MDBBtn>
            </div> : null}
            {editState ?
                <UpdateIndividualTransaction
                    incomeCategories={incomeCategories}
                    expenseCategories={expenseCategories}
                    allAccounts={allAccounts}
                    triggerEffect={triggerEffect}
                    setTriggerEffect={setTriggerEffect}
                    currentUser={currentUser}
                    toggleDisplayEditForm={toggleDisplayEditForm}
                    transactionId={currentTransactionId}
                /> : null}
            <MDBDataTableV5
                hover
                entriesOptions={[5, 10, 25, 50]}
                entries={5}
                data={{
                    columns: dataColumn,
                    rows: allTransactions
                }}
            />
        </div>
    )
}

export default TransactionsList
