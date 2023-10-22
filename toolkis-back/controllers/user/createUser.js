import User from '../../models/User.js'

async function createUser (req, res, next){

   const {
        name,
        email,
        password,
        photo,
        role,
        telephone
    } = req.body

    try {
        const newUser = await User.create({
            name,
            email,
            password,
            photo,
            role,
            telephone
        })
        res.json({
            response: newUser,
            success: true,
            message: "User created succesfully"
        });
        console.log("Cuatro")
    } catch (error) {
        return res.status(400).json({
            success: false,
            response: null,
            message: error.message
        })
    }
}

export default createUser