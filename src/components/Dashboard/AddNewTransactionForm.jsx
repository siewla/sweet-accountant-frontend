import React, {useState} from 'react'
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput} from 'mdbreact';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddNewTransactionForm = (props) => {
    const today = new Date();

    return (
        <div>
            <MDBBtn onClick={()=>props.setModalIsOpen(!props.modalIsOpen)}>Add New Transaction</MDBBtn>
            <MDBModal className="black-text" isOpen={props.modalIsOpen} toggle={()=>props.setModalIsOpen(!props.modalIsOpen)}>
                <MDBModalHeader toggle={()=>props.setModalIsOpen(!props.modalIsOpen)}>Add New Transaction</MDBModalHeader>
                <MDBModalBody>
                <form onSubmit={props.handleSubmit}>
                    <MDBInput 
                        label="Amount" 
                        type="number" 
                        step="0.01"
                        min="0"
                        onChange={props.handleChange('amount')}
                        value={props.amount}
                        required
                    />
                    <MDBInput 
                        label="Description" 
                        type="text" 
                        maxLength="25"
                        onChange={props.handleChange('description')}
                        value={props.description}
                        required
                    />
                    <div className="date-container">
                        <h6>Paid At</h6>
                        <DatePicker 
                        selected={props.transactionDate} 
                        value={props.paidAt}
                        onChange={date => props.setTransactionDate(date)} 
                        maxDate={today}
                        />
                    </div>
                    
                    <select className="browser-default custom-select" value={props.categoryId} onChange={props.handleChange('categoryId')}>
                        <option>Income Categories</option>
                        {props.incomeCategories.map(category => {
                            return <option value={category.id} key={category.id}>{category.name}</option>
                        })}
                    </select>
                    <select className="browser-default custom-select" value={props.categoryId} onChange={props.handleChange('categoryId')}>
                        <option>Expense Categories</option>
                        {props.expenseCategories.map(category => {
                            return <option value={category.id} key={category.id}>{category.name}</option>
                        })}
                    </select>
                    <select className="browser-default custom-select" value={props.accountId} onChange={props.handleChange('accountId')}>
                        <option>Account</option>
                        {props.allAccounts.map(account => {
                            return <option value={account.id} key={account.id}>{account.name}</option>
                        })}
                    </select>
                    <div className="text-center">
                        <MDBBtn type="submit">Add</MDBBtn>
                    </div>
                </form>
                </MDBModalBody>
            </MDBModal>
        </div>
    )
}

export default AddNewTransactionForm