'use strict';

var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var port = process.env.PORT || 3000;
var Adjective = require('./lib/adjective.js');
var Verb = require('./lib/verb.js');
var Noun = require('./lib/noun.js');
var getRandomWord = require('./lib/getRandomWord.js');
var postWord = require('./lib/postWord.js');
var Favorite = require('./lib/favorite.js');
var postFavorite = require('./lib/postFavorite.js')

var adjective = new Adjective();
var verb = new Verb();
var noun = new Noun();
var favorite = new Favorite();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/app/'));



app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjective));
});

app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb));
});

app.get('/noun', function(req, res) {
  res.json(getRandomWord(noun));
});

app.get('/favorites', function(req, res){
  res.json(favorite);
});

app.post('/adjective', function(req, res) {
  var word = postWord(req.body.word, adjective);
  res.json(word);
});

app.post('/noun', function(req, res) {
  var word = postWord(req.body.word, noun);
  res.json(word);
});

app.post('/verb', function(req, res) {
  var word = postWord(req.body.word, verb);
  res.json(word);
});

app.post('/favorites', function(req, res){
  var favoriteString = postWord(req.body.favoriteString, favorite);
  res.json(favoriteString);
});

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.listen(port, function() {
  console.log('server starting. available at http://localhost:' + port);
});

// app.get('/', function(req, res) {
//   res.send('hello, universe');
// });
