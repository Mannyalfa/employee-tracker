// Database Module
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  // port: 3306,
  // Your MySQL username
  user: 'root',
  // Your MySQL password
  password: 'YourPasswordHere',
  database: 'employee_trackerDB'
});

module.exports = connection;