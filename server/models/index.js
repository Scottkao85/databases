var db = require('../db');




module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (queryParams) {
      // var query = 'SELECT ?? FROM ??';
      // db.query(query, queryParams, function(){});
    },
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

