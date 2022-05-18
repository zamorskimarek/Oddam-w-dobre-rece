import Link from "next/link"
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import styles from "../styles/Menu.module.scss"


export default function Menu() {

    return (
        <div className={styles.menuContainer}>
            <div>
                <Link href="/login"><a className={styles.loginLink}>Zaloguj</a></Link>
                <Link href="/register"><a className={styles.loginLink}>Zarejestruj</a></Link>
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