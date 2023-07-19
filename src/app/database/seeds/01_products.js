/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {
      name: "Fluffy Feather Toy",
      description: "Entertain your cat with this colorful feather toy!",
      price: 15.78,
      category: "Toys",
      image_path: "/products/Fluffy_Feather_Toy.jpg",
      weight: "0.1 lbs",
      dimensions: "8 x 2 x 2 inches",
      stock_quantity: 50
    },
    {
      name: "Chewy Bone Treats",
      description: "Delicious bone-shaped treats for your dog to chew on.",
      price: 3.78,
      category: "Food",
      image_path: "/products/Chewy_Bone_Treats.jpg",
      weight: "0.5 lbs",
      dimensions: "4 x 1 x 0.5 inches",
      stock_quantity: 400
    },
    {
      name: "Comfy Cat Bed",
      description: "A soft and cozy bed for your feline friend to relax in.",
      price: 45.82,
      category: "Cat",
      image_path: "/products/Comfy_Cat_Bed.jpg",
      weight: "1.2 lbs",
      dimensions: "18 x 12 x 5 inches",
      stock_quantity: 30
    },
    {
      name: "Durable Dog Leash",
      description: "A strong and reliable leash for walking your dog.",
      price: 9.78,
      category: "Dog",
      image_path: "/products/Durable_Dog_Leash.jpg",
      weight: "0.8 lbs",
      dimensions: "72 x 1 x 0.1 inches",
      stock_quantity: 70
    },
    {
      name: "Interactive Puzzle Toy",
      description: "Keep your pet mentally stimulated with this puzzle toy.",
      price: 13.78,
      category: "Toys",
      image_path: "/products/Interactive_Puzzle_Toy.jpg",
      weight: "0.6 lbs",
      dimensions: "6 x 6 x 2 inches",
      stock_quantity: 20
    },
    {
      name: "Healthy Cat Food",
      description: "Nutritious cat food made with real ingredients.",
      price: 15.78,
      category: "Food",
      image_path: "/products/Healthy_Cat_Foot.webp",
      weight: "3 lbs",
      dimensions: "10 x 6 x 4 inches",
      stock_quantity: 60
    },
    {
      name: "Cozy Dog Sweater",
      description: "Keep your dog warm and stylish with this cozy sweater.",
      price: 19.78,
      category: "Dog",
      image_path: "/products/Dog_Sweater.jpg",
      weight: "0.7 lbs",
      dimensions: "12 x 8 x 1 inches",
      stock_quantity: 40
    },
    {
      name: "Scratching Post",
      description: "Give your cat a designated place to scratch and play.",
      price: 65.78,
      category: "Cat",
      image_path: "/products/Scratching_Post.jpg",
      weight: "2.5 lbs",
      dimensions: "16 x 16 x 24 inches",
      stock_quantity: 15
    },
    {
      name: "Dog Grooming Brush",
      description: "Keep your dog's coat clean and tangle-free with this brush.",
      price: 20.78,
      category: "Dog",
      image_path: "/products/Grooming_Brush.webp",
      weight: "0.4 lbs",
      dimensions: "8 x 3 x 1 inches",
      stock_quantity: 80
    },
    {
      name: "Fish Tank Decorations",
      description: "Add some colorful decorations to your fish tank.",
      price: 45.78,
      category: "Fish",
      image_path: "/products/Fishtank_Decorations.jpg",
      weight: "0.3 lbs",
      dimensions: "3 x 3 x 3 inches",
      stock_quantity: 25
    },
    {
      name: "Catnip Mouse Toy",
      description: "A fun and stimulating toy filled with catnip.",
      price: 5.78,
      category: "Toys",
      image_path: "/products/Mouse_Toy.jpg",
      weight: "0.1 lbs",
      dimensions: "4 x 2 x 1 inches",
      stock_quantity: 90
    },
    {
      name: "Natural Dog Shampoo",
      description: "Gentle shampoo that keeps your dog's coat clean and healthy.",
      price: 11.78,
      category: "Dog",
      image_path: "/products/Dog_Shampoo.webp",
      weight: "1 lb",
      dimensions: "6 x 2 x 2 inches",
      stock_quantity: 55
    },
    {
      name: "Bird Cage",
      description: "A spacious cage for your feathered friend.",
      price: 55.78,
      category: "Bird",
      image_path: "/products/Bird_Cage.webp",
      weight: "4 lbs",
      dimensions: "18 x 18 x 24 inches",
      stock_quantity: 10
    },
    {
      name: "Dog Training Clicker",
      description: "A useful tool for training your dog with positive reinforcement.",
      price: 2.78,
      category: "Dog",
      image_path: "/products/Training_Clicker.jpg",
      weight: "0.1 lbs",
      dimensions: "2 x 1 x 0.5 inches",
      stock_quantity: 75
    },
    {
      name: "Hamster Wheel",
      description: "Let your hamster exercise with this spinning wheel.",
      price: 19.78,
      category: "Small Pets",
      image_path: "/products/Hamster_Wheel.webp",
      weight: "0.2 lbs",
      dimensions: "6 x 6 x 4 inches",
      stock_quantity: 35
    },
    {
      name: "Cat Litter Box",
      description: "A convenient and easy-to-clean litter box for your cat.",
      price: 45.78,
      category: "Cat",
      image_path: "/products/Litter_Box.jpg",
      weight: "1.5 lbs",
      dimensions: "16 x 12 x 5 inches",
      stock_quantity: 30
    },
    {
      name: "Rabbit Hutch",
      description: "A comfortable hutch for your pet rabbit.",
      price: 95.78,
      category: "Small Pets",
      image_path: "/products/Rabbit_Hutch.webp",
      weight: "5 lbs",
      dimensions: "24 x 18 x 12 inches",
      stock_quantity: 5
    },
    {
      name: "Dog Dental Chews",
      description: "Promote dental health in your dog with these chew treats.",
      price: 9.98,
      category: "Food",
      image_path: "/products/Dog_Chews.webp",
      weight: "0.3 lbs",
      dimensions: "5 x 1 x 1 inches",
      stock_quantity: 50
    },
    {
      name: "Reptile Heat Lamp",
      description: "Provide the necessary heat for your reptile's enclosure.",
      price: 30.78,
      category: "Reptiles",
      image_path: "/products/Reptile_Heat_Lamp.jpg",
      weight: "0.6 lbs",
      dimensions: "4 x 2 x 2 inches",
      stock_quantity: 20
    },
    {
      name: "Small Animal Cage",
      description: "A comfortable and secure cage for your small pet.",
      price: 39.78,
      category: "Small Pets",
      image_path: "/products/Small_Animal_Cage.webp",
      weight: "3 lbs",
      dimensions: "18 x 12 x 10 inches",
      stock_quantity: 15
    },
    {
      name: "Tropical Fish Food",
      description: "Nutritious food for your tropical fish.",
      price: 6.78,
      category: "Fish",
      image_path: "/products/Tropical_Fish_Food.jpg",
      weight: "0.2 lbs",
      dimensions: "3 x 2 x 1 inches",
      stock_quantity: 70
    },
    {
      name: "Dog Poop Bags",
      description: "Convenient bags for picking up after your dog.",
      price: 10.78,
      category: "Dog",
      image_path: "/products/Dog_Poop_Bags.webp",
      weight: "0.3 lbs",
      dimensions: "6 x 4 x 2 inches",
      stock_quantity: 100
    },
    {
      name: "Tennis Ball Toy",
      description: "A classic toy for playing fetch with your dog.",
      price: 7.78,
      category: "Toys",
      image_path: "/products/Tennis_Ball.png",
      weight: "0.2 lbs",
      dimensions: "3 x 3 x 3 inches",
      stock_quantity: 80
    },
    {
      name: "Bird Perch",
      description: "A comfortable perch for your pet bird to rest on.",
      price: 9.78,
      category: "Bird",
      image_path: "/products/Bird_Perch.jpg",
      weight: "0.5 lbs",
      dimensions: "10 x 1 x 1 inches",
      stock_quantity: 40
    },
    {
      name: "Dog Frisbee",
      description: "Have fun outdoors with this durable dog frisbee.",
      price: 6.78,
      category: "Toys",
      image_path: "/products/Dog_Frisbee.webp",
      weight: "0.4 lbs",
      dimensions: "8 x 8 x 1 inches",
      stock_quantity: 60
    },
    {
      name: "Cat Tunnel",
      description: "A collapsible tunnel for your cat to explore and play in.",
      price: 30.78,
      category: "Toys",
      image_path: "/products/Cat_Tunnel.webp",
      weight: "0.8 lbs",
      dimensions: "24 x 9 x 9 inches",
      stock_quantity: 25
    },
    {
      name: "Dog Nail Clippers",
      price: 5.66,
      description: "Trim your dog's nails safely and easily with these clippers.",
      category: "Dog",
      image_path: "/products/Dog_Nail_Clipper.jpg",
      weight: "0.2 lbs",
      dimensions: "6 x 2 x 1 inches",
      stock_quantity: 45
    },
    {
      name: "Fish Tank Filter",
      description: "Keep your fish tank water clean with this efficient filter.",
      price: 55.78,
      category: "Fish",
      image_path: "/products/Fish_Tank_Filter.jpg",
      weight: "1 lb",
      dimensions: "6 x 4 x 3 inches",
      stock_quantity: 30
    },
    {
      name: "Cat Collar",
      description: "A stylish collar for your cat with a bell included.",
      price: 5.78,
      category: "Cat",
      image_path: "/products/Cat_Collar.webp",
      weight: "0.1 lbs",
      dimensions: "10 x 0.5 x 0.1 inches",
      stock_quantity: 70
    },
    {
      name: "Dog Treat Pouch",
      description: "Convenient pouch for storing and dispensing dog treats.",
      price: 9.78,
      category: "Dog",
      image_path: "/products/Dog_Treat_Pouch.jpg",
      weight: "0.3 lbs",
      dimensions: "6 x 4 x 2 inches",
      stock_quantity: 35
    },
    {
      name: "Reptile Terrarium",
      description: "A spacious terrarium for your reptile's habitat.",
      price: 115.78,
      category: "Reptiles",
      image_path: "/products/Reptile_Terrarium.jpg",
      weight: "6 lbs",
      dimensions: "24 x 18 x 18 inches",
      stock_quantity: 10
    },
    {
      name: "Small Animal Bedding",
      description: "Soft and absorbent bedding for your small pet's cage.",
      price: 5.78,
      category: "Small Pets",
      image_path: "/products/Animal_Bedding.jpg",
      weight: "1 lb",
      dimensions: "12 x 10 x 4 inches",
      stock_quantity: 50
    },
    {
      name: "Bird Seed Mix",
      description: "A nutritious blend of seeds for your pet bird.",
      price: 8.78,
      category: "Bird",
      image_path: "/products/Bird_Seed_Mix.jpg",
      weight: "2 lbs",
      dimensions: "8 x 6 x 4 inches",
      stock_quantity: 20
    },
    {
      name: "Dog Chew Toy",
      description: "Durable and satisfying chew toy for your dog.",
      price: 10.78,
      category: "Toys",
      image_path: "/products/Dog_Chew_Toy.jpg",
      weight: "0.5 lbs",
      dimensions: "8 x 4 x 4 inches",
      stock_quantity: 80
    },
    {
      name: "Cat Carrier",
      description: "A comfortable and secure carrier for transporting your cat.",
      price: 35.98,
      category: "Cat",
      image_path: "/products/Cat_Carrier.jpg",
      weight: "3 lbs",
      dimensions: "18 x 12 x 10 inches",
      stock_quantity: 30
    },
    {
      name: "Rabbit Food",
      description: "Balanced and nutritious food for your pet rabbit.",
      price: 10.78,
      category: "Small Pets",
      image_path: "/products/Rabbit_Food.jpg",
      weight: "2 lbs",
      dimensions: "8 x 6 x 4 inches",
      stock_quantity: 15
    },
    {
      name: "Dog Water Bottle",
      description: "Convenient water bottle for hydrating your dog on the go.",
      price: 8.99,
      category: "Dog",
      image_path: "/products/Dog_Water_Bottle.webp",
      weight: "0.4 lbs",
      dimensions: "10 x 2 x 2 inches",
      stock_quantity: 70
    },
    {
      name: "Reptile UVB Light",
      description: "Provide essential UVB lighting for your reptile's health.",
      price: 44.78,
      category: "Reptiles",
      image_path: "/products/Reptile_UVB_Light.jpg",
      weight: "0.8 lbs",
      dimensions: "12 x 2 x 1 inches",
      stock_quantity: 25
    },
    {
      name: "Fish Tank Heater",
      description: "Maintain the ideal water temperature for your fish.",
      price: 19.78,
      category: "Fish",
      image_path: "/products/Fish_Tank_Heater.jpg",
      weight: "0.5 lbs",
      dimensions: "8 x 4 x 2 inches",
      stock_quantity: 40
    },
    {
      name: "Cat Scratcher",
      description: "A corrugated cardboard scratcher for your cat's claws.",
      price: 15.78,
      category: "Cat",
      image_path: "/products/Cat_Scratcher.jpg",
      weight: "1.2 lbs",
      dimensions: "16 x 8 x 2 inches",
      stock_quantity: 20
    },
    {
      name: "Dog Raincoat",
      description: "Keep your dog dry during rainy walks with this raincoat.",
      price: 21.78,
      category: "Dog",
      image_path: "/products/Dog_Coat.jpg",
      weight: "0.7 lbs",
      dimensions: "12 x 10 x 2 inches",
      stock_quantity: 60
    },
    {
      name: "Aspen Shavings Beddings",
      description: "Soft and cozy bedding material for your hamster's cage.",
      price: 15.78,
      category: "Small Pets",
      image_path: "/products/Aspen_Shavings_Bedding.jpg",
      weight: "0.3 lbs",
      dimensions: "6 x 4 x 2 inches",
      stock_quantity: 50
    },
    {
      name: "Cat Water Fountain",
      description: "Encourage your cat to drink more water with this fountain.",
      price: 17.78,
      category: "Cat",
      image_path: "/products/Cat_Water_Fountain.jpg",
      weight: "2 lbs",
      dimensions: "10 x 8 x 6 inches",
      stock_quantity: 25
    },
    {
      name: "Dog Muzzle",
      description: "A safe and comfortable muzzle for your dog.",
      price: 13.99,
      category: "Dog",
      image_path: "/products/Dog_Muzzle.jpg",
      weight: "0.2 lbs",
      dimensions: "8 x 2 x 1 inches",
      stock_quantity: 45
    },
    {
      name: "Fish Tank Gravel",
      description: "Colorful gravel substrate for your fish tank.",
      price: 15.98,
      category: "Fish",
      image_path: "/products/Fish_Tank_Gravel.webp",
      weight: "5 lbs",
      dimensions: "12 x 8 x 2 inches",
      stock_quantity: 30
    },
    {
      name: "Cat Hairbrush",
      description: "Remove loose hair and prevent matting with this brush.",
      price: 9.99,
      category: "Cat",
      image_path: "/products/Cat_Brush.jpg",
      weight: "0.3 lbs",
      dimensions: "6 x 2 x 1 inches",
      stock_quantity: 40
    },
    {
      name: "Dog Cooling Mat",
      description: "Provide your dog with a cool spot to relax on hot days.",
      price: 23.91,
      category: "Dog",
      image_path: "/products/Dog_Cooling_Mat.jpg",
      weight: "1 lb",
      dimensions: "24 x 18 x 0.5 inches",
      stock_quantity: 15
    },
    {
      name: "Reptile Hideout",
      description: "A hiding spot for your reptile to feel secure in its enclosure.",
      price: 7.99,
      category: "Reptiles",
      image_path: "/products/Reptile_Hideout.jpg",
      weight: "0.6 lbs",
      dimensions: "6 x 4 x 4 inches",
      stock_quantity: 35
    },
    {
      name: "Bird Swing",
      description: "A fun and engaging swing for your pet bird.",
      price: 10.99,
      category: "Bird",
      image_path: "/products/Bird_Swing.jpg",
      weight: "0.4 lbs",
      dimensions: "8 x 4 x 1 inches",
      stock_quantity: 70
    },
    {
      name: "Dog Car Seat",
      description: "Keep your dog safe and comfortable during car rides.",
      price: 62.99,
      category: "Dog",
      image_path: "/products/Dog_Car_Seat.jpg",
      weight: "3 lbs",
      dimensions: "18 x 16 x 12 inches",
      stock_quantity: 20
    },
    {
      name: "Small Animal Hay",
      description: "High-quality hay for your small pet's diet.",
      price: 2.99,
      category: "Small Pets",
      image_path: "/products/Animal_Hay.jpg",
      weight: "2 lbs",
      dimensions: "12 x 8 x 6 inches",
      stock_quantity: 60
    },
    {
      name: "Bird Cage Cover",
      description: "A cover to provide privacy and darkness for your bird's cage.",
      price: 43.99,
      category: "Bird",
      image_path: "/products/Bird_Cage_Cover.jpg",
      weight: "0.8 lbs",
      dimensions: "18 x 12 x 1 inches",
      stock_quantity: 30
    },
    {
      name: "Dog Training Pads",
      description: "Absorbent pads for potty training your dog.",
      price: 10.78,
      category: "Dog",
      image_path: "/products/Dog_Training_Pads.jpg",
      weight: "2 lbs",
      dimensions: "24 x 18 x 0.5 inches",
      stock_quantity: 50
    },
    {
      name: "Turtle Food",
      description: "Nutritious food pellets for your pet turtle.",
      price: 13.78,
      category: "Reptiles",
      image_path: "/products/Turtle_Food.jpg",
      weight: "0.5 lbs",
      dimensions: "6 x 4 x 2 inches",
      stock_quantity: 25
    },
    {
      name: "Cat Wand Toy",
      description: "Interactive toy with feathers for your cat to chase.",
      price: 5.28,
      category: "Toys",
      image_path: "/products/Cat_Wand_Toy.jpg",
      weight: "0.2 lbs",
      dimensions: "24 x 2 x 1 inches",
      stock_quantity: 40
    },
    {
      name: "Dog Toothbrush Kit",
      description: "Keep your dog's teeth clean and healthy with this kit.",
      price: 31.48,
      category: "Dog",
      image_path: "/products/Dog_Toothbrush_Kit.jpg",
      weight: "0.3 lbs",
      dimensions: "8 x 2 x 1 inches",
      stock_quantity: 30
    },
    {
      name: "Fish Tank Thermometer",
      description: "Monitor the water temperature in your fish tank.",
      price: 31.88,
      category: "Fish",
      image_path: "/products/Fish_Tank_Thermometer.jpg",
      weight: "0.1 lbs",
      dimensions: "4 x 1 x 0.5 inches",
      stock_quantity: 75
    },
    {
      name: "Cat Treat Dispenser",
      description: "An interactive toy that dispenses treats for your cat.",
      price: 31.98,
      category: "Toys",
      image_path: "/products/Cat_Food_Dispenser.jpg",
      weight: "0.5 lbs",
      dimensions: "6 x 4 x 4 inches",
      stock_quantity: 35
    },
    {
      name: "Dog Life Jacket",
      description: "Ensure your dog's safety during water activities with this life jacket.",
      price: 31.98,
      category: "Dog",
      image_path: "/products/Dog_Life_Jacket.jpg",
      weight: "1 lb",
      dimensions: "14 x 10 x 2 inches",
      stock_quantity: 15
    },
    {
      name: "Reptile Substrate",
      description: "Provide a comfortable bedding for your reptile's enclosure.",
      price: 21.84,
      category: "Reptiles",
      image_path: "/products/Reptile_Subtrate.jpg",
      weight: "5 lbs",
      dimensions: "12 x 8 x 4 inches",
      stock_quantity: 55
    },
    {
      name: "Bird Treats",
      description: "Delicious treats to reward your pet bird.",
      price: 11.22,
      category: "Bird",
      image_path: "/products/Bird_Treats.jpg",
      weight: "0.3 lbs",
      dimensions: "4 x 2 x 1 inches",
      stock_quantity: 65
    },
    {
      name: "Dog Backpack",
      description: "A backpack to carry essentials for your dog during hikes.",
      price: 31.28,
      category: "Dog",
      image_path: "/products/Dog_Backpack.jpg",
      weight: "1 lb",
      dimensions: "12 x 10 x 6 inches",
      stock_quantity: 25
    },
    {
      name: "Small Animal Water Bottle",
      description: "Provide water to your small pet with this convenient bottle.",
      price: 5.21,
      category: "Small Pets",
      image_path: "/products/Animal_Waterbottle.png",
      weight: "0.2 lbs",
      dimensions: "8 x 2 x 2 inches",
      stock_quantity: 70
    },
    {
      name: "Bird Nesting Material",
      description: "Natural fibers for your bird to build a cozy nest.",
      price: 19.18,
      category: "Bird",
      image_path: "/products/Bird_Nesting_Material.jpg",
      weight: "0.1 lbs",
      dimensions: "6 x 4 x 1 inches",
      stock_quantity: 40
    },
    {
      name: "CalmTreats Advanced",
      description: "Help reduce anxiety and promote relaxation in your dog.",
      price: 13.28,
      category: "Food",
      image_path: "/products/Dog_Calming_Treat.jpg",
      weight: "0.3 lbs",
      dimensions: "4 x 2 x 2 inches",
      stock_quantity: 50
    },
    {
      name: "Cat Window Perch",
      description: "A comfortable perch for your cat to enjoy the view from the window.",
      price: 37.18,
      category: "Cat",
      image_path: "/products/Cat_Window_Perch.jpg",
      weight: "1 lb",
      dimensions: "12 x 12 x 1 inches",
      stock_quantity: 30
    },
    {
      name: "Fish Tank Background",
      description: "A decorative background to enhance the look of your fish tank.",
      price: 19.21,
      category: "Fish",
      image_path: "/products/Fish_Tank_Background.webp",
      weight: "0.2 lbs",
      dimensions: "24 x 12 x 0.1 inches",
      stock_quantity: 20
    },
    {
      name: "Dog Training Treats",
      description: "Irresistible treats for rewarding and training your dog.",
      price: 21.28,
      category: "Food",
      image_path: "/products/Dog_Training_Treats.jpg",
      weight: "0.5 lbs",
      dimensions: "4 x 2 x 1 inches",
      stock_quantity: 60
    },
    {
      name: "Cat Dental Treats",
      description: "Promote dental health in your cat with these dental treats.",
      price: 12.18,
      category: "Food",
      image_path: "/products/Cat_Dental_Treats.jpg",
      weight: "0.3 lbs",
      dimensions: "4 x 2 x 1 inches",
      stock_quantity: 35
    },
    {
      name: "Dog Poop Scooper",
      description: "Make cleaning up after your dog quick and easy with this scooper.",
      price: 19.18,
      category: "Dog",
      image_path: "/products/Dog_Poop_Scooper.jpg",
      weight: "1 lb",
      dimensions: "24 x 6 x 4 inches",
      stock_quantity: 25
    },
    {
      name: "Reptile Feeding Dish",
      description: "A shallow dish for feeding your reptile.",
      price: 5.11,
      category: "Reptiles",
      image_path: "/products/Reptile_Feeding_Dish.jpg",
      weight: "0.2 lbs",
      dimensions: "6 x 4 x 1 inches",
      stock_quantity: 50
    },
    {
      name: "Bird Cage Perch",
      description: "A comfortable and textured perch for your pet bird.",
      price: 12.11,
      category: "Bird",
      image_path: "/products/Bird_Cage_Perch.jpg",
      weight: "0.5 lbs",
      dimensions: "10 x 1 x 1 inches",
      stock_quantity: 40
    },
    {
      name: "Fish Tank Air Pump",
      description: "Provide necessary oxygen for your fish tank with this air pump.",
      price: 61.18,
      category: "Fish",
      image_path: "/products/Fish_Tank_Airpump.jpg",
      weight: "0.3 lbs",
      dimensions: "6 x 4 x 2 inches",
      stock_quantity: 30
    },
    {
      name: "IGUOHAO Cat Toy",
      description: "A toy that stimulates your cat's hunting instincts.",
      price: 12.15,
      category: "Toys",
      image_path: "/products/Cat_Toy.webp",
      weight: "0.2 lbs",
      dimensions: "6 x 2 x 2 inches",
      stock_quantity: 70
    },
    {
      name: "Dog Agility Tunnel",
      description: "Train and exercise your dog with this collapsible tunnel.",
      price: 31.12,
      category: "Dog",
      image_path: "/products/Dog_Tunnel.jpg",
      weight: "5 lbs",
      dimensions: "20 x 18 x 18 inches",
      stock_quantity: 10
    },
    {
      name: "Small Animal Exercise Ball",
      description: "Let your small pet explore safely in this exercise ball.",
      price: 2.18,
      category: "Small Pets",
      image_path: "/products/Exercise_Ball.jpg",
      weight: "0.3 lbs",
      dimensions: "6 x 6 x 6 inches",
      stock_quantity: 40
    },
    {
      name: "Carozen Dog Puzzle Toy",
      description: "Challenge your dog's problem-solving skills with this puzzle toy.",
      price: 16.11,
      category: "Toys",
      image_path: "/products/Dog_Puzzle_Toy.jpg",
      weight: "1 lb",
      dimensions: "8 x 8 x 2 inches",
      stock_quantity: 45
    },
    {
      name: "Cat Grooming Gloves",
      description: "Gently remove loose hair from your cat's coat with these gloves.",
      price: 9.99,
      category: "Cat",
      image_path: "/products/Cat_Glove.webp",
      weight: "0.2 lbs",
      dimensions: "9 x 6 x 1 inches",
      stock_quantity: 55
    },
    {
      name: "Reptile Heat Rock",
      description: "Provide a warm basking spot for your reptile with this heat rock.",
      price: 15.00,
      category: "Reptiles",
      image_path: "/products/Reptile_Heat_Rock.jpg",
      weight: "1.5 lbs",
      dimensions: "8 x 6 x 2 inches",
      stock_quantity: 25
    },
    {
      name: "JW Bird Bell Toy",
      description: "A colorful bell toy to entertain your pet bird.",
      price: 7.12,
      category: "Bird",
      image_path: "/products/Bird_Bell.jpg",
      weight: "0.1 lbs",
      dimensions: "4 x 2 x 2 inches",
      stock_quantity: 80
    },
    {
      name: "Dog Whistle",
      description: "Train your dog with this high-frequency whistle.",
      price: 3.12,
      category: "Dog",
      image_path: "/products/Dog_Whistle.jpg",
      weight: "0.1 lbs",
      dimensions: "2 x 1 x 0.5 inches",
      stock_quantity: 65
    },
    {
      name: "PietyPet Fish Decors",
      description: "Add vibrant and realistic plants to your fish tank.",
      price: 32.99,
      category: "Fish",
      image_path: "/products/Fish_Tank_Decor.jpg",
      weight: "0.2 lbs",
      dimensions: "8 x 4 x 4 inches",
      stock_quantity: 50
    }
  ]);
};
