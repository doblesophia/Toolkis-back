import Product from "../../models/Products.js";

export default async function (req, res) {
    try {
    const product = await Product.find()
        return res.status(200).json({
                success: true,
                response: 'ok',
                message : '/products',
                product: product
        });
    } catch (error) {
      console.log(error)
    }
  }