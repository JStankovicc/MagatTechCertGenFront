import React, {useState, useEffect, useContext} from 'react';
import "../styles/Dashboard.css";
import {GlobalContext} from "./GlobalContext";

const Dashboard = ({ handleEditJednodelnogMerila , handleEditSlozivogMerila , handleEditMetriZaTekstil , handleEditMernaLetva , handleEditMernaTrakaSaViskom , handleEditMasinaZaMerenje, handleEditMernaTrakaSaViskom25m, handleEditMernaTraka25m, handleEditMernaTraka5m, brojSeta}) =>{
    const { globalVariable, setGlobalVariable } = useContext(GlobalContext);



    const [merila, setMerila] = useState([]);
    const [merneLetve, setMerneLetve] = useState([]);
    const [merneTrake, setMerneTrake] = useState([]);
    const [merneTrake25m, setMerneTrake25m] = useState([]);
    const [merneTrakeO5m, setMerneTrakeO5m] = useState([]);
    const [merneTrakeO25m, setMerneTrakeO25m] = useState([]);
    const [masineZaMerenje, setMasineZaMerenje] = useState([]);
    const [slozivaMerila, setslozivaMerila] = useState([]);
    const [metriZaTekstil, setmetriZaTekstil] = useState([]);
    const [error, setError] = useState(null);
    const [brojZap, setBrojZap] = useState("");

    function updateBrojZapisnika(){
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

        fetch(`${globalVariable}/api/v1/brojZapisnika`,{
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

        fetch(`${globalVariable}/api/v1/jednodelnoMerilo/allByBrojSeta?brojSeta=${brojSeta}`, {
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

        fetch(`${globalVariable}/api/v1/mernaLetva/allByBrojSeta?brojSeta=${brojSeta}`, {
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


        fetch(`${globalVariable}/api/v1/mernaTrakaSaViskom/allByBrojSeta?brojSeta=${brojSeta}`, {
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

        fetch(`${globalVariable}/api/v1/mernaTrakaSaViskom25m/allByBrojSeta?brojSeta=${brojSeta}`, {
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
                    return { ...merneTrake, ime: "Merna traka 25m" };
                });
                setMerneTrake25m(merilaSaImenom);
            })
            .catch(error => {
                setError(error);
            });

        fetch(`${globalVariable}/api/v1/mernaTraka25m/allByBrojSeta?brojSeta=${brojSeta}`, {
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
                    return { ...merneTrake, ime: "Merna traka 25m" };
                });
                setMerneTrakeO25m(merilaSaImenom);
            })
            .catch(error => {
                setError(error);
            });

        fetch(`${globalVariable}/api/v1/mernaTraka5m/allByBrojSeta?brojSeta=${brojSeta}`, {
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
                    return { ...merneTrake, ime: "Merna traka 25m" };
                });
                setMerneTrakeO5m(merilaSaImenom);
            })
            .catch(error => {
                setError(error);
            });

        fetch(`${globalVariable}/api/v1/masinaZaMerenje/allByBrojSeta?brojSeta=${brojSeta}`, {
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

        fetch(`${globalVariable}/api/v1/slozivoMerilo/allByBrojSeta?brojSeta=${brojSeta}`, {
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

        fetch(`${globalVariable}/api/v1/metriZaTekstil/allByBrojSeta?brojSeta=${brojSeta}`, {
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
    }, []);

    if (error) {
        return <div>Nesto nije u redu</div>;
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

        const url = `${globalVariable}/api/v1/jednodelnoMerilo/print?brojZapisnika=${id}`;

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
                link.setAttribute('download', `${id} - zapisnik.docx`);
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
        const url = `${globalVariable}/api/v1/mernaLetva/print?brojZapisnika=${id}`;

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
                link.setAttribute('download', `${id} - zapisnik.docx`);
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
        const url = `${globalVariable}/api/v1/mernaTrakaSaViskom/print?brojZapisnika=${id}`;
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
                link.setAttribute('download', `${id} - zapisnik.docx`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handlePreuzimanjeMerneTrakeO25m(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }
        const url = `${globalVariable}/api/v1/mernaTraka25m/print?brojZapisnika=${id}`;
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
                link.setAttribute('download', `${id} - zapisnik.docx`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handlePreuzimanjeMerneTrakeO5m(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }
        const url = `${globalVariable}/api/v1/mernaTraka5m/print?brojZapisnika=${id}`;
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
                link.setAttribute('download', `${id} - zapisnik.docx`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handlePreuzimanjeMerneTrake25m(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }
        const url = `${globalVariable}/api/v1/mernaTrakaSaViskom25m/print?brojZapisnika=${id}`;
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
                link.setAttribute('download', `${id} - zapisnik.docx`);
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
        const url = `${globalVariable}/api/v1/masinaZaMerenje/print?brojZapisnika=${id}`;

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
                link.setAttribute('download', `${id} - zapisnik.docx`);
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

        const url = `${globalVariable}/api/v1/slozivoMerilo/print?brojZapisnika=${id}`;

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
                link.setAttribute('download', `${id} - zapisnik.docx`);
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

        const url = `${globalVariable}/api/v1/metriZaTekstil/print?brojZapisnika=${id}`;


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
                link.setAttribute('download', `${id} - zapisnik.docx`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handleResenjeJednodelnogMerila(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const urlCheck = `${globalVariable}/api/v1/jednodelnoMerilo/checkType?brojZapisnika=${id}`;
        const urlDownload = `${globalVariable}/api/v1/jednodelnoMerilo/printResenje?brojZapisnika=${id}`;

        fetch(urlCheck, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Neuspešno dobijanje tipa datoteke');
                }
                return response.text();
            })
            .then(fileType => {
                return fetch(urlDownload, {
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
                        link.setAttribute('download', `${id}-${fileType}.docx`);
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    });
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handleResenjeMerneLetve(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const urlCheck = `${globalVariable}/api/v1/mernaLetva/checkType?brojZapisnika=${id}`;
        const urlDownload = `${globalVariable}/api/v1/mernaLetva/printResenje?brojZapisnika=${id}`;

        fetch(urlCheck, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Neuspešno dobijanje tipa datoteke');
                }
                return response.text();
            })
            .then(fileType => {
                return fetch(urlDownload, {
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
                        link.setAttribute('download', `${id}-${fileType}.docx`);
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    });
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handleResenjeMerneTrake(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const urlCheck = `${globalVariable}/api/v1/mernaTrakaSaViskom/checkType?brojZapisnika=${id}`;
        const urlDownload = `${globalVariable}/api/v1/mernaTrakaSaViskom/printResenje?brojZapisnika=${id}`;

        fetch(urlCheck, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Neuspešno dobijanje tipa datoteke');
                }
                return response.text();
            })
            .then(fileType => {
                return fetch(urlDownload, {
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
                        link.setAttribute('download', `${id}-${fileType}.docx`);
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    });
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handleResenjeMerneTrake25m(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const urlCheck = `${globalVariable}/api/v1/mernaTrakaSaViskom25m/checkType?brojZapisnika=${id}`;
        const urlDownload = `${globalVariable}/api/v1/mernaTrakaSaViskom25m/printResenje?brojZapisnika=${id}`;

        fetch(urlCheck, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Neuspešno dobijanje tipa datoteke');
                }
                return response.text();
            })
            .then(fileType => {
                return fetch(urlDownload, {
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
                        link.setAttribute('download', `${id}-${fileType}.docx`);
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    });
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handleResenjeMerneTrakeO25m(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const urlCheck = `${globalVariable}/api/v1/mernaTraka25m/checkType?brojZapisnika=${id}`;
        const urlDownload = `${globalVariable}/api/v1/mernaTraka25m/printResenje?brojZapisnika=${id}`;

        fetch(urlCheck, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Neuspešno dobijanje tipa datoteke');
                }
                return response.text();
            })
            .then(fileType => {
                return fetch(urlDownload, {
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
                        link.setAttribute('download', `${id}-${fileType}.docx`);
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    });
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handleResenjeMerneTrakeO5m(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const urlCheck = `${globalVariable}/api/v1/mernaTraka5m/checkType?brojZapisnika=${id}`;
        const urlDownload = `${globalVariable}/api/v1/mernaTraka5m/printResenje?brojZapisnika=${id}`;

        fetch(urlCheck, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Neuspešno dobijanje tipa datoteke');
                }
                return response.text();
            })
            .then(fileType => {
                return fetch(urlDownload, {
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
                        link.setAttribute('download', `${id}-${fileType}.docx`);
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    });
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handleResenjeMasineZaMerenje(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const urlCheck = `${globalVariable}/api/v1/masinaZaMerenje/checkType?brojZapisnika=${id}`;
        const urlDownload = `${globalVariable}/api/v1/masinaZaMerenje/printResenje?brojZapisnika=${id}`;

        fetch(urlCheck, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Neuspešno dobijanje tipa datoteke');
                }
                return response.text();
            })
            .then(fileType => {
                return fetch(urlDownload, {
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
                        link.setAttribute('download', `${id}-${fileType}.docx`);
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    });
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handleResenjeSlozivogMerila(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const urlCheck = `${globalVariable}/api/v1/slozivoMerilo/checkType?brojZapisnika=${id}`;
        const urlDownload = `${globalVariable}/api/v1/slozivoMerilo/printResenje?brojZapisnika=${id}`;

        fetch(urlCheck, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Neuspešno dobijanje tipa datoteke');
                }
                return response.text();
            })
            .then(fileType => {
                return fetch(urlDownload, {
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
                        link.setAttribute('download', `${id}-${fileType}.docx`);
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    });
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handleResenjeMetriZaTekstil(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const urlCheck = `${globalVariable}/api/v1/metriZaTekstil/checkType?brojZapisnika=${id}`;
        const urlDownload = `${globalVariable}/api/v1/metriZaTekstil/printResenje?brojZapisnika=${id}`;

        fetch(urlCheck, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Neuspešno dobijanje tipa datoteke');
                }
                return response.text();
            })
            .then(fileType => {
                return fetch(urlDownload, {
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
                        link.setAttribute('download', `${id}-${fileType}.docx`);
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    });
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handleSertifikatJednodelnogMerila(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const url = `${globalVariable}/api/v1/jednodelnoMerilo/printSertifikat?brojZapisnika=${id}`;

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
                link.setAttribute('download', `${id} - sertifikat o kontrolisanju.docx`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handleSertifikatMerneLetve(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const url = `${globalVariable}/api/v1/mernaLetva/printSertifikat?brojZapisnika=${id}`;

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
                link.setAttribute('download', `${id} - sertifikat o kontrolisanju.docx`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handleSertifikatMerneTrake(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const url = `${globalVariable}/api/v1/mernaTrakaSaViskom/printSertifikat?brojZapisnika=${id}`;

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
                link.setAttribute('download', `${id} - sertifikat o kontrolisanju.docx`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handleSertifikatMerneTrake25m(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const url = `${globalVariable}/api/v1/mernaTrakaSaViskom25m/printSertifikat?brojZapisnika=${id}`;

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
                link.setAttribute('download', `${id} - sertifikat o kontrolisanju.docx`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handleSertifikatMerneTrakeO25m(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const url = `${globalVariable}/api/v1/mernaTraka25m/printSertifikat?brojZapisnika=${id}`;

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
                link.setAttribute('download', `${id} - sertifikat o kontrolisanju.docx`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handleSertifikatMerneTrakeO5m(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const url = `${globalVariable}/api/v1/mernaTraka5m/printSertifikat?brojZapisnika=${id}`;

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
                link.setAttribute('download', `${id} - sertifikat o kontrolisanju.docx`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handleSertifikatMasineZaMerenje(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const url = `${globalVariable}/api/v1/masinaZaMerenje/printSertifikat?brojZapisnika=${id}`;

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
                link.setAttribute('download', `${id} - sertifikat o kontrolisanju.docx`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handleSertifikatSlozivogMerila(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const url = `${globalVariable}/api/v1/slozivoMerilo/printSertifikat?brojZapisnika=${id}`;

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
                link.setAttribute('download', `${id} - sertifikat o kontrolisanju.docx`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handleSertifikatMetarZaTekstil(id) {
        const potvrda = window.confirm('Da li želite da preuzmete datoteku?');

        if (!potvrda) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const url = `${globalVariable}/api/v1/metriZaTekstil/printSertifikat?brojZapisnika=${id}`;

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
                link.setAttribute('download', `${id} - sertifikat o kontrolisanju.docx`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Greška prilikom preuzimanja Word datoteke:', error);
            });
    }

    function handleUredjivanjeJednodelnogMerila(id) {
        handleEditJednodelnogMerila(id);
    }

    function handleUredjivanjeSlozivogMerila(id) {
        handleEditSlozivogMerila(id);
    }

    function handleUredjivanjeMetriZaTekstil(id){
        handleEditMetriZaTekstil(id);
    }

    function handleUredjivanjeMernaLetva(id){
        handleEditMernaLetva(id);
    }

    function handleUredjivanjeMernaTrakaSaViskom(id){
        handleEditMernaTrakaSaViskom(id);
    }

    function handleUredjivanjeMernaTrakaSaViskom25m(id){
        handleEditMernaTrakaSaViskom25m(id);
    }

    function handleUredjivanjeMernaTraka25m(id){
        handleEditMernaTraka25m(id);
    }

    function handleUredjivanjeMernaTraka5m(id){
        handleEditMernaTraka5m(id);
    }

    function handleUredjivanjeMasinaZaMerenje(id){
        handleEditMasinaZaMerenje(id);
    }

    return (
        <div>
            <div className="brojSetaContainer">
                <label>Trenutni broj seta:</label><label id="brojZap">{brojZap}</label>
                <button onClick={updateBrojZapisnika}>Završi</button>
            </div>
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
                            <button onClick={() => handleUredjivanjeJednodelnogMerila(merilo.brojZapisnika)}>Uredi
                            </button>
                        </td>
                        <td>
                            <button
                                onClick={() => handleResenjeJednodelnogMerila(merilo.brojZapisnika)}>Rešenje/Uverenje
                            </button>
                        </td>
                        <td>
                            <button
                                onClick={() => handleSertifikatJednodelnogMerila(merilo.brojZapisnika)}>Sertifikat
                            </button>
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
                            <button onClick={() => handleUredjivanjeMernaLetva(merilo.brojZapisnika)}>Uredi</button>
                        </td>
                        <td>
                            <button onClick={() => handleResenjeMerneLetve(merilo.brojZapisnika)}>Rešenje/Uverenje
                            </button>
                        </td>
                        <td>
                            <button
                                onClick={() => handleSertifikatMerneLetve(merilo.brojZapisnika)}>Sertifikat
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>


            <h2>Merne trake sa viskom 10m</h2>
            <table>
                <thead>
                <tr>
                    <th>Broj Zapisnika</th>
                    <th>Ime</th>
                    <th>Datum</th>
                    <th></th>
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
                            <button onClick={() => handleUredjivanjeMernaTrakaSaViskom(merilo.brojZapisnika)}>Uredi
                            </button>
                        </td>
                        <td>
                            <button onClick={() => handleResenjeMerneTrake(merilo.brojZapisnika)}>Rešenje/Uverenje
                            </button>
                        </td>
                        <td>
                            <button
                                onClick={() => handleSertifikatMerneTrake(merilo.brojZapisnika)}>Sertifikat
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>


            <h2>Merne trake sa viskom 25m</h2>
            <table>
                <thead>
                <tr>
                    <th>Broj Zapisnika</th>
                    <th>Ime</th>
                    <th>Datum</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {merneTrake25m.map(merilo => (
                    <tr key={merilo.id}>
                        <td>{merilo.brojZapisnika}</td>
                        <td>{merilo.ime}</td>
                        <td>{new Date(merilo.datum).toLocaleDateString()}</td>
                        <td>
                            <button onClick={() => handlePreuzimanjeMerneTrake25m(merilo.brojZapisnika)}>Preuzmi
                            </button>
                        </td>
                        <td>
                            <button onClick={() => handleUredjivanjeMernaTrakaSaViskom25m(merilo.brojZapisnika)}>Uredi
                            </button>
                        </td>
                        <td>
                            <button onClick={() => handleResenjeMerneTrake25m(merilo.brojZapisnika)}>Rešenje/Uverenje
                            </button>
                        </td>
                        <td>
                            <button
                                onClick={() => handleSertifikatMerneTrake25m(merilo.brojZapisnika)}>Sertifikat
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h2>Merne trake 5m</h2>
            <table>
                <thead>
                <tr>
                    <th>Broj Zapisnika</th>
                    <th>Ime</th>
                    <th>Datum</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {merneTrakeO5m.map(merilo => (
                    <tr key={merilo.id}>
                        <td>{merilo.brojZapisnika}</td>
                        <td>{merilo.ime}</td>
                        <td>{new Date(merilo.datum).toLocaleDateString()}</td>
                        <td>
                            <button onClick={() => handlePreuzimanjeMerneTrakeO5m(merilo.brojZapisnika)}>Preuzmi
                            </button>
                        </td>
                        <td>
                            <button onClick={() => handleUredjivanjeMernaTraka5m(merilo.brojZapisnika)}>Uredi
                            </button>
                        </td>
                        <td>
                            <button onClick={() => handleResenjeMerneTrakeO5m(merilo.brojZapisnika)}>Rešenje/Uverenje
                            </button>
                        </td>
                        <td>
                            <button
                                onClick={() => handleSertifikatMerneTrakeO5m(merilo.brojZapisnika)}>Sertifikat
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h2>Merne trake 25m</h2>
            <table>
                <thead>
                <tr>
                    <th>Broj Zapisnika</th>
                    <th>Ime</th>
                    <th>Datum</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {merneTrakeO25m.map(merilo => (
                    <tr key={merilo.id}>
                        <td>{merilo.brojZapisnika}</td>
                        <td>{merilo.ime}</td>
                        <td>{new Date(merilo.datum).toLocaleDateString()}</td>
                        <td>
                            <button onClick={() => handlePreuzimanjeMerneTrakeO25m(merilo.brojZapisnika)}>Preuzmi
                            </button>
                        </td>
                        <td>
                            <button onClick={() => handleUredjivanjeMernaTraka25m(merilo.brojZapisnika)}>Uredi
                            </button>
                        </td>
                        <td>
                            <button onClick={() => handleResenjeMerneTrakeO25m(merilo.brojZapisnika)}>Rešenje/Uverenje
                            </button>
                        </td>
                        <td>
                            <button
                                onClick={() => handleSertifikatMerneTrakeO25m(merilo.brojZapisnika)}>Sertifikat
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
                            <button onClick={() => handleUredjivanjeMasinaZaMerenje(merilo.brojZapisnika)}>Uredi
                            </button>
                        </td>
                        <td>
                            <button onClick={() => handleResenjeMasineZaMerenje(merilo.brojZapisnika)}>Rešenje/Uverenje
                            </button>
                        </td>
                        <td>
                            <button
                                onClick={() => handleSertifikatMasineZaMerenje(merilo.brojZapisnika)}>Sertifikat
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
                            <button onClick={() => handleUredjivanjeSlozivogMerila(merilo.brojZapisnika)}>Uredi</button>
                        </td>
                        <td>
                            <button onClick={() => handleResenjeSlozivogMerila(merilo.brojZapisnika)}>Rešenje/Uverenje
                            </button>
                        </td>
                        <td>
                            <button
                                onClick={() => handleSertifikatSlozivogMerila(merilo.brojZapisnika)}>Sertifikat
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
                            <button onClick={() => handleUredjivanjeMetriZaTekstil(merilo.brojZapisnika)}>Uredi</button>
                        </td>
                        <td>
                            <button onClick={() => handleResenjeMetriZaTekstil(merilo.brojZapisnika)}>Rešenje/Uverenje
                            </button>
                        </td>
                        <td>
                            <button
                                onClick={() => handleSertifikatMetarZaTekstil(merilo.brojZapisnika)}>Sertifikat
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;
