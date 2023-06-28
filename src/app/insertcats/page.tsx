"use client"
import { Button } from '../../components/bootstrap';
function Page() {
    const data = [

        {
            type: "cat",
            name: "Luna",
            age: 2,
            gender: "female",
            weight: "9.8 lbs",
            breed: "Maine Coon",
            alt: "A majestic Maine Coon cat",
            image: "/cats/Maine-Coon.jpg"
        },
        {
            type: "cat",
            name: "Oliver",
            age: 4,
            gender: "male",
            weight: "10.5 lbs",
            breed: "British Shorthair",
            alt: "A charming British Shorthair cat",
            image: "/cats/British-Shorthair.jpg"
        },
        {
            type: "cat",
            name: "Bella",
            age: 1,
            gender: "female",
            weight: "10.1 lbs",
            breed: "Bengal",
            alt: "A stunning Bengal cat",
            image: "/cats/Bengal.jpg"
        },
        {
            type: "cat",
            name: "Chloe",
            age: 2,
            gender: "female",
            weight: "10.2 lbs",
            breed: "Persian",
            alt: "A fluffy Persian cat",
            image: "/cats/Persian.jpg"
        },
        {
            type: "cat",
            name: "Max",
            age: 3,
            gender: "male",
            weight: "9.9 lbs",
            breed: "Scottish Fold",
            alt: "An adorable Scottish Fold cat",
            image: "/cats/Scottish-Fold.jpg"
        },
        {
            type: "cat",
            name: "Daisy",
            age: 1,
            gender: "female",
            weight: "10.2 lbs",
            breed: "Sphynx",
            alt: "A unique Sphynx cat",
            image: "/cats/Sphynx.jpg"
        },


        {
            type: "cat",
            name: "Rocky",
            age: 4,
            gender: "male",
            weight: "9.9 lbs",
            breed: "Siberian",
            alt: "A beautiful Siberian cat",
            image: "/cats/Siberian.jpg"
        },
        {
            type: "cat",
            name: "Zoe",
            age: 3,
            gender: "female",
            weight: "10.2 lbs",
            breed: "Russian Blue",
            alt: "An elegant Russian Blue cat",
            image: "/cats/Russian-Blue.jpg"
        },

        {
            type: "cat",
            name: "Lola",
            age: 2,
            gender: "female",
            weight: "10.2 lbs",
            breed: "Siamese",
            alt: "A playful Siamese cat",
            image: "/cats/Siamese.jpg"
        },
        {
            type: "cat",
            name: "Misty",
            age: 2,
            gender: "female",
            weight: "9.7 lbs",
            breed: "Abyssinian",
            alt: "An elegant Abyssinian cat",
            image: "/cats/Abyssinian.jpg"
        },
        {
            type: "cat",
            name: "Rocky",
            age: 3,
            gender: "male",
            weight: "9.8 lbs",
            breed: "Birman",
            alt: "A beautiful Birman cat",
            image: "/cats/Birman.jpg"
        },
        {
            type: "cat",
            name: "Lulu",
            age: 1,
            gender: "female",
            weight: "9.6 lbs",
            breed: "Chartreux",
            alt: "A charming Chartreux cat",
            image: "/cats/Chartreux.jpg"
        },
        {
            type: "cat",
            name: "Charlie",
            age: 4,
            gender: "male",
            weight: "9.5 lbs",
            breed: "Cornish Rex",
            alt: "A playful Cornish Rex cat",
            image: "/cats/Cornish-Rex.jpg"
        },
        {
            type: "cat",
            name: "Lucy",
            age: 2,
            gender: "female",
            weight: "9.7 lbs",
            breed: "Devon Rex",
            alt: "An adorable Devon Rex cat",
            image: "/cats/Devon-Rex.jpg"
        },
        {
            type: "cat",
            name: "Leo",
            age: 3,
            gender: "male",
            weight: "9.8 lbs",
            breed: "Egyptian Mau",
            alt: "A sleek Egyptian Mau cat",
            image: "/cats/Egyptian-Mau.jpg"
        },
        {
            type: "cat",
            name: "Milo",
            age: 1,
            gender: "male",
            weight: "9.6 lbs",
            breed: "Havana Brown",
            alt: "A unique Havana Brown cat",
            image: "/cats/Havana-Brown.jpg"
        },
        {
            type: "cat",
            name: "Lola",
            age: 4,
            gender: "female",
            weight: "9.5 lbs",
            breed: "Japanese Bobtail",
            alt: "An elegant Japanese Bobtail cat",
            image: "/cats/Japanese-Bobtail.jpg"
        },
        {
            type: "cat",
            name: "Oliver",
            age: 2,
            gender: "male",
            weight: "9.7 lbs",
            breed: "Korat",
            alt: "A stunning Korat cat",
            image: "/cats/Korat.jpg"
        },
        {
            type: "cat",
            name: "Lily",
            age: 1,
            gender: "female",
            weight: "9.8 lbs",
            breed: "Manx",
            alt: "A tailless Manx cat",
            image: "/cats/Manx.jpg"
        },
        {
            type: "cat",
            name: "Oscar",
            age: 3,
            gender: "male",
            weight: "9.6 lbs",
            breed: "Norwegian Forest",
            alt: "A majestic Norwegian Forest cat",
            image: "/cats/Norwegian-Forest.jpg"
        },
        {
            type: "cat",
            name: "Chloe",
            age: 2,
            gender: "female",
            weight: "9.5 lbs",
            breed: "Ocicat",
            alt: "A spotted Ocicat cat",
            image: "/cats/Ocicat.jpg"
        },
        {
            type: "cat",
            name: "Max",
            age: 4,
            gender: "male",
            weight: "9.7 lbs",
            breed: "Ragamuffin",
            alt: "A fluffy Ragamuffin cat",
            image: "/cats/Ragamuffin.jpg"
        },
        {
            type: "cat",
            name: "Luna",
            age: 1,
            gender: "female",
            weight: "9.8 lbs",
            breed: "Somali",
            alt: "A beautiful Somali cat",
            image: "/cats/Somali.jpg"
        },
        {
            type: "cat",
            name: "Simba",
            age: 3,
            gender: "male",
            weight: "9.6 lbs",
            breed: "Tonkinese",
            alt: "A playful Tonkinese cat",
            image: "/cats/Tonkinese.jpg"
        },
        {
            type: "cat",
            name: "Daisy",
            age: 2,
            gender: "female",
            weight: "9.5 lbs",
            breed: "Turkish Angora",
            alt: "An elegant Turkish Angora cat",
            image: "/cats/Turkish-Angora.jpg"
        },
        {
            type: "cat",
            name: "Jack",
            age: 4,
            gender: "male",
            weight: "9.7 lbs",
            breed: "Turkish Van",
            alt: "A charming Turkish Van cat",
            image: "/cats/Turkish-Van.jpg"
        },
        {
            type: "cat",
            name: "Sophie",
            age: 2,
            gender: "female",
            weight: "9.8 lbs",
            breed: "American Bobtail",
            alt: "A unique American Bobtail cat",
            image: "/cats/American-Bobtail.jpg"
        },
        {
            type: "cat",
            name: "Tigger",
            age: 3,
            gender: "male",
            weight: "9.6 lbs",
            breed: "American Curl",
            alt: "A curious American Curl cat",
            image: "/cats/American-Curl.jpg"
        },
        {
            type: "cat",
            name: "Coco",
            age: 1,
            gender: "female",
            weight: "9.5 lbs",
            breed: "Balinese",
            alt: "An elegant Balinese cat",
            image: "/cats/Balinese.jpg"
        },
        {
            type: "cat",
            name: "Gizmo",
            age: 4,
            gender: "male",
            weight: "9.7 lbs",
            breed: "Bombay",
            alt: "A sleek Bombay cat",
            image: "/cats/Bombay.jpg"
        }


    ];
    async function insertCats() {
        const response = await fetch('/api/insertcats',
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

            <Button onClick={insertCats}>insert Cats</Button>
        </div>
    )
}

export default Page