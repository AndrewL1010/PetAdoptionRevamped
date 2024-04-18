import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
    return (
        <div>
            <h2 style={{ color: "white" }}>Not Found</h2>
            <p style={{ color: "white" }}>Could not find requested resource</p>
            <Link className={styles.link} style={{ color: "white" }} href="/">Return Home</Link>
        </div>
    )
}