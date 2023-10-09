import joi from "joi";

let userValidator = joi.object({
    email: joi.string().required().email().messages({
        "string.empty": `Email cannot be an empty field`,
        "string.email": `Email format should be: example@company.com`,
        "any.required": `Email is a required field`,
    }),
    password: joi.string().min(8).max(16).required().messages({
        "string.empty": `Password cannot be an empty field`,
        "string.min": `Password should have a minimum length of { #limit}`,
        "string.max": `Password should have a maximum length of { #limit}`,
        "any.required": `Password is a required field`,
    }),

})

export default userValidator