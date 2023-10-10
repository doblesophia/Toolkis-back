import Category from '../../models/Category.js';

const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete({_id: req.params.id});

    if (!deletedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }else{
      res.status(200).json({ message: 'Category deleted successfully', deletedCategory })
    }

  } catch (error) {
    console.error("Category couldn't be deleted:", error);
    res.status(500).json({ message: 'Server internal error' });
  }
};

export default deleteCategory;