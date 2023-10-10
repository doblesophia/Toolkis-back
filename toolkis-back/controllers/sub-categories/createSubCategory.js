import SubCategory from "../../models/SubCategory.js"

const createSubCategory = async (req, res) =>{
    try {
        const newSubCategory = new SubCategory(req.body)
        await newSubCategory.save()
        return res.status(201).json({
            success: true,
            response: newSubCategory,
            message: "Subcategory created"
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            response: null,
            message: error.message
        })
        
    }
}

export default createSubCategory