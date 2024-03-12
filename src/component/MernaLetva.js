import React from 'react';
import "../styles/MernaLetva.css";
const MernaLetva = () => {
    return (
        <div>
            <h2>Merna letva</h2>
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
                    <label htmlFor="rezultat500" className="rezultatiLabel">500:</label>
                    <input type="text" id="rezultat500" name="rezultat500" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="rezultat1000" className="rezultatiLabel">1000:</label>
                    <input type="text" id="rezultat1000" name="rezultat1000" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="rezultat1500" className="rezultatiLabel">1500:</label>
                    <input type="text" id="rezultat1500" name="rezultat1500" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="rezultat2000" className="rezultatiLabel">2000:</label>
                    <input type="text" id="rezultat2000" name="rezultat2000" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="rezultat2500" className="rezultatiLabel">2500:</label>
                    <input type="text" id="rezultat2500" name="rezultat2500" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="rezultat3000" className="rezultatiLabel">3000:</label>
                    <input type="text" id="rezultat3000" name="rezultat3000" className="rezultatiInput"/>
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
                    <label htmlFor="podeljak15301531" className="rezultatiLabel">1530-1531:</label>
                    <input type="text" id="rezultat15301531" name="rezultat15301531" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="podeljak15311532" className="rezultatiLabel">1531-1532:</label>
                    <input type="text" id="rezultat15311532" name="rezultat15311532" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="podeljak22502251" className="rezultatiLabel">2250-2251:</label>
                    <input type="text" id="rezultat22502251" name="rezultat22502251" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="podeljak22512252" className="rezultatiLabel">2251-2252:</label>
                    <input type="text" id="rezultat22512252" name="rezultat22512252" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="podeljak28632864" className="rezultatiLabel">2863-2864:</label>
                    <input type="text" id="rezultat28632864" name="rezultat28632864" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <label htmlFor="podeljak28642865" className="rezultatiLabel">2864-2865:</label>
                    <input type="text" id="rezultat28642865" name="rezultat28642865" className="rezultatiInput"/>
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

export default MernaLetva;
