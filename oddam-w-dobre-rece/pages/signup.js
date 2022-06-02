import React, {useRef, useState} from "react";
import {Alert} from "react-bootstrap";
import  { useAuth } from "../contexts/AuthContext";
import {useRouter} from "next/router";
import Link from "next/link";
import Menu from "../components/Menu";
import style from "../styles/Signup.module.scss"
import Image from "next/image";

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup }  = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            router.push("/")
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }

    return (
        <>
            <Menu></Menu>
            <div className={style.container}>
                <div>
                    <h2>Załóż konto</h2>
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
                        <div id="password-confirm" className={style.inputCont}>
                            <label>Powtórz hasło</label>
                            <input type="password" ref={passwordConfirmRef} required></input>
                        </div>
                        <div className={style.butonCont}>
                            <button><Link href="/login"><a>Zaloguj się</a></Link></button>
                            <button disabled={loading} className={style.active} type="submit">Załóż konto</button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}