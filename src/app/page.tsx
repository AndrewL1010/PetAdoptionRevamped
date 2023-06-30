import styles from './page.module.css'
import CarouselComponent from '@/components/CarouselComponent'
export default function Home() {
  const paths = ["/owner1.jpg", "/homecat.jpg", "/owner4.jpg"];
  return (
    <div>
      <CarouselComponent paths={paths} />
    </div>


  )
}
