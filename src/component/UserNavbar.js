import React, { useState, useEffect, useRef } from 'react';
import "../styles/UserNavbar.css";

const UserNavbar = ({ handleLogout, onMenuItemClick, activeMenuItem }) => {
    const [subMenuOpen1, setSubMenuOpen1] = useState(false);
    const [subMenuOpen2, setSubMenuOpen2] = useState(false);
    const menuRef = useRef(null);

    const handleSubMenuClick1 = () => {
        setSubMenuOpen1(!subMenuOpen1);
    };

    const handleSubMenuClick2 = () => {
        setSubMenuOpen2(!subMenuOpen2);
    };

    const handleMenuItemClick = (menuItem) => {
        onMenuItemClick(menuItem);
        if (menuItem !== 'Merna traka sa viskom 10m' && menuItem !== 'Merna traka 5m' && menuItem !== 'Merna traka 25m') {
            setSubMenuOpen1(false); // Close the submenu when any item except 'Merna traka sa viskom' is clicked
            setSubMenuOpen2(false); // Close the submenu when any item except 'Merna traka' is clicked
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setSubMenuOpen1(false);
                setSubMenuOpen2(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    return (
        <nav className="user-navbar" ref={menuRef}>
            <ul>
                <li onClick={() => handleMenuItemClick('Dashboard')} className={activeMenuItem === 'Dashboard' ? 'active' : ''}>Dashboard</li>
                <li onClick={() => handleMenuItemClick('Jednodelno merilo')} className={activeMenuItem === 'Jednodelno merilo' ? 'active' : ''}>Jednodelno merilo</li>
                <li onClick={() => handleMenuItemClick('Merna letva')} className={activeMenuItem === 'Merna letva' ? 'active' : ''}>Merna letva</li>
                <li className={activeMenuItem === 'Merna traka sa viskom 10m' || activeMenuItem === 'Merna traka sa viskom 25m' ? 'active' : ''}>
                    <span onClick={handleSubMenuClick1}>Merna traka sa viskom</span>
                    {subMenuOpen1 && (
                        <ul className="submenu">
                            <li onClick={() => handleMenuItemClick('Merna traka sa viskom 10m')} className={activeMenuItem === 'Merna traka sa viskom 10m' ? 'active' : ''}>Merna traka sa viskom 10m</li>
                            <li onClick={() => handleMenuItemClick('Merna traka sa viskom 25m')} className={activeMenuItem === 'Merna traka sa viskom 25m' ? 'active' : ''}>Merna traka sa viskom 25m</li>
                        </ul>
                    )}
                </li>
                <li className={activeMenuItem === 'Merna traka 5m' || activeMenuItem === 'Merna traka 25m' ? 'active' : ''}>
                    <span onClick={handleSubMenuClick2}>Merna traka</span>
                    {subMenuOpen2 && (
                        <ul className="submenu">
                            <li onClick={() => handleMenuItemClick('Merna traka 5m')} className={activeMenuItem === 'Merna traka 5m' ? 'active' : ''}>Merna traka 5m</li>
                            <li onClick={() => handleMenuItemClick('Merna traka 25m')} className={activeMenuItem === 'Merna traka 25m' ? 'active' : ''}>Merna traka 25m</li>
                        </ul>
                    )}
                </li>
                <li onClick={() => handleMenuItemClick('Masina za merenje')} className={activeMenuItem === 'Masina za merenje' ? 'active' : ''}>Mašina za merenje</li>
                <li onClick={() => handleMenuItemClick('Slozivo merilo')} className={activeMenuItem === 'Slozivo merilo' ? 'active' : ''}>Složivo merilo</li>
                <li onClick={() => handleMenuItemClick('Metri za tekstil')} className={activeMenuItem === 'Metri za tekstil' ? 'active' : ''}>Metri za tekstil</li>
            </ul>
            <button onClick={handleLogout}>Izloguj se</button>
        </nav>
    );
};

export default UserNavbar;
