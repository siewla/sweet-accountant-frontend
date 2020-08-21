import React from 'react'
import Pie from '../../components/charts/Pie'

const Main = () => {
    const data=[
                ['Categories', 'Amount($)'],
                ['Food & Drink', 200.19],
                ['House', 500],
                ['Car', 400.99],
                ['Travel', 201.11],
            ]
            
    return (
        <div>
            <div>
                <h1>Logo</h1>
            </div>
            <div className="d-inline-flex flex-column">
                <button className="btn btn-outline-white wow fadeInLeft" data-wow-delay="0.3s">Transactions</button>
                <button className="btn btn-outline-white wow fadeInLeft" data-wow-delay="0.3s">Categories</button>
                <button className="btn btn-outline-white wow fadeInLeft" data-wow-delay="0.3s">Accounts</button>
                <button className="btn btn-outline-white wow fadeInLeft" data-wow-delay="0.3s">Reports</button>
                <button className="btn btn-outline-white wow fadeInLeft" data-wow-delay="0.3s">Import</button>
            </div>
            <Pie data={data} title='First Pie Chart' />
        </div>
    )
}

export default Main
