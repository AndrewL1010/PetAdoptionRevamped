"use client"
import Image from "next/image"
import styles from './ImageComponent.module.css';
import ImageProps from "@/types/ImageProps";

function ImageComponent(props: ImageProps) {
    const { path, width, height, alt, small } = props;
    const imageStyle = small === false ? styles.images : styles.small
    return (
        <Image src={path} width={width} height={height} alt={alt} className={`${imageStyle} ${styles.opacity}`} onLoadingComplete={(image) => {

            image.classList.remove(styles.opacity);

        }}></Image>
    )
}

export default ImageComponent