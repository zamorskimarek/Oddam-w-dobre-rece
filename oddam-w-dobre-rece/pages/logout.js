import React, {useRef, useState} from "react";
import {Alert} from "react-bootstrap";
import  { useAuth } from "../contexts/AuthContext";
import {useRouter} from "next/router";
import Link from "next/link";
import Menu from "../components/Menu";
import style from "../styles/Signup.module.scss"
import Image from "next/image";

export default function Logout() {
    const { signup }  = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()



    return (
        <>
            <Menu></Menu>
            <div className={style.container}>
                <div>
                    <h2>Wylogowanie nastąpiło pamyślnie!</h2>
                    <div>
                        <Image src={require("../public/Decoration.svg")} width="253px" height="33px"></Image>
                    </div>
                    <div className={style.butonContSolo}>
                        <button className={style.active}><Link href="/"><a>Strona główna</a></Link></button>
                    </div>
                </div>
            </div>
        </>

    )
}