"use client"
import Image from "next/image";
import { Product } from "@/types/TableModels";
import styles from './page.module.css'
import React, { useState, useEffect, ChangeEvent } from 'react';
import { useGlobalContext } from "@/components/CartCounterContext";
import ModalComponent from "@/components/ModalComponent";
import { useRouter } from "next/navigation";
<CircularProgress color="secondary" size="1rem"/>
import ItemUpdateComponent from "@/components/ItemUpdateComponent/ItemUpdateComponent";
import { Button, CircularProgress } from "@mui/material";
function Page() {
    const [cart, setCart] = useState<Product[]>([]);
    const { setCartCount } = useGlobalContext();
    const [show, setShow] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleCheckout = async () => {
        setLoading(true);
        const authresponse = await fetch('/api/checkAuth',
            {
                method: "POST"
            }
        );
        const authresult = await authresponse.json();

        if (authresult.status !== "success") {
            setLoading(false);
            setShow(true);
        }
        else {
            const checkoutresponse = await fetch("/api/checkout",
                {
                    method: "POST",
                    body: JSON.stringify(cart)
                }
            )

            const url = await checkoutresponse.json();
            setLoading(false);
            router.push(url);
        }
    }



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

    useEffect(() => {
        const data = localStorage.getItem('cart');
        if (data !== null) {
            const cartlist: Product[] = JSON.parse(data);
            setCart(cartlist);
        }
    }, []);



    if (cart.length === 0) {
        return (
            <div style={{color: "white"}}>Your Shopping Cart Is Empty</div>
        )
    }
    const subtotal = cart.reduce((total, product) => product.quantity ? total + (product.price * product.quantity) : total + product.price, 0).toFixed(2);
    const numofitems = cart.reduce((total, product) => product.quantity ? total + product.quantity : total + 0, 0);

    return (
        <>
            <div className={styles.parent}>
                <div className={styles.left}>
                    {cart.map((product) => (
                        <div className={styles.product} key={product.id}>
                            <Image src={product.image_path} height={200} width={200} alt={product.description} className={styles.image}></Image>
                            <div className={styles.productinfocontainer}>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p>{product.weight}</p>
                                <p>{product.dimensions}</p>
                                <p>max quantity: {product.stock_quantity}</p>

                                <ItemUpdateComponent product={product} cart={cart} setCart={setCart}></ItemUpdateComponent>

                                <p><a className={styles.cartdelete} onClick={() => { deleteItem(product.id) }}>delete</a></p>
                                <p className={styles.prices}>${product.price}</p>


                            </div>


                        </div>

                    ))

                    }
                </div>
                <div className={styles.right}>
                    <h4 className={styles.text}>({numofitems} items)</h4>
                    <h4 className={styles.text}>SubTotal: ${subtotal}</h4>
                    <Button className={styles.checkoutButton} variant="contained" onClick={handleCheckout}>{loading ? <CircularProgress style={{'color': 'white'}} size="1rem"/> : "Checkout"}</Button>
                </div>


            </div >
            <ModalComponent show={show} setShow={setShow} body={"Please login before making a purchase"} title={"Error"}></ModalComponent></>
    )


}

export default Page