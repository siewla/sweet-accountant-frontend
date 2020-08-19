import React from 'react'
import SignupForm from './SignupForm';
import { Redirect } from 'react-router-dom';
import usersService from '../../services/usersService';
import { useState } from 'react'

const Signup = () => {

  const [signupForm, setSignupForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [err, setErr] = useState(null);

  const [isSingup, setIsSignup] = useState(false);

  // Handle Form Input Change
  const handleChange = event => {
    const { id, value } = event.target;
    setSignupForm((prevState) => ({
      ...prevState,
      [id]: value
    }));
  }

  //handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUser = signupForm;
    const response = await usersService.create(newUser);

    if(!response.err) {
      setSignupForm({
        username: '',
        email: '',
        password: ''
      });
      setIsSignup(true)
    } else {
      setErr(response.err)
    }
    
  }

  return (
    <div>
      {!isSingup ?
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

              <SignupForm signupForm={signupForm}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                err={err}
              />
            </div>
          </div>
        </div> : <Redirect to='/login' />
      }
    </div>
  )
}

export default Signup