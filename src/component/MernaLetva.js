import React from 'react';
import "../styles/MernaLetva.css";
const MernaLetva = () => {
    return (
        <div>
            <h2>Merna letva</h2>
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

                <label htmlFor="proizvodjac">Proizvodjac:</label>
                <input type={"text"} id={"proizvodjaci"} list={"kompanije"}/>
                <datalist id={"proizvodjaci"}>
                    <option>Opcija 1</option>
                    <option>Opcija 2</option>
                </datalist>
                <br/>

                <label htmlFor="oznakaModela">Oznaka tipa/modela:</label>
                <input type="text" id="oznakaModela" name="oznakaModela"/><br/>

                <label htmlFor="sluzbenaOznaka">Sluzbena oznaka tipa/broj izjave o usaglasenosti:</label>
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
                </select><br/>

                <label className="container">
                    <h2>Merna letva je funkcionalno ispravna:</h2>
                    <input type="radio" id="da" name="funkcionalnaIspravnost" value="da" />
                    <label htmlFor="da">DA</label>
                    <input type="radio" id="ne" name="funkcionalnaIspravnost" value="ne" />
                    <label htmlFor="ne">NE</label>
                </label>

                <label htmlFor="napomena">Napomena:</label>
                <textarea id="napomena" name="napomena" rows="4" cols="50"></textarea><br/>

                <label>Odstupanje od nazivne mere:</label><br/>
                <div className="rezultatiContainer">
                    <input type="text" value="500" readOnly />
                    <input type="text" id="rezultat500" name="rezultat500" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="1000" readOnly />
                    <input type="text" id="rezultat1000" name="rezultat1000" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="1500" readOnly />
                    <input type="text" id="rezultat1500" name="rezultat1500" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="2000" readOnly />
                    <input type="text" id="rezultat2000" name="rezultat2000" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="2500" readOnly />
                    <input type="text" id="rezultat2500" name="rezultat2500" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="3000" readOnly />
                    <input type="text" id="rezultat3000" name="rezultat3000" className="rezultatiInput"/>
                </div>


                <label>Greska podeljka skale:</label>
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

                <label htmlFor="skinutiZigovi1">Skinuti Zigovi:</label>
                <input type="text" id="skinutiZigovi1" name="skinutiZigovi1"/>
                <input type="text" id="skinutiZigovi2" name="skinutiZigovi2"/><br/>

                <label htmlFor="stavljeniZigovi1">Stavljeni Zigovi:</label>
                <input type="text" id="stavljeniZigovi1" name="stavljeniZigovi1"/>
                <input type="text" id="stavljeniZigovi2" name="stavljeniZigovi2"/><br/>

                <label className="container">
                    <h2>Merna letva ispunjava propisane zahteve:</h2>
                    <input type="radio" id="ispunjava" name="ispunjava" value="ispunjava" />
                    <label htmlFor="ispunjava">DA</label>
                    <input type="radio" id="neIspunjava" name="ispunjava" value="neIspunjava" />
                    <label htmlFor="neIspunjava">NE</label>
                </label>

                <label htmlFor="komentar">Komentar:</label>
                <textarea id="komentar" name="komentar" rows="4" cols="50"></textarea> 

                <label htmlFor="datum">Datum:</label>
                <input type="date" id="datum" name="datum"/><br/>

                <input type="submit" value="Potvrdi"/>
            </form>
        </div>
    );
};

export default MernaLetva;
