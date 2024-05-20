import React, {useEffect, UseEffect, useState, UseState} from 'react';
import "../styles/MasinaZaMerenje.css";

const MasinaZaMerenje = () => {
    const [vrsteKontrolisanja, setVrsteKontrolisanja] = useState([]);
    const [kompanije, setKompanije] = useState([]);
    const [podnosilacZahteva, setPodnosilacZahteva] = useState('');
    const [vlasnikKorisnik, setVlasnikKorisnik] = useState('');

    const [brojZapisnika, setBrojZapisnika] = useState('');


    const handleChangeZapisnik = (event) => {
        setBrojZapisnika(event.target.value);
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

        const endpoint = 'http://localhost:8080/api/v1/masinaZaMerenje/add';

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

        //window.location.reload();
    };
    return (
        <div>
            <h2>Mašina za merenje žica i kablova</h2>
            <form onSubmit={handleSubmit} id="form">
                <input type="hidden" id="token" name="token" value={localStorage.getItem('jwtToken')}/>

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
                        <option key={vrsta.description} value={vrsta.description}>
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

                <label htmlFor="oznakaModela">Oznaka tipa/modela:</label>
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
                    <h2>Mašina je funkcionalno ispravna:</h2>
                    <input type="radio" id="da" name="funkcionalnaIspravnost" value="da"/>
                    <label htmlFor="da">DA</label>
                    <input type="radio" id="ne" name="funkcionalnaIspravnost" value="ne"/>
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

                <label>Prečnik točka mašine:</label><br/>
                <div className="rezultatiContainer">
                    <input type="text" value="1. merenje" readOnly/>
                    <input type="text" id="merenje1" name="merenje1" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="2. merenje" readOnly/>
                    <input type="text" id="merenje2" name="merenje2" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="3. merenje" readOnly/>
                    <input type="text" id="merenje3" name="merenje3" className="rezultatiInput"/>
                </div>

                <label className="container">
                    <h2>Provera ispravnog vođenja mernog materijala (1mm):</h2>
                    <input type="radio" id="ispunjava" name="proveraIspravnogVodjenja" value="ispunjava"/>
                    <label htmlFor="ispunjava">ISPUNJAVA</label>
                    <input type="radio" id="neIspunjava" name="proveraIspravnogVodjenja" value="neIspunjava"/>
                    <label htmlFor="neIspunjava">NE ISPUNJAVA</label>
                    <input type="radio" id="nijePrimenljivo" name="proveraIspravnogVodjenja" value="nijePrimenljivo"/>
                    <label htmlFor="nijePrimenljivo">NIJE PRIMENLJIVO</label>
                </label>

                <label className="container">
                    <h2>Provera ispravnsti pokaznog uređaja:</h2>
                    <input type="radio" id="ispunjava1" name="ispunjava1" value="ispunjava"/>
                    <label htmlFor="ispunjava1">ISPUNJAVA</label>
                    <input type="radio" id="neIspunjava1" name="ispunjava1" value="neIspunjava"/>
                    <label htmlFor="neIspunjava1">NE ISPUNJAVA</label>
                </label>


                <label>Provera ispravnosti uređaja za odmeravanje dužina:</label>
                <div className="rezultatiContainer">
                    <input type="text" value="Dužina uzorka" readOnly/>
                    <input type="text" id="duzinaUzorka" name="duzinaUzorka" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="Debljina uzorka" readOnly/>
                    <input type="text" id="debljinaUzorka" name="debljinaUzorka" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="Pokazivanje mašine" readOnly/>
                    <input type="text" id="pokazivanjeMasine" name="pokazivanjeMasine" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="Odstupanje od stvarne vrednosti dužine" readOnly/>
                    <input type="text" id="rezultaodstupanjeOdPraveVrednostiDuzinet14"
                           name="odstupanjeOdPraveVrednostiDuzine" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="Relativna greška izmerene dužine" readOnly/>
                    <input type="text" id="relativnaGreskaIzmereneDuzine" name="relativnaGreskaIzmereneDuzine"
                           className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="NDG" readOnly/>
                    <input type="text" id="ndg1" name="ndg1" className="rezultatiInput"/>
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

                <label htmlFor="skinutiZigovi1">Skinuti žigovi (razdvojiti znakom ;):</label>
                <input type="text" id="skinutiZigovi" name="skinutiZigovi"/><br/>

                <label htmlFor="stavljeniZigovi1">Stavljeni žigovi (razdvojiti znakom ;):</label>
                <input type="text" id="postavljeniZigovi" name="postavljeniZigovi"/><br/>

                <label className="container">
                    <h2>Mašina ispunjava propisane zahteve:</h2>
                    <input type="radio" id="ispunjava" name="meriloIspunjavaZahteve" value="ispunjava"/>
                    <label htmlFor="ispunjava">DA</label>
                    <input type="radio" id="neIspunjava" name="meriloIspunjavaZahteve" value="neIspunjava"/>
                    <label htmlFor="neIspunjava">NE</label>
                </label>

                <label htmlFor="komentar">Komentar:</label>
                <textarea id="komentar2" name="komentar2" rows="4" cols="50"></textarea>


                <label htmlFor="zapisnikUneo">Zapisnik uneo:</label>
                <select id="etalonirao" name="etalonirao">
                    <option value="1">Opcija 1</option>
                    <option value="2">Opcija 2</option>
                    <option value="3">Opcija 3</option>
                </select><br/>

                <label htmlFor="zapisnikUneo">Zapisnik odobrio:</label>
                <select id="odobrio" name="odobrio">
                    <option value="1">Opcija 1</option>
                    <option value="2">Opcija 2</option>
                    <option value="3">Opcija 3</option>
                </select><br/>


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

export default MasinaZaMerenje;
