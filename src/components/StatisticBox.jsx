import React from 'react'
import NumberFormat from 'react-number-format';

const StatisticBox = (props) => {
    // console.log(props.statistic)
    return (
        <div>
            <div className="statistic-box">
                <h3 className="card-header white-text secondary-color">Overview</h3>
               
                {props.statistic.totalTransactions ? 
                <div>
                    <div className="statistic-box-column">
                        <h5 className="statistic-box-item-title"><i className="fas fa-receipt purple-text"></i>  Total Transactions</h5>
                        <h5 className="statistic-box-item-value purple-text">{props.statistic.totalTransactions}</h5>
                    </div>
                    <hr />
                </div>            
                : null}
                <div className="statistic-box-column">
                    <h5 className="statistic-box-item-title"><i className="fas fa-file-invoice-dollar red-text"></i>  Credit:</h5>
                    <h5 className="statistic-box-item-value red-text">
                        <NumberFormat value={(parseFloat(props.statistic.totalExpense)/100).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </h5>
                </div>
                <hr />
                <div className="statistic-box-column">
                    <h5 className="statistic-box-item-title"><i className="fas fa-wallet blue-text"></i>  Debit</h5>
                    <h5 className="statistic-box-item-value blue-text">
                        <NumberFormat value={(parseFloat(props.statistic.totalIncome)/100).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </h5>
                </div>
                <hr />
                <div className="statistic-box-column">
                    <h5 className="statistic-box-item-title"><i className="fas fa-file-invoice orange-text"></i>  Balance</h5>
                    <h5 className="statistic-box-item-value orange-text">
                        <NumberFormat value={(parseFloat(props.statistic.balance)/100).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </h5>
                </div>
                <hr />
            </div>
        </div>
        
    )
}

export default StatisticBox
