const http = require('http')

const port = 3000

http
.createServer((req,res) =>{
    res.writeHead(200,{"Content-Type": "text/html"});
    res.write("<h1>Hello ,this is my first server</h1>");
    res.end()

})
.listen(port,()=>{
    console.log(`Nodejs server started on port ${port}`);

});

