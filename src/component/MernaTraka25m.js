import React, {useEffect, useState} from 'react';
import "../styles/MernaTraka.css";

const MernaTraka25m = () => {
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


    const [ndg1, setNdg1] = useState('±1,2');
    const [ndg2, setNdg2] = useState('±1,2');
    const [ndg3, setNdg3] = useState('±1,2');
    const [ndg4, setNdg4] = useState('±1,2');
    const [ndg5, setNdg5] = useState('±1,2');
    const [ndg6, setNdg6] = useState('±1,2');
    const [ndg7, setNdg7] = useState('±1,2');
    const [ndg8, setNdg8] = useState('±1,2');
    const [ndg9, setNdg9] = useState('±1,2');
    const [ndg10, setNdg10] = useState('±1,2');
    const [ndg11, setNdg11] = useState('±1,2');
    const [ndg12, setNdg12] = useState('±1,2');
    const [ndg13, setNdg13] = useState('±1,2');
    const [ndg14, setNdg14] = useState('±1,2');
    const [ndg15, setNdg15] = useState('±1,2');
    const [ndg16, setNdg16] = useState('±1,2');
    const [ndg17, setNdg17] = useState('±1,2');
    const [ndg18, setNdg18] = useState('±1,2');
    const [ndg19, setNdg19] = useState('±1,2');
    const [ndg20, setNdg20] = useState('±1,2');
    const [ndg21, setNdg21] = useState('±1,2');
    const [ndg22, setNdg22] = useState('±1,2');
    const [ndg23, setNdg23] = useState('±1,2');
    const [ndg24, setNdg24] = useState('±1,2');
    const [ndg25, setNdg25] = useState('±1,2');
    const [ndg26, setNdg26] = useState('±1,2');
    const [ndg27, setNdg27] = useState('±1,2');

    const [ndr1, setNdr1] = useState('1,2');


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
    const handleNdg8Change = (e) => {
        setNdg8(e.target.value);
    }
    const handleNdg9Change = (e) => {
        setNdg9(e.target.value);
    }
    const handleNdg10Change = (e) => {
        setNdg10(e.target.value);
    }
    const handleNdg11Change = (e) => {
        setNdg11(e.target.value);
    }
    const handleNdg12Change = (e) => {
        setNdg12(e.target.value);
    }
    const handleNdg13Change = (e) => {
        setNdg13(e.target.value);
    }
    const handleNdg14Change = (e) => {
        setNdg14(e.target.value);
    }
    const handleNdg15Change = (e) => {
        setNdg15(e.target.value);
    }
    const handleNdg16Change = (e) => {
        setNdg16(e.target.value);
    }
    const handleNdg17Change = (e) => {
        setNdg17(e.target.value);
    }
    const handleNdg18Change = (e) => {
        setNdg18(e.target.value);
    }
    const handleNdg19Change = (e) => {
        setNdg19(e.target.value);
    }
    const handleNdg20Change = (e) => {
        setNdg20(e.target.value);
    }
    const handleNdg21Change = (e) => {
        setNdg21(e.target.value);
    }
    const handleNdg22Change = (e) => {
        setNdg22(e.target.value);
    }
    const handleNdg23Change = (e) => {
        setNdg23(e.target.value);
    }
    const handleNdg24Change = (e) => {
        setNdg24(e.target.value);
    }
    const handleNdg25Change = (e) => {
        setNdg25(e.target.value);
    }
    const handleNdg26Change = (e) => {
        setNdg26(e.target.value);
    }
    const handleNdg27Change = (e) => {
        setNdg27(e.target.value);
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

        fetch('http://localhost:8080/api/v1/mernaTraka25m/add', {
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
            <h2>Merna traka 25m</h2>
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
                <div className="rezultatiContainer">
                    <input type="text" value="6000" readOnly/>
                    <input type="text" id="odstupanje7" name="odstupanje7" className="rezultatiInput"/>
                    <input type="text" id="ndg7" name="ndg7" className="rezultatiInput" placeholder="NDG" value={ndg7}
                           onChange={handleNdg7Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="7000" readOnly/>
                    <input type="text" id="odstupanje8" name="odstupanje8" className="rezultatiInput"/>
                    <input type="text" id="ndg8" name="ndg8" className="rezultatiInput" placeholder="NDG" value={ndg8}
                           onChange={handleNdg8Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="8000" readOnly/>
                    <input type="text" id="odstupanje9" name="odstupanje9" className="rezultatiInput"/>
                    <input type="text" id="ndg9" name="ndg9" className="rezultatiInput" placeholder="NDG" value={ndg9}
                           onChange={handleNdg9Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="9000" readOnly/>
                    <input type="text" id="odstupanje10" name="odstupanje10" className="rezultatiInput"/>
                    <input type="text" id="ndg10" name="ndg10" className="rezultatiInput" placeholder="NDG"
                           value={ndg10} onChange={handleNdg10Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="10000" readOnly/>
                    <input type="text" id="odstupanje11" name="odstupanje11" className="rezultatiInput"/>
                    <input type="text" id="ndg11" name="ndg11" className="rezultatiInput" placeholder="NDG"
                           value={ndg11} onChange={handleNdg11Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="11000" readOnly/>
                    <input type="text" id="odstupanje12" name="odstupanje12" className="rezultatiInput"/>
                    <input type="text" id="ndg12" name="ndg12" className="rezultatiInput" placeholder="NDG"
                           value={ndg12} onChange={handleNdg12Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="12000" readOnly/>
                    <input type="text" id="odstupanje13" name="odstupanje13" className="rezultatiInput"/>
                    <input type="text" id="ndg13" name="ndg13" className="rezultatiInput" placeholder="NDG"
                           value={ndg13} onChange={handleNdg13Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="13000" readOnly/>
                    <input type="text" id="odstupanje14" name="odstupanje14" className="rezultatiInput"/>
                    <input type="text" id="ndg14" name="ndg14" className="rezultatiInput" placeholder="NDG"
                           value={ndg14} onChange={handleNdg14Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="14000" readOnly/>
                    <input type="text" id="odstupanje15" name="odstupanje15" className="rezultatiInput"/>
                    <input type="text" id="ndg15" name="ndg15" className="rezultatiInput" placeholder="NDG"
                           value={ndg15} onChange={handleNdg15Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="15000" readOnly/>
                    <input type="text" id="odstupanje16" name="odstupanje16" className="rezultatiInput"/>
                    <input type="text" id="ndg16" name="ndg16" className="rezultatiInput" placeholder="NDG"
                           value={ndg16} onChange={handleNdg16Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="16000" readOnly/>
                    <input type="text" id="odstupanje17" name="odstupanje17" className="rezultatiInput"/>
                    <input type="text" id="ndg17" name="ndg17" className="rezultatiInput" placeholder="NDG"
                           value={ndg17} onChange={handleNdg17Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="17000" readOnly/>
                    <input type="text" id="odstupanje18" name="odstupanje18" className="rezultatiInput"/>
                    <input type="text" id="ndg18" name="ndg18" className="rezultatiInput" placeholder="NDG"
                           value={ndg18} onChange={handleNdg18Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="18000" readOnly/>
                    <input type="text" id="odstupanje19" name="odstupanje19" className="rezultatiInput"/>
                    <input type="text" id="ndg19" name="ndg19" className="rezultatiInput" placeholder="NDG"
                           value={ndg19} onChange={handleNdg19Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="19000" readOnly/>
                    <input type="text" id="odstupanje20" name="odstupanje20" className="rezultatiInput"/>
                    <input type="text" id="ndg20" name="ndg20" className="rezultatiInput" placeholder="NDG"
                           value={ndg20} onChange={handleNdg20Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="20000" readOnly/>
                    <input type="text" id="odstupanje21" name="odstupanje21" className="rezultatiInput"/>
                    <input type="text" id="ndg21" name="ndg21" className="rezultatiInput" placeholder="NDG"
                           value={ndg21} onChange={handleNdg21Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="21000" readOnly/>
                    <input type="text" id="odstupanje22" name="odstupanje22" className="rezultatiInput"/>
                    <input type="text" id="ndg22" name="ndg22" className="rezultatiInput" placeholder="NDG"
                           value={ndg22} onChange={handleNdg22Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="22000" readOnly/>
                    <input type="text" id="odstupanje23" name="odstupanje23" className="rezultatiInput"/>
                    <input type="text" id="ndg23" name="ndg23" className="rezultatiInput" placeholder="NDG"
                           value={ndg23} onChange={handleNdg23Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="23000" readOnly/>
                    <input type="text" id="odstupanje24" name="odstupanje24" className="rezultatiInput"/>
                    <input type="text" id="ndg24" name="ndg24" className="rezultatiInput" placeholder="NDG"
                           value={ndg24} onChange={handleNdg24Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="24000" readOnly/>
                    <input type="text" id="odstupanje25" name="odstupanje25" className="rezultatiInput"/>
                    <input type="text" id="ndg25" name="ndg25" className="rezultatiInput" placeholder="NDG"
                           value={ndg25} onChange={handleNdg25Change}/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="25000" readOnly/>
                    <input type="text" id="odstupanje26" name="odstupanje26" className="rezultatiInput"/>
                    <input type="text" id="ndg26" name="ndg26" className="rezultatiInput" placeholder="NDG"
                           value={ndg26} onChange={handleNdg26Change}/>
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
                    <input type="text" id="ndg27" name="ndg27" className="rezultatiInput" value={ndg27}
                           onChange={handleNdg27Change}/>
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

export default MernaTraka25m;
