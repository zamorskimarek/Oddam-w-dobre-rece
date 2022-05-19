import styles from "../styles/ThreeColumns.module.scss"
import Image from "next/image";


export default function ThreeColumns() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <div className={styles.column}>
                        <h2>10</h2>
                        <h3>ODDANYCH WORKÓW</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                    <div className={styles.column}>
                        <h2>5</h2>
                        <h3>WSPARTYCH ORGANIZACJI</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                    <div className={styles.column}>
                        <h2>7</h2>
                        <h3>ZORGANIZOWANY ZBIÓREK</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>

                </div>
            </div>
        </>
    )
}
