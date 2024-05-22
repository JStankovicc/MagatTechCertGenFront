import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Dashboard.css";

function MernaOprema() {
    const [oprema, setOprema] = useState([]);
    const [tipoviOpreme, setTipoviOpreme] = useState([]);
    const [tip, setTip] = useState('');
    const [serBrEtalona, setSerBrEtalona] = useState('');

    useEffect(() => {
        fetchOprema();
        fetchTipoviOpreme();
    }, []);

    const fetchOprema = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:8080/api/v1/oprema/all', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setOprema(response.data);
        } catch (error) {
            console.error('Greška prilikom dobijanja opreme:', error);
        }
    };

    const fetchTipoviOpreme = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:8080/api/v1/oprema/types', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setTipoviOpreme(response.data);
        } catch (error) {
            console.error('Greška prilikom dobijanja tipova opreme:', error);
        }
    };

    const handleBrisanjeOpreme = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:8080/api/v1/oprema/delete`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    id: id,
                },
            });
            fetchOprema();
        } catch (error) {
            console.error('Greška prilikom brisanja opreme:', error);
        }
    };

    const handleDodajOpremu = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:8080/api/v1/oprema/add', {
                tip: tip,
                serBrEtalona: serBrEtalona,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            fetchOprema();
            setTip('');
            setSerBrEtalona('');
        } catch (error) {
            console.error('Greška prilikom dodavanja opreme:', error);
        }
    };

    return (
        <div className="container">
            <h2>Lista merne opreme</h2>
            <table>
                <thead>
                <tr>
                    <th>Tip</th>
                    <th>SerBrEtalona</th>
                    <th>Opcije</th>
                </tr>
                </thead>
                <tbody>
                {oprema.map(item => (
                    <tr key={item.id}>
                        <td>{item.tip}</td>
                        <td>{item.serBrEtalona}</td>
                        <td>
                            <button onClick={() => handleBrisanjeOpreme(item.id)}>Obriši</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h2>Dodaj novu opremu</h2>
            <form onSubmit={handleDodajOpremu}>
                <label>
                    Tip:
                    <select value={tip} onChange={(e) => setTip(e.target.value)}>
                        {tipoviOpreme.map((tip) => (
                            <option key={tip} value={tip}>{tip}</option>
                        ))}
                    </select>
                </label>
                <label>
                    SerBrEtalona:
                    <input type="text" value={serBrEtalona} onChange={(e) => setSerBrEtalona(e.target.value)}/>
                </label>
                <button type="submit">Dodaj opremu</button>
            </form>
        </div>
    );
}

export default MernaOprema;
