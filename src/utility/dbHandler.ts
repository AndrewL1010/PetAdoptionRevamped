import { env } from './EnvironmentValidatior';
import config from '../app/database/knexfile';
import Knex from "knex";
export default function getConnection() {
    try {
        if (env.NODE_ENV === "production") {
            const database = Knex(config.production);
            return database;
        }
        else {
            const database = Knex(config.development);
            return database;
        }
    } catch (error) {
        console.log(error);
    }
}

