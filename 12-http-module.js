const http = require('http');

const server = http.createServer((req, res) => {
   if (req.url === '/') {
      res.write('Welcome to home page');
   }
   else if (req.url === '/about') {
      res.write('Welcome to about page');
   }
   else {
      res.write(`<h1>Hey, your out!</h1`)
   };
   res.end();
});

server.listen(5000);