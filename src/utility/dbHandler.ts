const config = require('../app/database/knexfile');
import Knex from "knex";
export default function getConnection() {
    try {
        const database = Knex(config);
        return database;
    } catch (error) {
        console.log(error);
    }
}

