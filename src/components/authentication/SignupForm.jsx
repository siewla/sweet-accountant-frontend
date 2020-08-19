import React from 'react'

const SignupForm = (props) => {
    const { username, email, password } = props.signupForm;
    const handleChange = props.handleChange;
    const handleSubmit = props.handleSubmit;
    const err = props.err
    return (
        <div class="col-md-6 col-xl-5 mb-4">
            <div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="text-center">
                            <h3 className="white-text">
                                <i className="fas fa-user white-text"></i> Register</h3>
                            <hr className="hr-light" />
                        </div>

                        <div className="md-form">
                            <i className="fas fa-user prefix white-text active"></i>
                            <input type="text" id="username" className="white-text form-control" value={username} onChange={handleChange} required />
                            <label htmlFor="username" className="active">Your name</label>
                        </div>
                        <div className="md-form">
                            <i className="fas fa-envelope prefix white-text active"></i>
                            <input type="email" id="email" className="white-text form-control" value={email} onChange={handleChange} required />
                            <label htmlFor="email" className="active">Your email</label>
                        </div>
                        <div className="md-form">
                            <i className="fas fa-lock prefix white-text active"></i>
                            <input type="password" id="password" className="white-text form-control" value={password} onChange={handleChange} required />
                            <label htmlFor="password">Your password</label>
                        </div>
                        {/* Show error */}
                        {err ?
                            <div class="alert alert-danger text-center" role="alert">
                                {err}
                            </div> : ''}

                        {/* end error */}
                        <div className="text-center mt-4">
                            <button className="btn btn-indigo" type="submit">Sign up</button>
                            <hr className="hr-light mb-3 mt-4" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default SignupForm
