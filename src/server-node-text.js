/* ***** REQUIREMENTS ***** */
const http = require('http');

/* ***** VARIABLES ***** */
const hostname = '127.0.0.1';
const port = 3000;

// Create Server
const server = http.createServer( (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  switch ( req.url ) {
    case '/':
      res.write('Welcome to my website.  Prepare to be dazzled.\n\n');
      break;
    case '/about':
      res.write('Welcome to the about page.\n\n');
      break;
    case '/blog':
      res.write('Welcome to my first blog post.\n\n');
      break;
    case '/faqs':
      res.write('Welcome to the faqs page.\n\n');
      break;
  }
  res.end('Hello World!\n');
});

// Listen
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
