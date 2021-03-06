import React, { useEffect, useState } from 'react'
import StatisticBox from '../StatisticBox'
import transactions from '../../services/transactions'
import accounts from '../../services/accounts'
import categoriesService from '../../services/categories'
import usersService from '../../services/usersService'
import authentication from '../../services/authentication'
import { trackPromise } from 'react-promise-tracker'
import TransactionsList from './TransactionsList'


const Transactions = (props) => {
    const [currentUser, setCurrentUser] = useState(props.currentUser)

    const checkAuthentication = async () => {
        const response = await authentication.checkAuthentication();
        if (response.message) {
            return []
        } else {
            return response
        }
    }

    const [initialData, setData] = useState({
        incomeCategories: [],
        expenseCategories: [],
        allAccounts: [],
        allAccountsStatistic: {
            totalTransactions: 0,
            totalIncome: 0.00,
            totalExpense: 0.00,
            balance: 0.00
        },
        categoryFilterName: '',
        accountFilterName: ''
    })

    const { incomeCategories, expenseCategories, allAccounts, allAccountsStatistic, accountFilterName, categoryFilterName } = initialData

    const [transactionsList, setTransactionsList] = useState({
        listAllTransactionsId: null,
        listAllTransactionsType: 'all'
    })

    const { listAllTransactionsId, listAllTransactionsType } = transactionsList

    const [filterMsg, setFilterMsg] = useState('none')

    const handleFilter = async (filterId, filterType) => {

        if (filterType === 'account') {
            const name = await accounts.getOne(filterId)
            setFilterMsg(`Account Name: ${name.name}`)
        } else if (filterType === 'category') {
            const name = await categoriesService.getOne(filterId)
            setFilterMsg(`Category Name: ${name.name}`)
        }
        if (filterType === null) {
            setTransactionsList({
                listAllTransactionsId: null,
                listAllTransactionsType: 'all'
            })
        } else {
            setTransactionsList({
                listAllTransactionsId: filterId,
                listAllTransactionsType: filterType
            })
        }

        // console.log(listAllTransactionsType)
    }

    useEffect(() => {
        async function fetchData(user) {
            const allAccountsStatisticResponse = await accounts.getAllAccountsStatistic(user.id)
            const allTransactionsResponse = await trackPromise(transactions.getAllTransactions(user.id))
            allAccountsStatisticResponse.totalTransactions = allTransactionsResponse.length
            const incomeResponse = await trackPromise(categoriesService.getAllIncomeCategories())
            const expenseResponse = await trackPromise(categoriesService.getAllExpenseCategories())
            const allAccountsResponse = await trackPromise(usersService.getAllAccounts(user.id))
            setData((prevState) => ({
                ...prevState,
                allTransactions: allTransactionsResponse,
                allAccountsStatistic: allAccountsStatisticResponse,
                incomeCategories: incomeResponse,
                expenseCategories: expenseResponse,
                allAccounts: allAccountsResponse,
            }))
        }

        async function fetchCurrentUser() {
            const data = await trackPromise(checkAuthentication())
            setCurrentUser(data)
            fetchData(data)
        }

        if (!currentUser.id) {
            fetchCurrentUser()
        } else {
            fetchData(currentUser)
        }

        // eslint-disable-next-line
    }, [currentUser])

    return (
        <div>
            <div className="statistic-filter">
                <StatisticBox statistic={allAccountsStatistic} />
                <div className="filters-container z-depth-1">
                    <h5 className="filters white-text info-color">Filters</h5>
                    <select className="browser-default custom-select" value={categoryFilterName} onChange={(e) => handleFilter(e.target.value, 'category')}>
                        <option>Filtered by Income Categories</option>
                        {incomeCategories.map(category => {
                            return <option value={category.id} value2={category.name} key={category.id}>{category.name}</option>
                        })}
                    </select>
                    <select className="browser-default custom-select" value={categoryFilterName} onChange={(e) => handleFilter(e.target.value, 'category')}>
                        <option>Filtered by Expense Categories</option>
                        {expenseCategories.map(category => {
                            return <option value={category.id} name={category.name} key={category.id}>{category.name}</option>
                        })}
                    </select>
                    <select className="browser-default custom-select" value={accountFilterName} onChange={(e) => handleFilter(e.target.value, 'account')}>
                        <option>Filtered by Account</option>
                        {allAccounts.map(account => {
                            return <option value={account.id} name={account.name} key={account.id}>{account.name}</option>
                        })}
                    </select>
                </div>
            </div>


            <TransactionsList
                type={listAllTransactionsType}
                typeId={listAllTransactionsId}
                currentUser={currentUser}
                filterMsg={filterMsg}
                setFilterMsg={setFilterMsg}
            />
        </div>
    )
}

export default Transactions
