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
            image: "/dogs/Labrador-Retriever.jpg",
            description: "Meet Max, the friendly Labrador Retriever. With his glossy coat and wagging tail, Max is a true people-pleaser. He enjoys playing fetch, going for long walks, and swimming. Max has an appetite for high-quality dog food that provides him with the necessary nutrients for his active lifestyle."
        },
        {
            type: "dog",
            name: "Bella",
            age: 2,
            gender: "female",
            weight: "12 lbs",
            breed: "Poodle",
            alt: "An elegant and intelligent Poodle",
            image: "/dogs/Poodle.jpg",
            description: "Meet Bella, the elegant Poodle. With her curly, hypoallergenic coat and intelligent demeanor, Bella is a sophisticated companion. She excels in obedience training, enjoys mental stimulation, and loves participating in dog sports. Bella's diet consists of high-quality dog food that keeps her coat healthy and her mind sharp."
        },
        {
            type: "dog",
            name: "Luna",
            age: 1,
            gender: "female",
            weight: "50 lbs",
            breed: "Bulldog",
            alt: "A gentle and affectionate Bulldog",
            image: "/dogs/Bulldog.jpg",
            description: "Introducing Luna, the adorable Bulldog. With her wrinkled face and lovable personality, Luna is a delightful companion. She enjoys leisurely walks, snuggling on the couch, and engaging in gentle playtime. Luna's diet consists of a balanced mix of high-quality dog food that keeps her healthy and content."
        },
        {
            type: "dog",
            name: "Lucy",
            age: 3,
            gender: "female",
            weight: "25 lbs",
            breed: "French Bulldog",
            alt: "A small and affectionate French Bulldog",
            image: "/dogs/French-Bulldog.jpg",
            description: "Say hello to Lucy, the playful French Bulldog. With her bat-like ears and affectionate nature, Lucy is a joy to be around. She loves interactive play, short walks, and spending quality time with her human family. Lucy's diet includes high-quality dog food that supports her overall well-being and keeps her in good shape."
        },
        {
            type: "dog",
            name: "Rocky",
            age: 5,
            gender: "male",
            weight: "80 lbs",
            breed: "German Shepherd",
            alt: "A loyal and courageous German Shepherd",
            image: "/dogs/German-Shepherd.jpg",
            description: "Meet Rocky, the loyal German Shepherd. With his noble appearance and intelligence, Rocky is a wonderful companion. He enjoys obedience training, engaging in mentally stimulating activities, and going for long hikes. Rocky's diet consists of high-quality dog food that provides him with the necessary energy for his active lifestyle."
        },
        {
            type: "dog",
            name: "Bella",
            age: 4,
            gender: "female",
            weight: "10 lbs",
            breed: "Havanese",
            alt: "A small and friendly Havanese",
            image: "/dogs/Havanese.jpg",
            description: "Introducing Bella, the charming Havanese. With her silky coat and friendly demeanor, Bella is a delightful companion. She loves being around people, going for leisurely walks, and participating in fun agility exercises. Bella's diet includes high-quality dog food that keeps her coat shiny and her body healthy."
        },
        {
            type: "dog",
            name: "Charlie",
            age: 4,
            gender: "male",
            weight: "22 lbs",
            breed: "Beagle",
            alt: "A friendly and scent-driven Beagle",
            image: "/dogs/Beagle.jpg",
            description: "Say hello to Charlie, the spirited Beagle. With his floppy ears and inquisitive nature, Charlie is always ready for an adventure. He enjoys exploring scents, engaging in interactive games, and going on long walks. Charlie's diet includes high-quality dog food that provides him with the necessary nutrition for his active lifestyle."
        },
        {
            type: "dog",
            name: "Lucy",
            age: 2,
            gender: "female",
            weight: "65 lbs",
            breed: "Boxer",
            alt: "An energetic and playful Boxer",
            image: "/dogs/Boxer.jpg",
            description: "Meet Lucy, the energetic Boxer. With her muscular build and playful personality, Lucy is a bundle of joy. She enjoys vigorous play sessions, going for runs, and participating in training activities. Lucy's diet consists of high-quality dog food that supports her active lifestyle and provides her with the necessary nutrients."
        },
        {
            type: "dog",
            name: "Rocky",
            age: 3,
            gender: "male",
            weight: "15 lbs",
            breed: "Jack Russell Terrier",
            alt: "An energetic and fearless Jack Russell Terrier",
            image: "/dogs/Jack-Russell-Terrier.jpg",
            description: "Introducing Rocky, the spirited Jack Russell Terrier. With his compact size and boundless energy, Rocky is always on the go. He loves engaging in mentally stimulating activities, playing fetch, and going on adventurous hikes. Rocky's diet includes high-quality dog food that provides him with the necessary energy to keep up with his active nature."
        },
        {
            type: "dog",
            name: "Cooper",
            age: 6,
            gender: "male",
            weight: "55 lbs",
            breed: "Dalmatian",
            alt: "A unique and energetic Dalmatian",
            image: "/dogs/Dalmatian.jpg",
            description: "Introducing Cooper, the lively Dalmatian. With his distinctive spots and boundless energy, Cooper is always ready for action. He loves going for runs, participating in agility training, and playing interactive games. Cooper's diet includes high-quality dog food that provides him with the necessary energy for his active lifestyle."
        },
        {
            type: "dog",
            name: "Daisy",
            age: 3,
            gender: "female",
            weight: "70 lbs",
            breed: "Golden Retriever",
            alt: "A friendly and loyal Golden Retriever",
            image: "/dogs/Golden-Retriever.jpg",
            description: "Say hello to Daisy, the friendly Golden Retriever. With her beautiful golden coat and gentle nature, Daisy is a beloved family companion. She enjoys playing fetch, going for long walks, and swimming. Daisy's diet consists of high-quality dog food that supports her overall well-being and maintains her healthy coat."
        },
        {
            type: "dog",
            name: "Max",
            age: 4,
            gender: "male",
            weight: "60 lbs",
            breed: "Siberian Husky",
            alt: "An athletic and striking Siberian Husky",
            image: "/dogs/Siberian-Husky.jpg",
            description: "Meet Max, the adventurous Siberian Husky. With his striking blue or multicolored eyes and thick coat, Max is a true explorer. He loves outdoor activities, such as sledding, hiking, and running. Max's diet includes high-quality dog food that provides him with the necessary nutrients for his active and robust nature."
        },
        {
            type: "dog",
            name: "Bella",
            age: 2,
            gender: "female",
            weight: "90 lbs",
            breed: "Husky",
            alt: "A beautiful and energetic Husky",
            image: "/dogs/Husky.jpg",
            description: "Introducing Bella, the playful Husky. With her stunning appearance and friendly personality, Bella is a delightful companion. She enjoys interactive play sessions, going for long walks, and participating in dog sports like agility or obedience. Bella's diet consists of high-quality dog food that supports her active lifestyle and keeps her coat in top condition."
        },
        {
            type: "dog",
            name: "Lola",
            age: 2,
            gender: "female",
            weight: "15 lbs",
            breed: "Chihuahua",
            alt: "A small and alert Chihuahua",
            image: "/dogs/Chihuahua.jpg",
            description: "Say hello to Lola, the tiny Chihuahua with a big personality. With her expressive eyes and spunky nature, Lola is a true charmer. She enjoys cuddling, short walks, and playing with toys suitable for her size. Lola's diet includes high-quality dog food that provides her with the necessary nutrients for her petite frame."
        },
        {
            type: "dog",
            name: "Rocky",
            age: 5,
            gender: "male",
            weight: "90 lbs",
            breed: "Rottweiler",
            alt: "A strong and protective Rottweiler",
            image: "/dogs/Rottweiler.jpg",
            description: "Meet Rocky, the loyal Rottweiler. With his strong build and protective nature, Rocky is a devoted family companion. He enjoys obedience training, engaging in physically challenging activities, and spending quality time with his loved ones. Rocky's diet consists of high-quality dog food that supports his active lifestyle and keeps him strong."
        },
        {
            type: "dog",
            name: "Buddy",
            age: 2,
            gender: "male",
            weight: "55 lbs",
            breed: "Border Collie",
            alt: "A highly intelligent and energetic Border Collie",
            image: "/dogs/Border-Collie.jpg",
            description: "Introducing Buddy, the intelligent Border Collie. With his keen herding instincts and quick learning abilities, Buddy is a remarkable working dog. He excels in obedience training, enjoys mental stimulation, and thrives when given tasks to complete. Buddy's diet includes high-quality dog food that provides him with the necessary nutrients for his active and agile nature."
        },
        {
            type: "dog",
            name: "Lily",
            age: 4,
            gender: "female",
            weight: "18 lbs",
            breed: "Shih Tzu",
            alt: "A cute and affectionate Shih Tzu",
            image: "/dogs/Shih-Tzu.jpg",
            description: "Meet Lily, the adorable Shih Tzu. With her luxurious, long coat and gentle disposition, Lily is a lovable companion. She enjoys leisurely walks, snuggling on laps, and spending quality time with her family. Lily's diet consists of high-quality dog food that keeps her healthy and nourished."
        },
        {
            type: "dog",
            name: "Lux",
            age: 4,
            gender: "male",
            weight: "35 lbs",
            breed: "Shiba Inu",
            alt: "A spirited and independent Shiba Inu",
            image: "/dogs/Shiba-Inu.jpg",
            description: "Introducing Lux, the spirited Shiba Inu. With his fox-like appearance and independent nature, Lux is a captivating companion. He enjoys daily walks, mentally stimulating games, and participating in activities that challenge his intelligence. Lux's diet includes high-quality dog food that supports his active lifestyle and maintains his well-being."
        },
        {
            type: "dog",
            name: "Rocky",
            age: 5,
            gender: "male",
            weight: "50 lbs",
            breed: "Basset Hound",
            alt: "A short-legged and friendly Basset Hound",
            image: "/dogs/Basset-Hound.jpg",
            description: "Say hello to Rocky, the charming Basset Hound. With his droopy ears and friendly demeanor, Rocky is a true sweetheart. He enjoys leisurely walks, sniffing around in the outdoors, and spending quality time with his loved ones. Rocky's diet consists of high-quality dog food that provides him with the necessary nutrients for his laid-back lifestyle."
        },
        {
            type: "dog",
            name: "Charlie",
            age: 3,
            gender: "male",
            weight: "75 lbs",
            breed: "Doberman Pinscher",
            alt: "A loyal and alert Doberman Pinscher",
            image: "/dogs/Doberman-Pinscher.jpg",
            description: "Meet Charlie, the loyal Doberman Pinscher. With his sleek coat and confident personality, Charlie is a devoted companion. He thrives on mental and physical stimulation, enjoying activities such as obedience training, running, and playing interactive games. Charlie's diet includes high-quality dog food that supports his active nature and overall well-being."
        },
        {
            type: "dog",
            name: "Lucy",
            age: 6,
            gender: "female",
            weight: "75 lbs",
            breed: "Bernese Mountain Dog",
            alt: "A large and gentle Bernese Mountain Dog",
            image: "/dogs/Bernese-Mountain-Dog.jpg",
            description: "Introducing Lucy, the gentle Bernese Mountain Dog. With her striking tri-color coat and calm demeanor, Lucy is a beloved family pet. She enjoys leisurely walks, spending time outdoors, and being around her loved ones. Lucy's diet consists of high-quality dog food that provides her with the necessary nutrition for her large and robust frame."
        },
        {
            type: "dog",
            name: "Mocha",
            age: 3,
            gender: "female",
            weight: "25 lbs",
            breed: "Shetland Sheepdog",
            alt: "A fluffy cute Shetland Sheepdog",
            image: "/dogs/Shetland-Sheepdog.jpg",
            description: "Say hello to Mocha, the intelligent Shetland Sheepdog. With her luscious double coat and agile nature, Mocha is a remarkable companion. She excels in obedience training, enjoys mentally stimulating activities, and thrives on having a job to do. Mocha's diet includes high-quality dog food that supports her active and intelligent nature."
        },
        {
            type: "dog",
            name: "Lola",
            age: 2,
            gender: "female",
            weight: "20 lbs",
            breed: "Corgi",
            alt: "A short-legged and affectionate Corgi",
            image: "/dogs/Corgi.jpg",
            description: "Meet Lola, the charismatic Corgi. With her short legs and happy disposition, Lola is a delightful companion. She enjoys daily walks, playing fetch, and participating in activities that challenge her agility. Lola's diet consists of high-quality dog food that provides her with the necessary nutrients for her active lifestyle."
        },
        {
            type: "dog",
            name: "Cooper",
            age: 3,
            gender: "male",
            weight: "25 lbs",
            breed: "Pug",
            alt: "A wrinkled and playful Pug",
            image: "/dogs/Pug.jpg",
            description: "Introducing Cooper, the lovable Pug. With his wrinkled face and affectionate personality, Cooper is a true charmer. He enjoys being around people, going for leisurely walks, and engaging in interactive playtime. Cooper's diet includes high-quality dog food that supports his overall well-being and keeps him happy and healthy."
        },
        {
            type: "dog",
            name: "Bear",
            age: 4,
            gender: "male",
            weight: "100 lbs",
            breed: "Great Dane",
            alt: "A giant and gentle Great Dane",
            image: "/dogs/Great-Dane.jpg",
            description: "Meet Bear, the majestic Great Dane. With his towering height and gentle nature, Bear is a true gentle giant. He enjoys leisurely walks, lounging around, and spending quality time with his family. Bear's diet consists of high-quality dog food that provides him with the necessary nutrition for his large size."
        },
        {
            type: "dog",
            name: "Oscar",
            age: 5,
            gender: "male",
            weight: "60 lbs",
            breed: "Australian Shepherd",
            alt: "A loyal and intelligent Australian Shepherd",
            image: "/dogs/Australian-Shepherd.jpg",
            description: "Introducing Oscar, the intelligent Australian Shepherd. With his beautiful coat and energetic personality, Oscar is a remarkable companion. He excels in obedience training, enjoys agility exercises, and thrives when given mental and physical challenges. Oscar's diet includes high-quality dog food that supports his active lifestyle and provides him with the necessary nutrients."
        },
        {
            type: "dog",
            name: "Bailey",
            age: 4,
            gender: "male",
            weight: "30 lbs",
            breed: "Cavalier King Charles Spaniel",
            alt: "A friendly and graceful Cavalier King Charles Spaniel",
            image: "/dogs/Cavalier-King-Charles-Spaniel.jpg",
            description: "Say hello to Bailey, the affectionate Cavalier King Charles Spaniel. With his expressive eyes and friendly demeanor, Bailey is a beloved family pet. He enjoys leisurely walks, cuddling with his loved ones, and participating in gentle playtime. Bailey's diet consists of high-quality dog food that keeps him healthy and nourished."
        },
        {
            type: "dog",
            name: "Sophie",
            age: 3,
            gender: "female",
            weight: "25 lbs",
            breed: "Pomeranian",
            alt: "A fluffy and playful Pomeranian",
            image: "/dogs/Pomeranian.jpg",
            description: "Meet Sophie, the adorable Pomeranian. With her fluffy coat and lively personality, Sophie is a delightful companion. She loves attention, playing with toys, and going for short walks. Sophie's diet includes high-quality dog food that supports her overall well-being and keeps her coat healthy and shiny."
        },
        {
            type: "dog",
            name: "Luna",
            age: 5,
            gender: "female",
            weight: "12 lbs",
            breed: "Dachshund",
            alt: "A long-bodied and playful Dachshund",
            image: "/dogs/Dachshund.jpg",
            description: "Introducing Luna, the spirited Dachshund. With her long body and playful nature, Luna is a bundle of energy. She enjoys daily walks, playing with toys suitable for her size, and engaging in mentally stimulating activities. Luna's diet consists of high-quality dog food that provides her with the necessary nutrients for her active lifestyle."
        },
        {
            type: "dog",
            name: "Max",
            age: 2,
            gender: "male",
            weight: "55 lbs",
            breed: "Australian Cattle Dog",
            alt: "A loyal and active Australian Cattle Dog",
            image: "/dogs/Australian-Cattle-Dog.jpg",
            description: "Say hello to Max, the loyal Australian Cattle Dog. With his sturdy build and alert personality, Max is a devoted companion. He excels in obedience training, enjoys physical challenges such as hiking or agility, and thrives on having a job to do. Max's diet includes high-quality dog food that supports his active nature and overall well-being."
        }
    ]
    async function insertDogs() {
        const response = await fetch('/api/insertanimals',
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