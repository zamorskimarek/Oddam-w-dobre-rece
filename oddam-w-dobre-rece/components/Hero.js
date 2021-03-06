import Link from "next/link"
import styles from "../styles/Hero.module.scss"
import Image from "next/image";
import {useRouter} from "next/router";

export default function Hero() {
    const router = useRouter()

    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroImg}>
                <Image
                    src={require('../public/Home-Hero-Image.jpg')}
                    width="1368px"
                    height="963px"
                    objectPosition="relative"
                    priority={true}
                ></Image>
            </div>
            <div className={styles.heroInfo}>
                <div>
                    <h2>Zacznij pomagać!</h2>
                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                </div>
                <div>
                    <Image src={require("../public/Decoration.svg")} width="253px" height="33px"></Image>
                </div>
                <div className={styles.heroButtonsCont}>
                    <Link href="/oddaj-rzeczy"><button className={styles.heroButton}>ODDAJ RZECZY</button></Link>
                    <button className={styles.heroButton}>ZORGANIZUJ ZBIÓRKĘ</button>
                </div>
            </div>
        </div>
    )
}
