import { AnyObject, ObjectSchema, ValidationError } from "yup";

export default async function ValidationUtility(schema: ObjectSchema<AnyObject>, data: unknown) {
    try {
        await schema.validate(data);
        return { status: "success" };
    } catch (error) {
        if (error instanceof ValidationError) {
            return { status: "fail", message: error.errors[0] };
        }
        return { status: "fail", message: "Incorrect Inputs, please try again" };
    }
}