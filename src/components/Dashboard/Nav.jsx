import React from 'react';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';

const Nav = (props) => {
    const currentContent = props.currentContent;

    return (
        <nav className="navbar-dark  lighten-1 nav-db">
            <div className="currentContent">  
                 <button class="btn aqua-gradient">{currentContent}</button>
           </div>
            <OverlayTrigger
                placement="bottom"
                overlay={
                    <Tooltip id={`tooltip-bottom`}>
                        Add transaction
        </Tooltip>
                }
            >
                <Button variant="secondary"><i class="fas fa-plus-circle fa-lg"></i></Button>
            </OverlayTrigger>
            
           
        </nav>
    )
}

export default Nav;
