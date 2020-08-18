import React from 'react'

const Login = () => {
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

                    {/* form */}
                        <div class="col-md-6 col-xl-5 mb-4  ">

                            <form className="login z-depth-2 rounded">

                                <div className="login-content">
                                    <p className="h4 text-center py-4 label">Log in</p>
                                    <div className="md-form">
                                        <i className="fa fa-envelope prefix grey-text"></i>
                                        <input type="email" id="materialFormCardEmailEx" className="form-control" />
                                        <label htmlFor="materialFormCardEmailEx" className="font-weight-light">Your email</label>
                                    </div>
                                    <div className="md-form">
                                        <i className="fa fa-lock prefix grey-text"></i>
                                        <input type="password" id="materialFormCardPasswordEx" className="form-control" />
                                        <label htmlFor="materialFormCardPasswordEx" className="font-weight-light">Your password</label>
                                    </div>

                                    <div className="text-center py-4 mt-3">
                                        <button className="btn-login" type="submit">Log in</button>
                                    </div>

                                    <hr className="hr-light mb-3 mt-4" />
                                    <div className="inline-ul text-center">

                                        <a href="/" className="p-2 m-2 tw-ic">
                                            <i className="fab fa-facebook-f white-text"></i>
                                        </a>
                                        <a href="/" className="p-2 m-2 li-ic">
                                            <i className="fab fa-google white-text"></i>
                                        </a>
                                        <a href="/" className="p-2 m-2 ins-ic">
                                            <i className="fas fa-instagram white-text"> </i>
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default Login
