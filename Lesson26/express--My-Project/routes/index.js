var express = require('express');
var router = express.Router();

//Import the module
var mongoose = require('mongoose');

//Set up default db connection
var mongoDB = 'mongodb://127.0.0.1/june_db';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//get the default conection 
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));
var Schema = mongoose.Schema;
var SuperHeroSchema = new Schema({
  name: String,
  movies: Number
});
var superheroModel = mongoose.model('superheroColl', SuperHeroSchema);

/* GET home page. */
router.get('/', function (req, res, next) {
  var myData = new superheroModel({ name: 'Hulk', movies: 3 });
  myData.save(function (err) {
    if (err)
      console.log('err');
  });

  superheroModel.find({ 'name': 'Hulk' }, 'name movies', function (err, result) {
    console.log(result);
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
