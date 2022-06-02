import styles from "../styles/Goals.module.scss"
import Image from "next/image";

export default function Goals() {
    return (
        <div className={styles.container}>
            <div className={styles.textCont}>
                <h2>Wystarczą 4 proste kroki</h2>
                <Image src={require("../public/Decoration.svg")} width="253px" height="33px"></Image>
            </div>
            <div className={styles.iconCont}>
                <div className={styles.icon}>
                    <Image src={require("../public/assets/Icon-1.svg")} width="83px" height="83px"></Image>
                    <span className={styles.iconText}>Wybierz rzeczy</span>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className={styles.icon}>
                    <Image src={require("../public/assets/Icon-2.svg")} width="83px" height="83px"></Image>
                    <span className={styles.iconText}>Spakuj je</span>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className={styles.icon}>
                    <Image src={require("../public/assets/Icon-3.svg")} width="83px" height="83px"></Image>
                    <span className={styles.iconText}>Zdecyduj komu chcesz pomóc</span>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className={styles.icon}>
                    <Image src={require("../public/assets/Icon-4.svg")} width="83px" height="83px"></Image>
                    <span className={styles.iconText}>Zamów kuriera</span>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className={styles.buttonCont}>
                <button>ODDAJ RZECZY</button>
            </div>
        </div>
    )
}