let http = require('http');
let server = http.createServer((req, res) => {
    let url = req.url;
    if (url === "/") {
        res.write('<html>');
        res.write(
            '<head><title>Creating Server</title><head>');
        res.write(
            '<body><h2>Hello from Node.js server!!</h2></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === "/about") {
        res.write('<html>');
        res.write(
            '<head><title>Creating Server</title><head>');
        res.write(
            '<body><h2>About Node.js server!!</h2></body>');
        res.write('</html>');
        return res.end();
    }
   /* if (url === "/") {                                       //it will be not in html format
        res.write(
            '<h2>Hello from Node.js server!!</h2>');
        return res.end();
    }
    if (url === "/about") {                                    //it will be
        res.write(
            '<body><h2>About Node.js server!!!</h2></body>');
        return res.end();
    } */
});
server.listen(3000, () => {
    console.log("Server listening on port 3000");
});