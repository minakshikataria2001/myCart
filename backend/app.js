const Cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const url = 'mongodb://127.0.0.1/productsDb';

const app = express();
const allowedOrigins = ["http://localhost:3000"]; // specify the allowed origins
app.use(Cors({ origin: allowedOrigins }));

mongoose.connect(url,{useNewUrlParser:true});
const con = mongoose.connection;

con.on('open',function(){
    console.log("connection successful");
})

app.use(express.json());

const productsRouter = require('./routes/products');

app.use('/products',productsRouter);

 app.listen(5000, function(){
    console.log("server started");
 })