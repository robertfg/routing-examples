/*  **********  REQUIREMENTS  **********  */
const express = require('express');

/* ***** VARIABLES ***** */
const hostname = '127.0.0.1';
const port = 3000;

// Create application object
const app = express();

// Set up your routes
app.get('/', (req, res) => {
  console.log(`main: ${req.url}`);
  res.send(`
    <h1>URL: ${req.url}</h1>
    <p>Welcome to my website.  Prepare to be dazzled.</p>
    <p>Hello world!</p>
  `);
});

// You can also use res.write.  res.send = res.write + res.end
app.get('/about', (req, res) => {
  console.log(req.url);
  res.write(`<h1>URL: ${req.url}</h1>`);
  res.write('<p>Welcome to the about page.</p>');
  res.write('<p>Are you enjoying yourself?</p>');
  res.end(`<p>End about page.</p>`);
});

app.get('/blog', (req, res) => {
  console.log(req.url);
  res.send(`
    <h1>URL: ${req.url}</h1>
    <p>Welcome to my first blog post.</p>
    <p>End blog posts.</p>
  `);
});

app.get('/faqs', (req, res) => {
  console.log(req.url);
  res.send(`
    <h1>URL: ${req.url}</h1>
    <p>Welcome to the FAQs page.</p>
    <p>End FAQs.</p>
  `);
});

// Start the server
app.listen( port, hostname, () => {
  console.log(`Server is listening on port ${port}.`);
});
