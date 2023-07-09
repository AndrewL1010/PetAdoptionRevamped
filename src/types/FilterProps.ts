import Animal from "./TableModels"
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies"
export default interface FilterProps {
    animals: Animal[],
    filter: string,
}