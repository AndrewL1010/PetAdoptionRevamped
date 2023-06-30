import Image from "next/image"
import Cat from "../../../types/Animal"
import styles from './page.module.css';
import Link from "next/link";
const knexDB = require("../../database/knexConfig");
async function Page() {
    const data = await knexDB('animals').where({ type: "cat" });
    console.log(data);
    return (
        <div className={styles.container}>
            {data.map((cat: Cat) => {
                return (
                    <Link key={cat.id} href={`/animals/${cat.id}`}>
                        <div className={styles.innercontainer}>
                            <h4>{cat.name}</h4>
                            <Image src={cat.image} alt={cat.alt} height={300} width={420} key={cat.id} className={styles.images}></Image>
                        </div>
                    </Link>
                )

            })}
        </div>
    )
}

export default Page