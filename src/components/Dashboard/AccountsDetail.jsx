import React, { useState, useEffect } from 'react'
import AddNewAccount from './AddNewAccount'
import UpdateAccount from './UpdateAccount'
import { MDBDataTableV5, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import usersService from '../../services/usersService'
import accounts from '../../services/accounts'
import { Link } from 'react-router-dom';
import StatisticBox from '../StatisticBox'
import authentication from '../../services/authentication';
import { trackPromise } from 'react-promise-tracker'
import NumberFormat from 'react-number-format';


const AccountsDetail = (props) => {
    const [currentUser, setCurrentUser] = useState(props.currentUser);

    // check authentication
    const checkAuthentication = async () => {
        const response = await authentication.checkAuthentication();
        if (response.message) {
            return []
        } else {
            return response
        }
    }

    const dataColumn = [
        {
            label: '#',
            field: 'id'

        },
        {
            label: 'Account Name',
            field: 'name'

        },
        {
            label: 'Balance',
            field: 'balance'
        },
        {
            label: 'Actions',
            field: 'actions'
        }
    ]

    const [initialData, setData] = useState({
        tableAccounts: [],
        allAccountsStatistic: {
            totalTransactions: null,
            totalIncome: 0.00,
            totalExpense: 0.00,
            balance: 0.00
        }
    })

    const { tableAccounts, allAccountsStatistic } = initialData

    const handleDelete = async (id) => {
        try {
            await accounts.deleteById(id)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
        // console.log('handle delete', transactionId)
    }

    const [editState, toggleDisplayEditForm] = useState(false)

    const [currentAccount, setCurrentAccount] = useState({
        currentAccountId: '',
        currentAccountName: '',
    })

    const { currentAccountId, currentAccountName } = currentAccount

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleEdit = (id) => {
        // console.log(id)
        toggleDisplayEditForm(true)
        setCurrentAccount({
            currentAccountId: id,
        })
    }

    const handlePreDelete = (id, name) => {
        setModalIsOpen(!modalIsOpen)
        setCurrentAccount({
            currentAccountId: id,
            currentAccountName: name
        })
    }

    // eslint-disable-next-line 
    const fetchData = async (currentUser) => {
        const allAccountsStatisticResponse = await accounts.getAllAccountsStatistic(currentUser.id)
        const allAccountsResponse = await usersService.getAllAccounts(currentUser.id)
        const allAccountsBalance = await accounts.getEachAccountStatistic(currentUser.id)
        const amendedAccounts = allAccountsResponse.map((accountMain, index) => {
            allAccountsBalance.filter(account => {
                if (account.accountId === accountMain.id) {
                    // accountMain.balance = (parseFloat(account.balance)/100).toFixed(2)
                    accountMain.balance = <NumberFormat value={(parseFloat(account.balance) / 100).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    return accountMain
                } else
                    return null
            })
            const path = `/listalltransactions/account/${accountMain.id}`

            accountMain.actions = <div>
                <MDBBtn color="primary" size="sm" onClick={() => handleEdit(accountMain.id)}><i class="fas fa-edit fa-lg"></i></MDBBtn>
                <MDBBtn color="red" size="sm" onClick={() => handlePreDelete(accountMain.id, accountMain.name)}><i class="fas fa-trash-alt fa-lg"></i></MDBBtn>
                <Link to={path}><MDBBtn color="success" size="sm"><i class="fas fa-eye fa-lg"></i></MDBBtn></Link>
            </div>

            return accountMain
        }
        )
        setData({
            totalTransactions: null,
            allAccounts: amendedAccounts,
            tableAccounts: amendedAccounts,
            allAccountsStatistic: allAccountsStatisticResponse
        })
    }

    useEffect(() => {
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
        <div className="all-accounts-container">
            <StatisticBox statistic={allAccountsStatistic} />
            <AddNewAccount currentUser={currentUser} fetchData={fetchData} />
            {editState ?
                <UpdateAccount
                    fetchData={fetchData}
                    currentUser={currentUser}
                    toggleDisplayEditForm={toggleDisplayEditForm}
                    accountId={currentAccountId}
                /> : null}
            <MDBDataTableV5
                className="accounts-container"
                hover
                entriesOptions={[5, 10, 25, 50]}
                entries={5}
                data={{
                    columns: dataColumn,
                    rows: tableAccounts
                }}
            />
            <MDBModal className="black-text" isOpen={modalIsOpen} toggle={() => setModalIsOpen(!modalIsOpen)}>
                <MDBModalHeader toggle={() => setModalIsOpen(!modalIsOpen)}>
                    Warning
                </MDBModalHeader>
                <MDBModalBody>
                    Delete account <strong className='red-text'>{currentAccountName}</strong> will delete all the transactions inside it?
                    Are you sure to proceed?
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="primary" onClick={() => handleDelete(currentAccountId)}>Please Proceed</MDBBtn>
                    <MDBBtn color="grey" onClick={() => setModalIsOpen(!modalIsOpen)}>Cancel</MDBBtn>
                </MDBModalFooter>
            </MDBModal>

        </div>
    )
}

export default AccountsDetail
