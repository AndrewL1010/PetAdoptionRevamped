import PageProps from "@/types/PageProps";
import Image from "next/image";
import styles from './page.module.css';
import handleQuery from "@/utility/dbHandler";
const knexDB = require("../../database/knexConfig");
import getConnection from "@/utility/dbHandler";
import { Container } from "../../../components/bootstrap";
async function Page({ params: { id } }: PageProps) {

    if (typeof id === "string" && Number.isNaN(Number(id))) {
        return (
            <div>
                Sorry this animal does not exist
            </div>
        )
    }
    const database = getConnection();
    if (database) {
        const animal = await database("animals").where({ id: id }).first();
        await database.destroy();
        if (!animal) {
            return (
                <div>
                    Sorry this animal does not exist
                </div>
            )
        }
        else {
            return (
                <Container className={styles.container}>
                    <h2>{animal.name}</h2>
                    <div className={styles.info}>
                        <div>
                            <p><strong>age: </strong> {`${animal.age}`}</p>
                            <p><strong>breed: </strong> {`${animal.breed}`}</p>
                            <p><strong>gender: </strong> {`${animal.gender}`}</p>
                            <p><strong>weight: </strong> {`${animal.weight}`}</p>
                        </div>
                        <Image src={animal.image} alt={animal.alt} height={300} width={420} key={animal.id} className={styles.images}></Image>
                    </div>
                    <div>
                        <p>{animal.description}</p>
                    </div>

                </Container>
            )
        }
    }
    else {
        return (
            <div>
                Sorry this animal does not exist
            </div>
        )
    }



}

export default Page