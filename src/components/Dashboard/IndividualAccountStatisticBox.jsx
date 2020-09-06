import React, {useState, useEffect} from 'react'
import accounts from '../../services/accounts'
import authentication from '../../services/authentication'
import {trackPromise} from 'react-promise-tracker'
import StatisticBox from '../StatisticBox'

const IndividualAccountStatisticBox = (props) => {
    const typeId = props.typeId
   
    const [initialData, setData] = useState({
        accountStatistic:{
            totalTransactions: null,
            totalIncome: 0.00,
            totalExpense: 0.00,
            balance: 0.00
        }
    })

    const {accountStatistic} = initialData


    useEffect(() => {
        async function fetchData (){
            const accountStatisticResponse = await accounts.getAccountStatistic(typeId)
            setData({
                accountStatistic: {
                    totalTransactions: null,
                    totalIncome: accountStatisticResponse.debit,
                    totalExpense: accountStatisticResponse.credit,
                    balance: accountStatisticResponse.balance
                }
            })
        }
        fetchData()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <StatisticBox statistic={accountStatistic}/>
        </div>
    )
}

export default IndividualAccountStatisticBox
