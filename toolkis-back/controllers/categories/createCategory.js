import Category from "../../models/Category.js"

const createCategory = async (req, res) =>{
    try {
        const newCategory = new Category(req.body)
        await newCategory.save()
        return res.status(201).json({
            success: true,
            response: newCategory,
            message: "Category created"
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            response: null,
            message: error.message
        })
        
    }
}

export default createCategory