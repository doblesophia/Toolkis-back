import User from "../../models/User.js";



 const signinToken = async (req, res, next)=>{
    try {
       
        let user = await User.findOneAndUpdate({ email: req.user.email }, { online: true }, { new: true });

        const userData = {
            email: user.email,
            photo: user.photo,
            role: user.role,
            token: req.token,
            
        };

        return res.status(200).json({
            response: {user: userData },
            message: 'User signed in with token',
            success: true
        });
    } catch (error) {
        next(error);
    }
}

export default signinToken