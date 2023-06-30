import Image from "next/image"
import Rabbit from "../../../types/Animal"
import styles from './page.module.css';
import Link from "next/link";
const knexDB = require("../../database/knexConfig");
async function Page() {
    const data = await knexDB('animals').where({ type: "rabbit" });
    return (
        <div className={styles.container}>
            {data.map((rabbit: Rabbit) => {
                return (
                    <Link key={rabbit.id} href={`/animals/${rabbit.id}`}>
                        <div className={styles.innercontainer}>
                            <h4>{rabbit.name}</h4>
                            <Image src={rabbit.image} alt={rabbit.alt} height={300} width={420} key={rabbit.id} className={styles.images}></Image>
                        </div>
                    </Link>
                )

            })}
        </div>
    )
}

export default Page