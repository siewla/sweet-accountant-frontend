import React from 'react'

const Signup = () => {
    return (
        <div>
           <div class="mask rgba-gradient align-items-center">
            
              <div class="container">
               
                <div class="row mt-5">
                
                  <div class="col-md-6 mb-5 mt-md-0 mt-5 white-text text-center text-md-left">
                    <h1 class="h1-responsive font-weight-bold wow fadeInLeft" data-wow-delay="0.3s">Sign up right now! </h1>
                    <hr class="hr-light wow fadeInLeft" data-wow-delay="0.3s" />
                    <h6 class="mb-3 wow fadeInLeft" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga
                    nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea
                    dolor molestiae, quisquam iste, maiores. Nulla.</h6>
                    <a class="btn btn-outline-white wow fadeInLeft" data-wow-delay="0.3s">Learn more</a>
                  </div>
                  
                  <div class="col-md-6 col-xl-5 mb-4">
                  
                    <div>
                      <div class="card-body">
                      
                        <div class="text-center">
                          <h3 class="white-text">
                            <i class="fas fa-user white-text"></i> Register</h3>
                          <hr class="hr-light" />
                        </div>
                       
                        <div class="md-form">
                          <i class="fas fa-user prefix white-text active"></i>
                          <input type="text" id="form3" class="white-text form-control" />
                          <label for="form3" class="active">Your name</label>
                        </div>
                        <div class="md-form">
                          <i class="fas fa-envelope prefix white-text active"></i>
                          <input type="email" id="form2" class="white-text form-control" />
                          <label for="form2" class="active">Your email</label>
                        </div>
                        <div class="md-form">
                          <i class="fas fa-lock prefix white-text active"></i>
                          <input type="password" id="form4" class="white-text form-control" />
                          <label for="form4">Your password</label>
                        </div>
                        <div class="text-center mt-4">
                          <button class="btn btn-indigo">Sign up</button>
                          <hr class="hr-light mb-3 mt-4" />
                          
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
