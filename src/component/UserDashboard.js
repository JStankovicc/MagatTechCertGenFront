import React, { useState } from 'react';
import UserNavbar from "./UserNavbar";
import Dashboard from "./Dashboard";
import JednodelnoMerilo from "./JednodelnoMerilo";
import MernaLetva from "./MernaLetva";
import MernaTraka from "./MernaTraka";
import MasinaZaMerenje from "./MasinaZaMerenje";
import SlozivoMerilo from "./SlozivoMerilo";
import MetriZaTekstil from "./MetriZaTekstil";

const UserDashboard = ({ onLogout, userRole, handleLogout }) => {
    const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');

    const handleMenuItemClick = (menuItem) => {
        setActiveMenuItem(menuItem);
    };

    return (
        <div>
            <UserNavbar handleLogout={handleLogout} onMenuItemClick={handleMenuItemClick} activeMenuItem={activeMenuItem} />
            {activeMenuItem === 'Dashboard' && <Dashboard />}
            {activeMenuItem === 'Jednodelno merilo' && <JednodelnoMerilo />}
            {activeMenuItem === 'Merna letva' && <MernaLetva />}
            {activeMenuItem === 'Merna traka' && <MernaTraka />}
            {activeMenuItem === 'Masina za merenje' && <MasinaZaMerenje />}
            {activeMenuItem === 'Slozivo merilo' && <SlozivoMerilo />}
            {activeMenuItem === 'Metri za tekstil' && <MetriZaTekstil />}
        </div>
    );
};

export default UserDashboard;
