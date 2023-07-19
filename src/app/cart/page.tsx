"use client"
import ImageComponent from "@/components/ImageComponent/ImageComponent";
import { Product } from "@/types/TableModels";
import styles from './page.module.css'
import React, { useState, useEffect } from 'react';
function Page() {
    const [cart, setCart] = useState<Product[]>([]);

    const deleteItem = (id: number) => {
        const updatedCart = cart.filter((product) => product.id !== id);
        if(updatedCart.length === 0){
            localStorage.removeItem('cart');
        }
        else{
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
        setCart(updatedCart);
    }

    useEffect(() => {
        const data = localStorage.getItem('cart');
        if (data !== null) {
            const cartlist: Product[] = JSON.parse(data);
            setCart(cartlist);
        }
    }, []);

    if (cart.length === 0) {
        return (
            <div>Your Shopping Cart Is Empty</div>
        )
    }
    const subtotal = cart.reduce((total, product) => product.quantity ? total + (parseFloat(product.price) * parseInt(product.quantity)) : total + parseFloat(product.price), 0).toFixed(2);
    const numofitems = cart.length;

    return (
        <div className={styles.parent}>
            <div className={styles.left}>
                {cart.map((product) => (
                    <div className={styles.product} key={product.id}>
                        <ImageComponent path={product.image_path} height={200} width={200} alt={product.description} small={false}></ImageComponent>
                        <div className={styles.productinfocontainer}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>{product.weight}</p>
                            <p>{product.dimensions}</p>
                            <p>Quantity: {product.quantity}</p>
                            <p className={styles.prices}>${product.price}</p>
                            <p className={styles.cartdelete} onClick={() => { deleteItem(product.id) }}>delete</p>
                        </div>

                    </div>

                ))

                }
            </div>
            <div className={styles.right}>
                <h4 className={styles.text}>({numofitems} items)</h4>
                <h4 className={styles.text}>SubTotal: ${subtotal}</h4>
            </div>
        </div >
    )


}

export default Page