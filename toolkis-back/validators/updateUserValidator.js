import joi from "joi";

let updateUserValidator = joi.object({
    name: joi.string().min(4).max(15).messages({
        "string.empty": `Name cannot be an empty field`,
        "string.min": `Name should have a minimum length of { #limit}`,
        "string.max": `Name should have a maximum length of { #limit}`
    }),
    email: joi.string().email().messages({
        "string.empty": `Email cannot be an empty field`,
        "string.email": `Email format should be: example@company.com`,
        "any.required": `Email is a required field`,
    }),
    password: joi.string().min(8).messages({
        "string.empty": `Password cannot be an empty field`,
        "string.min": `Password should have a minimum length of { #limit}`,
        "any.required": `Password is a required field`,
    }),
    photo: joi.string().uri().messages({
        "string.empty": `Email cannot be an empty field`,
        "string.uri": "Invalid url",
    }),
    role: joi.number().max(2).min(0).messages({
        "number.min": "Role must be 0 or higher",
        "number.max": "Role must be 2 or lower"
    }),
    telephone:joi.number().messages({
        "number.empty": "Field required"
    })

}).min(1)

export default updateUserValidator