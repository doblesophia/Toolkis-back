import { Schema, model } from 'mongoose'

let collection = 'users'            
let schema = new Schema({     
    name: {type:String,required:true},      
    email: { type:String,required:true},
    password: { type:String, required: true },
    photo: { type:String, required: false},
    role: { type:Number,default:1 },
    online: { type:Boolean,default:false },
    verified: { type:Boolean,default:false },    
    verify_code: { type:String },
    telephone: {type: Number, required: false}
},{
    timestamps:true
})

let User = model(collection,schema)
export default User