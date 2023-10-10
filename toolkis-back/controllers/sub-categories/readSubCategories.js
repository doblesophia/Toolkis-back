import SubCategory from "../../models/SubCategory.js";

export default async function (req, res) {
    try {
    const subCategory = await SubCategory.find()
        return res.status(200).json({
                success: true,
                response: 'ok',
                message : '/sub-category',
                subCategory: subCategory
        });
    } catch (error) {
      console.log(error)
    }
  }