// Create web server
// Create a route for comments
// When a user visits /comments, send back a response that says "This is the comments page"
// Listen for incoming requests on port 3000
// Print a message to the console to let us know that the server is running
// Test that your server is working by visiting http://localhost:3000/comments in your web browser

// Require the 'http' module
const http = require('http');

// Create a web server
const server = http.createServer((req, res) => {
  // Create a route for comments
  if (req.url === '/comments') {
    // Send back a response that says "This is the comments page"
    res.write('This is the comments page');
    res.end();
  }
});

// Listen for incoming requests on port 3000
server.listen(3000, () => {
  // Print a message to the console to let us know that the server is running
  console.log('Server is running');
});

// Test that your server is working by visiting http://localhost:3000/comments in your web browser

// Path: index.js
// Create web server
// Create a route for the home page
// When a user visits /, send back a response that says "This is the home page"
// Listen for incoming requests on port 3000
// Print a message to the console to let us know that the server is running
// Test that your server is working by visiting http://localhost:3000/ in your web browser

// Require the 'http' module
const http = require('http');

// Create a web server
const server = http.createServer((req, res) => {
  // Create a route for the home page
  if (req.url === '/') {
    // Send back a response that says "This is the home page"
    res.write('This is the home page');
    res.end();
  }
});

// Listen for incoming requests on port 3000
server.listen(3000, () => {
  // Print a message to the console to let us know that the server is running
  console.log('Server is running');
});

// Test that your server is working by visiting http://localhost:3000/ in your web browser

// Path: index.js
// Create web server
// Create a route for the home page
// When a user visits /, send back a response