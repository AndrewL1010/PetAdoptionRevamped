import CarouselComponent from '@/components/CarouselComponent'
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
    <div>
      <CarouselComponent images={images} />
    </div>


  )
}
