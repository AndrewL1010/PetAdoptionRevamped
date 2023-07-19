import { Product } from '@/types/TableModels';
import getConnection from '@/utility/dbHandler';
import { NextResponse } from 'next/server';
interface ProductCount {
    total: string
}

export async function POST(request: Request) {
    const data = await request.json()
    const category = data.category;
    const pricing = data.pricing;
    const page = data.page === '0' ? parseInt(data.page) : parseInt(data.page) - 1;
    const database = getConnection();
    if (database) {
        let productQuery = database('products');
        let count = await database('products').count<ProductCount>('* as total').first();
        if (category !== "all") {
            productQuery = productQuery.where({ category: category });
            count = await database('products').where({ category: category }).count<ProductCount>('* as total').first();
        }
        if (pricing !== "all") {
            if(pricing === "ascending"){
                productQuery = productQuery.orderBy('price', 'asc');
            }
            if(pricing === "descending"){
                productQuery = productQuery.orderBy('price', 'desc');
            }
        }
        const products = await productQuery.limit(21).offset(page * 21);
        await database.destroy();
        return NextResponse.json({ status: "success", products: products, count: count });


    }
    return NextResponse.json("fail");
}
