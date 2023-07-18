import getConnection from "@/utility/dbHandler"
import Image from "next/image";
import styles from './page.module.css'
import Link from "next/link";
async function Page() {
    const database = getConnection();
    if (database) {
        const products = await database('products');
        if (products) {
            return (
                <div className={styles.ParentContainer}>
                    {products.map((product) => (
                        <Link href={`/products/${product.id}`} key={product.id} className={styles.ProductContainer}>
                            <h3>{product.name}</h3>
                            <Image src={product.image_path} height={400} width={400} alt={product.description} className={styles.images}></Image>
                            <p className={styles.prices}>${product.price}</p>
                        </Link>
                    ))}

                </div>
            )
        }
    }
    return (
        <div>product page</div>
    )
}

export default Page