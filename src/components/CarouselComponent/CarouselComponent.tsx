"use client"
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import CarouselProps from '../../types/CarouselProps';
import styles from './CarouselComponent.module.css';
import { useState } from 'react'
function CarouselComponent(props: CarouselProps) {
    const images = props.images;
    const [loaded, setLoaded] = useState<boolean>(false);
    return (
        <Carousel className={styles.container}>
            {images.map((image) => {
                return (
                    <Carousel.Item key={image.path} className={styles.imageparentcontainer}>
                        <Image
                            src={image.path}
                            alt="home slide image"
                            width={0}
                            height={0}
                            sizes='100vw'
                            className={loaded ? styles.images : `${styles.images} ${styles.opacity}`}
                            onLoadingComplete={() => { setLoaded(true) }}

                        />
                        <Carousel.Caption>
                            <h3 className={styles.text}>{image.header}</h3>
                            <p className={styles.text}>{image.message}</p>

                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}

        </Carousel>
    );
}

export default CarouselComponent;