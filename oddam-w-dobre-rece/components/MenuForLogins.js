import Link from "next/link"
import styles from "../styles/Menu.module.scss"
import  { useAuth } from "../contexts/AuthContext";
import {Button} from "react-bootstrap";
import {useRouter} from "next/router";


export default function MenuForLogins() {

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
                <Link href="/#start"><a className={styles.navLink}>Start</a></Link>
                <Link href="/#goal"><a className={styles.navLink}>O co chodzi?</a></Link>
                <Link href="/#about"><a className={styles.navLink}>O Nas</a></Link>
                <Link href="/#fundations"><a className={styles.navLink}>Fundacja i organizacje</a></Link>
                <Link href="/#contact"><a className={styles.navLink}>Kontakt</a></Link>
            </nav>
        </div>
    )
}