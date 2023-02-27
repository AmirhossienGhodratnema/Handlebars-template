const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');


// My module
const { router } = require('./router');    // All route.
const { notFoundPage, errorHandler } = require('./errors/errorHandler');    // Error handlers.


// Middleware options.
app.use(express.json());    // Set body-parser json.
app.use(express.urlencoded({ extended: true }));    // Set body-parser urlencoded.
app.use(express.static('public'));    // Set static files.


// Set views options and template engine.
app.set('view engine', 'hbs');    // Set hbs template engine.
app.set('views', path.join(__dirname, 'views'));    // Set dir views.
hbs.registerPartials(path.join(__dirname, 'views/partials'));    // Set partials path.


// Route
app.use('/', router);    // Main routers.


// Error handlers
app.use(notFoundPage);    // Not found error.
app.use(errorHandler);    // Interval server errors handler.


// Create server on port 8000.
app.listen(8000, () => console.log('Running server on port 8000...'));