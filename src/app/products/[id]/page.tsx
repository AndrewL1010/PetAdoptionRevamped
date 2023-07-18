import PageProps from "@/types/PageProps"
import getConnection from "@/utility/dbHandler"
import Image from "next/image";
import styles from './page.module.css'

async function Page({ params: { id } }: PageProps) {
    const database = getConnection();
    if (database) {
        const product = await database('products').where({ id: id }).first();
        await database.destroy();
        if (product) {
            return (
                <div key={product.id} className={styles.ProductContainer}>
                    <h3>{product.name}</h3>
                    <Image src={product.image_path} height={400} width={400} alt={product.description} className={styles.images}></Image>
                    <p className={styles.prices}>${product.price}</p>
                </div>
            )
        }
    }
    return (
        <div>Product Does Not Exist</div>
    )
}

export default Page