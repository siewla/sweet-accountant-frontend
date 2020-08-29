import React from 'react'
import Googlelogin from './Googlelogin';
import FacebookLogin from './FacebookLogin';

const LoginForm = (props) => {
    const { email, password } = props.loginForm;
    const handleChange = props.handleChange;
    const handleSubmit = props.handleSubmit;
    const err = props.err;
    const login = props.login;
    const showErr = props.showErr;
    const setErr = props.setErr;
    
    return (
        <div className="col-md-6 col-xl-5 mb-4">
            <form className="login z-depth-2 rounded" onSubmit={handleSubmit}>
                <div className="login-content">
                    <div className="h4 text-center py-4 label">
                        <h3>Log in</h3>
                        <hr className="hr-light" />
                    </div>
                    <div className="md-form">
                        <i className="fa fa-envelope prefix white-text"></i>
                        <input type="email" id="email" className="white-text form-control" value={email} required onChange={handleChange} autoComplete="username" />
                        <label htmlFor="email" className="active white-text font-weight-light">Your email</label>
                    </div>
                    
                    <div className="md-form">
                        <i className="fa fa-lock prefix white-text"></i>
                        <input type="password" id="password" className="white-text form-control" value={password} required onChange={handleChange} autoComplete="current-password" />
                        <label htmlFor="password" className="active white-text font-weight-light">Your password</label>
                    </div>
                    <div className="text-center mt-4">
                        <button className="btn btn-outline-white wow fadeInDown" type="submit">Log in</button>
                        <hr className="hr-light mb-3 mt-4" />
                    </div>
                    {/* Show error */}
                    {err ?
                        <div className="alert alert-danger text-center" role="alert">
                            {err}
                        </div> : ''}

                    {/* end error */}
                    <div className="inline-ul text-center">
                        <div className="d-flex justify-content-center white-text">
                            {/* <FacebookLogin login={login} showErr={showErr}/> */}
                            <Googlelogin login={login} showErr={showErr} setErr={setErr} currentUser={props.currentUser} setCurrentUser={props.setCurrentUser}/>
                        </div>
                        <a href="/" className="p-2 m-2 ins-ic">
                            Forget password?
                        </a>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default LoginForm
