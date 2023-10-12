import Category from "../../models/Category.js";
import SubCategory from "../../models/SubCategory.js";

export default async function (req, res) {
    try {
      const subCategory = await SubCategory.find()
      const categoria = await Category.find()
      const categories = subCategory.map(sub => {
        const category = categoria.find(cat => cat._id.toString() === sub.main_category.toString())
        return {name_sub : sub.name,
          main_category : category,
          id: sub._id} 
      } )
        return res.status(200).json({
                success: true,
                response: 'ok',
                message : '/sub-category',
                subCategory: categories
        });
    } catch (error) {
      console.log(error)
    }
  }