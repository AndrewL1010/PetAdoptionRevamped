import zod from "zod";
const envSchema = zod.object({
    HOST_EMAIL: zod.string().nonempty(),
    HOST_PASSWORD: zod.string().nonempty(),
    SECRET_KEY: zod.string().nonempty(),
    NODE_ENV: zod.string().nonempty(),
    EMAIL_SECRET_KEY: zod.string().nonempty(),
    BASE_URL: zod.string().nonempty(),
    DATABASE_PORT: zod.string().nonempty(),
    DATABASE_HOST: zod.string().nonempty(),
    DATABASE_NAME: zod.string().nonempty(),
    DATABASE_USER: zod.string().nonempty(),
    DATABASE_ACCESS_KEY: zod.string().nonempty(),
});
export const env = envSchema.parse(process.env);
