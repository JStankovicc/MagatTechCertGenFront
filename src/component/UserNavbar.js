import React, { useState, useEffect, useRef } from 'react';

const UserNavbar = ({ handleLogout, onMenuItemClick, activeMenuItem }) => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleSubMenuClick = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    const handleMenuItemClick = (menuItem) => {
        onMenuItemClick(menuItem);
        if (menuItem !== 'Merna traka sa viskom 5m') {
            setSubMenuOpen(false); // Close the submenu when any item except 'Merna traka sa viskom' is clicked
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setSubMenuOpen(false);
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
                <li className={activeMenuItem === 'Merna traka sa viskom' || activeMenuItem === 'Merna traka sa viskom 25m' ? 'active' : ''}>
                    <span onClick={handleSubMenuClick}>Merna traka sa viskom</span>
                    {subMenuOpen && (
                        <ul className="submenu">
                            <li onClick={() => handleMenuItemClick('Merna traka sa viskom 5m')} className={activeMenuItem === 'Merna traka sa viskom 5m' ? 'active' : ''}>Merna traka sa viskom 5m</li>
                            <li onClick={() => handleMenuItemClick('Merna traka sa viskom 25m')} className={activeMenuItem === 'Merna traka sa viskom 25m' ? 'active' : ''}>Merna traka sa viskom 25m</li>
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
