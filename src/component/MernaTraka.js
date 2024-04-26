import React, {useEffect, useState} from 'react';
import "../styles/MernaTraka.css";

const MernaTraka = () => {
    const [vrsteKontrolisanja, setVrsteKontrolisanja] = useState([]);
    const [kompanije, setKompanije] = useState([]);
    const [podnosilacZahteva, setPodnosilacZahteva] = useState('');
    const [vlasnikKorisnik, setVlasnikKorisnik] = useState('');

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


    const updateValues = (inputValue, setter) => {
        const numericValue = parseInt(inputValue);
        if (!isNaN(numericValue)) {
            setter(numericValue + 1);
        } else {
            setter('');
        }
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

        fetch('http://localhost:8080/api/v1/mernaTrakaSaViskom/add', {
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

    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token nije pronađen u local storage-u.');
            return;
        }

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
            <h2>Merna traka sa viskom</h2>
            <form>
                <label htmlFor="brojZapisnika">Zapisnik Broj:</label>
                <input type="text" id="brojZapisnika" name="brojZapisnika"/><br/>

                <label>Izaberite vrstu kontrolisanja:</label>
                <select>
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

                <label htmlFor="proizvodjac">Proizvodjac:</label>
                <input type={"text"} id={"proizvodjac"} name={"proizvodjac"} list={"kompanije"}/>
                <datalist id={"proizvodjaci"}>
                    <option>Opcija 1</option>
                    <option>Opcija 2</option>
                </datalist>
                <br/>

                <label htmlFor="oznakaTipa">Oznaka tipa/modela:</label>
                <input type="text" id="oznakaTipa" name="oznakaTipa"/><br/>

                <label htmlFor="sluzbenaOznakaTipa">Sluzbena oznaka tipa/broj izjave o usaglasenosti:</label>
                <select id="sluzbenaOznakaTipa" name="sluzbenaOznakaTipa">
                    <option value="predlog1">Predlog 1</option>
                    <option value="predlog2">Predlog 2</option>
                    <option value="predlog3">Predlog 3</option>
                </select><br/>

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
                <textarea id="napomena" name="napomena" rows="4" cols="50"></textarea><br/>

                <label>Odstupanje od nazivne mere:</label>
                <div className="rezultatiContainer">
                    <input type="text" value="0" readOnly/>
                    <input type="text" id="odstupanje1" name="odstupanje1" className="rezultatiInput"/>
                    <input type="text" id="ndg1" name="ndg1" className="rezultatiInput" placeholder="NDG"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="1000" readOnly/>
                    <input type="text" id="odstupanje2" name="odstupanje2" className="rezultatiInput"/>
                    <input type="text" id="ndg2" name="ndg2" className="rezultatiInput" placeholder="NDG"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="2000" readOnly/>
                    <input type="text" id="odstupanje3" name="odstupanje3" className="rezultatiInput"/>
                    <input type="text" id="ndg3" name="ndg3" className="rezultatiInput" placeholder="NDG"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="3000" readOnly/>
                    <input type="text" id="odstupanje4" name="odstupanje4" className="rezultatiInput"/>
                    <input type="text" id="ndg4" name="ndg4" className="rezultatiInput" placeholder="NDG"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="4000" readOnly/>
                    <input type="text" id="odstupanje5" name="odstupanje5" className="rezultatiInput"/>
                    <input type="text" id="ndg5" name="ndg5" className="rezultatiInput" placeholder="NDG"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="5000" readOnly/>
                    <input type="text" id="odstupanje6" name="odstupanje6" className="rezultatiInput"/>
                    <input type="text" id="ndg6" name="ndg6" className="rezultatiInput" placeholder="NDG"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="6000" readOnly/>
                    <input type="text" id="odstupanje7" name="odstupanje7" className="rezultatiInput"/>
                    <input type="text" id="ndg7" name="ndg7" className="rezultatiInput" placeholder="NDG"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="7000" readOnly/>
                    <input type="text" id="odstupanje8" name="odstupanje8" className="rezultatiInput"/>
                    <input type="text" id="ndg8" name="ndg8" className="rezultatiInput" placeholder="NDG"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="8000" readOnly/>
                    <input type="text" id="odstupanje9" name="odstupanje9" className="rezultatiInput"/>
                    <input type="text" id="ndg9" name="ndg9" className="rezultatiInput" placeholder="NDG"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="9000" readOnly/>
                    <input type="text" id="odstupanje10" name="odstupanje10" className="rezultatiInput"/>
                    <input type="text" id="ndg10" name="ndg10" className="rezultatiInput" placeholder="NDG"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="10000" readOnly/>
                    <input type="text" id="odstupanje11" name="odstupanje11" className="rezultatiInput"/>
                    <input type="text" id="ndg11" name="ndg11" className="rezultatiInput" placeholder="NDG"/>
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
                    <input type="text" id="ndg12" name="ndg12" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="NDR" readOnly/>
                    <input type="text" id="ndr1" name="ndr1" className="rezultatiInput"/>
                </div>


                <label htmlFor="brojMernogLenjira">Serijski broj Mernog lenjira:</label>
                <select id="brojMernogLenjira" name="brojMernogLenjira">
                    <option value="opcija1">Opcija 1</option>
                    <option value="opcija2">Opcija 2</option>
                    <option value="opcija3">Opcija 3</option>
                </select><br/>

                <label htmlFor="brojMerneLupe">Serijski broj Merne lupe:</label>
                <select id="brojMerneLupe" name="brojMerneLupe">
                    <option value="opcija1">Opcija 1</option>
                    <option value="opcija2">Opcija 2</option>
                    <option value="opcija3">Opcija 3</option>
                </select><br/>

                <label htmlFor="skinutiZigovi1">Skinuti žigovi (razdvojiti znakom ;):</label>
                <input type="text" id="skinutiZigovi" name="skinutiZigovi"/><br/>

                <label htmlFor="stavljeniZigovi1">Stavljeni žigovi (razdvojiti znakom ;):</label>
                <input type="text" id="postavljeniZigovi" name="postavljeniZigovi"/><br/>

                <label className="container">
                    <h2>Merna traka ispunjava propisane zahteve:</h2>
                    <input type="radio" id="ispunjava" name="meriloIspunjavaZahteve" value="DA"/>
                    <label htmlFor="ispunjava">DA</label>
                    <input type="radio" id="neIspunjava" name="meriloIspunjavaZahteve" value="NE"/>
                    <label htmlFor="neIspunjava">NE</label>
                </label>

                <label htmlFor="komentar">Komentar:</label>
                <textarea id="komentar" name="komentar" rows="4" cols="50"></textarea><br/>

                <label htmlFor="datum">Datum:</label>
                <input type="date" id="datum" name="datum"/><br/>

                <input type="submit" value="Potvrdi"/>
            </form>
        </div>
    );
};

export default MernaTraka;
