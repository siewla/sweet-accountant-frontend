import React from 'react'

const Login = () => {
    return (
        <div>
            <div class="mask rgba-gradient align-items-center">

                <div class="container">

                    <div class="row mt-5">

                        <div class="col-md-6 mb-5 mt-md-0 mt-5 white-text text-center text-md-left">
                            <h1 class="h1-responsive font-weight-bold wow fadeInLeft" data-wow-delay="0.3s">Log in right now! </h1>
                            <hr class="hr-light wow fadeInLeft" data-wow-delay="0.3s" />
                            <h6 class="mb-3 wow fadeInLeft" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga
                            nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea
                    dolor molestiae, quisquam iste, maiores. Nulla.</h6>
                            <a class="btn btn-outline-white wow fadeInLeft" data-wow-delay="0.3s">Learn more</a>
                        </div>

                        <div class="col-md-6 col-xl-5 mb-4  ">

                            <form class="login z-depth-2 rounded">

                                <div class="login-content">
                                    <p class="h4 text-center py-4 label">Log in</p>
                                    <div class="md-form">
                                        <i class="fa fa-envelope prefix grey-text"></i>
                                        <input type="email" id="materialFormCardEmailEx" class="form-control" />
                                        <label for="materialFormCardEmailEx" class="font-weight-light">Your email</label>
                                    </div>
                                    <div class="md-form">
                                        <i class="fa fa-lock prefix grey-text"></i>
                                        <input type="password" id="materialFormCardPasswordEx" class="form-control" />
                                        <label for="materialFormCardPasswordEx" class="font-weight-light">Your password</label>
                                    </div>

                                    <div class="text-center py-4 mt-3">
                                        <button class="btn-login" type="submit">Log in</button>
                                    </div>

                                    <hr class="hr-light mb-3 mt-4" />
                                    <div class="inline-ul text-center">

                                        <a class="p-2 m-2 tw-ic">
                                            <i class="fab fa-facebook-f white-text"></i>
                                        </a>
                                        <a class="p-2 m-2 li-ic">
                                            <i class="fab fa-google white-text"></i>
                                        </a>
                                        <a class="p-2 m-2 ins-ic">
                                            <i class="fas fa-instagram white-text"> </i>
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
