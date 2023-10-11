import Products from "../../models/Products.js"

const updateProduct = async(req,res,next)=> {
        try {
            let upd = await Products.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            )
            if (upd) {
                return res.status(200).json({ response: upd,
                message: "Product successfully updated" })
            } else {
                return res.status(404).json({ response: 'not found' })
            }    
        } catch(error) {
            next(error)
        }
    }



export default updateProduct