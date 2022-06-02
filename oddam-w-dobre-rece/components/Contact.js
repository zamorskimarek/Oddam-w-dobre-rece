import styles from "../styles/Contact.module.scss";
import Image from "next/image";
import {useState} from "react";


export default function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    function validateForm() {
        if (message.length < 120) {
            return true
        } else return false
    }

    function handleSend(e) {
        e.preventDefault()
        console.log("wyslano")
        const data = {
            name: name,
            email: email,
            message: message
        }
        fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const regEx =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return (
        <>
            <div className={styles.heroContainer}>
                <div className={styles.bckgrndOverlay}>
                    <div className={styles.heroInfo}>
                        <div>
                            <h2>Skontaktuj się z nami</h2>
                        </div>
                        <div>
                            <Image src="/Decoration.svg" width="253px" height="33px"></Image>
                        </div>
                        <div>
                            <form onSubmit={handleSend}>
                                <div className={styles.nameAndEmail}>
                                    <div className={styles.inputCont}>
                                        <label htmlFor="contactName">Wpisz swoje imię</label>
                                        <input type="text" id="contactName" pattern=".[^-\s]{1,}" onChange={(e) => setName(e.target.value)}></input>
                                    </div>
                                    <div className={styles.inputCont}>
                                        <label htmlFor="contactEmail">Wpisz swój email</label>
                                        <input type="text" id="contactEmail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={(e) => setEmail(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className={styles.inputCont}>
                                    <label htmlFor="contactMsg">Wpisz swoją wiadomość</label>
                                    <textarea id="contactMsg" onChange={(e) => setMessage(e.target.value)}></textarea>
                                </div>
                                <div className={styles.sendBtn}>
                                    <button type="submit" disabled={validateForm()}>Wyslij</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}