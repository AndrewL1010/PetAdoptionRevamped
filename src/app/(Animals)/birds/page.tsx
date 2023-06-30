import Image from "next/image"
import Bird from "../../../types/Animal"
import styles from './page.module.css';
import Link from "next/link";
const knexDB = require("../../database/knexConfig");
async function Page() {
    const data = await knexDB('animals').where({ type: "bird" });
    return (
        <div className={styles.container}>
            {data.map((bird: Bird) => {
                return (
                    <Link key={bird.id} href={`/animals/${bird.id}`}>
                        <div className={styles.innercontainer}>
                            <h4>{bird.name}</h4>
                            <Image src={bird.image} alt={bird.alt} height={300} width={420} key={bird.id} className={styles.images}></Image>
                        </div>
                    </Link>
                )

            })}
        </div>
    )
}

export default Page