import User from '../models/User.js'
import   bcrypt from 'bcryptjs'

export default async function(req,res,next) {
    const user = await User.findOne({ email: req.body.email })
    const db_pass = user.password
    console.log(db_pass)
    const form_pass = req.body.password
    console.log(form_pass)
    
    if (bcrypt.compareSync(form_pass,db_pass)) {
        return next()
    }
    console.log(bcrypt.compareSync(form_pass,db_pass))
    return res.status(400).json({
        response: null, message: 'Invalid credentials!'
    })
}