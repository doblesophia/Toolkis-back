import Product from '../../models/Products.js';

const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete({_id: req.params.id});

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }else{
      res.status(200).json({ message: 'Product deleted successfully', deletedProduct })
    }

  } catch (error) {
    console.error("Product couldn't be deleted:", error);
    res.status(500).json({ message: 'Server internal error' });
  }
};

export default deleteProduct;