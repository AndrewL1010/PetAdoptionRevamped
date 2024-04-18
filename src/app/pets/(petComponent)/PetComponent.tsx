"use client"
import Link from "next/link";
import Image from "next/image";
import { Button, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'
import { Animal } from "@/types/TableModels";
import useSWR from 'swr'
import styles from './page.module.css';
import { useState } from 'react'

function PetComponent() {
    const [loaded, setLoaded] = useState<boolean>(false);
    const searchParams = useSearchParams();
    const filter = searchParams.get('filter') || 'all';
    const page = searchParams.get('page') || '0';

    const router = useRouter();

    const handleQuery = (searchQuery: string, newQueryValue: string) => {
        if (searchQuery === "filter") {
            const url = new URLSearchParams({ filter: newQueryValue });
            router.push("/pets?" + url);
        }
        if (searchQuery === "page") {
            const filter = searchParams.get('filter') || 'all';
            const url = new URLSearchParams({ filter: filter, page: newQueryValue });
            router.push("/pets?" + url);
        }

    }


    const fetcher = async () => {
        const filter = searchParams.get('filter') || 'all';
        const page = searchParams.get('page') || '0';
        const data = {
            page: page,
            filter: filter
        }
        const response = await fetch('/api/getAnimals',
            {
                method: "POST",
                body: JSON.stringify(data)
            }
        )
        const resultdata = await response.json();
        return resultdata as { status: string, animals: Animal[], count: { total: string } };

    }

    const { data, error, isLoading } = useSWR(`/api/getAnimals?filter=${filter}&page=${page}`, fetcher);





    if (error) {
        return (
            <div>Animals of this type does not exist</div>
        )
    }
    if (isLoading) {
        return (
            <div className={styles.spinner} >
                <CircularProgress style={{'color': 'white'}} size="1rem"/>
            </div>
        )
    }
    if (!data) {
        return (
            <div>Animals of this type does not exist</div>
        )
    }
    if (data.animals.length === 0) {
        return (
            <div>Product you are looking for does not exist</div>
        )
    }
    const num_of_pages = Math.ceil(parseInt(data.count.total) / 21);

    let array = [];
    for (let i = 1; i < num_of_pages + 1; i++) {
        array.push(i);
    }




    return (
        <div>
            <ul className={styles.filterContainer}>
                <Button className={styles.filterButton} variant="contained" onClick={() => { handleQuery("filter", "all") }} style={{ opacity: filter === 'all' ? 0.5 : 1 }}>All</Button>
                <Button className={styles.filterButton}  variant="contained" onClick={() => { handleQuery("filter", "dog") }} style={{ opacity: filter === 'dog' ? 0.5 : 1 }} >Dogs</Button>
                <Button className={styles.filterButton}  variant="contained" onClick={() => { handleQuery("filter", "cat") }} style={{ opacity: filter === 'cat' ? 0.5 : 1 }}>Cats</Button>
                <Button className={styles.filterButton}  variant="contained" onClick={() => { handleQuery("filter", "rabbit") }} style={{ opacity: filter === 'rabbit' ? 0.5 : 1 }}>Rabbits</Button>
                <Button className={styles.filterButton}  variant="contained" onClick={() => { handleQuery("filter", "bird") }} style={{ opacity: filter === 'bird' ? 0.5 : 1 }}>Birds</Button>
            </ul>
            <div className={styles.parentcontainer}>
                {
                    data.animals.map((animal) => (

                        <Link href={`/animals/${animal.id}`} key={animal.id} className={styles.link}>
                            <div className={styles.container}>

                                <p className={styles.imagetext}>
                                    {animal.name} ({animal.gender})
                                </p>
                                <Image
                                    src={animal.image}
                                    alt={animal.alt}
                                    height={0}
                                    width={0}
                                    sizes="100vw"
                                    key={animal.id}
                                    className={loaded ? styles.images : `${styles.images} ${styles.opacity}`}
                                    onLoadingComplete={() => { setLoaded(true) }}
                                ></Image>


                            </div>


                        </Link>


                    ))
                }
            </div>
            <div className={styles.page_number_container}>
                {array.map((page_number) => (
                    <Button className={styles.pagination} key={page_number} onClick={() => { handleQuery("page", page_number.toString()) }} style={{ opacity: page === page_number.toString() ? 0.5 : page === "0" && page_number === 1 ? 0.5 : 1 }}>{page_number}</Button>
                ))

                }
            </div>
        </div>

    )
}

export default PetComponent