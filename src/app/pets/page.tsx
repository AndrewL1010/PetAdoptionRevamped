import FilterComponent from '@/components/FilterComponent/FilterComponent';
import getConnection from '@/utility/dbHandler';
import { Animal } from '@/types/TableModels';
async function Page() {
    const database = getConnection();
    
    if (database) {
        const animals = await database<Animal>('animals');
        await database.destroy();
        if (animals) {
            return (
                <FilterComponent animals={animals}></FilterComponent>
            )
        }

    }

    return (
        <div>
            no animals
        </div>

    )



}

export default Page