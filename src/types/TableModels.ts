export interface User {
    id: number,
    confirmation: boolean,
    username: string,
    password: string,
    email: string,
    created_at: Date

}
export interface Application {
    id: number,
    user_id: number,
    animal_id: number,
    firstname: string,
    lastname: string,
    occupation: string,
    address: string,
    experience: string,
    email: string
}
export interface Animal {
    id: number,
    type: string,
    name: string,
    age: number,
    gender: string,
    weight: string,
    breed: string,
    alt: string,
    image: string,
    description: string,
}