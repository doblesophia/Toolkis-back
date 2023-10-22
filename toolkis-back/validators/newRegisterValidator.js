import joi from "joi";

let registerValidator = joi.object({
    name: joi.string().min(4).max(15).required().messages({
        "string.empty": `Name cannot be an empty field`,
        "string.min": `Name should have a minimum length of { #limit}`,
        "string.max": `Name should have a maximum length of { #limit}`,
        "any.required": `Name is a required field`,
    }),
    email: joi.string().required().email().messages({
        "string.empty": `Email cannot be an empty field`,
        "string.email": `Email format should be: example@company.com`,
        "any.required": `Email is a required field`,
    }),
    password: joi.string().min(8).required().messages({
        "string.empty": `Password cannot be an empty field`,
        "string.min": `Password should have a minimum length of { #limit}`,
        "any.required": `Password is a required field`,
    }),
    photo: joi.string().uri().allow(null, '').messages({
        "string.uri": "URL needs to be valid"
    }),
    telephone: joi.number().allow(null, '').messages({
        "number.any": "Telephone should be a valid phone number"
    })

})

export default registerValidator