/*  **********  REQUIREMENTS  **********  */
const router = require('express').Router();

// Routes
router.get('/', (req, res) => {
  console.log('main page');
  res.send(`<h1>This is the main page.</h1>`);
});

router.get('/about', (req, res) => {
  console.log('about');
  res.send(`<h1>This is the about page.</h1>`);
});

router.get('/blog', (req, res) => {
  console.log('blog');
  res.send(`<h1>This is my first blog post.</h1>`);
}); 

router.get('/faqs', (req, res) => {
  console.log('faqs');
  res.send(`<h1>This is the faqs page.</h1>`);
});

/*  **********  EXPORTS **********  */
module.exports = router;
