import zod from "zod";
const envSchema = zod.object({
    HOST_EMAIL: zod.string().nonempty(),
    HOST_PASSWORD: zod.string().nonempty(),
    USER_SECRET_KEY: zod.string().nonempty(),
    NODE_ENV: zod.string().nonempty(),
    EMAIL_SECRET_KEY: zod.string().nonempty(),
    BASE_URL: zod.string().nonempty(),
    EXTERNAL_URL: zod.string().nonempty(),
    EMAIL_REGISTER_KEY: zod.string().nonempty(),
    RECOVERY_SECRET_KEY: zod.string().nonempty(),

});
export const env = envSchema.parse(process.env);
