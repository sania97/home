@@ -0,0 +1,56 @@
// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
const casestudies = require('./casestudies.json'); // Import your product data from the "productss" file


//const isLocalhost = window.location.hostname === 'localhost';
//const siteURL = isLocalhost ? 'http://localhost:3000' : 'https://sania97.github.io/saniadesign.github.io/';
/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";
/**
 *  App Configuration
 */
app.set("view engine", "pug");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));
app.use('*/css',express.static('public/css'));
app.use('*/js',express.static('public/js'));
app.use('*/images',express.static('public/images'));

/**
 * Routes Definitions
 */

app.get('/', (req, res) => {
  const siteurl = "http://localhost:8000"; // Assuming your server is running on port 3000
  res.render('index', { title: 'Home', casestudies, siteurl });
});

app.get('/work/:slug', (req, res) => {
  const pageSlug = req.params.slug;
  const page = casestudies[pageSlug];


  if (page) {
    res.render(`work/${page.slug}`, { title: 'Work', page, casestudies });
  } else {
    res.status(404).send('Page not found');
  }
});

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });