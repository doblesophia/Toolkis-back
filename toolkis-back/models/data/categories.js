import "../../config/database.js";
import "dotenv/config.js";
import Category from "../Category.js";


const categories = [{
    name: "Power tools",
}, 
{
    name: "Hand tools"
},
{
    name: "Hardware"
},
{
    name: "Home and Garden"
}]

Category.insertMany(categories)
