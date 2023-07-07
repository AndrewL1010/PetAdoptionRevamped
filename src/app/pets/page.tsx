import FilterComponent from '@/components/FilterComponent';
import getConnection from '@/utility/dbHandler';
import { cookies } from 'next/headers';
async function Page() {
    const database = getConnection();
    function getFilter(): string {

        const filter = cookies().get("filter");
        if (!filter) {
            return "all";
        }
        else {
            try {
                return filter.value;
            }
            catch (error) {
                return "all";
            }
        }
    }
    if (database) {
        const animals = await database('animals');
        await database.destroy();
        const filter = getFilter();
        if (animals) {
            return (
                <FilterComponent animals={animals} filter={filter ? filter : "all"}></FilterComponent>
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