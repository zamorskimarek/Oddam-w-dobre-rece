import Link from "next/link"
import styles from "../styles/Hero.module.scss"
import Image from "next/image";

export default function Hero() {
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
                <div>
                    <button>ODDAJ RZECZY</button>
                    <button>ZORGANIZUJ ZBIÓRKĘ</button>
                </div>
            </div>
        </div>
    )
}
