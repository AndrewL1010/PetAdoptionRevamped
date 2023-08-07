"use client"
import { FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import styles from './page.module.css'
import { Button, Spinner } from '@/components/bootstrap'
import { useRouter, useSearchParams } from 'next/navigation'
import { Product } from '@/types/TableModels'
import useSWR from 'swr'
import Link from 'next/link'
import ImageComponent from '@/components/ImageComponent/ImageComponent'
import CartButton from '@/components/CartButton/CartButton'


function Page() {
    const [category, setCategory] = useState<string>("");
    const [pricing, setPricing] = useState<string>("");
    const router = useRouter();
    const searchParams = useSearchParams();

    const paramsPricing = searchParams.get('pricing') || 'all';
    const paramsCategory = searchParams.get('category') || 'all';
    const page = searchParams.get('page') || '0';

    const handlePage = (page: string) => {
        const pricing = searchParams.get('pricing') || 'all';
        const category = searchParams.get('category') || 'all';
        const url = new URLSearchParams({ pricing: pricing, category: category, page: page });
        router.push("/products?" + url);


    }
    const handleFilter = () => {
        const url = new URLSearchParams({ pricing: pricing, category: category });
        router.push("/products?" + url);
    }

    const fetcher = async () => {
        const pricing = searchParams.get('pricing') || 'all';
        const category = searchParams.get('category') || 'all';
        const page = searchParams.get('page') || '0';
        const data = {
            page: page,
            pricing: pricing,
            category: category,
        }
        const response = await fetch('/api/getProducts',
            {
                method: "POST",
                body: JSON.stringify(data)
            }
        )
        const resultdata = await response.json();
        return resultdata as { status: string, products: Product[], count: { total: string } };

    }

    const { data, error, isLoading } = useSWR(`/api/getProducts?pricing=${paramsPricing}&category=${paramsCategory}&page=${page}`, fetcher);

    if (error) {
        return (
            <div>Product you are looking for does not exist</div>
        )
    }
    if (isLoading) {
        return (
            <div className={styles.spinner} >
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }
    if (!data) {
        return (
            <div>Product you are looking for does not exist</div>
        )
    }
    if (data.products.length === 0) {
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
        <div className={styles.parentcontainer}>
            <div className={styles.filtercontainer}>
                <FormControl>
                    <FormLabel id="pricing">Pricing</FormLabel>
                    <RadioGroup
                        name="pricing-group"
                        onChange={(e) => { setPricing(e.target.value) }}


                    >
                        <FormControlLabel defaultChecked value="ascending" control={<Radio />} label="low to high" />
                        <FormControlLabel value="descending" control={<Radio />} label="high to low" />
                    </RadioGroup>
                </FormControl>

                <TextField
                    className={styles.select}
                    select
                    label="Category"
                    size='medium'
                    defaultValue=""
                    onChange={(e) => { setCategory(e.target.value) }}
                >
                    <MenuItem key={1} value="all">
                        All
                    </MenuItem>
                    <MenuItem key={2} value="Dog">
                        Dog
                    </MenuItem>
                    <MenuItem key={3} value="Cat">
                        Cat
                    </MenuItem>
                    <MenuItem key={4} value="Toys">
                        Toys
                    </MenuItem>
                    <MenuItem key={5} value="Reptiles">
                        Reptiles
                    </MenuItem>
                    <MenuItem key={6} value="Bird">
                        Bird
                    </MenuItem>
                    <MenuItem key={7} value="Small Pets">
                        Small Animal
                    </MenuItem>
                    <MenuItem key={8} value="Fish">
                        Fish
                    </MenuItem>
                    <MenuItem key={9} value="Food">
                        Food
                    </MenuItem>
                </TextField>
            </div>
            <div className={styles.buttoncontainer}>
                <Button className={styles.button} onClick={handleFilter}>Save Filter</Button>
            </div>

            <div className={styles.productscontainer}>
                {data.products.map((product) => (
                    <Link href={`/products/${product.id}`} key={product.id} className={styles.product}>
                        <h3>{product.name}</h3>
                        <ImageComponent
                            path={product.image_path}
                            width={0}
                            height={0}
                            alt={product.description}
                            small={false}></ImageComponent>
                        <p className={styles.prices}>${product.price}</p>
                        <CartButton product={product}></CartButton>
                    </Link>
                ))}

            </div>
            <div className={styles.page_number_container}>
                {array.map((page_number) => (
                    <Button key={page_number} onClick={() => { handlePage(page_number.toString()) }} style={{ opacity: page === page_number.toString() ? 0.5 : page === "0" && page_number === 1 ? 0.5 : 1 }}>{page_number}</Button>
                ))

                }
            </div>

        </div >
    )
}

export default Page