// Create the express router to handle our home requests
var express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
    res.send('Welcome to our Site!');
});
module.exports = router;