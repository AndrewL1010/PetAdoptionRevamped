"use client"
import { Button } from '../../../components/bootstrap';
function Page() {
    const data = [
        {
            type: "dog",
            name: "Max",
            age: 3,
            gender: "male",
            weight: "65 lbs",
            breed: "Labrador Retriever",
            alt: "A friendly and outgoing Labrador Retriever",
            image: "/dogs/Labrador-Retriever.jpg"
        },
        {
            type: "dog",
            name: "Bella",
            age: 2,
            gender: "female",
            weight: "12 lbs",
            breed: "Poodle",
            alt: "An elegant and intelligent Poodle",
            image: "/dogs/Poodle.jpg"
        },
        {
            type: "dog",
            name: "Luna",
            age: 1,
            gender: "female",
            weight: "50 lbs",
            breed: "Bulldog",
            alt_description: "A gentle and affectionate Bulldog",
            image: "/dogs/Bulldog.jpg"
        },
        {
            type: "dog",
            name: "Lucy",
            age: 3,
            gender: "female",
            weight: "25 lbs",
            breed: "French Bulldog",
            alt: "A small and affectionate French Bulldog",
            image: "/dogs/French-Bulldog.jpg"
        },
        {
            type: "dog",
            name: "Rocky",
            age: 5,
            gender: "male",
            weight: "80 lbs",
            breed: "German Shepherd",
            alt: "A loyal and courageous German Shepherd",
            image: "/dogs/German-Shepherd.jpg"
        },
        {
            type: "dog",
            name: "Bella",
            age: 4,
            gender: "female",
            weight: "10 lbs",
            breed: "Havanese",
            alt: "A small and friendly Havanese",
            image: "/dogs/Havanese.jpg"
        },
        {
            type: "dog",
            name: "Charlie",
            age: 4,
            gender: "male",
            weight: "22 lbs",
            breed: "Beagle",
            alt: "A friendly and scent-driven Beagle",
            image: "/dogs/Beagle.jpg"
        },
        {
            type: "dog",
            name: "Lucy",
            age: 2,
            gender: "female",
            weight: "65 lbs",
            breed: "Boxer",
            alt: "An energetic and playful Boxer",
            image: "/dogs/Boxer.jpg"
        },
        {
            type: "dog",
            name: "Rocky",
            age: 3,
            gender: "male",
            weight: "15 lbs",
            breed: "Jack Russell Terrier",
            alt: "An energetic and fearless Jack Russell Terrier",
            image: "/dogs/Jack-Russell-Terrier.jpg"
        },
        {
            type: "dog",
            name: "Cooper",
            age: 6,
            gender: "male",
            weight: "55 lbs",
            breed: "Dalmatian",
            alt: "A unique and energetic Dalmatian",
            image: "/dogs/Dalmatian.jpg"
        },
        {
            type: "dog",
            name: "Daisy",
            age: 3,
            gender: "female",
            weight: "70 lbs",
            breed: "Golden Retriever",
            alt: "A friendly and loyal Golden Retriever",
            image: "/dogs/Golden-Retriever.jpg"
        },
        {
            type: "dog",
            name: "Max",
            age: 4,
            gender: "male",
            weight: "60 lbs",
            breed: "Siberian Husky",
            alt: "An athletic and striking Siberian Husky",
            image: "/dogs/Siberian-Husky.jpg"
        },
        {
            type: "dog",
            name: "Bella",
            age: 2,
            gender: "female",
            weight: "90 lbs",
            breed: "Husky",
            alt: "A beautiful and energetic Husky",
            image: "/dogs/Husky.jpg"
        },
        {
            type: "dog",
            name: "Lola",
            age: 2,
            gender: "female",
            weight: "15 lbs",
            breed: "Chihuahua",
            alt: "A small and alert Chihuahua",
            image: "/dogs/Chihuahua.jpg"
        },
        {
            type: "dog",
            name: "Rocky",
            age: 5,
            gender: "male",
            weight: "90 lbs",
            breed: "Rottweiler",
            alt: "A strong and protective Rottweiler",
            image: "/dogs/Rottweiler.jpg"
        },
        {
            type: "dog",
            name: "Buddy",
            age: 2,
            gender: "male",
            weight: "55 lbs",
            breed: "Border Collie",
            alt: "A highly intelligent and energetic Border Collie",
            image: "/dogs/Border-Collie.jpg"
        },
        {
            type: "dog",
            name: "Lily",
            age: 4,
            gender: "female",
            weight: "18 lbs",
            breed: "Shih Tzu",
            alt: "A cute and affectionate Shih Tzu",
            image: "/dogs/Shih-Tzu.jpg"
        },
        {
            type: "dog",
            name: "Lux",
            age: 4,
            gender: "male",
            weight: "35 lbs",
            breed: "Shiba Inu",
            alt: "A spirited and independent Shiba Inu",
            image: "/dogs/Shiba-Inu.jpg"
        },
        {
            type: "dog",
            name: "Rocky",
            age: 5,
            gender: "male",
            weight: "50 lbs",
            breed: "Basset Hound",
            alt: "A short-legged and friendly Basset Hound",
            image: "/dogs/Basset-Hound.jpg"
        },
        {
            type: "dog",
            name: "Charlie",
            age: 3,
            gender: "male",
            weight: "75 lbs",
            breed: "Doberman Pinscher",
            alt: "A loyal and alert Doberman Pinscher",
            image: "/dogs/Doberman-Pinscher.jpg"
        },
        {
            type: "dog",
            name: "Lucy",
            age: 6,
            gender: "female",
            weight: "75 lbs",
            breed: "Bernese Mountain Dog",
            alt: "A large and gentle Bernese Mountain Dog",
            image: "/dogs/Bernese-Mountain-Dog.jpg"
        },
        {
            type: "dog",
            name: "Mocha",
            age: 3,
            gender: "female",
            weight: "25 lbs",
            breed: "Shetland Sheepdog",
            image: "/dogs/Shetland-Sheepdog.jpg"
        },
        {
            type: "dog",
            name: "Lola",
            age: 2,
            gender: "female",
            weight: "20 lbs",
            breed: "Corgi",
            alt: "A short-legged and affectionate Corgi",
            image: "/dogs/Corgi.jpg"
        },
        {
            type: "dog",
            name: "Cooper",
            age: 3,
            gender: "male",
            weight: "25 lbs",
            breed: "Pug",
            alt: "A wrinkled and playful Pug",
            image: "/dogs/Pug.jpg"
        },
        {
            type: "dog",
            name: "Bear",
            age: 4,
            gender: "male",
            weight: "100 lbs",
            breed: "Great Dane",
            alt: "A giant and gentle Great Dane",
            image: "/dogs/Great-Dane.jpg"
        },
        {
            type: "dog",
            name: "Oscar",
            age: 5,
            gender: "male",
            weight: "60 lbs",
            breed: "Australian Shepherd",
            alt: "A loyal and intelligent Australian Shepherd",
            image: "/dogs/Australian-Shepherd.jpg"
        },
        {
            type: "dog",
            name: "Bailey",
            age: 4,
            gender: "male",
            weight: "30 lbs",
            breed: "Cavalier King Charles Spaniel",
            alt: "A friendly and graceful Cavalier King Charles Spaniel",
            image: "/dogs/Cavalier-King-Charles-Spaniel.jpg"
        },
        {
            type: "dog",
            name: "Sophie",
            age: 3,
            gender: "female",
            weight: "25 lbs",
            breed: "Pomeranian",
            alt: "A fluffy and playful Pomeranian",
            image: "/dogs/Pomeranian.jpg"
        },
        {
            type: "dog",
            name: "Luna",
            age: 5,
            gender: "female",
            weight: "12 lbs",
            breed: "Dachshund",
            alt: "A long-bodied and playful Dachshund",
            image: "/dogs/Dachshund.jpg"
        },
        {
            type: "dog",
            name: "Max",
            age: 2,
            gender: "male",
            weight: "55 lbs",
            breed: "Australian Cattle Dog",
            alt: "A loyal and active Australian Cattle Dog",
            image: "/dogs/Australian-Cattle-Dog.jpg"
        }
    ]
    async function insertDogs() {
        const response = await fetch('/api/insertdogs',
            {
                method: "POST",
                body: JSON.stringify(data)
            }
        )
        const result = await response.json();
        if(result.status === "success"){
            alert("data entered into database");
        }
        else{
            alert("failure");
        }
    }
    return (
        <div>

            <Button onClick={insertDogs}>insert dogs</Button>
        </div>
    )
}

export default Page