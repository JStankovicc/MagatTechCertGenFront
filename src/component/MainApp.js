import React from 'react';
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";

const MainApp = ({ onLogout, userRole }) => {
    const handleLogout = () => {
        onLogout(false);
    };

    return (
        <div>
            <button onClick={handleLogout}>Odjavi se</button>
            {userRole === 'ADMIN' ? (
                <AdminDashboard />
            ) : (
                <UserDashboard />
            )}
        </div>
    );
};

export default MainApp;
