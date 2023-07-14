"use client"
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import CarouselProps from '../../types/CarouselProps';
import styles from './CarouselComponent.module.css';
function CarouselComponent(props: CarouselProps) {
    const images = props.images;

    return (
        <Carousel className={styles.container}>
            {images.map((image) => {
                return (
                    <Carousel.Item key={image.path}>
                        <Image
                            src={image.path}
                            alt="home slide image"
                            width={1300}
                            height={583}
                            className={`${styles.images} ${styles.opacity}`}
                            onLoadingComplete={(image) => { image.classList.remove(styles.opacity) }}

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