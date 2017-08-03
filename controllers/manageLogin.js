// check if the username already exists in the database
// if it does not render page to create a team
// if it does render page with current team stats
//


module.exports = function(name, fn) {

  const managers = require('../models/newManagerModel');

  managers.findOne({
    fullName: name
  }).then(function(result) {
    if (result) {
      return 'exist'
    } else {
      managers.create({
        fullName: name
      }).then(function(result) {
        if (result) {
          return 'register'
        }
      });
    }
  });
}
