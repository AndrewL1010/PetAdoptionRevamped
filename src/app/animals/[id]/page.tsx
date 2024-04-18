import PageProps from "@/types/PageProps";
import ImageComponent from "@/components/ImageComponent/ImageComponent";
import styles from './page.module.css';
import getConnection from "@/utility/dbHandler";
import { Container } from "../../../components/bootstrap";
import { Animal } from "@/types/TableModels";
import ApplicationNavigate from "@/components/ApplicationNavigate/ApplicationNavigate";
import { Metadata } from "next";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

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
                    <div className={styles.info}>

                        <div className={styles.image}>
                            <ImageComponent path={animal.image} alt={animal.alt} height={300} width={300} key={animal.id} small={true}></ImageComponent>
                        </div>
                        <Table className={styles.table} sx={{ minWidth: 300, maxWidth: 500, backgroundColor: "purple", borderColor: "white", marginLeft: "auto", marginRight: "auto", borderRadius: 2 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell data-cy="player-id" sx={{ textAlign: "center", borderTop: 1, borderColor: "white", fontWeight: "bold", color: "White" }} colSpan={2}>{animal.name}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow key="age" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row" sx={{ borderColor: "white", fontWeight: "bold", color: "White" }}>Age</TableCell>
                                    <TableCell align="right" sx={{ borderColor: "white", fontWeight: "bold", color: "White" }}>{animal.age}</TableCell>
                                </TableRow>
                                <TableRow key="breed" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row" sx={{ borderColor: "white", fontWeight: "bold", color: "White" }}>Breed</TableCell>
                                    <TableCell align="right" sx={{ borderColor: "white", fontWeight: "bold", color: "White" }}>{animal.breed}</TableCell>
                                </TableRow>
                                <TableRow key="gender" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row" sx={{ borderColor: "white", fontWeight: "bold", color: "White" }}>Gender</TableCell>
                                    <TableCell align="right" sx={{ borderColor: "white", fontWeight: "bold", color: "White" }}>{animal.gender}</TableCell>
                                </TableRow>
                                <TableRow key="weight" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row" sx={{ borderColor: "white", fontWeight: "bold", color: "White" }}>Weight</TableCell>
                                    <TableCell align="right" sx={{ borderColor: "white", fontWeight: "bold", color: "White" }}>{animal.weight}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell data-cy="player-id" sx={{ textAlign: "center", borderTop: 1, borderColor: "white", fontWeight: "bold", color: "White" }} colSpan={2}>
                                        <ApplicationNavigate id={animal.id} name={animal.name}></ApplicationNavigate>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <div className={styles.description}>
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