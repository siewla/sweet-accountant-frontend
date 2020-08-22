import React, { Fragment, useState, useEffect } from 'react';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import './App.css';
import authentication from './services/authentication';

function App(props) {
  
  const [isLogin, setIsLogin] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  //log in
  const login = (currentUser) => {
    setCurrentUser(currentUser);
    setIsLogin(true);
  }
  // Log out
  const logout = async () => {
    await authentication.logOut();
    setIsLogin(false);
    setCurrentUser({});
  }

  // check authentication
  const checkAuthentication = async () => {
    const response = await authentication.checkAuthentication();

    if(response.message) {
      setIsLogin(false);
      setCurrentUser({});
    } else {
      setIsLogin(true);
      setCurrentUser(response);
      console.log('apps',isLogin);
    }
  }

  // 
  useEffect(() => {
    checkAuthentication();
  }, [])

  // update currentUser
  const updateCurrentUser = (updatedUser) => {
    setCurrentUser(updatedUser)
  }
  return (
    <Fragment>
      {!isLogin ?
        <Landing login={login} /> :
        <Dashboard currentUser={currentUser}
        logout={logout} 
        updateCurrentUser={updateCurrentUser}
        />
      }
    </Fragment>
  );
}

export default App;
