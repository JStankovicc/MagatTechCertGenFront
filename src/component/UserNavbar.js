import React from 'react';
import '../styles/UserNavbar.css';


const UserNavbar = ({ handleLogout, onMenuItemClick, activeMenuItem }) => {
    return (
        <nav className="user-navbar">
            <ul>
                <li onClick={() => onMenuItemClick('Dashboard')} className={activeMenuItem === 'Dashboard' ? 'active' : ''}>Dashboard</li>
                <li onClick={() => onMenuItemClick('Jednodelno merilo')} className={activeMenuItem === 'Jednodelno merilo' ? 'active' : ''}>Jednodelno merilo</li>
                <li onClick={() => onMenuItemClick('Merna letva')} className={activeMenuItem === 'Merna letva' ? 'active' : ''}>Merna letva</li>
                <li onClick={() => onMenuItemClick('Merna traka')} className={activeMenuItem === 'Merna traka' ? 'active' : ''}>Merna traka</li>
                <li onClick={() => onMenuItemClick('Masina za merenje')} className={activeMenuItem === 'Masina za merenje' ? 'active' : ''}>Masina za merenje</li>
                <li onClick={() => onMenuItemClick('Slozivo merilo')} className={activeMenuItem === 'Slozivo merilo' ? 'active' : ''}>Slozivo merilo</li>
                <li onClick={() => onMenuItemClick('Metri za tekstil')} className={activeMenuItem === 'Metri za tekstil' ? 'active' : ''}>Metri za tekstil</li>
            </ul>
            <button onClick={handleLogout}>Izloguj se</button>
        </nav>
    );
};


export default UserNavbar;
