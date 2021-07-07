const http = require("http");


const server = http.createServer((req,res) => {
    if(req.url = "/"){
        res.end("hlo");
    }
    else if(req.url = "/about"){
        res.end("ABOUT");
    }
    
});
server.listen(8080, "127.0.0.1", () => {
        console.log("Listening");
});