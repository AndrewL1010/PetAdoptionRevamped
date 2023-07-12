import PageProps from "@/types/PageProps"
import getConnection from "@/utility/dbHandler";
import ApplicationComponent from "@/components/ApplicationComponent/ApplicationComponent";
import { Animal } from "@/types/TableModels";
import { Metadata } from "next";
export async function generateMetadata({ params: { id } }: PageProps): Promise<Metadata> {
    const database = getConnection();
    if (database) {
        const animal = await database<Animal>("animals").where({ id: parseInt(id) }).first();
        await database.destroy();
        if (animal) {
            return {
                title: `${animal.type}: ${animal.name} - Application`
            }
        }
    }
    return {
        title: `Animal: ${id} - Pet Sanctuary`
    }
}
async function Page({ params: { id } }: PageProps) {
    const database = getConnection();
    if (database) {
        const animal = await database<Animal>('animals').where({ id: parseInt(id) }).first();
        await database.destroy();
        if (animal) {
            return (
                <ApplicationComponent name={animal.name} breed={animal.breed} animal_id={animal.id}></ApplicationComponent>
            )
        }
    }

}

export default Page