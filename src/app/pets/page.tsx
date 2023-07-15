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
    const handleQuery = (filter: string) => {
        router.push(`/pets?filter=${filter}`)
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
        return resultdata.animals as Animal[];

    }
    const { data, error, isLoading } = useSWR('/api/getAnimals', fetcher);
    console.log(data);
    if (!data) {
        return (
            <div>Animals of this type does not exist</div>
        )
    }

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    if (error || data.length === 0) {
        return (
            <div>Animals of this type does not exist</div>
        )
    }




    return (
        <div>
            <ul>
                <Button onClick={() => { handleQuery("all") }}>All</Button>
                <Button onClick={() => { handleQuery("dog") }}>Dogs</Button>
                <Button onClick={() => { handleQuery("cat") }}>Cats</Button>
                <Button onClick={() => { handleQuery("rabbit") }}>Rabbits</Button>
                <Button onClick={() => { handleQuery("bird") }}>Birds</Button>
            </ul>
            <div>
                {
                    data.map((animal) => (
                        <Link key={animal.id} href={`/animals/${animal.id}`}>
                            <div >
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

export default Page