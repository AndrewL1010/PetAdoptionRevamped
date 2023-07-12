import PageProps from "@/types/PageProps";
import ImageComponent from "@/components/ImageComponent";
import styles from './page.module.css';
import getConnection from "@/utility/dbHandler";
import { Container } from "../../../components/bootstrap";
import { Animal } from "@/types/TableModels";
import ApplicationNavigate from "@/components/ApplicationNavigate";
import { Metadata } from "next";

export async function generateMetadata({ params: { id } }: PageProps): Promise<Metadata> {
    const database = getConnection();
    if (database) {
        const animal = await database<Animal>("animals").where({ id: parseInt(id) }).first();
        await database.destroy();
        if (animal) {
            return {
                title: `${animal.type}: ${animal.name} - Pet Sanctuary`
            }
        }
    }
    return {
        title: `Animal: ${id} - Pet Sanctuary`
    }
}


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

                        <ImageComponent path={animal.image} alt={animal.alt} height={300} width={420} key={animal.id} small={true}></ImageComponent>
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
                    <ApplicationNavigate id={animal.id} name={animal.name}></ApplicationNavigate>


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