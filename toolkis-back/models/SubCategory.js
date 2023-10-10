import { Schema, Types, model } from "mongoose";
import Category from "./Category.js";


const collection = 'subcategories'
const schema = new Schema({
    name:{type: String, required: true},
    main_category: {
        type: Schema.Types.ObjectId,
        ref: Category,
    },
})

const SubCategory = model(collection, schema)


export default SubCategory