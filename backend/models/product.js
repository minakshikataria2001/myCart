const mogoose = require("mongoose");

const productSchema = new mogoose.Schema({
   
       name:{
        type:String,
         required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        default:1
         
        
    },
    Added:{
        type:String,
        required:true,
        default:"Add to Cart"
    },
    disable:{
        type:Boolean,
        required:true,
        default: false
    },
})
 

module.exports = mogoose.model('products',productSchema);