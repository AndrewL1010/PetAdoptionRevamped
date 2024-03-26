
import { Metadata } from "next"
import PetComponent from "./(petComponent)/PetComponent"
export const metadata: Metadata = {
    title: 'Adoption Guide - Pet Sanctuary',
}
function Page() {
    return (
       <PetComponent/>
    )
}

export default Page