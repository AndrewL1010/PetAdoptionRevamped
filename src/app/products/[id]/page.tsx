import PageProps from "@/types/PageProps"
import getConnection from "@/utility/dbHandler"
import styles from './page.module.css'
import ImageComponent from "@/components/ImageComponent/ImageComponent";
import { Table, Button } from '../../../components/bootstrap';

async function Page({ params: { id } }: PageProps) {
    const database = getConnection();
    if (database) {
        const product = await database('products').where({ id: id }).first();
        await database.destroy();
        if (product) {
            return (
                <div key={product.id} className={styles.ProductContainer}>
                    <div className={styles.left}>
                        <ImageComponent path={product.image_path} height={400} width={400} alt={product.description} small={false}></ImageComponent>
                    </div>
                    <div className={styles.right}>
                        <Table striped bordered hover variant="primary">
                            <thead>
                                <tr>
                                    <th colSpan={2} className={styles.price}>${product.price}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>{product.name}</td>
                                </tr>
                                <tr>
                                    <th>Description</th>
                                    <td>{product.description}</td>
                                </tr>
                                <tr>
                                    <th>Category</th>
                                    <td>{product.category}</td>
                                </tr>
                                <tr>
                                    <th>Weight</th>
                                    <td>{product.weight}</td>
                                </tr>
                                <tr>
                                    <th>Dimensions</th>
                                    <td>{product.dimensions}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Button>Add To Cart</Button>

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