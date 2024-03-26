import React, {useEffect, useState} from 'react';
import "../styles/MernaTraka.css";

const MernaTraka = () => {
    const [vrsteKontrolisanja, setVrsteKontrolisanja] = useState([]);
    const [kompanije, setKompanije] = useState([]);
    const [podnosilacZahteva, setPodnosilacZahteva] = useState('');
    const [vlasnikKorisnik, setVlasnikKorisnik] = useState('');


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


                <label>Greska podeljka skale:</label><br/>
                <div className="rezultatiContainer">
                    <input type="text" id="greska1" name="greska1" className="rezultatiInput"
                           placeholder={"Greška podeljka skale"}/>
                    <input type="text" id="greskaPodeljka1" name="greskaPodeljka1" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" id="greska2" name="greska2" className="rezultatiInput"
                           placeholder={"Greška podeljka skale"}/>
                    <input type="text" id="greskaPodeljka2" name="greskaPodeljka2" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" id="greska3" name="greska3" className="rezultatiInput"
                           placeholder={"Greška podeljka skale"}/>
                    <input type="text" id="greskaPodeljka3" name="greskaPodeljka3" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" id="greska4" name="greska4" className="rezultatiInput"
                           placeholder={"Greška podeljka skale"}/>
                    <input type="text" id="greskaPodeljka4" name="greskaPodeljka4" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" id="greska5" name="greska5" className="rezultatiInput"
                           placeholder={"Greška podeljka skale"}/>
                    <input type="text" id="greskaPodeljka5" name="greskaPodeljka5" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" id="greska6" name="greska6" className="rezultatiInput"
                           placeholder={"Greška podeljka skale"}/>
                    <input type="text" id="greskaPodeljka6" name="greskaPodeljka6" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" id="greska7" name="greska7" className="rezultatiInput"
                           placeholder={"Greška podeljka skale"}/>
                    <input type="text" id="greskaPodeljka7" name="greskaPodeljka7" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" id="greska8" name="greska8" className="rezultatiInput"
                           placeholder={"Greška podeljka skale"}/>
                    <input type="text" id="greskaPodeljka8" name="greskaPodeljka8" className="rezultatiInput"/>
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
