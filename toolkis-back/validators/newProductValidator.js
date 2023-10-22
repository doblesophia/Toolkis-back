import joi from "joi"

const newProductValidator = joi.object({
    name: joi.string().min(2).max(25).required().messages({
        "any.required" : "PRODUCT_NAME_REQUIRED" , 
        "objectId.required" : "MANGA_ID_REQUIRED",
    }),
    brand: joi.string().min(2).max(25).required().messages({
        "string.empty" : "BRAND_REQUIRED" ,
        "string.min" : "BRAND_TOO_SHORT" ,
        "string.max" : "BRAND_TOO_LONG" ,
        "any.required" : "BRAND_REQUIRED"
    }),
    category: joi.string().min(2).max(25).required().messages({
        "string.empty" : "CATEGORY_REQUIRED",
        "any.required" : "CATEGORY_REQUIRED",
    }),
    subcategory: joi.string().min(2).max(25).required().messages({
        "string.empty" : "SUBCATEGORY_REQUIRED",
        "any.required" : "SUBCATEGORY_REQUIRED",
    }),
    stock: joi.number().min(1).required().messages({
        "any.required" : "STOCK_REQUIRED",
        
    }),
    description: joi.string().min(2).max(1000).required().messages({
        "any.required" : "DESCRIPTION_REQUIRED",
        "string.min" : "DESCRIPTION_TOO_SHORT" ,
        "string.max" : "DESCRIPTION_TOO_LONG" ,
    }),
    photo: joi.string().uri().required().messages({
        "string.empty" : "PHOTO_REQUIRED",
        "string.uri" : "INVALID_URL",
        "any.required" : "PHOTO_REQUIRED",
    }),
    price: joi.number().min(1).required().messages({
        "any.required" : "PRICE_REQUIRED",
        "number.min" : "NUMBER_TOO_SHORT",
    }),
    details: joi.object().keys({
        'PowerSupply': joi.string(),
        'Speeds': joi.string(),
        'Voltage': joi.string(),
        'Amperage': joi.string(),
        'Material': joi.string(),
        'ItemWeight': joi.string(),
        'ItemDimensions': joi.string(),
    })
})

export default newProductValidator