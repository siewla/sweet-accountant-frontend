import React from 'react';
import { Link } from 'react-router-dom';
const Introduction = () => {
    return (
        <div>
           <div className="mask rgba-black-light align-items-center">
           
              <div className="introduction">
              
                <div className="row">
             
                  <div className="col-md-12 mb-4 white-text text-center">
                    <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInDown" data-wow-delay="0.3s"><strong>Sweet Accountant</strong></h1>
                    <hr className="hr-light my-4 wow fadeInDown" data-wow-delay="0.4s" />
                    <h5 className="text-uppercase mb-4 white-text wow fadeInDown" data-wow-delay="0.4s"><strong>Your best friend</strong></h5>
                    <Link to="/signup">
                    <button className="btn btn-outline-white wow fadeInDown" data-wow-delay="0.4s">Signup</button>
                    </Link>
                    <Link to="/login">
                    <button className="btn btn-outline-white wow fadeInDown" data-wow-delay="0.4s">Login</button>
                    </Link>
                  </div>
                
                </div>
               
              </div>
             
            </div> 
        </div>
    )
}

export default Introduction