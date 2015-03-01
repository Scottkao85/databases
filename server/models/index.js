var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      //
      var queryStr = "select messages.id, messages.text, messages.roomname, users.username \
                      from messages left outer join users on (messages.userid = users.id) \
                      order by messages.id desc";
      db.query(queryStr, function(err, results){
        callback(err, results);
      });
    },
    post: function (params, callback) {
      var queryStr = 'INSERT INTO messages (text, userid, roomname) \
                      VALUE (?, (SELECT id FROM users WHERE username = ? LIMIT 1), ?)';
      db.query(queryStr, params, function(err, results){
        callback(err, results);
      });
    }
  },

  users: {
    get: function (callback) {
      var queryStr = 'SELECT * FROM users';
      db.query(queryStr, function(err, results){
        callback(err, results);
      });
    },
    post: function (params, callback) {
      var queryStr = 'INSERT INTO users (username) VALUES (?)';
      db.query(queryStr, params, function(err, results){
        callback(err, results);
      });
    }
  }
};

