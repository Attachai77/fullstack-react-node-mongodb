const express = require('express');
const mongoose = require('mongoose')
const Product = require('./models/product')

const app = express();
const PORT = "3000";
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/myDB', {useNewUrlParser: true})

app.get('/',(req, res)=>{
     res.send('Hello My App')
})

app.post('/products', async (req, res) => {
     const payload = req.body
     const product = new Product(payload)
     await product.save()
     res.status(201)
     res.json({
          product: product,
          success: true
     })
})

app.get('/products', async (req, res)=>{
     const products = await Product.find()
     res.json({
          products: products,
          success: true
     })
} )

app.listen(3000, () => {
     console.log("server status : running");
     console.log(`run on port : ${PORT}`);
});