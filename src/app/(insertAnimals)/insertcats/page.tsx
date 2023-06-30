"use client"
import { Button } from '../../../components/bootstrap';
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
            image: "/cats/Maine-Coon.jpg",
            description: "Meet Luna, the majestic Maine Coon. With her large size and tufted ears, Luna is a gentle giant with a loving disposition. She enjoys exploring her surroundings, scaling heights, and playing with interactive toys. Luna has a hearty appetite and savors high-quality cat food with a preference for wet food that satisfies her Maine Coon size."
        },
        {
            type: "cat",
            name: "Oliver",
            age: 4,
            gender: "male",
            weight: "10.5 lbs",
            breed: "British Shorthair",
            alt: "A charming British Shorthair cat",
            image: "/cats/British-Shorthair.jpg",
            description: "Introducing Oliver, the charming British Shorthair. With his round face and plush coat, Oliver is a delightful companion. He loves lounging in cozy spots, observing the world from a distance, and engaging in gentle play. Oliver appreciates a balanced diet with a mix of dry and wet food, as well as occasional treats to satisfy his refined taste."
        },
        {
            type: "cat",
            name: "Bella",
            age: 1,
            gender: "female",
            weight: "10.1 lbs",
            breed: "Bengal",
            alt: "A stunning Bengal cat",
            image: "/cats/Bengal.jpg",
            description: "Say hello to Bella, the exotic Bengal. With her distinctive coat featuring beautiful spots or marbled patterns, Bella is an energetic and curious feline. She enjoys an active lifestyle, engaging in interactive play sessions, and having access to stimulating toys. Bella thrives on a diet rich in high-quality protein, and her Bengal heritage makes her particularly fond of a raw or grain-free diet."
        },
        {
            type: "cat",
            name: "Chloe",
            age: 2,
            gender: "female",
            weight: "10.2 lbs",
            breed: "Persian",
            alt: "A fluffy Persian cat",
            image: "/cats/Persian.jpg",
            description: "Meet Chloe, the regal Persian beauty. Known for her luxurious coat and sweet temperament, Chloe prefers a calm and serene environment, where she can relax on soft pillows and enjoy gentle brushing sessions. She enjoys a diet consisting of high-quality, specially formulated food that helps maintain her Persian coat's health and beauty."
        },
        {
            type: "cat",
            name: "Max",
            age: 3,
            gender: "male",
            weight: "9.9 lbs",
            breed: "Scottish Fold",
            alt: "An adorable Scottish Fold cat",
            image: "/cats/Scottish-Fold.jpg",
            description: "Introducing Max, the adorable Scottish Fold. With his folded ears and playful antics, Max charms everyone he meets. He loves interactive toys that challenge his clever mind and enjoys a cozy spot by the window to watch the world go by. Max's diet consists of a balanced mix of wet and dry food, providing him with the necessary nutrients for his active lifestyle."
        },
        {
            type: "cat",
            name: "Daisy",
            age: 1,
            gender: "female",
            weight: "10.2 lbs",
            breed: "Sphynx",
            alt: "A unique Sphynx cat",
            image: "/cats/Sphynx.jpg",
            description: "Say hello to Daisy, the unique Sphynx. With her warm and affectionate nature, Daisy is a social butterfly who thrives on human companionship. She loves being the center of attention and enjoys a diet of high-quality cat food that supports her unique skin and coat needs, with a focus on keeping her skin moisturized and maintaining her overall health."
        },


        {
            type: "cat",
            name: "Rocky",
            age: 4,
            gender: "male",
            weight: "9.9 lbs",
            breed: "Siberian",
            alt: "A beautiful Siberian cat",
            image: "/cats/Siberian.jpg",
            description: "Meet Rocky, the adventurous Siberian. With his playful and agile nature, Rocky is always ready for an exciting adventure. He enjoys climbing, exploring his surroundings, and engaging in interactive playtime with puzzle toys. Rocky has a well-rounded diet that includes a mix of high-quality dry and wet food, providing him with the energy he needs to satisfy his active lifestyle."
        },
        {
            type: "cat",
            name: "Zoe",
            age: 3,
            gender: "female",
            weight: "10.2 lbs",
            breed: "Russian Blue",
            alt: "An elegant Russian Blue cat",
            image: "/cats/Russian-Blue.jpg",
            description: "Introducing Zoe, the elegant Russian Blue. With her graceful demeanor and intelligence, Zoe exudes charm wherever she goes. She enjoys a calm and serene environment, where she can observe her surroundings with a keen eye. Zoe appreciates a diet that includes high-quality protein sources and plenty of fresh water, which keeps her coat shiny and her body in optimal condition."
        },

        {
            type: "cat",
            name: "Lola",
            age: 2,
            gender: "female",
            weight: "10.2 lbs",
            breed: "Siamese",
            alt: "A playful Siamese cat",
            image: "/cats/Siamese.jpg",
            description: "Meet Lola, the elegant Siamese. With her striking blue eyes and sleek coat, Lola is a true beauty. She enjoys being the center of attention and engaging in interactive play sessions. Lola has a refined palate and prefers a diet that includes high-quality, protein-rich food to keep her in top shape."
        },
        {
            type: "cat",
            name: "Misty",
            age: 2,
            gender: "female",
            weight: "9.7 lbs",
            breed: "Abyssinian",
            alt: "An elegant Abyssinian cat",
            image: "/cats/Abyssinian.jpg",
            description: "Introducing Misty, the playful Abyssinian. With her ticked coat and vibrant personality, Misty is a joy to be around. She loves chasing toys, exploring her surroundings, and playing hide-and-seek. Misty thrives on a diet that includes a mix of wet and dry food, providing her with the necessary nutrients for her active lifestyle."
        },
        {
            type: "cat",
            name: "Rocky",
            age: 3,
            gender: "male",
            weight: "9.8 lbs",
            breed: "Birman",
            alt: "A beautiful Birman cat",
            image: "/cats/Birman.jpg",
            description: "Say hello to Rocky, the charming Birman. With his striking blue eyes and silky coat, Rocky is a true charmer. He enjoys a peaceful and harmonious environment, where he can relax and cuddle up with his favorite humans. Rocky's diet consists of high-quality cat food that supports his overall well-being."
        },
        {
            type: "cat",
            name: "Lulu",
            age: 1,
            gender: "female",
            weight: "9.6 lbs",
            breed: "Chartreux",
            alt: "A charming Chartreux cat",
            image: "/cats/Chartreux.jpg",
            description: "Meet Lulu, the gentle Chartreux. With her robust build and stunning blue-gray coat, Lulu is a lovely companion. She enjoys a calm and serene atmosphere, where she can spend her time relaxing and observing her surroundings. Lulu appreciates a diet that includes high-quality, balanced cat food that keeps her healthy and content."
        },
        {
            type: "cat",
            name: "Charlie",
            age: 4,
            gender: "male",
            weight: "9.5 lbs",
            breed: "Cornish Rex",
            alt: "A playful Cornish Rex cat",
            image: "/cats/Cornish-Rex.jpg",
            description: "Introducing Charlie, the playful Cornish Rex. With his curly coat and mischievous personality, Charlie is always ready for an adventure. He loves interactive toys, climbing to high places, and entertaining his human companions with his acrobatic skills. Charlie's diet includes high-quality food that supports his high energy levels."
        },
        {
            type: "cat",
            name: "Lucy",
            age: 2,
            gender: "female",
            weight: "9.7 lbs",
            breed: "Devon Rex",
            alt: "An adorable Devon Rex cat",
            image: "/cats/Devon-Rex.jpg",
            description: "Say hello to Lucy, the charming Devon Rex. With her wavy coat and affectionate nature, Lucy is a delightful companion. She loves curling up in warm laps, playing with feather toys, and spending quality time with her humans. Lucy's diet consists of nutritious, high-quality cat food that keeps her coat glossy and her energy levels up."
        },
        {
            type: "cat",
            name: "Leo",
            age: 3,
            gender: "male",
            weight: "9.8 lbs",
            breed: "Egyptian Mau",
            alt: "A sleek Egyptian Mau cat",
            image: "/cats/Egyptian-Mau.jpg",
            description: "Meet Leo, the regal Egyptian Mau. With his striking spotted coat and athletic build, Leo is a true sight to behold. He enjoys interactive play, chasing toys, and showing off his impressive agility. Leo thrives on a diet rich in high-quality protein, supporting his active lifestyle and overall health."
        },
        {
            type: "cat",
            name: "Milo",
            age: 1,
            gender: "male",
            weight: "9.6 lbs",
            breed: "Havana Brown",
            alt: "A unique Havana Brown cat",
            image: "/cats/Havana-Brown.jpg",
            description: "Havana Brown: Introducing Milo, the charming Havana Brown. With his rich chocolate-colored coat and affectionate nature, Milo is a loving companion. He enjoys interactive play sessions, cozying up in laps, and engaging in gentle grooming. Milo's diet includes a balanced mix of high-quality cat food, providing him with the necessary nutrients for a healthy and happy life."
        },
        {
            type: "cat",
            name: "Lola",
            age: 4,
            gender: "female",
            weight: "9.5 lbs",
            breed: "Japanese Bobtail",
            alt: "An elegant Japanese Bobtail cat",
            image: "/cats/Japanese-Bobtail.jpg",
            description: "Meet Lola, the playful Japanese Bobtail. With her unique bobbed tail and lively personality, Lola is full of charm. She enjoys interactive playtime and has a knack for learning tricks. Lola's diet consists of high-quality cat food that provides her with the energy she needs for her adventures."
        },
        {
            type: "cat",
            name: "Oliver",
            age: 2,
            gender: "male",
            weight: "9.7 lbs",
            breed: "Korat",
            alt: "A stunning Korat cat",
            image: "/cats/Korat.jpg",
            description: "Introducing Oliver, the elegant Korat. With his shimmering silver-blue coat and captivating green eyes, Oliver is a true beauty. He enjoys a peaceful and calm environment, where he can relax and observe his surroundings. Oliver's diet includes high-quality, nutritious food to support his overall well-being."
        },
        {
            type: "cat",
            name: "Lily",
            age: 1,
            gender: "female",
            weight: "9.8 lbs",
            breed: "Manx",
            alt: "A tailless Manx cat",
            image: "/cats/Manx.jpg",
            description: "Say hello to Lily, the spirited Manx. With her expressive eyes and distinctive tailless body, Lily is a unique companion. She loves to play, especially with toys that challenge her agility and intelligence. Lily thrives on a diet rich in high-quality protein, which keeps her active and healthy."
        },
        {
            type: "cat",
            name: "Oscar",
            age: 3,
            gender: "male",
            weight: "9.6 lbs",
            breed: "Norwegian Forest",
            alt: "A majestic Norwegian Forest cat",
            image: "/cats/Norwegian-Forest.jpg",
            description: "Meet Oscar, the majestic Norwegian Forest cat. With his long, flowing coat and sturdy build, Oscar is a true adventurer. He enjoys exploring the outdoors and climbing trees. Oscar's diet includes high-quality cat food that supports his active lifestyle and maintains his magnificent coat."
        },
        {
            type: "cat",
            name: "Chloe",
            age: 2,
            gender: "female",
            weight: "9.5 lbs",
            breed: "Ocicat",
            alt: "A spotted Ocicat cat",
            image: "/cats/Ocicat.jpg",
            description: "Introducing Chloe, the captivating Ocicat. With her wild-spotted coat and curious nature, Chloe is always ready for an exciting escapade. She enjoys interactive play sessions and thrives on mental stimulation. Chloe's diet consists of high-quality, balanced food that provides her with the necessary nutrients for her active lifestyle."
        },
        {
            type: "cat",
            name: "Max",
            age: 4,
            gender: "male",
            weight: "9.7 lbs",
            breed: "Ragamuffin",
            alt: "A fluffy Ragamuffin cat",
            image: "/cats/Ragamuffin.jpg",
            description: "Say hello to Max, the cuddly Ragamuffin. With his plush coat and affectionate personality, Max is a true sweetheart. He loves being held and enjoys lap time with his humans. Max's diet includes high-quality cat food that supports his overall well-being and keeps his luxurious fur in top condition."
        },
        {
            type: "cat",
            name: "Luna",
            age: 1,
            gender: "female",
            weight: "9.8 lbs",
            breed: "Somali",
            alt: "A beautiful Somali cat",
            image: "/cats/Somali.jpg",
            description: "Meet Luna, the elegant Somali. With her beautiful long-haired coat and playful nature, Luna is a delightful companion. She loves interactive play, such as chasing toys and exploring her surroundings. Luna's diet consists of high-quality food that provides her with the necessary nutrients for her active lifestyle."
        },
        {
            type: "cat",
            name: "Simba",
            age: 3,
            gender: "male",
            weight: "9.6 lbs",
            breed: "Tonkinese",
            alt: "A playful Tonkinese cat",
            image: "/cats/Tonkinese.jpg",
            description: "Introducing Simba, the charismatic Tonkinese. With his sparkling blue eyes and soft, silky coat, Simba is a true charmer. He enjoys interactive play sessions and loves spending quality time with his human family. Simba's diet includes a balanced mix of high-quality cat food, providing him with the necessary nutrition for a healthy and happy life."
        },
        {
            type: "cat",
            name: "Daisy",
            age: 2,
            gender: "female",
            weight: "9.5 lbs",
            breed: "Turkish Angora",
            alt: "An elegant Turkish Angora cat",
            image: "/cats/Turkish-Angora.jpg",
            description: "Meet Daisy, the elegant Turkish Angora. With her silky, long white coat and striking blue or green eyes, Daisy is a true beauty. She is known for her playful and affectionate nature, enjoying interactive play sessions and spending time with her human companions. Daisy's diet includes high-quality cat food that provides her with the necessary nutrients for her active lifestyle."
        },
        {
            type: "cat",
            name: "Jack",
            age: 4,
            gender: "male",
            weight: "9.7 lbs",
            breed: "Turkish Van",
            alt: "A charming Turkish Van cat",
            image: "/cats/Turkish-Van.jpg",
            description: "Introducing Jack, the adventurous Turkish Van. With his striking patterned coat and love for water, Jack is a fun-loving companion. He enjoys swimming, exploring outdoor spaces, and engaging in interactive play. Jack's diet consists of high-quality cat food that supports his active nature and provides him with the necessary energy for his adventures."
        },
        {
            type: "cat",
            name: "Sophie",
            age: 2,
            gender: "female",
            weight: "9.8 lbs",
            breed: "American Bobtail",
            alt: "A unique American Bobtail cat",
            image: "/cats/American-Bobtail.jpg",
            description: "American Bobtail: Say hello to Sophie, the charming American Bobtail. With her bobbed tail and playful personality, Sophie is a delightful companion. She loves interactive toys and games that challenge her intelligence. Sophie's diet includes high-quality, nutritious cat food that supports her active lifestyle and overall well-being."
        },
        {
            type: "cat",
            name: "Tigger",
            age: 3,
            gender: "male",
            weight: "9.6 lbs",
            breed: "American Curl",
            alt: "A curious American Curl cat",
            image: "/cats/American-Curl.jpg",
            description: "Meet Tigger, the curious American Curl. With his distinctive curled ears and friendly nature, Tigger is an endearing feline. He enjoys interactive play and is always up for exploring new places. Tigger's diet consists of high-quality cat food that provides him with the necessary nutrients for his active and curious lifestyle."
        },
        {
            type: "cat",
            name: "Coco",
            age: 1,
            gender: "female",
            weight: "9.5 lbs",
            breed: "Balinese",
            alt: "An elegant Balinese cat",
            image: "/cats/Balinese.jpg",
            description: "Introducing Coco, the elegant Balinese. With her long, silky coat and graceful demeanor, Coco is a true beauty. She enjoys a calm and serene environment, where she can relax and be pampered. Coco's diet includes high-quality cat food that supports her overall well-being and keeps her coat healthy and glossy."
        },
        {
            type: "cat",
            name: "Gizmo",
            age: 4,
            gender: "male",
            weight: "9.7 lbs",
            breed: "Bombay",
            alt: "A sleek Bombay cat",
            image: "/cats/Bombay.jpg",
            description: "Say hello to Gizmo, the sleek and playful Bombay. With his shiny black coat and captivating golden eyes, Gizmo is a charming companion. He loves interactive play sessions and enjoys being the center of attention. Gizmo's diet includes high-quality cat food that provides him with the necessary nutrients for his active lifestyle."
        }


    ];
    async function insertCats() {
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

            <Button onClick={insertCats}>insert Cats</Button>
        </div>
    )
}

export default Page