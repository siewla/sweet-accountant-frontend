import React, { Fragment, useState, useEffect } from 'react';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import './App.css';
import authentication from './services/authentication';

function App(props) {
  
  const [isLogin, setIsLogin] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  //log in
  const login = (currentUserData) => {
    // console.log('Current User from App.js',currentUserData)
    // checkAuthentication()
    setIsLogin(true);
  }
  // Log out
  const logout = async () => {
    await authentication.logOut();
    setIsLogin(false);
    setCurrentUser({});
    localStorage.clear();
  }

  // check authentication
  const checkAuthentication = async () => {
    const response = await authentication.checkAuthentication();
    // console.log('from check authenciation', response)
    if(response.message) {
      setIsLogin(false);
      setCurrentUser({});
    } else {
      setIsLogin(true);
      setCurrentUser(response);
    }
  }

  // 
  useEffect(() => {
    // console.log('check-authenciation')
    checkAuthentication();
  }, [])

  // update currentUser
  const updateCurrentUser = (updatedUser) => {
    setCurrentUser(updatedUser)
  }
  return (
    <Fragment>
      {!isLogin ?
        <Landing login={login} currentUser={currentUser} setCurrentUser={setCurrentUser} checkAuthentication={checkAuthentication}/> :
        <Dashboard currentUser={currentUser}
        logout={logout} 
        updateCurrentUser={updateCurrentUser}
        checkAuthentication={checkAuthentication}
        />
      }
    </Fragment>
  );
}

export default App;
