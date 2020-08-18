import React from 'react'

const Main = () => {
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
        </div>
    )
}

export default Main
