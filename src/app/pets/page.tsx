"use client"
import Link from "next/link";
import Image from "next/image";
import { Button } from '../../components/bootstrap';
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'
import { Animal } from "@/types/TableModels";
import useSWR from 'swr'
import styles from './page.module.css';
function Page() {
    const searchParams = useSearchParams();
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
        const page = searchParams.get('page') || 0;
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
    const filter = searchParams.get('filter') || 'all';
    const page = searchParams.get('page') || 0;
    const { data, error, isLoading } = useSWR(`/api/getAnimals?filter=${filter}&page=${page}`, fetcher, {
    });

    if (!data) {
        return (
            <div>Animals of this type does not exist</div>
        )
    }
    const num_of_pages = Math.ceil(parseInt(data.count.total) / 21);

    let array = [];
    for (let i = 1; i < num_of_pages + 1; i++) {
        array.push(i);
    }

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    if (error || data.animals.length === 0) {
        return (
            <div>Animals of this type does not exist</div>
        )
    }




    return (
        <div>
            <ul className={styles.filterContainer}>
                <Button onClick={() => { handleQuery("filter", "all") }}>All</Button>
                <Button onClick={() => { handleQuery("filter", "dog") }}>Dogs</Button>
                <Button onClick={() => { handleQuery("filter", "cat") }}>Cats</Button>
                <Button onClick={() => { handleQuery("filter", "rabbit") }}>Rabbits</Button>
                <Button onClick={() => { handleQuery("filter", "bird") }}>Birds</Button>
            </ul>
            <div className={styles.parentcontainer}>
                {
                    data.animals.map((animal) => (
                        <Link key={animal.id} href={`/animals/${animal.id}`}>
                            <div className={styles.container}>
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
            <div className={styles.page_number_container}>
                {array.map((page_number) => (
                    <Button key={page_number} onClick={() => { handleQuery("page", page_number.toString()) }}>{page_number}</Button>
                ))

                }
            </div>
        </div>

    )
}

export default Page