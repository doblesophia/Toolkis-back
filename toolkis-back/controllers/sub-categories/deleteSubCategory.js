import SubCategory from '../../models/SubCategory.js';

const deleteSubCategory = async (req, res) => {
  try {
    const deletedSubCategory = await SubCategory.findByIdAndDelete({_id: req.params.id});

    if (!deletedSubCategory) {
      return res.status(404).json({ message: 'Subcategory not found' });
    }else{
      res.status(200).json({ message: 'Subcategory deleted successfully', deletedSubCategory })
    }

  } catch (error) {
    console.error("Subcategory couldn't be deleted:", error);
    res.status(500).json({ message: 'Server internal error' });
  }
};

export default deleteSubCategory;