import { NextResponse } from 'next/server';
import { env } from '../../../utility/EnvironmentValidatior';
import { Product } from '@/types/TableModels';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: "2022-11-15" });

export async function POST(request: Request) {
    try {
        const cart = await request.json();
        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            line_items: cart.map((item: Product): Stripe.Checkout.SessionCreateParams.LineItem => {
                return {
                    price_data: {
                        currency: "cad",
                        product_data: {
                            name: item.name,
                            images: [`${env.BASE_URL}${item.image_path}`],
                        },
                        unit_amount: Math.round(item.price * 100),
                        tax_behavior: "exclusive"
                        


                    },
                    quantity: item.quantity !== undefined ? item.quantity : 0,


                }
            }),
            success_url: `${env.BASE_URL}/cart?success=true`,
            cancel_url: `${env.BASE_URL}/cart?canceled=true`,
            client_reference_id: "Pet Sanctuary",
            automatic_tax: { enabled: true }

        });
        return NextResponse.json(session.url);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Something went wrong on server" }, { status: 500 });
    }
}

