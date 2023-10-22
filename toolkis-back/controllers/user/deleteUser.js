import User from '../../models/User.js';

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete({_id: req.params.id});

    if (!deletedUser) {
      return res.status(404).json({ message: 'Product not found' });
    }else{
      res.status(200).json({ message: 'Product deleted successfully', deletedUser })
    }

  } catch (error) {
    console.error("Product couldn't be deleted:", error);
    res.status(500).json({ message: 'Server internal error' });
  }
};

export default deleteUser;