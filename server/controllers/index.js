var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      // call models.get(param, function(){
        // on success of models.get, this is what we want to have happen
      // });
      // var params = req.????;
    },
    // a function which handles posting a message to the database
    post: function (req, res) {
      // we need to know what table to post to <--- NOPE we already know, because route brought us here, inside of messages

    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

