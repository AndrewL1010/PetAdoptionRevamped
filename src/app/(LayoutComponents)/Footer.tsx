import styles from './Footer.module.css';
import Link from "next/link";
import { Container } from '../../components/bootstrap';
function Footer() {
    return (
        <footer className={`bg-primary ${styles.parentcontainer}`}>
            <Container className={styles.bootstrapcontainer}>
                <div className={`${styles.footerchild} ${styles.innercontainer}`}>
                    <h4 className={`${styles.innerChild} ${styles.header}`}>Explore our pets!</h4>
                    <Link href={"/pets"} className={styles.footerlinks}>Available Pets</Link>
                </div>
                <div className={`${styles.footerchild} ${styles.innercontainer}`}>
                    <h4 className={`${styles.innerChild} ${styles.header}`}>Information</h4>
                    <Link href={"/about"} className={styles.footerlinks}>About us</Link>
                    <Link href={"/contact"} className={styles.footerlinks}>Contact us</Link>
                    <Link href={"/FAQ"} className={styles.footerlinks}>FAQ</Link>

                </div>
                <div className={`${styles.footerchild} ${styles.innercontainer}`}>
                    <h4 className={`${styles.innerChild} ${styles.header}`}>Address</h4>
                    <p>25 Garden Avenue</p>
                    <p>Richmond, BC V6Y 2H6</p>
                    <p>Canada</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer