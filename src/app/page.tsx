import styles from './page.module.css'
import CarouselComponent from '@/components/CarouselComponent'
export default function Home() {
  const images = [
    {
      path: "/owner1.jpg",
      header: "Sophie White",
      message: '"Learning how to take care of her helped me learn how to take care of myself"'
    },
    {
      path: "/homecat.jpg",
      header: "Cat",
      message: '"Please adopt me!"'
    },
    {
      path: "/owner4.jpg",
      header: "Taylor Jackson and Kyle Jackson",
      message: '"He is part of the family"'
    },
    {
      path: "/dogowners.jpg",
      header: "kylie Anderson",
      message: '"These guys have been my best friends since the beginning"'
    },
    {
      path: "/bunny.webp",
      header: "Michael Jones",
      message: '"Adopting these bunnies fills my heart with pure bliss and an abundance of joy."'
    }
  ]
  return (
    <div>
      <CarouselComponent images={images} />
    </div>


  )
}
