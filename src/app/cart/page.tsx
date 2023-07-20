"use client"
import ImageComponent from "@/components/ImageComponent/ImageComponent";
import { Product } from "@/types/TableModels";
import styles from './page.module.css'
import React, { useState, useEffect } from 'react';
import { Button } from "react-bootstrap";
import { loadStripe } from '@stripe/stripe-js';
import { useGlobalContext } from "@/components/CartCounterContext";
import { useRouter } from "next/navigation";
import ModalComponent from "@/components/ModalComponent";
const stripePromise = loadStripe(
    "pk_test_51NW2tqAR8vZcUQrdYF5sWv8IEyQo5vFtvXcoc9sejZoobnaNa4jnMPax5R1xhdTdlOJTesVuhjrH1ZKsni1sIEjs00gpUyK2Gn"
);
function Page() {
    const [cart, setCart] = useState<Product[]>([]);
    const { setCartCount } = useGlobalContext();
    const router = useRouter();
    const [show, setShow] = useState<boolean>(false);

    const handleCheckout = async () => {
        const authresponse = await fetch('/api/checkAuth',
            {
                method: "POST"
            }
        );
        const authresult = await authresponse.json();

        if (authresult.status !== "success") {
            setShow(true);
        }
        else {
            const checkoutresponse = await fetch("/api/checkout",
                {
                    method: "POST",
                    body: JSON.stringify(cart)
                }
            )
            const result = await checkoutresponse.json();
            router.push(result.url);
        }





    }



    const deleteItem = (id: number) => {
        const updatedCart = cart.filter((product) => product.id !== id);
        const numofitems = updatedCart.reduce((total, product) => product.quantity ? total + parseInt(product.quantity) : total + 0, 0);
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
            <div>Your Shopping Cart Is Empty</div>
        )
    }
    const subtotal = cart.reduce((total, product) => product.quantity ? total + (parseFloat(product.price) * parseInt(product.quantity)) : total + parseFloat(product.price), 0).toFixed(2);
    const numofitems = cart.reduce((total, product) => product.quantity ? total + parseInt(product.quantity) : total + 0, 0);

    return (
        <>
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
                                <Button className={styles.cartdelete} onClick={() => { deleteItem(product.id) }}>delete</Button>

                            </div>


                        </div>

                    ))

                    }
                </div>
                <div className={styles.right}>
                    <h4 className={styles.text}>({numofitems} items)</h4>
                    <h4 className={styles.text}>SubTotal: ${subtotal}</h4>
                    <Button onClick={handleCheckout}>Checkout</Button>
                </div>


            </div >
            <ModalComponent show={show} setShow={setShow} body={"Please login before making a purchase"} title={"Error"}></ModalComponent></>
    )


}

export default Page