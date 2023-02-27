const express = require('express');
const router = express.Router();

// Home page.
router.get("/", (req, res, next) => {
  try {
    const users = [
      {name : 'Amirhossein', lastName : 'Ghodratnema', age : 23},
      {name : 'Martin', lastName : 'Jeef', age : 25},
      {name : 'leeo', lastName : 'besus', age : 27},
    ]
    return res.render('index', {
      title: 'HBS template engine',
      users,
    });

  } catch (error) {
    next(error);
  }

  
});

module.exports = {
  router,
};
