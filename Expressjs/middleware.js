const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorise')
//req => middleware => res

//applies the middleware to our routes
//app.use=> way to register middleware
//single middleware
//app.use(logger)

app.use([authorize, logger])

app.get('/', (req,res)=>{
    //const method = req.method
    //const url = req.url
    //const time = new Date().getFullYear()
    //console.log(method , url , time);
    res.send('<h1>Home</h1>');
})

app.get('/about',(req,res)=>{
    res.send('<h1>About</h1>');
})

app.get('/api/product',(req,res)=>{
    res.send('<h1>About</h1>');
})
app.get('/api/item',(req,res)=>{
    res.send('<h1>About</h1>');
})
app.listen(5000, ()=>{
    console.log('server is listening on PORT 5000....');
})
console.log();