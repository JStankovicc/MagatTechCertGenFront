import React, {useState} from 'react';
import AdminNavbar from "./AdminNavbar";
import AdminBoard from "./AdminBoard";
import Korisnici from "./Korisnici";
import Overavanje from "./Overavanje";
import MernaOprema from "./MernaOprema";

const AdminDashboard = ({ onLogout, userRole, handleLogout }) => {


    const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');

    const handleMenuItemClick = (menuItem) => {
        setActiveMenuItem(menuItem);
    };

    return (
        <div>
            <AdminNavbar handleLogout={handleLogout} onMenuItemClick={handleMenuItemClick} activeMenuItem={activeMenuItem} />
            {activeMenuItem === 'Dashboard' && <AdminBoard />}
            {activeMenuItem === 'Korisnici' && <Korisnici />}
            {activeMenuItem === 'Overavanje' && <Overavanje />}
            {activeMenuItem === 'Merna oprema' && <MernaOprema />}
        </div>
    );
};

export default AdminDashboard;