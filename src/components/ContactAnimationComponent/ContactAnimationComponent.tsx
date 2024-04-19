"use client"
import React, { useState } from 'react'
import { useLottie } from "lottie-react";
import SupportAnimation from "./support-animation.json";
import styles from './ContactAnimationComponent.module.css'
import { useEffect } from 'react';
function ContactAnimationComponent() {
    const options = {
        animationData: SupportAnimation,
        loop: true
    };
    const { View } = useLottie(options);
    const [loaded, setLoaded] = useState<boolean>(false)


    useEffect(() => {
        const delay = async () => {
            setTimeout(() => {
                setLoaded(true);
            }, 1);
        }
        delay()
    }, [])


    return <div className={loaded ? styles.container : `${styles.container} ${styles.opacity}`}>{View}</div>;
}

export default ContactAnimationComponent