const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    id: String,
    title: String,
    category:String,
    price: Number,
    image: String,
    desc:String
});
module.exports=mongoose.model("products",productSchema);