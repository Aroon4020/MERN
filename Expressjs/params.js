const express = require('express')
const app = express()
const {products} = require('./data')

//all data sending 
//app.get('/', (req,res)=>{
//    res.json(products)
//})

//selective data exluding price and description
app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(newProducts)
})

//req.params=> show the every thing we type in URL
// if you have the route /user/:name, then the “name” property is available as req.params.name. This object defaults to {}.
app.get('/api/products/:productID', (req,res)=>{
    console.log(req.params);
    console.log(req.path);
    const {productID}= req.params;
    const singleProduct = products.find(
        (product)=> product.id === Number(productID)
    )
    if(!singleProduct){
        return res.status(404).send('product does not exist')
    }

    return res.json(singleProduct) 
})

app.listen(5000, (req,res)=>{
    console.log('server is listening on port 5000');
})