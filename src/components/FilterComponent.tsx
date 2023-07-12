"use client"
import FilterProps from "@/types/FilterProps"
import Link from "next/link";
import Image from "next/image";
import styles from './FilterComponent.module.css'
import { Button } from "../components/bootstrap";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'
function FilterComponent(PageProps: FilterProps) {
    const searchParams = useSearchParams()
    const animals = PageProps.animals;
    const router = useRouter();
    const handleQuery = (filter: string) => {
        router.push(`/pets?filter=${filter}`)
    }
    return (
        <div>
            <ul className={styles.list}>
                <Button onClick={() => { handleQuery("all") }}>All</Button>
                <Button onClick={() => { handleQuery("dog") }}>Dogs</Button>
                <Button onClick={() => { handleQuery("cat") }}>Cats</Button>
                <Button onClick={() => { handleQuery("rabbit") }}>Rabbits</Button>
                <Button onClick={() => { handleQuery("bird") }}>Birds</Button>
            </ul>
            <div className={styles.container}>
                {!searchParams.has('filter') || searchParams.get('filter') === 'all'
                    ? animals.map((animal) => (
                        <Link key={animal.id} href={`/animals/${animal.id}`}>
                            <div className={styles.innercontainer}>
                                <h4>{animal.name}</h4>
                                <Image
                                    src={animal.image}
                                    alt={animal.alt}
                                    height={300}
                                    width={420}
                                    key={animal.id}
                                    className={`${styles.images} ${styles.opacity}`}
                                    onLoadingComplete={(image) => { image.classList.remove(styles.opacity) }}
                                ></Image>
                            </div>
                        </Link>
                    ))
                    : searchParams.get('filter') != 'dog' &&
                        searchParams.get('filter') != 'cat' &&
                        searchParams.get('filter') != 'bird' &&
                        searchParams.get('filter') != 'rabbit'

                        ? (
                            <h3>No animals of this type</h3>
                        ) :
                        animals
                            .filter((animal) => animal.type === searchParams.get('filter'))
                            .map((animal) => (
                                <Link key={animal.id} href={`/animals/${animal.id}`}>
                                    <div className={styles.innercontainer}>
                                        <h4>{animal.name}</h4>
                                        <Image
                                            src={animal.image}
                                            alt={animal.alt}
                                            height={300}
                                            width={420}
                                            key={animal.id}
                                            className={`${styles.images} ${styles.opacity}`}
                                            onLoadingComplete={(image) => { image.classList.remove(styles.opacity) }}
                                        ></Image>
                                    </div>
                                </Link>
                            ))

                }

            </div>
        </div>

    )
}

export default FilterComponent