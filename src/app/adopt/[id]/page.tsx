import PageProps from "@/types/PageProps"
import getConnection from "@/utility/dbHandler";
import ApplicationComponent from "@/components/ApplicationComponent";
import Animal from "@/types/Animal";
async function Page({ params: { id } }: PageProps) {
    const database = getConnection();
    if (database) {
        const animal: Animal = await database('animals').where({ id: id }).first();
        await database.destroy();

        return (
            <ApplicationComponent name={animal.name} breed={animal.breed} animal_id={animal.id}></ApplicationComponent>
        )
    }

}

export default Page