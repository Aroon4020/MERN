const logger = (req,res,next) =>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method , url , time);
    next()
}

module.exports = logger

//You could also chain other middleware here by calling the next() method.