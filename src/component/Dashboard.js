import React, { useState, useEffect } from 'react';
import "../styles/Dashboard.css";

function Dashboard() {
    const [merila, setMerila] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }
        fetch('http://localhost:8080/api/v1/jednodelnoMerilo/all', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Neuspješno dohvatanje podataka');
                }
                return response.json();
            })
            .then(data => {
                // Promenite ime svakog merila na "Jednodelno merilo"
                const merilaSaImenom = data.map(merilo => {
                    return { ...merilo, ime: "Jednodelno merilo" };
                });
                setMerila(merilaSaImenom);
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    function handlePreuzimanje(id) {

    }

    function handleUređivanje(id) {

    }

    return (
        <div>
            <h2>User Dashboard</h2>
            <table>
                <thead>
                <tr>
                    <th>Broj Zapisnika</th>
                    <th>Ime</th>
                    <th>Datum</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {merila.map(merilo => (
                    <tr key={merilo.id}>
                        <td>{merilo.brojZapisnika}</td>
                        <td>{merilo.ime}</td>
                        <td>{new Date(merilo.datum).toLocaleDateString()}</td>
                        <td>
                            <button onClick={() => handlePreuzimanje(merilo.id)}>Preuzmi</button>
                        </td>
                        <td>
                            <button onClick={() => handleUređivanje(merilo.id)}>Uredi</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;
