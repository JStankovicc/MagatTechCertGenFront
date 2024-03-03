import React from 'react';
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";

const MainApp = ({ onLogout, userRole }) => {
    const handleLogout = () => {
        onLogout(false);
    };

    return (
        <div>
            {userRole === 'ADMIN' ? (
                <AdminDashboard />
            ) : (
                <UserDashboard handleLogout={handleLogout} />
            )}
        </div>
    );
};

export default MainApp;
