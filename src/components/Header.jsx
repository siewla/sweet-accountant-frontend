import React from 'react'
import Introduction from './Introduction';
import Signup from './Signup';
const Header = () => {
    return (
        <div>
            <header>
                <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
                    <div class="container">
                        <a class="navbar-brand" href="#"><strong>SLG</strong></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent-7">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Sign up</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Log in</a>
                                </li>
                            </ul>
                            <form class="form-inline">
                                <div class="md-form my-0">
                                    <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                                </div>
                            </form>
                        </div>
                    </div>
                </nav> 
        <Introduction />
         
            </header>

        </div>
    )
}

export default Header
