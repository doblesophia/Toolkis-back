import { Schema, Types, model } from "mongoose";

const collection = 'categories'
const schema = new Schema ({
    name: {type: String, required: true},
})

const Category = model(collection, schema)


export default Category