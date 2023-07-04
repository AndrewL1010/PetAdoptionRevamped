import styles from './Footer.module.css';
import Link from "next/link";
import { Container } from '../../components/bootstrap';
import { Nav } from 'react-bootstrap';
function Footer() {
    return (
        <footer className={`bg-primary ${styles.parentcontainer}`}>
            <Container className={styles.bootstrapcontainer}>
                <div className={`${styles.footerchild} ${styles.innercontainer}`}>
                    <h4 className={`${styles.innerChild} ${styles.header}`}>Hello!</h4>
                    <p className={styles.innerChild}>Discover your perfect pet on our adoption website.
                        Browse profiles of dogs, cats, rabbits, and more.
                        Each profile provides essential details, photos, and videos.
                        Connect with shelters and organizations directly to start the adoption process.
                        Get helpful resources for pet care.
                        Find your lifelong companion and make a positive impact on animal welfare.
                        Join us today!
                    </p>
                </div>
                <div className={`${styles.footerchild} ${styles.innercontainer}`}>
                    <h4 className={`${styles.innerChild} ${styles.header}`}>Explore our pets!</h4>

                    <Link href={"/dogs"} className={styles.footerlinks}>Dogs</Link>
                    <Link href={"/cats"} className={styles.footerlinks}>Cats</Link>
                    <Link href={"/rabbits"} className={styles.footerlinks}>Rabbits</Link>
                    <Link href={"/birds"} className={styles.footerlinks}>Birds</Link>
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