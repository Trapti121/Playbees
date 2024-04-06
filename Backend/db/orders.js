const mongoose=require('mongoose');

const orderSchema=new mongoose.Schema({
    userId:String,
    name:String,
    table:String,
    totalBill:String
});
module.exports=mongoose.model("bill",orderSchema);