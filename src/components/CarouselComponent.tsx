"use client"
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import CarouselProps from '../types/CarouselProps';
import styles from './CarouselComponent.module.css';
function CarouselComponent(props: CarouselProps) {
    const paths = props.paths;
    return (
        <Carousel>
            {paths.map((path) => {
                return (
                    <Carousel.Item key={path}>
                        <Image
                            className={styles.images}
                            src={path}
                            alt="home slide image"
                            width={1300}
                            height={583}
                            
                        />
                    </Carousel.Item>
                )
            })}

        </Carousel>
    );
}

export default CarouselComponent;