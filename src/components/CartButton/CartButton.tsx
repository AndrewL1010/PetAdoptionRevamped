"use client"
import { Button } from '../bootstrap'
import { Product } from '@/types/TableModels'
import styles from './CartButton.module.css';
import { useGlobalContext } from '../CartCounterContext';
import { useState } from 'react';
import { ImCheckmark } from 'react-icons/im';
import ModalComponent from '../ModalComponent';
interface CartButtonProp {
    product: Product
}
function CartButton(props: CartButtonProp) {
    const [clicked, setClicked] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [body, setBody] = useState<string>("");
    let { product } = props;
    const { cartCount, setCartCount } = useGlobalContext();



    const handleCart = () => {

        const data = localStorage.getItem('cart');
        if (data === null || data.length === 0) {
            localStorage.setItem('cart', JSON.stringify([{ ...product, quantity: 1 }]));
            setCartCount(cartCount + 1);
        }
        else {
            const cart = JSON.parse(data);
            let added = false;
            const updatedCart = cart.map((item: Product) => {
                if (item.id === product.id) {
                    added = true;
                    if (item.quantity) {
                        const newQuantity = item.quantity + 1;
                        if (newQuantity > parseInt(item.stock_quantity)) {
                            setBody(`Sorry, the requested quantity (${newQuantity}) is not available. There are only ${product.stock_quantity} ${product.name}'s left in stock.`);
                            setShow(true);
                            return { ...item };
                        }
                        setCartCount(cartCount + 1);
                        return { ...item, quantity: newQuantity };
                    }
                    else {
                        setCartCount(cartCount + 1);
                        return { ...item, quantity: 1 };
                    }
                }
                return { ...item }
            });
            if (!added) {
                localStorage.setItem('cart', JSON.stringify([...updatedCart, { ...product, quantity: 1 }]));
                setCartCount(cartCount + 1);
            }
            else {
                localStorage.setItem('cart', JSON.stringify(updatedCart));
            }

        }
        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        }, 1000);

    }


    return (
        <div onClick={(e) => {e.preventDefault(); e.stopPropagation();}}>
            <ModalComponent show={show} setShow={setShow} body={body} title={"Stock Limit Reached"}></ModalComponent>
            <Button variant='contained' className={clicked ? `${styles.addtocartbutton} ${styles.opacity}` : styles.addtocartbutton} onClick={handleCart}> {clicked ? <ImCheckmark /> : 'Add to cart'}</Button>
        </div>

    )
}

export default CartButton