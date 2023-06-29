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
            image: "/rabbits/Lionhead.jpg"
        },
        {
            type: "rabbit",
            name: "Coco",
            age: 1,
            gender: "female",
            weight: "0.8 lbs",
            breed: "Dutch",
            alt: "Beautiful Dutch rabbit",
            image: "/rabbits/Dutch.jpg"
        },

        {
            type: "rabbit",
            name: "Hazel",
            age: 2,
            gender: "female",
            weight: "1.1 lbs",
            breed: "Netherland Dwarf",
            alt: "Tiny Netherland Dwarf rabbit",
            image: "/rabbits/Netherland-Dwarf.jpg"
        },
        {
            type: "rabbit",
            name: "Oliver",
            age: 4,
            gender: "male",
            weight: "1.8 lbs",
            breed: "Flemish Giant",
            alt: "Giant Flemish rabbit",
            image: "/rabbits/Flemish-Giant.jpg"
        },
        {
            type: "rabbit",
            name: "Luna",
            age: 2,
            gender: "female",
            weight: "1.2 lbs",
            breed: "Holland Lop",
            alt: "Sweet Holland Lop rabbit",
            image: "/rabbits/Holland-Lop.jpg"
        },
        {
            type: "rabbit",
            name: "Max",
            age: 1,
            gender: "male",
            weight: "1.0 lbs",
            breed: "Jersey Wooly",
            alt: "Fluffy Jersey Wooly rabbit",
            image: "/rabbits/Jersey-Wooly.jpg"
        },

        {
            type: "rabbit",
            name: "Rocky",
            age: 2,
            gender: "male",
            weight: "1.7 lbs",
            breed: "Rex",
            alt: "Velvety Rex rabbit",
            image: "/rabbits/Rex.jpg"
        },

        {
            type: "rabbit",
            name: "Oscar",
            age: 3,
            gender: "male",
            weight: "2.0 lbs",
            breed: "English Lop",
            alt: "Floppy-eared English Lop rabbit",
            image: "/rabbits/English-Lop.jpg"
        },

        {
            type: "rabbit",
            name: "Charlie",
            age: 2,
            gender: "male",
            weight: "1.6 lbs",
            breed: "Dwarf Hotot",
            alt: "Cute Dwarf Hotot rabbit",
            image: "/rabbits/Dwarf-Hotot.jpg"
        },
        {
            type: "rabbit",
            name: "Benny",
            age: 1,
            gender: "male",
            weight: "0.9 lbs",
            breed: "Mini Rex",
            alt: "Adorable Mini Rex rabbit",
            image: "/rabbits/Mini-Rex.jpg"
        },
        {
            type: "rabbit",
            name: "Lily",
            age: 3,
            gender: "female",
            weight: "1.3 lbs",
            breed: "Harlequin",
            alt: "Colorful Harlequin rabbit",
            image: "/rabbits/Harlequin.jpg"
        },
        {
            type: "rabbit",
            name: "Milo",
            age: 2,
            gender: "male",
            weight: "1.5 lbs",
            breed: "Angora",
            alt: "Fluffy Angora rabbit",
            image: "/rabbits/Angora.jpg"
        },
        {
            type: "rabbit",
            name: "Sophie",
            age: 1,
            gender: "female",
            weight: "0.8 lbs",
            breed: "Mini Lop",
            alt: "Sweet Mini Lop rabbit",
            image: "/rabbits/Mini-Lop.jpg"
        },
        {
            type: "rabbit",
            name: "Olive",
            age: 2,
            gender: "female",
            weight: "1.1 lbs",
            breed: "American Fuzzy Lop",
            alt: "Fluffy American Fuzzy Lop rabbit",
            image: "/rabbits/American-Fuzzy-Lop.jpg"
        },
        {
            type: "rabbit",
            name: "Maxwell",
            age: 4,
            gender: "male",
            weight: "1.8 lbs",
            breed: "Silver Marten",
            alt: "Sleek Silver Marten rabbit",
            image: "/rabbits/Silver-Marten.jpg"
        },
        {
            type: "rabbit",
            name: "Daisy",
            age: 2,
            gender: "female",
            weight: "1.2 lbs",
            breed: "Lop-eared",
            alt: "Cute Lop-eared rabbit",
            image: "/rabbits/Lop-Eared.jpg"
        },
        {
            type: "rabbit",
            name: "Buster",
            age: 1,
            gender: "male",
            weight: "1.0 lbs",
            breed: "Mini Satin",
            alt: "Shiny Mini Satin rabbit",
            image: "/rabbits/Mini-Satin.jpg"
        },
        {
            type: "rabbit",
            name: "Willow",
            age: 2,
            gender: "female",
            weight: "1.7 lbs",
            breed: "Rex Mix",
            alt: "Curious Rex Mix rabbit",
            image: "/rabbits/Rex-Mix.jpg"
        },
        {
            type: "rabbit",
            name: "Jasper",
            age: 3,
            gender: "male",
            weight: "2.0 lbs",
            breed: "Chinchilla",
            alt: "Fluffy Chinchilla rabbit",
            image: "/rabbits/Chinchilla.jpg"
        }


    ]
    async function insertRabbits() {
        const response = await fetch('/api/insertrabbits',
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