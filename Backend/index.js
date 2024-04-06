const express=require("express");
const cors=require("cors")
require('./db/config');
const Order=require('./db/orders');
const User=require('./db/User');
const app=express();
const Product=require('./db/Product');
const Table=require('./db/Table');
app.use(express.json());
app.use(cors());

app.post("/form",async(req,resp)=>{
    let user=new User(req.body);
    let result=await user.save();
    resp.send(result);
});

app.post("/order",async(req,resp)=>{
    let order=new Order(req.body);
    let result=await order.save();
    resp.send(result);
})
app.post("/add-product",async(req,resp)=>{
    let product=new Product(req.body);
    let result=await product.save();
    resp.send(result);
})
app.post("/add-table",async(req,resp)=>{
    let table=new Table(req.body);
    let result=await table.save();
    resp.send(result);
})
app.get("/kitchen",async(req,resp)=>{
    let orders=await Order.find();
    if(orders.length>0){
        resp.send(orders);
    }
    else{
        resp.send({result:"No Orders availaible"});
    }
})
app.get("/Menu",async(req,resp)=>{
    let products=await Product.find();
    // if(products.length>0){
    //     resp.send(products);
    // }
    // else{
    //     resp.send({result:"No Products found"});
    // }
    resp.send(products);
    
});
app.get("/table",async(req,resp)=>{
    let tables=await Table.find();
    if(tables.length>0){
        resp.send(tables);
    }
    else{
        resp.send({result:"No tables availaible"});
    }

})
app.delete("/product/:id",async (req,resp)=>{
    const result=await Product.deleteOne({_id:req.params.id});
    resp.send(result);
});
app.listen(5000);
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
app.post("/add-pdata",upload.single("img"),async(req,resp)=>{
  console.log(req.body);
  let product=new Product(req.body);
    let result=await product.save();
    resp.send(result);
})