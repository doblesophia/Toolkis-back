import User from "../../models/User.js"

const updateUser = async(req,res,next)=> {
        try {
            let upd = await User.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            )
            if (upd) {
                return res.status(200).json({ response: upd,
                message: "User successfully updated" })
            } else {
                return res.status(404).json({ response: 'not found' })
            }    
        } catch(error) {
            next(error)
        }
    }



export default updateUser