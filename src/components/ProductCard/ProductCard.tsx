"use client"
import Card from 'react-bootstrap/Card';
import CartButton from '../CartButton/CartButton';
import Link from 'next/link';
import { Product } from '@/types/TableModels';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    product: Product,

}


function ProductCard(props: ProductCardProps) {
    const { product } = props;
    return (
        <Link href={`/products/${product.id}`} key={product.id}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image_path} height={300} className={styles.images}/>
                <Card.Body className={styles.product_body}>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className={styles.price}>
                        ${product.price}
                    </Card.Text>
                    <CartButton product={product} key={product.id}></CartButton>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default ProductCard;