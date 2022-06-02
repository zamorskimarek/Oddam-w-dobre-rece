import styles from "../styles/About.module.scss"
import Image from "next/image";

export default function About() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.textCont}>
                    <h2>O nas</h2>
                    <Image src={require("../public/Decoration.svg")} width="253px" height="33px"></Image>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <div>
                        <Image src={require("../public/assets/Signature.svg")} width="209px" height="149px"></Image>
                    </div>
                </div>
                <div className={styles.imgCont}>
                    {/*<Image src={require("../public/assets/People.jpg")} width="1308px" height="935px"></Image>*/}
                </div>
            </div>
        </>
    )
}