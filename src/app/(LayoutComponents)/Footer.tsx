import styles from './Footer.module.css';
import Link from "next/link";
import { Container } from '../../components/bootstrap';
function Footer() {
    return (
        <footer className={styles.parentcontainer}>
            <Container className={styles.bootstrapcontainer}>
                <div className={`${styles.footerchild} ${styles.innercontainer}`}>
                    <h6 className={`${styles.innerChild} ${styles.header}`}>Explore our pets!</h6>
                    <Link href={"/pets"} className={styles.footerlinks}>Available Pets</Link>
                </div>
                <div className={`${styles.footerchild} ${styles.innercontainer}`}>
                    <h6 className={`${styles.innerChild} ${styles.header}`}>Information</h6>
                    <Link href={"/about"} className={styles.footerlinks}>About us</Link>
                    <Link href={"/contact"} className={styles.footerlinks}>Contact us</Link>
                    <Link href={"/FAQ"} className={styles.footerlinks}>FAQ</Link>

                </div>
                <div className={`${styles.footerchild} ${styles.innercontainer}`}>
                    <h6 className={`${styles.innerChild} ${styles.header}`}>HQ</h6>
                    <span className={styles.address}>25 Garden Avenue</span>
                    <span className={styles.address}>Richmond, BC V6Y 2H6</span>
                    <span className={styles.address}>Canada</span>
                </div>
            </Container>


            <Container className={styles.bootstrapcontainer2}>
                <div className={`${styles.footerchild} ${styles.innercontainer}`}>
                    <span style={{color: "white"}}>&copy; 2024 Andrew Lu</span>
                </div>
                <div className={`${styles.footerchild} ${styles.innercontainer}`}>
                    <Link className={styles.footerlinks} href={"/privacy-notice"}>Privacy notice</Link>

                </div>
                <div className={`${styles.footerchild} ${styles.innercontainer}`}>
                    <Link className={styles.footerlinks} href={"/terms-of-use"}>Terms of use</Link>
                </div>
            </Container>

        </footer>
    )
}

export default Footer