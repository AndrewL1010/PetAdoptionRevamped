"use client"
import { useState } from 'react'
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import styles from "./FAQ.module.css";
import FAQ from '@/types/FAQ'; 



function FAQItem(props: FAQ) {
    const { title, body } = props;
    const [show, setShow] = useState<boolean>(false);

    const slideAnimation = useSpring({
        maxHeight: show ? 500 : 0,
        opacity: show ? 1 : 0,
    });

    const toggleContent = () => {
        setShow(!show);
    };

    return (
        <div className={styles.faqContainer}>
            <div className={styles.titlecontainer}>
                <h3>{title}</h3>
                <div>
                    <FaArrowDown
                        color="primary"
                        onClick={toggleContent}
                        className={!show ? `${styles.showButton} ${styles.button}` : `${styles.hideButton} ${styles.button}`}
                    ></FaArrowDown>
                    <FaArrowUp
                        color="primary"
                        onClick={toggleContent}
                        className={show ? `${styles.showButton} ${styles.button}` : `${styles.hideButton} ${styles.button}`}
                    ></FaArrowUp>
                </div>
            </div>
            <animated.p className={styles.body} style={slideAnimation}>
                {body}
            </animated.p>
        </div>
    );
}

export default FAQItem;





















