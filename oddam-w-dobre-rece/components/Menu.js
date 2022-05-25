import Link from "next/link"
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import styles from "../styles/Menu.module.scss"
import  { useAuth } from "../contexts/AuthContext";
import {Button} from "react-bootstrap";
import {useRouter} from "next/router";


export default function Menu() {

    const { currentUser, logout }  = useAuth()
    const router = useRouter()

    // console.log(currentUser)

    async function handleLogout() {
        await logout()
        router.push("/logout")
    }

    return (
        <div className={styles.menuContainer}>
            <div>
                {currentUser ? (<>
                    <p>czesc {currentUser.multiFactor.user.email}</p>
                    <Button >oddaj rzeczy</Button>
                    <Button onClick={handleLogout}>wyloguj</Button>
                </>) : (<>
                        <Link href="/login"><a className={styles.loginLink}>Zaloguj</a></Link>
                        <Link href="/signup"><a className={styles.loginLink}>Zarejestruj</a></Link>
                </>)}
                {/*<Link href="/login"><a className={styles.loginLink}>Zaloguj</a></Link>*/}
                {/*<Link href="/signup"><a className={styles.loginLink}>Zarejestruj</a></Link>*/}
            </div>
            <nav className={styles.nav}>
                <LinkScroll
                    to="start"
                    spy={true}
                    smooth={true}
                    // offset={-70}
                    duration={500}
                    className={styles.navLink}
                >Start</LinkScroll>
                <LinkScroll
                    to="goal"
                    spy={true}
                    smooth={true}
                    // offset={-70}
                    duration={500}
                    className={styles.navLink}
                >O co chodzi?</LinkScroll>
                <LinkScroll
                    to="about"
                    spy={true}
                    smooth={true}
                    // offset={-70}
                    duration={500}
                    className={styles.navLink}
                >O Nas</LinkScroll>
                <LinkScroll
                    to="fundations"
                    spy={true}
                    smooth={true}
                    // offset={-70}
                    duration={500}
                    className={styles.navLink}
                >Fundacja i organizacje</LinkScroll>
                <LinkScroll
                    to="contact"
                    spy={true}
                    smooth={true}
                    // offset={-70}
                    duration={500}
                    className={styles.navLink}
                >Kontakt</LinkScroll>
            </nav>
        </div>
    )
}