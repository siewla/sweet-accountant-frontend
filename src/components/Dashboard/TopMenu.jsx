import React from 'react'
import AddNewTransaction from './AddNewTransaction';

const TopMenu = (props) => {
    const currentContent = props.currentContent;
    const fetchData = () =>{
        return []
    }

    return (
        <div className="top-menu">
            <h1>{currentContent}</h1>
            {currentContent!=='All Transactions' &&
                <AddNewTransaction fetchData={fetchData} currentUser={props.currentUser} changeCurrentContent={props.changeCurrentContent}/>
            }
        </div>
    )
}

export default TopMenu
