import React from 'react'

const UpdateIndividualTransaction = (props) => {
    // console.log(props.allAccounts)
    // console.log(props.expenseCategories)
    // console.log(props.incomeCategories)
    // console.log(props.currentUserId)

    return (
        <div>
            <h1>updateform</h1>
            <button onClick={()=>props.toggleDisplayEditForm(false)}>Cancel</button>
        </div>
    )
}

export default UpdateIndividualTransaction
