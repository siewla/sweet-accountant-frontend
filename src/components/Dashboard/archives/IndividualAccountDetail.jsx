import React from 'react'

const IndividualAccountDetail = (props) => {
    return (
        <div>
            <a href="/accounts" className="btn">Go back</a>
            <h1>Details of Account {props.match.params.id}</h1>
        </div>
    )
}

export default IndividualAccountDetail
