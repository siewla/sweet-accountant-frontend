import React from 'react'

const SignupForm = (props) => {
    const { username, email, password } = props.signupForm;
    const handleChange = props.handleChange;
    const handleSubmit = props.handleSubmit;
    const err = props.err
    return (
        <div className="col-md-6 col-xl-5 mb-4">
            <form className="login z-depth-2 rounded" onSubmit={handleSubmit}>
                <div className="login-content">
                    <div className="h4 text-center py-4 label">
                        <h3>Sign Up</h3>
                        <hr className="hr-light" />
                    </div>
                    <div className="md-form">
                        <i className="fas fa-user prefix white-text active"></i>
                        <input type="text" id="username" className="white-text form-control" value={username} onChange={handleChange} required />
                        <label htmlFor="username" className="active white-text">Your name</label>
                    </div>
                    <div className="md-form">
                        <i className="fas fa-envelope prefix white-text active"></i>
                        <input type="email" id="email" className="white-text form-control" value={email} onChange={handleChange} required />
                        <label htmlFor="email" className="active white-text">Your email</label>
                    </div>
                    <div className="md-form">
                        <i className="fas fa-lock prefix white-text active"></i>
                        <input type="password" id="password" className="white-text form-control" value={password} onChange={handleChange} required />
                        <label htmlFor="password" className="active white-text">Your password</label>
                    </div>
                    {/* Show error */}
                    {err ?
                        <div class="alert alert-danger text-center" role="alert">
                            {err}
                        </div> : ''}

                    {/* end error */}
                    <div className="text-center mt-4">
                        <button className="btn btn-outline-white wow fadeInDown" type="submit">Sign up</button>
                        <hr className="hr-light mb-3 mt-4" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignupForm
