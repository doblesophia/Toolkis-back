import "../../config/database.js";
import "dotenv/config.js";
import Category from "../Category.js";
import SubCategory from "../SubCategory.js";

const subCategory = [{
    name: "Drilling",
    main_category: "Power tools"
},
{
    name: "Cutting",
    main_category: "Power tools"
},
{
    name: "Welding",
    main_category: "Power tools"
},
{
    name: "Plumbing",
    main_category: "Hand tools"
},
{
    name: "Masonry",
    main_category: "Hand tools"
},
{
    name: "Fastening",
    main_category: "Hand tools"
},
{
    name: "Measuring",
    main_category: "Hand tools"
},
{
    name: "Pliers and Clamps",
    main_category: "Hand tools"
},
{
    name: "Painting Supplies",
    main_category: "Hardware"
},
{
    name: "Electrical Supplies",
    main_category: "Hardware"
},
{
    name: "Cutting and Pruning",
    main_category: "Home and Garden"
},
{
    name: "Irrigation and Pool",
    main_category: "Home and Garden"
},
{
    name: "Maintenance",
    main_category: "Home and Garden"
}]

async function uploadSubCategories(subcategory){
    let mainCategory = await Category.findOne({name:subcategory.main_category})
    let category_id = mainCategory._id
    subcategory.main_category = category_id
    await SubCategory.create(subcategory)
}

subCategory.forEach(category=>uploadSubCategories(category))