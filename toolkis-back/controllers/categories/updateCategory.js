import Category from "../../models/Category.js"

const updateCategory = async(req,res,next)=> {
        try {
            let updateCategory = await Category.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            )
            if (updateCategory) {
                return res.status(200).json({ response: updateCategory,
                message: "Category successfully updated"})
            } else {
                return res.status(404).json({ response: 'not found' })
            }    
        } catch(error) {
            next(error)
        }
    }



export default updateCategory