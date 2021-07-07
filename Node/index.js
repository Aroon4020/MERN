//Http Module => The HTTP module creates an HTTP server that listens to server ports and gives a response back to the client.

const http = require('http')
const app = http.createServer((req, res) => {
    res.end('<h1>Hello From SERVER</h1>');
    res.end('Welcome')
    

})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Listenin on PORT ${PORT}`);
})