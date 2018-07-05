/*  **********  REQUIREMENTS  **********  */
const express = require('express');
// const router  = require('./routes/index-router-use');
const router  = require('./routes/index-router-get');

/* ***** VARIABLES ***** */
const hostname = '127.0.0.1';
const port = 3000;

// Create application object
const app = express();

// Use new router.
app.use(router);

// Start the server
app.listen( port, hostname, () => {
  console.log(`Server is listening on port ${port}.`);
});
