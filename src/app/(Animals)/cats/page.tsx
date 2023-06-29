import Image from "next/image"
import Cat from "../../../types/Animal"
import styles from './page.module.css';
const knexDB = require("../../database/knexConfig");
async function Page() {
    const data = await knexDB('cats');
    console.log(data);
    return (
        <div>

            {data.map((Cat: Cat) => {
                return (
                    <Image src={Cat.image} alt={Cat.alt} height={300} width={420} key={Cat.id} className={styles.images}></Image>
                )

            })}
        </div>
    )
}

export default Page