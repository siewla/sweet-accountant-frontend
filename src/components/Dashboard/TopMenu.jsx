import React from 'react'
import AddNewTransaction from './AddNewTransaction';

const TopMenu = (props) => {
    const currentContent = props.currentContent;

    return (
        <div className="top-menu">
            <h1>{currentContent}</h1>
            <AddNewTransaction currentUser={props.currentUser}/>
        </div>
    )
}

export default TopMenu
