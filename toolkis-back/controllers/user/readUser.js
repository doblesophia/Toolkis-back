import User from "../../models/User.js";

export default async function (req, res) {
    try {
    const user = await User.find()
        return res.status(200).json({
                success: true,
                response: 'ok',
                message : '/user',
                user: user
        });
    } catch (error) {
      console.log(error)
    }
  }