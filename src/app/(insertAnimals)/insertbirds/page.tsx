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
            image: "/birds/African-Grey-Parrot.jpg",
            description: "Charlie is a captivating African Grey parrot with stunning gray feathers and a vibrant red tail. This intelligent and charismatic bird is eagerly searching for a forever home. With a talent for mimicking human speech, Charlie's melodic voice can bring laughter and joy to any household. He enjoys perching on shoulders or stands, observing his surroundings with a curious eye. Charlie's diet includes fresh fruits like apples and bananas, along with vegetables like carrots and broccoli. His favorite treats are almonds and walnuts. Charlie loves puzzle toys and colorful chew toys that keep his sharp mind and beak occupied. Give Charlie a loving home and enjoy his playful companionship."
        },
        {
            type: "bird",
            name: "Lola",
            age: 1,
            gender: "female",
            weight: "0.4 lbs",
            breed: "Alexandrine Parakeet",
            alt: "Colorful Alexandrine Parakeet",
            image: "/birds/Alexandrine-Parakeet.jpg",
            description: "Meet Lola, a charming Alexandrine Parakeet eagerly seeking a loving forever home. Lola is a vibrant avian companion with stunning emerald plumage and a playful disposition. This delightful parakeet relishes in social interactions, eagerly chirping and mimicking human speech with her enchanting melodic voice. Lola enjoys exploring her surroundings, adeptly climbing and swinging on her favorite toys. When it comes to meals, Lola's palate delights in a variety of fresh fruits, vegetables, and nutrient-rich pellets, ensuring she maintains a balanced diet. Ready to grace your home with her joyful presence, Lola promises to bring endless entertainment and companionship to her lucky adopter."
        },
        {
            type: "bird",
            name: "Rio",
            age: 3,
            gender: "male",
            weight: "1.0 lbs",
            breed: "Amazon Parrot",
            alt: "Talkative Amazon Parrot",
            image: "/birds/Amazon-Parrot.jpg",
            description: "Introducing Rio, an enchanting Amazon Parrot eagerly awaiting a forever home. With vibrant feathers displaying a kaleidoscope of colors, Rio is a true avian beauty. This charismatic parrot thrives on human interaction, engaging in delightful conversations and showcasing a remarkable ability to mimic sounds and voices. Rio's playful nature shines through as he delights in solving puzzles and exploring his surroundings with his inquisitive beak. When it comes to dining, Rio has a penchant for fresh fruits, leafy greens, and a specialized pellet diet that provides him with optimal nutrition. Adopting Rio means welcoming a lifelong feathered companion filled with intelligence, charm, and boundless affection."
        },
        {
            type: "bird",
            name: "Sunny",
            age: 2,
            gender: "female",
            weight: "1.5 lbs",
            breed: "Blue-and-Gold Macaw",
            alt: "Vibrant Blue-And-Gold Macaw",
            image: "/birds/Blue-And-Gold-Macaw.jpg",
            description: "Meet Sunny, a captivating Blue and Gold Macaw eagerly seeking a loving forever home. With majestic cobalt blue feathers and vibrant golden accents, Sunny is a true spectacle of beauty. This charismatic macaw thrives on social interactions, delighting in human companionship and displaying an impressive repertoire of vocalizations, including mimicking speech and singing melodiously. Sunny's energetic nature is complemented by a love for exploration and play, with a particular fondness for toys that challenge his intelligence. When it comes to mealtimes, Sunny enjoys a varied diet consisting of fresh fruits, vegetables, nuts, and high-quality pellets, ensuring his health and well-being. Adopting Sunny means inviting a magnificent, affectionate, and highly intelligent feathered friend into your life."
        },
        {
            type: "bird",
            name: "Pippin",
            age: 1,
            gender: "male",
            weight: "0.6 lbs",
            breed: "Blue Crowned Conure",
            alt: "Cheerful Blue Crowned Conure",
            image: "/birds/Blue-Crowned-Conure.jpg",
            description: "Introducing Pippin, a delightful Blue Crowned Conure eagerly awaiting a forever home. With vibrant shades of green and a striking blue crown atop his head, Pippin is a visually stunning avian companion. Known for their playful and affectionate nature, Pippin thrives on social interaction and craves human companionship. This intelligent conure loves engaging in interactive games and showing off his acrobatic skills. When it comes to meals, Pippin enjoys a diverse diet that includes fresh fruits, vegetables, seeds, and a specialized pellet mix, ensuring he receives a balanced and nutritious feast. Adopting Pippin means inviting a charming, joyful, and engaging feathered friend into your home."
        },
        {
            type: "bird",
            name: "Milo",
            age: 2,
            gender: "male",
            weight: "0.9 lbs",
            breed: "Blue Headed Pionus",
            alt: "Stunning Blue Headed Pionus",
            image: "/birds/Blue-Headed-Pionus.jpg",
            description: "Meet Milo, an enchanting Blue Headed Pionus eagerly seeking a loving forever home. With a beautiful blend of deep blues and vibrant greens on his head and body, Milo is a true avian gem. Known for their calm and gentle nature, Milo is an ideal companion for those seeking a tranquil and harmonious household. Milo loves to explore his surroundings, displaying an inquisitive nature, and enjoys perching on his favorite branches while observing his surroundings. When it comes to meals, Milo savors a balanced diet consisting of fresh fruits, vegetables, high-quality pellets, and occasional treats like nuts and seeds. Adopting Milo means embracing a serene, intelligent, and captivating feathered companion."
        },
        {
            type: "bird",
            name: "Sky",
            age: 1,
            gender: "female",
            weight: "0.3 lbs",
            breed: "Budgie Parakeet",
            alt: "Playful Budgie Parakeet",
            image: "/birds/Budgie-Parakeet.jpg",
            description: "Introducing Sky, a charming Budgie Parakeet eagerly seeking a loving forever home. With a captivating blend of vibrant blues, greens, and yellows, Sky is a true avian beauty. Known for their playful and social nature, Sky thrives on human interaction and delights in bonding with their adopter. Sky loves to flutter around their surroundings, exploring every nook and cranny with their curious beak. When it comes to mealtimes, Sky enjoys a varied diet consisting of fresh fruits, vegetables, high-quality seeds, and nutrient-rich pellets, ensuring they receive a well-rounded nutritional intake. Adopting Sky means inviting a joyful, interactive, and affectionate feathered friend into your life."
        },
        {
            type: "bird",
            name: "Tango",
            age: 2,
            gender: "male",
            weight: "0.8 lbs",
            breed: "Caique",
            alt: "Energetic Caique bird",
            image: "/birds/Caique.jpg",
            description: "Introducing Tango, a spirited Caique parrot eagerly seeking a loving forever home. With their striking combination of vibrant colors including orange, green, and white, Tango is a visual delight. Known for their playful and mischievous nature, Tango is a ball of energy, always ready for an adventure. Tango loves to explore their surroundings, utilizing their acrobatic skills and entertaining antics to bring joy to those around them. When it comes to meals, Tango enjoys a diverse diet that includes fresh fruits, vegetables, high-quality pellets, and occasional treats like nuts and seeds. Adopting Tango means embracing a lively, entertaining, and charismatic feathered companion into your home."
        },
        {
            type: "bird",
            name: "Sunny",
            age: 1,
            gender: "female",
            weight: "0.4 lbs",
            breed: "Canary",
            alt: "Melodious Canary",
            image: "/birds/Canary.jpg",
            description: "Meet Sunny, a melodious Canary eagerly seeking a loving forever home. With his vibrant yellow plumage and melodic voice, Sunny is a true avian delight. Known for their enchanting songs, Sunny brings a symphony of joy to any household. Sunny loves to perch on his swing or branch, serenading his surroundings with his melodious tunes. When it comes to meals, Sunny enjoys a balanced diet that includes a variety of seeds, fresh greens, and occasional fruits. Adopting Sunny means inviting a feathered companion with a captivating voice and a sunny disposition into your life, adding a touch of harmony and cheerfulness to your home."
        },
        {
            type: "bird",
            name: "Coco",
            age: 2,
            gender: "male",
            weight: "0.5 lbs",
            breed: "Cockatiel",
            alt: "Friendly Cockatiel",
            image: "/birds/Cockatiel.jpg",
            description: "Introducing Coco, an adorable Cockatiel eagerly awaiting a loving forever home. With his striking crest and soft gray feathers, Coco is a true avian charmer. Known for their friendly and sociable nature, Coco thrives on human companionship and enjoys spending time interacting with his adopter. Coco loves to explore his surroundings, hopping and flying from perch to perch, while entertaining with his playful antics. When it comes to meals, Coco enjoys a varied diet consisting of high-quality pellets, fresh fruits, vegetables, and the occasional treat of seeds or nuts. Adopting Coco means embracing a delightful, affectionate, and entertaining feathered friend into your life."
        },
        {
            type: "bird",
            name: "Max",
            age: 3,
            gender: "male",
            weight: "1.2 lbs",
            breed: "Cockatoo",
            alt: "Gorgeous Cockatoo",
            image: "/birds/Cockatoo.jpg",
            description: "Meet Max, an enchanting Cockatoo eagerly seeking a loving forever home. With his magnificent crest and snowy white plumage, Max is a stunning avian companion. Known for their intelligence and affectionate nature, Max forms deep bonds with his human companions, seeking constant interaction and cuddles. Max loves to showcase his impressive vocal abilities, mimicking sounds and engaging in delightful conversations. When it comes to meals, Max enjoys a varied diet consisting of fresh fruits, vegetables, high-quality pellets, and occasional treats like nuts or seeds. Adopting Max means inviting a loving, intelligent, and entertaining feathered friend into your home, ready to bring joy and companionship for a lifetime."
        },
        {
            type: "bird",
            name: "Kiwi",
            age: 2,
            gender: "female",
            weight: "0.9 lbs",
            breed: "Conure",
            alt: "Colorful Conure",
            image: "/birds/Conure.jpg",
            description: "Introducing Kiwi, a vibrant Conure eagerly awaiting a loving forever home. With his stunning combination of green feathers and captivating personality, Kiwi is a true avian gem. Known for their playful and outgoing nature, Kiwi thrives on social interaction and craves human companionship. Kiwi loves to explore his surroundings, eagerly climbing, and investigating every nook and cranny. With his charming and inquisitive nature, Kiwi enjoys learning new tricks and engaging in interactive playtime. When it comes to meals, Kiwi delights in a varied diet of fresh fruits, vegetables, high-quality pellets, and the occasional treat of seeds or nuts. Adopting Kiwi means inviting a lively, affectionate, and entertaining feathered friend into your life."
        },
        {
            type: "bird",
            name: "Ruby",
            age: 1,
            gender: "female",
            weight: "0.3 lbs",
            breed: "Crimson Rosella",
            alt: "Beautiful Crimson Rosella",
            image: "/birds/Crimson-Rosella.jpg",
            description: "Introducing Ruby, a magnificent Crimson Rosella eagerly seeking a loving forever home. With her vibrant red plumage, deep blue cheeks, and striking tail feathers, Ruby is a true avian masterpiece. Known for their intelligence and playful nature, Ruby loves engaging in interactive games and solving puzzles. Ruby's melodic calls and mimicry abilities add a delightful charm to her presence. When it comes to meals, Ruby enjoys a diverse diet that includes a mix of fresh fruits, vegetables, seeds, and high-quality pellets. Adopting Ruby means inviting a striking, intelligent, and captivating feathered companion into your home, ready to enchant you with her beauty and joyful antics."
        },
        {
            type: "bird",
            name: "Dusty",
            age: 2,
            gender: "male",
            weight: "0.2 lbs",
            breed: "Diamond Dove",
            alt: "Graceful Diamond Dove",
            image: "/birds/Diamond-Dove.jpg",
            description: "Meet Dusty, a delightful Diamond Dove eagerly seeking a loving forever home. With his soft, dove-gray plumage and sparkling red eyes, Dusty is a true avian beauty. Known for their gentle and peaceful nature, Dusty brings a sense of calm and serenity to any household. Dusty enjoys perching on his favorite branches, observing his surroundings with a keen eye. When it comes to meals, Dusty appreciates a balanced diet consisting of fresh seeds, grains, and a variety of leafy greens. Adopting Dusty means welcoming a tranquil and captivating feathered companion into your home, adding a touch of grace and elegance to your life."
        },
        {
            type: "bird",
            name: "Finn",
            age: 1,
            gender: "male",
            weight: "0.1 lbs",
            breed: "Finch",
            alt: "Charming Finch",
            image: "/birds/Finch.jpg",
            description: "Meet Finn, a delightful Finch eagerly awaiting a loving forever home. With his small and colorful frame, Finn brings a touch of vibrancy to any aviary. Known for their lively and social nature, Finn enjoys the company of fellow finches and human companions alike. Finn loves to flutter and fly around, showcasing his agile movements and chirping cheerfully. When it comes to meals, Finn thrives on a diet consisting of high-quality finch seed mix, fresh greens, and the occasional treat of fruits or millet sprays. Adopting Finn means embracing a charming, sociable, and melodious feathered companion into your life."
        },
        {
            type: "bird",
            name: "Mocchi",
            age: 2,
            gender: "female",
            weight: "0.3 lbs",
            breed: "Lory",
            alt: "Colorful Lory bird",
            image: "/birds/Lory.jpg",
            description: "Introducing Mocchi, a captivating Lory eagerly seeking a loving forever home. With their vibrant plumage and expressive eyes, Mocchi is a true avian gem. Known for their playful and affectionate nature, Mocchi thrives on social interaction and craves human companionship. Mocchi loves to engage in interactive playtime, exploring toys and showing off their acrobatic skills. When it comes to meals, Mocchi enjoys a specialized nectar-based diet supplemented with fresh fruits and occasional treats. Adopting Mocchi means inviting a charismatic, intelligent, and entertaining feathered friend into your life, ready to bring a burst of color and joy to your home."
        },
        {
            type: "bird",
            name: "Ozzy",
            age: 3,
            gender: "male",
            weight: "1.8 lbs",
            breed: "Macaw",
            alt: "Magnificent Macaw",
            image: "/birds/Macaw.jpg",
            description: "Meet Ozzy, a magnificent Macaw eagerly awaiting a loving forever home. With his vibrant feathers and impressive wingspan, Ozzy is a true avian marvel. Known for their intelligence and strong bonds, Ozzy forms deep connections with their human companions, craving affection and interaction. Ozzy loves to showcase his vocal abilities, belting out an array of sounds and mimicry with remarkable clarity. When it comes to meals, Ozzy enjoys a varied diet that includes a mix of fresh fruits, vegetables, nuts, and high-quality pellets. Adopting Ozzy means inviting a majestic, intelligent, and captivating feathered companion into your life, ready to add brilliance and companionship to your home."
        },
        {
            type: "bird",
            name: "Piper",
            age: 2,
            gender: "female",
            weight: "0.3 lbs",
            breed: "Song Canary",
            alt: "Melodious Song Canary",
            image: "/birds/Song-Canary.jpg",
            description: "Introducing Piper, a charming Song Canary eagerly seeking a loving forever home. With his melodious voice and vibrant feathers, Piper is a true avian treasure. Known for their captivating songs, Piper fills the air with enchanting melodies, bringing joy and tranquility to any space. Piper enjoys perching on his swing, showcasing his vocal prowess, and expressing his love for music. When it comes to meals, Piper thrives on a balanced diet consisting of high-quality canary seed mix, fresh greens, and the occasional treat of soft fruits. Adopting Piper means inviting a harmonious, delightful, and tuneful feathered friend into your life."
        },
        {
            type: "bird",
            name: "Oliver",
            age: 1,
            gender: "male",
            weight: "0.7 lbs",
            breed: "Vasa Parrot",
            alt: "Colorful Vasa Parrot",
            image: "/birds/Vasa-Parrot.jpg",
            description: "Meet Oliver, a captivating Vasa Parrot eagerly seeking a loving forever home. With his sleek black plumage and striking beak, Oliver is a true avian beauty. Known for their intelligent and inquisitive nature, Oliver thrives on mental stimulation and enjoys solving puzzles and playing with interactive toys. Oliver also has a knack for mimicry, delighting in imitating various sounds and voices. When it comes to meals, Oliver enjoys a varied diet that includes high-quality pellets, fresh fruits, vegetables, and the occasional treat of nuts or seeds. Adopting Oliver means inviting a fascinating, clever, and charismatic feathered companion into your home."
        },
        {
            type: "bird",
            name: "Peach",
            age: 1,
            gender: "female",
            weight: "0.9 lbs",
            breed: "Sun Conure",
            alt: "Colorful Sun Conure",
            image: "/birds/Sun-Conure.jpg",
            description: "Introducing Peach, a radiant Sun Conure eagerly seeking a loving forever home. With their vibrant plumage blending shades of orange, yellow, and green, Peach is a true avian gem. Known for their playful and affectionate nature, Peach thrives on social interaction and craves human companionship. Peach loves engaging in interactive playtime, showing off their acrobatic skills and charming antics. When it comes to meals, Peach enjoys a diverse diet consisting of fresh fruits, vegetables, high-quality pellets, and occasional treats like nuts or seeds. Adopting Peach means inviting a lively, spirited, and loving feathered friend into your life, ready to brighten every moment with their vibrant personality."
        }
    ]
    async function insertBirds() {
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

            <Button onClick={insertBirds}>insert Birds</Button>
        </div>
    )
}

export default Page