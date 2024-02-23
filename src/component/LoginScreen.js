import React, { useState } from 'react';
import axios from 'axios';
import companyLogo from '../pictures/MGT-logo.png';
import '../styles/Login.css';


const LoginScreen = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(email, password);
    };

    return (
        <div className="login-container">
            <div className="logo-container">
                <img src={companyLogo} alt="Company Logo" />
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit">Uloguj se</button>
            </form>
        </div>
    );
};

export default LoginScreen;
