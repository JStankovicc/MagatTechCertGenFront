import React, { useState } from 'react';
import UserNavbar from "./UserNavbar";
import Dashboard from "./Dashboard";
import JednodelnoMerilo from "./JednodelnoMerilo";
import MernaLetva from "./MernaLetva";
import MernaTraka from "./MernaTraka";
import MasinaZaMerenje from "./MasinaZaMerenje";
import SlozivoMerilo from "./SlozivoMerilo";
import MetriZaTekstil from "./MetriZaTekstil";
import EditJednodelnoMerilo from "./EditJednodelnoMerilo";

const UserDashboard = ({ onLogout, userRole, handleLogout }) => {
    const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');
    const [editJednodelnoMeriloId, setEditJednodelnoMeriloId] = useState(null);

    const handleMenuItemClick = (menuItem) => {
        setActiveMenuItem(menuItem);
    };

    const handleEditJednodelnogMerila = (id) => {
        setEditJednodelnoMeriloId(id);
        setActiveMenuItem('Edit jednodelno merilo')
    }
    return (
        <div>
            <UserNavbar handleLogout={handleLogout} onMenuItemClick={handleMenuItemClick} activeMenuItem={activeMenuItem} />
            {activeMenuItem === 'Dashboard' && <Dashboard handleEditJednodelnogMerila={handleEditJednodelnogMerila}/>}
            {activeMenuItem === 'Jednodelno merilo' && <JednodelnoMerilo />}
            {activeMenuItem === 'Merna letva' && <MernaLetva />}
            {activeMenuItem === 'Merna traka' && <MernaTraka />}
            {activeMenuItem === 'Masina za merenje' && <MasinaZaMerenje />}
            {activeMenuItem === 'Slozivo merilo' && <SlozivoMerilo />}
            {activeMenuItem === 'Metri za tekstil' && <MetriZaTekstil />}
            {activeMenuItem === 'Edit jednodelno merilo' && <EditJednodelnoMerilo id={editJednodelnoMeriloId}/>}
        </div>
    );
};

export default UserDashboard;
