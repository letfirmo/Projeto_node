const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, World!</h1><p>This is a simple HTML response from a Node.js server. á ã ç</p>');
})

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})