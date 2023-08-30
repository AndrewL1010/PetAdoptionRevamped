import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Product } from '@/types/TableModels';
import ModalComponent from '../ModalComponent';
import { useGlobalContext } from '../CartCounterContext';
import styles from './ItemUpdateComponent.module.css';
interface ItemUpdateProps {
    product: Product,
    cart: Product[],
    setCart(b: Product[]): void
}
function ItemUpdateComponent(props: ItemUpdateProps) {
    const { product, cart, setCart } = props;
    let quantity = product.quantity ? product.quantity : 0;
    const [value, setValue] = useState<number>(quantity);
    const [show, setShow] = useState<boolean>(false);
    const [body, setBody] = useState<string>("");
    const { cartCount, setCartCount } = useGlobalContext();
    const [more, setMore] = useState<boolean>(quantity > 9 ? true : false);
    const [updated, setUpdated] = useState<boolean>(true);
    
    const deleteItem = (id: number) => {
        const updatedCart = cart.filter((product) => product.id !== id);
        const numofitems = updatedCart.reduce((total, product) => product.quantity ? total + product.quantity : total + 0, 0);
        if (updatedCart.length === 0) {
            localStorage.removeItem('cart');
        }
        else {
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
        setCart(updatedCart);
        setCartCount(numofitems);
    }
    const handleQuantityChange = (id: number, event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        if (event.target.value === "more") {
            setMore(true);
            setUpdated(false);
        }
        else {
            const updatedCart = cart.map((product) => {
                if (product.id === id) {
                    return { ...product, quantity: parseInt(event.target.value) }
                }
                return product;
            })

            const numofitems = updatedCart.reduce((total, product) => product.quantity ? total + product.quantity : total + 0, 0);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            setCart(updatedCart);
            setCartCount(numofitems);
        }


    }




    const handleUpdate = () => {
        if (value === 0) {
            deleteItem(product.id);
        }

        else {
            const data = localStorage.getItem('cart');
            if (data === null || data.length === 0) {
                let updatedCart = [{ ...product, quantity: value }]
                localStorage.setItem('cart', JSON.stringify(updatedCart));
                setCartCount(value);
                setCart(updatedCart);
            }
            else {
                const cart = JSON.parse(data);
                let added = false;
                const updatedCart = cart.map((item: Product) => {
                    if (item.id === product.id) {
                        added = true;
                        if (item.quantity) {
                            if (value > parseInt(item.stock_quantity)) {
                                setBody(`Sorry, the requested quantity (${value}) is not available. There are only ${product.stock_quantity} ${product.name}'s left in stock.`);
                                setShow(true);
                                setUpdated(false);
                                return { ...item };
                            }
                            setCartCount(cartCount + (value - item.quantity));
                            return { ...item, quantity: value };
                        }
                        else {
                            setCartCount(cartCount + value);
                            return { ...item, quantity: value };
                        }
                    }
                    return { ...item }
                });
                if (!added) {
                    let newcart = [...updatedCart, { ...product, quantity: value }]
                    localStorage.setItem('cart', JSON.stringify(newcart));
                    setCart(newcart);
                    setCartCount(cartCount + value);
                }
                else {
                    localStorage.setItem('cart', JSON.stringify(updatedCart));
                    setCart(updatedCart);
                }

            }
            if (value < 10) {
                setMore(false);
            }

        }
        setUpdated(true);

    }


    return (more ?
        <div className={styles.inputContainer}>
            <input autoFocus onFocus={(e) => { e.target.select(); }} className={styles.input} type='text' defaultValue={product.quantity} key={product.id} onChange={(e) => { setValue(parseInt(e.target.value)); setUpdated(false) }}></input>
            {
                value >= 0 && !updated ? (<Button size='sm' onClick={() => { handleUpdate() }}>update</Button>) : <div></div>

            }
            <ModalComponent show={show} setShow={setShow} body={body} title={"Stock Limit Reached"}></ModalComponent>
        </div>

        :
        <Form.Select className={styles.quantity} onChange={(e) => { handleQuantityChange(product.id, e) }} defaultValue={value}>
            {parseInt(product.stock_quantity) >= 9 ?
                (
                    <>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="more">10+</option>

                    </>

                ) : [...Array(parseInt(product.stock_quantity))].map((e, i) => <option value={i + 1} key={i + 1}>{i + 1}</option>)

            }

        </Form.Select >

    );
}

export default ItemUpdateComponent