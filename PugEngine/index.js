const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.get('/', function (req, res) {
    res.render('index', { mytitle: 'Hey', message: 'I like to code' });
});

app.listen(3004, function () {
    console.log('I am listening ');
});