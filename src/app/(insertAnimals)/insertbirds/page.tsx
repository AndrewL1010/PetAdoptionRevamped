"use client"
import { Button } from '../../../components/bootstrap';
function Page() {
    const data = [
        {
            type: "bird",
            name: "Charlie",
            age: 2,
            gender: "male",
            weight: "0.7 lbs",
            breed: "African Grey Parrot",
            alt: "Intelligent African Grey Parrot",
            image: "/birds/African-Grey-Parrot.jpg"
        },
        {
            type: "bird",
            name: "Lola",
            age: 1,
            gender: "female",
            weight: "0.4 lbs",
            breed: "Alexandrine Parakeet",
            alt: "Colorful Alexandrine Parakeet",
            image: "/birds/Alexandrine-Parakeet.jpg"
        },
        {
            type: "bird",
            name: "Rio",
            age: 3,
            gender: "male",
            weight: "1.0 lbs",
            breed: "Amazon Parrot",
            alt: "Talkative Amazon Parrot",
            image: "/birds/Amazon-Parrot.jpg"
        },
        {
            type: "bird",
            name: "Sunny",
            age: 2,
            gender: "female",
            weight: "1.5 lbs",
            breed: "Blue-and-Gold Macaw",
            alt: "Vibrant Blue-And-Gold Macaw",
            image: "/birds/Blue-And-Gold-Macaw.jpg"
        },
        {
            type: "bird",
            name: "Pippin",
            age: 1,
            gender: "male",
            weight: "0.6 lbs",
            breed: "Blue Crowned Conure",
            alt: "Cheerful Blue Crowned Conure",
            image: "/birds/Blue-Crowned-Conure.jpg"
        },
        {
            type: "bird",
            name: "Milo",
            age: 2,
            gender: "male",
            weight: "0.9 lbs",
            breed: "Blue Headed Pionus",
            alt: "Stunning Blue Headed Pionus",
            image: "/birds/Blue-Headed-Pionus.jpg"
        },
        {
            type: "bird",
            name: "Sky",
            age: 1,
            gender: "female",
            weight: "0.3 lbs",
            breed: "Budgie Parakeet",
            alt: "Playful Budgie Parakeet",
            image: "/birds/Budgie-Parakeet.jpg"
        },
        {
            type: "bird",
            name: "Tango",
            age: 2,
            gender: "male",
            weight: "0.8 lbs",
            breed: "Caique",
            alt: "Energetic Caique bird",
            image: "/birds/Caique.jpg"
        },
        {
            type: "bird",
            name: "Sunny",
            age: 1,
            gender: "female",
            weight: "0.4 lbs",
            breed: "Canary",
            alt: "Melodious Canary",
            image: "/birds/Canary.jpg"
        },
        {
            type: "bird",
            name: "Coco",
            age: 2,
            gender: "male",
            weight: "0.5 lbs",
            breed: "Cockatiel",
            alt: "Friendly Cockatiel",
            image: "/birds/Cockatiel.jpg"
        },
        {
            type: "bird",
            name: "Max",
            age: 3,
            gender: "male",
            weight: "1.2 lbs",
            breed: "Cockatoo",
            alt: "Gorgeous Cockatoo",
            image: "/birds/Cockatoo.jpg"
        },
        {
            type: "bird",
            name: "Kiwi",
            age: 2,
            gender: "female",
            weight: "0.9 lbs",
            breed: "Conure",
            alt: "Colorful Conure",
            image: "/birds/Conure.jpg"
        },
        {
            type: "bird",
            name: "Ruby",
            age: 1,
            gender: "female",
            weight: "0.3 lbs",
            breed: "Crimson Rosella",
            alt: "Beautiful Crimson Rosella",
            image: "/birds/Crimson-Rosella.jpg"
        },
        {
            type: "bird",
            name: "Dusty",
            age: 2,
            gender: "male",
            weight: "0.2 lbs",
            breed: "Diamond Dove",
            alt: "Graceful Diamond Dove",
            image: "/birds/Diamond-Dove.jpg"
        },
        {
            type: "bird",
            name: "Finn",
            age: 1,
            gender: "male",
            weight: "0.1 lbs",
            breed: "Finch",
            alt: "Charming Finch",
            image: "/birds/Finch.jpg"
        },
        {
            type: "bird",
            name: "Mocchi",
            age: 2,
            gender: "female",
            weight: "0.3 lbs",
            breed: "Lory",
            alt: "Colorful Lory bird",
            image: "/birds/Lory.jpg"
        },
        {
            type: "bird",
            name: "Ozzy",
            age: 3,
            gender: "male",
            weight: "1.8 lbs",
            breed: "Macaw",
            alt: "Magnificent Macaw",
            image: "/birds/Macaw.jpg"
        },
        {
            type: "bird",
            name: "Piper",
            age: 2,
            gender: "female",
            weight: "0.3 lbs",
            breed: "Song Canary",
            alt: "Melodious Song Canary",
            image: "/birds/Song-Canary.jpg"
        },
        {
            type: "bird",
            name: "Oliver",
            age: 1,
            gender: "male",
            weight: "0.7 lbs",
            breed: "Vasa Parrot",
            alt: "Colorful Vasa Parrot",
            image: "/birds/Vasa-Parrot.jpg"
        },
        {
            type: "bird",
            name: "Peach",
            age: 1,
            gender: "female",
            weight: "0.9 lbs",
            breed: "Sun Conure",
            alt: "Colorful Sun Conure",
            image: "/birds/Sun-Conure.jpg"
        }
    ]
    async function insertBirds() {
        const response = await fetch('/api/insertbirds',
            {
                method: "POST",
                body: JSON.stringify(data)
            }
        )
        const result = await response.json();
        if (result.status === "success") {
            alert("data entered into database");
        }
        else {
            alert("failure");
        }
    }
    return (
        <div>

            <Button onClick={insertBirds}>insert Birds</Button>
        </div>
    )
}

export default Page