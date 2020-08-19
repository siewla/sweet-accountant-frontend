import React, { Fragment, useState, useEffect } from 'react';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import './App.css';
import authentication from './services/authentication';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  const login = (currentUser) => {
    setCurrentUser(currentUser);
    setIsLogin(true);
  }

  const logout = async () => {
    await authentication.logOut();
    setIsLogin(false);
    setCurrentUser({});
  }

  const checkAuthentication = async () => {
    const response = await authentication.checkAuthentication();

    if(response.message) {
      setIsLogin(false);
      setCurrentUser({});
    } else {
      setIsLogin(true);
      setCurrentUser(response)
    }
  }

  useEffect(() => {
    checkAuthentication();
  }, [])

  return (
    <Fragment>
      {!isLogin ?
        <Landing login={login} /> :
        <Dashboard username={currentUser.username} logout={logout} />
      }
    </Fragment>
  );
}

export default App;
