import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MainApp from "./component/MainApp";
import LoginScreen from "./component/LoginScreen";
function App() {
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
          'http://localhost:8080/api/v1/auth/token',
          { token }
      );

      const { token , role } = response.data;
      setLoggedIn(true);
      setUserRole(role);

      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Greška pri prijavi korisnika:', error);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post(
          'http://localhost:8080/api/v1/auth/signin',
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
      <div>
        {loggedIn ? (
            <MainApp onLogout={handleLogout} userRole={userRole} />
        ) : (
            <LoginScreen onLogin={handleLogin} />
        )}

      </div>
  );
}

export default App;