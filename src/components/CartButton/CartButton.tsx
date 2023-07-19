"use client"
import { Button } from '../bootstrap'
import { Product } from '@/types/TableModels'
import styles from './CartButton.module.css';
interface CartButtonProp {
    product: Product
}
function CartButton(props: CartButtonProp) {
    let { product } = props;


    const handleCart = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
                        return { ...item, quantity: parseInt(item.quantity) + 1 }
                    }
                    else {
                        return { ...item, quantity: 1 }
                    }
                }
                return { ...item }
            });
            if (!added) {
                localStorage.setItem('cart', JSON.stringify([...updatedCart, { ...product, quanity: 1 }]))
            }
            else {
                localStorage.setItem('cart', JSON.stringify(updatedCart));
            }



        }
        const buttonElement = event.target as HTMLButtonElement;
        buttonElement.classList.add(styles.opacity);
        const originalText = buttonElement.innerHTML;

        buttonElement.innerHTML = '&#10004;';
        setTimeout(() => {
            buttonElement.classList.add(styles.opacity);
            setTimeout(() => {
                buttonElement.innerHTML = originalText;
                buttonElement.classList.remove(styles.opacity);

            }, 500)

        }, 500);
    }


    return (
        <Button className={styles.button} onClick={handleCart}>Add to cart</Button>
    )
}

export default CartButton