import React from 'react';

const Information = () => {
    return (
        <React.Fragment>
        <div className="information">
            <img className="bill" src="https://www.pngkit.com/png/detail/146-1467071_banknote-payment-already-paid-transprent-png-free-bill.png"></img>
            <div className="bill-content">
                <p>
                A smart, easy-to-use app that allows you to track and categorize your in-and-out money. 
                It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.
                </p>
            </div>
        </div>

        <div className="information">
        <div className="chart-content">
                <p>
                One report to give a clear view on your spending patterns. Understand where your money comes and goes with easy-to-read graphs.
                </p>
            </div>
            <img className="chart" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNYvUjx2Z-VZ2RcKJmqUXe1b3gmphWXPxfKA&usqp=CAU"></img>
            
        </div>
        </React.Fragment>
    )
}

export default Information