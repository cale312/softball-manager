module.exports = function(app) {

  const managers = require('../models/newManagerModel')

  app.get('/login', function(req, res) {
    res.render('login');
  });

  app.post('/login', function(req, res) {
    const name = req.body.username;
    managers.findOne({
      fullName: name
    }).then(function(result){
      if (result) {
        res.render('team', {manager: name});
      } else {
        managers.create({
          fullName: name
        });
        res.render('select');
      }
    });
  });
}
