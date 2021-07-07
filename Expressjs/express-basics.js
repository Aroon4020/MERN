const express = require('express');
const app = express();
const path =require('path')
//setup static middleware
//static files that server does not have to change
app.use(express.static('./public'))
//adding to static asset
//app.get('/',(req,res)=>{
//    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
//})

//server side rendering


app.get('/',(req,res)=>{
    res.status(200).send("<h1>Home page</h1>")
})

app.get('/about',(req,res)=>{
    res.status(200).send("<h1>About page</h1>")
})

app.all('*',(req,res)=>{
    res.status(404).send("<h1>Resource Not Found</h1>")
})

app.listen(5000, ()=>{
    console.log('server is running on port 5000...');
})
//method used in express
//app.get: read data
//app.put: update
//app.post: insert
//app.delete
//app.all : 404 response
//app.use=> middleware
//app.listen