import Category from "../../models/Category.js";

export default async function (req, res) {
    try {
    const category = await Category.find()
        return res.status(200).json({
                success: true,
                response: 'ok',
                message : '/category',
                category: category
        });
    } catch (error) {
      console.log(error)
    }
  }