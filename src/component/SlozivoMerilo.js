import React from 'react';
import "../styles/SlozivoMerilo.css";

const SlozivoMerilo = () => {
    return (
        <div>
            <h2>Složivo merilo</h2>
            <form>
                <label htmlFor="zapisnikBroj">Zapisnik Broj:</label>
                <input type="text" id="zapisnikBroj" name="zapisnikBroj"/><br/>

                <label htmlFor="vrstaKontrolisanja">Vrsta kontrolisanja/overavanja:</label>
                <select id="vrstaKontrolisanja" name="vrstaKontrolisanja">
                    <option value="opcija1">Opcija 1</option>
                    <option value="opcija2">Opcija 2</option>
                    <option value="opcija3">Opcija 3</option>
                </select><br/>

                <label htmlFor="podnosilacZahteva">Podnosilac zahteva:</label>
                <input type={"text"} id={"podnosilacZahteva"} list={"kompanije"}/>
                <datalist id={"kompanije"}>
                    <option>Option 1</option>
                    <option>Option 2</option>
                </datalist>
                <br/>

                <label htmlFor="vlasnikKorisnik">Vlasnik/korisnik:</label>
                <input type={"text"} id={"vlasnikKorisnik"} list={"kompanije"}/>


                <label htmlFor="serijskiBroj">Serijski broj:</label>
                <input type="text" id="serijskiBroj" name="serijskiBroj"/><br/>

                <label htmlFor="identifikacioniBroj">Identifikacioni broj:</label>
                <input type="text" id="identifikacioniBroj" name="identifikacioniBroj"/><br/>

                <label htmlFor="proizvodjac">Proizvodjač:</label>
                <input type={"text"} id={"proizvodjaci"} list={"kompanije"}/>
                <datalist id={"proizvodjaci"}>
                    <option>Opcija 1</option>
                    <option>Opcija 2</option>
                </datalist>
                <br/>

                <label htmlFor="oznakaModela">Oznaka tipa/modela:</label>
                <input type="text" id="oznakaModela" name="oznakaModela"/><br/>

                <label htmlFor="sluzbenaOznaka">Službena oznaka tipa/broj izjave o usaglašenosti:</label>
                <select id="sluzbenaOznaka" name="sluzbenaOznaka">
                    <option value="predlog1">Predlog 1</option>
                    <option value="predlog2">Predlog 2</option>
                    <option value="predlog3">Predlog 3</option>
                </select><br/>

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

                <label className="container">
                    <h2>Merilo je funkcionalno ispravno:</h2>
                    <input type="radio" id="da" name="funkcionalnaIspravnost" value="da" />
                    <label htmlFor="da">DA</label>
                    <input type="radio" id="ne" name="funkcionalnaIspravnost" value="ne" />
                    <label htmlFor="ne">NE</label>
                </label>

                <label>Uslovi okoline:</label>
                <div className="rezultatiContainer">
                    <input type="text" value="Temperatura" readOnly />
                    <input type="text" id="temperatura" name="temperatura" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="Vlažnost vazduha" readOnly />
                    <input type="text" id="vlaznost" name="vlaznost" className="rezultatiInput"/>
                </div>

                <label htmlFor="napomena">Napomena:</label>
                <textarea id="napomena" name="napomena" rows="4" cols="50"></textarea><br/>

                <label>Odstupanje od nazivne mere:</label>
                <div className="rezultatiContainer">
                    <input type="text" value="20" readOnly />
                    <input type="text" id="rezultat20" name="rezultat20" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="40" readOnly />
                    <input type="text" id="rezultat40" name="rezultat40" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="60" readOnly />
                    <input type="text" id="rezultat60" name="rezultat60" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="80" readOnly />
                    <input type="text" id="rezultat80" name="rezultat80" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="100" readOnly />
                    <input type="text" id="rezultat100" name="rezultat100" className="rezultatiInput"/>
                </div>


                <label>Greška podeljka skale:</label>
                <div className="rezultatiContainer">
                    <input type="text" id="greska1" name="greska1" className="rezultatiInput" placeholder={"Greška podeljka skale"}/>
                    <input type="text" id="rezultat1" name="rezultat1" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" id="greska2" name="greska2" className="rezultatiInput" placeholder={"Greška podeljka skale"}/>
                    <input type="text" id="rezultat2" name="rezultat2" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" id="greska3" name="greska3" className="rezultatiInput" placeholder={"Greška podeljka skale"}/>
                    <input type="text" id="rezultat3" name="rezultat3" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" id="greska4" name="greska4" className="rezultatiInput" placeholder={"Greška podeljka skale"}/>
                    <input type="text" id="rezultat4" name="rezultat4" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" id="greska5" name="greska5" className="rezultatiInput" placeholder={"Greška podeljka skale"}/>
                    <input type="text" id="rezultat5" name="rezultat5" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" id="greska6" name="greska6" className="rezultatiInput" placeholder={"Greška podeljka skale"}/>
                    <input type="text" id="rezultat6" name="rezultat6" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" id="greska7" name="greska7" className="rezultatiInput" placeholder={"Greška podeljka skale"}/>
                    <input type="text" id="rezultat7" name="rezultat7" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" id="greska8" name="greska8" className="rezultatiInput" placeholder={"Greška podeljka skale"}/>
                    <input type="text" id="rezultat8" name="rezultat8" className="rezultatiInput"/>
                </div>


                <label htmlFor="merniLenjir">Serijski broj Mernog lenjira:</label>
                <select id="merniLenjir" name="merniLenjir">
                    <option value="opcija1">Opcija 1</option>
                    <option value="opcija2">Opcija 2</option>
                    <option value="opcija3">Opcija 3</option>
                </select><br/>

                <label htmlFor="mernaLupa">Serijski broj Merne lupe:</label>
                <select id="mernaLupa" name="mernaLupa">
                    <option value="opcija1">Opcija 1</option>
                    <option value="opcija2">Opcija 2</option>
                    <option value="opcija3">Opcija 3</option>
                </select><br/>

                <label htmlFor="skinutiZigovi1">Skinuti žigovi (razdvojiti znakom ;):</label>
                <input type="text" id="skinutiZigovi" name="skinutiZigovi"/><br/>

                <label htmlFor="stavljeniZigovi1">Stavljeni žigovi (razdvojiti znakom ;):</label>
                <input type="text" id="stavljeniZigovi" name="stavljeniZigovi"/><br/>

                <label className="container">
                    <h2>Merilo ispunjava propisane zahteve:</h2>
                    <input type="radio" id="ispunjava" name="ispunjava" value="ispunjava" />
                    <label htmlFor="ispunjava">DA</label>
                    <input type="radio" id="neIspunjava" name="ispunjava" value="neIspunjava" />
                    <label htmlFor="neIspunjava">NE</label>
                </label><br/>


                <label htmlFor="komentar">Komentar:</label>
                <textarea id="komentar" name="komentar" rows="4" cols="50"></textarea><br/>

                <label htmlFor="datum">Datum:</label>
                <input type="date" id="datum" name="datum"/><br/><br/>

                <input type="submit" value="Potvrdi"/>
            </form>
        </div>
    );
};

export default SlozivoMerilo;
