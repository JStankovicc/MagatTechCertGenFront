import React from 'react';
import "../styles/JednodelnoMerilo.css"

const JednodelnoMerilo = () => {
        return (
            <div>
                <h2>Jednodelno Merilo</h2>
                <form>
                    <label htmlFor="zapisnikBroj">Zapisnik Broj:</label><br/>
                    <input type="text" id="zapisnikBroj" name="zapisnikBroj"/><br/><br/>

                    <label htmlFor="vrstaKontrolisanja">Vrsta kontrolisanja/overavanja:</label><br/>
                    <select id="vrstaKontrolisanja" name="vrstaKontrolisanja">
                        <option value="opcija1">Opcija 1</option>
                        <option value="opcija2">Opcija 2</option>
                        <option value="opcija3">Opcija 3</option>
                    </select><br/><br/>

                    <label htmlFor="podnosilacZahteva">Podnosilac zahteva:</label><br/>
                    <input type={"text"} id={"podnosilacZahteva"} list={"kompanije"}/>
                    <datalist id={"kompanije"}>
                        <option>Option 1</option>
                        <option>Option 2</option>
                    </datalist>
                    <br/><br/>

                    <label htmlFor="vlasnikKorisnik">Vlasnik/korisnik:</label><br/>
                    <input type={"text"} id={"vlasnikKorisnik"} list={"kompanije"}/>


                    <label htmlFor="serijskiBroj">Serijski broj:</label><br/>
                    <input type="text" id="serijskiBroj" name="serijskiBroj"/><br/><br/>

                    <label htmlFor="identifikacioniBroj">Identifikacioni broj:</label><br/>
                    <input type="text" id="identifikacioniBroj" name="identifikacioniBroj"/><br/><br/>

                    <label htmlFor="proizvodjac">Proizvodjac:</label><br/>
                    <input type={"text"} id={"proizvodjaci"} list={"kompanije"}/>
                    <datalist id={"proizvodjaci"}>
                        <option>Opcija 1</option>
                        <option>Opcija 2</option>
                    </datalist>
                    <br/><br/>

                    <label htmlFor="oznakaModela">Oznaka tipa/modela:</label><br/>
                    <input type="text" id="oznakaModela" name="oznakaModela"/><br/><br/>

                    <label htmlFor="sluzbenaOznaka">Sluzbena oznaka tipa/broj izjave o usaglasenosti:</label><br/>
                    <select id="sluzbenaOznaka" name="sluzbenaOznaka">
                        <option value="predlog1">Predlog 1</option>
                        <option value="predlog2">Predlog 2</option>
                        <option value="predlog3">Predlog 3</option>
                    </select><br/><br/>

                    <label htmlFor="merniOpseg">Merni opseg:</label><br/>
                    <select id="merniOpseg" name="merniOpseg">
                        <option value="opcija1">Opcija 1</option>
                        <option value="opcija2">Opcija 2</option>
                        <option value="opcija3">Opcija 3</option>
                    </select><br/><br/>

                    <label htmlFor="najmanjiPodeljak">Najmanji podeljak:</label><br/>
                    <select id="najmanjiPodeljak" name="najmanjiPodeljak">
                        <option value="opcija1">Opcija 1</option>
                        <option value="opcija2">Opcija 2</option>
                        <option value="opcija3">Opcija 3</option>
                    </select><br/><br/>

                    <label htmlFor="klasaTacnosti">Klasa tacnosti:</label><br/>
                    <select id="klasaTacnosti" name="klasaTacnosti">
                        <option value="opcija1">Opcija 1</option>
                        <option value="opcija2">Opcija 2</option>
                        <option value="opcija3">Opcija 3</option>
                    </select><br/><br/>

                    <label>Funkcionalna ispravnost:</label><br/>
                    <input type="radio" id="da" name="funkcionalnaIspravnost" value="da"/>
                    <label htmlFor="da">DA</label><br/>
                    <input type="radio" id="ne" name="funkcionalnaIspravnost" value="ne"/>
                    <label htmlFor="ne">NE</label><br/><br/>

                    <label htmlFor="napomena">Napomena:</label><br/>
                    <textarea id="napomena" name="napomena" rows="4" cols="50"></textarea><br/><br/>

                    <label>Odstupanje od nazivne mere:</label><br/>
                    <div className="rezultatiContainer">
                        <label htmlFor="rezultat20" className="rezultatiLabel">20:</label>
                        <input type="text" id="rezultat20" name="rezultat20" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <label htmlFor="rezultat40" className="rezultatiLabel">40:</label>
                        <input type="text" id="rezultat40" name="rezultat40" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <label htmlFor="rezultat60" className="rezultatiLabel">60:</label>
                        <input type="text" id="rezultat60" name="rezultat60" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <label htmlFor="rezultat80" className="rezultatiLabel">80:</label>
                        <input type="text" id="rezultat80" name="rezultat80" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <label htmlFor="rezultat100" className="rezultatiLabel">100:</label>
                        <input type="text" id="rezultat100" name="rezultat100" className="rezultatiInput"/>
                    </div>


                    <label>Greska podeljka skale:</label><br/>
                    <div className="rezultatiContainer">
                        <label htmlFor="podeljak2223" className="rezultatiLabel">22-23:</label>
                        <input type="text" id="rezultat2223" name="rezultat2223" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <label htmlFor="podeljak23244" className="rezultatiLabel">23-24:</label>
                        <input type="text" id="rezultat2324" name="rezultat2324" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <label htmlFor="podeljak4546" className="rezultatiLabel">45-46:</label>
                        <input type="text" id="rezultat4546" name="rezultat4546" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <label htmlFor="podeljak4647" className="rezultatiLabel">46-47:</label>
                        <input type="text" id="rezultat4647" name="rezultat4647" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <label htmlFor="podeljak6263" className="rezultatiLabel">62-63:</label>
                        <input type="text" id="rezultat6263" name="rezultat6263" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <label htmlFor="podeljak6364" className="rezultatiLabel">63-64:</label>
                        <input type="text" id="rezultat6364" name="rezultat6364" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <label htmlFor="podeljak7879" className="rezultatiLabel">78-79:</label>
                        <input type="text" id="rezultat7879" name="rezultat7879" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <label htmlFor="podeljak7980" className="rezultatiLabel">79-80:</label>
                        <input type="text" id="rezultat7980" name="rezultat7980" className="rezultatiInput"/>
                    </div>

                    <label>Odstupanje od nazivne mere:</label><br/>
                    <div className="rezultatiContainer">
                        <label htmlFor="rezultat20" className="rezultatiLabel">20:</label>
                        <input type="text" id="rezultat201" name="rezultat201" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <label htmlFor="rezultat40" className="rezultatiLabel">40:</label>
                        <input type="text" id="rezultat401" name="rezultat401" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <label htmlFor="rezultat60" className="rezultatiLabel">60:</label>
                        <input type="text" id="rezultat601" name="rezultat601" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <label htmlFor="rezultat80" className="rezultatiLabel">80:</label>
                        <input type="text" id="rezultat801" name="rezultat801" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <label htmlFor="rezultat100" className="rezultatiLabel">100:</label>
                        <input type="text" id="rezultat1001" name="rezultat1001" className="rezultatiInput"/>
                    </div>

                    <label>Greska podeljka skale:</label><br/>
                    <div className="rezultatiContainer">
                        <label htmlFor="podeljak3132" className="rezultatiLabel">31-32:</label>
                        <input type="text" id="rezultat3132" name="rezultat3132" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <label htmlFor="podeljak3233" className="rezultatiLabel">32-33:</label>
                        <input type="text" id="rezultat3233" name="rezultat3233" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <label htmlFor="podeljak4142" className="rezultatiLabel">41-42:</label>
                        <input type="text" id="rezultat4142" name="rezultat4142" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <label htmlFor="podeljak4243" className="rezultatiLabel">42-43:</label>
                        <input type="text" id="rezultat4243" name="rezultat4243" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <label htmlFor="podeljak5556" className="rezultatiLabel">55-56:</label>
                        <input type="text" id="rezultat5556" name="rezultat5556" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <label htmlFor="podeljak5657" className="rezultatiLabel">56-57:</label>
                        <input type="text" id="rezultat5657" name="rezultat5657" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <label htmlFor="podeljak8586" className="rezultatiLabel">85-86:</label>
                        <input type="text" id="rezultat8586" name="rezultat8586" className="rezultatiInput"/>
                    </div>
                    <div className="rezultatiContainer">
                        <label htmlFor="podeljak8687" className="rezultatiLabel">86-87:</label>
                        <input type="text" id="rezultat8687" name="rezultat8687" className="rezultatiInput"/>
                    </div>


                    <label htmlFor="merniLenjir">Serijski broj Mernog lenjira:</label><br/>
                    <select id="merniLenjir" name="merniLenjir">
                        <option value="opcija1">Opcija 1</option>
                        <option value="opcija2">Opcija 2</option>
                        <option value="opcija3">Opcija 3</option>
                    </select><br/><br/>

                    <label htmlFor="mernaLupa">Serijski broj Merne lupe:</label><br/>
                    <select id="mernaLupa" name="mernaLupa">
                        <option value="opcija1">Opcija 1</option>
                        <option value="opcija2">Opcija 2</option>
                        <option value="opcija3">Opcija 3</option>
                    </select><br/><br/>

                    <label htmlFor="skinutiZigovi1">Skinuti Zigovi:</label><br/>
                    <input type="text" id="skinutiZigovi1" name="skinutiZigovi1"/><br/>
                    <input type="text" id="skinutiZigovi2" name="skinutiZigovi2"/><br/><br/>

                    <label htmlFor="stavljeniZigovi1">Stavljeni Zigovi:</label><br/>
                    <input type="text" id="stavljeniZigovi1" name="stavljeniZigovi1"/><br/>
                    <input type="text" id="stavljeniZigovi2" name="stavljeniZigovi2"/><br/><br/>

                    <label htmlFor="ispunjava">Merilo ispunjava propisane zahteve:</label>
                    <input type="radio" id="ispunjava" name="ispunjava" value="ispunjava"/>
                    <label htmlFor="ispunjava">DA</label><br/>
                    <input type="radio" id="neIspunjava" name="ispunjava" value="neIspunjava"/>
                    <label htmlFor="neIspunjava">NE</label><br/><br/>

                    <label htmlFor="komentar">Komentar:</label><br/>
                    <textarea id="komentar" name="komentar" rows="4" cols="50"></textarea><br/><br/>

                    <label htmlFor="datum">Datum:</label><br/>
                    <input type="date" id="datum" name="datum"/><br/><br/>

                    <input type="submit" value="Potvrdi"/>
                </form>
            </div>
        );
}

export default JednodelnoMerilo;
