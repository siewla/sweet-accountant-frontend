import React from 'react'

const StatisticBox = (props) => {
    // console.log(props.statistic)
    return (
        <div>
            <div className="statistic-box">
                <h3>Overview</h3>
                <hr />
                {props.statistic.totalTransactions ? 
                <div>
                    <div className="statistic-box-column">
                        <h4 className="statistic-box-item-title"><i className="fas fa-receipt purple-text"></i>  Total Transactions</h4>
                        <h4 className="statistic-box-item-value purple-text">{props.statistic.totalTransactions}</h4>
                    </div>
                    <hr />
                </div>            
                : null}
                <div className="statistic-box-column">
                    <h4 className="statistic-box-item-title"><i className="fas fa-file-invoice-dollar red-text"></i>  Credit:</h4>
                    <h4 className="statistic-box-item-value red-text">{(parseFloat(props.statistic.totalExpense)/100).toFixed(2)}</h4>
                </div>
                <hr />
                <div className="statistic-box-column">
                    <h4 className="statistic-box-item-title"><i className="fas fa-wallet blue-text"></i>  Debit</h4>
                    <h4 className="statistic-box-item-value blue-text">{(parseFloat(props.statistic.totalIncome)/100).toFixed(2)}</h4>
                </div>
                <hr />
                <div className="statistic-box-column">
                    <h4 className="statistic-box-item-title"><i className="fas fa-file-invoice orange-text"></i>  Balance</h4>
                    <h4 className="statistic-box-item-value orange-text">{(parseFloat(props.statistic.balance)/100).toFixed(2)}</h4>
                </div>
                <hr />
            </div>
        </div>
        
    )
}

export default StatisticBox
