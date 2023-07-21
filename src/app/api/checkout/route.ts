import { NextResponse } from 'next/server';
import { env } from '../../../utility/EnvironmentValidatior';
import { Product } from '@/types/TableModels';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(request: Request) {
    try {
        const cart = await request.json();
        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            line_items: cart.map((item: Product) => {
                return {
                    price_data: {
                        currency: "cad",
                        product_data: {
                            name: item.name,
                            images: [`${env.BASE_URL}${item.image_path}`],
                        },
                        unit_amount: Math.round(parseFloat(item.price) * 100),

                    },
                    quantity: item.quantity !== undefined ? parseInt(item.quantity) : 0,

                }
            }),
            success_url: `${env.BASE_URL}/cart?success=true`,
            cancel_url: `${env.BASE_URL}/cart?canceled=true`,
            client_reference_id: "Pet Sanctuary",
        });
        return NextResponse.json(session.url);
    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: err }, { status: 500 });
    }
}

