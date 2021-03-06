import React from 'react'
import LoginForm from './LoginForm';
import { useState } from 'react';
import authentication from '../../services/authentication';

const Login = (props) => {
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    });

    const [err, setErr] = useState(null);

    const login = props.login;

    const showErr = (err) => {
        setErr(err);
    }
    // Handle Form Input Change
    const handleChange = event => {
        const { id, value } = event.target;
        setLoginForm((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

    // Handle Form Submit
    const handleSubmit = async event => {
        event.preventDefault();
        const user = loginForm;

        const currentUser = await authentication.logIn(user);

        if (!currentUser.err) {
            setLoginForm({
                email: '',
                password: ''
            });
            props.setCurrentUser(currentUser)
            login(currentUser);
            // console.log(currentUser)
        } else {
            setErr(currentUser.err)
        }

    }

    return (
        <div>
            <div className="mask rgba-gradient align-items-center">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-6 mb-5 mt-md-0 mt-5 white-text text-center text-md-left text-shadow">
                            <h1 className="h1-responsive font-weight-bold wow fadeInLeft" data-wow-delay="0.3s">Log in right now! </h1>
                            <hr className="hr-light wow fadeInLeft" data-wow-delay="0.3s" />
                            <h6 className="mb-3 wow fadeInLeft" data-wow-delay="0.3s">Track your cash flow</h6>
                            <h6 className="mb-3 wow fadeInLeft" data-wow-delay="0.3s">Understand your financial habits</h6>
                            <h6 className="mb-3 wow fadeInLeft" data-wow-delay="0.3s">Make your spending stress-free</h6>
                        </div>
                        <LoginForm loginForm={loginForm}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            err={err}
                            login={login} 
                            showErr={showErr}
                            setErr={setErr}
                            currentUser={props.currentUser} 
                            setCurrentUser={props.setCurrentUser}
                            checkAuthentication={props.checkAuthentication}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login