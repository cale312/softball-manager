const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const connectDB = require('./models/connection');
const app = express();

connectDB(app);

app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// change promise library
mongoose.Promise = global.Promise;

// routes
app.get('/', function(req, res) {
  res.render('index', {});
});

app.get('/login', function(req, res) {
  res.render('login');
});

app.post('/login', function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  res.redirect('/login');
});

const port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});
