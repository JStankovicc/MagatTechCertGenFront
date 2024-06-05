import React, { useState, useEffect } from 'react';

const EditMasinaZaMerenje = ({ id }) => {
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
    const [ndg1, setNdg1] = useState('');
    const [skinutiZigovi, setSkinutiZigovi] = useState('');
    const [postavljeniZigovi, setPostavljeniZigovi] = useState('');
    const [propisaniZahtevi, setPropisaniZahtevi] = useState('');
    const [meriloIspunjavaZahteve, setMeriloIspunjavaZahteve] = useState('');
    const [komentar, setKomentar] = useState('');
    const [zapisnikUneo, setZapisnikUneo] = useState('');
    const [zapisnikOdobrio, setZapisnikOdobrio] = useState('');
    const [datum, setDatum] = useState('');
    const [users, setUsers] = useState([]);
    const [merenje1, setMerenje1] = useState('');
    const [merenje2, setMerenje2] = useState('');
    const [merenje3, setMerenje3] = useState('');
    const [proveraIspravnogVodjenja, setProveraIspravnogVodjenja] = useState('');
    const [ispravnostPokaznogUredjaja, setIspravnostPokaznogUredjaja] = useState(null);
    const [duzinaUzorka, setDuzinaUzorka] = useState('');
    const [debljinaUzorka, setDebljinaUzorka] = useState('');
    const [pokazivanjeMasine, setPokazivanjeMasine] = useState('');
    const [odstupanjeOdPraveVrednostiDuzine , setOdstupanjeOdPraveVrednostiDuzine] = useState('');
    const [relativnaGreskaIzmereneDuzine, setRelativnaGreskaIzmereneDuzine] = useState('');
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
            const urlMerilo = `http://localhost:8080/api/v1/masinaZaMerenje/get?brojZapisnika=${id}`;

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
                setNdg1(data.ndg1 || '');
                setMerenje1(data.merenje1 || '');
                setMerenje2(data.merenje2 || '');
                setMerenje3(data.merenje3 || '');
                setDuzinaUzorka(data.duzinaUzorka || '');
                setDebljinaUzorka(data.debljinaUzorka || '');
                setPokazivanjeMasine(data.pokazivanjeMasine || '');
                setOdstupanjeOdPraveVrednostiDuzine(data.odstupanjeOdPraveVrednostiDuzine || '');
                setRelativnaGreskaIzmereneDuzine(data.relativnaGreskaIzmereneDuzine || '');
                setSkinutiZigovi(data.skinutiZigovi || '');
                setPostavljeniZigovi(data.postavljeniZigovi || '');
                setPropisaniZahtevi(data.propisaniZahtevi || '');
                setMeriloIspunjavaZahteve(data.meriloIspunjavaZahteve === true ? 'DA' : 'NE');
                setIspravnostPokaznogUredjaja(data.proveraIspravnostiPokaznogUredjaja === true ? 'DA' : 'NE');
                setKomentar(data.komentar2 || '');
                setProveraIspravnogVodjenja(data.proveraIspravnogVodjenja || '');
                setRazlogOdbijanja(data.razlogOdbijanja || '');

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
        const endpoint = 'http://localhost:8080/api/v1/masinaZaMerenje/update/' + replacedString;

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

    const handleNdg1Change = (e) => {
        setNdg1(e.target.value);
    }

    const handleMerenje1Change = (e) => {
        setMerenje1(e.target.value);
    }

    const handleMerenje2Change = (e) => {
        setMerenje2(e.target.value);
    }

    const handleMerenje3Change = (e) => {
        setMerenje3(e.target.value);
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

    const handleDuzinaUzorkaChange = (e) => {
        setDuzinaUzorka(e.target.value);
    }

    const handleDebljinaUzorkaChange = (e) => {
        setDebljinaUzorka(e.target.value);
    }

    const handlePokazivanjeMasineChange = (e) => {
        setPokazivanjeMasine(e.target.value);
    }

    const handleOdstupanjeOdPraveVrednostiDuzineChange = (e) => {
        setOdstupanjeOdPraveVrednostiDuzine(e.target.value);
    }

    const handleRelativnaGreskaIzmereneDuzineChange = (e) => {
        setRelativnaGreskaIzmereneDuzine(e.target.value);
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

                <label>Prečnik točka mašine:</label><br/>
                <div className="mernaJedinicaContainer">
                    <input type="text" value="Merna jedinica:" readOnly/>
                    <select id="unit1" name="unit1" className="rezultatiInput">
                        <option value="m">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="1. merenje" readOnly/>
                    <input type="text" id="merenje1" name="merenje1" className="rezultatiInput" value={merenje1}
                           onChange={handleMerenje1Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="2. merenje" readOnly/>
                    <input type="text" id="merenje2" name="merenje2" className="rezultatiInput" value={merenje2}
                           onChange={handleMerenje2Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="3. merenje" readOnly/>
                    <input type="text" id="merenje3" name="merenje3" className="rezultatiInput" value={merenje3}
                           onChange={handleMerenje3Change}/>
                </div>

                <label className="container">
                    <h2>Provera ispravnog vođenja mernog materijala (1mm):</h2>
                    <input type="radio" id="ispunjava" name="proveraIspravnogVodjenja" value="ispunjava"
                           checked={proveraIspravnogVodjenja === 'ispunjava'}
                           onChange={() => setProveraIspravnogVodjenja('ispunjava')}/>
                    <label htmlFor="ispunjava">ISPUNJAVA</label>
                    <input type="radio" id="neIspunjava" name="proveraIspravnogVodjenja" value="neIspunjava"
                           checked={proveraIspravnogVodjenja === 'neIspunjava'}
                           onChange={() => setProveraIspravnogVodjenja('neIspunjava')}/>
                    <label htmlFor="neIspunjava">NE ISPUNJAVA</label>
                    <input type="radio" id="nijePrimenljivo" name="proveraIspravnogVodjenja" value="nijePrimenljivo"
                           checked={proveraIspravnogVodjenja === 'nijePrimenljivo'}
                           onChange={() => setProveraIspravnogVodjenja('nijePrimenljivo')}/>
                    <label htmlFor="nijePrimenljivo">NIJE PRIMENLJIVO</label>
                </label>

                <label className="container">
                    <h2>Provera ispravnsti pokaznog uređaja:</h2>
                    <input type="radio" id="ispunjava1" name="ispunjava1" value="ispunjava"
                           checked={ispravnostPokaznogUredjaja === 'DA'}
                           onChange={() => setIspravnostPokaznogUredjaja('DA')}/>
                    <label htmlFor="ispunjava1">ISPUNJAVA</label>
                    <input type="radio" id="neIspunjava1" name="ispunjava1" value="neIspunjava"
                           checked={ispravnostPokaznogUredjaja === 'NE'}
                           onChange={() => setIspravnostPokaznogUredjaja('NE')}/>
                    <label htmlFor="neIspunjava1">NE ISPUNJAVA</label>
                </label>


                <label>Provera ispravnosti uređaja za odmeravanje dužina:</label>
                <div className="mernaJedinicaContainer">
                    <input type="text" value="Merna jedinica:" readOnly/>
                    <select id="unit2" name="unit2" className="rezultatiInput">
                        <option value="m">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="Dužina uzorka" readOnly/>
                    <input type="text" id="duzinaUzorka" name="duzinaUzorka" className="rezultatiInput"
                           value={duzinaUzorka} onChange={handleDuzinaUzorkaChange}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="Debljina uzorka" readOnly/>
                    <input type="text" id="debljinaUzorka" name="debljinaUzorka" className="rezultatiInput"
                           value={debljinaUzorka} onChange={handleDebljinaUzorkaChange}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="Pokazivanje mašine" readOnly/>
                    <input type="text" id="pokazivanjeMasine" name="pokazivanjeMasine" className="rezultatiInput"
                           value={pokazivanjeMasine} onChange={handlePokazivanjeMasineChange}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="Odstupanje od stvarne vrednosti dužine" readOnly/>
                    <input type="text" id="rezultaodstupanjeOdPraveVrednostiDuzinet14"
                           name="odstupanjeOdPraveVrednostiDuzine" className="rezultatiInput"
                           value={odstupanjeOdPraveVrednostiDuzine}
                           onChange={handleOdstupanjeOdPraveVrednostiDuzineChange}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="Relativna greška izmerene dužine" readOnly/>
                    <input type="text" id="relativnaGreskaIzmereneDuzine" name="relativnaGreskaIzmereneDuzine"
                           className="rezultatiInput" value={relativnaGreskaIzmereneDuzine}
                           onChange={handleRelativnaGreskaIzmereneDuzineChange}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="NDG" readOnly/>
                    <input type="text" id="ndg1" name="ndg1" className="rezultatiInput" value={ndg1}
                           onChange={handleNdg1Change}/>
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
                        <input type="text" id="propisaniZahtevi" name="propisaniZahtevi" className="rezultatiInput"
                               value={propisaniZahtevi} onChange={handlePropisaniZahteviChange}/>
                    </div>
                    <div>
                        <h2>Mašina ispunjava propisane zahteve:</h2>
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
                            id="meriloNeIspunjavaZahteve"
                            name="meriloIspunjavaZahteve"
                            value="NE"
                            checked={meriloIspunjavaZahteve === 'NE'}
                            onChange={() => setMeriloIspunjavaZahteve('NE')}
                        />
                        <label htmlFor="meriloNeIspunjavaZahteve">NE</label>
                    </div>
                </label><br/>
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

export default EditMasinaZaMerenje;
