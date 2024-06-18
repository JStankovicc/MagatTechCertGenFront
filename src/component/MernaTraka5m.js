import React, {useContext, useEffect, useState} from 'react';
import "../styles/MernaTraka.css";
import {GlobalContext} from "./GlobalContext";

const MernaTraka5m = () => {
    const { globalVariable, setGlobalVariable } = useContext(GlobalContext);

    const [vrsteKontrolisanja, setVrsteKontrolisanja] = useState([]);
    const [kompanije, setKompanije] = useState([]);
    const [podnosilacZahteva, setPodnosilacZahteva] = useState('');
    const [vlasnikKorisnik, setVlasnikKorisnik] = useState('');
    const [brojZapisnika, setBrojZapisnika] = useState('');
    const [users, setUsers] = useState([]);
    const [proizvodjaci, setProizvodjaci] = useState([]);

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


    const [ndg1, setNdg1] = useState('±');
    const [ndg2, setNdg2] = useState('±');
    const [ndg3, setNdg3] = useState('±');
    const [ndg4, setNdg4] = useState('±');
    const [ndg5, setNdg5] = useState('±');
    const [ndg6, setNdg6] = useState('±');
    const [ndg7, setNdg7] = useState('±');

    const [ndr1, setNdr1] = useState('');


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
    const handleNdg5Change = (e) => {
        setNdg5(e.target.value);
    }
    const handleNdg6Change = (e) => {
        setNdg6(e.target.value);
    }
    const handleNdg7Change = (e) => {
        setNdg7(e.target.value);
    }
    const handleNdr1Change = (e) => {
        setNdr1(e.target.value);
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

        const formData = new FormData(event.target);

        const formDataToJson = (formData) => {
            const json = {};
            formData.forEach((value, key) => {
                json[key] = value;
            });
            return json;
        };

        const finishSetCheckbox = document.getElementById('finishSetCheckbox');
        const finishSet = finishSetCheckbox.checked;
        if (finishSet) {
            formData.append('finishSet', true);

            fetch(`${globalVariable}/api/v1/brojZapisnika/update`, {
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

        fetch(`${globalVariable}/api/v1/mernaTraka5m/add`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataToJson(formData))
        })
            .then(response => {
                if (!response.ok) {
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Greška prilikom podnošenja forme:', error);
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


        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }


        fetch(`${globalVariable}/api/v1/mernaTraka5m/getND`,{
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
                setNdg5(data.ndg5);
                setNdg6(data.ndg6);
                setNdg7(data.ndg7);
                setNdr1(data.ndr1);
            })
            .catch(error => {
                console.error('Error fetching ND:', error);
            });

        fetch(`${globalVariable}/api/v1/brojZapisnika`,{
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
        fetch(`${globalVariable}/api/v1/vrstakontrolisanja/getAll`, {
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

        fetch(`${globalVariable}/api/v1/kompanija/all`, {
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

        fetch(`${globalVariable}/api/v1/proizvodjac/all`, {
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

        fetch(`${globalVariable}/api/v1/user/all`, {
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
            <h2>Merna traka 5m</h2>
            <form onSubmit={handleSubmit} id="form">
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
                <input type="text" id="serijskiBroj" name="serijskiBroj"/><br/>

                <label htmlFor="identifikacioniBroj">Identifikacioni broj:</label>
                <input type="text" id="identifikacioniBroj" name="identifikacioniBroj"/><br/>

                <label htmlFor="proizvodjac">Proizvodjac:</label>
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
                    <option value="I">I</option>
                    <option value="II">II</option>
                    <option value="III">III</option>
                </select><br/><br/>

                <label className="container">
                    <h2>Merna traka je funkcionalno ispravna:</h2>
                    <input type="radio" id="da" name="meriloJeIspravno" value="DA"/>
                    <label htmlFor="da">DA</label>
                    <input type="radio" id="ne" name="meriloJeIspravno" value="NE"/>
                    <label htmlFor="ne">NE</label>
                </label>

                <label>Uslovi okoline:</label>
                <div className="rezultatiContainer">
                    <input type="text" value="Temperatura" readOnly/>
                    <input type="text" id="temperatura" name="temperatura" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="Vlažnost vazduha" readOnly/>
                    <input type="text" id="vlaznostVazduha" name="vlaznostVazduha" className="rezultatiInput"/>
                </div>

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
                    <input type="text" value="0" readOnly/>
                    <input type="text" id="odstupanje1" name="odstupanje1" className="rezultatiInput"/>
                    <input type="text" id="ndg1" name="ndg1" className="rezultatiInput" placeholder="NDG" value={ndg1}
                           onChange={handleNdg1Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="1000" readOnly/>
                    <input type="text" id="odstupanje2" name="odstupanje2" className="rezultatiInput"/>
                    <input type="text" id="ndg2" name="ndg2" className="rezultatiInput" placeholder="NDG" value={ndg2}
                           onChange={handleNdg2Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="2000" readOnly/>
                    <input type="text" id="odstupanje3" name="odstupanje3" className="rezultatiInput"/>
                    <input type="text" id="ndg3" name="ndg3" className="rezultatiInput" placeholder="NDG" value={ndg3}
                           onChange={handleNdg3Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="3000" readOnly/>
                    <input type="text" id="odstupanje4" name="odstupanje4" className="rezultatiInput"/>
                    <input type="text" id="ndg4" name="ndg4" className="rezultatiInput" placeholder="NDG" value={ndg4}
                           onChange={handleNdg4Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="4000" readOnly/>
                    <input type="text" id="odstupanje5" name="odstupanje5" className="rezultatiInput"/>
                    <input type="text" id="ndg5" name="ndg5" className="rezultatiInput" placeholder="NDG" value={ndg5}
                           onChange={handleNdg5Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="5000" readOnly/>
                    <input type="text" id="odstupanje6" name="odstupanje6" className="rezultatiInput"/>
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
                    <input type="text" id="ndg7" name="ndg7" className="rezultatiInput" value={ndg7}
                           onChange={handleNdg7Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="NDR" readOnly/>
                    <input type="text" id="ndr1" name="ndr1" className="rezultatiInput" value={ndr1}
                           onChange={handleNdr1Change}/>
                </div>

                <label htmlFor="skinutiZigovi1">Skinuti žigovi (razdvojiti znakom ;):</label>
                <input type="text" id="skinutiZigovi" name="skinutiZigovi"/><br/>

                <label htmlFor="stavljeniZigovi1">Stavljeni žigovi (razdvojiti znakom ;):</label>
                <input type="text" id="postavljeniZigovi" name="postavljeniZigovi"/><br/>

                <label className="container">
                    <div className="rezultatiContainer">
                        <input type="text" value="Zahtevi propisani pravilnikom o:" className="propisaniZahtevi"
                               readOnly/>
                        <input type="text" id="propisaniZahtevi" name="propisaniZahtevi" className="rezultatiInput"/>
                    </div>
                    <h2>Merna traka ispunjava propisane zahteve:</h2>
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
                <input type="date" id="datum" name="datum"/><br/>

                <label>
                    <input type="checkbox" id="finishSetCheckbox"/> Završi nalog
                </label>

                <input type="submit" value="Potvrdi"/>
            </form>
        </div>
    );
};

export default MernaTraka5m;
