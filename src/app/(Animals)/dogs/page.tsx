import Image from "next/image"
import Dog from "../../../types/Animal"
import styles from './page.module.css';
import Link from "next/link";
const knexDB = require("../../database/knexConfig");
async function Page() {
    const data = await knexDB('animals').where({ type: "dog" });
    console.log(data);
    return (
        <div className={styles.container}>
            {data.map((dog: Dog) => {
                return (
                    <Link key={dog.id} href={`/animals/${dog.id}`}>
                        <div className={styles.innercontainer}>
                            <h4>{dog.name}</h4>
                            <Image src={dog.image} alt={dog.alt} height={300} width={420} key={dog.id} className={styles.images}></Image>
                        </div>
                    </Link>
                )

            })}
        </div>
    )
}

export default Page