import Product from "../../models/Products.js"

const createProduct = async (req, res) =>{
    try {
        const newProduct = new Product(req.body)
        await newProduct.save()
        return res.status(201).json({
            success: true,
            response: newProduct,
            message: "Product created"
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            response: null,
            message: error.message
        })
        
    }
}

export default createProduct
