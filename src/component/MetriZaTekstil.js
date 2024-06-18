import React, {useEffect, useState} from 'react';
import "../styles/MetriZaTekstil.css";

const MetriZaTekstil = () => {
    const [vrsteKontrolisanja, setVrsteKontrolisanja] = useState([]);
    const [kompanije, setKompanije] = useState([]);
    const [podnosilacZahteva, setPodnosilacZahteva] = useState('');
    const [vlasnikKorisnik, setVlasnikKorisnik] = useState('');
    const [brojZapisnika, setBrojZapisnika] = useState('');
    const [users, setUsers] = useState([]);
    const [proizvodjaci, setProizvodjaci] = useState([]);

    const [ndg1, setNdg1] = useState('±');
    const [ndg2, setNdg2] = useState('±');
    const [ndg3, setNdg3] = useState('±');
    const [ndg4, setNdg4] = useState('±');
    const [ndr1, setNdr1] = useState('');
    const [ndr2, setNdr2] = useState('');

    const [razlogOdbijanja, setRazlogOdbijanja] = useState('/');
    const [komentar, setKomentar] = useState('/');
    const [komentar2, setKomentar2] = useState('/');

    const [greska1a, setGreska1a] = useState('');
    const [greska1b, setGreska1b] = useState('');
    const [greska2a, setGreska2a] = useState('');
    const [greska2b, setGreska2b] = useState('');
    const [greska3a, setGreska3a] = useState('');
    const [greska3b, setGreska3b] = useState('');
    const [greska4a, setGreska4a] = useState('');
    const [greska4b, setGreska4b] = useState('');
    const [greska5a, setGreska5a] = useState('');
    const [greska5b, setGreska5b] = useState('');
    const [greska6a, setGreska6a] = useState('');
    const [greska6b, setGreska6b] = useState('');
    const [greska7a, setGreska7a] = useState('');
    const [greska7b, setGreska7b] = useState('');
    const [greska8a, setGreska8a] = useState('');
    const [greska8b, setGreska8b] = useState('');

    const [greska9a, setGreska9a] = useState('');
    const [greska9b, setGreska9b] = useState('');
    const [greska10a, setGreska10a] = useState('');
    const [greska10b, setGreska10b] = useState('');
    const [greska11a, setGreska11a] = useState('');
    const [greska11b, setGreska11b] = useState('');
    const [greska12a, setGreska12a] = useState('');
    const [greska12b, setGreska12b] = useState('');
    const [greska13a, setGreska13a] = useState('');
    const [greska13b, setGreska13b] = useState('');
    const [greska14a, setGreska14a] = useState('');
    const [greska14b, setGreska14b] = useState('');
    const [greska15a, setGreska15a] = useState('');
    const [greska15b, setGreska15b] = useState('');
    const [greska16a, setGreska16a] = useState('');
    const [greska16b, setGreska16b] = useState('');

    const handleNdg1Change = (e) => {
        setNdg1(e.target.value);
    }
    const handleNdg2Change = (e) => {
        setNdg2(e.target.value);
    }
    const handleNdg3Change = (e) => {
        setNdg3(e.target.value);
    }
    const handleNdg4Change = (e) => {
        setNdg4(e.target.value);
    }
    const handleNdr1Change = (e) => {
        setNdr1(e.target.value);
    }
    const handleNdr2Change = (e) => {
        setNdr2(e.target.value);
    }

    const handleRazlogOdbijanjaChange = (e) => {
        setRazlogOdbijanja(e.target.value);
    }

    const handleKomentarChange = (e) => {
        setKomentar(e.target.value);
    }

    const handleKomentar2Change = (e) => {
        setKomentar2(e.target.value);
    }

    const handleGreska1aChange = (value) => {
        setGreska1a(value);
        const numericValue = parseFloat(value);

        if (!isNaN(numericValue)) {
            const increment = Number.isInteger(numericValue) ? 1 : 0.5;
            const nextValue1b = numericValue + increment;
            setGreska1b(nextValue1b);

            const nextValue2a = nextValue1b;
            setGreska2a(nextValue2a);

            setGreska2b(nextValue2a + increment);
        } else {
            setGreska1b('');
            setGreska2a('');
            setGreska2b('');
        }
    };

    const handleGreska3aChange = (value) => {
        setGreska3a(value);
        const numericValue = parseFloat(value);

        if (!isNaN(numericValue)) {
            const increment = Number.isInteger(numericValue) ? 1 : 0.5;
            const nextValue3b = numericValue + increment;
            setGreska3b(nextValue3b);

            const nextValue4a = nextValue3b;
            setGreska4a(nextValue4a);

            setGreska4b(nextValue4a + increment);
        } else {
            setGreska1b('');
            setGreska2a('');
            setGreska2b('');
        }
    };

    const handleGreska5aChange = (value) => {
        setGreska5a(value);
        const numericValue = parseFloat(value);

        if (!isNaN(numericValue)) {
            const increment = Number.isInteger(numericValue) ? 1 : 0.5;
            const nextValue5b = numericValue + increment;
            setGreska5b(nextValue5b);

            const nextValue6a = nextValue5b;
            setGreska6a(nextValue6a);

            setGreska6b(nextValue6a + increment);
        } else {
            setGreska1b('');
            setGreska2a('');
            setGreska2b('');
        }
    };

    const handleGreska7aChange = (value) => {
        setGreska7a(value);
        const numericValue = parseFloat(value);

        if (!isNaN(numericValue)) {
            const increment = Number.isInteger(numericValue) ? 1 : 0.5;
            const nextValue7b = numericValue + increment;
            setGreska7b(nextValue7b);

            const nextValue8a = nextValue7b;
            setGreska8a(nextValue8a);

            setGreska8b(nextValue8a + increment);
        } else {
            setGreska1b('');
            setGreska2a('');
            setGreska2b('');
        }
    };

    const handleGreska9aChange = (value) => {
        setGreska9a(value);
        const numericValue = parseFloat(value);

        if (!isNaN(numericValue)) {
            const increment = Number.isInteger(numericValue) ? 1 : 0.5;
            const nextValue9b = numericValue + increment;
            setGreska9b(nextValue9b);

            const nextValue10a = nextValue9b;
            setGreska10a(nextValue10a);

            setGreska10b(nextValue10a + increment);
        } else {
            setGreska1b('');
            setGreska2a('');
            setGreska2b('');
        }
    };

    const handleGreska11aChange = (value) => {
        setGreska11a(value);
        const numericValue = parseFloat(value);

        if (!isNaN(numericValue)) {
            const increment = Number.isInteger(numericValue) ? 1 : 0.5;
            const nextValue11b = numericValue + increment;
            setGreska11b(nextValue11b);

            const nextValue12a = nextValue11b;
            setGreska12a(nextValue12a);

            setGreska12b(nextValue12a + increment);
        } else {
            setGreska1b('');
            setGreska2a('');
            setGreska2b('');
        }
    };

    const handleGreska13aChange = (value) => {
        setGreska13a(value);
        const numericValue = parseFloat(value);

        if (!isNaN(numericValue)) {
            const increment = Number.isInteger(numericValue) ? 1 : 0.5;
            const nextValue13b = numericValue + increment;
            setGreska13b(nextValue13b);

            const nextValue14a = nextValue13b;
            setGreska14a(nextValue14a);

            setGreska14b(nextValue14a + increment);
        } else {
            setGreska1b('');
            setGreska2a('');
            setGreska2b('');
        }
    };

    const handleGreska15aChange = (value) => {
        setGreska15a(value);
        const numericValue = parseFloat(value);

        if (!isNaN(numericValue)) {
            const increment = Number.isInteger(numericValue) ? 1 : 0.5;
            const nextValue15b = numericValue + increment;
            setGreska15b(nextValue15b);

            const nextValue16a = nextValue15b;
            setGreska16a(nextValue16a);

            setGreska16b(nextValue16a + increment);
        } else {
            setGreska1b('');
            setGreska2a('');
            setGreska2b('');
        }
    };

    const handleChangeZapisnik = (event) => {
        setBrojZapisnika(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const form = document.getElementById('form');
        const formData = new FormData(form);

        const finishSetCheckbox = document.getElementById('finishSetCheckbox');
        const finishSet = finishSetCheckbox.checked;

        const endpoint = 'http://localhost:8080/api/v1/metriZaTekstil/add';

        const formDataToJson = (formData) => {
            const json = {};
            formData.forEach((value, key) => {
                json[key] = value;
            });
            return json;
        };

        if (finishSet) {
            formData.append('finishSet', true);

            fetch('http://localhost:8080/api/v1/brojZapisnika/update', {
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
        }

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataToJson(formData))
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Merilo dodato:', data);
            })
            .catch(error => {
                console.error('Greška prilikom dodavanja merila:', error);
            });

        window.location.reload();
    };

    useEffect(() => {
        const handleEnterKeyPress = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                const form = event.target.form;
                const inputs = Array.from(form.querySelectorAll('input, select, textarea'));
                const index = inputs.indexOf(event.target);
                if (index !== -1 && index !== inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }
        };

        document.addEventListener('keydown', handleEnterKeyPress);



        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        fetch('http://localhost:8080/api/v1/metriZaTekstil/getND',{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setNdg1(data.ndg1);
                setNdg2(data.ndg2);
                setNdg3(data.ndg3);
                setNdg4(data.ndg4);
                setNdr1(data.ndr1);
                setNdr2(data.ndr2);
            })
            .catch(error => {
                console.error('Error fetching ND:', error);
            });

        fetch('http://localhost:8080/api/v1/brojZapisnika',{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.text())
            .then(data => {
                setBrojZapisnika(data);
            })
            .catch(error => {
                console.error('Error fetching broj zapisnika:', error);
            });

        fetch('http://localhost:8080/api/v1/vrstakontrolisanja/getAll', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data.map(model => model.description));
                setVrsteKontrolisanja(data);
            })
            .catch(error => console.error('Greška pri dobavljanju vrsta kontrolisanja:', error));

        fetch('http://localhost:8080/api/v1/kompanija/all', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setKompanije(data))
            .catch(error => console.error('Greška pri dobavljanju kompanija:', error));

        fetch('http://localhost:8080/api/v1/proizvodjac/all', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setProizvodjaci(data))
            .catch(error => console.error('Greška pri dobavljanju proizvodjaca:', error));

        fetch('http://localhost:8080/api/v1/user/all', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setUsers(data))
            .catch(error => console.error('Greška pri dobavljanju korisnika:', error));
    }, []);

    return (
        <div>
            <h2>Metri za tekstil</h2>
            <form onSubmit={handleSubmit} id="form">
                <input type="hidden" id="token" name="token" value={localStorage.getItem('token')}/>

                <label htmlFor="brojZapisnika">Zapisnik Broj:</label>
                <input
                    type="text"
                    id="brojZapisnika"
                    name="brojZapisnika"
                    value={brojZapisnika}
                    onChange={handleChangeZapisnik}
                /><br/>

                <label>Izaberite vrstu kontrolisanja:</label>
                <select id="vrstaKontrolisanja" name="vrstaKontrolisanja">
                    {vrsteKontrolisanja.map(vrsta => (
                        <option key={vrsta.id} value={vrsta.id}>
                            {vrsta.description}
                        </option>
                    ))}
                </select>

                <label htmlFor="podnosilacZahteva">Podnosilac zahteva:</label>
                <input
                    type="text"
                    id="podnosilacZahteva"
                    name="podnosilacZahteva"
                    list="kompanije"
                    value={podnosilacZahteva}
                    onChange={(e) => setPodnosilacZahteva(e.target.value)}
                />
                <datalist id="kompanije">
                    {kompanije.map((kompanija, index) => (
                        <option key={index} value={kompanija.name}/>
                    ))}
                </datalist>

                <label htmlFor="korisnik">Vlasnik/korisnik:</label>
                <input
                    type="text"
                    id="korisnik"
                    name="korisnik"
                    list="kompanije"
                    value={vlasnikKorisnik}
                    onChange={(e) => setVlasnikKorisnik(e.target.value)}
                />
                <datalist id="kompanije">
                    {kompanije.map((kompanija, index) => (
                        <option key={index} value={kompanija.name}/>
                    ))}
                </datalist>

                <label htmlFor="serijskiBroj">Serijski broj:</label>
                <input type="text" id="serijskiBroj" name="serijskiBroj"/><br/>

                <label htmlFor="identifikacioniBroj">Identifikacioni broj:</label>
                <input type="text" id="identifikacioniBroj" name="identifikacioniBroj"/><br/>

                <label htmlFor="proizvodjac">Proizvodjač:</label>
                <input type={"text"} id={"proizvodjac"} name="proizvodjac" list={"proizvodjaci"}/>
                <datalist id={"proizvodjaci"}>
                    {proizvodjaci.map((proizvodjac, index) => (
                        <option key={index} value={proizvodjac.name}/>
                    ))}
                </datalist>
                <br/>

                <label htmlFor="oznakaTipa">Oznaka tipa/modela:</label>
                <input type="text" id="oznakaTipa" name="oznakaTipa"/><br/>

                <label htmlFor="sluzbenaOznakaTipa">Službena oznaka tipa/broj izjave o usaglašenosti:</label>
                <input type="text" id="sluzbenaOznakaTipa" name="sluzbenaOznakaTipa"/>

                <label htmlFor="merniOpseg">Merni opseg:</label>
                <input type="text" id="merniOpseg" name="merniOpseg"/>

                <label htmlFor="najmanjiPodeljak">Najmanji podeljak:</label>
                <input type="text" id="najmanjiPodeljak" name="najmanjiPodeljak"/>

                <label htmlFor="klasaTacnosti">Klasa tacnosti:</label>
                <select id="klasaTacnosti" name="klasaTacnosti">
                    <option value="/">/</option>
                    <option value="I">I</option>
                    <option value="II">II</option>
                    <option value="III">III</option>
                </select><br/><br/>

                <label>Uslovi okoline:</label>
                <div className="rezultatiContainer">
                    <input type="text" value="Temperatura" readOnly/>
                    <input type="text" id="temperatura" name="temperatura" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="Vlažnost vazduha" readOnly/>
                    <input type="text" id="vlaznostVazduha" name="vlaznostVazduha" className="rezultatiInput"/>
                </div>

                <label className="container">
                    <h2>Merilo je funkcionalno ispravno:</h2>
                    <input type="radio" id="da" name="meriloJeIspravno" value="DA"/>
                    <label htmlFor="da">DA</label>
                    <input type="radio" id="ne" name="meriloJeIspravno" value="NE"/>
                    <label htmlFor="ne">NE</label>
                </label>

                <label htmlFor="napomena">Napomena:</label>
                <textarea id="napomena" name="napomena" rows="4" cols="50" value={komentar}
                          onChange={handleKomentarChange}></textarea><br/>


                <label>Odstupanje od nazivne mere:</label>
                <div className="mernaJedinicaContainer">
                    <input type="text" value="Merna jedinica:" readOnly/>
                    <select id="unit1" name="unit1" className="rezultatiInput">
                        <option value="μm">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="20" readOnly/>
                    <input type="text" id="odstupanje1" name="odstupanje1" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="40" readOnly/>
                    <input type="text" id="odstupanje2" name="odstupanje2" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="60" readOnly/>
                    <input type="text" id="odstupanje3" name="odstupanje3" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="80" readOnly/>
                    <input type="text" id="odstupanje4" name="odstupanje4" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="100" readOnly/>
                    <input type="text" id="odstupanje5" name="odstupanje5" className="rezultatiInput"/>
                </div>


                <div className="rezultatiContainer">
                    <input type="text" value="NDG" readOnly/>
                    <input type="text" id="ndg1" name="ndg1" className="rezultatiInput" value={ndg1}
                           onChange={handleNdg1Change}/>
                </div>


                <label>Greška podeljka skale:</label>
                <div className="mernaJedinicaContainer">
                    <input type="text" value="Merna jedinica:" readOnly/>
                    <select id="unit2" name="unit2" className="rezultatiInput">
                        <option value="μm">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
                </div>
                <div className="rezultatiContainer">
                    <input
                        type="text"
                        id="greska1a"
                        name="greska1a"
                        className="rezultatiInput"
                        placeholder="Od:"
                        value={greska1a}
                        onChange={(e) => handleGreska1aChange(e.target.value)}
                    />
                    <input
                        type="text"
                        id="greska1b"
                        name="greska1b"
                        className="rezultatiInput"
                        placeholder={"Do:"}
                        value={greska1b}
                    />
                    <input
                        type="text"
                        id="greskaPodeljka1"
                        name="greskaPodeljka1"
                        className="rezultatiInput"
                        placeholder="Greška podeljka skale"
                    />
                </div>

                <div className="rezultatiContainer">
                    <input
                        type="text"
                        id="greska2a"
                        name="greska2a"
                        className="rezultatiInput"
                        placeholder="Od:"
                        value={greska2a}
                    />
                    <input
                        type="text"
                        id="greska2b"
                        name="greska2b"
                        className="rezultatiInput"
                        placeholder="Do:"
                        value={greska2b}
                    />
                    <input
                        type="text"
                        id="greskaPodeljka2"
                        name="greskaPodeljka2"
                        className="rezultatiInput"
                        placeholder="Greška podeljka skale"
                    />
                </div>

                <div className="rezultatiContainer">
                    <input
                        type="text"
                        id="greska3a"
                        name="greska3a"
                        className="rezultatiInput"
                        placeholder="Od:"
                        value={greska3a}
                        onChange={(e) => handleGreska3aChange(e.target.value)}
                    />
                    <input
                        type="text"
                        id="greska3b"
                        name="greska3b"
                        className="rezultatiInput"
                        placeholder={"Do:"}
                        value={greska3b}
                    />
                    <input
                        type="text"
                        id="greskaPodeljka3"
                        name="greskaPodeljka3"
                        className="rezultatiInput"
                        placeholder="Greška podeljka skale"
                    />
                </div>

                <div className="rezultatiContainer">
                    <input
                        type="text"
                        id="greska4a"
                        name="greska4a"
                        className="rezultatiInput"
                        placeholder="Od:"
                        value={greska4a}
                    />
                    <input
                        type="text"
                        id="greska4b"
                        name="greska4b"
                        className="rezultatiInput"
                        placeholder="Do:"
                        value={greska4b}
                    />
                    <input
                        type="text"
                        id="greskaPodeljka4"
                        name="greskaPodeljka4"
                        className="rezultatiInput"
                        placeholder="Greška podeljka skale"
                    />
                </div>

                <div className="rezultatiContainer">
                    <input
                        type="text"
                        id="greska5a"
                        name="greska5a"
                        className="rezultatiInput"
                        placeholder="Od:"
                        value={greska5a}
                        onChange={(e) => handleGreska5aChange(e.target.value)}

                    />
                    <input
                        type="text"
                        id="greska5b"
                        name="greska5b"
                        className="rezultatiInput"
                        placeholder={"Do:"}
                        value={greska5b}
                    />
                    <input
                        type="text"
                        id="greskaPodeljka5"
                        name="greskaPodeljka5"
                        className="rezultatiInput"
                        placeholder="Greška podeljka skale"
                    />
                </div>

                <div className="rezultatiContainer">
                    <input
                        type="text"
                        id="greska6a"
                        name="greska6a"
                        className="rezultatiInput"
                        placeholder="Od:"
                        value={greska6a}
                    />
                    <input
                        type="text"
                        id="greska6b"
                        name="greska6b"
                        className="rezultatiInput"
                        placeholder="Do:"
                        value={greska6b}
                    />

                    <input
                        type="text"
                        id="greskaPodeljka6"
                        name="greskaPodeljka6"
                        className="rezultatiInput"
                        placeholder="Greška podeljka skale"
                    />
                </div>


                <div className="rezultatiContainer">
                    <input
                        type="text"
                        id="greska7a"
                        name="greska7a"
                        className="rezultatiInput"
                        placeholder="Od:"
                        value={greska7a}
                        onChange={(e) => handleGreska7aChange(e.target.value)}
                    />
                    <input
                        type="text"
                        id="greska7b"
                        name="greska7b"
                        className="rezultatiInput"
                        placeholder={"Do:"}
                        value={greska7b}
                    />
                    <input
                        type="text"
                        id="greskaPodeljka7"
                        name="greskaPodeljka7"
                        className="rezultatiInput"
                        placeholder="Greška podeljka skale"
                    />
                </div>

                <div className="rezultatiContainer">
                    <input
                        type="text"
                        id="greska8a"
                        name="greska8a"
                        className="rezultatiInput"
                        placeholder="Od:"
                        value={greska8a}
                    />
                    <input
                        type="text"
                        id="greska8b"
                        name="greska8b"
                        className="rezultatiInput"
                        placeholder="Do:"
                        value={greska8b}
                    />
                    <input
                        type="text"
                        id="greskaPodeljka8"
                        name="greskaPodeljka8"
                        className="rezultatiInput"
                        placeholder="Greška podeljka skale"
                    />
                </div>


                <div className="rezultatiContainer">
                    <input type="text" value="NDG" readOnly/>
                    <input type="text" id="ndg2" name="ndg2" className="rezultatiInput" value={ndg2}
                           onChange={handleNdg2Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="NDR" readOnly/>
                    <input type="text" id="ndr1" name="ndr1" className="rezultatiInput" value={ndr1}
                           onChange={handleNdr1Change}/>
                </div>


                <label>Odstupanje od nazivne mere:</label>
                <div className="mernaJedinicaContainer">
                    <input type="text" value="Merna jedinica:" readOnly/>
                    <select id="unit3" name="unit3" className="rezultatiInput">
                        <option value="μm">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="20" readOnly/>
                    <input type="text" id="odstupanje6" name="odstupanje6" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="40" readOnly/>
                    <input type="text" id="odstupanje7" name="odstupanje7" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="60" readOnly/>
                    <input type="text" id="odstupanje8" name="odstupanje8" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="80" readOnly/>
                    <input type="text" id="odstupanje9" name="odstupanje9" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="100" readOnly/>
                    <input type="text" id="odstupanje10" name="odstupanje10" className="rezultatiInput"/>
                </div>


                <div className="rezultatiContainer">
                    <input type="text" value="NDG" readOnly/>
                    <input type="text" id="ndg3" name="ndg3" className="rezultatiInput" value={ndg3}
                           onChange={handleNdg3Change}/>
                </div>


                <label>Greška podeljka skale:</label>
                <div className="mernaJedinicaContainer">
                    <input type="text" value="Merna jedinica:" readOnly/>
                    <select id="unit4" name="unit4" className="rezultatiInput">
                        <option value="μm">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
                </div>
                <div className="rezultatiContainer">
                    <input
                        type="text"
                        id="greska9a"
                        name="greska9a"
                        className="rezultatiInput"
                        placeholder="Od:"
                        value={greska9a}
                        onChange={(e) => handleGreska9aChange(e.target.value)}

                    />
                    <input
                        type="text"
                        id="greska9b"
                        name="greska9b"
                        className="rezultatiInput"
                        placeholder={"Do:"}
                        value={greska9b}
                    />
                    <input
                        type="text"
                        id="greskaPodeljka1"
                        name="greskaPodeljka9"
                        className="rezultatiInput"
                        placeholder="Greška podeljka skale"
                    />
                </div>

                <div className="rezultatiContainer">
                    <input
                        type="text"
                        id="greska10a"
                        name="greska10a"
                        className="rezultatiInput"
                        placeholder="Od:"
                        value={greska10a}
                    />
                    <input
                        type="text"
                        id="greska10b"
                        name="greska10b"
                        className="rezultatiInput"
                        placeholder="Do:"
                        value={greska10b}
                    />
                    <input
                        type="text"
                        id="greskaPodeljka10"
                        name="greskaPodeljka10"
                        className="rezultatiInput"
                        placeholder="Greška podeljka skale"
                    />
                </div>

                <div className="rezultatiContainer">
                    <input
                        type="text"
                        id="greska11a"
                        name="greska11a"
                        className="rezultatiInput"
                        placeholder="Od:"
                        value={greska11a}
                        onChange={(e) => handleGreska11aChange(e.target.value)}
                    />
                    <input
                        type="text"
                        id="greska11b"
                        name="greska11b"
                        className="rezultatiInput"
                        placeholder={"Do:"}
                        value={greska11b}
                    />
                    <input
                        type="text"
                        id="greskaPodeljka11"
                        name="greskaPodeljka11"
                        className="rezultatiInput"
                        placeholder="Greška podeljka skale"
                    />
                </div>

                <div className="rezultatiContainer">
                    <input
                        type="text"
                        id="greska12a"
                        name="greska12a"
                        className="rezultatiInput"
                        placeholder="Od:"
                        value={greska12a}
                    />
                    <input
                        type="text"
                        id="greska12b"
                        name="greska12b"
                        className="rezultatiInput"
                        placeholder="Do:"
                        value={greska12b}
                    />
                    <input
                        type="text"
                        id="greskaPodeljka12"
                        name="greskaPodeljka12"
                        className="rezultatiInput"
                        placeholder="Greška podeljka skale"
                    />
                </div>

                <div className="rezultatiContainer">
                    <input
                        type="text"
                        id="greska13a"
                        name="greska13a"
                        className="rezultatiInput"
                        placeholder="Od:"
                        value={greska13a}
                        onChange={(e) => handleGreska13aChange(e.target.value)}
                    />
                    <input
                        type="text"
                        id="greska13b"
                        name="greska13b"
                        className="rezultatiInput"
                        placeholder={"Do:"}
                        value={greska13b}
                    />
                    <input
                        type="text"
                        id="greskaPodeljka13"
                        name="greskaPodeljka13"
                        className="rezultatiInput"
                        placeholder="Greška podeljka skale"
                    />
                </div>

                <div className="rezultatiContainer">
                    <input
                        type="text"
                        id="greska14a"
                        name="greska14a"
                        className="rezultatiInput"
                        placeholder="Od:"
                        value={greska14a}
                    />
                    <input
                        type="text"
                        id="greska14b"
                        name="greska14b"
                        className="rezultatiInput"
                        placeholder="Do:"
                        value={greska14b}
                    />
                    <input
                        type="text"
                        id="greskaPodeljka14"
                        name="greskaPodeljka14"
                        className="rezultatiInput"
                        placeholder="Greška podeljka skale"
                    />
                </div>

                <div className="rezultatiContainer">
                    <input
                        type="text"
                        id="greska15a"
                        name="greska15a"
                        className="rezultatiInput"
                        placeholder="Od:"
                        value={greska15a}
                        onChange={(e) => handleGreska15aChange(e.target.value)}
                    />
                    <input
                        type="text"
                        id="greska15b"
                        name="greska15b"
                        className="rezultatiInput"
                        placeholder={"Do:"}
                        value={greska15b}
                    />
                    <input
                        type="text"
                        id="greskaPodeljka15"
                        name="greskaPodeljka15"
                        className="rezultatiInput"
                        placeholder="Greška podeljka skale"
                    />
                </div>

                <div className="rezultatiContainer">
                    <input
                        type="text"
                        id="greska16a"
                        name="greska16a"
                        className="rezultatiInput"
                        placeholder="Od:"
                        value={greska16a}
                    />
                    <input
                        type="text"
                        id="greska16b"
                        name="greska16b"
                        className="rezultatiInput"
                        placeholder="Do:"
                        value={greska16b}
                    />
                    <input
                        type="text"
                        id="greskaPodeljka16"
                        name="greskaPodeljka16"
                        className="rezultatiInput"
                        placeholder="Greška podeljka skale"
                    />
                </div>

                <div className="rezultatiContainer">
                    <input type="text" value="NDG" readOnly/>
                    <input type="text" id="ndg4" name="ndg4" className="rezultatiInput" value={ndg4}
                           onChange={handleNdg4Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="NDR" readOnly/>
                    <input type="text" id="ndr2" name="ndr2" className="rezultatiInput" value={ndr2}
                           onChange={handleNdr2Change}/>
                </div>

                <label htmlFor="skinutiZigovi">Skinuti žigovi (razdvojiti znakom ;):</label>
                <input type="text" id="skinutiZigovi" name="skinutiZigovi"/><br/>

                <label htmlFor="postavljeniZigovi">Stavljeni žigovi (razdvojiti znakom ;):</label>
                <input type="text" id="postavljeniZigovi" name="postavljeniZigovi"/><br/>

                <label className="container">
                    <div className="rezultatiContainer">
                        <input type="text" value="Zahtevi propisani pravilnikom o:" className="propisaniZahtevi"
                               readOnly/>
                        <input type="text" id="propisaniZahtevi" name="propisaniZahtevi" className="rezultatiInput"/>
                    </div>
                    <h2>Merilo ispunjava propisane zahteve:</h2>
                    <input type="radio" id="meriloIspunjavaZahteve" name="meriloIspunjavaZahteve" value="DA"/>
                    <label htmlFor="meriloIspunjavaZahteve">DA</label>
                    <input type="radio" id="neIspunjava" name="meriloIspunjavaZahteve" value="NE"/>
                    <label htmlFor="neIspunjava">NE</label>
                </label><br/>


                <label htmlFor="komentar2">Komentar:</label>
                <textarea id="komentar2" name="komentar2" rows="4" cols="50" value={komentar2}
                          onChange={handleKomentar2Change}></textarea><br/>

                <label htmlFor="razlogOdbijanja">Razlog odbijanja:</label>
                <textarea id="razlogOdbijanja" name="razlogOdbijanja" rows="4" cols="20" value={razlogOdbijanja}
                          onChange={handleRazlogOdbijanjaChange}></textarea><br/>


                <label htmlFor="zapisnikUneo">Zapisnik uneo:</label>
                <select id="zapisnikUneo" name="zapisnikUneo">
                    {users.map(user => (
                        <option key={user.email} value={user.email}>
                            {user.email}
                        </option>
                    ))}
                </select><br/>

                <label htmlFor="zapisnikOdobrio">Zapisnik odobrio:</label>
                <select id="zapisnikOdobrio" name="zapisnikOdobrio">
                    {users.map(user => (
                        <option key={user.email} value={user.email}>
                            {user.email}
                        </option>
                    ))}
                </select>

                <label htmlFor="datum">Datum:</label>
                <input type="date" id="datum" name="datum"/><br/><br/>

                <label>
                    <input type="checkbox" id="finishSetCheckbox"/> Završi nalog
                </label>
                <input type="submit" value="Potvrdi"/>
            </form>
        </div>
    );
};

export default MetriZaTekstil;
