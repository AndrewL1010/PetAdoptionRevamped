import CarouselComponent from '@/components/CarouselComponent/CarouselComponent'
import styles from './page.module.css';
import { Container } from '../components/bootstrap';
import ImageComponent from '@/components/ImageComponent/ImageComponent';
import { Metadata } from 'next';
import React from "react";
import PetAnimationComponent from '@/components/PetAnimationComponent/PetAnimationComponent';

export const metadata: Metadata = {
  title: 'Home - Pet Sanctuary',
}
export default function Home() {
  const images = [
    {
      path: "/homecat.jpg",
      header: "Milo",
      message: '"Please adopt me!"',
      type: "Cats",
      animalurl: "/cats"

    },
    {
      path: "/owner4.jpg",
      header: "Taylor Jackson and Kyle Jackson",
      message: '"He is part of the family"',
      type: "Dogs",
      animalurl: "/dogs"
    },
    {
      path: "/dogowners.jpg",
      header: "Kylie Anderson",
      message: '"These guys have been my best friends since the beginning"',
      type: "Dogs",
      animalurl: "/dogs"
    },
    {
      path: "/bunny.webp",
      header: "Despacito Jones",
      message: '"Adopting these bunnies fills my heart with pure bliss and an abundance of joy."',
      type: "Rabbits",
      animalurl: "/rabbits"
    }
  ]
  return (
    <Container className={styles.container}>
      <div className={styles.introcontainer}>
        <div className={styles.messagecontainer}>
          <div className={styles.headerContainer}>
            <h1 className={styles.header} style={{ color: "White" }}>Save A Life Today.</h1>
            <h4 className={styles.text}>Find your perfect furry companion today at Pet Sanctuary, where love meets a forever home.</h4>
          </div>


          <PetAnimationComponent />

        </div>
        <div className={styles.carousel}>
          <ImageComponent path={"/sanctuary.png"} width={500} height={500} alt='sanctuary' small={false}></ImageComponent>
        </div>
      </div>
      <CarouselComponent images={images} />
    </Container>


  )
}
