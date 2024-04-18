"use client"
import { FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, MenuItem, TextField, CircularProgress, Button } from '@mui/material'
import React, { useState } from 'react'
import styles from './page.module.css'
import { Spinner } from '@/components/bootstrap'
import { useRouter, useSearchParams } from 'next/navigation'
import { Product } from '@/types/TableModels'
import useSWR from 'swr'
import ProductCard from '@/components/ProductCard/ProductCard'

function ProductComponent() {
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
                <CircularProgress style={{'color': 'white'}} size="1rem"/>
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
                    <label style={{color: "white"}} id="pricing">Pricing</label>
                    <RadioGroup
                        name="pricing-group"
                        onChange={(e) => { setPricing(e.target.value) }}
                        sx={{color: "white"}}


                    >
                        <FormControlLabel sx={{color:"white", borderColor:"white"}} defaultChecked value="ascending" control={<Radio />} label="low to high" />
                        <FormControlLabel sx={{color:"white", borderColor:"white"}} value="descending" control={<Radio />} label="high to low" />
                    </RadioGroup>
                </FormControl>

                <TextField
                    className={styles.select}
                    select
                    label="Category"
                    size='medium'
                    defaultValue=""
                    onChange={(e) => { setCategory(e.target.value) }}
                    sx={{color:"white", borderColor:"white"}}
                    inputProps={{
                        MenuProps: {
                            MenuListProps: {
                                sx: {
                                    backgroundColor: 'purple'
                                }
                            }
                        }
                    }}
                >
                    <MenuItem className={styles.item} key={1} value="all">
                        All
                    </MenuItem>
                    <MenuItem className={styles.item} key={2} value="Dog">
                        Dog
                    </MenuItem>
                    <MenuItem className={styles.item} key={3} value="Cat">
                        Cat
                    </MenuItem>
                    <MenuItem className={styles.item} key={4} value="Toys">
                        Toys
                    </MenuItem>
                    <MenuItem className={styles.item} key={5} value="Reptiles">
                        Reptiles
                    </MenuItem>
                    <MenuItem className={styles.item} key={6} value="Bird">
                        Bird
                    </MenuItem>
                    <MenuItem className={styles.item} key={7} value="Small Pets">
                        Small Animal
                    </MenuItem>
                    <MenuItem className={styles.item} key={8} value="Fish">
                        Fish
                    </MenuItem>
                    <MenuItem className={styles.item} key={9} value="Food">
                        Food
                    </MenuItem>
                </TextField>
            </div>
            <div className={styles.buttoncontainer}>
                <Button variant='contained' className={styles.button} onClick={handleFilter}>Save Filter</Button>
            </div>

            <div className={styles.productscontainer}>
                {data.products.map((product) => (
                    <ProductCard product={product} key={product.id}></ProductCard>
                ))}

            </div>
            <div className={styles.page_number_container}>
                {array.map((page_number) => (
                    <Button className={styles.pagination} key={page_number} onClick={() => { handlePage(page_number.toString()) }} style={{ opacity: page === page_number.toString() ? 0.5 : page === "0" && page_number === 1 ? 0.5 : 1 }}>{page_number}</Button>
                ))

                }
            </div>

        </div >
    )
}

export default ProductComponent