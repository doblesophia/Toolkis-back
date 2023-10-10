import SubCategory from "../../models/SubCategory.js"

const updateSubCategory = async(req,res,next)=> {
        try {
            let updateSubCategory = await SubCategory.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            )
            if (updateSubCategory) {
                return res.status(200).json({ response: updateSubCategory,
                message: "Subcategory successfully updated"})
            } else {
                return res.status(404).json({ response: 'Subcategory not found' })
            }    
        } catch(error) {
            next(error)
        }
    }



export default updateSubCategory