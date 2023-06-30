const config = require('../app/database/knexfile');
import Knex from "knex";
// export default async function handleQuery(rawQuery: string): Promise<any> {
//     try {
//         const database = Knex(config);
//         const result = await database.raw(rawQuery);
//         await database.destroy();
//         return result.rows;
//     } catch (error) {
//         console.log(error);
//     }
// }
export default function getConnection() {
    try {
        const database = Knex(config);
        return database;
    } catch (error) {
        console.log(error);
    }
}

