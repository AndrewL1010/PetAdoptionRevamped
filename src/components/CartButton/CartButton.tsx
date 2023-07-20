"use client"
import { Button } from '../bootstrap'
import { Product } from '@/types/TableModels'
import styles from './CartButton.module.css';
import { useGlobalContext } from '../CartCounterContext';
import { parseArgs } from 'util';
interface CartButtonProp {
    product: Product
}
function CartButton(props: CartButtonProp) {
    let { product } = props;
    const { cartCount, setCartCount } = useGlobalContext();


    const handleCart = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const newCount = cartCount + 1;
        setCartCount(newCount);
        event.stopPropagation();
        event.preventDefault();
        const data = localStorage.getItem('cart');
        if (data === null || data.length === 0) {
            localStorage.setItem('cart', JSON.stringify([{ ...product, quantity: 1 }]));
        }
        else {
            const cart = JSON.parse(data);
            let added = false;
            const updatedCart = cart.map((item: Product) => {
                if (item.id === product.id) {
                    added = true;
                    if (item.quantity) {
                        const newQuantity = parseInt(item.quantity) + 1;
                        return { ...item, quantity: newQuantity }
                    }
                    else {
                        return { ...item, quantity: 1 }
                    }
                }
                return { ...item }
            });
            if (!added) {
                localStorage.setItem('cart', JSON.stringify([...updatedCart, { ...product, quantity: 1 }]));
            }
            else {
                localStorage.setItem('cart', JSON.stringify(updatedCart))
            }





        }

    }


    return (
        <Button className={styles.button} onClick={handleCart}>Add to cart</Button>
    )
}

export default CartButton