import React from 'react';
import "../styles/MasinaZaMerenje.css";

const MasinaZaMerenje = () => {
    return (
        <div>
            <h2>Mašina za merenje žica i kablova</h2>
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
                    <h2>Mašina je funkcionalno ispravna:</h2>
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

                <label>Prečnik točka mašine:</label><br/>
                <div className="rezultatiContainer">
                    <input type="text" value="1. merenje" readOnly />
                    <input type="text" id="rezultat1" name="rezultat1" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="2. merenje" readOnly />
                    <input type="text" id="rezultat2" name="rezultat2" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="3. merenje" readOnly />
                    <input type="text" id="rezultat3" name="rezultat3" className="rezultatiInput"/>
                </div>

                <label className="container">
                    <h2>Provera ispravnog vođenja mernog materijala:</h2>
                    <input type="radio" id="ispunjava" name="ispunjava" value="ispunjava" />
                    <label htmlFor="ispunjava">ISPUNJAVA</label>
                    <input type="radio" id="neIspunjava" name="ispunjava" value="neIspunjava" />
                    <label htmlFor="neIspunjava">NE ISPUNJAVA</label>
                    <input type="radio" id="nijePrimenljivo" name="ispunjava" value="nijePrimenljivo" />
                    <label htmlFor="nijePrimenljivo">NIJE PRIMENLJIVO</label>
                </label>

                <label className="container">
                    <h2>Provera ispravnsti pokaznog uređaja:</h2>
                    <input type="radio" id="ispunjava1" name="ispunjava1" value="ispunjava" />
                    <label htmlFor="ispunjava1">ISPUNJAVA</label>
                    <input type="radio" id="neIspunjava1" name="ispunjava1" value="neIspunjava" />
                    <label htmlFor="neIspunjava1">NE ISPUNJAVA</label>
                </label>


                <label>Provera ispravnosti uređaja za odmeravanje dužina:</label>
                <div className="rezultatiContainer">
                    <input type="text" value="Dužina uzorka" readOnly />
                    <input type="text" id="rezultat11" name="rezultat11" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="Debljina uzorka" readOnly />
                    <input type="text" id="rezultat12" name="rezultat12" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="Pokazivanje mašine" readOnly />
                    <input type="text" id="rezultat13" name="rezultat13" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="Odstupanje od stvarne vrednosti dužine" readOnly />
                    <input type="text" id="rezultat14" name="rezultat14" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="Relativna greška izmerene dužine" readOnly />
                    <input type="text" id="rezultat15" name="rezultat15" className="rezultatiInput"/>
                </div>
                <div className="rezultatiContainer">
                    <input type="text" value="NDG" readOnly />
                    <input type="text" id="rezultat16" name="rezultat16" className="rezultatiInput"/>
                </div>

                <label htmlFor="merniLenjir">Serijski broj Mernog lenjira:</label>
                <select id="merniLenjir" name="merniLenjir">
                    <option value="opcija1">Opcija 1</option>
                    <option value="opcija2">Opcija 2</option>
                    <option value="opcija3">Opcija 3</option>
                </select><br/>

                <label htmlFor="mernaLupa">Serijski broj Pomičnog merila:</label>
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

export default MasinaZaMerenje;
