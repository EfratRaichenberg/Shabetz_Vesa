const mysql = require('mysql');

var mysqlConnection = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'shabetz_vesa',
      multipleStatements:true
    }
  );
  mysqlConnection.connect(error => {
        if (error) throw error;
        console.log("Successfully connected to the database.");
    });

  module.exports=mysqlConnection;