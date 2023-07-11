import PageProps from "@/types/PageProps";
import Image from "next/image";
import styles from './page.module.css';
import getConnection from "@/utility/dbHandler";
import { Container } from "../../../components/bootstrap";
import { Animal } from "@/types/TableModels";
import * as jose from 'jose';
import { cookies } from "next/headers";
import { env } from '../../../utility/EnvironmentValidatior';
import ApplicationNavigate from "@/components/ApplicationNavigate";



const isLoggedIn = async () => {
    const token = cookies().get("token");
    if (!token) {
        return false;
    }
    try {
        const tokenString = token.value.toString();
        const secret = new TextEncoder().encode(
            env.USER_SECRET_KEY
        );
        const user = await jose.jwtVerify(tokenString, secret);
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}



async function Page({ params: { id } }: PageProps) {
    const isUserLoggedIn = await isLoggedIn();

    if (typeof id === "string" && Number.isNaN(Number(id))) {
        return (
            <div>
                Sorry this animal does not exist
            </div>
        )
    }
    const database = getConnection();
    if (database) {
        const animal = await database<Animal>("animals").where({ id: parseInt(id) }).first();
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

                        <Image src={animal.image} alt={animal.alt} height={300} width={420} key={animal.id} className={styles.images}></Image>
                        <div>
                            <p><strong>age: </strong> {`${animal.age}`}</p>
                            <p><strong>breed: </strong> {`${animal.breed}`}</p>
                            <p><strong>gender: </strong> {`${animal.gender}`}</p>
                            <p><strong>weight: </strong> {`${animal.weight}`}</p>
                        </div>
                    </div>
                    <div>
                        <p>{animal.description}</p>
                    </div>
                    <ApplicationNavigate isLoggedIn={isUserLoggedIn} id={animal.id} name={animal.name}></ApplicationNavigate>


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