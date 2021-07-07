const express = require('express') //this returns an object
const app = express(); //app is inst of onject

const PORT = process.env.PORT || 3000
const mainRouter = require('./routes/route')
app.use(express.static('public'));

app.use(mainRouter);

app.listen(3000, ()=>{
    console.log(`listening on PORT ${PORT}`);
})

 
