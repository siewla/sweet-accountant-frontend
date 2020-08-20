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
            login(currentUser);
        } else {
            setErr(currentUser.err)
        }

    }

    return (
        <div>
            <div className="mask rgba-gradient align-items-center">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-6 mb-5 mt-md-0 mt-5 white-text text-center text-md-left">
                            <h1 className="h1-responsive font-weight-bold wow fadeInLeft" data-wow-delay="0.3s">Log in right now! </h1>
                            <hr className="hr-light wow fadeInLeft" data-wow-delay="0.3s" />
                            <h6 className="mb-3 wow fadeInLeft" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga
                            nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea
                    dolor molestiae, quisquam iste, maiores. Nulla.</h6>
                            <a href="/" className="btn btn-outline-white wow fadeInLeft" data-wow-delay="0.3s">Learn more</a>
                        </div>
                        <LoginForm loginForm={loginForm}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            err={err}
                            login={login} 
                            showErr={showErr}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login