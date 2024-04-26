import React, { useState, useEffect } from 'react';
import "../styles/Dashboard.css";
import axios from "axios";

function Korisnici() {
    const [korisnici, setKorisnici] = useState([]);
    const [role, setRole] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        fetchKorisnici();
    }, []);

    const fetchKorisnici = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Token nije pronađen u local storage-u.');
                return;
            }
            const response = await axios.get('http://localhost:8080/api/v1/user/all', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setKorisnici(response.data);
        } catch (error) {
            console.error('Greška prilikom dobijanja korisnika:', error);
        }
    };

    const handleUlogaChange = (e) => {
        setRole(e.target.value);
    };

    const handleDodajKorisnika = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Token nije pronađen u local storage-u.');
                return;
            }
            const userRequest = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                role: role,
            };
            await axios.post('http://localhost:8080/api/v1/user/add', userRequest, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            const response = await axios.get('http://localhost:8080/api/v1/user/all', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setKorisnici(response.data);
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setRole('');
            fetchKorisnici();
        } catch (error) {
            console.error('Greška prilikom dodavanja korisnika:', error);
        }
    };

    const handleBrisanjeKorisnika = async (email) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Token nije pronađen u local storage-u.');
                return;
            }
            await axios.delete('http://localhost:8080/api/v1/user/delete', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    email: email,
                },
            });
            fetchKorisnici();
        } catch (error) {
            console.error('Greška prilikom brisanja korisnika:', error);
        }
    };

    return (
        <div className="container">
            <h2>Lista korisnika</h2>
            <table>
                <thead>
                <tr>
                    <th>Ime</th>
                    <th>Prezime</th>
                    <th>Email</th>
                    <th>Uloga</th>
                </tr>
                </thead>
                <tbody>
                {korisnici.map(korisnik => (
                    <tr key={korisnik.id}>
                        <td>{korisnik.firstName}</td>
                        <td>{korisnik.lastName}</td>
                        <td>{korisnik.email}</td>
                        <td>{korisnik.role}</td>
                        <td>
                            <button onClick={() => handleBrisanjeKorisnika(korisnik.email)}>Obriši
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h2>Dodaj novog korisnika</h2>
            <form onSubmit={handleDodajKorisnika}>
                <label>
                    Ime:
                    <input type="text" name="firstName" placeholder="Ime" value={firstName}
                           onChange={(e) => setFirstName(e.target.value)}/>
                </label>
                <label>
                    Prezime:
                    <input type="text" name="lastName" placeholder="Prezime" value={lastName}
                           onChange={(e) => setLastName(e.target.value)}/>
                </label>
                <label>
                    Email:
                    <input type="email" name="email" placeholder="Email" value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    Šifra:
                    <input type="password" name="password" placeholder="Šifra" value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <label>
                    Uloga:
                    <select value={role} name="role" onChange={handleUlogaChange}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>
                <button type="submit">Dodaj korisnika</button>
            </form>


        </div>
    );
}

export default Korisnici;
