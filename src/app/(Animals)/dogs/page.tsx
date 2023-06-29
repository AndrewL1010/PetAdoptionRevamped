import Image from "next/image"
import Dog from "../../../types/Animal"
import styles from './page.module.css';
import Link from "next/link";
const knexDB = require("../../database/knexConfig");
async function Page() {
    const data = await knexDB('dogs');
    console.log(data);
    return (
        <div>

            {data.map((dog: Dog) => {
                return (
                    <Link key={dog.id} href={`/animals/${dog.id}`}>
                        <Image src={dog.image} alt={dog.alt} height={300} width={420} key={dog.id} className={styles.images}></Image>
                    </Link>

                )

            })}
        </div>
    )
}

export default Page