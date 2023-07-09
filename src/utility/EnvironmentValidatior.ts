import zod from "zod";
const envSchema = zod.object({
    HOST_EMAIL: zod.string().nonempty(),
    HOST_PASSWORD: zod.string().nonempty(),
    SECRET_KEY: zod.string().nonempty(),
    NODE_ENV: zod.string().nonempty(),
    EMAIL_SECRET_KEY: zod.string().nonempty(),
    BASE_URL: zod.string().nonempty(),
    port: zod.number(),
    host: zod.string().nonempty(),
    database: zod.string().nonempty(),
    user: zod.string().nonempty(),
    password: zod.string().nonempty(),
});
export const env = envSchema.parse(process.env);