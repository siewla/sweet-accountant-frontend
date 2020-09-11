import React, {useState, useEffect} from 'react'
import accounts from '../../services/accounts'
import StatisticBox from '../StatisticBox'

const IndividualAccountStatisticBox = (props) => {
    const typeId = props.typeId
   
    const [initialData, setData] = useState({
        accountStatistic:{
            totalTransactions: 0,
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
                    totalTransactions: accountStatisticResponse.totalTransactions,
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
        <div className="list-all-transactions-container">
            <StatisticBox statistic={accountStatistic}/>
        </div>
    )
}

export default IndividualAccountStatisticBox
