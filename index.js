const http = require('http');
const fs = require('fs');   // fs: filesystem => CRUD
const { Http2ServerRequest } = require('http2');

http.createServer((req, res) => {
    fs.readFile('./html/demo.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(3020);