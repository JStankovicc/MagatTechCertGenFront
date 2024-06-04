import React from 'react';
import '../styles/UserNavbar.css';


const UserNavbar = ({ handleLogout, onMenuItemClick, activeMenuItem }) => {
    return (
        <nav className="user-navbar">
            <ul>
                <li onClick={() => onMenuItemClick('Dashboard')} className={activeMenuItem === 'Dashboard' ? 'active' : ''}>Dashboard</li>
                <li onClick={() => onMenuItemClick('Jednodelno merilo')} className={activeMenuItem === 'Jednodelno merilo' ? 'active' : ''}>Jednodelno merilo</li>
                <li onClick={() => onMenuItemClick('Merna letva')} className={activeMenuItem === 'Merna letva' ? 'active' : ''}>Merna letva</li>
                <li onClick={() => onMenuItemClick('Merna traka sa viskom')} className={activeMenuItem === 'Merna traka sa viskom' ? 'active' : ''}>Merna traka sa viskom</li>
                <li onClick={() => onMenuItemClick('Masina za merenje')} className={activeMenuItem === 'Masina za merenje' ? 'active' : ''}>Mašina za merenje</li>
                <li onClick={() => onMenuItemClick('Slozivo merilo')} className={activeMenuItem === 'Slozivo merilo' ? 'active' : ''}>Složivo merilo</li>
                <li onClick={() => onMenuItemClick('Metri za tekstil')} className={activeMenuItem === 'Metri za tekstil' ? 'active' : ''}>Metri za tekstil</li>
            </ul>
            <button onClick={handleLogout}>Izloguj se</button>
        </nav>
    );
};


export default UserNavbar;
