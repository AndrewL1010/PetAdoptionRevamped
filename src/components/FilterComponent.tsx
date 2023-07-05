"use client"
import FilterProps from "@/types/FilterProps"
import Animal from "@/types/Animal";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './FilterComponent.module.css'
import { Button } from "../components/bootstrap";
function FilterComponent(PageProps: FilterProps) {
    const animals = PageProps.animals;
    const initialFilter = PageProps.filter
    const [filter, setFilter] = useState<string>(initialFilter);

    return (
        <div>
            <ul className={styles.list}>
                <Button onClick={() => {
                    setFilter('all');
                    document.cookie = "filter=all";
                }}>All</Button>
                <Button onClick={() => {
                    setFilter('dog');
                    document.cookie = "filter=dog";
                }}>Dogs</Button>
                <Button onClick={() => {
                    setFilter('cat');
                    document.cookie = "filter=cat";
                }}>Cats</Button>
                <Button onClick={() => {
                    setFilter('bird');
                    document.cookie = "filter=bird";
                }}>Birds</Button>
                <Button onClick={() => {
                    setFilter('rabbit');
                    document.cookie = "filter=rabbit";
                }}>Rabbits</Button>
            </ul>
            <div className={styles.container}>
                {filter === "all"
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
                                    className={styles.images}
                                ></Image>
                            </div>
                        </Link>
                    ))
                    : animals
                        .filter((animal) => animal.type === filter)
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
                                        className={styles.images}
                                    ></Image>
                                </div>
                            </Link>
                        ))}

            </div>
        </div>

    )
}

export default FilterComponent