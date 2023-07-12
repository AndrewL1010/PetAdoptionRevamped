import RecoveryComponent from "@/components/RecoveryComponent/RecoveryComponent"
import { Metadata } from "next"
export const metadata: Metadata = {
    title: 'Recovery - Pet Sanctuary',
}
function Page() {
    return (
        <RecoveryComponent></RecoveryComponent>
    )
}

export default Page