const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/olypics",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology: true
//returns promise if promise succefull    
}).then(() =>{ 
    console.log("connection successfull");
// if promise is not successfull
}).catch((e) =>{
    console.log("no connection");
})