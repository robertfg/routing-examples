/*  **********  REQUIREMENTS  **********  */
const router = require('express').Router();

// This sets up a simple router: you'll go to localhost:2907/blog; was app.use in src/server.js
router.use('/', (req, res, next) => {
  if ( req.method !== 'GET'  ||  req.url !== '/' ) {
    console.log('pass along');
    return next();
  }
  console.log('main page');
  res.send(`<h1>This is the main page.</h1>`);
});

router.use('/about', (req, res) => {
  console.log('about');
  res.send(`<h1>This is the about page.</h1>`);
});

router.use('/blog', (req, res) => {
  console.log('blog');
  res.send(`<h1>This is my first blog post.</h1>`);
}); 

router.use('/faqs', (req, res) => {
  console.log('faqs   ');
  res.send(`<h1>This is the faqs page.</h1>`);
});

/*  **********  EXPORTS **********  */
module.exports = router;
