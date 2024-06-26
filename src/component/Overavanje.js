import React, { useState, useEffect } from 'react';
import "../styles/Dashboard.css";

function Overavanje() {
    const [merila, setMerila] = useState([]);
    const [merneLetve, setMerneLetve] = useState([]);
    const [merneTrake, setMerneTrake] = useState([]);
    const [masineZaMerenje, setMasineZaMerenje] = useState([]);
    const [slozivaMerila, setslozivaMerila] = useState([]);
    const [metriZaTekstil, setmetriZaTekstil] = useState([]);



    const [error, setError] = useState(null);

    useEffect(() => {
        loadData();
    }, []);

    function loadData(){
        const token = localStorage.getItem('token');

        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        fetch('http://localhost:8080/api/v1/jednodelnoMerilo/neoverena', {
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

        fetch('http://localhost:8080/api/v1/mernaLetva/neoverena', {
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
                const merilaSaImenom = data.map(merneLetve => {
                    return { ...merneLetve, ime: "Merna letva" };
                });
                setMerneLetve(merilaSaImenom);
            })
            .catch(error => {
                setError(error);
            });


        fetch('http://localhost:8080/api/v1/mernaTrakaSaViskom/neoverena', {
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
                const merilaSaImenom = data.map(merneTrake => {
                    return { ...merneTrake, ime: "Merna traka" };
                });
                setMerneTrake(merilaSaImenom);
            })
            .catch(error => {
                setError(error);
            });


        fetch('http://localhost:8080/api/v1/masinaZaMerenje/neoverena', {
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
                const merilaSaImenom = data.map(masineZaMerenje => {
                    return { ...masineZaMerenje, ime: "Masina za merenje" };
                });
                setMasineZaMerenje(merilaSaImenom);
            })
            .catch(error => {
                setError(error);
            });

        fetch('http://localhost:8080/api/v1/slozivoMerilo/neoverena', {
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
                const merilaSaImenom = data.map(slozivaMerila => {
                    return { ...slozivaMerila, ime: "Slozivo merilo" };
                });
                setslozivaMerila(merilaSaImenom);
            })
            .catch(error => {
                setError(error);
            });

        fetch('http://localhost:8080/api/v1/metriZaTekstil/neoverena', {
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
                const merilaSaImenom = data.map(metriZaTekstil => {
                    return { ...metriZaTekstil, ime: "Metri za tekstil" };
                });
                setmetriZaTekstil(merilaSaImenom);
            })
            .catch(error => {
                setError(error);
            });
    }

    if (error) {
        return <div>Nesto nije u redu</div>;
    }

    function handlePreuzimanje(id) {

    }

    function handleUređivanje(id) {

    }

    function handlePreuzimanjeJednodelnogMerila(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const url = `http://localhost:8080/api/v1/jednodelnoMerilo/print?brojZapisnika=${id}`;

        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Neuspešno preuzimanje Word datoteke');
                }
                return response.blob();
            })
            .then(docxBlob => {
                const url = window.URL.createObjectURL(docxBlob);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `generisanoJednodelnoMerilo.docx`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handlePreuzimanjeMerneLetve(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }
        const url = `http://localhost:8080/api/v1/mernaLetva/print?brojZapisnika=${id}`;

        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Neuspešno preuzimanje Word datoteke');
                }
                return response.blob();
            })
            .then(docxBlob => {
                const url = window.URL.createObjectURL(docxBlob);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `generisanaMernaLetva.docx`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handlePreuzimanjeMerneTrake(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }
        const url = `http://localhost:8080/api/v1/mernaTrakaSaViskom/print?brojZapisnika=${id}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Neuspešno preuzimanje Word datoteke');
                }
                return response.blob();
            })
            .then(docxBlob => {
                const url = window.URL.createObjectURL(docxBlob);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `generisanaMernaTraka.docx`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handlePreuzimanjeMasineZaMerenje(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }
        const url = `http://localhost:8080/api/v1/masinaZaMerenje/print?brojZapisnika=${id}`;

        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Neuspešno preuzimanje Word datoteke');
                }
                return response.blob();
            })
            .then(docxBlob => {
                const url = window.URL.createObjectURL(docxBlob);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `generisanaMasinaZaMerenje.docx`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handlePreuzimanjeSlozivogMerila(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const url = `http://localhost:8080/api/v1/slozivoMerilo/print?brojZapisnika=${id}`;

        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Neuspešno preuzimanje Word datoteke');
                }
                return response.blob();
            })
            .then(docxBlob => {
                const url = window.URL.createObjectURL(docxBlob);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `generisanoSlozivoMerilo.docx`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handlePreuzimanjeMetriZaTekstil(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const url = `http://localhost:8080/api/v1/metriZaTekstil/print?brojZapisnika=${id}`;


        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Neuspešno preuzimanje Word datoteke');
                }
                return response.blob();
            })
            .then(docxBlob => {
                const url = window.URL.createObjectURL(docxBlob);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `generisanMetarZaTekstil.docx`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handleOdobravanjeJednodelnogMerila(id) {

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const url = `http://localhost:8080/api/v1/jednodelnoMerilo/odobri?brojZapisnika=${id}`;


        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .catch(error => {
                console.error('Greška prilikom overavanja merila:', error);
            });

        loadData();
    }

    function handleOdobravanjeMerneLetve(id) {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const url = `http://localhost:8080/api/v1/mernaLetva/odobri?brojZapisnika=${id}`;


        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .catch(error => {
                console.error('Greška prilikom overavanja merila:', error);
            });

        loadData();
    }

    function handleOdobravanjeMerneTrake(id) {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const url = `http://localhost:8080/api/v1/mernaTrakaSaViskom/odobri?brojZapisnika=${id}`;


        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .catch(error => {
                console.error('Greška prilikom overavanja merila:', error);
            });

        loadData();
    }

    function handleOdobravanjeMasineZaMerenje(id) {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const url = `http://localhost:8080/api/v1/masinaZaMerenje/odobri?brojZapisnika=${id}`;


        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .catch(error => {
                console.error('Greška prilikom overavanja merila:', error);
            });

        loadData();
    }

    function handleOdobravanjeSlozivogMerila(id) {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const url = `http://localhost:8080/api/v1/slozivoMerilo/odobri?brojZapisnika=${id}`;


        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .catch(error => {
                console.error('Greška prilikom overavanja merila:', error);
            });

        loadData();
    }

    function handleOdobravanjeMetriZaTekstil(id) {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const url = `http://localhost:8080/api/v1/metriZaTekstil/odobri?brojZapisnika=${id}`;


        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .catch(error => {
                console.error('Greška prilikom overavanja merila:', error);
            });

        loadData();
    }

    return (
        <div>
            <h2>Jednodelna merila</h2>
            <table>
                <thead>
                <tr>
                    <th>Broj Zapisnika</th>
                    <th>Ime</th>
                    <th>Datum</th>
                    <th></th>
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
                            <button onClick={() => handlePreuzimanjeJednodelnogMerila(merilo.brojZapisnika)}>Preuzmi
                            </button>
                        </td>
                        <td>
                            <button onClick={() => handleUređivanje(merilo.id)}>Uredi</button>
                        </td>
                        <td>
                            <button onClick={() => handleOdobravanjeJednodelnogMerila(merilo.brojZapisnika)}>Odobri</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h2>Merne letve</h2>
            <table>
            <thead>
            <tr>
                <th>Broj Zapisnika</th>
                <th>Ime</th>
                <th>Datum</th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            </thead>
                <tbody>
                {merneLetve.map(merilo => (
                    <tr key={merilo.id}>
                        <td>{merilo.brojZapisnika}</td>
                        <td>{merilo.ime}</td>
                        <td>{new Date(merilo.datum).toLocaleDateString()}</td>
                        <td>
                            <button onClick={() => handlePreuzimanjeMerneLetve(merilo.brojZapisnika)}>Preuzmi</button>
                        </td>
                        <td>
                            <button onClick={() => handleUređivanje(merilo.id)}>Uredi</button>
                        </td>
                        <td>
                            <button onClick={() => handleOdobravanjeMerneLetve(merilo.brojZapisnika)}>Odobri
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>


            <h2>Merne trake</h2>
            <table>
                <thead>
                <tr>
                    <th>Broj Zapisnika</th>
                    <th>Ime</th>
                    <th>Datum</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {merneTrake.map(merilo => (
                    <tr key={merilo.id}>
                        <td>{merilo.brojZapisnika}</td>
                        <td>{merilo.ime}</td>
                        <td>{new Date(merilo.datum).toLocaleDateString()}</td>
                        <td>
                            <button onClick={() => handlePreuzimanjeMerneTrake(merilo.brojZapisnika)}>Preuzmi</button>
                        </td>
                        <td>
                            <button onClick={() => handleUređivanje(merilo.id)}>Uredi</button>
                        </td>
                        <td>
                            <button onClick={() => handleOdobravanjeMerneTrake(merilo.brojZapisnika)}>Odobri
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>


            <h2>Masine za merenje</h2>
            <table>
                <thead>
                <tr>
                    <th>Broj Zapisnika</th>
                    <th>Ime</th>
                    <th>Datum</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {masineZaMerenje.map(merilo => (
                    <tr key={merilo.id}>
                        <td>{merilo.brojZapisnika}</td>
                        <td>{merilo.ime}</td>
                        <td>{new Date(merilo.datum).toLocaleDateString()}</td>
                        <td>
                            <button onClick={() => handlePreuzimanjeMasineZaMerenje(merilo.brojZapisnika)}>Preuzmi
                            </button>
                        </td>
                        <td>
                            <button onClick={() => handleUređivanje(merilo.id)}>Uredi</button>
                        </td>
                        <td>
                            <button onClick={() => handleOdobravanjeMasineZaMerenje(merilo.brojZapisnika)}>Odobri
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h2>Sloziva merila</h2>
            <table>
                <thead>
                <tr>
                    <th>Broj Zapisnika</th>
                    <th>Ime</th>
                    <th>Datum</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {slozivaMerila.map(merilo => (
                    <tr key={merilo.id}>
                        <td>{merilo.brojZapisnika}</td>
                        <td>{merilo.ime}</td>
                        <td>{new Date(merilo.datum).toLocaleDateString()}</td>
                        <td>
                            <button onClick={() => handlePreuzimanjeSlozivogMerila(merilo.brojZapisnika)}>Preuzmi
                            </button>
                        </td>
                        <td>
                            <button onClick={() => handleUređivanje(merilo.id)}>Uredi</button>
                        </td>
                        <td>
                            <button onClick={() => handleOdobravanjeSlozivogMerila(merilo.brojZapisnika)}>Odobri
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h2>Metri za tekstil</h2>
            <table>
                <thead>
                <tr>
                    <th>Broj Zapisnika</th>
                    <th>Ime</th>
                    <th>Datum</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {metriZaTekstil.map(merilo => (
                    <tr key={merilo.id}>
                        <td>{merilo.brojZapisnika}</td>
                        <td>{merilo.ime}</td>
                        <td>{new Date(merilo.datum).toLocaleDateString()}</td>
                        <td>
                            <button onClick={() => handlePreuzimanjeMetriZaTekstil(merilo.brojZapisnika)}>Preuzmi
                            </button>
                        </td>
                        <td>
                            <button onClick={() => handleUređivanje(merilo.id)}>Uredi</button>
                        </td>
                        <td>
                            <button onClick={() => handleOdobravanjeMetriZaTekstil(merilo.brojZapisnika)}>Odobri
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Overavanje;
