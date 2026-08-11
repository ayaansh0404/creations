const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Newuser@1708', // Replace with your actual MySQL password
  database: 'test'      // Replace with your actual MySQL database name
});

connection.connect();
connection.end();
