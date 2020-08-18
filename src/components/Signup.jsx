import React from 'react'

const Signup = () => {
    return (
        <div>
           <div className="mask rgba-gradient align-items-center">
            
              <div className="container">
               
                <div className="row mt-5">
                
                  <div className="col-md-6 mb-5 mt-md-0 mt-5 white-text text-center text-md-left">
                    <h1 className="h1-responsive font-weight-bold wow fadeInLeft" data-wow-delay="0.3s">Sign up right now! </h1>
                    <hr className="hr-light wow fadeInLeft" data-wow-delay="0.3s" />
                    <h6 className="mb-3 wow fadeInLeft" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga
                    nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea
                    dolor molestiae, quisquam iste, maiores. Nulla.</h6>
                    <a href="/" className="btn btn-outline-white wow fadeInLeft" data-wow-delay="0.3s">Learn more</a>
                  </div>
                  
                  {/* Form */}
                  <div class="col-md-6 col-xl-5 mb-4">
                  
                    <div>
                      <div className="card-body">
                      
                        <div className="text-center">
                          <h3 className="white-text">
                            <i className="fas fa-user white-text"></i> Register</h3>
                          <hr className="hr-light" />
                        </div>
                       
                        <div className="md-form">
                          <i className="fas fa-user prefix white-text active"></i>
                          <input type="text" id="form3" className="white-text form-control" />
                          <label htmlFor="form3" className="active">Your name</label>
                        </div>
                        <div className="md-form">
                          <i className="fas fa-envelope prefix white-text active"></i>
                          <input type="email" id="form2" className="white-text form-control" />
                          <label htmlFor="form2" className="active">Your email</label>
                        </div>
                        <div className="md-form">
                          <i className="fas fa-lock prefix white-text active"></i>
                          <input type="password" id="form4" className="white-text form-control" />
                          <label htmlFor="form4">Your password</label>
                        </div>
                        <div className="text-center mt-4">
                          <button className="btn btn-indigo">Sign up</button>
                          <hr className="hr-light mb-3 mt-4" />
                          
                        </div>
                      </div>
                    </div>
                   
                  </div>
                 
                </div>
              
              </div>
             
            </div>
        </div>
    )
}

export default Signup
