import http from 'node:http';

const port = 3000;

const server = http.createServer((req, res) => {
    res.end("server is running");
})

server.listen(port, () => {
    console.log(`Esto no funcionaba  ${port}`);
})