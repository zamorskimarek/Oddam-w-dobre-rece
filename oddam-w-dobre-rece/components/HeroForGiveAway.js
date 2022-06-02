import Link from "next/link"
import styles from "../styles/HeroForGiveAway.module.scss"
import Image from "next/image";

export default function HeroForGiveAway() {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroImg}>
                <Image
                    src="/assets/Form-Hero-Image.jpg"
                    width="1015px"
                    height="853px"
                    objectPosition="relative"
                    priority={true}
                ></Image>
            </div>
            <div className={styles.heroInfo}>
                <div>
                    <h2>Oddaj rzeczy, których już nie chcesz</h2>
                    <h2>POTRZEBUJĄCYM</h2>
                </div>
                <div>
                    <Image src={require("../public/Decoration.svg")} width="253px" height="33px"></Image>
                </div>
                <span className={styles.fourSteps}>Wystarczą 4 proste kroki:</span>
                <div className={styles.heroButtonsCont}>
                    <div className={styles.squaresCont}>
                        <span>1</span>
                        <p>Wybierz<br/>rzeczy</p>
                        <div className={styles.squares}/>
                    </div>
                    <div className={styles.squaresCont}>
                        <span>2</span>
                        <p>Spakuj je<br/> w worki</p>
                        <div className={styles.squares}/>
                    </div>
                    <div className={styles.squaresCont}>
                        <span>3</span>
                        <p>Wybierz<br/> fundacje</p>
                        <div className={styles.squares}/>
                    </div>
                    <div className={styles.squaresCont}>
                        <span>4</span>
                        <p>Zamów<br/> kuriera</p>
                        <div className={styles.squares}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
