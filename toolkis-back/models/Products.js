import { Schema, Types, model } from "mongoose";

const collection = 'products'
const schema = new Schema ({
    name: {type: String, required: true},
    brand:{type: String, required: true},
    category: {type: String, required: true},
    subcategory: {type: String, required: true},
    stock: {type: Number, default: 0, required: true},
    description: {type: Object, required: true},
    photo: {type: String},
    price: {type: Number, default:0, required: true},
    details: {type: Object, required: true}
}, {timestamps: true})

const Product = model(collection, schema)

export default Product