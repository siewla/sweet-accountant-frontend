import React from 'react'
import Googlelogin from './Googlelogin';

const LoginForm = (props) => {
    const { email, password } = props.loginForm;
    const handleChange = props.handleChange;
    const handleSubmit = props.handleSubmit;
    const err = props.err;

    return (
        <div className="col-md-6 col-xl-5 mb-4  ">
            <form className="login z-depth-2 rounded" onSubmit={handleSubmit}>

                <div className="login-content">
                    <p className="h4 text-center py-4 label">Log In</p>
                    <div className="md-form">
                        <i className="fa fa-envelope prefix white-text"></i>
                        <input type="email" id="email" className="white-text form-control" value={email} required onChange={handleChange} />
                        <label htmlFor="email" className="active white-text font-weight-light">Your email</label>
                    </div>
                    
                    <div className="md-form">
                        <i className="fa fa-lock prefix white-text"></i>
                        <input type="password" id="password" className="white-text form-control" value={password} required onChange={handleChange} />
                        <label htmlFor="password" className="active white-text font-weight-light">Your password</label>
                    </div>

                    <div className="text-center py-4 mt-3">
                        <button className="btn-login" type="submit">Log in</button>
                    </div>
                    {/* Show error */}
                    {err ?
                        <div class="alert alert-danger text-center" role="alert">
                            {err}
                        </div> : ''}

                    {/* end error */}
                    <hr className="hr-light mb-3 mt-4" />
                    <div className="inline-ul text-center">

                        <a href="/" className="p-2 m-2 tw-ic">
                            <i className="fab fa-facebook-f white-text"></i>
                        </a>
                        {/* <a href="/" className="p-2 m-2 li-ic">
                            <i className="fab fa-google white-text"></i>
                        </a> */}
                        <Googlelogin />
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
