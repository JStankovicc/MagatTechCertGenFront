import React, { useState } from 'react';
import UserNavbar from "./UserNavbar";
import Dashboard from "./Dashboard";
import JednodelnoMerilo from "./JednodelnoMerilo";
import MernaLetva from "./MernaLetva";
import MernaTrakaSaViskom from "./MernaTrakaSaViskom";
import MernaTrakaSaViskom25m from "./MernaTrakaSaViskom25m";
import MasinaZaMerenje from "./MasinaZaMerenje";
import SlozivoMerilo from "./SlozivoMerilo";
import MetriZaTekstil from "./MetriZaTekstil";
import EditJednodelnoMerilo from "./EditJednodelnoMerilo";
import EditSlozivoMerilo from "./EditSlozivoMerilo";
import EditMetriZaTekstil from "./EditMetriZaTekstil";
import EditMernaLetva from "./EditMernaLetva";
import EditMernaTrakaSaViskom from "./EditMernaTrakaSaViskom";
import EditMasinaZaMerenje from "./EditMasinaZaMerenje";
import EditMernaTrakaSaViskom25m from "./EditMernaTrakaSaViskom25m";
import MernaTraka25m from "./MernaTraka25m";
import EditMernaTraka25m from "./EditMernaTraka25m";

const UserDashboard = ({ onLogout, userRole, handleLogout }) => {
    const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');
    const [editJednodelnoMeriloId, setEditJednodelnoMeriloId] = useState(null);
    const [editSlozivoMeriloId, setEditSlozivoMeriloId] = useState(null);
    const [editMetriZaTekstilId, setEditMetriZaTekstilId] = useState(null);
    const [editMernaLetvaId, setEditMernaLetvaId] = useState(null);
    const [editMernaTrakaSaViskomId , setEditMernaTrakaSaViskomId] = useState(null);
    const [editMernaTrakaSaViskom25mId , setEditMernaTrakaSaViskom25mId] = useState(null);
    const [editMernaTraka25mId , setEditMernaTraka25mId] = useState(null);
    const [editMasinaZaMerenjeId, setEditMasinaZaMerenjeId] = useState(null);

    const handleMenuItemClick = (menuItem) => {
        setActiveMenuItem(menuItem);
    };

    const handleEditJednodelnogMerila = (id) => {
        setEditJednodelnoMeriloId(id);
        setActiveMenuItem('Edit jednodelno merilo')
    }
    const handleEditSlozivogMerila = (id) => {
        setEditSlozivoMeriloId(id);
        setActiveMenuItem('Edit slozivo merilo')
    }
    const handleEditMetriZaTekstil = (id) => {
        setEditMetriZaTekstilId(id);
        setActiveMenuItem('Edit metri za tekstil')
    }
    const handleEditMernaLetva = (id) => {
        setEditMernaLetvaId(id);
        setActiveMenuItem('Edit merna letva');
    }
    const handleEditMernaTrakaSaViskom = (id) => {
        setEditMernaTrakaSaViskomId(id);
        setActiveMenuItem('Edit merna traka sa viskom 10m');
    }
    const handleEditMernaTrakaSaViskom25m = (id) => {
        setEditMernaTrakaSaViskom25mId(id);
        setActiveMenuItem('Edit merna traka sa viskom 25m');
    }
    const handleEditMernaTraka25m = (id) => {
        setEditMernaTraka25mId(id);
        setActiveMenuItem('Edit merna traka 25m');
    }
    const handleEditMasinaZaMerenje = (id) => {
        setEditMasinaZaMerenjeId(id);
        setActiveMenuItem('Edit masina za merenje')
    }
    return (
        <div>
            <UserNavbar handleLogout={handleLogout} onMenuItemClick={handleMenuItemClick} activeMenuItem={activeMenuItem} />
            {activeMenuItem === 'Dashboard' && <Dashboard handleEditJednodelnogMerila={handleEditJednodelnogMerila} handleEditSlozivogMerila={handleEditSlozivogMerila} handleEditMetriZaTekstil={handleEditMetriZaTekstil} handleEditMernaLetva={handleEditMernaLetva} handleEditMernaTrakaSaViskom={handleEditMernaTrakaSaViskom} handleEditMernaTrakaSaViskom25m={handleEditMernaTrakaSaViskom25m} handleEditMernaTraka25m={handleEditMernaTraka25m} handleEditMasinaZaMerenje={handleEditMasinaZaMerenje}/>}
            {activeMenuItem === 'Jednodelno merilo' && <JednodelnoMerilo />}
            {activeMenuItem === 'Merna letva' && <MernaLetva />}
            {activeMenuItem === 'Merna traka sa viskom 10m' && <MernaTrakaSaViskom />}
            {activeMenuItem === 'Merna traka sa viskom 25m' && <MernaTrakaSaViskom25m />}
            {activeMenuItem === 'Masina za merenje' && <MasinaZaMerenje />}
            {activeMenuItem === 'Slozivo merilo' && <SlozivoMerilo />}
            {activeMenuItem === 'Metri za tekstil' && <MetriZaTekstil />}
            {activeMenuItem === 'Edit jednodelno merilo' && <EditJednodelnoMerilo id={editJednodelnoMeriloId}/>}
            {activeMenuItem === 'Edit slozivo merilo' && <EditSlozivoMerilo id={editSlozivoMeriloId}/>}
            {activeMenuItem === 'Edit metri za tekstil' && <EditMetriZaTekstil id={editMetriZaTekstilId}/>}
            {activeMenuItem === 'Edit merna letva' && <EditMernaLetva id={editMernaLetvaId}/>}
            {activeMenuItem === 'Edit merna traka sa viskom 10m' && <EditMernaTrakaSaViskom id={editMernaTrakaSaViskomId}/> }
            {activeMenuItem === 'Edit merna traka sa viskom 25m' && <EditMernaTrakaSaViskom25m id={editMernaTrakaSaViskom25mId}/> }
            {activeMenuItem === 'Edit merna traka 25m' && <EditMernaTraka25m id={editMernaTraka25mId}/> }
            {activeMenuItem === 'Edit masina za merenje' && <EditMasinaZaMerenje id={editMasinaZaMerenjeId}/>}
            {activeMenuItem === 'Merna traka 25m' && <MernaTraka25m />}
        </div>
    );
};

export default UserDashboard;
