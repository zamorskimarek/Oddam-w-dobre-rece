import styles from "../styles/GivAwayForm.module.scss"
import styles2 from "../styles/ImportantYellowField.module.scss"
import {useEffect, useState} from "react";
import Image from "next/image";


export default function GivAwayForm() {

    const [step, setStep] = useState(1)
    const [radio1, setRadio1] = useState("")
    const [bags, setBags] = useState("0")
    const [location, setLocation] = useState("")
    const [helpGroups, setHelpGroups] = useState({
        kids : false,
        mothers : false,
        homeless : false,
        handicapped : false,
        elder : false,
    })
    const [localizationSpecific, setLocalizationSpecific] = useState("")
    const [details, setDetails] = useState({
        street: "",
        city: "",
        postcode: "",
        phone: "",
        date : "",
        time: "",
        note: ""
    })

    function validateStep3() {
        if (helpGroups.kids || helpGroups.mothers || helpGroups.homeless || helpGroups.handicapped|| helpGroups.elder) {
            if (localizationSpecific !== "" || location !== "") {
                console.log("dziala")
                return true
            } else {
                console.log("nie dziala")
                return false
            }
        } else {
            console.log("nie dziala")
            return false
        }
    }

    function validateStep4() {
        if (details.street !== "" && details.city !== "" && details.postcode !== "" && details.phone !== "" && details.date !== "" && details.time !== "") {
            console.log("drugi dziala")
            return false
        } else {
            console.log("drugi NIE dziala")
            return true
        }
    }

    useEffect(() => {
        validateStep3()
    },[helpGroups, location, localizationSpecific])

    useEffect(() => {
        validateStep4()
    },[details])


    function handleNext(e) {
        e.preventDefault()
        setStep(prevState => prevState + 1)
    }



    return (
        <>
            <div className={styles2.container}>
                <h2>Ważne!</h2>
                {step === 1 && <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>}
                {step === 2 && <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>}
                {step === 3 && <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>}
                {step === 4 && <p>Podaj adres oraz termin odbioru rzeczy.</p>}
            </div>
            <div className={styles.bckgrndCont}>


                {step === 1 && <div className={styles.container}>
                    {step <= 4 && <div className={styles.counter}>
                        <span>Krok {step}/4</span>
                    </div>}
                    <form onSubmit={handleNext}>
                        <fieldset className={styles.step1}>
                            <legend>Zaznacz co chcesz oddać:</legend>
                            <div className={styles.radioInputsCont}>
                                <div className={styles.radioSingleInput}>
                                    <input type="radio" id="radio1" name="typeOFThingsToGiveAway" onChange={() => setRadio1("ubrania, które nadają się do ponownego użycia")}/>
                                    <label htmlFor="radio1">ubrania, które nadają się do ponownego użycia</label>
                                </div>
                                <div className={styles.radioSingleInput}>
                                    <input type="radio" name="typeOFThingsToGiveAway" id="radio2" onChange={() => setRadio1("ubrania, do wyrzucenia")}/>
                                    <label htmlFor="radio2">ubrania, do wyrzucenia</label>
                                </div>
                                <div className={styles.radioSingleInput}>
                                    <input type="radio" name="typeOFThingsToGiveAway" id="radio3" onChange={() => setRadio1("zabawki")}/>
                                    <label htmlFor="radio3">zabawki</label>
                                </div>
                                <div className={styles.radioSingleInput}>
                                    <input type="radio" name="typeOFThingsToGiveAway" id="radio4" onChange={() => setRadio1("książki")}/>
                                    <label htmlFor="radio4">książki</label>
                                </div>
                                <div className={styles.radioSingleInput}>
                                    <input type="radio" name="typeOFThingsToGiveAway" id="radio5" onChange={() => setRadio1("inne")}/>
                                    <label htmlFor="radio5">inne</label>
                                </div>
                            </div>
                            <div>
                                <button type="submit" disabled={radio1 === "" ? true : false}>Dalej</button>
                            </div>
                        </fieldset>
                    </form>
                </div>}

                {step === 2 && <div className={styles.container}>
                    {step <= 4 && <div className={styles.counter}>
                        <span>Krok {step}/4</span>
                    </div>}
                    <form onSubmit={handleNext}>
                        <fieldset className={styles.step2}>
                            <legend>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</legend>
                            <label htmlFor="select1">Liczba 60l worków:</label>
                            <select id="select1" onChange={(e) => setBags(e.target.value)}>
                                <option value={0}>— wybierz —</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <div className={styles.buttonsCont}>
                                <button type="button" onClick={() => setStep(prevState => prevState - 1)}>Wstecz</button>
                                <button type="submit" disabled={bags === "0" ? true : false}>Dalej</button>
                            </div>
                        </fieldset>
                    </form>
                </div>}

                {step === 3 && <div className={styles.container}>
                    {step <= 4 && <div className={styles.counter}>
                        <span>Krok {step}/4</span>
                    </div>}
                    <form onSubmit={handleNext}>
                        <fieldset className={styles.step3}>
                            <legend>Lokalizacja:</legend>
                            <label htmlFor="select2"></label>
                            <select id="select2" onChange={(e) => setLocation(e.target.value)}>
                                <option value="">— wybierz —</option>
                                <option>Poznań</option>
                                <option>Warszawa</option>
                                <option>Kraków</option>
                                <option>Wrocław</option>
                                <option>Katowice</option>
                            </select>
                        </fieldset>
                        <fieldset>
                            <h3>Komu chcesz pomóc?</h3>
                            <input id="kids" type="checkbox" className={styles.helpGroups} onClick={() => setHelpGroups(prevState => ({...prevState, kids: !prevState.kids }))} /><label htmlFor="kids">dzieciom</label>
                            <input id="mothers" type="checkbox" className={styles.helpGroups} onClick={() => setHelpGroups(prevState => ({...prevState, mothers: !prevState.mothers }))}/><label htmlFor="mothers">samotnym matkom</label>
                            <input id="homeless" type="checkbox" className={styles.helpGroups} onClick={() => setHelpGroups(prevState => ({...prevState, homeless: !prevState.homeless }))}/><label htmlFor="homeless">bezdomnym</label>
                            <input id="handicapped" type="checkbox" className={styles.helpGroups} onClick={() => setHelpGroups(prevState => ({...prevState, handicapped: !prevState.handicapped }))}/><label htmlFor="handicapped">niepełnosprawnym</label>
                            <input id="elder" type="checkbox" className={styles.helpGroups} onClick={() => setHelpGroups(prevState => ({...prevState, elder: !prevState.elder }))}/><label htmlFor="elder">osobom starszym</label>
                        </fieldset>
                        <fieldset className={styles.specific}>
                            <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                            <input type="text" onChange={(e) => setLocalizationSpecific(e.target.value)}></input>
                        </fieldset>
                        <div className={styles.buttonsCont}>
                            <button type="button" onClick={() => setStep(prevState => prevState - 1)}>Wstecz</button>
                            <button type="submit" disabled={!validateStep3()}>Dalej</button>
                        </div>
                    </form>
                </div>}

                {step === 4 && <div className={styles.container}>
                    {step <= 4 && <div className={styles.counter}>
                        <span>Krok {step}/4</span>
                    </div>}
                    <form onSubmit={handleNext}>
                        <fieldset className={styles.step4}>
                            <legend>Podaj adres oraz termin odbioru rzecz przez kuriera</legend>
                            <div className={styles.column}>
                                <h3>Adres odbioru:</h3>
                                <label htmlFor="street">Ulica</label>
                                <input type="text" id="street" pattern=".{2,}" title="minimum 2 znaki" onChange={(e) => setDetails(prevState => ({...prevState, street: e.target.value }))}></input>
                                <label htmlFor="city">Miasto</label>
                                <input type="text" id="city" pattern=".{2,}" title="minimum 2 znaki" onChange={(e) => setDetails(prevState => ({...prevState, city: e.target.value }))}></input>
                                <label htmlFor="postcode">Kod pocztowy</label>
                                <input type="text" id="postcode" pattern="[0-9]{2}-[0-9]{3}" title="XX-XXX" onChange={(e) => setDetails(prevState => ({...prevState, postcode: e.target.value }))}></input>
                                <label htmlFor="phone">Numer telefonu</label>
                                <input type="text" id="phone" pattern="[0-9]{9}" title="9 cyfr" onChange={(e) => setDetails(prevState => ({...prevState, phone: e.target.value }))}></input>
                            </div>
                            <div className={styles.column}>
                                <h3>Termin odbioru:</h3>
                                <label htmlFor="date">Data</label>
                                <input type="date" id="date" onChange={(e) => setDetails(prevState => ({...prevState, date: e.target.value }))}></input>
                                {/*<label htmlFor="time">Godzina</label>*/}
                                {/*<input type="text" id="time" pattern="[0-2]{1}[0-9]{1}:[0-5]{1}[0-9]{1}" title="XX:XX"></input>*/}
                                <label htmlFor="time">Godzina</label>
                                <input type="time" id="time" onChange={(e) => setDetails(prevState => ({...prevState, time: e.target.value }))}></input>
                                <label htmlFor="note">Uwagi dla kuriera</label>
                                <textarea id="note" onChange={(e) => setDetails(prevState => ({...prevState, note: e.target.value }))}></textarea>
                            </div>
                        </fieldset>
                        <div className={styles.buttonsCont}>
                            <button type="button" onClick={() => setStep(prevState => prevState - 1)}>Wstecz</button>
                            <button type="submit" disabled={validateStep4()}>Dalej</button>
                        </div>
                    </form>
                </div>}

                {step === 5 && <div className={styles.container}>
                    <h2>Podsumowanie Twojej darowizny</h2>
                    <div>
                        <h3>Oddajesz:</h3>
                        <div className={styles.summaryGive}>
                            <Image src={require("../public/assets/Icon-1.svg")} width="30px" height="30px"></Image>
                            <span>{bags} worki,{radio1},</span>{helpGroups.kids === true && <span>dzieciom</span>}
                            {helpGroups.mothers === true && <span>samotnym matkom</span>}
                            {helpGroups.homeless === true && <span>bezdomnym</span>}
                            {helpGroups.handicapped === true && <span>niepełnosprawnym</span>}
                            {helpGroups.elder === true && <span>osobom starszym</span>}
                        </div>
                        <div className={styles.summaryGive}>
                            <Image src={require("../public/assets/Icon-4.svg")} width="30px" height="30px"></Image>
                            <span>dla lokacji: {location}</span>{localizationSpecific !== "" && <span>{localizationSpecific}</span>}
                        </div>
                    </div>
                    <div className={styles.detailsCont}>
                        <div>
                            <h3>Adres odbioru:</h3>
                            <div>
                                <div className={styles.detailCont}>
                                    <p>Ulica</p>
                                    <p>{details.street}</p>
                                </div>
                                <div className={styles.detailCont}>
                                    <p>Miasto</p>
                                    <p>{details.city}</p>
                                </div>
                                <div className={styles.detailCont}>
                                    <p>Kod pocztowy</p>
                                    <p>{details.postcode}</p>
                                </div>
                                <div className={styles.detailCont}>
                                    <p>Telefon</p>
                                    <p>{details.phone}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>Termin odbioru:</h3>
                            <div>
                                <div className={styles.detailCont}>
                                    <p>Data</p>
                                    <p>{details.date}</p>
                                </div>
                                <div className={styles.detailCont}>
                                    <p>Godzina</p>
                                    <p>{details.time}</p>
                                </div>
                                <div className={styles.detailCont}>
                                    <p>Uwagi dla kuriera</p>
                                    <p>{details.note}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttonsCont}>
                        <button type="button" onClick={() => setStep(prevState => prevState - 1)}>Wstecz</button>
                        <button type="button" onClick={() => setStep(prevState => prevState + 1)}>Potwierdzam</button>
                    </div>
                </div>}

                {step === 6 && <div className={styles.thankYou}>
                    <h5>Dziękujemy za przesłanie formularza<br></br> Na maila prześlemy wszelkie <br></br> informacje o odbiorze.</h5>
                    <Image src="/Decoration.svg" width="253px" height="33px"></Image>
                </div>}
            </div>
        </>
    )
}