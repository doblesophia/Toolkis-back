import joi from "joi";

let updateUserValidator = joi.object({
    email: joi.string().email().messages({
        "string.empty": `Email cannot be an empty field`,
        "string.email": `Email format should be: example@company.com`,
        "any.required": `Email is a required field`,
    }),
    password: joi.string().min(8).max(16).messages({
        "string.empty": `Password cannot be an empty field`,
        "string.min": `Password should have a minimum length of { #limit}`,
        "string.max": `Password should have a maximum length of { #limit}`,
        "any.required": `Password is a required field`,
    }),
    photo: joi.string().uri().messages({
        "string.empty": `Email cannot be an empty field`,
        "string.uri": "Invalid url",
    }),
    telephone:joi.number().min(8).max(30).messages({
        "number.empty": "Field required",
        "number.min": "Number too short",
        "number.max": "Number too long",
    })

}).min(1)

export default updateUserValidator