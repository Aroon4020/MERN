const express = require('express')
const app = express()
let people = require('./data')

//HTTP methods used to request to server 

//get data: read

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

//post: insert data

//put: update data

//delete: delete data
app.listen(5000, ()=>{
    console.log('server is listening on PORT 5000....');
})