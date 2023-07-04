"use client"
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import CarouselProps from '../types/CarouselProps';
import styles from './CarouselComponent.module.css';
import { Button } from "../components/bootstrap";
function CarouselComponent(props: CarouselProps) {
    const images = props.images;

    return (
        <Carousel>
            {images.map((image) => {
                return (
                    <Carousel.Item key={image.path}>
                        <Image
                            className={styles.images}
                            src={image.path}
                            alt="home slide image"
                            width={1300}
                            height={583}

                        />
                        <Carousel.Caption>
                            <Button className={styles.button} href={image.animalurl}>Adopt {image.type}</Button>
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