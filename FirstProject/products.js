// Create the express router to handle our products requests
var express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
    res.send('On this call we show a list of products');
});
router.post('/:id', function (req, res) {
    res.send('On this call we create a product');
});
router.put('/:id', function (req, res) {
    res.send('On this call we update a product');
});
router.delete('/:id', function (req, res) {
    res.send('On this call we delete a product');
});
module.exports = router;