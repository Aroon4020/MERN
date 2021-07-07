const authorize = (req,res,next) =>{
    console.log('authorize');
    next()
}
module.exports = authorize

//You could also chain other middleware here by calling the next() method.