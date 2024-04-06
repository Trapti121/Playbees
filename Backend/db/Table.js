const mongoose=require('mongoose');
const tableSchema=new mongoose.Schema({
    id: String,
    Capacity:String,
    Status:String,
});
module.exports=mongoose.model("tables",tableSchema);