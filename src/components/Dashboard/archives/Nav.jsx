import React from 'react';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import AddTransaction from '../AddTransaction';
import ModalCategories from '../ModalCategories';

const Nav = (props) => {
    const currentContent = props.currentContent;

    return (
        <nav className="navbar-dark  lighten-1 nav-db">
            <div className="currentContent">
                <button class="btn aqua-gradient">{currentContent}</button>
            </div>

            {/* Button add new transaction */}
            <OverlayTrigger
                placement="bottom"
                overlay={
                    <Tooltip id={`tooltip-bottom`}>
                        Add transaction
            </Tooltip>
                }
            >
                <Button variant="secondary" data-toggle="modal" data-target="#modalPush"><i class="fas fa-plus-circle fa-lg"></i></Button>
            </OverlayTrigger>

            {/* Modal add new transaction */}
            <AddTransaction />

            {/* Modal show categories */}
            <ModalCategories />  
        </nav>
    )
}

export default Nav;
