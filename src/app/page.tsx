import CarouselComponent from '@/components/CarouselComponent'
import styles from './page.module.css';
import {Container} from '../components/bootstrap';
export default function Home() {
  const images = [
    {
      path: "/owner1.webp",
      header: "Sophie White",
      message: '"Learning how to take care of her helped me learn how to take care of myself"',
      type: "Dogs",
      animalurl: "/dogs"
    },
    {
      path: "/homecat.jpg",
      header: "Cat",
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
      header: "kylie Anderson",
      message: '"These guys have been my best friends since the beginning"',
      type: "Dogs",
      animalurl: "/dogs"
    },
    {
      path: "/bunny.webp",
      header: "Michael Jones",
      message: '"Adopting these bunnies fills my heart with pure bliss and an abundance of joy."',
      type: "Rabbits",
      animalurl: "/rabbits"
    }
  ]
  return (
    <Container className={styles.container}>
      <div className={styles.intro}>
        <h4>Welcome!</h4>
        <p>Discover your perfect pet on our adoption website.
          Browse profiles of dogs, cats, rabbits, and more.
          Each profile provides essential details, photos, and videos.
          Connect with shelters and organizations directly to start the adoption process.
          Get helpful resources for pet care.
          Find your lifelong companion and make a positive impact on animal welfare.
          Join us today!
        </p>
      </div>
      <CarouselComponent images={images} />
    </Container>


  )
}
