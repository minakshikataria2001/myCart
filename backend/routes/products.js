const express = require("express");
const router = express.Router();
const Product = require("../models/product")
// mongo = require('mongodb')

router.get('/',async(req,res)=>{
// res.send("get request");
try{

   const products = await Product.find(); 
   res.json(products);
}
catch(err){
res.send("Error:"+ err)
}
})

router.post('/params',async(req,res)=>{
    const product = new Product({
        name: req.body.name,
        price : req.body.price,

    })
    try{
   const a1 = await product.save();
   res.json(a1);
    }


    catch(err){
    res.send("Error:"+err);
    }
})
router.patch('/:id',async(req,res)=>{
    try{
    const product = await Product.findById(req.params.id);
    if(product != null){
        
        
        product.Added = req.body.Added;
        product.disable = req.body.disable;
        product.quantity = req.body.quantity;
        const a1 = await product.save();
        res.json(a1);
    }
    else{
        res.send(" not found");
        }
        
    }


    catch(err){
    res.send("Error:"+err);
    }
})
router.delete('/:id',async(req,res)=>{
    try{
    const product = await Product.findById(req.params.id);
    
    if(product != null){
        const delStudent = await  Product.findByIdAndDelete(req.params.id);
        res.send(delStudent);
        
    }
    else{
        res.send("alien not found");
        }
        
    }


    catch(err){
    res.send("Error:"+err);
    }
})



module.exports = router;