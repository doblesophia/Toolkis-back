import  mongoose  from "mongoose";

const uri_link = "mongodb+srv://pablojerez1122:XsYvdviXnlCjCLfu@toolkis.rc8ugrt.mongodb.net/"
mongoose.connect(uri_link)
.then(()=>console.log('connected to database'))
.catch(err=>console.log(err))