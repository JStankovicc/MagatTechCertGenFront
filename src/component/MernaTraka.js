import React from 'react';

const MernaTraka = () => {
    return (
        <div>
            <h2>Merna traka sa viskom</h2>
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
                    <label htmlFor="rezultat0" className="rezultatiLabel">0:</label>
                    <input type="text" id="rezultat0" name="rezultat0" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="rezultat1000" className="rezultatiLabel">1000:</label>
                    <input type="text" id="rezultat1000" name="rezultat1000" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="rezultat2000" className="rezultatiLabel">2000:</label>
                    <input type="text" id="rezultat2000" name="rezultat2000" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="rezultat3000" className="rezultatiLabel">3000:</label>
                    <input type="text" id="rezultat3000" name="rezultat3000" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="rezultat4000" className="rezultatiLabel">4000:</label>
                    <input type="text" id="rezultat4000" name="rezultat4000" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="rezultat5000" className="rezultatiLabel">5000:</label>
                    <input type="text" id="rezultat5000" name="rezultat5000" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="rezultat6000" className="rezultatiLabel">6000:</label>
                    <input type="text" id="rezultat6000" name="rezultat6000" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="rezultat7000" className="rezultatiLabel">7000:</label>
                    <input type="text" id="rezultat7000" name="rezultat7000" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="rezultat8000" className="rezultatiLabel">8000:</label>
                    <input type="text" id="rezultat8000" name="rezultat8000" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="rezultat9000" className="rezultatiLabel">9000:</label>
                    <input type="text" id="rezultat9000" name="rezultat9000" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="rezultat10000" className="rezultatiLabel">10000:</label>
                    <input type="text" id="rezultat10000" name="rezultat10000" className="rezultatiInput"/>
                </div>


                <label>Greska podeljka skale:</label><br/>
                <div className="rezultatiContainer">
                    <label htmlFor="podeljak660661" className="rezultatiLabel">660-661:</label>
                    <input type="text" id="rezultat660661" name="rezultat660661" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="podeljak661662" className="rezultatiLabel">661-662:</label>
                    <input type="text" id="rezultat661662" name="rezultat661662" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="podeljak13501351" className="rezultatiLabel">1350-1351:</label>
                    <input type="text" id="rezultat13501351" name="rezultat13501351" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="podeljak13511352" className="rezultatiLabel">1351-1352:</label>
                    <input type="text" id="rezultat13511352" name="rezultat13511352" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="podeljak58005801" className="rezultatiLabel">5800-5801:</label>
                    <input type="text" id="rezultat58005801" name="rezultat58005801" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="podeljak58015802" className="rezultatiLabel">5801-5802:</label>
                    <input type="text" id="rezultat58015802" name="rezultat58015802" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="podeljak86508651" className="rezultatiLabel">8650-8651:</label>
                    <input type="text" id="rezultat86508651" name="rezultat86508651" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                <label htmlFor="podeljak86518652" className="rezultatiLabel">8651-8652:</label>
                    <input type="text" id="rezultat86518652" name="rezultat86518652" className="rezultatiInput"/>
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
};

export default MernaTraka;
