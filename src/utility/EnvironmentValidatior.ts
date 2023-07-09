import zod from "zod";
const envSchema = zod.object({
    HOST_EMAIL: zod.string().nonempty(),
    HOST_PASSWORD: zod.string().nonempty(),
    SECRET_KEY: zod.string().nonempty(),
    NODE_ENV: zod.string().nonempty(),
    EMAIL_SECRET_KEY: zod.string().nonempty(),
    BASE_URL: zod.string().nonempty(),
    POSTGRES_URL: zod.string().nonempty(),
    POSTGRES_PRISMA_URL: zod.string().nonempty(),
    POSTGRES_URL_NON_POOLING: zod.string().nonempty(),
    POSTGRES_USER: zod.string().nonempty(),
    POSTGRES_HOST: zod.string().nonempty(),
    POSTGRES_PASSWORD: zod.string().nonempty(),
    POSTGRES_DATABASE: zod.string().nonempty(),
});
export const env = envSchema.parse(process.env);