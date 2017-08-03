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

// controller functions
const managerLogin = require('./controllers/manageLogin');

// routes
app.get('/', function(req, res) {
  res.render('index', {});
});

// call controller functions
managerLogin(app);

const port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});
