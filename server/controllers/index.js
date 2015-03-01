var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get(function(err, results){
        // error handling
        res.json(results);
      });
    },
    // a function which handles posting a message to the database
    post: function (req, res) {
      var params = [ req.body.message, req.body.username, req.body.roomname ];
      models.messages.post(params, function(err, results){
        // error handling
        res.sendStatus(201);
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results){
        // error handling
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.username];
      models.user.post(params, function(err, results){
        // error handling
        res.sendStatus(201);
      });
    }
  },
};

