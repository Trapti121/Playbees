const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    phoneNumber: String,
    table:String
});
module.exports=mongoose.model("users",userSchema);