import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import MainApp from "./component/MainApp";
import LoginScreen from "./component/LoginScreen";
import {GlobalProvider,GlobalContext} from "./component/GlobalContext";

function App() {
  const { globalVariable, setGlobalVariable } = useContext(GlobalContext);

  const [loggedIn, setLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      loginWithToken(token);
    }
  }, []);

  const loginWithToken = async (token) => {
    try {
      const response = await axios.post(
          `${globalVariable}/api/v1/auth/token`,
          { token }
      );

      const { token: authToken , role } = response.data;
      setLoggedIn(true);
      setUserRole(role);

      localStorage.setItem('token', authToken);
    } catch (error) {
      console.error('Greška pri prijavi korisnika:', error);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post(
          `${globalVariable}/api/v1/auth/signin`,
          { email, password }
      );

      const { token, role } = response.data;
      setLoggedIn(true);
      setUserRole(role);

      localStorage.setItem('token', token);
    } catch (error) {
      console.error('Greška pri prijavi korisnika:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setUserRole('');
  };

  return (
      <GlobalProvider>

        <div>
          {loggedIn ? (
              <MainApp onLogout={handleLogout} userRole={userRole}/>
          ) : (
              <LoginScreen onLogin={handleLogin}/>
          )}

        </div>

      </GlobalProvider>

  );
}

export default App;