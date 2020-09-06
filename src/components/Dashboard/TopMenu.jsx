import React, {useState} from 'react'
import AddNewTransaction from './AddNewTransaction';
import DarkModeToggle from "react-dark-mode-toggle";

const TopMenu = (props) => {
    const currentContent = props.currentContent;
    return (
        <div className="top-menu">
              <DarkModeToggle
                onChange={props.setMode}
                checked={props.isDarkMode}
                size={60}
            />
            <h1 className="current-content">{currentContent}</h1>
            <AddNewTransaction currentContent={currentContent} currentUser={props.currentUser} changeCurrentContent={props.changeCurrentContent}/>
        </div>
    )
}

export default TopMenu
