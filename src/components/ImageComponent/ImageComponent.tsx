"use client"
import Image from "next/image"
import styles from './ImageComponent.module.css';
import ImageProps from "@/types/ImageProps";

function ImageComponent(props: ImageProps) {
    const { path, width, height, alt, small } = props;
    return (
        <Image src={path} width={width} height={height} alt={alt} className={`${styles.images} ${styles.opacity}`} onLoadingComplete={(image) => {
            if (small) {
                image.classList.add(styles.small)
            }
            image.classList.remove(styles.opacity);

        }}></Image>
    )
}

export default ImageComponent