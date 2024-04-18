"use client"
import React, { useState } from 'react'
import { useLottie } from "lottie-react";
import PetAnimation from "./pet-animation.json";
import styles from './PetAnimationComponent.module.css'
import { useEffect } from 'react';
function PetAnimationComponent() {
    const options = {
        animationData: PetAnimation,
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

export default PetAnimationComponent