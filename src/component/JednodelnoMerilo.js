import React, {useEffect, useState} from 'react';
import "../styles/JednodelnoMerilo.css"

const JednodelnoMerilo = () => {
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

        fetch('http://localhost:8080/api/v1/jednodelnoMerilo/add', {
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
                <h2>Jednodelno Merilo</h2>
                <form onSubmit={handleSubmit}>
                    <input type="hidden" id="token" name="token" value={localStorage.getItem('jwtToken')}/>

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
                    <select id="merniOpseg" name="merniOpseg">
                        <option value="opcija1">Opcija 1</option>
                        <option value="opcija2">Opcija 2</option>
                        <option value="opcija3">Opcija 3</option>
                    </select><br/>

                    <label htmlFor="najmanjiPodeljak">Najmanji podeljak:</label>
                    <select id="najmanjiPodeljak" name="najmanjiPodeljak">
                        <option value="opcija1">Opcija 1</option>
                        <option value="opcija2">Opcija 2</option>
                        <option value="opcija3">Opcija 3</option>
                    </select><br/>

                    <label htmlFor="klasaTacnosti">Klasa tacnosti:</label>
                    <select id="klasaTacnosti" name="klasaTacnosti">
                        <option value="opcija1">Opcija 1</option>
                        <option value="opcija2">Opcija 2</option>
                        <option value="opcija3">Opcija 3</option>
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
                        <input type="text" id="greska9" name="greska9" className="rezultatiInput"
                               placeholder={"Greška podeljka skale"}/>
                        <input type="text" id="greskaPodeljka9" name="greskaPodeljka9" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <input type="text" id="greska10" name="greska10" className="rezultatiInput"
                               placeholder={"Greška podeljka skale"}/>
                        <input type="text" id="greskaPodeljka10" name="greskaPodeljka10" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <input type="text" id="greska11" name="greska11" className="rezultatiInput"
                               placeholder={"Greška podeljka skale"}/>
                        <input type="text" id="greskaPodeljka11" name="greskaPodeljka11" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <input type="text" id="greska12" name="greska12" className="rezultatiInput"
                               placeholder={"Greška podeljka skale"}/>
                        <input type="text" id="greskaPodeljka12" name="greskaPodeljka12" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <input type="text" id="greska13" name="greska13" className="rezultatiInput"
                               placeholder={"Greška podeljka skale"}/>
                        <input type="text" id="greskaPodeljka13" name="greskaPodeljka13" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <input type="text" id="greska14" name="greska14" className="rezultatiInput"
                               placeholder={"Greška podeljka skale"}/>
                        <input type="text" id="greskaPodeljka14" name="greskaPodeljka14" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <input type="text" id="greska15" name="greska15" className="rezultatiInput"
                               placeholder={"Greška podeljka skale"}/>
                        <input type="text" id="greskaPodeljka15" name="greskaPodeljka15" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <input type="text" id="greska16" name="greska16" className="rezultatiInput"
                               placeholder={"Greška podeljka skale"}/>
                        <input type="text" id="greskaPodeljka16" name="greskaPodeljka16" className="rezultatiInput"/>
                    </div>


                    <div className="rezultatiContainer">
                        <input type="text" value="NDG" readOnly/>
                        <input type="text" id="ndg4" name="ndg4" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <input type="text" value="NDR" readOnly/>
                        <input type="text" id="ndr2" name="ndr2" className="rezultatiInput"/>
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

                    <label htmlFor="skinutiZigovi">Skinuti žigovi (razdvojiti znakom ;):</label>
                    <input type="text" id="skinutiZigovi" name="skinutiZigovi"/><br/>

                    <label htmlFor="postavljeniZigovi">Stavljeni žigovi (razdvojiti znakom ;):</label>
                    <input type="text" id="postavljeniZigovi" name="postavljeniZigovi"/><br/>

                    <label className="container">
                        <h2>Merilo ispunjava propisane zahteve:</h2>
                        <input type="radio" id="meriloIspunjavaZahteve" name="meriloIspunjavaZahteve" value="DA"/>
                        <label htmlFor="meriloIspunjavaZahteve">DA</label>
                        <input type="radio" id="neIspunjava" name="meriloIspunjavaZahteve" value="NE"/>
                        <label htmlFor="neIspunjava">NE</label>
                    </label><br/>


                    <label htmlFor="komentar2">Komentar:</label>
                    <textarea id="komentar2" name="komentar2" rows="4" cols="50"></textarea><br/>

                    <label htmlFor="datum">Datum:</label>
                    <input type="date" id="datum" name="datum"/><br/><br/>

                    <input type="submit" value="Potvrdi"/>
                </form>
            </div>
    );
}

export default JednodelnoMerilo;
