let mysql = require('mysql');
let config = require('./config.js');
let connection = mysql.createConnection(config);

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');

    let sql='INSERT INTO type_of_volunteering (Type_Id,Description) VALUES(23,"hello world") ';
    connection.query(sql);
    
  });

  
  // connection.end(function(err) {
  //   if (err) {
  //     return console.log('error:' + err.message);
  //   }
  //   console.log('Close the database connection.');
  // });
