import { Animal } from "./TableModels"
export default interface FilterProps {
    animals: Animal[],
    filter: string,
}