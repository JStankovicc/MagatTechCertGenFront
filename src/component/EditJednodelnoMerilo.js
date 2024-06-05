import React, { useState, useEffect } from 'react';

const EditJednodelnoMerilo = ({ id }) => {
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
    const [odstupanje7, setOdstupanje7] = useState('');
    const [odstupanje8, setOdstupanje8] = useState('');
    const [odstupanje9, setOdstupanje9] = useState('');
    const [odstupanje10, setOdstupanje10] = useState('');
    const [ndg3, setNdg3] = useState('');
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
    const [greskaPodeljka9, setGreskaPodeljka9] = useState('');
    const [greskaPodeljka10, setGreskaPodeljka10] = useState('');
    const [greskaPodeljka11, setGreskaPodeljka11] = useState('');
    const [greskaPodeljka12, setGreskaPodeljka12] = useState('');
    const [greskaPodeljka13, setGreskaPodeljka13] = useState('');
    const [greskaPodeljka14, setGreskaPodeljka14] = useState('');
    const [greskaPodeljka15, setGreskaPodeljka15] = useState('');
    const [greskaPodeljka16, setGreskaPodeljka16] = useState('');
    const [ndg4, setNdg4] = useState('');
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
            const urlMerilo = `http://localhost:8080/api/v1/jednodelnoMerilo/get?brojZapisnika=${id}`;

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
                setOdstupanje7(data.odstupanje7 || '');
                setOdstupanje8(data.odstupanje8 || '');
                setOdstupanje9(data.odstupanje9 || '');
                setOdstupanje10(data.odstupanje10 || '');
                setNdg3(data.ndg3 || '');

                const indexOfDash4 = data.greska9.indexOf('-');
                const substring4 = indexOfDash4 !== -1 ? data.greska9.substring(0, indexOfDash4) : data.greska9;
                setGreska9a(substring4);

                const indexOfDash5 = data.greska11.indexOf('-');
                const substring5 = indexOfDash5 !== -1 ? data.greska11.substring(0, indexOfDash5) : data.greska11;
                setGreska11a(substring5);

                const indexOfDash6 = data.greska13.indexOf('-');
                const substring6 = indexOfDash6 !== -1 ? data.greska13.substring(0, indexOfDash6) : data.greska13;
                setGreska13a(substring6);

                const indexOfDash7 = data.greska15.indexOf('-');
                const substring7 = indexOfDash7 !== -1 ? data.greska15.substring(0, indexOfDash7) : data.greska15;
                setGreska15a(substring7);

                setGreskaPodeljka9(data.greskaPodeljka9 || '');
                setGreskaPodeljka10(data.greskaPodeljka10 || '');
                setGreskaPodeljka11(data.greskaPodeljka11 || '');
                setGreskaPodeljka12(data.greskaPodeljka12 || '');
                setGreskaPodeljka13(data.greskaPodeljka13 || '');
                setGreskaPodeljka14(data.greskaPodeljka14 || '');
                setGreskaPodeljka15(data.greskaPodeljka15 || '');
                setGreskaPodeljka16(data.greskaPodeljka16 || '');

                setNdg4(data.ndg4 || '');
                setNdr2(data.ndr2 || '');
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
        const endpoint = 'http://localhost:8080/api/v1/jednodelnoMerilo/update/' + replacedString;

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

    const updateValues = (inputValue, setter) => {
        const numericValue = parseInt(inputValue);
        if (!isNaN(numericValue)) {
            setter(numericValue + 1);
        } else {
            setter('');
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

    const handleOdstupanje7Change = (e) => {
        setOdstupanje7(e.target.value);
    }

    const handleOdstupanje8Change = (e) => {
        setOdstupanje8(e.target.value);
    }

    const handleOdstupanje9Change = (e) => {
        setOdstupanje9(e.target.value);
    }

    const handleOdstupanje10Change = (e) => {
        setOdstupanje10(e.target.value);
    }

    const handleNdg3Change = (e) => {
        setNdg3(e.target.value);
    }

    const handleGreskaPodeljka9Change = (e) => {
        setGreskaPodeljka9(e.target.value);
    }

    const handleGreskaPodeljka10Change = (e) => {
        setGreskaPodeljka10(e.target.value);
    }

    const handleGreskaPodeljka11Change = (e) => {
        setGreskaPodeljka11(e.target.value);
    }

    const handleGreskaPodeljka12Change = (e) => {
        setGreskaPodeljka12(e.target.value);
    }

    const handleGreskaPodeljka13Change = (e) => {
        setGreskaPodeljka13(e.target.value);
    }

    const handleGreskaPodeljka14Change = (e) => {
        setGreskaPodeljka14(e.target.value);
    }

    const handleGreskaPodeljka15Change = (e) => {
        setGreskaPodeljka15(e.target.value);
    }

    const handleGreskaPodeljka16Change = (e) => {
        setGreskaPodeljka16(e.target.value);
    }

    const handleNdg4Change = (e) => {
        setNdg4(e.target.value);
    }

    const handleNdr2Change = (e) => {
        setNdr2(e.target.value);
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

    const handleRazlogOdbijanjaChange = (e) => {
        setRazlogOdbijanja(e.target.value);
    }

    return (
        <div>
            <h2>Jednodelno Merilo</h2>
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

                <label>Odstupanje od nazivne mere:</label>
                <div className="mernaJedinicaContainer">
                    <input type="text" value="Merna jedinica:" readOnly/>
                    <select id="unit1" name="unit1" className="rezultatiInput">
                        <option value="m">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="20" readOnly/>
                    <input type="text" id="odstupanje1" name="odstupanje1" className="rezultatiInput"
                           value={odstupanje1} onChange={handleOdstupanje1Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="40" readOnly/>
                    <input type="text" id="odstupanje2" name="odstupanje2" className="rezultatiInput"
                           value={odstupanje2} onChange={handleOdstupanje2Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="60" readOnly/>
                    <input type="text" id="odstupanje3" name="odstupanje3" className="rezultatiInput"
                           value={odstupanje3} onChange={handleOdstupanje3Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="80" readOnly/>
                    <input type="text" id="odstupanje4" name="odstupanje4" className="rezultatiInput"
                           value={odstupanje4} onChange={handleOdstupanje4Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="100" readOnly/>
                    <input type="text" id="odstupanje5" name="odstupanje5" className="rezultatiInput"
                           value={odstupanje5} onChange={handleOdstupanje5Change}/>
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
                        <option value="m">μm</option>
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
                        onChange={(e) => {
                            setGreska1a(e.target.value);
                            updateValues(e.target.value, setGreska1b);
                        }}
                    />
                    <input
                        type="text"
                        id="greska1b"
                        name="greska1b"
                        className="rezultatiInput"
                        placeholder={"Do:"}
                        value={parseInt(greska1a) + 1 || ''}
                        onChange={(e) => {
                            setGreska1b(e.target.value);
                            updateValues(e.target.value, setGreska1b);
                        }}
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
                        value={parseInt(greska1a) + 1 || ''}
                        onChange={(e) => {
                            setGreska2a(e.target.value);
                            updateValues(e.target.value, setGreska1b);
                        }}
                    />
                    <input
                        type="text"
                        id="greska2b"
                        name="greska2b"
                        className="rezultatiInput"
                        placeholder="Do:"
                        value={parseInt(greska1a) + 2 || ''}
                        onChange={(e) => {
                            setGreska2b(e.target.value);
                            updateValues(e.target.value, setGreska1b);
                        }}
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
                        onChange={(e) => {
                            setGreska3a(e.target.value);
                            updateValues(e.target.value, setGreska3b);
                        }}
                    />
                    <input
                        type="text"
                        id="greska3b"
                        name="greska3b"
                        className="rezultatiInput"
                        placeholder={"Do:"}
                        value={parseInt(greska3a) + 1 || ''}
                        onChange={(e) => {
                            setGreska3b(e.target.value);
                            updateValues(e.target.value, setGreska3b);
                        }}
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
                        value={parseInt(greska3a) + 1 || ''}
                        onChange={(e) => {
                            setGreska4a(e.target.value);
                            updateValues(e.target.value, setGreska4b);
                        }}
                    />
                    <input
                        type="text"
                        id="greska4b"
                        name="greska4b"
                        className="rezultatiInput"
                        placeholder="Do:"
                        value={parseInt(greska3a) + 2 || ''}
                        onChange={(e) => {
                            setGreska4b(e.target.value);
                            updateValues(e.target.value, setGreska4b);
                        }}
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
                        onChange={(e) => {
                            setGreska5a(e.target.value);
                            updateValues(e.target.value, setGreska5b);
                        }}
                    />
                    <input
                        type="text"
                        id="greska5b"
                        name="greska5b"
                        className="rezultatiInput"
                        placeholder={"Do:"}
                        value={parseInt(greska5a) + 1 || ''}
                        onChange={(e) => {
                            setGreska5b(e.target.value);
                            updateValues(e.target.value, setGreska5b);
                        }}
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
                        value={parseInt(greska5a) + 1 || ''}
                        onChange={(e) => {
                            setGreska6a(e.target.value);
                            updateValues(e.target.value, setGreska6b);
                        }}
                    />
                    <input
                        type="text"
                        id="greska6b"
                        name="greska6b"
                        className="rezultatiInput"
                        placeholder="Do:"
                        value={parseInt(greska5a) + 2 || ''}
                        onChange={(e) => {
                            setGreska2b(e.target.value);
                            updateValues(e.target.value, setGreska6b);
                        }}
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
                        onChange={(e) => {
                            setGreska7a(e.target.value);
                            updateValues(e.target.value, setGreska7b);
                        }}
                    />
                    <input
                        type="text"
                        id="greska7b"
                        name="greska7b"
                        className="rezultatiInput"
                        placeholder={"Do:"}
                        value={parseInt(greska7a) + 1 || ''}
                        onChange={(e) => {
                            setGreska7b(e.target.value);
                            updateValues(e.target.value, setGreska7b);
                        }}
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
                        value={parseInt(greska7a) + 1 || ''}
                        onChange={(e) => {
                            setGreska8a(e.target.value);
                            updateValues(e.target.value, setGreska8b);
                        }}
                    />
                    <input
                        type="text"
                        id="greska8b"
                        name="greska8b"
                        className="rezultatiInput"
                        placeholder="Do:"
                        value={parseInt(greska7a) + 2 || ''}
                        onChange={(e) => {
                            setGreska8b(e.target.value);
                            updateValues(e.target.value, setGreska8b);
                        }}
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
                        <option value="m">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="20" readOnly/>
                    <input type="text" id="odstupanje6" name="odstupanje6" className="rezultatiInput"
                           value={odstupanje6} onChange={handleOdstupanje6Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="40" readOnly/>
                    <input type="text" id="odstupanje7" name="odstupanje7" className="rezultatiInput"
                           value={odstupanje7} onChange={handleOdstupanje7Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="60" readOnly/>
                    <input type="text" id="odstupanje8" name="odstupanje8" className="rezultatiInput"
                           value={odstupanje8} onChange={handleOdstupanje8Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="80" readOnly/>
                    <input type="text" id="odstupanje9" name="odstupanje9" className="rezultatiInput"
                           value={odstupanje9} onChange={handleOdstupanje9Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="100" readOnly/>
                    <input type="text" id="odstupanje10" name="odstupanje10" className="rezultatiInput"
                           value={odstupanje10} onChange={handleOdstupanje10Change}/>
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
                        <option value="m">μm</option>
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
                        onChange={(e) => {
                            setGreska9a(e.target.value);
                            updateValues(e.target.value, setGreska1b);
                        }}
                    />
                    <input
                        type="text"
                        id="greska9b"
                        name="greska9b"
                        className="rezultatiInput"
                        placeholder={"Do:"}
                        value={parseInt(greska9a) + 1 || ''}
                        onChange={(e) => {
                            setGreska9b(e.target.value);
                            updateValues(e.target.value, setGreska1b);
                        }}
                    />
                    <input
                        type="text"
                        id="greskaPodeljka1"
                        name="greskaPodeljka9"
                        className="rezultatiInput"
                        placeholder="Greška podeljka skale"
                        value={greskaPodeljka9}
                        onChange={handleGreskaPodeljka9Change}
                    />
                </div>

                <div className="rezultatiContainer">
                    <input
                        type="text"
                        id="greska10a"
                        name="greska10a"
                        className="rezultatiInput"
                        placeholder="Od:"
                        value={parseInt(greska9a) + 1 || ''}
                        onChange={(e) => {
                            setGreska10a(e.target.value);
                            updateValues(e.target.value, setGreska10b);
                        }}
                    />
                    <input
                        type="text"
                        id="greska10b"
                        name="greska10b"
                        className="rezultatiInput"
                        placeholder="Do:"
                        value={parseInt(greska9a) + 2 || ''}
                        onChange={(e) => {
                            setGreska2b(e.target.value);
                            updateValues(e.target.value, setGreska10b);
                        }}
                    />
                    <input
                        type="text"
                        id="greskaPodeljka10"
                        name="greskaPodeljka10"
                        className="rezultatiInput"
                        placeholder="Greška podeljka skale"
                        value={greskaPodeljka10}
                        onChange={handleGreskaPodeljka10Change}
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
                        onChange={(e) => {
                            setGreska11a(e.target.value);
                            updateValues(e.target.value, setGreska11b);
                        }}
                    />
                    <input
                        type="text"
                        id="greska11b"
                        name="greska11b"
                        className="rezultatiInput"
                        placeholder={"Do:"}
                        value={parseInt(greska11a) + 1 || ''}
                        onChange={(e) => {
                            setGreska11b(e.target.value);
                            updateValues(e.target.value, setGreska11b);
                        }}
                    />
                    <input
                        type="text"
                        id="greskaPodeljka11"
                        name="greskaPodeljka11"
                        className="rezultatiInput"
                        placeholder="Greška podeljka skale"
                        value={greskaPodeljka11}
                        onChange={handleGreskaPodeljka11Change}
                    />
                </div>

                <div className="rezultatiContainer">
                    <input
                        type="text"
                        id="greska12a"
                        name="greska12a"
                        className="rezultatiInput"
                        placeholder="Od:"
                        value={parseInt(greska11a) + 1 || ''}
                        onChange={(e) => {
                            setGreska12a(e.target.value);
                            updateValues(e.target.value, setGreska12b);
                        }}
                    />
                    <input
                        type="text"
                        id="greska12b"
                        name="greska12b"
                        className="rezultatiInput"
                        placeholder="Do:"
                        value={parseInt(greska11a) + 2 || ''}
                        onChange={(e) => {
                            setGreska12b(e.target.value);
                            updateValues(e.target.value, setGreska12b);
                        }}
                    />
                    <input
                        type="text"
                        id="greskaPodeljka12"
                        name="greskaPodeljka12"
                        className="rezultatiInput"
                        placeholder="Greška podeljka skale"
                        value={greskaPodeljka12}
                        onChange={handleGreskaPodeljka12Change}
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
                        onChange={(e) => {
                            setGreska13a(e.target.value);
                            updateValues(e.target.value, setGreska13b);
                        }}
                    />
                    <input
                        type="text"
                        id="greska13b"
                        name="greska13b"
                        className="rezultatiInput"
                        placeholder={"Do:"}
                        value={parseInt(greska13a) + 1 || ''}
                        onChange={(e) => {
                            setGreska13b(e.target.value);
                            updateValues(e.target.value, setGreska13b);
                        }}
                    />
                    <input
                        type="text"
                        id="greskaPodeljka13"
                        name="greskaPodeljka13"
                        className="rezultatiInput"
                        placeholder="Greška podeljka skale"
                        value={greskaPodeljka13}
                        onChange={handleGreskaPodeljka13Change}
                    />
                </div>

                <div className="rezultatiContainer">
                    <input
                        type="text"
                        id="greska14a"
                        name="greska14a"
                        className="rezultatiInput"
                        placeholder="Od:"
                        value={parseInt(greska13a) + 1 || ''}
                        onChange={(e) => {
                            setGreska14a(e.target.value);
                            updateValues(e.target.value, setGreska14b);
                        }}
                    />
                    <input
                        type="text"
                        id="greska14b"
                        name="greska14b"
                        className="rezultatiInput"
                        placeholder="Do:"
                        value={parseInt(greska13a) + 2 || ''}
                        onChange={(e) => {
                            setGreska14b(e.target.value);
                            updateValues(e.target.value, setGreska14b);
                        }}
                    />
                    <input
                        type="text"
                        id="greskaPodeljka14"
                        name="greskaPodeljka14"
                        className="rezultatiInput"
                        placeholder="Greška podeljka skale"
                        value={greskaPodeljka14}
                        onChange={handleGreskaPodeljka14Change}
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
                        onChange={(e) => {
                            setGreska15a(e.target.value);
                            updateValues(e.target.value, setGreska15b);
                        }}
                    />
                    <input
                        type="text"
                        id="greska15b"
                        name="greska15b"
                        className="rezultatiInput"
                        placeholder={"Do:"}
                        value={parseInt(greska15a) + 1 || ''}
                        onChange={(e) => {
                            setGreska15b(e.target.value);
                            updateValues(e.target.value, setGreska15b);
                        }}
                    />
                    <input
                        type="text"
                        id="greskaPodeljka15"
                        name="greskaPodeljka15"
                        className="rezultatiInput"
                        placeholder="Greška podeljka skale"
                        value={greskaPodeljka15}
                        onChange={handleGreskaPodeljka15Change}
                    />
                </div>

                <div className="rezultatiContainer">
                    <input
                        type="text"
                        id="greska16a"
                        name="greska16a"
                        className="rezultatiInput"
                        placeholder="Od:"
                        value={parseInt(greska15a) + 1 || ''}
                        onChange={(e) => {
                            setGreska16a(e.target.value);
                            updateValues(e.target.value, setGreska16b);
                        }}
                    />
                    <input
                        type="text"
                        id="greska16b"
                        name="greska16b"
                        className="rezultatiInput"
                        placeholder="Do:"
                        value={parseInt(greska15a) + 2 || ''}
                        onChange={(e) => {
                            setGreska16b(e.target.value);
                            updateValues(e.target.value, setGreska16b);
                        }}
                    />
                    <input
                        type="text"
                        id="greskaPodeljka16"
                        name="greskaPodeljka16"
                        className="rezultatiInput"
                        placeholder="Greška podeljka skale"
                        value={greskaPodeljka16}
                        onChange={handleGreskaPodeljka16Change}
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
                <textarea id="razlogOdbijanja" name="razlogOdbijanja" rows="4" cols="50" value={razlogOdbijanja} onChange={handleRazlogOdbijanjaChange}></textarea><br/>

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

export default EditJednodelnoMerilo;
