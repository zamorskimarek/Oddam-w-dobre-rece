import React, {useRef, useState} from "react";
import {Alert} from "react-bootstrap";
import  { useAuth } from "../contexts/AuthContext";
// import {Link } from "react-router-dom";
import { useRouter } from "next/router";
import Link from "next/link";
import Menu from "../components/Menu";
import style from "../styles/Signup.module.scss";
import Image from "next/image";
import MenuForLogins from "../components/MenuForLogins";

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login }  = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)

            router.push("/")
        } catch {
            setError("Failed to sign in")
        }

        setLoading(false)
    }

    return (
        <>
            <MenuForLogins></MenuForLogins>
            <div className={style.container}>
                <div>
                    <h2>Zaloguj się</h2>
                    <div>
                        <Image src={require("../public/Decoration.svg")} width="253px" height="33px"></Image>
                    </div>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <form onSubmit={handleSubmit} className={style.formCont}>
                        <div id="email" className={style.inputCont}>
                            <label>Email</label>
                            <input type="email" ref={emailRef } required></input>
                        </div>
                        <div id="password" className={style.inputCont}>
                            <label>Hasło</label>
                            <input type="password" ref={passwordRef} required></input>
                        </div>
                        <div className={style.butonCont}>
                            <button><Link href="/signup"><a>Załóż konto</a></Link></button>
                            <button disabled={loading} className={style.active} type="submit">Zaloguj się</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}