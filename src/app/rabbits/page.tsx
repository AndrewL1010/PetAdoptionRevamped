import Image from "next/image"
import Rabbit from "../../types/Animal"
import styles from './page.module.css';
const knexDB = require("../database/knexConfig");
async function Page() {
    const data = await knexDB('rabbits');
    return (
        <div>

            {data.map((rabbit: Rabbit) => {
                return (
                    <Image src={rabbit.image} alt={rabbit.alt} height={300} width={420} key={rabbit.id} className={styles.images}></Image>
                )

            })}
        </div>
    )
}

export default Page