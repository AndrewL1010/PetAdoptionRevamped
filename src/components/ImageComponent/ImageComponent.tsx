"use client"
import Image from "next/image"
import styles from './ImageComponent.module.css';
import ImageProps from "@/types/ImageProps";
import { useState } from "react";

function ImageComponent(props: ImageProps) {
    const [loaded, setLoaded] = useState<boolean>(false);
    const { path, width, height, alt, small } = props;
    const imageStyle = small === false ? styles.images : styles.small
    return (
        <Image src={path} width={width} height={height} sizes="100vw" alt={alt} className={loaded ? imageStyle : `${imageStyle} ${styles.opacity}`} onLoadingComplete={() => { setLoaded(true) }}></Image>
    )
}

export default ImageComponent