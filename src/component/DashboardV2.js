import React, {useState, useEffect, useContext} from 'react';
import "../styles/Dashboard.css";
import {GlobalContext} from "./GlobalContext";

const DashboardV2 = ( {handleViewSet}) => {
    const { globalVariable, setGlobalVariable } = useContext(GlobalContext);


    const [setoviOvaGodina, setSetoviOvaGodina] = useState([]);
    const [starijiSetovi, setStarijiSetovi] = useState([]);
    const [error, setError] = useState(null);
    const [brojZap, setBrojZap] = useState("");

    const handleVidiSet = (imeSeta) => {
        handleViewSet(imeSeta);
    };

    function updateBrojZapisnika() {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }
        fetch(`${globalVariable}/api/v1/brojZapisnika/checkAndUpdate`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Zapisnik ažuriran:', data);
            })
            .catch(error => {
                console.error('Greška prilikom ažuriranja zapisnika:', error);
            });
        window.location.reload();
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        fetch(`${globalVariable}/api/v1/brojZapisnika`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.text())
            .then(data => {
                setBrojZap(data);
            })
            .catch(error => {
                console.error('Error fetching broj zapisnika:', error);
            });

        fetch(`${globalVariable}/api/v1/brojZapisnika/getThisYear`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Neuspešno dohvatanje podataka');
                }
                return response.json();
            })
            .then(data => {
                setSetoviOvaGodina(data);
            })
            .catch(error => {
                setError(error);
            });

        fetch(`${globalVariable}/api/v1/brojZapisnika/getWithoutThisYear`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Neuspešno dohvatanje podataka');
                }
                return response.json();
            })
            .then(data => {
                setStarijiSetovi(data);
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    if (error) {
        return <div>Nešto nije u redu</div>;
    }

    return (
        <div>
            <div className="brojSetaContainer">
                <label>Trenutni broj seta:</label><label id="brojZap">{brojZap}</label>
                <button onClick={updateBrojZapisnika}>Završi</button>
            </div>

            <h2>Setovi u ovoj godini</h2>
            <table>
                <thead>
                <tr>
                    <th>Broj</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {setoviOvaGodina.map((set, index) => (
                    <tr key={index}>
                        <td>{set}</td>
                        <td>
                            <button onClick={() => handleVidiSet(set)}>Vidi set</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h2>Stariji setovi</h2>
            <table>
                <thead>
                <tr>
                    <th>Broj</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {starijiSetovi.map((set, index) => (
                    <tr key={index}>
                        <td>{set}</td>
                        <td>
                            <button onClick={() => handleVidiSet(set)}>Vidi set</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default DashboardV2;