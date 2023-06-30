"use client"
import { Button } from '../../../components/bootstrap';
function Page() {
    const data = [
        {
            type: "rabbit",
            name: "Fluffy",
            age: 2,
            gender: "male",
            weight: "1.5 lbs",
            breed: "Lionhead",
            alt: "Adorable lionhead rabbit",
            image: "/rabbits/Lionhead.jpg",
            description: "Meet Fluffy, the adorable Lionhead rabbit. With its distinctive mane-like fur and gentle nature, Fluffy is an endearing companion. Fluffy enjoys hopping around, exploring its surroundings, and receiving gentle pets. Its diet consists of fresh hay, a variety of leafy greens, and high-quality rabbit pellets to keep it healthy and content."
        },
        {
            type: "rabbit",
            name: "Coco",
            age: 1,
            gender: "female",
            weight: "0.8 lbs",
            breed: "Dutch",
            alt: "Beautiful Dutch rabbit",
            image: "/rabbits/Dutch.jpg",
            description: "Introducing Coco, the charming Dutch rabbit. With its sleek and colorful coat, Coco is a delightful addition to any home. Coco loves to hop and play, and enjoys spending time with its human family. Its diet consists of fresh hay, a mix of vegetables, and high-quality rabbit pellets to provide the essential nutrients it needs."
        },

        {
            type: "rabbit",
            name: "Hazel",
            age: 2,
            gender: "female",
            weight: "1.1 lbs",
            breed: "Netherland Dwarf",
            alt: "Tiny Netherland Dwarf rabbit",
            image: "/rabbits/Netherland-Dwarf.jpg",
            description: "Say hello to Hazel, the tiny Netherland Dwarf rabbit. With its compact size and playful personality, Hazel is full of energy and curiosity. Hazel loves exploring its environment, participating in interactive playtime, and munching on fresh hay and a variety of fresh vegetables for a well-balanced diet."
        },
        {
            type: "rabbit",
            name: "Oliver",
            age: 4,
            gender: "male",
            weight: "1.8 lbs",
            breed: "Flemish Giant",
            alt: "Giant Flemish rabbit",
            image: "/rabbits/Flemish-Giant.jpg",
            description: "Meet Oliver, the majestic Flemish Giant rabbit. With its impressive size and docile nature, Oliver is a gentle giant. Oliver enjoys leisurely hopping around, relaxing in comfortable spaces, and spending quality time with its human companions. Its diet includes unlimited fresh hay, a selection of leafy greens, and high-quality rabbit pellets to support its growth and health."
        },
        {
            type: "rabbit",
            name: "Luna",
            age: 2,
            gender: "female",
            weight: "1.2 lbs",
            breed: "Holland Lop",
            alt: "Sweet Holland Lop rabbit",
            image: "/rabbits/Holland-Lop.jpg",
            description: "Introducing Luna, the adorable Holland Lop rabbit. With its floppy ears and sweet temperament, Luna is an absolute sweetheart. Luna enjoys cuddling, hopping around during playtime, and nibbling on fresh hay and a variety of rabbit-safe vegetables for a well-rounded diet."
        },
        {
            type: "rabbit",
            name: "Max",
            age: 1,
            gender: "male",
            weight: "1.0 lbs",
            breed: "Jersey Wooly",
            alt: "Fluffy Jersey Wooly rabbit",
            image: "/rabbits/Jersey-Wooly.jpg",
            description: "Say hello to Max, the fluffy Jersey Wooly rabbit. With its wool-like fur and gentle disposition, Max is an adorable companion. Max enjoys being petted, engaging in gentle play, and munching on fresh hay and a mix of leafy greens to maintain its health and happiness."
        },

        {
            type: "rabbit",
            name: "Rocky",
            age: 2,
            gender: "male",
            weight: "1.7 lbs",
            breed: "Rex",
            alt: "Velvety Rex rabbit",
            image: "/rabbits/Rex.jpg",
            description: "Meet Rocky, the velvety Rex rabbit. With its unique fur texture and friendly personality, Rocky is a charming pet. Rocky loves to explore its surroundings, participate in interactive play, and enjoys a diet of fresh hay, rabbit-safe vegetables, and high-quality rabbit pellets."
        },

        {
            type: "rabbit",
            name: "Oscar",
            age: 3,
            gender: "male",
            weight: "2.0 lbs",
            breed: "English Lop",
            alt: "Floppy-eared English Lop rabbit",
            image: "/rabbits/English-Lop.jpg",
            description: "Introducing Oscar, the elegant English Lop rabbit. With its long, floppy ears and gentle nature, Oscar is a delightful addition to any home. Oscar enjoys hopping around, receiving gentle pets, and relishing a diet of fresh hay, a variety of vegetables, and high-quality rabbit pellets to keep it healthy and nourished."
        },

        {
            type: "rabbit",
            name: "Charlie",
            age: 2,
            gender: "male",
            weight: "1.6 lbs",
            breed: "Dwarf Hotot",
            alt: "Cute Dwarf Hotot rabbit",
            image: "/rabbits/Dwarf-Hotot.jpg",
            description: "Say hello to Charlie, the adorable Dwarf Hotot rabbit. With its distinctive black eyeliner and compact size, Charlie is a lovable companion. Charlie enjoys exploring its environment, participating in gentle play, and feasting on fresh hay and a variety of rabbit-safe vegetables for a balanced diet."
        },
        {
            type: "rabbit",
            name: "Benny",
            age: 1,
            gender: "male",
            weight: "0.9 lbs",
            breed: "Mini Rex",
            alt: "Adorable Mini Rex rabbit",
            image: "/rabbits/Mini-Rex.jpg",
            description: "Meet Benny, the charming Mini Rex rabbit. With his velvety fur and friendly personality, Benny is a delightful companion. He enjoys exploring his surroundings, playing with toys, and receiving gentle pets. Benny's diet consists of a balanced mix of fresh hay, vegetables, and specially formulated rabbit pellets."
        },
        {
            type: "rabbit",
            name: "Lily",
            age: 3,
            gender: "female",
            weight: "1.3 lbs",
            breed: "Harlequin",
            alt: "Colorful Harlequin rabbit",
            image: "/rabbits/Harlequin.jpg",
            description: "Introducing Lily, the beautiful Harlequin rabbit. With her distinct coat pattern and playful nature, Lily is a joy to be around. She loves hopping around in spacious enclosures, engaging in interactive play, and nibbling on fresh greens. Lily's diet includes a variety of hay, vegetables, and high-quality rabbit pellets."
        },
        {
            type: "rabbit",
            name: "Milo",
            age: 2,
            gender: "male",
            weight: "1.5 lbs",
            breed: "Angora",
            alt: "Fluffy Angora rabbit",
            image: "/rabbits/Angora.jpg",
            description: "Say hello to Milo, the fluffy Angora rabbit. With his long, luxurious wool and gentle temperament, Milo is a unique companion. He requires regular grooming to maintain his coat, and he enjoys spending time being brushed and pampered. Milo's diet consists of a balanced mix of hay, fresh vegetables, and high-fiber pellets."
        },
        {
            type: "rabbit",
            name: "Sophie",
            age: 1,
            gender: "female",
            weight: "0.8 lbs",
            breed: "Mini Lop",
            alt: "Sweet Mini Lop rabbit",
            image: "/rabbits/Mini-Lop.jpg",
            description: "Meet Sophie, the adorable Mini Lop rabbit. With her floppy ears and friendly nature, Sophie is a lovable pet. She enjoys hopping around in a safe, bunny-proofed space, playing with toys, and receiving gentle attention. Sophie's diet includes fresh hay, leafy greens, and high-quality rabbit pellets."
        },
        {
            type: "rabbit",
            name: "Olive",
            age: 2,
            gender: "female",
            weight: "1.1 lbs",
            breed: "American Fuzzy Lop",
            alt: "Fluffy American Fuzzy Lop rabbit",
            image: "/rabbits/American-Fuzzy-Lop.jpg",
            description: "Introducing Olive, the cuddly American Fuzzy Lop rabbit. With her soft, fuzzy coat and docile demeanor, Olive is a delightful companion. She enjoys exploring her surroundings, relaxing in cozy spots, and receiving gentle pets. Olive's diet consists of fresh hay, a variety of vegetables, and high-quality rabbit pellets."
        },
        {
            type: "rabbit",
            name: "Maxwell",
            age: 4,
            gender: "male",
            weight: "1.8 lbs",
            breed: "Silver Marten",
            alt: "Sleek Silver Marten rabbit",
            image: "/rabbits/Silver-Marten.jpg",
            description: "Say hello to Maxwell, the sleek Silver Marten rabbit. With his striking coat and playful personality, Maxwell is a unique pet. He enjoys hopping around, engaging in interactive play, and having a variety of toys to keep him entertained. Maxwell's diet includes fresh hay, leafy greens, and high-fiber rabbit pellets."
        },
        {
            type: "rabbit",
            name: "Daisy",
            age: 2,
            gender: "female",
            weight: "1.2 lbs",
            breed: "Lop-eared",
            alt: "Cute Lop-eared rabbit",
            image: "/rabbits/Lop-Eared.jpg",
            description: "Meet Daisy, the adorable Lop-Eared rabbit. With her droopy ears and gentle nature, Daisy is a beloved companion. She enjoys hopping around, relaxing in comfortable spaces, and receiving gentle attention. Daisy's diet includes a mix of fresh hay, vegetables, and specially formulated rabbit pellets."
        },
        {
            type: "rabbit",
            name: "Buster",
            age: 1,
            gender: "male",
            weight: "1.0 lbs",
            breed: "Mini Satin",
            alt: "Shiny Mini Satin rabbit",
            image: "/rabbits/Mini-Satin.jpg",
            description: "Introducing Buster, the sleek Mini Satin rabbit. With his shiny coat and playful disposition, Buster is a delightful pet. He enjoys hopping and exploring his environment, engaging in interactive play, and having plenty of toys to keep him entertained. Buster's diet consists of fresh hay, leafy greens, and high-quality rabbit pellets."
        },
        {
            type: "rabbit",
            name: "Willow",
            age: 2,
            gender: "female",
            weight: "1.7 lbs",
            breed: "Rex Mix",
            alt: "Curious Rex Mix rabbit",
            image: "/rabbits/Rex-Mix.jpg",
            description: "Say hello to Willow, the charming Rex mix rabbit. With her velvety fur and playful personality, Willow is a joy to be around. She enjoys hopping around, participating in interactive play, and exploring her surroundings. Willow's diet includes a mix of fresh hay, vegetables, and high-quality rabbit pellets."
        },
        {
            type: "rabbit",
            name: "Jasper",
            age: 3,
            gender: "male",
            weight: "2.0 lbs",
            breed: "Chinchilla",
            alt: "Fluffy Chinchilla rabbit",
            image: "/rabbits/Chinchilla.jpg",
            description: "Meet Jasper, the beautiful Chinchilla rabbit. With his soft, dense fur and curious nature, Jasper is a captivating companion. He enjoys hopping around, having plenty of toys to play with, and receiving gentle attention. Jasper's diet consists of fresh hay, a variety of vegetables, and high-fiber rabbit pellets."
        }


    ]
    async function insertRabbits() {
        const response = await fetch('/api/insertanimals',
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

            <Button onClick={insertRabbits}>insert rabbits</Button>
        </div>
    )
}

export default Page