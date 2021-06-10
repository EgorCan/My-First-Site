const express = require('express');
const app = express();

const home = require('./home');
const products = require('./products');

app.use('/', home);
app.use('/myproducts', products);
app.listen(3002, function () {
    console.log('I am listening ');
});