import React, { Component } from 'react'
import { MDBContainer, MDBFooter } from "mdbreact";

export class PageFooter extends Component {
    render() {
        return (
            <MDBFooter className="fixed-bottom footer-css">
                <MDBContainer fluid className="text-center">
                &copy; {new Date().getFullYear()} Built and Designed by <a href="https://github.com/siewla/sweet-accountant-frontend"> 
                <strong className="white-text">SLG</strong></a>
                </MDBContainer>
            </MDBFooter>
        )
    }
}

export default PageFooter
