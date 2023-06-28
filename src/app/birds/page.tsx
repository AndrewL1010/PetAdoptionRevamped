import Image from "next/image"
import Bird from "../../types/Animal"
import styles from './page.module.css';
const knexDB = require("../database/knexConfig");
async function Page() {
    const data = await knexDB('birds');
    console.log(data);
    return (
        <div>

            {data.map((bird: Bird) => {
                return (
                    <Image src={bird.image} alt={bird.alt} height={300} width={420} key={bird.id} className={styles.images}></Image>
                )

            })}
        </div>
    )
}

export default Page