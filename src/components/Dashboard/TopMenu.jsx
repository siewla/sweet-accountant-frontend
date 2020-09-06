import React from 'react'
import AddNewTransaction from './AddNewTransaction';

const TopMenu = (props) => {
    const currentContent = props.currentContent;

    return (
        <div className="top-menu">
            <h1>{currentContent}</h1>
                <AddNewTransaction currentContent={currentContent} currentUser={props.currentUser} changeCurrentContent={props.changeCurrentContent}/>
        </div>
    )
}

export default TopMenu
