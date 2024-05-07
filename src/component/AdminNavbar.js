import React from 'react';
import '../styles/UserNavbar.css';


const AdminNavbar = ({ handleLogout, onMenuItemClick, activeMenuItem }) => {
    return (
        <nav className="user-navbar">
            <ul>
                <li onClick={() => onMenuItemClick('Dashboard')} className={activeMenuItem === 'Dashboard' ? 'active' : ''}>Dashboard</li>
                <li onClick={() => onMenuItemClick('Korisnici')} className={activeMenuItem === 'Korisnici' ? 'active' : ''}>Korisnici</li>
                <li onClick={() => onMenuItemClick('Merna oprema')} className={activeMenuItem === 'Merna oprema' ? 'active' : ''}>Merna oprema</li>
            </ul>
            <button onClick={handleLogout}>Izloguj se</button>
        </nav>
    );
};


export default AdminNavbar;
