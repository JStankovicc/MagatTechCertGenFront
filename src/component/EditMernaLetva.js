import React, { useState, useEffect } from 'react';

const EditMernaLetva = ({ id }) => {
    const [merilo, setMerilo] = useState(null);
    const [vrsteKontrolisanja, setVrsteKontrolisanja] = useState([]);
    const [vrstaKontrolisanja, setVrstaKontrolisanja] = useState('');
    const [kompanije, setKompanije] = useState([]);
    const [proizvodjaci, setProizvodjaci] = useState([]);
    const [proizvodjac, setProizvodjac] = useState('');
    const [podnosilacZahteva, setPodnosilacZahteva] = useState('');
    const [vlasnikKorisnik, setVlasnikKorisnik] = useState('');
    const [serijskiBroj, setSerijskiBroj] = useState('');
    const [identifikacioniBroj, setIdentifikacioniBroj] = useState('');
    const [oznakaTipa, setOznakaTipa] = useState('');
    const [sluzbenaOznakaTipa, setSluzbenaOznakaTipa] = useState('');
    const [merniOpseg, setMerniOpseg] = useState('');
    const [najmanjiPodeljak, setNajmanjiPodeljak] = useState('');
    const [klasaTacnosti, setKlasaTacnosti] = useState('');
    const [temperatura, setTemperatura] = useState('');
    const [vlaznost, setVlaznost] = useState('');
    const [meriloJeIspravno, setMeriloJeIspravno] = useState(null);
    const [napomena, setNapomena] = useState('');
    const [odstupanje1, setOdstupanje1] = useState('');
    const [odstupanje2, setOdstupanje2] = useState('');
    const [odstupanje3, setOdstupanje3] = useState('');
    const [odstupanje4, setOdstupanje4] = useState('');
    const [odstupanje5, setOdstupanje5] = useState('');
    const [ndg1, setNdg1] = useState('');
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
    const [greskaPodeljka1, setGreskaPodeljka1] = useState('');
    const [greskaPodeljka2, setGreskaPodeljka2] = useState('');
    const [greskaPodeljka3, setGreskaPodeljka3] = useState('');
    const [greskaPodeljka4, setGreskaPodeljka4] = useState('');
    const [greskaPodeljka5, setGreskaPodeljka5] = useState('');
    const [greskaPodeljka6, setGreskaPodeljka6] = useState('');
    const [greskaPodeljka7, setGreskaPodeljka7] = useState('');
    const [greskaPodeljka8, setGreskaPodeljka8] = useState('');
    const [ndg2, setNdg2] = useState('');
    const [ndr1, setNdr1] = useState('');
    const [odstupanje6, setOdstupanje6] = useState('');
    const [ndg3, setNdg3] = useState('');
    const [ndg4, setNdg4] = useState('');
    const [ndg5, setNdg5] = useState('');
    const [ndg6, setNdg6] = useState('');
    const [ndg7, setNdg7] = useState('');
    const [ndr2, setNdr2] = useState('');
    const [skinutiZigovi, setSkinutiZigovi] = useState('');
    const [postavljeniZigovi, setPostavljeniZigovi] = useState('');
    const [propisaniZahtevi, setPropisaniZahtevi] = useState('');
    const [meriloIspunjavaZahteve, setMeriloIspunjavaZahteve] = useState('');
    const [komentar, setKomentar] = useState('');
    const [zapisnikUneo, setZapisnikUneo] = useState('');
    const [zapisnikOdobrio, setZapisnikOdobrio] = useState('');
    const [datum, setDatum] = useState('');
    const [users, setUsers] = useState([]);
    const [razlogOdbijanja, setRazlogOdbijanja] = useState('');

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

        const fetchMerilo = async () => {
            const urlMerilo = `http://localhost:8080/api/v1/mernaLetva/get?brojZapisnika=${id}`;

            try {
                const response = await fetch(urlMerilo, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Neuspešno preuzimanje merila');
                }
                const data = await response.json();
                setMerilo(data);
                setVrstaKontrolisanja(data.vrstaKontrolisanja || '');
                setPodnosilacZahteva(data.podnosilacZahteva || '');
                setVlasnikKorisnik(data.korisnik || '');
                setSerijskiBroj(data.serijskiBroj || '');
                setIdentifikacioniBroj(data.identifikacioniBroj || '');
                setProizvodjac(data.proizvodjac || '');
                setOznakaTipa(data.oznakaTipa || '');
                setSluzbenaOznakaTipa(data.sluzbenaOznakaTipa || '');
                setMerniOpseg(data.merniOpseg || '');
                setNajmanjiPodeljak(data.najmanjiPodeljak || '');
                setKlasaTacnosti(data.klasaTacnosti || '');
                setTemperatura(data.temperatura || '');
                setVlaznost(data.vlaznostVazduha || '');
                setMeriloJeIspravno(data.meriloJeIspravno === true ? 'DA' : 'NE');
                setNapomena(data.napomena || '');
                setOdstupanje1(data.odstupanje1 || '');
                setOdstupanje2(data.odstupanje2 || '');
                setOdstupanje3(data.odstupanje3 || '');
                setOdstupanje4(data.odstupanje4 || '');
                setOdstupanje5(data.odstupanje5 || '');
                setNdg1(data.ndg1 || '');
                setRazlogOdbijanja(data.razlogOdbijanja || '');

                const indexOfDash = data.greska1.indexOf('-');
                const substring = indexOfDash !== -1 ? data.greska1.substring(0, indexOfDash) : data.greska1;
                setGreska1a(substring);

                const indexOfDash1 = data.greska3.indexOf('-');
                const substring1 = indexOfDash1 !== -1 ? data.greska3.substring(0, indexOfDash1) : data.greska3;
                setGreska3a(substring1);

                const indexOfDash2 = data.greska5.indexOf('-');
                const substring2 = indexOfDash2 !== -1 ? data.greska5.substring(0, indexOfDash2) : data.greska5;
                setGreska5a(substring2);

                const indexOfDash3 = data.greska7.indexOf('-');
                const substring3 = indexOfDash3 !== -1 ? data.greska7.substring(0, indexOfDash3) : data.greska7;
                setGreska7a(substring3);

                setGreskaPodeljka1(data.greskaPodeljka1 || '');
                setGreskaPodeljka2(data.greskaPodeljka2 || '');
                setGreskaPodeljka3(data.greskaPodeljka3 || '');
                setGreskaPodeljka4(data.greskaPodeljka4 || '');
                setGreskaPodeljka5(data.greskaPodeljka5 || '');
                setGreskaPodeljka6(data.greskaPodeljka6 || '');
                setGreskaPodeljka7(data.greskaPodeljka7 || '');
                setGreskaPodeljka8(data.greskaPodeljka8 || '');
                setNdg2(data.ndg2 || '');
                setNdr1(data.ndr1 || '');
                setOdstupanje6(data.odstupanje6 || '');
                setNdg3(data.ndg3 || '');
                setNdg4(data.ndg4 || '');
                setNdg5(data.ndg5 || '');
                setNdg6(data.ndg6 || '');
                setNdg7(data.ndg7 || '');
                setSkinutiZigovi(data.skinutiZigovi || '');
                setPostavljeniZigovi(data.postavljeniZigovi || '');
                setPropisaniZahtevi(data.propisaniZahtevi || '');
                setMeriloIspunjavaZahteve(data.meriloIspunjavaZahteve === true ? 'DA' : 'NE');
                setKomentar(data.komentar2 || '');
                if (data.datum) {
                    const dateObject = new Date(data.datum);
                    const year = dateObject.getFullYear();
                    const month = ('0' + (dateObject.getMonth() + 1)).slice(-2); // Months are zero based
                    const day = ('0' + dateObject.getDate()).slice(-2);
                    const formattedDate = `${year}-${month}-${day}`;
                    setDatum(formattedDate);
                } else {
                    setDatum('');
                }
            } catch (error) {
                console.error('Greška prilikom preuzimanja merila:', error);
            }
        };

        const fetchVrsteKontrolisanja = async () => {
            const urlVrste = `http://localhost:8080/api/v1/vrstakontrolisanja/getAll`;

            try {
                const response = await fetch(urlVrste, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Neuspešno preuzimanje vrsta kontrolisanja');
                }
                const data = await response.json();
                setVrsteKontrolisanja(data);
            } catch (error) {
                console.error('Greška prilikom preuzimanja vrsta kontrolisanja:', error);
            }
        };

        const fetchKompanije = async () => {
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
        }

        const fetchProizvodjaci = async () => {
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
        }

        const fetchUsers = async () => {
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
        };

        fetchKompanije();
        fetchProizvodjaci();
        fetchVrsteKontrolisanja();
        fetchUsers();
        fetchMerilo();
    }, [id]);

    const handleRazlogOdbijanjaChange = (e) => {
        setRazlogOdbijanja(e.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

        const form = document.getElementById('form');
        const formData = new FormData(form);

        let replacedString = id.replace(/\//g, "_");
        const endpoint = 'http://localhost:8080/api/v1/mernaLetva/update/' + replacedString;

        const formDataToJson = (formData) => {
            const json = {};
            formData.forEach((value, key) => {
                json[key] = value;
            });
            return json;
        };

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

    const handleKomentarChange = (e) => {
        setKomentar(e.target.value);
    };

    const handleDatumChange = (e) => {
        setDatum(e.target.value);
    };

    const handleSerijskiBrojChange = (e) => {
        setSerijskiBroj(e.target.value);
    }

    const handleIdentifikacioniBrojChange = (e) => {
        setIdentifikacioniBroj(e.target.value);
    }

    const handleOznakaTipaChange = (e) => {
        setOznakaTipa(e.target.value);
    }

    const handleSluzbenaOznakaTipaChange = (e) => {
        setSluzbenaOznakaTipa(e.target.value);
    }

    const handleMerniOpsegChange = (e) => {
        setMerniOpseg(e.target.value);
    }

    const handleNajmanjiPodeljakChange = (e) => {
        setNajmanjiPodeljak(e.target.value);
    }

    const handleKlasaTacnostiChange = (e) => {
        setKlasaTacnosti(e.target.value);
    }

    const handleTemperaturaChange = (e) => {
        setTemperatura(e.target.value);
    }

    const handleVlaznostVazduhaChange = (e) => {
        setVlaznost(e.target.value);
    }

    const handleNapomenaChange = (e) => {
        setNapomena(e.target.value);
    }

    const handleOdstupanje1Change = (e) => {
        setOdstupanje1(e.target.value);
    }

    const handleOdstupanje2Change = (e) => {
        setOdstupanje2(e.target.value);
    }

    const handleOdstupanje3Change = (e) => {
        setOdstupanje3(e.target.value);
    }

    const handleOdstupanje4Change = (e) => {
        setOdstupanje4(e.target.value);
    }

    const handleOdstupanje5Change = (e) => {
        setOdstupanje5(e.target.value);
    }

    const handleNdg1Change = (e) => {
        setNdg1(e.target.value);
    }

    const handleGreskaPodeljka1Change = (e) => {
        setGreskaPodeljka1(e.target.value);
    }

    const handleGreskaPodeljka2Change = (e) => {
        setGreskaPodeljka2(e.target.value);
    }

    const handleGreskaPodeljka3Change = (e) => {
        setGreskaPodeljka3(e.target.value);
    }

    const handleGreskaPodeljka4Change = (e) => {
        setGreskaPodeljka4(e.target.value);
    }

    const handleGreskaPodeljka5Change = (e) => {
        setGreskaPodeljka5(e.target.value);
    }

    const handleGreskaPodeljka6Change = (e) => {
        setGreskaPodeljka6(e.target.value);
    }

    const handleGreskaPodeljka7Change = (e) => {
        setGreskaPodeljka7(e.target.value);
    }

    const handleGreskaPodeljka8Change = (e) => {
        setGreskaPodeljka8(e.target.value);
    }

    const handleNdg2Change = (e) => {
        setNdg2(e.target.value);
    }

    const handleNdr1Change = (e) => {
        setNdr1(e.target.value);
    }

    const handleOdstupanje6Change = (e) => {
        setOdstupanje6(e.target.value);
    }

    const handleNdg3Change = (e) => {
        setNdg3(e.target.value);
    }

    const handleNdg4Change = (e) => {
        setNdg4(e.target.value);
    }

    const handleNdg5Change = (e) => {
        setNdg5(e.target.value);
    }

    const handleNdg6Change = (e) => {
        setNdg6(e.target.value);
    }

    const handleNdg7Change = (e) => {
        setNdg7(e.target.value);
    }

    const handleSkinutiZigoviChange = (e) => {
        setSkinutiZigovi(e.target.value);
    }

    const handlePostavljeniZigoviChange = (e) => {
        setPostavljeniZigovi(e.target.value);
    }

    const handlePropisaniZahteviChange = (e) => {
        setPropisaniZahtevi(e.target.value);
    }

    return (
        <div>
            <h2>Merna letva</h2>
            <form onSubmit={handleSubmit} id="form">
                <input type="hidden" id="token" name="token" value={localStorage.getItem('jwtToken')}/>
                <div className='rezultatiContainer'>
                    <input
                        type="text"
                        id="brojZapisnika"
                        name="brojZapisnika"
                        value={id}
                        readOnly
                    /><br/>
                </div>
                <label>Izaberite vrstu kontrolisanja:</label>
                <select id="vrstaKontrolisanja" name="vrstaKontrolisanja" value={vrstaKontrolisanja}
                        onChange={e => setVrstaKontrolisanja(e.target.value)}>
                    {vrsteKontrolisanja.map(vrsta => (
                        <option key={vrsta.id} value={vrsta.description}>
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
                <input type="text" id="serijskiBroj" name="serijskiBroj" value={serijskiBroj}
                       onChange={handleSerijskiBrojChange}/><br/>

                <label htmlFor="identifikacioniBroj">Identifikacioni broj:</label>
                <input type="text" id="identifikacioniBroj" name="identifikacioniBroj"
                       value={identifikacioniBroj} onChange={handleIdentifikacioniBrojChange}/><br/>

                <label htmlFor="proizvodjac">Proizvođač:</label>
                <input
                    type="text"
                    id="proizvodjac"
                    name="proizvodjac"
                    list="proizvodjaci"
                    value={proizvodjac}
                    onChange={e => setProizvodjac(e.target.value)}
                />
                <datalist id="proizvodjaci">
                    {proizvodjaci.map((proizvodjac, index) => (
                        <option key={index} value={proizvodjac.name}/>
                    ))}
                </datalist>

                <label htmlFor="oznakaTipa">Oznaka tipa/modela:</label>
                <input type="text" id="oznakaTipa" name="oznakaTipa" value={oznakaTipa}
                       onChange={handleOznakaTipaChange}/><br/>

                <label htmlFor="sluzbenaOznakaTipa">Službena oznaka tipa/broj izjave o usaglašenosti:</label>
                <input type="text" id="sluzbenaOznakaTipa" name="sluzbenaOznakaTipa" value={sluzbenaOznakaTipa}
                       onChange={handleSluzbenaOznakaTipaChange}/>

                <label htmlFor="merniOpseg">Merni opseg:</label>
                <input type="text" id="merniOpseg" name="merniOpseg" value={merniOpseg}
                       onChange={handleMerniOpsegChange}/>

                <label htmlFor="najmanjiPodeljak">Najmanji podeljak:</label>
                <input type="text" id="najmanjiPodeljak" name="najmanjiPodeljak" value={najmanjiPodeljak}
                       onChange={handleNajmanjiPodeljakChange}/>

                <label htmlFor="klasaTacnosti">Klasa tacnosti:</label>
                <select id="klasaTacnosti" name="klasaTacnosti" value={klasaTacnosti}
                        onChange={handleKlasaTacnostiChange}>
                    <option value="/">/</option>
                    <option value="I">I</option>
                    <option value="II">II</option>
                    <option value="III">III</option>
                </select><br/><br/>

                <label>Uslovi okoline:</label>
                <div className="rezultatiContainer">
                    <input type="text" value="Temperatura" readOnly/>
                    <input type="text" id="temperatura" name="temperatura" className="rezultatiInput"
                           value={temperatura} onChange={handleTemperaturaChange}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="Vlažnost vazduha" readOnly/>
                    <input type="text" id="vlaznostVazduha" name="vlaznostVazduha" className="rezultatiInput"
                           value={vlaznost} onChange={handleVlaznostVazduhaChange}/>
                </div>

                <label className="container">
                    <h2>Merilo je funkcionalno ispravno:</h2>
                    <input
                        type="radio"
                        id="da"
                        name="meriloJeIspravno"
                        value="DA"
                        checked={meriloJeIspravno === 'DA'}
                        onChange={() => setMeriloJeIspravno('DA')}
                    />
                    <label htmlFor="da">DA</label>
                    <input
                        type="radio"
                        id="ne"
                        name="meriloJeIspravno"
                        value="NE"
                        checked={meriloJeIspravno === 'NE'}
                        onChange={() => setMeriloJeIspravno('NE')}
                    />
                    <label htmlFor="ne">NE</label>
                </label>

                <label htmlFor="napomena">Napomena:</label>
                <textarea id="napomena" name="napomena" rows="4" cols="50" value={napomena}
                          onChange={handleNapomenaChange}></textarea><br/>

                <label>Odstupanje od nazivne mere:</label><br/>
                <div className="mernaJedinicaContainer">
                    <input type="text" value="Merna jedinica:" readOnly/>
                    <select id="unit1" name="unit1" className="rezultatiInput">
                        <option value="μm">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="500" readOnly/>
                    <input type="text" id="odstupanje1" name="odstupanje1" className="rezultatiInput"
                           value={odstupanje1} onChange={handleOdstupanje1Change}/>
                    <input type="text" id="ndg1" name="ndg1" className="rezultatiInput" placeholder="NDG" value={ndg1}
                           onChange={handleNdg1Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="1000" readOnly/>
                    <input type="text" id="odstupanje2" name="odstupanje2" className="rezultatiInput"
                           value={odstupanje2} onChange={handleOdstupanje2Change}/>
                    <input type="text" id="ndg2" name="ndg2" className="rezultatiInput" placeholder="NDG" value={ndg2}
                           onChange={handleNdg2Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="1500" readOnly/>
                    <input type="text" id="odstupanje3" name="odstupanje3" className="rezultatiInput"
                           value={odstupanje3} onChange={handleOdstupanje3Change}/>
                    <input type="text" id="ndg3" name="ndg3" className="rezultatiInput" placeholder="NDG" value={ndg3}
                           onChange={handleNdg3Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="2000" readOnly/>
                    <input type="text" id="odstupanje4" name="odstupanje4" className="rezultatiInput"
                           value={odstupanje4} onChange={handleOdstupanje4Change}/>
                    <input type="text" id="ndg4" name="ndg4" className="rezultatiInput" placeholder="NDG" value={ndg4}
                           onChange={handleNdg4Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="2500" readOnly/>
                    <input type="text" id="odstupanje5" name="odstupanje5" className="rezultatiInput"
                           value={odstupanje5} onChange={handleOdstupanje5Change}/>
                    <input type="text" id="ndg5" name="ndg5" className="rezultatiInput" placeholder="NDG" value={ndg5}
                           onChange={handleNdg5Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="3000" readOnly/>
                    <input type="text" id="odstupanje6" name="odstupanje6" className="rezultatiInput"
                           value={odstupanje6} onChange={handleOdstupanje6Change}/>
                    <input type="text" id="ndg6" name="ndg6" className="rezultatiInput" placeholder="NDG" value={ndg6}
                           onChange={handleNdg6Change}/>
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
                        value={greskaPodeljka1}
                        onChange={handleGreskaPodeljka1Change}
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
                        value={greskaPodeljka2}
                        onChange={handleGreskaPodeljka2Change}
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
                        value={greskaPodeljka3}
                        onChange={handleGreskaPodeljka3Change}
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
                        value={greskaPodeljka4}
                        onChange={handleGreskaPodeljka4Change}
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
                        value={greskaPodeljka5}
                        onChange={handleGreskaPodeljka5Change}
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
                        value={greskaPodeljka6}
                        onChange={handleGreskaPodeljka6Change}
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
                        value={greskaPodeljka7}
                        onChange={handleGreskaPodeljka7Change}
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
                        value={greskaPodeljka8}
                        onChange={handleGreskaPodeljka8Change}
                    />
                </div>

                <div className="rezultatiContainer">
                    <input type="text" value="NDG" readOnly/>
                    <input type="text" id="ndg7" name="ndg7" className="rezultatiInput" value={ndg7}
                           onChange={handleNdg7Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="NDR" readOnly/>
                    <input type="text" id="ndr1" name="ndr1" className="rezultatiInput" value={ndr1}
                           onChange={handleNdr1Change}/>
                </div>


                <label htmlFor="skinutiZigovi">Skinuti žigovi (razdvojiti znakom ;):</label>
                <input type="text" id="skinutiZigovi" name="skinutiZigovi" value={skinutiZigovi}
                       onChange={handleSkinutiZigoviChange}/><br/>

                <label htmlFor="postavljeniZigovi">Stavljeni žigovi (razdvojiti znakom ;):</label>
                <input type="text" id="postavljeniZigovi" name="postavljeniZigovi" value={postavljeniZigovi}
                       onChange={handlePostavljeniZigoviChange}/><br/>

                <label className="container">
                    <div className="rezultatiContainer">
                        <input type="text" value="Zahtevi propisani pravilnikom o:" className="propisaniZahtevi"
                               readOnly/>
                        <input type="text" id="propisaniZahtevi" name="propisaniZahtevi"
                               className="rezultatiInput" value={propisaniZahtevi}
                               onChange={handlePropisaniZahteviChange}/>
                    </div>
                    <div>
                        <h2>Merilo ispunjava propisane zahteve:</h2>
                        <input
                            type="radio"
                            id="meriloIspunjavaZahteve"
                            name="meriloIspunjavaZahteve"
                            value="DA"
                            checked={meriloIspunjavaZahteve === 'DA'}
                            onChange={() => setMeriloIspunjavaZahteve('DA')}
                        />
                        <label htmlFor="meriloIspunjavaZahteve">DA</label>
                        <input
                            type="radio"
                            id="neIspunjava"
                            name="meriloIspunjavaZahteve"
                            value="NE"
                            checked={meriloIspunjavaZahteve === 'NE'}
                            onChange={() => setMeriloIspunjavaZahteve('NE')}
                        />
                        <label htmlFor="neIspunjava">NE</label>
                    </div>
                </label>
                <br/>

                <label htmlFor="komentar2">Komentar:</label>
                <textarea id="komentar2" name="komentar2" rows="4" cols="50" value={komentar}
                          onChange={handleKomentarChange}></textarea><br/>

                <label htmlFor="razlogOdbijanja">Razlog odbijanja:</label>
                <textarea id="razlogOdbijanja" name="razlogOdbijanja" rows="4" cols="50" value={razlogOdbijanja}
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
                <input type="date" id="datum" name="datum" value={datum} onChange={handleDatumChange}/><br/><br/>

                <input type="submit" value="Potvrdi"/>
            </form>
        </div>
    );
};

export default EditMernaLetva;
