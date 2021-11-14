const mysql = require('mysql');

const mysqlConnection = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'shabetz_vesa',
      multipleStatements:true
    }
  );

  module.exports={mysqlConnection}