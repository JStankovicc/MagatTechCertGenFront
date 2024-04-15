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
                    throw new Error('Neuspešno dohvatanje podataka');
                }
                return response.json();
            })
            .then(data => {
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

    function handlePreuzimanje(id) {
        // Uzimamo token iz local storage-a
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        fetch('http://localhost:8080/api/v1/jednodelnoMerilo/print', {
            method: 'GET',
            headers: {
                // Dodajemo Authorization header sa Bearer tokenom
                'Authorization': `Bearer ${token}`,
                // Postavljamo responseType na blob za binarni format
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Neuspešno preuzimanje PDF-a');
                }
                return response.blob(); // Pretvaramo odgovor u blob
            })
            .then(pdfBlob => {
                // Kreiramo URL za preuzimanje PDF fajla
                const url = window.URL.createObjectURL(pdfBlob);
                // Kreiramo skriveni <a> element za preuzimanje
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `merilo_${id}.pdf`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja PDF-a:', error);
            });
    }



    return (
        <div>
            <button onClick={handlePreuzimanje(0)}>TEST</button>
            <h2>Neoverena Merila</h2>
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
