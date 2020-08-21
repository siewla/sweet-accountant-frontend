import React from 'react'

import AddNewTransaction from './AddNewTransaction';
import AddNewAccount from './AddNewAccount';

import ModalCategories from './ModalCategories';

const TopMenu = (props) => {
    const currentUser = props.currentUser;

    const currentContent = props.currentContent;

    return (
        <div className="top-menu">
            <h1>{currentContent}</h1>
            <AddNewTransaction />
            <AddNewAccount currentUser = {currentUser} />
        </div>
    )
}

export default TopMenu
