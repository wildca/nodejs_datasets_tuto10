var http = require('http');

const port = 8000 || process.env.PORT; 

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
}).listen(port, () => {
    console.log(`server listening on port: ${port}`)
});