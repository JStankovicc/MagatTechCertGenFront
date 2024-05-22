import React, {useEffect, useState} from 'react';
import "../styles/MetriZaTekstil.css";

const MetriZaTekstil = () => {
    const [vrsteKontrolisanja, setVrsteKontrolisanja] = useState([]);
    const [kompanije, setKompanije] = useState([]);
    const [podnosilacZahteva, setPodnosilacZahteva] = useState('');
    const [vlasnikKorisnik, setVlasnikKorisnik] = useState('');
    const [brojZapisnika, setBrojZapisnika] = useState('');


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

    const updateValues = (inputValue, setter) => {
        const numericValue = parseInt(inputValue);
        if (!isNaN(numericValue)) {
            setter(numericValue + 1);
        } else {
            setter('');
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
                <input type={"text"} id={"proizvodjac"} name="proizvodjac" list={"kompanije"}/>
                <datalist id={"proizvodjaci"}>
                    <option>Opcija 1</option>
                    <option>Opcija 2</option>
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
                <textarea id="napomena" name="napomena" rows="4" cols="50"></textarea><br/>

                <label>Odstupanje od nazivne mere:</label>
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
                    <input type="text" id="ndg1" name="ndg1" className="rezultatiInput"/>
                </div>


                <label>Greška podeljka skale:</label>
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
                    <select id="unit1" name="unit1" className="rezultatiInput">
                        <option value="m">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
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
                    <select id="unit2" name="unit2" className="rezultatiInput">
                        <option value="m">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
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
                    <select id="unit1" name="unit1" className="rezultatiInput">
                        <option value="m">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
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
                    <select id="unit2" name="unit2" className="rezultatiInput">
                        <option value="m">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
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
                    <select id="unit1" name="unit1" className="rezultatiInput">
                        <option value="m">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
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
                    <select id="unit2" name="unit2" className="rezultatiInput">
                        <option value="m">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
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
                    <select id="unit1" name="unit1" className="rezultatiInput">
                        <option value="m">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
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
                    <select id="unit2" name="unit2" className="rezultatiInput">
                        <option value="m">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
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
                    <input type="text" id="ndg2" name="ndg2" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="NDR" readOnly/>
                    <input type="text" id="ndr1" name="ndr1" className="rezultatiInput"/>
                </div>


                <label>Odstupanje od nazivne mere:</label>
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
                    <input type="text" id="ndg3" name="ndg3" className="rezultatiInput"/>
                </div>


                <label>Greška podeljka skale:</label>
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
                    <select id="unit1" name="unit1" className="rezultatiInput">
                        <option value="m">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
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
                    <select id="unit2" name="unit2" className="rezultatiInput">
                        <option value="m">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
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
                    <select id="unit1" name="unit1" className="rezultatiInput">
                        <option value="m">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
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
                    <select id="unit2" name="unit2" className="rezultatiInput">
                        <option value="m">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
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
                    <select id="unit1" name="unit1" className="rezultatiInput">
                        <option value="m">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
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
                    <select id="unit2" name="unit2" className="rezultatiInput">
                        <option value="m">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
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
                    <select id="unit1" name="unit1" className="rezultatiInput">
                        <option value="m">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
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
                    <select id="unit2" name="unit2" className="rezultatiInput">
                        <option value="m">μm</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                    </select>
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
                    <input type="text" id="ndg4" name="ndg4" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="NDR" readOnly/>
                    <input type="text" id="ndr2" name="ndr2" className="rezultatiInput"/>
                </div>


                <label>Merna Oprema:</label>
                <label>
                    <input type="checkbox" name="mernaLupa"/>
                    Merna lupa
                </label>
                <label>
                    <input type="checkbox" name="merniLenjir"/>
                    Merni lenjir
                </label>
                <label>
                    <input type="checkbox" name="pomicnoMerilo"/>
                    Pomično merilo
                </label>

                <label htmlFor="skinutiZigovi">Skinuti žigovi (razdvojiti znakom ;):</label>
                <input type="text" id="skinutiZigovi" name="skinutiZigovi"/><br/>

                <label htmlFor="postavljeniZigovi">Stavljeni žigovi (razdvojiti znakom ;):</label>
                <input type="text" id="postavljeniZigovi" name="postavljeniZigovi"/><br/>

                <label className="container">
                    <div className="rezultatiContainer">
                        <input type="text" value="Propisani zahtevi:" className="propisaniZahtevi" readOnly/>
                        <input type="text" id="propisaniZahtevi" name="propisaniZahtevi" className="rezultatiInput"/>
                    </div>
                    <h2>Merilo ispunjava propisane zahteve:</h2>
                    <input type="radio" id="meriloIspunjavaZahteve" name="meriloIspunjavaZahteve" value="DA"/>
                    <label htmlFor="meriloIspunjavaZahteve">DA</label>
                    <input type="radio" id="neIspunjava" name="meriloIspunjavaZahteve" value="NE"/>
                    <label htmlFor="neIspunjava">NE</label>
                </label><br/>


                <label htmlFor="komentar2">Komentar:</label>
                <textarea id="komentar2" name="komentar2" rows="4" cols="50"></textarea><br/>


                <select id="zapisnikUneo" name="zapisnikUneo">
                    <option value="1">Opcija 1</option>
                    <option value="2">Opcija 2</option>
                    <option value="3">Opcija 3</option>
                </select><br/>

                <label htmlFor="zapisnikUneo">Zapisnik odobrio:</label>
                <select id="zapisnikOdobrio" name="zapisnikOdobrio">
                    <option value="1">Opcija 1</option>
                    <option value="2">Opcija 2</option>
                    <option value="3">Opcija 3</option>
                </select><br/>

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
