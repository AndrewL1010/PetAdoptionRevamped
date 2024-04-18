import PageProps from "@/types/PageProps"
import getConnection from "@/utility/dbHandler"
import styles from './page.module.css'
import ImageComponent from "@/components/ImageComponent/ImageComponent";
import CartButton from "@/components/CartButton/CartButton";
import { Metadata } from "next";
import { Product } from "@/types/TableModels";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

export async function generateMetadata({ params: { id } }: PageProps): Promise<Metadata> {
    const database = getConnection();
    if (database) {
        const product = await database<Product>("products").where({ id: parseInt(id) }).first();
        await database.destroy();
        if (product) {
            return {
                title: `Product - ${product.name}`
            }
        }
    }
    return {
        title: `Product - ${id}`
    }
}

async function Page({ params: { id } }: PageProps) {
    const database = getConnection();
    if (database) {
        const product = await database('products').where({ id: id }).first();
        await database.destroy();
        if (product) {
            return (
                <div key={product.id} className={styles.ProductContainer}>
                    <div className={styles.left}>
                        <ImageComponent path={product.image_path} height={400} width={400} alt={product.description} small={true}></ImageComponent>
                    </div>
                    <div className={styles.right}>
                        <Table className={styles.table} sx={{ minWidth: 300, maxWidth: 500, backgroundColor: "purple", borderColor: "white", marginLeft: "auto", marginRight: "auto", borderRadius: 2 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell data-cy="player-id" sx={{ textAlign: "center", borderTop: 1, borderColor: "white", fontWeight: "bold", color: "White" }} colSpan={2}>{product.name}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow key="description" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row" sx={{ borderColor: "white", fontWeight: "bold", color: "White" }}>Description</TableCell>
                                    <TableCell align="right" sx={{ borderColor: "white", fontWeight: "bold", color: "White" }}>{product.description}</TableCell>
                                </TableRow>
                                <TableRow key="category" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row" sx={{ borderColor: "white", fontWeight: "bold", color: "White" }}>Category</TableCell>
                                    <TableCell align="right" sx={{ borderColor: "white", fontWeight: "bold", color: "White" }}>{product.category}</TableCell>
                                </TableRow>
                                <TableRow key="weight" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row" sx={{ borderColor: "white", fontWeight: "bold", color: "White" }}>Weight</TableCell>
                                    <TableCell align="right" sx={{ borderColor: "white", fontWeight: "bold", color: "White" }}>{product.weight}</TableCell>
                                </TableRow>
                                <TableRow key="dimensions" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row" sx={{ borderColor: "white", fontWeight: "bold", color: "White" }}>Dimensions</TableCell>
                                    <TableCell align="right" sx={{ borderColor: "white", fontWeight: "bold", color: "White" }}>{product.dimensions}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell data-cy="player-id" sx={{ textAlign: "center", borderTop: 1, borderColor: "white", fontWeight: "bold", color: "White" }} colSpan={2}>
                                        <CartButton product={product}></CartButton>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>


                    </div>
                </div>
            )
        }
    }
    return (
        <div>Product Does Not Exist</div>
    )
}

export default Page